fx_version "cerulean"

games { "gta5" }

description "NoPixel MDT"

version "0.1.0"

server_scripts { "build/sv_*.js" }
client_scripts { "build/cl_*.js" }

ui_page 'html/ui.html'
files {
	'html/ui.html',
	'html/styles.css',
	'html/scripts.js'
}