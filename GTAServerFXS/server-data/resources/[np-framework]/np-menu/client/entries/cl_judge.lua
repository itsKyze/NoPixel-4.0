local GeneralEntries, SubMenu = MenuEntries['judge'], {}

local JudgeActions = {
    {
        id ='judge-action:checkbank',
        title = _L('menu-judge-checkbank', 'Check Bank'),
        icon = '#police-check-bank',
        event = 'police:checkBank'
    },
    {
        id = 'judge-action:transferVehicleOwnership',
        title = _L('menu-judge-transfervehicleownership', 'Transfer Ownership'),
        icon = '#police-vehicle',
        event = 'np-vehicles:admin:judgeVehicleTransferOwnership'
    }
}

Citizen.CreateThread(function()
    for index, data in ipairs(JudgeActions) do
        SubMenu[index] = data.id
        MenuItems[data.id] = {data = data}
    end
    GeneralEntries[#GeneralEntries+1] = {
        data = {
            id = 'judge',
            icon = '#judge-actions',
            title = _L('menu-context-judgeactions', 'Judge Actions'),
        },
        subMenus = SubMenu,
        isEnabled = function()
            return not isDead
        end,
    }
end)
