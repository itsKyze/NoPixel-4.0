fx_version 'cerulean'

games { 'gta5' }

description "NoPixel Inventory"

-- ui_page "http://localhost:4949/"
ui_page "nui/dist/index.html"

server_script "@np-lib/server/sv_asyncExports.js"

server_scripts { "build/sv_*.js" }
shared_scripts { "build/sh_*.js" }
client_scripts { "build/cl_*.js" }

files {
    "nui/dist/**/*",
}

