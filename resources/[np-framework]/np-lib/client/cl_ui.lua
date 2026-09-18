local registered = {}

function RegisterUICallback(name, cb)
  local function interceptCb(data, innerCb)
    cb(data, function(result)
      if result.meta.ok then
        result.meta.message = "done"
      end
      innerCb(result)
    end)
  end
  AddEventHandler(('_npx_uiReq:%s'):format(name), interceptCb)

  if (GetResourceState("np-ui") == "started") then
    pcall(function() exports["np-ui"]:RegisterUIEvent(name) end)
  end

  registered[#registered + 1] = name
end

function SendUIMessage(data)
  if (GetResourceState("np-ui") == "started") then
    pcall(function() exports["np-ui"]:SendUIMessage(data) end)
  end
end

function SetUIFocus(hasFocus, hasCursor)
  if (GetResourceState("np-ui") == "started") then
    pcall(function() exports["np-ui"]:SetUIFocus(hasFocus, hasCursor) end)
  end
end

function GetUIFocus()
  if (GetResourceState("np-ui") == "started") then
    local ok, res = pcall(function() return exports["np-ui"]:GetUIFocus() end)
    if ok then return res end
  end
  return false
end

AddEventHandler("_npx_uiReady", function()
  for _, eventName in ipairs(registered) do
    if (GetResourceState("np-ui") == "started") then
      pcall(function() exports["np-ui"]:RegisterUIEvent(eventName) end)
    end
  end
end)
