local NPCs = {}

local Created = false

function GetNPCJobData(pId)
    for jobId, data in pairs(NPCs) do
        local id = GetHashKey(jobId)

        if id == pId then
           return {id = jobId}
        end
    end
end

exports('GetNPCJobData', GetNPCJobData)

AddEventHandler('np:jobs:createNPCs', function(pNPCs)
    if not Created then
        Created = true

        for _, npc in ipairs(pNPCs) do
            if npc and npc.headquarters then
                local vectors = npc.headquarters
                if not npc.data then npc.data = {} end
                npc.data.id = npc.jobid
                npc.data.position = {
                  coords = vector3(vectors.x, vectors.y, (vectors.z or 1.0) - 1.0),
                  heading = vectors.h or 0.0
                }
                NPCs[npc.jobid] = exports["np-npcs"]:RegisterNPC(npc.data, 'np-jobs')
            end
        end
    end
end)

local NPCsPool = {}

RegisterNetEvent('np-jobs:npc:added')
AddEventHandler('np-jobs:npc:added', function(pSpawn)
    local data = pSpawn

    local vectors = data.position.coords

    data.position.coords = vector3(vectors.x, vectors.y, vectors.z)

    NPCsPool[data.id] = exports["np-npcs"]:RegisterNPC(data, 'np-jobs')
end);

RegisterNetEvent('np-jobs:npc:edited')
AddEventHandler('np-jobs:npc:edited', function(pId, pVectors, pHeading)
    local coords = vector3(pVectors.x, pVectors.y, pVectors.z)
    local heading = pHeading + 0.0

    local position = { coords = coords, heading = heading}

    exports["np-npcs"]:UpdateNPCData(pId, 'position', position)
end);

RegisterNetEvent('np-jobs:npc:removed')
AddEventHandler('np-jobs:npc:removed', function(pId)
    exports["np-npcs"]:RemoveNPC(pId)
end);

AddEventHandler("np-spawn:characterSpawned", function()
    local npcs = RPC.execute('np-jobs:npc:getNPCs')
    if not npcs or type(npcs) ~= 'table' then return end

    for _, npc in pairs(npcs) do
        if npc and npc.position and npc.position.coords then
            local data = npc
            local vectors = data.position.coords
            data.position.coords = vector3(vectors.x, vectors.y, vectors.z)
            NPCsPool[data.id] = exports["np-npcs"]:RegisterNPC(data, 'np-jobs')
        end
    end
end)