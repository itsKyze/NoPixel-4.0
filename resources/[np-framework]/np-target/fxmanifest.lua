fx_version 'cerulean'

games {'gta5'}

description 'NoPixel Interactions Target'

client_script '@npx/client/lib.js'
server_script '@npx/server/lib.js'
shared_script '@npx/shared/lib.lua'

shared_scripts {
	'shared/*.lua'
}

server_scripts {
	'server/*.lua'
}

client_scripts {
	'client/*.lua',
	'tests/cl_*.lua'
}


