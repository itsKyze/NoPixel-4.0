fx_version "cerulean"

games { "gta5" }

description "NoPixel Mayor Budget"

version "0.1.0"

-- Load NUI project
ui_page 'nui/dist/index.html'

files {
    "nui/dist/**/*",
}

server_scripts { "build/sv_*.js" }
client_scripts { "build/cl_*.js" }
