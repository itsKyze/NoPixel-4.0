(() => {
  'use strict';

  var _0x1be5fa = {};
  (() => {
    _0x1be5fa.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (_0x19f8fe) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  var _0x1fb6a6 = {};
  ;
  let _0x5dd4c7;
  const _0x39ae86 = new Map();
  const _0x570c46 = GetCurrentResourceName();
  async function _0x369b99() {
    while (!globalThis.exports.config.IsConfigReady()) {
      await new Promise(_0x55bdd7 => setTimeout(_0x55bdd7, 100));
    }
    _0x5dd4c7 = globalThis.exports.config.GetModuleConfig("main");
  }
  on("np-config:configLoaded", (_0x3ba990, _0x28af19) => {
    if (_0x3ba990 === "main") {
      _0x5dd4c7 = _0x28af19;
    } else if (_0x39ae86.has(_0x3ba990)) {
      _0x39ae86.set(_0x3ba990, _0x28af19);
    }
  });
  function _0x3fb566(_0x14eb04) {
    return _0x5dd4c7[_0x14eb04];
  }
  function _0x3aa478(_0x247550, _0x1bfc21) {
    if (!_0x39ae86.has(_0x247550)) {
      const _0x4a41d9 = _0x1be5fa.g.exports.config.GetModuleConfig(_0x247550);
      if (_0x4a41d9 === undefined) {
        return;
      }
      _0x39ae86.set(_0x247550, _0x4a41d9);
    }
    const _0x9772a = _0x39ae86.get(_0x247550);
    if (_0x1bfc21) {
      return _0x9772a?.[_0x1bfc21];
    } else {
      return _0x9772a;
    }
  }
  function _0x1c6168(_0x329b52) {
    return _0x3aa478(_0x570c46, _0x329b52);
  }
  ;
  const _0x50b6bb = globalThis.NPX;
  const _0x425c27 = _0x50b6bb.Hud;
  const _0x1657f3 = _0x50b6bb.Utils;
  const _0x5d20e2 = _0x50b6bb.Zones;
  const _0x1e0106 = _0x50b6bb.Events;
  const _0x25052c = _0x50b6bb.Streaming;
  const _0x5f3e68 = _0x50b6bb.Procedures;
  const _0x3fd60f = _0x50b6bb.Interface;
  const _0xc278c7 = null && _0x50b6bb;
  ;
  const _0x70de91 = globalThis;
  class _0x22f0e5 {
    constructor(_0x5a20e5, _0x558cf2, _0x200f52 = "interval") {
      this.callback = _0x5a20e5;
      this.delay = _0x558cf2;
      this.mode = _0x200f52;
      this.scheduled = {};
      this.tick = 0;
      this.data = {};
      this.hooks = new Map([["active", []], ["preStop", []], ["preStart", []], ["afterStop", []], ["afterStart", []], ["stopAborted", []], ["startAborted", []]]);
    }
    get isActive() {
      return this.active;
    }
    async start() {
      if (this.active) {
        return;
      }
      this.aborted = false;
      this.scheduled = {};
      const _0x5330c7 = this.hooks.get("preStart");
      try {
        for (const _0x368d8c of _0x5330c7) {
          if (!this.aborted) {
            await _0x368d8c.call(this);
          }
        }
      } catch (_0x30ef2b) {
        this.aborted = true;
        console.log("Error while calling pre-start hook", _0x30ef2b.message);
      }
      if (this.aborted) {
        try {
          const _0x49c1a9 = this.hooks.get("startAborted");
          for (const _0x4a7e59 of _0x49c1a9) {
            await _0x4a7e59.call(this);
          }
        } catch (_0x33453e) {
          console.log("Error while calling start-aborted hook", _0x33453e.message);
        }
        return;
      }
      this.active = true;
      const _0x55cb25 = this.hooks.get("active");
      switch (this.mode) {
        case "tick":
          {
            this.threadId = _0x70de91.setTick(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const _0x2d76a2 of _0x55cb25) {
                  await _0x2d76a2.call(this);
                }
              } catch (_0x4b845a) {
                console.log("Error while calling active hook", _0x4b845a.message);
              }
              if (this.delay > 0) {
                await new Promise(_0x4e851e => _0x70de91.setTimeout(_0x4e851e, this.delay));
              }
            });
            break;
          }
        case "interval":
          {
            this.threadId = _0x70de91.setInterval(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const _0x261d37 of _0x55cb25) {
                  await _0x261d37.call(this);
                }
              } catch (_0x25ff7a) {
                console.log("Error while calling active hook", _0x25ff7a.message);
              }
            }, this.delay);
            break;
          }
        case "timeout":
          {
            const _0x26705a = () => {
              if (this.active) {
                this.threadId = _0x70de91.setTimeout(async () => {
                  this.tick += 1;
                  try {
                    await this.callback.call(this);
                    for (const _0x4862d7 of _0x55cb25) {
                      await _0x4862d7.call(this);
                    }
                  } catch (_0x15ca5d) {
                    console.log("Error while calling active hook", _0x15ca5d.message);
                  }
                  return _0x26705a();
                }, this.delay);
              }
            };
            _0x26705a();
            break;
          }
      }
      const _0x24c9eb = this.hooks.get("afterStart");
      try {
        for (const _0x1a447f of _0x24c9eb) {
          await _0x1a447f.call(this);
        }
      } catch (_0x4c3954) {
        console.log("Error while calling after-start hook", _0x4c3954.message);
      }
    }
    async stop() {
      if (!this.active) {
        return;
      }
      const _0x1a7e4a = this.hooks.get("preStop");
      try {
        for (const _0x3a9086 of _0x1a7e4a) {
          if (!this.aborted) {
            await _0x3a9086.call(this);
          }
        }
      } catch (_0x164cda) {
        this.aborted = true;
        console.log("Error while calling pre-stop hook", _0x164cda.message);
      }
      this.active = false;
      switch (this.mode) {
        case "tick":
          {
            _0x70de91.clearTick(this.threadId);
            break;
          }
        case "interval":
          {
            _0x70de91.clearInterval(this.threadId);
            break;
          }
        case "timeout":
          {
            _0x70de91.clearTimeout(this.threadId);
            break;
          }
      }
      if (this.aborted) {
        try {
          const _0x1e5726 = this.hooks.get("stopAborted");
          for (const _0x1f62af of _0x1e5726) {
            await _0x1f62af.call(this);
          }
        } catch (_0x4cd76e) {
          console.log("Error while calling stop-aborted hook", _0x4cd76e.message);
        }
        return;
      }
      const _0x2fb544 = this.hooks.get("afterStop");
      try {
        for (const _0x4a1d96 of _0x2fb544) {
          await _0x4a1d96.call(this);
        }
      } catch (_0x3e49bb) {
        console.log("Error while calling after-stop hook", _0x3e49bb.message);
      }
    }
    abort() {
      this.aborted = true;
    }
    addHook(_0xabe0a6, _0x2761ad) {
      var _0x523da5;
      if ((_0x523da5 = this.hooks.get(_0xabe0a6)) === null || _0x523da5 === undefined) {
        undefined;
      } else {
        _0x523da5.push(_0x2761ad);
      }
    }
    setNextTick(_0x9dd5c4, _0x2efbb9) {
      this.scheduled[_0x9dd5c4] = this.tick + _0x2efbb9;
    }
    canTick(_0xe4432e) {
      return this.scheduled[_0xe4432e] === undefined || this.tick >= this.scheduled[_0xe4432e];
    }
  }
  ;
  function _0x47b021(_0x53c645) {
    return new Promise(_0x1af253 => setTimeout(_0x1af253, _0x53c645));
  }
  ;
  async function _0x508fa9(_0x36ae3d) {
    if (!HasAnimDictLoaded(_0x36ae3d)) {
      RequestAnimDict(_0x36ae3d);
      let _0x3ac7d1 = false;
      setTimeout(() => _0x3ac7d1 = true, 60000);
      while (!HasAnimDictLoaded(_0x36ae3d) && !_0x3ac7d1) {
        await _0x47b021(10);
      }
    }
  }
  function _0x55c6c4(_0x4caf50, _0x38ed61, _0x4a3145 = false) {
    return new Promise(_0x3aa664 => {
      if (_0x38ed61) {
        exports["np-taskbar"].taskBar(_0x4caf50, _0x38ed61, _0x4a3145, true, null, false, _0x3aa664);
      } else {
        setTimeout(() => _0x3aa664(100), _0x4caf50);
      }
    });
  }
  async function _0x531ab1(_0x1a62e8, _0xca8a2) {
    return await exports.skillchecks.taskBarSkill(_0x1a62e8, _0xca8a2);
  }
  const _0x3113ef = (_0x13a683, _0xdc362f) => {
    return exports["np-flags"].HasPedFlag(_0x13a683, _0xdc362f);
  };
  const _0x399fad = (_0x2c139b, _0x4f1e38, _0x457a29) => {
    exports["np-flags"].SetPedFlag(_0x2c139b, _0x4f1e38, _0x457a29);
  };
  ;
  class _0x44a4ae {
    constructor(_0x466d6a, _0x5d4082, _0x3b8f5b, _0x24d505, _0x3591fb, _0x16bf28, _0x38b7c8 = 1) {
      this.ped = _0x466d6a;
      this.type = _0x5d4082;
      this.flag = _0x38b7c8;
      this.text = _0x3b8f5b;
      this.active = false;
      this.duration = _0x24d505;
      this.dictionary = _0x3591fb;
      this.animation = _0x16bf28;
    }
    start(_0x51f283) {
      if (this.active) {
        return;
      }
      this.active = true;
      if (_0x51f283) {
        _0x51f283(this);
      }
      this.tickId = setTick(async () => {
        if (this.animation && !IsEntityPlayingAnim(this.ped, this.dictionary, this.animation, 3)) {
          await _0x508fa9(this.dictionary);
          TaskPlayAnim(this.ped, this.dictionary, this.animation, -8, -8, -1, this.flag, 0, false, false, false);
        } else if (!this.animation && !IsPedUsingScenario(this.ped, this.dictionary)) {
          TaskStartScenarioInPlace(this.ped, this.dictionary, 0, true);
        }
        await _0x47b021(100);
      });
      let _0x325dfd;
      if (this.type === "skill" && this.duration instanceof Array) {
        _0x325dfd = new Promise(async _0x321055 => {
          const _0xf15f4e = this.duration;
          for (const _0x267c1d of _0xf15f4e) {
            const _0x2389da = await _0x531ab1(_0x267c1d.difficulty, _0x267c1d.gap);
            if (_0x2389da !== 100) {
              return _0x321055(0);
            }
          }
          _0x321055(100);
        });
      } else if (this.type === "normal" && typeof this.duration === "number") {
        _0x325dfd = _0x55c6c4(this.duration, this.text);
      }
      _0x325dfd.then(() => {
        this.stop();
      });
      return _0x325dfd;
    }
    stop() {
      if (!this.active) {
        return;
      }
      this.active = false;
      clearTick(this.tickId);
      if (!this.animation && IsPedUsingScenario(this.ped, this.dictionary)) {
        ClearPedTasks(this.ped);
      } else {
        StopAnimTask(this.ped, this.dictionary, this.animation, 3);
      }
    }
    abort() {
      if (this.active) {
        exports["np-taskbar"].taskCancel();
        this.stop();
      }
    }
  }
  ;
  const _0x52efe2 = new Map();
  const _0x40fa11 = new _0x22f0e5(() => {}, 0);
  const _0x31a6c3 = {
    xPos: -0.01,
    yPos: 0.045,
    zPos: 1.9081958235745e-16,
    xRot: 223,
    yRot: -94,
    zRot: -52
  };
  const _0x1a1c9d = {
    xPos: 0.07,
    yPos: 0.02,
    zPos: 0.01,
    xRot: -16,
    yRot: 5,
    zRot: 132
  };
  const _0x55a4d0 = {
    xPos: -0.04,
    yPos: 0.165,
    zPos: 0,
    xRot: -180,
    yRot: 90,
    zRot: -5
  };
  const _0x2e68c2 = {
    isBlindfolded: {
      model: GetHashKey("np_blindfold_hood"),
      bone: 12844,
      position: _0x31a6c3
    },
    isGagged: {
      model: GetHashKey("prop_rolled_sock_01"),
      bone: 47495,
      position: _0x1a1c9d
    },
    isBlipDisabled: {
      model: GetHashKey("np_prop_jammer"),
      bone: 11816,
      position: _0x55a4d0
    },
    isDeafened: {
      model: GetHashKey("prop_ear_defenders_01"),
      bone: 31086,
      position: {
        xPos: 0.1,
        yPos: 0.01,
        zPos: 0,
        xRot: 14,
        yRot: 90,
        zRot: 3
      }
    }
  };
  async function _0x34dc80() {}
  async function _0xd6f3cb(_0x2ff769, _0x275a51, _0x59af48) {
    const _0x411c21 = new _0x44a4ae(PlayerPedId(), "normal", _0x59af48 ? _L("captive-applying", "Applying") : _L("captive-removing", "Removing"), _0x59af48 ? 10000 : 1000, "amb@prop_human_parking_meter@female@base", "base_female");
    const _0x4f6a72 = await _0x411c21.start();
    if (_0x4f6a72 === 100) {
      const _0x290780 = GetPlayerServerId(NetworkGetPlayerIndexFromPed(_0x2ff769));
      _0x1e0106.emitNet("np-captive:captive", _0x290780, _0x275a51, _0x59af48);
    }
  }
  const _0x1a8d84 = async _0x3731d2 => {
    const _0x16c909 = _0x2e68c2[_0x3731d2];
    if (_0x16c909) {
      if (!(await _0x25052c.loadModel(_0x16c909.model))) {
        return 0;
      }
      const _0x44301e = GetEntityCoords(PlayerPedId(), false);
      const _0x1cfa8d = CreateObjectNoOffset(_0x16c909.model, _0x44301e[0], _0x44301e[1], _0x44301e[2], true, true, false);
      const _0x3138f3 = await _0x1657f3.waitForCondition(() => DoesEntityExist(_0x1cfa8d), 30000);
      if (_0x3138f3) {
        return 0;
      }
      if (_0x1cfa8d) {
        AttachEntityToEntity(_0x1cfa8d, PlayerPedId(), GetPedBoneIndex(PlayerPedId(), _0x16c909.bone), _0x16c909.position.xPos, _0x16c909.position.yPos, _0x16c909.position.zPos, _0x16c909.position.xRot, _0x16c909.position.yRot, _0x16c909.position.zRot, false, false, false, true, 0, true);
        return _0x1cfa8d;
      }
    }
    return 0;
  };
  async function _0x3016e0(_0xe413dc, _0x31e955, _0x474821) {
    if (_0xe413dc !== GetPlayerServerId(PlayerId())) {
      console.log("[NP-CAPTIVE] Player target is not itself.");
      return;
    }
    _0x399fad(PlayerPedId(), _0x31e955, _0x474821);
    const _0x62fc5 = _0x52efe2.get(_0x31e955);
    if (_0x62fc5) {
      if (_0x474821) {
        console.log("[NP-CAPTIVE] Deleted existing object, this is not good.");
      }
      DeleteObject(_0x62fc5);
      _0x52efe2.delete(_0x31e955);
    }
    if (_0x474821) {
      const _0xba434f = await _0x1a8d84(_0x31e955);
      if (_0xba434f && _0xba434f != 0) {
        _0x52efe2.set(_0x31e955, _0xba434f);
        _0x40fa11.data.hoodObject = _0xba434f;
      }
    }
    if (_0x31e955 == "isBlindfolded") {
      const _0x1b9ffa = {
        blind: _0x474821
      };
      SendNUIMessage(_0x1b9ffa);
      if (_0x474821) {
        _0x40fa11.start();
      } else {
        _0x40fa11.stop();
      }
    } else if (_0x31e955 == "isGagged") {
      const _0x53514d = [{
        mode: 1,
        range: 0.5,
        priority: 2
      }, {
        mode: 2,
        range: 0.75,
        priority: 2
      }, {
        mode: 3,
        range: 1,
        priority: 2
      }];
      if (_0x474821) {
        emit("np:voice:proximity:override", "gag", _0x53514d);
        emitNet("np:voice:transmission:state", -1, "gag", true, "gag");
      } else {
        emit("np:voice:proximity:override", "gag", _0x53514d, -1, -1);
        emitNet("np:voice:transmission:state", -1, "gag", false, "gag");
      }
    } else if (_0x31e955 == "isBlipDisabled") {
      const _0x4969bc = GetPlayerPed(GetPlayerFromServerId(_0xe413dc));
      const _0x1a1df5 = DecorGetInt(_0x4969bc, "EmergencyType");
      if (_0x1a1df5 > 0 && _0x1a1df5 <= 4) {
        emitNet("e-blips:updateBlips", null, _0x474821);
      }
    } else if (_0x31e955 == "isDeafened") {
      if (_0x474821) {
        SetAudioSubmixOutputVolumes(1, 0, 0, 0, 0, 0, 0, 0);
      } else {
        SetAudioSubmixOutputVolumes(1, 0, 1, 1, 1, 1, 1, 1);
      }
    }
  }
  _0x40fa11.addHook("preStart", () => {
    SetFollowPedCamViewMode(4);
  });
  _0x40fa11.addHook("active", function () {
    if (this.data?.hoodObject) {}
    DisableControlAction(0, 0, true);
  });
  _0x40fa11.addHook("afterStop", function () {
    this.data.hoodObject = null;
  });
  ;
  async function _0x19e0d3() {}
  on("np-captive:captive", async (_0x3fdfef, _0x5cdee3) => {
    const [_0x1fe366, _0x324534] = _0x3fdfef;
    if (!_0x1fe366 || !_0x5cdee3) {
      return;
    }
    _0xd6f3cb(_0x5cdee3, _0x1fe366, _0x324534);
  });
  _0x1e0106.onNet("np-captive:setState", (_0x197517, _0x2a86c8, _0xbd48ed) => _0x3016e0(_0x197517, _0x2a86c8, _0xbd48ed));
  ;
  async function _0x221adf() {
    await _0x369b99();
    await _0x19e0d3();
    await _0x34dc80();
  }
  ;
  (async () => {
    await _0x221adf();
  })();
})();