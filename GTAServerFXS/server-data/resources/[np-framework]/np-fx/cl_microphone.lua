CreateThread(function()
  exports["np-polyzone"]:AddBoxZone("np-fx:audio:stage", vector3(-551.12, 284.66, 82.98), 7.4, 3.0, {
    heading = 355,
    minZ = 81.78,
    maxZ = 84.78,
    data = {
      id = "tequilala:stage",
      ranges = {
        {
          mode = 3,
          range = 30.0,
          priority = 3
        }
      }
    }
  })

  exports["np-polyzone"]:AddBoxZone("np-fx:audio:stage", vector3(432.92, -997.51, 30.84), 0.7, 0.9, {
    heading = 0,
    minZ = 29.84,
    maxZ = 32.44,
    data = {
      id = "pd:classroom:podium",
      ranges = {
        {
          mode = 2,
          range = 15.0,
          priority = 3
        },
        {
          mode = 3,
          range = 20.0,
          priority = 3
        }
      },
      filter = "podium"
    }
  })

  exports["np-polyzone"]:AddBoxZone("np-fx:audio:stage", vector3(1847.93, 3679.97, 34.24), 1.0, 1.0, {
    heading = 30,
    minZ=33.24,
    maxZ=35.84,
    data = {
      id = "sheriff:classroom:podium",
      ranges = {
        {
          mode = 2,
          range = 15.0,
          priority = 3
        },
        {
          mode = 3,
          range = 20.0,
          priority = 3
        }
      },
      filter = "podium"
    }
  })

  exports["np-polyzone"]:AddPolyZone("np-fx:audio:stage", {
    vector2(667.98602294922, 576.31848144531),
    vector2(679.03790283203, 590.67059326172),
    vector2(700.68853759766, 582.84783935547),
    vector2(699.16333007812, 564.87322998047),
    vector2(689.61529541016, 568.25823974609),
    vector2(687.34429931641, 566.87066650391),
    vector2(683.13262939453, 566.18231201172),
    vector2(679.07061767578, 569.24786376953),
    vector2(677.82830810547, 572.54663085938),
    vector2(676.77917480469, 572.95831298828)
  }, {
    minZ = 129.54597473145,
    maxZ = 137.46141052246,
    data = {
      id = "vinewood:bowl:stage",
      ranges = {
        {
          mode = 3,
          range = 75.0,
          priority = 3
        }
      }
    }
  })
end)

AddEventHandler("np-polyzone:enter", function(zone, data)
  if zone == "np-fx:audio:stage" then
    MumbleSetAudioInputIntent(`music`)
    if data.filter then
      TriggerServerEvent("np:voice:transmission:state", -1, data.filter, true, data.filter)
    end
    TriggerEvent('np:voice:proximity:override', data.id, data.ranges)
    if data.id == "pd:classroom:podium" or data.id == "sheriff:classroom:podium" then
      exports['np-ui']:showInteraction("You're now speaking into a microphone.")
      Wait(2000) -- Why does showInteraction not support timeouts?
      exports["np-ui"]:hideInteraction()
    end
  end
end)

AddEventHandler("np-polyzone:exit", function(zone, data)
  if zone == "np-fx:audio:stage" then
    MumbleSetAudioInputIntent(`speech`)
    if data.filter then
      TriggerServerEvent("np:voice:transmission:state", -1, data.filter, false, data.filter)
    end
    TriggerEvent('np:voice:proximity:override', data.id, data.ranges, -1, -1)
  end
end)

CreateThread(function()
  local models = {
    'v_club_roc_micstd',
  }

  exports["interactions"]:AddInteractionByModel(models, {
    id = 'microcboost',
    options = {
      {
        id = 'microcboost',
        label = 'Use Microphone',
        event = "np-audio:useMicrophone",
        parameters = {},
      },
    },
    context = {
      distance = {
        draw = 3,
        use = 2,
      },
      isEnabled = function(pEntity)
        return true
      end,
    },
  })
end)

local boostActive = false
AddEventHandler("np-audio:useMicrophone", function(p1, pEntity, p3)
  if boostActive then
    TriggerEvent("DoLongHudText", "You're already speaking into a microphone.", 2)
    return
  end

  local microphoneVoiceDistance = 75.0
  local objectData = exports["np-objects"]:GetObjectByEntity(pEntity)
  if objectData then microphoneVoiceDistance = objectData.data.metadata.microphoneVoiceDistance or 75.0 end

  boostActive = true
  MumbleSetAudioInputIntent(`music`)
  TriggerEvent('np:voice:transmissionMegaphone', true)
  TriggerEvent("np:voice:proximity:override", "world:mic:boost", 3, microphoneVoiceDistance, 2)
  exports['np-ui']:showInteraction("You're now speaking into a microphone.")

  Citizen.CreateThread(function()
    while boostActive do
      if (#(GetEntityCoords(PlayerPedId()) - GetEntityCoords(pEntity))) > 2.5 then
        boostActive = false
      else
        Wait(100)
      end
    end
    MumbleSetAudioInputIntent(`speech`)
    TriggerEvent('np:voice:transmissionMegaphone', false)
    TriggerEvent("np:voice:proximity:override", "world:mic:boost", 3, -1, -1)

    exports['np-ui']:showInteraction("You're no longer speaking into a microphone.")
    Wait(2000)
    exports["np-ui"]:hideInteraction()
  end)

  Wait(2000)
  exports["np-ui"]:hideInteraction()
end)
