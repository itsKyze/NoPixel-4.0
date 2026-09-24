fx_version 'cerulean'
games { 'gta5' }

client_script "@np-lib/client/cl_ui.lua"

shared_script "@np-lib/shared/sh_cacheable.lua"

client_script "@npx/client/lib.js"
server_script "@npx/server/lib.js"
shared_script "@npx/shared/lib.lua"

client_scripts {
  '@np-errorlog/client/cl_errorlog.lua',
  '@np-lib/client/cl_rpc.lua',
  '@np-lib/client/cl_animTask.lua',
  'client/cl_*.lua',
  'build/cl_main.js'
}

shared_scripts {
  '@np-lib/shared/sh_util.lua',
  'shared/sh_*.*'
}

server_scripts {
  'config.lua',
  '@np-lib/server/sv_rpc.lua',
  '@np-lib/server/sv_sql.lua',
  '@np-lib/server/sv_sql.js',
  'server/classes/*.lua',
  'server/sv_*.lua',
  'server/sv_*.js',
  'build/sv_main.js'
}

ui_page 'nui/dist/index.html'
--ui_page 'http://localhost:3000'

files {
  'nui/dist/**/*'
}


client_script "tests/cl_*.lua"
