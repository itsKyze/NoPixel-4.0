// Dismiss any lingering GTA V / FiveM busy spinner / loading prompt
setTick(function () {
  try {
    var isBusy = false;
    if (typeof IsLoadingPromptBeingDisplayed === "function") {
      isBusy = IsLoadingPromptBeingDisplayed();
    } else {
      isBusy = Citizen.invokeNative("0x22DE669010842246");
    }
    if (isBusy) {
      if (typeof BusyspinnerOff === "function") {
        BusyspinnerOff();
      }
      if (typeof RemoveLoadingPrompt === "function") {
        RemoveLoadingPrompt();
      }
      Citizen.invokeNative("0xB0F7F8663821D9C3");
      Citizen.invokeNative("0x10D373323E5B9C0D");
    }
  } catch (e) {}
});

RegisterNuiCallbackType("nuiLog");
on("__cfx_nui:nuiLog", function (data, cb) {
  var lvl = (data && data.level ? data.level : "LOG").toUpperCase();
  var msg = data && data.message ? data.message : "";
  console.log("[SPAWN-NUI-" + lvl + "] " + msg);
  if (cb) {
    cb("ok");
  }
});
(() => {
  var v_1 = {
    739: function (v_2, v_3, v_4) {
      var v_5;
      (function (v_6, v_7, v_8) {
        if (true) {
          v_5 = function () {
            return v_8(v_6);
          }.call(v_3, v_4, v_3, v_2);
          if (v_5 !== undefined) {
            v_2.exports = v_5;
          }
        } else {}
      })(this, "UUID", function () {
        function v_9(v_10, v_11, v_12, v_13, v_14, v_15) {
          function v_16(v_17, v_18) {
            var v_19 = v_17.toString(16);
            if (v_19.length < 2) {
              v_19 = "0" + v_19;
            }
            if (v_18) {
              v_19 = v_19.toUpperCase();
            }
            return v_19;
          }
          for (var v_20 = v_11; v_20 <= v_12; v_20++) {
            v_14[v_15++] = v_16(v_10[v_20], v_13);
          }
          return v_14;
        }
        function v_21(v_22, v_23, v_24, v_25, v_26) {
          for (var v_27 = v_23; v_27 <= v_24; v_27 += 2) {
            v_25[v_26++] = parseInt(v_22.substr(v_27, 2), 16);
          }
        }
        var v_28 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("");
        var v_29 = [0, 68, 0, 84, 83, 82, 72, 0, 75, 76, 70, 65, 0, 63, 62, 69, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 64, 0, 73, 66, 74, 71, 81, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 77, 0, 78, 67, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 79, 0, 80, 0, 0];
        function v_30(v_31, v_32) {
          if (v_32 % 4 !== 0) {
            throw new Error("z85_encode: invalid input length (multiple of 4 expected)");
          }
          var v_33 = "";
          var v_34 = 0;
          var v_35 = 0;
          while (v_34 < v_32) {
            v_35 = v_35 * 256 + v_31[v_34++];
            if (v_34 % 4 === 0) {
              var v_36 = 52200625;
              while (v_36 >= 1) {
                var v_37 = Math.floor(v_35 / v_36) % 85;
                v_33 += v_28[v_37];
                v_36 /= 85;
              }
              v_35 = 0;
            }
          }
          return v_33;
        }
        function v_38(v_39, v_40) {
          var v_41 = v_39.length;
          if (v_41 % 5 !== 0) {
            throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
          }
          if (typeof v_40 === "undefined") {
            v_40 = new Array(v_41 * 4 / 5);
          }
          var v_42 = 0;
          var v_43 = 0;
          var v_44 = 0;
          while (v_42 < v_41) {
            var v_45 = v_39.charCodeAt(v_42++) - 32;
            if (v_45 < 0 || v_45 >= v_29.length) {
              break;
            }
            v_44 = v_44 * 85 + v_29[v_45];
            if (v_42 % 5 === 0) {
              var v_46 = 16777216;
              while (v_46 >= 1) {
                v_40[v_43++] = Math.trunc(v_44 / v_46 % 256);
                v_46 /= 256;
              }
              v_44 = 0;
            }
          }
          return v_40;
        }
        function v_47(v_48, v_49) {
          var v_50 = {
            ibits: 8,
            obits: 8,
            obigendian: true
          };
          for (var v_51 in v_49) {
            if (typeof v_50[v_51] !== "undefined") {
              v_50[v_51] = v_49[v_51];
            }
          }
          var v_52 = [];
          var v_53 = 0;
          var v_54;
          var v_55;
          var v_56 = 0;
          var v_57;
          var v_58 = 0;
          var v_59 = v_48.length;
          while (true) {
            if (v_56 === 0) {
              v_55 = v_48.charCodeAt(v_53++);
            }
            v_54 = v_55 >> v_50.ibits - (v_56 + 8) & 255;
            v_56 = (v_56 + 8) % v_50.ibits;
            if (v_50.obigendian) {
              if (v_58 === 0) {
                v_57 = v_54 << v_50.obits - 8;
              } else {
                v_57 |= v_54 << v_50.obits - 8 - v_58;
              }
            } else if (v_58 === 0) {
              v_57 = v_54;
            } else {
              v_57 |= v_54 << v_58;
            }
            v_58 = (v_58 + 8) % v_50.obits;
            if (v_58 === 0) {
              v_52.push(v_57);
              if (v_53 >= v_59) {
                break;
              }
            }
          }
          return v_52;
        }
        function v_60(v_61, v_62) {
          var v_63 = {
            ibits: 32,
            ibigendian: true
          };
          for (var v_64 in v_62) {
            if (typeof v_63[v_64] !== "undefined") {
              v_63[v_64] = v_62[v_64];
            }
          }
          var v_65 = "";
          var v_66 = 4294967295;
          if (v_63.ibits < 32) {
            v_66 = (1 << v_63.ibits) - 1;
          }
          var v_67 = v_61.length;
          for (var v_68 = 0; v_68 < v_67; v_68++) {
            var v_69 = v_61[v_68] & v_66;
            for (var v_70 = 0; v_70 < v_63.ibits; v_70 += 8) {
              if (v_63.ibigendian) {
                v_65 += String.fromCharCode(v_69 >> v_63.ibits - 8 - v_70 & 255);
              } else {
                v_65 += String.fromCharCode(v_69 >> v_70 & 255);
              }
            }
          }
          return v_65;
        }
        var v_71 = 8;
        var v_72 = 8;
        var v_73 = 256;
        function v_74(v_75, v_76, v_77, v_78, v_79, v_80, v_81, v_82) {
          return [v_82, v_81, v_80, v_79, v_78, v_77, v_76, v_75];
        }
        function v_83() {
          return v_74(0, 0, 0, 0, 0, 0, 0, 0);
        }
        function v_84(v_85) {
          return v_85.slice(0);
        }
        function v_86(v_87) {
          var v_88 = v_83();
          for (var v_89 = 0; v_89 < v_71; v_89++) {
            v_88[v_89] = Math.floor(v_87 % v_73);
            v_87 /= v_73;
          }
          return v_88;
        }
        function v_90(v_91) {
          var v_92 = 0;
          for (var v_93 = v_71 - 1; v_93 >= 0; v_93--) {
            v_92 *= v_73;
            v_92 += v_91[v_93];
          }
          return Math.floor(v_92);
        }
        function v_94(v_95, v_96) {
          var v_97 = 0;
          for (var v_98 = 0; v_98 < v_71; v_98++) {
            v_97 += v_95[v_98] + v_96[v_98];
            v_95[v_98] = Math.floor(v_97 % v_73);
            v_97 = Math.floor(v_97 / v_73);
          }
          return v_97;
        }
        function v_99(v_100, v_101) {
          var v_102 = 0;
          for (var v_103 = 0; v_103 < v_71; v_103++) {
            v_102 += v_100[v_103] * v_101;
            v_100[v_103] = Math.floor(v_102 % v_73);
            v_102 = Math.floor(v_102 / v_73);
          }
          return v_102;
        }
        function v_104(v_105, v_106) {
          var v_107;
          var v_108;
          var v_109 = new Array(v_71 + v_71);
          for (v_107 = 0; v_107 < v_71 + v_71; v_107++) {
            v_109[v_107] = 0;
          }
          var v_110;
          for (v_107 = 0; v_107 < v_71; v_107++) {
            v_110 = 0;
            for (v_108 = 0; v_108 < v_71; v_108++) {
              v_110 += v_105[v_107] * v_106[v_108] + v_109[v_107 + v_108];
              v_109[v_107 + v_108] = v_110 % v_73;
              v_110 /= v_73;
            }
            for (; v_108 < v_71 + v_71 - v_107; v_108++) {
              v_110 += v_109[v_107 + v_108];
              v_109[v_107 + v_108] = v_110 % v_73;
              v_110 /= v_73;
            }
          }
          for (v_107 = 0; v_107 < v_71; v_107++) {
            v_105[v_107] = v_109[v_107];
          }
          return v_109.slice(v_71, v_71);
        }
        function v_111(v_112, v_113) {
          for (var v_114 = 0; v_114 < v_71; v_114++) {
            v_112[v_114] &= v_113[v_114];
          }
          return v_112;
        }
        function v_115(v_116, v_117) {
          for (var v_118 = 0; v_118 < v_71; v_118++) {
            v_116[v_118] |= v_117[v_118];
          }
          return v_116;
        }
        function v_119(v_120, v_121) {
          var v_122 = v_83();
          if (v_121 % v_72 !== 0) {
            throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
          }
          var v_123 = Math.floor(v_121 / v_72);
          for (var v_124 = 0; v_124 < v_123; v_124++) {
            for (var v_125 = v_71 - 1 - 1; v_125 >= 0; v_125--) {
              v_122[v_125 + 1] = v_122[v_125];
            }
            v_122[0] = v_120[0];
            for (v_125 = 0; v_125 < v_71 - 1; v_125++) {
              v_120[v_125] = v_120[v_125 + 1];
            }
            v_120[v_125] = 0;
          }
          return v_90(v_122);
        }
        function v_126(v_127, v_128) {
          if (v_128 > v_71 * v_72) {
            throw new Error("ui64_ror: invalid number of bits to shift");
          }
          var v_129 = new Array(v_71 + v_71);
          var v_130;
          for (v_130 = 0; v_130 < v_71; v_130++) {
            v_129[v_130 + v_71] = v_127[v_130];
            v_129[v_130] = 0;
          }
          var v_131 = Math.floor(v_128 / v_72);
          var v_132 = v_128 % v_72;
          for (v_130 = v_131; v_130 < v_71 + v_71 - 1; v_130++) {
            v_129[v_130 - v_131] = (v_129[v_130] >>> v_132 | v_129[v_130 + 1] << v_72 - v_132) & (1 << v_72) - 1;
          }
          v_129[v_71 + v_71 - 1 - v_131] = v_129[v_71 + v_71 - 1] >>> v_132 & (1 << v_72) - 1;
          for (v_130 = v_71 + v_71 - 1 - v_131 + 1; v_130 < v_71 + v_71; v_130++) {
            v_129[v_130] = 0;
          }
          for (v_130 = 0; v_130 < v_71; v_130++) {
            v_127[v_130] = v_129[v_130 + v_71];
          }
          return v_129.slice(0, v_71);
        }
        function v_133(v_134, v_135) {
          if (v_135 > v_71 * v_72) {
            throw new Error("ui64_rol: invalid number of bits to shift");
          }
          var v_136 = new Array(v_71 + v_71);
          var v_137;
          for (v_137 = 0; v_137 < v_71; v_137++) {
            v_136[v_137 + v_71] = 0;
            v_136[v_137] = v_134[v_137];
          }
          var v_138 = Math.floor(v_135 / v_72);
          var v_139 = v_135 % v_72;
          for (v_137 = v_71 - 1 - v_138; v_137 > 0; v_137--) {
            v_136[v_137 + v_138] = (v_136[v_137] << v_139 | v_136[v_137 - 1] >>> v_72 - v_139) & (1 << v_72) - 1;
          }
          v_136[0 + v_138] = v_136[0] << v_139 & (1 << v_72) - 1;
          for (v_137 = 0 + v_138 - 1; v_137 >= 0; v_137--) {
            v_136[v_137] = 0;
          }
          for (v_137 = 0; v_137 < v_71; v_137++) {
            v_134[v_137] = v_136[v_137];
          }
          return v_136.slice(v_71, v_71);
        }
        function v_140(v_141, v_142) {
          for (var v_143 = 0; v_143 < v_71; v_143++) {
            v_141[v_143] ^= v_142[v_143];
          }
        }
        function v_144(v_145, v_146) {
          var v_147 = (v_145 & 65535) + (v_146 & 65535);
          var v_148 = (v_145 >> 16) + (v_146 >> 16) + (v_147 >> 16);
          return v_148 << 16 | v_147 & 65535;
        }
        function v_149(v_150, v_151) {
          return v_150 << v_151 & -1 | v_150 >>> 32 - v_151 & -1;
        }
        function v_152(v_153, v_154) {
          function v_155(v_156, v_157, v_158, v_159) {
            if (v_156 < 20) {
              return v_157 & v_158 | ~v_157 & v_159;
            }
            if (v_156 < 40) {
              return v_157 ^ v_158 ^ v_159;
            }
            if (v_156 < 60) {
              return v_157 & v_158 | v_157 & v_159 | v_158 & v_159;
            }
            return v_157 ^ v_158 ^ v_159;
          }
          function v_160(v_161) {
            if (v_161 < 20) {
              return 1518500249;
            } else if (v_161 < 40) {
              return 1859775393;
            } else if (v_161 < 60) {
              return -1894007588;
            } else {
              return -899497514;
            }
          }
          v_153[v_154 >> 5] |= 128 << 24 - v_154 % 32;
          v_153[(v_154 + 64 >> 9 << 4) + 15] = v_154;
          var v_162 = Array(80);
          var v_163 = 1732584193;
          var v_164 = -271733879;
          var v_165 = -1732584194;
          var v_166 = 271733878;
          var v_167 = -1009589776;
          for (var v_168 = 0; v_168 < v_153.length; v_168 += 16) {
            var v_169 = v_163;
            var v_170 = v_164;
            var v_171 = v_165;
            var v_172 = v_166;
            var v_173 = v_167;
            for (var v_174 = 0; v_174 < 80; v_174++) {
              if (v_174 < 16) {
                v_162[v_174] = v_153[v_168 + v_174];
              } else {
                v_162[v_174] = v_149(v_162[v_174 - 3] ^ v_162[v_174 - 8] ^ v_162[v_174 - 14] ^ v_162[v_174 - 16], 1);
              }
              var v_175 = v_144(v_144(v_149(v_163, 5), v_155(v_174, v_164, v_165, v_166)), v_144(v_144(v_167, v_162[v_174]), v_160(v_174)));
              v_167 = v_166;
              v_166 = v_165;
              v_165 = v_149(v_164, 30);
              v_164 = v_163;
              v_163 = v_175;
            }
            v_163 = v_144(v_163, v_169);
            v_164 = v_144(v_164, v_170);
            v_165 = v_144(v_165, v_171);
            v_166 = v_144(v_166, v_172);
            v_167 = v_144(v_167, v_173);
          }
          return [v_163, v_164, v_165, v_166, v_167];
        }
        function v_176(v_177) {
          return v_60(v_152(v_47(v_177, {
            ibits: 8,
            obits: 32,
            obigendian: true
          }), v_177.length * 8), {
            ibits: 32,
            ibigendian: true
          });
        }
        function v_178(v_179, v_180) {
          function v_181(v_182, v_183, v_184, v_185, v_186, v_187) {
            return v_144(v_149(v_144(v_144(v_183, v_182), v_144(v_185, v_187)), v_186), v_184);
          }
          function v_188(v_189, v_190, v_191, v_192, v_193, v_194, v_195) {
            return v_181(v_190 & v_191 | ~v_190 & v_192, v_189, v_190, v_193, v_194, v_195);
          }
          function v_196(v_197, v_198, v_199, v_200, v_201, v_202, v_203) {
            return v_181(v_198 & v_200 | v_199 & ~v_200, v_197, v_198, v_201, v_202, v_203);
          }
          function v_204(v_205, v_206, v_207, v_208, v_209, v_210, v_211) {
            return v_181(v_206 ^ v_207 ^ v_208, v_205, v_206, v_209, v_210, v_211);
          }
          function v_212(v_213, v_214, v_215, v_216, v_217, v_218, v_219) {
            return v_181(v_215 ^ (v_214 | ~v_216), v_213, v_214, v_217, v_218, v_219);
          }
          v_179[v_180 >> 5] |= 128 << v_180 % 32;
          v_179[(v_180 + 64 >>> 9 << 4) + 14] = v_180;
          var v_220 = 1732584193;
          var v_221 = -271733879;
          var v_222 = -1732584194;
          var v_223 = 271733878;
          for (var v_224 = 0; v_224 < v_179.length; v_224 += 16) {
            var v_225 = v_220;
            var v_226 = v_221;
            var v_227 = v_222;
            var v_228 = v_223;
            v_220 = v_188(v_220, v_221, v_222, v_223, v_179[v_224 + 0], 7, -680876936);
            v_223 = v_188(v_223, v_220, v_221, v_222, v_179[v_224 + 1], 12, -389564586);
            v_222 = v_188(v_222, v_223, v_220, v_221, v_179[v_224 + 2], 17, 606105819);
            v_221 = v_188(v_221, v_222, v_223, v_220, v_179[v_224 + 3], 22, -1044525330);
            v_220 = v_188(v_220, v_221, v_222, v_223, v_179[v_224 + 4], 7, -176418897);
            v_223 = v_188(v_223, v_220, v_221, v_222, v_179[v_224 + 5], 12, 1200080426);
            v_222 = v_188(v_222, v_223, v_220, v_221, v_179[v_224 + 6], 17, -1473231341);
            v_221 = v_188(v_221, v_222, v_223, v_220, v_179[v_224 + 7], 22, -45705983);
            v_220 = v_188(v_220, v_221, v_222, v_223, v_179[v_224 + 8], 7, 1770035416);
            v_223 = v_188(v_223, v_220, v_221, v_222, v_179[v_224 + 9], 12, -1958414417);
            v_222 = v_188(v_222, v_223, v_220, v_221, v_179[v_224 + 10], 17, -42063);
            v_221 = v_188(v_221, v_222, v_223, v_220, v_179[v_224 + 11], 22, -1990404162);
            v_220 = v_188(v_220, v_221, v_222, v_223, v_179[v_224 + 12], 7, 1804603682);
            v_223 = v_188(v_223, v_220, v_221, v_222, v_179[v_224 + 13], 12, -40341101);
            v_222 = v_188(v_222, v_223, v_220, v_221, v_179[v_224 + 14], 17, -1502002290);
            v_221 = v_188(v_221, v_222, v_223, v_220, v_179[v_224 + 15], 22, 1236535329);
            v_220 = v_196(v_220, v_221, v_222, v_223, v_179[v_224 + 1], 5, -165796510);
            v_223 = v_196(v_223, v_220, v_221, v_222, v_179[v_224 + 6], 9, -1069501632);
            v_222 = v_196(v_222, v_223, v_220, v_221, v_179[v_224 + 11], 14, 643717713);
            v_221 = v_196(v_221, v_222, v_223, v_220, v_179[v_224 + 0], 20, -373897302);
            v_220 = v_196(v_220, v_221, v_222, v_223, v_179[v_224 + 5], 5, -701558691);
            v_223 = v_196(v_223, v_220, v_221, v_222, v_179[v_224 + 10], 9, 38016083);
            v_222 = v_196(v_222, v_223, v_220, v_221, v_179[v_224 + 15], 14, -660478335);
            v_221 = v_196(v_221, v_222, v_223, v_220, v_179[v_224 + 4], 20, -405537848);
            v_220 = v_196(v_220, v_221, v_222, v_223, v_179[v_224 + 9], 5, 568446438);
            v_223 = v_196(v_223, v_220, v_221, v_222, v_179[v_224 + 14], 9, -1019803690);
            v_222 = v_196(v_222, v_223, v_220, v_221, v_179[v_224 + 3], 14, -187363961);
            v_221 = v_196(v_221, v_222, v_223, v_220, v_179[v_224 + 8], 20, 1163531501);
            v_220 = v_196(v_220, v_221, v_222, v_223, v_179[v_224 + 13], 5, -1444681467);
            v_223 = v_196(v_223, v_220, v_221, v_222, v_179[v_224 + 2], 9, -51403784);
            v_222 = v_196(v_222, v_223, v_220, v_221, v_179[v_224 + 7], 14, 1735328473);
            v_221 = v_196(v_221, v_222, v_223, v_220, v_179[v_224 + 12], 20, -1926607734);
            v_220 = v_204(v_220, v_221, v_222, v_223, v_179[v_224 + 5], 4, -378558);
            v_223 = v_204(v_223, v_220, v_221, v_222, v_179[v_224 + 8], 11, -2022574463);
            v_222 = v_204(v_222, v_223, v_220, v_221, v_179[v_224 + 11], 16, 1839030562);
            v_221 = v_204(v_221, v_222, v_223, v_220, v_179[v_224 + 14], 23, -35309556);
            v_220 = v_204(v_220, v_221, v_222, v_223, v_179[v_224 + 1], 4, -1530992060);
            v_223 = v_204(v_223, v_220, v_221, v_222, v_179[v_224 + 4], 11, 1272893353);
            v_222 = v_204(v_222, v_223, v_220, v_221, v_179[v_224 + 7], 16, -155497632);
            v_221 = v_204(v_221, v_222, v_223, v_220, v_179[v_224 + 10], 23, -1094730640);
            v_220 = v_204(v_220, v_221, v_222, v_223, v_179[v_224 + 13], 4, 681279174);
            v_223 = v_204(v_223, v_220, v_221, v_222, v_179[v_224 + 0], 11, -358537222);
            v_222 = v_204(v_222, v_223, v_220, v_221, v_179[v_224 + 3], 16, -722521979);
            v_221 = v_204(v_221, v_222, v_223, v_220, v_179[v_224 + 6], 23, 76029189);
            v_220 = v_204(v_220, v_221, v_222, v_223, v_179[v_224 + 9], 4, -640364487);
            v_223 = v_204(v_223, v_220, v_221, v_222, v_179[v_224 + 12], 11, -421815835);
            v_222 = v_204(v_222, v_223, v_220, v_221, v_179[v_224 + 15], 16, 530742520);
            v_221 = v_204(v_221, v_222, v_223, v_220, v_179[v_224 + 2], 23, -995338651);
            v_220 = v_212(v_220, v_221, v_222, v_223, v_179[v_224 + 0], 6, -198630844);
            v_223 = v_212(v_223, v_220, v_221, v_222, v_179[v_224 + 7], 10, 1126891415);
            v_222 = v_212(v_222, v_223, v_220, v_221, v_179[v_224 + 14], 15, -1416354905);
            v_221 = v_212(v_221, v_222, v_223, v_220, v_179[v_224 + 5], 21, -57434055);
            v_220 = v_212(v_220, v_221, v_222, v_223, v_179[v_224 + 12], 6, 1700485571);
            v_223 = v_212(v_223, v_220, v_221, v_222, v_179[v_224 + 3], 10, -1894986606);
            v_222 = v_212(v_222, v_223, v_220, v_221, v_179[v_224 + 10], 15, -1051523);
            v_221 = v_212(v_221, v_222, v_223, v_220, v_179[v_224 + 1], 21, -2054922799);
            v_220 = v_212(v_220, v_221, v_222, v_223, v_179[v_224 + 8], 6, 1873313359);
            v_223 = v_212(v_223, v_220, v_221, v_222, v_179[v_224 + 15], 10, -30611744);
            v_222 = v_212(v_222, v_223, v_220, v_221, v_179[v_224 + 6], 15, -1560198380);
            v_221 = v_212(v_221, v_222, v_223, v_220, v_179[v_224 + 13], 21, 1309151649);
            v_220 = v_212(v_220, v_221, v_222, v_223, v_179[v_224 + 4], 6, -145523070);
            v_223 = v_212(v_223, v_220, v_221, v_222, v_179[v_224 + 11], 10, -1120210379);
            v_222 = v_212(v_222, v_223, v_220, v_221, v_179[v_224 + 2], 15, 718787259);
            v_221 = v_212(v_221, v_222, v_223, v_220, v_179[v_224 + 9], 21, -343485551);
            v_220 = v_144(v_220, v_225);
            v_221 = v_144(v_221, v_226);
            v_222 = v_144(v_222, v_227);
            v_223 = v_144(v_223, v_228);
          }
          return [v_220, v_221, v_222, v_223];
        }
        function v_229(v_230) {
          return v_60(v_178(v_47(v_230, {
            ibits: 8,
            obits: 32,
            obigendian: false
          }), v_230.length * 8), {
            ibits: 32,
            ibigendian: false
          });
        }
        function v_231(v_232) {
          this.mul = v_74(88, 81, 244, 45, 76, 149, 127, 45);
          this.inc = v_74(20, 5, 123, 126, 247, 103, 129, 79);
          this.mask = v_74(0, 0, 0, 0, 255, 255, 255, 255);
          this.state = v_84(this.inc);
          this.next();
          v_111(this.state, this.mask);
          var v_233;
          if (v_232 !== undefined) {
            v_232 = v_86(v_232 >>> 0);
          } else if (typeof window === "object" && typeof window.crypto === "object" && typeof window.crypto.getRandomValues === "function") {
            v_233 = new Uint32Array(2);
            window.crypto.getRandomValues(v_233);
            v_232 = v_115(v_86(v_233[0] >>> 0), v_126(v_86(v_233[1] >>> 0), 32));
          } else if (typeof globalThis === "object" && typeof globalThis.crypto === "object" && typeof globalThis.crypto.getRandomValues === "function") {
            v_233 = new Uint32Array(2);
            globalThis.crypto.getRandomValues(v_233);
            v_232 = v_115(v_86(v_233[0] >>> 0), v_126(v_86(v_233[1] >>> 0), 32));
          } else {
            v_232 = v_86(Math.random() * 4294967295 >>> 0);
            v_115(v_232, v_126(v_86((/* @__PURE__ */new Date()).getTime()), 32));
          }
          v_115(this.state, v_232);
          this.next();
        }
        v_231.prototype.next = function () {
          var v_234 = v_84(this.state);
          v_104(this.state, this.mul);
          v_94(this.state, this.inc);
          var v_235 = v_84(v_234);
          v_126(v_235, 18);
          v_140(v_235, v_234);
          v_126(v_235, 27);
          var v_236 = v_84(v_234);
          v_126(v_236, 59);
          v_111(v_235, this.mask);
          var v_237 = v_90(v_236);
          var v_238 = v_84(v_235);
          v_133(v_238, 32 - v_237);
          v_126(v_235, v_237);
          v_140(v_235, v_238);
          return v_90(v_235);
        };
        v_231.prototype.reseed = function (v_239) {
          if (typeof v_239 !== "string") {
            throw new Error("UUID: PCG: seed: invalid argument (string expected)");
          }
          var v_240 = v_152(v_47(v_239, {
            ibits: 8,
            obits: 32,
            obigendian: true
          }), v_239.length * 8);
          for (var v_241 = 0; v_241 < v_240.length; v_241++) {
            v_140(v_242.state, v_86(v_240[v_241] >>> 0));
          }
        };
        var v_242 = new v_231();
        v_231.reseed = function (v_243) {
          v_242.reseed(v_243);
        };
        function v_244(v_245, v_246) {
          var v_247 = [];
          for (var v_248 = 0; v_248 < v_245; v_248++) {
            v_247[v_248] = v_242.next() % v_246;
          }
          return v_247;
        }
        var v_249 = 0;
        var v_250 = 0;
        function v_251() {
          if (arguments.length === 1 && typeof arguments[0] === "string") {
            this.parse.apply(this, arguments);
          } else if (arguments.length >= 1 && typeof arguments[0] === "number") {
            this.make.apply(this, arguments);
          } else if (arguments.length >= 1) {
            throw new Error("UUID: constructor: invalid arguments");
          } else {
            for (var v_252 = 0; v_252 < 16; v_252++) {
              this[v_252] = 0;
            }
          }
        }
        if (typeof Uint8Array !== "undefined") {
          v_251.prototype = new Uint8Array(16);
        } else if (Buffer) {
          v_251.prototype = Buffer.alloc(16);
        } else {
          v_251.prototype = new Array(16);
        }
        v_251.prototype.constructor = v_251;
        v_251.prototype.make = function (v_253) {
          var v_254;
          var v_255 = this;
          if (v_253 === 1) {
            var v_256 = /* @__PURE__ */new Date();
            var v_257 = v_256.getTime();
            if (v_257 !== v_249) {
              v_250 = 0;
            } else {
              v_250++;
            }
            v_249 = v_257;
            var v_258 = v_86(v_257);
            v_99(v_258, 10000);
            v_94(v_258, v_74(1, 178, 29, 210, 19, 129, 64, 0));
            if (v_250 > 0) {
              v_94(v_258, v_86(v_250));
            }
            var v_259;
            v_259 = v_119(v_258, 8);
            v_255[3] = v_259 & 255;
            v_259 = v_119(v_258, 8);
            v_255[2] = v_259 & 255;
            v_259 = v_119(v_258, 8);
            v_255[1] = v_259 & 255;
            v_259 = v_119(v_258, 8);
            v_255[0] = v_259 & 255;
            v_259 = v_119(v_258, 8);
            v_255[5] = v_259 & 255;
            v_259 = v_119(v_258, 8);
            v_255[4] = v_259 & 255;
            v_259 = v_119(v_258, 8);
            v_255[7] = v_259 & 255;
            v_259 = v_119(v_258, 8);
            v_255[6] = v_259 & 15;
            var v_260 = v_244(2, 255);
            v_255[8] = v_260[0];
            v_255[9] = v_260[1];
            var v_261 = v_244(6, 255);
            v_261[0] |= 1;
            v_261[0] |= 2;
            for (v_254 = 0; v_254 < 6; v_254++) {
              v_255[10 + v_254] = v_261[v_254];
            }
          } else if (v_253 === 4) {
            var v_262 = v_244(16, 255);
            for (v_254 = 0; v_254 < 16; v_254++) {
              this[v_254] = v_262[v_254];
            }
          } else if (v_253 === 3 || v_253 === 5) {
            var v_263 = "";
            var v_264 = typeof arguments[1] === "object" && arguments[1] instanceof v_251 ? arguments[1] : new v_251().parse(arguments[1]);
            for (v_254 = 0; v_254 < 16; v_254++) {
              v_263 += String.fromCharCode(v_264[v_254]);
            }
            v_263 += arguments[2];
            var v_265 = v_253 === 3 ? v_229(v_263) : v_176(v_263);
            for (v_254 = 0; v_254 < 16; v_254++) {
              v_255[v_254] = v_265.charCodeAt(v_254);
            }
          } else {
            throw new Error("UUID: make: invalid version");
          }
          v_255[6] &= 15;
          v_255[6] |= v_253 << 4;
          v_255[8] &= 63;
          v_255[8] |= 128;
          return v_255;
        };
        v_251.prototype.format = function (v_266) {
          var v_267;
          var v_268;
          if (v_266 === "z85") {
            v_267 = v_30(this, 16);
          } else if (v_266 === "b16") {
            v_268 = Array(32);
            v_9(this, 0, 15, true, v_268, 0);
            v_267 = v_268.join("");
          } else if (v_266 === undefined || v_266 === "std") {
            v_268 = new Array(36);
            v_9(this, 0, 3, false, v_268, 0);
            v_268[8] = "-";
            v_9(this, 4, 5, false, v_268, 9);
            v_268[13] = "-";
            v_9(this, 6, 7, false, v_268, 14);
            v_268[18] = "-";
            v_9(this, 8, 9, false, v_268, 19);
            v_268[23] = "-";
            v_9(this, 10, 15, false, v_268, 24);
            v_267 = v_268.join("");
          }
          return v_267;
        };
        v_251.prototype.toString = function (v_269) {
          return this.format(v_269);
        };
        v_251.prototype.toJSON = function () {
          return this.format("std");
        };
        v_251.prototype.parse = function (v_270, v_271) {
          if (typeof v_270 !== "string") {
            throw new Error("UUID: parse: invalid argument (type string expected)");
          }
          if (v_271 === "z85") {
            v_38(v_270, this);
          } else if (v_271 === "b16") {
            v_21(v_270, 0, 35, this, 0);
          } else if (v_271 === undefined || v_271 === "std") {
            var v_272 = {
              nil: "00000000-0000-0000-0000-000000000000",
              "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
              "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
              "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
              "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
            };
            if (v_272[v_270] !== undefined) {
              v_270 = v_272[v_270];
            } else if (!v_270.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
              throw new Error("UUID: parse: invalid string representation (expected \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\")");
            }
            v_21(v_270, 0, 7, this, 0);
            v_21(v_270, 9, 12, this, 4);
            v_21(v_270, 14, 17, this, 6);
            v_21(v_270, 19, 22, this, 8);
            v_21(v_270, 24, 35, this, 10);
          }
          return this;
        };
        v_251.prototype.export = function () {
          var v_273 = Array(16);
          for (var v_274 = 0; v_274 < 16; v_274++) {
            v_273[v_274] = this[v_274];
          }
          return v_273;
        };
        v_251.prototype.import = function (v_275) {
          if (typeof v_275 !== "object" || !(v_275 instanceof Array)) {
            throw new Error("UUID: import: invalid argument (type Array expected)");
          }
          if (v_275.length !== 16) {
            throw new Error("UUID: import: invalid argument (Array of length 16 expected)");
          }
          for (var v_276 = 0; v_276 < 16; v_276++) {
            if (typeof v_275[v_276] !== "number") {
              throw new Error("UUID: import: invalid array element #" + v_276 + " (type Number expected)");
            }
            if (!isFinite(v_275[v_276]) || Math.floor(v_275[v_276]) !== v_275[v_276]) {
              throw new Error("UUID: import: invalid array element #" + v_276 + " (Number with integer value expected)");
            }
            if (!(v_275[v_276] >= 0) || !(v_275[v_276] <= 255)) {
              throw new Error("UUID: import: invalid array element #" + v_276 + " (Number with integer value in range 0...255 expected)");
            }
            this[v_276] = v_275[v_276];
          }
          return this;
        };
        v_251.prototype.compare = function (v_277) {
          if (typeof v_277 !== "object") {
            throw new Error("UUID: compare: invalid argument (type UUID expected)");
          }
          if (!(v_277 instanceof v_251)) {
            throw new Error("UUID: compare: invalid argument (type UUID expected)");
          }
          for (var v_278 = 0; v_278 < 16; v_278++) {
            if (this[v_278] < v_277[v_278]) {
              return -1;
            } else if (this[v_278] > v_277[v_278]) {
              return 1;
            }
          }
          return 0;
        };
        v_251.prototype.equal = function (v_279) {
          return this.compare(v_279) === 0;
        };
        v_251.prototype.fold = function (v_280) {
          if (typeof v_280 === "undefined") {
            throw new Error("UUID: fold: invalid argument (number of fold operations expected)");
          }
          if (v_280 < 1 || v_280 > 4) {
            throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)");
          }
          var v_281 = 16 / Math.pow(2, v_280);
          var v_282 = new Array(v_281);
          for (var v_283 = 0; v_283 < v_281; v_283++) {
            var v_284 = 0;
            for (var v_285 = 0; v_283 + v_285 < 16; v_285 += v_281) {
              v_284 ^= this[v_283 + v_285];
            }
            v_282[v_283] = v_284;
          }
          return v_282;
        };
        v_251.PCG = v_231;
        return v_251;
      });
    }
  };
  var v_286 = {};
  function v_287(v_288) {
    var v_289 = v_286[v_288];
    if (v_289 !== undefined) {
      return v_289.exports;
    }
    var v_290 = v_286[v_288] = {
      exports: {}
    };
    v_1[v_288].call(v_290.exports, v_290, v_290.exports, v_287);
    return v_290.exports;
  }
  (() => {
    v_287.d = (v_291, v_292) => {
      for (var v_293 in v_292) {
        if (v_287.o(v_292, v_293) && !v_287.o(v_291, v_293)) {
          Object.defineProperty(v_291, v_293, {
            enumerable: true,
            get: v_292[v_293]
          });
        }
      }
    };
  })();
  (() => {
    v_287.o = (v_294, v_295) => Object.prototype.hasOwnProperty.call(v_294, v_295);
  })();
  var v_296 = {};
  (() => {
    "use strict";

    var v_297 = {
      hW: () => v_298,
      r0: () => v_299,
      _R: () => v_300
    };
    v_287.d(v_296, v_297);
    ;
    const v_301 = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var v_302 = {
      randomUUID: v_301
    };
    const v_303 = v_302;
    ;
    let v_304;
    const v_305 = new Uint8Array(16);
    function v_306() {
      if (!v_304) {
        v_304 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!v_304) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return v_304(v_305);
    }
    ;
    const v_307 = [];
    for (let v_308 = 0; v_308 < 256; ++v_308) {
      v_307.push((v_308 + 256).toString(16).slice(1));
    }
    function v_309(v_310, v_311 = 0) {
      return v_307[v_310[v_311 + 0]] + v_307[v_310[v_311 + 1]] + v_307[v_310[v_311 + 2]] + v_307[v_310[v_311 + 3]] + "-" + v_307[v_310[v_311 + 4]] + v_307[v_310[v_311 + 5]] + "-" + v_307[v_310[v_311 + 6]] + v_307[v_310[v_311 + 7]] + "-" + v_307[v_310[v_311 + 8]] + v_307[v_310[v_311 + 9]] + "-" + v_307[v_310[v_311 + 10]] + v_307[v_310[v_311 + 11]] + v_307[v_310[v_311 + 12]] + v_307[v_310[v_311 + 13]] + v_307[v_310[v_311 + 14]] + v_307[v_310[v_311 + 15]];
    }
    function v_312(v_313, v_314 = 0) {
      const v_315 = v_309(v_313, v_314);
      if (!validate(v_315)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return v_315;
    }
    const v_316 = null;
    ;
    function v_317(v_318, v_319, v_320) {
      if (v_303.randomUUID && !v_319 && !v_318) {
        return v_303.randomUUID();
      }
      v_318 = v_318 || {};
      const v_321 = v_318.random || (v_318.rng || v_306)();
      v_321[6] = v_321[6] & 15 | 64;
      v_321[8] = v_321[8] & 63 | 128;
      if (v_319) {
        v_320 = v_320 || 0;
        for (let v_322 = 0; v_322 < 16; ++v_322) {
          v_319[v_320 + v_322] = v_321[v_322];
        }
        return v_319;
      }
      return v_309(v_321);
    }
    const v_323 = v_317;
    ;
    const v_324 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    ;
    function v_325(v_326) {
      return typeof v_326 === "string" && v_324.test(v_326);
    }
    const v_327 = v_325;
    ;
    function v_328(v_329) {
      if (!v_327(v_329)) {
        throw TypeError("Invalid UUID");
      }
      let v_330;
      const v_331 = new Uint8Array(16);
      v_331[0] = (v_330 = parseInt(v_329.slice(0, 8), 16)) >>> 24;
      v_331[1] = v_330 >>> 16 & 255;
      v_331[2] = v_330 >>> 8 & 255;
      v_331[3] = v_330 & 255;
      v_331[4] = (v_330 = parseInt(v_329.slice(9, 13), 16)) >>> 8;
      v_331[5] = v_330 & 255;
      v_331[6] = (v_330 = parseInt(v_329.slice(14, 18), 16)) >>> 8;
      v_331[7] = v_330 & 255;
      v_331[8] = (v_330 = parseInt(v_329.slice(19, 23), 16)) >>> 8;
      v_331[9] = v_330 & 255;
      v_331[10] = (v_330 = parseInt(v_329.slice(24, 36), 16)) / 1099511627776 & 255;
      v_331[11] = v_330 / 4294967296 & 255;
      v_331[12] = v_330 >>> 24 & 255;
      v_331[13] = v_330 >>> 16 & 255;
      v_331[14] = v_330 >>> 8 & 255;
      v_331[15] = v_330 & 255;
      return v_331;
    }
    const v_332 = v_328;
    ;
    function v_333(v_334) {
      v_334 = unescape(encodeURIComponent(v_334));
      const v_335 = [];
      for (let v_336 = 0; v_336 < v_334.length; ++v_336) {
        v_335.push(v_334.charCodeAt(v_336));
      }
      return v_335;
    }
    const v_337 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    const v_338 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function v_339(v_340, v_341, v_342) {
      function v_343(v_344, v_345, v_346, v_347) {
        if (typeof v_344 === "string") {
          v_344 = v_333(v_344);
        }
        if (typeof v_345 === "string") {
          v_345 = v_332(v_345);
        }
        if (v_345?.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let v_348 = new Uint8Array(16 + v_344.length);
        v_348.set(v_345);
        v_348.set(v_344, v_345.length);
        v_348 = v_342(v_348);
        v_348[6] = v_348[6] & 15 | v_341;
        v_348[8] = v_348[8] & 63 | 128;
        if (v_346) {
          v_347 = v_347 || 0;
          for (let v_349 = 0; v_349 < 16; ++v_349) {
            v_346[v_347 + v_349] = v_348[v_349];
          }
          return v_346;
        }
        return v_309(v_348);
      }
      try {
        v_343.name = v_340;
      } catch (v_350) {}
      v_343.DNS = v_337;
      v_343.URL = v_338;
      return v_343;
    }
    ;
    function v_351(v_352, v_353, v_354, v_355) {
      switch (v_352) {
        case 0:
          return v_353 & v_354 ^ ~v_353 & v_355;
        case 1:
          return v_353 ^ v_354 ^ v_355;
        case 2:
          return v_353 & v_354 ^ v_353 & v_355 ^ v_354 & v_355;
        case 3:
          return v_353 ^ v_354 ^ v_355;
      }
    }
    function v_356(v_357, v_358) {
      return v_357 << v_358 | v_357 >>> 32 - v_358;
    }
    function v_359(v_360) {
      const v_361 = [1518500249, 1859775393, 2400959708, 3395469782];
      const v_362 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof v_360 === "string") {
        const v_363 = unescape(encodeURIComponent(v_360));
        v_360 = [];
        for (let v_364 = 0; v_364 < v_363.length; ++v_364) {
          v_360.push(v_363.charCodeAt(v_364));
        }
      } else if (!Array.isArray(v_360)) {
        v_360 = Array.prototype.slice.call(v_360);
      }
      v_360.push(128);
      const v_365 = v_360.length / 4 + 2;
      const v_366 = Math.ceil(v_365 / 16);
      const v_367 = new Array(v_366);
      for (let v_368 = 0; v_368 < v_366; ++v_368) {
        const v_369 = new Uint32Array(16);
        for (let v_370 = 0; v_370 < 16; ++v_370) {
          v_369[v_370] = v_360[v_368 * 64 + v_370 * 4] << 24 | v_360[v_368 * 64 + v_370 * 4 + 1] << 16 | v_360[v_368 * 64 + v_370 * 4 + 2] << 8 | v_360[v_368 * 64 + v_370 * 4 + 3];
        }
        v_367[v_368] = v_369;
      }
      v_367[v_366 - 1][14] = (v_360.length - 1) * 8 / Math.pow(2, 32);
      v_367[v_366 - 1][14] = Math.floor(v_367[v_366 - 1][14]);
      v_367[v_366 - 1][15] = (v_360.length - 1) * 8 & -1;
      for (let v_371 = 0; v_371 < v_366; ++v_371) {
        const v_372 = new Uint32Array(80);
        for (let v_373 = 0; v_373 < 16; ++v_373) {
          v_372[v_373] = v_367[v_371][v_373];
        }
        for (let v_374 = 16; v_374 < 80; ++v_374) {
          v_372[v_374] = v_356(v_372[v_374 - 3] ^ v_372[v_374 - 8] ^ v_372[v_374 - 14] ^ v_372[v_374 - 16], 1);
        }
        let v_375 = v_362[0];
        let v_376 = v_362[1];
        let v_377 = v_362[2];
        let v_378 = v_362[3];
        let v_379 = v_362[4];
        for (let v_380 = 0; v_380 < 80; ++v_380) {
          const v_381 = Math.floor(v_380 / 20);
          const v_382 = v_356(v_375, 5) + v_351(v_381, v_376, v_377, v_378) + v_379 + v_361[v_381] + v_372[v_380] >>> 0;
          v_379 = v_378;
          v_378 = v_377;
          v_377 = v_356(v_376, 30) >>> 0;
          v_376 = v_375;
          v_375 = v_382;
        }
        v_362[0] = v_362[0] + v_375 >>> 0;
        v_362[1] = v_362[1] + v_376 >>> 0;
        v_362[2] = v_362[2] + v_377 >>> 0;
        v_362[3] = v_362[3] + v_378 >>> 0;
        v_362[4] = v_362[4] + v_379 >>> 0;
      }
      return [v_362[0] >> 24 & 255, v_362[0] >> 16 & 255, v_362[0] >> 8 & 255, v_362[0] & 255, v_362[1] >> 24 & 255, v_362[1] >> 16 & 255, v_362[1] >> 8 & 255, v_362[1] & 255, v_362[2] >> 24 & 255, v_362[2] >> 16 & 255, v_362[2] >> 8 & 255, v_362[2] & 255, v_362[3] >> 24 & 255, v_362[3] >> 16 & 255, v_362[3] >> 8 & 255, v_362[3] & 255, v_362[4] >> 24 & 255, v_362[4] >> 16 & 255, v_362[4] >> 8 & 255, v_362[4] & 255];
    }
    const v_383 = v_359;
    ;
    const v_384 = v_339("v5", 80, v_383);
    const v_385 = v_384;
    ;
    /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    const v_386 = 4;
    const v_387 = 0;
    const v_388 = 1;
    const v_389 = 2;
    function v_390(v_391) {
      let v_392 = v_391.length;
      while (--v_392 >= 0) {
        v_391[v_392] = 0;
      }
    }
    const v_393 = 0;
    const v_394 = 1;
    const v_395 = 2;
    const v_396 = 3;
    const v_397 = 258;
    const v_398 = 29;
    const v_399 = 256;
    const v_400 = v_399 + 1 + v_398;
    const v_401 = 30;
    const v_402 = 19;
    const v_403 = v_400 * 2 + 1;
    const v_404 = 15;
    const v_405 = 16;
    const v_406 = 7;
    const v_407 = 256;
    const v_408 = 16;
    const v_409 = 17;
    const v_410 = 18;
    const v_411 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const v_412 = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const v_413 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const v_414 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const v_415 = 512;
    const v_416 = new Array((v_400 + 2) * 2);
    v_390(v_416);
    const v_417 = new Array(v_401 * 2);
    v_390(v_417);
    const v_418 = new Array(v_415);
    v_390(v_418);
    const v_419 = new Array(v_397 - v_396 + 1);
    v_390(v_419);
    const v_420 = new Array(v_398);
    v_390(v_420);
    const v_421 = new Array(v_401);
    v_390(v_421);
    function v_422(v_423, v_424, v_425, v_426, v_427) {
      this.static_tree = v_423;
      this.extra_bits = v_424;
      this.extra_base = v_425;
      this.elems = v_426;
      this.max_length = v_427;
      this.has_stree = v_423 && v_423.length;
    }
    let v_428;
    let v_429;
    let v_430;
    function v_431(v_432, v_433) {
      this.dyn_tree = v_432;
      this.max_code = 0;
      this.stat_desc = v_433;
    }
    const v_434 = v_435 => {
      if (v_435 < 256) {
        return v_418[v_435];
      } else {
        return v_418[256 + (v_435 >>> 7)];
      }
    };
    const v_436 = (v_437, v_438) => {
      v_437.pending_buf[v_437.pending++] = v_438 & 255;
      v_437.pending_buf[v_437.pending++] = v_438 >>> 8 & 255;
    };
    const v_439 = (v_440, v_441, v_442) => {
      if (v_440.bi_valid > v_405 - v_442) {
        v_440.bi_buf |= v_441 << v_440.bi_valid & 65535;
        v_436(v_440, v_440.bi_buf);
        v_440.bi_buf = v_441 >> v_405 - v_440.bi_valid;
        v_440.bi_valid += v_442 - v_405;
      } else {
        v_440.bi_buf |= v_441 << v_440.bi_valid & 65535;
        v_440.bi_valid += v_442;
      }
    };
    const v_443 = (v_444, v_445, v_446) => {
      v_439(v_444, v_446[v_445 * 2], v_446[v_445 * 2 + 1]);
    };
    const v_447 = (v_448, v_449) => {
      let v_450 = 0;
      do {
        v_450 |= v_448 & 1;
        v_448 >>>= 1;
        v_450 <<= 1;
      } while (--v_449 > 0);
      return v_450 >>> 1;
    };
    const v_451 = v_452 => {
      if (v_452.bi_valid === 16) {
        v_436(v_452, v_452.bi_buf);
        v_452.bi_buf = 0;
        v_452.bi_valid = 0;
      } else if (v_452.bi_valid >= 8) {
        v_452.pending_buf[v_452.pending++] = v_452.bi_buf & 255;
        v_452.bi_buf >>= 8;
        v_452.bi_valid -= 8;
      }
    };
    const v_453 = (v_454, v_455) => {
      const v_456 = v_455.dyn_tree;
      const v_457 = v_455.max_code;
      const v_458 = v_455.stat_desc.static_tree;
      const v_459 = v_455.stat_desc.has_stree;
      const v_460 = v_455.stat_desc.extra_bits;
      const v_461 = v_455.stat_desc.extra_base;
      const v_462 = v_455.stat_desc.max_length;
      let v_463;
      let v_464;
      let v_465;
      let v_466;
      let v_467;
      let v_468;
      let v_469 = 0;
      for (v_466 = 0; v_466 <= v_404; v_466++) {
        v_454.bl_count[v_466] = 0;
      }
      v_456[v_454.heap[v_454.heap_max] * 2 + 1] = 0;
      for (v_463 = v_454.heap_max + 1; v_463 < v_403; v_463++) {
        v_464 = v_454.heap[v_463];
        v_466 = v_456[v_456[v_464 * 2 + 1] * 2 + 1] + 1;
        if (v_466 > v_462) {
          v_466 = v_462;
          v_469++;
        }
        v_456[v_464 * 2 + 1] = v_466;
        if (v_464 > v_457) {
          continue;
        }
        v_454.bl_count[v_466]++;
        v_467 = 0;
        if (v_464 >= v_461) {
          v_467 = v_460[v_464 - v_461];
        }
        v_468 = v_456[v_464 * 2];
        v_454.opt_len += v_468 * (v_466 + v_467);
        if (v_459) {
          v_454.static_len += v_468 * (v_458[v_464 * 2 + 1] + v_467);
        }
      }
      if (v_469 === 0) {
        return;
      }
      do {
        v_466 = v_462 - 1;
        while (v_454.bl_count[v_466] === 0) {
          v_466--;
        }
        v_454.bl_count[v_466]--;
        v_454.bl_count[v_466 + 1] += 2;
        v_454.bl_count[v_462]--;
        v_469 -= 2;
      } while (v_469 > 0);
      for (v_466 = v_462; v_466 !== 0; v_466--) {
        v_464 = v_454.bl_count[v_466];
        while (v_464 !== 0) {
          v_465 = v_454.heap[--v_463];
          if (v_465 > v_457) {
            continue;
          }
          if (v_456[v_465 * 2 + 1] !== v_466) {
            v_454.opt_len += (v_466 - v_456[v_465 * 2 + 1]) * v_456[v_465 * 2];
            v_456[v_465 * 2 + 1] = v_466;
          }
          v_464--;
        }
      }
    };
    const v_470 = (v_471, v_472, v_473) => {
      const v_474 = new Array(v_404 + 1);
      let v_475 = 0;
      let v_476;
      let v_477;
      for (v_476 = 1; v_476 <= v_404; v_476++) {
        v_475 = v_475 + v_473[v_476 - 1] << 1;
        v_474[v_476] = v_475;
      }
      for (v_477 = 0; v_477 <= v_472; v_477++) {
        let v_478 = v_471[v_477 * 2 + 1];
        if (v_478 === 0) {
          continue;
        }
        v_471[v_477 * 2] = v_447(v_474[v_478]++, v_478);
      }
    };
    const v_479 = () => {
      let v_480;
      let v_481;
      let v_482;
      let v_483;
      let v_484;
      const v_485 = new Array(v_404 + 1);
      v_482 = 0;
      for (v_483 = 0; v_483 < v_398 - 1; v_483++) {
        v_420[v_483] = v_482;
        for (v_480 = 0; v_480 < 1 << v_411[v_483]; v_480++) {
          v_419[v_482++] = v_483;
        }
      }
      v_419[v_482 - 1] = v_483;
      v_484 = 0;
      for (v_483 = 0; v_483 < 16; v_483++) {
        v_421[v_483] = v_484;
        for (v_480 = 0; v_480 < 1 << v_412[v_483]; v_480++) {
          v_418[v_484++] = v_483;
        }
      }
      v_484 >>= 7;
      for (; v_483 < v_401; v_483++) {
        v_421[v_483] = v_484 << 7;
        for (v_480 = 0; v_480 < 1 << v_412[v_483] - 7; v_480++) {
          v_418[256 + v_484++] = v_483;
        }
      }
      for (v_481 = 0; v_481 <= v_404; v_481++) {
        v_485[v_481] = 0;
      }
      v_480 = 0;
      while (v_480 <= 143) {
        v_416[v_480 * 2 + 1] = 8;
        v_480++;
        v_485[8]++;
      }
      while (v_480 <= 255) {
        v_416[v_480 * 2 + 1] = 9;
        v_480++;
        v_485[9]++;
      }
      while (v_480 <= 279) {
        v_416[v_480 * 2 + 1] = 7;
        v_480++;
        v_485[7]++;
      }
      while (v_480 <= 287) {
        v_416[v_480 * 2 + 1] = 8;
        v_480++;
        v_485[8]++;
      }
      v_470(v_416, v_400 + 1, v_485);
      for (v_480 = 0; v_480 < v_401; v_480++) {
        v_417[v_480 * 2 + 1] = 5;
        v_417[v_480 * 2] = v_447(v_480, 5);
      }
      v_428 = new v_422(v_416, v_411, v_399 + 1, v_400, v_404);
      v_429 = new v_422(v_417, v_412, 0, v_401, v_404);
      v_430 = new v_422(new Array(0), v_413, 0, v_402, v_406);
    };
    const v_486 = v_487 => {
      let v_488;
      for (v_488 = 0; v_488 < v_400; v_488++) {
        v_487.dyn_ltree[v_488 * 2] = 0;
      }
      for (v_488 = 0; v_488 < v_401; v_488++) {
        v_487.dyn_dtree[v_488 * 2] = 0;
      }
      for (v_488 = 0; v_488 < v_402; v_488++) {
        v_487.bl_tree[v_488 * 2] = 0;
      }
      v_487.dyn_ltree[v_407 * 2] = 1;
      v_487.opt_len = v_487.static_len = 0;
      v_487.sym_next = v_487.matches = 0;
    };
    const v_489 = v_490 => {
      if (v_490.bi_valid > 8) {
        v_436(v_490, v_490.bi_buf);
      } else if (v_490.bi_valid > 0) {
        v_490.pending_buf[v_490.pending++] = v_490.bi_buf;
      }
      v_490.bi_buf = 0;
      v_490.bi_valid = 0;
    };
    const v_491 = (v_492, v_493, v_494, v_495) => {
      const v_496 = v_493 * 2;
      const v_497 = v_494 * 2;
      return v_492[v_496] < v_492[v_497] || v_492[v_496] === v_492[v_497] && v_495[v_493] <= v_495[v_494];
    };
    const v_498 = (v_499, v_500, v_501) => {
      const v_502 = v_499.heap[v_501];
      let v_503 = v_501 << 1;
      while (v_503 <= v_499.heap_len) {
        if (v_503 < v_499.heap_len && v_491(v_500, v_499.heap[v_503 + 1], v_499.heap[v_503], v_499.depth)) {
          v_503++;
        }
        if (v_491(v_500, v_502, v_499.heap[v_503], v_499.depth)) {
          break;
        }
        v_499.heap[v_501] = v_499.heap[v_503];
        v_501 = v_503;
        v_503 <<= 1;
      }
      v_499.heap[v_501] = v_502;
    };
    const v_504 = (v_505, v_506, v_507) => {
      let v_508;
      let v_509;
      let v_510 = 0;
      let v_511;
      let v_512;
      if (v_505.sym_next !== 0) {
        do {
          v_508 = v_505.pending_buf[v_505.sym_buf + v_510++] & 255;
          v_508 += (v_505.pending_buf[v_505.sym_buf + v_510++] & 255) << 8;
          v_509 = v_505.pending_buf[v_505.sym_buf + v_510++];
          if (v_508 === 0) {
            v_443(v_505, v_509, v_506);
          } else {
            v_511 = v_419[v_509];
            v_443(v_505, v_511 + v_399 + 1, v_506);
            v_512 = v_411[v_511];
            if (v_512 !== 0) {
              v_509 -= v_420[v_511];
              v_439(v_505, v_509, v_512);
            }
            v_508--;
            v_511 = v_434(v_508);
            v_443(v_505, v_511, v_507);
            v_512 = v_412[v_511];
            if (v_512 !== 0) {
              v_508 -= v_421[v_511];
              v_439(v_505, v_508, v_512);
            }
          }
        } while (v_510 < v_505.sym_next);
      }
      v_443(v_505, v_407, v_506);
    };
    const v_513 = (v_514, v_515) => {
      const v_516 = v_515.dyn_tree;
      const v_517 = v_515.stat_desc.static_tree;
      const v_518 = v_515.stat_desc.has_stree;
      const v_519 = v_515.stat_desc.elems;
      let v_520;
      let v_521;
      let v_522 = -1;
      let v_523;
      v_514.heap_len = 0;
      v_514.heap_max = v_403;
      for (v_520 = 0; v_520 < v_519; v_520++) {
        if (v_516[v_520 * 2] !== 0) {
          v_514.heap[++v_514.heap_len] = v_522 = v_520;
          v_514.depth[v_520] = 0;
        } else {
          v_516[v_520 * 2 + 1] = 0;
        }
      }
      while (v_514.heap_len < 2) {
        v_523 = v_514.heap[++v_514.heap_len] = v_522 < 2 ? ++v_522 : 0;
        v_516[v_523 * 2] = 1;
        v_514.depth[v_523] = 0;
        v_514.opt_len--;
        if (v_518) {
          v_514.static_len -= v_517[v_523 * 2 + 1];
        }
      }
      v_515.max_code = v_522;
      for (v_520 = v_514.heap_len >> 1; v_520 >= 1; v_520--) {
        v_498(v_514, v_516, v_520);
      }
      v_523 = v_519;
      do {
        v_520 = v_514.heap[1];
        v_514.heap[1] = v_514.heap[v_514.heap_len--];
        v_498(v_514, v_516, 1);
        v_521 = v_514.heap[1];
        v_514.heap[--v_514.heap_max] = v_520;
        v_514.heap[--v_514.heap_max] = v_521;
        v_516[v_523 * 2] = v_516[v_520 * 2] + v_516[v_521 * 2];
        v_514.depth[v_523] = (v_514.depth[v_520] >= v_514.depth[v_521] ? v_514.depth[v_520] : v_514.depth[v_521]) + 1;
        v_516[v_520 * 2 + 1] = v_516[v_521 * 2 + 1] = v_523;
        v_514.heap[1] = v_523++;
        v_498(v_514, v_516, 1);
      } while (v_514.heap_len >= 2);
      v_514.heap[--v_514.heap_max] = v_514.heap[1];
      v_453(v_514, v_515);
      v_470(v_516, v_522, v_514.bl_count);
    };
    const v_524 = (v_525, v_526, v_527) => {
      let v_528;
      let v_529 = -1;
      let v_530;
      let v_531 = v_526[1];
      let v_532 = 0;
      let v_533 = 7;
      let v_534 = 4;
      if (v_531 === 0) {
        v_533 = 138;
        v_534 = 3;
      }
      v_526[(v_527 + 1) * 2 + 1] = 65535;
      for (v_528 = 0; v_528 <= v_527; v_528++) {
        v_530 = v_531;
        v_531 = v_526[(v_528 + 1) * 2 + 1];
        if (++v_532 < v_533 && v_530 === v_531) {
          continue;
        } else if (v_532 < v_534) {
          v_525.bl_tree[v_530 * 2] += v_532;
        } else if (v_530 !== 0) {
          if (v_530 !== v_529) {
            v_525.bl_tree[v_530 * 2]++;
          }
          v_525.bl_tree[v_408 * 2]++;
        } else if (v_532 <= 10) {
          v_525.bl_tree[v_409 * 2]++;
        } else {
          v_525.bl_tree[v_410 * 2]++;
        }
        v_532 = 0;
        v_529 = v_530;
        if (v_531 === 0) {
          v_533 = 138;
          v_534 = 3;
        } else if (v_530 === v_531) {
          v_533 = 6;
          v_534 = 3;
        } else {
          v_533 = 7;
          v_534 = 4;
        }
      }
    };
    const v_535 = (v_536, v_537, v_538) => {
      let v_539;
      let v_540 = -1;
      let v_541;
      let v_542 = v_537[1];
      let v_543 = 0;
      let v_544 = 7;
      let v_545 = 4;
      if (v_542 === 0) {
        v_544 = 138;
        v_545 = 3;
      }
      for (v_539 = 0; v_539 <= v_538; v_539++) {
        v_541 = v_542;
        v_542 = v_537[(v_539 + 1) * 2 + 1];
        if (++v_543 < v_544 && v_541 === v_542) {
          continue;
        } else if (v_543 < v_545) {
          do {
            v_443(v_536, v_541, v_536.bl_tree);
          } while (--v_543 !== 0);
        } else if (v_541 !== 0) {
          if (v_541 !== v_540) {
            v_443(v_536, v_541, v_536.bl_tree);
            v_543--;
          }
          v_443(v_536, v_408, v_536.bl_tree);
          v_439(v_536, v_543 - 3, 2);
        } else if (v_543 <= 10) {
          v_443(v_536, v_409, v_536.bl_tree);
          v_439(v_536, v_543 - 3, 3);
        } else {
          v_443(v_536, v_410, v_536.bl_tree);
          v_439(v_536, v_543 - 11, 7);
        }
        v_543 = 0;
        v_540 = v_541;
        if (v_542 === 0) {
          v_544 = 138;
          v_545 = 3;
        } else if (v_541 === v_542) {
          v_544 = 6;
          v_545 = 3;
        } else {
          v_544 = 7;
          v_545 = 4;
        }
      }
    };
    const v_546 = v_547 => {
      let v_548;
      v_524(v_547, v_547.dyn_ltree, v_547.l_desc.max_code);
      v_524(v_547, v_547.dyn_dtree, v_547.d_desc.max_code);
      v_513(v_547, v_547.bl_desc);
      for (v_548 = v_402 - 1; v_548 >= 3; v_548--) {
        if (v_547.bl_tree[v_414[v_548] * 2 + 1] !== 0) {
          break;
        }
      }
      v_547.opt_len += (v_548 + 1) * 3 + 5 + 5 + 4;
      return v_548;
    };
    const v_549 = (v_550, v_551, v_552, v_553) => {
      let v_554;
      v_439(v_550, v_551 - 257, 5);
      v_439(v_550, v_552 - 1, 5);
      v_439(v_550, v_553 - 4, 4);
      for (v_554 = 0; v_554 < v_553; v_554++) {
        v_439(v_550, v_550.bl_tree[v_414[v_554] * 2 + 1], 3);
      }
      v_535(v_550, v_550.dyn_ltree, v_551 - 1);
      v_535(v_550, v_550.dyn_dtree, v_552 - 1);
    };
    const v_555 = v_556 => {
      let v_557 = 4093624447;
      let v_558;
      for (v_558 = 0; v_558 <= 31; v_558++, v_557 >>>= 1) {
        if (v_557 & 1 && v_556.dyn_ltree[v_558 * 2] !== 0) {
          return v_387;
        }
      }
      if (v_556.dyn_ltree[18] !== 0 || v_556.dyn_ltree[20] !== 0 || v_556.dyn_ltree[26] !== 0) {
        return v_388;
      }
      for (v_558 = 32; v_558 < v_399; v_558++) {
        if (v_556.dyn_ltree[v_558 * 2] !== 0) {
          return v_388;
        }
      }
      return v_387;
    };
    let v_559 = false;
    const v_560 = v_561 => {
      if (!v_559) {
        v_479();
        v_559 = true;
      }
      v_561.l_desc = new v_431(v_561.dyn_ltree, v_428);
      v_561.d_desc = new v_431(v_561.dyn_dtree, v_429);
      v_561.bl_desc = new v_431(v_561.bl_tree, v_430);
      v_561.bi_buf = 0;
      v_561.bi_valid = 0;
      v_486(v_561);
    };
    const v_562 = (v_563, v_564, v_565, v_566) => {
      v_439(v_563, (v_393 << 1) + (v_566 ? 1 : 0), 3);
      v_489(v_563);
      v_436(v_563, v_565);
      v_436(v_563, ~v_565);
      if (v_565) {
        v_563.pending_buf.set(v_563.window.subarray(v_564, v_564 + v_565), v_563.pending);
      }
      v_563.pending += v_565;
    };
    const v_567 = v_568 => {
      v_439(v_568, v_394 << 1, 3);
      v_443(v_568, v_407, v_416);
      v_451(v_568);
    };
    const v_569 = (v_570, v_571, v_572, v_573) => {
      let v_574;
      let v_575;
      let v_576 = 0;
      if (v_570.level > 0) {
        if (v_570.strm.data_type === v_389) {
          v_570.strm.data_type = v_555(v_570);
        }
        v_513(v_570, v_570.l_desc);
        v_513(v_570, v_570.d_desc);
        v_576 = v_546(v_570);
        v_574 = v_570.opt_len + 3 + 7 >>> 3;
        v_575 = v_570.static_len + 3 + 7 >>> 3;
        if (v_575 <= v_574) {
          v_574 = v_575;
        }
      } else {
        v_574 = v_575 = v_572 + 5;
      }
      if (v_572 + 4 <= v_574 && v_571 !== -1) {
        v_562(v_570, v_571, v_572, v_573);
      } else if (v_570.strategy === v_386 || v_575 === v_574) {
        v_439(v_570, (v_394 << 1) + (v_573 ? 1 : 0), 3);
        v_504(v_570, v_416, v_417);
      } else {
        v_439(v_570, (v_395 << 1) + (v_573 ? 1 : 0), 3);
        v_549(v_570, v_570.l_desc.max_code + 1, v_570.d_desc.max_code + 1, v_576 + 1);
        v_504(v_570, v_570.dyn_ltree, v_570.dyn_dtree);
      }
      v_486(v_570);
      if (v_573) {
        v_489(v_570);
      }
    };
    const v_577 = (v_578, v_579, v_580) => {
      v_578.pending_buf[v_578.sym_buf + v_578.sym_next++] = v_579;
      v_578.pending_buf[v_578.sym_buf + v_578.sym_next++] = v_579 >> 8;
      v_578.pending_buf[v_578.sym_buf + v_578.sym_next++] = v_580;
      if (v_579 === 0) {
        v_578.dyn_ltree[v_580 * 2]++;
      } else {
        v_578.matches++;
        v_579--;
        v_578.dyn_ltree[(v_419[v_580] + v_399 + 1) * 2]++;
        v_578.dyn_dtree[v_434(v_579) * 2]++;
      }
      return v_578.sym_next === v_578.sym_end;
    };
    var v_581 = v_560;
    var v_582 = v_562;
    var v_583 = v_569;
    var v_584 = v_577;
    var v_585 = v_567;
    var v_586 = {
      _tr_init: v_581,
      _tr_stored_block: v_582,
      _tr_flush_block: v_583,
      _tr_tally: v_584,
      _tr_align: v_585
    };
    var v_587 = v_586;
    const v_588 = (v_589, v_590, v_591, v_592) => {
      let v_593 = v_589 & 65535 | 0;
      let v_594 = v_589 >>> 16 & 65535 | 0;
      let v_595 = 0;
      while (v_591 !== 0) {
        v_595 = v_591 > 2000 ? 2000 : v_591;
        v_591 -= v_595;
        do {
          v_593 = v_593 + v_590[v_592++] | 0;
          v_594 = v_594 + v_593 | 0;
        } while (--v_595);
        v_593 %= 65521;
        v_594 %= 65521;
      }
      return v_593 | v_594 << 16 | 0;
    };
    var v_596 = v_588;
    const v_597 = () => {
      let v_598;
      let v_599 = [];
      for (var v_600 = 0; v_600 < 256; v_600++) {
        v_598 = v_600;
        for (var v_601 = 0; v_601 < 8; v_601++) {
          v_598 = v_598 & 1 ? v_598 >>> 1 ^ -306674912 : v_598 >>> 1;
        }
        v_599[v_600] = v_598;
      }
      return v_599;
    };
    const v_602 = new Uint32Array(v_597());
    const v_603 = (v_604, v_605, v_606, v_607) => {
      const v_608 = v_602;
      const v_609 = v_607 + v_606;
      v_604 ^= -1;
      for (let v_610 = v_607; v_610 < v_609; v_610++) {
        v_604 = v_604 >>> 8 ^ v_608[(v_604 ^ v_605[v_610]) & 255];
      }
      return v_604 ^ -1;
    };
    var v_611 = v_603;
    var v_612 = {
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
    var v_613 = {
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
    var v_614 = v_613;
    const {
      _tr_init: v_615,
      _tr_stored_block: v_616,
      _tr_flush_block: v_617,
      _tr_tally: v_618,
      _tr_align: v_619
    } = v_587;
    const {
      Z_NO_FLUSH: v_620,
      Z_PARTIAL_FLUSH: v_621,
      Z_FULL_FLUSH: v_622,
      Z_FINISH: v_623,
      Z_BLOCK: v_624,
      Z_OK: v_625,
      Z_STREAM_END: v_626,
      Z_STREAM_ERROR: v_627,
      Z_DATA_ERROR: v_628,
      Z_BUF_ERROR: v_629,
      Z_DEFAULT_COMPRESSION: v_630,
      Z_FILTERED: v_631,
      Z_HUFFMAN_ONLY: v_632,
      Z_RLE: v_633,
      Z_FIXED: v_634,
      Z_DEFAULT_STRATEGY: v_635,
      Z_UNKNOWN: v_636,
      Z_DEFLATED: v_637
    } = v_614;
    const v_638 = 9;
    const v_639 = 15;
    const v_640 = 8;
    const v_641 = 29;
    const v_642 = 256;
    const v_643 = v_642 + 1 + v_641;
    const v_644 = 30;
    const v_645 = 19;
    const v_646 = v_643 * 2 + 1;
    const v_647 = 15;
    const v_648 = 3;
    const v_649 = 258;
    const v_650 = v_649 + v_648 + 1;
    const v_651 = 32;
    const v_652 = 42;
    const v_653 = 57;
    const v_654 = 69;
    const v_655 = 73;
    const v_656 = 91;
    const v_657 = 103;
    const v_658 = 113;
    const v_659 = 666;
    const v_660 = 1;
    const v_661 = 2;
    const v_662 = 3;
    const v_663 = 4;
    const v_664 = 3;
    const v_665 = (v_666, v_667) => {
      v_666.msg = v_612[v_667];
      return v_667;
    };
    const v_668 = v_669 => {
      return v_669 * 2 - (v_669 > 4 ? 9 : 0);
    };
    const v_670 = v_671 => {
      let v_672 = v_671.length;
      while (--v_672 >= 0) {
        v_671[v_672] = 0;
      }
    };
    const v_673 = v_674 => {
      let v_675;
      let v_676;
      let v_677;
      let v_678 = v_674.w_size;
      v_675 = v_674.hash_size;
      v_677 = v_675;
      do {
        v_676 = v_674.head[--v_677];
        v_674.head[v_677] = v_676 >= v_678 ? v_676 - v_678 : 0;
      } while (--v_675);
      v_675 = v_678;
      v_677 = v_675;
      do {
        v_676 = v_674.prev[--v_677];
        v_674.prev[v_677] = v_676 >= v_678 ? v_676 - v_678 : 0;
      } while (--v_675);
    };
    let v_679 = (v_680, v_681, v_682) => (v_681 << v_680.hash_shift ^ v_682) & v_680.hash_mask;
    let v_683 = v_679;
    const v_684 = v_685 => {
      const v_686 = v_685.state;
      let v_687 = v_686.pending;
      if (v_687 > v_685.avail_out) {
        v_687 = v_685.avail_out;
      }
      if (v_687 === 0) {
        return;
      }
      v_685.output.set(v_686.pending_buf.subarray(v_686.pending_out, v_686.pending_out + v_687), v_685.next_out);
      v_685.next_out += v_687;
      v_686.pending_out += v_687;
      v_685.total_out += v_687;
      v_685.avail_out -= v_687;
      v_686.pending -= v_687;
      if (v_686.pending === 0) {
        v_686.pending_out = 0;
      }
    };
    const v_688 = (v_689, v_690) => {
      v_617(v_689, v_689.block_start >= 0 ? v_689.block_start : -1, v_689.strstart - v_689.block_start, v_690);
      v_689.block_start = v_689.strstart;
      v_684(v_689.strm);
    };
    const v_691 = (v_692, v_693) => {
      v_692.pending_buf[v_692.pending++] = v_693;
    };
    const v_694 = (v_695, v_696) => {
      v_695.pending_buf[v_695.pending++] = v_696 >>> 8 & 255;
      v_695.pending_buf[v_695.pending++] = v_696 & 255;
    };
    const v_697 = (v_698, v_699, v_700, v_701) => {
      let v_702 = v_698.avail_in;
      if (v_702 > v_701) {
        v_702 = v_701;
      }
      if (v_702 === 0) {
        return 0;
      }
      v_698.avail_in -= v_702;
      v_699.set(v_698.input.subarray(v_698.next_in, v_698.next_in + v_702), v_700);
      if (v_698.state.wrap === 1) {
        v_698.adler = v_596(v_698.adler, v_699, v_702, v_700);
      } else if (v_698.state.wrap === 2) {
        v_698.adler = v_611(v_698.adler, v_699, v_702, v_700);
      }
      v_698.next_in += v_702;
      v_698.total_in += v_702;
      return v_702;
    };
    const v_703 = (v_704, v_705) => {
      let v_706 = v_704.max_chain_length;
      let v_707 = v_704.strstart;
      let v_708;
      let v_709;
      let v_710 = v_704.prev_length;
      let v_711 = v_704.nice_match;
      const v_712 = v_704.strstart > v_704.w_size - v_650 ? v_704.strstart - (v_704.w_size - v_650) : 0;
      const v_713 = v_704.window;
      const v_714 = v_704.w_mask;
      const v_715 = v_704.prev;
      const v_716 = v_704.strstart + v_649;
      let v_717 = v_713[v_707 + v_710 - 1];
      let v_718 = v_713[v_707 + v_710];
      if (v_704.prev_length >= v_704.good_match) {
        v_706 >>= 2;
      }
      if (v_711 > v_704.lookahead) {
        v_711 = v_704.lookahead;
      }
      do {
        v_708 = v_705;
        if (v_713[v_708 + v_710] !== v_718 || v_713[v_708 + v_710 - 1] !== v_717 || v_713[v_708] !== v_713[v_707] || v_713[++v_708] !== v_713[v_707 + 1]) {
          continue;
        }
        v_707 += 2;
        v_708++;
        do {} while (v_713[++v_707] === v_713[++v_708] && v_713[++v_707] === v_713[++v_708] && v_713[++v_707] === v_713[++v_708] && v_713[++v_707] === v_713[++v_708] && v_713[++v_707] === v_713[++v_708] && v_713[++v_707] === v_713[++v_708] && v_713[++v_707] === v_713[++v_708] && v_713[++v_707] === v_713[++v_708] && v_707 < v_716);
        v_709 = v_649 - (v_716 - v_707);
        v_707 = v_716 - v_649;
        if (v_709 > v_710) {
          v_704.match_start = v_705;
          v_710 = v_709;
          if (v_709 >= v_711) {
            break;
          }
          v_717 = v_713[v_707 + v_710 - 1];
          v_718 = v_713[v_707 + v_710];
        }
      } while ((v_705 = v_715[v_705 & v_714]) > v_712 && --v_706 !== 0);
      if (v_710 <= v_704.lookahead) {
        return v_710;
      }
      return v_704.lookahead;
    };
    const v_719 = v_720 => {
      const v_721 = v_720.w_size;
      let v_722;
      let v_723;
      let v_724;
      do {
        v_723 = v_720.window_size - v_720.lookahead - v_720.strstart;
        if (v_720.strstart >= v_721 + (v_721 - v_650)) {
          v_720.window.set(v_720.window.subarray(v_721, v_721 + v_721 - v_723), 0);
          v_720.match_start -= v_721;
          v_720.strstart -= v_721;
          v_720.block_start -= v_721;
          if (v_720.insert > v_720.strstart) {
            v_720.insert = v_720.strstart;
          }
          v_673(v_720);
          v_723 += v_721;
        }
        if (v_720.strm.avail_in === 0) {
          break;
        }
        v_722 = v_697(v_720.strm, v_720.window, v_720.strstart + v_720.lookahead, v_723);
        v_720.lookahead += v_722;
        if (v_720.lookahead + v_720.insert >= v_648) {
          v_724 = v_720.strstart - v_720.insert;
          v_720.ins_h = v_720.window[v_724];
          v_720.ins_h = v_683(v_720, v_720.ins_h, v_720.window[v_724 + 1]);
          while (v_720.insert) {
            v_720.ins_h = v_683(v_720, v_720.ins_h, v_720.window[v_724 + v_648 - 1]);
            v_720.prev[v_724 & v_720.w_mask] = v_720.head[v_720.ins_h];
            v_720.head[v_720.ins_h] = v_724;
            v_724++;
            v_720.insert--;
            if (v_720.lookahead + v_720.insert < v_648) {
              break;
            }
          }
        }
      } while (v_720.lookahead < v_650 && v_720.strm.avail_in !== 0);
    };
    const v_725 = (v_726, v_727) => {
      let v_728 = v_726.pending_buf_size - 5 > v_726.w_size ? v_726.w_size : v_726.pending_buf_size - 5;
      let v_729;
      let v_730;
      let v_731;
      let v_732 = 0;
      let v_733 = v_726.strm.avail_in;
      do {
        v_729 = 65535;
        v_731 = v_726.bi_valid + 42 >> 3;
        if (v_726.strm.avail_out < v_731) {
          break;
        }
        v_731 = v_726.strm.avail_out - v_731;
        v_730 = v_726.strstart - v_726.block_start;
        if (v_729 > v_730 + v_726.strm.avail_in) {
          v_729 = v_730 + v_726.strm.avail_in;
        }
        if (v_729 > v_731) {
          v_729 = v_731;
        }
        if (v_729 < v_728 && (v_729 === 0 && v_727 !== v_623 || v_727 === v_620 || v_729 !== v_730 + v_726.strm.avail_in)) {
          break;
        }
        v_732 = v_727 === v_623 && v_729 === v_730 + v_726.strm.avail_in ? 1 : 0;
        v_616(v_726, 0, 0, v_732);
        v_726.pending_buf[v_726.pending - 4] = v_729;
        v_726.pending_buf[v_726.pending - 3] = v_729 >> 8;
        v_726.pending_buf[v_726.pending - 2] = ~v_729;
        v_726.pending_buf[v_726.pending - 1] = ~v_729 >> 8;
        v_684(v_726.strm);
        if (v_730) {
          if (v_730 > v_729) {
            v_730 = v_729;
          }
          v_726.strm.output.set(v_726.window.subarray(v_726.block_start, v_726.block_start + v_730), v_726.strm.next_out);
          v_726.strm.next_out += v_730;
          v_726.strm.avail_out -= v_730;
          v_726.strm.total_out += v_730;
          v_726.block_start += v_730;
          v_729 -= v_730;
        }
        if (v_729) {
          v_697(v_726.strm, v_726.strm.output, v_726.strm.next_out, v_729);
          v_726.strm.next_out += v_729;
          v_726.strm.avail_out -= v_729;
          v_726.strm.total_out += v_729;
        }
      } while (v_732 === 0);
      v_733 -= v_726.strm.avail_in;
      if (v_733) {
        if (v_733 >= v_726.w_size) {
          v_726.matches = 2;
          v_726.window.set(v_726.strm.input.subarray(v_726.strm.next_in - v_726.w_size, v_726.strm.next_in), 0);
          v_726.strstart = v_726.w_size;
          v_726.insert = v_726.strstart;
        } else {
          if (v_726.window_size - v_726.strstart <= v_733) {
            v_726.strstart -= v_726.w_size;
            v_726.window.set(v_726.window.subarray(v_726.w_size, v_726.w_size + v_726.strstart), 0);
            if (v_726.matches < 2) {
              v_726.matches++;
            }
            if (v_726.insert > v_726.strstart) {
              v_726.insert = v_726.strstart;
            }
          }
          v_726.window.set(v_726.strm.input.subarray(v_726.strm.next_in - v_733, v_726.strm.next_in), v_726.strstart);
          v_726.strstart += v_733;
          v_726.insert += v_733 > v_726.w_size - v_726.insert ? v_726.w_size - v_726.insert : v_733;
        }
        v_726.block_start = v_726.strstart;
      }
      if (v_726.high_water < v_726.strstart) {
        v_726.high_water = v_726.strstart;
      }
      if (v_732) {
        return v_663;
      }
      if (v_727 !== v_620 && v_727 !== v_623 && v_726.strm.avail_in === 0 && v_726.strstart === v_726.block_start) {
        return v_661;
      }
      v_731 = v_726.window_size - v_726.strstart;
      if (v_726.strm.avail_in > v_731 && v_726.block_start >= v_726.w_size) {
        v_726.block_start -= v_726.w_size;
        v_726.strstart -= v_726.w_size;
        v_726.window.set(v_726.window.subarray(v_726.w_size, v_726.w_size + v_726.strstart), 0);
        if (v_726.matches < 2) {
          v_726.matches++;
        }
        v_731 += v_726.w_size;
        if (v_726.insert > v_726.strstart) {
          v_726.insert = v_726.strstart;
        }
      }
      if (v_731 > v_726.strm.avail_in) {
        v_731 = v_726.strm.avail_in;
      }
      if (v_731) {
        v_697(v_726.strm, v_726.window, v_726.strstart, v_731);
        v_726.strstart += v_731;
        v_726.insert += v_731 > v_726.w_size - v_726.insert ? v_726.w_size - v_726.insert : v_731;
      }
      if (v_726.high_water < v_726.strstart) {
        v_726.high_water = v_726.strstart;
      }
      v_731 = v_726.bi_valid + 42 >> 3;
      v_731 = v_726.pending_buf_size - v_731 > 65535 ? 65535 : v_726.pending_buf_size - v_731;
      v_728 = v_731 > v_726.w_size ? v_726.w_size : v_731;
      v_730 = v_726.strstart - v_726.block_start;
      if (v_730 >= v_728 || (v_730 || v_727 === v_623) && v_727 !== v_620 && v_726.strm.avail_in === 0 && v_730 <= v_731) {
        v_729 = v_730 > v_731 ? v_731 : v_730;
        v_732 = v_727 === v_623 && v_726.strm.avail_in === 0 && v_729 === v_730 ? 1 : 0;
        v_616(v_726, v_726.block_start, v_729, v_732);
        v_726.block_start += v_729;
        v_684(v_726.strm);
      }
      if (v_732) {
        return v_662;
      } else {
        return v_660;
      }
    };
    const v_734 = (v_735, v_736) => {
      let v_737;
      let v_738;
      while (true) {
        if (v_735.lookahead < v_650) {
          v_719(v_735);
          if (v_735.lookahead < v_650 && v_736 === v_620) {
            return v_660;
          }
          if (v_735.lookahead === 0) {
            break;
          }
        }
        v_737 = 0;
        if (v_735.lookahead >= v_648) {
          v_735.ins_h = v_683(v_735, v_735.ins_h, v_735.window[v_735.strstart + v_648 - 1]);
          v_737 = v_735.prev[v_735.strstart & v_735.w_mask] = v_735.head[v_735.ins_h];
          v_735.head[v_735.ins_h] = v_735.strstart;
        }
        if (v_737 !== 0 && v_735.strstart - v_737 <= v_735.w_size - v_650) {
          v_735.match_length = v_703(v_735, v_737);
        }
        if (v_735.match_length >= v_648) {
          v_738 = v_618(v_735, v_735.strstart - v_735.match_start, v_735.match_length - v_648);
          v_735.lookahead -= v_735.match_length;
          if (v_735.match_length <= v_735.max_lazy_match && v_735.lookahead >= v_648) {
            v_735.match_length--;
            do {
              v_735.strstart++;
              v_735.ins_h = v_683(v_735, v_735.ins_h, v_735.window[v_735.strstart + v_648 - 1]);
              v_737 = v_735.prev[v_735.strstart & v_735.w_mask] = v_735.head[v_735.ins_h];
              v_735.head[v_735.ins_h] = v_735.strstart;
            } while (--v_735.match_length !== 0);
            v_735.strstart++;
          } else {
            v_735.strstart += v_735.match_length;
            v_735.match_length = 0;
            v_735.ins_h = v_735.window[v_735.strstart];
            v_735.ins_h = v_683(v_735, v_735.ins_h, v_735.window[v_735.strstart + 1]);
          }
        } else {
          v_738 = v_618(v_735, 0, v_735.window[v_735.strstart]);
          v_735.lookahead--;
          v_735.strstart++;
        }
        if (v_738) {
          v_688(v_735, false);
          if (v_735.strm.avail_out === 0) {
            return v_660;
          }
        }
      }
      v_735.insert = v_735.strstart < v_648 - 1 ? v_735.strstart : v_648 - 1;
      if (v_736 === v_623) {
        v_688(v_735, true);
        if (v_735.strm.avail_out === 0) {
          return v_662;
        }
        return v_663;
      }
      if (v_735.sym_next) {
        v_688(v_735, false);
        if (v_735.strm.avail_out === 0) {
          return v_660;
        }
      }
      return v_661;
    };
    const v_739 = (v_740, v_741) => {
      let v_742;
      let v_743;
      let v_744;
      while (true) {
        if (v_740.lookahead < v_650) {
          v_719(v_740);
          if (v_740.lookahead < v_650 && v_741 === v_620) {
            return v_660;
          }
          if (v_740.lookahead === 0) {
            break;
          }
        }
        v_742 = 0;
        if (v_740.lookahead >= v_648) {
          v_740.ins_h = v_683(v_740, v_740.ins_h, v_740.window[v_740.strstart + v_648 - 1]);
          v_742 = v_740.prev[v_740.strstart & v_740.w_mask] = v_740.head[v_740.ins_h];
          v_740.head[v_740.ins_h] = v_740.strstart;
        }
        v_740.prev_length = v_740.match_length;
        v_740.prev_match = v_740.match_start;
        v_740.match_length = v_648 - 1;
        if (v_742 !== 0 && v_740.prev_length < v_740.max_lazy_match && v_740.strstart - v_742 <= v_740.w_size - v_650) {
          v_740.match_length = v_703(v_740, v_742);
          if (v_740.match_length <= 5 && (v_740.strategy === v_631 || v_740.match_length === v_648 && v_740.strstart - v_740.match_start > 4096)) {
            v_740.match_length = v_648 - 1;
          }
        }
        if (v_740.prev_length >= v_648 && v_740.match_length <= v_740.prev_length) {
          v_744 = v_740.strstart + v_740.lookahead - v_648;
          v_743 = v_618(v_740, v_740.strstart - 1 - v_740.prev_match, v_740.prev_length - v_648);
          v_740.lookahead -= v_740.prev_length - 1;
          v_740.prev_length -= 2;
          do {
            if (++v_740.strstart <= v_744) {
              v_740.ins_h = v_683(v_740, v_740.ins_h, v_740.window[v_740.strstart + v_648 - 1]);
              v_742 = v_740.prev[v_740.strstart & v_740.w_mask] = v_740.head[v_740.ins_h];
              v_740.head[v_740.ins_h] = v_740.strstart;
            }
          } while (--v_740.prev_length !== 0);
          v_740.match_available = 0;
          v_740.match_length = v_648 - 1;
          v_740.strstart++;
          if (v_743) {
            v_688(v_740, false);
            if (v_740.strm.avail_out === 0) {
              return v_660;
            }
          }
        } else if (v_740.match_available) {
          v_743 = v_618(v_740, 0, v_740.window[v_740.strstart - 1]);
          if (v_743) {
            v_688(v_740, false);
          }
          v_740.strstart++;
          v_740.lookahead--;
          if (v_740.strm.avail_out === 0) {
            return v_660;
          }
        } else {
          v_740.match_available = 1;
          v_740.strstart++;
          v_740.lookahead--;
        }
      }
      if (v_740.match_available) {
        v_743 = v_618(v_740, 0, v_740.window[v_740.strstart - 1]);
        v_740.match_available = 0;
      }
      v_740.insert = v_740.strstart < v_648 - 1 ? v_740.strstart : v_648 - 1;
      if (v_741 === v_623) {
        v_688(v_740, true);
        if (v_740.strm.avail_out === 0) {
          return v_662;
        }
        return v_663;
      }
      if (v_740.sym_next) {
        v_688(v_740, false);
        if (v_740.strm.avail_out === 0) {
          return v_660;
        }
      }
      return v_661;
    };
    const v_745 = (v_746, v_747) => {
      let v_748;
      let v_749;
      let v_750;
      let v_751;
      const v_752 = v_746.window;
      while (true) {
        if (v_746.lookahead <= v_649) {
          v_719(v_746);
          if (v_746.lookahead <= v_649 && v_747 === v_620) {
            return v_660;
          }
          if (v_746.lookahead === 0) {
            break;
          }
        }
        v_746.match_length = 0;
        if (v_746.lookahead >= v_648 && v_746.strstart > 0) {
          v_750 = v_746.strstart - 1;
          v_749 = v_752[v_750];
          if (v_749 === v_752[++v_750] && v_749 === v_752[++v_750] && v_749 === v_752[++v_750]) {
            v_751 = v_746.strstart + v_649;
            do {} while (v_749 === v_752[++v_750] && v_749 === v_752[++v_750] && v_749 === v_752[++v_750] && v_749 === v_752[++v_750] && v_749 === v_752[++v_750] && v_749 === v_752[++v_750] && v_749 === v_752[++v_750] && v_749 === v_752[++v_750] && v_750 < v_751);
            v_746.match_length = v_649 - (v_751 - v_750);
            if (v_746.match_length > v_746.lookahead) {
              v_746.match_length = v_746.lookahead;
            }
          }
        }
        if (v_746.match_length >= v_648) {
          v_748 = v_618(v_746, 1, v_746.match_length - v_648);
          v_746.lookahead -= v_746.match_length;
          v_746.strstart += v_746.match_length;
          v_746.match_length = 0;
        } else {
          v_748 = v_618(v_746, 0, v_746.window[v_746.strstart]);
          v_746.lookahead--;
          v_746.strstart++;
        }
        if (v_748) {
          v_688(v_746, false);
          if (v_746.strm.avail_out === 0) {
            return v_660;
          }
        }
      }
      v_746.insert = 0;
      if (v_747 === v_623) {
        v_688(v_746, true);
        if (v_746.strm.avail_out === 0) {
          return v_662;
        }
        return v_663;
      }
      if (v_746.sym_next) {
        v_688(v_746, false);
        if (v_746.strm.avail_out === 0) {
          return v_660;
        }
      }
      return v_661;
    };
    const v_753 = (v_754, v_755) => {
      let v_756;
      while (true) {
        if (v_754.lookahead === 0) {
          v_719(v_754);
          if (v_754.lookahead === 0) {
            if (v_755 === v_620) {
              return v_660;
            }
            break;
          }
        }
        v_754.match_length = 0;
        v_756 = v_618(v_754, 0, v_754.window[v_754.strstart]);
        v_754.lookahead--;
        v_754.strstart++;
        if (v_756) {
          v_688(v_754, false);
          if (v_754.strm.avail_out === 0) {
            return v_660;
          }
        }
      }
      v_754.insert = 0;
      if (v_755 === v_623) {
        v_688(v_754, true);
        if (v_754.strm.avail_out === 0) {
          return v_662;
        }
        return v_663;
      }
      if (v_754.sym_next) {
        v_688(v_754, false);
        if (v_754.strm.avail_out === 0) {
          return v_660;
        }
      }
      return v_661;
    };
    function v_757(v_758, v_759, v_760, v_761, v_762) {
      this.good_length = v_758;
      this.max_lazy = v_759;
      this.nice_length = v_760;
      this.max_chain = v_761;
      this.func = v_762;
    }
    const v_763 = [new v_757(0, 0, 0, 0, v_725), new v_757(4, 4, 8, 4, v_734), new v_757(4, 5, 16, 8, v_734), new v_757(4, 6, 32, 32, v_734), new v_757(4, 4, 16, 16, v_739), new v_757(8, 16, 32, 32, v_739), new v_757(8, 16, 128, 128, v_739), new v_757(8, 32, 128, 256, v_739), new v_757(32, 128, 258, 1024, v_739), new v_757(32, 258, 258, 4096, v_739)];
    const v_764 = v_765 => {
      v_765.window_size = v_765.w_size * 2;
      v_670(v_765.head);
      v_765.max_lazy_match = v_763[v_765.level].max_lazy;
      v_765.good_match = v_763[v_765.level].good_length;
      v_765.nice_match = v_763[v_765.level].nice_length;
      v_765.max_chain_length = v_763[v_765.level].max_chain;
      v_765.strstart = 0;
      v_765.block_start = 0;
      v_765.lookahead = 0;
      v_765.insert = 0;
      v_765.match_length = v_765.prev_length = v_648 - 1;
      v_765.match_available = 0;
      v_765.ins_h = 0;
    };
    function v_766() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = v_637;
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
      this.dyn_ltree = new Uint16Array(v_646 * 2);
      this.dyn_dtree = new Uint16Array((v_644 * 2 + 1) * 2);
      this.bl_tree = new Uint16Array((v_645 * 2 + 1) * 2);
      v_670(this.dyn_ltree);
      v_670(this.dyn_dtree);
      v_670(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(v_647 + 1);
      this.heap = new Uint16Array(v_643 * 2 + 1);
      v_670(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(v_643 * 2 + 1);
      v_670(this.depth);
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
    const v_767 = v_768 => {
      if (!v_768) {
        return 1;
      }
      const v_769 = v_768.state;
      if (!v_769 || v_769.strm !== v_768 || v_769.status !== v_652 && v_769.status !== v_653 && v_769.status !== v_654 && v_769.status !== v_655 && v_769.status !== v_656 && v_769.status !== v_657 && v_769.status !== v_658 && v_769.status !== v_659) {
        return 1;
      }
      return 0;
    };
    const v_770 = v_771 => {
      if (v_767(v_771)) {
        return v_665(v_771, v_627);
      }
      v_771.total_in = v_771.total_out = 0;
      v_771.data_type = v_636;
      const v_772 = v_771.state;
      v_772.pending = 0;
      v_772.pending_out = 0;
      if (v_772.wrap < 0) {
        v_772.wrap = -v_772.wrap;
      }
      v_772.status = v_772.wrap === 2 ? v_653 : v_772.wrap ? v_652 : v_658;
      v_771.adler = v_772.wrap === 2 ? 0 : 1;
      v_772.last_flush = -2;
      v_615(v_772);
      return v_625;
    };
    const v_773 = v_774 => {
      const v_775 = v_770(v_774);
      if (v_775 === v_625) {
        v_764(v_774.state);
      }
      return v_775;
    };
    const v_776 = (v_777, v_778) => {
      if (v_767(v_777) || v_777.state.wrap !== 2) {
        return v_627;
      }
      v_777.state.gzhead = v_778;
      return v_625;
    };
    const v_779 = (v_780, v_781, v_782, v_783, v_784, v_785) => {
      if (!v_780) {
        return v_627;
      }
      let v_786 = 1;
      if (v_781 === v_630) {
        v_781 = 6;
      }
      if (v_783 < 0) {
        v_786 = 0;
        v_783 = -v_783;
      } else if (v_783 > 15) {
        v_786 = 2;
        v_783 -= 16;
      }
      if (v_784 < 1 || v_784 > v_638 || v_782 !== v_637 || v_783 < 8 || v_783 > 15 || v_781 < 0 || v_781 > 9 || v_785 < 0 || v_785 > v_634 || v_783 === 8 && v_786 !== 1) {
        return v_665(v_780, v_627);
      }
      if (v_783 === 8) {
        v_783 = 9;
      }
      const v_787 = new v_766();
      v_780.state = v_787;
      v_787.strm = v_780;
      v_787.status = v_652;
      v_787.wrap = v_786;
      v_787.gzhead = null;
      v_787.w_bits = v_783;
      v_787.w_size = 1 << v_787.w_bits;
      v_787.w_mask = v_787.w_size - 1;
      v_787.hash_bits = v_784 + 7;
      v_787.hash_size = 1 << v_787.hash_bits;
      v_787.hash_mask = v_787.hash_size - 1;
      v_787.hash_shift = ~~((v_787.hash_bits + v_648 - 1) / v_648);
      v_787.window = new Uint8Array(v_787.w_size * 2);
      v_787.head = new Uint16Array(v_787.hash_size);
      v_787.prev = new Uint16Array(v_787.w_size);
      v_787.lit_bufsize = 1 << v_784 + 6;
      v_787.pending_buf_size = v_787.lit_bufsize * 4;
      v_787.pending_buf = new Uint8Array(v_787.pending_buf_size);
      v_787.sym_buf = v_787.lit_bufsize;
      v_787.sym_end = (v_787.lit_bufsize - 1) * 3;
      v_787.level = v_781;
      v_787.strategy = v_785;
      v_787.method = v_782;
      return v_773(v_780);
    };
    const v_788 = (v_789, v_790) => {
      return v_779(v_789, v_790, v_637, v_639, v_640, v_635);
    };
    const v_791 = (v_792, v_793) => {
      if (v_767(v_792) || v_793 > v_624 || v_793 < 0) {
        if (v_792) {
          return v_665(v_792, v_627);
        } else {
          return v_627;
        }
      }
      const v_794 = v_792.state;
      if (!v_792.output || v_792.avail_in !== 0 && !v_792.input || v_794.status === v_659 && v_793 !== v_623) {
        return v_665(v_792, v_792.avail_out === 0 ? v_629 : v_627);
      }
      const v_795 = v_794.last_flush;
      v_794.last_flush = v_793;
      if (v_794.pending !== 0) {
        v_684(v_792);
        if (v_792.avail_out === 0) {
          v_794.last_flush = -1;
          return v_625;
        }
      } else if (v_792.avail_in === 0 && v_668(v_793) <= v_668(v_795) && v_793 !== v_623) {
        return v_665(v_792, v_629);
      }
      if (v_794.status === v_659 && v_792.avail_in !== 0) {
        return v_665(v_792, v_629);
      }
      if (v_794.status === v_652 && v_794.wrap === 0) {
        v_794.status = v_658;
      }
      if (v_794.status === v_652) {
        let v_796 = v_637 + (v_794.w_bits - 8 << 4) << 8;
        let v_797 = -1;
        if (v_794.strategy >= v_632 || v_794.level < 2) {
          v_797 = 0;
        } else if (v_794.level < 6) {
          v_797 = 1;
        } else if (v_794.level === 6) {
          v_797 = 2;
        } else {
          v_797 = 3;
        }
        v_796 |= v_797 << 6;
        if (v_794.strstart !== 0) {
          v_796 |= v_651;
        }
        v_796 += 31 - v_796 % 31;
        v_694(v_794, v_796);
        if (v_794.strstart !== 0) {
          v_694(v_794, v_792.adler >>> 16);
          v_694(v_794, v_792.adler & 65535);
        }
        v_792.adler = 1;
        v_794.status = v_658;
        v_684(v_792);
        if (v_794.pending !== 0) {
          v_794.last_flush = -1;
          return v_625;
        }
      }
      if (v_794.status === v_653) {
        v_792.adler = 0;
        v_691(v_794, 31);
        v_691(v_794, 139);
        v_691(v_794, 8);
        if (!v_794.gzhead) {
          v_691(v_794, 0);
          v_691(v_794, 0);
          v_691(v_794, 0);
          v_691(v_794, 0);
          v_691(v_794, 0);
          v_691(v_794, v_794.level === 9 ? 2 : v_794.strategy >= v_632 || v_794.level < 2 ? 4 : 0);
          v_691(v_794, v_664);
          v_794.status = v_658;
          v_684(v_792);
          if (v_794.pending !== 0) {
            v_794.last_flush = -1;
            return v_625;
          }
        } else {
          v_691(v_794, (v_794.gzhead.text ? 1 : 0) + (v_794.gzhead.hcrc ? 2 : 0) + (!v_794.gzhead.extra ? 0 : 4) + (!v_794.gzhead.name ? 0 : 8) + (!v_794.gzhead.comment ? 0 : 16));
          v_691(v_794, v_794.gzhead.time & 255);
          v_691(v_794, v_794.gzhead.time >> 8 & 255);
          v_691(v_794, v_794.gzhead.time >> 16 & 255);
          v_691(v_794, v_794.gzhead.time >> 24 & 255);
          v_691(v_794, v_794.level === 9 ? 2 : v_794.strategy >= v_632 || v_794.level < 2 ? 4 : 0);
          v_691(v_794, v_794.gzhead.os & 255);
          if (v_794.gzhead.extra && v_794.gzhead.extra.length) {
            v_691(v_794, v_794.gzhead.extra.length & 255);
            v_691(v_794, v_794.gzhead.extra.length >> 8 & 255);
          }
          if (v_794.gzhead.hcrc) {
            v_792.adler = v_611(v_792.adler, v_794.pending_buf, v_794.pending, 0);
          }
          v_794.gzindex = 0;
          v_794.status = v_654;
        }
      }
      if (v_794.status === v_654) {
        if (v_794.gzhead.extra) {
          let v_798 = v_794.pending;
          let v_799 = (v_794.gzhead.extra.length & 65535) - v_794.gzindex;
          while (v_794.pending + v_799 > v_794.pending_buf_size) {
            let v_800 = v_794.pending_buf_size - v_794.pending;
            v_794.pending_buf.set(v_794.gzhead.extra.subarray(v_794.gzindex, v_794.gzindex + v_800), v_794.pending);
            v_794.pending = v_794.pending_buf_size;
            if (v_794.gzhead.hcrc && v_794.pending > v_798) {
              v_792.adler = v_611(v_792.adler, v_794.pending_buf, v_794.pending - v_798, v_798);
            }
            v_794.gzindex += v_800;
            v_684(v_792);
            if (v_794.pending !== 0) {
              v_794.last_flush = -1;
              return v_625;
            }
            v_798 = 0;
            v_799 -= v_800;
          }
          let v_801 = new Uint8Array(v_794.gzhead.extra);
          v_794.pending_buf.set(v_801.subarray(v_794.gzindex, v_794.gzindex + v_799), v_794.pending);
          v_794.pending += v_799;
          if (v_794.gzhead.hcrc && v_794.pending > v_798) {
            v_792.adler = v_611(v_792.adler, v_794.pending_buf, v_794.pending - v_798, v_798);
          }
          v_794.gzindex = 0;
        }
        v_794.status = v_655;
      }
      if (v_794.status === v_655) {
        if (v_794.gzhead.name) {
          let v_802 = v_794.pending;
          let v_803;
          do {
            if (v_794.pending === v_794.pending_buf_size) {
              if (v_794.gzhead.hcrc && v_794.pending > v_802) {
                v_792.adler = v_611(v_792.adler, v_794.pending_buf, v_794.pending - v_802, v_802);
              }
              v_684(v_792);
              if (v_794.pending !== 0) {
                v_794.last_flush = -1;
                return v_625;
              }
              v_802 = 0;
            }
            if (v_794.gzindex < v_794.gzhead.name.length) {
              v_803 = v_794.gzhead.name.charCodeAt(v_794.gzindex++) & 255;
            } else {
              v_803 = 0;
            }
            v_691(v_794, v_803);
          } while (v_803 !== 0);
          if (v_794.gzhead.hcrc && v_794.pending > v_802) {
            v_792.adler = v_611(v_792.adler, v_794.pending_buf, v_794.pending - v_802, v_802);
          }
          v_794.gzindex = 0;
        }
        v_794.status = v_656;
      }
      if (v_794.status === v_656) {
        if (v_794.gzhead.comment) {
          let v_804 = v_794.pending;
          let v_805;
          do {
            if (v_794.pending === v_794.pending_buf_size) {
              if (v_794.gzhead.hcrc && v_794.pending > v_804) {
                v_792.adler = v_611(v_792.adler, v_794.pending_buf, v_794.pending - v_804, v_804);
              }
              v_684(v_792);
              if (v_794.pending !== 0) {
                v_794.last_flush = -1;
                return v_625;
              }
              v_804 = 0;
            }
            if (v_794.gzindex < v_794.gzhead.comment.length) {
              v_805 = v_794.gzhead.comment.charCodeAt(v_794.gzindex++) & 255;
            } else {
              v_805 = 0;
            }
            v_691(v_794, v_805);
          } while (v_805 !== 0);
          if (v_794.gzhead.hcrc && v_794.pending > v_804) {
            v_792.adler = v_611(v_792.adler, v_794.pending_buf, v_794.pending - v_804, v_804);
          }
        }
        v_794.status = v_657;
      }
      if (v_794.status === v_657) {
        if (v_794.gzhead.hcrc) {
          if (v_794.pending + 2 > v_794.pending_buf_size) {
            v_684(v_792);
            if (v_794.pending !== 0) {
              v_794.last_flush = -1;
              return v_625;
            }
          }
          v_691(v_794, v_792.adler & 255);
          v_691(v_794, v_792.adler >> 8 & 255);
          v_792.adler = 0;
        }
        v_794.status = v_658;
        v_684(v_792);
        if (v_794.pending !== 0) {
          v_794.last_flush = -1;
          return v_625;
        }
      }
      if (v_792.avail_in !== 0 || v_794.lookahead !== 0 || v_793 !== v_620 && v_794.status !== v_659) {
        let v_806 = v_794.level === 0 ? v_725(v_794, v_793) : v_794.strategy === v_632 ? v_753(v_794, v_793) : v_794.strategy === v_633 ? v_745(v_794, v_793) : v_763[v_794.level].func(v_794, v_793);
        if (v_806 === v_662 || v_806 === v_663) {
          v_794.status = v_659;
        }
        if (v_806 === v_660 || v_806 === v_662) {
          if (v_792.avail_out === 0) {
            v_794.last_flush = -1;
          }
          return v_625;
        }
        if (v_806 === v_661) {
          if (v_793 === v_621) {
            v_619(v_794);
          } else if (v_793 !== v_624) {
            v_616(v_794, 0, 0, false);
            if (v_793 === v_622) {
              v_670(v_794.head);
              if (v_794.lookahead === 0) {
                v_794.strstart = 0;
                v_794.block_start = 0;
                v_794.insert = 0;
              }
            }
          }
          v_684(v_792);
          if (v_792.avail_out === 0) {
            v_794.last_flush = -1;
            return v_625;
          }
        }
      }
      if (v_793 !== v_623) {
        return v_625;
      }
      if (v_794.wrap <= 0) {
        return v_626;
      }
      if (v_794.wrap === 2) {
        v_691(v_794, v_792.adler & 255);
        v_691(v_794, v_792.adler >> 8 & 255);
        v_691(v_794, v_792.adler >> 16 & 255);
        v_691(v_794, v_792.adler >> 24 & 255);
        v_691(v_794, v_792.total_in & 255);
        v_691(v_794, v_792.total_in >> 8 & 255);
        v_691(v_794, v_792.total_in >> 16 & 255);
        v_691(v_794, v_792.total_in >> 24 & 255);
      } else {
        v_694(v_794, v_792.adler >>> 16);
        v_694(v_794, v_792.adler & 65535);
      }
      v_684(v_792);
      if (v_794.wrap > 0) {
        v_794.wrap = -v_794.wrap;
      }
      if (v_794.pending !== 0) {
        return v_625;
      } else {
        return v_626;
      }
    };
    const v_807 = v_808 => {
      if (v_767(v_808)) {
        return v_627;
      }
      const v_809 = v_808.state.status;
      v_808.state = null;
      if (v_809 === v_658) {
        return v_665(v_808, v_628);
      } else {
        return v_625;
      }
    };
    const v_810 = (v_811, v_812) => {
      let v_813 = v_812.length;
      if (v_767(v_811)) {
        return v_627;
      }
      const v_814 = v_811.state;
      const v_815 = v_814.wrap;
      if (v_815 === 2 || v_815 === 1 && v_814.status !== v_652 || v_814.lookahead) {
        return v_627;
      }
      if (v_815 === 1) {
        v_811.adler = v_596(v_811.adler, v_812, v_813, 0);
      }
      v_814.wrap = 0;
      if (v_813 >= v_814.w_size) {
        if (v_815 === 0) {
          v_670(v_814.head);
          v_814.strstart = 0;
          v_814.block_start = 0;
          v_814.insert = 0;
        }
        let v_816 = new Uint8Array(v_814.w_size);
        v_816.set(v_812.subarray(v_813 - v_814.w_size, v_813), 0);
        v_812 = v_816;
        v_813 = v_814.w_size;
      }
      const v_817 = v_811.avail_in;
      const v_818 = v_811.next_in;
      const v_819 = v_811.input;
      v_811.avail_in = v_813;
      v_811.next_in = 0;
      v_811.input = v_812;
      v_719(v_814);
      while (v_814.lookahead >= v_648) {
        let v_820 = v_814.strstart;
        let v_821 = v_814.lookahead - (v_648 - 1);
        do {
          v_814.ins_h = v_683(v_814, v_814.ins_h, v_814.window[v_820 + v_648 - 1]);
          v_814.prev[v_820 & v_814.w_mask] = v_814.head[v_814.ins_h];
          v_814.head[v_814.ins_h] = v_820;
          v_820++;
        } while (--v_821);
        v_814.strstart = v_820;
        v_814.lookahead = v_648 - 1;
        v_719(v_814);
      }
      v_814.strstart += v_814.lookahead;
      v_814.block_start = v_814.strstart;
      v_814.insert = v_814.lookahead;
      v_814.lookahead = 0;
      v_814.match_length = v_814.prev_length = v_648 - 1;
      v_814.match_available = 0;
      v_811.next_in = v_818;
      v_811.input = v_819;
      v_811.avail_in = v_817;
      v_814.wrap = v_815;
      return v_625;
    };
    var v_822 = v_788;
    var v_823 = v_779;
    var v_824 = v_773;
    var v_825 = v_770;
    var v_826 = v_776;
    var v_827 = v_791;
    var v_828 = v_807;
    var v_829 = v_810;
    var v_830 = "pako deflate (from Nodeca project)";
    var v_831 = {
      deflateInit: v_822,
      deflateInit2: v_823,
      deflateReset: v_824,
      deflateResetKeep: v_825,
      deflateSetHeader: v_826,
      deflate: v_827,
      deflateEnd: v_828,
      deflateSetDictionary: v_829,
      deflateInfo: v_830
    };
    var v_832 = v_831;
    const v_833 = (v_834, v_835) => {
      return Object.prototype.hasOwnProperty.call(v_834, v_835);
    };
    function v_836(v_837) {
      const v_838 = Array.prototype.slice.call(arguments, 1);
      while (v_838.length) {
        const v_839 = v_838.shift();
        if (!v_839) {
          continue;
        }
        if (typeof v_839 !== "object") {
          throw new TypeError(v_839 + "must be non-object");
        }
        for (const v_840 in v_839) {
          if (v_833(v_839, v_840)) {
            v_837[v_840] = v_839[v_840];
          }
        }
      }
      return v_837;
    }
    var v_841 = v_842 => {
      let v_843 = 0;
      for (let v_844 = 0, v_845 = v_842.length; v_844 < v_845; v_844++) {
        v_843 += v_842[v_844].length;
      }
      const v_846 = new Uint8Array(v_843);
      for (let v_847 = 0, v_848 = 0, v_849 = v_842.length; v_847 < v_849; v_847++) {
        let v_850 = v_842[v_847];
        v_846.set(v_850, v_848);
        v_848 += v_850.length;
      }
      return v_846;
    };
    var v_851 = {
      assign: v_836,
      flattenChunks: v_841
    };
    var v_852 = v_851;
    let v_853 = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (v_854) {
      v_853 = false;
    }
    const v_855 = new Uint8Array(256);
    for (let v_856 = 0; v_856 < 256; v_856++) {
      v_855[v_856] = v_856 >= 252 ? 6 : v_856 >= 248 ? 5 : v_856 >= 240 ? 4 : v_856 >= 224 ? 3 : v_856 >= 192 ? 2 : 1;
    }
    v_855[254] = v_855[254] = 1;
    var v_857 = v_858 => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(v_858);
      }
      let v_859;
      let v_860;
      let v_861;
      let v_862;
      let v_863;
      let v_864 = v_858.length;
      let v_865 = 0;
      for (v_862 = 0; v_862 < v_864; v_862++) {
        v_860 = v_858.charCodeAt(v_862);
        if ((v_860 & 64512) === 55296 && v_862 + 1 < v_864) {
          v_861 = v_858.charCodeAt(v_862 + 1);
          if ((v_861 & 64512) === 56320) {
            v_860 = 65536 + (v_860 - 55296 << 10) + (v_861 - 56320);
            v_862++;
          }
        }
        v_865 += v_860 < 128 ? 1 : v_860 < 2048 ? 2 : v_860 < 65536 ? 3 : 4;
      }
      v_859 = new Uint8Array(v_865);
      v_863 = 0;
      v_862 = 0;
      for (; v_863 < v_865; v_862++) {
        v_860 = v_858.charCodeAt(v_862);
        if ((v_860 & 64512) === 55296 && v_862 + 1 < v_864) {
          v_861 = v_858.charCodeAt(v_862 + 1);
          if ((v_861 & 64512) === 56320) {
            v_860 = 65536 + (v_860 - 55296 << 10) + (v_861 - 56320);
            v_862++;
          }
        }
        if (v_860 < 128) {
          v_859[v_863++] = v_860;
        } else if (v_860 < 2048) {
          v_859[v_863++] = v_860 >>> 6 | 192;
          v_859[v_863++] = v_860 & 63 | 128;
        } else if (v_860 < 65536) {
          v_859[v_863++] = v_860 >>> 12 | 224;
          v_859[v_863++] = v_860 >>> 6 & 63 | 128;
          v_859[v_863++] = v_860 & 63 | 128;
        } else {
          v_859[v_863++] = v_860 >>> 18 | 240;
          v_859[v_863++] = v_860 >>> 12 & 63 | 128;
          v_859[v_863++] = v_860 >>> 6 & 63 | 128;
          v_859[v_863++] = v_860 & 63 | 128;
        }
      }
      return v_859;
    };
    const v_866 = (v_867, v_868) => {
      if (v_868 < 65534) {
        if (v_867.subarray && v_853) {
          return String.fromCharCode.apply(null, v_867.length === v_868 ? v_867 : v_867.subarray(0, v_868));
        }
      }
      let v_869 = "";
      for (let v_870 = 0; v_870 < v_868; v_870++) {
        v_869 += String.fromCharCode(v_867[v_870]);
      }
      return v_869;
    };
    var v_871 = (v_872, v_873) => {
      const v_874 = v_873 || v_872.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(v_872.subarray(0, v_873));
      }
      let v_875;
      let v_876;
      const v_877 = new Array(v_874 * 2);
      v_876 = 0;
      v_875 = 0;
      while (v_875 < v_874) {
        let v_878 = v_872[v_875++];
        if (v_878 < 128) {
          v_877[v_876++] = v_878;
          continue;
        }
        let v_879 = v_855[v_878];
        if (v_879 > 4) {
          v_877[v_876++] = 65533;
          v_875 += v_879 - 1;
          continue;
        }
        v_878 &= v_879 === 2 ? 31 : v_879 === 3 ? 15 : 7;
        while (v_879 > 1 && v_875 < v_874) {
          v_878 = v_878 << 6 | v_872[v_875++] & 63;
          v_879--;
        }
        if (v_879 > 1) {
          v_877[v_876++] = 65533;
          continue;
        }
        if (v_878 < 65536) {
          v_877[v_876++] = v_878;
        } else {
          v_878 -= 65536;
          v_877[v_876++] = v_878 >> 10 & 1023 | 55296;
          v_877[v_876++] = v_878 & 1023 | 56320;
        }
      }
      return v_866(v_877, v_876);
    };
    var v_880 = (v_881, v_882) => {
      v_882 = v_882 || v_881.length;
      if (v_882 > v_881.length) {
        v_882 = v_881.length;
      }
      let v_883 = v_882 - 1;
      while (v_883 >= 0 && (v_881[v_883] & 192) === 128) {
        v_883--;
      }
      if (v_883 < 0) {
        return v_882;
      }
      if (v_883 === 0) {
        return v_882;
      }
      if (v_883 + v_855[v_881[v_883]] > v_882) {
        return v_883;
      } else {
        return v_882;
      }
    };
    var v_884 = {
      string2buf: v_857,
      buf2string: v_871,
      utf8border: v_880
    };
    var v_885 = v_884;
    function v_886() {
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
    var v_887 = v_886;
    const v_888 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: v_889,
      Z_SYNC_FLUSH: v_890,
      Z_FULL_FLUSH: v_891,
      Z_FINISH: v_892,
      Z_OK: v_893,
      Z_STREAM_END: v_894,
      Z_DEFAULT_COMPRESSION: v_895,
      Z_DEFAULT_STRATEGY: v_896,
      Z_DEFLATED: v_897
    } = v_614;
    function v_898(v_899) {
      var v_900 = {
        level: v_895,
        method: v_897,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: v_896
      };
      this.options = v_852.assign(v_900, v_899 || {});
      let v_901 = this.options;
      if (v_901.raw && v_901.windowBits > 0) {
        v_901.windowBits = -v_901.windowBits;
      } else if (v_901.gzip && v_901.windowBits > 0 && v_901.windowBits < 16) {
        v_901.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new v_887();
      this.strm.avail_out = 0;
      let v_902 = v_832.deflateInit2(this.strm, v_901.level, v_901.method, v_901.windowBits, v_901.memLevel, v_901.strategy);
      if (v_902 !== v_893) {
        throw new Error(v_612[v_902]);
      }
      if (v_901.header) {
        v_832.deflateSetHeader(this.strm, v_901.header);
      }
      if (v_901.dictionary) {
        let v_903;
        if (typeof v_901.dictionary === "string") {
          v_903 = v_885.string2buf(v_901.dictionary);
        } else if (v_888.call(v_901.dictionary) === "[object ArrayBuffer]") {
          v_903 = new Uint8Array(v_901.dictionary);
        } else {
          v_903 = v_901.dictionary;
        }
        v_902 = v_832.deflateSetDictionary(this.strm, v_903);
        if (v_902 !== v_893) {
          throw new Error(v_612[v_902]);
        }
        this._dict_set = true;
      }
    }
    v_898.prototype.push = function (v_904, v_905) {
      const v_906 = this.strm;
      const v_907 = this.options.chunkSize;
      let v_908;
      let v_909;
      if (this.ended) {
        return false;
      }
      if (v_905 === ~~v_905) {
        v_909 = v_905;
      } else {
        v_909 = v_905 === true ? v_892 : v_889;
      }
      if (typeof v_904 === "string") {
        v_906.input = v_885.string2buf(v_904);
      } else if (v_888.call(v_904) === "[object ArrayBuffer]") {
        v_906.input = new Uint8Array(v_904);
      } else {
        v_906.input = v_904;
      }
      v_906.next_in = 0;
      v_906.avail_in = v_906.input.length;
      while (true) {
        if (v_906.avail_out === 0) {
          v_906.output = new Uint8Array(v_907);
          v_906.next_out = 0;
          v_906.avail_out = v_907;
        }
        if ((v_909 === v_890 || v_909 === v_891) && v_906.avail_out <= 6) {
          this.onData(v_906.output.subarray(0, v_906.next_out));
          v_906.avail_out = 0;
          continue;
        }
        v_908 = v_832.deflate(v_906, v_909);
        if (v_908 === v_894) {
          if (v_906.next_out > 0) {
            this.onData(v_906.output.subarray(0, v_906.next_out));
          }
          v_908 = v_832.deflateEnd(this.strm);
          this.onEnd(v_908);
          this.ended = true;
          return v_908 === v_893;
        }
        if (v_906.avail_out === 0) {
          this.onData(v_906.output);
          continue;
        }
        if (v_909 > 0 && v_906.next_out > 0) {
          this.onData(v_906.output.subarray(0, v_906.next_out));
          v_906.avail_out = 0;
          continue;
        }
        if (v_906.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    v_898.prototype.onData = function (v_910) {
      this.chunks.push(v_910);
    };
    v_898.prototype.onEnd = function (v_911) {
      if (v_911 === v_893) {
        this.result = v_852.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = v_911;
      this.msg = this.strm.msg;
    };
    function v_912(v_913, v_914) {
      const v_915 = new v_898(v_914);
      v_915.push(v_913, true);
      if (v_915.err) {
        throw v_915.msg || v_612[v_915.err];
      }
      return v_915.result;
    }
    function v_916(v_917, v_918) {
      v_918 = v_918 || {};
      v_918.raw = true;
      return v_912(v_917, v_918);
    }
    function v_919(v_920, v_921) {
      v_921 = v_921 || {};
      v_921.gzip = true;
      return v_912(v_920, v_921);
    }
    var v_922 = v_898;
    var v_923 = v_912;
    var v_924 = v_916;
    var v_925 = v_919;
    var v_926 = v_614;
    var v_927 = {
      Deflate: v_922,
      deflate: v_923,
      deflateRaw: v_924,
      gzip: v_925,
      constants: v_926
    };
    var v_928 = v_927;
    const v_929 = 16209;
    const v_930 = 16191;
    var v_931 = function v_932(v_933, v_934) {
      let v_935;
      let v_936;
      let v_937;
      let v_938;
      let v_939;
      let v_940;
      let v_941;
      let v_942;
      let v_943;
      let v_944;
      let v_945;
      let v_946;
      let v_947;
      let v_948;
      let v_949;
      let v_950;
      let v_951;
      let v_952;
      let v_953;
      let v_954;
      let v_955;
      let v_956;
      let v_957;
      let v_958;
      const v_959 = v_933.state;
      v_935 = v_933.next_in;
      v_957 = v_933.input;
      v_936 = v_935 + (v_933.avail_in - 5);
      v_937 = v_933.next_out;
      v_958 = v_933.output;
      v_938 = v_937 - (v_934 - v_933.avail_out);
      v_939 = v_937 + (v_933.avail_out - 257);
      v_940 = v_959.dmax;
      v_941 = v_959.wsize;
      v_942 = v_959.whave;
      v_943 = v_959.wnext;
      v_944 = v_959.window;
      v_945 = v_959.hold;
      v_946 = v_959.bits;
      v_947 = v_959.lencode;
      v_948 = v_959.distcode;
      v_949 = (1 << v_959.lenbits) - 1;
      v_950 = (1 << v_959.distbits) - 1;
      v_960: do {
        if (v_946 < 15) {
          v_945 += v_957[v_935++] << v_946;
          v_946 += 8;
          v_945 += v_957[v_935++] << v_946;
          v_946 += 8;
        }
        v_951 = v_947[v_945 & v_949];
        v_961: while (true) {
          v_952 = v_951 >>> 24;
          v_945 >>>= v_952;
          v_946 -= v_952;
          v_952 = v_951 >>> 16 & 255;
          if (v_952 === 0) {
            v_958[v_937++] = v_951 & 65535;
          } else if (v_952 & 16) {
            v_953 = v_951 & 65535;
            v_952 &= 15;
            if (v_952) {
              if (v_946 < v_952) {
                v_945 += v_957[v_935++] << v_946;
                v_946 += 8;
              }
              v_953 += v_945 & (1 << v_952) - 1;
              v_945 >>>= v_952;
              v_946 -= v_952;
            }
            if (v_946 < 15) {
              v_945 += v_957[v_935++] << v_946;
              v_946 += 8;
              v_945 += v_957[v_935++] << v_946;
              v_946 += 8;
            }
            v_951 = v_948[v_945 & v_950];
            v_962: while (true) {
              v_952 = v_951 >>> 24;
              v_945 >>>= v_952;
              v_946 -= v_952;
              v_952 = v_951 >>> 16 & 255;
              if (v_952 & 16) {
                v_954 = v_951 & 65535;
                v_952 &= 15;
                if (v_946 < v_952) {
                  v_945 += v_957[v_935++] << v_946;
                  v_946 += 8;
                  if (v_946 < v_952) {
                    v_945 += v_957[v_935++] << v_946;
                    v_946 += 8;
                  }
                }
                v_954 += v_945 & (1 << v_952) - 1;
                if (v_954 > v_940) {
                  v_933.msg = "invalid distance too far back";
                  v_959.mode = v_929;
                  break v_960;
                }
                v_945 >>>= v_952;
                v_946 -= v_952;
                v_952 = v_937 - v_938;
                if (v_954 > v_952) {
                  v_952 = v_954 - v_952;
                  if (v_952 > v_942) {
                    if (v_959.sane) {
                      v_933.msg = "invalid distance too far back";
                      v_959.mode = v_929;
                      break v_960;
                    }
                  }
                  v_955 = 0;
                  v_956 = v_944;
                  if (v_943 === 0) {
                    v_955 += v_941 - v_952;
                    if (v_952 < v_953) {
                      v_953 -= v_952;
                      do {
                        v_958[v_937++] = v_944[v_955++];
                      } while (--v_952);
                      v_955 = v_937 - v_954;
                      v_956 = v_958;
                    }
                  } else if (v_943 < v_952) {
                    v_955 += v_941 + v_943 - v_952;
                    v_952 -= v_943;
                    if (v_952 < v_953) {
                      v_953 -= v_952;
                      do {
                        v_958[v_937++] = v_944[v_955++];
                      } while (--v_952);
                      v_955 = 0;
                      if (v_943 < v_953) {
                        v_952 = v_943;
                        v_953 -= v_952;
                        do {
                          v_958[v_937++] = v_944[v_955++];
                        } while (--v_952);
                        v_955 = v_937 - v_954;
                        v_956 = v_958;
                      }
                    }
                  } else {
                    v_955 += v_943 - v_952;
                    if (v_952 < v_953) {
                      v_953 -= v_952;
                      do {
                        v_958[v_937++] = v_944[v_955++];
                      } while (--v_952);
                      v_955 = v_937 - v_954;
                      v_956 = v_958;
                    }
                  }
                  while (v_953 > 2) {
                    v_958[v_937++] = v_956[v_955++];
                    v_958[v_937++] = v_956[v_955++];
                    v_958[v_937++] = v_956[v_955++];
                    v_953 -= 3;
                  }
                  if (v_953) {
                    v_958[v_937++] = v_956[v_955++];
                    if (v_953 > 1) {
                      v_958[v_937++] = v_956[v_955++];
                    }
                  }
                } else {
                  v_955 = v_937 - v_954;
                  do {
                    v_958[v_937++] = v_958[v_955++];
                    v_958[v_937++] = v_958[v_955++];
                    v_958[v_937++] = v_958[v_955++];
                    v_953 -= 3;
                  } while (v_953 > 2);
                  if (v_953) {
                    v_958[v_937++] = v_958[v_955++];
                    if (v_953 > 1) {
                      v_958[v_937++] = v_958[v_955++];
                    }
                  }
                }
              } else if ((v_952 & 64) === 0) {
                v_951 = v_948[(v_951 & 65535) + (v_945 & (1 << v_952) - 1)];
                continue v_962;
              } else {
                v_933.msg = "invalid distance code";
                v_959.mode = v_929;
                break v_960;
              }
              break;
            }
          } else if ((v_952 & 64) === 0) {
            v_951 = v_947[(v_951 & 65535) + (v_945 & (1 << v_952) - 1)];
            continue v_961;
          } else if (v_952 & 32) {
            v_959.mode = v_930;
            break v_960;
          } else {
            v_933.msg = "invalid literal/length code";
            v_959.mode = v_929;
            break v_960;
          }
          break;
        }
      } while (v_935 < v_936 && v_937 < v_939);
      v_953 = v_946 >> 3;
      v_935 -= v_953;
      v_946 -= v_953 << 3;
      v_945 &= (1 << v_946) - 1;
      v_933.next_in = v_935;
      v_933.next_out = v_937;
      v_933.avail_in = v_935 < v_936 ? 5 + (v_936 - v_935) : 5 - (v_935 - v_936);
      v_933.avail_out = v_937 < v_939 ? 257 + (v_939 - v_937) : 257 - (v_937 - v_939);
      v_959.hold = v_945;
      v_959.bits = v_946;
      return;
    };
    const v_963 = 15;
    const v_964 = 852;
    const v_965 = 592;
    const v_966 = 0;
    const v_967 = 1;
    const v_968 = 2;
    const v_969 = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const v_970 = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const v_971 = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const v_972 = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    const v_973 = (v_974, v_975, v_976, v_977, v_978, v_979, v_980, v_981) => {
      const v_982 = v_981.bits;
      let v_983 = 0;
      let v_984 = 0;
      let v_985 = 0;
      let v_986 = 0;
      let v_987 = 0;
      let v_988 = 0;
      let v_989 = 0;
      let v_990 = 0;
      let v_991 = 0;
      let v_992 = 0;
      let v_993;
      let v_994;
      let v_995;
      let v_996;
      let v_997;
      let v_998 = null;
      let v_999;
      const v_1000 = new Uint16Array(v_963 + 1);
      const v_1001 = new Uint16Array(v_963 + 1);
      let v_1002 = null;
      let v_1003;
      let v_1004;
      let v_1005;
      for (v_983 = 0; v_983 <= v_963; v_983++) {
        v_1000[v_983] = 0;
      }
      for (v_984 = 0; v_984 < v_977; v_984++) {
        v_1000[v_975[v_976 + v_984]]++;
      }
      v_987 = v_982;
      for (v_986 = v_963; v_986 >= 1; v_986--) {
        if (v_1000[v_986] !== 0) {
          break;
        }
      }
      if (v_987 > v_986) {
        v_987 = v_986;
      }
      if (v_986 === 0) {
        v_978[v_979++] = 20971520;
        v_978[v_979++] = 20971520;
        v_981.bits = 1;
        return 0;
      }
      for (v_985 = 1; v_985 < v_986; v_985++) {
        if (v_1000[v_985] !== 0) {
          break;
        }
      }
      if (v_987 < v_985) {
        v_987 = v_985;
      }
      v_990 = 1;
      for (v_983 = 1; v_983 <= v_963; v_983++) {
        v_990 <<= 1;
        v_990 -= v_1000[v_983];
        if (v_990 < 0) {
          return -1;
        }
      }
      if (v_990 > 0 && (v_974 === v_966 || v_986 !== 1)) {
        return -1;
      }
      v_1001[1] = 0;
      for (v_983 = 1; v_983 < v_963; v_983++) {
        v_1001[v_983 + 1] = v_1001[v_983] + v_1000[v_983];
      }
      for (v_984 = 0; v_984 < v_977; v_984++) {
        if (v_975[v_976 + v_984] !== 0) {
          v_980[v_1001[v_975[v_976 + v_984]]++] = v_984;
        }
      }
      if (v_974 === v_966) {
        v_998 = v_1002 = v_980;
        v_999 = 20;
      } else if (v_974 === v_967) {
        v_998 = v_969;
        v_1002 = v_970;
        v_999 = 257;
      } else {
        v_998 = v_971;
        v_1002 = v_972;
        v_999 = 0;
      }
      v_992 = 0;
      v_984 = 0;
      v_983 = v_985;
      v_997 = v_979;
      v_988 = v_987;
      v_989 = 0;
      v_995 = -1;
      v_991 = 1 << v_987;
      v_996 = v_991 - 1;
      if (v_974 === v_967 && v_991 > v_964 || v_974 === v_968 && v_991 > v_965) {
        return 1;
      }
      while (true) {
        v_1003 = v_983 - v_989;
        if (v_980[v_984] + 1 < v_999) {
          v_1004 = 0;
          v_1005 = v_980[v_984];
        } else if (v_980[v_984] >= v_999) {
          v_1004 = v_1002[v_980[v_984] - v_999];
          v_1005 = v_998[v_980[v_984] - v_999];
        } else {
          v_1004 = 96;
          v_1005 = 0;
        }
        v_993 = 1 << v_983 - v_989;
        v_994 = 1 << v_988;
        v_985 = v_994;
        do {
          v_994 -= v_993;
          v_978[v_997 + (v_992 >> v_989) + v_994] = v_1003 << 24 | v_1004 << 16 | v_1005 | 0;
        } while (v_994 !== 0);
        v_993 = 1 << v_983 - 1;
        while (v_992 & v_993) {
          v_993 >>= 1;
        }
        if (v_993 !== 0) {
          v_992 &= v_993 - 1;
          v_992 += v_993;
        } else {
          v_992 = 0;
        }
        v_984++;
        if (--v_1000[v_983] === 0) {
          if (v_983 === v_986) {
            break;
          }
          v_983 = v_975[v_976 + v_980[v_984]];
        }
        if (v_983 > v_987 && (v_992 & v_996) !== v_995) {
          if (v_989 === 0) {
            v_989 = v_987;
          }
          v_997 += v_985;
          v_988 = v_983 - v_989;
          v_990 = 1 << v_988;
          while (v_988 + v_989 < v_986) {
            v_990 -= v_1000[v_988 + v_989];
            if (v_990 <= 0) {
              break;
            }
            v_988++;
            v_990 <<= 1;
          }
          v_991 += 1 << v_988;
          if (v_974 === v_967 && v_991 > v_964 || v_974 === v_968 && v_991 > v_965) {
            return 1;
          }
          v_995 = v_992 & v_996;
          v_978[v_995] = v_987 << 24 | v_988 << 16 | v_997 - v_979 | 0;
        }
      }
      if (v_992 !== 0) {
        v_978[v_997 + v_992] = v_983 - v_989 << 24 | 4194304 | 0;
      }
      v_981.bits = v_987;
      return 0;
    };
    var v_1006 = v_973;
    const v_1007 = 0;
    const v_1008 = 1;
    const v_1009 = 2;
    const {
      Z_FINISH: v_1010,
      Z_BLOCK: v_1011,
      Z_TREES: v_1012,
      Z_OK: v_1013,
      Z_STREAM_END: v_1014,
      Z_NEED_DICT: v_1015,
      Z_STREAM_ERROR: v_1016,
      Z_DATA_ERROR: v_1017,
      Z_MEM_ERROR: v_1018,
      Z_BUF_ERROR: v_1019,
      Z_DEFLATED: v_1020
    } = v_614;
    const v_1021 = 16180;
    const v_1022 = 16181;
    const v_1023 = 16182;
    const v_1024 = 16183;
    const v_1025 = 16184;
    const v_1026 = 16185;
    const v_1027 = 16186;
    const v_1028 = 16187;
    const v_1029 = 16188;
    const v_1030 = 16189;
    const v_1031 = 16190;
    const v_1032 = 16191;
    const v_1033 = 16192;
    const v_1034 = 16193;
    const v_1035 = 16194;
    const v_1036 = 16195;
    const v_1037 = 16196;
    const v_1038 = 16197;
    const v_1039 = 16198;
    const v_1040 = 16199;
    const v_1041 = 16200;
    const v_1042 = 16201;
    const v_1043 = 16202;
    const v_1044 = 16203;
    const v_1045 = 16204;
    const v_1046 = 16205;
    const v_1047 = 16206;
    const v_1048 = 16207;
    const v_1049 = 16208;
    const v_1050 = 16209;
    const v_1051 = 16210;
    const v_1052 = 16211;
    const v_1053 = 852;
    const v_1054 = 592;
    const v_1055 = 15;
    const v_1056 = v_1055;
    const v_1057 = v_1058 => {
      return (v_1058 >>> 24 & 255) + (v_1058 >>> 8 & 65280) + ((v_1058 & 65280) << 8) + ((v_1058 & 255) << 24);
    };
    function v_1059() {
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
    const v_1060 = v_1061 => {
      if (!v_1061) {
        return 1;
      }
      const v_1062 = v_1061.state;
      if (!v_1062 || v_1062.strm !== v_1061 || v_1062.mode < v_1021 || v_1062.mode > v_1052) {
        return 1;
      }
      return 0;
    };
    const v_1063 = v_1064 => {
      if (v_1060(v_1064)) {
        return v_1016;
      }
      const v_1065 = v_1064.state;
      v_1064.total_in = v_1064.total_out = v_1065.total = 0;
      v_1064.msg = "";
      if (v_1065.wrap) {
        v_1064.adler = v_1065.wrap & 1;
      }
      v_1065.mode = v_1021;
      v_1065.last = 0;
      v_1065.havedict = 0;
      v_1065.flags = -1;
      v_1065.dmax = 32768;
      v_1065.head = null;
      v_1065.hold = 0;
      v_1065.bits = 0;
      v_1065.lencode = v_1065.lendyn = new Int32Array(v_1053);
      v_1065.distcode = v_1065.distdyn = new Int32Array(v_1054);
      v_1065.sane = 1;
      v_1065.back = -1;
      return v_1013;
    };
    const v_1066 = v_1067 => {
      if (v_1060(v_1067)) {
        return v_1016;
      }
      const v_1068 = v_1067.state;
      v_1068.wsize = 0;
      v_1068.whave = 0;
      v_1068.wnext = 0;
      return v_1063(v_1067);
    };
    const v_1069 = (v_1070, v_1071) => {
      let v_1072;
      if (v_1060(v_1070)) {
        return v_1016;
      }
      const v_1073 = v_1070.state;
      if (v_1071 < 0) {
        v_1072 = 0;
        v_1071 = -v_1071;
      } else {
        v_1072 = (v_1071 >> 4) + 5;
        if (v_1071 < 48) {
          v_1071 &= 15;
        }
      }
      if (v_1071 && (v_1071 < 8 || v_1071 > 15)) {
        return v_1016;
      }
      if (v_1073.window !== null && v_1073.wbits !== v_1071) {
        v_1073.window = null;
      }
      v_1073.wrap = v_1072;
      v_1073.wbits = v_1071;
      return v_1066(v_1070);
    };
    const v_1074 = (v_1075, v_1076) => {
      if (!v_1075) {
        return v_1016;
      }
      const v_1077 = new v_1059();
      v_1075.state = v_1077;
      v_1077.strm = v_1075;
      v_1077.window = null;
      v_1077.mode = v_1021;
      const v_1078 = v_1069(v_1075, v_1076);
      if (v_1078 !== v_1013) {
        v_1075.state = null;
      }
      return v_1078;
    };
    const v_1079 = v_1080 => {
      return v_1074(v_1080, v_1056);
    };
    let v_1081 = true;
    let v_1082;
    let v_1083;
    const v_1084 = v_1085 => {
      if (v_1081) {
        v_1082 = new Int32Array(512);
        v_1083 = new Int32Array(32);
        let v_1086 = 0;
        while (v_1086 < 144) {
          v_1085.lens[v_1086++] = 8;
        }
        while (v_1086 < 256) {
          v_1085.lens[v_1086++] = 9;
        }
        while (v_1086 < 280) {
          v_1085.lens[v_1086++] = 7;
        }
        while (v_1086 < 288) {
          v_1085.lens[v_1086++] = 8;
        }
        v_1006(v_1008, v_1085.lens, 0, 288, v_1082, 0, v_1085.work, {
          bits: 9
        });
        v_1086 = 0;
        while (v_1086 < 32) {
          v_1085.lens[v_1086++] = 5;
        }
        v_1006(v_1009, v_1085.lens, 0, 32, v_1083, 0, v_1085.work, {
          bits: 5
        });
        v_1081 = false;
      }
      v_1085.lencode = v_1082;
      v_1085.lenbits = 9;
      v_1085.distcode = v_1083;
      v_1085.distbits = 5;
    };
    const v_1087 = (v_1088, v_1089, v_1090, v_1091) => {
      let v_1092;
      const v_1093 = v_1088.state;
      if (v_1093.window === null) {
        v_1093.wsize = 1 << v_1093.wbits;
        v_1093.wnext = 0;
        v_1093.whave = 0;
        v_1093.window = new Uint8Array(v_1093.wsize);
      }
      if (v_1091 >= v_1093.wsize) {
        v_1093.window.set(v_1089.subarray(v_1090 - v_1093.wsize, v_1090), 0);
        v_1093.wnext = 0;
        v_1093.whave = v_1093.wsize;
      } else {
        v_1092 = v_1093.wsize - v_1093.wnext;
        if (v_1092 > v_1091) {
          v_1092 = v_1091;
        }
        v_1093.window.set(v_1089.subarray(v_1090 - v_1091, v_1090 - v_1091 + v_1092), v_1093.wnext);
        v_1091 -= v_1092;
        if (v_1091) {
          v_1093.window.set(v_1089.subarray(v_1090 - v_1091, v_1090), 0);
          v_1093.wnext = v_1091;
          v_1093.whave = v_1093.wsize;
        } else {
          v_1093.wnext += v_1092;
          if (v_1093.wnext === v_1093.wsize) {
            v_1093.wnext = 0;
          }
          if (v_1093.whave < v_1093.wsize) {
            v_1093.whave += v_1092;
          }
        }
      }
      return 0;
    };
    const v_1094 = (v_1095, v_1096) => {
      let v_1097;
      let v_1098;
      let v_1099;
      let v_1100;
      let v_1101;
      let v_1102;
      let v_1103;
      let v_1104;
      let v_1105;
      let v_1106;
      let v_1107;
      let v_1108;
      let v_1109;
      let v_1110;
      let v_1111 = 0;
      let v_1112;
      let v_1113;
      let v_1114;
      let v_1115;
      let v_1116;
      let v_1117;
      let v_1118;
      let v_1119;
      const v_1120 = new Uint8Array(4);
      let v_1121;
      let v_1122;
      const v_1123 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (v_1060(v_1095) || !v_1095.output || !v_1095.input && v_1095.avail_in !== 0) {
        return v_1016;
      }
      v_1097 = v_1095.state;
      if (v_1097.mode === v_1032) {
        v_1097.mode = v_1033;
      }
      v_1101 = v_1095.next_out;
      v_1099 = v_1095.output;
      v_1103 = v_1095.avail_out;
      v_1100 = v_1095.next_in;
      v_1098 = v_1095.input;
      v_1102 = v_1095.avail_in;
      v_1104 = v_1097.hold;
      v_1105 = v_1097.bits;
      v_1106 = v_1102;
      v_1107 = v_1103;
      v_1119 = v_1013;
      v_1124: while (true) {
        switch (v_1097.mode) {
          case v_1021:
            if (v_1097.wrap === 0) {
              v_1097.mode = v_1033;
              break;
            }
            while (v_1105 < 16) {
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1102--;
              v_1104 += v_1098[v_1100++] << v_1105;
              v_1105 += 8;
            }
            if (v_1097.wrap & 2 && v_1104 === 35615) {
              if (v_1097.wbits === 0) {
                v_1097.wbits = 15;
              }
              v_1097.check = 0;
              v_1120[0] = v_1104 & 255;
              v_1120[1] = v_1104 >>> 8 & 255;
              v_1097.check = v_611(v_1097.check, v_1120, 2, 0);
              v_1104 = 0;
              v_1105 = 0;
              v_1097.mode = v_1022;
              break;
            }
            if (v_1097.head) {
              v_1097.head.done = false;
            }
            if (!(v_1097.wrap & 1) || (((v_1104 & 255) << 8) + (v_1104 >> 8)) % 31) {
              v_1095.msg = "incorrect header check";
              v_1097.mode = v_1050;
              break;
            }
            if ((v_1104 & 15) !== v_1020) {
              v_1095.msg = "unknown compression method";
              v_1097.mode = v_1050;
              break;
            }
            v_1104 >>>= 4;
            v_1105 -= 4;
            v_1118 = (v_1104 & 15) + 8;
            if (v_1097.wbits === 0) {
              v_1097.wbits = v_1118;
            }
            if (v_1118 > 15 || v_1118 > v_1097.wbits) {
              v_1095.msg = "invalid window size";
              v_1097.mode = v_1050;
              break;
            }
            v_1097.dmax = 1 << v_1097.wbits;
            v_1097.flags = 0;
            v_1095.adler = v_1097.check = 1;
            v_1097.mode = v_1104 & 512 ? v_1030 : v_1032;
            v_1104 = 0;
            v_1105 = 0;
            break;
          case v_1022:
            while (v_1105 < 16) {
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1102--;
              v_1104 += v_1098[v_1100++] << v_1105;
              v_1105 += 8;
            }
            v_1097.flags = v_1104;
            if ((v_1097.flags & 255) !== v_1020) {
              v_1095.msg = "unknown compression method";
              v_1097.mode = v_1050;
              break;
            }
            if (v_1097.flags & 57344) {
              v_1095.msg = "unknown header flags set";
              v_1097.mode = v_1050;
              break;
            }
            if (v_1097.head) {
              v_1097.head.text = v_1104 >> 8 & 1;
            }
            if (v_1097.flags & 512 && v_1097.wrap & 4) {
              v_1120[0] = v_1104 & 255;
              v_1120[1] = v_1104 >>> 8 & 255;
              v_1097.check = v_611(v_1097.check, v_1120, 2, 0);
            }
            v_1104 = 0;
            v_1105 = 0;
            v_1097.mode = v_1023;
          case v_1023:
            while (v_1105 < 32) {
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1102--;
              v_1104 += v_1098[v_1100++] << v_1105;
              v_1105 += 8;
            }
            if (v_1097.head) {
              v_1097.head.time = v_1104;
            }
            if (v_1097.flags & 512 && v_1097.wrap & 4) {
              v_1120[0] = v_1104 & 255;
              v_1120[1] = v_1104 >>> 8 & 255;
              v_1120[2] = v_1104 >>> 16 & 255;
              v_1120[3] = v_1104 >>> 24 & 255;
              v_1097.check = v_611(v_1097.check, v_1120, 4, 0);
            }
            v_1104 = 0;
            v_1105 = 0;
            v_1097.mode = v_1024;
          case v_1024:
            while (v_1105 < 16) {
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1102--;
              v_1104 += v_1098[v_1100++] << v_1105;
              v_1105 += 8;
            }
            if (v_1097.head) {
              v_1097.head.xflags = v_1104 & 255;
              v_1097.head.os = v_1104 >> 8;
            }
            if (v_1097.flags & 512 && v_1097.wrap & 4) {
              v_1120[0] = v_1104 & 255;
              v_1120[1] = v_1104 >>> 8 & 255;
              v_1097.check = v_611(v_1097.check, v_1120, 2, 0);
            }
            v_1104 = 0;
            v_1105 = 0;
            v_1097.mode = v_1025;
          case v_1025:
            if (v_1097.flags & 1024) {
              while (v_1105 < 16) {
                if (v_1102 === 0) {
                  break v_1124;
                }
                v_1102--;
                v_1104 += v_1098[v_1100++] << v_1105;
                v_1105 += 8;
              }
              v_1097.length = v_1104;
              if (v_1097.head) {
                v_1097.head.extra_len = v_1104;
              }
              if (v_1097.flags & 512 && v_1097.wrap & 4) {
                v_1120[0] = v_1104 & 255;
                v_1120[1] = v_1104 >>> 8 & 255;
                v_1097.check = v_611(v_1097.check, v_1120, 2, 0);
              }
              v_1104 = 0;
              v_1105 = 0;
            } else if (v_1097.head) {
              v_1097.head.extra = null;
            }
            v_1097.mode = v_1026;
          case v_1026:
            if (v_1097.flags & 1024) {
              v_1108 = v_1097.length;
              if (v_1108 > v_1102) {
                v_1108 = v_1102;
              }
              if (v_1108) {
                if (v_1097.head) {
                  v_1118 = v_1097.head.extra_len - v_1097.length;
                  if (!v_1097.head.extra) {
                    v_1097.head.extra = new Uint8Array(v_1097.head.extra_len);
                  }
                  v_1097.head.extra.set(v_1098.subarray(v_1100, v_1100 + v_1108), v_1118);
                }
                if (v_1097.flags & 512 && v_1097.wrap & 4) {
                  v_1097.check = v_611(v_1097.check, v_1098, v_1108, v_1100);
                }
                v_1102 -= v_1108;
                v_1100 += v_1108;
                v_1097.length -= v_1108;
              }
              if (v_1097.length) {
                break v_1124;
              }
            }
            v_1097.length = 0;
            v_1097.mode = v_1027;
          case v_1027:
            if (v_1097.flags & 2048) {
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1108 = 0;
              do {
                v_1118 = v_1098[v_1100 + v_1108++];
                if (v_1097.head && v_1118 && v_1097.length < 65536) {
                  v_1097.head.name += String.fromCharCode(v_1118);
                }
              } while (v_1118 && v_1108 < v_1102);
              if (v_1097.flags & 512 && v_1097.wrap & 4) {
                v_1097.check = v_611(v_1097.check, v_1098, v_1108, v_1100);
              }
              v_1102 -= v_1108;
              v_1100 += v_1108;
              if (v_1118) {
                break v_1124;
              }
            } else if (v_1097.head) {
              v_1097.head.name = null;
            }
            v_1097.length = 0;
            v_1097.mode = v_1028;
          case v_1028:
            if (v_1097.flags & 4096) {
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1108 = 0;
              do {
                v_1118 = v_1098[v_1100 + v_1108++];
                if (v_1097.head && v_1118 && v_1097.length < 65536) {
                  v_1097.head.comment += String.fromCharCode(v_1118);
                }
              } while (v_1118 && v_1108 < v_1102);
              if (v_1097.flags & 512 && v_1097.wrap & 4) {
                v_1097.check = v_611(v_1097.check, v_1098, v_1108, v_1100);
              }
              v_1102 -= v_1108;
              v_1100 += v_1108;
              if (v_1118) {
                break v_1124;
              }
            } else if (v_1097.head) {
              v_1097.head.comment = null;
            }
            v_1097.mode = v_1029;
          case v_1029:
            if (v_1097.flags & 512) {
              while (v_1105 < 16) {
                if (v_1102 === 0) {
                  break v_1124;
                }
                v_1102--;
                v_1104 += v_1098[v_1100++] << v_1105;
                v_1105 += 8;
              }
              if (v_1097.wrap & 4 && v_1104 !== (v_1097.check & 65535)) {
                v_1095.msg = "header crc mismatch";
                v_1097.mode = v_1050;
                break;
              }
              v_1104 = 0;
              v_1105 = 0;
            }
            if (v_1097.head) {
              v_1097.head.hcrc = v_1097.flags >> 9 & 1;
              v_1097.head.done = true;
            }
            v_1095.adler = v_1097.check = 0;
            v_1097.mode = v_1032;
            break;
          case v_1030:
            while (v_1105 < 32) {
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1102--;
              v_1104 += v_1098[v_1100++] << v_1105;
              v_1105 += 8;
            }
            v_1095.adler = v_1097.check = v_1057(v_1104);
            v_1104 = 0;
            v_1105 = 0;
            v_1097.mode = v_1031;
          case v_1031:
            if (v_1097.havedict === 0) {
              v_1095.next_out = v_1101;
              v_1095.avail_out = v_1103;
              v_1095.next_in = v_1100;
              v_1095.avail_in = v_1102;
              v_1097.hold = v_1104;
              v_1097.bits = v_1105;
              return v_1015;
            }
            v_1095.adler = v_1097.check = 1;
            v_1097.mode = v_1032;
          case v_1032:
            if (v_1096 === v_1011 || v_1096 === v_1012) {
              break v_1124;
            }
          case v_1033:
            if (v_1097.last) {
              v_1104 >>>= v_1105 & 7;
              v_1105 -= v_1105 & 7;
              v_1097.mode = v_1047;
              break;
            }
            while (v_1105 < 3) {
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1102--;
              v_1104 += v_1098[v_1100++] << v_1105;
              v_1105 += 8;
            }
            v_1097.last = v_1104 & 1;
            v_1104 >>>= 1;
            v_1105 -= 1;
            switch (v_1104 & 3) {
              case 0:
                v_1097.mode = v_1034;
                break;
              case 1:
                v_1084(v_1097);
                v_1097.mode = v_1040;
                if (v_1096 === v_1012) {
                  v_1104 >>>= 2;
                  v_1105 -= 2;
                  break v_1124;
                }
                break;
              case 2:
                v_1097.mode = v_1037;
                break;
              case 3:
                v_1095.msg = "invalid block type";
                v_1097.mode = v_1050;
            }
            v_1104 >>>= 2;
            v_1105 -= 2;
            break;
          case v_1034:
            v_1104 >>>= v_1105 & 7;
            v_1105 -= v_1105 & 7;
            while (v_1105 < 32) {
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1102--;
              v_1104 += v_1098[v_1100++] << v_1105;
              v_1105 += 8;
            }
            if ((v_1104 & 65535) !== (v_1104 >>> 16 ^ 65535)) {
              v_1095.msg = "invalid stored block lengths";
              v_1097.mode = v_1050;
              break;
            }
            v_1097.length = v_1104 & 65535;
            v_1104 = 0;
            v_1105 = 0;
            v_1097.mode = v_1035;
            if (v_1096 === v_1012) {
              break v_1124;
            }
          case v_1035:
            v_1097.mode = v_1036;
          case v_1036:
            v_1108 = v_1097.length;
            if (v_1108) {
              if (v_1108 > v_1102) {
                v_1108 = v_1102;
              }
              if (v_1108 > v_1103) {
                v_1108 = v_1103;
              }
              if (v_1108 === 0) {
                break v_1124;
              }
              v_1099.set(v_1098.subarray(v_1100, v_1100 + v_1108), v_1101);
              v_1102 -= v_1108;
              v_1100 += v_1108;
              v_1103 -= v_1108;
              v_1101 += v_1108;
              v_1097.length -= v_1108;
              break;
            }
            v_1097.mode = v_1032;
            break;
          case v_1037:
            while (v_1105 < 14) {
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1102--;
              v_1104 += v_1098[v_1100++] << v_1105;
              v_1105 += 8;
            }
            v_1097.nlen = (v_1104 & 31) + 257;
            v_1104 >>>= 5;
            v_1105 -= 5;
            v_1097.ndist = (v_1104 & 31) + 1;
            v_1104 >>>= 5;
            v_1105 -= 5;
            v_1097.ncode = (v_1104 & 15) + 4;
            v_1104 >>>= 4;
            v_1105 -= 4;
            if (v_1097.nlen > 286 || v_1097.ndist > 30) {
              v_1095.msg = "too many length or distance symbols";
              v_1097.mode = v_1050;
              break;
            }
            v_1097.have = 0;
            v_1097.mode = v_1038;
          case v_1038:
            while (v_1097.have < v_1097.ncode) {
              while (v_1105 < 3) {
                if (v_1102 === 0) {
                  break v_1124;
                }
                v_1102--;
                v_1104 += v_1098[v_1100++] << v_1105;
                v_1105 += 8;
              }
              v_1097.lens[v_1123[v_1097.have++]] = v_1104 & 7;
              v_1104 >>>= 3;
              v_1105 -= 3;
            }
            while (v_1097.have < 19) {
              v_1097.lens[v_1123[v_1097.have++]] = 0;
            }
            v_1097.lencode = v_1097.lendyn;
            v_1097.lenbits = 7;
            var v_1125 = {
              bits: v_1097.lenbits
            };
            v_1121 = v_1125;
            v_1119 = v_1006(v_1007, v_1097.lens, 0, 19, v_1097.lencode, 0, v_1097.work, v_1121);
            v_1097.lenbits = v_1121.bits;
            if (v_1119) {
              v_1095.msg = "invalid code lengths set";
              v_1097.mode = v_1050;
              break;
            }
            v_1097.have = 0;
            v_1097.mode = v_1039;
          case v_1039:
            while (v_1097.have < v_1097.nlen + v_1097.ndist) {
              while (true) {
                v_1111 = v_1097.lencode[v_1104 & (1 << v_1097.lenbits) - 1];
                v_1112 = v_1111 >>> 24;
                v_1113 = v_1111 >>> 16 & 255;
                v_1114 = v_1111 & 65535;
                if (v_1112 <= v_1105) {
                  break;
                }
                if (v_1102 === 0) {
                  break v_1124;
                }
                v_1102--;
                v_1104 += v_1098[v_1100++] << v_1105;
                v_1105 += 8;
              }
              if (v_1114 < 16) {
                v_1104 >>>= v_1112;
                v_1105 -= v_1112;
                v_1097.lens[v_1097.have++] = v_1114;
              } else {
                if (v_1114 === 16) {
                  v_1122 = v_1112 + 2;
                  while (v_1105 < v_1122) {
                    if (v_1102 === 0) {
                      break v_1124;
                    }
                    v_1102--;
                    v_1104 += v_1098[v_1100++] << v_1105;
                    v_1105 += 8;
                  }
                  v_1104 >>>= v_1112;
                  v_1105 -= v_1112;
                  if (v_1097.have === 0) {
                    v_1095.msg = "invalid bit length repeat";
                    v_1097.mode = v_1050;
                    break;
                  }
                  v_1118 = v_1097.lens[v_1097.have - 1];
                  v_1108 = 3 + (v_1104 & 3);
                  v_1104 >>>= 2;
                  v_1105 -= 2;
                } else if (v_1114 === 17) {
                  v_1122 = v_1112 + 3;
                  while (v_1105 < v_1122) {
                    if (v_1102 === 0) {
                      break v_1124;
                    }
                    v_1102--;
                    v_1104 += v_1098[v_1100++] << v_1105;
                    v_1105 += 8;
                  }
                  v_1104 >>>= v_1112;
                  v_1105 -= v_1112;
                  v_1118 = 0;
                  v_1108 = 3 + (v_1104 & 7);
                  v_1104 >>>= 3;
                  v_1105 -= 3;
                } else {
                  v_1122 = v_1112 + 7;
                  while (v_1105 < v_1122) {
                    if (v_1102 === 0) {
                      break v_1124;
                    }
                    v_1102--;
                    v_1104 += v_1098[v_1100++] << v_1105;
                    v_1105 += 8;
                  }
                  v_1104 >>>= v_1112;
                  v_1105 -= v_1112;
                  v_1118 = 0;
                  v_1108 = 11 + (v_1104 & 127);
                  v_1104 >>>= 7;
                  v_1105 -= 7;
                }
                if (v_1097.have + v_1108 > v_1097.nlen + v_1097.ndist) {
                  v_1095.msg = "invalid bit length repeat";
                  v_1097.mode = v_1050;
                  break;
                }
                while (v_1108--) {
                  v_1097.lens[v_1097.have++] = v_1118;
                }
              }
            }
            if (v_1097.mode === v_1050) {
              break;
            }
            if (v_1097.lens[256] === 0) {
              v_1095.msg = "invalid code -- missing end-of-block";
              v_1097.mode = v_1050;
              break;
            }
            v_1097.lenbits = 9;
            var v_1126 = {
              bits: v_1097.lenbits
            };
            v_1121 = v_1126;
            v_1119 = v_1006(v_1008, v_1097.lens, 0, v_1097.nlen, v_1097.lencode, 0, v_1097.work, v_1121);
            v_1097.lenbits = v_1121.bits;
            if (v_1119) {
              v_1095.msg = "invalid literal/lengths set";
              v_1097.mode = v_1050;
              break;
            }
            v_1097.distbits = 6;
            v_1097.distcode = v_1097.distdyn;
            var v_1127 = {
              bits: v_1097.distbits
            };
            v_1121 = v_1127;
            v_1119 = v_1006(v_1009, v_1097.lens, v_1097.nlen, v_1097.ndist, v_1097.distcode, 0, v_1097.work, v_1121);
            v_1097.distbits = v_1121.bits;
            if (v_1119) {
              v_1095.msg = "invalid distances set";
              v_1097.mode = v_1050;
              break;
            }
            v_1097.mode = v_1040;
            if (v_1096 === v_1012) {
              break v_1124;
            }
          case v_1040:
            v_1097.mode = v_1041;
          case v_1041:
            if (v_1102 >= 6 && v_1103 >= 258) {
              v_1095.next_out = v_1101;
              v_1095.avail_out = v_1103;
              v_1095.next_in = v_1100;
              v_1095.avail_in = v_1102;
              v_1097.hold = v_1104;
              v_1097.bits = v_1105;
              v_931(v_1095, v_1107);
              v_1101 = v_1095.next_out;
              v_1099 = v_1095.output;
              v_1103 = v_1095.avail_out;
              v_1100 = v_1095.next_in;
              v_1098 = v_1095.input;
              v_1102 = v_1095.avail_in;
              v_1104 = v_1097.hold;
              v_1105 = v_1097.bits;
              if (v_1097.mode === v_1032) {
                v_1097.back = -1;
              }
              break;
            }
            v_1097.back = 0;
            while (true) {
              v_1111 = v_1097.lencode[v_1104 & (1 << v_1097.lenbits) - 1];
              v_1112 = v_1111 >>> 24;
              v_1113 = v_1111 >>> 16 & 255;
              v_1114 = v_1111 & 65535;
              if (v_1112 <= v_1105) {
                break;
              }
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1102--;
              v_1104 += v_1098[v_1100++] << v_1105;
              v_1105 += 8;
            }
            if (v_1113 && (v_1113 & 240) === 0) {
              v_1115 = v_1112;
              v_1116 = v_1113;
              v_1117 = v_1114;
              while (true) {
                v_1111 = v_1097.lencode[v_1117 + ((v_1104 & (1 << v_1115 + v_1116) - 1) >> v_1115)];
                v_1112 = v_1111 >>> 24;
                v_1113 = v_1111 >>> 16 & 255;
                v_1114 = v_1111 & 65535;
                if (v_1115 + v_1112 <= v_1105) {
                  break;
                }
                if (v_1102 === 0) {
                  break v_1124;
                }
                v_1102--;
                v_1104 += v_1098[v_1100++] << v_1105;
                v_1105 += 8;
              }
              v_1104 >>>= v_1115;
              v_1105 -= v_1115;
              v_1097.back += v_1115;
            }
            v_1104 >>>= v_1112;
            v_1105 -= v_1112;
            v_1097.back += v_1112;
            v_1097.length = v_1114;
            if (v_1113 === 0) {
              v_1097.mode = v_1046;
              break;
            }
            if (v_1113 & 32) {
              v_1097.back = -1;
              v_1097.mode = v_1032;
              break;
            }
            if (v_1113 & 64) {
              v_1095.msg = "invalid literal/length code";
              v_1097.mode = v_1050;
              break;
            }
            v_1097.extra = v_1113 & 15;
            v_1097.mode = v_1042;
          case v_1042:
            if (v_1097.extra) {
              v_1122 = v_1097.extra;
              while (v_1105 < v_1122) {
                if (v_1102 === 0) {
                  break v_1124;
                }
                v_1102--;
                v_1104 += v_1098[v_1100++] << v_1105;
                v_1105 += 8;
              }
              v_1097.length += v_1104 & (1 << v_1097.extra) - 1;
              v_1104 >>>= v_1097.extra;
              v_1105 -= v_1097.extra;
              v_1097.back += v_1097.extra;
            }
            v_1097.was = v_1097.length;
            v_1097.mode = v_1043;
          case v_1043:
            while (true) {
              v_1111 = v_1097.distcode[v_1104 & (1 << v_1097.distbits) - 1];
              v_1112 = v_1111 >>> 24;
              v_1113 = v_1111 >>> 16 & 255;
              v_1114 = v_1111 & 65535;
              if (v_1112 <= v_1105) {
                break;
              }
              if (v_1102 === 0) {
                break v_1124;
              }
              v_1102--;
              v_1104 += v_1098[v_1100++] << v_1105;
              v_1105 += 8;
            }
            if ((v_1113 & 240) === 0) {
              v_1115 = v_1112;
              v_1116 = v_1113;
              v_1117 = v_1114;
              while (true) {
                v_1111 = v_1097.distcode[v_1117 + ((v_1104 & (1 << v_1115 + v_1116) - 1) >> v_1115)];
                v_1112 = v_1111 >>> 24;
                v_1113 = v_1111 >>> 16 & 255;
                v_1114 = v_1111 & 65535;
                if (v_1115 + v_1112 <= v_1105) {
                  break;
                }
                if (v_1102 === 0) {
                  break v_1124;
                }
                v_1102--;
                v_1104 += v_1098[v_1100++] << v_1105;
                v_1105 += 8;
              }
              v_1104 >>>= v_1115;
              v_1105 -= v_1115;
              v_1097.back += v_1115;
            }
            v_1104 >>>= v_1112;
            v_1105 -= v_1112;
            v_1097.back += v_1112;
            if (v_1113 & 64) {
              v_1095.msg = "invalid distance code";
              v_1097.mode = v_1050;
              break;
            }
            v_1097.offset = v_1114;
            v_1097.extra = v_1113 & 15;
            v_1097.mode = v_1044;
          case v_1044:
            if (v_1097.extra) {
              v_1122 = v_1097.extra;
              while (v_1105 < v_1122) {
                if (v_1102 === 0) {
                  break v_1124;
                }
                v_1102--;
                v_1104 += v_1098[v_1100++] << v_1105;
                v_1105 += 8;
              }
              v_1097.offset += v_1104 & (1 << v_1097.extra) - 1;
              v_1104 >>>= v_1097.extra;
              v_1105 -= v_1097.extra;
              v_1097.back += v_1097.extra;
            }
            if (v_1097.offset > v_1097.dmax) {
              v_1095.msg = "invalid distance too far back";
              v_1097.mode = v_1050;
              break;
            }
            v_1097.mode = v_1045;
          case v_1045:
            if (v_1103 === 0) {
              break v_1124;
            }
            v_1108 = v_1107 - v_1103;
            if (v_1097.offset > v_1108) {
              v_1108 = v_1097.offset - v_1108;
              if (v_1108 > v_1097.whave) {
                if (v_1097.sane) {
                  v_1095.msg = "invalid distance too far back";
                  v_1097.mode = v_1050;
                  break;
                }
              }
              if (v_1108 > v_1097.wnext) {
                v_1108 -= v_1097.wnext;
                v_1109 = v_1097.wsize - v_1108;
              } else {
                v_1109 = v_1097.wnext - v_1108;
              }
              if (v_1108 > v_1097.length) {
                v_1108 = v_1097.length;
              }
              v_1110 = v_1097.window;
            } else {
              v_1110 = v_1099;
              v_1109 = v_1101 - v_1097.offset;
              v_1108 = v_1097.length;
            }
            if (v_1108 > v_1103) {
              v_1108 = v_1103;
            }
            v_1103 -= v_1108;
            v_1097.length -= v_1108;
            do {
              v_1099[v_1101++] = v_1110[v_1109++];
            } while (--v_1108);
            if (v_1097.length === 0) {
              v_1097.mode = v_1041;
            }
            break;
          case v_1046:
            if (v_1103 === 0) {
              break v_1124;
            }
            v_1099[v_1101++] = v_1097.length;
            v_1103--;
            v_1097.mode = v_1041;
            break;
          case v_1047:
            if (v_1097.wrap) {
              while (v_1105 < 32) {
                if (v_1102 === 0) {
                  break v_1124;
                }
                v_1102--;
                v_1104 |= v_1098[v_1100++] << v_1105;
                v_1105 += 8;
              }
              v_1107 -= v_1103;
              v_1095.total_out += v_1107;
              v_1097.total += v_1107;
              if (v_1097.wrap & 4 && v_1107) {
                v_1095.adler = v_1097.check = v_1097.flags ? v_611(v_1097.check, v_1099, v_1107, v_1101 - v_1107) : v_596(v_1097.check, v_1099, v_1107, v_1101 - v_1107);
              }
              v_1107 = v_1103;
              if (v_1097.wrap & 4 && (v_1097.flags ? v_1104 : v_1057(v_1104)) !== v_1097.check) {
                v_1095.msg = "incorrect data check";
                v_1097.mode = v_1050;
                break;
              }
              v_1104 = 0;
              v_1105 = 0;
            }
            v_1097.mode = v_1048;
          case v_1048:
            if (v_1097.wrap && v_1097.flags) {
              while (v_1105 < 32) {
                if (v_1102 === 0) {
                  break v_1124;
                }
                v_1102--;
                v_1104 += v_1098[v_1100++] << v_1105;
                v_1105 += 8;
              }
              if (v_1097.wrap & 4 && v_1104 !== (v_1097.total & -1)) {
                v_1095.msg = "incorrect length check";
                v_1097.mode = v_1050;
                break;
              }
              v_1104 = 0;
              v_1105 = 0;
            }
            v_1097.mode = v_1049;
          case v_1049:
            v_1119 = v_1014;
            break v_1124;
          case v_1050:
            v_1119 = v_1017;
            break v_1124;
          case v_1051:
            return v_1018;
          case v_1052:
          default:
            return v_1016;
        }
      }
      v_1095.next_out = v_1101;
      v_1095.avail_out = v_1103;
      v_1095.next_in = v_1100;
      v_1095.avail_in = v_1102;
      v_1097.hold = v_1104;
      v_1097.bits = v_1105;
      if (v_1097.wsize || v_1107 !== v_1095.avail_out && v_1097.mode < v_1050 && (v_1097.mode < v_1047 || v_1096 !== v_1010)) {
        if (v_1087(v_1095, v_1095.output, v_1095.next_out, v_1107 - v_1095.avail_out)) ;
      }
      v_1106 -= v_1095.avail_in;
      v_1107 -= v_1095.avail_out;
      v_1095.total_in += v_1106;
      v_1095.total_out += v_1107;
      v_1097.total += v_1107;
      if (v_1097.wrap & 4 && v_1107) {
        v_1095.adler = v_1097.check = v_1097.flags ? v_611(v_1097.check, v_1099, v_1107, v_1095.next_out - v_1107) : v_596(v_1097.check, v_1099, v_1107, v_1095.next_out - v_1107);
      }
      v_1095.data_type = v_1097.bits + (v_1097.last ? 64 : 0) + (v_1097.mode === v_1032 ? 128 : 0) + (v_1097.mode === v_1040 || v_1097.mode === v_1035 ? 256 : 0);
      if ((v_1106 === 0 && v_1107 === 0 || v_1096 === v_1010) && v_1119 === v_1013) {
        v_1119 = v_1019;
      }
      return v_1119;
    };
    const v_1128 = v_1129 => {
      if (v_1060(v_1129)) {
        return v_1016;
      }
      let v_1130 = v_1129.state;
      v_1130.window &&= null;
      v_1129.state = null;
      return v_1013;
    };
    const v_1131 = (v_1132, v_1133) => {
      if (v_1060(v_1132)) {
        return v_1016;
      }
      const v_1134 = v_1132.state;
      if ((v_1134.wrap & 2) === 0) {
        return v_1016;
      }
      v_1134.head = v_1133;
      v_1133.done = false;
      return v_1013;
    };
    const v_1135 = (v_1136, v_1137) => {
      const v_1138 = v_1137.length;
      let v_1139;
      let v_1140;
      let v_1141;
      if (v_1060(v_1136)) {
        return v_1016;
      }
      v_1139 = v_1136.state;
      if (v_1139.wrap !== 0 && v_1139.mode !== v_1031) {
        return v_1016;
      }
      if (v_1139.mode === v_1031) {
        v_1140 = 1;
        v_1140 = v_596(v_1140, v_1137, v_1138, 0);
        if (v_1140 !== v_1139.check) {
          return v_1017;
        }
      }
      v_1141 = v_1087(v_1136, v_1137, v_1138, v_1138);
      if (v_1141) {
        v_1139.mode = v_1051;
        return v_1018;
      }
      v_1139.havedict = 1;
      return v_1013;
    };
    var v_1142 = v_1066;
    var v_1143 = v_1069;
    var v_1144 = v_1063;
    var v_1145 = v_1079;
    var v_1146 = v_1074;
    var v_1147 = v_1094;
    var v_1148 = v_1128;
    var v_1149 = v_1131;
    var v_1150 = v_1135;
    var v_1151 = "pako inflate (from Nodeca project)";
    var v_1152 = {
      inflateReset: v_1142,
      inflateReset2: v_1143,
      inflateResetKeep: v_1144,
      inflateInit: v_1145,
      inflateInit2: v_1146,
      inflate: v_1147,
      inflateEnd: v_1148,
      inflateGetHeader: v_1149,
      inflateSetDictionary: v_1150,
      inflateInfo: v_1151
    };
    var v_1153 = v_1152;
    function v_1154() {
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
    var v_1155 = v_1154;
    const v_1156 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: v_1157,
      Z_FINISH: v_1158,
      Z_OK: v_1159,
      Z_STREAM_END: v_1160,
      Z_NEED_DICT: v_1161,
      Z_STREAM_ERROR: v_1162,
      Z_DATA_ERROR: v_1163,
      Z_MEM_ERROR: v_1164
    } = v_614;
    function v_1165(v_1166) {
      this.options = v_852.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, v_1166 || {});
      const v_1167 = this.options;
      if (v_1167.raw && v_1167.windowBits >= 0 && v_1167.windowBits < 16) {
        v_1167.windowBits = -v_1167.windowBits;
        if (v_1167.windowBits === 0) {
          v_1167.windowBits = -15;
        }
      }
      if (v_1167.windowBits >= 0 && v_1167.windowBits < 16 && (!v_1166 || !v_1166.windowBits)) {
        v_1167.windowBits += 32;
      }
      if (v_1167.windowBits > 15 && v_1167.windowBits < 48) {
        if ((v_1167.windowBits & 15) === 0) {
          v_1167.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new v_887();
      this.strm.avail_out = 0;
      let v_1168 = v_1153.inflateInit2(this.strm, v_1167.windowBits);
      if (v_1168 !== v_1159) {
        throw new Error(v_612[v_1168]);
      }
      this.header = new v_1155();
      v_1153.inflateGetHeader(this.strm, this.header);
      if (v_1167.dictionary) {
        if (typeof v_1167.dictionary === "string") {
          v_1167.dictionary = v_885.string2buf(v_1167.dictionary);
        } else if (v_1156.call(v_1167.dictionary) === "[object ArrayBuffer]") {
          v_1167.dictionary = new Uint8Array(v_1167.dictionary);
        }
        if (v_1167.raw) {
          v_1168 = v_1153.inflateSetDictionary(this.strm, v_1167.dictionary);
          if (v_1168 !== v_1159) {
            throw new Error(v_612[v_1168]);
          }
        }
      }
    }
    v_1165.prototype.push = function (v_1169, v_1170) {
      const v_1171 = this.strm;
      const v_1172 = this.options.chunkSize;
      const v_1173 = this.options.dictionary;
      let v_1174;
      let v_1175;
      let v_1176;
      if (this.ended) {
        return false;
      }
      if (v_1170 === ~~v_1170) {
        v_1175 = v_1170;
      } else {
        v_1175 = v_1170 === true ? v_1158 : v_1157;
      }
      if (v_1156.call(v_1169) === "[object ArrayBuffer]") {
        v_1171.input = new Uint8Array(v_1169);
      } else {
        v_1171.input = v_1169;
      }
      v_1171.next_in = 0;
      v_1171.avail_in = v_1171.input.length;
      while (true) {
        if (v_1171.avail_out === 0) {
          v_1171.output = new Uint8Array(v_1172);
          v_1171.next_out = 0;
          v_1171.avail_out = v_1172;
        }
        v_1174 = v_1153.inflate(v_1171, v_1175);
        if (v_1174 === v_1161 && v_1173) {
          v_1174 = v_1153.inflateSetDictionary(v_1171, v_1173);
          if (v_1174 === v_1159) {
            v_1174 = v_1153.inflate(v_1171, v_1175);
          } else if (v_1174 === v_1163) {
            v_1174 = v_1161;
          }
        }
        while (v_1171.avail_in > 0 && v_1174 === v_1160 && v_1171.state.wrap > 0 && v_1169[v_1171.next_in] !== 0) {
          v_1153.inflateReset(v_1171);
          v_1174 = v_1153.inflate(v_1171, v_1175);
        }
        switch (v_1174) {
          case v_1162:
          case v_1163:
          case v_1161:
          case v_1164:
            this.onEnd(v_1174);
            this.ended = true;
            return false;
        }
        v_1176 = v_1171.avail_out;
        if (v_1171.next_out) {
          if (v_1171.avail_out === 0 || v_1174 === v_1160) {
            if (this.options.to === "string") {
              let v_1177 = v_885.utf8border(v_1171.output, v_1171.next_out);
              let v_1178 = v_1171.next_out - v_1177;
              let v_1179 = v_885.buf2string(v_1171.output, v_1177);
              v_1171.next_out = v_1178;
              v_1171.avail_out = v_1172 - v_1178;
              if (v_1178) {
                v_1171.output.set(v_1171.output.subarray(v_1177, v_1177 + v_1178), 0);
              }
              this.onData(v_1179);
            } else {
              this.onData(v_1171.output.length === v_1171.next_out ? v_1171.output : v_1171.output.subarray(0, v_1171.next_out));
            }
          }
        }
        if (v_1174 === v_1159 && v_1176 === 0) {
          continue;
        }
        if (v_1174 === v_1160) {
          v_1174 = v_1153.inflateEnd(this.strm);
          this.onEnd(v_1174);
          this.ended = true;
          return true;
        }
        if (v_1171.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    v_1165.prototype.onData = function (v_1180) {
      this.chunks.push(v_1180);
    };
    v_1165.prototype.onEnd = function (v_1181) {
      if (v_1181 === v_1159) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = v_852.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = v_1181;
      this.msg = this.strm.msg;
    };
    function v_1182(v_1183, v_1184) {
      const v_1185 = new v_1165(v_1184);
      v_1185.push(v_1183);
      if (v_1185.err) {
        throw v_1185.msg || v_612[v_1185.err];
      }
      return v_1185.result;
    }
    function v_1186(v_1187, v_1188) {
      v_1188 = v_1188 || {};
      v_1188.raw = true;
      return v_1182(v_1187, v_1188);
    }
    var v_1189 = v_1165;
    var v_1190 = v_1182;
    var v_1191 = v_1186;
    var v_1192 = v_1182;
    var v_1193 = v_614;
    var v_1194 = {
      Inflate: v_1189,
      inflate: v_1190,
      inflateRaw: v_1191,
      ungzip: v_1192,
      constants: v_1193
    };
    var v_1195 = v_1194;
    const {
      Deflate: v_1196,
      deflate: v_1197,
      deflateRaw: v_1198,
      gzip: v_1199
    } = v_928;
    const {
      Inflate: v_1200,
      inflate: v_1201,
      inflateRaw: v_1202,
      ungzip: v_1203
    } = v_1195;
    var v_1204 = v_1196;
    var v_1205 = v_1197;
    var v_1206 = v_1198;
    var v_1207 = v_1199;
    var v_1208 = v_1200;
    var v_1209 = v_1201;
    var v_1210 = v_1202;
    var v_1211 = v_1203;
    var v_1212 = v_614;
    var v_1213 = {
      Deflate: v_1204,
      deflate: v_1205,
      deflateRaw: v_1206,
      gzip: v_1207,
      Inflate: v_1208,
      inflate: v_1209,
      inflateRaw: v_1210,
      ungzip: v_1211,
      constants: v_1212
    };
    var v_1214 = v_1213;
    var v_1215 = v_287(739);
    ;
    var v_1216 = Object.create;
    var v_1217 = Object.defineProperty;
    var v_1218 = Object.getOwnPropertyDescriptor;
    var v_1219 = Object.getOwnPropertyNames;
    var v_1220 = Object.getPrototypeOf;
    var v_1221 = Object.prototype.hasOwnProperty;
    var v_1222 = (v_1223, v_1224) => function v_1225() {
      if (!v_1224) {
        (0, v_1223[v_1219(v_1223)[0]])((v_1224 = {
          exports: {}
        }).exports, v_1224);
      }
      return v_1224.exports;
    };
    var v_1226 = (v_1227, v_1228) => {
      for (var v_1229 in v_1228) {
        v_1217(v_1227, v_1229, {
          get: v_1228[v_1229],
          enumerable: true
        });
      }
    };
    var v_1230 = (v_1231, v_1232, v_1233, v_1234) => {
      if (v_1232 && typeof v_1232 === "object" || typeof v_1232 === "function") {
        for (let v_1235 of v_1219(v_1232)) {
          if (!v_1221.call(v_1231, v_1235) && v_1235 !== v_1233) {
            v_1217(v_1231, v_1235, {
              get: () => v_1232[v_1235],
              enumerable: !(v_1234 = v_1218(v_1232, v_1235)) || v_1234.enumerable
            });
          }
        }
      }
      return v_1231;
    };
    var v_1236 = (v_1237, v_1238, v_1239) => {
      v_1239 = v_1237 != null ? v_1216(v_1220(v_1237)) : {};
      return v_1230(v_1238 || !v_1237 || !v_1237.__esModule ? v_1217(v_1239, "default", {
        value: v_1237,
        enumerable: true
      }) : v_1239, v_1237);
    };
    var v_1240 = (v_1241, v_1242, v_1243) => {
      if (!v_1242.has(v_1241)) {
        throw TypeError("Cannot " + v_1243);
      }
    };
    var v_1244 = (v_1245, v_1246, v_1247) => {
      v_1240(v_1245, v_1246, "read from private field");
      if (v_1247) {
        return v_1247.call(v_1245);
      } else {
        return v_1246.get(v_1245);
      }
    };
    var v_1248 = (v_1249, v_1250, v_1251) => {
      if (v_1250.has(v_1249)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (v_1250 instanceof WeakSet) {
        v_1250.add(v_1249);
      } else {
        v_1250.set(v_1249, v_1251);
      }
    };
    var v_1252 = (v_1253, v_1254, v_1255, v_1256) => {
      v_1240(v_1253, v_1254, "write to private field");
      if (v_1256) {
        v_1256.call(v_1253, v_1255);
      } else {
        v_1254.set(v_1253, v_1255);
      }
      return v_1255;
    };
    var v_1257 = (v_1258, v_1259, v_1260, v_1261) => ({
      set _(v_1262) {
        v_1252(v_1258, v_1259, v_1262, v_1260);
      },
      get _() {
        return v_1244(v_1258, v_1259, v_1261);
      }
    });
    var v_1263 = (v_1264, v_1265, v_1266) => {
      v_1240(v_1264, v_1265, "access private method");
      return v_1266;
    };
    var v_1267 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/core.js"(v_1268, v_1269) {
        "use strict";

        (function (v_1270, v_1271) {
          if (typeof v_1268 === "object") {
            v_1269.exports = v_1268 = v_1271();
          } else if (typeof define === "function" && define.amd) {
            define([], v_1271);
          } else {
            v_1270.CryptoJS = v_1271();
          }
        })(v_1268, function () {
          var v_1272 = v_1272 || function (v_1273, v_1274) {
            var v_1275 = Object.create || /* @__PURE__ */function () {
              function v_1276() {}
              ;
              return function (v_1277) {
                var v_1278;
                v_1276.prototype = v_1277;
                v_1278 = new v_1276();
                v_1276.prototype = null;
                return v_1278;
              };
            }();
            var v_1279 = {};
            var v_1280 = v_1279.lib = {};
            var v_1281 = v_1280.Base = /* @__PURE__ */function () {
              return {
                extend: function (v_1282) {
                  var v_1283 = v_1275(this);
                  if (v_1282) {
                    v_1283.mixIn(v_1282);
                  }
                  if (!v_1283.hasOwnProperty("init") || this.init === v_1283.init) {
                    v_1283.init = function () {
                      v_1283.$super.init.apply(this, arguments);
                    };
                  }
                  v_1283.init.prototype = v_1283;
                  v_1283.$super = this;
                  return v_1283;
                },
                create: function () {
                  var v_1284 = this.extend();
                  v_1284.init.apply(v_1284, arguments);
                  return v_1284;
                },
                init: function () {},
                mixIn: function (v_1285) {
                  for (var v_1286 in v_1285) {
                    if (v_1285.hasOwnProperty(v_1286)) {
                      this[v_1286] = v_1285[v_1286];
                    }
                  }
                  if (v_1285.hasOwnProperty("toString")) {
                    this.toString = v_1285.toString;
                  }
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                }
              };
            }();
            var v_1287 = v_1280.WordArray = v_1281.extend({
              init: function (v_1288, v_1289) {
                v_1288 = this.words = v_1288 || [];
                if (v_1289 != v_1274) {
                  this.sigBytes = v_1289;
                } else {
                  this.sigBytes = v_1288.length * 4;
                }
              },
              toString: function (v_1290) {
                return (v_1290 || v_1291).stringify(this);
              },
              concat: function (v_1292) {
                var v_1293 = this.words;
                var v_1294 = v_1292.words;
                var v_1295 = this.sigBytes;
                var v_1296 = v_1292.sigBytes;
                this.clamp();
                if (v_1295 % 4) {
                  for (var v_1297 = 0; v_1297 < v_1296; v_1297++) {
                    var v_1298 = v_1294[v_1297 >>> 2] >>> 24 - v_1297 % 4 * 8 & 255;
                    v_1293[v_1295 + v_1297 >>> 2] |= v_1298 << 24 - (v_1295 + v_1297) % 4 * 8;
                  }
                } else {
                  for (var v_1297 = 0; v_1297 < v_1296; v_1297 += 4) {
                    v_1293[v_1295 + v_1297 >>> 2] = v_1294[v_1297 >>> 2];
                  }
                }
                this.sigBytes += v_1296;
                return this;
              },
              clamp: function () {
                var v_1299 = this.words;
                var v_1300 = this.sigBytes;
                v_1299[v_1300 >>> 2] &= -1 << 32 - v_1300 % 4 * 8;
                v_1299.length = v_1273.ceil(v_1300 / 4);
              },
              clone: function () {
                var v_1301 = v_1281.clone.call(this);
                v_1301.words = this.words.slice(0);
                return v_1301;
              },
              random: function (v_1302) {
                var v_1303 = [];
                function v_1304(v_1305) {
                  var v_1305 = v_1305;
                  var v_1306 = 987654321;
                  var v_1307 = 4294967295;
                  return function () {
                    v_1306 = (v_1306 & 65535) * 36969 + (v_1306 >> 16) & v_1307;
                    v_1305 = (v_1305 & 65535) * 18000 + (v_1305 >> 16) & v_1307;
                    var v_1308 = (v_1306 << 16) + v_1305 & v_1307;
                    v_1308 /= 4294967296;
                    v_1308 += 0.5;
                    return v_1308 * (v_1273.random() > 0.5 ? 1 : -1);
                  };
                }
                for (var v_1309 = 0, v_1310; v_1309 < v_1302; v_1309 += 4) {
                  var v_1311 = v_1304((v_1310 || v_1273.random()) * 4294967296);
                  v_1310 = v_1311() * 987654071;
                  v_1303.push(v_1311() * 4294967296 | 0);
                }
                return new v_1287.init(v_1303, v_1302);
              }
            });
            var v_1312 = v_1279.enc = {};
            var v_1291 = v_1312.Hex = {
              stringify: function (v_1313) {
                var v_1314 = v_1313.words;
                var v_1315 = v_1313.sigBytes;
                var v_1316 = [];
                for (var v_1317 = 0; v_1317 < v_1315; v_1317++) {
                  var v_1318 = v_1314[v_1317 >>> 2] >>> 24 - v_1317 % 4 * 8 & 255;
                  v_1316.push((v_1318 >>> 4).toString(16));
                  v_1316.push((v_1318 & 15).toString(16));
                }
                return v_1316.join("");
              },
              parse: function (v_1319) {
                var v_1320 = v_1319.length;
                var v_1321 = [];
                for (var v_1322 = 0; v_1322 < v_1320; v_1322 += 2) {
                  v_1321[v_1322 >>> 3] |= parseInt(v_1319.substr(v_1322, 2), 16) << 24 - v_1322 % 8 * 4;
                }
                return new v_1287.init(v_1321, v_1320 / 2);
              }
            };
            var v_1323 = v_1312.Latin1 = {
              stringify: function (v_1324) {
                var v_1325 = v_1324.words;
                var v_1326 = v_1324.sigBytes;
                var v_1327 = [];
                for (var v_1328 = 0; v_1328 < v_1326; v_1328++) {
                  var v_1329 = v_1325[v_1328 >>> 2] >>> 24 - v_1328 % 4 * 8 & 255;
                  v_1327.push(String.fromCharCode(v_1329));
                }
                return v_1327.join("");
              },
              parse: function (v_1330) {
                var v_1331 = v_1330.length;
                var v_1332 = [];
                for (var v_1333 = 0; v_1333 < v_1331; v_1333++) {
                  v_1332[v_1333 >>> 2] |= (v_1330.charCodeAt(v_1333) & 255) << 24 - v_1333 % 4 * 8;
                }
                return new v_1287.init(v_1332, v_1331);
              }
            };
            var v_1334 = v_1312.Utf8 = {
              stringify: function (v_1335) {
                try {
                  return decodeURIComponent(escape(v_1323.stringify(v_1335)));
                } catch (v_1336) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function (v_1337) {
                return v_1323.parse(unescape(encodeURIComponent(v_1337)));
              }
            };
            var v_1338 = v_1280.BufferedBlockAlgorithm = v_1281.extend({
              reset: function () {
                this._data = new v_1287.init();
                this._nDataBytes = 0;
              },
              _append: function (v_1339) {
                if (typeof v_1339 == "string") {
                  v_1339 = v_1334.parse(v_1339);
                }
                this._data.concat(v_1339);
                this._nDataBytes += v_1339.sigBytes;
              },
              _process: function (v_1340) {
                var v_1341 = this._data;
                var v_1342 = v_1341.words;
                var v_1343 = v_1341.sigBytes;
                var v_1344 = this.blockSize;
                var v_1345 = v_1344 * 4;
                var v_1346 = v_1343 / v_1345;
                if (v_1340) {
                  v_1346 = v_1273.ceil(v_1346);
                } else {
                  v_1346 = v_1273.max((v_1346 | 0) - this._minBufferSize, 0);
                }
                var v_1347 = v_1346 * v_1344;
                var v_1348 = v_1273.min(v_1347 * 4, v_1343);
                if (v_1347) {
                  for (var v_1349 = 0; v_1349 < v_1347; v_1349 += v_1344) {
                    this._doProcessBlock(v_1342, v_1349);
                  }
                  var v_1350 = v_1342.splice(0, v_1347);
                  v_1341.sigBytes -= v_1348;
                }
                return new v_1287.init(v_1350, v_1348);
              },
              clone: function () {
                var v_1351 = v_1281.clone.call(this);
                v_1351._data = this._data.clone();
                return v_1351;
              },
              _minBufferSize: 0
            });
            var v_1352 = v_1280.Hasher = v_1338.extend({
              cfg: v_1281.extend(),
              init: function (v_1353) {
                this.cfg = this.cfg.extend(v_1353);
                this.reset();
              },
              reset: function () {
                v_1338.reset.call(this);
                this._doReset();
              },
              update: function (v_1354) {
                this._append(v_1354);
                this._process();
                return this;
              },
              finalize: function (v_1355) {
                if (v_1355) {
                  this._append(v_1355);
                }
                var v_1356 = this._doFinalize();
                return v_1356;
              },
              blockSize: 16,
              _createHelper: function (v_1357) {
                return function (v_1358, v_1359) {
                  return new v_1357.init(v_1359).finalize(v_1358);
                };
              },
              _createHmacHelper: function (v_1360) {
                return function (v_1361, v_1362) {
                  return new v_1363.HMAC.init(v_1360, v_1362).finalize(v_1361);
                };
              }
            });
            var v_1363 = v_1279.algo = {};
            return v_1279;
          }(Math);
          return v_1272;
        });
      }
    });
    var v_1364 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(v_1365, v_1366) {
        "use strict";

        (function (v_1367, v_1368) {
          if (typeof v_1365 === "object") {
            v_1366.exports = v_1365 = v_1368(v_1267());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], v_1368);
          } else {
            v_1368(v_1367.CryptoJS);
          }
        })(v_1365, function (v_1369) {
          (function (v_1370) {
            var v_1371 = v_1369;
            var v_1372 = v_1371.lib;
            var v_1373 = v_1372.Base;
            var v_1374 = v_1372.WordArray;
            var v_1375 = v_1371.x64 = {};
            var v_1376 = {
              init: function (v_1377, v_1378) {
                this.high = v_1377;
                this.low = v_1378;
              }
            };
            var v_1379 = v_1375.Word = v_1373.extend(v_1376);
            var v_1380 = v_1375.WordArray = v_1373.extend({
              init: function (v_1381, v_1382) {
                v_1381 = this.words = v_1381 || [];
                if (v_1382 != v_1370) {
                  this.sigBytes = v_1382;
                } else {
                  this.sigBytes = v_1381.length * 8;
                }
              },
              toX32: function () {
                var v_1383 = this.words;
                var v_1384 = v_1383.length;
                var v_1385 = [];
                for (var v_1386 = 0; v_1386 < v_1384; v_1386++) {
                  var v_1387 = v_1383[v_1386];
                  v_1385.push(v_1387.high);
                  v_1385.push(v_1387.low);
                }
                return v_1374.create(v_1385, this.sigBytes);
              },
              clone: function () {
                var v_1388 = v_1373.clone.call(this);
                var v_1389 = v_1388.words = this.words.slice(0);
                var v_1390 = v_1389.length;
                for (var v_1391 = 0; v_1391 < v_1390; v_1391++) {
                  v_1389[v_1391] = v_1389[v_1391].clone();
                }
                return v_1388;
              }
            });
          })();
          return v_1369;
        });
      }
    });
    var v_1392 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(v_1393, v_1394) {
        "use strict";
        "use strict";

        (function (v_1395, v_1396) {
          if (typeof v_1393 === "object") {
            v_1394.exports = v_1393 = v_1396(v_1267());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], v_1396);
          } else {
            v_1396(v_1395.CryptoJS);
          }
        })(v_1393, function (v_1397) {
          (function () {
            if (typeof ArrayBuffer != "function") {
              return;
            }
            var v_1398 = v_1397;
            var v_1399 = v_1398.lib;
            var v_1400 = v_1399.WordArray;
            var v_1401 = v_1400.init;
            var v_1402 = v_1400.init = function (v_1403) {
              if (v_1403 instanceof ArrayBuffer) {
                v_1403 = new Uint8Array(v_1403);
              }
              if (v_1403 instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && v_1403 instanceof Uint8ClampedArray || v_1403 instanceof Int16Array || v_1403 instanceof Uint16Array || v_1403 instanceof Int32Array || v_1403 instanceof Uint32Array || v_1403 instanceof Float32Array || v_1403 instanceof Float64Array) {
                v_1403 = new Uint8Array(v_1403.buffer, v_1403.byteOffset, v_1403.byteLength);
              }
              if (v_1403 instanceof Uint8Array) {
                var v_1404 = v_1403.byteLength;
                var v_1405 = [];
                for (var v_1406 = 0; v_1406 < v_1404; v_1406++) {
                  v_1405[v_1406 >>> 2] |= v_1403[v_1406] << 24 - v_1406 % 4 * 8;
                }
                v_1401.call(this, v_1405, v_1404);
              } else {
                v_1401.apply(this, arguments);
              }
            };
            v_1402.prototype = v_1400;
          })();
          return v_1397.lib.WordArray;
        });
      }
    });
    var v_1407 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(v_1408, v_1409) {
        "use strict";

        (function (v_1410, v_1411) {
          if (typeof v_1408 === "object") {
            v_1409.exports = v_1408 = v_1411(v_1267());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], v_1411);
          } else {
            v_1411(v_1410.CryptoJS);
          }
        })(v_1408, function (v_1412) {
          (function () {
            var v_1413 = v_1412;
            var v_1414 = v_1413.lib;
            var v_1415 = v_1414.WordArray;
            var v_1416 = v_1413.enc;
            var v_1417 = v_1416.Utf16 = v_1416.Utf16BE = {
              stringify: function (v_1418) {
                var v_1419 = v_1418.words;
                var v_1420 = v_1418.sigBytes;
                var v_1421 = [];
                for (var v_1422 = 0; v_1422 < v_1420; v_1422 += 2) {
                  var v_1423 = v_1419[v_1422 >>> 2] >>> 16 - v_1422 % 4 * 8 & 65535;
                  v_1421.push(String.fromCharCode(v_1423));
                }
                return v_1421.join("");
              },
              parse: function (v_1424) {
                var v_1425 = v_1424.length;
                var v_1426 = [];
                for (var v_1427 = 0; v_1427 < v_1425; v_1427++) {
                  v_1426[v_1427 >>> 1] |= v_1424.charCodeAt(v_1427) << 16 - v_1427 % 2 * 16;
                }
                return v_1415.create(v_1426, v_1425 * 2);
              }
            };
            v_1416.Utf16LE = {
              stringify: function (v_1428) {
                var v_1429 = v_1428.words;
                var v_1430 = v_1428.sigBytes;
                var v_1431 = [];
                for (var v_1432 = 0; v_1432 < v_1430; v_1432 += 2) {
                  var v_1433 = v_1434(v_1429[v_1432 >>> 2] >>> 16 - v_1432 % 4 * 8 & 65535);
                  v_1431.push(String.fromCharCode(v_1433));
                }
                return v_1431.join("");
              },
              parse: function (v_1435) {
                var v_1436 = v_1435.length;
                var v_1437 = [];
                for (var v_1438 = 0; v_1438 < v_1436; v_1438++) {
                  v_1437[v_1438 >>> 1] |= v_1434(v_1435.charCodeAt(v_1438) << 16 - v_1438 % 2 * 16);
                }
                return v_1415.create(v_1437, v_1436 * 2);
              }
            };
            function v_1434(v_1439) {
              return v_1439 << 8 & -16711936 | v_1439 >>> 8 & 16711935;
            }
          })();
          return v_1412.enc.Utf16;
        });
      }
    });
    var v_1440 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(v_1441, v_1442) {
        "use strict";

        (function (v_1443, v_1444) {
          if (typeof v_1441 === "object") {
            v_1442.exports = v_1441 = v_1444(v_1267());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], v_1444);
          } else {
            v_1444(v_1443.CryptoJS);
          }
        })(v_1441, function (v_1445) {
          (function () {
            var v_1446 = v_1445;
            var v_1447 = v_1446.lib;
            var v_1448 = v_1447.WordArray;
            var v_1449 = v_1446.enc;
            var v_1450 = v_1449.Base64 = {
              stringify: function (v_1451) {
                var v_1452 = v_1451.words;
                var v_1453 = v_1451.sigBytes;
                var v_1454 = this._map;
                v_1451.clamp();
                var v_1455 = [];
                for (var v_1456 = 0; v_1456 < v_1453; v_1456 += 3) {
                  var v_1457 = v_1452[v_1456 >>> 2] >>> 24 - v_1456 % 4 * 8 & 255;
                  var v_1458 = v_1452[v_1456 + 1 >>> 2] >>> 24 - (v_1456 + 1) % 4 * 8 & 255;
                  var v_1459 = v_1452[v_1456 + 2 >>> 2] >>> 24 - (v_1456 + 2) % 4 * 8 & 255;
                  var v_1460 = v_1457 << 16 | v_1458 << 8 | v_1459;
                  for (var v_1461 = 0; v_1461 < 4 && v_1456 + v_1461 * 0.75 < v_1453; v_1461++) {
                    v_1455.push(v_1454.charAt(v_1460 >>> (3 - v_1461) * 6 & 63));
                  }
                }
                var v_1462 = v_1454.charAt(64);
                if (v_1462) {
                  while (v_1455.length % 4) {
                    v_1455.push(v_1462);
                  }
                }
                return v_1455.join("");
              },
              parse: function (v_1463) {
                var v_1464 = v_1463.length;
                var v_1465 = this._map;
                var v_1466 = this._reverseMap;
                if (!v_1466) {
                  v_1466 = this._reverseMap = [];
                  for (var v_1467 = 0; v_1467 < v_1465.length; v_1467++) {
                    v_1466[v_1465.charCodeAt(v_1467)] = v_1467;
                  }
                }
                var v_1468 = v_1465.charAt(64);
                if (v_1468) {
                  var v_1469 = v_1463.indexOf(v_1468);
                  if (v_1469 !== -1) {
                    v_1464 = v_1469;
                  }
                }
                return v_1470(v_1463, v_1464, v_1466);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function v_1470(v_1471, v_1472, v_1473) {
              var v_1474 = [];
              var v_1475 = 0;
              for (var v_1476 = 0; v_1476 < v_1472; v_1476++) {
                if (v_1476 % 4) {
                  var v_1477 = v_1473[v_1471.charCodeAt(v_1476 - 1)] << v_1476 % 4 * 2;
                  var v_1478 = v_1473[v_1471.charCodeAt(v_1476)] >>> 6 - v_1476 % 4 * 2;
                  v_1474[v_1475 >>> 2] |= (v_1477 | v_1478) << 24 - v_1475 % 4 * 8;
                  v_1475++;
                }
              }
              return v_1448.create(v_1474, v_1475);
            }
          })();
          return v_1445.enc.Base64;
        });
      }
    });
    var v_1479 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(v_1480, v_1481) {
        "use strict";

        (function (v_1482, v_1483) {
          if (typeof v_1480 === "object") {
            v_1481.exports = v_1480 = v_1483(v_1267());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], v_1483);
          } else {
            v_1483(v_1482.CryptoJS);
          }
        })(v_1480, function (v_1484) {
          (function (v_1485) {
            var v_1486 = v_1484;
            var v_1487 = v_1486.lib;
            var v_1488 = v_1487.WordArray;
            var v_1489 = v_1487.Hasher;
            var v_1490 = v_1486.algo;
            var v_1491 = [];
            (function () {
              for (var v_1492 = 0; v_1492 < 64; v_1492++) {
                v_1491[v_1492] = v_1485.abs(v_1485.sin(v_1492 + 1)) * 4294967296 | 0;
              }
            })();
            var v_1493 = v_1490.MD5 = v_1489.extend({
              _doReset: function () {
                this._hash = new v_1488.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function (v_1494, v_1495) {
                for (var v_1496 = 0; v_1496 < 16; v_1496++) {
                  var v_1497 = v_1495 + v_1496;
                  var v_1498 = v_1494[v_1497];
                  v_1494[v_1497] = (v_1498 << 8 | v_1498 >>> 24) & 16711935 | (v_1498 << 24 | v_1498 >>> 8) & -16711936;
                }
                var v_1499 = this._hash.words;
                var v_1500 = v_1494[v_1495 + 0];
                var v_1501 = v_1494[v_1495 + 1];
                var v_1502 = v_1494[v_1495 + 2];
                var v_1503 = v_1494[v_1495 + 3];
                var v_1504 = v_1494[v_1495 + 4];
                var v_1505 = v_1494[v_1495 + 5];
                var v_1506 = v_1494[v_1495 + 6];
                var v_1507 = v_1494[v_1495 + 7];
                var v_1508 = v_1494[v_1495 + 8];
                var v_1509 = v_1494[v_1495 + 9];
                var v_1510 = v_1494[v_1495 + 10];
                var v_1511 = v_1494[v_1495 + 11];
                var v_1512 = v_1494[v_1495 + 12];
                var v_1513 = v_1494[v_1495 + 13];
                var v_1514 = v_1494[v_1495 + 14];
                var v_1515 = v_1494[v_1495 + 15];
                var v_1516 = v_1499[0];
                var v_1517 = v_1499[1];
                var v_1518 = v_1499[2];
                var v_1519 = v_1499[3];
                v_1516 = v_1520(v_1516, v_1517, v_1518, v_1519, v_1500, 7, v_1491[0]);
                v_1519 = v_1520(v_1519, v_1516, v_1517, v_1518, v_1501, 12, v_1491[1]);
                v_1518 = v_1520(v_1518, v_1519, v_1516, v_1517, v_1502, 17, v_1491[2]);
                v_1517 = v_1520(v_1517, v_1518, v_1519, v_1516, v_1503, 22, v_1491[3]);
                v_1516 = v_1520(v_1516, v_1517, v_1518, v_1519, v_1504, 7, v_1491[4]);
                v_1519 = v_1520(v_1519, v_1516, v_1517, v_1518, v_1505, 12, v_1491[5]);
                v_1518 = v_1520(v_1518, v_1519, v_1516, v_1517, v_1506, 17, v_1491[6]);
                v_1517 = v_1520(v_1517, v_1518, v_1519, v_1516, v_1507, 22, v_1491[7]);
                v_1516 = v_1520(v_1516, v_1517, v_1518, v_1519, v_1508, 7, v_1491[8]);
                v_1519 = v_1520(v_1519, v_1516, v_1517, v_1518, v_1509, 12, v_1491[9]);
                v_1518 = v_1520(v_1518, v_1519, v_1516, v_1517, v_1510, 17, v_1491[10]);
                v_1517 = v_1520(v_1517, v_1518, v_1519, v_1516, v_1511, 22, v_1491[11]);
                v_1516 = v_1520(v_1516, v_1517, v_1518, v_1519, v_1512, 7, v_1491[12]);
                v_1519 = v_1520(v_1519, v_1516, v_1517, v_1518, v_1513, 12, v_1491[13]);
                v_1518 = v_1520(v_1518, v_1519, v_1516, v_1517, v_1514, 17, v_1491[14]);
                v_1517 = v_1520(v_1517, v_1518, v_1519, v_1516, v_1515, 22, v_1491[15]);
                v_1516 = v_1521(v_1516, v_1517, v_1518, v_1519, v_1501, 5, v_1491[16]);
                v_1519 = v_1521(v_1519, v_1516, v_1517, v_1518, v_1506, 9, v_1491[17]);
                v_1518 = v_1521(v_1518, v_1519, v_1516, v_1517, v_1511, 14, v_1491[18]);
                v_1517 = v_1521(v_1517, v_1518, v_1519, v_1516, v_1500, 20, v_1491[19]);
                v_1516 = v_1521(v_1516, v_1517, v_1518, v_1519, v_1505, 5, v_1491[20]);
                v_1519 = v_1521(v_1519, v_1516, v_1517, v_1518, v_1510, 9, v_1491[21]);
                v_1518 = v_1521(v_1518, v_1519, v_1516, v_1517, v_1515, 14, v_1491[22]);
                v_1517 = v_1521(v_1517, v_1518, v_1519, v_1516, v_1504, 20, v_1491[23]);
                v_1516 = v_1521(v_1516, v_1517, v_1518, v_1519, v_1509, 5, v_1491[24]);
                v_1519 = v_1521(v_1519, v_1516, v_1517, v_1518, v_1514, 9, v_1491[25]);
                v_1518 = v_1521(v_1518, v_1519, v_1516, v_1517, v_1503, 14, v_1491[26]);
                v_1517 = v_1521(v_1517, v_1518, v_1519, v_1516, v_1508, 20, v_1491[27]);
                v_1516 = v_1521(v_1516, v_1517, v_1518, v_1519, v_1513, 5, v_1491[28]);
                v_1519 = v_1521(v_1519, v_1516, v_1517, v_1518, v_1502, 9, v_1491[29]);
                v_1518 = v_1521(v_1518, v_1519, v_1516, v_1517, v_1507, 14, v_1491[30]);
                v_1517 = v_1521(v_1517, v_1518, v_1519, v_1516, v_1512, 20, v_1491[31]);
                v_1516 = v_1522(v_1516, v_1517, v_1518, v_1519, v_1505, 4, v_1491[32]);
                v_1519 = v_1522(v_1519, v_1516, v_1517, v_1518, v_1508, 11, v_1491[33]);
                v_1518 = v_1522(v_1518, v_1519, v_1516, v_1517, v_1511, 16, v_1491[34]);
                v_1517 = v_1522(v_1517, v_1518, v_1519, v_1516, v_1514, 23, v_1491[35]);
                v_1516 = v_1522(v_1516, v_1517, v_1518, v_1519, v_1501, 4, v_1491[36]);
                v_1519 = v_1522(v_1519, v_1516, v_1517, v_1518, v_1504, 11, v_1491[37]);
                v_1518 = v_1522(v_1518, v_1519, v_1516, v_1517, v_1507, 16, v_1491[38]);
                v_1517 = v_1522(v_1517, v_1518, v_1519, v_1516, v_1510, 23, v_1491[39]);
                v_1516 = v_1522(v_1516, v_1517, v_1518, v_1519, v_1513, 4, v_1491[40]);
                v_1519 = v_1522(v_1519, v_1516, v_1517, v_1518, v_1500, 11, v_1491[41]);
                v_1518 = v_1522(v_1518, v_1519, v_1516, v_1517, v_1503, 16, v_1491[42]);
                v_1517 = v_1522(v_1517, v_1518, v_1519, v_1516, v_1506, 23, v_1491[43]);
                v_1516 = v_1522(v_1516, v_1517, v_1518, v_1519, v_1509, 4, v_1491[44]);
                v_1519 = v_1522(v_1519, v_1516, v_1517, v_1518, v_1512, 11, v_1491[45]);
                v_1518 = v_1522(v_1518, v_1519, v_1516, v_1517, v_1515, 16, v_1491[46]);
                v_1517 = v_1522(v_1517, v_1518, v_1519, v_1516, v_1502, 23, v_1491[47]);
                v_1516 = v_1523(v_1516, v_1517, v_1518, v_1519, v_1500, 6, v_1491[48]);
                v_1519 = v_1523(v_1519, v_1516, v_1517, v_1518, v_1507, 10, v_1491[49]);
                v_1518 = v_1523(v_1518, v_1519, v_1516, v_1517, v_1514, 15, v_1491[50]);
                v_1517 = v_1523(v_1517, v_1518, v_1519, v_1516, v_1505, 21, v_1491[51]);
                v_1516 = v_1523(v_1516, v_1517, v_1518, v_1519, v_1512, 6, v_1491[52]);
                v_1519 = v_1523(v_1519, v_1516, v_1517, v_1518, v_1503, 10, v_1491[53]);
                v_1518 = v_1523(v_1518, v_1519, v_1516, v_1517, v_1510, 15, v_1491[54]);
                v_1517 = v_1523(v_1517, v_1518, v_1519, v_1516, v_1501, 21, v_1491[55]);
                v_1516 = v_1523(v_1516, v_1517, v_1518, v_1519, v_1508, 6, v_1491[56]);
                v_1519 = v_1523(v_1519, v_1516, v_1517, v_1518, v_1515, 10, v_1491[57]);
                v_1518 = v_1523(v_1518, v_1519, v_1516, v_1517, v_1506, 15, v_1491[58]);
                v_1517 = v_1523(v_1517, v_1518, v_1519, v_1516, v_1513, 21, v_1491[59]);
                v_1516 = v_1523(v_1516, v_1517, v_1518, v_1519, v_1504, 6, v_1491[60]);
                v_1519 = v_1523(v_1519, v_1516, v_1517, v_1518, v_1511, 10, v_1491[61]);
                v_1518 = v_1523(v_1518, v_1519, v_1516, v_1517, v_1502, 15, v_1491[62]);
                v_1517 = v_1523(v_1517, v_1518, v_1519, v_1516, v_1509, 21, v_1491[63]);
                v_1499[0] = v_1499[0] + v_1516 | 0;
                v_1499[1] = v_1499[1] + v_1517 | 0;
                v_1499[2] = v_1499[2] + v_1518 | 0;
                v_1499[3] = v_1499[3] + v_1519 | 0;
              },
              _doFinalize: function () {
                var v_1524 = this._data;
                var v_1525 = v_1524.words;
                var v_1526 = this._nDataBytes * 8;
                var v_1527 = v_1524.sigBytes * 8;
                v_1525[v_1527 >>> 5] |= 128 << 24 - v_1527 % 32;
                var v_1528 = v_1485.floor(v_1526 / 4294967296);
                var v_1529 = v_1526;
                v_1525[(v_1527 + 64 >>> 9 << 4) + 15] = (v_1528 << 8 | v_1528 >>> 24) & 16711935 | (v_1528 << 24 | v_1528 >>> 8) & -16711936;
                v_1525[(v_1527 + 64 >>> 9 << 4) + 14] = (v_1529 << 8 | v_1529 >>> 24) & 16711935 | (v_1529 << 24 | v_1529 >>> 8) & -16711936;
                v_1524.sigBytes = (v_1525.length + 1) * 4;
                this._process();
                var v_1530 = this._hash;
                var v_1531 = v_1530.words;
                for (var v_1532 = 0; v_1532 < 4; v_1532++) {
                  var v_1533 = v_1531[v_1532];
                  v_1531[v_1532] = (v_1533 << 8 | v_1533 >>> 24) & 16711935 | (v_1533 << 24 | v_1533 >>> 8) & -16711936;
                }
                return v_1530;
              },
              clone: function () {
                var v_1534 = v_1489.clone.call(this);
                v_1534._hash = this._hash.clone();
                return v_1534;
              }
            });
            function v_1520(v_1535, v_1536, v_1537, v_1538, v_1539, v_1540, v_1541) {
              var v_1542 = v_1535 + (v_1536 & v_1537 | ~v_1536 & v_1538) + v_1539 + v_1541;
              return (v_1542 << v_1540 | v_1542 >>> 32 - v_1540) + v_1536;
            }
            function v_1521(v_1543, v_1544, v_1545, v_1546, v_1547, v_1548, v_1549) {
              var v_1550 = v_1543 + (v_1544 & v_1546 | v_1545 & ~v_1546) + v_1547 + v_1549;
              return (v_1550 << v_1548 | v_1550 >>> 32 - v_1548) + v_1544;
            }
            function v_1522(v_1551, v_1552, v_1553, v_1554, v_1555, v_1556, v_1557) {
              var v_1558 = v_1551 + (v_1552 ^ v_1553 ^ v_1554) + v_1555 + v_1557;
              return (v_1558 << v_1556 | v_1558 >>> 32 - v_1556) + v_1552;
            }
            function v_1523(v_1559, v_1560, v_1561, v_1562, v_1563, v_1564, v_1565) {
              var v_1566 = v_1559 + (v_1561 ^ (v_1560 | ~v_1562)) + v_1563 + v_1565;
              return (v_1566 << v_1564 | v_1566 >>> 32 - v_1564) + v_1560;
            }
            v_1486.MD5 = v_1489._createHelper(v_1493);
            v_1486.HmacMD5 = v_1489._createHmacHelper(v_1493);
          })(Math);
          return v_1484.MD5;
        });
      }
    });
    var v_1567 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(v_1568, v_1569) {
        "use strict";

        (function (v_1570, v_1571) {
          if (typeof v_1568 === "object") {
            v_1569.exports = v_1568 = v_1571(v_1267());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], v_1571);
          } else {
            v_1571(v_1570.CryptoJS);
          }
        })(v_1568, function (v_1572) {
          (function () {
            var v_1573 = v_1572;
            var v_1574 = v_1573.lib;
            var v_1575 = v_1574.WordArray;
            var v_1576 = v_1574.Hasher;
            var v_1577 = v_1573.algo;
            var v_1578 = [];
            var v_1579 = v_1577.SHA1 = v_1576.extend({
              _doReset: function () {
                this._hash = new v_1575.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (v_1580, v_1581) {
                var v_1582 = this._hash.words;
                var v_1583 = v_1582[0];
                var v_1584 = v_1582[1];
                var v_1585 = v_1582[2];
                var v_1586 = v_1582[3];
                var v_1587 = v_1582[4];
                for (var v_1588 = 0; v_1588 < 80; v_1588++) {
                  if (v_1588 < 16) {
                    v_1578[v_1588] = v_1580[v_1581 + v_1588] | 0;
                  } else {
                    var v_1589 = v_1578[v_1588 - 3] ^ v_1578[v_1588 - 8] ^ v_1578[v_1588 - 14] ^ v_1578[v_1588 - 16];
                    v_1578[v_1588] = v_1589 << 1 | v_1589 >>> 31;
                  }
                  var v_1590 = (v_1583 << 5 | v_1583 >>> 27) + v_1587 + v_1578[v_1588];
                  if (v_1588 < 20) {
                    v_1590 += (v_1584 & v_1585 | ~v_1584 & v_1586) + 1518500249;
                  } else if (v_1588 < 40) {
                    v_1590 += (v_1584 ^ v_1585 ^ v_1586) + 1859775393;
                  } else if (v_1588 < 60) {
                    v_1590 += (v_1584 & v_1585 | v_1584 & v_1586 | v_1585 & v_1586) - 1894007588;
                  } else {
                    v_1590 += (v_1584 ^ v_1585 ^ v_1586) - 899497514;
                  }
                  v_1587 = v_1586;
                  v_1586 = v_1585;
                  v_1585 = v_1584 << 30 | v_1584 >>> 2;
                  v_1584 = v_1583;
                  v_1583 = v_1590;
                }
                v_1582[0] = v_1582[0] + v_1583 | 0;
                v_1582[1] = v_1582[1] + v_1584 | 0;
                v_1582[2] = v_1582[2] + v_1585 | 0;
                v_1582[3] = v_1582[3] + v_1586 | 0;
                v_1582[4] = v_1582[4] + v_1587 | 0;
              },
              _doFinalize: function () {
                var v_1591 = this._data;
                var v_1592 = v_1591.words;
                var v_1593 = this._nDataBytes * 8;
                var v_1594 = v_1591.sigBytes * 8;
                v_1592[v_1594 >>> 5] |= 128 << 24 - v_1594 % 32;
                v_1592[(v_1594 + 64 >>> 9 << 4) + 14] = Math.floor(v_1593 / 4294967296);
                v_1592[(v_1594 + 64 >>> 9 << 4) + 15] = v_1593;
                v_1591.sigBytes = v_1592.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var v_1595 = v_1576.clone.call(this);
                v_1595._hash = this._hash.clone();
                return v_1595;
              }
            });
            v_1573.SHA1 = v_1576._createHelper(v_1579);
            v_1573.HmacSHA1 = v_1576._createHmacHelper(v_1579);
          })();
          return v_1572.SHA1;
        });
      }
    });
    var v_1596 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(v_1597, v_1598) {
        "use strict";

        (function (v_1599, v_1600) {
          if (typeof v_1597 === "object") {
            v_1598.exports = v_1597 = v_1600(v_1267());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], v_1600);
          } else {
            v_1600(v_1599.CryptoJS);
          }
        })(v_1597, function (v_1601) {
          (function (v_1602) {
            var v_1603 = v_1601;
            var v_1604 = v_1603.lib;
            var v_1605 = v_1604.WordArray;
            var v_1606 = v_1604.Hasher;
            var v_1607 = v_1603.algo;
            var v_1608 = [];
            var v_1609 = [];
            (function () {
              function v_1610(v_1611) {
                var v_1612 = v_1602.sqrt(v_1611);
                for (var v_1613 = 2; v_1613 <= v_1612; v_1613++) {
                  if (!(v_1611 % v_1613)) {
                    return false;
                  }
                }
                return true;
              }
              function v_1614(v_1615) {
                return (v_1615 - (v_1615 | 0)) * 4294967296 | 0;
              }
              var v_1616 = 2;
              var v_1617 = 0;
              while (v_1617 < 64) {
                if (v_1610(v_1616)) {
                  if (v_1617 < 8) {
                    v_1608[v_1617] = v_1614(v_1602.pow(v_1616, 1 / 2));
                  }
                  v_1609[v_1617] = v_1614(v_1602.pow(v_1616, 1 / 3));
                  v_1617++;
                }
                v_1616++;
              }
            })();
            var v_1618 = [];
            var v_1619 = v_1607.SHA256 = v_1606.extend({
              _doReset: function () {
                this._hash = new v_1605.init(v_1608.slice(0));
              },
              _doProcessBlock: function (v_1620, v_1621) {
                var v_1622 = this._hash.words;
                var v_1623 = v_1622[0];
                var v_1624 = v_1622[1];
                var v_1625 = v_1622[2];
                var v_1626 = v_1622[3];
                var v_1627 = v_1622[4];
                var v_1628 = v_1622[5];
                var v_1629 = v_1622[6];
                var v_1630 = v_1622[7];
                for (var v_1631 = 0; v_1631 < 64; v_1631++) {
                  if (v_1631 < 16) {
                    v_1618[v_1631] = v_1620[v_1621 + v_1631] | 0;
                  } else {
                    var v_1632 = v_1618[v_1631 - 15];
                    var v_1633 = (v_1632 << 25 | v_1632 >>> 7) ^ (v_1632 << 14 | v_1632 >>> 18) ^ v_1632 >>> 3;
                    var v_1634 = v_1618[v_1631 - 2];
                    var v_1635 = (v_1634 << 15 | v_1634 >>> 17) ^ (v_1634 << 13 | v_1634 >>> 19) ^ v_1634 >>> 10;
                    v_1618[v_1631] = v_1633 + v_1618[v_1631 - 7] + v_1635 + v_1618[v_1631 - 16];
                  }
                  var v_1636 = v_1627 & v_1628 ^ ~v_1627 & v_1629;
                  var v_1637 = v_1623 & v_1624 ^ v_1623 & v_1625 ^ v_1624 & v_1625;
                  var v_1638 = (v_1623 << 30 | v_1623 >>> 2) ^ (v_1623 << 19 | v_1623 >>> 13) ^ (v_1623 << 10 | v_1623 >>> 22);
                  var v_1639 = (v_1627 << 26 | v_1627 >>> 6) ^ (v_1627 << 21 | v_1627 >>> 11) ^ (v_1627 << 7 | v_1627 >>> 25);
                  var v_1640 = v_1630 + v_1639 + v_1636 + v_1609[v_1631] + v_1618[v_1631];
                  var v_1641 = v_1638 + v_1637;
                  v_1630 = v_1629;
                  v_1629 = v_1628;
                  v_1628 = v_1627;
                  v_1627 = v_1626 + v_1640 | 0;
                  v_1626 = v_1625;
                  v_1625 = v_1624;
                  v_1624 = v_1623;
                  v_1623 = v_1640 + v_1641 | 0;
                }
                v_1622[0] = v_1622[0] + v_1623 | 0;
                v_1622[1] = v_1622[1] + v_1624 | 0;
                v_1622[2] = v_1622[2] + v_1625 | 0;
                v_1622[3] = v_1622[3] + v_1626 | 0;
                v_1622[4] = v_1622[4] + v_1627 | 0;
                v_1622[5] = v_1622[5] + v_1628 | 0;
                v_1622[6] = v_1622[6] + v_1629 | 0;
                v_1622[7] = v_1622[7] + v_1630 | 0;
              },
              _doFinalize: function () {
                var v_1642 = this._data;
                var v_1643 = v_1642.words;
                var v_1644 = this._nDataBytes * 8;
                var v_1645 = v_1642.sigBytes * 8;
                v_1643[v_1645 >>> 5] |= 128 << 24 - v_1645 % 32;
                v_1643[(v_1645 + 64 >>> 9 << 4) + 14] = v_1602.floor(v_1644 / 4294967296);
                v_1643[(v_1645 + 64 >>> 9 << 4) + 15] = v_1644;
                v_1642.sigBytes = v_1643.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var v_1646 = v_1606.clone.call(this);
                v_1646._hash = this._hash.clone();
                return v_1646;
              }
            });
            v_1603.SHA256 = v_1606._createHelper(v_1619);
            v_1603.HmacSHA256 = v_1606._createHmacHelper(v_1619);
          })(Math);
          return v_1601.SHA256;
        });
      }
    });
    var v_1647 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(v_1648, v_1649) {
        "use strict";

        (function (v_1650, v_1651, v_1652) {
          if (typeof v_1648 === "object") {
            v_1649.exports = v_1648 = v_1651(v_1267(), v_1596());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha256"], v_1651);
          } else {
            v_1651(v_1650.CryptoJS);
          }
        })(v_1648, function (v_1653) {
          (function () {
            var v_1654 = v_1653;
            var v_1655 = v_1654.lib;
            var v_1656 = v_1655.WordArray;
            var v_1657 = v_1654.algo;
            var v_1658 = v_1657.SHA256;
            var v_1659 = v_1657.SHA224 = v_1658.extend({
              _doReset: function () {
                this._hash = new v_1656.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function () {
                var v_1660 = v_1658._doFinalize.call(this);
                v_1660.sigBytes -= 4;
                return v_1660;
              }
            });
            v_1654.SHA224 = v_1658._createHelper(v_1659);
            v_1654.HmacSHA224 = v_1658._createHmacHelper(v_1659);
          })();
          return v_1653.SHA224;
        });
      }
    });
    var v_1661 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(v_1662, v_1663) {
        "use strict";

        (function (v_1664, v_1665, v_1666) {
          if (typeof v_1662 === "object") {
            v_1663.exports = v_1662 = v_1665(v_1267(), v_1364());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], v_1665);
          } else {
            v_1665(v_1664.CryptoJS);
          }
        })(v_1662, function (v_1667) {
          (function () {
            var v_1668 = v_1667;
            var v_1669 = v_1668.lib;
            var v_1670 = v_1669.Hasher;
            var v_1671 = v_1668.x64;
            var v_1672 = v_1671.Word;
            var v_1673 = v_1671.WordArray;
            var v_1674 = v_1668.algo;
            function v_1675() {
              return v_1672.create.apply(v_1672, arguments);
            }
            var v_1676 = [v_1675(1116352408, 3609767458), v_1675(1899447441, 602891725), v_1675(3049323471, 3964484399), v_1675(3921009573, 2173295548), v_1675(961987163, 4081628472), v_1675(1508970993, 3053834265), v_1675(2453635748, 2937671579), v_1675(2870763221, 3664609560), v_1675(3624381080, 2734883394), v_1675(310598401, 1164996542), v_1675(607225278, 1323610764), v_1675(1426881987, 3590304994), v_1675(1925078388, 4068182383), v_1675(2162078206, 991336113), v_1675(2614888103, 633803317), v_1675(3248222580, 3479774868), v_1675(3835390401, 2666613458), v_1675(4022224774, 944711139), v_1675(264347078, 2341262773), v_1675(604807628, 2007800933), v_1675(770255983, 1495990901), v_1675(1249150122, 1856431235), v_1675(1555081692, 3175218132), v_1675(1996064986, 2198950837), v_1675(2554220882, 3999719339), v_1675(2821834349, 766784016), v_1675(2952996808, 2566594879), v_1675(3210313671, 3203337956), v_1675(3336571891, 1034457026), v_1675(3584528711, 2466948901), v_1675(113926993, 3758326383), v_1675(338241895, 168717936), v_1675(666307205, 1188179964), v_1675(773529912, 1546045734), v_1675(1294757372, 1522805485), v_1675(1396182291, 2643833823), v_1675(1695183700, 2343527390), v_1675(1986661051, 1014477480), v_1675(2177026350, 1206759142), v_1675(2456956037, 344077627), v_1675(2730485921, 1290863460), v_1675(2820302411, 3158454273), v_1675(3259730800, 3505952657), v_1675(3345764771, 106217008), v_1675(3516065817, 3606008344), v_1675(3600352804, 1432725776), v_1675(4094571909, 1467031594), v_1675(275423344, 851169720), v_1675(430227734, 3100823752), v_1675(506948616, 1363258195), v_1675(659060556, 3750685593), v_1675(883997877, 3785050280), v_1675(958139571, 3318307427), v_1675(1322822218, 3812723403), v_1675(1537002063, 2003034995), v_1675(1747873779, 3602036899), v_1675(1955562222, 1575990012), v_1675(2024104815, 1125592928), v_1675(2227730452, 2716904306), v_1675(2361852424, 442776044), v_1675(2428436474, 593698344), v_1675(2756734187, 3733110249), v_1675(3204031479, 2999351573), v_1675(3329325298, 3815920427), v_1675(3391569614, 3928383900), v_1675(3515267271, 566280711), v_1675(3940187606, 3454069534), v_1675(4118630271, 4000239992), v_1675(116418474, 1914138554), v_1675(174292421, 2731055270), v_1675(289380356, 3203993006), v_1675(460393269, 320620315), v_1675(685471733, 587496836), v_1675(852142971, 1086792851), v_1675(1017036298, 365543100), v_1675(1126000580, 2618297676), v_1675(1288033470, 3409855158), v_1675(1501505948, 4234509866), v_1675(1607167915, 987167468), v_1675(1816402316, 1246189591)];
            var v_1677 = [];
            (function () {
              for (var v_1678 = 0; v_1678 < 80; v_1678++) {
                v_1677[v_1678] = v_1675();
              }
            })();
            var v_1679 = v_1674.SHA512 = v_1670.extend({
              _doReset: function () {
                this._hash = new v_1673.init([new v_1672.init(1779033703, 4089235720), new v_1672.init(3144134277, 2227873595), new v_1672.init(1013904242, 4271175723), new v_1672.init(2773480762, 1595750129), new v_1672.init(1359893119, 2917565137), new v_1672.init(2600822924, 725511199), new v_1672.init(528734635, 4215389547), new v_1672.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function (v_1680, v_1681) {
                var v_1682 = this._hash.words;
                var v_1683 = v_1682[0];
                var v_1684 = v_1682[1];
                var v_1685 = v_1682[2];
                var v_1686 = v_1682[3];
                var v_1687 = v_1682[4];
                var v_1688 = v_1682[5];
                var v_1689 = v_1682[6];
                var v_1690 = v_1682[7];
                var v_1691 = v_1683.high;
                var v_1692 = v_1683.low;
                var v_1693 = v_1684.high;
                var v_1694 = v_1684.low;
                var v_1695 = v_1685.high;
                var v_1696 = v_1685.low;
                var v_1697 = v_1686.high;
                var v_1698 = v_1686.low;
                var v_1699 = v_1687.high;
                var v_1700 = v_1687.low;
                var v_1701 = v_1688.high;
                var v_1702 = v_1688.low;
                var v_1703 = v_1689.high;
                var v_1704 = v_1689.low;
                var v_1705 = v_1690.high;
                var v_1706 = v_1690.low;
                var v_1707 = v_1691;
                var v_1708 = v_1692;
                var v_1709 = v_1693;
                var v_1710 = v_1694;
                var v_1711 = v_1695;
                var v_1712 = v_1696;
                var v_1713 = v_1697;
                var v_1714 = v_1698;
                var v_1715 = v_1699;
                var v_1716 = v_1700;
                var v_1717 = v_1701;
                var v_1718 = v_1702;
                var v_1719 = v_1703;
                var v_1720 = v_1704;
                var v_1721 = v_1705;
                var v_1722 = v_1706;
                for (var v_1723 = 0; v_1723 < 80; v_1723++) {
                  var v_1724 = v_1677[v_1723];
                  if (v_1723 < 16) {
                    var v_1725 = v_1724.high = v_1680[v_1681 + v_1723 * 2] | 0;
                    var v_1726 = v_1724.low = v_1680[v_1681 + v_1723 * 2 + 1] | 0;
                  } else {
                    var v_1727 = v_1677[v_1723 - 15];
                    var v_1728 = v_1727.high;
                    var v_1729 = v_1727.low;
                    var v_1730 = (v_1728 >>> 1 | v_1729 << 31) ^ (v_1728 >>> 8 | v_1729 << 24) ^ v_1728 >>> 7;
                    var v_1731 = (v_1729 >>> 1 | v_1728 << 31) ^ (v_1729 >>> 8 | v_1728 << 24) ^ (v_1729 >>> 7 | v_1728 << 25);
                    var v_1732 = v_1677[v_1723 - 2];
                    var v_1733 = v_1732.high;
                    var v_1734 = v_1732.low;
                    var v_1735 = (v_1733 >>> 19 | v_1734 << 13) ^ (v_1733 << 3 | v_1734 >>> 29) ^ v_1733 >>> 6;
                    var v_1736 = (v_1734 >>> 19 | v_1733 << 13) ^ (v_1734 << 3 | v_1733 >>> 29) ^ (v_1734 >>> 6 | v_1733 << 26);
                    var v_1737 = v_1677[v_1723 - 7];
                    var v_1738 = v_1737.high;
                    var v_1739 = v_1737.low;
                    var v_1740 = v_1677[v_1723 - 16];
                    var v_1741 = v_1740.high;
                    var v_1742 = v_1740.low;
                    var v_1726 = v_1731 + v_1739;
                    var v_1725 = v_1730 + v_1738 + (v_1726 >>> 0 < v_1731 >>> 0 ? 1 : 0);
                    var v_1726 = v_1726 + v_1736;
                    var v_1725 = v_1725 + v_1735 + (v_1726 >>> 0 < v_1736 >>> 0 ? 1 : 0);
                    var v_1726 = v_1726 + v_1742;
                    var v_1725 = v_1725 + v_1741 + (v_1726 >>> 0 < v_1742 >>> 0 ? 1 : 0);
                    v_1724.high = v_1725;
                    v_1724.low = v_1726;
                  }
                  var v_1743 = v_1715 & v_1717 ^ ~v_1715 & v_1719;
                  var v_1744 = v_1716 & v_1718 ^ ~v_1716 & v_1720;
                  var v_1745 = v_1707 & v_1709 ^ v_1707 & v_1711 ^ v_1709 & v_1711;
                  var v_1746 = v_1708 & v_1710 ^ v_1708 & v_1712 ^ v_1710 & v_1712;
                  var v_1747 = (v_1707 >>> 28 | v_1708 << 4) ^ (v_1707 << 30 | v_1708 >>> 2) ^ (v_1707 << 25 | v_1708 >>> 7);
                  var v_1748 = (v_1708 >>> 28 | v_1707 << 4) ^ (v_1708 << 30 | v_1707 >>> 2) ^ (v_1708 << 25 | v_1707 >>> 7);
                  var v_1749 = (v_1715 >>> 14 | v_1716 << 18) ^ (v_1715 >>> 18 | v_1716 << 14) ^ (v_1715 << 23 | v_1716 >>> 9);
                  var v_1750 = (v_1716 >>> 14 | v_1715 << 18) ^ (v_1716 >>> 18 | v_1715 << 14) ^ (v_1716 << 23 | v_1715 >>> 9);
                  var v_1751 = v_1676[v_1723];
                  var v_1752 = v_1751.high;
                  var v_1753 = v_1751.low;
                  var v_1754 = v_1722 + v_1750;
                  var v_1755 = v_1721 + v_1749 + (v_1754 >>> 0 < v_1722 >>> 0 ? 1 : 0);
                  var v_1754 = v_1754 + v_1744;
                  var v_1755 = v_1755 + v_1743 + (v_1754 >>> 0 < v_1744 >>> 0 ? 1 : 0);
                  var v_1754 = v_1754 + v_1753;
                  var v_1755 = v_1755 + v_1752 + (v_1754 >>> 0 < v_1753 >>> 0 ? 1 : 0);
                  var v_1754 = v_1754 + v_1726;
                  var v_1755 = v_1755 + v_1725 + (v_1754 >>> 0 < v_1726 >>> 0 ? 1 : 0);
                  var v_1756 = v_1748 + v_1746;
                  var v_1757 = v_1747 + v_1745 + (v_1756 >>> 0 < v_1748 >>> 0 ? 1 : 0);
                  v_1721 = v_1719;
                  v_1722 = v_1720;
                  v_1719 = v_1717;
                  v_1720 = v_1718;
                  v_1717 = v_1715;
                  v_1718 = v_1716;
                  v_1716 = v_1714 + v_1754 | 0;
                  v_1715 = v_1713 + v_1755 + (v_1716 >>> 0 < v_1714 >>> 0 ? 1 : 0) | 0;
                  v_1713 = v_1711;
                  v_1714 = v_1712;
                  v_1711 = v_1709;
                  v_1712 = v_1710;
                  v_1709 = v_1707;
                  v_1710 = v_1708;
                  v_1708 = v_1754 + v_1756 | 0;
                  v_1707 = v_1755 + v_1757 + (v_1708 >>> 0 < v_1754 >>> 0 ? 1 : 0) | 0;
                }
                v_1692 = v_1683.low = v_1692 + v_1708;
                v_1683.high = v_1691 + v_1707 + (v_1692 >>> 0 < v_1708 >>> 0 ? 1 : 0);
                v_1694 = v_1684.low = v_1694 + v_1710;
                v_1684.high = v_1693 + v_1709 + (v_1694 >>> 0 < v_1710 >>> 0 ? 1 : 0);
                v_1696 = v_1685.low = v_1696 + v_1712;
                v_1685.high = v_1695 + v_1711 + (v_1696 >>> 0 < v_1712 >>> 0 ? 1 : 0);
                v_1698 = v_1686.low = v_1698 + v_1714;
                v_1686.high = v_1697 + v_1713 + (v_1698 >>> 0 < v_1714 >>> 0 ? 1 : 0);
                v_1700 = v_1687.low = v_1700 + v_1716;
                v_1687.high = v_1699 + v_1715 + (v_1700 >>> 0 < v_1716 >>> 0 ? 1 : 0);
                v_1702 = v_1688.low = v_1702 + v_1718;
                v_1688.high = v_1701 + v_1717 + (v_1702 >>> 0 < v_1718 >>> 0 ? 1 : 0);
                v_1704 = v_1689.low = v_1704 + v_1720;
                v_1689.high = v_1703 + v_1719 + (v_1704 >>> 0 < v_1720 >>> 0 ? 1 : 0);
                v_1706 = v_1690.low = v_1706 + v_1722;
                v_1690.high = v_1705 + v_1721 + (v_1706 >>> 0 < v_1722 >>> 0 ? 1 : 0);
              },
              _doFinalize: function () {
                var v_1758 = this._data;
                var v_1759 = v_1758.words;
                var v_1760 = this._nDataBytes * 8;
                var v_1761 = v_1758.sigBytes * 8;
                v_1759[v_1761 >>> 5] |= 128 << 24 - v_1761 % 32;
                v_1759[(v_1761 + 128 >>> 10 << 5) + 30] = Math.floor(v_1760 / 4294967296);
                v_1759[(v_1761 + 128 >>> 10 << 5) + 31] = v_1760;
                v_1758.sigBytes = v_1759.length * 4;
                this._process();
                var v_1762 = this._hash.toX32();
                return v_1762;
              },
              clone: function () {
                var v_1763 = v_1670.clone.call(this);
                v_1763._hash = this._hash.clone();
                return v_1763;
              },
              blockSize: 32
            });
            v_1668.SHA512 = v_1670._createHelper(v_1679);
            v_1668.HmacSHA512 = v_1670._createHmacHelper(v_1679);
          })();
          return v_1667.SHA512;
        });
      }
    });
    var v_1764 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(v_1765, v_1766) {
        "use strict";

        (function (v_1767, v_1768, v_1769) {
          if (typeof v_1765 === "object") {
            v_1766.exports = v_1765 = v_1768(v_1267(), v_1364(), v_1661());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./sha512"], v_1768);
          } else {
            v_1768(v_1767.CryptoJS);
          }
        })(v_1765, function (v_1770) {
          (function () {
            var v_1771 = v_1770;
            var v_1772 = v_1771.x64;
            var v_1773 = v_1772.Word;
            var v_1774 = v_1772.WordArray;
            var v_1775 = v_1771.algo;
            var v_1776 = v_1775.SHA512;
            var v_1777 = v_1775.SHA384 = v_1776.extend({
              _doReset: function () {
                this._hash = new v_1774.init([new v_1773.init(3418070365, 3238371032), new v_1773.init(1654270250, 914150663), new v_1773.init(2438529370, 812702999), new v_1773.init(355462360, 4144912697), new v_1773.init(1731405415, 4290775857), new v_1773.init(2394180231, 1750603025), new v_1773.init(3675008525, 1694076839), new v_1773.init(1203062813, 3204075428)]);
              },
              _doFinalize: function () {
                var v_1778 = v_1776._doFinalize.call(this);
                v_1778.sigBytes -= 16;
                return v_1778;
              }
            });
            v_1771.SHA384 = v_1776._createHelper(v_1777);
            v_1771.HmacSHA384 = v_1776._createHmacHelper(v_1777);
          })();
          return v_1770.SHA384;
        });
      }
    });
    var v_1779 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(v_1780, v_1781) {
        "use strict";

        (function (v_1782, v_1783, v_1784) {
          if (typeof v_1780 === "object") {
            v_1781.exports = v_1780 = v_1783(v_1267(), v_1364());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], v_1783);
          } else {
            v_1783(v_1782.CryptoJS);
          }
        })(v_1780, function (v_1785) {
          (function (v_1786) {
            var v_1787 = v_1785;
            var v_1788 = v_1787.lib;
            var v_1789 = v_1788.WordArray;
            var v_1790 = v_1788.Hasher;
            var v_1791 = v_1787.x64;
            var v_1792 = v_1791.Word;
            var v_1793 = v_1787.algo;
            var v_1794 = [];
            var v_1795 = [];
            var v_1796 = [];
            (function () {
              var v_1797 = 1;
              var v_1798 = 0;
              for (var v_1799 = 0; v_1799 < 24; v_1799++) {
                v_1794[v_1797 + v_1798 * 5] = (v_1799 + 1) * (v_1799 + 2) / 2 % 64;
                var v_1800 = v_1798 % 5;
                var v_1801 = (v_1797 * 2 + v_1798 * 3) % 5;
                v_1797 = v_1800;
                v_1798 = v_1801;
              }
              for (var v_1797 = 0; v_1797 < 5; v_1797++) {
                for (var v_1798 = 0; v_1798 < 5; v_1798++) {
                  v_1795[v_1797 + v_1798 * 5] = v_1798 + (v_1797 * 2 + v_1798 * 3) % 5 * 5;
                }
              }
              var v_1802 = 1;
              for (var v_1803 = 0; v_1803 < 24; v_1803++) {
                var v_1804 = 0;
                var v_1805 = 0;
                for (var v_1806 = 0; v_1806 < 7; v_1806++) {
                  if (v_1802 & 1) {
                    var v_1807 = (1 << v_1806) - 1;
                    if (v_1807 < 32) {
                      v_1805 ^= 1 << v_1807;
                    } else {
                      v_1804 ^= 1 << v_1807 - 32;
                    }
                  }
                  if (v_1802 & 128) {
                    v_1802 = v_1802 << 1 ^ 113;
                  } else {
                    v_1802 <<= 1;
                  }
                }
                v_1796[v_1803] = v_1792.create(v_1804, v_1805);
              }
            })();
            var v_1808 = [];
            (function () {
              for (var v_1809 = 0; v_1809 < 25; v_1809++) {
                v_1808[v_1809] = v_1792.create();
              }
            })();
            var v_1810 = v_1793.SHA3 = v_1790.extend({
              cfg: v_1790.cfg.extend({
                outputLength: 512
              }),
              _doReset: function () {
                var v_1811 = this._state = [];
                for (var v_1812 = 0; v_1812 < 25; v_1812++) {
                  v_1811[v_1812] = new v_1792.init();
                }
                this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
              },
              _doProcessBlock: function (v_1813, v_1814) {
                var v_1815 = this._state;
                var v_1816 = this.blockSize / 2;
                for (var v_1817 = 0; v_1817 < v_1816; v_1817++) {
                  var v_1818 = v_1813[v_1814 + v_1817 * 2];
                  var v_1819 = v_1813[v_1814 + v_1817 * 2 + 1];
                  v_1818 = (v_1818 << 8 | v_1818 >>> 24) & 16711935 | (v_1818 << 24 | v_1818 >>> 8) & -16711936;
                  v_1819 = (v_1819 << 8 | v_1819 >>> 24) & 16711935 | (v_1819 << 24 | v_1819 >>> 8) & -16711936;
                  var v_1820 = v_1815[v_1817];
                  v_1820.high ^= v_1819;
                  v_1820.low ^= v_1818;
                }
                for (var v_1821 = 0; v_1821 < 24; v_1821++) {
                  for (var v_1822 = 0; v_1822 < 5; v_1822++) {
                    var v_1823 = 0;
                    var v_1824 = 0;
                    for (var v_1825 = 0; v_1825 < 5; v_1825++) {
                      var v_1820 = v_1815[v_1822 + v_1825 * 5];
                      v_1823 ^= v_1820.high;
                      v_1824 ^= v_1820.low;
                    }
                    var v_1826 = v_1808[v_1822];
                    v_1826.high = v_1823;
                    v_1826.low = v_1824;
                  }
                  for (var v_1822 = 0; v_1822 < 5; v_1822++) {
                    var v_1827 = v_1808[(v_1822 + 4) % 5];
                    var v_1828 = v_1808[(v_1822 + 1) % 5];
                    var v_1829 = v_1828.high;
                    var v_1830 = v_1828.low;
                    var v_1823 = v_1827.high ^ (v_1829 << 1 | v_1830 >>> 31);
                    var v_1824 = v_1827.low ^ (v_1830 << 1 | v_1829 >>> 31);
                    for (var v_1825 = 0; v_1825 < 5; v_1825++) {
                      var v_1820 = v_1815[v_1822 + v_1825 * 5];
                      v_1820.high ^= v_1823;
                      v_1820.low ^= v_1824;
                    }
                  }
                  for (var v_1831 = 1; v_1831 < 25; v_1831++) {
                    var v_1820 = v_1815[v_1831];
                    var v_1832 = v_1820.high;
                    var v_1833 = v_1820.low;
                    var v_1834 = v_1794[v_1831];
                    if (v_1834 < 32) {
                      var v_1823 = v_1832 << v_1834 | v_1833 >>> 32 - v_1834;
                      var v_1824 = v_1833 << v_1834 | v_1832 >>> 32 - v_1834;
                    } else {
                      var v_1823 = v_1833 << v_1834 - 32 | v_1832 >>> 64 - v_1834;
                      var v_1824 = v_1832 << v_1834 - 32 | v_1833 >>> 64 - v_1834;
                    }
                    var v_1835 = v_1808[v_1795[v_1831]];
                    v_1835.high = v_1823;
                    v_1835.low = v_1824;
                  }
                  var v_1836 = v_1808[0];
                  var v_1837 = v_1815[0];
                  v_1836.high = v_1837.high;
                  v_1836.low = v_1837.low;
                  for (var v_1822 = 0; v_1822 < 5; v_1822++) {
                    for (var v_1825 = 0; v_1825 < 5; v_1825++) {
                      var v_1831 = v_1822 + v_1825 * 5;
                      var v_1820 = v_1815[v_1831];
                      var v_1838 = v_1808[v_1831];
                      var v_1839 = v_1808[(v_1822 + 1) % 5 + v_1825 * 5];
                      var v_1840 = v_1808[(v_1822 + 2) % 5 + v_1825 * 5];
                      v_1820.high = v_1838.high ^ ~v_1839.high & v_1840.high;
                      v_1820.low = v_1838.low ^ ~v_1839.low & v_1840.low;
                    }
                  }
                  var v_1820 = v_1815[0];
                  var v_1841 = v_1796[v_1821];
                  v_1820.high ^= v_1841.high;
                  v_1820.low ^= v_1841.low;
                  ;
                }
              },
              _doFinalize: function () {
                var v_1842 = this._data;
                var v_1843 = v_1842.words;
                var v_1844 = this._nDataBytes * 8;
                var v_1845 = v_1842.sigBytes * 8;
                var v_1846 = this.blockSize * 32;
                v_1843[v_1845 >>> 5] |= 1 << 24 - v_1845 % 32;
                v_1843[(v_1786.ceil((v_1845 + 1) / v_1846) * v_1846 >>> 5) - 1] |= 128;
                v_1842.sigBytes = v_1843.length * 4;
                this._process();
                var v_1847 = this._state;
                var v_1848 = this.cfg.outputLength / 8;
                var v_1849 = v_1848 / 8;
                var v_1850 = [];
                for (var v_1851 = 0; v_1851 < v_1849; v_1851++) {
                  var v_1852 = v_1847[v_1851];
                  var v_1853 = v_1852.high;
                  var v_1854 = v_1852.low;
                  v_1853 = (v_1853 << 8 | v_1853 >>> 24) & 16711935 | (v_1853 << 24 | v_1853 >>> 8) & -16711936;
                  v_1854 = (v_1854 << 8 | v_1854 >>> 24) & 16711935 | (v_1854 << 24 | v_1854 >>> 8) & -16711936;
                  v_1850.push(v_1854);
                  v_1850.push(v_1853);
                }
                return new v_1789.init(v_1850, v_1848);
              },
              clone: function () {
                var v_1855 = v_1790.clone.call(this);
                var v_1856 = v_1855._state = this._state.slice(0);
                for (var v_1857 = 0; v_1857 < 25; v_1857++) {
                  v_1856[v_1857] = v_1856[v_1857].clone();
                }
                return v_1855;
              }
            });
            v_1787.SHA3 = v_1790._createHelper(v_1810);
            v_1787.HmacSHA3 = v_1790._createHmacHelper(v_1810);
          })(Math);
          return v_1785.SHA3;
        });
      }
    });
    var v_1858 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(v_1859, v_1860) {
        "use strict";

        (function (v_1861, v_1862) {
          if (typeof v_1859 === "object") {
            v_1860.exports = v_1859 = v_1862(v_1267());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], v_1862);
          } else {
            v_1862(v_1861.CryptoJS);
          }
        })(v_1859, function (v_1863) {
          (function (v_1864) {
            var v_1865 = v_1863;
            var v_1866 = v_1865.lib;
            var v_1867 = v_1866.WordArray;
            var v_1868 = v_1866.Hasher;
            var v_1869 = v_1865.algo;
            var v_1870 = v_1867.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
            var v_1871 = v_1867.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
            var v_1872 = v_1867.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
            var v_1873 = v_1867.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
            var v_1874 = v_1867.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
            var v_1875 = v_1867.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            var v_1876 = v_1869.RIPEMD160 = v_1868.extend({
              _doReset: function () {
                this._hash = v_1867.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (v_1877, v_1878) {
                for (var v_1879 = 0; v_1879 < 16; v_1879++) {
                  var v_1880 = v_1878 + v_1879;
                  var v_1881 = v_1877[v_1880];
                  v_1877[v_1880] = (v_1881 << 8 | v_1881 >>> 24) & 16711935 | (v_1881 << 24 | v_1881 >>> 8) & -16711936;
                }
                var v_1882 = this._hash.words;
                var v_1883 = v_1874.words;
                var v_1884 = v_1875.words;
                var v_1885 = v_1870.words;
                var v_1886 = v_1871.words;
                var v_1887 = v_1872.words;
                var v_1888 = v_1873.words;
                var v_1889;
                var v_1890;
                var v_1891;
                var v_1892;
                var v_1893;
                var v_1894;
                var v_1895;
                var v_1896;
                var v_1897;
                var v_1898;
                v_1894 = v_1889 = v_1882[0];
                v_1895 = v_1890 = v_1882[1];
                v_1896 = v_1891 = v_1882[2];
                v_1897 = v_1892 = v_1882[3];
                v_1898 = v_1893 = v_1882[4];
                var v_1899;
                for (var v_1879 = 0; v_1879 < 80; v_1879 += 1) {
                  v_1899 = v_1889 + v_1877[v_1878 + v_1885[v_1879]] | 0;
                  if (v_1879 < 16) {
                    v_1899 += v_1900(v_1890, v_1891, v_1892) + v_1883[0];
                  } else if (v_1879 < 32) {
                    v_1899 += v_1901(v_1890, v_1891, v_1892) + v_1883[1];
                  } else if (v_1879 < 48) {
                    v_1899 += v_1902(v_1890, v_1891, v_1892) + v_1883[2];
                  } else if (v_1879 < 64) {
                    v_1899 += v_1903(v_1890, v_1891, v_1892) + v_1883[3];
                  } else {
                    v_1899 += v_1904(v_1890, v_1891, v_1892) + v_1883[4];
                  }
                  v_1899 = v_1899 | 0;
                  v_1899 = v_1905(v_1899, v_1887[v_1879]);
                  v_1899 = v_1899 + v_1893 | 0;
                  v_1889 = v_1893;
                  v_1893 = v_1892;
                  v_1892 = v_1905(v_1891, 10);
                  v_1891 = v_1890;
                  v_1890 = v_1899;
                  v_1899 = v_1894 + v_1877[v_1878 + v_1886[v_1879]] | 0;
                  if (v_1879 < 16) {
                    v_1899 += v_1904(v_1895, v_1896, v_1897) + v_1884[0];
                  } else if (v_1879 < 32) {
                    v_1899 += v_1903(v_1895, v_1896, v_1897) + v_1884[1];
                  } else if (v_1879 < 48) {
                    v_1899 += v_1902(v_1895, v_1896, v_1897) + v_1884[2];
                  } else if (v_1879 < 64) {
                    v_1899 += v_1901(v_1895, v_1896, v_1897) + v_1884[3];
                  } else {
                    v_1899 += v_1900(v_1895, v_1896, v_1897) + v_1884[4];
                  }
                  v_1899 = v_1899 | 0;
                  v_1899 = v_1905(v_1899, v_1888[v_1879]);
                  v_1899 = v_1899 + v_1898 | 0;
                  v_1894 = v_1898;
                  v_1898 = v_1897;
                  v_1897 = v_1905(v_1896, 10);
                  v_1896 = v_1895;
                  v_1895 = v_1899;
                }
                v_1899 = v_1882[1] + v_1891 + v_1897 | 0;
                v_1882[1] = v_1882[2] + v_1892 + v_1898 | 0;
                v_1882[2] = v_1882[3] + v_1893 + v_1894 | 0;
                v_1882[3] = v_1882[4] + v_1889 + v_1895 | 0;
                v_1882[4] = v_1882[0] + v_1890 + v_1896 | 0;
                v_1882[0] = v_1899;
              },
              _doFinalize: function () {
                var v_1906 = this._data;
                var v_1907 = v_1906.words;
                var v_1908 = this._nDataBytes * 8;
                var v_1909 = v_1906.sigBytes * 8;
                v_1907[v_1909 >>> 5] |= 128 << 24 - v_1909 % 32;
                v_1907[(v_1909 + 64 >>> 9 << 4) + 14] = (v_1908 << 8 | v_1908 >>> 24) & 16711935 | (v_1908 << 24 | v_1908 >>> 8) & -16711936;
                v_1906.sigBytes = (v_1907.length + 1) * 4;
                this._process();
                var v_1910 = this._hash;
                var v_1911 = v_1910.words;
                for (var v_1912 = 0; v_1912 < 5; v_1912++) {
                  var v_1913 = v_1911[v_1912];
                  v_1911[v_1912] = (v_1913 << 8 | v_1913 >>> 24) & 16711935 | (v_1913 << 24 | v_1913 >>> 8) & -16711936;
                }
                return v_1910;
              },
              clone: function () {
                var v_1914 = v_1868.clone.call(this);
                v_1914._hash = this._hash.clone();
                return v_1914;
              }
            });
            function v_1900(v_1915, v_1916, v_1917) {
              return v_1915 ^ v_1916 ^ v_1917;
            }
            function v_1901(v_1918, v_1919, v_1920) {
              return v_1918 & v_1919 | ~v_1918 & v_1920;
            }
            function v_1902(v_1921, v_1922, v_1923) {
              return (v_1921 | ~v_1922) ^ v_1923;
            }
            function v_1903(v_1924, v_1925, v_1926) {
              return v_1924 & v_1926 | v_1925 & ~v_1926;
            }
            function v_1904(v_1927, v_1928, v_1929) {
              return v_1927 ^ (v_1928 | ~v_1929);
            }
            function v_1905(v_1930, v_1931) {
              return v_1930 << v_1931 | v_1930 >>> 32 - v_1931;
            }
            v_1865.RIPEMD160 = v_1868._createHelper(v_1876);
            v_1865.HmacRIPEMD160 = v_1868._createHmacHelper(v_1876);
          })(Math);
          return v_1863.RIPEMD160;
        });
      }
    });
    var v_1932 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(v_1933, v_1934) {
        "use strict";

        (function (v_1935, v_1936) {
          if (typeof v_1933 === "object") {
            v_1934.exports = v_1933 = v_1936(v_1267());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], v_1936);
          } else {
            v_1936(v_1935.CryptoJS);
          }
        })(v_1933, function (v_1937) {
          (function () {
            var v_1938 = v_1937;
            var v_1939 = v_1938.lib;
            var v_1940 = v_1939.Base;
            var v_1941 = v_1938.enc;
            var v_1942 = v_1941.Utf8;
            var v_1943 = v_1938.algo;
            var v_1944 = v_1943.HMAC = v_1940.extend({
              init: function (v_1945, v_1946) {
                v_1945 = this._hasher = new v_1945.init();
                if (typeof v_1946 == "string") {
                  v_1946 = v_1942.parse(v_1946);
                }
                var v_1947 = v_1945.blockSize;
                var v_1948 = v_1947 * 4;
                if (v_1946.sigBytes > v_1948) {
                  v_1946 = v_1945.finalize(v_1946);
                }
                v_1946.clamp();
                var v_1949 = this._oKey = v_1946.clone();
                var v_1950 = this._iKey = v_1946.clone();
                var v_1951 = v_1949.words;
                var v_1952 = v_1950.words;
                for (var v_1953 = 0; v_1953 < v_1947; v_1953++) {
                  v_1951[v_1953] ^= 1549556828;
                  v_1952[v_1953] ^= 909522486;
                }
                v_1949.sigBytes = v_1950.sigBytes = v_1948;
                this.reset();
              },
              reset: function () {
                var v_1954 = this._hasher;
                v_1954.reset();
                v_1954.update(this._iKey);
              },
              update: function (v_1955) {
                this._hasher.update(v_1955);
                return this;
              },
              finalize: function (v_1956) {
                var v_1957 = this._hasher;
                var v_1958 = v_1957.finalize(v_1956);
                v_1957.reset();
                var v_1959 = v_1957.finalize(this._oKey.clone().concat(v_1958));
                return v_1959;
              }
            });
          })();
        });
      }
    });
    var v_1960 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(v_1961, v_1962) {
        "use strict";

        (function (v_1963, v_1964, v_1965) {
          if (typeof v_1961 === "object") {
            v_1962.exports = v_1961 = v_1964(v_1267(), v_1567(), v_1932());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], v_1964);
          } else {
            v_1964(v_1963.CryptoJS);
          }
        })(v_1961, function (v_1966) {
          (function () {
            var v_1967 = v_1966;
            var v_1968 = v_1967.lib;
            var v_1969 = v_1968.Base;
            var v_1970 = v_1968.WordArray;
            var v_1971 = v_1967.algo;
            var v_1972 = v_1971.SHA1;
            var v_1973 = v_1971.HMAC;
            var v_1974 = {
              keySize: 4,
              hasher: v_1972,
              iterations: 1
            };
            var v_1975 = v_1971.PBKDF2 = v_1969.extend({
              cfg: v_1969.extend(v_1974),
              init: function (v_1976) {
                this.cfg = this.cfg.extend(v_1976);
              },
              compute: function (v_1977, v_1978) {
                var v_1979 = this.cfg;
                var v_1980 = v_1973.create(v_1979.hasher, v_1977);
                var v_1981 = v_1970.create();
                var v_1982 = v_1970.create([1]);
                var v_1983 = v_1981.words;
                var v_1984 = v_1982.words;
                var v_1985 = v_1979.keySize;
                var v_1986 = v_1979.iterations;
                while (v_1983.length < v_1985) {
                  var v_1987 = v_1980.update(v_1978).finalize(v_1982);
                  v_1980.reset();
                  var v_1988 = v_1987.words;
                  var v_1989 = v_1988.length;
                  var v_1990 = v_1987;
                  for (var v_1991 = 1; v_1991 < v_1986; v_1991++) {
                    v_1990 = v_1980.finalize(v_1990);
                    v_1980.reset();
                    var v_1992 = v_1990.words;
                    for (var v_1993 = 0; v_1993 < v_1989; v_1993++) {
                      v_1988[v_1993] ^= v_1992[v_1993];
                    }
                  }
                  v_1981.concat(v_1987);
                  v_1984[0]++;
                }
                v_1981.sigBytes = v_1985 * 4;
                return v_1981;
              }
            });
            v_1967.PBKDF2 = function (v_1994, v_1995, v_1996) {
              return v_1975.create(v_1996).compute(v_1994, v_1995);
            };
          })();
          return v_1966.PBKDF2;
        });
      }
    });
    var v_1997 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(v_1998, v_1999) {
        "use strict";

        (function (v_2000, v_2001, v_2002) {
          if (typeof v_1998 === "object") {
            v_1999.exports = v_1998 = v_2001(v_1267(), v_1567(), v_1932());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], v_2001);
          } else {
            v_2001(v_2000.CryptoJS);
          }
        })(v_1998, function (v_2003) {
          (function () {
            var v_2004 = v_2003;
            var v_2005 = v_2004.lib;
            var v_2006 = v_2005.Base;
            var v_2007 = v_2005.WordArray;
            var v_2008 = v_2004.algo;
            var v_2009 = v_2008.MD5;
            var v_2010 = {
              keySize: 4,
              hasher: v_2009,
              iterations: 1
            };
            var v_2011 = v_2008.EvpKDF = v_2006.extend({
              cfg: v_2006.extend(v_2010),
              init: function (v_2012) {
                this.cfg = this.cfg.extend(v_2012);
              },
              compute: function (v_2013, v_2014) {
                var v_2015 = this.cfg;
                var v_2016 = v_2015.hasher.create();
                var v_2017 = v_2007.create();
                var v_2018 = v_2017.words;
                var v_2019 = v_2015.keySize;
                var v_2020 = v_2015.iterations;
                while (v_2018.length < v_2019) {
                  if (v_2021) {
                    v_2016.update(v_2021);
                  }
                  var v_2021 = v_2016.update(v_2013).finalize(v_2014);
                  v_2016.reset();
                  for (var v_2022 = 1; v_2022 < v_2020; v_2022++) {
                    v_2021 = v_2016.finalize(v_2021);
                    v_2016.reset();
                  }
                  v_2017.concat(v_2021);
                }
                v_2017.sigBytes = v_2019 * 4;
                return v_2017;
              }
            });
            v_2004.EvpKDF = function (v_2023, v_2024, v_2025) {
              return v_2011.create(v_2025).compute(v_2023, v_2024);
            };
          })();
          return v_2003.EvpKDF;
        });
      }
    });
    var v_2026 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(v_2027, v_2028) {
        "use strict";

        (function (v_2029, v_2030, v_2031) {
          if (typeof v_2027 === "object") {
            v_2028.exports = v_2027 = v_2030(v_1267(), v_1997());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./evpkdf"], v_2030);
          } else {
            v_2030(v_2029.CryptoJS);
          }
        })(v_2027, function (v_2032) {
          if (!v_2032.lib.Cipher) {
            (function (v_2033) {
              var v_2034 = v_2032;
              var v_2035 = v_2034.lib;
              var v_2036 = v_2035.Base;
              var v_2037 = v_2035.WordArray;
              var v_2038 = v_2035.BufferedBlockAlgorithm;
              var v_2039 = v_2034.enc;
              var v_2040 = v_2039.Utf8;
              var v_2041 = v_2039.Base64;
              var v_2042 = v_2034.algo;
              var v_2043 = v_2042.EvpKDF;
              var v_2044 = v_2035.Cipher = v_2038.extend({
                cfg: v_2036.extend(),
                createEncryptor: function (v_2045, v_2046) {
                  return this.create(this._ENC_XFORM_MODE, v_2045, v_2046);
                },
                createDecryptor: function (v_2047, v_2048) {
                  return this.create(this._DEC_XFORM_MODE, v_2047, v_2048);
                },
                init: function (v_2049, v_2050, v_2051) {
                  this.cfg = this.cfg.extend(v_2051);
                  this._xformMode = v_2049;
                  this._key = v_2050;
                  this.reset();
                },
                reset: function () {
                  v_2038.reset.call(this);
                  this._doReset();
                },
                process: function (v_2052) {
                  this._append(v_2052);
                  return this._process();
                },
                finalize: function (v_2053) {
                  if (v_2053) {
                    this._append(v_2053);
                  }
                  var v_2054 = this._doFinalize();
                  return v_2054;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: /* @__PURE__ */function () {
                  function v_2055(v_2056) {
                    if (typeof v_2056 == "string") {
                      return v_2057;
                    } else {
                      return v_2058;
                    }
                  }
                  return function (v_2059) {
                    return {
                      encrypt: function (v_2060, v_2061, v_2062) {
                        return v_2055(v_2061).encrypt(v_2059, v_2060, v_2061, v_2062);
                      },
                      decrypt: function (v_2063, v_2064, v_2065) {
                        return v_2055(v_2064).decrypt(v_2059, v_2063, v_2064, v_2065);
                      }
                    };
                  };
                }()
              });
              var v_2066 = v_2035.StreamCipher = v_2044.extend({
                _doFinalize: function () {
                  var v_2067 = this._process(true);
                  return v_2067;
                },
                blockSize: 1
              });
              var v_2068 = v_2034.mode = {};
              var v_2069 = v_2035.BlockCipherMode = v_2036.extend({
                createEncryptor: function (v_2070, v_2071) {
                  return this.Encryptor.create(v_2070, v_2071);
                },
                createDecryptor: function (v_2072, v_2073) {
                  return this.Decryptor.create(v_2072, v_2073);
                },
                init: function (v_2074, v_2075) {
                  this._cipher = v_2074;
                  this._iv = v_2075;
                }
              });
              var v_2076 = v_2068.CBC = function () {
                var v_2077 = v_2069.extend();
                v_2077.Encryptor = v_2077.extend({
                  processBlock: function (v_2078, v_2079) {
                    var v_2080 = this._cipher;
                    var v_2081 = v_2080.blockSize;
                    v_2082.call(this, v_2078, v_2079, v_2081);
                    v_2080.encryptBlock(v_2078, v_2079);
                    this._prevBlock = v_2078.slice(v_2079, v_2079 + v_2081);
                  }
                });
                v_2077.Decryptor = v_2077.extend({
                  processBlock: function (v_2083, v_2084) {
                    var v_2085 = this._cipher;
                    var v_2086 = v_2085.blockSize;
                    var v_2087 = v_2083.slice(v_2084, v_2084 + v_2086);
                    v_2085.decryptBlock(v_2083, v_2084);
                    v_2082.call(this, v_2083, v_2084, v_2086);
                    this._prevBlock = v_2087;
                  }
                });
                function v_2082(v_2088, v_2089, v_2090) {
                  var v_2091 = this._iv;
                  if (v_2091) {
                    var v_2092 = v_2091;
                    this._iv = v_2033;
                  } else {
                    var v_2092 = this._prevBlock;
                  }
                  for (var v_2093 = 0; v_2093 < v_2090; v_2093++) {
                    v_2088[v_2089 + v_2093] ^= v_2092[v_2093];
                  }
                }
                return v_2077;
              }();
              var v_2094 = v_2034.pad = {};
              var v_2095 = v_2094.Pkcs7 = {
                pad: function (v_2096, v_2097) {
                  var v_2098 = v_2097 * 4;
                  var v_2099 = v_2098 - v_2096.sigBytes % v_2098;
                  var v_2100 = v_2099 << 24 | v_2099 << 16 | v_2099 << 8 | v_2099;
                  var v_2101 = [];
                  for (var v_2102 = 0; v_2102 < v_2099; v_2102 += 4) {
                    v_2101.push(v_2100);
                  }
                  var v_2103 = v_2037.create(v_2101, v_2099);
                  v_2096.concat(v_2103);
                },
                unpad: function (v_2104) {
                  var v_2105 = v_2104.words[v_2104.sigBytes - 1 >>> 2] & 255;
                  v_2104.sigBytes -= v_2105;
                }
              };
              var v_2106 = {
                mode: v_2076,
                padding: v_2095
              };
              var v_2107 = v_2035.BlockCipher = v_2044.extend({
                cfg: v_2044.cfg.extend(v_2106),
                reset: function () {
                  v_2044.reset.call(this);
                  var v_2108 = this.cfg;
                  var v_2109 = v_2108.iv;
                  var v_2110 = v_2108.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var v_2111 = v_2110.createEncryptor;
                  } else {
                    var v_2111 = v_2110.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == v_2111) {
                    this._mode.init(this, v_2109 && v_2109.words);
                  } else {
                    this._mode = v_2111.call(v_2110, this, v_2109 && v_2109.words);
                    this._mode.__creator = v_2111;
                  }
                },
                _doProcessBlock: function (v_2112, v_2113) {
                  this._mode.processBlock(v_2112, v_2113);
                },
                _doFinalize: function () {
                  var v_2114 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    v_2114.pad(this._data, this.blockSize);
                    var v_2115 = this._process(true);
                  } else {
                    var v_2115 = this._process(true);
                    v_2114.unpad(v_2115);
                  }
                  return v_2115;
                },
                blockSize: 4
              });
              var v_2116 = v_2035.CipherParams = v_2036.extend({
                init: function (v_2117) {
                  this.mixIn(v_2117);
                },
                toString: function (v_2118) {
                  return (v_2118 || this.formatter).stringify(this);
                }
              });
              var v_2119 = v_2034.format = {};
              var v_2120 = v_2119.OpenSSL = {
                stringify: function (v_2121) {
                  var v_2122 = v_2121.ciphertext;
                  var v_2123 = v_2121.salt;
                  if (v_2123) {
                    var v_2124 = v_2037.create([1398893684, 1701076831]).concat(v_2123).concat(v_2122);
                  } else {
                    var v_2124 = v_2122;
                  }
                  return v_2124.toString(v_2041);
                },
                parse: function (v_2125) {
                  var v_2126 = v_2041.parse(v_2125);
                  var v_2127 = v_2126.words;
                  if (v_2127[0] == 1398893684 && v_2127[1] == 1701076831) {
                    var v_2128 = v_2037.create(v_2127.slice(2, 4));
                    v_2127.splice(0, 4);
                    v_2126.sigBytes -= 16;
                  }
                  var v_2129 = {
                    ciphertext: v_2126,
                    salt: v_2128
                  };
                  return v_2116.create(v_2129);
                }
              };
              var v_2130 = {
                format: v_2120
              };
              var v_2058 = v_2035.SerializableCipher = v_2036.extend({
                cfg: v_2036.extend(v_2130),
                encrypt: function (v_2131, v_2132, v_2133, v_2134) {
                  v_2134 = this.cfg.extend(v_2134);
                  var v_2135 = v_2131.createEncryptor(v_2133, v_2134);
                  var v_2136 = v_2135.finalize(v_2132);
                  var v_2137 = v_2135.cfg;
                  var v_2138 = {
                    ciphertext: v_2136,
                    key: v_2133,
                    iv: v_2137.iv,
                    algorithm: v_2131,
                    mode: v_2137.mode,
                    padding: v_2137.padding,
                    blockSize: v_2131.blockSize,
                    formatter: v_2134.format
                  };
                  return v_2116.create(v_2138);
                },
                decrypt: function (v_2139, v_2140, v_2141, v_2142) {
                  v_2142 = this.cfg.extend(v_2142);
                  v_2140 = this._parse(v_2140, v_2142.format);
                  var v_2143 = v_2139.createDecryptor(v_2141, v_2142).finalize(v_2140.ciphertext);
                  return v_2143;
                },
                _parse: function (v_2144, v_2145) {
                  if (typeof v_2144 == "string") {
                    return v_2145.parse(v_2144, this);
                  } else {
                    return v_2144;
                  }
                }
              });
              var v_2146 = v_2034.kdf = {};
              var v_2147 = v_2146.OpenSSL = {
                execute: function (v_2148, v_2149, v_2150, v_2151) {
                  if (!v_2151) {
                    v_2151 = v_2037.random(8);
                  }
                  var v_2152 = {
                    keySize: v_2149 + v_2150
                  };
                  var v_2153 = v_2043.create(v_2152).compute(v_2148, v_2151);
                  var v_2154 = v_2037.create(v_2153.words.slice(v_2149), v_2150 * 4);
                  v_2153.sigBytes = v_2149 * 4;
                  var v_2155 = {
                    key: v_2153,
                    iv: v_2154,
                    salt: v_2151
                  };
                  return v_2116.create(v_2155);
                }
              };
              var v_2156 = {
                kdf: v_2147
              };
              var v_2057 = v_2035.PasswordBasedCipher = v_2058.extend({
                cfg: v_2058.cfg.extend(v_2156),
                encrypt: function (v_2157, v_2158, v_2159, v_2160) {
                  v_2160 = this.cfg.extend(v_2160);
                  var v_2161 = v_2160.kdf.execute(v_2159, v_2157.keySize, v_2157.ivSize);
                  v_2160.iv = v_2161.iv;
                  var v_2162 = v_2058.encrypt.call(this, v_2157, v_2158, v_2161.key, v_2160);
                  v_2162.mixIn(v_2161);
                  return v_2162;
                },
                decrypt: function (v_2163, v_2164, v_2165, v_2166) {
                  v_2166 = this.cfg.extend(v_2166);
                  v_2164 = this._parse(v_2164, v_2166.format);
                  var v_2167 = v_2166.kdf.execute(v_2165, v_2163.keySize, v_2163.ivSize, v_2164.salt);
                  v_2166.iv = v_2167.iv;
                  var v_2168 = v_2058.decrypt.call(this, v_2163, v_2164, v_2167.key, v_2166);
                  return v_2168;
                }
              });
            })();
          }
        });
      }
    });
    var v_2169 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(v_2170, v_2171) {
        "use strict";

        (function (v_2172, v_2173, v_2174) {
          if (typeof v_2170 === "object") {
            v_2171.exports = v_2170 = v_2173(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2173);
          } else {
            v_2173(v_2172.CryptoJS);
          }
        })(v_2170, function (v_2175) {
          v_2175.mode.CFB = function () {
            var v_2176 = v_2175.lib.BlockCipherMode.extend();
            v_2176.Encryptor = v_2176.extend({
              processBlock: function (v_2177, v_2178) {
                var v_2179 = this._cipher;
                var v_2180 = v_2179.blockSize;
                v_2181.call(this, v_2177, v_2178, v_2180, v_2179);
                this._prevBlock = v_2177.slice(v_2178, v_2178 + v_2180);
              }
            });
            v_2176.Decryptor = v_2176.extend({
              processBlock: function (v_2182, v_2183) {
                var v_2184 = this._cipher;
                var v_2185 = v_2184.blockSize;
                var v_2186 = v_2182.slice(v_2183, v_2183 + v_2185);
                v_2181.call(this, v_2182, v_2183, v_2185, v_2184);
                this._prevBlock = v_2186;
              }
            });
            function v_2181(v_2187, v_2188, v_2189, v_2190) {
              var v_2191 = this._iv;
              if (v_2191) {
                var v_2192 = v_2191.slice(0);
                this._iv = undefined;
              } else {
                var v_2192 = this._prevBlock;
              }
              v_2190.encryptBlock(v_2192, 0);
              for (var v_2193 = 0; v_2193 < v_2189; v_2193++) {
                v_2187[v_2188 + v_2193] ^= v_2192[v_2193];
              }
            }
            return v_2176;
          }();
          return v_2175.mode.CFB;
        });
      }
    });
    var v_2194 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(v_2195, v_2196) {
        "use strict";
        "use strict";

        (function (v_2197, v_2198, v_2199) {
          if (typeof v_2195 === "object") {
            v_2196.exports = v_2195 = v_2198(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2198);
          } else {
            v_2198(v_2197.CryptoJS);
          }
        })(v_2195, function (v_2200) {
          v_2200.mode.CTR = function () {
            var v_2201 = v_2200.lib.BlockCipherMode.extend();
            var v_2202 = v_2201.Encryptor = v_2201.extend({
              processBlock: function (v_2203, v_2204) {
                var v_2205 = this._cipher;
                var v_2206 = v_2205.blockSize;
                var v_2207 = this._iv;
                var v_2208 = this._counter;
                if (v_2207) {
                  v_2208 = this._counter = v_2207.slice(0);
                  this._iv = undefined;
                }
                var v_2209 = v_2208.slice(0);
                v_2205.encryptBlock(v_2209, 0);
                v_2208[v_2206 - 1] = v_2208[v_2206 - 1] + 1 | 0;
                for (var v_2210 = 0; v_2210 < v_2206; v_2210++) {
                  v_2203[v_2204 + v_2210] ^= v_2209[v_2210];
                }
              }
            });
            v_2201.Decryptor = v_2202;
            return v_2201;
          }();
          return v_2200.mode.CTR;
        });
      }
    });
    var v_2211 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(v_2212, v_2213) {
        "use strict";
        "use strict";

        (function (v_2214, v_2215, v_2216) {
          if (typeof v_2212 === "object") {
            v_2213.exports = v_2212 = v_2215(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2215);
          } else {
            v_2215(v_2214.CryptoJS);
          }
        })(v_2212, function (v_2217) {
          v_2217.mode.CTRGladman = function () {
            var v_2218 = v_2217.lib.BlockCipherMode.extend();
            function v_2219(v_2220) {
              if ((v_2220 >> 24 & 255) === 255) {
                var v_2221 = v_2220 >> 16 & 255;
                var v_2222 = v_2220 >> 8 & 255;
                var v_2223 = v_2220 & 255;
                if (v_2221 === 255) {
                  v_2221 = 0;
                  if (v_2222 === 255) {
                    v_2222 = 0;
                    if (v_2223 === 255) {
                      v_2223 = 0;
                    } else {
                      ++v_2223;
                    }
                  } else {
                    ++v_2222;
                  }
                } else {
                  ++v_2221;
                }
                v_2220 = 0;
                v_2220 += v_2221 << 16;
                v_2220 += v_2222 << 8;
                v_2220 += v_2223;
              } else {
                v_2220 += 16777216;
              }
              return v_2220;
            }
            function v_2224(v_2225) {
              if ((v_2225[0] = v_2219(v_2225[0])) === 0) {
                v_2225[1] = v_2219(v_2225[1]);
              }
              return v_2225;
            }
            var v_2226 = v_2218.Encryptor = v_2218.extend({
              processBlock: function (v_2227, v_2228) {
                var v_2229 = this._cipher;
                var v_2230 = v_2229.blockSize;
                var v_2231 = this._iv;
                var v_2232 = this._counter;
                if (v_2231) {
                  v_2232 = this._counter = v_2231.slice(0);
                  this._iv = undefined;
                }
                v_2224(v_2232);
                var v_2233 = v_2232.slice(0);
                v_2229.encryptBlock(v_2233, 0);
                for (var v_2234 = 0; v_2234 < v_2230; v_2234++) {
                  v_2227[v_2228 + v_2234] ^= v_2233[v_2234];
                }
              }
            });
            v_2218.Decryptor = v_2226;
            return v_2218;
          }();
          return v_2217.mode.CTRGladman;
        });
      }
    });
    var v_2235 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(v_2236, v_2237) {
        "use strict";

        (function (v_2238, v_2239, v_2240) {
          if (typeof v_2236 === "object") {
            v_2237.exports = v_2236 = v_2239(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2239);
          } else {
            v_2239(v_2238.CryptoJS);
          }
        })(v_2236, function (v_2241) {
          v_2241.mode.OFB = function () {
            var v_2242 = v_2241.lib.BlockCipherMode.extend();
            var v_2243 = v_2242.Encryptor = v_2242.extend({
              processBlock: function (v_2244, v_2245) {
                var v_2246 = this._cipher;
                var v_2247 = v_2246.blockSize;
                var v_2248 = this._iv;
                var v_2249 = this._keystream;
                if (v_2248) {
                  v_2249 = this._keystream = v_2248.slice(0);
                  this._iv = undefined;
                }
                v_2246.encryptBlock(v_2249, 0);
                for (var v_2250 = 0; v_2250 < v_2247; v_2250++) {
                  v_2244[v_2245 + v_2250] ^= v_2249[v_2250];
                }
              }
            });
            v_2242.Decryptor = v_2243;
            return v_2242;
          }();
          return v_2241.mode.OFB;
        });
      }
    });
    var v_2251 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(v_2252, v_2253) {
        "use strict";

        (function (v_2254, v_2255, v_2256) {
          if (typeof v_2252 === "object") {
            v_2253.exports = v_2252 = v_2255(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2255);
          } else {
            v_2255(v_2254.CryptoJS);
          }
        })(v_2252, function (v_2257) {
          v_2257.mode.ECB = function () {
            var v_2258 = v_2257.lib.BlockCipherMode.extend();
            v_2258.Encryptor = v_2258.extend({
              processBlock: function (v_2259, v_2260) {
                this._cipher.encryptBlock(v_2259, v_2260);
              }
            });
            v_2258.Decryptor = v_2258.extend({
              processBlock: function (v_2261, v_2262) {
                this._cipher.decryptBlock(v_2261, v_2262);
              }
            });
            return v_2258;
          }();
          return v_2257.mode.ECB;
        });
      }
    });
    var v_2263 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(v_2264, v_2265) {
        "use strict";

        (function (v_2266, v_2267, v_2268) {
          if (typeof v_2264 === "object") {
            v_2265.exports = v_2264 = v_2267(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2267);
          } else {
            v_2267(v_2266.CryptoJS);
          }
        })(v_2264, function (v_2269) {
          v_2269.pad.AnsiX923 = {
            pad: function (v_2270, v_2271) {
              var v_2272 = v_2270.sigBytes;
              var v_2273 = v_2271 * 4;
              var v_2274 = v_2273 - v_2272 % v_2273;
              var v_2275 = v_2272 + v_2274 - 1;
              v_2270.clamp();
              v_2270.words[v_2275 >>> 2] |= v_2274 << 24 - v_2275 % 4 * 8;
              v_2270.sigBytes += v_2274;
            },
            unpad: function (v_2276) {
              var v_2277 = v_2276.words[v_2276.sigBytes - 1 >>> 2] & 255;
              v_2276.sigBytes -= v_2277;
            }
          };
          return v_2269.pad.Ansix923;
        });
      }
    });
    var v_2278 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(v_2279, v_2280) {
        "use strict";
        "use strict";

        (function (v_2281, v_2282, v_2283) {
          if (typeof v_2279 === "object") {
            v_2280.exports = v_2279 = v_2282(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2282);
          } else {
            v_2282(v_2281.CryptoJS);
          }
        })(v_2279, function (v_2284) {
          v_2284.pad.Iso10126 = {
            pad: function (v_2285, v_2286) {
              var v_2287 = v_2286 * 4;
              var v_2288 = v_2287 - v_2285.sigBytes % v_2287;
              v_2285.concat(v_2284.lib.WordArray.random(v_2288 - 1)).concat(v_2284.lib.WordArray.create([v_2288 << 24], 1));
            },
            unpad: function (v_2289) {
              var v_2290 = v_2289.words[v_2289.sigBytes - 1 >>> 2] & 255;
              v_2289.sigBytes -= v_2290;
            }
          };
          return v_2284.pad.Iso10126;
        });
      }
    });
    var v_2291 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(v_2292, v_2293) {
        "use strict";
        "use strict";

        (function (v_2294, v_2295, v_2296) {
          if (typeof v_2292 === "object") {
            v_2293.exports = v_2292 = v_2295(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2295);
          } else {
            v_2295(v_2294.CryptoJS);
          }
        })(v_2292, function (v_2297) {
          v_2297.pad.Iso97971 = {
            pad: function (v_2298, v_2299) {
              v_2298.concat(v_2297.lib.WordArray.create([2147483648], 1));
              v_2297.pad.ZeroPadding.pad(v_2298, v_2299);
            },
            unpad: function (v_2300) {
              v_2297.pad.ZeroPadding.unpad(v_2300);
              v_2300.sigBytes--;
            }
          };
          return v_2297.pad.Iso97971;
        });
      }
    });
    var v_2301 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(v_2302, v_2303) {
        "use strict";

        (function (v_2304, v_2305, v_2306) {
          if (typeof v_2302 === "object") {
            v_2303.exports = v_2302 = v_2305(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2305);
          } else {
            v_2305(v_2304.CryptoJS);
          }
        })(v_2302, function (v_2307) {
          v_2307.pad.ZeroPadding = {
            pad: function (v_2308, v_2309) {
              var v_2310 = v_2309 * 4;
              v_2308.clamp();
              v_2308.sigBytes += v_2310 - (v_2308.sigBytes % v_2310 || v_2310);
            },
            unpad: function (v_2311) {
              var v_2312 = v_2311.words;
              var v_2313 = v_2311.sigBytes - 1;
              while (!(v_2312[v_2313 >>> 2] >>> 24 - v_2313 % 4 * 8 & 255)) {
                v_2313--;
              }
              v_2311.sigBytes = v_2313 + 1;
            }
          };
          return v_2307.pad.ZeroPadding;
        });
      }
    });
    var v_2314 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(v_2315, v_2316) {
        "use strict";

        (function (v_2317, v_2318, v_2319) {
          if (typeof v_2315 === "object") {
            v_2316.exports = v_2315 = v_2318(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2318);
          } else {
            v_2318(v_2317.CryptoJS);
          }
        })(v_2315, function (v_2320) {
          var v_2321 = {
            pad: function () {},
            unpad: function () {}
          };
          v_2320.pad.NoPadding = v_2321;
          return v_2320.pad.NoPadding;
        });
      }
    });
    var v_2322 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(v_2323, v_2324) {
        "use strict";

        (function (v_2325, v_2326, v_2327) {
          if (typeof v_2323 === "object") {
            v_2324.exports = v_2323 = v_2326(v_1267(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], v_2326);
          } else {
            v_2326(v_2325.CryptoJS);
          }
        })(v_2323, function (v_2328) {
          (function (v_2329) {
            var v_2330 = v_2328;
            var v_2331 = v_2330.lib;
            var v_2332 = v_2331.CipherParams;
            var v_2333 = v_2330.enc;
            var v_2334 = v_2333.Hex;
            var v_2335 = v_2330.format;
            var v_2336 = v_2335.Hex = {
              stringify: function (v_2337) {
                return v_2337.ciphertext.toString(v_2334);
              },
              parse: function (v_2338) {
                var v_2339 = v_2334.parse(v_2338);
                var v_2340 = {
                  ciphertext: v_2339
                };
                return v_2332.create(v_2340);
              }
            };
          })();
          return v_2328.format.Hex;
        });
      }
    });
    var v_2341 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(v_2342, v_2343) {
        "use strict";

        (function (v_2344, v_2345, v_2346) {
          if (typeof v_2342 === "object") {
            v_2343.exports = v_2342 = v_2345(v_1267(), v_1440(), v_1479(), v_1997(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], v_2345);
          } else {
            v_2345(v_2344.CryptoJS);
          }
        })(v_2342, function (v_2347) {
          (function () {
            var v_2348 = v_2347;
            var v_2349 = v_2348.lib;
            var v_2350 = v_2349.BlockCipher;
            var v_2351 = v_2348.algo;
            var v_2352 = [];
            var v_2353 = [];
            var v_2354 = [];
            var v_2355 = [];
            var v_2356 = [];
            var v_2357 = [];
            var v_2358 = [];
            var v_2359 = [];
            var v_2360 = [];
            var v_2361 = [];
            (function () {
              var v_2362 = [];
              for (var v_2363 = 0; v_2363 < 256; v_2363++) {
                if (v_2363 < 128) {
                  v_2362[v_2363] = v_2363 << 1;
                } else {
                  v_2362[v_2363] = v_2363 << 1 ^ 283;
                }
              }
              var v_2364 = 0;
              var v_2365 = 0;
              for (var v_2363 = 0; v_2363 < 256; v_2363++) {
                var v_2366 = v_2365 ^ v_2365 << 1 ^ v_2365 << 2 ^ v_2365 << 3 ^ v_2365 << 4;
                v_2366 = v_2366 >>> 8 ^ v_2366 & 255 ^ 99;
                v_2352[v_2364] = v_2366;
                v_2353[v_2366] = v_2364;
                var v_2367 = v_2362[v_2364];
                var v_2368 = v_2362[v_2367];
                var v_2369 = v_2362[v_2368];
                var v_2370 = v_2362[v_2366] * 257 ^ v_2366 * 16843008;
                v_2354[v_2364] = v_2370 << 24 | v_2370 >>> 8;
                v_2355[v_2364] = v_2370 << 16 | v_2370 >>> 16;
                v_2356[v_2364] = v_2370 << 8 | v_2370 >>> 24;
                v_2357[v_2364] = v_2370;
                var v_2370 = v_2369 * 16843009 ^ v_2368 * 65537 ^ v_2367 * 257 ^ v_2364 * 16843008;
                v_2358[v_2366] = v_2370 << 24 | v_2370 >>> 8;
                v_2359[v_2366] = v_2370 << 16 | v_2370 >>> 16;
                v_2360[v_2366] = v_2370 << 8 | v_2370 >>> 24;
                v_2361[v_2366] = v_2370;
                if (!v_2364) {
                  v_2364 = v_2365 = 1;
                } else {
                  v_2364 = v_2367 ^ v_2362[v_2362[v_2362[v_2369 ^ v_2367]]];
                  v_2365 ^= v_2362[v_2362[v_2365]];
                }
              }
            })();
            var v_2371 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            var v_2372 = v_2351.AES = v_2350.extend({
              _doReset: function () {
                if (this._nRounds && this._keyPriorReset === this._key) {
                  return;
                }
                var v_2373 = this._keyPriorReset = this._key;
                var v_2374 = v_2373.words;
                var v_2375 = v_2373.sigBytes / 4;
                var v_2376 = this._nRounds = v_2375 + 6;
                var v_2377 = (v_2376 + 1) * 4;
                var v_2378 = this._keySchedule = [];
                for (var v_2379 = 0; v_2379 < v_2377; v_2379++) {
                  if (v_2379 < v_2375) {
                    v_2378[v_2379] = v_2374[v_2379];
                  } else {
                    var v_2380 = v_2378[v_2379 - 1];
                    if (!(v_2379 % v_2375)) {
                      v_2380 = v_2380 << 8 | v_2380 >>> 24;
                      v_2380 = v_2352[v_2380 >>> 24] << 24 | v_2352[v_2380 >>> 16 & 255] << 16 | v_2352[v_2380 >>> 8 & 255] << 8 | v_2352[v_2380 & 255];
                      v_2380 ^= v_2371[v_2379 / v_2375 | 0] << 24;
                    } else if (v_2375 > 6 && v_2379 % v_2375 == 4) {
                      v_2380 = v_2352[v_2380 >>> 24] << 24 | v_2352[v_2380 >>> 16 & 255] << 16 | v_2352[v_2380 >>> 8 & 255] << 8 | v_2352[v_2380 & 255];
                    }
                    v_2378[v_2379] = v_2378[v_2379 - v_2375] ^ v_2380;
                  }
                }
                var v_2381 = this._invKeySchedule = [];
                for (var v_2382 = 0; v_2382 < v_2377; v_2382++) {
                  var v_2379 = v_2377 - v_2382;
                  if (v_2382 % 4) {
                    var v_2380 = v_2378[v_2379];
                  } else {
                    var v_2380 = v_2378[v_2379 - 4];
                  }
                  if (v_2382 < 4 || v_2379 <= 4) {
                    v_2381[v_2382] = v_2380;
                  } else {
                    v_2381[v_2382] = v_2358[v_2352[v_2380 >>> 24]] ^ v_2359[v_2352[v_2380 >>> 16 & 255]] ^ v_2360[v_2352[v_2380 >>> 8 & 255]] ^ v_2361[v_2352[v_2380 & 255]];
                  }
                }
              },
              encryptBlock: function (v_2383, v_2384) {
                this._doCryptBlock(v_2383, v_2384, this._keySchedule, v_2354, v_2355, v_2356, v_2357, v_2352);
              },
              decryptBlock: function (v_2385, v_2386) {
                var v_2387 = v_2385[v_2386 + 1];
                v_2385[v_2386 + 1] = v_2385[v_2386 + 3];
                v_2385[v_2386 + 3] = v_2387;
                this._doCryptBlock(v_2385, v_2386, this._invKeySchedule, v_2358, v_2359, v_2360, v_2361, v_2353);
                var v_2387 = v_2385[v_2386 + 1];
                v_2385[v_2386 + 1] = v_2385[v_2386 + 3];
                v_2385[v_2386 + 3] = v_2387;
              },
              _doCryptBlock: function (v_2388, v_2389, v_2390, v_2391, v_2392, v_2393, v_2394, v_2395) {
                var v_2396 = this._nRounds;
                var v_2397 = v_2388[v_2389] ^ v_2390[0];
                var v_2398 = v_2388[v_2389 + 1] ^ v_2390[1];
                var v_2399 = v_2388[v_2389 + 2] ^ v_2390[2];
                var v_2400 = v_2388[v_2389 + 3] ^ v_2390[3];
                var v_2401 = 4;
                for (var v_2402 = 1; v_2402 < v_2396; v_2402++) {
                  var v_2403 = v_2391[v_2397 >>> 24] ^ v_2392[v_2398 >>> 16 & 255] ^ v_2393[v_2399 >>> 8 & 255] ^ v_2394[v_2400 & 255] ^ v_2390[v_2401++];
                  var v_2404 = v_2391[v_2398 >>> 24] ^ v_2392[v_2399 >>> 16 & 255] ^ v_2393[v_2400 >>> 8 & 255] ^ v_2394[v_2397 & 255] ^ v_2390[v_2401++];
                  var v_2405 = v_2391[v_2399 >>> 24] ^ v_2392[v_2400 >>> 16 & 255] ^ v_2393[v_2397 >>> 8 & 255] ^ v_2394[v_2398 & 255] ^ v_2390[v_2401++];
                  var v_2406 = v_2391[v_2400 >>> 24] ^ v_2392[v_2397 >>> 16 & 255] ^ v_2393[v_2398 >>> 8 & 255] ^ v_2394[v_2399 & 255] ^ v_2390[v_2401++];
                  v_2397 = v_2403;
                  v_2398 = v_2404;
                  v_2399 = v_2405;
                  v_2400 = v_2406;
                }
                var v_2403 = (v_2395[v_2397 >>> 24] << 24 | v_2395[v_2398 >>> 16 & 255] << 16 | v_2395[v_2399 >>> 8 & 255] << 8 | v_2395[v_2400 & 255]) ^ v_2390[v_2401++];
                var v_2404 = (v_2395[v_2398 >>> 24] << 24 | v_2395[v_2399 >>> 16 & 255] << 16 | v_2395[v_2400 >>> 8 & 255] << 8 | v_2395[v_2397 & 255]) ^ v_2390[v_2401++];
                var v_2405 = (v_2395[v_2399 >>> 24] << 24 | v_2395[v_2400 >>> 16 & 255] << 16 | v_2395[v_2397 >>> 8 & 255] << 8 | v_2395[v_2398 & 255]) ^ v_2390[v_2401++];
                var v_2406 = (v_2395[v_2400 >>> 24] << 24 | v_2395[v_2397 >>> 16 & 255] << 16 | v_2395[v_2398 >>> 8 & 255] << 8 | v_2395[v_2399 & 255]) ^ v_2390[v_2401++];
                v_2388[v_2389] = v_2403;
                v_2388[v_2389 + 1] = v_2404;
                v_2388[v_2389 + 2] = v_2405;
                v_2388[v_2389 + 3] = v_2406;
              },
              keySize: 8
            });
            v_2348.AES = v_2350._createHelper(v_2372);
          })();
          return v_2347.AES;
        });
      }
    });
    var v_2407 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(v_2408, v_2409) {
        "use strict";

        (function (v_2410, v_2411, v_2412) {
          if (typeof v_2408 === "object") {
            v_2409.exports = v_2408 = v_2411(v_1267(), v_1440(), v_1479(), v_1997(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], v_2411);
          } else {
            v_2411(v_2410.CryptoJS);
          }
        })(v_2408, function (v_2413) {
          (function () {
            var v_2414 = v_2413;
            var v_2415 = v_2414.lib;
            var v_2416 = v_2415.WordArray;
            var v_2417 = v_2415.BlockCipher;
            var v_2418 = v_2414.algo;
            var v_2419 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
            var v_2420 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
            var v_2421 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
            var v_2422 = [{
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
            var v_2423 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
            var v_2424 = v_2418.DES = v_2417.extend({
              _doReset: function () {
                var v_2425 = this._key;
                var v_2426 = v_2425.words;
                var v_2427 = [];
                for (var v_2428 = 0; v_2428 < 56; v_2428++) {
                  var v_2429 = v_2419[v_2428] - 1;
                  v_2427[v_2428] = v_2426[v_2429 >>> 5] >>> 31 - v_2429 % 32 & 1;
                }
                var v_2430 = this._subKeys = [];
                for (var v_2431 = 0; v_2431 < 16; v_2431++) {
                  var v_2432 = v_2430[v_2431] = [];
                  var v_2433 = v_2421[v_2431];
                  for (var v_2428 = 0; v_2428 < 24; v_2428++) {
                    v_2432[v_2428 / 6 | 0] |= v_2427[(v_2420[v_2428] - 1 + v_2433) % 28] << 31 - v_2428 % 6;
                    v_2432[4 + (v_2428 / 6 | 0)] |= v_2427[28 + (v_2420[v_2428 + 24] - 1 + v_2433) % 28] << 31 - v_2428 % 6;
                  }
                  v_2432[0] = v_2432[0] << 1 | v_2432[0] >>> 31;
                  for (var v_2428 = 1; v_2428 < 7; v_2428++) {
                    v_2432[v_2428] = v_2432[v_2428] >>> (v_2428 - 1) * 4 + 3;
                  }
                  v_2432[7] = v_2432[7] << 5 | v_2432[7] >>> 27;
                }
                var v_2434 = this._invSubKeys = [];
                for (var v_2428 = 0; v_2428 < 16; v_2428++) {
                  v_2434[v_2428] = v_2430[15 - v_2428];
                }
              },
              encryptBlock: function (v_2435, v_2436) {
                this._doCryptBlock(v_2435, v_2436, this._subKeys);
              },
              decryptBlock: function (v_2437, v_2438) {
                this._doCryptBlock(v_2437, v_2438, this._invSubKeys);
              },
              _doCryptBlock: function (v_2439, v_2440, v_2441) {
                this._lBlock = v_2439[v_2440];
                this._rBlock = v_2439[v_2440 + 1];
                v_2442.call(this, 4, 252645135);
                v_2442.call(this, 16, 65535);
                v_2443.call(this, 2, 858993459);
                v_2443.call(this, 8, 16711935);
                v_2442.call(this, 1, 1431655765);
                for (var v_2444 = 0; v_2444 < 16; v_2444++) {
                  var v_2445 = v_2441[v_2444];
                  var v_2446 = this._lBlock;
                  var v_2447 = this._rBlock;
                  var v_2448 = 0;
                  for (var v_2449 = 0; v_2449 < 8; v_2449++) {
                    v_2448 |= v_2422[v_2449][((v_2447 ^ v_2445[v_2449]) & v_2423[v_2449]) >>> 0];
                  }
                  this._lBlock = v_2447;
                  this._rBlock = v_2446 ^ v_2448;
                }
                var v_2450 = this._lBlock;
                this._lBlock = this._rBlock;
                this._rBlock = v_2450;
                v_2442.call(this, 1, 1431655765);
                v_2443.call(this, 8, 16711935);
                v_2443.call(this, 2, 858993459);
                v_2442.call(this, 16, 65535);
                v_2442.call(this, 4, 252645135);
                v_2439[v_2440] = this._lBlock;
                v_2439[v_2440 + 1] = this._rBlock;
              },
              keySize: 2,
              ivSize: 2,
              blockSize: 2
            });
            function v_2442(v_2451, v_2452) {
              var v_2453 = (this._lBlock >>> v_2451 ^ this._rBlock) & v_2452;
              this._rBlock ^= v_2453;
              this._lBlock ^= v_2453 << v_2451;
            }
            function v_2443(v_2454, v_2455) {
              var v_2456 = (this._rBlock >>> v_2454 ^ this._lBlock) & v_2455;
              this._lBlock ^= v_2456;
              this._rBlock ^= v_2456 << v_2454;
            }
            v_2414.DES = v_2417._createHelper(v_2424);
            var v_2457 = v_2418.TripleDES = v_2417.extend({
              _doReset: function () {
                var v_2458 = this._key;
                var v_2459 = v_2458.words;
                this._des1 = v_2424.createEncryptor(v_2416.create(v_2459.slice(0, 2)));
                this._des2 = v_2424.createEncryptor(v_2416.create(v_2459.slice(2, 4)));
                this._des3 = v_2424.createEncryptor(v_2416.create(v_2459.slice(4, 6)));
              },
              encryptBlock: function (v_2460, v_2461) {
                this._des1.encryptBlock(v_2460, v_2461);
                this._des2.decryptBlock(v_2460, v_2461);
                this._des3.encryptBlock(v_2460, v_2461);
              },
              decryptBlock: function (v_2462, v_2463) {
                this._des3.decryptBlock(v_2462, v_2463);
                this._des2.encryptBlock(v_2462, v_2463);
                this._des1.decryptBlock(v_2462, v_2463);
              },
              keySize: 6,
              ivSize: 2,
              blockSize: 2
            });
            v_2414.TripleDES = v_2417._createHelper(v_2457);
          })();
          return v_2413.TripleDES;
        });
      }
    });
    var v_2464 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(v_2465, v_2466) {
        "use strict";

        (function (v_2467, v_2468, v_2469) {
          if (typeof v_2465 === "object") {
            v_2466.exports = v_2465 = v_2468(v_1267(), v_1440(), v_1479(), v_1997(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], v_2468);
          } else {
            v_2468(v_2467.CryptoJS);
          }
        })(v_2465, function (v_2470) {
          (function () {
            var v_2471 = v_2470;
            var v_2472 = v_2471.lib;
            var v_2473 = v_2472.StreamCipher;
            var v_2474 = v_2471.algo;
            var v_2475 = v_2474.RC4 = v_2473.extend({
              _doReset: function () {
                var v_2476 = this._key;
                var v_2477 = v_2476.words;
                var v_2478 = v_2476.sigBytes;
                var v_2479 = this._S = [];
                for (var v_2480 = 0; v_2480 < 256; v_2480++) {
                  v_2479[v_2480] = v_2480;
                }
                for (var v_2480 = 0, v_2481 = 0; v_2480 < 256; v_2480++) {
                  var v_2482 = v_2480 % v_2478;
                  var v_2483 = v_2477[v_2482 >>> 2] >>> 24 - v_2482 % 4 * 8 & 255;
                  v_2481 = (v_2481 + v_2479[v_2480] + v_2483) % 256;
                  var v_2484 = v_2479[v_2480];
                  v_2479[v_2480] = v_2479[v_2481];
                  v_2479[v_2481] = v_2484;
                }
                this._i = this._j = 0;
              },
              _doProcessBlock: function (v_2485, v_2486) {
                v_2485[v_2486] ^= v_2487.call(this);
              },
              keySize: 8,
              ivSize: 0
            });
            function v_2487() {
              var v_2488 = this._S;
              var v_2489 = this._i;
              var v_2490 = this._j;
              var v_2491 = 0;
              for (var v_2492 = 0; v_2492 < 4; v_2492++) {
                v_2489 = (v_2489 + 1) % 256;
                v_2490 = (v_2490 + v_2488[v_2489]) % 256;
                var v_2493 = v_2488[v_2489];
                v_2488[v_2489] = v_2488[v_2490];
                v_2488[v_2490] = v_2493;
                v_2491 |= v_2488[(v_2488[v_2489] + v_2488[v_2490]) % 256] << 24 - v_2492 * 8;
              }
              this._i = v_2489;
              this._j = v_2490;
              return v_2491;
            }
            v_2471.RC4 = v_2473._createHelper(v_2475);
            var v_2494 = v_2474.RC4Drop = v_2475.extend({
              cfg: v_2475.cfg.extend({
                drop: 192
              }),
              _doReset: function () {
                v_2475._doReset.call(this);
                for (var v_2495 = this.cfg.drop; v_2495 > 0; v_2495--) {
                  v_2487.call(this);
                }
              }
            });
            v_2471.RC4Drop = v_2473._createHelper(v_2494);
          })();
          return v_2470.RC4;
        });
      }
    });
    var v_2496 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(v_2497, v_2498) {
        "use strict";

        (function (v_2499, v_2500, v_2501) {
          if (typeof v_2497 === "object") {
            v_2498.exports = v_2497 = v_2500(v_1267(), v_1440(), v_1479(), v_1997(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], v_2500);
          } else {
            v_2500(v_2499.CryptoJS);
          }
        })(v_2497, function (v_2502) {
          (function () {
            var v_2503 = v_2502;
            var v_2504 = v_2503.lib;
            var v_2505 = v_2504.StreamCipher;
            var v_2506 = v_2503.algo;
            var v_2507 = [];
            var v_2508 = [];
            var v_2509 = [];
            var v_2510 = v_2506.Rabbit = v_2505.extend({
              _doReset: function () {
                var v_2511 = this._key.words;
                var v_2512 = this.cfg.iv;
                for (var v_2513 = 0; v_2513 < 4; v_2513++) {
                  v_2511[v_2513] = (v_2511[v_2513] << 8 | v_2511[v_2513] >>> 24) & 16711935 | (v_2511[v_2513] << 24 | v_2511[v_2513] >>> 8) & -16711936;
                }
                var v_2514 = this._X = [v_2511[0], v_2511[3] << 16 | v_2511[2] >>> 16, v_2511[1], v_2511[0] << 16 | v_2511[3] >>> 16, v_2511[2], v_2511[1] << 16 | v_2511[0] >>> 16, v_2511[3], v_2511[2] << 16 | v_2511[1] >>> 16];
                var v_2515 = this._C = [v_2511[2] << 16 | v_2511[2] >>> 16, v_2511[0] & -65536 | v_2511[1] & 65535, v_2511[3] << 16 | v_2511[3] >>> 16, v_2511[1] & -65536 | v_2511[2] & 65535, v_2511[0] << 16 | v_2511[0] >>> 16, v_2511[2] & -65536 | v_2511[3] & 65535, v_2511[1] << 16 | v_2511[1] >>> 16, v_2511[3] & -65536 | v_2511[0] & 65535];
                this._b = 0;
                for (var v_2513 = 0; v_2513 < 4; v_2513++) {
                  v_2516.call(this);
                }
                for (var v_2513 = 0; v_2513 < 8; v_2513++) {
                  v_2515[v_2513] ^= v_2514[v_2513 + 4 & 7];
                }
                if (v_2512) {
                  var v_2517 = v_2512.words;
                  var v_2518 = v_2517[0];
                  var v_2519 = v_2517[1];
                  var v_2520 = (v_2518 << 8 | v_2518 >>> 24) & 16711935 | (v_2518 << 24 | v_2518 >>> 8) & -16711936;
                  var v_2521 = (v_2519 << 8 | v_2519 >>> 24) & 16711935 | (v_2519 << 24 | v_2519 >>> 8) & -16711936;
                  var v_2522 = v_2520 >>> 16 | v_2521 & -65536;
                  var v_2523 = v_2521 << 16 | v_2520 & 65535;
                  v_2515[0] ^= v_2520;
                  v_2515[1] ^= v_2522;
                  v_2515[2] ^= v_2521;
                  v_2515[3] ^= v_2523;
                  v_2515[4] ^= v_2520;
                  v_2515[5] ^= v_2522;
                  v_2515[6] ^= v_2521;
                  v_2515[7] ^= v_2523;
                  for (var v_2513 = 0; v_2513 < 4; v_2513++) {
                    v_2516.call(this);
                  }
                }
              },
              _doProcessBlock: function (v_2524, v_2525) {
                var v_2526 = this._X;
                v_2516.call(this);
                v_2507[0] = v_2526[0] ^ v_2526[5] >>> 16 ^ v_2526[3] << 16;
                v_2507[1] = v_2526[2] ^ v_2526[7] >>> 16 ^ v_2526[5] << 16;
                v_2507[2] = v_2526[4] ^ v_2526[1] >>> 16 ^ v_2526[7] << 16;
                v_2507[3] = v_2526[6] ^ v_2526[3] >>> 16 ^ v_2526[1] << 16;
                for (var v_2527 = 0; v_2527 < 4; v_2527++) {
                  v_2507[v_2527] = (v_2507[v_2527] << 8 | v_2507[v_2527] >>> 24) & 16711935 | (v_2507[v_2527] << 24 | v_2507[v_2527] >>> 8) & -16711936;
                  v_2524[v_2525 + v_2527] ^= v_2507[v_2527];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function v_2516() {
              var v_2528 = this._X;
              var v_2529 = this._C;
              for (var v_2530 = 0; v_2530 < 8; v_2530++) {
                v_2508[v_2530] = v_2529[v_2530];
              }
              v_2529[0] = v_2529[0] + 1295307597 + this._b | 0;
              v_2529[1] = v_2529[1] + 3545052371 + (v_2529[0] >>> 0 < v_2508[0] >>> 0 ? 1 : 0) | 0;
              v_2529[2] = v_2529[2] + 886263092 + (v_2529[1] >>> 0 < v_2508[1] >>> 0 ? 1 : 0) | 0;
              v_2529[3] = v_2529[3] + 1295307597 + (v_2529[2] >>> 0 < v_2508[2] >>> 0 ? 1 : 0) | 0;
              v_2529[4] = v_2529[4] + 3545052371 + (v_2529[3] >>> 0 < v_2508[3] >>> 0 ? 1 : 0) | 0;
              v_2529[5] = v_2529[5] + 886263092 + (v_2529[4] >>> 0 < v_2508[4] >>> 0 ? 1 : 0) | 0;
              v_2529[6] = v_2529[6] + 1295307597 + (v_2529[5] >>> 0 < v_2508[5] >>> 0 ? 1 : 0) | 0;
              v_2529[7] = v_2529[7] + 3545052371 + (v_2529[6] >>> 0 < v_2508[6] >>> 0 ? 1 : 0) | 0;
              this._b = v_2529[7] >>> 0 < v_2508[7] >>> 0 ? 1 : 0;
              for (var v_2530 = 0; v_2530 < 8; v_2530++) {
                var v_2531 = v_2528[v_2530] + v_2529[v_2530];
                var v_2532 = v_2531 & 65535;
                var v_2533 = v_2531 >>> 16;
                var v_2534 = ((v_2532 * v_2532 >>> 17) + v_2532 * v_2533 >>> 15) + v_2533 * v_2533;
                var v_2535 = ((v_2531 & -65536) * v_2531 | 0) + ((v_2531 & 65535) * v_2531 | 0);
                v_2509[v_2530] = v_2534 ^ v_2535;
              }
              v_2528[0] = v_2509[0] + (v_2509[7] << 16 | v_2509[7] >>> 16) + (v_2509[6] << 16 | v_2509[6] >>> 16) | 0;
              v_2528[1] = v_2509[1] + (v_2509[0] << 8 | v_2509[0] >>> 24) + v_2509[7] | 0;
              v_2528[2] = v_2509[2] + (v_2509[1] << 16 | v_2509[1] >>> 16) + (v_2509[0] << 16 | v_2509[0] >>> 16) | 0;
              v_2528[3] = v_2509[3] + (v_2509[2] << 8 | v_2509[2] >>> 24) + v_2509[1] | 0;
              v_2528[4] = v_2509[4] + (v_2509[3] << 16 | v_2509[3] >>> 16) + (v_2509[2] << 16 | v_2509[2] >>> 16) | 0;
              v_2528[5] = v_2509[5] + (v_2509[4] << 8 | v_2509[4] >>> 24) + v_2509[3] | 0;
              v_2528[6] = v_2509[6] + (v_2509[5] << 16 | v_2509[5] >>> 16) + (v_2509[4] << 16 | v_2509[4] >>> 16) | 0;
              v_2528[7] = v_2509[7] + (v_2509[6] << 8 | v_2509[6] >>> 24) + v_2509[5] | 0;
            }
            v_2503.Rabbit = v_2505._createHelper(v_2510);
          })();
          return v_2502.Rabbit;
        });
      }
    });
    var v_2536 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(v_2537, v_2538) {
        "use strict";

        (function (v_2539, v_2540, v_2541) {
          if (typeof v_2537 === "object") {
            v_2538.exports = v_2537 = v_2540(v_1267(), v_1440(), v_1479(), v_1997(), v_2026());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], v_2540);
          } else {
            v_2540(v_2539.CryptoJS);
          }
        })(v_2537, function (v_2542) {
          (function () {
            var v_2543 = v_2542;
            var v_2544 = v_2543.lib;
            var v_2545 = v_2544.StreamCipher;
            var v_2546 = v_2543.algo;
            var v_2547 = [];
            var v_2548 = [];
            var v_2549 = [];
            var v_2550 = v_2546.RabbitLegacy = v_2545.extend({
              _doReset: function () {
                var v_2551 = this._key.words;
                var v_2552 = this.cfg.iv;
                var v_2553 = this._X = [v_2551[0], v_2551[3] << 16 | v_2551[2] >>> 16, v_2551[1], v_2551[0] << 16 | v_2551[3] >>> 16, v_2551[2], v_2551[1] << 16 | v_2551[0] >>> 16, v_2551[3], v_2551[2] << 16 | v_2551[1] >>> 16];
                var v_2554 = this._C = [v_2551[2] << 16 | v_2551[2] >>> 16, v_2551[0] & -65536 | v_2551[1] & 65535, v_2551[3] << 16 | v_2551[3] >>> 16, v_2551[1] & -65536 | v_2551[2] & 65535, v_2551[0] << 16 | v_2551[0] >>> 16, v_2551[2] & -65536 | v_2551[3] & 65535, v_2551[1] << 16 | v_2551[1] >>> 16, v_2551[3] & -65536 | v_2551[0] & 65535];
                this._b = 0;
                for (var v_2555 = 0; v_2555 < 4; v_2555++) {
                  v_2556.call(this);
                }
                for (var v_2555 = 0; v_2555 < 8; v_2555++) {
                  v_2554[v_2555] ^= v_2553[v_2555 + 4 & 7];
                }
                if (v_2552) {
                  var v_2557 = v_2552.words;
                  var v_2558 = v_2557[0];
                  var v_2559 = v_2557[1];
                  var v_2560 = (v_2558 << 8 | v_2558 >>> 24) & 16711935 | (v_2558 << 24 | v_2558 >>> 8) & -16711936;
                  var v_2561 = (v_2559 << 8 | v_2559 >>> 24) & 16711935 | (v_2559 << 24 | v_2559 >>> 8) & -16711936;
                  var v_2562 = v_2560 >>> 16 | v_2561 & -65536;
                  var v_2563 = v_2561 << 16 | v_2560 & 65535;
                  v_2554[0] ^= v_2560;
                  v_2554[1] ^= v_2562;
                  v_2554[2] ^= v_2561;
                  v_2554[3] ^= v_2563;
                  v_2554[4] ^= v_2560;
                  v_2554[5] ^= v_2562;
                  v_2554[6] ^= v_2561;
                  v_2554[7] ^= v_2563;
                  for (var v_2555 = 0; v_2555 < 4; v_2555++) {
                    v_2556.call(this);
                  }
                }
              },
              _doProcessBlock: function (v_2564, v_2565) {
                var v_2566 = this._X;
                v_2556.call(this);
                v_2547[0] = v_2566[0] ^ v_2566[5] >>> 16 ^ v_2566[3] << 16;
                v_2547[1] = v_2566[2] ^ v_2566[7] >>> 16 ^ v_2566[5] << 16;
                v_2547[2] = v_2566[4] ^ v_2566[1] >>> 16 ^ v_2566[7] << 16;
                v_2547[3] = v_2566[6] ^ v_2566[3] >>> 16 ^ v_2566[1] << 16;
                for (var v_2567 = 0; v_2567 < 4; v_2567++) {
                  v_2547[v_2567] = (v_2547[v_2567] << 8 | v_2547[v_2567] >>> 24) & 16711935 | (v_2547[v_2567] << 24 | v_2547[v_2567] >>> 8) & -16711936;
                  v_2564[v_2565 + v_2567] ^= v_2547[v_2567];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function v_2556() {
              var v_2568 = this._X;
              var v_2569 = this._C;
              for (var v_2570 = 0; v_2570 < 8; v_2570++) {
                v_2548[v_2570] = v_2569[v_2570];
              }
              v_2569[0] = v_2569[0] + 1295307597 + this._b | 0;
              v_2569[1] = v_2569[1] + 3545052371 + (v_2569[0] >>> 0 < v_2548[0] >>> 0 ? 1 : 0) | 0;
              v_2569[2] = v_2569[2] + 886263092 + (v_2569[1] >>> 0 < v_2548[1] >>> 0 ? 1 : 0) | 0;
              v_2569[3] = v_2569[3] + 1295307597 + (v_2569[2] >>> 0 < v_2548[2] >>> 0 ? 1 : 0) | 0;
              v_2569[4] = v_2569[4] + 3545052371 + (v_2569[3] >>> 0 < v_2548[3] >>> 0 ? 1 : 0) | 0;
              v_2569[5] = v_2569[5] + 886263092 + (v_2569[4] >>> 0 < v_2548[4] >>> 0 ? 1 : 0) | 0;
              v_2569[6] = v_2569[6] + 1295307597 + (v_2569[5] >>> 0 < v_2548[5] >>> 0 ? 1 : 0) | 0;
              v_2569[7] = v_2569[7] + 3545052371 + (v_2569[6] >>> 0 < v_2548[6] >>> 0 ? 1 : 0) | 0;
              this._b = v_2569[7] >>> 0 < v_2548[7] >>> 0 ? 1 : 0;
              for (var v_2570 = 0; v_2570 < 8; v_2570++) {
                var v_2571 = v_2568[v_2570] + v_2569[v_2570];
                var v_2572 = v_2571 & 65535;
                var v_2573 = v_2571 >>> 16;
                var v_2574 = ((v_2572 * v_2572 >>> 17) + v_2572 * v_2573 >>> 15) + v_2573 * v_2573;
                var v_2575 = ((v_2571 & -65536) * v_2571 | 0) + ((v_2571 & 65535) * v_2571 | 0);
                v_2549[v_2570] = v_2574 ^ v_2575;
              }
              v_2568[0] = v_2549[0] + (v_2549[7] << 16 | v_2549[7] >>> 16) + (v_2549[6] << 16 | v_2549[6] >>> 16) | 0;
              v_2568[1] = v_2549[1] + (v_2549[0] << 8 | v_2549[0] >>> 24) + v_2549[7] | 0;
              v_2568[2] = v_2549[2] + (v_2549[1] << 16 | v_2549[1] >>> 16) + (v_2549[0] << 16 | v_2549[0] >>> 16) | 0;
              v_2568[3] = v_2549[3] + (v_2549[2] << 8 | v_2549[2] >>> 24) + v_2549[1] | 0;
              v_2568[4] = v_2549[4] + (v_2549[3] << 16 | v_2549[3] >>> 16) + (v_2549[2] << 16 | v_2549[2] >>> 16) | 0;
              v_2568[5] = v_2549[5] + (v_2549[4] << 8 | v_2549[4] >>> 24) + v_2549[3] | 0;
              v_2568[6] = v_2549[6] + (v_2549[5] << 16 | v_2549[5] >>> 16) + (v_2549[4] << 16 | v_2549[4] >>> 16) | 0;
              v_2568[7] = v_2549[7] + (v_2549[6] << 8 | v_2549[6] >>> 24) + v_2549[5] | 0;
            }
            v_2543.RabbitLegacy = v_2545._createHelper(v_2550);
          })();
          return v_2542.RabbitLegacy;
        });
      }
    });
    var v_2576 = v_1222({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(v_2577, v_2578) {
        "use strict";

        (function (v_2579, v_2580, v_2581) {
          if (typeof v_2577 === "object") {
            v_2578.exports = v_2577 = v_2580(v_1267(), v_1364(), v_1392(), v_1407(), v_1440(), v_1479(), v_1567(), v_1596(), v_1647(), v_1661(), v_1764(), v_1779(), v_1858(), v_1932(), v_1960(), v_1997(), v_2026(), v_2169(), v_2194(), v_2211(), v_2235(), v_2251(), v_2263(), v_2278(), v_2291(), v_2301(), v_2314(), v_2322(), v_2341(), v_2407(), v_2464(), v_2496(), v_2536());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], v_2580);
          } else {
            v_2579.CryptoJS = v_2580(v_2579.CryptoJS);
          }
        })(v_2577, function (v_2582) {
          return v_2582;
        });
      }
    });
    var v_2583 = {
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
    var v_2584 = {};
    var v_2585 = {
      MathUtils: () => v_2586
    };
    v_1226(v_2584, v_2585);
    var v_2587;
    var v_2588;
    var v_2589 = class v_2590 {
      constructor(v_2591, v_2592, v_2593) {
        v_1248(this, v_2587);
        const v_2594 = v_1263(this, v_2587, v_2588).call(this, v_2591, v_2592, v_2593);
        this.x = v_2594.x;
        this.y = v_2594.y;
        this.z = v_2594.z;
      }
      equals(v_2595, v_2596, v_2597) {
        const v_2598 = v_1263(this, v_2587, v_2588).call(this, v_2595, v_2596, v_2597);
        return this.x === v_2598.x && this.y === v_2598.y && this.z === v_2598.z;
      }
      add(v_2599, v_2600, v_2601, v_2602) {
        let v_2603 = v_1263(this, v_2587, v_2588).call(this, v_2599, v_2600, v_2601);
        this.x += v_2602 ? v_2603.x * v_2602 : v_2603.x;
        this.y += v_2602 ? v_2603.y * v_2602 : v_2603.y;
        this.z += v_2602 ? v_2603.z * v_2602 : v_2603.z;
        return this;
      }
      addScalar(v_2604) {
        if (typeof v_2604 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x += v_2604;
        this.y += v_2604;
        this.z += v_2604;
        return this;
      }
      sub(v_2605, v_2606, v_2607, v_2608) {
        const v_2609 = v_1263(this, v_2587, v_2588).call(this, v_2605, v_2606, v_2607);
        this.x -= v_2608 ? v_2609.x * v_2608 : v_2609.x;
        this.y -= v_2608 ? v_2609.y * v_2608 : v_2609.y;
        this.z -= v_2608 ? v_2609.z * v_2608 : v_2609.z;
        return this;
      }
      subScalar(v_2610) {
        if (typeof v_2610 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x -= v_2610;
        this.y -= v_2610;
        this.z -= v_2610;
        return this;
      }
      multiply(v_2611, v_2612, v_2613) {
        const v_2614 = v_1263(this, v_2587, v_2588).call(this, v_2611, v_2612, v_2613);
        this.x *= v_2614.x;
        this.y *= v_2614.y;
        this.z *= v_2614.z;
        return this;
      }
      multiplyScalar(v_2615) {
        if (typeof v_2615 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x *= v_2615;
        this.y *= v_2615;
        this.z *= v_2615;
        return this;
      }
      divide(v_2616, v_2617, v_2618) {
        const v_2619 = v_1263(this, v_2587, v_2588).call(this, v_2616, v_2617, v_2618);
        this.x /= v_2619.x;
        this.y /= v_2619.y;
        this.z /= v_2619.z;
        return this;
      }
      divideScalar(v_2620) {
        if (typeof v_2620 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x /= v_2620;
        this.y /= v_2620;
        this.z /= v_2620;
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
      getCenter(v_2621, v_2622, v_2623) {
        const v_2624 = v_1263(this, v_2587, v_2588).call(this, v_2621, v_2622, v_2623);
        return new v_2590((this.x + v_2624.x) / 2, (this.y + v_2624.y) / 2, (this.z + v_2624.z) / 2);
      }
      getDistance(v_2625, v_2626, v_2627) {
        const [v_2628, v_2629, v_2630] = v_2625 instanceof Array ? v_2625 : typeof v_2625 === "object" ? [v_2625.x, v_2625.y, v_2625.z] : [v_2625, v_2626, v_2627];
        if (typeof v_2628 !== "number" || typeof v_2629 !== "number" || typeof v_2630 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [v_2631, v_2632, v_2633] = [this.x - v_2628, this.y - v_2629, this.z - v_2630];
        return Math.sqrt(v_2631 * v_2631 + v_2632 * v_2632 + v_2633 * v_2633);
      }
      toArray(v_2634) {
        if (typeof v_2634 === "number") {
          return [parseFloat(this.x.toFixed(v_2634)), parseFloat(this.y.toFixed(v_2634)), parseFloat(this.z.toFixed(v_2634))];
        }
        return [this.x, this.y, this.z];
      }
      toJSON(v_2635) {
        if (typeof v_2635 === "number") {
          return {
            x: parseFloat(this.x.toFixed(v_2635)),
            y: parseFloat(this.y.toFixed(v_2635)),
            z: parseFloat(this.z.toFixed(v_2635))
          };
        }
        var v_2636 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return v_2636;
      }
      toString(v_2637) {
        return JSON.stringify(this.toJSON(v_2637));
      }
    };
    v_2587 = /* @__PURE__ */new WeakSet();
    v_2588 = function (v_2638, v_2639, v_2640) {
      let v_2641 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (v_2638 instanceof v_2589) {
        v_2641 = v_2638;
      } else if (v_2638 instanceof Array) {
        var v_2642 = {
          x: v_2638[0],
          y: v_2638[1],
          z: v_2638[2]
        };
        v_2641 = v_2642;
      } else if (typeof v_2638 === "object") {
        v_2641 = v_2638;
      } else {
        var v_2643 = {
          x: v_2638,
          y: v_2639,
          z: v_2640
        };
        v_2641 = v_2643;
      }
      if (typeof v_2641.x !== "number" || typeof v_2641.y !== "number" || typeof v_2641.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return v_2641;
    };
    var v_2644 = v_2589;
    var v_2645;
    var v_2646;
    var v_2647 = class {
      constructor(v_2648) {
        v_1248(this, v_2645, undefined);
        v_1248(this, v_2646, undefined);
        v_1252(this, v_2646, v_2648 ?? 5);
        v_1252(this, v_2645, /* @__PURE__ */new Map());
      }
      setTTL(v_2649) {
        v_1252(this, v_2646, v_2649);
      }
      set(v_2650, v_2651, v_2652) {
        v_1244(this, v_2645).set(v_2650, {
          value: v_2651,
          expiration: Date.now() + (v_2652 ?? v_1244(this, v_2646)) * 1000
        });
        return this;
      }
      get(v_2653, v_2654 = false) {
        const v_2655 = v_1244(this, v_2645).get(v_2653);
        const v_2656 = v_2655 ? v_2654 ? true : v_2655.expiration > Date.now() : false;
        if (!v_2655 || !v_2656) {
          if (v_2655) {
            v_1244(this, v_2645).delete(v_2653);
          }
          return;
        }
        return v_2655.value;
      }
      has(v_2657, v_2658 = false) {
        const v_2659 = v_1244(this, v_2645).get(v_2657);
        const v_2660 = v_2659 ? v_2658 ? true : v_2659.expiration > Date.now() : false;
        if (v_2659 && !v_2660) {
          v_1244(this, v_2645).delete(v_2657);
        }
        return v_2660;
      }
      delete(v_2661) {
        return v_1244(this, v_2645).delete(v_2661);
      }
      clear() {
        v_1244(this, v_2645).clear();
      }
      values(v_2662 = false) {
        const v_2663 = [];
        const v_2664 = Date.now();
        for (const v_2665 of v_1244(this, v_2645).values()) {
          if (v_2662 || v_2665.expiration > v_2664) {
            v_2663.push(v_2665.value);
          }
        }
        return v_2663;
      }
      keys(v_2666 = false) {
        const v_2667 = [];
        const v_2668 = Date.now();
        for (const [v_2669, v_2670] of v_1244(this, v_2645).entries()) {
          if (v_2666 || v_2670.expiration > v_2668) {
            v_2667.push(v_2669);
          }
        }
        return v_2667;
      }
      entries(v_2671 = false) {
        const v_2672 = [];
        const v_2673 = Date.now();
        for (const [v_2674, v_2675] of v_1244(this, v_2645).entries()) {
          if (v_2671 || v_2675.expiration > v_2673) {
            v_2672.push([v_2674, v_2675.value]);
          }
        }
        return v_2672;
      }
    };
    v_2645 = /* @__PURE__ */new WeakMap();
    v_2646 = /* @__PURE__ */new WeakMap();
    var v_2676;
    var v_2677;
    var v_2678;
    var v_2679;
    var v_2680;
    var v_2681;
    var v_2682;
    var v_2683;
    var v_2684;
    var v_2685;
    var v_2686;
    var v_2687;
    var v_2688;
    var v_2689;
    var v_2690;
    var v_2691;
    var v_2692;
    var v_2693;
    var v_2694;
    var v_2695;
    var v_2696;
    var v_2697;
    var v_2698 = class {
      constructor(v_2699, v_2700, v_2701, v_2702, v_2703, v_2704 = 30, v_2705 = false) {
        v_1248(this, v_2688);
        v_1248(this, v_2690);
        v_1248(this, v_2692);
        v_1248(this, v_2694);
        v_1248(this, v_2696);
        v_1248(this, v_2676, undefined);
        v_1248(this, v_2677, undefined);
        v_1248(this, v_2678, undefined);
        v_1248(this, v_2679, undefined);
        v_1248(this, v_2680, undefined);
        v_1248(this, v_2681, undefined);
        v_1248(this, v_2682, undefined);
        v_1248(this, v_2683, undefined);
        v_1248(this, v_2684, undefined);
        v_1248(this, v_2685, undefined);
        v_1248(this, v_2686, undefined);
        v_1248(this, v_2687, undefined);
        v_1252(this, v_2676, v_2699);
        v_1252(this, v_2677, v_2702);
        v_1252(this, v_2678, v_2703);
        v_1252(this, v_2679, v_2700);
        v_1252(this, v_2680, v_2701);
        v_1252(this, v_2681, v_2705);
        v_1252(this, v_2682, v_2704);
        v_1252(this, v_2684, v_1244(this, v_2677).x / v_2704);
        v_1252(this, v_2685, v_1244(this, v_2677).y / v_2704);
        v_1252(this, v_2683, v_1244(this, v_2684) * v_1244(this, v_2685));
        v_1252(this, v_2686, v_1263(this, v_2688, v_2689).call(this, v_1244(this, v_2676), v_1244(this, v_2682), v_1244(this, v_2684), v_1244(this, v_2685), v_1244(this, v_2681)));
        v_1252(this, v_2687, v_1263(this, v_2690, v_2691).call(this, v_1244(this, v_2686), v_1244(this, v_2683)));
      }
      get cells() {
        return v_1244(this, v_2686);
      }
      get cellSize() {
        return v_1244(this, v_2682);
      }
      get cellWidth() {
        return v_1244(this, v_2684);
      }
      get cellHeight() {
        return v_1244(this, v_2685);
      }
      get gridArea() {
        return v_1244(this, v_2687);
      }
      get gridCoverage() {
        return v_1244(this, v_2687) / v_1244(this, v_2678) * 100;
      }
      isPointInsideGrid(v_2706) {
        var v_2707;
        const v_2708 = v_2706.x - v_1244(this, v_2679).x;
        const v_2709 = v_2706.y - v_1244(this, v_2679).y;
        const v_2710 = Math.floor(v_2708 * v_1244(this, v_2682) / v_1244(this, v_2677).x);
        const v_2711 = Math.floor(v_2709 * v_1244(this, v_2682) / v_1244(this, v_2677).y);
        let v_2712 = (v_2707 = v_1244(this, v_2686)[v_2710]) == null ? undefined : v_2707[v_2711];
        if (!v_2712 && v_1244(this, v_2681)) {
          v_2712 = v_1263(this, v_2694, v_2695).call(this, v_2710, v_2711, v_1244(this, v_2684), v_1244(this, v_2685), v_1244(this, v_2676));
          v_1244(this, v_2686)[v_2710][v_2711] = v_2712;
          if (!v_2712) {
            return false;
          }
          v_1252(this, v_2687, v_1244(this, v_2687) + v_1244(this, v_2683));
        }
        return v_2712 ?? false;
      }
    };
    v_2676 = /* @__PURE__ */new WeakMap();
    v_2677 = /* @__PURE__ */new WeakMap();
    v_2678 = /* @__PURE__ */new WeakMap();
    v_2679 = /* @__PURE__ */new WeakMap();
    v_2680 = /* @__PURE__ */new WeakMap();
    v_2681 = /* @__PURE__ */new WeakMap();
    v_2682 = /* @__PURE__ */new WeakMap();
    v_2683 = /* @__PURE__ */new WeakMap();
    v_2684 = /* @__PURE__ */new WeakMap();
    v_2685 = /* @__PURE__ */new WeakMap();
    v_2686 = /* @__PURE__ */new WeakMap();
    v_2687 = /* @__PURE__ */new WeakMap();
    v_2688 = /* @__PURE__ */new WeakSet();
    v_2689 = function (v_2713, v_2714, v_2715, v_2716, v_2717) {
      const v_2718 = {};
      for (let v_2719 = 0; v_2719 < v_2714; v_2719++) {
        v_2718[v_2719] = {};
        if (v_2717) {
          continue;
        }
        for (let v_2720 = 0; v_2720 < v_2714; v_2720++) {
          const v_2721 = v_1263(this, v_2694, v_2695).call(this, v_2719, v_2720, v_2715, v_2716, v_2713);
          if (!v_2721) {
            continue;
          }
          v_2718[v_2719][v_2720] = true;
        }
      }
      return v_2718;
    };
    v_2690 = /* @__PURE__ */new WeakSet();
    v_2691 = function (v_2722, v_2723) {
      let v_2724 = 0;
      for (const v_2725 in v_2722) {
        for (const v_2726 in v_2722[v_2725]) {
          v_2724 += v_2723;
        }
      }
      return v_2724;
    };
    v_2692 = /* @__PURE__ */new WeakSet();
    v_2693 = function (v_2727, v_2728, v_2729, v_2730) {
      const v_2731 = [];
      const v_2732 = v_2727 * v_2729 + v_1244(this, v_2679).x;
      const v_2733 = v_2728 * v_2730 + v_1244(this, v_2679).y;
      v_2731.push(new v_2734(v_2732, v_2733));
      v_2731.push(new v_2734(v_2732 + v_2729, v_2733));
      v_2731.push(new v_2734(v_2732 + v_2729, v_2733 + v_2730));
      v_2731.push(new v_2734(v_2732, v_2733 + v_2730));
      return v_2731;
    };
    v_2694 = /* @__PURE__ */new WeakSet();
    v_2695 = function (v_2735, v_2736, v_2737, v_2738, v_2739) {
      const v_2740 = v_1263(this, v_2692, v_2693).call(this, v_2735, v_2736, v_2737, v_2738);
      let v_2741 = false;
      for (const v_2742 of v_2740) {
        const v_2743 = v_2744.MathUtils.windingNumber(v_2742, v_2739);
        if (v_2743 !== 0) {
          v_2741 = true;
          break;
        }
      }
      if (!v_2741) {
        return false;
      }
      for (let v_2745 = 0; v_2745 < v_2740.length; v_2745++) {
        const v_2746 = v_2740[v_2745];
        const v_2747 = v_2740[(v_2745 + 1) % v_2740.length];
        for (let v_2748 = 0; v_2748 < v_2739.length; v_2748++) {
          const v_2749 = v_2739[v_2748];
          const v_2750 = v_2739[(v_2748 + 1) % v_2739.length];
          if (v_1263(this, v_2696, v_2697).call(this, v_2746, v_2747, v_2749, v_2750)) {
            return false;
          }
        }
      }
      return true;
    };
    v_2696 = /* @__PURE__ */new WeakSet();
    v_2697 = function (v_2751, v_2752, v_2753, v_2754) {
      const v_2755 = (v_2752.x - v_2751.x) * (v_2754.y - v_2753.y) - (v_2752.y - v_2751.y) * (v_2754.x - v_2753.x);
      const v_2756 = (v_2751.y - v_2753.y) * (v_2754.x - v_2753.x) - (v_2751.x - v_2753.x) * (v_2754.y - v_2753.y);
      const v_2757 = (v_2751.y - v_2753.y) * (v_2752.x - v_2751.x) - (v_2751.x - v_2753.x) * (v_2752.y - v_2751.y);
      if (v_2755 === 0) {
        return v_2756 === 0 && v_2757 === 0;
      }
      const v_2758 = v_2756 / v_2755;
      const v_2759 = v_2757 / v_2755;
      return v_2758 >= 0 && v_2758 <= 1 && v_2759 >= 0 && v_2759 <= 1;
    };
    var v_2760;
    var v_2761;
    var v_2762;
    var v_2763;
    var v_2764;
    var v_2765;
    var v_2766;
    var v_2767;
    var v_2768;
    var v_2769;
    var v_2770;
    var v_2771;
    var v_2772;
    var v_2773;
    var v_2774;
    var v_2775;
    var v_2776;
    var v_2777;
    var v_2778 = class {
      constructor(v_2779, v_2780 = {}, v_2781 = {}) {
        v_1248(this, v_2768);
        v_1248(this, v_2770);
        v_1248(this, v_2772);
        v_1248(this, v_2774);
        v_1248(this, v_2776);
        v_1248(this, v_2760, undefined);
        v_1248(this, v_2761, undefined);
        v_1248(this, v_2762, undefined);
        v_1248(this, v_2763, undefined);
        v_1248(this, v_2764, undefined);
        v_1248(this, v_2765, undefined);
        v_1248(this, v_2766, undefined);
        v_1248(this, v_2767, undefined);
        v_1252(this, v_2760, v_2744.getUUID());
        v_1252(this, v_2761, v_2779);
        v_1252(this, v_2762, v_1263(this, v_2768, v_2769).call(this, v_2779));
        v_1252(this, v_2763, v_1263(this, v_2770, v_2771).call(this, v_2779));
        v_1252(this, v_2764, v_1263(this, v_2776, v_2777).call(this, v_2779));
        v_1252(this, v_2765, v_1263(this, v_2774, v_2775).call(this, v_1244(this, v_2762), v_1244(this, v_2763)));
        v_1252(this, v_2766, v_1263(this, v_2772, v_2773).call(this, v_1244(this, v_2762), v_1244(this, v_2763)));
        this.options = v_2780;
        this.data = v_2781;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        v_1252(this, v_2767, new v_2698(v_1244(this, v_2761), v_1244(this, v_2762), v_1244(this, v_2763), v_1244(this, v_2765), v_1244(this, v_2764), v_2780.gridCellSize, v_2780.useLazyGrid));
      }
      get id() {
        return v_1244(this, v_2760);
      }
      get center() {
        return v_1244(this, v_2766);
      }
      get min() {
        return v_1244(this, v_2762);
      }
      get max() {
        return v_1244(this, v_2763);
      }
      get points() {
        return [...v_1244(this, v_2761)];
      }
      isPointInside(v_2782) {
        if (v_2782.x < v_1244(this, v_2762).x || v_2782.x > v_1244(this, v_2763).x) {
          return false;
        } else if (v_2782.y < v_1244(this, v_2762).y || v_2782.y > v_1244(this, v_2763).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && v_2782 instanceof v_2644) {
          const v_2783 = this.options.minZ ?? -Infinity;
          const v_2784 = this.options.maxZ ?? Infinity;
          if (v_2782.z < v_2783 || v_2782.z > v_2784) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && v_1244(this, v_2767)) {
          return v_1244(this, v_2767).isPointInsideGrid(v_2782);
        }
        const v_2785 = v_2744.MathUtils.windingNumber(v_2782, v_1244(this, v_2761));
        return v_2785 !== 0;
      }
      addPoint(v_2786) {
        v_1244(this, v_2761).push(v_2786);
      }
      removePoint(v_2787) {
        const v_2788 = v_1244(this, v_2761).findIndex(v_2789 => v_2789.x === v_2787.x && v_2789.y === v_2787.y);
        if (v_2788 === -1) {
          return;
        }
        v_1244(this, v_2761).splice(v_2788, 1);
      }
      removeLastPoint() {
        v_1244(this, v_2761).pop();
      }
      recalculate() {
        v_1252(this, v_2762, v_1263(this, v_2768, v_2769).call(this, v_1244(this, v_2761)));
        v_1252(this, v_2763, v_1263(this, v_2770, v_2771).call(this, v_1244(this, v_2761)));
        v_1252(this, v_2764, v_1263(this, v_2776, v_2777).call(this, v_1244(this, v_2761)));
        v_1252(this, v_2765, v_1263(this, v_2774, v_2775).call(this, v_1244(this, v_2762), v_1244(this, v_2763)));
        v_1252(this, v_2766, v_1263(this, v_2772, v_2773).call(this, v_1244(this, v_2762), v_1244(this, v_2763)));
        if (!this.options.useGrid) {
          return;
        }
        v_1252(this, v_2767, new v_2698(v_1244(this, v_2761), v_1244(this, v_2762), v_1244(this, v_2763), v_1244(this, v_2765), v_1244(this, v_2764), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    v_2760 = /* @__PURE__ */new WeakMap();
    v_2761 = /* @__PURE__ */new WeakMap();
    v_2762 = /* @__PURE__ */new WeakMap();
    v_2763 = /* @__PURE__ */new WeakMap();
    v_2764 = /* @__PURE__ */new WeakMap();
    v_2765 = /* @__PURE__ */new WeakMap();
    v_2766 = /* @__PURE__ */new WeakMap();
    v_2767 = /* @__PURE__ */new WeakMap();
    v_2768 = /* @__PURE__ */new WeakSet();
    v_2769 = function (v_2790) {
      let v_2791 = Number.MAX_SAFE_INTEGER;
      let v_2792 = Number.MAX_SAFE_INTEGER;
      for (const v_2793 of v_2790) {
        v_2791 = Math.min(v_2791, v_2793.x);
        v_2792 = Math.min(v_2792, v_2793.y);
      }
      return new v_2734(v_2791, v_2792);
    };
    v_2770 = /* @__PURE__ */new WeakSet();
    v_2771 = function (v_2794) {
      let v_2795 = Number.MIN_SAFE_INTEGER;
      let v_2796 = Number.MIN_SAFE_INTEGER;
      for (const v_2797 of v_2794) {
        v_2795 = Math.max(v_2795, v_2797.x);
        v_2796 = Math.max(v_2796, v_2797.y);
      }
      return new v_2734(v_2795, v_2796);
    };
    v_2772 = /* @__PURE__ */new WeakSet();
    v_2773 = function (v_2798, v_2799) {
      const v_2800 = v_2799.add(v_2798);
      return v_2800.divideScalar(2);
    };
    v_2774 = /* @__PURE__ */new WeakSet();
    v_2775 = function (v_2801, v_2802) {
      return v_2802.sub(v_2801);
    };
    v_2776 = /* @__PURE__ */new WeakSet();
    v_2777 = function (v_2803) {
      let v_2804 = 0;
      for (let v_2805 = 0, v_2806 = v_2803.length - 1; v_2805 < v_2803.length; v_2806 = v_2805++) {
        const v_2807 = v_2803[v_2805];
        const v_2808 = v_2803[v_2806];
        v_2804 += v_2807.x * v_2808.y;
        v_2804 -= v_2807.y * v_2808.x;
      }
      return Math.abs(v_2804 / 2);
    };
    var v_2809;
    var v_2810;
    var v_2811 = class v_2812 {
      constructor(v_2813, v_2814) {
        v_1248(this, v_2809);
        const v_2815 = v_1263(this, v_2809, v_2810).call(this, v_2813, v_2814);
        this.x = v_2815.x;
        this.y = v_2815.y;
      }
      equals(v_2816, v_2817) {
        const v_2818 = v_1263(this, v_2809, v_2810).call(this, v_2816, v_2817);
        return this.x === v_2818.x && this.y === v_2818.y;
      }
      add(v_2819, v_2820, v_2821) {
        const v_2822 = v_1263(this, v_2809, v_2810).call(this, v_2819, v_2820);
        const v_2823 = this.x + (v_2821 ? v_2822.x * v_2821 : v_2822.x);
        const v_2824 = this.y + (v_2821 ? v_2822.y * v_2821 : v_2822.y);
        return new v_2812(v_2823, v_2824);
      }
      addScalar(v_2825) {
        if (typeof v_2825 !== "number") {
          throw new Error("Invalid scalar");
        }
        const v_2826 = this.x + v_2825;
        const v_2827 = this.y + v_2825;
        return new v_2812(v_2826, v_2827);
      }
      sub(v_2828, v_2829, v_2830) {
        const v_2831 = v_1263(this, v_2809, v_2810).call(this, v_2828, v_2829);
        const v_2832 = this.x - (v_2830 ? v_2831.x * v_2830 : v_2831.x);
        const v_2833 = this.y - (v_2830 ? v_2831.y * v_2830 : v_2831.y);
        return new v_2812(v_2832, v_2833);
      }
      subScalar(v_2834) {
        if (typeof v_2834 !== "number") {
          throw new Error("Invalid scalar");
        }
        const v_2835 = this.x - v_2834;
        const v_2836 = this.y - v_2834;
        return new v_2812(v_2835, v_2836);
      }
      multiply(v_2837, v_2838) {
        const v_2839 = v_1263(this, v_2809, v_2810).call(this, v_2837, v_2838);
        const v_2840 = this.x * v_2839.x;
        const v_2841 = this.y * v_2839.y;
        return new v_2812(v_2840, v_2841);
      }
      multiplyScalar(v_2842) {
        if (typeof v_2842 !== "number") {
          throw new Error("Invalid scalar");
        }
        const v_2843 = this.x * v_2842;
        const v_2844 = this.y * v_2842;
        return new v_2812(v_2843, v_2844);
      }
      divide(v_2845, v_2846) {
        const v_2847 = v_1263(this, v_2809, v_2810).call(this, v_2845, v_2846);
        const v_2848 = this.x / v_2847.x;
        const v_2849 = this.y / v_2847.y;
        return new v_2812(v_2848, v_2849);
      }
      divideScalar(v_2850) {
        if (typeof v_2850 !== "number") {
          throw new Error("Invalid scalar");
        }
        const v_2851 = this.x / v_2850;
        const v_2852 = this.y / v_2850;
        return new v_2812(v_2851, v_2852);
      }
      round() {
        const v_2853 = Math.round(this.x);
        const v_2854 = Math.round(this.y);
        return new v_2812(v_2853, v_2854);
      }
      floor() {
        const v_2855 = Math.floor(this.x);
        const v_2856 = Math.floor(this.y);
        return new v_2812(v_2855, v_2856);
      }
      ceil() {
        const v_2857 = Math.ceil(this.x);
        const v_2858 = Math.ceil(this.y);
        return new v_2812(v_2857, v_2858);
      }
      getCenter(v_2859, v_2860) {
        const v_2861 = v_1263(this, v_2809, v_2810).call(this, v_2859, v_2860);
        return new v_2812((this.x + v_2861.x) / 2, (this.y + v_2861.y) / 2);
      }
      getDistance(v_2862, v_2863) {
        const [v_2864, v_2865] = v_2862 instanceof Array ? v_2862 : typeof v_2862 === "object" ? [v_2862.x, v_2862.y] : [v_2862, v_2863];
        if (typeof v_2864 !== "number" || typeof v_2865 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [v_2866, v_2867] = [this.x - v_2864, this.y - v_2865];
        return Math.sqrt(v_2866 * v_2866 + v_2867 * v_2867);
      }
      toArray(v_2868) {
        if (typeof v_2868 === "number") {
          return [parseFloat(this.x.toFixed(v_2868)), parseFloat(this.y.toFixed(v_2868))];
        }
        return [this.x, this.y];
      }
      toJSON(v_2869) {
        if (typeof v_2869 === "number") {
          return {
            x: parseFloat(this.x.toFixed(v_2869)),
            y: parseFloat(this.y.toFixed(v_2869))
          };
        }
        var v_2870 = {
          x: this.x,
          y: this.y
        };
        return v_2870;
      }
      toString(v_2871) {
        return JSON.stringify(this.toJSON(v_2871));
      }
    };
    v_2809 = /* @__PURE__ */new WeakSet();
    v_2810 = function (v_2872, v_2873) {
      let v_2874 = {
        x: 0,
        y: 0
      };
      if (v_2872 instanceof v_2811 || v_2872 instanceof v_2644) {
        v_2874 = v_2872;
      } else if (v_2872 instanceof Array) {
        var v_2875 = {
          x: v_2872[0],
          y: v_2872[1]
        };
        v_2874 = v_2875;
      } else if (typeof v_2872 === "object") {
        v_2874 = v_2872;
      } else {
        var v_2876 = {
          x: v_2872,
          y: v_2873
        };
        v_2874 = v_2876;
      }
      if (typeof v_2874.x !== "number" || typeof v_2874.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return v_2874;
    };
    var v_2734 = v_2811;
    var v_2877 = (v_2878, v_2879, v_2880) => {
      return Math.min(Math.max(v_2878, v_2879), v_2880);
    };
    var v_2881 = (v_2882, v_2883, v_2884) => {
      return v_2883[0] + (v_2884 - v_2882[0]) * (v_2883[1] - v_2883[0]) / (v_2882[1] - v_2882[0]);
    };
    var v_2885 = ([v_2886, v_2887, v_2888], [v_2889, v_2890, v_2891]) => {
      const [v_2892, v_2893, v_2894] = [v_2886 - v_2889, v_2887 - v_2890, v_2888 - v_2891];
      return Math.sqrt(v_2892 * v_2892 + v_2893 * v_2893 + v_2894 * v_2894);
    };
    var v_2895 = (v_2896, v_2897) => {
      if (v_2897) {
        return Math.floor(Math.random() * (v_2897 - v_2896 + 1) + v_2896);
      } else {
        return Math.floor(Math.random() * v_2896);
      }
    };
    var v_2898 = (v_2899, v_2900) => {
      if (v_2899 instanceof v_2734) {
        return v_2899;
      } else if (v_2899 instanceof v_2644) {
        return new v_2734(v_2899);
      } else if (v_2899 instanceof Array) {
        return new v_2734(v_2899);
      } else if (typeof v_2899 === "object") {
        return new v_2734(v_2899);
      }
      if (typeof v_2899 !== "number" || typeof v_2900 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new v_2734(v_2899, v_2900);
    };
    var v_2901 = (v_2902, v_2903, v_2904) => {
      if (v_2902 instanceof v_2644) {
        return v_2902;
      } else if (v_2902 instanceof Array) {
        return new v_2644(v_2902);
      } else if (typeof v_2902 === "object") {
        return new v_2644(v_2902);
      }
      if (typeof v_2902 !== "number" || typeof v_2903 !== "number" || typeof v_2904 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new v_2644(v_2902, v_2903, v_2904);
    };
    var v_2905 = (v_2906, v_2907) => {
      let v_2908 = 0;
      const v_2909 = (v_2910, v_2911, v_2912) => {
        return (v_2911.x - v_2910.x) * (v_2912.y - v_2910.y) - (v_2912.x - v_2910.x) * (v_2911.y - v_2910.y);
      };
      for (let v_2913 = 0; v_2913 < v_2907.length; v_2913++) {
        const v_2914 = v_2907[v_2913];
        const v_2915 = v_2907[(v_2913 + 1) % v_2907.length];
        if (v_2914.y <= v_2906.y) {
          if (v_2915.y > v_2906.y && v_2909(v_2914, v_2915, v_2906) > 0) {
            v_2908++;
          }
        } else if (v_2915.y <= v_2906.y && v_2909(v_2914, v_2915, v_2906) < 0) {
          v_2908--;
        }
      }
      return v_2908;
    };
    var v_2916 = {
      clamp: v_2877,
      getMapRange: v_2881,
      getDistance: v_2885,
      getRandomNumber: v_2895,
      parseVector2: v_2898,
      parseVector3: v_2901,
      windingNumber: v_2905
    };
    var v_2586 = v_2916;
    var v_2917 = {};
    var v_2918 = {
      ArrUtils: () => v_2919
    };
    v_1226(v_2917, v_2918);
    var v_2920 = v_2921 => {
      for (let v_2922 = v_2921.length - 1; v_2922 > 0; v_2922--) {
        const v_2923 = Math.floor(Math.random() * (v_2922 + 1));
        [v_2921[v_2922], v_2921[v_2923]] = [v_2921[v_2923], v_2921[v_2922]];
      }
      return v_2921;
    };
    var v_2924 = (v_2925, v_2926) => {
      const v_2927 = [];
      for (let v_2928 = 0; v_2928 < v_2926; v_2928++) {
        v_2927.push(v_2925[Math.floor(Math.random() * v_2925.length)]);
      }
      return v_2927;
    };
    var v_2929 = {
      shuffleArray: v_2920,
      getRandomElements: v_2924
    };
    var v_2919 = v_2929;
    function v_2930(v_2931, v_2932) {
      const v_2933 = "_";
      const v_2934 = v_2935((v_2936, v_2937, ...v_2938) => {
        return v_2931(v_2936, ...v_2938);
      }, v_2932);
      return {
        get: function (...v_2939) {
          return v_2934.get(v_2933, ...v_2939);
        },
        reset: function () {
          v_2934.reset(v_2933);
        }
      };
    }
    function v_2935(v_2940, v_2941) {
      const v_2942 = v_2941.timeToLive || 60000;
      const v_2943 = {};
      const v_2944 = v_2941.immediateResolve || false;
      async function v_2945(v_2946, ...v_2947) {
        let v_2948 = v_2943[v_2946];
        if (!v_2948) {
          v_2948 = {
            value: null,
            lastUpdated: 0
          };
          v_2943[v_2946] = v_2948;
        }
        const v_2949 = Date.now();
        if (v_2948.lastUpdated === 0 || v_2949 - v_2948.lastUpdated > v_2942) {
          const [v_2950, v_2951] = await v_2940(v_2948, v_2946, ...v_2947);
          if (v_2950) {
            v_2948.lastUpdated = v_2949;
            v_2948.value = v_2951;
          }
          return v_2951;
        }
        if (v_2944) {
          return Promise.resolve(v_2948.value);
        } else {
          return await new Promise(v_2952 => setTimeout(() => v_2952(v_2948.value), 0));
        }
      }
      return {
        get: async function (v_2953, ...v_2954) {
          return await v_2945(v_2953, ...v_2954);
        },
        reset: function (v_2955) {
          const v_2956 = v_2943[v_2955];
          if (v_2956) {
            v_2956.lastUpdated = 0;
          }
        },
        clear: function () {
          for (const v_2957 in v_2943) {
            delete v_2943[v_2957];
          }
        }
      };
    }
    function v_2958() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return v_323();
      } else {
        return new v_1215(4).toString();
      }
    }
    function v_2959(v_2960) {
      return v_385(v_2960, v_385.URL);
    }
    function v_2961(v_2962, v_2963) {
      return new Promise((v_2964, v_2965) => {
        const v_2966 = Date.now();
        const v_2967 = setInterval(() => {
          const v_2968 = Date.now() - v_2966 > v_2963;
          if (v_2962() || v_2968) {
            clearInterval(v_2967);
            return v_2964(v_2968);
          }
        }, 1);
      });
    }
    function v_2969(v_2970) {
      return new Promise(v_2971 => setTimeout(() => v_2971(), v_2970));
    }
    function v_2972() {
      return v_2969(0);
    }
    var v_2973 = {
      cache: v_2930,
      cacheableMap: v_2935,
      waitForCondition: v_2961,
      getUUID: v_2958,
      getStringHash: v_2959,
      wait: v_2969,
      waitForNextFrame: v_2972,
      deflate: v_1205,
      inflate: v_1209,
      ...v_2584,
      ...v_2917
    };
    var v_2744 = v_2973;
    var v_2974 = (v_2975 => {
      v_2975[v_2975.hat = 0] = "hat";
      v_2975[v_2975.mask = 1] = "mask";
      v_2975[v_2975.glasses = 2] = "glasses";
      v_2975[v_2975.armor = 3] = "armor";
      v_2975[v_2975.backpack = 4] = "backpack";
      v_2975[v_2975.idcard = 5] = "idcard";
      v_2975[v_2975.mobilephone = 6] = "mobilephone";
      v_2975[v_2975.tablet = 7] = "tablet";
      v_2975[v_2975.keyring = 8] = "keyring";
      v_2975[v_2975.wallet = 9] = "wallet";
      return v_2975;
    })(v_2974 || {});
    var v_2976 = {};
    var v_2977 = (v_2978, v_2979) => "__cfx_export_" + v_2978 + "_" + v_2979;
    var v_2980 = new Proxy((v_2981, v_2982) => {
      const v_2983 = (v_2984, ...v_2985) => {
        const v_2986 = v_2982(...v_2985);
        if (v_2986 instanceof Promise) {
          v_2986.then(v_2987 => v_2984(v_2987));
        } else {
          v_2984(v_2986);
        }
      };
      const v_2988 = GetCurrentResourceName();
      if (v_2988 == undefined) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      }
      on(v_2977(v_2988, v_2981), v_2989 => {
        v_2989(v_2983);
      });
    }, {
      apply: (v_2990, v_2991, v_2992) => {
        v_2990(...v_2992);
      },
      get: (v_2993, v_2994) => {
        if (v_2976[v_2994] == undefined) {
          v_2976[v_2994] = {};
        }
        return new Proxy({}, {
          get: (v_2995, v_2996) => {
            const v_2997 = v_2996 + "_async";
            return (...v_2998) => {
              return new Promise(async (v_2999, v_3000) => {
                const v_3001 = await v_2744.waitForCondition(() => GetResourceState(v_2994) === "started", 60000);
                if (v_3001) {
                  return v_3000("Resource " + v_2994 + " is not running");
                }
                if (v_2976[v_2994][v_2997] === undefined) {
                  emit(v_2977(v_2994, v_2996), v_3002 => {
                    v_2976[v_2994][v_2997] = v_3002;
                  });
                  const v_3003 = await v_2744.waitForCondition(() => v_2976[v_2994][v_2997] !== undefined, 1000);
                  if (v_3003) {
                    return v_3000("Failed to get export " + v_2996 + " from resource " + v_2994);
                  }
                }
                try {
                  v_2976[v_2994][v_2997](v_2999, ...v_2998);
                } catch (v_3004) {
                  v_3000(v_3004);
                }
              });
            };
          }
        });
      }
    });
    var v_3005 = new Proxy((v_3006, v_3007) => {
      const v_3008 = GetCurrentResourceName();
      if (v_3008 == undefined) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      } else if (typeof v_3007 !== "function") {
        throw new Error("Callback is not a function");
      } else if (typeof v_3006 !== "string") {
        throw new Error("Export name must be a string");
      }
      on(v_2977(v_3008, v_3006), v_3009 => {
        v_3009(v_3007);
      });
    }, {
      apply: (v_3010, v_3011, v_3012) => {
        v_3010(...v_3012);
      },
      get: (v_3013, v_3014) => {
        if (v_2976[v_3014] == undefined) {
          v_2976[v_3014] = {};
        }
        return new Proxy({}, {
          get: (v_3015, v_3016) => {
            const v_3017 = v_3016 + "_sync";
            if (v_2976[v_3014][v_3017] === undefined) {
              emit(v_2977(v_3014, v_3016), v_3018 => {
                v_2976[v_3014][v_3017] = v_3018;
              });
              if (v_2976[v_3014][v_3017] === undefined) {
                if (GetResourceState(v_3014) !== "started") {
                  throw new Error("Resource " + v_3014 + " is not running");
                } else {
                  throw new Error("No such export " + v_3016 + " in resource " + v_3014);
                }
              }
            }
            return (...v_3019) => {
              try {
                return v_2976[v_3014][v_3017](...v_3019);
              } catch (v_3020) {
                throw new Error("An error occurred while calling export " + v_3016 + " of resource " + v_3014 + " - see above for details");
              }
            };
          }
        });
      }
    });
    on("onResourceStop", v_3021 => v_2976[v_3021] = undefined);
    var v_3022 = {
      Async: v_2980,
      Sync: v_3005
    };
    var v_3023 = v_3022;
    var v_3024 = /* @__PURE__ */new Map();
    var v_3025 = /* @__PURE__ */new Set();
    var v_3026 = GetCurrentResourceName();
    on("np-config:configLoaded", (v_3027, v_3028) => {
      v_3025.add(v_3027);
      if (!v_3024.has(v_3027)) {
        return;
      }
      v_3024.set(v_3027, v_3028);
    });
    function v_3029(v_3030) {
      if (v_3030 instanceof Array) {
        return v_3030.every(v_3031 => v_3025.has(v_3031));
      }
      return v_3025.has(v_3030);
    }
    function v_3032(v_3033, v_3034) {
      if (!v_3024.has(v_3033)) {
        const v_3035 = v_3023.Sync.config.GetModuleConfig(v_3033);
        if (v_3035 === undefined) {
          return;
        }
        v_3024.set(v_3033, v_3035);
        if (!v_3025.has(v_3033)) {
          v_3025.add(v_3033);
        }
      }
      const v_3036 = v_3024.get(v_3033);
      if (v_3034) {
        if (v_3036 == null) {
          return undefined;
        } else {
          return v_3036[v_3034];
        }
      } else {
        return v_3036;
      }
    }
    function v_3037(v_3038) {
      return v_3032(v_3026, v_3038);
    }
    function v_3039() {
      return v_3023.Sync.config.IsConfigReady();
    }
    var v_3040 = {
      IsConfigLoaded: v_3029,
      GetModuleConfig: v_3032,
      GetResourceConfig: v_3037,
      IsConfigReady: v_3039
    };
    var v_3041 = v_3040;
    var v_3042 = v_1236(v_2576());
    var v_3043;
    var v_3044;
    var v_3045;
    var v_3046;
    var v_3047;
    var v_3048;
    var v_3049;
    var v_3050;
    var v_3051;
    var v_3052;
    var v_3053;
    var v_3054;
    var v_3055;
    var v_3056;
    var v_3057;
    var v_3058;
    var v_3059;
    var v_3060;
    var v_3061;
    var v_3062;
    var v_3063 = class {
      constructor(v_3064, v_3065) {
        v_1248(this, v_3047);
        v_1248(this, v_3049);
        v_1248(this, v_3051);
        v_1248(this, v_3053);
        v_1248(this, v_3055);
        v_1248(this, v_3057);
        v_1248(this, v_3059);
        v_1248(this, v_3061);
        v_1248(this, v_3043, undefined);
        v_1248(this, v_3044, undefined);
        v_1248(this, v_3045, undefined);
        v_1248(this, v_3046, {});
        const v_3066 = v_1263(this, v_3055, v_3056).call(this, v_3064);
        const v_3067 = v_1263(this, v_3059, v_3060).call(this, v_3066, v_3065);
        const [v_3068, v_3069, v_3070] = v_3067.split(":").map(v_3071 => v_3071.length > 0 ? v_3071 : undefined);
        v_1252(this, v_3043, v_3068);
        v_1252(this, v_3044, v_3069);
        v_1252(this, v_3045, v_3070);
      }
      hashString(v_3072) {
        return v_3072;
        var v_3073;
        const v_3074 = v_1244(this, v_3047, v_3048);
        const v_3075 = (v_3073 = v_1244(this, v_3046)[v_3074]) == null ? undefined : v_3073[v_3072];
        if (v_3075) {
          return v_3075;
        }
        if (!v_1244(this, v_3046)[v_3074]) {
          v_1244(this, v_3046)[v_3074] = {};
        }
        const v_3076 = v_1263(this, v_3053, v_3054).call(this, (0, v_3042.HmacMD5)(v_3072, v_3074).toString());
        v_1244(this, v_3046)[v_3074][v_3072] = v_3076;
        if (IsDuplicityVersion()) {
          console.log("[SDK] Hash Debug | Event: " + v_3072 + " | Hash: " + v_3076);
        }
        return v_3076;
      }
      encode(v_3077) {
        return JSON.stringify(v_3077);
        let v_3078;
        const v_3079 = v_1244(this, v_3051, v_3052);
        try {
          v_3078 = v_1263(this, v_3057, v_3058).call(this, JSON.stringify(v_3077), v_3079);
        } catch (v_3080) {
          console.error("Failed to encode payload");
        }
        return v_3078;
      }
      decode(v_3081) {
        try {
          if (typeof v_3081 === "string") {
            return JSON.parse(v_3081);
          } else {
            return v_3081;
          }
        } catch (_err) {
          return v_3081;
        }
        let v_3082;
        const v_3083 = v_1244(this, v_3049, v_3050);
        try {
          v_3082 = JSON.parse(v_1263(this, v_3059, v_3060).call(this, v_3081, v_3083));
        } catch (v_3084) {
          console.error("Failed to decode payload");
        }
        return v_3082;
      }
    };
    v_3043 = /* @__PURE__ */new WeakMap();
    v_3044 = /* @__PURE__ */new WeakMap();
    v_3045 = /* @__PURE__ */new WeakMap();
    v_3046 = /* @__PURE__ */new WeakMap();
    v_3047 = /* @__PURE__ */new WeakSet();
    v_3048 = function () {
      return v_1244(this, v_3043) ?? v_1263(this, v_3061, v_3062).call(this);
    };
    v_3049 = /* @__PURE__ */new WeakSet();
    v_3050 = function () {
      return v_1244(this, v_3044) ?? v_1263(this, v_3061, v_3062).call(this);
    };
    v_3051 = /* @__PURE__ */new WeakSet();
    v_3052 = function () {
      return v_1244(this, v_3045) ?? v_1263(this, v_3061, v_3062).call(this);
    };
    v_3053 = /* @__PURE__ */new WeakSet();
    v_3054 = function (v_3085) {
      if (typeof v_3085 !== "string") {
        return "";
      }
      return v_3042.enc.Base64.stringify(v_3042.enc.Utf8.parse(v_3085));
    };
    v_3055 = /* @__PURE__ */new WeakSet();
    v_3056 = function (v_3086) {
      if (typeof v_3086 !== "string") {
        return "";
      }
      return v_3042.enc.Utf8.stringify(v_3042.enc.Base64.parse(v_3086));
    };
    v_3057 = /* @__PURE__ */new WeakSet();
    v_3058 = function (v_3087, v_3088) {
      if (typeof v_3087 !== "string" || typeof v_3088 !== "string") {
        return "";
      }
      return v_3042.AES.encrypt(v_3087, v_3088).toString();
    };
    v_3059 = /* @__PURE__ */new WeakSet();
    v_3060 = function (v_3089, v_3090) {
      if (typeof v_3089 !== "string" || typeof v_3090 !== "string") {
        return "";
      }
      return v_3042.AES.decrypt(v_3089, v_3090).toString(v_3042.enc.Utf8);
    };
    v_3061 = /* @__PURE__ */new WeakSet();
    v_3062 = function (v_3091 = 128) {
      return v_3042.lib.WordArray.random(v_3091 / 8).toString();
    };
    var v_3092;
    var v_3093 = class {
      constructor() {
        v_1248(this, v_3092, undefined);
        const v_3094 = GetCurrentResourceName();
        const v_3095 = v_2744.getStringHash("__npx_sdk:" + v_3094 + ":token");
        const v_3096 = GetConvar(v_3095, "");
        v_1252(this, v_3092, new v_3063(v_3096, "0x405F402E"));
      }
      on(v_3097, v_3098) {
        const v_3099 = v_1244(this, v_3092).hashString(v_3097);
        return on(v_3099, v_3098);
      }
      onNet(v_3100, v_3101) {
        const v_3102 = v_1244(this, v_3092).hashString(v_3100);
        onNet(v_3102, v_3101);
        const v_3103 = v_1244(this, v_3092).hashString(v_3100 + "-c");
        onNet(v_3103, v_3104 => {
          const v_3105 = v_2744.inflate(new Uint8Array(v_3104));
          const v_3106 = msgpack_unpack(v_3105);
          return v_3101(...v_3106);
        });
      }
      emit(v_3107, ...v_3108) {
        const v_3109 = v_1244(this, v_3092).hashString(v_3107);
        return emit(v_3109, ...v_3108);
      }
      emitNet(v_3110, ...v_3111) {
        let v_3112 = msgpack_pack(v_3111);
        let v_3113 = v_3112.length;
        const v_3114 = v_1244(this, v_3092).hashString(v_3110);
        if (v_3113 < 16000) {
          TriggerServerEventInternal(v_3114, v_3112, v_3112.length);
        } else {
          TriggerLatentServerEventInternal(v_3114, v_3112, v_3112.length, 1024000);
        }
      }
    };
    v_3092 = /* @__PURE__ */new WeakMap();
    var v_3115 = new v_3093();
    var v_3116 = {
      warning: 1,
      log: 2,
      error: 3,
      debug: 4
    };
    var v_3117 = GetConvar(GetCurrentResourceName() + "_logLevel", "");
    var v_3118 = GetConvar("sv_loglevel", "warning");
    (() => {
      v_3118 = (v_3117 == null ? undefined : v_3117.length) > 0 ? v_3117 : v_3118;
      if (!v_3116[v_3118]) {
        throw new Error("Invalid log level: " + v_3118);
      }
    })();
    var v_3119 = () => v_3116[v_3118] >= v_3116.warning;
    var v_3120 = () => v_3116[v_3118] >= v_3116.log;
    var v_3121 = () => v_3116[v_3118] >= v_3116.error;
    var v_3122 = () => v_3118 === "debug";
    var v_3123 = {
      warning: (v_3124, ...v_3125) => {
        if (!v_3119()) {
          return;
        }
        console.log("^3[WARNING] ^7" + v_3124, ...v_3125, "^0");
      },
      log: (v_3126, ...v_3127) => {
        if (!v_3120()) {
          return;
        }
        console.log("^5[nopixel] ^7" + v_3126, ...v_3127, "^0");
      },
      debug: (v_3128, ...v_3129) => {
        if (!v_3122()) {
          return;
        }
        console.log("^2[D] " + v_3128, ...v_3129, "^0");
      },
      error: (v_3130, ...v_3131) => {
        if (!v_3121()) {
          return;
        }
        console.log("^1[ERROR] " + v_3130, ...v_3131, "^0");
      }
    };
    var v_3132;
    var v_3133;
    var v_3134;
    var v_3135;
    var v_3136;
    var v_3137;
    var v_3138;
    var v_3139;
    var v_3140;
    var v_3141;
    var v_3142;
    var v_3143;
    var v_3144 = class {
      constructor() {
        v_1248(this, v_3138);
        v_1248(this, v_3140);
        v_1248(this, v_3142);
        v_1248(this, v_3132, undefined);
        v_1248(this, v_3133, undefined);
        v_1248(this, v_3134, undefined);
        v_1248(this, v_3135, undefined);
        v_1248(this, v_3136, undefined);
        v_1248(this, v_3137, undefined);
        v_1252(this, v_3132, false);
        v_1252(this, v_3133, /* @__PURE__ */new Map());
        v_1252(this, v_3134, /* @__PURE__ */new Set());
        v_1252(this, v_3135, GetGameTimer());
        v_1252(this, v_3136, GetCurrentResourceName());
        const v_3145 = v_2744.getStringHash("__npx_sdk:" + v_1244(this, v_3136) + ":token");
        const v_3146 = GetConvar(v_3145, "");
        v_1252(this, v_3137, new v_3063(v_3146, "0x405F402E"));
        v_1263(this, v_3142, v_3143).call(this);
      }
      register(v_3147, v_3148) {
        if (v_1244(this, v_3134).has(v_3147)) {
          return v_3123.error("[RPC] Handler already registered | " + v_3147);
        }
        v_1244(this, v_3134).add(v_3147);
        v_1263(this, v_3138, v_3139).call(this, "__rpc_req:" + v_3147, async (v_3149, v_3150) => {
          let v_3151;
          let v_3152;
          const v_3153 = GetInvokingResource();
          if (v_3153) {
            return;
          }
          const v_3154 = v_1244(this, v_3137).decode(v_3149);
          if (!(v_3154 == null ? undefined : v_3154.id) || !(v_3154 == null ? undefined : v_3154.origin)) {
            return v_3123.error("[RPC] " + v_3147 + " - Invalid metadata received");
          }
          try {
            v_3151 = await v_3148(...v_3150);
            v_3152 = true;
          } catch (v_3155) {
            v_3151 = v_3155.message;
            v_3152 = false;
          }
          v_1263(this, v_3140, v_3141).call(this, "__rpc_res:" + v_3154.origin, v_3154.id, [v_3152, v_3151]);
        });
      }
      execute(v_3156, ...v_3157) {
        const v_3158 = {
          id: ++v_1257(this, v_3135)._,
          origin: v_1244(this, v_3136)
        };
        const v_3159 = new Promise((v_3160, v_3161) => {
          let v_3162 = setTimeout(() => v_3161(new Error("RPC timed out | " + v_3156)), 60000);
          var v_3163 = {
            resolve: v_3160,
            reject: v_3161,
            timeout: v_3162
          };
          v_1244(this, v_3133).set(v_3158.id, v_3163);
        });
        v_3159.finally(() => v_1244(this, v_3133).delete(v_3158.id));
        v_1263(this, v_3140, v_3141).call(this, "__rpc_req:" + v_3156, v_1244(this, v_3137).encode(v_3158), v_3157);
        return v_3159;
      }
      executeCustom(v_3164, v_3165, ...v_3166) {
        const v_3167 = {
          id: ++v_1257(this, v_3135)._,
          origin: v_1244(this, v_3136)
        };
        const v_3168 = new Promise((v_3169, v_3170) => {
          let v_3171 = setTimeout(() => v_3170(new Error("RPC timed out | " + v_3164)), v_3165.timeout ?? 60000);
          var v_3172 = {
            resolve: v_3169,
            reject: v_3170,
            timeout: v_3171
          };
          v_1244(this, v_3133).set(v_3167.id, v_3172);
        });
        v_3168.finally(() => v_1244(this, v_3133).delete(v_3167.id));
        v_1263(this, v_3140, v_3141).call(this, "__rpc_req:" + v_3164, v_1244(this, v_3137).encode(v_3167), v_3166);
        return v_3168;
      }
    };
    v_3132 = /* @__PURE__ */new WeakMap();
    v_3133 = /* @__PURE__ */new WeakMap();
    v_3134 = /* @__PURE__ */new WeakMap();
    v_3135 = /* @__PURE__ */new WeakMap();
    v_3136 = /* @__PURE__ */new WeakMap();
    v_3137 = /* @__PURE__ */new WeakMap();
    v_3138 = /* @__PURE__ */new WeakSet();
    v_3139 = function (v_3173, v_3174) {
      const v_3175 = v_1244(this, v_3137).hashString(v_3173);
      onNet(v_3175, v_3174);
      const v_3176 = v_1244(this, v_3137).hashString(v_3173 + "-c");
      onNet(v_3176, v_3177 => {
        const v_3178 = v_2744.inflate(new Uint8Array(v_3177));
        const v_3179 = msgpack_unpack(v_3178);
        return v_3174(...v_3179);
      });
    };
    v_3140 = /* @__PURE__ */new WeakSet();
    v_3141 = function (v_3180, ...v_3181) {
      let v_3182 = msgpack_pack(v_3181);
      let v_3183 = v_3182.length;
      const v_3184 = v_1244(this, v_3137).hashString(v_3180);
      if (v_3183 < 16000) {
        TriggerServerEventInternal(v_3184, v_3182, v_3182.length);
      } else {
        TriggerLatentServerEventInternal(v_3184, v_3182, v_3182.length, 1024000);
      }
    };
    v_3142 = /* @__PURE__ */new WeakSet();
    v_3143 = function () {
      if (v_1244(this, v_3132)) {
        return v_3123.error("SDK RPC handlers already initialized");
      }
      v_1263(this, v_3138, v_3139).call(this, "__rpc_res:" + v_1244(this, v_3136), (v_3185, [v_3186, v_3187]) => {
        const v_3188 = v_1244(this, v_3133).get(v_3185);
        if (!v_3188) {
          return;
        }
        clearTimeout(v_3188.timeout);
        if (v_3186) {
          v_3188.resolve(v_3187);
        } else {
          v_3188.reject(new Error(v_3187));
        }
      });
      v_1252(this, v_3132, true);
      v_3123.debug("SDK RPC handlers initialized");
    };
    var v_3189 = new v_3144();
    var v_3190 = v_1236(v_2576());
    var v_3191 = (v_3192 = 128) => {
      return v_3190.lib.WordArray.random(v_3192 / 8).toString();
    };
    var v_3193 = (v_3194, v_3195) => {
      if (typeof v_3194 !== "string" || typeof v_3195 !== "string") {
        return "";
      }
      return v_3190.AES.encrypt(v_3194, v_3195).toString();
    };
    var v_3196 = (v_3197, v_3198) => {
      if (typeof v_3197 !== "string" || typeof v_3198 !== "string") {
        return "";
      }
      return v_3190.AES.decrypt(v_3197, v_3198).toString(v_3190.enc.Utf8);
    };
    var v_3199 = v_3200 => {
      if (typeof v_3200 !== "string") {
        return "";
      }
      return v_3190.enc.Base64.stringify(v_3190.enc.Utf8.parse(v_3200));
    };
    var v_3201 = (v_3202, v_3203) => {
      return v_3199((0, v_3190.HmacMD5)(v_3202, v_3203).toString());
    };
    var v_3204 = {};
    var v_3205 = (v_3206, v_3207 = v_3191()) => {
      if (v_3204[v_3206] === undefined) {
        v_3204[v_3206] = v_3201(v_3206, v_3207);
      }
      return v_3204[v_3206];
    };
    var v_3208 = (v_3209, v_3210 = v_3191()) => {
      try {
        return v_3193(JSON.stringify(v_3209), v_3210);
      } catch (v_3211) {
        console.error("Failed to encode payload");
      }
    };
    var v_3212 = (v_3213, v_3214 = v_3191()) => {
      try {
        return JSON.parse(v_3196(v_3213, v_3214));
      } catch (v_3215) {
        console.error("Failed to decode payload");
      }
    };
    var v_3216;
    var v_3217;
    var v_3218;
    var v_3219;
    var v_3220;
    var v_3221;
    var v_3222;
    var v_3223;
    var v_3224;
    var v_3225;
    var v_3226;
    var v_3227;
    var v_3228;
    var v_3229;
    var v_3230;
    var v_3231;
    var v_3232;
    var v_3233;
    var v_3234 = class {
      constructor() {
        v_1248(this, v_3224);
        v_1248(this, v_3226);
        v_1248(this, v_3228);
        v_1248(this, v_3230);
        v_1248(this, v_3232);
        v_1248(this, v_3216, undefined);
        v_1248(this, v_3217, undefined);
        v_1248(this, v_3218, undefined);
        v_1248(this, v_3219, undefined);
        v_1248(this, v_3220, undefined);
        v_1248(this, v_3221, undefined);
        v_1248(this, v_3222, undefined);
        v_1248(this, v_3223, undefined);
        v_1252(this, v_3216, GetCurrentResourceName());
        v_1252(this, v_3217, v_3191(64));
        v_1252(this, v_3218, v_3191(64));
        v_1252(this, v_3219, v_3191(64));
        v_1252(this, v_3220, false);
        v_1252(this, v_3221, 0);
        v_1252(this, v_3222, []);
        v_1252(this, v_3223, /* @__PURE__ */new Map());
        v_1263(this, v_3224, v_3225).call(this, "__npx_sdk:init", v_1263(this, v_3232, v_3233).bind(this));
      }
      async register(v_3235, v_3236) {
        v_1263(this, v_3226, v_3227).call(this, "__nui_req:" + v_3235, async (v_3237, v_3238) => {
          let v_3239;
          let v_3240;
          const v_3241 = v_3212(v_3237, v_1244(this, v_3218));
          if (!(v_3241 == null ? undefined : v_3241.id) || !(v_3241 == null ? undefined : v_3241.resource)) {
            return v_3123.error("[NUI] " + v_3235 + " - Invalid metadata received");
          }
          try {
            v_3239 = await v_3236(...v_3238);
            v_3240 = true;
          } catch (v_3242) {
            v_3239 = v_3242.message;
            v_3240 = false;
          }
          v_1263(this, v_3230, v_3231).call(this, "__nui_res:" + v_3241.resource, v_3241.id, [v_3240, v_3239]);
        });
      }
      remove(v_3243) {
        const v_3244 = v_3205("__nui_req:" + v_3243, v_1244(this, v_3217));
        UnregisterRawNuiCallback(v_3244);
      }
      async execute(v_3245, ...v_3246) {
        const v_3247 = {
          id: ++v_1257(this, v_3221)._,
          resource: v_1244(this, v_3216)
        };
        const v_3248 = new Promise((v_3249, v_3250) => {
          let v_3251;
          if (v_1244(this, v_3220)) {
            v_3251 = setTimeout(() => v_3250(new Error("RPC timed out | " + v_3245)), 60000);
          } else {
            v_3251 = 0;
          }
          var v_3252 = {
            resolve: v_3249,
            reject: v_3250,
            timeout: v_3251
          };
          v_1244(this, v_3223).set(v_3247.id, v_3252);
        });
        v_3248.finally(() => v_1244(this, v_3223).delete(v_3247.id));
        if (!v_1244(this, v_3220)) {
          var v_3253 = {
            type: "execute",
            event: "__nui_req:" + v_3245,
            metadata: v_3247,
            args: v_3246
          };
          v_1244(this, v_3222).push(v_3253);
        } else {
          v_1263(this, v_3230, v_3231).call(this, "__nui_req:" + v_3245, v_3208(v_3247, v_1244(this, v_3219)), v_3246);
        }
        return v_3248;
      }
      async executeCustom(v_3254, v_3255, ...v_3256) {
        const v_3257 = {
          id: ++v_1257(this, v_3221)._,
          resource: v_1244(this, v_3216)
        };
        const v_3258 = new Promise((v_3259, v_3260) => {
          let v_3261;
          if (v_1244(this, v_3220)) {
            v_3261 = setTimeout(() => v_3260(new Error("RPC timed out | " + v_3254)), v_3255.timeout ?? 60000);
          } else {
            v_3261 = 0;
          }
          var v_3262 = {
            resolve: v_3259,
            reject: v_3260,
            timeout: v_3261
          };
          v_1244(this, v_3223).set(v_3257.id, v_3262);
        });
        v_3258.finally(() => v_1244(this, v_3223).delete(v_3257.id));
        if (!v_1244(this, v_3220)) {
          var v_3263 = {
            type: "execute",
            event: "__nui_req:" + v_3254,
            metadata: v_3257,
            args: v_3256
          };
          v_1244(this, v_3222).push(v_3263);
        } else {
          v_1263(this, v_3230, v_3231).call(this, "__nui_req:" + v_3254, v_3208(v_3257, v_1244(this, v_3219)), v_3256);
        }
        return v_3258;
      }
    };
    v_3216 = /* @__PURE__ */new WeakMap();
    v_3217 = /* @__PURE__ */new WeakMap();
    v_3218 = /* @__PURE__ */new WeakMap();
    v_3219 = /* @__PURE__ */new WeakMap();
    v_3220 = /* @__PURE__ */new WeakMap();
    v_3221 = /* @__PURE__ */new WeakMap();
    v_3222 = /* @__PURE__ */new WeakMap();
    v_3223 = /* @__PURE__ */new WeakMap();
    v_3224 = /* @__PURE__ */new WeakSet();
    v_3225 = function (v_3264, v_3265) {
      RegisterNuiCallback(v_3264, ({
        args: v_3266
      }, v_3267) => {
        v_3267(true);
        return v_3265(...v_3266);
      });
    };
    v_3226 = /* @__PURE__ */new WeakSet();
    v_3227 = function (v_3268, v_3269) {
      if (v_1244(this, v_3220)) {
        const v_3270 = v_3205(v_3268, v_1244(this, v_3217));
        return v_1263(this, v_3224, v_3225).call(this, v_3270, v_3269);
      }
      var v_3271 = {
        type: "on",
        event: v_3268,
        callback: v_3269
      };
      v_1244(this, v_3222).push(v_3271);
    };
    v_3228 = /* @__PURE__ */new WeakSet();
    v_3229 = function (v_3272, ...v_3273) {
      var v_3274 = {
        event: v_3272,
        args: v_3273
      };
      SendNuiMessage(JSON.stringify(v_3274, null));
    };
    v_3230 = /* @__PURE__ */new WeakSet();
    v_3231 = function (v_3275, ...v_3276) {
      if (v_1244(this, v_3220)) {
        const v_3277 = v_3205(v_3275, v_1244(this, v_3217));
        return v_1263(this, v_3228, v_3229).call(this, v_3277, ...v_3276);
      }
      var v_3278 = {
        type: "emit",
        event: v_3275,
        args: v_3276
      };
      v_1244(this, v_3222).push(v_3278);
    };
    v_3232 = /* @__PURE__ */new WeakSet();
    v_3233 = async function () {
      v_1252(this, v_3220, true);
      v_1263(this, v_3226, v_3227).call(this, "__nui_res:" + v_1244(this, v_3216), (v_3279, [v_3280, v_3281]) => {
        const v_3282 = v_1244(this, v_3223).get(v_3279);
        if (!v_3282) {
          return v_3123.error("[NUI] Invalid response received");
        }
        clearTimeout(v_3282.timeout);
        if (v_3280) {
          v_3282.resolve(v_3281);
        } else {
          v_3282.reject(v_3281);
        }
      });
      v_1263(this, v_3228, v_3229).call(this, "__npx_sdk:ready", v_3199(v_1244(this, v_3217) + ":" + v_1244(this, v_3218) + ":" + v_1244(this, v_3219)));
      v_3123.debug("[NUI] SDK initialized");
      for (const v_3283 of v_1244(this, v_3222)) {
        if (v_3283.type === "on") {
          v_1263(this, v_3226, v_3227).call(this, v_3283.event, v_3283.callback);
        } else if (v_3283.type === "emit") {
          setTimeout(() => v_1263(this, v_3230, v_3231).call(this, v_3283.event, ...v_3283.args), 1000);
        } else if (v_3283.type === "execute") {
          const v_3284 = v_1244(this, v_3223).get(v_3283.metadata.id);
          if (!v_3284) {
            v_3123.error("[RPC] " + v_3283.event + " - Failed to execute queued RPC call");
            continue;
          }
          v_3284.timeout = setTimeout(() => v_3284.reject(new Error("RPC timed out | " + v_3283.event)), 60000);
          setTimeout(() => v_1263(this, v_3230, v_3231).call(this, v_3283.event, v_3208(v_3283.metadata, v_1244(this, v_3219)), v_3283.args), 1000);
        }
      }
    };
    var v_3285;
    var v_3286;
    var v_3287;
    var v_3288 = class {
      constructor(v_3289) {
        v_1248(this, v_3285, undefined);
        v_1248(this, v_3286, undefined);
        v_1248(this, v_3287, /* @__PURE__ */new Map());
        v_1252(this, v_3285, v_3289);
        v_1252(this, v_3286, false);
        const v_3290 = GetCurrentResourceName();
        on("onResourceStop", v_3291 => {
          if (v_3291 === v_3290) {
            for (const [v_3292, v_3293] of v_1244(this, v_3287).entries()) {
              v_3023.Sync[v_1244(this, v_3285)].removeNuiEvent(v_3292);
            }
          }
        });
        on("onResourceStart", async v_3294 => {
          if (v_3294 === v_1244(this, v_3285)) {
            await v_2744.waitForCondition(() => GetResourceState(v_1244(this, v_3285)) === "started", 10000);
            if (v_1244(this, v_3286)) {
              for (const [v_3295, v_3296] of v_1244(this, v_3287).entries()) {
                v_3023.Sync[v_1244(this, v_3285)].removeNuiEvent(v_3295);
                this.register(v_3295, v_3296);
              }
            }
            v_1252(this, v_3286, true);
          }
          if (v_3294 === v_3290) {
            await v_2744.waitForCondition(() => GetResourceState(v_1244(this, v_3285)) === "started", 10000);
            v_1252(this, v_3286, true);
          }
        });
      }
      async execute(v_3297, ...v_3298) {
        return await v_3023.Async[v_1244(this, v_3285)].sendNuiEvent(v_3297, v_3298);
      }
      async register(v_3299, v_3300) {
        await v_2744.waitForCondition(() => v_1244(this, v_3286), 10000);
        const v_3301 = v_3023.Sync[v_1244(this, v_3285)].registerNuiEvent(v_3299, v_3300);
        if (v_3301) {
          v_1244(this, v_3287).set(v_3299, v_3300);
        }
      }
    };
    v_3285 = /* @__PURE__ */new WeakMap();
    v_3286 = /* @__PURE__ */new WeakMap();
    v_3287 = /* @__PURE__ */new WeakMap();
    var v_3302 = class {
      constructor() {
        const v_3303 = async (v_3304, v_3305) => {
          return await v_3306.execute(v_3304, ...v_3305);
        };
        v_3023.Async("sendNuiEvent", v_3303);
        const v_3307 = (v_3308, v_3309) => {
          v_3306.register(v_3308, v_3309);
          return true;
        };
        v_3023.Sync("registerNuiEvent", v_3307);
        const v_3310 = v_3311 => {
          v_3306.remove(v_3311);
        };
        v_3023.Sync("removeNuiEvent", v_3310);
      }
    };
    var v_3312 = null;
    var v_3313 = null;
    var v_3306 = new v_3234();
    var v_3314;
    var v_3315;
    var v_3316;
    var v_3317 = class {
      constructor() {
        v_1248(this, v_3314, undefined);
        v_1248(this, v_3315, undefined);
        v_1248(this, v_3316, undefined);
        v_1252(this, v_3316, false);
        v_3306.register("__npx_sdk:sockets:init", async () => {
          v_3123.debug("Sockets", "Initializing sockets...");
          if (v_1244(this, v_3316)) {
            return {
              url: v_1244(this, v_3314),
              API_KEY: v_1244(this, v_3315)
            };
          }
          const v_3318 = await new Promise(v_3319 => {
            emit("__npx_core:sockets:init", v_3319);
          });
          if (!(v_3318 == null ? undefined : v_3318.API_URL) || !(v_3318 == null ? undefined : v_3318.API_KEY)) {
            return;
          }
          v_1252(this, v_3314, v_3318.API_URL);
          v_1252(this, v_3315, v_3318.API_KEY);
          v_1252(this, v_3316, true);
          v_3123.debug("Sockets", "Sockets initialized.");
          return v_3318;
        });
      }
      register(v_3320, v_3321) {
        v_3306.execute("__npx_sdk:sockets:register", v_3320);
        v_3306.register("__npx_sdk:sockets:pipe:" + v_3320, async v_3322 => {
          return v_3321(v_3322);
        });
      }
      async execute(v_3323, v_3324) {
        return v_3306.execute("__npx_sdk:sockets:execute", v_3323, v_3324);
      }
    };
    v_3314 = /* @__PURE__ */new WeakMap();
    v_3315 = /* @__PURE__ */new WeakMap();
    v_3316 = /* @__PURE__ */new WeakMap();
    var v_3325 = new v_3317();
    var v_3326 = {
      HasItem: async (v_3327, v_3328) => {
        return await v_3023.Sync.inventory.HasItem(v_3327, v_3328);
      },
      GetItemStacks: async (v_3329, v_3330) => {
        return await v_3023.Sync.inventory.GetItemStacks(v_3329, v_3330);
      },
      GetAllItemStacks: async v_3331 => {
        return await v_3023.Sync.inventory.GetAllItemStacks(v_3331);
      },
      GetItemList: async () => {
        return await v_3023.Sync.inventory.GetItemList();
      },
      GetPlayerInventories: async () => {
        return await v_3023.Sync.inventory.GetPlayerInventories();
      },
      GetPlayerInventoriesWeight: async () => {
        return await v_3023.Sync.inventory.GetPlayerInventoriesWeight();
      },
      GetWeaponsList: () => {
        return v_3023.Sync.inventory.GetWeaponsList();
      },
      GetWeapon: v_3332 => {
        return v_3023.Sync.inventory.GetWeapon(v_3332);
      },
      GetWeaponByItemStack: v_3333 => {
        return v_3023.Sync.inventory.GetWeaponByItemStack(v_3333);
      },
      OpenInventory: (v_3334, v_3335) => {
        v_3023.Sync.inventory.OpenInventory(v_3334, v_3335);
      },
      UseBodySlot: v_3336 => {
        return v_3023.Async.inventory.UseBodySlot(v_3336);
      },
      SetBodySlotDisabled: (v_3337, v_3338, v_3339) => {
        v_3023.Sync.inventory.SetBodySlotDisabled(v_3337, v_3338, v_3339);
      },
      IsBodySlotDisabled: (v_3340, v_3341) => {
        return v_3023.Sync.inventory.IsBodySlotDisabled(v_3340, v_3341);
      }
    };
    var v_3342 = {};
    var v_3343 = {
      Activity: () => v_3344,
      ActivityObjective: () => v_3345,
      ActivityTask: () => v_3346,
      Cache: () => v_2647,
      Group: () => v_3347,
      GroupManager: () => v_3348,
      GroupMember: () => v_3349,
      PolyZone: () => v_2778,
      Thread: () => v_3350,
      Vector2: () => v_2734,
      Vector3: () => v_2644
    };
    v_1226(v_3342, v_3343);
    var v_3350 = class {
      constructor(v_3351, v_3352, v_3353 = "interval") {
        this.callback = v_3351;
        this.delay = v_3352;
        this.mode = v_3353;
        this.scheduled = {};
        this.tick = 0;
        this.data = {};
        this.active = false;
        this.aborted = false;
        this.hooks = /* @__PURE__ */new Map([["active", []], ["preStop", []], ["preStart", []], ["afterStop", []], ["afterStart", []], ["stopAborted", []], ["startAborted", []]]);
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
        const v_3354 = this.hooks.get("preStart") ?? [];
        try {
          for (const v_3355 of v_3354) {
            if (!this.aborted) {
              await v_3355.call(this);
            }
          }
        } catch (v_3356) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", v_3356.message);
        }
        if (this.aborted) {
          try {
            const v_3357 = this.hooks.get("startAborted") ?? [];
            for (const v_3358 of v_3357) {
              await v_3358.call(this);
            }
          } catch (v_3359) {
            console.log("Error while calling start-aborted hook", v_3359.message);
          }
          return;
        }
        this.active = true;
        const v_3360 = this.hooks.get("active") ?? [];
        switch (this.mode) {
          case "tick":
            {
              this.threadId = setTick(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const v_3361 of v_3360) {
                    await v_3361.call(this);
                  }
                } catch (v_3362) {
                  console.log("Error while calling active hook", v_3362.message);
                }
                if (this.delay > 0) {
                  await new Promise(v_3363 => setTimeout(v_3363, this.delay));
                }
              });
              break;
            }
          case "interval":
            {
              this.threadId = setInterval(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const v_3364 of v_3360) {
                    await v_3364.call(this);
                  }
                } catch (v_3365) {
                  console.log("Error while calling active hook", v_3365.message);
                }
              }, this.delay);
              break;
            }
          case "timeout":
            {
              const v_3366 = () => {
                if (this.active) {
                  this.threadId = setTimeout(async () => {
                    this.tick += 1;
                    try {
                      await this.callback.call(this);
                      for (const v_3367 of v_3360) {
                        await v_3367.call(this);
                      }
                    } catch (v_3368) {
                      console.log("Error while calling active hook", v_3368.message);
                    }
                    return v_3366();
                  }, this.delay);
                }
              };
              v_3366();
              break;
            }
        }
        const v_3369 = this.hooks.get("afterStart") ?? [];
        try {
          for (const v_3370 of v_3369) {
            await v_3370.call(this);
          }
        } catch (v_3371) {
          console.log("Error while calling after-start hook", v_3371.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const v_3372 = this.hooks.get("preStop") ?? [];
        try {
          for (const v_3373 of v_3372) {
            if (!this.aborted) {
              await v_3373.call(this);
            }
          }
        } catch (v_3374) {
          this.aborted = true;
          console.log("Error while calling pre-stop hook", v_3374.message);
        }
        this.active = false;
        switch (this.mode) {
          case "tick":
            {
              clearTick(this.threadId);
              break;
            }
          case "interval":
            {
              clearInterval(this.threadId);
              break;
            }
          case "timeout":
            {
              clearTimeout(this.threadId);
              break;
            }
        }
        if (this.aborted) {
          try {
            const v_3375 = this.hooks.get("stopAborted") ?? [];
            for (const v_3376 of v_3375) {
              await v_3376.call(this);
            }
          } catch (v_3377) {
            console.log("Error while calling stop-aborted hook", v_3377.message);
          }
          return;
        }
        const v_3378 = this.hooks.get("afterStop") ?? [];
        try {
          for (const v_3379 of v_3378) {
            await v_3379.call(this);
          }
        } catch (v_3380) {
          console.log("Error while calling after-stop hook", v_3380.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(v_3381, v_3382) {
        var v_3383;
        if ((v_3383 = this.hooks.get(v_3381)) == null) {} else {
          v_3383.push(v_3382);
        }
      }
      setNextTick(v_3384, v_3385) {
        this.scheduled[v_3384] = this.tick + v_3385;
      }
      canTick(v_3386) {
        return this.scheduled[v_3386] === undefined || this.tick >= this.scheduled[v_3386];
      }
    };
    var v_3387;
    var v_3388;
    var v_3389;
    var v_3390;
    var v_3391;
    var v_3392;
    var v_3393;
    var v_3394;
    var v_3395;
    var v_3396;
    var v_3346 = class {
      constructor(v_3397, v_3398) {
        v_1248(this, v_3393);
        v_1248(this, v_3395);
        v_1248(this, v_3387, undefined);
        v_1248(this, v_3388, undefined);
        v_1248(this, v_3389, undefined);
        v_1248(this, v_3390, undefined);
        v_1248(this, v_3391, undefined);
        v_1248(this, v_3392, undefined);
        v_1252(this, v_3387, v_3397.id);
        v_1252(this, v_3388, v_3398);
        v_1252(this, v_3389, /* @__PURE__ */new Map());
        v_1252(this, v_3392, "pending");
        v_1252(this, v_3390, v_3397.required.map(v_3399 => v_3398.objectives.get(v_3399)));
        v_1252(this, v_3391, new Map(v_3397.objectives.map(v_3400 => [v_3400, v_3398.objectives.get(v_3400)])));
        if (v_3397.status !== "pending") {
          setTimeout(() => v_1263(this, v_3393, v_3394).call(this, v_3397.status), 3000);
        }
        v_3115.onNet("__npx_activities:" + v_1244(this, v_3388).id + ":task:" + v_1244(this, v_3387) + ":statusUpdate", v_1263(this, v_3393, v_3394).bind(this));
      }
      get id() {
        return v_1244(this, v_3387);
      }
      onTaskStarted(v_3401) {
        const v_3402 = v_1244(this, v_3389).get("onTaskStarted") ?? [];
        if (!v_1244(this, v_3389).has("onTaskStarted")) {
          v_1244(this, v_3389).set("onTaskStarted", v_3402);
        }
        v_3402.push(v_3401);
      }
      onTaskEnded(v_3403) {
        const v_3404 = v_1244(this, v_3389).get("onTaskEnded") ?? [];
        if (!v_1244(this, v_3389).has("onTaskEnded")) {
          v_1244(this, v_3389).set("onTaskEnded", v_3404);
        }
        v_3404.push(v_3403);
      }
      emitEvent(v_3405, ...v_3406) {
        return v_3189.execute("__npx_activities:" + v_1244(this, v_3388).id + ":task:" + v_1244(this, v_3387) + ":event", v_3405, ...v_3406);
      }
      toJSON() {
        return {
          id: v_1244(this, v_3387),
          status: v_1244(this, v_3392),
          objectives: [...v_1244(this, v_3391).keys()],
          required: v_1244(this, v_3390).map(v_3407 => v_3407.id)
        };
      }
      destroy() {
        v_1244(this, v_3389).clear();
      }
    };
    v_3387 = /* @__PURE__ */new WeakMap();
    v_3388 = /* @__PURE__ */new WeakMap();
    v_3389 = /* @__PURE__ */new WeakMap();
    v_3390 = /* @__PURE__ */new WeakMap();
    v_3391 = /* @__PURE__ */new WeakMap();
    v_3392 = /* @__PURE__ */new WeakMap();
    v_3393 = /* @__PURE__ */new WeakSet();
    v_3394 = function (v_3408) {
      const v_3409 = v_1244(this, v_3392);
      v_1252(this, v_3392, v_3408);
      if (v_3409 === "pending" && v_3408 === "active") {
        v_1263(this, v_3395, v_3396).call(this, "onTaskStarted");
      } else if (v_3409 === "active" && (v_3408 === "completed" || v_3408 === "failed")) {
        v_1263(this, v_3395, v_3396).call(this, "onTaskEnded", v_3408 === "completed");
      }
      v_1263(this, v_3395, v_3396).call(this, "onStatusUpdate", v_3408);
    };
    v_3395 = /* @__PURE__ */new WeakSet();
    v_3396 = function (v_3410, ...v_3411) {
      const v_3412 = v_1244(this, v_3389).get(v_3410);
      if (!v_3412) {
        return;
      }
      for (const v_3413 of v_3412) {
        try {
          v_3413.call(this, ...v_3411);
        } catch (v_3414) {
          console.error(v_3414);
        }
      }
    };
    var v_3415;
    var v_3416;
    var v_3417;
    var v_3418;
    var v_3419;
    var v_3420;
    var v_3421;
    var v_3422;
    var v_3423;
    var v_3424;
    var v_3425;
    var v_3426;
    var v_3427;
    var v_3428;
    var v_3429;
    var v_3345 = class {
      constructor(v_3430, v_3431) {
        v_1248(this, v_3422);
        v_1248(this, v_3424);
        v_1248(this, v_3426);
        v_1248(this, v_3428);
        v_1248(this, v_3415, undefined);
        v_1248(this, v_3416, undefined);
        v_1248(this, v_3417, undefined);
        v_1248(this, v_3418, undefined);
        v_1248(this, v_3419, undefined);
        v_1248(this, v_3420, undefined);
        v_1248(this, v_3421, undefined);
        v_1252(this, v_3415, v_3430.id);
        v_1252(this, v_3416, v_3430.name);
        v_1252(this, v_3417, v_3430.description);
        v_1252(this, v_3418, v_3431);
        v_1252(this, v_3419, /* @__PURE__ */new Map());
        v_1252(this, v_3420, v_3430.status);
        v_1252(this, v_3421, new Map(Object.entries(v_3430.data ?? {})));
        v_3115.onNet("__npx_activities:" + v_1244(this, v_3418).id + ":objective:" + v_1244(this, v_3415) + ":statusUpdate", v_1263(this, v_3422, v_3423).bind(this));
        v_3115.onNet("__npx_activities:" + v_1244(this, v_3418).id + ":objective:" + v_1244(this, v_3415) + ":dataUpdate", v_1263(this, v_3424, v_3425).bind(this));
        v_3115.onNet("__npx_activities:" + v_1244(this, v_3418).id + ":objective:" + v_1244(this, v_3415) + ":dataSet", v_1263(this, v_3426, v_3427).bind(this));
      }
      get id() {
        return v_1244(this, v_3415);
      }
      get name() {
        return v_1244(this, v_3416);
      }
      get description() {
        return v_1244(this, v_3417);
      }
      get status() {
        return v_1244(this, v_3420);
      }
      get activity() {
        return v_1244(this, v_3418);
      }
      getData(v_3432) {
        return v_1244(this, v_3421).get(v_3432);
      }
      onStatusUpdate(v_3433) {
        const v_3434 = v_1244(this, v_3419).get("onStatusUpdate") ?? [];
        if (!v_1244(this, v_3419).has("onStatusUpdate")) {
          v_1244(this, v_3419).set("onStatusUpdate", v_3434);
        }
        v_3434.push(v_3433);
      }
      onDataUpdate(v_3435) {
        const v_3436 = v_1244(this, v_3419).get("onDataUpdate") ?? [];
        if (!v_1244(this, v_3419).has("onDataUpdate")) {
          v_1244(this, v_3419).set("onDataUpdate", v_3436);
        }
        v_3436.push(v_3435);
      }
      toJSON() {
        return {
          id: v_1244(this, v_3415),
          name: v_1244(this, v_3416),
          description: v_1244(this, v_3417),
          status: v_1244(this, v_3420),
          data: Object.fromEntries(v_1244(this, v_3421))
        };
      }
      destroy() {
        v_1244(this, v_3419).clear();
      }
    };
    v_3415 = /* @__PURE__ */new WeakMap();
    v_3416 = /* @__PURE__ */new WeakMap();
    v_3417 = /* @__PURE__ */new WeakMap();
    v_3418 = /* @__PURE__ */new WeakMap();
    v_3419 = /* @__PURE__ */new WeakMap();
    v_3420 = /* @__PURE__ */new WeakMap();
    v_3421 = /* @__PURE__ */new WeakMap();
    v_3422 = /* @__PURE__ */new WeakSet();
    v_3423 = function (v_3437) {
      v_1252(this, v_3420, v_3437);
      v_1263(this, v_3428, v_3429).call(this, "onStatusUpdated", v_3437);
    };
    v_3424 = /* @__PURE__ */new WeakSet();
    v_3425 = function (v_3438, v_3439) {
      v_1244(this, v_3421).set(v_3438, v_3439);
      v_1263(this, v_3428, v_3429).call(this, "onDataUpdate", v_3438, v_3439);
    };
    v_3426 = /* @__PURE__ */new WeakSet();
    v_3427 = function (v_3440) {
      for (const [v_3441, v_3442] of Object.entries(v_3440)) {
        v_1244(this, v_3421).set(v_3441, v_3442);
        v_1263(this, v_3428, v_3429).call(this, "onDataUpdate", v_3441, v_3442);
      }
    };
    v_3428 = /* @__PURE__ */new WeakSet();
    v_3429 = function (v_3443, ...v_3444) {
      const v_3445 = v_1244(this, v_3419).get(v_3443);
      if (!v_3445) {
        return;
      }
      for (const v_3446 of v_3445) {
        try {
          v_3446.call(this, ...v_3444);
        } catch (v_3447) {
          console.error(v_3447);
        }
      }
    };
    var v_3448;
    var v_3449;
    var v_3450;
    var v_3451;
    var v_3452;
    var v_3453;
    var v_3454;
    var v_3455;
    var v_3456;
    var v_3457;
    var v_3458;
    var v_3459;
    var v_3460;
    var v_3461;
    var v_3462;
    var v_3463;
    var v_3464;
    var v_3465;
    var v_3466;
    var v_3467;
    var v_3468;
    var v_3344 = class {
      constructor(v_3469) {
        v_1248(this, v_3457);
        v_1248(this, v_3459);
        v_1248(this, v_3461);
        v_1248(this, v_3463);
        v_1248(this, v_3465);
        v_1248(this, v_3467);
        v_1248(this, v_3448, undefined);
        v_1248(this, v_3449, undefined);
        v_1248(this, v_3450, undefined);
        v_1248(this, v_3451, undefined);
        v_1248(this, v_3452, undefined);
        v_1248(this, v_3453, undefined);
        v_1248(this, v_3454, undefined);
        v_1248(this, v_3455, undefined);
        v_1248(this, v_3456, undefined);
        v_1252(this, v_3448, v_3469.id);
        v_1252(this, v_3449, v_3469.code);
        v_1252(this, v_3450, v_3469.name);
        v_1252(this, v_3451, v_3469.description);
        v_1252(this, v_3452, /* @__PURE__ */new Map());
        v_1252(this, v_3453, "pending");
        v_1252(this, v_3454, v_3469.deadline ? new Date(v_3469.deadline) : null);
        v_1252(this, v_3455, /* @__PURE__ */new Map());
        v_1252(this, v_3456, /* @__PURE__ */new Map());
        if (v_3469.status !== "pending") {
          setTimeout(() => v_1263(this, v_3457, v_3458).call(this, v_3469.status), 3000);
        }
        v_3469.objectives.forEach(v_3470 => v_1263(this, v_3459, v_3460).call(this, v_3470));
        v_3469.tasks.forEach(v_3471 => v_1263(this, v_3463, v_3464).call(this, v_3471));
        v_3115.onNet("__npx_activities:" + v_1244(this, v_3448) + ":statusUpdate", v_1263(this, v_3457, v_3458).bind(this));
        v_3115.onNet("__npx_activities:" + v_1244(this, v_3448) + ":objectiveAdded", v_1263(this, v_3459, v_3460).bind(this));
        v_3115.onNet("__npx_activities:" + v_1244(this, v_3448) + ":objectiveRemoved", v_1263(this, v_3461, v_3462).bind(this));
        v_3115.onNet("__npx_activities:" + v_1244(this, v_3448) + ":taskAdded", v_1263(this, v_3463, v_3464).bind(this));
        v_3115.onNet("__npx_activities:" + v_1244(this, v_3448) + ":taskRemoved", v_1263(this, v_3465, v_3466).bind(this));
      }
      get id() {
        return v_1244(this, v_3448);
      }
      get status() {
        return v_1244(this, v_3453);
      }
      get objectives() {
        return v_1244(this, v_3456);
      }
      on(v_3472, v_3473) {
        const v_3474 = v_1244(this, v_3452).get(v_3472) ?? [];
        if (!v_1244(this, v_3452).has(v_3472)) {
          v_1244(this, v_3452).set(v_3472, v_3474);
        }
        v_3474.push(v_3473);
      }
      toJSON() {
        var v_3475;
        return {
          id: v_1244(this, v_3448),
          code: v_1244(this, v_3449),
          name: v_1244(this, v_3450),
          description: v_1244(this, v_3451),
          status: v_1244(this, v_3453),
          deadline: ((v_3475 = v_1244(this, v_3454)) == null ? undefined : v_3475.getTime()) ?? null,
          tasks: [...v_1244(this, v_3455).values()].map(v_3476 => v_3476.toJSON()),
          objectives: [...v_1244(this, v_3456).values()].map(v_3477 => v_3477.toJSON())
        };
      }
      destroy() {
        v_1244(this, v_3455).forEach(v_3478 => v_3478.destroy());
        v_1244(this, v_3456).forEach(v_3479 => v_3479.destroy());
        v_1244(this, v_3455).clear();
        v_1244(this, v_3456).clear();
        v_1244(this, v_3452).clear();
      }
    };
    v_3448 = /* @__PURE__ */new WeakMap();
    v_3449 = /* @__PURE__ */new WeakMap();
    v_3450 = /* @__PURE__ */new WeakMap();
    v_3451 = /* @__PURE__ */new WeakMap();
    v_3452 = /* @__PURE__ */new WeakMap();
    v_3453 = /* @__PURE__ */new WeakMap();
    v_3454 = /* @__PURE__ */new WeakMap();
    v_3455 = /* @__PURE__ */new WeakMap();
    v_3456 = /* @__PURE__ */new WeakMap();
    v_3457 = /* @__PURE__ */new WeakSet();
    v_3458 = function (v_3480) {
      const v_3481 = v_1244(this, v_3453);
      v_1252(this, v_3453, v_3480);
      if (v_3481 === "pending" && v_3480 === "active") {
        v_1263(this, v_3467, v_3468).call(this, "onActivityStarted");
      } else if (v_3480 === "completed" || v_3480 === "failed") {
        v_1263(this, v_3467, v_3468).call(this, "onActivityEnded", v_3480, v_3480 === "completed");
      }
      v_1263(this, v_3467, v_3468).call(this, "onStatusUpdate", v_3480);
    };
    v_3459 = /* @__PURE__ */new WeakSet();
    v_3460 = function (v_3482) {
      const v_3483 = new v_3345(v_3482, this);
      v_3483.onStatusUpdate(v_3484 => v_1263(this, v_3467, v_3468).call(this, "onObjectiveStatusUpdate", v_3483, v_3484));
      v_3483.onDataUpdate((v_3485, v_3486) => v_1263(this, v_3467, v_3468).call(this, "onObjectiveDataUpdate", v_3483, v_3485, v_3486));
      v_1244(this, v_3456).set(v_3483.id, v_3483);
      v_1263(this, v_3467, v_3468).call(this, "onObjectiveAdded", v_3483);
    };
    v_3461 = /* @__PURE__ */new WeakSet();
    v_3462 = function (v_3487) {
      const v_3488 = v_1244(this, v_3456).get(v_3487.id);
      if (!v_3488) {
        return;
      }
      v_1244(this, v_3456).delete(v_3487.id);
      v_1263(this, v_3467, v_3468).call(this, "onObjectiveRemoved", v_3488);
      v_3488.destroy();
    };
    v_3463 = /* @__PURE__ */new WeakSet();
    v_3464 = function (v_3489) {
      const v_3490 = new v_3346(v_3489, this);
      v_3490.onTaskStarted(() => v_1263(this, v_3467, v_3468).call(this, "onTaskStarted", v_3490));
      v_3490.onTaskEnded(v_3491 => v_1263(this, v_3467, v_3468).call(this, "onTaskEnded", v_3490, v_3491));
      v_1244(this, v_3455).set(v_3490.id, v_3490);
      v_1263(this, v_3467, v_3468).call(this, "onTaskAdded", v_3490);
    };
    v_3465 = /* @__PURE__ */new WeakSet();
    v_3466 = function (v_3492) {
      const v_3493 = v_1244(this, v_3455).get(v_3492.id);
      if (!v_3493) {
        return;
      }
      v_1244(this, v_3455).delete(v_3492.id);
      v_1263(this, v_3467, v_3468).call(this, "onTaskRemoved", v_3493);
      v_3493.destroy();
    };
    v_3467 = /* @__PURE__ */new WeakSet();
    v_3468 = function (v_3494, ...v_3495) {
      const v_3496 = v_1244(this, v_3452).get(v_3494);
      if (!v_3496) {
        return;
      }
      for (const v_3497 of v_3496) {
        try {
          v_3497.call(this, ...v_3495);
        } catch (v_3498) {
          console.error(v_3498);
        }
      }
    };
    var v_3499;
    var v_3500;
    var v_3501;
    var v_3502;
    var v_3503;
    var v_3504;
    var v_3505;
    var v_3506;
    var v_3507;
    var v_3508;
    var v_3509;
    var v_3510;
    var v_3511;
    var v_3512;
    var v_3513;
    var v_3514;
    var v_3515;
    var v_3516;
    var v_3517;
    var v_3518;
    var v_3519;
    var v_3520;
    var v_3347 = class {
      constructor(v_3521) {
        v_1248(this, v_3507);
        v_1248(this, v_3509);
        v_1248(this, v_3511);
        v_1248(this, v_3513);
        v_1248(this, v_3515);
        v_1248(this, v_3517);
        v_1248(this, v_3519);
        v_1248(this, v_3499, undefined);
        v_1248(this, v_3500, undefined);
        v_1248(this, v_3501, undefined);
        v_1248(this, v_3502, undefined);
        v_1248(this, v_3503, undefined);
        v_1248(this, v_3504, undefined);
        v_1248(this, v_3505, undefined);
        v_1248(this, v_3506, undefined);
        v_1252(this, v_3499, v_3521.id);
        v_1252(this, v_3501, /* @__PURE__ */new Map());
        v_1252(this, v_3502, v_3521.name);
        v_1252(this, v_3503, v_3521.capacity);
        v_1252(this, v_3505, null);
        v_1252(this, v_3506, new Map(Object.entries(v_3521.data)));
        v_1252(this, v_3500, /* @__PURE__ */new Map());
        v_1252(this, v_3504, null);
        for (const v_3522 of v_3521.members) {
          const v_3523 = new v_3349(v_3522, this);
          v_1244(this, v_3500).set(v_3523.characterId, v_3523);
          if (v_3522.isLeader) {
            v_1252(this, v_3504, v_3523);
          }
        }
        if (v_3521.activity) {
          setTimeout(() => v_1263(this, v_3517, v_3518).call(this, v_3521.activity), 3000);
        }
        v_3115.onNet("__npx_groups:group:" + v_1244(this, v_3499) + ":data:update", v_1263(this, v_3509, v_3510).bind(this));
        v_3115.onNet("__npx_groups:group:" + v_1244(this, v_3499) + ":activity:set", v_1263(this, v_3517, v_3518).bind(this));
        v_3115.onNet("__npx_groups:group:" + v_1244(this, v_3499) + ":group:update", v_1263(this, v_3507, v_3508).bind(this));
        v_3115.onNet("__npx_groups:group:" + v_1244(this, v_3499) + ":member:joined", v_1263(this, v_3511, v_3512).bind(this));
        v_3115.onNet("__npx_groups:group:" + v_1244(this, v_3499) + ":member:left", v_1263(this, v_3513, v_3514).bind(this));
        v_3115.onNet("__npx_groups:group:" + v_1244(this, v_3499) + ":member:update", v_1263(this, v_3515, v_3516).bind(this));
      }
      get id() {
        return v_1244(this, v_3499);
      }
      get name() {
        return v_1244(this, v_3502);
      }
      get capacity() {
        return v_1244(this, v_3503);
      }
      get size() {
        return v_1244(this, v_3500).size;
      }
      get leader() {
        return v_1244(this, v_3504);
      }
      get members() {
        return [...v_1244(this, v_3500).values()];
      }
      get activity() {
        return v_1244(this, v_3505);
      }
      on(v_3524, v_3525) {
        const v_3526 = v_1244(this, v_3501).get(v_3524) ?? [];
        if (!v_1244(this, v_3501).has(v_3524)) {
          v_1244(this, v_3501).set(v_3524, v_3526);
        }
        v_3526.push(v_3525);
      }
      getValue(v_3527) {
        return v_1244(this, v_3506).get(v_3527);
      }
      toJSON() {
        var v_3528;
        return {
          id: v_1244(this, v_3499),
          name: v_1244(this, v_3502),
          capacity: v_1244(this, v_3503),
          activity: ((v_3528 = v_1244(this, v_3505)) == null ? undefined : v_3528.toJSON()) ?? null,
          members: [...v_1244(this, v_3500).values()].map(v_3529 => v_3529.toJSON()),
          data: Object.fromEntries(v_1244(this, v_3506))
        };
      }
      destroy() {
        v_1244(this, v_3501).clear();
        v_1244(this, v_3500).clear();
        v_1244(this, v_3506).clear();
      }
    };
    v_3499 = /* @__PURE__ */new WeakMap();
    v_3500 = /* @__PURE__ */new WeakMap();
    v_3501 = /* @__PURE__ */new WeakMap();
    v_3502 = /* @__PURE__ */new WeakMap();
    v_3503 = /* @__PURE__ */new WeakMap();
    v_3504 = /* @__PURE__ */new WeakMap();
    v_3505 = /* @__PURE__ */new WeakMap();
    v_3506 = /* @__PURE__ */new WeakMap();
    v_3507 = /* @__PURE__ */new WeakSet();
    v_3508 = function (v_3530) {
      v_1252(this, v_3502, v_3530.name);
      v_1252(this, v_3503, v_3530.capacity);
      v_1263(this, v_3519, v_3520).call(this, "group:update", this);
    };
    v_3509 = /* @__PURE__ */new WeakSet();
    v_3510 = function (v_3531, v_3532) {
      v_1244(this, v_3506).set(v_3531, v_3532);
      v_1263(this, v_3519, v_3520).call(this, "data:update", v_3531, v_3532);
    };
    v_3511 = /* @__PURE__ */new WeakSet();
    v_3512 = function (v_3533) {
      const v_3534 = new v_3349(v_3533, this);
      v_1244(this, v_3500).set(v_3534.characterId, v_3534);
      v_1263(this, v_3519, v_3520).call(this, "member:joined", v_3534);
    };
    v_3513 = /* @__PURE__ */new WeakSet();
    v_3514 = function (v_3535) {
      const v_3536 = v_1244(this, v_3500).get(v_3535);
      if (!v_3536) {
        return;
      }
      v_1244(this, v_3500).delete(v_3535);
      if (v_1244(this, v_3504) === v_3536) {
        v_1252(this, v_3504, null);
      }
      v_1263(this, v_3519, v_3520).call(this, "member:left", v_3536);
    };
    v_3515 = /* @__PURE__ */new WeakSet();
    v_3516 = function (v_3537, v_3538, v_3539) {
      const v_3540 = v_1244(this, v_3500).get(v_3537);
      if (!v_3540) {
        return;
      }
      if (v_3540.serverId !== v_3538) {
        v_3540.updateServerId(v_3538);
      }
      if (v_3539) {
        v_1252(this, v_3504, v_3540);
      }
      v_1263(this, v_3519, v_3520).call(this, "member:update", v_3540);
    };
    v_3517 = /* @__PURE__ */new WeakSet();
    v_3518 = function (v_3541) {
      const v_3542 = v_3541 ? new v_3344(v_3541) : null;
      v_1252(this, v_3505, v_3542);
      v_1263(this, v_3519, v_3520).call(this, "activity:set", v_3542);
    };
    v_3519 = /* @__PURE__ */new WeakSet();
    v_3520 = function (v_3543, ...v_3544) {
      const v_3545 = v_1244(this, v_3501).get(v_3543);
      if (!v_3545) {
        return;
      }
      for (const v_3546 of v_3545) {
        try {
          v_3546.call(this, ...v_3544);
        } catch (v_3547) {
          console.error(v_3547);
        }
      }
    };
    var v_3548;
    var v_3549;
    var v_3550;
    var v_3551;
    var v_3349 = class {
      constructor(v_3552, v_3553) {
        v_1248(this, v_3548, undefined);
        v_1248(this, v_3549, undefined);
        v_1248(this, v_3550, undefined);
        v_1248(this, v_3551, undefined);
        v_1252(this, v_3548, v_3552.characterId);
        v_1252(this, v_3549, v_3552.name);
        v_1252(this, v_3550, v_3553);
        v_1252(this, v_3551, v_3552.serverId);
      }
      get group() {
        return v_1244(this, v_3550);
      }
      get characterId() {
        return v_1244(this, v_3548);
      }
      get name() {
        return v_1244(this, v_3549);
      }
      get serverId() {
        return v_1244(this, v_3551);
      }
      get isOnline() {
        return v_1244(this, v_3551) !== null;
      }
      get isLeader() {
        return v_1244(this, v_3550).leader === this;
      }
      updateServerId(v_3554) {
        v_1252(this, v_3551, v_3554);
      }
      toJSON() {
        return {
          characterId: v_1244(this, v_3548),
          serverId: v_1244(this, v_3551),
          name: v_1244(this, v_3549),
          isLeader: this.isLeader,
          isOnline: this.isOnline
        };
      }
    };
    v_3548 = /* @__PURE__ */new WeakMap();
    v_3549 = /* @__PURE__ */new WeakMap();
    v_3550 = /* @__PURE__ */new WeakMap();
    v_3551 = /* @__PURE__ */new WeakMap();
    var v_3555;
    var v_3556;
    var v_3557;
    var v_3558;
    var v_3559;
    var v_3560;
    var v_3561;
    var v_3562;
    var v_3563;
    var v_3348 = class {
      constructor(v_3564) {
        v_1248(this, v_3558);
        v_1248(this, v_3560);
        v_1248(this, v_3562);
        v_1248(this, v_3555, undefined);
        v_1248(this, v_3556, undefined);
        v_1248(this, v_3557, undefined);
        v_1252(this, v_3555, v_3564 ?? GetCurrentResourceName());
        v_1252(this, v_3556, /* @__PURE__ */new Map());
        v_1252(this, v_3557, /* @__PURE__ */new Map());
        v_3115.onNet("__npx_groups:manager:" + v_1244(this, v_3555) + ":addedToGroup", v_1263(this, v_3558, v_3559).bind(this));
        v_3115.onNet("__npx_groups:manager:" + v_1244(this, v_3555) + ":removedFromGroup", v_1263(this, v_3560, v_3561).bind(this));
        on("np-base:clearStates", this.reset.bind(this));
        on("np-spawn:characterSpawned", this.init.bind(this));
        const v_3565 = v_3023.Sync.isPed.isPed("cid");
        if (v_3565) {
          this.init();
        }
      }
      get list() {
        return v_1244(this, v_3556);
      }
      async init() {
        if (v_1244(this, v_3556).size > 0) {
          this.reset();
        }
        const v_3566 = await v_3189.execute("__npx_groups:manager:" + v_1244(this, v_3555) + ":init");
        if (!v_3566) {
          return;
        }
        for (const v_3567 of v_3566) {
          v_1263(this, v_3558, v_3559).call(this, v_3567);
        }
        v_3123.debug("[Group Manager] Initialized! | Groups: " + v_1244(this, v_3556).size);
      }
      reset() {
        v_1244(this, v_3556).forEach(v_3568 => v_3568.destroy());
        v_1244(this, v_3556).clear();
      }
      on(v_3569, v_3570) {
        const v_3571 = v_1244(this, v_3557).get(v_3569) ?? [];
        if (!v_1244(this, v_3557).has(v_3569)) {
          v_1244(this, v_3557).set(v_3569, v_3571);
        }
        v_3571.push(v_3570);
      }
    };
    v_3555 = /* @__PURE__ */new WeakMap();
    v_3556 = /* @__PURE__ */new WeakMap();
    v_3557 = /* @__PURE__ */new WeakMap();
    v_3558 = /* @__PURE__ */new WeakSet();
    v_3559 = function (v_3572) {
      const v_3573 = new v_3347(v_3572);
      v_3573.on("activity:set", v_3574 => v_3574 && v_1263(this, v_3562, v_3563).call(this, "activityAssigned", v_3573, v_3574));
      v_1244(this, v_3556).set(v_3573.id, v_3573);
      v_1263(this, v_3562, v_3563).call(this, "addedToGroup", v_3573);
    };
    v_3560 = /* @__PURE__ */new WeakSet();
    v_3561 = function (v_3575) {
      const v_3576 = v_1244(this, v_3556).get(v_3575);
      if (!v_3576) {
        return;
      }
      v_1244(this, v_3556).delete(v_3575);
      v_3576.destroy();
      v_1263(this, v_3562, v_3563).call(this, "removedFromGroup", v_3576.id);
    };
    v_3562 = /* @__PURE__ */new WeakSet();
    v_3563 = function (v_3577, ...v_3578) {
      const v_3579 = v_1244(this, v_3557).get(v_3577) ?? [];
      for (const v_3580 of v_3579) {
        try {
          v_3580.call(this, ...v_3578);
        } catch (v_3581) {
          console.error(v_3581);
        }
      }
    };
    var v_3582 = {};
    var v_3583 = {
      GetEntityStateValue: () => v_3584,
      GetPlayerStateValue: () => v_3585,
      RegisterStatebagChangeHandler: () => v_3586,
      SetEntityStateValue: () => v_3587,
      SetPlayerStateValue: () => v_3588
    };
    v_1226(v_3582, v_3583);
    var v_3589 = new v_2647(5000);
    function v_3590(v_3591) {
      let v_3592 = v_3589.get("ent-" + v_3591);
      if (v_3592) {
        return v_3592;
      }
      v_3592 = Entity(v_3591);
      v_3589.set("ent-" + v_3591, v_3592);
      return v_3592;
    }
    function v_3584(v_3593, v_3594) {
      const v_3595 = v_3590(v_3593);
      return v_3595.state[v_3594];
    }
    function v_3587(v_3596, v_3597, v_3598, v_3599 = false) {
      const v_3600 = v_3590(v_3596);
      v_3600.state.set(v_3597, v_3598, v_3599);
    }
    function v_3601(v_3602) {
      let v_3603 = v_3589.get("ply-" + v_3602);
      if (v_3603) {
        return v_3603;
      }
      v_3603 = Player(v_3602);
      v_3589.set("ply-" + v_3602, v_3603);
      return v_3603;
    }
    function v_3585(v_3604, v_3605) {
      const v_3606 = v_3601(v_3604);
      return v_3606.state[v_3605];
    }
    function v_3588(v_3607, v_3608, v_3609, v_3610 = false) {
      const v_3611 = v_3601(v_3607);
      v_3611.state.set(v_3608, v_3609, v_3610);
    }
    function v_3586(v_3612, v_3613, v_3614, v_3615) {
      return AddStateBagChangeHandler(v_3612, null, async function (v_3616, v_3617, v_3618, v_3619, v_3620) {
        if (v_3614 && !v_3620) {
          return;
        }
        const v_3621 = v_3616.startsWith("player");
        const v_3622 = parseInt(v_3616.substring(7));
        const v_3623 = v_3621 ? GetPlayerFromStateBagName(v_3616) : GetEntityFromStateBagName(v_3616);
        if (!v_3623) {
          return;
        }
        const v_3624 = v_3621 ? NetworkGetPlayerIndexFromPed(v_3623) === PlayerId() : NetworkGetEntityOwner(v_3623) === PlayerId();
        if (v_3613 && !v_3624) {
          return;
        }
        v_3615(v_3622, v_3623, v_3618);
      });
    }
    var v_3625 = {};
    var v_3626 = {
      GetFuelLevel: () => v_3627,
      GetIdentifier: () => v_3628,
      GetMetadata: () => v_3629,
      HasKey: () => v_3630,
      IsVinScratched: () => v_3631,
      SwapSeat: () => v_3632,
      TurnOffEngine: () => v_3633,
      TurnOnEngine: () => v_3634
    };
    v_1226(v_3625, v_3626);
    function v_3634(v_3635) {
      v_3023.Sync["np-vehicles"].TurnOnEngine(v_3635);
    }
    function v_3633(v_3636) {
      v_3023.Sync["np-vehicles"].TurnOffEngine(v_3636);
    }
    function v_3630(v_3637) {
      return v_3023.Sync["np-vehicles"].HasVehicleKey(v_3637);
    }
    function v_3629(v_3638, v_3639) {
      const v_3640 = v_3584(v_3638, "data");
      if (v_3639) {
        if (v_3640 == null) {
          return undefined;
        } else {
          return v_3640[v_3639];
        }
      } else {
        return v_3640;
      }
    }
    function v_3628(v_3641) {
      return v_3584(v_3641, "vin");
    }
    function v_3631(v_3642) {
      return v_3584(v_3642, "vinScratched");
    }
    function v_3632(v_3643, v_3644) {
      v_3023.Sync["np-vehicles"].SwapVehicleSeat(v_3643, v_3644);
    }
    function v_3627(v_3645) {
      return v_3629(v_3645, "fuel") ?? 0;
    }
    var v_3646 = {};
    var v_3647 = {
      GetUIFocus: () => v_3648,
      RegisterUICallback: () => v_3649,
      SendUIAppMessage: () => v_3650,
      SendUIMessage: () => v_3651,
      SetUIFocus: () => v_3652
    };
    v_1226(v_3646, v_3647);
    var v_3653 = [];
    function v_3649(v_3654, v_3655) {
      AddEventHandler("_npx_uiReq:" + v_3654, v_3655);
      exports["np-ui"].RegisterUIEvent(v_3654);
      v_3653.push(v_3654);
    }
    function v_3651(v_3656) {
      exports["np-ui"].SendUIMessage(v_3656);
    }
    function v_3650(v_3657, v_3658) {
      var v_3659 = {
        source: "np-nui",
        app: v_3657,
        data: v_3658
      };
      exports["np-ui"].SendUIMessage(v_3659);
    }
    function v_3652(v_3660, v_3661) {
      exports["np-ui"].SetUIFocus(v_3660, v_3661);
    }
    function v_3648() {
      return exports["np-ui"].GetUIFocus();
    }
    AddEventHandler("_npx_uiReady", () => {
      v_3653.forEach(v_3662 => exports["np-ui"].RegisterUIEvent(v_3662));
    });
    var v_3663 = {};
    var v_3664 = {
      Manager: () => v_3665
    };
    v_1226(v_3663, v_3664);
    var v_3666;
    var v_3667;
    var v_3668;
    var v_3669;
    var v_3670;
    var v_3671;
    var v_3672;
    var v_3673;
    var v_3674;
    var v_3675;
    var v_3676;
    var v_3677;
    var v_3678;
    var v_3679;
    var v_3680;
    var v_3681;
    var v_3682;
    var v_3683;
    var v_3684;
    var v_3685;
    var v_3686;
    var v_3687;
    var v_3688;
    var v_3689;
    var v_3690;
    var v_3691;
    var v_3692;
    var v_3693;
    var v_3665 = class {
      constructor(v_3694, v_3695) {
        v_1248(this, v_3670);
        v_1248(this, v_3672);
        v_1248(this, v_3674);
        v_1248(this, v_3676);
        v_1248(this, v_3678);
        v_1248(this, v_3680);
        v_1248(this, v_3682);
        v_1248(this, v_3684);
        v_1248(this, v_3686);
        v_1248(this, v_3688);
        v_1248(this, v_3690);
        v_1248(this, v_3692);
        v_1248(this, v_3666, undefined);
        v_1248(this, v_3667, undefined);
        v_1248(this, v_3668, null);
        v_1248(this, v_3669, undefined);
        v_1252(this, v_3666, v_3694);
        v_1252(this, v_3667, v_3695);
        v_1252(this, v_3669, null);
        v_1244(this, v_3667).on("addedToGroup", v_1263(this, v_3678, v_3679).bind(this));
        v_1244(this, v_3667).on("removedFromGroup", v_1263(this, v_3680, v_3681).bind(this));
        v_3115.on("jobs:app:ready", () => {
          if (!v_1244(this, v_3669)) {
            return;
          }
          v_1263(this, v_3682, v_3683).call(this, v_1244(this, v_3669));
        });
        v_3115.on("jobs:jobChanged", v_3696 => {
          v_1252(this, v_3668, v_3696);
          if (!v_1244(this, v_3669)) {
            return;
          }
          const v_3697 = (v_3696 == null ? undefined : v_3696.id) === v_1244(this, v_3666);
          if (!v_3697) {
            return v_1263(this, v_3680, v_3681).call(this, v_1244(this, v_3669).id);
          }
          v_1263(this, v_3682, v_3683).call(this, v_1244(this, v_3669));
        });
        v_3115.onNet("__npx_jobs:" + v_1244(this, v_3666) + ":groups:invite:request", v_1263(this, v_3672, v_3673).bind(this));
        v_3115.onNet("__npx_jobs:" + v_1244(this, v_3666) + ":groups:invite:received", v_1263(this, v_3670, v_3671).bind(this));
        v_3115.onNet("__npx_jobs:" + v_1244(this, v_3666) + ":groups:invite:response", v_1263(this, v_3674, v_3675).bind(this));
        v_3115.onNet("__npx_jobs:" + v_1244(this, v_3666) + ":groups:invite:aborted", v_1263(this, v_3676, v_3677).bind(this));
      }
      get group() {
        return v_1244(this, v_3669);
      }
      async sendGroupInvite(v_3698) {
        if (!v_1244(this, v_3668) || v_1244(this, v_3668).id !== v_1244(this, v_3666)) {
          return;
        }
        const [v_3699, v_3700] = await v_3189.execute("jobs:app:" + v_1244(this, v_3666) + ":groups:invite:send", v_3698);
        if (!v_3699) {
          return v_3701.phoneNotification("Group Invite", v_3700, true);
        }
        v_3701.phoneNotification("Group Invite", "Invite sent!", true);
        v_3123.debug("[Job APP] Invite sent! " + v_3700);
      }
      async sendGroupJoinRequest(v_3702) {
        if (!v_1244(this, v_3668) || v_1244(this, v_3668).id !== v_1244(this, v_3666)) {
          return;
        }
        const [v_3703, v_3704] = await v_3189.execute("jobs:app:" + v_1244(this, v_3666) + ":groups:invite:request", v_3702);
        if (!v_3703) {
          return v_3701.phoneNotification("Group Invite", v_3704, true);
        }
        v_3701.phoneNotification("Group Invite", "Join request sent!", true);
        v_3123.debug("[Job APP] Join request sent! " + v_3704);
      }
    };
    v_3666 = /* @__PURE__ */new WeakMap();
    v_3667 = /* @__PURE__ */new WeakMap();
    v_3668 = /* @__PURE__ */new WeakMap();
    v_3669 = /* @__PURE__ */new WeakMap();
    v_3670 = /* @__PURE__ */new WeakSet();
    v_3671 = async function (v_3705, v_3706) {
      v_3123.debug("[Job APP] Invite received! " + v_3705 + " " + v_3706);
      const v_3707 = "Received an invite to join the group \"" + v_3706 + "\"";
      const v_3708 = await v_3701.phoneConfirmation("Group Invite", v_3707, "users", 30000);
      const [v_3709, v_3710] = await v_3189.execute("jobs:app:" + v_1244(this, v_3666) + ":groups:invite:response", v_3705, v_3708);
      if (!v_3709) {
        return v_3701.phoneNotification("Group Invite", v_3710, true);
      }
    };
    v_3672 = /* @__PURE__ */new WeakSet();
    v_3673 = async function (v_3711, v_3712) {
      v_3123.debug("[Job APP] Join request received! " + v_3711 + " " + v_3712);
      const v_3713 = "Received a group join request from " + v_3712;
      const v_3714 = await v_3701.phoneConfirmation("Group Invite", v_3713, "users", 30000);
      const [v_3715, v_3716] = await v_3189.execute("jobs:app:" + v_1244(this, v_3666) + ":groups:invite:response", v_3711, v_3714);
      if (!v_3715) {
        return v_3701.phoneNotification("Group Invite", v_3716, true);
      }
    };
    v_3674 = /* @__PURE__ */new WeakSet();
    v_3675 = function (v_3717, v_3718) {
      v_3123.debug("[Job APP] Invite response received! " + v_3717 + " " + v_3718);
    };
    v_3676 = /* @__PURE__ */new WeakSet();
    v_3677 = function (v_3719, v_3720) {
      v_3123.debug("[Job APP] Invite aborted! " + v_3719 + " " + v_3720);
    };
    v_3678 = /* @__PURE__ */new WeakSet();
    v_3679 = function (v_3721) {
      v_1252(this, v_3669, v_3721);
      v_1244(this, v_3669).on("group:update", v_1263(this, v_3682, v_3683).bind(this));
      v_1244(this, v_3669).on("activity:set", v_1263(this, v_3690, v_3691).bind(this, v_3721));
      v_1244(this, v_3669).on("data:update", v_1263(this, v_3692, v_3693).bind(this, v_3721));
      v_1244(this, v_3669).on("member:joined", v_1263(this, v_3684, v_3685).bind(this, v_3721));
      v_1244(this, v_3669).on("member:left", v_1263(this, v_3686, v_3687).bind(this, v_3721));
      v_1244(this, v_3669).on("member:update", v_1263(this, v_3688, v_3689).bind(this, v_3721));
      v_3646.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: v_1244(this, v_3666),
        group: v_3721.toJSON()
      });
      v_3123.debug("[Job APP] Added to group!");
    };
    v_3680 = /* @__PURE__ */new WeakSet();
    v_3681 = function (v_3722) {
      v_1252(this, v_3669, null);
      v_3646.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: v_1244(this, v_3666),
        group: null
      });
      v_3123.debug("[Job APP] Removed from group!");
    };
    v_3682 = /* @__PURE__ */new WeakSet();
    v_3683 = function (v_3723) {
      if (v_1244(this, v_3669) !== v_3723) {
        return v_3123.warning("[Job APP] Attempted to update group " + v_3723.id + " but it is not the current group!");
      }
      v_3646.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: v_1244(this, v_3666),
        group: v_3723.toJSON()
      });
      v_3123.debug("[Job APP] Updated group!");
    };
    v_3684 = /* @__PURE__ */new WeakSet();
    v_3685 = function (v_3724, v_3725) {
      if (v_1244(this, v_3669) !== v_3724) {
        return v_3123.warning("[Job APP] Attempted to update group " + v_3724.id + " but it is not the current group!");
      }
      v_3646.SendUIAppMessage("phone", {
        action: "jobs:group:addMember",
        jobId: v_1244(this, v_3666),
        groupId: v_3724.id,
        member: v_3725.toJSON()
      });
      v_3123.debug("[Job APP] Added member to group!");
    };
    v_3686 = /* @__PURE__ */new WeakSet();
    v_3687 = function (v_3726, v_3727) {
      if (v_1244(this, v_3669) !== v_3726) {
        return v_3123.warning("[Job APP] Attempted to update group " + v_3726.id + " but it is not the current group!");
      }
      v_3646.SendUIAppMessage("phone", {
        action: "jobs:group:removeMember",
        jobId: v_1244(this, v_3666),
        groupId: v_3726.id,
        memberId: v_3727.characterId
      });
      v_3123.debug("[Job APP] Removed member from group!");
    };
    v_3688 = /* @__PURE__ */new WeakSet();
    v_3689 = function (v_3728, v_3729) {
      if (v_1244(this, v_3669) !== v_3728) {
        return v_3123.warning("[Job APP] Attempted to update group " + v_3728.id + " but it is not the current group!");
      }
      v_3646.SendUIAppMessage("phone", {
        action: "jobs:group:updateMember",
        jobId: v_1244(this, v_3666),
        groupId: v_3728.id,
        member: v_3729.toJSON()
      });
      v_3123.debug("[Job APP] Updated member in group!");
    };
    v_3690 = /* @__PURE__ */new WeakSet();
    v_3691 = function (v_3730, v_3731) {
      if (v_1244(this, v_3669) !== v_3730) {
        return v_3123.warning("[Job APP] Attempted to update group " + v_3730.id + " but it is not the current group!");
      }
      const v_3732 = (v_3731 == null ? undefined : v_3731.toJSON()) ?? null;
      v_3646.SendUIAppMessage("phone", {
        action: "jobs:group:updateActivity",
        jobId: v_1244(this, v_3666),
        groupId: v_3730.id,
        activity: v_3732
      });
      v_3123.debug("[Job APP] Updated activity for group!");
    };
    v_3692 = /* @__PURE__ */new WeakSet();
    v_3693 = function (v_3733, v_3734, v_3735) {
      if (v_1244(this, v_3669) !== v_3733) {
        return v_3123.warning("[Job APP] Attempted to update group " + v_3733.id + " but it is not the current group!");
      } else if (v_3734 !== "status") {
        return;
      }
      v_3646.SendUIAppMessage("phone", {
        action: "jobs:group:updateStatus",
        jobId: v_1244(this, v_3666),
        groupId: v_3733.id,
        status: v_3735
      });
      v_3123.debug("[Job APP] Updated status for group!");
    };
    var v_3736 = async v_3737 => {
      const v_3738 = typeof v_3737 === "number" ? v_3737 : GetHashKey(v_3737);
      if (HasModelLoaded(v_3738)) {
        return true;
      }
      RequestModel(v_3738);
      const v_3739 = await v_2744.waitForCondition(() => HasModelLoaded(v_3738), 3000);
      return !v_3739;
    };
    var v_3740 = async v_3741 => {
      if (HasAnimDictLoaded(v_3741)) {
        return true;
      }
      RequestAnimDict(v_3741);
      const v_3742 = await v_2744.waitForCondition(() => HasAnimDictLoaded(v_3741), 3000);
      return !v_3742;
    };
    var v_3743 = async v_3744 => {
      if (HasClipSetLoaded(v_3744)) {
        return true;
      }
      RequestClipSet(v_3744);
      const v_3745 = await v_2744.waitForCondition(() => HasClipSetLoaded(v_3744), 3000);
      return !v_3745;
    };
    var v_3746 = async v_3747 => {
      if (HasStreamedTextureDictLoaded(v_3747)) {
        return true;
      }
      RequestStreamedTextureDict(v_3747, true);
      const v_3748 = await v_2744.waitForCondition(() => HasStreamedTextureDictLoaded(v_3747), 3000);
      return !v_3748;
    };
    var v_3749 = async (v_3750, v_3751, v_3752) => {
      const v_3753 = typeof v_3750 === "number" ? v_3750 : GetHashKey(v_3750);
      if (HasWeaponAssetLoaded(v_3753)) {
        return true;
      }
      RequestWeaponAsset(v_3753, v_3751, v_3752);
      const v_3754 = await v_2744.waitForCondition(() => HasWeaponAssetLoaded(v_3753), 3000);
      return !v_3754;
    };
    var v_3755 = async v_3756 => {
      if (HasNamedPtfxAssetLoaded(v_3756)) {
        return true;
      }
      RequestNamedPtfxAsset(v_3756);
      const v_3757 = await v_2744.waitForCondition(() => HasNamedPtfxAssetLoaded(v_3756), 3000);
      return !v_3757;
    };
    var v_3758 = {
      loadModel: v_3736,
      loadTexture: v_3746,
      loadAnim: v_3740,
      loadClipSet: v_3743,
      loadWeaponAsset: v_3749,
      loadNamedPtfxAsset: v_3755
    };
    var v_3759 = v_3758;
    var v_3760 = (v_3761, ...v_3762) => {
      switch (v_3761) {
        case "coord":
          {
            const [v_3763, v_3764, v_3765] = v_3762;
            return AddBlipForCoord(v_3763, v_3764, v_3765);
          }
        case "area":
          {
            const [v_3766, v_3767, v_3768, v_3769, v_3770] = v_3762;
            return AddBlipForArea(v_3766, v_3767, v_3768, v_3769, v_3770);
          }
        case "radius":
          {
            const [v_3771, v_3772, v_3773, v_3774] = v_3762;
            return AddBlipForRadius(v_3771, v_3772, v_3773, v_3774);
          }
        case "pickup":
          {
            const [v_3775] = v_3762;
            return AddBlipForPickup(v_3775);
          }
        case "entity":
          {
            const [v_3776] = v_3762;
            return AddBlipForEntity(v_3776);
          }
        default:
          {
            console.error(new Error("Invalid Blip Type"));
            return 0;
          }
      }
    };
    var v_3777 = (v_3778, v_3779, v_3780, v_3781, v_3782, v_3783, v_3784, v_3785) => {
      if (typeof v_3780 === "number") {
        SetBlipSprite(v_3778, v_3780);
      }
      if (typeof v_3781 === "number") {
        SetBlipColour(v_3778, v_3781);
      }
      if (typeof v_3782 === "number") {
        SetBlipAlpha(v_3778, v_3782);
      }
      if (typeof v_3783 === "number") {
        SetBlipScale(v_3778, v_3783);
      }
      if (typeof v_3784 === "boolean") {
        SetBlipRoute(v_3778, v_3784);
      }
      if (typeof v_3785 === "boolean") {
        SetBlipAsShortRange(v_3778, v_3785);
      }
      if (typeof v_3779 === "string") {
        BeginTextCommandSetBlipName("STRING");
        AddTextComponentString(v_3779);
        EndTextCommandSetBlipName(v_3778);
      }
    };
    var v_3786 = {
      createBlip: v_3760,
      applyBlipSettings: v_3777
    };
    var v_3787 = v_3786;
    var v_3788 = /* @__PURE__ */new Set();
    var v_3789 = /* @__PURE__ */new Map();
    var v_3790 = /* @__PURE__ */new Set();
    on("np-polyzone:enter", (v_3791, v_3792) => {
      v_3788.add(v_3791);
      if (v_3792 == null ? undefined : v_3792.id) {
        v_3788.add(v_3791 + "-" + v_3792.id);
      }
      if (v_3790.has(v_3791)) {
        v_3115.emitNet("__sdk:zones:" + v_3791 + ":enter", v_3792);
      }
      const v_3793 = v_3789.get(v_3791 + "-enter");
      if (v_3793 === undefined) {
        return;
      }
      for (const v_3794 of v_3793) {
        try {
          v_3794(v_3792);
        } catch (v_3795) {
          console.log(v_3795);
        }
      }
    });
    on("np-polyzone:exit", (v_3796, v_3797) => {
      v_3788.delete(v_3796);
      if (v_3797 == null ? undefined : v_3797.id) {
        v_3788.delete(v_3796 + "-" + v_3797.id);
      }
      if (v_3790.has(v_3796)) {
        v_3115.emitNet("__sdk:zones:" + v_3796 + ":exit", v_3797);
      }
      const v_3798 = v_3789.get(v_3796 + "-exit");
      if (v_3798 === undefined) {
        return;
      }
      for (const v_3799 of v_3798) {
        try {
          v_3799(v_3797);
        } catch (v_3800) {
          console.log(v_3800);
        }
      }
    });
    var v_3801 = (v_3802, v_3803) => {
      return v_3788.has(v_3803 ? v_3802 + "-" + v_3803 : v_3802);
    };
    var v_3804 = (v_3805, v_3806) => {
      const v_3807 = v_3805 + "-enter";
      const v_3808 = v_3789.get(v_3807) ?? [];
      if (!v_3789.has(v_3807)) {
        v_3789.set(v_3807, v_3808);
      }
      v_3808.push(v_3806);
    };
    var v_3809 = (v_3810, v_3811) => {
      const v_3812 = v_3810 + "-exit";
      const v_3813 = v_3789.get(v_3812) ?? [];
      if (!v_3789.has(v_3812)) {
        v_3789.set(v_3812, v_3813);
      }
      v_3813.push(v_3811);
    };
    var v_3814 = (v_3815, v_3816, v_3817, v_3818, v_3819 = {}) => {
      var v_3820 = {
        ...v_3818
      };
      v_3820.data = v_3819;
      v_3820.id = v_3815;
      const v_3821 = v_3820;
      v_3821.data.id = v_3815;
      exports["np-polyzone"].AddPolyZone(v_3816, v_3817, v_3821);
    };
    var v_3822 = (v_3823, v_3824, v_3825, v_3826, v_3827, v_3828, v_3829 = {}) => {
      var v_3830 = {
        ...v_3828
      };
      v_3830.data = v_3829;
      v_3830.id = v_3823;
      const v_3831 = v_3830;
      v_3831.data.id = v_3823;
      exports["np-polyzone"].AddBoxZone(v_3824, v_3825, v_3826, v_3827, v_3831);
    };
    var v_3832 = (v_3833, v_3834, v_3835, v_3836, v_3837, v_3838 = {}) => {
      var v_3839 = {
        ...v_3837
      };
      v_3839.data = v_3838;
      v_3839.id = v_3833;
      const v_3840 = v_3839;
      v_3840.data.id = v_3833;
      exports["np-polyzone"].AddCircleZone(v_3834, v_3835, v_3836, v_3840);
    };
    var v_3841 = (v_3842, v_3843, v_3844, v_3845, v_3846 = {}) => {
      var v_3847 = {
        ...v_3845
      };
      v_3847.data = v_3846;
      const v_3848 = v_3847;
      v_3848.data.id = v_3842;
      exports["np-polyzone"].AddEntityZone(v_3843, v_3844, v_3848);
    };
    var v_3849 = (v_3850, v_3851) => {
      exports["np-polyzone"].RemoveZone(v_3850, v_3851);
      v_3788.delete(v_3850 + "-" + v_3851);
      v_3790.delete(v_3850);
    };
    var v_3852 = v_3853 => {
      v_3790.add(v_3853);
    };
    var v_3854 = {
      isActive: v_3801,
      onEnter: v_3804,
      onExit: v_3809,
      addPolyZone: v_3814,
      addBoxZone: v_3822,
      addCircleZone: v_3832,
      addEntityZone: v_3841,
      removeZone: v_3849,
      setAsNetworked: v_3852
    };
    var v_3855 = v_3854;
    var v_3856 = (v_3857, v_3858, v_3859, v_3860) => {
      var v_3861 = {
        id: v_3857,
        coords: [v_3858.x, v_3858.y, v_3858.z],
        options: v_3859,
        context: v_3860
      };
      const v_3862 = v_3861;
      globalThis.exports.interactions.AddInteraction(v_3862);
    };
    var v_3863 = (v_3864, v_3865, v_3866, v_3867) => {
      var v_3868 = {
        id: v_3864,
        options: v_3866,
        context: v_3867
      };
      const v_3869 = v_3868;
      globalThis.exports.interactions.AddInteractionByModel(v_3865, v_3869);
    };
    var v_3870 = (v_3871, v_3872, v_3873) => {
      var v_3874 = {
        id: v_3871,
        options: v_3872,
        context: v_3873
      };
      const v_3875 = v_3874;
      v_3875.context.isPlayer = true;
      globalThis.exports.interactions.AddPedInteraction(v_3875);
    };
    var v_3876 = (v_3877, v_3878, v_3879) => {
      var v_3880 = {
        id: v_3877,
        options: v_3878,
        context: v_3879
      };
      const v_3881 = v_3880;
      globalThis.exports.interactions.AddPedInteraction(v_3881);
    };
    var v_3882 = v_3883 => {
      return globalThis.exports.interactions.DoesInteractionExists(v_3883);
    };
    var v_3884 = (v_3885, v_3886, v_3887) => {
      var v_3888 = {
        id: v_3885,
        options: v_3886,
        context: v_3887
      };
      const v_3889 = v_3888;
      globalThis.exports.interactions.AddVehicleInteraction(v_3889);
    };
    var v_3890 = v_3891 => {
      globalThis.exports.interactions.RemoveInteraction(v_3891);
    };
    var v_3892 = v_3893 => {
      globalThis.exports.interactions.RemoveVehicleInteraction(v_3893);
    };
    var v_3894 = v_3895 => {
      globalThis.exports.interactions.RemovePedInteraction(v_3895);
    };
    var v_3896 = (v_3897, v_3898, v_3899 = false, v_3900 = null, v_3901 = true, v_3902 = null) => {
      return new Promise(v_3903 => {
        globalThis.exports["np-taskbar"].taskBar(v_3897, v_3898, v_3899, v_3901, v_3902, false, v_3903, v_3900 == null ? undefined : v_3900.distance, v_3900 == null ? undefined : v_3900.entity);
      });
    };
    var v_3904 = (v_3905, v_3906, v_3907, v_3908) => {
      return new Promise(v_3909 => {
        globalThis.exports["np-phone"].DoPhoneConfirmation(v_3905, v_3906, v_3907, v_3909, v_3908);
      });
    };
    var v_3910 = (v_3911, v_3912, v_3913 = true, v_3914 = "home-screen") => {
      var v_3915 = {
        action: "notification",
        target_app: v_3914,
        title: v_3911,
        body: v_3912,
        show_even_if_app_active: v_3913
      };
      var v_3916 = {
        source: "np-nui",
        app: "phone",
        data: v_3915
      };
      globalThis.exports["np-ui"].SendUIMessage(v_3916);
    };
    var v_3917 = (v_3918, v_3919, v_3920, v_3921, v_3922, v_3923, v_3924 = 0, v_3925 = true) => {
      SetTextColour(v_3921[0], v_3921[1], v_3921[2], v_3921[3]);
      if (v_3925) {
        SetTextOutline();
      }
      SetTextScale(0, v_3922);
      SetTextFont(v_3923 ?? 0);
      SetTextJustification(v_3924);
      if (v_3924 === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(v_3920 ?? "Dummy text");
      EndTextCommandDisplayText(v_3918, v_3919);
    };
    var v_3926 = (v_3927, v_3928, v_3929, v_3930, v_3931 = 4, v_3932 = true, v_3933) => {
      SetDrawOrigin(v_3927.x, v_3927.y, v_3927.z, 0);
      const v_3934 = Math.max(v_2586.getMapRange([0, 10], [0.4, 0.25], v_3928), 0.1);
      v_3917(0, 0, v_3929, v_3930, v_3934, v_3931, 0, v_3932);
      if (v_3933) {
        DrawRect(0.002, v_3933.height / 2, v_3933.width, v_3933.height, v_3933.color[0], v_3933.color[1], v_3933.color[2], v_3933.color[3]);
      }
      ClearDrawOrigin();
    };
    var v_3935 = (v_3936, v_3937, v_3938, v_3939) => {
      globalThis.exports.contacts.open(v_3936, v_3937, v_3938, v_3939, true);
    };
    var v_3940 = v_3941 => {
      globalThis.exports.hud.AddOrUpdateHudBar(v_3941);
    };
    var v_3942 = v_3943 => {
      globalThis.exports.hud.RemoveHudBar(v_3943);
    };
    async function v_3944(v_3945) {
      const v_3946 = v_3947 => {
        for (const v_3948 of v_3945) {
          if (v_3948._type === "number" && isNaN(v_3947[v_3948.name])) {
            return false;
          }
          if (v_3948._type === "text" && typeof v_3947[v_3948.name] !== "string") {
            return false;
          }
        }
        return true;
      };
      return await v_3023.Sync["np-ui"].OpenInputMenu(v_3945, v_3946);
    }
    async function v_3949(v_3950, v_3951) {
      const v_3952 = {
        info: 1,
        error: 2
      };
      emit("DoLongHudText", v_3950, v_3952[v_3951]);
    }
    var v_3953 = {
      addInteraction: v_3856,
      addInteractionByModel: v_3863,
      addPlayerInteraction: v_3870,
      addPedInteraction: v_3876,
      addVehicleInteraction: v_3884,
      removeInteraction: v_3890,
      removePlayerInteraction: v_3894,
      removePedInteraction: v_3894,
      removeVehicleInteraction: v_3892,
      doesInteractionExists: v_3882,
      taskBar: v_3896,
      phoneConfirmation: v_3904,
      phoneNotification: v_3910,
      drawText: v_3917,
      drawText3D: v_3926,
      customContact: v_3935,
      AddOrUpdateHudBar: v_3940,
      RemoveHudBar: v_3942,
      openInputMenu: v_3944,
      displayNotification: v_3949
    };
    var v_3701 = v_3953;
    var v_3954 = async v_3955 => {
      return globalThis.exports["np-heists"].BankMinigame(v_3955);
    };
    var v_3956 = async v_3957 => {
      return globalThis.exports["np-heists"].DDRMinigame(v_3957);
    };
    var v_3958 = async v_3959 => {
      return globalThis.exports.skillchecks.DirectionMinigame(v_3959);
    };
    var v_3960 = async () => {
      return globalThis.exports.skillchecks.DrillingMinigame();
    };
    var v_3961 = async v_3962 => {
      return globalThis.exports.skillchecks.FlipMinigame(v_3962);
    };
    var v_3963 = async v_3964 => {
      return globalThis.exports.skillchecks.FloodMinigame(v_3964);
    };
    var v_3965 = async v_3966 => {
      return globalThis.exports.skillchecks.TaskBarMinigame(v_3966.difficulty, v_3966.gap, v_3966.iterations, v_3966.useReverse);
    };
    var v_3967 = async v_3968 => {
      return globalThis.exports.skillchecks.MazeMinigame(v_3968);
    };
    var v_3969 = async v_3970 => {
      return globalThis.exports.skillchecks.CrackSafe(v_3970.locks);
    };
    var v_3971 = async v_3972 => {
      return globalThis.exports.skillchecks.SameMinigame(v_3972);
    };
    var v_3973 = async v_3974 => {
      return globalThis.exports["np-heists"].ThermiteMinigame(v_3974);
    };
    var v_3975 = async v_3976 => {
      return globalThis.exports.skillchecks.UntangleMinigame(v_3976);
    };
    var v_3977 = async v_3978 => {
      return globalThis.exports["np-heists"].VarMinigame(v_3978);
    };
    var v_3979 = async v_3980 => {
      return globalThis.exports.skillchecks.WordsMinigame(v_3980);
    };
    var v_3981 = async v_3982 => {
      return globalThis.exports.skillchecks.AlphabetMinigame(v_3982);
    };
    var v_3983 = async v_3984 => {
      return globalThis.exports.skillchecks.LockpickMinigame(v_3984);
    };
    var v_3985 = async v_3986 => {
      return globalThis.exports.skillchecks.PinCrackMinigame(v_3986);
    };
    var v_3987 = async v_3988 => {
      return globalThis.exports.skillchecks.TerminalMinigame(v_3988);
    };
    var v_3989 = async v_3990 => {
      return globalThis.exports.skillchecks.SequenceMinigame(v_3990);
    };
    var v_3991 = async v_3992 => {
      return globalThis.exports.skillchecks.SudokuMinigame(v_3992);
    };
    var v_3993 = async v_3994 => {
      return globalThis.exports.skillchecks.MemoryMinigame(v_3994);
    };
    var v_3995 = {
      BankMinigame: v_3954,
      DDRMinigame: v_3956,
      DirectionMinigame: v_3958,
      DrillingMinigame: v_3960,
      FlipMinigame: v_3961,
      FloodMinigame: v_3963,
      TaskBarMinigame: v_3965,
      MazeMinigame: v_3967,
      CrackSafe: v_3969,
      SameMinigame: v_3971,
      ThermiteMinigame: v_3973,
      UntangleMinigame: v_3975,
      VarMinigame: v_3977,
      WordsMinigame: v_3979,
      AlphabetMinigame: v_3981,
      LockpickMinigame: v_3983,
      PinCrackMinigame: v_3985,
      TerminalMinigame: v_3987,
      SequenceMinigame: v_3989,
      SudokuMinigame: v_3991,
      MemoryMinigame: v_3993
    };
    var v_3996 = v_3995;
    var v_3997 = {
      async hasPermission(v_3998, v_3999 = {}) {
        return await exports.permissions.hasPermission(v_3998, v_3999);
      },
      async getUserPermissions() {
        return await exports.permissions.getUserPermissions();
      },
      async getCharPermissions(v_4000) {
        return await exports.permissions.getCharPermissions();
      },
      async getTotalPermissions() {
        return await exports.permissions.getTotalPermissions();
      }
    };
    var v_4001 = {
      RegisterAction: (v_4002, v_4003, v_4004) => {
        return v_3023.Sync.contacts.RegisterAction(v_4002, v_4003, v_4004);
      }
    };
    var v_4005 = {
      RegisterEditorHandlerClient: async v_4006 => {
        return await globalThis.exports.editor.RegisterEditorHandlerClient(v_4006);
      }
    };
    var v_4007;
    var v_4008;
    var v_4009;
    var v_4010;
    var v_4011;
    var v_4012;
    var v_4013;
    var v_4014;
    var v_4015;
    var v_4016;
    var v_4017 = class {
      constructor(v_4018) {
        v_1248(this, v_4015);
        v_1248(this, v_4007, undefined);
        v_1248(this, v_4008, undefined);
        v_1248(this, v_4009, undefined);
        v_1248(this, v_4010, undefined);
        v_1248(this, v_4011, undefined);
        v_1248(this, v_4012, undefined);
        v_1248(this, v_4013, false);
        v_1248(this, v_4014, []);
        v_1252(this, v_4007, v_4018.codename);
        v_1252(this, v_4008, v_4018.version);
        v_1252(this, v_4009, GetCurrentResourceName());
        v_1252(this, v_4010, "nopixel-spawn");
        emit("__npx_core:handshake", v_4018, v_1263(this, v_4015, v_4016).bind(this));
        v_3306.register("__npx_core:handshake", async v_4019 => {
          if (v_4019.codename !== v_1244(this, v_4007)) {
            return;
          }
          const v_4020 = await v_2744.waitForCondition(() => v_1244(this, v_4013), 10000);
          if (v_4020) {
            return;
          }
          return {
            API_URL: v_1244(this, v_4011),
            API_KEY: v_1244(this, v_4012)
          };
        });
      }
      get codename() {
        return v_1244(this, v_4007);
      }
      get version() {
        return v_1244(this, v_4008);
      }
      get isReady() {
        return v_1244(this, v_4013);
      }
      onReady(v_4021) {
        if (v_1244(this, v_4013)) {
          v_4021();
        } else {
          v_1244(this, v_4014).push(v_4021);
        }
      }
    };
    v_4007 = /* @__PURE__ */new WeakMap();
    v_4008 = /* @__PURE__ */new WeakMap();
    v_4009 = /* @__PURE__ */new WeakMap();
    v_4010 = /* @__PURE__ */new WeakMap();
    v_4011 = /* @__PURE__ */new WeakMap();
    v_4012 = /* @__PURE__ */new WeakMap();
    v_4013 = /* @__PURE__ */new WeakMap();
    v_4014 = /* @__PURE__ */new WeakMap();
    v_4015 = /* @__PURE__ */new WeakSet();
    v_4016 = async function (v_4022) {
      v_1252(this, v_4011, v_4022.API_URL);
      v_1252(this, v_4012, v_4022.API_KEY);
      v_1252(this, v_4013, true);
      for (const v_4023 of v_1244(this, v_4014)) {
        v_4023();
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
    var v_4024 = Object.defineProperty;
    var v_4025 = (v_4026, v_4027) => {
      for (var v_4028 in v_4027) {
        v_4024(v_4026, v_4028, {
          get: v_4027[v_4028],
          enumerable: true
        });
      }
    };
    var v_4029 = (v_4030, v_4031, v_4032) => {
      if (!v_4031.has(v_4030)) {
        throw TypeError("Cannot " + v_4032);
      }
    };
    var v_4033 = (v_4034, v_4035, v_4036) => {
      v_4029(v_4034, v_4035, "read from private field");
      if (v_4036) {
        return v_4036.call(v_4034);
      } else {
        return v_4035.get(v_4034);
      }
    };
    var v_4037 = (v_4038, v_4039, v_4040) => {
      if (v_4039.has(v_4038)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (v_4039 instanceof WeakSet) {
        v_4039.add(v_4038);
      } else {
        v_4039.set(v_4038, v_4040);
      }
    };
    var v_4041 = (v_4042, v_4043, v_4044, v_4045) => {
      v_4029(v_4042, v_4043, "write to private field");
      if (v_4045) {
        v_4045.call(v_4042, v_4044);
      } else {
        v_4043.set(v_4042, v_4044);
      }
      return v_4044;
    };
    var v_4046 = (v_4047, v_4048, v_4049) => {
      v_4029(v_4047, v_4048, "access private method");
      return v_4049;
    };
    var v_4050 = {
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
    var v_4051 = {};
    var v_4052 = {
      MathUtils: () => v_4053
    };
    v_4025(v_4051, v_4052);
    var v_4054;
    var v_4055;
    var v_4056 = class v_4057 {
      constructor(v_4058, v_4059, v_4060) {
        v_4037(this, v_4054);
        const v_4061 = v_4046(this, v_4054, v_4055).call(this, v_4058, v_4059, v_4060);
        this.x = v_4061.x;
        this.y = v_4061.y;
        this.z = v_4061.z;
      }
      equals(v_4062, v_4063, v_4064) {
        const v_4065 = v_4046(this, v_4054, v_4055).call(this, v_4062, v_4063, v_4064);
        return this.x === v_4065.x && this.y === v_4065.y && this.z === v_4065.z;
      }
      add(v_4066, v_4067, v_4068, v_4069) {
        let v_4070 = v_4046(this, v_4054, v_4055).call(this, v_4066, v_4067, v_4068);
        this.x += v_4069 ? v_4070.x * v_4069 : v_4070.x;
        this.y += v_4069 ? v_4070.y * v_4069 : v_4070.y;
        this.z += v_4069 ? v_4070.z * v_4069 : v_4070.z;
        return this;
      }
      addScalar(v_4071) {
        if (typeof v_4071 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x += v_4071;
        this.y += v_4071;
        this.z += v_4071;
        return this;
      }
      sub(v_4072, v_4073, v_4074, v_4075) {
        const v_4076 = v_4046(this, v_4054, v_4055).call(this, v_4072, v_4073, v_4074);
        this.x -= v_4075 ? v_4076.x * v_4075 : v_4076.x;
        this.y -= v_4075 ? v_4076.y * v_4075 : v_4076.y;
        this.z -= v_4075 ? v_4076.z * v_4075 : v_4076.z;
        return this;
      }
      subScalar(v_4077) {
        if (typeof v_4077 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x -= v_4077;
        this.y -= v_4077;
        this.z -= v_4077;
        return this;
      }
      multiply(v_4078, v_4079, v_4080) {
        const v_4081 = v_4046(this, v_4054, v_4055).call(this, v_4078, v_4079, v_4080);
        this.x *= v_4081.x;
        this.y *= v_4081.y;
        this.z *= v_4081.z;
        return this;
      }
      multiplyScalar(v_4082) {
        if (typeof v_4082 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x *= v_4082;
        this.y *= v_4082;
        this.z *= v_4082;
        return this;
      }
      divide(v_4083, v_4084, v_4085) {
        const v_4086 = v_4046(this, v_4054, v_4055).call(this, v_4083, v_4084, v_4085);
        this.x /= v_4086.x;
        this.y /= v_4086.y;
        this.z /= v_4086.z;
        return this;
      }
      divideScalar(v_4087) {
        if (typeof v_4087 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x /= v_4087;
        this.y /= v_4087;
        this.z /= v_4087;
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
      getCenter(v_4088, v_4089, v_4090) {
        const v_4091 = v_4046(this, v_4054, v_4055).call(this, v_4088, v_4089, v_4090);
        return new v_4057((this.x + v_4091.x) / 2, (this.y + v_4091.y) / 2, (this.z + v_4091.z) / 2);
      }
      getDistance(v_4092, v_4093, v_4094) {
        const [v_4095, v_4096, v_4097] = v_4092 instanceof Array ? v_4092 : typeof v_4092 === "object" ? [v_4092.x, v_4092.y, v_4092.z] : [v_4092, v_4093, v_4094];
        if (typeof v_4095 !== "number" || typeof v_4096 !== "number" || typeof v_4097 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [v_4098, v_4099, v_4100] = [this.x - v_4095, this.y - v_4096, this.z - v_4097];
        return Math.sqrt(v_4098 * v_4098 + v_4099 * v_4099 + v_4100 * v_4100);
      }
      toArray(v_4101) {
        if (typeof v_4101 === "number") {
          return [parseFloat(this.x.toFixed(v_4101)), parseFloat(this.y.toFixed(v_4101)), parseFloat(this.z.toFixed(v_4101))];
        }
        return [this.x, this.y, this.z];
      }
      toJSON(v_4102) {
        if (typeof v_4102 === "number") {
          return {
            x: parseFloat(this.x.toFixed(v_4102)),
            y: parseFloat(this.y.toFixed(v_4102)),
            z: parseFloat(this.z.toFixed(v_4102))
          };
        }
        var v_4103 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return v_4103;
      }
      toString(v_4104) {
        return JSON.stringify(this.toJSON(v_4104));
      }
    };
    v_4054 = /* @__PURE__ */new WeakSet();
    v_4055 = function (v_4105, v_4106, v_4107) {
      let v_4108 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (v_4105 instanceof v_4056) {
        v_4108 = v_4105;
      } else if (v_4105 instanceof Array) {
        var v_4109 = {
          x: v_4105[0],
          y: v_4105[1],
          z: v_4105[2]
        };
        v_4108 = v_4109;
      } else if (typeof v_4105 === "object") {
        v_4108 = v_4105;
      } else {
        var v_4110 = {
          x: v_4105,
          y: v_4106,
          z: v_4107
        };
        v_4108 = v_4110;
      }
      if (typeof v_4108.x !== "number" || typeof v_4108.y !== "number" || typeof v_4108.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return v_4108;
    };
    var v_4111 = v_4056;
    var v_4112;
    var v_4113;
    var v_4114 = class {
      constructor(v_4115) {
        v_4037(this, v_4112, undefined);
        v_4037(this, v_4113, undefined);
        v_4041(this, v_4113, v_4115 ?? 5);
        v_4041(this, v_4112, /* @__PURE__ */new Map());
      }
      setTTL(v_4116) {
        v_4041(this, v_4113, v_4116);
      }
      set(v_4117, v_4118, v_4119) {
        v_4033(this, v_4112).set(v_4117, {
          value: v_4118,
          expiration: Date.now() + (v_4119 ?? v_4033(this, v_4113)) * 1000
        });
        return this;
      }
      get(v_4120, v_4121 = false) {
        const v_4122 = v_4033(this, v_4112).get(v_4120);
        const v_4123 = v_4122 ? v_4121 ? true : v_4122.expiration > Date.now() : false;
        if (!v_4122 || !v_4123) {
          if (v_4122) {
            v_4033(this, v_4112).delete(v_4120);
          }
          return;
        }
        return v_4122.value;
      }
      has(v_4124, v_4125 = false) {
        const v_4126 = v_4033(this, v_4112).get(v_4124);
        const v_4127 = v_4126 ? v_4125 ? true : v_4126.expiration > Date.now() : false;
        if (v_4126 && !v_4127) {
          v_4033(this, v_4112).delete(v_4124);
        }
        return v_4127;
      }
      delete(v_4128) {
        return v_4033(this, v_4112).delete(v_4128);
      }
      clear() {
        v_4033(this, v_4112).clear();
      }
      values(v_4129 = false) {
        const v_4130 = [];
        const v_4131 = Date.now();
        for (const v_4132 of v_4033(this, v_4112).values()) {
          if (v_4129 || v_4132.expiration > v_4131) {
            v_4130.push(v_4132.value);
          }
        }
        return v_4130;
      }
      keys(v_4133 = false) {
        const v_4134 = [];
        const v_4135 = Date.now();
        for (const [v_4136, v_4137] of v_4033(this, v_4112).entries()) {
          if (v_4133 || v_4137.expiration > v_4135) {
            v_4134.push(v_4136);
          }
        }
        return v_4134;
      }
      entries(v_4138 = false) {
        const v_4139 = [];
        const v_4140 = Date.now();
        for (const [v_4141, v_4142] of v_4033(this, v_4112).entries()) {
          if (v_4138 || v_4142.expiration > v_4140) {
            v_4139.push([v_4141, v_4142.value]);
          }
        }
        return v_4139;
      }
    };
    v_4112 = /* @__PURE__ */new WeakMap();
    v_4113 = /* @__PURE__ */new WeakMap();
    var v_4143;
    var v_4144;
    var v_4145;
    var v_4146;
    var v_4147;
    var v_4148;
    var v_4149;
    var v_4150;
    var v_4151;
    var v_4152;
    var v_4153;
    var v_4154;
    var v_4155;
    var v_4156;
    var v_4157;
    var v_4158;
    var v_4159;
    var v_4160;
    var v_4161;
    var v_4162;
    var v_4163;
    var v_4164;
    var v_4165 = class {
      constructor(v_4166, v_4167, v_4168, v_4169, v_4170, v_4171 = 30, v_4172 = false) {
        v_4037(this, v_4155);
        v_4037(this, v_4157);
        v_4037(this, v_4159);
        v_4037(this, v_4161);
        v_4037(this, v_4163);
        v_4037(this, v_4143, undefined);
        v_4037(this, v_4144, undefined);
        v_4037(this, v_4145, undefined);
        v_4037(this, v_4146, undefined);
        v_4037(this, v_4147, undefined);
        v_4037(this, v_4148, undefined);
        v_4037(this, v_4149, undefined);
        v_4037(this, v_4150, undefined);
        v_4037(this, v_4151, undefined);
        v_4037(this, v_4152, undefined);
        v_4037(this, v_4153, undefined);
        v_4037(this, v_4154, undefined);
        v_4041(this, v_4143, v_4166);
        v_4041(this, v_4144, v_4169);
        v_4041(this, v_4145, v_4170);
        v_4041(this, v_4146, v_4167);
        v_4041(this, v_4147, v_4168);
        v_4041(this, v_4148, v_4172);
        v_4041(this, v_4149, v_4171);
        v_4041(this, v_4151, v_4033(this, v_4144).x / v_4171);
        v_4041(this, v_4152, v_4033(this, v_4144).y / v_4171);
        v_4041(this, v_4150, v_4033(this, v_4151) * v_4033(this, v_4152));
        v_4041(this, v_4153, v_4046(this, v_4155, v_4156).call(this, v_4033(this, v_4143), v_4033(this, v_4149), v_4033(this, v_4151), v_4033(this, v_4152), v_4033(this, v_4148)));
        v_4041(this, v_4154, v_4046(this, v_4157, v_4158).call(this, v_4033(this, v_4153), v_4033(this, v_4150)));
      }
      get cells() {
        return v_4033(this, v_4153);
      }
      get cellSize() {
        return v_4033(this, v_4149);
      }
      get cellWidth() {
        return v_4033(this, v_4151);
      }
      get cellHeight() {
        return v_4033(this, v_4152);
      }
      get gridArea() {
        return v_4033(this, v_4154);
      }
      get gridCoverage() {
        return v_4033(this, v_4154) / v_4033(this, v_4145) * 100;
      }
      isPointInsideGrid(v_4173) {
        var v_4174;
        const v_4175 = v_4173.x - v_4033(this, v_4146).x;
        const v_4176 = v_4173.y - v_4033(this, v_4146).y;
        const v_4177 = Math.floor(v_4175 * v_4033(this, v_4149) / v_4033(this, v_4144).x);
        const v_4178 = Math.floor(v_4176 * v_4033(this, v_4149) / v_4033(this, v_4144).y);
        let v_4179 = (v_4174 = v_4033(this, v_4153)[v_4177]) == null ? undefined : v_4174[v_4178];
        if (!v_4179 && v_4033(this, v_4148)) {
          v_4179 = v_4046(this, v_4161, v_4162).call(this, v_4177, v_4178, v_4033(this, v_4151), v_4033(this, v_4152), v_4033(this, v_4143));
          v_4033(this, v_4153)[v_4177][v_4178] = v_4179;
          if (!v_4179) {
            return false;
          }
          v_4041(this, v_4154, v_4033(this, v_4154) + v_4033(this, v_4150));
        }
        return v_4179 ?? false;
      }
    };
    v_4143 = /* @__PURE__ */new WeakMap();
    v_4144 = /* @__PURE__ */new WeakMap();
    v_4145 = /* @__PURE__ */new WeakMap();
    v_4146 = /* @__PURE__ */new WeakMap();
    v_4147 = /* @__PURE__ */new WeakMap();
    v_4148 = /* @__PURE__ */new WeakMap();
    v_4149 = /* @__PURE__ */new WeakMap();
    v_4150 = /* @__PURE__ */new WeakMap();
    v_4151 = /* @__PURE__ */new WeakMap();
    v_4152 = /* @__PURE__ */new WeakMap();
    v_4153 = /* @__PURE__ */new WeakMap();
    v_4154 = /* @__PURE__ */new WeakMap();
    v_4155 = /* @__PURE__ */new WeakSet();
    v_4156 = function (v_4180, v_4181, v_4182, v_4183, v_4184) {
      const v_4185 = {};
      for (let v_4186 = 0; v_4186 < v_4181; v_4186++) {
        v_4185[v_4186] = {};
        if (v_4184) {
          continue;
        }
        for (let v_4187 = 0; v_4187 < v_4181; v_4187++) {
          const v_4188 = v_4046(this, v_4161, v_4162).call(this, v_4186, v_4187, v_4182, v_4183, v_4180);
          if (!v_4188) {
            continue;
          }
          v_4185[v_4186][v_4187] = true;
        }
      }
      return v_4185;
    };
    v_4157 = /* @__PURE__ */new WeakSet();
    v_4158 = function (v_4189, v_4190) {
      let v_4191 = 0;
      for (const v_4192 in v_4189) {
        for (const v_4193 in v_4189[v_4192]) {
          v_4191 += v_4190;
        }
      }
      return v_4191;
    };
    v_4159 = /* @__PURE__ */new WeakSet();
    v_4160 = function (v_4194, v_4195, v_4196, v_4197) {
      const v_4198 = [];
      const v_4199 = v_4194 * v_4196 + v_4033(this, v_4146).x;
      const v_4200 = v_4195 * v_4197 + v_4033(this, v_4146).y;
      v_4198.push(new v_4201(v_4199, v_4200));
      v_4198.push(new v_4201(v_4199 + v_4196, v_4200));
      v_4198.push(new v_4201(v_4199 + v_4196, v_4200 + v_4197));
      v_4198.push(new v_4201(v_4199, v_4200 + v_4197));
      return v_4198;
    };
    v_4161 = /* @__PURE__ */new WeakSet();
    v_4162 = function (v_4202, v_4203, v_4204, v_4205, v_4206) {
      const v_4207 = v_4046(this, v_4159, v_4160).call(this, v_4202, v_4203, v_4204, v_4205);
      let v_4208 = false;
      for (const v_4209 of v_4207) {
        const v_4210 = v_4211.MathUtils.windingNumber(v_4209, v_4206);
        if (v_4210 !== 0) {
          v_4208 = true;
          break;
        }
      }
      if (!v_4208) {
        return false;
      }
      for (let v_4212 = 0; v_4212 < v_4207.length; v_4212++) {
        const v_4213 = v_4207[v_4212];
        const v_4214 = v_4207[(v_4212 + 1) % v_4207.length];
        for (let v_4215 = 0; v_4215 < v_4206.length; v_4215++) {
          const v_4216 = v_4206[v_4215];
          const v_4217 = v_4206[(v_4215 + 1) % v_4206.length];
          if (v_4046(this, v_4163, v_4164).call(this, v_4213, v_4214, v_4216, v_4217)) {
            return false;
          }
        }
      }
      return true;
    };
    v_4163 = /* @__PURE__ */new WeakSet();
    v_4164 = function (v_4218, v_4219, v_4220, v_4221) {
      const v_4222 = (v_4219.x - v_4218.x) * (v_4221.y - v_4220.y) - (v_4219.y - v_4218.y) * (v_4221.x - v_4220.x);
      const v_4223 = (v_4218.y - v_4220.y) * (v_4221.x - v_4220.x) - (v_4218.x - v_4220.x) * (v_4221.y - v_4220.y);
      const v_4224 = (v_4218.y - v_4220.y) * (v_4219.x - v_4218.x) - (v_4218.x - v_4220.x) * (v_4219.y - v_4218.y);
      if (v_4222 === 0) {
        return v_4223 === 0 && v_4224 === 0;
      }
      const v_4225 = v_4223 / v_4222;
      const v_4226 = v_4224 / v_4222;
      return v_4225 >= 0 && v_4225 <= 1 && v_4226 >= 0 && v_4226 <= 1;
    };
    var v_4227;
    var v_4228;
    var v_4229;
    var v_4230;
    var v_4231;
    var v_4232;
    var v_4233;
    var v_4234;
    var v_4235;
    var v_4236;
    var v_4237;
    var v_4238;
    var v_4239;
    var v_4240;
    var v_4241;
    var v_4242;
    var v_4243;
    var v_4244;
    var v_4245 = class {
      constructor(v_4246, v_4247 = {}, v_4248 = {}) {
        v_4037(this, v_4235);
        v_4037(this, v_4237);
        v_4037(this, v_4239);
        v_4037(this, v_4241);
        v_4037(this, v_4243);
        v_4037(this, v_4227, undefined);
        v_4037(this, v_4228, undefined);
        v_4037(this, v_4229, undefined);
        v_4037(this, v_4230, undefined);
        v_4037(this, v_4231, undefined);
        v_4037(this, v_4232, undefined);
        v_4037(this, v_4233, undefined);
        v_4037(this, v_4234, undefined);
        v_4041(this, v_4227, v_4211.getUUID());
        v_4041(this, v_4228, v_4246);
        v_4041(this, v_4229, v_4046(this, v_4235, v_4236).call(this, v_4246));
        v_4041(this, v_4230, v_4046(this, v_4237, v_4238).call(this, v_4246));
        v_4041(this, v_4231, v_4046(this, v_4243, v_4244).call(this, v_4246));
        v_4041(this, v_4232, v_4046(this, v_4241, v_4242).call(this, v_4033(this, v_4229), v_4033(this, v_4230)));
        v_4041(this, v_4233, v_4046(this, v_4239, v_4240).call(this, v_4033(this, v_4229), v_4033(this, v_4230)));
        this.options = v_4247;
        this.data = v_4248;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        v_4041(this, v_4234, new v_4165(v_4033(this, v_4228), v_4033(this, v_4229), v_4033(this, v_4230), v_4033(this, v_4232), v_4033(this, v_4231), v_4247.gridCellSize, v_4247.useLazyGrid));
      }
      get id() {
        return v_4033(this, v_4227);
      }
      get center() {
        return v_4033(this, v_4233);
      }
      get min() {
        return v_4033(this, v_4229);
      }
      get max() {
        return v_4033(this, v_4230);
      }
      get points() {
        return [...v_4033(this, v_4228)];
      }
      isPointInside(v_4249) {
        if (v_4249.x < v_4033(this, v_4229).x || v_4249.x > v_4033(this, v_4230).x) {
          return false;
        } else if (v_4249.y < v_4033(this, v_4229).y || v_4249.y > v_4033(this, v_4230).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && v_4249 instanceof v_4111) {
          const v_4250 = this.options.minZ ?? -Infinity;
          const v_4251 = this.options.maxZ ?? Infinity;
          if (v_4249.z < v_4250 || v_4249.z > v_4251) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && v_4033(this, v_4234)) {
          return v_4033(this, v_4234).isPointInsideGrid(v_4249);
        }
        const v_4252 = v_4211.MathUtils.windingNumber(v_4249, v_4033(this, v_4228));
        return v_4252 !== 0;
      }
      addPoint(v_4253) {
        v_4033(this, v_4228).push(v_4253);
      }
      removePoint(v_4254) {
        const v_4255 = v_4033(this, v_4228).findIndex(v_4256 => v_4256.x === v_4254.x && v_4256.y === v_4254.y);
        if (v_4255 === -1) {
          return;
        }
        v_4033(this, v_4228).splice(v_4255, 1);
      }
      removeLastPoint() {
        v_4033(this, v_4228).pop();
      }
      recalculate() {
        v_4041(this, v_4229, v_4046(this, v_4235, v_4236).call(this, v_4033(this, v_4228)));
        v_4041(this, v_4230, v_4046(this, v_4237, v_4238).call(this, v_4033(this, v_4228)));
        v_4041(this, v_4231, v_4046(this, v_4243, v_4244).call(this, v_4033(this, v_4228)));
        v_4041(this, v_4232, v_4046(this, v_4241, v_4242).call(this, v_4033(this, v_4229), v_4033(this, v_4230)));
        v_4041(this, v_4233, v_4046(this, v_4239, v_4240).call(this, v_4033(this, v_4229), v_4033(this, v_4230)));
        if (!this.options.useGrid) {
          return;
        }
        v_4041(this, v_4234, new v_4165(v_4033(this, v_4228), v_4033(this, v_4229), v_4033(this, v_4230), v_4033(this, v_4232), v_4033(this, v_4231), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    v_4227 = /* @__PURE__ */new WeakMap();
    v_4228 = /* @__PURE__ */new WeakMap();
    v_4229 = /* @__PURE__ */new WeakMap();
    v_4230 = /* @__PURE__ */new WeakMap();
    v_4231 = /* @__PURE__ */new WeakMap();
    v_4232 = /* @__PURE__ */new WeakMap();
    v_4233 = /* @__PURE__ */new WeakMap();
    v_4234 = /* @__PURE__ */new WeakMap();
    v_4235 = /* @__PURE__ */new WeakSet();
    v_4236 = function (v_4257) {
      let v_4258 = Number.MAX_SAFE_INTEGER;
      let v_4259 = Number.MAX_SAFE_INTEGER;
      for (const v_4260 of v_4257) {
        v_4258 = Math.min(v_4258, v_4260.x);
        v_4259 = Math.min(v_4259, v_4260.y);
      }
      return new v_4201(v_4258, v_4259);
    };
    v_4237 = /* @__PURE__ */new WeakSet();
    v_4238 = function (v_4261) {
      let v_4262 = Number.MIN_SAFE_INTEGER;
      let v_4263 = Number.MIN_SAFE_INTEGER;
      for (const v_4264 of v_4261) {
        v_4262 = Math.max(v_4262, v_4264.x);
        v_4263 = Math.max(v_4263, v_4264.y);
      }
      return new v_4201(v_4262, v_4263);
    };
    v_4239 = /* @__PURE__ */new WeakSet();
    v_4240 = function (v_4265, v_4266) {
      const v_4267 = v_4266.add(v_4265);
      return v_4267.divideScalar(2);
    };
    v_4241 = /* @__PURE__ */new WeakSet();
    v_4242 = function (v_4268, v_4269) {
      return v_4269.sub(v_4268);
    };
    v_4243 = /* @__PURE__ */new WeakSet();
    v_4244 = function (v_4270) {
      let v_4271 = 0;
      for (let v_4272 = 0, v_4273 = v_4270.length - 1; v_4272 < v_4270.length; v_4273 = v_4272++) {
        const v_4274 = v_4270[v_4272];
        const v_4275 = v_4270[v_4273];
        v_4271 += v_4274.x * v_4275.y;
        v_4271 -= v_4274.y * v_4275.x;
      }
      return Math.abs(v_4271 / 2);
    };
    var v_4276;
    var v_4277;
    var v_4278 = class v_4279 {
      constructor(v_4280, v_4281) {
        v_4037(this, v_4276);
        const v_4282 = v_4046(this, v_4276, v_4277).call(this, v_4280, v_4281);
        this.x = v_4282.x;
        this.y = v_4282.y;
      }
      equals(v_4283, v_4284) {
        const v_4285 = v_4046(this, v_4276, v_4277).call(this, v_4283, v_4284);
        return this.x === v_4285.x && this.y === v_4285.y;
      }
      add(v_4286, v_4287, v_4288) {
        const v_4289 = v_4046(this, v_4276, v_4277).call(this, v_4286, v_4287);
        const v_4290 = this.x + (v_4288 ? v_4289.x * v_4288 : v_4289.x);
        const v_4291 = this.y + (v_4288 ? v_4289.y * v_4288 : v_4289.y);
        return new v_4279(v_4290, v_4291);
      }
      addScalar(v_4292) {
        if (typeof v_4292 !== "number") {
          throw new Error("Invalid scalar");
        }
        const v_4293 = this.x + v_4292;
        const v_4294 = this.y + v_4292;
        return new v_4279(v_4293, v_4294);
      }
      sub(v_4295, v_4296, v_4297) {
        const v_4298 = v_4046(this, v_4276, v_4277).call(this, v_4295, v_4296);
        const v_4299 = this.x - (v_4297 ? v_4298.x * v_4297 : v_4298.x);
        const v_4300 = this.y - (v_4297 ? v_4298.y * v_4297 : v_4298.y);
        return new v_4279(v_4299, v_4300);
      }
      subScalar(v_4301) {
        if (typeof v_4301 !== "number") {
          throw new Error("Invalid scalar");
        }
        const v_4302 = this.x - v_4301;
        const v_4303 = this.y - v_4301;
        return new v_4279(v_4302, v_4303);
      }
      multiply(v_4304, v_4305) {
        const v_4306 = v_4046(this, v_4276, v_4277).call(this, v_4304, v_4305);
        const v_4307 = this.x * v_4306.x;
        const v_4308 = this.y * v_4306.y;
        return new v_4279(v_4307, v_4308);
      }
      multiplyScalar(v_4309) {
        if (typeof v_4309 !== "number") {
          throw new Error("Invalid scalar");
        }
        const v_4310 = this.x * v_4309;
        const v_4311 = this.y * v_4309;
        return new v_4279(v_4310, v_4311);
      }
      divide(v_4312, v_4313) {
        const v_4314 = v_4046(this, v_4276, v_4277).call(this, v_4312, v_4313);
        const v_4315 = this.x / v_4314.x;
        const v_4316 = this.y / v_4314.y;
        return new v_4279(v_4315, v_4316);
      }
      divideScalar(v_4317) {
        if (typeof v_4317 !== "number") {
          throw new Error("Invalid scalar");
        }
        const v_4318 = this.x / v_4317;
        const v_4319 = this.y / v_4317;
        return new v_4279(v_4318, v_4319);
      }
      round() {
        const v_4320 = Math.round(this.x);
        const v_4321 = Math.round(this.y);
        return new v_4279(v_4320, v_4321);
      }
      floor() {
        const v_4322 = Math.floor(this.x);
        const v_4323 = Math.floor(this.y);
        return new v_4279(v_4322, v_4323);
      }
      ceil() {
        const v_4324 = Math.ceil(this.x);
        const v_4325 = Math.ceil(this.y);
        return new v_4279(v_4324, v_4325);
      }
      getCenter(v_4326, v_4327) {
        const v_4328 = v_4046(this, v_4276, v_4277).call(this, v_4326, v_4327);
        return new v_4279((this.x + v_4328.x) / 2, (this.y + v_4328.y) / 2);
      }
      getDistance(v_4329, v_4330) {
        const [v_4331, v_4332] = v_4329 instanceof Array ? v_4329 : typeof v_4329 === "object" ? [v_4329.x, v_4329.y] : [v_4329, v_4330];
        if (typeof v_4331 !== "number" || typeof v_4332 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [v_4333, v_4334] = [this.x - v_4331, this.y - v_4332];
        return Math.sqrt(v_4333 * v_4333 + v_4334 * v_4334);
      }
      toArray(v_4335) {
        if (typeof v_4335 === "number") {
          return [parseFloat(this.x.toFixed(v_4335)), parseFloat(this.y.toFixed(v_4335))];
        }
        return [this.x, this.y];
      }
      toJSON(v_4336) {
        if (typeof v_4336 === "number") {
          return {
            x: parseFloat(this.x.toFixed(v_4336)),
            y: parseFloat(this.y.toFixed(v_4336))
          };
        }
        var v_4337 = {
          x: this.x,
          y: this.y
        };
        return v_4337;
      }
      toString(v_4338) {
        return JSON.stringify(this.toJSON(v_4338));
      }
    };
    v_4276 = /* @__PURE__ */new WeakSet();
    v_4277 = function (v_4339, v_4340) {
      let v_4341 = {
        x: 0,
        y: 0
      };
      if (v_4339 instanceof v_4278 || v_4339 instanceof v_4111) {
        v_4341 = v_4339;
      } else if (v_4339 instanceof Array) {
        var v_4342 = {
          x: v_4339[0],
          y: v_4339[1]
        };
        v_4341 = v_4342;
      } else if (typeof v_4339 === "object") {
        v_4341 = v_4339;
      } else {
        var v_4343 = {
          x: v_4339,
          y: v_4340
        };
        v_4341 = v_4343;
      }
      if (typeof v_4341.x !== "number" || typeof v_4341.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return v_4341;
    };
    var v_4201 = v_4278;
    var v_4344 = (v_4345, v_4346, v_4347) => {
      return Math.min(Math.max(v_4345, v_4346), v_4347);
    };
    var v_4348 = (v_4349, v_4350, v_4351) => {
      return v_4350[0] + (v_4351 - v_4349[0]) * (v_4350[1] - v_4350[0]) / (v_4349[1] - v_4349[0]);
    };
    var v_4352 = ([v_4353, v_4354, v_4355], [v_4356, v_4357, v_4358]) => {
      const [v_4359, v_4360, v_4361] = [v_4353 - v_4356, v_4354 - v_4357, v_4355 - v_4358];
      return Math.sqrt(v_4359 * v_4359 + v_4360 * v_4360 + v_4361 * v_4361);
    };
    var v_4362 = (v_4363, v_4364) => {
      if (v_4364) {
        return Math.floor(Math.random() * (v_4364 - v_4363 + 1) + v_4363);
      } else {
        return Math.floor(Math.random() * v_4363);
      }
    };
    var v_4365 = (v_4366, v_4367) => {
      if (v_4366 instanceof v_4201) {
        return v_4366;
      } else if (v_4366 instanceof v_4111) {
        return new v_4201(v_4366);
      } else if (v_4366 instanceof Array) {
        return new v_4201(v_4366);
      } else if (typeof v_4366 === "object") {
        return new v_4201(v_4366);
      }
      if (typeof v_4366 !== "number" || typeof v_4367 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new v_4201(v_4366, v_4367);
    };
    var v_4368 = (v_4369, v_4370, v_4371) => {
      if (v_4369 instanceof v_4111) {
        return v_4369;
      } else if (v_4369 instanceof Array) {
        return new v_4111(v_4369);
      } else if (typeof v_4369 === "object") {
        return new v_4111(v_4369);
      }
      if (typeof v_4369 !== "number" || typeof v_4370 !== "number" || typeof v_4371 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new v_4111(v_4369, v_4370, v_4371);
    };
    var v_4372 = (v_4373, v_4374) => {
      let v_4375 = 0;
      const v_4376 = (v_4377, v_4378, v_4379) => {
        return (v_4378.x - v_4377.x) * (v_4379.y - v_4377.y) - (v_4379.x - v_4377.x) * (v_4378.y - v_4377.y);
      };
      for (let v_4380 = 0; v_4380 < v_4374.length; v_4380++) {
        const v_4381 = v_4374[v_4380];
        const v_4382 = v_4374[(v_4380 + 1) % v_4374.length];
        if (v_4381.y <= v_4373.y) {
          if (v_4382.y > v_4373.y && v_4376(v_4381, v_4382, v_4373) > 0) {
            v_4375++;
          }
        } else if (v_4382.y <= v_4373.y && v_4376(v_4381, v_4382, v_4373) < 0) {
          v_4375--;
        }
      }
      return v_4375;
    };
    var v_4383 = {
      clamp: v_4344,
      getMapRange: v_4348,
      getDistance: v_4352,
      getRandomNumber: v_4362,
      parseVector2: v_4365,
      parseVector3: v_4368,
      windingNumber: v_4372
    };
    var v_4053 = v_4383;
    var v_4384 = {};
    var v_4385 = {
      ArrUtils: () => v_4386
    };
    v_4025(v_4384, v_4385);
    var v_4387 = v_4388 => {
      for (let v_4389 = v_4388.length - 1; v_4389 > 0; v_4389--) {
        const v_4390 = Math.floor(Math.random() * (v_4389 + 1));
        [v_4388[v_4389], v_4388[v_4390]] = [v_4388[v_4390], v_4388[v_4389]];
      }
      return v_4388;
    };
    var v_4391 = (v_4392, v_4393) => {
      const v_4394 = [];
      for (let v_4395 = 0; v_4395 < v_4393; v_4395++) {
        v_4394.push(v_4392[Math.floor(Math.random() * v_4392.length)]);
      }
      return v_4394;
    };
    var v_4396 = {
      shuffleArray: v_4387,
      getRandomElements: v_4391
    };
    var v_4386 = v_4396;
    function v_4397(v_4398, v_4399) {
      const v_4400 = "_";
      const v_4401 = v_4402((v_4403, v_4404, ...v_4405) => {
        return v_4398(v_4403, ...v_4405);
      }, v_4399);
      return {
        get: function (...v_4406) {
          return v_4401.get(v_4400, ...v_4406);
        },
        reset: function () {
          v_4401.reset(v_4400);
        }
      };
    }
    function v_4402(v_4407, v_4408) {
      const v_4409 = v_4408.timeToLive || 60000;
      const v_4410 = {};
      const v_4411 = v_4408.immediateResolve || false;
      async function v_4412(v_4413, ...v_4414) {
        let v_4415 = v_4410[v_4413];
        if (!v_4415) {
          v_4415 = {
            value: null,
            lastUpdated: 0
          };
          v_4410[v_4413] = v_4415;
        }
        const v_4416 = Date.now();
        if (v_4415.lastUpdated === 0 || v_4416 - v_4415.lastUpdated > v_4409) {
          const [v_4417, v_4418] = await v_4407(v_4415, v_4413, ...v_4414);
          if (v_4417) {
            v_4415.lastUpdated = v_4416;
            v_4415.value = v_4418;
          }
          return v_4418;
        }
        if (v_4411) {
          return Promise.resolve(v_4415.value);
        } else {
          return await new Promise(v_4419 => setTimeout(() => v_4419(v_4415.value), 0));
        }
      }
      return {
        get: async function (v_4420, ...v_4421) {
          return await v_4412(v_4420, ...v_4421);
        },
        reset: function (v_4422) {
          const v_4423 = v_4410[v_4422];
          if (v_4423) {
            v_4423.lastUpdated = 0;
          }
        },
        clear: function () {
          for (const v_4424 in v_4410) {
            delete v_4410[v_4424];
          }
        }
      };
    }
    function v_4425() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return v_323();
      } else {
        return new v_1215(4).toString();
      }
    }
    function v_4426(v_4427) {
      return v_385(v_4427, v_385.URL);
    }
    function v_4428(v_4429, v_4430) {
      return new Promise((v_4431, v_4432) => {
        const v_4433 = Date.now();
        const v_4434 = setInterval(() => {
          const v_4435 = Date.now() - v_4433 > v_4430;
          if (v_4429() || v_4435) {
            clearInterval(v_4434);
            return v_4431(v_4435);
          }
        }, 1);
      });
    }
    function v_4436(v_4437) {
      return new Promise(v_4438 => setTimeout(() => v_4438(), v_4437));
    }
    function v_4439() {
      return v_4436(0);
    }
    var v_4440 = {
      cache: v_4397,
      cacheableMap: v_4402,
      waitForCondition: v_4428,
      getUUID: v_4425,
      getStringHash: v_4426,
      wait: v_4436,
      waitForNextFrame: v_4439,
      deflate: v_1205,
      inflate: v_1209,
      ...v_4051,
      ...v_4384
    };
    var v_4211 = v_4440;
    var v_4441 = (v_4442 => {
      v_4442[v_4442.hat = 0] = "hat";
      v_4442[v_4442.mask = 1] = "mask";
      v_4442[v_4442.glasses = 2] = "glasses";
      v_4442[v_4442.armor = 3] = "armor";
      v_4442[v_4442.backpack = 4] = "backpack";
      v_4442[v_4442.idcard = 5] = "idcard";
      v_4442[v_4442.mobilephone = 6] = "mobilephone";
      v_4442[v_4442.tablet = 7] = "tablet";
      v_4442[v_4442.keyring = 8] = "keyring";
      v_4442[v_4442.wallet = 9] = "wallet";
      return v_4442;
    })(v_4441 || {});
    ;
    function v_4443(v_4444, v_4445, v_4446, v_4447, v_4448, v_4449, v_4450) {
      try {
        var v_4451 = v_4444[v_4449](v_4450);
        var v_4452 = v_4451.value;
      } catch (v_4453) {
        v_4446(v_4453);
        return;
      }
      if (v_4451.done) {
        v_4445(v_4452);
      } else {
        Promise.resolve(v_4452).then(v_4447, v_4448);
      }
    }
    function v_4454(v_4455) {
      return function () {
        var v_4456 = this;
        var v_4457 = arguments;
        return new Promise(function (v_4458, v_4459) {
          var v_4460 = v_4455.apply(v_4456, v_4457);
          function v_4461(v_4462) {
            v_4443(v_4460, v_4458, v_4459, v_4461, v_4463, "next", v_4462);
          }
          function v_4463(v_4464) {
            v_4443(v_4460, v_4458, v_4459, v_4461, v_4463, "throw", v_4464);
          }
          v_4461(undefined);
        });
      };
    }
    function v_4465(v_4466, v_4467) {
      var v_4468;
      var v_4469;
      var v_4470;
      var v_4471;
      var v_4472 = {
        label: 0,
        sent: function () {
          if (v_4470[0] & 1) {
            throw v_4470[1];
          }
          return v_4470[1];
        },
        trys: [],
        ops: []
      };
      v_4471 = {
        next: v_4473(0),
        throw: v_4473(1),
        return: v_4473(2)
      };
      if (typeof Symbol === "function") {
        v_4471[Symbol.iterator] = function () {
          return this;
        };
      }
      return v_4471;
      function v_4473(v_4474) {
        return function (v_4475) {
          return v_4476([v_4474, v_4475]);
        };
      }
      function v_4476(v_4477) {
        if (v_4468) {
          throw new TypeError("Generator is already executing.");
        }
        while (v_4472) {
          try {
            v_4468 = 1;
            if (v_4469 && (v_4470 = v_4477[0] & 2 ? v_4469.return : v_4477[0] ? v_4469.throw || ((v_4470 = v_4469.return) && v_4470.call(v_4469), 0) : v_4469.next) && !(v_4470 = v_4470.call(v_4469, v_4477[1])).done) {
              return v_4470;
            }
            v_4469 = 0;
            if (v_4470) {
              v_4477 = [v_4477[0] & 2, v_4470.value];
            }
            switch (v_4477[0]) {
              case 0:
              case 1:
                v_4470 = v_4477;
                break;
              case 4:
                v_4472.label++;
                return {
                  value: v_4477[1],
                  done: false
                };
              case 5:
                v_4472.label++;
                v_4469 = v_4477[1];
                v_4477 = [0];
                continue;
              case 7:
                v_4477 = v_4472.ops.pop();
                v_4472.trys.pop();
                continue;
              default:
                if (!(v_4470 = v_4472.trys, v_4470 = v_4470.length > 0 && v_4470[v_4470.length - 1]) && (v_4477[0] === 6 || v_4477[0] === 2)) {
                  v_4472 = 0;
                  continue;
                }
                if (v_4477[0] === 3 && (!v_4470 || v_4477[1] > v_4470[0] && v_4477[1] < v_4470[3])) {
                  v_4472.label = v_4477[1];
                  break;
                }
                if (v_4477[0] === 6 && v_4472.label < v_4470[1]) {
                  v_4472.label = v_4470[1];
                  v_4470 = v_4477;
                  break;
                }
                if (v_4470 && v_4472.label < v_4470[2]) {
                  v_4472.label = v_4470[2];
                  v_4472.ops.push(v_4477);
                  break;
                }
                if (v_4470[2]) {
                  v_4472.ops.pop();
                }
                v_4472.trys.pop();
                continue;
            }
            v_4477 = v_4467.call(v_4466, v_4472);
          } catch (v_4478) {
            v_4477 = [6, v_4478];
            v_4469 = 0;
          } finally {
            v_4468 = v_4470 = 0;
          }
        }
        if (v_4477[0] & 5) {
          throw v_4477[1];
        }
        var v_4479 = {
          value: v_4477[0] ? v_4477[1] : undefined,
          done: true
        };
        return v_4479;
      }
    }
    var v_4480 = null;
    var v_4481 = function () {
      var v_4482 = v_4454(function () {
        var v_4483;
        var v_4484;
        var v_4485;
        var v_4486;
        var v_4487;
        var v_4488;
        var v_4489;
        return v_4465(this, function (v_4490) {
          switch (v_4490.label) {
            case 0:
              return [4, v_4491.get()];
            case 1:
              v_4483 = v_4490.sent();
              if (v_4480) {
                DestroyCam(v_4480, true);
                v_4480 = null;
              }
              var _camC = v_298 && v_298.camCoords ? v_298.camCoords : {
                x: -3806.75,
                y: -1300,
                z: 202
              };
              var _camR = v_298 && v_298.camRot ? v_298.camRot : {
                x: -1.2,
                y: 0,
                z: -80.62
              };
              var _camF = v_298 && v_298.camFov ? v_298.camFov : 50;
              v_4480 = CreateCam("DEFAULT_SPLINE_CAMERA", true);
              SetCamCoord(v_4480, _camC.x, _camC.y, _camC.z);
              SetCamFov(v_4480, _camF);
              SetCamRot(v_4480, _camR.x, _camR.y, _camR.z, 2);
              SetCamActive(v_4480, true);
              SetCamUseShallowDofMode(v_4480, false);
              SetCamNearDof(v_4480, 0.7);
              SetCamFarDof(v_4480, 5);
              SetCamDofStrength(v_4480, 0.075);
              RenderScriptCams(true, false, 0, true, true);
              v_4484 = setTick(function () {
                if (!v_4480) {
                  clearTick(v_4484);
                  return;
                }
              });
              AddCamSplineNode(v_4480, _camC.x, _camC.y, _camC.z, _camR.x, _camR.y, _camR.z, 10000, 3, 2);
              v_4485 = Math.min(v_4483?.length ?? 0, v_4492 ? v_4492.length - 1 : 0);
              v_4486 = v_4485 > 0 ? Math.max(168000 / v_4485, 30000) : 30000;
              if (v_4492) {
                for (v_4487 = 0; v_4487 < v_4485; v_4487++) {
                  v_4488 = v_4492[v_4487];
                  if (v_4488 && v_4488.camCoords && v_4488.camRot) {
                    AddCamSplineNode(v_4480, v_4488.camCoords.x, v_4488.camCoords.y, v_4488.camCoords.z, v_4488.camRot.x, v_4488.camRot.y, v_4488.camRot.z, v_4486, 3, 2);
                  }
                }
              }
              AddCamSplineNode(v_4480, _camC.x, _camC.y, _camC.z, _camR.x, _camR.y, _camR.z, 10000, 3, 2);
              SetCamSplinePhase(v_4480, 0);
              v_4489 = setInterval(function () {
                if (!v_4480) {
                  clearInterval(v_4489);
                  return;
                }
                if (GetCamSplinePhase(v_4480) >= 1) {
                  SetCamSplinePhase(v_4480, 0);
                }
              }, 1000);
              return [2];
          }
        });
      });
      return function v_4493() {
        return v_4482.apply(this, arguments);
      };
    }();
    function v_4494() {
      RenderScriptCams(false, false, 0, true, true);
      if (v_4480) {
        DestroyAllCams(true);
        v_4480 = null;
      }
    }
    v_3306.register("np-spawn:characterCameraChange", function () {
      var v_4495 = v_4454(function (v_4496) {
        return v_4465(this, function (v_4497) {
          if (v_4496 === "reset") {
            return [2];
          }
          return [2];
        });
      });
      return function (v_4498) {
        return v_4495.apply(this, arguments);
      };
    }());
    ;
    function v_4499(v_4500, v_4501) {
      if (v_4501 == null || v_4501 > v_4500.length) {
        v_4501 = v_4500.length;
      }
      for (var v_4502 = 0, v_4503 = new Array(v_4501); v_4502 < v_4501; v_4502++) {
        v_4503[v_4502] = v_4500[v_4502];
      }
      return v_4503;
    }
    function v_4504(v_4505) {
      if (Array.isArray(v_4505)) {
        return v_4499(v_4505);
      }
    }
    function v_4506(v_4507, v_4508, v_4509, v_4510, v_4511, v_4512, v_4513) {
      try {
        var v_4514 = v_4507[v_4512](v_4513);
        var v_4515 = v_4514.value;
      } catch (v_4516) {
        v_4509(v_4516);
        return;
      }
      if (v_4514.done) {
        v_4508(v_4515);
      } else {
        Promise.resolve(v_4515).then(v_4510, v_4511);
      }
    }
    function v_4517(v_4518) {
      return function () {
        var v_4519 = this;
        var v_4520 = arguments;
        return new Promise(function (v_4521, v_4522) {
          var v_4523 = v_4518.apply(v_4519, v_4520);
          function v_4524(v_4525) {
            v_4506(v_4523, v_4521, v_4522, v_4524, v_4526, "next", v_4525);
          }
          function v_4526(v_4527) {
            v_4506(v_4523, v_4521, v_4522, v_4524, v_4526, "throw", v_4527);
          }
          v_4524(undefined);
        });
      };
    }
    function v_4528(v_4529) {
      if (typeof Symbol !== "undefined" && v_4529[Symbol.iterator] != null || v_4529["@@iterator"] != null) {
        return Array.from(v_4529);
      }
    }
    function v_4530() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function v_4531(v_4532) {
      return v_4504(v_4532) || v_4528(v_4532) || v_4533(v_4532) || v_4530();
    }
    function v_4533(v_4534, v_4535) {
      if (!v_4534) {
        return;
      }
      if (typeof v_4534 === "string") {
        return v_4499(v_4534, v_4535);
      }
      var v_4536 = Object.prototype.toString.call(v_4534).slice(8, -1);
      if (v_4536 === "Object" && v_4534.constructor) {
        v_4536 = v_4534.constructor.name;
      }
      if (v_4536 === "Map" || v_4536 === "Set") {
        return Array.from(v_4536);
      }
      if (v_4536 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v_4536)) {
        return v_4499(v_4534, v_4535);
      }
    }
    function v_4537(v_4538, v_4539) {
      var v_4540;
      var v_4541;
      var v_4542;
      var v_4543;
      var v_4544 = {
        label: 0,
        sent: function () {
          if (v_4542[0] & 1) {
            throw v_4542[1];
          }
          return v_4542[1];
        },
        trys: [],
        ops: []
      };
      v_4543 = {
        next: v_4545(0),
        throw: v_4545(1),
        return: v_4545(2)
      };
      if (typeof Symbol === "function") {
        v_4543[Symbol.iterator] = function () {
          return this;
        };
      }
      return v_4543;
      function v_4545(v_4546) {
        return function (v_4547) {
          return v_4548([v_4546, v_4547]);
        };
      }
      function v_4548(v_4549) {
        if (v_4540) {
          throw new TypeError("Generator is already executing.");
        }
        while (v_4544) {
          try {
            v_4540 = 1;
            if (v_4541 && (v_4542 = v_4549[0] & 2 ? v_4541.return : v_4549[0] ? v_4541.throw || ((v_4542 = v_4541.return) && v_4542.call(v_4541), 0) : v_4541.next) && !(v_4542 = v_4542.call(v_4541, v_4549[1])).done) {
              return v_4542;
            }
            v_4541 = 0;
            if (v_4542) {
              v_4549 = [v_4549[0] & 2, v_4542.value];
            }
            switch (v_4549[0]) {
              case 0:
              case 1:
                v_4542 = v_4549;
                break;
              case 4:
                v_4544.label++;
                return {
                  value: v_4549[1],
                  done: false
                };
              case 5:
                v_4544.label++;
                v_4541 = v_4549[1];
                v_4549 = [0];
                continue;
              case 7:
                v_4549 = v_4544.ops.pop();
                v_4544.trys.pop();
                continue;
              default:
                if (!(v_4542 = v_4544.trys, v_4542 = v_4542.length > 0 && v_4542[v_4542.length - 1]) && (v_4549[0] === 6 || v_4549[0] === 2)) {
                  v_4544 = 0;
                  continue;
                }
                if (v_4549[0] === 3 && (!v_4542 || v_4549[1] > v_4542[0] && v_4549[1] < v_4542[3])) {
                  v_4544.label = v_4549[1];
                  break;
                }
                if (v_4549[0] === 6 && v_4544.label < v_4542[1]) {
                  v_4544.label = v_4542[1];
                  v_4542 = v_4549;
                  break;
                }
                if (v_4542 && v_4544.label < v_4542[2]) {
                  v_4544.label = v_4542[2];
                  v_4544.ops.push(v_4549);
                  break;
                }
                if (v_4542[2]) {
                  v_4544.ops.pop();
                }
                v_4544.trys.pop();
                continue;
            }
            v_4549 = v_4539.call(v_4538, v_4544);
          } catch (v_4550) {
            v_4549 = [6, v_4550];
            v_4541 = 0;
          } finally {
            v_4540 = v_4542 = 0;
          }
        }
        if (v_4549[0] & 5) {
          throw v_4549[1];
        }
        var v_4551 = {
          value: v_4549[0] ? v_4549[1] : undefined,
          done: true
        };
        return v_4551;
      }
    }
    var v_4552 = {
      x: -214.24,
      y: 6178.87,
      z: 31.17,
      h: 40.11
    };
    var v_4553 = {
      pos: v_4552,
      info: "Paleto Bus Stop",
      type: "default"
    };
    var v_4554 = {
      x: -1044.82,
      y: -2749.85,
      z: 21.37,
      h: 328.93
    };
    var v_4555 = {
      pos: v_4554,
      info: "LSIA",
      type: "default"
    };
    var v_4556 = [v_4553, {
      pos: {
        x: 1642.29,
        y: 3581.19,
        z: 36.5,
        h: 265.37
      },
      info: "Sandy Shores Motel",
      type: "default"
    }, v_4555, {
      pos: {
        x: 1673.9,
        y: 4884.22,
        z: 42.08,
        h: 91.85
      },
      info: "Grapeseed Market",
      type: "default"
    }];
    var v_4557 = {
      x: -661.39,
      y: -1108.59,
      z: 14.7,
      h: 166.11
    };
    var v_4558 = {
      tier: 1,
      pos: v_4557,
      info: "Little Seoul Apartments",
      type: "apartment"
    };
    var v_4559 = [v_4558];
    var v_4560 = {
      pos: {
        x: 1610.71,
        y: 2541.93,
        z: 45.56,
        h: 300
      },
      info: "Bolingbroke Penitentiary",
      type: "prison"
    };
    var v_4561 = [];
    var v_4562 = null;
    var v_4563 = function () {
      var v_4564 = v_4517(function (v_4565) {
        var v_4566;
        var v_4567;
        var v_4568;
        var v_4569;
        var v_4570;
        var v_4571;
        var v_4572;
        var v_4573;
        var v_4574;
        var v_4575;
        var v_4576;
        return v_4537(this, function (v_4577) {
          switch (v_4577.label) {
            case 0:
              v_4566 = v_3023.Sync.config.GetMiscConfig("spawn.apartments.only") ?? true;
              v_4567 = v_4566 ? [] : v_4556.map(function (v_4578, v_4579) {
                var v_4580 = {
                  info: v_4578.info,
                  posX: v_4578.pos.x,
                  posY: v_4578.pos.y,
                  type: v_4578.type
                };
                return v_4580;
              });
              return [4, v_3189.execute("spawn:getSpawns", v_4565)];
            case 1:
              v_4568 = v_4577.sent();
              if (!v_4568 || !Array.isArray(v_4568)) {
                v_4568 = [[], {
                  tier: 1
                }, {
                  x: -661.39,
                  y: -1108.59,
                  z: 14.7
                }];
              }
              v_4561 = v_4568[0] || [];
              v_4569 = v_4568[1] || {
                tier: 1
              };
              v_4570 = v_4568[2] || {
                x: -661.39,
                y: -1108.59,
                z: 14.7
              };
              v_4571 = v_4559.filter(function (v_4581) {
                return v_4581.tier === v_4569?.tier;
              }).map(function (v_4582) {
                var v_4583 = {
                  info: v_4582.info,
                  posX: v_4582.pos.x,
                  posY: v_4582.pos.y,
                  type: v_4582.type
                };
                return v_4583;
              });
              v_4572 = v_4561.map(function (v_4584) {
                var v_4585 = {
                  info: v_4584.info,
                  posX: v_4584.pos.x,
                  posY: v_4584.pos.y,
                  type: v_4584.type
                };
                return v_4585;
              });
              v_4573 = [];
              if (v_4570 && !v_4566) {
                var v_4586 = {
                  x: v_4570.x,
                  y: v_4570.y,
                  z: v_4570.z,
                  h: 0
                };
                var v_4587 = {
                  pos: v_4586,
                  info: "Last Location",
                  type: "last"
                };
                v_4562 = v_4587;
                var v_4588 = {
                  info: "Last Location",
                  posX: v_4570.x,
                  posY: v_4570.y,
                  type: "last"
                };
                v_4573.push(v_4588);
              }
              v_4574 = globalThis.exports.weather.getCurrentWeathers();
              v_4575 = globalThis.exports.weather.CurrentTimeFormatted();
              v_4576 = globalThis.exports.weather.getWeatherZones();
              SendNUIMessage({
                page: "spawn",
                spawns: v_4567.concat(v_4571).concat(v_4572).concat(v_4573),
                cityWeather: v_4574,
                gameTime: v_4575,
                cityZones: v_4576
              });
              return [2];
          }
        });
      });
      return function v_4589(v_4590) {
        return v_4564.apply(this, arguments);
      };
    }();
    var v_4591 = function () {
      var v_4592 = v_4517(function (v_4593) {
        var v_4594;
        var v_4595;
        var v_4596;
        var v_4597;
        var v_4598;
        var v_4599;
        var v_4600;
        var v_4601;
        var v_4602;
        var v_4603;
        var v_4604;
        var v_4605;
        return v_4537(this, function (v_4606) {
          switch (v_4606.label) {
            case 0:
              if (v_4593.includes("(State Control)")) {
                emit("DoLongHudText", "You Cannot Spawn Here currently, it is under state control.", 2);
                return [2];
              }
              SendNUIMessage({
                show: false,
                spawns: null
              });
              globalThis.exports.focusmanager.SetUIFocus(false, false);
              v_4594 = globalThis.exports.isPed.isPed("cid");
              v_4595 = v_4559.find(function (v_4607) {
                return v_4607.info.trim() === v_4593.trim();
              });
              v_4596 = v_4561.find(function (v_4608) {
                return v_4608.info.trim() === v_4593.trim();
              });
              v_4606.label = 1;
            case 1:
              v_4606.trys.push([1,, 17, 18]);
              if (!v_4595) {
                return [3, 3];
              }
              v_300(false);
              DoScreenFadeOut(500);
              return [4, v_4211.wait(500)];
            case 2:
              v_4606.sent();
              v_4494();
              v_3115.emitNet("spawn:resetWorld");
              emit("apartments:spawnIntoApartment");
              return [2];
            case 3:
              if (!v_4596) {
                return [3, 5];
              }
              v_300(false);
              DoScreenFadeOut(500);
              return [4, v_4211.wait(500)];
            case 4:
              v_4606.sent();
              v_4494();
              v_3115.emitNet("spawn:resetWorld");
              emit("housing:spawnIntoHousing", v_4596);
              return [2];
            case 5:
              v_4597 = v_4531(v_4556).concat([v_4562, v_4560]).find(function (v_4609) {
                var v_4610;
                return ((v_4610 = v_4609) === null || v_4610 === undefined ? undefined : v_4610.info.trim()) === v_4593.trim();
              }) ?? null;
              if (!v_4597) {
                v_3123.error(`Spawn ${v_4593} not found`);
                return [2];
              }
              v_300(false);
              DoScreenFadeOut(500);
              return [4, v_4211.wait(500)];
            case 6:
              v_4606.sent();
              v_4494();
              v_4598 = PlayerPedId();
              FreezeEntityPosition(v_4598, true);
              SetEntityCoordsNoOffset(v_4598, v_4597.pos.x, v_4597.pos.y, v_4597.pos.z, false, false, false);
              SetEntityHeading(v_4598, v_4597.pos.h);
              v_3115.emitNet("spawn:spawnChosen", v_4597);
              return [4, v_4211.waitForCondition(function () {
                return HasCollisionLoadedAroundEntity(v_4598);
              }, 10000)];
            case 7:
              v_4606.sent();
              v_3115.emitNet("spawn:resetWorld");
              return [4, v_4211.wait(1000)];
            case 8:
              v_4606.sent();
              if (v_4597.info !== "Last Location") {
                return [3, 12];
              }
              v_4599 = GetInteriorAtCoords(v_4597.pos.x, v_4597.pos.y, v_4597.pos.z);
              if (v_4599 === 0) {
                return [3, 12];
              }
              return [4, globalThis.exports.editor.spawnTestForCurrentHousing(v_4599)];
            case 9:
              v_4600 = v_4606.sent();
              if (!v_4600) {
                return [3, 12];
              }
              FreezeEntityPosition(v_4598, true);
              v_300(false);
              DoScreenFadeOut(500);
              return [4, v_4211.wait(500)];
            case 10:
              v_4606.sent();
              v_4494();
              FreezeEntityPosition(v_4598, true);
              return [4, globalThis.exports.editor.waitForHousingToLoad(v_4599, v_4597.pos)];
            case 11:
              v_4606.sent();
              return [2];
            case 12:
              SetEntityVisible(PlayerPedId(), true, true);
              FreezeEntityPosition(PlayerPedId(), false);
              v_4601 = v_4597.pos.z - 1;
              SetEntityCoordsNoOffset(v_4598, v_4597.pos.x, v_4597.pos.y, v_4601, false, false, false);
              v_4602 = "ANIM@SCRIPTED@HEIST@IG25_BEACH@MALE@";
              return [4, v_3759.loadAnim(v_4602)];
            case 13:
              v_4606.sent();
              v_4603 = NetworkCreateSynchronisedScene(v_4597.pos.x, v_4597.pos.y, v_4601, 0, 0, v_4597.pos.h, 2, false, false, 1, 0, 1);
              NetworkAddPedToSynchronisedScene(v_4598, v_4603, v_4602, "action", 1000, -1.5, 0, 0, 1000, 0);
              NetworkStartSynchronisedScene(v_4603);
              SetFacialIdleAnimOverride(v_4598, "HS4F_IG25_BEACH", "");
              ForcePedAiAndAnimationUpdate(v_4598, false, false);
              return [4, v_4211.wait(0)];
            case 14:
              v_4606.sent();
              v_4604 = CreateCam("DEFAULT_ANIMATED_CAMERA", true);
              SetCamCoord(v_4604, v_4597.pos.x, v_4597.pos.y, v_4601);
              PlayCamAnim(v_4604, "action_camera", v_4602, v_4597.pos.x, v_4597.pos.y, v_4601, 0, 0, v_4597.pos.h, false, 2);
              v_3123.debug("Waiting for spawn animation to start", v_4604);
              RenderScriptCams(true, false, 3000, true, false);
              RemoveAnimDict(v_4602);
              v_3123.debug("Waiting for spawn animation to finish", v_4594, v_4603);
              DoScreenFadeIn(1000);
              v_4605 = NetworkGetLocalSceneFromNetworkId(v_4603);
              return [4, v_4211.waitForCondition(function () {
                return GetSynchronizedScenePhase(v_4605) > 0.8;
              }, 12000)];
            case 15:
              v_4606.sent();
              NetworkStopSynchronisedScene(v_4603);
              SetGameplayCamRelativeHeading(0);
              v_300(true);
              RenderScriptCams(false, true, 750, true, false);
              return [4, v_4211.wait(750)];
            case 16:
              v_4606.sent();
              DestroyCam(v_4604, true);
              ClearFocus();
              return [3, 18];
            case 17:
              v_4611();
              v_3123.debug("Character spawned", v_4594);
              emit("np-spawn:characterSpawned", v_4594);
              v_3115.emit("spawn:characterSpawned", v_4594);
              v_3115.emitNet("spawn:characterSpawned", v_4594);
              emitNet("np-spawn:characterSpawnedServer", v_4594);
              return [7];
            case 18:
              return [2];
          }
        });
      });
      return function v_4612(v_4613) {
        return v_4592.apply(this, arguments);
      };
    }();
    function v_4611() {
      globalThis.exports.hud.sendAppEvent({
        display: true
      });
      emit("inSpawn", false);
      SetEntityVisible(PlayerPedId(), true, true);
      FreezeEntityPosition(PlayerPedId(), false);
    }
    ;
    function v_4614(v_4615, v_4616, v_4617, v_4618, v_4619, v_4620, v_4621) {
      try {
        var v_4622 = v_4615[v_4620](v_4621);
        var v_4623 = v_4622.value;
      } catch (v_4624) {
        v_4617(v_4624);
        return;
      }
      if (v_4622.done) {
        v_4616(v_4623);
      } else {
        Promise.resolve(v_4623).then(v_4618, v_4619);
      }
    }
    function v_4625(v_4626) {
      return function () {
        var v_4627 = this;
        var v_4628 = arguments;
        return new Promise(function (v_4629, v_4630) {
          var v_4631 = v_4626.apply(v_4627, v_4628);
          function v_4632(v_4633) {
            v_4614(v_4631, v_4629, v_4630, v_4632, v_4634, "next", v_4633);
          }
          function v_4634(v_4635) {
            v_4614(v_4631, v_4629, v_4630, v_4632, v_4634, "throw", v_4635);
          }
          v_4632(undefined);
        });
      };
    }
    function v_4636(v_4637, v_4638) {
      var v_4639;
      var v_4640;
      var v_4641;
      var v_4642;
      var v_4643 = {
        label: 0,
        sent: function () {
          if (v_4641[0] & 1) {
            throw v_4641[1];
          }
          return v_4641[1];
        },
        trys: [],
        ops: []
      };
      v_4642 = {
        next: v_4644(0),
        throw: v_4644(1),
        return: v_4644(2)
      };
      if (typeof Symbol === "function") {
        v_4642[Symbol.iterator] = function () {
          return this;
        };
      }
      return v_4642;
      function v_4644(v_4645) {
        return function (v_4646) {
          return v_4647([v_4645, v_4646]);
        };
      }
      function v_4647(v_4648) {
        if (v_4639) {
          throw new TypeError("Generator is already executing.");
        }
        while (v_4643) {
          try {
            v_4639 = 1;
            if (v_4640 && (v_4641 = v_4648[0] & 2 ? v_4640.return : v_4648[0] ? v_4640.throw || ((v_4641 = v_4640.return) && v_4641.call(v_4640), 0) : v_4640.next) && !(v_4641 = v_4641.call(v_4640, v_4648[1])).done) {
              return v_4641;
            }
            v_4640 = 0;
            if (v_4641) {
              v_4648 = [v_4648[0] & 2, v_4641.value];
            }
            switch (v_4648[0]) {
              case 0:
              case 1:
                v_4641 = v_4648;
                break;
              case 4:
                v_4643.label++;
                return {
                  value: v_4648[1],
                  done: false
                };
              case 5:
                v_4643.label++;
                v_4640 = v_4648[1];
                v_4648 = [0];
                continue;
              case 7:
                v_4648 = v_4643.ops.pop();
                v_4643.trys.pop();
                continue;
              default:
                if (!(v_4641 = v_4643.trys, v_4641 = v_4641.length > 0 && v_4641[v_4641.length - 1]) && (v_4648[0] === 6 || v_4648[0] === 2)) {
                  v_4643 = 0;
                  continue;
                }
                if (v_4648[0] === 3 && (!v_4641 || v_4648[1] > v_4641[0] && v_4648[1] < v_4641[3])) {
                  v_4643.label = v_4648[1];
                  break;
                }
                if (v_4648[0] === 6 && v_4643.label < v_4641[1]) {
                  v_4643.label = v_4641[1];
                  v_4641 = v_4648;
                  break;
                }
                if (v_4641 && v_4643.label < v_4641[2]) {
                  v_4643.label = v_4641[2];
                  v_4643.ops.push(v_4648);
                  break;
                }
                if (v_4641[2]) {
                  v_4643.ops.pop();
                }
                v_4643.trys.pop();
                continue;
            }
            v_4648 = v_4638.call(v_4637, v_4643);
          } catch (v_4649) {
            v_4648 = [6, v_4649];
            v_4640 = 0;
          } finally {
            v_4639 = v_4641 = 0;
          }
        }
        if (v_4648[0] & 5) {
          throw v_4648[1];
        }
        var v_4650 = {
          value: v_4648[0] ? v_4648[1] : undefined,
          done: true
        };
        return v_4650;
      }
    }
    var v_4651 = "none";
    var v_4652 = function () {
      var v_4653 = v_4625(function () {
        return v_4636(this, function (v_4654) {
          globalThis.exports.focusmanager.RegisterFocusHandler(function (v_4655, v_4656) {
            SetNuiFocus(v_4655, v_4656);
          });
          return [2];
        });
      });
      return function v_4657() {
        return v_4653.apply(this, arguments);
      };
    }();
    var v_4658 = v_4211.cache(function () {
      var v_4659 = v_4625(function (v_4660) {
        var v_4661;
        return v_4636(this, function (v_4662) {
          switch (v_4662.label) {
            case 0:
              return [4, v_3189.execute("spawn:getCharacterOrder")];
            case 1:
              v_4661 = v_4662.sent();
              if (!v_4661) {
                return [2, [false, null]];
              }
              return [2, [true, v_4661]];
          }
        });
      });
      return function (v_4663) {
        return v_4659.apply(this, arguments);
      };
    }(), {
      timeToLive: 300000
    });
    var v_4664;
    globalThis.ExecuteSpawnCharacter = async function (cid, isNew, newCharData) {
      cid = cid && typeof cid === "object" ? cid.actionData || cid.charId || cid.id || 1 : cid || 1;
      console.log("[SPAWN] Executing full player spawn sequence for CID:", cid);

      // 1. Close NUI UI and remove focus immediately
      globalThis._isSpawnMenuOpen = false;
      try {
        SetNuiFocus(false, false);
        SetNuiFocusKeepInput(false);
        if (globalThis.exports && globalThis.exports.focusmanager && globalThis.exports.focusmanager.SetUIFocus) {
          globalThis.exports.focusmanager.SetUIFocus(false, false, true);
        }
      } catch (e) {}
      SendNUIMessage({
        close: true,
        open: false,
        show: false,
        page: "none",
        spawns: null
      });

      // 2. Fetch or prepare character data
      var chardata = {
        id: cid,
        first_name: "Kyze",
        last_name: "Rider",
        name: "Kyze Rider",
        dob: "2000-01-01",
        gender: 0,
        phone_number: "555-0001",
        story: "",
        cash: 500,
        bank: 5000,
        type: "citizen"
      };
      try {
        var res = await Promise.race([v_3189.execute("spawn:selectCharacter", cid), new Promise(function (resolve) {
          setTimeout(function () {
            resolve(null);
          }, 2000);
        })]);
        if (res && res.chardata) {
          chardata = res.chardata;
        }
      } catch (e) {
        console.log("[SPAWN] selectCharacter RPC notice:", e);
      }

      // 3. Set current character in np-base LocalPlayer module
      try {
        if (globalThis.exports && globalThis.exports["np-base"]) {
          var localPlayer = globalThis.exports["np-base"].getModule("LocalPlayer");
          if (localPlayer && localPlayer.setCurrentCharacter) {
            localPlayer.setCurrentCharacter(chardata);
          }
        }
      } catch (e) {
        console.log("[SPAWN] LocalPlayer set character err:", e);
      }

      // 4. Server notifications
      TriggerServerEvent("np-base:selectCharacter", cid);
      emitNet("spawn:characterSpawnedServer", cid);
      TriggerServerEvent("np-spawn:characterSpawned", cid);
      emitNet("np-spawn:characterSpawned", cid);
      try {
        v_3115.emitNet("spawn:characterSpawned", cid);
        v_3115.emitNet("spawn:resetWorld");
      } catch (e) {}

      // 5. Fade out transition (quick 200ms)
      DoScreenFadeOut(200);
      await new Promise(function (r) {
        setTimeout(r, 250);
      });

      // 6. Clean up cams
      RenderScriptCams(false, false, 0, true, true);
      DestroyAllCams(true);
      ClearFocus();

      // 7. Position, resurrect, and heal player ped
      var ped = PlayerPedId();
      var spawnCoords = {
        x: -268.0,
        y: -957.0,
        z: 31.2,
        h: 205.0
      };

      // Resurrect native to cancel any ragdoll or death state
      NetworkResurrectLocalPlayer(spawnCoords.x, spawnCoords.y, spawnCoords.z, spawnCoords.h, true, false);
      ResurrectPed(ped);
      SetEntityCoordsNoOffset(ped, spawnCoords.x, spawnCoords.y, spawnCoords.z, false, false, false);
      SetEntityHeading(ped, spawnCoords.h);
      SetEntityHealth(ped, 200);
      SetPedArmour(ped, 0);
      ClearPedTasksImmediately(ped);
      SetPedCanRagdoll(ped, true);
      FreezeEntityPosition(ped, false);
      SetEntityVisible(ped, true, true);
      SetPlayerInvincible(PlayerId(), false);

      // 8. Revive wounds system
      TriggerEvent("wounds:revive");
      TriggerServerEvent("wounds:revive");
      emit("wounds:changeDeathState", false);
      emit("playerRevived");
      emit("np-wounds:reset");

      // 9. Restore camera and gameplay view
      SetGameplayCamRelativeHeading(0);
      SetGameplayCamRelativePitch(0, 1);

      // 10. Fade screen back in
      ClearTimecycleModifier();
      TransitionFromBlurred(0);
      DoScreenFadeIn(500);

      // 11. Enable HUD & trigger all spawn events
      emit("inSpawn", false);
      emit("np-base:firstSpawn");
      emit("np-base:playerSpawned");
      emit("playerSpawned");
      emit("np-spawn:characterSpawned", cid);
      emit("hud:hotreload");
      try {
        if (globalThis.exports && globalThis.exports.hud) {
          globalThis.exports.hud.sendAppEvent({
            display: true
          });
        }
      } catch (e) {}
      try {
        emit("np-clothing:applyCurrentClothing");
      } catch (e) {}

      // Flow for new characters vs existing characters
      if (isNew) {
        var modelName = (newCharData && (newCharData.gender === 1 || newCharData.gender === "1")) ? "mp_f_freemode_01" : "mp_m_freemode_01";
        try {
          if (globalThis.exports && globalThis.exports.clothing && globalThis.exports.clothing.SetModel) {
            await globalThis.exports.clothing.SetModel(modelName);
          }
        } catch (e) {}
        setTimeout(function () {
          emit("np-clothing:openClothing", true, false);
        }, 1000);
        var finishedHandler = function () {
          removeEventListener("np-spawn:finishedClothing", finishedHandler);
          removeEventListener("np-clothing:close", finishedHandler);
          setTimeout(function () {
            emit("apartments:spawnIntoApartment");
          }, 500);
        };
        on("np-spawn:finishedClothing", finishedHandler);
        on("np-clothing:close", finishedHandler);
      } else {
        setTimeout(function () {
          emit("apartments:spawnIntoApartment");
        }, 500);
      }

      // 12. Final re-assertion: ensure NUI is closed and cursor is completely released
      function closeNui() {
        try {
          SetNuiFocus(false, false);
          SetNuiFocusKeepInput(false);
          if (globalThis.exports && globalThis.exports.focusmanager && globalThis.exports.focusmanager.SetUIFocus) {
            globalThis.exports.focusmanager.SetUIFocus(false, false, true);
          }
        } catch (e) {}
        SendNUIMessage({
          close: true,
          open: false,
          show: false,
          page: "none",
          spawns: null
        });
      }
      closeNui();
      setTimeout(closeNui, 500);
      setTimeout(closeNui, 1500);
      console.log("[SPAWN] Player successfully spawned into game world!");
      return true;
    };
    async function v_4665() {
      console.log("[SPAWN] Starting v_4665 resilient sequence...");
      try {
        globalThis.exports.hud.sendAppEvent({
          display: false
        });
      } catch (e) {}

      // Immediately shut down loading screen, clear black screen, and enable mouse
      try {
        ShutdownLoadingScreenNui();
        ShutdownLoadingScreen();
        ClearTimecycleModifier();
        TransitionFromBlurred(0);
        DoScreenFadeIn(500);
      } catch (e) {}
      try {
        SetNuiFocus(true, true);
        SetNuiFocusKeepInput(false);
        if (globalThis.exports && globalThis.exports.focusmanager && globalThis.exports.focusmanager.SetUIFocus) {
          globalThis.exports.focusmanager.SetUIFocus(true, true);
        }
      } catch (e) {}

      // Fetch characters with 2s timeout and fallback
      var _chars = [];
      try {
        _chars = (await Promise.race([v_4491.get(), new Promise(function (_, reject) {
          setTimeout(function () {
            reject(new Error("char timeout"));
          }, 2500);
        })])) || [];
      } catch (e) {
        console.warn("[SPAWN] Character fetch timed out or failed, using local fallback");
      }
      if (!_chars) {
        _chars = [];
      }

      // Fetch ordering with 1s timeout
      var _ordering = {};
      try {
        _ordering = (await Promise.race([v_4658.get(), new Promise(function (_, reject) {
          setTimeout(function () {
            reject(new Error("order timeout"));
          }, 1000);
        })])) || {};
      } catch (e) {
        _ordering = {};
      }
      var _openData = {
        show: true,
        open: true,
        page: "select",
        chars: _chars,
        ordering: _ordering,
        charLimit: 5,
        charMaxLimit: 5,
        extraCharData: {},
        queueType: "default",
        createCharacter: false,
        firstOpen: false
      };
      globalThis._spawnOpenData = _openData;
      globalThis._isSpawnMenuOpen = true;
      globalThis._spawnBroadcast = function () {
        try {
          ClearTimecycleModifier();
          TransitionFromBlurred(0);
          DoScreenFadeIn(500);
          SendNUIMessage(_openData);
          SetNuiFocus(true, true);
          SetNuiFocusKeepInput(false);
        } catch (e) {}
      };
      globalThis._spawnBroadcast();
      console.log(`[SPAWN] Sent _openData to NUI with ${_chars.length} characters. Mouse focus enabled.`);
      for (var _d of [200, 600, 1200, 2000, 3500]) {
        setTimeout(function () {
          if (globalThis._spawnBroadcast && globalThis._isSpawnMenuOpen) {
            globalThis._spawnBroadcast();
          }
        }, _d);
      }
      return true;
    }
    v_3306.register("nuiCallback", function () {
      var v_4666 = v_4625(function (v_4667) {
        var v_4668;
        var v_4669;
        var v_4670;
        return v_4636(this, function (v_4671) {
          switch (v_4671.label) {
            case 0:
              v_4668 = v_4667.action;
              switch (v_4668) {
                case "nuiReady":
                  console.log("[SPAWN] Received nuiReady from NUI, spawnMenuOpen:", globalThis._isSpawnMenuOpen);
                  if (globalThis._spawnBroadcast && globalThis._isSpawnMenuOpen) {
                    globalThis._spawnBroadcast();
                  } else {
                    SendNUIMessage({
                      close: true,
                      open: false,
                      show: false,
                      page: "none",
                      spawns: null
                    });
                  }
                  return [3, 10];
                case "creation-error":
                  return [3, 1];
                case "selectCharacter":
                  return [3, 2];
                case "changeChar":
                  return [3, 3];
                case "deleteCharacter":
                  return [3, 4];
                case "newCharacter":
                  return [3, 6];
                case "favorite":
                  return [3, 8];
                case "spawnLocation":
                  return [3, 9];
              }
              return [3, 10];
            case 1:
              emit("DoLongHudText", v_4667.actionData.message, 2);
              return [3, 10];
            case 2:
              v_4672(v_4667);
              return [3, 10];
            case 3:
              return [3, 10];
            case 4:
              return [4, v_3189.execute("np-character:deleteCharacter", v_4667.actionData)];
            case 5:
              v_4671.sent();
              v_4491.reset();
              v_4673.reset();
              globalThis.exports.core.InitializeSpawn();
              return [3, 10];
            case 6:
              var v_4674 = {
                firstname: v_4667.actionData.first_name,
                lastname: v_4667.actionData.last_name,
                dob: v_4667.actionData.dob,
                gender: v_4667.actionData.gender,
                type: v_4651 === "lifer" ? "lifer" : "normal"
              };
              v_4669 = v_4674;
              return [4, v_3189.execute("np-character:createCharacter", v_4669)];
            case 7:
              v_4670 = v_4671.sent();
              if (!v_4670) {
                emit("DoLongHudText", "There was an error while creating your character, value returned nil or false. Contact an administrator if this persists.", 2);
                return [2];
              }
              if (!v_4670.success) {
                emit("DoLongHudText", v_4670.message, 2);
              }
              v_4491.reset();
              v_4673.reset();
              v_4664 = v_4670.cid || v_4670.characterId || 1;
              if (globalThis.ExecuteSpawnCharacter) {
                globalThis.ExecuteSpawnCharacter(v_4664, true, v_4669);
              }
              return [3, 10];
            case 8:
              return [3, 10];
            case 9:
              v_4591(v_4667.actionData);
              return [3, 10];
            case 10:
              return [2];
          }
        });
      });
      return function (v_4675) {
        return v_4666.apply(this, arguments);
      };
    }());
    v_3306.register("np-spawn:saveCharacterOrder", function () {
      var v_4676 = v_4625(function (v_4677) {
        return v_4636(this, function (v_4678) {
          switch (v_4678.label) {
            case 0:
              v_4658.reset();
              return [4, v_3189.execute("spawn:saveCharacterOrder", v_4677)];
            case 1:
              return [2, v_4678.sent()];
          }
        });
      });
      return function (v_4679) {
        return v_4676.apply(this, arguments);
      };
    }());
    ;
    function v_4680(v_4681, v_4682, v_4683, v_4684, v_4685, v_4686, v_4687) {
      try {
        var v_4688 = v_4681[v_4686](v_4687);
        var v_4689 = v_4688.value;
      } catch (v_4690) {
        v_4683(v_4690);
        return;
      }
      if (v_4688.done) {
        v_4682(v_4689);
      } else {
        Promise.resolve(v_4689).then(v_4684, v_4685);
      }
    }
    function v_4691(v_4692) {
      return function () {
        var v_4693 = this;
        var v_4694 = arguments;
        return new Promise(function (v_4695, v_4696) {
          var v_4697 = v_4692.apply(v_4693, v_4694);
          function v_4698(v_4699) {
            v_4680(v_4697, v_4695, v_4696, v_4698, v_4700, "next", v_4699);
          }
          function v_4700(v_4701) {
            v_4680(v_4697, v_4695, v_4696, v_4698, v_4700, "throw", v_4701);
          }
          v_4698(undefined);
        });
      };
    }
    function v_4702(v_4703, v_4704) {
      var v_4705;
      var v_4706;
      var v_4707;
      var v_4708;
      var v_4709 = {
        label: 0,
        sent: function () {
          if (v_4707[0] & 1) {
            throw v_4707[1];
          }
          return v_4707[1];
        },
        trys: [],
        ops: []
      };
      v_4708 = {
        next: v_4710(0),
        throw: v_4710(1),
        return: v_4710(2)
      };
      if (typeof Symbol === "function") {
        v_4708[Symbol.iterator] = function () {
          return this;
        };
      }
      return v_4708;
      function v_4710(v_4711) {
        return function (v_4712) {
          return v_4713([v_4711, v_4712]);
        };
      }
      function v_4713(v_4714) {
        if (v_4705) {
          throw new TypeError("Generator is already executing.");
        }
        while (v_4709) {
          try {
            v_4705 = 1;
            if (v_4706 && (v_4707 = v_4714[0] & 2 ? v_4706.return : v_4714[0] ? v_4706.throw || ((v_4707 = v_4706.return) && v_4707.call(v_4706), 0) : v_4706.next) && !(v_4707 = v_4707.call(v_4706, v_4714[1])).done) {
              return v_4707;
            }
            v_4706 = 0;
            if (v_4707) {
              v_4714 = [v_4714[0] & 2, v_4707.value];
            }
            switch (v_4714[0]) {
              case 0:
              case 1:
                v_4707 = v_4714;
                break;
              case 4:
                v_4709.label++;
                return {
                  value: v_4714[1],
                  done: false
                };
              case 5:
                v_4709.label++;
                v_4706 = v_4714[1];
                v_4714 = [0];
                continue;
              case 7:
                v_4714 = v_4709.ops.pop();
                v_4709.trys.pop();
                continue;
              default:
                if (!(v_4707 = v_4709.trys, v_4707 = v_4707.length > 0 && v_4707[v_4707.length - 1]) && (v_4714[0] === 6 || v_4714[0] === 2)) {
                  v_4709 = 0;
                  continue;
                }
                if (v_4714[0] === 3 && (!v_4707 || v_4714[1] > v_4707[0] && v_4714[1] < v_4707[3])) {
                  v_4709.label = v_4714[1];
                  break;
                }
                if (v_4714[0] === 6 && v_4709.label < v_4707[1]) {
                  v_4709.label = v_4707[1];
                  v_4707 = v_4714;
                  break;
                }
                if (v_4707 && v_4709.label < v_4707[2]) {
                  v_4709.label = v_4707[2];
                  v_4709.ops.push(v_4714);
                  break;
                }
                if (v_4707[2]) {
                  v_4709.ops.pop();
                }
                v_4709.trys.pop();
                continue;
            }
            v_4714 = v_4704.call(v_4703, v_4709);
          } catch (v_4715) {
            v_4714 = [6, v_4715];
            v_4706 = 0;
          } finally {
            v_4705 = v_4707 = 0;
          }
        }
        if (v_4714[0] & 5) {
          throw v_4714[1];
        }
        var v_4716 = {
          value: v_4714[0] ? v_4714[1] : undefined,
          done: true
        };
        return v_4716;
      }
    }
    var v_4717 = {
      x: -3803.229736328125,
      y: -1297.570068359375,
      z: 201.3929443359375
    };
    var v_4718 = {
      x: -3803.43,
      y: -1295.58,
      z: 200.99,
      h: 185.74
    };
    var v_4719 = {
      camCoords: v_4717,
      camRot: {
        x: 0,
        y: 0,
        z: 11.36939811706543
      },
      camFov: 20,
      ped: v_4718
    };
    var v_4720 = v_4719;
    var v_4721;
    var v_4722 = function () {
      var v_4723 = v_4691(function (v_4724) {
        var v_4725;
        var v_4726;
        return v_4702(this, function (v_4727) {
          switch (v_4727.label) {
            case 0:
              SendNUIMessage({
                show: false
              });
              globalThis.exports.focusmanager.SetUIFocus(false, false);
              v_4494();
              v_4721 = v_4724;
              v_4725 = PlayerPedId();
              SetEntityVisible(v_4725, true, true);
              SetEntityCoordsNoOffset(v_4725, v_4720.ped.x, v_4720.ped.y, v_4720.ped.z, false, false, false);
              SetEntityHeading(v_4725, v_4720.ped.h);
              v_4726 = v_4724.gender === 0 ? "mp_m_freemode_01" : "mp_f_freemode_01";
              return [4, globalThis.exports.clothing.SetModel(v_4726)];
            case 1:
              v_4725 = v_4727.sent();
              emit("np-clothing:openClothing", true, true, false, "spawn");
              SetEntityHeading(v_4725, v_4720.ped.h);
              SetGameplayCamRelativeHeading(180);
              SetGameplayCamRelativePitch(0, 1);
              return [2];
          }
        });
      });
      return function v_4728(v_4729) {
        return v_4723.apply(this, arguments);
      };
    }();
    on("np-spawn:finishedClothing", function () {
      var v_4730 = v_4691(function (v_4731) {
        return v_4702(this, function (v_4732) {
          switch (v_4732.label) {
            case 0:
              SetEntityVisible(PlayerPedId(), false, false);
              if (v_4731 !== "Finished") {
                return [3, 6];
              }
              v_4733();
              return [4, v_4563(v_4721.id)];
            case 1:
              v_4732.sent();
              if (v_4651 !== "lifer") {
                return [3, 3];
              }
              return [4, v_4591(v_4560.info)];
            case 2:
              v_4732.sent();
              return [3, 5];
            case 3:
              return [4, v_4591(v_4559[0].info)];
            case 4:
              v_4732.sent();
              v_4732.label = 5;
            case 5:
              return [3, 7];
            case 6:
              globalThis.exports.core.InitializeSpawn();
              v_4732.label = 7;
            case 7:
              return [2];
          }
        });
      });
      return function (v_4734) {
        return v_4730.apply(this, arguments);
      };
    }());
    ;
    function v_4735(v_4736, v_4737, v_4738, v_4739, v_4740, v_4741, v_4742) {
      try {
        var v_4743 = v_4736[v_4741](v_4742);
        var v_4744 = v_4743.value;
      } catch (v_4745) {
        v_4738(v_4745);
        return;
      }
      if (v_4743.done) {
        v_4737(v_4744);
      } else {
        Promise.resolve(v_4744).then(v_4739, v_4740);
      }
    }
    function v_4746(v_4747) {
      return function () {
        var v_4748 = this;
        var v_4749 = arguments;
        return new Promise(function (v_4750, v_4751) {
          var v_4752 = v_4747.apply(v_4748, v_4749);
          function v_4753(v_4754) {
            v_4735(v_4752, v_4750, v_4751, v_4753, v_4755, "next", v_4754);
          }
          function v_4755(v_4756) {
            v_4735(v_4752, v_4750, v_4751, v_4753, v_4755, "throw", v_4756);
          }
          v_4753(undefined);
        });
      };
    }
    function v_4757(v_4758, v_4759) {
      var v_4760;
      var v_4761;
      var v_4762;
      var v_4763;
      var v_4764 = {
        label: 0,
        sent: function () {
          if (v_4762[0] & 1) {
            throw v_4762[1];
          }
          return v_4762[1];
        },
        trys: [],
        ops: []
      };
      v_4763 = {
        next: v_4765(0),
        throw: v_4765(1),
        return: v_4765(2)
      };
      if (typeof Symbol === "function") {
        v_4763[Symbol.iterator] = function () {
          return this;
        };
      }
      return v_4763;
      function v_4765(v_4766) {
        return function (v_4767) {
          return v_4768([v_4766, v_4767]);
        };
      }
      function v_4768(v_4769) {
        if (v_4760) {
          throw new TypeError("Generator is already executing.");
        }
        while (v_4764) {
          try {
            v_4760 = 1;
            if (v_4761 && (v_4762 = v_4769[0] & 2 ? v_4761.return : v_4769[0] ? v_4761.throw || ((v_4762 = v_4761.return) && v_4762.call(v_4761), 0) : v_4761.next) && !(v_4762 = v_4762.call(v_4761, v_4769[1])).done) {
              return v_4762;
            }
            v_4761 = 0;
            if (v_4762) {
              v_4769 = [v_4769[0] & 2, v_4762.value];
            }
            switch (v_4769[0]) {
              case 0:
              case 1:
                v_4762 = v_4769;
                break;
              case 4:
                v_4764.label++;
                return {
                  value: v_4769[1],
                  done: false
                };
              case 5:
                v_4764.label++;
                v_4761 = v_4769[1];
                v_4769 = [0];
                continue;
              case 7:
                v_4769 = v_4764.ops.pop();
                v_4764.trys.pop();
                continue;
              default:
                if (!(v_4762 = v_4764.trys, v_4762 = v_4762.length > 0 && v_4762[v_4762.length - 1]) && (v_4769[0] === 6 || v_4769[0] === 2)) {
                  v_4764 = 0;
                  continue;
                }
                if (v_4769[0] === 3 && (!v_4762 || v_4769[1] > v_4762[0] && v_4769[1] < v_4762[3])) {
                  v_4764.label = v_4769[1];
                  break;
                }
                if (v_4769[0] === 6 && v_4764.label < v_4762[1]) {
                  v_4764.label = v_4762[1];
                  v_4762 = v_4769;
                  break;
                }
                if (v_4762 && v_4764.label < v_4762[2]) {
                  v_4764.label = v_4762[2];
                  v_4764.ops.push(v_4769);
                  break;
                }
                if (v_4762[2]) {
                  v_4764.ops.pop();
                }
                v_4764.trys.pop();
                continue;
            }
            v_4769 = v_4759.call(v_4758, v_4764);
          } catch (v_4770) {
            v_4769 = [6, v_4770];
            v_4761 = 0;
          } finally {
            v_4760 = v_4762 = 0;
          }
        }
        if (v_4769[0] & 5) {
          throw v_4769[1];
        }
        var v_4771 = {
          value: v_4769[0] ? v_4769[1] : undefined,
          done: true
        };
        return v_4771;
      }
    }
    var v_4491 = v_4211.cache(function () {
      var v_4772 = v_4746(function (v_4773) {
        var v_4774;
        return v_4757(this, function (v_4775) {
          switch (v_4775.label) {
            case 0:
              return [4, v_3189.execute("np-character:fetchCharacterData")];
            case 1:
              v_4774 = v_4775.sent();
              if (!v_4774) {
                return [2, [false, null]];
              }
              return [2, [true, v_4774]];
          }
        });
      });
      return function (v_4776) {
        return v_4772.apply(this, arguments);
      };
    }(), {
      timeToLive: 300000
    });
    var v_4777 = function () {
      var v_4778 = v_4746(function () {
        var v_4779;
        return v_4757(this, function (v_4780) {
          switch (v_4780.label) {
            case 0:
              v_4779 = PlayerPedId();
              SetPlayerInvincible(v_4779, true);
              SetEntityCoordsNoOffset(v_4779, v_299.x, v_299.y, v_299.z, false, false, false);
              SetEntityVisible(v_4779, false, false);
              v_3115.emitNet("spawn:setWorld");
              return [4, v_4211.wait(0)];
            case 1:
              v_4780.sent();
              SetEntityVisible(v_4779, false, false);
              return [2];
          }
        });
      });
      return function v_4781() {
        return v_4778.apply(this, arguments);
      };
    }();
    var v_4782 = function () {
      var v_4783 = v_4746(function () {
        var v_4784;
        var v_4785;
        return v_4757(this, function (v_4786) {
          switch (v_4786.label) {
            case 0:
              v_4784 = (globalThis.exports && globalThis.exports.config && globalThis.exports.config.GetModuleConfig ? globalThis.exports.config.GetModuleConfig("main") || {} : {}).characterLimit || 4;
              return [4, v_3189.execute("spawn:getCharacterSlotsOverride")];
            case 1:
              v_4785 = v_4786.sent();
              return [2, v_4785 || v_4784];
          }
        });
      });
      return function v_4787() {
        return v_4783.apply(this, arguments);
      };
    }();
    function v_4672(v_4788) {
      var cid = v_4788 && (v_4788.actionData || v_4788.selectcharacter || v_4788.id) || 1;
      console.log("[SPAWN] v_4672 invoking ExecuteSpawnCharacter with CID:", cid);
      if (globalThis.ExecuteSpawnCharacter) {
        globalThis.ExecuteSpawnCharacter(cid);
      }
    }
    function v_4733() {
      emit("np-base:firstSpawn");
      SendNUIMessage({
        show: false
      });
    }
    on("np-base:firstSpawn", function () {
      emit("np-base:playerSpawned");
      emit("playerSpawned");
      emitNet("checkTypes");
      emit("fx:clear");
      emitNet("Evidence:checkDna");
      emitNet("distillery:getDistilleryLocation");
      emit("np-clothing:applyCurrentClothing");
    });
    ;
    function v_4789(v_4790, v_4791, v_4792, v_4793, v_4794, v_4795, v_4796) {
      try {
        var v_4797 = v_4790[v_4795](v_4796);
        var v_4798 = v_4797.value;
      } catch (v_4799) {
        v_4792(v_4799);
        return;
      }
      if (v_4797.done) {
        v_4791(v_4798);
      } else {
        Promise.resolve(v_4798).then(v_4793, v_4794);
      }
    }
    function v_4800(v_4801) {
      return function () {
        var v_4802 = this;
        var v_4803 = arguments;
        return new Promise(function (v_4804, v_4805) {
          var v_4806 = v_4801.apply(v_4802, v_4803);
          function v_4807(v_4808) {
            v_4789(v_4806, v_4804, v_4805, v_4807, v_4809, "next", v_4808);
          }
          function v_4809(v_4810) {
            v_4789(v_4806, v_4804, v_4805, v_4807, v_4809, "throw", v_4810);
          }
          v_4807(undefined);
        });
      };
    }
    function v_4811(v_4812, v_4813) {
      var v_4814;
      var v_4815;
      var v_4816;
      var v_4817;
      var v_4818 = {
        label: 0,
        sent: function () {
          if (v_4816[0] & 1) {
            throw v_4816[1];
          }
          return v_4816[1];
        },
        trys: [],
        ops: []
      };
      v_4817 = {
        next: v_4819(0),
        throw: v_4819(1),
        return: v_4819(2)
      };
      if (typeof Symbol === "function") {
        v_4817[Symbol.iterator] = function () {
          return this;
        };
      }
      return v_4817;
      function v_4819(v_4820) {
        return function (v_4821) {
          return v_4822([v_4820, v_4821]);
        };
      }
      function v_4822(v_4823) {
        if (v_4814) {
          throw new TypeError("Generator is already executing.");
        }
        while (v_4818) {
          try {
            v_4814 = 1;
            if (v_4815 && (v_4816 = v_4823[0] & 2 ? v_4815.return : v_4823[0] ? v_4815.throw || ((v_4816 = v_4815.return) && v_4816.call(v_4815), 0) : v_4815.next) && !(v_4816 = v_4816.call(v_4815, v_4823[1])).done) {
              return v_4816;
            }
            v_4815 = 0;
            if (v_4816) {
              v_4823 = [v_4823[0] & 2, v_4816.value];
            }
            switch (v_4823[0]) {
              case 0:
              case 1:
                v_4816 = v_4823;
                break;
              case 4:
                v_4818.label++;
                return {
                  value: v_4823[1],
                  done: false
                };
              case 5:
                v_4818.label++;
                v_4815 = v_4823[1];
                v_4823 = [0];
                continue;
              case 7:
                v_4823 = v_4818.ops.pop();
                v_4818.trys.pop();
                continue;
              default:
                if (!(v_4816 = v_4818.trys, v_4816 = v_4816.length > 0 && v_4816[v_4816.length - 1]) && (v_4823[0] === 6 || v_4823[0] === 2)) {
                  v_4818 = 0;
                  continue;
                }
                if (v_4823[0] === 3 && (!v_4816 || v_4823[1] > v_4816[0] && v_4823[1] < v_4816[3])) {
                  v_4818.label = v_4823[1];
                  break;
                }
                if (v_4823[0] === 6 && v_4818.label < v_4816[1]) {
                  v_4818.label = v_4816[1];
                  v_4816 = v_4823;
                  break;
                }
                if (v_4816 && v_4818.label < v_4816[2]) {
                  v_4818.label = v_4816[2];
                  v_4818.ops.push(v_4823);
                  break;
                }
                if (v_4816[2]) {
                  v_4818.ops.pop();
                }
                v_4818.trys.pop();
                continue;
            }
            v_4823 = v_4813.call(v_4812, v_4818);
          } catch (v_4824) {
            v_4823 = [6, v_4824];
            v_4815 = 0;
          } finally {
            v_4814 = v_4816 = 0;
          }
        }
        if (v_4823[0] & 5) {
          throw v_4823[1];
        }
        var v_4825 = {
          value: v_4823[0] ? v_4823[1] : undefined,
          done: true
        };
        return v_4825;
      }
    }
    function v_4826(v_4827) {
      var v_4828 = typeof Symbol === "function" && Symbol.iterator;
      var v_4829 = v_4828 && v_4827[v_4828];
      var v_4830 = 0;
      if (v_4829) {
        return v_4829.call(v_4827);
      }
      if (v_4827 && typeof v_4827.length === "number") {
        return {
          next: function () {
            if (v_4827 && v_4830 >= v_4827.length) {
              v_4827 = undefined;
            }
            var v_4831 = {
              value: v_4827 && v_4827[v_4830++],
              done: !v_4827
            };
            return v_4831;
          }
        };
      }
      throw new TypeError(v_4828 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    var v_4832 = {
      x: -3799.4,
      y: -1302.95,
      z: 201.5
    };
    var v_4833 = {
      x: -1.6,
      y: 0,
      z: 16.36
    };
    var v_4834 = {
      x: -3800.3,
      y: -1298.48,
      z: 199.51,
      h: 161.36
    };
    var v_4835 = {
      camCoords: v_4832,
      camRot: v_4833,
      camFov: 50,
      ped: v_4834,
      pedScenario: "PROP_HUMAN_SEAT_CHAIR_UPRIGHT"
    };
    var v_4836 = {
      x: -3799.17,
      y: -1300.45,
      z: 201.5
    };
    var v_4837 = {
      x: -1.2,
      y: 0,
      z: 123.34
    };
    var v_4838 = {
      x: -3801.17,
      y: -1301.35,
      z: 199.51,
      h: 340.34
    };
    var v_4839 = {
      camCoords: v_4836,
      camRot: v_4837,
      camFov: 50,
      ped: v_4838,
      pedScenario: "PROP_HUMAN_SEAT_CHAIR_DRINK"
    };
    var v_4840 = {
      x: -3796.38,
      y: -1303.16,
      z: 201.5
    };
    var v_4841 = {
      x: -1.2,
      y: 0,
      z: 190
    };
    var v_4842 = {
      x: -3796.38,
      y: -1303.96,
      z: 199.98,
      h: 247.52
    };
    var v_4843 = {
      camCoords: v_4840,
      camRot: v_4841,
      camFov: 50,
      ped: v_4842,
      pedScenario: "WORLD_HUMAN_AA_SMOKE"
    };
    var v_4844 = {
      x: -3796.86,
      y: -1302.25,
      z: 201.25
    };
    var v_4845 = {
      x: -1.2,
      y: 0,
      z: 351.38
    };
    var v_4846 = {
      x: -3795.41,
      y: -1298.66,
      z: 199.98,
      h: 183.37
    };
    var v_4847 = {
      camCoords: v_4844,
      camRot: v_4845,
      camFov: 50,
      ped: v_4846,
      pedScenario: "WORLD_HUMAN_TOURIST_MAP"
    };
    var v_4848 = {
      x: -3795.01,
      y: -1301.26,
      z: 201.5
    };
    var v_4849 = {
      x: -1.3,
      y: 0,
      z: 63.37
    };
    var v_4850 = {
      x: -3795.86,
      y: -1300.72,
      z: 199.98,
      h: 351.38
    };
    var v_4851 = {
      camCoords: v_4848,
      camRot: v_4849,
      camFov: 50,
      ped: v_4850,
      pedScenario: ""
    };
    var v_4852 = {
      x: -3800.55,
      y: -1298.72,
      z: 201.5
    };
    var v_4853 = {
      x: -1.2,
      y: 0,
      z: 360
    };
    var v_4854 = {
      x: -3799.7,
      y: -1296.35,
      z: 199.99,
      h: 106.65
    };
    var v_4855 = {
      camCoords: v_4852,
      camRot: v_4853,
      camFov: 50,
      ped: v_4854,
      pedScenario: "WORLD_HUMAN_SMOKING_POT"
    };
    var v_4856 = {
      x: -3800.65,
      y: -1298.72,
      z: 201.5
    };
    var v_4857 = {
      x: -1.2,
      y: 0,
      z: 345
    };
    var v_4858 = {
      x: -3800.59,
      y: -1295.75,
      z: 199.99,
      h: 146.75
    };
    var v_4859 = {
      camCoords: v_4856,
      camRot: v_4857,
      camFov: 50,
      ped: v_4858,
      pedScenario: "WORLD_HUMAN_LEANING"
    };
    var v_4492 = [v_4835, v_4839, v_4843, v_4847, v_4851, v_4855, v_4859];
    var v_4673 = v_4211.cache(function () {
      var v_4860 = v_4800(function (v_4861, v_4862) {
        var v_4863;
        return v_4811(this, function (v_4864) {
          switch (v_4864.label) {
            case 0:
              return [4, v_3189.execute("np-clothing:fetchClothingData", v_4862)];
            case 1:
              v_4863 = v_4864.sent();
              if (!v_4863) {
                return [2, [false, null]];
              }
              return [2, [true, v_4863]];
          }
        });
      });
      return function (v_4865, v_4866) {
        return v_4860.apply(this, arguments);
      };
    }(), {
      timeToLive: 300000
    });
    var v_4867 = [];
    var v_4868 = [];
    var v_4869 = function () {
      var v_4870 = v_4800(function () {
        var v_4871;
        var v_4872;
        var v_4873;
        var v_4874;
        var v_4875;
        var v_4876;
        var v_4877;
        var v_4878;
        var v_4879;
        return v_4811(this, function (v_4880) {
          switch (v_4880.label) {
            case 0:
              v_4871 = function (v_4881) {
                var v_4882;
                var v_4883;
                var v_4884;
                var v_4885;
                var v_4886;
                var v_4887;
                var v_4888;
                var v_4889;
                var v_4890;
                var v_4891;
                return v_4811(this, function (v_4892) {
                  switch (v_4892.label) {
                    case 0:
                      v_4882 = v_4873[v_4881];
                      if (!v_4882) {
                        return [2, "continue"];
                      }
                      v_4883 = v_4875.find(function (v_4893) {
                        return v_4893.characterId === v_4882.id;
                      });
                      if (!v_4883) {
                        return [2, "continue"];
                      }
                      v_4884 = v_4883.clothing.model;
                      if (!IsModelValid(v_4884)) {
                        return [2, "continue"];
                      }
                      return [4, v_3759.loadModel(v_4884)];
                    case 1:
                      v_4892.sent();
                      v_4892.label = 2;
                    case 2:
                      v_4892.trys.push([2, 9,, 10]);
                      var v_4894 = {
                        x: -3800,
                        y: -1300,
                        z: 180.99,
                        h: 0
                      };
                      var v_4895 = {
                        ped: v_4894,
                        pedScenario: ""
                      };
                      v_4885 = v_4492[v_4881] ?? v_4895;
                      v_4886 = CreatePed(3, v_4884, v_4885.ped.x, v_4885.ped.y, v_4885.ped.z, v_4885.ped.h, false, false);
                      if (!v_4886) {
                        return [2, "continue"];
                      }
                      v_4887 = v_4883.clothing;
                      v_4888 = v_4887.model === GetHashKey("mp_m_freemode_01") || v_4887.model === GetHashKey("mp_f_freemode_01");
                      if (!v_4888) {
                        return [3, 4];
                      }
                      return [4, v_3023.Sync.clothing.LoadPedDefaults(v_4886, v_4887.customHeadModel)];
                    case 3:
                      v_4892.sent();
                      v_4892.label = 4;
                    case 4:
                      return [4, v_3023.Sync.clothing.ApplyPedClothing(v_4886, v_4887.drawables, v_4887.props, v_4887.hairColor, true)];
                    case 5:
                      v_4892.sent();
                      if (!v_4888) {
                        return [3, 8];
                      }
                      v_4889 = v_4883.pedData;
                      return [4, v_3023.Sync.clothing.ApplyPedData(v_4886, v_4889.headblend, v_4889.features, v_4889.overlays, v_4889.eyeColor, v_4887.customHeadModel)];
                    case 6:
                      v_4892.sent();
                      v_4890 = v_4883.decorations;
                      return [4, v_3023.Sync.clothing.ApplyDecorations(v_4886, v_4890)];
                    case 7:
                      v_4892.sent();
                      v_4892.label = 8;
                    case 8:
                      FreezeEntityPosition(v_4886, true);
                      SetEntityInvincible(v_4886, true);
                      SetBlockingOfNonTemporaryEvents(v_4886, true);
                      SetEntityCoords(v_4886, v_4885.ped.x, v_4885.ped.y, v_4885.ped.z, false, false, false, false);
                      if (v_4885.pedScenario) {
                        TaskStartScenarioInPlace(v_4886, v_4885.pedScenario, 0, false);
                      }
                      v_4867.push(v_4886);
                      v_4878.push(new Promise(function () {
                        var v_4896 = v_4800(function (v_4897) {
                          var v_4898;
                          var v_4899;
                          return v_4811(this, function (v_4900) {
                            switch (v_4900.label) {
                              case 0:
                                return [4, v_4211.waitForCondition(function () {
                                  return HasPedHeadBlendFinished(v_4886);
                                }, 1000)];
                              case 1:
                                v_4900.sent();
                                v_4898 = RegisterPedheadshot_3(v_4886);
                                if (!IsPedheadshotValid(v_4898)) {
                                  v_4897();
                                }
                                return [4, v_4211.waitForCondition(function () {
                                  return IsPedheadshotReady(v_4898) && IsPedheadshotValid(v_4898);
                                }, 1000)];
                              case 2:
                                v_4900.sent();
                                v_4899 = GetPedheadshotTxdString(v_4898);
                                return [4, v_3759.loadTexture(v_4899)];
                              case 3:
                                v_4900.sent();
                                v_4868.push(v_4898);
                                v_4877[v_4882.id.toString()] = v_4899;
                                v_4897();
                                return [2];
                            }
                          });
                        });
                        return function (v_4901) {
                          return v_4896.apply(this, arguments);
                        };
                      }()));
                      return [3, 10];
                    case 9:
                      v_4891 = v_4892.sent();
                      console.error(v_4891);
                      return [3, 10];
                    case 10:
                      return [2];
                  }
                });
              };
              v_4902();
              return [4, v_4491.get()];
            case 1:
              v_4873 = v_4880.sent();
              return [4, v_4658.get()];
            case 2:
              v_4874 = v_4880.sent();
              return [4, v_4673.get((v_4872 = v_4873) === null || v_4872 === undefined ? undefined : v_4872.map(function (v_4903) {
                return v_4903.id;
              }))];
            case 3:
              v_4875 = v_4880.sent();
              if (!v_4873 || !v_4875) {
                return [2];
              }
              return [4, v_4782()];
            case 4:
              v_4876 = v_4880.sent();
              v_4877 = {};
              v_4878 = [];
              v_4873.sort(function (v_4904, v_4905) {
                var v_4906 = Number(v_4874?.[v_4904.id] ?? 1);
                var v_4907 = Number(v_4874?.[v_4905.id] ?? 1);
                return v_4906 - v_4907;
              });
              v_4879 = 0;
              v_4880.label = 5;
            case 5:
              if (!(v_4879 < Math.min(v_4876, 7))) {
                return [3, 8];
              }
              return [5, v_4826(v_4871(v_4879))];
            case 6:
              v_4880.sent();
              v_4880.label = 7;
            case 7:
              v_4879++;
              return [3, 5];
            case 8:
              setImmediate(v_4800(function () {
                return v_4811(this, function (v_4908) {
                  switch (v_4908.label) {
                    case 0:
                      return [4, Promise.all(v_4878)];
                    case 1:
                      v_4908.sent();
                      var v_4909 = {
                        headshots: v_4877
                      };
                      SendNUIMessage(v_4909);
                      return [2];
                  }
                });
              }));
              return [2];
          }
        });
      });
      return function v_4910() {
        return v_4870.apply(this, arguments);
      };
    }();
    function v_4902() {
      var v_4911 = true;
      var v_4912 = false;
      var v_4913 = undefined;
      try {
        for (var v_4914 = v_4867[Symbol.iterator](), v_4915; !(v_4911 = (v_4915 = v_4914.next()).done); v_4911 = true) {
          var v_4916 = v_4915.value;
          DeletePed(v_4916);
        }
      } catch (v_4917) {
        v_4912 = true;
        v_4913 = v_4917;
      } finally {
        try {
          if (!v_4911 && v_4914.return != null) {
            v_4914.return();
          }
        } finally {
          if (v_4912) {
            throw v_4913;
          }
        }
      }
      v_4867 = [];
      var v_4918 = true;
      var v_4919 = false;
      var v_4920 = undefined;
      try {
        for (var v_4921 = v_4868[Symbol.iterator](), v_4922; !(v_4918 = (v_4922 = v_4921.next()).done); v_4918 = true) {
          var v_4923 = v_4922.value;
          UnregisterPedheadshot(v_4923);
        }
      } catch (v_4924) {
        v_4919 = true;
        v_4920 = v_4924;
      } finally {
        try {
          if (!v_4918 && v_4921.return != null) {
            v_4921.return();
          }
        } finally {
          if (v_4919) {
            throw v_4920;
          }
        }
      }
      v_4868 = [];
    }
    on("onResourceStop", function (v_4925) {
      if (v_4925 !== GetCurrentResourceName()) {
        return;
      }
      v_4902();
    });
    ;
    function v_4926(v_4927, v_4928, v_4929, v_4930, v_4931, v_4932, v_4933) {
      try {
        var v_4934 = v_4927[v_4932](v_4933);
        var v_4935 = v_4934.value;
      } catch (v_4936) {
        v_4929(v_4936);
        return;
      }
      if (v_4934.done) {
        v_4928(v_4935);
      } else {
        Promise.resolve(v_4935).then(v_4930, v_4931);
      }
    }
    function v_4937(v_4938) {
      return function () {
        var v_4939 = this;
        var v_4940 = arguments;
        return new Promise(function (v_4941, v_4942) {
          var v_4943 = v_4938.apply(v_4939, v_4940);
          function v_4944(v_4945) {
            v_4926(v_4943, v_4941, v_4942, v_4944, v_4946, "next", v_4945);
          }
          function v_4946(v_4947) {
            v_4926(v_4943, v_4941, v_4942, v_4944, v_4946, "throw", v_4947);
          }
          v_4944(undefined);
        });
      };
    }
    function v_4948(v_4949, v_4950) {
      var v_4951;
      var v_4952;
      var v_4953;
      var v_4954;
      var v_4955 = {
        label: 0,
        sent: function () {
          if (v_4953[0] & 1) {
            throw v_4953[1];
          }
          return v_4953[1];
        },
        trys: [],
        ops: []
      };
      v_4954 = {
        next: v_4956(0),
        throw: v_4956(1),
        return: v_4956(2)
      };
      if (typeof Symbol === "function") {
        v_4954[Symbol.iterator] = function () {
          return this;
        };
      }
      return v_4954;
      function v_4956(v_4957) {
        return function (v_4958) {
          return v_4959([v_4957, v_4958]);
        };
      }
      function v_4959(v_4960) {
        if (v_4951) {
          throw new TypeError("Generator is already executing.");
        }
        while (v_4955) {
          try {
            v_4951 = 1;
            if (v_4952 && (v_4953 = v_4960[0] & 2 ? v_4952.return : v_4960[0] ? v_4952.throw || ((v_4953 = v_4952.return) && v_4953.call(v_4952), 0) : v_4952.next) && !(v_4953 = v_4953.call(v_4952, v_4960[1])).done) {
              return v_4953;
            }
            v_4952 = 0;
            if (v_4953) {
              v_4960 = [v_4960[0] & 2, v_4953.value];
            }
            switch (v_4960[0]) {
              case 0:
              case 1:
                v_4953 = v_4960;
                break;
              case 4:
                v_4955.label++;
                return {
                  value: v_4960[1],
                  done: false
                };
              case 5:
                v_4955.label++;
                v_4952 = v_4960[1];
                v_4960 = [0];
                continue;
              case 7:
                v_4960 = v_4955.ops.pop();
                v_4955.trys.pop();
                continue;
              default:
                if (!(v_4953 = v_4955.trys, v_4953 = v_4953.length > 0 && v_4953[v_4953.length - 1]) && (v_4960[0] === 6 || v_4960[0] === 2)) {
                  v_4955 = 0;
                  continue;
                }
                if (v_4960[0] === 3 && (!v_4953 || v_4960[1] > v_4953[0] && v_4960[1] < v_4953[3])) {
                  v_4955.label = v_4960[1];
                  break;
                }
                if (v_4960[0] === 6 && v_4955.label < v_4953[1]) {
                  v_4955.label = v_4953[1];
                  v_4953 = v_4960;
                  break;
                }
                if (v_4953 && v_4955.label < v_4953[2]) {
                  v_4955.label = v_4953[2];
                  v_4955.ops.push(v_4960);
                  break;
                }
                if (v_4953[2]) {
                  v_4955.ops.pop();
                }
                v_4955.trys.pop();
                continue;
            }
            v_4960 = v_4950.call(v_4949, v_4955);
          } catch (v_4961) {
            v_4960 = [6, v_4961];
            v_4952 = 0;
          } finally {
            v_4951 = v_4953 = 0;
          }
        }
        if (v_4960[0] & 5) {
          throw v_4960[1];
        }
        var v_4962 = {
          value: v_4960[0] ? v_4960[1] : undefined,
          done: true
        };
        return v_4962;
      }
    }
    var _spawnSequenceRan = false;
    function _runSpawnSequence() {
      if (_spawnSequenceRan) {
        return;
      }
      _spawnSequenceRan = true;
      console.log("[SPAWN] Initializing spawn sequence...");
      try {
        ShutdownLoadingScreenNui();
        ShutdownLoadingScreen();
      } catch (e) {}
      async function _fn() {
        try {
          if (globalThis.exports && globalThis.exports.config && globalThis.exports.config.IsConfigReady) {
            await v_4211.waitForCondition(function () {
              try {
                return !!globalThis.exports.config.IsConfigReady();
              } catch (e) {
                return true;
              }
            }, 5000);
          }
        } catch (e) {}
        try {
          v_4491.reset();
        } catch (e) {}
        try {
          if (typeof v_4673 !== "undefined" && v_4673.reset) {
            v_4673.reset();
          }
        } catch (e) {}
        console.log("[SPAWN] Step 1: Placing player entity...");
        try {
          await v_4777();
        } catch (e) {
          console.error("[SPAWN] Step 1 error:", e);
        }
        console.log("[SPAWN] Step 2: Initializing camera...");
        try {
          await v_4481();
        } catch (e) {
          console.error("[SPAWN] Step 2 error:", e);
        }
        console.log("[SPAWN] Step 4: Loading screen shutdown & Character UI broadcast...");
        try {
          ShutdownLoadingScreenNui();
          ShutdownLoadingScreen();
        } catch (e) {}
        try {
          await v_4665();
        } catch (e) {
          console.error("[SPAWN] Step 4 error:", e);
        }
        console.log("[SPAWN] Step 3: Ped preview (running in background)...");
        try {
          v_4869();
        } catch (e) {
          console.error("[SPAWN] Step 3 error:", e);
        }
        TransitionFromBlurred(500);
        DoScreenFadeIn(500);
        SetNuiFocus(true, true);
        SetNuiFocusKeepInput(false);
        console.log("[SPAWN] Spawn sequence completed successfully. Mouse focus enabled.");
      }
      return _fn();
    }
    v_3115.on("core:spawnInitialized", _runSpawnSequence);
    on("core:spawnInitialized", _runSpawnSequence);
    onNet("core:spawnInitialized", _runSpawnSequence);
    on("np-base:spawnInitialized", _runSpawnSequence);
    onNet("np-base:spawnInitialized", _runSpawnSequence);
    on("np-base:playerSessionStarted", _runSpawnSequence);
    onNet("np-base:playerSessionStarted", _runSpawnSequence);
    globalThis.exports("InitializeSpawn", _runSpawnSequence);
    on("spawn:passedSpawnLoadedState", v_4937(function () {
      return v_4948(this, function (v_4963) {
        v_300(true);
        return [2];
      });
    }));
    onNet("apartments:Logout", v_4937(function () {
      var v_4964;
      return v_4948(this, function (v_4965) {
        switch (v_4965.label) {
          case 0:
            TransitionToBlurred(500);
            DoScreenFadeOut(500);
            v_3115.emitNet("np-apartment:cleanupApartment");
            emitNet("spawn:saveLocation");
            return [4, v_2744.wait(500)];
          case 1:
            v_4965.sent();
            emitNet("jobssystem:jobs", "unemployed");
            emit("inhotel", false);
            v_4964 = v_3023.Sync.isPed.isPed("cid");
            emitNet("jobmanager:onCharSwap", v_4964);
            return [4, v_2744.wait(500)];
          case 2:
            v_4965.sent();
            emit("np-base:clearStates");
            v_3115.emit("np-jail:stopJail");
            v_3023.Sync.hud.sendAppEvent({
              display: false
            });
            v_3023.Sync.core.InitializeSpawn();
            return [2];
        }
      });
    }));
    ;
    function v_4966(v_4967, v_4968, v_4969, v_4970, v_4971, v_4972, v_4973) {
      try {
        var v_4974 = v_4967[v_4972](v_4973);
        var v_4975 = v_4974.value;
      } catch (v_4976) {
        v_4969(v_4976);
        return;
      }
      if (v_4974.done) {
        v_4968(v_4975);
      } else {
        Promise.resolve(v_4975).then(v_4970, v_4971);
      }
    }
    function v_4977(v_4978) {
      return function () {
        var v_4979 = this;
        var v_4980 = arguments;
        return new Promise(function (v_4981, v_4982) {
          var v_4983 = v_4978.apply(v_4979, v_4980);
          function v_4984(v_4985) {
            v_4966(v_4983, v_4981, v_4982, v_4984, v_4986, "next", v_4985);
          }
          function v_4986(v_4987) {
            v_4966(v_4983, v_4981, v_4982, v_4984, v_4986, "throw", v_4987);
          }
          v_4984(undefined);
        });
      };
    }
    function v_4988(v_4989, v_4990) {
      var v_4991;
      var v_4992;
      var v_4993;
      var v_4994;
      var v_4995 = {
        label: 0,
        sent: function () {
          if (v_4993[0] & 1) {
            throw v_4993[1];
          }
          return v_4993[1];
        },
        trys: [],
        ops: []
      };
      v_4994 = {
        next: v_4996(0),
        throw: v_4996(1),
        return: v_4996(2)
      };
      if (typeof Symbol === "function") {
        v_4994[Symbol.iterator] = function () {
          return this;
        };
      }
      return v_4994;
      function v_4996(v_4997) {
        return function (v_4998) {
          return v_4999([v_4997, v_4998]);
        };
      }
      function v_4999(v_5000) {
        if (v_4991) {
          throw new TypeError("Generator is already executing.");
        }
        while (v_4995) {
          try {
            v_4991 = 1;
            if (v_4992 && (v_4993 = v_5000[0] & 2 ? v_4992.return : v_5000[0] ? v_4992.throw || ((v_4993 = v_4992.return) && v_4993.call(v_4992), 0) : v_4992.next) && !(v_4993 = v_4993.call(v_4992, v_5000[1])).done) {
              return v_4993;
            }
            v_4992 = 0;
            if (v_4993) {
              v_5000 = [v_5000[0] & 2, v_4993.value];
            }
            switch (v_5000[0]) {
              case 0:
              case 1:
                v_4993 = v_5000;
                break;
              case 4:
                v_4995.label++;
                return {
                  value: v_5000[1],
                  done: false
                };
              case 5:
                v_4995.label++;
                v_4992 = v_5000[1];
                v_5000 = [0];
                continue;
              case 7:
                v_5000 = v_4995.ops.pop();
                v_4995.trys.pop();
                continue;
              default:
                if (!(v_4993 = v_4995.trys, v_4993 = v_4993.length > 0 && v_4993[v_4993.length - 1]) && (v_5000[0] === 6 || v_5000[0] === 2)) {
                  v_4995 = 0;
                  continue;
                }
                if (v_5000[0] === 3 && (!v_4993 || v_5000[1] > v_4993[0] && v_5000[1] < v_4993[3])) {
                  v_4995.label = v_5000[1];
                  break;
                }
                if (v_5000[0] === 6 && v_4995.label < v_4993[1]) {
                  v_4995.label = v_4993[1];
                  v_4993 = v_5000;
                  break;
                }
                if (v_4993 && v_4995.label < v_4993[2]) {
                  v_4995.label = v_4993[2];
                  v_4995.ops.push(v_5000);
                  break;
                }
                if (v_4993[2]) {
                  v_4995.ops.pop();
                }
                v_4995.trys.pop();
                continue;
            }
            v_5000 = v_4990.call(v_4989, v_4995);
          } catch (v_5001) {
            v_5000 = [6, v_5001];
            v_4992 = 0;
          } finally {
            v_4991 = v_4993 = 0;
          }
        }
        if (v_5000[0] & 5) {
          throw v_5000[1];
        }
        var v_5002 = {
          value: v_5000[0] ? v_5000[1] : undefined,
          done: true
        };
        return v_5002;
      }
    }
    var v_5003 = new v_4017({
      codename: "spawn",
      version: "1.0.0"
    });
    var v_5004 = {
      x: -3806.75,
      y: -1300,
      z: 202
    };
    var v_299 = v_5004;
    var v_5005 = {
      x: -3806.75,
      y: -1300,
      z: 202
    };
    var v_5006 = {
      x: -1.2,
      y: 0,
      z: -80.62
    };
    var v_5007 = {
      x: -3808.5,
      y: -1298.6,
      z: 201.9,
      h: 39.65
    };
    var v_5008 = {
      camCoords: v_5005,
      camRot: v_5006,
      camFov: 50,
      ped: v_5007
    };
    var v_298 = v_5008;
    var v_5009 = false;
    var v_5010 = true;
    on("onClientResourceStart", function () {
      var v_5011 = v_4977(function (v_5012) {
        return v_4988(this, function (v_5013) {
          switch (v_5013.label) {
            case 0:
              if (v_5012 !== GetCurrentResourceName()) {
                return [2];
              }
              return [4, v_4652()];
            case 1:
              v_5013.sent();
              v_3855.addBoxZone("1", "spawnZone", v_299, 30, 30, {
                heading: 0,
                minZ: v_299.z - 10,
                maxZ: v_299.z + 10
              });
              v_3855.onEnter("spawnZone", function () {
                v_5009 = true;
                emit("inSpawn", true);
                var v_5014 = setTick(function () {
                  if (!v_5009 && v_5010) {
                    clearTick(v_5014);
                    return;
                  }
                  DisableAllControlActions(0);
                  DisableAllControlActions(1);
                  DisableAllControlActions(2);
                });
              });
              v_3855.onExit("spawnZone", function () {
                v_5009 = false;
                emit("inSpawn", false);
                v_4494();
              });
              return [2];
          }
        });
      });
      return function (v_5015) {
        return v_5011.apply(this, arguments);
      };
    }());
    var v_300 = function () {
      var v_5016 = v_4977(function (v_5017) {
        return v_4988(this, function (v_5018) {
          v_5010 = v_5017;
          return [2];
        });
      });
      return function v_5019(v_5020) {
        return v_5016.apply(this, arguments);
      };
    }();
  })();
})();

// Direct unblockable callback for character selection
RegisterNuiCallbackType("selectCharacterDirect");
on("__cfx_nui:selectCharacterDirect", function (data, cb) {
  var cid = data && (data.charId || data.cid) || 1;
  console.log("[SPAWN-DIRECT] Character selected directly for CID:", cid);
  if (cb) {
    cb({
      ok: true
    });
  }
  if (globalThis.ExecuteSpawnCharacter) {
    globalThis.ExecuteSpawnCharacter(cid, false);
  }
});
RegisterNuiCallbackType("newCharacterDirect");
on("__cfx_nui:newCharacterDirect", function (data, cb) {
  if (cb) {
    cb({
      ok: true
    });
  }
  console.log("[SPAWN-DIRECT] Character create directly requested:", JSON.stringify(data));
  try {
    TriggerServerEvent("np-base:createCharacter", 1, data);
  } catch (e) {}
  setTimeout(function () {
    if (globalThis.ExecuteSpawnCharacter) {
      globalThis.ExecuteSpawnCharacter(1, true, data);
    }
  }, 1000);
});

// Server event listener for character creation
onNet("np-base:characterCreated", function (newCid) {
  console.log("[SPAWN] Character successfully created via server event with CID:", newCid);
  if (globalThis.ExecuteSpawnCharacter) {
    globalThis.ExecuteSpawnCharacter(newCid || 1, true);
  }
});
