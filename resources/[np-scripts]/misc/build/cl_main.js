(() => {
  var _0x3f6bd4 = {
    739: function(_0x57e7ca, _0x1086e0, _0x209e60) {
      var _0x4f2704;
      (function(_0x359f04, _0x332e20, _0x2256ae) {
        if (true) {
          _0x4f2704 = function() {
            return _0x2256ae(_0x359f04);
          }.call(_0x1086e0, _0x209e60, _0x1086e0, _0x57e7ca);
          if (_0x4f2704 !== void 0) {
            _0x57e7ca.exports = _0x4f2704;
          }
        } else {
        }
      })(this, "UUID", function() {
        function _0x5bc8c(_0x5b5589, _0x3f9ac5, _0x35e197, _0x10ec71, _0x349ce3, _0x33773d) {
          function _0x3e1d16(_0xbc3f9c, _0x17c822) {
            var _0x2472e8 = _0xbc3f9c.toString(16);
            if (_0x2472e8.length < 2) {
              _0x2472e8 = "0" + _0x2472e8;
            }
            if (_0x17c822) {
              _0x2472e8 = _0x2472e8.toUpperCase();
            }
            return _0x2472e8;
          }
          for (var _0x283d19 = _0x3f9ac5; _0x283d19 <= _0x35e197; _0x283d19++) {
            _0x349ce3[_0x33773d++] = _0x3e1d16(_0x5b5589[_0x283d19], _0x10ec71);
          }
          return _0x349ce3;
        }
        function _0x4e1dc3(_0x3effe6, _0x469675, _0x42c10c, _0x29269d, _0x211e8d) {
          for (var _0x1a37a8 = _0x469675; _0x1a37a8 <= _0x42c10c; _0x1a37a8 += 2) {
            _0x29269d[_0x211e8d++] = parseInt(_0x3effe6.substr(_0x1a37a8, 2), 16);
          }
        }
        var _0x5d38d4 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("");
        var _0x16f90e = [0, 68, 0, 84, 83, 82, 72, 0, 75, 76, 70, 65, 0, 63, 62, 69, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 64, 0, 73, 66, 74, 71, 81, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 77, 0, 78, 67, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 79, 0, 80, 0, 0];
        function _0x2ba0a9(_0x52bab3, _0x2b7500) {
          if (_0x2b7500 % 4 !== 0) {
            throw new Error("z85_encode: invalid input length (multiple of 4 expected)");
          }
          var _0x46c503 = "";
          var _0x42297b = 0;
          var _0x43a244 = 0;
          while (_0x42297b < _0x2b7500) {
            _0x43a244 = _0x43a244 * 256 + _0x52bab3[_0x42297b++];
            if (_0x42297b % 4 === 0) {
              var _0x463413 = 52200625;
              while (_0x463413 >= 1) {
                var _0x50cb04 = Math.floor(_0x43a244 / _0x463413) % 85;
                _0x46c503 += _0x5d38d4[_0x50cb04];
                _0x463413 /= 85;
              }
              _0x43a244 = 0;
            }
          }
          return _0x46c503;
        }
        function _0x3be574(_0x1abc31, _0x424853) {
          var _0x45c292 = _0x1abc31.length;
          if (_0x45c292 % 5 !== 0) {
            throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
          }
          if (typeof _0x424853 === "undefined") {
            _0x424853 = new Array(_0x45c292 * 4 / 5);
          }
          var _0x18bb0c = 0;
          var _0x2fa6e6 = 0;
          var _0x1da769 = 0;
          while (_0x18bb0c < _0x45c292) {
            var _0x5d598b = _0x1abc31.charCodeAt(_0x18bb0c++) - 32;
            if (_0x5d598b < 0 || _0x5d598b >= _0x16f90e.length) {
              break;
            }
            _0x1da769 = _0x1da769 * 85 + _0x16f90e[_0x5d598b];
            if (_0x18bb0c % 5 === 0) {
              var _0x8ae219 = 16777216;
              while (_0x8ae219 >= 1) {
                _0x424853[_0x2fa6e6++] = Math.trunc(_0x1da769 / _0x8ae219 % 256);
                _0x8ae219 /= 256;
              }
              _0x1da769 = 0;
            }
          }
          return _0x424853;
        }
        function _0x472a44(_0x55d05e, _0x17d923) {
          var _0x4cb7ed = {
            ibits: 8,
            obits: 8,
            obigendian: true
          };
          for (var _0x4fdef9 in _0x17d923) {
            if (typeof _0x4cb7ed[_0x4fdef9] !== "undefined") {
              _0x4cb7ed[_0x4fdef9] = _0x17d923[_0x4fdef9];
            }
          }
          var _0x42c497 = [];
          var _0xbad6df = 0;
          var _0xc5df16;
          var _0xf3951e;
          var _0x5b743d = 0;
          var _0x278380;
          var _0x51adde = 0;
          var _0xb9642d = _0x55d05e.length;
          while (true) {
            if (_0x5b743d === 0) {
              _0xf3951e = _0x55d05e.charCodeAt(_0xbad6df++);
            }
            _0xc5df16 = _0xf3951e >> _0x4cb7ed.ibits - (_0x5b743d + 8) & 255;
            _0x5b743d = (_0x5b743d + 8) % _0x4cb7ed.ibits;
            if (_0x4cb7ed.obigendian) {
              if (_0x51adde === 0) {
                _0x278380 = _0xc5df16 << _0x4cb7ed.obits - 8;
              } else {
                _0x278380 |= _0xc5df16 << _0x4cb7ed.obits - 8 - _0x51adde;
              }
            } else if (_0x51adde === 0) {
              _0x278380 = _0xc5df16;
            } else {
              _0x278380 |= _0xc5df16 << _0x51adde;
            }
            _0x51adde = (_0x51adde + 8) % _0x4cb7ed.obits;
            if (_0x51adde === 0) {
              _0x42c497.push(_0x278380);
              if (_0xbad6df >= _0xb9642d) {
                break;
              }
            }
          }
          return _0x42c497;
        }
        function _0x3616cd(_0x18d1a7, _0x16f9c1) {
          var _0x1fdf65 = {
            ibits: 32,
            ibigendian: true
          };
          for (var _0xb0476f in _0x16f9c1) {
            if (typeof _0x1fdf65[_0xb0476f] !== "undefined") {
              _0x1fdf65[_0xb0476f] = _0x16f9c1[_0xb0476f];
            }
          }
          var _0x492bb1 = "";
          var _0x2034c1 = 4294967295;
          if (_0x1fdf65.ibits < 32) {
            _0x2034c1 = (1 << _0x1fdf65.ibits) - 1;
          }
          var _0x3a81d4 = _0x18d1a7.length;
          for (var _0x5e21c2 = 0; _0x5e21c2 < _0x3a81d4; _0x5e21c2++) {
            var _0x10af2a = _0x18d1a7[_0x5e21c2] & _0x2034c1;
            for (var _0x1ab222 = 0; _0x1ab222 < _0x1fdf65.ibits; _0x1ab222 += 8) {
              if (_0x1fdf65.ibigendian) {
                _0x492bb1 += String.fromCharCode(_0x10af2a >> _0x1fdf65.ibits - 8 - _0x1ab222 & 255);
              } else {
                _0x492bb1 += String.fromCharCode(_0x10af2a >> _0x1ab222 & 255);
              }
            }
          }
          return _0x492bb1;
        }
        var _0x4b8812 = 8;
        var _0x3871f6 = 8;
        var _0x25fd01 = 256;
        function _0x3f1049(_0x34f9ad, _0x30fb8e, _0x10bcb5, _0x1f994d, _0x461d7b, _0x5b089e, _0x2dfec7, _0xef59ff) {
          return [_0xef59ff, _0x2dfec7, _0x5b089e, _0x461d7b, _0x1f994d, _0x10bcb5, _0x30fb8e, _0x34f9ad];
        }
        function _0x9fbb1c() {
          return _0x3f1049(0, 0, 0, 0, 0, 0, 0, 0);
        }
        function _0x1cc613(_0x289360) {
          return _0x289360.slice(0);
        }
        function _0x57ac11(_0xa77b20) {
          var _0x549e87 = _0x9fbb1c();
          for (var _0x54b72f = 0; _0x54b72f < _0x4b8812; _0x54b72f++) {
            _0x549e87[_0x54b72f] = Math.floor(_0xa77b20 % _0x25fd01);
            _0xa77b20 /= _0x25fd01;
          }
          return _0x549e87;
        }
        function _0x291112(_0x5acea2) {
          var _0x35d260 = 0;
          for (var _0x49e24b = _0x4b8812 - 1; _0x49e24b >= 0; _0x49e24b--) {
            _0x35d260 *= _0x25fd01;
            _0x35d260 += _0x5acea2[_0x49e24b];
          }
          return Math.floor(_0x35d260);
        }
        function _0x22da1e(_0x5a6d34, _0xe9bdbf) {
          var _0x5bb6fc = 0;
          for (var _0x139bbb = 0; _0x139bbb < _0x4b8812; _0x139bbb++) {
            _0x5bb6fc += _0x5a6d34[_0x139bbb] + _0xe9bdbf[_0x139bbb];
            _0x5a6d34[_0x139bbb] = Math.floor(_0x5bb6fc % _0x25fd01);
            _0x5bb6fc = Math.floor(_0x5bb6fc / _0x25fd01);
          }
          return _0x5bb6fc;
        }
        function _0x5bf401(_0x2e04bd, _0x565b3c) {
          var _0x9583c3 = 0;
          for (var _0x2ca3dc = 0; _0x2ca3dc < _0x4b8812; _0x2ca3dc++) {
            _0x9583c3 += _0x2e04bd[_0x2ca3dc] * _0x565b3c;
            _0x2e04bd[_0x2ca3dc] = Math.floor(_0x9583c3 % _0x25fd01);
            _0x9583c3 = Math.floor(_0x9583c3 / _0x25fd01);
          }
          return _0x9583c3;
        }
        function _0x1dce27(_0x3293fe, _0x56fb57) {
          var _0x574a6f;
          var _0x2e2694;
          var _0x3541fd = new Array(_0x4b8812 + _0x4b8812);
          for (_0x574a6f = 0; _0x574a6f < _0x4b8812 + _0x4b8812; _0x574a6f++) {
            _0x3541fd[_0x574a6f] = 0;
          }
          var _0x535eea;
          for (_0x574a6f = 0; _0x574a6f < _0x4b8812; _0x574a6f++) {
            _0x535eea = 0;
            for (_0x2e2694 = 0; _0x2e2694 < _0x4b8812; _0x2e2694++) {
              _0x535eea += _0x3293fe[_0x574a6f] * _0x56fb57[_0x2e2694] + _0x3541fd[_0x574a6f + _0x2e2694];
              _0x3541fd[_0x574a6f + _0x2e2694] = _0x535eea % _0x25fd01;
              _0x535eea /= _0x25fd01;
            }
            for (; _0x2e2694 < _0x4b8812 + _0x4b8812 - _0x574a6f; _0x2e2694++) {
              _0x535eea += _0x3541fd[_0x574a6f + _0x2e2694];
              _0x3541fd[_0x574a6f + _0x2e2694] = _0x535eea % _0x25fd01;
              _0x535eea /= _0x25fd01;
            }
          }
          for (_0x574a6f = 0; _0x574a6f < _0x4b8812; _0x574a6f++) {
            _0x3293fe[_0x574a6f] = _0x3541fd[_0x574a6f];
          }
          return _0x3541fd.slice(_0x4b8812, _0x4b8812);
        }
        function _0x3800de(_0x1a20d4, _0x10aa9e) {
          for (var _0xdd9e8 = 0; _0xdd9e8 < _0x4b8812; _0xdd9e8++) {
            _0x1a20d4[_0xdd9e8] &= _0x10aa9e[_0xdd9e8];
          }
          return _0x1a20d4;
        }
        function _0x49cab4(_0x293064, _0xaa8d74) {
          for (var _0x43f1ac = 0; _0x43f1ac < _0x4b8812; _0x43f1ac++) {
            _0x293064[_0x43f1ac] |= _0xaa8d74[_0x43f1ac];
          }
          return _0x293064;
        }
        function _0x3da60b(_0x501777, _0x4f175d) {
          var _0x4a435e = _0x9fbb1c();
          if (_0x4f175d % _0x3871f6 !== 0) {
            throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
          }
          var _0x4d358d = Math.floor(_0x4f175d / _0x3871f6);
          for (var _0x1d2b90 = 0; _0x1d2b90 < _0x4d358d; _0x1d2b90++) {
            for (var _0x424f7b = _0x4b8812 - 1 - 1; _0x424f7b >= 0; _0x424f7b--) {
              _0x4a435e[_0x424f7b + 1] = _0x4a435e[_0x424f7b];
            }
            _0x4a435e[0] = _0x501777[0];
            for (_0x424f7b = 0; _0x424f7b < _0x4b8812 - 1; _0x424f7b++) {
              _0x501777[_0x424f7b] = _0x501777[_0x424f7b + 1];
            }
            _0x501777[_0x424f7b] = 0;
          }
          return _0x291112(_0x4a435e);
        }
        function _0x2735ea(_0x184e17, _0x52bb65) {
          if (_0x52bb65 > _0x4b8812 * _0x3871f6) {
            throw new Error("ui64_ror: invalid number of bits to shift");
          }
          var _0x19f509 = new Array(_0x4b8812 + _0x4b8812);
          var _0x1343ae;
          for (_0x1343ae = 0; _0x1343ae < _0x4b8812; _0x1343ae++) {
            _0x19f509[_0x1343ae + _0x4b8812] = _0x184e17[_0x1343ae];
            _0x19f509[_0x1343ae] = 0;
          }
          var _0x7b8473 = Math.floor(_0x52bb65 / _0x3871f6);
          var _0x2621cf = _0x52bb65 % _0x3871f6;
          for (_0x1343ae = _0x7b8473; _0x1343ae < _0x4b8812 + _0x4b8812 - 1; _0x1343ae++) {
            _0x19f509[_0x1343ae - _0x7b8473] = (_0x19f509[_0x1343ae] >>> _0x2621cf | _0x19f509[_0x1343ae + 1] << _0x3871f6 - _0x2621cf) & (1 << _0x3871f6) - 1;
          }
          _0x19f509[_0x4b8812 + _0x4b8812 - 1 - _0x7b8473] = _0x19f509[_0x4b8812 + _0x4b8812 - 1] >>> _0x2621cf & (1 << _0x3871f6) - 1;
          for (_0x1343ae = _0x4b8812 + _0x4b8812 - 1 - _0x7b8473 + 1; _0x1343ae < _0x4b8812 + _0x4b8812; _0x1343ae++) {
            _0x19f509[_0x1343ae] = 0;
          }
          for (_0x1343ae = 0; _0x1343ae < _0x4b8812; _0x1343ae++) {
            _0x184e17[_0x1343ae] = _0x19f509[_0x1343ae + _0x4b8812];
          }
          return _0x19f509.slice(0, _0x4b8812);
        }
        function _0xdd5776(_0x2d76f7, _0x132d62) {
          if (_0x132d62 > _0x4b8812 * _0x3871f6) {
            throw new Error("ui64_rol: invalid number of bits to shift");
          }
          var _0x3c1759 = new Array(_0x4b8812 + _0x4b8812);
          var _0x5e271b;
          for (_0x5e271b = 0; _0x5e271b < _0x4b8812; _0x5e271b++) {
            _0x3c1759[_0x5e271b + _0x4b8812] = 0;
            _0x3c1759[_0x5e271b] = _0x2d76f7[_0x5e271b];
          }
          var _0xf807a8 = Math.floor(_0x132d62 / _0x3871f6);
          var _0x25f7f7 = _0x132d62 % _0x3871f6;
          for (_0x5e271b = _0x4b8812 - 1 - _0xf807a8; _0x5e271b > 0; _0x5e271b--) {
            _0x3c1759[_0x5e271b + _0xf807a8] = (_0x3c1759[_0x5e271b] << _0x25f7f7 | _0x3c1759[_0x5e271b - 1] >>> _0x3871f6 - _0x25f7f7) & (1 << _0x3871f6) - 1;
          }
          _0x3c1759[0 + _0xf807a8] = _0x3c1759[0] << _0x25f7f7 & (1 << _0x3871f6) - 1;
          for (_0x5e271b = 0 + _0xf807a8 - 1; _0x5e271b >= 0; _0x5e271b--) {
            _0x3c1759[_0x5e271b] = 0;
          }
          for (_0x5e271b = 0; _0x5e271b < _0x4b8812; _0x5e271b++) {
            _0x2d76f7[_0x5e271b] = _0x3c1759[_0x5e271b];
          }
          return _0x3c1759.slice(_0x4b8812, _0x4b8812);
        }
        function _0x79692c(_0x43c469, _0x430c21) {
          for (var _0x4c59f5 = 0; _0x4c59f5 < _0x4b8812; _0x4c59f5++) {
            _0x43c469[_0x4c59f5] ^= _0x430c21[_0x4c59f5];
          }
        }
        function _0x2f5573(_0x17b8fc, _0x470190) {
          var _0x3daa46 = (_0x17b8fc & 65535) + (_0x470190 & 65535);
          var _0x5b6dad = (_0x17b8fc >> 16) + (_0x470190 >> 16) + (_0x3daa46 >> 16);
          return _0x5b6dad << 16 | _0x3daa46 & 65535;
        }
        function _0x3037a6(_0xeb4e00, _0xdbaa3) {
          return _0xeb4e00 << _0xdbaa3 & -1 | _0xeb4e00 >>> 32 - _0xdbaa3 & -1;
        }
        function _0x4a49af(_0x570f0d, _0x477a2d) {
          function _0x2bf8ea(_0x134d52, _0x10dfd4, _0x3988f7, _0x5a89c3) {
            if (_0x134d52 < 20) {
              return _0x10dfd4 & _0x3988f7 | ~_0x10dfd4 & _0x5a89c3;
            }
            if (_0x134d52 < 40) {
              return _0x10dfd4 ^ _0x3988f7 ^ _0x5a89c3;
            }
            if (_0x134d52 < 60) {
              return _0x10dfd4 & _0x3988f7 | _0x10dfd4 & _0x5a89c3 | _0x3988f7 & _0x5a89c3;
            }
            return _0x10dfd4 ^ _0x3988f7 ^ _0x5a89c3;
          }
          function _0x2e6546(_0x45ce33) {
            if (_0x45ce33 < 20) {
              return 1518500249;
            } else if (_0x45ce33 < 40) {
              return 1859775393;
            } else if (_0x45ce33 < 60) {
              return -1894007588;
            } else {
              return -899497514;
            }
          }
          _0x570f0d[_0x477a2d >> 5] |= 128 << 24 - _0x477a2d % 32;
          _0x570f0d[(_0x477a2d + 64 >> 9 << 4) + 15] = _0x477a2d;
          var _0x4fbeb3 = Array(80);
          var _0x1d9b07 = 1732584193;
          var _0x4a55d0 = -271733879;
          var _0x2a9ed2 = -1732584194;
          var _0x134ae9 = 271733878;
          var _0x4d6116 = -1009589776;
          for (var _0x36ab74 = 0; _0x36ab74 < _0x570f0d.length; _0x36ab74 += 16) {
            var _0x16dece = _0x1d9b07;
            var _0x737f1f = _0x4a55d0;
            var _0x4efcf7 = _0x2a9ed2;
            var _0x8543ef = _0x134ae9;
            var _0x55bb1d = _0x4d6116;
            for (var _0x379166 = 0; _0x379166 < 80; _0x379166++) {
              if (_0x379166 < 16) {
                _0x4fbeb3[_0x379166] = _0x570f0d[_0x36ab74 + _0x379166];
              } else {
                _0x4fbeb3[_0x379166] = _0x3037a6(_0x4fbeb3[_0x379166 - 3] ^ _0x4fbeb3[_0x379166 - 8] ^ _0x4fbeb3[_0x379166 - 14] ^ _0x4fbeb3[_0x379166 - 16], 1);
              }
              var _0x1acabf = _0x2f5573(_0x2f5573(_0x3037a6(_0x1d9b07, 5), _0x2bf8ea(_0x379166, _0x4a55d0, _0x2a9ed2, _0x134ae9)), _0x2f5573(_0x2f5573(_0x4d6116, _0x4fbeb3[_0x379166]), _0x2e6546(_0x379166)));
              _0x4d6116 = _0x134ae9;
              _0x134ae9 = _0x2a9ed2;
              _0x2a9ed2 = _0x3037a6(_0x4a55d0, 30);
              _0x4a55d0 = _0x1d9b07;
              _0x1d9b07 = _0x1acabf;
            }
            _0x1d9b07 = _0x2f5573(_0x1d9b07, _0x16dece);
            _0x4a55d0 = _0x2f5573(_0x4a55d0, _0x737f1f);
            _0x2a9ed2 = _0x2f5573(_0x2a9ed2, _0x4efcf7);
            _0x134ae9 = _0x2f5573(_0x134ae9, _0x8543ef);
            _0x4d6116 = _0x2f5573(_0x4d6116, _0x55bb1d);
          }
          return [_0x1d9b07, _0x4a55d0, _0x2a9ed2, _0x134ae9, _0x4d6116];
        }
        function _0x1bfccc(_0x1bd2ff) {
          return _0x3616cd(_0x4a49af(_0x472a44(_0x1bd2ff, {
            ibits: 8,
            obits: 32,
            obigendian: true
          }), _0x1bd2ff.length * 8), {
            ibits: 32,
            ibigendian: true
          });
        }
        function _0x9ed37(_0x196095, _0x33dcea) {
          function _0x5a58bc(_0x532caf, _0x8bba1f, _0x22c341, _0x41ac93, _0x52d475, _0x4b3446) {
            return _0x2f5573(_0x3037a6(_0x2f5573(_0x2f5573(_0x8bba1f, _0x532caf), _0x2f5573(_0x41ac93, _0x4b3446)), _0x52d475), _0x22c341);
          }
          function _0x509897(_0x2f714d, _0x50b013, _0xa934ed, _0x2193c6, _0x2e551, _0xa63a95, _0x2c8010) {
            return _0x5a58bc(_0x50b013 & _0xa934ed | ~_0x50b013 & _0x2193c6, _0x2f714d, _0x50b013, _0x2e551, _0xa63a95, _0x2c8010);
          }
          function _0x1e9f1e(_0x5614a8, _0x1183e7, _0x139a42, _0x1b8999, _0x37bcb2, _0x4f45f3, _0x2cd791) {
            return _0x5a58bc(_0x1183e7 & _0x1b8999 | _0x139a42 & ~_0x1b8999, _0x5614a8, _0x1183e7, _0x37bcb2, _0x4f45f3, _0x2cd791);
          }
          function _0x2e0789(_0x5ca977, _0x4bbd6b, _0x5a6a59, _0x57c566, _0x3cdc1c, _0x2ea622, _0x2fce67) {
            return _0x5a58bc(_0x4bbd6b ^ _0x5a6a59 ^ _0x57c566, _0x5ca977, _0x4bbd6b, _0x3cdc1c, _0x2ea622, _0x2fce67);
          }
          function _0x24bf63(_0x5e2884, _0xedc8ff, _0x368057, _0x53b5aa, _0x8a86d5, _0x4c057f, _0x51bfde) {
            return _0x5a58bc(_0x368057 ^ (_0xedc8ff | ~_0x53b5aa), _0x5e2884, _0xedc8ff, _0x8a86d5, _0x4c057f, _0x51bfde);
          }
          _0x196095[_0x33dcea >> 5] |= 128 << _0x33dcea % 32;
          _0x196095[(_0x33dcea + 64 >>> 9 << 4) + 14] = _0x33dcea;
          var _0x418998 = 1732584193;
          var _0x1da113 = -271733879;
          var _0x2c3b45 = -1732584194;
          var _0x3f6fdd = 271733878;
          for (var _0x4530df = 0; _0x4530df < _0x196095.length; _0x4530df += 16) {
            var _0x55855b = _0x418998;
            var _0x166b44 = _0x1da113;
            var _0x2ffc9c = _0x2c3b45;
            var _0x500e72 = _0x3f6fdd;
            _0x418998 = _0x509897(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 0], 7, -680876936);
            _0x3f6fdd = _0x509897(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 1], 12, -389564586);
            _0x2c3b45 = _0x509897(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 2], 17, 606105819);
            _0x1da113 = _0x509897(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 3], 22, -1044525330);
            _0x418998 = _0x509897(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 4], 7, -176418897);
            _0x3f6fdd = _0x509897(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 5], 12, 1200080426);
            _0x2c3b45 = _0x509897(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 6], 17, -1473231341);
            _0x1da113 = _0x509897(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 7], 22, -45705983);
            _0x418998 = _0x509897(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 8], 7, 1770035416);
            _0x3f6fdd = _0x509897(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 9], 12, -1958414417);
            _0x2c3b45 = _0x509897(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 10], 17, -42063);
            _0x1da113 = _0x509897(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 11], 22, -1990404162);
            _0x418998 = _0x509897(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 12], 7, 1804603682);
            _0x3f6fdd = _0x509897(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 13], 12, -40341101);
            _0x2c3b45 = _0x509897(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 14], 17, -1502002290);
            _0x1da113 = _0x509897(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 15], 22, 1236535329);
            _0x418998 = _0x1e9f1e(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 1], 5, -165796510);
            _0x3f6fdd = _0x1e9f1e(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 6], 9, -1069501632);
            _0x2c3b45 = _0x1e9f1e(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 11], 14, 643717713);
            _0x1da113 = _0x1e9f1e(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 0], 20, -373897302);
            _0x418998 = _0x1e9f1e(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 5], 5, -701558691);
            _0x3f6fdd = _0x1e9f1e(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 10], 9, 38016083);
            _0x2c3b45 = _0x1e9f1e(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 15], 14, -660478335);
            _0x1da113 = _0x1e9f1e(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 4], 20, -405537848);
            _0x418998 = _0x1e9f1e(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 9], 5, 568446438);
            _0x3f6fdd = _0x1e9f1e(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 14], 9, -1019803690);
            _0x2c3b45 = _0x1e9f1e(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 3], 14, -187363961);
            _0x1da113 = _0x1e9f1e(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 8], 20, 1163531501);
            _0x418998 = _0x1e9f1e(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 13], 5, -1444681467);
            _0x3f6fdd = _0x1e9f1e(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 2], 9, -51403784);
            _0x2c3b45 = _0x1e9f1e(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 7], 14, 1735328473);
            _0x1da113 = _0x1e9f1e(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 12], 20, -1926607734);
            _0x418998 = _0x2e0789(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 5], 4, -378558);
            _0x3f6fdd = _0x2e0789(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 8], 11, -2022574463);
            _0x2c3b45 = _0x2e0789(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 11], 16, 1839030562);
            _0x1da113 = _0x2e0789(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 14], 23, -35309556);
            _0x418998 = _0x2e0789(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 1], 4, -1530992060);
            _0x3f6fdd = _0x2e0789(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 4], 11, 1272893353);
            _0x2c3b45 = _0x2e0789(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 7], 16, -155497632);
            _0x1da113 = _0x2e0789(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 10], 23, -1094730640);
            _0x418998 = _0x2e0789(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 13], 4, 681279174);
            _0x3f6fdd = _0x2e0789(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 0], 11, -358537222);
            _0x2c3b45 = _0x2e0789(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 3], 16, -722521979);
            _0x1da113 = _0x2e0789(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 6], 23, 76029189);
            _0x418998 = _0x2e0789(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 9], 4, -640364487);
            _0x3f6fdd = _0x2e0789(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 12], 11, -421815835);
            _0x2c3b45 = _0x2e0789(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 15], 16, 530742520);
            _0x1da113 = _0x2e0789(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 2], 23, -995338651);
            _0x418998 = _0x24bf63(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 0], 6, -198630844);
            _0x3f6fdd = _0x24bf63(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 7], 10, 1126891415);
            _0x2c3b45 = _0x24bf63(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 14], 15, -1416354905);
            _0x1da113 = _0x24bf63(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 5], 21, -57434055);
            _0x418998 = _0x24bf63(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 12], 6, 1700485571);
            _0x3f6fdd = _0x24bf63(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 3], 10, -1894986606);
            _0x2c3b45 = _0x24bf63(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 10], 15, -1051523);
            _0x1da113 = _0x24bf63(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 1], 21, -2054922799);
            _0x418998 = _0x24bf63(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 8], 6, 1873313359);
            _0x3f6fdd = _0x24bf63(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 15], 10, -30611744);
            _0x2c3b45 = _0x24bf63(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 6], 15, -1560198380);
            _0x1da113 = _0x24bf63(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 13], 21, 1309151649);
            _0x418998 = _0x24bf63(_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd, _0x196095[_0x4530df + 4], 6, -145523070);
            _0x3f6fdd = _0x24bf63(_0x3f6fdd, _0x418998, _0x1da113, _0x2c3b45, _0x196095[_0x4530df + 11], 10, -1120210379);
            _0x2c3b45 = _0x24bf63(_0x2c3b45, _0x3f6fdd, _0x418998, _0x1da113, _0x196095[_0x4530df + 2], 15, 718787259);
            _0x1da113 = _0x24bf63(_0x1da113, _0x2c3b45, _0x3f6fdd, _0x418998, _0x196095[_0x4530df + 9], 21, -343485551);
            _0x418998 = _0x2f5573(_0x418998, _0x55855b);
            _0x1da113 = _0x2f5573(_0x1da113, _0x166b44);
            _0x2c3b45 = _0x2f5573(_0x2c3b45, _0x2ffc9c);
            _0x3f6fdd = _0x2f5573(_0x3f6fdd, _0x500e72);
          }
          return [_0x418998, _0x1da113, _0x2c3b45, _0x3f6fdd];
        }
        function _0x1a939f(_0x2dfa7e) {
          return _0x3616cd(_0x9ed37(_0x472a44(_0x2dfa7e, {
            ibits: 8,
            obits: 32,
            obigendian: false
          }), _0x2dfa7e.length * 8), {
            ibits: 32,
            ibigendian: false
          });
        }
        function _0x2e9cf1(_0x10d0ef) {
          this.mul = _0x3f1049(88, 81, 244, 45, 76, 149, 127, 45);
          this.inc = _0x3f1049(20, 5, 123, 126, 247, 103, 129, 79);
          this.mask = _0x3f1049(0, 0, 0, 0, 255, 255, 255, 255);
          this.state = _0x1cc613(this.inc);
          this.next();
          _0x3800de(this.state, this.mask);
          var _0x5046c6;
          if (_0x10d0ef !== void 0) {
            _0x10d0ef = _0x57ac11(_0x10d0ef >>> 0);
          } else if (typeof window === "object" && typeof window.crypto === "object" && typeof window.crypto.getRandomValues === "function") {
            _0x5046c6 = new Uint32Array(2);
            window.crypto.getRandomValues(_0x5046c6);
            _0x10d0ef = _0x49cab4(_0x57ac11(_0x5046c6[0] >>> 0), _0x2735ea(_0x57ac11(_0x5046c6[1] >>> 0), 32));
          } else if (typeof globalThis === "object" && typeof globalThis.crypto === "object" && typeof globalThis.crypto.getRandomValues === "function") {
            _0x5046c6 = new Uint32Array(2);
            globalThis.crypto.getRandomValues(_0x5046c6);
            _0x10d0ef = _0x49cab4(_0x57ac11(_0x5046c6[0] >>> 0), _0x2735ea(_0x57ac11(_0x5046c6[1] >>> 0), 32));
          } else {
            _0x10d0ef = _0x57ac11(Math.random() * 4294967295 >>> 0);
            _0x49cab4(_0x10d0ef, _0x2735ea(_0x57ac11((/* @__PURE__ */ new Date()).getTime()), 32));
          }
          _0x49cab4(this.state, _0x10d0ef);
          this.next();
        }
        _0x2e9cf1.prototype.next = function() {
          var _0x676648 = _0x1cc613(this.state);
          _0x1dce27(this.state, this.mul);
          _0x22da1e(this.state, this.inc);
          var _0x5b65a4 = _0x1cc613(_0x676648);
          _0x2735ea(_0x5b65a4, 18);
          _0x79692c(_0x5b65a4, _0x676648);
          _0x2735ea(_0x5b65a4, 27);
          var _0x7e748f = _0x1cc613(_0x676648);
          _0x2735ea(_0x7e748f, 59);
          _0x3800de(_0x5b65a4, this.mask);
          var _0x2d285a = _0x291112(_0x7e748f);
          var _0x469a6e = _0x1cc613(_0x5b65a4);
          _0xdd5776(_0x469a6e, 32 - _0x2d285a);
          _0x2735ea(_0x5b65a4, _0x2d285a);
          _0x79692c(_0x5b65a4, _0x469a6e);
          return _0x291112(_0x5b65a4);
        };
        _0x2e9cf1.prototype.reseed = function(_0x58f189) {
          if (typeof _0x58f189 !== "string") {
            throw new Error("UUID: PCG: seed: invalid argument (string expected)");
          }
          var _0x7fea47 = _0x4a49af(_0x472a44(_0x58f189, {
            ibits: 8,
            obits: 32,
            obigendian: true
          }), _0x58f189.length * 8);
          for (var _0x268def = 0; _0x268def < _0x7fea47.length; _0x268def++) {
            _0x79692c(_0x20e31c.state, _0x57ac11(_0x7fea47[_0x268def] >>> 0));
          }
        };
        var _0x20e31c = new _0x2e9cf1();
        _0x2e9cf1.reseed = function(_0x2686e0) {
          _0x20e31c.reseed(_0x2686e0);
        };
        function _0x1f23a3(_0x46aa3f, _0x2b472a) {
          var _0x321fa1 = [];
          for (var _0x4c3d79 = 0; _0x4c3d79 < _0x46aa3f; _0x4c3d79++) {
            _0x321fa1[_0x4c3d79] = _0x20e31c.next() % _0x2b472a;
          }
          return _0x321fa1;
        }
        var _0x537890 = 0;
        var _0x410f9e = 0;
        function _0x2ee5aa() {
          if (arguments.length === 1 && typeof arguments[0] === "string") {
            this.parse.apply(this, arguments);
          } else if (arguments.length >= 1 && typeof arguments[0] === "number") {
            this.make.apply(this, arguments);
          } else if (arguments.length >= 1) {
            throw new Error("UUID: constructor: invalid arguments");
          } else {
            for (var _0x220459 = 0; _0x220459 < 16; _0x220459++) {
              this[_0x220459] = 0;
            }
          }
        }
        if (typeof Uint8Array !== "undefined") {
          _0x2ee5aa.prototype = new Uint8Array(16);
        } else if (Buffer) {
          _0x2ee5aa.prototype = Buffer.alloc(16);
        } else {
          _0x2ee5aa.prototype = new Array(16);
        }
        _0x2ee5aa.prototype.constructor = _0x2ee5aa;
        _0x2ee5aa.prototype.make = function(_0x3f6f47) {
          var _0x43d021;
          var _0x325656 = this;
          if (_0x3f6f47 === 1) {
            var _0x2d95c4 = /* @__PURE__ */ new Date();
            var _0x414c1f = _0x2d95c4.getTime();
            if (_0x414c1f !== _0x537890) {
              _0x410f9e = 0;
            } else {
              _0x410f9e++;
            }
            _0x537890 = _0x414c1f;
            var _0xa9c416 = _0x57ac11(_0x414c1f);
            _0x5bf401(_0xa9c416, 1e4);
            _0x22da1e(_0xa9c416, _0x3f1049(1, 178, 29, 210, 19, 129, 64, 0));
            if (_0x410f9e > 0) {
              _0x22da1e(_0xa9c416, _0x57ac11(_0x410f9e));
            }
            var _0x449558;
            _0x449558 = _0x3da60b(_0xa9c416, 8);
            _0x325656[3] = _0x449558 & 255;
            _0x449558 = _0x3da60b(_0xa9c416, 8);
            _0x325656[2] = _0x449558 & 255;
            _0x449558 = _0x3da60b(_0xa9c416, 8);
            _0x325656[1] = _0x449558 & 255;
            _0x449558 = _0x3da60b(_0xa9c416, 8);
            _0x325656[0] = _0x449558 & 255;
            _0x449558 = _0x3da60b(_0xa9c416, 8);
            _0x325656[5] = _0x449558 & 255;
            _0x449558 = _0x3da60b(_0xa9c416, 8);
            _0x325656[4] = _0x449558 & 255;
            _0x449558 = _0x3da60b(_0xa9c416, 8);
            _0x325656[7] = _0x449558 & 255;
            _0x449558 = _0x3da60b(_0xa9c416, 8);
            _0x325656[6] = _0x449558 & 15;
            var _0x1b949a = _0x1f23a3(2, 255);
            _0x325656[8] = _0x1b949a[0];
            _0x325656[9] = _0x1b949a[1];
            var _0x333b7f = _0x1f23a3(6, 255);
            _0x333b7f[0] |= 1;
            _0x333b7f[0] |= 2;
            for (_0x43d021 = 0; _0x43d021 < 6; _0x43d021++) {
              _0x325656[10 + _0x43d021] = _0x333b7f[_0x43d021];
            }
          } else if (_0x3f6f47 === 4) {
            var _0x131322 = _0x1f23a3(16, 255);
            for (_0x43d021 = 0; _0x43d021 < 16; _0x43d021++) {
              this[_0x43d021] = _0x131322[_0x43d021];
            }
          } else if (_0x3f6f47 === 3 || _0x3f6f47 === 5) {
            var _0x350573 = "";
            var _0x226cd5 = typeof arguments[1] === "object" && arguments[1] instanceof _0x2ee5aa ? arguments[1] : new _0x2ee5aa().parse(arguments[1]);
            for (_0x43d021 = 0; _0x43d021 < 16; _0x43d021++) {
              _0x350573 += String.fromCharCode(_0x226cd5[_0x43d021]);
            }
            _0x350573 += arguments[2];
            var _0x532f7e = _0x3f6f47 === 3 ? _0x1a939f(_0x350573) : _0x1bfccc(_0x350573);
            for (_0x43d021 = 0; _0x43d021 < 16; _0x43d021++) {
              _0x325656[_0x43d021] = _0x532f7e.charCodeAt(_0x43d021);
            }
          } else {
            throw new Error("UUID: make: invalid version");
          }
          _0x325656[6] &= 15;
          _0x325656[6] |= _0x3f6f47 << 4;
          _0x325656[8] &= 63;
          _0x325656[8] |= 128;
          return _0x325656;
        };
        _0x2ee5aa.prototype.format = function(_0x1d8655) {
          var _0x2ceee2;
          var _0xb02e65;
          if (_0x1d8655 === "z85") {
            _0x2ceee2 = _0x2ba0a9(this, 16);
          } else if (_0x1d8655 === "b16") {
            _0xb02e65 = Array(32);
            _0x5bc8c(this, 0, 15, true, _0xb02e65, 0);
            _0x2ceee2 = _0xb02e65.join("");
          } else if (_0x1d8655 === void 0 || _0x1d8655 === "std") {
            _0xb02e65 = new Array(36);
            _0x5bc8c(this, 0, 3, false, _0xb02e65, 0);
            _0xb02e65[8] = "-";
            _0x5bc8c(this, 4, 5, false, _0xb02e65, 9);
            _0xb02e65[13] = "-";
            _0x5bc8c(this, 6, 7, false, _0xb02e65, 14);
            _0xb02e65[18] = "-";
            _0x5bc8c(this, 8, 9, false, _0xb02e65, 19);
            _0xb02e65[23] = "-";
            _0x5bc8c(this, 10, 15, false, _0xb02e65, 24);
            _0x2ceee2 = _0xb02e65.join("");
          }
          return _0x2ceee2;
        };
        _0x2ee5aa.prototype.toString = function(_0x535dfe) {
          return this.format(_0x535dfe);
        };
        _0x2ee5aa.prototype.toJSON = function() {
          return this.format("std");
        };
        _0x2ee5aa.prototype.parse = function(_0x57aaff, _0x130c46) {
          if (typeof _0x57aaff !== "string") {
            throw new Error("UUID: parse: invalid argument (type string expected)");
          }
          if (_0x130c46 === "z85") {
            _0x3be574(_0x57aaff, this);
          } else if (_0x130c46 === "b16") {
            _0x4e1dc3(_0x57aaff, 0, 35, this, 0);
          } else if (_0x130c46 === void 0 || _0x130c46 === "std") {
            var _0x54e2dc = {
              nil: "00000000-0000-0000-0000-000000000000",
              "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
              "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
              "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
              "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
            };
            if (_0x54e2dc[_0x57aaff] !== void 0) {
              _0x57aaff = _0x54e2dc[_0x57aaff];
            } else if (!_0x57aaff.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
              throw new Error('UUID: parse: invalid string representation (expected "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")');
            }
            _0x4e1dc3(_0x57aaff, 0, 7, this, 0);
            _0x4e1dc3(_0x57aaff, 9, 12, this, 4);
            _0x4e1dc3(_0x57aaff, 14, 17, this, 6);
            _0x4e1dc3(_0x57aaff, 19, 22, this, 8);
            _0x4e1dc3(_0x57aaff, 24, 35, this, 10);
          }
          return this;
        };
        _0x2ee5aa.prototype.export = function() {
          var _0xce487a = Array(16);
          for (var _0x1d0850 = 0; _0x1d0850 < 16; _0x1d0850++) {
            _0xce487a[_0x1d0850] = this[_0x1d0850];
          }
          return _0xce487a;
        };
        _0x2ee5aa.prototype.import = function(_0x21b048) {
          if (typeof _0x21b048 !== "object" || !(_0x21b048 instanceof Array)) {
            throw new Error("UUID: import: invalid argument (type Array expected)");
          }
          if (_0x21b048.length !== 16) {
            throw new Error("UUID: import: invalid argument (Array of length 16 expected)");
          }
          for (var _0x20a8f0 = 0; _0x20a8f0 < 16; _0x20a8f0++) {
            if (typeof _0x21b048[_0x20a8f0] !== "number") {
              throw new Error("UUID: import: invalid array element #" + _0x20a8f0 + " (type Number expected)");
            }
            if (!isFinite(_0x21b048[_0x20a8f0]) || Math.floor(_0x21b048[_0x20a8f0]) !== _0x21b048[_0x20a8f0]) {
              throw new Error("UUID: import: invalid array element #" + _0x20a8f0 + " (Number with integer value expected)");
            }
            if (!(_0x21b048[_0x20a8f0] >= 0) || !(_0x21b048[_0x20a8f0] <= 255)) {
              throw new Error("UUID: import: invalid array element #" + _0x20a8f0 + " (Number with integer value in range 0...255 expected)");
            }
            this[_0x20a8f0] = _0x21b048[_0x20a8f0];
          }
          return this;
        };
        _0x2ee5aa.prototype.compare = function(_0x251963) {
          if (typeof _0x251963 !== "object") {
            throw new Error("UUID: compare: invalid argument (type UUID expected)");
          }
          if (!(_0x251963 instanceof _0x2ee5aa)) {
            throw new Error("UUID: compare: invalid argument (type UUID expected)");
          }
          for (var _0x3151a0 = 0; _0x3151a0 < 16; _0x3151a0++) {
            if (this[_0x3151a0] < _0x251963[_0x3151a0]) {
              return -1;
            } else if (this[_0x3151a0] > _0x251963[_0x3151a0]) {
              return 1;
            }
          }
          return 0;
        };
        _0x2ee5aa.prototype.equal = function(_0x45f141) {
          return this.compare(_0x45f141) === 0;
        };
        _0x2ee5aa.prototype.fold = function(_0x16d5bd) {
          if (typeof _0x16d5bd === "undefined") {
            throw new Error("UUID: fold: invalid argument (number of fold operations expected)");
          }
          if (_0x16d5bd < 1 || _0x16d5bd > 4) {
            throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)");
          }
          var _0x468345 = 16 / Math.pow(2, _0x16d5bd);
          var _0x3f99c0 = new Array(_0x468345);
          for (var _0x326f94 = 0; _0x326f94 < _0x468345; _0x326f94++) {
            var _0x543301 = 0;
            for (var _0x3861d2 = 0; _0x326f94 + _0x3861d2 < 16; _0x3861d2 += _0x468345) {
              _0x543301 ^= this[_0x326f94 + _0x3861d2];
            }
            _0x3f99c0[_0x326f94] = _0x543301;
          }
          return _0x3f99c0;
        };
        _0x2ee5aa.PCG = _0x2e9cf1;
        return _0x2ee5aa;
      });
    }
  };
  var _0x14c3dd = {};
  function _0x4f3388(_0x1edf8d) {
    var _0x5ada61 = _0x14c3dd[_0x1edf8d];
    if (_0x5ada61 !== void 0) {
      return _0x5ada61.exports;
    }
    var _0x2f23a0 = _0x14c3dd[_0x1edf8d] = {
      exports: {}
    };
    _0x3f6bd4[_0x1edf8d].call(_0x2f23a0.exports, _0x2f23a0, _0x2f23a0.exports, _0x4f3388);
    return _0x2f23a0.exports;
  }
  var _0x2fdca9 = {};
  (() => {
    "use strict";
    ;
    const _0x558df8 = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var _0x328e3a = {
      randomUUID: _0x558df8
    };
    const _0x409b7d = _0x328e3a;
    ;
    let _0x29b2ff;
    const _0x113b3e = new Uint8Array(16);
    function _0x38581e() {
      if (!_0x29b2ff) {
        _0x29b2ff = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!_0x29b2ff) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return _0x29b2ff(_0x113b3e);
    }
    ;
    const _0x33923c = [];
    for (let _0x5e267f = 0; _0x5e267f < 256; ++_0x5e267f) {
      _0x33923c.push((_0x5e267f + 256).toString(16).slice(1));
    }
    function _0x4dc191(_0x2798e6, _0x466b91 = 0) {
      return _0x33923c[_0x2798e6[_0x466b91 + 0]] + _0x33923c[_0x2798e6[_0x466b91 + 1]] + _0x33923c[_0x2798e6[_0x466b91 + 2]] + _0x33923c[_0x2798e6[_0x466b91 + 3]] + "-" + _0x33923c[_0x2798e6[_0x466b91 + 4]] + _0x33923c[_0x2798e6[_0x466b91 + 5]] + "-" + _0x33923c[_0x2798e6[_0x466b91 + 6]] + _0x33923c[_0x2798e6[_0x466b91 + 7]] + "-" + _0x33923c[_0x2798e6[_0x466b91 + 8]] + _0x33923c[_0x2798e6[_0x466b91 + 9]] + "-" + _0x33923c[_0x2798e6[_0x466b91 + 10]] + _0x33923c[_0x2798e6[_0x466b91 + 11]] + _0x33923c[_0x2798e6[_0x466b91 + 12]] + _0x33923c[_0x2798e6[_0x466b91 + 13]] + _0x33923c[_0x2798e6[_0x466b91 + 14]] + _0x33923c[_0x2798e6[_0x466b91 + 15]];
    }
    function _0x1334a1(_0x2a3feb, _0x166530 = 0) {
      const _0x480ef7 = _0x4dc191(_0x2a3feb, _0x166530);
      if (!validate(_0x480ef7)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return _0x480ef7;
    }
    const _0xc9fd0c = null;
    ;
    function _0x4e2921(_0x25edee, _0x466a7d, _0x1d7333) {
      if (_0x409b7d.randomUUID && !_0x466a7d && !_0x25edee) {
        return _0x409b7d.randomUUID();
      }
      _0x25edee = _0x25edee || {};
      const _0x2ae28c = _0x25edee.random || (_0x25edee.rng || _0x38581e)();
      _0x2ae28c[6] = _0x2ae28c[6] & 15 | 64;
      _0x2ae28c[8] = _0x2ae28c[8] & 63 | 128;
      if (_0x466a7d) {
        _0x1d7333 = _0x1d7333 || 0;
        for (let _0x2aac20 = 0; _0x2aac20 < 16; ++_0x2aac20) {
          _0x466a7d[_0x1d7333 + _0x2aac20] = _0x2ae28c[_0x2aac20];
        }
        return _0x466a7d;
      }
      return _0x4dc191(_0x2ae28c);
    }
    const _0x5e38e7 = _0x4e2921;
    ;
    const _0x214e7b = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    ;
    function _0x34a816(_0x567817) {
      return typeof _0x567817 === "string" && _0x214e7b.test(_0x567817);
    }
    const _0x1c3ffe = _0x34a816;
    ;
    function _0x5ba850(_0xdc967d) {
      if (!_0x1c3ffe(_0xdc967d)) {
        throw TypeError("Invalid UUID");
      }
      let _0x2c1ecb;
      const _0x4bb63b = new Uint8Array(16);
      _0x4bb63b[0] = (_0x2c1ecb = parseInt(_0xdc967d.slice(0, 8), 16)) >>> 24;
      _0x4bb63b[1] = _0x2c1ecb >>> 16 & 255;
      _0x4bb63b[2] = _0x2c1ecb >>> 8 & 255;
      _0x4bb63b[3] = _0x2c1ecb & 255;
      _0x4bb63b[4] = (_0x2c1ecb = parseInt(_0xdc967d.slice(9, 13), 16)) >>> 8;
      _0x4bb63b[5] = _0x2c1ecb & 255;
      _0x4bb63b[6] = (_0x2c1ecb = parseInt(_0xdc967d.slice(14, 18), 16)) >>> 8;
      _0x4bb63b[7] = _0x2c1ecb & 255;
      _0x4bb63b[8] = (_0x2c1ecb = parseInt(_0xdc967d.slice(19, 23), 16)) >>> 8;
      _0x4bb63b[9] = _0x2c1ecb & 255;
      _0x4bb63b[10] = (_0x2c1ecb = parseInt(_0xdc967d.slice(24, 36), 16)) / 1099511627776 & 255;
      _0x4bb63b[11] = _0x2c1ecb / 4294967296 & 255;
      _0x4bb63b[12] = _0x2c1ecb >>> 24 & 255;
      _0x4bb63b[13] = _0x2c1ecb >>> 16 & 255;
      _0x4bb63b[14] = _0x2c1ecb >>> 8 & 255;
      _0x4bb63b[15] = _0x2c1ecb & 255;
      return _0x4bb63b;
    }
    const _0xb11a52 = _0x5ba850;
    ;
    function _0x77c1f5(_0x22e809) {
      _0x22e809 = unescape(encodeURIComponent(_0x22e809));
      const _0x4b1f79 = [];
      for (let _0xb93bf9 = 0; _0xb93bf9 < _0x22e809.length; ++_0xb93bf9) {
        _0x4b1f79.push(_0x22e809.charCodeAt(_0xb93bf9));
      }
      return _0x4b1f79;
    }
    const _0x936452 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    const _0x49669e = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function _0x2aaea1(_0x94e10f, _0x1e47dc, _0x5d086c) {
      function _0x12dd5a(_0x5f075f, _0x25315f, _0x39a88f, _0x37f3d8) {
        if (typeof _0x5f075f === "string") {
          _0x5f075f = _0x77c1f5(_0x5f075f);
        }
        if (typeof _0x25315f === "string") {
          _0x25315f = _0xb11a52(_0x25315f);
        }
        if (_0x25315f?.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let _0x4939fa = new Uint8Array(16 + _0x5f075f.length);
        _0x4939fa.set(_0x25315f);
        _0x4939fa.set(_0x5f075f, _0x25315f.length);
        _0x4939fa = _0x5d086c(_0x4939fa);
        _0x4939fa[6] = _0x4939fa[6] & 15 | _0x1e47dc;
        _0x4939fa[8] = _0x4939fa[8] & 63 | 128;
        if (_0x39a88f) {
          _0x37f3d8 = _0x37f3d8 || 0;
          for (let _0x49f9ad = 0; _0x49f9ad < 16; ++_0x49f9ad) {
            _0x39a88f[_0x37f3d8 + _0x49f9ad] = _0x4939fa[_0x49f9ad];
          }
          return _0x39a88f;
        }
        return _0x4dc191(_0x4939fa);
      }
      try {
        _0x12dd5a.name = _0x94e10f;
      } catch (_0x30cb6f) {
      }
      _0x12dd5a.DNS = _0x936452;
      _0x12dd5a.URL = _0x49669e;
      return _0x12dd5a;
    }
    ;
    function _0x1b1ed3(_0x40fa9e, _0x169107, _0x226586, _0x3a1ca7) {
      switch (_0x40fa9e) {
        case 0:
          return _0x169107 & _0x226586 ^ ~_0x169107 & _0x3a1ca7;
        case 1:
          return _0x169107 ^ _0x226586 ^ _0x3a1ca7;
        case 2:
          return _0x169107 & _0x226586 ^ _0x169107 & _0x3a1ca7 ^ _0x226586 & _0x3a1ca7;
        case 3:
          return _0x169107 ^ _0x226586 ^ _0x3a1ca7;
      }
    }
    function _0x1faf2d(_0x1cbaa0, _0x41c52c) {
      return _0x1cbaa0 << _0x41c52c | _0x1cbaa0 >>> 32 - _0x41c52c;
    }
    function _0x38115b(_0xc318e) {
      const _0x30c292 = [1518500249, 1859775393, 2400959708, 3395469782];
      const _0x139ee6 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof _0xc318e === "string") {
        const _0x42e03c = unescape(encodeURIComponent(_0xc318e));
        _0xc318e = [];
        for (let _0x58e497 = 0; _0x58e497 < _0x42e03c.length; ++_0x58e497) {
          _0xc318e.push(_0x42e03c.charCodeAt(_0x58e497));
        }
      } else if (!Array.isArray(_0xc318e)) {
        _0xc318e = Array.prototype.slice.call(_0xc318e);
      }
      _0xc318e.push(128);
      const _0x11cd0e = _0xc318e.length / 4 + 2;
      const _0x26f7d7 = Math.ceil(_0x11cd0e / 16);
      const _0x47f4fb = new Array(_0x26f7d7);
      for (let _0x35be2c = 0; _0x35be2c < _0x26f7d7; ++_0x35be2c) {
        const _0x9e022b = new Uint32Array(16);
        for (let _0x2aa4b9 = 0; _0x2aa4b9 < 16; ++_0x2aa4b9) {
          _0x9e022b[_0x2aa4b9] = _0xc318e[_0x35be2c * 64 + _0x2aa4b9 * 4] << 24 | _0xc318e[_0x35be2c * 64 + _0x2aa4b9 * 4 + 1] << 16 | _0xc318e[_0x35be2c * 64 + _0x2aa4b9 * 4 + 2] << 8 | _0xc318e[_0x35be2c * 64 + _0x2aa4b9 * 4 + 3];
        }
        _0x47f4fb[_0x35be2c] = _0x9e022b;
      }
      _0x47f4fb[_0x26f7d7 - 1][14] = (_0xc318e.length - 1) * 8 / Math.pow(2, 32);
      _0x47f4fb[_0x26f7d7 - 1][14] = Math.floor(_0x47f4fb[_0x26f7d7 - 1][14]);
      _0x47f4fb[_0x26f7d7 - 1][15] = (_0xc318e.length - 1) * 8 & -1;
      for (let _0x2f8663 = 0; _0x2f8663 < _0x26f7d7; ++_0x2f8663) {
        const _0x300a91 = new Uint32Array(80);
        for (let _0x448d17 = 0; _0x448d17 < 16; ++_0x448d17) {
          _0x300a91[_0x448d17] = _0x47f4fb[_0x2f8663][_0x448d17];
        }
        for (let _0x20bcd4 = 16; _0x20bcd4 < 80; ++_0x20bcd4) {
          _0x300a91[_0x20bcd4] = _0x1faf2d(_0x300a91[_0x20bcd4 - 3] ^ _0x300a91[_0x20bcd4 - 8] ^ _0x300a91[_0x20bcd4 - 14] ^ _0x300a91[_0x20bcd4 - 16], 1);
        }
        let _0x255e70 = _0x139ee6[0];
        let _0x5ce958 = _0x139ee6[1];
        let _0x3b7bcc = _0x139ee6[2];
        let _0x1dc221 = _0x139ee6[3];
        let _0x337781 = _0x139ee6[4];
        for (let _0x5e3dfc = 0; _0x5e3dfc < 80; ++_0x5e3dfc) {
          const _0x48e237 = Math.floor(_0x5e3dfc / 20);
          const _0x5f1058 = _0x1faf2d(_0x255e70, 5) + _0x1b1ed3(_0x48e237, _0x5ce958, _0x3b7bcc, _0x1dc221) + _0x337781 + _0x30c292[_0x48e237] + _0x300a91[_0x5e3dfc] >>> 0;
          _0x337781 = _0x1dc221;
          _0x1dc221 = _0x3b7bcc;
          _0x3b7bcc = _0x1faf2d(_0x5ce958, 30) >>> 0;
          _0x5ce958 = _0x255e70;
          _0x255e70 = _0x5f1058;
        }
        _0x139ee6[0] = _0x139ee6[0] + _0x255e70 >>> 0;
        _0x139ee6[1] = _0x139ee6[1] + _0x5ce958 >>> 0;
        _0x139ee6[2] = _0x139ee6[2] + _0x3b7bcc >>> 0;
        _0x139ee6[3] = _0x139ee6[3] + _0x1dc221 >>> 0;
        _0x139ee6[4] = _0x139ee6[4] + _0x337781 >>> 0;
      }
      return [_0x139ee6[0] >> 24 & 255, _0x139ee6[0] >> 16 & 255, _0x139ee6[0] >> 8 & 255, _0x139ee6[0] & 255, _0x139ee6[1] >> 24 & 255, _0x139ee6[1] >> 16 & 255, _0x139ee6[1] >> 8 & 255, _0x139ee6[1] & 255, _0x139ee6[2] >> 24 & 255, _0x139ee6[2] >> 16 & 255, _0x139ee6[2] >> 8 & 255, _0x139ee6[2] & 255, _0x139ee6[3] >> 24 & 255, _0x139ee6[3] >> 16 & 255, _0x139ee6[3] >> 8 & 255, _0x139ee6[3] & 255, _0x139ee6[4] >> 24 & 255, _0x139ee6[4] >> 16 & 255, _0x139ee6[4] >> 8 & 255, _0x139ee6[4] & 255];
    }
    const _0x53a05a = _0x38115b;
    ;
    const _0x54f410 = _0x2aaea1("v5", 80, _0x53a05a);
    const _0xb74832 = _0x54f410;
    ;
    /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    const _0x235965 = 4;
    const _0x48b1bb = 0;
    const _0x31afa6 = 1;
    const _0x335227 = 2;
    function _0x25f1a9(_0x31a3eb) {
      let _0x6ae401 = _0x31a3eb.length;
      while (--_0x6ae401 >= 0) {
        _0x31a3eb[_0x6ae401] = 0;
      }
    }
    const _0x458aa9 = 0;
    const _0x22fff7 = 1;
    const _0x429337 = 2;
    const _0x152ed1 = 3;
    const _0x510db6 = 258;
    const _0x2f4c1d = 29;
    const _0x1423da = 256;
    const _0x5d9254 = _0x1423da + 1 + _0x2f4c1d;
    const _0x37f7db = 30;
    const _0x2d99b4 = 19;
    const _0x53e32e = _0x5d9254 * 2 + 1;
    const _0x3f729d = 15;
    const _0x264b28 = 16;
    const _0x299db5 = 7;
    const _0x2c08bb = 256;
    const _0x2f51af = 16;
    const _0x1ab738 = 17;
    const _0x55f3e1 = 18;
    const _0x52d47f = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const _0x374412 = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const _0x1df19d = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const _0x4a0d6f = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const _0x3f6612 = 512;
    const _0x29de5f = new Array((_0x5d9254 + 2) * 2);
    _0x25f1a9(_0x29de5f);
    const _0x683466 = new Array(_0x37f7db * 2);
    _0x25f1a9(_0x683466);
    const _0x19a18d = new Array(_0x3f6612);
    _0x25f1a9(_0x19a18d);
    const _0x5d16ef = new Array(_0x510db6 - _0x152ed1 + 1);
    _0x25f1a9(_0x5d16ef);
    const _0x503fff = new Array(_0x2f4c1d);
    _0x25f1a9(_0x503fff);
    const _0x5a40c2 = new Array(_0x37f7db);
    _0x25f1a9(_0x5a40c2);
    function _0x481e50(_0x565de3, _0x229d0a, _0x558858, _0x564d32, _0x10c4e5) {
      this.static_tree = _0x565de3;
      this.extra_bits = _0x229d0a;
      this.extra_base = _0x558858;
      this.elems = _0x564d32;
      this.max_length = _0x10c4e5;
      this.has_stree = _0x565de3 && _0x565de3.length;
    }
    let _0x340b7e;
    let _0x4ea778;
    let _0x21768a;
    function _0xbb02b7(_0x485ba0, _0x5211e9) {
      this.dyn_tree = _0x485ba0;
      this.max_code = 0;
      this.stat_desc = _0x5211e9;
    }
    const _0x5c155f = (_0x37799a) => {
      if (_0x37799a < 256) {
        return _0x19a18d[_0x37799a];
      } else {
        return _0x19a18d[256 + (_0x37799a >>> 7)];
      }
    };
    const _0x36d47f = (_0x2c0f4c, _0x4c850b) => {
      _0x2c0f4c.pending_buf[_0x2c0f4c.pending++] = _0x4c850b & 255;
      _0x2c0f4c.pending_buf[_0x2c0f4c.pending++] = _0x4c850b >>> 8 & 255;
    };
    const _0x6c0c26 = (_0x2d3d90, _0x5c0c4c, _0x1adde5) => {
      if (_0x2d3d90.bi_valid > _0x264b28 - _0x1adde5) {
        _0x2d3d90.bi_buf |= _0x5c0c4c << _0x2d3d90.bi_valid & 65535;
        _0x36d47f(_0x2d3d90, _0x2d3d90.bi_buf);
        _0x2d3d90.bi_buf = _0x5c0c4c >> _0x264b28 - _0x2d3d90.bi_valid;
        _0x2d3d90.bi_valid += _0x1adde5 - _0x264b28;
      } else {
        _0x2d3d90.bi_buf |= _0x5c0c4c << _0x2d3d90.bi_valid & 65535;
        _0x2d3d90.bi_valid += _0x1adde5;
      }
    };
    const _0xd714d9 = (_0x37c41d, _0x57b843, _0x4f6db0) => {
      _0x6c0c26(_0x37c41d, _0x4f6db0[_0x57b843 * 2], _0x4f6db0[_0x57b843 * 2 + 1]);
    };
    const _0x57cc94 = (_0x5d142b, _0x41d790) => {
      let _0x54c584 = 0;
      do {
        _0x54c584 |= _0x5d142b & 1;
        _0x5d142b >>>= 1;
        _0x54c584 <<= 1;
      } while (--_0x41d790 > 0);
      return _0x54c584 >>> 1;
    };
    const _0x2de807 = (_0x165974) => {
      if (_0x165974.bi_valid === 16) {
        _0x36d47f(_0x165974, _0x165974.bi_buf);
        _0x165974.bi_buf = 0;
        _0x165974.bi_valid = 0;
      } else if (_0x165974.bi_valid >= 8) {
        _0x165974.pending_buf[_0x165974.pending++] = _0x165974.bi_buf & 255;
        _0x165974.bi_buf >>= 8;
        _0x165974.bi_valid -= 8;
      }
    };
    const _0x262a22 = (_0x3eb08f, _0x2462b0) => {
      const _0x5da19e = _0x2462b0.dyn_tree;
      const _0x125697 = _0x2462b0.max_code;
      const _0x46241a = _0x2462b0.stat_desc.static_tree;
      const _0x402e73 = _0x2462b0.stat_desc.has_stree;
      const _0x5aa970 = _0x2462b0.stat_desc.extra_bits;
      const _0x19ec17 = _0x2462b0.stat_desc.extra_base;
      const _0x1bccc5 = _0x2462b0.stat_desc.max_length;
      let _0x108102;
      let _0x5948c3;
      let _0x90186d;
      let _0x225042;
      let _0x8eed11;
      let _0x24a393;
      let _0x2d4c6d = 0;
      for (_0x225042 = 0; _0x225042 <= _0x3f729d; _0x225042++) {
        _0x3eb08f.bl_count[_0x225042] = 0;
      }
      _0x5da19e[_0x3eb08f.heap[_0x3eb08f.heap_max] * 2 + 1] = 0;
      for (_0x108102 = _0x3eb08f.heap_max + 1; _0x108102 < _0x53e32e; _0x108102++) {
        _0x5948c3 = _0x3eb08f.heap[_0x108102];
        _0x225042 = _0x5da19e[_0x5da19e[_0x5948c3 * 2 + 1] * 2 + 1] + 1;
        if (_0x225042 > _0x1bccc5) {
          _0x225042 = _0x1bccc5;
          _0x2d4c6d++;
        }
        _0x5da19e[_0x5948c3 * 2 + 1] = _0x225042;
        if (_0x5948c3 > _0x125697) {
          continue;
        }
        _0x3eb08f.bl_count[_0x225042]++;
        _0x8eed11 = 0;
        if (_0x5948c3 >= _0x19ec17) {
          _0x8eed11 = _0x5aa970[_0x5948c3 - _0x19ec17];
        }
        _0x24a393 = _0x5da19e[_0x5948c3 * 2];
        _0x3eb08f.opt_len += _0x24a393 * (_0x225042 + _0x8eed11);
        if (_0x402e73) {
          _0x3eb08f.static_len += _0x24a393 * (_0x46241a[_0x5948c3 * 2 + 1] + _0x8eed11);
        }
      }
      if (_0x2d4c6d === 0) {
        return;
      }
      do {
        _0x225042 = _0x1bccc5 - 1;
        while (_0x3eb08f.bl_count[_0x225042] === 0) {
          _0x225042--;
        }
        _0x3eb08f.bl_count[_0x225042]--;
        _0x3eb08f.bl_count[_0x225042 + 1] += 2;
        _0x3eb08f.bl_count[_0x1bccc5]--;
        _0x2d4c6d -= 2;
      } while (_0x2d4c6d > 0);
      for (_0x225042 = _0x1bccc5; _0x225042 !== 0; _0x225042--) {
        _0x5948c3 = _0x3eb08f.bl_count[_0x225042];
        while (_0x5948c3 !== 0) {
          _0x90186d = _0x3eb08f.heap[--_0x108102];
          if (_0x90186d > _0x125697) {
            continue;
          }
          if (_0x5da19e[_0x90186d * 2 + 1] !== _0x225042) {
            _0x3eb08f.opt_len += (_0x225042 - _0x5da19e[_0x90186d * 2 + 1]) * _0x5da19e[_0x90186d * 2];
            _0x5da19e[_0x90186d * 2 + 1] = _0x225042;
          }
          _0x5948c3--;
        }
      }
    };
    const _0x15c119 = (_0x520c63, _0x308067, _0x1bd871) => {
      const _0x2140ab = new Array(_0x3f729d + 1);
      let _0xd495a2 = 0;
      let _0x165b6d;
      let _0x189f6b;
      for (_0x165b6d = 1; _0x165b6d <= _0x3f729d; _0x165b6d++) {
        _0xd495a2 = _0xd495a2 + _0x1bd871[_0x165b6d - 1] << 1;
        _0x2140ab[_0x165b6d] = _0xd495a2;
      }
      for (_0x189f6b = 0; _0x189f6b <= _0x308067; _0x189f6b++) {
        let _0x1352cc = _0x520c63[_0x189f6b * 2 + 1];
        if (_0x1352cc === 0) {
          continue;
        }
        _0x520c63[_0x189f6b * 2] = _0x57cc94(_0x2140ab[_0x1352cc]++, _0x1352cc);
      }
    };
    const _0x55840b = () => {
      let _0xabc78;
      let _0x47554d;
      let _0x1eeffd;
      let _0x3e7f80;
      let _0x39ab13;
      const _0x2f42da = new Array(_0x3f729d + 1);
      _0x1eeffd = 0;
      for (_0x3e7f80 = 0; _0x3e7f80 < _0x2f4c1d - 1; _0x3e7f80++) {
        _0x503fff[_0x3e7f80] = _0x1eeffd;
        for (_0xabc78 = 0; _0xabc78 < 1 << _0x52d47f[_0x3e7f80]; _0xabc78++) {
          _0x5d16ef[_0x1eeffd++] = _0x3e7f80;
        }
      }
      _0x5d16ef[_0x1eeffd - 1] = _0x3e7f80;
      _0x39ab13 = 0;
      for (_0x3e7f80 = 0; _0x3e7f80 < 16; _0x3e7f80++) {
        _0x5a40c2[_0x3e7f80] = _0x39ab13;
        for (_0xabc78 = 0; _0xabc78 < 1 << _0x374412[_0x3e7f80]; _0xabc78++) {
          _0x19a18d[_0x39ab13++] = _0x3e7f80;
        }
      }
      _0x39ab13 >>= 7;
      for (; _0x3e7f80 < _0x37f7db; _0x3e7f80++) {
        _0x5a40c2[_0x3e7f80] = _0x39ab13 << 7;
        for (_0xabc78 = 0; _0xabc78 < 1 << _0x374412[_0x3e7f80] - 7; _0xabc78++) {
          _0x19a18d[256 + _0x39ab13++] = _0x3e7f80;
        }
      }
      for (_0x47554d = 0; _0x47554d <= _0x3f729d; _0x47554d++) {
        _0x2f42da[_0x47554d] = 0;
      }
      _0xabc78 = 0;
      while (_0xabc78 <= 143) {
        _0x29de5f[_0xabc78 * 2 + 1] = 8;
        _0xabc78++;
        _0x2f42da[8]++;
      }
      while (_0xabc78 <= 255) {
        _0x29de5f[_0xabc78 * 2 + 1] = 9;
        _0xabc78++;
        _0x2f42da[9]++;
      }
      while (_0xabc78 <= 279) {
        _0x29de5f[_0xabc78 * 2 + 1] = 7;
        _0xabc78++;
        _0x2f42da[7]++;
      }
      while (_0xabc78 <= 287) {
        _0x29de5f[_0xabc78 * 2 + 1] = 8;
        _0xabc78++;
        _0x2f42da[8]++;
      }
      _0x15c119(_0x29de5f, _0x5d9254 + 1, _0x2f42da);
      for (_0xabc78 = 0; _0xabc78 < _0x37f7db; _0xabc78++) {
        _0x683466[_0xabc78 * 2 + 1] = 5;
        _0x683466[_0xabc78 * 2] = _0x57cc94(_0xabc78, 5);
      }
      _0x340b7e = new _0x481e50(_0x29de5f, _0x52d47f, _0x1423da + 1, _0x5d9254, _0x3f729d);
      _0x4ea778 = new _0x481e50(_0x683466, _0x374412, 0, _0x37f7db, _0x3f729d);
      _0x21768a = new _0x481e50(new Array(0), _0x1df19d, 0, _0x2d99b4, _0x299db5);
    };
    const _0x4006dd = (_0x19fc6a) => {
      let _0x574ec3;
      for (_0x574ec3 = 0; _0x574ec3 < _0x5d9254; _0x574ec3++) {
        _0x19fc6a.dyn_ltree[_0x574ec3 * 2] = 0;
      }
      for (_0x574ec3 = 0; _0x574ec3 < _0x37f7db; _0x574ec3++) {
        _0x19fc6a.dyn_dtree[_0x574ec3 * 2] = 0;
      }
      for (_0x574ec3 = 0; _0x574ec3 < _0x2d99b4; _0x574ec3++) {
        _0x19fc6a.bl_tree[_0x574ec3 * 2] = 0;
      }
      _0x19fc6a.dyn_ltree[_0x2c08bb * 2] = 1;
      _0x19fc6a.opt_len = _0x19fc6a.static_len = 0;
      _0x19fc6a.sym_next = _0x19fc6a.matches = 0;
    };
    const _0x366432 = (_0x40b9d3) => {
      if (_0x40b9d3.bi_valid > 8) {
        _0x36d47f(_0x40b9d3, _0x40b9d3.bi_buf);
      } else if (_0x40b9d3.bi_valid > 0) {
        _0x40b9d3.pending_buf[_0x40b9d3.pending++] = _0x40b9d3.bi_buf;
      }
      _0x40b9d3.bi_buf = 0;
      _0x40b9d3.bi_valid = 0;
    };
    const _0x25507d = (_0x3320f7, _0x5a903b, _0x43f9f7, _0x59b58e) => {
      const _0x2e37c1 = _0x5a903b * 2;
      const _0x2bffa6 = _0x43f9f7 * 2;
      return _0x3320f7[_0x2e37c1] < _0x3320f7[_0x2bffa6] || _0x3320f7[_0x2e37c1] === _0x3320f7[_0x2bffa6] && _0x59b58e[_0x5a903b] <= _0x59b58e[_0x43f9f7];
    };
    const _0x469f11 = (_0x35967d, _0x17b2ff, _0x10f8d9) => {
      const _0x4d92a6 = _0x35967d.heap[_0x10f8d9];
      let _0x395656 = _0x10f8d9 << 1;
      while (_0x395656 <= _0x35967d.heap_len) {
        if (_0x395656 < _0x35967d.heap_len && _0x25507d(_0x17b2ff, _0x35967d.heap[_0x395656 + 1], _0x35967d.heap[_0x395656], _0x35967d.depth)) {
          _0x395656++;
        }
        if (_0x25507d(_0x17b2ff, _0x4d92a6, _0x35967d.heap[_0x395656], _0x35967d.depth)) {
          break;
        }
        _0x35967d.heap[_0x10f8d9] = _0x35967d.heap[_0x395656];
        _0x10f8d9 = _0x395656;
        _0x395656 <<= 1;
      }
      _0x35967d.heap[_0x10f8d9] = _0x4d92a6;
    };
    const _0x423f8f = (_0x1a6573, _0x2a9e31, _0x6fe553) => {
      let _0x3c3fab;
      let _0x3c18ad;
      let _0x2f0c4a = 0;
      let _0x1897e9;
      let _0x3d5e6c;
      if (_0x1a6573.sym_next !== 0) {
        do {
          _0x3c3fab = _0x1a6573.pending_buf[_0x1a6573.sym_buf + _0x2f0c4a++] & 255;
          _0x3c3fab += (_0x1a6573.pending_buf[_0x1a6573.sym_buf + _0x2f0c4a++] & 255) << 8;
          _0x3c18ad = _0x1a6573.pending_buf[_0x1a6573.sym_buf + _0x2f0c4a++];
          if (_0x3c3fab === 0) {
            _0xd714d9(_0x1a6573, _0x3c18ad, _0x2a9e31);
          } else {
            _0x1897e9 = _0x5d16ef[_0x3c18ad];
            _0xd714d9(_0x1a6573, _0x1897e9 + _0x1423da + 1, _0x2a9e31);
            _0x3d5e6c = _0x52d47f[_0x1897e9];
            if (_0x3d5e6c !== 0) {
              _0x3c18ad -= _0x503fff[_0x1897e9];
              _0x6c0c26(_0x1a6573, _0x3c18ad, _0x3d5e6c);
            }
            _0x3c3fab--;
            _0x1897e9 = _0x5c155f(_0x3c3fab);
            _0xd714d9(_0x1a6573, _0x1897e9, _0x6fe553);
            _0x3d5e6c = _0x374412[_0x1897e9];
            if (_0x3d5e6c !== 0) {
              _0x3c3fab -= _0x5a40c2[_0x1897e9];
              _0x6c0c26(_0x1a6573, _0x3c3fab, _0x3d5e6c);
            }
          }
        } while (_0x2f0c4a < _0x1a6573.sym_next);
      }
      _0xd714d9(_0x1a6573, _0x2c08bb, _0x2a9e31);
    };
    const _0x4444ef = (_0x4471e7, _0x2bb85f) => {
      const _0x1bc531 = _0x2bb85f.dyn_tree;
      const _0x444190 = _0x2bb85f.stat_desc.static_tree;
      const _0x42c94a = _0x2bb85f.stat_desc.has_stree;
      const _0x58442a = _0x2bb85f.stat_desc.elems;
      let _0x69f01a;
      let _0xd0f2c;
      let _0x329b2f = -1;
      let _0x29c42e;
      _0x4471e7.heap_len = 0;
      _0x4471e7.heap_max = _0x53e32e;
      for (_0x69f01a = 0; _0x69f01a < _0x58442a; _0x69f01a++) {
        if (_0x1bc531[_0x69f01a * 2] !== 0) {
          _0x4471e7.heap[++_0x4471e7.heap_len] = _0x329b2f = _0x69f01a;
          _0x4471e7.depth[_0x69f01a] = 0;
        } else {
          _0x1bc531[_0x69f01a * 2 + 1] = 0;
        }
      }
      while (_0x4471e7.heap_len < 2) {
        _0x29c42e = _0x4471e7.heap[++_0x4471e7.heap_len] = _0x329b2f < 2 ? ++_0x329b2f : 0;
        _0x1bc531[_0x29c42e * 2] = 1;
        _0x4471e7.depth[_0x29c42e] = 0;
        _0x4471e7.opt_len--;
        if (_0x42c94a) {
          _0x4471e7.static_len -= _0x444190[_0x29c42e * 2 + 1];
        }
      }
      _0x2bb85f.max_code = _0x329b2f;
      for (_0x69f01a = _0x4471e7.heap_len >> 1; _0x69f01a >= 1; _0x69f01a--) {
        _0x469f11(_0x4471e7, _0x1bc531, _0x69f01a);
      }
      _0x29c42e = _0x58442a;
      do {
        _0x69f01a = _0x4471e7.heap[1];
        _0x4471e7.heap[1] = _0x4471e7.heap[_0x4471e7.heap_len--];
        _0x469f11(_0x4471e7, _0x1bc531, 1);
        _0xd0f2c = _0x4471e7.heap[1];
        _0x4471e7.heap[--_0x4471e7.heap_max] = _0x69f01a;
        _0x4471e7.heap[--_0x4471e7.heap_max] = _0xd0f2c;
        _0x1bc531[_0x29c42e * 2] = _0x1bc531[_0x69f01a * 2] + _0x1bc531[_0xd0f2c * 2];
        _0x4471e7.depth[_0x29c42e] = (_0x4471e7.depth[_0x69f01a] >= _0x4471e7.depth[_0xd0f2c] ? _0x4471e7.depth[_0x69f01a] : _0x4471e7.depth[_0xd0f2c]) + 1;
        _0x1bc531[_0x69f01a * 2 + 1] = _0x1bc531[_0xd0f2c * 2 + 1] = _0x29c42e;
        _0x4471e7.heap[1] = _0x29c42e++;
        _0x469f11(_0x4471e7, _0x1bc531, 1);
      } while (_0x4471e7.heap_len >= 2);
      _0x4471e7.heap[--_0x4471e7.heap_max] = _0x4471e7.heap[1];
      _0x262a22(_0x4471e7, _0x2bb85f);
      _0x15c119(_0x1bc531, _0x329b2f, _0x4471e7.bl_count);
    };
    const _0xf5cc82 = (_0x425b4b, _0x1a6997, _0x3d7047) => {
      let _0x307490;
      let _0x309aeb = -1;
      let _0x43bc89;
      let _0x561179 = _0x1a6997[1];
      let _0x2de7cf = 0;
      let _0x2c246c = 7;
      let _0x30bfcb = 4;
      if (_0x561179 === 0) {
        _0x2c246c = 138;
        _0x30bfcb = 3;
      }
      _0x1a6997[(_0x3d7047 + 1) * 2 + 1] = 65535;
      for (_0x307490 = 0; _0x307490 <= _0x3d7047; _0x307490++) {
        _0x43bc89 = _0x561179;
        _0x561179 = _0x1a6997[(_0x307490 + 1) * 2 + 1];
        if (++_0x2de7cf < _0x2c246c && _0x43bc89 === _0x561179) {
          continue;
        } else if (_0x2de7cf < _0x30bfcb) {
          _0x425b4b.bl_tree[_0x43bc89 * 2] += _0x2de7cf;
        } else if (_0x43bc89 !== 0) {
          if (_0x43bc89 !== _0x309aeb) {
            _0x425b4b.bl_tree[_0x43bc89 * 2]++;
          }
          _0x425b4b.bl_tree[_0x2f51af * 2]++;
        } else if (_0x2de7cf <= 10) {
          _0x425b4b.bl_tree[_0x1ab738 * 2]++;
        } else {
          _0x425b4b.bl_tree[_0x55f3e1 * 2]++;
        }
        _0x2de7cf = 0;
        _0x309aeb = _0x43bc89;
        if (_0x561179 === 0) {
          _0x2c246c = 138;
          _0x30bfcb = 3;
        } else if (_0x43bc89 === _0x561179) {
          _0x2c246c = 6;
          _0x30bfcb = 3;
        } else {
          _0x2c246c = 7;
          _0x30bfcb = 4;
        }
      }
    };
    const _0x4920a4 = (_0x4741ba, _0x28b1dd, _0x18ed9) => {
      let _0x2f90f0;
      let _0x40c478 = -1;
      let _0x2ec580;
      let _0xef2e9b = _0x28b1dd[1];
      let _0x2b6166 = 0;
      let _0x30e8ac = 7;
      let _0x2117eb = 4;
      if (_0xef2e9b === 0) {
        _0x30e8ac = 138;
        _0x2117eb = 3;
      }
      for (_0x2f90f0 = 0; _0x2f90f0 <= _0x18ed9; _0x2f90f0++) {
        _0x2ec580 = _0xef2e9b;
        _0xef2e9b = _0x28b1dd[(_0x2f90f0 + 1) * 2 + 1];
        if (++_0x2b6166 < _0x30e8ac && _0x2ec580 === _0xef2e9b) {
          continue;
        } else if (_0x2b6166 < _0x2117eb) {
          do {
            _0xd714d9(_0x4741ba, _0x2ec580, _0x4741ba.bl_tree);
          } while (--_0x2b6166 !== 0);
        } else if (_0x2ec580 !== 0) {
          if (_0x2ec580 !== _0x40c478) {
            _0xd714d9(_0x4741ba, _0x2ec580, _0x4741ba.bl_tree);
            _0x2b6166--;
          }
          _0xd714d9(_0x4741ba, _0x2f51af, _0x4741ba.bl_tree);
          _0x6c0c26(_0x4741ba, _0x2b6166 - 3, 2);
        } else if (_0x2b6166 <= 10) {
          _0xd714d9(_0x4741ba, _0x1ab738, _0x4741ba.bl_tree);
          _0x6c0c26(_0x4741ba, _0x2b6166 - 3, 3);
        } else {
          _0xd714d9(_0x4741ba, _0x55f3e1, _0x4741ba.bl_tree);
          _0x6c0c26(_0x4741ba, _0x2b6166 - 11, 7);
        }
        _0x2b6166 = 0;
        _0x40c478 = _0x2ec580;
        if (_0xef2e9b === 0) {
          _0x30e8ac = 138;
          _0x2117eb = 3;
        } else if (_0x2ec580 === _0xef2e9b) {
          _0x30e8ac = 6;
          _0x2117eb = 3;
        } else {
          _0x30e8ac = 7;
          _0x2117eb = 4;
        }
      }
    };
    const _0x2a800a = (_0x4acb63) => {
      let _0x5041bd;
      _0xf5cc82(_0x4acb63, _0x4acb63.dyn_ltree, _0x4acb63.l_desc.max_code);
      _0xf5cc82(_0x4acb63, _0x4acb63.dyn_dtree, _0x4acb63.d_desc.max_code);
      _0x4444ef(_0x4acb63, _0x4acb63.bl_desc);
      for (_0x5041bd = _0x2d99b4 - 1; _0x5041bd >= 3; _0x5041bd--) {
        if (_0x4acb63.bl_tree[_0x4a0d6f[_0x5041bd] * 2 + 1] !== 0) {
          break;
        }
      }
      _0x4acb63.opt_len += (_0x5041bd + 1) * 3 + 5 + 5 + 4;
      return _0x5041bd;
    };
    const _0x5b194d = (_0x4ac3ec, _0x5af4e9, _0x176c22, _0x2d8c44) => {
      let _0x27414c;
      _0x6c0c26(_0x4ac3ec, _0x5af4e9 - 257, 5);
      _0x6c0c26(_0x4ac3ec, _0x176c22 - 1, 5);
      _0x6c0c26(_0x4ac3ec, _0x2d8c44 - 4, 4);
      for (_0x27414c = 0; _0x27414c < _0x2d8c44; _0x27414c++) {
        _0x6c0c26(_0x4ac3ec, _0x4ac3ec.bl_tree[_0x4a0d6f[_0x27414c] * 2 + 1], 3);
      }
      _0x4920a4(_0x4ac3ec, _0x4ac3ec.dyn_ltree, _0x5af4e9 - 1);
      _0x4920a4(_0x4ac3ec, _0x4ac3ec.dyn_dtree, _0x176c22 - 1);
    };
    const _0x5aa360 = (_0x3780ed) => {
      let _0x418e13 = 4093624447;
      let _0x4d2b9f;
      for (_0x4d2b9f = 0; _0x4d2b9f <= 31; _0x4d2b9f++, _0x418e13 >>>= 1) {
        if (_0x418e13 & 1 && _0x3780ed.dyn_ltree[_0x4d2b9f * 2] !== 0) {
          return _0x48b1bb;
        }
      }
      if (_0x3780ed.dyn_ltree[18] !== 0 || _0x3780ed.dyn_ltree[20] !== 0 || _0x3780ed.dyn_ltree[26] !== 0) {
        return _0x31afa6;
      }
      for (_0x4d2b9f = 32; _0x4d2b9f < _0x1423da; _0x4d2b9f++) {
        if (_0x3780ed.dyn_ltree[_0x4d2b9f * 2] !== 0) {
          return _0x31afa6;
        }
      }
      return _0x48b1bb;
    };
    let _0x40250c = false;
    const _0x3c8608 = (_0x2c9c39) => {
      if (!_0x40250c) {
        _0x55840b();
        _0x40250c = true;
      }
      _0x2c9c39.l_desc = new _0xbb02b7(_0x2c9c39.dyn_ltree, _0x340b7e);
      _0x2c9c39.d_desc = new _0xbb02b7(_0x2c9c39.dyn_dtree, _0x4ea778);
      _0x2c9c39.bl_desc = new _0xbb02b7(_0x2c9c39.bl_tree, _0x21768a);
      _0x2c9c39.bi_buf = 0;
      _0x2c9c39.bi_valid = 0;
      _0x4006dd(_0x2c9c39);
    };
    const _0x263e05 = (_0x5da6bb, _0x439407, _0x14a86a, _0xc77950) => {
      _0x6c0c26(_0x5da6bb, (_0x458aa9 << 1) + (_0xc77950 ? 1 : 0), 3);
      _0x366432(_0x5da6bb);
      _0x36d47f(_0x5da6bb, _0x14a86a);
      _0x36d47f(_0x5da6bb, ~_0x14a86a);
      if (_0x14a86a) {
        _0x5da6bb.pending_buf.set(_0x5da6bb.window.subarray(_0x439407, _0x439407 + _0x14a86a), _0x5da6bb.pending);
      }
      _0x5da6bb.pending += _0x14a86a;
    };
    const _0x4ec891 = (_0x4a1ea7) => {
      _0x6c0c26(_0x4a1ea7, _0x22fff7 << 1, 3);
      _0xd714d9(_0x4a1ea7, _0x2c08bb, _0x29de5f);
      _0x2de807(_0x4a1ea7);
    };
    const _0xb1da39 = (_0x1bf112, _0x28edb3, _0x597c0b, _0x5b79b3) => {
      let _0x2ef9e2;
      let _0x31aaf8;
      let _0x430045 = 0;
      if (_0x1bf112.level > 0) {
        if (_0x1bf112.strm.data_type === _0x335227) {
          _0x1bf112.strm.data_type = _0x5aa360(_0x1bf112);
        }
        _0x4444ef(_0x1bf112, _0x1bf112.l_desc);
        _0x4444ef(_0x1bf112, _0x1bf112.d_desc);
        _0x430045 = _0x2a800a(_0x1bf112);
        _0x2ef9e2 = _0x1bf112.opt_len + 3 + 7 >>> 3;
        _0x31aaf8 = _0x1bf112.static_len + 3 + 7 >>> 3;
        if (_0x31aaf8 <= _0x2ef9e2) {
          _0x2ef9e2 = _0x31aaf8;
        }
      } else {
        _0x2ef9e2 = _0x31aaf8 = _0x597c0b + 5;
      }
      if (_0x597c0b + 4 <= _0x2ef9e2 && _0x28edb3 !== -1) {
        _0x263e05(_0x1bf112, _0x28edb3, _0x597c0b, _0x5b79b3);
      } else if (_0x1bf112.strategy === _0x235965 || _0x31aaf8 === _0x2ef9e2) {
        _0x6c0c26(_0x1bf112, (_0x22fff7 << 1) + (_0x5b79b3 ? 1 : 0), 3);
        _0x423f8f(_0x1bf112, _0x29de5f, _0x683466);
      } else {
        _0x6c0c26(_0x1bf112, (_0x429337 << 1) + (_0x5b79b3 ? 1 : 0), 3);
        _0x5b194d(_0x1bf112, _0x1bf112.l_desc.max_code + 1, _0x1bf112.d_desc.max_code + 1, _0x430045 + 1);
        _0x423f8f(_0x1bf112, _0x1bf112.dyn_ltree, _0x1bf112.dyn_dtree);
      }
      _0x4006dd(_0x1bf112);
      if (_0x5b79b3) {
        _0x366432(_0x1bf112);
      }
    };
    const _0x266f4b = (_0x183aa2, _0x974cd4, _0x59429a) => {
      _0x183aa2.pending_buf[_0x183aa2.sym_buf + _0x183aa2.sym_next++] = _0x974cd4;
      _0x183aa2.pending_buf[_0x183aa2.sym_buf + _0x183aa2.sym_next++] = _0x974cd4 >> 8;
      _0x183aa2.pending_buf[_0x183aa2.sym_buf + _0x183aa2.sym_next++] = _0x59429a;
      if (_0x974cd4 === 0) {
        _0x183aa2.dyn_ltree[_0x59429a * 2]++;
      } else {
        _0x183aa2.matches++;
        _0x974cd4--;
        _0x183aa2.dyn_ltree[(_0x5d16ef[_0x59429a] + _0x1423da + 1) * 2]++;
        _0x183aa2.dyn_dtree[_0x5c155f(_0x974cd4) * 2]++;
      }
      return _0x183aa2.sym_next === _0x183aa2.sym_end;
    };
    var _0x381058 = _0x3c8608;
    var _0x43fed0 = _0x263e05;
    var _0x17ba42 = _0xb1da39;
    var _0x35a6fa = _0x266f4b;
    var _0x3b4712 = _0x4ec891;
    var _0x423051 = {
      _tr_init: _0x381058,
      _tr_stored_block: _0x43fed0,
      _tr_flush_block: _0x17ba42,
      _tr_tally: _0x35a6fa,
      _tr_align: _0x3b4712
    };
    var _0x28ea15 = _0x423051;
    const _0x15b0ce = (_0x281741, _0x54d9fb, _0x4f4a77, _0x946292) => {
      let _0x3bf742 = _0x281741 & 65535 | 0;
      let _0x47248c = _0x281741 >>> 16 & 65535 | 0;
      let _0x559adb = 0;
      while (_0x4f4a77 !== 0) {
        _0x559adb = _0x4f4a77 > 2e3 ? 2e3 : _0x4f4a77;
        _0x4f4a77 -= _0x559adb;
        do {
          _0x3bf742 = _0x3bf742 + _0x54d9fb[_0x946292++] | 0;
          _0x47248c = _0x47248c + _0x3bf742 | 0;
        } while (--_0x559adb);
        _0x3bf742 %= 65521;
        _0x47248c %= 65521;
      }
      return _0x3bf742 | _0x47248c << 16 | 0;
    };
    var _0x25ad47 = _0x15b0ce;
    const _0x10857f = () => {
      let _0x5b3bdf;
      let _0x5a8ecb = [];
      for (var _0x167c49 = 0; _0x167c49 < 256; _0x167c49++) {
        _0x5b3bdf = _0x167c49;
        for (var _0x439fbb = 0; _0x439fbb < 8; _0x439fbb++) {
          _0x5b3bdf = _0x5b3bdf & 1 ? _0x5b3bdf >>> 1 ^ -306674912 : _0x5b3bdf >>> 1;
        }
        _0x5a8ecb[_0x167c49] = _0x5b3bdf;
      }
      return _0x5a8ecb;
    };
    const _0x2ee75a = new Uint32Array(_0x10857f());
    const _0x19e178 = (_0x4f65d4, _0x2881b3, _0x135aa1, _0x222c0d) => {
      const _0x430846 = _0x2ee75a;
      const _0x4d77d9 = _0x222c0d + _0x135aa1;
      _0x4f65d4 ^= -1;
      for (let _0x1f2c6d = _0x222c0d; _0x1f2c6d < _0x4d77d9; _0x1f2c6d++) {
        _0x4f65d4 = _0x4f65d4 >>> 8 ^ _0x430846[(_0x4f65d4 ^ _0x2881b3[_0x1f2c6d]) & 255];
      }
      return _0x4f65d4 ^ -1;
    };
    var _0x410e97 = _0x19e178;
    var _0x702a02 = {
      "2": "need dictionary",
      "1": "stream end",
      "0": "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version"
    };
    var _0x3fed8d = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_MEM_ERROR: -4,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8
    };
    var _0x3726bc = _0x3fed8d;
    const {
      _tr_init: _0x364ce4,
      _tr_stored_block: _0x2e05ae,
      _tr_flush_block: _0x385298,
      _tr_tally: _0x51ae87,
      _tr_align: _0x4ce653
    } = _0x28ea15;
    const {
      Z_NO_FLUSH: _0x4cca88,
      Z_PARTIAL_FLUSH: _0x2a541e,
      Z_FULL_FLUSH: _0x3fd456,
      Z_FINISH: _0x2de1e0,
      Z_BLOCK: _0x54a692,
      Z_OK: _0x4059d5,
      Z_STREAM_END: _0x2efda0,
      Z_STREAM_ERROR: _0x447e1e,
      Z_DATA_ERROR: _0x364d25,
      Z_BUF_ERROR: _0x20e49c,
      Z_DEFAULT_COMPRESSION: _0x58f87c,
      Z_FILTERED: _0xf4a078,
      Z_HUFFMAN_ONLY: _0x36d6dd,
      Z_RLE: _0x2a31c3,
      Z_FIXED: _0x5c2616,
      Z_DEFAULT_STRATEGY: _0xfe3fce,
      Z_UNKNOWN: _0x29f91a,
      Z_DEFLATED: _0x3bd136
    } = _0x3726bc;
    const _0x52aece = 9;
    const _0x4f8355 = 15;
    const _0x48ead0 = 8;
    const _0x3823a0 = 29;
    const _0x321c9c = 256;
    const _0x1b48b5 = _0x321c9c + 1 + _0x3823a0;
    const _0x3aa749 = 30;
    const _0x44e144 = 19;
    const _0x41807f = _0x1b48b5 * 2 + 1;
    const _0x39914e = 15;
    const _0x2e6e91 = 3;
    const _0x547067 = 258;
    const _0x73b07c = _0x547067 + _0x2e6e91 + 1;
    const _0x2f6305 = 32;
    const _0x1f9c46 = 42;
    const _0x100953 = 57;
    const _0x4be66d = 69;
    const _0x189e33 = 73;
    const _0x5bfe8b = 91;
    const _0x5413c3 = 103;
    const _0x4f846c = 113;
    const _0x2266ff = 666;
    const _0x587c0b = 1;
    const _0x557dc4 = 2;
    const _0x28678c = 3;
    const _0x5341e6 = 4;
    const _0x546846 = 3;
    const _0x5873b4 = (_0x4c3d7c, _0x4b2ef4) => {
      _0x4c3d7c.msg = _0x702a02[_0x4b2ef4];
      return _0x4b2ef4;
    };
    const _0x15f6d0 = (_0x287e4c) => {
      return _0x287e4c * 2 - (_0x287e4c > 4 ? 9 : 0);
    };
    const _0x1b4dd7 = (_0x3bd40b) => {
      let _0x3ab9ef = _0x3bd40b.length;
      while (--_0x3ab9ef >= 0) {
        _0x3bd40b[_0x3ab9ef] = 0;
      }
    };
    const _0x48da66 = (_0x1acbfb) => {
      let _0x2c492a;
      let _0x556667;
      let _0x4c798b;
      let _0x226fbf = _0x1acbfb.w_size;
      _0x2c492a = _0x1acbfb.hash_size;
      _0x4c798b = _0x2c492a;
      do {
        _0x556667 = _0x1acbfb.head[--_0x4c798b];
        _0x1acbfb.head[_0x4c798b] = _0x556667 >= _0x226fbf ? _0x556667 - _0x226fbf : 0;
      } while (--_0x2c492a);
      _0x2c492a = _0x226fbf;
      _0x4c798b = _0x2c492a;
      do {
        _0x556667 = _0x1acbfb.prev[--_0x4c798b];
        _0x1acbfb.prev[_0x4c798b] = _0x556667 >= _0x226fbf ? _0x556667 - _0x226fbf : 0;
      } while (--_0x2c492a);
    };
    let _0x209a70 = (_0x3f9a24, _0x11ea58, _0x157344) => (_0x11ea58 << _0x3f9a24.hash_shift ^ _0x157344) & _0x3f9a24.hash_mask;
    let _0x31027a = _0x209a70;
    const _0x41bc6b = (_0x39e9eb) => {
      const _0x1f0a25 = _0x39e9eb.state;
      let _0xde25e2 = _0x1f0a25.pending;
      if (_0xde25e2 > _0x39e9eb.avail_out) {
        _0xde25e2 = _0x39e9eb.avail_out;
      }
      if (_0xde25e2 === 0) {
        return;
      }
      _0x39e9eb.output.set(_0x1f0a25.pending_buf.subarray(_0x1f0a25.pending_out, _0x1f0a25.pending_out + _0xde25e2), _0x39e9eb.next_out);
      _0x39e9eb.next_out += _0xde25e2;
      _0x1f0a25.pending_out += _0xde25e2;
      _0x39e9eb.total_out += _0xde25e2;
      _0x39e9eb.avail_out -= _0xde25e2;
      _0x1f0a25.pending -= _0xde25e2;
      if (_0x1f0a25.pending === 0) {
        _0x1f0a25.pending_out = 0;
      }
    };
    const _0x43025f = (_0x46cd87, _0x2c12d8) => {
      _0x385298(_0x46cd87, _0x46cd87.block_start >= 0 ? _0x46cd87.block_start : -1, _0x46cd87.strstart - _0x46cd87.block_start, _0x2c12d8);
      _0x46cd87.block_start = _0x46cd87.strstart;
      _0x41bc6b(_0x46cd87.strm);
    };
    const _0x21acbd = (_0x14fa90, _0x70a409) => {
      _0x14fa90.pending_buf[_0x14fa90.pending++] = _0x70a409;
    };
    const _0x4e87cd = (_0x27ba48, _0x2f9f7c) => {
      _0x27ba48.pending_buf[_0x27ba48.pending++] = _0x2f9f7c >>> 8 & 255;
      _0x27ba48.pending_buf[_0x27ba48.pending++] = _0x2f9f7c & 255;
    };
    const _0x4b9b4a = (_0x51dee7, _0xe414ce, _0x114828, _0x202fad) => {
      let _0x20cf4c = _0x51dee7.avail_in;
      if (_0x20cf4c > _0x202fad) {
        _0x20cf4c = _0x202fad;
      }
      if (_0x20cf4c === 0) {
        return 0;
      }
      _0x51dee7.avail_in -= _0x20cf4c;
      _0xe414ce.set(_0x51dee7.input.subarray(_0x51dee7.next_in, _0x51dee7.next_in + _0x20cf4c), _0x114828);
      if (_0x51dee7.state.wrap === 1) {
        _0x51dee7.adler = _0x25ad47(_0x51dee7.adler, _0xe414ce, _0x20cf4c, _0x114828);
      } else if (_0x51dee7.state.wrap === 2) {
        _0x51dee7.adler = _0x410e97(_0x51dee7.adler, _0xe414ce, _0x20cf4c, _0x114828);
      }
      _0x51dee7.next_in += _0x20cf4c;
      _0x51dee7.total_in += _0x20cf4c;
      return _0x20cf4c;
    };
    const _0x5742b0 = (_0x1cdb3e, _0x3c4376) => {
      let _0x5a45f0 = _0x1cdb3e.max_chain_length;
      let _0x5570e9 = _0x1cdb3e.strstart;
      let _0x3e79a5;
      let _0x4eb605;
      let _0xfadc5a = _0x1cdb3e.prev_length;
      let _0x3e5b00 = _0x1cdb3e.nice_match;
      const _0x59c6ca = _0x1cdb3e.strstart > _0x1cdb3e.w_size - _0x73b07c ? _0x1cdb3e.strstart - (_0x1cdb3e.w_size - _0x73b07c) : 0;
      const _0x50ab18 = _0x1cdb3e.window;
      const _0x3fb5e8 = _0x1cdb3e.w_mask;
      const _0x18cbe1 = _0x1cdb3e.prev;
      const _0x16d60b = _0x1cdb3e.strstart + _0x547067;
      let _0x25ab54 = _0x50ab18[_0x5570e9 + _0xfadc5a - 1];
      let _0x26a041 = _0x50ab18[_0x5570e9 + _0xfadc5a];
      if (_0x1cdb3e.prev_length >= _0x1cdb3e.good_match) {
        _0x5a45f0 >>= 2;
      }
      if (_0x3e5b00 > _0x1cdb3e.lookahead) {
        _0x3e5b00 = _0x1cdb3e.lookahead;
      }
      do {
        _0x3e79a5 = _0x3c4376;
        if (_0x50ab18[_0x3e79a5 + _0xfadc5a] !== _0x26a041 || _0x50ab18[_0x3e79a5 + _0xfadc5a - 1] !== _0x25ab54 || _0x50ab18[_0x3e79a5] !== _0x50ab18[_0x5570e9] || _0x50ab18[++_0x3e79a5] !== _0x50ab18[_0x5570e9 + 1]) {
          continue;
        }
        _0x5570e9 += 2;
        _0x3e79a5++;
        do {
        } while (_0x50ab18[++_0x5570e9] === _0x50ab18[++_0x3e79a5] && _0x50ab18[++_0x5570e9] === _0x50ab18[++_0x3e79a5] && _0x50ab18[++_0x5570e9] === _0x50ab18[++_0x3e79a5] && _0x50ab18[++_0x5570e9] === _0x50ab18[++_0x3e79a5] && _0x50ab18[++_0x5570e9] === _0x50ab18[++_0x3e79a5] && _0x50ab18[++_0x5570e9] === _0x50ab18[++_0x3e79a5] && _0x50ab18[++_0x5570e9] === _0x50ab18[++_0x3e79a5] && _0x50ab18[++_0x5570e9] === _0x50ab18[++_0x3e79a5] && _0x5570e9 < _0x16d60b);
        _0x4eb605 = _0x547067 - (_0x16d60b - _0x5570e9);
        _0x5570e9 = _0x16d60b - _0x547067;
        if (_0x4eb605 > _0xfadc5a) {
          _0x1cdb3e.match_start = _0x3c4376;
          _0xfadc5a = _0x4eb605;
          if (_0x4eb605 >= _0x3e5b00) {
            break;
          }
          _0x25ab54 = _0x50ab18[_0x5570e9 + _0xfadc5a - 1];
          _0x26a041 = _0x50ab18[_0x5570e9 + _0xfadc5a];
        }
      } while ((_0x3c4376 = _0x18cbe1[_0x3c4376 & _0x3fb5e8]) > _0x59c6ca && --_0x5a45f0 !== 0);
      if (_0xfadc5a <= _0x1cdb3e.lookahead) {
        return _0xfadc5a;
      }
      return _0x1cdb3e.lookahead;
    };
    const _0x5e090d = (_0x3d3bd2) => {
      const _0xcf6cc7 = _0x3d3bd2.w_size;
      let _0x13068b;
      let _0x264baf;
      let _0x47025a;
      do {
        _0x264baf = _0x3d3bd2.window_size - _0x3d3bd2.lookahead - _0x3d3bd2.strstart;
        if (_0x3d3bd2.strstart >= _0xcf6cc7 + (_0xcf6cc7 - _0x73b07c)) {
          _0x3d3bd2.window.set(_0x3d3bd2.window.subarray(_0xcf6cc7, _0xcf6cc7 + _0xcf6cc7 - _0x264baf), 0);
          _0x3d3bd2.match_start -= _0xcf6cc7;
          _0x3d3bd2.strstart -= _0xcf6cc7;
          _0x3d3bd2.block_start -= _0xcf6cc7;
          if (_0x3d3bd2.insert > _0x3d3bd2.strstart) {
            _0x3d3bd2.insert = _0x3d3bd2.strstart;
          }
          _0x48da66(_0x3d3bd2);
          _0x264baf += _0xcf6cc7;
        }
        if (_0x3d3bd2.strm.avail_in === 0) {
          break;
        }
        _0x13068b = _0x4b9b4a(_0x3d3bd2.strm, _0x3d3bd2.window, _0x3d3bd2.strstart + _0x3d3bd2.lookahead, _0x264baf);
        _0x3d3bd2.lookahead += _0x13068b;
        if (_0x3d3bd2.lookahead + _0x3d3bd2.insert >= _0x2e6e91) {
          _0x47025a = _0x3d3bd2.strstart - _0x3d3bd2.insert;
          _0x3d3bd2.ins_h = _0x3d3bd2.window[_0x47025a];
          _0x3d3bd2.ins_h = _0x31027a(_0x3d3bd2, _0x3d3bd2.ins_h, _0x3d3bd2.window[_0x47025a + 1]);
          while (_0x3d3bd2.insert) {
            _0x3d3bd2.ins_h = _0x31027a(_0x3d3bd2, _0x3d3bd2.ins_h, _0x3d3bd2.window[_0x47025a + _0x2e6e91 - 1]);
            _0x3d3bd2.prev[_0x47025a & _0x3d3bd2.w_mask] = _0x3d3bd2.head[_0x3d3bd2.ins_h];
            _0x3d3bd2.head[_0x3d3bd2.ins_h] = _0x47025a;
            _0x47025a++;
            _0x3d3bd2.insert--;
            if (_0x3d3bd2.lookahead + _0x3d3bd2.insert < _0x2e6e91) {
              break;
            }
          }
        }
      } while (_0x3d3bd2.lookahead < _0x73b07c && _0x3d3bd2.strm.avail_in !== 0);
    };
    const _0x23a855 = (_0x124877, _0x46a026) => {
      let _0x475f79 = _0x124877.pending_buf_size - 5 > _0x124877.w_size ? _0x124877.w_size : _0x124877.pending_buf_size - 5;
      let _0x1227f0;
      let _0xd18abf;
      let _0x56228c;
      let _0x1a0e50 = 0;
      let _0x3d84a9 = _0x124877.strm.avail_in;
      do {
        _0x1227f0 = 65535;
        _0x56228c = _0x124877.bi_valid + 42 >> 3;
        if (_0x124877.strm.avail_out < _0x56228c) {
          break;
        }
        _0x56228c = _0x124877.strm.avail_out - _0x56228c;
        _0xd18abf = _0x124877.strstart - _0x124877.block_start;
        if (_0x1227f0 > _0xd18abf + _0x124877.strm.avail_in) {
          _0x1227f0 = _0xd18abf + _0x124877.strm.avail_in;
        }
        if (_0x1227f0 > _0x56228c) {
          _0x1227f0 = _0x56228c;
        }
        if (_0x1227f0 < _0x475f79 && (_0x1227f0 === 0 && _0x46a026 !== _0x2de1e0 || _0x46a026 === _0x4cca88 || _0x1227f0 !== _0xd18abf + _0x124877.strm.avail_in)) {
          break;
        }
        _0x1a0e50 = _0x46a026 === _0x2de1e0 && _0x1227f0 === _0xd18abf + _0x124877.strm.avail_in ? 1 : 0;
        _0x2e05ae(_0x124877, 0, 0, _0x1a0e50);
        _0x124877.pending_buf[_0x124877.pending - 4] = _0x1227f0;
        _0x124877.pending_buf[_0x124877.pending - 3] = _0x1227f0 >> 8;
        _0x124877.pending_buf[_0x124877.pending - 2] = ~_0x1227f0;
        _0x124877.pending_buf[_0x124877.pending - 1] = ~_0x1227f0 >> 8;
        _0x41bc6b(_0x124877.strm);
        if (_0xd18abf) {
          if (_0xd18abf > _0x1227f0) {
            _0xd18abf = _0x1227f0;
          }
          _0x124877.strm.output.set(_0x124877.window.subarray(_0x124877.block_start, _0x124877.block_start + _0xd18abf), _0x124877.strm.next_out);
          _0x124877.strm.next_out += _0xd18abf;
          _0x124877.strm.avail_out -= _0xd18abf;
          _0x124877.strm.total_out += _0xd18abf;
          _0x124877.block_start += _0xd18abf;
          _0x1227f0 -= _0xd18abf;
        }
        if (_0x1227f0) {
          _0x4b9b4a(_0x124877.strm, _0x124877.strm.output, _0x124877.strm.next_out, _0x1227f0);
          _0x124877.strm.next_out += _0x1227f0;
          _0x124877.strm.avail_out -= _0x1227f0;
          _0x124877.strm.total_out += _0x1227f0;
        }
      } while (_0x1a0e50 === 0);
      _0x3d84a9 -= _0x124877.strm.avail_in;
      if (_0x3d84a9) {
        if (_0x3d84a9 >= _0x124877.w_size) {
          _0x124877.matches = 2;
          _0x124877.window.set(_0x124877.strm.input.subarray(_0x124877.strm.next_in - _0x124877.w_size, _0x124877.strm.next_in), 0);
          _0x124877.strstart = _0x124877.w_size;
          _0x124877.insert = _0x124877.strstart;
        } else {
          if (_0x124877.window_size - _0x124877.strstart <= _0x3d84a9) {
            _0x124877.strstart -= _0x124877.w_size;
            _0x124877.window.set(_0x124877.window.subarray(_0x124877.w_size, _0x124877.w_size + _0x124877.strstart), 0);
            if (_0x124877.matches < 2) {
              _0x124877.matches++;
            }
            if (_0x124877.insert > _0x124877.strstart) {
              _0x124877.insert = _0x124877.strstart;
            }
          }
          _0x124877.window.set(_0x124877.strm.input.subarray(_0x124877.strm.next_in - _0x3d84a9, _0x124877.strm.next_in), _0x124877.strstart);
          _0x124877.strstart += _0x3d84a9;
          _0x124877.insert += _0x3d84a9 > _0x124877.w_size - _0x124877.insert ? _0x124877.w_size - _0x124877.insert : _0x3d84a9;
        }
        _0x124877.block_start = _0x124877.strstart;
      }
      if (_0x124877.high_water < _0x124877.strstart) {
        _0x124877.high_water = _0x124877.strstart;
      }
      if (_0x1a0e50) {
        return _0x5341e6;
      }
      if (_0x46a026 !== _0x4cca88 && _0x46a026 !== _0x2de1e0 && _0x124877.strm.avail_in === 0 && _0x124877.strstart === _0x124877.block_start) {
        return _0x557dc4;
      }
      _0x56228c = _0x124877.window_size - _0x124877.strstart;
      if (_0x124877.strm.avail_in > _0x56228c && _0x124877.block_start >= _0x124877.w_size) {
        _0x124877.block_start -= _0x124877.w_size;
        _0x124877.strstart -= _0x124877.w_size;
        _0x124877.window.set(_0x124877.window.subarray(_0x124877.w_size, _0x124877.w_size + _0x124877.strstart), 0);
        if (_0x124877.matches < 2) {
          _0x124877.matches++;
        }
        _0x56228c += _0x124877.w_size;
        if (_0x124877.insert > _0x124877.strstart) {
          _0x124877.insert = _0x124877.strstart;
        }
      }
      if (_0x56228c > _0x124877.strm.avail_in) {
        _0x56228c = _0x124877.strm.avail_in;
      }
      if (_0x56228c) {
        _0x4b9b4a(_0x124877.strm, _0x124877.window, _0x124877.strstart, _0x56228c);
        _0x124877.strstart += _0x56228c;
        _0x124877.insert += _0x56228c > _0x124877.w_size - _0x124877.insert ? _0x124877.w_size - _0x124877.insert : _0x56228c;
      }
      if (_0x124877.high_water < _0x124877.strstart) {
        _0x124877.high_water = _0x124877.strstart;
      }
      _0x56228c = _0x124877.bi_valid + 42 >> 3;
      _0x56228c = _0x124877.pending_buf_size - _0x56228c > 65535 ? 65535 : _0x124877.pending_buf_size - _0x56228c;
      _0x475f79 = _0x56228c > _0x124877.w_size ? _0x124877.w_size : _0x56228c;
      _0xd18abf = _0x124877.strstart - _0x124877.block_start;
      if (_0xd18abf >= _0x475f79 || (_0xd18abf || _0x46a026 === _0x2de1e0) && _0x46a026 !== _0x4cca88 && _0x124877.strm.avail_in === 0 && _0xd18abf <= _0x56228c) {
        _0x1227f0 = _0xd18abf > _0x56228c ? _0x56228c : _0xd18abf;
        _0x1a0e50 = _0x46a026 === _0x2de1e0 && _0x124877.strm.avail_in === 0 && _0x1227f0 === _0xd18abf ? 1 : 0;
        _0x2e05ae(_0x124877, _0x124877.block_start, _0x1227f0, _0x1a0e50);
        _0x124877.block_start += _0x1227f0;
        _0x41bc6b(_0x124877.strm);
      }
      if (_0x1a0e50) {
        return _0x28678c;
      } else {
        return _0x587c0b;
      }
    };
    const _0x55cd9b = (_0x317c8d, _0x43f659) => {
      let _0x25d5ca;
      let _0x2a71be;
      while (true) {
        if (_0x317c8d.lookahead < _0x73b07c) {
          _0x5e090d(_0x317c8d);
          if (_0x317c8d.lookahead < _0x73b07c && _0x43f659 === _0x4cca88) {
            return _0x587c0b;
          }
          if (_0x317c8d.lookahead === 0) {
            break;
          }
        }
        _0x25d5ca = 0;
        if (_0x317c8d.lookahead >= _0x2e6e91) {
          _0x317c8d.ins_h = _0x31027a(_0x317c8d, _0x317c8d.ins_h, _0x317c8d.window[_0x317c8d.strstart + _0x2e6e91 - 1]);
          _0x25d5ca = _0x317c8d.prev[_0x317c8d.strstart & _0x317c8d.w_mask] = _0x317c8d.head[_0x317c8d.ins_h];
          _0x317c8d.head[_0x317c8d.ins_h] = _0x317c8d.strstart;
        }
        if (_0x25d5ca !== 0 && _0x317c8d.strstart - _0x25d5ca <= _0x317c8d.w_size - _0x73b07c) {
          _0x317c8d.match_length = _0x5742b0(_0x317c8d, _0x25d5ca);
        }
        if (_0x317c8d.match_length >= _0x2e6e91) {
          _0x2a71be = _0x51ae87(_0x317c8d, _0x317c8d.strstart - _0x317c8d.match_start, _0x317c8d.match_length - _0x2e6e91);
          _0x317c8d.lookahead -= _0x317c8d.match_length;
          if (_0x317c8d.match_length <= _0x317c8d.max_lazy_match && _0x317c8d.lookahead >= _0x2e6e91) {
            _0x317c8d.match_length--;
            do {
              _0x317c8d.strstart++;
              _0x317c8d.ins_h = _0x31027a(_0x317c8d, _0x317c8d.ins_h, _0x317c8d.window[_0x317c8d.strstart + _0x2e6e91 - 1]);
              _0x25d5ca = _0x317c8d.prev[_0x317c8d.strstart & _0x317c8d.w_mask] = _0x317c8d.head[_0x317c8d.ins_h];
              _0x317c8d.head[_0x317c8d.ins_h] = _0x317c8d.strstart;
            } while (--_0x317c8d.match_length !== 0);
            _0x317c8d.strstart++;
          } else {
            _0x317c8d.strstart += _0x317c8d.match_length;
            _0x317c8d.match_length = 0;
            _0x317c8d.ins_h = _0x317c8d.window[_0x317c8d.strstart];
            _0x317c8d.ins_h = _0x31027a(_0x317c8d, _0x317c8d.ins_h, _0x317c8d.window[_0x317c8d.strstart + 1]);
          }
        } else {
          _0x2a71be = _0x51ae87(_0x317c8d, 0, _0x317c8d.window[_0x317c8d.strstart]);
          _0x317c8d.lookahead--;
          _0x317c8d.strstart++;
        }
        if (_0x2a71be) {
          _0x43025f(_0x317c8d, false);
          if (_0x317c8d.strm.avail_out === 0) {
            return _0x587c0b;
          }
        }
      }
      _0x317c8d.insert = _0x317c8d.strstart < _0x2e6e91 - 1 ? _0x317c8d.strstart : _0x2e6e91 - 1;
      if (_0x43f659 === _0x2de1e0) {
        _0x43025f(_0x317c8d, true);
        if (_0x317c8d.strm.avail_out === 0) {
          return _0x28678c;
        }
        return _0x5341e6;
      }
      if (_0x317c8d.sym_next) {
        _0x43025f(_0x317c8d, false);
        if (_0x317c8d.strm.avail_out === 0) {
          return _0x587c0b;
        }
      }
      return _0x557dc4;
    };
    const _0x534ee1 = (_0x286f55, _0x4fc2a5) => {
      let _0x335c59;
      let _0x5adac6;
      let _0xd1a563;
      while (true) {
        if (_0x286f55.lookahead < _0x73b07c) {
          _0x5e090d(_0x286f55);
          if (_0x286f55.lookahead < _0x73b07c && _0x4fc2a5 === _0x4cca88) {
            return _0x587c0b;
          }
          if (_0x286f55.lookahead === 0) {
            break;
          }
        }
        _0x335c59 = 0;
        if (_0x286f55.lookahead >= _0x2e6e91) {
          _0x286f55.ins_h = _0x31027a(_0x286f55, _0x286f55.ins_h, _0x286f55.window[_0x286f55.strstart + _0x2e6e91 - 1]);
          _0x335c59 = _0x286f55.prev[_0x286f55.strstart & _0x286f55.w_mask] = _0x286f55.head[_0x286f55.ins_h];
          _0x286f55.head[_0x286f55.ins_h] = _0x286f55.strstart;
        }
        _0x286f55.prev_length = _0x286f55.match_length;
        _0x286f55.prev_match = _0x286f55.match_start;
        _0x286f55.match_length = _0x2e6e91 - 1;
        if (_0x335c59 !== 0 && _0x286f55.prev_length < _0x286f55.max_lazy_match && _0x286f55.strstart - _0x335c59 <= _0x286f55.w_size - _0x73b07c) {
          _0x286f55.match_length = _0x5742b0(_0x286f55, _0x335c59);
          if (_0x286f55.match_length <= 5 && (_0x286f55.strategy === _0xf4a078 || _0x286f55.match_length === _0x2e6e91 && _0x286f55.strstart - _0x286f55.match_start > 4096)) {
            _0x286f55.match_length = _0x2e6e91 - 1;
          }
        }
        if (_0x286f55.prev_length >= _0x2e6e91 && _0x286f55.match_length <= _0x286f55.prev_length) {
          _0xd1a563 = _0x286f55.strstart + _0x286f55.lookahead - _0x2e6e91;
          _0x5adac6 = _0x51ae87(_0x286f55, _0x286f55.strstart - 1 - _0x286f55.prev_match, _0x286f55.prev_length - _0x2e6e91);
          _0x286f55.lookahead -= _0x286f55.prev_length - 1;
          _0x286f55.prev_length -= 2;
          do {
            if (++_0x286f55.strstart <= _0xd1a563) {
              _0x286f55.ins_h = _0x31027a(_0x286f55, _0x286f55.ins_h, _0x286f55.window[_0x286f55.strstart + _0x2e6e91 - 1]);
              _0x335c59 = _0x286f55.prev[_0x286f55.strstart & _0x286f55.w_mask] = _0x286f55.head[_0x286f55.ins_h];
              _0x286f55.head[_0x286f55.ins_h] = _0x286f55.strstart;
            }
          } while (--_0x286f55.prev_length !== 0);
          _0x286f55.match_available = 0;
          _0x286f55.match_length = _0x2e6e91 - 1;
          _0x286f55.strstart++;
          if (_0x5adac6) {
            _0x43025f(_0x286f55, false);
            if (_0x286f55.strm.avail_out === 0) {
              return _0x587c0b;
            }
          }
        } else if (_0x286f55.match_available) {
          _0x5adac6 = _0x51ae87(_0x286f55, 0, _0x286f55.window[_0x286f55.strstart - 1]);
          if (_0x5adac6) {
            _0x43025f(_0x286f55, false);
          }
          _0x286f55.strstart++;
          _0x286f55.lookahead--;
          if (_0x286f55.strm.avail_out === 0) {
            return _0x587c0b;
          }
        } else {
          _0x286f55.match_available = 1;
          _0x286f55.strstart++;
          _0x286f55.lookahead--;
        }
      }
      if (_0x286f55.match_available) {
        _0x5adac6 = _0x51ae87(_0x286f55, 0, _0x286f55.window[_0x286f55.strstart - 1]);
        _0x286f55.match_available = 0;
      }
      _0x286f55.insert = _0x286f55.strstart < _0x2e6e91 - 1 ? _0x286f55.strstart : _0x2e6e91 - 1;
      if (_0x4fc2a5 === _0x2de1e0) {
        _0x43025f(_0x286f55, true);
        if (_0x286f55.strm.avail_out === 0) {
          return _0x28678c;
        }
        return _0x5341e6;
      }
      if (_0x286f55.sym_next) {
        _0x43025f(_0x286f55, false);
        if (_0x286f55.strm.avail_out === 0) {
          return _0x587c0b;
        }
      }
      return _0x557dc4;
    };
    const _0x5cfa0e = (_0x8e818c, _0x39cb45) => {
      let _0x50a5c9;
      let _0x14ca64;
      let _0x13cb32;
      let _0x45ab25;
      const _0x387f47 = _0x8e818c.window;
      while (true) {
        if (_0x8e818c.lookahead <= _0x547067) {
          _0x5e090d(_0x8e818c);
          if (_0x8e818c.lookahead <= _0x547067 && _0x39cb45 === _0x4cca88) {
            return _0x587c0b;
          }
          if (_0x8e818c.lookahead === 0) {
            break;
          }
        }
        _0x8e818c.match_length = 0;
        if (_0x8e818c.lookahead >= _0x2e6e91 && _0x8e818c.strstart > 0) {
          _0x13cb32 = _0x8e818c.strstart - 1;
          _0x14ca64 = _0x387f47[_0x13cb32];
          if (_0x14ca64 === _0x387f47[++_0x13cb32] && _0x14ca64 === _0x387f47[++_0x13cb32] && _0x14ca64 === _0x387f47[++_0x13cb32]) {
            _0x45ab25 = _0x8e818c.strstart + _0x547067;
            do {
            } while (_0x14ca64 === _0x387f47[++_0x13cb32] && _0x14ca64 === _0x387f47[++_0x13cb32] && _0x14ca64 === _0x387f47[++_0x13cb32] && _0x14ca64 === _0x387f47[++_0x13cb32] && _0x14ca64 === _0x387f47[++_0x13cb32] && _0x14ca64 === _0x387f47[++_0x13cb32] && _0x14ca64 === _0x387f47[++_0x13cb32] && _0x14ca64 === _0x387f47[++_0x13cb32] && _0x13cb32 < _0x45ab25);
            _0x8e818c.match_length = _0x547067 - (_0x45ab25 - _0x13cb32);
            if (_0x8e818c.match_length > _0x8e818c.lookahead) {
              _0x8e818c.match_length = _0x8e818c.lookahead;
            }
          }
        }
        if (_0x8e818c.match_length >= _0x2e6e91) {
          _0x50a5c9 = _0x51ae87(_0x8e818c, 1, _0x8e818c.match_length - _0x2e6e91);
          _0x8e818c.lookahead -= _0x8e818c.match_length;
          _0x8e818c.strstart += _0x8e818c.match_length;
          _0x8e818c.match_length = 0;
        } else {
          _0x50a5c9 = _0x51ae87(_0x8e818c, 0, _0x8e818c.window[_0x8e818c.strstart]);
          _0x8e818c.lookahead--;
          _0x8e818c.strstart++;
        }
        if (_0x50a5c9) {
          _0x43025f(_0x8e818c, false);
          if (_0x8e818c.strm.avail_out === 0) {
            return _0x587c0b;
          }
        }
      }
      _0x8e818c.insert = 0;
      if (_0x39cb45 === _0x2de1e0) {
        _0x43025f(_0x8e818c, true);
        if (_0x8e818c.strm.avail_out === 0) {
          return _0x28678c;
        }
        return _0x5341e6;
      }
      if (_0x8e818c.sym_next) {
        _0x43025f(_0x8e818c, false);
        if (_0x8e818c.strm.avail_out === 0) {
          return _0x587c0b;
        }
      }
      return _0x557dc4;
    };
    const _0xb9624e = (_0x4d8d2e, _0xb8adde) => {
      let _0x3819b3;
      while (true) {
        if (_0x4d8d2e.lookahead === 0) {
          _0x5e090d(_0x4d8d2e);
          if (_0x4d8d2e.lookahead === 0) {
            if (_0xb8adde === _0x4cca88) {
              return _0x587c0b;
            }
            break;
          }
        }
        _0x4d8d2e.match_length = 0;
        _0x3819b3 = _0x51ae87(_0x4d8d2e, 0, _0x4d8d2e.window[_0x4d8d2e.strstart]);
        _0x4d8d2e.lookahead--;
        _0x4d8d2e.strstart++;
        if (_0x3819b3) {
          _0x43025f(_0x4d8d2e, false);
          if (_0x4d8d2e.strm.avail_out === 0) {
            return _0x587c0b;
          }
        }
      }
      _0x4d8d2e.insert = 0;
      if (_0xb8adde === _0x2de1e0) {
        _0x43025f(_0x4d8d2e, true);
        if (_0x4d8d2e.strm.avail_out === 0) {
          return _0x28678c;
        }
        return _0x5341e6;
      }
      if (_0x4d8d2e.sym_next) {
        _0x43025f(_0x4d8d2e, false);
        if (_0x4d8d2e.strm.avail_out === 0) {
          return _0x587c0b;
        }
      }
      return _0x557dc4;
    };
    function _0x3ad16e(_0x273883, _0x329d50, _0x34e0a1, _0x2abca3, _0x1163c8) {
      this.good_length = _0x273883;
      this.max_lazy = _0x329d50;
      this.nice_length = _0x34e0a1;
      this.max_chain = _0x2abca3;
      this.func = _0x1163c8;
    }
    const _0x4323ef = [new _0x3ad16e(0, 0, 0, 0, _0x23a855), new _0x3ad16e(4, 4, 8, 4, _0x55cd9b), new _0x3ad16e(4, 5, 16, 8, _0x55cd9b), new _0x3ad16e(4, 6, 32, 32, _0x55cd9b), new _0x3ad16e(4, 4, 16, 16, _0x534ee1), new _0x3ad16e(8, 16, 32, 32, _0x534ee1), new _0x3ad16e(8, 16, 128, 128, _0x534ee1), new _0x3ad16e(8, 32, 128, 256, _0x534ee1), new _0x3ad16e(32, 128, 258, 1024, _0x534ee1), new _0x3ad16e(32, 258, 258, 4096, _0x534ee1)];
    const _0x225bf0 = (_0x2bb84f) => {
      _0x2bb84f.window_size = _0x2bb84f.w_size * 2;
      _0x1b4dd7(_0x2bb84f.head);
      _0x2bb84f.max_lazy_match = _0x4323ef[_0x2bb84f.level].max_lazy;
      _0x2bb84f.good_match = _0x4323ef[_0x2bb84f.level].good_length;
      _0x2bb84f.nice_match = _0x4323ef[_0x2bb84f.level].nice_length;
      _0x2bb84f.max_chain_length = _0x4323ef[_0x2bb84f.level].max_chain;
      _0x2bb84f.strstart = 0;
      _0x2bb84f.block_start = 0;
      _0x2bb84f.lookahead = 0;
      _0x2bb84f.insert = 0;
      _0x2bb84f.match_length = _0x2bb84f.prev_length = _0x2e6e91 - 1;
      _0x2bb84f.match_available = 0;
      _0x2bb84f.ins_h = 0;
    };
    function _0x168821() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = _0x3bd136;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new Uint16Array(_0x41807f * 2);
      this.dyn_dtree = new Uint16Array((_0x3aa749 * 2 + 1) * 2);
      this.bl_tree = new Uint16Array((_0x44e144 * 2 + 1) * 2);
      _0x1b4dd7(this.dyn_ltree);
      _0x1b4dd7(this.dyn_dtree);
      _0x1b4dd7(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(_0x39914e + 1);
      this.heap = new Uint16Array(_0x1b48b5 * 2 + 1);
      _0x1b4dd7(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(_0x1b48b5 * 2 + 1);
      _0x1b4dd7(this.depth);
      this.sym_buf = 0;
      this.lit_bufsize = 0;
      this.sym_next = 0;
      this.sym_end = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    const _0x5e2132 = (_0x4e2cf2) => {
      if (!_0x4e2cf2) {
        return 1;
      }
      const _0x51488d = _0x4e2cf2.state;
      if (!_0x51488d || _0x51488d.strm !== _0x4e2cf2 || _0x51488d.status !== _0x1f9c46 && _0x51488d.status !== _0x100953 && _0x51488d.status !== _0x4be66d && _0x51488d.status !== _0x189e33 && _0x51488d.status !== _0x5bfe8b && _0x51488d.status !== _0x5413c3 && _0x51488d.status !== _0x4f846c && _0x51488d.status !== _0x2266ff) {
        return 1;
      }
      return 0;
    };
    const _0x32ebc2 = (_0x56c483) => {
      if (_0x5e2132(_0x56c483)) {
        return _0x5873b4(_0x56c483, _0x447e1e);
      }
      _0x56c483.total_in = _0x56c483.total_out = 0;
      _0x56c483.data_type = _0x29f91a;
      const _0x50b966 = _0x56c483.state;
      _0x50b966.pending = 0;
      _0x50b966.pending_out = 0;
      if (_0x50b966.wrap < 0) {
        _0x50b966.wrap = -_0x50b966.wrap;
      }
      _0x50b966.status = _0x50b966.wrap === 2 ? _0x100953 : _0x50b966.wrap ? _0x1f9c46 : _0x4f846c;
      _0x56c483.adler = _0x50b966.wrap === 2 ? 0 : 1;
      _0x50b966.last_flush = -2;
      _0x364ce4(_0x50b966);
      return _0x4059d5;
    };
    const _0x5e4d96 = (_0x33de00) => {
      const _0xba3f28 = _0x32ebc2(_0x33de00);
      if (_0xba3f28 === _0x4059d5) {
        _0x225bf0(_0x33de00.state);
      }
      return _0xba3f28;
    };
    const _0x18a3cf = (_0x567e4d, _0x56b692) => {
      if (_0x5e2132(_0x567e4d) || _0x567e4d.state.wrap !== 2) {
        return _0x447e1e;
      }
      _0x567e4d.state.gzhead = _0x56b692;
      return _0x4059d5;
    };
    const _0x4da54b = (_0x4ee845, _0x1a2989, _0x294dcf, _0x3ce38f, _0x54fa1a, _0x580763) => {
      if (!_0x4ee845) {
        return _0x447e1e;
      }
      let _0x4cdb30 = 1;
      if (_0x1a2989 === _0x58f87c) {
        _0x1a2989 = 6;
      }
      if (_0x3ce38f < 0) {
        _0x4cdb30 = 0;
        _0x3ce38f = -_0x3ce38f;
      } else if (_0x3ce38f > 15) {
        _0x4cdb30 = 2;
        _0x3ce38f -= 16;
      }
      if (_0x54fa1a < 1 || _0x54fa1a > _0x52aece || _0x294dcf !== _0x3bd136 || _0x3ce38f < 8 || _0x3ce38f > 15 || _0x1a2989 < 0 || _0x1a2989 > 9 || _0x580763 < 0 || _0x580763 > _0x5c2616 || _0x3ce38f === 8 && _0x4cdb30 !== 1) {
        return _0x5873b4(_0x4ee845, _0x447e1e);
      }
      if (_0x3ce38f === 8) {
        _0x3ce38f = 9;
      }
      const _0x651acc = new _0x168821();
      _0x4ee845.state = _0x651acc;
      _0x651acc.strm = _0x4ee845;
      _0x651acc.status = _0x1f9c46;
      _0x651acc.wrap = _0x4cdb30;
      _0x651acc.gzhead = null;
      _0x651acc.w_bits = _0x3ce38f;
      _0x651acc.w_size = 1 << _0x651acc.w_bits;
      _0x651acc.w_mask = _0x651acc.w_size - 1;
      _0x651acc.hash_bits = _0x54fa1a + 7;
      _0x651acc.hash_size = 1 << _0x651acc.hash_bits;
      _0x651acc.hash_mask = _0x651acc.hash_size - 1;
      _0x651acc.hash_shift = ~~((_0x651acc.hash_bits + _0x2e6e91 - 1) / _0x2e6e91);
      _0x651acc.window = new Uint8Array(_0x651acc.w_size * 2);
      _0x651acc.head = new Uint16Array(_0x651acc.hash_size);
      _0x651acc.prev = new Uint16Array(_0x651acc.w_size);
      _0x651acc.lit_bufsize = 1 << _0x54fa1a + 6;
      _0x651acc.pending_buf_size = _0x651acc.lit_bufsize * 4;
      _0x651acc.pending_buf = new Uint8Array(_0x651acc.pending_buf_size);
      _0x651acc.sym_buf = _0x651acc.lit_bufsize;
      _0x651acc.sym_end = (_0x651acc.lit_bufsize - 1) * 3;
      _0x651acc.level = _0x1a2989;
      _0x651acc.strategy = _0x580763;
      _0x651acc.method = _0x294dcf;
      return _0x5e4d96(_0x4ee845);
    };
    const _0x4dcab2 = (_0x1c0240, _0x278af1) => {
      return _0x4da54b(_0x1c0240, _0x278af1, _0x3bd136, _0x4f8355, _0x48ead0, _0xfe3fce);
    };
    const _0x517a8b = (_0x583dcd, _0x2d2228) => {
      if (_0x5e2132(_0x583dcd) || _0x2d2228 > _0x54a692 || _0x2d2228 < 0) {
        if (_0x583dcd) {
          return _0x5873b4(_0x583dcd, _0x447e1e);
        } else {
          return _0x447e1e;
        }
      }
      const _0x2b9a25 = _0x583dcd.state;
      if (!_0x583dcd.output || _0x583dcd.avail_in !== 0 && !_0x583dcd.input || _0x2b9a25.status === _0x2266ff && _0x2d2228 !== _0x2de1e0) {
        return _0x5873b4(_0x583dcd, _0x583dcd.avail_out === 0 ? _0x20e49c : _0x447e1e);
      }
      const _0x160220 = _0x2b9a25.last_flush;
      _0x2b9a25.last_flush = _0x2d2228;
      if (_0x2b9a25.pending !== 0) {
        _0x41bc6b(_0x583dcd);
        if (_0x583dcd.avail_out === 0) {
          _0x2b9a25.last_flush = -1;
          return _0x4059d5;
        }
      } else if (_0x583dcd.avail_in === 0 && _0x15f6d0(_0x2d2228) <= _0x15f6d0(_0x160220) && _0x2d2228 !== _0x2de1e0) {
        return _0x5873b4(_0x583dcd, _0x20e49c);
      }
      if (_0x2b9a25.status === _0x2266ff && _0x583dcd.avail_in !== 0) {
        return _0x5873b4(_0x583dcd, _0x20e49c);
      }
      if (_0x2b9a25.status === _0x1f9c46 && _0x2b9a25.wrap === 0) {
        _0x2b9a25.status = _0x4f846c;
      }
      if (_0x2b9a25.status === _0x1f9c46) {
        let _0x368341 = _0x3bd136 + (_0x2b9a25.w_bits - 8 << 4) << 8;
        let _0x643cfb = -1;
        if (_0x2b9a25.strategy >= _0x36d6dd || _0x2b9a25.level < 2) {
          _0x643cfb = 0;
        } else if (_0x2b9a25.level < 6) {
          _0x643cfb = 1;
        } else if (_0x2b9a25.level === 6) {
          _0x643cfb = 2;
        } else {
          _0x643cfb = 3;
        }
        _0x368341 |= _0x643cfb << 6;
        if (_0x2b9a25.strstart !== 0) {
          _0x368341 |= _0x2f6305;
        }
        _0x368341 += 31 - _0x368341 % 31;
        _0x4e87cd(_0x2b9a25, _0x368341);
        if (_0x2b9a25.strstart !== 0) {
          _0x4e87cd(_0x2b9a25, _0x583dcd.adler >>> 16);
          _0x4e87cd(_0x2b9a25, _0x583dcd.adler & 65535);
        }
        _0x583dcd.adler = 1;
        _0x2b9a25.status = _0x4f846c;
        _0x41bc6b(_0x583dcd);
        if (_0x2b9a25.pending !== 0) {
          _0x2b9a25.last_flush = -1;
          return _0x4059d5;
        }
      }
      if (_0x2b9a25.status === _0x100953) {
        _0x583dcd.adler = 0;
        _0x21acbd(_0x2b9a25, 31);
        _0x21acbd(_0x2b9a25, 139);
        _0x21acbd(_0x2b9a25, 8);
        if (!_0x2b9a25.gzhead) {
          _0x21acbd(_0x2b9a25, 0);
          _0x21acbd(_0x2b9a25, 0);
          _0x21acbd(_0x2b9a25, 0);
          _0x21acbd(_0x2b9a25, 0);
          _0x21acbd(_0x2b9a25, 0);
          _0x21acbd(_0x2b9a25, _0x2b9a25.level === 9 ? 2 : _0x2b9a25.strategy >= _0x36d6dd || _0x2b9a25.level < 2 ? 4 : 0);
          _0x21acbd(_0x2b9a25, _0x546846);
          _0x2b9a25.status = _0x4f846c;
          _0x41bc6b(_0x583dcd);
          if (_0x2b9a25.pending !== 0) {
            _0x2b9a25.last_flush = -1;
            return _0x4059d5;
          }
        } else {
          _0x21acbd(_0x2b9a25, (_0x2b9a25.gzhead.text ? 1 : 0) + (_0x2b9a25.gzhead.hcrc ? 2 : 0) + (!_0x2b9a25.gzhead.extra ? 0 : 4) + (!_0x2b9a25.gzhead.name ? 0 : 8) + (!_0x2b9a25.gzhead.comment ? 0 : 16));
          _0x21acbd(_0x2b9a25, _0x2b9a25.gzhead.time & 255);
          _0x21acbd(_0x2b9a25, _0x2b9a25.gzhead.time >> 8 & 255);
          _0x21acbd(_0x2b9a25, _0x2b9a25.gzhead.time >> 16 & 255);
          _0x21acbd(_0x2b9a25, _0x2b9a25.gzhead.time >> 24 & 255);
          _0x21acbd(_0x2b9a25, _0x2b9a25.level === 9 ? 2 : _0x2b9a25.strategy >= _0x36d6dd || _0x2b9a25.level < 2 ? 4 : 0);
          _0x21acbd(_0x2b9a25, _0x2b9a25.gzhead.os & 255);
          if (_0x2b9a25.gzhead.extra && _0x2b9a25.gzhead.extra.length) {
            _0x21acbd(_0x2b9a25, _0x2b9a25.gzhead.extra.length & 255);
            _0x21acbd(_0x2b9a25, _0x2b9a25.gzhead.extra.length >> 8 & 255);
          }
          if (_0x2b9a25.gzhead.hcrc) {
            _0x583dcd.adler = _0x410e97(_0x583dcd.adler, _0x2b9a25.pending_buf, _0x2b9a25.pending, 0);
          }
          _0x2b9a25.gzindex = 0;
          _0x2b9a25.status = _0x4be66d;
        }
      }
      if (_0x2b9a25.status === _0x4be66d) {
        if (_0x2b9a25.gzhead.extra) {
          let _0x5f4bfe = _0x2b9a25.pending;
          let _0x221468 = (_0x2b9a25.gzhead.extra.length & 65535) - _0x2b9a25.gzindex;
          while (_0x2b9a25.pending + _0x221468 > _0x2b9a25.pending_buf_size) {
            let _0x27574c = _0x2b9a25.pending_buf_size - _0x2b9a25.pending;
            _0x2b9a25.pending_buf.set(_0x2b9a25.gzhead.extra.subarray(_0x2b9a25.gzindex, _0x2b9a25.gzindex + _0x27574c), _0x2b9a25.pending);
            _0x2b9a25.pending = _0x2b9a25.pending_buf_size;
            if (_0x2b9a25.gzhead.hcrc && _0x2b9a25.pending > _0x5f4bfe) {
              _0x583dcd.adler = _0x410e97(_0x583dcd.adler, _0x2b9a25.pending_buf, _0x2b9a25.pending - _0x5f4bfe, _0x5f4bfe);
            }
            _0x2b9a25.gzindex += _0x27574c;
            _0x41bc6b(_0x583dcd);
            if (_0x2b9a25.pending !== 0) {
              _0x2b9a25.last_flush = -1;
              return _0x4059d5;
            }
            _0x5f4bfe = 0;
            _0x221468 -= _0x27574c;
          }
          let _0x3ab672 = new Uint8Array(_0x2b9a25.gzhead.extra);
          _0x2b9a25.pending_buf.set(_0x3ab672.subarray(_0x2b9a25.gzindex, _0x2b9a25.gzindex + _0x221468), _0x2b9a25.pending);
          _0x2b9a25.pending += _0x221468;
          if (_0x2b9a25.gzhead.hcrc && _0x2b9a25.pending > _0x5f4bfe) {
            _0x583dcd.adler = _0x410e97(_0x583dcd.adler, _0x2b9a25.pending_buf, _0x2b9a25.pending - _0x5f4bfe, _0x5f4bfe);
          }
          _0x2b9a25.gzindex = 0;
        }
        _0x2b9a25.status = _0x189e33;
      }
      if (_0x2b9a25.status === _0x189e33) {
        if (_0x2b9a25.gzhead.name) {
          let _0x4d80d6 = _0x2b9a25.pending;
          let _0x52bc39;
          do {
            if (_0x2b9a25.pending === _0x2b9a25.pending_buf_size) {
              if (_0x2b9a25.gzhead.hcrc && _0x2b9a25.pending > _0x4d80d6) {
                _0x583dcd.adler = _0x410e97(_0x583dcd.adler, _0x2b9a25.pending_buf, _0x2b9a25.pending - _0x4d80d6, _0x4d80d6);
              }
              _0x41bc6b(_0x583dcd);
              if (_0x2b9a25.pending !== 0) {
                _0x2b9a25.last_flush = -1;
                return _0x4059d5;
              }
              _0x4d80d6 = 0;
            }
            if (_0x2b9a25.gzindex < _0x2b9a25.gzhead.name.length) {
              _0x52bc39 = _0x2b9a25.gzhead.name.charCodeAt(_0x2b9a25.gzindex++) & 255;
            } else {
              _0x52bc39 = 0;
            }
            _0x21acbd(_0x2b9a25, _0x52bc39);
          } while (_0x52bc39 !== 0);
          if (_0x2b9a25.gzhead.hcrc && _0x2b9a25.pending > _0x4d80d6) {
            _0x583dcd.adler = _0x410e97(_0x583dcd.adler, _0x2b9a25.pending_buf, _0x2b9a25.pending - _0x4d80d6, _0x4d80d6);
          }
          _0x2b9a25.gzindex = 0;
        }
        _0x2b9a25.status = _0x5bfe8b;
      }
      if (_0x2b9a25.status === _0x5bfe8b) {
        if (_0x2b9a25.gzhead.comment) {
          let _0x3f6e12 = _0x2b9a25.pending;
          let _0x1d38d3;
          do {
            if (_0x2b9a25.pending === _0x2b9a25.pending_buf_size) {
              if (_0x2b9a25.gzhead.hcrc && _0x2b9a25.pending > _0x3f6e12) {
                _0x583dcd.adler = _0x410e97(_0x583dcd.adler, _0x2b9a25.pending_buf, _0x2b9a25.pending - _0x3f6e12, _0x3f6e12);
              }
              _0x41bc6b(_0x583dcd);
              if (_0x2b9a25.pending !== 0) {
                _0x2b9a25.last_flush = -1;
                return _0x4059d5;
              }
              _0x3f6e12 = 0;
            }
            if (_0x2b9a25.gzindex < _0x2b9a25.gzhead.comment.length) {
              _0x1d38d3 = _0x2b9a25.gzhead.comment.charCodeAt(_0x2b9a25.gzindex++) & 255;
            } else {
              _0x1d38d3 = 0;
            }
            _0x21acbd(_0x2b9a25, _0x1d38d3);
          } while (_0x1d38d3 !== 0);
          if (_0x2b9a25.gzhead.hcrc && _0x2b9a25.pending > _0x3f6e12) {
            _0x583dcd.adler = _0x410e97(_0x583dcd.adler, _0x2b9a25.pending_buf, _0x2b9a25.pending - _0x3f6e12, _0x3f6e12);
          }
        }
        _0x2b9a25.status = _0x5413c3;
      }
      if (_0x2b9a25.status === _0x5413c3) {
        if (_0x2b9a25.gzhead.hcrc) {
          if (_0x2b9a25.pending + 2 > _0x2b9a25.pending_buf_size) {
            _0x41bc6b(_0x583dcd);
            if (_0x2b9a25.pending !== 0) {
              _0x2b9a25.last_flush = -1;
              return _0x4059d5;
            }
          }
          _0x21acbd(_0x2b9a25, _0x583dcd.adler & 255);
          _0x21acbd(_0x2b9a25, _0x583dcd.adler >> 8 & 255);
          _0x583dcd.adler = 0;
        }
        _0x2b9a25.status = _0x4f846c;
        _0x41bc6b(_0x583dcd);
        if (_0x2b9a25.pending !== 0) {
          _0x2b9a25.last_flush = -1;
          return _0x4059d5;
        }
      }
      if (_0x583dcd.avail_in !== 0 || _0x2b9a25.lookahead !== 0 || _0x2d2228 !== _0x4cca88 && _0x2b9a25.status !== _0x2266ff) {
        let _0x2af48a = _0x2b9a25.level === 0 ? _0x23a855(_0x2b9a25, _0x2d2228) : _0x2b9a25.strategy === _0x36d6dd ? _0xb9624e(_0x2b9a25, _0x2d2228) : _0x2b9a25.strategy === _0x2a31c3 ? _0x5cfa0e(_0x2b9a25, _0x2d2228) : _0x4323ef[_0x2b9a25.level].func(_0x2b9a25, _0x2d2228);
        if (_0x2af48a === _0x28678c || _0x2af48a === _0x5341e6) {
          _0x2b9a25.status = _0x2266ff;
        }
        if (_0x2af48a === _0x587c0b || _0x2af48a === _0x28678c) {
          if (_0x583dcd.avail_out === 0) {
            _0x2b9a25.last_flush = -1;
          }
          return _0x4059d5;
        }
        if (_0x2af48a === _0x557dc4) {
          if (_0x2d2228 === _0x2a541e) {
            _0x4ce653(_0x2b9a25);
          } else if (_0x2d2228 !== _0x54a692) {
            _0x2e05ae(_0x2b9a25, 0, 0, false);
            if (_0x2d2228 === _0x3fd456) {
              _0x1b4dd7(_0x2b9a25.head);
              if (_0x2b9a25.lookahead === 0) {
                _0x2b9a25.strstart = 0;
                _0x2b9a25.block_start = 0;
                _0x2b9a25.insert = 0;
              }
            }
          }
          _0x41bc6b(_0x583dcd);
          if (_0x583dcd.avail_out === 0) {
            _0x2b9a25.last_flush = -1;
            return _0x4059d5;
          }
        }
      }
      if (_0x2d2228 !== _0x2de1e0) {
        return _0x4059d5;
      }
      if (_0x2b9a25.wrap <= 0) {
        return _0x2efda0;
      }
      if (_0x2b9a25.wrap === 2) {
        _0x21acbd(_0x2b9a25, _0x583dcd.adler & 255);
        _0x21acbd(_0x2b9a25, _0x583dcd.adler >> 8 & 255);
        _0x21acbd(_0x2b9a25, _0x583dcd.adler >> 16 & 255);
        _0x21acbd(_0x2b9a25, _0x583dcd.adler >> 24 & 255);
        _0x21acbd(_0x2b9a25, _0x583dcd.total_in & 255);
        _0x21acbd(_0x2b9a25, _0x583dcd.total_in >> 8 & 255);
        _0x21acbd(_0x2b9a25, _0x583dcd.total_in >> 16 & 255);
        _0x21acbd(_0x2b9a25, _0x583dcd.total_in >> 24 & 255);
      } else {
        _0x4e87cd(_0x2b9a25, _0x583dcd.adler >>> 16);
        _0x4e87cd(_0x2b9a25, _0x583dcd.adler & 65535);
      }
      _0x41bc6b(_0x583dcd);
      if (_0x2b9a25.wrap > 0) {
        _0x2b9a25.wrap = -_0x2b9a25.wrap;
      }
      if (_0x2b9a25.pending !== 0) {
        return _0x4059d5;
      } else {
        return _0x2efda0;
      }
    };
    const _0x1e94cc = (_0x37b5cf) => {
      if (_0x5e2132(_0x37b5cf)) {
        return _0x447e1e;
      }
      const _0x4d351d = _0x37b5cf.state.status;
      _0x37b5cf.state = null;
      if (_0x4d351d === _0x4f846c) {
        return _0x5873b4(_0x37b5cf, _0x364d25);
      } else {
        return _0x4059d5;
      }
    };
    const _0x164400 = (_0x4cb238, _0x2e8eda) => {
      let _0x75b82a = _0x2e8eda.length;
      if (_0x5e2132(_0x4cb238)) {
        return _0x447e1e;
      }
      const _0x456e7c = _0x4cb238.state;
      const _0x366d66 = _0x456e7c.wrap;
      if (_0x366d66 === 2 || _0x366d66 === 1 && _0x456e7c.status !== _0x1f9c46 || _0x456e7c.lookahead) {
        return _0x447e1e;
      }
      if (_0x366d66 === 1) {
        _0x4cb238.adler = _0x25ad47(_0x4cb238.adler, _0x2e8eda, _0x75b82a, 0);
      }
      _0x456e7c.wrap = 0;
      if (_0x75b82a >= _0x456e7c.w_size) {
        if (_0x366d66 === 0) {
          _0x1b4dd7(_0x456e7c.head);
          _0x456e7c.strstart = 0;
          _0x456e7c.block_start = 0;
          _0x456e7c.insert = 0;
        }
        let _0x598bd3 = new Uint8Array(_0x456e7c.w_size);
        _0x598bd3.set(_0x2e8eda.subarray(_0x75b82a - _0x456e7c.w_size, _0x75b82a), 0);
        _0x2e8eda = _0x598bd3;
        _0x75b82a = _0x456e7c.w_size;
      }
      const _0x479ec7 = _0x4cb238.avail_in;
      const _0x4023e4 = _0x4cb238.next_in;
      const _0x10e61a = _0x4cb238.input;
      _0x4cb238.avail_in = _0x75b82a;
      _0x4cb238.next_in = 0;
      _0x4cb238.input = _0x2e8eda;
      _0x5e090d(_0x456e7c);
      while (_0x456e7c.lookahead >= _0x2e6e91) {
        let _0x3d1558 = _0x456e7c.strstart;
        let _0x111647 = _0x456e7c.lookahead - (_0x2e6e91 - 1);
        do {
          _0x456e7c.ins_h = _0x31027a(_0x456e7c, _0x456e7c.ins_h, _0x456e7c.window[_0x3d1558 + _0x2e6e91 - 1]);
          _0x456e7c.prev[_0x3d1558 & _0x456e7c.w_mask] = _0x456e7c.head[_0x456e7c.ins_h];
          _0x456e7c.head[_0x456e7c.ins_h] = _0x3d1558;
          _0x3d1558++;
        } while (--_0x111647);
        _0x456e7c.strstart = _0x3d1558;
        _0x456e7c.lookahead = _0x2e6e91 - 1;
        _0x5e090d(_0x456e7c);
      }
      _0x456e7c.strstart += _0x456e7c.lookahead;
      _0x456e7c.block_start = _0x456e7c.strstart;
      _0x456e7c.insert = _0x456e7c.lookahead;
      _0x456e7c.lookahead = 0;
      _0x456e7c.match_length = _0x456e7c.prev_length = _0x2e6e91 - 1;
      _0x456e7c.match_available = 0;
      _0x4cb238.next_in = _0x4023e4;
      _0x4cb238.input = _0x10e61a;
      _0x4cb238.avail_in = _0x479ec7;
      _0x456e7c.wrap = _0x366d66;
      return _0x4059d5;
    };
    var _0x56ea5f = _0x4dcab2;
    var _0x5c0ff0 = _0x4da54b;
    var _0xc369e9 = _0x5e4d96;
    var _0xdad90a = _0x32ebc2;
    var _0x4cf3dd = _0x18a3cf;
    var _0x39b8e2 = _0x517a8b;
    var _0x45979c = _0x1e94cc;
    var _0x29be67 = _0x164400;
    var _0x233f4e = "pako deflate (from Nodeca project)";
    var _0x341a65 = {
      deflateInit: _0x56ea5f,
      deflateInit2: _0x5c0ff0,
      deflateReset: _0xc369e9,
      deflateResetKeep: _0xdad90a,
      deflateSetHeader: _0x4cf3dd,
      deflate: _0x39b8e2,
      deflateEnd: _0x45979c,
      deflateSetDictionary: _0x29be67,
      deflateInfo: _0x233f4e
    };
    var _0x472da0 = _0x341a65;
    const _0xe84d07 = (_0x4345c1, _0x444563) => {
      return Object.prototype.hasOwnProperty.call(_0x4345c1, _0x444563);
    };
    function _0x56bcc5(_0x139ae2) {
      const _0x1609b5 = Array.prototype.slice.call(arguments, 1);
      while (_0x1609b5.length) {
        const _0x5d9376 = _0x1609b5.shift();
        if (!_0x5d9376) {
          continue;
        }
        if (typeof _0x5d9376 !== "object") {
          throw new TypeError(_0x5d9376 + "must be non-object");
        }
        for (const _0x280118 in _0x5d9376) {
          if (_0xe84d07(_0x5d9376, _0x280118)) {
            _0x139ae2[_0x280118] = _0x5d9376[_0x280118];
          }
        }
      }
      return _0x139ae2;
    }
    var _0x1b1d09 = (_0x5f15cc) => {
      let _0x3e3d26 = 0;
      for (let _0x32b738 = 0, _0x3772b6 = _0x5f15cc.length; _0x32b738 < _0x3772b6; _0x32b738++) {
        _0x3e3d26 += _0x5f15cc[_0x32b738].length;
      }
      const _0x3f91b6 = new Uint8Array(_0x3e3d26);
      for (let _0xc12736 = 0, _0x2d45e9 = 0, _0xc75440 = _0x5f15cc.length; _0xc12736 < _0xc75440; _0xc12736++) {
        let _0x5b2c06 = _0x5f15cc[_0xc12736];
        _0x3f91b6.set(_0x5b2c06, _0x2d45e9);
        _0x2d45e9 += _0x5b2c06.length;
      }
      return _0x3f91b6;
    };
    var _0x2852e4 = {
      assign: _0x56bcc5,
      flattenChunks: _0x1b1d09
    };
    var _0x2effd1 = _0x2852e4;
    let _0x1077ee = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (_0x5c0eca) {
      _0x1077ee = false;
    }
    const _0x2bd980 = new Uint8Array(256);
    for (let _0x175331 = 0; _0x175331 < 256; _0x175331++) {
      _0x2bd980[_0x175331] = _0x175331 >= 252 ? 6 : _0x175331 >= 248 ? 5 : _0x175331 >= 240 ? 4 : _0x175331 >= 224 ? 3 : _0x175331 >= 192 ? 2 : 1;
    }
    _0x2bd980[254] = _0x2bd980[254] = 1;
    var _0x10edbc = (_0x16687c) => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(_0x16687c);
      }
      let _0x5bbaa1;
      let _0x2f22c6;
      let _0xf79c7c;
      let _0x33674e;
      let _0x93719c;
      let _0x719d1 = _0x16687c.length;
      let _0xe1d0a6 = 0;
      for (_0x33674e = 0; _0x33674e < _0x719d1; _0x33674e++) {
        _0x2f22c6 = _0x16687c.charCodeAt(_0x33674e);
        if ((_0x2f22c6 & 64512) === 55296 && _0x33674e + 1 < _0x719d1) {
          _0xf79c7c = _0x16687c.charCodeAt(_0x33674e + 1);
          if ((_0xf79c7c & 64512) === 56320) {
            _0x2f22c6 = 65536 + (_0x2f22c6 - 55296 << 10) + (_0xf79c7c - 56320);
            _0x33674e++;
          }
        }
        _0xe1d0a6 += _0x2f22c6 < 128 ? 1 : _0x2f22c6 < 2048 ? 2 : _0x2f22c6 < 65536 ? 3 : 4;
      }
      _0x5bbaa1 = new Uint8Array(_0xe1d0a6);
      _0x93719c = 0;
      _0x33674e = 0;
      for (; _0x93719c < _0xe1d0a6; _0x33674e++) {
        _0x2f22c6 = _0x16687c.charCodeAt(_0x33674e);
        if ((_0x2f22c6 & 64512) === 55296 && _0x33674e + 1 < _0x719d1) {
          _0xf79c7c = _0x16687c.charCodeAt(_0x33674e + 1);
          if ((_0xf79c7c & 64512) === 56320) {
            _0x2f22c6 = 65536 + (_0x2f22c6 - 55296 << 10) + (_0xf79c7c - 56320);
            _0x33674e++;
          }
        }
        if (_0x2f22c6 < 128) {
          _0x5bbaa1[_0x93719c++] = _0x2f22c6;
        } else if (_0x2f22c6 < 2048) {
          _0x5bbaa1[_0x93719c++] = _0x2f22c6 >>> 6 | 192;
          _0x5bbaa1[_0x93719c++] = _0x2f22c6 & 63 | 128;
        } else if (_0x2f22c6 < 65536) {
          _0x5bbaa1[_0x93719c++] = _0x2f22c6 >>> 12 | 224;
          _0x5bbaa1[_0x93719c++] = _0x2f22c6 >>> 6 & 63 | 128;
          _0x5bbaa1[_0x93719c++] = _0x2f22c6 & 63 | 128;
        } else {
          _0x5bbaa1[_0x93719c++] = _0x2f22c6 >>> 18 | 240;
          _0x5bbaa1[_0x93719c++] = _0x2f22c6 >>> 12 & 63 | 128;
          _0x5bbaa1[_0x93719c++] = _0x2f22c6 >>> 6 & 63 | 128;
          _0x5bbaa1[_0x93719c++] = _0x2f22c6 & 63 | 128;
        }
      }
      return _0x5bbaa1;
    };
    const _0x1947d9 = (_0x5c77f7, _0x37a8db) => {
      if (_0x37a8db < 65534) {
        if (_0x5c77f7.subarray && _0x1077ee) {
          return String.fromCharCode.apply(null, _0x5c77f7.length === _0x37a8db ? _0x5c77f7 : _0x5c77f7.subarray(0, _0x37a8db));
        }
      }
      let _0x23ae78 = "";
      for (let _0x3ed042 = 0; _0x3ed042 < _0x37a8db; _0x3ed042++) {
        _0x23ae78 += String.fromCharCode(_0x5c77f7[_0x3ed042]);
      }
      return _0x23ae78;
    };
    var _0x452a6a = (_0x17639e, _0x10dcd7) => {
      const _0x49e3be = _0x10dcd7 || _0x17639e.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(_0x17639e.subarray(0, _0x10dcd7));
      }
      let _0x4201de;
      let _0x3c68cb;
      const _0x103e2d = new Array(_0x49e3be * 2);
      _0x3c68cb = 0;
      _0x4201de = 0;
      while (_0x4201de < _0x49e3be) {
        let _0x33f8c1 = _0x17639e[_0x4201de++];
        if (_0x33f8c1 < 128) {
          _0x103e2d[_0x3c68cb++] = _0x33f8c1;
          continue;
        }
        let _0x56d864 = _0x2bd980[_0x33f8c1];
        if (_0x56d864 > 4) {
          _0x103e2d[_0x3c68cb++] = 65533;
          _0x4201de += _0x56d864 - 1;
          continue;
        }
        _0x33f8c1 &= _0x56d864 === 2 ? 31 : _0x56d864 === 3 ? 15 : 7;
        while (_0x56d864 > 1 && _0x4201de < _0x49e3be) {
          _0x33f8c1 = _0x33f8c1 << 6 | _0x17639e[_0x4201de++] & 63;
          _0x56d864--;
        }
        if (_0x56d864 > 1) {
          _0x103e2d[_0x3c68cb++] = 65533;
          continue;
        }
        if (_0x33f8c1 < 65536) {
          _0x103e2d[_0x3c68cb++] = _0x33f8c1;
        } else {
          _0x33f8c1 -= 65536;
          _0x103e2d[_0x3c68cb++] = _0x33f8c1 >> 10 & 1023 | 55296;
          _0x103e2d[_0x3c68cb++] = _0x33f8c1 & 1023 | 56320;
        }
      }
      return _0x1947d9(_0x103e2d, _0x3c68cb);
    };
    var _0x37f57d = (_0x2a44f1, _0x5c8108) => {
      _0x5c8108 = _0x5c8108 || _0x2a44f1.length;
      if (_0x5c8108 > _0x2a44f1.length) {
        _0x5c8108 = _0x2a44f1.length;
      }
      let _0x4abae6 = _0x5c8108 - 1;
      while (_0x4abae6 >= 0 && (_0x2a44f1[_0x4abae6] & 192) === 128) {
        _0x4abae6--;
      }
      if (_0x4abae6 < 0) {
        return _0x5c8108;
      }
      if (_0x4abae6 === 0) {
        return _0x5c8108;
      }
      if (_0x4abae6 + _0x2bd980[_0x2a44f1[_0x4abae6]] > _0x5c8108) {
        return _0x4abae6;
      } else {
        return _0x5c8108;
      }
    };
    var _0x4cb048 = {
      string2buf: _0x10edbc,
      buf2string: _0x452a6a,
      utf8border: _0x37f57d
    };
    var _0x5b5ec5 = _0x4cb048;
    function _0x5a6f13() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    var _0x483ca4 = _0x5a6f13;
    const _0x5755eb = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x286d1e,
      Z_SYNC_FLUSH: _0x5908cf,
      Z_FULL_FLUSH: _0x3f1fa7,
      Z_FINISH: _0x1e1f94,
      Z_OK: _0x480494,
      Z_STREAM_END: _0x157780,
      Z_DEFAULT_COMPRESSION: _0x256644,
      Z_DEFAULT_STRATEGY: _0x3cc464,
      Z_DEFLATED: _0x370361
    } = _0x3726bc;
    function _0x322792(_0x161d6e) {
      var _0x311f49 = {
        level: _0x256644,
        method: _0x370361,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: _0x3cc464
      };
      this.options = _0x2effd1.assign(_0x311f49, _0x161d6e || {});
      let _0x23a2b8 = this.options;
      if (_0x23a2b8.raw && _0x23a2b8.windowBits > 0) {
        _0x23a2b8.windowBits = -_0x23a2b8.windowBits;
      } else if (_0x23a2b8.gzip && _0x23a2b8.windowBits > 0 && _0x23a2b8.windowBits < 16) {
        _0x23a2b8.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new _0x483ca4();
      this.strm.avail_out = 0;
      let _0x1ac260 = _0x472da0.deflateInit2(this.strm, _0x23a2b8.level, _0x23a2b8.method, _0x23a2b8.windowBits, _0x23a2b8.memLevel, _0x23a2b8.strategy);
      if (_0x1ac260 !== _0x480494) {
        throw new Error(_0x702a02[_0x1ac260]);
      }
      if (_0x23a2b8.header) {
        _0x472da0.deflateSetHeader(this.strm, _0x23a2b8.header);
      }
      if (_0x23a2b8.dictionary) {
        let _0x67a917;
        if (typeof _0x23a2b8.dictionary === "string") {
          _0x67a917 = _0x5b5ec5.string2buf(_0x23a2b8.dictionary);
        } else if (_0x5755eb.call(_0x23a2b8.dictionary) === "[object ArrayBuffer]") {
          _0x67a917 = new Uint8Array(_0x23a2b8.dictionary);
        } else {
          _0x67a917 = _0x23a2b8.dictionary;
        }
        _0x1ac260 = _0x472da0.deflateSetDictionary(this.strm, _0x67a917);
        if (_0x1ac260 !== _0x480494) {
          throw new Error(_0x702a02[_0x1ac260]);
        }
        this._dict_set = true;
      }
    }
    _0x322792.prototype.push = function(_0x54368a, _0x24cd76) {
      const _0x56b6b7 = this.strm;
      const _0x53ed4b = this.options.chunkSize;
      let _0x34b2da;
      let _0x107a80;
      if (this.ended) {
        return false;
      }
      if (_0x24cd76 === ~~_0x24cd76) {
        _0x107a80 = _0x24cd76;
      } else {
        _0x107a80 = _0x24cd76 === true ? _0x1e1f94 : _0x286d1e;
      }
      if (typeof _0x54368a === "string") {
        _0x56b6b7.input = _0x5b5ec5.string2buf(_0x54368a);
      } else if (_0x5755eb.call(_0x54368a) === "[object ArrayBuffer]") {
        _0x56b6b7.input = new Uint8Array(_0x54368a);
      } else {
        _0x56b6b7.input = _0x54368a;
      }
      _0x56b6b7.next_in = 0;
      _0x56b6b7.avail_in = _0x56b6b7.input.length;
      while (true) {
        if (_0x56b6b7.avail_out === 0) {
          _0x56b6b7.output = new Uint8Array(_0x53ed4b);
          _0x56b6b7.next_out = 0;
          _0x56b6b7.avail_out = _0x53ed4b;
        }
        if ((_0x107a80 === _0x5908cf || _0x107a80 === _0x3f1fa7) && _0x56b6b7.avail_out <= 6) {
          this.onData(_0x56b6b7.output.subarray(0, _0x56b6b7.next_out));
          _0x56b6b7.avail_out = 0;
          continue;
        }
        _0x34b2da = _0x472da0.deflate(_0x56b6b7, _0x107a80);
        if (_0x34b2da === _0x157780) {
          if (_0x56b6b7.next_out > 0) {
            this.onData(_0x56b6b7.output.subarray(0, _0x56b6b7.next_out));
          }
          _0x34b2da = _0x472da0.deflateEnd(this.strm);
          this.onEnd(_0x34b2da);
          this.ended = true;
          return _0x34b2da === _0x480494;
        }
        if (_0x56b6b7.avail_out === 0) {
          this.onData(_0x56b6b7.output);
          continue;
        }
        if (_0x107a80 > 0 && _0x56b6b7.next_out > 0) {
          this.onData(_0x56b6b7.output.subarray(0, _0x56b6b7.next_out));
          _0x56b6b7.avail_out = 0;
          continue;
        }
        if (_0x56b6b7.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    _0x322792.prototype.onData = function(_0x14979d) {
      this.chunks.push(_0x14979d);
    };
    _0x322792.prototype.onEnd = function(_0x449d2e) {
      if (_0x449d2e === _0x480494) {
        this.result = _0x2effd1.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = _0x449d2e;
      this.msg = this.strm.msg;
    };
    function _0x49903b(_0x5aafe8, _0x1c2000) {
      const _0x34823c = new _0x322792(_0x1c2000);
      _0x34823c.push(_0x5aafe8, true);
      if (_0x34823c.err) {
        throw _0x34823c.msg || _0x702a02[_0x34823c.err];
      }
      return _0x34823c.result;
    }
    function _0x2c157b(_0x32cb49, _0x14c56c) {
      _0x14c56c = _0x14c56c || {};
      _0x14c56c.raw = true;
      return _0x49903b(_0x32cb49, _0x14c56c);
    }
    function _0x12f1dd(_0x58fc38, _0x2942b9) {
      _0x2942b9 = _0x2942b9 || {};
      _0x2942b9.gzip = true;
      return _0x49903b(_0x58fc38, _0x2942b9);
    }
    var _0x5d9e3b = _0x322792;
    var _0x593d2e = _0x49903b;
    var _0x4b1cf7 = _0x2c157b;
    var _0x2c3643 = _0x12f1dd;
    var _0xc5b16 = _0x3726bc;
    var _0x53ef27 = {
      Deflate: _0x5d9e3b,
      deflate: _0x593d2e,
      deflateRaw: _0x4b1cf7,
      gzip: _0x2c3643,
      constants: _0xc5b16
    };
    var _0x1e7d2c = _0x53ef27;
    const _0xa725ff = 16209;
    const _0x1cf431 = 16191;
    var _0x449372 = function _0x5d92a0(_0x488436, _0x3d1cb6) {
      let _0x4537e2;
      let _0x170f13;
      let _0x328b1;
      let _0x467f39;
      let _0x2e25fd;
      let _0x3098a4;
      let _0x3657ac;
      let _0x28b2c7;
      let _0x536fb5;
      let _0x5ee0be;
      let _0x13bb09;
      let _0x51f245;
      let _0x3454cf;
      let _0x41f103;
      let _0x902bde;
      let _0x10e52c;
      let _0x291d34;
      let _0x2f1533;
      let _0x5492c5;
      let _0x558750;
      let _0x321853;
      let _0x239fbe;
      let _0x4f2e37;
      let _0x3e82ed;
      const _0x568ccf = _0x488436.state;
      _0x4537e2 = _0x488436.next_in;
      _0x4f2e37 = _0x488436.input;
      _0x170f13 = _0x4537e2 + (_0x488436.avail_in - 5);
      _0x328b1 = _0x488436.next_out;
      _0x3e82ed = _0x488436.output;
      _0x467f39 = _0x328b1 - (_0x3d1cb6 - _0x488436.avail_out);
      _0x2e25fd = _0x328b1 + (_0x488436.avail_out - 257);
      _0x3098a4 = _0x568ccf.dmax;
      _0x3657ac = _0x568ccf.wsize;
      _0x28b2c7 = _0x568ccf.whave;
      _0x536fb5 = _0x568ccf.wnext;
      _0x5ee0be = _0x568ccf.window;
      _0x13bb09 = _0x568ccf.hold;
      _0x51f245 = _0x568ccf.bits;
      _0x3454cf = _0x568ccf.lencode;
      _0x41f103 = _0x568ccf.distcode;
      _0x902bde = (1 << _0x568ccf.lenbits) - 1;
      _0x10e52c = (1 << _0x568ccf.distbits) - 1;
      _0x328e6b: do {
        if (_0x51f245 < 15) {
          _0x13bb09 += _0x4f2e37[_0x4537e2++] << _0x51f245;
          _0x51f245 += 8;
          _0x13bb09 += _0x4f2e37[_0x4537e2++] << _0x51f245;
          _0x51f245 += 8;
        }
        _0x291d34 = _0x3454cf[_0x13bb09 & _0x902bde];
        _0xdaba73: while (true) {
          _0x2f1533 = _0x291d34 >>> 24;
          _0x13bb09 >>>= _0x2f1533;
          _0x51f245 -= _0x2f1533;
          _0x2f1533 = _0x291d34 >>> 16 & 255;
          if (_0x2f1533 === 0) {
            _0x3e82ed[_0x328b1++] = _0x291d34 & 65535;
          } else if (_0x2f1533 & 16) {
            _0x5492c5 = _0x291d34 & 65535;
            _0x2f1533 &= 15;
            if (_0x2f1533) {
              if (_0x51f245 < _0x2f1533) {
                _0x13bb09 += _0x4f2e37[_0x4537e2++] << _0x51f245;
                _0x51f245 += 8;
              }
              _0x5492c5 += _0x13bb09 & (1 << _0x2f1533) - 1;
              _0x13bb09 >>>= _0x2f1533;
              _0x51f245 -= _0x2f1533;
            }
            if (_0x51f245 < 15) {
              _0x13bb09 += _0x4f2e37[_0x4537e2++] << _0x51f245;
              _0x51f245 += 8;
              _0x13bb09 += _0x4f2e37[_0x4537e2++] << _0x51f245;
              _0x51f245 += 8;
            }
            _0x291d34 = _0x41f103[_0x13bb09 & _0x10e52c];
            _0x27d1ce: while (true) {
              _0x2f1533 = _0x291d34 >>> 24;
              _0x13bb09 >>>= _0x2f1533;
              _0x51f245 -= _0x2f1533;
              _0x2f1533 = _0x291d34 >>> 16 & 255;
              if (_0x2f1533 & 16) {
                _0x558750 = _0x291d34 & 65535;
                _0x2f1533 &= 15;
                if (_0x51f245 < _0x2f1533) {
                  _0x13bb09 += _0x4f2e37[_0x4537e2++] << _0x51f245;
                  _0x51f245 += 8;
                  if (_0x51f245 < _0x2f1533) {
                    _0x13bb09 += _0x4f2e37[_0x4537e2++] << _0x51f245;
                    _0x51f245 += 8;
                  }
                }
                _0x558750 += _0x13bb09 & (1 << _0x2f1533) - 1;
                if (_0x558750 > _0x3098a4) {
                  _0x488436.msg = "invalid distance too far back";
                  _0x568ccf.mode = _0xa725ff;
                  break _0x328e6b;
                }
                _0x13bb09 >>>= _0x2f1533;
                _0x51f245 -= _0x2f1533;
                _0x2f1533 = _0x328b1 - _0x467f39;
                if (_0x558750 > _0x2f1533) {
                  _0x2f1533 = _0x558750 - _0x2f1533;
                  if (_0x2f1533 > _0x28b2c7) {
                    if (_0x568ccf.sane) {
                      _0x488436.msg = "invalid distance too far back";
                      _0x568ccf.mode = _0xa725ff;
                      break _0x328e6b;
                    }
                  }
                  _0x321853 = 0;
                  _0x239fbe = _0x5ee0be;
                  if (_0x536fb5 === 0) {
                    _0x321853 += _0x3657ac - _0x2f1533;
                    if (_0x2f1533 < _0x5492c5) {
                      _0x5492c5 -= _0x2f1533;
                      do {
                        _0x3e82ed[_0x328b1++] = _0x5ee0be[_0x321853++];
                      } while (--_0x2f1533);
                      _0x321853 = _0x328b1 - _0x558750;
                      _0x239fbe = _0x3e82ed;
                    }
                  } else if (_0x536fb5 < _0x2f1533) {
                    _0x321853 += _0x3657ac + _0x536fb5 - _0x2f1533;
                    _0x2f1533 -= _0x536fb5;
                    if (_0x2f1533 < _0x5492c5) {
                      _0x5492c5 -= _0x2f1533;
                      do {
                        _0x3e82ed[_0x328b1++] = _0x5ee0be[_0x321853++];
                      } while (--_0x2f1533);
                      _0x321853 = 0;
                      if (_0x536fb5 < _0x5492c5) {
                        _0x2f1533 = _0x536fb5;
                        _0x5492c5 -= _0x2f1533;
                        do {
                          _0x3e82ed[_0x328b1++] = _0x5ee0be[_0x321853++];
                        } while (--_0x2f1533);
                        _0x321853 = _0x328b1 - _0x558750;
                        _0x239fbe = _0x3e82ed;
                      }
                    }
                  } else {
                    _0x321853 += _0x536fb5 - _0x2f1533;
                    if (_0x2f1533 < _0x5492c5) {
                      _0x5492c5 -= _0x2f1533;
                      do {
                        _0x3e82ed[_0x328b1++] = _0x5ee0be[_0x321853++];
                      } while (--_0x2f1533);
                      _0x321853 = _0x328b1 - _0x558750;
                      _0x239fbe = _0x3e82ed;
                    }
                  }
                  while (_0x5492c5 > 2) {
                    _0x3e82ed[_0x328b1++] = _0x239fbe[_0x321853++];
                    _0x3e82ed[_0x328b1++] = _0x239fbe[_0x321853++];
                    _0x3e82ed[_0x328b1++] = _0x239fbe[_0x321853++];
                    _0x5492c5 -= 3;
                  }
                  if (_0x5492c5) {
                    _0x3e82ed[_0x328b1++] = _0x239fbe[_0x321853++];
                    if (_0x5492c5 > 1) {
                      _0x3e82ed[_0x328b1++] = _0x239fbe[_0x321853++];
                    }
                  }
                } else {
                  _0x321853 = _0x328b1 - _0x558750;
                  do {
                    _0x3e82ed[_0x328b1++] = _0x3e82ed[_0x321853++];
                    _0x3e82ed[_0x328b1++] = _0x3e82ed[_0x321853++];
                    _0x3e82ed[_0x328b1++] = _0x3e82ed[_0x321853++];
                    _0x5492c5 -= 3;
                  } while (_0x5492c5 > 2);
                  if (_0x5492c5) {
                    _0x3e82ed[_0x328b1++] = _0x3e82ed[_0x321853++];
                    if (_0x5492c5 > 1) {
                      _0x3e82ed[_0x328b1++] = _0x3e82ed[_0x321853++];
                    }
                  }
                }
              } else if ((_0x2f1533 & 64) === 0) {
                _0x291d34 = _0x41f103[(_0x291d34 & 65535) + (_0x13bb09 & (1 << _0x2f1533) - 1)];
                continue _0x27d1ce;
              } else {
                _0x488436.msg = "invalid distance code";
                _0x568ccf.mode = _0xa725ff;
                break _0x328e6b;
              }
              break;
            }
          } else if ((_0x2f1533 & 64) === 0) {
            _0x291d34 = _0x3454cf[(_0x291d34 & 65535) + (_0x13bb09 & (1 << _0x2f1533) - 1)];
            continue _0xdaba73;
          } else if (_0x2f1533 & 32) {
            _0x568ccf.mode = _0x1cf431;
            break _0x328e6b;
          } else {
            _0x488436.msg = "invalid literal/length code";
            _0x568ccf.mode = _0xa725ff;
            break _0x328e6b;
          }
          break;
        }
      } while (_0x4537e2 < _0x170f13 && _0x328b1 < _0x2e25fd);
      _0x5492c5 = _0x51f245 >> 3;
      _0x4537e2 -= _0x5492c5;
      _0x51f245 -= _0x5492c5 << 3;
      _0x13bb09 &= (1 << _0x51f245) - 1;
      _0x488436.next_in = _0x4537e2;
      _0x488436.next_out = _0x328b1;
      _0x488436.avail_in = _0x4537e2 < _0x170f13 ? 5 + (_0x170f13 - _0x4537e2) : 5 - (_0x4537e2 - _0x170f13);
      _0x488436.avail_out = _0x328b1 < _0x2e25fd ? 257 + (_0x2e25fd - _0x328b1) : 257 - (_0x328b1 - _0x2e25fd);
      _0x568ccf.hold = _0x13bb09;
      _0x568ccf.bits = _0x51f245;
      return;
    };
    const _0x326573 = 15;
    const _0x3447ee = 852;
    const _0x6d3086 = 592;
    const _0x1e9c65 = 0;
    const _0x387483 = 1;
    const _0x547693 = 2;
    const _0x308f58 = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const _0x562630 = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const _0x227581 = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const _0x42f023 = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    const _0x26530d = (_0x115e7f, _0x1bf09f, _0x32b341, _0x4c8eef, _0x3e5310, _0x7216f3, _0xd8c15c, _0x90da4c) => {
      const _0x31b8d2 = _0x90da4c.bits;
      let _0x2f0e2a = 0;
      let _0x25b76d = 0;
      let _0x2a834d = 0;
      let _0x51cae3 = 0;
      let _0x8eb076 = 0;
      let _0x4c6d7d = 0;
      let _0x518dde = 0;
      let _0x21af3d = 0;
      let _0x55089d = 0;
      let _0x25f6f0 = 0;
      let _0x3281bc;
      let _0x5e5996;
      let _0x20e0c0;
      let _0x1d4b0e;
      let _0x5c18fb;
      let _0xd6bec3 = null;
      let _0x6e86b6;
      const _0x431cbc = new Uint16Array(_0x326573 + 1);
      const _0x4099cb = new Uint16Array(_0x326573 + 1);
      let _0x157763 = null;
      let _0x353b3b;
      let _0x5a81a2;
      let _0x2beda6;
      for (_0x2f0e2a = 0; _0x2f0e2a <= _0x326573; _0x2f0e2a++) {
        _0x431cbc[_0x2f0e2a] = 0;
      }
      for (_0x25b76d = 0; _0x25b76d < _0x4c8eef; _0x25b76d++) {
        _0x431cbc[_0x1bf09f[_0x32b341 + _0x25b76d]]++;
      }
      _0x8eb076 = _0x31b8d2;
      for (_0x51cae3 = _0x326573; _0x51cae3 >= 1; _0x51cae3--) {
        if (_0x431cbc[_0x51cae3] !== 0) {
          break;
        }
      }
      if (_0x8eb076 > _0x51cae3) {
        _0x8eb076 = _0x51cae3;
      }
      if (_0x51cae3 === 0) {
        _0x3e5310[_0x7216f3++] = 20971520;
        _0x3e5310[_0x7216f3++] = 20971520;
        _0x90da4c.bits = 1;
        return 0;
      }
      for (_0x2a834d = 1; _0x2a834d < _0x51cae3; _0x2a834d++) {
        if (_0x431cbc[_0x2a834d] !== 0) {
          break;
        }
      }
      if (_0x8eb076 < _0x2a834d) {
        _0x8eb076 = _0x2a834d;
      }
      _0x21af3d = 1;
      for (_0x2f0e2a = 1; _0x2f0e2a <= _0x326573; _0x2f0e2a++) {
        _0x21af3d <<= 1;
        _0x21af3d -= _0x431cbc[_0x2f0e2a];
        if (_0x21af3d < 0) {
          return -1;
        }
      }
      if (_0x21af3d > 0 && (_0x115e7f === _0x1e9c65 || _0x51cae3 !== 1)) {
        return -1;
      }
      _0x4099cb[1] = 0;
      for (_0x2f0e2a = 1; _0x2f0e2a < _0x326573; _0x2f0e2a++) {
        _0x4099cb[_0x2f0e2a + 1] = _0x4099cb[_0x2f0e2a] + _0x431cbc[_0x2f0e2a];
      }
      for (_0x25b76d = 0; _0x25b76d < _0x4c8eef; _0x25b76d++) {
        if (_0x1bf09f[_0x32b341 + _0x25b76d] !== 0) {
          _0xd8c15c[_0x4099cb[_0x1bf09f[_0x32b341 + _0x25b76d]]++] = _0x25b76d;
        }
      }
      if (_0x115e7f === _0x1e9c65) {
        _0xd6bec3 = _0x157763 = _0xd8c15c;
        _0x6e86b6 = 20;
      } else if (_0x115e7f === _0x387483) {
        _0xd6bec3 = _0x308f58;
        _0x157763 = _0x562630;
        _0x6e86b6 = 257;
      } else {
        _0xd6bec3 = _0x227581;
        _0x157763 = _0x42f023;
        _0x6e86b6 = 0;
      }
      _0x25f6f0 = 0;
      _0x25b76d = 0;
      _0x2f0e2a = _0x2a834d;
      _0x5c18fb = _0x7216f3;
      _0x4c6d7d = _0x8eb076;
      _0x518dde = 0;
      _0x20e0c0 = -1;
      _0x55089d = 1 << _0x8eb076;
      _0x1d4b0e = _0x55089d - 1;
      if (_0x115e7f === _0x387483 && _0x55089d > _0x3447ee || _0x115e7f === _0x547693 && _0x55089d > _0x6d3086) {
        return 1;
      }
      while (true) {
        _0x353b3b = _0x2f0e2a - _0x518dde;
        if (_0xd8c15c[_0x25b76d] + 1 < _0x6e86b6) {
          _0x5a81a2 = 0;
          _0x2beda6 = _0xd8c15c[_0x25b76d];
        } else if (_0xd8c15c[_0x25b76d] >= _0x6e86b6) {
          _0x5a81a2 = _0x157763[_0xd8c15c[_0x25b76d] - _0x6e86b6];
          _0x2beda6 = _0xd6bec3[_0xd8c15c[_0x25b76d] - _0x6e86b6];
        } else {
          _0x5a81a2 = 96;
          _0x2beda6 = 0;
        }
        _0x3281bc = 1 << _0x2f0e2a - _0x518dde;
        _0x5e5996 = 1 << _0x4c6d7d;
        _0x2a834d = _0x5e5996;
        do {
          _0x5e5996 -= _0x3281bc;
          _0x3e5310[_0x5c18fb + (_0x25f6f0 >> _0x518dde) + _0x5e5996] = _0x353b3b << 24 | _0x5a81a2 << 16 | _0x2beda6 | 0;
        } while (_0x5e5996 !== 0);
        _0x3281bc = 1 << _0x2f0e2a - 1;
        while (_0x25f6f0 & _0x3281bc) {
          _0x3281bc >>= 1;
        }
        if (_0x3281bc !== 0) {
          _0x25f6f0 &= _0x3281bc - 1;
          _0x25f6f0 += _0x3281bc;
        } else {
          _0x25f6f0 = 0;
        }
        _0x25b76d++;
        if (--_0x431cbc[_0x2f0e2a] === 0) {
          if (_0x2f0e2a === _0x51cae3) {
            break;
          }
          _0x2f0e2a = _0x1bf09f[_0x32b341 + _0xd8c15c[_0x25b76d]];
        }
        if (_0x2f0e2a > _0x8eb076 && (_0x25f6f0 & _0x1d4b0e) !== _0x20e0c0) {
          if (_0x518dde === 0) {
            _0x518dde = _0x8eb076;
          }
          _0x5c18fb += _0x2a834d;
          _0x4c6d7d = _0x2f0e2a - _0x518dde;
          _0x21af3d = 1 << _0x4c6d7d;
          while (_0x4c6d7d + _0x518dde < _0x51cae3) {
            _0x21af3d -= _0x431cbc[_0x4c6d7d + _0x518dde];
            if (_0x21af3d <= 0) {
              break;
            }
            _0x4c6d7d++;
            _0x21af3d <<= 1;
          }
          _0x55089d += 1 << _0x4c6d7d;
          if (_0x115e7f === _0x387483 && _0x55089d > _0x3447ee || _0x115e7f === _0x547693 && _0x55089d > _0x6d3086) {
            return 1;
          }
          _0x20e0c0 = _0x25f6f0 & _0x1d4b0e;
          _0x3e5310[_0x20e0c0] = _0x8eb076 << 24 | _0x4c6d7d << 16 | _0x5c18fb - _0x7216f3 | 0;
        }
      }
      if (_0x25f6f0 !== 0) {
        _0x3e5310[_0x5c18fb + _0x25f6f0] = _0x2f0e2a - _0x518dde << 24 | 4194304 | 0;
      }
      _0x90da4c.bits = _0x8eb076;
      return 0;
    };
    var _0xb35c0d = _0x26530d;
    const _0x44aad0 = 0;
    const _0x5137e1 = 1;
    const _0x503392 = 2;
    const {
      Z_FINISH: _0x288847,
      Z_BLOCK: _0x543f7d,
      Z_TREES: _0x44b525,
      Z_OK: _0xfb3f7f,
      Z_STREAM_END: _0x2bad13,
      Z_NEED_DICT: _0x35433b,
      Z_STREAM_ERROR: _0x123341,
      Z_DATA_ERROR: _0x74cde7,
      Z_MEM_ERROR: _0x294aef,
      Z_BUF_ERROR: _0x8a0b0a,
      Z_DEFLATED: _0x5772ac
    } = _0x3726bc;
    const _0x1df194 = 16180;
    const _0x27ded9 = 16181;
    const _0x4f4b68 = 16182;
    const _0x2586dd = 16183;
    const _0x109bac = 16184;
    const _0x139e2c = 16185;
    const _0x4cb8d1 = 16186;
    const _0x2f4206 = 16187;
    const _0x32e624 = 16188;
    const _0x1465d8 = 16189;
    const _0xdbe08f = 16190;
    const _0x55fd62 = 16191;
    const _0x78c6e9 = 16192;
    const _0x37f1d6 = 16193;
    const _0x533ce0 = 16194;
    const _0x37acdf = 16195;
    const _0x40b6ef = 16196;
    const _0x19f0c5 = 16197;
    const _0x15226a = 16198;
    const _0x349a9f = 16199;
    const _0x57bd93 = 16200;
    const _0x355771 = 16201;
    const _0x1f6ca2 = 16202;
    const _0x4fcb1d = 16203;
    const _0x46810c = 16204;
    const _0x49d397 = 16205;
    const _0x3ad44e = 16206;
    const _0x4dec14 = 16207;
    const _0x2cbb12 = 16208;
    const _0x2d0c80 = 16209;
    const _0x487592 = 16210;
    const _0x3c7b50 = 16211;
    const _0x426dd7 = 852;
    const _0x4650e5 = 592;
    const _0x392404 = 15;
    const _0x5591d3 = _0x392404;
    const _0x2583be = (_0xdd927) => {
      return (_0xdd927 >>> 24 & 255) + (_0xdd927 >>> 8 & 65280) + ((_0xdd927 & 65280) << 8) + ((_0xdd927 & 255) << 24);
    };
    function _0x346357() {
      this.strm = null;
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new Uint16Array(320);
      this.work = new Uint16Array(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    const _0x4f95ec = (_0x3f1b0e) => {
      if (!_0x3f1b0e) {
        return 1;
      }
      const _0x4f2608 = _0x3f1b0e.state;
      if (!_0x4f2608 || _0x4f2608.strm !== _0x3f1b0e || _0x4f2608.mode < _0x1df194 || _0x4f2608.mode > _0x3c7b50) {
        return 1;
      }
      return 0;
    };
    const _0x3d50a0 = (_0x48588a) => {
      if (_0x4f95ec(_0x48588a)) {
        return _0x123341;
      }
      const _0x7cb23 = _0x48588a.state;
      _0x48588a.total_in = _0x48588a.total_out = _0x7cb23.total = 0;
      _0x48588a.msg = "";
      if (_0x7cb23.wrap) {
        _0x48588a.adler = _0x7cb23.wrap & 1;
      }
      _0x7cb23.mode = _0x1df194;
      _0x7cb23.last = 0;
      _0x7cb23.havedict = 0;
      _0x7cb23.flags = -1;
      _0x7cb23.dmax = 32768;
      _0x7cb23.head = null;
      _0x7cb23.hold = 0;
      _0x7cb23.bits = 0;
      _0x7cb23.lencode = _0x7cb23.lendyn = new Int32Array(_0x426dd7);
      _0x7cb23.distcode = _0x7cb23.distdyn = new Int32Array(_0x4650e5);
      _0x7cb23.sane = 1;
      _0x7cb23.back = -1;
      return _0xfb3f7f;
    };
    const _0x588eec = (_0x2e1f7d) => {
      if (_0x4f95ec(_0x2e1f7d)) {
        return _0x123341;
      }
      const _0x252570 = _0x2e1f7d.state;
      _0x252570.wsize = 0;
      _0x252570.whave = 0;
      _0x252570.wnext = 0;
      return _0x3d50a0(_0x2e1f7d);
    };
    const _0x524dab = (_0x126429, _0x1761a1) => {
      let _0x3d23bb;
      if (_0x4f95ec(_0x126429)) {
        return _0x123341;
      }
      const _0x4fb759 = _0x126429.state;
      if (_0x1761a1 < 0) {
        _0x3d23bb = 0;
        _0x1761a1 = -_0x1761a1;
      } else {
        _0x3d23bb = (_0x1761a1 >> 4) + 5;
        if (_0x1761a1 < 48) {
          _0x1761a1 &= 15;
        }
      }
      if (_0x1761a1 && (_0x1761a1 < 8 || _0x1761a1 > 15)) {
        return _0x123341;
      }
      if (_0x4fb759.window !== null && _0x4fb759.wbits !== _0x1761a1) {
        _0x4fb759.window = null;
      }
      _0x4fb759.wrap = _0x3d23bb;
      _0x4fb759.wbits = _0x1761a1;
      return _0x588eec(_0x126429);
    };
    const _0x401084 = (_0x10fec3, _0x3a83ef) => {
      if (!_0x10fec3) {
        return _0x123341;
      }
      const _0x128e9e = new _0x346357();
      _0x10fec3.state = _0x128e9e;
      _0x128e9e.strm = _0x10fec3;
      _0x128e9e.window = null;
      _0x128e9e.mode = _0x1df194;
      const _0x499e45 = _0x524dab(_0x10fec3, _0x3a83ef);
      if (_0x499e45 !== _0xfb3f7f) {
        _0x10fec3.state = null;
      }
      return _0x499e45;
    };
    const _0x5eda0a = (_0x3fc429) => {
      return _0x401084(_0x3fc429, _0x5591d3);
    };
    let _0x4f35f0 = true;
    let _0x439e4f;
    let _0x5db2e9;
    const _0x29309f = (_0x72ea63) => {
      if (_0x4f35f0) {
        _0x439e4f = new Int32Array(512);
        _0x5db2e9 = new Int32Array(32);
        let _0x2b5ba2 = 0;
        while (_0x2b5ba2 < 144) {
          _0x72ea63.lens[_0x2b5ba2++] = 8;
        }
        while (_0x2b5ba2 < 256) {
          _0x72ea63.lens[_0x2b5ba2++] = 9;
        }
        while (_0x2b5ba2 < 280) {
          _0x72ea63.lens[_0x2b5ba2++] = 7;
        }
        while (_0x2b5ba2 < 288) {
          _0x72ea63.lens[_0x2b5ba2++] = 8;
        }
        _0xb35c0d(_0x5137e1, _0x72ea63.lens, 0, 288, _0x439e4f, 0, _0x72ea63.work, {
          bits: 9
        });
        _0x2b5ba2 = 0;
        while (_0x2b5ba2 < 32) {
          _0x72ea63.lens[_0x2b5ba2++] = 5;
        }
        _0xb35c0d(_0x503392, _0x72ea63.lens, 0, 32, _0x5db2e9, 0, _0x72ea63.work, {
          bits: 5
        });
        _0x4f35f0 = false;
      }
      _0x72ea63.lencode = _0x439e4f;
      _0x72ea63.lenbits = 9;
      _0x72ea63.distcode = _0x5db2e9;
      _0x72ea63.distbits = 5;
    };
    const _0x519e99 = (_0x22acaf, _0x2bd089, _0x40d121, _0x455708) => {
      let _0x5d9e4e;
      const _0x27bc53 = _0x22acaf.state;
      if (_0x27bc53.window === null) {
        _0x27bc53.wsize = 1 << _0x27bc53.wbits;
        _0x27bc53.wnext = 0;
        _0x27bc53.whave = 0;
        _0x27bc53.window = new Uint8Array(_0x27bc53.wsize);
      }
      if (_0x455708 >= _0x27bc53.wsize) {
        _0x27bc53.window.set(_0x2bd089.subarray(_0x40d121 - _0x27bc53.wsize, _0x40d121), 0);
        _0x27bc53.wnext = 0;
        _0x27bc53.whave = _0x27bc53.wsize;
      } else {
        _0x5d9e4e = _0x27bc53.wsize - _0x27bc53.wnext;
        if (_0x5d9e4e > _0x455708) {
          _0x5d9e4e = _0x455708;
        }
        _0x27bc53.window.set(_0x2bd089.subarray(_0x40d121 - _0x455708, _0x40d121 - _0x455708 + _0x5d9e4e), _0x27bc53.wnext);
        _0x455708 -= _0x5d9e4e;
        if (_0x455708) {
          _0x27bc53.window.set(_0x2bd089.subarray(_0x40d121 - _0x455708, _0x40d121), 0);
          _0x27bc53.wnext = _0x455708;
          _0x27bc53.whave = _0x27bc53.wsize;
        } else {
          _0x27bc53.wnext += _0x5d9e4e;
          if (_0x27bc53.wnext === _0x27bc53.wsize) {
            _0x27bc53.wnext = 0;
          }
          if (_0x27bc53.whave < _0x27bc53.wsize) {
            _0x27bc53.whave += _0x5d9e4e;
          }
        }
      }
      return 0;
    };
    const _0x18365a = (_0x311666, _0x5587b8) => {
      let _0x4ca41e;
      let _0x120663;
      let _0x1fcb22;
      let _0x7115b0;
      let _0xae6a52;
      let _0x530d2e;
      let _0x401c08;
      let _0x1b0fa0;
      let _0x322cbb;
      let _0x565973;
      let _0xb8619d;
      let _0x1c7f42;
      let _0x1942eb;
      let _0x5b608f;
      let _0x246819 = 0;
      let _0x3046df;
      let _0x34e615;
      let _0x32070b;
      let _0x41efb7;
      let _0x590fcf;
      let _0x39884a;
      let _0x3a5ca9;
      let _0x1fcfff;
      const _0x1bf7ec = new Uint8Array(4);
      let _0x434428;
      let _0xa91f84;
      const _0x9001bf = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (_0x4f95ec(_0x311666) || !_0x311666.output || !_0x311666.input && _0x311666.avail_in !== 0) {
        return _0x123341;
      }
      _0x4ca41e = _0x311666.state;
      if (_0x4ca41e.mode === _0x55fd62) {
        _0x4ca41e.mode = _0x78c6e9;
      }
      _0xae6a52 = _0x311666.next_out;
      _0x1fcb22 = _0x311666.output;
      _0x401c08 = _0x311666.avail_out;
      _0x7115b0 = _0x311666.next_in;
      _0x120663 = _0x311666.input;
      _0x530d2e = _0x311666.avail_in;
      _0x1b0fa0 = _0x4ca41e.hold;
      _0x322cbb = _0x4ca41e.bits;
      _0x565973 = _0x530d2e;
      _0xb8619d = _0x401c08;
      _0x1fcfff = _0xfb3f7f;
      _0x1e5e18: while (true) {
        switch (_0x4ca41e.mode) {
          case _0x1df194:
            if (_0x4ca41e.wrap === 0) {
              _0x4ca41e.mode = _0x78c6e9;
              break;
            }
            while (_0x322cbb < 16) {
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x530d2e--;
              _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
              _0x322cbb += 8;
            }
            if (_0x4ca41e.wrap & 2 && _0x1b0fa0 === 35615) {
              if (_0x4ca41e.wbits === 0) {
                _0x4ca41e.wbits = 15;
              }
              _0x4ca41e.check = 0;
              _0x1bf7ec[0] = _0x1b0fa0 & 255;
              _0x1bf7ec[1] = _0x1b0fa0 >>> 8 & 255;
              _0x4ca41e.check = _0x410e97(_0x4ca41e.check, _0x1bf7ec, 2, 0);
              _0x1b0fa0 = 0;
              _0x322cbb = 0;
              _0x4ca41e.mode = _0x27ded9;
              break;
            }
            if (_0x4ca41e.head) {
              _0x4ca41e.head.done = false;
            }
            if (!(_0x4ca41e.wrap & 1) || (((_0x1b0fa0 & 255) << 8) + (_0x1b0fa0 >> 8)) % 31) {
              _0x311666.msg = "incorrect header check";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            if ((_0x1b0fa0 & 15) !== _0x5772ac) {
              _0x311666.msg = "unknown compression method";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x1b0fa0 >>>= 4;
            _0x322cbb -= 4;
            _0x3a5ca9 = (_0x1b0fa0 & 15) + 8;
            if (_0x4ca41e.wbits === 0) {
              _0x4ca41e.wbits = _0x3a5ca9;
            }
            if (_0x3a5ca9 > 15 || _0x3a5ca9 > _0x4ca41e.wbits) {
              _0x311666.msg = "invalid window size";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x4ca41e.dmax = 1 << _0x4ca41e.wbits;
            _0x4ca41e.flags = 0;
            _0x311666.adler = _0x4ca41e.check = 1;
            _0x4ca41e.mode = _0x1b0fa0 & 512 ? _0x1465d8 : _0x55fd62;
            _0x1b0fa0 = 0;
            _0x322cbb = 0;
            break;
          case _0x27ded9:
            while (_0x322cbb < 16) {
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x530d2e--;
              _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
              _0x322cbb += 8;
            }
            _0x4ca41e.flags = _0x1b0fa0;
            if ((_0x4ca41e.flags & 255) !== _0x5772ac) {
              _0x311666.msg = "unknown compression method";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            if (_0x4ca41e.flags & 57344) {
              _0x311666.msg = "unknown header flags set";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            if (_0x4ca41e.head) {
              _0x4ca41e.head.text = _0x1b0fa0 >> 8 & 1;
            }
            if (_0x4ca41e.flags & 512 && _0x4ca41e.wrap & 4) {
              _0x1bf7ec[0] = _0x1b0fa0 & 255;
              _0x1bf7ec[1] = _0x1b0fa0 >>> 8 & 255;
              _0x4ca41e.check = _0x410e97(_0x4ca41e.check, _0x1bf7ec, 2, 0);
            }
            _0x1b0fa0 = 0;
            _0x322cbb = 0;
            _0x4ca41e.mode = _0x4f4b68;
          case _0x4f4b68:
            while (_0x322cbb < 32) {
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x530d2e--;
              _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
              _0x322cbb += 8;
            }
            if (_0x4ca41e.head) {
              _0x4ca41e.head.time = _0x1b0fa0;
            }
            if (_0x4ca41e.flags & 512 && _0x4ca41e.wrap & 4) {
              _0x1bf7ec[0] = _0x1b0fa0 & 255;
              _0x1bf7ec[1] = _0x1b0fa0 >>> 8 & 255;
              _0x1bf7ec[2] = _0x1b0fa0 >>> 16 & 255;
              _0x1bf7ec[3] = _0x1b0fa0 >>> 24 & 255;
              _0x4ca41e.check = _0x410e97(_0x4ca41e.check, _0x1bf7ec, 4, 0);
            }
            _0x1b0fa0 = 0;
            _0x322cbb = 0;
            _0x4ca41e.mode = _0x2586dd;
          case _0x2586dd:
            while (_0x322cbb < 16) {
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x530d2e--;
              _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
              _0x322cbb += 8;
            }
            if (_0x4ca41e.head) {
              _0x4ca41e.head.xflags = _0x1b0fa0 & 255;
              _0x4ca41e.head.os = _0x1b0fa0 >> 8;
            }
            if (_0x4ca41e.flags & 512 && _0x4ca41e.wrap & 4) {
              _0x1bf7ec[0] = _0x1b0fa0 & 255;
              _0x1bf7ec[1] = _0x1b0fa0 >>> 8 & 255;
              _0x4ca41e.check = _0x410e97(_0x4ca41e.check, _0x1bf7ec, 2, 0);
            }
            _0x1b0fa0 = 0;
            _0x322cbb = 0;
            _0x4ca41e.mode = _0x109bac;
          case _0x109bac:
            if (_0x4ca41e.flags & 1024) {
              while (_0x322cbb < 16) {
                if (_0x530d2e === 0) {
                  break _0x1e5e18;
                }
                _0x530d2e--;
                _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                _0x322cbb += 8;
              }
              _0x4ca41e.length = _0x1b0fa0;
              if (_0x4ca41e.head) {
                _0x4ca41e.head.extra_len = _0x1b0fa0;
              }
              if (_0x4ca41e.flags & 512 && _0x4ca41e.wrap & 4) {
                _0x1bf7ec[0] = _0x1b0fa0 & 255;
                _0x1bf7ec[1] = _0x1b0fa0 >>> 8 & 255;
                _0x4ca41e.check = _0x410e97(_0x4ca41e.check, _0x1bf7ec, 2, 0);
              }
              _0x1b0fa0 = 0;
              _0x322cbb = 0;
            } else if (_0x4ca41e.head) {
              _0x4ca41e.head.extra = null;
            }
            _0x4ca41e.mode = _0x139e2c;
          case _0x139e2c:
            if (_0x4ca41e.flags & 1024) {
              _0x1c7f42 = _0x4ca41e.length;
              if (_0x1c7f42 > _0x530d2e) {
                _0x1c7f42 = _0x530d2e;
              }
              if (_0x1c7f42) {
                if (_0x4ca41e.head) {
                  _0x3a5ca9 = _0x4ca41e.head.extra_len - _0x4ca41e.length;
                  if (!_0x4ca41e.head.extra) {
                    _0x4ca41e.head.extra = new Uint8Array(_0x4ca41e.head.extra_len);
                  }
                  _0x4ca41e.head.extra.set(_0x120663.subarray(_0x7115b0, _0x7115b0 + _0x1c7f42), _0x3a5ca9);
                }
                if (_0x4ca41e.flags & 512 && _0x4ca41e.wrap & 4) {
                  _0x4ca41e.check = _0x410e97(_0x4ca41e.check, _0x120663, _0x1c7f42, _0x7115b0);
                }
                _0x530d2e -= _0x1c7f42;
                _0x7115b0 += _0x1c7f42;
                _0x4ca41e.length -= _0x1c7f42;
              }
              if (_0x4ca41e.length) {
                break _0x1e5e18;
              }
            }
            _0x4ca41e.length = 0;
            _0x4ca41e.mode = _0x4cb8d1;
          case _0x4cb8d1:
            if (_0x4ca41e.flags & 2048) {
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x1c7f42 = 0;
              do {
                _0x3a5ca9 = _0x120663[_0x7115b0 + _0x1c7f42++];
                if (_0x4ca41e.head && _0x3a5ca9 && _0x4ca41e.length < 65536) {
                  _0x4ca41e.head.name += String.fromCharCode(_0x3a5ca9);
                }
              } while (_0x3a5ca9 && _0x1c7f42 < _0x530d2e);
              if (_0x4ca41e.flags & 512 && _0x4ca41e.wrap & 4) {
                _0x4ca41e.check = _0x410e97(_0x4ca41e.check, _0x120663, _0x1c7f42, _0x7115b0);
              }
              _0x530d2e -= _0x1c7f42;
              _0x7115b0 += _0x1c7f42;
              if (_0x3a5ca9) {
                break _0x1e5e18;
              }
            } else if (_0x4ca41e.head) {
              _0x4ca41e.head.name = null;
            }
            _0x4ca41e.length = 0;
            _0x4ca41e.mode = _0x2f4206;
          case _0x2f4206:
            if (_0x4ca41e.flags & 4096) {
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x1c7f42 = 0;
              do {
                _0x3a5ca9 = _0x120663[_0x7115b0 + _0x1c7f42++];
                if (_0x4ca41e.head && _0x3a5ca9 && _0x4ca41e.length < 65536) {
                  _0x4ca41e.head.comment += String.fromCharCode(_0x3a5ca9);
                }
              } while (_0x3a5ca9 && _0x1c7f42 < _0x530d2e);
              if (_0x4ca41e.flags & 512 && _0x4ca41e.wrap & 4) {
                _0x4ca41e.check = _0x410e97(_0x4ca41e.check, _0x120663, _0x1c7f42, _0x7115b0);
              }
              _0x530d2e -= _0x1c7f42;
              _0x7115b0 += _0x1c7f42;
              if (_0x3a5ca9) {
                break _0x1e5e18;
              }
            } else if (_0x4ca41e.head) {
              _0x4ca41e.head.comment = null;
            }
            _0x4ca41e.mode = _0x32e624;
          case _0x32e624:
            if (_0x4ca41e.flags & 512) {
              while (_0x322cbb < 16) {
                if (_0x530d2e === 0) {
                  break _0x1e5e18;
                }
                _0x530d2e--;
                _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                _0x322cbb += 8;
              }
              if (_0x4ca41e.wrap & 4 && _0x1b0fa0 !== (_0x4ca41e.check & 65535)) {
                _0x311666.msg = "header crc mismatch";
                _0x4ca41e.mode = _0x2d0c80;
                break;
              }
              _0x1b0fa0 = 0;
              _0x322cbb = 0;
            }
            if (_0x4ca41e.head) {
              _0x4ca41e.head.hcrc = _0x4ca41e.flags >> 9 & 1;
              _0x4ca41e.head.done = true;
            }
            _0x311666.adler = _0x4ca41e.check = 0;
            _0x4ca41e.mode = _0x55fd62;
            break;
          case _0x1465d8:
            while (_0x322cbb < 32) {
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x530d2e--;
              _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
              _0x322cbb += 8;
            }
            _0x311666.adler = _0x4ca41e.check = _0x2583be(_0x1b0fa0);
            _0x1b0fa0 = 0;
            _0x322cbb = 0;
            _0x4ca41e.mode = _0xdbe08f;
          case _0xdbe08f:
            if (_0x4ca41e.havedict === 0) {
              _0x311666.next_out = _0xae6a52;
              _0x311666.avail_out = _0x401c08;
              _0x311666.next_in = _0x7115b0;
              _0x311666.avail_in = _0x530d2e;
              _0x4ca41e.hold = _0x1b0fa0;
              _0x4ca41e.bits = _0x322cbb;
              return _0x35433b;
            }
            _0x311666.adler = _0x4ca41e.check = 1;
            _0x4ca41e.mode = _0x55fd62;
          case _0x55fd62:
            if (_0x5587b8 === _0x543f7d || _0x5587b8 === _0x44b525) {
              break _0x1e5e18;
            }
          case _0x78c6e9:
            if (_0x4ca41e.last) {
              _0x1b0fa0 >>>= _0x322cbb & 7;
              _0x322cbb -= _0x322cbb & 7;
              _0x4ca41e.mode = _0x3ad44e;
              break;
            }
            while (_0x322cbb < 3) {
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x530d2e--;
              _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
              _0x322cbb += 8;
            }
            _0x4ca41e.last = _0x1b0fa0 & 1;
            _0x1b0fa0 >>>= 1;
            _0x322cbb -= 1;
            switch (_0x1b0fa0 & 3) {
              case 0:
                _0x4ca41e.mode = _0x37f1d6;
                break;
              case 1:
                _0x29309f(_0x4ca41e);
                _0x4ca41e.mode = _0x349a9f;
                if (_0x5587b8 === _0x44b525) {
                  _0x1b0fa0 >>>= 2;
                  _0x322cbb -= 2;
                  break _0x1e5e18;
                }
                break;
              case 2:
                _0x4ca41e.mode = _0x40b6ef;
                break;
              case 3:
                _0x311666.msg = "invalid block type";
                _0x4ca41e.mode = _0x2d0c80;
            }
            _0x1b0fa0 >>>= 2;
            _0x322cbb -= 2;
            break;
          case _0x37f1d6:
            _0x1b0fa0 >>>= _0x322cbb & 7;
            _0x322cbb -= _0x322cbb & 7;
            while (_0x322cbb < 32) {
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x530d2e--;
              _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
              _0x322cbb += 8;
            }
            if ((_0x1b0fa0 & 65535) !== (_0x1b0fa0 >>> 16 ^ 65535)) {
              _0x311666.msg = "invalid stored block lengths";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x4ca41e.length = _0x1b0fa0 & 65535;
            _0x1b0fa0 = 0;
            _0x322cbb = 0;
            _0x4ca41e.mode = _0x533ce0;
            if (_0x5587b8 === _0x44b525) {
              break _0x1e5e18;
            }
          case _0x533ce0:
            _0x4ca41e.mode = _0x37acdf;
          case _0x37acdf:
            _0x1c7f42 = _0x4ca41e.length;
            if (_0x1c7f42) {
              if (_0x1c7f42 > _0x530d2e) {
                _0x1c7f42 = _0x530d2e;
              }
              if (_0x1c7f42 > _0x401c08) {
                _0x1c7f42 = _0x401c08;
              }
              if (_0x1c7f42 === 0) {
                break _0x1e5e18;
              }
              _0x1fcb22.set(_0x120663.subarray(_0x7115b0, _0x7115b0 + _0x1c7f42), _0xae6a52);
              _0x530d2e -= _0x1c7f42;
              _0x7115b0 += _0x1c7f42;
              _0x401c08 -= _0x1c7f42;
              _0xae6a52 += _0x1c7f42;
              _0x4ca41e.length -= _0x1c7f42;
              break;
            }
            _0x4ca41e.mode = _0x55fd62;
            break;
          case _0x40b6ef:
            while (_0x322cbb < 14) {
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x530d2e--;
              _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
              _0x322cbb += 8;
            }
            _0x4ca41e.nlen = (_0x1b0fa0 & 31) + 257;
            _0x1b0fa0 >>>= 5;
            _0x322cbb -= 5;
            _0x4ca41e.ndist = (_0x1b0fa0 & 31) + 1;
            _0x1b0fa0 >>>= 5;
            _0x322cbb -= 5;
            _0x4ca41e.ncode = (_0x1b0fa0 & 15) + 4;
            _0x1b0fa0 >>>= 4;
            _0x322cbb -= 4;
            if (_0x4ca41e.nlen > 286 || _0x4ca41e.ndist > 30) {
              _0x311666.msg = "too many length or distance symbols";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x4ca41e.have = 0;
            _0x4ca41e.mode = _0x19f0c5;
          case _0x19f0c5:
            while (_0x4ca41e.have < _0x4ca41e.ncode) {
              while (_0x322cbb < 3) {
                if (_0x530d2e === 0) {
                  break _0x1e5e18;
                }
                _0x530d2e--;
                _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                _0x322cbb += 8;
              }
              _0x4ca41e.lens[_0x9001bf[_0x4ca41e.have++]] = _0x1b0fa0 & 7;
              _0x1b0fa0 >>>= 3;
              _0x322cbb -= 3;
            }
            while (_0x4ca41e.have < 19) {
              _0x4ca41e.lens[_0x9001bf[_0x4ca41e.have++]] = 0;
            }
            _0x4ca41e.lencode = _0x4ca41e.lendyn;
            _0x4ca41e.lenbits = 7;
            var _0x25fcaa = {
              bits: _0x4ca41e.lenbits
            };
            _0x434428 = _0x25fcaa;
            _0x1fcfff = _0xb35c0d(_0x44aad0, _0x4ca41e.lens, 0, 19, _0x4ca41e.lencode, 0, _0x4ca41e.work, _0x434428);
            _0x4ca41e.lenbits = _0x434428.bits;
            if (_0x1fcfff) {
              _0x311666.msg = "invalid code lengths set";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x4ca41e.have = 0;
            _0x4ca41e.mode = _0x15226a;
          case _0x15226a:
            while (_0x4ca41e.have < _0x4ca41e.nlen + _0x4ca41e.ndist) {
              while (true) {
                _0x246819 = _0x4ca41e.lencode[_0x1b0fa0 & (1 << _0x4ca41e.lenbits) - 1];
                _0x3046df = _0x246819 >>> 24;
                _0x34e615 = _0x246819 >>> 16 & 255;
                _0x32070b = _0x246819 & 65535;
                if (_0x3046df <= _0x322cbb) {
                  break;
                }
                if (_0x530d2e === 0) {
                  break _0x1e5e18;
                }
                _0x530d2e--;
                _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                _0x322cbb += 8;
              }
              if (_0x32070b < 16) {
                _0x1b0fa0 >>>= _0x3046df;
                _0x322cbb -= _0x3046df;
                _0x4ca41e.lens[_0x4ca41e.have++] = _0x32070b;
              } else {
                if (_0x32070b === 16) {
                  _0xa91f84 = _0x3046df + 2;
                  while (_0x322cbb < _0xa91f84) {
                    if (_0x530d2e === 0) {
                      break _0x1e5e18;
                    }
                    _0x530d2e--;
                    _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                    _0x322cbb += 8;
                  }
                  _0x1b0fa0 >>>= _0x3046df;
                  _0x322cbb -= _0x3046df;
                  if (_0x4ca41e.have === 0) {
                    _0x311666.msg = "invalid bit length repeat";
                    _0x4ca41e.mode = _0x2d0c80;
                    break;
                  }
                  _0x3a5ca9 = _0x4ca41e.lens[_0x4ca41e.have - 1];
                  _0x1c7f42 = 3 + (_0x1b0fa0 & 3);
                  _0x1b0fa0 >>>= 2;
                  _0x322cbb -= 2;
                } else if (_0x32070b === 17) {
                  _0xa91f84 = _0x3046df + 3;
                  while (_0x322cbb < _0xa91f84) {
                    if (_0x530d2e === 0) {
                      break _0x1e5e18;
                    }
                    _0x530d2e--;
                    _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                    _0x322cbb += 8;
                  }
                  _0x1b0fa0 >>>= _0x3046df;
                  _0x322cbb -= _0x3046df;
                  _0x3a5ca9 = 0;
                  _0x1c7f42 = 3 + (_0x1b0fa0 & 7);
                  _0x1b0fa0 >>>= 3;
                  _0x322cbb -= 3;
                } else {
                  _0xa91f84 = _0x3046df + 7;
                  while (_0x322cbb < _0xa91f84) {
                    if (_0x530d2e === 0) {
                      break _0x1e5e18;
                    }
                    _0x530d2e--;
                    _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                    _0x322cbb += 8;
                  }
                  _0x1b0fa0 >>>= _0x3046df;
                  _0x322cbb -= _0x3046df;
                  _0x3a5ca9 = 0;
                  _0x1c7f42 = 11 + (_0x1b0fa0 & 127);
                  _0x1b0fa0 >>>= 7;
                  _0x322cbb -= 7;
                }
                if (_0x4ca41e.have + _0x1c7f42 > _0x4ca41e.nlen + _0x4ca41e.ndist) {
                  _0x311666.msg = "invalid bit length repeat";
                  _0x4ca41e.mode = _0x2d0c80;
                  break;
                }
                while (_0x1c7f42--) {
                  _0x4ca41e.lens[_0x4ca41e.have++] = _0x3a5ca9;
                }
              }
            }
            if (_0x4ca41e.mode === _0x2d0c80) {
              break;
            }
            if (_0x4ca41e.lens[256] === 0) {
              _0x311666.msg = "invalid code -- missing end-of-block";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x4ca41e.lenbits = 9;
            var _0x581f64 = {
              bits: _0x4ca41e.lenbits
            };
            _0x434428 = _0x581f64;
            _0x1fcfff = _0xb35c0d(_0x5137e1, _0x4ca41e.lens, 0, _0x4ca41e.nlen, _0x4ca41e.lencode, 0, _0x4ca41e.work, _0x434428);
            _0x4ca41e.lenbits = _0x434428.bits;
            if (_0x1fcfff) {
              _0x311666.msg = "invalid literal/lengths set";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x4ca41e.distbits = 6;
            _0x4ca41e.distcode = _0x4ca41e.distdyn;
            var _0x2c9079 = {
              bits: _0x4ca41e.distbits
            };
            _0x434428 = _0x2c9079;
            _0x1fcfff = _0xb35c0d(_0x503392, _0x4ca41e.lens, _0x4ca41e.nlen, _0x4ca41e.ndist, _0x4ca41e.distcode, 0, _0x4ca41e.work, _0x434428);
            _0x4ca41e.distbits = _0x434428.bits;
            if (_0x1fcfff) {
              _0x311666.msg = "invalid distances set";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x4ca41e.mode = _0x349a9f;
            if (_0x5587b8 === _0x44b525) {
              break _0x1e5e18;
            }
          case _0x349a9f:
            _0x4ca41e.mode = _0x57bd93;
          case _0x57bd93:
            if (_0x530d2e >= 6 && _0x401c08 >= 258) {
              _0x311666.next_out = _0xae6a52;
              _0x311666.avail_out = _0x401c08;
              _0x311666.next_in = _0x7115b0;
              _0x311666.avail_in = _0x530d2e;
              _0x4ca41e.hold = _0x1b0fa0;
              _0x4ca41e.bits = _0x322cbb;
              _0x449372(_0x311666, _0xb8619d);
              _0xae6a52 = _0x311666.next_out;
              _0x1fcb22 = _0x311666.output;
              _0x401c08 = _0x311666.avail_out;
              _0x7115b0 = _0x311666.next_in;
              _0x120663 = _0x311666.input;
              _0x530d2e = _0x311666.avail_in;
              _0x1b0fa0 = _0x4ca41e.hold;
              _0x322cbb = _0x4ca41e.bits;
              if (_0x4ca41e.mode === _0x55fd62) {
                _0x4ca41e.back = -1;
              }
              break;
            }
            _0x4ca41e.back = 0;
            while (true) {
              _0x246819 = _0x4ca41e.lencode[_0x1b0fa0 & (1 << _0x4ca41e.lenbits) - 1];
              _0x3046df = _0x246819 >>> 24;
              _0x34e615 = _0x246819 >>> 16 & 255;
              _0x32070b = _0x246819 & 65535;
              if (_0x3046df <= _0x322cbb) {
                break;
              }
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x530d2e--;
              _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
              _0x322cbb += 8;
            }
            if (_0x34e615 && (_0x34e615 & 240) === 0) {
              _0x41efb7 = _0x3046df;
              _0x590fcf = _0x34e615;
              _0x39884a = _0x32070b;
              while (true) {
                _0x246819 = _0x4ca41e.lencode[_0x39884a + ((_0x1b0fa0 & (1 << _0x41efb7 + _0x590fcf) - 1) >> _0x41efb7)];
                _0x3046df = _0x246819 >>> 24;
                _0x34e615 = _0x246819 >>> 16 & 255;
                _0x32070b = _0x246819 & 65535;
                if (_0x41efb7 + _0x3046df <= _0x322cbb) {
                  break;
                }
                if (_0x530d2e === 0) {
                  break _0x1e5e18;
                }
                _0x530d2e--;
                _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                _0x322cbb += 8;
              }
              _0x1b0fa0 >>>= _0x41efb7;
              _0x322cbb -= _0x41efb7;
              _0x4ca41e.back += _0x41efb7;
            }
            _0x1b0fa0 >>>= _0x3046df;
            _0x322cbb -= _0x3046df;
            _0x4ca41e.back += _0x3046df;
            _0x4ca41e.length = _0x32070b;
            if (_0x34e615 === 0) {
              _0x4ca41e.mode = _0x49d397;
              break;
            }
            if (_0x34e615 & 32) {
              _0x4ca41e.back = -1;
              _0x4ca41e.mode = _0x55fd62;
              break;
            }
            if (_0x34e615 & 64) {
              _0x311666.msg = "invalid literal/length code";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x4ca41e.extra = _0x34e615 & 15;
            _0x4ca41e.mode = _0x355771;
          case _0x355771:
            if (_0x4ca41e.extra) {
              _0xa91f84 = _0x4ca41e.extra;
              while (_0x322cbb < _0xa91f84) {
                if (_0x530d2e === 0) {
                  break _0x1e5e18;
                }
                _0x530d2e--;
                _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                _0x322cbb += 8;
              }
              _0x4ca41e.length += _0x1b0fa0 & (1 << _0x4ca41e.extra) - 1;
              _0x1b0fa0 >>>= _0x4ca41e.extra;
              _0x322cbb -= _0x4ca41e.extra;
              _0x4ca41e.back += _0x4ca41e.extra;
            }
            _0x4ca41e.was = _0x4ca41e.length;
            _0x4ca41e.mode = _0x1f6ca2;
          case _0x1f6ca2:
            while (true) {
              _0x246819 = _0x4ca41e.distcode[_0x1b0fa0 & (1 << _0x4ca41e.distbits) - 1];
              _0x3046df = _0x246819 >>> 24;
              _0x34e615 = _0x246819 >>> 16 & 255;
              _0x32070b = _0x246819 & 65535;
              if (_0x3046df <= _0x322cbb) {
                break;
              }
              if (_0x530d2e === 0) {
                break _0x1e5e18;
              }
              _0x530d2e--;
              _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
              _0x322cbb += 8;
            }
            if ((_0x34e615 & 240) === 0) {
              _0x41efb7 = _0x3046df;
              _0x590fcf = _0x34e615;
              _0x39884a = _0x32070b;
              while (true) {
                _0x246819 = _0x4ca41e.distcode[_0x39884a + ((_0x1b0fa0 & (1 << _0x41efb7 + _0x590fcf) - 1) >> _0x41efb7)];
                _0x3046df = _0x246819 >>> 24;
                _0x34e615 = _0x246819 >>> 16 & 255;
                _0x32070b = _0x246819 & 65535;
                if (_0x41efb7 + _0x3046df <= _0x322cbb) {
                  break;
                }
                if (_0x530d2e === 0) {
                  break _0x1e5e18;
                }
                _0x530d2e--;
                _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                _0x322cbb += 8;
              }
              _0x1b0fa0 >>>= _0x41efb7;
              _0x322cbb -= _0x41efb7;
              _0x4ca41e.back += _0x41efb7;
            }
            _0x1b0fa0 >>>= _0x3046df;
            _0x322cbb -= _0x3046df;
            _0x4ca41e.back += _0x3046df;
            if (_0x34e615 & 64) {
              _0x311666.msg = "invalid distance code";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x4ca41e.offset = _0x32070b;
            _0x4ca41e.extra = _0x34e615 & 15;
            _0x4ca41e.mode = _0x4fcb1d;
          case _0x4fcb1d:
            if (_0x4ca41e.extra) {
              _0xa91f84 = _0x4ca41e.extra;
              while (_0x322cbb < _0xa91f84) {
                if (_0x530d2e === 0) {
                  break _0x1e5e18;
                }
                _0x530d2e--;
                _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                _0x322cbb += 8;
              }
              _0x4ca41e.offset += _0x1b0fa0 & (1 << _0x4ca41e.extra) - 1;
              _0x1b0fa0 >>>= _0x4ca41e.extra;
              _0x322cbb -= _0x4ca41e.extra;
              _0x4ca41e.back += _0x4ca41e.extra;
            }
            if (_0x4ca41e.offset > _0x4ca41e.dmax) {
              _0x311666.msg = "invalid distance too far back";
              _0x4ca41e.mode = _0x2d0c80;
              break;
            }
            _0x4ca41e.mode = _0x46810c;
          case _0x46810c:
            if (_0x401c08 === 0) {
              break _0x1e5e18;
            }
            _0x1c7f42 = _0xb8619d - _0x401c08;
            if (_0x4ca41e.offset > _0x1c7f42) {
              _0x1c7f42 = _0x4ca41e.offset - _0x1c7f42;
              if (_0x1c7f42 > _0x4ca41e.whave) {
                if (_0x4ca41e.sane) {
                  _0x311666.msg = "invalid distance too far back";
                  _0x4ca41e.mode = _0x2d0c80;
                  break;
                }
              }
              if (_0x1c7f42 > _0x4ca41e.wnext) {
                _0x1c7f42 -= _0x4ca41e.wnext;
                _0x1942eb = _0x4ca41e.wsize - _0x1c7f42;
              } else {
                _0x1942eb = _0x4ca41e.wnext - _0x1c7f42;
              }
              if (_0x1c7f42 > _0x4ca41e.length) {
                _0x1c7f42 = _0x4ca41e.length;
              }
              _0x5b608f = _0x4ca41e.window;
            } else {
              _0x5b608f = _0x1fcb22;
              _0x1942eb = _0xae6a52 - _0x4ca41e.offset;
              _0x1c7f42 = _0x4ca41e.length;
            }
            if (_0x1c7f42 > _0x401c08) {
              _0x1c7f42 = _0x401c08;
            }
            _0x401c08 -= _0x1c7f42;
            _0x4ca41e.length -= _0x1c7f42;
            do {
              _0x1fcb22[_0xae6a52++] = _0x5b608f[_0x1942eb++];
            } while (--_0x1c7f42);
            if (_0x4ca41e.length === 0) {
              _0x4ca41e.mode = _0x57bd93;
            }
            break;
          case _0x49d397:
            if (_0x401c08 === 0) {
              break _0x1e5e18;
            }
            _0x1fcb22[_0xae6a52++] = _0x4ca41e.length;
            _0x401c08--;
            _0x4ca41e.mode = _0x57bd93;
            break;
          case _0x3ad44e:
            if (_0x4ca41e.wrap) {
              while (_0x322cbb < 32) {
                if (_0x530d2e === 0) {
                  break _0x1e5e18;
                }
                _0x530d2e--;
                _0x1b0fa0 |= _0x120663[_0x7115b0++] << _0x322cbb;
                _0x322cbb += 8;
              }
              _0xb8619d -= _0x401c08;
              _0x311666.total_out += _0xb8619d;
              _0x4ca41e.total += _0xb8619d;
              if (_0x4ca41e.wrap & 4 && _0xb8619d) {
                _0x311666.adler = _0x4ca41e.check = _0x4ca41e.flags ? _0x410e97(_0x4ca41e.check, _0x1fcb22, _0xb8619d, _0xae6a52 - _0xb8619d) : _0x25ad47(_0x4ca41e.check, _0x1fcb22, _0xb8619d, _0xae6a52 - _0xb8619d);
              }
              _0xb8619d = _0x401c08;
              if (_0x4ca41e.wrap & 4 && (_0x4ca41e.flags ? _0x1b0fa0 : _0x2583be(_0x1b0fa0)) !== _0x4ca41e.check) {
                _0x311666.msg = "incorrect data check";
                _0x4ca41e.mode = _0x2d0c80;
                break;
              }
              _0x1b0fa0 = 0;
              _0x322cbb = 0;
            }
            _0x4ca41e.mode = _0x4dec14;
          case _0x4dec14:
            if (_0x4ca41e.wrap && _0x4ca41e.flags) {
              while (_0x322cbb < 32) {
                if (_0x530d2e === 0) {
                  break _0x1e5e18;
                }
                _0x530d2e--;
                _0x1b0fa0 += _0x120663[_0x7115b0++] << _0x322cbb;
                _0x322cbb += 8;
              }
              if (_0x4ca41e.wrap & 4 && _0x1b0fa0 !== (_0x4ca41e.total & -1)) {
                _0x311666.msg = "incorrect length check";
                _0x4ca41e.mode = _0x2d0c80;
                break;
              }
              _0x1b0fa0 = 0;
              _0x322cbb = 0;
            }
            _0x4ca41e.mode = _0x2cbb12;
          case _0x2cbb12:
            _0x1fcfff = _0x2bad13;
            break _0x1e5e18;
          case _0x2d0c80:
            _0x1fcfff = _0x74cde7;
            break _0x1e5e18;
          case _0x487592:
            return _0x294aef;
          case _0x3c7b50:
          default:
            return _0x123341;
        }
      }
      _0x311666.next_out = _0xae6a52;
      _0x311666.avail_out = _0x401c08;
      _0x311666.next_in = _0x7115b0;
      _0x311666.avail_in = _0x530d2e;
      _0x4ca41e.hold = _0x1b0fa0;
      _0x4ca41e.bits = _0x322cbb;
      if (_0x4ca41e.wsize || _0xb8619d !== _0x311666.avail_out && _0x4ca41e.mode < _0x2d0c80 && (_0x4ca41e.mode < _0x3ad44e || _0x5587b8 !== _0x288847)) {
        if (_0x519e99(_0x311666, _0x311666.output, _0x311666.next_out, _0xb8619d - _0x311666.avail_out)) ;
      }
      _0x565973 -= _0x311666.avail_in;
      _0xb8619d -= _0x311666.avail_out;
      _0x311666.total_in += _0x565973;
      _0x311666.total_out += _0xb8619d;
      _0x4ca41e.total += _0xb8619d;
      if (_0x4ca41e.wrap & 4 && _0xb8619d) {
        _0x311666.adler = _0x4ca41e.check = _0x4ca41e.flags ? _0x410e97(_0x4ca41e.check, _0x1fcb22, _0xb8619d, _0x311666.next_out - _0xb8619d) : _0x25ad47(_0x4ca41e.check, _0x1fcb22, _0xb8619d, _0x311666.next_out - _0xb8619d);
      }
      _0x311666.data_type = _0x4ca41e.bits + (_0x4ca41e.last ? 64 : 0) + (_0x4ca41e.mode === _0x55fd62 ? 128 : 0) + (_0x4ca41e.mode === _0x349a9f || _0x4ca41e.mode === _0x533ce0 ? 256 : 0);
      if ((_0x565973 === 0 && _0xb8619d === 0 || _0x5587b8 === _0x288847) && _0x1fcfff === _0xfb3f7f) {
        _0x1fcfff = _0x8a0b0a;
      }
      return _0x1fcfff;
    };
    const _0x386435 = (_0x1ee952) => {
      if (_0x4f95ec(_0x1ee952)) {
        return _0x123341;
      }
      let _0x4d6564 = _0x1ee952.state;
      _0x4d6564.window && (_0x4d6564.window = null);
      _0x1ee952.state = null;
      return _0xfb3f7f;
    };
    const _0x467273 = (_0x1bc93d, _0x2180d2) => {
      if (_0x4f95ec(_0x1bc93d)) {
        return _0x123341;
      }
      const _0x2dab84 = _0x1bc93d.state;
      if ((_0x2dab84.wrap & 2) === 0) {
        return _0x123341;
      }
      _0x2dab84.head = _0x2180d2;
      _0x2180d2.done = false;
      return _0xfb3f7f;
    };
    const _0x1e8dd2 = (_0x5d3b1b, _0x100b96) => {
      const _0x56d698 = _0x100b96.length;
      let _0x13f3ad;
      let _0x144f8e;
      let _0x42a08f;
      if (_0x4f95ec(_0x5d3b1b)) {
        return _0x123341;
      }
      _0x13f3ad = _0x5d3b1b.state;
      if (_0x13f3ad.wrap !== 0 && _0x13f3ad.mode !== _0xdbe08f) {
        return _0x123341;
      }
      if (_0x13f3ad.mode === _0xdbe08f) {
        _0x144f8e = 1;
        _0x144f8e = _0x25ad47(_0x144f8e, _0x100b96, _0x56d698, 0);
        if (_0x144f8e !== _0x13f3ad.check) {
          return _0x74cde7;
        }
      }
      _0x42a08f = _0x519e99(_0x5d3b1b, _0x100b96, _0x56d698, _0x56d698);
      if (_0x42a08f) {
        _0x13f3ad.mode = _0x487592;
        return _0x294aef;
      }
      _0x13f3ad.havedict = 1;
      return _0xfb3f7f;
    };
    var _0x42446c = _0x588eec;
    var _0x2f528f = _0x524dab;
    var _0x443b9e = _0x3d50a0;
    var _0x2a15d8 = _0x5eda0a;
    var _0x4c0f94 = _0x401084;
    var _0x35b406 = _0x18365a;
    var _0x30bbf2 = _0x386435;
    var _0x5df93d = _0x467273;
    var _0x543fd3 = _0x1e8dd2;
    var _0x166e8f = "pako inflate (from Nodeca project)";
    var _0x54bb88 = {
      inflateReset: _0x42446c,
      inflateReset2: _0x2f528f,
      inflateResetKeep: _0x443b9e,
      inflateInit: _0x2a15d8,
      inflateInit2: _0x4c0f94,
      inflate: _0x35b406,
      inflateEnd: _0x30bbf2,
      inflateGetHeader: _0x5df93d,
      inflateSetDictionary: _0x543fd3,
      inflateInfo: _0x166e8f
    };
    var _0x5bb6c6 = _0x54bb88;
    function _0x225ac0() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    var _0x3969ac = _0x225ac0;
    const _0x50e7af = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x2b2b07,
      Z_FINISH: _0x2c270f,
      Z_OK: _0x456382,
      Z_STREAM_END: _0x1fa069,
      Z_NEED_DICT: _0x816d9c,
      Z_STREAM_ERROR: _0x5c717d,
      Z_DATA_ERROR: _0x4bb456,
      Z_MEM_ERROR: _0x59456e
    } = _0x3726bc;
    function _0x23d21a(_0x56bcbe) {
      this.options = _0x2effd1.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, _0x56bcbe || {});
      const _0x3d9192 = this.options;
      if (_0x3d9192.raw && _0x3d9192.windowBits >= 0 && _0x3d9192.windowBits < 16) {
        _0x3d9192.windowBits = -_0x3d9192.windowBits;
        if (_0x3d9192.windowBits === 0) {
          _0x3d9192.windowBits = -15;
        }
      }
      if (_0x3d9192.windowBits >= 0 && _0x3d9192.windowBits < 16 && (!_0x56bcbe || !_0x56bcbe.windowBits)) {
        _0x3d9192.windowBits += 32;
      }
      if (_0x3d9192.windowBits > 15 && _0x3d9192.windowBits < 48) {
        if ((_0x3d9192.windowBits & 15) === 0) {
          _0x3d9192.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new _0x483ca4();
      this.strm.avail_out = 0;
      let _0x278b96 = _0x5bb6c6.inflateInit2(this.strm, _0x3d9192.windowBits);
      if (_0x278b96 !== _0x456382) {
        throw new Error(_0x702a02[_0x278b96]);
      }
      this.header = new _0x3969ac();
      _0x5bb6c6.inflateGetHeader(this.strm, this.header);
      if (_0x3d9192.dictionary) {
        if (typeof _0x3d9192.dictionary === "string") {
          _0x3d9192.dictionary = _0x5b5ec5.string2buf(_0x3d9192.dictionary);
        } else if (_0x50e7af.call(_0x3d9192.dictionary) === "[object ArrayBuffer]") {
          _0x3d9192.dictionary = new Uint8Array(_0x3d9192.dictionary);
        }
        if (_0x3d9192.raw) {
          _0x278b96 = _0x5bb6c6.inflateSetDictionary(this.strm, _0x3d9192.dictionary);
          if (_0x278b96 !== _0x456382) {
            throw new Error(_0x702a02[_0x278b96]);
          }
        }
      }
    }
    _0x23d21a.prototype.push = function(_0xc478d5, _0x30d0a0) {
      const _0x4c7070 = this.strm;
      const _0x357ac7 = this.options.chunkSize;
      const _0x529b68 = this.options.dictionary;
      let _0x211f27;
      let _0x21ab26;
      let _0x357dfb;
      if (this.ended) {
        return false;
      }
      if (_0x30d0a0 === ~~_0x30d0a0) {
        _0x21ab26 = _0x30d0a0;
      } else {
        _0x21ab26 = _0x30d0a0 === true ? _0x2c270f : _0x2b2b07;
      }
      if (_0x50e7af.call(_0xc478d5) === "[object ArrayBuffer]") {
        _0x4c7070.input = new Uint8Array(_0xc478d5);
      } else {
        _0x4c7070.input = _0xc478d5;
      }
      _0x4c7070.next_in = 0;
      _0x4c7070.avail_in = _0x4c7070.input.length;
      while (true) {
        if (_0x4c7070.avail_out === 0) {
          _0x4c7070.output = new Uint8Array(_0x357ac7);
          _0x4c7070.next_out = 0;
          _0x4c7070.avail_out = _0x357ac7;
        }
        _0x211f27 = _0x5bb6c6.inflate(_0x4c7070, _0x21ab26);
        if (_0x211f27 === _0x816d9c && _0x529b68) {
          _0x211f27 = _0x5bb6c6.inflateSetDictionary(_0x4c7070, _0x529b68);
          if (_0x211f27 === _0x456382) {
            _0x211f27 = _0x5bb6c6.inflate(_0x4c7070, _0x21ab26);
          } else if (_0x211f27 === _0x4bb456) {
            _0x211f27 = _0x816d9c;
          }
        }
        while (_0x4c7070.avail_in > 0 && _0x211f27 === _0x1fa069 && _0x4c7070.state.wrap > 0 && _0xc478d5[_0x4c7070.next_in] !== 0) {
          _0x5bb6c6.inflateReset(_0x4c7070);
          _0x211f27 = _0x5bb6c6.inflate(_0x4c7070, _0x21ab26);
        }
        switch (_0x211f27) {
          case _0x5c717d:
          case _0x4bb456:
          case _0x816d9c:
          case _0x59456e:
            this.onEnd(_0x211f27);
            this.ended = true;
            return false;
        }
        _0x357dfb = _0x4c7070.avail_out;
        if (_0x4c7070.next_out) {
          if (_0x4c7070.avail_out === 0 || _0x211f27 === _0x1fa069) {
            if (this.options.to === "string") {
              let _0x288fb4 = _0x5b5ec5.utf8border(_0x4c7070.output, _0x4c7070.next_out);
              let _0x1b5d91 = _0x4c7070.next_out - _0x288fb4;
              let _0xe5d6c7 = _0x5b5ec5.buf2string(_0x4c7070.output, _0x288fb4);
              _0x4c7070.next_out = _0x1b5d91;
              _0x4c7070.avail_out = _0x357ac7 - _0x1b5d91;
              if (_0x1b5d91) {
                _0x4c7070.output.set(_0x4c7070.output.subarray(_0x288fb4, _0x288fb4 + _0x1b5d91), 0);
              }
              this.onData(_0xe5d6c7);
            } else {
              this.onData(_0x4c7070.output.length === _0x4c7070.next_out ? _0x4c7070.output : _0x4c7070.output.subarray(0, _0x4c7070.next_out));
            }
          }
        }
        if (_0x211f27 === _0x456382 && _0x357dfb === 0) {
          continue;
        }
        if (_0x211f27 === _0x1fa069) {
          _0x211f27 = _0x5bb6c6.inflateEnd(this.strm);
          this.onEnd(_0x211f27);
          this.ended = true;
          return true;
        }
        if (_0x4c7070.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    _0x23d21a.prototype.onData = function(_0x4d3032) {
      this.chunks.push(_0x4d3032);
    };
    _0x23d21a.prototype.onEnd = function(_0x34e455) {
      if (_0x34e455 === _0x456382) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = _0x2effd1.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = _0x34e455;
      this.msg = this.strm.msg;
    };
    function _0x12a55a(_0x52cc32, _0x544719) {
      const _0x323eaf = new _0x23d21a(_0x544719);
      _0x323eaf.push(_0x52cc32);
      if (_0x323eaf.err) {
        throw _0x323eaf.msg || _0x702a02[_0x323eaf.err];
      }
      return _0x323eaf.result;
    }
    function _0x32103e(_0x4544c4, _0x48fe2e) {
      _0x48fe2e = _0x48fe2e || {};
      _0x48fe2e.raw = true;
      return _0x12a55a(_0x4544c4, _0x48fe2e);
    }
    var _0x576db2 = _0x23d21a;
    var _0x944b22 = _0x12a55a;
    var _0x358b01 = _0x32103e;
    var _0x1cf04c = _0x12a55a;
    var _0x4b254c = _0x3726bc;
    var _0x45033f = {
      Inflate: _0x576db2,
      inflate: _0x944b22,
      inflateRaw: _0x358b01,
      ungzip: _0x1cf04c,
      constants: _0x4b254c
    };
    var _0x50d119 = _0x45033f;
    const {
      Deflate: _0x3b9784,
      deflate: _0x34ef78,
      deflateRaw: _0x2c76a9,
      gzip: _0x2a9444
    } = _0x1e7d2c;
    const {
      Inflate: _0x3a4507,
      inflate: _0x27e5da,
      inflateRaw: _0x556dc9,
      ungzip: _0x348ed7
    } = _0x50d119;
    var _0x5e809c = _0x3b9784;
    var _0x3a852b = _0x34ef78;
    var _0x29cff7 = _0x2c76a9;
    var _0x261799 = _0x2a9444;
    var _0x4b242f = _0x3a4507;
    var _0x40150d = _0x27e5da;
    var _0xd37963 = _0x556dc9;
    var _0x59a48b = _0x348ed7;
    var _0x5cf8a6 = _0x3726bc;
    var _0x3c9b65 = {
      Deflate: _0x5e809c,
      deflate: _0x3a852b,
      deflateRaw: _0x29cff7,
      gzip: _0x261799,
      Inflate: _0x4b242f,
      inflate: _0x40150d,
      inflateRaw: _0xd37963,
      ungzip: _0x59a48b,
      constants: _0x5cf8a6
    };
    var _0x51cecc = _0x3c9b65;
    var _0xfa7756 = _0x4f3388(739);
    ;
    var _0xfc8daf = Object.create;
    var _0x2b9995 = Object.defineProperty;
    var _0x321c7c = Object.getOwnPropertyDescriptor;
    var _0x1ed882 = Object.getOwnPropertyNames;
    var _0x33f0aa = Object.getPrototypeOf;
    var _0x141cdc = Object.prototype.hasOwnProperty;
    var _0x4ece14 = (_0x1ad98c, _0x2a3d70) => function _0x30e1a6() {
      if (!_0x2a3d70) {
        (0, _0x1ad98c[_0x1ed882(_0x1ad98c)[0]])((_0x2a3d70 = {
          exports: {}
        }).exports, _0x2a3d70);
      }
      return _0x2a3d70.exports;
    };
    var _0x57b916 = (_0x326216, _0x369597) => {
      for (var _0x362fd9 in _0x369597) {
        _0x2b9995(_0x326216, _0x362fd9, {
          get: _0x369597[_0x362fd9],
          enumerable: true
        });
      }
    };
    var _0x2436c4 = (_0x5a0ecf, _0x4bd9b6, _0x2d726b, _0x5568cd) => {
      if (_0x4bd9b6 && typeof _0x4bd9b6 === "object" || typeof _0x4bd9b6 === "function") {
        for (let _0x313f70 of _0x1ed882(_0x4bd9b6)) {
          if (!_0x141cdc.call(_0x5a0ecf, _0x313f70) && _0x313f70 !== _0x2d726b) {
            _0x2b9995(_0x5a0ecf, _0x313f70, {
              get: () => _0x4bd9b6[_0x313f70],
              enumerable: !(_0x5568cd = _0x321c7c(_0x4bd9b6, _0x313f70)) || _0x5568cd.enumerable
            });
          }
        }
      }
      return _0x5a0ecf;
    };
    var _0x279169 = (_0x51dae7, _0x30c724, _0x425eeb) => {
      _0x425eeb = _0x51dae7 != null ? _0xfc8daf(_0x33f0aa(_0x51dae7)) : {};
      return _0x2436c4(_0x30c724 || !_0x51dae7 || !_0x51dae7.__esModule ? _0x2b9995(_0x425eeb, "default", {
        value: _0x51dae7,
        enumerable: true
      }) : _0x425eeb, _0x51dae7);
    };
    var _0x50cd16 = (_0x491bc0, _0x114d66, _0x35de69) => {
      if (!_0x114d66.has(_0x491bc0)) {
        throw TypeError("Cannot " + _0x35de69);
      }
    };
    var _0x47e5e2 = (_0x1eb722, _0x1d73cc, _0xc79065) => {
      _0x50cd16(_0x1eb722, _0x1d73cc, "read from private field");
      if (_0xc79065) {
        return _0xc79065.call(_0x1eb722);
      } else {
        return _0x1d73cc.get(_0x1eb722);
      }
    };
    var _0x34720d = (_0x5bc567, _0x18d978, _0x218f01) => {
      if (_0x18d978.has(_0x5bc567)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (_0x18d978 instanceof WeakSet) {
        _0x18d978.add(_0x5bc567);
      } else {
        _0x18d978.set(_0x5bc567, _0x218f01);
      }
    };
    var _0x33011a = (_0x5cd994, _0x1462f7, _0x1d1adb, _0x128814) => {
      _0x50cd16(_0x5cd994, _0x1462f7, "write to private field");
      if (_0x128814) {
        _0x128814.call(_0x5cd994, _0x1d1adb);
      } else {
        _0x1462f7.set(_0x5cd994, _0x1d1adb);
      }
      return _0x1d1adb;
    };
    var _0x49d3bd = (_0x5e5942, _0x2495ed, _0x251f36, _0xcbdb8e) => ({
      set _(_0x366cae) {
        _0x33011a(_0x5e5942, _0x2495ed, _0x366cae, _0x251f36);
      },
      get _() {
        return _0x47e5e2(_0x5e5942, _0x2495ed, _0xcbdb8e);
      }
    });
    var _0x1ec034 = (_0x206665, _0x541e2c, _0x3d0e27) => {
      _0x50cd16(_0x206665, _0x541e2c, "access private method");
      return _0x3d0e27;
    };
    var _0x59010e = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/core.js"(_0x403304, _0x28c002) {
        "use strict";
        "use strict";
        (function(_0x64150c, _0x5e698b) {
          if (typeof _0x403304 === "object") {
            _0x28c002.exports = _0x403304 = _0x5e698b();
          } else if (typeof define === "function" && define.amd) {
            define([], _0x5e698b);
          } else {
            _0x64150c.CryptoJS = _0x5e698b();
          }
        })(_0x403304, function() {
          var _0x516485 = _0x516485 || (function(_0x23c80a, _0x34b513) {
            var _0x3e34e7 = Object.create || /* @__PURE__ */ (function() {
              function _0x5bc896() {
              }
              ;
              return function(_0x3a9e28) {
                var _0x4b697a;
                _0x5bc896.prototype = _0x3a9e28;
                _0x4b697a = new _0x5bc896();
                _0x5bc896.prototype = null;
                return _0x4b697a;
              };
            })();
            var _0x310a57 = {};
            var _0x5cb7bc = _0x310a57.lib = {};
            var _0x43f791 = _0x5cb7bc.Base = /* @__PURE__ */ (function() {
              return {
                extend: function(_0x403dd) {
                  var _0xd0c9b1 = _0x3e34e7(this);
                  if (_0x403dd) {
                    _0xd0c9b1.mixIn(_0x403dd);
                  }
                  if (!_0xd0c9b1.hasOwnProperty("init") || this.init === _0xd0c9b1.init) {
                    _0xd0c9b1.init = function() {
                      _0xd0c9b1.$super.init.apply(this, arguments);
                    };
                  }
                  _0xd0c9b1.init.prototype = _0xd0c9b1;
                  _0xd0c9b1.$super = this;
                  return _0xd0c9b1;
                },
                create: function() {
                  var _0x56f22a = this.extend();
                  _0x56f22a.init.apply(_0x56f22a, arguments);
                  return _0x56f22a;
                },
                init: function() {
                },
                mixIn: function(_0x3e5429) {
                  for (var _0x54e2f1 in _0x3e5429) {
                    if (_0x3e5429.hasOwnProperty(_0x54e2f1)) {
                      this[_0x54e2f1] = _0x3e5429[_0x54e2f1];
                    }
                  }
                  if (_0x3e5429.hasOwnProperty("toString")) {
                    this.toString = _0x3e5429.toString;
                  }
                },
                clone: function() {
                  return this.init.prototype.extend(this);
                }
              };
            })();
            var _0x3d3917 = _0x5cb7bc.WordArray = _0x43f791.extend({
              init: function(_0x45b91e, _0x3179c9) {
                _0x45b91e = this.words = _0x45b91e || [];
                if (_0x3179c9 != _0x34b513) {
                  this.sigBytes = _0x3179c9;
                } else {
                  this.sigBytes = _0x45b91e.length * 4;
                }
              },
              toString: function(_0x4a1199) {
                return (_0x4a1199 || _0x4be0e5).stringify(this);
              },
              concat: function(_0x191523) {
                var _0x6d19bd = this.words;
                var _0x4702fb = _0x191523.words;
                var _0x35c507 = this.sigBytes;
                var _0x3f84eb = _0x191523.sigBytes;
                this.clamp();
                if (_0x35c507 % 4) {
                  for (var _0x491fa0 = 0; _0x491fa0 < _0x3f84eb; _0x491fa0++) {
                    var _0x5f1cf6 = _0x4702fb[_0x491fa0 >>> 2] >>> 24 - _0x491fa0 % 4 * 8 & 255;
                    _0x6d19bd[_0x35c507 + _0x491fa0 >>> 2] |= _0x5f1cf6 << 24 - (_0x35c507 + _0x491fa0) % 4 * 8;
                  }
                } else {
                  for (var _0x491fa0 = 0; _0x491fa0 < _0x3f84eb; _0x491fa0 += 4) {
                    _0x6d19bd[_0x35c507 + _0x491fa0 >>> 2] = _0x4702fb[_0x491fa0 >>> 2];
                  }
                }
                this.sigBytes += _0x3f84eb;
                return this;
              },
              clamp: function() {
                var _0x24dae9 = this.words;
                var _0x2f81d5 = this.sigBytes;
                _0x24dae9[_0x2f81d5 >>> 2] &= -1 << 32 - _0x2f81d5 % 4 * 8;
                _0x24dae9.length = _0x23c80a.ceil(_0x2f81d5 / 4);
              },
              clone: function() {
                var _0x1fd47b = _0x43f791.clone.call(this);
                _0x1fd47b.words = this.words.slice(0);
                return _0x1fd47b;
              },
              random: function(_0x1b2d78) {
                var _0x39a492 = [];
                function _0x21bf6d(_0x8989) {
                  var _0x8989 = _0x8989;
                  var _0x564a73 = 987654321;
                  var _0x246234 = 4294967295;
                  return function() {
                    _0x564a73 = (_0x564a73 & 65535) * 36969 + (_0x564a73 >> 16) & _0x246234;
                    _0x8989 = (_0x8989 & 65535) * 18e3 + (_0x8989 >> 16) & _0x246234;
                    var _0x10b174 = (_0x564a73 << 16) + _0x8989 & _0x246234;
                    _0x10b174 /= 4294967296;
                    _0x10b174 += 0.5;
                    return _0x10b174 * (_0x23c80a.random() > 0.5 ? 1 : -1);
                  };
                }
                for (var _0x5351e1 = 0, _0x6aa754; _0x5351e1 < _0x1b2d78; _0x5351e1 += 4) {
                  var _0x4dcb95 = _0x21bf6d((_0x6aa754 || _0x23c80a.random()) * 4294967296);
                  _0x6aa754 = _0x4dcb95() * 987654071;
                  _0x39a492.push(_0x4dcb95() * 4294967296 | 0);
                }
                return new _0x3d3917.init(_0x39a492, _0x1b2d78);
              }
            });
            var _0x4fef63 = _0x310a57.enc = {};
            var _0x4be0e5 = _0x4fef63.Hex = {
              stringify: function(_0x49b769) {
                var _0x10867f = _0x49b769.words;
                var _0x143162 = _0x49b769.sigBytes;
                var _0x51b54d = [];
                for (var _0x34f7cc = 0; _0x34f7cc < _0x143162; _0x34f7cc++) {
                  var _0x180ab9 = _0x10867f[_0x34f7cc >>> 2] >>> 24 - _0x34f7cc % 4 * 8 & 255;
                  _0x51b54d.push((_0x180ab9 >>> 4).toString(16));
                  _0x51b54d.push((_0x180ab9 & 15).toString(16));
                }
                return _0x51b54d.join("");
              },
              parse: function(_0x22e309) {
                var _0x3bb10b = _0x22e309.length;
                var _0x1f7fd3 = [];
                for (var _0x5a276a = 0; _0x5a276a < _0x3bb10b; _0x5a276a += 2) {
                  _0x1f7fd3[_0x5a276a >>> 3] |= parseInt(_0x22e309.substr(_0x5a276a, 2), 16) << 24 - _0x5a276a % 8 * 4;
                }
                return new _0x3d3917.init(_0x1f7fd3, _0x3bb10b / 2);
              }
            };
            var _0x71bebc = _0x4fef63.Latin1 = {
              stringify: function(_0x4bba51) {
                var _0x5747be = _0x4bba51.words;
                var _0x810bb5 = _0x4bba51.sigBytes;
                var _0x533e58 = [];
                for (var _0x9a181b = 0; _0x9a181b < _0x810bb5; _0x9a181b++) {
                  var _0x218416 = _0x5747be[_0x9a181b >>> 2] >>> 24 - _0x9a181b % 4 * 8 & 255;
                  _0x533e58.push(String.fromCharCode(_0x218416));
                }
                return _0x533e58.join("");
              },
              parse: function(_0x5931e8) {
                var _0x4b432e = _0x5931e8.length;
                var _0x6846e = [];
                for (var _0x369193 = 0; _0x369193 < _0x4b432e; _0x369193++) {
                  _0x6846e[_0x369193 >>> 2] |= (_0x5931e8.charCodeAt(_0x369193) & 255) << 24 - _0x369193 % 4 * 8;
                }
                return new _0x3d3917.init(_0x6846e, _0x4b432e);
              }
            };
            var _0x4e0005 = _0x4fef63.Utf8 = {
              stringify: function(_0x351423) {
                try {
                  return decodeURIComponent(escape(_0x71bebc.stringify(_0x351423)));
                } catch (_0x53adc9) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function(_0x144a7e) {
                return _0x71bebc.parse(unescape(encodeURIComponent(_0x144a7e)));
              }
            };
            var _0x17d291 = _0x5cb7bc.BufferedBlockAlgorithm = _0x43f791.extend({
              reset: function() {
                this._data = new _0x3d3917.init();
                this._nDataBytes = 0;
              },
              _append: function(_0x393faf) {
                if (typeof _0x393faf == "string") {
                  _0x393faf = _0x4e0005.parse(_0x393faf);
                }
                this._data.concat(_0x393faf);
                this._nDataBytes += _0x393faf.sigBytes;
              },
              _process: function(_0x2f2f23) {
                var _0x23e62e = this._data;
                var _0x2a9bb3 = _0x23e62e.words;
                var _0x551e90 = _0x23e62e.sigBytes;
                var _0x4b6992 = this.blockSize;
                var _0x2e5446 = _0x4b6992 * 4;
                var _0x1632bc = _0x551e90 / _0x2e5446;
                if (_0x2f2f23) {
                  _0x1632bc = _0x23c80a.ceil(_0x1632bc);
                } else {
                  _0x1632bc = _0x23c80a.max((_0x1632bc | 0) - this._minBufferSize, 0);
                }
                var _0x37a69d = _0x1632bc * _0x4b6992;
                var _0x47ce5e = _0x23c80a.min(_0x37a69d * 4, _0x551e90);
                if (_0x37a69d) {
                  for (var _0x1a752f = 0; _0x1a752f < _0x37a69d; _0x1a752f += _0x4b6992) {
                    this._doProcessBlock(_0x2a9bb3, _0x1a752f);
                  }
                  var _0x3a24ab = _0x2a9bb3.splice(0, _0x37a69d);
                  _0x23e62e.sigBytes -= _0x47ce5e;
                }
                return new _0x3d3917.init(_0x3a24ab, _0x47ce5e);
              },
              clone: function() {
                var _0x5b3d7e = _0x43f791.clone.call(this);
                _0x5b3d7e._data = this._data.clone();
                return _0x5b3d7e;
              },
              _minBufferSize: 0
            });
            var _0x13588b = _0x5cb7bc.Hasher = _0x17d291.extend({
              cfg: _0x43f791.extend(),
              init: function(_0x41d319) {
                this.cfg = this.cfg.extend(_0x41d319);
                this.reset();
              },
              reset: function() {
                _0x17d291.reset.call(this);
                this._doReset();
              },
              update: function(_0x13d26a) {
                this._append(_0x13d26a);
                this._process();
                return this;
              },
              finalize: function(_0x19de38) {
                if (_0x19de38) {
                  this._append(_0x19de38);
                }
                var _0x440755 = this._doFinalize();
                return _0x440755;
              },
              blockSize: 16,
              _createHelper: function(_0x2a9179) {
                return function(_0x126fe2, _0x23abc6) {
                  return new _0x2a9179.init(_0x23abc6).finalize(_0x126fe2);
                };
              },
              _createHmacHelper: function(_0x594ea4) {
                return function(_0x46242d, _0xa29491) {
                  return new _0x4104af.HMAC.init(_0x594ea4, _0xa29491).finalize(_0x46242d);
                };
              }
            });
            var _0x4104af = _0x310a57.algo = {};
            return _0x310a57;
          })(Math);
          return _0x516485;
        });
      }
    });
    var _0x48345e = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(_0x1d120a, _0x355c17) {
        "use strict";
        "use strict";
        (function(_0x809111, _0x394702) {
          if (typeof _0x1d120a === "object") {
            _0x355c17.exports = _0x1d120a = _0x394702(_0x59010e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], _0x394702);
          } else {
            _0x394702(_0x809111.CryptoJS);
          }
        })(_0x1d120a, function(_0x5b001e) {
          (function(_0x28e4d2) {
            var _0x3b5486 = _0x5b001e;
            var _0x35c292 = _0x3b5486.lib;
            var _0x15d5e9 = _0x35c292.Base;
            var _0x4808fc = _0x35c292.WordArray;
            var _0x3d96ce = _0x3b5486.x64 = {};
            var _0x4450c9 = {
              init: function(_0x347581, _0x1c91db) {
                this.high = _0x347581;
                this.low = _0x1c91db;
              }
            };
            var _0x5b93fa = _0x3d96ce.Word = _0x15d5e9.extend(_0x4450c9);
            var _0x143f2f = _0x3d96ce.WordArray = _0x15d5e9.extend({
              init: function(_0x425c1d, _0x40af35) {
                _0x425c1d = this.words = _0x425c1d || [];
                if (_0x40af35 != _0x28e4d2) {
                  this.sigBytes = _0x40af35;
                } else {
                  this.sigBytes = _0x425c1d.length * 8;
                }
              },
              toX32: function() {
                var _0x2159cf = this.words;
                var _0x6d276 = _0x2159cf.length;
                var _0x50f4e3 = [];
                for (var _0xd8dc12 = 0; _0xd8dc12 < _0x6d276; _0xd8dc12++) {
                  var _0x592285 = _0x2159cf[_0xd8dc12];
                  _0x50f4e3.push(_0x592285.high);
                  _0x50f4e3.push(_0x592285.low);
                }
                return _0x4808fc.create(_0x50f4e3, this.sigBytes);
              },
              clone: function() {
                var _0x29d2dc = _0x15d5e9.clone.call(this);
                var _0x57d7ce = _0x29d2dc.words = this.words.slice(0);
                var _0x14cda0 = _0x57d7ce.length;
                for (var _0x347e55 = 0; _0x347e55 < _0x14cda0; _0x347e55++) {
                  _0x57d7ce[_0x347e55] = _0x57d7ce[_0x347e55].clone();
                }
                return _0x29d2dc;
              }
            });
          })();
          return _0x5b001e;
        });
      }
    });
    var _0x5d480e = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(_0xa63a78, _0x51a073) {
        "use strict";
        (function(_0x2c7b4c, _0x5626e2) {
          if (typeof _0xa63a78 === "object") {
            _0x51a073.exports = _0xa63a78 = _0x5626e2(_0x59010e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], _0x5626e2);
          } else {
            _0x5626e2(_0x2c7b4c.CryptoJS);
          }
        })(_0xa63a78, function(_0x12fa14) {
          (function() {
            if (typeof ArrayBuffer != "function") {
              return;
            }
            var _0x43cf8d = _0x12fa14;
            var _0xf346d2 = _0x43cf8d.lib;
            var _0x299cc5 = _0xf346d2.WordArray;
            var _0xcd3fd3 = _0x299cc5.init;
            var _0x5c0559 = _0x299cc5.init = function(_0x581377) {
              if (_0x581377 instanceof ArrayBuffer) {
                _0x581377 = new Uint8Array(_0x581377);
              }
              if (_0x581377 instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && _0x581377 instanceof Uint8ClampedArray || _0x581377 instanceof Int16Array || _0x581377 instanceof Uint16Array || _0x581377 instanceof Int32Array || _0x581377 instanceof Uint32Array || _0x581377 instanceof Float32Array || _0x581377 instanceof Float64Array) {
                _0x581377 = new Uint8Array(_0x581377.buffer, _0x581377.byteOffset, _0x581377.byteLength);
              }
              if (_0x581377 instanceof Uint8Array) {
                var _0x259818 = _0x581377.byteLength;
                var _0x191ed1 = [];
                for (var _0x371abd = 0; _0x371abd < _0x259818; _0x371abd++) {
                  _0x191ed1[_0x371abd >>> 2] |= _0x581377[_0x371abd] << 24 - _0x371abd % 4 * 8;
                }
                _0xcd3fd3.call(this, _0x191ed1, _0x259818);
              } else {
                _0xcd3fd3.apply(this, arguments);
              }
            };
            _0x5c0559.prototype = _0x299cc5;
          })();
          return _0x12fa14.lib.WordArray;
        });
      }
    });
    var _0xa2ee7f = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(_0x3c9b07, _0x193fd9) {
        "use strict";
        (function(_0x290926, _0x58363f) {
          if (typeof _0x3c9b07 === "object") {
            _0x193fd9.exports = _0x3c9b07 = _0x58363f(_0x59010e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], _0x58363f);
          } else {
            _0x58363f(_0x290926.CryptoJS);
          }
        })(_0x3c9b07, function(_0x2f81ea) {
          (function() {
            var _0x1ea282 = _0x2f81ea;
            var _0x1c13ae = _0x1ea282.lib;
            var _0x3c6cb9 = _0x1c13ae.WordArray;
            var _0x569e4e = _0x1ea282.enc;
            var _0x2ce6bd = _0x569e4e.Utf16 = _0x569e4e.Utf16BE = {
              stringify: function(_0x2b7fc8) {
                var _0x5a7115 = _0x2b7fc8.words;
                var _0xc0bcef = _0x2b7fc8.sigBytes;
                var _0x4db2e7 = [];
                for (var _0x55d4ac = 0; _0x55d4ac < _0xc0bcef; _0x55d4ac += 2) {
                  var _0x596a6d = _0x5a7115[_0x55d4ac >>> 2] >>> 16 - _0x55d4ac % 4 * 8 & 65535;
                  _0x4db2e7.push(String.fromCharCode(_0x596a6d));
                }
                return _0x4db2e7.join("");
              },
              parse: function(_0xbdb9af) {
                var _0x4dc9db = _0xbdb9af.length;
                var _0x1d16bd = [];
                for (var _0x10799c = 0; _0x10799c < _0x4dc9db; _0x10799c++) {
                  _0x1d16bd[_0x10799c >>> 1] |= _0xbdb9af.charCodeAt(_0x10799c) << 16 - _0x10799c % 2 * 16;
                }
                return _0x3c6cb9.create(_0x1d16bd, _0x4dc9db * 2);
              }
            };
            _0x569e4e.Utf16LE = {
              stringify: function(_0xb59906) {
                var _0xc95649 = _0xb59906.words;
                var _0x251e81 = _0xb59906.sigBytes;
                var _0xbff93c = [];
                for (var _0x283b99 = 0; _0x283b99 < _0x251e81; _0x283b99 += 2) {
                  var _0x5791ba = _0x586d63(_0xc95649[_0x283b99 >>> 2] >>> 16 - _0x283b99 % 4 * 8 & 65535);
                  _0xbff93c.push(String.fromCharCode(_0x5791ba));
                }
                return _0xbff93c.join("");
              },
              parse: function(_0x2a1393) {
                var _0x15397c = _0x2a1393.length;
                var _0x440aec = [];
                for (var _0x44683d = 0; _0x44683d < _0x15397c; _0x44683d++) {
                  _0x440aec[_0x44683d >>> 1] |= _0x586d63(_0x2a1393.charCodeAt(_0x44683d) << 16 - _0x44683d % 2 * 16);
                }
                return _0x3c6cb9.create(_0x440aec, _0x15397c * 2);
              }
            };
            function _0x586d63(_0x13b5a1) {
              return _0x13b5a1 << 8 & -16711936 | _0x13b5a1 >>> 8 & 16711935;
            }
          })();
          return _0x2f81ea.enc.Utf16;
        });
      }
    });
    var _0x4f591b = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(_0x4aacf9, _0x301c52) {
        "use strict";
        (function(_0x374355, _0x744316) {
          if (typeof _0x4aacf9 === "object") {
            _0x301c52.exports = _0x4aacf9 = _0x744316(_0x59010e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], _0x744316);
          } else {
            _0x744316(_0x374355.CryptoJS);
          }
        })(_0x4aacf9, function(_0x3c6edf) {
          (function() {
            var _0x1226b6 = _0x3c6edf;
            var _0x3e8955 = _0x1226b6.lib;
            var _0xa583a1 = _0x3e8955.WordArray;
            var _0x4acbc9 = _0x1226b6.enc;
            var _0x2bb120 = _0x4acbc9.Base64 = {
              stringify: function(_0x3b701a) {
                var _0x21f816 = _0x3b701a.words;
                var _0x278350 = _0x3b701a.sigBytes;
                var _0xf065a5 = this._map;
                _0x3b701a.clamp();
                var _0x3953f5 = [];
                for (var _0x169688 = 0; _0x169688 < _0x278350; _0x169688 += 3) {
                  var _0x3af34a = _0x21f816[_0x169688 >>> 2] >>> 24 - _0x169688 % 4 * 8 & 255;
                  var _0x5dffa6 = _0x21f816[_0x169688 + 1 >>> 2] >>> 24 - (_0x169688 + 1) % 4 * 8 & 255;
                  var _0xdf400c = _0x21f816[_0x169688 + 2 >>> 2] >>> 24 - (_0x169688 + 2) % 4 * 8 & 255;
                  var _0x41edaf = _0x3af34a << 16 | _0x5dffa6 << 8 | _0xdf400c;
                  for (var _0x58f7af = 0; _0x58f7af < 4 && _0x169688 + _0x58f7af * 0.75 < _0x278350; _0x58f7af++) {
                    _0x3953f5.push(_0xf065a5.charAt(_0x41edaf >>> (3 - _0x58f7af) * 6 & 63));
                  }
                }
                var _0x10c690 = _0xf065a5.charAt(64);
                if (_0x10c690) {
                  while (_0x3953f5.length % 4) {
                    _0x3953f5.push(_0x10c690);
                  }
                }
                return _0x3953f5.join("");
              },
              parse: function(_0x2e21d2) {
                var _0x55af5a = _0x2e21d2.length;
                var _0x1b4607 = this._map;
                var _0x9b19ec = this._reverseMap;
                if (!_0x9b19ec) {
                  _0x9b19ec = this._reverseMap = [];
                  for (var _0x327a16 = 0; _0x327a16 < _0x1b4607.length; _0x327a16++) {
                    _0x9b19ec[_0x1b4607.charCodeAt(_0x327a16)] = _0x327a16;
                  }
                }
                var _0x3c7694 = _0x1b4607.charAt(64);
                if (_0x3c7694) {
                  var _0x2d80d3 = _0x2e21d2.indexOf(_0x3c7694);
                  if (_0x2d80d3 !== -1) {
                    _0x55af5a = _0x2d80d3;
                  }
                }
                return _0x376600(_0x2e21d2, _0x55af5a, _0x9b19ec);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function _0x376600(_0x1ceff7, _0xe39da1, _0x859477) {
              var _0x2bc853 = [];
              var _0x475e85 = 0;
              for (var _0x20a3cc = 0; _0x20a3cc < _0xe39da1; _0x20a3cc++) {
                if (_0x20a3cc % 4) {
                  var _0x599776 = _0x859477[_0x1ceff7.charCodeAt(_0x20a3cc - 1)] << _0x20a3cc % 4 * 2;
                  var _0x54aa7e = _0x859477[_0x1ceff7.charCodeAt(_0x20a3cc)] >>> 6 - _0x20a3cc % 4 * 2;
                  _0x2bc853[_0x475e85 >>> 2] |= (_0x599776 | _0x54aa7e) << 24 - _0x475e85 % 4 * 8;
                  _0x475e85++;
                }
              }
              return _0xa583a1.create(_0x2bc853, _0x475e85);
            }
          })();
          return _0x3c6edf.enc.Base64;
        });
      }
    });
    var _0x5d1f96 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(_0x59d53c, _0xab3aa9) {
        "use strict";
        (function(_0x2633a7, _0x1c09d4) {
          if (typeof _0x59d53c === "object") {
            _0xab3aa9.exports = _0x59d53c = _0x1c09d4(_0x59010e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], _0x1c09d4);
          } else {
            _0x1c09d4(_0x2633a7.CryptoJS);
          }
        })(_0x59d53c, function(_0xf283b5) {
          (function(_0x4b1f18) {
            var _0x513117 = _0xf283b5;
            var _0x18540b = _0x513117.lib;
            var _0x3b51d2 = _0x18540b.WordArray;
            var _0x5a1d32 = _0x18540b.Hasher;
            var _0x58845b = _0x513117.algo;
            var _0x16d3de = [];
            (function() {
              for (var _0x208840 = 0; _0x208840 < 64; _0x208840++) {
                _0x16d3de[_0x208840] = _0x4b1f18.abs(_0x4b1f18.sin(_0x208840 + 1)) * 4294967296 | 0;
              }
            })();
            var _0xfb9262 = _0x58845b.MD5 = _0x5a1d32.extend({
              _doReset: function() {
                this._hash = new _0x3b51d2.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function(_0x2895e3, _0x4a38b0) {
                for (var _0x31f51d = 0; _0x31f51d < 16; _0x31f51d++) {
                  var _0x3c7d95 = _0x4a38b0 + _0x31f51d;
                  var _0x58b4d1 = _0x2895e3[_0x3c7d95];
                  _0x2895e3[_0x3c7d95] = (_0x58b4d1 << 8 | _0x58b4d1 >>> 24) & 16711935 | (_0x58b4d1 << 24 | _0x58b4d1 >>> 8) & -16711936;
                }
                var _0xb3c608 = this._hash.words;
                var _0x52764d = _0x2895e3[_0x4a38b0 + 0];
                var _0x5db647 = _0x2895e3[_0x4a38b0 + 1];
                var _0x5ac6da = _0x2895e3[_0x4a38b0 + 2];
                var _0x2f4b7e = _0x2895e3[_0x4a38b0 + 3];
                var _0x2d5b35 = _0x2895e3[_0x4a38b0 + 4];
                var _0x1a14fb = _0x2895e3[_0x4a38b0 + 5];
                var _0x1a9d4b = _0x2895e3[_0x4a38b0 + 6];
                var _0xe61e1e = _0x2895e3[_0x4a38b0 + 7];
                var _0x1e15ad = _0x2895e3[_0x4a38b0 + 8];
                var _0x4470be = _0x2895e3[_0x4a38b0 + 9];
                var _0x1eee18 = _0x2895e3[_0x4a38b0 + 10];
                var _0x578758 = _0x2895e3[_0x4a38b0 + 11];
                var _0x5d941a = _0x2895e3[_0x4a38b0 + 12];
                var _0x239f51 = _0x2895e3[_0x4a38b0 + 13];
                var _0x374e3f = _0x2895e3[_0x4a38b0 + 14];
                var _0x44252d = _0x2895e3[_0x4a38b0 + 15];
                var _0x587cd4 = _0xb3c608[0];
                var _0x3c995c = _0xb3c608[1];
                var _0x2e7893 = _0xb3c608[2];
                var _0x3e2ec7 = _0xb3c608[3];
                _0x587cd4 = _0x4a9898(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x52764d, 7, _0x16d3de[0]);
                _0x3e2ec7 = _0x4a9898(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x5db647, 12, _0x16d3de[1]);
                _0x2e7893 = _0x4a9898(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x5ac6da, 17, _0x16d3de[2]);
                _0x3c995c = _0x4a9898(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x2f4b7e, 22, _0x16d3de[3]);
                _0x587cd4 = _0x4a9898(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x2d5b35, 7, _0x16d3de[4]);
                _0x3e2ec7 = _0x4a9898(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x1a14fb, 12, _0x16d3de[5]);
                _0x2e7893 = _0x4a9898(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x1a9d4b, 17, _0x16d3de[6]);
                _0x3c995c = _0x4a9898(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0xe61e1e, 22, _0x16d3de[7]);
                _0x587cd4 = _0x4a9898(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x1e15ad, 7, _0x16d3de[8]);
                _0x3e2ec7 = _0x4a9898(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x4470be, 12, _0x16d3de[9]);
                _0x2e7893 = _0x4a9898(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x1eee18, 17, _0x16d3de[10]);
                _0x3c995c = _0x4a9898(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x578758, 22, _0x16d3de[11]);
                _0x587cd4 = _0x4a9898(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x5d941a, 7, _0x16d3de[12]);
                _0x3e2ec7 = _0x4a9898(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x239f51, 12, _0x16d3de[13]);
                _0x2e7893 = _0x4a9898(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x374e3f, 17, _0x16d3de[14]);
                _0x3c995c = _0x4a9898(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x44252d, 22, _0x16d3de[15]);
                _0x587cd4 = _0x2b9138(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x5db647, 5, _0x16d3de[16]);
                _0x3e2ec7 = _0x2b9138(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x1a9d4b, 9, _0x16d3de[17]);
                _0x2e7893 = _0x2b9138(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x578758, 14, _0x16d3de[18]);
                _0x3c995c = _0x2b9138(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x52764d, 20, _0x16d3de[19]);
                _0x587cd4 = _0x2b9138(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x1a14fb, 5, _0x16d3de[20]);
                _0x3e2ec7 = _0x2b9138(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x1eee18, 9, _0x16d3de[21]);
                _0x2e7893 = _0x2b9138(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x44252d, 14, _0x16d3de[22]);
                _0x3c995c = _0x2b9138(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x2d5b35, 20, _0x16d3de[23]);
                _0x587cd4 = _0x2b9138(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x4470be, 5, _0x16d3de[24]);
                _0x3e2ec7 = _0x2b9138(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x374e3f, 9, _0x16d3de[25]);
                _0x2e7893 = _0x2b9138(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x2f4b7e, 14, _0x16d3de[26]);
                _0x3c995c = _0x2b9138(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x1e15ad, 20, _0x16d3de[27]);
                _0x587cd4 = _0x2b9138(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x239f51, 5, _0x16d3de[28]);
                _0x3e2ec7 = _0x2b9138(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x5ac6da, 9, _0x16d3de[29]);
                _0x2e7893 = _0x2b9138(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0xe61e1e, 14, _0x16d3de[30]);
                _0x3c995c = _0x2b9138(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x5d941a, 20, _0x16d3de[31]);
                _0x587cd4 = _0x252748(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x1a14fb, 4, _0x16d3de[32]);
                _0x3e2ec7 = _0x252748(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x1e15ad, 11, _0x16d3de[33]);
                _0x2e7893 = _0x252748(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x578758, 16, _0x16d3de[34]);
                _0x3c995c = _0x252748(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x374e3f, 23, _0x16d3de[35]);
                _0x587cd4 = _0x252748(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x5db647, 4, _0x16d3de[36]);
                _0x3e2ec7 = _0x252748(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x2d5b35, 11, _0x16d3de[37]);
                _0x2e7893 = _0x252748(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0xe61e1e, 16, _0x16d3de[38]);
                _0x3c995c = _0x252748(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x1eee18, 23, _0x16d3de[39]);
                _0x587cd4 = _0x252748(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x239f51, 4, _0x16d3de[40]);
                _0x3e2ec7 = _0x252748(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x52764d, 11, _0x16d3de[41]);
                _0x2e7893 = _0x252748(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x2f4b7e, 16, _0x16d3de[42]);
                _0x3c995c = _0x252748(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x1a9d4b, 23, _0x16d3de[43]);
                _0x587cd4 = _0x252748(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x4470be, 4, _0x16d3de[44]);
                _0x3e2ec7 = _0x252748(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x5d941a, 11, _0x16d3de[45]);
                _0x2e7893 = _0x252748(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x44252d, 16, _0x16d3de[46]);
                _0x3c995c = _0x252748(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x5ac6da, 23, _0x16d3de[47]);
                _0x587cd4 = _0x4dac21(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x52764d, 6, _0x16d3de[48]);
                _0x3e2ec7 = _0x4dac21(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0xe61e1e, 10, _0x16d3de[49]);
                _0x2e7893 = _0x4dac21(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x374e3f, 15, _0x16d3de[50]);
                _0x3c995c = _0x4dac21(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x1a14fb, 21, _0x16d3de[51]);
                _0x587cd4 = _0x4dac21(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x5d941a, 6, _0x16d3de[52]);
                _0x3e2ec7 = _0x4dac21(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x2f4b7e, 10, _0x16d3de[53]);
                _0x2e7893 = _0x4dac21(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x1eee18, 15, _0x16d3de[54]);
                _0x3c995c = _0x4dac21(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x5db647, 21, _0x16d3de[55]);
                _0x587cd4 = _0x4dac21(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x1e15ad, 6, _0x16d3de[56]);
                _0x3e2ec7 = _0x4dac21(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x44252d, 10, _0x16d3de[57]);
                _0x2e7893 = _0x4dac21(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x1a9d4b, 15, _0x16d3de[58]);
                _0x3c995c = _0x4dac21(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x239f51, 21, _0x16d3de[59]);
                _0x587cd4 = _0x4dac21(_0x587cd4, _0x3c995c, _0x2e7893, _0x3e2ec7, _0x2d5b35, 6, _0x16d3de[60]);
                _0x3e2ec7 = _0x4dac21(_0x3e2ec7, _0x587cd4, _0x3c995c, _0x2e7893, _0x578758, 10, _0x16d3de[61]);
                _0x2e7893 = _0x4dac21(_0x2e7893, _0x3e2ec7, _0x587cd4, _0x3c995c, _0x5ac6da, 15, _0x16d3de[62]);
                _0x3c995c = _0x4dac21(_0x3c995c, _0x2e7893, _0x3e2ec7, _0x587cd4, _0x4470be, 21, _0x16d3de[63]);
                _0xb3c608[0] = _0xb3c608[0] + _0x587cd4 | 0;
                _0xb3c608[1] = _0xb3c608[1] + _0x3c995c | 0;
                _0xb3c608[2] = _0xb3c608[2] + _0x2e7893 | 0;
                _0xb3c608[3] = _0xb3c608[3] + _0x3e2ec7 | 0;
              },
              _doFinalize: function() {
                var _0x456032 = this._data;
                var _0x4c61de = _0x456032.words;
                var _0x53045c = this._nDataBytes * 8;
                var _0xe75124 = _0x456032.sigBytes * 8;
                _0x4c61de[_0xe75124 >>> 5] |= 128 << 24 - _0xe75124 % 32;
                var _0x5852eb = _0x4b1f18.floor(_0x53045c / 4294967296);
                var _0x37260a = _0x53045c;
                _0x4c61de[(_0xe75124 + 64 >>> 9 << 4) + 15] = (_0x5852eb << 8 | _0x5852eb >>> 24) & 16711935 | (_0x5852eb << 24 | _0x5852eb >>> 8) & -16711936;
                _0x4c61de[(_0xe75124 + 64 >>> 9 << 4) + 14] = (_0x37260a << 8 | _0x37260a >>> 24) & 16711935 | (_0x37260a << 24 | _0x37260a >>> 8) & -16711936;
                _0x456032.sigBytes = (_0x4c61de.length + 1) * 4;
                this._process();
                var _0x57e8d5 = this._hash;
                var _0x61bf66 = _0x57e8d5.words;
                for (var _0x5e63b2 = 0; _0x5e63b2 < 4; _0x5e63b2++) {
                  var _0x5dca9f = _0x61bf66[_0x5e63b2];
                  _0x61bf66[_0x5e63b2] = (_0x5dca9f << 8 | _0x5dca9f >>> 24) & 16711935 | (_0x5dca9f << 24 | _0x5dca9f >>> 8) & -16711936;
                }
                return _0x57e8d5;
              },
              clone: function() {
                var _0x334392 = _0x5a1d32.clone.call(this);
                _0x334392._hash = this._hash.clone();
                return _0x334392;
              }
            });
            function _0x4a9898(_0x382078, _0x4c4d48, _0x16603f, _0xf9da06, _0x3c1a75, _0x598a53, _0x3401a5) {
              var _0x5a9fec = _0x382078 + (_0x4c4d48 & _0x16603f | ~_0x4c4d48 & _0xf9da06) + _0x3c1a75 + _0x3401a5;
              return (_0x5a9fec << _0x598a53 | _0x5a9fec >>> 32 - _0x598a53) + _0x4c4d48;
            }
            function _0x2b9138(_0x256645, _0x38c059, _0x3b35c7, _0x339e86, _0x10d54b, _0x3c483e, _0x2e20a1) {
              var _0x62c119 = _0x256645 + (_0x38c059 & _0x339e86 | _0x3b35c7 & ~_0x339e86) + _0x10d54b + _0x2e20a1;
              return (_0x62c119 << _0x3c483e | _0x62c119 >>> 32 - _0x3c483e) + _0x38c059;
            }
            function _0x252748(_0x3daa43, _0x42f86e, _0x35ce41, _0x3ac032, _0x41484f, _0xf25aea, _0x403ca4) {
              var _0x4ce922 = _0x3daa43 + (_0x42f86e ^ _0x35ce41 ^ _0x3ac032) + _0x41484f + _0x403ca4;
              return (_0x4ce922 << _0xf25aea | _0x4ce922 >>> 32 - _0xf25aea) + _0x42f86e;
            }
            function _0x4dac21(_0xeab301, _0x58b33d, _0x2140cb, _0x4083f5, _0x25811c, _0x49eff9, _0x193060) {
              var _0x39961f = _0xeab301 + (_0x2140cb ^ (_0x58b33d | ~_0x4083f5)) + _0x25811c + _0x193060;
              return (_0x39961f << _0x49eff9 | _0x39961f >>> 32 - _0x49eff9) + _0x58b33d;
            }
            _0x513117.MD5 = _0x5a1d32._createHelper(_0xfb9262);
            _0x513117.HmacMD5 = _0x5a1d32._createHmacHelper(_0xfb9262);
          })(Math);
          return _0xf283b5.MD5;
        });
      }
    });
    var _0x3d0103 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(_0xdc583a, _0x7d7399) {
        "use strict";
        (function(_0x5a7155, _0x5ddb4a) {
          if (typeof _0xdc583a === "object") {
            _0x7d7399.exports = _0xdc583a = _0x5ddb4a(_0x59010e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], _0x5ddb4a);
          } else {
            _0x5ddb4a(_0x5a7155.CryptoJS);
          }
        })(_0xdc583a, function(_0x59e820) {
          (function() {
            var _0x1e83a2 = _0x59e820;
            var _0xb17b0e = _0x1e83a2.lib;
            var _0x5ad1f4 = _0xb17b0e.WordArray;
            var _0x2d54d4 = _0xb17b0e.Hasher;
            var _0x49e7b5 = _0x1e83a2.algo;
            var _0x233894 = [];
            var _0x5038ce = _0x49e7b5.SHA1 = _0x2d54d4.extend({
              _doReset: function() {
                this._hash = new _0x5ad1f4.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(_0x202048, _0x221599) {
                var _0x2b4eae = this._hash.words;
                var _0xb53907 = _0x2b4eae[0];
                var _0x5bedc8 = _0x2b4eae[1];
                var _0x3c6c84 = _0x2b4eae[2];
                var _0x96ad0c = _0x2b4eae[3];
                var _0x1d04a5 = _0x2b4eae[4];
                for (var _0xc4ffa2 = 0; _0xc4ffa2 < 80; _0xc4ffa2++) {
                  if (_0xc4ffa2 < 16) {
                    _0x233894[_0xc4ffa2] = _0x202048[_0x221599 + _0xc4ffa2] | 0;
                  } else {
                    var _0xcf9f07 = _0x233894[_0xc4ffa2 - 3] ^ _0x233894[_0xc4ffa2 - 8] ^ _0x233894[_0xc4ffa2 - 14] ^ _0x233894[_0xc4ffa2 - 16];
                    _0x233894[_0xc4ffa2] = _0xcf9f07 << 1 | _0xcf9f07 >>> 31;
                  }
                  var _0x4e2ec9 = (_0xb53907 << 5 | _0xb53907 >>> 27) + _0x1d04a5 + _0x233894[_0xc4ffa2];
                  if (_0xc4ffa2 < 20) {
                    _0x4e2ec9 += (_0x5bedc8 & _0x3c6c84 | ~_0x5bedc8 & _0x96ad0c) + 1518500249;
                  } else if (_0xc4ffa2 < 40) {
                    _0x4e2ec9 += (_0x5bedc8 ^ _0x3c6c84 ^ _0x96ad0c) + 1859775393;
                  } else if (_0xc4ffa2 < 60) {
                    _0x4e2ec9 += (_0x5bedc8 & _0x3c6c84 | _0x5bedc8 & _0x96ad0c | _0x3c6c84 & _0x96ad0c) - 1894007588;
                  } else {
                    _0x4e2ec9 += (_0x5bedc8 ^ _0x3c6c84 ^ _0x96ad0c) - 899497514;
                  }
                  _0x1d04a5 = _0x96ad0c;
                  _0x96ad0c = _0x3c6c84;
                  _0x3c6c84 = _0x5bedc8 << 30 | _0x5bedc8 >>> 2;
                  _0x5bedc8 = _0xb53907;
                  _0xb53907 = _0x4e2ec9;
                }
                _0x2b4eae[0] = _0x2b4eae[0] + _0xb53907 | 0;
                _0x2b4eae[1] = _0x2b4eae[1] + _0x5bedc8 | 0;
                _0x2b4eae[2] = _0x2b4eae[2] + _0x3c6c84 | 0;
                _0x2b4eae[3] = _0x2b4eae[3] + _0x96ad0c | 0;
                _0x2b4eae[4] = _0x2b4eae[4] + _0x1d04a5 | 0;
              },
              _doFinalize: function() {
                var _0x59d6d4 = this._data;
                var _0x4db200 = _0x59d6d4.words;
                var _0x5f4896 = this._nDataBytes * 8;
                var _0x38fd79 = _0x59d6d4.sigBytes * 8;
                _0x4db200[_0x38fd79 >>> 5] |= 128 << 24 - _0x38fd79 % 32;
                _0x4db200[(_0x38fd79 + 64 >>> 9 << 4) + 14] = Math.floor(_0x5f4896 / 4294967296);
                _0x4db200[(_0x38fd79 + 64 >>> 9 << 4) + 15] = _0x5f4896;
                _0x59d6d4.sigBytes = _0x4db200.length * 4;
                this._process();
                return this._hash;
              },
              clone: function() {
                var _0x39f5db = _0x2d54d4.clone.call(this);
                _0x39f5db._hash = this._hash.clone();
                return _0x39f5db;
              }
            });
            _0x1e83a2.SHA1 = _0x2d54d4._createHelper(_0x5038ce);
            _0x1e83a2.HmacSHA1 = _0x2d54d4._createHmacHelper(_0x5038ce);
          })();
          return _0x59e820.SHA1;
        });
      }
    });
    var _0x5331a6 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(_0x40612a, _0x2c6e02) {
        "use strict";
        (function(_0x504904, _0x7d9272) {
          if (typeof _0x40612a === "object") {
            _0x2c6e02.exports = _0x40612a = _0x7d9272(_0x59010e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], _0x7d9272);
          } else {
            _0x7d9272(_0x504904.CryptoJS);
          }
        })(_0x40612a, function(_0x10915b) {
          (function(_0x568a93) {
            var _0x36767d = _0x10915b;
            var _0x18f7ed = _0x36767d.lib;
            var _0xe962db = _0x18f7ed.WordArray;
            var _0x1e4337 = _0x18f7ed.Hasher;
            var _0x1154f9 = _0x36767d.algo;
            var _0x2bc7ca = [];
            var _0x227263 = [];
            (function() {
              function _0x3ca8e5(_0x557b1e) {
                var _0x3a4c36 = _0x568a93.sqrt(_0x557b1e);
                for (var _0x58f2e4 = 2; _0x58f2e4 <= _0x3a4c36; _0x58f2e4++) {
                  if (!(_0x557b1e % _0x58f2e4)) {
                    return false;
                  }
                }
                return true;
              }
              function _0x3110cd(_0xcb9727) {
                return (_0xcb9727 - (_0xcb9727 | 0)) * 4294967296 | 0;
              }
              var _0x19c061 = 2;
              var _0xdaf559 = 0;
              while (_0xdaf559 < 64) {
                if (_0x3ca8e5(_0x19c061)) {
                  if (_0xdaf559 < 8) {
                    _0x2bc7ca[_0xdaf559] = _0x3110cd(_0x568a93.pow(_0x19c061, 1 / 2));
                  }
                  _0x227263[_0xdaf559] = _0x3110cd(_0x568a93.pow(_0x19c061, 1 / 3));
                  _0xdaf559++;
                }
                _0x19c061++;
              }
            })();
            var _0x59298c = [];
            var _0x33421c = _0x1154f9.SHA256 = _0x1e4337.extend({
              _doReset: function() {
                this._hash = new _0xe962db.init(_0x2bc7ca.slice(0));
              },
              _doProcessBlock: function(_0x5eb85e, _0x8437aa) {
                var _0x6d7e5d = this._hash.words;
                var _0x151ac9 = _0x6d7e5d[0];
                var _0x1ccafd = _0x6d7e5d[1];
                var _0x527d39 = _0x6d7e5d[2];
                var _0x1e2d46 = _0x6d7e5d[3];
                var _0x4df027 = _0x6d7e5d[4];
                var _0x5969c1 = _0x6d7e5d[5];
                var _0xa3625a = _0x6d7e5d[6];
                var _0xc4c1ec = _0x6d7e5d[7];
                for (var _0x168555 = 0; _0x168555 < 64; _0x168555++) {
                  if (_0x168555 < 16) {
                    _0x59298c[_0x168555] = _0x5eb85e[_0x8437aa + _0x168555] | 0;
                  } else {
                    var _0xe55ec1 = _0x59298c[_0x168555 - 15];
                    var _0x3a7b5a = (_0xe55ec1 << 25 | _0xe55ec1 >>> 7) ^ (_0xe55ec1 << 14 | _0xe55ec1 >>> 18) ^ _0xe55ec1 >>> 3;
                    var _0x1b0aa0 = _0x59298c[_0x168555 - 2];
                    var _0x16bcb2 = (_0x1b0aa0 << 15 | _0x1b0aa0 >>> 17) ^ (_0x1b0aa0 << 13 | _0x1b0aa0 >>> 19) ^ _0x1b0aa0 >>> 10;
                    _0x59298c[_0x168555] = _0x3a7b5a + _0x59298c[_0x168555 - 7] + _0x16bcb2 + _0x59298c[_0x168555 - 16];
                  }
                  var _0x3c625f = _0x4df027 & _0x5969c1 ^ ~_0x4df027 & _0xa3625a;
                  var _0x2de4cb = _0x151ac9 & _0x1ccafd ^ _0x151ac9 & _0x527d39 ^ _0x1ccafd & _0x527d39;
                  var _0x474b66 = (_0x151ac9 << 30 | _0x151ac9 >>> 2) ^ (_0x151ac9 << 19 | _0x151ac9 >>> 13) ^ (_0x151ac9 << 10 | _0x151ac9 >>> 22);
                  var _0x204835 = (_0x4df027 << 26 | _0x4df027 >>> 6) ^ (_0x4df027 << 21 | _0x4df027 >>> 11) ^ (_0x4df027 << 7 | _0x4df027 >>> 25);
                  var _0x57a674 = _0xc4c1ec + _0x204835 + _0x3c625f + _0x227263[_0x168555] + _0x59298c[_0x168555];
                  var _0xbcddb1 = _0x474b66 + _0x2de4cb;
                  _0xc4c1ec = _0xa3625a;
                  _0xa3625a = _0x5969c1;
                  _0x5969c1 = _0x4df027;
                  _0x4df027 = _0x1e2d46 + _0x57a674 | 0;
                  _0x1e2d46 = _0x527d39;
                  _0x527d39 = _0x1ccafd;
                  _0x1ccafd = _0x151ac9;
                  _0x151ac9 = _0x57a674 + _0xbcddb1 | 0;
                }
                _0x6d7e5d[0] = _0x6d7e5d[0] + _0x151ac9 | 0;
                _0x6d7e5d[1] = _0x6d7e5d[1] + _0x1ccafd | 0;
                _0x6d7e5d[2] = _0x6d7e5d[2] + _0x527d39 | 0;
                _0x6d7e5d[3] = _0x6d7e5d[3] + _0x1e2d46 | 0;
                _0x6d7e5d[4] = _0x6d7e5d[4] + _0x4df027 | 0;
                _0x6d7e5d[5] = _0x6d7e5d[5] + _0x5969c1 | 0;
                _0x6d7e5d[6] = _0x6d7e5d[6] + _0xa3625a | 0;
                _0x6d7e5d[7] = _0x6d7e5d[7] + _0xc4c1ec | 0;
              },
              _doFinalize: function() {
                var _0x39fb72 = this._data;
                var _0x4961f9 = _0x39fb72.words;
                var _0x5669f5 = this._nDataBytes * 8;
                var _0x55d091 = _0x39fb72.sigBytes * 8;
                _0x4961f9[_0x55d091 >>> 5] |= 128 << 24 - _0x55d091 % 32;
                _0x4961f9[(_0x55d091 + 64 >>> 9 << 4) + 14] = _0x568a93.floor(_0x5669f5 / 4294967296);
                _0x4961f9[(_0x55d091 + 64 >>> 9 << 4) + 15] = _0x5669f5;
                _0x39fb72.sigBytes = _0x4961f9.length * 4;
                this._process();
                return this._hash;
              },
              clone: function() {
                var _0x3d5c16 = _0x1e4337.clone.call(this);
                _0x3d5c16._hash = this._hash.clone();
                return _0x3d5c16;
              }
            });
            _0x36767d.SHA256 = _0x1e4337._createHelper(_0x33421c);
            _0x36767d.HmacSHA256 = _0x1e4337._createHmacHelper(_0x33421c);
          })(Math);
          return _0x10915b.SHA256;
        });
      }
    });
    var _0x484828 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(_0xaee942, _0x20fdd2) {
        "use strict";
        (function(_0x14491a, _0x24394f, _0x56ae70) {
          if (typeof _0xaee942 === "object") {
            _0x20fdd2.exports = _0xaee942 = _0x24394f(_0x59010e(), _0x5331a6());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha256"], _0x24394f);
          } else {
            _0x24394f(_0x14491a.CryptoJS);
          }
        })(_0xaee942, function(_0x81abf1) {
          (function() {
            var _0x4ff116 = _0x81abf1;
            var _0x19462f = _0x4ff116.lib;
            var _0x1387d7 = _0x19462f.WordArray;
            var _0x5f2f24 = _0x4ff116.algo;
            var _0x384a5b = _0x5f2f24.SHA256;
            var _0x1c2901 = _0x5f2f24.SHA224 = _0x384a5b.extend({
              _doReset: function() {
                this._hash = new _0x1387d7.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function() {
                var _0xab332 = _0x384a5b._doFinalize.call(this);
                _0xab332.sigBytes -= 4;
                return _0xab332;
              }
            });
            _0x4ff116.SHA224 = _0x384a5b._createHelper(_0x1c2901);
            _0x4ff116.HmacSHA224 = _0x384a5b._createHmacHelper(_0x1c2901);
          })();
          return _0x81abf1.SHA224;
        });
      }
    });
    var _0x5b156c = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(_0x59eb2f, _0x1123eb) {
        "use strict";
        (function(_0x53e468, _0x2c4b56, _0x1eadc8) {
          if (typeof _0x59eb2f === "object") {
            _0x1123eb.exports = _0x59eb2f = _0x2c4b56(_0x59010e(), _0x48345e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], _0x2c4b56);
          } else {
            _0x2c4b56(_0x53e468.CryptoJS);
          }
        })(_0x59eb2f, function(_0x4929fc) {
          (function() {
            var _0x4ea66d = _0x4929fc;
            var _0x1f2059 = _0x4ea66d.lib;
            var _0x5e7211 = _0x1f2059.Hasher;
            var _0x43fb2d = _0x4ea66d.x64;
            var _0x4e3f67 = _0x43fb2d.Word;
            var _0xd0ef4a = _0x43fb2d.WordArray;
            var _0x1d1c42 = _0x4ea66d.algo;
            function _0x4e574c() {
              return _0x4e3f67.create.apply(_0x4e3f67, arguments);
            }
            var _0x348f7e = [_0x4e574c(1116352408, 3609767458), _0x4e574c(1899447441, 602891725), _0x4e574c(3049323471, 3964484399), _0x4e574c(3921009573, 2173295548), _0x4e574c(961987163, 4081628472), _0x4e574c(1508970993, 3053834265), _0x4e574c(2453635748, 2937671579), _0x4e574c(2870763221, 3664609560), _0x4e574c(3624381080, 2734883394), _0x4e574c(310598401, 1164996542), _0x4e574c(607225278, 1323610764), _0x4e574c(1426881987, 3590304994), _0x4e574c(1925078388, 4068182383), _0x4e574c(2162078206, 991336113), _0x4e574c(2614888103, 633803317), _0x4e574c(3248222580, 3479774868), _0x4e574c(3835390401, 2666613458), _0x4e574c(4022224774, 944711139), _0x4e574c(264347078, 2341262773), _0x4e574c(604807628, 2007800933), _0x4e574c(770255983, 1495990901), _0x4e574c(1249150122, 1856431235), _0x4e574c(1555081692, 3175218132), _0x4e574c(1996064986, 2198950837), _0x4e574c(2554220882, 3999719339), _0x4e574c(2821834349, 766784016), _0x4e574c(2952996808, 2566594879), _0x4e574c(3210313671, 3203337956), _0x4e574c(3336571891, 1034457026), _0x4e574c(3584528711, 2466948901), _0x4e574c(113926993, 3758326383), _0x4e574c(338241895, 168717936), _0x4e574c(666307205, 1188179964), _0x4e574c(773529912, 1546045734), _0x4e574c(1294757372, 1522805485), _0x4e574c(1396182291, 2643833823), _0x4e574c(1695183700, 2343527390), _0x4e574c(1986661051, 1014477480), _0x4e574c(2177026350, 1206759142), _0x4e574c(2456956037, 344077627), _0x4e574c(2730485921, 1290863460), _0x4e574c(2820302411, 3158454273), _0x4e574c(3259730800, 3505952657), _0x4e574c(3345764771, 106217008), _0x4e574c(3516065817, 3606008344), _0x4e574c(3600352804, 1432725776), _0x4e574c(4094571909, 1467031594), _0x4e574c(275423344, 851169720), _0x4e574c(430227734, 3100823752), _0x4e574c(506948616, 1363258195), _0x4e574c(659060556, 3750685593), _0x4e574c(883997877, 3785050280), _0x4e574c(958139571, 3318307427), _0x4e574c(1322822218, 3812723403), _0x4e574c(1537002063, 2003034995), _0x4e574c(1747873779, 3602036899), _0x4e574c(1955562222, 1575990012), _0x4e574c(2024104815, 1125592928), _0x4e574c(2227730452, 2716904306), _0x4e574c(2361852424, 442776044), _0x4e574c(2428436474, 593698344), _0x4e574c(2756734187, 3733110249), _0x4e574c(3204031479, 2999351573), _0x4e574c(3329325298, 3815920427), _0x4e574c(3391569614, 3928383900), _0x4e574c(3515267271, 566280711), _0x4e574c(3940187606, 3454069534), _0x4e574c(4118630271, 4000239992), _0x4e574c(116418474, 1914138554), _0x4e574c(174292421, 2731055270), _0x4e574c(289380356, 3203993006), _0x4e574c(460393269, 320620315), _0x4e574c(685471733, 587496836), _0x4e574c(852142971, 1086792851), _0x4e574c(1017036298, 365543100), _0x4e574c(1126000580, 2618297676), _0x4e574c(1288033470, 3409855158), _0x4e574c(1501505948, 4234509866), _0x4e574c(1607167915, 987167468), _0x4e574c(1816402316, 1246189591)];
            var _0x6101e0 = [];
            (function() {
              for (var _0x1eb56f = 0; _0x1eb56f < 80; _0x1eb56f++) {
                _0x6101e0[_0x1eb56f] = _0x4e574c();
              }
            })();
            var _0x4c2186 = _0x1d1c42.SHA512 = _0x5e7211.extend({
              _doReset: function() {
                this._hash = new _0xd0ef4a.init([new _0x4e3f67.init(1779033703, 4089235720), new _0x4e3f67.init(3144134277, 2227873595), new _0x4e3f67.init(1013904242, 4271175723), new _0x4e3f67.init(2773480762, 1595750129), new _0x4e3f67.init(1359893119, 2917565137), new _0x4e3f67.init(2600822924, 725511199), new _0x4e3f67.init(528734635, 4215389547), new _0x4e3f67.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function(_0xcf451e, _0x2ad674) {
                var _0x58d85d = this._hash.words;
                var _0x3f6817 = _0x58d85d[0];
                var _0x575183 = _0x58d85d[1];
                var _0x1f596c = _0x58d85d[2];
                var _0x29dbec = _0x58d85d[3];
                var _0xd4405f = _0x58d85d[4];
                var _0x380498 = _0x58d85d[5];
                var _0x1d094b = _0x58d85d[6];
                var _0x427567 = _0x58d85d[7];
                var _0x1dd024 = _0x3f6817.high;
                var _0x48f4eb = _0x3f6817.low;
                var _0x5842bf = _0x575183.high;
                var _0x51d60b = _0x575183.low;
                var _0x258b9f = _0x1f596c.high;
                var _0x3e85c8 = _0x1f596c.low;
                var _0x6200ab = _0x29dbec.high;
                var _0x57d1d9 = _0x29dbec.low;
                var _0xa438f7 = _0xd4405f.high;
                var _0x3b77b1 = _0xd4405f.low;
                var _0xcd92e9 = _0x380498.high;
                var _0x2f2e6e = _0x380498.low;
                var _0x1a3a1e = _0x1d094b.high;
                var _0x36d625 = _0x1d094b.low;
                var _0x5726a5 = _0x427567.high;
                var _0xf2adff = _0x427567.low;
                var _0x2409b0 = _0x1dd024;
                var _0x1e04d8 = _0x48f4eb;
                var _0x4c6998 = _0x5842bf;
                var _0xae6df7 = _0x51d60b;
                var _0x10269c = _0x258b9f;
                var _0x4f57a1 = _0x3e85c8;
                var _0x1a4ad7 = _0x6200ab;
                var _0x1b823a = _0x57d1d9;
                var _0x462baa = _0xa438f7;
                var _0x54a0da = _0x3b77b1;
                var _0x764929 = _0xcd92e9;
                var _0x1dc8b5 = _0x2f2e6e;
                var _0xc22525 = _0x1a3a1e;
                var _0x1975ef = _0x36d625;
                var _0x13e03e = _0x5726a5;
                var _0x3be177 = _0xf2adff;
                for (var _0x4ca6ae = 0; _0x4ca6ae < 80; _0x4ca6ae++) {
                  var _0x3e9bc0 = _0x6101e0[_0x4ca6ae];
                  if (_0x4ca6ae < 16) {
                    var _0x1e5db6 = _0x3e9bc0.high = _0xcf451e[_0x2ad674 + _0x4ca6ae * 2] | 0;
                    var _0x50419f = _0x3e9bc0.low = _0xcf451e[_0x2ad674 + _0x4ca6ae * 2 + 1] | 0;
                  } else {
                    var _0x5336d1 = _0x6101e0[_0x4ca6ae - 15];
                    var _0x19c991 = _0x5336d1.high;
                    var _0x205f0b = _0x5336d1.low;
                    var _0x5cf942 = (_0x19c991 >>> 1 | _0x205f0b << 31) ^ (_0x19c991 >>> 8 | _0x205f0b << 24) ^ _0x19c991 >>> 7;
                    var _0x542b7e = (_0x205f0b >>> 1 | _0x19c991 << 31) ^ (_0x205f0b >>> 8 | _0x19c991 << 24) ^ (_0x205f0b >>> 7 | _0x19c991 << 25);
                    var _0x23db15 = _0x6101e0[_0x4ca6ae - 2];
                    var _0x195bcc = _0x23db15.high;
                    var _0x136b4a = _0x23db15.low;
                    var _0x34bfa1 = (_0x195bcc >>> 19 | _0x136b4a << 13) ^ (_0x195bcc << 3 | _0x136b4a >>> 29) ^ _0x195bcc >>> 6;
                    var _0x4076b7 = (_0x136b4a >>> 19 | _0x195bcc << 13) ^ (_0x136b4a << 3 | _0x195bcc >>> 29) ^ (_0x136b4a >>> 6 | _0x195bcc << 26);
                    var _0x5d4cd1 = _0x6101e0[_0x4ca6ae - 7];
                    var _0x321d47 = _0x5d4cd1.high;
                    var _0x1c6b9e = _0x5d4cd1.low;
                    var _0x15cf18 = _0x6101e0[_0x4ca6ae - 16];
                    var _0x31f891 = _0x15cf18.high;
                    var _0x488a7b = _0x15cf18.low;
                    var _0x50419f = _0x542b7e + _0x1c6b9e;
                    var _0x1e5db6 = _0x5cf942 + _0x321d47 + (_0x50419f >>> 0 < _0x542b7e >>> 0 ? 1 : 0);
                    var _0x50419f = _0x50419f + _0x4076b7;
                    var _0x1e5db6 = _0x1e5db6 + _0x34bfa1 + (_0x50419f >>> 0 < _0x4076b7 >>> 0 ? 1 : 0);
                    var _0x50419f = _0x50419f + _0x488a7b;
                    var _0x1e5db6 = _0x1e5db6 + _0x31f891 + (_0x50419f >>> 0 < _0x488a7b >>> 0 ? 1 : 0);
                    _0x3e9bc0.high = _0x1e5db6;
                    _0x3e9bc0.low = _0x50419f;
                  }
                  var _0x140462 = _0x462baa & _0x764929 ^ ~_0x462baa & _0xc22525;
                  var _0x734dda = _0x54a0da & _0x1dc8b5 ^ ~_0x54a0da & _0x1975ef;
                  var _0x51feea = _0x2409b0 & _0x4c6998 ^ _0x2409b0 & _0x10269c ^ _0x4c6998 & _0x10269c;
                  var _0x4e5ae4 = _0x1e04d8 & _0xae6df7 ^ _0x1e04d8 & _0x4f57a1 ^ _0xae6df7 & _0x4f57a1;
                  var _0x15b81f = (_0x2409b0 >>> 28 | _0x1e04d8 << 4) ^ (_0x2409b0 << 30 | _0x1e04d8 >>> 2) ^ (_0x2409b0 << 25 | _0x1e04d8 >>> 7);
                  var _0x47cb93 = (_0x1e04d8 >>> 28 | _0x2409b0 << 4) ^ (_0x1e04d8 << 30 | _0x2409b0 >>> 2) ^ (_0x1e04d8 << 25 | _0x2409b0 >>> 7);
                  var _0x12c792 = (_0x462baa >>> 14 | _0x54a0da << 18) ^ (_0x462baa >>> 18 | _0x54a0da << 14) ^ (_0x462baa << 23 | _0x54a0da >>> 9);
                  var _0x212013 = (_0x54a0da >>> 14 | _0x462baa << 18) ^ (_0x54a0da >>> 18 | _0x462baa << 14) ^ (_0x54a0da << 23 | _0x462baa >>> 9);
                  var _0x39ba36 = _0x348f7e[_0x4ca6ae];
                  var _0x38d84a = _0x39ba36.high;
                  var _0x238706 = _0x39ba36.low;
                  var _0x1ba49b = _0x3be177 + _0x212013;
                  var _0x46ae43 = _0x13e03e + _0x12c792 + (_0x1ba49b >>> 0 < _0x3be177 >>> 0 ? 1 : 0);
                  var _0x1ba49b = _0x1ba49b + _0x734dda;
                  var _0x46ae43 = _0x46ae43 + _0x140462 + (_0x1ba49b >>> 0 < _0x734dda >>> 0 ? 1 : 0);
                  var _0x1ba49b = _0x1ba49b + _0x238706;
                  var _0x46ae43 = _0x46ae43 + _0x38d84a + (_0x1ba49b >>> 0 < _0x238706 >>> 0 ? 1 : 0);
                  var _0x1ba49b = _0x1ba49b + _0x50419f;
                  var _0x46ae43 = _0x46ae43 + _0x1e5db6 + (_0x1ba49b >>> 0 < _0x50419f >>> 0 ? 1 : 0);
                  var _0x225639 = _0x47cb93 + _0x4e5ae4;
                  var _0x5bba49 = _0x15b81f + _0x51feea + (_0x225639 >>> 0 < _0x47cb93 >>> 0 ? 1 : 0);
                  _0x13e03e = _0xc22525;
                  _0x3be177 = _0x1975ef;
                  _0xc22525 = _0x764929;
                  _0x1975ef = _0x1dc8b5;
                  _0x764929 = _0x462baa;
                  _0x1dc8b5 = _0x54a0da;
                  _0x54a0da = _0x1b823a + _0x1ba49b | 0;
                  _0x462baa = _0x1a4ad7 + _0x46ae43 + (_0x54a0da >>> 0 < _0x1b823a >>> 0 ? 1 : 0) | 0;
                  _0x1a4ad7 = _0x10269c;
                  _0x1b823a = _0x4f57a1;
                  _0x10269c = _0x4c6998;
                  _0x4f57a1 = _0xae6df7;
                  _0x4c6998 = _0x2409b0;
                  _0xae6df7 = _0x1e04d8;
                  _0x1e04d8 = _0x1ba49b + _0x225639 | 0;
                  _0x2409b0 = _0x46ae43 + _0x5bba49 + (_0x1e04d8 >>> 0 < _0x1ba49b >>> 0 ? 1 : 0) | 0;
                }
                _0x48f4eb = _0x3f6817.low = _0x48f4eb + _0x1e04d8;
                _0x3f6817.high = _0x1dd024 + _0x2409b0 + (_0x48f4eb >>> 0 < _0x1e04d8 >>> 0 ? 1 : 0);
                _0x51d60b = _0x575183.low = _0x51d60b + _0xae6df7;
                _0x575183.high = _0x5842bf + _0x4c6998 + (_0x51d60b >>> 0 < _0xae6df7 >>> 0 ? 1 : 0);
                _0x3e85c8 = _0x1f596c.low = _0x3e85c8 + _0x4f57a1;
                _0x1f596c.high = _0x258b9f + _0x10269c + (_0x3e85c8 >>> 0 < _0x4f57a1 >>> 0 ? 1 : 0);
                _0x57d1d9 = _0x29dbec.low = _0x57d1d9 + _0x1b823a;
                _0x29dbec.high = _0x6200ab + _0x1a4ad7 + (_0x57d1d9 >>> 0 < _0x1b823a >>> 0 ? 1 : 0);
                _0x3b77b1 = _0xd4405f.low = _0x3b77b1 + _0x54a0da;
                _0xd4405f.high = _0xa438f7 + _0x462baa + (_0x3b77b1 >>> 0 < _0x54a0da >>> 0 ? 1 : 0);
                _0x2f2e6e = _0x380498.low = _0x2f2e6e + _0x1dc8b5;
                _0x380498.high = _0xcd92e9 + _0x764929 + (_0x2f2e6e >>> 0 < _0x1dc8b5 >>> 0 ? 1 : 0);
                _0x36d625 = _0x1d094b.low = _0x36d625 + _0x1975ef;
                _0x1d094b.high = _0x1a3a1e + _0xc22525 + (_0x36d625 >>> 0 < _0x1975ef >>> 0 ? 1 : 0);
                _0xf2adff = _0x427567.low = _0xf2adff + _0x3be177;
                _0x427567.high = _0x5726a5 + _0x13e03e + (_0xf2adff >>> 0 < _0x3be177 >>> 0 ? 1 : 0);
              },
              _doFinalize: function() {
                var _0x5da968 = this._data;
                var _0x50e224 = _0x5da968.words;
                var _0x2613ba = this._nDataBytes * 8;
                var _0x256bf7 = _0x5da968.sigBytes * 8;
                _0x50e224[_0x256bf7 >>> 5] |= 128 << 24 - _0x256bf7 % 32;
                _0x50e224[(_0x256bf7 + 128 >>> 10 << 5) + 30] = Math.floor(_0x2613ba / 4294967296);
                _0x50e224[(_0x256bf7 + 128 >>> 10 << 5) + 31] = _0x2613ba;
                _0x5da968.sigBytes = _0x50e224.length * 4;
                this._process();
                var _0x59e75b = this._hash.toX32();
                return _0x59e75b;
              },
              clone: function() {
                var _0x3ad390 = _0x5e7211.clone.call(this);
                _0x3ad390._hash = this._hash.clone();
                return _0x3ad390;
              },
              blockSize: 32
            });
            _0x4ea66d.SHA512 = _0x5e7211._createHelper(_0x4c2186);
            _0x4ea66d.HmacSHA512 = _0x5e7211._createHmacHelper(_0x4c2186);
          })();
          return _0x4929fc.SHA512;
        });
      }
    });
    var _0x23f27a = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(_0x486eb5, _0x90734f) {
        "use strict";
        (function(_0x1ced79, _0x520676, _0x239ba9) {
          if (typeof _0x486eb5 === "object") {
            _0x90734f.exports = _0x486eb5 = _0x520676(_0x59010e(), _0x48345e(), _0x5b156c());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./sha512"], _0x520676);
          } else {
            _0x520676(_0x1ced79.CryptoJS);
          }
        })(_0x486eb5, function(_0x25f9cd) {
          (function() {
            var _0x5ee8d0 = _0x25f9cd;
            var _0x32a243 = _0x5ee8d0.x64;
            var _0x1325d6 = _0x32a243.Word;
            var _0x34aee4 = _0x32a243.WordArray;
            var _0x49556b = _0x5ee8d0.algo;
            var _0x25761c = _0x49556b.SHA512;
            var _0x2f1000 = _0x49556b.SHA384 = _0x25761c.extend({
              _doReset: function() {
                this._hash = new _0x34aee4.init([new _0x1325d6.init(3418070365, 3238371032), new _0x1325d6.init(1654270250, 914150663), new _0x1325d6.init(2438529370, 812702999), new _0x1325d6.init(355462360, 4144912697), new _0x1325d6.init(1731405415, 4290775857), new _0x1325d6.init(2394180231, 1750603025), new _0x1325d6.init(3675008525, 1694076839), new _0x1325d6.init(1203062813, 3204075428)]);
              },
              _doFinalize: function() {
                var _0xc1e4f5 = _0x25761c._doFinalize.call(this);
                _0xc1e4f5.sigBytes -= 16;
                return _0xc1e4f5;
              }
            });
            _0x5ee8d0.SHA384 = _0x25761c._createHelper(_0x2f1000);
            _0x5ee8d0.HmacSHA384 = _0x25761c._createHmacHelper(_0x2f1000);
          })();
          return _0x25f9cd.SHA384;
        });
      }
    });
    var _0x12606e = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(_0x591ff2, _0x4b0b0a) {
        "use strict";
        "use strict";
        (function(_0x5ca25f, _0x11aff1, _0x4aaa6b) {
          if (typeof _0x591ff2 === "object") {
            _0x4b0b0a.exports = _0x591ff2 = _0x11aff1(_0x59010e(), _0x48345e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], _0x11aff1);
          } else {
            _0x11aff1(_0x5ca25f.CryptoJS);
          }
        })(_0x591ff2, function(_0x2c269e) {
          (function(_0x6219b2) {
            var _0x320979 = _0x2c269e;
            var _0x2ef637 = _0x320979.lib;
            var _0x50a216 = _0x2ef637.WordArray;
            var _0x167d80 = _0x2ef637.Hasher;
            var _0x30d9b7 = _0x320979.x64;
            var _0x4e46b7 = _0x30d9b7.Word;
            var _0x3633d2 = _0x320979.algo;
            var _0x35cdf7 = [];
            var _0x1d462e = [];
            var _0x570293 = [];
            (function() {
              var _0x4fa4f5 = 1;
              var _0x3ffcf8 = 0;
              for (var _0x29dbcd = 0; _0x29dbcd < 24; _0x29dbcd++) {
                _0x35cdf7[_0x4fa4f5 + _0x3ffcf8 * 5] = (_0x29dbcd + 1) * (_0x29dbcd + 2) / 2 % 64;
                var _0x381292 = _0x3ffcf8 % 5;
                var _0x2cd4b7 = (_0x4fa4f5 * 2 + _0x3ffcf8 * 3) % 5;
                _0x4fa4f5 = _0x381292;
                _0x3ffcf8 = _0x2cd4b7;
              }
              for (var _0x4fa4f5 = 0; _0x4fa4f5 < 5; _0x4fa4f5++) {
                for (var _0x3ffcf8 = 0; _0x3ffcf8 < 5; _0x3ffcf8++) {
                  _0x1d462e[_0x4fa4f5 + _0x3ffcf8 * 5] = _0x3ffcf8 + (_0x4fa4f5 * 2 + _0x3ffcf8 * 3) % 5 * 5;
                }
              }
              var _0x1bb926 = 1;
              for (var _0x195488 = 0; _0x195488 < 24; _0x195488++) {
                var _0x490f40 = 0;
                var _0x359c61 = 0;
                for (var _0x365d7a = 0; _0x365d7a < 7; _0x365d7a++) {
                  if (_0x1bb926 & 1) {
                    var _0x352d66 = (1 << _0x365d7a) - 1;
                    if (_0x352d66 < 32) {
                      _0x359c61 ^= 1 << _0x352d66;
                    } else {
                      _0x490f40 ^= 1 << _0x352d66 - 32;
                    }
                  }
                  if (_0x1bb926 & 128) {
                    _0x1bb926 = _0x1bb926 << 1 ^ 113;
                  } else {
                    _0x1bb926 <<= 1;
                  }
                }
                _0x570293[_0x195488] = _0x4e46b7.create(_0x490f40, _0x359c61);
              }
            })();
            var _0x533fff = [];
            (function() {
              for (var _0x3ebe1e = 0; _0x3ebe1e < 25; _0x3ebe1e++) {
                _0x533fff[_0x3ebe1e] = _0x4e46b7.create();
              }
            })();
            var _0x2950f9 = _0x3633d2.SHA3 = _0x167d80.extend({
              cfg: _0x167d80.cfg.extend({
                outputLength: 512
              }),
              _doReset: function() {
                var _0x2fa3fc = this._state = [];
                for (var _0x2209ad = 0; _0x2209ad < 25; _0x2209ad++) {
                  _0x2fa3fc[_0x2209ad] = new _0x4e46b7.init();
                }
                this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
              },
              _doProcessBlock: function(_0x14f53f, _0x2d8988) {
                var _0x1f001b = this._state;
                var _0x42d430 = this.blockSize / 2;
                for (var _0x4cb731 = 0; _0x4cb731 < _0x42d430; _0x4cb731++) {
                  var _0x14e239 = _0x14f53f[_0x2d8988 + _0x4cb731 * 2];
                  var _0x3eadd1 = _0x14f53f[_0x2d8988 + _0x4cb731 * 2 + 1];
                  _0x14e239 = (_0x14e239 << 8 | _0x14e239 >>> 24) & 16711935 | (_0x14e239 << 24 | _0x14e239 >>> 8) & -16711936;
                  _0x3eadd1 = (_0x3eadd1 << 8 | _0x3eadd1 >>> 24) & 16711935 | (_0x3eadd1 << 24 | _0x3eadd1 >>> 8) & -16711936;
                  var _0x4dbc5e = _0x1f001b[_0x4cb731];
                  _0x4dbc5e.high ^= _0x3eadd1;
                  _0x4dbc5e.low ^= _0x14e239;
                }
                for (var _0x2c754c = 0; _0x2c754c < 24; _0x2c754c++) {
                  for (var _0x59ca69 = 0; _0x59ca69 < 5; _0x59ca69++) {
                    var _0x354b37 = 0;
                    var _0x12b73b = 0;
                    for (var _0x19b0f9 = 0; _0x19b0f9 < 5; _0x19b0f9++) {
                      var _0x4dbc5e = _0x1f001b[_0x59ca69 + _0x19b0f9 * 5];
                      _0x354b37 ^= _0x4dbc5e.high;
                      _0x12b73b ^= _0x4dbc5e.low;
                    }
                    var _0x49ea51 = _0x533fff[_0x59ca69];
                    _0x49ea51.high = _0x354b37;
                    _0x49ea51.low = _0x12b73b;
                  }
                  for (var _0x59ca69 = 0; _0x59ca69 < 5; _0x59ca69++) {
                    var _0x98515e = _0x533fff[(_0x59ca69 + 4) % 5];
                    var _0x1d5504 = _0x533fff[(_0x59ca69 + 1) % 5];
                    var _0x452e48 = _0x1d5504.high;
                    var _0x4cd5c7 = _0x1d5504.low;
                    var _0x354b37 = _0x98515e.high ^ (_0x452e48 << 1 | _0x4cd5c7 >>> 31);
                    var _0x12b73b = _0x98515e.low ^ (_0x4cd5c7 << 1 | _0x452e48 >>> 31);
                    for (var _0x19b0f9 = 0; _0x19b0f9 < 5; _0x19b0f9++) {
                      var _0x4dbc5e = _0x1f001b[_0x59ca69 + _0x19b0f9 * 5];
                      _0x4dbc5e.high ^= _0x354b37;
                      _0x4dbc5e.low ^= _0x12b73b;
                    }
                  }
                  for (var _0x3758c1 = 1; _0x3758c1 < 25; _0x3758c1++) {
                    var _0x4dbc5e = _0x1f001b[_0x3758c1];
                    var _0x44ea89 = _0x4dbc5e.high;
                    var _0x2b8f7b = _0x4dbc5e.low;
                    var _0x10d16f = _0x35cdf7[_0x3758c1];
                    if (_0x10d16f < 32) {
                      var _0x354b37 = _0x44ea89 << _0x10d16f | _0x2b8f7b >>> 32 - _0x10d16f;
                      var _0x12b73b = _0x2b8f7b << _0x10d16f | _0x44ea89 >>> 32 - _0x10d16f;
                    } else {
                      var _0x354b37 = _0x2b8f7b << _0x10d16f - 32 | _0x44ea89 >>> 64 - _0x10d16f;
                      var _0x12b73b = _0x44ea89 << _0x10d16f - 32 | _0x2b8f7b >>> 64 - _0x10d16f;
                    }
                    var _0x5dd3a3 = _0x533fff[_0x1d462e[_0x3758c1]];
                    _0x5dd3a3.high = _0x354b37;
                    _0x5dd3a3.low = _0x12b73b;
                  }
                  var _0x2c11cf = _0x533fff[0];
                  var _0x465a72 = _0x1f001b[0];
                  _0x2c11cf.high = _0x465a72.high;
                  _0x2c11cf.low = _0x465a72.low;
                  for (var _0x59ca69 = 0; _0x59ca69 < 5; _0x59ca69++) {
                    for (var _0x19b0f9 = 0; _0x19b0f9 < 5; _0x19b0f9++) {
                      var _0x3758c1 = _0x59ca69 + _0x19b0f9 * 5;
                      var _0x4dbc5e = _0x1f001b[_0x3758c1];
                      var _0x5a4585 = _0x533fff[_0x3758c1];
                      var _0x18a4ba = _0x533fff[(_0x59ca69 + 1) % 5 + _0x19b0f9 * 5];
                      var _0x42474c = _0x533fff[(_0x59ca69 + 2) % 5 + _0x19b0f9 * 5];
                      _0x4dbc5e.high = _0x5a4585.high ^ ~_0x18a4ba.high & _0x42474c.high;
                      _0x4dbc5e.low = _0x5a4585.low ^ ~_0x18a4ba.low & _0x42474c.low;
                    }
                  }
                  var _0x4dbc5e = _0x1f001b[0];
                  var _0x474982 = _0x570293[_0x2c754c];
                  _0x4dbc5e.high ^= _0x474982.high;
                  _0x4dbc5e.low ^= _0x474982.low;
                  ;
                }
              },
              _doFinalize: function() {
                var _0x1ddbd0 = this._data;
                var _0x1939bc = _0x1ddbd0.words;
                var _0x1d5473 = this._nDataBytes * 8;
                var _0x1e28f8 = _0x1ddbd0.sigBytes * 8;
                var _0x184231 = this.blockSize * 32;
                _0x1939bc[_0x1e28f8 >>> 5] |= 1 << 24 - _0x1e28f8 % 32;
                _0x1939bc[(_0x6219b2.ceil((_0x1e28f8 + 1) / _0x184231) * _0x184231 >>> 5) - 1] |= 128;
                _0x1ddbd0.sigBytes = _0x1939bc.length * 4;
                this._process();
                var _0x1af470 = this._state;
                var _0x2011f6 = this.cfg.outputLength / 8;
                var _0x1c47a7 = _0x2011f6 / 8;
                var _0x434081 = [];
                for (var _0x32325c = 0; _0x32325c < _0x1c47a7; _0x32325c++) {
                  var _0x58c145 = _0x1af470[_0x32325c];
                  var _0xc78327 = _0x58c145.high;
                  var _0x4bd727 = _0x58c145.low;
                  _0xc78327 = (_0xc78327 << 8 | _0xc78327 >>> 24) & 16711935 | (_0xc78327 << 24 | _0xc78327 >>> 8) & -16711936;
                  _0x4bd727 = (_0x4bd727 << 8 | _0x4bd727 >>> 24) & 16711935 | (_0x4bd727 << 24 | _0x4bd727 >>> 8) & -16711936;
                  _0x434081.push(_0x4bd727);
                  _0x434081.push(_0xc78327);
                }
                return new _0x50a216.init(_0x434081, _0x2011f6);
              },
              clone: function() {
                var _0x308367 = _0x167d80.clone.call(this);
                var _0x500978 = _0x308367._state = this._state.slice(0);
                for (var _0x2ca43f = 0; _0x2ca43f < 25; _0x2ca43f++) {
                  _0x500978[_0x2ca43f] = _0x500978[_0x2ca43f].clone();
                }
                return _0x308367;
              }
            });
            _0x320979.SHA3 = _0x167d80._createHelper(_0x2950f9);
            _0x320979.HmacSHA3 = _0x167d80._createHmacHelper(_0x2950f9);
          })(Math);
          return _0x2c269e.SHA3;
        });
      }
    });
    var _0x581e8a = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(_0x6618f3, _0x5e1a7b) {
        "use strict";
        (function(_0x4b3829, _0x57f6af) {
          if (typeof _0x6618f3 === "object") {
            _0x5e1a7b.exports = _0x6618f3 = _0x57f6af(_0x59010e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], _0x57f6af);
          } else {
            _0x57f6af(_0x4b3829.CryptoJS);
          }
        })(_0x6618f3, function(_0x349285) {
          (function(_0x6be89f) {
            var _0x149e84 = _0x349285;
            var _0x3e4d3d = _0x149e84.lib;
            var _0x426f0e = _0x3e4d3d.WordArray;
            var _0x438cc6 = _0x3e4d3d.Hasher;
            var _0x3d3cd3 = _0x149e84.algo;
            var _0x5c9c35 = _0x426f0e.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
            var _0x13b92f = _0x426f0e.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
            var _0x4b8b6a = _0x426f0e.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
            var _0x4c4ce2 = _0x426f0e.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
            var _0x3f4b5b = _0x426f0e.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
            var _0x379d96 = _0x426f0e.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            var _0x45d805 = _0x3d3cd3.RIPEMD160 = _0x438cc6.extend({
              _doReset: function() {
                this._hash = _0x426f0e.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(_0x3130f8, _0x1d9047) {
                for (var _0x357ed7 = 0; _0x357ed7 < 16; _0x357ed7++) {
                  var _0x5479cf = _0x1d9047 + _0x357ed7;
                  var _0x2f400a = _0x3130f8[_0x5479cf];
                  _0x3130f8[_0x5479cf] = (_0x2f400a << 8 | _0x2f400a >>> 24) & 16711935 | (_0x2f400a << 24 | _0x2f400a >>> 8) & -16711936;
                }
                var _0x4b8e82 = this._hash.words;
                var _0x4cbbe3 = _0x3f4b5b.words;
                var _0x3199b0 = _0x379d96.words;
                var _0x476595 = _0x5c9c35.words;
                var _0x1f2a06 = _0x13b92f.words;
                var _0x521b0b = _0x4b8b6a.words;
                var _0x1061a5 = _0x4c4ce2.words;
                var _0x3f67af;
                var _0x9babc5;
                var _0x5a2a32;
                var _0x4dbff9;
                var _0x2f6494;
                var _0x5a82ff;
                var _0x31c729;
                var _0x1484a2;
                var _0x1dfb1c;
                var _0x8d460c;
                _0x5a82ff = _0x3f67af = _0x4b8e82[0];
                _0x31c729 = _0x9babc5 = _0x4b8e82[1];
                _0x1484a2 = _0x5a2a32 = _0x4b8e82[2];
                _0x1dfb1c = _0x4dbff9 = _0x4b8e82[3];
                _0x8d460c = _0x2f6494 = _0x4b8e82[4];
                var _0x43a7d7;
                for (var _0x357ed7 = 0; _0x357ed7 < 80; _0x357ed7 += 1) {
                  _0x43a7d7 = _0x3f67af + _0x3130f8[_0x1d9047 + _0x476595[_0x357ed7]] | 0;
                  if (_0x357ed7 < 16) {
                    _0x43a7d7 += _0x301df4(_0x9babc5, _0x5a2a32, _0x4dbff9) + _0x4cbbe3[0];
                  } else if (_0x357ed7 < 32) {
                    _0x43a7d7 += _0x186c93(_0x9babc5, _0x5a2a32, _0x4dbff9) + _0x4cbbe3[1];
                  } else if (_0x357ed7 < 48) {
                    _0x43a7d7 += _0x249b01(_0x9babc5, _0x5a2a32, _0x4dbff9) + _0x4cbbe3[2];
                  } else if (_0x357ed7 < 64) {
                    _0x43a7d7 += _0x2bb90b(_0x9babc5, _0x5a2a32, _0x4dbff9) + _0x4cbbe3[3];
                  } else {
                    _0x43a7d7 += _0x5c5e56(_0x9babc5, _0x5a2a32, _0x4dbff9) + _0x4cbbe3[4];
                  }
                  _0x43a7d7 = _0x43a7d7 | 0;
                  _0x43a7d7 = _0x2bf159(_0x43a7d7, _0x521b0b[_0x357ed7]);
                  _0x43a7d7 = _0x43a7d7 + _0x2f6494 | 0;
                  _0x3f67af = _0x2f6494;
                  _0x2f6494 = _0x4dbff9;
                  _0x4dbff9 = _0x2bf159(_0x5a2a32, 10);
                  _0x5a2a32 = _0x9babc5;
                  _0x9babc5 = _0x43a7d7;
                  _0x43a7d7 = _0x5a82ff + _0x3130f8[_0x1d9047 + _0x1f2a06[_0x357ed7]] | 0;
                  if (_0x357ed7 < 16) {
                    _0x43a7d7 += _0x5c5e56(_0x31c729, _0x1484a2, _0x1dfb1c) + _0x3199b0[0];
                  } else if (_0x357ed7 < 32) {
                    _0x43a7d7 += _0x2bb90b(_0x31c729, _0x1484a2, _0x1dfb1c) + _0x3199b0[1];
                  } else if (_0x357ed7 < 48) {
                    _0x43a7d7 += _0x249b01(_0x31c729, _0x1484a2, _0x1dfb1c) + _0x3199b0[2];
                  } else if (_0x357ed7 < 64) {
                    _0x43a7d7 += _0x186c93(_0x31c729, _0x1484a2, _0x1dfb1c) + _0x3199b0[3];
                  } else {
                    _0x43a7d7 += _0x301df4(_0x31c729, _0x1484a2, _0x1dfb1c) + _0x3199b0[4];
                  }
                  _0x43a7d7 = _0x43a7d7 | 0;
                  _0x43a7d7 = _0x2bf159(_0x43a7d7, _0x1061a5[_0x357ed7]);
                  _0x43a7d7 = _0x43a7d7 + _0x8d460c | 0;
                  _0x5a82ff = _0x8d460c;
                  _0x8d460c = _0x1dfb1c;
                  _0x1dfb1c = _0x2bf159(_0x1484a2, 10);
                  _0x1484a2 = _0x31c729;
                  _0x31c729 = _0x43a7d7;
                }
                _0x43a7d7 = _0x4b8e82[1] + _0x5a2a32 + _0x1dfb1c | 0;
                _0x4b8e82[1] = _0x4b8e82[2] + _0x4dbff9 + _0x8d460c | 0;
                _0x4b8e82[2] = _0x4b8e82[3] + _0x2f6494 + _0x5a82ff | 0;
                _0x4b8e82[3] = _0x4b8e82[4] + _0x3f67af + _0x31c729 | 0;
                _0x4b8e82[4] = _0x4b8e82[0] + _0x9babc5 + _0x1484a2 | 0;
                _0x4b8e82[0] = _0x43a7d7;
              },
              _doFinalize: function() {
                var _0xed217e = this._data;
                var _0x1c7e51 = _0xed217e.words;
                var _0x24bb82 = this._nDataBytes * 8;
                var _0x42496b = _0xed217e.sigBytes * 8;
                _0x1c7e51[_0x42496b >>> 5] |= 128 << 24 - _0x42496b % 32;
                _0x1c7e51[(_0x42496b + 64 >>> 9 << 4) + 14] = (_0x24bb82 << 8 | _0x24bb82 >>> 24) & 16711935 | (_0x24bb82 << 24 | _0x24bb82 >>> 8) & -16711936;
                _0xed217e.sigBytes = (_0x1c7e51.length + 1) * 4;
                this._process();
                var _0x1dbb4a = this._hash;
                var _0x207d9a = _0x1dbb4a.words;
                for (var _0x328055 = 0; _0x328055 < 5; _0x328055++) {
                  var _0x1cc75f = _0x207d9a[_0x328055];
                  _0x207d9a[_0x328055] = (_0x1cc75f << 8 | _0x1cc75f >>> 24) & 16711935 | (_0x1cc75f << 24 | _0x1cc75f >>> 8) & -16711936;
                }
                return _0x1dbb4a;
              },
              clone: function() {
                var _0x4dac9f = _0x438cc6.clone.call(this);
                _0x4dac9f._hash = this._hash.clone();
                return _0x4dac9f;
              }
            });
            function _0x301df4(_0x265b0c, _0x99b51b, _0x36e439) {
              return _0x265b0c ^ _0x99b51b ^ _0x36e439;
            }
            function _0x186c93(_0x2ff3a8, _0x1ffa43, _0x225c6b) {
              return _0x2ff3a8 & _0x1ffa43 | ~_0x2ff3a8 & _0x225c6b;
            }
            function _0x249b01(_0x4265a6, _0x22b9aa, _0x3ed155) {
              return (_0x4265a6 | ~_0x22b9aa) ^ _0x3ed155;
            }
            function _0x2bb90b(_0x2124a6, _0x46c9b9, _0x496af9) {
              return _0x2124a6 & _0x496af9 | _0x46c9b9 & ~_0x496af9;
            }
            function _0x5c5e56(_0x95c080, _0x1dd4ad, _0x4510c6) {
              return _0x95c080 ^ (_0x1dd4ad | ~_0x4510c6);
            }
            function _0x2bf159(_0x49b40e, _0x113a30) {
              return _0x49b40e << _0x113a30 | _0x49b40e >>> 32 - _0x113a30;
            }
            _0x149e84.RIPEMD160 = _0x438cc6._createHelper(_0x45d805);
            _0x149e84.HmacRIPEMD160 = _0x438cc6._createHmacHelper(_0x45d805);
          })(Math);
          return _0x349285.RIPEMD160;
        });
      }
    });
    var _0x1b2c6b = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(_0x216277, _0x4d021b) {
        "use strict";
        (function(_0x21a455, _0x3af410) {
          if (typeof _0x216277 === "object") {
            _0x4d021b.exports = _0x216277 = _0x3af410(_0x59010e());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], _0x3af410);
          } else {
            _0x3af410(_0x21a455.CryptoJS);
          }
        })(_0x216277, function(_0x56c1c2) {
          (function() {
            var _0x34c147 = _0x56c1c2;
            var _0xc22676 = _0x34c147.lib;
            var _0x11d268 = _0xc22676.Base;
            var _0x5ec253 = _0x34c147.enc;
            var _0x241b97 = _0x5ec253.Utf8;
            var _0x213dbf = _0x34c147.algo;
            var _0x153b19 = _0x213dbf.HMAC = _0x11d268.extend({
              init: function(_0x2b7d0b, _0x1b0648) {
                _0x2b7d0b = this._hasher = new _0x2b7d0b.init();
                if (typeof _0x1b0648 == "string") {
                  _0x1b0648 = _0x241b97.parse(_0x1b0648);
                }
                var _0x3a02e3 = _0x2b7d0b.blockSize;
                var _0x3c6a7d = _0x3a02e3 * 4;
                if (_0x1b0648.sigBytes > _0x3c6a7d) {
                  _0x1b0648 = _0x2b7d0b.finalize(_0x1b0648);
                }
                _0x1b0648.clamp();
                var _0x1cfd46 = this._oKey = _0x1b0648.clone();
                var _0x237eef = this._iKey = _0x1b0648.clone();
                var _0x33a848 = _0x1cfd46.words;
                var _0x38e908 = _0x237eef.words;
                for (var _0x5c808a = 0; _0x5c808a < _0x3a02e3; _0x5c808a++) {
                  _0x33a848[_0x5c808a] ^= 1549556828;
                  _0x38e908[_0x5c808a] ^= 909522486;
                }
                _0x1cfd46.sigBytes = _0x237eef.sigBytes = _0x3c6a7d;
                this.reset();
              },
              reset: function() {
                var _0x4c8155 = this._hasher;
                _0x4c8155.reset();
                _0x4c8155.update(this._iKey);
              },
              update: function(_0x3e8bc2) {
                this._hasher.update(_0x3e8bc2);
                return this;
              },
              finalize: function(_0x3c1c54) {
                var _0xbae0d6 = this._hasher;
                var _0x4285f5 = _0xbae0d6.finalize(_0x3c1c54);
                _0xbae0d6.reset();
                var _0xa8cc34 = _0xbae0d6.finalize(this._oKey.clone().concat(_0x4285f5));
                return _0xa8cc34;
              }
            });
          })();
        });
      }
    });
    var _0x569424 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(_0x56f9a0, _0x5e66eb) {
        "use strict";
        (function(_0x203e67, _0x1f7e4e, _0x926879) {
          if (typeof _0x56f9a0 === "object") {
            _0x5e66eb.exports = _0x56f9a0 = _0x1f7e4e(_0x59010e(), _0x3d0103(), _0x1b2c6b());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], _0x1f7e4e);
          } else {
            _0x1f7e4e(_0x203e67.CryptoJS);
          }
        })(_0x56f9a0, function(_0x1d8d3a) {
          (function() {
            var _0x2f0a03 = _0x1d8d3a;
            var _0x3d4386 = _0x2f0a03.lib;
            var _0x30f1d7 = _0x3d4386.Base;
            var _0x56e43b = _0x3d4386.WordArray;
            var _0x240d8d = _0x2f0a03.algo;
            var _0x9e05fa = _0x240d8d.SHA1;
            var _0x5db12e = _0x240d8d.HMAC;
            var _0x24521c = {
              keySize: 4,
              hasher: _0x9e05fa,
              iterations: 1
            };
            var _0xb1a692 = _0x240d8d.PBKDF2 = _0x30f1d7.extend({
              cfg: _0x30f1d7.extend(_0x24521c),
              init: function(_0x2b69f5) {
                this.cfg = this.cfg.extend(_0x2b69f5);
              },
              compute: function(_0x41457c, _0x4e36a8) {
                var _0x33cbde = this.cfg;
                var _0xdd120a = _0x5db12e.create(_0x33cbde.hasher, _0x41457c);
                var _0x2fc018 = _0x56e43b.create();
                var _0x53969d = _0x56e43b.create([1]);
                var _0x254a9d = _0x2fc018.words;
                var _0x108f90 = _0x53969d.words;
                var _0x253b8a = _0x33cbde.keySize;
                var _0x3a1756 = _0x33cbde.iterations;
                while (_0x254a9d.length < _0x253b8a) {
                  var _0x3d5f1d = _0xdd120a.update(_0x4e36a8).finalize(_0x53969d);
                  _0xdd120a.reset();
                  var _0x2bc260 = _0x3d5f1d.words;
                  var _0xf45236 = _0x2bc260.length;
                  var _0x5921f6 = _0x3d5f1d;
                  for (var _0x3e2802 = 1; _0x3e2802 < _0x3a1756; _0x3e2802++) {
                    _0x5921f6 = _0xdd120a.finalize(_0x5921f6);
                    _0xdd120a.reset();
                    var _0x235138 = _0x5921f6.words;
                    for (var _0x5bc438 = 0; _0x5bc438 < _0xf45236; _0x5bc438++) {
                      _0x2bc260[_0x5bc438] ^= _0x235138[_0x5bc438];
                    }
                  }
                  _0x2fc018.concat(_0x3d5f1d);
                  _0x108f90[0]++;
                }
                _0x2fc018.sigBytes = _0x253b8a * 4;
                return _0x2fc018;
              }
            });
            _0x2f0a03.PBKDF2 = function(_0x17f79e, _0x54589a, _0xba6682) {
              return _0xb1a692.create(_0xba6682).compute(_0x17f79e, _0x54589a);
            };
          })();
          return _0x1d8d3a.PBKDF2;
        });
      }
    });
    var _0x16e388 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(_0x2aefc4, _0x5b8798) {
        "use strict";
        (function(_0x29ff31, _0x38d3aa, _0x2903d2) {
          if (typeof _0x2aefc4 === "object") {
            _0x5b8798.exports = _0x2aefc4 = _0x38d3aa(_0x59010e(), _0x3d0103(), _0x1b2c6b());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], _0x38d3aa);
          } else {
            _0x38d3aa(_0x29ff31.CryptoJS);
          }
        })(_0x2aefc4, function(_0x54cfda) {
          (function() {
            var _0x157de5 = _0x54cfda;
            var _0x15bb72 = _0x157de5.lib;
            var _0x5763a4 = _0x15bb72.Base;
            var _0xf03bad = _0x15bb72.WordArray;
            var _0x5de338 = _0x157de5.algo;
            var _0x491427 = _0x5de338.MD5;
            var _0x44c039 = {
              keySize: 4,
              hasher: _0x491427,
              iterations: 1
            };
            var _0x5f1984 = _0x5de338.EvpKDF = _0x5763a4.extend({
              cfg: _0x5763a4.extend(_0x44c039),
              init: function(_0x287b5d) {
                this.cfg = this.cfg.extend(_0x287b5d);
              },
              compute: function(_0x488fa, _0x3d9689) {
                var _0xe060d0 = this.cfg;
                var _0x38d642 = _0xe060d0.hasher.create();
                var _0x58658c = _0xf03bad.create();
                var _0x2144ac = _0x58658c.words;
                var _0x5d396a = _0xe060d0.keySize;
                var _0x248190 = _0xe060d0.iterations;
                while (_0x2144ac.length < _0x5d396a) {
                  if (_0x38ac50) {
                    _0x38d642.update(_0x38ac50);
                  }
                  var _0x38ac50 = _0x38d642.update(_0x488fa).finalize(_0x3d9689);
                  _0x38d642.reset();
                  for (var _0x44e961 = 1; _0x44e961 < _0x248190; _0x44e961++) {
                    _0x38ac50 = _0x38d642.finalize(_0x38ac50);
                    _0x38d642.reset();
                  }
                  _0x58658c.concat(_0x38ac50);
                }
                _0x58658c.sigBytes = _0x5d396a * 4;
                return _0x58658c;
              }
            });
            _0x157de5.EvpKDF = function(_0x4af882, _0x108013, _0xbc6b9e) {
              return _0x5f1984.create(_0xbc6b9e).compute(_0x4af882, _0x108013);
            };
          })();
          return _0x54cfda.EvpKDF;
        });
      }
    });
    var _0x2257a4 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(_0x33e196, _0x3e9ea6) {
        "use strict";
        (function(_0x115468, _0x470ccd, _0x3f10bf) {
          if (typeof _0x33e196 === "object") {
            _0x3e9ea6.exports = _0x33e196 = _0x470ccd(_0x59010e(), _0x16e388());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./evpkdf"], _0x470ccd);
          } else {
            _0x470ccd(_0x115468.CryptoJS);
          }
        })(_0x33e196, function(_0x33d613) {
          if (!_0x33d613.lib.Cipher) {
            (function(_0x3d32ea) {
              var _0x31385d = _0x33d613;
              var _0x9ef4e9 = _0x31385d.lib;
              var _0x12c1c4 = _0x9ef4e9.Base;
              var _0x19a8f0 = _0x9ef4e9.WordArray;
              var _0x317d61 = _0x9ef4e9.BufferedBlockAlgorithm;
              var _0x6cb9a = _0x31385d.enc;
              var _0x37c8f4 = _0x6cb9a.Utf8;
              var _0x4907e5 = _0x6cb9a.Base64;
              var _0x928877 = _0x31385d.algo;
              var _0x3e6806 = _0x928877.EvpKDF;
              var _0x457129 = _0x9ef4e9.Cipher = _0x317d61.extend({
                cfg: _0x12c1c4.extend(),
                createEncryptor: function(_0x574fbc, _0x12e96f) {
                  return this.create(this._ENC_XFORM_MODE, _0x574fbc, _0x12e96f);
                },
                createDecryptor: function(_0x3b4f83, _0xce42b8) {
                  return this.create(this._DEC_XFORM_MODE, _0x3b4f83, _0xce42b8);
                },
                init: function(_0x551910, _0x19505a, _0x1e1f05) {
                  this.cfg = this.cfg.extend(_0x1e1f05);
                  this._xformMode = _0x551910;
                  this._key = _0x19505a;
                  this.reset();
                },
                reset: function() {
                  _0x317d61.reset.call(this);
                  this._doReset();
                },
                process: function(_0x5a925d) {
                  this._append(_0x5a925d);
                  return this._process();
                },
                finalize: function(_0x342a5e) {
                  if (_0x342a5e) {
                    this._append(_0x342a5e);
                  }
                  var _0xdc175 = this._doFinalize();
                  return _0xdc175;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: /* @__PURE__ */ (function() {
                  function _0x15f88c(_0x6f2b11) {
                    if (typeof _0x6f2b11 == "string") {
                      return _0xf4fc5d;
                    } else {
                      return _0x5bc802;
                    }
                  }
                  return function(_0x3a3ec6) {
                    return {
                      encrypt: function(_0x3c6942, _0x5d3616, _0x5da3d4) {
                        return _0x15f88c(_0x5d3616).encrypt(_0x3a3ec6, _0x3c6942, _0x5d3616, _0x5da3d4);
                      },
                      decrypt: function(_0x753dec, _0xe2e1bd, _0x428b48) {
                        return _0x15f88c(_0xe2e1bd).decrypt(_0x3a3ec6, _0x753dec, _0xe2e1bd, _0x428b48);
                      }
                    };
                  };
                })()
              });
              var _0x2f9032 = _0x9ef4e9.StreamCipher = _0x457129.extend({
                _doFinalize: function() {
                  var _0x3917bd = this._process(true);
                  return _0x3917bd;
                },
                blockSize: 1
              });
              var _0x659040 = _0x31385d.mode = {};
              var _0x1de1fb = _0x9ef4e9.BlockCipherMode = _0x12c1c4.extend({
                createEncryptor: function(_0x2c540d, _0x9fce62) {
                  return this.Encryptor.create(_0x2c540d, _0x9fce62);
                },
                createDecryptor: function(_0xcc00e3, _0x1b7772) {
                  return this.Decryptor.create(_0xcc00e3, _0x1b7772);
                },
                init: function(_0x4bba13, _0xaf99f5) {
                  this._cipher = _0x4bba13;
                  this._iv = _0xaf99f5;
                }
              });
              var _0x5a670d = _0x659040.CBC = (function() {
                var _0x311ecf = _0x1de1fb.extend();
                _0x311ecf.Encryptor = _0x311ecf.extend({
                  processBlock: function(_0x452847, _0x5b9f41) {
                    var _0x36a3b4 = this._cipher;
                    var _0x36f839 = _0x36a3b4.blockSize;
                    _0x439977.call(this, _0x452847, _0x5b9f41, _0x36f839);
                    _0x36a3b4.encryptBlock(_0x452847, _0x5b9f41);
                    this._prevBlock = _0x452847.slice(_0x5b9f41, _0x5b9f41 + _0x36f839);
                  }
                });
                _0x311ecf.Decryptor = _0x311ecf.extend({
                  processBlock: function(_0x5a8787, _0x3d1c93) {
                    var _0x2431b0 = this._cipher;
                    var _0x5a47a9 = _0x2431b0.blockSize;
                    var _0x2ef16b = _0x5a8787.slice(_0x3d1c93, _0x3d1c93 + _0x5a47a9);
                    _0x2431b0.decryptBlock(_0x5a8787, _0x3d1c93);
                    _0x439977.call(this, _0x5a8787, _0x3d1c93, _0x5a47a9);
                    this._prevBlock = _0x2ef16b;
                  }
                });
                function _0x439977(_0x1f4fec, _0x2e293b, _0x414629) {
                  var _0x1b91a4 = this._iv;
                  if (_0x1b91a4) {
                    var _0x154b55 = _0x1b91a4;
                    this._iv = _0x3d32ea;
                  } else {
                    var _0x154b55 = this._prevBlock;
                  }
                  for (var _0x30766a = 0; _0x30766a < _0x414629; _0x30766a++) {
                    _0x1f4fec[_0x2e293b + _0x30766a] ^= _0x154b55[_0x30766a];
                  }
                }
                return _0x311ecf;
              })();
              var _0x4923a4 = _0x31385d.pad = {};
              var _0x5728db = _0x4923a4.Pkcs7 = {
                pad: function(_0x63389f, _0x5531f5) {
                  var _0x1ef631 = _0x5531f5 * 4;
                  var _0x37fbf6 = _0x1ef631 - _0x63389f.sigBytes % _0x1ef631;
                  var _0x47adf9 = _0x37fbf6 << 24 | _0x37fbf6 << 16 | _0x37fbf6 << 8 | _0x37fbf6;
                  var _0x2a1fd1 = [];
                  for (var _0x4367b5 = 0; _0x4367b5 < _0x37fbf6; _0x4367b5 += 4) {
                    _0x2a1fd1.push(_0x47adf9);
                  }
                  var _0x48fd17 = _0x19a8f0.create(_0x2a1fd1, _0x37fbf6);
                  _0x63389f.concat(_0x48fd17);
                },
                unpad: function(_0xb6fc36) {
                  var _0x4bb1e4 = _0xb6fc36.words[_0xb6fc36.sigBytes - 1 >>> 2] & 255;
                  _0xb6fc36.sigBytes -= _0x4bb1e4;
                }
              };
              var _0x282156 = {
                mode: _0x5a670d,
                padding: _0x5728db
              };
              var _0x28e562 = _0x9ef4e9.BlockCipher = _0x457129.extend({
                cfg: _0x457129.cfg.extend(_0x282156),
                reset: function() {
                  _0x457129.reset.call(this);
                  var _0x4e2cb8 = this.cfg;
                  var _0x38a413 = _0x4e2cb8.iv;
                  var _0x4f3529 = _0x4e2cb8.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var _0x56bc7c = _0x4f3529.createEncryptor;
                  } else {
                    var _0x56bc7c = _0x4f3529.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == _0x56bc7c) {
                    this._mode.init(this, _0x38a413 && _0x38a413.words);
                  } else {
                    this._mode = _0x56bc7c.call(_0x4f3529, this, _0x38a413 && _0x38a413.words);
                    this._mode.__creator = _0x56bc7c;
                  }
                },
                _doProcessBlock: function(_0x47c68b, _0x5a7847) {
                  this._mode.processBlock(_0x47c68b, _0x5a7847);
                },
                _doFinalize: function() {
                  var _0xaefcf = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    _0xaefcf.pad(this._data, this.blockSize);
                    var _0x548422 = this._process(true);
                  } else {
                    var _0x548422 = this._process(true);
                    _0xaefcf.unpad(_0x548422);
                  }
                  return _0x548422;
                },
                blockSize: 4
              });
              var _0x510a03 = _0x9ef4e9.CipherParams = _0x12c1c4.extend({
                init: function(_0x220fa8) {
                  this.mixIn(_0x220fa8);
                },
                toString: function(_0x470d6f) {
                  return (_0x470d6f || this.formatter).stringify(this);
                }
              });
              var _0x3d83ee = _0x31385d.format = {};
              var _0x1a76f6 = _0x3d83ee.OpenSSL = {
                stringify: function(_0xaeab79) {
                  var _0x42637c = _0xaeab79.ciphertext;
                  var _0x3ff811 = _0xaeab79.salt;
                  if (_0x3ff811) {
                    var _0x1306e0 = _0x19a8f0.create([1398893684, 1701076831]).concat(_0x3ff811).concat(_0x42637c);
                  } else {
                    var _0x1306e0 = _0x42637c;
                  }
                  return _0x1306e0.toString(_0x4907e5);
                },
                parse: function(_0x1267a0) {
                  var _0x373d16 = _0x4907e5.parse(_0x1267a0);
                  var _0x161b91 = _0x373d16.words;
                  if (_0x161b91[0] == 1398893684 && _0x161b91[1] == 1701076831) {
                    var _0x222e60 = _0x19a8f0.create(_0x161b91.slice(2, 4));
                    _0x161b91.splice(0, 4);
                    _0x373d16.sigBytes -= 16;
                  }
                  var _0x3dc497 = {
                    ciphertext: _0x373d16,
                    salt: _0x222e60
                  };
                  return _0x510a03.create(_0x3dc497);
                }
              };
              var _0x3ae6e8 = {
                format: _0x1a76f6
              };
              var _0x5bc802 = _0x9ef4e9.SerializableCipher = _0x12c1c4.extend({
                cfg: _0x12c1c4.extend(_0x3ae6e8),
                encrypt: function(_0x9662cb, _0x59a772, _0x275dfd, _0x53bb5f) {
                  _0x53bb5f = this.cfg.extend(_0x53bb5f);
                  var _0x460b22 = _0x9662cb.createEncryptor(_0x275dfd, _0x53bb5f);
                  var _0x5b0b54 = _0x460b22.finalize(_0x59a772);
                  var _0x9b78d0 = _0x460b22.cfg;
                  var _0x487c1f = {
                    ciphertext: _0x5b0b54,
                    key: _0x275dfd,
                    iv: _0x9b78d0.iv,
                    algorithm: _0x9662cb,
                    mode: _0x9b78d0.mode,
                    padding: _0x9b78d0.padding,
                    blockSize: _0x9662cb.blockSize,
                    formatter: _0x53bb5f.format
                  };
                  return _0x510a03.create(_0x487c1f);
                },
                decrypt: function(_0x133385, _0x14ff75, _0xf71c75, _0x5ac16d) {
                  _0x5ac16d = this.cfg.extend(_0x5ac16d);
                  _0x14ff75 = this._parse(_0x14ff75, _0x5ac16d.format);
                  var _0x382ae1 = _0x133385.createDecryptor(_0xf71c75, _0x5ac16d).finalize(_0x14ff75.ciphertext);
                  return _0x382ae1;
                },
                _parse: function(_0x182e30, _0x12df5d) {
                  if (typeof _0x182e30 == "string") {
                    return _0x12df5d.parse(_0x182e30, this);
                  } else {
                    return _0x182e30;
                  }
                }
              });
              var _0x5d5715 = _0x31385d.kdf = {};
              var _0x48c643 = _0x5d5715.OpenSSL = {
                execute: function(_0x57fa9d, _0x47ae8d, _0x404914, _0x6cdeac) {
                  if (!_0x6cdeac) {
                    _0x6cdeac = _0x19a8f0.random(8);
                  }
                  var _0x265daa = {
                    keySize: _0x47ae8d + _0x404914
                  };
                  var _0x5dd663 = _0x3e6806.create(_0x265daa).compute(_0x57fa9d, _0x6cdeac);
                  var _0x3273be = _0x19a8f0.create(_0x5dd663.words.slice(_0x47ae8d), _0x404914 * 4);
                  _0x5dd663.sigBytes = _0x47ae8d * 4;
                  var _0x443465 = {
                    key: _0x5dd663,
                    iv: _0x3273be,
                    salt: _0x6cdeac
                  };
                  return _0x510a03.create(_0x443465);
                }
              };
              var _0x13c575 = {
                kdf: _0x48c643
              };
              var _0xf4fc5d = _0x9ef4e9.PasswordBasedCipher = _0x5bc802.extend({
                cfg: _0x5bc802.cfg.extend(_0x13c575),
                encrypt: function(_0xc2b673, _0x35b493, _0x4a8be7, _0x916e4a) {
                  _0x916e4a = this.cfg.extend(_0x916e4a);
                  var _0x5da84e = _0x916e4a.kdf.execute(_0x4a8be7, _0xc2b673.keySize, _0xc2b673.ivSize);
                  _0x916e4a.iv = _0x5da84e.iv;
                  var _0xc5233c = _0x5bc802.encrypt.call(this, _0xc2b673, _0x35b493, _0x5da84e.key, _0x916e4a);
                  _0xc5233c.mixIn(_0x5da84e);
                  return _0xc5233c;
                },
                decrypt: function(_0x2c4395, _0x49176b, _0x7995b, _0x3853bf) {
                  _0x3853bf = this.cfg.extend(_0x3853bf);
                  _0x49176b = this._parse(_0x49176b, _0x3853bf.format);
                  var _0x3eb0a7 = _0x3853bf.kdf.execute(_0x7995b, _0x2c4395.keySize, _0x2c4395.ivSize, _0x49176b.salt);
                  _0x3853bf.iv = _0x3eb0a7.iv;
                  var _0x5087af = _0x5bc802.decrypt.call(this, _0x2c4395, _0x49176b, _0x3eb0a7.key, _0x3853bf);
                  return _0x5087af;
                }
              });
            })();
          }
        });
      }
    });
    var _0x4f83d2 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(_0x282b6f, _0x371075) {
        "use strict";
        (function(_0x4629b5, _0x1637a9, _0x58668c) {
          if (typeof _0x282b6f === "object") {
            _0x371075.exports = _0x282b6f = _0x1637a9(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x1637a9);
          } else {
            _0x1637a9(_0x4629b5.CryptoJS);
          }
        })(_0x282b6f, function(_0x206742) {
          _0x206742.mode.CFB = (function() {
            var _0x48b1a2 = _0x206742.lib.BlockCipherMode.extend();
            _0x48b1a2.Encryptor = _0x48b1a2.extend({
              processBlock: function(_0x12233b, _0x2fe9dd) {
                var _0x178a7d = this._cipher;
                var _0x18dca8 = _0x178a7d.blockSize;
                _0x45e01d.call(this, _0x12233b, _0x2fe9dd, _0x18dca8, _0x178a7d);
                this._prevBlock = _0x12233b.slice(_0x2fe9dd, _0x2fe9dd + _0x18dca8);
              }
            });
            _0x48b1a2.Decryptor = _0x48b1a2.extend({
              processBlock: function(_0x4f1830, _0x92ea39) {
                var _0x2d88e3 = this._cipher;
                var _0x299809 = _0x2d88e3.blockSize;
                var _0x4274c1 = _0x4f1830.slice(_0x92ea39, _0x92ea39 + _0x299809);
                _0x45e01d.call(this, _0x4f1830, _0x92ea39, _0x299809, _0x2d88e3);
                this._prevBlock = _0x4274c1;
              }
            });
            function _0x45e01d(_0x2e8742, _0x33aaee, _0x35f08b, _0x2c9216) {
              var _0xf9d7ca = this._iv;
              if (_0xf9d7ca) {
                var _0x54cc6d = _0xf9d7ca.slice(0);
                this._iv = void 0;
              } else {
                var _0x54cc6d = this._prevBlock;
              }
              _0x2c9216.encryptBlock(_0x54cc6d, 0);
              for (var _0x3f8412 = 0; _0x3f8412 < _0x35f08b; _0x3f8412++) {
                _0x2e8742[_0x33aaee + _0x3f8412] ^= _0x54cc6d[_0x3f8412];
              }
            }
            return _0x48b1a2;
          })();
          return _0x206742.mode.CFB;
        });
      }
    });
    var _0x16d18e = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(_0x3cd62b, _0x2caf92) {
        "use strict";
        "use strict";
        (function(_0x207750, _0x552273, _0x136738) {
          if (typeof _0x3cd62b === "object") {
            _0x2caf92.exports = _0x3cd62b = _0x552273(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x552273);
          } else {
            _0x552273(_0x207750.CryptoJS);
          }
        })(_0x3cd62b, function(_0x9e8968) {
          _0x9e8968.mode.CTR = (function() {
            var _0x3029b1 = _0x9e8968.lib.BlockCipherMode.extend();
            var _0x33edab = _0x3029b1.Encryptor = _0x3029b1.extend({
              processBlock: function(_0x2488ee, _0x2ce905) {
                var _0x96b840 = this._cipher;
                var _0x34f03d = _0x96b840.blockSize;
                var _0x1a4884 = this._iv;
                var _0x491f9f = this._counter;
                if (_0x1a4884) {
                  _0x491f9f = this._counter = _0x1a4884.slice(0);
                  this._iv = void 0;
                }
                var _0x134bf5 = _0x491f9f.slice(0);
                _0x96b840.encryptBlock(_0x134bf5, 0);
                _0x491f9f[_0x34f03d - 1] = _0x491f9f[_0x34f03d - 1] + 1 | 0;
                for (var _0x2e1b18 = 0; _0x2e1b18 < _0x34f03d; _0x2e1b18++) {
                  _0x2488ee[_0x2ce905 + _0x2e1b18] ^= _0x134bf5[_0x2e1b18];
                }
              }
            });
            _0x3029b1.Decryptor = _0x33edab;
            return _0x3029b1;
          })();
          return _0x9e8968.mode.CTR;
        });
      }
    });
    var _0x4bcbba = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(_0x31fb0b, _0x583e89) {
        "use strict";
        (function(_0x1fb089, _0x555228, _0x1b1cbd) {
          if (typeof _0x31fb0b === "object") {
            _0x583e89.exports = _0x31fb0b = _0x555228(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x555228);
          } else {
            _0x555228(_0x1fb089.CryptoJS);
          }
        })(_0x31fb0b, function(_0x4395a9) {
          _0x4395a9.mode.CTRGladman = (function() {
            var _0x5c2ce7 = _0x4395a9.lib.BlockCipherMode.extend();
            function _0x507adc(_0x35e3d9) {
              if ((_0x35e3d9 >> 24 & 255) === 255) {
                var _0x2a5fab = _0x35e3d9 >> 16 & 255;
                var _0x1cf76c = _0x35e3d9 >> 8 & 255;
                var _0x29c7da = _0x35e3d9 & 255;
                if (_0x2a5fab === 255) {
                  _0x2a5fab = 0;
                  if (_0x1cf76c === 255) {
                    _0x1cf76c = 0;
                    if (_0x29c7da === 255) {
                      _0x29c7da = 0;
                    } else {
                      ++_0x29c7da;
                    }
                  } else {
                    ++_0x1cf76c;
                  }
                } else {
                  ++_0x2a5fab;
                }
                _0x35e3d9 = 0;
                _0x35e3d9 += _0x2a5fab << 16;
                _0x35e3d9 += _0x1cf76c << 8;
                _0x35e3d9 += _0x29c7da;
              } else {
                _0x35e3d9 += 16777216;
              }
              return _0x35e3d9;
            }
            function _0x17bb96(_0x525aa7) {
              if ((_0x525aa7[0] = _0x507adc(_0x525aa7[0])) === 0) {
                _0x525aa7[1] = _0x507adc(_0x525aa7[1]);
              }
              return _0x525aa7;
            }
            var _0x25706a = _0x5c2ce7.Encryptor = _0x5c2ce7.extend({
              processBlock: function(_0x374640, _0x297685) {
                var _0x258a75 = this._cipher;
                var _0x4d04f4 = _0x258a75.blockSize;
                var _0x3d21e9 = this._iv;
                var _0x5e4caa = this._counter;
                if (_0x3d21e9) {
                  _0x5e4caa = this._counter = _0x3d21e9.slice(0);
                  this._iv = void 0;
                }
                _0x17bb96(_0x5e4caa);
                var _0x17f341 = _0x5e4caa.slice(0);
                _0x258a75.encryptBlock(_0x17f341, 0);
                for (var _0x5defba = 0; _0x5defba < _0x4d04f4; _0x5defba++) {
                  _0x374640[_0x297685 + _0x5defba] ^= _0x17f341[_0x5defba];
                }
              }
            });
            _0x5c2ce7.Decryptor = _0x25706a;
            return _0x5c2ce7;
          })();
          return _0x4395a9.mode.CTRGladman;
        });
      }
    });
    var _0x596235 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(_0x4a42c0, _0x1ab71e) {
        "use strict";
        "use strict";
        (function(_0x51de72, _0x5e8cb2, _0x1f1252) {
          if (typeof _0x4a42c0 === "object") {
            _0x1ab71e.exports = _0x4a42c0 = _0x5e8cb2(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x5e8cb2);
          } else {
            _0x5e8cb2(_0x51de72.CryptoJS);
          }
        })(_0x4a42c0, function(_0x8b0c83) {
          _0x8b0c83.mode.OFB = (function() {
            var _0x136c3c = _0x8b0c83.lib.BlockCipherMode.extend();
            var _0x176a15 = _0x136c3c.Encryptor = _0x136c3c.extend({
              processBlock: function(_0x5118be, _0x41efde) {
                var _0x4886ac = this._cipher;
                var _0x2d658c = _0x4886ac.blockSize;
                var _0x2ad538 = this._iv;
                var _0x5767b0 = this._keystream;
                if (_0x2ad538) {
                  _0x5767b0 = this._keystream = _0x2ad538.slice(0);
                  this._iv = void 0;
                }
                _0x4886ac.encryptBlock(_0x5767b0, 0);
                for (var _0x9438fb = 0; _0x9438fb < _0x2d658c; _0x9438fb++) {
                  _0x5118be[_0x41efde + _0x9438fb] ^= _0x5767b0[_0x9438fb];
                }
              }
            });
            _0x136c3c.Decryptor = _0x176a15;
            return _0x136c3c;
          })();
          return _0x8b0c83.mode.OFB;
        });
      }
    });
    var _0x25d06e = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(_0x49cad3, _0x3ba778) {
        "use strict";
        "use strict";
        (function(_0x4cbafa, _0x5a208d, _0x1c3fcf) {
          if (typeof _0x49cad3 === "object") {
            _0x3ba778.exports = _0x49cad3 = _0x5a208d(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x5a208d);
          } else {
            _0x5a208d(_0x4cbafa.CryptoJS);
          }
        })(_0x49cad3, function(_0x12b29a) {
          _0x12b29a.mode.ECB = (function() {
            var _0x582b83 = _0x12b29a.lib.BlockCipherMode.extend();
            _0x582b83.Encryptor = _0x582b83.extend({
              processBlock: function(_0xc4b1c8, _0x22ee1b) {
                this._cipher.encryptBlock(_0xc4b1c8, _0x22ee1b);
              }
            });
            _0x582b83.Decryptor = _0x582b83.extend({
              processBlock: function(_0x446e6e, _0x17bfb3) {
                this._cipher.decryptBlock(_0x446e6e, _0x17bfb3);
              }
            });
            return _0x582b83;
          })();
          return _0x12b29a.mode.ECB;
        });
      }
    });
    var _0x113593 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(_0x316e8d, _0x867ec7) {
        "use strict";
        "use strict";
        (function(_0x5c81df, _0x284418, _0x2b467e) {
          if (typeof _0x316e8d === "object") {
            _0x867ec7.exports = _0x316e8d = _0x284418(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x284418);
          } else {
            _0x284418(_0x5c81df.CryptoJS);
          }
        })(_0x316e8d, function(_0x5556bf) {
          _0x5556bf.pad.AnsiX923 = {
            pad: function(_0x5ca5e5, _0x3b9066) {
              var _0x2a32e8 = _0x5ca5e5.sigBytes;
              var _0x4b5b6f = _0x3b9066 * 4;
              var _0x4208fe = _0x4b5b6f - _0x2a32e8 % _0x4b5b6f;
              var _0x358ad4 = _0x2a32e8 + _0x4208fe - 1;
              _0x5ca5e5.clamp();
              _0x5ca5e5.words[_0x358ad4 >>> 2] |= _0x4208fe << 24 - _0x358ad4 % 4 * 8;
              _0x5ca5e5.sigBytes += _0x4208fe;
            },
            unpad: function(_0x5de35c) {
              var _0xf5d510 = _0x5de35c.words[_0x5de35c.sigBytes - 1 >>> 2] & 255;
              _0x5de35c.sigBytes -= _0xf5d510;
            }
          };
          return _0x5556bf.pad.Ansix923;
        });
      }
    });
    var _0x4c6729 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(_0x187fe1, _0x55eb71) {
        "use strict";
        "use strict";
        (function(_0x832468, _0x1c25e8, _0x11495c) {
          if (typeof _0x187fe1 === "object") {
            _0x55eb71.exports = _0x187fe1 = _0x1c25e8(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x1c25e8);
          } else {
            _0x1c25e8(_0x832468.CryptoJS);
          }
        })(_0x187fe1, function(_0x31fe21) {
          _0x31fe21.pad.Iso10126 = {
            pad: function(_0x3a99da, _0x57efcd) {
              var _0x16d126 = _0x57efcd * 4;
              var _0x565edc = _0x16d126 - _0x3a99da.sigBytes % _0x16d126;
              _0x3a99da.concat(_0x31fe21.lib.WordArray.random(_0x565edc - 1)).concat(_0x31fe21.lib.WordArray.create([_0x565edc << 24], 1));
            },
            unpad: function(_0x5b54fa) {
              var _0x2d2728 = _0x5b54fa.words[_0x5b54fa.sigBytes - 1 >>> 2] & 255;
              _0x5b54fa.sigBytes -= _0x2d2728;
            }
          };
          return _0x31fe21.pad.Iso10126;
        });
      }
    });
    var _0x3319b5 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(_0x1f3772, _0x182716) {
        "use strict";
        (function(_0x1128e3, _0x481868, _0x45a73f) {
          if (typeof _0x1f3772 === "object") {
            _0x182716.exports = _0x1f3772 = _0x481868(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x481868);
          } else {
            _0x481868(_0x1128e3.CryptoJS);
          }
        })(_0x1f3772, function(_0x25aa8a) {
          _0x25aa8a.pad.Iso97971 = {
            pad: function(_0x2ee07b, _0x358080) {
              _0x2ee07b.concat(_0x25aa8a.lib.WordArray.create([2147483648], 1));
              _0x25aa8a.pad.ZeroPadding.pad(_0x2ee07b, _0x358080);
            },
            unpad: function(_0x3fd292) {
              _0x25aa8a.pad.ZeroPadding.unpad(_0x3fd292);
              _0x3fd292.sigBytes--;
            }
          };
          return _0x25aa8a.pad.Iso97971;
        });
      }
    });
    var _0x305dec = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(_0x32921b, _0x234256) {
        "use strict";
        "use strict";
        (function(_0x545651, _0x4c4d5d, _0x3c0a14) {
          if (typeof _0x32921b === "object") {
            _0x234256.exports = _0x32921b = _0x4c4d5d(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x4c4d5d);
          } else {
            _0x4c4d5d(_0x545651.CryptoJS);
          }
        })(_0x32921b, function(_0x4f95dc) {
          _0x4f95dc.pad.ZeroPadding = {
            pad: function(_0x5be7ef, _0x5292a4) {
              var _0x265ec4 = _0x5292a4 * 4;
              _0x5be7ef.clamp();
              _0x5be7ef.sigBytes += _0x265ec4 - (_0x5be7ef.sigBytes % _0x265ec4 || _0x265ec4);
            },
            unpad: function(_0x59bb3e) {
              var _0x207fde = _0x59bb3e.words;
              var _0x20c988 = _0x59bb3e.sigBytes - 1;
              while (!(_0x207fde[_0x20c988 >>> 2] >>> 24 - _0x20c988 % 4 * 8 & 255)) {
                _0x20c988--;
              }
              _0x59bb3e.sigBytes = _0x20c988 + 1;
            }
          };
          return _0x4f95dc.pad.ZeroPadding;
        });
      }
    });
    var _0x11a100 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(_0xdb8743, _0x419990) {
        "use strict";
        "use strict";
        (function(_0x54ede6, _0x49b02f, _0x4f13de) {
          if (typeof _0xdb8743 === "object") {
            _0x419990.exports = _0xdb8743 = _0x49b02f(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x49b02f);
          } else {
            _0x49b02f(_0x54ede6.CryptoJS);
          }
        })(_0xdb8743, function(_0x237d14) {
          var _0x3b0c3a = {
            pad: function() {
            },
            unpad: function() {
            }
          };
          _0x237d14.pad.NoPadding = _0x3b0c3a;
          return _0x237d14.pad.NoPadding;
        });
      }
    });
    var _0x3d5acc = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(_0x595022, _0x11c57a) {
        "use strict";
        (function(_0x1ce7a8, _0x109f7e, _0xbeae70) {
          if (typeof _0x595022 === "object") {
            _0x11c57a.exports = _0x595022 = _0x109f7e(_0x59010e(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], _0x109f7e);
          } else {
            _0x109f7e(_0x1ce7a8.CryptoJS);
          }
        })(_0x595022, function(_0x73a761) {
          (function(_0x24f20e) {
            var _0x2bda7e = _0x73a761;
            var _0x4f5569 = _0x2bda7e.lib;
            var _0xfb3c08 = _0x4f5569.CipherParams;
            var _0x195d4a = _0x2bda7e.enc;
            var _0x21d332 = _0x195d4a.Hex;
            var _0x343704 = _0x2bda7e.format;
            var _0xa73d11 = _0x343704.Hex = {
              stringify: function(_0x5ba71e) {
                return _0x5ba71e.ciphertext.toString(_0x21d332);
              },
              parse: function(_0x116949) {
                var _0x429875 = _0x21d332.parse(_0x116949);
                var _0x3d3405 = {
                  ciphertext: _0x429875
                };
                return _0xfb3c08.create(_0x3d3405);
              }
            };
          })();
          return _0x73a761.format.Hex;
        });
      }
    });
    var _0x25e92e = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(_0x1f4a3d, _0xf91b86) {
        "use strict";
        (function(_0x4b3e50, _0x18e244, _0x2a5bf0) {
          if (typeof _0x1f4a3d === "object") {
            _0xf91b86.exports = _0x1f4a3d = _0x18e244(_0x59010e(), _0x4f591b(), _0x5d1f96(), _0x16e388(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], _0x18e244);
          } else {
            _0x18e244(_0x4b3e50.CryptoJS);
          }
        })(_0x1f4a3d, function(_0x2da498) {
          (function() {
            var _0x369b89 = _0x2da498;
            var _0x421413 = _0x369b89.lib;
            var _0x4f3aa5 = _0x421413.BlockCipher;
            var _0x186263 = _0x369b89.algo;
            var _0x2c5fa6 = [];
            var _0x5883e7 = [];
            var _0x23125a = [];
            var _0x222a41 = [];
            var _0x236942 = [];
            var _0x2dc72c = [];
            var _0x5742dc = [];
            var _0x1f030d = [];
            var _0x26a707 = [];
            var _0x200703 = [];
            (function() {
              var _0x5c4eba = [];
              for (var _0x5c1ed2 = 0; _0x5c1ed2 < 256; _0x5c1ed2++) {
                if (_0x5c1ed2 < 128) {
                  _0x5c4eba[_0x5c1ed2] = _0x5c1ed2 << 1;
                } else {
                  _0x5c4eba[_0x5c1ed2] = _0x5c1ed2 << 1 ^ 283;
                }
              }
              var _0x37d8cc = 0;
              var _0x416123 = 0;
              for (var _0x5c1ed2 = 0; _0x5c1ed2 < 256; _0x5c1ed2++) {
                var _0x564330 = _0x416123 ^ _0x416123 << 1 ^ _0x416123 << 2 ^ _0x416123 << 3 ^ _0x416123 << 4;
                _0x564330 = _0x564330 >>> 8 ^ _0x564330 & 255 ^ 99;
                _0x2c5fa6[_0x37d8cc] = _0x564330;
                _0x5883e7[_0x564330] = _0x37d8cc;
                var _0x245653 = _0x5c4eba[_0x37d8cc];
                var _0x26933e = _0x5c4eba[_0x245653];
                var _0x3d94d2 = _0x5c4eba[_0x26933e];
                var _0x57a40c = _0x5c4eba[_0x564330] * 257 ^ _0x564330 * 16843008;
                _0x23125a[_0x37d8cc] = _0x57a40c << 24 | _0x57a40c >>> 8;
                _0x222a41[_0x37d8cc] = _0x57a40c << 16 | _0x57a40c >>> 16;
                _0x236942[_0x37d8cc] = _0x57a40c << 8 | _0x57a40c >>> 24;
                _0x2dc72c[_0x37d8cc] = _0x57a40c;
                var _0x57a40c = _0x3d94d2 * 16843009 ^ _0x26933e * 65537 ^ _0x245653 * 257 ^ _0x37d8cc * 16843008;
                _0x5742dc[_0x564330] = _0x57a40c << 24 | _0x57a40c >>> 8;
                _0x1f030d[_0x564330] = _0x57a40c << 16 | _0x57a40c >>> 16;
                _0x26a707[_0x564330] = _0x57a40c << 8 | _0x57a40c >>> 24;
                _0x200703[_0x564330] = _0x57a40c;
                if (!_0x37d8cc) {
                  _0x37d8cc = _0x416123 = 1;
                } else {
                  _0x37d8cc = _0x245653 ^ _0x5c4eba[_0x5c4eba[_0x5c4eba[_0x3d94d2 ^ _0x245653]]];
                  _0x416123 ^= _0x5c4eba[_0x5c4eba[_0x416123]];
                }
              }
            })();
            var _0x4010dd = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            var _0x96b416 = _0x186263.AES = _0x4f3aa5.extend({
              _doReset: function() {
                if (this._nRounds && this._keyPriorReset === this._key) {
                  return;
                }
                var _0x1874ad = this._keyPriorReset = this._key;
                var _0x5c4048 = _0x1874ad.words;
                var _0x1c394e = _0x1874ad.sigBytes / 4;
                var _0x5785cf = this._nRounds = _0x1c394e + 6;
                var _0x36d3b0 = (_0x5785cf + 1) * 4;
                var _0x4f3d60 = this._keySchedule = [];
                for (var _0x215e11 = 0; _0x215e11 < _0x36d3b0; _0x215e11++) {
                  if (_0x215e11 < _0x1c394e) {
                    _0x4f3d60[_0x215e11] = _0x5c4048[_0x215e11];
                  } else {
                    var _0x26b0e7 = _0x4f3d60[_0x215e11 - 1];
                    if (!(_0x215e11 % _0x1c394e)) {
                      _0x26b0e7 = _0x26b0e7 << 8 | _0x26b0e7 >>> 24;
                      _0x26b0e7 = _0x2c5fa6[_0x26b0e7 >>> 24] << 24 | _0x2c5fa6[_0x26b0e7 >>> 16 & 255] << 16 | _0x2c5fa6[_0x26b0e7 >>> 8 & 255] << 8 | _0x2c5fa6[_0x26b0e7 & 255];
                      _0x26b0e7 ^= _0x4010dd[_0x215e11 / _0x1c394e | 0] << 24;
                    } else if (_0x1c394e > 6 && _0x215e11 % _0x1c394e == 4) {
                      _0x26b0e7 = _0x2c5fa6[_0x26b0e7 >>> 24] << 24 | _0x2c5fa6[_0x26b0e7 >>> 16 & 255] << 16 | _0x2c5fa6[_0x26b0e7 >>> 8 & 255] << 8 | _0x2c5fa6[_0x26b0e7 & 255];
                    }
                    _0x4f3d60[_0x215e11] = _0x4f3d60[_0x215e11 - _0x1c394e] ^ _0x26b0e7;
                  }
                }
                var _0x3dd1e8 = this._invKeySchedule = [];
                for (var _0x207d3e = 0; _0x207d3e < _0x36d3b0; _0x207d3e++) {
                  var _0x215e11 = _0x36d3b0 - _0x207d3e;
                  if (_0x207d3e % 4) {
                    var _0x26b0e7 = _0x4f3d60[_0x215e11];
                  } else {
                    var _0x26b0e7 = _0x4f3d60[_0x215e11 - 4];
                  }
                  if (_0x207d3e < 4 || _0x215e11 <= 4) {
                    _0x3dd1e8[_0x207d3e] = _0x26b0e7;
                  } else {
                    _0x3dd1e8[_0x207d3e] = _0x5742dc[_0x2c5fa6[_0x26b0e7 >>> 24]] ^ _0x1f030d[_0x2c5fa6[_0x26b0e7 >>> 16 & 255]] ^ _0x26a707[_0x2c5fa6[_0x26b0e7 >>> 8 & 255]] ^ _0x200703[_0x2c5fa6[_0x26b0e7 & 255]];
                  }
                }
              },
              encryptBlock: function(_0x1f295a, _0x4d0cb4) {
                this._doCryptBlock(_0x1f295a, _0x4d0cb4, this._keySchedule, _0x23125a, _0x222a41, _0x236942, _0x2dc72c, _0x2c5fa6);
              },
              decryptBlock: function(_0x39668c, _0x308394) {
                var _0x264db8 = _0x39668c[_0x308394 + 1];
                _0x39668c[_0x308394 + 1] = _0x39668c[_0x308394 + 3];
                _0x39668c[_0x308394 + 3] = _0x264db8;
                this._doCryptBlock(_0x39668c, _0x308394, this._invKeySchedule, _0x5742dc, _0x1f030d, _0x26a707, _0x200703, _0x5883e7);
                var _0x264db8 = _0x39668c[_0x308394 + 1];
                _0x39668c[_0x308394 + 1] = _0x39668c[_0x308394 + 3];
                _0x39668c[_0x308394 + 3] = _0x264db8;
              },
              _doCryptBlock: function(_0x297363, _0x58f69d, _0x55b963, _0x8e3bb3, _0x242139, _0x4ba046, _0x2da03f, _0x48b5ab) {
                var _0x2e3ead = this._nRounds;
                var _0x1e3e9b = _0x297363[_0x58f69d] ^ _0x55b963[0];
                var _0x22904b = _0x297363[_0x58f69d + 1] ^ _0x55b963[1];
                var _0x286260 = _0x297363[_0x58f69d + 2] ^ _0x55b963[2];
                var _0x4776e1 = _0x297363[_0x58f69d + 3] ^ _0x55b963[3];
                var _0x53bc57 = 4;
                for (var _0x32fdd2 = 1; _0x32fdd2 < _0x2e3ead; _0x32fdd2++) {
                  var _0x48fc13 = _0x8e3bb3[_0x1e3e9b >>> 24] ^ _0x242139[_0x22904b >>> 16 & 255] ^ _0x4ba046[_0x286260 >>> 8 & 255] ^ _0x2da03f[_0x4776e1 & 255] ^ _0x55b963[_0x53bc57++];
                  var _0x27c4ea = _0x8e3bb3[_0x22904b >>> 24] ^ _0x242139[_0x286260 >>> 16 & 255] ^ _0x4ba046[_0x4776e1 >>> 8 & 255] ^ _0x2da03f[_0x1e3e9b & 255] ^ _0x55b963[_0x53bc57++];
                  var _0x1f8a79 = _0x8e3bb3[_0x286260 >>> 24] ^ _0x242139[_0x4776e1 >>> 16 & 255] ^ _0x4ba046[_0x1e3e9b >>> 8 & 255] ^ _0x2da03f[_0x22904b & 255] ^ _0x55b963[_0x53bc57++];
                  var _0x3469c3 = _0x8e3bb3[_0x4776e1 >>> 24] ^ _0x242139[_0x1e3e9b >>> 16 & 255] ^ _0x4ba046[_0x22904b >>> 8 & 255] ^ _0x2da03f[_0x286260 & 255] ^ _0x55b963[_0x53bc57++];
                  _0x1e3e9b = _0x48fc13;
                  _0x22904b = _0x27c4ea;
                  _0x286260 = _0x1f8a79;
                  _0x4776e1 = _0x3469c3;
                }
                var _0x48fc13 = (_0x48b5ab[_0x1e3e9b >>> 24] << 24 | _0x48b5ab[_0x22904b >>> 16 & 255] << 16 | _0x48b5ab[_0x286260 >>> 8 & 255] << 8 | _0x48b5ab[_0x4776e1 & 255]) ^ _0x55b963[_0x53bc57++];
                var _0x27c4ea = (_0x48b5ab[_0x22904b >>> 24] << 24 | _0x48b5ab[_0x286260 >>> 16 & 255] << 16 | _0x48b5ab[_0x4776e1 >>> 8 & 255] << 8 | _0x48b5ab[_0x1e3e9b & 255]) ^ _0x55b963[_0x53bc57++];
                var _0x1f8a79 = (_0x48b5ab[_0x286260 >>> 24] << 24 | _0x48b5ab[_0x4776e1 >>> 16 & 255] << 16 | _0x48b5ab[_0x1e3e9b >>> 8 & 255] << 8 | _0x48b5ab[_0x22904b & 255]) ^ _0x55b963[_0x53bc57++];
                var _0x3469c3 = (_0x48b5ab[_0x4776e1 >>> 24] << 24 | _0x48b5ab[_0x1e3e9b >>> 16 & 255] << 16 | _0x48b5ab[_0x22904b >>> 8 & 255] << 8 | _0x48b5ab[_0x286260 & 255]) ^ _0x55b963[_0x53bc57++];
                _0x297363[_0x58f69d] = _0x48fc13;
                _0x297363[_0x58f69d + 1] = _0x27c4ea;
                _0x297363[_0x58f69d + 2] = _0x1f8a79;
                _0x297363[_0x58f69d + 3] = _0x3469c3;
              },
              keySize: 8
            });
            _0x369b89.AES = _0x4f3aa5._createHelper(_0x96b416);
          })();
          return _0x2da498.AES;
        });
      }
    });
    var _0x145561 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(_0x5ada32, _0xc4372b) {
        "use strict";
        (function(_0xe11c64, _0x30a25c, _0x59829f) {
          if (typeof _0x5ada32 === "object") {
            _0xc4372b.exports = _0x5ada32 = _0x30a25c(_0x59010e(), _0x4f591b(), _0x5d1f96(), _0x16e388(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], _0x30a25c);
          } else {
            _0x30a25c(_0xe11c64.CryptoJS);
          }
        })(_0x5ada32, function(_0x45801e) {
          (function() {
            var _0xb94a5d = _0x45801e;
            var _0x44dfab = _0xb94a5d.lib;
            var _0x5aef52 = _0x44dfab.WordArray;
            var _0x18c817 = _0x44dfab.BlockCipher;
            var _0x21ad1a = _0xb94a5d.algo;
            var _0x25ff65 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
            var _0x5cc80f = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
            var _0x13ec14 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
            var _0xb3b2f8 = [{
              "0": 8421888,
              "268435456": 32768,
              "536870912": 8421378,
              "805306368": 2,
              "1073741824": 512,
              "1342177280": 8421890,
              "1610612736": 8389122,
              "1879048192": 8388608,
              "2147483648": 514,
              "2415919104": 8389120,
              "2684354560": 33280,
              "2952790016": 8421376,
              "3221225472": 32770,
              "3489660928": 8388610,
              "3758096384": 0,
              "4026531840": 33282,
              "134217728": 0,
              "402653184": 8421890,
              "671088640": 33282,
              "939524096": 32768,
              "1207959552": 8421888,
              "1476395008": 512,
              "1744830464": 8421378,
              "2013265920": 2,
              "2281701376": 8389120,
              "2550136832": 33280,
              "2818572288": 8421376,
              "3087007744": 8389122,
              "3355443200": 8388610,
              "3623878656": 32770,
              "3892314112": 514,
              "4160749568": 8388608,
              "1": 32768,
              "268435457": 2,
              "536870913": 8421888,
              "805306369": 8388608,
              "1073741825": 8421378,
              "1342177281": 33280,
              "1610612737": 512,
              "1879048193": 8389122,
              "2147483649": 8421890,
              "2415919105": 8421376,
              "2684354561": 8388610,
              "2952790017": 33282,
              "3221225473": 514,
              "3489660929": 8389120,
              "3758096385": 32770,
              "4026531841": 0,
              "134217729": 8421890,
              "402653185": 8421376,
              "671088641": 8388608,
              "939524097": 512,
              "1207959553": 32768,
              "1476395009": 8388610,
              "1744830465": 2,
              "2013265921": 33282,
              "2281701377": 32770,
              "2550136833": 8389122,
              "2818572289": 514,
              "3087007745": 8421888,
              "3355443201": 8389120,
              "3623878657": 0,
              "3892314113": 33280,
              "4160749569": 8421378
            }, {
              "0": 1074282512,
              "16777216": 16384,
              "33554432": 524288,
              "50331648": 1074266128,
              "67108864": 1073741840,
              "83886080": 1074282496,
              "100663296": 1073758208,
              "117440512": 16,
              "134217728": 540672,
              "150994944": 1073758224,
              "167772160": 1073741824,
              "184549376": 540688,
              "201326592": 524304,
              "218103808": 0,
              "234881024": 16400,
              "251658240": 1074266112,
              "8388608": 1073758208,
              "25165824": 540688,
              "41943040": 16,
              "58720256": 1073758224,
              "75497472": 1074282512,
              "92274688": 1073741824,
              "109051904": 524288,
              "125829120": 1074266128,
              "142606336": 524304,
              "159383552": 0,
              "176160768": 16384,
              "192937984": 1074266112,
              "209715200": 1073741840,
              "226492416": 540672,
              "243269632": 1074282496,
              "260046848": 16400,
              "268435456": 0,
              "285212672": 1074266128,
              "301989888": 1073758224,
              "318767104": 1074282496,
              "335544320": 1074266112,
              "352321536": 16,
              "369098752": 540688,
              "385875968": 16384,
              "402653184": 16400,
              "419430400": 524288,
              "436207616": 524304,
              "452984832": 1073741840,
              "469762048": 540672,
              "486539264": 1073758208,
              "503316480": 1073741824,
              "520093696": 1074282512,
              "276824064": 540688,
              "293601280": 524288,
              "310378496": 1074266112,
              "327155712": 16384,
              "343932928": 1073758208,
              "360710144": 1074282512,
              "377487360": 16,
              "394264576": 1073741824,
              "411041792": 1074282496,
              "427819008": 1073741840,
              "444596224": 1073758224,
              "461373440": 524304,
              "478150656": 0,
              "494927872": 16400,
              "511705088": 1074266128,
              "528482304": 540672
            }, {
              "0": 260,
              "1048576": 0,
              "2097152": 67109120,
              "3145728": 65796,
              "4194304": 65540,
              "5242880": 67108868,
              "6291456": 67174660,
              "7340032": 67174400,
              "8388608": 67108864,
              "9437184": 67174656,
              "10485760": 65792,
              "11534336": 67174404,
              "12582912": 67109124,
              "13631488": 65536,
              "14680064": 4,
              "15728640": 256,
              "524288": 67174656,
              "1572864": 67174404,
              "2621440": 0,
              "3670016": 67109120,
              "4718592": 67108868,
              "5767168": 65536,
              "6815744": 65540,
              "7864320": 260,
              "8912896": 4,
              "9961472": 256,
              "11010048": 67174400,
              "12058624": 65796,
              "13107200": 65792,
              "14155776": 67109124,
              "15204352": 67174660,
              "16252928": 67108864,
              "16777216": 67174656,
              "17825792": 65540,
              "18874368": 65536,
              "19922944": 67109120,
              "20971520": 256,
              "22020096": 67174660,
              "23068672": 67108868,
              "24117248": 0,
              "25165824": 67109124,
              "26214400": 67108864,
              "27262976": 4,
              "28311552": 65792,
              "29360128": 67174400,
              "30408704": 260,
              "31457280": 65796,
              "32505856": 67174404,
              "17301504": 67108864,
              "18350080": 260,
              "19398656": 67174656,
              "20447232": 0,
              "21495808": 65540,
              "22544384": 67109120,
              "23592960": 256,
              "24641536": 67174404,
              "25690112": 65536,
              "26738688": 67174660,
              "27787264": 65796,
              "28835840": 67108868,
              "29884416": 67109124,
              "30932992": 67174400,
              "31981568": 4,
              "33030144": 65792
            }, {
              "0": 2151682048,
              "65536": 2147487808,
              "131072": 4198464,
              "196608": 2151677952,
              "262144": 0,
              "327680": 4198400,
              "393216": 2147483712,
              "458752": 4194368,
              "524288": 2147483648,
              "589824": 4194304,
              "655360": 64,
              "720896": 2147487744,
              "786432": 2151678016,
              "851968": 4160,
              "917504": 4096,
              "983040": 2151682112,
              "32768": 2147487808,
              "98304": 64,
              "163840": 2151678016,
              "229376": 2147487744,
              "294912": 4198400,
              "360448": 2151682112,
              "425984": 0,
              "491520": 2151677952,
              "557056": 4096,
              "622592": 2151682048,
              "688128": 4194304,
              "753664": 4160,
              "819200": 2147483648,
              "884736": 4194368,
              "950272": 4198464,
              "1015808": 2147483712,
              "1048576": 4194368,
              "1114112": 4198400,
              "1179648": 2147483712,
              "1245184": 0,
              "1310720": 4160,
              "1376256": 2151678016,
              "1441792": 2151682048,
              "1507328": 2147487808,
              "1572864": 2151682112,
              "1638400": 2147483648,
              "1703936": 2151677952,
              "1769472": 4198464,
              "1835008": 2147487744,
              "1900544": 4194304,
              "1966080": 64,
              "2031616": 4096,
              "1081344": 2151677952,
              "1146880": 2151682112,
              "1212416": 0,
              "1277952": 4198400,
              "1343488": 4194368,
              "1409024": 2147483648,
              "1474560": 2147487808,
              "1540096": 64,
              "1605632": 2147483712,
              "1671168": 4096,
              "1736704": 2147487744,
              "1802240": 2151678016,
              "1867776": 4160,
              "1933312": 2151682048,
              "1998848": 4194304,
              "2064384": 4198464
            }, {
              "0": 128,
              "4096": 17039360,
              "8192": 262144,
              "12288": 536870912,
              "16384": 537133184,
              "20480": 16777344,
              "24576": 553648256,
              "28672": 262272,
              "32768": 16777216,
              "36864": 537133056,
              "40960": 536871040,
              "45056": 553910400,
              "49152": 553910272,
              "53248": 0,
              "57344": 17039488,
              "61440": 553648128,
              "2048": 17039488,
              "6144": 553648256,
              "10240": 128,
              "14336": 17039360,
              "18432": 262144,
              "22528": 537133184,
              "26624": 553910272,
              "30720": 536870912,
              "34816": 537133056,
              "38912": 0,
              "43008": 553910400,
              "47104": 16777344,
              "51200": 536871040,
              "55296": 553648128,
              "59392": 16777216,
              "63488": 262272,
              "65536": 262144,
              "69632": 128,
              "73728": 536870912,
              "77824": 553648256,
              "81920": 16777344,
              "86016": 553910272,
              "90112": 537133184,
              "94208": 16777216,
              "98304": 553910400,
              "102400": 553648128,
              "106496": 17039360,
              "110592": 537133056,
              "114688": 262272,
              "118784": 536871040,
              "122880": 0,
              "126976": 17039488,
              "67584": 553648256,
              "71680": 16777216,
              "75776": 17039360,
              "79872": 537133184,
              "83968": 536870912,
              "88064": 17039488,
              "92160": 128,
              "96256": 553910272,
              "100352": 262272,
              "104448": 553910400,
              "108544": 0,
              "112640": 553648128,
              "116736": 16777344,
              "120832": 262144,
              "124928": 537133056,
              "129024": 536871040
            }, {
              "0": 268435464,
              "256": 8192,
              "512": 270532608,
              "768": 270540808,
              "1024": 268443648,
              "1280": 2097152,
              "1536": 2097160,
              "1792": 268435456,
              "2048": 0,
              "2304": 268443656,
              "2560": 2105344,
              "2816": 8,
              "3072": 270532616,
              "3328": 2105352,
              "3584": 8200,
              "3840": 270540800,
              "128": 270532608,
              "384": 270540808,
              "640": 8,
              "896": 2097152,
              "1152": 2105352,
              "1408": 268435464,
              "1664": 268443648,
              "1920": 8200,
              "2176": 2097160,
              "2432": 8192,
              "2688": 268443656,
              "2944": 270532616,
              "3200": 0,
              "3456": 270540800,
              "3712": 2105344,
              "3968": 268435456,
              "4096": 268443648,
              "4352": 270532616,
              "4608": 270540808,
              "4864": 8200,
              "5120": 2097152,
              "5376": 268435456,
              "5632": 268435464,
              "5888": 2105344,
              "6144": 2105352,
              "6400": 0,
              "6656": 8,
              "6912": 270532608,
              "7168": 8192,
              "7424": 268443656,
              "7680": 270540800,
              "7936": 2097160,
              "4224": 8,
              "4480": 2105344,
              "4736": 2097152,
              "4992": 268435464,
              "5248": 268443648,
              "5504": 8200,
              "5760": 270540808,
              "6016": 270532608,
              "6272": 270540800,
              "6528": 270532616,
              "6784": 8192,
              "7040": 2105352,
              "7296": 2097160,
              "7552": 0,
              "7808": 268435456,
              "8064": 268443656
            }, {
              "0": 1048576,
              "16": 33555457,
              "32": 1024,
              "48": 1049601,
              "64": 34604033,
              "80": 0,
              "96": 1,
              "112": 34603009,
              "128": 33555456,
              "144": 1048577,
              "160": 33554433,
              "176": 34604032,
              "192": 34603008,
              "208": 1025,
              "224": 1049600,
              "240": 33554432,
              "8": 34603009,
              "24": 0,
              "40": 33555457,
              "56": 34604032,
              "72": 1048576,
              "88": 33554433,
              "104": 33554432,
              "120": 1025,
              "136": 1049601,
              "152": 33555456,
              "168": 34603008,
              "184": 1048577,
              "200": 1024,
              "216": 34604033,
              "232": 1,
              "248": 1049600,
              "256": 33554432,
              "272": 1048576,
              "288": 33555457,
              "304": 34603009,
              "320": 1048577,
              "336": 33555456,
              "352": 34604032,
              "368": 1049601,
              "384": 1025,
              "400": 34604033,
              "416": 1049600,
              "432": 1,
              "448": 0,
              "464": 34603008,
              "480": 33554433,
              "496": 1024,
              "264": 1049600,
              "280": 33555457,
              "296": 34603009,
              "312": 1,
              "328": 33554432,
              "344": 1048576,
              "360": 1025,
              "376": 34604032,
              "392": 33554433,
              "408": 34603008,
              "424": 0,
              "440": 34604033,
              "456": 1049601,
              "472": 1024,
              "488": 33555456,
              "504": 1048577
            }, {
              "0": 134219808,
              "1": 131072,
              "2": 134217728,
              "3": 32,
              "4": 131104,
              "5": 134350880,
              "6": 134350848,
              "7": 2048,
              "8": 134348800,
              "9": 134219776,
              "10": 133120,
              "11": 134348832,
              "12": 2080,
              "13": 0,
              "14": 134217760,
              "15": 133152,
              "2147483648": 2048,
              "2147483649": 134350880,
              "2147483650": 134219808,
              "2147483651": 134217728,
              "2147483652": 134348800,
              "2147483653": 133120,
              "2147483654": 133152,
              "2147483655": 32,
              "2147483656": 134217760,
              "2147483657": 2080,
              "2147483658": 131104,
              "2147483659": 134350848,
              "2147483660": 0,
              "2147483661": 134348832,
              "2147483662": 134219776,
              "2147483663": 131072,
              "16": 133152,
              "17": 134350848,
              "18": 32,
              "19": 2048,
              "20": 134219776,
              "21": 134217760,
              "22": 134348832,
              "23": 131072,
              "24": 0,
              "25": 131104,
              "26": 134348800,
              "27": 134219808,
              "28": 134350880,
              "29": 133120,
              "30": 2080,
              "31": 134217728,
              "2147483664": 131072,
              "2147483665": 2048,
              "2147483666": 134348832,
              "2147483667": 133152,
              "2147483668": 32,
              "2147483669": 134348800,
              "2147483670": 134217728,
              "2147483671": 134219808,
              "2147483672": 134350880,
              "2147483673": 134217760,
              "2147483674": 134219776,
              "2147483675": 0,
              "2147483676": 133120,
              "2147483677": 2080,
              "2147483678": 131104,
              "2147483679": 134350848
            }];
            var _0xd237b5 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
            var _0x174ccb = _0x21ad1a.DES = _0x18c817.extend({
              _doReset: function() {
                var _0xd95963 = this._key;
                var _0x2d593f = _0xd95963.words;
                var _0x172de5 = [];
                for (var _0x23b5bb = 0; _0x23b5bb < 56; _0x23b5bb++) {
                  var _0x9b437d = _0x25ff65[_0x23b5bb] - 1;
                  _0x172de5[_0x23b5bb] = _0x2d593f[_0x9b437d >>> 5] >>> 31 - _0x9b437d % 32 & 1;
                }
                var _0x4662f6 = this._subKeys = [];
                for (var _0x462d5e = 0; _0x462d5e < 16; _0x462d5e++) {
                  var _0x40ac7b = _0x4662f6[_0x462d5e] = [];
                  var _0x27f753 = _0x13ec14[_0x462d5e];
                  for (var _0x23b5bb = 0; _0x23b5bb < 24; _0x23b5bb++) {
                    _0x40ac7b[_0x23b5bb / 6 | 0] |= _0x172de5[(_0x5cc80f[_0x23b5bb] - 1 + _0x27f753) % 28] << 31 - _0x23b5bb % 6;
                    _0x40ac7b[4 + (_0x23b5bb / 6 | 0)] |= _0x172de5[28 + (_0x5cc80f[_0x23b5bb + 24] - 1 + _0x27f753) % 28] << 31 - _0x23b5bb % 6;
                  }
                  _0x40ac7b[0] = _0x40ac7b[0] << 1 | _0x40ac7b[0] >>> 31;
                  for (var _0x23b5bb = 1; _0x23b5bb < 7; _0x23b5bb++) {
                    _0x40ac7b[_0x23b5bb] = _0x40ac7b[_0x23b5bb] >>> (_0x23b5bb - 1) * 4 + 3;
                  }
                  _0x40ac7b[7] = _0x40ac7b[7] << 5 | _0x40ac7b[7] >>> 27;
                }
                var _0x2c50ee = this._invSubKeys = [];
                for (var _0x23b5bb = 0; _0x23b5bb < 16; _0x23b5bb++) {
                  _0x2c50ee[_0x23b5bb] = _0x4662f6[15 - _0x23b5bb];
                }
              },
              encryptBlock: function(_0xf12f61, _0x1eb2ac) {
                this._doCryptBlock(_0xf12f61, _0x1eb2ac, this._subKeys);
              },
              decryptBlock: function(_0x582a79, _0x42eaf6) {
                this._doCryptBlock(_0x582a79, _0x42eaf6, this._invSubKeys);
              },
              _doCryptBlock: function(_0x854210, _0x1ea598, _0x768532) {
                this._lBlock = _0x854210[_0x1ea598];
                this._rBlock = _0x854210[_0x1ea598 + 1];
                _0x3f7b4b.call(this, 4, 252645135);
                _0x3f7b4b.call(this, 16, 65535);
                _0x17168f.call(this, 2, 858993459);
                _0x17168f.call(this, 8, 16711935);
                _0x3f7b4b.call(this, 1, 1431655765);
                for (var _0x5a2cca = 0; _0x5a2cca < 16; _0x5a2cca++) {
                  var _0x239cd3 = _0x768532[_0x5a2cca];
                  var _0x5aadb8 = this._lBlock;
                  var _0x44c823 = this._rBlock;
                  var _0x3f7446 = 0;
                  for (var _0x3cdd7e = 0; _0x3cdd7e < 8; _0x3cdd7e++) {
                    _0x3f7446 |= _0xb3b2f8[_0x3cdd7e][((_0x44c823 ^ _0x239cd3[_0x3cdd7e]) & _0xd237b5[_0x3cdd7e]) >>> 0];
                  }
                  this._lBlock = _0x44c823;
                  this._rBlock = _0x5aadb8 ^ _0x3f7446;
                }
                var _0x7a578c = this._lBlock;
                this._lBlock = this._rBlock;
                this._rBlock = _0x7a578c;
                _0x3f7b4b.call(this, 1, 1431655765);
                _0x17168f.call(this, 8, 16711935);
                _0x17168f.call(this, 2, 858993459);
                _0x3f7b4b.call(this, 16, 65535);
                _0x3f7b4b.call(this, 4, 252645135);
                _0x854210[_0x1ea598] = this._lBlock;
                _0x854210[_0x1ea598 + 1] = this._rBlock;
              },
              keySize: 2,
              ivSize: 2,
              blockSize: 2
            });
            function _0x3f7b4b(_0x18a37e, _0x1311db) {
              var _0x53753a = (this._lBlock >>> _0x18a37e ^ this._rBlock) & _0x1311db;
              this._rBlock ^= _0x53753a;
              this._lBlock ^= _0x53753a << _0x18a37e;
            }
            function _0x17168f(_0x3362b2, _0x41d780) {
              var _0x4e789b = (this._rBlock >>> _0x3362b2 ^ this._lBlock) & _0x41d780;
              this._lBlock ^= _0x4e789b;
              this._rBlock ^= _0x4e789b << _0x3362b2;
            }
            _0xb94a5d.DES = _0x18c817._createHelper(_0x174ccb);
            var _0x39d5ad = _0x21ad1a.TripleDES = _0x18c817.extend({
              _doReset: function() {
                var _0x132e20 = this._key;
                var _0x44fd56 = _0x132e20.words;
                this._des1 = _0x174ccb.createEncryptor(_0x5aef52.create(_0x44fd56.slice(0, 2)));
                this._des2 = _0x174ccb.createEncryptor(_0x5aef52.create(_0x44fd56.slice(2, 4)));
                this._des3 = _0x174ccb.createEncryptor(_0x5aef52.create(_0x44fd56.slice(4, 6)));
              },
              encryptBlock: function(_0x3dc85a, _0x452d3f) {
                this._des1.encryptBlock(_0x3dc85a, _0x452d3f);
                this._des2.decryptBlock(_0x3dc85a, _0x452d3f);
                this._des3.encryptBlock(_0x3dc85a, _0x452d3f);
              },
              decryptBlock: function(_0xed9e34, _0x32f25f) {
                this._des3.decryptBlock(_0xed9e34, _0x32f25f);
                this._des2.encryptBlock(_0xed9e34, _0x32f25f);
                this._des1.decryptBlock(_0xed9e34, _0x32f25f);
              },
              keySize: 6,
              ivSize: 2,
              blockSize: 2
            });
            _0xb94a5d.TripleDES = _0x18c817._createHelper(_0x39d5ad);
          })();
          return _0x45801e.TripleDES;
        });
      }
    });
    var _0x3d148e = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(_0x103014, _0x37bbf4) {
        "use strict";
        (function(_0x5943d8, _0x2c4c1c, _0x230ff9) {
          if (typeof _0x103014 === "object") {
            _0x37bbf4.exports = _0x103014 = _0x2c4c1c(_0x59010e(), _0x4f591b(), _0x5d1f96(), _0x16e388(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], _0x2c4c1c);
          } else {
            _0x2c4c1c(_0x5943d8.CryptoJS);
          }
        })(_0x103014, function(_0x464bc0) {
          (function() {
            var _0x59e4bf = _0x464bc0;
            var _0x133aec = _0x59e4bf.lib;
            var _0x28be85 = _0x133aec.StreamCipher;
            var _0x278248 = _0x59e4bf.algo;
            var _0x247106 = _0x278248.RC4 = _0x28be85.extend({
              _doReset: function() {
                var _0x1acce7 = this._key;
                var _0x3f531a = _0x1acce7.words;
                var _0x2839d7 = _0x1acce7.sigBytes;
                var _0x4fe9e1 = this._S = [];
                for (var _0x377856 = 0; _0x377856 < 256; _0x377856++) {
                  _0x4fe9e1[_0x377856] = _0x377856;
                }
                for (var _0x377856 = 0, _0x325f12 = 0; _0x377856 < 256; _0x377856++) {
                  var _0xca223d = _0x377856 % _0x2839d7;
                  var _0x5f251c = _0x3f531a[_0xca223d >>> 2] >>> 24 - _0xca223d % 4 * 8 & 255;
                  _0x325f12 = (_0x325f12 + _0x4fe9e1[_0x377856] + _0x5f251c) % 256;
                  var _0x2da79a = _0x4fe9e1[_0x377856];
                  _0x4fe9e1[_0x377856] = _0x4fe9e1[_0x325f12];
                  _0x4fe9e1[_0x325f12] = _0x2da79a;
                }
                this._i = this._j = 0;
              },
              _doProcessBlock: function(_0xc60de4, _0x3ca371) {
                _0xc60de4[_0x3ca371] ^= _0xef5c7f.call(this);
              },
              keySize: 8,
              ivSize: 0
            });
            function _0xef5c7f() {
              var _0x173085 = this._S;
              var _0x54903d = this._i;
              var _0x59d8b2 = this._j;
              var _0x5a7c6f = 0;
              for (var _0x106f3f = 0; _0x106f3f < 4; _0x106f3f++) {
                _0x54903d = (_0x54903d + 1) % 256;
                _0x59d8b2 = (_0x59d8b2 + _0x173085[_0x54903d]) % 256;
                var _0x1d4fa7 = _0x173085[_0x54903d];
                _0x173085[_0x54903d] = _0x173085[_0x59d8b2];
                _0x173085[_0x59d8b2] = _0x1d4fa7;
                _0x5a7c6f |= _0x173085[(_0x173085[_0x54903d] + _0x173085[_0x59d8b2]) % 256] << 24 - _0x106f3f * 8;
              }
              this._i = _0x54903d;
              this._j = _0x59d8b2;
              return _0x5a7c6f;
            }
            _0x59e4bf.RC4 = _0x28be85._createHelper(_0x247106);
            var _0x45efcd = _0x278248.RC4Drop = _0x247106.extend({
              cfg: _0x247106.cfg.extend({
                drop: 192
              }),
              _doReset: function() {
                _0x247106._doReset.call(this);
                for (var _0x495cf1 = this.cfg.drop; _0x495cf1 > 0; _0x495cf1--) {
                  _0xef5c7f.call(this);
                }
              }
            });
            _0x59e4bf.RC4Drop = _0x28be85._createHelper(_0x45efcd);
          })();
          return _0x464bc0.RC4;
        });
      }
    });
    var _0x1599ac = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(_0x5e6df2, _0x1a5e27) {
        "use strict";
        (function(_0x2c8303, _0x284d78, _0x5eeea6) {
          if (typeof _0x5e6df2 === "object") {
            _0x1a5e27.exports = _0x5e6df2 = _0x284d78(_0x59010e(), _0x4f591b(), _0x5d1f96(), _0x16e388(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], _0x284d78);
          } else {
            _0x284d78(_0x2c8303.CryptoJS);
          }
        })(_0x5e6df2, function(_0x52aa03) {
          (function() {
            var _0x1c48f4 = _0x52aa03;
            var _0x418800 = _0x1c48f4.lib;
            var _0x4d1910 = _0x418800.StreamCipher;
            var _0x2de44b = _0x1c48f4.algo;
            var _0x485ef1 = [];
            var _0x342f8e = [];
            var _0x39798f = [];
            var _0x1ba61d = _0x2de44b.Rabbit = _0x4d1910.extend({
              _doReset: function() {
                var _0xe34433 = this._key.words;
                var _0x2864a5 = this.cfg.iv;
                for (var _0x1cec54 = 0; _0x1cec54 < 4; _0x1cec54++) {
                  _0xe34433[_0x1cec54] = (_0xe34433[_0x1cec54] << 8 | _0xe34433[_0x1cec54] >>> 24) & 16711935 | (_0xe34433[_0x1cec54] << 24 | _0xe34433[_0x1cec54] >>> 8) & -16711936;
                }
                var _0x134661 = this._X = [_0xe34433[0], _0xe34433[3] << 16 | _0xe34433[2] >>> 16, _0xe34433[1], _0xe34433[0] << 16 | _0xe34433[3] >>> 16, _0xe34433[2], _0xe34433[1] << 16 | _0xe34433[0] >>> 16, _0xe34433[3], _0xe34433[2] << 16 | _0xe34433[1] >>> 16];
                var _0x5d5408 = this._C = [_0xe34433[2] << 16 | _0xe34433[2] >>> 16, _0xe34433[0] & -65536 | _0xe34433[1] & 65535, _0xe34433[3] << 16 | _0xe34433[3] >>> 16, _0xe34433[1] & -65536 | _0xe34433[2] & 65535, _0xe34433[0] << 16 | _0xe34433[0] >>> 16, _0xe34433[2] & -65536 | _0xe34433[3] & 65535, _0xe34433[1] << 16 | _0xe34433[1] >>> 16, _0xe34433[3] & -65536 | _0xe34433[0] & 65535];
                this._b = 0;
                for (var _0x1cec54 = 0; _0x1cec54 < 4; _0x1cec54++) {
                  _0x19b716.call(this);
                }
                for (var _0x1cec54 = 0; _0x1cec54 < 8; _0x1cec54++) {
                  _0x5d5408[_0x1cec54] ^= _0x134661[_0x1cec54 + 4 & 7];
                }
                if (_0x2864a5) {
                  var _0x5a34cf = _0x2864a5.words;
                  var _0x1d6e9b = _0x5a34cf[0];
                  var _0x47b41c = _0x5a34cf[1];
                  var _0x431fd5 = (_0x1d6e9b << 8 | _0x1d6e9b >>> 24) & 16711935 | (_0x1d6e9b << 24 | _0x1d6e9b >>> 8) & -16711936;
                  var _0x25921b = (_0x47b41c << 8 | _0x47b41c >>> 24) & 16711935 | (_0x47b41c << 24 | _0x47b41c >>> 8) & -16711936;
                  var _0x29edc5 = _0x431fd5 >>> 16 | _0x25921b & -65536;
                  var _0x939311 = _0x25921b << 16 | _0x431fd5 & 65535;
                  _0x5d5408[0] ^= _0x431fd5;
                  _0x5d5408[1] ^= _0x29edc5;
                  _0x5d5408[2] ^= _0x25921b;
                  _0x5d5408[3] ^= _0x939311;
                  _0x5d5408[4] ^= _0x431fd5;
                  _0x5d5408[5] ^= _0x29edc5;
                  _0x5d5408[6] ^= _0x25921b;
                  _0x5d5408[7] ^= _0x939311;
                  for (var _0x1cec54 = 0; _0x1cec54 < 4; _0x1cec54++) {
                    _0x19b716.call(this);
                  }
                }
              },
              _doProcessBlock: function(_0x5aa104, _0x34fdbb) {
                var _0x4cea61 = this._X;
                _0x19b716.call(this);
                _0x485ef1[0] = _0x4cea61[0] ^ _0x4cea61[5] >>> 16 ^ _0x4cea61[3] << 16;
                _0x485ef1[1] = _0x4cea61[2] ^ _0x4cea61[7] >>> 16 ^ _0x4cea61[5] << 16;
                _0x485ef1[2] = _0x4cea61[4] ^ _0x4cea61[1] >>> 16 ^ _0x4cea61[7] << 16;
                _0x485ef1[3] = _0x4cea61[6] ^ _0x4cea61[3] >>> 16 ^ _0x4cea61[1] << 16;
                for (var _0x6bf05d = 0; _0x6bf05d < 4; _0x6bf05d++) {
                  _0x485ef1[_0x6bf05d] = (_0x485ef1[_0x6bf05d] << 8 | _0x485ef1[_0x6bf05d] >>> 24) & 16711935 | (_0x485ef1[_0x6bf05d] << 24 | _0x485ef1[_0x6bf05d] >>> 8) & -16711936;
                  _0x5aa104[_0x34fdbb + _0x6bf05d] ^= _0x485ef1[_0x6bf05d];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function _0x19b716() {
              var _0xa66017 = this._X;
              var _0x476d57 = this._C;
              for (var _0x2dc032 = 0; _0x2dc032 < 8; _0x2dc032++) {
                _0x342f8e[_0x2dc032] = _0x476d57[_0x2dc032];
              }
              _0x476d57[0] = _0x476d57[0] + 1295307597 + this._b | 0;
              _0x476d57[1] = _0x476d57[1] + 3545052371 + (_0x476d57[0] >>> 0 < _0x342f8e[0] >>> 0 ? 1 : 0) | 0;
              _0x476d57[2] = _0x476d57[2] + 886263092 + (_0x476d57[1] >>> 0 < _0x342f8e[1] >>> 0 ? 1 : 0) | 0;
              _0x476d57[3] = _0x476d57[3] + 1295307597 + (_0x476d57[2] >>> 0 < _0x342f8e[2] >>> 0 ? 1 : 0) | 0;
              _0x476d57[4] = _0x476d57[4] + 3545052371 + (_0x476d57[3] >>> 0 < _0x342f8e[3] >>> 0 ? 1 : 0) | 0;
              _0x476d57[5] = _0x476d57[5] + 886263092 + (_0x476d57[4] >>> 0 < _0x342f8e[4] >>> 0 ? 1 : 0) | 0;
              _0x476d57[6] = _0x476d57[6] + 1295307597 + (_0x476d57[5] >>> 0 < _0x342f8e[5] >>> 0 ? 1 : 0) | 0;
              _0x476d57[7] = _0x476d57[7] + 3545052371 + (_0x476d57[6] >>> 0 < _0x342f8e[6] >>> 0 ? 1 : 0) | 0;
              this._b = _0x476d57[7] >>> 0 < _0x342f8e[7] >>> 0 ? 1 : 0;
              for (var _0x2dc032 = 0; _0x2dc032 < 8; _0x2dc032++) {
                var _0x16aaa8 = _0xa66017[_0x2dc032] + _0x476d57[_0x2dc032];
                var _0x5bb010 = _0x16aaa8 & 65535;
                var _0x2ea4d9 = _0x16aaa8 >>> 16;
                var _0x1753da = ((_0x5bb010 * _0x5bb010 >>> 17) + _0x5bb010 * _0x2ea4d9 >>> 15) + _0x2ea4d9 * _0x2ea4d9;
                var _0x51e6ef = ((_0x16aaa8 & -65536) * _0x16aaa8 | 0) + ((_0x16aaa8 & 65535) * _0x16aaa8 | 0);
                _0x39798f[_0x2dc032] = _0x1753da ^ _0x51e6ef;
              }
              _0xa66017[0] = _0x39798f[0] + (_0x39798f[7] << 16 | _0x39798f[7] >>> 16) + (_0x39798f[6] << 16 | _0x39798f[6] >>> 16) | 0;
              _0xa66017[1] = _0x39798f[1] + (_0x39798f[0] << 8 | _0x39798f[0] >>> 24) + _0x39798f[7] | 0;
              _0xa66017[2] = _0x39798f[2] + (_0x39798f[1] << 16 | _0x39798f[1] >>> 16) + (_0x39798f[0] << 16 | _0x39798f[0] >>> 16) | 0;
              _0xa66017[3] = _0x39798f[3] + (_0x39798f[2] << 8 | _0x39798f[2] >>> 24) + _0x39798f[1] | 0;
              _0xa66017[4] = _0x39798f[4] + (_0x39798f[3] << 16 | _0x39798f[3] >>> 16) + (_0x39798f[2] << 16 | _0x39798f[2] >>> 16) | 0;
              _0xa66017[5] = _0x39798f[5] + (_0x39798f[4] << 8 | _0x39798f[4] >>> 24) + _0x39798f[3] | 0;
              _0xa66017[6] = _0x39798f[6] + (_0x39798f[5] << 16 | _0x39798f[5] >>> 16) + (_0x39798f[4] << 16 | _0x39798f[4] >>> 16) | 0;
              _0xa66017[7] = _0x39798f[7] + (_0x39798f[6] << 8 | _0x39798f[6] >>> 24) + _0x39798f[5] | 0;
            }
            _0x1c48f4.Rabbit = _0x4d1910._createHelper(_0x1ba61d);
          })();
          return _0x52aa03.Rabbit;
        });
      }
    });
    var _0x2d09cc = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(_0x2670f6, _0x233a2e) {
        "use strict";
        (function(_0x155d38, _0x1ba2e6, _0x1f15d9) {
          if (typeof _0x2670f6 === "object") {
            _0x233a2e.exports = _0x2670f6 = _0x1ba2e6(_0x59010e(), _0x4f591b(), _0x5d1f96(), _0x16e388(), _0x2257a4());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], _0x1ba2e6);
          } else {
            _0x1ba2e6(_0x155d38.CryptoJS);
          }
        })(_0x2670f6, function(_0x3d3652) {
          (function() {
            var _0x436c2a = _0x3d3652;
            var _0x3bed90 = _0x436c2a.lib;
            var _0x5637b3 = _0x3bed90.StreamCipher;
            var _0x3c71d0 = _0x436c2a.algo;
            var _0x3bf5ae = [];
            var _0x12c322 = [];
            var _0x5501e7 = [];
            var _0xd1d942 = _0x3c71d0.RabbitLegacy = _0x5637b3.extend({
              _doReset: function() {
                var _0x18c823 = this._key.words;
                var _0x3e2e3b = this.cfg.iv;
                var _0x51b6bb = this._X = [_0x18c823[0], _0x18c823[3] << 16 | _0x18c823[2] >>> 16, _0x18c823[1], _0x18c823[0] << 16 | _0x18c823[3] >>> 16, _0x18c823[2], _0x18c823[1] << 16 | _0x18c823[0] >>> 16, _0x18c823[3], _0x18c823[2] << 16 | _0x18c823[1] >>> 16];
                var _0x470301 = this._C = [_0x18c823[2] << 16 | _0x18c823[2] >>> 16, _0x18c823[0] & -65536 | _0x18c823[1] & 65535, _0x18c823[3] << 16 | _0x18c823[3] >>> 16, _0x18c823[1] & -65536 | _0x18c823[2] & 65535, _0x18c823[0] << 16 | _0x18c823[0] >>> 16, _0x18c823[2] & -65536 | _0x18c823[3] & 65535, _0x18c823[1] << 16 | _0x18c823[1] >>> 16, _0x18c823[3] & -65536 | _0x18c823[0] & 65535];
                this._b = 0;
                for (var _0xf709f0 = 0; _0xf709f0 < 4; _0xf709f0++) {
                  _0x40a61d.call(this);
                }
                for (var _0xf709f0 = 0; _0xf709f0 < 8; _0xf709f0++) {
                  _0x470301[_0xf709f0] ^= _0x51b6bb[_0xf709f0 + 4 & 7];
                }
                if (_0x3e2e3b) {
                  var _0x23e3b7 = _0x3e2e3b.words;
                  var _0x30560a = _0x23e3b7[0];
                  var _0x599f25 = _0x23e3b7[1];
                  var _0x40fac9 = (_0x30560a << 8 | _0x30560a >>> 24) & 16711935 | (_0x30560a << 24 | _0x30560a >>> 8) & -16711936;
                  var _0x8d44cc = (_0x599f25 << 8 | _0x599f25 >>> 24) & 16711935 | (_0x599f25 << 24 | _0x599f25 >>> 8) & -16711936;
                  var _0x599d98 = _0x40fac9 >>> 16 | _0x8d44cc & -65536;
                  var _0x36f434 = _0x8d44cc << 16 | _0x40fac9 & 65535;
                  _0x470301[0] ^= _0x40fac9;
                  _0x470301[1] ^= _0x599d98;
                  _0x470301[2] ^= _0x8d44cc;
                  _0x470301[3] ^= _0x36f434;
                  _0x470301[4] ^= _0x40fac9;
                  _0x470301[5] ^= _0x599d98;
                  _0x470301[6] ^= _0x8d44cc;
                  _0x470301[7] ^= _0x36f434;
                  for (var _0xf709f0 = 0; _0xf709f0 < 4; _0xf709f0++) {
                    _0x40a61d.call(this);
                  }
                }
              },
              _doProcessBlock: function(_0x16653d, _0x3745df) {
                var _0xf333ef = this._X;
                _0x40a61d.call(this);
                _0x3bf5ae[0] = _0xf333ef[0] ^ _0xf333ef[5] >>> 16 ^ _0xf333ef[3] << 16;
                _0x3bf5ae[1] = _0xf333ef[2] ^ _0xf333ef[7] >>> 16 ^ _0xf333ef[5] << 16;
                _0x3bf5ae[2] = _0xf333ef[4] ^ _0xf333ef[1] >>> 16 ^ _0xf333ef[7] << 16;
                _0x3bf5ae[3] = _0xf333ef[6] ^ _0xf333ef[3] >>> 16 ^ _0xf333ef[1] << 16;
                for (var _0x43db5f = 0; _0x43db5f < 4; _0x43db5f++) {
                  _0x3bf5ae[_0x43db5f] = (_0x3bf5ae[_0x43db5f] << 8 | _0x3bf5ae[_0x43db5f] >>> 24) & 16711935 | (_0x3bf5ae[_0x43db5f] << 24 | _0x3bf5ae[_0x43db5f] >>> 8) & -16711936;
                  _0x16653d[_0x3745df + _0x43db5f] ^= _0x3bf5ae[_0x43db5f];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function _0x40a61d() {
              var _0x110e6a = this._X;
              var _0x772685 = this._C;
              for (var _0x34210f = 0; _0x34210f < 8; _0x34210f++) {
                _0x12c322[_0x34210f] = _0x772685[_0x34210f];
              }
              _0x772685[0] = _0x772685[0] + 1295307597 + this._b | 0;
              _0x772685[1] = _0x772685[1] + 3545052371 + (_0x772685[0] >>> 0 < _0x12c322[0] >>> 0 ? 1 : 0) | 0;
              _0x772685[2] = _0x772685[2] + 886263092 + (_0x772685[1] >>> 0 < _0x12c322[1] >>> 0 ? 1 : 0) | 0;
              _0x772685[3] = _0x772685[3] + 1295307597 + (_0x772685[2] >>> 0 < _0x12c322[2] >>> 0 ? 1 : 0) | 0;
              _0x772685[4] = _0x772685[4] + 3545052371 + (_0x772685[3] >>> 0 < _0x12c322[3] >>> 0 ? 1 : 0) | 0;
              _0x772685[5] = _0x772685[5] + 886263092 + (_0x772685[4] >>> 0 < _0x12c322[4] >>> 0 ? 1 : 0) | 0;
              _0x772685[6] = _0x772685[6] + 1295307597 + (_0x772685[5] >>> 0 < _0x12c322[5] >>> 0 ? 1 : 0) | 0;
              _0x772685[7] = _0x772685[7] + 3545052371 + (_0x772685[6] >>> 0 < _0x12c322[6] >>> 0 ? 1 : 0) | 0;
              this._b = _0x772685[7] >>> 0 < _0x12c322[7] >>> 0 ? 1 : 0;
              for (var _0x34210f = 0; _0x34210f < 8; _0x34210f++) {
                var _0x38ef8 = _0x110e6a[_0x34210f] + _0x772685[_0x34210f];
                var _0xe84e99 = _0x38ef8 & 65535;
                var _0x36914b = _0x38ef8 >>> 16;
                var _0x2637f5 = ((_0xe84e99 * _0xe84e99 >>> 17) + _0xe84e99 * _0x36914b >>> 15) + _0x36914b * _0x36914b;
                var _0x40a70b = ((_0x38ef8 & -65536) * _0x38ef8 | 0) + ((_0x38ef8 & 65535) * _0x38ef8 | 0);
                _0x5501e7[_0x34210f] = _0x2637f5 ^ _0x40a70b;
              }
              _0x110e6a[0] = _0x5501e7[0] + (_0x5501e7[7] << 16 | _0x5501e7[7] >>> 16) + (_0x5501e7[6] << 16 | _0x5501e7[6] >>> 16) | 0;
              _0x110e6a[1] = _0x5501e7[1] + (_0x5501e7[0] << 8 | _0x5501e7[0] >>> 24) + _0x5501e7[7] | 0;
              _0x110e6a[2] = _0x5501e7[2] + (_0x5501e7[1] << 16 | _0x5501e7[1] >>> 16) + (_0x5501e7[0] << 16 | _0x5501e7[0] >>> 16) | 0;
              _0x110e6a[3] = _0x5501e7[3] + (_0x5501e7[2] << 8 | _0x5501e7[2] >>> 24) + _0x5501e7[1] | 0;
              _0x110e6a[4] = _0x5501e7[4] + (_0x5501e7[3] << 16 | _0x5501e7[3] >>> 16) + (_0x5501e7[2] << 16 | _0x5501e7[2] >>> 16) | 0;
              _0x110e6a[5] = _0x5501e7[5] + (_0x5501e7[4] << 8 | _0x5501e7[4] >>> 24) + _0x5501e7[3] | 0;
              _0x110e6a[6] = _0x5501e7[6] + (_0x5501e7[5] << 16 | _0x5501e7[5] >>> 16) + (_0x5501e7[4] << 16 | _0x5501e7[4] >>> 16) | 0;
              _0x110e6a[7] = _0x5501e7[7] + (_0x5501e7[6] << 8 | _0x5501e7[6] >>> 24) + _0x5501e7[5] | 0;
            }
            _0x436c2a.RabbitLegacy = _0x5637b3._createHelper(_0xd1d942);
          })();
          return _0x3d3652.RabbitLegacy;
        });
      }
    });
    var _0x477ea6 = _0x4ece14({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(_0x4a3214, _0x5efd88) {
        "use strict";
        "use strict";
        (function(_0x5c453b, _0x23695d, _0xd148bb) {
          if (typeof _0x4a3214 === "object") {
            _0x5efd88.exports = _0x4a3214 = _0x23695d(_0x59010e(), _0x48345e(), _0x5d480e(), _0xa2ee7f(), _0x4f591b(), _0x5d1f96(), _0x3d0103(), _0x5331a6(), _0x484828(), _0x5b156c(), _0x23f27a(), _0x12606e(), _0x581e8a(), _0x1b2c6b(), _0x569424(), _0x16e388(), _0x2257a4(), _0x4f83d2(), _0x16d18e(), _0x4bcbba(), _0x596235(), _0x25d06e(), _0x113593(), _0x4c6729(), _0x3319b5(), _0x305dec(), _0x11a100(), _0x3d5acc(), _0x25e92e(), _0x145561(), _0x3d148e(), _0x1599ac(), _0x2d09cc());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], _0x23695d);
          } else {
            _0x5c453b.CryptoJS = _0x23695d(_0x5c453b.CryptoJS);
          }
        })(_0x4a3214, function(_0x2de083) {
          return _0x2de083;
        });
      }
    });
    var _0x42ff3e = {
      ESC: 322,
      F1: 288,
      F2: 289,
      F3: 170,
      F5: 166,
      F6: 167,
      F7: 168,
      F8: 169,
      F9: 56,
      F10: 57,
      "~": 243,
      "#1": 157,
      "#2": 158,
      "#3": 160,
      "#4": 164,
      "#5": 165,
      "#6": 159,
      "#7": 161,
      "#8": 162,
      "#9": 163,
      "-": 84,
      "=": 83,
      BACKSPACE: 177,
      TAB: 37,
      Q: 44,
      W: 32,
      E: 38,
      R: 45,
      T: 245,
      Y: 246,
      U: 303,
      P: 199,
      ENTER: 18,
      CAPS: 137,
      A: 34,
      S: 8,
      D: 9,
      F: 23,
      G: 47,
      H: 74,
      K: 311,
      L: 182,
      LEFTSHIFT: 21,
      Z: 20,
      X: 73,
      C: 26,
      V: 0,
      B: 29,
      N: 249,
      M: 244,
      ",": 82,
      ".": 81,
      LEFTCTRL: 36,
      LEFTALT: 19,
      SPACE: 22,
      RIGHTCTRL: 70,
      HOME: 213,
      PAGEUP: 10,
      PAGEDOWN: 11,
      DELETE: 178,
      LEFT: 174,
      RIGHT: 175,
      TOP: 27,
      DOWN: 173,
      NENTER: 201,
      N4: 108,
      N5: 60,
      N6: 107,
      "N+": 96,
      "N-": 97,
      N7: 117,
      N8: 61,
      N9: 118
    };
    var _0x45d570 = {};
    var _0x5c98eb = {
      MathUtils: () => _0x160d48
    };
    _0x57b916(_0x45d570, _0x5c98eb);
    var _0x2d4594;
    var _0x1ffa38;
    var _0x506f5f = class _0x21ecfb {
      constructor(_0x1e7b74, _0x149b8e, _0x5b3afd) {
        _0x34720d(this, _0x2d4594);
        const _0x2dd6a5 = _0x1ec034(this, _0x2d4594, _0x1ffa38).call(this, _0x1e7b74, _0x149b8e, _0x5b3afd);
        this.x = _0x2dd6a5.x;
        this.y = _0x2dd6a5.y;
        this.z = _0x2dd6a5.z;
      }
      equals(_0x430804, _0x55b5d3, _0xf756ad) {
        const _0x3d8fe4 = _0x1ec034(this, _0x2d4594, _0x1ffa38).call(this, _0x430804, _0x55b5d3, _0xf756ad);
        return this.x === _0x3d8fe4.x && this.y === _0x3d8fe4.y && this.z === _0x3d8fe4.z;
      }
      add(_0x850510, _0x29feaf, _0x1c80f9, _0x5bd87e) {
        let _0x3e06ef = _0x1ec034(this, _0x2d4594, _0x1ffa38).call(this, _0x850510, _0x29feaf, _0x1c80f9);
        this.x += _0x5bd87e ? _0x3e06ef.x * _0x5bd87e : _0x3e06ef.x;
        this.y += _0x5bd87e ? _0x3e06ef.y * _0x5bd87e : _0x3e06ef.y;
        this.z += _0x5bd87e ? _0x3e06ef.z * _0x5bd87e : _0x3e06ef.z;
        return this;
      }
      addScalar(_0x23c8f3) {
        if (typeof _0x23c8f3 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x += _0x23c8f3;
        this.y += _0x23c8f3;
        this.z += _0x23c8f3;
        return this;
      }
      sub(_0x5acd01, _0x39bcf2, _0x1dff47, _0x27aba1) {
        const _0xa06785 = _0x1ec034(this, _0x2d4594, _0x1ffa38).call(this, _0x5acd01, _0x39bcf2, _0x1dff47);
        this.x -= _0x27aba1 ? _0xa06785.x * _0x27aba1 : _0xa06785.x;
        this.y -= _0x27aba1 ? _0xa06785.y * _0x27aba1 : _0xa06785.y;
        this.z -= _0x27aba1 ? _0xa06785.z * _0x27aba1 : _0xa06785.z;
        return this;
      }
      subScalar(_0x40ac4a) {
        if (typeof _0x40ac4a !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x -= _0x40ac4a;
        this.y -= _0x40ac4a;
        this.z -= _0x40ac4a;
        return this;
      }
      multiply(_0x1df13f, _0x2c67b8, _0x2fc311) {
        const _0x25c2f5 = _0x1ec034(this, _0x2d4594, _0x1ffa38).call(this, _0x1df13f, _0x2c67b8, _0x2fc311);
        this.x *= _0x25c2f5.x;
        this.y *= _0x25c2f5.y;
        this.z *= _0x25c2f5.z;
        return this;
      }
      multiplyScalar(_0x1fca0e) {
        if (typeof _0x1fca0e !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x *= _0x1fca0e;
        this.y *= _0x1fca0e;
        this.z *= _0x1fca0e;
        return this;
      }
      divide(_0x1196d1, _0x384150, _0x4fa3b3) {
        const _0x2ab8f7 = _0x1ec034(this, _0x2d4594, _0x1ffa38).call(this, _0x1196d1, _0x384150, _0x4fa3b3);
        this.x /= _0x2ab8f7.x;
        this.y /= _0x2ab8f7.y;
        this.z /= _0x2ab8f7.z;
        return this;
      }
      divideScalar(_0x1fcf3f) {
        if (typeof _0x1fcf3f !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x /= _0x1fcf3f;
        this.y /= _0x1fcf3f;
        this.z /= _0x1fcf3f;
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
      getCenter(_0x1c4cb4, _0x413e7b, _0x2f675a) {
        const _0x301eb1 = _0x1ec034(this, _0x2d4594, _0x1ffa38).call(this, _0x1c4cb4, _0x413e7b, _0x2f675a);
        return new _0x21ecfb((this.x + _0x301eb1.x) / 2, (this.y + _0x301eb1.y) / 2, (this.z + _0x301eb1.z) / 2);
      }
      getDistance(_0x4d6e06, _0x10721c, _0x17070f) {
        const [_0x440953, _0x61a062, _0x3b6326] = _0x4d6e06 instanceof Array ? _0x4d6e06 : typeof _0x4d6e06 === "object" ? [_0x4d6e06.x, _0x4d6e06.y, _0x4d6e06.z] : [_0x4d6e06, _0x10721c, _0x17070f];
        if (typeof _0x440953 !== "number" || typeof _0x61a062 !== "number" || typeof _0x3b6326 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x4dc605, _0x82e0f8, _0x2ce132] = [this.x - _0x440953, this.y - _0x61a062, this.z - _0x3b6326];
        return Math.sqrt(_0x4dc605 * _0x4dc605 + _0x82e0f8 * _0x82e0f8 + _0x2ce132 * _0x2ce132);
      }
      toArray(_0xb7a566) {
        if (typeof _0xb7a566 === "number") {
          return [parseFloat(this.x.toFixed(_0xb7a566)), parseFloat(this.y.toFixed(_0xb7a566)), parseFloat(this.z.toFixed(_0xb7a566))];
        }
        return [this.x, this.y, this.z];
      }
      toJSON(_0x2d9ff5) {
        if (typeof _0x2d9ff5 === "number") {
          return {
            x: parseFloat(this.x.toFixed(_0x2d9ff5)),
            y: parseFloat(this.y.toFixed(_0x2d9ff5)),
            z: parseFloat(this.z.toFixed(_0x2d9ff5))
          };
        }
        var _0xd1af3 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return _0xd1af3;
      }
      toString(_0x602d10) {
        return JSON.stringify(this.toJSON(_0x602d10));
      }
    };
    _0x2d4594 = /* @__PURE__ */ new WeakSet();
    _0x1ffa38 = function(_0x4092e6, _0x4ba1ee, _0x1ef17e) {
      let _0x34688b = {
        x: 0,
        y: 0,
        z: 0
      };
      if (_0x4092e6 instanceof _0x506f5f) {
        _0x34688b = _0x4092e6;
      } else if (_0x4092e6 instanceof Array) {
        var _0x5035e2 = {
          x: _0x4092e6[0],
          y: _0x4092e6[1],
          z: _0x4092e6[2]
        };
        _0x34688b = _0x5035e2;
      } else if (typeof _0x4092e6 === "object") {
        _0x34688b = _0x4092e6;
      } else {
        var _0x3fdb4c = {
          x: _0x4092e6,
          y: _0x4ba1ee,
          z: _0x1ef17e
        };
        _0x34688b = _0x3fdb4c;
      }
      if (typeof _0x34688b.x !== "number" || typeof _0x34688b.y !== "number" || typeof _0x34688b.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return _0x34688b;
    };
    var _0x58b2dd = _0x506f5f;
    var _0x165875;
    var _0x1743e6;
    var _0x46f738 = class {
      constructor(_0x41a4ad) {
        _0x34720d(this, _0x165875, void 0);
        _0x34720d(this, _0x1743e6, void 0);
        _0x33011a(this, _0x1743e6, _0x41a4ad ?? 5);
        _0x33011a(this, _0x165875, /* @__PURE__ */ new Map());
      }
      setTTL(_0x120d27) {
        _0x33011a(this, _0x1743e6, _0x120d27);
      }
      set(_0x2ee7a6, _0x151817, _0x559fb2) {
        _0x47e5e2(this, _0x165875).set(_0x2ee7a6, {
          value: _0x151817,
          expiration: Date.now() + (_0x559fb2 ?? _0x47e5e2(this, _0x1743e6)) * 1e3
        });
        return this;
      }
      get(_0x24e040, _0x273936 = false) {
        const _0x1d109a = _0x47e5e2(this, _0x165875).get(_0x24e040);
        const _0x125119 = _0x1d109a ? _0x273936 ? true : _0x1d109a.expiration > Date.now() : false;
        if (!_0x1d109a || !_0x125119) {
          if (_0x1d109a) {
            _0x47e5e2(this, _0x165875).delete(_0x24e040);
          }
          return;
        }
        return _0x1d109a.value;
      }
      has(_0x2b583a, _0x5165d7 = false) {
        const _0x2eee1b = _0x47e5e2(this, _0x165875).get(_0x2b583a);
        const _0x221f09 = _0x2eee1b ? _0x5165d7 ? true : _0x2eee1b.expiration > Date.now() : false;
        if (_0x2eee1b && !_0x221f09) {
          _0x47e5e2(this, _0x165875).delete(_0x2b583a);
        }
        return _0x221f09;
      }
      delete(_0xde84a2) {
        return _0x47e5e2(this, _0x165875).delete(_0xde84a2);
      }
      clear() {
        _0x47e5e2(this, _0x165875).clear();
      }
      values(_0x16ab22 = false) {
        const _0x272b60 = [];
        const _0x1dc776 = Date.now();
        for (const _0x42e040 of _0x47e5e2(this, _0x165875).values()) {
          if (_0x16ab22 || _0x42e040.expiration > _0x1dc776) {
            _0x272b60.push(_0x42e040.value);
          }
        }
        return _0x272b60;
      }
      keys(_0x183fcc = false) {
        const _0x519e34 = [];
        const _0x3642ee = Date.now();
        for (const [_0x2863f5, _0x12d92d] of _0x47e5e2(this, _0x165875).entries()) {
          if (_0x183fcc || _0x12d92d.expiration > _0x3642ee) {
            _0x519e34.push(_0x2863f5);
          }
        }
        return _0x519e34;
      }
      entries(_0x5be40a = false) {
        const _0x29725f = [];
        const _0x5aab67 = Date.now();
        for (const [_0xd5fdde, _0x3b5133] of _0x47e5e2(this, _0x165875).entries()) {
          if (_0x5be40a || _0x3b5133.expiration > _0x5aab67) {
            _0x29725f.push([_0xd5fdde, _0x3b5133.value]);
          }
        }
        return _0x29725f;
      }
    };
    _0x165875 = /* @__PURE__ */ new WeakMap();
    _0x1743e6 = /* @__PURE__ */ new WeakMap();
    var _0x58793b;
    var _0x4f384d;
    var _0x140641;
    var _0x28babe;
    var _0x51e6d7;
    var _0x583d9d;
    var _0x45141e;
    var _0x52d63a;
    var _0x188ef2;
    var _0x1672cb;
    var _0x18cd8e;
    var _0x18b925;
    var _0x4d4ca6;
    var _0x288d99;
    var _0x11c4b8;
    var _0x1c550a;
    var _0x4515b5;
    var _0x1d28a1;
    var _0x2a974a;
    var _0x274e56;
    var _0x14596f;
    var _0x5a45cf;
    var _0x2326d4 = class {
      constructor(_0x23b7d8, _0x3d67b0, _0x59b3f0, _0x7597b0, _0x317e92, _0x23721b = 30, _0x517915 = false) {
        _0x34720d(this, _0x4d4ca6);
        _0x34720d(this, _0x11c4b8);
        _0x34720d(this, _0x4515b5);
        _0x34720d(this, _0x2a974a);
        _0x34720d(this, _0x14596f);
        _0x34720d(this, _0x58793b, void 0);
        _0x34720d(this, _0x4f384d, void 0);
        _0x34720d(this, _0x140641, void 0);
        _0x34720d(this, _0x28babe, void 0);
        _0x34720d(this, _0x51e6d7, void 0);
        _0x34720d(this, _0x583d9d, void 0);
        _0x34720d(this, _0x45141e, void 0);
        _0x34720d(this, _0x52d63a, void 0);
        _0x34720d(this, _0x188ef2, void 0);
        _0x34720d(this, _0x1672cb, void 0);
        _0x34720d(this, _0x18cd8e, void 0);
        _0x34720d(this, _0x18b925, void 0);
        _0x33011a(this, _0x58793b, _0x23b7d8);
        _0x33011a(this, _0x4f384d, _0x7597b0);
        _0x33011a(this, _0x140641, _0x317e92);
        _0x33011a(this, _0x28babe, _0x3d67b0);
        _0x33011a(this, _0x51e6d7, _0x59b3f0);
        _0x33011a(this, _0x583d9d, _0x517915);
        _0x33011a(this, _0x45141e, _0x23721b);
        _0x33011a(this, _0x188ef2, _0x47e5e2(this, _0x4f384d).x / _0x23721b);
        _0x33011a(this, _0x1672cb, _0x47e5e2(this, _0x4f384d).y / _0x23721b);
        _0x33011a(this, _0x52d63a, _0x47e5e2(this, _0x188ef2) * _0x47e5e2(this, _0x1672cb));
        _0x33011a(this, _0x18cd8e, _0x1ec034(this, _0x4d4ca6, _0x288d99).call(this, _0x47e5e2(this, _0x58793b), _0x47e5e2(this, _0x45141e), _0x47e5e2(this, _0x188ef2), _0x47e5e2(this, _0x1672cb), _0x47e5e2(this, _0x583d9d)));
        _0x33011a(this, _0x18b925, _0x1ec034(this, _0x11c4b8, _0x1c550a).call(this, _0x47e5e2(this, _0x18cd8e), _0x47e5e2(this, _0x52d63a)));
      }
      get cells() {
        return _0x47e5e2(this, _0x18cd8e);
      }
      get cellSize() {
        return _0x47e5e2(this, _0x45141e);
      }
      get cellWidth() {
        return _0x47e5e2(this, _0x188ef2);
      }
      get cellHeight() {
        return _0x47e5e2(this, _0x1672cb);
      }
      get gridArea() {
        return _0x47e5e2(this, _0x18b925);
      }
      get gridCoverage() {
        return _0x47e5e2(this, _0x18b925) / _0x47e5e2(this, _0x140641) * 100;
      }
      isPointInsideGrid(_0x378822) {
        var _0x2d5cdc;
        const _0x5b996c = _0x378822.x - _0x47e5e2(this, _0x28babe).x;
        const _0x168dff = _0x378822.y - _0x47e5e2(this, _0x28babe).y;
        const _0x101d66 = Math.floor(_0x5b996c * _0x47e5e2(this, _0x45141e) / _0x47e5e2(this, _0x4f384d).x);
        const _0x54f5ab = Math.floor(_0x168dff * _0x47e5e2(this, _0x45141e) / _0x47e5e2(this, _0x4f384d).y);
        let _0x53c9ec = (_0x2d5cdc = _0x47e5e2(this, _0x18cd8e)[_0x101d66]) == null ? void 0 : _0x2d5cdc[_0x54f5ab];
        if (!_0x53c9ec && _0x47e5e2(this, _0x583d9d)) {
          _0x53c9ec = _0x1ec034(this, _0x2a974a, _0x274e56).call(this, _0x101d66, _0x54f5ab, _0x47e5e2(this, _0x188ef2), _0x47e5e2(this, _0x1672cb), _0x47e5e2(this, _0x58793b));
          _0x47e5e2(this, _0x18cd8e)[_0x101d66][_0x54f5ab] = _0x53c9ec;
          if (!_0x53c9ec) {
            return false;
          }
          _0x33011a(this, _0x18b925, _0x47e5e2(this, _0x18b925) + _0x47e5e2(this, _0x52d63a));
        }
        return _0x53c9ec ?? false;
      }
    };
    _0x58793b = /* @__PURE__ */ new WeakMap();
    _0x4f384d = /* @__PURE__ */ new WeakMap();
    _0x140641 = /* @__PURE__ */ new WeakMap();
    _0x28babe = /* @__PURE__ */ new WeakMap();
    _0x51e6d7 = /* @__PURE__ */ new WeakMap();
    _0x583d9d = /* @__PURE__ */ new WeakMap();
    _0x45141e = /* @__PURE__ */ new WeakMap();
    _0x52d63a = /* @__PURE__ */ new WeakMap();
    _0x188ef2 = /* @__PURE__ */ new WeakMap();
    _0x1672cb = /* @__PURE__ */ new WeakMap();
    _0x18cd8e = /* @__PURE__ */ new WeakMap();
    _0x18b925 = /* @__PURE__ */ new WeakMap();
    _0x4d4ca6 = /* @__PURE__ */ new WeakSet();
    _0x288d99 = function(_0x5794f9, _0x58ba48, _0x1199e4, _0x18c5eb, _0x1e7199) {
      const _0x87cd20 = {};
      for (let _0x1cb1d7 = 0; _0x1cb1d7 < _0x58ba48; _0x1cb1d7++) {
        _0x87cd20[_0x1cb1d7] = {};
        if (_0x1e7199) {
          continue;
        }
        for (let _0x19b4a3 = 0; _0x19b4a3 < _0x58ba48; _0x19b4a3++) {
          const _0x5a9c67 = _0x1ec034(this, _0x2a974a, _0x274e56).call(this, _0x1cb1d7, _0x19b4a3, _0x1199e4, _0x18c5eb, _0x5794f9);
          if (!_0x5a9c67) {
            continue;
          }
          _0x87cd20[_0x1cb1d7][_0x19b4a3] = true;
        }
      }
      return _0x87cd20;
    };
    _0x11c4b8 = /* @__PURE__ */ new WeakSet();
    _0x1c550a = function(_0x1ceb4e, _0x56baae) {
      let _0x35679c = 0;
      for (const _0x2e713d in _0x1ceb4e) {
        for (const _0x1e04b5 in _0x1ceb4e[_0x2e713d]) {
          _0x35679c += _0x56baae;
        }
      }
      return _0x35679c;
    };
    _0x4515b5 = /* @__PURE__ */ new WeakSet();
    _0x1d28a1 = function(_0x2a5d28, _0x4cf9c8, _0x3e663d, _0x4482c3) {
      const _0x186d09 = [];
      const _0x4857b0 = _0x2a5d28 * _0x3e663d + _0x47e5e2(this, _0x28babe).x;
      const _0x1b711a = _0x4cf9c8 * _0x4482c3 + _0x47e5e2(this, _0x28babe).y;
      _0x186d09.push(new _0x44da80(_0x4857b0, _0x1b711a));
      _0x186d09.push(new _0x44da80(_0x4857b0 + _0x3e663d, _0x1b711a));
      _0x186d09.push(new _0x44da80(_0x4857b0 + _0x3e663d, _0x1b711a + _0x4482c3));
      _0x186d09.push(new _0x44da80(_0x4857b0, _0x1b711a + _0x4482c3));
      return _0x186d09;
    };
    _0x2a974a = /* @__PURE__ */ new WeakSet();
    _0x274e56 = function(_0x26bc74, _0x40ef2b, _0x1c83af, _0x308b2f, _0x7f2f28) {
      const _0x2a2e5d = _0x1ec034(this, _0x4515b5, _0x1d28a1).call(this, _0x26bc74, _0x40ef2b, _0x1c83af, _0x308b2f);
      let _0x578a0c = false;
      for (const _0x270bea of _0x2a2e5d) {
        const _0x5c2e32 = _0x2ad271.MathUtils.windingNumber(_0x270bea, _0x7f2f28);
        if (_0x5c2e32 !== 0) {
          _0x578a0c = true;
          break;
        }
      }
      if (!_0x578a0c) {
        return false;
      }
      for (let _0x3bb6e1 = 0; _0x3bb6e1 < _0x2a2e5d.length; _0x3bb6e1++) {
        const _0x758569 = _0x2a2e5d[_0x3bb6e1];
        const _0x235e93 = _0x2a2e5d[(_0x3bb6e1 + 1) % _0x2a2e5d.length];
        for (let _0x452360 = 0; _0x452360 < _0x7f2f28.length; _0x452360++) {
          const _0x4b0e02 = _0x7f2f28[_0x452360];
          const _0x26c0c8 = _0x7f2f28[(_0x452360 + 1) % _0x7f2f28.length];
          if (_0x1ec034(this, _0x14596f, _0x5a45cf).call(this, _0x758569, _0x235e93, _0x4b0e02, _0x26c0c8)) {
            return false;
          }
        }
      }
      return true;
    };
    _0x14596f = /* @__PURE__ */ new WeakSet();
    _0x5a45cf = function(_0x5ef2d8, _0x19c0b9, _0x5d92bc, _0xd192df) {
      const _0x53f7e1 = (_0x19c0b9.x - _0x5ef2d8.x) * (_0xd192df.y - _0x5d92bc.y) - (_0x19c0b9.y - _0x5ef2d8.y) * (_0xd192df.x - _0x5d92bc.x);
      const _0xec3cbb = (_0x5ef2d8.y - _0x5d92bc.y) * (_0xd192df.x - _0x5d92bc.x) - (_0x5ef2d8.x - _0x5d92bc.x) * (_0xd192df.y - _0x5d92bc.y);
      const _0x5a7ae7 = (_0x5ef2d8.y - _0x5d92bc.y) * (_0x19c0b9.x - _0x5ef2d8.x) - (_0x5ef2d8.x - _0x5d92bc.x) * (_0x19c0b9.y - _0x5ef2d8.y);
      if (_0x53f7e1 === 0) {
        return _0xec3cbb === 0 && _0x5a7ae7 === 0;
      }
      const _0x16cbc1 = _0xec3cbb / _0x53f7e1;
      const _0x4ddbab = _0x5a7ae7 / _0x53f7e1;
      return _0x16cbc1 >= 0 && _0x16cbc1 <= 1 && _0x4ddbab >= 0 && _0x4ddbab <= 1;
    };
    var _0x4ef4a6;
    var _0x548695;
    var _0x5a831e;
    var _0x3cce83;
    var _0x88bb88;
    var _0x42dd61;
    var _0x1f4160;
    var _0x2f6770;
    var _0x1ad1d4;
    var _0x2a2ca5;
    var _0x40fd57;
    var _0x1a97cb;
    var _0xabbd70;
    var _0x3f7391;
    var _0x3dc7c1;
    var _0x2ac24f;
    var _0x57c9e0;
    var _0x5e7714;
    var _0x4877d3 = class {
      constructor(_0x164b43, _0x5eb72b = {}, _0x148bda = {}) {
        _0x34720d(this, _0x1ad1d4);
        _0x34720d(this, _0x40fd57);
        _0x34720d(this, _0xabbd70);
        _0x34720d(this, _0x3dc7c1);
        _0x34720d(this, _0x57c9e0);
        _0x34720d(this, _0x4ef4a6, void 0);
        _0x34720d(this, _0x548695, void 0);
        _0x34720d(this, _0x5a831e, void 0);
        _0x34720d(this, _0x3cce83, void 0);
        _0x34720d(this, _0x88bb88, void 0);
        _0x34720d(this, _0x42dd61, void 0);
        _0x34720d(this, _0x1f4160, void 0);
        _0x34720d(this, _0x2f6770, void 0);
        _0x33011a(this, _0x4ef4a6, _0x2ad271.getUUID());
        _0x33011a(this, _0x548695, _0x164b43);
        _0x33011a(this, _0x5a831e, _0x1ec034(this, _0x1ad1d4, _0x2a2ca5).call(this, _0x164b43));
        _0x33011a(this, _0x3cce83, _0x1ec034(this, _0x40fd57, _0x1a97cb).call(this, _0x164b43));
        _0x33011a(this, _0x88bb88, _0x1ec034(this, _0x57c9e0, _0x5e7714).call(this, _0x164b43));
        _0x33011a(this, _0x42dd61, _0x1ec034(this, _0x3dc7c1, _0x2ac24f).call(this, _0x47e5e2(this, _0x5a831e), _0x47e5e2(this, _0x3cce83)));
        _0x33011a(this, _0x1f4160, _0x1ec034(this, _0xabbd70, _0x3f7391).call(this, _0x47e5e2(this, _0x5a831e), _0x47e5e2(this, _0x3cce83)));
        this.options = _0x5eb72b;
        this.data = _0x148bda;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        _0x33011a(this, _0x2f6770, new _0x2326d4(_0x47e5e2(this, _0x548695), _0x47e5e2(this, _0x5a831e), _0x47e5e2(this, _0x3cce83), _0x47e5e2(this, _0x42dd61), _0x47e5e2(this, _0x88bb88), _0x5eb72b.gridCellSize, _0x5eb72b.useLazyGrid));
      }
      get id() {
        return _0x47e5e2(this, _0x4ef4a6);
      }
      get center() {
        return _0x47e5e2(this, _0x1f4160);
      }
      get min() {
        return _0x47e5e2(this, _0x5a831e);
      }
      get max() {
        return _0x47e5e2(this, _0x3cce83);
      }
      get points() {
        return [..._0x47e5e2(this, _0x548695)];
      }
      isPointInside(_0x473a97) {
        if (_0x473a97.x < _0x47e5e2(this, _0x5a831e).x || _0x473a97.x > _0x47e5e2(this, _0x3cce83).x) {
          return false;
        } else if (_0x473a97.y < _0x47e5e2(this, _0x5a831e).y || _0x473a97.y > _0x47e5e2(this, _0x3cce83).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && _0x473a97 instanceof _0x58b2dd) {
          const _0x4b4727 = this.options.minZ ?? -Infinity;
          const _0x32d0d8 = this.options.maxZ ?? Infinity;
          if (_0x473a97.z < _0x4b4727 || _0x473a97.z > _0x32d0d8) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && _0x47e5e2(this, _0x2f6770)) {
          return _0x47e5e2(this, _0x2f6770).isPointInsideGrid(_0x473a97);
        }
        const _0x68c37c = _0x2ad271.MathUtils.windingNumber(_0x473a97, _0x47e5e2(this, _0x548695));
        return _0x68c37c !== 0;
      }
      addPoint(_0x110721) {
        _0x47e5e2(this, _0x548695).push(_0x110721);
      }
      removePoint(_0x3529b1) {
        const _0x4ad107 = _0x47e5e2(this, _0x548695).findIndex((_0x131dcf) => _0x131dcf.x === _0x3529b1.x && _0x131dcf.y === _0x3529b1.y);
        if (_0x4ad107 === -1) {
          return;
        }
        _0x47e5e2(this, _0x548695).splice(_0x4ad107, 1);
      }
      removeLastPoint() {
        _0x47e5e2(this, _0x548695).pop();
      }
      recalculate() {
        _0x33011a(this, _0x5a831e, _0x1ec034(this, _0x1ad1d4, _0x2a2ca5).call(this, _0x47e5e2(this, _0x548695)));
        _0x33011a(this, _0x3cce83, _0x1ec034(this, _0x40fd57, _0x1a97cb).call(this, _0x47e5e2(this, _0x548695)));
        _0x33011a(this, _0x88bb88, _0x1ec034(this, _0x57c9e0, _0x5e7714).call(this, _0x47e5e2(this, _0x548695)));
        _0x33011a(this, _0x42dd61, _0x1ec034(this, _0x3dc7c1, _0x2ac24f).call(this, _0x47e5e2(this, _0x5a831e), _0x47e5e2(this, _0x3cce83)));
        _0x33011a(this, _0x1f4160, _0x1ec034(this, _0xabbd70, _0x3f7391).call(this, _0x47e5e2(this, _0x5a831e), _0x47e5e2(this, _0x3cce83)));
        if (!this.options.useGrid) {
          return;
        }
        _0x33011a(this, _0x2f6770, new _0x2326d4(_0x47e5e2(this, _0x548695), _0x47e5e2(this, _0x5a831e), _0x47e5e2(this, _0x3cce83), _0x47e5e2(this, _0x42dd61), _0x47e5e2(this, _0x88bb88), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    _0x4ef4a6 = /* @__PURE__ */ new WeakMap();
    _0x548695 = /* @__PURE__ */ new WeakMap();
    _0x5a831e = /* @__PURE__ */ new WeakMap();
    _0x3cce83 = /* @__PURE__ */ new WeakMap();
    _0x88bb88 = /* @__PURE__ */ new WeakMap();
    _0x42dd61 = /* @__PURE__ */ new WeakMap();
    _0x1f4160 = /* @__PURE__ */ new WeakMap();
    _0x2f6770 = /* @__PURE__ */ new WeakMap();
    _0x1ad1d4 = /* @__PURE__ */ new WeakSet();
    _0x2a2ca5 = function(_0x1c0a82) {
      let _0x23ce37 = Number.MAX_SAFE_INTEGER;
      let _0x3e5c62 = Number.MAX_SAFE_INTEGER;
      for (const _0x6c4eda of _0x1c0a82) {
        _0x23ce37 = Math.min(_0x23ce37, _0x6c4eda.x);
        _0x3e5c62 = Math.min(_0x3e5c62, _0x6c4eda.y);
      }
      return new _0x44da80(_0x23ce37, _0x3e5c62);
    };
    _0x40fd57 = /* @__PURE__ */ new WeakSet();
    _0x1a97cb = function(_0x45d5cb) {
      let _0x15e405 = Number.MIN_SAFE_INTEGER;
      let _0x56beaf = Number.MIN_SAFE_INTEGER;
      for (const _0x52dccd of _0x45d5cb) {
        _0x15e405 = Math.max(_0x15e405, _0x52dccd.x);
        _0x56beaf = Math.max(_0x56beaf, _0x52dccd.y);
      }
      return new _0x44da80(_0x15e405, _0x56beaf);
    };
    _0xabbd70 = /* @__PURE__ */ new WeakSet();
    _0x3f7391 = function(_0x3ee6a2, _0x370453) {
      const _0x4982f7 = _0x370453.add(_0x3ee6a2);
      return _0x4982f7.divideScalar(2);
    };
    _0x3dc7c1 = /* @__PURE__ */ new WeakSet();
    _0x2ac24f = function(_0x54552e, _0x3d1099) {
      return _0x3d1099.sub(_0x54552e);
    };
    _0x57c9e0 = /* @__PURE__ */ new WeakSet();
    _0x5e7714 = function(_0x40a910) {
      let _0x1702d4 = 0;
      for (let _0x42848f = 0, _0x15623e = _0x40a910.length - 1; _0x42848f < _0x40a910.length; _0x15623e = _0x42848f++) {
        const _0xc348e5 = _0x40a910[_0x42848f];
        const _0x38b5a1 = _0x40a910[_0x15623e];
        _0x1702d4 += _0xc348e5.x * _0x38b5a1.y;
        _0x1702d4 -= _0xc348e5.y * _0x38b5a1.x;
      }
      return Math.abs(_0x1702d4 / 2);
    };
    var _0x382dcc;
    var _0x4052ab;
    var _0x32523d = class _0x2177ef {
      constructor(_0x394d6e, _0x5e99b1) {
        _0x34720d(this, _0x382dcc);
        const _0x2f2889 = _0x1ec034(this, _0x382dcc, _0x4052ab).call(this, _0x394d6e, _0x5e99b1);
        this.x = _0x2f2889.x;
        this.y = _0x2f2889.y;
      }
      equals(_0x3356e0, _0x202891) {
        const _0x2a6fec = _0x1ec034(this, _0x382dcc, _0x4052ab).call(this, _0x3356e0, _0x202891);
        return this.x === _0x2a6fec.x && this.y === _0x2a6fec.y;
      }
      add(_0x37b3cb, _0x135339, _0x2ca142) {
        const _0x24b9e3 = _0x1ec034(this, _0x382dcc, _0x4052ab).call(this, _0x37b3cb, _0x135339);
        const _0x3291b3 = this.x + (_0x2ca142 ? _0x24b9e3.x * _0x2ca142 : _0x24b9e3.x);
        const _0xd82367 = this.y + (_0x2ca142 ? _0x24b9e3.y * _0x2ca142 : _0x24b9e3.y);
        return new _0x2177ef(_0x3291b3, _0xd82367);
      }
      addScalar(_0x1fd6d7) {
        if (typeof _0x1fd6d7 !== "number") {
          throw new Error("Invalid scalar");
        }
        const _0x91a668 = this.x + _0x1fd6d7;
        const _0x5709a3 = this.y + _0x1fd6d7;
        return new _0x2177ef(_0x91a668, _0x5709a3);
      }
      sub(_0x32065b, _0x5274ab, _0x1a64fb) {
        const _0x52868f = _0x1ec034(this, _0x382dcc, _0x4052ab).call(this, _0x32065b, _0x5274ab);
        const _0x4cdcc6 = this.x - (_0x1a64fb ? _0x52868f.x * _0x1a64fb : _0x52868f.x);
        const _0x6a3300 = this.y - (_0x1a64fb ? _0x52868f.y * _0x1a64fb : _0x52868f.y);
        return new _0x2177ef(_0x4cdcc6, _0x6a3300);
      }
      subScalar(_0x1dcb18) {
        if (typeof _0x1dcb18 !== "number") {
          throw new Error("Invalid scalar");
        }
        const _0x1e5777 = this.x - _0x1dcb18;
        const _0x42cbd2 = this.y - _0x1dcb18;
        return new _0x2177ef(_0x1e5777, _0x42cbd2);
      }
      multiply(_0x515c5d, _0x2f250c) {
        const _0x4e519f = _0x1ec034(this, _0x382dcc, _0x4052ab).call(this, _0x515c5d, _0x2f250c);
        const _0x4c2ba8 = this.x * _0x4e519f.x;
        const _0x9e8f84 = this.y * _0x4e519f.y;
        return new _0x2177ef(_0x4c2ba8, _0x9e8f84);
      }
      multiplyScalar(_0x2c99db) {
        if (typeof _0x2c99db !== "number") {
          throw new Error("Invalid scalar");
        }
        const _0x4679b9 = this.x * _0x2c99db;
        const _0x573008 = this.y * _0x2c99db;
        return new _0x2177ef(_0x4679b9, _0x573008);
      }
      divide(_0x1eb426, _0x5e04f4) {
        const _0x102aa9 = _0x1ec034(this, _0x382dcc, _0x4052ab).call(this, _0x1eb426, _0x5e04f4);
        const _0x25a2b1 = this.x / _0x102aa9.x;
        const _0x1c31ee = this.y / _0x102aa9.y;
        return new _0x2177ef(_0x25a2b1, _0x1c31ee);
      }
      divideScalar(_0x20d481) {
        if (typeof _0x20d481 !== "number") {
          throw new Error("Invalid scalar");
        }
        const _0x160571 = this.x / _0x20d481;
        const _0x15aa97 = this.y / _0x20d481;
        return new _0x2177ef(_0x160571, _0x15aa97);
      }
      round() {
        const _0x535a57 = Math.round(this.x);
        const _0xab2e7 = Math.round(this.y);
        return new _0x2177ef(_0x535a57, _0xab2e7);
      }
      floor() {
        const _0x9fb847 = Math.floor(this.x);
        const _0x2aa232 = Math.floor(this.y);
        return new _0x2177ef(_0x9fb847, _0x2aa232);
      }
      ceil() {
        const _0x54f18d = Math.ceil(this.x);
        const _0x3adee6 = Math.ceil(this.y);
        return new _0x2177ef(_0x54f18d, _0x3adee6);
      }
      getCenter(_0x256cc4, _0x21561c) {
        const _0x57eb1b = _0x1ec034(this, _0x382dcc, _0x4052ab).call(this, _0x256cc4, _0x21561c);
        return new _0x2177ef((this.x + _0x57eb1b.x) / 2, (this.y + _0x57eb1b.y) / 2);
      }
      getDistance(_0x2ae136, _0x57cc64) {
        const [_0x45d927, _0x4dc6fd] = _0x2ae136 instanceof Array ? _0x2ae136 : typeof _0x2ae136 === "object" ? [_0x2ae136.x, _0x2ae136.y] : [_0x2ae136, _0x57cc64];
        if (typeof _0x45d927 !== "number" || typeof _0x4dc6fd !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x338c46, _0x24b814] = [this.x - _0x45d927, this.y - _0x4dc6fd];
        return Math.sqrt(_0x338c46 * _0x338c46 + _0x24b814 * _0x24b814);
      }
      toArray(_0x6edfda) {
        if (typeof _0x6edfda === "number") {
          return [parseFloat(this.x.toFixed(_0x6edfda)), parseFloat(this.y.toFixed(_0x6edfda))];
        }
        return [this.x, this.y];
      }
      toJSON(_0xd5203a) {
        if (typeof _0xd5203a === "number") {
          return {
            x: parseFloat(this.x.toFixed(_0xd5203a)),
            y: parseFloat(this.y.toFixed(_0xd5203a))
          };
        }
        var _0x218012 = {
          x: this.x,
          y: this.y
        };
        return _0x218012;
      }
      toString(_0x255b10) {
        return JSON.stringify(this.toJSON(_0x255b10));
      }
    };
    _0x382dcc = /* @__PURE__ */ new WeakSet();
    _0x4052ab = function(_0x4dbcce, _0x848835) {
      let _0x4ad575 = {
        x: 0,
        y: 0
      };
      if (_0x4dbcce instanceof _0x32523d || _0x4dbcce instanceof _0x58b2dd) {
        _0x4ad575 = _0x4dbcce;
      } else if (_0x4dbcce instanceof Array) {
        var _0x4278f9 = {
          x: _0x4dbcce[0],
          y: _0x4dbcce[1]
        };
        _0x4ad575 = _0x4278f9;
      } else if (typeof _0x4dbcce === "object") {
        _0x4ad575 = _0x4dbcce;
      } else {
        var _0x5b6557 = {
          x: _0x4dbcce,
          y: _0x848835
        };
        _0x4ad575 = _0x5b6557;
      }
      if (typeof _0x4ad575.x !== "number" || typeof _0x4ad575.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return _0x4ad575;
    };
    var _0x44da80 = _0x32523d;
    var _0x4757b9 = (_0x320c59, _0x244f1e, _0x5424bd) => {
      return Math.min(Math.max(_0x320c59, _0x244f1e), _0x5424bd);
    };
    var _0x2a311e = (_0x313dc5, _0x2f9236, _0x449891) => {
      return _0x2f9236[0] + (_0x449891 - _0x313dc5[0]) * (_0x2f9236[1] - _0x2f9236[0]) / (_0x313dc5[1] - _0x313dc5[0]);
    };
    var _0x18d045 = ([_0x4ab536, _0x13e657, _0x3bbf5e], [_0x3a6b15, _0x249aec, _0xa30acc]) => {
      const [_0x4cbff0, _0x397d15, _0x4b7e7a] = [_0x4ab536 - _0x3a6b15, _0x13e657 - _0x249aec, _0x3bbf5e - _0xa30acc];
      return Math.sqrt(_0x4cbff0 * _0x4cbff0 + _0x397d15 * _0x397d15 + _0x4b7e7a * _0x4b7e7a);
    };
    var _0x488176 = (_0x2ade57, _0x36e84c) => {
      if (_0x36e84c) {
        return Math.floor(Math.random() * (_0x36e84c - _0x2ade57 + 1) + _0x2ade57);
      } else {
        return Math.floor(Math.random() * _0x2ade57);
      }
    };
    var _0x3e89b7 = (_0xf22a0b, _0x4ae4c3) => {
      if (_0xf22a0b instanceof _0x44da80) {
        return _0xf22a0b;
      } else if (_0xf22a0b instanceof _0x58b2dd) {
        return new _0x44da80(_0xf22a0b);
      } else if (_0xf22a0b instanceof Array) {
        return new _0x44da80(_0xf22a0b);
      } else if (typeof _0xf22a0b === "object") {
        return new _0x44da80(_0xf22a0b);
      }
      if (typeof _0xf22a0b !== "number" || typeof _0x4ae4c3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new _0x44da80(_0xf22a0b, _0x4ae4c3);
    };
    var _0x327e3b = (_0x378e03, _0x92c28d, _0x51ca93) => {
      if (_0x378e03 instanceof _0x58b2dd) {
        return _0x378e03;
      } else if (_0x378e03 instanceof Array) {
        return new _0x58b2dd(_0x378e03);
      } else if (typeof _0x378e03 === "object") {
        return new _0x58b2dd(_0x378e03);
      }
      if (typeof _0x378e03 !== "number" || typeof _0x92c28d !== "number" || typeof _0x51ca93 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new _0x58b2dd(_0x378e03, _0x92c28d, _0x51ca93);
    };
    var _0x24db5f = (_0xfe84b5, _0x532998) => {
      let _0x4836d8 = 0;
      const _0x4ddaa1 = (_0x366634, _0x255fd4, _0x3f7ebb) => {
        return (_0x255fd4.x - _0x366634.x) * (_0x3f7ebb.y - _0x366634.y) - (_0x3f7ebb.x - _0x366634.x) * (_0x255fd4.y - _0x366634.y);
      };
      for (let _0x146bc9 = 0; _0x146bc9 < _0x532998.length; _0x146bc9++) {
        const _0x224802 = _0x532998[_0x146bc9];
        const _0x19e5d8 = _0x532998[(_0x146bc9 + 1) % _0x532998.length];
        if (_0x224802.y <= _0xfe84b5.y) {
          if (_0x19e5d8.y > _0xfe84b5.y && _0x4ddaa1(_0x224802, _0x19e5d8, _0xfe84b5) > 0) {
            _0x4836d8++;
          }
        } else if (_0x19e5d8.y <= _0xfe84b5.y && _0x4ddaa1(_0x224802, _0x19e5d8, _0xfe84b5) < 0) {
          _0x4836d8--;
        }
      }
      return _0x4836d8;
    };
    var _0x5da942 = {
      clamp: _0x4757b9,
      getMapRange: _0x2a311e,
      getDistance: _0x18d045,
      getRandomNumber: _0x488176,
      parseVector2: _0x3e89b7,
      parseVector3: _0x327e3b,
      windingNumber: _0x24db5f
    };
    var _0x160d48 = _0x5da942;
    var _0x212e6e = {};
    var _0x41556e = {
      ArrUtils: () => _0x2997cb
    };
    _0x57b916(_0x212e6e, _0x41556e);
    var _0x37a122 = (_0x124d0b) => {
      for (let _0x11300d = _0x124d0b.length - 1; _0x11300d > 0; _0x11300d--) {
        const _0x1f2c43 = Math.floor(Math.random() * (_0x11300d + 1));
        [_0x124d0b[_0x11300d], _0x124d0b[_0x1f2c43]] = [_0x124d0b[_0x1f2c43], _0x124d0b[_0x11300d]];
      }
      return _0x124d0b;
    };
    var _0x96c9ee = (_0x5eede1, _0x5cc6db) => {
      const _0x528f91 = [];
      for (let _0x84f04a = 0; _0x84f04a < _0x5cc6db; _0x84f04a++) {
        _0x528f91.push(_0x5eede1[Math.floor(Math.random() * _0x5eede1.length)]);
      }
      return _0x528f91;
    };
    var _0x2c599a = {
      shuffleArray: _0x37a122,
      getRandomElements: _0x96c9ee
    };
    var _0x2997cb = _0x2c599a;
    function _0x28a5d8(_0x31a950, _0x3bf9c7) {
      const _0x3b2a87 = "_";
      const _0x47caba = _0xbc3563((_0x4f7864, _0x2fa0c7, ..._0x52e91a) => {
        return _0x31a950(_0x4f7864, ..._0x52e91a);
      }, _0x3bf9c7);
      return {
        get: function(..._0x1ee925) {
          return _0x47caba.get(_0x3b2a87, ..._0x1ee925);
        },
        reset: function() {
          _0x47caba.reset(_0x3b2a87);
        }
      };
    }
    function _0xbc3563(_0x59b253, _0x3a63cd) {
      const _0x24e3f0 = _0x3a63cd.timeToLive || 6e4;
      const _0xab20b5 = {};
      const _0xf9e95 = _0x3a63cd.immediateResolve || false;
      async function _0x30d55e(_0x31d47a, ..._0x36bf96) {
        let _0x4a4900 = _0xab20b5[_0x31d47a];
        if (!_0x4a4900) {
          _0x4a4900 = {
            value: null,
            lastUpdated: 0
          };
          _0xab20b5[_0x31d47a] = _0x4a4900;
        }
        const _0x345d6b = Date.now();
        if (_0x4a4900.lastUpdated === 0 || _0x345d6b - _0x4a4900.lastUpdated > _0x24e3f0) {
          const [_0x55d0c5, _0x139940] = await _0x59b253(_0x4a4900, _0x31d47a, ..._0x36bf96);
          if (_0x55d0c5) {
            _0x4a4900.lastUpdated = _0x345d6b;
            _0x4a4900.value = _0x139940;
          }
          return _0x139940;
        }
        if (_0xf9e95) {
          return Promise.resolve(_0x4a4900.value);
        } else {
          return await new Promise((_0x4876a8) => setTimeout(() => _0x4876a8(_0x4a4900.value), 0));
        }
      }
      return {
        get: async function(_0xa18d43, ..._0x268e00) {
          return await _0x30d55e(_0xa18d43, ..._0x268e00);
        },
        reset: function(_0x2e427e) {
          const _0x2b5808 = _0xab20b5[_0x2e427e];
          if (_0x2b5808) {
            _0x2b5808.lastUpdated = 0;
          }
        },
        clear: function() {
          for (const _0x4a5366 in _0xab20b5) {
            delete _0xab20b5[_0x4a5366];
          }
        }
      };
    }
    function _0x1e7e4d() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return _0x5e38e7();
      } else {
        return new _0xfa7756(4).toString();
      }
    }
    function _0x14ba55(_0x4f2939) {
      return _0xb74832(_0x4f2939, _0xb74832.URL);
    }
    function _0x442cc0(_0x5aceda, _0xcf7c37) {
      return new Promise((_0x2b5f42, _0x27f46f) => {
        const _0x2c88ed = Date.now();
        const _0x58426f = setInterval(() => {
          const _0xedce8c = Date.now() - _0x2c88ed > _0xcf7c37;
          if (_0x5aceda() || _0xedce8c) {
            clearInterval(_0x58426f);
            return _0x2b5f42(_0xedce8c);
          }
        }, 1);
      });
    }
    function _0x4ae8a2(_0x2d55c9) {
      return new Promise((_0xd6e27f) => setTimeout(() => _0xd6e27f(), _0x2d55c9));
    }
    function _0x33a761() {
      return _0x4ae8a2(0);
    }
    var _0x38b494 = {
      cache: _0x28a5d8,
      cacheableMap: _0xbc3563,
      waitForCondition: _0x442cc0,
      getUUID: _0x1e7e4d,
      getStringHash: _0x14ba55,
      wait: _0x4ae8a2,
      waitForNextFrame: _0x33a761,
      deflate: _0x3a852b,
      inflate: _0x40150d,
      ..._0x45d570,
      ..._0x212e6e
    };
    var _0x2ad271 = _0x38b494;
    var _0x25cbfa = ((_0x519760) => {
      _0x519760[_0x519760.hat = 0] = "hat";
      _0x519760[_0x519760.mask = 1] = "mask";
      _0x519760[_0x519760.glasses = 2] = "glasses";
      _0x519760[_0x519760.armor = 3] = "armor";
      _0x519760[_0x519760.backpack = 4] = "backpack";
      _0x519760[_0x519760.idcard = 5] = "idcard";
      _0x519760[_0x519760.mobilephone = 6] = "mobilephone";
      _0x519760[_0x519760.tablet = 7] = "tablet";
      _0x519760[_0x519760.keyring = 8] = "keyring";
      _0x519760[_0x519760.wallet = 9] = "wallet";
      return _0x519760;
    })(_0x25cbfa || {});
    var _0x3d08d1 = {};
    var _0x23e0bc = (_0x10f198, _0x510e65) => "__cfx_export_" + _0x10f198 + "_" + _0x510e65;
    var _0x531bb8 = new Proxy((_0x11bc70, _0x222b8a) => {
      const _0x4c82f7 = (_0x44e9e2, ..._0x587dff) => {
        const _0x1ff9cf = _0x222b8a(..._0x587dff);
        if (_0x1ff9cf instanceof Promise) {
          _0x1ff9cf.then((_0x8c150a) => _0x44e9e2(_0x8c150a));
        } else {
          _0x44e9e2(_0x1ff9cf);
        }
      };
      const _0xd9a461 = GetCurrentResourceName();
      if (_0xd9a461 == void 0) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      }
      on(_0x23e0bc(_0xd9a461, _0x11bc70), (_0x1754f1) => {
        _0x1754f1(_0x4c82f7);
      });
    }, {
      apply: (_0x4b7ab8, _0x129c3e, _0x402b5b) => {
        _0x4b7ab8(..._0x402b5b);
      },
      get: (_0x26b131, _0x4171cc) => {
        if (_0x3d08d1[_0x4171cc] == void 0) {
          _0x3d08d1[_0x4171cc] = {};
        }
        return new Proxy({}, {
          get: (_0x4f55f3, _0x3ab7fe) => {
            const _0x131fb6 = _0x3ab7fe + "_async";
            return (..._0x28b1ca) => {
              return new Promise(async (_0x356b53, _0x53a692) => {
                const _0x18e0c0 = await _0x2ad271.waitForCondition(() => GetResourceState(_0x4171cc) === "started", 6e4);
                if (_0x18e0c0) {
                  return _0x53a692("Resource " + _0x4171cc + " is not running");
                }
                if (_0x3d08d1[_0x4171cc][_0x131fb6] === void 0) {
                  emit(_0x23e0bc(_0x4171cc, _0x3ab7fe), (_0xfde4ef) => {
                    _0x3d08d1[_0x4171cc][_0x131fb6] = _0xfde4ef;
                  });
                  const _0xdcd82c = await _0x2ad271.waitForCondition(() => _0x3d08d1[_0x4171cc][_0x131fb6] !== void 0, 1e3);
                  if (_0xdcd82c) {
                    return _0x53a692("Failed to get export " + _0x3ab7fe + " from resource " + _0x4171cc);
                  }
                }
                try {
                  _0x3d08d1[_0x4171cc][_0x131fb6](_0x356b53, ..._0x28b1ca);
                } catch (_0x4d004f) {
                  _0x53a692(_0x4d004f);
                }
              });
            };
          }
        });
      }
    });
    var _0x1785fe = new Proxy((_0x2706fb, _0x27ab6e) => {
      const _0x4f7b13 = GetCurrentResourceName();
      if (_0x4f7b13 == void 0) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      } else if (typeof _0x27ab6e !== "function") {
        throw new Error("Callback is not a function");
      } else if (typeof _0x2706fb !== "string") {
        throw new Error("Export name must be a string");
      }
      on(_0x23e0bc(_0x4f7b13, _0x2706fb), (_0x258390) => {
        _0x258390(_0x27ab6e);
      });
    }, {
      apply: (_0x323bbf, _0x768323, _0x5c34d7) => {
        _0x323bbf(..._0x5c34d7);
      },
      get: (_0x573b0b, _0x53393d) => {
        if (_0x3d08d1[_0x53393d] == void 0) {
          _0x3d08d1[_0x53393d] = {};
        }
        return new Proxy({}, {
          get: (_0x49cca8, _0x2e39d1) => {
            const _0x4d0813 = _0x2e39d1 + "_sync";
            if (_0x3d08d1[_0x53393d][_0x4d0813] === void 0) {
              emit(_0x23e0bc(_0x53393d, _0x2e39d1), (_0x117708) => {
                _0x3d08d1[_0x53393d][_0x4d0813] = _0x117708;
              });
              if (_0x3d08d1[_0x53393d][_0x4d0813] === void 0) {
                if (GetResourceState(_0x53393d) !== "started") {
                  throw new Error("Resource " + _0x53393d + " is not running");
                } else {
                  throw new Error("No such export " + _0x2e39d1 + " in resource " + _0x53393d);
                }
              }
            }
            return (..._0x26ca7c) => {
              try {
                return _0x3d08d1[_0x53393d][_0x4d0813](..._0x26ca7c);
              } catch (_0x2ee88b) {
                throw new Error("An error occurred while calling export " + _0x2e39d1 + " of resource " + _0x53393d + " - see above for details");
              }
            };
          }
        });
      }
    });
    on("onResourceStop", (_0x341d9b) => _0x3d08d1[_0x341d9b] = void 0);
    var _0x17f17b = {
      Async: _0x531bb8,
      Sync: _0x1785fe
    };
    var _0x27d38c = _0x17f17b;
    var _0x44ac76 = /* @__PURE__ */ new Map();
    var _0x446fb1 = /* @__PURE__ */ new Set();
    var _0x4198c3 = GetCurrentResourceName();
    on("np-config:configLoaded", (_0x53f393, _0x5d78e1) => {
      _0x446fb1.add(_0x53f393);
      if (!_0x44ac76.has(_0x53f393)) {
        return;
      }
      _0x44ac76.set(_0x53f393, _0x5d78e1);
    });
    function _0x204713(_0x23baff) {
      if (_0x23baff instanceof Array) {
        return _0x23baff.every((_0x524130) => _0x446fb1.has(_0x524130));
      }
      return _0x446fb1.has(_0x23baff);
    }
    function _0x385930(_0x5e42af, _0x1ed020) {
      if (!_0x44ac76.has(_0x5e42af)) {
        const _0xd9fd65 = _0x27d38c.Sync.config.GetModuleConfig(_0x5e42af);
        if (_0xd9fd65 === void 0) {
          return;
        }
        _0x44ac76.set(_0x5e42af, _0xd9fd65);
        if (!_0x446fb1.has(_0x5e42af)) {
          _0x446fb1.add(_0x5e42af);
        }
      }
      const _0x81663e = _0x44ac76.get(_0x5e42af);
      if (_0x1ed020) {
        if (_0x81663e == null) {
          return void 0;
        } else {
          return _0x81663e[_0x1ed020];
        }
      } else {
        return _0x81663e;
      }
    }
    function _0x3e0c6f(_0x1952fd) {
      return _0x385930(_0x4198c3, _0x1952fd);
    }
    function _0x16f08a() {
      return _0x27d38c.Sync.config.IsConfigReady();
    }
    var _0x583439 = {
      IsConfigLoaded: _0x204713,
      GetModuleConfig: _0x385930,
      GetResourceConfig: _0x3e0c6f,
      IsConfigReady: _0x16f08a
    };
    var _0x4b1848 = _0x583439;
    var _0x291df2 = _0x279169(_0x477ea6());
    var _0x3278ab;
    var _0x291a89;
    var _0x59527c;
    var _0x40745a;
    var _0x42f356;
    var _0x1dfc29;
    var _0x44ca64;
    var _0x1a6cb4;
    var _0x271424;
    var _0x30b24c;
    var _0x46c38f;
    var _0x2cf939;
    var _0x922f64;
    var _0x1502bf;
    var _0x3acd94;
    var _0x1d79f3;
    var _0x334912;
    var _0x473a6f;
    var _0x32d17d;
    var _0xb788de;
    var _0x27bb4b = class {
      constructor(_0x55de12, _0x569e82) {
        _0x34720d(this, _0x42f356);
        _0x34720d(this, _0x44ca64);
        _0x34720d(this, _0x271424);
        _0x34720d(this, _0x46c38f);
        _0x34720d(this, _0x922f64);
        _0x34720d(this, _0x3acd94);
        _0x34720d(this, _0x334912);
        _0x34720d(this, _0x32d17d);
        _0x34720d(this, _0x3278ab, void 0);
        _0x34720d(this, _0x291a89, void 0);
        _0x34720d(this, _0x59527c, void 0);
        _0x34720d(this, _0x40745a, {});
        const _0x2ed513 = _0x1ec034(this, _0x922f64, _0x1502bf).call(this, _0x55de12);
        const _0x20b26b = _0x1ec034(this, _0x334912, _0x473a6f).call(this, _0x2ed513, _0x569e82);
        const [_0x48d563, _0x3e724e, _0x123359] = _0x20b26b.split(":").map((_0x299b9a) => _0x299b9a.length > 0 ? _0x299b9a : void 0);
        _0x33011a(this, _0x3278ab, _0x48d563);
        _0x33011a(this, _0x291a89, _0x3e724e);
        _0x33011a(this, _0x59527c, _0x123359);
      }
      hashString(_0xa15432) {
        return _0xa15432;
        var _0x475468;
        const _0x57a23d = _0x47e5e2(this, _0x42f356, _0x1dfc29);
        const _0x8e0e05 = (_0x475468 = _0x47e5e2(this, _0x40745a)[_0x57a23d]) == null ? void 0 : _0x475468[_0xa15432];
        if (_0x8e0e05) {
          return _0x8e0e05;
        }
        if (!_0x47e5e2(this, _0x40745a)[_0x57a23d]) {
          _0x47e5e2(this, _0x40745a)[_0x57a23d] = {};
        }
        const _0xa2801b = _0x1ec034(this, _0x46c38f, _0x2cf939).call(this, (0, _0x291df2.HmacMD5)(_0xa15432, _0x57a23d).toString());
        _0x47e5e2(this, _0x40745a)[_0x57a23d][_0xa15432] = _0xa2801b;
        if (IsDuplicityVersion()) {
          console.log("[SDK] Hash Debug | Event: " + _0xa15432 + " | Hash: " + _0xa2801b);
        }
        return _0xa2801b;
      }
      encode(_0xb4838c) {
        return JSON.stringify(_0xb4838c);
        let _0xf3fc05;
        const _0x1def40 = _0x47e5e2(this, _0x271424, _0x30b24c);
        try {
          _0xf3fc05 = _0x1ec034(this, _0x3acd94, _0x1d79f3).call(this, JSON.stringify(_0xb4838c), _0x1def40);
        } catch (_0x3cfe21) {
          console.error("Failed to encode payload");
        }
        return _0xf3fc05;
      }
      decode(_0x3bdcf7) {
        try {
          if (typeof _0x3bdcf7 === "string") {
            return JSON.parse(_0x3bdcf7);
          } else {
            return _0x3bdcf7;
          }
        } catch (_err) {
          return _0x3bdcf7;
        }
        let _0x3b2cef;
        const _0x417768 = _0x47e5e2(this, _0x44ca64, _0x1a6cb4);
        try {
          _0x3b2cef = JSON.parse(_0x1ec034(this, _0x334912, _0x473a6f).call(this, _0x3bdcf7, _0x417768));
        } catch (_0x40c57f) {
          console.error("Failed to decode payload");
        }
        return _0x3b2cef;
      }
    };
    _0x3278ab = /* @__PURE__ */ new WeakMap();
    _0x291a89 = /* @__PURE__ */ new WeakMap();
    _0x59527c = /* @__PURE__ */ new WeakMap();
    _0x40745a = /* @__PURE__ */ new WeakMap();
    _0x42f356 = /* @__PURE__ */ new WeakSet();
    _0x1dfc29 = function() {
      return _0x47e5e2(this, _0x3278ab) ?? _0x1ec034(this, _0x32d17d, _0xb788de).call(this);
    };
    _0x44ca64 = /* @__PURE__ */ new WeakSet();
    _0x1a6cb4 = function() {
      return _0x47e5e2(this, _0x291a89) ?? _0x1ec034(this, _0x32d17d, _0xb788de).call(this);
    };
    _0x271424 = /* @__PURE__ */ new WeakSet();
    _0x30b24c = function() {
      return _0x47e5e2(this, _0x59527c) ?? _0x1ec034(this, _0x32d17d, _0xb788de).call(this);
    };
    _0x46c38f = /* @__PURE__ */ new WeakSet();
    _0x2cf939 = function(_0x2d9f82) {
      if (typeof _0x2d9f82 !== "string") {
        return "";
      }
      return _0x291df2.enc.Base64.stringify(_0x291df2.enc.Utf8.parse(_0x2d9f82));
    };
    _0x922f64 = /* @__PURE__ */ new WeakSet();
    _0x1502bf = function(_0x57e54d) {
      if (typeof _0x57e54d !== "string") {
        return "";
      }
      return _0x291df2.enc.Utf8.stringify(_0x291df2.enc.Base64.parse(_0x57e54d));
    };
    _0x3acd94 = /* @__PURE__ */ new WeakSet();
    _0x1d79f3 = function(_0x320e91, _0x140099) {
      if (typeof _0x320e91 !== "string" || typeof _0x140099 !== "string") {
        return "";
      }
      return _0x291df2.AES.encrypt(_0x320e91, _0x140099).toString();
    };
    _0x334912 = /* @__PURE__ */ new WeakSet();
    _0x473a6f = function(_0x24ce9e, _0x219904) {
      if (typeof _0x24ce9e !== "string" || typeof _0x219904 !== "string") {
        return "";
      }
      return _0x291df2.AES.decrypt(_0x24ce9e, _0x219904).toString(_0x291df2.enc.Utf8);
    };
    _0x32d17d = /* @__PURE__ */ new WeakSet();
    _0xb788de = function(_0x510d6f = 128) {
      return _0x291df2.lib.WordArray.random(_0x510d6f / 8).toString();
    };
    var _0x1bd289;
    var _0x5a5bbd = class {
      constructor() {
        _0x34720d(this, _0x1bd289, void 0);
        const _0x31ee6b = GetCurrentResourceName();
        const _0x5ed0cc = _0x2ad271.getStringHash("__npx_sdk:" + _0x31ee6b + ":token");
        const _0x9e510b = GetConvar(_0x5ed0cc, "");
        _0x33011a(this, _0x1bd289, new _0x27bb4b(_0x9e510b, "0xFE750C01"));
      }
      on(_0x38dc74, _0x4efb2b) {
        const _0x4a890d = _0x47e5e2(this, _0x1bd289).hashString(_0x38dc74);
        return on(_0x4a890d, _0x4efb2b);
      }
      onNet(_0x372244, _0x1358b7) {
        const _0x4e2e40 = _0x47e5e2(this, _0x1bd289).hashString(_0x372244);
        onNet(_0x4e2e40, _0x1358b7);
        const _0x332335 = _0x47e5e2(this, _0x1bd289).hashString(_0x372244 + "-c");
        onNet(_0x332335, (_0x2403f2) => {
          const _0x2b1b87 = _0x2ad271.inflate(new Uint8Array(_0x2403f2));
          const _0x5db606 = msgpack_unpack(_0x2b1b87);
          return _0x1358b7(..._0x5db606);
        });
      }
      emit(_0x3ddbe4, ..._0x187fc6) {
        const _0x2b55e6 = _0x47e5e2(this, _0x1bd289).hashString(_0x3ddbe4);
        return emit(_0x2b55e6, ..._0x187fc6);
      }
      emitNet(_0x3cfd2e, ..._0x51cfe1) {
        let _0xa76807 = msgpack_pack(_0x51cfe1);
        let _0x1939b6 = _0xa76807.length;
        const _0x4296ec = _0x47e5e2(this, _0x1bd289).hashString(_0x3cfd2e);
        if (_0x1939b6 < 16e3) {
          TriggerServerEventInternal(_0x4296ec, _0xa76807, _0xa76807.length);
        } else {
          TriggerLatentServerEventInternal(_0x4296ec, _0xa76807, _0xa76807.length, 1024e3);
        }
      }
    };
    _0x1bd289 = /* @__PURE__ */ new WeakMap();
    var _0x539aaf = new _0x5a5bbd();
    var _0x52072a = {
      warning: 1,
      log: 2,
      error: 3,
      debug: 4
    };
    var _0x63f4bc = GetConvar(GetCurrentResourceName() + "_logLevel", "");
    var _0x1cb3d1 = GetConvar("sv_loglevel", "warning");
    (() => {
      _0x1cb3d1 = (_0x63f4bc == null ? void 0 : _0x63f4bc.length) > 0 ? _0x63f4bc : _0x1cb3d1;
      if (!_0x52072a[_0x1cb3d1]) {
        throw new Error("Invalid log level: " + _0x1cb3d1);
      }
    })();
    var _0x250f9c = () => _0x52072a[_0x1cb3d1] >= _0x52072a.warning;
    var _0x2bfcbd = () => _0x52072a[_0x1cb3d1] >= _0x52072a.log;
    var _0x502895 = () => _0x52072a[_0x1cb3d1] >= _0x52072a.error;
    var _0x56b42d = () => _0x1cb3d1 === "debug";
    var _0x1349fc = {
      warning: (_0x2c6f41, ..._0x465f0f) => {
        if (!_0x250f9c()) {
          return;
        }
        console.log("^3[WARNING] ^7" + _0x2c6f41, ..._0x465f0f, "^0");
      },
      log: (_0xe8fdeb, ..._0x41dd3c) => {
        if (!_0x2bfcbd()) {
          return;
        }
        console.log("^5[nopixel] ^7" + _0xe8fdeb, ..._0x41dd3c, "^0");
      },
      debug: (_0x50a8fe, ..._0x492ade) => {
        if (!_0x56b42d()) {
          return;
        }
        console.log("^2[D] " + _0x50a8fe, ..._0x492ade, "^0");
      },
      error: (_0x5c7694, ..._0x1266ad) => {
        if (!_0x502895()) {
          return;
        }
        console.log("^1[ERROR] " + _0x5c7694, ..._0x1266ad, "^0");
      }
    };
    var _0x452379;
    var _0x3e159f;
    var _0xea7ed3;
    var _0x2b17ea;
    var _0x561446;
    var _0x56091d;
    var _0x10001e;
    var _0x254f27;
    var _0x11b294;
    var _0x27db66;
    var _0x2579fb;
    var _0x125055;
    var _0x43a874 = class {
      constructor() {
        _0x34720d(this, _0x10001e);
        _0x34720d(this, _0x11b294);
        _0x34720d(this, _0x2579fb);
        _0x34720d(this, _0x452379, void 0);
        _0x34720d(this, _0x3e159f, void 0);
        _0x34720d(this, _0xea7ed3, void 0);
        _0x34720d(this, _0x2b17ea, void 0);
        _0x34720d(this, _0x561446, void 0);
        _0x34720d(this, _0x56091d, void 0);
        _0x33011a(this, _0x452379, false);
        _0x33011a(this, _0x3e159f, /* @__PURE__ */ new Map());
        _0x33011a(this, _0xea7ed3, /* @__PURE__ */ new Set());
        _0x33011a(this, _0x2b17ea, GetGameTimer());
        _0x33011a(this, _0x561446, GetCurrentResourceName());
        const _0x15268d = _0x2ad271.getStringHash("__npx_sdk:" + _0x47e5e2(this, _0x561446) + ":token");
        const _0x6ac669 = GetConvar(_0x15268d, "");
        _0x33011a(this, _0x56091d, new _0x27bb4b(_0x6ac669, "0xFE750C01"));
        _0x1ec034(this, _0x2579fb, _0x125055).call(this);
      }
      register(_0x1d52b3, _0x1d1bfe) {
        if (_0x47e5e2(this, _0xea7ed3).has(_0x1d52b3)) {
          return _0x1349fc.error("[RPC] Handler already registered | " + _0x1d52b3);
        }
        _0x47e5e2(this, _0xea7ed3).add(_0x1d52b3);
        _0x1ec034(this, _0x10001e, _0x254f27).call(this, "__rpc_req:" + _0x1d52b3, async (_0x1aaa38, _0x538f72) => {
          let _0x5cf723;
          let _0x4e43b3;
          const _0x23ded0 = GetInvokingResource();
          if (_0x23ded0) {
            return;
          }
          const _0x12a27b = _0x47e5e2(this, _0x56091d).decode(_0x1aaa38);
          if (!(_0x12a27b == null ? void 0 : _0x12a27b.id) || !(_0x12a27b == null ? void 0 : _0x12a27b.origin)) {
            return _0x1349fc.error("[RPC] " + _0x1d52b3 + " - Invalid metadata received");
          }
          try {
            _0x5cf723 = await _0x1d1bfe(..._0x538f72);
            _0x4e43b3 = true;
          } catch (_0x249809) {
            _0x5cf723 = _0x249809.message;
            _0x4e43b3 = false;
          }
          _0x1ec034(this, _0x11b294, _0x27db66).call(this, "__rpc_res:" + _0x12a27b.origin, _0x12a27b.id, [_0x4e43b3, _0x5cf723]);
        });
      }
      execute(_0x1f60db, ..._0x1233f9) {
        const _0x13cd8e = {
          id: ++_0x49d3bd(this, _0x2b17ea)._,
          origin: _0x47e5e2(this, _0x561446)
        };
        const _0xdac52c = new Promise((_0x25c561, _0xf5df4f) => {
          let _0x18df4a = setTimeout(() => _0xf5df4f(new Error("RPC timed out | " + _0x1f60db)), 6e4);
          var _0x1ac80d = {
            resolve: _0x25c561,
            reject: _0xf5df4f,
            timeout: _0x18df4a
          };
          _0x47e5e2(this, _0x3e159f).set(_0x13cd8e.id, _0x1ac80d);
        });
        _0xdac52c.finally(() => _0x47e5e2(this, _0x3e159f).delete(_0x13cd8e.id));
        _0x1ec034(this, _0x11b294, _0x27db66).call(this, "__rpc_req:" + _0x1f60db, _0x47e5e2(this, _0x56091d).encode(_0x13cd8e), _0x1233f9);
        return _0xdac52c;
      }
      executeCustom(_0x1b2c8c, _0x167326, ..._0x5972da) {
        const _0x11b63c = {
          id: ++_0x49d3bd(this, _0x2b17ea)._,
          origin: _0x47e5e2(this, _0x561446)
        };
        const _0x3b6297 = new Promise((_0x1fef28, _0x3166b2) => {
          let _0x586005 = setTimeout(() => _0x3166b2(new Error("RPC timed out | " + _0x1b2c8c)), _0x167326.timeout ?? 6e4);
          var _0x2e7661 = {
            resolve: _0x1fef28,
            reject: _0x3166b2,
            timeout: _0x586005
          };
          _0x47e5e2(this, _0x3e159f).set(_0x11b63c.id, _0x2e7661);
        });
        _0x3b6297.finally(() => _0x47e5e2(this, _0x3e159f).delete(_0x11b63c.id));
        _0x1ec034(this, _0x11b294, _0x27db66).call(this, "__rpc_req:" + _0x1b2c8c, _0x47e5e2(this, _0x56091d).encode(_0x11b63c), _0x5972da);
        return _0x3b6297;
      }
    };
    _0x452379 = /* @__PURE__ */ new WeakMap();
    _0x3e159f = /* @__PURE__ */ new WeakMap();
    _0xea7ed3 = /* @__PURE__ */ new WeakMap();
    _0x2b17ea = /* @__PURE__ */ new WeakMap();
    _0x561446 = /* @__PURE__ */ new WeakMap();
    _0x56091d = /* @__PURE__ */ new WeakMap();
    _0x10001e = /* @__PURE__ */ new WeakSet();
    _0x254f27 = function(_0xad8f83, _0x239609) {
      const _0x9b9f2d = _0x47e5e2(this, _0x56091d).hashString(_0xad8f83);
      onNet(_0x9b9f2d, _0x239609);
      const _0x407771 = _0x47e5e2(this, _0x56091d).hashString(_0xad8f83 + "-c");
      onNet(_0x407771, (_0xbd17cf) => {
        const _0x1dd400 = _0x2ad271.inflate(new Uint8Array(_0xbd17cf));
        const _0x3d8265 = msgpack_unpack(_0x1dd400);
        return _0x239609(..._0x3d8265);
      });
    };
    _0x11b294 = /* @__PURE__ */ new WeakSet();
    _0x27db66 = function(_0x553dea, ..._0x94528) {
      let _0x114ea9 = msgpack_pack(_0x94528);
      let _0x3bd3aa = _0x114ea9.length;
      const _0x2cc2a4 = _0x47e5e2(this, _0x56091d).hashString(_0x553dea);
      if (_0x3bd3aa < 16e3) {
        TriggerServerEventInternal(_0x2cc2a4, _0x114ea9, _0x114ea9.length);
      } else {
        TriggerLatentServerEventInternal(_0x2cc2a4, _0x114ea9, _0x114ea9.length, 1024e3);
      }
    };
    _0x2579fb = /* @__PURE__ */ new WeakSet();
    _0x125055 = function() {
      if (_0x47e5e2(this, _0x452379)) {
        return _0x1349fc.error("SDK RPC handlers already initialized");
      }
      _0x1ec034(this, _0x10001e, _0x254f27).call(this, "__rpc_res:" + _0x47e5e2(this, _0x561446), (_0x5ccef8, [_0x3a3dc2, _0x126af1]) => {
        const _0x3edbfa = _0x47e5e2(this, _0x3e159f).get(_0x5ccef8);
        if (!_0x3edbfa) {
          return;
        }
        clearTimeout(_0x3edbfa.timeout);
        if (_0x3a3dc2) {
          _0x3edbfa.resolve(_0x126af1);
        } else {
          _0x3edbfa.reject(new Error(_0x126af1));
        }
      });
      _0x33011a(this, _0x452379, true);
      _0x1349fc.debug("SDK RPC handlers initialized");
    };
    var _0x38f759 = new _0x43a874();
    var _0x1db59e = _0x279169(_0x477ea6());
    var _0x4773c5 = (_0x572653 = 128) => {
      return _0x1db59e.lib.WordArray.random(_0x572653 / 8).toString();
    };
    var _0x393d26 = (_0x3343ed, _0x26720a) => {
      if (typeof _0x3343ed !== "string" || typeof _0x26720a !== "string") {
        return "";
      }
      return _0x1db59e.AES.encrypt(_0x3343ed, _0x26720a).toString();
    };
    var _0x3e11f4 = (_0x74a49, _0x4963a0) => {
      if (typeof _0x74a49 !== "string" || typeof _0x4963a0 !== "string") {
        return "";
      }
      return _0x1db59e.AES.decrypt(_0x74a49, _0x4963a0).toString(_0x1db59e.enc.Utf8);
    };
    var _0x40705b = (_0x3f892f) => {
      if (typeof _0x3f892f !== "string") {
        return "";
      }
      return _0x1db59e.enc.Base64.stringify(_0x1db59e.enc.Utf8.parse(_0x3f892f));
    };
    var _0x2ae11a = (_0x5c3c30, _0x22ac40) => {
      return _0x40705b((0, _0x1db59e.HmacMD5)(_0x5c3c30, _0x22ac40).toString());
    };
    var _0x5ea1c9 = {};
    var _0x5c48b0 = (_0x209157, _0x25c241 = _0x4773c5()) => {
      if (_0x5ea1c9[_0x209157] === void 0) {
        _0x5ea1c9[_0x209157] = _0x2ae11a(_0x209157, _0x25c241);
      }
      return _0x5ea1c9[_0x209157];
    };
    var _0x40b9f6 = (_0x279aec, _0x757ee0 = _0x4773c5()) => {
      try {
        return _0x393d26(JSON.stringify(_0x279aec), _0x757ee0);
      } catch (_0x58e752) {
        console.error("Failed to encode payload");
      }
    };
    var _0x997ebd = (_0x38fda0, _0x5f3972 = _0x4773c5()) => {
      try {
        return JSON.parse(_0x3e11f4(_0x38fda0, _0x5f3972));
      } catch (_0x263ab3) {
        console.error("Failed to decode payload");
      }
    };
    var _0x286d90;
    var _0x2616d1;
    var _0x49c9d8;
    var _0x3e4f98;
    var _0x30d259;
    var _0x1a7220;
    var _0x2fa47f;
    var _0x49e49b;
    var _0x4464a6;
    var _0x3a4c8e;
    var _0x266a53;
    var _0x3214de;
    var _0x5888c6;
    var _0x1cdbca;
    var _0x195084;
    var _0x24b253;
    var _0x4c5c17;
    var _0x1a76c0;
    var _0x5f1e01 = class {
      constructor() {
        _0x34720d(this, _0x4464a6);
        _0x34720d(this, _0x266a53);
        _0x34720d(this, _0x5888c6);
        _0x34720d(this, _0x195084);
        _0x34720d(this, _0x4c5c17);
        _0x34720d(this, _0x286d90, void 0);
        _0x34720d(this, _0x2616d1, void 0);
        _0x34720d(this, _0x49c9d8, void 0);
        _0x34720d(this, _0x3e4f98, void 0);
        _0x34720d(this, _0x30d259, void 0);
        _0x34720d(this, _0x1a7220, void 0);
        _0x34720d(this, _0x2fa47f, void 0);
        _0x34720d(this, _0x49e49b, void 0);
        _0x33011a(this, _0x286d90, GetCurrentResourceName());
        _0x33011a(this, _0x2616d1, _0x4773c5(64));
        _0x33011a(this, _0x49c9d8, _0x4773c5(64));
        _0x33011a(this, _0x3e4f98, _0x4773c5(64));
        _0x33011a(this, _0x30d259, false);
        _0x33011a(this, _0x1a7220, 0);
        _0x33011a(this, _0x2fa47f, []);
        _0x33011a(this, _0x49e49b, /* @__PURE__ */ new Map());
        _0x1ec034(this, _0x4464a6, _0x3a4c8e).call(this, "__npx_sdk:init", _0x1ec034(this, _0x4c5c17, _0x1a76c0).bind(this));
      }
      async register(_0x4ab5ef, _0x1a133c) {
        _0x1ec034(this, _0x266a53, _0x3214de).call(this, "__nui_req:" + _0x4ab5ef, async (_0x43e466, _0x2aa4a8) => {
          let _0x414b61;
          let _0x57ef1b;
          const _0x44bb06 = _0x997ebd(_0x43e466, _0x47e5e2(this, _0x49c9d8));
          if (!(_0x44bb06 == null ? void 0 : _0x44bb06.id) || !(_0x44bb06 == null ? void 0 : _0x44bb06.resource)) {
            return _0x1349fc.error("[NUI] " + _0x4ab5ef + " - Invalid metadata received");
          }
          try {
            _0x414b61 = await _0x1a133c(..._0x2aa4a8);
            _0x57ef1b = true;
          } catch (_0x4e8408) {
            _0x414b61 = _0x4e8408.message;
            _0x57ef1b = false;
          }
          _0x1ec034(this, _0x195084, _0x24b253).call(this, "__nui_res:" + _0x44bb06.resource, _0x44bb06.id, [_0x57ef1b, _0x414b61]);
        });
      }
      remove(_0xd078fe) {
        const _0x3b1ba1 = _0x5c48b0("__nui_req:" + _0xd078fe, _0x47e5e2(this, _0x2616d1));
        UnregisterRawNuiCallback(_0x3b1ba1);
      }
      async execute(_0x282d72, ..._0x189557) {
        const _0x39bcbd = {
          id: ++_0x49d3bd(this, _0x1a7220)._,
          resource: _0x47e5e2(this, _0x286d90)
        };
        const _0x3b8f9b = new Promise((_0x34d0f5, _0x413312) => {
          let _0x3c5458;
          if (_0x47e5e2(this, _0x30d259)) {
            _0x3c5458 = setTimeout(() => _0x413312(new Error("RPC timed out | " + _0x282d72)), 6e4);
          } else {
            _0x3c5458 = 0;
          }
          var _0xa67e1e = {
            resolve: _0x34d0f5,
            reject: _0x413312,
            timeout: _0x3c5458
          };
          _0x47e5e2(this, _0x49e49b).set(_0x39bcbd.id, _0xa67e1e);
        });
        _0x3b8f9b.finally(() => _0x47e5e2(this, _0x49e49b).delete(_0x39bcbd.id));
        if (!_0x47e5e2(this, _0x30d259)) {
          var _0x357756 = {
            type: "execute",
            event: "__nui_req:" + _0x282d72,
            metadata: _0x39bcbd,
            args: _0x189557
          };
          _0x47e5e2(this, _0x2fa47f).push(_0x357756);
        } else {
          _0x1ec034(this, _0x195084, _0x24b253).call(this, "__nui_req:" + _0x282d72, _0x40b9f6(_0x39bcbd, _0x47e5e2(this, _0x3e4f98)), _0x189557);
        }
        return _0x3b8f9b;
      }
      async executeCustom(_0x5b28e1, _0x35eac4, ..._0x30a100) {
        const _0x55cbad = {
          id: ++_0x49d3bd(this, _0x1a7220)._,
          resource: _0x47e5e2(this, _0x286d90)
        };
        const _0x2954f0 = new Promise((_0x1a718e, _0x1ca845) => {
          let _0x40ce61;
          if (_0x47e5e2(this, _0x30d259)) {
            _0x40ce61 = setTimeout(() => _0x1ca845(new Error("RPC timed out | " + _0x5b28e1)), _0x35eac4.timeout ?? 6e4);
          } else {
            _0x40ce61 = 0;
          }
          var _0x4dfaec = {
            resolve: _0x1a718e,
            reject: _0x1ca845,
            timeout: _0x40ce61
          };
          _0x47e5e2(this, _0x49e49b).set(_0x55cbad.id, _0x4dfaec);
        });
        _0x2954f0.finally(() => _0x47e5e2(this, _0x49e49b).delete(_0x55cbad.id));
        if (!_0x47e5e2(this, _0x30d259)) {
          var _0xf287f8 = {
            type: "execute",
            event: "__nui_req:" + _0x5b28e1,
            metadata: _0x55cbad,
            args: _0x30a100
          };
          _0x47e5e2(this, _0x2fa47f).push(_0xf287f8);
        } else {
          _0x1ec034(this, _0x195084, _0x24b253).call(this, "__nui_req:" + _0x5b28e1, _0x40b9f6(_0x55cbad, _0x47e5e2(this, _0x3e4f98)), _0x30a100);
        }
        return _0x2954f0;
      }
    };
    _0x286d90 = /* @__PURE__ */ new WeakMap();
    _0x2616d1 = /* @__PURE__ */ new WeakMap();
    _0x49c9d8 = /* @__PURE__ */ new WeakMap();
    _0x3e4f98 = /* @__PURE__ */ new WeakMap();
    _0x30d259 = /* @__PURE__ */ new WeakMap();
    _0x1a7220 = /* @__PURE__ */ new WeakMap();
    _0x2fa47f = /* @__PURE__ */ new WeakMap();
    _0x49e49b = /* @__PURE__ */ new WeakMap();
    _0x4464a6 = /* @__PURE__ */ new WeakSet();
    _0x3a4c8e = function(_0x11e54e, _0x70ee3a) {
      RegisterNuiCallback(_0x11e54e, ({
        args: _0xf0791a
      }, _0x2c691c) => {
        _0x2c691c(true);
        return _0x70ee3a(..._0xf0791a);
      });
    };
    _0x266a53 = /* @__PURE__ */ new WeakSet();
    _0x3214de = function(_0x17eb1b, _0x211d77) {
      if (_0x47e5e2(this, _0x30d259)) {
        const _0x27f0ce = _0x5c48b0(_0x17eb1b, _0x47e5e2(this, _0x2616d1));
        return _0x1ec034(this, _0x4464a6, _0x3a4c8e).call(this, _0x27f0ce, _0x211d77);
      }
      var _0x1a0699 = {
        type: "on",
        event: _0x17eb1b,
        callback: _0x211d77
      };
      _0x47e5e2(this, _0x2fa47f).push(_0x1a0699);
    };
    _0x5888c6 = /* @__PURE__ */ new WeakSet();
    _0x1cdbca = function(_0x2239b6, ..._0x4b9fbf) {
      var _0x6b4333 = {
        event: _0x2239b6,
        args: _0x4b9fbf
      };
      SendNuiMessage(JSON.stringify(_0x6b4333, null));
    };
    _0x195084 = /* @__PURE__ */ new WeakSet();
    _0x24b253 = function(_0x385928, ..._0x52f066) {
      if (_0x47e5e2(this, _0x30d259)) {
        const _0x332653 = _0x5c48b0(_0x385928, _0x47e5e2(this, _0x2616d1));
        return _0x1ec034(this, _0x5888c6, _0x1cdbca).call(this, _0x332653, ..._0x52f066);
      }
      var _0x501d96 = {
        type: "emit",
        event: _0x385928,
        args: _0x52f066
      };
      _0x47e5e2(this, _0x2fa47f).push(_0x501d96);
    };
    _0x4c5c17 = /* @__PURE__ */ new WeakSet();
    _0x1a76c0 = async function() {
      _0x33011a(this, _0x30d259, true);
      _0x1ec034(this, _0x266a53, _0x3214de).call(this, "__nui_res:" + _0x47e5e2(this, _0x286d90), (_0x4e9c2f, [_0xecc9a3, _0x470e78]) => {
        const _0x54af7e = _0x47e5e2(this, _0x49e49b).get(_0x4e9c2f);
        if (!_0x54af7e) {
          return _0x1349fc.error("[NUI] Invalid response received");
        }
        clearTimeout(_0x54af7e.timeout);
        if (_0xecc9a3) {
          _0x54af7e.resolve(_0x470e78);
        } else {
          _0x54af7e.reject(_0x470e78);
        }
      });
      _0x1ec034(this, _0x5888c6, _0x1cdbca).call(this, "__npx_sdk:ready", _0x40705b(_0x47e5e2(this, _0x2616d1) + ":" + _0x47e5e2(this, _0x49c9d8) + ":" + _0x47e5e2(this, _0x3e4f98)));
      _0x1349fc.debug("[NUI] SDK initialized");
      for (const _0x57dfb6 of _0x47e5e2(this, _0x2fa47f)) {
        if (_0x57dfb6.type === "on") {
          _0x1ec034(this, _0x266a53, _0x3214de).call(this, _0x57dfb6.event, _0x57dfb6.callback);
        } else if (_0x57dfb6.type === "emit") {
          setTimeout(() => _0x1ec034(this, _0x195084, _0x24b253).call(this, _0x57dfb6.event, ..._0x57dfb6.args), 1e3);
        } else if (_0x57dfb6.type === "execute") {
          const _0x3f9657 = _0x47e5e2(this, _0x49e49b).get(_0x57dfb6.metadata.id);
          if (!_0x3f9657) {
            _0x1349fc.error("[RPC] " + _0x57dfb6.event + " - Failed to execute queued RPC call");
            continue;
          }
          _0x3f9657.timeout = setTimeout(() => _0x3f9657.reject(new Error("RPC timed out | " + _0x57dfb6.event)), 6e4);
          setTimeout(() => _0x1ec034(this, _0x195084, _0x24b253).call(this, _0x57dfb6.event, _0x40b9f6(_0x57dfb6.metadata, _0x47e5e2(this, _0x3e4f98)), _0x57dfb6.args), 1e3);
        }
      }
    };
    var _0x40a06c;
    var _0x18ec8f;
    var _0x1aeba6;
    var _0x48e4e8 = class {
      constructor(_0x1bbbd5) {
        _0x34720d(this, _0x40a06c, void 0);
        _0x34720d(this, _0x18ec8f, void 0);
        _0x34720d(this, _0x1aeba6, /* @__PURE__ */ new Map());
        _0x33011a(this, _0x40a06c, _0x1bbbd5);
        _0x33011a(this, _0x18ec8f, false);
        const _0x5e5444 = GetCurrentResourceName();
        on("onResourceStop", (_0xbd7bc9) => {
          if (_0xbd7bc9 === _0x5e5444) {
            for (const [_0xaedacb, _0x421e3c] of _0x47e5e2(this, _0x1aeba6).entries()) {
              _0x27d38c.Sync[_0x47e5e2(this, _0x40a06c)].removeNuiEvent(_0xaedacb);
            }
          }
        });
        on("onResourceStart", async (_0x2c091a) => {
          if (_0x2c091a === _0x47e5e2(this, _0x40a06c)) {
            await _0x2ad271.waitForCondition(() => GetResourceState(_0x47e5e2(this, _0x40a06c)) === "started", 1e4);
            if (_0x47e5e2(this, _0x18ec8f)) {
              for (const [_0x14f7cd, _0x21e0dc] of _0x47e5e2(this, _0x1aeba6).entries()) {
                _0x27d38c.Sync[_0x47e5e2(this, _0x40a06c)].removeNuiEvent(_0x14f7cd);
                this.register(_0x14f7cd, _0x21e0dc);
              }
            }
            _0x33011a(this, _0x18ec8f, true);
          }
          if (_0x2c091a === _0x5e5444) {
            await _0x2ad271.waitForCondition(() => GetResourceState(_0x47e5e2(this, _0x40a06c)) === "started", 1e4);
            _0x33011a(this, _0x18ec8f, true);
          }
        });
      }
      async execute(_0xb6d0c9, ..._0x1e8f4a) {
        return await _0x27d38c.Async[_0x47e5e2(this, _0x40a06c)].sendNuiEvent(_0xb6d0c9, _0x1e8f4a);
      }
      async register(_0x2f9748, _0x2deeee) {
        await _0x2ad271.waitForCondition(() => _0x47e5e2(this, _0x18ec8f), 1e4);
        const _0x152a0d = _0x27d38c.Sync[_0x47e5e2(this, _0x40a06c)].registerNuiEvent(_0x2f9748, _0x2deeee);
        if (_0x152a0d) {
          _0x47e5e2(this, _0x1aeba6).set(_0x2f9748, _0x2deeee);
        }
      }
    };
    _0x40a06c = /* @__PURE__ */ new WeakMap();
    _0x18ec8f = /* @__PURE__ */ new WeakMap();
    _0x1aeba6 = /* @__PURE__ */ new WeakMap();
    var _0x3f2805 = class {
      constructor() {
        const _0x18dcfb = async (_0x1d7335, _0xc79352) => {
          return await _0xd77dcf.execute(_0x1d7335, ..._0xc79352);
        };
        _0x27d38c.Async("sendNuiEvent", _0x18dcfb);
        const _0x3a8477 = (_0x49e1fa, _0x5271cb) => {
          _0xd77dcf.register(_0x49e1fa, _0x5271cb);
          return true;
        };
        _0x27d38c.Sync("registerNuiEvent", _0x3a8477);
        const _0x8adc43 = (_0x201814) => {
          _0xd77dcf.remove(_0x201814);
        };
        _0x27d38c.Sync("removeNuiEvent", _0x8adc43);
      }
    };
    var _0x4eb667 = null;
    var _0x493707 = null;
    var _0xd77dcf = new _0x5f1e01();
    var _0x2c05c8;
    var _0x1fe349;
    var _0x5ec12c;
    var _0x30bfa3 = class {
      constructor() {
        _0x34720d(this, _0x2c05c8, void 0);
        _0x34720d(this, _0x1fe349, void 0);
        _0x34720d(this, _0x5ec12c, void 0);
        _0x33011a(this, _0x5ec12c, false);
        _0xd77dcf.register("__npx_sdk:sockets:init", async () => {
          _0x1349fc.debug("Sockets", "Initializing sockets...");
          if (_0x47e5e2(this, _0x5ec12c)) {
            return {
              url: _0x47e5e2(this, _0x2c05c8),
              API_KEY: _0x47e5e2(this, _0x1fe349)
            };
          }
          const _0x171675 = await new Promise((_0x3c94e6) => {
            emit("__npx_core:sockets:init", _0x3c94e6);
          });
          if (!(_0x171675 == null ? void 0 : _0x171675.API_URL) || !(_0x171675 == null ? void 0 : _0x171675.API_KEY)) {
            return;
          }
          _0x33011a(this, _0x2c05c8, _0x171675.API_URL);
          _0x33011a(this, _0x1fe349, _0x171675.API_KEY);
          _0x33011a(this, _0x5ec12c, true);
          _0x1349fc.debug("Sockets", "Sockets initialized.");
          return _0x171675;
        });
      }
      register(_0x2823c7, _0x53c9fc) {
        _0xd77dcf.execute("__npx_sdk:sockets:register", _0x2823c7);
        _0xd77dcf.register("__npx_sdk:sockets:pipe:" + _0x2823c7, async (_0x4e4e8e) => {
          return _0x53c9fc(_0x4e4e8e);
        });
      }
      async execute(_0x4c7c09, _0xff7010) {
        return _0xd77dcf.execute("__npx_sdk:sockets:execute", _0x4c7c09, _0xff7010);
      }
    };
    _0x2c05c8 = /* @__PURE__ */ new WeakMap();
    _0x1fe349 = /* @__PURE__ */ new WeakMap();
    _0x5ec12c = /* @__PURE__ */ new WeakMap();
    var _0x363cce = new _0x30bfa3();
    var _0x3b5fd8 = {
      HasItem: async (_0x89382e, _0x2a3be8) => {
        return await _0x27d38c.Sync.inventory.HasItem(_0x89382e, _0x2a3be8);
      },
      GetItemStacks: async (_0x5d7084, _0x2487cc) => {
        return await _0x27d38c.Sync.inventory.GetItemStacks(_0x5d7084, _0x2487cc);
      },
      GetAllItemStacks: async (_0x49ed1d) => {
        return await _0x27d38c.Sync.inventory.GetAllItemStacks(_0x49ed1d);
      },
      GetItemList: async () => {
        return await _0x27d38c.Sync.inventory.GetItemList();
      },
      GetPlayerInventories: async () => {
        return await _0x27d38c.Sync.inventory.GetPlayerInventories();
      },
      GetPlayerInventoriesWeight: async () => {
        return await _0x27d38c.Sync.inventory.GetPlayerInventoriesWeight();
      },
      GetWeaponsList: () => {
        return _0x27d38c.Sync.inventory.GetWeaponsList();
      },
      GetWeapon: (_0x43efa5) => {
        return _0x27d38c.Sync.inventory.GetWeapon(_0x43efa5);
      },
      GetWeaponByItemStack: (_0x3f7a15) => {
        return _0x27d38c.Sync.inventory.GetWeaponByItemStack(_0x3f7a15);
      },
      OpenInventory: (_0x145e9d, _0x2e8008) => {
        _0x27d38c.Sync.inventory.OpenInventory(_0x145e9d, _0x2e8008);
      },
      UseBodySlot: (_0x25bb43) => {
        return _0x27d38c.Async.inventory.UseBodySlot(_0x25bb43);
      },
      SetBodySlotDisabled: (_0x39fe95, _0x581770, _0x48f3e5) => {
        _0x27d38c.Sync.inventory.SetBodySlotDisabled(_0x39fe95, _0x581770, _0x48f3e5);
      },
      IsBodySlotDisabled: (_0x1d085c, _0x322a89) => {
        return _0x27d38c.Sync.inventory.IsBodySlotDisabled(_0x1d085c, _0x322a89);
      }
    };
    var _0x1b7be6 = {};
    var _0xbda8ae = {
      Activity: () => _0x415fbe,
      ActivityObjective: () => _0x11870d,
      ActivityTask: () => _0x279632,
      Cache: () => _0x46f738,
      Group: () => _0x15aa4a,
      GroupManager: () => _0x59c345,
      GroupMember: () => _0x4a798d,
      PolyZone: () => _0x4877d3,
      Thread: () => _0x49cfb9,
      Vector2: () => _0x44da80,
      Vector3: () => _0x58b2dd
    };
    _0x57b916(_0x1b7be6, _0xbda8ae);
    var _0x49cfb9 = class {
      constructor(_0x59344c, _0x2d550b, _0x2ea3a7 = "interval") {
        this.callback = _0x59344c;
        this.delay = _0x2d550b;
        this.mode = _0x2ea3a7;
        this.scheduled = {};
        this.tick = 0;
        this.data = {};
        this.active = false;
        this.aborted = false;
        this.hooks = /* @__PURE__ */ new Map([["active", []], ["preStop", []], ["preStart", []], ["afterStop", []], ["afterStart", []], ["stopAborted", []], ["startAborted", []]]);
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
        const _0x41b935 = this.hooks.get("preStart") ?? [];
        try {
          for (const _0x7c47d5 of _0x41b935) {
            if (!this.aborted) {
              await _0x7c47d5.call(this);
            }
          }
        } catch (_0x20a7f5) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", _0x20a7f5.message);
        }
        if (this.aborted) {
          try {
            const _0x558dd0 = this.hooks.get("startAborted") ?? [];
            for (const _0x4db416 of _0x558dd0) {
              await _0x4db416.call(this);
            }
          } catch (_0x519db3) {
            console.log("Error while calling start-aborted hook", _0x519db3.message);
          }
          return;
        }
        this.active = true;
        const _0x5b9eb0 = this.hooks.get("active") ?? [];
        switch (this.mode) {
          case "tick": {
            this.threadId = setTick(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const _0x3071cb of _0x5b9eb0) {
                  await _0x3071cb.call(this);
                }
              } catch (_0x186d90) {
                console.log("Error while calling active hook", _0x186d90.message);
              }
              if (this.delay > 0) {
                await new Promise((_0x21fa2d) => setTimeout(_0x21fa2d, this.delay));
              }
            });
            break;
          }
          case "interval": {
            this.threadId = setInterval(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const _0x3cd4ef of _0x5b9eb0) {
                  await _0x3cd4ef.call(this);
                }
              } catch (_0x38e55b) {
                console.log("Error while calling active hook", _0x38e55b.message);
              }
            }, this.delay);
            break;
          }
          case "timeout": {
            const _0x1584c8 = () => {
              if (this.active) {
                this.threadId = setTimeout(async () => {
                  this.tick += 1;
                  try {
                    await this.callback.call(this);
                    for (const _0x1de796 of _0x5b9eb0) {
                      await _0x1de796.call(this);
                    }
                  } catch (_0x2460e1) {
                    console.log("Error while calling active hook", _0x2460e1.message);
                  }
                  return _0x1584c8();
                }, this.delay);
              }
            };
            _0x1584c8();
            break;
          }
        }
        const _0x56b88e = this.hooks.get("afterStart") ?? [];
        try {
          for (const _0x435201 of _0x56b88e) {
            await _0x435201.call(this);
          }
        } catch (_0x2ca86c) {
          console.log("Error while calling after-start hook", _0x2ca86c.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const _0x1ad0c5 = this.hooks.get("preStop") ?? [];
        try {
          for (const _0x114f7b of _0x1ad0c5) {
            if (!this.aborted) {
              await _0x114f7b.call(this);
            }
          }
        } catch (_0x503342) {
          this.aborted = true;
          console.log("Error while calling pre-stop hook", _0x503342.message);
        }
        this.active = false;
        switch (this.mode) {
          case "tick": {
            clearTick(this.threadId);
            break;
          }
          case "interval": {
            clearInterval(this.threadId);
            break;
          }
          case "timeout": {
            clearTimeout(this.threadId);
            break;
          }
        }
        if (this.aborted) {
          try {
            const _0x349244 = this.hooks.get("stopAborted") ?? [];
            for (const _0x499b77 of _0x349244) {
              await _0x499b77.call(this);
            }
          } catch (_0x329c39) {
            console.log("Error while calling stop-aborted hook", _0x329c39.message);
          }
          return;
        }
        const _0x54f972 = this.hooks.get("afterStop") ?? [];
        try {
          for (const _0x55d0f9 of _0x54f972) {
            await _0x55d0f9.call(this);
          }
        } catch (_0x2319a5) {
          console.log("Error while calling after-stop hook", _0x2319a5.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(_0xfedd59, _0x13d6e0) {
        var _0x28285a;
        if ((_0x28285a = this.hooks.get(_0xfedd59)) == null) {
        } else {
          _0x28285a.push(_0x13d6e0);
        }
      }
      setNextTick(_0x13d347, _0x444804) {
        this.scheduled[_0x13d347] = this.tick + _0x444804;
      }
      canTick(_0x14d388) {
        return this.scheduled[_0x14d388] === void 0 || this.tick >= this.scheduled[_0x14d388];
      }
    };
    var _0x2ae85d;
    var _0x3fb479;
    var _0x463327;
    var _0x2e55ad;
    var _0x54b162;
    var _0x2be8f6;
    var _0x1d5e51;
    var _0x37875c;
    var _0x519fd1;
    var _0xf5776;
    var _0x279632 = class {
      constructor(_0x177143, _0x5a68fd) {
        _0x34720d(this, _0x1d5e51);
        _0x34720d(this, _0x519fd1);
        _0x34720d(this, _0x2ae85d, void 0);
        _0x34720d(this, _0x3fb479, void 0);
        _0x34720d(this, _0x463327, void 0);
        _0x34720d(this, _0x2e55ad, void 0);
        _0x34720d(this, _0x54b162, void 0);
        _0x34720d(this, _0x2be8f6, void 0);
        _0x33011a(this, _0x2ae85d, _0x177143.id);
        _0x33011a(this, _0x3fb479, _0x5a68fd);
        _0x33011a(this, _0x463327, /* @__PURE__ */ new Map());
        _0x33011a(this, _0x2be8f6, "pending");
        _0x33011a(this, _0x2e55ad, _0x177143.required.map((_0x4f6c20) => _0x5a68fd.objectives.get(_0x4f6c20)));
        _0x33011a(this, _0x54b162, new Map(_0x177143.objectives.map((_0x528aa4) => [_0x528aa4, _0x5a68fd.objectives.get(_0x528aa4)])));
        if (_0x177143.status !== "pending") {
          setTimeout(() => _0x1ec034(this, _0x1d5e51, _0x37875c).call(this, _0x177143.status), 3e3);
        }
        _0x539aaf.onNet("__npx_activities:" + _0x47e5e2(this, _0x3fb479).id + ":task:" + _0x47e5e2(this, _0x2ae85d) + ":statusUpdate", _0x1ec034(this, _0x1d5e51, _0x37875c).bind(this));
      }
      get id() {
        return _0x47e5e2(this, _0x2ae85d);
      }
      onTaskStarted(_0x4f725c) {
        const _0x1949e6 = _0x47e5e2(this, _0x463327).get("onTaskStarted") ?? [];
        if (!_0x47e5e2(this, _0x463327).has("onTaskStarted")) {
          _0x47e5e2(this, _0x463327).set("onTaskStarted", _0x1949e6);
        }
        _0x1949e6.push(_0x4f725c);
      }
      onTaskEnded(_0x22d78f) {
        const _0x402f14 = _0x47e5e2(this, _0x463327).get("onTaskEnded") ?? [];
        if (!_0x47e5e2(this, _0x463327).has("onTaskEnded")) {
          _0x47e5e2(this, _0x463327).set("onTaskEnded", _0x402f14);
        }
        _0x402f14.push(_0x22d78f);
      }
      emitEvent(_0x44c32b, ..._0x220ed0) {
        return _0x38f759.execute("__npx_activities:" + _0x47e5e2(this, _0x3fb479).id + ":task:" + _0x47e5e2(this, _0x2ae85d) + ":event", _0x44c32b, ..._0x220ed0);
      }
      toJSON() {
        return {
          id: _0x47e5e2(this, _0x2ae85d),
          status: _0x47e5e2(this, _0x2be8f6),
          objectives: [..._0x47e5e2(this, _0x54b162).keys()],
          required: _0x47e5e2(this, _0x2e55ad).map((_0x4bb938) => _0x4bb938.id)
        };
      }
      destroy() {
        _0x47e5e2(this, _0x463327).clear();
      }
    };
    _0x2ae85d = /* @__PURE__ */ new WeakMap();
    _0x3fb479 = /* @__PURE__ */ new WeakMap();
    _0x463327 = /* @__PURE__ */ new WeakMap();
    _0x2e55ad = /* @__PURE__ */ new WeakMap();
    _0x54b162 = /* @__PURE__ */ new WeakMap();
    _0x2be8f6 = /* @__PURE__ */ new WeakMap();
    _0x1d5e51 = /* @__PURE__ */ new WeakSet();
    _0x37875c = function(_0x4c36d1) {
      const _0x138bd8 = _0x47e5e2(this, _0x2be8f6);
      _0x33011a(this, _0x2be8f6, _0x4c36d1);
      if (_0x138bd8 === "pending" && _0x4c36d1 === "active") {
        _0x1ec034(this, _0x519fd1, _0xf5776).call(this, "onTaskStarted");
      } else if (_0x138bd8 === "active" && (_0x4c36d1 === "completed" || _0x4c36d1 === "failed")) {
        _0x1ec034(this, _0x519fd1, _0xf5776).call(this, "onTaskEnded", _0x4c36d1 === "completed");
      }
      _0x1ec034(this, _0x519fd1, _0xf5776).call(this, "onStatusUpdate", _0x4c36d1);
    };
    _0x519fd1 = /* @__PURE__ */ new WeakSet();
    _0xf5776 = function(_0x1f4c3d, ..._0x451c4d) {
      const _0x257486 = _0x47e5e2(this, _0x463327).get(_0x1f4c3d);
      if (!_0x257486) {
        return;
      }
      for (const _0x413a6d of _0x257486) {
        try {
          _0x413a6d.call(this, ..._0x451c4d);
        } catch (_0x31be38) {
          console.error(_0x31be38);
        }
      }
    };
    var _0x2a2fcb;
    var _0x6df5ac;
    var _0x552109;
    var _0x513eb9;
    var _0x4770d5;
    var _0xe6deb2;
    var _0x6f774;
    var _0x4ee9d7;
    var _0x4cceba;
    var _0x1cbfcf;
    var _0xed236f;
    var _0x12d391;
    var _0x23db93;
    var _0x3478e1;
    var _0x112a07;
    var _0x11870d = class {
      constructor(_0x4d99f4, _0x15ebd7) {
        _0x34720d(this, _0x4ee9d7);
        _0x34720d(this, _0x1cbfcf);
        _0x34720d(this, _0x12d391);
        _0x34720d(this, _0x3478e1);
        _0x34720d(this, _0x2a2fcb, void 0);
        _0x34720d(this, _0x6df5ac, void 0);
        _0x34720d(this, _0x552109, void 0);
        _0x34720d(this, _0x513eb9, void 0);
        _0x34720d(this, _0x4770d5, void 0);
        _0x34720d(this, _0xe6deb2, void 0);
        _0x34720d(this, _0x6f774, void 0);
        _0x33011a(this, _0x2a2fcb, _0x4d99f4.id);
        _0x33011a(this, _0x6df5ac, _0x4d99f4.name);
        _0x33011a(this, _0x552109, _0x4d99f4.description);
        _0x33011a(this, _0x513eb9, _0x15ebd7);
        _0x33011a(this, _0x4770d5, /* @__PURE__ */ new Map());
        _0x33011a(this, _0xe6deb2, _0x4d99f4.status);
        _0x33011a(this, _0x6f774, new Map(Object.entries(_0x4d99f4.data ?? {})));
        _0x539aaf.onNet("__npx_activities:" + _0x47e5e2(this, _0x513eb9).id + ":objective:" + _0x47e5e2(this, _0x2a2fcb) + ":statusUpdate", _0x1ec034(this, _0x4ee9d7, _0x4cceba).bind(this));
        _0x539aaf.onNet("__npx_activities:" + _0x47e5e2(this, _0x513eb9).id + ":objective:" + _0x47e5e2(this, _0x2a2fcb) + ":dataUpdate", _0x1ec034(this, _0x1cbfcf, _0xed236f).bind(this));
        _0x539aaf.onNet("__npx_activities:" + _0x47e5e2(this, _0x513eb9).id + ":objective:" + _0x47e5e2(this, _0x2a2fcb) + ":dataSet", _0x1ec034(this, _0x12d391, _0x23db93).bind(this));
      }
      get id() {
        return _0x47e5e2(this, _0x2a2fcb);
      }
      get name() {
        return _0x47e5e2(this, _0x6df5ac);
      }
      get description() {
        return _0x47e5e2(this, _0x552109);
      }
      get status() {
        return _0x47e5e2(this, _0xe6deb2);
      }
      get activity() {
        return _0x47e5e2(this, _0x513eb9);
      }
      getData(_0x1bd017) {
        return _0x47e5e2(this, _0x6f774).get(_0x1bd017);
      }
      onStatusUpdate(_0x1fb836) {
        const _0x458e63 = _0x47e5e2(this, _0x4770d5).get("onStatusUpdate") ?? [];
        if (!_0x47e5e2(this, _0x4770d5).has("onStatusUpdate")) {
          _0x47e5e2(this, _0x4770d5).set("onStatusUpdate", _0x458e63);
        }
        _0x458e63.push(_0x1fb836);
      }
      onDataUpdate(_0x133447) {
        const _0x1c30af = _0x47e5e2(this, _0x4770d5).get("onDataUpdate") ?? [];
        if (!_0x47e5e2(this, _0x4770d5).has("onDataUpdate")) {
          _0x47e5e2(this, _0x4770d5).set("onDataUpdate", _0x1c30af);
        }
        _0x1c30af.push(_0x133447);
      }
      toJSON() {
        return {
          id: _0x47e5e2(this, _0x2a2fcb),
          name: _0x47e5e2(this, _0x6df5ac),
          description: _0x47e5e2(this, _0x552109),
          status: _0x47e5e2(this, _0xe6deb2),
          data: Object.fromEntries(_0x47e5e2(this, _0x6f774))
        };
      }
      destroy() {
        _0x47e5e2(this, _0x4770d5).clear();
      }
    };
    _0x2a2fcb = /* @__PURE__ */ new WeakMap();
    _0x6df5ac = /* @__PURE__ */ new WeakMap();
    _0x552109 = /* @__PURE__ */ new WeakMap();
    _0x513eb9 = /* @__PURE__ */ new WeakMap();
    _0x4770d5 = /* @__PURE__ */ new WeakMap();
    _0xe6deb2 = /* @__PURE__ */ new WeakMap();
    _0x6f774 = /* @__PURE__ */ new WeakMap();
    _0x4ee9d7 = /* @__PURE__ */ new WeakSet();
    _0x4cceba = function(_0x5d714d) {
      _0x33011a(this, _0xe6deb2, _0x5d714d);
      _0x1ec034(this, _0x3478e1, _0x112a07).call(this, "onStatusUpdated", _0x5d714d);
    };
    _0x1cbfcf = /* @__PURE__ */ new WeakSet();
    _0xed236f = function(_0x27bb0b, _0x22684a) {
      _0x47e5e2(this, _0x6f774).set(_0x27bb0b, _0x22684a);
      _0x1ec034(this, _0x3478e1, _0x112a07).call(this, "onDataUpdate", _0x27bb0b, _0x22684a);
    };
    _0x12d391 = /* @__PURE__ */ new WeakSet();
    _0x23db93 = function(_0xce06ac) {
      for (const [_0xf1d74e, _0x364628] of Object.entries(_0xce06ac)) {
        _0x47e5e2(this, _0x6f774).set(_0xf1d74e, _0x364628);
        _0x1ec034(this, _0x3478e1, _0x112a07).call(this, "onDataUpdate", _0xf1d74e, _0x364628);
      }
    };
    _0x3478e1 = /* @__PURE__ */ new WeakSet();
    _0x112a07 = function(_0x46aeeb, ..._0xd6d0) {
      const _0x566eda = _0x47e5e2(this, _0x4770d5).get(_0x46aeeb);
      if (!_0x566eda) {
        return;
      }
      for (const _0x3db07a of _0x566eda) {
        try {
          _0x3db07a.call(this, ..._0xd6d0);
        } catch (_0x170a17) {
          console.error(_0x170a17);
        }
      }
    };
    var _0x4f9a32;
    var _0x15d266;
    var _0x8d82c3;
    var _0x11bd5c;
    var _0x2160c1;
    var _0x16c148;
    var _0x145704;
    var _0x40a93b;
    var _0x1ae9bb;
    var _0x34a43f;
    var _0x2dd04c;
    var _0x36a30d;
    var _0x48cf8c;
    var _0x58cfde;
    var _0x377841;
    var _0x1cf69f;
    var _0x2d6f29;
    var _0x1d2b8e;
    var _0x31ba79;
    var _0x81fc3;
    var _0x168923;
    var _0x415fbe = class {
      constructor(_0x21c292) {
        _0x34720d(this, _0x34a43f);
        _0x34720d(this, _0x36a30d);
        _0x34720d(this, _0x58cfde);
        _0x34720d(this, _0x1cf69f);
        _0x34720d(this, _0x1d2b8e);
        _0x34720d(this, _0x81fc3);
        _0x34720d(this, _0x4f9a32, void 0);
        _0x34720d(this, _0x15d266, void 0);
        _0x34720d(this, _0x8d82c3, void 0);
        _0x34720d(this, _0x11bd5c, void 0);
        _0x34720d(this, _0x2160c1, void 0);
        _0x34720d(this, _0x16c148, void 0);
        _0x34720d(this, _0x145704, void 0);
        _0x34720d(this, _0x40a93b, void 0);
        _0x34720d(this, _0x1ae9bb, void 0);
        _0x33011a(this, _0x4f9a32, _0x21c292.id);
        _0x33011a(this, _0x15d266, _0x21c292.code);
        _0x33011a(this, _0x8d82c3, _0x21c292.name);
        _0x33011a(this, _0x11bd5c, _0x21c292.description);
        _0x33011a(this, _0x2160c1, /* @__PURE__ */ new Map());
        _0x33011a(this, _0x16c148, "pending");
        _0x33011a(this, _0x145704, _0x21c292.deadline ? new Date(_0x21c292.deadline) : null);
        _0x33011a(this, _0x40a93b, /* @__PURE__ */ new Map());
        _0x33011a(this, _0x1ae9bb, /* @__PURE__ */ new Map());
        if (_0x21c292.status !== "pending") {
          setTimeout(() => _0x1ec034(this, _0x34a43f, _0x2dd04c).call(this, _0x21c292.status), 3e3);
        }
        _0x21c292.objectives.forEach((_0x2359e8) => _0x1ec034(this, _0x36a30d, _0x48cf8c).call(this, _0x2359e8));
        _0x21c292.tasks.forEach((_0x3e85a7) => _0x1ec034(this, _0x1cf69f, _0x2d6f29).call(this, _0x3e85a7));
        _0x539aaf.onNet("__npx_activities:" + _0x47e5e2(this, _0x4f9a32) + ":statusUpdate", _0x1ec034(this, _0x34a43f, _0x2dd04c).bind(this));
        _0x539aaf.onNet("__npx_activities:" + _0x47e5e2(this, _0x4f9a32) + ":objectiveAdded", _0x1ec034(this, _0x36a30d, _0x48cf8c).bind(this));
        _0x539aaf.onNet("__npx_activities:" + _0x47e5e2(this, _0x4f9a32) + ":objectiveRemoved", _0x1ec034(this, _0x58cfde, _0x377841).bind(this));
        _0x539aaf.onNet("__npx_activities:" + _0x47e5e2(this, _0x4f9a32) + ":taskAdded", _0x1ec034(this, _0x1cf69f, _0x2d6f29).bind(this));
        _0x539aaf.onNet("__npx_activities:" + _0x47e5e2(this, _0x4f9a32) + ":taskRemoved", _0x1ec034(this, _0x1d2b8e, _0x31ba79).bind(this));
      }
      get id() {
        return _0x47e5e2(this, _0x4f9a32);
      }
      get status() {
        return _0x47e5e2(this, _0x16c148);
      }
      get objectives() {
        return _0x47e5e2(this, _0x1ae9bb);
      }
      on(_0xf962a6, _0x2a31cf) {
        const _0x5ee01a = _0x47e5e2(this, _0x2160c1).get(_0xf962a6) ?? [];
        if (!_0x47e5e2(this, _0x2160c1).has(_0xf962a6)) {
          _0x47e5e2(this, _0x2160c1).set(_0xf962a6, _0x5ee01a);
        }
        _0x5ee01a.push(_0x2a31cf);
      }
      toJSON() {
        var _0x560985;
        return {
          id: _0x47e5e2(this, _0x4f9a32),
          code: _0x47e5e2(this, _0x15d266),
          name: _0x47e5e2(this, _0x8d82c3),
          description: _0x47e5e2(this, _0x11bd5c),
          status: _0x47e5e2(this, _0x16c148),
          deadline: ((_0x560985 = _0x47e5e2(this, _0x145704)) == null ? void 0 : _0x560985.getTime()) ?? null,
          tasks: [..._0x47e5e2(this, _0x40a93b).values()].map((_0x5a254c) => _0x5a254c.toJSON()),
          objectives: [..._0x47e5e2(this, _0x1ae9bb).values()].map((_0xf9aa66) => _0xf9aa66.toJSON())
        };
      }
      destroy() {
        _0x47e5e2(this, _0x40a93b).forEach((_0x4dc84f) => _0x4dc84f.destroy());
        _0x47e5e2(this, _0x1ae9bb).forEach((_0x4f0a11) => _0x4f0a11.destroy());
        _0x47e5e2(this, _0x40a93b).clear();
        _0x47e5e2(this, _0x1ae9bb).clear();
        _0x47e5e2(this, _0x2160c1).clear();
      }
    };
    _0x4f9a32 = /* @__PURE__ */ new WeakMap();
    _0x15d266 = /* @__PURE__ */ new WeakMap();
    _0x8d82c3 = /* @__PURE__ */ new WeakMap();
    _0x11bd5c = /* @__PURE__ */ new WeakMap();
    _0x2160c1 = /* @__PURE__ */ new WeakMap();
    _0x16c148 = /* @__PURE__ */ new WeakMap();
    _0x145704 = /* @__PURE__ */ new WeakMap();
    _0x40a93b = /* @__PURE__ */ new WeakMap();
    _0x1ae9bb = /* @__PURE__ */ new WeakMap();
    _0x34a43f = /* @__PURE__ */ new WeakSet();
    _0x2dd04c = function(_0x56b48b) {
      const _0x38938c = _0x47e5e2(this, _0x16c148);
      _0x33011a(this, _0x16c148, _0x56b48b);
      if (_0x38938c === "pending" && _0x56b48b === "active") {
        _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onActivityStarted");
      } else if (_0x56b48b === "completed" || _0x56b48b === "failed") {
        _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onActivityEnded", _0x56b48b, _0x56b48b === "completed");
      }
      _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onStatusUpdate", _0x56b48b);
    };
    _0x36a30d = /* @__PURE__ */ new WeakSet();
    _0x48cf8c = function(_0x473a78) {
      const _0x4d07d9 = new _0x11870d(_0x473a78, this);
      _0x4d07d9.onStatusUpdate((_0x4c435c) => _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onObjectiveStatusUpdate", _0x4d07d9, _0x4c435c));
      _0x4d07d9.onDataUpdate((_0x43ab34, _0x59b85d) => _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onObjectiveDataUpdate", _0x4d07d9, _0x43ab34, _0x59b85d));
      _0x47e5e2(this, _0x1ae9bb).set(_0x4d07d9.id, _0x4d07d9);
      _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onObjectiveAdded", _0x4d07d9);
    };
    _0x58cfde = /* @__PURE__ */ new WeakSet();
    _0x377841 = function(_0xf99bf7) {
      const _0x1ce214 = _0x47e5e2(this, _0x1ae9bb).get(_0xf99bf7.id);
      if (!_0x1ce214) {
        return;
      }
      _0x47e5e2(this, _0x1ae9bb).delete(_0xf99bf7.id);
      _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onObjectiveRemoved", _0x1ce214);
      _0x1ce214.destroy();
    };
    _0x1cf69f = /* @__PURE__ */ new WeakSet();
    _0x2d6f29 = function(_0x41ffa2) {
      const _0x507d4c = new _0x279632(_0x41ffa2, this);
      _0x507d4c.onTaskStarted(() => _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onTaskStarted", _0x507d4c));
      _0x507d4c.onTaskEnded((_0x201304) => _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onTaskEnded", _0x507d4c, _0x201304));
      _0x47e5e2(this, _0x40a93b).set(_0x507d4c.id, _0x507d4c);
      _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onTaskAdded", _0x507d4c);
    };
    _0x1d2b8e = /* @__PURE__ */ new WeakSet();
    _0x31ba79 = function(_0x487489) {
      const _0x2eb945 = _0x47e5e2(this, _0x40a93b).get(_0x487489.id);
      if (!_0x2eb945) {
        return;
      }
      _0x47e5e2(this, _0x40a93b).delete(_0x487489.id);
      _0x1ec034(this, _0x81fc3, _0x168923).call(this, "onTaskRemoved", _0x2eb945);
      _0x2eb945.destroy();
    };
    _0x81fc3 = /* @__PURE__ */ new WeakSet();
    _0x168923 = function(_0x65dc0, ..._0x3549a3) {
      const _0x2b66b0 = _0x47e5e2(this, _0x2160c1).get(_0x65dc0);
      if (!_0x2b66b0) {
        return;
      }
      for (const _0x13036f of _0x2b66b0) {
        try {
          _0x13036f.call(this, ..._0x3549a3);
        } catch (_0x141a4c) {
          console.error(_0x141a4c);
        }
      }
    };
    var _0x47c5a9;
    var _0x4b3ebc;
    var _0x40a1d6;
    var _0x4fd7b5;
    var _0x1a5785;
    var _0x391466;
    var _0x359709;
    var _0x584529;
    var _0x5efb90;
    var _0x427c1a;
    var _0x325d20;
    var _0x1e583c;
    var _0x1347e4;
    var _0x13eb6c;
    var _0x43426b;
    var _0x15ccda;
    var _0x4d303c;
    var _0x1d5975;
    var _0xd483a;
    var _0x41795b;
    var _0x2a1864;
    var _0x434767;
    var _0x15aa4a = class {
      constructor(_0xb26add) {
        _0x34720d(this, _0x5efb90);
        _0x34720d(this, _0x325d20);
        _0x34720d(this, _0x1347e4);
        _0x34720d(this, _0x43426b);
        _0x34720d(this, _0x4d303c);
        _0x34720d(this, _0xd483a);
        _0x34720d(this, _0x2a1864);
        _0x34720d(this, _0x47c5a9, void 0);
        _0x34720d(this, _0x4b3ebc, void 0);
        _0x34720d(this, _0x40a1d6, void 0);
        _0x34720d(this, _0x4fd7b5, void 0);
        _0x34720d(this, _0x1a5785, void 0);
        _0x34720d(this, _0x391466, void 0);
        _0x34720d(this, _0x359709, void 0);
        _0x34720d(this, _0x584529, void 0);
        _0x33011a(this, _0x47c5a9, _0xb26add.id);
        _0x33011a(this, _0x40a1d6, /* @__PURE__ */ new Map());
        _0x33011a(this, _0x4fd7b5, _0xb26add.name);
        _0x33011a(this, _0x1a5785, _0xb26add.capacity);
        _0x33011a(this, _0x359709, null);
        _0x33011a(this, _0x584529, new Map(Object.entries(_0xb26add.data)));
        _0x33011a(this, _0x4b3ebc, /* @__PURE__ */ new Map());
        _0x33011a(this, _0x391466, null);
        for (const _0x41f381 of _0xb26add.members) {
          const _0xaf944 = new _0x4a798d(_0x41f381, this);
          _0x47e5e2(this, _0x4b3ebc).set(_0xaf944.characterId, _0xaf944);
          if (_0x41f381.isLeader) {
            _0x33011a(this, _0x391466, _0xaf944);
          }
        }
        if (_0xb26add.activity) {
          setTimeout(() => _0x1ec034(this, _0xd483a, _0x41795b).call(this, _0xb26add.activity), 3e3);
        }
        _0x539aaf.onNet("__npx_groups:group:" + _0x47e5e2(this, _0x47c5a9) + ":data:update", _0x1ec034(this, _0x325d20, _0x1e583c).bind(this));
        _0x539aaf.onNet("__npx_groups:group:" + _0x47e5e2(this, _0x47c5a9) + ":activity:set", _0x1ec034(this, _0xd483a, _0x41795b).bind(this));
        _0x539aaf.onNet("__npx_groups:group:" + _0x47e5e2(this, _0x47c5a9) + ":group:update", _0x1ec034(this, _0x5efb90, _0x427c1a).bind(this));
        _0x539aaf.onNet("__npx_groups:group:" + _0x47e5e2(this, _0x47c5a9) + ":member:joined", _0x1ec034(this, _0x1347e4, _0x13eb6c).bind(this));
        _0x539aaf.onNet("__npx_groups:group:" + _0x47e5e2(this, _0x47c5a9) + ":member:left", _0x1ec034(this, _0x43426b, _0x15ccda).bind(this));
        _0x539aaf.onNet("__npx_groups:group:" + _0x47e5e2(this, _0x47c5a9) + ":member:update", _0x1ec034(this, _0x4d303c, _0x1d5975).bind(this));
      }
      get id() {
        return _0x47e5e2(this, _0x47c5a9);
      }
      get name() {
        return _0x47e5e2(this, _0x4fd7b5);
      }
      get capacity() {
        return _0x47e5e2(this, _0x1a5785);
      }
      get size() {
        return _0x47e5e2(this, _0x4b3ebc).size;
      }
      get leader() {
        return _0x47e5e2(this, _0x391466);
      }
      get members() {
        return [..._0x47e5e2(this, _0x4b3ebc).values()];
      }
      get activity() {
        return _0x47e5e2(this, _0x359709);
      }
      on(_0x39faf1, _0x421979) {
        const _0x325386 = _0x47e5e2(this, _0x40a1d6).get(_0x39faf1) ?? [];
        if (!_0x47e5e2(this, _0x40a1d6).has(_0x39faf1)) {
          _0x47e5e2(this, _0x40a1d6).set(_0x39faf1, _0x325386);
        }
        _0x325386.push(_0x421979);
      }
      getValue(_0x4d71b4) {
        return _0x47e5e2(this, _0x584529).get(_0x4d71b4);
      }
      toJSON() {
        var _0xc8a36;
        return {
          id: _0x47e5e2(this, _0x47c5a9),
          name: _0x47e5e2(this, _0x4fd7b5),
          capacity: _0x47e5e2(this, _0x1a5785),
          activity: ((_0xc8a36 = _0x47e5e2(this, _0x359709)) == null ? void 0 : _0xc8a36.toJSON()) ?? null,
          members: [..._0x47e5e2(this, _0x4b3ebc).values()].map((_0x10ae82) => _0x10ae82.toJSON()),
          data: Object.fromEntries(_0x47e5e2(this, _0x584529))
        };
      }
      destroy() {
        _0x47e5e2(this, _0x40a1d6).clear();
        _0x47e5e2(this, _0x4b3ebc).clear();
        _0x47e5e2(this, _0x584529).clear();
      }
    };
    _0x47c5a9 = /* @__PURE__ */ new WeakMap();
    _0x4b3ebc = /* @__PURE__ */ new WeakMap();
    _0x40a1d6 = /* @__PURE__ */ new WeakMap();
    _0x4fd7b5 = /* @__PURE__ */ new WeakMap();
    _0x1a5785 = /* @__PURE__ */ new WeakMap();
    _0x391466 = /* @__PURE__ */ new WeakMap();
    _0x359709 = /* @__PURE__ */ new WeakMap();
    _0x584529 = /* @__PURE__ */ new WeakMap();
    _0x5efb90 = /* @__PURE__ */ new WeakSet();
    _0x427c1a = function(_0x324540) {
      _0x33011a(this, _0x4fd7b5, _0x324540.name);
      _0x33011a(this, _0x1a5785, _0x324540.capacity);
      _0x1ec034(this, _0x2a1864, _0x434767).call(this, "group:update", this);
    };
    _0x325d20 = /* @__PURE__ */ new WeakSet();
    _0x1e583c = function(_0x36cd9d, _0x38f2ea) {
      _0x47e5e2(this, _0x584529).set(_0x36cd9d, _0x38f2ea);
      _0x1ec034(this, _0x2a1864, _0x434767).call(this, "data:update", _0x36cd9d, _0x38f2ea);
    };
    _0x1347e4 = /* @__PURE__ */ new WeakSet();
    _0x13eb6c = function(_0x4ca739) {
      const _0x14e063 = new _0x4a798d(_0x4ca739, this);
      _0x47e5e2(this, _0x4b3ebc).set(_0x14e063.characterId, _0x14e063);
      _0x1ec034(this, _0x2a1864, _0x434767).call(this, "member:joined", _0x14e063);
    };
    _0x43426b = /* @__PURE__ */ new WeakSet();
    _0x15ccda = function(_0x2af237) {
      const _0x3aab8a = _0x47e5e2(this, _0x4b3ebc).get(_0x2af237);
      if (!_0x3aab8a) {
        return;
      }
      _0x47e5e2(this, _0x4b3ebc).delete(_0x2af237);
      if (_0x47e5e2(this, _0x391466) === _0x3aab8a) {
        _0x33011a(this, _0x391466, null);
      }
      _0x1ec034(this, _0x2a1864, _0x434767).call(this, "member:left", _0x3aab8a);
    };
    _0x4d303c = /* @__PURE__ */ new WeakSet();
    _0x1d5975 = function(_0x2539f7, _0x3d2a31, _0x2d6c3a) {
      const _0x7fe565 = _0x47e5e2(this, _0x4b3ebc).get(_0x2539f7);
      if (!_0x7fe565) {
        return;
      }
      if (_0x7fe565.serverId !== _0x3d2a31) {
        _0x7fe565.updateServerId(_0x3d2a31);
      }
      if (_0x2d6c3a) {
        _0x33011a(this, _0x391466, _0x7fe565);
      }
      _0x1ec034(this, _0x2a1864, _0x434767).call(this, "member:update", _0x7fe565);
    };
    _0xd483a = /* @__PURE__ */ new WeakSet();
    _0x41795b = function(_0x5c178a) {
      const _0x326fc8 = _0x5c178a ? new _0x415fbe(_0x5c178a) : null;
      _0x33011a(this, _0x359709, _0x326fc8);
      _0x1ec034(this, _0x2a1864, _0x434767).call(this, "activity:set", _0x326fc8);
    };
    _0x2a1864 = /* @__PURE__ */ new WeakSet();
    _0x434767 = function(_0x4e5b0e, ..._0xe20809) {
      const _0x2d325b = _0x47e5e2(this, _0x40a1d6).get(_0x4e5b0e);
      if (!_0x2d325b) {
        return;
      }
      for (const _0x58f19c of _0x2d325b) {
        try {
          _0x58f19c.call(this, ..._0xe20809);
        } catch (_0x5cb8d8) {
          console.error(_0x5cb8d8);
        }
      }
    };
    var _0x260ddc;
    var _0x4a4d4f;
    var _0x59e4b9;
    var _0x44d368;
    var _0x4a798d = class {
      constructor(_0x3404ca, _0x32c36a) {
        _0x34720d(this, _0x260ddc, void 0);
        _0x34720d(this, _0x4a4d4f, void 0);
        _0x34720d(this, _0x59e4b9, void 0);
        _0x34720d(this, _0x44d368, void 0);
        _0x33011a(this, _0x260ddc, _0x3404ca.characterId);
        _0x33011a(this, _0x4a4d4f, _0x3404ca.name);
        _0x33011a(this, _0x59e4b9, _0x32c36a);
        _0x33011a(this, _0x44d368, _0x3404ca.serverId);
      }
      get group() {
        return _0x47e5e2(this, _0x59e4b9);
      }
      get characterId() {
        return _0x47e5e2(this, _0x260ddc);
      }
      get name() {
        return _0x47e5e2(this, _0x4a4d4f);
      }
      get serverId() {
        return _0x47e5e2(this, _0x44d368);
      }
      get isOnline() {
        return _0x47e5e2(this, _0x44d368) !== null;
      }
      get isLeader() {
        return _0x47e5e2(this, _0x59e4b9).leader === this;
      }
      updateServerId(_0x381eab) {
        _0x33011a(this, _0x44d368, _0x381eab);
      }
      toJSON() {
        return {
          characterId: _0x47e5e2(this, _0x260ddc),
          serverId: _0x47e5e2(this, _0x44d368),
          name: _0x47e5e2(this, _0x4a4d4f),
          isLeader: this.isLeader,
          isOnline: this.isOnline
        };
      }
    };
    _0x260ddc = /* @__PURE__ */ new WeakMap();
    _0x4a4d4f = /* @__PURE__ */ new WeakMap();
    _0x59e4b9 = /* @__PURE__ */ new WeakMap();
    _0x44d368 = /* @__PURE__ */ new WeakMap();
    var _0x543ee6;
    var _0x452726;
    var _0x489a26;
    var _0x460920;
    var _0xbff9ee;
    var _0x536c07;
    var _0x422ec0;
    var _0x15421e;
    var _0x2c80d0;
    var _0x59c345 = class {
      constructor(_0x5f4545) {
        _0x34720d(this, _0x460920);
        _0x34720d(this, _0x536c07);
        _0x34720d(this, _0x15421e);
        _0x34720d(this, _0x543ee6, void 0);
        _0x34720d(this, _0x452726, void 0);
        _0x34720d(this, _0x489a26, void 0);
        _0x33011a(this, _0x543ee6, _0x5f4545 ?? GetCurrentResourceName());
        _0x33011a(this, _0x452726, /* @__PURE__ */ new Map());
        _0x33011a(this, _0x489a26, /* @__PURE__ */ new Map());
        _0x539aaf.onNet("__npx_groups:manager:" + _0x47e5e2(this, _0x543ee6) + ":addedToGroup", _0x1ec034(this, _0x460920, _0xbff9ee).bind(this));
        _0x539aaf.onNet("__npx_groups:manager:" + _0x47e5e2(this, _0x543ee6) + ":removedFromGroup", _0x1ec034(this, _0x536c07, _0x422ec0).bind(this));
        on("np-base:clearStates", this.reset.bind(this));
        on("np-spawn:characterSpawned", this.init.bind(this));
        const _0xcb941e = _0x27d38c.Sync.isPed.isPed("cid");
        if (_0xcb941e) {
          this.init();
        }
      }
      get list() {
        return _0x47e5e2(this, _0x452726);
      }
      async init() {
        if (_0x47e5e2(this, _0x452726).size > 0) {
          this.reset();
        }
        const _0x59dc66 = await _0x38f759.execute("__npx_groups:manager:" + _0x47e5e2(this, _0x543ee6) + ":init");
        if (!_0x59dc66) {
          return;
        }
        for (const _0x4d21f9 of _0x59dc66) {
          _0x1ec034(this, _0x460920, _0xbff9ee).call(this, _0x4d21f9);
        }
        _0x1349fc.debug("[Group Manager] Initialized! | Groups: " + _0x47e5e2(this, _0x452726).size);
      }
      reset() {
        _0x47e5e2(this, _0x452726).forEach((_0x47810b) => _0x47810b.destroy());
        _0x47e5e2(this, _0x452726).clear();
      }
      on(_0x9915e8, _0x20321d) {
        const _0x1a4ea4 = _0x47e5e2(this, _0x489a26).get(_0x9915e8) ?? [];
        if (!_0x47e5e2(this, _0x489a26).has(_0x9915e8)) {
          _0x47e5e2(this, _0x489a26).set(_0x9915e8, _0x1a4ea4);
        }
        _0x1a4ea4.push(_0x20321d);
      }
    };
    _0x543ee6 = /* @__PURE__ */ new WeakMap();
    _0x452726 = /* @__PURE__ */ new WeakMap();
    _0x489a26 = /* @__PURE__ */ new WeakMap();
    _0x460920 = /* @__PURE__ */ new WeakSet();
    _0xbff9ee = function(_0x16ca16) {
      const _0x435431 = new _0x15aa4a(_0x16ca16);
      _0x435431.on("activity:set", (_0x232903) => _0x232903 && _0x1ec034(this, _0x15421e, _0x2c80d0).call(this, "activityAssigned", _0x435431, _0x232903));
      _0x47e5e2(this, _0x452726).set(_0x435431.id, _0x435431);
      _0x1ec034(this, _0x15421e, _0x2c80d0).call(this, "addedToGroup", _0x435431);
    };
    _0x536c07 = /* @__PURE__ */ new WeakSet();
    _0x422ec0 = function(_0x45563e) {
      const _0x2db711 = _0x47e5e2(this, _0x452726).get(_0x45563e);
      if (!_0x2db711) {
        return;
      }
      _0x47e5e2(this, _0x452726).delete(_0x45563e);
      _0x2db711.destroy();
      _0x1ec034(this, _0x15421e, _0x2c80d0).call(this, "removedFromGroup", _0x2db711.id);
    };
    _0x15421e = /* @__PURE__ */ new WeakSet();
    _0x2c80d0 = function(_0xd2473d, ..._0x166e66) {
      const _0x34ee46 = _0x47e5e2(this, _0x489a26).get(_0xd2473d) ?? [];
      for (const _0xf38ac3 of _0x34ee46) {
        try {
          _0xf38ac3.call(this, ..._0x166e66);
        } catch (_0xfa7776) {
          console.error(_0xfa7776);
        }
      }
    };
    var _0x154c38 = {};
    var _0x50eddd = {
      GetEntityStateValue: () => _0x11d4d3,
      GetPlayerStateValue: () => _0x4e4c5f,
      RegisterStatebagChangeHandler: () => _0x23fef3,
      SetEntityStateValue: () => _0x26e4fe,
      SetPlayerStateValue: () => _0x126c64
    };
    _0x57b916(_0x154c38, _0x50eddd);
    var _0x4248d0 = new _0x46f738(5e3);
    function _0x3fa9ce(_0x4fdfc6) {
      let _0x32c439 = _0x4248d0.get("ent-" + _0x4fdfc6);
      if (_0x32c439) {
        return _0x32c439;
      }
      _0x32c439 = Entity(_0x4fdfc6);
      _0x4248d0.set("ent-" + _0x4fdfc6, _0x32c439);
      return _0x32c439;
    }
    function _0x11d4d3(_0x35ea14, _0x73c06f) {
      const _0x2085f0 = _0x3fa9ce(_0x35ea14);
      return _0x2085f0.state[_0x73c06f];
    }
    function _0x26e4fe(_0x585dbc, _0x5eac38, _0x2cf00c, _0x8603d0 = false) {
      const _0x1a2708 = _0x3fa9ce(_0x585dbc);
      _0x1a2708.state.set(_0x5eac38, _0x2cf00c, _0x8603d0);
    }
    function _0x2ab5c9(_0x5120da) {
      let _0x275bb7 = _0x4248d0.get("ply-" + _0x5120da);
      if (_0x275bb7) {
        return _0x275bb7;
      }
      _0x275bb7 = Player(_0x5120da);
      _0x4248d0.set("ply-" + _0x5120da, _0x275bb7);
      return _0x275bb7;
    }
    function _0x4e4c5f(_0x2b79a0, _0x216450) {
      const _0xe16169 = _0x2ab5c9(_0x2b79a0);
      return _0xe16169.state[_0x216450];
    }
    function _0x126c64(_0x5088fc, _0x271ea5, _0x5ec6d3, _0x2da779 = false) {
      const _0x41c2ed = _0x2ab5c9(_0x5088fc);
      _0x41c2ed.state.set(_0x271ea5, _0x5ec6d3, _0x2da779);
    }
    function _0x23fef3(_0x52cf43, _0x38910a, _0x286560, _0x454aa8) {
      return AddStateBagChangeHandler(_0x52cf43, null, async function(_0x4b7aeb, _0x39976f, _0x2a0145, _0x23a46b, _0x359be6) {
        if (_0x286560 && !_0x359be6) {
          return;
        }
        const _0x1148b8 = _0x4b7aeb.startsWith("player");
        const _0x2e58a4 = parseInt(_0x4b7aeb.substring(7));
        const _0x588a5a = _0x1148b8 ? GetPlayerFromStateBagName(_0x4b7aeb) : GetEntityFromStateBagName(_0x4b7aeb);
        if (!_0x588a5a) {
          return;
        }
        const _0x3557b4 = _0x1148b8 ? NetworkGetPlayerIndexFromPed(_0x588a5a) === PlayerId() : NetworkGetEntityOwner(_0x588a5a) === PlayerId();
        if (_0x38910a && !_0x3557b4) {
          return;
        }
        _0x454aa8(_0x2e58a4, _0x588a5a, _0x2a0145);
      });
    }
    var _0x4322aa = {};
    var _0x4440d1 = {
      GetFuelLevel: () => _0x25ae41,
      GetIdentifier: () => _0x61da32,
      GetMetadata: () => _0x2adbd1,
      HasKey: () => _0x1f32be,
      IsVinScratched: () => _0x459ec5,
      SwapSeat: () => _0x923979,
      TurnOffEngine: () => _0x2e9d1b,
      TurnOnEngine: () => _0x1e2c8d
    };
    _0x57b916(_0x4322aa, _0x4440d1);
    function _0x1e2c8d(_0x596d83) {
      _0x27d38c.Sync["np-vehicles"].TurnOnEngine(_0x596d83);
    }
    function _0x2e9d1b(_0x552046) {
      _0x27d38c.Sync["np-vehicles"].TurnOffEngine(_0x552046);
    }
    function _0x1f32be(_0x4f9801) {
      return _0x27d38c.Sync["np-vehicles"].HasVehicleKey(_0x4f9801);
    }
    function _0x2adbd1(_0x1a7102, _0x376c60) {
      const _0x1e4be1 = _0x11d4d3(_0x1a7102, "data");
      if (_0x376c60) {
        if (_0x1e4be1 == null) {
          return void 0;
        } else {
          return _0x1e4be1[_0x376c60];
        }
      } else {
        return _0x1e4be1;
      }
    }
    function _0x61da32(_0xfa636f) {
      return _0x11d4d3(_0xfa636f, "vin");
    }
    function _0x459ec5(_0x58a7e8) {
      return _0x11d4d3(_0x58a7e8, "vinScratched");
    }
    function _0x923979(_0x42e982, _0x34d6b1) {
      _0x27d38c.Sync["np-vehicles"].SwapVehicleSeat(_0x42e982, _0x34d6b1);
    }
    function _0x25ae41(_0x27bc36) {
      return _0x2adbd1(_0x27bc36, "fuel") ?? 0;
    }
    var _0x366910 = {};
    var _0x4adaee = {
      GetUIFocus: () => _0x27ee6f,
      RegisterUICallback: () => _0x15161b,
      SendUIAppMessage: () => _0x40740a,
      SendUIMessage: () => _0x318c9f,
      SetUIFocus: () => _0x4071fa
    };
    _0x57b916(_0x366910, _0x4adaee);
    var _0x313133 = [];
    function _0x15161b(_0x2aad62, _0x30ef25) {
      AddEventHandler("_npx_uiReq:" + _0x2aad62, _0x30ef25);
      exports["np-ui"].RegisterUIEvent(_0x2aad62);
      _0x313133.push(_0x2aad62);
    }
    function _0x318c9f(_0x182f3d) {
      exports["np-ui"].SendUIMessage(_0x182f3d);
    }
    function _0x40740a(_0x2f8192, _0x44fdc9) {
      var _0x1649d1 = {
        source: "np-nui",
        app: _0x2f8192,
        data: _0x44fdc9
      };
      exports["np-ui"].SendUIMessage(_0x1649d1);
    }
    function _0x4071fa(_0x128e31, _0x567bad) {
      exports["np-ui"].SetUIFocus(_0x128e31, _0x567bad);
    }
    function _0x27ee6f() {
      return exports["np-ui"].GetUIFocus();
    }
    AddEventHandler("_npx_uiReady", () => {
      _0x313133.forEach((_0x463c79) => exports["np-ui"].RegisterUIEvent(_0x463c79));
    });
    var _0x3635c8 = {};
    var _0x285cf5 = {
      Manager: () => _0x328dae
    };
    _0x57b916(_0x3635c8, _0x285cf5);
    var _0x2b4aee;
    var _0x5c4179;
    var _0x1d2022;
    var _0x4e9f4a;
    var _0x5c3090;
    var _0x1f7df6;
    var _0x169120;
    var _0x42fd71;
    var _0x152e34;
    var _0x14414f;
    var _0x129ed4;
    var _0x556007;
    var _0x1bb8eb;
    var _0x129f57;
    var _0x421838;
    var _0x5d48c6;
    var _0x3f6e09;
    var _0x2d2da4;
    var _0x18e423;
    var _0x41aff7;
    var _0x526528;
    var _0x279c1a;
    var _0x1aea55;
    var _0x12fbbe;
    var _0x24cfa0;
    var _0x421051;
    var _0x157cd3;
    var _0x3d150b;
    var _0x328dae = class {
      constructor(_0x324e97, _0xa185a8) {
        _0x34720d(this, _0x5c3090);
        _0x34720d(this, _0x169120);
        _0x34720d(this, _0x152e34);
        _0x34720d(this, _0x129ed4);
        _0x34720d(this, _0x1bb8eb);
        _0x34720d(this, _0x421838);
        _0x34720d(this, _0x3f6e09);
        _0x34720d(this, _0x18e423);
        _0x34720d(this, _0x526528);
        _0x34720d(this, _0x1aea55);
        _0x34720d(this, _0x24cfa0);
        _0x34720d(this, _0x157cd3);
        _0x34720d(this, _0x2b4aee, void 0);
        _0x34720d(this, _0x5c4179, void 0);
        _0x34720d(this, _0x1d2022, null);
        _0x34720d(this, _0x4e9f4a, void 0);
        _0x33011a(this, _0x2b4aee, _0x324e97);
        _0x33011a(this, _0x5c4179, _0xa185a8);
        _0x33011a(this, _0x4e9f4a, null);
        _0x47e5e2(this, _0x5c4179).on("addedToGroup", _0x1ec034(this, _0x1bb8eb, _0x129f57).bind(this));
        _0x47e5e2(this, _0x5c4179).on("removedFromGroup", _0x1ec034(this, _0x421838, _0x5d48c6).bind(this));
        _0x539aaf.on("jobs:app:ready", () => {
          if (!_0x47e5e2(this, _0x4e9f4a)) {
            return;
          }
          _0x1ec034(this, _0x3f6e09, _0x2d2da4).call(this, _0x47e5e2(this, _0x4e9f4a));
        });
        _0x539aaf.on("jobs:jobChanged", (_0x16c8fc) => {
          _0x33011a(this, _0x1d2022, _0x16c8fc);
          if (!_0x47e5e2(this, _0x4e9f4a)) {
            return;
          }
          const _0x3b4c3b = (_0x16c8fc == null ? void 0 : _0x16c8fc.id) === _0x47e5e2(this, _0x2b4aee);
          if (!_0x3b4c3b) {
            return _0x1ec034(this, _0x421838, _0x5d48c6).call(this, _0x47e5e2(this, _0x4e9f4a).id);
          }
          _0x1ec034(this, _0x3f6e09, _0x2d2da4).call(this, _0x47e5e2(this, _0x4e9f4a));
        });
        _0x539aaf.onNet("__npx_jobs:" + _0x47e5e2(this, _0x2b4aee) + ":groups:invite:request", _0x1ec034(this, _0x169120, _0x42fd71).bind(this));
        _0x539aaf.onNet("__npx_jobs:" + _0x47e5e2(this, _0x2b4aee) + ":groups:invite:received", _0x1ec034(this, _0x5c3090, _0x1f7df6).bind(this));
        _0x539aaf.onNet("__npx_jobs:" + _0x47e5e2(this, _0x2b4aee) + ":groups:invite:response", _0x1ec034(this, _0x152e34, _0x14414f).bind(this));
        _0x539aaf.onNet("__npx_jobs:" + _0x47e5e2(this, _0x2b4aee) + ":groups:invite:aborted", _0x1ec034(this, _0x129ed4, _0x556007).bind(this));
      }
      get group() {
        return _0x47e5e2(this, _0x4e9f4a);
      }
      async sendGroupInvite(_0x40b790) {
        if (!_0x47e5e2(this, _0x1d2022) || _0x47e5e2(this, _0x1d2022).id !== _0x47e5e2(this, _0x2b4aee)) {
          return;
        }
        const [_0x30d036, _0x50e049] = await _0x38f759.execute("jobs:app:" + _0x47e5e2(this, _0x2b4aee) + ":groups:invite:send", _0x40b790);
        if (!_0x30d036) {
          return _0x4c27ed.phoneNotification("Group Invite", _0x50e049, true);
        }
        _0x4c27ed.phoneNotification("Group Invite", "Invite sent!", true);
        _0x1349fc.debug("[Job APP] Invite sent! " + _0x50e049);
      }
      async sendGroupJoinRequest(_0x3b7810) {
        if (!_0x47e5e2(this, _0x1d2022) || _0x47e5e2(this, _0x1d2022).id !== _0x47e5e2(this, _0x2b4aee)) {
          return;
        }
        const [_0x289243, _0xdacf61] = await _0x38f759.execute("jobs:app:" + _0x47e5e2(this, _0x2b4aee) + ":groups:invite:request", _0x3b7810);
        if (!_0x289243) {
          return _0x4c27ed.phoneNotification("Group Invite", _0xdacf61, true);
        }
        _0x4c27ed.phoneNotification("Group Invite", "Join request sent!", true);
        _0x1349fc.debug("[Job APP] Join request sent! " + _0xdacf61);
      }
    };
    _0x2b4aee = /* @__PURE__ */ new WeakMap();
    _0x5c4179 = /* @__PURE__ */ new WeakMap();
    _0x1d2022 = /* @__PURE__ */ new WeakMap();
    _0x4e9f4a = /* @__PURE__ */ new WeakMap();
    _0x5c3090 = /* @__PURE__ */ new WeakSet();
    _0x1f7df6 = async function(_0x1a2099, _0x3ffa0f) {
      _0x1349fc.debug("[Job APP] Invite received! " + _0x1a2099 + " " + _0x3ffa0f);
      const _0x367cbc = 'Received an invite to join the group "' + _0x3ffa0f + '"';
      const _0x4c1b74 = await _0x4c27ed.phoneConfirmation("Group Invite", _0x367cbc, "users", 3e4);
      const [_0x46cd7e, _0x4ab9bb] = await _0x38f759.execute("jobs:app:" + _0x47e5e2(this, _0x2b4aee) + ":groups:invite:response", _0x1a2099, _0x4c1b74);
      if (!_0x46cd7e) {
        return _0x4c27ed.phoneNotification("Group Invite", _0x4ab9bb, true);
      }
    };
    _0x169120 = /* @__PURE__ */ new WeakSet();
    _0x42fd71 = async function(_0x1276c9, _0x532d18) {
      _0x1349fc.debug("[Job APP] Join request received! " + _0x1276c9 + " " + _0x532d18);
      const _0x1a7ce7 = "Received a group join request from " + _0x532d18;
      const _0x5a40b6 = await _0x4c27ed.phoneConfirmation("Group Invite", _0x1a7ce7, "users", 3e4);
      const [_0x2442e6, _0x22bf56] = await _0x38f759.execute("jobs:app:" + _0x47e5e2(this, _0x2b4aee) + ":groups:invite:response", _0x1276c9, _0x5a40b6);
      if (!_0x2442e6) {
        return _0x4c27ed.phoneNotification("Group Invite", _0x22bf56, true);
      }
    };
    _0x152e34 = /* @__PURE__ */ new WeakSet();
    _0x14414f = function(_0x2cf0ba, _0x2fee6a) {
      _0x1349fc.debug("[Job APP] Invite response received! " + _0x2cf0ba + " " + _0x2fee6a);
    };
    _0x129ed4 = /* @__PURE__ */ new WeakSet();
    _0x556007 = function(_0x43b7d0, _0x399b28) {
      _0x1349fc.debug("[Job APP] Invite aborted! " + _0x43b7d0 + " " + _0x399b28);
    };
    _0x1bb8eb = /* @__PURE__ */ new WeakSet();
    _0x129f57 = function(_0xe18ced) {
      _0x33011a(this, _0x4e9f4a, _0xe18ced);
      _0x47e5e2(this, _0x4e9f4a).on("group:update", _0x1ec034(this, _0x3f6e09, _0x2d2da4).bind(this));
      _0x47e5e2(this, _0x4e9f4a).on("activity:set", _0x1ec034(this, _0x24cfa0, _0x421051).bind(this, _0xe18ced));
      _0x47e5e2(this, _0x4e9f4a).on("data:update", _0x1ec034(this, _0x157cd3, _0x3d150b).bind(this, _0xe18ced));
      _0x47e5e2(this, _0x4e9f4a).on("member:joined", _0x1ec034(this, _0x18e423, _0x41aff7).bind(this, _0xe18ced));
      _0x47e5e2(this, _0x4e9f4a).on("member:left", _0x1ec034(this, _0x526528, _0x279c1a).bind(this, _0xe18ced));
      _0x47e5e2(this, _0x4e9f4a).on("member:update", _0x1ec034(this, _0x1aea55, _0x12fbbe).bind(this, _0xe18ced));
      _0x366910.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: _0x47e5e2(this, _0x2b4aee),
        group: _0xe18ced.toJSON()
      });
      _0x1349fc.debug("[Job APP] Added to group!");
    };
    _0x421838 = /* @__PURE__ */ new WeakSet();
    _0x5d48c6 = function(_0x5ce773) {
      _0x33011a(this, _0x4e9f4a, null);
      _0x366910.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: _0x47e5e2(this, _0x2b4aee),
        group: null
      });
      _0x1349fc.debug("[Job APP] Removed from group!");
    };
    _0x3f6e09 = /* @__PURE__ */ new WeakSet();
    _0x2d2da4 = function(_0x4308f9) {
      if (_0x47e5e2(this, _0x4e9f4a) !== _0x4308f9) {
        return _0x1349fc.warning("[Job APP] Attempted to update group " + _0x4308f9.id + " but it is not the current group!");
      }
      _0x366910.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: _0x47e5e2(this, _0x2b4aee),
        group: _0x4308f9.toJSON()
      });
      _0x1349fc.debug("[Job APP] Updated group!");
    };
    _0x18e423 = /* @__PURE__ */ new WeakSet();
    _0x41aff7 = function(_0x3a4dc6, _0x221286) {
      if (_0x47e5e2(this, _0x4e9f4a) !== _0x3a4dc6) {
        return _0x1349fc.warning("[Job APP] Attempted to update group " + _0x3a4dc6.id + " but it is not the current group!");
      }
      _0x366910.SendUIAppMessage("phone", {
        action: "jobs:group:addMember",
        jobId: _0x47e5e2(this, _0x2b4aee),
        groupId: _0x3a4dc6.id,
        member: _0x221286.toJSON()
      });
      _0x1349fc.debug("[Job APP] Added member to group!");
    };
    _0x526528 = /* @__PURE__ */ new WeakSet();
    _0x279c1a = function(_0x2ce410, _0x38d832) {
      if (_0x47e5e2(this, _0x4e9f4a) !== _0x2ce410) {
        return _0x1349fc.warning("[Job APP] Attempted to update group " + _0x2ce410.id + " but it is not the current group!");
      }
      _0x366910.SendUIAppMessage("phone", {
        action: "jobs:group:removeMember",
        jobId: _0x47e5e2(this, _0x2b4aee),
        groupId: _0x2ce410.id,
        memberId: _0x38d832.characterId
      });
      _0x1349fc.debug("[Job APP] Removed member from group!");
    };
    _0x1aea55 = /* @__PURE__ */ new WeakSet();
    _0x12fbbe = function(_0x3453bd, _0x1fbffc) {
      if (_0x47e5e2(this, _0x4e9f4a) !== _0x3453bd) {
        return _0x1349fc.warning("[Job APP] Attempted to update group " + _0x3453bd.id + " but it is not the current group!");
      }
      _0x366910.SendUIAppMessage("phone", {
        action: "jobs:group:updateMember",
        jobId: _0x47e5e2(this, _0x2b4aee),
        groupId: _0x3453bd.id,
        member: _0x1fbffc.toJSON()
      });
      _0x1349fc.debug("[Job APP] Updated member in group!");
    };
    _0x24cfa0 = /* @__PURE__ */ new WeakSet();
    _0x421051 = function(_0x1615c6, _0x408e9b) {
      if (_0x47e5e2(this, _0x4e9f4a) !== _0x1615c6) {
        return _0x1349fc.warning("[Job APP] Attempted to update group " + _0x1615c6.id + " but it is not the current group!");
      }
      const _0x30e377 = (_0x408e9b == null ? void 0 : _0x408e9b.toJSON()) ?? null;
      _0x366910.SendUIAppMessage("phone", {
        action: "jobs:group:updateActivity",
        jobId: _0x47e5e2(this, _0x2b4aee),
        groupId: _0x1615c6.id,
        activity: _0x30e377
      });
      _0x1349fc.debug("[Job APP] Updated activity for group!");
    };
    _0x157cd3 = /* @__PURE__ */ new WeakSet();
    _0x3d150b = function(_0x526613, _0xa78572, _0x257be5) {
      if (_0x47e5e2(this, _0x4e9f4a) !== _0x526613) {
        return _0x1349fc.warning("[Job APP] Attempted to update group " + _0x526613.id + " but it is not the current group!");
      } else if (_0xa78572 !== "status") {
        return;
      }
      _0x366910.SendUIAppMessage("phone", {
        action: "jobs:group:updateStatus",
        jobId: _0x47e5e2(this, _0x2b4aee),
        groupId: _0x526613.id,
        status: _0x257be5
      });
      _0x1349fc.debug("[Job APP] Updated status for group!");
    };
    var _0x46abd4 = async (_0x356a39) => {
      const _0x2701a7 = typeof _0x356a39 === "number" ? _0x356a39 : GetHashKey(_0x356a39);
      if (HasModelLoaded(_0x2701a7)) {
        return true;
      }
      RequestModel(_0x2701a7);
      const _0x1f3262 = await _0x2ad271.waitForCondition(() => HasModelLoaded(_0x2701a7), 3e3);
      return !_0x1f3262;
    };
    var _0x488350 = async (_0x50468b) => {
      if (HasAnimDictLoaded(_0x50468b)) {
        return true;
      }
      RequestAnimDict(_0x50468b);
      const _0x2edf92 = await _0x2ad271.waitForCondition(() => HasAnimDictLoaded(_0x50468b), 3e3);
      return !_0x2edf92;
    };
    var _0x5b5bae = async (_0x1079b0) => {
      if (HasClipSetLoaded(_0x1079b0)) {
        return true;
      }
      RequestClipSet(_0x1079b0);
      const _0x1c40e8 = await _0x2ad271.waitForCondition(() => HasClipSetLoaded(_0x1079b0), 3e3);
      return !_0x1c40e8;
    };
    var _0x35bd68 = async (_0x31c1d0) => {
      if (HasStreamedTextureDictLoaded(_0x31c1d0)) {
        return true;
      }
      RequestStreamedTextureDict(_0x31c1d0, true);
      const _0x37694a = await _0x2ad271.waitForCondition(() => HasStreamedTextureDictLoaded(_0x31c1d0), 3e3);
      return !_0x37694a;
    };
    var _0x5461c8 = async (_0x44f732, _0x21c002, _0x4d346d) => {
      const _0x506fd3 = typeof _0x44f732 === "number" ? _0x44f732 : GetHashKey(_0x44f732);
      if (HasWeaponAssetLoaded(_0x506fd3)) {
        return true;
      }
      RequestWeaponAsset(_0x506fd3, _0x21c002, _0x4d346d);
      const _0x7c6ddf = await _0x2ad271.waitForCondition(() => HasWeaponAssetLoaded(_0x506fd3), 3e3);
      return !_0x7c6ddf;
    };
    var _0x1ab985 = async (_0x4e176d) => {
      if (HasNamedPtfxAssetLoaded(_0x4e176d)) {
        return true;
      }
      RequestNamedPtfxAsset(_0x4e176d);
      const _0x3e4f9a = await _0x2ad271.waitForCondition(() => HasNamedPtfxAssetLoaded(_0x4e176d), 3e3);
      return !_0x3e4f9a;
    };
    var _0x10ab67 = {
      loadModel: _0x46abd4,
      loadTexture: _0x35bd68,
      loadAnim: _0x488350,
      loadClipSet: _0x5b5bae,
      loadWeaponAsset: _0x5461c8,
      loadNamedPtfxAsset: _0x1ab985
    };
    var _0x151c5c = _0x10ab67;
    var _0x41ad19 = (_0x3fabfd, ..._0x45fa54) => {
      switch (_0x3fabfd) {
        case "coord": {
          const [_0x2c66cb, _0x1ca731, _0x2a997f] = _0x45fa54;
          return AddBlipForCoord(_0x2c66cb, _0x1ca731, _0x2a997f);
        }
        case "area": {
          const [_0x39df20, _0x5d2f04, _0x230efc, _0x1301b3, _0x23f3b8] = _0x45fa54;
          return AddBlipForArea(_0x39df20, _0x5d2f04, _0x230efc, _0x1301b3, _0x23f3b8);
        }
        case "radius": {
          const [_0x482b27, _0xd73802, _0x11d557, _0x28c31f] = _0x45fa54;
          return AddBlipForRadius(_0x482b27, _0xd73802, _0x11d557, _0x28c31f);
        }
        case "pickup": {
          const [_0x5e4ca5] = _0x45fa54;
          return AddBlipForPickup(_0x5e4ca5);
        }
        case "entity": {
          const [_0x2cdb93] = _0x45fa54;
          return AddBlipForEntity(_0x2cdb93);
        }
        default: {
          console.error(new Error("Invalid Blip Type"));
          return 0;
        }
      }
    };
    var _0xfdd646 = (_0x2993ed, _0x232152, _0x35c4b1, _0x52a669, _0x54f856, _0xc07bc, _0x3685b7, _0x394b19) => {
      if (typeof _0x35c4b1 === "number") {
        SetBlipSprite(_0x2993ed, _0x35c4b1);
      }
      if (typeof _0x52a669 === "number") {
        SetBlipColour(_0x2993ed, _0x52a669);
      }
      if (typeof _0x54f856 === "number") {
        SetBlipAlpha(_0x2993ed, _0x54f856);
      }
      if (typeof _0xc07bc === "number") {
        SetBlipScale(_0x2993ed, _0xc07bc);
      }
      if (typeof _0x3685b7 === "boolean") {
        SetBlipRoute(_0x2993ed, _0x3685b7);
      }
      if (typeof _0x394b19 === "boolean") {
        SetBlipAsShortRange(_0x2993ed, _0x394b19);
      }
      if (typeof _0x232152 === "string") {
        BeginTextCommandSetBlipName("STRING");
        AddTextComponentString(_0x232152);
        EndTextCommandSetBlipName(_0x2993ed);
      }
    };
    var _0x408a6e = {
      createBlip: _0x41ad19,
      applyBlipSettings: _0xfdd646
    };
    var _0xb9c65e = _0x408a6e;
    var _0x5bf5b6 = /* @__PURE__ */ new Set();
    var _0x3809c9 = /* @__PURE__ */ new Map();
    var _0x377f08 = /* @__PURE__ */ new Set();
    on("np-polyzone:enter", (_0xa28acc, _0x45f440) => {
      _0x5bf5b6.add(_0xa28acc);
      if (_0x45f440 == null ? void 0 : _0x45f440.id) {
        _0x5bf5b6.add(_0xa28acc + "-" + _0x45f440.id);
      }
      if (_0x377f08.has(_0xa28acc)) {
        _0x539aaf.emitNet("__sdk:zones:" + _0xa28acc + ":enter", _0x45f440);
      }
      const _0x58a612 = _0x3809c9.get(_0xa28acc + "-enter");
      if (_0x58a612 === void 0) {
        return;
      }
      for (const _0x18d418 of _0x58a612) {
        try {
          _0x18d418(_0x45f440);
        } catch (_0x40021f) {
          console.log(_0x40021f);
        }
      }
    });
    on("np-polyzone:exit", (_0x1910af, _0x2032ac) => {
      _0x5bf5b6.delete(_0x1910af);
      if (_0x2032ac == null ? void 0 : _0x2032ac.id) {
        _0x5bf5b6.delete(_0x1910af + "-" + _0x2032ac.id);
      }
      if (_0x377f08.has(_0x1910af)) {
        _0x539aaf.emitNet("__sdk:zones:" + _0x1910af + ":exit", _0x2032ac);
      }
      const _0x49eaff = _0x3809c9.get(_0x1910af + "-exit");
      if (_0x49eaff === void 0) {
        return;
      }
      for (const _0x2d93b3 of _0x49eaff) {
        try {
          _0x2d93b3(_0x2032ac);
        } catch (_0x7db2d3) {
          console.log(_0x7db2d3);
        }
      }
    });
    var _0x489a8f = (_0x23f567, _0x2cf8f4) => {
      return _0x5bf5b6.has(_0x2cf8f4 ? _0x23f567 + "-" + _0x2cf8f4 : _0x23f567);
    };
    var _0x1f3972 = (_0x506681, _0x4a4c59) => {
      const _0xe5e616 = _0x506681 + "-enter";
      const _0x69b58 = _0x3809c9.get(_0xe5e616) ?? [];
      if (!_0x3809c9.has(_0xe5e616)) {
        _0x3809c9.set(_0xe5e616, _0x69b58);
      }
      _0x69b58.push(_0x4a4c59);
    };
    var _0x433126 = (_0x4e673f, _0x2d772d) => {
      const _0x177189 = _0x4e673f + "-exit";
      const _0x3ade2d = _0x3809c9.get(_0x177189) ?? [];
      if (!_0x3809c9.has(_0x177189)) {
        _0x3809c9.set(_0x177189, _0x3ade2d);
      }
      _0x3ade2d.push(_0x2d772d);
    };
    var _0x189b2e = (_0x2fae5a, _0x1d4ce2, _0xc9b990, _0x4fdbe7, _0x404fc5 = {}) => {
      var _0x19ba73 = {
        ..._0x4fdbe7
      };
      _0x19ba73.data = _0x404fc5;
      _0x19ba73.id = _0x2fae5a;
      const _0x2d3b9e = _0x19ba73;
      _0x2d3b9e.data.id = _0x2fae5a;
      exports["np-polyzone"].AddPolyZone(_0x1d4ce2, _0xc9b990, _0x2d3b9e);
    };
    var _0x54b406 = (_0x2b326a, _0x501504, _0x284879, _0x4ebf15, _0x3d4548, _0x45716c, _0x3a938d = {}) => {
      var _0x50ad72 = {
        ..._0x45716c
      };
      _0x50ad72.data = _0x3a938d;
      _0x50ad72.id = _0x2b326a;
      const _0x8b728 = _0x50ad72;
      _0x8b728.data.id = _0x2b326a;
      exports["np-polyzone"].AddBoxZone(_0x501504, _0x284879, _0x4ebf15, _0x3d4548, _0x8b728);
    };
    var _0x1996ee = (_0xab44a0, _0x3249b1, _0x51993a, _0x3184ab, _0x2d8f69, _0x16c690 = {}) => {
      var _0x41d83e = {
        ..._0x2d8f69
      };
      _0x41d83e.data = _0x16c690;
      _0x41d83e.id = _0xab44a0;
      const _0x1273cd = _0x41d83e;
      _0x1273cd.data.id = _0xab44a0;
      exports["np-polyzone"].AddCircleZone(_0x3249b1, _0x51993a, _0x3184ab, _0x1273cd);
    };
    var _0x2ccf89 = (_0x4c5ff5, _0x2540b3, _0x1dbb5e, _0x358c51, _0x445814 = {}) => {
      var _0x14b4c8 = {
        ..._0x358c51
      };
      _0x14b4c8.data = _0x445814;
      const _0x2029b0 = _0x14b4c8;
      _0x2029b0.data.id = _0x4c5ff5;
      exports["np-polyzone"].AddEntityZone(_0x2540b3, _0x1dbb5e, _0x2029b0);
    };
    var _0xfa284f = (_0x488679, _0x1015f) => {
      exports["np-polyzone"].RemoveZone(_0x488679, _0x1015f);
      _0x5bf5b6.delete(_0x488679 + "-" + _0x1015f);
      _0x377f08.delete(_0x488679);
    };
    var _0x1c2f63 = (_0x2ac998) => {
      _0x377f08.add(_0x2ac998);
    };
    var _0x4cf8c9 = {
      isActive: _0x489a8f,
      onEnter: _0x1f3972,
      onExit: _0x433126,
      addPolyZone: _0x189b2e,
      addBoxZone: _0x54b406,
      addCircleZone: _0x1996ee,
      addEntityZone: _0x2ccf89,
      removeZone: _0xfa284f,
      setAsNetworked: _0x1c2f63
    };
    var _0x506c0a = _0x4cf8c9;
    var _0x51dc2c = (_0x417af4, _0x2c2e3a, _0x33ae13, _0x48830d) => {
      var _0xe1d1ac = {
        id: _0x417af4,
        coords: [_0x2c2e3a.x, _0x2c2e3a.y, _0x2c2e3a.z],
        options: _0x33ae13,
        context: _0x48830d
      };
      const _0xe89757 = _0xe1d1ac;
      globalThis.exports.interactions.AddInteraction(_0xe89757);
    };
    var _0x4ae7b5 = (_0x1847af, _0x2588e7, _0x443188, _0x4781db) => {
      var _0x40c493 = {
        id: _0x1847af,
        options: _0x443188,
        context: _0x4781db
      };
      const _0x547837 = _0x40c493;
      globalThis.exports.interactions.AddInteractionByModel(_0x2588e7, _0x547837);
    };
    var _0x4f4928 = (_0x16d817, _0x10bea9, _0xd5cc42) => {
      var _0x118748 = {
        id: _0x16d817,
        options: _0x10bea9,
        context: _0xd5cc42
      };
      const _0x42e829 = _0x118748;
      _0x42e829.context.isPlayer = true;
      globalThis.exports.interactions.AddPedInteraction(_0x42e829);
    };
    var _0x22e5a2 = (_0x1e86a5, _0x43f36a, _0xac2a6e) => {
      var _0x2650dd = {
        id: _0x1e86a5,
        options: _0x43f36a,
        context: _0xac2a6e
      };
      const _0x50f2a7 = _0x2650dd;
      globalThis.exports.interactions.AddPedInteraction(_0x50f2a7);
    };
    var _0x1cc818 = (_0x19adb9) => {
      return globalThis.exports.interactions.DoesInteractionExists(_0x19adb9);
    };
    var _0xdb46c = (_0x2db9b8, _0x34e60b, _0x51bf7d) => {
      var _0x32155d = {
        id: _0x2db9b8,
        options: _0x34e60b,
        context: _0x51bf7d
      };
      const _0x3f088d = _0x32155d;
      globalThis.exports.interactions.AddVehicleInteraction(_0x3f088d);
    };
    var _0x157775 = (_0x3ce26a) => {
      globalThis.exports.interactions.RemoveInteraction(_0x3ce26a);
    };
    var _0x225742 = (_0x506cee) => {
      globalThis.exports.interactions.RemoveVehicleInteraction(_0x506cee);
    };
    var _0x31972a = (_0x150098) => {
      globalThis.exports.interactions.RemovePedInteraction(_0x150098);
    };
    var _0x4a5f2b = (_0x41ab7b, _0x4e74de, _0x329ea5 = false, _0x4fdc7c = null, _0x522477 = true, _0x2ed1e2 = null) => {
      return new Promise((_0x2945c0) => {
        globalThis.exports["np-taskbar"].taskBar(_0x41ab7b, _0x4e74de, _0x329ea5, _0x522477, _0x2ed1e2, false, _0x2945c0, _0x4fdc7c == null ? void 0 : _0x4fdc7c.distance, _0x4fdc7c == null ? void 0 : _0x4fdc7c.entity);
      });
    };
    var _0xacf117 = (_0x2bd5f9, _0x54d764, _0xa289d4, _0x3ccfe7) => {
      return new Promise((_0x1bb6f6) => {
        globalThis.exports["np-phone"].DoPhoneConfirmation(_0x2bd5f9, _0x54d764, _0xa289d4, _0x1bb6f6, _0x3ccfe7);
      });
    };
    var _0x12e8f3 = (_0xa71838, _0x2fa1be, _0x3bc8f6 = true, _0x4b17ac = "home-screen") => {
      var _0xebaa4c = {
        action: "notification",
        target_app: _0x4b17ac,
        title: _0xa71838,
        body: _0x2fa1be,
        show_even_if_app_active: _0x3bc8f6
      };
      var _0x2b728b = {
        source: "np-nui",
        app: "phone",
        data: _0xebaa4c
      };
      globalThis.exports["np-ui"].SendUIMessage(_0x2b728b);
    };
    var _0x3b2a0c = (_0x2498b5, _0x3046f3, _0x476bb8, _0x23ce51, _0x4acddd, _0xf3273f, _0x21b71d = 0, _0x2e849f = true) => {
      SetTextColour(_0x23ce51[0], _0x23ce51[1], _0x23ce51[2], _0x23ce51[3]);
      if (_0x2e849f) {
        SetTextOutline();
      }
      SetTextScale(0, _0x4acddd);
      SetTextFont(_0xf3273f ?? 0);
      SetTextJustification(_0x21b71d);
      if (_0x21b71d === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(_0x476bb8 ?? "Dummy text");
      EndTextCommandDisplayText(_0x2498b5, _0x3046f3);
    };
    var _0x23298f = (_0x3745a0, _0x2de0be, _0x43dd6e, _0x2aad31, _0x842449 = 4, _0x283081 = true, _0x25b837) => {
      SetDrawOrigin(_0x3745a0.x, _0x3745a0.y, _0x3745a0.z, 0);
      const _0x19467f = Math.max(_0x160d48.getMapRange([0, 10], [0.4, 0.25], _0x2de0be), 0.1);
      _0x3b2a0c(0, 0, _0x43dd6e, _0x2aad31, _0x19467f, _0x842449, 0, _0x283081);
      if (_0x25b837) {
        DrawRect(2e-3, _0x25b837.height / 2, _0x25b837.width, _0x25b837.height, _0x25b837.color[0], _0x25b837.color[1], _0x25b837.color[2], _0x25b837.color[3]);
      }
      ClearDrawOrigin();
    };
    var _0x247f72 = (_0x2fc724, _0x5c95fa, _0x70e839, _0x194aba) => {
      globalThis.exports.contacts.open(_0x2fc724, _0x5c95fa, _0x70e839, _0x194aba, true);
    };
    var _0x4a37e3 = (_0xb5bb33) => {
      globalThis.exports.hud.AddOrUpdateHudBar(_0xb5bb33);
    };
    var _0x32f74b = (_0x495950) => {
      globalThis.exports.hud.RemoveHudBar(_0x495950);
    };
    async function _0x2cc611(_0x4801df) {
      const _0x4300b4 = (_0x369313) => {
        for (const _0x3f6e50 of _0x4801df) {
          if (_0x3f6e50._type === "number" && isNaN(_0x369313[_0x3f6e50.name])) {
            return false;
          }
          if (_0x3f6e50._type === "text" && typeof _0x369313[_0x3f6e50.name] !== "string") {
            return false;
          }
        }
        return true;
      };
      return await _0x27d38c.Sync["np-ui"].OpenInputMenu(_0x4801df, _0x4300b4);
    }
    async function _0x2e51a1(_0x52567f, _0x3502a4) {
      const _0x39d1fa = {
        info: 1,
        error: 2
      };
      emit("DoLongHudText", _0x52567f, _0x39d1fa[_0x3502a4]);
    }
    var _0x543a40 = {
      addInteraction: _0x51dc2c,
      addInteractionByModel: _0x4ae7b5,
      addPlayerInteraction: _0x4f4928,
      addPedInteraction: _0x22e5a2,
      addVehicleInteraction: _0xdb46c,
      removeInteraction: _0x157775,
      removePlayerInteraction: _0x31972a,
      removePedInteraction: _0x31972a,
      removeVehicleInteraction: _0x225742,
      doesInteractionExists: _0x1cc818,
      taskBar: _0x4a5f2b,
      phoneConfirmation: _0xacf117,
      phoneNotification: _0x12e8f3,
      drawText: _0x3b2a0c,
      drawText3D: _0x23298f,
      customContact: _0x247f72,
      AddOrUpdateHudBar: _0x4a37e3,
      RemoveHudBar: _0x32f74b,
      openInputMenu: _0x2cc611,
      displayNotification: _0x2e51a1
    };
    var _0x4c27ed = _0x543a40;
    var _0x499f24 = async (_0x1fbc34) => {
      return globalThis.exports["np-heists"].BankMinigame(_0x1fbc34);
    };
    var _0x3db498 = async (_0x1d0f3c) => {
      return globalThis.exports["np-heists"].DDRMinigame(_0x1d0f3c);
    };
    var _0x421ef2 = async (_0x230ce9) => {
      return globalThis.exports.skillchecks.DirectionMinigame(_0x230ce9);
    };
    var _0x8b3e8a = async () => {
      return globalThis.exports.skillchecks.DrillingMinigame();
    };
    var _0x4382c9 = async (_0x18cd05) => {
      return globalThis.exports.skillchecks.FlipMinigame(_0x18cd05);
    };
    var _0x15b79e = async (_0x245c84) => {
      return globalThis.exports.skillchecks.FloodMinigame(_0x245c84);
    };
    var _0x408fea = async (_0x461621) => {
      return globalThis.exports.skillchecks.TaskBarMinigame(_0x461621.difficulty, _0x461621.gap, _0x461621.iterations, _0x461621.useReverse);
    };
    var _0x52480d = async (_0x5220a8) => {
      return globalThis.exports.skillchecks.MazeMinigame(_0x5220a8);
    };
    var _0x203dad = async (_0x354fc6) => {
      return globalThis.exports.skillchecks.CrackSafe(_0x354fc6.locks);
    };
    var _0x2387a6 = async (_0x1b0b3a) => {
      return globalThis.exports.skillchecks.SameMinigame(_0x1b0b3a);
    };
    var _0x3dedf6 = async (_0x533f4c) => {
      return globalThis.exports["np-heists"].ThermiteMinigame(_0x533f4c);
    };
    var _0x18a5c3 = async (_0x5d4cb4) => {
      return globalThis.exports.skillchecks.UntangleMinigame(_0x5d4cb4);
    };
    var _0xfc51d1 = async (_0x42e25f) => {
      return globalThis.exports["np-heists"].VarMinigame(_0x42e25f);
    };
    var _0x39e034 = async (_0x28b973) => {
      return globalThis.exports.skillchecks.WordsMinigame(_0x28b973);
    };
    var _0xb61d29 = async (_0x3ba8ba) => {
      return globalThis.exports.skillchecks.AlphabetMinigame(_0x3ba8ba);
    };
    var _0x5ae73f = async (_0x592723) => {
      return globalThis.exports.skillchecks.LockpickMinigame(_0x592723);
    };
    var _0x2144d4 = async (_0x433426) => {
      return globalThis.exports.skillchecks.PinCrackMinigame(_0x433426);
    };
    var _0x2b92c5 = async (_0x20a1cd) => {
      return globalThis.exports.skillchecks.TerminalMinigame(_0x20a1cd);
    };
    var _0x223d7f = async (_0x134ad9) => {
      return globalThis.exports.skillchecks.SequenceMinigame(_0x134ad9);
    };
    var _0xc93d39 = async (_0x3eb8a9) => {
      return globalThis.exports.skillchecks.SudokuMinigame(_0x3eb8a9);
    };
    var _0x3d9228 = async (_0x58941c) => {
      return globalThis.exports.skillchecks.MemoryMinigame(_0x58941c);
    };
    var _0x1ca096 = {
      BankMinigame: _0x499f24,
      DDRMinigame: _0x3db498,
      DirectionMinigame: _0x421ef2,
      DrillingMinigame: _0x8b3e8a,
      FlipMinigame: _0x4382c9,
      FloodMinigame: _0x15b79e,
      TaskBarMinigame: _0x408fea,
      MazeMinigame: _0x52480d,
      CrackSafe: _0x203dad,
      SameMinigame: _0x2387a6,
      ThermiteMinigame: _0x3dedf6,
      UntangleMinigame: _0x18a5c3,
      VarMinigame: _0xfc51d1,
      WordsMinigame: _0x39e034,
      AlphabetMinigame: _0xb61d29,
      LockpickMinigame: _0x5ae73f,
      PinCrackMinigame: _0x2144d4,
      TerminalMinigame: _0x2b92c5,
      SequenceMinigame: _0x223d7f,
      SudokuMinigame: _0xc93d39,
      MemoryMinigame: _0x3d9228
    };
    var _0x3e9bc9 = _0x1ca096;
    var _0x513d89 = {
      async hasPermission(_0x54780d, _0x5e6b88 = {}) {
        return await exports.permissions.hasPermission(_0x54780d, _0x5e6b88);
      },
      async getUserPermissions() {
        return await exports.permissions.getUserPermissions();
      },
      async getCharPermissions(_0x1d795c) {
        return await exports.permissions.getCharPermissions();
      },
      async getTotalPermissions() {
        return await exports.permissions.getTotalPermissions();
      }
    };
    var _0x4931c5 = {
      RegisterAction: (_0x3c98b6, _0x1a2ef9, _0x39e806) => {
        return _0x27d38c.Sync.contacts.RegisterAction(_0x3c98b6, _0x1a2ef9, _0x39e806);
      }
    };
    var _0xda14c5 = {
      RegisterEditorHandlerClient: async (_0x31bad2) => {
        return await globalThis.exports.editor.RegisterEditorHandlerClient(_0x31bad2);
      }
    };
    var _0x4e45a4;
    var _0x37b716;
    var _0x4d97b5;
    var _0x5e6e7f;
    var _0x5d1b01;
    var _0x529cb5;
    var _0x537c50;
    var _0x391cc0;
    var _0x48bc56;
    var _0x81a5ec;
    var _0xe5a063 = class {
      constructor(_0x34d970) {
        _0x34720d(this, _0x48bc56);
        _0x34720d(this, _0x4e45a4, void 0);
        _0x34720d(this, _0x37b716, void 0);
        _0x34720d(this, _0x4d97b5, void 0);
        _0x34720d(this, _0x5e6e7f, void 0);
        _0x34720d(this, _0x5d1b01, void 0);
        _0x34720d(this, _0x529cb5, void 0);
        _0x34720d(this, _0x537c50, false);
        _0x34720d(this, _0x391cc0, []);
        _0x33011a(this, _0x4e45a4, _0x34d970.codename);
        _0x33011a(this, _0x37b716, _0x34d970.version);
        _0x33011a(this, _0x4d97b5, GetCurrentResourceName());
        _0x33011a(this, _0x5e6e7f, "nopixel-misc");
        emit("__npx_core:handshake", _0x34d970, _0x1ec034(this, _0x48bc56, _0x81a5ec).bind(this));
        _0xd77dcf.register("__npx_core:handshake", async (_0x351b85) => {
          if (_0x351b85.codename !== _0x47e5e2(this, _0x4e45a4)) {
            return;
          }
          const _0x4117c0 = await _0x2ad271.waitForCondition(() => _0x47e5e2(this, _0x537c50), 1e4);
          if (_0x4117c0) {
            return;
          }
          return {
            API_URL: _0x47e5e2(this, _0x5d1b01),
            API_KEY: _0x47e5e2(this, _0x529cb5)
          };
        });
      }
      get codename() {
        return _0x47e5e2(this, _0x4e45a4);
      }
      get version() {
        return _0x47e5e2(this, _0x37b716);
      }
      get isReady() {
        return _0x47e5e2(this, _0x537c50);
      }
      onReady(_0x1c907e) {
        if (_0x47e5e2(this, _0x537c50)) {
          _0x1c907e();
        } else {
          _0x47e5e2(this, _0x391cc0).push(_0x1c907e);
        }
      }
    };
    _0x4e45a4 = /* @__PURE__ */ new WeakMap();
    _0x37b716 = /* @__PURE__ */ new WeakMap();
    _0x4d97b5 = /* @__PURE__ */ new WeakMap();
    _0x5e6e7f = /* @__PURE__ */ new WeakMap();
    _0x5d1b01 = /* @__PURE__ */ new WeakMap();
    _0x529cb5 = /* @__PURE__ */ new WeakMap();
    _0x537c50 = /* @__PURE__ */ new WeakMap();
    _0x391cc0 = /* @__PURE__ */ new WeakMap();
    _0x48bc56 = /* @__PURE__ */ new WeakSet();
    _0x81a5ec = async function(_0x3dbe24) {
      _0x33011a(this, _0x5d1b01, _0x3dbe24.API_URL);
      _0x33011a(this, _0x529cb5, _0x3dbe24.API_KEY);
      _0x33011a(this, _0x537c50, true);
      for (const _0x65c93e of _0x47e5e2(this, _0x391cc0)) {
        _0x65c93e();
      }
    };
    /*! Bundled license information:
    crypto-js/ripemd160.js:
    (** @preserve
    (c) 2012 by Cédric Mesnil. All rights reserved.
    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    *)
    crypto-js/mode-ctr-gladman.js:
    (** @preserve
    * Counter block mode compatible with  Dr Brian Gladman fileenc.c
    * derived from CryptoJS.mode.CTR
    * Jan Hruby jhruby.web@gmail.com
    *)
    */
    ;
    function _0x12c82b() {
    }
    ;
    function _0xdc5cc1(_0x5d5db5, _0x3c731f) {
      if (_0x3c731f == null || _0x3c731f > _0x5d5db5.length) {
        _0x3c731f = _0x5d5db5.length;
      }
      for (var _0x320edf = 0, _0x2484da = new Array(_0x3c731f); _0x320edf < _0x3c731f; _0x320edf++) {
        _0x2484da[_0x320edf] = _0x5d5db5[_0x320edf];
      }
      return _0x2484da;
    }
    function _0x47bea0(_0x54dbeb) {
      if (Array.isArray(_0x54dbeb)) {
        return _0x54dbeb;
      }
    }
    function _0x4b9f42(_0x31a29b, _0x202092, _0x405f3e, _0x45369a, _0x5554e4, _0x13ff18, _0x4aad0b) {
      try {
        var _0x919986 = _0x31a29b[_0x13ff18](_0x4aad0b);
        var _0x2e847d = _0x919986.value;
      } catch (_0x3be57a) {
        _0x405f3e(_0x3be57a);
        return;
      }
      if (_0x919986.done) {
        _0x202092(_0x2e847d);
      } else {
        Promise.resolve(_0x2e847d).then(_0x45369a, _0x5554e4);
      }
    }
    function _0xf57dd2(_0x9a149f) {
      return function() {
        var _0x28496c = this;
        var _0x3bad0a = arguments;
        return new Promise(function(_0x326478, _0x1d3c89) {
          var _0x28b923 = _0x9a149f.apply(_0x28496c, _0x3bad0a);
          function _0x38e8c2(_0x56a90a) {
            _0x4b9f42(_0x28b923, _0x326478, _0x1d3c89, _0x38e8c2, _0x1a16bf, "next", _0x56a90a);
          }
          function _0x1a16bf(_0x3074e5) {
            _0x4b9f42(_0x28b923, _0x326478, _0x1d3c89, _0x38e8c2, _0x1a16bf, "throw", _0x3074e5);
          }
          _0x38e8c2(void 0);
        });
      };
    }
    function _0x4df92b(_0x5be7f9, _0x52b7c3) {
      var _0x391847 = _0x5be7f9 == null ? null : typeof Symbol !== "undefined" && _0x5be7f9[Symbol.iterator] || _0x5be7f9["@@iterator"];
      if (_0x391847 == null) {
        return;
      }
      var _0x590513 = [];
      var _0x3ceec9 = true;
      var _0x31cfa5 = false;
      var _0x5f8324;
      var _0x589e18;
      try {
        for (_0x391847 = _0x391847.call(_0x5be7f9); !(_0x3ceec9 = (_0x5f8324 = _0x391847.next()).done); _0x3ceec9 = true) {
          _0x590513.push(_0x5f8324.value);
          if (_0x52b7c3 && _0x590513.length === _0x52b7c3) {
            break;
          }
        }
      } catch (_0x628894) {
        _0x31cfa5 = true;
        _0x589e18 = _0x628894;
      } finally {
        try {
          if (!_0x3ceec9 && _0x391847.return != null) {
            _0x391847.return();
          }
        } finally {
          if (_0x31cfa5) {
            throw _0x589e18;
          }
        }
      }
      return _0x590513;
    }
    function _0x1c6e0f() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0x361323(_0x26d89e, _0x16c4df) {
      return _0x47bea0(_0x26d89e) || _0x4df92b(_0x26d89e, _0x16c4df) || _0x3e4b45(_0x26d89e, _0x16c4df) || _0x1c6e0f();
    }
    function _0x3e4b45(_0x489016, _0x1e1f85) {
      if (!_0x489016) {
        return;
      }
      if (typeof _0x489016 === "string") {
        return _0xdc5cc1(_0x489016, _0x1e1f85);
      }
      var _0x49d977 = Object.prototype.toString.call(_0x489016).slice(8, -1);
      if (_0x49d977 === "Object" && _0x489016.constructor) {
        _0x49d977 = _0x489016.constructor.name;
      }
      if (_0x49d977 === "Map" || _0x49d977 === "Set") {
        return Array.from(_0x49d977);
      }
      if (_0x49d977 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x49d977)) {
        return _0xdc5cc1(_0x489016, _0x1e1f85);
      }
    }
    function _0x37193b(_0x32d9d1, _0x557595) {
      var _0x4857ea;
      var _0x5effa8;
      var _0x4966f8;
      var _0xc83848;
      var _0x3436d5 = {
        label: 0,
        sent: function() {
          if (_0x4966f8[0] & 1) {
            throw _0x4966f8[1];
          }
          return _0x4966f8[1];
        },
        trys: [],
        ops: []
      };
      _0xc83848 = {
        next: _0x256a60(0),
        throw: _0x256a60(1),
        return: _0x256a60(2)
      };
      if (typeof Symbol === "function") {
        _0xc83848[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0xc83848;
      function _0x256a60(_0xcd3e29) {
        return function(_0xd71c44) {
          return _0x3439e2([_0xcd3e29, _0xd71c44]);
        };
      }
      function _0x3439e2(_0x36b119) {
        if (_0x4857ea) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x3436d5) {
          try {
            _0x4857ea = 1;
            if (_0x5effa8 && (_0x4966f8 = _0x36b119[0] & 2 ? _0x5effa8.return : _0x36b119[0] ? _0x5effa8.throw || ((_0x4966f8 = _0x5effa8.return) && _0x4966f8.call(_0x5effa8), 0) : _0x5effa8.next) && !(_0x4966f8 = _0x4966f8.call(_0x5effa8, _0x36b119[1])).done) {
              return _0x4966f8;
            }
            _0x5effa8 = 0;
            if (_0x4966f8) {
              _0x36b119 = [_0x36b119[0] & 2, _0x4966f8.value];
            }
            switch (_0x36b119[0]) {
              case 0:
              case 1:
                _0x4966f8 = _0x36b119;
                break;
              case 4:
                _0x3436d5.label++;
                return {
                  value: _0x36b119[1],
                  done: false
                };
              case 5:
                _0x3436d5.label++;
                _0x5effa8 = _0x36b119[1];
                _0x36b119 = [0];
                continue;
              case 7:
                _0x36b119 = _0x3436d5.ops.pop();
                _0x3436d5.trys.pop();
                continue;
              default:
                if (!(_0x4966f8 = _0x3436d5.trys, _0x4966f8 = _0x4966f8.length > 0 && _0x4966f8[_0x4966f8.length - 1]) && (_0x36b119[0] === 6 || _0x36b119[0] === 2)) {
                  _0x3436d5 = 0;
                  continue;
                }
                if (_0x36b119[0] === 3 && (!_0x4966f8 || _0x36b119[1] > _0x4966f8[0] && _0x36b119[1] < _0x4966f8[3])) {
                  _0x3436d5.label = _0x36b119[1];
                  break;
                }
                if (_0x36b119[0] === 6 && _0x3436d5.label < _0x4966f8[1]) {
                  _0x3436d5.label = _0x4966f8[1];
                  _0x4966f8 = _0x36b119;
                  break;
                }
                if (_0x4966f8 && _0x3436d5.label < _0x4966f8[2]) {
                  _0x3436d5.label = _0x4966f8[2];
                  _0x3436d5.ops.push(_0x36b119);
                  break;
                }
                if (_0x4966f8[2]) {
                  _0x3436d5.ops.pop();
                }
                _0x3436d5.trys.pop();
                continue;
            }
            _0x36b119 = _0x557595.call(_0x32d9d1, _0x3436d5);
          } catch (_0x386660) {
            _0x36b119 = [6, _0x386660];
            _0x5effa8 = 0;
          } finally {
            _0x4857ea = _0x4966f8 = 0;
          }
        }
        if (_0x36b119[0] & 5) {
          throw _0x36b119[1];
        }
        var _0x284b86 = {
          value: _0x36b119[0] ? _0x36b119[1] : void 0,
          done: true
        };
        return _0x284b86;
      }
    }
    var _0x271c0c = void 0;
    var _0x538806 = false;
    var _0x284d44 = 0;
    function _0x24ea9e() {
      var _0x56ad86 = {
        isToggled: true,
        distance: {
          draw: 2,
          use: 2
        },
        skipLos: false,
        isEnabled: function() {
          return true;
        }
      };
      _0x4c27ed.addInteractionByModel("misc:shit", ["prop_big_shit_02"], [{
        eventSDK: "misc:hobo:clean",
        id: "misc:hobo:clean",
        label: "Clean it up...",
        parameters: {}
      }], _0x56ad86);
    }
    function _0x214bad() {
      if (!_0x4c27ed.doesInteractionExists("misc:hobo:flip-vehicle")) {
        _0x4c27ed.addVehicleInteraction("misc:hobo:flip-vehicle", [{
          id: "misc:hobo:flip-vehicle",
          label: "Hobo Flip",
          eventSDK: "misc:hobo:flip-vehicle",
          parameters: {}
        }], {
          distance: {
            draw: 5,
            use: 5
          },
          isEnabled: function(_0x3d4a45) {
            return _0x538806 && !IsPedInAnyVehicle(PlayerPedId(), false);
          },
          isToggled: true
        });
      }
      if (!_0x4c27ed.doesInteractionExists("misc:hobo:vehicle:steal-tyre")) {
        _0x4c27ed.addVehicleInteraction("misc:hobo:vehicle:steal-tyre", [{
          id: "misc:hobo:vehicle:steal-tyre",
          label: "Steal the tyre",
          eventSDK: "misc:hobo:vehicle:steal-tyre",
          parameters: {}
        }], {
          distance: {
            draw: 5,
            use: 5
          },
          isEnabled: function(_0x5587f2) {
            return _0x538806 && !IsPedInAnyVehicle(PlayerPedId(), false);
          },
          isToggled: true
        });
      }
    }
    function _0x4463ac() {
      _0x4c27ed.removeInteraction("misc:hobo:flip-vehicle");
      _0x4c27ed.removeInteraction("misc:hobo:vehicle:steal-tyre");
    }
    RegisterCommand("misc:hobo:mode", (function() {
      var _0x212bb4 = _0xf57dd2(function(_0x486ac7, _0x2bd4c5, _0x4072e) {
        return _0x37193b(this, function(_0x5a132d) {
          switch (_0x5a132d.label) {
            case 0:
              var _0x42fa38 = {
                state: _0x538806
              };
              return [4, _0x38f759.execute("misc:hobo:mode", _0x42fa38)];
            case 1:
              _0x538806 = _0x5a132d.sent();
              if (_0x538806 && _0x271c0c === void 0) {
                _0x271c0c = setTick(function() {
                  if (IsControlPressed(0, 21) && IsDisabledControlPressed(0, 161)) {
                    _0x4d2df1("shit");
                  } else if (IsControlPressed(0, 21) && IsDisabledControlPressed(0, 162)) {
                    _0x4d2df1("pee");
                  } else if (IsControlPressed(0, 21) && IsDisabledControlPressed(0, 163)) {
                    _0x4d2df1("puke");
                  }
                });
                _0x214bad();
              } else if (!_0x538806 && _0x271c0c !== void 0) {
                clearTick(_0x271c0c);
                _0x271c0c = void 0;
                _0x4463ac();
              }
              emit("DoLongHudText", _0x538806 ? "Hobo mode enabled" : "Hobo mode disabled");
              return [2];
          }
        });
      });
      return function(_0x95e5eb, _0x18904f, _0x5f0f2d) {
        return _0x212bb4.apply(this, arguments);
      };
    })(), false);
    RegisterCommand("misc:hobo:setNetwork", function(_0x4d3dba, _0x2327ba, _0x3862ce) {
      if (!_0x538806) {
        return;
      }
      var _0x34c21a = _0x2327ba[0] === "on";
      _0x539aaf.emitNet("misc:hobo:setPhoneNetworkState", _0x34c21a, true);
    }, false);
    RegisterCommand("misc:hobo:setPower", function(_0xf6c7b, _0x3fc21e, _0x190f25) {
      if (!_0x538806) {
        return;
      }
      var _0x344f0b = _0x3fc21e[0] === "on";
      _0x539aaf.emitNet("misc:hobo:setPowergridState", _0x344f0b);
    }, false);
    _0x539aaf.onNet("misc:hobo:action", function(_0x41f8e0) {
      TriggerEvent("animation:PlayAnimation", _0x41f8e0);
    });
    _0x539aaf.onNet("misc:hobo:clean", (function() {
      var _0x5e4d2b = _0xf57dd2(function(_0x4c311c, _0x744049) {
        var _0x5708dd;
        var _0x53b5fb;
        return _0x37193b(this, function(_0x5b8b74) {
          switch (_0x5b8b74.label) {
            case 0:
              return [4, _0x151c5c.loadAnim("amb@world_human_janitor@male@idle_a")];
            case 1:
              _0x5b8b74.sent();
              TaskPlayAnim(PlayerPedId(), "amb@world_human_janitor@male@idle_a", "idle_a", 8, -8, -1, 1, 0, false, false, false);
              emit("attachItem", "broom");
              _0x5708dd = exports["np-objects"].GetObjectByEntity(_0x744049)?.id;
              return [4, _0x4c27ed.taskBar(5e3, "Ugh, cleaning up this mess...", true)];
            case 2:
              _0x53b5fb = _0x5b8b74.sent();
              if (_0x53b5fb === 100) {
                emit("DoLongHudText", "You cleaned up the mess!", 1);
                _0x539aaf.emitNet("misc:hobo:clean", _0x5708dd);
              } else {
                emit("DoLongHudText", "You stopped cleaning.", 2);
              }
              emit("destroyProp");
              emit("propattach:destroyCurrent");
              ClearPedTasks(PlayerPedId());
              return [2];
          }
        });
      });
      return function(_0x31265e, _0x1d3a10) {
        return _0x5e4d2b.apply(this, arguments);
      };
    })());
    _0x539aaf.onNet("misc:hobo:flip-vehicle", (function() {
      var _0xed5525 = _0xf57dd2(function(_0x3fa44f, _0x6941bb) {
        var _0x48c7d9;
        return _0x37193b(this, function(_0x47b165) {
          switch (_0x47b165.label) {
            case 0:
              if (!_0x6941bb) {
                return [3, 2];
              }
              emit("animation:PlayAnimation", "push");
              return [4, _0x4c27ed.taskBar(5e3, "*Grunting*", true)];
            case 1:
              _0x48c7d9 = _0x47b165.sent();
              if (_0x48c7d9 === 100) {
                _0x539aaf.emitNet("misc:hobo:flip-vehicle", VehToNet(_0x6941bb), new _0x58b2dd(GetEntityForwardVector(PlayerPedId())));
              }
              emit("animation:PlayAnimation", "cancel");
              _0x47b165.label = 2;
            case 2:
              return [2];
          }
        });
      });
      return function(_0x1fabfd, _0x36d495) {
        return _0xed5525.apply(this, arguments);
      };
    })());
    _0x539aaf.onNet("misc:hobo:vehicle:steal-tyre", (function() {
      var _0x3e7a05 = _0xf57dd2(function(_0x40bf53, _0x42114b) {
        var _0x38f924;
        var _0x40b1ac;
        var _0x104d28;
        var _0x44a9a0;
        var _0x30cb9a;
        return _0x37193b(this, function(_0x2a12f7) {
          switch (_0x2a12f7.label) {
            case 0:
              _0x38f924 = _0x2a4a48(_0x42114b);
              if (!_0x38f924) {
                return [3, 4];
              }
              _0x40b1ac = "anim@amb@clubhouse@tutorial@bkr_tut_ig3@";
              _0x104d28 = "machinic_loop_mechandplayer";
              return [4, _0x151c5c.loadAnim(_0x40b1ac)];
            case 1:
              _0x2a12f7.sent();
              TaskPlayAnim(PlayerPedId(), _0x40b1ac, _0x104d28, 8, 8, -1, 1, 1, false, false, false);
              return [4, _0x27d38c.Sync["np-fx"].PlayEntitySound(PlayerPedId(), "impact_wrench", "NOPIXEL_GENERAL", 0, "TOWING_SOUNDS")];
            case 2:
              _0x44a9a0 = _0x2a12f7.sent();
              return [4, _0x4c27ed.taskBar(15e3, "Removing wheel...", true)];
            case 3:
              _0x30cb9a = _0x2a12f7.sent();
              _0x27d38c.Sync["np-fx"].StopEntitySound(PlayerPedId(), _0x44a9a0);
              ClearPedTasks(PlayerPedId());
              if (_0x30cb9a !== 100) {
                return [2];
              }
              _0x539aaf.emitNet("misc:hobo:vehicle:steal-tyre", VehToNet(_0x42114b), _0x38f924.fuckedUpIndex);
              _0x2a12f7.label = 4;
            case 4:
              return [2];
          }
        });
      });
      return function(_0x59eb8, _0x273610) {
        return _0x3e7a05.apply(this, arguments);
      };
    })());
    var _0x3bb0c4 = {
      "2": {
        "0": "wheel_lf",
        "4": "wheel_lr"
      },
      "3": {
        "0": "wheel_lf",
        "1": "wheel_rf",
        "4": "wheel_lr",
        "5": "wheel_rr"
      },
      "4": {
        "0": "wheel_lf",
        "1": "wheel_rf",
        "4": "wheel_lr",
        "5": "wheel_rr"
      },
      "6": {
        "0": "wheel_lf",
        "1": "wheel_rf",
        "2": "wheel_lm1",
        "3": "wheel_rm1",
        "4": "wheel_lr",
        "5": "wheel_rr"
      }
    };
    function _0x2a4a48(_0xfacf31, _0x2ef462 = PlayerPedId()) {
      var _0x51e455 = GetEntityCoords(_0x2ef462, false);
      var _0x1efc5c = GetVehicleNumberOfWheels(_0xfacf31);
      var _0x45c583 = _0x3bb0c4[_0x1efc5c];
      if (!_0x45c583) {
        return null;
      }
      var _0xb0408b = {
        wheelIndex: -1,
        fuckedUpIndex: -1,
        wheelName: "",
        distance: Infinity
      };
      var _0x5961a0 = _0xb0408b;
      var _0x4653db = 0;
      var _0x1b6a54 = true;
      var _0x129069 = false;
      var _0x763e3a = void 0;
      try {
        for (var _0x3e8f3b = Object.entries(_0x45c583)[Symbol.iterator](), _0x17456c; !(_0x1b6a54 = (_0x17456c = _0x3e8f3b.next()).done); _0x1b6a54 = true) {
          var _0x3bbf45 = _0x361323(_0x17456c.value, 2);
          var _0x1651bc = _0x3bbf45[0];
          var _0x5a23ba = _0x3bbf45[1];
          var _0x528b1a = GetEntityBoneIndexByName(_0xfacf31, _0x5a23ba);
          if (_0x528b1a === -1) {
            console.log(`Wheel bone ${_0x5a23ba} does not exist on vehicle.`);
            continue;
          }
          var _0x4882fe = GetWorldPositionOfEntityBone(_0xfacf31, _0x528b1a);
          var _0x3ebb00 = GetDistanceBetweenCoords(_0x51e455[0], _0x51e455[1], _0x51e455[2], _0x4882fe[0], _0x4882fe[1], _0x4882fe[2], true);
          if (_0x3ebb00 < _0x5961a0.distance) {
            _0x5961a0 = {
              wheelIndex: parseInt(_0x1651bc),
              fuckedUpIndex: _0x4653db,
              wheelName: _0x5a23ba,
              distance: _0x3ebb00
            };
          }
          _0x4653db++;
        }
      } catch (_0x32e89a) {
        _0x129069 = true;
        _0x763e3a = _0x32e89a;
      } finally {
        try {
          if (!_0x1b6a54 && _0x3e8f3b.return != null) {
            _0x3e8f3b.return();
          }
        } finally {
          if (_0x129069) {
            throw _0x763e3a;
          }
        }
      }
      return _0x5961a0;
    }
    function _0x4d2df1(_0x22abfc) {
      if (_0x538806 && Date.now() - _0x284d44 > 5e3) {
        _0x284d44 = Date.now();
        var _0x20bfbd = GetEntityCoords(PlayerPedId(), false);
        var _0x41bc2a = new _0x58b2dd(GetEntityForwardVector(PlayerPedId()));
        var _0x560d4b = new _0x58b2dd(_0x20bfbd[0] - _0x41bc2a.x * 0.6, _0x20bfbd[1] - _0x41bc2a.y * 0.6, _0x20bfbd[2]);
        var _0x231dbd = _0x361323(GetGroundZFor_3dCoord(_0x560d4b.x, _0x560d4b.y, _0x560d4b.z, true), 2);
        var _0x333e50 = _0x231dbd[0];
        var _0x341dba = _0x231dbd[1];
        _0x539aaf.emitNet("misc:hobo:action", _0x22abfc, {
          coords: new _0x58b2dd(_0x560d4b.x, _0x560d4b.y, _0x333e50 ? _0x341dba : _0x560d4b.z - 1),
          rotation: new _0x58b2dd(GetEntityRotation(PlayerPedId()))
        });
      }
    }
    ;
    var _0x4be1e1 = Object.defineProperty;
    var _0x3885d1 = (_0x5a9899, _0x5aaa56) => {
      for (var _0x44fc01 in _0x5aaa56) {
        _0x4be1e1(_0x5a9899, _0x44fc01, {
          get: _0x5aaa56[_0x44fc01],
          enumerable: true
        });
      }
    };
    var _0x29ff97 = (_0x13668e, _0x20d742, _0x1d18a8) => {
      if (!_0x20d742.has(_0x13668e)) {
        throw TypeError("Cannot " + _0x1d18a8);
      }
    };
    var _0x20df0b = (_0x16632b, _0x14b015, _0x5f0b51) => {
      _0x29ff97(_0x16632b, _0x14b015, "read from private field");
      if (_0x5f0b51) {
        return _0x5f0b51.call(_0x16632b);
      } else {
        return _0x14b015.get(_0x16632b);
      }
    };
    var _0x3dc611 = (_0x317b17, _0x505372, _0x634ff5) => {
      if (_0x505372.has(_0x317b17)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (_0x505372 instanceof WeakSet) {
        _0x505372.add(_0x317b17);
      } else {
        _0x505372.set(_0x317b17, _0x634ff5);
      }
    };
    var _0x2901a6 = (_0x57380a, _0x5d3666, _0x193118, _0x409d99) => {
      _0x29ff97(_0x57380a, _0x5d3666, "write to private field");
      if (_0x409d99) {
        _0x409d99.call(_0x57380a, _0x193118);
      } else {
        _0x5d3666.set(_0x57380a, _0x193118);
      }
      return _0x193118;
    };
    var _0x182d16 = (_0x58d369, _0x4f486c, _0x296643) => {
      _0x29ff97(_0x58d369, _0x4f486c, "access private method");
      return _0x296643;
    };
    var _0xa57332 = {
      ESC: 322,
      F1: 288,
      F2: 289,
      F3: 170,
      F5: 166,
      F6: 167,
      F7: 168,
      F8: 169,
      F9: 56,
      F10: 57,
      "~": 243,
      "#1": 157,
      "#2": 158,
      "#3": 160,
      "#4": 164,
      "#5": 165,
      "#6": 159,
      "#7": 161,
      "#8": 162,
      "#9": 163,
      "-": 84,
      "=": 83,
      BACKSPACE: 177,
      TAB: 37,
      Q: 44,
      W: 32,
      E: 38,
      R: 45,
      T: 245,
      Y: 246,
      U: 303,
      P: 199,
      ENTER: 18,
      CAPS: 137,
      A: 34,
      S: 8,
      D: 9,
      F: 23,
      G: 47,
      H: 74,
      K: 311,
      L: 182,
      LEFTSHIFT: 21,
      Z: 20,
      X: 73,
      C: 26,
      V: 0,
      B: 29,
      N: 249,
      M: 244,
      ",": 82,
      ".": 81,
      LEFTCTRL: 36,
      LEFTALT: 19,
      SPACE: 22,
      RIGHTCTRL: 70,
      HOME: 213,
      PAGEUP: 10,
      PAGEDOWN: 11,
      DELETE: 178,
      LEFT: 174,
      RIGHT: 175,
      TOP: 27,
      DOWN: 173,
      NENTER: 201,
      N4: 108,
      N5: 60,
      N6: 107,
      "N+": 96,
      "N-": 97,
      N7: 117,
      N8: 61,
      N9: 118
    };
    var _0x525bfd = {};
    var _0x188774 = {
      MathUtils: () => _0x423d92
    };
    _0x3885d1(_0x525bfd, _0x188774);
    var _0x388ecd;
    var _0x4a8f62;
    var _0x9bc8fe = class _0x3d0b9f {
      constructor(_0x5843f1, _0x2c7861, _0x13e39b) {
        _0x3dc611(this, _0x388ecd);
        const _0x2fd3a4 = _0x182d16(this, _0x388ecd, _0x4a8f62).call(this, _0x5843f1, _0x2c7861, _0x13e39b);
        this.x = _0x2fd3a4.x;
        this.y = _0x2fd3a4.y;
        this.z = _0x2fd3a4.z;
      }
      equals(_0x82f8b, _0x199d85, _0x26e128) {
        const _0x530090 = _0x182d16(this, _0x388ecd, _0x4a8f62).call(this, _0x82f8b, _0x199d85, _0x26e128);
        return this.x === _0x530090.x && this.y === _0x530090.y && this.z === _0x530090.z;
      }
      add(_0x1c6dca, _0x5b8880, _0x296d87, _0xe4ad1a) {
        let _0x4b1b88 = _0x182d16(this, _0x388ecd, _0x4a8f62).call(this, _0x1c6dca, _0x5b8880, _0x296d87);
        this.x += _0xe4ad1a ? _0x4b1b88.x * _0xe4ad1a : _0x4b1b88.x;
        this.y += _0xe4ad1a ? _0x4b1b88.y * _0xe4ad1a : _0x4b1b88.y;
        this.z += _0xe4ad1a ? _0x4b1b88.z * _0xe4ad1a : _0x4b1b88.z;
        return this;
      }
      addScalar(_0x150400) {
        if (typeof _0x150400 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x += _0x150400;
        this.y += _0x150400;
        this.z += _0x150400;
        return this;
      }
      sub(_0x276138, _0x323979, _0x1831a9, _0x2668e6) {
        const _0x12cdef = _0x182d16(this, _0x388ecd, _0x4a8f62).call(this, _0x276138, _0x323979, _0x1831a9);
        this.x -= _0x2668e6 ? _0x12cdef.x * _0x2668e6 : _0x12cdef.x;
        this.y -= _0x2668e6 ? _0x12cdef.y * _0x2668e6 : _0x12cdef.y;
        this.z -= _0x2668e6 ? _0x12cdef.z * _0x2668e6 : _0x12cdef.z;
        return this;
      }
      subScalar(_0x27a31a) {
        if (typeof _0x27a31a !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x -= _0x27a31a;
        this.y -= _0x27a31a;
        this.z -= _0x27a31a;
        return this;
      }
      multiply(_0x17df17, _0x469612, _0xc9d5d2) {
        const _0x24da79 = _0x182d16(this, _0x388ecd, _0x4a8f62).call(this, _0x17df17, _0x469612, _0xc9d5d2);
        this.x *= _0x24da79.x;
        this.y *= _0x24da79.y;
        this.z *= _0x24da79.z;
        return this;
      }
      multiplyScalar(_0x2e4a44) {
        if (typeof _0x2e4a44 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x *= _0x2e4a44;
        this.y *= _0x2e4a44;
        this.z *= _0x2e4a44;
        return this;
      }
      divide(_0x889898, _0x3e549d, _0x8fc003) {
        const _0xf4ee9a = _0x182d16(this, _0x388ecd, _0x4a8f62).call(this, _0x889898, _0x3e549d, _0x8fc003);
        this.x /= _0xf4ee9a.x;
        this.y /= _0xf4ee9a.y;
        this.z /= _0xf4ee9a.z;
        return this;
      }
      divideScalar(_0x1b8988) {
        if (typeof _0x1b8988 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x /= _0x1b8988;
        this.y /= _0x1b8988;
        this.z /= _0x1b8988;
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
      getCenter(_0xa2f5a4, _0x4f8a03, _0x6fca9d) {
        const _0x2f587e = _0x182d16(this, _0x388ecd, _0x4a8f62).call(this, _0xa2f5a4, _0x4f8a03, _0x6fca9d);
        return new _0x3d0b9f((this.x + _0x2f587e.x) / 2, (this.y + _0x2f587e.y) / 2, (this.z + _0x2f587e.z) / 2);
      }
      getDistance(_0x1ca508, _0x22aeb4, _0x2f0f51) {
        const [_0x387522, _0x5dbdd5, _0x375669] = _0x1ca508 instanceof Array ? _0x1ca508 : typeof _0x1ca508 === "object" ? [_0x1ca508.x, _0x1ca508.y, _0x1ca508.z] : [_0x1ca508, _0x22aeb4, _0x2f0f51];
        if (typeof _0x387522 !== "number" || typeof _0x5dbdd5 !== "number" || typeof _0x375669 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x293134, _0x572196, _0x18c210] = [this.x - _0x387522, this.y - _0x5dbdd5, this.z - _0x375669];
        return Math.sqrt(_0x293134 * _0x293134 + _0x572196 * _0x572196 + _0x18c210 * _0x18c210);
      }
      toArray(_0x49f180) {
        if (typeof _0x49f180 === "number") {
          return [parseFloat(this.x.toFixed(_0x49f180)), parseFloat(this.y.toFixed(_0x49f180)), parseFloat(this.z.toFixed(_0x49f180))];
        }
        return [this.x, this.y, this.z];
      }
      toJSON(_0x5d4bfa) {
        if (typeof _0x5d4bfa === "number") {
          return {
            x: parseFloat(this.x.toFixed(_0x5d4bfa)),
            y: parseFloat(this.y.toFixed(_0x5d4bfa)),
            z: parseFloat(this.z.toFixed(_0x5d4bfa))
          };
        }
        var _0xbc4313 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return _0xbc4313;
      }
      toString(_0x5d3e6f) {
        return JSON.stringify(this.toJSON(_0x5d3e6f));
      }
    };
    _0x388ecd = /* @__PURE__ */ new WeakSet();
    _0x4a8f62 = function(_0x19eba4, _0x104108, _0x7411f) {
      let _0x112cdf = {
        x: 0,
        y: 0,
        z: 0
      };
      if (_0x19eba4 instanceof _0x9bc8fe) {
        _0x112cdf = _0x19eba4;
      } else if (_0x19eba4 instanceof Array) {
        var _0x1b5907 = {
          x: _0x19eba4[0],
          y: _0x19eba4[1],
          z: _0x19eba4[2]
        };
        _0x112cdf = _0x1b5907;
      } else if (typeof _0x19eba4 === "object") {
        _0x112cdf = _0x19eba4;
      } else {
        var _0x278894 = {
          x: _0x19eba4,
          y: _0x104108,
          z: _0x7411f
        };
        _0x112cdf = _0x278894;
      }
      if (typeof _0x112cdf.x !== "number" || typeof _0x112cdf.y !== "number" || typeof _0x112cdf.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return _0x112cdf;
    };
    var _0x4bd5f4 = _0x9bc8fe;
    var _0x23c53d;
    var _0x1d7557;
    var _0xf2514 = class {
      constructor(_0x48ce3a) {
        _0x3dc611(this, _0x23c53d, void 0);
        _0x3dc611(this, _0x1d7557, void 0);
        _0x2901a6(this, _0x1d7557, _0x48ce3a ?? 5);
        _0x2901a6(this, _0x23c53d, /* @__PURE__ */ new Map());
      }
      setTTL(_0x2b4a05) {
        _0x2901a6(this, _0x1d7557, _0x2b4a05);
      }
      set(_0x37e085, _0x3e4b4c, _0x47dc3a) {
        _0x20df0b(this, _0x23c53d).set(_0x37e085, {
          value: _0x3e4b4c,
          expiration: Date.now() + (_0x47dc3a ?? _0x20df0b(this, _0x1d7557)) * 1e3
        });
        return this;
      }
      get(_0xda6b24, _0x53b449 = false) {
        const _0x527a8b = _0x20df0b(this, _0x23c53d).get(_0xda6b24);
        const _0x3981a6 = _0x527a8b ? _0x53b449 ? true : _0x527a8b.expiration > Date.now() : false;
        if (!_0x527a8b || !_0x3981a6) {
          if (_0x527a8b) {
            _0x20df0b(this, _0x23c53d).delete(_0xda6b24);
          }
          return;
        }
        return _0x527a8b.value;
      }
      has(_0x142171, _0x3cb509 = false) {
        const _0x54c82f = _0x20df0b(this, _0x23c53d).get(_0x142171);
        const _0xfa804d = _0x54c82f ? _0x3cb509 ? true : _0x54c82f.expiration > Date.now() : false;
        if (_0x54c82f && !_0xfa804d) {
          _0x20df0b(this, _0x23c53d).delete(_0x142171);
        }
        return _0xfa804d;
      }
      delete(_0x258b80) {
        return _0x20df0b(this, _0x23c53d).delete(_0x258b80);
      }
      clear() {
        _0x20df0b(this, _0x23c53d).clear();
      }
      values(_0x550e37 = false) {
        const _0x37c8ed = [];
        const _0xf01d50 = Date.now();
        for (const _0x4b11ed of _0x20df0b(this, _0x23c53d).values()) {
          if (_0x550e37 || _0x4b11ed.expiration > _0xf01d50) {
            _0x37c8ed.push(_0x4b11ed.value);
          }
        }
        return _0x37c8ed;
      }
      keys(_0x107be5 = false) {
        const _0x2415e8 = [];
        const _0x4fd323 = Date.now();
        for (const [_0x3eeb6e, _0x58c9ad] of _0x20df0b(this, _0x23c53d).entries()) {
          if (_0x107be5 || _0x58c9ad.expiration > _0x4fd323) {
            _0x2415e8.push(_0x3eeb6e);
          }
        }
        return _0x2415e8;
      }
      entries(_0x26e640 = false) {
        const _0x2ed98f = [];
        const _0x4c4495 = Date.now();
        for (const [_0x39141c, _0x5d4e0e] of _0x20df0b(this, _0x23c53d).entries()) {
          if (_0x26e640 || _0x5d4e0e.expiration > _0x4c4495) {
            _0x2ed98f.push([_0x39141c, _0x5d4e0e.value]);
          }
        }
        return _0x2ed98f;
      }
    };
    _0x23c53d = /* @__PURE__ */ new WeakMap();
    _0x1d7557 = /* @__PURE__ */ new WeakMap();
    var _0x206f6d;
    var _0x4344c4;
    var _0x2f5b90;
    var _0x1399d1;
    var _0x5e8aef;
    var _0x2973e8;
    var _0x389e96;
    var _0x5e5fee;
    var _0x16eb58;
    var _0x1e97c4;
    var _0x1c689e;
    var _0x5bf6b4;
    var _0x53df72;
    var _0x19516e;
    var _0x104469;
    var _0x46fd96;
    var _0x3c83e9;
    var _0x57023f;
    var _0x1e20cd;
    var _0x18d8e6;
    var _0x435b3f;
    var _0x4b33c7;
    var _0x315fb6 = class {
      constructor(_0x5d6052, _0x103028, _0x13ea9b, _0x4ca9a2, _0x170e41, _0x3e289e = 30, _0x230822 = false) {
        _0x3dc611(this, _0x53df72);
        _0x3dc611(this, _0x104469);
        _0x3dc611(this, _0x3c83e9);
        _0x3dc611(this, _0x1e20cd);
        _0x3dc611(this, _0x435b3f);
        _0x3dc611(this, _0x206f6d, void 0);
        _0x3dc611(this, _0x4344c4, void 0);
        _0x3dc611(this, _0x2f5b90, void 0);
        _0x3dc611(this, _0x1399d1, void 0);
        _0x3dc611(this, _0x5e8aef, void 0);
        _0x3dc611(this, _0x2973e8, void 0);
        _0x3dc611(this, _0x389e96, void 0);
        _0x3dc611(this, _0x5e5fee, void 0);
        _0x3dc611(this, _0x16eb58, void 0);
        _0x3dc611(this, _0x1e97c4, void 0);
        _0x3dc611(this, _0x1c689e, void 0);
        _0x3dc611(this, _0x5bf6b4, void 0);
        _0x2901a6(this, _0x206f6d, _0x5d6052);
        _0x2901a6(this, _0x4344c4, _0x4ca9a2);
        _0x2901a6(this, _0x2f5b90, _0x170e41);
        _0x2901a6(this, _0x1399d1, _0x103028);
        _0x2901a6(this, _0x5e8aef, _0x13ea9b);
        _0x2901a6(this, _0x2973e8, _0x230822);
        _0x2901a6(this, _0x389e96, _0x3e289e);
        _0x2901a6(this, _0x16eb58, _0x20df0b(this, _0x4344c4).x / _0x3e289e);
        _0x2901a6(this, _0x1e97c4, _0x20df0b(this, _0x4344c4).y / _0x3e289e);
        _0x2901a6(this, _0x5e5fee, _0x20df0b(this, _0x16eb58) * _0x20df0b(this, _0x1e97c4));
        _0x2901a6(this, _0x1c689e, _0x182d16(this, _0x53df72, _0x19516e).call(this, _0x20df0b(this, _0x206f6d), _0x20df0b(this, _0x389e96), _0x20df0b(this, _0x16eb58), _0x20df0b(this, _0x1e97c4), _0x20df0b(this, _0x2973e8)));
        _0x2901a6(this, _0x5bf6b4, _0x182d16(this, _0x104469, _0x46fd96).call(this, _0x20df0b(this, _0x1c689e), _0x20df0b(this, _0x5e5fee)));
      }
      get cells() {
        return _0x20df0b(this, _0x1c689e);
      }
      get cellSize() {
        return _0x20df0b(this, _0x389e96);
      }
      get cellWidth() {
        return _0x20df0b(this, _0x16eb58);
      }
      get cellHeight() {
        return _0x20df0b(this, _0x1e97c4);
      }
      get gridArea() {
        return _0x20df0b(this, _0x5bf6b4);
      }
      get gridCoverage() {
        return _0x20df0b(this, _0x5bf6b4) / _0x20df0b(this, _0x2f5b90) * 100;
      }
      isPointInsideGrid(_0x4faf3a) {
        var _0x22a57f;
        const _0x482e71 = _0x4faf3a.x - _0x20df0b(this, _0x1399d1).x;
        const _0x5146c0 = _0x4faf3a.y - _0x20df0b(this, _0x1399d1).y;
        const _0x44a36d = Math.floor(_0x482e71 * _0x20df0b(this, _0x389e96) / _0x20df0b(this, _0x4344c4).x);
        const _0x5c0324 = Math.floor(_0x5146c0 * _0x20df0b(this, _0x389e96) / _0x20df0b(this, _0x4344c4).y);
        let _0x552085 = (_0x22a57f = _0x20df0b(this, _0x1c689e)[_0x44a36d]) == null ? void 0 : _0x22a57f[_0x5c0324];
        if (!_0x552085 && _0x20df0b(this, _0x2973e8)) {
          _0x552085 = _0x182d16(this, _0x1e20cd, _0x18d8e6).call(this, _0x44a36d, _0x5c0324, _0x20df0b(this, _0x16eb58), _0x20df0b(this, _0x1e97c4), _0x20df0b(this, _0x206f6d));
          _0x20df0b(this, _0x1c689e)[_0x44a36d][_0x5c0324] = _0x552085;
          if (!_0x552085) {
            return false;
          }
          _0x2901a6(this, _0x5bf6b4, _0x20df0b(this, _0x5bf6b4) + _0x20df0b(this, _0x5e5fee));
        }
        return _0x552085 ?? false;
      }
    };
    _0x206f6d = /* @__PURE__ */ new WeakMap();
    _0x4344c4 = /* @__PURE__ */ new WeakMap();
    _0x2f5b90 = /* @__PURE__ */ new WeakMap();
    _0x1399d1 = /* @__PURE__ */ new WeakMap();
    _0x5e8aef = /* @__PURE__ */ new WeakMap();
    _0x2973e8 = /* @__PURE__ */ new WeakMap();
    _0x389e96 = /* @__PURE__ */ new WeakMap();
    _0x5e5fee = /* @__PURE__ */ new WeakMap();
    _0x16eb58 = /* @__PURE__ */ new WeakMap();
    _0x1e97c4 = /* @__PURE__ */ new WeakMap();
    _0x1c689e = /* @__PURE__ */ new WeakMap();
    _0x5bf6b4 = /* @__PURE__ */ new WeakMap();
    _0x53df72 = /* @__PURE__ */ new WeakSet();
    _0x19516e = function(_0x341a6e, _0x412c64, _0x4aa0f2, _0x480ff9, _0x2173e0) {
      const _0x4ce57e = {};
      for (let _0x52078f = 0; _0x52078f < _0x412c64; _0x52078f++) {
        _0x4ce57e[_0x52078f] = {};
        if (_0x2173e0) {
          continue;
        }
        for (let _0x5af331 = 0; _0x5af331 < _0x412c64; _0x5af331++) {
          const _0x39fc8e = _0x182d16(this, _0x1e20cd, _0x18d8e6).call(this, _0x52078f, _0x5af331, _0x4aa0f2, _0x480ff9, _0x341a6e);
          if (!_0x39fc8e) {
            continue;
          }
          _0x4ce57e[_0x52078f][_0x5af331] = true;
        }
      }
      return _0x4ce57e;
    };
    _0x104469 = /* @__PURE__ */ new WeakSet();
    _0x46fd96 = function(_0x29677a, _0x5052f4) {
      let _0x437a82 = 0;
      for (const _0x3dd1af in _0x29677a) {
        for (const _0x39f846 in _0x29677a[_0x3dd1af]) {
          _0x437a82 += _0x5052f4;
        }
      }
      return _0x437a82;
    };
    _0x3c83e9 = /* @__PURE__ */ new WeakSet();
    _0x57023f = function(_0x56d2fc, _0xa11a38, _0x43f009, _0x5bb71a) {
      const _0x584792 = [];
      const _0x212c21 = _0x56d2fc * _0x43f009 + _0x20df0b(this, _0x1399d1).x;
      const _0x35baac = _0xa11a38 * _0x5bb71a + _0x20df0b(this, _0x1399d1).y;
      _0x584792.push(new _0x1d5b53(_0x212c21, _0x35baac));
      _0x584792.push(new _0x1d5b53(_0x212c21 + _0x43f009, _0x35baac));
      _0x584792.push(new _0x1d5b53(_0x212c21 + _0x43f009, _0x35baac + _0x5bb71a));
      _0x584792.push(new _0x1d5b53(_0x212c21, _0x35baac + _0x5bb71a));
      return _0x584792;
    };
    _0x1e20cd = /* @__PURE__ */ new WeakSet();
    _0x18d8e6 = function(_0x1e2845, _0x298297, _0x14607f, _0x510400, _0x347440) {
      const _0x4cb448 = _0x182d16(this, _0x3c83e9, _0x57023f).call(this, _0x1e2845, _0x298297, _0x14607f, _0x510400);
      let _0x51632b = false;
      for (const _0x2ce981 of _0x4cb448) {
        const _0x156221 = _0x1fed2e.MathUtils.windingNumber(_0x2ce981, _0x347440);
        if (_0x156221 !== 0) {
          _0x51632b = true;
          break;
        }
      }
      if (!_0x51632b) {
        return false;
      }
      for (let _0x232b5a = 0; _0x232b5a < _0x4cb448.length; _0x232b5a++) {
        const _0x3eb015 = _0x4cb448[_0x232b5a];
        const _0x5a6381 = _0x4cb448[(_0x232b5a + 1) % _0x4cb448.length];
        for (let _0x333a76 = 0; _0x333a76 < _0x347440.length; _0x333a76++) {
          const _0x445887 = _0x347440[_0x333a76];
          const _0x479c53 = _0x347440[(_0x333a76 + 1) % _0x347440.length];
          if (_0x182d16(this, _0x435b3f, _0x4b33c7).call(this, _0x3eb015, _0x5a6381, _0x445887, _0x479c53)) {
            return false;
          }
        }
      }
      return true;
    };
    _0x435b3f = /* @__PURE__ */ new WeakSet();
    _0x4b33c7 = function(_0x472009, _0x16ef30, _0x19a23a, _0x30015d) {
      const _0x5ab768 = (_0x16ef30.x - _0x472009.x) * (_0x30015d.y - _0x19a23a.y) - (_0x16ef30.y - _0x472009.y) * (_0x30015d.x - _0x19a23a.x);
      const _0x3a3fad = (_0x472009.y - _0x19a23a.y) * (_0x30015d.x - _0x19a23a.x) - (_0x472009.x - _0x19a23a.x) * (_0x30015d.y - _0x19a23a.y);
      const _0x52b872 = (_0x472009.y - _0x19a23a.y) * (_0x16ef30.x - _0x472009.x) - (_0x472009.x - _0x19a23a.x) * (_0x16ef30.y - _0x472009.y);
      if (_0x5ab768 === 0) {
        return _0x3a3fad === 0 && _0x52b872 === 0;
      }
      const _0x28c194 = _0x3a3fad / _0x5ab768;
      const _0xa5f31f = _0x52b872 / _0x5ab768;
      return _0x28c194 >= 0 && _0x28c194 <= 1 && _0xa5f31f >= 0 && _0xa5f31f <= 1;
    };
    var _0x519f71;
    var _0x12ae11;
    var _0x1e3a56;
    var _0x1bbb27;
    var _0x507e5b;
    var _0x2b6e7e;
    var _0x5711ed;
    var _0x1dc202;
    var _0x50a144;
    var _0x56ec81;
    var _0xda694f;
    var _0x493125;
    var _0x2f28df;
    var _0x4eec73;
    var _0x45b457;
    var _0x57bfbf;
    var _0x1ab974;
    var _0x100bf6;
    var _0x3661f4 = class {
      constructor(_0x1db266, _0xec3f99 = {}, _0x3b62e7 = {}) {
        _0x3dc611(this, _0x50a144);
        _0x3dc611(this, _0xda694f);
        _0x3dc611(this, _0x2f28df);
        _0x3dc611(this, _0x45b457);
        _0x3dc611(this, _0x1ab974);
        _0x3dc611(this, _0x519f71, void 0);
        _0x3dc611(this, _0x12ae11, void 0);
        _0x3dc611(this, _0x1e3a56, void 0);
        _0x3dc611(this, _0x1bbb27, void 0);
        _0x3dc611(this, _0x507e5b, void 0);
        _0x3dc611(this, _0x2b6e7e, void 0);
        _0x3dc611(this, _0x5711ed, void 0);
        _0x3dc611(this, _0x1dc202, void 0);
        _0x2901a6(this, _0x519f71, _0x1fed2e.getUUID());
        _0x2901a6(this, _0x12ae11, _0x1db266);
        _0x2901a6(this, _0x1e3a56, _0x182d16(this, _0x50a144, _0x56ec81).call(this, _0x1db266));
        _0x2901a6(this, _0x1bbb27, _0x182d16(this, _0xda694f, _0x493125).call(this, _0x1db266));
        _0x2901a6(this, _0x507e5b, _0x182d16(this, _0x1ab974, _0x100bf6).call(this, _0x1db266));
        _0x2901a6(this, _0x2b6e7e, _0x182d16(this, _0x45b457, _0x57bfbf).call(this, _0x20df0b(this, _0x1e3a56), _0x20df0b(this, _0x1bbb27)));
        _0x2901a6(this, _0x5711ed, _0x182d16(this, _0x2f28df, _0x4eec73).call(this, _0x20df0b(this, _0x1e3a56), _0x20df0b(this, _0x1bbb27)));
        this.options = _0xec3f99;
        this.data = _0x3b62e7;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        _0x2901a6(this, _0x1dc202, new _0x315fb6(_0x20df0b(this, _0x12ae11), _0x20df0b(this, _0x1e3a56), _0x20df0b(this, _0x1bbb27), _0x20df0b(this, _0x2b6e7e), _0x20df0b(this, _0x507e5b), _0xec3f99.gridCellSize, _0xec3f99.useLazyGrid));
      }
      get id() {
        return _0x20df0b(this, _0x519f71);
      }
      get center() {
        return _0x20df0b(this, _0x5711ed);
      }
      get min() {
        return _0x20df0b(this, _0x1e3a56);
      }
      get max() {
        return _0x20df0b(this, _0x1bbb27);
      }
      get points() {
        return [..._0x20df0b(this, _0x12ae11)];
      }
      isPointInside(_0x1399f7) {
        if (_0x1399f7.x < _0x20df0b(this, _0x1e3a56).x || _0x1399f7.x > _0x20df0b(this, _0x1bbb27).x) {
          return false;
        } else if (_0x1399f7.y < _0x20df0b(this, _0x1e3a56).y || _0x1399f7.y > _0x20df0b(this, _0x1bbb27).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && _0x1399f7 instanceof _0x4bd5f4) {
          const _0x3ec737 = this.options.minZ ?? -Infinity;
          const _0x549340 = this.options.maxZ ?? Infinity;
          if (_0x1399f7.z < _0x3ec737 || _0x1399f7.z > _0x549340) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && _0x20df0b(this, _0x1dc202)) {
          return _0x20df0b(this, _0x1dc202).isPointInsideGrid(_0x1399f7);
        }
        const _0x730dd6 = _0x1fed2e.MathUtils.windingNumber(_0x1399f7, _0x20df0b(this, _0x12ae11));
        return _0x730dd6 !== 0;
      }
      addPoint(_0x5232eb) {
        _0x20df0b(this, _0x12ae11).push(_0x5232eb);
      }
      removePoint(_0x456dcb) {
        const _0x46b056 = _0x20df0b(this, _0x12ae11).findIndex((_0x1a9db5) => _0x1a9db5.x === _0x456dcb.x && _0x1a9db5.y === _0x456dcb.y);
        if (_0x46b056 === -1) {
          return;
        }
        _0x20df0b(this, _0x12ae11).splice(_0x46b056, 1);
      }
      removeLastPoint() {
        _0x20df0b(this, _0x12ae11).pop();
      }
      recalculate() {
        _0x2901a6(this, _0x1e3a56, _0x182d16(this, _0x50a144, _0x56ec81).call(this, _0x20df0b(this, _0x12ae11)));
        _0x2901a6(this, _0x1bbb27, _0x182d16(this, _0xda694f, _0x493125).call(this, _0x20df0b(this, _0x12ae11)));
        _0x2901a6(this, _0x507e5b, _0x182d16(this, _0x1ab974, _0x100bf6).call(this, _0x20df0b(this, _0x12ae11)));
        _0x2901a6(this, _0x2b6e7e, _0x182d16(this, _0x45b457, _0x57bfbf).call(this, _0x20df0b(this, _0x1e3a56), _0x20df0b(this, _0x1bbb27)));
        _0x2901a6(this, _0x5711ed, _0x182d16(this, _0x2f28df, _0x4eec73).call(this, _0x20df0b(this, _0x1e3a56), _0x20df0b(this, _0x1bbb27)));
        if (!this.options.useGrid) {
          return;
        }
        _0x2901a6(this, _0x1dc202, new _0x315fb6(_0x20df0b(this, _0x12ae11), _0x20df0b(this, _0x1e3a56), _0x20df0b(this, _0x1bbb27), _0x20df0b(this, _0x2b6e7e), _0x20df0b(this, _0x507e5b), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    _0x519f71 = /* @__PURE__ */ new WeakMap();
    _0x12ae11 = /* @__PURE__ */ new WeakMap();
    _0x1e3a56 = /* @__PURE__ */ new WeakMap();
    _0x1bbb27 = /* @__PURE__ */ new WeakMap();
    _0x507e5b = /* @__PURE__ */ new WeakMap();
    _0x2b6e7e = /* @__PURE__ */ new WeakMap();
    _0x5711ed = /* @__PURE__ */ new WeakMap();
    _0x1dc202 = /* @__PURE__ */ new WeakMap();
    _0x50a144 = /* @__PURE__ */ new WeakSet();
    _0x56ec81 = function(_0x31ddb8) {
      let _0x25c2ea = Number.MAX_SAFE_INTEGER;
      let _0x52ff23 = Number.MAX_SAFE_INTEGER;
      for (const _0xa786dc of _0x31ddb8) {
        _0x25c2ea = Math.min(_0x25c2ea, _0xa786dc.x);
        _0x52ff23 = Math.min(_0x52ff23, _0xa786dc.y);
      }
      return new _0x1d5b53(_0x25c2ea, _0x52ff23);
    };
    _0xda694f = /* @__PURE__ */ new WeakSet();
    _0x493125 = function(_0x483ae7) {
      let _0x3b5361 = Number.MIN_SAFE_INTEGER;
      let _0x38b95e = Number.MIN_SAFE_INTEGER;
      for (const _0x455a38 of _0x483ae7) {
        _0x3b5361 = Math.max(_0x3b5361, _0x455a38.x);
        _0x38b95e = Math.max(_0x38b95e, _0x455a38.y);
      }
      return new _0x1d5b53(_0x3b5361, _0x38b95e);
    };
    _0x2f28df = /* @__PURE__ */ new WeakSet();
    _0x4eec73 = function(_0x20858c, _0x1d6a05) {
      const _0x310aff = _0x1d6a05.add(_0x20858c);
      return _0x310aff.divideScalar(2);
    };
    _0x45b457 = /* @__PURE__ */ new WeakSet();
    _0x57bfbf = function(_0x4bfc1c, _0x5f3140) {
      return _0x5f3140.sub(_0x4bfc1c);
    };
    _0x1ab974 = /* @__PURE__ */ new WeakSet();
    _0x100bf6 = function(_0xb1affe) {
      let _0x155975 = 0;
      for (let _0x11ce8d = 0, _0x551398 = _0xb1affe.length - 1; _0x11ce8d < _0xb1affe.length; _0x551398 = _0x11ce8d++) {
        const _0x9a631f = _0xb1affe[_0x11ce8d];
        const _0x3c3261 = _0xb1affe[_0x551398];
        _0x155975 += _0x9a631f.x * _0x3c3261.y;
        _0x155975 -= _0x9a631f.y * _0x3c3261.x;
      }
      return Math.abs(_0x155975 / 2);
    };
    var _0xe21f25;
    var _0x569b31;
    var _0x32a766 = class _0x33b893 {
      constructor(_0x3273c9, _0x3f30fa) {
        _0x3dc611(this, _0xe21f25);
        const _0x2e691c = _0x182d16(this, _0xe21f25, _0x569b31).call(this, _0x3273c9, _0x3f30fa);
        this.x = _0x2e691c.x;
        this.y = _0x2e691c.y;
      }
      equals(_0x2be11f, _0x434cb4) {
        const _0x397efa = _0x182d16(this, _0xe21f25, _0x569b31).call(this, _0x2be11f, _0x434cb4);
        return this.x === _0x397efa.x && this.y === _0x397efa.y;
      }
      add(_0x55699b, _0x42576a, _0x5c12cb) {
        const _0x46d001 = _0x182d16(this, _0xe21f25, _0x569b31).call(this, _0x55699b, _0x42576a);
        const _0x266d45 = this.x + (_0x5c12cb ? _0x46d001.x * _0x5c12cb : _0x46d001.x);
        const _0x57cea4 = this.y + (_0x5c12cb ? _0x46d001.y * _0x5c12cb : _0x46d001.y);
        return new _0x33b893(_0x266d45, _0x57cea4);
      }
      addScalar(_0x3e08ed) {
        if (typeof _0x3e08ed !== "number") {
          throw new Error("Invalid scalar");
        }
        const _0x3edf20 = this.x + _0x3e08ed;
        const _0x454570 = this.y + _0x3e08ed;
        return new _0x33b893(_0x3edf20, _0x454570);
      }
      sub(_0x312c06, _0xec0661, _0x409496) {
        const _0x5b68de = _0x182d16(this, _0xe21f25, _0x569b31).call(this, _0x312c06, _0xec0661);
        const _0x2f02c3 = this.x - (_0x409496 ? _0x5b68de.x * _0x409496 : _0x5b68de.x);
        const _0x34c6dc = this.y - (_0x409496 ? _0x5b68de.y * _0x409496 : _0x5b68de.y);
        return new _0x33b893(_0x2f02c3, _0x34c6dc);
      }
      subScalar(_0x59dadb) {
        if (typeof _0x59dadb !== "number") {
          throw new Error("Invalid scalar");
        }
        const _0x13a9e5 = this.x - _0x59dadb;
        const _0x2c30a0 = this.y - _0x59dadb;
        return new _0x33b893(_0x13a9e5, _0x2c30a0);
      }
      multiply(_0x4b54bb, _0x58bbb9) {
        const _0xdd8300 = _0x182d16(this, _0xe21f25, _0x569b31).call(this, _0x4b54bb, _0x58bbb9);
        const _0x538de7 = this.x * _0xdd8300.x;
        const _0x30f1dc = this.y * _0xdd8300.y;
        return new _0x33b893(_0x538de7, _0x30f1dc);
      }
      multiplyScalar(_0x5227f8) {
        if (typeof _0x5227f8 !== "number") {
          throw new Error("Invalid scalar");
        }
        const _0x5aa80f = this.x * _0x5227f8;
        const _0xa9554d = this.y * _0x5227f8;
        return new _0x33b893(_0x5aa80f, _0xa9554d);
      }
      divide(_0x4c3a1c, _0x16d636) {
        const _0x18926d = _0x182d16(this, _0xe21f25, _0x569b31).call(this, _0x4c3a1c, _0x16d636);
        const _0x281c0a = this.x / _0x18926d.x;
        const _0x44053c = this.y / _0x18926d.y;
        return new _0x33b893(_0x281c0a, _0x44053c);
      }
      divideScalar(_0x3c1470) {
        if (typeof _0x3c1470 !== "number") {
          throw new Error("Invalid scalar");
        }
        const _0x505e92 = this.x / _0x3c1470;
        const _0x5eef51 = this.y / _0x3c1470;
        return new _0x33b893(_0x505e92, _0x5eef51);
      }
      round() {
        const _0x4ec7aa = Math.round(this.x);
        const _0xebd5ee = Math.round(this.y);
        return new _0x33b893(_0x4ec7aa, _0xebd5ee);
      }
      floor() {
        const _0x5ca48d = Math.floor(this.x);
        const _0x417c9b = Math.floor(this.y);
        return new _0x33b893(_0x5ca48d, _0x417c9b);
      }
      ceil() {
        const _0x3590fd = Math.ceil(this.x);
        const _0xa36f21 = Math.ceil(this.y);
        return new _0x33b893(_0x3590fd, _0xa36f21);
      }
      getCenter(_0x347b9a, _0x57aca1) {
        const _0x1e0313 = _0x182d16(this, _0xe21f25, _0x569b31).call(this, _0x347b9a, _0x57aca1);
        return new _0x33b893((this.x + _0x1e0313.x) / 2, (this.y + _0x1e0313.y) / 2);
      }
      getDistance(_0x1bd6c8, _0x18f7a0) {
        const [_0x42e2b2, _0x4209b2] = _0x1bd6c8 instanceof Array ? _0x1bd6c8 : typeof _0x1bd6c8 === "object" ? [_0x1bd6c8.x, _0x1bd6c8.y] : [_0x1bd6c8, _0x18f7a0];
        if (typeof _0x42e2b2 !== "number" || typeof _0x4209b2 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x4da2bc, _0x156c50] = [this.x - _0x42e2b2, this.y - _0x4209b2];
        return Math.sqrt(_0x4da2bc * _0x4da2bc + _0x156c50 * _0x156c50);
      }
      toArray(_0x4c386b) {
        if (typeof _0x4c386b === "number") {
          return [parseFloat(this.x.toFixed(_0x4c386b)), parseFloat(this.y.toFixed(_0x4c386b))];
        }
        return [this.x, this.y];
      }
      toJSON(_0x1106be) {
        if (typeof _0x1106be === "number") {
          return {
            x: parseFloat(this.x.toFixed(_0x1106be)),
            y: parseFloat(this.y.toFixed(_0x1106be))
          };
        }
        var _0x640a5d = {
          x: this.x,
          y: this.y
        };
        return _0x640a5d;
      }
      toString(_0x4b088d) {
        return JSON.stringify(this.toJSON(_0x4b088d));
      }
    };
    _0xe21f25 = /* @__PURE__ */ new WeakSet();
    _0x569b31 = function(_0x49a213, _0xb788e3) {
      let _0x34a499 = {
        x: 0,
        y: 0
      };
      if (_0x49a213 instanceof _0x32a766 || _0x49a213 instanceof _0x4bd5f4) {
        _0x34a499 = _0x49a213;
      } else if (_0x49a213 instanceof Array) {
        var _0x4e53c9 = {
          x: _0x49a213[0],
          y: _0x49a213[1]
        };
        _0x34a499 = _0x4e53c9;
      } else if (typeof _0x49a213 === "object") {
        _0x34a499 = _0x49a213;
      } else {
        var _0x32fb33 = {
          x: _0x49a213,
          y: _0xb788e3
        };
        _0x34a499 = _0x32fb33;
      }
      if (typeof _0x34a499.x !== "number" || typeof _0x34a499.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return _0x34a499;
    };
    var _0x1d5b53 = _0x32a766;
    var _0x12fa06 = (_0x5b7571, _0x401d79, _0x3e395c) => {
      return Math.min(Math.max(_0x5b7571, _0x401d79), _0x3e395c);
    };
    var _0x23b02e = (_0x400fa5, _0x19f767, _0x11f280) => {
      return _0x19f767[0] + (_0x11f280 - _0x400fa5[0]) * (_0x19f767[1] - _0x19f767[0]) / (_0x400fa5[1] - _0x400fa5[0]);
    };
    var _0x1617b6 = ([_0x41406e, _0x1321b3, _0x16ca19], [_0x43b480, _0x2e77d9, _0x3ac694]) => {
      const [_0x1f629a, _0x1977c0, _0x49fd97] = [_0x41406e - _0x43b480, _0x1321b3 - _0x2e77d9, _0x16ca19 - _0x3ac694];
      return Math.sqrt(_0x1f629a * _0x1f629a + _0x1977c0 * _0x1977c0 + _0x49fd97 * _0x49fd97);
    };
    var _0x1dd145 = (_0x22256f, _0x37dcfb) => {
      if (_0x37dcfb) {
        return Math.floor(Math.random() * (_0x37dcfb - _0x22256f + 1) + _0x22256f);
      } else {
        return Math.floor(Math.random() * _0x22256f);
      }
    };
    var _0x2c48e3 = (_0x377add, _0x5b7cb2) => {
      if (_0x377add instanceof _0x1d5b53) {
        return _0x377add;
      } else if (_0x377add instanceof _0x4bd5f4) {
        return new _0x1d5b53(_0x377add);
      } else if (_0x377add instanceof Array) {
        return new _0x1d5b53(_0x377add);
      } else if (typeof _0x377add === "object") {
        return new _0x1d5b53(_0x377add);
      }
      if (typeof _0x377add !== "number" || typeof _0x5b7cb2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new _0x1d5b53(_0x377add, _0x5b7cb2);
    };
    var _0x654db4 = (_0x586d88, _0x4c9ba9, _0x1b9e1d) => {
      if (_0x586d88 instanceof _0x4bd5f4) {
        return _0x586d88;
      } else if (_0x586d88 instanceof Array) {
        return new _0x4bd5f4(_0x586d88);
      } else if (typeof _0x586d88 === "object") {
        return new _0x4bd5f4(_0x586d88);
      }
      if (typeof _0x586d88 !== "number" || typeof _0x4c9ba9 !== "number" || typeof _0x1b9e1d !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new _0x4bd5f4(_0x586d88, _0x4c9ba9, _0x1b9e1d);
    };
    var _0x1a429f = (_0x443f7c, _0x5184cd) => {
      let _0x15422c = 0;
      const _0x2ec062 = (_0x565e1c, _0x414c3b, _0x121843) => {
        return (_0x414c3b.x - _0x565e1c.x) * (_0x121843.y - _0x565e1c.y) - (_0x121843.x - _0x565e1c.x) * (_0x414c3b.y - _0x565e1c.y);
      };
      for (let _0x55c573 = 0; _0x55c573 < _0x5184cd.length; _0x55c573++) {
        const _0x36c351 = _0x5184cd[_0x55c573];
        const _0x3ccf71 = _0x5184cd[(_0x55c573 + 1) % _0x5184cd.length];
        if (_0x36c351.y <= _0x443f7c.y) {
          if (_0x3ccf71.y > _0x443f7c.y && _0x2ec062(_0x36c351, _0x3ccf71, _0x443f7c) > 0) {
            _0x15422c++;
          }
        } else if (_0x3ccf71.y <= _0x443f7c.y && _0x2ec062(_0x36c351, _0x3ccf71, _0x443f7c) < 0) {
          _0x15422c--;
        }
      }
      return _0x15422c;
    };
    var _0x16db07 = {
      clamp: _0x12fa06,
      getMapRange: _0x23b02e,
      getDistance: _0x1617b6,
      getRandomNumber: _0x1dd145,
      parseVector2: _0x2c48e3,
      parseVector3: _0x654db4,
      windingNumber: _0x1a429f
    };
    var _0x423d92 = _0x16db07;
    var _0x25b9c4 = {};
    var _0x7f21c5 = {
      ArrUtils: () => _0x5b4864
    };
    _0x3885d1(_0x25b9c4, _0x7f21c5);
    var _0x37772f = (_0x1d7085) => {
      for (let _0x2e98a3 = _0x1d7085.length - 1; _0x2e98a3 > 0; _0x2e98a3--) {
        const _0x28dc40 = Math.floor(Math.random() * (_0x2e98a3 + 1));
        [_0x1d7085[_0x2e98a3], _0x1d7085[_0x28dc40]] = [_0x1d7085[_0x28dc40], _0x1d7085[_0x2e98a3]];
      }
      return _0x1d7085;
    };
    var _0x499304 = (_0x41177d, _0x75e330) => {
      const _0x3edf78 = [];
      for (let _0x27bb29 = 0; _0x27bb29 < _0x75e330; _0x27bb29++) {
        _0x3edf78.push(_0x41177d[Math.floor(Math.random() * _0x41177d.length)]);
      }
      return _0x3edf78;
    };
    var _0x490678 = {
      shuffleArray: _0x37772f,
      getRandomElements: _0x499304
    };
    var _0x5b4864 = _0x490678;
    function _0x201448(_0x44c650, _0x186362) {
      const _0x33e2e1 = "_";
      const _0x4ed0e6 = _0x40ec54((_0x36503f, _0x6421d1, ..._0x2e2fa5) => {
        return _0x44c650(_0x36503f, ..._0x2e2fa5);
      }, _0x186362);
      return {
        get: function(..._0x30adc9) {
          return _0x4ed0e6.get(_0x33e2e1, ..._0x30adc9);
        },
        reset: function() {
          _0x4ed0e6.reset(_0x33e2e1);
        }
      };
    }
    function _0x40ec54(_0x12dc44, _0x47d688) {
      const _0x3ffba5 = _0x47d688.timeToLive || 6e4;
      const _0x280588 = {};
      const _0x28b84c = _0x47d688.immediateResolve || false;
      async function _0xa8c20e(_0x39172c, ..._0x3b74f7) {
        let _0x3e529d = _0x280588[_0x39172c];
        if (!_0x3e529d) {
          _0x3e529d = {
            value: null,
            lastUpdated: 0
          };
          _0x280588[_0x39172c] = _0x3e529d;
        }
        const _0x43f02d = Date.now();
        if (_0x3e529d.lastUpdated === 0 || _0x43f02d - _0x3e529d.lastUpdated > _0x3ffba5) {
          const [_0x121100, _0x206192] = await _0x12dc44(_0x3e529d, _0x39172c, ..._0x3b74f7);
          if (_0x121100) {
            _0x3e529d.lastUpdated = _0x43f02d;
            _0x3e529d.value = _0x206192;
          }
          return _0x206192;
        }
        if (_0x28b84c) {
          return Promise.resolve(_0x3e529d.value);
        } else {
          return await new Promise((_0x1cfa28) => setTimeout(() => _0x1cfa28(_0x3e529d.value), 0));
        }
      }
      return {
        get: async function(_0xeeac2f, ..._0x4ab8b3) {
          return await _0xa8c20e(_0xeeac2f, ..._0x4ab8b3);
        },
        reset: function(_0xb9869f) {
          const _0x942022 = _0x280588[_0xb9869f];
          if (_0x942022) {
            _0x942022.lastUpdated = 0;
          }
        },
        clear: function() {
          for (const _0x17a497 in _0x280588) {
            delete _0x280588[_0x17a497];
          }
        }
      };
    }
    function _0x346f1e() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return _0x5e38e7();
      } else {
        return new _0xfa7756(4).toString();
      }
    }
    function _0x54bb7(_0x44935f) {
      return _0xb74832(_0x44935f, _0xb74832.URL);
    }
    function _0x4d06e4(_0x5c2442, _0x9994fe) {
      return new Promise((_0x5b2069, _0x4c70df) => {
        const _0x11fa0a = Date.now();
        const _0xaf131b = setInterval(() => {
          const _0x5c8a46 = Date.now() - _0x11fa0a > _0x9994fe;
          if (_0x5c2442() || _0x5c8a46) {
            clearInterval(_0xaf131b);
            return _0x5b2069(_0x5c8a46);
          }
        }, 1);
      });
    }
    function _0x9eae5(_0x4c7987) {
      return new Promise((_0x3065dc) => setTimeout(() => _0x3065dc(), _0x4c7987));
    }
    function _0x335208() {
      return _0x9eae5(0);
    }
    var _0x528d9e = {
      cache: _0x201448,
      cacheableMap: _0x40ec54,
      waitForCondition: _0x4d06e4,
      getUUID: _0x346f1e,
      getStringHash: _0x54bb7,
      wait: _0x9eae5,
      waitForNextFrame: _0x335208,
      deflate: _0x3a852b,
      inflate: _0x40150d,
      ..._0x525bfd,
      ..._0x25b9c4
    };
    var _0x1fed2e = _0x528d9e;
    var _0x48d038 = ((_0x4b423a) => {
      _0x4b423a[_0x4b423a.hat = 0] = "hat";
      _0x4b423a[_0x4b423a.mask = 1] = "mask";
      _0x4b423a[_0x4b423a.glasses = 2] = "glasses";
      _0x4b423a[_0x4b423a.armor = 3] = "armor";
      _0x4b423a[_0x4b423a.backpack = 4] = "backpack";
      _0x4b423a[_0x4b423a.idcard = 5] = "idcard";
      _0x4b423a[_0x4b423a.mobilephone = 6] = "mobilephone";
      _0x4b423a[_0x4b423a.tablet = 7] = "tablet";
      _0x4b423a[_0x4b423a.keyring = 8] = "keyring";
      _0x4b423a[_0x4b423a.wallet = 9] = "wallet";
      return _0x4b423a;
    })(_0x48d038 || {});
    ;
    function _0x78df1f(_0x28fea3, _0x578369) {
      if (_0x578369 == null || _0x578369 > _0x28fea3.length) {
        _0x578369 = _0x28fea3.length;
      }
      for (var _0xafe380 = 0, _0x29d439 = new Array(_0x578369); _0xafe380 < _0x578369; _0xafe380++) {
        _0x29d439[_0xafe380] = _0x28fea3[_0xafe380];
      }
      return _0x29d439;
    }
    function _0x4094e6(_0x371646) {
      if (Array.isArray(_0x371646)) {
        return _0x78df1f(_0x371646);
      }
    }
    function _0x33ce4f(_0x558bf8, _0x5933c1, _0x186fb5, _0x3b5b8c, _0xe218cd, _0x48cb70, _0x21426b) {
      try {
        var _0x402276 = _0x558bf8[_0x48cb70](_0x21426b);
        var _0x27c325 = _0x402276.value;
      } catch (_0xf9f313) {
        _0x186fb5(_0xf9f313);
        return;
      }
      if (_0x402276.done) {
        _0x5933c1(_0x27c325);
      } else {
        Promise.resolve(_0x27c325).then(_0x3b5b8c, _0xe218cd);
      }
    }
    function _0x2b7a30(_0x56fa9e) {
      return function() {
        var _0x22a298 = this;
        var _0xa7ca87 = arguments;
        return new Promise(function(_0x286239, _0x57c5c0) {
          var _0xe8ecea = _0x56fa9e.apply(_0x22a298, _0xa7ca87);
          function _0x46b50f(_0x50e76d) {
            _0x33ce4f(_0xe8ecea, _0x286239, _0x57c5c0, _0x46b50f, _0x3f592d, "next", _0x50e76d);
          }
          function _0x3f592d(_0x418ecd) {
            _0x33ce4f(_0xe8ecea, _0x286239, _0x57c5c0, _0x46b50f, _0x3f592d, "throw", _0x418ecd);
          }
          _0x46b50f(void 0);
        });
      };
    }
    function _0x563d3a(_0x265a75) {
      if (typeof Symbol !== "undefined" && _0x265a75[Symbol.iterator] != null || _0x265a75["@@iterator"] != null) {
        return Array.from(_0x265a75);
      }
    }
    function _0x120b3b() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0x38f28a(_0x6fa934) {
      return _0x4094e6(_0x6fa934) || _0x563d3a(_0x6fa934) || _0x2a3a2f(_0x6fa934) || _0x120b3b();
    }
    function _0x2a3a2f(_0x2f93d0, _0x27b535) {
      if (!_0x2f93d0) {
        return;
      }
      if (typeof _0x2f93d0 === "string") {
        return _0x78df1f(_0x2f93d0, _0x27b535);
      }
      var _0x4d7a2b = Object.prototype.toString.call(_0x2f93d0).slice(8, -1);
      if (_0x4d7a2b === "Object" && _0x2f93d0.constructor) {
        _0x4d7a2b = _0x2f93d0.constructor.name;
      }
      if (_0x4d7a2b === "Map" || _0x4d7a2b === "Set") {
        return Array.from(_0x4d7a2b);
      }
      if (_0x4d7a2b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x4d7a2b)) {
        return _0x78df1f(_0x2f93d0, _0x27b535);
      }
    }
    function _0x40b847(_0x51839b, _0x4e64f3) {
      var _0x4e544d;
      var _0x362b8c;
      var _0x2faf48;
      var _0x2d89fc;
      var _0x592032 = {
        label: 0,
        sent: function() {
          if (_0x2faf48[0] & 1) {
            throw _0x2faf48[1];
          }
          return _0x2faf48[1];
        },
        trys: [],
        ops: []
      };
      _0x2d89fc = {
        next: _0x5228de(0),
        throw: _0x5228de(1),
        return: _0x5228de(2)
      };
      if (typeof Symbol === "function") {
        _0x2d89fc[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x2d89fc;
      function _0x5228de(_0x1b64f3) {
        return function(_0x27b910) {
          return _0x48de70([_0x1b64f3, _0x27b910]);
        };
      }
      function _0x48de70(_0x2fe445) {
        if (_0x4e544d) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x592032) {
          try {
            _0x4e544d = 1;
            if (_0x362b8c && (_0x2faf48 = _0x2fe445[0] & 2 ? _0x362b8c.return : _0x2fe445[0] ? _0x362b8c.throw || ((_0x2faf48 = _0x362b8c.return) && _0x2faf48.call(_0x362b8c), 0) : _0x362b8c.next) && !(_0x2faf48 = _0x2faf48.call(_0x362b8c, _0x2fe445[1])).done) {
              return _0x2faf48;
            }
            _0x362b8c = 0;
            if (_0x2faf48) {
              _0x2fe445 = [_0x2fe445[0] & 2, _0x2faf48.value];
            }
            switch (_0x2fe445[0]) {
              case 0:
              case 1:
                _0x2faf48 = _0x2fe445;
                break;
              case 4:
                _0x592032.label++;
                return {
                  value: _0x2fe445[1],
                  done: false
                };
              case 5:
                _0x592032.label++;
                _0x362b8c = _0x2fe445[1];
                _0x2fe445 = [0];
                continue;
              case 7:
                _0x2fe445 = _0x592032.ops.pop();
                _0x592032.trys.pop();
                continue;
              default:
                if (!(_0x2faf48 = _0x592032.trys, _0x2faf48 = _0x2faf48.length > 0 && _0x2faf48[_0x2faf48.length - 1]) && (_0x2fe445[0] === 6 || _0x2fe445[0] === 2)) {
                  _0x592032 = 0;
                  continue;
                }
                if (_0x2fe445[0] === 3 && (!_0x2faf48 || _0x2fe445[1] > _0x2faf48[0] && _0x2fe445[1] < _0x2faf48[3])) {
                  _0x592032.label = _0x2fe445[1];
                  break;
                }
                if (_0x2fe445[0] === 6 && _0x592032.label < _0x2faf48[1]) {
                  _0x592032.label = _0x2faf48[1];
                  _0x2faf48 = _0x2fe445;
                  break;
                }
                if (_0x2faf48 && _0x592032.label < _0x2faf48[2]) {
                  _0x592032.label = _0x2faf48[2];
                  _0x592032.ops.push(_0x2fe445);
                  break;
                }
                if (_0x2faf48[2]) {
                  _0x592032.ops.pop();
                }
                _0x592032.trys.pop();
                continue;
            }
            _0x2fe445 = _0x4e64f3.call(_0x51839b, _0x592032);
          } catch (_0x254c06) {
            _0x2fe445 = [6, _0x254c06];
            _0x362b8c = 0;
          } finally {
            _0x4e544d = _0x2faf48 = 0;
          }
        }
        if (_0x2fe445[0] & 5) {
          throw _0x2fe445[1];
        }
        var _0x2f34b0 = {
          value: _0x2fe445[0] ? _0x2fe445[1] : void 0,
          done: true
        };
        return _0x2f34b0;
      }
    }
    function _0x4cb169() {
    }
    var _0xea872e = {
      x: 0.1,
      y: 0.24,
      width: 0.21,
      height: 0.51
    };
    var _0x33390d = {
      red: {
        r: 255,
        g: 10,
        b: 10
      },
      yellow: {
        r: 255,
        g: 209,
        b: 67
      },
      lightblue: {
        r: 67,
        g: 200,
        b: 255
      },
      green: {
        r: 0,
        g: 255,
        b: 80
      },
      black: {
        r: 0,
        g: 0,
        b: 0
      }
    };
    var _0x55239f = 8e3;
    var _0x43fd3f = 0;
    var _0x3188f6 = 0;
    var _0x14d1ad = new _0x4bd5f4(0, 0, 0);
    var _0x5c8a44 = [];
    RegisterCommand("LAGInspection", (function() {
      var _0x597b47 = _0x2b7a30(function(_0x26f738, _0x1f4a65) {
        var _0xead6b;
        var _0xbba752;
        var _0x24a52c;
        var _0x5c5399;
        var _0x2b7311;
        return _0x40b847(this, function(_0x335c64) {
          switch (_0x335c64.label) {
            case 0:
              if (!_0x27d38c.Sync["np-admin"].IsAdminMode()) {
                console.log("Lol, you are not permitted.");
                return [2];
              }
              _0xead6b = parseFloat(_0x1f4a65[0]) || 100;
              return [4, _0x38f759.execute("misc:lag:getTotalCount", _0xead6b)];
            case 1:
              _0xbba752 = _0x335c64.sent();
              _0x24a52c = _0xbba752.insideItems;
              _0x5c5399 = _0xbba752.outsideItems;
              _0x2b7311 = _0xbba752.nearbyCoordinates;
              _0x5c8a44 = _0x2b7311;
              _0x14d1ad = new _0x4bd5f4(_0x5c8a44[0]?.x ?? 0, _0x5c8a44[0]?.y ?? 0, _0x5c8a44[0]?.z ?? 0);
              emit("DoLongHudText", `Total items inside: ${_0x24a52c}, outside: ${_0x5c5399}`, _0x24a52c > 0 ? 2 : 1);
              return [2];
          }
        });
      });
      return function(_0x2ada2b, _0x540989) {
        return _0x597b47.apply(this, arguments);
      };
    })(), false);
    RegisterCommand("LAGInspection::BeGoneThot", (function() {
      var _0x26fe2e = _0x2b7a30(function(_0x5b6bc1, _0x4c6572) {
        var _0x199e59;
        return _0x40b847(this, function(_0x3c974c) {
          if (!_0x27d38c.Sync["np-admin"].IsAdminMode()) {
            console.log("Lol, you are not permitted.");
            return [2];
          }
          _0x199e59 = parseFloat(_0x4c6572[0]) || 100;
          _0x539aaf.emitNet("misc:lag:beGoneThot", _0x199e59);
          return [2];
        });
      });
      return function(_0x1ee248, _0x41a9ff) {
        return _0x26fe2e.apply(this, arguments);
      };
    })(), false);
    RegisterCommand("LAGInspection::Render", (function() {
      var _0x274fc7 = _0x2b7a30(function(_0x108eca, _0x239819) {
        return _0x40b847(this, function(_0x5178dd) {
          if (!_0x27d38c.Sync["np-admin"].IsAdminMode()) {
            console.log("Lol, you are not permitted.");
            return [2];
          }
          if (!_0x5b0d4d) {
            console.log("Started rendering LAG objects.");
            _0x5b0d4d = true;
            _0x11ab02 = setTick(_0x4a150e);
          } else {
            _0x5b0d4d = false;
            clearTick(_0x11ab02);
            _0x11ab02 = 0;
            console.log("Stopped rendering LAG objects.");
          }
          return [2];
        });
      });
      return function(_0x3af8b9, _0xe2ada0) {
        return _0x274fc7.apply(this, arguments);
      };
    })(), false);
    var _0x1ad6cf = [];
    on("np-objects:objectsCreated:inventory_drops", (function() {
      var _0x4109bb = _0x2b7a30(function(_0x5521fd) {
        var _0x30c313;
        return _0x40b847(this, function(_0x345938) {
          (_0x30c313 = _0x1ad6cf).push.apply(_0x30c313, _0x38f28a(_0x5521fd));
          return [2];
        });
      });
      return function(_0x587620) {
        return _0x4109bb.apply(this, arguments);
      };
    })());
    on("np-objects:objectsDeleted:inventory_drops", (function() {
      var _0x370540 = _0x2b7a30(function(_0x546d27) {
        var _0x4aebaf;
        var _0x215332;
        var _0xffa9ff;
        var _0x2c518b;
        var _0x148c6f;
        var _0x5d97d1;
        return _0x40b847(this, function(_0x1cb222) {
          _0x4aebaf = true;
          _0x215332 = false;
          _0xffa9ff = void 0;
          try {
            _0x2c518b = function() {
              var _0x5208c6 = _0x5d97d1.value;
              var _0x23a166 = _0x5208c6.object;
              var _0x430fde = _0x5208c6.handle;
              _0x1ad6cf = _0x1ad6cf.filter(function(_0x572a0a) {
                return _0x572a0a.object.id !== _0x23a166.id || _0x572a0a.handle !== _0x430fde;
              });
            };
            for (_0x148c6f = _0x546d27[Symbol.iterator](); !(_0x4aebaf = (_0x5d97d1 = _0x148c6f.next()).done); _0x4aebaf = true) {
              _0x2c518b();
            }
          } catch (_0x2cbfc8) {
            _0x215332 = true;
            _0xffa9ff = _0x2cbfc8;
          } finally {
            try {
              if (!_0x4aebaf && _0x148c6f.return != null) {
                _0x148c6f.return();
              }
            } finally {
              if (_0x215332) {
                throw _0xffa9ff;
              }
            }
          }
          return [2];
        });
      });
      return function(_0x536bf2) {
        return _0x370540.apply(this, arguments);
      };
    })());
    var _0x5b0d4d = false;
    var _0x11ab02 = 0;
    function _0x4a150e() {
      var _0x27c448 = true;
      var _0x5862b8 = false;
      var _0x469193 = void 0;
      try {
        for (var _0x9e7bd4 = _0x1ad6cf[Symbol.iterator](), _0xab5c16; !(_0x27c448 = (_0xab5c16 = _0x9e7bd4.next()).done); _0x27c448 = true) {
          var _0x55021b = _0xab5c16.value;
          var _0x40b6d0;
          var _0x4d4590;
          var _0x416889 = (_0x40b6d0 = _0x55021b.object.data.metadata) === null || _0x40b6d0 === void 0 ? void 0 : _0x40b6d0.location?.interiorModel;
          var _0x3421cf = (_0x4d4590 = _0x55021b.object.data.metadata) === null || _0x4d4590 === void 0 ? void 0 : _0x4d4590.location?.interiorZoneName;
          if (_0x55021b.object.data.metadata && _0x55021b.object.data.metadata.attachedObjects) {
            for (var _0x3b5622 in _0x55021b.object.data.metadata.attachedObjects) {
              var _0x452b5a = _0x55021b.object.data.metadata.attachedObjects[_0x3b5622];
              if (_0x452b5a && _0x452b5a.coords) {
                var _0x183164 = {
                  x: _0x55021b.object.x,
                  y: _0x55021b.object.y,
                  z: _0x55021b.object.z
                };
                var _0x35f801 = _0x183164;
                var _0x478bae = {
                  x: _0x452b5a.coords.x,
                  y: _0x452b5a.coords.y,
                  z: _0x452b5a.coords.z + 200
                };
                var _0x269a23 = _0x478bae;
                if (_0x416889) {
                  DrawLine(_0x35f801.x, _0x35f801.y, _0x35f801.z, _0x269a23.x, _0x269a23.y, _0x269a23.z, 255, 0, 0, 255);
                } else if (_0x3421cf) {
                  DrawLine(_0x35f801.x, _0x35f801.y, _0x35f801.z, _0x269a23.x, _0x269a23.y, _0x269a23.z, 0, 255, 0, 255);
                } else {
                  DrawLine(_0x35f801.x, _0x35f801.y, _0x35f801.z, _0x269a23.x, _0x269a23.y, _0x269a23.z, 0, 0, 255, 255);
                }
              }
            }
          }
        }
      } catch (_0x48ca45) {
        _0x5862b8 = true;
        _0x469193 = _0x48ca45;
      } finally {
        try {
          if (!_0x27c448 && _0x9e7bd4.return != null) {
            _0x9e7bd4.return();
          }
        } finally {
          if (_0x5862b8) {
            throw _0x469193;
          }
        }
      }
    }
    var _0x8eb3fb = (function() {
      var _0x5a3ba1 = _0x2b7a30(function() {
        var _0x5f05c7;
        var _0x30439c;
        var _0x42bfd6;
        var _0x469615;
        var _0x5724c0;
        var _0x48c9fc;
        return _0x40b847(this, function(_0x3f955f) {
          switch (_0x3f955f.label) {
            case 0:
              _0x43fd3f = RequestScaleformMovie("digiscanner");
              return [4, _0x1fed2e.waitForCondition(function() {
                return HasScaleformMovieLoaded(_0x43fd3f);
              }, 1e4)];
            case 1:
              _0x3f955f.sent();
              if (!IsNamedRendertargetRegistered("digiscanner")) {
                RegisterNamedRendertarget("digiscanner", false);
              }
              LinkNamedRendertarget(GetWeapontypeModel(GetHashKey("WEAPON_DIGISCANNER")));
              _0x5f05c7 = 0;
              _0x30439c = 0;
              _0x42bfd6 = Date.now();
              _0x469615 = 0;
              _0x5724c0 = 10;
              _0x48c9fc = _0x5724c0;
              if (IsNamedRendertargetRegistered("digiscanner")) {
                _0x5f05c7 = GetNamedRendertargetRenderId("digiscanner");
              }
              _0x3188f6 = setTick(function() {
                _0x469615 = (Date.now() - _0x42bfd6) / 1e3;
                SetTextRenderId(_0x5f05c7);
                DrawScaleformMovie(_0x43fd3f, _0xea872e.x, _0xea872e.y, _0xea872e.width, _0xea872e.height, 100, 100, 100, 255, 0);
                SetTextRenderId(1);
                if (_0x14d1ad.equals(new _0x4bd5f4(0, 0, 0))) {
                  _0x1f4907(_0x43fd3f, _0x33390d.black, _0x33390d.black);
                  _0x25bbbb(_0x43fd3f, 999.9, _0x48c9fc);
                  return;
                }
                var _0x50e5e1 = GetEntityHeading(PlayerPedId());
                var _0x3f7b22 = new _0x4bd5f4(GetEntityCoords(PlayerPedId()));
                var _0x26fd2b = _0x3f7b22.getDistance(_0x14d1ad);
                if (_0x324480(_0x3f7b22, _0x50e5e1, _0x14d1ad)) {
                  _0x1f4907(_0x43fd3f, _0x33390d.lightblue, _0x33390d.yellow);
                } else {
                  _0x1f4907(_0x43fd3f, _0x33390d.red, _0x33390d.red);
                }
                _0x25bbbb(_0x43fd3f, _0x26fd2b, _0x48c9fc);
                if (Date.now() > _0x30439c + _0x55239f) {
                  _0x30439c = Date.now();
                  if (IsPlayerFreeAiming(PlayerId())) {
                    PlaySoundFrontend(-1, "IDLE_BEEP", "epsilonism_04_soundset", true);
                  }
                }
              });
              return [2];
          }
        });
      });
      return function _0x857636() {
        return _0x5a3ba1.apply(this, arguments);
      };
    })();
    function _0x1f4907(_0x1d5def, _0x559be3, _0x19636e) {
      if (!_0x1d5def) {
        return;
      }
      BeginScaleformMovieMethod(_0x1d5def, "SET_COLOUR");
      PushScaleformMovieMethodParameterInt(_0x559be3.r);
      PushScaleformMovieMethodParameterInt(_0x559be3.g);
      PushScaleformMovieMethodParameterInt(_0x559be3.b);
      PushScaleformMovieMethodParameterInt(_0x19636e.r);
      PushScaleformMovieMethodParameterInt(_0x19636e.g);
      PushScaleformMovieMethodParameterInt(_0x19636e.b);
      EndScaleformMovieMethod();
    }
    function _0x25bbbb(_0x274d8e, _0xe6e616, _0x5d11c9) {
      if (!_0x274d8e) {
        return;
      }
      var _0x79cd30 = [{
        dist: 150,
        scaleformBars: 10,
        beepWait: 8e3
      }, {
        dist: 125,
        scaleformBars: 20,
        beepWait: 7e3
      }, {
        dist: 100,
        scaleformBars: 30,
        beepWait: 6e3
      }, {
        dist: 75,
        scaleformBars: 40,
        beepWait: 5e3
      }, {
        dist: 50,
        scaleformBars: 50,
        beepWait: 4e3
      }, {
        dist: 40,
        scaleformBars: 60,
        beepWait: 3500
      }, {
        dist: 30,
        scaleformBars: 70,
        beepWait: 3e3
      }, {
        dist: 20,
        scaleformBars: 80,
        beepWait: 2e3
      }, {
        dist: 15,
        scaleformBars: 85,
        beepWait: 1500
      }, {
        dist: 10,
        scaleformBars: 100,
        beepWait: 500
      }];
      for (var _0x3cb947 = 0; _0x3cb947 < _0x79cd30.length; _0x3cb947++) {
        if (_0xe6e616 > _0x79cd30[_0x3cb947].dist) {
          _0x55239f = _0x79cd30[_0x3cb947].beepWait;
          BeginScaleformMovieMethod(_0x274d8e, "SET_DISTANCE");
          PushScaleformMovieMethodParameterFloat(_0x79cd30[_0x3cb947].scaleformBars);
          EndScaleformMovieMethod();
          break;
        }
      }
      if (_0xe6e616 < _0x5d11c9) {
        _0x55239f = 250;
        _0x1f4907(_0x274d8e, _0x33390d.green, _0x33390d.green);
      }
    }
    function _0x324480(_0x144029, _0x39f268, _0x38ba63) {
      var _0x1d3f0d = _0x38ba63.x - _0x144029.x;
      var _0xe694f7 = _0x38ba63.y - _0x144029.y;
      var _0x37ef5c = GetHeadingFromVector_2d(_0x1d3f0d, _0xe694f7);
      return Math.abs(_0x39f268 - _0x37ef5c) < 20;
    }
    _0x539aaf.on("inventory:weaponEquipped", function(_0x38df63, _0x3dd1b4, _0x578f5f) {
      if (_0x3dd1b4.itemId !== "lag_detector") {
        return;
      }
      _0x8eb3fb();
    });
    _0x539aaf.on("inventory:weaponUnequipped", function() {
      clearTick(_0x3188f6);
      SetScaleformMovieAsNoLongerNeeded(_0x43fd3f);
      _0x43fd3f = 0;
      _0x3188f6 = 0;
      _0x55239f = 8e3;
    });
    ;
    var _0x13d494 = {
      prop_tree_birch_02: "birch_sprout",
      prop_tree_cedar_s_02: "cedar_sprout",
      prop_palm_fan_02_b: "palm_sprout",
      prop_palm_huge_01a: "palm_sprout",
      prop_tree_cedar_02: "cedar_sprout",
      prop_tree_pine_01: "pine_sprout",
      prop_palm_med_01b: "palm_sprout",
      prop_tree_lficus_05: "ficus_sprout",
      prop_tree_cedar_03: "cedar_sprout"
    };
    var _0x2dcf0b = {
      center: [-527.85, -2230.15, 11.05],
      length: 15.57,
      width: 30.11,
      options: {
        heading: 230,
        minZ: 5,
        maxZ: 16.1
      }
    };
    var _0x33b023 = {
      id: "port",
      zone: _0x2dcf0b,
      model: "np_housing_art_lw_rare_01",
      interaction: [-539.32, -2238.89, 7.94],
      texture: {
        dict: "np_housing_art_lw_rare_01",
        name: "np_housing_art_d"
      },
      resolution: [2048, 1024]
    };
    var _0x1c052b = [_0x33b023];
    var _0x1b1570 = "misc_the_board_zone";
    var _0x4269de = {
      x: -3110.48,
      y: 175.29
    };
    var _0x560ffb = {
      x: -1669.24,
      y: 1017.13
    };
    var _0x304b26 = {
      x: -717.96,
      y: 968.66
    };
    var _0x2b7df5 = {
      x: -63.57,
      y: 574.85
    };
    var _0x3375f1 = {
      x: 1198.09,
      y: -240.7
    };
    var _0x242a17 = {
      x: 1446.51,
      y: -583.01
    };
    var _0x56f886 = {
      x: 1430.44,
      y: -821.36
    };
    var _0x1f8934 = {
      x: 1966.11,
      y: -917.52
    };
    var _0x34da86 = {
      x: 2013.07,
      y: -990.23
    };
    var _0x2e4896 = {
      x: 1662.66,
      y: -2553.37
    };
    var _0x778a0d = {
      x: 1301.68,
      y: -3359.84
    };
    var _0x258038 = {
      x: 71.67,
      y: -3384.07
    };
    var _0x47dd4c = {
      x: -1044.43,
      y: -3673.72
    };
    var _0x1b5330 = {
      x: -2174.47,
      y: -3149.65
    };
    var _0x5af891 = {
      x: -1652.06,
      y: -2203.3
    };
    var _0x3b25f3 = {
      x: -3417.48,
      y: -100.69
    };
    var _0x22aaa1 = {
      id: "city",
      points: [_0x4269de, _0x560ffb, _0x304b26, _0x2b7df5, {
        x: 651.65,
        y: 702.91
      }, {
        x: 1328.76,
        y: 321.22
      }, _0x3375f1, _0x242a17, _0x56f886, _0x1f8934, _0x34da86, _0x2e4896, _0x778a0d, _0x258038, _0x47dd4c, _0x1b5330, _0x5af891, _0x3b25f3],
      options: {
        minZ: 0,
        maxZ: 800
      }
    };
    var _0x1faa12 = {
      x: -3194.7,
      y: 1656.33
    };
    var _0xf39714 = {
      x: -2802.52,
      y: 2954.78
    };
    var _0x1c5122 = {
      x: -3238.78,
      y: 3266.81
    };
    var _0x2facbf = {
      x: -3011.56,
      y: 3648.5
    };
    var _0xf03343 = {
      x: -2684.37,
      y: 3609.12
    };
    var _0x42aea3 = {
      x: -2463.22,
      y: 4546.67
    };
    var _0x1cf020 = {
      x: -845.43,
      y: 2747.25
    };
    var _0x5c467b = {
      x: -1559.86,
      y: 2114.33
    };
    var _0x46db92 = {
      x: -1902.2,
      y: 1711.43
    };
    var _0x93a2e3 = {
      id: "zancudo",
      points: [_0x1faa12, _0xf39714, _0x1c5122, _0x2facbf, _0xf03343, _0x42aea3, _0x1cf020, _0x5c467b, _0x46db92],
      options: {
        minZ: 0,
        maxZ: 800
      }
    };
    var _0x138813 = {
      x: -703.27,
      y: 6089.63
    };
    var _0x6eaca1 = {
      x: -391.22,
      y: 5842.74
    };
    var _0x5b24fa = {
      x: -26.16,
      y: 6136.58
    };
    var _0x2f0276 = {
      x: -44.54,
      y: 6889.79
    };
    var _0x5ab6a1 = {
      x: -382.34,
      y: 6555.05
    };
    var _0x2b0fb1 = {
      x: -671.66,
      y: 6352.08
    };
    var _0x3ae3e0 = {
      id: "paleto",
      points: [_0x138813, _0x6eaca1, _0x5b24fa, {
        x: 357.08,
        y: 6398.62
      }, _0x2f0276, _0x5ab6a1, _0x2b0fb1],
      options: {
        minZ: 0,
        maxZ: 800
      }
    };
    var _0x509f61 = [_0x22aaa1, {
      id: "senora",
      points: [{
        x: 267.87,
        y: 2626.12
      }, {
        x: 635.39,
        y: 2150.6
      }, {
        x: 1143.37,
        y: 1756.73
      }, {
        x: 1694.76,
        y: 1850.64
      }, {
        x: 1582.66,
        y: 2359.57
      }, {
        x: 1382.71,
        y: 2717.03
      }, {
        x: 667.73,
        y: 2729.15
      }, {
        x: 255.98,
        y: 2662.2
      }],
      options: {
        minZ: 0,
        maxZ: 800
      }
    }, {
      id: "power",
      points: [{
        x: 2853.85,
        y: 3344.28
      }, {
        x: 2517.57,
        y: 2914.11
      }, {
        x: 1969.22,
        y: 2405.19
      }, {
        x: 1984.36,
        y: 1772.06
      }, {
        x: 2450.92,
        y: 1038.96
      }, {
        x: 2923.53,
        y: 1002.61
      }, {
        x: 3335.55,
        y: 2696
      }],
      options: {
        minZ: 0,
        maxZ: 800
      }
    }, _0x93a2e3, {
      id: "sandy",
      points: [{
        x: 1392.04,
        y: 4953.48
      }, {
        x: 1652.59,
        y: 4426.38
      }, {
        x: 2376.65,
        y: 4571.79
      }, {
        x: 2367.56,
        y: 4084.06
      }, {
        x: 3115.87,
        y: 4277.94
      }, {
        x: 2779.59,
        y: 5177.65
      }, {
        x: 2000.99,
        y: 5320.03
      }],
      options: {
        minZ: 0,
        maxZ: 800
      }
    }, _0x3ae3e0];
    ;
    function _0x4e7e90(_0x250824, _0x42696e, _0x1cb7f5, _0x2fcbaf, _0x3ca79f, _0x5803b1, _0x474677) {
      try {
        var _0x1a6636 = _0x250824[_0x5803b1](_0x474677);
        var _0xa0e921 = _0x1a6636.value;
      } catch (_0x458a07) {
        _0x1cb7f5(_0x458a07);
        return;
      }
      if (_0x1a6636.done) {
        _0x42696e(_0xa0e921);
      } else {
        Promise.resolve(_0xa0e921).then(_0x2fcbaf, _0x3ca79f);
      }
    }
    function _0x1c2fe9(_0x33cc7a) {
      return function() {
        var _0x50da17 = this;
        var _0x5c3775 = arguments;
        return new Promise(function(_0x5b92fd, _0x4a5d88) {
          var _0x650fd8 = _0x33cc7a.apply(_0x50da17, _0x5c3775);
          function _0x5499b3(_0x1b622f) {
            _0x4e7e90(_0x650fd8, _0x5b92fd, _0x4a5d88, _0x5499b3, _0x463818, "next", _0x1b622f);
          }
          function _0x463818(_0x5ed14a) {
            _0x4e7e90(_0x650fd8, _0x5b92fd, _0x4a5d88, _0x5499b3, _0x463818, "throw", _0x5ed14a);
          }
          _0x5499b3(void 0);
        });
      };
    }
    function _0x52f313(_0x465dd7, _0x5e6104) {
      var _0x2f5278;
      var _0x15e259;
      var _0x92ae07;
      var _0x16d964;
      var _0x1cae46 = {
        label: 0,
        sent: function() {
          if (_0x92ae07[0] & 1) {
            throw _0x92ae07[1];
          }
          return _0x92ae07[1];
        },
        trys: [],
        ops: []
      };
      _0x16d964 = {
        next: _0x39c903(0),
        throw: _0x39c903(1),
        return: _0x39c903(2)
      };
      if (typeof Symbol === "function") {
        _0x16d964[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x16d964;
      function _0x39c903(_0x5b2807) {
        return function(_0xa5f7ff) {
          return _0x54526b([_0x5b2807, _0xa5f7ff]);
        };
      }
      function _0x54526b(_0x2cd4cb) {
        if (_0x2f5278) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x1cae46) {
          try {
            _0x2f5278 = 1;
            if (_0x15e259 && (_0x92ae07 = _0x2cd4cb[0] & 2 ? _0x15e259.return : _0x2cd4cb[0] ? _0x15e259.throw || ((_0x92ae07 = _0x15e259.return) && _0x92ae07.call(_0x15e259), 0) : _0x15e259.next) && !(_0x92ae07 = _0x92ae07.call(_0x15e259, _0x2cd4cb[1])).done) {
              return _0x92ae07;
            }
            _0x15e259 = 0;
            if (_0x92ae07) {
              _0x2cd4cb = [_0x2cd4cb[0] & 2, _0x92ae07.value];
            }
            switch (_0x2cd4cb[0]) {
              case 0:
              case 1:
                _0x92ae07 = _0x2cd4cb;
                break;
              case 4:
                _0x1cae46.label++;
                return {
                  value: _0x2cd4cb[1],
                  done: false
                };
              case 5:
                _0x1cae46.label++;
                _0x15e259 = _0x2cd4cb[1];
                _0x2cd4cb = [0];
                continue;
              case 7:
                _0x2cd4cb = _0x1cae46.ops.pop();
                _0x1cae46.trys.pop();
                continue;
              default:
                if (!(_0x92ae07 = _0x1cae46.trys, _0x92ae07 = _0x92ae07.length > 0 && _0x92ae07[_0x92ae07.length - 1]) && (_0x2cd4cb[0] === 6 || _0x2cd4cb[0] === 2)) {
                  _0x1cae46 = 0;
                  continue;
                }
                if (_0x2cd4cb[0] === 3 && (!_0x92ae07 || _0x2cd4cb[1] > _0x92ae07[0] && _0x2cd4cb[1] < _0x92ae07[3])) {
                  _0x1cae46.label = _0x2cd4cb[1];
                  break;
                }
                if (_0x2cd4cb[0] === 6 && _0x1cae46.label < _0x92ae07[1]) {
                  _0x1cae46.label = _0x92ae07[1];
                  _0x92ae07 = _0x2cd4cb;
                  break;
                }
                if (_0x92ae07 && _0x1cae46.label < _0x92ae07[2]) {
                  _0x1cae46.label = _0x92ae07[2];
                  _0x1cae46.ops.push(_0x2cd4cb);
                  break;
                }
                if (_0x92ae07[2]) {
                  _0x1cae46.ops.pop();
                }
                _0x1cae46.trys.pop();
                continue;
            }
            _0x2cd4cb = _0x5e6104.call(_0x465dd7, _0x1cae46);
          } catch (_0x4604c9) {
            _0x2cd4cb = [6, _0x4604c9];
            _0x15e259 = 0;
          } finally {
            _0x2f5278 = _0x92ae07 = 0;
          }
        }
        if (_0x2cd4cb[0] & 5) {
          throw _0x2cd4cb[1];
        }
        var _0x50d91d = {
          value: _0x2cd4cb[0] ? _0x2cd4cb[1] : void 0,
          done: true
        };
        return _0x50d91d;
      }
    }
    var _0x224cfe = (function() {
      var _0x2f7ce2 = _0x1c2fe9(function() {
        return _0x52f313(this, function(_0x15fb24) {
          return [2];
        });
      });
      return function _0x309db6() {
        return _0x2f7ce2.apply(this, arguments);
      };
    })();
    _0x539aaf.on("misc:trees:plantSprout", (function() {
      var _0x2e460c = _0x1c2fe9(function(_0x499bf1, _0x397444) {
        var _0x1a3815;
        var _0x12a382;
        var _0x380ffa;
        var _0x43be18;
        var _0x38ddb8;
        var _0x5c4a11;
        var _0x33f055;
        return _0x52f313(this, function(_0x4a8f32) {
          switch (_0x4a8f32.label) {
            case 0:
              _0x12a382 = _0x27d38c.Sync["np-objects"].GetObjectByEntity(_0x397444);
              if (!_0x12a382) {
                return [2, console.error("No object found for entity", _0x397444)];
              }
              _0x380ffa = _0x12a382.data.model === GetHashKey("prop_tree_flag");
              if (!_0x380ffa) {
                return [2, console.error("Entity is not a tree flag", _0x12a382.model)];
              }
              _0x43be18 = (_0x1a3815 = _0x12a382.data) === null || _0x1a3815 === void 0 ? void 0 : _0x1a3815.metadata?.treeModel;
              _0x38ddb8 = _0x13d494[_0x43be18];
              if (!_0x38ddb8) {
                return [2, console.error("No item found for model", _0x43be18)];
              }
              var _0x5d9915 = {
                quantity: 1,
                variant: _0x38ddb8
              };
              return [4, _0x3b5fd8.HasItem("tree_sprout", _0x5d9915)];
            case 1:
              _0x5c4a11 = _0x4a8f32.sent();
              if (!_0x5c4a11) {
                emit("DoLongHudText", "You need to have a sprout", 2);
                return [2];
              }
              return [4, _0x47f917(PlayerPedId(), _0x397444)];
            case 2:
              _0x4a8f32.sent();
              TaskStartScenarioInPlace(PlayerPedId(), "WORLD_HUMAN_GARDENER_PLANT", 0, true);
              return [4, _0x4c27ed.taskBar(5e3, "Planting Sprout...", true)];
            case 3:
              _0x33f055 = _0x4a8f32.sent();
              if (_0x33f055 !== 100) {
                return [2];
              }
              _0x539aaf.emitNet("misc:trees:plantSprout", _0x12a382.id);
              ClearPedTasks(PlayerPedId());
              return [2];
          }
        });
      });
      return function(_0x3648ef, _0xf2ee6b) {
        return _0x2e460c.apply(this, arguments);
      };
    })());
    _0x539aaf.on("misc:trees:waterSprout", (function() {
      var _0x27ce87 = _0x1c2fe9(function(_0x200365, _0x4c63ab, _0x22dac0, _0x39d1de) {
        var _0x486929;
        var _0x53faf8;
        var _0x39d8d7;
        var _0x4ce702;
        return _0x52f313(this, function(_0x115c80) {
          switch (_0x115c80.label) {
            case 0:
              _0x53faf8 = _0x27d38c.Sync["np-objects"].GetObjectByEntity(_0x4c63ab);
              if (!_0x53faf8) {
                return [2, console.error("No object found for entity", _0x4c63ab)];
              }
              _0x39d8d7 = (_0x486929 = _0x200365) === null || _0x486929 === void 0 ? void 0 : _0x486929.model.includes("_small");
              if (!_0x39d8d7) {
                return [2, console.error("Entity is not a small tree", _0x53faf8.model)];
              }
              return [4, _0x4b48c6(_0x4c63ab)];
            case 1:
              _0x4ce702 = _0x115c80.sent();
              if (_0x4ce702) {
                _0x539aaf.emitNet("misc:trees:water", _0x53faf8.id, "sprout");
              }
              return [2];
          }
        });
      });
      return function(_0x48a964, _0x20adea, _0x9a63dc, _0x24cb36) {
        return _0x27ce87.apply(this, arguments);
      };
    })());
    _0x539aaf.on("misc:trees:waterSapling", (function() {
      var _0x39c2b6 = _0x1c2fe9(function(_0x486bac, _0x448e5a, _0x1b809f, _0x4d0c82) {
        var _0x578f0f;
        var _0xb2416a;
        var _0x50330d;
        var _0x204ce3;
        return _0x52f313(this, function(_0xced263) {
          switch (_0xced263.label) {
            case 0:
              _0xb2416a = _0x27d38c.Sync["np-objects"].GetObjectByEntity(_0x448e5a);
              if (!_0xb2416a) {
                return [2, console.error("No object found for entity", _0x448e5a)];
              }
              _0x50330d = (_0x578f0f = _0x486bac) === null || _0x578f0f === void 0 ? void 0 : _0x578f0f.model.includes("_medium");
              if (!_0x50330d) {
                return [2, console.error("Entity is not a medium tree", _0xb2416a.model)];
              }
              return [4, _0x4b48c6(_0x448e5a)];
            case 1:
              _0x204ce3 = _0xced263.sent();
              if (_0x204ce3) {
                _0x539aaf.emitNet("misc:trees:water", _0xb2416a.id, "sapling");
              }
              return [2];
          }
        });
      });
      return function(_0x35a128, _0x533292, _0x48b569, _0xe1a231) {
        return _0x39c2b6.apply(this, arguments);
      };
    })());
    ;
    function _0x345f0c(_0x3d785d, _0xf11523) {
      if (_0xf11523 == null || _0xf11523 > _0x3d785d.length) {
        _0xf11523 = _0x3d785d.length;
      }
      for (var _0x14e848 = 0, _0xde17aa = new Array(_0xf11523); _0x14e848 < _0xf11523; _0x14e848++) {
        _0xde17aa[_0x14e848] = _0x3d785d[_0x14e848];
      }
      return _0xde17aa;
    }
    function _0x202fbc(_0x580269) {
      if (Array.isArray(_0x580269)) {
        return _0x580269;
      }
    }
    function _0x1e5f6e(_0x509907, _0x56f64e, _0x56de20, _0x2a0ddd, _0x59d7d8, _0x3eff25, _0x3887ae) {
      try {
        var _0x47bfd9 = _0x509907[_0x3eff25](_0x3887ae);
        var _0x174ea8 = _0x47bfd9.value;
      } catch (_0x48ee5e) {
        _0x56de20(_0x48ee5e);
        return;
      }
      if (_0x47bfd9.done) {
        _0x56f64e(_0x174ea8);
      } else {
        Promise.resolve(_0x174ea8).then(_0x2a0ddd, _0x59d7d8);
      }
    }
    function _0x13c9b4(_0x20fd3d) {
      return function() {
        var _0xa36e1b = this;
        var _0x15cdbd = arguments;
        return new Promise(function(_0x518232, _0x90d8ec) {
          var _0x2771c5 = _0x20fd3d.apply(_0xa36e1b, _0x15cdbd);
          function _0x4a6a4f(_0x19234f) {
            _0x1e5f6e(_0x2771c5, _0x518232, _0x90d8ec, _0x4a6a4f, _0x40d2ca, "next", _0x19234f);
          }
          function _0x40d2ca(_0x5ca35f) {
            _0x1e5f6e(_0x2771c5, _0x518232, _0x90d8ec, _0x4a6a4f, _0x40d2ca, "throw", _0x5ca35f);
          }
          _0x4a6a4f(void 0);
        });
      };
    }
    function _0x265d70(_0x20e50e, _0x1bbbd9) {
      var _0x51628a = _0x20e50e == null ? null : typeof Symbol !== "undefined" && _0x20e50e[Symbol.iterator] || _0x20e50e["@@iterator"];
      if (_0x51628a == null) {
        return;
      }
      var _0x55fb3c = [];
      var _0x4c067a = true;
      var _0x4f2cc9 = false;
      var _0xb6063d;
      var _0x3c9066;
      try {
        for (_0x51628a = _0x51628a.call(_0x20e50e); !(_0x4c067a = (_0xb6063d = _0x51628a.next()).done); _0x4c067a = true) {
          _0x55fb3c.push(_0xb6063d.value);
          if (_0x1bbbd9 && _0x55fb3c.length === _0x1bbbd9) {
            break;
          }
        }
      } catch (_0xc4766a) {
        _0x4f2cc9 = true;
        _0x3c9066 = _0xc4766a;
      } finally {
        try {
          if (!_0x4c067a && _0x51628a.return != null) {
            _0x51628a.return();
          }
        } finally {
          if (_0x4f2cc9) {
            throw _0x3c9066;
          }
        }
      }
      return _0x55fb3c;
    }
    function _0x376b5e() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0x2b5618(_0x3fb286, _0x3ae597) {
      return _0x202fbc(_0x3fb286) || _0x265d70(_0x3fb286, _0x3ae597) || _0x430f83(_0x3fb286, _0x3ae597) || _0x376b5e();
    }
    function _0x430f83(_0x31b746, _0x3a9108) {
      if (!_0x31b746) {
        return;
      }
      if (typeof _0x31b746 === "string") {
        return _0x345f0c(_0x31b746, _0x3a9108);
      }
      var _0x25cb88 = Object.prototype.toString.call(_0x31b746).slice(8, -1);
      if (_0x25cb88 === "Object" && _0x31b746.constructor) {
        _0x25cb88 = _0x31b746.constructor.name;
      }
      if (_0x25cb88 === "Map" || _0x25cb88 === "Set") {
        return Array.from(_0x25cb88);
      }
      if (_0x25cb88 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x25cb88)) {
        return _0x345f0c(_0x31b746, _0x3a9108);
      }
    }
    function _0x2dee62(_0x962bc5, _0xf940e6) {
      var _0x5055e2;
      var _0x3e902b;
      var _0x228d92;
      var _0x1a13f0;
      var _0xab7e58 = {
        label: 0,
        sent: function() {
          if (_0x228d92[0] & 1) {
            throw _0x228d92[1];
          }
          return _0x228d92[1];
        },
        trys: [],
        ops: []
      };
      _0x1a13f0 = {
        next: _0x294741(0),
        throw: _0x294741(1),
        return: _0x294741(2)
      };
      if (typeof Symbol === "function") {
        _0x1a13f0[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x1a13f0;
      function _0x294741(_0x2dd79d) {
        return function(_0x2884ba) {
          return _0x516923([_0x2dd79d, _0x2884ba]);
        };
      }
      function _0x516923(_0x35e758) {
        if (_0x5055e2) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0xab7e58) {
          try {
            _0x5055e2 = 1;
            if (_0x3e902b && (_0x228d92 = _0x35e758[0] & 2 ? _0x3e902b.return : _0x35e758[0] ? _0x3e902b.throw || ((_0x228d92 = _0x3e902b.return) && _0x228d92.call(_0x3e902b), 0) : _0x3e902b.next) && !(_0x228d92 = _0x228d92.call(_0x3e902b, _0x35e758[1])).done) {
              return _0x228d92;
            }
            _0x3e902b = 0;
            if (_0x228d92) {
              _0x35e758 = [_0x35e758[0] & 2, _0x228d92.value];
            }
            switch (_0x35e758[0]) {
              case 0:
              case 1:
                _0x228d92 = _0x35e758;
                break;
              case 4:
                _0xab7e58.label++;
                return {
                  value: _0x35e758[1],
                  done: false
                };
              case 5:
                _0xab7e58.label++;
                _0x3e902b = _0x35e758[1];
                _0x35e758 = [0];
                continue;
              case 7:
                _0x35e758 = _0xab7e58.ops.pop();
                _0xab7e58.trys.pop();
                continue;
              default:
                if (!(_0x228d92 = _0xab7e58.trys, _0x228d92 = _0x228d92.length > 0 && _0x228d92[_0x228d92.length - 1]) && (_0x35e758[0] === 6 || _0x35e758[0] === 2)) {
                  _0xab7e58 = 0;
                  continue;
                }
                if (_0x35e758[0] === 3 && (!_0x228d92 || _0x35e758[1] > _0x228d92[0] && _0x35e758[1] < _0x228d92[3])) {
                  _0xab7e58.label = _0x35e758[1];
                  break;
                }
                if (_0x35e758[0] === 6 && _0xab7e58.label < _0x228d92[1]) {
                  _0xab7e58.label = _0x228d92[1];
                  _0x228d92 = _0x35e758;
                  break;
                }
                if (_0x228d92 && _0xab7e58.label < _0x228d92[2]) {
                  _0xab7e58.label = _0x228d92[2];
                  _0xab7e58.ops.push(_0x35e758);
                  break;
                }
                if (_0x228d92[2]) {
                  _0xab7e58.ops.pop();
                }
                _0xab7e58.trys.pop();
                continue;
            }
            _0x35e758 = _0xf940e6.call(_0x962bc5, _0xab7e58);
          } catch (_0x1de278) {
            _0x35e758 = [6, _0x1de278];
            _0x3e902b = 0;
          } finally {
            _0x5055e2 = _0x228d92 = 0;
          }
        }
        if (_0x35e758[0] & 5) {
          throw _0x35e758[1];
        }
        var _0x1e4a25 = {
          value: _0x35e758[0] ? _0x35e758[1] : void 0,
          done: true
        };
        return _0x1e4a25;
      }
    }
    var _0x33f514 = (function() {
      var _0x4b4e31 = _0x13c9b4(function() {
        return _0x2dee62(this, function(_0x443e6f) {
          switch (_0x443e6f.label) {
            case 0:
              _0x38f759.execute("np-datagrid:subscribe", "trees").catch(function(_0x1bc356) {
                console.error("[Trees] Failed to subscribe to datagrid:", _0x1bc356);
              });
              return [4, _0x224cfe()];
            case 1:
              _0x443e6f.sent();
              var _0x260831 = {
                offset: [0, 0, 0.5],
                distance: {
                  draw: 5,
                  use: 1.5
                },
                skipLos: true,
                isEnabled: function() {
                  return true;
                }
              };
              _0x4c27ed.addInteractionByModel("misc:trees:plant_sprout", ["prop_tree_flag"], [{
                eventSDK: "misc:trees:plantSprout",
                id: "plant_sprout",
                label: "Plant Sprout",
                parameters: {}
              }], _0x260831);
              Object.keys(_0x13d494).forEach(function(_0x5b633e) {
                var _0x58c7cb = {
                  offset: [0, 0, 1],
                  distance: {
                    draw: 5,
                    use: 1.5
                  },
                  skipLos: true,
                  isEnabled: function() {
                    return true;
                  }
                };
                _0x4c27ed.addInteractionByModel("misc:trees:water_sprout", [`${_0x5b633e}_small`], [{
                  eventSDK: "misc:trees:waterSprout",
                  id: "misc:trees:waterSprout",
                  label: "Water Sprout",
                  parameters: {
                    model: `${_0x5b633e}_small`
                  }
                }], _0x58c7cb);
                var _0x32b94d = {
                  offset: [0, 0, 1],
                  distance: {
                    draw: 5,
                    use: 1.5
                  },
                  skipLos: true,
                  isEnabled: function() {
                    return true;
                  }
                };
                _0x4c27ed.addInteractionByModel("misc:trees:water_sapling", [`${_0x5b633e}_medium`], [{
                  eventSDK: "misc:trees:waterSapling",
                  id: "grow_medium",
                  label: "Water Sapling",
                  parameters: {
                    model: `${_0x5b633e}_medium`
                  }
                }], _0x32b94d);
              });
              return [2];
          }
        });
      });
      return function _0x7deac6() {
        return _0x4b4e31.apply(this, arguments);
      };
    })();
    function _0x47f917(_0x6ea0a1, _0x5550f7) {
      return _0x10c3fa.apply(this, arguments);
    }
    function _0x10c3fa() {
      _0x10c3fa = _0x13c9b4(function(_0x445006, _0x41ced2) {
        return _0x2dee62(this, function(_0x12631b) {
          switch (_0x12631b.label) {
            case 0:
              TaskTurnPedToFaceEntity(_0x445006, _0x41ced2, 0);
              return [4, _0x2ad271.wait(100)];
            case 1:
              _0x12631b.sent();
              return [4, _0x2ad271.waitForCondition(function() {
                return GetScriptTaskStatus(_0x445006, 3419293077) !== 1;
              }, 2e3)];
            case 2:
              _0x12631b.sent();
              return [2];
          }
        });
      });
      return _0x10c3fa.apply(this, arguments);
    }
    function _0x4b48c6(_0x453a20) {
      return _0x4bdbad.apply(this, arguments);
    }
    function _0x4bdbad() {
      _0x4bdbad = _0x13c9b4(function(_0x537ae0) {
        var _0x4e69b7;
        var _0x135ce1;
        var _0xeea432;
        var _0x2874a6;
        var _0x34e8f3;
        var _0x1c6bab;
        var _0x5a06f5;
        var _0x4910bb;
        var _0x584468;
        var _0x22c12d;
        var _0x399fa2;
        var _0x57ce0d;
        var _0x46fd53;
        var _0x462a6c;
        var _0x409cbd;
        var _0x3747d8;
        var _0x2719f1;
        var _0x374a7f;
        var _0x266cac;
        var _0x3125bf = arguments;
        return _0x2dee62(this, function(_0x54c74f) {
          switch (_0x54c74f.label) {
            case 0:
              _0x4e69b7 = _0x3125bf.length > 1 && _0x3125bf[1] !== void 0 ? _0x3125bf[1] : 5e3;
              return [4, _0x3b5fd8.HasItem("tree_watering_can")];
            case 1:
              if (!_0x54c74f.sent()) {
                emit("DoLongHudText", "You need a watering can to water this tree.", 2);
                return [2, false];
              }
              _0x1c6bab = _0x27d38c.Sync["np-objects"].GetObjectByEntity(_0x537ae0);
              if (!_0x1c6bab) {
                console.error("No object found for entity", _0x537ae0);
                return [2, false];
              }
              if (((_0xeea432 = _0x1c6bab) === null || _0xeea432 === void 0 ? void 0 : (_0x135ce1 = _0xeea432.data) === null || _0x135ce1 === void 0 ? void 0 : _0x135ce1.metadata?.lastWatered) && Date.now() - ((_0x34e8f3 = _0x1c6bab) === null || _0x34e8f3 === void 0 ? void 0 : (_0x2874a6 = _0x34e8f3.data) === null || _0x2874a6 === void 0 ? void 0 : _0x2874a6.metadata?.lastWatered) < 36e5) {
                emit("DoLongHudText", "This tree has been watered recently.", 2);
                return [2, false];
              }
              _0x5a06f5 = PlayerPedId();
              _0x4910bb = _0x2b5618(GetEntityCoords(_0x5a06f5, false), 3);
              _0x584468 = _0x4910bb[0];
              _0x22c12d = _0x4910bb[1];
              _0x399fa2 = _0x4910bb[2];
              return [4, _0x47f917(_0x5a06f5, _0x537ae0)];
            case 2:
              _0x54c74f.sent();
              _0x57ce0d = "np_farming_watercan_v1";
              _0x46fd53 = "anims@watering";
              _0x462a6c = "watering";
              return [4, _0x151c5c.loadAnim(_0x46fd53)];
            case 3:
              _0x54c74f.sent();
              return [4, _0x151c5c.loadModel(_0x57ce0d)];
            case 4:
              _0x54c74f.sent();
              _0x409cbd = CreateObject(_0x57ce0d, _0x584468, _0x22c12d, _0x399fa2, true, true, false);
              AttachEntityToEntity(_0x409cbd, _0x5a06f5, GetPedBoneIndex(_0x5a06f5, 57005), 0.3475, -0.1426, -0.1062, -57.6076, -13.7823, 1.652, false, false, false, false, 1, true);
              TaskPlayAnim(_0x5a06f5, _0x46fd53, _0x462a6c, 1.25, 1.25, -1, 1, 0, false, false, false);
              _0x3747d8 = "core";
              _0x2719f1 = "ent_sht_water";
              return [4, _0x151c5c.loadNamedPtfxAsset(_0x3747d8)];
            case 5:
              _0x54c74f.sent();
              UseParticleFxAssetNextCall(_0x3747d8);
              SetPtfxAssetNextCall(_0x3747d8);
              _0x374a7f = StartParticleFxLoopedOnEntity(_0x2719f1, _0x409cbd, 0.35, 0, 0.25, 0, 0, 0, 1.25, false, false, false);
              return [4, _0x4c27ed.taskBar(_0x4e69b7, "Watering", false)];
            case 6:
              _0x266cac = _0x54c74f.sent();
              StopParticleFxLooped(_0x374a7f, false);
              ClearPedTasks(_0x5a06f5);
              DeleteEntity(_0x409cbd);
              return [2, _0x266cac === 100];
          }
        });
      });
      return _0x4bdbad.apply(this, arguments);
    }
    on("onResourceStop", function(_0x3fc2f8) {
      if (_0x3fc2f8 === GetCurrentResourceName()) {
        if (_0x4c27ed.doesInteractionExists("plant_sapling")) {
          _0x4c27ed.removeInteraction("plant_sapling");
        }
        Object.keys(_0x13d494).forEach(function(_0x274169) {
          if (_0x4c27ed.doesInteractionExists(`grow_medium_${_0x274169}`)) {
            _0x4c27ed.removeInteraction(`grow_medium_${_0x274169}`);
          }
        });
      }
    });
    ;
    function _0x525b4f(_0x27080a, _0x844e68, _0x15defd, _0x3801b2, _0xa1d0fb, _0x2ae6be, _0x3c1a6a) {
      try {
        var _0x530c1f = _0x27080a[_0x2ae6be](_0x3c1a6a);
        var _0x59a3ee = _0x530c1f.value;
      } catch (_0x25c50f) {
        _0x15defd(_0x25c50f);
        return;
      }
      if (_0x530c1f.done) {
        _0x844e68(_0x59a3ee);
      } else {
        Promise.resolve(_0x59a3ee).then(_0x3801b2, _0xa1d0fb);
      }
    }
    function _0xd86b57(_0x4addf6) {
      return function() {
        var _0x117571 = this;
        var _0x4e832c = arguments;
        return new Promise(function(_0x3e2323, _0x40c482) {
          var _0x678e18 = _0x4addf6.apply(_0x117571, _0x4e832c);
          function _0x5aa4ee(_0x51950f) {
            _0x525b4f(_0x678e18, _0x3e2323, _0x40c482, _0x5aa4ee, _0x4cf4e9, "next", _0x51950f);
          }
          function _0x4cf4e9(_0x1f36b5) {
            _0x525b4f(_0x678e18, _0x3e2323, _0x40c482, _0x5aa4ee, _0x4cf4e9, "throw", _0x1f36b5);
          }
          _0x5aa4ee(void 0);
        });
      };
    }
    function _0x550f67(_0x5ecab2, _0x52fa39) {
      var _0x1c197f;
      var _0x400520;
      var _0x44981e;
      var _0x11e241;
      var _0x3c33e3 = {
        label: 0,
        sent: function() {
          if (_0x44981e[0] & 1) {
            throw _0x44981e[1];
          }
          return _0x44981e[1];
        },
        trys: [],
        ops: []
      };
      _0x11e241 = {
        next: _0x942f17(0),
        throw: _0x942f17(1),
        return: _0x942f17(2)
      };
      if (typeof Symbol === "function") {
        _0x11e241[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x11e241;
      function _0x942f17(_0x1f6d9f) {
        return function(_0xc8896a) {
          return _0x5bd9f0([_0x1f6d9f, _0xc8896a]);
        };
      }
      function _0x5bd9f0(_0x1128b2) {
        if (_0x1c197f) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x3c33e3) {
          try {
            _0x1c197f = 1;
            if (_0x400520 && (_0x44981e = _0x1128b2[0] & 2 ? _0x400520.return : _0x1128b2[0] ? _0x400520.throw || ((_0x44981e = _0x400520.return) && _0x44981e.call(_0x400520), 0) : _0x400520.next) && !(_0x44981e = _0x44981e.call(_0x400520, _0x1128b2[1])).done) {
              return _0x44981e;
            }
            _0x400520 = 0;
            if (_0x44981e) {
              _0x1128b2 = [_0x1128b2[0] & 2, _0x44981e.value];
            }
            switch (_0x1128b2[0]) {
              case 0:
              case 1:
                _0x44981e = _0x1128b2;
                break;
              case 4:
                _0x3c33e3.label++;
                return {
                  value: _0x1128b2[1],
                  done: false
                };
              case 5:
                _0x3c33e3.label++;
                _0x400520 = _0x1128b2[1];
                _0x1128b2 = [0];
                continue;
              case 7:
                _0x1128b2 = _0x3c33e3.ops.pop();
                _0x3c33e3.trys.pop();
                continue;
              default:
                if (!(_0x44981e = _0x3c33e3.trys, _0x44981e = _0x44981e.length > 0 && _0x44981e[_0x44981e.length - 1]) && (_0x1128b2[0] === 6 || _0x1128b2[0] === 2)) {
                  _0x3c33e3 = 0;
                  continue;
                }
                if (_0x1128b2[0] === 3 && (!_0x44981e || _0x1128b2[1] > _0x44981e[0] && _0x1128b2[1] < _0x44981e[3])) {
                  _0x3c33e3.label = _0x1128b2[1];
                  break;
                }
                if (_0x1128b2[0] === 6 && _0x3c33e3.label < _0x44981e[1]) {
                  _0x3c33e3.label = _0x44981e[1];
                  _0x44981e = _0x1128b2;
                  break;
                }
                if (_0x44981e && _0x3c33e3.label < _0x44981e[2]) {
                  _0x3c33e3.label = _0x44981e[2];
                  _0x3c33e3.ops.push(_0x1128b2);
                  break;
                }
                if (_0x44981e[2]) {
                  _0x3c33e3.ops.pop();
                }
                _0x3c33e3.trys.pop();
                continue;
            }
            _0x1128b2 = _0x52fa39.call(_0x5ecab2, _0x3c33e3);
          } catch (_0x2c65b0) {
            _0x1128b2 = [6, _0x2c65b0];
            _0x400520 = 0;
          } finally {
            _0x1c197f = _0x44981e = 0;
          }
        }
        if (_0x1128b2[0] & 5) {
          throw _0x1128b2[1];
        }
        var _0x317d35 = {
          value: _0x1128b2[0] ? _0x1128b2[1] : void 0,
          done: true
        };
        return _0x317d35;
      }
    }
    function _0x3591ae() {
    }
    var _0x3a86c5 = [GetHashKey("ig_willie"), GetHashKey("ig_francis")];
    var _0x428b7d = /* @__PURE__ */ new Set();
    _0x4c27ed.addPedInteraction("dead_hand", [{
      id: "sewers_dead_hand_swig",
      eventSDK: "sewers:chopHand",
      label: "Chop hand off",
      parameters: []
    }], {
      distance: {
        use: 1.5,
        draw: 3
      },
      isEnabled: function(_0x2815ce) {
        if (!_0x2815ce) {
          return false;
        }
        var _0x211857 = PlayerPedId();
        var _0x27ebc4 = GetEntityModel(_0x211857);
        if (!_0x3a86c5.includes(_0x27ebc4)) {
          return false;
        }
        if (_0x428b7d.has(_0x2815ce)) {
          return false;
        }
        return IsPedDeadOrDying(_0x2815ce, false);
      }
    });
    _0x539aaf.on("sewers:chopHand", (function() {
      var _0x263479 = _0xd86b57(function(_0x2ac773, _0x3f86f5) {
        var _0x5eeea0;
        var _0x4d5772;
        var _0x145ba8;
        var _0x1e99b8;
        var _0x77348;
        var _0x4ca8da;
        var _0x589d5a;
        return _0x550f67(this, function(_0x271105) {
          switch (_0x271105.label) {
            case 0:
              if (_0x428b7d.has(_0x3f86f5)) {
                return [2];
              }
              _0x428b7d.add(_0x3f86f5);
              _0x5eeea0 = PlayerPedId();
              TaskTurnPedToFaceEntity(_0x5eeea0, _0x3f86f5, -1);
              return [4, _0x2ad271.wait(800)];
            case 1:
              _0x271105.sent();
              _0x4d5772 = "hunting@skinning@anims";
              _0x145ba8 = GetAnimDuration(_0x4d5772, "entry") + 0.01;
              return [4, _0x151c5c.loadAnim(_0x4d5772)];
            case 2:
              _0x271105.sent();
              TaskPlayAnim(_0x5eeea0, _0x4d5772, "entry", 8, 1, -1, 0, 0, false, false, false);
              return [4, _0x2ad271.wait(_0x145ba8 * 1e3)];
            case 3:
              _0x271105.sent();
              TaskPlayAnim(_0x5eeea0, _0x4d5772, "loop", 8, 1, -1, 0, 0, false, false, false);
              _0x1e99b8 = GetAnimDuration(_0x4d5772, "loop") + 0.01;
              return [4, _0x4c27ed.taskBar(_0x1e99b8 * 1e3, "Chopping hand off...")];
            case 4:
              _0x77348 = _0x271105.sent();
              ClearPedTasks(_0x5eeea0);
              if (_0x77348 !== 100) {
                return [2];
              }
              _0x4ca8da = NetworkGetNetworkIdFromEntity(_0x3f86f5);
              return [4, _0x38f759.execute("misc:deadHand:chop", _0x4ca8da)];
            case 5:
              _0x589d5a = _0x271105.sent();
              if (!_0x589d5a) {
                emit("DoLongHudText", "Failed to chop hand off", 2);
                return [2];
              }
              return [2];
          }
        });
      });
      return function(_0x5b39e5, _0x1dc0b1) {
        return _0x263479.apply(this, arguments);
      };
    })());
    ;
    function _0x28c6bb(_0x4477de, _0x46b55b, _0x4bb666, _0x524c09, _0x5bd5af, _0xf4b4e8, _0x2b63fa) {
      try {
        var _0x5028bb = _0x4477de[_0xf4b4e8](_0x2b63fa);
        var _0x1a4f4b = _0x5028bb.value;
      } catch (_0x4d2cc6) {
        _0x4bb666(_0x4d2cc6);
        return;
      }
      if (_0x5028bb.done) {
        _0x46b55b(_0x1a4f4b);
      } else {
        Promise.resolve(_0x1a4f4b).then(_0x524c09, _0x5bd5af);
      }
    }
    function _0x56d6c0(_0x5629c0) {
      return function() {
        var _0xe849ff = this;
        var _0x5d2905 = arguments;
        return new Promise(function(_0x458766, _0x5207fe) {
          var _0x1ffe4b = _0x5629c0.apply(_0xe849ff, _0x5d2905);
          function _0x3eebf9(_0x293bce) {
            _0x28c6bb(_0x1ffe4b, _0x458766, _0x5207fe, _0x3eebf9, _0x116dbc, "next", _0x293bce);
          }
          function _0x116dbc(_0x415a22) {
            _0x28c6bb(_0x1ffe4b, _0x458766, _0x5207fe, _0x3eebf9, _0x116dbc, "throw", _0x415a22);
          }
          _0x3eebf9(void 0);
        });
      };
    }
    function _0xade9c3(_0x599a91, _0xf3838e) {
      var _0x574cfb;
      var _0x1e17e6;
      var _0x6db6a9;
      var _0x530528;
      var _0x2dceff = {
        label: 0,
        sent: function() {
          if (_0x6db6a9[0] & 1) {
            throw _0x6db6a9[1];
          }
          return _0x6db6a9[1];
        },
        trys: [],
        ops: []
      };
      _0x530528 = {
        next: _0x130914(0),
        throw: _0x130914(1),
        return: _0x130914(2)
      };
      if (typeof Symbol === "function") {
        _0x530528[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x530528;
      function _0x130914(_0x27c724) {
        return function(_0x3b433c) {
          return _0x40e3eb([_0x27c724, _0x3b433c]);
        };
      }
      function _0x40e3eb(_0x58c4fd) {
        if (_0x574cfb) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x2dceff) {
          try {
            _0x574cfb = 1;
            if (_0x1e17e6 && (_0x6db6a9 = _0x58c4fd[0] & 2 ? _0x1e17e6.return : _0x58c4fd[0] ? _0x1e17e6.throw || ((_0x6db6a9 = _0x1e17e6.return) && _0x6db6a9.call(_0x1e17e6), 0) : _0x1e17e6.next) && !(_0x6db6a9 = _0x6db6a9.call(_0x1e17e6, _0x58c4fd[1])).done) {
              return _0x6db6a9;
            }
            _0x1e17e6 = 0;
            if (_0x6db6a9) {
              _0x58c4fd = [_0x58c4fd[0] & 2, _0x6db6a9.value];
            }
            switch (_0x58c4fd[0]) {
              case 0:
              case 1:
                _0x6db6a9 = _0x58c4fd;
                break;
              case 4:
                _0x2dceff.label++;
                return {
                  value: _0x58c4fd[1],
                  done: false
                };
              case 5:
                _0x2dceff.label++;
                _0x1e17e6 = _0x58c4fd[1];
                _0x58c4fd = [0];
                continue;
              case 7:
                _0x58c4fd = _0x2dceff.ops.pop();
                _0x2dceff.trys.pop();
                continue;
              default:
                if (!(_0x6db6a9 = _0x2dceff.trys, _0x6db6a9 = _0x6db6a9.length > 0 && _0x6db6a9[_0x6db6a9.length - 1]) && (_0x58c4fd[0] === 6 || _0x58c4fd[0] === 2)) {
                  _0x2dceff = 0;
                  continue;
                }
                if (_0x58c4fd[0] === 3 && (!_0x6db6a9 || _0x58c4fd[1] > _0x6db6a9[0] && _0x58c4fd[1] < _0x6db6a9[3])) {
                  _0x2dceff.label = _0x58c4fd[1];
                  break;
                }
                if (_0x58c4fd[0] === 6 && _0x2dceff.label < _0x6db6a9[1]) {
                  _0x2dceff.label = _0x6db6a9[1];
                  _0x6db6a9 = _0x58c4fd;
                  break;
                }
                if (_0x6db6a9 && _0x2dceff.label < _0x6db6a9[2]) {
                  _0x2dceff.label = _0x6db6a9[2];
                  _0x2dceff.ops.push(_0x58c4fd);
                  break;
                }
                if (_0x6db6a9[2]) {
                  _0x2dceff.ops.pop();
                }
                _0x2dceff.trys.pop();
                continue;
            }
            _0x58c4fd = _0xf3838e.call(_0x599a91, _0x2dceff);
          } catch (_0x48af4d) {
            _0x58c4fd = [6, _0x48af4d];
            _0x1e17e6 = 0;
          } finally {
            _0x574cfb = _0x6db6a9 = 0;
          }
        }
        if (_0x58c4fd[0] & 5) {
          throw _0x58c4fd[1];
        }
        var _0xa3b561 = {
          value: _0x58c4fd[0] ? _0x58c4fd[1] : void 0,
          done: true
        };
        return _0xa3b561;
      }
    }
    function _0x224aa8() {
      RegisterCommand("makepuke", function(_0x5c0a75, _0x37e64d, _0x443f72) {
        var _0x7f4bda = parseInt(_0x37e64d[0]);
        if (!_0x7f4bda || isNaN(_0x7f4bda)) {
          emit("DoLongHudText", "Usage: makepuke [server_id]");
          return;
        }
        _0x539aaf.emitNet("misc:makepuke", _0x7f4bda);
      }, false);
      _0x539aaf.onNet("misc:puke", _0x56d6c0(function() {
        var _0x5cea20;
        return _0xade9c3(this, function(_0x4c895c) {
          switch (_0x4c895c.label) {
            case 0:
              _0x5cea20 = PlayerPedId();
              _0x4c27ed.displayNotification("You suddenly feel nauseous...", "error");
              return [4, new Promise(function(_0x2fb07b) {
                return setTimeout(_0x2fb07b, 5e3);
              })];
            case 1:
              _0x4c895c.sent();
              PlaySoundFromEntity(-1, "hash_0A868E64", PlayerPedId(), "TREVOR_PUKEINTOFOUNT", false, 0);
              SetTimecycleModifier("DRUG_gas_huffin");
              SetTimecycleModifierStrength(0.1);
              setTimeout(function() {
                ClearTimecycleModifier();
              }, 5e3);
              _0x539aaf.emitNet("misc:pukeReady");
              return [2];
          }
        });
      }));
      _0x539aaf.onNet("misc:pukeSync", (function() {
        var _0x46b7a0 = _0x56d6c0(function(_0x1560e7) {
          var _0x7530bb;
          var _0x278baf;
          var _0x219dc1;
          var _0x530dd1;
          var _0x10119b;
          var _0x3d37d8;
          var _0x12e9a4;
          var _0x12db13;
          var _0x3cbeee;
          var _0x1ef711;
          var _0x1e5ed5;
          return _0xade9c3(this, function(_0x15b038) {
            switch (_0x15b038.label) {
              case 0:
                _0x7530bb = GetPlayerFromServerId(_0x1560e7);
                if (_0x7530bb === -1) {
                  return [2];
                }
                _0x278baf = GetPlayerPed(_0x7530bb);
                if (!_0x278baf || _0x278baf === 0) {
                  return [2];
                }
                _0x219dc1 = GetEntityCoords(PlayerPedId(), false);
                _0x530dd1 = GetEntityCoords(_0x278baf, false);
                _0x10119b = GetDistanceBetweenCoords(_0x219dc1[0], _0x219dc1[1], _0x219dc1[2], _0x530dd1[0], _0x530dd1[1], _0x530dd1[2], true);
                if (_0x10119b > 50) {
                  return [2];
                }
                if (GetPlayerServerId(PlayerId()) !== _0x1560e7) {
                  return [3, 1];
                }
                globalThis.emit("animation:PlayAnimation", "outofbreath");
                return [3, 5];
              case 1:
                _0x3d37d8 = "re@construction";
                _0x12e9a4 = "out_of_breath";
                if (HasAnimDictLoaded(_0x3d37d8)) {
                  return [3, 4];
                }
                RequestAnimDict(_0x3d37d8);
                _0x12db13 = 0;
                _0x15b038.label = 2;
              case 2:
                if (!!HasAnimDictLoaded(_0x3d37d8) || !(_0x12db13 < 100)) {
                  return [3, 4];
                }
                return [4, new Promise(function(_0x1719df) {
                  return setTimeout(_0x1719df, 10);
                })];
              case 3:
                _0x15b038.sent();
                _0x12db13++;
                return [3, 2];
              case 4:
                if (HasAnimDictLoaded(_0x3d37d8)) {
                  TaskPlayAnim(_0x278baf, _0x3d37d8, _0x12e9a4, 1, 4, -1, 0, 0, false, false, false);
                }
                _0x15b038.label = 5;
              case 5:
                _0x3cbeee = Math.floor(Math.random() * 3e3) + 3e3;
                _0x1ef711 = 31086;
                if (HasNamedPtfxAssetLoaded("scr_family5")) {
                  return [3, 8];
                }
                RequestNamedPtfxAsset("scr_family5");
                _0x15b038.label = 6;
              case 6:
                if (HasNamedPtfxAssetLoaded("scr_family5")) {
                  return [3, 8];
                }
                return [4, new Promise(function(_0x4105c5) {
                  return setTimeout(_0x4105c5, 10);
                })];
              case 7:
                _0x15b038.sent();
                return [3, 6];
              case 8:
                UseParticleFxAsset("scr_family5");
                _0x1e5ed5 = StartParticleFxLoopedOnPedBone("scr_trev_puke", _0x278baf, 0, 0, 0, 0, 0, 0, _0x1ef711, 2, false, false, false);
                setTimeout(function() {
                  StopParticleFxLooped(_0x1e5ed5, false);
                }, _0x3cbeee);
                return [2];
            }
          });
        });
        return function(_0x5b6940) {
          return _0x46b7a0.apply(this, arguments);
        };
      })());
      RegisterCommand("makepee", function(_0x1eb1c8, _0x209022, _0x5af186) {
        var _0x262db2 = parseInt(_0x209022[0]);
        if (!_0x262db2 || isNaN(_0x262db2)) {
          emit("DoLongHudText", "Usage: makepee [server_id]");
          return;
        }
        _0x539aaf.emitNet("misc:makepee", _0x262db2);
      }, false);
      _0x539aaf.onNet("misc:pee", _0x56d6c0(function() {
        var _0x1c167c;
        return _0xade9c3(this, function(_0x56b5cc) {
          switch (_0x56b5cc.label) {
            case 0:
              _0x1c167c = PlayerPedId();
              _0x4c27ed.displayNotification("You suddenly need to relieve yourself...", "error");
              return [4, new Promise(function(_0x5eb89e) {
                return setTimeout(_0x5eb89e, 5e3);
              })];
            case 1:
              _0x56b5cc.sent();
              _0x539aaf.emitNet("misc:peeReady");
              return [2];
          }
        });
      }));
      _0x539aaf.onNet("misc:peeSync", (function() {
        var _0x348b7f = _0x56d6c0(function(_0x28a50a) {
          var _0x6dad03;
          var _0x42afef;
          var _0x270140;
          var _0x2b993b;
          var _0x2ae881;
          var _0x242025;
          var _0x84b00b;
          var _0xdcbf05;
          var _0x4e8f81;
          var _0x5559bf;
          var _0x4ed215;
          return _0xade9c3(this, function(_0x2b5f50) {
            switch (_0x2b5f50.label) {
              case 0:
                _0x6dad03 = GetPlayerFromServerId(_0x28a50a);
                if (_0x6dad03 === -1) {
                  return [2];
                }
                _0x42afef = GetPlayerPed(_0x6dad03);
                if (!_0x42afef || _0x42afef === 0) {
                  return [2];
                }
                _0x270140 = GetEntityCoords(PlayerPedId(), false);
                _0x2b993b = GetEntityCoords(_0x42afef, false);
                _0x2ae881 = GetDistanceBetweenCoords(_0x270140[0], _0x270140[1], _0x270140[2], _0x2b993b[0], _0x2b993b[1], _0x2b993b[2], true);
                if (_0x2ae881 > 50) {
                  return [2];
                }
                if (GetPlayerServerId(PlayerId()) !== _0x28a50a) {
                  return [3, 1];
                }
                globalThis.emit("animation:PlayAnimation", "pee");
                return [3, 5];
              case 1:
                _0x242025 = "missbigscore1switch_trevor_piss";
                _0x84b00b = "piss_loop";
                if (HasAnimDictLoaded(_0x242025)) {
                  return [3, 4];
                }
                RequestAnimDict(_0x242025);
                _0xdcbf05 = 0;
                _0x2b5f50.label = 2;
              case 2:
                if (!!HasAnimDictLoaded(_0x242025) || !(_0xdcbf05 < 100)) {
                  return [3, 4];
                }
                return [4, new Promise(function(_0x1e6fb2) {
                  return setTimeout(_0x1e6fb2, 10);
                })];
              case 3:
                _0x2b5f50.sent();
                _0xdcbf05++;
                return [3, 2];
              case 4:
                if (HasAnimDictLoaded(_0x242025)) {
                  TaskPlayAnim(_0x42afef, _0x242025, _0x84b00b, 1, 4, -1, 0, 0, false, false, false);
                }
                _0x2b5f50.label = 5;
              case 5:
                _0x4e8f81 = Math.floor(Math.random() * 3e3) + 7e3;
                _0x5559bf = 57005;
                if (HasNamedPtfxAssetLoaded("core")) {
                  return [3, 8];
                }
                RequestNamedPtfxAsset("core");
                _0x2b5f50.label = 6;
              case 6:
                if (HasNamedPtfxAssetLoaded("core")) {
                  return [3, 8];
                }
                return [4, new Promise(function(_0x665dfd) {
                  return setTimeout(_0x665dfd, 10);
                })];
              case 7:
                _0x2b5f50.sent();
                return [3, 6];
              case 8:
                UseParticleFxAsset("core");
                _0x4ed215 = StartParticleFxLoopedOnPedBone("ent_amb_peeing", _0x42afef, 0.13, 0.04, -0.02, 0, 90, 90, _0x5559bf, 1, false, false, false);
                setTimeout(function() {
                  StopParticleFxLooped(_0x4ed215, false);
                  ClearPedTasks(_0x42afef);
                }, _0x4e8f81);
                return [2];
            }
          });
        });
        return function(_0x2d2ebc) {
          return _0x348b7f.apply(this, arguments);
        };
      })());
      RegisterCommand("makepoo", function(_0x1041e2, _0x267fed, _0x1b26d6) {
        var _0x3915f7 = parseInt(_0x267fed[0]);
        if (!_0x3915f7 || isNaN(_0x3915f7)) {
          emit("DoLongHudText", "Usage: makepoo [server_id] [0 <difficulty 1-3>] (0=cancellable with difficulty, 1=forced)");
          return;
        }
        var _0x1c326f = false;
        var _0x23f2f6 = 1;
        if (_0x267fed[1] === "0") {
          _0x1c326f = true;
          if (_0x267fed[2]) {
            var _0x175689 = parseInt(_0x267fed[2]);
            if (_0x175689 >= 1 && _0x175689 <= 3) {
              _0x23f2f6 = _0x175689;
            }
          }
        }
        _0x539aaf.emitNet("misc:makepoo", _0x3915f7, _0x1c326f, _0x23f2f6);
      }, false);
      _0x539aaf.onNet("misc:poo", (function() {
        var _0xde3574 = _0x56d6c0(function(_0x15124a) {
          var _0x5cea92;
          var _0x1a7f6f;
          var _0x503689;
          var _0x255c89;
          var _0xc09cb4;
          var _0x48544a;
          var _0x2231a1;
          var _0x4fffa8 = arguments;
          return _0xade9c3(this, function(_0x39f9d9) {
            switch (_0x39f9d9.label) {
              case 0:
                _0x5cea92 = _0x4fffa8.length > 1 && _0x4fffa8[1] !== void 0 ? _0x4fffa8[1] : 1;
                _0x1a7f6f = PlayerPedId();
                _0x4c27ed.displayNotification("Your stomach suddenly rumbles violently...", "error");
                return [4, new Promise(function(_0x2dc57e) {
                  return setTimeout(_0x2dc57e, 5e3);
                })];
              case 1:
                _0x39f9d9.sent();
                _0x503689 = true;
                if (!_0x15124a) {
                  return [3, 3];
                }
                _0x4c27ed.displayNotification("Hold yourself together!", "error");
                _0x255c89 = 1e3;
                _0xc09cb4 = 15;
                if (_0x5cea92 === 2) {
                  _0x255c89 = 800;
                  _0xc09cb4 = 12;
                } else if (_0x5cea92 === 3) {
                  _0x255c89 = 600;
                  _0xc09cb4 = 8;
                }
                return [4, _0x27d38c.Sync.skillchecks.taskBarSkill(_0x255c89, _0xc09cb4, false, false, false, true)];
              case 2:
                _0x48544a = _0x39f9d9.sent();
                _0x2231a1 = _0x48544a === 100;
                if (_0x2231a1) {
                  _0x4c27ed.displayNotification("You managed to hold it in!", "info");
                  _0x503689 = false;
                } else {
                  _0x4c27ed.displayNotification("You couldn't hold it...", "error");
                }
                _0x39f9d9.label = 3;
              case 3:
                _0x539aaf.emitNet("misc:pooResult", _0x503689);
                return [2];
            }
          });
        });
        return function(_0x13d145) {
          return _0xde3574.apply(this, arguments);
        };
      })());
      _0x539aaf.onNet("misc:pooSync", (function() {
        var _0x10b0a6 = _0x56d6c0(function(_0x3ef815, _0x1f7242) {
          var _0x13a180;
          var _0x5d4fde;
          var _0x5e7a58;
          var _0x445f0d;
          var _0x3fe241;
          var _0x41a521;
          var _0x1d7202;
          var _0x5f5dcb;
          var _0x38e910;
          var _0x34a9eb;
          var _0x193d39;
          return _0xade9c3(this, function(_0x4fc386) {
            switch (_0x4fc386.label) {
              case 0:
                if (!_0x1f7242) {
                  return [2];
                }
                _0x13a180 = GetPlayerFromServerId(_0x3ef815);
                if (_0x13a180 === -1) {
                  return [2];
                }
                _0x5d4fde = GetPlayerPed(_0x13a180);
                if (!_0x5d4fde || _0x5d4fde === 0) {
                  return [2];
                }
                _0x5e7a58 = GetEntityCoords(PlayerPedId(), false);
                _0x445f0d = GetEntityCoords(_0x5d4fde, false);
                _0x3fe241 = GetDistanceBetweenCoords(_0x5e7a58[0], _0x5e7a58[1], _0x5e7a58[2], _0x445f0d[0], _0x445f0d[1], _0x445f0d[2], true);
                if (_0x3fe241 > 50) {
                  return [2];
                }
                if (GetPlayerServerId(PlayerId()) !== _0x3ef815) {
                  return [3, 1];
                }
                globalThis.emit("animation:PlayAnimation", "shit");
                return [3, 5];
              case 1:
                _0x41a521 = "missfbi3ig_0";
                _0x1d7202 = "shit_loop_trev";
                if (HasAnimDictLoaded(_0x41a521)) {
                  return [3, 4];
                }
                RequestAnimDict(_0x41a521);
                _0x5f5dcb = 0;
                _0x4fc386.label = 2;
              case 2:
                if (!!HasAnimDictLoaded(_0x41a521) || !(_0x5f5dcb < 100)) {
                  return [3, 4];
                }
                return [4, new Promise(function(_0x477a32) {
                  return setTimeout(_0x477a32, 10);
                })];
              case 3:
                _0x4fc386.sent();
                _0x5f5dcb++;
                return [3, 2];
              case 4:
                if (HasAnimDictLoaded(_0x41a521)) {
                  TaskPlayAnim(_0x5d4fde, _0x41a521, _0x1d7202, 1, 4, -1, 0, 0, false, false, false);
                }
                _0x4fc386.label = 5;
              case 5:
                _0x38e910 = Math.floor(Math.random() * 3e3) + 7e3;
                _0x34a9eb = 11816;
                if (HasNamedPtfxAssetLoaded("scr_amb_chop")) {
                  return [3, 8];
                }
                RequestNamedPtfxAsset("scr_amb_chop");
                _0x4fc386.label = 6;
              case 6:
                if (HasNamedPtfxAssetLoaded("scr_amb_chop")) {
                  return [3, 8];
                }
                return [4, new Promise(function(_0x47f1a0) {
                  return setTimeout(_0x47f1a0, 10);
                })];
              case 7:
                _0x4fc386.sent();
                return [3, 6];
              case 8:
                UseParticleFxAsset("scr_amb_chop");
                _0x193d39 = StartParticleFxLoopedOnPedBone("ent_anim_dog_poo", _0x5d4fde, 0, 0, 0.05, 180, -300, 0, _0x34a9eb, 1, false, false, false);
                setTimeout(function() {
                  StopParticleFxLooped(_0x193d39, false);
                  ClearPedTasks(_0x5d4fde);
                }, _0x38e910);
                return [2];
            }
          });
        });
        return function(_0x247a49, _0x30c143) {
          return _0x10b0a6.apply(this, arguments);
        };
      })());
    }
    ;
    function _0x2ea73a(_0x4ceafc, _0x1585db, _0xa634b1, _0x549814, _0x4e82c3, _0x316e06, _0x3ed4d2) {
      try {
        var _0x182c16 = _0x4ceafc[_0x316e06](_0x3ed4d2);
        var _0x4fb066 = _0x182c16.value;
      } catch (_0x5f4f80) {
        _0xa634b1(_0x5f4f80);
        return;
      }
      if (_0x182c16.done) {
        _0x1585db(_0x4fb066);
      } else {
        Promise.resolve(_0x4fb066).then(_0x549814, _0x4e82c3);
      }
    }
    function _0x55f68(_0x40973e) {
      return function() {
        var _0xd2edbd = this;
        var _0x525677 = arguments;
        return new Promise(function(_0x1a1b3e, _0x3376eb) {
          var _0x2a7350 = _0x40973e.apply(_0xd2edbd, _0x525677);
          function _0x3a6762(_0x3c03d9) {
            _0x2ea73a(_0x2a7350, _0x1a1b3e, _0x3376eb, _0x3a6762, _0x2e1d8f, "next", _0x3c03d9);
          }
          function _0x2e1d8f(_0x3a4f4d) {
            _0x2ea73a(_0x2a7350, _0x1a1b3e, _0x3376eb, _0x3a6762, _0x2e1d8f, "throw", _0x3a4f4d);
          }
          _0x3a6762(void 0);
        });
      };
    }
    function _0x14510d(_0x58a34f, _0x3213b6) {
      var _0x161ca1;
      var _0x272037;
      var _0x4cae60;
      var _0x21d58d;
      var _0x4b70fc = {
        label: 0,
        sent: function() {
          if (_0x4cae60[0] & 1) {
            throw _0x4cae60[1];
          }
          return _0x4cae60[1];
        },
        trys: [],
        ops: []
      };
      _0x21d58d = {
        next: _0x5cd4cd(0),
        throw: _0x5cd4cd(1),
        return: _0x5cd4cd(2)
      };
      if (typeof Symbol === "function") {
        _0x21d58d[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x21d58d;
      function _0x5cd4cd(_0x4d98ce) {
        return function(_0x21e63f) {
          return _0xb76a5e([_0x4d98ce, _0x21e63f]);
        };
      }
      function _0xb76a5e(_0x5cca64) {
        if (_0x161ca1) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x4b70fc) {
          try {
            _0x161ca1 = 1;
            if (_0x272037 && (_0x4cae60 = _0x5cca64[0] & 2 ? _0x272037.return : _0x5cca64[0] ? _0x272037.throw || ((_0x4cae60 = _0x272037.return) && _0x4cae60.call(_0x272037), 0) : _0x272037.next) && !(_0x4cae60 = _0x4cae60.call(_0x272037, _0x5cca64[1])).done) {
              return _0x4cae60;
            }
            _0x272037 = 0;
            if (_0x4cae60) {
              _0x5cca64 = [_0x5cca64[0] & 2, _0x4cae60.value];
            }
            switch (_0x5cca64[0]) {
              case 0:
              case 1:
                _0x4cae60 = _0x5cca64;
                break;
              case 4:
                _0x4b70fc.label++;
                return {
                  value: _0x5cca64[1],
                  done: false
                };
              case 5:
                _0x4b70fc.label++;
                _0x272037 = _0x5cca64[1];
                _0x5cca64 = [0];
                continue;
              case 7:
                _0x5cca64 = _0x4b70fc.ops.pop();
                _0x4b70fc.trys.pop();
                continue;
              default:
                if (!(_0x4cae60 = _0x4b70fc.trys, _0x4cae60 = _0x4cae60.length > 0 && _0x4cae60[_0x4cae60.length - 1]) && (_0x5cca64[0] === 6 || _0x5cca64[0] === 2)) {
                  _0x4b70fc = 0;
                  continue;
                }
                if (_0x5cca64[0] === 3 && (!_0x4cae60 || _0x5cca64[1] > _0x4cae60[0] && _0x5cca64[1] < _0x4cae60[3])) {
                  _0x4b70fc.label = _0x5cca64[1];
                  break;
                }
                if (_0x5cca64[0] === 6 && _0x4b70fc.label < _0x4cae60[1]) {
                  _0x4b70fc.label = _0x4cae60[1];
                  _0x4cae60 = _0x5cca64;
                  break;
                }
                if (_0x4cae60 && _0x4b70fc.label < _0x4cae60[2]) {
                  _0x4b70fc.label = _0x4cae60[2];
                  _0x4b70fc.ops.push(_0x5cca64);
                  break;
                }
                if (_0x4cae60[2]) {
                  _0x4b70fc.ops.pop();
                }
                _0x4b70fc.trys.pop();
                continue;
            }
            _0x5cca64 = _0x3213b6.call(_0x58a34f, _0x4b70fc);
          } catch (_0x7c217f) {
            _0x5cca64 = [6, _0x7c217f];
            _0x272037 = 0;
          } finally {
            _0x161ca1 = _0x4cae60 = 0;
          }
        }
        if (_0x5cca64[0] & 5) {
          throw _0x5cca64[1];
        }
        var _0x4cd528 = {
          value: _0x5cca64[0] ? _0x5cca64[1] : void 0,
          done: true
        };
        return _0x4cd528;
      }
    }
    function _0x24658a() {
    }
    var _0x43e712 = {
      x: 2282.2163085938,
      y: -4201.361328125
    };
    var _0x520ad0 = {
      x: 2533.8444824219,
      y: -3866.7492675781
    };
    var _0xb74656 = {
      x: 3123.6162109375,
      y: -3569.1062011719
    };
    var _0x363d4a = {
      x: 3603.9738769531,
      y: -3109.8999023438
    };
    var _0x30cdc5 = {
      x: 4441.3403320312,
      y: -2414.0302734375
    };
    var _0x328de9 = {
      x: 5666.4028320312,
      y: -1364.9494628906
    };
    var _0x309ce0 = {
      x: 8518.3203125,
      y: -3301.33203125
    };
    var _0x5d3c8d = {
      x: 7882.99609375,
      y: -5392.6967773438
    };
    var _0x3374ab = {
      x: 7869.94140625,
      y: -6690.03125
    };
    var _0x1f8a27 = {
      x: 7456.5810546875,
      y: -7855.9633789062
    };
    var _0x22ba95 = {
      x: 5325.2099609375,
      y: -7929.9111328125
    };
    var _0x42dabc = {
      x: 3814.41796875,
      y: -6461.791015625
    };
    _0x506c0a.addPolyZone("cayoperico", "cayoperico", [_0x43e712, _0x520ad0, _0xb74656, _0x363d4a, _0x30cdc5, _0x328de9, {
      x: 7562.2001953125,
      y: 196.69323730469
    }, _0x309ce0, _0x5d3c8d, _0x3374ab, _0x1f8a27, _0x22ba95, _0x42dabc], {});
    _0x506c0a.onEnter("cayoperico", _0x55f68(function() {
      var _0x15de43;
      return _0x14510d(this, function(_0x4236c3) {
        switch (_0x4236c3.label) {
          case 0:
            return [4, _0x3b5fd8.HasItem("hollow_coin")];
          case 1:
            _0x15de43 = _0x4236c3.sent();
            if (_0x15de43) {
              _0x26c917(true);
            }
            return [2];
        }
      });
    }));
    _0x506c0a.onExit("cayoperico", function() {
      _0x26c917(false);
    });
    function _0x26c917(_0x352916) {
      SetIslandEnabled("HeistIsland", _0x352916);
      SetUseIslandMap(_0x352916);
      SetAiGlobalPathNodesType(_0x352916 ? 1 : 0);
      LoadGlobalWaterType(_0x352916 ? 1 : 0);
      SetScenarioGroupEnabled("Heist_Island_Peds", _0x352916);
      SetAudioFlag("PlayerOnDLCHeist4Island", _0x352916);
      SetAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Zones", _0x352916, true);
      SetAmbientZoneListStatePersistent("AZL_DLC_Hei4_Island_Disabled_Zones", !_0x352916, true);
    }
    ;
    function _0x333033(_0x313c20, _0x50c534, _0x3ba767, _0x42188b, _0x383819, _0x50fb74, _0x6e44ae) {
      try {
        var _0x1ff399 = _0x313c20[_0x50fb74](_0x6e44ae);
        var _0x3cda96 = _0x1ff399.value;
      } catch (_0x31663e) {
        _0x3ba767(_0x31663e);
        return;
      }
      if (_0x1ff399.done) {
        _0x50c534(_0x3cda96);
      } else {
        Promise.resolve(_0x3cda96).then(_0x42188b, _0x383819);
      }
    }
    function _0x2f9714(_0x19664) {
      return function() {
        var _0x2a773e = this;
        var _0x588f49 = arguments;
        return new Promise(function(_0x445511, _0x2d605f) {
          var _0x5e3bda = _0x19664.apply(_0x2a773e, _0x588f49);
          function _0x569960(_0x385008) {
            _0x333033(_0x5e3bda, _0x445511, _0x2d605f, _0x569960, _0x2f7e16, "next", _0x385008);
          }
          function _0x2f7e16(_0x229391) {
            _0x333033(_0x5e3bda, _0x445511, _0x2d605f, _0x569960, _0x2f7e16, "throw", _0x229391);
          }
          _0x569960(void 0);
        });
      };
    }
    function _0x5cd966(_0x2196ce, _0x13ac5a) {
      var _0x4f6eaf;
      var _0x494ae4;
      var _0x131d6d;
      var _0x2fce41;
      var _0x5f56aa = {
        label: 0,
        sent: function() {
          if (_0x131d6d[0] & 1) {
            throw _0x131d6d[1];
          }
          return _0x131d6d[1];
        },
        trys: [],
        ops: []
      };
      _0x2fce41 = {
        next: _0x13fa49(0),
        throw: _0x13fa49(1),
        return: _0x13fa49(2)
      };
      if (typeof Symbol === "function") {
        _0x2fce41[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x2fce41;
      function _0x13fa49(_0x3a4829) {
        return function(_0x24fd49) {
          return _0x23c1d0([_0x3a4829, _0x24fd49]);
        };
      }
      function _0x23c1d0(_0x5d792d) {
        if (_0x4f6eaf) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x5f56aa) {
          try {
            _0x4f6eaf = 1;
            if (_0x494ae4 && (_0x131d6d = _0x5d792d[0] & 2 ? _0x494ae4.return : _0x5d792d[0] ? _0x494ae4.throw || ((_0x131d6d = _0x494ae4.return) && _0x131d6d.call(_0x494ae4), 0) : _0x494ae4.next) && !(_0x131d6d = _0x131d6d.call(_0x494ae4, _0x5d792d[1])).done) {
              return _0x131d6d;
            }
            _0x494ae4 = 0;
            if (_0x131d6d) {
              _0x5d792d = [_0x5d792d[0] & 2, _0x131d6d.value];
            }
            switch (_0x5d792d[0]) {
              case 0:
              case 1:
                _0x131d6d = _0x5d792d;
                break;
              case 4:
                _0x5f56aa.label++;
                return {
                  value: _0x5d792d[1],
                  done: false
                };
              case 5:
                _0x5f56aa.label++;
                _0x494ae4 = _0x5d792d[1];
                _0x5d792d = [0];
                continue;
              case 7:
                _0x5d792d = _0x5f56aa.ops.pop();
                _0x5f56aa.trys.pop();
                continue;
              default:
                if (!(_0x131d6d = _0x5f56aa.trys, _0x131d6d = _0x131d6d.length > 0 && _0x131d6d[_0x131d6d.length - 1]) && (_0x5d792d[0] === 6 || _0x5d792d[0] === 2)) {
                  _0x5f56aa = 0;
                  continue;
                }
                if (_0x5d792d[0] === 3 && (!_0x131d6d || _0x5d792d[1] > _0x131d6d[0] && _0x5d792d[1] < _0x131d6d[3])) {
                  _0x5f56aa.label = _0x5d792d[1];
                  break;
                }
                if (_0x5d792d[0] === 6 && _0x5f56aa.label < _0x131d6d[1]) {
                  _0x5f56aa.label = _0x131d6d[1];
                  _0x131d6d = _0x5d792d;
                  break;
                }
                if (_0x131d6d && _0x5f56aa.label < _0x131d6d[2]) {
                  _0x5f56aa.label = _0x131d6d[2];
                  _0x5f56aa.ops.push(_0x5d792d);
                  break;
                }
                if (_0x131d6d[2]) {
                  _0x5f56aa.ops.pop();
                }
                _0x5f56aa.trys.pop();
                continue;
            }
            _0x5d792d = _0x13ac5a.call(_0x2196ce, _0x5f56aa);
          } catch (_0x37c17c) {
            _0x5d792d = [6, _0x37c17c];
            _0x494ae4 = 0;
          } finally {
            _0x4f6eaf = _0x131d6d = 0;
          }
        }
        if (_0x5d792d[0] & 5) {
          throw _0x5d792d[1];
        }
        var _0x4bcf7e = {
          value: _0x5d792d[0] ? _0x5d792d[1] : void 0,
          done: true
        };
        return _0x4bcf7e;
      }
    }
    function _0x539dce() {
    }
    _0x38f759.register("spice:use", _0x2f9714(function() {
      var _0x169ee6;
      var _0x10f7c5;
      var _0x4c7fdf;
      var _0x5a5539;
      var _0x19510b;
      return _0x5cd966(this, function(_0x5e2a5b) {
        switch (_0x5e2a5b.label) {
          case 0:
            _0x169ee6 = "mp_suicide";
            _0x10f7c5 = "pill_fp";
            return [4, _0x151c5c.loadAnim(_0x169ee6)];
          case 1:
            _0x4c7fdf = _0x5e2a5b.sent();
            if (!_0x4c7fdf) {
              return [2, false];
            }
            TaskPlayAnim(PlayerPedId(), _0x169ee6, _0x10f7c5, 8, -8, -1, 49, 0, false, false, false);
            return [4, _0x4c27ed.taskBar(2500, "Using spice")];
          case 2:
            _0x5a5539 = _0x5e2a5b.sent();
            StopAnimTask(PlayerPedId(), _0x169ee6, _0x10f7c5, -1);
            if (!_0x5a5539) {
              return [2, false];
            }
            _0x19510b = GetPedEyeColor(PlayerPedId());
            SetPedEyeColor(PlayerPedId(), 16);
            SetTimecycleModifier("glasses_purple");
            SetTimecycleModifierStrength(1.6);
            setTimeout(function() {
              SetPedEyeColor(PlayerPedId(), _0x19510b);
              ClearTimecycleModifier();
            }, 3e5);
            return [2, true];
        }
      });
    }));
    ;
    function _0x381ff0(_0x65a25c, _0x459826) {
      if (_0x459826 == null || _0x459826 > _0x65a25c.length) {
        _0x459826 = _0x65a25c.length;
      }
      for (var _0x242eb6 = 0, _0x4769cc = new Array(_0x459826); _0x242eb6 < _0x459826; _0x242eb6++) {
        _0x4769cc[_0x242eb6] = _0x65a25c[_0x242eb6];
      }
      return _0x4769cc;
    }
    function _0x3011ef(_0x116d65) {
      if (Array.isArray(_0x116d65)) {
        return _0x116d65;
      }
    }
    function _0x24eb27(_0x44bbe7, _0x2c09e7, _0x2ed5a8, _0x4eca12, _0x3ff00c, _0x42f3d9, _0x341c3f) {
      try {
        var _0xb08916 = _0x44bbe7[_0x42f3d9](_0x341c3f);
        var _0x9443f2 = _0xb08916.value;
      } catch (_0x313830) {
        _0x2ed5a8(_0x313830);
        return;
      }
      if (_0xb08916.done) {
        _0x2c09e7(_0x9443f2);
      } else {
        Promise.resolve(_0x9443f2).then(_0x4eca12, _0x3ff00c);
      }
    }
    function _0x408f5c(_0x52ba08) {
      return function() {
        var _0x235a63 = this;
        var _0xf99d8b = arguments;
        return new Promise(function(_0x98862d, _0x12c473) {
          var _0x372d4e = _0x52ba08.apply(_0x235a63, _0xf99d8b);
          function _0x47d39e(_0x3deaee) {
            _0x24eb27(_0x372d4e, _0x98862d, _0x12c473, _0x47d39e, _0x38e5c8, "next", _0x3deaee);
          }
          function _0x38e5c8(_0x34d7ed) {
            _0x24eb27(_0x372d4e, _0x98862d, _0x12c473, _0x47d39e, _0x38e5c8, "throw", _0x34d7ed);
          }
          _0x47d39e(void 0);
        });
      };
    }
    function _0x382e3a(_0x328349, _0x5bf4f9) {
      if (!(_0x328349 instanceof _0x5bf4f9)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _0x5e147b(_0x3fcb93, _0x314214) {
      for (var _0x2f1e4f = 0; _0x2f1e4f < _0x314214.length; _0x2f1e4f++) {
        var _0x127641 = _0x314214[_0x2f1e4f];
        _0x127641.enumerable = _0x127641.enumerable || false;
        _0x127641.configurable = true;
        if ("value" in _0x127641) {
          _0x127641.writable = true;
        }
        Object.defineProperty(_0x3fcb93, _0x127641.key, _0x127641);
      }
    }
    function _0x9cf2f2(_0x6d8324, _0x5aed8d, _0x43912b) {
      if (_0x5aed8d) {
        _0x5e147b(_0x6d8324.prototype, _0x5aed8d);
      }
      if (_0x43912b) {
        _0x5e147b(_0x6d8324, _0x43912b);
      }
      return _0x6d8324;
    }
    function _0x1bcab8(_0x106b51, _0xe335dd, _0x9c125f) {
      if (_0xe335dd in _0x106b51) {
        var _0x4e4019 = {
          value: _0x9c125f,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(_0x106b51, _0xe335dd, _0x4e4019);
      } else {
        _0x106b51[_0xe335dd] = _0x9c125f;
      }
      return _0x106b51;
    }
    function _0xc0718(_0x387f4c, _0x2a2df9) {
      var _0x453cb6 = _0x387f4c == null ? null : typeof Symbol !== "undefined" && _0x387f4c[Symbol.iterator] || _0x387f4c["@@iterator"];
      if (_0x453cb6 == null) {
        return;
      }
      var _0x23718b = [];
      var _0x145035 = true;
      var _0x376eb9 = false;
      var _0x8916b4;
      var _0x295b7b;
      try {
        for (_0x453cb6 = _0x453cb6.call(_0x387f4c); !(_0x145035 = (_0x8916b4 = _0x453cb6.next()).done); _0x145035 = true) {
          _0x23718b.push(_0x8916b4.value);
          if (_0x2a2df9 && _0x23718b.length === _0x2a2df9) {
            break;
          }
        }
      } catch (_0xf33002) {
        _0x376eb9 = true;
        _0x295b7b = _0xf33002;
      } finally {
        try {
          if (!_0x145035 && _0x453cb6.return != null) {
            _0x453cb6.return();
          }
        } finally {
          if (_0x376eb9) {
            throw _0x295b7b;
          }
        }
      }
      return _0x23718b;
    }
    function _0x3d85f7() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0x9bdf9(_0x126b5d, _0x588f84) {
      return _0x3011ef(_0x126b5d) || _0xc0718(_0x126b5d, _0x588f84) || _0x5c49a5(_0x126b5d, _0x588f84) || _0x3d85f7();
    }
    function _0x5c49a5(_0x4d27c7, _0x1cab4f) {
      if (!_0x4d27c7) {
        return;
      }
      if (typeof _0x4d27c7 === "string") {
        return _0x381ff0(_0x4d27c7, _0x1cab4f);
      }
      var _0x700497 = Object.prototype.toString.call(_0x4d27c7).slice(8, -1);
      if (_0x700497 === "Object" && _0x4d27c7.constructor) {
        _0x700497 = _0x4d27c7.constructor.name;
      }
      if (_0x700497 === "Map" || _0x700497 === "Set") {
        return Array.from(_0x700497);
      }
      if (_0x700497 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x700497)) {
        return _0x381ff0(_0x4d27c7, _0x1cab4f);
      }
    }
    function _0x34a7ec(_0x1a70b6, _0x84b28c) {
      var _0x9ce705;
      var _0x262b75;
      var _0x337444;
      var _0x3c8efa;
      var _0x3812ca = {
        label: 0,
        sent: function() {
          if (_0x337444[0] & 1) {
            throw _0x337444[1];
          }
          return _0x337444[1];
        },
        trys: [],
        ops: []
      };
      _0x3c8efa = {
        next: _0x4eda5e(0),
        throw: _0x4eda5e(1),
        return: _0x4eda5e(2)
      };
      if (typeof Symbol === "function") {
        _0x3c8efa[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x3c8efa;
      function _0x4eda5e(_0x312921) {
        return function(_0x4f7c88) {
          return _0x3a009b([_0x312921, _0x4f7c88]);
        };
      }
      function _0x3a009b(_0x12a5ed) {
        if (_0x9ce705) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x3812ca) {
          try {
            _0x9ce705 = 1;
            if (_0x262b75 && (_0x337444 = _0x12a5ed[0] & 2 ? _0x262b75.return : _0x12a5ed[0] ? _0x262b75.throw || ((_0x337444 = _0x262b75.return) && _0x337444.call(_0x262b75), 0) : _0x262b75.next) && !(_0x337444 = _0x337444.call(_0x262b75, _0x12a5ed[1])).done) {
              return _0x337444;
            }
            _0x262b75 = 0;
            if (_0x337444) {
              _0x12a5ed = [_0x12a5ed[0] & 2, _0x337444.value];
            }
            switch (_0x12a5ed[0]) {
              case 0:
              case 1:
                _0x337444 = _0x12a5ed;
                break;
              case 4:
                _0x3812ca.label++;
                return {
                  value: _0x12a5ed[1],
                  done: false
                };
              case 5:
                _0x3812ca.label++;
                _0x262b75 = _0x12a5ed[1];
                _0x12a5ed = [0];
                continue;
              case 7:
                _0x12a5ed = _0x3812ca.ops.pop();
                _0x3812ca.trys.pop();
                continue;
              default:
                if (!(_0x337444 = _0x3812ca.trys, _0x337444 = _0x337444.length > 0 && _0x337444[_0x337444.length - 1]) && (_0x12a5ed[0] === 6 || _0x12a5ed[0] === 2)) {
                  _0x3812ca = 0;
                  continue;
                }
                if (_0x12a5ed[0] === 3 && (!_0x337444 || _0x12a5ed[1] > _0x337444[0] && _0x12a5ed[1] < _0x337444[3])) {
                  _0x3812ca.label = _0x12a5ed[1];
                  break;
                }
                if (_0x12a5ed[0] === 6 && _0x3812ca.label < _0x337444[1]) {
                  _0x3812ca.label = _0x337444[1];
                  _0x337444 = _0x12a5ed;
                  break;
                }
                if (_0x337444 && _0x3812ca.label < _0x337444[2]) {
                  _0x3812ca.label = _0x337444[2];
                  _0x3812ca.ops.push(_0x12a5ed);
                  break;
                }
                if (_0x337444[2]) {
                  _0x3812ca.ops.pop();
                }
                _0x3812ca.trys.pop();
                continue;
            }
            _0x12a5ed = _0x84b28c.call(_0x1a70b6, _0x3812ca);
          } catch (_0xbfaa06) {
            _0x12a5ed = [6, _0xbfaa06];
            _0x262b75 = 0;
          } finally {
            _0x9ce705 = _0x337444 = 0;
          }
        }
        if (_0x12a5ed[0] & 5) {
          throw _0x12a5ed[1];
        }
        var _0x22bb94 = {
          value: _0x12a5ed[0] ? _0x12a5ed[1] : void 0,
          done: true
        };
        return _0x22bb94;
      }
    }
    var _0x118dc6 = new _0x49cfb9(function() {
    }, 0, "tick");
    var _0x2e6dc6 = new _0x49cfb9(function() {
    }, 100, "tick");
    var _0x103acb = false;
    RegisterCommand("misc:zombies:grabMode", _0x408f5c(function() {
      return _0x34a7ec(this, function(_0x4b7169) {
        switch (_0x4b7169.label) {
          case 0:
            return [4, _0x38f759.execute("misc:zombie:isAllowed")];
          case 1:
            if (_0x4b7169.sent() === false) {
              console.log("[Zombie] You are not permitted to spawn zombies.");
              return [2];
            }
            _0x103acb = !_0x103acb;
            if (_0x103acb) {
              console.log("Throw mode enabled");
              _0x118dc6.start();
            } else {
              console.log("Throw mode disabled");
              _0x118dc6.stop();
            }
            return [2];
        }
      });
    }), false);
    _0x118dc6.addHook("afterStop", function() {
      if (_0x3d1221.isGrabbing()) {
        _0x3d1221.throwEntity(50);
      }
    });
    _0x2e6dc6.addHook("active", _0x408f5c(function() {
      var _0x4d3b1e;
      var _0x113144;
      var _0x5f4524;
      var _0x1575da;
      return _0x34a7ec(this, function(_0x4dfe55) {
        switch (_0x4dfe55.label) {
          case 0:
            if (!_0x3d1221.isGrabbing()) {
              return [3, 2];
            }
            _0x4d3b1e = _0x3d1221.getGrabState();
            if (_0x4d3b1e && !_0x4d3b1e.isRemoteAttach && _0x4d3b1e.entityId) {
              if (!DoesEntityExist(_0x4d3b1e.entityId)) {
                _0x3d1221.cancelGrab();
                return [2];
              }
            }
            _0x113144 = PlayerPedId();
            if (IsEntityPlayingAnim(_0x113144, "random@prisoner_lift", "arms_waving", 3)) {
              return [3, 2];
            }
            _0x5f4524 = "arms_waving";
            _0x1575da = "random@prisoner_lift";
            return [4, _0x151c5c.loadAnim(_0x1575da)];
          case 1:
            _0x4dfe55.sent();
            TaskPlayAnim(_0x113144, _0x1575da, _0x5f4524, 3, 3, -1, 50, 1, false, false, false);
            _0x4dfe55.label = 2;
          case 2:
            return [2];
        }
      });
    }));
    _0x118dc6.addHook("active", function() {
      DisableControlAction(0, 24, true);
      DisableControlAction(0, 25, true);
      DisableControlAction(0, 140, true);
      DisableControlAction(0, 141, true);
      DisableControlAction(0, 142, true);
      if (IsDisabledControlJustPressed(0, 24)) {
        if (!_0x3d1221.isGrabbing()) {
          _0x3d1221.grabEntity();
        } else {
          _0x3d1221.startCharging();
        }
      }
      if (IsDisabledControlJustReleased(0, 24) && _0x3d1221.isGrabbing() && _0x3d1221.isCharging()) {
        var _0x9f5480 = _0x3d1221.getChargedForce();
        _0x3d1221.throwEntity(_0x9f5480);
      }
    });
    _0x38f759.register("misc:zombie:requestAttachToTarget", (function() {
      var _0x4ab1a5 = _0x408f5c(function(_0x3cddff, _0x498c3d) {
        var _0x39a889;
        var _0x3f5db2;
        return _0x34a7ec(this, function(_0x4f3158) {
          _0x39a889 = NetworkGetEntityFromNetworkId(_0x498c3d);
          _0x3f5db2 = GetPlayerPed(GetPlayerFromServerId(_0x3cddff));
          if (_0x39a889 && DoesEntityExist(_0x39a889)) {
            AttachEntityToEntity(_0x39a889, _0x3f5db2, 57005, 0, 0, 1.5, 0, 0, 0, false, false, false, false, 2, true);
            return [2, true];
          }
          return [2, false];
        });
      });
      return function(_0x57004c, _0x18f02e) {
        return _0x4ab1a5.apply(this, arguments);
      };
    })());
    _0x38f759.register("misc:zombie:requestDetachTarget", function(_0x1a0eee) {
      var _0x34d1e9 = NetworkGetEntityFromNetworkId(_0x1a0eee);
      if (_0x34d1e9 && DoesEntityExist(_0x34d1e9)) {
        SetEntityCollision(_0x34d1e9, true, true);
        FreezeEntityPosition(_0x34d1e9, false);
        DetachEntity(_0x34d1e9, true, true);
        return true;
      }
      return false;
    });
    var _0x56094f = (function() {
      "use strict";
      "use strict";
      function _0x19adbf() {
        _0x382e3a(this, _0x19adbf);
        _0x1bcab8(this, "grabbedEntity", null);
        _0x1bcab8(this, "isChargingThrow", false);
        _0x1bcab8(this, "chargeStartTime", 0);
        _0x1bcab8(this, "MIN_FORCE", 25);
        _0x1bcab8(this, "MAX_FORCE", 150);
        _0x1bcab8(this, "MAX_CHARGE_TIME", 3e3);
      }
      _0x9cf2f2(_0x19adbf, [{
        key: "grabEntity",
        value: function _0x59a0c1() {
          var _0x4115ff = this;
          return _0x408f5c(function() {
            var _0x41dab0;
            var _0x35031b;
            var _0x351782;
            var _0x264400;
            var _0x19f6b3;
            var _0x5d1a42;
            var _0x582ccb;
            var _0x4d5a61;
            return _0x34a7ec(this, function(_0x2bc720) {
              switch (_0x2bc720.label) {
                case 0:
                  _0x41dab0 = _0x9bdf9(globalThis.exports["np-target"].GetEntityPlayerIsLookingAt(2, 0.2, 30, PlayerPedId()), 3);
                  _0x35031b = _0x41dab0[0];
                  _0x351782 = _0x41dab0[1];
                  _0x264400 = _0x41dab0[2];
                  if (!_0x35031b || _0x351782 !== 2) {
                    return [3, 4];
                  }
                  _0x2e6dc6.start();
                  _0x19f6b3 = NetworkGetEntityOwner(_0x35031b);
                  if (_0x19f6b3 === -1 || _0x19f6b3 === NetworkGetPlayerIndexFromPed(PlayerPedId())) {
                    return [3, 2];
                  }
                  _0x5d1a42 = NetworkGetNetworkIdFromEntity(_0x35031b);
                  _0x582ccb = GetPlayerServerId(_0x19f6b3);
                  return [4, _0x38f759.execute("misc:zombie:requestAttachFromSource", _0x582ccb, _0x5d1a42)];
                case 1:
                  _0x4d5a61 = _0x2bc720.sent();
                  console.log("Could attach remotely:", _0x4d5a61);
                  if (_0x4d5a61) {
                    var _0x143476 = {
                      entityNetId: _0x5d1a42,
                      isRemoteAttach: true,
                      remoteOwnerId: _0x582ccb
                    };
                    _0x4115ff.grabbedEntity = _0x143476;
                    return [2, true];
                  }
                  return [2, false];
                case 2:
                  var _0x4007c0 = {
                    entityId: _0x35031b,
                    isRemoteAttach: false
                  };
                  _0x4115ff.grabbedEntity = _0x4007c0;
                  SetEntityCollision(_0x35031b, false, true);
                  FreezeEntityPosition(_0x35031b, true);
                  AttachEntityToEntity(_0x35031b, PlayerPedId(), 57005, 0, 0, 1.5, 0, 0, 0, false, false, false, false, 2, true);
                  _0x2bc720.label = 3;
                case 3:
                  return [2, true];
                case 4:
                  return [2, false];
              }
            });
          })();
        }
      }, {
        key: "throwEntity",
        value: function _0x5c7d45(_0x346223 = 50) {
          if (!this.grabbedEntity) {
            return;
          }
          this.isChargingThrow = false;
          this.chargeStartTime = 0;
          _0x2e6dc6.stop();
          ClearPedTasks(PlayerPedId());
          if (this.grabbedEntity.isRemoteAttach) {
            var _0x4f3fa1 = new _0x58b2dd(GetEntityForwardVector(PlayerPedId()));
            var _0x2abd21 = NetworkGetEntityOwner(NetworkGetEntityFromNetworkId(this.grabbedEntity.entityNetId));
            var _0x1c5b7a = GetPlayerServerId(_0x2abd21);
            _0x539aaf.emitNet("misc:zombie:detachTarget", _0x1c5b7a, this.grabbedEntity.entityNetId, _0x4f3fa1, _0x346223);
            this.grabbedEntity = null;
            return;
          }
          var _0x35669f = this.grabbedEntity.entityId;
          if (!_0x35669f || !DoesEntityExist(_0x35669f)) {
            this.grabbedEntity = null;
            return;
          }
          SetEntityCollision(_0x35669f, true, true);
          FreezeEntityPosition(_0x35669f, false);
          DetachEntity(_0x35669f, true, true);
          var _0x410fb6 = new _0x58b2dd(GetEntityForwardVector(PlayerPedId()));
          _0x410fb6.multiplyScalar(_0x346223);
          ApplyForceToEntity(_0x35669f, 1, _0x410fb6.x, _0x410fb6.y, _0x410fb6.z + 25, 0, 0, 0, 0, false, true, true, false, true);
          this.grabbedEntity = null;
        }
      }, {
        key: "isGrabbing",
        value: function _0x1868ce() {
          return this.grabbedEntity !== null;
        }
      }, {
        key: "getGrabState",
        value: function _0xfd5f87() {
          return this.grabbedEntity;
        }
      }, {
        key: "startCharging",
        value: function _0x1c6566() {
          if (this.isChargingThrow) {
            return;
          }
          this.isChargingThrow = true;
          this.chargeStartTime = GetGameTimer();
          console.log("Started charging throw");
        }
      }, {
        key: "getChargedForce",
        value: function _0x4b373() {
          if (!this.isChargingThrow) {
            return this.MIN_FORCE;
          }
          var _0x485e24 = GetGameTimer() - this.chargeStartTime;
          var _0x53c95e = Math.min(_0x485e24 / this.MAX_CHARGE_TIME, 1);
          var _0x17e7f3 = this.MIN_FORCE + (this.MAX_FORCE - this.MIN_FORCE) * _0x53c95e;
          console.log(`Charged for ${_0x485e24}ms (${(_0x53c95e * 100).toFixed(1)}%) - Force: ${_0x17e7f3.toFixed(1)}`);
          return _0x17e7f3;
        }
      }, {
        key: "isCharging",
        value: function _0x4a2bee() {
          return this.isChargingThrow;
        }
      }, {
        key: "cancelGrab",
        value: function _0x1fa700() {
          if (!this.grabbedEntity) {
            return;
          }
          _0x2e6dc6.stop();
          ClearPedTasks(PlayerPedId());
          if (!this.grabbedEntity.isRemoteAttach && this.grabbedEntity.entityId) {
            var _0x10f6a7 = this.grabbedEntity.entityId;
            if (DoesEntityExist(_0x10f6a7)) {
              SetEntityCollision(_0x10f6a7, true, true);
              FreezeEntityPosition(_0x10f6a7, false);
              DetachEntity(_0x10f6a7, true, true);
            }
          }
          this.grabbedEntity = null;
          this.isChargingThrow = false;
          this.chargeStartTime = 0;
        }
      }]);
      return _0x19adbf;
    })();
    var _0x3d1221 = new _0x56094f();
    var _0x13e86b = (function() {
      var _0x2113cb = _0x408f5c(function() {
        return _0x34a7ec(this, function(_0x124fbb) {
          return [2];
        });
      });
      return function _0x204bcf() {
        return _0x2113cb.apply(this, arguments);
      };
    })();
    ;
    function _0x2bc01e(_0xe5ebac, _0x25be8e) {
      if (_0x25be8e == null || _0x25be8e > _0xe5ebac.length) {
        _0x25be8e = _0xe5ebac.length;
      }
      for (var _0x406d08 = 0, _0x1ee02e = new Array(_0x25be8e); _0x406d08 < _0x25be8e; _0x406d08++) {
        _0x1ee02e[_0x406d08] = _0xe5ebac[_0x406d08];
      }
      return _0x1ee02e;
    }
    function _0x332394(_0x65e3c8) {
      if (Array.isArray(_0x65e3c8)) {
        return _0x65e3c8;
      }
    }
    function _0x32cd59(_0x44c562, _0x504297, _0x52432f, _0x28e089, _0xf6e80f, _0x3925c0, _0x41dd84) {
      try {
        var _0x4fb751 = _0x44c562[_0x3925c0](_0x41dd84);
        var _0x414a4f = _0x4fb751.value;
      } catch (_0x2a603a) {
        _0x52432f(_0x2a603a);
        return;
      }
      if (_0x4fb751.done) {
        _0x504297(_0x414a4f);
      } else {
        Promise.resolve(_0x414a4f).then(_0x28e089, _0xf6e80f);
      }
    }
    function _0x11862d(_0x5e3063) {
      return function() {
        var _0x5173e6 = this;
        var _0x118408 = arguments;
        return new Promise(function(_0x1dbcf9, _0x210552) {
          var _0x4d9820 = _0x5e3063.apply(_0x5173e6, _0x118408);
          function _0x45ddb9(_0x21cae0) {
            _0x32cd59(_0x4d9820, _0x1dbcf9, _0x210552, _0x45ddb9, _0x3471f7, "next", _0x21cae0);
          }
          function _0x3471f7(_0x50a679) {
            _0x32cd59(_0x4d9820, _0x1dbcf9, _0x210552, _0x45ddb9, _0x3471f7, "throw", _0x50a679);
          }
          _0x45ddb9(void 0);
        });
      };
    }
    function _0x58d87c(_0xd4fe9a, _0x55b9ba, _0x4149e4) {
      if (_0x55b9ba in _0xd4fe9a) {
        var _0x467001 = {
          value: _0x4149e4,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(_0xd4fe9a, _0x55b9ba, _0x467001);
      } else {
        _0xd4fe9a[_0x55b9ba] = _0x4149e4;
      }
      return _0xd4fe9a;
    }
    function _0xcf26aa(_0x5a42bb, _0x2e3dad) {
      var _0x4658e5 = _0x5a42bb == null ? null : typeof Symbol !== "undefined" && _0x5a42bb[Symbol.iterator] || _0x5a42bb["@@iterator"];
      if (_0x4658e5 == null) {
        return;
      }
      var _0x11d29d = [];
      var _0x56cfad = true;
      var _0x19c043 = false;
      var _0x5bc485;
      var _0x314ff5;
      try {
        for (_0x4658e5 = _0x4658e5.call(_0x5a42bb); !(_0x56cfad = (_0x5bc485 = _0x4658e5.next()).done); _0x56cfad = true) {
          _0x11d29d.push(_0x5bc485.value);
          if (_0x2e3dad && _0x11d29d.length === _0x2e3dad) {
            break;
          }
        }
      } catch (_0x45d4ef) {
        _0x19c043 = true;
        _0x314ff5 = _0x45d4ef;
      } finally {
        try {
          if (!_0x56cfad && _0x4658e5.return != null) {
            _0x4658e5.return();
          }
        } finally {
          if (_0x19c043) {
            throw _0x314ff5;
          }
        }
      }
      return _0x11d29d;
    }
    function _0x30c98b() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0x507499(_0x49a681) {
      for (var _0x437050 = 1; _0x437050 < arguments.length; _0x437050++) {
        var _0x3f391e = arguments[_0x437050] ?? {};
        var _0x584901 = Object.keys(_0x3f391e);
        if (typeof Object.getOwnPropertySymbols === "function") {
          _0x584901 = _0x584901.concat(Object.getOwnPropertySymbols(_0x3f391e).filter(function(_0x4ca99a) {
            return Object.getOwnPropertyDescriptor(_0x3f391e, _0x4ca99a).enumerable;
          }));
        }
        _0x584901.forEach(function(_0x267722) {
          _0x58d87c(_0x49a681, _0x267722, _0x3f391e[_0x267722]);
        });
      }
      return _0x49a681;
    }
    function _0x1e59db(_0x1e0dda, _0x3c3d57) {
      var _0x2ff8a2 = Object.keys(_0x1e0dda);
      if (Object.getOwnPropertySymbols) {
        var _0x168f7c = Object.getOwnPropertySymbols(_0x1e0dda);
        if (_0x3c3d57) {
          _0x168f7c = _0x168f7c.filter(function(_0x785ef9) {
            return Object.getOwnPropertyDescriptor(_0x1e0dda, _0x785ef9).enumerable;
          });
        }
        _0x2ff8a2.push.apply(_0x2ff8a2, _0x168f7c);
      }
      return _0x2ff8a2;
    }
    function _0x374cae(_0xd03690, _0x26f72c) {
      _0x26f72c = _0x26f72c ?? {};
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(_0xd03690, Object.getOwnPropertyDescriptors(_0x26f72c));
      } else {
        _0x1e59db(Object(_0x26f72c)).forEach(function(_0x24a314) {
          Object.defineProperty(_0xd03690, _0x24a314, Object.getOwnPropertyDescriptor(_0x26f72c, _0x24a314));
        });
      }
      return _0xd03690;
    }
    function _0x1f4e85(_0x4fca43, _0x498084) {
      return _0x332394(_0x4fca43) || _0xcf26aa(_0x4fca43, _0x498084) || _0x45eeb0(_0x4fca43, _0x498084) || _0x30c98b();
    }
    function _0x45eeb0(_0x5815f6, _0x2410de) {
      if (!_0x5815f6) {
        return;
      }
      if (typeof _0x5815f6 === "string") {
        return _0x2bc01e(_0x5815f6, _0x2410de);
      }
      var _0x4c5994 = Object.prototype.toString.call(_0x5815f6).slice(8, -1);
      if (_0x4c5994 === "Object" && _0x5815f6.constructor) {
        _0x4c5994 = _0x5815f6.constructor.name;
      }
      if (_0x4c5994 === "Map" || _0x4c5994 === "Set") {
        return Array.from(_0x4c5994);
      }
      if (_0x4c5994 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x4c5994)) {
        return _0x2bc01e(_0x5815f6, _0x2410de);
      }
    }
    function _0x279f30(_0x37adcf, _0x9e8553) {
      var _0x462468;
      var _0x3d9680;
      var _0x3b4919;
      var _0x7767bc;
      var _0x5fb072 = {
        label: 0,
        sent: function() {
          if (_0x3b4919[0] & 1) {
            throw _0x3b4919[1];
          }
          return _0x3b4919[1];
        },
        trys: [],
        ops: []
      };
      _0x7767bc = {
        next: _0x411cb9(0),
        throw: _0x411cb9(1),
        return: _0x411cb9(2)
      };
      if (typeof Symbol === "function") {
        _0x7767bc[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x7767bc;
      function _0x411cb9(_0x467fb3) {
        return function(_0x138054) {
          return _0x151e27([_0x467fb3, _0x138054]);
        };
      }
      function _0x151e27(_0x3cc88d) {
        if (_0x462468) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x5fb072) {
          try {
            _0x462468 = 1;
            if (_0x3d9680 && (_0x3b4919 = _0x3cc88d[0] & 2 ? _0x3d9680.return : _0x3cc88d[0] ? _0x3d9680.throw || ((_0x3b4919 = _0x3d9680.return) && _0x3b4919.call(_0x3d9680), 0) : _0x3d9680.next) && !(_0x3b4919 = _0x3b4919.call(_0x3d9680, _0x3cc88d[1])).done) {
              return _0x3b4919;
            }
            _0x3d9680 = 0;
            if (_0x3b4919) {
              _0x3cc88d = [_0x3cc88d[0] & 2, _0x3b4919.value];
            }
            switch (_0x3cc88d[0]) {
              case 0:
              case 1:
                _0x3b4919 = _0x3cc88d;
                break;
              case 4:
                _0x5fb072.label++;
                return {
                  value: _0x3cc88d[1],
                  done: false
                };
              case 5:
                _0x5fb072.label++;
                _0x3d9680 = _0x3cc88d[1];
                _0x3cc88d = [0];
                continue;
              case 7:
                _0x3cc88d = _0x5fb072.ops.pop();
                _0x5fb072.trys.pop();
                continue;
              default:
                if (!(_0x3b4919 = _0x5fb072.trys, _0x3b4919 = _0x3b4919.length > 0 && _0x3b4919[_0x3b4919.length - 1]) && (_0x3cc88d[0] === 6 || _0x3cc88d[0] === 2)) {
                  _0x5fb072 = 0;
                  continue;
                }
                if (_0x3cc88d[0] === 3 && (!_0x3b4919 || _0x3cc88d[1] > _0x3b4919[0] && _0x3cc88d[1] < _0x3b4919[3])) {
                  _0x5fb072.label = _0x3cc88d[1];
                  break;
                }
                if (_0x3cc88d[0] === 6 && _0x5fb072.label < _0x3b4919[1]) {
                  _0x5fb072.label = _0x3b4919[1];
                  _0x3b4919 = _0x3cc88d;
                  break;
                }
                if (_0x3b4919 && _0x5fb072.label < _0x3b4919[2]) {
                  _0x5fb072.label = _0x3b4919[2];
                  _0x5fb072.ops.push(_0x3cc88d);
                  break;
                }
                if (_0x3b4919[2]) {
                  _0x5fb072.ops.pop();
                }
                _0x5fb072.trys.pop();
                continue;
            }
            _0x3cc88d = _0x9e8553.call(_0x37adcf, _0x5fb072);
          } catch (_0x1ece81) {
            _0x3cc88d = [6, _0x1ece81];
            _0x3d9680 = 0;
          } finally {
            _0x462468 = _0x3b4919 = 0;
          }
        }
        if (_0x3cc88d[0] & 5) {
          throw _0x3cc88d[1];
        }
        var _0x201280 = {
          value: _0x3cc88d[0] ? _0x3cc88d[1] : void 0,
          done: true
        };
        return _0x201280;
      }
    }
    var _0x592ec7 = "clipset@anim@ingame@move_m@zombie@core";
    var _0x278d92 = "clipset@anim@ingame@move_m@zombie@core";
    var _0x236eb7 = "clipset@anim@ingame@move_m@zombie@strafe";
    var _0x45e107 = (function() {
      var _0xe51a1a = _0x11862d(function(_0xbabb39) {
        var _0x480434;
        var _0x240910;
        return _0x279f30(this, function(_0x137a48) {
          switch (_0x137a48.label) {
            case 0:
              _0x480434 = _0xbabb39 || PlayerPedId();
              _0x240910 = GetHashKey("ZOMBIE");
              return [4, _0x151c5c.loadClipSet(_0x592ec7)];
            case 1:
              _0x137a48.sent();
              _0x151c5c.loadClipSet(_0x278d92);
              _0x151c5c.loadClipSet(_0x236eb7);
              SetPedMovementClipset(_0x480434, _0x592ec7, 0.25);
              SetPedStrafeClipset(_0x480434, _0x278d92);
              SetPedUsingActionMode(_0x480434, true, -1, _0x236eb7);
              SetWeaponAnimationOverride(_0x480434, _0x240910);
              return [2];
          }
        });
      });
      return function _0x276aa2(_0x143e3b) {
        return _0xe51a1a.apply(this, arguments);
      };
    })();
    RegisterCommand("misc:zombies:clipSet", _0x11862d(function() {
      return _0x279f30(this, function(_0x460e3a) {
        switch (_0x460e3a.label) {
          case 0:
            return [4, _0x38f759.execute("misc:zombie:isAllowed")];
          case 1:
            if (_0x460e3a.sent() === false) {
              console.log("[Zombie] You are not permitted to spawn zombies.");
              return [2];
            }
            _0x45e107();
            return [2];
        }
      });
    }), false);
    var _0x491e12 = /* @__PURE__ */ new Map();
    var _0x28fa42 = ["g_m_m_zombie_01", "np_zombie", "mp_f_deadhooker"];
    var _0x134e87 = [0.45, 0.45, 0.1];
    var _0x2e533d = _0x28fa42.map(function(_0x99a21c) {
      return GetHashKey(_0x99a21c);
    });
    var _0x263040 = [{
      dict: "core",
      name: "fire_wrecked_plane_cockpit",
      scale: 1,
      bone: 24816
    }, {
      dict: "core",
      name: "exp_grd_bzgas_smoke",
      scale: 1,
      bone: 24816
    }, {
      dict: "core",
      name: "ent_amb_fly_swarm",
      scale: 1,
      bone: 24816
    }, {
      dict: "core",
      name: "env_smoke_fbi",
      scale: 0.25,
      bone: 24816
    }, {
      dict: "core",
      name: "trail_splash_water",
      scale: 1,
      bone: 31086
    }, {
      dict: "core",
      name: "ent_amb_elec_crackle",
      scale: 1,
      bone: 31086
    }];
    var _0xd6b731 = new _0x49cfb9(function() {
    }, 1500);
    var _0x50753d = new _0x49cfb9(function() {
    }, 8e3);
    var _0x3ae8bd = new _0x49cfb9(function() {
    }, 25e3);
    var _0x2a33aa = new _0x49cfb9(function() {
    }, 3300);
    var _0xde72de = new _0x49cfb9(function() {
    }, 2100);
    var _0x1d7bdf = new _0x49cfb9(function() {
    }, 1800);
    var _0x5dfae1 = new _0x49cfb9(function() {
    }, 9e3);
    function _0x36aef6(_0x47d3da) {
      return new Promise(function(_0x4593b8) {
        return setTimeout(_0x4593b8, _0x47d3da);
      });
    }
    function _0x580ce7(_0x51635c) {
      SetPedMovementClipset(_0x51635c, _0x592ec7, 0.25);
      SetPedStrafeClipset(_0x51635c, _0x278d92);
      SetPedUsingActionMode(_0x51635c, true, -1, _0x236eb7);
    }
    function _0x265d92(_0x388406, _0x543f30) {
      SetPedCombatAbility(_0x388406, 100);
      SetPedCombatMovement(_0x388406, 2);
      SetPedCombatRange(_0x388406, 0);
      SetPedCombatAttributes(_0x388406, 0, false);
      SetPedCombatAttributes(_0x388406, 1, false);
      SetPedCombatAttributes(_0x388406, 2, false);
      SetPedCombatAttributes(_0x388406, 5, true);
      SetPedCombatAttributes(_0x388406, 13, true);
      SetPedCombatAttributes(_0x388406, 17, false);
      SetPedCombatAttributes(_0x388406, 21, true);
      SetPedCombatAttributes(_0x388406, 26, true);
      SetPedCombatAttributes(_0x388406, 38, true);
      SetPedCombatAttributes(_0x388406, 46, true);
      SetPedCombatAttributes(_0x388406, 50, true);
      SetPedCombatAttributes(_0x388406, 58, true);
      SetPedFleeAttributes(_0x388406, 0, false);
      SetPedAsEnemy(_0x388406, true);
      SetPedArmour(_0x388406, 0);
      SetBlockingOfNonTemporaryEvents(_0x388406, true);
      SetPedMeleeCombatLimits(_0x38200c, _0x7c4c06, _0x544cff);
      SetAiMeleeWeaponDamageModifier(_0x543f30);
      var _0x2b08a4 = _0xbe416b();
      SetPedRelationshipGroupHash(_0x388406, _0x2b08a4);
      SetPedAccuracy(_0x388406, 50);
      SetPedConfigFlag(_0x388406, 39, true);
      SetPedConfigFlag(_0x388406, 118, false);
      SetPedConfigFlag(_0x388406, 169, true);
      SetPedConfigFlag(_0x388406, 208, true);
      SetPedConfigFlag(_0x388406, 279, false);
      SetPedConfigFlag(_0x388406, 281, true);
      SetPedConfigFlag(_0x388406, 326, true);
      SetPedConfigFlag(_0x388406, 430, true);
      DisablePedPainAudio(_0x388406, true);
      SetPedSuffersCriticalHits(_0x388406, false);
    }
    function _0x3b8e16(_0x55e207, _0x4f18d3) {
      if (_0x4f18d3 === "normal") {
        SetPedCanRagdoll(_0x55e207, true);
      } else {
        CanPedRagdoll(_0x55e207);
        SetPedCanRagdoll(_0x55e207, false);
        SetPedRagdollOnCollision(_0x55e207, false);
        SetPedCanRagdollFromPlayerImpact(_0x55e207, false);
        SetPedMinGroundTimeForStungun(_0x55e207, 1);
        SetPedCanBeKnockedOffVehicle(_0x55e207, 1);
        SetPedConfigFlag(_0x55e207, 107, true);
        SetPedConfigFlag(_0x55e207, 108, true);
        SetPedConfigFlag(_0x55e207, 109, true);
        SetPedConfigFlag(_0x55e207, 110, true);
        SetPedConfigFlag(_0x55e207, 307, true);
      }
    }
    function _0x55814b(_0x3bb07f) {
      var _0x561b5d = Date.now();
      if (DoesEntityExist(_0x3bb07f.entity)) {
        _0x3bb07f.lastSeen = _0x561b5d;
        _0x3bb07f.failedRefreshAttempts = 0;
        return true;
      }
      if (!NetworkDoesNetworkIdExist(_0x3bb07f.netId)) {
        return false;
      }
      var _0x2f0c18 = NetworkGetEntityFromNetworkId(_0x3bb07f.netId);
      if (_0x2f0c18 && _0x2f0c18 !== 0 && DoesEntityExist(_0x2f0c18)) {
        _0x3bb07f.entity = _0x2f0c18;
        _0x3bb07f.lastSeen = _0x561b5d;
        _0x3bb07f.failedRefreshAttempts = 0;
        return true;
      }
      _0x3bb07f.failedRefreshAttempts++;
      return false;
    }
    var _0x27ed7d = 50;
    var _0xc5d3d6 = 75;
    var _0x1b1d87 = 5;
    var _0x569d7e = 15;
    var _0x3f2816 = 3e4;
    var _0x33a806 = 500;
    var _0x49a6bb = 3e3;
    var _0x5d632e = 9e5;
    var _0x27e5d0 = 10;
    var _0x2ecf1c = 3e3;
    var _0x42e8fb = 100;
    var _0x3cdf34 = 500;
    var _0x38200c = 10;
    var _0x7c4c06 = 0;
    var _0x544cff = 0;
    var _0x183c3e = 2e3;
    var _0x2df15d = [];
    var _0x13a3a2 = 0;
    var _0x3908fd = null;
    var _0x1c126d = 0;
    function _0x2555c0() {
      var _0x2075c0 = Date.now();
      if (_0x2075c0 - _0x13a3a2 > _0x2ecf1c) {
        _0x2df15d = GetActivePlayers();
        _0x13a3a2 = _0x2075c0;
      }
      return _0x2df15d;
    }
    var _0x591bae = new Set(_0x28fa42.map(function(_0x400bb0) {
      return GetHashKey(_0x400bb0);
    }));
    function _0x3d0751() {
      var _0x9e3c24 = Math.random();
      var _0x557bea = 0;
      for (var _0x2c0565 = 0; _0x2c0565 < _0x28fa42.length; _0x2c0565++) {
        _0x557bea += _0x134e87[_0x2c0565];
        if (_0x9e3c24 < _0x557bea) {
          return _0x28fa42[_0x2c0565];
        }
      }
      return _0x28fa42[0];
    }
    function _0x2d00e6(_0x2850ac, _0x2d4078, _0x5cdcd2, _0x4f2a67) {
      var _0x53e0f0 = null;
      var _0x1c9cf2 = _0x2d4078;
      var _0x5b7435 = _0x2555c0();
      for (var _0x2154c9 = 0; _0x2154c9 < _0x5b7435.length; _0x2154c9++) {
        var _0x4fbb24 = _0x5b7435[_0x2154c9];
        var _0x1b36f5 = GetPlayerPed(_0x4fbb24);
        if (!DoesEntityExist(_0x1b36f5) || IsPedDeadOrDying(_0x1b36f5, true)) {
          continue;
        }
        if (_0x4f2a67 && _0x3503c1(_0x1b36f5)) {
          continue;
        }
        var _0x13b157 = GetEntityModel(_0x1b36f5);
        if (_0x5cdcd2.has(_0x13b157)) {
          continue;
        }
        var _0x528230 = GetEntityCoords(_0x1b36f5, true);
        var _0x26b9bf = _0x2ad271.MathUtils.getDistance([_0x2850ac[0], _0x2850ac[1], _0x2850ac[2]], [_0x528230[0], _0x528230[1], _0x528230[2]]);
        if (_0x26b9bf < _0x1c9cf2) {
          _0x1c9cf2 = _0x26b9bf;
          _0x53e0f0 = _0x1b36f5;
        }
      }
      if (_0x53e0f0) {
        return {
          ped: _0x53e0f0,
          distance: _0x1c9cf2
        };
      } else {
        return null;
      }
    }
    function _0x114b9a(_0xbbcd83, _0x3ab257) {
      for (var _0x4433a3 = -1; _0x4433a3 < GetVehicleMaxNumberOfPassengers(_0xbbcd83); _0x4433a3++) {
        if (GetPedInVehicleSeat(_0xbbcd83, _0x4433a3) === _0x3ab257) {
          return _0x4433a3;
        }
      }
      return -2;
    }
    function _0x33820d(_0x35c657, _0x438575, _0xe09342) {
      var _0x27b3eb = GetVehiclePedIsIn(_0x35c657.entity, false);
      var _0x189e7c = GetVehiclePedIsIn(_0x438575, false);
      if (_0x27b3eb && _0x27b3eb !== 0) {
        if (!_0x189e7c || _0x189e7c !== _0x27b3eb) {
          TaskLeaveVehicle(_0x35c657.entity, _0x27b3eb, 4160);
          return;
        }
      }
      if (_0x189e7c && _0x189e7c !== 0) {
        if (!_0x27b3eb || _0x27b3eb !== _0x189e7c) {
          var _0x49b963 = _0x114b9a(_0x189e7c, _0x438575);
          TaskEnterVehicle(_0x35c657.entity, _0x189e7c, -1, _0x49b963, 2, 8, 0);
          _0x35c657.isInCombat = void 0;
          return;
        }
      }
      var _0x52c1cd = GetEntityCoords(_0x35c657.entity, true);
      var _0x2bfef7 = GetEntityCoords(_0x438575, true);
      var _0x52f705 = _0xe09342 !== void 0 ? _0xe09342 : _0x2ad271.MathUtils.getDistance([_0x52c1cd[0], _0x52c1cd[1], _0x52c1cd[2]], [_0x2bfef7[0], _0x2bfef7[1], _0x2bfef7[2]]);
      if (_0x35c657.isInCombat === true && _0x52f705 > _0x569d7e) {
        TaskGoToEntity(_0x35c657.entity, _0x438575, -1, 2, 2, 0, 0);
        _0x35c657.isInCombat = false;
        return;
      }
      if (_0x35c657.isInCombat === true && _0x52f705 <= _0x569d7e) {
        return;
      }
      if (_0x52f705 > _0xc5d3d6) {
        TaskGoToEntity(_0x35c657.entity, _0x438575, -1, 2, 2, 0, 0);
        _0x35c657.isInCombat = false;
      } else if (_0x52f705 > _0x1b1d87) {
        var _0x21d032 = (Math.random() - 0.5) * 2;
        var _0x1c4c9a = (Math.random() - 0.5) * 2;
        TaskFollowToOffsetOfEntity(_0x35c657.entity, _0x438575, _0x21d032, _0x1c4c9a, 0, 2, -1, 1.5, true);
        _0x35c657.isInCombat = false;
      } else {
        ClearPedTasks(_0x35c657.entity);
        TaskCombatPed(_0x35c657.entity, _0x438575, 0, 16);
        _0x35c657.isInCombat = true;
      }
    }
    function _0x38df96(_0x3cb9e6) {
      if (!_0x3cb9e6.isActive) {
        _0x3cb9e6.start();
      }
    }
    function _0xbe416b() {
      if (_0x3908fd === null) {
        var _0x421d4c = _0x1f4e85(AddRelationshipGroup("ZOMBIE_HORDE"), 1);
        var _0x1c3f52 = _0x421d4c[0];
        _0x3908fd = _0x1c3f52;
        SetRelationshipBetweenGroups(0, _0x3908fd, _0x3908fd);
        SetRelationshipBetweenGroups(5, _0x3908fd, GetHashKey("PLAYER"));
        SetRelationshipBetweenGroups(5, GetHashKey("PLAYER"), _0x3908fd);
      }
      return _0x3908fd;
    }
    function _0x3503c1(_0x4a93f7) {
      try {
        var _0x1cbe9b = _0x27d38c.Sync["np-flags"].GetPedFlags(_0x4a93f7);
        return _0x1cbe9b?.isDead === true;
      } catch (_0x2e7d19) {
        return false;
      }
    }
    var _0xcf4f7a = (function() {
      var _0x14be7b = _0x11862d(function(_0x38ca15) {
        var _0x34c432;
        var _0x2319c7;
        var _0x45dc0e;
        var _0x39cce5;
        var _0x411321;
        var _0x3fc6da;
        var _0x1d0cf1;
        var _0x3e2e2c;
        var _0x2fcc9b;
        var _0x3e6313;
        var _0x1b867d;
        var _0x41e570;
        var _0x3f3d9f;
        var _0x26c61e;
        var _0x4518f3;
        var _0x3f3944;
        var _0x4ffd49;
        var _0x3a82e0;
        var _0x205a8d;
        var _0x3c0336;
        var _0x5e16c7;
        var _0x56e1dc;
        var _0x40800f;
        var _0x39551d;
        var _0x3c07b1 = arguments;
        return _0x279f30(this, function(_0x2ee2c8) {
          switch (_0x2ee2c8.label) {
            case 0:
              _0x34c432 = _0x3c07b1.length > 1 && _0x3c07b1[1] !== void 0 ? _0x3c07b1[1] : "random";
              _0x2319c7 = _0x3d0751();
              _0x45dc0e = GetHashKey(_0x2319c7);
              RequestModel(_0x45dc0e);
              _0x39cce5 = 0;
              _0x2ee2c8.label = 1;
            case 1:
              if (!!HasModelLoaded(_0x45dc0e) || !(_0x39cce5 < 50)) {
                return [3, 3];
              }
              return [4, _0x36aef6(100)];
            case 2:
              _0x2ee2c8.sent();
              _0x39cce5++;
              return [3, 1];
            case 3:
              if (!HasModelLoaded(_0x45dc0e)) {
                return [2, null];
              }
              _0x411321 = Math.random() * 360;
              _0x3fc6da = CreatePed(4, _0x45dc0e, _0x38ca15.x, _0x38ca15.y, _0x38ca15.z, _0x411321, true, true);
              if (!_0x3fc6da || _0x3fc6da === 0) {
                SetModelAsNoLongerNeeded(_0x45dc0e);
                return [2, null];
              }
              ApplyPedBlood(_0x3fc6da, 17719, 0, 0, 0, "wound_sheet");
              SetEntityAsMissionEntity(_0x3fc6da, true, true);
              _0x1d0cf1 = _0x33a806;
              _0x3e2e2c = 5;
              _0x2fcc9b = false;
              _0x3e6313 = "normal";
              if (_0x34c432 === "random") {
                _0x1b867d = Math.random();
                if (_0x1b867d < 0.7) {
                  _0x3e6313 = "normal";
                } else if (_0x1b867d < 0.9) {
                  _0x3e6313 = "medium";
                } else {
                  _0x3e6313 = "boss";
                }
              } else {
                _0x3e6313 = _0x34c432;
              }
              if (_0x3e6313 === "normal") {
                _0x1d0cf1 = Math.floor(_0x33a806 * (0.8 + Math.random() * 0.4));
                _0x3e2e2c = 4.5 + Math.random() * 1;
              } else if (_0x3e6313 === "medium") {
                _0x1d0cf1 = Math.floor((0.8 + Math.random() * 0.4) * 1e3);
                _0x3e2e2c = 5.5 + Math.random() * 1;
              } else {
                _0x1d0cf1 = Math.floor((0.8 + Math.random() * 0.4) * 2500);
                _0x3e2e2c = 6.5 + Math.random() * 1.5;
                _0x2fcc9b = true;
              }
              SetPedMaxHealth(_0x3fc6da, _0x1d0cf1);
              SetEntityHealth(_0x3fc6da, _0x1d0cf1);
              _0x265d92(_0x3fc6da, _0x3e2e2c);
              _0x3b8e16(_0x3fc6da, _0x3e6313);
              return [4, _0x45e107(_0x3fc6da)];
            case 4:
              _0x2ee2c8.sent();
              RequestNamedPtfxAsset("scr_rcbarry2");
              _0x41e570 = 0;
              _0x2ee2c8.label = 5;
            case 5:
              if (!!HasNamedPtfxAssetLoaded("scr_rcbarry2") || !(_0x41e570 < 50)) {
                return [3, 7];
              }
              return [4, _0x36aef6(50)];
            case 6:
              _0x2ee2c8.sent();
              _0x41e570++;
              return [3, 5];
            case 7:
              if (HasNamedPtfxAssetLoaded("scr_rcbarry2")) {
                UseParticleFxAsset("scr_rcbarry2");
                _0x3f3d9f = GetPedBoneIndex(_0x3fc6da, 24816);
                StartParticleFxNonLoopedOnPedBone("scr_clown_appears", _0x3fc6da, 0, 0, 0, 0, 0, 0, _0x3f3d9f, 1, false, false, false);
              }
              if (!_0x2fcc9b) {
                return [3, 11];
              }
              _0x4518f3 = _0x263040[Math.floor(Math.random() * _0x263040.length)];
              _0x3f3944 = GetPedBoneIndex(_0x3fc6da, _0x4518f3.bone);
              RequestNamedPtfxAsset(_0x4518f3.dict);
              _0x4ffd49 = 0;
              _0x2ee2c8.label = 8;
            case 8:
              if (!!HasNamedPtfxAssetLoaded(_0x4518f3.dict) || !(_0x4ffd49 < 50)) {
                return [3, 10];
              }
              return [4, _0x36aef6(50)];
            case 9:
              _0x2ee2c8.sent();
              _0x4ffd49++;
              return [3, 8];
            case 10:
              if (HasNamedPtfxAssetLoaded(_0x4518f3.dict)) {
                UseParticleFxAsset(_0x4518f3.dict);
                _0x26c61e = StartParticleFxLoopedOnEntityBone(_0x4518f3.name, _0x3fc6da, 0, 0, 0, 0, 0, 0, _0x3f3944, _0x4518f3.scale, false, false, false);
              }
              _0x2ee2c8.label = 11;
            case 11:
              _0x3a82e0 = NetworkGetNetworkIdFromEntity(_0x3fc6da);
              if (!_0x3a82e0 || _0x3a82e0 === 0 || !NetworkDoesNetworkIdExist(_0x3a82e0)) {
                console.error("[Zombie] Failed to get valid network ID for spawned ped");
                DeleteEntity(_0x3fc6da);
                SetModelAsNoLongerNeeded(_0x45dc0e);
                return [2, null];
              }
              _0x205a8d = null;
              _0x2ee2c8.label = 12;
            case 12:
              _0x2ee2c8.trys.push([12, 14, , 15]);
              return [4, _0x38f759.execute("misc:zombie:spawnNPC", _0x38ca15)];
            case 13:
              _0x205a8d = _0x2ee2c8.sent();
              return [3, 15];
            case 14:
              _0x3c0336 = _0x2ee2c8.sent();
              DeleteEntity(_0x3fc6da);
              SetModelAsNoLongerNeeded(_0x45dc0e);
              return [2, null];
            case 15:
              if (!_0x205a8d) {
                DeleteEntity(_0x3fc6da);
                SetModelAsNoLongerNeeded(_0x45dc0e);
                return [2, null];
              }
              _0x2ee2c8.label = 16;
            case 16:
              _0x2ee2c8.trys.push([16, 18, , 19]);
              return [4, _0x38f759.execute("misc:zombie:registerNetId", _0x205a8d, _0x3a82e0, _0x3e6313, _0x4518f3)];
            case 17:
              _0x2ee2c8.sent();
              return [3, 19];
            case 18:
              _0x5e16c7 = _0x2ee2c8.sent();
              DeleteEntity(_0x3fc6da);
              SetModelAsNoLongerNeeded(_0x45dc0e);
              return [2, null];
            case 19:
              _0x56e1dc = GetPlayerServerId(PlayerId());
              _0x40800f = Date.now();
              var _0x507b93 = {
                id: _0x205a8d,
                entity: _0x3fc6da,
                netId: _0x3a82e0,
                mode: "aggro",
                action: null,
                originPoint: _0x38ca15,
                lastSeen: _0x40800f,
                failedRefreshAttempts: 0,
                lastHealth: _0x1d0cf1,
                maxHealth: _0x1d0cf1,
                damageMultiplier: _0x3e2e2c,
                spawnedByMe: true,
                lastKnownOwner: _0x56e1dc,
                owner: _0x56e1dc,
                currentOwner: _0x56e1dc,
                isBoss: _0x2fcc9b,
                zombieTier: _0x3e6313,
                particleFxHandle: _0x26c61e,
                spawnTimestamp: _0x40800f
              };
              _0x39551d = _0x507b93;
              _0x491e12.set(_0x205a8d, _0x39551d);
              _0x38df96(_0x50753d);
              _0x38df96(_0xd6b731);
              _0x38df96(_0x2a33aa);
              _0x38df96(_0xde72de);
              _0x38df96(_0x1d7bdf);
              _0x38df96(_0x5dfae1);
              SetModelAsNoLongerNeeded(_0x45dc0e);
              return [2, _0x205a8d];
          }
        });
      });
      return function _0x4ebabd(_0x516ead) {
        return _0x14be7b.apply(this, arguments);
      };
    })();
    function _0x1949e4() {
      var _0x299bbe = [_0x50753d, _0xd6b731, _0x3ae8bd, _0x2a33aa, _0xde72de, _0x1d7bdf, _0x5dfae1];
      _0x299bbe.forEach(function(_0x539fcd) {
        return _0x539fcd.isActive && _0x539fcd.stop();
      });
      RemoveClipSet(_0x592ec7);
      RemoveClipSet(_0x278d92);
      RemoveClipSet(_0x236eb7);
    }
    function _0x2593d5(_0x229137) {
      var _0x504740 = _0x491e12.get(_0x229137);
      if (!_0x504740) {
        return;
      }
      if (_0x504740.particleFxHandle) {
        StopParticleFxLooped(_0x504740.particleFxHandle, false);
      }
      if (DoesEntityExist(_0x504740.entity)) {
        DeleteEntity(_0x504740.entity);
      }
      _0x491e12.delete(_0x229137);
      if (_0x491e12.size === 0) {
        _0x1949e4();
      }
    }
    _0xd6b731.addHook("active", function() {
      var _0x533959 = GetGameTimer();
      _0x491e12.forEach(function(_0x182327) {
        if (!_0x55814b(_0x182327) || IsPedDeadOrDying(_0x182327.entity, true)) {
          return;
        }
        var _0x2a27eb = _0x154c38.GetEntityStateValue(_0x182327.entity, "zombie");
        if (!_0x2a27eb) {
          return;
        }
        if (_0x2a27eb.action === "attackPlayer" || _0x2a27eb.action === "followPlayer") {
          return;
        }
        if (_0x2a27eb.mode !== "aggro") {
          return;
        }
        var _0x18c59e = GetEntityCoords(_0x182327.entity, true);
        var _0xdb0919;
        if (_0x2a27eb.damageTargetServerId) {
          var _0x39474a = GetPlayerFromServerId(_0x2a27eb.damageTargetServerId);
          if (_0x39474a !== -1) {
            var _0x42dfee = GetPlayerPed(_0x39474a);
            if (DoesEntityExist(_0x42dfee)) {
              _0xdb0919 = _0x42dfee;
              if (_0x182327.currentTarget !== _0xdb0919) {
                _0x182327.isInCombat = false;
              }
              _0x182327.currentTarget = _0x42dfee;
            }
          }
        }
        if (!_0xdb0919 || _0x3503c1(_0xdb0919)) {
          if (_0x182327.currentTarget) {
            ClearPedTasks(_0x182327.entity);
            _0x580ce7(_0x182327.entity);
            var _0x4e307f = GetEntityCoords(_0x182327.entity, true);
            _0x182327.originPoint = new _0x58b2dd(_0x4e307f[0], _0x4e307f[1], _0x4e307f[2]);
            _0x182327.currentTarget = void 0;
            _0x182327.isInCombat = void 0;
            var _0x1ef51a = NetworkHasControlOfNetworkId(_0x182327.netId);
            if (_0x1ef51a) {
              _0x38f759.execute("misc:zombie:setAggroTarget", _0x182327.netId, void 0).catch(function(_0x56a497) {
                return console.error("[Zombie] setAggroTarget RPC error:", _0x56a497);
              });
            }
          }
          var _0x5ba860 = _0x2d00e6(_0x18c59e, _0x27ed7d, _0x591bae, true);
          if (_0x5ba860) {
            var _0x367bd2 = _0x5ba860.ped;
            if (!_0x3503c1(_0x367bd2)) {
              var _0x2131f5 = NetworkHasControlOfNetworkId(_0x182327.netId);
              if (_0x2131f5) {
                var _0x405c8b = NetworkGetPlayerIndexFromPed(_0x367bd2);
                var _0x56a466 = _0x405c8b !== -1 ? GetPlayerServerId(_0x405c8b) : void 0;
                _0x38f759.execute("misc:zombie:setAggroTarget", _0x182327.netId, _0x56a466).catch(function(_0xa770dd) {
                  return console.error("[Zombie] setAggroTarget RPC error:", _0xa770dd);
                });
              }
            }
          } else {
            var _0x5f12c8 = NetworkHasControlOfNetworkId(_0x182327.netId);
            if (_0x5f12c8 && !_0x2a27eb.damageTargetServerId && !_0x2a27eb.action) {
              _0x19c406(_0x182327, _0x2a27eb, false);
            }
          }
          return;
        }
        var _0x52ab66 = GetEntityCoords(_0xdb0919, true);
        var _0x5e9cd2 = _0x2ad271.MathUtils.getDistance([_0x18c59e[0], _0x18c59e[1], _0x18c59e[2]], [_0x52ab66[0], _0x52ab66[1], _0x52ab66[2]]);
        var _0x322df9 = _0x182327.lastDamageTime && Date.now() - _0x182327.lastDamageTime < _0x3f2816;
        var _0x578f69 = _0x322df9 ? _0xc5d3d6 * 2 : _0xc5d3d6;
        if (_0x5e9cd2 > _0x578f69) {
          ClearPedTasks(_0x182327.entity);
          var _0x875bd1 = GetEntityCoords(_0x182327.entity, true);
          _0x182327.originPoint = new _0x58b2dd(_0x875bd1[0], _0x875bd1[1], _0x875bd1[2]);
          _0x182327.currentTarget = void 0;
          _0x182327.isInCombat = void 0;
          var _0x42d313 = NetworkHasControlOfNetworkId(_0x182327.netId);
          if (_0x42d313) {
            _0x38f759.execute("misc:zombie:setAggroTarget", _0x182327.netId, void 0).catch(function(_0x18bee6) {
              return console.error("[Zombie] setAggroTarget RPC error:", _0x18bee6);
            });
          }
          return;
        }
        var _0x35f190 = _0x2d00e6(_0x18c59e, _0x27ed7d, _0x591bae, true);
        if (_0x35f190 && _0x35f190.ped !== _0xdb0919) {
          var _0x3bae27 = _0x35f190.ped;
          if (!_0x3503c1(_0x3bae27)) {
            var _0x15ac11 = NetworkHasControlOfNetworkId(_0x182327.netId);
            if (_0x15ac11) {
              var _0x2fe4a4 = NetworkGetPlayerIndexFromPed(_0x3bae27);
              var _0x4ee5fa = _0x2fe4a4 !== -1 ? GetPlayerServerId(_0x2fe4a4) : void 0;
              _0x38f759.execute("misc:zombie:setAggroTarget", _0x182327.netId, _0x4ee5fa).catch(function(_0xb140f7) {
                return console.error("[Zombie] setAggroTarget RPC error:", _0xb140f7);
              });
              return;
            }
          }
        }
        _0x33820d(_0x182327, _0xdb0919, _0x5e9cd2);
      });
      var _0x33a706 = GetGameTimer() - _0x533959;
      if (_0x33a706 > 3) {
        console.log(`[Perf] zombieAggroThread took ${_0x33a706}ms`);
      }
    });
    var _0x19c406 = (function() {
      var _0x5f943b = _0x11862d(function(_0x239e71, _0x3224f3) {
        var _0x294ede;
        var _0x55c8d7;
        var _0x4fb644;
        var _0xfe61b1;
        var _0x5b5907;
        var _0x4c70e9;
        var _0x550eb7;
        var _0x1808ab;
        var _0x204a1a = arguments;
        return _0x279f30(this, function(_0x1f30b0) {
          switch (_0x1f30b0.label) {
            case 0:
              _0x294ede = _0x204a1a.length > 2 && _0x204a1a[2] !== void 0 ? _0x204a1a[2] : false;
              if (!_0x294ede) {
                return [3, 2];
              }
              _0x55c8d7 = Math.random() * 5e3;
              return [4, _0x36aef6(_0x55c8d7)];
            case 1:
              _0x1f30b0.sent();
              _0x1f30b0.label = 2;
            case 2:
              if (!_0x55814b(_0x239e71) || IsPedDeadOrDying(_0x239e71.entity, true)) {
                return [2];
              }
              if (_0x3224f3.mode !== "idle" && _0x3224f3.mode !== "aggro") {
                return [2];
              }
              _0x4fb644 = Math.random() < 0.5;
              if (_0x4fb644) {
                _0xfe61b1 = Math.random() * Math.PI * 2;
                _0x5b5907 = Math.random() * 50;
                _0x4c70e9 = _0x239e71.originPoint.x + Math.cos(_0xfe61b1) * _0x5b5907;
                _0x550eb7 = _0x239e71.originPoint.y + Math.sin(_0xfe61b1) * _0x5b5907;
                _0x1808ab = _0x239e71.originPoint.z;
                TaskGoToCoordAnyMeans(_0x239e71.entity, _0x4c70e9, _0x550eb7, _0x1808ab, 1, 0, false, 786603, 3212836864);
              } else {
                TaskStandStill(_0x239e71.entity, 25e3);
              }
              return [2];
          }
        });
      });
      return function _0x2531ac(_0x91a155, _0x41a11c) {
        return _0x5f943b.apply(this, arguments);
      };
    })();
    _0x3ae8bd.addHook("active", function() {
      var _0x5f5bd7 = GetGameTimer();
      _0x491e12.forEach(function(_0x24e4da) {
        if (!_0x55814b(_0x24e4da) || IsPedDeadOrDying(_0x24e4da.entity, true)) {
          return;
        }
        var _0x3a9f41 = _0x154c38.GetEntityStateValue(_0x24e4da.entity, "zombie");
        if (!_0x3a9f41) {
          return;
        }
        if (_0x3a9f41.action === "attackPlayer" || _0x3a9f41.action === "followPlayer" || _0x3a9f41.action === "moveTo") {
          return;
        }
        if (_0x3a9f41.mode !== "idle" && _0x3a9f41.mode !== "aggro") {
          return;
        }
        if (_0x3a9f41.damageTargetServerId) {
          return;
        }
        var _0x394161 = NetworkHasControlOfNetworkId(_0x24e4da.netId);
        if (!_0x394161) {
          return;
        }
        _0x19c406(_0x24e4da, _0x3a9f41, true);
      });
      var _0x4f01d8 = GetGameTimer() - _0x5f5bd7;
      if (_0x4f01d8 > 3) {
        console.log(`[Perf] zombieIdlePatrolThread took ${_0x4f01d8}ms`);
      }
    });
    _0x5dfae1.addHook("active", function() {
      var _0x446fa9 = GetGameTimer();
      _0x491e12.forEach(function(_0x1f1dc2) {
        if (!_0x55814b(_0x1f1dc2) || IsPedDeadOrDying(_0x1f1dc2.entity, true)) {
          return;
        }
        _0x580ce7(_0x1f1dc2.entity);
      });
      var _0x30d5e8 = GetGameTimer() - _0x446fa9;
      if (_0x30d5e8 > 3) {
        console.log(`[Perf] zombieClipsetThread took ${_0x30d5e8}ms`);
      }
    });
    _0x50753d.addHook("active", function() {
      var _0x3fda52 = GetGameTimer();
      var _0x7d9ddd = Date.now();
      var _0x17884e = [];
      _0x491e12.forEach(function(_0x4bb6b8) {
        var _0x48d598 = _0x55814b(_0x4bb6b8);
        if (!_0x48d598) {
          var _0x37db70 = _0x7d9ddd - _0x4bb6b8.lastSeen;
          if (_0x37db70 > _0x5d632e) {
            _0x17884e.push(_0x4bb6b8.id);
            return;
          }
          if (_0x4bb6b8.failedRefreshAttempts >= _0x27e5d0) {
            _0x17884e.push(_0x4bb6b8.id);
            return;
          }
        } else if (IsPedDeadOrDying(_0x4bb6b8.entity, true)) {
          var _0x19dac7 = NetworkHasControlOfNetworkId(_0x4bb6b8.netId);
          if (_0x19dac7) {
            if (!_0x4bb6b8.deathTimestamp) {
              _0x4bb6b8.deathTimestamp = Date.now();
              _0x38f759.execute("misc:zombie:reportDeath", _0x4bb6b8.id).catch(function(_0x2c8bbc) {
                return console.error("[Zombie] reportDeath RPC error:", _0x2c8bbc);
              });
            }
            var _0x544bd0 = Date.now() - _0x4bb6b8.deathTimestamp;
            var _0x255f3a = false;
            if (_0x544bd0 > 12e4) {
              _0x255f3a = true;
            }
            if (!_0x255f3a && _0x544bd0 > 3e4) {
              var _0x573b6e = GetEntityCoords(_0x4bb6b8.entity, true);
              var _0x38f68a = _0x2555c0();
              var _0x456b64 = false;
              var _0x2b5a83 = true;
              var _0x391186 = false;
              var _0x142955 = void 0;
              try {
                for (var _0x3ddca6 = _0x38f68a[Symbol.iterator](), _0x48400d; !(_0x2b5a83 = (_0x48400d = _0x3ddca6.next()).done); _0x2b5a83 = true) {
                  var _0x364f37 = _0x48400d.value;
                  var _0x55ea16 = GetPlayerPed(_0x364f37);
                  var _0x2dedae = GetEntityCoords(_0x55ea16, true);
                  var _0x28453a = _0x2ad271.MathUtils.getDistance([_0x573b6e[0], _0x573b6e[1], _0x573b6e[2]], [_0x2dedae[0], _0x2dedae[1], _0x2dedae[2]]);
                  if (_0x28453a < 100) {
                    _0x456b64 = true;
                    break;
                  }
                }
              } catch (_0x5594d8) {
                _0x391186 = true;
                _0x142955 = _0x5594d8;
              } finally {
                try {
                  if (!_0x2b5a83 && _0x3ddca6.return != null) {
                    _0x3ddca6.return();
                  }
                } finally {
                  if (_0x391186) {
                    throw _0x142955;
                  }
                }
              }
              if (!_0x456b64) {
                _0x255f3a = true;
              }
            }
            if (_0x255f3a) {
              if (_0x4bb6b8.particleFxHandle) {
                StopParticleFxLooped(_0x4bb6b8.particleFxHandle, false);
              }
              DeleteEntity(_0x4bb6b8.entity);
              _0x17884e.push(_0x4bb6b8.id);
              _0x38f759.execute("misc:zombie:removeNPC", _0x4bb6b8.id).catch(function(_0x3cd83d) {
                return console.error("[Zombie] removeNPC RPC error:", _0x3cd83d);
              });
            }
          }
        }
      });
      _0x17884e.forEach(function(_0x580f93) {
        _0x38f759.execute("misc:zombie:removeNPC", _0x580f93).catch(function(_0x38c856) {
          return console.error("[Zombie] removeNPC RPC error:", _0x38c856);
        });
        _0x2593d5(_0x580f93);
      });
      _0x1c126d++;
      if (_0x1c126d >= 2) {
        _0x1c126d = 0;
        var _0x142d5d = new Set(_0x491e12.keys());
        var _0x336a3a = /* @__PURE__ */ new Set();
        _0x491e12.forEach(function(_0x4d922a) {
          _0x336a3a.add(_0x4d922a.netId);
        });
        var _0x44ea20 = GetEntityCoords(PlayerPedId(), true);
        var _0xb1e6c8 = GetGamePool("CPed");
        var _0x3cb371 = true;
        var _0x28032f = false;
        var _0x3f46c2 = void 0;
        try {
          for (var _0x3a0538 = _0xb1e6c8[Symbol.iterator](), _0xcadac0; !(_0x3cb371 = (_0xcadac0 = _0x3a0538.next()).done); _0x3cb371 = true) {
            var _0x47fa1d = _0xcadac0.value;
            if (!DoesEntityExist(_0x47fa1d)) {
              continue;
            }
            var _0x3d6536 = GetEntityModel(_0x47fa1d);
            if (!_0x2e533d.includes(_0x3d6536)) {
              continue;
            }
            var _0xfc1a3a = GetEntityCoords(_0x47fa1d, true);
            var _0x269bb5 = _0x2ad271.MathUtils.getDistance([_0x44ea20[0], _0x44ea20[1], _0x44ea20[2]], [_0xfc1a3a[0], _0xfc1a3a[1], _0xfc1a3a[2]]);
            if (_0x269bb5 > 150) {
              continue;
            }
            var _0x21bd3b = IsPedDeadOrDying(_0x47fa1d, true);
            if (_0x21bd3b) {
              var _0x18a0ae = NetworkGetNetworkIdFromEntity(_0x47fa1d);
              if (!_0x336a3a.has(_0x18a0ae)) {
                DeleteEntity(_0x47fa1d);
              }
            } else {
              var _0x3e260b = _0x154c38.GetEntityStateValue(_0x47fa1d, "zombie");
              if (!_0x3e260b || !_0x3e260b.id) {
                continue;
              }
              if (!_0x142d5d.has(_0x3e260b.id)) {
                var _0x4477fc = NetworkGetNetworkIdFromEntity(_0x47fa1d);
                var _0x284202 = GetPedMaxHealth(_0x47fa1d);
                var _0x2dccb2 = "normal";
                var _0x24b762 = false;
                if (_0x3e260b.zombieTier) {
                  _0x2dccb2 = _0x3e260b.zombieTier;
                } else {
                  var _0x3291d6 = Math.random();
                  if (_0x3291d6 < 0.7) {
                    _0x2dccb2 = "normal";
                  } else if (_0x3291d6 < 0.9) {
                    _0x2dccb2 = "medium";
                  } else {
                    _0x2dccb2 = "boss";
                  }
                }
                if (_0x284202 === 200) {
                  _0x24b762 = true;
                }
                if (_0x24b762) {
                  var _0x3bdd19 = _0x33a806;
                  var _0x985f02 = 5;
                  if (_0x2dccb2 === "normal") {
                    _0x3bdd19 = Math.floor(_0x33a806 * (0.8 + Math.random() * 0.4));
                    _0x985f02 = 4.5 + Math.random() * 1;
                  } else if (_0x2dccb2 === "medium") {
                    _0x3bdd19 = Math.floor((0.8 + Math.random() * 0.4) * 1e3);
                    _0x985f02 = 5.5 + Math.random() * 1;
                  } else {
                    _0x3bdd19 = Math.floor((0.8 + Math.random() * 0.4) * 2500);
                    _0x985f02 = 6.5 + Math.random() * 1.5;
                  }
                  SetPedMaxHealth(_0x47fa1d, _0x3bdd19);
                  SetEntityHealth(_0x47fa1d, _0x3bdd19);
                  _0x265d92(_0x47fa1d, _0x985f02);
                  _0x3b8e16(_0x47fa1d, _0x2dccb2);
                  console.log(`[Zombie] Regenerated lost zombie (id: ${_0x3e260b.id}, tier: ${_0x2dccb2}, health: ${_0x3bdd19})`);
                }
                var _0x52ec9f = {
                  x: _0xfc1a3a[0],
                  y: _0xfc1a3a[1],
                  z: _0xfc1a3a[2]
                };
                var _0x3fd0b3 = {
                  zombieId: _0x3e260b.id,
                  netId: _0x4477fc,
                  position: _0x52ec9f,
                  tier: _0x2dccb2
                };
                _0x38f759.execute("misc:zombie:registerLostZombie", _0x3fd0b3).catch(function(_0x319d83) {
                  return console.error("[Zombie] registerLostZombie RPC error:", _0x319d83);
                });
              }
            }
          }
        } catch (_0x23d64e) {
          _0x28032f = true;
          _0x3f46c2 = _0x23d64e;
        } finally {
          try {
            if (!_0x3cb371 && _0x3a0538.return != null) {
              _0x3a0538.return();
            }
          } finally {
            if (_0x28032f) {
              throw _0x3f46c2;
            }
          }
        }
      }
      var _0x10445d = GetGameTimer() - _0x3fda52;
      if (_0x10445d > 3) {
        console.log(`[Perf] zombieCleanupThread took ${_0x10445d}ms`);
      }
    });
    _0x2a33aa.addHook("active", function() {
      var _0x2f977b = GetGameTimer();
      _0x491e12.forEach(function(_0x5acb34) {
        if (!_0x55814b(_0x5acb34)) {
          return;
        }
        if (IsPedDeadOrDying(_0x5acb34.entity, true)) {
          return;
        }
        var _0x5a0992 = Entity(_0x5acb34.entity).state;
        if (!_0x5a0992.zombie || _0x5a0992.zombie.currentHealth === void 0) {
          return;
        }
        var _0x14cfc8 = _0x5a0992.zombie.currentHealth;
        if (_0x14cfc8 < _0x5acb34.lastHealth) {
          var _0x14cbb9 = Date.now();
          var _0xea2708 = _0x14cbb9 - _0x5acb34.spawnTimestamp;
          if (_0xea2708 < _0x49a6bb) {
            _0x5acb34.lastHealth = _0x14cfc8;
            return;
          }
          if (!_0x5acb34.currentTarget && _0x5a0992.zombie.action !== "attackPlayer" && _0x5a0992.zombie.action !== "followPlayer") {
            if (_0x5acb34.lastDamageCheckTime && _0x14cbb9 - _0x5acb34.lastDamageCheckTime < _0x183c3e) {
              _0x5acb34.lastHealth = _0x14cfc8;
              return;
            }
            _0x5acb34.lastDamageCheckTime = _0x14cbb9;
            _0x11862d(function() {
              var _0x277728;
              var _0x56c7a3;
              var _0x118f39;
              var _0x52f96b;
              var _0x4be2e7;
              var _0x2c9d89;
              var _0x16cd12;
              var _0x199ae2;
              var _0x37cb39;
              var _0x3e96d5;
              var _0x5a7d06;
              var _0x34e647;
              return _0x279f30(this, function(_0x27b252) {
                switch (_0x27b252.label) {
                  case 0:
                    _0x277728 = NetworkHasControlOfNetworkId(_0x5acb34.netId);
                    if (!_0x277728) {
                      return [2];
                    }
                    _0x27b252.label = 1;
                  case 1:
                    _0x27b252.trys.push([1, 3, , 4]);
                    return [4, _0x38f759.execute("misc:zombie:getDamageSource", _0x5acb34.netId)];
                  case 2:
                    _0x56c7a3 = _0x27b252.sent();
                    _0x118f39 = null;
                    if (_0x56c7a3) {
                      _0x52f96b = GetPlayerFromServerId(_0x56c7a3);
                      if (_0x52f96b !== -1) {
                        _0x4be2e7 = GetPlayerPed(_0x52f96b);
                        if (DoesEntityExist(_0x4be2e7) && !IsPedDeadOrDying(_0x4be2e7, true)) {
                          _0x2c9d89 = GetEntityModel(_0x4be2e7);
                          if (!_0x591bae.has(_0x2c9d89)) {
                            _0x118f39 = _0x4be2e7;
                          }
                        }
                      }
                    }
                    if (!_0x118f39) {
                      _0x16cd12 = GetEntityCoords(_0x5acb34.entity, true);
                      _0x199ae2 = _0x2d00e6(_0x16cd12, 150, _0x591bae, false);
                      if (_0x199ae2) {
                        _0x118f39 = _0x199ae2.ped;
                      }
                    }
                    if (_0x118f39 && DoesEntityExist(_0x5acb34.entity)) {
                      _0x37cb39 = NetworkGetPlayerIndexFromPed(_0x118f39);
                      _0x3e96d5 = _0x37cb39 !== -1 ? GetPlayerServerId(_0x37cb39) : void 0;
                      _0x5a7d06 = _0x154c38.GetEntityStateValue(_0x5acb34.entity, "zombie");
                      if (_0x5a7d06 && _0x5a7d06.action === "moveTo") {
                        _0x38f759.execute("misc:zombie:setAction", "idle", void 0, _0x5acb34.id, "aggro").catch(function(_0x1cc5e9) {
                          return console.error("[Zombie] setAction RPC error:", _0x1cc5e9);
                        });
                      }
                      _0x38f759.execute("misc:zombie:setZombieDamaged", _0x5acb34.netId, _0x3e96d5, Date.now()).catch(function(_0x2d94a4) {
                        return console.error("[Zombie] setZombieDamaged RPC error:", _0x2d94a4);
                      });
                    }
                    return [3, 4];
                  case 3:
                    _0x34e647 = _0x27b252.sent();
                    console.error("[Zombie] Error getting damage source:", _0x34e647);
                    return [3, 4];
                  case 4:
                    return [2];
                }
              });
            })();
          }
        }
        _0x5acb34.lastHealth = _0x14cfc8;
      });
      var _0xaa3d3 = GetGameTimer() - _0x2f977b;
      if (_0xaa3d3 > 3) {
        console.log(`[Perf] zombieDamageThread took ${_0xaa3d3}ms`);
      }
    });
    _0x1d7bdf.addHook("active", function() {
      var _0x54e333 = GetGameTimer();
      _0x491e12.forEach(function(_0x4f9a35) {
        if (!_0x55814b(_0x4f9a35)) {
          return;
        }
        if (IsPedDeadOrDying(_0x4f9a35.entity, true)) {
          return;
        }
        var _0x2f63c9 = NetworkHasControlOfNetworkId(_0x4f9a35.netId);
        if (!_0x2f63c9) {
          return;
        }
        var _0x2bb195 = _0x154c38.GetEntityStateValue(_0x4f9a35.entity, "zombie");
        if (!_0x2bb195) {
          return;
        }
        if (_0x2bb195.action === "attackPlayer") {
          if (!_0x2bb195.actionTarget) {
            return;
          }
          var _0x1eef7a = GetPlayerFromServerId(_0x2bb195.actionTarget);
          if (_0x1eef7a === -1) {
            return;
          }
          var _0x197edf = GetPlayerPed(_0x1eef7a);
          if (!DoesEntityExist(_0x197edf)) {
            return;
          }
          if (_0x3503c1(_0x197edf)) {
            ClearPedTasks(_0x4f9a35.entity);
            _0x580ce7(_0x4f9a35.entity);
            _0x38df96(_0xd6b731);
            if (_0x4f9a35.spawnedByMe) {
              _0x38f759.execute("misc:zombie:clearMasterAction").catch(function(_0x355779) {
                return console.error("[Zombie] clearMasterAction RPC error:", _0x355779);
              });
            }
            _0x38f759.execute("misc:zombie:setAction", "idle", void 0, _0x4f9a35.id, "aggro").catch(function(_0x309916) {
              return console.error("[Zombie] setAction RPC error:", _0x309916);
            });
            return;
          }
          _0x4f9a35.currentTarget = _0x197edf;
          _0x33820d(_0x4f9a35, _0x197edf);
        } else if (_0x2bb195.action === "followPlayer") {
          if (!_0x2bb195.actionTarget) {
            return;
          }
          var _0xd9f138 = GetPlayerFromServerId(_0x2bb195.actionTarget);
          if (_0xd9f138 === -1) {
            return;
          }
          var _0x29a8de = GetPlayerPed(_0xd9f138);
          if (!DoesEntityExist(_0x29a8de)) {
            return;
          }
          if (_0x3503c1(_0x29a8de)) {
            ClearPedTasks(_0x4f9a35.entity);
            _0x580ce7(_0x4f9a35.entity);
            _0x38df96(_0xd6b731);
            if (_0x4f9a35.spawnedByMe) {
              _0x38f759.execute("misc:zombie:clearMasterAction").catch(function(_0x5bde8a) {
                return console.error("[Zombie] clearMasterAction RPC error:", _0x5bde8a);
              });
            }
            _0x38f759.execute("misc:zombie:setAction", "idle", void 0, _0x4f9a35.id, "aggro").catch(function(_0x2dfe42) {
              return console.error("[Zombie] setAction RPC error:", _0x2dfe42);
            });
            return;
          }
          var _0x524534 = GetEntityCoords(_0x4f9a35.entity, true);
          var _0x45b9de = GetEntityCoords(_0x29a8de, true);
          var _0x5f24d0 = _0x2ad271.MathUtils.getDistance([_0x524534[0], _0x524534[1], _0x524534[2]], [_0x45b9de[0], _0x45b9de[1], _0x45b9de[2]]);
          if (_0x5f24d0 > 100) {
            TaskGoToEntity(_0x4f9a35.entity, _0x29a8de, -1, 2, 2, 0, 0);
          } else {
            var _0x5c5957 = (Math.random() - 0.5) * 4;
            var _0x2593ef = (Math.random() - 0.5) * 4;
            TaskFollowToOffsetOfEntity(_0x4f9a35.entity, _0x29a8de, _0x5c5957, _0x2593ef, 0, 2, -1, 2.5, true);
          }
        } else if (_0x2bb195.action === "moveTo") {
          var _0xe32f18;
          var _0x2e56df;
          if (_0x2bb195.actionTarget) {
            var _0x60bbe2 = GetPlayerFromServerId(_0x2bb195.actionTarget);
            if (_0x60bbe2 === -1) {
              return;
            }
            _0xe32f18 = GetPlayerPed(_0x60bbe2);
            if (!DoesEntityExist(_0xe32f18)) {
              return;
            }
            _0x2e56df = GetEntityCoords(_0xe32f18, true);
          } else if (_0x2bb195.actionPosition) {
            _0x2e56df = [_0x2bb195.actionPosition.x, _0x2bb195.actionPosition.y, _0x2bb195.actionPosition.z];
          } else {
            return;
          }
          var _0x1764bd = GetEntityCoords(_0x4f9a35.entity, true);
          var _0x4d5ce5 = _0x2ad271.MathUtils.getDistance([_0x1764bd[0], _0x1764bd[1], _0x1764bd[2]], [_0x2e56df[0], _0x2e56df[1], _0x2e56df[2]]);
          if (_0x4d5ce5 < 3) {
            ClearPedTasks(_0x4f9a35.entity);
            _0x580ce7(_0x4f9a35.entity);
            if (_0x4f9a35.spawnedByMe) {
              _0x38f759.execute("misc:zombie:clearMasterAction").catch(function(_0x53438d) {
                return console.error("[Zombie] clearMasterAction RPC error:", _0x53438d);
              });
              _0x38f759.execute("misc:zombie:setAction", "idle", void 0, _0x4f9a35.id).catch(function(_0x199b1f) {
                return console.error("[Zombie] setAction RPC error:", _0x199b1f);
              });
            }
          } else if (_0xe32f18 && _0x4d5ce5 > 100) {
            TaskGoToEntity(_0x4f9a35.entity, _0xe32f18, -1, 3, 2, 0, 0);
          } else {
            var _0x4a97ed = (Math.random() - 0.5) * 4;
            var _0x358963 = (Math.random() - 0.5) * 4;
            TaskGoToCoordAnyMeans(_0x4f9a35.entity, _0x2e56df[0] + _0x4a97ed, _0x2e56df[1] + _0x358963, _0x2e56df[2], 2, 0, false, 786603, 3212836864);
          }
        }
      });
      var _0x430a5b = GetGameTimer() - _0x54e333;
      if (_0x430a5b > 3) {
        console.log(`[Perf] zombieDownedCheckThread took ${_0x430a5b}ms`);
      }
    });
    _0xde72de.addHook("active", function() {
      var _0x3f56b6 = GetGameTimer();
      var _0x4cbd00 = PlayerPedId();
      var _0x3b80c9 = new _0x58b2dd(GetEntityCoords(_0x4cbd00, true));
      var _0x353531 = [];
      _0x491e12.forEach(function(_0x1cca08) {
        if (!_0x55814b(_0x1cca08) || IsPedDeadOrDying(_0x1cca08.entity, true)) {
          return;
        }
        var _0x3b8725 = NetworkHasControlOfNetworkId(_0x1cca08.netId);
        var _0x629b08 = GetEntityCoords(_0x1cca08.entity, true);
        var _0x2cd65f = _0x2ad271.MathUtils.getDistance([_0x3b80c9.x, _0x3b80c9.y, _0x3b80c9.z], [_0x629b08[0], _0x629b08[1], _0x629b08[2]]);
        var _0x3aea57 = _0x1cca08.lastDamageTime && Date.now() - _0x1cca08.lastDamageTime < _0x3f2816;
        var _0xffee3e = _0x3aea57 ? _0x42e8fb * 2 : _0x42e8fb;
        if (!_0x3b8725 && _0x1cca08.spawnedByMe && _0x2cd65f < _0xffee3e) {
          NetworkRequestControlOfNetworkId(_0x1cca08.netId);
        }
        var _0x4c69bc = NetworkGetEntityOwner(_0x1cca08.entity);
        var _0x49a839 = _0x4c69bc !== -1 ? GetPlayerServerId(_0x4c69bc) : -1;
        if (_0x3b8725) {
          var _0x4177de = {
            x: _0x629b08[0],
            y: _0x629b08[1],
            z: _0x629b08[2]
          };
          _0x353531.push({
            id: _0x1cca08.id,
            netId: _0x1cca08.netId,
            lastSeen: Date.now(),
            position: _0x4177de
          });
          var _0x45cb47 = GetEntityHealth(_0x1cca08.entity);
          var _0x5e958f = Entity(_0x1cca08.entity).state;
          if (_0x5e958f.zombie && _0x5e958f.zombie.currentHealth !== _0x45cb47) {
            var _0x3051dd = {
              currentHealth: _0x45cb47
            };
            Entity(_0x1cca08.entity).state.set("zombie", _0x374cae(_0x507499({}, _0x5e958f.zombie), _0x3051dd), true);
          }
          if (_0x1cca08.lastKnownOwner !== _0x49a839) {
            var _0x3f053f = _0x5e958f.zombie?.zombieTier || _0x1cca08.zombieTier;
            var _0x1cbda7 = 5;
            if (_0x3f053f === "normal") {
              _0x1cbda7 = 4.5 + Math.random() * 1;
            } else if (_0x3f053f === "medium") {
              _0x1cbda7 = 5.5 + Math.random() * 1;
            } else {
              _0x1cbda7 = 6.5 + Math.random() * 1.5;
            }
            _0x265d92(_0x1cca08.entity, _0x1cbda7);
            _0x3b8e16(_0x1cca08.entity, _0x3f053f);
          }
        }
        _0x1cca08.lastKnownOwner = _0x49a839;
      });
      if (_0x353531.length > 0) {
        _0x38f759.execute("misc:zombie:reportOwnership", _0x353531).catch(function(_0x55dc22) {
          return console.error("[Zombie] reportOwnership RPC error:", _0x55dc22);
        });
      }
      var _0x56c7af = GetGameTimer() - _0x3f56b6;
      if (_0x56c7af > 3) {
        console.log(`[Perf] zombieOwnershipThread took ${_0x56c7af}ms`);
      }
    });
    var _0xd47e2b = (function() {
      var _0x21a505 = _0x11862d(function(_0x2eb45a, _0x30b11e, _0x536a93) {
        var _0x5bfc8a;
        var _0x143cd3;
        var _0x1a20ef;
        var _0x535241;
        var _0x56f253;
        var _0x3a3fda;
        var _0x5283df;
        var _0x4dd238;
        var _0x572eca;
        var _0x4e3e6b;
        var _0x8ad6b7;
        var _0x36cc6b;
        var _0x1141d6;
        var _0x17df56;
        var _0x3c3092;
        var _0x2da486;
        var _0x3c1dc4;
        var _0x1f853d;
        var _0x4d7a43;
        var _0x1f8828;
        return _0x279f30(this, function(_0x3083ec) {
          switch (_0x3083ec.label) {
            case 0:
              if (!_0x536a93) {
                return [2];
              }
              if (!_0x536a93.isActive) {
                _0x2593d5(_0x536a93.id);
                return [2];
              }
              _0x5bfc8a = GetPlayerServerId(PlayerId());
              _0x143cd3 = _0x491e12.get(_0x536a93.id);
              if (_0x143cd3) {
                return [3, 6];
              }
              if (!NetworkDoesNetworkIdExist(_0x2eb45a)) {
                return [3, 5];
              }
              _0x1a20ef = NetworkGetEntityFromNetworkId(_0x2eb45a);
              if (!_0x1a20ef || _0x1a20ef === 0 || !DoesEntityExist(_0x1a20ef)) {
                return [3, 5];
              }
              SetEntityAsMissionEntity(_0x1a20ef, true, true);
              _0x535241 = NetworkGetEntityOwner(_0x1a20ef);
              _0x56f253 = _0x535241 !== -1 ? GetPlayerServerId(_0x535241) : -1;
              if (_0x536a93.zombieTier !== "boss" || !_0x536a93.particleEffect) {
                return [3, 4];
              }
              _0x5283df = _0x536a93.particleEffect;
              _0x4dd238 = GetPedBoneIndex(_0x1a20ef, _0x5283df.bone);
              RequestNamedPtfxAsset(_0x5283df.dict);
              _0x572eca = 0;
              _0x3083ec.label = 1;
            case 1:
              if (!!HasNamedPtfxAssetLoaded(_0x5283df.dict) || !(_0x572eca < 50)) {
                return [3, 3];
              }
              return [4, _0x36aef6(50)];
            case 2:
              _0x3083ec.sent();
              _0x572eca++;
              return [3, 1];
            case 3:
              if (HasNamedPtfxAssetLoaded(_0x5283df.dict)) {
                UseParticleFxAsset(_0x5283df.dict);
                _0x3a3fda = StartParticleFxLoopedOnEntityBone(_0x5283df.name, _0x1a20ef, 0, 0, 0, 0, 0, 0, _0x4dd238, _0x5283df.scale, false, false, false);
              }
              _0x3083ec.label = 4;
            case 4:
              _0x4e3e6b = {
                id: _0x536a93.id,
                entity: _0x1a20ef,
                netId: _0x2eb45a,
                mode: _0x536a93.mode,
                action: _0x536a93.action,
                actionTarget: _0x536a93.actionTarget,
                lastActionTimestamp: _0x536a93.actionTimestamp,
                originPoint: new _0x58b2dd(_0x536a93.spawnPosition.x, _0x536a93.spawnPosition.y, _0x536a93.spawnPosition.z),
                lastSeen: Date.now(),
                failedRefreshAttempts: 0,
                lastHealth: GetEntityHealth(_0x1a20ef),
                maxHealth: GetEntityMaxHealth(_0x1a20ef),
                damageMultiplier: 5,
                spawnedByMe: false,
                lastKnownOwner: _0x56f253,
                owner: _0x536a93.originalOwner,
                currentOwner: _0x536a93.currentOwner,
                zombieTier: _0x536a93.zombieTier,
                particleFxHandle: _0x3a3fda,
                spawnTimestamp: Date.now()
              };
              _0x491e12.set(_0x536a93.id, _0x4e3e6b);
              _0x38df96(_0x50753d);
              _0x38df96(_0x2a33aa);
              _0x38df96(_0xde72de);
              _0x38df96(_0x1d7bdf);
              _0x38df96(_0x5dfae1);
              _0x38df96(_0xd6b731);
              _0x38df96(_0x3ae8bd);
              _0x3083ec.label = 5;
            case 5:
              return [2];
            case 6:
              _0x8ad6b7 = _0x536a93.action !== _0x143cd3.action || _0x536a93.actionTimestamp && _0x536a93.actionTimestamp > (_0x143cd3.lastActionTimestamp || 0);
              _0x36cc6b = _0x536a93.mode !== _0x143cd3.mode;
              _0x143cd3.action = _0x536a93.action;
              _0x143cd3.actionTarget = _0x536a93.actionTarget;
              _0x143cd3.lastActionTimestamp = _0x536a93.actionTimestamp;
              _0x143cd3.mode = _0x536a93.mode;
              _0x143cd3.currentOwner = _0x536a93.currentOwner;
              _0x143cd3.lastDamageTime = _0x536a93.lastDamageTime;
              _0x1141d6 = _0x536a93.lastDamageTime && Date.now() - _0x536a93.lastDamageTime < _0x3f2816;
              _0x17df56 = _0x536a93.damageTargetServerId && _0x1141d6;
              if (_0x36cc6b) {
                if (_0x536a93.mode === "idle" || !_0x17df56) {
                  _0x143cd3.currentTarget = void 0;
                }
                _0x143cd3.isInCombat = void 0;
                _0x3c3092 = NetworkHasControlOfNetworkId(_0x143cd3.netId);
                if (_0x3c3092) {
                  if (_0x536a93.mode === "idle") {
                    ClearPedTasksImmediately(_0x143cd3.entity);
                  } else {
                    ClearPedTasks(_0x143cd3.entity);
                  }
                  _0x580ce7(_0x143cd3.entity);
                }
                _0x2da486 = GetEntityCoords(_0x143cd3.entity, true);
                _0x143cd3.originPoint = new _0x58b2dd(_0x2da486[0], _0x2da486[1], _0x2da486[2]);
                if (_0x536a93.mode === "idle") {
                  _0x38df96(_0x3ae8bd);
                } else if (_0x536a93.mode === "aggro") {
                  _0x38df96(_0xd6b731);
                }
              }
              if (_0x17df56 && _0x536a93.mode === "aggro" && _0x536a93.currentOwner === _0x5bfc8a && _0x536a93.damageTargetServerId) {
                _0x3c1dc4 = GetPlayerFromServerId(_0x536a93.damageTargetServerId);
                if (_0x3c1dc4 !== -1) {
                  _0x1f853d = GetPlayerPed(_0x3c1dc4);
                  if (DoesEntityExist(_0x1f853d) && !_0x3503c1(_0x1f853d)) {
                    _0x143cd3.currentTarget = _0x1f853d;
                    _0x33820d(_0x143cd3, _0x1f853d);
                    _0x38df96(_0xd6b731);
                  }
                }
              }
              if (_0x8ad6b7) {
                _0x143cd3.currentTarget = void 0;
                _0x143cd3.isInCombat = void 0;
                if (_0x536a93.action === null) {
                  _0x4d7a43 = NetworkHasControlOfNetworkId(_0x143cd3.netId);
                  if (_0x4d7a43) {
                    ClearPedTasks(_0x143cd3.entity);
                    _0x580ce7(_0x143cd3.entity);
                  }
                  _0x1f8828 = new _0x58b2dd(GetEntityCoords(_0x143cd3.entity, true));
                  _0x143cd3.originPoint = _0x1f8828;
                }
                _0x38df96(_0x1d7bdf);
              }
              return [2];
          }
        });
      });
      return function _0x49e6b5(_0x45066f, _0x44dca9, _0x3c1cf6) {
        return _0x21a505.apply(this, arguments);
      };
    })();
    RegisterCommand("misc:zombies:spawn", (function() {
      var _0xaa044 = _0x11862d(function(_0x1cf334, _0x509940) {
        var _0x4735a8;
        var _0x38aaa3;
        var _0x5c784a;
        var _0x2e371b;
        var _0x32c26b;
        var _0x48293b;
        var _0x3772bf;
        var _0x7d6d90;
        var _0x14a10f;
        var _0x4c7075;
        return _0x279f30(this, function(_0x2278fd) {
          switch (_0x2278fd.label) {
            case 0:
              return [4, _0x38f759.execute("misc:zombie:isAllowed")];
            case 1:
              if (_0x2278fd.sent() === false) {
                console.log("[Zombie] You are not permitted to spawn zombies.");
                return [2];
              }
              _0x4735a8 = parseInt(_0x509940[0]) || 1;
              _0x38aaa3 = Math.min(Math.max(_0x4735a8, 1), 20);
              _0x5c784a = "random";
              if (_0x509940[1]) {
                _0x2e371b = _0x509940[1].toLowerCase();
                if (_0x2e371b === "normal" || _0x2e371b === "medium" || _0x2e371b === "boss") {
                  _0x5c784a = _0x2e371b;
                } else {
                  console.log("[Zombie] Invalid tier. Valid options: normal, medium, boss. Using random.");
                }
              }
              _0x32c26b = PlayerPedId();
              _0x48293b = new _0x58b2dd(GetEntityCoords(_0x32c26b, true));
              _0x3772bf = function(_0xd4b623) {
                var _0x5ccd6d = Math.random() * Math.PI * 2;
                var _0x35a131 = _0xd4b623 * Math.sqrt(Math.random());
                var _0x1d6536 = _0x48293b.x + _0x35a131 * Math.cos(_0x5ccd6d);
                var _0x53cde7 = _0x48293b.y + _0x35a131 * Math.sin(_0x5ccd6d);
                var _0xc17dd2 = _0x1f4e85(GetGroundZFor_3dCoord(_0x1d6536, _0x53cde7, _0x48293b.z + 25, false), 2);
                var _0x4f54f7 = _0xc17dd2[0];
                var _0x2a11a5 = _0xc17dd2[1];
                if (_0x4f54f7) {
                  return new _0x58b2dd(_0x1d6536, _0x53cde7, _0x2a11a5);
                } else {
                  return _0x3772bf(_0xd4b623);
                }
              };
              _0x7d6d90 = 0;
              _0x2278fd.label = 2;
            case 2:
              if (!(_0x7d6d90 < _0x38aaa3)) {
                return [3, 6];
              }
              _0x14a10f = _0x3772bf(10);
              return [4, _0xcf4f7a(_0x14a10f, _0x5c784a)];
            case 3:
              _0x2278fd.sent();
              return [4, _0x36aef6(_0x3cdf34)];
            case 4:
              _0x2278fd.sent();
              _0x2278fd.label = 5;
            case 5:
              _0x7d6d90++;
              return [3, 2];
            case 6:
              _0x4c7075 = _0x5c784a === "random" ? "random" : _0x5c784a;
              console.log(`[Zombie] Spawned ${_0x38aaa3} ${_0x4c7075} zombie(s) near your position.`);
              return [2];
          }
        });
      });
      return function(_0x4f2e50, _0x300004) {
        return _0xaa044.apply(this, arguments);
      };
    })(), false);
    RegisterCommand("misc:zombies:clear", (function() {
      var _0x5bc256 = _0x11862d(function(_0x28185c, _0x5ec953) {
        var _0x12401f;
        var _0xe006b1;
        var _0x5ada;
        return _0x279f30(this, function(_0x7ed8db) {
          switch (_0x7ed8db.label) {
            case 0:
              return [4, _0x38f759.execute("misc:zombie:isAllowed")];
            case 1:
              if (_0x7ed8db.sent() === false) {
                console.log("[Zombie] You are not permitted to clear zombies.");
                return [2];
              }
              if (!_0x5ec953[0]) {
                return [3, 3];
              }
              _0x12401f = _0x5ec953[0];
              return [4, _0x38f759.execute("misc:zombie:removeNPC", _0x12401f)];
            case 2:
              _0xe006b1 = _0x7ed8db.sent();
              if (_0xe006b1) {
                console.log(`[Zombie] Cleared zombie ${_0x12401f}`);
              } else {
                console.log(`[Zombie] Zombie ${_0x12401f} not found`);
              }
              return [3, 5];
            case 3:
              return [4, _0x38f759.execute("misc:zombie:clearAll")];
            case 4:
              _0x5ada = _0x7ed8db.sent();
              console.log(`[Zombie] Cleared ${_0x5ada} zombie(s).`);
              _0x7ed8db.label = 5;
            case 5:
              return [2];
          }
        });
      });
      return function(_0x362bec, _0x2b91ae) {
        return _0x5bc256.apply(this, arguments);
      };
    })(), false);
    RegisterCommand("misc:zombies:aggro", _0x11862d(function() {
      return _0x279f30(this, function(_0x4e4c57) {
        switch (_0x4e4c57.label) {
          case 0:
            return [4, _0x38f759.execute("misc:zombie:isAllowed")];
          case 1:
            if (_0x4e4c57.sent() === false) {
              console.log("[Zombie] You are not permitted to control zombies.");
              return [2];
            }
            return [4, _0x38f759.execute("misc:zombie:setMode", "aggro")];
          case 2:
            _0x4e4c57.sent();
            console.log("[Zombie] All zombies set to aggro mode.");
            return [2];
        }
      });
    }), false);
    RegisterCommand("misc:zombies:attack", (function() {
      var _0x5d627d = _0x11862d(function(_0x56529e, _0x3f12fb) {
        var _0x4c28d5;
        return _0x279f30(this, function(_0x21f57c) {
          switch (_0x21f57c.label) {
            case 0:
              return [4, _0x38f759.execute("misc:zombie:isAllowed")];
            case 1:
              if (_0x21f57c.sent() === false) {
                console.log("[Zombie] You are not permitted to control zombies.");
                return [2];
              }
              _0x4c28d5 = parseInt(_0x3f12fb[0]);
              if (isNaN(_0x4c28d5) || _0x4c28d5 <= 0) {
                console.log("[Zombie] Usage: /misc:zombies:attack [playerID]");
                return [2];
              }
              return [4, _0x38f759.execute("misc:zombie:setAction", "attackPlayer", _0x4c28d5)];
            case 2:
              _0x21f57c.sent();
              console.log(`[Zombie] Commanding zombies to attack player ${_0x4c28d5}.`);
              return [2];
          }
        });
      });
      return function(_0x4816dd, _0x2f9b5a) {
        return _0x5d627d.apply(this, arguments);
      };
    })(), false);
    RegisterCommand("misc:zombies:move", (function() {
      var _0x894a88 = _0x11862d(function(_0x518a50, _0x57d5e6) {
        var _0x5eb701;
        var _0x509177;
        var _0x1d9401;
        var _0x3f7ab6;
        var _0x5aa451;
        var _0xba722a;
        var _0x133502;
        var _0x3e2f8c;
        var _0x5e087c;
        var _0x8eaa2;
        var _0x3c7afc;
        return _0x279f30(this, function(_0x22a057) {
          switch (_0x22a057.label) {
            case 0:
              return [4, _0x38f759.execute("misc:zombie:isAllowed")];
            case 1:
              if (_0x22a057.sent() === false) {
                console.log("[Zombie] You are not permitted to control zombies.");
                return [2];
              }
              if (_0x57d5e6.length !== 1) {
                return [3, 6];
              }
              _0x5eb701 = parseInt(_0x57d5e6[0]);
              if (isNaN(_0x5eb701)) {
                console.log("[Zombie] Usage: /misc:zombies:move [playerID] OR /misc:zombies:move [x] [y] [z] OR /misc:zombies:move (to move to your position)");
                return [2];
              }
              if (_0x5eb701 !== 0) {
                return [3, 3];
              }
              _0x509177 = PlayerPedId();
              _0x1d9401 = new _0x58b2dd(GetEntityCoords(_0x509177, true));
              console.log("[Zombie] Moving zombies to your position.");
              var _0x3039f1 = {
                x: _0x1d9401.x,
                y: _0x1d9401.y,
                z: _0x1d9401.z
              };
              return [4, _0x38f759.execute("misc:zombie:setAction", "moveTo", _0x3039f1)];
            case 2:
              _0x22a057.sent();
              return [3, 5];
            case 3:
              _0x3f7ab6 = GetPlayerFromServerId(_0x5eb701);
              if (_0x3f7ab6 === -1) {
                console.log(`[Zombie] Player with server ID ${_0x5eb701} not found.`);
                return [2];
              }
              _0x5aa451 = GetPlayerPed(_0x3f7ab6);
              if (!DoesEntityExist(_0x5aa451)) {
                console.log(`[Zombie] Player ${_0x5eb701} entity does not exist.`);
                return [2];
              }
              console.log(`[Zombie] Moving zombies to player ${_0x5eb701}'s position.`);
              return [4, _0x38f759.execute("misc:zombie:setAction", "moveTo", _0x5eb701)];
            case 4:
              _0x22a057.sent();
              _0x22a057.label = 5;
            case 5:
              return [3, 10];
            case 6:
              if (!(_0x57d5e6.length >= 3)) {
                return [3, 8];
              }
              _0xba722a = parseFloat(_0x57d5e6[0]);
              _0x133502 = parseFloat(_0x57d5e6[1]);
              _0x3e2f8c = parseFloat(_0x57d5e6[2]);
              if (isNaN(_0xba722a) || isNaN(_0x133502) || isNaN(_0x3e2f8c)) {
                console.log("[Zombie] Usage: /misc:zombies:move [playerID] OR /misc:zombies:move [x] [y] [z] OR /misc:zombies:move (to move to your position)");
                return [2];
              }
              _0x5e087c = new _0x58b2dd(_0xba722a, _0x133502, _0x3e2f8c);
              console.log(`[Zombie] Moving zombies to coordinates: ${_0xba722a.toFixed(2)}, ${_0x133502.toFixed(2)}, ${_0x3e2f8c.toFixed(2)}`);
              var _0x3d7f12 = {
                x: _0x5e087c.x,
                y: _0x5e087c.y,
                z: _0x5e087c.z
              };
              return [4, _0x38f759.execute("misc:zombie:setAction", "moveTo", _0x3d7f12)];
            case 7:
              _0x22a057.sent();
              return [3, 10];
            case 8:
              _0x8eaa2 = PlayerPedId();
              _0x3c7afc = new _0x58b2dd(GetEntityCoords(_0x8eaa2, true));
              console.log("[Zombie] Moving zombies to your position.");
              var _0x3f641f = {
                x: _0x3c7afc.x,
                y: _0x3c7afc.y,
                z: _0x3c7afc.z
              };
              return [4, _0x38f759.execute("misc:zombie:setAction", "moveTo", _0x3f641f)];
            case 9:
              _0x22a057.sent();
              _0x22a057.label = 10;
            case 10:
              return [2];
          }
        });
      });
      return function(_0x42a5be, _0xa3ef7b) {
        return _0x894a88.apply(this, arguments);
      };
    })(), false);
    RegisterCommand("misc:zombies:follow", (function() {
      var _0x588835 = _0x11862d(function(_0x569b4c, _0x35f29d) {
        var _0x358f00;
        return _0x279f30(this, function(_0x375f7e) {
          switch (_0x375f7e.label) {
            case 0:
              return [4, _0x38f759.execute("misc:zombie:isAllowed")];
            case 1:
              if (_0x375f7e.sent() === false) {
                console.log("[Zombie] You are not permitted to control zombies.");
                return [2];
              }
              if (_0x35f29d.length === 0 || isNaN(parseInt(_0x35f29d[0])) || parseInt(_0x35f29d[0]) <= 0) {
                _0x358f00 = GetPlayerServerId(PlayerId());
                console.log(`[Zombie] Commanding zombies to follow you (ID: ${_0x358f00}).`);
              } else {
                _0x358f00 = parseInt(_0x35f29d[0]);
                console.log(`[Zombie] Commanding zombies to follow player ${_0x358f00}.`);
              }
              return [4, _0x38f759.execute("misc:zombie:setAction", "followPlayer", _0x358f00)];
            case 2:
              _0x375f7e.sent();
              return [2];
          }
        });
      });
      return function(_0x2a57d1, _0x5133d1) {
        return _0x588835.apply(this, arguments);
      };
    })(), false);
    RegisterCommand("misc:zombies:idle", _0x11862d(function() {
      return _0x279f30(this, function(_0x265ef0) {
        switch (_0x265ef0.label) {
          case 0:
            return [4, _0x38f759.execute("misc:zombie:isAllowed")];
          case 1:
            if (_0x265ef0.sent() === false) {
              console.log("[Zombie] You are not permitted to control zombies.");
              return [2];
            }
            return [4, _0x38f759.execute("misc:zombie:setMode", "idle")];
          case 2:
            _0x265ef0.sent();
            console.log("[Zombie] All zombies set to idle mode.");
            return [2];
        }
      });
    }), false);
    RegisterCommand("misc:zombies:list", _0x11862d(function() {
      var _0x44931a;
      return _0x279f30(this, function(_0x4cce9c) {
        switch (_0x4cce9c.label) {
          case 0:
            return [4, _0x38f759.execute("misc:zombie:isAllowed")];
          case 1:
            if (_0x4cce9c.sent() === false) {
              console.log("[Zombie] You are not permitted to view zombie info.");
              return [2];
            }
            return [4, _0x38f759.execute("misc:zombie:getList")];
          case 2:
            _0x44931a = _0x4cce9c.sent();
            console.log(`[Zombie] Active zombies: ${_0x44931a.length}`);
            if (_0x44931a.length > 0) {
              _0x44931a.forEach(function(_0x183e05, _0x524418) {
                var _0x4c48ad = `${_0x183e05.owner}`;
                var _0x582633 = _0x183e05.networkOwner ? `${_0x183e05.networkOwner}` : "Unknown";
                var _0xff6a97 = _0x183e05.action ? _0x183e05.action : "none";
                var _0x135a2a = _0x183e05.timeSinceLastSeen !== null && _0x183e05.timeSinceLastSeen !== void 0 ? `${Math.floor(_0x183e05.timeSinceLastSeen / 1e3)}s ago` : "Never";
                var _0x164481 = "None";
                if (_0x183e05.actionTarget) {
                  _0x164481 = `Player ${_0x183e05.actionTarget}`;
                } else {
                  var _0x4db89f = _0x491e12.get(_0x183e05.id);
                  if (_0x4db89f && _0x4db89f.currentTarget && DoesEntityExist(_0x4db89f.currentTarget)) {
                    var _0x40ada8 = NetworkGetPlayerIndexFromPed(_0x4db89f.currentTarget);
                    if (_0x40ada8 !== -1) {
                      var _0x3e44e8 = GetPlayerServerId(_0x40ada8);
                      _0x164481 = `Player ${_0x3e44e8}`;
                    } else {
                      _0x164481 = `Ped ${_0x4db89f.currentTarget}`;
                    }
                  }
                }
                console.log(`  ${_0x524418 + 1}. ID: ${_0x183e05.id} | Mode: ${_0x183e05.mode} | Action: ${_0xff6a97} | Target: ${_0x164481} | Spawner: ${_0x4c48ad} | NetOwner: ${_0x582633} | LastSeen: ${_0x135a2a}`);
              });
            }
            return [2];
        }
      });
    }), false);
    RegisterCommand("misc:zombies:nuke", _0x11862d(function() {
      var _0x47fbe6;
      var _0x1ec650;
      var _0x1de2a7;
      var _0x41e853;
      var _0x7dc39c;
      var _0x27cc96;
      var _0x29d505;
      var _0x8c1264;
      var _0x19148b;
      var _0xb5a6ab;
      var _0x2cb38b;
      return _0x279f30(this, function(_0x30dcad) {
        switch (_0x30dcad.label) {
          case 0:
            return [4, _0x38f759.execute("misc:zombie:isAllowed")];
          case 1:
            if (_0x30dcad.sent() === false) {
              console.log("[Zombie] You are not permitted.");
              return [2];
            }
            _0x47fbe6 = 0;
            _0x491e12.forEach(function(_0x3a0e4e) {
              if (_0x3a0e4e.particleFxHandle) {
                StopParticleFxLooped(_0x3a0e4e.particleFxHandle, false);
              }
              if (DoesEntityExist(_0x3a0e4e.entity)) {
                DeleteEntity(_0x3a0e4e.entity);
              }
              _0x47fbe6++;
            });
            _0x491e12.clear();
            _0x1949e4();
            _0x1ec650 = GetGamePool("CPed");
            _0x1de2a7 = true;
            _0x41e853 = false;
            _0x7dc39c = void 0;
            try {
              for (_0x27cc96 = _0x1ec650[Symbol.iterator](); !(_0x1de2a7 = (_0x29d505 = _0x27cc96.next()).done); _0x1de2a7 = true) {
                _0x8c1264 = _0x29d505.value;
                _0x19148b = _0x154c38.GetEntityStateValue(_0x8c1264, "zombie");
                _0xb5a6ab = GetEntityModel(_0x8c1264);
                _0x2cb38b = _0x2e533d.includes(_0xb5a6ab);
                if (_0x19148b || _0x2cb38b) {
                  if (DoesEntityExist(_0x8c1264)) {
                    DeleteEntity(_0x8c1264);
                    _0x47fbe6++;
                  }
                }
              }
            } catch (_0x176ef6) {
              _0x41e853 = true;
              _0x7dc39c = _0x176ef6;
            } finally {
              try {
                if (!_0x1de2a7 && _0x27cc96.return != null) {
                  _0x27cc96.return();
                }
              } finally {
                if (_0x41e853) {
                  throw _0x7dc39c;
                }
              }
            }
            _0x38f759.execute("misc:zombie:nukeAll").catch(function(_0x1410d4) {
              return console.error("[Zombie] nuke RPC error:", _0x1410d4);
            });
            console.log(`[Zombie] Nuked ${_0x47fbe6} zombies.`);
            return [2];
        }
      });
    }), false);
    RegisterCommand("misc:zombies:find", (function() {
      var _0x216edd = _0x11862d(function(_0x23f814, _0x2aeaf3) {
        var _0x4b37e8;
        var _0x2a8977;
        var _0x4382f6;
        return _0x279f30(this, function(_0x54a3a1) {
          switch (_0x54a3a1.label) {
            case 0:
              return [4, _0x38f759.execute("misc:zombie:isAllowed")];
            case 1:
              if (_0x54a3a1.sent() === false) {
                console.log("[Zombie] You are not permitted.");
                return [2];
              }
              if (!_0x2aeaf3[0]) {
                console.log("[Zombie] Usage: /misc:zombies:find [id]");
                return [2];
              }
              _0x4b37e8 = _0x2aeaf3[0];
              return [4, _0x38f759.execute("misc:zombie:getZombieById", _0x4b37e8)];
            case 2:
              _0x2a8977 = _0x54a3a1.sent();
              if (!_0x2a8977) {
                console.log(`[Zombie] Zombie ${_0x4b37e8} not found`);
                return [2];
              }
              if (!_0x2a8977.lastKnownPosition) {
                console.log(`[Zombie] Zombie ${_0x4b37e8} has no known position`);
                return [2];
              }
              _0x4382f6 = PlayerPedId();
              SetEntityCoords(_0x4382f6, _0x2a8977.lastKnownPosition.x, _0x2a8977.lastKnownPosition.y, _0x2a8977.lastKnownPosition.z, false, false, false, false);
              console.log(`[Zombie] Teleported to zombie ${_0x4b37e8} at (${_0x2a8977.lastKnownPosition.x.toFixed(1)}, ${_0x2a8977.lastKnownPosition.y.toFixed(1)}, ${_0x2a8977.lastKnownPosition.z.toFixed(1)})`);
              return [2];
          }
        });
      });
      return function(_0xb34f44, _0x57ef8d) {
        return _0x216edd.apply(this, arguments);
      };
    })(), false);
    onNet("misc:zombie:triggerSpawnFx", (function() {
      var _0x351599 = _0x11862d(function(_0x29e6ba, _0x5d974e) {
        var _0x3c62c0;
        var _0x41fc73;
        var _0xbf94ec;
        var _0x2fa13b;
        var _0x2d3a62;
        var _0x12c765;
        return _0x279f30(this, function(_0x4cf5e9) {
          switch (_0x4cf5e9.label) {
            case 0:
              _0x3c62c0 = PlayerPedId();
              _0x41fc73 = GetEntityCoords(_0x3c62c0, true);
              _0xbf94ec = _0x2ad271.MathUtils.getDistance([_0x41fc73[0], _0x41fc73[1], _0x41fc73[2]], [_0x5d974e.x, _0x5d974e.y, _0x5d974e.z]);
              if (_0xbf94ec > 100) {
                return [2];
              }
              if (!NetworkDoesNetworkIdExist(_0x29e6ba)) {
                return [2];
              }
              _0x2fa13b = NetworkGetEntityFromNetworkId(_0x29e6ba);
              if (!_0x2fa13b || _0x2fa13b === 0 || !DoesEntityExist(_0x2fa13b)) {
                return [2];
              }
              RequestNamedPtfxAsset("scr_rcbarry2");
              _0x2d3a62 = 0;
              _0x4cf5e9.label = 1;
            case 1:
              if (!!HasNamedPtfxAssetLoaded("scr_rcbarry2") || !(_0x2d3a62 < 50)) {
                return [3, 3];
              }
              return [4, _0x36aef6(50)];
            case 2:
              _0x4cf5e9.sent();
              _0x2d3a62++;
              return [3, 1];
            case 3:
              if (HasNamedPtfxAssetLoaded("scr_rcbarry2")) {
                UseParticleFxAsset("scr_rcbarry2");
                _0x12c765 = GetPedBoneIndex(_0x2fa13b, 24816);
                StartParticleFxNonLoopedOnPedBone("scr_clown_appears", _0x2fa13b, 0, 0, 0, 0, 0, 0, _0x12c765, 1, false, false, false);
              }
              return [2];
          }
        });
      });
      return function(_0x108794, _0x1daef6) {
        return _0x351599.apply(this, arguments);
      };
    })());
    function _0x30099a() {
      return _0x4bd989.apply(this, arguments);
    }
    function _0x4bd989() {
      _0x4bd989 = _0x11862d(function() {
        return _0x279f30(this, function(_0x20210c) {
          _0x154c38.RegisterStatebagChangeHandler("zombie", false, false, (function() {
            var _0x9d30c9 = _0x11862d(function(_0x5f1f4f, _0x2e0426, _0x1c5b00) {
              return _0x279f30(this, function(_0x87532c) {
                switch (_0x87532c.label) {
                  case 0:
                    return [4, _0xd47e2b(_0x5f1f4f, _0x2e0426, _0x1c5b00)];
                  case 1:
                    _0x87532c.sent();
                    return [2];
                }
              });
            });
            return function(_0x285010, _0x5a86ab, _0x4f0527) {
              return _0x9d30c9.apply(this, arguments);
            };
          })());
          console.log("[Zombies] Module initialized with statebag support.");
          return [2];
        });
      });
      return _0x4bd989.apply(this, arguments);
    }
    ;
    function _0x4a126e(_0x50ab23, _0x168a93) {
      if (_0x168a93 == null || _0x168a93 > _0x50ab23.length) {
        _0x168a93 = _0x50ab23.length;
      }
      for (var _0x4b0b83 = 0, _0x3485a9 = new Array(_0x168a93); _0x4b0b83 < _0x168a93; _0x4b0b83++) {
        _0x3485a9[_0x4b0b83] = _0x50ab23[_0x4b0b83];
      }
      return _0x3485a9;
    }
    function _0x106b3f(_0x5c4d7b) {
      if (Array.isArray(_0x5c4d7b)) {
        return _0x5c4d7b;
      }
    }
    function _0x34afcd(_0x3ae86d, _0x366c10, _0x588ecf, _0x3c45bc, _0x2634e7, _0x484372, _0x33343b) {
      try {
        var _0x3850ad = _0x3ae86d[_0x484372](_0x33343b);
        var _0x3a96a5 = _0x3850ad.value;
      } catch (_0x4d7d31) {
        _0x588ecf(_0x4d7d31);
        return;
      }
      if (_0x3850ad.done) {
        _0x366c10(_0x3a96a5);
      } else {
        Promise.resolve(_0x3a96a5).then(_0x3c45bc, _0x2634e7);
      }
    }
    function _0x308197(_0x4badfe) {
      return function() {
        var _0x3e0625 = this;
        var _0x5ea6b3 = arguments;
        return new Promise(function(_0x44f599, _0x3c81b7) {
          var _0x161df6 = _0x4badfe.apply(_0x3e0625, _0x5ea6b3);
          function _0x450b69(_0x545c54) {
            _0x34afcd(_0x161df6, _0x44f599, _0x3c81b7, _0x450b69, _0x4bbc97, "next", _0x545c54);
          }
          function _0x4bbc97(_0x41be5a) {
            _0x34afcd(_0x161df6, _0x44f599, _0x3c81b7, _0x450b69, _0x4bbc97, "throw", _0x41be5a);
          }
          _0x450b69(void 0);
        });
      };
    }
    function _0x7fcb67(_0x236952, _0x4eb771) {
      var _0x24868e = _0x236952 == null ? null : typeof Symbol !== "undefined" && _0x236952[Symbol.iterator] || _0x236952["@@iterator"];
      if (_0x24868e == null) {
        return;
      }
      var _0x22d54f = [];
      var _0x2ecf9f = true;
      var _0x25d580 = false;
      var _0x475290;
      var _0x5867ae;
      try {
        for (_0x24868e = _0x24868e.call(_0x236952); !(_0x2ecf9f = (_0x475290 = _0x24868e.next()).done); _0x2ecf9f = true) {
          _0x22d54f.push(_0x475290.value);
          if (_0x4eb771 && _0x22d54f.length === _0x4eb771) {
            break;
          }
        }
      } catch (_0x1d2114) {
        _0x25d580 = true;
        _0x5867ae = _0x1d2114;
      } finally {
        try {
          if (!_0x2ecf9f && _0x24868e.return != null) {
            _0x24868e.return();
          }
        } finally {
          if (_0x25d580) {
            throw _0x5867ae;
          }
        }
      }
      return _0x22d54f;
    }
    function _0x5920cd() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0xd14896(_0x47c2d0, _0xb4c9cc) {
      return _0x106b3f(_0x47c2d0) || _0x7fcb67(_0x47c2d0, _0xb4c9cc) || _0x1765a4(_0x47c2d0, _0xb4c9cc) || _0x5920cd();
    }
    function _0x1765a4(_0x25b494, _0x48e097) {
      if (!_0x25b494) {
        return;
      }
      if (typeof _0x25b494 === "string") {
        return _0x4a126e(_0x25b494, _0x48e097);
      }
      var _0xcb78c8 = Object.prototype.toString.call(_0x25b494).slice(8, -1);
      if (_0xcb78c8 === "Object" && _0x25b494.constructor) {
        _0xcb78c8 = _0x25b494.constructor.name;
      }
      if (_0xcb78c8 === "Map" || _0xcb78c8 === "Set") {
        return Array.from(_0xcb78c8);
      }
      if (_0xcb78c8 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0xcb78c8)) {
        return _0x4a126e(_0x25b494, _0x48e097);
      }
    }
    function _0x558266(_0x71fadc, _0x29f1ec) {
      var _0xcef579;
      var _0xe0bd55;
      var _0x3033d6;
      var _0x1b4c8d;
      var _0x3751ef = {
        label: 0,
        sent: function() {
          if (_0x3033d6[0] & 1) {
            throw _0x3033d6[1];
          }
          return _0x3033d6[1];
        },
        trys: [],
        ops: []
      };
      _0x1b4c8d = {
        next: _0x2d9790(0),
        throw: _0x2d9790(1),
        return: _0x2d9790(2)
      };
      if (typeof Symbol === "function") {
        _0x1b4c8d[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x1b4c8d;
      function _0x2d9790(_0x39e984) {
        return function(_0x394b2b) {
          return _0x51ec95([_0x39e984, _0x394b2b]);
        };
      }
      function _0x51ec95(_0x38440a) {
        if (_0xcef579) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x3751ef) {
          try {
            _0xcef579 = 1;
            if (_0xe0bd55 && (_0x3033d6 = _0x38440a[0] & 2 ? _0xe0bd55.return : _0x38440a[0] ? _0xe0bd55.throw || ((_0x3033d6 = _0xe0bd55.return) && _0x3033d6.call(_0xe0bd55), 0) : _0xe0bd55.next) && !(_0x3033d6 = _0x3033d6.call(_0xe0bd55, _0x38440a[1])).done) {
              return _0x3033d6;
            }
            _0xe0bd55 = 0;
            if (_0x3033d6) {
              _0x38440a = [_0x38440a[0] & 2, _0x3033d6.value];
            }
            switch (_0x38440a[0]) {
              case 0:
              case 1:
                _0x3033d6 = _0x38440a;
                break;
              case 4:
                _0x3751ef.label++;
                return {
                  value: _0x38440a[1],
                  done: false
                };
              case 5:
                _0x3751ef.label++;
                _0xe0bd55 = _0x38440a[1];
                _0x38440a = [0];
                continue;
              case 7:
                _0x38440a = _0x3751ef.ops.pop();
                _0x3751ef.trys.pop();
                continue;
              default:
                if (!(_0x3033d6 = _0x3751ef.trys, _0x3033d6 = _0x3033d6.length > 0 && _0x3033d6[_0x3033d6.length - 1]) && (_0x38440a[0] === 6 || _0x38440a[0] === 2)) {
                  _0x3751ef = 0;
                  continue;
                }
                if (_0x38440a[0] === 3 && (!_0x3033d6 || _0x38440a[1] > _0x3033d6[0] && _0x38440a[1] < _0x3033d6[3])) {
                  _0x3751ef.label = _0x38440a[1];
                  break;
                }
                if (_0x38440a[0] === 6 && _0x3751ef.label < _0x3033d6[1]) {
                  _0x3751ef.label = _0x3033d6[1];
                  _0x3033d6 = _0x38440a;
                  break;
                }
                if (_0x3033d6 && _0x3751ef.label < _0x3033d6[2]) {
                  _0x3751ef.label = _0x3033d6[2];
                  _0x3751ef.ops.push(_0x38440a);
                  break;
                }
                if (_0x3033d6[2]) {
                  _0x3751ef.ops.pop();
                }
                _0x3751ef.trys.pop();
                continue;
            }
            _0x38440a = _0x29f1ec.call(_0x71fadc, _0x3751ef);
          } catch (_0x57495b) {
            _0x38440a = [6, _0x57495b];
            _0xe0bd55 = 0;
          } finally {
            _0xcef579 = _0x3033d6 = 0;
          }
        }
        if (_0x38440a[0] & 5) {
          throw _0x38440a[1];
        }
        var _0x16b530 = {
          value: _0x38440a[0] ? _0x38440a[1] : void 0,
          done: true
        };
        return _0x16b530;
      }
    }
    var _0x2cb791 = false;
    var _0x1674c8 = new _0x49cfb9(function() {
    }, 0, "tick");
    RegisterCommand("misc:zombies:mode", _0x308197(function() {
      return _0x558266(this, function(_0x31f920) {
        switch (_0x31f920.label) {
          case 0:
            return [4, _0x38f759.execute("misc:zombie:isAllowed")];
          case 1:
            if (_0x31f920.sent() === false) {
              console.log("Lol, you are not permitted.");
              return [2];
            }
            _0x2cb791 = !_0x2cb791;
            if (_0x2cb791 && !_0x1674c8.isActive) {
              _0x1674c8.start();
            } else if (!_0x2cb791 && _0x1674c8.isActive) {
              _0x1674c8.stop();
            }
            console.log(`Zombies command is now ${_0x2cb791 ? "enabled" : "disabled"}`);
            return [2];
        }
      });
    }), false);
    RegisterCommand("misc:zombies:leeroyJenkins", _0x308197(function() {
      return _0x558266(this, function(_0x3326ec) {
        switch (_0x3326ec.label) {
          case 0:
            return [4, _0x38f759.execute("misc:zombie:isAllowed")];
          case 1:
            if (_0x3326ec.sent() === false) {
              console.log("Lol, you are not permitted.");
              return [2];
            }
            _0x1674c8.data.leeroyJenkins = !_0x1674c8.data.leeroyJenkins;
            console.log(`Zombies Leeroy Jenkins mode is now ${_0x1674c8.data.leeroyJenkins ? "enabled" : "disabled"}`);
            return [2];
        }
      });
    }), false);
    RegisterCommand("misc:zombies:setSpeed", (function() {
      var _0x50d690 = _0x308197(function(_0x2b1887, _0x2f569d) {
        var _0x28b66c;
        return _0x558266(this, function(_0x11878e) {
          switch (_0x11878e.label) {
            case 0:
              return [4, _0x38f759.execute("misc:zombie:isAllowed")];
            case 1:
              if (_0x11878e.sent() === false) {
                console.log("Lol, you are not permitted.");
                return [2];
              }
              _0x28b66c = parseFloat(_0x2f569d[0]);
              if (!isNaN(_0x28b66c) && _0x28b66c > 0) {
                _0x1674c8.data.moveSpeed = _0x2ad271.MathUtils.clamp(_0x28b66c, 0.1, 10);
                console.log(`Zombies move speed set to ${_0x1674c8.data.moveSpeed}`);
              }
              return [2];
          }
        });
      });
      return function(_0x118d77, _0x36c9da) {
        return _0x50d690.apply(this, arguments);
      };
    })(), false);
    RegisterCommand("misc:zombies:playSound", function(_0x5dc09e, _0x3bde3b) {
      var _0x427db2 = _0x3bde3b[0];
      console.log(_0x427db2);
      if (_0x427db2) {
        _0x539aaf.emitNet("misc:zombies:playSound", _0x427db2);
      }
    }, false);
    var _0x559a92 = 0;
    _0x1674c8.addHook("afterStop", function() {
      _0x559a92 = 0;
    });
    _0x1674c8.addHook("active", function() {
      SetPedMoveRateOverride(PlayerPedId(), _0x1674c8.data.moveSpeed || 1);
      if (!_0x1674c8.data.leeroyJenkins) {
        return;
      }
      var _0xc67708 = _0xd14896(globalThis.exports["np-target"].GetEntityPlayerIsLookingAt(2, 0.2, 30, PlayerPedId()), 3);
      var _0x37fcbf = _0xc67708[0];
      var _0x231b54 = _0xc67708[1];
      var _0x19af7c = _0xc67708[2];
      if (!_0x37fcbf) {
        return;
      }
      if (_0x37fcbf === _0x559a92) {
        return;
      }
      _0x559a92 = _0x37fcbf;
      var _0x4a8dfb = new _0x58b2dd(GetEntityForwardVector(PlayerPedId()));
      var _0x6b7323 = NetworkGetNetworkIdFromEntity(_0x37fcbf);
      switch (_0x231b54) {
        case 1:
        case 2:
          emitNet("np-admin:telekinesis", _0x6b7323, _0x4a8dfb);
          break;
      }
    });
    function _0x434748() {
      return _0x75818e.apply(this, arguments);
    }
    function _0x75818e() {
      _0x75818e = _0x308197(function() {
        return _0x558266(this, function(_0x2706bb) {
          switch (_0x2706bb.label) {
            case 0:
              return [4, _0x30099a()];
            case 1:
              _0x2706bb.sent();
              _0x13e86b();
              return [2];
          }
        });
      });
      return _0x75818e.apply(this, arguments);
    }
    ;
    var _0x1e210e = new _0x49cfb9(function() {
    }, 0, "tick");
    function _0x2389bc() {
    }
    var _0x413e63 = [];
    _0x1e210e.addHook("active", function() {
      var _0x5195cf = true;
      var _0x53615f = false;
      var _0x4b286b = void 0;
      try {
        for (var _0xa9c568 = _0x413e63[Symbol.iterator](), _0x3e5dfb; !(_0x5195cf = (_0x3e5dfb = _0xa9c568.next()).done); _0x5195cf = true) {
          var _0x5bb889 = _0x3e5dfb.value;
          NetworkConcealPlayer(_0x5bb889, true, false);
        }
      } catch (_0x45bcb4) {
        _0x53615f = true;
        _0x4b286b = _0x45bcb4;
      } finally {
        try {
          if (!_0x5195cf && _0xa9c568.return != null) {
            _0xa9c568.return();
          }
        } finally {
          if (_0x53615f) {
            throw _0x4b286b;
          }
        }
      }
      if (_0x413e63.length === 0) {
        _0x1e210e.stop();
      }
    });
    _0x154c38.RegisterStatebagChangeHandler("onlyYouCanSeeMe", false, false, function(_0x4e35f9, _0x21109a, _0x368dff) {
      if (_0x368dff.sender === GetPlayerServerId(PlayerId())) {
        return;
      }
      var _0x1c177d = GetPlayerFromServerId(_0x368dff.sender);
      if (_0x368dff.target === -1) {
        NetworkConcealPlayer(_0x1c177d, false, false);
        var _0x478ae9 = _0x413e63.indexOf(_0x1c177d);
        if (_0x478ae9 > -1) {
          _0x413e63.splice(_0x478ae9, 1);
        }
        return;
      }
      if (GetPlayerServerId(PlayerId()) === _0x368dff.target) {
        var _0x1b7fbf = _0x413e63.indexOf(_0x1c177d);
        if (_0x1b7fbf > -1) {
          _0x413e63.splice(_0x1b7fbf, 1);
        }
        return;
      }
      _0x413e63.push(_0x1c177d);
      NetworkConcealPlayer(_0x1c177d, true, false);
      _0x1e210e.start();
    });
    RegisterCommand("misc:halloween:onlyYouCanSeeMe", function(_0x3db2e9, _0x4b6ce0) {
      var _0x2dedd4 = parseInt(_0x4b6ce0[0]);
      _0x539aaf.emitNet("misc:halloween:onlyYouCanSeeMe", _0x2dedd4);
    }, false);
    RegisterCommand("misc:halloween:onlyYouCanSeeMe:clear", function(_0x76ed17, _0x24ddf7) {
      _0x539aaf.emitNet("misc:halloween:onlyYouCanSeeMe:clear");
    }, false);
    ;
    function _0x18ce50(_0x3f6095, _0x408d8e) {
      if (_0x408d8e == null || _0x408d8e > _0x3f6095.length) {
        _0x408d8e = _0x3f6095.length;
      }
      for (var _0x502f54 = 0, _0x1397b5 = new Array(_0x408d8e); _0x502f54 < _0x408d8e; _0x502f54++) {
        _0x1397b5[_0x502f54] = _0x3f6095[_0x502f54];
      }
      return _0x1397b5;
    }
    function _0x1175b6(_0x4eb3a2) {
      if (Array.isArray(_0x4eb3a2)) {
        return _0x4eb3a2;
      }
    }
    function _0x96d58c(_0x12e9b3, _0x21220c, _0x203092, _0x1af177, _0x39052f, _0x1fe71e, _0x17c386) {
      try {
        var _0x207734 = _0x12e9b3[_0x1fe71e](_0x17c386);
        var _0x189662 = _0x207734.value;
      } catch (_0x4a4578) {
        _0x203092(_0x4a4578);
        return;
      }
      if (_0x207734.done) {
        _0x21220c(_0x189662);
      } else {
        Promise.resolve(_0x189662).then(_0x1af177, _0x39052f);
      }
    }
    function _0x18793e(_0x22529) {
      return function() {
        var _0x316daf = this;
        var _0x37d517 = arguments;
        return new Promise(function(_0x52289a, _0x52b8ba) {
          var _0x19b8d4 = _0x22529.apply(_0x316daf, _0x37d517);
          function _0x567f7a(_0x4b36d9) {
            _0x96d58c(_0x19b8d4, _0x52289a, _0x52b8ba, _0x567f7a, _0x238f80, "next", _0x4b36d9);
          }
          function _0x238f80(_0x2c1242) {
            _0x96d58c(_0x19b8d4, _0x52289a, _0x52b8ba, _0x567f7a, _0x238f80, "throw", _0x2c1242);
          }
          _0x567f7a(void 0);
        });
      };
    }
    function _0x769298(_0x179658, _0x56699b) {
      var _0x6764b8 = _0x179658 == null ? null : typeof Symbol !== "undefined" && _0x179658[Symbol.iterator] || _0x179658["@@iterator"];
      if (_0x6764b8 == null) {
        return;
      }
      var _0x3a7e8a = [];
      var _0x16bbe5 = true;
      var _0x4b9337 = false;
      var _0x87e90d;
      var _0x48f6ef;
      try {
        for (_0x6764b8 = _0x6764b8.call(_0x179658); !(_0x16bbe5 = (_0x87e90d = _0x6764b8.next()).done); _0x16bbe5 = true) {
          _0x3a7e8a.push(_0x87e90d.value);
          if (_0x56699b && _0x3a7e8a.length === _0x56699b) {
            break;
          }
        }
      } catch (_0x4c0ad7) {
        _0x4b9337 = true;
        _0x48f6ef = _0x4c0ad7;
      } finally {
        try {
          if (!_0x16bbe5 && _0x6764b8.return != null) {
            _0x6764b8.return();
          }
        } finally {
          if (_0x4b9337) {
            throw _0x48f6ef;
          }
        }
      }
      return _0x3a7e8a;
    }
    function _0x3d12ab() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0x5948e8(_0x276e8c, _0x1bec2c) {
      return _0x1175b6(_0x276e8c) || _0x769298(_0x276e8c, _0x1bec2c) || _0x572198(_0x276e8c, _0x1bec2c) || _0x3d12ab();
    }
    function _0x287cf3(_0x416663) {
      "@swc/helpers - typeof";
      if (_0x416663 && typeof Symbol !== "undefined" && _0x416663.constructor === Symbol) {
        return "symbol";
      } else {
        return typeof _0x416663;
      }
    }
    function _0x572198(_0x318d67, _0x52bceb) {
      if (!_0x318d67) {
        return;
      }
      if (typeof _0x318d67 === "string") {
        return _0x18ce50(_0x318d67, _0x52bceb);
      }
      var _0x4991fc = Object.prototype.toString.call(_0x318d67).slice(8, -1);
      if (_0x4991fc === "Object" && _0x318d67.constructor) {
        _0x4991fc = _0x318d67.constructor.name;
      }
      if (_0x4991fc === "Map" || _0x4991fc === "Set") {
        return Array.from(_0x4991fc);
      }
      if (_0x4991fc === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x4991fc)) {
        return _0x18ce50(_0x318d67, _0x52bceb);
      }
    }
    function _0x44fa5a(_0x1a2993, _0x110182) {
      var _0x148b4b;
      var _0x5115b0;
      var _0x61d0c2;
      var _0x110f5b;
      var _0x516f4c = {
        label: 0,
        sent: function() {
          if (_0x61d0c2[0] & 1) {
            throw _0x61d0c2[1];
          }
          return _0x61d0c2[1];
        },
        trys: [],
        ops: []
      };
      _0x110f5b = {
        next: _0x18feba(0),
        throw: _0x18feba(1),
        return: _0x18feba(2)
      };
      if (typeof Symbol === "function") {
        _0x110f5b[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x110f5b;
      function _0x18feba(_0x246221) {
        return function(_0x16a6f0) {
          return _0x56a72c([_0x246221, _0x16a6f0]);
        };
      }
      function _0x56a72c(_0x2e1d38) {
        if (_0x148b4b) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x516f4c) {
          try {
            _0x148b4b = 1;
            if (_0x5115b0 && (_0x61d0c2 = _0x2e1d38[0] & 2 ? _0x5115b0.return : _0x2e1d38[0] ? _0x5115b0.throw || ((_0x61d0c2 = _0x5115b0.return) && _0x61d0c2.call(_0x5115b0), 0) : _0x5115b0.next) && !(_0x61d0c2 = _0x61d0c2.call(_0x5115b0, _0x2e1d38[1])).done) {
              return _0x61d0c2;
            }
            _0x5115b0 = 0;
            if (_0x61d0c2) {
              _0x2e1d38 = [_0x2e1d38[0] & 2, _0x61d0c2.value];
            }
            switch (_0x2e1d38[0]) {
              case 0:
              case 1:
                _0x61d0c2 = _0x2e1d38;
                break;
              case 4:
                _0x516f4c.label++;
                return {
                  value: _0x2e1d38[1],
                  done: false
                };
              case 5:
                _0x516f4c.label++;
                _0x5115b0 = _0x2e1d38[1];
                _0x2e1d38 = [0];
                continue;
              case 7:
                _0x2e1d38 = _0x516f4c.ops.pop();
                _0x516f4c.trys.pop();
                continue;
              default:
                if (!(_0x61d0c2 = _0x516f4c.trys, _0x61d0c2 = _0x61d0c2.length > 0 && _0x61d0c2[_0x61d0c2.length - 1]) && (_0x2e1d38[0] === 6 || _0x2e1d38[0] === 2)) {
                  _0x516f4c = 0;
                  continue;
                }
                if (_0x2e1d38[0] === 3 && (!_0x61d0c2 || _0x2e1d38[1] > _0x61d0c2[0] && _0x2e1d38[1] < _0x61d0c2[3])) {
                  _0x516f4c.label = _0x2e1d38[1];
                  break;
                }
                if (_0x2e1d38[0] === 6 && _0x516f4c.label < _0x61d0c2[1]) {
                  _0x516f4c.label = _0x61d0c2[1];
                  _0x61d0c2 = _0x2e1d38;
                  break;
                }
                if (_0x61d0c2 && _0x516f4c.label < _0x61d0c2[2]) {
                  _0x516f4c.label = _0x61d0c2[2];
                  _0x516f4c.ops.push(_0x2e1d38);
                  break;
                }
                if (_0x61d0c2[2]) {
                  _0x516f4c.ops.pop();
                }
                _0x516f4c.trys.pop();
                continue;
            }
            _0x2e1d38 = _0x110182.call(_0x1a2993, _0x516f4c);
          } catch (_0x2f33db) {
            _0x2e1d38 = [6, _0x2f33db];
            _0x5115b0 = 0;
          } finally {
            _0x148b4b = _0x61d0c2 = 0;
          }
        }
        if (_0x2e1d38[0] & 5) {
          throw _0x2e1d38[1];
        }
        var _0x86d0fb = {
          value: _0x2e1d38[0] ? _0x2e1d38[1] : void 0,
          done: true
        };
        return _0x86d0fb;
      }
    }
    function _0x5e498f(_0x288b2e) {
      var _0x1abc09 = typeof Symbol === "function" && Symbol.iterator;
      var _0xd624ed = _0x1abc09 && _0x288b2e[_0x1abc09];
      var _0xe4d62a = 0;
      if (_0xd624ed) {
        return _0xd624ed.call(_0x288b2e);
      }
      if (_0x288b2e && typeof _0x288b2e.length === "number") {
        return {
          next: function() {
            if (_0x288b2e && _0xe4d62a >= _0x288b2e.length) {
              _0x288b2e = void 0;
            }
            var _0x23b702 = {
              value: _0x288b2e && _0x288b2e[_0xe4d62a++],
              done: !_0x288b2e
            };
            return _0x23b702;
          }
        };
      }
      throw new TypeError(_0x1abc09 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    var _0x50d5a6 = "BeastLaunch";
    var _0x3b0067 = new _0x49cfb9(function() {
    }, 1, "tick");
    var _0x5277b2 = /* @__PURE__ */ new Map();
    var _0x4c8c8e = null;
    var _0x13b58b = {
      zombies: {
        models: ["g_m_m_zombie_01", "np_zombie", "mp_f_deadhooker"],
        point: true
      },
      rats: {
        models: ["a_c_rat"]
      },
      "4headsnightmare": {
        models: ["mp_s_m_armoured_01"]
      }
    };
    RegisterCommand("misc:halloween:crazy", (function() {
      var _0x25ecfb = _0x18793e(function(_0x3604e4, _0x4de691) {
        var _0x4fe7a7;
        var _0x47804d;
        var _0x214d57;
        var _0x5bd3a1;
        return _0x44fa5a(this, function(_0x72c4fa) {
          switch (_0x72c4fa.label) {
            case 0:
              return [4, _0x38f759.execute("misc:zombie:isAllowed")];
            case 1:
              if (_0x72c4fa.sent() === false) {
                console.log("[Zombie] You are not permitted to spawn zombies.");
                return [2];
              }
              _0x4fe7a7 = parseInt(_0x4de691[0]);
              _0x47804d = _0x4de691[1] === "1" || _0x4de691[1] === "true";
              _0x214d57 = parseInt(_0x4de691[2]) || 5;
              _0x5bd3a1 = _0x4de691[3] in _0x13b58b ? _0x4de691[3] : "zombies";
              _0x539aaf.emitNet("misc:zombies:crazy", _0x4fe7a7, _0x47804d, _0x214d57, _0x5bd3a1);
              return [2];
          }
        });
      });
      return function(_0x2de575, _0x32f200) {
        return _0x25ecfb.apply(this, arguments);
      };
    })(), false);
    _0x539aaf.onNet("misc:halloween:crazy", function(_0x2acb2d, _0x410f12, _0x50668d) {
      if (_0x2acb2d) {
        _0x3b0067.data.amountOfPeds = _0x410f12;
        _0x3b0067.data.type = _0x50668d;
        _0x3b0067.data.typeConfigurationEntry = _0x13b58b[_0x50668d];
        if (_0x50668d === "spiders") {
          var _0x18d13b = [{
            icon: "thumbs-up",
            title: "I am not afraid of spiders.",
            action: "misc:halloween:spiderFear",
            key: {
              afraid: false
            }
          }, {
            icon: "thumbs-down",
            title: "I am terrified of spiders!",
            action: "misc:halloween:spiderFear",
            key: {
              afraid: true
            }
          }];
          _0x27d38c.Sync["np-ui"].showContextMenu(_0x18d13b);
        } else {
          _0x3b0067.start();
        }
      } else {
        _0x3b0067.data.amountOfPeds = 0;
        _0x3b0067.stop();
      }
    });
    _0x366910.RegisterUICallback("misc:halloween:spiderFear", (function() {
      var _0x5b8272 = _0x18793e(function(_0x50d30a, _0x1a19d3) {
        var _0x6e5c47;
        return _0x44fa5a(this, function(_0x3593d3) {
          _0x1a19d3({
            data: "success",
            meta: {
              ok: true,
              message: ""
            }
          });
          _0x6e5c47 = _0x50d30a.key.afraid;
          if (!_0x6e5c47) {
            _0x3b0067.start();
          } else {
            console.log("Player is afraid of spiders, not starting crazyShit thread.");
          }
          return [2];
        });
      });
      return function(_0x1d7cfd, _0x14ce18) {
        return _0x5b8272.apply(this, arguments);
      };
    })());
    function _0x171f82() {
      if (_0x4c8c8e === null) {
        var _0x1e9f45 = _0x5948e8(AddRelationshipGroup("HALLOWEEN_ZOMBIES"), 1);
        var _0x7091a2 = _0x1e9f45[0];
        _0x4c8c8e = _0x7091a2;
        SetRelationshipBetweenGroups(0, _0x4c8c8e, _0x4c8c8e);
        SetRelationshipBetweenGroups(5, _0x4c8c8e, GetHashKey("PLAYER"));
        SetRelationshipBetweenGroups(5, GetHashKey("PLAYER"), _0x4c8c8e);
      }
      return _0x4c8c8e;
    }
    _0x3b0067.addHook("preStart", _0x18793e(function() {
      var _0x799dbe;
      var _0x44f6be;
      var _0x38fa7b;
      var _0x5bb50e;
      var _0x3988ba;
      var _0x39578d;
      return _0x44fa5a(this, function(_0x42b41b) {
        switch (_0x42b41b.label) {
          case 0:
            _0x799dbe = this;
            _0x44f6be = function(_0x352728) {
              var _0x1685f6;
              var _0x11c708;
              var _0x1d613f;
              var _0x4fbb66;
              var _0x3beda1;
              var _0x3de384;
              var _0x54801e;
              return _0x44fa5a(this, function(_0x25bb3d) {
                switch (_0x25bb3d.label) {
                  case 0:
                    console.log(_0x799dbe.data.typeConfigurationEntry);
                    _0x1685f6 = _0x799dbe.data.typeConfigurationEntry.models.length > 1 ? _0x799dbe.data.typeConfigurationEntry.models[Math.floor(Math.random() * _0x799dbe.data.typeConfigurationEntry.models.length)] : _0x799dbe.data.typeConfigurationEntry.models[0];
                    console.log(_0x1685f6);
                    _0x11c708 = GetHashKey(_0x1685f6);
                    RequestModel(_0x11c708);
                    return [4, _0x151c5c.loadModel(_0x11c708)];
                  case 1:
                    _0x25bb3d.sent();
                    if (!HasModelLoaded(_0x11c708)) {
                      var _0x1dc87a = {
                        v: void 0
                      };
                      return [2, _0x1dc87a];
                    }
                    _0x1d613f = Math.random() * 360;
                    _0x4fbb66 = function(_0x382f4b) {
                      var _0x411170 = _0x5948e8(GetEntityCoords(PlayerPedId(), true), 3);
                      var _0x50f71d = _0x411170[0];
                      var _0x155dd6 = _0x411170[1];
                      var _0x21285c = _0x411170[2];
                      var _0x179b55 = Math.random() * Math.PI * 2;
                      var _0x222968 = _0x382f4b * Math.sqrt(Math.random());
                      var _0x3a4145 = _0x50f71d + _0x222968 * Math.cos(_0x179b55);
                      var _0x18d0e9 = _0x155dd6 + _0x222968 * Math.sin(_0x179b55);
                      var _0x5ca97f = _0x5948e8(GetGroundZFor_3dCoord(_0x3a4145 + 25, _0x18d0e9 + 25, _0x21285c, false), 2);
                      var _0x28208a = _0x5ca97f[0];
                      var _0x4f9ac0 = _0x5ca97f[1];
                      if (_0x28208a) {
                        return new _0x58b2dd(_0x3a4145, _0x18d0e9, _0x4f9ac0);
                      } else {
                        return _0x4fbb66(_0x382f4b);
                      }
                    };
                    _0x3beda1 = _0x4fbb66(100);
                    _0x3de384 = CreatePed(4, _0x11c708, _0x3beda1.x, _0x3beda1.y, _0x3beda1.z, _0x1d613f, false, true);
                    if (!_0x3de384 || _0x3de384 === 0) {
                      SetModelAsNoLongerNeeded(_0x11c708);
                      var _0x5e4ba2 = {
                        v: void 0
                      };
                      return [2, _0x5e4ba2];
                    }
                    SetEntityAsMissionEntity(_0x3de384, true, true);
                    SetPedDropsWeaponsWhenDead(_0x3de384, false);
                    DecorSetBool(_0x3de384, "ScriptedPed", true);
                    SetEntityInvincible(_0x3de384, true);
                    SetBlockingOfNonTemporaryEvents(_0x3de384, true);
                    SetModelAsNoLongerNeeded(_0x11c708);
                    SetPedCombatAbility(_0x3de384, 100);
                    SetPedCombatMovement(_0x3de384, 2);
                    SetPedCombatRange(_0x3de384, 0);
                    SetPedCombatAttributes(_0x3de384, 0, false);
                    SetPedCombatAttributes(_0x3de384, 1, false);
                    SetPedCombatAttributes(_0x3de384, 2, false);
                    SetPedCombatAttributes(_0x3de384, 5, true);
                    SetPedCombatAttributes(_0x3de384, 13, true);
                    SetPedCombatAttributes(_0x3de384, 17, false);
                    SetPedCombatAttributes(_0x3de384, 21, true);
                    SetPedCombatAttributes(_0x3de384, 26, true);
                    SetPedCombatAttributes(_0x3de384, 38, true);
                    SetPedCombatAttributes(_0x3de384, 46, true);
                    SetPedCombatAttributes(_0x3de384, 50, true);
                    SetPedCombatAttributes(_0x3de384, 58, true);
                    SetPedFleeAttributes(_0x3de384, 0, false);
                    SetBlockingOfNonTemporaryEvents(_0x3de384, true);
                    SetPedMeleeCombatLimits(10, 10, 10);
                    _0x54801e = _0x171f82();
                    SetPedRelationshipGroupHash(_0x3de384, _0x54801e);
                    SetEntityCanBeDamagedByRelationshipGroup(PlayerPedId(), false, _0x54801e);
                    SetPedAccuracy(_0x3de384, 100);
                    SetPedConfigFlag(_0x3de384, 39, true);
                    SetPedConfigFlag(_0x3de384, 118, false);
                    SetPedConfigFlag(_0x3de384, 169, true);
                    SetPedConfigFlag(_0x3de384, 208, true);
                    SetPedConfigFlag(_0x3de384, 279, false);
                    SetPedConfigFlag(_0x3de384, 281, true);
                    SetPedConfigFlag(_0x3de384, 326, true);
                    SetPedConfigFlag(_0x3de384, 430, true);
                    DisablePedPainAudio(_0x3de384, true);
                    SetPedSuffersCriticalHits(_0x3de384, false);
                    if (!_0x799dbe.data.typeConfigurationEntry?.point) {
                      return [3, 3];
                    }
                    return [4, _0x45e107(_0x3de384)];
                  case 2:
                    _0x25bb3d.sent();
                    _0x25bb3d.label = 3;
                  case 3:
                    _0x799dbe.data.zombies[_0x3de384] = {
                      entity: _0x3de384,
                      isInCombat: false,
                      point: _0x799dbe.data.typeConfigurationEntry?.point || false
                    };
                    return [2];
                }
              });
            };
            this.data.zombies = {};
            AnimpostfxPlay(_0x50d5a6, 6e4, true);
            TriggerEvent("InteractSound_CL:PlayOnOne", "youarenothallucinating", 0.6);
            console.log("Starting crazyShit thread with", this.data.amountOfPeds, "peds of type", this.data.type);
            _0x38fa7b = 0;
            _0x42b41b.label = 1;
          case 1:
            if (!(_0x38fa7b < _0x3b0067.data.amountOfPeds)) {
              return [3, 4];
            }
            return [5, _0x5e498f(_0x44f6be(_0x38fa7b))];
          case 2:
            _0x5bb50e = _0x42b41b.sent();
            if (_0x287cf3(_0x5bb50e) === "object") {
              return [2, _0x5bb50e.v];
            }
            _0x42b41b.label = 3;
          case 3:
            _0x38fa7b++;
            return [3, 1];
          case 4:
            return [4, _0x151c5c.loadAnim("anim@mp_point")];
          case 5:
            _0x42b41b.sent();
            SetAiMeleeWeaponDamageModifier(2);
            _0x3988ba = new _0x58b2dd(GetEntityCoords(PlayerPedId()));
            _0x3988ba.z += 30;
            return [4, _0x27d38c.Sync["np-fx"].PlayCoordSound(_0x3988ba, "zombie_king", "DLC_NIKEZ_EVENTS", 0, "EVENTS_HALLOWEEN_01", 1e4)];
          case 6:
            _0x39578d = _0x42b41b.sent();
            setTimeout(function() {
              _0x27d38c.Sync["np-fx"].StopCoordSound(_0x39578d);
            }, 5e3);
            if (GetVehiclePedIsIn(PlayerPedId(), false) !== 0) {
              TaskLeaveAnyVehicle(PlayerPedId(), 0, 0);
            }
            this.setNextTick("zombie_ragdoll", 1200);
            return [2];
        }
      });
    }));
    _0x3b0067.addHook("afterStop", function() {
      var _0x54937c = Object.keys(_0x3b0067.data.zombies).map(function(_0x2c66f5) {
        return _0x3b0067.data.zombies[_0x2c66f5].entity;
      });
      var _0x506434 = true;
      var _0x9ead38 = false;
      var _0x37c099 = void 0;
      try {
        for (var _0x4f6081 = _0x54937c[Symbol.iterator](), _0x514e68; !(_0x506434 = (_0x514e68 = _0x4f6081.next()).done); _0x506434 = true) {
          var _0x3577ee = _0x514e68.value;
          if (DoesEntityExist(_0x3577ee)) {
            DeletePed(_0x3577ee);
          }
        }
      } catch (_0x4e18d2) {
        _0x9ead38 = true;
        _0x37c099 = _0x4e18d2;
      } finally {
        try {
          if (!_0x506434 && _0x4f6081.return != null) {
            _0x4f6081.return();
          }
        } finally {
          if (_0x9ead38) {
            throw _0x37c099;
          }
        }
      }
      AnimpostfxStop(_0x50d5a6);
      RemoveRelationshipGroup(_0x171f82());
      _0x5277b2.forEach(function(_0x1b7341, _0x584f53) {
        console;
        if (_0x1b7341 && DoesEntityExist(_0x584f53)) {
          SetVehicleDoorsLockedForPlayer(_0x584f53, PlayerId(), false);
        }
      });
      _0x5277b2.clear();
    });
    _0x3b0067.addHook("active", function() {
      var _0xc9c43f = _0x5948e8(globalThis.exports["np-target"].GetEntityPlayerIsLookingAt(5, 0.2, 30, PlayerPedId()), 3);
      var _0x17175b = _0xc9c43f[0];
      var _0x2ae341 = _0xc9c43f[1];
      var _0x3671e3 = _0xc9c43f[2];
      if (_0x17175b) {
        if (_0x2ae341 === 2) {
          var _0x6b3cc2 = _0x17175b;
          if (_0x5277b2.get(_0x6b3cc2)) {
            return;
          }
          _0x5277b2.set(_0x6b3cc2, true);
          SetVehicleDoorsLockedForPlayer(_0x17175b, PlayerId(), true);
        }
      }
      for (var _0x4597bd in this.data.zombies) {
        var _0x13abde = this.data.zombies[_0x4597bd];
        if (!DoesEntityExist(_0x13abde.entity)) {
          continue;
        }
        var _0x270ef7 = PlayerPedId();
        var _0x17af19 = new _0x58b2dd(GetEntityCoords(_0x270ef7)).getDistance(new _0x58b2dd(GetEntityCoords(_0x13abde.entity)));
        if (_0x17af19 > 5) {
          if (this.canTick(`zombie_distance_${_0x13abde.entity}`)) {
            if (_0x13abde.point) {
              if (!IsTaskMoveNetworkActive(_0x13abde.entity)) {
                TaskMoveNetworkByName(_0x13abde.entity, "task_mp_pointing", 0.5, true, "anim@mp_point", 24);
              }
              SetTaskMoveNetworkSignalFloat(_0x13abde.entity, "Pitch", 0.4);
              SetTaskMoveNetworkSignalFloat(_0x13abde.entity, "Heading", 0.5);
              SetTaskMoveNetworkSignalBool(_0x13abde.entity, "isBlocked", false);
              SetTaskMoveNetworkSignalBool(_0x13abde.entity, "isFirstPerson", false);
            }
            TaskGoToEntity(_0x13abde.entity, _0x270ef7, -1, 1, 1e3, 0, 0);
            this.setNextTick(`zombie_distance_${_0x13abde.entity}`, 100);
          }
        } else {
          TaskCombatPed(_0x13abde.entity, _0x270ef7, 256, 16);
        }
      }
    });
    _0x3b0067.addHook("active", function() {
      if (!this.canTick("zombie_ragdoll")) {
        return;
      }
      if (GetVehiclePedIsIn(PlayerPedId(), false) !== 0) {
        TaskLeaveAnyVehicle(PlayerPedId(), 0, 16);
      }
      SetPedToRagdoll(PlayerPedId(), 5e3, 5e3, 0, false, false, false);
      this.setNextTick("zombie_ragdoll", 1200);
    });
    var _0xe56cd9 = (function() {
      var _0x5d4eff = _0x18793e(function() {
        return _0x44fa5a(this, function(_0x5546c5) {
          _0x2389bc();
          return [2];
        });
      });
      return function _0x1a8644() {
        return _0x5d4eff.apply(this, arguments);
      };
    })();
    on("onClientResourceStart", (function() {
      var _0x3694f5 = _0x18793e(function(_0x13e7aa) {
        return _0x44fa5a(this, function(_0x53e8f5) {
          if (_0x13e7aa !== GetCurrentResourceName()) {
            return [2];
          }
          return [2];
        });
      });
      return function(_0x478c10) {
        return _0x3694f5.apply(this, arguments);
      };
    })());
    on("onResourceStop", (function() {
      var _0x4d1e63 = _0x18793e(function(_0x36fd04) {
        return _0x44fa5a(this, function(_0x1f00d3) {
          if (_0x36fd04 !== GetCurrentResourceName()) {
            return [2];
          }
          _0x3b0067.stop();
          AnimpostfxStop(_0x50d5a6);
          SetAiMeleeWeaponDamageModifier(1);
          return [2];
        });
      });
      return function(_0xad21cc) {
        return _0x4d1e63.apply(this, arguments);
      };
    })());
    ;
    function _0x111c75(_0x229f8a, _0x3f873f, _0x41257f, _0x5eb5cd, _0x454a49, _0x1e7468, _0x1f32ed) {
      try {
        var _0xe4defe = _0x229f8a[_0x1e7468](_0x1f32ed);
        var _0x383be7 = _0xe4defe.value;
      } catch (_0x51f2a8) {
        _0x41257f(_0x51f2a8);
        return;
      }
      if (_0xe4defe.done) {
        _0x3f873f(_0x383be7);
      } else {
        Promise.resolve(_0x383be7).then(_0x5eb5cd, _0x454a49);
      }
    }
    function _0x382cf8(_0x401743) {
      return function() {
        var _0x1e468c = this;
        var _0x1184e2 = arguments;
        return new Promise(function(_0x1fd566, _0x3f4a7) {
          var _0x54bb96 = _0x401743.apply(_0x1e468c, _0x1184e2);
          function _0xf93cac(_0x5a9e4c) {
            _0x111c75(_0x54bb96, _0x1fd566, _0x3f4a7, _0xf93cac, _0x14ebdf, "next", _0x5a9e4c);
          }
          function _0x14ebdf(_0x2d2f86) {
            _0x111c75(_0x54bb96, _0x1fd566, _0x3f4a7, _0xf93cac, _0x14ebdf, "throw", _0x2d2f86);
          }
          _0xf93cac(void 0);
        });
      };
    }
    function _0x5bb191(_0x120daa, _0x4bd73b) {
      var _0x5817a9;
      var _0x243c77;
      var _0x3bd60d;
      var _0x361aac;
      var _0x563383 = {
        label: 0,
        sent: function() {
          if (_0x3bd60d[0] & 1) {
            throw _0x3bd60d[1];
          }
          return _0x3bd60d[1];
        },
        trys: [],
        ops: []
      };
      _0x361aac = {
        next: _0x30e9aa(0),
        throw: _0x30e9aa(1),
        return: _0x30e9aa(2)
      };
      if (typeof Symbol === "function") {
        _0x361aac[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x361aac;
      function _0x30e9aa(_0x440df1) {
        return function(_0x1b96ca) {
          return _0x3c4abc([_0x440df1, _0x1b96ca]);
        };
      }
      function _0x3c4abc(_0x2a54d5) {
        if (_0x5817a9) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x563383) {
          try {
            _0x5817a9 = 1;
            if (_0x243c77 && (_0x3bd60d = _0x2a54d5[0] & 2 ? _0x243c77.return : _0x2a54d5[0] ? _0x243c77.throw || ((_0x3bd60d = _0x243c77.return) && _0x3bd60d.call(_0x243c77), 0) : _0x243c77.next) && !(_0x3bd60d = _0x3bd60d.call(_0x243c77, _0x2a54d5[1])).done) {
              return _0x3bd60d;
            }
            _0x243c77 = 0;
            if (_0x3bd60d) {
              _0x2a54d5 = [_0x2a54d5[0] & 2, _0x3bd60d.value];
            }
            switch (_0x2a54d5[0]) {
              case 0:
              case 1:
                _0x3bd60d = _0x2a54d5;
                break;
              case 4:
                _0x563383.label++;
                return {
                  value: _0x2a54d5[1],
                  done: false
                };
              case 5:
                _0x563383.label++;
                _0x243c77 = _0x2a54d5[1];
                _0x2a54d5 = [0];
                continue;
              case 7:
                _0x2a54d5 = _0x563383.ops.pop();
                _0x563383.trys.pop();
                continue;
              default:
                if (!(_0x3bd60d = _0x563383.trys, _0x3bd60d = _0x3bd60d.length > 0 && _0x3bd60d[_0x3bd60d.length - 1]) && (_0x2a54d5[0] === 6 || _0x2a54d5[0] === 2)) {
                  _0x563383 = 0;
                  continue;
                }
                if (_0x2a54d5[0] === 3 && (!_0x3bd60d || _0x2a54d5[1] > _0x3bd60d[0] && _0x2a54d5[1] < _0x3bd60d[3])) {
                  _0x563383.label = _0x2a54d5[1];
                  break;
                }
                if (_0x2a54d5[0] === 6 && _0x563383.label < _0x3bd60d[1]) {
                  _0x563383.label = _0x3bd60d[1];
                  _0x3bd60d = _0x2a54d5;
                  break;
                }
                if (_0x3bd60d && _0x563383.label < _0x3bd60d[2]) {
                  _0x563383.label = _0x3bd60d[2];
                  _0x563383.ops.push(_0x2a54d5);
                  break;
                }
                if (_0x3bd60d[2]) {
                  _0x563383.ops.pop();
                }
                _0x563383.trys.pop();
                continue;
            }
            _0x2a54d5 = _0x4bd73b.call(_0x120daa, _0x563383);
          } catch (_0x564496) {
            _0x2a54d5 = [6, _0x564496];
            _0x243c77 = 0;
          } finally {
            _0x5817a9 = _0x3bd60d = 0;
          }
        }
        if (_0x2a54d5[0] & 5) {
          throw _0x2a54d5[1];
        }
        var _0x1c0660 = {
          value: _0x2a54d5[0] ? _0x2a54d5[1] : void 0,
          done: true
        };
        return _0x1c0660;
      }
    }
    var _0x487ee3 = 10;
    function _0xb86892() {
      _0x38f759.register("misc:f1Repair:useRepairKit", _0x382cf8(function() {
        var _0x15d7ca;
        var _0x135cb1;
        var _0x413ce7;
        var _0xa2bbf2;
        var _0x2ad4ab;
        var _0x59d639;
        var _0x3c1a67;
        var _0x1c25bb;
        var _0x19bef3;
        return _0x5bb191(this, function(_0x3c2cbb) {
          switch (_0x3c2cbb.label) {
            case 0:
              _0x135cb1 = globalThis.exports["np-target"].GetCurrentEntity();
              if (!_0x135cb1 || !IsEntityAVehicle(_0x135cb1)) {
                emit("DoLongHudText", "You must be looking at a vehicle.", 2);
                return [2, [false, "Not looking at a vehicle"]];
              }
              if ((_0x15d7ca = globalThis.exports["np-flags"]) === null || _0x15d7ca === void 0 ? void 0 : _0x15d7ca.HasVehicleFlag(_0x135cb1, "isScrapVehicle")) {
                emit("DoLongHudText", "The vehicle is beyond repair.", 2);
                return [2, [false, "Vehicle is scrap"]];
              }
              _0x413ce7 = GetEntityCoords(_0x135cb1, false);
              _0xa2bbf2 = PlayerPedId();
              _0x2ad4ab = GetEntityCoords(_0xa2bbf2, false);
              _0x59d639 = Vdist(_0x413ce7[0], _0x413ce7[1], _0x413ce7[2], _0x2ad4ab[0], _0x2ad4ab[1], _0x2ad4ab[2]);
              if (_0x59d639 > _0x487ee3) {
                emit("DoLongHudText", `Move closer to the vehicle (within ${_0x487ee3}m).`, 2);
                return [2, [false, "Too far from vehicle"]];
              }
              TaskTurnPedToFaceEntity(_0xa2bbf2, _0x135cb1, 1e3);
              return [4, new Promise(function(_0x229830) {
                return setTimeout(_0x229830, 500);
              })];
            case 1:
              _0x3c2cbb.sent();
              RequestAnimDict("mini@repair");
              _0x3c2cbb.label = 2;
            case 2:
              if (HasAnimDictLoaded("mini@repair")) {
                return [3, 4];
              }
              return [4, new Promise(function(_0x13cbd9) {
                return setTimeout(_0x13cbd9, 100);
              })];
            case 3:
              _0x3c2cbb.sent();
              return [3, 2];
            case 4:
              TaskPlayAnim(_0xa2bbf2, "mini@repair", "fixing_a_player", 8, -8, -1, 1, 0, false, false, false);
              return [4, _0x27d38c.Sync.skillchecks.taskBarSkill(1e3, 5, false, false, false)];
            case 5:
              _0x3c1a67 = _0x3c2cbb.sent();
              if (_0x3c1a67 === 100) {
                return [3, 7];
              }
              return [4, new Promise(function(_0x35d48f) {
                return setTimeout(_0x35d48f, 4200);
              })];
            case 6:
              _0x3c2cbb.sent();
              emit("DoLongHudText", "Slow repair completed...", 2);
              return [3, 9];
            case 7:
              return [4, new Promise(function(_0x420ff6) {
                return setTimeout(_0x420ff6, 2200);
              })];
            case 8:
              _0x3c2cbb.sent();
              emit("DoLongHudText", "Perfect pit stop!", 1);
              _0x3c2cbb.label = 9;
            case 9:
              ClearPedTasks(_0xa2bbf2);
              _0x1c25bb = globalThis.exports["np-sync"].SyncedExecution;
              _0x1c25bb("SetVehicleEngineHealth", _0x135cb1, 1e3);
              _0x1c25bb("SetVehicleBodyHealth", _0x135cb1, 1e3);
              _0x1c25bb("SetVehicleDeformationFixed", _0x135cb1);
              _0x1c25bb("SetVehicleFixed", _0x135cb1);
              _0x1c25bb("SetVehicleFuelLevel", _0x135cb1, 100);
              _0x19bef3 = NetworkGetNetworkIdFromEntity(_0x135cb1);
              return [4, _0x38f759.execute("misc:f1Repair:setFuel", _0x19bef3, 100)];
            case 10:
              _0x3c2cbb.sent();
              return [2, [true, "Vehicle repaired and refueled"]];
          }
        });
      }));
    }
    ;
    function _0x405ddc(_0x169297, _0x59b1c7, _0x203be5, _0x5b77c0, _0x201871, _0xfc29e8, _0x26408c) {
      try {
        var _0x12ab6d = _0x169297[_0xfc29e8](_0x26408c);
        var _0x54ce87 = _0x12ab6d.value;
      } catch (_0x108063) {
        _0x203be5(_0x108063);
        return;
      }
      if (_0x12ab6d.done) {
        _0x59b1c7(_0x54ce87);
      } else {
        Promise.resolve(_0x54ce87).then(_0x5b77c0, _0x201871);
      }
    }
    function _0x3e824b(_0x2c6037) {
      return function() {
        var _0x4d0ed6 = this;
        var _0x579b0a = arguments;
        return new Promise(function(_0x101501, _0x3d6dce) {
          var _0x70e360 = _0x2c6037.apply(_0x4d0ed6, _0x579b0a);
          function _0x514edd(_0x16d3ff) {
            _0x405ddc(_0x70e360, _0x101501, _0x3d6dce, _0x514edd, _0x11cb72, "next", _0x16d3ff);
          }
          function _0x11cb72(_0x1612a6) {
            _0x405ddc(_0x70e360, _0x101501, _0x3d6dce, _0x514edd, _0x11cb72, "throw", _0x1612a6);
          }
          _0x514edd(void 0);
        });
      };
    }
    function _0x3b9870(_0x5b1989, _0x4886e6) {
      var _0xc69ac1;
      var _0x466d93;
      var _0x1e86f2;
      var _0xa102f1;
      var _0x58754d = {
        label: 0,
        sent: function() {
          if (_0x1e86f2[0] & 1) {
            throw _0x1e86f2[1];
          }
          return _0x1e86f2[1];
        },
        trys: [],
        ops: []
      };
      _0xa102f1 = {
        next: _0x3ee804(0),
        throw: _0x3ee804(1),
        return: _0x3ee804(2)
      };
      if (typeof Symbol === "function") {
        _0xa102f1[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0xa102f1;
      function _0x3ee804(_0x15cbc3) {
        return function(_0xf8a211) {
          return _0x2a965e([_0x15cbc3, _0xf8a211]);
        };
      }
      function _0x2a965e(_0x39f28d) {
        if (_0xc69ac1) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x58754d) {
          try {
            _0xc69ac1 = 1;
            if (_0x466d93 && (_0x1e86f2 = _0x39f28d[0] & 2 ? _0x466d93.return : _0x39f28d[0] ? _0x466d93.throw || ((_0x1e86f2 = _0x466d93.return) && _0x1e86f2.call(_0x466d93), 0) : _0x466d93.next) && !(_0x1e86f2 = _0x1e86f2.call(_0x466d93, _0x39f28d[1])).done) {
              return _0x1e86f2;
            }
            _0x466d93 = 0;
            if (_0x1e86f2) {
              _0x39f28d = [_0x39f28d[0] & 2, _0x1e86f2.value];
            }
            switch (_0x39f28d[0]) {
              case 0:
              case 1:
                _0x1e86f2 = _0x39f28d;
                break;
              case 4:
                _0x58754d.label++;
                return {
                  value: _0x39f28d[1],
                  done: false
                };
              case 5:
                _0x58754d.label++;
                _0x466d93 = _0x39f28d[1];
                _0x39f28d = [0];
                continue;
              case 7:
                _0x39f28d = _0x58754d.ops.pop();
                _0x58754d.trys.pop();
                continue;
              default:
                if (!(_0x1e86f2 = _0x58754d.trys, _0x1e86f2 = _0x1e86f2.length > 0 && _0x1e86f2[_0x1e86f2.length - 1]) && (_0x39f28d[0] === 6 || _0x39f28d[0] === 2)) {
                  _0x58754d = 0;
                  continue;
                }
                if (_0x39f28d[0] === 3 && (!_0x1e86f2 || _0x39f28d[1] > _0x1e86f2[0] && _0x39f28d[1] < _0x1e86f2[3])) {
                  _0x58754d.label = _0x39f28d[1];
                  break;
                }
                if (_0x39f28d[0] === 6 && _0x58754d.label < _0x1e86f2[1]) {
                  _0x58754d.label = _0x1e86f2[1];
                  _0x1e86f2 = _0x39f28d;
                  break;
                }
                if (_0x1e86f2 && _0x58754d.label < _0x1e86f2[2]) {
                  _0x58754d.label = _0x1e86f2[2];
                  _0x58754d.ops.push(_0x39f28d);
                  break;
                }
                if (_0x1e86f2[2]) {
                  _0x58754d.ops.pop();
                }
                _0x58754d.trys.pop();
                continue;
            }
            _0x39f28d = _0x4886e6.call(_0x5b1989, _0x58754d);
          } catch (_0x5389de) {
            _0x39f28d = [6, _0x5389de];
            _0x466d93 = 0;
          } finally {
            _0xc69ac1 = _0x1e86f2 = 0;
          }
        }
        if (_0x39f28d[0] & 5) {
          throw _0x39f28d[1];
        }
        var _0x499f86 = {
          value: _0x39f28d[0] ? _0x39f28d[1] : void 0,
          done: true
        };
        return _0x499f86;
      }
    }
    function _0x3227b0(_0xd65025) {
      if (_0xd65025) {
        emit("pausePopulation", true);
        emit("np-density:disable", false, true);
      } else {
        emit("pausePopulation", false);
        emit("np-density:disable", true, false);
      }
    }
    AddStateBagChangeHandler("npcSpawnsDisabled", "global", function(_0x143388, _0x4f00fa, _0x4175fd) {
      _0x3227b0(_0x4175fd);
    });
    setInterval(function() {
      var _0x4ff0e8 = GlobalState.npcSpawnsDisabled;
      if (_0x4ff0e8) {
        _0x3227b0(_0x4ff0e8);
      }
    }, 5e3);
    RegisterCommand("misc:toggleNPCSpawns", _0x3e824b(function() {
      return _0x3b9870(this, function(_0x3e166b) {
        _0x539aaf.emitNet("misc:misc:toggleNPCSpawns");
        return [2];
      });
    }), false);
    RegisterCommand("misc:setVoiceIntent", (function() {
      var _0x58c586 = _0x3e824b(function(_0x167576, _0x3cc3cb) {
        var _0x3ae978;
        return _0x3b9870(this, function(_0x307cb9) {
          _0x3ae978 = _0x3cc3cb[0];
          if (!_0x27d38c.Sync["np-admin"].IsAdminMode()) {
            console.log("Lol, you are not permitted.");
            return [2];
          }
          if (_0x3ae978 !== "music" && _0x3ae978 !== "speech") {
            console.warn(`[Misc] Invalid voice intent: ${_0x3ae978}`);
            return [2];
          }
          MumbleSetAudioInputIntent(GetHashKey(_0x3ae978));
          return [2];
        });
      });
      return function(_0x35ca87, _0x78b8a1) {
        return _0x58c586.apply(this, arguments);
      };
    })(), false);
    var _0x4afc6e = (function() {
      var _0x521e10 = _0x3e824b(function() {
        return _0x3b9870(this, function(_0x394f90) {
          _0xb86892();
          return [2];
        });
      });
      return function _0x351e68() {
        return _0x521e10.apply(this, arguments);
      };
    })();
    ;
    function _0x3e69ea(_0x2b69e9, _0x10c2f5, _0x3b1bc6, _0x4acf58, _0x53e762, _0x4ed4fc, _0x7ea2ea) {
      try {
        var _0x341c19 = _0x2b69e9[_0x4ed4fc](_0x7ea2ea);
        var _0x258583 = _0x341c19.value;
      } catch (_0x4120f4) {
        _0x3b1bc6(_0x4120f4);
        return;
      }
      if (_0x341c19.done) {
        _0x10c2f5(_0x258583);
      } else {
        Promise.resolve(_0x258583).then(_0x4acf58, _0x53e762);
      }
    }
    function _0x243ea9(_0x53afe1) {
      return function() {
        var _0x4b5b3a = this;
        var _0x374ab1 = arguments;
        return new Promise(function(_0x1f74b2, _0x134017) {
          var _0x4fd94c = _0x53afe1.apply(_0x4b5b3a, _0x374ab1);
          function _0x51a780(_0x59ce40) {
            _0x3e69ea(_0x4fd94c, _0x1f74b2, _0x134017, _0x51a780, _0x4e803a, "next", _0x59ce40);
          }
          function _0x4e803a(_0x47f196) {
            _0x3e69ea(_0x4fd94c, _0x1f74b2, _0x134017, _0x51a780, _0x4e803a, "throw", _0x47f196);
          }
          _0x51a780(void 0);
        });
      };
    }
    function _0x116045(_0x15d702, _0x109fda) {
      var _0x345a79;
      var _0x23425a;
      var _0x116ea9;
      var _0x5d896f;
      var _0x293f48 = {
        label: 0,
        sent: function() {
          if (_0x116ea9[0] & 1) {
            throw _0x116ea9[1];
          }
          return _0x116ea9[1];
        },
        trys: [],
        ops: []
      };
      _0x5d896f = {
        next: _0x3f8d84(0),
        throw: _0x3f8d84(1),
        return: _0x3f8d84(2)
      };
      if (typeof Symbol === "function") {
        _0x5d896f[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x5d896f;
      function _0x3f8d84(_0x2b9895) {
        return function(_0x4b2571) {
          return _0x564cfb([_0x2b9895, _0x4b2571]);
        };
      }
      function _0x564cfb(_0x29422f) {
        if (_0x345a79) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x293f48) {
          try {
            _0x345a79 = 1;
            if (_0x23425a && (_0x116ea9 = _0x29422f[0] & 2 ? _0x23425a.return : _0x29422f[0] ? _0x23425a.throw || ((_0x116ea9 = _0x23425a.return) && _0x116ea9.call(_0x23425a), 0) : _0x23425a.next) && !(_0x116ea9 = _0x116ea9.call(_0x23425a, _0x29422f[1])).done) {
              return _0x116ea9;
            }
            _0x23425a = 0;
            if (_0x116ea9) {
              _0x29422f = [_0x29422f[0] & 2, _0x116ea9.value];
            }
            switch (_0x29422f[0]) {
              case 0:
              case 1:
                _0x116ea9 = _0x29422f;
                break;
              case 4:
                _0x293f48.label++;
                return {
                  value: _0x29422f[1],
                  done: false
                };
              case 5:
                _0x293f48.label++;
                _0x23425a = _0x29422f[1];
                _0x29422f = [0];
                continue;
              case 7:
                _0x29422f = _0x293f48.ops.pop();
                _0x293f48.trys.pop();
                continue;
              default:
                if (!(_0x116ea9 = _0x293f48.trys, _0x116ea9 = _0x116ea9.length > 0 && _0x116ea9[_0x116ea9.length - 1]) && (_0x29422f[0] === 6 || _0x29422f[0] === 2)) {
                  _0x293f48 = 0;
                  continue;
                }
                if (_0x29422f[0] === 3 && (!_0x116ea9 || _0x29422f[1] > _0x116ea9[0] && _0x29422f[1] < _0x116ea9[3])) {
                  _0x293f48.label = _0x29422f[1];
                  break;
                }
                if (_0x29422f[0] === 6 && _0x293f48.label < _0x116ea9[1]) {
                  _0x293f48.label = _0x116ea9[1];
                  _0x116ea9 = _0x29422f;
                  break;
                }
                if (_0x116ea9 && _0x293f48.label < _0x116ea9[2]) {
                  _0x293f48.label = _0x116ea9[2];
                  _0x293f48.ops.push(_0x29422f);
                  break;
                }
                if (_0x116ea9[2]) {
                  _0x293f48.ops.pop();
                }
                _0x293f48.trys.pop();
                continue;
            }
            _0x29422f = _0x109fda.call(_0x15d702, _0x293f48);
          } catch (_0x32b843) {
            _0x29422f = [6, _0x32b843];
            _0x23425a = 0;
          } finally {
            _0x345a79 = _0x116ea9 = 0;
          }
        }
        if (_0x29422f[0] & 5) {
          throw _0x29422f[1];
        }
        var _0x22120c = {
          value: _0x29422f[0] ? _0x29422f[1] : void 0,
          done: true
        };
        return _0x22120c;
      }
    }
    function _0x58d2be() {
      var _0x208789 = {
        id: "glass_box_pickup_opt",
        label: "Pickup",
        eventSDK: "misc:objects:pickupGlassBox",
        parameters: []
      };
      _0x4c27ed.addInteractionByModel("glass_box_pickup", ["np_building_concrete_xl"], [_0x208789], {
        distance: {
          draw: 10,
          use: 10
        },
        isEnabled: (function() {
          var _0xa2bda2 = _0x243ea9(function(_0x2fdb7d) {
            var _0xf8fc0b;
            var _0x1a864b;
            var _0x30b712;
            return _0x116045(this, function(_0x579225) {
              switch (_0x579225.label) {
                case 0:
                  if (!_0x2fdb7d) {
                    return [2, false];
                  }
                  return [4, _0x3b5fd8.HasItem("glass_box")];
                case 1:
                  _0xf8fc0b = _0x579225.sent();
                  _0x1a864b = _0x27d38c.Sync["np-objects"].GetObjectByEntity(_0x2fdb7d);
                  if (!_0x1a864b) {
                    return [2, false];
                  }
                  _0x30b712 = _0x1a864b.data.metadata;
                  return [2, _0xf8fc0b && _0x30b712.isGlassBoxFloor];
              }
            });
          });
          return function(_0x273b90) {
            return _0xa2bda2.apply(this, arguments);
          };
        })(),
        skipLos: true
      });
    }
    _0x539aaf.on("misc:objects:pickupGlassBox", (function() {
      var _0x5eaca1 = _0x243ea9(function(_0x14f3a4, _0x12751f) {
        var _0x1d6ad0;
        var _0x31e5f2;
        var _0x133da3;
        var _0x2ef7bc;
        var _0x4a22e9;
        var _0x2ca3d7;
        var _0x4c01cd;
        var _0x3ef082;
        return _0x116045(this, function(_0x21758a) {
          if (!_0x12751f) {
            return [2];
          }
          _0x1d6ad0 = _0x27d38c.Sync["np-objects"].GetObjectByEntity(_0x12751f);
          if (!_0x1d6ad0) {
            return [2];
          }
          _0x31e5f2 = _0x1d6ad0.data.metadata;
          if (!_0x31e5f2) {
            return [2];
          }
          _0x27d38c.Sync["np-objects"].DeleteObject(_0x1d6ad0.id);
          if (_0x31e5f2.linkedObjects) {
            _0x133da3 = true;
            _0x2ef7bc = false;
            _0x4a22e9 = void 0;
            try {
              for (_0x2ca3d7 = _0x31e5f2.linkedObjects[Symbol.iterator](); !(_0x133da3 = (_0x4c01cd = _0x2ca3d7.next()).done); _0x133da3 = true) {
                _0x3ef082 = _0x4c01cd.value;
                _0x27d38c.Sync["np-objects"].DeleteObject(_0x3ef082);
              }
            } catch (_0x511086) {
              _0x2ef7bc = true;
              _0x4a22e9 = _0x511086;
            } finally {
              try {
                if (!_0x133da3 && _0x2ca3d7.return != null) {
                  _0x2ca3d7.return();
                }
              } finally {
                if (_0x2ef7bc) {
                  throw _0x4a22e9;
                }
              }
            }
          }
          return [2];
        });
      });
      return function(_0x47ed1e, _0x5989a0) {
        return _0x5eaca1.apply(this, arguments);
      };
    })());
    _0x38f759.register("misc:objects:placeGlassBox", _0x243ea9(function() {
      var _0x135756;
      var _0x4349eb;
      var _0x77731;
      var _0x7f7596;
      var _0x387b45;
      return _0x116045(this, function(_0x3d0102) {
        switch (_0x3d0102.label) {
          case 0:
            return [4, _0x27d38c.Sync["np-objects"].PlaceObject("np_building_concrete_xl", {
              allowGroundSnap: false,
              collision: false
            }, function(_0x5672fd, _0x29a9a9, _0x2fd8db) {
              var _0x29bc88 = GetEntityHeading(_0x2fd8db);
              SetEntityRotation(_0x2fd8db, 90, 0, _0x29bc88, 2, true);
              return true;
            })];
          case 1:
            _0x135756 = _0x3d0102.sent();
            if (!_0x135756[0]) {
              return [2, false];
            }
            _0x4349eb = [_0x135756[1].coords.x, _0x135756[1].coords.y, _0x135756[1].coords.z];
            _0x77731 = _0x135756[1].rotation.z;
            var _0x476f50 = {
              x: -1,
              y: 1.82,
              z: 1.82,
              h: 0
            };
            var _0x48d30d = {
              x: 1,
              y: -1.82,
              z: 1.82,
              h: 0
            };
            var _0x9a303 = {
              x: -1,
              y: -1.82,
              z: 1.82,
              h: 0
            };
            var _0x89ee5a = {
              x: 1.82,
              y: -1,
              z: 1.82,
              h: 90
            };
            var _0x69c795 = {
              x: -1.82,
              y: 1,
              z: 1.82,
              h: 90
            };
            var _0x2ddf15 = {
              x: -1.82,
              y: -1,
              z: 1.82,
              h: 90
            };
            _0x7f7596 = [{
              x: 1,
              y: 1.82,
              z: 1.82,
              h: 0
            }, _0x476f50, _0x48d30d, _0x9a303, {
              x: 1.82,
              y: 1,
              z: 1.82,
              h: 90
            }, _0x89ee5a, _0x69c795, _0x2ddf15];
            _0x387b45 = _0x7f7596.map(function(_0x1b0399) {
              var _0x778545 = GetObjectOffsetFromCoords(_0x4349eb[0] + 0, _0x4349eb[1] + 0, _0x4349eb[2] + 0, _0x77731, _0x1b0399.x, _0x1b0399.y, _0x1b0399.z);
              var _0x1d8856 = [0, 0, _0x77731 + _0x1b0399.h];
              var _0x4af3bf = {
                coords: _0x778545,
                rotation: _0x1d8856
              };
              return _0x4af3bf;
            });
            var _0x412dcc = {
              coords: _0x4349eb,
              rotation: [90, 0, _0x77731]
            };
            _0x387b45.unshift(_0x412dcc);
            return [2, _0x387b45];
        }
      });
    }));
    ;
    function _0xbc38c7(_0x42b594, _0x222a3f, _0x477acf, _0x2e41bc, _0x4d8474, _0x2f6c15, _0x477f96) {
      try {
        var _0x1c0098 = _0x42b594[_0x2f6c15](_0x477f96);
        var _0x1cead2 = _0x1c0098.value;
      } catch (_0x299d9f) {
        _0x477acf(_0x299d9f);
        return;
      }
      if (_0x1c0098.done) {
        _0x222a3f(_0x1cead2);
      } else {
        Promise.resolve(_0x1cead2).then(_0x2e41bc, _0x4d8474);
      }
    }
    function _0x3c643b(_0x400200) {
      return function() {
        var _0x406f94 = this;
        var _0x21d3ae = arguments;
        return new Promise(function(_0x3dd6d6, _0x2f413b) {
          var _0x26a78e = _0x400200.apply(_0x406f94, _0x21d3ae);
          function _0x54356b(_0x2f9e6d) {
            _0xbc38c7(_0x26a78e, _0x3dd6d6, _0x2f413b, _0x54356b, _0x43cd31, "next", _0x2f9e6d);
          }
          function _0x43cd31(_0x32ba4e) {
            _0xbc38c7(_0x26a78e, _0x3dd6d6, _0x2f413b, _0x54356b, _0x43cd31, "throw", _0x32ba4e);
          }
          _0x54356b(void 0);
        });
      };
    }
    function _0x2f5b0a(_0x1b4342, _0x2164ac) {
      var _0x3d6193;
      var _0xef2938;
      var _0x22a074;
      var _0x334a75;
      var _0x1bfee4 = {
        label: 0,
        sent: function() {
          if (_0x22a074[0] & 1) {
            throw _0x22a074[1];
          }
          return _0x22a074[1];
        },
        trys: [],
        ops: []
      };
      _0x334a75 = {
        next: _0x25efcc(0),
        throw: _0x25efcc(1),
        return: _0x25efcc(2)
      };
      if (typeof Symbol === "function") {
        _0x334a75[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x334a75;
      function _0x25efcc(_0xae4de6) {
        return function(_0xaf360f) {
          return _0xf94660([_0xae4de6, _0xaf360f]);
        };
      }
      function _0xf94660(_0x4e3897) {
        if (_0x3d6193) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x1bfee4) {
          try {
            _0x3d6193 = 1;
            if (_0xef2938 && (_0x22a074 = _0x4e3897[0] & 2 ? _0xef2938.return : _0x4e3897[0] ? _0xef2938.throw || ((_0x22a074 = _0xef2938.return) && _0x22a074.call(_0xef2938), 0) : _0xef2938.next) && !(_0x22a074 = _0x22a074.call(_0xef2938, _0x4e3897[1])).done) {
              return _0x22a074;
            }
            _0xef2938 = 0;
            if (_0x22a074) {
              _0x4e3897 = [_0x4e3897[0] & 2, _0x22a074.value];
            }
            switch (_0x4e3897[0]) {
              case 0:
              case 1:
                _0x22a074 = _0x4e3897;
                break;
              case 4:
                _0x1bfee4.label++;
                return {
                  value: _0x4e3897[1],
                  done: false
                };
              case 5:
                _0x1bfee4.label++;
                _0xef2938 = _0x4e3897[1];
                _0x4e3897 = [0];
                continue;
              case 7:
                _0x4e3897 = _0x1bfee4.ops.pop();
                _0x1bfee4.trys.pop();
                continue;
              default:
                if (!(_0x22a074 = _0x1bfee4.trys, _0x22a074 = _0x22a074.length > 0 && _0x22a074[_0x22a074.length - 1]) && (_0x4e3897[0] === 6 || _0x4e3897[0] === 2)) {
                  _0x1bfee4 = 0;
                  continue;
                }
                if (_0x4e3897[0] === 3 && (!_0x22a074 || _0x4e3897[1] > _0x22a074[0] && _0x4e3897[1] < _0x22a074[3])) {
                  _0x1bfee4.label = _0x4e3897[1];
                  break;
                }
                if (_0x4e3897[0] === 6 && _0x1bfee4.label < _0x22a074[1]) {
                  _0x1bfee4.label = _0x22a074[1];
                  _0x22a074 = _0x4e3897;
                  break;
                }
                if (_0x22a074 && _0x1bfee4.label < _0x22a074[2]) {
                  _0x1bfee4.label = _0x22a074[2];
                  _0x1bfee4.ops.push(_0x4e3897);
                  break;
                }
                if (_0x22a074[2]) {
                  _0x1bfee4.ops.pop();
                }
                _0x1bfee4.trys.pop();
                continue;
            }
            _0x4e3897 = _0x2164ac.call(_0x1b4342, _0x1bfee4);
          } catch (_0x336214) {
            _0x4e3897 = [6, _0x336214];
            _0xef2938 = 0;
          } finally {
            _0x3d6193 = _0x22a074 = 0;
          }
        }
        if (_0x4e3897[0] & 5) {
          throw _0x4e3897[1];
        }
        var _0x4be2ac = {
          value: _0x4e3897[0] ? _0x4e3897[1] : void 0,
          done: true
        };
        return _0x4be2ac;
      }
    }
    var _0x5cdb72 = {
      default: "prop_air_cargo_04c",
      crate: "ch_prop_ch_crate_01a"
    };
    function _0x4f9852() {
      _0x4c27ed.addInteractionByModel("drop_box", Object.values(_0x5cdb72), [{
        id: "dropbox:open",
        label: "Open",
        parameters: [],
        eventSDK: "np-misc:dropBox:open",
        isEnabled: (function() {
          var _0x571c92 = _0x3c643b(function(_0x4adc16) {
            var _0x3faf45;
            return _0x2f5b0a(this, function(_0x516683) {
              switch (_0x516683.label) {
                case 0:
                  if (!_0x4adc16) {
                    return [2, false];
                  }
                  return [4, globalThis.exports["np-objects"].GetObjectByEntity(_0x4adc16)];
                case 1:
                  _0x3faf45 = _0x516683.sent();
                  if (!_0x3faf45) {
                    return [2, false];
                  }
                  return [2, !_0x3faf45.data.metadata.sealed];
              }
            });
          });
          return function(_0x5ee4aa) {
            return _0x571c92.apply(this, arguments);
          };
        })()
      }, {
        id: "dropbox:seal",
        label: "Seal",
        parameters: [],
        eventSDK: "np-misc:dropBox:seal",
        isEnabled: (function() {
          var _0x4b9a5d = _0x3c643b(function(_0x37b3e8) {
            var _0x43665a;
            return _0x2f5b0a(this, function(_0x4d43ac) {
              switch (_0x4d43ac.label) {
                case 0:
                  if (!_0x37b3e8) {
                    return [2, false];
                  }
                  return [4, globalThis.exports["np-objects"].GetObjectByEntity(_0x37b3e8)];
                case 1:
                  _0x43665a = _0x4d43ac.sent();
                  if (!_0x43665a) {
                    return [2, false];
                  }
                  return [2, !_0x43665a.data.metadata.sealed];
              }
            });
          });
          return function(_0x25e35c) {
            return _0x4b9a5d.apply(this, arguments);
          };
        })()
      }, {
        id: "dropbox:take",
        label: "Take",
        parameters: [],
        eventSDK: "np-misc:dropBox:take",
        isEnabled: (function() {
          var _0x45e005 = _0x3c643b(function(_0x5314a5) {
            var _0x58542c;
            return _0x2f5b0a(this, function(_0x1e86a9) {
              switch (_0x1e86a9.label) {
                case 0:
                  if (!_0x5314a5) {
                    return [2, false];
                  }
                  return [4, globalThis.exports["np-objects"].GetObjectByEntity(_0x5314a5)];
                case 1:
                  _0x58542c = _0x1e86a9.sent();
                  if (!_0x58542c) {
                    return [2, false];
                  }
                  return [2, _0x58542c.data.metadata.sealed];
              }
            });
          });
          return function(_0x36e895) {
            return _0x45e005.apply(this, arguments);
          };
        })()
      }], {
        isEnabled: (function() {
          var _0xd63823 = _0x3c643b(function(_0x2d1783) {
            var _0x3a2787;
            return _0x2f5b0a(this, function(_0x30137e) {
              switch (_0x30137e.label) {
                case 0:
                  if (!_0x2d1783) {
                    return [2, false];
                  }
                  return [4, globalThis.exports["np-objects"].GetObjectByEntity(_0x2d1783)];
                case 1:
                  _0x3a2787 = _0x30137e.sent();
                  if (!_0x3a2787) {
                    return [2, false];
                  }
                  return [2, true];
              }
            });
          });
          return function(_0x433828) {
            return _0xd63823.apply(this, arguments);
          };
        })(),
        skipLos: true,
        distance: {
          use: 5,
          draw: 7
        }
      });
    }
    _0x38f759.register("np-misc:dropBox:use", (function() {
      var _0x3f7e38 = _0x3c643b(function(_0x58bc27) {
        var _0x459d73;
        var _0x2310bc;
        return _0x2f5b0a(this, function(_0x3f1b83) {
          switch (_0x3f1b83.label) {
            case 0:
              _0x459d73 = _0x58bc27 === "crate" ? _0x5cdb72.crate : _0x5cdb72.default;
              return [4, globalThis.exports["np-objects"].PlaceAndSaveObject(_0x459d73, {
                sealed: false
              }, {
                collision: false,
                groundSnap: true,
                adjustZ: false,
                distance: 3,
                surfaceOffset: 0.1
              }, function() {
                return true;
              }, "objects")];
            case 1:
              _0x2310bc = _0x3f1b83.sent();
              return [2, _0x2310bc];
          }
        });
      });
      return function(_0x298bab) {
        return _0x3f7e38.apply(this, arguments);
      };
    })());
    _0x539aaf.on("np-misc:dropBox:open", (function() {
      var _0x3d292a = _0x3c643b(function(_0x41bb59, _0x3dccb5) {
        var _0x2d467f;
        return _0x2f5b0a(this, function(_0x24602e) {
          switch (_0x24602e.label) {
            case 0:
              return [4, globalThis.exports["np-objects"].GetObjectByEntity(_0x3dccb5)];
            case 1:
              _0x2d467f = _0x24602e.sent();
              if (!_0x2d467f) {
                return [2];
              }
              if (_0x2d467f.data.metadata.sealed) {
                return [2, emit("DoLongHudText", "This drop box is sealed.", 2)];
              }
              _0x3b5fd8.OpenInventory(["dropbox::" + _0x2d467f.id], true);
              return [2];
          }
        });
      });
      return function(_0x4f8dd1, _0x361ed6) {
        return _0x3d292a.apply(this, arguments);
      };
    })());
    _0x539aaf.on("np-misc:dropBox:seal", (function() {
      var _0x39d580 = _0x3c643b(function(_0x1b73e9, _0xdf25aa) {
        var _0xb96a5b;
        var _0x297f93;
        return _0x2f5b0a(this, function(_0x51ee16) {
          switch (_0x51ee16.label) {
            case 0:
              return [4, globalThis.exports["np-objects"].GetObjectByEntity(_0xdf25aa)];
            case 1:
              _0xb96a5b = _0x51ee16.sent();
              if (!_0xb96a5b) {
                return [2];
              }
              if (_0xb96a5b.data.metadata.sealed) {
                return [2, emit("DoLongHudText", "This drop box is already sealed.", 2)];
              }
              emit("animation:PlayAnimation", "mechanic5");
              return [4, _0x3cd517(1e4, "Sealing drop box...")];
            case 2:
              _0x297f93 = _0x51ee16.sent();
              emit("animation:PlayAnimation", "c");
              if (_0x297f93 < 100) {
                return [2, emit("DoLongHudText", "Sealing failed.", 2)];
              }
              _0x539aaf.emitNet("np-misc:dropBox:sealed", _0xb96a5b.id);
              return [2];
          }
        });
      });
      return function(_0xeefc1a, _0x31150e) {
        return _0x39d580.apply(this, arguments);
      };
    })());
    _0x539aaf.on("np-misc:dropBox:take", (function() {
      var _0x584264 = _0x3c643b(function(_0x470a15, _0xa2191d) {
        var _0xcd3ebc;
        var _0x1f42b1;
        return _0x2f5b0a(this, function(_0xb84aa1) {
          switch (_0xb84aa1.label) {
            case 0:
              return [4, globalThis.exports["np-objects"].GetObjectByEntity(_0xa2191d)];
            case 1:
              _0xcd3ebc = _0xb84aa1.sent();
              if (!_0xcd3ebc) {
                return [2];
              }
              if (!_0xcd3ebc.data.metadata.sealed) {
                return [2, emit("DoLongHudText", "This drop box is not sealed.", 2)];
              }
              emit("animation:PlayAnimation", "mechanic5");
              return [4, _0x3cd517(1e4, "Opening drop box...")];
            case 2:
              _0x1f42b1 = _0xb84aa1.sent();
              emit("animation:PlayAnimation", "c");
              if (_0x1f42b1 < 100) {
                return [2, emit("DoLongHudText", "Opening failed.", 2)];
              }
              _0x539aaf.emitNet("np-misc:dropBox:opened", _0xcd3ebc.id);
              return [2];
          }
        });
      });
      return function(_0xeb4a60, _0x5dc521) {
        return _0x584264.apply(this, arguments);
      };
    })());
    function _0x3cd517(_0x4b900d, _0x607797, _0xa243fc = false) {
      return new Promise(function(_0x20083b) {
        if (_0x607797) {
          exports["np-taskbar"].taskBar(_0x4b900d, _0x607797, _0xa243fc, true, null, false, _0x20083b);
        } else {
          setTimeout(function() {
            return _0x20083b(100);
          }, _0x4b900d);
        }
      });
    }
    ;
    function _0x2add04(_0x31ca1a, _0x33331c) {
      if (_0x33331c == null || _0x33331c > _0x31ca1a.length) {
        _0x33331c = _0x31ca1a.length;
      }
      for (var _0xb7fc9 = 0, _0x164103 = new Array(_0x33331c); _0xb7fc9 < _0x33331c; _0xb7fc9++) {
        _0x164103[_0xb7fc9] = _0x31ca1a[_0xb7fc9];
      }
      return _0x164103;
    }
    function _0x527b89(_0x602251) {
      if (Array.isArray(_0x602251)) {
        return _0x602251;
      }
    }
    function _0x1ab865(_0x2ca928, _0x55faa8, _0x28c847, _0xbbc981, _0x4ba4af, _0x157ed2, _0x45dfa2) {
      try {
        var _0x513ee1 = _0x2ca928[_0x157ed2](_0x45dfa2);
        var _0x2c3005 = _0x513ee1.value;
      } catch (_0x531168) {
        _0x28c847(_0x531168);
        return;
      }
      if (_0x513ee1.done) {
        _0x55faa8(_0x2c3005);
      } else {
        Promise.resolve(_0x2c3005).then(_0xbbc981, _0x4ba4af);
      }
    }
    function _0x2837e4(_0x1f7887) {
      return function() {
        var _0x14dc48 = this;
        var _0x336dee = arguments;
        return new Promise(function(_0x56deaa, _0x3785c7) {
          var _0x3d8943 = _0x1f7887.apply(_0x14dc48, _0x336dee);
          function _0x12f541(_0x163b5a) {
            _0x1ab865(_0x3d8943, _0x56deaa, _0x3785c7, _0x12f541, _0x44fb1d, "next", _0x163b5a);
          }
          function _0x44fb1d(_0x3b34ff) {
            _0x1ab865(_0x3d8943, _0x56deaa, _0x3785c7, _0x12f541, _0x44fb1d, "throw", _0x3b34ff);
          }
          _0x12f541(void 0);
        });
      };
    }
    function _0x221809(_0x930166, _0x36936c, _0xfb9368) {
      if (_0x36936c in _0x930166) {
        var _0x45ded2 = {
          value: _0xfb9368,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(_0x930166, _0x36936c, _0x45ded2);
      } else {
        _0x930166[_0x36936c] = _0xfb9368;
      }
      return _0x930166;
    }
    function _0x3f86cc(_0x869a1c, _0x263118) {
      var _0x2ff1cb = _0x869a1c == null ? null : typeof Symbol !== "undefined" && _0x869a1c[Symbol.iterator] || _0x869a1c["@@iterator"];
      if (_0x2ff1cb == null) {
        return;
      }
      var _0x376264 = [];
      var _0x98395b = true;
      var _0x203c0d = false;
      var _0x287015;
      var _0x440d37;
      try {
        for (_0x2ff1cb = _0x2ff1cb.call(_0x869a1c); !(_0x98395b = (_0x287015 = _0x2ff1cb.next()).done); _0x98395b = true) {
          _0x376264.push(_0x287015.value);
          if (_0x263118 && _0x376264.length === _0x263118) {
            break;
          }
        }
      } catch (_0x2a3053) {
        _0x203c0d = true;
        _0x440d37 = _0x2a3053;
      } finally {
        try {
          if (!_0x98395b && _0x2ff1cb.return != null) {
            _0x2ff1cb.return();
          }
        } finally {
          if (_0x203c0d) {
            throw _0x440d37;
          }
        }
      }
      return _0x376264;
    }
    function _0x49d4e4() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0xd68ebc(_0x416009, _0x187f8d) {
      return _0x527b89(_0x416009) || _0x3f86cc(_0x416009, _0x187f8d) || _0x7babab(_0x416009, _0x187f8d) || _0x49d4e4();
    }
    function _0x7babab(_0x2ee096, _0x3ab203) {
      if (!_0x2ee096) {
        return;
      }
      if (typeof _0x2ee096 === "string") {
        return _0x2add04(_0x2ee096, _0x3ab203);
      }
      var _0x511504 = Object.prototype.toString.call(_0x2ee096).slice(8, -1);
      if (_0x511504 === "Object" && _0x2ee096.constructor) {
        _0x511504 = _0x2ee096.constructor.name;
      }
      if (_0x511504 === "Map" || _0x511504 === "Set") {
        return Array.from(_0x511504);
      }
      if (_0x511504 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x511504)) {
        return _0x2add04(_0x2ee096, _0x3ab203);
      }
    }
    function _0x36f79d(_0x22a7ed, _0x27aac6) {
      var _0x2bd7d8;
      var _0x2550d9;
      var _0x4e4653;
      var _0x5e3ed3;
      var _0x396993 = {
        label: 0,
        sent: function() {
          if (_0x4e4653[0] & 1) {
            throw _0x4e4653[1];
          }
          return _0x4e4653[1];
        },
        trys: [],
        ops: []
      };
      _0x5e3ed3 = {
        next: _0x1b192d(0),
        throw: _0x1b192d(1),
        return: _0x1b192d(2)
      };
      if (typeof Symbol === "function") {
        _0x5e3ed3[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x5e3ed3;
      function _0x1b192d(_0x2ff534) {
        return function(_0x186fc6) {
          return _0x57f215([_0x2ff534, _0x186fc6]);
        };
      }
      function _0x57f215(_0x130777) {
        if (_0x2bd7d8) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x396993) {
          try {
            _0x2bd7d8 = 1;
            if (_0x2550d9 && (_0x4e4653 = _0x130777[0] & 2 ? _0x2550d9.return : _0x130777[0] ? _0x2550d9.throw || ((_0x4e4653 = _0x2550d9.return) && _0x4e4653.call(_0x2550d9), 0) : _0x2550d9.next) && !(_0x4e4653 = _0x4e4653.call(_0x2550d9, _0x130777[1])).done) {
              return _0x4e4653;
            }
            _0x2550d9 = 0;
            if (_0x4e4653) {
              _0x130777 = [_0x130777[0] & 2, _0x4e4653.value];
            }
            switch (_0x130777[0]) {
              case 0:
              case 1:
                _0x4e4653 = _0x130777;
                break;
              case 4:
                _0x396993.label++;
                return {
                  value: _0x130777[1],
                  done: false
                };
              case 5:
                _0x396993.label++;
                _0x2550d9 = _0x130777[1];
                _0x130777 = [0];
                continue;
              case 7:
                _0x130777 = _0x396993.ops.pop();
                _0x396993.trys.pop();
                continue;
              default:
                if (!(_0x4e4653 = _0x396993.trys, _0x4e4653 = _0x4e4653.length > 0 && _0x4e4653[_0x4e4653.length - 1]) && (_0x130777[0] === 6 || _0x130777[0] === 2)) {
                  _0x396993 = 0;
                  continue;
                }
                if (_0x130777[0] === 3 && (!_0x4e4653 || _0x130777[1] > _0x4e4653[0] && _0x130777[1] < _0x4e4653[3])) {
                  _0x396993.label = _0x130777[1];
                  break;
                }
                if (_0x130777[0] === 6 && _0x396993.label < _0x4e4653[1]) {
                  _0x396993.label = _0x4e4653[1];
                  _0x4e4653 = _0x130777;
                  break;
                }
                if (_0x4e4653 && _0x396993.label < _0x4e4653[2]) {
                  _0x396993.label = _0x4e4653[2];
                  _0x396993.ops.push(_0x130777);
                  break;
                }
                if (_0x4e4653[2]) {
                  _0x396993.ops.pop();
                }
                _0x396993.trys.pop();
                continue;
            }
            _0x130777 = _0x27aac6.call(_0x22a7ed, _0x396993);
          } catch (_0x7adafe) {
            _0x130777 = [6, _0x7adafe];
            _0x2550d9 = 0;
          } finally {
            _0x2bd7d8 = _0x4e4653 = 0;
          }
        }
        if (_0x130777[0] & 5) {
          throw _0x130777[1];
        }
        var _0x178cf0 = {
          value: _0x130777[0] ? _0x130777[1] : void 0,
          done: true
        };
        return _0x178cf0;
      }
    }
    var _0x130a1d = false;
    var _0x5c28ce = 0;
    var _0x446e67 = GetHashKey("weapon_flaregun");
    var _0x426f1b = {
      release: {
        sound: "flares_released",
        set: "DLC_SM_Countermeasures_Sounds"
      },
      empty: {
        sound: "flares_empty",
        set: "DLC_SM_Countermeasures_Sounds"
      },
      cooldown: {
        sound: "chaff_cooldown",
        set: "DLC_SM_Countermeasures_Sounds"
      }
    };
    var _0x2a7427 = [1794615063, 1430300958, 220773539];
    var _0x27a5f1;
    _0x27a5f1 = {};
    _0x221809(_0x27a5f1, GetHashKey("akula"), {
      hasBombs: true,
      hasFlares: true,
      camOffset: new _0x58b2dd(0, 0, 0),
      unkOffset: 0.4,
      overrideFlareModRequirement: true
    });
    _0x221809(_0x27a5f1, GetHashKey("alphaz1"), {
      hasFlares: true
    });
    _0x221809(_0x27a5f1, GetHashKey("avenger"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0, 0.5),
      unkOffset: 0.36,
      hasVTOL: true
    });
    _0x221809(_0x27a5f1, GetHashKey("bombushka"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0.3, 0.8),
      unkOffset: 0.43
    });
    _0x221809(_0x27a5f1, GetHashKey("cuban800"), {
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0.2, 1),
      unkOffset: 0.5
    });
    _0x221809(_0x27a5f1, GetHashKey("havok"), {
      hasFlares: true
    });
    _0x221809(_0x27a5f1, GetHashKey("howard"), {
      hasFlares: true
    });
    _0x221809(_0x27a5f1, GetHashKey("hunter"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0, 1),
      unkOffset: 0.5
    });
    _0x221809(_0x27a5f1, GetHashKey("mogul"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0.2, 0.97),
      unkOffset: 0.45
    });
    _0x221809(_0x27a5f1, GetHashKey("molotok"), {
      hasFlares: true
    });
    _0x221809(_0x27a5f1, GetHashKey("nokota"), {
      hasFlares: true
    });
    _0x221809(_0x27a5f1, GetHashKey("pyro"), {
      hasFlares: true
    });
    _0x221809(_0x27a5f1, GetHashKey("rogue"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0.3, 1.1),
      unkOffset: 0.46
    });
    _0x221809(_0x27a5f1, GetHashKey("seabreeze"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0.2, 0.4),
      unkOffset: 0.5
    });
    _0x221809(_0x27a5f1, GetHashKey("starling"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0.25, 0.55),
      unkOffset: 0.55
    });
    _0x221809(_0x27a5f1, GetHashKey("thruster"), {
      hasFlares: true
    });
    _0x221809(_0x27a5f1, GetHashKey("tula"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0, 1),
      unkOffset: 0.6,
      hasVTOL: true
    });
    _0x221809(_0x27a5f1, GetHashKey("volatol"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0, 2),
      unkOffset: 0.54
    });
    _0x221809(_0x27a5f1, GetHashKey("alkonost"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0, 2),
      unkOffset: 0.54
    });
    _0x221809(_0x27a5f1, GetHashKey("strikeforce"), {
      hasFlares: true,
      hasBombs: true,
      camOffset: new _0x58b2dd(0, 0, -2),
      unkOffset: 0.4,
      overrideFlareModRequirement: true
    });
    var _0x418dfb = _0x27a5f1;
    var _0x29ba69 = new _0x49cfb9(function() {
    }, 0);
    _0x29ba69.addHook("preStart", _0x2837e4(function() {
      var _0x4f6bad;
      var _0x4a9780;
      return _0x36f79d(this, function(_0x151805) {
        switch (_0x151805.label) {
          case 0:
            RequestScriptAudioBank("DLC_SM_Countermeasures_Sounds", false);
            return [4, _0x151c5c.loadModel(_0x446e67)];
          case 1:
            _0x151805.sent();
            return [4, _0x151c5c.loadWeaponAsset(_0x446e67, 31, 26)];
          case 2:
            _0x151805.sent();
            _0x4f6bad = GetVehiclePedIsIn(PlayerPedId(), false);
            _0x4a9780 = GetEntityModel(_0x4f6bad);
            this.data.currentVehicle = _0x4f6bad;
            this.data.modelInfo = _0x418dfb[_0x4a9780];
            this.data.canUseFlares = _0x3e5fbf(_0x4f6bad, this.data.modelInfo || {});
            this.data.lastBombDoorToggle = 0;
            this.data.lastBombDropTime = 0;
            return [2];
        }
      });
    }));
    var _0x5b7fad = 18;
    var _0x6732d = 8;
    var _0x6ecf1f = 0;
    var _0x781073 = 0;
    function _0x3d87a2() {
      if (_0x6732d < 8) {
        var _0x1b5a1a = GetGameTimer();
        if (_0x1b5a1a - _0x6ecf1f > 2500) {
          _0x6732d += 1;
          _0x6ecf1f = _0x1b5a1a;
        }
      }
      if (_0x5b7fad < 18) {
        var _0x36a903 = GetGameTimer();
        if (_0x36a903 - _0x781073 > 2e3) {
          _0x5b7fad += 4;
          _0x781073 = _0x36a903;
        }
      }
    }
    function _0x449fe5(_0x2488a9) {
      var _0x3afb68 = Math.min(4, _0x6732d);
      if (_0x3afb68 < 2) {
        var _0x3747f8 = _0x426f1b.empty;
        PlaySoundFromEntity(-1, _0x3747f8.sound, _0x2488a9, _0x3747f8.set, true, 0);
        return;
      }
      _0x6732d -= _0x3afb68;
      var _0x47adb6 = new _0x58b2dd(GetEntityCoords(_0x2488a9));
      var _0x595e59 = GetOffsetFromEntityInWorldCoords(_0x2488a9, -6, -4, -0.2);
      var _0x4f63f6 = GetOffsetFromEntityInWorldCoords(_0x2488a9, -3, -4, -0.2);
      var _0x5a1a4f = GetOffsetFromEntityInWorldCoords(_0x2488a9, 6, -4, -0.2);
      var _0x10e018 = GetOffsetFromEntityInWorldCoords(_0x2488a9, 3, -4, -0.2);
      var _0xfd3316 = _0x426f1b.release;
      PlaySoundFromEntity(-1, _0xfd3316.sound, _0x2488a9, _0xfd3316.set, true, 0);
      if (_0x3afb68 > 0) {
        ShootSingleBulletBetweenCoordsIgnoreEntityNew(_0x47adb6.x, _0x47adb6.y, _0x47adb6.z, _0x595e59[0], _0x595e59[1], _0x595e59[2], 0, true, _0x446e67, PlayerPedId(), true, true, 1, _0x2488a9, false, false, false, true);
      }
      if (_0x3afb68 > 2) {
        ShootSingleBulletBetweenCoordsIgnoreEntityNew(_0x47adb6.x, _0x47adb6.y, _0x47adb6.z, _0x4f63f6[0], _0x4f63f6[1], _0x595e59[2], 0, true, _0x446e67, PlayerPedId(), true, true, 1, _0x2488a9, false, false, false, true);
      }
      if (_0x3afb68 > 1) {
        ShootSingleBulletBetweenCoordsIgnoreEntityNew(_0x47adb6.x, _0x47adb6.y, _0x47adb6.z, _0x5a1a4f[0], _0x5a1a4f[1], _0x595e59[2], 0, true, _0x446e67, PlayerPedId(), true, true, 1, _0x2488a9, false, false, false, true);
      }
      if (_0x3afb68 > 3) {
        ShootSingleBulletBetweenCoordsIgnoreEntityNew(_0x47adb6.x, _0x47adb6.y, _0x47adb6.z, _0x10e018[0], _0x10e018[1], _0x595e59[2], 0, true, _0x446e67, PlayerPedId(), true, true, 1, _0x2488a9, false, false, false, true);
      }
    }
    _0x29ba69.addHook("active", _0x2837e4(function() {
      var _0x1a70cd;
      var _0x31db49;
      var _0x5101b2;
      var _0x536d03;
      return _0x36f79d(this, function(_0x4adeeb) {
        switch (_0x4adeeb.label) {
          case 0:
            if (IsRawKeyPressed(103) && this.data.canUseFlares) {
              _0x449fe5(this.data.currentVehicle);
            }
            if (!IsRawKeyPressed(105) || !_0x3f6862(this.data.currentVehicle, this.data.modelInfo) || !(this.data.lastBombDoorToggle + 2e3 < GetGameTimer())) {
              return [3, 4];
            }
            this.data.lastBombDoorToggle = GetGameTimer();
            if (AreBombBayDoorsOpen(this.data.currentVehicle)) {
              return [3, 2];
            }
            OpenBombBayDoors(this.data.currentVehicle);
            SetCamActive(_0xf2fc9(), true);
            return [4, _0x2ad271.wait(2e3)];
          case 1:
            _0x4adeeb.sent();
            _0x1a70cd = _0x45cc83(this.data.currentVehicle, this.data.modelInfo);
            _0x31db49 = _0x1a70cd.bombPosition;
            _0x5101b2 = new _0x58b2dd(GetOffsetFromEntityGivenWorldCoords(this.data.currentVehicle, _0x31db49.x, _0x31db49.y, _0x31db49.z));
            if (this.data.modelInfo?.camOffset) {
              _0x5101b2.add(this.data.modelInfo.camOffset);
            }
            AttachCamToEntity(_0xf2fc9(), this.data.currentVehicle, _0x5101b2.x, _0x5101b2.y, _0x5101b2.z, true);
            RenderScriptCams(true, false, 0, false, false);
            _0x536d03 = GetOffsetFromEntityInWorldCoords(this.data.currentVehicle, 0, 1e4, 0);
            if (IsThisModelAPlane(GetEntityModel(this.data.currentVehicle))) {
              TaskPlaneMission(PlayerPedId(), this.data.currentVehicle, 0, 0, _0x536d03[0], _0x536d03[1], _0x536d03[2], 4, 30, 0.1, GetEntityHeading(this.data.currentVehicle), 30, 20, false);
            }
            StartAudioScene("DLC_SM_Bomb_Bay_View_Scene");
            SetPlaneTurbulenceMultiplier(this.data.currentVehicle, 0);
            return [3, 4];
          case 2:
            CloseBombBayDoors(this.data.currentVehicle);
            ClearPedTasks(PlayerPedId());
            ClearVehicleTasks(this.data.currentVehicle);
            StopAudioScene("DLC_SM_Bomb_Bay_View_Scene");
            SetCamActive(_0xf2fc9(), false);
            RenderScriptCams(false, false, 0, false, false);
            DestroyCam(_0xf2fc9(), false);
            DestroyAllCams(true);
            return [4, _0x2ad271.wait(2e3)];
          case 3:
            _0x4adeeb.sent();
            _0x4adeeb.label = 4;
          case 4:
            if (AreBombBayDoorsOpen(this.data.currentVehicle)) {
              DisableControlAction(0, 114, true);
              DisableControlAction(0, 255, true);
              if (_0x5b7fad > 0 && (IsDisabledControlJustPressed(0, 114) || IsDisabledControlJustPressed(0, 255)) && _0x3f6862(this.data.currentVehicle, this.data.modelInfo)) {
                _0x4746f6(this.data.currentVehicle, this.data.modelInfo);
                this.data.lastBombDropTime = GetGameTimer();
              }
            }
            _0x3d87a2();
            return [2];
        }
      });
    }));
    var _0x3a741f = (function() {
      var _0x5b6f6e = _0x2837e4(function() {
        return _0x36f79d(this, function(_0x36c9d5) {
          switch (_0x36c9d5.label) {
            case 0:
              return [4, _0x38f759.execute("misc:aircraft:isAllowed")];
            case 1:
              return [2, _0x36c9d5.sent()];
          }
        });
      });
      return function _0x4d551f() {
        return _0x5b6f6e.apply(this, arguments);
      };
    })();
    var _0x38349e = (function() {
      var _0xa0ff75 = _0x2837e4(function() {
        var _0x59b930;
        return _0x36f79d(this, function(_0x1196b4) {
          switch (_0x1196b4.label) {
            case 0:
              _0x59b930 = !_0x29ba69.isActive;
              if (!_0x59b930) {
                return [3, 2];
              }
              return [4, _0x3a741f()];
            case 1:
              _0x59b930 = _0x1196b4.sent();
              _0x1196b4.label = 2;
            case 2:
              if (_0x59b930) {
                _0x29ba69.start();
              }
              return [2];
          }
        });
      });
      return function _0x6ea664() {
        return _0xa0ff75.apply(this, arguments);
      };
    })();
    function _0x1bdac1() {
      if (_0x29ba69.isActive) {
        _0x29ba69.stop();
        _0x539aaf.emitNet("misc:aircraft:removePermission");
      }
    }
    on("baseevents:enteredVehicle", function(_0x147397, _0x12af1f, _0x2542ee, _0x4290b6, _0x331e22) {
      if (_0x12af1f == -1 && (_0x4290b6 == 15 || _0x4290b6 == 16) && _0x418dfb[_0x331e22]) {
        _0x38349e();
      }
    });
    on("baseevents:vehicleHotreload", function(_0x85ee41, _0x1fd8d2) {
      var _0x20b9ae = GetEntityModel(_0x85ee41);
      var _0x38b015 = GetVehicleClass(_0x85ee41);
      if (GetPedInVehicleSeat(_0x85ee41, -1) == PlayerPedId() && (_0x38b015 == 15 || _0x38b015 == 16) && _0x418dfb[_0x20b9ae]) {
        _0x38349e();
      }
    });
    on("baseevents:leftVehicle", function(_0x1b085f, _0xaa1d91) {
      _0x1bdac1();
    });
    function _0x3f6862(_0x36ebe7, _0xf9141b) {
      if (DoesEntityExist(_0x36ebe7) && IsEntityAVehicle(_0x36ebe7) && !IsEntityDead(_0x36ebe7)) {
        if (_0xf9141b.hasBombs && GetVehicleMod(_0x36ebe7, 9) > -1) {
          if (_0x130a1d) {
            return false;
          }
          if (_0xf9141b.hasVTOL && GetVehicleFlightNozzlePosition(_0x36ebe7) == 1) {
            return false;
          }
          return true;
        }
      }
      return false;
    }
    function _0x3e5fbf(_0x416f59, _0x5b814e) {
      if (DoesEntityExist(_0x416f59) && IsEntityAVehicle(_0x416f59) && !IsEntityDead(_0x416f59)) {
        if (_0x5b814e.hasFlares && GetVehicleMod(_0x416f59, 1) == 1 || _0x5b814e.hasFlares && _0x5b814e.overrideFlareModRequirement) {
          return true;
        }
      }
      return false;
    }
    function _0x5d0969(_0x3aff96, _0x1d133f, _0x12fe8b, _0x37cbe4, _0x504217) {
      return (_0x1d133f - _0x3aff96) / (_0x37cbe4 - _0x12fe8b) * (_0x504217 - _0x12fe8b) + _0x3aff96;
    }
    function _0x169fbe(_0x568e3e, _0x21a770, _0x24bff8, _0x268b48, _0x5c0c4d) {
      return new _0x58b2dd(_0x5d0969(_0x568e3e.x, _0x21a770.x, _0x24bff8, _0x268b48, _0x5c0c4d), _0x5d0969(_0x568e3e.y, _0x21a770.y, _0x24bff8, _0x268b48, _0x5c0c4d), _0x5d0969(_0x568e3e.z, _0x21a770.z, _0x24bff8, _0x268b48, _0x5c0c4d));
    }
    function _0x45cc83(_0x545ea1, _0x3fdafb) {
      var _0x52025e = _0xd68ebc(GetModelDimensions(GetEntityModel(_0x545ea1)), 2);
      var _0x45bd35 = _0x52025e[0];
      var _0x4fba77 = _0x52025e[1];
      var _0x26dcf3 = new _0x58b2dd(GetOffsetFromEntityInWorldCoords(_0x545ea1, _0x45bd35[0], _0x4fba77[1], _0x45bd35[2]));
      var _0x257d13 = new _0x58b2dd(GetOffsetFromEntityInWorldCoords(_0x545ea1, _0x4fba77[0], _0x4fba77[1], _0x45bd35[2]));
      var _0x325e5f = new _0x58b2dd(GetOffsetFromEntityInWorldCoords(_0x545ea1, _0x45bd35[0], _0x45bd35[1], _0x45bd35[2]));
      var _0x21e142 = new _0x58b2dd(GetOffsetFromEntityInWorldCoords(_0x545ea1, _0x4fba77[0], _0x45bd35[1], _0x45bd35[2]));
      var _0x213997 = _0x169fbe(_0x26dcf3, _0x257d13, 0, 1, 0.5);
      var _0x1ab05a = _0x169fbe(_0x325e5f, _0x21e142, 0, 1, 0.5);
      _0x213997 = _0x213997.add(new _0x58b2dd(0, 0, 0.4));
      _0x1ab05a = _0x1ab05a.add(new _0x58b2dd(0, 0, 0.4));
      var _0x13c5a3 = _0x169fbe(_0x213997, _0x1ab05a, 0, 1, _0x3fdafb.unkOffset || 0.4);
      _0x213997 = _0x213997.sub(new _0x58b2dd(0, 0, 0.2));
      _0x1ab05a = _0x1ab05a.sub(new _0x58b2dd(0, 0, 0.2));
      var _0x1e8a79 = _0x169fbe(_0x213997, _0x1ab05a, 0, 1, (_0x3fdafb?.unkOffset || 0.4) - 1e-6);
      var _0x24da23 = {
        bombPosition: _0x13c5a3,
        bombDropPosition: _0x1e8a79
      };
      return _0x24da23;
    }
    function _0xf2fc9() {
      if (!DoesCamExist(_0x5c28ce)) {
        _0x5c28ce = CreateCameraWithParams(26379945, 0, 0, 0, -90, 0, GetEntityHeading(PlayerPedId()), 65, true, 2);
      }
      return _0x5c28ce;
    }
    var _0x4746f6 = (function() {
      var _0x3217f7 = _0x2837e4(function(_0x4c4394, _0x33be8f) {
        var _0x290987;
        var _0x10cf30;
        var _0x12072c;
        var _0x181368;
        var _0x497d38;
        var _0x13aa55;
        return _0x36f79d(this, function(_0x5f47aa) {
          switch (_0x5f47aa.label) {
            case 0:
              _0x290987 = _0x45cc83(_0x4c4394, _0x33be8f);
              _0x10cf30 = _0x290987.bombPosition;
              _0x12072c = _0x290987.bombDropPosition;
              _0x181368 = GetVehicleMod(_0x4c4394, 9);
              _0x497d38 = GetEntityModel(_0x4c4394);
              _0x13aa55 = 0;
              if (_0x181368 == 0) {
                if (_0x497d38 == GetHashKey("volatol")) {
                  _0x13aa55 = 1856325840;
                } else {
                  _0x13aa55 = -1695500020;
                }
              } else if (_0x181368 > 0 && _0x181368 < 4) {
                _0x13aa55 = _0x2a7427[_0x181368 - 1];
              }
              if (HasWeaponAssetLoaded(_0x13aa55)) {
                return [3, 2];
              }
              return [4, _0x151c5c.loadWeaponAsset(_0x13aa55, 31, 26)];
            case 1:
              _0x5f47aa.sent();
              _0x5f47aa.label = 2;
            case 2:
              ShootSingleBulletBetweenCoordsWithExtraParams(_0x10cf30.x, _0x10cf30.y, _0x10cf30.z, _0x12072c.x, _0x12072c.y, _0x12072c.z, 0, true, _0x13aa55, PlayerPedId(), true, true, -4, _0x4c4394, false, false, false, true);
              _0x5b7fad -= 1;
              PlaySoundFromEntity(-1, "bomb_deployed", _0x4c4394, "DLC_SM_Bomb_Bay_Bombs_Sounds", false, 0);
              return [2];
          }
        });
      });
      return function _0x2ac84e(_0x24fe07, _0x533577) {
        return _0x3217f7.apply(this, arguments);
      };
    })();
    var _0x1f1b3b = (function() {
      var _0x1cda2b = _0x2837e4(function() {
        return _0x36f79d(this, function(_0x162327) {
          return [2];
        });
      });
      return function _0xe96a0a() {
        return _0x1cda2b.apply(this, arguments);
      };
    })();
    ;
    function _0x514c96(_0x2fc2ba, _0x3994c4, _0x4beffb, _0x2065a9, _0x1fb697, _0x360339, _0x4f3768) {
      try {
        var _0xb6ade0 = _0x2fc2ba[_0x360339](_0x4f3768);
        var _0x1ac82c = _0xb6ade0.value;
      } catch (_0x149a9b) {
        _0x4beffb(_0x149a9b);
        return;
      }
      if (_0xb6ade0.done) {
        _0x3994c4(_0x1ac82c);
      } else {
        Promise.resolve(_0x1ac82c).then(_0x2065a9, _0x1fb697);
      }
    }
    function _0xb26088(_0x45634f) {
      return function() {
        var _0x4cfa3c = this;
        var _0x49c967 = arguments;
        return new Promise(function(_0x481d0e, _0x53d209) {
          var _0x3aa127 = _0x45634f.apply(_0x4cfa3c, _0x49c967);
          function _0x2aac70(_0x339137) {
            _0x514c96(_0x3aa127, _0x481d0e, _0x53d209, _0x2aac70, _0xcb7f8e, "next", _0x339137);
          }
          function _0xcb7f8e(_0x148a4a) {
            _0x514c96(_0x3aa127, _0x481d0e, _0x53d209, _0x2aac70, _0xcb7f8e, "throw", _0x148a4a);
          }
          _0x2aac70(void 0);
        });
      };
    }
    function _0x18d816(_0x7425d3, _0xfe0031) {
      var _0x5e2dfc;
      var _0x495022;
      var _0x1c54ae;
      var _0x31d71c;
      var _0x56a2ea = {
        label: 0,
        sent: function() {
          if (_0x1c54ae[0] & 1) {
            throw _0x1c54ae[1];
          }
          return _0x1c54ae[1];
        },
        trys: [],
        ops: []
      };
      _0x31d71c = {
        next: _0x4054f4(0),
        throw: _0x4054f4(1),
        return: _0x4054f4(2)
      };
      if (typeof Symbol === "function") {
        _0x31d71c[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x31d71c;
      function _0x4054f4(_0x40033f) {
        return function(_0x2c22d8) {
          return _0x44df37([_0x40033f, _0x2c22d8]);
        };
      }
      function _0x44df37(_0x4e0f0e) {
        if (_0x5e2dfc) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x56a2ea) {
          try {
            _0x5e2dfc = 1;
            if (_0x495022 && (_0x1c54ae = _0x4e0f0e[0] & 2 ? _0x495022.return : _0x4e0f0e[0] ? _0x495022.throw || ((_0x1c54ae = _0x495022.return) && _0x1c54ae.call(_0x495022), 0) : _0x495022.next) && !(_0x1c54ae = _0x1c54ae.call(_0x495022, _0x4e0f0e[1])).done) {
              return _0x1c54ae;
            }
            _0x495022 = 0;
            if (_0x1c54ae) {
              _0x4e0f0e = [_0x4e0f0e[0] & 2, _0x1c54ae.value];
            }
            switch (_0x4e0f0e[0]) {
              case 0:
              case 1:
                _0x1c54ae = _0x4e0f0e;
                break;
              case 4:
                _0x56a2ea.label++;
                return {
                  value: _0x4e0f0e[1],
                  done: false
                };
              case 5:
                _0x56a2ea.label++;
                _0x495022 = _0x4e0f0e[1];
                _0x4e0f0e = [0];
                continue;
              case 7:
                _0x4e0f0e = _0x56a2ea.ops.pop();
                _0x56a2ea.trys.pop();
                continue;
              default:
                if (!(_0x1c54ae = _0x56a2ea.trys, _0x1c54ae = _0x1c54ae.length > 0 && _0x1c54ae[_0x1c54ae.length - 1]) && (_0x4e0f0e[0] === 6 || _0x4e0f0e[0] === 2)) {
                  _0x56a2ea = 0;
                  continue;
                }
                if (_0x4e0f0e[0] === 3 && (!_0x1c54ae || _0x4e0f0e[1] > _0x1c54ae[0] && _0x4e0f0e[1] < _0x1c54ae[3])) {
                  _0x56a2ea.label = _0x4e0f0e[1];
                  break;
                }
                if (_0x4e0f0e[0] === 6 && _0x56a2ea.label < _0x1c54ae[1]) {
                  _0x56a2ea.label = _0x1c54ae[1];
                  _0x1c54ae = _0x4e0f0e;
                  break;
                }
                if (_0x1c54ae && _0x56a2ea.label < _0x1c54ae[2]) {
                  _0x56a2ea.label = _0x1c54ae[2];
                  _0x56a2ea.ops.push(_0x4e0f0e);
                  break;
                }
                if (_0x1c54ae[2]) {
                  _0x56a2ea.ops.pop();
                }
                _0x56a2ea.trys.pop();
                continue;
            }
            _0x4e0f0e = _0xfe0031.call(_0x7425d3, _0x56a2ea);
          } catch (_0x4ea1be) {
            _0x4e0f0e = [6, _0x4ea1be];
            _0x495022 = 0;
          } finally {
            _0x5e2dfc = _0x1c54ae = 0;
          }
        }
        if (_0x4e0f0e[0] & 5) {
          throw _0x4e0f0e[1];
        }
        var _0xb0c7a7 = {
          value: _0x4e0f0e[0] ? _0x4e0f0e[1] : void 0,
          done: true
        };
        return _0xb0c7a7;
      }
    }
    var _0x1b1802 = false;
    var _0x155f7c = false;
    var _0x2e6bf3 = 0;
    var _0x198195 = 0;
    var _0x2978aa = null;
    var _0x39c7ad = (function() {
      var _0x2f8c06 = _0xb26088(function() {
        var _0x8dac7;
        return _0x18d816(this, function(_0x5dcb0f) {
          switch (_0x5dcb0f.label) {
            case 0:
              _0x506c0a.addBoxZone("wipe:mayoroff", "wipe:mayoroff", new _0x4bd5f4(340.76, -1618.5, 54.59), 8.6, 8.4, {
                heading: 320,
                minZ: 53.39,
                maxZ: 57.39
              }, {});
              return [4, _0x38f759.execute("misc:wipe:load")];
            case 1:
              _0x8dac7 = _0x5dcb0f.sent();
              _0x1b1802 = _0x8dac7.isWipeMechanicEnabled;
              _0x155f7c = _0x8dac7.isUsbInserted;
              _0x198195 = _0x8dac7.endTime;
              _0x2e6bf3 = _0x8dac7.startTime;
              _0x4c27ed.addInteraction("wipe:insertUsb", new _0x4bd5f4(340.52, -1619.31, 54.46), [{
                id: "wipe:insertUsb",
                label: "Insert USB",
                eventSDK: "misc:wipe:insertUsb",
                parameters: {}
              }], {
                distance: {
                  draw: 2,
                  use: 1.5
                },
                skipLos: true,
                isEnabled: _0xb26088(function() {
                  var _0x4291b8;
                  return _0x18d816(this, function(_0x19d49a) {
                    switch (_0x19d49a.label) {
                      case 0:
                        _0x4291b8 = _0x1b1802 && !_0x155f7c;
                        if (!_0x4291b8) {
                          return [3, 2];
                        }
                        return [4, _0x3b5fd8.HasItem("enc_flashdrive")];
                      case 1:
                        _0x4291b8 = _0x19d49a.sent();
                        _0x19d49a.label = 2;
                      case 2:
                        return [2, _0x4291b8];
                    }
                  });
                })
              });
              var _0x83e418 = {
                distance: {
                  draw: 2,
                  use: 1.5
                },
                skipLos: true,
                isEnabled: function() {
                  return _0x1b1802 && _0x155f7c;
                }
              };
              _0x4c27ed.addInteraction("wipe:removeUsb", new _0x4bd5f4(340.52, -1619.31, 54.46), [{
                id: "wipe:removeUsb",
                label: "Remove USB",
                eventSDK: "misc:wipe:removeUsb",
                parameters: {}
              }], _0x83e418);
              return [2];
          }
        });
      });
      return function _0x2afa64() {
        return _0x2f8c06.apply(this, arguments);
      };
    })();
    _0x506c0a.onEnter("wipe:mayoroff", function() {
      _0x131735();
    });
    function _0x131735() {
      return _0x4b5b15.apply(this, arguments);
    }
    function _0x4b5b15() {
      _0x4b5b15 = _0xb26088(function() {
        return _0x18d816(this, function(_0x106bfa) {
          switch (_0x106bfa.label) {
            case 0:
              _0x2978aa = _0x27d38c.Sync["np-lib"].getDui("nui://misc/wipe/index.html", 1024, 1024);
              if (!_0x2978aa) {
                return [2];
              }
              AddReplaceTexture("xm_prop_x17_laptop_lester_01", "prop_x17_laptop_lester_01_screenprop_screen_laptop01c_a", _0x2978aa.dictionary, _0x2978aa.texture);
              if (!_0x155f7c) {
                return [2];
              }
              if (_0x198195 <= 0) {
                return [2];
              }
              return [4, _0x2ad271.wait(1e3)];
            case 1:
              _0x106bfa.sent();
              _0x27d38c.Sync["np-lib"].sendDuiMessage(_0x2978aa.id, {
                action: "start",
                startTime: _0x2e6bf3.toString(),
                endTime: _0x198195.toString(),
                label: "TEN STEPS AHEAD"
              });
              return [2];
          }
        });
      });
      return _0x4b5b15.apply(this, arguments);
    }
    function _0x1b92bc() {
      if (!_0x2978aa) {
        return;
      }
      RemoveReplaceTexture("xm_prop_x17_laptop_lester_01", "prop_x17_laptop_lester_01_screenprop_screen_laptop01c_a");
      _0x27d38c.Sync["np-lib"].releaseDui(_0x2978aa);
      _0x2978aa = null;
    }
    _0x506c0a.onExit("wipe:mayoroff", function() {
      _0x1b92bc();
    });
    _0x539aaf.onNet("misc:wipe:toggle", function(_0xe850e5, _0x28fc79, _0x495c9a, _0x472f46) {
      _0x1b1802 = _0xe850e5;
      _0x155f7c = _0x28fc79;
      _0x198195 = _0x495c9a;
      _0x2e6bf3 = _0x472f46;
      if (_0x155f7c && _0x198195 > 0) {
        if (!_0x2978aa) {
          _0x131735();
          if (!_0x2978aa) {
            return;
          }
        }
        _0x27d38c.Sync["np-lib"].sendDuiMessage(_0x2978aa.id, {
          action: "start",
          startTime: _0x2e6bf3.toString(),
          endTime: _0x198195.toString(),
          label: "TEN STEPS AHEAD"
        });
      }
      if (_0x2978aa && !_0x155f7c) {
        _0x27d38c.Sync["np-lib"].sendDuiMessage(_0x2978aa.id, {
          action: "stop"
        });
      }
    });
    _0x539aaf.onNet("misc:wipe:insertUsb", _0xb26088(function() {
      var _0x5bf0c0;
      var _0x5f5367;
      var _0x589d01;
      var _0x3f6a8e;
      return _0x18d816(this, function(_0x1c45f4) {
        switch (_0x1c45f4.label) {
          case 0:
            return [4, _0x38f759.execute("misc:wipe:insert")];
          case 1:
            _0x5bf0c0 = _0x1c45f4.sent();
            if (!_0x5bf0c0) {
              return [2];
            }
            _0x5f5367 = _0x5bf0c0 - Date.now();
            if (_0x5f5367 <= 0) {
              return [2];
            }
            _0x589d01 = Math.ceil(_0x5f5367 / 1e3 / 60);
            _0x3f6a8e = Math.ceil((_0x5f5367 - _0x589d01 * 60 * 1e3) / 1e3);
            _0x4c27ed.displayNotification(`Wipe will finish in ${_0x589d01} minutes, ${_0x3f6a8e} seconds`, "info");
            return [2];
        }
      });
    }));
    _0x539aaf.onNet("misc:wipe:removeUsb", _0xb26088(function() {
      var _0x1e7ef0;
      var _0x48a25b;
      return _0x18d816(this, function(_0x21f443) {
        switch (_0x21f443.label) {
          case 0:
            _0x1e7ef0 = {
              gridSize: 6,
              coloredSquares: 12,
              gameTimeoutDuration: 12e3
            };
            return [4, _0x3e9bc9.MemoryMinigame(_0x1e7ef0)];
          case 1:
            _0x48a25b = _0x21f443.sent();
            if (!_0x48a25b) {
              return [2];
            }
            return [4, _0x38f759.execute("misc:wipe:remove")];
          case 2:
            _0x21f443.sent();
            return [2];
        }
      });
    }));
    on("onResourceStop", function(_0x4dd088) {
      if (_0x4dd088 !== GetCurrentResourceName()) {
        return;
      }
      _0x1b92bc();
    });
    ;
    function _0x526c67() {
    }
    _0x539aaf.onNet("misc:image-viewer:show", function(_0x2f4994) {
      if (!_0x2f4994) {
        return;
      }
      var _0x2512a6 = {
        imageUrl: _0x2f4994
      };
      exports["np-ui"].openApplication("image-viewer", _0x2512a6);
    });
    ;
    function _0x1c706a(_0x2a94bd, _0x482466, _0x475416, _0x3442f2, _0x241735, _0x253827, _0x36625d) {
      try {
        var _0x4c299c = _0x2a94bd[_0x253827](_0x36625d);
        var _0x26b32f = _0x4c299c.value;
      } catch (_0x5736cc) {
        _0x475416(_0x5736cc);
        return;
      }
      if (_0x4c299c.done) {
        _0x482466(_0x26b32f);
      } else {
        Promise.resolve(_0x26b32f).then(_0x3442f2, _0x241735);
      }
    }
    function _0xa87622(_0x20464f) {
      return function() {
        var _0x3ac1c3 = this;
        var _0x5e2087 = arguments;
        return new Promise(function(_0x374601, _0x2547c9) {
          var _0x151482 = _0x20464f.apply(_0x3ac1c3, _0x5e2087);
          function _0x44f79e(_0x4292cb) {
            _0x1c706a(_0x151482, _0x374601, _0x2547c9, _0x44f79e, _0x7b1654, "next", _0x4292cb);
          }
          function _0x7b1654(_0x3287e0) {
            _0x1c706a(_0x151482, _0x374601, _0x2547c9, _0x44f79e, _0x7b1654, "throw", _0x3287e0);
          }
          _0x44f79e(void 0);
        });
      };
    }
    function _0x45140b(_0x3718ae, _0x5a1e10) {
      var _0x2c4423;
      var _0x331e9c;
      var _0x450a8e;
      var _0x127778;
      var _0x13a6bc = {
        label: 0,
        sent: function() {
          if (_0x450a8e[0] & 1) {
            throw _0x450a8e[1];
          }
          return _0x450a8e[1];
        },
        trys: [],
        ops: []
      };
      _0x127778 = {
        next: _0x2cc722(0),
        throw: _0x2cc722(1),
        return: _0x2cc722(2)
      };
      if (typeof Symbol === "function") {
        _0x127778[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x127778;
      function _0x2cc722(_0x45691a) {
        return function(_0x40ce91) {
          return _0x4c9be9([_0x45691a, _0x40ce91]);
        };
      }
      function _0x4c9be9(_0xb71074) {
        if (_0x2c4423) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x13a6bc) {
          try {
            _0x2c4423 = 1;
            if (_0x331e9c && (_0x450a8e = _0xb71074[0] & 2 ? _0x331e9c.return : _0xb71074[0] ? _0x331e9c.throw || ((_0x450a8e = _0x331e9c.return) && _0x450a8e.call(_0x331e9c), 0) : _0x331e9c.next) && !(_0x450a8e = _0x450a8e.call(_0x331e9c, _0xb71074[1])).done) {
              return _0x450a8e;
            }
            _0x331e9c = 0;
            if (_0x450a8e) {
              _0xb71074 = [_0xb71074[0] & 2, _0x450a8e.value];
            }
            switch (_0xb71074[0]) {
              case 0:
              case 1:
                _0x450a8e = _0xb71074;
                break;
              case 4:
                _0x13a6bc.label++;
                return {
                  value: _0xb71074[1],
                  done: false
                };
              case 5:
                _0x13a6bc.label++;
                _0x331e9c = _0xb71074[1];
                _0xb71074 = [0];
                continue;
              case 7:
                _0xb71074 = _0x13a6bc.ops.pop();
                _0x13a6bc.trys.pop();
                continue;
              default:
                if (!(_0x450a8e = _0x13a6bc.trys, _0x450a8e = _0x450a8e.length > 0 && _0x450a8e[_0x450a8e.length - 1]) && (_0xb71074[0] === 6 || _0xb71074[0] === 2)) {
                  _0x13a6bc = 0;
                  continue;
                }
                if (_0xb71074[0] === 3 && (!_0x450a8e || _0xb71074[1] > _0x450a8e[0] && _0xb71074[1] < _0x450a8e[3])) {
                  _0x13a6bc.label = _0xb71074[1];
                  break;
                }
                if (_0xb71074[0] === 6 && _0x13a6bc.label < _0x450a8e[1]) {
                  _0x13a6bc.label = _0x450a8e[1];
                  _0x450a8e = _0xb71074;
                  break;
                }
                if (_0x450a8e && _0x13a6bc.label < _0x450a8e[2]) {
                  _0x13a6bc.label = _0x450a8e[2];
                  _0x13a6bc.ops.push(_0xb71074);
                  break;
                }
                if (_0x450a8e[2]) {
                  _0x13a6bc.ops.pop();
                }
                _0x13a6bc.trys.pop();
                continue;
            }
            _0xb71074 = _0x5a1e10.call(_0x3718ae, _0x13a6bc);
          } catch (_0x5f42b1) {
            _0xb71074 = [6, _0x5f42b1];
            _0x331e9c = 0;
          } finally {
            _0x2c4423 = _0x450a8e = 0;
          }
        }
        if (_0xb71074[0] & 5) {
          throw _0xb71074[1];
        }
        var _0x269f1c = {
          value: _0xb71074[0] ? _0xb71074[1] : void 0,
          done: true
        };
        return _0x269f1c;
      }
    }
    function _0x3bf2e6() {
    }
    _0x506c0a.addBoxZone("mobile-casino-backalley", "mobile-casino", new _0x58b2dd(-519.76, -2212.72, 6.52), 24.8, 20.6, {
      heading: 50,
      minZ: 5.52,
      maxZ: 17.12
    }, {});
    _0x506c0a.addBoxZone("mobile-casino-dragons-lair", "mobile-casino", new _0x58b2dd(3.4, -1330.06, 33.02), 39, 17.2, {
      heading: 0,
      minZ: 27.62,
      maxZ: 37.22
    }, {});
    _0x506c0a.onEnter("mobile-casino", (function() {
      var _0x21c201 = _0xa87622(function(_0xc1adf9) {
        return _0x45140b(this, function(_0x4b3f60) {
          var _0x3bca6b = {
            id: _0xc1adf9.id,
            isEnabled: true
          };
          exports.tablet.SendAppEvent("mobile-casino", "setActive", _0x3bca6b);
          return [2];
        });
      });
      return function(_0x46910c) {
        return _0x21c201.apply(this, arguments);
      };
    })());
    _0x506c0a.onExit("mobile-casino", (function() {
      var _0x51fa21 = _0xa87622(function(_0x47f153) {
        return _0x45140b(this, function(_0x40c5a2) {
          exports.tablet.SendAppEvent("mobile-casino", "setActive", {
            id: null,
            isEnabled: false
          });
          return [2];
        });
      });
      return function(_0x2e285d) {
        return _0x51fa21.apply(this, arguments);
      };
    })());
    ;
    function _0x40c63d(_0x3f284a, _0x34d616) {
      if (_0x34d616 == null || _0x34d616 > _0x3f284a.length) {
        _0x34d616 = _0x3f284a.length;
      }
      for (var _0x55d000 = 0, _0x29c7df = new Array(_0x34d616); _0x55d000 < _0x34d616; _0x55d000++) {
        _0x29c7df[_0x55d000] = _0x3f284a[_0x55d000];
      }
      return _0x29c7df;
    }
    function _0x440d0e(_0x281f73) {
      if (Array.isArray(_0x281f73)) {
        return _0x281f73;
      }
    }
    function _0x9c63c6(_0x2bbbd4, _0x5c5606, _0x5496d6, _0x17cea7, _0x44b3ce, _0x515bda, _0x16c8f8) {
      try {
        var _0xc9e85e = _0x2bbbd4[_0x515bda](_0x16c8f8);
        var _0x445236 = _0xc9e85e.value;
      } catch (_0x302639) {
        _0x5496d6(_0x302639);
        return;
      }
      if (_0xc9e85e.done) {
        _0x5c5606(_0x445236);
      } else {
        Promise.resolve(_0x445236).then(_0x17cea7, _0x44b3ce);
      }
    }
    function _0x1f3d34(_0x442db3) {
      return function() {
        var _0x115dcd = this;
        var _0x3b6866 = arguments;
        return new Promise(function(_0x474f11, _0x4ab6e7) {
          var _0x5bcca7 = _0x442db3.apply(_0x115dcd, _0x3b6866);
          function _0x1e0c00(_0x10bfb1) {
            _0x9c63c6(_0x5bcca7, _0x474f11, _0x4ab6e7, _0x1e0c00, _0x378b69, "next", _0x10bfb1);
          }
          function _0x378b69(_0x48aa5d) {
            _0x9c63c6(_0x5bcca7, _0x474f11, _0x4ab6e7, _0x1e0c00, _0x378b69, "throw", _0x48aa5d);
          }
          _0x1e0c00(void 0);
        });
      };
    }
    function _0xf5c3b5(_0x2dfa2e, _0x3b6945) {
      var _0x574a46 = _0x2dfa2e == null ? null : typeof Symbol !== "undefined" && _0x2dfa2e[Symbol.iterator] || _0x2dfa2e["@@iterator"];
      if (_0x574a46 == null) {
        return;
      }
      var _0x23c13b = [];
      var _0x345a2 = true;
      var _0x30108b = false;
      var _0x10bee9;
      var _0xe94b0d;
      try {
        for (_0x574a46 = _0x574a46.call(_0x2dfa2e); !(_0x345a2 = (_0x10bee9 = _0x574a46.next()).done); _0x345a2 = true) {
          _0x23c13b.push(_0x10bee9.value);
          if (_0x3b6945 && _0x23c13b.length === _0x3b6945) {
            break;
          }
        }
      } catch (_0xdefc39) {
        _0x30108b = true;
        _0xe94b0d = _0xdefc39;
      } finally {
        try {
          if (!_0x345a2 && _0x574a46.return != null) {
            _0x574a46.return();
          }
        } finally {
          if (_0x30108b) {
            throw _0xe94b0d;
          }
        }
      }
      return _0x23c13b;
    }
    function _0xdf244b() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _0x47b7af(_0x1339b8, _0x2480d2) {
      return _0x440d0e(_0x1339b8) || _0xf5c3b5(_0x1339b8, _0x2480d2) || _0xed79ba(_0x1339b8, _0x2480d2) || _0xdf244b();
    }
    function _0xed79ba(_0x301d8b, _0x4d711d) {
      if (!_0x301d8b) {
        return;
      }
      if (typeof _0x301d8b === "string") {
        return _0x40c63d(_0x301d8b, _0x4d711d);
      }
      var _0x283f02 = Object.prototype.toString.call(_0x301d8b).slice(8, -1);
      if (_0x283f02 === "Object" && _0x301d8b.constructor) {
        _0x283f02 = _0x301d8b.constructor.name;
      }
      if (_0x283f02 === "Map" || _0x283f02 === "Set") {
        return Array.from(_0x283f02);
      }
      if (_0x283f02 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x283f02)) {
        return _0x40c63d(_0x301d8b, _0x4d711d);
      }
    }
    function _0x529600(_0x5d7b20, _0x1b982d) {
      var _0x39d6de;
      var _0x2abeff;
      var _0x1e7b5b;
      var _0x55b9a7;
      var _0x38a20f = {
        label: 0,
        sent: function() {
          if (_0x1e7b5b[0] & 1) {
            throw _0x1e7b5b[1];
          }
          return _0x1e7b5b[1];
        },
        trys: [],
        ops: []
      };
      _0x55b9a7 = {
        next: _0x58f760(0),
        throw: _0x58f760(1),
        return: _0x58f760(2)
      };
      if (typeof Symbol === "function") {
        _0x55b9a7[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x55b9a7;
      function _0x58f760(_0x34c484) {
        return function(_0x58c08a) {
          return _0x59b165([_0x34c484, _0x58c08a]);
        };
      }
      function _0x59b165(_0x5c4a1a) {
        if (_0x39d6de) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x38a20f) {
          try {
            _0x39d6de = 1;
            if (_0x2abeff && (_0x1e7b5b = _0x5c4a1a[0] & 2 ? _0x2abeff.return : _0x5c4a1a[0] ? _0x2abeff.throw || ((_0x1e7b5b = _0x2abeff.return) && _0x1e7b5b.call(_0x2abeff), 0) : _0x2abeff.next) && !(_0x1e7b5b = _0x1e7b5b.call(_0x2abeff, _0x5c4a1a[1])).done) {
              return _0x1e7b5b;
            }
            _0x2abeff = 0;
            if (_0x1e7b5b) {
              _0x5c4a1a = [_0x5c4a1a[0] & 2, _0x1e7b5b.value];
            }
            switch (_0x5c4a1a[0]) {
              case 0:
              case 1:
                _0x1e7b5b = _0x5c4a1a;
                break;
              case 4:
                _0x38a20f.label++;
                return {
                  value: _0x5c4a1a[1],
                  done: false
                };
              case 5:
                _0x38a20f.label++;
                _0x2abeff = _0x5c4a1a[1];
                _0x5c4a1a = [0];
                continue;
              case 7:
                _0x5c4a1a = _0x38a20f.ops.pop();
                _0x38a20f.trys.pop();
                continue;
              default:
                if (!(_0x1e7b5b = _0x38a20f.trys, _0x1e7b5b = _0x1e7b5b.length > 0 && _0x1e7b5b[_0x1e7b5b.length - 1]) && (_0x5c4a1a[0] === 6 || _0x5c4a1a[0] === 2)) {
                  _0x38a20f = 0;
                  continue;
                }
                if (_0x5c4a1a[0] === 3 && (!_0x1e7b5b || _0x5c4a1a[1] > _0x1e7b5b[0] && _0x5c4a1a[1] < _0x1e7b5b[3])) {
                  _0x38a20f.label = _0x5c4a1a[1];
                  break;
                }
                if (_0x5c4a1a[0] === 6 && _0x38a20f.label < _0x1e7b5b[1]) {
                  _0x38a20f.label = _0x1e7b5b[1];
                  _0x1e7b5b = _0x5c4a1a;
                  break;
                }
                if (_0x1e7b5b && _0x38a20f.label < _0x1e7b5b[2]) {
                  _0x38a20f.label = _0x1e7b5b[2];
                  _0x38a20f.ops.push(_0x5c4a1a);
                  break;
                }
                if (_0x1e7b5b[2]) {
                  _0x38a20f.ops.pop();
                }
                _0x38a20f.trys.pop();
                continue;
            }
            _0x5c4a1a = _0x1b982d.call(_0x5d7b20, _0x38a20f);
          } catch (_0x336024) {
            _0x5c4a1a = [6, _0x336024];
            _0x2abeff = 0;
          } finally {
            _0x39d6de = _0x1e7b5b = 0;
          }
        }
        if (_0x5c4a1a[0] & 5) {
          throw _0x5c4a1a[1];
        }
        var _0x2e8d8a = {
          value: _0x5c4a1a[0] ? _0x5c4a1a[1] : void 0,
          done: true
        };
        return _0x2e8d8a;
      }
    }
    var _0x55d7a3 = "misc_projector_screen";
    var _0x47a8a1 = /* @__PURE__ */ new Map();
    var _0x5f32b8 = /* @__PURE__ */ new Set();
    function _0x49d660() {
      var _0x52f288 = true;
      var _0x3cc68a = false;
      var _0x6ea601 = void 0;
      try {
        let _0x4fa5ba = function() {
          var _0x304515 = _0x1a7d20.value;
          _0x506c0a.addBoxZone(_0x304515.id, _0x55d7a3, new _0x4bd5f4(_0x304515.zone.center), _0x304515.zone.length, _0x304515.zone.width, _0x304515.zone.options, {});
          _0x4c27ed.addInteraction(`misc_projector_${_0x304515.id}`, new _0x4bd5f4(_0x304515.interaction), [{
            id: `misc_projector_change_url_${_0x304515.id}`,
            label: "Change Screen",
            eventSDK: "misc:projector:change",
            parameters: {
              screenId: _0x304515.id
            }
          }, {
            id: `misc_projector_clear_${_0x304515.id}`,
            label: "Clear Screen",
            eventSDK: "misc:projector:clear",
            parameters: {
              screenId: _0x304515.id
            }
          }], {
            distance: {
              draw: 10,
              use: 3
            },
            isEnabled: function() {
              return _0x5f32b8.has(_0x304515.id);
            }
          });
        };
        for (var _0x2f1edc = _0x1c052b[Symbol.iterator](), _0x1a7d20; !(_0x52f288 = (_0x1a7d20 = _0x2f1edc.next()).done); _0x52f288 = true) {
          _0x4fa5ba();
        }
      } catch (_0x226d18) {
        _0x3cc68a = true;
        _0x6ea601 = _0x226d18;
      } finally {
        try {
          if (!_0x52f288 && _0x2f1edc.return != null) {
            _0x2f1edc.return();
          }
        } finally {
          if (_0x3cc68a) {
            throw _0x6ea601;
          }
        }
      }
    }
    function _0x4ae8d2(_0x1a1bd4, _0x4ebaf8) {
      return _0x3d338a.apply(this, arguments);
    }
    function _0x3d338a() {
      _0x3d338a = _0x1f3d34(function(_0x1f00ba, _0x368569) {
        var _0x1ab091;
        var _0x12a7f9;
        var _0x5bffa4;
        var _0x55bcda;
        var _0x548fcd;
        return _0x529600(this, function(_0x320cfc) {
          switch (_0x320cfc.label) {
            case 0:
              _0x1ab091 = _0x58ea0c(_0x1f00ba);
              if (!_0x1ab091) {
                return [2];
              }
              if (_0x368569 === null || _0x368569 === void 0) {
                return [3, 1];
              }
              _0x5bffa4 = _0x368569;
              return [3, 3];
            case 1:
              return [4, _0x38f759.execute("misc:projector:getUrl", _0x1f00ba)];
            case 2:
              _0x5bffa4 = _0x320cfc.sent();
              _0x320cfc.label = 3;
            case 3:
              _0x12a7f9 = _0x5bffa4;
              if (!_0x12a7f9) {
                _0x55828d(_0x1f00ba);
                return [2];
              }
              _0x55bcda = _0x47a8a1.get(_0x1ab091.id);
              if (_0x55bcda) {
                _0x27d38c.Sync["np-lib"].releaseDui(_0x55bcda);
                _0x47a8a1.delete(_0x1ab091.id);
              }
              _0x548fcd = _0x27d38c.Sync["np-lib"].getDui(_0x12a7f9, _0x1ab091.resolution[0], _0x1ab091.resolution[1]);
              if (!_0x548fcd) {
                return [2];
              }
              AddReplaceTexture(_0x1ab091.texture.dict, _0x1ab091.texture.name, _0x548fcd.dictionary, _0x548fcd.texture);
              _0x47a8a1.set(_0x1ab091.id, _0x548fcd.id);
              return [2];
          }
        });
      });
      return _0x3d338a.apply(this, arguments);
    }
    function _0x55828d(_0x5441b3) {
      var _0x20c16 = _0x58ea0c(_0x5441b3);
      if (!_0x20c16) {
        return;
      }
      var _0x471397 = _0x47a8a1.get(_0x20c16.id);
      if (_0x471397) {
        _0x27d38c.Sync["np-lib"].releaseDui(_0x471397);
        _0x47a8a1.delete(_0x20c16.id);
      }
      RemoveReplaceTexture(_0x20c16.texture.dict, _0x20c16.texture.name);
    }
    _0x506c0a.onEnter(_0x55d7a3, function(_0x1e59c8) {
      _0x4ae8d2(_0x1e59c8.id);
      _0x5f32b8.add(_0x1e59c8.id);
      console.log(`Entered projector zone for screen ${_0x1e59c8.id}`);
    });
    _0x506c0a.onExit(_0x55d7a3, function(_0x287fbc) {
      _0x55828d(_0x287fbc.id);
      _0x5f32b8.delete(_0x287fbc.id);
    });
    _0x539aaf.on("misc:projector:change", (function() {
      var _0x53a4d = _0x1f3d34(function(_0x487aed) {
        var _0x9c0eab;
        var _0x52b390;
        var _0xc31582;
        var _0x3a5e21;
        var _0x25160b;
        var _0x4ef7ff;
        var _0x3843fe;
        var _0x22a355;
        var _0x490726;
        return _0x529600(this, function(_0x25ea8a) {
          switch (_0x25ea8a.label) {
            case 0:
              _0x9c0eab = _0x58ea0c(_0x487aed.screenId);
              if (!_0x9c0eab) {
                return [2];
              }
              return [4, _0x27d38c.Sync["np-ui"].OpenInputMenu([{
                name: "url",
                label: "Screen URL",
                icon: "pencil-alt"
              }], function(_0x1d5a65) {
                return typeof _0x1d5a65.url === "string";
              })];
            case 1:
              _0x52b390 = _0x25ea8a.sent();
              if (!_0x52b390) {
                return [2];
              }
              _0xc31582 = _0x52b390.url.trim();
              _0x3a5e21 = _0x47b7af(_0x122a8d(_0xc31582), 2);
              _0x25160b = _0x3a5e21[0];
              _0x4ef7ff = _0x3a5e21[1];
              if (!_0x25160b) {
                return [2, emit("DoLongHudText", _0x4ef7ff, 2)];
              }
              return [4, _0x38f759.execute("misc:projector:updateUrl", _0x9c0eab.id, _0xc31582)];
            case 2:
              _0x3843fe = _0x47b7af.apply(void 0, [_0x25ea8a.sent(), 2]);
              _0x22a355 = _0x3843fe[0];
              _0x490726 = _0x3843fe[1];
              emit("DoLongHudText", _0x490726, _0x22a355 ? 1 : 2);
              return [2];
          }
        });
      });
      return function(_0x1fc690) {
        return _0x53a4d.apply(this, arguments);
      };
    })());
    _0x539aaf.on("misc:projector:clear", (function() {
      var _0x1ff960 = _0x1f3d34(function(_0x1dd3e1) {
        var _0xeb6bc6;
        var _0x632f63;
        var _0x53d47e;
        var _0x5b4db9;
        return _0x529600(this, function(_0x1c39b0) {
          switch (_0x1c39b0.label) {
            case 0:
              _0xeb6bc6 = _0x58ea0c(_0x1dd3e1.screenId);
              if (!_0xeb6bc6) {
                return [2];
              }
              return [4, _0x38f759.execute("misc:projector:updateUrl", _0xeb6bc6.id, "")];
            case 1:
              _0x632f63 = _0x47b7af.apply(void 0, [_0x1c39b0.sent(), 2]);
              _0x53d47e = _0x632f63[0];
              _0x5b4db9 = _0x632f63[1];
              emit("DoLongHudText", _0x5b4db9, _0x53d47e ? 1 : 2);
              return [2];
          }
        });
      });
      return function(_0x3dd655) {
        return _0x1ff960.apply(this, arguments);
      };
    })());
    _0x539aaf.onNet("misc:projector:sync", function(_0x447289, _0x19e8b3) {
      if (!_0x5f32b8.has(_0x447289)) {
        return;
      }
      _0x4ae8d2(_0x447289, _0x19e8b3);
    });
    on("onResourceStop", function(_0x19f0a7) {
      if (_0x19f0a7 !== GetCurrentResourceName()) {
        return;
      }
      var _0x36cf5e = true;
      var _0x192a9f = false;
      var _0x7181f2 = void 0;
      try {
        for (var _0x41296b = _0x1c052b[Symbol.iterator](), _0x3cd1bb; !(_0x36cf5e = (_0x3cd1bb = _0x41296b.next()).done); _0x36cf5e = true) {
          var _0x504977 = _0x3cd1bb.value;
          _0x55828d(_0x504977.id);
        }
      } catch (_0x376414) {
        _0x192a9f = true;
        _0x7181f2 = _0x376414;
      } finally {
        try {
          if (!_0x36cf5e && _0x41296b.return != null) {
            _0x41296b.return();
          }
        } finally {
          if (_0x192a9f) {
            throw _0x7181f2;
          }
        }
      }
    });
    function _0x58ea0c(_0xdc5b4d) {
      return _0x1c052b.find(function(_0x53dcc6) {
        return _0x53dcc6.id === _0xdc5b4d;
      });
    }
    function _0x122a8d(_0x3637a5) {
      if (_0x3637a5.length === 0) {
        return [true, ""];
      }
      if (_0x3637a5.includes("imgur.com")) {
        return [false, "Imgur links are not able to be used currently."];
      }
      var _0x24f7d2 = /^https:\/\/(?:[\w-]+\.)+[\w-]+(?:\/[\w-]+)*\/?([a-zA-Z0-9]+(\.png|\.jpg|\.jpeg|\.gif))$/;
      var _0x308859 = _0x24f7d2.test(_0x3637a5);
      var _0x5c7dc1 = _0x3637a5.includes("twitch.tv");
      var _0x937741 = _0x3637a5.includes("youtube.com") || _0x3637a5.includes("youtu.be");
      var _0x355794 = _0x3637a5.includes("streamable.com");
      var _0x3df79a = _0x3637a5.includes("kick.com");
      if (!_0x308859 && !_0x5c7dc1 && !_0x937741 && !_0x355794 && !_0x3df79a) {
        return [false, "URL must contain a valid image file extension (.png, .jpg, .jpeg, .gif), or be a Twitch, YouTube, Streamable, or Kick link."];
      }
      return [true, ""];
    }
    ;
    var _0x5c5c72 = {
      safe: "In Safe Zone",
      kill: "In Kill Zone"
    };
    var _0x258def = /* @__PURE__ */ new Map();
    var _0x3a51e3 = false;
    var _0x49ef5a = null;
    function _0x4b7314() {
      var _0x24aac0 = true;
      var _0x49fc35 = false;
      var _0x5e9149 = void 0;
      try {
        for (var _0x107c9d = _0x509f61[Symbol.iterator](), _0x354671; !(_0x24aac0 = (_0x354671 = _0x107c9d.next()).done); _0x24aac0 = true) {
          var _0x467a23 = _0x354671.value;
          _0x506c0a.addPolyZone(_0x467a23.id, _0x1b1570, _0x467a23.points, _0x467a23.options ?? {}, {
            id: _0x467a23.id
          });
        }
      } catch (_0x90af43) {
        _0x49fc35 = true;
        _0x5e9149 = _0x90af43;
      } finally {
        try {
          if (!_0x24aac0 && _0x107c9d.return != null) {
            _0x107c9d.return();
          }
        } finally {
          if (_0x49fc35) {
            throw _0x5e9149;
          }
        }
      }
      _0x506c0a.onEnter(_0x1b1570, function(_0x46a5ab) {
        var _0x184853 = _0x509f61.find(function(_0x29fa99) {
          return _0x29fa99.id === _0x46a5ab.id;
        });
        if (!_0x184853) {
          return;
        }
        _0x258def.set(_0x184853.id, _0x184853);
        _0x29ecb8();
      });
      _0x506c0a.onExit(_0x1b1570, function(_0x45f0e9) {
        _0x258def.delete(_0x45f0e9.id);
        _0x29ecb8();
      });
      _0x539aaf.onNet("misc:theBoard:setZoneDisplay", function(_0xd6983a) {
        _0x3a51e3 = _0xd6983a;
        if (_0x3a51e3) {
          _0x1ffd47();
        }
        _0x29ecb8();
      });
      _0x539aaf.emitNet("misc:theBoard:requestZoneDisplay");
    }
    function _0x1ffd47() {
      _0x258def.clear();
      var _0x4bb2ee = GetEntityCoords(PlayerPedId(), false);
      var _0x859261 = {
        x: _0x4bb2ee[0],
        y: _0x4bb2ee[1],
        z: _0x4bb2ee[2]
      };
      var _0x506f3a = _0x27d38c.Sync["np-polyzone"].ExpensiveGetZoneFromPoint(_0x859261) ?? [];
      var _0x39bd58 = {
        x: _0x4bb2ee[0],
        y: _0x4bb2ee[1],
        z: _0x4bb2ee[2]
      };
      var _0x1353a3 = _0x27d38c.Sync["np-polyzone"].ExpensiveIsPointInsideZone(_0x39bd58, [_0x1b1570]);
      if (_0x1353a3) {
        var _0x33b4ce = _0x506f3a.find(function(_0x4ec1ea) {
          return _0x4ec1ea.name === _0x1b1570;
        });
        var _0x4daa03 = _0x509f61.find(function(_0x11a29d) {
          var _0x27caff;
          return _0x11a29d.id === ((_0x27caff = _0x33b4ce) === null || _0x27caff === void 0 ? void 0 : _0x27caff.data?.id);
        }) ?? _0x509f61[0];
        if (_0x4daa03) {
          _0x258def.set(_0x4daa03.id, _0x4daa03);
          return;
        }
      }
      var _0x11dcc8 = true;
      var _0x505010 = false;
      var _0xa5208f = void 0;
      try {
        let _0x563f74 = function() {
          var _0x249213 = _0x5c8324.value;
          var _0x2fd8ad = _0x506f3a.some(function(_0x2e8e78) {
            return _0x2e8e78.name === _0x1b1570 && _0x2e8e78.data?.id === _0x249213.id;
          });
          if (_0x2fd8ad || _0x506c0a.isActive(_0x1b1570, _0x249213.id)) {
            _0x258def.set(_0x249213.id, _0x249213);
          }
        };
        for (var _0x4e0ca4 = _0x509f61[Symbol.iterator](), _0x5c8324; !(_0x11dcc8 = (_0x5c8324 = _0x4e0ca4.next()).done); _0x11dcc8 = true) {
          _0x563f74();
        }
      } catch (_0x142d75) {
        _0x505010 = true;
        _0xa5208f = _0x142d75;
      } finally {
        try {
          if (!_0x11dcc8 && _0x4e0ca4.return != null) {
            _0x4e0ca4.return();
          }
        } finally {
          if (_0x505010) {
            throw _0xa5208f;
          }
        }
      }
    }
    function _0x29ecb8() {
      if (!_0x3a51e3) {
        _0x49ef5a = null;
        _0x5d591a(null);
        return;
      }
      var _0x398c38 = _0x258def.values().next().value;
      if (_0x398c38) {
        var _0x3b544a = {
          id: _0x398c38.id,
          type: "safe",
          label: _0x5c5c72.safe
        };
        _0x5d591a(_0x3b544a);
        return;
      }
      var _0x2138da = {
        id: "world",
        type: "kill",
        label: _0x5c5c72.kill
      };
      _0x5d591a(_0x2138da);
    }
    function _0x5d591a(_0x30b536) {
      var _0x40e30d = _0x30b536 ? `${_0x30b536.type}:${_0x30b536.id}` : null;
      if (_0x40e30d && _0x40e30d !== _0x49ef5a) {
        _0x1a0605(_0x30b536.type);
      }
      _0x49ef5a = _0x40e30d;
      var _0x1de19b = {
        theBoardZone: _0x30b536
      };
      _0x27d38c.Sync.hud.sendAppEvent(_0x1de19b);
    }
    function _0x1a0605(_0x5cbee7) {
      if (_0x5cbee7 === "safe") {
        PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
        return;
      }
      PlaySoundFrontend(-1, "IDLE_BEEP", "epsilonism_04_soundset", true);
      setTimeout(function() {
        PlaySoundFrontend(-1, "IDLE_BEEP", "epsilonism_04_soundset", true);
      }, 180);
    }
    ;
    function _0x4da006() {
      _0x12c82b();
      _0x24ea9e();
      _0x4cb169();
      _0x33f514();
      _0x3591ae();
      _0x224aa8();
      _0x58d2be();
      _0x24658a();
      _0x4f9852();
      _0x539dce();
      _0x434748();
      _0xe56cd9();
      _0x4afc6e();
      _0x1f1b3b();
      _0x39c7ad();
      _0x526c67();
      _0x3bf2e6();
      _0x49d660();
      _0x4b7314();
    }
    _0x154c38.RegisterStatebagChangeHandler("ghostState", false, false, function(_0x388dfa, _0xa4a4d9, _0x3e8f2f) {
      if (_0x3e8f2f === "ghost") {
        SetEntityAlpha(_0xa4a4d9, 204, false);
      } else if (_0x3e8f2f === "invisible") {
        SetEntityAlpha(_0xa4a4d9, 0, false);
      } else {
        SetEntityAlpha(_0xa4a4d9, 255, false);
      }
      console.log(`[Misc] Updating ghost mode for - ${_0x388dfa}`);
    });
    ;
    function _0x3bfa8f(_0x3f4ef8, _0x34199b, _0x2833f9, _0x5b46b8, _0x398062, _0x304321, _0x387a18) {
      try {
        var _0x2a4f15 = _0x3f4ef8[_0x304321](_0x387a18);
        var _0x213077 = _0x2a4f15.value;
      } catch (_0x11c470) {
        _0x2833f9(_0x11c470);
        return;
      }
      if (_0x2a4f15.done) {
        _0x34199b(_0x213077);
      } else {
        Promise.resolve(_0x213077).then(_0x5b46b8, _0x398062);
      }
    }
    function _0x5e7a5b(_0x1384ab) {
      return function() {
        var _0x4a675c = this;
        var _0x425537 = arguments;
        return new Promise(function(_0x4799c5, _0x2958a0) {
          var _0x4f70aa = _0x1384ab.apply(_0x4a675c, _0x425537);
          function _0x12bfc0(_0x21e075) {
            _0x3bfa8f(_0x4f70aa, _0x4799c5, _0x2958a0, _0x12bfc0, _0x547507, "next", _0x21e075);
          }
          function _0x547507(_0x147dfd) {
            _0x3bfa8f(_0x4f70aa, _0x4799c5, _0x2958a0, _0x12bfc0, _0x547507, "throw", _0x147dfd);
          }
          _0x12bfc0(void 0);
        });
      };
    }
    function _0x495548(_0x3019cf, _0x563a63) {
      var _0x46f837;
      var _0x585f74;
      var _0x40083a;
      var _0x12cc2c;
      var _0x1c5415 = {
        label: 0,
        sent: function() {
          if (_0x40083a[0] & 1) {
            throw _0x40083a[1];
          }
          return _0x40083a[1];
        },
        trys: [],
        ops: []
      };
      _0x12cc2c = {
        next: _0x5e8a43(0),
        throw: _0x5e8a43(1),
        return: _0x5e8a43(2)
      };
      if (typeof Symbol === "function") {
        _0x12cc2c[Symbol.iterator] = function() {
          return this;
        };
      }
      return _0x12cc2c;
      function _0x5e8a43(_0x4589f1) {
        return function(_0x3d1d4f) {
          return _0x84f91e([_0x4589f1, _0x3d1d4f]);
        };
      }
      function _0x84f91e(_0x28a1db) {
        if (_0x46f837) {
          throw new TypeError("Generator is already executing.");
        }
        while (_0x1c5415) {
          try {
            _0x46f837 = 1;
            if (_0x585f74 && (_0x40083a = _0x28a1db[0] & 2 ? _0x585f74.return : _0x28a1db[0] ? _0x585f74.throw || ((_0x40083a = _0x585f74.return) && _0x40083a.call(_0x585f74), 0) : _0x585f74.next) && !(_0x40083a = _0x40083a.call(_0x585f74, _0x28a1db[1])).done) {
              return _0x40083a;
            }
            _0x585f74 = 0;
            if (_0x40083a) {
              _0x28a1db = [_0x28a1db[0] & 2, _0x40083a.value];
            }
            switch (_0x28a1db[0]) {
              case 0:
              case 1:
                _0x40083a = _0x28a1db;
                break;
              case 4:
                _0x1c5415.label++;
                return {
                  value: _0x28a1db[1],
                  done: false
                };
              case 5:
                _0x1c5415.label++;
                _0x585f74 = _0x28a1db[1];
                _0x28a1db = [0];
                continue;
              case 7:
                _0x28a1db = _0x1c5415.ops.pop();
                _0x1c5415.trys.pop();
                continue;
              default:
                if (!(_0x40083a = _0x1c5415.trys, _0x40083a = _0x40083a.length > 0 && _0x40083a[_0x40083a.length - 1]) && (_0x28a1db[0] === 6 || _0x28a1db[0] === 2)) {
                  _0x1c5415 = 0;
                  continue;
                }
                if (_0x28a1db[0] === 3 && (!_0x40083a || _0x28a1db[1] > _0x40083a[0] && _0x28a1db[1] < _0x40083a[3])) {
                  _0x1c5415.label = _0x28a1db[1];
                  break;
                }
                if (_0x28a1db[0] === 6 && _0x1c5415.label < _0x40083a[1]) {
                  _0x1c5415.label = _0x40083a[1];
                  _0x40083a = _0x28a1db;
                  break;
                }
                if (_0x40083a && _0x1c5415.label < _0x40083a[2]) {
                  _0x1c5415.label = _0x40083a[2];
                  _0x1c5415.ops.push(_0x28a1db);
                  break;
                }
                if (_0x40083a[2]) {
                  _0x1c5415.ops.pop();
                }
                _0x1c5415.trys.pop();
                continue;
            }
            _0x28a1db = _0x563a63.call(_0x3019cf, _0x1c5415);
          } catch (_0x16cdb3) {
            _0x28a1db = [6, _0x16cdb3];
            _0x585f74 = 0;
          } finally {
            _0x46f837 = _0x40083a = 0;
          }
        }
        if (_0x28a1db[0] & 5) {
          throw _0x28a1db[1];
        }
        var _0xd81173 = {
          value: _0x28a1db[0] ? _0x28a1db[1] : void 0,
          done: true
        };
        return _0xd81173;
      }
    }
    var _0x3a4034 = new _0xe5a063({
      codename: "boilerplate",
      version: "0.0.0"
    });
    on("onClientResourceStart", (function() {
      var _0x4f428a = _0x5e7a5b(function(_0x2e3c90) {
        return _0x495548(this, function(_0x26fee9) {
          if (_0x2e3c90 !== GetCurrentResourceName()) {
            return [2];
          }
          _0x4da006();
          SetVehicleXmasSnowFactor(0);
          _0x4c27ed.addInteractionByModel("random_drops", ["w_me_hammer", "w_me_gclub", "w_me_bottle", "w_ex_brick", "w_me_bat"], [{
            id: "pickup",
            label: "Pick Up",
            eventSDK: "drops:pickup",
            parameters: {}
          }], {
            distance: {
              use: 2.5,
              draw: 5
            },
            isEnabled: function(_0x1fedcc) {
              if (!_0x1fedcc) {
                return false;
              }
              var _0x4c4682 = _0x27d38c.Sync["np-objects"].GetObjectByEntity(_0x1fedcc);
              if (!_0x4c4682) {
                return false;
              }
              return true;
            }
          });
          return [2];
        });
      });
      return function(_0x27e19f) {
        return _0x4f428a.apply(this, arguments);
      };
    })());
    var _0x3542bf = /* @__PURE__ */ new Map();
    var _0x15e34e = 3e5;
    on("shoes:steal", (function() {
      var _0x73f05a = _0x5e7a5b(function(_0x185fa1, _0x527e2f) {
        var _0x3d3afc;
        return _0x495548(this, function(_0x1ab0a0) {
          switch (_0x1ab0a0.label) {
            case 0:
              if (_0x3542bf.has(_0x527e2f) && GetGameTimer() - _0x3542bf.get(_0x527e2f) < _0x15e34e) {
                return [2, emit("DoLongHudText", "Need to wait before trying to steal their shoes again!", 2)];
              }
              _0x3542bf.set(_0x527e2f, GetGameTimer());
              _0x3d3afc = PlayerPedId();
              return [4, _0x151c5c.loadAnim("pickup_object")];
            case 1:
              _0x1ab0a0.sent();
              TaskPlayAnim(_0x3d3afc, "pickup_object", "pickup_low", 8, 1, -1, 0, 0, false, false, false);
              return [4, _0x2ad271.wait(1600)];
            case 2:
              _0x1ab0a0.sent();
              ClearPedTasks(PlayerPedId());
              _0x539aaf.emitNet("np-clothing:removeShoes", GetPlayerServerId(NetworkGetPlayerIndexFromPed(_0x527e2f)));
              return [2];
          }
        });
      });
      return function(_0x44ccf7, _0x232725) {
        return _0x73f05a.apply(this, arguments);
      };
    })());
    _0x539aaf.on("drops:pickup", (function() {
      var _0x92c44f = _0x5e7a5b(function(_0x418ca9, _0x16aa62) {
        var _0x473148;
        var _0x5e0ccf;
        return _0x495548(this, function(_0x2144f9) {
          switch (_0x2144f9.label) {
            case 0:
              _0x473148 = _0x27d38c.Sync["np-objects"].GetObjectByEntity(_0x16aa62);
              if (!_0x473148) {
                return [2];
              }
              _0x5e0ccf = PlayerPedId();
              return [4, _0x151c5c.loadAnim("pickup_object")];
            case 1:
              _0x2144f9.sent();
              TaskPlayAnim(_0x5e0ccf, "pickup_object", "pickup_low", 8, 1, -1, 0, 0, false, false, false);
              return [4, _0x2ad271.wait(1600)];
            case 2:
              _0x2144f9.sent();
              ClearPedTasks(PlayerPedId());
              return [4, _0x38f759.execute("misc:drops:pickup", GetEntityArchetypeName(_0x16aa62))];
            case 3:
              _0x2144f9.sent();
              _0x27d38c.Sync["np-objects"].DeleteObject(_0x473148.id);
              return [2];
          }
        });
      });
      return function(_0x37a45d, _0x4a4e96) {
        return _0x92c44f.apply(this, arguments);
      };
    })());
    on("np-objects:objectsCreated:drops", (function() {
      var _0x1a5ae2 = _0x5e7a5b(function(_0x4582d4) {
        var _0x4dab1a;
        var _0x524415;
        var _0x5a230c;
        var _0x3f64b5;
        var _0x4a158e;
        var _0x31c426;
        var _0xdcf823;
        var _0x3f7ce5;
        return _0x495548(this, function(_0x3010a8) {
          _0x4dab1a = true;
          _0x524415 = false;
          _0x5a230c = void 0;
          try {
            for (_0x3f64b5 = _0x4582d4[Symbol.iterator](); !(_0x4dab1a = (_0x4a158e = _0x3f64b5.next()).done); _0x4dab1a = true) {
              _0x31c426 = _0x4a158e.value;
              _0xdcf823 = _0x31c426.object;
              _0x3f7ce5 = _0x31c426.handle;
              ;
              if (!_0xdcf823.metadata?.spawned) {
                DeleteEntity(_0x3f7ce5);
              }
            }
          } catch (_0x4cce96) {
            _0x524415 = true;
            _0x5a230c = _0x4cce96;
          } finally {
            try {
              if (!_0x4dab1a && _0x3f64b5.return != null) {
                _0x3f64b5.return();
              }
            } finally {
              if (_0x524415) {
                throw _0x5a230c;
              }
            }
          }
          return [2];
        });
      });
      return function(_0x29121a) {
        return _0x1a5ae2.apply(this, arguments);
      };
    })());
  })();
})();
