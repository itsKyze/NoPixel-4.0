fx_version 'cerulean'
game 'gta5'



shared_script 'config.lua'

client_scripts {
    'client/core/state.lua',
    'client/core/keybinds.lua',
    'client/lean/input.lua',
    'client/lean/camera.lua',
    'client/trajectory/ballistics.lua',
    'client/lean/controller.lua',
    'client/debug/lean_debug.lua',
}

files {
    'stream/karma_lean_movement.ycd',
}
