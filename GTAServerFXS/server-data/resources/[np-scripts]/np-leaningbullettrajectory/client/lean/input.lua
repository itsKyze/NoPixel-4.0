KyzeLeanInput = {}
local left, right, last, toggled = false, false, 0, 0

function KyzeLeanInput.Press(side)
    if side ~= -1 and side ~= 1 then return end
    local wasDown = side == -1 and left or side == 1 and right
    if side == -1 then left = true else right = true end
    last = side
    if Config.Lean.Mode == 'toggle' and not wasDown then
        toggled = toggled == side and 0 or side
    end
end

function KyzeLeanInput.Release(side)
    if side ~= -1 and side ~= 1 then return end
    if side == -1 then left = false else right = false end
end

function KyzeLeanInput.Side()
    if Config.Lean.Mode == 'toggle' then return toggled end
    if left and right then return last end
    if left then return -1 end
    if right then return 1 end
    return 0
end

function KyzeLeanInput.Reset()
    left, right, last, toggled = false, false, 0, 0
end
