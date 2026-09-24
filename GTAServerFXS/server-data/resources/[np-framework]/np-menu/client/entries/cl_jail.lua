local GeneralEntries = MenuEntries["general"]

local docPoliceActions = {
    {
        id = 'jail-doc-actions:shacklePrisoner',
        title = _L("jail-doc-actions:shacklePrisoner", "Shackle Prisoner"),
        icon = "#prisoner-action",
        event = "np-jail:shacklePrisoner"
    },
    {
        id = 'jail-doc-actions:collarPrisoner',
        title = _L("jail-doc-actions:collarPrisoner", "Collar Prisoner"),
        icon = "#prisoner-collar",
        event = "np-jail:collarPrisoner"
    },
    {
        id = 'jail-doc-actions:adjustYardRep',
        title = _L("jail-doc-actions:adjustYardRep", "Adjust Yard Rep"),
        icon = "#animation-tough",
        event = "np-jail:adjustYardRep"
    },
    {
        id = 'jail-doc-actions:adjustInmateSentence',
        title = _L("jail-doc-actions:adjustInmateSentence", "Reduce Sentence"),
        icon = "#prisoner-info",
        event = "np-jail:adjustInmateSentence"
    },
    {
        id = "prison:currentInfo",
        title = _L("menu-players-get-prisoner-info", "Prisoner Info"),
        icon = "#prisoner-info",
        event = "np-jail:showPrisonerInfo"
    },
    {
        id = "prison:assignGroup",
        title = _L("menu-players-assign-group", "Assign Group"),
        icon = "#prisoner-group",
        event = "np-jail:assignGroup"
    },
    {
        id = "prison:getCell",
        title = _L("menu-players-view-cell", "Assigned Cell"),
        icon = "#prisoner-info",
        event = "np-jail:getOthersCell"
    }
}

local docPrisonerActions = {
    {
        id = "prison-task",
        title = _L("menu-general-prison-currenttask", "Current Job"),
        icon = "#prisoner-task",
        event = "np-jail:showCurrentTask"
    },
    {
        id = "prison-sentence",
        title = _L("menu-general-prison-currentsentence", "Current Sentence"),
        icon = "#prisoner-info",
        event = "np-jail:showCurrentSentence"
    },
    {
        id = "prison-cell",
        title = _L("menu-general-prison-assignedcell", "Assigned Cell"),
        icon = "#prisoner-collar",
        event = "np-jail:showCurrentCell"
    },
}

local subMenuPolice = {}
local subMenuPrisoner = {}

for index, data in ipairs(docPoliceActions) do
    subMenuPolice[index] = data.id
    MenuItems[data.id] = {data = data}
end

for index, data in ipairs(docPrisonerActions) do
    subMenuPrisoner[index] = data.id
    MenuItems[data.id] = {data = data}
end

GeneralEntries[#GeneralEntries+1] = {
    data = {
        id = "jail-doc-actions",
        title = _L("jail-doc-actions", "Correctional Actions"),
        icon = "#police-action",
    },
    subMenus = subMenuPolice,
    isEnabled = function(pEntity, pContext)
        return not isDead and isDoc
    end
}

GeneralEntries[#GeneralEntries+1] = {
    data = {
        id = "jail-prisoner-actions",
        title = _L("jail-prisoner-actions", "Prisoner Actions"),
        icon = "#prisoner-action",
    },
    subMenus = subMenuPrisoner,
    isEnabled = function(pEntity, pContext)
        return not isDead and isPrisoner
    end
}