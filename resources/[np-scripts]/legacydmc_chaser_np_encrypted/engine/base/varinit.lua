-- Core references
player = nil
playerid = nil
vehicle = 0
vehiclenetid = 0
vehnetid = 0
menuspawnhack = false
pastvehicle = 0
isinacar = false
netidpatchable = 0

-- Debug / environment
debug = (GetConvar("sv_environment", "prod") == "debug")

haschaserloaded = false
isdriver = false
currentvehiclename = ""
isvalidvehicle = false
statebag = nil
caristurnedoff = false

savefilevaluestable = {}
menuconfigvaluetable = {}

pressed = 0
menuinimperialunits = false
enablemanualtransmission = true
enableflywheel = true
enabledifferential = true
rightalignmenu = true
allowclientmenu = false

storeb1 = 0
storeb2 = 0
storeb3 = 0
storeb4 = 0

vehplate = nil
vehmodel = nil

minflywheelweight = 1.25
maxflywheelweight = 8.0

clutchkeyid = 19
clutchkeygamepadid = 37

finaldriveposlimit = 1.2
finaldriveneglimit = 0.0
gearratiomaxlimit = 15.0

entryname = 0
isinvehicle = false
isValidVehicle = false
shouldcalc0100 = false
telemetry = false
launchcontrolmode = false
canuselaunchcontrol = false
calleventonce = false
forceserversettingsdefault = false
clutchengaged = true
hastoapplymt = false
indownshift = false
disablegamepadaim = false
atcall = false
inmenu = false
aplyingconfig = false
isbraking = false
syncbrakelights = false
lcsyncrequestsend = false
lcactive = false
isusinggamepad = false
showdebuglogs = false

-- Telemetry / physics working values
time = 0
finaltime = 0
extratime = 0
speedkmh = 0
throttle = 0
clutch = 0
normalizedrpm = 0
realrpm = 0
enginetorque = 0
enginepowerhp = 0
weight = 0
torqueCurve = {}
dragcoeff = 0
launchcontrolrpm = 0
enginebrakingactive = false
iselectric = false
ogfdinertia = 0
isnotflying = false
ogtractionloss = 0
brakes = 0
normalizedTorque = 0
currentacc = 0
stockacc = 0
refferenceacc = 0
isengineon = false
handlingmaxspeed = 0
handlingpower = 0
handlinggearammount = 0
handlingpeaktraction = 0
handlingmintraction = 0
handlinglatcurve = 0
ammountwheels = 0
wheelsizes = 0
currentwheelradius = 0
currentairresistance = 0
tractioncontrolmultiplier = 1
speedcapmultiplier = 1
currentengine = nil
clutchTimer = 500

-- =========================================================================
-- GTAG gear ratio tables (per-gear-count presets, index 0-9 correspond to
-- vehicles with N usable forward gears)
-- =========================================================================

gtagratiotable9 = { -3.333, 3.333, 1.849, 1.253, 0.935, 0.767, 0.692, 0.686, 0.749, 0.9 }
gtagratiotable8 = { -3.333, 3.333, 1.898, 1.321, 1.011, 0.851, 0.788, 0.803, 0.9,   0.9 }
gtagratiotable7 = { -3.333, 3.333, 1.934, 1.372, 1.070, 0.918, 0.867, 0.9,   0.9,   0.9 }
gtagratiotable6 = { -3.333, 3.333, 1.949, 1.392, 1.095, 0.946, 0.9,   0.9,   0.9,   0.9 }
gtagratiotable5 = { -3.333, 3.333, 1.924, 1.358, 1.054, 0.9,   0.9,   0.9,   0.9,   0.9 }
gtagratiotable4 = { -3.333, 3.333, 1.826, 1.222, 0.9,   0.9,   0.9,   0.9,   0.9,   0.9 }
gtagratiotable3 = { -3.333, 3.333, 1.567, 0.9,   0.9,   0.9,   0.9,   0.9,   0.9,   0.9 }
gtagratiotable2 = { -3.333, 3.333, 0.9,   0.9,   0.9,   0.9,   0.9,   0.9,   0.9,   0.9 }
gtagratiotable1 = { -3.333, 0.9,   0.9,   0.9,   0.9,   0.9,   0.9,   0.9,   0.9,   0.9 }
gtagratiotable0 = { -3.333, 0.9,   0.9,   0.9,   0.9,   0.9,   0.9,   0.9,   0.9,   0.9 }

-- Transmission / gearing state
desiredgear = 1
cartopspeed = 0
baseacc = 0
topspeedgeartable = {}
calculatedtospeedkmhtable = {}
gearammount = 0
carhastransmission = -1

defaultgearratio = { -3.333, 3.333, 1.849, 1.253, 0.935, 0.767, 0.692, 0.686, 0.749, 0.9 }
gearratiotable = defaultgearratio

transmissionmode = 0
finaldriveadjustmentprct = 0

transmissiontxt = {
    "Sequential",
    "Automatic",
    "Manual W/ Clutch",
    "Drift 4S Manual",
    "Tuner 6S M",
    "Tuner 8S S",
}

wheellock = 0
modindex = 0
vehiclelayout = 0
normalizedatshiftpoint = 0
isclutchpressed = false
downhillenginebrakeassist = false

ReverseThreadData = { a = 0, d = 0 }

wheeliestate = 0
steerbias = 0
duration = 500
steertargetvalue = 0
endTime = 0
startValue = 0
steeringAngle = 0
currentdrivemode = 0
orignaltransmissionmode = -1
invertedcontrols = false
menumtapplycheck = false
hillclimbwatcher = false
handbrakes = 0
currentgeartopspeed = 0
previousgeartopspeed = 0
firstgeartopspeed = 0
invertreversecontrols = false
hashilodiff = false
shouldsimdct = false
hilodiffactivated = false
ogfinaldrive = 0

-- Handling / vehicle-model derived data
modelflags = 0
handlingflags = 0
topspeed = 0
maxtraction = 0
mintraction = 0
lateralcurve = 0
brakecapacity = 0
brakedistribution = 0
lstractionlossmulti = 0
tracitionlossmulti = 0
arbstrenght = 0
arbbiasfront = 0
suspensionraise = 0
suspensionforce = 0
suspensionrebounddamping = 0
suspensioncompressiondamping = 0
wheelbase = 0
centerofmass = 0
offsety = 0
offsetx = 0
offsetz = 0
frontrollcenter = 0
rearrollcenter = 0
frcoffset = 0
rrcoffset = 0
currentweight = 0
originalvehicleweight = 0
calculatedragcoeff = 0
powerprior = 0
layouthash = 0

comoffset = vector3(0, 0, 0)
pitchangle = vector3(0, 0, 0)

-- (duplicated resets from original script, kept intact)
maxtraction = 0
mintraction = 0
lateralcurve = 0

tyremodel = 0
tyremodellist = {}
tryemodelid = 0
tyrelstractionlossmulti = 0
tyretracitionlossmulti = 0
currenttire = 0

reardifflockprct = 0
frontdifflockprct = 0
lockedrdiff = nil
lockedfdiff = nil
isonburnout = nil
vehclass = 0
handlingsteeringlock = 0
frontengbrakedist = 0
engbrakeforce = 0
averagetraction = 0
tractioncontrol = false



stabilitycontrol = false
wheelspinassist = false
steeringrelation = 0
applieddrifting = false
switchhack = true
slipAngle = 90
slipanglehack = false
applieddriftstats = false
isusingarcadegripvalues = false
handbrakedrifthack = false
isdrifting = false
currentdriftfactor = 0
currentfakedriftrpm = 0
currentslip = 0
currentnormalizedvelocity = 0
positionvector = {}
globaldeltaposition = vector3(0.0, 0.0, 0.0)
justgotoutofdrift = false
totaldriftscore = 0
timesincelastdrift = 0
fastestspeed = 0
globaldriftcooldown = 3000
driftstackcooldown = 0
walltapstackcooldown = 0
crashedcooldown = 0
currentdriftstack = 0
globallastdriftscore = 0
globaljustgotoutofdrift = 0
currentwalltapstack = 0
checkInterval = 375
firstRead = nil
firstReadTime = GetGameTimer()
rechecking = false
firstrayentitytype = 0
secondrayentitytype = 0
firstrayentityhealth = 0
secondrayentityhealth = 0
firstrayvelocity = 0
secondrayvelocity = 0
firstraylatacc = 0
currentdriftscoremultiplier = 0
driftedinhighspeed = 0
registeredhighspeeddrift = false
targetValue = 0.2
currentTime = 0
callrpmupdate = {}
currentTimennpc = 0
npcstartValue = 0
fadeDuration = 0
npcfadeDuration = 0
npcglobalbreakcall = false

-- Turbo / boost / nitrous state
spoolingtarget = 1.0
decaymenttarget = -0.9
decaymentfadetime = 0
spoolingfadetime = 0
boostpowergainfactor = 0
calcspooltime = 0
calcdecaytime = 0
turbopressure = -1
torqueincrease = 0
compressorsize = 0
peakturbodecayboost = 0
turbodecaypoint = 0
maxtrboostpmax = 0
maxtrboostpmin = 0
maxtrboostpminprct = 0
maxtrboostpmaxprct = 0
booststartpoint = 0
boosttype = 0
curbfactorxpressure = 0
currentnitrousregenfactor = 0
nitrousboostfactor = 0
isnitrousactive = false
nitrouscapacity = 1.0
nitroustimer = 0
timesincelastnitroususe = 0
globalnitroussoundid = 0
timesincefirstnitroushot = 0
thiscarhasnitrous = false

-- Pedal/input timeout config (ms)
timeouttable = {
    pedal_gas_in_01     = 250,
    pedal_gas_out_01    = 250,
    pedal_brakes_in_01  = 304,
    pedal_brakes_out_01 = 304,
    pedal_clutch_in_01  = 489,
    pedal_clutch_out_01 = 373,
}

hasclutchplayedonce = false
camerapov = 0
dumpvalve = 0

EntitySounds = {}
currentloadedbanks = {}
lastLoadedBank = nil

iscurrentlybankingdriftscore = false
scoreboardsfxplaying = false
mutescoreboardsfx = true
globalscoreboardsfxid = 0
fuckingpp = false

-- Debug log toggles
loaddebuglog = true
gearshiftdebuglog = false
toolsdebuglog = true
driftdebuglog = false
assistsdebuglog = false
audiodebuglog = false
cameradebuglog = false
showenginebaypoints = false

sendspeedtype = "0"
sendcurrentspeed = 0
tcsstate = false
ecsstate = false
lcstate = "off"
showevhud = false

trailFx = {}
maxTrailsPerVehicle = 1


usecustombasevents      = Chaserconfig.enablecustombasevents
useintegratedhud         = Chaserconfig.enableintegratedhud
showhudinmph             = Chaserconfig.showhudspeedinmph
usedownshiftprotection   = Chaserconfig.enabledownshiftprotection
maxptwratio              = Chaserconfig.pp_maxptwratio
minptwratio              = Chaserconfig.pp_minptwratio
maxacctime               = Chaserconfig.pp_maxacctime
minacctime               = Chaserconfig.pp_minacctime
ppmaxspeedrate           = Chaserconfig.pp_maxspeedrate
ppminpeakgriprate        = Chaserconfig.pp_minpeakgriprate
ppmaxpeakgriprate        = Chaserconfig.pp_maxpeakgriprate
ppminpeakbikegriprate    = Chaserconfig.pp_minpeakbikegriprate
ppmaxpeakbikegriprate    = Chaserconfig.pp_maxpeakbikegriprate
integratedhudframetime   = Chaserconfig.integratedhudrefreshrate
driftscorepointsmultiplier = Chaserconfig.driftscorepointsmultiplier
driftscorerewardmultiplier = Chaserconfig.driftscorerewardmultiplier
nitrousspeedregenfactor  = Chaserconfig.nitrousspeedregenfactor
allowautoseqmode         = Chaserconfig.enableautosequencial

-- Keybinds sourced from config
upkey        = Chaserconfig.defaultbindupshift
downkey      = Chaserconfig.defaultbinddownshift
clutchkey    = Chaserconfig.defaultbindclutch
lckey        = Chaserconfig.defaultbindlaunchcontrol
atlockkey    = Chaserconfig.defaultbindatgearlock
tckey        = Chaserconfig.defaultbindtractioncontrol
sckey        = Chaserconfig.defaultbindstabilitycontrol
cmkey        = Chaserconfig.defaultbindconductionmode
lockorbitkey = Chaserconfig.defaultbindlockorbitcam
driftspeedfactor = Chaserconfig.driftspeedfactor
noskey       = Chaserconfig.defaultbindnitrous
hilokey      = Chaserconfig.defaultbindhighlowrange

usenewphysics = true
buildversion = "08.08.2024"
commandType = "none"
