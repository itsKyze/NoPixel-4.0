fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'Legacy_DMC'
description 'Discord: https://discord.gg/KsvJWyvpZU'
version '1.0'

shared_script "@npx/shared/lib.lua"
shared_script 'config/vehdata.lua'
shared_script 'config/tiredata.lua'
shared_script 'config/enginedata.lua'
shared_script 'config/globalvehdata.lua'
shared_script 'config/blocklist.lua'
shared_script 'config/chaserconfig.lua'

server_script "@npx/server/lib.js"
server_script "@np-lib/server/sv_asyncExports.lua"
server_script 'engine/debug/debugconfig.lua'
server_script 'engine/network/server_functions.lua'
server_script 'engine/network/server.lua'
server_script 'engine/network/sv_exports.lua'

client_script "@npx/client/lib.js"
client_script 'engine/base/varinit.lua'
client_script 'engine/debug/menuapi.lua'
client_script 'engine/debug/debug.lua'
client_script 'engine/base/functions.lua'
client_script 'engine/common/binds.lua'
client_script 'engine/base/events.lua'
client_script 'engine/threads/torque.lua'
client_script 'engine/threads/flywheel.lua'
client_script 'engine/threads/differential.lua'
client_script 'engine/threads/transmission.lua'
client_script 'engine/threads/handlers.lua'
client_script 'engine/threads/turbo.lua'
client_script 'engine/threads/nitrous.lua'
client_script 'engine/network/sync.lua'
client_script 'config/camera_tunables.lua'
client_script 'features/camera/camera_vars.lua'
client_script 'features/camera/camera_functions.lua'
client_script 'features/camera/camera.lua'
client_script 'engine/network/cl_exports.lua'

files {
    "audio/chaser_sfx/*.awc",
    "audio/chaser_sfx.dat54.rel",
}

data_file 'AUDIO_WAVEPACK' 'audio/chaser_sfx'
data_file 'AUDIO_SOUNDDATA' 'audio/chaser_sfx.dat'

dependency '/assetpacks'