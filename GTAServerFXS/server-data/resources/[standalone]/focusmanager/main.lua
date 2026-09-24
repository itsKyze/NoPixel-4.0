local ActiveUIFocus = nil
local HasUIFocus = false
local FocusHandlers = {}

function RegisterFocusHandler(resource, handler)
  FocusHandlers[resource] = handler
end

exports("RegisterFocusHandler", function(handler)
  RegisterFocusHandler(GetInvokingResource(), handler)
end)

function SetUIFocus(hasFocus, hasCursor, fromCommand)
  local invoking = GetInvokingResource()
  local handler = FocusHandlers[invoking]

  if HasUIFocus and ActiveUIFocus ~= invoking then
    local oldHandler = FocusHandlers[ActiveUIFocus]
    if oldHandler then
      TriggerEvent('focusmanager:focusChanged', ActiveUIFocus, false, false)
      pcall(oldHandler, false, false)
    end
  end

  if hasFocus then
    ActiveUIFocus = invoking
    HasUIFocus = true
  else
    ActiveUIFocus = nil
    HasUIFocus = false
  end

  TriggerEvent('focusmanager:focusChanged', invoking, hasFocus, hasCursor)
  if handler then
    local ok, _ = pcall(handler, hasFocus, hasCursor)
    if not ok then
      SetNuiFocus(hasFocus, hasCursor)
    end
  else
    SetNuiFocus(hasFocus, hasCursor)
  end
end

exports("SetUIFocus", SetUIFocus)

exports("HasUIFocus", function()
  return HasUIFocus
end)

exports("GetActiveUIFocus", function()
  return ActiveUIFocus
end)

RegisterNetEvent("focusmanager:clearFocus", function()
  SetUIFocus(false, false, true)
end)

RegisterNetEvent("nui-toggle", function()
  SetUIFocus(false, false, true)
end)
