import { ag as _0x154608, a as _0x4a46bb, c as _0x4a1d68, ai as _0x7d06f5, e as _0xc6fe38, aj as _0x138f71, t as _0x49f26a, m as _0xa1a894, p as _0x589bfd, j as _0x58f363, n as _0x1ce879, f as _0x286b7e, S as _0x4ebf42, ak as _0x4c148f, x as _0x55a71e, al as _0x1bc99a, y as _0x33cd21, Q as _0x211aa6, am as _0x50e4ec, F as _0x2db4c2, an as _0x8e67e5, J as _0xbc8eb0, ao as _0x5af283, ap as _0xd7edd9, k as _0x27afa3, l as _0x497c65, aq as _0x3985bf, ar as _0x184127, as as _0x33a19d, at as _0x860511, au as _0x56323c, o as _0x5d905d, av as _0x353b3d, w as _0x3df129, M as _0x2accbb, z as _0x1e36ee, b as _0x4cc3de, A as _0x1bdc13, aw as _0x4a2679, G as _0x286a66 } from "./vendor.js";
import { i as _0x5458f4 } from "./underground_icon.js";
import { d as _0x2cda72, b as _0x5d935d, C as _0x4157b3, e as _0x19bf47, R as _0x374dae } from "./vite.js";
import { N as _0x42efad, U as _0x16c1ed } from "./v-packages.js";
import { n as _0x4376d7 } from "./nui.js";
import { a as _0x3fd32c, U as _0x4f82aa } from "./toast.js";
import { T as _0x59a38b } from "./index_table.js";
import { A as _0x5f1154 } from "./index_shared.js";
import "./commonjsHelpers.js";
const Ut = [{
  buyIn: 5,
  class: "C",
  active: false,
  type: "dropoff",
  vehicleInfo: {
    name: "Elegy",
    model: "elegy2"
  },
  expiration: 1696940123745,
  id: "1c1ff6be-01cd-4fce-a389-92e53c6ec4a3"
}, {
  buyIn: 5,
  class: "C",
  active: false,
  type: "dropoff",
  vehicleInfo: {
    name: "Elegy",
    model: "elegy2"
  },
  expiration: 1696940127730,
  id: "1c1ff6be-01cd-4fce-a389-92e53c6ec4a2"
}, {
  buyIn: 5,
  class: "C",
  active: false,
  type: "dropoff",
  vehicleInfo: {
    name: "Elegy",
    model: "elegy2"
  },
  expiration: 1696940129576,
  id: "1c1ff6be-01cd-4fce-a389-92e53c6ec4a4"
}, {
  buyIn: 5,
  class: "C",
  active: false,
  type: "dropoff",
  vehicleInfo: {
    name: "Elegy",
    model: "elegy2"
  },
  expiration: 1696940131828,
  id: "1c1ff6be-01cd-4fce-a389-92e53c6ec4a5"
}, {
  buyIn: 5,
  class: "C",
  active: false,
  type: "dropoff",
  vehicleInfo: {
    name: "Elegy",
    model: "elegy2"
  },
  expiration: 1696940135824,
  id: "1c1ff6be-01cd-4fce-a389-92e53c6ec4a6"
}, {
  buyIn: 5,
  class: "C",
  active: false,
  type: "dropoff",
  vehicleInfo: {
    name: "Elegy",
    model: "elegy2"
  },
  expiration: 1696940137687,
  id: "1c1ff6be-01cd-4fce-a389-92e53c6ec4a7"
}];
const Kt = [{
  buyIn: 5,
  allowed: true,
  type: "dropoff",
  class: "A"
}, {
  buyIn: 5,
  allowed: true,
  type: "dropoff",
  class: "B"
}, {
  buyIn: 5,
  allowed: true,
  type: "dropoff",
  class: "C"
}, {
  buyIn: 5,
  allowed: false,
  type: "dropoff",
  class: "C"
}, {
  buyIn: 5,
  allowed: false,
  type: "dropoff",
  class: "S"
}];
const qt = {
  id: "8df1ebc8-c28c-45c0-bb88-fb3cd443191f",
  name: "Boost Crew",
  capacity: 4,
  activity: null,
  members: [{
    characterId: 1002,
    serverId: 1,
    name: "Hidden",
    isLeader: true,
    isOnline: true
  }],
  data: {
    status: "waiting"
  }
};
const jt = "" + new URL("outbid-53912fb0.ogg", import.meta.url).href;
const Jt = "" + new URL("placebid-92e18d88.ogg", import.meta.url).href;
const Wt = "" + new URL("wonbid-327f54b4.ogg", import.meta.url).href;
async function _t() {
  return await _0x42efad.execute("boosting:getContracts", {
    mockupData: Ut
  });
}
async function Yt() {
  return await _0x42efad.execute("boosting:getPurchasableContracts", {
    mockupData: Kt
  });
}
async function Qt(_0x14e527) {
  const [, _0xa9a137] = await _0x42efad.execute("boosting:startContract", _0x14e527);
  _0x5d935d("underground", _0xa9a137);
}
async function Zt(_0x1ff4d2) {
  const [, _0x1e683e] = await _0x42efad.execute("boosting:cancelContract", _0x1ff4d2);
  _0x5d935d("underground", _0x1e683e);
}
async function Xt(_0x3bf1a9) {
  const [, _0x1f77a4] = await _0x42efad.execute("boosting:purchaseBoostContract", _0x3bf1a9);
  _0x5d935d("underground", _0x1f77a4);
}
async function ea(_0x2a2545, _0x1f9b82) {
  const [, _0x2e48a6] = await _0x42efad.execute("boosting:transferContract", _0x2a2545, _0x1f9b82);
  _0x5d935d("underground", _0x2e48a6);
}
async function ta(_0x1dff17, _0x596f6c, _0x4d487f) {
  const [, _0xced1d8] = await _0x42efad.execute("boosting:createAuction", {
    startingBid: _0x596f6c,
    contractId: _0x1dff17,
    duration: _0x4d487f
  });
  _0x5d935d("underground", _0xced1d8);
}
async function mt() {
  const _0x5b4260 = await _0x42efad.execute("boosting:getAuctionItems", {
    mockupData: []
  });
  return [..._0x5b4260.filter(_0x250774 => _0x250774.topBidderId === _0x2cda72()?.cid), ..._0x5b4260.filter(_0x168bfe => _0x168bfe.topBidderId !== _0x2cda72()?.cid)];
}
function aa(_0x513d12) {
  const _0x55e7cb = {
    outbid: jt,
    placedbid: Jt,
    wonbid: Wt
  };
  if (!_0x55e7cb[_0x513d12]) {
    return;
  }
  const _0x2e5de3 = new Audio(_0x55e7cb[_0x513d12]);
  _0x2e5de3.volume = 0.05;
  _0x2e5de3.controls = false;
  _0x2e5de3.play();
  setTimeout(() => _0x2e5de3.remove(), 250);
}
async function na(_0x36ec27, _0x37cd29) {
  const [, _0x481ed7] = await _0x42efad.execute("boosting:placeAuctionBid", {
    auctionId: _0x36ec27,
    bidAmount: _0x37cd29
  });
  _0x5d935d("underground", _0x481ed7);
}
async function ht() {
  return await _0x42efad.execute("boosting:getGroupInfo", {
    mockupData: qt
  });
}
async function pt() {
  return await _0x42efad.execute("boosting:isClockedOn", {
    mockupData: false
  });
}
async function ra() {
  const [_0x57b5c7, _0x304220] = await _0x42efad.execute("boosting:createGroup", {
    mockupData: [true, "Success"]
  });
  _0x5d935d("underground", _0x304220);
  return [_0x57b5c7, _0x304220];
}
async function sa() {
  const [_0x3b104b, _0x18009e] = await _0x42efad.execute("boosting:leaveGroup", {
    mockupData: [true, "Success"]
  });
  _0x5d935d("underground", _0x18009e);
  return [_0x3b104b, _0x18009e];
}
async function nt(_0x4e4c47) {
  const [_0x1d6fb4, _0x1b13d1] = await _0x42efad.execute("boosting:jobToggle", _0x4e4c47, {
    mockupData: [true, "Success"]
  });
  _0x5d935d("underground", _0x1b13d1);
  return [_0x1d6fb4, _0x1b13d1];
}
async function ia(_0x1f2ff4, _0x424e7b) {
  const [_0x3e9649, _0x2e2166] = await _0x42efad.execute("boosting:kickFromGroup", _0x1f2ff4, _0x424e7b, {
    mockupData: [true, "Success"]
  });
  _0x5d935d("underground", _0x2e2166);
  return [_0x3e9649, _0x2e2166];
}
async function oa(_0x751062) {
  const [_0x33f260, _0x3d5b8e] = await _0x42efad.execute("boosting:inviteToGroup", _0x751062, {
    mockupData: [true, "Success"]
  });
  _0x5d935d("underground", _0x3d5b8e);
  return [_0x33f260, _0x3d5b8e];
}
async function ca() {
  return await _0x42efad.execute("boosting:getNextLevelProgression", {
    mockupData: {
      progress: 22,
      nextClass: "AUpgraded",
      currClass: "C"
    }
  });
}
async function ft() {
  try {
    return await _0x42efad.execute("tablet:underground:getProfile", {
      mockupData: {
        id: "69_man",
        chip_id: "123123",
        character_id: 1234,
        alias: "Alias",
        avatar: "123",
        created_at: 123,
        updated_at: 123
      }
    });
  } catch {
    return null;
  }
}
async function la() {
  try {
    return await _0x42efad.execute("tablet:underground:getConfig", {
      mockupData: {
        allowPhasing: true
      }
    });
  } catch {
    return {
      allowPhasing: false
    };
  }
}
const [da, ua] = _0x154608(() => {
  const [_0x3a74cc, _0x50240d] = _0x4a46bb("home");
  const [_0x3f40b6, _0x10b213] = _0x4a1d68({
    group: null,
    contracts: [],
    clockedIn: false,
    auctionContracts: [],
    selectedContract: null,
    racingProfile: null,
    progression: {}
  });
  const [_0x31f5f0, _0x469e8c] = _0x4a1d68({
    isNightTime: false,
    pendingRaces: [],
    activeRaces: [],
    completedRaces: [],
    selectedTrack: null,
    raceTracks: [],
    racingAlias: "",
    selectedRaceInfo: null,
    selectedRaceCompleted: null,
    raceLadder: [],
    createTrack: {
      hasCreateChip: false,
      createTrackPayload: {
        createTrackId: "",
        isCreatingTrack: false,
        raceName: "",
        raceType: "Sprint",
        raceMinLaps: 1,
        raceCategory: "underground",
        raceThumbnail: "https"
      }
    },
    allowPhasing: false
  });
  const [_0xb51efc, _0x9cfee5] = _0x4a46bb(null);
  const [_0xf88ba1, _0x3dd341] = _0x4a46bb(null);
  return {
    page: _0x3a74cc,
    setPage: _0x50240d,
    setRacingState: _0x469e8c,
    racingState: _0x31f5f0,
    modalInfo: _0xb51efc,
    setModalInfo: _0x9cfee5,
    confirmModalInfo: _0xf88ba1,
    setConfirmModalInfo: _0x3dd341,
    boostingState: _0x3f40b6,
    setBoostingState: _0x10b213
  };
});
const T = () => ua();
const va = {
  activeRaces: {
    key: {
      author: "steam:11000010818e7b9",
      bannedPlayers: [],
      buyIn: 0,
      category: "underground",
      countdown: 10,
      createdAt: 1696392069243,
      dnfCountdown: 0,
      dnfPosition: 0,
      eventId: "44c97963-519f-4d73-b320-6a08bee2710d",
      eventName: "123",
      forcePerspective: false,
      hitPenalty: 0,
      id: "14fc02f6-55f4-4dfc-afa9-1f98f780c687",
      isNightTime: false,
      laps: 2,
      length: 7202.68017578125,
      lineBasedCheckpoints: true,
      minLaps: 3,
      name: "Concrete Corners",
      numOfCheckpoints: 69,
      owner: 69,
      password: "123",
      phasing: "none",
      players: {
        1: {
          alias: "Test",
          allCheckpointTimestamps: [],
          bestLapTimeForVehicle: 9007199254740991,
          characterId: 1005,
          fastestLapCheckpointTimes: [],
          finished: false,
          id: 1,
          lastPos: -1,
          leftRace: false,
          name: "123 123",
          vehicleHash: -566387422
        }
      },
      prize: 0,
      prizeDistribution: [0.6, 0.3, 0.1],
      reverse: false,
      shouldSendRecklessDrivingCall: false,
      start: {
        hdg: 257.014,
        pos: {
          x: -1305.911,
          y: -60.879,
          z: 47.336
        },
        rad: 17.4
      },
      startTime: 1696392355094,
      thumbnail: "https",
      tournamentName: "",
      type: "Lap",
      vehicleClass: "Open",
      visible: 1
    }
  },
  completed: [{
    buyIn: 0,
    ranked: true,
    category: "underground",
    eventId: "700a10da-e374-4baa-b5a0-0f5a08b67526",
    eventName: "123",
    id: 0,
    isNightTime: false,
    laps: 1,
    length: 835.54,
    lineBasedCheckpoints: true,
    minLaps: 1,
    owner: 1005,
    players: [{
      alias: "My Alias ",
      allCheckpointTimestamps: [],
      bestLapTimeForVehicle: 520005,
      characterId: 1005,
      cryptoReward: 0,
      dnf: true,
      fastestLapCheckpointTimes: [0, 0],
      finished: 520005,
      id: 1,
      lastPos: -1,
      leftRace: true,
      name: "123 123",
      place: 1,
      prize: 0,
      vehiceHash: -566387422,
      vehicle: "Elegy",
      vehicleClass: "A",
      vehicleFullyUpgraded: false,
      vehicleHash: -566387422,
      vehicleVin: "2MNSP22WL3L128011",
      vehicleVinScratched: false,
      oldRating: 1500,
      newRating: 1550
    }, {
      alias: "Wrench",
      allCheckpointTimestamps: [],
      bestLapTimeForVehicle: 520005,
      characterId: 1005,
      cryptoReward: 0,
      dnf: true,
      fastestLapCheckpointTimes: [0, 0],
      finished: false,
      id: 1,
      lastPos: -1,
      leftRace: true,
      name: "123 123",
      place: 2,
      prize: 0,
      vehiceHash: -566387422,
      vehicle: "Elegy",
      vehicleClass: "A",
      vehicleFullyUpgraded: false,
      vehicleHash: -566387422,
      vehicleVin: "2MNSP22WL3L128011",
      vehicleVinScratched: false,
      oldRating: 1500,
      newRating: 1450
    }],
    raceId: "fa03a75b-eee9-48bd-b4a8-b32b3d7da1f8",
    reverse: false,
    timestamp: 1696390967331,
    track: "Airport Drag",
    type: "Sprint",
    vehicleClass: "Open",
    name: "Airport Drag"
  }],
  pendingRaces: {
    "7392b75b-f662-4330-ba8c-6868e26307f0": {
      author: "steam:11000010818e7b9",
      bannedPlayers: [],
      buyIn: 0,
      ranked: false,
      category: "underground",
      checkpoints: [{
        hdg: 244.497,
        pos: {
          x: -1090.802,
          y: -166.56,
          z: 37.349
        },
        rad: 17.4
      }],
      countdown: 10,
      createdAt: 1696392069243,
      dnfCountdown: 0,
      dnfPosition: 0,
      eventId: "44c97963-519f-4d73-b320-6a08bee2710d",
      eventName: "123",
      forcePerspective: false,
      hitPenalty: 0,
      id: "14fc02f6-55f4-4dfc-afa9-1f98f780c687",
      laps: 2,
      length: 7202.68017578125,
      lineBasedCheckpoints: true,
      minLaps: 3,
      name: "Concrete Corners",
      owner: 1005,
      password: "123",
      phasing: "none",
      players: {
        1: {
          alias: "Test",
          allCheckpointTimestamps: [],
          bestLapTimeForVehicle: 9007199254740991,
          characterId: 69,
          fastestLapCheckpointTimes: [],
          finished: false,
          id: 1,
          lastPos: -1,
          leftRace: false,
          name: "123 123",
          vehicleHash: -566387422
        }
      },
      prizeDistribution: [0.6, 0.3, 0.1],
      reverse: false,
      start: {
        hdg: 257.014,
        pos: {
          x: -1305.911,
          y: -60.879,
          z: 47.336
        },
        rad: 17.4
      },
      thumbnail: "https",
      tournamentName: "",
      type: "Lap",
      vehicleClass: "Open",
      visible: 1
    },
    "7392b75b-f662-4330-ba8c-6868e26307f1": {
      author: "steam:11000010818e7b9",
      bannedPlayers: [],
      buyIn: 0,
      ranked: true,
      category: "underground",
      checkpoints: [{
        hdg: 244.497,
        pos: {
          x: -1090.802,
          y: -166.56,
          z: 37.349
        },
        rad: 17.4
      }],
      countdown: 10,
      createdAt: 1696392069243,
      dnfCountdown: 0,
      dnfPosition: 0,
      eventId: "44c97963-519f-4d73-b320-6a08bee2710d",
      eventName: "123",
      forcePerspective: false,
      hitPenalty: 0,
      id: "14fc02f6-55f4-4dfc-afa9-1f98f780c687",
      laps: 2,
      length: 7202.68017578125,
      lineBasedCheckpoints: true,
      minLaps: 3,
      name: "Concrete Corners",
      owner: 1005,
      password: "123",
      phasing: "none",
      players: {
        1: {
          alias: "Test",
          allCheckpointTimestamps: [],
          bestLapTimeForVehicle: 9007199254740991,
          characterId: 69,
          fastestLapCheckpointTimes: [],
          finished: false,
          id: 1,
          lastPos: -1,
          leftRace: false,
          name: "123 123",
          vehicleHash: -566387422
        }
      },
      prizeDistribution: [0.6, 0.3, 0.1],
      reverse: false,
      start: {
        hdg: 257.014,
        pos: {
          x: -1305.911,
          y: -60.879,
          z: 47.336
        },
        rad: 17.4
      },
      thumbnail: "https",
      tournamentName: "",
      type: "Lap",
      vehicleClass: "Open",
      visible: 1
    }
  },
  races: {
    "0260b257-fa5a-4d8a-9582-b9206ff422f4": {
      author: "steam:110000106995cc4",
      category: "underground",
      createdAt: 1614952800,
      id: "0260b257-fa5a-4d8a-9582-b9206ff422f4",
      length: 346.57598876953125,
      name: "Drag Queen",
      start: {
        hdg: 116.91,
        pos: {
          x: 1895.898,
          y: 3842.081,
          z: 32.351
        },
        rad: 12.8
      },
      thumbnail: "https",
      type: "Sprint",
      visible: 1
    },
    "16405319-11d8-4188-967e-adfd38041328": {
      author: "steam:110000106995cc4",
      category: "underground",
      createdAt: 1614952800,
      id: "16405319-11d8-4188-967e-adfd38041328",
      length: 9655.98046875,
      name: "Director's Cut",
      start: {
        hdg: 133.208,
        pos: {
          x: -1211.696,
          y: -579.482,
          z: 27.636
        },
        rad: 7.7
      },
      thumbnail: "https",
      type: "Lap",
      visible: 1
    },
    "25712fe9-ac43-4b02-9d81-f600f010cbaa": {
      author: "steam:110000102179203",
      category: "pd",
      createdAt: 1622615633,
      id: "25712fe9-ac43-4b02-9d81-f600f010cbaa",
      length: 11906.900390625,
      name: "Sandy Shores(Challenger)",
      start: {
        hdg: 298.99,
        pos: {
          x: 1858.133,
          y: 3665.57,
          z: 33.317
        },
        rad: 5.9
      },
      thumbnail: "https",
      type: "Lap",
      visible: 1
    },
    random: {
      author: "steam:11000010516795a",
      category: "random",
      createdAt: 1646113170855,
      id: "random",
      minLaps: 1,
      name: "Random Waypoint",
      thumbnail: "https",
      type: "Sprint",
      visible: true
    }
  }
};
const ga = [{
  raceId: "123",
  characterId: 69,
  alias: "AmazingAlias",
  totalTime: 754163,
  bestLapTime: 351646,
  prize: 12,
  place: 1,
  revserse: false,
  vehicle: "GTR R35"
}, {
  raceId: "123",
  characterId: 12,
  alias: "BentlyDriverM8",
  totalTime: 754163,
  bestLapTime: 351646,
  prize: 12,
  place: 2,
  revserse: false,
  vehicle: "Bently"
}];
const $t = [{
  alias: "Big",
  rating: 1520
}, {
  alias: "Small",
  rating: 1528
}, {
  alias: "Medium",
  rating: 1800
}, {
  alias: "Tiny",
  rating: 1000
}, {
  alias: "Huge",
  rating: 2000
}, {
  alias: "Giant",
  rating: 3000
}, {
  alias: "Colossal",
  rating: 4000
}, {
  alias: "Titanic",
  rating: 5000
}, {
  alias: "Mammoth",
  rating: 6000
}, {
  alias: "Leviathan",
  rating: 7000
}, {
  alias: "Behemoth",
  rating: 8000
}, {
  alias: "Kraken",
  rating: 9000
}, {
  alias: "Hydra",
  rating: 10000
}, {
  alias: "Cyclops",
  rating: 11000
}, {
  alias: "Gorgon",
  rating: 12000
}, {
  alias: "Chimera",
  rating: 13000
}, {
  alias: "Cerberus",
  rating: 14000
}, {
  alias: "Griffin",
  rating: 15000
}, {
  alias: "Phoenix",
  rating: 16000
}, {
  alias: "Sphinx",
  rating: 17000
}];
const _a = _0x49f26a("<span>Creating Race");
const M = _0x49f26a("<span>");
const Be = _0x49f26a("<span>Creating Race Track");
const ma = _0x49f26a("<span>Attempting to join race");
const bt = _0x49f26a("<span>Attempting to remove <!> from race");
const ha = _0x49f26a("<span>Attempting to start race");
const pa = _0x49f26a("<span>Attempting to end race");
const fa = _0x49f26a("<span>Attempting to leave race");
const $a = async () => {
  let _0x1e0a87 = [];
  let _0x3d40f7 = [];
  let _0x571bad = [];
  let _0x327887 = [];
  try {
    const _0x5240be = await _0x4376d7("np-ui:racingGetAllRaces", {}, {
      returnData: va
    });
    _0x1e0a87 = Object.values(_0x5240be.data.races).sort((_0x4eea13, _0x27856d) => _0x4eea13.name.localeCompare(_0x27856d.name));
    _0x3d40f7 = Object.values(_0x5240be.data.pendingRaces).sort((_0x2c432a, _0x405b3c) => _0x2c432a.createdAt === _0x405b3c.createdAt ? 0 : _0x405b3c.createdAt - _0x2c432a.createdAt);
    _0x571bad = Object.values(_0x5240be.data.activeRaces).sort((_0x4f5837, _0x173df5) => _0x4f5837.createdAt === _0x173df5.createdAt ? 0 : _0x173df5.createdAt - _0x4f5837.createdAt);
    _0x327887 = Object.values(_0x5240be.data.completed).map(_0x3dc5b6 => ({
      ..._0x3dc5b6,
      name: _0x3dc5b6.track
    }));
    _0x327887.sort((_0x49ad5e, _0x4382c4) => _0x49ad5e.timestamp === _0x4382c4.timestamp ? 0 : _0x4382c4.timestamp - _0x49ad5e.timestamp);
  } catch {}
  return {
    pending: _0x3d40f7,
    active: _0x571bad,
    maps: _0x1e0a87,
    completed: _0x327887
  };
};
const ba = async (_0x18243b, _0x58c24b, _0x50dfd0) => {
  _0x7d06f5(_0x50dfd0, () => {
    if (!_0x58c24b) {
      return _0x3fd32c("Invalid track selected", "error");
    }
    if (!_0x18243b.eventName || _0x18243b.eventName === "") {
      return _0x3fd32c("Invalid event name provided", "error");
    }
    if (!_0x18243b.alias || _0x18243b.alias === "") {
      return _0x3fd32c("Invalid racing alias", "error");
    }
    if (_0x58c24b.type === "Lap" && _0x58c24b.minLaps && (!_0x18243b.laps || _0x18243b.laps < _0x58c24b.minLaps)) {
      return _0x3fd32c("Must be at least " + _0x58c24b.minLaps + " laps", "error");
    }
    if (_0x18243b.ranked && _0x18243b.vehicleClass === "Open") {
      return _0x3fd32c("Class Open not allowed in Ranked", "error");
    }
    if (_0x18243b.ranked && (!_0x18243b.buyIn || _0x18243b?.buyIn < 10)) {
      return _0x3fd32c("Not enough BuyIn for Ranked", "error");
    }
    if (_0x18243b.ranked && _0x18243b.laps && _0x18243b.laps * _0x58c24b.length < 9000) {
      return _0x3fd32c("Track too short for Ranked, set more laps", "error");
    }
    const {
      setPage: _0x588b7e,
      racingState: _0x37506c
    } = T();
    const _0x3669f0 = {
      loading: _a(),
      success: _0xac1b82 => (() => {
        const _0x5297dd = M();
        _0xc6fe38(_0x5297dd, _0xac1b82);
        return _0x5297dd;
      })(),
      error: _0x1bcfdf => (() => {
        const _0x599626 = M();
        _0xc6fe38(_0x599626, _0x1bcfdf);
        return _0x599626;
      })()
    };
    const _0x738e7b = () => new Promise(async (_0x4c32eb, _0x58eea9) => {
      const _0x5248db = await _0x4376d7("np-ui:racingCreateRace", {
        trackInfo: _0x58c24b,
        id: _0x58c24b.id,
        options: {
          ..._0x18243b,
          phasing: _0x37506c.allowPhasing ? _0x18243b.phasing : "none",
          prizeDistribution: [0.8, 0.2]
        }
      });
      if (_0x5248db.meta.ok) {
        _0x588b7e("races");
        return _0x4c32eb("Race created!");
      } else {
        return _0x58eea9(_0x5248db.meta.message);
      }
    });
    _0x138f71.promise(_0x738e7b(), _0x3669f0, _0x4f82aa);
  });
};
const rt = (_0x53fe0c, _0x118412) => _0x7d06f5(_0x53fe0c, async () => {
  const {
    setConfirmModalInfo: _0x46254a
  } = T();
  const _0x59ef05 = async () => {
    const _0x34b83c = () => new Promise(async (_0x426970, _0x277471) => {
      const _0x59a43b = await _0x4376d7("np-ui:racingCreateRaceTrack", {
        ..._0x118412
      });
      if (_0x59a43b.meta.ok) {
        _0x426970("Track Creation Started");
        return _0x4157b3();
      } else {
        return _0x277471(_0x59a43b.meta.message);
      }
    });
    _0x138f71.promise(_0x34b83c(), {
      loading: Be(),
      success: _0x1b4ef4 => (() => {
        const _0x40ce34 = M();
        _0xc6fe38(_0x40ce34, _0x1b4ef4);
        return _0x40ce34;
      })(),
      error: _0x2007e1 => (() => {
        const _0x4852af = M();
        _0xc6fe38(_0x4852af, _0x2007e1);
        return _0x4852af;
      })()
    }, _0x4f82aa);
  };
  let _0x5d1114 = "Track values are FINAL, are you sure you want to start Track creation?";
  if (_0x118412?.createTrackId) {
    _0x5d1114 = "Are you sure you want to EDIT this Track?";
  }
  if (_0x118412.raceName === "") {
    _0x5d1114 = "You must provide a Track Name to continue";
  }
  _0x46254a({
    onConfirm: () => _0x118412.raceName !== "" && _0x59ef05(),
    onCancel: () => ({}),
    message: _0x5d1114
  });
});
const ka = _0x5ba6a6 => _0x7d06f5(_0x5ba6a6, async () => {
  const _0x2a9834 = T();
  if (!_0x2a9834) {
    return;
  }
  const _0x4ffff5 = async () => {
    const _0x32a54e = () => new Promise(async (_0x2a459c, _0x4e816c) => {
      const _0x55b835 = await _0x4376d7("np-ui:racingCancelCreateRaceTrack");
      if (_0x55b835.meta.ok) {
        _0x2a9834.setRacingState(_0x580e58 => {
          _0x580e58.createTrack.createTrackPayload.isCreatingTrack = false;
          return _0x580e58;
        });
        _0x2a459c("Track Cancelled");
        return _0x4157b3();
      } else {
        return _0x4e816c(_0x55b835.meta.message);
      }
    });
    _0x138f71.promise(_0x32a54e(), {
      loading: Be(),
      success: _0x1195ec => (() => {
        const _0x21f661 = M();
        _0xc6fe38(_0x21f661, _0x1195ec);
        return _0x21f661;
      })(),
      error: _0x30be18 => (() => {
        const _0x14d64b = M();
        _0xc6fe38(_0x14d64b, _0x30be18);
        return _0x14d64b;
      })()
    }, _0x4f82aa);
  };
  _0x2a9834.setConfirmModalInfo({
    onConfirm: () => _0x4ffff5(),
    onCancel: () => ({}),
    message: "Are you sure you want to CANCEL this Track?"
  });
});
const Ca = _0x13fd71 => _0x7d06f5(_0x13fd71, async () => {
  const {
    setConfirmModalInfo: _0x2d2ee4
  } = T();
  const _0xc3b3f0 = async () => {
    const _0x4df97c = () => new Promise(async (_0x274c01, _0x58c3d8) => {
      const _0x434b69 = await _0x4376d7("np-ui:racingFinishCreateRaceTrack");
      if (_0x434b69.meta.ok) {
        _0x274c01("Track Created");
        return _0x4157b3();
      } else {
        return _0x58c3d8(_0x434b69.meta.message);
      }
    });
    _0x138f71.promise(_0x4df97c(), {
      loading: Be(),
      success: _0x21ef98 => (() => {
        const _0x11c3a1 = M();
        _0xc6fe38(_0x11c3a1, _0x21ef98);
        return _0x11c3a1;
      })(),
      error: _0x47081b => (() => {
        const _0x22b52c = M();
        _0xc6fe38(_0x22b52c, _0x47081b);
        return _0x22b52c;
      })()
    }, _0x4f82aa);
  };
  _0x2d2ee4({
    onConfirm: () => _0xc3b3f0(),
    onCancel: () => ({}),
    message: "Are you sure you want to FINALIZE this Track?"
  });
});
const ya = async (_0x42a516, _0xd7729, _0x32fb28) => {
  const _0x3f0221 = {
    loading: ma(),
    success: _0x2658a4 => (() => {
      const _0x2c82e8 = M();
      _0xc6fe38(_0x2c82e8, _0x2658a4);
      return _0x2c82e8;
    })(),
    error: _0x4bcdba => (() => {
      const _0x581dcb = M();
      _0xc6fe38(_0x581dcb, _0x4bcdba);
      return _0x581dcb;
    })()
  };
  _0x7d06f5(_0x32fb28, () => {
    const {
      racingState: _0x296420,
      setModalInfo: _0x279410
    } = T();
    const _0x352f46 = _0x47ec57 => new Promise(async (_0x2c0760, _0xed98f4) => {
      const _0x3ebfba = await Promise.race([_0x4376d7("np-ui:racingJoinRace", {
        race: _0x42a516,
        alias: _0xd7729,
        password: _0x47ec57
      }), _0x16c1ed.wait(5000)]);
      if (!_0x3ebfba) {
        return _0xed98f4("Failed to join race, try again!");
      }
      if (!_0x3ebfba.meta.ok) {
        return _0xed98f4(_0x3ebfba.meta.message);
      }
      const _0x131805 = _0x296420.pendingRaces.find(_0x4ef783 => _0x4ef783 && _0x4ef783.eventId === _0x42a516.eventId);
      if (_0x131805) {
        Me(_0x32fb28, {
          ..._0x131805,
          viewType: "pending"
        });
      }
      return _0x2c0760("Joined race!");
    });
    if (_0x42a516.password) {
      _0x279410({
        inputs: [{
          type: "password",
          name: "password",
          label: "Password"
        }],
        title: "Joining race",
        description: "Please enter the password to join the race.",
        onSubmit: _0x1e5884 => {
          _0x138f71.promise(_0x352f46(_0x1e5884.password), _0x3f0221, _0x4f82aa);
        },
        onCancel: () => {}
      });
    } else {
      _0x138f71.promise(_0x352f46(""), _0x3f0221, _0x4f82aa);
    }
  });
};
const Aa = async () => {
  try {
    const _0x2fef19 = await _0x4376d7("np-ui:racing:getRacingChipInfo", {}, {
      returnData: {
        alias: "UI-Test-Alias",
        hasCreateChip: false,
        createTrackPayload: {
          createTrackId: "",
          isCreatingTrack: false,
          raceName: "",
          raceType: "",
          raceMinLaps: 1,
          raceCategory: "",
          raceThumbnail: ""
        }
      }
    });
    if (_0x2fef19.meta.ok) {
      return {
        alias: _0x2fef19.data.alias,
        hasCreateChip: _0x2fef19.data.hasCreateChip,
        createTrackPayload: {
          ..._0x2fef19.data.createTrackPayload
        }
      };
    }
  } catch {}
  return {
    alias: undefined,
    hasCreateChip: false,
    createTrackPayload: {
      createTrackId: "",
      isCreatingTrack: false,
      raceName: "",
      raceType: "",
      raceMinLaps: 1,
      raceCategory: "",
      raceThumbnail: ""
    }
  };
};
const Me = (_0x1ee44a, _0x1d30e0) => _0x7d06f5(_0x1ee44a, () => {
  if (!_0x1d30e0 || !_0x1ee44a) {
    return;
  }
  const _0x2dbe23 = T();
  if (_0x2dbe23) {
    _0x2dbe23.setRacingState({
      selectedRaceInfo: _0x1d30e0
    });
    _0x2dbe23.setPage("race-info");
  }
});
const st = _0x411abd => {
  const _0x5119c2 = _0x2cda72()?.cid;
  return !!_0x411abd.find(_0x412caf => Number(_0x412caf.characterId) === _0x5119c2 && !_0x412caf.leftRace);
};
const Ta = (_0x2dc58a, _0x2c15b3, _0x16b23b) => _0x7d06f5(_0x2dc58a, async () => {
  const {
    setConfirmModalInfo: _0x3615fd
  } = T();
  const _0x5ab7d7 = async () => {
    const _0x4277f4 = () => new Promise(async (_0x8969bf, _0x5e398c) => {
      const _0x5b9026 = await _0x4376d7("np-ui:racingKickFromRace", {
        raceId: _0x16b23b,
        playerId: _0x2c15b3.id
      });
      if (_0x5b9026.meta.ok) {
        return _0x8969bf("Kicked " + _0x2c15b3.alias + " from race!");
      } else {
        return _0x5e398c(_0x5b9026.meta.message);
      }
    });
    _0x138f71.promise(_0x4277f4(), {
      loading: (() => {
        const _0x294c87 = bt();
        const _0x566f59 = _0x294c87.firstChild;
        const _0x139d20 = _0x566f59.nextSibling;
        _0x139d20.nextSibling;
        _0xc6fe38(_0x294c87, () => _0x2c15b3.alias, _0x139d20);
        return _0x294c87;
      })(),
      success: _0xd661b2 => (() => {
        const _0xcf44fc = M();
        _0xc6fe38(_0xcf44fc, _0xd661b2);
        return _0xcf44fc;
      })(),
      error: _0x59f7d3 => (() => {
        const _0x1ebeb4 = M();
        _0xc6fe38(_0x1ebeb4, _0x59f7d3);
        return _0x1ebeb4;
      })()
    }, _0x4f82aa);
  };
  _0x3615fd({
    onConfirm: () => _0x5ab7d7(),
    onCancel: () => ({}),
    message: "Are you sure you want to kick " + _0x2c15b3.alias + " from this race?"
  });
});
const wa = (_0x45afef, _0x832e2b, _0x59e328) => _0x7d06f5(_0x45afef, async () => {
  const {
    setConfirmModalInfo: _0x463f07
  } = T();
  const _0x1907c6 = async () => {
    const _0x5152f9 = () => new Promise(async (_0xce9548, _0x1e915f) => {
      const _0x2e06ac = await _0x4376d7("np-ui:racingBanFromRace", {
        raceId: _0x59e328,
        playerId: _0x832e2b.id
      });
      if (_0x2e06ac.meta.ok) {
        return _0xce9548("Banned " + _0x832e2b.alias + " from race!");
      } else {
        return _0x1e915f(_0x2e06ac.meta.message);
      }
    });
    _0x138f71.promise(_0x5152f9(), {
      loading: (() => {
        const _0x4ecd4b = bt();
        const _0x3745d3 = _0x4ecd4b.firstChild;
        const _0x23263b = _0x3745d3.nextSibling;
        _0x23263b.nextSibling;
        _0xc6fe38(_0x4ecd4b, () => _0x832e2b.alias, _0x23263b);
        return _0x4ecd4b;
      })(),
      success: _0x34c12c => (() => {
        const _0x1926ec = M();
        _0xc6fe38(_0x1926ec, _0x34c12c);
        return _0x1926ec;
      })(),
      error: _0x562cf7 => (() => {
        const _0x1ea202 = M();
        _0xc6fe38(_0x1ea202, _0x562cf7);
        return _0x1ea202;
      })()
    }, _0x4f82aa);
  };
  _0x463f07({
    onConfirm: () => _0x1907c6(),
    onCancel: () => ({}),
    message: "Are you sure you want to ban " + _0x832e2b.alias + " from this race?"
  });
});
const Sa = _0x3f030f => {
  _0x3fd32c("Marked race location", "success");
  _0x4376d7("np-ui:racingLocateRace", {
    race: _0x3f030f,
    id: _0x3f030f.id,
    eventId: _0x3f030f.eventId
  });
};
const kt = _0x4339dc => {
  _0x3fd32c("Toggled race preview", "success");
  _0x4376d7("np-ui:racingPreviewRace", {
    race: _0x4339dc,
    id: _0x4339dc.id
  });
};
const xa = (_0x46f993, _0x2b3c5a) => _0x7d06f5(_0x46f993, async () => {
  const {
    setConfirmModalInfo: _0x38e59b
  } = T();
  const _0x5a7b69 = async () => {
    const _0x21308e = () => new Promise(async (_0x20976d, _0x21537f) => {
      const _0x5c32ce = await _0x4376d7("np-ui:racingStartRace", {
        race: _0x2b3c5a
      });
      if (_0x5c32ce.meta.ok) {
        return _0x20976d("Started race");
      } else {
        return _0x21537f(_0x5c32ce.meta.message);
      }
    });
    _0x138f71.promise(_0x21308e(), {
      loading: ha(),
      success: _0x304ac1 => (() => {
        const _0x3e5ce4 = M();
        _0xc6fe38(_0x3e5ce4, _0x304ac1);
        return _0x3e5ce4;
      })(),
      error: _0x26b0b4 => (() => {
        const _0x525708 = M();
        _0xc6fe38(_0x525708, _0x26b0b4);
        return _0x525708;
      })()
    }, _0x4f82aa);
  };
  _0x38e59b({
    onConfirm: () => _0x5a7b69(),
    onCancel: () => ({}),
    message: "Are you sure you want to start race?"
  });
});
const Ga = (_0x553bca, _0x3e9a00) => _0x7d06f5(_0x553bca, async () => {
  const {
    setConfirmModalInfo: _0x45b68d,
    setPage: _0x5406a8
  } = T();
  const _0x51b531 = async () => {
    const _0x592c6a = () => new Promise(async (_0x2cecb8, _0x2e021f) => {
      const _0x268268 = await _0x4376d7("np-ui:racingEndRace", {
        race: _0x3e9a00
      });
      if (_0x268268.meta.ok) {
        _0x5406a8("races");
        return _0x2cecb8("Ended race");
      } else {
        return _0x2e021f(_0x268268.meta.message);
      }
    });
    _0x138f71.promise(_0x592c6a(), {
      loading: pa(),
      success: _0x5a6a43 => (() => {
        const _0x2613e2 = M();
        _0xc6fe38(_0x2613e2, _0x5a6a43);
        return _0x2613e2;
      })(),
      error: _0x13cf82 => (() => {
        const _0x424417 = M();
        _0xc6fe38(_0x424417, _0x13cf82);
        return _0x424417;
      })()
    }, _0x4f82aa);
  };
  _0x45b68d({
    onConfirm: () => _0x51b531(),
    onCancel: () => ({}),
    message: "Are you sure you want to end the race?"
  });
});
const Ra = (_0x361488, _0x177d45) => _0x7d06f5(_0x361488, async () => {
  const {
    setConfirmModalInfo: _0x25f2d5,
    setPage: _0x36effd
  } = T();
  const _0x4df4ea = async () => {
    const _0x16d989 = () => new Promise(async (_0x7b89f6, _0x189321) => {
      const _0x9e725 = await _0x4376d7("np-ui:racingLeaveRace", {
        race: _0x177d45
      });
      if (_0x9e725.meta.ok) {
        _0x36effd("races");
        return _0x7b89f6("Left race");
      } else {
        return _0x189321(_0x9e725.meta.message);
      }
    });
    _0x138f71.promise(_0x16d989(), {
      loading: fa(),
      success: _0x56b115 => (() => {
        const _0x23f4d4 = M();
        _0xc6fe38(_0x23f4d4, _0x56b115);
        return _0x23f4d4;
      })(),
      error: _0x3316db => (() => {
        const _0x388430 = M();
        _0xc6fe38(_0x388430, _0x3316db);
        return _0x388430;
      })()
    }, _0x4f82aa);
  };
  _0x25f2d5({
    onConfirm: () => _0x4df4ea(),
    onCancel: () => ({}),
    message: "Are you sure you want to leave the race?"
  });
});
const Ct = _0x5a0d9a => {
  const _0x59655d = [];
  for (const _0x4074ad of _0x5a0d9a) {
    _0x59655d.push({
      position: 0,
      alias: _0x4074ad.alias,
      elo: _0x4074ad.rating
    });
  }
  return _0x59655d;
};
const Oa = async (_0x148bc8, _0x576a2c) => {
  const _0x3aa941 = await _0x4376d7("np-ui:getEloLadder", {
    page: _0x148bc8,
    results_per_page: _0x576a2c
  }, {
    returnData: $t
  });
  return Ct(_0x3aa941.data);
};
const Ia = async (_0xa7e75f, _0x335b70, _0x3921fc) => {
  const _0x48cca7 = await _0x4376d7("np-ui:getEloLadderFilter", {
    page: _0xa7e75f,
    results_per_page: _0x335b70,
    alias: _0x3921fc
  }, {
    returnData: $t
  });
  return {
    ladder: Ct(_0x48cca7.data.ladder),
    page: _0x48cca7.data.page
  };
};
const we = _0x3a9ff0 => _0x3a9ff0.includes("Upgraded") ? _0x3a9ff0.charAt(0) + "+" : _0x3a9ff0;
const Pa = (_0x3ca39f, _0x238511) => _0x7d06f5(_0x3ca39f, () => {
  const {
    setRacingState: _0x2bf3b2
  } = T();
  const _0x588000 = {};
  if (_0x238511.maps) {
    _0x588000.raceTracks = Object.values(_0x238511.maps).sort((_0xb2701a, _0x2019a5) => _0xb2701a.name.localeCompare(_0x2019a5.name));
  }
  if (_0x238511.pending) {
    _0x588000.pendingRaces = Object.values(_0x238511.pending).sort((_0x840e34, _0x1a18db) => _0x840e34.createdAt === _0x1a18db.createdAt ? 0 : _0x1a18db.createdAt - _0x840e34.createdAt);
  }
  if (_0x238511.active) {
    _0x588000.activeRaces = Object.values(_0x238511.active).sort((_0x43536c, _0x30fe62) => _0x43536c.createdAt === _0x30fe62.createdAt ? 0 : _0x30fe62.createdAt - _0x43536c.createdAt);
  }
  if (_0x238511.completed) {
    _0x588000.completedRaces = Object.values(_0x238511.completed).map(_0x4a00ac => ({
      ..._0x4a00ac,
      name: _0x4a00ac.track
    }));
    _0x588000.completedRaces.sort((_0x1ec1d1, _0x446b92) => _0x1ec1d1.timestamp === _0x446b92.timestamp ? 0 : _0x446b92.timestamp - _0x1ec1d1.timestamp);
  }
  _0x2bf3b2({
    ..._0x588000
  });
});
const La = (_0x41e19c, _0x4c6b14) => _0x7d06f5(_0x41e19c, () => {
  const {
    setRacingState: _0x37c5b3
  } = T();
  _0x37c5b3({
    isNightTime: _0x4c6b14.isNightTime
  });
});
const za = (_0x2b7900, _0x592f8d) => _0x7d06f5(_0x2b7900, () => {
  const {
    setRacingState: _0x13b891
  } = T();
  _0x13b891({
    racingAlias: _0x592f8d.racingAlias
  });
});
const Ge = "" + new URL("home-icon-abd79568.svg", import.meta.url).href;
const Ba = "" + new URL("auction-icon-64e40a41.svg", import.meta.url).href;
const Ma = "" + new URL("races-icon-2360cabe.svg", import.meta.url).href;
const Da = _0x49f26a("<div class=\"boosting-btn\">");
const z = _0x540978 => (() => {
  const _0x9e0ab7 = Da();
  _0x589bfd(_0x9e0ab7, "click", _0x540978.onClick, true);
  _0xc6fe38(_0x9e0ab7, () => _0x540978.label);
  return _0x9e0ab7;
})();
_0xa1a894(["click"]);
const Ea = "" + new URL("race-flag-icon-5a131fdc.svg", import.meta.url).href;
const Na = "" + new URL("gavel-icon-e6313fe6.svg", import.meta.url).href;
const Va = _0x49f26a("<div class=\"heading-hero-container\"><img alt=\"\"><div class=\"table-info\"><p></p><h1>");
const te = _0x5eefec => (() => {
  const _0x5afa36 = Va();
  const _0x1cee36 = _0x5afa36.firstChild;
  const _0x2c5516 = _0x1cee36.nextSibling;
  const _0x120054 = _0x2c5516.firstChild;
  const _0x2cf0ec = _0x120054.nextSibling;
  _0xc6fe38(_0x120054, () => _0x5eefec.title);
  _0xc6fe38(_0x2cf0ec, () => _0x5eefec.subTitle);
  _0x58f363(() => _0x1ce879(_0x1cee36, "src", _0x5eefec.gavelIcon ? Na : Ea));
  return _0x5afa36;
})();
const Ha = _0x49f26a("<span class=\"text-ranked\">RANKED");
const Fa = _0x49f26a("<span class=\"text-[#00F8B9]\">");
const Ua = _0x49f26a("<div class=\"table-container\">");
const Ka = _0x49f26a("<div class=\"table-empty\">No pending races..");
const qa = _0xe326ab => {
  const _0x224451 = _0x4c148f();
  const _0x34e9f2 = [{
    accessorKey: "ranked",
    header: "",
    cell: _0x42fd3d => _0x42fd3d.row.original.ranked ? Ha() : ""
  }, {
    accessorKey: "eventName",
    header: "Event Name"
  }, {
    accessorKey: "name",
    header: "Track"
  }, {
    accessorKey: "vehicleClass",
    header: "Class"
  }, {
    accessorKey: "type",
    header: "Type"
  }, {
    accessorFn: _0x2bea68 => _0x2bea68.buyIn.toFixed(0) + " BET",
    cell: _0x2a12c6 => _0x2a12c6.row.original.ranked ? (() => {
      const _0x5e7339 = Fa();
      _0xc6fe38(_0x5e7339, () => _0x2a12c6.getValue());
      return _0x5e7339;
    })() : _0x2a12c6.getValue(),
    header: "Buy In"
  }, {
    accessorFn: _0x2c27ce => _0x2c27ce.type === "Lap" ? _0x2c27ce.laps : "—",
    header: "Total Laps"
  }, {
    accessorFn: _0x2e2703 => Number(_0x2e2703.length / 1000 * 0.715).toFixed(2) + "mi",
    header: "Total Distance"
  }, {
    cell: _0x5da3b1 => _0x286b7e(z, {
      label: "View",
      onClick: () => Me(_0x224451, {
        ..._0x5da3b1.row.original,
        viewType: "pending"
      })
    }),
    header: "‎"
  }];
  return (() => {
    const _0x22351f = Ua();
    _0xc6fe38(_0x22351f, _0x286b7e(te, {
      title: "List of",
      subTitle: "Pending Races"
    }), null);
    _0xc6fe38(_0x22351f, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0xe326ab.items.length > 0;
      },
      get fallback() {
        return Ka();
      },
      get children() {
        return _0x286b7e(_0x59a38b, {
          get rows() {
            return _0xe326ab.items;
          },
          columns: _0x34e9f2
        });
      }
    }), null);
    return _0x22351f;
  })();
};
const De = _0x17dfa8 => Number(_0x17dfa8 / 1000 * 0.715).toFixed(2) + "mi";
const ja = _0x49f26a("<div class=\"table-container\">");
const Ja = _0x49f26a("<div class=\"table-empty\">No active races..");
const Wa = _0x5d1332 => {
  const _0x29347c = _0x4c148f();
  const _0x20d0d5 = [{
    accessorKey: "eventName",
    header: "Event Name"
  }, {
    accessorKey: "name",
    header: "Track"
  }, {
    accessorKey: "vehicleClass",
    header: "Class"
  }, {
    accessorKey: "type",
    header: "Type"
  }, {
    accessorFn: _0xb920d8 => _0xb920d8.buyIn.toFixed(0) + " BET",
    header: "Buy In"
  }, {
    accessorFn: _0xc77903 => _0xc77903.type === "Lap" ? _0xc77903.laps : "—",
    header: "Total Laps"
  }, {
    accessorFn: _0x617a38 => De(_0x617a38.length),
    header: "Total Distance"
  }, {
    cell: _0x29fe9f => _0x286b7e(z, {
      label: "View",
      onClick: () => Me(_0x29347c, {
        ..._0x29fe9f.row.original,
        viewType: "active"
      })
    }),
    header: "‎"
  }];
  return (() => {
    const _0x2f0bd2 = ja();
    _0xc6fe38(_0x2f0bd2, _0x286b7e(te, {
      title: "List of",
      subTitle: "Active Races"
    }), null);
    _0xc6fe38(_0x2f0bd2, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x5d1332.items.length > 0;
      },
      get fallback() {
        return Ja();
      },
      get children() {
        return _0x286b7e(_0x59a38b, {
          get rows() {
            return _0x5d1332.items;
          },
          columns: _0x20d0d5
        });
      }
    }), null);
    return _0x2f0bd2;
  })();
};
const Ya = _0x49f26a("<span class=\"text-ranked\">RANKED");
const Qa = _0x49f26a("<span class=\"text-[#00F8B9]\">");
const Za = _0x49f26a("<div class=\"table-container\">");
const Xa = _0x49f26a("<div class=\"table-empty\">No completed races..");
const en = _0x530ed3 => {
  const {
    setPage: _0xd70f51,
    setRacingState: _0x5b0b91
  } = T();
  const _0x53d179 = _0x4d59fe => {
    _0x5b0b91({
      selectedRaceCompleted: _0x4d59fe
    });
    _0xd70f51("completed-race");
  };
  const _0x31a5ae = [{
    accessorKey: "ranked",
    header: "",
    cell: _0x1eddc0 => _0x1eddc0.getValue() ? Ya() : ""
  }, {
    accessorKey: "eventName",
    header: "Event Name"
  }, {
    accessorKey: "track",
    header: "Track"
  }, {
    accessorKey: "type",
    header: "Type"
  }, {
    accessorFn: _0x1d9516 => _0x1d9516.buyIn.toFixed(0) + " BET",
    cell: _0x8e1c13 => _0x8e1c13.row.original.ranked ? (() => {
      const _0x314c2f = Qa();
      _0xc6fe38(_0x314c2f, () => _0x8e1c13.getValue());
      return _0x314c2f;
    })() : _0x8e1c13.getValue(),
    header: "Buy In"
  }, {
    accessorFn: _0x5dfe56 => _0x5dfe56.type === "Lap" ? _0x5dfe56.laps : "—",
    header: "Total Laps"
  }, {
    accessorFn: _0x15aaa9 => De(_0x15aaa9.length),
    header: "Total Distance"
  }, {
    accessorFn: _0x1cf402 => "" + new Date(_0x1cf402.timestamp).toLocaleTimeString(),
    header: "Time"
  }, {
    cell: _0xa671cd => _0x286b7e(z, {
      label: "View",
      onClick: () => _0x53d179(_0xa671cd.row.original)
    }),
    header: "‎"
  }];
  return (() => {
    const _0x4a053f = Za();
    _0xc6fe38(_0x4a053f, _0x286b7e(te, {
      title: "List of",
      subTitle: "Completed Races"
    }), null);
    _0xc6fe38(_0x4a053f, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x530ed3.items.length > 0;
      },
      get fallback() {
        return Xa();
      },
      get children() {
        return _0x286b7e(_0x59a38b, {
          get rows() {
            return _0x530ed3.items;
          },
          columns: _0x31a5ae
        });
      }
    }), null);
    return _0x4a053f;
  })();
};
const tn = _0x49f26a("<div class=\"races-page\"><div class=\"race-navigation\">");
const an = () => {
  const {
    racingState: _0x1bbfef,
    setPage: _0x59c886
  } = T();
  return (() => {
    const _0xcd9ec9 = tn();
    const _0x59edaf = _0xcd9ec9.firstChild;
    _0xc6fe38(_0x59edaf, (() => {
      const _0x5a6f1a = _0x55a71e(() => !!_0x1bbfef.createTrack.hasCreateChip);
      return () => _0x5a6f1a() && _0x286b7e(z, {
        get label() {
          if (_0x1bbfef.createTrack.createTrackPayload.createTrackId !== "" || _0x1bbfef.createTrack.createTrackPayload.raceName !== "") {
            return "Edit Track";
          } else {
            return "Create Track";
          }
        },
        onClick: () => _0x59c886("race-create-track")
      });
    })(), null);
    _0xc6fe38(_0x59edaf, _0x286b7e(z, {
      label: "View Ladder",
      onClick: () => _0x59c886("race-ladder")
    }), null);
    _0xc6fe38(_0x59edaf, _0x286b7e(z, {
      label: "View Tracks",
      onClick: () => _0x59c886("race-tracks")
    }), null);
    _0xc6fe38(_0xcd9ec9, _0x286b7e(qa, {
      get items() {
        return _0x1bbfef.pendingRaces;
      }
    }), null);
    _0xc6fe38(_0xcd9ec9, _0x286b7e(Wa, {
      get items() {
        return _0x1bbfef.activeRaces;
      }
    }), null);
    _0xc6fe38(_0xcd9ec9, _0x286b7e(en, {
      get items() {
        return _0x1bbfef.completedRaces;
      }
    }), null);
    return _0xcd9ec9;
  })();
};
const Se = (_0x1b6625, _0x3bc16c) => {
  if (!_0x1b6625) {
    return "DNF";
  }
  const _0x10e058 = Math.floor(_0x1b6625 / 60000);
  const _0x238aac = (_0x1b6625 % 60000 / 1000).toFixed(3);
  return _0x10e058 + ":" + _0x238aac.padStart(6, "0");
};
const nn = _0x49f26a("<span>#");
const rn = _0x49f26a("<span class=\"text-[#00F8B9]\">+(<!>) BET");
const sn = _0x49f26a("<span> / ");
const on = _0x49f26a("<span>");
const cn = _0x49f26a("<div class=\"completed-race-view\"><div class=\"leaderboard-table\">");
const ln = () => {
  const {
    racingState: _0x5be07b
  } = T();
  const _0x529c22 = _0x1bc99a();
  const _0x3bf526 = [{
    accessorKey: "place",
    header: "Position",
    cell: _0x1b62ca => (() => {
      const _0x241be0 = nn();
      _0x241be0.firstChild;
      _0xc6fe38(_0x241be0, () => _0x1b62ca.row.index + 1, null);
      return _0x241be0;
    })()
  }, {
    accessorKey: "alias",
    header: "Alias"
  }, _0x529c22.accessor("prize", {
    header: "Prize+Reward",
    cell: _0x5aabb1 => (() => {
      const _0x363719 = rn();
      const _0x2b27b5 = _0x363719.firstChild;
      const _0x1e8cc6 = _0x2b27b5.nextSibling;
      _0x1e8cc6.nextSibling;
      _0xc6fe38(_0x363719, () => _0x5aabb1.getValue(), _0x2b27b5);
      _0xc6fe38(_0x363719, () => _0x5aabb1.row.original.cryptoReward, _0x1e8cc6);
      return _0x363719;
    })()
  }), _0x529c22.accessor("oldRating", {}), _0x529c22.accessor("newRating", {}), _0x529c22.display({
    header: "Rating",
    cell: _0x23555d => [(() => {
      const _0x2f61e5 = sn();
      const _0x595c85 = _0x2f61e5.firstChild;
      _0xc6fe38(_0x2f61e5, () => _0x23555d.row.getValue("oldRating"), _0x595c85);
      return _0x2f61e5;
    })(), (() => {
      const _0x5b93f0 = on();
      _0xc6fe38(_0x5b93f0, () => _0x23555d.row.getValue("newRating"));
      _0x58f363(_0x2402d3 => {
        const _0x3c33cc = _0x23555d.row.getValue("newRating") > _0x23555d.row.getValue("oldRating");
        const _0xfa9e2 = _0x23555d.row.getValue("newRating") < _0x23555d.row.getValue("oldRating");
        if (_0x3c33cc !== _0x2402d3._v$) {
          _0x5b93f0.classList.toggle("text-green-500", _0x2402d3._v$ = _0x3c33cc);
        }
        if (_0xfa9e2 !== _0x2402d3._v$2) {
          _0x5b93f0.classList.toggle("text-red-500", _0x2402d3._v$2 = _0xfa9e2);
        }
        return _0x2402d3;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x5b93f0;
    })()]
  }), {
    accessorKey: "finished",
    header: "Total Time",
    accessorFn: _0x400cf8 => Se(_0x400cf8.finished)
  }, {
    accessorKey: "bestLapTime",
    header: "Best Lap",
    accessorFn: _0x4e74a3 => Se(_0x4e74a3.bestLapTime)
  }];
  return (() => {
    const _0x46c88c = cn();
    const _0x34a631 = _0x46c88c.firstChild;
    _0xc6fe38(_0x46c88c, _0x286b7e(te, {
      title: "Completed",
      subTitle: "Race"
    }), _0x34a631);
    _0xc6fe38(_0x34a631, _0x286b7e(_0x59a38b, {
      get rows() {
        return _0x5be07b.selectedRaceCompleted?.players ?? [];
      },
      columns: _0x3bf526,
      columnVisibility: {
        oldRating: false,
        newRating: false
      }
    }));
    return _0x46c88c;
  })();
};
const dn = _0x939af => _0x939af.type === "text" || _0x939af.type === "password" ? _0x939af : null;
const un = _0x4ba256 => _0x4ba256.type === "number" ? _0x4ba256 : null;
const vn = _0x136198 => _0x136198.type === "select" ? _0x136198 : null;
const gn = (_0x434b30, _0x2cf781) => {
  let _0x378ecd = [{
    type: "text",
    key: "eventName",
    label: "Event Name"
  }, {
    type: "select",
    key: "vehicleClass",
    label: "Vehicle Class",
    options: [{
      value: "Open",
      name: "Open"
    }, {
      value: "X",
      name: "X"
    }, {
      value: "S",
      name: "S"
    }, {
      value: "A",
      name: "A"
    }, {
      value: "B",
      name: "B"
    }, {
      value: "C",
      name: "C"
    }]
  }, {
    type: "select",
    key: "ranked",
    label: "Ranked",
    options: [{
      value: false,
      name: "No"
    }, {
      value: true,
      name: "Yes"
    }]
  }, {
    type: "number",
    key: "buyIn",
    label: "Buy In (BET)"
  }, {
    type: "number",
    key: "laps",
    label: "Laps"
  }, {
    type: "number",
    key: "countdown",
    label: "Countdown Start",
    disable: _0x454c67 => _0x454c67.ranked
  }, {
    type: "number",
    key: "dnfPosition",
    label: "DNF Position",
    disable: _0x233904 => _0x233904.ranked
  }, {
    type: "number",
    key: "dnfCountdown",
    label: "DNF Countdown",
    disable: _0x11ba44 => _0x11ba44.ranked
  }, {
    type: "number",
    key: "hitPenalty",
    label: "Checkpoint Hit Pentalty"
  }, {
    type: "select",
    key: "phasing",
    label: "Phasing",
    options: [{
      value: "none",
      name: "None"
    }, {
      value: "30",
      name: "30 seconds"
    }, {
      value: "60",
      name: "60 seconds"
    }, {
      value: "90",
      name: "90 seconds"
    }, {
      value: "full",
      name: "Full"
    }]
  }, {
    type: "password",
    key: "password",
    label: "Password",
    shouldShow: _0x3ee82a => !_0x3ee82a.ranked
  }, {
    type: "select",
    key: "sendNotification",
    label: "Send Notification",
    options: [{
      value: false,
      name: "No"
    }, {
      value: true,
      name: "Yes"
    }],
    shouldShow: _0xa0eb6 => !_0xa0eb6.ranked
  }, {
    type: "select",
    key: "reverse",
    label: "Reverse",
    options: [{
      value: false,
      name: "No"
    }, {
      value: true,
      name: "Yes"
    }]
  }, {
    type: "select",
    key: "showPosition",
    label: "Show Position",
    options: [{
      value: true,
      name: "Show"
    }, {
      value: false,
      name: "Hide"
    }],
    shouldShow: _0x4f85be => !_0x4f85be.ranked
  }, {
    type: "select",
    key: "forcePerspective",
    label: "Force FPP",
    options: [{
      value: false,
      name: "No"
    }, {
      value: true,
      name: "Yes"
    }],
    shouldShow: _0x476bac => !_0x476bac.ranked
  }, {
    type: "select",
    key: "driftMode",
    label: "Drift Race",
    options: [{
      value: false,
      name: "No"
    }, {
      value: true,
      name: "Yes"
    }],
    shouldShow: _0x4df3f5 => !_0x4df3f5.ranked
  }];
  if (_0x434b30.type === "Sprint") {
    _0x378ecd = _0x378ecd.filter(_0x3767be => _0x3767be.key !== "laps");
  }
  _0x378ecd = _0x378ecd.filter(_0x286ae5 => !["hitPenalty"].includes(_0x286ae5.key));
  if (_0x434b30.id === "random") {
    _0x378ecd = _0x378ecd.filter(_0x3d58a1 => !["showPosition", "reverse", "tournamentName"].includes(_0x3d58a1.key));
  }
  if (!_0x2cf781.allowPhasing) {
    _0x378ecd = _0x378ecd.filter(_0x584201 => _0x584201.key !== "phasing");
  }
  if (_0x434b30.type === "PointToPoint") {
    _0x378ecd = _0x378ecd.filter(_0x603e70 => !["reverse", "tournamentName", "driftMode", "laps"].includes(_0x603e70.key));
    _0x378ecd.push({
      type: "number",
      key: "numCheckpoints",
      label: "Number of Checkpoints",
      value: 5
    });
    _0x378ecd.push({
      type: "number",
      key: "pointToPointDistance",
      label: "Point To Point Distance",
      value: 100
    });
  }
  return _0x378ecd;
};
const _n = _0x49f26a("<div class=\"create-race-view\"><div class=\"form-container\"><div class=\"form-header\"><div class=\"title\"><p>Creating</p><h1> Race</div></div><button class=\"create-btn\">Create Race");
const mn = _0x49f26a("<div class=\"form-inputs\">");
const hn = _0x49f26a("<div class=\"form-item\"><label></label><div class=\"input-container\">");
const pn = _0x49f26a("<input autocomplete=\"off\">");
const fn = _0x49f26a("<div class=\"select-input\"><button></button><span></span><button>");
const $n = () => {
  const {
    racingState: _0x4cf224
  } = T();
  const _0x87d844 = _0x4c148f();
  const _0x5bd275 = {
    buyIn: 10,
    laps: 3,
    countdown: 10,
    dnfPosition: 3,
    dnfCountdown: 180,
    vehicleClass: "S",
    sendNotification: true,
    password: "",
    forcePerspective: false,
    driftMode: false,
    showPosition: true,
    numCheckpoints: 5,
    pointToPointDistance: 100
  };
  const [_0x496fcc, _0x24158c] = _0x4a1d68({
    eventName: "",
    alias: _0x4cf224.racingAlias ?? "My Alias ",
    ranked: false,
    ..._0x5bd275
  });
  const _0x1b76c3 = (_0x1ee537, _0x441555) => {
    _0x24158c(_0x1ee537, _0x441555);
    if (_0x1ee537 === "ranked" && _0x441555) {
      _0x24158c({
        ..._0x496fcc,
        ..._0x5bd275
      });
    }
  };
  return (() => {
    const _0x2a769e = _n();
    const _0x322aab = _0x2a769e.firstChild;
    const _0x2f0f8f = _0x322aab.firstChild;
    const _0x8cd7e1 = _0x2f0f8f.firstChild;
    const _0x46ebe0 = _0x8cd7e1.firstChild;
    const _0x1dcd3d = _0x46ebe0.nextSibling;
    const _0x3e24dd = _0x1dcd3d.firstChild;
    const _0x28c6fe = _0x2f0f8f.nextSibling;
    _0xc6fe38(_0x1dcd3d, () => _0x4cf224.selectedTrack?.name, _0x3e24dd);
    _0xc6fe38(_0x322aab, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x4cf224.selectedTrack;
      },
      children: _0x3a6620 => (() => {
        const _0x2a70fa = mn();
        _0xc6fe38(_0x2a70fa, _0x286b7e(_0x33cd21, {
          get each() {
            return gn(_0x3a6620(), _0x4cf224);
          },
          children: _0x1cb6b6 => _0x286b7e(_0x4ebf42, {
            get when() {
              if (_0x55a71e(() => !!_0x1cb6b6.shouldShow)()) {
                return _0x1cb6b6.shouldShow(_0x496fcc);
              } else {
                return true;
              }
            },
            get children() {
              const _0x1d135d = hn();
              const _0x1fbcf9 = _0x1d135d.firstChild;
              const _0x2c1a57 = _0x1fbcf9.nextSibling;
              _0xc6fe38(_0x1fbcf9, () => _0x1cb6b6.label);
              _0xc6fe38(_0x2c1a57, _0x286b7e(_0x4ebf42, {
                get when() {
                  return dn(_0x1cb6b6) || un(_0x1cb6b6);
                },
                children: _0x28bd18 => (() => {
                  const _0x2e5e64 = pn();
                  _0x2e5e64.addEventListener("change", _0x2ea8d6 => {
                    const _0x27c0f4 = _0x2ea8d6?.target.value;
                    const _0x28256c = _0x28bd18().type === "number" ? parseInt(_0x27c0f4) : _0x27c0f4;
                    _0x1b76c3(_0x28bd18().key, _0x28256c);
                  });
                  _0x58f363(_0xa430bb => {
                    const _0x3d36f6 = _0x28bd18().type;
                    const _0x56a78e = "Enter " + _0x28bd18().label;
                    const _0x5e690f = _0x28bd18()?.disable ? _0x28bd18().disable?.(_0x496fcc) ?? false : false;
                    if (_0x3d36f6 !== _0xa430bb._v$) {
                      _0x1ce879(_0x2e5e64, "type", _0xa430bb._v$ = _0x3d36f6);
                    }
                    if (_0x56a78e !== _0xa430bb._v$2) {
                      _0x1ce879(_0x2e5e64, "placeholder", _0xa430bb._v$2 = _0x56a78e);
                    }
                    if (_0x5e690f !== _0xa430bb._v$3) {
                      _0x2e5e64.disabled = _0xa430bb._v$3 = _0x5e690f;
                    }
                    return _0xa430bb;
                  }, {
                    _v$: undefined,
                    _v$2: undefined,
                    _v$3: undefined
                  });
                  _0x58f363(() => _0x2e5e64.value = _0x496fcc[_0x28bd18().key] ?? "");
                  return _0x2e5e64;
                })()
              }), null);
              _0xc6fe38(_0x2c1a57, _0x286b7e(_0x4ebf42, {
                get when() {
                  return vn(_0x1cb6b6);
                },
                children: _0x29fcbb => _0x286b7e(bn, {
                  get options() {
                    return _0x29fcbb().options ?? [];
                  },
                  get value() {
                    return _0x496fcc[_0x29fcbb().key] ?? "";
                  },
                  onChange: _0x30a78b => {
                    _0x1b76c3(_0x29fcbb().key, _0x30a78b);
                  }
                })
              }), null);
              return _0x1d135d;
            }
          })
        }));
        return _0x2a70fa;
      })()
    }), _0x28c6fe);
    _0x28c6fe.$$click = () => ba(_0x496fcc, _0x4cf224.selectedTrack, _0x87d844);
    return _0x2a769e;
  })();
};
const bn = _0x245741 => {
  const [_0x1f7829, _0x520b92] = _0x4a46bb(0);
  const _0x3ea680 = () => {
    _0x520b92(_0x5c4ece => (_0x5c4ece - 1 + _0x245741.options.length) % _0x245741.options.length);
    _0x245741.onChange(_0x245741.options[_0x1f7829()].value);
  };
  const _0xce8004 = () => {
    _0x520b92(_0x43794a => (_0x43794a + 1) % _0x245741.options.length);
    _0x245741.onChange(_0x245741.options[_0x1f7829()].value);
  };
  _0x211aa6(() => {
    if (_0x245741?.value) {
      const _0x48074c = _0x245741.options.findIndex(_0x5a6a9e => _0x5a6a9e.value === _0x245741.value);
      if (_0x48074c !== -1) {
        _0x520b92(_0x48074c);
      }
    }
  });
  return (() => {
    const _0x1f4342 = fn();
    const _0x46e8d9 = _0x1f4342.firstChild;
    const _0x2158e6 = _0x46e8d9.nextSibling;
    const _0x50c3c9 = _0x2158e6.nextSibling;
    _0x46e8d9.$$click = _0x3ea680;
    _0xc6fe38(_0x46e8d9, _0x286b7e(_0x2db4c2, {
      icon: _0x50e4ec
    }));
    _0xc6fe38(_0x2158e6, () => _0x245741.options[_0x1f7829()].name);
    _0x50c3c9.$$click = _0xce8004;
    _0xc6fe38(_0x50c3c9, _0x286b7e(_0x2db4c2, {
      class: "icon",
      icon: _0x8e67e5
    }));
    return _0x1f4342;
  })();
};
_0xa1a894(["click"]);
const kn = _0x49f26a("<div class=\"track-actions\">");
const Cn = _0x49f26a("<div class=\"tracks-view\"><div class=\"flex w-full justify-between\"><input type=\"text\" placeholder=\"Search Tracks\">");
const yn = () => {
  const {
    racingState: _0x50d1dc,
    setPage: _0x411aa0,
    setRacingState: _0x5c7ef7
  } = T();
  const _0x645bcd = [{
    accessorKey: "name",
    header: "Track Name"
  }, {
    accessorKey: "type",
    header: "Track Type"
  }, {
    accessorFn: _0x442190 => _0x442190.length ? Number(_0x442190.length / 1000 * 0.715).toFixed(2) + "mi" : "—",
    header: "Track Distance"
  }, {
    accessorFn: _0x9032e0 => new Date(_0x9032e0.createdAt * 1000).toLocaleDateString(),
    header: "Date Created"
  }, {
    cell: _0x50d226 => (() => {
      const _0x3cc36f = kn();
      _0xc6fe38(_0x3cc36f, _0x286b7e(z, {
        label: "Create",
        onClick: () => _0x533a58(_0x50d226.row.original)
      }), null);
      _0xc6fe38(_0x3cc36f, _0x286b7e(z, {
        label: "Leaderboard",
        onClick: () => _0x22264d(_0x50d226.row.original)
      }), null);
      _0xc6fe38(_0x3cc36f, _0x286b7e(z, {
        label: "Preview",
        onClick: () => kt(_0x50d226.row.original)
      }), null);
      return _0x3cc36f;
    })(),
    header: "‎"
  }];
  const _0x533a58 = _0x3bf6f0 => {
    _0x5c7ef7({
      selectedTrack: _0x3bf6f0
    });
    _0x411aa0("create-race");
  };
  const _0x22264d = _0x237207 => {
    _0x5c7ef7({
      selectedTrack: _0x237207
    });
    _0x411aa0("race-leaderboard");
  };
  const [_0x958eb, _0x14f5e8] = _0x4a46bb("");
  const _0x121e5a = _0x55a71e(() => _0x50d1dc.raceTracks.filter(_0x275963 => _0x275963.name.toLowerCase().includes(_0x958eb().toLowerCase())), [_0x50d1dc.raceTracks, _0x958eb()]);
  return (() => {
    const _0x228c80 = Cn();
    const _0x318bcd = _0x228c80.firstChild;
    const _0xeefaf5 = _0x318bcd.firstChild;
    _0xc6fe38(_0x318bcd, _0x286b7e(te, {
      title: "List of",
      subTitle: "Racing Tracks"
    }), _0xeefaf5);
    _0xeefaf5.addEventListener("change", _0x5293ae => _0x14f5e8(_0x5293ae.target.value));
    _0xc6fe38(_0x228c80, _0x286b7e(_0x59a38b, {
      get rows() {
        return _0x121e5a();
      },
      columns: _0x645bcd,
      sortable: true
    }), null);
    return _0x228c80;
  })();
};
const An = _0x49f26a("<div class=\"ladder-view\"><div class=\"ladder-nav\"><input type=\"text\" placeholder=\"Alias\"></div><div class=\"ladder-table\"></div><div class=\"ladder-pagination\"><span>");
const Tn = () => {
  const {
    racingState: _0x2d2cd4,
    setRacingState: _0x2a19f6
  } = T();
  const [_0x38dd98, _0x242e05] = _0x4a46bb("");
  const [_0x9469f6, _0x2d5b83] = _0x4a46bb(1);
  const [_0x932126] = _0x4a46bb(10);
  let _0x187d2c;
  _0xbc8eb0(async () => {
    const _0x3a0f03 = (_0x9469f6() - 1) * _0x932126() + 1;
    const [_0x1b9bf2] = await Promise.all([Oa(_0x9469f6(), _0x932126())]);
    _0x1b9bf2.map((_0x5ea7c5, _0x217c28) => _0x5ea7c5.position = _0x217c28 + _0x3a0f03);
    _0x2a19f6({
      raceLadder: _0x1b9bf2
    });
  });
  const _0x398236 = _0x141ffb => {
    _0x2d5b83(_0x141ffb);
    new Promise(async () => {
      const [_0x84de40] = await Promise.all([Ia(_0x141ffb, _0x932126(), _0x38dd98())]);
      const _0x5d030d = (_0x84de40.page - 1) * _0x932126() + 1;
      _0x84de40.ladder.map((_0x1e3ca1, _0x2aa688) => _0x1e3ca1.position = _0x2aa688 + _0x5d030d);
      _0x2a19f6({
        raceLadder: _0x84de40.ladder
      });
      _0x2d5b83(_0x84de40.page);
    });
  };
  const _0x49ea25 = _0x289d0b => {
    _0x242e05("");
    _0x289d0b = _0x289d0b < 1 ? 1 : _0x289d0b;
    _0x398236(_0x289d0b);
    _0x2d5b83(_0x289d0b);
  };
  const _0x191f32 = _0x3df11f => {
    clearTimeout(_0x187d2c);
    _0x187d2c = setTimeout(() => _0x398236(1), _0x3df11f);
  };
  const _0x48f92d = [{
    accessorKey: "position",
    header: "Position",
    cell: _0x4018d8 => "#" + _0x4018d8.cell.getValue()
  }, {
    accessorKey: "alias",
    header: "Alias"
  }, {
    accessorKey: "elo",
    header: "Rating"
  }];
  return (() => {
    const _0x3cb84d = An();
    const _0xd92590 = _0x3cb84d.firstChild;
    const _0x3d2ab2 = _0xd92590.firstChild;
    const _0x29b4e8 = _0xd92590.nextSibling;
    const _0x4e01c2 = _0x29b4e8.nextSibling;
    const _0x5da9be = _0x4e01c2.firstChild;
    _0xc6fe38(_0xd92590, _0x286b7e(te, {
      title: "Racer",
      subTitle: "Ladder"
    }), _0x3d2ab2);
    _0xc6fe38(_0xd92590, _0x286b7e(z, {
      label: "Me",
      onClick: () => {
        if (_0x38dd98() !== _0x2d2cd4.racingAlias) {
          _0x242e05(_0x2d2cd4.racingAlias);
          _0x191f32(1000);
        }
      }
    }), _0x3d2ab2);
    _0x3d2ab2.$$input = _0x102672 => {
      if (_0x102672.target.value !== _0x38dd98()) {
        _0x242e05(_0x102672.target.value);
        _0x191f32(1000);
      }
    };
    _0xc6fe38(_0x29b4e8, _0x286b7e(_0x59a38b, {
      get rows() {
        return _0x2d2cd4.raceLadder;
      },
      columns: _0x48f92d
    }));
    _0xc6fe38(_0x4e01c2, _0x286b7e(z, {
      label: "Previous",
      onClick: () => _0x49ea25(_0x9469f6() - 1)
    }), _0x5da9be);
    _0xc6fe38(_0x5da9be, _0x9469f6);
    _0xc6fe38(_0x4e01c2, _0x286b7e(z, {
      label: "Next",
      onClick: () => _0x49ea25(_0x9469f6() + 1)
    }), null);
    _0x58f363(() => _0x3d2ab2.value = _0x38dd98());
    return _0x3cb84d;
  })();
};
_0xa1a894(["input"]);
const wn = _0x49f26a("<div class=\"race-actions\">");
const Sn = _0x49f26a("<div class=\"race-info-view\"><div class=\"race-info-header\"><div class=\"race-actions\"></div></div><div class=\"info-container\"></div><div class=\"drivers-container\">");
const xn = _0x49f26a("<div class=\"info-item\"><label></label><h1>");
const Gn = () => {
  const {
    racingState: _0x4c6777
  } = T();
  const _0x5a3bc7 = _0x4c148f();
  const _0xd55703 = _0x55a71e(() => _0x2cda72()?.cid === _0x4c6777.selectedRaceInfo?.owner);
  const _0x282626 = _0x55a71e(() => _0x4c6777.selectedRaceInfo ? _0x4c6777.selectedRaceInfo.viewType === "pending" : false);
  const _0x124817 = _0x55a71e(() => _0x4c6777.selectedRaceInfo ? _0x4c6777.selectedRaceInfo.viewType === "active" : false);
  const _0x5c6f2b = _0x55a71e(() => _0x4c6777.selectedRaceInfo ? _0x4c6777.selectedRaceInfo.ranked : false);
  const _0x284776 = _0x55a71e(() => {
    if (!_0x4c6777.selectedRaceInfo) {
      return false;
    }
    const _0x43d18c = Object.values(_0x4c6777.selectedRaceInfo.players);
    return st(_0x43d18c);
  });
  const _0xb6a52d = _0x55a71e(() => {
    if (!_0x4c6777.selectedRaceInfo) {
      return false;
    }
    const _0x4e207f = Object.values(_0x4c6777.selectedRaceInfo.players);
    return !_0x4c6777.selectedRaceInfo.password || st(_0x4e207f);
  });
  const _0x57b171 = () => {
    const _0x2edd76 = [{
      accessorKey: "alias",
      header: "Alias"
    }];
    if (_0xd55703() && _0x282626()) {
      _0x2edd76.push({
        cell: _0x1f4aa6 => {
          if (_0x1f4aa6.row.original.characterId !== _0x2cda72()?.cid) {
            return (() => {
              const _0x4cb85c = wn();
              _0xc6fe38(_0x4cb85c, _0x286b7e(z, {
                label: "Kick",
                onClick: () => _0x5a3bc7 && Ta(_0x5a3bc7, _0x1f4aa6.row.original, _0x4c6777.selectedRaceInfo?.eventId ?? "")
              }), null);
              _0xc6fe38(_0x4cb85c, _0x286b7e(z, {
                label: "Ban",
                onClick: () => _0x5a3bc7 && wa(_0x5a3bc7, _0x1f4aa6.row.original, _0x4c6777.selectedRaceInfo?.eventId ?? "")
              }), null);
              return _0x4cb85c;
            })();
          }
        },
        header: "Actions"
      });
    }
    return _0x2edd76;
  };
  return _0x286b7e(_0x4ebf42, {
    get when() {
      return _0x4c6777?.selectedRaceInfo;
    },
    children: _0x2e4d19 => (() => {
      const _0x52ba9e = Sn();
      const _0xf540c5 = _0x52ba9e.firstChild;
      const _0xd584f5 = _0xf540c5.firstChild;
      const _0x3a1790 = _0xf540c5.nextSibling;
      const _0x2b5261 = _0x3a1790.nextSibling;
      _0xc6fe38(_0xf540c5, _0x286b7e(te, {
        title: "Viewing",
        get subTitle() {
          return _0x2e4d19().name + " (" + _0x2e4d19().type + ")";
        }
      }), _0xd584f5);
      _0xc6fe38(_0xd584f5, _0x286b7e(_0x4ebf42, {
        get when() {
          return _0x55a71e(() => !!_0x282626())() && _0xb6a52d();
        },
        get children() {
          return _0x286b7e(z, {
            label: "Set GPS",
            onClick: () => Sa(_0x2e4d19())
          });
        }
      }), null);
      _0xc6fe38(_0xd584f5, _0x286b7e(_0x4ebf42, {
        get when() {
          return _0x55a71e(() => !!_0x282626())() && _0xb6a52d();
        },
        get children() {
          return _0x286b7e(z, {
            label: "Preview",
            onClick: () => kt(_0x2e4d19())
          });
        }
      }), null);
      _0xc6fe38(_0xd584f5, _0x286b7e(_0x4ebf42, {
        get when() {
          return _0x55a71e(() => !!_0x282626() && !_0x284776())() && !_0xd55703();
        },
        get children() {
          return _0x286b7e(z, {
            label: "Join Race",
            onClick: () => ya(_0x2e4d19(), _0x4c6777.racingAlias, _0x5a3bc7)
          });
        }
      }), null);
      _0xc6fe38(_0xd584f5, _0x286b7e(_0x4ebf42, {
        get when() {
          return _0x55a71e(() => !!_0x282626())() && _0xd55703();
        },
        get children() {
          return _0x286b7e(z, {
            label: "Start Race",
            onClick: () => _0x5a3bc7 && xa(_0x5a3bc7, _0x2e4d19())
          });
        }
      }), null);
      _0xc6fe38(_0xd584f5, _0x286b7e(_0x4ebf42, {
        get when() {
          return _0x55a71e(() => !!_0x284776())() && (_0x124817() || _0x282626() && !_0xd55703());
        },
        get children() {
          return _0x286b7e(z, {
            label: "Leave Race",
            onClick: () => _0x5a3bc7 && Ra(_0x5a3bc7, _0x2e4d19())
          });
        }
      }), null);
      _0xc6fe38(_0xd584f5, _0x286b7e(_0x4ebf42, {
        get when() {
          return _0x55a71e(() => !!_0x124817() && !_0x5c6f2b() || !!_0x282626())() && _0xd55703();
        },
        get children() {
          return _0x286b7e(z, {
            label: "End Race",
            onClick: () => _0x5a3bc7 && Ga(_0x5a3bc7, _0x2e4d19())
          });
        }
      }), null);
      _0xc6fe38(_0x3a1790, _0x286b7e(ue, {
        label: "Track",
        get value() {
          return _0x2e4d19().name;
        }
      }), null);
      _0xc6fe38(_0x3a1790, _0x286b7e(ue, {
        label: "Type",
        get value() {
          return _0x2e4d19().type;
        }
      }), null);
      _0xc6fe38(_0x3a1790, _0x286b7e(ue, {
        label: "Buy In",
        get value() {
          return _0x2e4d19().buyIn + " BET";
        }
      }), null);
      _0xc6fe38(_0x3a1790, _0x286b7e(ue, {
        label: "Vehicle Class",
        get value() {
          return _0x2e4d19().vehicleClass;
        }
      }), null);
      _0xc6fe38(_0x3a1790, _0x286b7e(ue, {
        label: "Distance",
        get value() {
          return De(_0x2e4d19().length);
        }
      }), null);
      _0xc6fe38(_0x3a1790, _0x286b7e(_0x4ebf42, {
        get when() {
          return _0x2e4d19().type === "Lap";
        },
        get children() {
          return _0x286b7e(ue, {
            label: "Laps",
            get value() {
              return String(_0x2e4d19().laps);
            }
          });
        }
      }), null);
      _0xc6fe38(_0x2b5261, _0x286b7e(te, {
        title: "List of",
        subTitle: "Drivers"
      }), null);
      _0xc6fe38(_0x2b5261, _0x286b7e(_0x59a38b, {
        get rows() {
          return Object.values(_0x2e4d19().players);
        },
        get columns() {
          return _0x57b171();
        }
      }), null);
      return _0x52ba9e;
    })()
  });
};
const ue = _0x35e1a9 => (() => {
  const _0xb4b94 = xn();
  const _0x53ee87 = _0xb4b94.firstChild;
  const _0x26d563 = _0x53ee87.nextSibling;
  _0xc6fe38(_0x53ee87, () => _0x35e1a9.label);
  _0xc6fe38(_0x26d563, () => _0x35e1a9.value);
  return _0xb4b94;
})();
const Rn = "_container_1udmc_1";
const On = "_header_1udmc_8";
const In = "_select_1udmc_13";
const Pn = "_label_1udmc_25";
const Ln = "_icon_container_1udmc_34";
const zn = "_list_1udmc_45";
const Bn = "_item_1udmc_55";
const it = {
  container: Rn,
  header: On,
  select: In,
  label: Pn,
  icon_container: Ln,
  list: zn,
  item: Bn
};
const Mn = "_select_s781d_1";
const Dn = "_label_s781d_13";
const En = "_icon_container_s781d_22";
const Nn = "_list_s781d_33";
const Vn = "_item_s781d_43";
const fe = {
  select: Mn,
  label: Dn,
  icon_container: En,
  list: Nn,
  item: Vn
};
const Hn = _0x49f26a("<ul>");
const Fn = _0x49f26a("<div><h1></h1><div>");
const Un = _0x49f26a("<li>");
const Kn = _0x11b60a => {
  const [_0x10e4eb, _0x19b8fb] = _0x4a46bb(false);
  const _0xc38938 = _0x4acf66 => {
    _0x11b60a.onChange(_0x4acf66);
    _0x19b8fb(false);
  };
  const _0x45150e = _0x55a71e(() => _0x11b60a.items.find(_0x3dca0c => _0x3dca0c.value === _0x11b60a.value)?.label ?? "Vehicle Class");
  return (() => {
    const _0x32f4b0 = Fn();
    const _0x2fe0ae = _0x32f4b0.firstChild;
    const _0x15c1df = _0x2fe0ae.nextSibling;
    _0x32f4b0.$$click = () => _0x19b8fb(_0x14392f => !_0x14392f);
    _0xc6fe38(_0x2fe0ae, _0x45150e);
    _0xc6fe38(_0x15c1df, _0x286b7e(_0x2db4c2, {
      get icon() {
        if (_0x10e4eb()) {
          return _0x5af283;
        } else {
          return _0xd7edd9;
        }
      }
    }));
    _0xc6fe38(_0x32f4b0, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x10e4eb();
      },
      get children() {
        const _0x545e3a = Hn();
        _0xc6fe38(_0x545e3a, _0x286b7e(_0x33cd21, {
          get each() {
            return _0x11b60a.items;
          },
          children: _0x24731d => (() => {
            const _0x430ec7 = Un();
            _0x430ec7.$$click = () => _0xc38938(_0x24731d.value);
            _0xc6fe38(_0x430ec7, () => _0x24731d.label);
            _0x58f363(() => _0x27afa3(_0x430ec7, fe.item));
            return _0x430ec7;
          })()
        }));
        _0x58f363(() => _0x27afa3(_0x545e3a, fe.list));
        return _0x545e3a;
      }
    }), null);
    _0x58f363(_0x2dfaf3 => {
      const _0x293b0e = fe.select;
      const _0x1529f2 = fe.label;
      const _0x20129a = fe.icon_container;
      if (_0x293b0e !== _0x2dfaf3._v$) {
        _0x27afa3(_0x32f4b0, _0x2dfaf3._v$ = _0x293b0e);
      }
      if (_0x1529f2 !== _0x2dfaf3._v$2) {
        _0x27afa3(_0x2fe0ae, _0x2dfaf3._v$2 = _0x1529f2);
      }
      if (_0x20129a !== _0x2dfaf3._v$3) {
        _0x27afa3(_0x15c1df, _0x2dfaf3._v$3 = _0x20129a);
      }
      return _0x2dfaf3;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x32f4b0;
  })();
};
_0xa1a894(["click"]);
const qn = _0x49f26a("<span class=\"text-[#00F8B9]\">#");
const jn = _0x49f26a("<div><div>");
const Jn = () => {
  const {
    racingState: _0x15c6c5
  } = T();
  const [_0xa2e1a8, _0x1c4c7a] = _0x4a46bb([]);
  const _0x4670aa = async _0x5aa7d9 => {
    if (!_0x15c6c5.selectedTrack) {
      return;
    }
    const _0x3164a3 = await _0x4376d7("np-ui:racingBestLapTimes", {
      id: _0x15c6c5.selectedTrack.id,
      alias: _0x15c6c5.racingAlias,
      vehicleClass: _0x5aa7d9
    }, {
      returnData: ga
    });
    if (_0x3164a3.meta.ok) {
      _0x1c4c7a(_0x3164a3.data.bestLapTimes);
    }
  };
  const _0x5c6d07 = [{
    accessorKey: "position",
    header: "Position",
    cell: _0x50ef0a => (() => {
      const _0x21ac75 = qn();
      _0x21ac75.firstChild;
      _0xc6fe38(_0x21ac75, () => _0x50ef0a.row.index + 1, null);
      return _0x21ac75;
    })()
  }, {
    accessorKey: "alias",
    header: "Alias"
  }, {
    accessorKey: "vehicle",
    header: "Vehicle"
  }, {
    accessorKey: "totalTime",
    header: "Total Time",
    accessorFn: _0x3184d7 => Se(_0x3184d7.totalTime)
  }, {
    accessorKey: "bestLapTime",
    header: "Best Lap",
    accessorFn: _0x2e9930 => Se(_0x2e9930.bestLapTime)
  }];
  const [_0x1e1d79, _0x282acc] = _0x4a46bb("All");
  const _0x1188fe = _0x56b92a => {
    _0x282acc(_0x56b92a);
    _0x4670aa(_0x56b92a);
  };
  _0xbc8eb0(() => {
    _0x4670aa(_0x1e1d79());
  });
  return _0x286b7e(_0x4ebf42, {
    get when() {
      return _0x15c6c5?.selectedTrack;
    },
    children: _0x3426c6 => (() => {
      const _0x5d5803 = jn();
      const _0xe35eb6 = _0x5d5803.firstChild;
      _0xc6fe38(_0xe35eb6, _0x286b7e(te, {
        title: "Current",
        get subTitle() {
          return _0x3426c6().name + " Leaderboard";
        }
      }), null);
      _0xc6fe38(_0xe35eb6, _0x286b7e(Kn, {
        get value() {
          return _0x1e1d79();
        },
        items: [{
          value: "All",
          label: "All"
        }, {
          value: "M",
          label: "M"
        }, {
          value: "X",
          label: "X"
        }, {
          value: "S",
          label: "S"
        }, {
          value: "A",
          label: "A"
        }, {
          value: "B",
          label: "B"
        }],
        onChange: _0x294dcd => _0x1188fe(_0x294dcd)
      }), null);
      _0xc6fe38(_0x5d5803, _0x286b7e(_0x59a38b, {
        columns: _0x5c6d07,
        get rows() {
          return _0xa2e1a8();
        }
      }), null);
      _0x58f363(_0x58adef => {
        const _0x48d2bf = it.container;
        const _0x2b6953 = it.header;
        if (_0x48d2bf !== _0x58adef._v$) {
          _0x27afa3(_0x5d5803, _0x58adef._v$ = _0x48d2bf);
        }
        if (_0x2b6953 !== _0x58adef._v$2) {
          _0x27afa3(_0xe35eb6, _0x58adef._v$2 = _0x2b6953);
        }
        return _0x58adef;
      }, {
        _v$: undefined,
        _v$2: undefined
      });
      return _0x5d5803;
    })()
  });
};
const Wn = _0x53363a => _0x53363a.type === "text" || _0x53363a.type === "password" ? _0x53363a : null;
const Yn = _0x191c9c => _0x191c9c.type === "number" ? _0x191c9c : null;
const Qn = _0x584d55 => _0x584d55.type === "select" ? _0x584d55 : null;
const Zn = () => [{
  type: "text",
  key: "raceName",
  label: "Track Name"
}, {
  type: "select",
  key: "raceType",
  label: "Race Type",
  options: [{
    value: "Sprint",
    name: "Sprint"
  }, {
    value: "Lap",
    name: "Lap"
  }, {
    value: "PointToPoint",
    name: "Point To Point"
  }]
}, {
  type: "number",
  key: "raceMinLaps",
  label: "Min Laps",
  shouldShow: _0x5537fd => _0x5537fd.raceType === "Lap"
}];
const Xn = _0x49f26a("<div class=\"form-inputs\">");
const er = _0x49f26a("<button class=\"create-btn\">Create Race Track");
const tr = _0x49f26a("<div class=\"createRaceButtons\"><button class=\"btn cancel-btn\">Cancel Race Track</button><button class=\"btn finish-btn\">Finish Race Track");
const ar = _0x49f26a("<button class=\"btn\">Edit Race Track");
const nr = _0x49f26a("<div class=\"create-race-view\"><div class=\"form-container\"><div class=\"form-header\"><div class=\"title\"><p>Creating</p><h1>Race Track");
const rr = _0x49f26a("<div class=\"form-item\"><label></label><div class=\"input-container\">");
const sr = _0x49f26a("<input autocomplete=\"off\" maxlength=\"30\">");
const ir = _0x49f26a("<div class=\"select-input\"><button></button><span></span><button>");
const or = () => {
  const {
    racingState: _0x130fd0
  } = T();
  const _0x4e602a = _0x4c148f();
  const [_0x1952dc, _0x1a0c9a] = _0x4a1d68({
    raceName: "",
    raceType: "Sprint",
    raceMinLaps: 1,
    raceCategory: "underground",
    raceThumbnail: "https"
  });
  const _0x24ccc7 = (_0x355dd6, _0x49e4e1) => {
    _0x1a0c9a(_0x355dd6, _0x49e4e1);
  };
  _0xbc8eb0(async () => {
    _0x1a0c9a({
      raceName: _0x130fd0.createTrack.createTrackPayload.raceName,
      raceType: _0x130fd0.createTrack.createTrackPayload.raceType,
      raceMinLaps: _0x130fd0.createTrack.createTrackPayload.raceMinLaps,
      raceCategory: _0x130fd0.createTrack.createTrackPayload.raceCategory,
      raceThumbnail: _0x130fd0.createTrack.createTrackPayload.raceThumbnail
    });
  });
  return (() => {
    const _0x119b2c = nr();
    const _0x5a7ecf = _0x119b2c.firstChild;
    _0x5a7ecf.firstChild;
    _0xc6fe38(_0x5a7ecf, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x130fd0.createTrack.hasCreateChip && _0x130fd0.createTrack.createTrackPayload.createTrackId === "";
      },
      get children() {
        const _0x48f508 = Xn();
        _0xc6fe38(_0x48f508, _0x286b7e(_0x33cd21, {
          get each() {
            return Zn();
          },
          children: _0x952343 => _0x286b7e(_0x4ebf42, {
            get when() {
              return !_0x952343.shouldShow || _0x952343.shouldShow(_0x1952dc);
            },
            get children() {
              const _0xbdad31 = rr();
              const _0x594fe6 = _0xbdad31.firstChild;
              const _0x3d0e86 = _0x594fe6.nextSibling;
              _0xc6fe38(_0x594fe6, () => _0x952343.label);
              _0xc6fe38(_0x3d0e86, _0x286b7e(_0x4ebf42, {
                get when() {
                  return Wn(_0x952343) || Yn(_0x952343);
                },
                children: _0x3db7f5 => (() => {
                  const _0x41f6c4 = sr();
                  _0x41f6c4.addEventListener("change", _0x49dc34 => {
                    const _0x6d81bc = _0x49dc34?.target.value;
                    const _0x3d69cb = _0x3db7f5().type === "number" ? parseInt(_0x6d81bc) : _0x6d81bc;
                    _0x24ccc7(_0x3db7f5().key, _0x3d69cb);
                  });
                  _0x58f363(_0x3a1190 => {
                    const _0x105e08 = _0x3db7f5().type;
                    const _0x17ca09 = "Enter " + _0x3db7f5().label;
                    const _0x3a9c50 = _0x130fd0.createTrack.createTrackPayload.isCreatingTrack;
                    if (_0x105e08 !== _0x3a1190._v$) {
                      _0x1ce879(_0x41f6c4, "type", _0x3a1190._v$ = _0x105e08);
                    }
                    if (_0x17ca09 !== _0x3a1190._v$2) {
                      _0x1ce879(_0x41f6c4, "placeholder", _0x3a1190._v$2 = _0x17ca09);
                    }
                    if (_0x3a9c50 !== _0x3a1190._v$3) {
                      _0x41f6c4.disabled = _0x3a1190._v$3 = _0x3a9c50;
                    }
                    return _0x3a1190;
                  }, {
                    _v$: undefined,
                    _v$2: undefined,
                    _v$3: undefined
                  });
                  _0x58f363(() => _0x41f6c4.value = _0x1952dc[_0x3db7f5().key] ?? "");
                  return _0x41f6c4;
                })()
              }), null);
              _0xc6fe38(_0x3d0e86, _0x286b7e(_0x4ebf42, {
                get when() {
                  return Qn(_0x952343);
                },
                children: _0x96eca8 => _0x286b7e(cr, {
                  get options() {
                    return _0x96eca8().options ?? [];
                  },
                  onChange: _0x3c9c0d => {
                    if (!_0x130fd0.createTrack.createTrackPayload.isCreatingTrack) {
                      _0x24ccc7(_0x96eca8().key, _0x3c9c0d);
                    }
                  }
                })
              }), null);
              return _0xbdad31;
            }
          })
        }));
        return _0x48f508;
      }
    }), null);
    _0xc6fe38(_0x5a7ecf, _0x286b7e(_0x4ebf42, {
      get when() {
        return !_0x130fd0.createTrack.createTrackPayload.isCreatingTrack && _0x130fd0.createTrack.createTrackPayload.createTrackId === "";
      },
      get children() {
        const _0x4c858a = er();
        _0x4c858a.$$click = () => rt(_0x4e602a, _0x1952dc);
        return _0x4c858a;
      }
    }), null);
    _0xc6fe38(_0x5a7ecf, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x130fd0.createTrack.createTrackPayload.isCreatingTrack;
      },
      get children() {
        const _0xc4301 = tr();
        const _0x549b31 = _0xc4301.firstChild;
        const _0x38720e = _0x549b31.nextSibling;
        _0x549b31.$$click = () => ka(_0x4e602a);
        _0x38720e.$$click = () => Ca(_0x4e602a);
        return _0xc4301;
      }
    }), null);
    _0xc6fe38(_0x5a7ecf, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x130fd0.createTrack.createTrackPayload.createTrackId !== "" && !_0x130fd0.createTrack.createTrackPayload.isCreatingTrack;
      },
      get children() {
        const _0x542bb8 = ar();
        _0x542bb8.$$click = () => rt(_0x4e602a, {
          ..._0x1952dc,
          createTrackId: _0x130fd0.createTrack.createTrackPayload.createTrackId
        });
        return _0x542bb8;
      }
    }), null);
    return _0x119b2c;
  })();
};
const cr = _0x18bc35 => {
  const [_0x6808bd, _0x184601] = _0x4a46bb(0);
  const _0x22c3f8 = () => {
    _0x184601(_0x354f3a => (_0x354f3a - 1 + _0x18bc35.options.length) % _0x18bc35.options.length);
  };
  const _0x16cec3 = () => {
    _0x184601(_0x1f046e => (_0x1f046e + 1) % _0x18bc35.options.length);
  };
  _0x211aa6(() => {
    _0x18bc35.onChange(_0x18bc35.options[_0x6808bd()].value);
  });
  return (() => {
    const _0x2da550 = ir();
    const _0x17c777 = _0x2da550.firstChild;
    const _0x171a0b = _0x17c777.nextSibling;
    const _0x4a566d = _0x171a0b.nextSibling;
    _0x17c777.$$click = _0x22c3f8;
    _0xc6fe38(_0x17c777, _0x286b7e(_0x2db4c2, {
      icon: _0x50e4ec
    }));
    _0xc6fe38(_0x171a0b, () => _0x18bc35.options[_0x6808bd()].name);
    _0x4a566d.$$click = _0x16cec3;
    _0xc6fe38(_0x4a566d, _0x286b7e(_0x2db4c2, {
      class: "icon",
      icon: _0x8e67e5
    }));
    return _0x2da550;
  })();
};
_0xa1a894(["click"]);
const lr = "_container_qcd6e_1";
const dr = "_icon_container_qcd6e_16";
const ur = "_icon_qcd6e_16";
const vr = "_iconBG_qcd6e_29";
const gr = "_label_container_qcd6e_36";
const _r = "_splitter_qcd6e_41";
const mr = "_label_qcd6e_36";
const hr = "_disabled_qcd6e_64";
const ce = {
  container: lr,
  icon_container: dr,
  icon: ur,
  iconBG: vr,
  label_container: gr,
  splitter: _r,
  label: mr,
  disabled: hr
};
const pr = _0x49f26a("<div><div></div><div><h1>///</h1><h1>");
const ot = _0xde6035 => (() => {
  const _0xdddb22 = pr();
  const _0x131e11 = _0xdddb22.firstChild;
  const _0x3c235e = _0x131e11.nextSibling;
  const _0x402f1a = _0x3c235e.firstChild;
  const _0x2d3b04 = _0x402f1a.nextSibling;
  _0x589bfd(_0xdddb22, "click", _0xde6035.onClick, true);
  _0xc6fe38(_0x131e11, _0x286b7e(_0x2db4c2, {
    get class() {
      return ce.icon;
    },
    get icon() {
      return _0xde6035.icon;
    }
  }), null);
  _0xc6fe38(_0x131e11, _0x286b7e(_0x2db4c2, {
    get class() {
      return ce.iconBG;
    },
    get icon() {
      return _0xde6035.icon;
    }
  }), null);
  _0xc6fe38(_0x2d3b04, () => _0xde6035.label);
  _0x58f363(_0x12564e => {
    const _0x39a9b7 = ce.container;
    const _0x780209 = {
      [ce.disabled]: _0xde6035.disabled
    };
    const _0x831fd3 = ce.icon_container;
    const _0x3b7294 = ce.label_container;
    const _0x479a05 = ce.splitter;
    const _0x44dd03 = ce.label;
    if (_0x39a9b7 !== _0x12564e._v$) {
      _0x27afa3(_0xdddb22, _0x12564e._v$ = _0x39a9b7);
    }
    _0x12564e._v$2 = _0x497c65(_0xdddb22, _0x780209, _0x12564e._v$2);
    if (_0x831fd3 !== _0x12564e._v$3) {
      _0x27afa3(_0x131e11, _0x12564e._v$3 = _0x831fd3);
    }
    if (_0x3b7294 !== _0x12564e._v$4) {
      _0x27afa3(_0x3c235e, _0x12564e._v$4 = _0x3b7294);
    }
    if (_0x479a05 !== _0x12564e._v$5) {
      _0x27afa3(_0x402f1a, _0x12564e._v$5 = _0x479a05);
    }
    if (_0x44dd03 !== _0x12564e._v$6) {
      _0x27afa3(_0x2d3b04, _0x12564e._v$6 = _0x44dd03);
    }
    return _0x12564e;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined,
    _v$5: undefined,
    _v$6: undefined
  });
  return _0xdddb22;
})();
_0xa1a894(["click"]);
const fr = "_container_ftmd1_1";
const $r = "_active_ftmd1_10";
const br = "_confirmation_ftmd1_14";
const kr = "_fadeIn_ftmd1_1";
const Cr = "_info_ftmd1_30";
const yr = "_actions_ftmd1_52";
const Ar = "_selector_ftmd1_58";
const Tr = "_cta_ftmd1_70";
const wr = "_red_ftmd1_83";
const Sr = "_vehicle_class_ftmd1_94";
const xr = "_mainBox_ftmd1_101";
const Gr = "_label_ftmd1_123";
const Rr = "_box_ftmd1_132";
const Or = "_hovering_ftmd1_1";
const Ir = "_values_ftmd1_173";
const Pr = "_value_container_ftmd1_178";
const Lr = "_icon_ftmd1_190";
const zr = "_value_ftmd1_173";
const Br = "_btn_ftmd1_222";
const O = {
  container: fr,
  active: $r,
  confirmation: br,
  fadeIn: kr,
  info: Cr,
  actions: yr,
  selector: Ar,
  cta: Tr,
  red: wr,
  vehicle_class: Sr,
  mainBox: xr,
  label: Gr,
  box: Rr,
  hovering: Or,
  values: Ir,
  value_container: Pr,
  icon: Lr,
  value: zr,
  btn: Br
};
const Mr = _0x49f26a("<div><div><h1>Confirm</div><div><button>Start</button><button>Cancel");
const Dr = _0x49f26a("<button>Start Contract");
const Er = _0x49f26a("<div><div><div><h1></h1><div></div><div></div><div></div><div></div></div></div><div><div></div><div><button>");
const Nr = _0x49f26a("<div><div><p></div><div><p>");
const Vr = _0x4f1215 => {
  const {
    setConfirmModalInfo: _0xb2b996
  } = T();
  const [_0x7d3614, _0x5ea552] = _0x4a46bb(false);
  const _0x9e4cbb = _0x177a5e => {
    _0xb2b996({
      onCancel: () => ({}),
      message: "Are you sure you want to " + (_0x177a5e === "disband" ? "decline" : "cancel") + " this contract?",
      onConfirm: () => Zt(_0x4f1215.info.id)
    });
  };
  const _0x113530 = _0x3e31dd => {
    const _0x23cadc = _0x3e31dd - Date.now();
    const _0x281a79 = Math.floor(_0x23cadc / 1000 / 3600 % 24);
    const _0x154168 = Math.floor(_0x23cadc / 60000 % 60);
    const _0x1349eb = _0x281a79 < 10 ? "0" + _0x281a79 + " Hours" : _0x281a79 + " Hours";
    const _0x311def = _0x154168 < 10 ? "0" + _0x154168 + " Min" : _0x154168 + " Min";
    return _0x1349eb + ", " + _0x311def;
  };
  return (() => {
    const _0x2695ea = Er();
    const _0x1139b6 = _0x2695ea.firstChild;
    const _0x951b99 = _0x1139b6.firstChild;
    const _0x43fb79 = _0x951b99.firstChild;
    const _0xf1aad5 = _0x43fb79.nextSibling;
    const _0x36bff8 = _0xf1aad5.nextSibling;
    const _0x9b56a4 = _0x36bff8.nextSibling;
    const _0xee97c8 = _0x9b56a4.nextSibling;
    const _0x14c0fe = _0x1139b6.nextSibling;
    const _0x4e2b71 = _0x14c0fe.firstChild;
    const _0x32d217 = _0x4e2b71.nextSibling;
    const _0x23c1c0 = _0x32d217.firstChild;
    _0x2695ea.$$click = () => _0x4f1215.onClick(_0x4f1215.info);
    _0xc6fe38(_0x2695ea, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x7d3614();
      },
      get children() {
        const _0x5cc27f = Mr();
        const _0x17c8d6 = _0x5cc27f.firstChild;
        const _0x5d8590 = _0x17c8d6.nextSibling;
        const _0x29d2ef = _0x5d8590.firstChild;
        const _0x4df28b = _0x29d2ef.nextSibling;
        _0x29d2ef.$$click = () => Qt(_0x4f1215.info.id);
        _0x4df28b.$$click = () => _0x5ea552(false);
        _0x58f363(_0x174056 => {
          const _0x365b5b = O.confirmation;
          const _0x76051d = O.info;
          const _0x5d2aed = O.actions;
          const _0x48a1d1 = O.cta;
          const _0xf8588b = O.cta + " " + O.red;
          if (_0x365b5b !== _0x174056._v$) {
            _0x27afa3(_0x5cc27f, _0x174056._v$ = _0x365b5b);
          }
          if (_0x76051d !== _0x174056._v$2) {
            _0x27afa3(_0x17c8d6, _0x174056._v$2 = _0x76051d);
          }
          if (_0x5d2aed !== _0x174056._v$3) {
            _0x27afa3(_0x5d8590, _0x174056._v$3 = _0x5d2aed);
          }
          if (_0x48a1d1 !== _0x174056._v$4) {
            _0x27afa3(_0x29d2ef, _0x174056._v$4 = _0x48a1d1);
          }
          if (_0xf8588b !== _0x174056._v$5) {
            _0x27afa3(_0x4df28b, _0x174056._v$5 = _0xf8588b);
          }
          return _0x174056;
        }, {
          _v$: undefined,
          _v$2: undefined,
          _v$3: undefined,
          _v$4: undefined,
          _v$5: undefined
        });
        return _0x5cc27f;
      }
    }), _0x1139b6);
    _0xc6fe38(_0x43fb79, () => we(_0x4f1215.info.class));
    _0xc6fe38(_0x4e2b71, _0x286b7e(Re, {
      icon: _0x3985bf,
      label: "Expires in",
      get value() {
        return _0x113530(_0x4f1215.info.expiration);
      }
    }), null);
    _0xc6fe38(_0x4e2b71, _0x286b7e(Re, {
      icon: _0x184127,
      label: "Type",
      get value() {
        return _0x4f1215.info.type;
      }
    }), null);
    _0xc6fe38(_0x4e2b71, _0x286b7e(Re, {
      icon: _0x33a19d,
      label: "Vehicle",
      get value() {
        return _0x4f1215.info.vehicleInfo.name ?? "Unknown";
      }
    }), null);
    _0xc6fe38(_0x32d217, _0x286b7e(_0x4ebf42, {
      get when() {
        return !_0x4f1215.info.active;
      },
      get children() {
        const _0xe90b1 = Dr();
        _0xe90b1.$$click = () => _0x5ea552(true);
        _0x58f363(() => _0x27afa3(_0xe90b1, O.btn));
        return _0xe90b1;
      }
    }), _0x23c1c0);
    _0x23c1c0.$$click = () => _0x9e4cbb(_0x4f1215.info.active ? "cancel" : "disband");
    _0xc6fe38(_0x23c1c0, () => _0x4f1215.info.active ? "Cancel Contract" : "Decline Contract");
    _0x58f363(_0x1dccc6 => {
      const _0x462128 = O.container;
      const _0x46aabe = {
        [O.active]: _0x4f1215.active
      };
      const _0x4b6d57 = O.vehicle_class;
      const _0x5f5773 = O.mainBox;
      const _0x1147dc = O.label;
      const _0x5e885d = O.box;
      const _0x59c5ef = O.box;
      const _0x241356 = O.box;
      const _0x44d5f6 = O.box;
      const _0x30982f = O.info;
      const _0x33acc2 = O.values;
      const _0x10b82e = O.actions;
      const _0x5bd36b = O.btn + " " + O.red;
      if (_0x462128 !== _0x1dccc6._v$6) {
        _0x27afa3(_0x2695ea, _0x1dccc6._v$6 = _0x462128);
      }
      _0x1dccc6._v$7 = _0x497c65(_0x2695ea, _0x46aabe, _0x1dccc6._v$7);
      if (_0x4b6d57 !== _0x1dccc6._v$8) {
        _0x27afa3(_0x1139b6, _0x1dccc6._v$8 = _0x4b6d57);
      }
      if (_0x5f5773 !== _0x1dccc6._v$9) {
        _0x27afa3(_0x951b99, _0x1dccc6._v$9 = _0x5f5773);
      }
      if (_0x1147dc !== _0x1dccc6._v$10) {
        _0x27afa3(_0x43fb79, _0x1dccc6._v$10 = _0x1147dc);
      }
      if (_0x5e885d !== _0x1dccc6._v$11) {
        _0x27afa3(_0xf1aad5, _0x1dccc6._v$11 = _0x5e885d);
      }
      if (_0x59c5ef !== _0x1dccc6._v$12) {
        _0x27afa3(_0x36bff8, _0x1dccc6._v$12 = _0x59c5ef);
      }
      if (_0x241356 !== _0x1dccc6._v$13) {
        _0x27afa3(_0x9b56a4, _0x1dccc6._v$13 = _0x241356);
      }
      if (_0x44d5f6 !== _0x1dccc6._v$14) {
        _0x27afa3(_0xee97c8, _0x1dccc6._v$14 = _0x44d5f6);
      }
      if (_0x30982f !== _0x1dccc6._v$15) {
        _0x27afa3(_0x14c0fe, _0x1dccc6._v$15 = _0x30982f);
      }
      if (_0x33acc2 !== _0x1dccc6._v$16) {
        _0x27afa3(_0x4e2b71, _0x1dccc6._v$16 = _0x33acc2);
      }
      if (_0x10b82e !== _0x1dccc6._v$17) {
        _0x27afa3(_0x32d217, _0x1dccc6._v$17 = _0x10b82e);
      }
      if (_0x5bd36b !== _0x1dccc6._v$18) {
        _0x27afa3(_0x23c1c0, _0x1dccc6._v$18 = _0x5bd36b);
      }
      return _0x1dccc6;
    }, {
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined,
      _v$18: undefined
    });
    return _0x2695ea;
  })();
};
const Re = _0x3d7b07 => (() => {
  const _0x5bb618 = Nr();
  const _0x42902f = _0x5bb618.firstChild;
  const _0x1d34f2 = _0x42902f.firstChild;
  const _0x3f21d3 = _0x42902f.nextSibling;
  const _0x3f1b50 = _0x3f21d3.firstChild;
  _0xc6fe38(_0x42902f, _0x286b7e(_0x2db4c2, {
    get icon() {
      return _0x3d7b07.icon;
    },
    get class() {
      return O.icon;
    }
  }), _0x1d34f2);
  _0xc6fe38(_0x1d34f2, () => _0x3d7b07.label);
  _0xc6fe38(_0x3f1b50, () => _0x3d7b07.value);
  _0x58f363(_0x1f08f1 => {
    const _0x327026 = O.value_container;
    const _0x4c4c75 = O.label;
    const _0x8efbf8 = O.value;
    if (_0x327026 !== _0x1f08f1._v$19) {
      _0x27afa3(_0x5bb618, _0x1f08f1._v$19 = _0x327026);
    }
    if (_0x4c4c75 !== _0x1f08f1._v$20) {
      _0x27afa3(_0x42902f, _0x1f08f1._v$20 = _0x4c4c75);
    }
    if (_0x8efbf8 !== _0x1f08f1._v$21) {
      _0x27afa3(_0x3f21d3, _0x1f08f1._v$21 = _0x8efbf8);
    }
    return _0x1f08f1;
  }, {
    _v$19: undefined,
    _v$20: undefined,
    _v$21: undefined
  });
  return _0x5bb618;
})();
_0xa1a894(["click"]);
const Hr = "_container_14j37_1";
const Fr = "_contracts_list_14j37_8";
const Ur = "_contract_actions_14j37_15";
const Kr = "_empty_14j37_20";
const qr = "_empty_container_14j37_29";
const $e = {
  container: Hr,
  contracts_list: Fr,
  contract_actions: Ur,
  empty: Kr,
  empty_container: qr
};
const jr = _0x49f26a("<div>No pending contracts..");
const Oe = _0x49f26a("<div>");
const Jr = () => {
  const {
    setBoostingState: _0x18eef5,
    boostingState: _0x5dc772,
    setModalInfo: _0x4c61bc
  } = T();
  const _0x3f8dd5 = _0x260318 => {
    _0x18eef5({
      selectedContract: _0x260318
    });
  };
  const _0x569d55 = () => {
    const _0x9f2ae8 = _0x5dc772.selectedContract;
    if (!_0x9f2ae8) {
      return;
    }
    _0x4c61bc({
      inputs: [{
        type: "text",
        name: "stateid",
        label: "State ID"
      }],
      title: "Transfering Contract",
      description: "Please provide state id you would like to transfer this to.",
      onSubmit: _0x1064e4 => {
        ea(_0x9f2ae8.id, Number(_0x1064e4.stateid));
      },
      onCancel: () => {}
    });
  };
  const _0x2bcf3b = () => {
    const _0x3c016f = _0x5dc772.selectedContract;
    if (!_0x3c016f) {
      return;
    }
    _0x4c61bc({
      inputs: [{
        type: "text",
        name: "bid",
        label: "Starting bid (BET)"
      }, {
        type: "select",
        name: "duration",
        label: "Duration",
        options: [{
          value: "5min",
          name: "5 Minutes"
        }, {
          value: "10min",
          name: "10 Minutes"
        }, {
          value: "20min",
          name: "20 Minutes"
        }, {
          value: "30min",
          name: "30 Minutes"
        }]
      }],
      title: "Auction Contract",
      description: "Please supply duration and starting bid",
      onSubmit: _0x4b2ecd => {
        ta(_0x3c016f.id, Number(_0x4b2ecd.bid), _0x4b2ecd.duration);
      },
      onCancel: () => {}
    });
  };
  _0xbc8eb0(async () => {
    const _0x5844f8 = await _t();
    _0x18eef5({
      contracts: _0x5844f8
    });
  });
  const _0x1da55f = _0x55a71e(() => _0x5dc772.selectedContract === null);
  const _0x427320 = _0x55a71e(() => _0x5dc772.contracts.length <= 0);
  return (() => {
    const _0x2f2457 = Oe();
    _0xc6fe38(_0x2f2457, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x427320();
      },
      get children() {
        const _0x54720e = jr();
        _0x58f363(() => _0x27afa3(_0x54720e, $e.empty));
        return _0x54720e;
      }
    }), null);
    _0xc6fe38(_0x2f2457, _0x286b7e(_0x4ebf42, {
      get when() {
        return !_0x427320();
      },
      get children() {
        return [(() => {
          const _0x3e5af9 = Oe();
          _0xc6fe38(_0x3e5af9, _0x286b7e(_0x33cd21, {
            get each() {
              return _0x5dc772.contracts;
            },
            children: _0x421439 => _0x286b7e(Vr, {
              info: _0x421439,
              onClick: _0x3f8dd5,
              get active() {
                return _0x421439.id === _0x5dc772?.selectedContract?.id;
              }
            })
          }));
          _0x58f363(() => _0x27afa3(_0x3e5af9, $e.contracts_list));
          return _0x3e5af9;
        })(), (() => {
          const _0x924d5b = Oe();
          _0xc6fe38(_0x924d5b, _0x286b7e(ot, {
            icon: _0x860511,
            label: "Transfer Contract",
            get disabled() {
              return _0x1da55f();
            },
            onClick: _0x569d55
          }), null);
          _0xc6fe38(_0x924d5b, _0x286b7e(ot, {
            icon: _0x56323c,
            label: "Auction Contract",
            get disabled() {
              return _0x1da55f();
            },
            onClick: _0x2bcf3b
          }), null);
          _0x58f363(() => _0x27afa3(_0x924d5b, $e.contract_actions));
          return _0x924d5b;
        })()];
      }
    }), null);
    _0x58f363(_0xfdca78 => _0x497c65(_0x2f2457, {
      [$e.container]: true,
      [$e.empty_container]: _0x427320()
    }, _0xfdca78));
    return _0x2f2457;
  })();
};
const Wr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGjklEQVR4nO2bTWxUVRTHf/fNV78obSkBwQVqC9KiRVTQDRvCpmGBJhADCMSoGI3BpXEjrMSPxI1xwUaUlmjjTiFx4ZYPFahCQUpLi1g+S1vaaefrvXddzPTzvXnz7uubhwnzTybt3Hveuef+59xzzr13BkoooYQSSiihhEcVIugB5QliDLMPyQ4Ea7KNXESjnRoOi1ZSQdoTKAHyW5YT4TiSFmpbYNEG0Cegvx2QAJ3obBF7GAjKpsAIkCeIMcIZwtUtvPg1rNg53XlqN/QdnXzXSS0vBeUJWhCDAOTc3jp5K9YyzFtBmRUcAbCT2pYZk5dZ1z/5OvS1WWUDQjiogYAmFm2Yftd/DE7uyie7JgiDwAUBvkZtIzH9/61fnCRNtyrna59jEPQzast2zoBYP7UEpnXY4bTYycsFdfpgX14PyEXt47ZRW4jJqL2WMD/LEy6itqANKdfTb1nvdmgvJOCXffmDoN9Ru4bDQGdBOegkwuGCUj7Z55QFfI3aopUUOlsQ4kJeIU38jc4WsZ10IX1+2ecUBH2P2mIPA/LK7t8YvPYM97thfCjbUVEHC8qhJnZNrLvitgr0xT7nLOBz1JaX9jYSKtvF0jWwdIZN6TuQuAzQKs81bRLrLv3qRp8f9jkRcIm+tvXIXKTud4xLl5w6pxAJfYUQsVlt0oRU34z38nMpeUGIgqT6Yl/+GCBoy66rtuwrf8qCytqCn5js3rUZLbrZ0pG6AWZy5rjPcX719kL6iESPu7bPIavkJ8Bt1K6shzXb35dX38gbaKREoJV/wdy6w0xD+h+7Rz6RVxtidh0A8vzqVhqe3E9ZWUHzKJBV8hIwFbWdSKish1WtILRqtNhR2b23TXZti1rkene/hwg/a2lP9YE07DSvYDTy7txG2UFInm06gOQnEHXpJY+T0vLyBJOFkENWKbgdlh1EyfA2sBPEWrRwGRV1UL8SljSBmMuh3kkm+ap4+mgfgOzaVkWsrgehLZklZsQhfhYH1x0mpjWI5q4hAHmuYTFE2oGpZXT7vs5Y3GChPkq1HidqptEwE2Q/tGNEOFwopSqdB8hru1qQCwovCykfICfeFI3f/Si7935JqPwDi8z4X6APFdL0qVh3+UN5bvVG4HvgsZmdfQMZMvpsAjUhmhu39rgLyqjuBkX4unOsmZQTCxGVP8juvUcIlb1m6c8Mupk8wH55vimJlB8BkbmdumFjTJR/3SieMlVFGED2vDOBEOWqz00rkBD/HcwJzyoADBN6b1i8O77qld4FKnrUD0Sked/SlriajehukB6Y9+QBdN366QvEXVU96gQIaR3ETED8D9BHnJ81k5DqVx7SDnbuLwS3VfV48QArAVoUZBrG/4Tkdaaqs5kwkzB+AaSeR6+aGYZNnSiRd9S0eDkSk9LKsphM/TKb2zN3IboUtIpsmz4Mmdv5cn5Oh5oZ9ktA3lLT4oUAYVgHmVPeY45DsldZtQpsl4AmbqrqUV8Cps3xkmYt/ooN3caZhCkDIEAzblhHdixHiwJbDwhpyjdK6gSEuG7VErwHGDYeYBhqRRB4SoNhKwHiYSyB+VeB4IEA8cSREaRMzG7UQFgq1aLBMG0zbbyxtWdUVZe3qzG7ajBAL/CrCgSvBNhVg877cl/hVxUI3j3AvhoMCH5VgeCZAKdqsPjwqwoEz0vArhp8uB7gpQoE1ROhjuYq6hYfIly+A0K1szrjffCgy4sNyrg3CsPjs9u0kDYYkuY3ZZUcWLYP1/tt1wTIjuYq6pefRos22woMd8KEchr2hNEE3M6z8w6FOFtRwUa3JLhfAnWLD+WdvJGChKcg7AlVZRAO2fcZBs8nJvjYrS73BEi22rcbMHwu/z6/CNAELK3J3oLbmgSFL1ZycL8dHjy5mOqVUL4ctEh24sl7MHYFMmOu1cST2fWb0sF0/T0QNRgGy9zKuifATN9g5OJTjFzMEmDqqB7jDI7BUFzpEU8QAtcZQWUJTN+vmRlUJx9PBjN5AA06FGRdIsoh4JQXg8CatooFTXC2ooqDruXdCortJIiwCTgI9AAOB3xWpIoZIwUGgushwWeVVe5TYAkllFDCIw+/fy8QAiqBcpuXluvXyBZggukr78nCQif7jS4j9zdh8xpHMQM5wQ8CaoBlwCKg2iedTpDAKDAI3AIK3Mg6Y77GrgP3dXeRMACc9/rwfH8woXin+/+DH+66kKwX1BP8ErgJPJiPsqCCYFmuTyUIGkCSIgfB/wDmobPIqqd95gAAAABJRU5ErkJggg==";
const Yr = "_container_1rgre_1";
const Qr = "_content_1rgre_8";
const Zr = "_heading_1rgre_12";
const Xr = "_empty_container_1rgre_16";
const es = "_empty_1rgre_16";
const ts = "_timer_1rgre_31";
const as = "_seller_1rgre_38";
const ns = "_crownIcon_1rgre_41";
const rs = "_bounce_1rgre_1";
const de = {
  container: Yr,
  content: Qr,
  heading: Zr,
  empty_container: Xr,
  empty: es,
  timer: ts,
  seller: as,
  crownIcon: ns,
  bounce: rs
};
const ss = _0x49f26a("<img alt=\"Top Bidder Crown\">");
const yt = _0x49f26a("<span>");
const is = _0x49f26a("<div>No auctioned contracts..");
const os = _0x49f26a("<div><div></div><div>");
const cs = () => {
  const {
    boostingState: _0x3721f6,
    setBoostingState: _0x4fb869,
    setModalInfo: _0x9fde91
  } = T();
  const _0x577a18 = _0x33d7eb => {
    _0x9fde91({
      inputs: [{
        type: "text",
        name: "amount",
        label: "Bid Amount"
      }],
      title: "Contract Auction",
      description: "Please supply bid amount for this vehicle",
      onSubmit: async _0x4f2781 => {
        const _0x48d39c = Number(_0x4f2781.amount);
        if (isNaN(_0x48d39c)) {
          return _0x5d935d("underground", "Invalid bid amount");
        }
        na(_0x33d7eb, _0x48d39c);
      },
      onCancel: () => {}
    });
  };
  const _0x1a6fef = _0x55a71e(() => [{
    accessorKey: "sellerAlias",
    header: "Seller",
    cell: ({
      row: _0x1b9284
    }) => (() => {
      const _0x4df350 = yt();
      _0xc6fe38(_0x4df350, _0x286b7e(_0x4ebf42, {
        get when() {
          return _0x1b9284.original.topBidderId === _0x2cda72()?.cid;
        },
        get children() {
          const _0x40358e = ss();
          _0x1ce879(_0x40358e, "src", Wr);
          _0x58f363(() => _0x27afa3(_0x40358e, de.crownIcon));
          return _0x40358e;
        }
      }), null);
      _0xc6fe38(_0x4df350, () => _0x1b9284.original.sellerAlias, null);
      _0x58f363(() => _0x27afa3(_0x4df350, de.seller));
      return _0x4df350;
    })()
  }, {
    header: "Class",
    accessorFn: _0x1e1c01 => _0x1e1c01.contractInfo.class
  }, {
    header: "Vehicle",
    accessorFn: _0x4e1a5b => _0x4e1a5b.contractInfo.vehicleInfo.model
  }, {
    header: "Current Bid",
    accessorFn: _0x587e12 => _0x587e12.currentBid + " BET"
  }, {
    header: "Ends In",
    cell: ({
      row: _0x2f6720
    }) => _0x286b7e(ls, {
      get time() {
        return _0x2f6720.original.endsAt;
      }
    })
  }, {
    cell: ({
      row: _0x22e6ab
    }) => _0x286b7e(z, {
      label: "Bid",
      onClick: () => _0x577a18(_0x22e6ab.original.id)
    }),
    header: "Ends In"
  }]);
  const _0x36d827 = _0x55a71e(() => _0x3721f6.auctionContracts.length <= 0);
  _0xbc8eb0(async () => {
    const _0x512fe7 = await mt();
    _0x4fb869("auctionContracts", _0x512fe7);
  });
  return (() => {
    const _0x318923 = os();
    const _0x5b691b = _0x318923.firstChild;
    const _0x5499f7 = _0x5b691b.nextSibling;
    _0xc6fe38(_0x5b691b, _0x286b7e(te, {
      title: "List of",
      subTitle: "Auction",
      gavelIcon: true
    }));
    _0xc6fe38(_0x5499f7, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x36d827();
      },
      get children() {
        const _0x10a14d = is();
        _0x58f363(() => _0x27afa3(_0x10a14d, de.empty));
        return _0x10a14d;
      }
    }), null);
    _0xc6fe38(_0x5499f7, _0x286b7e(_0x4ebf42, {
      get when() {
        return !_0x36d827();
      },
      get children() {
        return _0x286b7e(_0x59a38b, {
          get rows() {
            return _0x3721f6.auctionContracts;
          },
          get columns() {
            return _0x1a6fef();
          },
          sortable: true
        });
      }
    }), null);
    _0x58f363(_0x37ecc9 => {
      const _0x1d950b = de.container;
      const _0x238f83 = de.heading;
      const _0x120d61 = {
        [de.content]: true,
        [de.empty_container]: _0x36d827()
      };
      if (_0x1d950b !== _0x37ecc9._v$) {
        _0x27afa3(_0x318923, _0x37ecc9._v$ = _0x1d950b);
      }
      if (_0x238f83 !== _0x37ecc9._v$2) {
        _0x27afa3(_0x5b691b, _0x37ecc9._v$2 = _0x238f83);
      }
      _0x37ecc9._v$3 = _0x497c65(_0x5499f7, _0x120d61, _0x37ecc9._v$3);
      return _0x37ecc9;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined
    });
    return _0x318923;
  })();
};
const ls = _0x87ccb9 => {
  const [_0x77b086, _0x1b6e30] = _0x4a46bb(0);
  const [_0xf01e0e, _0x7f4092] = _0x4a46bb(_0x5dbd12(_0x87ccb9.time), {
    equals: false
  });
  function _0x5dbd12(_0x2af96e, _0x3fd267 = "Ending") {
    const _0x5f26de = _0x2af96e - Date.now();
    const _0x2d1999 = Math.floor(_0x5f26de / 60000 % 60);
    const _0x341706 = Math.floor(_0x5f26de / 1000 % 60);
    let _0x2ef8c4 = "#1ad61a";
    if (_0x2d1999 <= 10) {
      _0x2ef8c4 = "#efca15";
    }
    if (_0x2d1999 <= 3) {
      _0x2ef8c4 = "#ef4715";
    }
    const _0x34d8b5 = _0x2d1999 < 10 ? "0" + _0x2d1999 : "" + _0x2d1999;
    const _0x1c89d6 = _0x341706 < 10 ? "0" + _0x341706 : "" + _0x341706;
    return {
      color: _0x2ef8c4,
      value: _0x2af96e < Date.now() ? _0x3fd267 : _0x34d8b5 + ":" + _0x1c89d6
    };
  }
  _0xbc8eb0(() => {
    const _0x18d8c9 = +setInterval(() => {
      _0x7f4092(_0x5dbd12(_0x87ccb9.time));
      if (_0x87ccb9.time < Date.now()) {
        return clearInterval(_0x77b086());
      }
    }, 1000);
    _0x1b6e30(_0x18d8c9);
  });
  _0x5d905d(() => {
    clearInterval(_0x77b086());
  });
  return (() => {
    const _0x1d5e62 = yt();
    _0xc6fe38(_0x1d5e62, () => _0xf01e0e().value);
    _0x58f363(_0x281b32 => {
      const _0x1d2ab6 = de.timer;
      const _0x586bea = _0xf01e0e().color;
      if (_0x1d2ab6 !== _0x281b32._v$4) {
        _0x27afa3(_0x1d5e62, _0x281b32._v$4 = _0x1d2ab6);
      }
      if (_0x586bea !== _0x281b32._v$5) {
        if ((_0x281b32._v$5 = _0x586bea) != null) {
          _0x1d5e62.style.setProperty("color", _0x586bea);
        } else {
          _0x1d5e62.style.removeProperty("color");
        }
      }
      return _0x281b32;
    }, {
      _v$4: undefined,
      _v$5: undefined
    });
    return _0x1d5e62;
  })();
};
const ds = "_container_y6yk6_1";
const us = "_confirmation_y6yk6_11";
const vs = "_fadeIn_y6yk6_1";
const gs = "_info_y6yk6_27";
const _s = "_actions_y6yk6_49";
const ms = "_cta_y6yk6_55";
const hs = "_disabled_y6yk6_72";
const ps = "_vehicle_class_y6yk6_80";
const fs = "_mainBox_y6yk6_87";
const $s = "_label_y6yk6_109";
const bs = "_box_y6yk6_118";
const ks = "_hovering_y6yk6_1";
const Cs = "_values_y6yk6_159";
const ys = "_value_container_y6yk6_164";
const As = "_icon_y6yk6_176";
const Ts = "_value_y6yk6_159";
const ws = "_btn_y6yk6_209";
const Ss = "_red_y6yk6_221";
const H = {
  container: ds,
  confirmation: us,
  fadeIn: vs,
  info: gs,
  actions: _s,
  cta: ms,
  disabled: hs,
  vehicle_class: ps,
  mainBox: fs,
  label: $s,
  box: bs,
  hovering: ks,
  values: Cs,
  value_container: ys,
  icon: As,
  value: Ts,
  btn: ws,
  red: Ss
};
const xs = _0x49f26a("<div><div><div><h1></h1><div></div><div></div><div></div><div></div></div></div><div><div></div><div><button>Purchase Contract");
const Gs = _0x49f26a("<div><div><p></div><div><p>");
const Rs = _0x54f330 => {
  const {
    setConfirmModalInfo: _0x4ccb33
  } = T();
  const _0x4931a2 = () => {
    if (_0x54f330.contract.allowed) {
      _0x4ccb33({
        onCancel: () => ({}),
        onConfirm: () => Xt(_0x54f330.contract),
        message: "Are you sure you want to purchase this contract for " + _0x54f330.contract.buyIn + " BET?"
      });
    }
  };
  return (() => {
    const _0x26bedb = xs();
    const _0x204045 = _0x26bedb.firstChild;
    const _0x527a99 = _0x204045.firstChild;
    const _0x21dc3a = _0x527a99.firstChild;
    const _0x324f8d = _0x21dc3a.nextSibling;
    const _0x4daca7 = _0x324f8d.nextSibling;
    const _0x38e646 = _0x4daca7.nextSibling;
    const _0x5827a6 = _0x38e646.nextSibling;
    const _0x18f3d2 = _0x204045.nextSibling;
    const _0x132f75 = _0x18f3d2.firstChild;
    const _0x28b8af = _0x132f75.nextSibling;
    const _0x53fba5 = _0x28b8af.firstChild;
    _0xc6fe38(_0x21dc3a, () => we(_0x54f330.contract.class));
    _0xc6fe38(_0x132f75, _0x286b7e(ct, {
      icon: _0x353b3d,
      label: "Price",
      get value() {
        return _0x54f330.contract.buyIn + " BET";
      }
    }), null);
    _0xc6fe38(_0x132f75, _0x286b7e(ct, {
      icon: _0x184127,
      label: "Type",
      get value() {
        return _0x54f330.contract.type;
      }
    }), null);
    _0x53fba5.$$click = _0x4931a2;
    _0x58f363(_0xd63299 => {
      const _0x570ca0 = H.container;
      const _0xd2a561 = {
        [H.disabled]: !_0x54f330.contract.allowed
      };
      const _0x4db00c = H.vehicle_class;
      const _0x5d308d = H.mainBox;
      const _0x22f10e = H.label;
      const _0x2e547e = H.box;
      const _0x46cc6a = H.box;
      const _0x1ddeeb = H.box;
      const _0x2ef7c2 = H.box;
      const _0x3af172 = H.info;
      const _0x3b4799 = H.values;
      const _0x33ada3 = H.actions;
      const _0x4a94ed = H.btn;
      if (_0x570ca0 !== _0xd63299._v$) {
        _0x27afa3(_0x26bedb, _0xd63299._v$ = _0x570ca0);
      }
      _0xd63299._v$2 = _0x497c65(_0x26bedb, _0xd2a561, _0xd63299._v$2);
      if (_0x4db00c !== _0xd63299._v$3) {
        _0x27afa3(_0x204045, _0xd63299._v$3 = _0x4db00c);
      }
      if (_0x5d308d !== _0xd63299._v$4) {
        _0x27afa3(_0x527a99, _0xd63299._v$4 = _0x5d308d);
      }
      if (_0x22f10e !== _0xd63299._v$5) {
        _0x27afa3(_0x21dc3a, _0xd63299._v$5 = _0x22f10e);
      }
      if (_0x2e547e !== _0xd63299._v$6) {
        _0x27afa3(_0x324f8d, _0xd63299._v$6 = _0x2e547e);
      }
      if (_0x46cc6a !== _0xd63299._v$7) {
        _0x27afa3(_0x4daca7, _0xd63299._v$7 = _0x46cc6a);
      }
      if (_0x1ddeeb !== _0xd63299._v$8) {
        _0x27afa3(_0x38e646, _0xd63299._v$8 = _0x1ddeeb);
      }
      if (_0x2ef7c2 !== _0xd63299._v$9) {
        _0x27afa3(_0x5827a6, _0xd63299._v$9 = _0x2ef7c2);
      }
      if (_0x3af172 !== _0xd63299._v$10) {
        _0x27afa3(_0x18f3d2, _0xd63299._v$10 = _0x3af172);
      }
      if (_0x3b4799 !== _0xd63299._v$11) {
        _0x27afa3(_0x132f75, _0xd63299._v$11 = _0x3b4799);
      }
      if (_0x33ada3 !== _0xd63299._v$12) {
        _0x27afa3(_0x28b8af, _0xd63299._v$12 = _0x33ada3);
      }
      if (_0x4a94ed !== _0xd63299._v$13) {
        _0x27afa3(_0x53fba5, _0xd63299._v$13 = _0x4a94ed);
      }
      return _0xd63299;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined
    });
    return _0x26bedb;
  })();
};
const ct = _0x2d8c7e => (() => {
  const _0x18bf37 = Gs();
  const _0x172198 = _0x18bf37.firstChild;
  const _0x14b09e = _0x172198.firstChild;
  const _0x28ea7f = _0x172198.nextSibling;
  const _0x5e702b = _0x28ea7f.firstChild;
  _0xc6fe38(_0x172198, _0x286b7e(_0x2db4c2, {
    get icon() {
      return _0x2d8c7e.icon;
    },
    get class() {
      return H.icon;
    }
  }), _0x14b09e);
  _0xc6fe38(_0x14b09e, () => _0x2d8c7e.label);
  _0xc6fe38(_0x5e702b, () => _0x2d8c7e.value);
  _0x58f363(_0x369a30 => {
    const _0x3ec439 = H.value_container;
    const _0x496192 = H.label;
    const _0x335302 = H.value;
    if (_0x3ec439 !== _0x369a30._v$14) {
      _0x27afa3(_0x18bf37, _0x369a30._v$14 = _0x3ec439);
    }
    if (_0x496192 !== _0x369a30._v$15) {
      _0x27afa3(_0x172198, _0x369a30._v$15 = _0x496192);
    }
    if (_0x335302 !== _0x369a30._v$16) {
      _0x27afa3(_0x28ea7f, _0x369a30._v$16 = _0x335302);
    }
    return _0x369a30;
  }, {
    _v$14: undefined,
    _v$15: undefined,
    _v$16: undefined
  });
  return _0x18bf37;
})();
_0xa1a894(["click"]);
const Os = "_container_jxl7b_1";
const Is = "_contracts_list_jxl7b_7";
const lt = {
  container: Os,
  contracts_list: Is
};
const Ps = _0x49f26a("<div><div>");
const Ls = () => {
  const [_0x301d7e, _0x340bab] = _0x4a46bb([]);
  _0xbc8eb0(async () => {
    const _0x36acd8 = await Yt();
    _0x340bab(_0x36acd8);
  });
  return (() => {
    const _0x451201 = Ps();
    const _0x22ad9d = _0x451201.firstChild;
    _0xc6fe38(_0x22ad9d, _0x286b7e(_0x33cd21, {
      get each() {
        return _0x301d7e();
      },
      children: _0x5ed2d4 => _0x286b7e(Rs, {
        contract: _0x5ed2d4
      })
    }));
    _0x58f363(_0x3a6484 => {
      const _0x4043ce = lt.container;
      const _0x64f76e = lt.contracts_list;
      if (_0x4043ce !== _0x3a6484._v$) {
        _0x27afa3(_0x451201, _0x3a6484._v$ = _0x4043ce);
      }
      if (_0x64f76e !== _0x3a6484._v$2) {
        _0x27afa3(_0x22ad9d, _0x3a6484._v$2 = _0x64f76e);
      }
      return _0x3a6484;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x451201;
  })();
};
const zs = "" + new URL("empty-banner-9346a00a.svg", import.meta.url).href;
const Bs = "" + new URL("filled-banner-8c7e88a2.svg", import.meta.url).href;
const Ms = "_container_1goud_1";
const Ds = "_banner_1goud_10";
const Es = "_cta_1goud_18";
const Ns = "_info_1goud_37";
const Vs = "_active_1goud_62";
const be = {
  container: Ms,
  banner: Ds,
  cta: Es,
  info: Ns,
  active: Vs
};
const Hs = _0x49f26a("<div>");
const Fs = _0x49f26a("<div><img><div><h1><p></h1><button>");
const Us = _0x59e27c => {
  const {
    setModalInfo: _0x32d809
  } = T();
  const _0x204493 = _0x55a71e(() => !!_0x59e27c.member);
  const _0x17cb3f = () => {
    _0x32d809({
      inputs: [{
        type: "text",
        name: "stateId",
        label: "State ID"
      }],
      title: "Invite Member",
      description: "Please enter the target state id.",
      onSubmit: async _0x532f07 => {
        const _0x515675 = Number(_0x532f07.stateId);
        if (!isNaN(_0x515675)) {
          return await oa(_0x515675);
        }
      },
      onCancel: () => true
    });
  };
  const _0x2d9218 = () => {
    if (_0x59e27c.member) {
      return ia(_0x59e27c.group.id, _0x59e27c.member.characterId);
    }
  };
  const _0x52638a = _0x55a71e(() => _0x59e27c.member?.isLeader ? "Leader" : _0x59e27c.member ? "Kick" : "Invite");
  const _0x42c17b = () => {
    if (!_0x59e27c.disabled) {
      {
        if (_0x59e27c.member?.isLeader) {
          return;
        }
        if (_0x59e27c.member) {
          return _0x2d9218();
        }
      }
      return _0x17cb3f();
    }
  };
  if (_0x59e27c.index >= _0x59e27c.group.capacity) {
    return Hs();
  } else {
    return (() => {
      const _0x4dae73 = Fs();
      const _0x3de29b = _0x4dae73.firstChild;
      const _0x4a7c81 = _0x3de29b.nextSibling;
      const _0x20a18c = _0x4a7c81.firstChild;
      const _0x2f97bc = _0x20a18c.firstChild;
      const _0x5f4d4b = _0x20a18c.nextSibling;
      _0xc6fe38(_0x20a18c, () => _0x59e27c.member ? _0x59e27c.member.name + " [" + _0x59e27c.member.characterId + "]" : "Free Slot", _0x2f97bc);
      _0xc6fe38(_0x2f97bc, () => _0x59e27c.member ? "In Group" : "Invite group member");
      _0x5f4d4b.$$click = _0x42c17b;
      _0xc6fe38(_0x5f4d4b, _0x52638a);
      _0x58f363(_0x503a2e => {
        const _0x213cd7 = be.container;
        const _0x463a24 = {
          [be.active]: _0x204493()
        };
        const _0x57bcdf = _0x204493() ? Bs : zs;
        const _0x3ade01 = be.banner;
        const _0x459a24 = be.info;
        const _0x1859b9 = be.cta;
        const _0x44a0d5 = _0x59e27c.disabled || _0x59e27c.index > 3;
        if (_0x213cd7 !== _0x503a2e._v$) {
          _0x27afa3(_0x4dae73, _0x503a2e._v$ = _0x213cd7);
        }
        _0x503a2e._v$2 = _0x497c65(_0x4dae73, _0x463a24, _0x503a2e._v$2);
        if (_0x57bcdf !== _0x503a2e._v$3) {
          _0x1ce879(_0x3de29b, "src", _0x503a2e._v$3 = _0x57bcdf);
        }
        if (_0x3ade01 !== _0x503a2e._v$4) {
          _0x27afa3(_0x3de29b, _0x503a2e._v$4 = _0x3ade01);
        }
        if (_0x459a24 !== _0x503a2e._v$5) {
          _0x27afa3(_0x4a7c81, _0x503a2e._v$5 = _0x459a24);
        }
        if (_0x1859b9 !== _0x503a2e._v$6) {
          _0x27afa3(_0x5f4d4b, _0x503a2e._v$6 = _0x1859b9);
        }
        if (_0x44a0d5 !== _0x503a2e._v$7) {
          _0x5f4d4b.disabled = _0x503a2e._v$7 = _0x44a0d5;
        }
        return _0x503a2e;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined,
        _v$4: undefined,
        _v$5: undefined,
        _v$6: undefined,
        _v$7: undefined
      });
      return _0x4dae73;
    })();
  }
};
_0xa1a894(["click"]);
const Ks = "_container_1x3fw_1";
const qs = "_header_1x3fw_7";
const js = "_list_1x3fw_14";
const Js = "_cta_1x3fw_21";
const Ws = "_green_1x3fw_35";
const Ys = "_red_1x3fw_39";
const ve = {
  container: Ks,
  header: qs,
  list: js,
  cta: Js,
  green: Ws,
  red: Ys
};
const Qs = _0x49f26a("<div><div>");
const Zs = _0x49f26a("<div>");
const Xs = _0x49f26a("<button>");
const ei = new Array(6).fill(null);
const ti = () => {
  const {
    boostingState: _0x151537,
    setBoostingState: _0x7ccc9e
  } = T();
  const _0x449f87 = _0x55a71e(() => !!_0x151537.group?.activity);
  _0xbc8eb0(async () => {
    const _0x5b3fe3 = await ht();
    const _0x130d74 = await pt();
    _0x7ccc9e("group", _0x5b3fe3);
    _0x7ccc9e("clockedIn", _0x130d74);
  });
  return (() => {
    const _0x376df6 = Qs();
    const _0x38e699 = _0x376df6.firstChild;
    _0xc6fe38(_0x38e699, _0x286b7e(_0x4ebf42, {
      get when() {
        return !_0x151537.group;
      },
      get children() {
        return _0x286b7e(Ae, {
          text: "Create Group",
          active: true,
          onClick: ra
        });
      }
    }), null);
    _0xc6fe38(_0x38e699, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x151537.group;
      },
      get children() {
        return _0x286b7e(Ae, {
          text: "Leave Group",
          active: false,
          onClick: sa
        });
      }
    }), null);
    _0xc6fe38(_0x38e699, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x151537.clockedIn;
      },
      get children() {
        return _0x286b7e(Ae, {
          text: "Sign Out",
          active: false,
          onClick: () => nt(false)
        });
      }
    }), null);
    _0xc6fe38(_0x38e699, _0x286b7e(_0x4ebf42, {
      get when() {
        return !_0x151537.clockedIn;
      },
      get children() {
        return _0x286b7e(Ae, {
          text: "Sign In",
          active: true,
          onClick: () => nt(true)
        });
      }
    }), null);
    _0xc6fe38(_0x376df6, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x151537.group;
      },
      children: _0x2e46ff => (() => {
        const _0x6fa4f7 = Zs();
        _0xc6fe38(_0x6fa4f7, _0x286b7e(_0x33cd21, {
          each: ei,
          children: (_0x428cd1, _0x31d2cd) => _0x286b7e(Us, {
            get index() {
              return _0x31d2cd();
            },
            get member() {
              return _0x151537.group?.members[_0x31d2cd()];
            },
            get group() {
              return _0x2e46ff();
            },
            get disabled() {
              return _0x449f87();
            }
          })
        }));
        _0x58f363(() => _0x27afa3(_0x6fa4f7, ve.list));
        return _0x6fa4f7;
      })()
    }), null);
    _0x58f363(_0x35f14d => {
      const _0x4fac37 = ve.container;
      const _0x5db500 = ve.header;
      if (_0x4fac37 !== _0x35f14d._v$) {
        _0x27afa3(_0x376df6, _0x35f14d._v$ = _0x4fac37);
      }
      if (_0x5db500 !== _0x35f14d._v$2) {
        _0x27afa3(_0x38e699, _0x35f14d._v$2 = _0x5db500);
      }
      return _0x35f14d;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x376df6;
  })();
};
const Ae = _0x5d4ee5 => (() => {
  const _0x1ad265 = Xs();
  _0x589bfd(_0x1ad265, "click", _0x5d4ee5.onClick, true);
  _0xc6fe38(_0x1ad265, () => _0x5d4ee5.text);
  _0x58f363(_0xbacbe4 => {
    const _0x24527f = ve.cta;
    const _0x59f4b6 = {
      [ve.green]: _0x5d4ee5.active,
      [ve.red]: !_0x5d4ee5.active
    };
    if (_0x24527f !== _0xbacbe4._v$3) {
      _0x27afa3(_0x1ad265, _0xbacbe4._v$3 = _0x24527f);
    }
    _0xbacbe4._v$4 = _0x497c65(_0x1ad265, _0x59f4b6, _0xbacbe4._v$4);
    return _0xbacbe4;
  }, {
    _v$3: undefined,
    _v$4: undefined
  });
  return _0x1ad265;
})();
_0xa1a894(["click"]);
const At = [{
  label: "Homepage",
  page: "home",
  icon: Ge,
  render: () => _0x286b7e(Jr, {}),
  showNav: true
}, {
  label: "Marketplace",
  page: "marketplace",
  icon: Ge,
  render: () => _0x286b7e(Ls, {}),
  showNav: true
}, {
  label: "Group",
  page: "group",
  icon: Ge,
  render: () => _0x286b7e(ti, {}),
  showNav: true
}, {
  label: "Auction",
  page: "auction",
  icon: Ba,
  render: () => _0x286b7e(cs, {}),
  showNav: true
}, {
  label: "Races",
  page: "races",
  icon: Ma,
  render: () => _0x286b7e(an, {}),
  showNav: true
}, {
  label: "Completed Race",
  page: "completed-race",
  icon: "",
  render: () => _0x286b7e(ln, {}),
  showNav: false
}, {
  label: "Create Race",
  page: "create-race",
  icon: "",
  render: () => _0x286b7e($n, {}),
  showNav: false
}, {
  label: "Race Tracks",
  page: "race-tracks",
  icon: "",
  render: () => _0x286b7e(yn, {}),
  showNav: false
}, {
  label: "Race Ladder",
  page: "race-ladder",
  icon: "",
  render: () => _0x286b7e(Tn, {}),
  showNav: false
}, {
  label: "Race Info",
  page: "race-info",
  icon: "",
  render: () => _0x286b7e(Gn, {}),
  showNav: false
}, {
  label: "Race Leaderboard",
  page: "race-leaderboard",
  icon: "",
  render: () => _0x286b7e(Jn, {}),
  showNav: false
}, {
  label: "Create Race Track",
  page: "race-create-track",
  icon: "",
  render: () => _0x286b7e(or, {}),
  showNav: false
}];
const ai = () => {
  const {
    page: _0x1684b3
  } = T();
  const _0x9bf968 = _0x55a71e(() => At.find(_0x3b0383 => _0x3b0383.page === _0x1684b3()));
  return _0x55a71e(() => _0x9bf968()?.render());
};
const ni = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZeSURBVHgB7ZlLbFRVGMf/59xHZ6Z0Wii0lVZboKCIqYokvKLGDQ8NIogaDaJEY4KEGDcgbEh5mVBiIGoEJHGjJgoLNFGjsjA+IqyAEEPA0gcttFDbzqvTmfs4x+/cabFWVsyZLsz8kjv3dm479/z7Pc83QJEiRYr8H2AoHMFnf9/SFKlAb9OsOcNz7EqB5HDYtbmRdIQcNpk3BM9MSyecuJ65JzX/+V/6kAeFEsMu7Ct7KmKLvRLuXMfwrbqFDJFKQEKAqadKA0wKKaU6MTjZUOLyebP+4Y2xGO4QE4VBRuHvNrKZJmFJyAhDuJxBSpG7KdWrD5LCmMy949yQX5KQOPKAowD8ubN6keFkHoRL/3ZHonQ6BzPGOIFktw4lzE+UJGId/l51B3lQEDElRmoT8zgzXMAjTy6vI+uQJRTKr5SA0YMEyVQvPzJjU6YDeVIIMcyQzqMgl5Ie+fFkBisy6l7yX4eylZcye1Pd9mFoQLuYS7srVsP3G1R4+BQQ4QYOzliweAWjayUicDqySrLTOtiwJd4ODWgXU2o6G8Fo+SRGTOKI1HAK9Ny9sRaBEHDivK+r3T4CTWgVc76lqZRcbBWCfCth3QVYYX/Mw8gqlIaFT+qEgVin1bzgncG8MthYtIqpMq6so1UyJcSzqa7U008qY43cH3EtdZbuAO/8+Gj6KDSiVYwH+TZGXIlHKV4qGT2AiuS4jCsp0w11hw80/0R/ohFtYtoOTr/XZpkmdR24WC0J+U9JztUaZ9Bqq3o58SE0o01MSXj4aaFi2+fwqECGanlQFwOCAqkeRfHicQzdtPYhzwJ5O3S1M4wq/huCghuCwpx6sFD57X/RT5kXa15MfoICoKXRvH5o2gruDnzHsgzesEDJfCDaqD6dBXVFqgaM5dxACMP3sqydJHsqejJ9k36tWNH/JjRYSotlZCy9DkGVNCFMgUg1v1VPghXecjeSwIVhlIhG6dH9DJexbn8DNLlc3mJO72yMsuH2lUKVE+pfjJkGeCi3NvWqqn/QhFFA+Z6gGiNUvVQVB4k281DD67Gz0ETeYuqMwWekJ6arJKsWbtcz1QCoUA8CXzi0eIeMRoWSk7txQ1lHIhtnXd2XplCn3ANd5C2GufE1YqQD9suACgp+oaLBpcTm+apBo8WTUJN6NAO5a9cQ6auRXQuae/qBf7wx77UgD77d0hitwrUBlnK4cKX0pzE2uSHYozCD1sepC5jaKGFHlZicu9HmEolr9o9VazPLoJm8s9lLM1Bv0+JDoRAWNoTQ3zX0WamQSyKGQHkN8Ng2E5EpIpcQyPOycXNooJU9oGP/Mp683ezzdnTmrjJYvqiiwRuMLzRpd1keMTBb7funihGLqLgBYjfY/kIIUWidAcyemXrrbgs8doNL05aseqFyOZ8Cn4KFztm+cPv5n8sP6Az6sWibzpx7b05tmd/RiqQbokwFuxqoXab2/iK3IXMhBjoia2ueS3415tlaWxptvVmp3fOCbXohk4I+VMoweV4uiwVCVKqOMBatx4nU79FM6sykdM/Jyq3QjBY3+62luipsDmyDqupM9WbUBdxFczHVxgSzAAO+Q42bTFOLIEy3z2o9fDbVAs1oEVNXnlnNpaiiKRh8io2yBiOo+DSvhHBz7ynrqGmTO2T6/V3OyuZmCGhGi5i2Ti/tJs1jTsaf4nvGZLOLP2FSHmZkqcqZwJylCPY2tCmTsR5rT+NmtxUFQOd4NgjoE69GViX7na/dONUZMsW85QyzHlc9GXCzs+Tc1pPDC44fh48CoDM1B5npkSV8fTbBEe8TcFMCNferMKFeLGElUymxjoRod69RtNaZnTvJmwxnrUUVPxSmeMlyhCpIFJ2vtts7HtqcuoIConWgsaGxfqVpe4YaxdqGCauC5gCUzHo7zR9IiPY9/3i0iglZsfWS00aAMleWWpqSqUA6zrrbLvLXUIA9/3i0iTn9aWOUi+wqNVZSq2ZWMDGTl/6w331y/3A3JgBtMTOd3VwsmVMa7MmoPpphjmSfdWzpjvRHmCC0iTENd0NupEQB71CB5Og4e0HuwgSixc3OfHBfJX0rtkZdq1afpi+yp798+7PvT4x7jaJFTLTs6mLqw0I8mMNy6YvInsXb//oCE4wWN5v7SvqbU/tqp1VNcebxdLbu8nVxCkWKFClS5A75G/v80de9+PzhAAAAAElFTkSuQmCC";
const ri = _0x49f26a("<div class=\"underground-header\"><div class=\"level-container\"><div class=\"title\"><div class=\"icon-container\"><img class=\"icon\" alt=\"\"></div><p class=\"text\">Your <span>Boosting Level</div><div class=\"content\"><h1> <span></h1><div class=\"bar-container\"><div class=\"bar-cover\"></div><div class=\"inner\">");
const si = () => {
  const {
    boostingState: _0x480cbf
  } = T();
  return (() => {
    const _0x462b9a = ri();
    const _0xea83ba = _0x462b9a.firstChild;
    const _0x598ad0 = _0xea83ba.firstChild;
    const _0x272616 = _0x598ad0.firstChild;
    const _0x19bf3b = _0x272616.firstChild;
    const _0x5d69d1 = _0x598ad0.nextSibling;
    const _0x1d543b = _0x5d69d1.firstChild;
    const _0x23b8ac = _0x1d543b.firstChild;
    const _0x4404b4 = _0x23b8ac.nextSibling;
    const _0x4d9c4a = _0x1d543b.nextSibling;
    const _0x540f16 = _0x4d9c4a.firstChild;
    _0x1ce879(_0x19bf3b, "src", ni);
    _0xc6fe38(_0x1d543b, () => we(_0x480cbf.progression.currClass), _0x23b8ac);
    _0xc6fe38(_0x4404b4, () => we(_0x480cbf.progression.nextClass));
    _0x58f363(() => 100 - _0x480cbf.progression.progress + "%" != null ? _0x540f16.style.setProperty("width", 100 - _0x480cbf.progression.progress + "%") : _0x540f16.style.removeProperty("width"));
    return _0x462b9a;
  })();
};
const ii = "_container_1iq77_1";
const oi = "_circle_1iq77_10";
const ci = "_rotation_1iq77_1";
const li = "_text_1iq77_21";
const di = "_big_1iq77_37";
const Te = {
  container: ii,
  circle: oi,
  rotation: ci,
  text: li,
  big: di
};
const ui = _0x49f26a("<div><svg width=\"103.51vh\" height=\"67.22vh\" viewBox=\"0 0 1118 726\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 725L280 544L419.5 453.5M1117 1L838 182L698.5 272.5\" stroke=\"url(#paint0_radial_0_1)\"></path><path d=\"M1117 725L838 544L698.5 453.5M1 1L280 182L419.5 272.5\" stroke=\"url(#paint1_radial_0_1)\"></path><path d=\"M609 363C609 390.614 586.614 413 559 413C531.386 413 509 390.614 509 363C509 335.386 531.386 313 559 313C586.614 313 609 335.386 609 363ZM526.948 363C526.948 380.702 541.298 395.052 559 395.052C576.702 395.052 591.052 380.702 591.052 363C591.052 345.298 576.702 330.948 559 330.948C541.298 330.948 526.948 345.298 526.948 363Z\" fill=\"#ffffff26\" fill-opacity=\"0.08\"></path><path d=\"M420.721 453.479C404.018 426.475 395.116 395.376 395.001 363.624C394.886 331.873 403.562 300.709 420.068 273.585L435.567 283.017C420.802 307.28 413.042 335.156 413.145 363.558C413.248 391.96 421.211 419.78 436.151 443.935L420.721 453.479Z\" fill=\"url(#paint2_radial_0_1)\" fill-opacity=\"0.08\"></path><path d=\"M699.279 453.479C715.982 426.475 724.884 395.376 724.999 363.624C725.114 331.873 716.438 300.709 699.932 273.585L684.433 283.017C699.198 307.28 706.958 335.156 706.855 363.558C706.752 391.96 698.789 419.78 683.849 443.935L699.279 453.479Z\" fill=\"url(#paint3_radial_0_1)\" fill-opacity=\"0.08\"></path><path d=\"M713.936 528.03C739.151 508.654 759.574 483.741 773.63 455.217C787.685 426.692 794.997 395.319 795 363.52C795.003 331.72 787.697 300.345 773.647 271.818C759.597 243.291 739.178 218.375 713.967 198.994L711.416 202.312C736.119 221.302 756.126 245.716 769.892 273.668C783.659 301.619 790.818 332.361 790.815 363.519C790.812 394.677 783.648 425.418 769.875 453.367C756.103 481.316 736.092 505.726 711.386 524.711L713.936 528.03Z\" fill=\"url(#paint4_radial_0_1)\" fill-opacity=\"0.08\"></path><path d=\"M407.064 528.03C381.849 508.654 361.426 483.741 347.37 455.217C333.315 426.692 326.003 395.319 326 363.52C325.997 331.72 333.303 300.345 347.353 271.818C361.403 243.291 381.822 218.375 407.033 198.994L409.584 202.312C384.881 221.302 364.874 245.716 351.108 273.668C337.341 301.619 330.182 332.361 330.185 363.519C330.188 394.677 337.352 425.418 351.125 453.367C364.897 481.316 384.908 505.726 409.614 524.711L407.064 528.03Z\" fill=\"url(#paint5_radial_0_1)\" fill-opacity=\"0.08\"></path><defs><radialGradient id=\"paint0_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(559 363) rotate(90) scale(362 558)\"><stop stop-color=\"#ffffff\"></stop><stop offset=\"1\" stop-color=\"#ffffff\" stop-opacity=\"0\"></radialGradient><radialGradient id=\"paint1_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(559 363) rotate(90) scale(362 558)\"><stop stop-color=\"#ffffff\"></stop><stop offset=\"1\" stop-color=\"#ffffff\" stop-opacity=\"0\"></radialGradient><radialGradient id=\"paint2_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(395 369) scale(90.5)\"><stop stop-color=\"#ffffff26\"></stop><stop offset=\"1\" stop-color=\"#ffffff26\" stop-opacity=\"0\"></radialGradient><radialGradient id=\"paint3_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(725 369) rotate(-180) scale(90.5)\"><stop stop-color=\"#ffffff26\"></stop><stop offset=\"1\" stop-color=\"#ffffff26\" stop-opacity=\"0\"></radialGradient><radialGradient id=\"paint4_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(795 370.738) rotate(-180) scale(109.179)\"><stop stop-color=\"#ffffff26\"></stop><stop offset=\"1\" stop-color=\"#ffffff26\" stop-opacity=\"0\"></radialGradient><radialGradient id=\"paint5_radial_0_1\" cx=\"0\" cy=\"0\" r=\"1\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"translate(326 370.738) scale(109.179)\"><stop stop-color=\"#ffffff26\"></stop><stop offset=\"1\" stop-color=\"#ffffff26\" stop-opacity=\"0\"></svg><div><svg width=\"7.96vh\" height=\"7.96vh\" viewBox=\"0 0 86 86\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M86 43C86 51.4221 83.5267 59.6588 78.8872 66.6878C74.2476 73.7168 67.646 79.2285 59.9017 82.539C52.1575 85.8494 43.6116 86.8128 35.3247 85.3095C27.0379 83.8062 19.3749 79.9024 13.2869 74.0827C7.19898 68.263 2.95408 60.7836 1.07911 52.5728C-0.795855 44.3621 -0.218339 35.7815 2.73998 27.896C5.6983 20.0105 10.9072 13.1674 17.7201 8.21601C24.533 3.2646 32.65 0.422907 41.0635 0.0436253L41.3033 5.36192C33.9314 5.69425 26.8193 8.18412 20.8499 12.5225C14.8805 16.8609 10.3165 22.8568 7.72445 29.766C5.13239 36.6752 4.62638 44.1934 6.26921 51.3877C7.91204 58.5819 11.6314 65.1353 16.9656 70.2344C22.2999 75.3336 29.0141 78.7541 36.275 80.0713C43.5359 81.3884 51.0237 80.5444 57.8092 77.6438C64.5946 74.7432 70.3789 69.9138 74.4441 63.7551C78.5092 57.5964 80.6763 50.3794 80.6763 43H86Z\" fill=\"url(#paint0_linear_2991_913)\"></path><defs><linearGradient id=\"paint0_linear_2991_913\" x1=\"43\" y1=\"0\" x2=\"86\" y2=\"29.1146\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#ffffff\"></stop><stop offset=\"1\" stop-color=\"#ffffff\" stop-opacity=\"0\"></div><div><div>Loading");
const vi = () => (() => {
  const _0x1317a3 = ui();
  const _0x12bb2a = _0x1317a3.firstChild;
  const _0x29cd37 = _0x12bb2a.nextSibling;
  const _0x4ab148 = _0x29cd37.nextSibling;
  const _0x3f1aa5 = _0x4ab148.firstChild;
  _0x58f363(_0x356bc7 => {
    const _0x430ce6 = Te.container;
    const _0x15ab75 = Te.circle;
    const _0x48fafc = Te.text;
    const _0x4e9859 = Te.big;
    if (_0x430ce6 !== _0x356bc7._v$) {
      _0x27afa3(_0x1317a3, _0x356bc7._v$ = _0x430ce6);
    }
    if (_0x15ab75 !== _0x356bc7._v$2) {
      _0x27afa3(_0x29cd37, _0x356bc7._v$2 = _0x15ab75);
    }
    if (_0x48fafc !== _0x356bc7._v$3) {
      _0x27afa3(_0x4ab148, _0x356bc7._v$3 = _0x48fafc);
    }
    if (_0x4e9859 !== _0x356bc7._v$4) {
      _0x27afa3(_0x3f1aa5, _0x356bc7._v$4 = _0x4e9859);
    }
    return _0x356bc7;
  }, {
    _v$: undefined,
    _v$2: undefined,
    _v$3: undefined,
    _v$4: undefined
  });
  return _0x1317a3;
})();
const gi = _0x49f26a("<div class=\"navigation\">");
const _i = _0x49f26a("<div class=\"item\"><div class=\"icon-container\"><img class=\"icon\"></div><div class=\"label\">");
const mi = () => {
  const _0x54f0df = _0x55a71e(() => At.filter(_0x45a982 => _0x45a982.showNav));
  return (() => {
    const _0xb57ede = gi();
    _0xc6fe38(_0xb57ede, _0x286b7e(_0x33cd21, {
      get each() {
        return _0x54f0df();
      },
      children: _0x58fc17 => _0x286b7e(hi, {
        item: _0x58fc17
      })
    }));
    return _0xb57ede;
  })();
};
const hi = ({
  item: _0x4ae100
}) => {
  const {
    page: _0x4520e3,
    setPage: _0x460693
  } = T();
  const [_0x4611e8, _0xd66e14] = _0x4a46bb(false);
  const _0xf92183 = () => _0xd66e14(true);
  const _0x5cbb85 = () => _0xd66e14(false);
  const _0x1e2551 = _0x809b9f => {
    _0x460693(_0x809b9f);
  };
  return (() => {
    const _0x3a3775 = _i();
    const _0x50b16a = _0x3a3775.firstChild;
    const _0x1d120e = _0x50b16a.firstChild;
    const _0x3b2217 = _0x50b16a.nextSibling;
    _0x3a3775.$$click = () => _0x1e2551(_0x4ae100.page);
    _0x3a3775.addEventListener("mouseleave", _0x5cbb85);
    _0x3a3775.addEventListener("mouseenter", _0xf92183);
    _0xc6fe38(_0x3b2217, () => _0x4ae100.label);
    _0x58f363(_0x4e05e8 => {
      const _0x253395 = !!_0x4611e8() || _0x4520e3() === _0x4ae100.page;
      const _0xbd2d07 = _0x4ae100.icon;
      if (_0x253395 !== _0x4e05e8._v$) {
        _0x3a3775.classList.toggle("item-active", _0x4e05e8._v$ = _0x253395);
      }
      if (_0xbd2d07 !== _0x4e05e8._v$2) {
        _0x1ce879(_0x1d120e, "src", _0x4e05e8._v$2 = _0xbd2d07);
      }
      return _0x4e05e8;
    }, {
      _v$: undefined,
      _v$2: undefined
    });
    return _0x3a3775;
  })();
};
_0xa1a894(["click"]);
const pi = "_container_6sk7l_1";
const fi = "_wrapper_6sk7l_10";
const $i = "_header_6sk7l_24";
const bi = "_content_6sk7l_49";
const ki = "_checkbox_container_6sk7l_56";
const Ci = "_checkbox_6sk7l_56";
const yi = "_label_6sk7l_78";
const Ai = "_actions_6sk7l_86";
const Ti = "_btn_6sk7l_93";
const wi = "_cancel_6sk7l_105";
const Si = "_text_container_6sk7l_116";
const xi = "_select_input_6sk7l_149";
const F = {
  container: pi,
  wrapper: fi,
  header: $i,
  content: bi,
  checkbox_container: ki,
  checkbox: Ci,
  label: yi,
  actions: Ai,
  btn: Ti,
  cancel: wi,
  text_container: Si,
  select_input: xi
};
const Gi = _0x49f26a("<div><div><div><h1></h1><p></div><div></div><div><button>Submit</button><button>Cancel");
const Ri = _0x49f26a("<div><div></div><label>");
const Oi = _0x49f26a("<div><label></label><input>");
const Ii = _0x49f26a("<div><button></button><span></span><button>");
const Pi = _0x258bcf => {
  const {
    setModalInfo: _0x50a19e
  } = T();
  const [_0x52524e, _0x4a538e] = _0x4a1d68({});
  const _0x37f1bb = (_0xd5ab9b, _0x3124c1) => {
    _0x4a538e(_0xd5ab9b, _0x3124c1);
    console.log(_0xd5ab9b, _0x3124c1);
  };
  const _0x91bded = () => {
    _0x258bcf.onSubmit(_0x52524e);
    return _0x50a19e(null);
  };
  const _0x42ace6 = () => {
    _0x258bcf.onCancel(_0x52524e);
    return _0x50a19e(null);
  };
  return (() => {
    const _0x222f50 = Gi();
    const _0x3d8d41 = _0x222f50.firstChild;
    const _0x26186e = _0x3d8d41.firstChild;
    const _0x3a9ba5 = _0x26186e.firstChild;
    const _0x4c202c = _0x3a9ba5.nextSibling;
    const _0x4575e4 = _0x26186e.nextSibling;
    const _0x34008d = _0x4575e4.nextSibling;
    const _0x277109 = _0x34008d.firstChild;
    const _0x106821 = _0x277109.nextSibling;
    _0xc6fe38(_0x3a9ba5, () => _0x258bcf.title);
    _0xc6fe38(_0x4c202c, () => _0x258bcf.description);
    _0xc6fe38(_0x4575e4, _0x286b7e(_0x33cd21, {
      get each() {
        return _0x258bcf.inputs;
      },
      children: _0x287ae5 => _0x286b7e(_0x3df129, {
        get children() {
          return [_0x286b7e(_0x2accbb, {
            get when() {
              return _0x287ae5.type === "checkbox";
            },
            get children() {
              return _0x286b7e(Li, {
                get label() {
                  return _0x287ae5.label;
                },
                onChange: _0x511d1b => {
                  _0x37f1bb(_0x287ae5.name, _0x511d1b);
                }
              });
            }
          }), _0x286b7e(_0x2accbb, {
            get when() {
              return _0x287ae5.type === "text" || _0x287ae5.type === "password";
            },
            get children() {
              return _0x286b7e(zi, {
                get type() {
                  return _0x287ae5.type;
                },
                get label() {
                  return _0x287ae5.label;
                },
                onChange: _0x5e231f => {
                  _0x37f1bb(_0x287ae5.name, _0x5e231f);
                }
              });
            }
          }), _0x286b7e(_0x2accbb, {
            get when() {
              return _0x287ae5.type === "select";
            },
            get children() {
              return _0x286b7e(Bi, {
                get options() {
                  return _0x287ae5.options ?? [];
                },
                onChange: _0x375f1e => {
                  _0x37f1bb(_0x287ae5.name, _0x375f1e);
                }
              });
            }
          })];
        }
      })
    }));
    _0x277109.$$click = _0x91bded;
    _0x106821.$$click = _0x42ace6;
    _0x58f363(_0x1f6d2b => {
      const _0x47d3bd = F.container;
      const _0x358a7e = F.wrapper;
      const _0x1fa1fc = F.header;
      const _0x330b75 = F.content;
      const _0x16451b = F.actions;
      const _0x43509c = {
        [F.btn]: true,
        [F.success]: true
      };
      const _0x3a76d3 = {
        [F.btn]: true,
        [F.cancel]: true
      };
      if (_0x47d3bd !== _0x1f6d2b._v$) {
        _0x27afa3(_0x222f50, _0x1f6d2b._v$ = _0x47d3bd);
      }
      if (_0x358a7e !== _0x1f6d2b._v$2) {
        _0x27afa3(_0x3d8d41, _0x1f6d2b._v$2 = _0x358a7e);
      }
      if (_0x1fa1fc !== _0x1f6d2b._v$3) {
        _0x27afa3(_0x26186e, _0x1f6d2b._v$3 = _0x1fa1fc);
      }
      if (_0x330b75 !== _0x1f6d2b._v$4) {
        _0x27afa3(_0x4575e4, _0x1f6d2b._v$4 = _0x330b75);
      }
      if (_0x16451b !== _0x1f6d2b._v$5) {
        _0x27afa3(_0x34008d, _0x1f6d2b._v$5 = _0x16451b);
      }
      _0x1f6d2b._v$6 = _0x497c65(_0x277109, _0x43509c, _0x1f6d2b._v$6);
      _0x1f6d2b._v$7 = _0x497c65(_0x106821, _0x3a76d3, _0x1f6d2b._v$7);
      return _0x1f6d2b;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined
    });
    return _0x222f50;
  })();
};
const Li = _0x37cbcc => {
  const [_0x510a52, _0x8bea64] = _0x4a46bb(false);
  _0x211aa6(() => {
    _0x37cbcc.onChange(_0x510a52());
  });
  return (() => {
    const _0x279fbd = Ri();
    const _0x7ddb75 = _0x279fbd.firstChild;
    const _0x596036 = _0x7ddb75.nextSibling;
    _0x7ddb75.$$click = () => _0x8bea64(_0x251746 => !_0x251746);
    _0xc6fe38(_0x7ddb75, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x510a52();
      },
      get children() {
        return _0x286b7e(_0x2db4c2, {
          icon: _0x1e36ee
        });
      }
    }));
    _0xc6fe38(_0x596036, () => _0x37cbcc.label);
    _0x58f363(_0x5e9c99 => {
      const _0x457e5d = F.checkbox_container;
      const _0x43c817 = F.checkbox;
      const _0x2557a3 = F.label;
      if (_0x457e5d !== _0x5e9c99._v$8) {
        _0x27afa3(_0x279fbd, _0x5e9c99._v$8 = _0x457e5d);
      }
      if (_0x43c817 !== _0x5e9c99._v$9) {
        _0x27afa3(_0x7ddb75, _0x5e9c99._v$9 = _0x43c817);
      }
      if (_0x2557a3 !== _0x5e9c99._v$10) {
        _0x27afa3(_0x596036, _0x5e9c99._v$10 = _0x2557a3);
      }
      return _0x5e9c99;
    }, {
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined
    });
    return _0x279fbd;
  })();
};
const zi = _0x31b8fc => {
  const [_0x123fd8, _0x3d62d5] = _0x4a46bb("");
  _0x211aa6(() => {
    _0x31b8fc.onChange(_0x123fd8());
  });
  return (() => {
    const _0x4dae0a = Oi();
    const _0x4bcf61 = _0x4dae0a.firstChild;
    const _0x59a09c = _0x4bcf61.nextSibling;
    _0xc6fe38(_0x4bcf61, () => _0x31b8fc.label);
    _0x59a09c.addEventListener("change", _0x1730f0 => {
      _0x3d62d5(_0x1730f0.target.value);
    });
    _0x58f363(_0x19e27a => {
      const _0x473ea4 = F.text_container;
      const _0x18706d = F.label;
      const _0x1ebd1a = _0x31b8fc.type;
      const _0x2589f3 = "Enter " + _0x31b8fc.label?.toLowerCase() + "...";
      if (_0x473ea4 !== _0x19e27a._v$11) {
        _0x27afa3(_0x4dae0a, _0x19e27a._v$11 = _0x473ea4);
      }
      if (_0x18706d !== _0x19e27a._v$12) {
        _0x27afa3(_0x4bcf61, _0x19e27a._v$12 = _0x18706d);
      }
      if (_0x1ebd1a !== _0x19e27a._v$13) {
        _0x1ce879(_0x59a09c, "type", _0x19e27a._v$13 = _0x1ebd1a);
      }
      if (_0x2589f3 !== _0x19e27a._v$14) {
        _0x1ce879(_0x59a09c, "placeholder", _0x19e27a._v$14 = _0x2589f3);
      }
      return _0x19e27a;
    }, {
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined
    });
    return _0x4dae0a;
  })();
};
const Bi = _0x20e67d => {
  const [_0x406b48, _0x56c1b8] = _0x4a46bb(0);
  const _0x1fd582 = () => {
    _0x56c1b8(_0x5bbc08 => (_0x5bbc08 - 1 + _0x20e67d.options.length) % _0x20e67d.options.length);
  };
  const _0x4143e8 = () => {
    _0x56c1b8(_0x27d4a8 => (_0x27d4a8 + 1) % _0x20e67d.options.length);
  };
  _0x211aa6(() => {
    _0x20e67d.onChange(_0x20e67d.options[_0x406b48()].value);
  });
  return (() => {
    const _0xf6309c = Ii();
    const _0x39a5b4 = _0xf6309c.firstChild;
    const _0x5f0823 = _0x39a5b4.nextSibling;
    const _0x1da645 = _0x5f0823.nextSibling;
    _0x39a5b4.$$click = _0x1fd582;
    _0xc6fe38(_0x39a5b4, _0x286b7e(_0x2db4c2, {
      icon: _0x50e4ec
    }));
    _0xc6fe38(_0x5f0823, () => _0x20e67d.options[_0x406b48()].name);
    _0x1da645.$$click = _0x4143e8;
    _0xc6fe38(_0x1da645, _0x286b7e(_0x2db4c2, {
      get class() {
        return F.icon;
      },
      icon: _0x8e67e5
    }));
    _0x58f363(() => _0x27afa3(_0xf6309c, F.select_input));
    return _0xf6309c;
  })();
};
_0xa1a894(["click"]);
const Tt = [{
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao01.png",
  label: "Man on ATV"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao02.png",
  label: "Woman with Bat"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao03.png",
  label: "Drive-by 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao04.png",
  label: "Drive-by 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao05.png",
  label: "Gunman"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao06.png",
  label: "Parachute Jumper"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao07.png",
  label: "Lazer"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao08.png",
  label: "Grove Street Drive-by"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao09.png",
  label: "Man with SMG"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao10.png",
  label: "Sniper Scope Target"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao11.png",
  label: "Speedboat"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao12.png",
  label: "Stickup Woman"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao13.png",
  label: "Stickup Cashier"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav46.png",
  label: "Beach Bum Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav47.png",
  label: "Beach Bum Buggy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav51.png",
  label: "Business Woman in Car"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav52.png",
  label: "Capture man with contraband"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav53.png",
  label: "Capture Buggy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav56.png",
  label: "Flight School Pilot"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav59.png",
  label: "High Life Woman with Rifle"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav60.png",
  label: "High Life Super Car"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav61.png",
  label: "I'm Not a Hipster Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav62.png",
  label: "I'm Not a Hipster Guy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav63.png",
  label: "Independence Day"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav75.png",
  label: "Valentine's Day Massacre Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAV/gtav76.png",
  label: "Valentine's Day Massacre Guy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao28.png",
  label: "GTAO Male Avatar 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao29.png",
  label: "GTAO Male Avatar 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao30.png",
  label: "GTAO Male Avatar 3"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao31.png",
  label: "Heists Balaclava"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao32.png",
  label: "Heists Chopper"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao33.png",
  label: "Heists Getaway van"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao34.png",
  label: "Heists Gimme the loot"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao35.png",
  label: "Heists Woman in Hockey Mask"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao36.png",
  label: "Heists Man in Hockey Mask"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao37.png",
  label: "Heists Lester"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao38.png",
  label: "Heists Police Car"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao39.png",
  label: "Heists Shotgun"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao42.png",
  label: "FME Chick"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao43.png",
  label: "FME Rider"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao44.png",
  label: "FME Wolfman"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao45.png",
  label: "Lowriders Lamar"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao46.png",
  label: "GTAO Slasher Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao47.png",
  label: "GTAO Slasher Psycho Shadow"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao40.png",
  label: "Ill Gotten Gains Part 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao41.png",
  label: "Ill Gotten Gains Part 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao48.png",
  label: "Executives Chick"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao49.png",
  label: "Executives Man in Robe"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao50.png",
  label: "Mrs Claus"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao51.png",
  label: "Santa"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao52.png",
  label: "Lowriders Custom Classics"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao53.png",
  label: "Lowriders Girl Close up"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao54.png",
  label: "Cunning Stunts Guy Close Up"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao55.png",
  label: "Cunning Stunts Guy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao56.png",
  label: "Cunning Stunts Estancia"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao57.png",
  label: "Cunning Stunts Lady"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao58.png",
  label: "Cunning Stunts Lady Alt"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao59.png",
  label: "Cunning Stunts Motorcycle"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao60.png",
  label: "Cunning Stunts Racecar"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao61.png",
  label: "Cunning Stunts Ring of Fire"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/biker1-256x256.png",
  label: "Biker Male with Gun"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/biker2-256x256.png",
  label: "Biker Male with Helmet"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/biker3-256x256.png",
  label: "Biker Male with Bandana"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/biker4-256x256.png",
  label: "Biker Male with Goggles "
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/biker5-256x256.png",
  label: "Biker Chick"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline-Special-Vehicle-Circuit-2-256x256.png",
  label: "Special Vehicle Circuit Orange Voltic Rocket"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline-Special-Vehicle-Circuit-3-256x256.png",
  label: "Special Vehicle Circuit White Voltic Rocket"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline-Special-Vehicle-Circuit-256x256.png",
  label: "Special Vehicle Circuit Black Voltic Rocket"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/4-256x256.png",
  label: "Smuggler's Run Plane Cargo drop"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/3-256x256.png",
  label: "Smuggler's Run Plane and Car"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_F_V01.png",
  label: "Doomsday Heist Khanjai"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_E_V01.png",
  label: "Doomsday Heist Thruster"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_D_V01.png",
  label: "Doomsday Heist Stromberg"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_C_V01.png",
  label: "Doomsday Heist Akula"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_B_V01.png",
  label: "Doomsday Heist Soldier 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_A2_V01.png",
  label: "Doomsday Heist Soldier 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/SC_AVATARS_DOOMSDAY_256x256_A1_V01.png",
  label: "Doomsday Heist Soldier 3"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline_Gunrunning_smallguy_256x256.png",
  label: "Gun Running Small guy"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline_Gunrunning_girl_256x256.png",
  label: "Gun Running Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAOnline_Gunrunning_256x256.png",
  label: "Gun Running mustache"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/ssasss-avatars-driver-256x256.png",
  label: "Southern San Andreas Super Sport Series Sprunk Driver"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/ssasss-avatars-jetpack-256x256.png",
  label: "Southern San Andreas Super Sport Series Thuster Race"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/ssasss-avatars-plane-256x256.png",
  label: "Southern San Andreas Super Sport Series Plane Race"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/ssasss-avatars-sabre-256x256.png",
  label: "Southern San Andreas Super Sport Series Car Race"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/ssasss-avatars-target-256x256.png",
  label: "Southern San Andreas Super Sport Series Targets"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-The-Black-Madonna-256x256.png",
  label: "After Hours Black Madonna"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-Dixon-256x256.png",
  label: "After Hours Dixon"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-Tale-of-Us-2-256x256.png",
  label: "After hours Tales of Us 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-Tale-of-Us-1-256x256.png",
  label: "After hours Tales of Us 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-Solomun-256x256.png",
  label: "After Hours Solomun"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO-After-Hours-Tony-256x256.png",
  label: "After Hours Gay Tony"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao-arena-wars-monster-256x256.png",
  label: "Arena Wars Sasquatch Truck"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao-arena-wars-flying-truck-256x256.png",
  label: "Arena Wars Issi"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao-arena-wars-car-256x256.png",
  label: "Arena Wars Car"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao-arena-wars-biker-256x256.png",
  label: "Arena Wars Woman in Helmet"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/gtao-arena-wars-announcer-256x256.png",
  label: "Arena Wars Announcer"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_1.png",
  label: "Casino Agatha on Phone"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_2.png",
  label: "Casino Avery Duggen"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_3.png",
  label: "Casino Super Car and Bike"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_4.png",
  label: "Casino Bikini Girl  "
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_5.png",
  label: "Casino Roulette Table"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_6.png",
  label: "Casino Tao Cheng"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_7.png",
  label: "Casino Tom Connors"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_8.png",
  label: "Casino Exploding Tanker"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_9.png",
  label: "Casino Vincent"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_HEIST_1-256x256.png",
  label: "Casino Heist Man in Red Mask"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_HEIST_2-256x256.png",
  label: "Casino Heist Bugstars Girl "
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/CASINO_HEIST_3-256x256.png",
  label: "Casino Heist Sniper"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_DancingGirl_256x256.png",
  label: "The Cayo Perico Heist Dancing Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_ElRubio_256x256.png",
  label: "The Cayo Perico Heist Juan Strickler"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_EnglishDave_256x256.png",
  label: "The Cayo Perico Heist English Dave"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Guard1_256x256.png",
  label: "The Cayo Perico Heist Soldier 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Guard2_256x256.png",
  label: "The Cayo Perico Heist Soldier 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Keinemusik_&ME_256x256.png",
  label: "The Cayo Perico Heist Keinemusik 3"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Keinemusik_AdamPort_256x256.png",
  label: "The Cayo Perico Heist Keinemusik 1"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Keinemusik_Rampa_256x256.png",
  label: "The Cayo Perico Heist Keinemusik 2"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_Moodymann_256x256.png",
  label: "The Cayo Perico Heist Moodymann"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_PalmsTrax_256x256.png",
  label: "The Cayo Perico Heist Palms Trax"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_IslandHeist_RSGSite_Avatar_PantherStatue_256x256.png",
  label: "The Cayo Perico Heist Idol"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/Kenny.png",
  label: "Tuners Kenny"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/Mimi.png",
  label: "Tuners Mimi"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/Sessanta.png",
  label: "Tuners Sessanta"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Chop.png",
  label: "The Contract Chop"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Franklin.png",
  label: "The Contract Franklin"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Dr_Dre.png",
  label: "The Contract Dr Dre"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_DJ_Pooh.png",
  label: "The Contract DJ Pooh"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Jimmy_Iovine.png",
  label: "The Contract Jimmy Iovine"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Lamar.png",
  label: "The Contract Lamar"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Imani.png",
  label: "The Contract Imani"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/The_Contract_Johnny_Guns.png",
  label: "The Contract Johnny Guns"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_CE_Community_Avatar_GunRunner_256x256.png",
  label: "The Criminal Enterprises Gunrunner"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_CE_Community_Avatar_CEO_256x256.png",
  label: "The Criminal Enterprises CEO"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_CE_Community_Avatar_Biker_256x256.png",
  label: "The Criminal Enterprises Biker"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_CE_Community_Avatar_ClubOwner_256x256.png",
  label: "The Criminal Enterprises Nightclub Owner"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_LSDW_SC-Avatar_GirlWithGun_256x256_Deliv.png",
  label: "Los Santos Drug Wars Girl with gun"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_LSDW_SC-Avatar_Ron_256x256_Deliv.png",
  label: "Los Santos Drug Wars Ron"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_LSDW_SC-Avatar_DrugLab_256x256_Deliv.png",
  label: "Los Santos Drug Wars Labrat"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_LSDW_SC-Avatar_Luchador_256x256_Deliv.png",
  label: "Los Santos Drug Wars Luchadora"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_LSDW_SC-Avatar_Dax_256x256_Deliv.png",
  label: "Los Santos Drug Wars Dax"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_Charlie_256x256.png",
  label: "San Andreas Mercenaries Charlie"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_Rooster_256x256.png",
  label: "San Andreas Mercenaries Rooster"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_Juggernaut_256x256.png",
  label: "San Andreas Mercenaries Merryweather Juggernaut"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_MWPilot_256x256.png",
  label: "San Andreas Mercenaries Merryweather Pilot"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_PlayerFemale_256x256.png",
  label: "San Andreas Mercenaries Girl"
}, {
  image: "https://prod-avatars.akamaized.net/stock-avatars/n/GTAO/GTAO_SA_Mercenaries_Community_Avatars_PlayerMale_256x256.png",
  label: "San Andreas Mercenaries Man with gun"
}];
const Mi = "_container_lr2lu_1";
const Di = "_title_lr2lu_16";
const Ei = "_header_lr2lu_24";
const Ni = "_icon_lr2lu_30";
const Vi = "_list_lr2lu_40";
const ke = {
  container: Mi,
  title: Di,
  header: Ei,
  icon: Ni,
  list: Vi
};
const Hi = _0x49f26a("<div><div><h1>Select Avatar</h1><div></div></div><div>");
const Fi = _0x49f26a("<img>");
const Ui = _0xcb0641 => {
  const _0x3c5838 = _0x2837c1 => {
    _0xcb0641.onSubmit(_0x2837c1);
    _0xcb0641.onClose();
  };
  return _0x286b7e(_0x4ebf42, {
    get when() {
      return _0xcb0641.show;
    },
    get children() {
      const _0x242ad7 = Hi();
      const _0x1598f3 = _0x242ad7.firstChild;
      const _0x2d1e89 = _0x1598f3.firstChild;
      const _0x5ecf04 = _0x2d1e89.nextSibling;
      const _0x4f8396 = _0x1598f3.nextSibling;
      _0x4cc3de(_0x19bf47, _0x242ad7, () => () => _0xcb0641.onClose());
      _0x5ecf04.$$click = () => _0xcb0641.onClose();
      _0xc6fe38(_0x5ecf04, _0x286b7e(_0x2db4c2, {
        icon: _0x1bdc13
      }));
      _0xc6fe38(_0x4f8396, _0x286b7e(_0x33cd21, {
        each: Tt,
        children: _0x4d3221 => (() => {
          const _0x5b0e8b = Fi();
          _0x5b0e8b.$$click = () => _0x3c5838(_0x4d3221.image);
          _0x58f363(() => _0x1ce879(_0x5b0e8b, "src", _0x4d3221.image));
          return _0x5b0e8b;
        })()
      }));
      _0x58f363(_0x242a4a => {
        const _0x3077b4 = ke.container;
        const _0x2b3037 = ke.header;
        const _0x10c6c4 = ke.title;
        const _0x48d69c = ke.icon;
        const _0x2ce1ca = ke.list;
        if (_0x3077b4 !== _0x242a4a._v$) {
          _0x27afa3(_0x242ad7, _0x242a4a._v$ = _0x3077b4);
        }
        if (_0x2b3037 !== _0x242a4a._v$2) {
          _0x27afa3(_0x1598f3, _0x242a4a._v$2 = _0x2b3037);
        }
        if (_0x10c6c4 !== _0x242a4a._v$3) {
          _0x27afa3(_0x2d1e89, _0x242a4a._v$3 = _0x10c6c4);
        }
        if (_0x48d69c !== _0x242a4a._v$4) {
          _0x27afa3(_0x5ecf04, _0x242a4a._v$4 = _0x48d69c);
        }
        if (_0x2ce1ca !== _0x242a4a._v$5) {
          _0x27afa3(_0x4f8396, _0x242a4a._v$5 = _0x2ce1ca);
        }
        return _0x242a4a;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined,
        _v$4: undefined,
        _v$5: undefined
      });
      return _0x242ad7;
    }
  });
};
_0xa1a894(["click"]);
const Ki = "" + new URL("arrows-31cae7f3.svg", import.meta.url).href;
const dt = "" + new URL("drift-illustration-dd0b2329.svg", import.meta.url).href;
const ut = "" + new URL("wheels-c539fd4a.png", import.meta.url).href;
const qi = "" + new URL("evo-f53f1172.png", import.meta.url).href;
const ji = "" + new URL("silvia-ad1c8dbb.png", import.meta.url).href;
const Ji = "_container_tom7f_1";
const Wi = "_driftCircles_tom7f_9";
const Yi = "_wheel_1_tom7f_19";
const Qi = "_wheel_2_tom7f_26";
const Zi = "_car_1_tom7f_34";
const Xi = "_car_2_tom7f_40";
const eo = "_content_tom7f_46";
const to = "_arrows_tom7f_60";
const ao = "_title_tom7f_64";
const no = "_description_tom7f_75";
const ro = "_avatar_container_tom7f_83";
const so = "_avatar_hover_tom7f_91";
const io = "_icon_tom7f_103";
const oo = "_avatar_tom7f_83";
const co = "_input_container_tom7f_120";
const lo = "_label_tom7f_126";
const uo = "_input_tom7f_120";
const vo = "_btn_tom7f_164";
const L = {
  container: Ji,
  driftCircles: Wi,
  wheel_1: Yi,
  wheel_2: Qi,
  car_1: Zi,
  car_2: Xi,
  content: eo,
  arrows: to,
  title: ao,
  description: no,
  avatar_container: ro,
  avatar_hover: so,
  icon: io,
  avatar: oo,
  input_container: co,
  label: lo,
  input: uo,
  btn: vo
};
const go = _0x49f26a("<div>");
const _o = _0x49f26a("<div><div><div><h1>SETUP</h1><p>Manage your underground profile</div><div><div></div></div><div><label>Alias</label><p>Your title in the underground. This is how you will be known to other racers.</p><input placeholder=\"Alias\"><button>Setup Profile</button></div><img></div><img><img><img><img><img><img>");
const mo = () => {
  const {
    setBoostingState: _0x53b2eb
  } = T();
  const [_0x45c211, _0x550ac4] = _0x4a46bb("");
  const [_0x241b97, _0x33eac1] = _0x4a46bb(false);
  const [_0xa12b97, _0x4e4d7f] = _0x4a46bb(false);
  const [_0x4e2ae3, _0x21eb02] = _0x4a46bb(Tt[1].image);
  const _0x2ce3a7 = async () => {
    if (_0x45c211() === "") {
      return;
    }
    const _0x458bd8 = await _0x4376d7("mkr_racing:createProfile", {
      avatar: _0x4e2ae3(),
      alias: _0x45c211()
    });
    if (_0x458bd8.data.success) {
      const _0x497844 = await ft();
      _0x53b2eb({
        racingProfile: _0x497844
      });
    }
    _0x5d935d("underground", _0x458bd8.data.message);
  };
  return (() => {
    const _0x59f2fa = _o();
    const _0x30faae = _0x59f2fa.firstChild;
    const _0x525aae = _0x30faae.firstChild;
    const _0x2c7d13 = _0x525aae.firstChild;
    const _0x2194ca = _0x2c7d13.nextSibling;
    const _0x2bfb9f = _0x525aae.nextSibling;
    const _0x4f7803 = _0x2bfb9f.firstChild;
    const _0x15e295 = _0x2bfb9f.nextSibling;
    const _0x45f382 = _0x15e295.firstChild;
    const _0x12663b = _0x45f382.nextSibling;
    const _0x31c3e5 = _0x12663b.nextSibling;
    const _0x4b9481 = _0x31c3e5.nextSibling;
    const _0x11935b = _0x15e295.nextSibling;
    const _0x38fa7c = _0x30faae.nextSibling;
    const _0x207fa6 = _0x38fa7c.nextSibling;
    const _0x4b5c2d = _0x207fa6.nextSibling;
    const _0x5883da = _0x4b5c2d.nextSibling;
    const _0x24eed7 = _0x5883da.nextSibling;
    const _0x1aac0b = _0x24eed7.nextSibling;
    _0xc6fe38(_0x59f2fa, _0x286b7e(Ui, {
      get show() {
        return _0xa12b97();
      },
      onSubmit: _0x367ab9 => _0x21eb02(_0x367ab9),
      onClose: () => {
        _0x4e4d7f(false);
      }
    }), _0x30faae);
    _0x2bfb9f.addEventListener("mouseleave", () => _0x33eac1(false));
    _0x2bfb9f.addEventListener("mouseenter", () => _0x33eac1(true));
    _0xc6fe38(_0x2bfb9f, _0x286b7e(_0x4ebf42, {
      get when() {
        return _0x241b97();
      },
      get children() {
        const _0xbbd0 = go();
        _0xbbd0.$$click = () => _0x4e4d7f(true);
        _0xc6fe38(_0xbbd0, _0x286b7e(_0x2db4c2, {
          icon: _0x4a2679,
          get class() {
            return L.icon;
          }
        }));
        _0x58f363(() => _0x27afa3(_0xbbd0, L.avatar_hover));
        return _0xbbd0;
      }
    }), _0x4f7803);
    _0x31c3e5.addEventListener("change", _0x5a8bd1 => _0x550ac4(_0x5a8bd1.target.value));
    _0x4b9481.$$click = _0x2ce3a7;
    _0x1ce879(_0x11935b, "src", Ki);
    _0x1ce879(_0x38fa7c, "src", dt);
    _0x1ce879(_0x207fa6, "src", dt);
    _0x1ce879(_0x4b5c2d, "src", ut);
    _0x1ce879(_0x5883da, "src", ut);
    _0x1ce879(_0x24eed7, "src", qi);
    _0x1ce879(_0x1aac0b, "src", ji);
    _0x58f363(_0x5f5622 => {
      const _0x17b148 = L.container;
      const _0x552406 = L.content;
      const _0x462ab9 = L.heading;
      const _0x546f97 = L.title;
      const _0x15bfd7 = L.description;
      const _0x3397de = L.avatar_container;
      const _0x149348 = L.avatar;
      const _0x57f777 = "url(" + _0x4e2ae3() + ")";
      const _0x53d147 = L.input_container;
      const _0x1d246c = L.label;
      const _0x41c15e = L.description;
      const _0x280fd4 = L.input;
      const _0x579dbe = L.btn;
      const _0x3f9941 = L.arrows;
      const _0x416613 = L.driftCircles;
      const _0x2035f2 = L.driftCircles;
      const _0x214754 = L.wheel_1;
      const _0x57e969 = L.wheel_2;
      const _0x223902 = L.car_1;
      const _0x43a799 = L.car_2;
      if (_0x17b148 !== _0x5f5622._v$) {
        _0x27afa3(_0x59f2fa, _0x5f5622._v$ = _0x17b148);
      }
      if (_0x552406 !== _0x5f5622._v$2) {
        _0x27afa3(_0x30faae, _0x5f5622._v$2 = _0x552406);
      }
      if (_0x462ab9 !== _0x5f5622._v$3) {
        _0x27afa3(_0x525aae, _0x5f5622._v$3 = _0x462ab9);
      }
      if (_0x546f97 !== _0x5f5622._v$4) {
        _0x27afa3(_0x2c7d13, _0x5f5622._v$4 = _0x546f97);
      }
      if (_0x15bfd7 !== _0x5f5622._v$5) {
        _0x27afa3(_0x2194ca, _0x5f5622._v$5 = _0x15bfd7);
      }
      if (_0x3397de !== _0x5f5622._v$6) {
        _0x27afa3(_0x2bfb9f, _0x5f5622._v$6 = _0x3397de);
      }
      if (_0x149348 !== _0x5f5622._v$7) {
        _0x27afa3(_0x4f7803, _0x5f5622._v$7 = _0x149348);
      }
      if (_0x57f777 !== _0x5f5622._v$8) {
        if ((_0x5f5622._v$8 = _0x57f777) != null) {
          _0x4f7803.style.setProperty("background-image", _0x57f777);
        } else {
          _0x4f7803.style.removeProperty("background-image");
        }
      }
      if (_0x53d147 !== _0x5f5622._v$9) {
        _0x27afa3(_0x15e295, _0x5f5622._v$9 = _0x53d147);
      }
      if (_0x1d246c !== _0x5f5622._v$10) {
        _0x27afa3(_0x45f382, _0x5f5622._v$10 = _0x1d246c);
      }
      if (_0x41c15e !== _0x5f5622._v$11) {
        _0x27afa3(_0x12663b, _0x5f5622._v$11 = _0x41c15e);
      }
      if (_0x280fd4 !== _0x5f5622._v$12) {
        _0x27afa3(_0x31c3e5, _0x5f5622._v$12 = _0x280fd4);
      }
      if (_0x579dbe !== _0x5f5622._v$13) {
        _0x27afa3(_0x4b9481, _0x5f5622._v$13 = _0x579dbe);
      }
      if (_0x3f9941 !== _0x5f5622._v$14) {
        _0x27afa3(_0x11935b, _0x5f5622._v$14 = _0x3f9941);
      }
      if (_0x416613 !== _0x5f5622._v$15) {
        _0x27afa3(_0x38fa7c, _0x5f5622._v$15 = _0x416613);
      }
      if (_0x2035f2 !== _0x5f5622._v$16) {
        _0x27afa3(_0x207fa6, _0x5f5622._v$16 = _0x2035f2);
      }
      if (_0x214754 !== _0x5f5622._v$17) {
        _0x27afa3(_0x4b5c2d, _0x5f5622._v$17 = _0x214754);
      }
      if (_0x57e969 !== _0x5f5622._v$18) {
        _0x27afa3(_0x5883da, _0x5f5622._v$18 = _0x57e969);
      }
      if (_0x223902 !== _0x5f5622._v$19) {
        _0x27afa3(_0x24eed7, _0x5f5622._v$19 = _0x223902);
      }
      if (_0x43a799 !== _0x5f5622._v$20) {
        _0x27afa3(_0x1aac0b, _0x5f5622._v$20 = _0x43a799);
      }
      return _0x5f5622;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined,
      _v$7: undefined,
      _v$8: undefined,
      _v$9: undefined,
      _v$10: undefined,
      _v$11: undefined,
      _v$12: undefined,
      _v$13: undefined,
      _v$14: undefined,
      _v$15: undefined,
      _v$16: undefined,
      _v$17: undefined,
      _v$18: undefined,
      _v$19: undefined,
      _v$20: undefined
    });
    _0x58f363(() => _0x31c3e5.value = _0x45c211());
    return _0x59f2fa;
  })();
};
_0xa1a894(["click"]);
const ho = "_container_1h76x_1";
const po = "_wrapper_1h76x_12";
const fo = "_header_1h76x_26";
const $o = "_content_1h76x_53";
const bo = "_checkbox_1h76x_60";
const ko = "_label_1h76x_82";
const Co = "_actions_1h76x_91";
const yo = "_btn_1h76x_98";
const Ao = "_cancel_1h76x_111";
const To = "_fadeIn_1h76x_1";
const le = {
  container: ho,
  wrapper: po,
  header: fo,
  content: $o,
  "checkbox-input-container": "_checkbox-input-container_1h76x_60",
  checkbox: bo,
  label: ko,
  actions: Co,
  btn: yo,
  cancel: Ao,
  "text-input-container": "_text-input-container_1h76x_122",
  fadeIn: To
};
const wo = _0x49f26a("<div><div><div><h1>Confirmation</h1><p></div><div><button>Confirm</button><button>Cancel");
const So = _0x3de981 => {
  const {
    setConfirmModalInfo: _0xbb3ee3
  } = T();
  const _0x36de55 = () => {
    _0x3de981.onConfirm();
    return _0xbb3ee3(null);
  };
  const _0x55559e = () => {
    _0x3de981.onCancel();
    return _0xbb3ee3(null);
  };
  return (() => {
    const _0x31ca4e = wo();
    const _0x1f8f59 = _0x31ca4e.firstChild;
    const _0x14f091 = _0x1f8f59.firstChild;
    const _0x2f4104 = _0x14f091.firstChild;
    const _0x2e29c5 = _0x2f4104.nextSibling;
    const _0x522e25 = _0x14f091.nextSibling;
    const _0x17b9c4 = _0x522e25.firstChild;
    const _0x104a11 = _0x17b9c4.nextSibling;
    _0xc6fe38(_0x2e29c5, () => _0x3de981.message);
    _0x17b9c4.$$click = _0x36de55;
    _0x104a11.$$click = _0x55559e;
    _0x58f363(_0x41d0c9 => {
      const _0x2de0e7 = le.container;
      const _0x5c25d8 = le.wrapper;
      const _0xe342c8 = le.header;
      const _0x26e950 = le.actions;
      const _0x2a0914 = {
        [le.btn]: true,
        [le.success]: true
      };
      const _0x1e36bd = {
        [le.btn]: true,
        [le.cancel]: true
      };
      if (_0x2de0e7 !== _0x41d0c9._v$) {
        _0x27afa3(_0x31ca4e, _0x41d0c9._v$ = _0x2de0e7);
      }
      if (_0x5c25d8 !== _0x41d0c9._v$2) {
        _0x27afa3(_0x1f8f59, _0x41d0c9._v$2 = _0x5c25d8);
      }
      if (_0xe342c8 !== _0x41d0c9._v$3) {
        _0x27afa3(_0x14f091, _0x41d0c9._v$3 = _0xe342c8);
      }
      if (_0x26e950 !== _0x41d0c9._v$4) {
        _0x27afa3(_0x522e25, _0x41d0c9._v$4 = _0x26e950);
      }
      _0x41d0c9._v$5 = _0x497c65(_0x17b9c4, _0x2a0914, _0x41d0c9._v$5);
      _0x41d0c9._v$6 = _0x497c65(_0x104a11, _0x1e36bd, _0x41d0c9._v$6);
      return _0x41d0c9;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined,
      _v$5: undefined,
      _v$6: undefined
    });
    return _0x31ca4e;
  })();
};
_0xa1a894(["click"]);
const xo = "_container_kl1pg_1";
const Go = {
  container: xo
};
const Ro = _0x49f26a("<div>");
const Oo = () => _0x286b7e(_0x5f1154, {
  get name() {
    return ae.name;
  },
  headerColor: "#030A10",
  get children() {
    return _0x286b7e(da, {
      get children() {
        return _0x286b7e(Io, {});
      }
    });
  }
});
const Io = () => {
  const [_0x5e268c, _0x8bc040] = _0x4a46bb(true);
  const [_0x3f2e26, _0x38d724] = _0x4a46bb(false);
  const {
    boostingState: _0x7d9f0c,
    modalInfo: _0x720b65,
    confirmModalInfo: _0x354e89,
    setRacingState: _0x50cd77,
    setBoostingState: _0x1f3c10,
    page: _0x108dae
  } = T();
  const _0x46358b = _0x4c148f();
  _0xbc8eb0(async () => {
    _0x374dae(ae.name, "racing-update", _0x4a58a9 => {
      if (_0x46358b.owned !== null) {
        return Pa(_0x46358b, _0x4a58a9);
      }
    });
    _0x374dae(ae.name, "racing-night-time", _0xe79365 => {
      if (_0x46358b.owned !== null) {
        return La(_0x46358b, _0xe79365);
      }
    });
    _0x374dae(ae.name, "racing-update-phone-state", _0x52f307 => {
      if (_0x46358b.owned !== null) {
        return za(_0x46358b, _0x52f307);
      }
    });
    _0x374dae(ae.name, "refresh-contracts", async () => {
      const _0x40d3af = await _t();
      return _0x1f3c10("contracts", _0x40d3af);
    });
    _0x374dae(ae.name, "boosting-auction-sound", _0x5472e2 => aa(_0x5472e2.sound));
    _0x374dae(ae.name, "refresh-auction-list", async () => {
      const _0x208954 = await mt();
      return _0x1f3c10("auctionContracts", _0x208954);
    });
    _0x374dae(ae.name, "refresh-group", async () => {
      const _0x2a0e7c = await ht();
      return _0x1f3c10("group", _0x2a0e7c);
    });
    _0x374dae(ae.name, "refresh-clock-in", async () => {
      const _0x19dcde = await pt();
      return _0x1f3c10("clockedIn", _0x19dcde);
    });
    const [_0x36549f, _0x3c8b79] = await Promise.all([ca(), ft()]);
    _0x1f3c10({
      racingProfile: _0x3c8b79,
      progression: _0x36549f
    });
    _0x8bc040(false);
  });
  _0x211aa6(async () => {
    if (_0x108dae() === "races" && !_0x3f2e26()) {
      _0x8bc040(true);
      const [_0x4020b9, _0x595432, _0x7a7658] = await Promise.all([Aa(), $a(), la()]);
      _0x50cd77({
        racingAlias: _0x4020b9.alias,
        createTrack: {
          hasCreateChip: _0x4020b9.hasCreateChip,
          createTrackPayload: {
            ..._0x4020b9.createTrackPayload
          }
        },
        pendingRaces: _0x595432.pending,
        completedRaces: _0x595432.completed,
        activeRaces: _0x595432.active,
        raceTracks: _0x595432.maps,
        allowPhasing: _0x7a7658.allowPhasing
      });
      _0x8bc040(false);
      _0x38d724(true);
    }
  });
  return _0x286b7e(_0x3df129, {
    get fallback() {
      return _0x286b7e(mo, {});
    },
    get children() {
      return [_0x286b7e(_0x2accbb, {
        get when() {
          return _0x5e268c();
        },
        get children() {
          return _0x286b7e(vi, {});
        }
      }), _0x286b7e(_0x2accbb, {
        get when() {
          return _0x55a71e(() => !!_0x7d9f0c.racingProfile)() && !_0x5e268c();
        },
        get children() {
          const _0x1bb73a = Ro();
          _0xc6fe38(_0x1bb73a, _0x286b7e(si, {}), null);
          _0xc6fe38(_0x1bb73a, _0x286b7e(mi, {}), null);
          _0xc6fe38(_0x1bb73a, _0x286b7e(ai, {}), null);
          _0xc6fe38(_0x1bb73a, _0x286b7e(_0x4ebf42, {
            get when() {
              return _0x720b65();
            },
            children: _0x5bb169 => _0x286b7e(Pi, _0x286a66(_0x5bb169))
          }), null);
          _0xc6fe38(_0x1bb73a, _0x286b7e(_0x4ebf42, {
            get when() {
              return _0x354e89();
            },
            children: _0x2e8a77 => _0x286b7e(So, _0x286a66(_0x2e8a77))
          }), null);
          _0x58f363(() => _0x27afa3(_0x1bb73a, Go.container));
          return _0x1bb73a;
        }
      })];
    }
  });
};
const ae = {
  icon: _0x5458f4,
  enabled: true,
  onDock: false,
  name: "underground",
  label: "Underground",
  render: () => _0x286b7e(Oo, {})
};
export { ae as default };
