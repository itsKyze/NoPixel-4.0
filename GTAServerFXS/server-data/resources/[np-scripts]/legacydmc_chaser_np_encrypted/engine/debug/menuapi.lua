-- WarMenu: A NativeUI-style radial/list menu library for FiveM
WarMenu = {}
WarMenu.__index = WarMenu
WarMenu.debug = false

-- Debug stubs (debug is permanently disabled)
function WarMenu.SetDebugEnabled(enabled) end
function WarMenu.IsDebugEnabled() return false end

-- ===================== INTERNAL STATE =====================

local menuRegistry      = {}        -- all registered menus by id
local activeMenu        = nil       -- currently open menu table
local optionCount       = 0         -- total options drawn this frame
local lastPressedInput  = nil       -- last directional/select input this frame

-- Input key bindings
local keys = {
    down       = 187,
    scrollDown = 242,
    up         = 188,
    scrollUp   = 241,
    left       = 189,
    right      = 190,
    select     = 191,
    accept     = 237,
    back       = 194,
    cancel     = 238,
}

-- Layout constants
local TITLE_HEIGHT          = 0.101
local SUBTITLE_OFFSET_Y     = 0.021
local ROW_HEIGHT            = 0.038
local FONT_TITLE            = 1
local FONT_SCALE_TITLE      = 1.0
local FONT_NORMAL           = 0
local FONT_SCALE_NORMAL     = 0.365
local PADDING_LEFT          = 0.005
local PADDING_RIGHT         = 0.005
local PADDING_TOP           = 0.002
local PADDING_BOTTOM        = 0.005
local SPRITE_WIDTH          = 0.027
local SPRITE_HEIGHT_RATIO   = GetAspectRatio() * 0.027
local SPRITE_MARGIN         = 0.002
local SPRITE_OFFSET_Y       = 0.005
local TOOLTIP_DEFAULT_WIDTH = 0.153

-- Default style applied to all menus unless overridden
local defaultStyle = {
    x                        = 0.0175,
    y                        = 0.025,
    width                    = 0.23,
    maxOptionCountOnScreen   = 10,
    titleVisible             = true,
    titleColor               = {245, 245, 245, 255},
    titleBackgroundColor     = {154, 0,   80,  255},
    titleBackgroundSprite    = nil,
    subTitleColor            = {255, 255, 255, 255},
    textColor                = {245, 245, 245, 255},
    subTextColor             = {245, 245, 245, 255},
    focusTextColor           = {245, 245, 245, 255},
    focusColor               = {31,  144, 133, 255},
    backgroundColor          = {27,  27,  27,  160},
    subTitleBackgroundColor  = {32,  33,  36,  255},
    buttonPressedSound       = {name = "SELECT", set = "HUD_FRONTEND_DEFAULT_SOUNDSET"},
}

-- ===================== INPUT HELPERS =====================

function IsMenuDownPressed()
    return IsControlJustReleased(2, keys.down) or IsControlJustReleased(2, keys.scrollDown)
end

function IsMenuUpPressed()
    return IsControlJustReleased(2, keys.up) or IsControlJustReleased(2, keys.scrollUp)
end

function IsMenuSelectPressed()
    return IsControlJustReleased(2, keys.select) or IsControlJustReleased(2, keys.accept)
end

function IsMenuBackPressed()
    return IsControlJustReleased(2, keys.back) or IsControlJustReleased(2, keys.cancel)
end

-- ===================== INTERNAL UTILITIES =====================

-- Sets a property on a registered menu directly
function SetMenuProperty(menuId, property, value)
    if not menuId then return end
    local menu = menuRegistry[menuId]
    if menu then
        menu[property] = value
    end
end

-- Sets a property on a menu's overrideStyle table (takes priority over style/default)
function SetMenuOverrideStyle(menuId, property, value)
    if not menuId then return end
    local menu = menuRegistry[menuId]
    if menu then
        if not menu.overrideStyle then
            menu.overrideStyle = {}
        end
        menu.overrideStyle[property] = value
    end
end

-- Resolves a style value: overrideStyle > style > defaultStyle
function GetStyleValue(property, menuOverride)
    if not menuOverride then
        menuOverride = activeMenu
    end
    if menuOverride and menuOverride.overrideStyle then
        local v = menuOverride.overrideStyle[property]
        if v ~= nil then return v end
    end
    if menuOverride and menuOverride.style then
        local v = menuOverride.style[property]
        if v then return v end
    end
    return defaultStyle[property]
end

-- Returns the title height offset if the title is visible, otherwise 0
function GetTitleHeightOffset()
    if GetStyleValue("titleVisible") then
        return TITLE_HEIGHT or 0
    end
    return 0
end

-- Deep-copies a table (used when inheriting styles)
function DeepCopyTable(original)
    if type(original) ~= "table" then return original end
    local copy = {}
    for k, v in pairs(original) do
        copy[k] = DeepCopyTable(v)
    end
    return copy
end

-- Opens or closes a menu by id; handles previousMenu and option reset
function SetMenuOpen(menuId, open, keepOption)
    if activeMenu then
        if open then
            if activeMenu.id == menuId then return end
        else
            if activeMenu.id ~= menuId then return end
        end
    end

    if open then
        local menu = menuRegistry[menuId]
        if not activeMenu then
            menu.currentOption = 1
        elseif not keepOption then
            local prevMenu = menuRegistry[activeMenu.id]
            prevMenu.currentOption = 1
        end
        activeMenu = menu
    else
        activeMenu = nil
    end
end

-- ===================== TEXT / DRAW PRIMITIVES =====================

-- Configures text rendering state before a DrawText call
function SetupTextDraw(font, color, scale, centered, rightJustify, dropShadow, wrapLeft, wrapRight)
    SetTextFont(font)
    SetTextColour(color[1], color[2], color[3], color[4] or 255)
    SetTextScale(scale, scale)
    if dropShadow then SetTextDropShadow() end
    if centered then
        SetTextCentre(true)
    elseif rightJustify then
        SetTextRightJustify(true)
    end

    if not wrapLeft then
        wrapLeft = GetStyleValue("x")
    end
    if not wrapRight then
        wrapRight = GetStyleValue("x") + GetStyleValue("width") - PADDING_LEFT
    end
    SetTextWrap(wrapLeft, wrapRight)
end

-- Returns how many lines a string takes at the current text wrap settings
function GetTextLineCount(text, wrapX, wrapY)
    BeginTextCommandLineCount("TWOSTRINGS")
    AddTextComponentString(tostring(text))
    return EndTextCommandGetLineCount(wrapX, wrapY)
end

-- Draws text at a screen position
function DrawMenuText(text, x, y)
    BeginTextCommandDisplayText("TWOSTRINGS")
    AddTextComponentString(tostring(text))
    EndTextCommandDisplayText(x, y)
end

-- Draws a filled rectangle using a color table {r, g, b, a}
function DrawMenuRect(x, y, w, h, color)
    DrawRect(x, y, w, h, color[1], color[2], color[3], color[4] or 255)
end

-- ===================== SCROLL OFFSET =====================

-- Returns the draw index (1-based row on screen) for the current option, or nil if it shouldn't draw
function GetOptionDrawIndex()
    local current = activeMenu.currentOption
    local maxOnScreen = GetStyleValue("maxOptionCountOnScreen")

    if current <= maxOnScreen then
        if optionCount <= maxOnScreen then
            return optionCount
        end
    else
        if optionCount > (current - maxOnScreen) then
            if optionCount <= current then
                return optionCount - (current - maxOnScreen)
            end
        end
    end
    return nil
end

-- ===================== TITLE & SUBTITLE =====================

-- Draws the menu title bar (background sprite or color, then title text)
function DrawMenuTitle()
    if not GetStyleValue("titleVisible") then return end

    local menuX     = GetStyleValue("x")
    local menuW     = GetStyleValue("width")
    local centerX   = menuX + menuW / 2
    local menuY     = GetStyleValue("y")
    local centerY   = menuY + TITLE_HEIGHT / 2
    local sprite    = GetStyleValue("titleBackgroundSprite")

    if sprite then
        DrawSprite(
            sprite.dict, sprite.name,
            centerX, centerY,
            menuW, TITLE_HEIGHT,
            0.0, 255, 255, 255, 255
        )
    else
        DrawMenuRect(centerX, centerY, menuW, TITLE_HEIGHT, GetStyleValue("titleBackgroundColor"))
    end

    if activeMenu.title then
        SetupTextDraw(FONT_TITLE, GetStyleValue("titleColor"), FONT_SCALE_TITLE, true)
        DrawMenuText(activeMenu.title, centerX, menuY + SUBTITLE_OFFSET_Y)
    end
end

-- Draws the subtitle bar (background + text, and option counter if needed)
function DrawMenuSubTitle()
    local menuX     = GetStyleValue("x")
    local menuW     = GetStyleValue("width")
    local centerX   = menuX + menuW / 2
    local menuY     = GetStyleValue("y")
    local titleH    = GetTitleHeightOffset()
    local subY      = menuY + titleH + ROW_HEIGHT / 2

    DrawMenuRect(centerX, subY, menuW, ROW_HEIGHT, GetStyleValue("subTitleBackgroundColor"))

    SetupTextDraw(FONT_NORMAL, GetStyleValue("subTitleColor"), FONT_SCALE_NORMAL, false)
    DrawMenuText(activeMenu.subTitle, menuX + PADDING_LEFT, subY - ROW_HEIGHT / 2 + PADDING_BOTTOM)

    -- Show "currentOption / totalOptions" counter when list exceeds screen
    if optionCount > GetStyleValue("maxOptionCountOnScreen") then
        SetupTextDraw(FONT_NORMAL, GetStyleValue("subTitleColor"), FONT_SCALE_NORMAL, false, false, false, true)
        local counterText = tostring(activeMenu.currentOption) .. " / " .. tostring(optionCount)
        DrawMenuText(counterText, menuX + menuW, subY - ROW_HEIGHT / 2 + PADDING_BOTTOM)
    end
end

-- ===================== OPTION ROW =====================

-- Draws a single option row with main text and optional sub-text
function DrawOptionRow(labelText, subText)
    local drawIndex = GetOptionDrawIndex()
    if not drawIndex then return end

    local isFocused     = (activeMenu.currentOption == optionCount)
    local bgColor       = isFocused and GetStyleValue("focusColor")    or GetStyleValue("backgroundColor")
    local textColor     = isFocused and GetStyleValue("focusTextColor") or GetStyleValue("textColor")
    local subTextColor  = isFocused and GetStyleValue("focusTextColor") or GetStyleValue("subTextColor")
    local dimText       = not isFocused

    local menuX = GetStyleValue("x")
    local menuW = GetStyleValue("width")
    local menuY = GetStyleValue("y")
    local centerX = menuX + menuW / 2
    local rowY = menuY + GetTitleHeightOffset() + ROW_HEIGHT + (ROW_HEIGHT * drawIndex) - ROW_HEIGHT / 2

    DrawMenuRect(centerX, rowY, menuW, ROW_HEIGHT, bgColor)

    SetupTextDraw(FONT_NORMAL, textColor, FONT_SCALE_NORMAL, false, dimText)
    DrawMenuText(labelText, menuX + PADDING_LEFT, rowY - ROW_HEIGHT / 2 + PADDING_BOTTOM)

    if subText then
        SetupTextDraw(FONT_NORMAL, subTextColor, FONT_SCALE_NORMAL, false, dimText, false, true)
        DrawMenuText(subText, menuX + PADDING_LEFT, rowY - ROW_HEIGHT / 2 + PADDING_BOTTOM)
    end
end

-- ===================== PUBLIC API =====================

-- Creates a new menu and registers it
function WarMenu.CreateMenu(menuId, title, subTitle, style)
    local menu = {
        id             = menuId,
        previousMenu   = nil,
        currentOption  = 1,
        title          = title,
        subTitle       = subTitle and string.upper(subTitle) or "INTERACTION MENU",
    }
    if style then menu.style = style end
    menuRegistry[menuId] = menu
end

-- Creates a child menu that inherits properties from a parent menu
function WarMenu.CreateSubMenu(menuId, parentId, subTitle, style)
    local parent = menuRegistry[parentId]
    if not parent then return end

    local inheritedSubTitle = subTitle and string.upper(subTitle) or parent.subTitle
    WarMenu.CreateMenu(menuId, parent.title, inheritedSubTitle)

    local menu = menuRegistry[menuId]
    menu.previousMenu = parentId

    if parent.overrideStyle then
        menu.overrideStyle = DeepCopyTable(parent.overrideStyle)
    end

    if style then
        menu.style = style
    elseif parent.style then
        menu.style = DeepCopyTable(parent.style)
    end
end

-- Returns the id of the currently open menu, or nil
function WarMenu.CurrentMenu()
    if activeMenu and activeMenu.id then
        return activeMenu.id
    end
    return nil
end

-- Opens a menu by id (plays select sound, preserves option if requested)
function WarMenu.OpenMenu(menuId)
    if not menuId then return end
    local menu = menuRegistry[menuId]
    if menu then
        PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true)
        SetMenuOpen(menuId, true, true)
    end
end

-- Returns true if the given menu is currently open
function WarMenu.IsMenuOpened(menuId)
    if activeMenu then
        return activeMenu.id == menuId
    end
    return false
end

-- Alias: Begin is the same as IsMenuOpened (used as a frame-start gate)
WarMenu.Begin = WarMenu.IsMenuOpened

-- Returns true if any menu is currently open
function WarMenu.IsAnyMenuOpened()
    return activeMenu ~= nil
end

-- Always returns false (reserved for future close-animation support)
function WarMenu.IsMenuAboutToBeClosed()
    return false
end

-- Closes the currently open menu and plays the quit sound
function WarMenu.CloseMenu()
    if activeMenu then
        SetMenuOpen(activeMenu.id, false)
        optionCount = 0
        lastPressedInput = nil
        PlaySoundFrontend(-1, "QUIT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true)
    end
end

-- Draws a tooltip/help box for the given text, optionally left-aligned
function WarMenu.ToolTip(text, width, leftSide)
    if not activeMenu then return end
    local drawIndex = GetOptionDrawIndex()
    if not drawIndex then return end

    if not width then width = TOOLTIP_DEFAULT_WIDTH end

    local anchorX
    if not leftSide then
        anchorX = GetStyleValue("x") + GetStyleValue("width") + width / 2 + PADDING_LEFT
    else
        anchorX = GetStyleValue("x") - width / 2 - PADDING_LEFT
    end

    local wrapLeft  = anchorX - width / 2 + PADDING_LEFT
    local wrapRight = wrapLeft + width - PADDING_BOTTOM * 2

    SetupTextDraw(FONT_NORMAL, GetStyleValue("textColor"), FONT_SCALE_NORMAL, false, true, false, wrapLeft, wrapRight)

    local menuY = GetStyleValue("y")
    local lineCount = GetTextLineCount(text, wrapLeft, menuY)
    local textH = GetTextScaleHeight(FONT_SCALE_NORMAL, FONT_NORMAL) * (lineCount + 1) + PADDING_BOTTOM

    local baseY = menuY + GetTitleHeightOffset() + ROW_HEIGHT * drawIndex
    local boxY  = baseY + textH / 2

    DrawMenuRect(anchorX, boxY, width, textH, GetStyleValue("backgroundColor"))

    local textY = boxY - textH / 2 + PADDING_BOTTOM
    DrawMenuText(text, wrapLeft, textY)
end

-- Draws a basic button row; returns true if the button was pressed
function WarMenu.Button(labelText, subText)
    if not activeMenu then return end
    optionCount = optionCount + 1
    DrawOptionRow(labelText, subText)

    local pressed = false
    if activeMenu.currentOption == optionCount then
        if lastPressedInput == keys.select then
            pressed = true
            local sound = GetStyleValue("buttonPressedSound")
            PlaySoundFrontend(-1, sound.name, sound.set, true)
        elseif lastPressedInput == keys.left or lastPressedInput == keys.right then
            PlaySoundFrontend(-1, "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", true)
        end
    end
    return pressed
end

-- Draws a button with a sprite icon on the right side; returns the button pressed result
function WarMenu.SpriteButton(labelText, spriteDict, spriteName, r, g, b, a)
    if not activeMenu then return end

    local buttonResult = WarMenu.Button(labelText)
    local drawIndex = GetOptionDrawIndex()
    if not drawIndex then return end

    if not HasStreamedTextureDictLoaded(spriteDict) then
        RequestStreamedTextureDict(spriteDict)
    end

    local menuX = GetStyleValue("x")
    local menuW = GetStyleValue("width")
    local menuY = GetStyleValue("y")

    local spriteX = menuX + menuW - SPRITE_WIDTH / 2 - SPRITE_MARGIN
    local rowY    = menuY + GetTitleHeightOffset() + ROW_HEIGHT + (ROW_HEIGHT * drawIndex) - SPRITE_HEIGHT_RATIO / 2 + SPRITE_OFFSET_Y

    DrawSprite(
        spriteDict, spriteName,
        spriteX, rowY,
        SPRITE_WIDTH, SPRITE_HEIGHT_RATIO,
        0.0,
        r or 255, g or 255, b or 255, a or 255
    )
    return buttonResult
end

-- Draws an input button that opens an on-screen keyboard when selected; returns pressed, inputResult
function WarMenu.InputButton(labelText, keyboardTitle, defaultText, maxLength, subText)
    if not activeMenu then return end

    local buttonPressed = WarMenu.Button(labelText, subText)
    local inputResult = nil

    if buttonPressed then
        if keyboardTitle then
            AddTextEntry("FMMC_MPM_NA", keyboardTitle)
        end
        DisplayOnscreenKeyboard(1, "FMMC_MPM_NA", "", defaultText or "", "", "", "", maxLength or 255)

        while true do
            DisableAllControlActions(0)
            local status = UpdateOnscreenKeyboard()
            if status == 2 then break end
            if status == 1 then
                inputResult = GetOnscreenKeyboardResult()
                break
            end
            Citizen.Wait(0)
        end
    end
    return buttonPressed, inputResult
end

-- Draws a button that opens a sub-menu when pressed; returns true if pressed
function WarMenu.MenuButton(labelText, targetMenuId, subText)
    if not activeMenu then return end

    local pressed = WarMenu.Button(labelText, subText)
    if pressed then
        local savedOption = optionCount
        activeMenu.currentOption = savedOption
        SetMenuOpen(activeMenu.id, false)
        SetMenuOpen(targetMenuId, true, true)
    end
    return pressed
end

-- Draws a checkbox button; returns true if toggled, plus the new value
function WarMenu.CheckBox(labelText, checked, onChange, subText)
    if not activeMenu then return end

    local isFocused = (activeMenu.currentOption == optionCount + 1)
    local spriteNameBase

    if isFocused then
        spriteNameBase = checked and "shop_box_tickb" or "shop_box_blankb"
    else
        spriteNameBase = checked and "shop_box_tick" or "shop_box_blank"
    end

    local toggled = WarMenu.SpriteButton(labelText, "commonmenu", spriteNameBase)
    if toggled then
        checked = not checked
        if onChange then onChange(checked) end
    end
    return toggled
end

-- Draws a combo/list selector; returns pressed, newIndex
function WarMenu.ComboBox(labelText, items, currentIndex, prevIndex, onChange)
    if not activeMenu then return end

    local itemCount     = #items
    local currentValue  = items[currentIndex]
    local isFocused     = (activeMenu.currentOption == optionCount + 1)

    if not prevIndex then prevIndex = currentIndex end

    -- Wrap current value in arrows when focused and multiple items exist
    if itemCount > 1 and isFocused then
        currentValue = "\226\134\144 " .. tostring(currentValue) .. " \226\134\146"
    end

    local pressed = WarMenu.Button(labelText, currentValue)

    if pressed then
        prevIndex = currentIndex
    elseif isFocused then
        if lastPressedInput == keys.left then
            currentIndex = (currentIndex > 1) and (currentIndex - 1) or itemCount
        elseif lastPressedInput == keys.right then
            currentIndex = (currentIndex < itemCount) and (currentIndex + 1) or 1
        end
    end

    if onChange then
        onChange(currentIndex, prevIndex)
    end

    return pressed, currentIndex
end

-- ===================== FRAME UPDATE (Display / End) =====================

-- Must be called every frame when a menu is open; handles input, navigation, and drawing
function WarMenu.Display()
    if not activeMenu then return end

    ClearAllHelpMessages()
    HudWeaponWheelIgnoreSelection()
    DisablePlayerFiring(PlayerId(), true)

    DrawMenuTitle()
    DrawMenuSubTitle()

    lastPressedInput = nil

    if IsMenuDownPressed() then
        PlaySoundFrontend(-1, "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", true)
        if activeMenu.currentOption < optionCount then
            activeMenu.currentOption = activeMenu.currentOption + 1
        else
            activeMenu.currentOption = 1
        end
    elseif IsMenuUpPressed() then
        PlaySoundFrontend(-1, "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", true)
        if activeMenu.currentOption > 1 then
            activeMenu.currentOption = activeMenu.currentOption - 1
        else
            activeMenu.currentOption = optionCount
        end
    elseif IsControlJustReleased(2, keys.left) then
        lastPressedInput = keys.left
    elseif IsControlJustReleased(2, keys.right) then
        lastPressedInput = keys.right
    elseif IsMenuSelectPressed() then
        lastPressedInput = keys.select
    elseif IsMenuBackPressed() then
        local previousId = activeMenu.previousMenu
        local previous   = menuRegistry[previousId]
        if previous then
            SetMenuOpen(previousId, true)
            PlaySoundFrontend(-1, "BACK", "HUD_FRONTEND_DEFAULT_SOUNDSET", true)
        else
            WarMenu.CloseMenu()
        end
    end

    optionCount = 0
end

-- Alias: End is the same as Display (called at the bottom of the menu draw block)
WarMenu.End = WarMenu.Display

-- ===================== QUERY HELPERS =====================

-- Returns the currently highlighted option index, or nil if the list hasn't been built yet
function WarMenu.CurrentOption()
    if activeMenu and optionCount ~= 0 then
        return activeMenu.currentOption
    end
    return nil
end

-- Returns true if the cursor is on the most recently drawn option
function WarMenu.IsItemHovered()
    if not activeMenu or optionCount == 0 then return false end
    return activeMenu.currentOption == optionCount
end

-- Returns true if the hovered item was also selected this frame
function WarMenu.IsItemSelected()
    return WarMenu.IsItemHovered() and lastPressedInput == keys.select
end

-- ===================== SETTERS =====================

function WarMenu.SetTitle(menuId, title)
    SetMenuProperty(menuId, "title", title)
end
WarMenu.SetMenuTitle = WarMenu.SetTitle

function WarMenu.SetSubTitle(menuId, subTitle)
    SetMenuProperty(menuId, "subTitle", string.upper(subTitle))
end
WarMenu.SetMenuSubTitle = WarMenu.SetSubTitle

function WarMenu.SetMenuStyle(menuId, style)
    SetMenuProperty(menuId, "style", style)
end

function WarMenu.SetMenuTitleVisible(menuId, visible)
    SetMenuOverrideStyle(menuId, "titleVisible", visible)
end

function WarMenu.SetMenuX(menuId, x)
    SetMenuOverrideStyle(menuId, "x", x)
end

function WarMenu.SetMenuY(menuId, y)
    SetMenuOverrideStyle(menuId, "y", y)
end

function WarMenu.SetMenuWidth(menuId, width)
    SetMenuOverrideStyle(menuId, "width", width)
end

function WarMenu.SetMenuMaxOptionCountOnScreen(menuId, count)
    SetMenuOverrideStyle(menuId, "maxOptionCountOnScreen", count)
end

function WarMenu.SetTitleColor(menuId, r, g, b, a)
    SetMenuOverrideStyle(menuId, "titleColor", {r, g, b, a})
end
WarMenu.SetMenuTitleColor = WarMenu.SetTitleColor

function WarMenu.SetMenuSubTitleColor(menuId, r, g, b, a)
    SetMenuOverrideStyle(menuId, "subTitleColor", {r, g, b, a})
end

function WarMenu.SetMenuSubTitleBackgroundColor(menuId, r, g, b, a)
    SetMenuOverrideStyle(menuId, "subTitleBackgroundColor", {r, g, b, a})
end

function WarMenu.SetTitleBackgroundColor(menuId, r, g, b, a)
    SetMenuOverrideStyle(menuId, "titleBackgroundColor", {r, g, b, a})
end
WarMenu.SetMenuTitleBackgroundColor = WarMenu.SetTitleBackgroundColor

function WarMenu.SetTitleBackgroundSprite(menuId, spriteDict, spriteName)
    RequestStreamedTextureDict(spriteDict)
    SetMenuOverrideStyle(menuId, "titleBackgroundSprite", {dict = spriteDict, name = spriteName})
end
WarMenu.SetMenuTitleBackgroundSprite = WarMenu.SetTitleBackgroundSprite

function WarMenu.SetMenuBackgroundColor(menuId, r, g, b, a)
    SetMenuOverrideStyle(menuId, "backgroundColor", {r, g, b, a})
end

function WarMenu.SetMenuTextColor(menuId, r, g, b, a)
    SetMenuOverrideStyle(menuId, "textColor", {r, g, b, a})
end

function WarMenu.SetMenuSubTextColor(menuId, r, g, b, a)
    SetMenuOverrideStyle(menuId, "subTextColor", {r, g, b, a})
end

function WarMenu.SetMenuFocusColor(menuId, r, g, b, a)
    SetMenuOverrideStyle(menuId, "focusColor", {r, g, b, a})
end

function WarMenu.SetMenuFocusTextColor(menuId, r, g, b, a)
    SetMenuOverrideStyle(menuId, "focusTextColor", {r, g, b, a})
end

function WarMenu.SetMenuButtonPressedSound(menuId, soundName, soundSet)
    SetMenuOverrideStyle(menuId, "buttonPressedSound", {name = soundName, set = soundSet})
end
