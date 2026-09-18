local GeneralEntries, SubMenu = MenuEntries['general'], {}

local DoorsActions = {
    {
        id = 'doors:generate-key',
        title = _L('menu-doors-generate-key', 'Generate Key'),
        icon = '#door',
        event = 'doors:generateKey'
    },
}

Citizen.CreateThread(function()
    for index, data in ipairs(DoorsActions) do
        SubMenu[index] = data.id
        MenuItems[data.id] = { data = data }
    end
    GeneralEntries[#GeneralEntries + 1] = {
        data = {
            id = 'doors',
            icon = '#door',
            title = _L('menu-doors-actions', 'Door Actions'),
        },
        subMenus = SubMenu,
        isEnabled = function()
            return not isDead and exports["doors"]:isWhitelisted()
        end,
    }
end)
