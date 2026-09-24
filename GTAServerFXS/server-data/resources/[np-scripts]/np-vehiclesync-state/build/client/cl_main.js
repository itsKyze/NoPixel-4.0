(() => {
  'use strict';

  var _0x2aea5a = {};
  (() => {
    _0x2aea5a.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (_0xcd8dfd) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  var _0x3bad17 = {};
  ;
  let _0x2e1ddf;
  let _0x14f647 = null;
  const _0x41ee74 = new Map();
  const _0x5be54b = GetCurrentResourceName();
  async function _0x315658() {
    while (!globalThis.exports.config.IsConfigReady()) {
      await new Promise(_0x295a4f => setTimeout(_0x295a4f, 100));
    }
    _0x2e1ddf = globalThis.exports.config.GetModuleConfig("main");
    while (_0x14f647 == null) {
      await new Promise(_0x3442ff => setTimeout(_0x3442ff, 100));
      _0x14f647 = _0x5190cc();
    }
    if (_0x14f647 != null) {
      Object.keys(_0x14f647.modelPreset).forEach(_0x26c3de => {
        const _0x22d01b = _0x14f647.modelPreset[_0x26c3de];
        _0x14f647.modelPreset[GetHashKey(_0x26c3de)] = _0x22d01b;
        delete _0x14f647.modelPreset[_0x26c3de];
      });
      Object.keys(_0x14f647.cosmeticOverrides).forEach(_0x473869 => {
        const _0x5e6712 = _0x14f647.cosmeticOverrides[_0x473869];
        _0x14f647.cosmeticOverrides[GetHashKey(_0x473869)] = _0x5e6712;
        delete _0x14f647.cosmeticOverrides[_0x473869];
      });
    }
  }
  on("np-config:configLoaded", (_0x3bb1e1, _0x278b89) => {
    if (_0x3bb1e1 === "main") {
      _0x2e1ddf = _0x278b89;
    } else if (_0x41ee74.has(_0x3bb1e1)) {
      _0x41ee74.set(_0x3bb1e1, _0x278b89);
    }
  });
  function _0x543953(_0x416581) {
    return _0x2e1ddf[_0x416581];
  }
  function _0x321d85(_0x3a7d55, _0x3d5e07) {
    if (!_0x41ee74.has(_0x3a7d55)) {
      const _0x2ae994 = _0x2aea5a.g.exports.config.GetModuleConfig(_0x3a7d55);
      if (_0x2ae994 === undefined) {
        return;
      }
      _0x41ee74.set(_0x3a7d55, _0x2ae994);
    }
    const _0x3d2a87 = _0x41ee74.get(_0x3a7d55);
    if (_0x3d5e07) {
      return _0x3d2a87?.[_0x3d5e07];
    } else {
      return _0x3d2a87;
    }
  }
  function _0x5190cc(_0x28b33a) {
    return _0x321d85(_0x5be54b, _0x28b33a);
  }
  ;
  const _0x419fb5 = globalThis.NPX;
  const _0x15ca53 = _0x419fb5.Hud;
  const _0x19a33d = _0x419fb5.Utils;
  const _0x1d23eb = _0x419fb5.Zones;
  const _0x221682 = _0x419fb5.Events;
  const _0x2bb8dc = _0x419fb5.Streaming;
  const _0x911fb = _0x419fb5.Procedures;
  const _0x5a30fc = _0x419fb5.Interface;
  const _0x45339c = null && _0x419fb5;
  ;
  var _0x58d0b7;
  (function (_0x378206) {
    _0x378206[_0x378206.neonLights = 1] = "neonLights";
    _0x378206[_0x378206.engineSound = 2] = "engineSound";
    _0x378206[_0x378206.leftIndicator = 4] = "leftIndicator";
    _0x378206[_0x378206.rightIndicator = 8] = "rightIndicator";
    _0x378206[_0x378206.hazardIndicator = 16] = "hazardIndicator";
    _0x378206[_0x378206.wheelFitment = 32] = "wheelFitment";
  })(_0x58d0b7 ||= {});
  var _0x226caa;
  (function (_0xd7b799) {
    _0xd7b799[_0xd7b799.sirenActive = 1] = "sirenActive";
    _0xd7b799[_0xd7b799.sirenMuted = 2] = "sirenMuted";
    _0xd7b799[_0xd7b799.sirenAirhorn = 4] = "sirenAirhorn";
    _0xd7b799[_0xd7b799.sirenNormal = 8] = "sirenNormal";
    _0xd7b799[_0xd7b799.sirenAltern = 16] = "sirenAltern";
    _0xd7b799[_0xd7b799.sirenWarning = 32] = "sirenWarning";
  })(_0x226caa ||= {});
  var _0xd53663;
  (function (_0x587448) {
    _0x587448[_0x587448.invalid1 = 24] = "invalid1";
    _0x587448[_0x587448.invalid2 = 48] = "invalid2";
    _0x587448[_0x587448.invalid3 = 40] = "invalid3";
  })(_0xd53663 ||= {});
  var _0x99158e;
  (function (_0x398c10) {
    _0x398c10[_0x398c10.sirensAndLights = 59] = "sirensAndLights";
    _0x398c10[_0x398c10.sirens = 57] = "sirens";
    _0x398c10[_0x398c10.soundEmitting = 60] = "soundEmitting";
  })(_0x99158e ||= {});
  var _0x131b0e;
  (function (_0x212ac4) {
    _0x212ac4[_0x212ac4.Hazards = 1] = "Hazards";
    _0x212ac4[_0x212ac4.Left = 2] = "Left";
    _0x212ac4[_0x212ac4.Right = 4] = "Right";
  })(_0x131b0e ||= {});
  ;
  const _0x37710e = new Set();
  async function _0x7c71dd(_0x27f594) {
    return new Promise(_0x491af4 => setTimeout(() => _0x491af4(), _0x27f594));
  }
  function _0x58fbd8(_0x3f73a2, _0x359401 = 500) {
    if (!_0x37710e.has(_0x3f73a2)) {
      _0x37710e.add(_0x3f73a2);
      setTimeout(() => _0x37710e.delete(_0x3f73a2), _0x359401);
      return false;
    }
    return true;
  }
  function _0x5f289c(_0x5e5c82) {
    return _0x37710e.has(_0x5e5c82);
  }
  ;
  const _0x8bbb5c = (_0x2ac07f, _0x5e3f02) => {
    if (!_0x2ac07f || !_0x5e3f02) {
      return;
    }
    const _0xc8c7a6 = _0x14f647.cosmeticOverrides[_0x5e3f02.toString()];
    if (_0xc8c7a6) {
      for (const _0x488bdf in _0xc8c7a6) {
        const _0x3fd9f8 = GetVehicleMod(_0x2ac07f, _0xc8c7a6[_0x488bdf].modId);
        if (_0x3fd9f8.toString()) {
          const _0x4a41ee = _0xc8c7a6[_0x488bdf].data[_0x3fd9f8.toString()];
          if (_0x4a41ee) {
            return _0x4a41ee;
          }
        }
      }
    }
    return;
  };
  const _0x474ddc = async (_0x117001, _0x24090e) => {
    return AddStateBagChangeHandler(_0x117001, null, async (_0x33a48f, _0x2ef2d4, _0x15758a, _0x14f75a, _0x18e80d) => {
      const _0x327d0b = Number(_0x33a48f.replace("entity:", ""));
      const _0xccd4e7 = await _0x19a33d.waitForCondition(() => NetworkDoesEntityExistWithNetworkId(_0x327d0b), 1500);
      if (_0xccd4e7) {
        return;
      }
      const [_0x1d1269, _0x4b9863] = await _0x28c8ec(_0x327d0b);
      if (!_0x1d1269) {
        return;
      }
      if (_0x117001 === "sirenFlags") {
        if (Entity(_0x4b9863).state?.senderVehicleId == _0x4b9863) {
          return;
        }
      }
      _0x24090e(_0x4b9863, _0x15758a, _0x327d0b);
    });
  };
  const _0x28c8ec = async _0x54b5cd => {
    const _0x5ca1d4 = await _0x19a33d.waitForCondition(() => NetworkDoesNetworkIdExist(_0x54b5cd), 2000);
    if (_0x5ca1d4) {
      return [false, "Failed to get network id"];
    }
    const _0x8937a9 = NetToVeh(_0x54b5cd);
    const _0x4918dc = await _0x19a33d.waitForCondition(() => DoesEntityExist(_0x8937a9), 2000);
    if (_0x4918dc) {
      return [false, "Failed to get entity id"];
    }
    return [true, _0x8937a9];
  };
  const _0xad03ee = async _0x55198e => {
    const _0x171ea5 = await _0x19a33d.waitForCondition(() => DoesEntityExist(_0x55198e), 2000);
    if (_0x171ea5) {
      return [false, "Failed to get entity id"];
    }
    const _0x18d5ed = await _0x19a33d.waitForCondition(() => NetworkGetEntityIsNetworked(_0x55198e), 2000);
    if (_0x18d5ed) {
      return [false, "Failed to get network id"];
    }
    return [true, NetworkGetNetworkIdFromEntity(_0x55198e)];
  };
  ;
  const _0x120ed5 = globalThis;
  class _0x1a3dab {
    constructor(_0x37268b, _0x6bb92f, _0x15cdf4 = "interval") {
      this.callback = _0x37268b;
      this.delay = _0x6bb92f;
      this.mode = _0x15cdf4;
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
      const _0x232130 = this.hooks.get("preStart");
      try {
        for (const _0x412e7b of _0x232130) {
          if (!this.aborted) {
            await _0x412e7b.call(this);
          }
        }
      } catch (_0x462bb0) {
        this.aborted = true;
        console.log("Error while calling pre-start hook", _0x462bb0.message);
      }
      if (this.aborted) {
        try {
          const _0x27b9d3 = this.hooks.get("startAborted");
          for (const _0xf73ceb of _0x27b9d3) {
            await _0xf73ceb.call(this);
          }
        } catch (_0x380b04) {
          console.log("Error while calling start-aborted hook", _0x380b04.message);
        }
        return;
      }
      this.active = true;
      const _0x118783 = this.hooks.get("active");
      switch (this.mode) {
        case "tick":
          {
            this.threadId = _0x120ed5.setTick(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const _0x5ab557 of _0x118783) {
                  await _0x5ab557.call(this);
                }
              } catch (_0x4ea489) {
                console.log("Error while calling active hook", _0x4ea489.message);
              }
              if (this.delay > 0) {
                await new Promise(_0x3fe4f6 => _0x120ed5.setTimeout(_0x3fe4f6, this.delay));
              }
            });
            break;
          }
        case "interval":
          {
            this.threadId = _0x120ed5.setInterval(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const _0x478841 of _0x118783) {
                  await _0x478841.call(this);
                }
              } catch (_0x2fa969) {
                console.log("Error while calling active hook", _0x2fa969.message);
              }
            }, this.delay);
            break;
          }
        case "timeout":
          {
            const _0x494bd7 = () => {
              if (this.active) {
                this.threadId = _0x120ed5.setTimeout(async () => {
                  this.tick += 1;
                  try {
                    await this.callback.call(this);
                    for (const _0x18d7d8 of _0x118783) {
                      await _0x18d7d8.call(this);
                    }
                  } catch (_0x4c9564) {
                    console.log("Error while calling active hook", _0x4c9564.message);
                  }
                  return _0x494bd7();
                }, this.delay);
              }
            };
            _0x494bd7();
            break;
          }
      }
      const _0x300ff2 = this.hooks.get("afterStart");
      try {
        for (const _0x498dca of _0x300ff2) {
          await _0x498dca.call(this);
        }
      } catch (_0x3ddc31) {
        console.log("Error while calling after-start hook", _0x3ddc31.message);
      }
    }
    async stop() {
      if (!this.active) {
        return;
      }
      const _0x341837 = this.hooks.get("preStop");
      try {
        for (const _0x347304 of _0x341837) {
          if (!this.aborted) {
            await _0x347304.call(this);
          }
        }
      } catch (_0x28402b) {
        this.aborted = true;
        console.log("Error while calling pre-stop hook", _0x28402b.message);
      }
      this.active = false;
      switch (this.mode) {
        case "tick":
          {
            _0x120ed5.clearTick(this.threadId);
            break;
          }
        case "interval":
          {
            _0x120ed5.clearInterval(this.threadId);
            break;
          }
        case "timeout":
          {
            _0x120ed5.clearTimeout(this.threadId);
            break;
          }
      }
      if (this.aborted) {
        try {
          const _0x28d8a7 = this.hooks.get("stopAborted");
          for (const _0x51f9f9 of _0x28d8a7) {
            await _0x51f9f9.call(this);
          }
        } catch (_0x23df4d) {
          console.log("Error while calling stop-aborted hook", _0x23df4d.message);
        }
        return;
      }
      const _0x14f261 = this.hooks.get("afterStop");
      try {
        for (const _0x1f4214 of _0x14f261) {
          await _0x1f4214.call(this);
        }
      } catch (_0x1093f6) {
        console.log("Error while calling after-stop hook", _0x1093f6.message);
      }
    }
    abort() {
      this.aborted = true;
    }
    addHook(_0x15df04, _0x2c73b5) {
      var _0x3c8947;
      if ((_0x3c8947 = this.hooks.get(_0x15df04)) === null || _0x3c8947 === undefined) {
        undefined;
      } else {
        _0x3c8947.push(_0x2c73b5);
      }
    }
    setNextTick(_0x129fe9, _0x2fb41e) {
      this.scheduled[_0x129fe9] = this.tick + _0x2fb41e;
    }
    canTick(_0x24f6ea) {
      return this.scheduled[_0x24f6ea] === undefined || this.tick >= this.scheduled[_0x24f6ea];
    }
  }
  ;
  const _0x54a1d1 = new Map();
  const _0x585536 = async (_0x1229f1, _0x16289f) => {
    for (const _0x4ac091 in _0x16289f.sounds) {
      const _0x2c5fe6 = _0x16289f.sounds[_0x4ac091];
      if (_0x2c5fe6 && (_0x16289f.sirenFlags & Number(_0x4ac091)) > 0 && _0x16289f.sounds[_0x4ac091].isPlaying) {
        await globalThis.exports["np-fx"].StopEntitySound(_0x1229f1, _0x16289f.sounds[_0x4ac091].soundId);
        _0x16289f.sounds[_0x4ac091].isPlaying = false;
      }
    }
  };
  const _0x1fed9d = new _0x1a3dab(() => {
    _0x54a1d1.forEach((_0x2e8867, _0x1e84c0) => {
      const _0x597f43 = DoesEntityExist(_0x1e84c0);
      if (!_0x597f43) {
        _0x585536(_0x1e84c0, _0x2e8867);
        _0x54a1d1.delete(_0x1e84c0);
      }
    });
  }, 10000, "interval");
  async function _0x27e408() {
    _0x1fed9d.start();
  }
  const _0xcc29c7 = async (_0x21bef3, _0x892022) => {
    if (!_0x21bef3) {
      return;
    }
    let _0x1774a8 = false;
    const _0x28f330 = async _0x14d3c3 => {
      const _0x4d2699 = _0x892022.sounds[_0x14d3c3];
      const _0x4d6af7 = _0x892022.sirenFlags & _0x14d3c3;
      const _0x46976c = _0x4d2699.isPlaying;
      if (_0x4d6af7 != 0 && !_0x46976c || _0x4d6af7 != 0 && !_0x46976c) {
        _0x4d2699.soundId = await globalThis.exports["np-fx"].PlayEntitySound(_0x21bef3, _0x892022.sirenPresets[_0x226caa[_0x14d3c3]], "", 0, "", true);
        _0x4d2699.isPlaying = true;
      } else if (_0x4d6af7 == 0 && _0x46976c) {
        _0x1774a8 = (_0x14d3c3 & _0x226caa.sirenAirhorn) > 0;
        _0x4d2699.isPlaying = false;
        await globalThis.exports["np-fx"].StopEntitySound(_0x21bef3, _0x4d2699.soundId);
      }
    };
    await _0x28f330(_0x226caa.sirenNormal);
    await _0x28f330(_0x226caa.sirenAltern);
    await _0x28f330(_0x226caa.sirenWarning);
    await _0x28f330(_0x226caa.sirenAirhorn);
    if (!_0x1774a8) {
      const _0x24375d = (_0x892022.sirenFlags & _0x226caa.sirenMuted) > 0;
      SetVehicleHasMutedSirens(_0x21bef3, _0x24375d);
      SetVehicleSiren(_0x21bef3, _0x24375d);
    }
  };
  ;
  let _0x209388 = 0;
  const _0x35b91d = async (_0x31087b, _0x1ad4c2) => {
    let _0x3d8e9d = _0x54a1d1.get(_0x31087b);
    if (!_0x3d8e9d) {
      _0x54a1d1.set(_0x31087b, {
        sirenPresets: _0x428cd2(_0x31087b),
        sirenFlags: _0x1ad4c2,
        sounds: Object.keys(_0x226caa).filter(_0x5a0363 => !isNaN(Number(_0x5a0363)) && (Number(_0x5a0363) | _0x99158e.soundEmitting) == _0x99158e.soundEmitting).reduce((_0x3cdfcc, _0x1a3e29) => {
          const _0x544a27 = {
            isPlaying: false,
            soundId: -1
          };
          _0x3cdfcc[_0x1a3e29] = _0x544a27;
          return _0x3cdfcc;
        }, {})
      });
      _0x3d8e9d = _0x54a1d1.get(_0x31087b);
    } else {
      _0x3d8e9d.sirenFlags = _0x1ad4c2;
    }
    return _0x3d8e9d;
  };
  const _0x3af94c = () => {
    _0xcf05ec(_0x226caa.sirenActive | _0x226caa.sirenNormal);
  };
  const _0x456763 = _0x1d79cb => {
    _0xcf05ec(null, _0x1d79cb);
  };
  const _0x12e76c = () => {
    const _0x3e7f6a = _0x1cb94c();
    if ((_0x3e7f6a & _0x226caa.sirenWarning) == _0x226caa.sirenWarning) {
      _0xcf05ec(_0x226caa.sirenNormal, _0x226caa.sirenWarning);
    } else if ((_0x3e7f6a & _0x226caa.sirenNormal) == _0x226caa.sirenNormal) {
      _0xcf05ec(_0x226caa.sirenAltern, _0x226caa.sirenNormal);
    } else if ((_0x3e7f6a & _0x226caa.sirenAltern) == _0x226caa.sirenAltern) {
      _0xcf05ec(_0x226caa.sirenWarning, _0x226caa.sirenAltern);
    }
  };
  const _0x389022 = () => {
    const _0x532627 = IsVehicleSirenOn(_0x3c7ca7.Entity);
    const _0x27a629 = _0x4fcfb0();
    if (!_0x532627 && !_0x27a629) {
      return;
    }
    if (_0x532627 && !_0x27a629) {
      _0x3af94c();
    } else if (_0x27a629) {
      _0x456763(_0x99158e.sirens);
    }
  };
  const _0xc85376 = () => {
    const _0x22b9ae = IsVehicleSirenOn(_0x3c7ca7.Entity);
    const _0x4bd5cc = _0x4fcfb0();
    if (_0x22b9ae && _0x4bd5cc) {
      return _0x456763(_0x99158e.sirensAndLights);
    }
    if (!_0x22b9ae) {
      _0x2adee6(_0x226caa.sirenMuted, true);
    } else {
      _0x2adee6(_0x226caa.sirenMuted, false);
    }
  };
  const _0x32bd99 = _0x322d0f => {
    _0x2adee6(_0x226caa.sirenAirhorn, _0x322d0f);
  };
  const _0x1cb94c = () => {
    return Entity(_0x3c7ca7.Entity).state.sirenFlags;
  };
  const _0x4fcfb0 = () => {
    return (Entity(_0x3c7ca7.Entity).state.sirenFlags & _0x226caa.sirenActive) > 0;
  };
  const _0x2adee6 = async (_0x261ba4, _0x30cb1e) => {
    let _0x482be5 = Entity(_0x3c7ca7.Entity).state.sirenFlags;
    if (_0x30cb1e) {
      _0x482be5 |= _0x261ba4;
    } else {
      _0x482be5 &= ~_0x261ba4;
    }
    _0x1b2439(_0x482be5);
  };
  const _0xcf05ec = async (_0x1fe647, _0x4cd653) => {
    let _0x4af27b = Entity(_0x3c7ca7.Entity).state.sirenFlags;
    if (_0x1fe647) {
      _0x4af27b |= _0x1fe647;
    }
    if (_0x4cd653) {
      _0x4af27b &= ~_0x4cd653;
    }
    _0x1b2439(_0x4af27b);
  };
  const _0x1b2439 = async _0x1410c4 => {
    const _0x205aa6 = await _0x35b91d(_0x3c7ca7.Entity, _0x1410c4);
    await _0xcc29c7(_0x3c7ca7.Entity, _0x205aa6);
    _0x221682.emitNet("np-vehiclesync-state:setSiren", _0x3c7ca7.Entity, _0x3c7ca7.NetworkId, _0x1410c4);
  };
  const _0x428cd2 = _0x103319 => {
    const _0x17e91d = Entity(_0x103319).state.sirenPreset ?? "standard";
    return _0x14f647.sirenPresets[_0x17e91d];
  };
  const _0x29261b = _0x10021e => {
    PlaySoundFrontend(-1, _0x10021e ? "NAV_LEFT_RIGHT" : "NAV_UP_DOWN", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
  };
  const _0x3b1a76 = _0x315027 => {
    if (_0x315027 && _0x209388 !== 0) {
      clearInterval(_0x209388);
    }
    if (_0x315027) {
      _0x209388 = setTick(() => {
        DisableControlAction(0, 86, true);
        DisableControlAction(0, 81, true);
        DisableControlAction(0, 82, true);
        DisableControlAction(0, 19, true);
        DisableControlAction(0, 85, true);
        DisableControlAction(0, 80, true);
      });
    } else if (!_0x315027) {
      clearTick(_0x209388);
    }
  };
  ;
  const _0x4d93bf = (_0x3a3495, _0x1cb17f) => {
    if (!_0x3a3495) {
      return;
    }
    const _0x8ab26 = GetVehicleClass(_0x3a3495) == _0x48eb42.Emergency;
    const _0x115c00 = _0xb2c44c(_0x58d0b7.neonLights, _0x1cb17f, _0x3a3495);
    const _0x590a85 = _0xb2c44c(_0x58d0b7.rightIndicator, _0x1cb17f, _0x3a3495);
    const _0x379b9b = _0xb2c44c(_0x58d0b7.leftIndicator, _0x1cb17f, _0x3a3495);
    const _0x1ea0c0 = _0xb2c44c(_0x58d0b7.hazardIndicator, _0x1cb17f, _0x3a3495);
    if (!_0x8ab26 && _0xb2c44c(_0x58d0b7.engineSound, _0x1cb17f, _0x3a3495)) {
      _0x3a310d(_0x3a3495);
    }
    DisableVehicleNeonLights(_0x3a3495, !_0x115c00);
    SetVehicleIndicatorLights(_0x3a3495, 0, _0x1ea0c0 || _0x590a85);
    SetVehicleIndicatorLights(_0x3a3495, 1, _0x1ea0c0 || _0x379b9b);
  };
  const _0x3a310d = async (_0x3d28e2, _0x56a7cc) => {
    const _0x568d73 = GetEntityModel(_0x3d28e2);
    if (GetVehicleClass(_0x3d28e2) == _0x48eb42.Emergency) {
      return;
    }
    let _0x35d5eb = _0x8bbb5c(_0x3d28e2, _0x568d73);
    if (_0x56a7cc) {
      ForceVehicleEngineAudio(_0x3d28e2, _0x35d5eb);
      return;
    }
    if (!_0x35d5eb) {
      _0x35d5eb = exports["np-vehicles"].GetVehicleAfterMarket(_0x3d28e2, "engineSound");
    }
    if (!_0x35d5eb) {
      return;
    }
    ForceVehicleEngineAudio(_0x3d28e2, _0x35d5eb);
  };
  _0x2aea5a.g.exports("SetEngineSound", _0x3a310d);
  const _0x577ce8 = (_0x5e6f6d, _0x465827) => {
    if (!_0x5e6f6d) {
      return;
    }
    const _0x2ff6ea = GetEntityModel(_0x5e6f6d);
    const _0x2b8023 = _0x8bbb5c(_0x5e6f6d, _0x2ff6ea);
    const _0x32d2e1 = exports["np-vehicles"].GetVehicleAfterMarket(_0x5e6f6d);
    if (!_0x32d2e1 && !_0x2b8023) {
      return;
    }
    if (_0x32d2e1.engineSound || _0x2b8023) {
      _0x57381e(_0x58d0b7.engineSound, true, _0x5e6f6d, _0x465827);
    }
  };
  const _0x36bfbd = _0x5e455f => {
    for (let _0x1a5319 = 0; _0x1a5319 < 4; _0x1a5319++) {
      if (IsVehicleNeonLightEnabled(_0x5e455f, _0x1a5319)) {
        return true;
      }
    }
    return false;
  };
  const _0x3fbcc0 = _0x35281c => {
    const _0x556add = _0xb2c44c(_0x58d0b7.neonLights, null, _0x35281c);
    _0x57381e(_0x58d0b7.neonLights, !_0x556add, _0x35281c);
    _0x29261b(!_0x556add);
  };
  globalThis.exports("ToggleNeonLights", _0x3fbcc0);
  const _0x20533d = _0x2165fa => {
    switch (_0x2165fa) {
      case _0x131b0e.Hazards:
        _0x57381e(_0x58d0b7.hazardIndicator, !_0xb2c44c(_0x58d0b7.hazardIndicator));
        break;
      case _0x131b0e.Left:
        _0xbdf858(!_0xb2c44c(_0x58d0b7.leftIndicator) ? _0x58d0b7.leftIndicator : 0, (_0xb2c44c(_0x58d0b7.leftIndicator) ? _0x58d0b7.leftIndicator : 0) | _0x58d0b7.rightIndicator | _0x58d0b7.hazardIndicator);
        break;
      case _0x131b0e.Right:
        _0xbdf858(!_0xb2c44c(_0x58d0b7.rightIndicator) ? _0x58d0b7.rightIndicator : 0, (_0xb2c44c(_0x58d0b7.rightIndicator) ? _0x58d0b7.rightIndicator : 0) | _0x58d0b7.leftIndicator | _0x58d0b7.hazardIndicator);
        break;
    }
    _0x29261b(true);
  };
  globalThis.exports("SetLightIndicators", _0x20533d);
  globalThis.exports("IsFlagEnabled", (_0x47ab9c, _0xb5d39e) => {
    if (!_0xb5d39e) {
      return;
    }
    const _0xd760e0 = _0x58d0b7[_0x47ab9c];
    if (!_0xd760e0) {
      return;
    }
    return _0xb2c44c(_0xd760e0, null, _0xb5d39e);
  });
  const _0x33ef4c = _0x4aed23 => {
    return Entity(_0x4aed23 ?? _0x3c7ca7.Entity).state.syncFlags;
  };
  const _0xbdf858 = (_0x2ae5b5, _0x3c3bba) => {
    let _0x4976f3 = Entity(_0x3c7ca7.Entity).state.syncFlags;
    if (_0x2ae5b5) {
      _0x4976f3 |= _0x2ae5b5;
    }
    if (_0x3c3bba) {
      _0x4976f3 &= ~_0x3c3bba;
    }
    _0x4d93bf(_0x3c7ca7.Entity, _0x4976f3);
    _0x221682.emitNet("np-vehiclesync-state:setSync", _0x3c7ca7.Entity, _0x3c7ca7.NetworkId, _0x4976f3);
  };
  const _0x57381e = (_0x2b7d5a, _0x172be8, _0x51337d, _0x4ea7df) => {
    const _0x39423e = _0x51337d ?? _0x3c7ca7.Entity;
    let _0x533d08 = Entity(_0x39423e).state.syncFlags;
    if (_0x172be8) {
      _0x533d08 |= _0x2b7d5a;
    } else {
      _0x533d08 &= ~_0x2b7d5a;
    }
    _0x4d93bf(_0x39423e, _0x533d08);
    _0x221682.emitNet("np-vehiclesync-state:setSync", _0x39423e, _0x4ea7df ?? _0x3c7ca7.NetworkId, _0x533d08);
  };
  const _0xb2c44c = (_0x10e24f, _0x2e2396, _0x5b98b2) => {
    return (Number(_0x2e2396 ?? _0x33ef4c(_0x5b98b2)) & _0x10e24f) == Number(_0x10e24f);
  };
  const _0x3c03eb = async (_0x109baa, _0xcded91) => {
    _0x577ce8(_0x109baa, _0xcded91);
    const _0x2751bd = exports["np-vehicles"].GetVehicleWheelFitment(_0x109baa);
    if (_0x2751bd) {
      _0x221682.emitNet("np-vehiclesync-state:ensureWheelFitmentStateBag", _0xcded91, _0x2751bd);
    }
  };
  const _0x14a0d9 = async (_0x255613, _0x4f19ce) => {
    Citizen.invokeNative("0x1683E7F0", _0x255613, _0x4f19ce[0], _0x4f19ce[1], _0x4f19ce[2]);
  };
  ;
  class _0x53cdcd {
    constructor(_0x39b5c9 = 0, _0x5a08fc = 0, _0x27fdac = 0) {
      this.x = _0x39b5c9;
      this.y = _0x5a08fc;
      this.z = _0x27fdac;
    }
    setFromArray(_0x51844f) {
      this.x = _0x51844f[0];
      this.y = _0x51844f[1];
      this.z = _0x51844f[2];
      return this;
    }
    getArray() {
      return [this.x, this.y, this.z];
    }
    add(_0x29a424) {
      this.x += _0x29a424.x;
      this.y += _0x29a424.y;
      this.z += _0x29a424.z;
      return this;
    }
    addScalar(_0x1f046d) {
      this.x += _0x1f046d;
      this.y += _0x1f046d;
      this.z += _0x1f046d;
      return this;
    }
    sub(_0x4b2c2a) {
      this.x -= _0x4b2c2a.x;
      this.y -= _0x4b2c2a.y;
      this.z -= _0x4b2c2a.z;
      return this;
    }
    equals(_0x23ac63) {
      return this.x === _0x23ac63.x && this.y === _0x23ac63.y && this.z === _0x23ac63.z;
    }
    subScalar(_0x22087d) {
      this.x -= _0x22087d;
      this.y -= _0x22087d;
      this.z -= _0x22087d;
      return this;
    }
    multiply(_0x185b49) {
      this.x *= _0x185b49.x;
      this.y *= _0x185b49.y;
      this.z *= _0x185b49.z;
      return this;
    }
    multiplyScalar(_0x523624) {
      this.x *= _0x523624;
      this.y *= _0x523624;
      this.z *= _0x523624;
      return this;
    }
    round() {
      this.x = Math.round(this.x);
      this.y = Math.round(this.y);
      this.z = Math.round(this.z);
      return this;
    }
    floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      this.z = Math.floor(this.z);
      return this;
    }
    ceil() {
      this.x = Math.ceil(this.x);
      this.y = Math.ceil(this.y);
      this.z = Math.ceil(this.z);
      return this;
    }
    getDistance(_0x1666ef) {
      const [_0x5dda3e, _0x2c9d30, _0x4d41cc] = [this.x - _0x1666ef.x, this.y - _0x1666ef.y, this.z - _0x1666ef.z];
      return Math.sqrt(_0x5dda3e * _0x5dda3e + _0x2c9d30 * _0x2c9d30 + _0x4d41cc * _0x4d41cc);
    }
    getDistanceFromArray(_0x5e5fab) {
      const [_0x85949, _0x3a5acd, _0x439b32] = [this.x - _0x5e5fab[0], this.y - _0x5e5fab[1], this.z - _0x5e5fab[2]];
      return Math.sqrt(_0x85949 * _0x85949 + _0x3a5acd * _0x3a5acd + _0x439b32 * _0x439b32);
    }
    static fromArray(_0xb191b8) {
      return new _0x53cdcd(_0xb191b8[0], _0xb191b8[1], _0xb191b8[2]);
    }
  }
  ;
  const _0x54b0be = new Map();
  const _0x247bc5 = () => {
    setInterval(() => {
      const _0x4253db = PlayerPedId();
      const _0x1eacec = _0x53cdcd.fromArray(GetEntityCoords(_0x4253db, false));
      const _0x302497 = GetGamePool("CVehicle").filter(_0x58d4b9 => {
        if (!IsEntityAVehicle(_0x58d4b9)) {
          return false;
        }
        if (!DoesEntityExist(_0x58d4b9)) {
          return false;
        }
        if (!NetworkGetEntityIsNetworked(_0x58d4b9)) {
          return false;
        }
        const _0x405ea = _0x53cdcd.fromArray(GetEntityCoords(_0x58d4b9, false));
        if (_0x405ea.getDistance(_0x1eacec) > 150) {
          return false;
        }
        return true;
      });
      for (const _0xb3631d of _0x302497) {
        const _0x4f9422 = Entity(_0xb3631d).state;
        const _0x16ba70 = _0x4f9422.wheelFitment || exports["np-vehicles"].GetVehicleWheelFitment(_0xb3631d);
        if (_0x16ba70) {
          _0x54b0be.set(_0xb3631d, _0x16ba70);
        }
      }
    }, 2500);
  };
  const _0x48be02 = () => {
    setTick(() => {
      _0x54b0be.forEach((_0x4470a6, _0x27837e) => {
        if (!DoesEntityExist(_0x27837e) || !IsEntityAVehicle(_0x27837e)) {
          _0x54b0be.delete(_0x27837e);
          return;
        }
        if (_0x4470a6.paused) {
          return;
        }
        _0xa4d7c0(_0x27837e, _0x4470a6);
      });
    });
  };
  async function _0x2482c7() {
    _0x247bc5();
    _0x48be02();
  }
  const _0xa4d7c0 = (_0x249884, _0x40a90b) => {
    if (!_0x249884) {
      return;
    }
    if (_0x40a90b.width !== undefined) {
      SetVehicleWheelWidth(_0x249884, _0x40a90b.width);
    }
    if (_0x40a90b.spacers !== undefined) {
      SetVehicleWheelXOffset(_0x249884, 1, _0x40a90b.spacers[0]);
      SetVehicleWheelXOffset(_0x249884, 0, -_0x40a90b.spacers[0]);
      SetVehicleWheelXOffset(_0x249884, 3, _0x40a90b.spacers[1]);
      SetVehicleWheelXOffset(_0x249884, 2, -_0x40a90b.spacers[1]);
    }
    if (_0x40a90b.camber !== undefined) {
      SetVehicleWheelYRotation(_0x249884, 1, _0x40a90b.camber[0]);
      SetVehicleWheelYRotation(_0x249884, 0, -_0x40a90b.camber[0]);
      SetVehicleWheelYRotation(_0x249884, 3, _0x40a90b.camber[1]);
      SetVehicleWheelYRotation(_0x249884, 2, -_0x40a90b.camber[1]);
    }
    if (_0x40a90b.suspension !== undefined) {
      SetVehicleSuspensionHeight(_0x249884, _0x40a90b.suspension);
    }
  };
  ;
  let _0x1f0398 = GetGameTimer();
  let _0x582920 = false;
  const _0x3c73f0 = 360;
  const _0x43e72d = (_0x5936b1 = true) => {
    if (!_0x3c7ca7) {
      return false;
    }
    if (!_0x3c7ca7.IsDriving) {
      return false;
    }
    if (!_0x3c7ca7.IsDrivingEmergencyVehicle) {
      return false;
    }
    if (_0x5936b1 && GetGameTimer() - _0x1f0398 < _0x3c73f0) {
      return false;
    }
    if (_0x582920) {
      return false;
    }
    _0x1f0398 = GetGameTimer();
    return true;
  };
  async function _0x538297() {
    exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Siren Turn On/Off Lights", "+toggleSirenLights", "-toggleSirenLights", "Q");
    exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Siren Turn On/Off Sound", "+toggleSiren", "-toggleSiren", "LMENU");
    exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Siren Cycle Sound", "+cycleSiren", "-cycleSiren", "R");
    exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Siren AirHorn", "+sirenAirHorn", "-sirenAirHorn", "E");
    exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Toggle Neon Lights", "+toggleNeonLights", "-toggleNeonLights");
    exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Toggle Light Indicator (Right)", "+toggleRightIndicator", "-toggleRightIndicator");
    exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Toggle Light Indicator (Left)", "+toggleLeftIndicator", "-toggleLeftIndicator");
    exports["np-keybinds"].registerKeyMapping("", "Vehicle", "Toggle Light Indicator (Hazard)", "+toggleHazardLights", "-toggleHazardLights");
    RegisterCommand("+sirenAirHorn", () => {
      if (!_0x43e72d()) {
        return;
      }
      _0x582920 = true;
      _0x32bd99(true);
    }, false);
    RegisterCommand("-sirenAirHorn", () => {
      if (_0x582920) {
        _0x1f0398 = GetGameTimer();
        _0x32bd99(false);
        _0x582920 = false;
      }
    }, false);
    RegisterCommand("+toggleSirenLights", () => {}, false);
    RegisterCommand("-toggleSirenLights", () => {
      if (!_0x43e72d()) {
        return;
      }
      _0xc85376();
    }, false);
    RegisterCommand("+toggleSiren", () => {}, false);
    RegisterCommand("-toggleSiren", () => {
      if (!_0x43e72d(false)) {
        return;
      }
      _0x389022();
    }, false);
    RegisterCommand("+cycleSiren", () => {
      if (!_0x43e72d(false)) {
        return;
      }
      if (!_0x4fcfb0()) {
        return;
      }
      _0x12e76c();
    }, false);
    RegisterCommand("-cycleSiren", () => {}, false);
    RegisterCommand("+toggleNeonLights", () => {}, false);
    RegisterCommand("-toggleNeonLights", () => {
      if (!_0x3c7ca7?.IsDriving && !_0x36bfbd(_0x3c7ca7.Entity)) {
        return;
      }
      _0x3fbcc0();
    }, false);
    RegisterCommand("+toggleHazardLights", () => {}, false);
    RegisterCommand("-toggleHazardLights", () => {
      if (!_0x3c7ca7?.IsDriving) {
        return;
      }
      _0x20533d(_0x131b0e.Hazards);
    }, false);
    RegisterCommand("+toggleLeftIndicator", () => {}, false);
    RegisterCommand("-toggleLeftIndicator", () => {
      if (!_0x3c7ca7?.IsDriving) {
        return;
      }
      _0x20533d(_0x131b0e.Left);
    }, false);
    RegisterCommand("+toggleRightIndicator", () => {}, false);
    RegisterCommand("-toggleRightIndicator", () => {
      if (!_0x3c7ca7?.IsDriving) {
        return;
      }
      _0x20533d(_0x131b0e.Right);
    }, false);
  }
  ;
  let _0x3c7ca7 = null;
  var _0x48eb42;
  (function (_0x5b3fd1) {
    _0x5b3fd1[_0x5b3fd1.Emergency = 18] = "Emergency";
  })(_0x48eb42 ||= {});
  const _0x3fe53c = [GetHashKey("squidbicycle")];
  async function _0x12626f() {
    _0x474ddc("sirenFlags", async (_0x5347f9, _0x5d0b01, _0x3208e1) => {
      const _0x5d3c3b = await _0x35b91d(_0x5347f9, _0x5d0b01);
      _0xcc29c7(_0x5347f9, _0x5d3c3b);
    });
    _0x474ddc("xenonColors", (_0x204e93, _0x3dc9b7) => {
      if (!_0x3dc9b7) {
        return;
      }
      _0x14a0d9(_0x204e93, _0x3dc9b7);
    });
    _0x474ddc("wheelFitment", (_0x23eea3, _0x460b16, _0x2e9be1) => {
      _0x54b0be.set(_0x23eea3, _0x460b16);
      const _0x1a7af0 = _0x54b0be.get(_0x23eea3);
      _0xa4d7c0(_0x23eea3, _0x1a7af0);
    });
    _0x474ddc("wheelFitmentPaused", (_0x2cb3af, _0x46c2d7, _0x33fa3b) => {
      const _0x175b3d = _0x54b0be.get(_0x2cb3af);
      if (!_0x175b3d) {
        return;
      }
      _0x175b3d.paused = _0x46c2d7;
      _0x54b0be.set(_0x2cb3af, _0x175b3d);
    });
    _0x474ddc("syncFlags", (_0x3b3595, _0x1092e8, _0x175876) => {
      _0x4d93bf(_0x3b3595, _0x1092e8 ?? 0);
    });
    _0x474ddc("syncInitialized", (_0x150f07, _0x4327a5, _0x19a2cf) => {
      _0x3c03eb(_0x150f07, _0x19a2cf);
    });
  }
  on("baseevents:enteredVehicle", async (_0x220d87, _0x1d154e, _0x3550fe, _0x6b1594) => {
    const [_0x213b97, _0x320c14] = await _0xad03ee(_0x220d87);
    if (!_0x213b97) {
      return;
    }
    const _0x2a5ed5 = Entity(_0x220d87).state;
    if (!_0x2a5ed5.sirenInitialized) {
      _0x221682.emitNet("np-vehiclesync-state:ensureSirenStateBag", _0x320c14);
    }
    await _0x899bfe(_0x220d87, _0x1d154e);
    if (_0x43e72d()) {
      _0x3b1a76(true);
    }
  });
  on("baseevents:enteringVehicle", async (_0xc00624, _0x40dc61, _0xa17f88) => {
    if (_0x40dc61 != -1 && _0xa17f88 != _0x48eb42.Emergency) {
      return;
    }
    const [_0x6efcf4, _0xa1e6ac] = await _0xad03ee(_0xc00624);
    if (!_0x6efcf4) {
      return;
    }
    const _0x4de1f9 = Entity(_0xc00624).state;
    if (_0x4de1f9?.sirenInitialized) {
      const _0x4ae731 = _0x54a1d1.get(_0xa1e6ac);
      if (_0x4ae731) {
        const _0x320e10 = _0x4ae731.sirenFlags;
        SetVehicleSiren(_0xc00624, (_0x320e10 & _0x226caa.sirenMuted) > 0);
        SetVehicleHasMutedSirens(_0xc00624, (_0x320e10 & _0x226caa.sirenMuted) > 0);
        await _0x899bfe(_0xc00624, _0x40dc61);
      }
    }
  });
  on("baseevents:leftVehicle", _0x56ce78 => {
    _0x3c7ca7 = null;
    _0x3b1a76(false);
  });
  on("baseevents:leavingVehicle", _0x2fbbdf => {
    _0x3c7ca7 = null;
    _0x3b1a76(false);
  });
  on("baseevents:vehicleChangedSeat", async (_0x116695, _0x2835de) => {
    await _0x899bfe(_0x116695, _0x2835de);
    _0x3b1a76(_0x43e72d());
  });
  on("baseevents:vehicleHotreload", async (_0x49a1f9, _0x520b21) => {
    await _0x7c71dd(200);
    if (!_0x49a1f9 || !DoesEntityExist(_0x49a1f9)) {
      return;
    }
    await _0x899bfe(_0x49a1f9, _0x520b21);
    _0x3b1a76(_0x43e72d());
  });
  on("np-vehicles:spawnedVehicle", async _0x3160d1 => {
    if (!_0x3160d1) {
      return;
    }
    const [_0x1708a2, _0x26379c] = await _0xad03ee(_0x3160d1);
    if (!_0x1708a2) {
      return;
    }
    const _0x22bd47 = Entity(_0x3160d1).state;
    if (!_0x22bd47?.syncInitialized) {
      _0x221682.emitNet("np-vehiclesync-state:ensureSyncStateBag", _0x26379c);
    }
  });
  on("np-vehicles:customXenonColorApplied", async (_0x39bfcf, _0x187127) => {
    if (!_0x39bfcf) {
      return;
    }
    const [_0x5652a4, _0x2b9995] = await _0xad03ee(_0x39bfcf);
    if (!_0x5652a4) {
      return;
    }
    const _0x450bfa = Entity(_0x39bfcf).state;
    if (!_0x450bfa?.xenonInitialized) {
      _0x221682.emitNet("np-vehiclesync-state:ensureXenonStateBag", _0x2b9995, _0x187127);
    } else {
      _0x221682.emitNet("np-vehiclesync-state:setXenon", _0x2b9995, _0x187127);
    }
  });
  on("np-vehicles:wheelfitmentApplied", async (_0x23ea06, _0x39394e) => {
    if (!_0x23ea06) {
      return;
    }
    const [_0x114b55, _0x2d3c98] = await _0xad03ee(_0x23ea06);
    if (!_0x114b55) {
      return;
    }
    const _0x9bda4b = Entity(_0x23ea06).state;
    if (!_0x9bda4b?.wheelFitmentInitialized) {
      _0x221682.emitNet("np-vehiclesync-state:ensureWheelFitmentStateBag", _0x2d3c98, _0x39394e);
      return;
    }
    _0x221682.emitNet("np-vehiclesync-state:setWheelFitment", _0x2d3c98, _0x39394e);
  });
  _0x221682.on("np-vehiclesync-state:pauseWheelFitmentSync", async (_0xa771e3, _0x3136bf) => {
    if (!_0xa771e3) {
      return;
    }
    const [_0x248ccc, _0x2e4664] = await _0xad03ee(_0xa771e3);
    if (!_0x248ccc) {
      return;
    }
    const _0x1beeb3 = Entity(_0xa771e3).state;
    if (!_0x1beeb3?.wheelFitmentInitialized) {
      return;
    }
    _0x221682.emitNet("np-vehiclesync-state:pauseWheelFitment", _0x2e4664, _0x3136bf);
  });
  onNet("np-vehicles:updateAfterMarkets", async _0xd9a489 => {
    const [_0x377076, _0x5e3769] = await _0x28c8ec(_0xd9a489);
    if (!_0x377076) {
      return;
    }
    ForceVehicleEngineAudio(_0x5e3769, "");
    if (!_0x5e3769) {
      return;
    }
    _0x577ce8(_0x5e3769, _0xd9a489);
  });
  const _0x899bfe = async (_0xfc8986, _0x8b614) => {
    const [_0x215424, _0x539772] = await _0xad03ee(_0xfc8986);
    if (!_0x215424) {
      return;
    }
    _0x3c7ca7 = {
      Entity: _0xfc8986,
      NetworkId: _0x539772,
      Seat: _0x8b614,
      IsDriving: _0x8b614 == -1,
      IsDrivingEmergencyVehicle: GetVehicleClass(_0xfc8986) == _0x48eb42.Emergency || _0x3fe53c.includes(GetEntityModel(_0xfc8986))
    };
    if (_0x3c7ca7 == null || !_0x3c7ca7.IsDriving || !_0x3c7ca7.IsDrivingEmergencyVehicle) {
      return;
    }
  };
  RegisterCommand("vehicleDebug", () => {
    const _0x3a1bf1 = GetVehiclePedIsIn(PlayerPedId(), false);
    const _0x47c403 = _0x54a1d1.get(_0x3a1bf1);
    console.log(_0x47c403);
  }, false);
  RegisterCommand("vehicles:debug:releaseSounds", async () => {
    for (let _0x4b6f03 = 0; _0x4b6f03 <= 100; _0x4b6f03++) {
      StopSound(_0x4b6f03);
      ReleaseSoundId(_0x4b6f03);
      await _0x7c71dd(1);
    }
  }, false);
  ;
  async function _0x3d4ccb() {
    setInterval(() => {
      DistantCopCarSirens(false);
    }, 100);
  }
  ;
  async function _0x45df79() {
    await _0x315658();
    await _0x12626f();
    await _0x27e408();
    await _0x538297();
    await _0x3d4ccb();
    await _0x2482c7();
  }
  ;
  (async () => {
    await _0x45df79();
  })();
})();
