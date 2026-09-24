fx_version "cerulean"

games { "gta5" }

description "NoPixel Jail System"

version "0.1.0"

server_script "@np-lib/server/sv_asyncExports.js"

client_script "@np-lib/client/cl_ui.js"
client_script "@np-locales/client/lib.js"

-- Load NUI project
ui_page "nui/dist/index.html"
--ui_page 'http://localhost:3000'

files {
    "nui/dist/**/*",
}

server_scripts { "build/sv_*.js", "jailCraftingList.js" }
client_scripts { "build/cl_*.js", "jailCraftingList.js" }