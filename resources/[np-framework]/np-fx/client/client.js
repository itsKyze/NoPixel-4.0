(() => {
  var varData_1 = {
    739: function(param_1, param_2, param_3) {
      var varData_2;
      (function(param_1_1, param_2_1, param_3_1) {
        if (true) {
          varData_2 = function() {
            return param_3_1(param_1_1);
          }.call(param_2, param_3, param_2, param_1);
          if (varData_2 !== void 0) {
            param_1.exports = varData_2;
          }
        } else {
        }
      })(this, "UUID", function() {
        function handleAction_1(param_1_1, param_2_1, param_3_1, param_4, param_5, param_6) {
          function handleAction_2(param_1_2, param_2_2) {
            var varData_3 = param_1_2.toString(16);
            if (varData_3.length < 2) {
              varData_3 = "0" + varData_3;
            }
            if (param_2_2) {
              varData_3 = varData_3.toUpperCase();
            }
            return varData_3;
          }
          for (var loopIdx = param_2_1; loopIdx <= param_3_1; loopIdx++) {
            param_5[param_6++] = handleAction_2(param_1_1[loopIdx], param_4);
          }
          return param_5;
        }
        function handleAction_3(param_1_1, param_2_1, param_3_1, param_4, param_5) {
          for (var loopIdx = param_2_1; loopIdx <= param_3_1; loopIdx += 2) {
            param_4[param_5++] = parseInt(param_1_1.substr(loopIdx, 2), 16);
          }
        }
        var z85Alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("");
        var z85DecoderTable = [0, 68, 0, 84, 83, 82, 72, 0, 75, 76, 70, 65, 0, 63, 62, 69, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 64, 0, 73, 66, 74, 71, 81, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 77, 0, 78, 67, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 79, 0, 80, 0, 0];
        function z85Encode(inputBytes, inputLength) {
          if (inputLength % 4 !== 0) {
            throw new Error("z85_encode: invalid input length (multiple of 4 expected)");
          }
          var varData_4 = "";
          var varData_5 = 0;
          var varData_6 = 0;
          while (varData_5 < inputLength) {
            varData_6 = varData_6 * 256 + inputBytes[varData_5++];
            if (varData_5 % 4 === 0) {
              var varData_7 = 52200625;
              while (varData_7 >= 1) {
                var varData_8 = Math.floor(varData_6 / varData_7) % 85;
                varData_4 += z85Alphabet[varData_8];
                varData_7 /= 85;
              }
              varData_6 = 0;
            }
          }
          return varData_4;
        }
        function z85Decode(encodedString, encodedString_1) {
          var varData_9 = encodedString.length;
          if (varData_9 % 5 !== 0) {
            throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
          }
          if (typeof encodedString_1 === "undefined") {
            encodedString_1 = new Array(varData_9 * 4 / 5);
          }
          var varData_10 = 0;
          var varData_11 = 0;
          var varData_12 = 0;
          while (varData_10 < varData_9) {
            var varData_13 = encodedString.charCodeAt(varData_10++) - 32;
            if (varData_13 < 0 || varData_13 >= z85DecoderTable.length) {
              break;
            }
            varData_12 = varData_12 * 85 + z85DecoderTable[varData_13];
            if (varData_10 % 5 === 0) {
              var varData_14 = 16777216;
              while (varData_14 >= 1) {
                encodedString_1[varData_11++] = Math.trunc(varData_12 / varData_14 % 256);
                varData_14 /= 256;
              }
              varData_12 = 0;
            }
          }
          return encodedString_1;
        }
        function handleAction_4(param_1_1, param_2_1) {
          var varData_15 = {
            ibits: 8,
            obits: 8,
            obigendian: true
          };
          for (var varData_16 in param_2_1) {
            if (typeof varData_15[varData_16] !== "undefined") {
              varData_15[varData_16] = param_2_1[varData_16];
            }
          }
          var varData_17 = [];
          var varData_18 = 0;
          var varData_19;
          var varData_20;
          var varData_21 = 0;
          var varData_22;
          var varData_23 = 0;
          var varData_24 = param_1_1.length;
          while (true) {
            if (varData_21 === 0) {
              varData_20 = param_1_1.charCodeAt(varData_18++);
            }
            varData_19 = varData_20 >> varData_15.ibits - (varData_21 + 8) & 255;
            varData_21 = (varData_21 + 8) % varData_15.ibits;
            if (varData_15.obigendian) {
              if (varData_23 === 0) {
                varData_22 = varData_19 << varData_15.obits - 8;
              } else {
                varData_22 |= varData_19 << varData_15.obits - 8 - varData_23;
              }
            } else if (varData_23 === 0) {
              varData_22 = varData_19;
            } else {
              varData_22 |= varData_19 << varData_23;
            }
            varData_23 = (varData_23 + 8) % varData_15.obits;
            if (varData_23 === 0) {
              varData_17.push(varData_22);
              if (varData_18 >= varData_24) {
                break;
              }
            }
          }
          return varData_17;
        }
        function handleAction_5(param_1_1, param_2_1) {
          var varData_25 = {
            ibits: 32,
            ibigendian: true
          };
          for (var varData_26 in param_2_1) {
            if (typeof varData_25[varData_26] !== "undefined") {
              varData_25[varData_26] = param_2_1[varData_26];
            }
          }
          var varData_27 = "";
          var varData_28 = 4294967295;
          if (varData_25.ibits < 32) {
            varData_28 = (1 << varData_25.ibits) - 1;
          }
          var varData_29 = param_1_1.length;
          for (var loopIdx = 0; loopIdx < varData_29; loopIdx++) {
            var varData_30 = param_1_1[loopIdx] & varData_28;
            for (var loopIdx_1 = 0; loopIdx_1 < varData_25.ibits; loopIdx_1 += 8) {
              if (varData_25.ibigendian) {
                varData_27 += String.fromCharCode(varData_30 >> varData_25.ibits - 8 - loopIdx_1 & 255);
              } else {
                varData_27 += String.fromCharCode(varData_30 >> loopIdx_1 & 255);
              }
            }
          }
          return varData_27;
        }
        var varData_31 = 8;
        var varData_32 = 8;
        var varData_33 = 256;
        function handleAction_6(param_1_1, param_2_1, param_3_1, param_4, param_5, param_6, param_7, param_8) {
          return [param_8, param_7, param_6, param_5, param_4, param_3_1, param_2_1, param_1_1];
        }
        function handleAction_7() {
          return handleAction_6(0, 0, 0, 0, 0, 0, 0, 0);
        }
        function handleAction_8(param_1_1) {
          return param_1_1.slice(0);
        }
        function handleAction_9(param_1_1) {
          var varData_34 = handleAction_7();
          for (var loopIdx = 0; loopIdx < varData_31; loopIdx++) {
            varData_34[loopIdx] = Math.floor(param_1_1 % varData_33);
            param_1_1 /= varData_33;
          }
          return varData_34;
        }
        function handleAction_10(param_1_1) {
          var varData_35 = 0;
          for (var loopIdx = varData_31 - 1; loopIdx >= 0; loopIdx--) {
            varData_35 *= varData_33;
            varData_35 += param_1_1[loopIdx];
          }
          return Math.floor(varData_35);
        }
        function handleAction_11(param_1_1, param_2_1) {
          var varData_36 = 0;
          for (var loopIdx = 0; loopIdx < varData_31; loopIdx++) {
            varData_36 += param_1_1[loopIdx] + param_2_1[loopIdx];
            param_1_1[loopIdx] = Math.floor(varData_36 % varData_33);
            varData_36 = Math.floor(varData_36 / varData_33);
          }
          return varData_36;
        }
        function handleAction_12(param_1_1, param_2_1) {
          var varData_37 = 0;
          for (var loopIdx = 0; loopIdx < varData_31; loopIdx++) {
            varData_37 += param_1_1[loopIdx] * param_2_1;
            param_1_1[loopIdx] = Math.floor(varData_37 % varData_33);
            varData_37 = Math.floor(varData_37 / varData_33);
          }
          return varData_37;
        }
        function handleAction_13(param_1_1, param_2_1) {
          var varData_38;
          var varData_39;
          var varData_40 = new Array(varData_31 + varData_31);
          for (varData_38 = 0; varData_38 < varData_31 + varData_31; varData_38++) {
            varData_40[varData_38] = 0;
          }
          var varData_41;
          for (varData_38 = 0; varData_38 < varData_31; varData_38++) {
            varData_41 = 0;
            for (varData_39 = 0; varData_39 < varData_31; varData_39++) {
              varData_41 += param_1_1[varData_38] * param_2_1[varData_39] + varData_40[varData_38 + varData_39];
              varData_40[varData_38 + varData_39] = varData_41 % varData_33;
              varData_41 /= varData_33;
            }
            for (; varData_39 < varData_31 + varData_31 - varData_38; varData_39++) {
              varData_41 += varData_40[varData_38 + varData_39];
              varData_40[varData_38 + varData_39] = varData_41 % varData_33;
              varData_41 /= varData_33;
            }
          }
          for (varData_38 = 0; varData_38 < varData_31; varData_38++) {
            param_1_1[varData_38] = varData_40[varData_38];
          }
          return varData_40.slice(varData_31, varData_31);
        }
        function handleAction_14(param_1_1, param_2_1) {
          for (var loopIdx = 0; loopIdx < varData_31; loopIdx++) {
            param_1_1[loopIdx] &= param_2_1[loopIdx];
          }
          return param_1_1;
        }
        function handleAction_15(param_1_1, param_2_1) {
          for (var loopIdx = 0; loopIdx < varData_31; loopIdx++) {
            param_1_1[loopIdx] |= param_2_1[loopIdx];
          }
          return param_1_1;
        }
        function handleAction_16(param_1_1, param_2_1) {
          var varData_42 = handleAction_7();
          if (param_2_1 % varData_32 !== 0) {
            throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
          }
          var varData_43 = Math.floor(param_2_1 / varData_32);
          for (var loopIdx = 0; loopIdx < varData_43; loopIdx++) {
            for (var loopIdx_1 = varData_31 - 1 - 1; loopIdx_1 >= 0; loopIdx_1--) {
              varData_42[loopIdx_1 + 1] = varData_42[loopIdx_1];
            }
            varData_42[0] = param_1_1[0];
            for (loopIdx_1 = 0; loopIdx_1 < varData_31 - 1; loopIdx_1++) {
              param_1_1[loopIdx_1] = param_1_1[loopIdx_1 + 1];
            }
            param_1_1[loopIdx_1] = 0;
          }
          return handleAction_10(varData_42);
        }
        function handleAction_17(param_1_1, param_2_1) {
          if (param_2_1 > varData_31 * varData_32) {
            throw new Error("ui64_ror: invalid number of bits to shift");
          }
          var varData_44 = new Array(varData_31 + varData_31);
          var varData_45;
          for (varData_45 = 0; varData_45 < varData_31; varData_45++) {
            varData_44[varData_45 + varData_31] = param_1_1[varData_45];
            varData_44[varData_45] = 0;
          }
          var varData_46 = Math.floor(param_2_1 / varData_32);
          var varData_47 = param_2_1 % varData_32;
          for (varData_45 = varData_46; varData_45 < varData_31 + varData_31 - 1; varData_45++) {
            varData_44[varData_45 - varData_46] = (varData_44[varData_45] >>> varData_47 | varData_44[varData_45 + 1] << varData_32 - varData_47) & (1 << varData_32) - 1;
          }
          varData_44[varData_31 + varData_31 - 1 - varData_46] = varData_44[varData_31 + varData_31 - 1] >>> varData_47 & (1 << varData_32) - 1;
          for (varData_45 = varData_31 + varData_31 - 1 - varData_46 + 1; varData_45 < varData_31 + varData_31; varData_45++) {
            varData_44[varData_45] = 0;
          }
          for (varData_45 = 0; varData_45 < varData_31; varData_45++) {
            param_1_1[varData_45] = varData_44[varData_45 + varData_31];
          }
          return varData_44.slice(0, varData_31);
        }
        function handleAction_18(param_1_1, param_2_1) {
          if (param_2_1 > varData_31 * varData_32) {
            throw new Error("ui64_rol: invalid number of bits to shift");
          }
          var varData_48 = new Array(varData_31 + varData_31);
          var varData_49;
          for (varData_49 = 0; varData_49 < varData_31; varData_49++) {
            varData_48[varData_49 + varData_31] = 0;
            varData_48[varData_49] = param_1_1[varData_49];
          }
          var varData_50 = Math.floor(param_2_1 / varData_32);
          var varData_51 = param_2_1 % varData_32;
          for (varData_49 = varData_31 - 1 - varData_50; varData_49 > 0; varData_49--) {
            varData_48[varData_49 + varData_50] = (varData_48[varData_49] << varData_51 | varData_48[varData_49 - 1] >>> varData_32 - varData_51) & (1 << varData_32) - 1;
          }
          varData_48[0 + varData_50] = varData_48[0] << varData_51 & (1 << varData_32) - 1;
          for (varData_49 = 0 + varData_50 - 1; varData_49 >= 0; varData_49--) {
            varData_48[varData_49] = 0;
          }
          for (varData_49 = 0; varData_49 < varData_31; varData_49++) {
            param_1_1[varData_49] = varData_48[varData_49];
          }
          return varData_48.slice(varData_31, varData_31);
        }
        function handleAction_19(param_1_1, param_2_1) {
          for (var loopIdx = 0; loopIdx < varData_31; loopIdx++) {
            param_1_1[loopIdx] ^= param_2_1[loopIdx];
          }
        }
        function handleAction_20(param_1_1, param_2_1) {
          var varData_52 = (param_1_1 & 65535) + (param_2_1 & 65535);
          var varData_53 = (param_1_1 >> 16) + (param_2_1 >> 16) + (varData_52 >> 16);
          return varData_53 << 16 | varData_52 & 65535;
        }
        function handleAction_21(param_1_1, param_2_1) {
          return param_1_1 << param_2_1 & -1 | param_1_1 >>> 32 - param_2_1 & -1;
        }
        function handleAction_22(param_1_1, param_2_1) {
          function handleAction_23(param_1_2, param_2_2, param_3_1, param_4) {
            if (param_1_2 < 20) {
              return param_2_2 & param_3_1 | ~param_2_2 & param_4;
            }
            if (param_1_2 < 40) {
              return param_2_2 ^ param_3_1 ^ param_4;
            }
            if (param_1_2 < 60) {
              return param_2_2 & param_3_1 | param_2_2 & param_4 | param_3_1 & param_4;
            }
            return param_2_2 ^ param_3_1 ^ param_4;
          }
          function handleAction_24(param_1_2) {
            if (param_1_2 < 20) {
              return 1518500249;
            } else if (param_1_2 < 40) {
              return 1859775393;
            } else if (param_1_2 < 60) {
              return -1894007588;
            } else {
              return -899497514;
            }
          }
          param_1_1[param_2_1 >> 5] |= 128 << 24 - param_2_1 % 32;
          param_1_1[(param_2_1 + 64 >> 9 << 4) + 15] = param_2_1;
          var varData_54 = Array(80);
          var varData_55 = 1732584193;
          var varData_56 = -271733879;
          var varData_57 = -1732584194;
          var varData_58 = 271733878;
          var varData_59 = -1009589776;
          for (var loopIdx = 0; loopIdx < param_1_1.length; loopIdx += 16) {
            var varData_60 = varData_55;
            var varData_61 = varData_56;
            var varData_62 = varData_57;
            var varData_63 = varData_58;
            var varData_64 = varData_59;
            for (var loopIdx_1 = 0; loopIdx_1 < 80; loopIdx_1++) {
              if (loopIdx_1 < 16) {
                varData_54[loopIdx_1] = param_1_1[loopIdx + loopIdx_1];
              } else {
                varData_54[loopIdx_1] = handleAction_21(varData_54[loopIdx_1 - 3] ^ varData_54[loopIdx_1 - 8] ^ varData_54[loopIdx_1 - 14] ^ varData_54[loopIdx_1 - 16], 1);
              }
              var varData_65 = handleAction_20(handleAction_20(handleAction_21(varData_55, 5), handleAction_23(loopIdx_1, varData_56, varData_57, varData_58)), handleAction_20(handleAction_20(varData_59, varData_54[loopIdx_1]), handleAction_24(loopIdx_1)));
              varData_59 = varData_58;
              varData_58 = varData_57;
              varData_57 = handleAction_21(varData_56, 30);
              varData_56 = varData_55;
              varData_55 = varData_65;
            }
            varData_55 = handleAction_20(varData_55, varData_60);
            varData_56 = handleAction_20(varData_56, varData_61);
            varData_57 = handleAction_20(varData_57, varData_62);
            varData_58 = handleAction_20(varData_58, varData_63);
            varData_59 = handleAction_20(varData_59, varData_64);
          }
          return [varData_55, varData_56, varData_57, varData_58, varData_59];
        }
        function handleAction_25(param_1_1) {
          return handleAction_5(handleAction_22(handleAction_4(param_1_1, {
            ibits: 8,
            obits: 32,
            obigendian: true
          }), param_1_1.length * 8), {
            ibits: 32,
            ibigendian: true
          });
        }
        function handleAction_26(param_1_1, param_2_1) {
          function handleAction_27(param_1_2, param_2_2, param_3_1, param_4, param_5, param_6) {
            return handleAction_20(handleAction_21(handleAction_20(handleAction_20(param_2_2, param_1_2), handleAction_20(param_4, param_6)), param_5), param_3_1);
          }
          function handleAction_28(param_1_2, param_2_2, param_3_1, param_4, param_5, param_6, param_7) {
            return handleAction_27(param_2_2 & param_3_1 | ~param_2_2 & param_4, param_1_2, param_2_2, param_5, param_6, param_7);
          }
          function handleAction_29(param_1_2, param_2_2, param_3_1, param_4, param_5, param_6, param_7) {
            return handleAction_27(param_2_2 & param_4 | param_3_1 & ~param_4, param_1_2, param_2_2, param_5, param_6, param_7);
          }
          function handleAction_30(param_1_2, param_2_2, param_3_1, param_4, param_5, param_6, param_7) {
            return handleAction_27(param_2_2 ^ param_3_1 ^ param_4, param_1_2, param_2_2, param_5, param_6, param_7);
          }
          function handleAction_31(param_1_2, param_2_2, param_3_1, param_4, param_5, param_6, param_7) {
            return handleAction_27(param_3_1 ^ (param_2_2 | ~param_4), param_1_2, param_2_2, param_5, param_6, param_7);
          }
          param_1_1[param_2_1 >> 5] |= 128 << param_2_1 % 32;
          param_1_1[(param_2_1 + 64 >>> 9 << 4) + 14] = param_2_1;
          var varData_66 = 1732584193;
          var varData_67 = -271733879;
          var varData_68 = -1732584194;
          var varData_69 = 271733878;
          for (var loopIdx = 0; loopIdx < param_1_1.length; loopIdx += 16) {
            var varData_70 = varData_66;
            var varData_71 = varData_67;
            var varData_72 = varData_68;
            var varData_73 = varData_69;
            varData_66 = handleAction_28(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 0], 7, -680876936);
            varData_69 = handleAction_28(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 1], 12, -389564586);
            varData_68 = handleAction_28(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 2], 17, 606105819);
            varData_67 = handleAction_28(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 3], 22, -1044525330);
            varData_66 = handleAction_28(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 4], 7, -176418897);
            varData_69 = handleAction_28(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 5], 12, 1200080426);
            varData_68 = handleAction_28(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 6], 17, -1473231341);
            varData_67 = handleAction_28(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 7], 22, -45705983);
            varData_66 = handleAction_28(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 8], 7, 1770035416);
            varData_69 = handleAction_28(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 9], 12, -1958414417);
            varData_68 = handleAction_28(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 10], 17, -42063);
            varData_67 = handleAction_28(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 11], 22, -1990404162);
            varData_66 = handleAction_28(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 12], 7, 1804603682);
            varData_69 = handleAction_28(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 13], 12, -40341101);
            varData_68 = handleAction_28(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 14], 17, -1502002290);
            varData_67 = handleAction_28(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 15], 22, 1236535329);
            varData_66 = handleAction_29(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 1], 5, -165796510);
            varData_69 = handleAction_29(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 6], 9, -1069501632);
            varData_68 = handleAction_29(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 11], 14, 643717713);
            varData_67 = handleAction_29(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 0], 20, -373897302);
            varData_66 = handleAction_29(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 5], 5, -701558691);
            varData_69 = handleAction_29(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 10], 9, 38016083);
            varData_68 = handleAction_29(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 15], 14, -660478335);
            varData_67 = handleAction_29(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 4], 20, -405537848);
            varData_66 = handleAction_29(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 9], 5, 568446438);
            varData_69 = handleAction_29(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 14], 9, -1019803690);
            varData_68 = handleAction_29(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 3], 14, -187363961);
            varData_67 = handleAction_29(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 8], 20, 1163531501);
            varData_66 = handleAction_29(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 13], 5, -1444681467);
            varData_69 = handleAction_29(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 2], 9, -51403784);
            varData_68 = handleAction_29(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 7], 14, 1735328473);
            varData_67 = handleAction_29(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 12], 20, -1926607734);
            varData_66 = handleAction_30(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 5], 4, -378558);
            varData_69 = handleAction_30(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 8], 11, -2022574463);
            varData_68 = handleAction_30(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 11], 16, 1839030562);
            varData_67 = handleAction_30(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 14], 23, -35309556);
            varData_66 = handleAction_30(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 1], 4, -1530992060);
            varData_69 = handleAction_30(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 4], 11, 1272893353);
            varData_68 = handleAction_30(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 7], 16, -155497632);
            varData_67 = handleAction_30(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 10], 23, -1094730640);
            varData_66 = handleAction_30(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 13], 4, 681279174);
            varData_69 = handleAction_30(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 0], 11, -358537222);
            varData_68 = handleAction_30(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 3], 16, -722521979);
            varData_67 = handleAction_30(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 6], 23, 76029189);
            varData_66 = handleAction_30(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 9], 4, -640364487);
            varData_69 = handleAction_30(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 12], 11, -421815835);
            varData_68 = handleAction_30(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 15], 16, 530742520);
            varData_67 = handleAction_30(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 2], 23, -995338651);
            varData_66 = handleAction_31(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 0], 6, -198630844);
            varData_69 = handleAction_31(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 7], 10, 1126891415);
            varData_68 = handleAction_31(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 14], 15, -1416354905);
            varData_67 = handleAction_31(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 5], 21, -57434055);
            varData_66 = handleAction_31(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 12], 6, 1700485571);
            varData_69 = handleAction_31(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 3], 10, -1894986606);
            varData_68 = handleAction_31(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 10], 15, -1051523);
            varData_67 = handleAction_31(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 1], 21, -2054922799);
            varData_66 = handleAction_31(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 8], 6, 1873313359);
            varData_69 = handleAction_31(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 15], 10, -30611744);
            varData_68 = handleAction_31(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 6], 15, -1560198380);
            varData_67 = handleAction_31(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 13], 21, 1309151649);
            varData_66 = handleAction_31(varData_66, varData_67, varData_68, varData_69, param_1_1[loopIdx + 4], 6, -145523070);
            varData_69 = handleAction_31(varData_69, varData_66, varData_67, varData_68, param_1_1[loopIdx + 11], 10, -1120210379);
            varData_68 = handleAction_31(varData_68, varData_69, varData_66, varData_67, param_1_1[loopIdx + 2], 15, 718787259);
            varData_67 = handleAction_31(varData_67, varData_68, varData_69, varData_66, param_1_1[loopIdx + 9], 21, -343485551);
            varData_66 = handleAction_20(varData_66, varData_70);
            varData_67 = handleAction_20(varData_67, varData_71);
            varData_68 = handleAction_20(varData_68, varData_72);
            varData_69 = handleAction_20(varData_69, varData_73);
          }
          return [varData_66, varData_67, varData_68, varData_69];
        }
        function handleAction_32(param_1_1) {
          return handleAction_5(handleAction_26(handleAction_4(param_1_1, {
            ibits: 8,
            obits: 32,
            obigendian: false
          }), param_1_1.length * 8), {
            ibits: 32,
            ibigendian: false
          });
        }
        function handleAction_33(param_1_1) {
          this.mul = handleAction_6(88, 81, 244, 45, 76, 149, 127, 45);
          this.inc = handleAction_6(20, 5, 123, 126, 247, 103, 129, 79);
          this.mask = handleAction_6(0, 0, 0, 0, 255, 255, 255, 255);
          this.state = handleAction_8(this.inc);
          this.next();
          handleAction_14(this.state, this.mask);
          var varData_74;
          if (param_1_1 !== void 0) {
            param_1_1 = handleAction_9(param_1_1 >>> 0);
          } else if (typeof window === "object" && typeof window.crypto === "object" && typeof window.crypto.getRandomValues === "function") {
            varData_74 = new Uint32Array(2);
            window.crypto.getRandomValues(varData_74);
            param_1_1 = handleAction_15(handleAction_9(varData_74[0] >>> 0), handleAction_17(handleAction_9(varData_74[1] >>> 0), 32));
          } else if (typeof globalThis === "object" && typeof globalThis.crypto === "object" && typeof globalThis.crypto.getRandomValues === "function") {
            varData_74 = new Uint32Array(2);
            globalThis.crypto.getRandomValues(varData_74);
            param_1_1 = handleAction_15(handleAction_9(varData_74[0] >>> 0), handleAction_17(handleAction_9(varData_74[1] >>> 0), 32));
          } else {
            param_1_1 = handleAction_9(Math.random() * 4294967295 >>> 0);
            handleAction_15(param_1_1, handleAction_17(handleAction_9((/* @__PURE__ */ new Date()).getTime()), 32));
          }
          handleAction_15(this.state, param_1_1);
          this.next();
        }
        handleAction_33.prototype.next = function() {
          var varData_75 = handleAction_8(this.state);
          handleAction_13(this.state, this.mul);
          handleAction_11(this.state, this.inc);
          var varData_76 = handleAction_8(varData_75);
          handleAction_17(varData_76, 18);
          handleAction_19(varData_76, varData_75);
          handleAction_17(varData_76, 27);
          var varData_77 = handleAction_8(varData_75);
          handleAction_17(varData_77, 59);
          handleAction_14(varData_76, this.mask);
          var varData_78 = handleAction_10(varData_77);
          var varData_79 = handleAction_8(varData_76);
          handleAction_18(varData_79, 32 - varData_78);
          handleAction_17(varData_76, varData_78);
          handleAction_19(varData_76, varData_79);
          return handleAction_10(varData_76);
        };
        handleAction_33.prototype.reseed = function(param_1_1) {
          if (typeof param_1_1 !== "string") {
            throw new Error("UUID: PCG: seed: invalid argument (string expected)");
          }
          var varData_80 = handleAction_22(handleAction_4(param_1_1, {
            ibits: 8,
            obits: 32,
            obigendian: true
          }), param_1_1.length * 8);
          for (var loopIdx = 0; loopIdx < varData_80.length; loopIdx++) {
            handleAction_19(varData_81.state, handleAction_9(varData_80[loopIdx] >>> 0));
          }
        };
        var varData_81 = new handleAction_33();
        handleAction_33.reseed = function(param_1_1) {
          varData_81.reseed(param_1_1);
        };
        function handleAction_34(param_1_1, param_2_1) {
          var varData_82 = [];
          for (var loopIdx = 0; loopIdx < param_1_1; loopIdx++) {
            varData_82[loopIdx] = varData_81.next() % param_2_1;
          }
          return varData_82;
        }
        var varData_83 = 0;
        var varData_84 = 0;
        function createUUID() {
          if (arguments.length === 1 && typeof arguments[0] === "string") {
            this.parse.apply(this, arguments);
          } else if (arguments.length >= 1 && typeof arguments[0] === "number") {
            this.make.apply(this, arguments);
          } else if (arguments.length >= 1) {
            throw new Error("UUID: constructor: invalid arguments");
          } else {
            for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
              this[loopIdx] = 0;
            }
          }
        }
        if (typeof Uint8Array !== "undefined") {
          createUUID.prototype = new Uint8Array(16);
        } else if (Buffer) {
          createUUID.prototype = Buffer.alloc(16);
        } else {
          createUUID.prototype = new Array(16);
        }
        createUUID.prototype.constructor = createUUID;
        createUUID.prototype.make = function(param_1_1) {
          var varData_85;
          var varData_86 = this;
          if (param_1_1 === 1) {
            var varData_87 = /* @__PURE__ */ new Date();
            var varData_88 = varData_87.getTime();
            if (varData_88 !== varData_83) {
              varData_84 = 0;
            } else {
              varData_84++;
            }
            varData_83 = varData_88;
            var varData_89 = handleAction_9(varData_88);
            handleAction_12(varData_89, 1e4);
            handleAction_11(varData_89, handleAction_6(1, 178, 29, 210, 19, 129, 64, 0));
            if (varData_84 > 0) {
              handleAction_11(varData_89, handleAction_9(varData_84));
            }
            var varData_90;
            varData_90 = handleAction_16(varData_89, 8);
            varData_86[3] = varData_90 & 255;
            varData_90 = handleAction_16(varData_89, 8);
            varData_86[2] = varData_90 & 255;
            varData_90 = handleAction_16(varData_89, 8);
            varData_86[1] = varData_90 & 255;
            varData_90 = handleAction_16(varData_89, 8);
            varData_86[0] = varData_90 & 255;
            varData_90 = handleAction_16(varData_89, 8);
            varData_86[5] = varData_90 & 255;
            varData_90 = handleAction_16(varData_89, 8);
            varData_86[4] = varData_90 & 255;
            varData_90 = handleAction_16(varData_89, 8);
            varData_86[7] = varData_90 & 255;
            varData_90 = handleAction_16(varData_89, 8);
            varData_86[6] = varData_90 & 15;
            var varData_91 = handleAction_34(2, 255);
            varData_86[8] = varData_91[0];
            varData_86[9] = varData_91[1];
            var varData_92 = handleAction_34(6, 255);
            varData_92[0] |= 1;
            varData_92[0] |= 2;
            for (varData_85 = 0; varData_85 < 6; varData_85++) {
              varData_86[10 + varData_85] = varData_92[varData_85];
            }
          } else if (param_1_1 === 4) {
            var varData_93 = handleAction_34(16, 255);
            for (varData_85 = 0; varData_85 < 16; varData_85++) {
              this[varData_85] = varData_93[varData_85];
            }
          } else if (param_1_1 === 3 || param_1_1 === 5) {
            var varData_94 = "";
            var varData_95 = typeof arguments[1] === "object" && arguments[1] instanceof createUUID ? arguments[1] : new createUUID().parse(arguments[1]);
            for (varData_85 = 0; varData_85 < 16; varData_85++) {
              varData_94 += String.fromCharCode(varData_95[varData_85]);
            }
            varData_94 += arguments[2];
            var varData_96 = param_1_1 === 3 ? handleAction_32(varData_94) : handleAction_25(varData_94);
            for (varData_85 = 0; varData_85 < 16; varData_85++) {
              varData_86[varData_85] = varData_96.charCodeAt(varData_85);
            }
          } else {
            throw new Error("UUID: make: invalid version");
          }
          varData_86[6] &= 15;
          varData_86[6] |= param_1_1 << 4;
          varData_86[8] &= 63;
          varData_86[8] |= 128;
          return varData_86;
        };
        createUUID.prototype.format = function(param_1_1) {
          var varData_97;
          var varData_98;
          if (param_1_1 === "z85") {
            varData_97 = z85Encode(this, 16);
          } else if (param_1_1 === "b16") {
            varData_98 = Array(32);
            handleAction_1(this, 0, 15, true, varData_98, 0);
            varData_97 = varData_98.join("");
          } else if (param_1_1 === void 0 || param_1_1 === "std") {
            varData_98 = new Array(36);
            handleAction_1(this, 0, 3, false, varData_98, 0);
            varData_98[8] = "-";
            handleAction_1(this, 4, 5, false, varData_98, 9);
            varData_98[13] = "-";
            handleAction_1(this, 6, 7, false, varData_98, 14);
            varData_98[18] = "-";
            handleAction_1(this, 8, 9, false, varData_98, 19);
            varData_98[23] = "-";
            handleAction_1(this, 10, 15, false, varData_98, 24);
            varData_97 = varData_98.join("");
          }
          return varData_97;
        };
        createUUID.prototype.toString = function(param_1_1) {
          return this.format(param_1_1);
        };
        createUUID.prototype.toJSON = function() {
          return this.format("std");
        };
        createUUID.prototype.parse = function(param_1_1, param_2_1) {
          if (typeof param_1_1 !== "string") {
            throw new Error("UUID: parse: invalid argument (type string expected)");
          }
          if (param_2_1 === "z85") {
            z85Decode(param_1_1, this);
          } else if (param_2_1 === "b16") {
            handleAction_3(param_1_1, 0, 35, this, 0);
          } else if (param_2_1 === void 0 || param_2_1 === "std") {
            var varData_99 = {
              nil: "00000000-0000-0000-0000-000000000000",
              "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
              "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
              "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
              "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
            };
            if (varData_99[param_1_1] !== void 0) {
              param_1_1 = varData_99[param_1_1];
            } else if (!param_1_1.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
              throw new Error('UUID: parse: invalid string representation (expected "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx")');
            }
            handleAction_3(param_1_1, 0, 7, this, 0);
            handleAction_3(param_1_1, 9, 12, this, 4);
            handleAction_3(param_1_1, 14, 17, this, 6);
            handleAction_3(param_1_1, 19, 22, this, 8);
            handleAction_3(param_1_1, 24, 35, this, 10);
          }
          return this;
        };
        createUUID.prototype.export = function() {
          var varData_100 = Array(16);
          for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
            varData_100[loopIdx] = this[loopIdx];
          }
          return varData_100;
        };
        createUUID.prototype.import = function(param_1_1) {
          if (typeof param_1_1 !== "object" || !(param_1_1 instanceof Array)) {
            throw new Error("UUID: import: invalid argument (type Array expected)");
          }
          if (param_1_1.length !== 16) {
            throw new Error("UUID: import: invalid argument (Array of length 16 expected)");
          }
          for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
            if (typeof param_1_1[loopIdx] !== "number") {
              throw new Error("UUID: import: invalid array element #" + loopIdx + " (type Number expected)");
            }
            if (!isFinite(param_1_1[loopIdx]) || Math.floor(param_1_1[loopIdx]) !== param_1_1[loopIdx]) {
              throw new Error("UUID: import: invalid array element #" + loopIdx + " (Number with integer value expected)");
            }
            if (!(param_1_1[loopIdx] >= 0) || !(param_1_1[loopIdx] <= 255)) {
              throw new Error("UUID: import: invalid array element #" + loopIdx + " (Number with integer value in range 0...255 expected)");
            }
            this[loopIdx] = param_1_1[loopIdx];
          }
          return this;
        };
        createUUID.prototype.compare = function(param_1_1) {
          if (typeof param_1_1 !== "object") {
            throw new Error("UUID: compare: invalid argument (type UUID expected)");
          }
          if (!(param_1_1 instanceof createUUID)) {
            throw new Error("UUID: compare: invalid argument (type UUID expected)");
          }
          for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
            if (this[loopIdx] < param_1_1[loopIdx]) {
              return -1;
            } else if (this[loopIdx] > param_1_1[loopIdx]) {
              return 1;
            }
          }
          return 0;
        };
        createUUID.prototype.equal = function(param_1_1) {
          return this.compare(param_1_1) === 0;
        };
        createUUID.prototype.fold = function(param_1_1) {
          if (typeof param_1_1 === "undefined") {
            throw new Error("UUID: fold: invalid argument (number of fold operations expected)");
          }
          if (param_1_1 < 1 || param_1_1 > 4) {
            throw new Error("UUID: fold: invalid argument (1-4 fold operations expected)");
          }
          var varData_101 = 16 / Math.pow(2, param_1_1);
          var varData_102 = new Array(varData_101);
          for (var loopIdx = 0; loopIdx < varData_101; loopIdx++) {
            var varData_103 = 0;
            for (var loopIdx_1 = 0; loopIdx + loopIdx_1 < 16; loopIdx_1 += varData_101) {
              varData_103 ^= this[loopIdx + loopIdx_1];
            }
            varData_102[loopIdx] = varData_103;
          }
          return varData_102;
        };
        createUUID.PCG = handleAction_33;
        return createUUID;
      });
    }
  };
  var varData_104 = {};
  function handleAction_35(param_1) {
    var varData_105 = varData_104[param_1];
    if (varData_105 !== void 0) {
      return varData_105.exports;
    }
    var varData_106 = varData_104[param_1] = {
      exports: {}
    };
    varData_1[param_1].call(varData_106.exports, varData_106, varData_106.exports, handleAction_35);
    return varData_106.exports;
  }
  (() => {
    handleAction_35.g = (function() {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (err) {
        if (typeof window === "object") {
          return window;
        }
      }
    })();
  })();
  var varData_107 = {};
  (() => {
    "use strict";
    ;
    function handleAction_36(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_108 = param_1[param_6](param_7);
        var varData_109 = varData_108.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_108.done) {
        param_2(varData_109);
      } else {
        Promise.resolve(varData_109).then(param_4, param_5);
      }
    }
    function handleAction_37(param_1) {
      return function() {
        var varData_110 = this;
        var varData_111 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_112 = param_1.apply(varData_110, varData_111);
          function handleAction_38(param_1_2) {
            handleAction_36(varData_112, param_1_1, param_2, handleAction_38, handleAction_39, "next", param_1_2);
          }
          function handleAction_39(param_1_2) {
            handleAction_36(varData_112, param_1_1, param_2, handleAction_38, handleAction_39, "throw", param_1_2);
          }
          handleAction_38(void 0);
        });
      };
    }
    function handleAction_40(param_1, param_2) {
      var varData_113;
      var varData_114;
      var varData_115;
      var varData_116;
      var varData_117 = {
        label: 0,
        sent: function() {
          if (varData_115[0] & 1) {
            throw varData_115[1];
          }
          return varData_115[1];
        },
        trys: [],
        ops: []
      };
      varData_116 = {
        next: handleAction_41(0),
        throw: handleAction_41(1),
        return: handleAction_41(2)
      };
      if (typeof Symbol === "function") {
        varData_116[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_116;
      function handleAction_41(param_1_1) {
        return function(param_1_2) {
          return handleAction_42([param_1_1, param_1_2]);
        };
      }
      function handleAction_42(param_1_1) {
        if (varData_113) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_117) {
          try {
            varData_113 = 1;
            if (varData_114 && (varData_115 = param_1_1[0] & 2 ? varData_114.return : param_1_1[0] ? varData_114.throw || ((varData_115 = varData_114.return) && varData_115.call(varData_114), 0) : varData_114.next) && !(varData_115 = varData_115.call(varData_114, param_1_1[1])).done) {
              return varData_115;
            }
            varData_114 = 0;
            if (varData_115) {
              param_1_1 = [param_1_1[0] & 2, varData_115.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_115 = param_1_1;
                break;
              case 4:
                varData_117.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_117.label++;
                varData_114 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_117.ops.pop();
                varData_117.trys.pop();
                continue;
              default:
                if (!(varData_115 = varData_117.trys, varData_115 = varData_115.length > 0 && varData_115[varData_115.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_117 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_115 || param_1_1[1] > varData_115[0] && param_1_1[1] < varData_115[3])) {
                  varData_117.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_117.label < varData_115[1]) {
                  varData_117.label = varData_115[1];
                  varData_115 = param_1_1;
                  break;
                }
                if (varData_115 && varData_117.label < varData_115[2]) {
                  varData_117.label = varData_115[2];
                  varData_117.ops.push(param_1_1);
                  break;
                }
                if (varData_115[2]) {
                  varData_117.ops.pop();
                }
                varData_117.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_117);
          } catch (err) {
            param_1_1 = [6, err];
            varData_114 = 0;
          } finally {
            varData_113 = varData_115 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_118 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_118;
      }
    }
    var varData_119;
    var dataMap = /* @__PURE__ */ new Map();
    var resourceName = GetCurrentResourceName();
    function handleAction_43() {
      return handleAction_44.apply(this, arguments);
    }
    function handleAction_44() {
      handleAction_44 = handleAction_37(function() {
        return handleAction_40(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              if (globalThis.exports.config.IsConfigReady()) {
                return [3, 2];
              }
              return [4, new Promise(function(param_1_1) {
                return setTimeout(param_1_1, 100);
              })];
            case 1:
              param_1.sent();
              return [3, 0];
            case 2:
              varData_119 = globalThis.exports.config.GetModuleConfig("main");
              return [2];
          }
        });
      });
      return handleAction_44.apply(this, arguments);
    }
    on("np-config:configLoaded", function(param_1, param_2) {
      if (param_1 === "main") {
        varData_119 = param_2;
      } else if (dataMap.has(param_1)) {
        dataMap.set(param_1, param_2);
      }
    });
    function handleAction_45(param_1) {
      return varData_119[param_1];
    }
    function handleAction_46(param_1, param_2) {
      if (!dataMap.has(param_1)) {
        var varData_120 = handleAction_35.g.exports.config.GetModuleConfig(param_1);
        if (varData_120 === void 0) {
          return;
        }
        dataMap.set(param_1, varData_120);
      }
      var varData_121 = dataMap.get(param_1);
      if (param_2) {
        return varData_121?.[param_2];
      } else {
        return varData_121;
      }
    }
    function handleAction_47(param_1) {
      return handleAction_46(resourceName, param_1);
    }
    ;
    function handleAction_48(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_122 = param_1[param_6](param_7);
        var varData_123 = varData_122.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_122.done) {
        param_2(varData_123);
      } else {
        Promise.resolve(varData_123).then(param_4, param_5);
      }
    }
    function handleAction_49(param_1) {
      return function() {
        var varData_124 = this;
        var varData_125 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_126 = param_1.apply(varData_124, varData_125);
          function handleAction_50(param_1_2) {
            handleAction_48(varData_126, param_1_1, param_2, handleAction_50, handleAction_51, "next", param_1_2);
          }
          function handleAction_51(param_1_2) {
            handleAction_48(varData_126, param_1_1, param_2, handleAction_50, handleAction_51, "throw", param_1_2);
          }
          handleAction_50(void 0);
        });
      };
    }
    function handleAction_52(param_1, param_2) {
      var varData_127;
      var varData_128;
      var varData_129;
      var varData_130;
      var varData_131 = {
        label: 0,
        sent: function() {
          if (varData_129[0] & 1) {
            throw varData_129[1];
          }
          return varData_129[1];
        },
        trys: [],
        ops: []
      };
      varData_130 = {
        next: handleAction_53(0),
        throw: handleAction_53(1),
        return: handleAction_53(2)
      };
      if (typeof Symbol === "function") {
        varData_130[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_130;
      function handleAction_53(param_1_1) {
        return function(param_1_2) {
          return handleAction_54([param_1_1, param_1_2]);
        };
      }
      function handleAction_54(param_1_1) {
        if (varData_127) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_131) {
          try {
            varData_127 = 1;
            if (varData_128 && (varData_129 = param_1_1[0] & 2 ? varData_128.return : param_1_1[0] ? varData_128.throw || ((varData_129 = varData_128.return) && varData_129.call(varData_128), 0) : varData_128.next) && !(varData_129 = varData_129.call(varData_128, param_1_1[1])).done) {
              return varData_129;
            }
            varData_128 = 0;
            if (varData_129) {
              param_1_1 = [param_1_1[0] & 2, varData_129.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_129 = param_1_1;
                break;
              case 4:
                varData_131.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_131.label++;
                varData_128 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_131.ops.pop();
                varData_131.trys.pop();
                continue;
              default:
                if (!(varData_129 = varData_131.trys, varData_129 = varData_129.length > 0 && varData_129[varData_129.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_131 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_129 || param_1_1[1] > varData_129[0] && param_1_1[1] < varData_129[3])) {
                  varData_131.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_131.label < varData_129[1]) {
                  varData_131.label = varData_129[1];
                  varData_129 = param_1_1;
                  break;
                }
                if (varData_129 && varData_131.label < varData_129[2]) {
                  varData_131.label = varData_129[2];
                  varData_131.ops.push(param_1_1);
                  break;
                }
                if (varData_129[2]) {
                  varData_131.ops.pop();
                }
                varData_131.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_131);
          } catch (err) {
            param_1_1 = [6, err];
            varData_128 = 0;
          } finally {
            varData_127 = varData_129 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_132 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_132;
      }
    }
    var varData_133 = null;
    function handleAction_55(param_1) {
      return handleAction_56.apply(this, arguments);
    }
    function handleAction_56() {
      handleAction_56 = handleAction_49(function(param_1) {
        return handleAction_52(this, function(param_1_1) {
          return [2, new Promise(function(param_1_2) {
            return setTimeout(function() {
              return param_1_2();
            }, param_1);
          })];
        });
      });
      return handleAction_56.apply(this, arguments);
    }
    ;
    const varData_134 = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var varData_135 = {
      randomUUID: varData_134
    };
    const varData_136 = varData_135;
    ;
    let varData_137;
    const varData_138 = new Uint8Array(16);
    function handleAction_57() {
      if (!varData_137) {
        varData_137 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!varData_137) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return varData_137(varData_138);
    }
    ;
    const varData_139 = [];
    for (let loopIdx = 0; loopIdx < 256; ++loopIdx) {
      varData_139.push((loopIdx + 256).toString(16).slice(1));
    }
    function handleAction_58(param_1, _0x2d5dc4 = 0) {
      return varData_139[param_1[_0x2d5dc4 + 0]] + varData_139[param_1[_0x2d5dc4 + 1]] + varData_139[param_1[_0x2d5dc4 + 2]] + varData_139[param_1[_0x2d5dc4 + 3]] + "-" + varData_139[param_1[_0x2d5dc4 + 4]] + varData_139[param_1[_0x2d5dc4 + 5]] + "-" + varData_139[param_1[_0x2d5dc4 + 6]] + varData_139[param_1[_0x2d5dc4 + 7]] + "-" + varData_139[param_1[_0x2d5dc4 + 8]] + varData_139[param_1[_0x2d5dc4 + 9]] + "-" + varData_139[param_1[_0x2d5dc4 + 10]] + varData_139[param_1[_0x2d5dc4 + 11]] + varData_139[param_1[_0x2d5dc4 + 12]] + varData_139[param_1[_0x2d5dc4 + 13]] + varData_139[param_1[_0x2d5dc4 + 14]] + varData_139[param_1[_0x2d5dc4 + 15]];
    }
    function createUUID(param_1, _0x161f7f = 0) {
      const varData_140 = handleAction_58(param_1, _0x161f7f);
      if (!validate(varData_140)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return varData_140;
    }
    const varData_141 = null;
    ;
    function createUUID_1(param_1, param_2, param_3) {
      if (varData_136.randomUUID && !param_2 && !param_1) {
        return varData_136.randomUUID();
      }
      param_1 = param_1 || {};
      const varData_142 = param_1.random || (param_1.rng || handleAction_57)();
      varData_142[6] = varData_142[6] & 15 | 64;
      varData_142[8] = varData_142[8] & 63 | 128;
      if (param_2) {
        param_3 = param_3 || 0;
        for (let loopIdx = 0; loopIdx < 16; ++loopIdx) {
          param_2[param_3 + loopIdx] = varData_142[loopIdx];
        }
        return param_2;
      }
      return handleAction_58(varData_142);
    }
    const varData_143 = createUUID_1;
    ;
    const varData_144 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    ;
    function handleAction_59(param_1) {
      return typeof param_1 === "string" && varData_144.test(param_1);
    }
    const varData_145 = handleAction_59;
    ;
    function createUUID_2(param_1) {
      if (!varData_145(param_1)) {
        throw TypeError("Invalid UUID");
      }
      let varData_146;
      const varData_147 = new Uint8Array(16);
      varData_147[0] = (varData_146 = parseInt(param_1.slice(0, 8), 16)) >>> 24;
      varData_147[1] = varData_146 >>> 16 & 255;
      varData_147[2] = varData_146 >>> 8 & 255;
      varData_147[3] = varData_146 & 255;
      varData_147[4] = (varData_146 = parseInt(param_1.slice(9, 13), 16)) >>> 8;
      varData_147[5] = varData_146 & 255;
      varData_147[6] = (varData_146 = parseInt(param_1.slice(14, 18), 16)) >>> 8;
      varData_147[7] = varData_146 & 255;
      varData_147[8] = (varData_146 = parseInt(param_1.slice(19, 23), 16)) >>> 8;
      varData_147[9] = varData_146 & 255;
      varData_147[10] = (varData_146 = parseInt(param_1.slice(24, 36), 16)) / 1099511627776 & 255;
      varData_147[11] = varData_146 / 4294967296 & 255;
      varData_147[12] = varData_146 >>> 24 & 255;
      varData_147[13] = varData_146 >>> 16 & 255;
      varData_147[14] = varData_146 >>> 8 & 255;
      varData_147[15] = varData_146 & 255;
      return varData_147;
    }
    const varData_148 = createUUID_2;
    ;
    function handleAction_60(param_1) {
      param_1 = unescape(encodeURIComponent(param_1));
      const varData_149 = [];
      for (let loopIdx = 0; loopIdx < param_1.length; ++loopIdx) {
        varData_149.push(param_1.charCodeAt(loopIdx));
      }
      return varData_149;
    }
    const varData_150 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    const varData_151 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function handleAction_61(param_1, param_2, param_3) {
      function handleAction_62(param_1_1, param_2_1, param_3_1, param_4) {
        if (typeof param_1_1 === "string") {
          param_1_1 = handleAction_60(param_1_1);
        }
        if (typeof param_2_1 === "string") {
          param_2_1 = varData_148(param_2_1);
        }
        if (param_2_1?.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let varData_152 = new Uint8Array(16 + param_1_1.length);
        varData_152.set(param_2_1);
        varData_152.set(param_1_1, param_2_1.length);
        varData_152 = param_3(varData_152);
        varData_152[6] = varData_152[6] & 15 | param_2;
        varData_152[8] = varData_152[8] & 63 | 128;
        if (param_3_1) {
          param_4 = param_4 || 0;
          for (let loopIdx = 0; loopIdx < 16; ++loopIdx) {
            param_3_1[param_4 + loopIdx] = varData_152[loopIdx];
          }
          return param_3_1;
        }
        return handleAction_58(varData_152);
      }
      try {
        handleAction_62.name = param_1;
      } catch (err) {
      }
      handleAction_62.DNS = varData_150;
      handleAction_62.URL = varData_151;
      return handleAction_62;
    }
    ;
    function handleAction_63(param_1, param_2, param_3, param_4) {
      switch (param_1) {
        case 0:
          return param_2 & param_3 ^ ~param_2 & param_4;
        case 1:
          return param_2 ^ param_3 ^ param_4;
        case 2:
          return param_2 & param_3 ^ param_2 & param_4 ^ param_3 & param_4;
        case 3:
          return param_2 ^ param_3 ^ param_4;
      }
    }
    function handleAction_64(param_1, param_2) {
      return param_1 << param_2 | param_1 >>> 32 - param_2;
    }
    function handleAction_65(param_1) {
      const varData_153 = [1518500249, 1859775393, 2400959708, 3395469782];
      const varData_154 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof param_1 === "string") {
        const varData_155 = unescape(encodeURIComponent(param_1));
        param_1 = [];
        for (let loopIdx = 0; loopIdx < varData_155.length; ++loopIdx) {
          param_1.push(varData_155.charCodeAt(loopIdx));
        }
      } else if (!Array.isArray(param_1)) {
        param_1 = Array.prototype.slice.call(param_1);
      }
      param_1.push(128);
      const varData_156 = param_1.length / 4 + 2;
      const varData_157 = Math.ceil(varData_156 / 16);
      const varData_158 = new Array(varData_157);
      for (let loopIdx = 0; loopIdx < varData_157; ++loopIdx) {
        const varData_159 = new Uint32Array(16);
        for (let loopIdx_1 = 0; loopIdx_1 < 16; ++loopIdx_1) {
          varData_159[loopIdx_1] = param_1[loopIdx * 64 + loopIdx_1 * 4] << 24 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 1] << 16 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 2] << 8 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 3];
        }
        varData_158[loopIdx] = varData_159;
      }
      varData_158[varData_157 - 1][14] = (param_1.length - 1) * 8 / Math.pow(2, 32);
      varData_158[varData_157 - 1][14] = Math.floor(varData_158[varData_157 - 1][14]);
      varData_158[varData_157 - 1][15] = (param_1.length - 1) * 8 & -1;
      for (let loopIdx = 0; loopIdx < varData_157; ++loopIdx) {
        const varData_160 = new Uint32Array(80);
        for (let loopIdx_1 = 0; loopIdx_1 < 16; ++loopIdx_1) {
          varData_160[loopIdx_1] = varData_158[loopIdx][loopIdx_1];
        }
        for (let loopIdx_1 = 16; loopIdx_1 < 80; ++loopIdx_1) {
          varData_160[loopIdx_1] = handleAction_64(varData_160[loopIdx_1 - 3] ^ varData_160[loopIdx_1 - 8] ^ varData_160[loopIdx_1 - 14] ^ varData_160[loopIdx_1 - 16], 1);
        }
        let varData_161 = varData_154[0];
        let varData_162 = varData_154[1];
        let varData_163 = varData_154[2];
        let varData_164 = varData_154[3];
        let varData_165 = varData_154[4];
        for (let loopIdx_1 = 0; loopIdx_1 < 80; ++loopIdx_1) {
          const varData_166 = Math.floor(loopIdx_1 / 20);
          const varData_167 = handleAction_64(varData_161, 5) + handleAction_63(varData_166, varData_162, varData_163, varData_164) + varData_165 + varData_153[varData_166] + varData_160[loopIdx_1] >>> 0;
          varData_165 = varData_164;
          varData_164 = varData_163;
          varData_163 = handleAction_64(varData_162, 30) >>> 0;
          varData_162 = varData_161;
          varData_161 = varData_167;
        }
        varData_154[0] = varData_154[0] + varData_161 >>> 0;
        varData_154[1] = varData_154[1] + varData_162 >>> 0;
        varData_154[2] = varData_154[2] + varData_163 >>> 0;
        varData_154[3] = varData_154[3] + varData_164 >>> 0;
        varData_154[4] = varData_154[4] + varData_165 >>> 0;
      }
      return [varData_154[0] >> 24 & 255, varData_154[0] >> 16 & 255, varData_154[0] >> 8 & 255, varData_154[0] & 255, varData_154[1] >> 24 & 255, varData_154[1] >> 16 & 255, varData_154[1] >> 8 & 255, varData_154[1] & 255, varData_154[2] >> 24 & 255, varData_154[2] >> 16 & 255, varData_154[2] >> 8 & 255, varData_154[2] & 255, varData_154[3] >> 24 & 255, varData_154[3] >> 16 & 255, varData_154[3] >> 8 & 255, varData_154[3] & 255, varData_154[4] >> 24 & 255, varData_154[4] >> 16 & 255, varData_154[4] >> 8 & 255, varData_154[4] & 255];
    }
    const varData_168 = handleAction_65;
    ;
    const varData_169 = handleAction_61("v5", 80, varData_168);
    const varData_170 = varData_169;
    ;
    /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    const varData_171 = 4;
    const varData_172 = 0;
    const varData_173 = 1;
    const varData_174 = 2;
    function handleAction_66(param_1) {
      let varData_175 = param_1.length;
      while (--varData_175 >= 0) {
        param_1[varData_175] = 0;
      }
    }
    const varData_176 = 0;
    const varData_177 = 1;
    const varData_178 = 2;
    const varData_179 = 3;
    const varData_180 = 258;
    const varData_181 = 29;
    const varData_182 = 256;
    const varData_183 = varData_182 + 1 + varData_181;
    const varData_184 = 30;
    const varData_185 = 19;
    const varData_186 = varData_183 * 2 + 1;
    const varData_187 = 15;
    const varData_188 = 16;
    const varData_189 = 7;
    const varData_190 = 256;
    const varData_191 = 16;
    const varData_192 = 17;
    const varData_193 = 18;
    const varData_194 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const varData_195 = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const varData_196 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const varData_197 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const varData_198 = 512;
    const varData_199 = new Array((varData_183 + 2) * 2);
    handleAction_66(varData_199);
    const varData_200 = new Array(varData_184 * 2);
    handleAction_66(varData_200);
    const varData_201 = new Array(varData_198);
    handleAction_66(varData_201);
    const varData_202 = new Array(varData_180 - varData_179 + 1);
    handleAction_66(varData_202);
    const varData_203 = new Array(varData_181);
    handleAction_66(varData_203);
    const varData_204 = new Array(varData_184);
    handleAction_66(varData_204);
    function handleAction_67(param_1, param_2, param_3, param_4, param_5) {
      this.static_tree = param_1;
      this.extra_bits = param_2;
      this.extra_base = param_3;
      this.elems = param_4;
      this.max_length = param_5;
      this.has_stree = param_1 && param_1.length;
    }
    let varData_205;
    let varData_206;
    let varData_207;
    function handleAction_68(param_1, param_2) {
      this.dyn_tree = param_1;
      this.max_code = 0;
      this.stat_desc = param_2;
    }
    const varData_208 = (param_1) => {
      if (param_1 < 256) {
        return varData_201[param_1];
      } else {
        return varData_201[256 + (param_1 >>> 7)];
      }
    };
    const varData_209 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
    };
    const varData_210 = (param_1, param_2, param_3) => {
      if (param_1.bi_valid > varData_188 - param_3) {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        varData_209(param_1, param_1.bi_buf);
        param_1.bi_buf = param_2 >> varData_188 - param_1.bi_valid;
        param_1.bi_valid += param_3 - varData_188;
      } else {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        param_1.bi_valid += param_3;
      }
    };
    const varData_211 = (param_1, param_2, param_3) => {
      varData_210(param_1, param_3[param_2 * 2], param_3[param_2 * 2 + 1]);
    };
    const varData_212 = (param_1, param_2) => {
      let varData_213 = 0;
      do {
        varData_213 |= param_1 & 1;
        param_1 >>>= 1;
        varData_213 <<= 1;
      } while (--param_2 > 0);
      return varData_213 >>> 1;
    };
    const varData_214 = (param_1) => {
      if (param_1.bi_valid === 16) {
        varData_209(param_1, param_1.bi_buf);
        param_1.bi_buf = 0;
        param_1.bi_valid = 0;
      } else if (param_1.bi_valid >= 8) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf & 255;
        param_1.bi_buf >>= 8;
        param_1.bi_valid -= 8;
      }
    };
    const varData_215 = (param_1, param_2) => {
      const varData_216 = param_2.dyn_tree;
      const varData_217 = param_2.max_code;
      const varData_218 = param_2.stat_desc.static_tree;
      const varData_219 = param_2.stat_desc.has_stree;
      const varData_220 = param_2.stat_desc.extra_bits;
      const varData_221 = param_2.stat_desc.extra_base;
      const varData_222 = param_2.stat_desc.max_length;
      let varData_223;
      let varData_224;
      let varData_225;
      let varData_226;
      let varData_227;
      let varData_228;
      let varData_229 = 0;
      for (varData_226 = 0; varData_226 <= varData_187; varData_226++) {
        param_1.bl_count[varData_226] = 0;
      }
      varData_216[param_1.heap[param_1.heap_max] * 2 + 1] = 0;
      for (varData_223 = param_1.heap_max + 1; varData_223 < varData_186; varData_223++) {
        varData_224 = param_1.heap[varData_223];
        varData_226 = varData_216[varData_216[varData_224 * 2 + 1] * 2 + 1] + 1;
        if (varData_226 > varData_222) {
          varData_226 = varData_222;
          varData_229++;
        }
        varData_216[varData_224 * 2 + 1] = varData_226;
        if (varData_224 > varData_217) {
          continue;
        }
        param_1.bl_count[varData_226]++;
        varData_227 = 0;
        if (varData_224 >= varData_221) {
          varData_227 = varData_220[varData_224 - varData_221];
        }
        varData_228 = varData_216[varData_224 * 2];
        param_1.opt_len += varData_228 * (varData_226 + varData_227);
        if (varData_219) {
          param_1.static_len += varData_228 * (varData_218[varData_224 * 2 + 1] + varData_227);
        }
      }
      if (varData_229 === 0) {
        return;
      }
      do {
        varData_226 = varData_222 - 1;
        while (param_1.bl_count[varData_226] === 0) {
          varData_226--;
        }
        param_1.bl_count[varData_226]--;
        param_1.bl_count[varData_226 + 1] += 2;
        param_1.bl_count[varData_222]--;
        varData_229 -= 2;
      } while (varData_229 > 0);
      for (varData_226 = varData_222; varData_226 !== 0; varData_226--) {
        varData_224 = param_1.bl_count[varData_226];
        while (varData_224 !== 0) {
          varData_225 = param_1.heap[--varData_223];
          if (varData_225 > varData_217) {
            continue;
          }
          if (varData_216[varData_225 * 2 + 1] !== varData_226) {
            param_1.opt_len += (varData_226 - varData_216[varData_225 * 2 + 1]) * varData_216[varData_225 * 2];
            varData_216[varData_225 * 2 + 1] = varData_226;
          }
          varData_224--;
        }
      }
    };
    const varData_230 = (param_1, param_2, param_3) => {
      const varData_231 = new Array(varData_187 + 1);
      let varData_232 = 0;
      let varData_233;
      let varData_234;
      for (varData_233 = 1; varData_233 <= varData_187; varData_233++) {
        varData_232 = varData_232 + param_3[varData_233 - 1] << 1;
        varData_231[varData_233] = varData_232;
      }
      for (varData_234 = 0; varData_234 <= param_2; varData_234++) {
        let varData_235 = param_1[varData_234 * 2 + 1];
        if (varData_235 === 0) {
          continue;
        }
        param_1[varData_234 * 2] = varData_212(varData_231[varData_235]++, varData_235);
      }
    };
    const varData_236 = () => {
      let varData_237;
      let varData_238;
      let varData_239;
      let varData_240;
      let varData_241;
      const varData_242 = new Array(varData_187 + 1);
      varData_239 = 0;
      for (varData_240 = 0; varData_240 < varData_181 - 1; varData_240++) {
        varData_203[varData_240] = varData_239;
        for (varData_237 = 0; varData_237 < 1 << varData_194[varData_240]; varData_237++) {
          varData_202[varData_239++] = varData_240;
        }
      }
      varData_202[varData_239 - 1] = varData_240;
      varData_241 = 0;
      for (varData_240 = 0; varData_240 < 16; varData_240++) {
        varData_204[varData_240] = varData_241;
        for (varData_237 = 0; varData_237 < 1 << varData_195[varData_240]; varData_237++) {
          varData_201[varData_241++] = varData_240;
        }
      }
      varData_241 >>= 7;
      for (; varData_240 < varData_184; varData_240++) {
        varData_204[varData_240] = varData_241 << 7;
        for (varData_237 = 0; varData_237 < 1 << varData_195[varData_240] - 7; varData_237++) {
          varData_201[256 + varData_241++] = varData_240;
        }
      }
      for (varData_238 = 0; varData_238 <= varData_187; varData_238++) {
        varData_242[varData_238] = 0;
      }
      varData_237 = 0;
      while (varData_237 <= 143) {
        varData_199[varData_237 * 2 + 1] = 8;
        varData_237++;
        varData_242[8]++;
      }
      while (varData_237 <= 255) {
        varData_199[varData_237 * 2 + 1] = 9;
        varData_237++;
        varData_242[9]++;
      }
      while (varData_237 <= 279) {
        varData_199[varData_237 * 2 + 1] = 7;
        varData_237++;
        varData_242[7]++;
      }
      while (varData_237 <= 287) {
        varData_199[varData_237 * 2 + 1] = 8;
        varData_237++;
        varData_242[8]++;
      }
      varData_230(varData_199, varData_183 + 1, varData_242);
      for (varData_237 = 0; varData_237 < varData_184; varData_237++) {
        varData_200[varData_237 * 2 + 1] = 5;
        varData_200[varData_237 * 2] = varData_212(varData_237, 5);
      }
      varData_205 = new handleAction_67(varData_199, varData_194, varData_182 + 1, varData_183, varData_187);
      varData_206 = new handleAction_67(varData_200, varData_195, 0, varData_184, varData_187);
      varData_207 = new handleAction_67(new Array(0), varData_196, 0, varData_185, varData_189);
    };
    const varData_243 = (param_1) => {
      let varData_244;
      for (varData_244 = 0; varData_244 < varData_183; varData_244++) {
        param_1.dyn_ltree[varData_244 * 2] = 0;
      }
      for (varData_244 = 0; varData_244 < varData_184; varData_244++) {
        param_1.dyn_dtree[varData_244 * 2] = 0;
      }
      for (varData_244 = 0; varData_244 < varData_185; varData_244++) {
        param_1.bl_tree[varData_244 * 2] = 0;
      }
      param_1.dyn_ltree[varData_190 * 2] = 1;
      param_1.opt_len = param_1.static_len = 0;
      param_1.sym_next = param_1.matches = 0;
    };
    const varData_245 = (param_1) => {
      if (param_1.bi_valid > 8) {
        varData_209(param_1, param_1.bi_buf);
      } else if (param_1.bi_valid > 0) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf;
      }
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
    };
    const varData_246 = (param_1, param_2, param_3, param_4) => {
      const varData_247 = param_2 * 2;
      const varData_248 = param_3 * 2;
      return param_1[varData_247] < param_1[varData_248] || param_1[varData_247] === param_1[varData_248] && param_4[param_2] <= param_4[param_3];
    };
    const varData_249 = (param_1, param_2, param_3) => {
      const varData_250 = param_1.heap[param_3];
      let varData_251 = param_3 << 1;
      while (varData_251 <= param_1.heap_len) {
        if (varData_251 < param_1.heap_len && varData_246(param_2, param_1.heap[varData_251 + 1], param_1.heap[varData_251], param_1.depth)) {
          varData_251++;
        }
        if (varData_246(param_2, varData_250, param_1.heap[varData_251], param_1.depth)) {
          break;
        }
        param_1.heap[param_3] = param_1.heap[varData_251];
        param_3 = varData_251;
        varData_251 <<= 1;
      }
      param_1.heap[param_3] = varData_250;
    };
    const varData_252 = (param_1, param_2, param_3) => {
      let varData_253;
      let varData_254;
      let varData_255 = 0;
      let varData_256;
      let varData_257;
      if (param_1.sym_next !== 0) {
        do {
          varData_253 = param_1.pending_buf[param_1.sym_buf + varData_255++] & 255;
          varData_253 += (param_1.pending_buf[param_1.sym_buf + varData_255++] & 255) << 8;
          varData_254 = param_1.pending_buf[param_1.sym_buf + varData_255++];
          if (varData_253 === 0) {
            varData_211(param_1, varData_254, param_2);
          } else {
            varData_256 = varData_202[varData_254];
            varData_211(param_1, varData_256 + varData_182 + 1, param_2);
            varData_257 = varData_194[varData_256];
            if (varData_257 !== 0) {
              varData_254 -= varData_203[varData_256];
              varData_210(param_1, varData_254, varData_257);
            }
            varData_253--;
            varData_256 = varData_208(varData_253);
            varData_211(param_1, varData_256, param_3);
            varData_257 = varData_195[varData_256];
            if (varData_257 !== 0) {
              varData_253 -= varData_204[varData_256];
              varData_210(param_1, varData_253, varData_257);
            }
          }
        } while (varData_255 < param_1.sym_next);
      }
      varData_211(param_1, varData_190, param_2);
    };
    const varData_258 = (param_1, param_2) => {
      const varData_259 = param_2.dyn_tree;
      const varData_260 = param_2.stat_desc.static_tree;
      const varData_261 = param_2.stat_desc.has_stree;
      const varData_262 = param_2.stat_desc.elems;
      let varData_263;
      let varData_264;
      let varData_265 = -1;
      let varData_266;
      param_1.heap_len = 0;
      param_1.heap_max = varData_186;
      for (varData_263 = 0; varData_263 < varData_262; varData_263++) {
        if (varData_259[varData_263 * 2] !== 0) {
          param_1.heap[++param_1.heap_len] = varData_265 = varData_263;
          param_1.depth[varData_263] = 0;
        } else {
          varData_259[varData_263 * 2 + 1] = 0;
        }
      }
      while (param_1.heap_len < 2) {
        varData_266 = param_1.heap[++param_1.heap_len] = varData_265 < 2 ? ++varData_265 : 0;
        varData_259[varData_266 * 2] = 1;
        param_1.depth[varData_266] = 0;
        param_1.opt_len--;
        if (varData_261) {
          param_1.static_len -= varData_260[varData_266 * 2 + 1];
        }
      }
      param_2.max_code = varData_265;
      for (varData_263 = param_1.heap_len >> 1; varData_263 >= 1; varData_263--) {
        varData_249(param_1, varData_259, varData_263);
      }
      varData_266 = varData_262;
      do {
        varData_263 = param_1.heap[1];
        param_1.heap[1] = param_1.heap[param_1.heap_len--];
        varData_249(param_1, varData_259, 1);
        varData_264 = param_1.heap[1];
        param_1.heap[--param_1.heap_max] = varData_263;
        param_1.heap[--param_1.heap_max] = varData_264;
        varData_259[varData_266 * 2] = varData_259[varData_263 * 2] + varData_259[varData_264 * 2];
        param_1.depth[varData_266] = (param_1.depth[varData_263] >= param_1.depth[varData_264] ? param_1.depth[varData_263] : param_1.depth[varData_264]) + 1;
        varData_259[varData_263 * 2 + 1] = varData_259[varData_264 * 2 + 1] = varData_266;
        param_1.heap[1] = varData_266++;
        varData_249(param_1, varData_259, 1);
      } while (param_1.heap_len >= 2);
      param_1.heap[--param_1.heap_max] = param_1.heap[1];
      varData_215(param_1, param_2);
      varData_230(varData_259, varData_265, param_1.bl_count);
    };
    const varData_267 = (param_1, param_2, param_3) => {
      let varData_268;
      let varData_269 = -1;
      let varData_270;
      let varData_271 = param_2[1];
      let varData_272 = 0;
      let varData_273 = 7;
      let varData_274 = 4;
      if (varData_271 === 0) {
        varData_273 = 138;
        varData_274 = 3;
      }
      param_2[(param_3 + 1) * 2 + 1] = 65535;
      for (varData_268 = 0; varData_268 <= param_3; varData_268++) {
        varData_270 = varData_271;
        varData_271 = param_2[(varData_268 + 1) * 2 + 1];
        if (++varData_272 < varData_273 && varData_270 === varData_271) {
          continue;
        } else if (varData_272 < varData_274) {
          param_1.bl_tree[varData_270 * 2] += varData_272;
        } else if (varData_270 !== 0) {
          if (varData_270 !== varData_269) {
            param_1.bl_tree[varData_270 * 2]++;
          }
          param_1.bl_tree[varData_191 * 2]++;
        } else if (varData_272 <= 10) {
          param_1.bl_tree[varData_192 * 2]++;
        } else {
          param_1.bl_tree[varData_193 * 2]++;
        }
        varData_272 = 0;
        varData_269 = varData_270;
        if (varData_271 === 0) {
          varData_273 = 138;
          varData_274 = 3;
        } else if (varData_270 === varData_271) {
          varData_273 = 6;
          varData_274 = 3;
        } else {
          varData_273 = 7;
          varData_274 = 4;
        }
      }
    };
    const varData_275 = (param_1, param_2, param_3) => {
      let varData_276;
      let varData_277 = -1;
      let varData_278;
      let varData_279 = param_2[1];
      let varData_280 = 0;
      let varData_281 = 7;
      let varData_282 = 4;
      if (varData_279 === 0) {
        varData_281 = 138;
        varData_282 = 3;
      }
      for (varData_276 = 0; varData_276 <= param_3; varData_276++) {
        varData_278 = varData_279;
        varData_279 = param_2[(varData_276 + 1) * 2 + 1];
        if (++varData_280 < varData_281 && varData_278 === varData_279) {
          continue;
        } else if (varData_280 < varData_282) {
          do {
            varData_211(param_1, varData_278, param_1.bl_tree);
          } while (--varData_280 !== 0);
        } else if (varData_278 !== 0) {
          if (varData_278 !== varData_277) {
            varData_211(param_1, varData_278, param_1.bl_tree);
            varData_280--;
          }
          varData_211(param_1, varData_191, param_1.bl_tree);
          varData_210(param_1, varData_280 - 3, 2);
        } else if (varData_280 <= 10) {
          varData_211(param_1, varData_192, param_1.bl_tree);
          varData_210(param_1, varData_280 - 3, 3);
        } else {
          varData_211(param_1, varData_193, param_1.bl_tree);
          varData_210(param_1, varData_280 - 11, 7);
        }
        varData_280 = 0;
        varData_277 = varData_278;
        if (varData_279 === 0) {
          varData_281 = 138;
          varData_282 = 3;
        } else if (varData_278 === varData_279) {
          varData_281 = 6;
          varData_282 = 3;
        } else {
          varData_281 = 7;
          varData_282 = 4;
        }
      }
    };
    const varData_283 = (param_1) => {
      let varData_284;
      varData_267(param_1, param_1.dyn_ltree, param_1.l_desc.max_code);
      varData_267(param_1, param_1.dyn_dtree, param_1.d_desc.max_code);
      varData_258(param_1, param_1.bl_desc);
      for (varData_284 = varData_185 - 1; varData_284 >= 3; varData_284--) {
        if (param_1.bl_tree[varData_197[varData_284] * 2 + 1] !== 0) {
          break;
        }
      }
      param_1.opt_len += (varData_284 + 1) * 3 + 5 + 5 + 4;
      return varData_284;
    };
    const varData_285 = (param_1, param_2, param_3, param_4) => {
      let varData_286;
      varData_210(param_1, param_2 - 257, 5);
      varData_210(param_1, param_3 - 1, 5);
      varData_210(param_1, param_4 - 4, 4);
      for (varData_286 = 0; varData_286 < param_4; varData_286++) {
        varData_210(param_1, param_1.bl_tree[varData_197[varData_286] * 2 + 1], 3);
      }
      varData_275(param_1, param_1.dyn_ltree, param_2 - 1);
      varData_275(param_1, param_1.dyn_dtree, param_3 - 1);
    };
    const varData_287 = (param_1) => {
      let varData_288 = 4093624447;
      let varData_289;
      for (varData_289 = 0; varData_289 <= 31; varData_289++, varData_288 >>>= 1) {
        if (varData_288 & 1 && param_1.dyn_ltree[varData_289 * 2] !== 0) {
          return varData_172;
        }
      }
      if (param_1.dyn_ltree[18] !== 0 || param_1.dyn_ltree[20] !== 0 || param_1.dyn_ltree[26] !== 0) {
        return varData_173;
      }
      for (varData_289 = 32; varData_289 < varData_182; varData_289++) {
        if (param_1.dyn_ltree[varData_289 * 2] !== 0) {
          return varData_173;
        }
      }
      return varData_172;
    };
    let isDisabled = false;
    const varData_290 = (param_1) => {
      if (!isDisabled) {
        varData_236();
        isDisabled = true;
      }
      param_1.l_desc = new handleAction_68(param_1.dyn_ltree, varData_205);
      param_1.d_desc = new handleAction_68(param_1.dyn_dtree, varData_206);
      param_1.bl_desc = new handleAction_68(param_1.bl_tree, varData_207);
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
      varData_243(param_1);
    };
    const varData_291 = (param_1, param_2, param_3, param_4) => {
      varData_210(param_1, (varData_176 << 1) + (param_4 ? 1 : 0), 3);
      varData_245(param_1);
      varData_209(param_1, param_3);
      varData_209(param_1, ~param_3);
      if (param_3) {
        param_1.pending_buf.set(param_1.window.subarray(param_2, param_2 + param_3), param_1.pending);
      }
      param_1.pending += param_3;
    };
    const varData_292 = (param_1) => {
      varData_210(param_1, varData_177 << 1, 3);
      varData_211(param_1, varData_190, varData_199);
      varData_214(param_1);
    };
    const varData_293 = (param_1, param_2, param_3, param_4) => {
      let varData_294;
      let varData_295;
      let varData_296 = 0;
      if (param_1.level > 0) {
        if (param_1.strm.data_type === varData_174) {
          param_1.strm.data_type = varData_287(param_1);
        }
        varData_258(param_1, param_1.l_desc);
        varData_258(param_1, param_1.d_desc);
        varData_296 = varData_283(param_1);
        varData_294 = param_1.opt_len + 3 + 7 >>> 3;
        varData_295 = param_1.static_len + 3 + 7 >>> 3;
        if (varData_295 <= varData_294) {
          varData_294 = varData_295;
        }
      } else {
        varData_294 = varData_295 = param_3 + 5;
      }
      if (param_3 + 4 <= varData_294 && param_2 !== -1) {
        varData_291(param_1, param_2, param_3, param_4);
      } else if (param_1.strategy === varData_171 || varData_295 === varData_294) {
        varData_210(param_1, (varData_177 << 1) + (param_4 ? 1 : 0), 3);
        varData_252(param_1, varData_199, varData_200);
      } else {
        varData_210(param_1, (varData_178 << 1) + (param_4 ? 1 : 0), 3);
        varData_285(param_1, param_1.l_desc.max_code + 1, param_1.d_desc.max_code + 1, varData_296 + 1);
        varData_252(param_1, param_1.dyn_ltree, param_1.dyn_dtree);
      }
      varData_243(param_1);
      if (param_4) {
        varData_245(param_1);
      }
    };
    const varData_297 = (param_1, param_2, param_3) => {
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2 >> 8;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_3;
      if (param_2 === 0) {
        param_1.dyn_ltree[param_3 * 2]++;
      } else {
        param_1.matches++;
        param_2--;
        param_1.dyn_ltree[(varData_202[param_3] + varData_182 + 1) * 2]++;
        param_1.dyn_dtree[varData_208(param_2) * 2]++;
      }
      return param_1.sym_next === param_1.sym_end;
    };
    var varData_298 = varData_290;
    var varData_299 = varData_291;
    var varData_300 = varData_293;
    var varData_301 = varData_297;
    var varData_302 = varData_292;
    var varData_303 = {
      _tr_init: varData_298,
      _tr_stored_block: varData_299,
      _tr_flush_block: varData_300,
      _tr_tally: varData_301,
      _tr_align: varData_302
    };
    var varData_304 = varData_303;
    const varData_305 = (param_1, param_2, param_3, param_4) => {
      let varData_306 = param_1 & 65535 | 0;
      let varData_307 = param_1 >>> 16 & 65535 | 0;
      let varData_308 = 0;
      while (param_3 !== 0) {
        varData_308 = param_3 > 2e3 ? 2e3 : param_3;
        param_3 -= varData_308;
        do {
          varData_306 = varData_306 + param_2[param_4++] | 0;
          varData_307 = varData_307 + varData_306 | 0;
        } while (--varData_308);
        varData_306 %= 65521;
        varData_307 %= 65521;
      }
      return varData_306 | varData_307 << 16 | 0;
    };
    var varData_309 = varData_305;
    const varData_310 = () => {
      let varData_311;
      let varData_312 = [];
      for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
        varData_311 = loopIdx;
        for (var loopIdx_1 = 0; loopIdx_1 < 8; loopIdx_1++) {
          varData_311 = varData_311 & 1 ? varData_311 >>> 1 ^ -306674912 : varData_311 >>> 1;
        }
        varData_312[loopIdx] = varData_311;
      }
      return varData_312;
    };
    const varData_313 = new Uint32Array(varData_310());
    const varData_314 = (param_1, param_2, param_3, param_4) => {
      const varData_315 = varData_313;
      const varData_316 = param_4 + param_3;
      param_1 ^= -1;
      for (let loopIdx = param_4; loopIdx < varData_316; loopIdx++) {
        param_1 = param_1 >>> 8 ^ varData_315[(param_1 ^ param_2[loopIdx]) & 255];
      }
      return param_1 ^ -1;
    };
    var varData_317 = varData_314;
    var varData_318 = {
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
    var varData_319 = {
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
    var varData_320 = varData_319;
    const {
      _tr_init: _0x6096f8,
      _tr_stored_block: _0x3b4816,
      _tr_flush_block: _0x1ed1a6,
      _tr_tally: _0x1020f2,
      _tr_align: _0x4d13cb
    } = varData_304;
    const {
      Z_NO_FLUSH: _0x4345ab,
      Z_PARTIAL_FLUSH: _0x3ca909,
      Z_FULL_FLUSH: _0x1470f5,
      Z_FINISH: _0xf782ec,
      Z_BLOCK: _0xc729b7,
      Z_OK: _0x248f2d,
      Z_STREAM_END: _0x3374b1,
      Z_STREAM_ERROR: _0x8501ad,
      Z_DATA_ERROR: _0x32fb56,
      Z_BUF_ERROR: _0x162799,
      Z_DEFAULT_COMPRESSION: _0x262978,
      Z_FILTERED: _0x204fce,
      Z_HUFFMAN_ONLY: _0x1254fb,
      Z_RLE: _0x7397c3,
      Z_FIXED: _0x3d17ec,
      Z_DEFAULT_STRATEGY: _0x53e882,
      Z_UNKNOWN: _0x5549d1,
      Z_DEFLATED: _0x5e25f1
    } = varData_320;
    const varData_321 = 9;
    const varData_322 = 15;
    const varData_323 = 8;
    const varData_324 = 29;
    const varData_325 = 256;
    const varData_326 = varData_325 + 1 + varData_324;
    const varData_327 = 30;
    const varData_328 = 19;
    const varData_329 = varData_326 * 2 + 1;
    const varData_330 = 15;
    const varData_331 = 3;
    const varData_332 = 258;
    const varData_333 = varData_332 + varData_331 + 1;
    const varData_334 = 32;
    const varData_335 = 42;
    const varData_336 = 57;
    const varData_337 = 69;
    const varData_338 = 73;
    const varData_339 = 91;
    const varData_340 = 103;
    const varData_341 = 113;
    const varData_342 = 666;
    const varData_343 = 1;
    const varData_344 = 2;
    const varData_345 = 3;
    const varData_346 = 4;
    const varData_347 = 3;
    const varData_348 = (param_1, param_2) => {
      param_1.msg = varData_318[param_2];
      return param_2;
    };
    const varData_349 = (param_1) => {
      return param_1 * 2 - (param_1 > 4 ? 9 : 0);
    };
    const varData_350 = (param_1) => {
      let varData_351 = param_1.length;
      while (--varData_351 >= 0) {
        param_1[varData_351] = 0;
      }
    };
    const varData_352 = (param_1) => {
      let varData_353;
      let varData_354;
      let varData_355;
      let varData_356 = param_1.w_size;
      varData_353 = param_1.hash_size;
      varData_355 = varData_353;
      do {
        varData_354 = param_1.head[--varData_355];
        param_1.head[varData_355] = varData_354 >= varData_356 ? varData_354 - varData_356 : 0;
      } while (--varData_353);
      varData_353 = varData_356;
      varData_355 = varData_353;
      do {
        varData_354 = param_1.prev[--varData_355];
        param_1.prev[varData_355] = varData_354 >= varData_356 ? varData_354 - varData_356 : 0;
      } while (--varData_353);
    };
    let varData_357 = (param_1, param_2, param_3) => (param_2 << param_1.hash_shift ^ param_3) & param_1.hash_mask;
    let varData_358 = varData_357;
    const varData_359 = (param_1) => {
      const varData_360 = param_1.state;
      let varData_361 = varData_360.pending;
      if (varData_361 > param_1.avail_out) {
        varData_361 = param_1.avail_out;
      }
      if (varData_361 === 0) {
        return;
      }
      param_1.output.set(varData_360.pending_buf.subarray(varData_360.pending_out, varData_360.pending_out + varData_361), param_1.next_out);
      param_1.next_out += varData_361;
      varData_360.pending_out += varData_361;
      param_1.total_out += varData_361;
      param_1.avail_out -= varData_361;
      varData_360.pending -= varData_361;
      if (varData_360.pending === 0) {
        varData_360.pending_out = 0;
      }
    };
    const varData_362 = (param_1, param_2) => {
      _0x1ed1a6(param_1, param_1.block_start >= 0 ? param_1.block_start : -1, param_1.strstart - param_1.block_start, param_2);
      param_1.block_start = param_1.strstart;
      varData_359(param_1.strm);
    };
    const varData_363 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2;
    };
    const varData_364 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
    };
    const varData_365 = (param_1, param_2, param_3, param_4) => {
      let varData_366 = param_1.avail_in;
      if (varData_366 > param_4) {
        varData_366 = param_4;
      }
      if (varData_366 === 0) {
        return 0;
      }
      param_1.avail_in -= varData_366;
      param_2.set(param_1.input.subarray(param_1.next_in, param_1.next_in + varData_366), param_3);
      if (param_1.state.wrap === 1) {
        param_1.adler = varData_309(param_1.adler, param_2, varData_366, param_3);
      } else if (param_1.state.wrap === 2) {
        param_1.adler = varData_317(param_1.adler, param_2, varData_366, param_3);
      }
      param_1.next_in += varData_366;
      param_1.total_in += varData_366;
      return varData_366;
    };
    const varData_367 = (param_1, param_2) => {
      let varData_368 = param_1.max_chain_length;
      let varData_369 = param_1.strstart;
      let varData_370;
      let varData_371;
      let varData_372 = param_1.prev_length;
      let varData_373 = param_1.nice_match;
      const varData_374 = param_1.strstart > param_1.w_size - varData_333 ? param_1.strstart - (param_1.w_size - varData_333) : 0;
      const varData_375 = param_1.window;
      const varData_376 = param_1.w_mask;
      const varData_377 = param_1.prev;
      const varData_378 = param_1.strstart + varData_332;
      let varData_379 = varData_375[varData_369 + varData_372 - 1];
      let varData_380 = varData_375[varData_369 + varData_372];
      if (param_1.prev_length >= param_1.good_match) {
        varData_368 >>= 2;
      }
      if (varData_373 > param_1.lookahead) {
        varData_373 = param_1.lookahead;
      }
      do {
        varData_370 = param_2;
        if (varData_375[varData_370 + varData_372] !== varData_380 || varData_375[varData_370 + varData_372 - 1] !== varData_379 || varData_375[varData_370] !== varData_375[varData_369] || varData_375[++varData_370] !== varData_375[varData_369 + 1]) {
          continue;
        }
        varData_369 += 2;
        varData_370++;
        do {
        } while (varData_375[++varData_369] === varData_375[++varData_370] && varData_375[++varData_369] === varData_375[++varData_370] && varData_375[++varData_369] === varData_375[++varData_370] && varData_375[++varData_369] === varData_375[++varData_370] && varData_375[++varData_369] === varData_375[++varData_370] && varData_375[++varData_369] === varData_375[++varData_370] && varData_375[++varData_369] === varData_375[++varData_370] && varData_375[++varData_369] === varData_375[++varData_370] && varData_369 < varData_378);
        varData_371 = varData_332 - (varData_378 - varData_369);
        varData_369 = varData_378 - varData_332;
        if (varData_371 > varData_372) {
          param_1.match_start = param_2;
          varData_372 = varData_371;
          if (varData_371 >= varData_373) {
            break;
          }
          varData_379 = varData_375[varData_369 + varData_372 - 1];
          varData_380 = varData_375[varData_369 + varData_372];
        }
      } while ((param_2 = varData_377[param_2 & varData_376]) > varData_374 && --varData_368 !== 0);
      if (varData_372 <= param_1.lookahead) {
        return varData_372;
      }
      return param_1.lookahead;
    };
    const varData_381 = (param_1) => {
      const varData_382 = param_1.w_size;
      let varData_383;
      let varData_384;
      let varData_385;
      do {
        varData_384 = param_1.window_size - param_1.lookahead - param_1.strstart;
        if (param_1.strstart >= varData_382 + (varData_382 - varData_333)) {
          param_1.window.set(param_1.window.subarray(varData_382, varData_382 + varData_382 - varData_384), 0);
          param_1.match_start -= varData_382;
          param_1.strstart -= varData_382;
          param_1.block_start -= varData_382;
          if (param_1.insert > param_1.strstart) {
            param_1.insert = param_1.strstart;
          }
          varData_352(param_1);
          varData_384 += varData_382;
        }
        if (param_1.strm.avail_in === 0) {
          break;
        }
        varData_383 = varData_365(param_1.strm, param_1.window, param_1.strstart + param_1.lookahead, varData_384);
        param_1.lookahead += varData_383;
        if (param_1.lookahead + param_1.insert >= varData_331) {
          varData_385 = param_1.strstart - param_1.insert;
          param_1.ins_h = param_1.window[varData_385];
          param_1.ins_h = varData_358(param_1, param_1.ins_h, param_1.window[varData_385 + 1]);
          while (param_1.insert) {
            param_1.ins_h = varData_358(param_1, param_1.ins_h, param_1.window[varData_385 + varData_331 - 1]);
            param_1.prev[varData_385 & param_1.w_mask] = param_1.head[param_1.ins_h];
            param_1.head[param_1.ins_h] = varData_385;
            varData_385++;
            param_1.insert--;
            if (param_1.lookahead + param_1.insert < varData_331) {
              break;
            }
          }
        }
      } while (param_1.lookahead < varData_333 && param_1.strm.avail_in !== 0);
    };
    const varData_386 = (param_1, param_2) => {
      let varData_387 = param_1.pending_buf_size - 5 > param_1.w_size ? param_1.w_size : param_1.pending_buf_size - 5;
      let varData_388;
      let varData_389;
      let varData_390;
      let varData_391 = 0;
      let varData_392 = param_1.strm.avail_in;
      do {
        varData_388 = 65535;
        varData_390 = param_1.bi_valid + 42 >> 3;
        if (param_1.strm.avail_out < varData_390) {
          break;
        }
        varData_390 = param_1.strm.avail_out - varData_390;
        varData_389 = param_1.strstart - param_1.block_start;
        if (varData_388 > varData_389 + param_1.strm.avail_in) {
          varData_388 = varData_389 + param_1.strm.avail_in;
        }
        if (varData_388 > varData_390) {
          varData_388 = varData_390;
        }
        if (varData_388 < varData_387 && (varData_388 === 0 && param_2 !== _0xf782ec || param_2 === _0x4345ab || varData_388 !== varData_389 + param_1.strm.avail_in)) {
          break;
        }
        varData_391 = param_2 === _0xf782ec && varData_388 === varData_389 + param_1.strm.avail_in ? 1 : 0;
        _0x3b4816(param_1, 0, 0, varData_391);
        param_1.pending_buf[param_1.pending - 4] = varData_388;
        param_1.pending_buf[param_1.pending - 3] = varData_388 >> 8;
        param_1.pending_buf[param_1.pending - 2] = ~varData_388;
        param_1.pending_buf[param_1.pending - 1] = ~varData_388 >> 8;
        varData_359(param_1.strm);
        if (varData_389) {
          if (varData_389 > varData_388) {
            varData_389 = varData_388;
          }
          param_1.strm.output.set(param_1.window.subarray(param_1.block_start, param_1.block_start + varData_389), param_1.strm.next_out);
          param_1.strm.next_out += varData_389;
          param_1.strm.avail_out -= varData_389;
          param_1.strm.total_out += varData_389;
          param_1.block_start += varData_389;
          varData_388 -= varData_389;
        }
        if (varData_388) {
          varData_365(param_1.strm, param_1.strm.output, param_1.strm.next_out, varData_388);
          param_1.strm.next_out += varData_388;
          param_1.strm.avail_out -= varData_388;
          param_1.strm.total_out += varData_388;
        }
      } while (varData_391 === 0);
      varData_392 -= param_1.strm.avail_in;
      if (varData_392) {
        if (varData_392 >= param_1.w_size) {
          param_1.matches = 2;
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - param_1.w_size, param_1.strm.next_in), 0);
          param_1.strstart = param_1.w_size;
          param_1.insert = param_1.strstart;
        } else {
          if (param_1.window_size - param_1.strstart <= varData_392) {
            param_1.strstart -= param_1.w_size;
            param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
            if (param_1.matches < 2) {
              param_1.matches++;
            }
            if (param_1.insert > param_1.strstart) {
              param_1.insert = param_1.strstart;
            }
          }
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - varData_392, param_1.strm.next_in), param_1.strstart);
          param_1.strstart += varData_392;
          param_1.insert += varData_392 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_392;
        }
        param_1.block_start = param_1.strstart;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      if (varData_391) {
        return varData_346;
      }
      if (param_2 !== _0x4345ab && param_2 !== _0xf782ec && param_1.strm.avail_in === 0 && param_1.strstart === param_1.block_start) {
        return varData_344;
      }
      varData_390 = param_1.window_size - param_1.strstart;
      if (param_1.strm.avail_in > varData_390 && param_1.block_start >= param_1.w_size) {
        param_1.block_start -= param_1.w_size;
        param_1.strstart -= param_1.w_size;
        param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
        if (param_1.matches < 2) {
          param_1.matches++;
        }
        varData_390 += param_1.w_size;
        if (param_1.insert > param_1.strstart) {
          param_1.insert = param_1.strstart;
        }
      }
      if (varData_390 > param_1.strm.avail_in) {
        varData_390 = param_1.strm.avail_in;
      }
      if (varData_390) {
        varData_365(param_1.strm, param_1.window, param_1.strstart, varData_390);
        param_1.strstart += varData_390;
        param_1.insert += varData_390 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_390;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      varData_390 = param_1.bi_valid + 42 >> 3;
      varData_390 = param_1.pending_buf_size - varData_390 > 65535 ? 65535 : param_1.pending_buf_size - varData_390;
      varData_387 = varData_390 > param_1.w_size ? param_1.w_size : varData_390;
      varData_389 = param_1.strstart - param_1.block_start;
      if (varData_389 >= varData_387 || (varData_389 || param_2 === _0xf782ec) && param_2 !== _0x4345ab && param_1.strm.avail_in === 0 && varData_389 <= varData_390) {
        varData_388 = varData_389 > varData_390 ? varData_390 : varData_389;
        varData_391 = param_2 === _0xf782ec && param_1.strm.avail_in === 0 && varData_388 === varData_389 ? 1 : 0;
        _0x3b4816(param_1, param_1.block_start, varData_388, varData_391);
        param_1.block_start += varData_388;
        varData_359(param_1.strm);
      }
      if (varData_391) {
        return varData_345;
      } else {
        return varData_343;
      }
    };
    const varData_393 = (param_1, param_2) => {
      let varData_394;
      let varData_395;
      while (true) {
        if (param_1.lookahead < varData_333) {
          varData_381(param_1);
          if (param_1.lookahead < varData_333 && param_2 === _0x4345ab) {
            return varData_343;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_394 = 0;
        if (param_1.lookahead >= varData_331) {
          param_1.ins_h = varData_358(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_331 - 1]);
          varData_394 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        if (varData_394 !== 0 && param_1.strstart - varData_394 <= param_1.w_size - varData_333) {
          param_1.match_length = varData_367(param_1, varData_394);
        }
        if (param_1.match_length >= varData_331) {
          varData_395 = _0x1020f2(param_1, param_1.strstart - param_1.match_start, param_1.match_length - varData_331);
          param_1.lookahead -= param_1.match_length;
          if (param_1.match_length <= param_1.max_lazy_match && param_1.lookahead >= varData_331) {
            param_1.match_length--;
            do {
              param_1.strstart++;
              param_1.ins_h = varData_358(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_331 - 1]);
              varData_394 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            } while (--param_1.match_length !== 0);
            param_1.strstart++;
          } else {
            param_1.strstart += param_1.match_length;
            param_1.match_length = 0;
            param_1.ins_h = param_1.window[param_1.strstart];
            param_1.ins_h = varData_358(param_1, param_1.ins_h, param_1.window[param_1.strstart + 1]);
          }
        } else {
          varData_395 = _0x1020f2(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_395) {
          varData_362(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_343;
          }
        }
      }
      param_1.insert = param_1.strstart < varData_331 - 1 ? param_1.strstart : varData_331 - 1;
      if (param_2 === _0xf782ec) {
        varData_362(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_345;
        }
        return varData_346;
      }
      if (param_1.sym_next) {
        varData_362(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_343;
        }
      }
      return varData_344;
    };
    const varData_396 = (param_1, param_2) => {
      let varData_397;
      let varData_398;
      let varData_399;
      while (true) {
        if (param_1.lookahead < varData_333) {
          varData_381(param_1);
          if (param_1.lookahead < varData_333 && param_2 === _0x4345ab) {
            return varData_343;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_397 = 0;
        if (param_1.lookahead >= varData_331) {
          param_1.ins_h = varData_358(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_331 - 1]);
          varData_397 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        param_1.prev_length = param_1.match_length;
        param_1.prev_match = param_1.match_start;
        param_1.match_length = varData_331 - 1;
        if (varData_397 !== 0 && param_1.prev_length < param_1.max_lazy_match && param_1.strstart - varData_397 <= param_1.w_size - varData_333) {
          param_1.match_length = varData_367(param_1, varData_397);
          if (param_1.match_length <= 5 && (param_1.strategy === _0x204fce || param_1.match_length === varData_331 && param_1.strstart - param_1.match_start > 4096)) {
            param_1.match_length = varData_331 - 1;
          }
        }
        if (param_1.prev_length >= varData_331 && param_1.match_length <= param_1.prev_length) {
          varData_399 = param_1.strstart + param_1.lookahead - varData_331;
          varData_398 = _0x1020f2(param_1, param_1.strstart - 1 - param_1.prev_match, param_1.prev_length - varData_331);
          param_1.lookahead -= param_1.prev_length - 1;
          param_1.prev_length -= 2;
          do {
            if (++param_1.strstart <= varData_399) {
              param_1.ins_h = varData_358(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_331 - 1]);
              varData_397 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            }
          } while (--param_1.prev_length !== 0);
          param_1.match_available = 0;
          param_1.match_length = varData_331 - 1;
          param_1.strstart++;
          if (varData_398) {
            varData_362(param_1, false);
            if (param_1.strm.avail_out === 0) {
              return varData_343;
            }
          }
        } else if (param_1.match_available) {
          varData_398 = _0x1020f2(param_1, 0, param_1.window[param_1.strstart - 1]);
          if (varData_398) {
            varData_362(param_1, false);
          }
          param_1.strstart++;
          param_1.lookahead--;
          if (param_1.strm.avail_out === 0) {
            return varData_343;
          }
        } else {
          param_1.match_available = 1;
          param_1.strstart++;
          param_1.lookahead--;
        }
      }
      if (param_1.match_available) {
        varData_398 = _0x1020f2(param_1, 0, param_1.window[param_1.strstart - 1]);
        param_1.match_available = 0;
      }
      param_1.insert = param_1.strstart < varData_331 - 1 ? param_1.strstart : varData_331 - 1;
      if (param_2 === _0xf782ec) {
        varData_362(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_345;
        }
        return varData_346;
      }
      if (param_1.sym_next) {
        varData_362(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_343;
        }
      }
      return varData_344;
    };
    const varData_400 = (param_1, param_2) => {
      let varData_401;
      let varData_402;
      let varData_403;
      let varData_404;
      const varData_405 = param_1.window;
      while (true) {
        if (param_1.lookahead <= varData_332) {
          varData_381(param_1);
          if (param_1.lookahead <= varData_332 && param_2 === _0x4345ab) {
            return varData_343;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        param_1.match_length = 0;
        if (param_1.lookahead >= varData_331 && param_1.strstart > 0) {
          varData_403 = param_1.strstart - 1;
          varData_402 = varData_405[varData_403];
          if (varData_402 === varData_405[++varData_403] && varData_402 === varData_405[++varData_403] && varData_402 === varData_405[++varData_403]) {
            varData_404 = param_1.strstart + varData_332;
            do {
            } while (varData_402 === varData_405[++varData_403] && varData_402 === varData_405[++varData_403] && varData_402 === varData_405[++varData_403] && varData_402 === varData_405[++varData_403] && varData_402 === varData_405[++varData_403] && varData_402 === varData_405[++varData_403] && varData_402 === varData_405[++varData_403] && varData_402 === varData_405[++varData_403] && varData_403 < varData_404);
            param_1.match_length = varData_332 - (varData_404 - varData_403);
            if (param_1.match_length > param_1.lookahead) {
              param_1.match_length = param_1.lookahead;
            }
          }
        }
        if (param_1.match_length >= varData_331) {
          varData_401 = _0x1020f2(param_1, 1, param_1.match_length - varData_331);
          param_1.lookahead -= param_1.match_length;
          param_1.strstart += param_1.match_length;
          param_1.match_length = 0;
        } else {
          varData_401 = _0x1020f2(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_401) {
          varData_362(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_343;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0xf782ec) {
        varData_362(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_345;
        }
        return varData_346;
      }
      if (param_1.sym_next) {
        varData_362(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_343;
        }
      }
      return varData_344;
    };
    const varData_406 = (param_1, param_2) => {
      let varData_407;
      while (true) {
        if (param_1.lookahead === 0) {
          varData_381(param_1);
          if (param_1.lookahead === 0) {
            if (param_2 === _0x4345ab) {
              return varData_343;
            }
            break;
          }
        }
        param_1.match_length = 0;
        varData_407 = _0x1020f2(param_1, 0, param_1.window[param_1.strstart]);
        param_1.lookahead--;
        param_1.strstart++;
        if (varData_407) {
          varData_362(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_343;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0xf782ec) {
        varData_362(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_345;
        }
        return varData_346;
      }
      if (param_1.sym_next) {
        varData_362(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_343;
        }
      }
      return varData_344;
    };
    function handleAction_69(param_1, param_2, param_3, param_4, param_5) {
      this.good_length = param_1;
      this.max_lazy = param_2;
      this.nice_length = param_3;
      this.max_chain = param_4;
      this.func = param_5;
    }
    const varData_408 = [new handleAction_69(0, 0, 0, 0, varData_386), new handleAction_69(4, 4, 8, 4, varData_393), new handleAction_69(4, 5, 16, 8, varData_393), new handleAction_69(4, 6, 32, 32, varData_393), new handleAction_69(4, 4, 16, 16, varData_396), new handleAction_69(8, 16, 32, 32, varData_396), new handleAction_69(8, 16, 128, 128, varData_396), new handleAction_69(8, 32, 128, 256, varData_396), new handleAction_69(32, 128, 258, 1024, varData_396), new handleAction_69(32, 258, 258, 4096, varData_396)];
    const varData_409 = (param_1) => {
      param_1.window_size = param_1.w_size * 2;
      varData_350(param_1.head);
      param_1.max_lazy_match = varData_408[param_1.level].max_lazy;
      param_1.good_match = varData_408[param_1.level].good_length;
      param_1.nice_match = varData_408[param_1.level].nice_length;
      param_1.max_chain_length = varData_408[param_1.level].max_chain;
      param_1.strstart = 0;
      param_1.block_start = 0;
      param_1.lookahead = 0;
      param_1.insert = 0;
      param_1.match_length = param_1.prev_length = varData_331 - 1;
      param_1.match_available = 0;
      param_1.ins_h = 0;
    };
    function handleAction_70() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = _0x5e25f1;
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
      this.dyn_ltree = new Uint16Array(varData_329 * 2);
      this.dyn_dtree = new Uint16Array((varData_327 * 2 + 1) * 2);
      this.bl_tree = new Uint16Array((varData_328 * 2 + 1) * 2);
      varData_350(this.dyn_ltree);
      varData_350(this.dyn_dtree);
      varData_350(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(varData_330 + 1);
      this.heap = new Uint16Array(varData_326 * 2 + 1);
      varData_350(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(varData_326 * 2 + 1);
      varData_350(this.depth);
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
    const varData_410 = (param_1) => {
      if (!param_1) {
        return 1;
      }
      const varData_411 = param_1.state;
      if (!varData_411 || varData_411.strm !== param_1 || varData_411.status !== varData_335 && varData_411.status !== varData_336 && varData_411.status !== varData_337 && varData_411.status !== varData_338 && varData_411.status !== varData_339 && varData_411.status !== varData_340 && varData_411.status !== varData_341 && varData_411.status !== varData_342) {
        return 1;
      }
      return 0;
    };
    const varData_412 = (param_1) => {
      if (varData_410(param_1)) {
        return varData_348(param_1, _0x8501ad);
      }
      param_1.total_in = param_1.total_out = 0;
      param_1.data_type = _0x5549d1;
      const varData_413 = param_1.state;
      varData_413.pending = 0;
      varData_413.pending_out = 0;
      if (varData_413.wrap < 0) {
        varData_413.wrap = -varData_413.wrap;
      }
      varData_413.status = varData_413.wrap === 2 ? varData_336 : varData_413.wrap ? varData_335 : varData_341;
      param_1.adler = varData_413.wrap === 2 ? 0 : 1;
      varData_413.last_flush = -2;
      _0x6096f8(varData_413);
      return _0x248f2d;
    };
    const varData_414 = (param_1) => {
      const varData_415 = varData_412(param_1);
      if (varData_415 === _0x248f2d) {
        varData_409(param_1.state);
      }
      return varData_415;
    };
    const varData_416 = (param_1, param_2) => {
      if (varData_410(param_1) || param_1.state.wrap !== 2) {
        return _0x8501ad;
      }
      param_1.state.gzhead = param_2;
      return _0x248f2d;
    };
    const varData_417 = (param_1, param_2, param_3, param_4, param_5, param_6) => {
      if (!param_1) {
        return _0x8501ad;
      }
      let varData_418 = 1;
      if (param_2 === _0x262978) {
        param_2 = 6;
      }
      if (param_4 < 0) {
        varData_418 = 0;
        param_4 = -param_4;
      } else if (param_4 > 15) {
        varData_418 = 2;
        param_4 -= 16;
      }
      if (param_5 < 1 || param_5 > varData_321 || param_3 !== _0x5e25f1 || param_4 < 8 || param_4 > 15 || param_2 < 0 || param_2 > 9 || param_6 < 0 || param_6 > _0x3d17ec || param_4 === 8 && varData_418 !== 1) {
        return varData_348(param_1, _0x8501ad);
      }
      if (param_4 === 8) {
        param_4 = 9;
      }
      const varData_419 = new handleAction_70();
      param_1.state = varData_419;
      varData_419.strm = param_1;
      varData_419.status = varData_335;
      varData_419.wrap = varData_418;
      varData_419.gzhead = null;
      varData_419.w_bits = param_4;
      varData_419.w_size = 1 << varData_419.w_bits;
      varData_419.w_mask = varData_419.w_size - 1;
      varData_419.hash_bits = param_5 + 7;
      varData_419.hash_size = 1 << varData_419.hash_bits;
      varData_419.hash_mask = varData_419.hash_size - 1;
      varData_419.hash_shift = ~~((varData_419.hash_bits + varData_331 - 1) / varData_331);
      varData_419.window = new Uint8Array(varData_419.w_size * 2);
      varData_419.head = new Uint16Array(varData_419.hash_size);
      varData_419.prev = new Uint16Array(varData_419.w_size);
      varData_419.lit_bufsize = 1 << param_5 + 6;
      varData_419.pending_buf_size = varData_419.lit_bufsize * 4;
      varData_419.pending_buf = new Uint8Array(varData_419.pending_buf_size);
      varData_419.sym_buf = varData_419.lit_bufsize;
      varData_419.sym_end = (varData_419.lit_bufsize - 1) * 3;
      varData_419.level = param_2;
      varData_419.strategy = param_6;
      varData_419.method = param_3;
      return varData_414(param_1);
    };
    const varData_420 = (param_1, param_2) => {
      return varData_417(param_1, param_2, _0x5e25f1, varData_322, varData_323, _0x53e882);
    };
    const varData_421 = (param_1, param_2) => {
      if (varData_410(param_1) || param_2 > _0xc729b7 || param_2 < 0) {
        if (param_1) {
          return varData_348(param_1, _0x8501ad);
        } else {
          return _0x8501ad;
        }
      }
      const varData_422 = param_1.state;
      if (!param_1.output || param_1.avail_in !== 0 && !param_1.input || varData_422.status === varData_342 && param_2 !== _0xf782ec) {
        return varData_348(param_1, param_1.avail_out === 0 ? _0x162799 : _0x8501ad);
      }
      const varData_423 = varData_422.last_flush;
      varData_422.last_flush = param_2;
      if (varData_422.pending !== 0) {
        varData_359(param_1);
        if (param_1.avail_out === 0) {
          varData_422.last_flush = -1;
          return _0x248f2d;
        }
      } else if (param_1.avail_in === 0 && varData_349(param_2) <= varData_349(varData_423) && param_2 !== _0xf782ec) {
        return varData_348(param_1, _0x162799);
      }
      if (varData_422.status === varData_342 && param_1.avail_in !== 0) {
        return varData_348(param_1, _0x162799);
      }
      if (varData_422.status === varData_335 && varData_422.wrap === 0) {
        varData_422.status = varData_341;
      }
      if (varData_422.status === varData_335) {
        let varData_424 = _0x5e25f1 + (varData_422.w_bits - 8 << 4) << 8;
        let varData_425 = -1;
        if (varData_422.strategy >= _0x1254fb || varData_422.level < 2) {
          varData_425 = 0;
        } else if (varData_422.level < 6) {
          varData_425 = 1;
        } else if (varData_422.level === 6) {
          varData_425 = 2;
        } else {
          varData_425 = 3;
        }
        varData_424 |= varData_425 << 6;
        if (varData_422.strstart !== 0) {
          varData_424 |= varData_334;
        }
        varData_424 += 31 - varData_424 % 31;
        varData_364(varData_422, varData_424);
        if (varData_422.strstart !== 0) {
          varData_364(varData_422, param_1.adler >>> 16);
          varData_364(varData_422, param_1.adler & 65535);
        }
        param_1.adler = 1;
        varData_422.status = varData_341;
        varData_359(param_1);
        if (varData_422.pending !== 0) {
          varData_422.last_flush = -1;
          return _0x248f2d;
        }
      }
      if (varData_422.status === varData_336) {
        param_1.adler = 0;
        varData_363(varData_422, 31);
        varData_363(varData_422, 139);
        varData_363(varData_422, 8);
        if (!varData_422.gzhead) {
          varData_363(varData_422, 0);
          varData_363(varData_422, 0);
          varData_363(varData_422, 0);
          varData_363(varData_422, 0);
          varData_363(varData_422, 0);
          varData_363(varData_422, varData_422.level === 9 ? 2 : varData_422.strategy >= _0x1254fb || varData_422.level < 2 ? 4 : 0);
          varData_363(varData_422, varData_347);
          varData_422.status = varData_341;
          varData_359(param_1);
          if (varData_422.pending !== 0) {
            varData_422.last_flush = -1;
            return _0x248f2d;
          }
        } else {
          varData_363(varData_422, (varData_422.gzhead.text ? 1 : 0) + (varData_422.gzhead.hcrc ? 2 : 0) + (!varData_422.gzhead.extra ? 0 : 4) + (!varData_422.gzhead.name ? 0 : 8) + (!varData_422.gzhead.comment ? 0 : 16));
          varData_363(varData_422, varData_422.gzhead.time & 255);
          varData_363(varData_422, varData_422.gzhead.time >> 8 & 255);
          varData_363(varData_422, varData_422.gzhead.time >> 16 & 255);
          varData_363(varData_422, varData_422.gzhead.time >> 24 & 255);
          varData_363(varData_422, varData_422.level === 9 ? 2 : varData_422.strategy >= _0x1254fb || varData_422.level < 2 ? 4 : 0);
          varData_363(varData_422, varData_422.gzhead.os & 255);
          if (varData_422.gzhead.extra && varData_422.gzhead.extra.length) {
            varData_363(varData_422, varData_422.gzhead.extra.length & 255);
            varData_363(varData_422, varData_422.gzhead.extra.length >> 8 & 255);
          }
          if (varData_422.gzhead.hcrc) {
            param_1.adler = varData_317(param_1.adler, varData_422.pending_buf, varData_422.pending, 0);
          }
          varData_422.gzindex = 0;
          varData_422.status = varData_337;
        }
      }
      if (varData_422.status === varData_337) {
        if (varData_422.gzhead.extra) {
          let varData_426 = varData_422.pending;
          let varData_427 = (varData_422.gzhead.extra.length & 65535) - varData_422.gzindex;
          while (varData_422.pending + varData_427 > varData_422.pending_buf_size) {
            let varData_428 = varData_422.pending_buf_size - varData_422.pending;
            varData_422.pending_buf.set(varData_422.gzhead.extra.subarray(varData_422.gzindex, varData_422.gzindex + varData_428), varData_422.pending);
            varData_422.pending = varData_422.pending_buf_size;
            if (varData_422.gzhead.hcrc && varData_422.pending > varData_426) {
              param_1.adler = varData_317(param_1.adler, varData_422.pending_buf, varData_422.pending - varData_426, varData_426);
            }
            varData_422.gzindex += varData_428;
            varData_359(param_1);
            if (varData_422.pending !== 0) {
              varData_422.last_flush = -1;
              return _0x248f2d;
            }
            varData_426 = 0;
            varData_427 -= varData_428;
          }
          let varData_429 = new Uint8Array(varData_422.gzhead.extra);
          varData_422.pending_buf.set(varData_429.subarray(varData_422.gzindex, varData_422.gzindex + varData_427), varData_422.pending);
          varData_422.pending += varData_427;
          if (varData_422.gzhead.hcrc && varData_422.pending > varData_426) {
            param_1.adler = varData_317(param_1.adler, varData_422.pending_buf, varData_422.pending - varData_426, varData_426);
          }
          varData_422.gzindex = 0;
        }
        varData_422.status = varData_338;
      }
      if (varData_422.status === varData_338) {
        if (varData_422.gzhead.name) {
          let varData_430 = varData_422.pending;
          let varData_431;
          do {
            if (varData_422.pending === varData_422.pending_buf_size) {
              if (varData_422.gzhead.hcrc && varData_422.pending > varData_430) {
                param_1.adler = varData_317(param_1.adler, varData_422.pending_buf, varData_422.pending - varData_430, varData_430);
              }
              varData_359(param_1);
              if (varData_422.pending !== 0) {
                varData_422.last_flush = -1;
                return _0x248f2d;
              }
              varData_430 = 0;
            }
            if (varData_422.gzindex < varData_422.gzhead.name.length) {
              varData_431 = varData_422.gzhead.name.charCodeAt(varData_422.gzindex++) & 255;
            } else {
              varData_431 = 0;
            }
            varData_363(varData_422, varData_431);
          } while (varData_431 !== 0);
          if (varData_422.gzhead.hcrc && varData_422.pending > varData_430) {
            param_1.adler = varData_317(param_1.adler, varData_422.pending_buf, varData_422.pending - varData_430, varData_430);
          }
          varData_422.gzindex = 0;
        }
        varData_422.status = varData_339;
      }
      if (varData_422.status === varData_339) {
        if (varData_422.gzhead.comment) {
          let varData_432 = varData_422.pending;
          let varData_433;
          do {
            if (varData_422.pending === varData_422.pending_buf_size) {
              if (varData_422.gzhead.hcrc && varData_422.pending > varData_432) {
                param_1.adler = varData_317(param_1.adler, varData_422.pending_buf, varData_422.pending - varData_432, varData_432);
              }
              varData_359(param_1);
              if (varData_422.pending !== 0) {
                varData_422.last_flush = -1;
                return _0x248f2d;
              }
              varData_432 = 0;
            }
            if (varData_422.gzindex < varData_422.gzhead.comment.length) {
              varData_433 = varData_422.gzhead.comment.charCodeAt(varData_422.gzindex++) & 255;
            } else {
              varData_433 = 0;
            }
            varData_363(varData_422, varData_433);
          } while (varData_433 !== 0);
          if (varData_422.gzhead.hcrc && varData_422.pending > varData_432) {
            param_1.adler = varData_317(param_1.adler, varData_422.pending_buf, varData_422.pending - varData_432, varData_432);
          }
        }
        varData_422.status = varData_340;
      }
      if (varData_422.status === varData_340) {
        if (varData_422.gzhead.hcrc) {
          if (varData_422.pending + 2 > varData_422.pending_buf_size) {
            varData_359(param_1);
            if (varData_422.pending !== 0) {
              varData_422.last_flush = -1;
              return _0x248f2d;
            }
          }
          varData_363(varData_422, param_1.adler & 255);
          varData_363(varData_422, param_1.adler >> 8 & 255);
          param_1.adler = 0;
        }
        varData_422.status = varData_341;
        varData_359(param_1);
        if (varData_422.pending !== 0) {
          varData_422.last_flush = -1;
          return _0x248f2d;
        }
      }
      if (param_1.avail_in !== 0 || varData_422.lookahead !== 0 || param_2 !== _0x4345ab && varData_422.status !== varData_342) {
        let varData_434 = varData_422.level === 0 ? varData_386(varData_422, param_2) : varData_422.strategy === _0x1254fb ? varData_406(varData_422, param_2) : varData_422.strategy === _0x7397c3 ? varData_400(varData_422, param_2) : varData_408[varData_422.level].func(varData_422, param_2);
        if (varData_434 === varData_345 || varData_434 === varData_346) {
          varData_422.status = varData_342;
        }
        if (varData_434 === varData_343 || varData_434 === varData_345) {
          if (param_1.avail_out === 0) {
            varData_422.last_flush = -1;
          }
          return _0x248f2d;
        }
        if (varData_434 === varData_344) {
          if (param_2 === _0x3ca909) {
            _0x4d13cb(varData_422);
          } else if (param_2 !== _0xc729b7) {
            _0x3b4816(varData_422, 0, 0, false);
            if (param_2 === _0x1470f5) {
              varData_350(varData_422.head);
              if (varData_422.lookahead === 0) {
                varData_422.strstart = 0;
                varData_422.block_start = 0;
                varData_422.insert = 0;
              }
            }
          }
          varData_359(param_1);
          if (param_1.avail_out === 0) {
            varData_422.last_flush = -1;
            return _0x248f2d;
          }
        }
      }
      if (param_2 !== _0xf782ec) {
        return _0x248f2d;
      }
      if (varData_422.wrap <= 0) {
        return _0x3374b1;
      }
      if (varData_422.wrap === 2) {
        varData_363(varData_422, param_1.adler & 255);
        varData_363(varData_422, param_1.adler >> 8 & 255);
        varData_363(varData_422, param_1.adler >> 16 & 255);
        varData_363(varData_422, param_1.adler >> 24 & 255);
        varData_363(varData_422, param_1.total_in & 255);
        varData_363(varData_422, param_1.total_in >> 8 & 255);
        varData_363(varData_422, param_1.total_in >> 16 & 255);
        varData_363(varData_422, param_1.total_in >> 24 & 255);
      } else {
        varData_364(varData_422, param_1.adler >>> 16);
        varData_364(varData_422, param_1.adler & 65535);
      }
      varData_359(param_1);
      if (varData_422.wrap > 0) {
        varData_422.wrap = -varData_422.wrap;
      }
      if (varData_422.pending !== 0) {
        return _0x248f2d;
      } else {
        return _0x3374b1;
      }
    };
    const varData_435 = (param_1) => {
      if (varData_410(param_1)) {
        return _0x8501ad;
      }
      const varData_436 = param_1.state.status;
      param_1.state = null;
      if (varData_436 === varData_341) {
        return varData_348(param_1, _0x32fb56);
      } else {
        return _0x248f2d;
      }
    };
    const varData_437 = (param_1, param_2) => {
      let varData_438 = param_2.length;
      if (varData_410(param_1)) {
        return _0x8501ad;
      }
      const varData_439 = param_1.state;
      const varData_440 = varData_439.wrap;
      if (varData_440 === 2 || varData_440 === 1 && varData_439.status !== varData_335 || varData_439.lookahead) {
        return _0x8501ad;
      }
      if (varData_440 === 1) {
        param_1.adler = varData_309(param_1.adler, param_2, varData_438, 0);
      }
      varData_439.wrap = 0;
      if (varData_438 >= varData_439.w_size) {
        if (varData_440 === 0) {
          varData_350(varData_439.head);
          varData_439.strstart = 0;
          varData_439.block_start = 0;
          varData_439.insert = 0;
        }
        let varData_441 = new Uint8Array(varData_439.w_size);
        varData_441.set(param_2.subarray(varData_438 - varData_439.w_size, varData_438), 0);
        param_2 = varData_441;
        varData_438 = varData_439.w_size;
      }
      const varData_442 = param_1.avail_in;
      const varData_443 = param_1.next_in;
      const varData_444 = param_1.input;
      param_1.avail_in = varData_438;
      param_1.next_in = 0;
      param_1.input = param_2;
      varData_381(varData_439);
      while (varData_439.lookahead >= varData_331) {
        let varData_445 = varData_439.strstart;
        let varData_446 = varData_439.lookahead - (varData_331 - 1);
        do {
          varData_439.ins_h = varData_358(varData_439, varData_439.ins_h, varData_439.window[varData_445 + varData_331 - 1]);
          varData_439.prev[varData_445 & varData_439.w_mask] = varData_439.head[varData_439.ins_h];
          varData_439.head[varData_439.ins_h] = varData_445;
          varData_445++;
        } while (--varData_446);
        varData_439.strstart = varData_445;
        varData_439.lookahead = varData_331 - 1;
        varData_381(varData_439);
      }
      varData_439.strstart += varData_439.lookahead;
      varData_439.block_start = varData_439.strstart;
      varData_439.insert = varData_439.lookahead;
      varData_439.lookahead = 0;
      varData_439.match_length = varData_439.prev_length = varData_331 - 1;
      varData_439.match_available = 0;
      param_1.next_in = varData_443;
      param_1.input = varData_444;
      param_1.avail_in = varData_442;
      varData_439.wrap = varData_440;
      return _0x248f2d;
    };
    var varData_447 = varData_420;
    var varData_448 = varData_417;
    var varData_449 = varData_414;
    var varData_450 = varData_412;
    var varData_451 = varData_416;
    var varData_452 = varData_421;
    var varData_453 = varData_435;
    var varData_454 = varData_437;
    var varData_455 = "pako deflate (from Nodeca project)";
    var varData_456 = {
      deflateInit: varData_447,
      deflateInit2: varData_448,
      deflateReset: varData_449,
      deflateResetKeep: varData_450,
      deflateSetHeader: varData_451,
      deflate: varData_452,
      deflateEnd: varData_453,
      deflateSetDictionary: varData_454,
      deflateInfo: varData_455
    };
    var varData_457 = varData_456;
    const varData_458 = (param_1, param_2) => {
      return Object.prototype.hasOwnProperty.call(param_1, param_2);
    };
    function handleAction_71(param_1) {
      const varData_459 = Array.prototype.slice.call(arguments, 1);
      while (varData_459.length) {
        const varData_460 = varData_459.shift();
        if (!varData_460) {
          continue;
        }
        if (typeof varData_460 !== "object") {
          throw new TypeError(varData_460 + "must be non-object");
        }
        for (const varData_461 in varData_460) {
          if (varData_458(varData_460, varData_461)) {
            param_1[varData_461] = varData_460[varData_461];
          }
        }
      }
      return param_1;
    }
    var varData_462 = (param_1) => {
      let varData_463 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length; loopIdx < loopIdx_1; loopIdx++) {
        varData_463 += param_1[loopIdx].length;
      }
      const varData_464 = new Uint8Array(varData_463);
      for (let loopIdx = 0, loopIdx_1 = 0, loopIdx_2 = param_1.length; loopIdx < loopIdx_2; loopIdx++) {
        let varData_465 = param_1[loopIdx];
        varData_464.set(varData_465, loopIdx_1);
        loopIdx_1 += varData_465.length;
      }
      return varData_464;
    };
    var varData_466 = {
      assign: handleAction_71,
      flattenChunks: varData_462
    };
    var varData_467 = varData_466;
    let isEnabled = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (err) {
      isEnabled = false;
    }
    const varData_468 = new Uint8Array(256);
    for (let loopIdx = 0; loopIdx < 256; loopIdx++) {
      varData_468[loopIdx] = loopIdx >= 252 ? 6 : loopIdx >= 248 ? 5 : loopIdx >= 240 ? 4 : loopIdx >= 224 ? 3 : loopIdx >= 192 ? 2 : 1;
    }
    varData_468[254] = varData_468[254] = 1;
    var varData_469 = (param_1) => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(param_1);
      }
      let varData_470;
      let varData_471;
      let varData_472;
      let varData_473;
      let varData_474;
      let varData_475 = param_1.length;
      let varData_476 = 0;
      for (varData_473 = 0; varData_473 < varData_475; varData_473++) {
        varData_471 = param_1.charCodeAt(varData_473);
        if ((varData_471 & 64512) === 55296 && varData_473 + 1 < varData_475) {
          varData_472 = param_1.charCodeAt(varData_473 + 1);
          if ((varData_472 & 64512) === 56320) {
            varData_471 = 65536 + (varData_471 - 55296 << 10) + (varData_472 - 56320);
            varData_473++;
          }
        }
        varData_476 += varData_471 < 128 ? 1 : varData_471 < 2048 ? 2 : varData_471 < 65536 ? 3 : 4;
      }
      varData_470 = new Uint8Array(varData_476);
      varData_474 = 0;
      varData_473 = 0;
      for (; varData_474 < varData_476; varData_473++) {
        varData_471 = param_1.charCodeAt(varData_473);
        if ((varData_471 & 64512) === 55296 && varData_473 + 1 < varData_475) {
          varData_472 = param_1.charCodeAt(varData_473 + 1);
          if ((varData_472 & 64512) === 56320) {
            varData_471 = 65536 + (varData_471 - 55296 << 10) + (varData_472 - 56320);
            varData_473++;
          }
        }
        if (varData_471 < 128) {
          varData_470[varData_474++] = varData_471;
        } else if (varData_471 < 2048) {
          varData_470[varData_474++] = varData_471 >>> 6 | 192;
          varData_470[varData_474++] = varData_471 & 63 | 128;
        } else if (varData_471 < 65536) {
          varData_470[varData_474++] = varData_471 >>> 12 | 224;
          varData_470[varData_474++] = varData_471 >>> 6 & 63 | 128;
          varData_470[varData_474++] = varData_471 & 63 | 128;
        } else {
          varData_470[varData_474++] = varData_471 >>> 18 | 240;
          varData_470[varData_474++] = varData_471 >>> 12 & 63 | 128;
          varData_470[varData_474++] = varData_471 >>> 6 & 63 | 128;
          varData_470[varData_474++] = varData_471 & 63 | 128;
        }
      }
      return varData_470;
    };
    const varData_477 = (param_1, param_2) => {
      if (param_2 < 65534) {
        if (param_1.subarray && isEnabled) {
          return String.fromCharCode.apply(null, param_1.length === param_2 ? param_1 : param_1.subarray(0, param_2));
        }
      }
      let varData_478 = "";
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_478 += String.fromCharCode(param_1[loopIdx]);
      }
      return varData_478;
    };
    var varData_479 = (param_1, param_2) => {
      const varData_480 = param_2 || param_1.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(param_1.subarray(0, param_2));
      }
      let varData_481;
      let varData_482;
      const varData_483 = new Array(varData_480 * 2);
      varData_482 = 0;
      varData_481 = 0;
      while (varData_481 < varData_480) {
        let varData_484 = param_1[varData_481++];
        if (varData_484 < 128) {
          varData_483[varData_482++] = varData_484;
          continue;
        }
        let varData_485 = varData_468[varData_484];
        if (varData_485 > 4) {
          varData_483[varData_482++] = 65533;
          varData_481 += varData_485 - 1;
          continue;
        }
        varData_484 &= varData_485 === 2 ? 31 : varData_485 === 3 ? 15 : 7;
        while (varData_485 > 1 && varData_481 < varData_480) {
          varData_484 = varData_484 << 6 | param_1[varData_481++] & 63;
          varData_485--;
        }
        if (varData_485 > 1) {
          varData_483[varData_482++] = 65533;
          continue;
        }
        if (varData_484 < 65536) {
          varData_483[varData_482++] = varData_484;
        } else {
          varData_484 -= 65536;
          varData_483[varData_482++] = varData_484 >> 10 & 1023 | 55296;
          varData_483[varData_482++] = varData_484 & 1023 | 56320;
        }
      }
      return varData_477(varData_483, varData_482);
    };
    var varData_486 = (param_1, param_2) => {
      param_2 = param_2 || param_1.length;
      if (param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      let varData_487 = param_2 - 1;
      while (varData_487 >= 0 && (param_1[varData_487] & 192) === 128) {
        varData_487--;
      }
      if (varData_487 < 0) {
        return param_2;
      }
      if (varData_487 === 0) {
        return param_2;
      }
      if (varData_487 + varData_468[param_1[varData_487]] > param_2) {
        return varData_487;
      } else {
        return param_2;
      }
    };
    var varData_488 = {
      string2buf: varData_469,
      buf2string: varData_479,
      utf8border: varData_486
    };
    var varData_489 = varData_488;
    function handleAction_72() {
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
    var varData_490 = handleAction_72;
    const varData_491 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x4081d5,
      Z_SYNC_FLUSH: _0xeb2ac3,
      Z_FULL_FLUSH: _0x2e1970,
      Z_FINISH: _0x5e9600,
      Z_OK: _0x2150c1,
      Z_STREAM_END: _0x2c5059,
      Z_DEFAULT_COMPRESSION: _0x39849f,
      Z_DEFAULT_STRATEGY: _0x205d37,
      Z_DEFLATED: _0x47e0cd
    } = varData_320;
    function handleAction_73(param_1) {
      var varData_492 = {
        level: _0x39849f,
        method: _0x47e0cd,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: _0x205d37
      };
      this.options = varData_467.assign(varData_492, param_1 || {});
      let varData_493 = this.options;
      if (varData_493.raw && varData_493.windowBits > 0) {
        varData_493.windowBits = -varData_493.windowBits;
      } else if (varData_493.gzip && varData_493.windowBits > 0 && varData_493.windowBits < 16) {
        varData_493.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_490();
      this.strm.avail_out = 0;
      let varData_494 = varData_457.deflateInit2(this.strm, varData_493.level, varData_493.method, varData_493.windowBits, varData_493.memLevel, varData_493.strategy);
      if (varData_494 !== _0x2150c1) {
        throw new Error(varData_318[varData_494]);
      }
      if (varData_493.header) {
        varData_457.deflateSetHeader(this.strm, varData_493.header);
      }
      if (varData_493.dictionary) {
        let varData_495;
        if (typeof varData_493.dictionary === "string") {
          varData_495 = varData_489.string2buf(varData_493.dictionary);
        } else if (varData_491.call(varData_493.dictionary) === "[object ArrayBuffer]") {
          varData_495 = new Uint8Array(varData_493.dictionary);
        } else {
          varData_495 = varData_493.dictionary;
        }
        varData_494 = varData_457.deflateSetDictionary(this.strm, varData_495);
        if (varData_494 !== _0x2150c1) {
          throw new Error(varData_318[varData_494]);
        }
        this._dict_set = true;
      }
    }
    handleAction_73.prototype.push = function(param_1, param_2) {
      const varData_496 = this.strm;
      const varData_497 = this.options.chunkSize;
      let varData_498;
      let varData_499;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_499 = param_2;
      } else {
        varData_499 = param_2 === true ? _0x5e9600 : _0x4081d5;
      }
      if (typeof param_1 === "string") {
        varData_496.input = varData_489.string2buf(param_1);
      } else if (varData_491.call(param_1) === "[object ArrayBuffer]") {
        varData_496.input = new Uint8Array(param_1);
      } else {
        varData_496.input = param_1;
      }
      varData_496.next_in = 0;
      varData_496.avail_in = varData_496.input.length;
      while (true) {
        if (varData_496.avail_out === 0) {
          varData_496.output = new Uint8Array(varData_497);
          varData_496.next_out = 0;
          varData_496.avail_out = varData_497;
        }
        if ((varData_499 === _0xeb2ac3 || varData_499 === _0x2e1970) && varData_496.avail_out <= 6) {
          this.onData(varData_496.output.subarray(0, varData_496.next_out));
          varData_496.avail_out = 0;
          continue;
        }
        varData_498 = varData_457.deflate(varData_496, varData_499);
        if (varData_498 === _0x2c5059) {
          if (varData_496.next_out > 0) {
            this.onData(varData_496.output.subarray(0, varData_496.next_out));
          }
          varData_498 = varData_457.deflateEnd(this.strm);
          this.onEnd(varData_498);
          this.ended = true;
          return varData_498 === _0x2150c1;
        }
        if (varData_496.avail_out === 0) {
          this.onData(varData_496.output);
          continue;
        }
        if (varData_499 > 0 && varData_496.next_out > 0) {
          this.onData(varData_496.output.subarray(0, varData_496.next_out));
          varData_496.avail_out = 0;
          continue;
        }
        if (varData_496.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_73.prototype.onData = function(param_1) {
      this.chunks.push(param_1);
    };
    handleAction_73.prototype.onEnd = function(param_1) {
      if (param_1 === _0x2150c1) {
        this.result = varData_467.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_74(param_1, param_2) {
      const varData_500 = new handleAction_73(param_2);
      varData_500.push(param_1, true);
      if (varData_500.err) {
        throw varData_500.msg || varData_318[varData_500.err];
      }
      return varData_500.result;
    }
    function handleAction_75(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.raw = true;
      return handleAction_74(param_1, param_2);
    }
    function handleAction_76(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.gzip = true;
      return handleAction_74(param_1, param_2);
    }
    var varData_501 = handleAction_73;
    var varData_502 = handleAction_74;
    var varData_503 = handleAction_75;
    var varData_504 = handleAction_76;
    var varData_505 = varData_320;
    var varData_506 = {
      Deflate: varData_501,
      deflate: varData_502,
      deflateRaw: varData_503,
      gzip: varData_504,
      constants: varData_505
    };
    var varData_507 = varData_506;
    const varData_508 = 16209;
    const varData_509 = 16191;
    var varData_510 = function _0x3e6a05(param_1, param_2) {
      let varData_511;
      let varData_512;
      let varData_513;
      let varData_514;
      let varData_515;
      let varData_516;
      let varData_517;
      let varData_518;
      let varData_519;
      let varData_520;
      let varData_521;
      let varData_522;
      let varData_523;
      let varData_524;
      let varData_525;
      let varData_526;
      let varData_527;
      let varData_528;
      let varData_529;
      let varData_530;
      let varData_531;
      let varData_532;
      let varData_533;
      let varData_534;
      const varData_535 = param_1.state;
      varData_511 = param_1.next_in;
      varData_533 = param_1.input;
      varData_512 = varData_511 + (param_1.avail_in - 5);
      varData_513 = param_1.next_out;
      varData_534 = param_1.output;
      varData_514 = varData_513 - (param_2 - param_1.avail_out);
      varData_515 = varData_513 + (param_1.avail_out - 257);
      varData_516 = varData_535.dmax;
      varData_517 = varData_535.wsize;
      varData_518 = varData_535.whave;
      varData_519 = varData_535.wnext;
      varData_520 = varData_535.window;
      varData_521 = varData_535.hold;
      varData_522 = varData_535.bits;
      varData_523 = varData_535.lencode;
      varData_524 = varData_535.distcode;
      varData_525 = (1 << varData_535.lenbits) - 1;
      varData_526 = (1 << varData_535.distbits) - 1;
      _0xff2247: do {
        if (varData_522 < 15) {
          varData_521 += varData_533[varData_511++] << varData_522;
          varData_522 += 8;
          varData_521 += varData_533[varData_511++] << varData_522;
          varData_522 += 8;
        }
        varData_527 = varData_523[varData_521 & varData_525];
        _0x5659ac: while (true) {
          varData_528 = varData_527 >>> 24;
          varData_521 >>>= varData_528;
          varData_522 -= varData_528;
          varData_528 = varData_527 >>> 16 & 255;
          if (varData_528 === 0) {
            varData_534[varData_513++] = varData_527 & 65535;
          } else if (varData_528 & 16) {
            varData_529 = varData_527 & 65535;
            varData_528 &= 15;
            if (varData_528) {
              if (varData_522 < varData_528) {
                varData_521 += varData_533[varData_511++] << varData_522;
                varData_522 += 8;
              }
              varData_529 += varData_521 & (1 << varData_528) - 1;
              varData_521 >>>= varData_528;
              varData_522 -= varData_528;
            }
            if (varData_522 < 15) {
              varData_521 += varData_533[varData_511++] << varData_522;
              varData_522 += 8;
              varData_521 += varData_533[varData_511++] << varData_522;
              varData_522 += 8;
            }
            varData_527 = varData_524[varData_521 & varData_526];
            _0x59c397: while (true) {
              varData_528 = varData_527 >>> 24;
              varData_521 >>>= varData_528;
              varData_522 -= varData_528;
              varData_528 = varData_527 >>> 16 & 255;
              if (varData_528 & 16) {
                varData_530 = varData_527 & 65535;
                varData_528 &= 15;
                if (varData_522 < varData_528) {
                  varData_521 += varData_533[varData_511++] << varData_522;
                  varData_522 += 8;
                  if (varData_522 < varData_528) {
                    varData_521 += varData_533[varData_511++] << varData_522;
                    varData_522 += 8;
                  }
                }
                varData_530 += varData_521 & (1 << varData_528) - 1;
                if (varData_530 > varData_516) {
                  param_1.msg = "invalid distance too far back";
                  varData_535.mode = varData_508;
                  break _0xff2247;
                }
                varData_521 >>>= varData_528;
                varData_522 -= varData_528;
                varData_528 = varData_513 - varData_514;
                if (varData_530 > varData_528) {
                  varData_528 = varData_530 - varData_528;
                  if (varData_528 > varData_518) {
                    if (varData_535.sane) {
                      param_1.msg = "invalid distance too far back";
                      varData_535.mode = varData_508;
                      break _0xff2247;
                    }
                  }
                  varData_531 = 0;
                  varData_532 = varData_520;
                  if (varData_519 === 0) {
                    varData_531 += varData_517 - varData_528;
                    if (varData_528 < varData_529) {
                      varData_529 -= varData_528;
                      do {
                        varData_534[varData_513++] = varData_520[varData_531++];
                      } while (--varData_528);
                      varData_531 = varData_513 - varData_530;
                      varData_532 = varData_534;
                    }
                  } else if (varData_519 < varData_528) {
                    varData_531 += varData_517 + varData_519 - varData_528;
                    varData_528 -= varData_519;
                    if (varData_528 < varData_529) {
                      varData_529 -= varData_528;
                      do {
                        varData_534[varData_513++] = varData_520[varData_531++];
                      } while (--varData_528);
                      varData_531 = 0;
                      if (varData_519 < varData_529) {
                        varData_528 = varData_519;
                        varData_529 -= varData_528;
                        do {
                          varData_534[varData_513++] = varData_520[varData_531++];
                        } while (--varData_528);
                        varData_531 = varData_513 - varData_530;
                        varData_532 = varData_534;
                      }
                    }
                  } else {
                    varData_531 += varData_519 - varData_528;
                    if (varData_528 < varData_529) {
                      varData_529 -= varData_528;
                      do {
                        varData_534[varData_513++] = varData_520[varData_531++];
                      } while (--varData_528);
                      varData_531 = varData_513 - varData_530;
                      varData_532 = varData_534;
                    }
                  }
                  while (varData_529 > 2) {
                    varData_534[varData_513++] = varData_532[varData_531++];
                    varData_534[varData_513++] = varData_532[varData_531++];
                    varData_534[varData_513++] = varData_532[varData_531++];
                    varData_529 -= 3;
                  }
                  if (varData_529) {
                    varData_534[varData_513++] = varData_532[varData_531++];
                    if (varData_529 > 1) {
                      varData_534[varData_513++] = varData_532[varData_531++];
                    }
                  }
                } else {
                  varData_531 = varData_513 - varData_530;
                  do {
                    varData_534[varData_513++] = varData_534[varData_531++];
                    varData_534[varData_513++] = varData_534[varData_531++];
                    varData_534[varData_513++] = varData_534[varData_531++];
                    varData_529 -= 3;
                  } while (varData_529 > 2);
                  if (varData_529) {
                    varData_534[varData_513++] = varData_534[varData_531++];
                    if (varData_529 > 1) {
                      varData_534[varData_513++] = varData_534[varData_531++];
                    }
                  }
                }
              } else if ((varData_528 & 64) === 0) {
                varData_527 = varData_524[(varData_527 & 65535) + (varData_521 & (1 << varData_528) - 1)];
                continue _0x59c397;
              } else {
                param_1.msg = "invalid distance code";
                varData_535.mode = varData_508;
                break _0xff2247;
              }
              break;
            }
          } else if ((varData_528 & 64) === 0) {
            varData_527 = varData_523[(varData_527 & 65535) + (varData_521 & (1 << varData_528) - 1)];
            continue _0x5659ac;
          } else if (varData_528 & 32) {
            varData_535.mode = varData_509;
            break _0xff2247;
          } else {
            param_1.msg = "invalid literal/length code";
            varData_535.mode = varData_508;
            break _0xff2247;
          }
          break;
        }
      } while (varData_511 < varData_512 && varData_513 < varData_515);
      varData_529 = varData_522 >> 3;
      varData_511 -= varData_529;
      varData_522 -= varData_529 << 3;
      varData_521 &= (1 << varData_522) - 1;
      param_1.next_in = varData_511;
      param_1.next_out = varData_513;
      param_1.avail_in = varData_511 < varData_512 ? 5 + (varData_512 - varData_511) : 5 - (varData_511 - varData_512);
      param_1.avail_out = varData_513 < varData_515 ? 257 + (varData_515 - varData_513) : 257 - (varData_513 - varData_515);
      varData_535.hold = varData_521;
      varData_535.bits = varData_522;
      return;
    };
    const varData_536 = 15;
    const varData_537 = 852;
    const varData_538 = 592;
    const varData_539 = 0;
    const varData_540 = 1;
    const varData_541 = 2;
    const varData_542 = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const varData_543 = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const varData_544 = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const varData_545 = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    const varData_546 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
      const varData_547 = param_8.bits;
      let varData_548 = 0;
      let varData_549 = 0;
      let varData_550 = 0;
      let varData_551 = 0;
      let varData_552 = 0;
      let varData_553 = 0;
      let varData_554 = 0;
      let varData_555 = 0;
      let varData_556 = 0;
      let varData_557 = 0;
      let varData_558;
      let varData_559;
      let varData_560;
      let varData_561;
      let varData_562;
      let varData_563 = null;
      let varData_564;
      const varData_565 = new Uint16Array(varData_536 + 1);
      const varData_566 = new Uint16Array(varData_536 + 1);
      let varData_567 = null;
      let varData_568;
      let varData_569;
      let varData_570;
      for (varData_548 = 0; varData_548 <= varData_536; varData_548++) {
        varData_565[varData_548] = 0;
      }
      for (varData_549 = 0; varData_549 < param_4; varData_549++) {
        varData_565[param_2[param_3 + varData_549]]++;
      }
      varData_552 = varData_547;
      for (varData_551 = varData_536; varData_551 >= 1; varData_551--) {
        if (varData_565[varData_551] !== 0) {
          break;
        }
      }
      if (varData_552 > varData_551) {
        varData_552 = varData_551;
      }
      if (varData_551 === 0) {
        param_5[param_6++] = 20971520;
        param_5[param_6++] = 20971520;
        param_8.bits = 1;
        return 0;
      }
      for (varData_550 = 1; varData_550 < varData_551; varData_550++) {
        if (varData_565[varData_550] !== 0) {
          break;
        }
      }
      if (varData_552 < varData_550) {
        varData_552 = varData_550;
      }
      varData_555 = 1;
      for (varData_548 = 1; varData_548 <= varData_536; varData_548++) {
        varData_555 <<= 1;
        varData_555 -= varData_565[varData_548];
        if (varData_555 < 0) {
          return -1;
        }
      }
      if (varData_555 > 0 && (param_1 === varData_539 || varData_551 !== 1)) {
        return -1;
      }
      varData_566[1] = 0;
      for (varData_548 = 1; varData_548 < varData_536; varData_548++) {
        varData_566[varData_548 + 1] = varData_566[varData_548] + varData_565[varData_548];
      }
      for (varData_549 = 0; varData_549 < param_4; varData_549++) {
        if (param_2[param_3 + varData_549] !== 0) {
          param_7[varData_566[param_2[param_3 + varData_549]]++] = varData_549;
        }
      }
      if (param_1 === varData_539) {
        varData_563 = varData_567 = param_7;
        varData_564 = 20;
      } else if (param_1 === varData_540) {
        varData_563 = varData_542;
        varData_567 = varData_543;
        varData_564 = 257;
      } else {
        varData_563 = varData_544;
        varData_567 = varData_545;
        varData_564 = 0;
      }
      varData_557 = 0;
      varData_549 = 0;
      varData_548 = varData_550;
      varData_562 = param_6;
      varData_553 = varData_552;
      varData_554 = 0;
      varData_560 = -1;
      varData_556 = 1 << varData_552;
      varData_561 = varData_556 - 1;
      if (param_1 === varData_540 && varData_556 > varData_537 || param_1 === varData_541 && varData_556 > varData_538) {
        return 1;
      }
      while (true) {
        varData_568 = varData_548 - varData_554;
        if (param_7[varData_549] + 1 < varData_564) {
          varData_569 = 0;
          varData_570 = param_7[varData_549];
        } else if (param_7[varData_549] >= varData_564) {
          varData_569 = varData_567[param_7[varData_549] - varData_564];
          varData_570 = varData_563[param_7[varData_549] - varData_564];
        } else {
          varData_569 = 96;
          varData_570 = 0;
        }
        varData_558 = 1 << varData_548 - varData_554;
        varData_559 = 1 << varData_553;
        varData_550 = varData_559;
        do {
          varData_559 -= varData_558;
          param_5[varData_562 + (varData_557 >> varData_554) + varData_559] = varData_568 << 24 | varData_569 << 16 | varData_570 | 0;
        } while (varData_559 !== 0);
        varData_558 = 1 << varData_548 - 1;
        while (varData_557 & varData_558) {
          varData_558 >>= 1;
        }
        if (varData_558 !== 0) {
          varData_557 &= varData_558 - 1;
          varData_557 += varData_558;
        } else {
          varData_557 = 0;
        }
        varData_549++;
        if (--varData_565[varData_548] === 0) {
          if (varData_548 === varData_551) {
            break;
          }
          varData_548 = param_2[param_3 + param_7[varData_549]];
        }
        if (varData_548 > varData_552 && (varData_557 & varData_561) !== varData_560) {
          if (varData_554 === 0) {
            varData_554 = varData_552;
          }
          varData_562 += varData_550;
          varData_553 = varData_548 - varData_554;
          varData_555 = 1 << varData_553;
          while (varData_553 + varData_554 < varData_551) {
            varData_555 -= varData_565[varData_553 + varData_554];
            if (varData_555 <= 0) {
              break;
            }
            varData_553++;
            varData_555 <<= 1;
          }
          varData_556 += 1 << varData_553;
          if (param_1 === varData_540 && varData_556 > varData_537 || param_1 === varData_541 && varData_556 > varData_538) {
            return 1;
          }
          varData_560 = varData_557 & varData_561;
          param_5[varData_560] = varData_552 << 24 | varData_553 << 16 | varData_562 - param_6 | 0;
        }
      }
      if (varData_557 !== 0) {
        param_5[varData_562 + varData_557] = varData_548 - varData_554 << 24 | 4194304 | 0;
      }
      param_8.bits = varData_552;
      return 0;
    };
    var varData_571 = varData_546;
    const varData_572 = 0;
    const varData_573 = 1;
    const varData_574 = 2;
    const {
      Z_FINISH: _0x5a5bd8,
      Z_BLOCK: _0x5aa6a9,
      Z_TREES: _0x474636,
      Z_OK: _0x48e529,
      Z_STREAM_END: _0xce09dc,
      Z_NEED_DICT: _0xfe7038,
      Z_STREAM_ERROR: _0x41d50b,
      Z_DATA_ERROR: _0x2b7882,
      Z_MEM_ERROR: _0x597f75,
      Z_BUF_ERROR: _0x36239e,
      Z_DEFLATED: _0x5c73b0
    } = varData_320;
    const varData_575 = 16180;
    const varData_576 = 16181;
    const varData_577 = 16182;
    const varData_578 = 16183;
    const varData_579 = 16184;
    const varData_580 = 16185;
    const varData_581 = 16186;
    const varData_582 = 16187;
    const varData_583 = 16188;
    const varData_584 = 16189;
    const varData_585 = 16190;
    const varData_586 = 16191;
    const varData_587 = 16192;
    const varData_588 = 16193;
    const varData_589 = 16194;
    const varData_590 = 16195;
    const varData_591 = 16196;
    const varData_592 = 16197;
    const varData_593 = 16198;
    const varData_594 = 16199;
    const varData_595 = 16200;
    const varData_596 = 16201;
    const varData_597 = 16202;
    const varData_598 = 16203;
    const varData_599 = 16204;
    const varData_600 = 16205;
    const varData_601 = 16206;
    const varData_602 = 16207;
    const varData_603 = 16208;
    const varData_604 = 16209;
    const varData_605 = 16210;
    const varData_606 = 16211;
    const varData_607 = 852;
    const varData_608 = 592;
    const varData_609 = 15;
    const varData_610 = varData_609;
    const varData_611 = (param_1) => {
      return (param_1 >>> 24 & 255) + (param_1 >>> 8 & 65280) + ((param_1 & 65280) << 8) + ((param_1 & 255) << 24);
    };
    function handleAction_77() {
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
    const varData_612 = (param_1) => {
      if (!param_1) {
        return 1;
      }
      const varData_613 = param_1.state;
      if (!varData_613 || varData_613.strm !== param_1 || varData_613.mode < varData_575 || varData_613.mode > varData_606) {
        return 1;
      }
      return 0;
    };
    const varData_614 = (param_1) => {
      if (varData_612(param_1)) {
        return _0x41d50b;
      }
      const varData_615 = param_1.state;
      param_1.total_in = param_1.total_out = varData_615.total = 0;
      param_1.msg = "";
      if (varData_615.wrap) {
        param_1.adler = varData_615.wrap & 1;
      }
      varData_615.mode = varData_575;
      varData_615.last = 0;
      varData_615.havedict = 0;
      varData_615.flags = -1;
      varData_615.dmax = 32768;
      varData_615.head = null;
      varData_615.hold = 0;
      varData_615.bits = 0;
      varData_615.lencode = varData_615.lendyn = new Int32Array(varData_607);
      varData_615.distcode = varData_615.distdyn = new Int32Array(varData_608);
      varData_615.sane = 1;
      varData_615.back = -1;
      return _0x48e529;
    };
    const varData_616 = (param_1) => {
      if (varData_612(param_1)) {
        return _0x41d50b;
      }
      const varData_617 = param_1.state;
      varData_617.wsize = 0;
      varData_617.whave = 0;
      varData_617.wnext = 0;
      return varData_614(param_1);
    };
    const varData_618 = (param_1, param_2) => {
      let varData_619;
      if (varData_612(param_1)) {
        return _0x41d50b;
      }
      const varData_620 = param_1.state;
      if (param_2 < 0) {
        varData_619 = 0;
        param_2 = -param_2;
      } else {
        varData_619 = (param_2 >> 4) + 5;
        if (param_2 < 48) {
          param_2 &= 15;
        }
      }
      if (param_2 && (param_2 < 8 || param_2 > 15)) {
        return _0x41d50b;
      }
      if (varData_620.window !== null && varData_620.wbits !== param_2) {
        varData_620.window = null;
      }
      varData_620.wrap = varData_619;
      varData_620.wbits = param_2;
      return varData_616(param_1);
    };
    const varData_621 = (param_1, param_2) => {
      if (!param_1) {
        return _0x41d50b;
      }
      const varData_622 = new handleAction_77();
      param_1.state = varData_622;
      varData_622.strm = param_1;
      varData_622.window = null;
      varData_622.mode = varData_575;
      const varData_623 = varData_618(param_1, param_2);
      if (varData_623 !== _0x48e529) {
        param_1.state = null;
      }
      return varData_623;
    };
    const varData_624 = (param_1) => {
      return varData_621(param_1, varData_610);
    };
    let isEnabled_1 = true;
    let varData_625;
    let varData_626;
    const varData_627 = (param_1) => {
      if (isEnabled_1) {
        varData_625 = new Int32Array(512);
        varData_626 = new Int32Array(32);
        let varData_628 = 0;
        while (varData_628 < 144) {
          param_1.lens[varData_628++] = 8;
        }
        while (varData_628 < 256) {
          param_1.lens[varData_628++] = 9;
        }
        while (varData_628 < 280) {
          param_1.lens[varData_628++] = 7;
        }
        while (varData_628 < 288) {
          param_1.lens[varData_628++] = 8;
        }
        varData_571(varData_573, param_1.lens, 0, 288, varData_625, 0, param_1.work, {
          bits: 9
        });
        varData_628 = 0;
        while (varData_628 < 32) {
          param_1.lens[varData_628++] = 5;
        }
        varData_571(varData_574, param_1.lens, 0, 32, varData_626, 0, param_1.work, {
          bits: 5
        });
        isEnabled_1 = false;
      }
      param_1.lencode = varData_625;
      param_1.lenbits = 9;
      param_1.distcode = varData_626;
      param_1.distbits = 5;
    };
    const varData_629 = (param_1, param_2, param_3, param_4) => {
      let varData_630;
      const varData_631 = param_1.state;
      if (varData_631.window === null) {
        varData_631.wsize = 1 << varData_631.wbits;
        varData_631.wnext = 0;
        varData_631.whave = 0;
        varData_631.window = new Uint8Array(varData_631.wsize);
      }
      if (param_4 >= varData_631.wsize) {
        varData_631.window.set(param_2.subarray(param_3 - varData_631.wsize, param_3), 0);
        varData_631.wnext = 0;
        varData_631.whave = varData_631.wsize;
      } else {
        varData_630 = varData_631.wsize - varData_631.wnext;
        if (varData_630 > param_4) {
          varData_630 = param_4;
        }
        varData_631.window.set(param_2.subarray(param_3 - param_4, param_3 - param_4 + varData_630), varData_631.wnext);
        param_4 -= varData_630;
        if (param_4) {
          varData_631.window.set(param_2.subarray(param_3 - param_4, param_3), 0);
          varData_631.wnext = param_4;
          varData_631.whave = varData_631.wsize;
        } else {
          varData_631.wnext += varData_630;
          if (varData_631.wnext === varData_631.wsize) {
            varData_631.wnext = 0;
          }
          if (varData_631.whave < varData_631.wsize) {
            varData_631.whave += varData_630;
          }
        }
      }
      return 0;
    };
    const varData_632 = (param_1, param_2) => {
      let varData_633;
      let varData_634;
      let varData_635;
      let varData_636;
      let varData_637;
      let varData_638;
      let varData_639;
      let varData_640;
      let varData_641;
      let varData_642;
      let varData_643;
      let varData_644;
      let varData_645;
      let varData_646;
      let varData_647 = 0;
      let varData_648;
      let varData_649;
      let varData_650;
      let varData_651;
      let varData_652;
      let varData_653;
      let varData_654;
      let varData_655;
      const varData_656 = new Uint8Array(4);
      let varData_657;
      let varData_658;
      const varData_659 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (varData_612(param_1) || !param_1.output || !param_1.input && param_1.avail_in !== 0) {
        return _0x41d50b;
      }
      varData_633 = param_1.state;
      if (varData_633.mode === varData_586) {
        varData_633.mode = varData_587;
      }
      varData_637 = param_1.next_out;
      varData_635 = param_1.output;
      varData_639 = param_1.avail_out;
      varData_636 = param_1.next_in;
      varData_634 = param_1.input;
      varData_638 = param_1.avail_in;
      varData_640 = varData_633.hold;
      varData_641 = varData_633.bits;
      varData_642 = varData_638;
      varData_643 = varData_639;
      varData_655 = _0x48e529;
      _0x259e4e: while (true) {
        switch (varData_633.mode) {
          case varData_575:
            if (varData_633.wrap === 0) {
              varData_633.mode = varData_587;
              break;
            }
            while (varData_641 < 16) {
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_638--;
              varData_640 += varData_634[varData_636++] << varData_641;
              varData_641 += 8;
            }
            if (varData_633.wrap & 2 && varData_640 === 35615) {
              if (varData_633.wbits === 0) {
                varData_633.wbits = 15;
              }
              varData_633.check = 0;
              varData_656[0] = varData_640 & 255;
              varData_656[1] = varData_640 >>> 8 & 255;
              varData_633.check = varData_317(varData_633.check, varData_656, 2, 0);
              varData_640 = 0;
              varData_641 = 0;
              varData_633.mode = varData_576;
              break;
            }
            if (varData_633.head) {
              varData_633.head.done = false;
            }
            if (!(varData_633.wrap & 1) || (((varData_640 & 255) << 8) + (varData_640 >> 8)) % 31) {
              param_1.msg = "incorrect header check";
              varData_633.mode = varData_604;
              break;
            }
            if ((varData_640 & 15) !== _0x5c73b0) {
              param_1.msg = "unknown compression method";
              varData_633.mode = varData_604;
              break;
            }
            varData_640 >>>= 4;
            varData_641 -= 4;
            varData_654 = (varData_640 & 15) + 8;
            if (varData_633.wbits === 0) {
              varData_633.wbits = varData_654;
            }
            if (varData_654 > 15 || varData_654 > varData_633.wbits) {
              param_1.msg = "invalid window size";
              varData_633.mode = varData_604;
              break;
            }
            varData_633.dmax = 1 << varData_633.wbits;
            varData_633.flags = 0;
            param_1.adler = varData_633.check = 1;
            varData_633.mode = varData_640 & 512 ? varData_584 : varData_586;
            varData_640 = 0;
            varData_641 = 0;
            break;
          case varData_576:
            while (varData_641 < 16) {
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_638--;
              varData_640 += varData_634[varData_636++] << varData_641;
              varData_641 += 8;
            }
            varData_633.flags = varData_640;
            if ((varData_633.flags & 255) !== _0x5c73b0) {
              param_1.msg = "unknown compression method";
              varData_633.mode = varData_604;
              break;
            }
            if (varData_633.flags & 57344) {
              param_1.msg = "unknown header flags set";
              varData_633.mode = varData_604;
              break;
            }
            if (varData_633.head) {
              varData_633.head.text = varData_640 >> 8 & 1;
            }
            if (varData_633.flags & 512 && varData_633.wrap & 4) {
              varData_656[0] = varData_640 & 255;
              varData_656[1] = varData_640 >>> 8 & 255;
              varData_633.check = varData_317(varData_633.check, varData_656, 2, 0);
            }
            varData_640 = 0;
            varData_641 = 0;
            varData_633.mode = varData_577;
          case varData_577:
            while (varData_641 < 32) {
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_638--;
              varData_640 += varData_634[varData_636++] << varData_641;
              varData_641 += 8;
            }
            if (varData_633.head) {
              varData_633.head.time = varData_640;
            }
            if (varData_633.flags & 512 && varData_633.wrap & 4) {
              varData_656[0] = varData_640 & 255;
              varData_656[1] = varData_640 >>> 8 & 255;
              varData_656[2] = varData_640 >>> 16 & 255;
              varData_656[3] = varData_640 >>> 24 & 255;
              varData_633.check = varData_317(varData_633.check, varData_656, 4, 0);
            }
            varData_640 = 0;
            varData_641 = 0;
            varData_633.mode = varData_578;
          case varData_578:
            while (varData_641 < 16) {
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_638--;
              varData_640 += varData_634[varData_636++] << varData_641;
              varData_641 += 8;
            }
            if (varData_633.head) {
              varData_633.head.xflags = varData_640 & 255;
              varData_633.head.os = varData_640 >> 8;
            }
            if (varData_633.flags & 512 && varData_633.wrap & 4) {
              varData_656[0] = varData_640 & 255;
              varData_656[1] = varData_640 >>> 8 & 255;
              varData_633.check = varData_317(varData_633.check, varData_656, 2, 0);
            }
            varData_640 = 0;
            varData_641 = 0;
            varData_633.mode = varData_579;
          case varData_579:
            if (varData_633.flags & 1024) {
              while (varData_641 < 16) {
                if (varData_638 === 0) {
                  break _0x259e4e;
                }
                varData_638--;
                varData_640 += varData_634[varData_636++] << varData_641;
                varData_641 += 8;
              }
              varData_633.length = varData_640;
              if (varData_633.head) {
                varData_633.head.extra_len = varData_640;
              }
              if (varData_633.flags & 512 && varData_633.wrap & 4) {
                varData_656[0] = varData_640 & 255;
                varData_656[1] = varData_640 >>> 8 & 255;
                varData_633.check = varData_317(varData_633.check, varData_656, 2, 0);
              }
              varData_640 = 0;
              varData_641 = 0;
            } else if (varData_633.head) {
              varData_633.head.extra = null;
            }
            varData_633.mode = varData_580;
          case varData_580:
            if (varData_633.flags & 1024) {
              varData_644 = varData_633.length;
              if (varData_644 > varData_638) {
                varData_644 = varData_638;
              }
              if (varData_644) {
                if (varData_633.head) {
                  varData_654 = varData_633.head.extra_len - varData_633.length;
                  if (!varData_633.head.extra) {
                    varData_633.head.extra = new Uint8Array(varData_633.head.extra_len);
                  }
                  varData_633.head.extra.set(varData_634.subarray(varData_636, varData_636 + varData_644), varData_654);
                }
                if (varData_633.flags & 512 && varData_633.wrap & 4) {
                  varData_633.check = varData_317(varData_633.check, varData_634, varData_644, varData_636);
                }
                varData_638 -= varData_644;
                varData_636 += varData_644;
                varData_633.length -= varData_644;
              }
              if (varData_633.length) {
                break _0x259e4e;
              }
            }
            varData_633.length = 0;
            varData_633.mode = varData_581;
          case varData_581:
            if (varData_633.flags & 2048) {
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_644 = 0;
              do {
                varData_654 = varData_634[varData_636 + varData_644++];
                if (varData_633.head && varData_654 && varData_633.length < 65536) {
                  varData_633.head.name += String.fromCharCode(varData_654);
                }
              } while (varData_654 && varData_644 < varData_638);
              if (varData_633.flags & 512 && varData_633.wrap & 4) {
                varData_633.check = varData_317(varData_633.check, varData_634, varData_644, varData_636);
              }
              varData_638 -= varData_644;
              varData_636 += varData_644;
              if (varData_654) {
                break _0x259e4e;
              }
            } else if (varData_633.head) {
              varData_633.head.name = null;
            }
            varData_633.length = 0;
            varData_633.mode = varData_582;
          case varData_582:
            if (varData_633.flags & 4096) {
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_644 = 0;
              do {
                varData_654 = varData_634[varData_636 + varData_644++];
                if (varData_633.head && varData_654 && varData_633.length < 65536) {
                  varData_633.head.comment += String.fromCharCode(varData_654);
                }
              } while (varData_654 && varData_644 < varData_638);
              if (varData_633.flags & 512 && varData_633.wrap & 4) {
                varData_633.check = varData_317(varData_633.check, varData_634, varData_644, varData_636);
              }
              varData_638 -= varData_644;
              varData_636 += varData_644;
              if (varData_654) {
                break _0x259e4e;
              }
            } else if (varData_633.head) {
              varData_633.head.comment = null;
            }
            varData_633.mode = varData_583;
          case varData_583:
            if (varData_633.flags & 512) {
              while (varData_641 < 16) {
                if (varData_638 === 0) {
                  break _0x259e4e;
                }
                varData_638--;
                varData_640 += varData_634[varData_636++] << varData_641;
                varData_641 += 8;
              }
              if (varData_633.wrap & 4 && varData_640 !== (varData_633.check & 65535)) {
                param_1.msg = "header crc mismatch";
                varData_633.mode = varData_604;
                break;
              }
              varData_640 = 0;
              varData_641 = 0;
            }
            if (varData_633.head) {
              varData_633.head.hcrc = varData_633.flags >> 9 & 1;
              varData_633.head.done = true;
            }
            param_1.adler = varData_633.check = 0;
            varData_633.mode = varData_586;
            break;
          case varData_584:
            while (varData_641 < 32) {
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_638--;
              varData_640 += varData_634[varData_636++] << varData_641;
              varData_641 += 8;
            }
            param_1.adler = varData_633.check = varData_611(varData_640);
            varData_640 = 0;
            varData_641 = 0;
            varData_633.mode = varData_585;
          case varData_585:
            if (varData_633.havedict === 0) {
              param_1.next_out = varData_637;
              param_1.avail_out = varData_639;
              param_1.next_in = varData_636;
              param_1.avail_in = varData_638;
              varData_633.hold = varData_640;
              varData_633.bits = varData_641;
              return _0xfe7038;
            }
            param_1.adler = varData_633.check = 1;
            varData_633.mode = varData_586;
          case varData_586:
            if (param_2 === _0x5aa6a9 || param_2 === _0x474636) {
              break _0x259e4e;
            }
          case varData_587:
            if (varData_633.last) {
              varData_640 >>>= varData_641 & 7;
              varData_641 -= varData_641 & 7;
              varData_633.mode = varData_601;
              break;
            }
            while (varData_641 < 3) {
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_638--;
              varData_640 += varData_634[varData_636++] << varData_641;
              varData_641 += 8;
            }
            varData_633.last = varData_640 & 1;
            varData_640 >>>= 1;
            varData_641 -= 1;
            switch (varData_640 & 3) {
              case 0:
                varData_633.mode = varData_588;
                break;
              case 1:
                varData_627(varData_633);
                varData_633.mode = varData_594;
                if (param_2 === _0x474636) {
                  varData_640 >>>= 2;
                  varData_641 -= 2;
                  break _0x259e4e;
                }
                break;
              case 2:
                varData_633.mode = varData_591;
                break;
              case 3:
                param_1.msg = "invalid block type";
                varData_633.mode = varData_604;
            }
            varData_640 >>>= 2;
            varData_641 -= 2;
            break;
          case varData_588:
            varData_640 >>>= varData_641 & 7;
            varData_641 -= varData_641 & 7;
            while (varData_641 < 32) {
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_638--;
              varData_640 += varData_634[varData_636++] << varData_641;
              varData_641 += 8;
            }
            if ((varData_640 & 65535) !== (varData_640 >>> 16 ^ 65535)) {
              param_1.msg = "invalid stored block lengths";
              varData_633.mode = varData_604;
              break;
            }
            varData_633.length = varData_640 & 65535;
            varData_640 = 0;
            varData_641 = 0;
            varData_633.mode = varData_589;
            if (param_2 === _0x474636) {
              break _0x259e4e;
            }
          case varData_589:
            varData_633.mode = varData_590;
          case varData_590:
            varData_644 = varData_633.length;
            if (varData_644) {
              if (varData_644 > varData_638) {
                varData_644 = varData_638;
              }
              if (varData_644 > varData_639) {
                varData_644 = varData_639;
              }
              if (varData_644 === 0) {
                break _0x259e4e;
              }
              varData_635.set(varData_634.subarray(varData_636, varData_636 + varData_644), varData_637);
              varData_638 -= varData_644;
              varData_636 += varData_644;
              varData_639 -= varData_644;
              varData_637 += varData_644;
              varData_633.length -= varData_644;
              break;
            }
            varData_633.mode = varData_586;
            break;
          case varData_591:
            while (varData_641 < 14) {
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_638--;
              varData_640 += varData_634[varData_636++] << varData_641;
              varData_641 += 8;
            }
            varData_633.nlen = (varData_640 & 31) + 257;
            varData_640 >>>= 5;
            varData_641 -= 5;
            varData_633.ndist = (varData_640 & 31) + 1;
            varData_640 >>>= 5;
            varData_641 -= 5;
            varData_633.ncode = (varData_640 & 15) + 4;
            varData_640 >>>= 4;
            varData_641 -= 4;
            if (varData_633.nlen > 286 || varData_633.ndist > 30) {
              param_1.msg = "too many length or distance symbols";
              varData_633.mode = varData_604;
              break;
            }
            varData_633.have = 0;
            varData_633.mode = varData_592;
          case varData_592:
            while (varData_633.have < varData_633.ncode) {
              while (varData_641 < 3) {
                if (varData_638 === 0) {
                  break _0x259e4e;
                }
                varData_638--;
                varData_640 += varData_634[varData_636++] << varData_641;
                varData_641 += 8;
              }
              varData_633.lens[varData_659[varData_633.have++]] = varData_640 & 7;
              varData_640 >>>= 3;
              varData_641 -= 3;
            }
            while (varData_633.have < 19) {
              varData_633.lens[varData_659[varData_633.have++]] = 0;
            }
            varData_633.lencode = varData_633.lendyn;
            varData_633.lenbits = 7;
            var varData_660 = {
              bits: varData_633.lenbits
            };
            varData_657 = varData_660;
            varData_655 = varData_571(varData_572, varData_633.lens, 0, 19, varData_633.lencode, 0, varData_633.work, varData_657);
            varData_633.lenbits = varData_657.bits;
            if (varData_655) {
              param_1.msg = "invalid code lengths set";
              varData_633.mode = varData_604;
              break;
            }
            varData_633.have = 0;
            varData_633.mode = varData_593;
          case varData_593:
            while (varData_633.have < varData_633.nlen + varData_633.ndist) {
              while (true) {
                varData_647 = varData_633.lencode[varData_640 & (1 << varData_633.lenbits) - 1];
                varData_648 = varData_647 >>> 24;
                varData_649 = varData_647 >>> 16 & 255;
                varData_650 = varData_647 & 65535;
                if (varData_648 <= varData_641) {
                  break;
                }
                if (varData_638 === 0) {
                  break _0x259e4e;
                }
                varData_638--;
                varData_640 += varData_634[varData_636++] << varData_641;
                varData_641 += 8;
              }
              if (varData_650 < 16) {
                varData_640 >>>= varData_648;
                varData_641 -= varData_648;
                varData_633.lens[varData_633.have++] = varData_650;
              } else {
                if (varData_650 === 16) {
                  varData_658 = varData_648 + 2;
                  while (varData_641 < varData_658) {
                    if (varData_638 === 0) {
                      break _0x259e4e;
                    }
                    varData_638--;
                    varData_640 += varData_634[varData_636++] << varData_641;
                    varData_641 += 8;
                  }
                  varData_640 >>>= varData_648;
                  varData_641 -= varData_648;
                  if (varData_633.have === 0) {
                    param_1.msg = "invalid bit length repeat";
                    varData_633.mode = varData_604;
                    break;
                  }
                  varData_654 = varData_633.lens[varData_633.have - 1];
                  varData_644 = 3 + (varData_640 & 3);
                  varData_640 >>>= 2;
                  varData_641 -= 2;
                } else if (varData_650 === 17) {
                  varData_658 = varData_648 + 3;
                  while (varData_641 < varData_658) {
                    if (varData_638 === 0) {
                      break _0x259e4e;
                    }
                    varData_638--;
                    varData_640 += varData_634[varData_636++] << varData_641;
                    varData_641 += 8;
                  }
                  varData_640 >>>= varData_648;
                  varData_641 -= varData_648;
                  varData_654 = 0;
                  varData_644 = 3 + (varData_640 & 7);
                  varData_640 >>>= 3;
                  varData_641 -= 3;
                } else {
                  varData_658 = varData_648 + 7;
                  while (varData_641 < varData_658) {
                    if (varData_638 === 0) {
                      break _0x259e4e;
                    }
                    varData_638--;
                    varData_640 += varData_634[varData_636++] << varData_641;
                    varData_641 += 8;
                  }
                  varData_640 >>>= varData_648;
                  varData_641 -= varData_648;
                  varData_654 = 0;
                  varData_644 = 11 + (varData_640 & 127);
                  varData_640 >>>= 7;
                  varData_641 -= 7;
                }
                if (varData_633.have + varData_644 > varData_633.nlen + varData_633.ndist) {
                  param_1.msg = "invalid bit length repeat";
                  varData_633.mode = varData_604;
                  break;
                }
                while (varData_644--) {
                  varData_633.lens[varData_633.have++] = varData_654;
                }
              }
            }
            if (varData_633.mode === varData_604) {
              break;
            }
            if (varData_633.lens[256] === 0) {
              param_1.msg = "invalid code -- missing end-of-block";
              varData_633.mode = varData_604;
              break;
            }
            varData_633.lenbits = 9;
            var varData_661 = {
              bits: varData_633.lenbits
            };
            varData_657 = varData_661;
            varData_655 = varData_571(varData_573, varData_633.lens, 0, varData_633.nlen, varData_633.lencode, 0, varData_633.work, varData_657);
            varData_633.lenbits = varData_657.bits;
            if (varData_655) {
              param_1.msg = "invalid literal/lengths set";
              varData_633.mode = varData_604;
              break;
            }
            varData_633.distbits = 6;
            varData_633.distcode = varData_633.distdyn;
            var varData_662 = {
              bits: varData_633.distbits
            };
            varData_657 = varData_662;
            varData_655 = varData_571(varData_574, varData_633.lens, varData_633.nlen, varData_633.ndist, varData_633.distcode, 0, varData_633.work, varData_657);
            varData_633.distbits = varData_657.bits;
            if (varData_655) {
              param_1.msg = "invalid distances set";
              varData_633.mode = varData_604;
              break;
            }
            varData_633.mode = varData_594;
            if (param_2 === _0x474636) {
              break _0x259e4e;
            }
          case varData_594:
            varData_633.mode = varData_595;
          case varData_595:
            if (varData_638 >= 6 && varData_639 >= 258) {
              param_1.next_out = varData_637;
              param_1.avail_out = varData_639;
              param_1.next_in = varData_636;
              param_1.avail_in = varData_638;
              varData_633.hold = varData_640;
              varData_633.bits = varData_641;
              varData_510(param_1, varData_643);
              varData_637 = param_1.next_out;
              varData_635 = param_1.output;
              varData_639 = param_1.avail_out;
              varData_636 = param_1.next_in;
              varData_634 = param_1.input;
              varData_638 = param_1.avail_in;
              varData_640 = varData_633.hold;
              varData_641 = varData_633.bits;
              if (varData_633.mode === varData_586) {
                varData_633.back = -1;
              }
              break;
            }
            varData_633.back = 0;
            while (true) {
              varData_647 = varData_633.lencode[varData_640 & (1 << varData_633.lenbits) - 1];
              varData_648 = varData_647 >>> 24;
              varData_649 = varData_647 >>> 16 & 255;
              varData_650 = varData_647 & 65535;
              if (varData_648 <= varData_641) {
                break;
              }
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_638--;
              varData_640 += varData_634[varData_636++] << varData_641;
              varData_641 += 8;
            }
            if (varData_649 && (varData_649 & 240) === 0) {
              varData_651 = varData_648;
              varData_652 = varData_649;
              varData_653 = varData_650;
              while (true) {
                varData_647 = varData_633.lencode[varData_653 + ((varData_640 & (1 << varData_651 + varData_652) - 1) >> varData_651)];
                varData_648 = varData_647 >>> 24;
                varData_649 = varData_647 >>> 16 & 255;
                varData_650 = varData_647 & 65535;
                if (varData_651 + varData_648 <= varData_641) {
                  break;
                }
                if (varData_638 === 0) {
                  break _0x259e4e;
                }
                varData_638--;
                varData_640 += varData_634[varData_636++] << varData_641;
                varData_641 += 8;
              }
              varData_640 >>>= varData_651;
              varData_641 -= varData_651;
              varData_633.back += varData_651;
            }
            varData_640 >>>= varData_648;
            varData_641 -= varData_648;
            varData_633.back += varData_648;
            varData_633.length = varData_650;
            if (varData_649 === 0) {
              varData_633.mode = varData_600;
              break;
            }
            if (varData_649 & 32) {
              varData_633.back = -1;
              varData_633.mode = varData_586;
              break;
            }
            if (varData_649 & 64) {
              param_1.msg = "invalid literal/length code";
              varData_633.mode = varData_604;
              break;
            }
            varData_633.extra = varData_649 & 15;
            varData_633.mode = varData_596;
          case varData_596:
            if (varData_633.extra) {
              varData_658 = varData_633.extra;
              while (varData_641 < varData_658) {
                if (varData_638 === 0) {
                  break _0x259e4e;
                }
                varData_638--;
                varData_640 += varData_634[varData_636++] << varData_641;
                varData_641 += 8;
              }
              varData_633.length += varData_640 & (1 << varData_633.extra) - 1;
              varData_640 >>>= varData_633.extra;
              varData_641 -= varData_633.extra;
              varData_633.back += varData_633.extra;
            }
            varData_633.was = varData_633.length;
            varData_633.mode = varData_597;
          case varData_597:
            while (true) {
              varData_647 = varData_633.distcode[varData_640 & (1 << varData_633.distbits) - 1];
              varData_648 = varData_647 >>> 24;
              varData_649 = varData_647 >>> 16 & 255;
              varData_650 = varData_647 & 65535;
              if (varData_648 <= varData_641) {
                break;
              }
              if (varData_638 === 0) {
                break _0x259e4e;
              }
              varData_638--;
              varData_640 += varData_634[varData_636++] << varData_641;
              varData_641 += 8;
            }
            if ((varData_649 & 240) === 0) {
              varData_651 = varData_648;
              varData_652 = varData_649;
              varData_653 = varData_650;
              while (true) {
                varData_647 = varData_633.distcode[varData_653 + ((varData_640 & (1 << varData_651 + varData_652) - 1) >> varData_651)];
                varData_648 = varData_647 >>> 24;
                varData_649 = varData_647 >>> 16 & 255;
                varData_650 = varData_647 & 65535;
                if (varData_651 + varData_648 <= varData_641) {
                  break;
                }
                if (varData_638 === 0) {
                  break _0x259e4e;
                }
                varData_638--;
                varData_640 += varData_634[varData_636++] << varData_641;
                varData_641 += 8;
              }
              varData_640 >>>= varData_651;
              varData_641 -= varData_651;
              varData_633.back += varData_651;
            }
            varData_640 >>>= varData_648;
            varData_641 -= varData_648;
            varData_633.back += varData_648;
            if (varData_649 & 64) {
              param_1.msg = "invalid distance code";
              varData_633.mode = varData_604;
              break;
            }
            varData_633.offset = varData_650;
            varData_633.extra = varData_649 & 15;
            varData_633.mode = varData_598;
          case varData_598:
            if (varData_633.extra) {
              varData_658 = varData_633.extra;
              while (varData_641 < varData_658) {
                if (varData_638 === 0) {
                  break _0x259e4e;
                }
                varData_638--;
                varData_640 += varData_634[varData_636++] << varData_641;
                varData_641 += 8;
              }
              varData_633.offset += varData_640 & (1 << varData_633.extra) - 1;
              varData_640 >>>= varData_633.extra;
              varData_641 -= varData_633.extra;
              varData_633.back += varData_633.extra;
            }
            if (varData_633.offset > varData_633.dmax) {
              param_1.msg = "invalid distance too far back";
              varData_633.mode = varData_604;
              break;
            }
            varData_633.mode = varData_599;
          case varData_599:
            if (varData_639 === 0) {
              break _0x259e4e;
            }
            varData_644 = varData_643 - varData_639;
            if (varData_633.offset > varData_644) {
              varData_644 = varData_633.offset - varData_644;
              if (varData_644 > varData_633.whave) {
                if (varData_633.sane) {
                  param_1.msg = "invalid distance too far back";
                  varData_633.mode = varData_604;
                  break;
                }
              }
              if (varData_644 > varData_633.wnext) {
                varData_644 -= varData_633.wnext;
                varData_645 = varData_633.wsize - varData_644;
              } else {
                varData_645 = varData_633.wnext - varData_644;
              }
              if (varData_644 > varData_633.length) {
                varData_644 = varData_633.length;
              }
              varData_646 = varData_633.window;
            } else {
              varData_646 = varData_635;
              varData_645 = varData_637 - varData_633.offset;
              varData_644 = varData_633.length;
            }
            if (varData_644 > varData_639) {
              varData_644 = varData_639;
            }
            varData_639 -= varData_644;
            varData_633.length -= varData_644;
            do {
              varData_635[varData_637++] = varData_646[varData_645++];
            } while (--varData_644);
            if (varData_633.length === 0) {
              varData_633.mode = varData_595;
            }
            break;
          case varData_600:
            if (varData_639 === 0) {
              break _0x259e4e;
            }
            varData_635[varData_637++] = varData_633.length;
            varData_639--;
            varData_633.mode = varData_595;
            break;
          case varData_601:
            if (varData_633.wrap) {
              while (varData_641 < 32) {
                if (varData_638 === 0) {
                  break _0x259e4e;
                }
                varData_638--;
                varData_640 |= varData_634[varData_636++] << varData_641;
                varData_641 += 8;
              }
              varData_643 -= varData_639;
              param_1.total_out += varData_643;
              varData_633.total += varData_643;
              if (varData_633.wrap & 4 && varData_643) {
                param_1.adler = varData_633.check = varData_633.flags ? varData_317(varData_633.check, varData_635, varData_643, varData_637 - varData_643) : varData_309(varData_633.check, varData_635, varData_643, varData_637 - varData_643);
              }
              varData_643 = varData_639;
              if (varData_633.wrap & 4 && (varData_633.flags ? varData_640 : varData_611(varData_640)) !== varData_633.check) {
                param_1.msg = "incorrect data check";
                varData_633.mode = varData_604;
                break;
              }
              varData_640 = 0;
              varData_641 = 0;
            }
            varData_633.mode = varData_602;
          case varData_602:
            if (varData_633.wrap && varData_633.flags) {
              while (varData_641 < 32) {
                if (varData_638 === 0) {
                  break _0x259e4e;
                }
                varData_638--;
                varData_640 += varData_634[varData_636++] << varData_641;
                varData_641 += 8;
              }
              if (varData_633.wrap & 4 && varData_640 !== (varData_633.total & -1)) {
                param_1.msg = "incorrect length check";
                varData_633.mode = varData_604;
                break;
              }
              varData_640 = 0;
              varData_641 = 0;
            }
            varData_633.mode = varData_603;
          case varData_603:
            varData_655 = _0xce09dc;
            break _0x259e4e;
          case varData_604:
            varData_655 = _0x2b7882;
            break _0x259e4e;
          case varData_605:
            return _0x597f75;
          case varData_606:
          default:
            return _0x41d50b;
        }
      }
      param_1.next_out = varData_637;
      param_1.avail_out = varData_639;
      param_1.next_in = varData_636;
      param_1.avail_in = varData_638;
      varData_633.hold = varData_640;
      varData_633.bits = varData_641;
      if (varData_633.wsize || varData_643 !== param_1.avail_out && varData_633.mode < varData_604 && (varData_633.mode < varData_601 || param_2 !== _0x5a5bd8)) {
        if (varData_629(param_1, param_1.output, param_1.next_out, varData_643 - param_1.avail_out)) ;
      }
      varData_642 -= param_1.avail_in;
      varData_643 -= param_1.avail_out;
      param_1.total_in += varData_642;
      param_1.total_out += varData_643;
      varData_633.total += varData_643;
      if (varData_633.wrap & 4 && varData_643) {
        param_1.adler = varData_633.check = varData_633.flags ? varData_317(varData_633.check, varData_635, varData_643, param_1.next_out - varData_643) : varData_309(varData_633.check, varData_635, varData_643, param_1.next_out - varData_643);
      }
      param_1.data_type = varData_633.bits + (varData_633.last ? 64 : 0) + (varData_633.mode === varData_586 ? 128 : 0) + (varData_633.mode === varData_594 || varData_633.mode === varData_589 ? 256 : 0);
      if ((varData_642 === 0 && varData_643 === 0 || param_2 === _0x5a5bd8) && varData_655 === _0x48e529) {
        varData_655 = _0x36239e;
      }
      return varData_655;
    };
    const varData_663 = (param_1) => {
      if (varData_612(param_1)) {
        return _0x41d50b;
      }
      let varData_664 = param_1.state;
      varData_664.window && (varData_664.window = null);
      param_1.state = null;
      return _0x48e529;
    };
    const varData_665 = (param_1, param_2) => {
      if (varData_612(param_1)) {
        return _0x41d50b;
      }
      const varData_666 = param_1.state;
      if ((varData_666.wrap & 2) === 0) {
        return _0x41d50b;
      }
      varData_666.head = param_2;
      param_2.done = false;
      return _0x48e529;
    };
    const varData_667 = (param_1, param_2) => {
      const varData_668 = param_2.length;
      let varData_669;
      let varData_670;
      let varData_671;
      if (varData_612(param_1)) {
        return _0x41d50b;
      }
      varData_669 = param_1.state;
      if (varData_669.wrap !== 0 && varData_669.mode !== varData_585) {
        return _0x41d50b;
      }
      if (varData_669.mode === varData_585) {
        varData_670 = 1;
        varData_670 = varData_309(varData_670, param_2, varData_668, 0);
        if (varData_670 !== varData_669.check) {
          return _0x2b7882;
        }
      }
      varData_671 = varData_629(param_1, param_2, varData_668, varData_668);
      if (varData_671) {
        varData_669.mode = varData_605;
        return _0x597f75;
      }
      varData_669.havedict = 1;
      return _0x48e529;
    };
    var varData_672 = varData_616;
    var varData_673 = varData_618;
    var varData_674 = varData_614;
    var varData_675 = varData_624;
    var varData_676 = varData_621;
    var varData_677 = varData_632;
    var varData_678 = varData_663;
    var varData_679 = varData_665;
    var varData_680 = varData_667;
    var varData_681 = "pako inflate (from Nodeca project)";
    var varData_682 = {
      inflateReset: varData_672,
      inflateReset2: varData_673,
      inflateResetKeep: varData_674,
      inflateInit: varData_675,
      inflateInit2: varData_676,
      inflate: varData_677,
      inflateEnd: varData_678,
      inflateGetHeader: varData_679,
      inflateSetDictionary: varData_680,
      inflateInfo: varData_681
    };
    var varData_683 = varData_682;
    function handleAction_78() {
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
    var varData_684 = handleAction_78;
    const varData_685 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x3e187b,
      Z_FINISH: _0x528ddb,
      Z_OK: _0x318f21,
      Z_STREAM_END: _0x5342c1,
      Z_NEED_DICT: _0x5edfbd,
      Z_STREAM_ERROR: _0x12b2c9,
      Z_DATA_ERROR: _0x4dec0f,
      Z_MEM_ERROR: _0x4a31c1
    } = varData_320;
    function handleAction_79(param_1) {
      this.options = varData_467.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, param_1 || {});
      const varData_686 = this.options;
      if (varData_686.raw && varData_686.windowBits >= 0 && varData_686.windowBits < 16) {
        varData_686.windowBits = -varData_686.windowBits;
        if (varData_686.windowBits === 0) {
          varData_686.windowBits = -15;
        }
      }
      if (varData_686.windowBits >= 0 && varData_686.windowBits < 16 && (!param_1 || !param_1.windowBits)) {
        varData_686.windowBits += 32;
      }
      if (varData_686.windowBits > 15 && varData_686.windowBits < 48) {
        if ((varData_686.windowBits & 15) === 0) {
          varData_686.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_490();
      this.strm.avail_out = 0;
      let varData_687 = varData_683.inflateInit2(this.strm, varData_686.windowBits);
      if (varData_687 !== _0x318f21) {
        throw new Error(varData_318[varData_687]);
      }
      this.header = new varData_684();
      varData_683.inflateGetHeader(this.strm, this.header);
      if (varData_686.dictionary) {
        if (typeof varData_686.dictionary === "string") {
          varData_686.dictionary = varData_489.string2buf(varData_686.dictionary);
        } else if (varData_685.call(varData_686.dictionary) === "[object ArrayBuffer]") {
          varData_686.dictionary = new Uint8Array(varData_686.dictionary);
        }
        if (varData_686.raw) {
          varData_687 = varData_683.inflateSetDictionary(this.strm, varData_686.dictionary);
          if (varData_687 !== _0x318f21) {
            throw new Error(varData_318[varData_687]);
          }
        }
      }
    }
    handleAction_79.prototype.push = function(param_1, param_2) {
      const varData_688 = this.strm;
      const varData_689 = this.options.chunkSize;
      const varData_690 = this.options.dictionary;
      let varData_691;
      let varData_692;
      let varData_693;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_692 = param_2;
      } else {
        varData_692 = param_2 === true ? _0x528ddb : _0x3e187b;
      }
      if (varData_685.call(param_1) === "[object ArrayBuffer]") {
        varData_688.input = new Uint8Array(param_1);
      } else {
        varData_688.input = param_1;
      }
      varData_688.next_in = 0;
      varData_688.avail_in = varData_688.input.length;
      while (true) {
        if (varData_688.avail_out === 0) {
          varData_688.output = new Uint8Array(varData_689);
          varData_688.next_out = 0;
          varData_688.avail_out = varData_689;
        }
        varData_691 = varData_683.inflate(varData_688, varData_692);
        if (varData_691 === _0x5edfbd && varData_690) {
          varData_691 = varData_683.inflateSetDictionary(varData_688, varData_690);
          if (varData_691 === _0x318f21) {
            varData_691 = varData_683.inflate(varData_688, varData_692);
          } else if (varData_691 === _0x4dec0f) {
            varData_691 = _0x5edfbd;
          }
        }
        while (varData_688.avail_in > 0 && varData_691 === _0x5342c1 && varData_688.state.wrap > 0 && param_1[varData_688.next_in] !== 0) {
          varData_683.inflateReset(varData_688);
          varData_691 = varData_683.inflate(varData_688, varData_692);
        }
        switch (varData_691) {
          case _0x12b2c9:
          case _0x4dec0f:
          case _0x5edfbd:
          case _0x4a31c1:
            this.onEnd(varData_691);
            this.ended = true;
            return false;
        }
        varData_693 = varData_688.avail_out;
        if (varData_688.next_out) {
          if (varData_688.avail_out === 0 || varData_691 === _0x5342c1) {
            if (this.options.to === "string") {
              let varData_694 = varData_489.utf8border(varData_688.output, varData_688.next_out);
              let varData_695 = varData_688.next_out - varData_694;
              let varData_696 = varData_489.buf2string(varData_688.output, varData_694);
              varData_688.next_out = varData_695;
              varData_688.avail_out = varData_689 - varData_695;
              if (varData_695) {
                varData_688.output.set(varData_688.output.subarray(varData_694, varData_694 + varData_695), 0);
              }
              this.onData(varData_696);
            } else {
              this.onData(varData_688.output.length === varData_688.next_out ? varData_688.output : varData_688.output.subarray(0, varData_688.next_out));
            }
          }
        }
        if (varData_691 === _0x318f21 && varData_693 === 0) {
          continue;
        }
        if (varData_691 === _0x5342c1) {
          varData_691 = varData_683.inflateEnd(this.strm);
          this.onEnd(varData_691);
          this.ended = true;
          return true;
        }
        if (varData_688.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_79.prototype.onData = function(param_1) {
      this.chunks.push(param_1);
    };
    handleAction_79.prototype.onEnd = function(param_1) {
      if (param_1 === _0x318f21) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = varData_467.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_80(param_1, param_2) {
      const varData_697 = new handleAction_79(param_2);
      varData_697.push(param_1);
      if (varData_697.err) {
        throw varData_697.msg || varData_318[varData_697.err];
      }
      return varData_697.result;
    }
    function handleAction_81(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.raw = true;
      return handleAction_80(param_1, param_2);
    }
    var varData_698 = handleAction_79;
    var varData_699 = handleAction_80;
    var varData_700 = handleAction_81;
    var varData_701 = handleAction_80;
    var varData_702 = varData_320;
    var varData_703 = {
      Inflate: varData_698,
      inflate: varData_699,
      inflateRaw: varData_700,
      ungzip: varData_701,
      constants: varData_702
    };
    var varData_704 = varData_703;
    const {
      Deflate: _0x58bff5,
      deflate: _0x342a98,
      deflateRaw: _0x2a9653,
      gzip: _0x5867e7
    } = varData_507;
    const {
      Inflate: _0x3ae856,
      inflate: _0x2ab9d3,
      inflateRaw: _0x6dd564,
      ungzip: _0x44569d
    } = varData_704;
    var varData_705 = _0x58bff5;
    var varData_706 = _0x342a98;
    var varData_707 = _0x2a9653;
    var varData_708 = _0x5867e7;
    var varData_709 = _0x3ae856;
    var varData_710 = _0x2ab9d3;
    var varData_711 = _0x6dd564;
    var varData_712 = _0x44569d;
    var varData_713 = varData_320;
    var varData_714 = {
      Deflate: varData_705,
      deflate: varData_706,
      deflateRaw: varData_707,
      gzip: varData_708,
      Inflate: varData_709,
      inflate: varData_710,
      inflateRaw: varData_711,
      ungzip: varData_712,
      constants: varData_713
    };
    var varData_715 = varData_714;
    var varData_716 = handleAction_35(739);
    ;
    var varData_717 = Object.defineProperty;
    var varData_718 = (param_1, param_2) => {
      for (var varData_719 in param_2) {
        varData_717(param_1, varData_719, {
          get: param_2[varData_719],
          enumerable: true
        });
      }
    };
    var varData_720 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_721 = (param_1, param_2, param_3) => {
      varData_720(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_722 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_723 = (param_1, param_2, param_3, param_4) => {
      varData_720(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_724 = (param_1, param_2, param_3) => {
      varData_720(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_725 = {
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
    var varData_726 = {};
    var varData_727 = {
      MathUtils: () => varData_885
    };
    varData_718(varData_726, varData_727);
    var varData_728;
    var varData_729;
    var varData_730 = class _0x9a8f75 {
      constructor(param_1, param_2, param_3) {
        varData_722(this, varData_728);
        const varData_731 = varData_724(this, varData_728, varData_729).call(this, param_1, param_2, param_3);
        this.x = varData_731.x;
        this.y = varData_731.y;
        this.z = varData_731.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_732 = varData_724(this, varData_728, varData_729).call(this, param_1, param_2, param_3);
        return this.x === varData_732.x && this.y === varData_732.y && this.z === varData_732.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_733 = varData_724(this, varData_728, varData_729).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_733.x * param_4 : varData_733.x;
        this.y += param_4 ? varData_733.y * param_4 : varData_733.y;
        this.z += param_4 ? varData_733.z * param_4 : varData_733.z;
        return this;
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x += param_1;
        this.y += param_1;
        this.z += param_1;
        return this;
      }
      sub(param_1, param_2, param_3, param_4) {
        const varData_734 = varData_724(this, varData_728, varData_729).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_734.x * param_4 : varData_734.x;
        this.y -= param_4 ? varData_734.y * param_4 : varData_734.y;
        this.z -= param_4 ? varData_734.z * param_4 : varData_734.z;
        return this;
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x -= param_1;
        this.y -= param_1;
        this.z -= param_1;
        return this;
      }
      multiply(param_1, param_2, param_3) {
        const varData_735 = varData_724(this, varData_728, varData_729).call(this, param_1, param_2, param_3);
        this.x *= varData_735.x;
        this.y *= varData_735.y;
        this.z *= varData_735.z;
        return this;
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x *= param_1;
        this.y *= param_1;
        this.z *= param_1;
        return this;
      }
      divide(param_1, param_2, param_3) {
        const varData_736 = varData_724(this, varData_728, varData_729).call(this, param_1, param_2, param_3);
        this.x /= varData_736.x;
        this.y /= varData_736.y;
        this.z /= varData_736.z;
        return this;
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x /= param_1;
        this.y /= param_1;
        this.z /= param_1;
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
      getCenter(param_1, param_2, param_3) {
        const varData_737 = varData_724(this, varData_728, varData_729).call(this, param_1, param_2, param_3);
        return new _0x9a8f75((this.x + varData_737.x) / 2, (this.y + varData_737.y) / 2, (this.z + varData_737.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x3ae8f3, _0x231a74, _0x5a0c92] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x3ae8f3 !== "number" || typeof _0x231a74 !== "number" || typeof _0x5a0c92 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x2c7bf7, _0x3ae15c, _0x493da0] = [this.x - _0x3ae8f3, this.y - _0x231a74, this.z - _0x5a0c92];
        return Math.sqrt(_0x2c7bf7 * _0x2c7bf7 + _0x3ae15c * _0x3ae15c + _0x493da0 * _0x493da0);
      }
      toArray(param_1) {
        if (typeof param_1 === "number") {
          return [parseFloat(this.x.toFixed(param_1)), parseFloat(this.y.toFixed(param_1)), parseFloat(this.z.toFixed(param_1))];
        }
        return [this.x, this.y, this.z];
      }
      toJSON(param_1) {
        if (typeof param_1 === "number") {
          return {
            x: parseFloat(this.x.toFixed(param_1)),
            y: parseFloat(this.y.toFixed(param_1)),
            z: parseFloat(this.z.toFixed(param_1))
          };
        }
        var varData_738 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_738;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_728 = /* @__PURE__ */ new WeakSet();
    varData_729 = function(param_1, param_2, param_3) {
      let varData_739 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_730) {
        varData_739 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_740 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_739 = varData_740;
      } else if (typeof param_1 === "object") {
        varData_739 = param_1;
      } else {
        var varData_741 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_739 = varData_741;
      }
      if (typeof varData_739.x !== "number" || typeof varData_739.y !== "number" || typeof varData_739.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_739;
    };
    var varData_742 = varData_730;
    var varData_743;
    var varData_744;
    var varData_745 = class {
      constructor(param_1) {
        varData_722(this, varData_743, void 0);
        varData_722(this, varData_744, void 0);
        varData_723(this, varData_744, param_1 ?? 5);
        varData_723(this, varData_743, /* @__PURE__ */ new Map());
      }
      setTTL(param_1) {
        varData_723(this, varData_744, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_721(this, varData_743).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_721(this, varData_744)) * 1e3
        });
        return this;
      }
      get(param_1, _0x17fba8 = false) {
        const varData_746 = varData_721(this, varData_743).get(param_1);
        const varData_747 = varData_746 ? _0x17fba8 ? true : varData_746.expiration > Date.now() : false;
        if (!varData_746 || !varData_747) {
          if (varData_746) {
            varData_721(this, varData_743).delete(param_1);
          }
          return;
        }
        return varData_746.value;
      }
      has(param_1, _0x505221 = false) {
        const varData_748 = varData_721(this, varData_743).get(param_1);
        const varData_749 = varData_748 ? _0x505221 ? true : varData_748.expiration > Date.now() : false;
        if (varData_748 && !varData_749) {
          varData_721(this, varData_743).delete(param_1);
        }
        return varData_749;
      }
      delete(param_1) {
        return varData_721(this, varData_743).delete(param_1);
      }
      clear() {
        varData_721(this, varData_743).clear();
      }
      values(_0x4f9ec0 = false) {
        const varData_750 = [];
        const timestamp = Date.now();
        for (const varData_751 of varData_721(this, varData_743).values()) {
          if (_0x4f9ec0 || varData_751.expiration > timestamp) {
            varData_750.push(varData_751.value);
          }
        }
        return varData_750;
      }
      keys(_0x239aee = false) {
        const varData_752 = [];
        const timestamp = Date.now();
        for (const [_0x222947, _0x2805b6] of varData_721(this, varData_743).entries()) {
          if (_0x239aee || _0x2805b6.expiration > timestamp) {
            varData_752.push(_0x222947);
          }
        }
        return varData_752;
      }
      entries(_0x41a9ba = false) {
        const varData_753 = [];
        const timestamp = Date.now();
        for (const [_0x32b9de, _0x23fa59] of varData_721(this, varData_743).entries()) {
          if (_0x41a9ba || _0x23fa59.expiration > timestamp) {
            varData_753.push([_0x32b9de, _0x23fa59.value]);
          }
        }
        return varData_753;
      }
    };
    varData_743 = /* @__PURE__ */ new WeakMap();
    varData_744 = /* @__PURE__ */ new WeakMap();
    var varData_754;
    var varData_755;
    var varData_756;
    var varData_757;
    var varData_758;
    var varData_759;
    var varData_760;
    var varData_761;
    var varData_762;
    var varData_763;
    var varData_764;
    var varData_765;
    var varData_766;
    var varData_767;
    var varData_768;
    var varData_769;
    var varData_770;
    var varData_771;
    var varData_772;
    var varData_773;
    var varData_774;
    var varData_775;
    var varData_776 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x275c1b = 30, _0x4e2d70 = false) {
        varData_722(this, varData_766);
        varData_722(this, varData_768);
        varData_722(this, varData_770);
        varData_722(this, varData_772);
        varData_722(this, varData_774);
        varData_722(this, varData_754, void 0);
        varData_722(this, varData_755, void 0);
        varData_722(this, varData_756, void 0);
        varData_722(this, varData_757, void 0);
        varData_722(this, varData_758, void 0);
        varData_722(this, varData_759, void 0);
        varData_722(this, varData_760, void 0);
        varData_722(this, varData_761, void 0);
        varData_722(this, varData_762, void 0);
        varData_722(this, varData_763, void 0);
        varData_722(this, varData_764, void 0);
        varData_722(this, varData_765, void 0);
        varData_723(this, varData_754, param_1);
        varData_723(this, varData_755, param_4);
        varData_723(this, varData_756, param_5);
        varData_723(this, varData_757, param_2);
        varData_723(this, varData_758, param_3);
        varData_723(this, varData_759, _0x4e2d70);
        varData_723(this, varData_760, _0x275c1b);
        varData_723(this, varData_762, varData_721(this, varData_755).x / _0x275c1b);
        varData_723(this, varData_763, varData_721(this, varData_755).y / _0x275c1b);
        varData_723(this, varData_761, varData_721(this, varData_762) * varData_721(this, varData_763));
        varData_723(this, varData_764, varData_724(this, varData_766, varData_767).call(this, varData_721(this, varData_754), varData_721(this, varData_760), varData_721(this, varData_762), varData_721(this, varData_763), varData_721(this, varData_759)));
        varData_723(this, varData_765, varData_724(this, varData_768, varData_769).call(this, varData_721(this, varData_764), varData_721(this, varData_761)));
      }
      get cells() {
        return varData_721(this, varData_764);
      }
      get cellSize() {
        return varData_721(this, varData_760);
      }
      get cellWidth() {
        return varData_721(this, varData_762);
      }
      get cellHeight() {
        return varData_721(this, varData_763);
      }
      get gridArea() {
        return varData_721(this, varData_765);
      }
      get gridCoverage() {
        return varData_721(this, varData_765) / varData_721(this, varData_756) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_777;
        const varData_778 = param_1.x - varData_721(this, varData_757).x;
        const varData_779 = param_1.y - varData_721(this, varData_757).y;
        const varData_780 = Math.floor(varData_778 * varData_721(this, varData_760) / varData_721(this, varData_755).x);
        const varData_781 = Math.floor(varData_779 * varData_721(this, varData_760) / varData_721(this, varData_755).y);
        let varData_782 = (varData_777 = varData_721(this, varData_764)[varData_780]) == null ? void 0 : varData_777[varData_781];
        if (!varData_782 && varData_721(this, varData_759)) {
          varData_782 = varData_724(this, varData_772, varData_773).call(this, varData_780, varData_781, varData_721(this, varData_762), varData_721(this, varData_763), varData_721(this, varData_754));
          varData_721(this, varData_764)[varData_780][varData_781] = varData_782;
          if (!varData_782) {
            return false;
          }
          varData_723(this, varData_765, varData_721(this, varData_765) + varData_721(this, varData_761));
        }
        return varData_782 ?? false;
      }
    };
    varData_754 = /* @__PURE__ */ new WeakMap();
    varData_755 = /* @__PURE__ */ new WeakMap();
    varData_756 = /* @__PURE__ */ new WeakMap();
    varData_757 = /* @__PURE__ */ new WeakMap();
    varData_758 = /* @__PURE__ */ new WeakMap();
    varData_759 = /* @__PURE__ */ new WeakMap();
    varData_760 = /* @__PURE__ */ new WeakMap();
    varData_761 = /* @__PURE__ */ new WeakMap();
    varData_762 = /* @__PURE__ */ new WeakMap();
    varData_763 = /* @__PURE__ */ new WeakMap();
    varData_764 = /* @__PURE__ */ new WeakMap();
    varData_765 = /* @__PURE__ */ new WeakMap();
    varData_766 = /* @__PURE__ */ new WeakSet();
    varData_767 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_783 = {};
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_783[loopIdx] = {};
        if (param_5) {
          continue;
        }
        for (let loopIdx_1 = 0; loopIdx_1 < param_2; loopIdx_1++) {
          const varData_784 = varData_724(this, varData_772, varData_773).call(this, loopIdx, loopIdx_1, param_3, param_4, param_1);
          if (!varData_784) {
            continue;
          }
          varData_783[loopIdx][loopIdx_1] = true;
        }
      }
      return varData_783;
    };
    varData_768 = /* @__PURE__ */ new WeakSet();
    varData_769 = function(param_1, param_2) {
      let varData_785 = 0;
      for (const varData_786 in param_1) {
        for (const varData_787 in param_1[varData_786]) {
          varData_785 += param_2;
        }
      }
      return varData_785;
    };
    varData_770 = /* @__PURE__ */ new WeakSet();
    varData_771 = function(param_1, param_2, param_3, param_4) {
      const varData_788 = [];
      const varData_789 = param_1 * param_3 + varData_721(this, varData_757).x;
      const varData_790 = param_2 * param_4 + varData_721(this, varData_757).y;
      varData_788.push(new varData_872(varData_789, varData_790));
      varData_788.push(new varData_872(varData_789 + param_3, varData_790));
      varData_788.push(new varData_872(varData_789 + param_3, varData_790 + param_4));
      varData_788.push(new varData_872(varData_789, varData_790 + param_4));
      return varData_788;
    };
    varData_772 = /* @__PURE__ */ new WeakSet();
    varData_773 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_791 = varData_724(this, varData_770, varData_771).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_1 = false;
      for (const varData_792 of varData_791) {
        const varData_793 = varData_904.MathUtils.windingNumber(varData_792, param_5);
        if (varData_793 !== 0) {
          isDisabled_1 = true;
          break;
        }
      }
      if (!isDisabled_1) {
        return false;
      }
      for (let loopIdx = 0; loopIdx < varData_791.length; loopIdx++) {
        const varData_794 = varData_791[loopIdx];
        const varData_795 = varData_791[(loopIdx + 1) % varData_791.length];
        for (let loopIdx_1 = 0; loopIdx_1 < param_5.length; loopIdx_1++) {
          const varData_796 = param_5[loopIdx_1];
          const varData_797 = param_5[(loopIdx_1 + 1) % param_5.length];
          if (varData_724(this, varData_774, varData_775).call(this, varData_794, varData_795, varData_796, varData_797)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_774 = /* @__PURE__ */ new WeakSet();
    varData_775 = function(param_1, param_2, param_3, param_4) {
      const varData_798 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_799 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_800 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_798 === 0) {
        return varData_799 === 0 && varData_800 === 0;
      }
      const varData_801 = varData_799 / varData_798;
      const varData_802 = varData_800 / varData_798;
      return varData_801 >= 0 && varData_801 <= 1 && varData_802 >= 0 && varData_802 <= 1;
    };
    var varData_803;
    var varData_804;
    var varData_805;
    var varData_806;
    var varData_807;
    var varData_808;
    var varData_809;
    var varData_810;
    var varData_811;
    var varData_812;
    var varData_813;
    var varData_814;
    var varData_815;
    var varData_816;
    var varData_817;
    var varData_818;
    var varData_819;
    var varData_820;
    var varData_821 = class {
      constructor(param_1, _0x505e1a = {}, _0x5095f5 = {}) {
        varData_722(this, varData_811);
        varData_722(this, varData_813);
        varData_722(this, varData_815);
        varData_722(this, varData_817);
        varData_722(this, varData_819);
        varData_722(this, varData_803, void 0);
        varData_722(this, varData_804, void 0);
        varData_722(this, varData_805, void 0);
        varData_722(this, varData_806, void 0);
        varData_722(this, varData_807, void 0);
        varData_722(this, varData_808, void 0);
        varData_722(this, varData_809, void 0);
        varData_722(this, varData_810, void 0);
        varData_723(this, varData_803, varData_904.getUUID());
        varData_723(this, varData_804, param_1);
        varData_723(this, varData_805, varData_724(this, varData_811, varData_812).call(this, param_1));
        varData_723(this, varData_806, varData_724(this, varData_813, varData_814).call(this, param_1));
        varData_723(this, varData_807, varData_724(this, varData_819, varData_820).call(this, param_1));
        varData_723(this, varData_808, varData_724(this, varData_817, varData_818).call(this, varData_721(this, varData_805), varData_721(this, varData_806)));
        varData_723(this, varData_809, varData_724(this, varData_815, varData_816).call(this, varData_721(this, varData_805), varData_721(this, varData_806)));
        this.options = _0x505e1a;
        this.data = _0x5095f5;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_723(this, varData_810, new varData_776(varData_721(this, varData_804), varData_721(this, varData_805), varData_721(this, varData_806), varData_721(this, varData_808), varData_721(this, varData_807), _0x505e1a.gridCellSize, _0x505e1a.useLazyGrid));
      }
      get id() {
        return varData_721(this, varData_803);
      }
      get center() {
        return varData_721(this, varData_809);
      }
      get min() {
        return varData_721(this, varData_805);
      }
      get max() {
        return varData_721(this, varData_806);
      }
      get points() {
        return [...varData_721(this, varData_804)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_721(this, varData_805).x || param_1.x > varData_721(this, varData_806).x) {
          return false;
        } else if (param_1.y < varData_721(this, varData_805).y || param_1.y > varData_721(this, varData_806).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_742) {
          const varData_822 = this.options.minZ ?? -Infinity;
          const varData_823 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_822 || param_1.z > varData_823) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_721(this, varData_810)) {
          return varData_721(this, varData_810).isPointInsideGrid(param_1);
        }
        const varData_824 = varData_904.MathUtils.windingNumber(param_1, varData_721(this, varData_804));
        return varData_824 !== 0;
      }
      addPoint(param_1) {
        varData_721(this, varData_804).push(param_1);
      }
      removePoint(param_1) {
        const varData_825 = varData_721(this, varData_804).findIndex((param_1_1) => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_825 === -1) {
          return;
        }
        varData_721(this, varData_804).splice(varData_825, 1);
      }
      removeLastPoint() {
        varData_721(this, varData_804).pop();
      }
      recalculate() {
        varData_723(this, varData_805, varData_724(this, varData_811, varData_812).call(this, varData_721(this, varData_804)));
        varData_723(this, varData_806, varData_724(this, varData_813, varData_814).call(this, varData_721(this, varData_804)));
        varData_723(this, varData_807, varData_724(this, varData_819, varData_820).call(this, varData_721(this, varData_804)));
        varData_723(this, varData_808, varData_724(this, varData_817, varData_818).call(this, varData_721(this, varData_805), varData_721(this, varData_806)));
        varData_723(this, varData_809, varData_724(this, varData_815, varData_816).call(this, varData_721(this, varData_805), varData_721(this, varData_806)));
        if (!this.options.useGrid) {
          return;
        }
        varData_723(this, varData_810, new varData_776(varData_721(this, varData_804), varData_721(this, varData_805), varData_721(this, varData_806), varData_721(this, varData_808), varData_721(this, varData_807), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_803 = /* @__PURE__ */ new WeakMap();
    varData_804 = /* @__PURE__ */ new WeakMap();
    varData_805 = /* @__PURE__ */ new WeakMap();
    varData_806 = /* @__PURE__ */ new WeakMap();
    varData_807 = /* @__PURE__ */ new WeakMap();
    varData_808 = /* @__PURE__ */ new WeakMap();
    varData_809 = /* @__PURE__ */ new WeakMap();
    varData_810 = /* @__PURE__ */ new WeakMap();
    varData_811 = /* @__PURE__ */ new WeakSet();
    varData_812 = function(param_1) {
      let varData_826 = Number.MAX_SAFE_INTEGER;
      let varData_827 = Number.MAX_SAFE_INTEGER;
      for (const varData_828 of param_1) {
        varData_826 = Math.min(varData_826, varData_828.x);
        varData_827 = Math.min(varData_827, varData_828.y);
      }
      return new varData_872(varData_826, varData_827);
    };
    varData_813 = /* @__PURE__ */ new WeakSet();
    varData_814 = function(param_1) {
      let varData_829 = Number.MIN_SAFE_INTEGER;
      let varData_830 = Number.MIN_SAFE_INTEGER;
      for (const varData_831 of param_1) {
        varData_829 = Math.max(varData_829, varData_831.x);
        varData_830 = Math.max(varData_830, varData_831.y);
      }
      return new varData_872(varData_829, varData_830);
    };
    varData_815 = /* @__PURE__ */ new WeakSet();
    varData_816 = function(param_1, param_2) {
      const varData_832 = param_2.add(param_1);
      return varData_832.divideScalar(2);
    };
    varData_817 = /* @__PURE__ */ new WeakSet();
    varData_818 = function(param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_819 = /* @__PURE__ */ new WeakSet();
    varData_820 = function(param_1) {
      let varData_833 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length - 1; loopIdx < param_1.length; loopIdx_1 = loopIdx++) {
        const varData_834 = param_1[loopIdx];
        const varData_835 = param_1[loopIdx_1];
        varData_833 += varData_834.x * varData_835.y;
        varData_833 -= varData_834.y * varData_835.x;
      }
      return Math.abs(varData_833 / 2);
    };
    var varData_836;
    var varData_837;
    var varData_838 = class _0x4bea16 {
      constructor(param_1, param_2) {
        varData_722(this, varData_836);
        const varData_839 = varData_724(this, varData_836, varData_837).call(this, param_1, param_2);
        this.x = varData_839.x;
        this.y = varData_839.y;
      }
      equals(param_1, param_2) {
        const varData_840 = varData_724(this, varData_836, varData_837).call(this, param_1, param_2);
        return this.x === varData_840.x && this.y === varData_840.y;
      }
      add(param_1, param_2, param_3) {
        const varData_841 = varData_724(this, varData_836, varData_837).call(this, param_1, param_2);
        const varData_842 = this.x + (param_3 ? varData_841.x * param_3 : varData_841.x);
        const varData_843 = this.y + (param_3 ? varData_841.y * param_3 : varData_841.y);
        return new _0x4bea16(varData_842, varData_843);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_844 = this.x + param_1;
        const varData_845 = this.y + param_1;
        return new _0x4bea16(varData_844, varData_845);
      }
      sub(param_1, param_2, param_3) {
        const varData_846 = varData_724(this, varData_836, varData_837).call(this, param_1, param_2);
        const varData_847 = this.x - (param_3 ? varData_846.x * param_3 : varData_846.x);
        const varData_848 = this.y - (param_3 ? varData_846.y * param_3 : varData_846.y);
        return new _0x4bea16(varData_847, varData_848);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_849 = this.x - param_1;
        const varData_850 = this.y - param_1;
        return new _0x4bea16(varData_849, varData_850);
      }
      multiply(param_1, param_2) {
        const varData_851 = varData_724(this, varData_836, varData_837).call(this, param_1, param_2);
        const varData_852 = this.x * varData_851.x;
        const varData_853 = this.y * varData_851.y;
        return new _0x4bea16(varData_852, varData_853);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_854 = this.x * param_1;
        const varData_855 = this.y * param_1;
        return new _0x4bea16(varData_854, varData_855);
      }
      divide(param_1, param_2) {
        const varData_856 = varData_724(this, varData_836, varData_837).call(this, param_1, param_2);
        const varData_857 = this.x / varData_856.x;
        const varData_858 = this.y / varData_856.y;
        return new _0x4bea16(varData_857, varData_858);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_859 = this.x / param_1;
        const varData_860 = this.y / param_1;
        return new _0x4bea16(varData_859, varData_860);
      }
      round() {
        const varData_861 = Math.round(this.x);
        const varData_862 = Math.round(this.y);
        return new _0x4bea16(varData_861, varData_862);
      }
      floor() {
        const varData_863 = Math.floor(this.x);
        const varData_864 = Math.floor(this.y);
        return new _0x4bea16(varData_863, varData_864);
      }
      ceil() {
        const varData_865 = Math.ceil(this.x);
        const varData_866 = Math.ceil(this.y);
        return new _0x4bea16(varData_865, varData_866);
      }
      getCenter(param_1, param_2) {
        const varData_867 = varData_724(this, varData_836, varData_837).call(this, param_1, param_2);
        return new _0x4bea16((this.x + varData_867.x) / 2, (this.y + varData_867.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0x2d57a3, _0x5f2643] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0x2d57a3 !== "number" || typeof _0x5f2643 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x1f8b3c, _0x2970ff] = [this.x - _0x2d57a3, this.y - _0x5f2643];
        return Math.sqrt(_0x1f8b3c * _0x1f8b3c + _0x2970ff * _0x2970ff);
      }
      toArray(param_1) {
        if (typeof param_1 === "number") {
          return [parseFloat(this.x.toFixed(param_1)), parseFloat(this.y.toFixed(param_1))];
        }
        return [this.x, this.y];
      }
      toJSON(param_1) {
        if (typeof param_1 === "number") {
          return {
            x: parseFloat(this.x.toFixed(param_1)),
            y: parseFloat(this.y.toFixed(param_1))
          };
        }
        var varData_868 = {
          x: this.x,
          y: this.y
        };
        return varData_868;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_836 = /* @__PURE__ */ new WeakSet();
    varData_837 = function(param_1, param_2) {
      let varData_869 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_838 || param_1 instanceof varData_742) {
        varData_869 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_870 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_869 = varData_870;
      } else if (typeof param_1 === "object") {
        varData_869 = param_1;
      } else {
        var varData_871 = {
          x: param_1,
          y: param_2
        };
        varData_869 = varData_871;
      }
      if (typeof varData_869.x !== "number" || typeof varData_869.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_869;
    };
    var varData_872 = varData_838;
    var varData_873 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_874 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_875 = ([_0x246b47, _0x4a2083, _0x528760], [_0x19a7cd, _0x5eb587, _0x961313]) => {
      const [_0x4b6857, _0x557a5b, _0x25d1f2] = [_0x246b47 - _0x19a7cd, _0x4a2083 - _0x5eb587, _0x528760 - _0x961313];
      return Math.sqrt(_0x4b6857 * _0x4b6857 + _0x557a5b * _0x557a5b + _0x25d1f2 * _0x25d1f2);
    };
    var varData_876 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_877 = (param_1, param_2) => {
      if (param_1 instanceof varData_872) {
        return param_1;
      } else if (param_1 instanceof varData_742) {
        return new varData_872(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_872(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_872(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_872(param_1, param_2);
    };
    var varData_878 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_742) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_742(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_742(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_742(param_1, param_2, param_3);
    };
    var varData_879 = (param_1, param_2) => {
      let varData_880 = 0;
      const varData_881 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        const varData_882 = param_2[loopIdx];
        const varData_883 = param_2[(loopIdx + 1) % param_2.length];
        if (varData_882.y <= param_1.y) {
          if (varData_883.y > param_1.y && varData_881(varData_882, varData_883, param_1) > 0) {
            varData_880++;
          }
        } else if (varData_883.y <= param_1.y && varData_881(varData_882, varData_883, param_1) < 0) {
          varData_880--;
        }
      }
      return varData_880;
    };
    var varData_884 = {
      clamp: varData_873,
      getMapRange: varData_874,
      getDistance: varData_875,
      getRandomNumber: varData_876,
      parseVector2: varData_877,
      parseVector3: varData_878,
      windingNumber: varData_879
    };
    var varData_885 = varData_884;
    var varData_886 = {};
    var varData_887 = {
      ArrUtils: () => varData_893
    };
    varData_718(varData_886, varData_887);
    var varData_888 = (param_1) => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const varData_889 = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[varData_889]] = [param_1[varData_889], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_890 = (param_1, param_2) => {
      const varData_891 = [];
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_891.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return varData_891;
    };
    var varData_892 = {
      shuffleArray: varData_888,
      getRandomElements: varData_890
    };
    var varData_893 = varData_892;
    function handleAction_82(param_1, param_2) {
      const varData_894 = "_";
      const varData_895 = handleAction_83((param_1_1, param_2_1, ..._0x5ba421) => {
        return param_1(param_1_1, ..._0x5ba421);
      }, param_2);
      return {
        get: function(..._0x50c5e9) {
          return varData_895.get(varData_894, ..._0x50c5e9);
        },
        reset: function() {
          varData_895.reset(varData_894);
        }
      };
    }
    function handleAction_83(param_1, param_2) {
      const varData_896 = param_2.timeToLive || 6e4;
      const varData_897 = {};
      const varData_898 = param_2.immediateResolve || false;
      async function handleAction_84(param_1_1, ..._0x4840b9) {
        let varData_899 = varData_897[param_1_1];
        if (!varData_899) {
          varData_899 = {
            value: null,
            lastUpdated: 0
          };
          varData_897[param_1_1] = varData_899;
        }
        const timestamp = Date.now();
        if (varData_899.lastUpdated === 0 || timestamp - varData_899.lastUpdated > varData_896) {
          const [_0x307404, _0x21e567] = await param_1(varData_899, param_1_1, ..._0x4840b9);
          if (_0x307404) {
            varData_899.lastUpdated = timestamp;
            varData_899.value = _0x21e567;
          }
          return _0x21e567;
        }
        if (varData_898) {
          return Promise.resolve(varData_899.value);
        } else {
          return await new Promise((param_1_2) => setTimeout(() => param_1_2(varData_899.value), 0));
        }
      }
      return {
        get: async function(param_1_1, ..._0x43e6da) {
          return await handleAction_84(param_1_1, ..._0x43e6da);
        },
        reset: function(param_1_1) {
          const varData_900 = varData_897[param_1_1];
          if (varData_900) {
            varData_900.lastUpdated = 0;
          }
        },
        clear: function() {
          for (const varData_901 in varData_897) {
            delete varData_897[varData_901];
          }
        }
      };
    }
    function handleAction_85() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_143();
      } else {
        return new varData_716(4).toString();
      }
    }
    function handleAction_86(param_1) {
      return varData_170(param_1, varData_170.URL);
    }
    function handleAction_87(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_902 = Date.now() - timestamp > param_2;
          if (param_1() || varData_902) {
            clearInterval(intervalId);
            return param_1_1(varData_902);
          }
        }, 1);
      });
    }
    function handleAction_88(param_1) {
      return new Promise((param_1_1) => setTimeout(() => param_1_1(), param_1));
    }
    function handleAction_89() {
      return handleAction_88(0);
    }
    var varData_903 = {
      cache: handleAction_82,
      cacheableMap: handleAction_83,
      waitForCondition: handleAction_87,
      getUUID: handleAction_85,
      getStringHash: handleAction_86,
      wait: handleAction_88,
      waitForNextFrame: handleAction_89,
      deflate: varData_706,
      inflate: varData_710,
      ...varData_726,
      ...varData_886
    };
    var varData_904 = varData_903;
    var varData_905 = ((param_1) => {
      param_1[param_1.hat = 0] = "hat";
      param_1[param_1.mask = 1] = "mask";
      param_1[param_1.glasses = 2] = "glasses";
      param_1[param_1.armor = 3] = "armor";
      param_1[param_1.backpack = 4] = "backpack";
      param_1[param_1.idcard = 5] = "idcard";
      param_1[param_1.mobilephone = 6] = "mobilephone";
      param_1[param_1.tablet = 7] = "tablet";
      param_1[param_1.keyring = 8] = "keyring";
      param_1[param_1.wallet = 9] = "wallet";
      return param_1;
    })(varData_905 || {});
    ;
    function handleAction_90(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_91(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_92(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_906 = param_1[param_6](param_7);
        var varData_907 = varData_906.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_906.done) {
        param_2(varData_907);
      } else {
        Promise.resolve(varData_907).then(param_4, param_5);
      }
    }
    function handleAction_93(param_1) {
      return function() {
        var varData_908 = this;
        var varData_909 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_910 = param_1.apply(varData_908, varData_909);
          function handleAction_94(param_1_2) {
            handleAction_92(varData_910, param_1_1, param_2, handleAction_94, handleAction_95, "next", param_1_2);
          }
          function handleAction_95(param_1_2) {
            handleAction_92(varData_910, param_1_1, param_2, handleAction_94, handleAction_95, "throw", param_1_2);
          }
          handleAction_94(void 0);
        });
      };
    }
    function handleAction_96(param_1, param_2) {
      var varData_911 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_911 == null) {
        return;
      }
      var varData_912 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_913;
      var varData_914;
      try {
        for (varData_911 = varData_911.call(param_1); !(isEnabled_2 = (varData_913 = varData_911.next()).done); isEnabled_2 = true) {
          varData_912.push(varData_913.value);
          if (param_2 && varData_912.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_914 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_911.return != null) {
            varData_911.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_914;
          }
        }
      }
      return varData_912;
    }
    function handleAction_97() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_98(param_1, param_2) {
      return handleAction_91(param_1) || handleAction_96(param_1, param_2) || handleAction_99(param_1, param_2) || handleAction_97();
    }
    function handleAction_99(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_90(param_1, param_2);
      }
      var varData_915 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_915 === "Object" && param_1.constructor) {
        varData_915 = param_1.constructor.name;
      }
      if (varData_915 === "Map" || varData_915 === "Set") {
        return Array.from(varData_915);
      }
      if (varData_915 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_915)) {
        return handleAction_90(param_1, param_2);
      }
    }
    function handleAction_100(param_1, param_2) {
      var varData_916;
      var varData_917;
      var varData_918;
      var varData_919;
      var varData_920 = {
        label: 0,
        sent: function() {
          if (varData_918[0] & 1) {
            throw varData_918[1];
          }
          return varData_918[1];
        },
        trys: [],
        ops: []
      };
      varData_919 = {
        next: handleAction_101(0),
        throw: handleAction_101(1),
        return: handleAction_101(2)
      };
      if (typeof Symbol === "function") {
        varData_919[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_919;
      function handleAction_101(param_1_1) {
        return function(param_1_2) {
          return handleAction_102([param_1_1, param_1_2]);
        };
      }
      function handleAction_102(param_1_1) {
        if (varData_916) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_920) {
          try {
            varData_916 = 1;
            if (varData_917 && (varData_918 = param_1_1[0] & 2 ? varData_917.return : param_1_1[0] ? varData_917.throw || ((varData_918 = varData_917.return) && varData_918.call(varData_917), 0) : varData_917.next) && !(varData_918 = varData_918.call(varData_917, param_1_1[1])).done) {
              return varData_918;
            }
            varData_917 = 0;
            if (varData_918) {
              param_1_1 = [param_1_1[0] & 2, varData_918.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_918 = param_1_1;
                break;
              case 4:
                varData_920.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_920.label++;
                varData_917 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_920.ops.pop();
                varData_920.trys.pop();
                continue;
              default:
                if (!(varData_918 = varData_920.trys, varData_918 = varData_918.length > 0 && varData_918[varData_918.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_920 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_918 || param_1_1[1] > varData_918[0] && param_1_1[1] < varData_918[3])) {
                  varData_920.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_920.label < varData_918[1]) {
                  varData_920.label = varData_918[1];
                  varData_918 = param_1_1;
                  break;
                }
                if (varData_918 && varData_920.label < varData_918[2]) {
                  varData_920.label = varData_918[2];
                  varData_920.ops.push(param_1_1);
                  break;
                }
                if (varData_918[2]) {
                  varData_920.ops.pop();
                }
                varData_920.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_920);
          } catch (err) {
            param_1_1 = [6, err];
            varData_917 = 0;
          } finally {
            varData_916 = varData_918 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_921 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_921;
      }
    }
    var dataMap_1 = /* @__PURE__ */ new Map();
    var dataMap_2 = /* @__PURE__ */ new Map();
    var dataMap_3 = /* @__PURE__ */ new Map();
    RegisterCommand("dbg:audio:size", function() {
      console.log(`Entity Sounds Loaded ${dataMap_1.size}
Coord Sounds Loaded ${dataMap_2.size}
Loaded Banks ${dataMap_3.size === 0 ? 0 : Array.from(dataMap_3.values()).reduce(function(param_1, param_2) {
        return param_1 + param_2;
      }), 0}`);
    }, false);
    RegisterCommand("dbg:audio:print", function(param_1, param_2, param_3) {
      var varData_922 = param_2[0].toLowerCase();
      switch (varData_922) {
        case "entity":
          console.log("=========================");
          dataMap_1.forEach(function(param_1_1, param_2_1) {
            console.log(`Entity ${param_2_1}`);
            param_1_1.forEach(function(param_1_2) {
              console.log(param_1_2);
            });
          });
          console.log("=========================");
          break;
        case "coord":
          console.log("=========================");
          dataMap_2.forEach(function(param_1_1, param_2_1) {
            console.log(`Coord - SoundId ${param_2_1}`);
            console.log(param_1_1);
          });
          console.log("=========================");
          break;
        case "bank":
          console.log("=========================");
          dataMap_3.forEach(function(param_1_1, param_2_1) {
            console.log(`${param_2_1} - ${param_1_1} entries`);
          });
          console.log("=========================");
          break;
      }
      console.log(`Entity Sounds Loaded ${dataMap_1.size}
Coord Sounds Loaded ${dataMap_2.size}
Loaded Banks ${dataMap_3.size === 0 ? 0 : Array.from(dataMap_3.values()).reduce(function(param_1_1, param_2_1) {
        return param_1_1 + param_2_1;
      }), 0}`);
    }, false);
    var varData_923 = (function() {
      var varData_924 = handleAction_93(function(param_1, param_2) {
        var varData_925;
        var varData_926;
        var varData_927;
        return handleAction_100(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (param_1 === "" && param_2 === "") {
                return [2, ""];
              }
              if (param_1 !== "" && param_2 === "") {
                return [2, param_1];
              }
              varData_925 = param_2.includes("/") || param_2.includes("\\") ? param_2 : `${param_1 !== "" && param_2 !== "" ? `${param_1}/` : ""}${param_2}`.toLowerCase();
              return [4, varData_904.waitForCondition(function() {
                return RequestScriptAudioBank(varData_925, false);
              }, 3e3)];
            case 1:
              varData_926 = param_1_1.sent();
              if (varData_926) {
                console.log(`Failed to load audio bank ${varData_925}`);
                return [2, false];
              }
              varData_927 = dataMap_3.get(varData_925);
              if (!varData_927) {
                dataMap_3.set(varData_925, 1);
              } else {
                dataMap_3.set(varData_925, varData_927 + 1);
              }
              return [2, varData_925];
          }
        });
      });
      return function _0x55d6ae(param_1, param_2) {
        return varData_924.apply(this, arguments);
      };
    })();
    function handleAction_103(param_1) {
      StopSound(param_1.soundId);
      ReleaseSoundId(param_1.soundId);
      handleAction_104(param_1.bankName);
    }
    function handleAction_104(param_1) {
      if (param_1 === "") {
        return;
      }
      var varData_928 = dataMap_3.get(param_1);
      if (varData_928) {
        varData_928 -= 1;
        if (varData_928 == 0) {
          console.log(`[AUDIO] Unloaded ${param_1}`);
          ReleaseNamedScriptAudioBank(param_1);
          dataMap_3.delete(param_1);
        } else {
          dataMap_3.set(param_1, varData_928);
        }
      }
    }
    function handleAction_105(param_1, param_2, param_3) {
      return handleAction_106.apply(this, arguments);
    }
    function handleAction_106() {
      handleAction_106 = handleAction_93(function(param_1, param_2, param_3) {
        var varData_929;
        var varData_930;
        var varData_931;
        var varData_932;
        var varData_933;
        var varData_934;
        var varData_935 = arguments;
        return handleAction_100(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_929 = varData_935.length > 3 && varData_935[3] !== void 0 ? varData_935[3] : 0;
              varData_930 = varData_935.length > 4 ? varData_935[4] : void 0;
              varData_931 = varData_935.length > 5 && varData_935[5] !== void 0 ? varData_935[5] : false;
              return [4, varData_923(param_3, varData_930)];
            case 1:
              varData_932 = param_1_1.sent();
              if (varData_932 === false) {
                console.log(`Could not play entity sound ${param_2}`);
                return [2];
              }
              varData_933 = GetSoundId();
              if (varData_933 == -1) {
                console.log(`Could not play coord sound ${param_2}, could not get a sound id.`);
                return [2];
              }
              varData_934 = dataMap_1.get(param_1) ?? [];
              varData_934.push({
                sound: param_2,
                bankName: varData_932,
                soundId: varData_933,
                added: /* @__PURE__ */ new Date(),
                extended: varData_931
              });
              dataMap_1.set(param_1, varData_934);
              PlaySoundFromEntity(varData_933, param_2, param_1, param_3, false, varData_929);
              return [2, varData_933];
          }
        });
      });
      return handleAction_106.apply(this, arguments);
    }
    exports("PlayEntitySound", handleAction_105);
    function handleAction_107(param_1, param_2, param_3) {
      return handleAction_108.apply(this, arguments);
    }
    function handleAction_108() {
      handleAction_108 = handleAction_93(function(param_1, param_2, param_3) {
        var varData_936;
        var varData_937;
        var varData_938;
        var varData_939 = arguments;
        return handleAction_100(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_936 = varData_939.length > 3 && varData_939[3] !== void 0 ? varData_939[3] : 0;
              varData_937 = varData_939.length > 4 && varData_939[4] !== void 0 ? varData_939[4] : "";
              return [4, varData_923(param_3, varData_937)];
            case 1:
              varData_938 = param_1_1.sent();
              if (varData_938 === false) {
                console.log(`Could not play entity sound ${param_2}`);
                return [2];
              }
              PlaySoundFromEntity(-1, param_2, param_1, param_3, false, varData_936);
              handleAction_104(varData_938);
              return [2];
          }
        });
      });
      return handleAction_108.apply(this, arguments);
    }
    exports("PlayEntitySoundOneShot", handleAction_107);
    function handleAction_109(param_1, param_2) {
      var varData_940 = dataMap_1.get(param_1);
      if (varData_940 === void 0) {
        return;
      }
      var varData_941 = varData_940.findIndex(function(param_1_1) {
        return param_1_1.soundId === param_2;
      });
      if (varData_941 === -1) {
        return;
      }
      handleAction_103(varData_940[varData_941]);
      varData_940.splice(varData_941, 1);
      if (varData_940.length === 0) {
        dataMap_1.delete(param_1);
      }
    }
    exports("StopEntitySound", handleAction_109);
    function handleAction_110(param_1) {
      var varData_942 = dataMap_1.get(param_1);
      if (varData_942 === void 0) {
        return;
      }
      dataMap_1.set(param_1, []);
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_943 = void 0;
      try {
        for (var loopIdx = varData_942[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_944 = loopIdx_1.value;
          handleAction_103(varData_944);
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_943 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_943;
          }
        }
      }
      dataMap_1.delete(param_1);
    }
    exports("CleanUpEntitySounds", handleAction_110);
    function handleAction_111(param_1, param_2, param_3) {
      return handleAction_112.apply(this, arguments);
    }
    function handleAction_112() {
      handleAction_112 = handleAction_93(function(param_1, param_2, param_3) {
        var varData_945;
        var varData_946;
        var varData_947;
        var varData_948;
        var varData_949;
        var varData_950;
        var varData_951 = arguments;
        return handleAction_100(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_945 = varData_951.length > 3 && varData_951[3] !== void 0 ? varData_951[3] : 0;
              varData_946 = varData_951.length > 4 ? varData_951[4] : void 0;
              varData_947 = varData_951.length > 5 && varData_951[5] !== void 0 ? varData_951[5] : false;
              return [4, varData_923(param_3, varData_946)];
            case 1:
              varData_948 = param_1_1.sent();
              if (!varData_948) {
                console.log(`Could not play coord sound ${param_2}`);
                return [2];
              }
              varData_949 = GetSoundId();
              if (varData_949 == -1) {
                console.log(`Could not play coord sound ${param_2}, could not get a sound id.`);
                return [2];
              }
              dataMap_2.set(varData_949, {
                sound: param_2,
                bankName: varData_948,
                soundId: varData_949,
                coord: param_1,
                added: /* @__PURE__ */ new Date(),
                extended: varData_947
              });
              varData_950 = GetInteriorAtCoords(param_1.x, param_1.y, param_1.z);
              PlaySoundFromCoord(varData_949, param_2, param_1.x, param_1.y, param_1.z, param_3, false, varData_945, varData_950 === 0);
              return [2, varData_949];
          }
        });
      });
      return handleAction_112.apply(this, arguments);
    }
    exports("PlayCoordSound", handleAction_111);
    function handleAction_113(param_1) {
      var varData_952 = dataMap_2.get(param_1);
      if (!varData_952) {
        console.log(`Tried to stop a coordinate sound that doesn't exist? ${param_1} ${GetInvokingResource()}`);
        return;
      }
      handleAction_103(varData_952);
      dataMap_2.delete(param_1);
    }
    exports("StopCoordSound", handleAction_113);
    function handleAction_114(param_1, param_2) {
      var varData_953 = new varData_742(param_1);
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_954 = void 0;
      try {
        for (var loopIdx = dataMap_2[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_955 = handleAction_98(loopIdx_1.value, 2);
          var varData_956 = varData_955[0];
          var varData_957 = varData_955[1];
          var varData_958 = varData_953.getDistance(varData_957.coord);
          if (varData_958 > param_2) {
            console.log(`Skipping cleaning up due to range ${param_2} ${varData_957.bankName}`);
            continue;
          }
          handleAction_103(varData_957);
          dataMap_2.delete(varData_956);
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_954 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_954;
          }
        }
      }
    }
    exports("CleanUpCoordSounds", handleAction_114);
    setInterval(function() {
      dataMap_2.forEach(function(param_1, param_2) {
        if (param_1.added >= /* @__PURE__ */ new Date() && !param_1.extended) {
          console.log(`Cleaning up coord sound ${param_1.sound}`);
          handleAction_103(param_1);
          dataMap_2.delete(param_2);
        }
      });
      dataMap_1.forEach(function(param_1, param_2) {
        param_1.forEach(function(param_1_1, param_2_1) {
          if (param_1_1.added >= /* @__PURE__ */ new Date() && !param_1_1.extended) {
            console.log(`Cleaning up entity sound ${param_1_1.sound}`);
            handleAction_103(param_1_1);
            param_1.splice(param_2_1, 1);
          }
        });
        if (param_1.length == 0) {
          console.log("DELETE ", param_2);
          dataMap_1.delete(param_2);
        }
      });
    }, 9e5);
    ;
    var varData_959 = Object.create;
    var varData_960 = Object.defineProperty;
    var varData_961 = Object.getOwnPropertyDescriptor;
    var varData_962 = Object.getOwnPropertyNames;
    var varData_963 = Object.getPrototypeOf;
    var varData_964 = Object.prototype.hasOwnProperty;
    var varData_965 = (param_1, param_2) => function _0x159f39() {
      if (!param_2) {
        (0, param_1[varData_962(param_1)[0]])((param_2 = {
          exports: {}
        }).exports, param_2);
      }
      return param_2.exports;
    };
    var varData_966 = (param_1, param_2) => {
      for (var varData_967 in param_2) {
        varData_960(param_1, varData_967, {
          get: param_2[varData_967],
          enumerable: true
        });
      }
    };
    var varData_968 = (param_1, param_2, param_3, param_4) => {
      if (param_2 && typeof param_2 === "object" || typeof param_2 === "function") {
        for (let varData_969 of varData_962(param_2)) {
          if (!varData_964.call(param_1, varData_969) && varData_969 !== param_3) {
            varData_960(param_1, varData_969, {
              get: () => param_2[varData_969],
              enumerable: !(param_4 = varData_961(param_2, varData_969)) || param_4.enumerable
            });
          }
        }
      }
      return param_1;
    };
    var varData_970 = (param_1, param_2, param_3) => {
      param_3 = param_1 != null ? varData_959(varData_963(param_1)) : {};
      return varData_968(param_2 || !param_1 || !param_1.__esModule ? varData_960(param_3, "default", {
        value: param_1,
        enumerable: true
      }) : param_3, param_1);
    };
    var varData_971 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_972 = (param_1, param_2, param_3) => {
      varData_971(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_973 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_974 = (param_1, param_2, param_3, param_4) => {
      varData_971(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_975 = (param_1, param_2, param_3, param_4) => ({
      set _(param_1_1) {
        varData_974(param_1, param_2, param_1_1, param_3);
      },
      get _() {
        return varData_972(param_1, param_2, param_4);
      }
    });
    var varData_976 = (param_1, param_2, param_3) => {
      varData_971(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_977 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/core.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1();
          } else if (typeof define === "function" && define.amd) {
            define([], param_2_1);
          } else {
            param_1_1.CryptoJS = param_2_1();
          }
        })(param_1, function() {
          var varData_978 = varData_978 || (function(param_1_1, param_2_1) {
            var varData_979 = Object.create || /* @__PURE__ */ (function() {
              function handleAction_115() {
              }
              ;
              return function(param_1_2) {
                var varData_980;
                handleAction_115.prototype = param_1_2;
                varData_980 = new handleAction_115();
                handleAction_115.prototype = null;
                return varData_980;
              };
            })();
            var varData_981 = {};
            var varData_982 = varData_981.lib = {};
            var varData_983 = varData_982.Base = /* @__PURE__ */ (function() {
              return {
                extend: function(param_1_2) {
                  var varData_984 = varData_979(this);
                  if (param_1_2) {
                    varData_984.mixIn(param_1_2);
                  }
                  if (!varData_984.hasOwnProperty("init") || this.init === varData_984.init) {
                    varData_984.init = function() {
                      varData_984.$super.init.apply(this, arguments);
                    };
                  }
                  varData_984.init.prototype = varData_984;
                  varData_984.$super = this;
                  return varData_984;
                },
                create: function() {
                  var varData_985 = this.extend();
                  varData_985.init.apply(varData_985, arguments);
                  return varData_985;
                },
                init: function() {
                },
                mixIn: function(param_1_2) {
                  for (var varData_986 in param_1_2) {
                    if (param_1_2.hasOwnProperty(varData_986)) {
                      this[varData_986] = param_1_2[varData_986];
                    }
                  }
                  if (param_1_2.hasOwnProperty("toString")) {
                    this.toString = param_1_2.toString;
                  }
                },
                clone: function() {
                  return this.init.prototype.extend(this);
                }
              };
            })();
            var varData_987 = varData_982.WordArray = varData_983.extend({
              init: function(param_1_2, param_2_2) {
                param_1_2 = this.words = param_1_2 || [];
                if (param_2_2 != param_2_1) {
                  this.sigBytes = param_2_2;
                } else {
                  this.sigBytes = param_1_2.length * 4;
                }
              },
              toString: function(param_1_2) {
                return (param_1_2 || varData_1002).stringify(this);
              },
              concat: function(param_1_2) {
                var varData_988 = this.words;
                var varData_989 = param_1_2.words;
                var varData_990 = this.sigBytes;
                var varData_991 = param_1_2.sigBytes;
                this.clamp();
                if (varData_990 % 4) {
                  for (var loopIdx = 0; loopIdx < varData_991; loopIdx++) {
                    var varData_992 = varData_989[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                    varData_988[varData_990 + loopIdx >>> 2] |= varData_992 << 24 - (varData_990 + loopIdx) % 4 * 8;
                  }
                } else {
                  for (var loopIdx = 0; loopIdx < varData_991; loopIdx += 4) {
                    varData_988[varData_990 + loopIdx >>> 2] = varData_989[loopIdx >>> 2];
                  }
                }
                this.sigBytes += varData_991;
                return this;
              },
              clamp: function() {
                var varData_993 = this.words;
                var varData_994 = this.sigBytes;
                varData_993[varData_994 >>> 2] &= -1 << 32 - varData_994 % 4 * 8;
                varData_993.length = param_1_1.ceil(varData_994 / 4);
              },
              clone: function() {
                var varData_995 = varData_983.clone.call(this);
                varData_995.words = this.words.slice(0);
                return varData_995;
              },
              random: function(param_1_2) {
                var varData_996 = [];
                function handleAction_116(param_1_3) {
                  var param_1_3 = param_1_3;
                  var varData_997 = 987654321;
                  var varData_998 = 4294967295;
                  return function() {
                    varData_997 = (varData_997 & 65535) * 36969 + (varData_997 >> 16) & varData_998;
                    param_1_3 = (param_1_3 & 65535) * 18e3 + (param_1_3 >> 16) & varData_998;
                    var varData_999 = (varData_997 << 16) + param_1_3 & varData_998;
                    varData_999 /= 4294967296;
                    varData_999 += 0.5;
                    return varData_999 * (param_1_1.random() > 0.5 ? 1 : -1);
                  };
                }
                for (var loopIdx = 0, loopIdx_1; loopIdx < param_1_2; loopIdx += 4) {
                  var varData_1000 = handleAction_116((loopIdx_1 || param_1_1.random()) * 4294967296);
                  loopIdx_1 = varData_1000() * 987654071;
                  varData_996.push(varData_1000() * 4294967296 | 0);
                }
                return new varData_987.init(varData_996, param_1_2);
              }
            });
            var varData_1001 = varData_981.enc = {};
            var varData_1002 = varData_1001.Hex = {
              stringify: function(param_1_2) {
                var varData_1003 = param_1_2.words;
                var varData_1004 = param_1_2.sigBytes;
                var varData_1005 = [];
                for (var loopIdx = 0; loopIdx < varData_1004; loopIdx++) {
                  var varData_1006 = varData_1003[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  varData_1005.push((varData_1006 >>> 4).toString(16));
                  varData_1005.push((varData_1006 & 15).toString(16));
                }
                return varData_1005.join("");
              },
              parse: function(param_1_2) {
                var varData_1007 = param_1_2.length;
                var varData_1008 = [];
                for (var loopIdx = 0; loopIdx < varData_1007; loopIdx += 2) {
                  varData_1008[loopIdx >>> 3] |= parseInt(param_1_2.substr(loopIdx, 2), 16) << 24 - loopIdx % 8 * 4;
                }
                return new varData_987.init(varData_1008, varData_1007 / 2);
              }
            };
            var varData_1009 = varData_1001.Latin1 = {
              stringify: function(param_1_2) {
                var varData_1010 = param_1_2.words;
                var varData_1011 = param_1_2.sigBytes;
                var varData_1012 = [];
                for (var loopIdx = 0; loopIdx < varData_1011; loopIdx++) {
                  var varData_1013 = varData_1010[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  varData_1012.push(String.fromCharCode(varData_1013));
                }
                return varData_1012.join("");
              },
              parse: function(param_1_2) {
                var varData_1014 = param_1_2.length;
                var varData_1015 = [];
                for (var loopIdx = 0; loopIdx < varData_1014; loopIdx++) {
                  varData_1015[loopIdx >>> 2] |= (param_1_2.charCodeAt(loopIdx) & 255) << 24 - loopIdx % 4 * 8;
                }
                return new varData_987.init(varData_1015, varData_1014);
              }
            };
            var varData_1016 = varData_1001.Utf8 = {
              stringify: function(param_1_2) {
                try {
                  return decodeURIComponent(escape(varData_1009.stringify(param_1_2)));
                } catch (err) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function(param_1_2) {
                return varData_1009.parse(unescape(encodeURIComponent(param_1_2)));
              }
            };
            var varData_1017 = varData_982.BufferedBlockAlgorithm = varData_983.extend({
              reset: function() {
                this._data = new varData_987.init();
                this._nDataBytes = 0;
              },
              _append: function(param_1_2) {
                if (typeof param_1_2 == "string") {
                  param_1_2 = varData_1016.parse(param_1_2);
                }
                this._data.concat(param_1_2);
                this._nDataBytes += param_1_2.sigBytes;
              },
              _process: function(param_1_2) {
                var varData_1018 = this._data;
                var varData_1019 = varData_1018.words;
                var varData_1020 = varData_1018.sigBytes;
                var varData_1021 = this.blockSize;
                var varData_1022 = varData_1021 * 4;
                var varData_1023 = varData_1020 / varData_1022;
                if (param_1_2) {
                  varData_1023 = param_1_1.ceil(varData_1023);
                } else {
                  varData_1023 = param_1_1.max((varData_1023 | 0) - this._minBufferSize, 0);
                }
                var varData_1024 = varData_1023 * varData_1021;
                var varData_1025 = param_1_1.min(varData_1024 * 4, varData_1020);
                if (varData_1024) {
                  for (var loopIdx = 0; loopIdx < varData_1024; loopIdx += varData_1021) {
                    this._doProcessBlock(varData_1019, loopIdx);
                  }
                  var varData_1026 = varData_1019.splice(0, varData_1024);
                  varData_1018.sigBytes -= varData_1025;
                }
                return new varData_987.init(varData_1026, varData_1025);
              },
              clone: function() {
                var varData_1027 = varData_983.clone.call(this);
                varData_1027._data = this._data.clone();
                return varData_1027;
              },
              _minBufferSize: 0
            });
            var varData_1028 = varData_982.Hasher = varData_1017.extend({
              cfg: varData_983.extend(),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
                this.reset();
              },
              reset: function() {
                varData_1017.reset.call(this);
                this._doReset();
              },
              update: function(param_1_2) {
                this._append(param_1_2);
                this._process();
                return this;
              },
              finalize: function(param_1_2) {
                if (param_1_2) {
                  this._append(param_1_2);
                }
                var varData_1029 = this._doFinalize();
                return varData_1029;
              },
              blockSize: 16,
              _createHelper: function(param_1_2) {
                return function(param_1_3, param_2_2) {
                  return new param_1_2.init(param_2_2).finalize(param_1_3);
                };
              },
              _createHmacHelper: function(param_1_2) {
                return function(param_1_3, param_2_2) {
                  return new varData_1030.HMAC.init(param_1_2, param_2_2).finalize(param_1_3);
                };
              }
            });
            var varData_1030 = varData_981.algo = {};
            return varData_981;
          })(Math);
          return varData_978;
        });
      }
    });
    var varData_1031 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1032 = param_1_1;
            var varData_1033 = varData_1032.lib;
            var varData_1034 = varData_1033.Base;
            var varData_1035 = varData_1033.WordArray;
            var varData_1036 = varData_1032.x64 = {};
            var varData_1037 = {
              init: function(param_1_3, param_2_1) {
                this.high = param_1_3;
                this.low = param_2_1;
              }
            };
            var varData_1038 = varData_1036.Word = varData_1034.extend(varData_1037);
            var varData_1039 = varData_1036.WordArray = varData_1034.extend({
              init: function(param_1_3, param_2_1) {
                param_1_3 = this.words = param_1_3 || [];
                if (param_2_1 != param_1_2) {
                  this.sigBytes = param_2_1;
                } else {
                  this.sigBytes = param_1_3.length * 8;
                }
              },
              toX32: function() {
                var varData_1040 = this.words;
                var varData_1041 = varData_1040.length;
                var varData_1042 = [];
                for (var loopIdx = 0; loopIdx < varData_1041; loopIdx++) {
                  var varData_1043 = varData_1040[loopIdx];
                  varData_1042.push(varData_1043.high);
                  varData_1042.push(varData_1043.low);
                }
                return varData_1035.create(varData_1042, this.sigBytes);
              },
              clone: function() {
                var varData_1044 = varData_1034.clone.call(this);
                var varData_1045 = varData_1044.words = this.words.slice(0);
                var varData_1046 = varData_1045.length;
                for (var loopIdx = 0; loopIdx < varData_1046; loopIdx++) {
                  varData_1045[loopIdx] = varData_1045[loopIdx].clone();
                }
                return varData_1044;
              }
            });
          })();
          return param_1_1;
        });
      }
    });
    var varData_1047 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            if (typeof ArrayBuffer != "function") {
              return;
            }
            var varData_1048 = param_1_1;
            var varData_1049 = varData_1048.lib;
            var varData_1050 = varData_1049.WordArray;
            var varData_1051 = varData_1050.init;
            var varData_1052 = varData_1050.init = function(param_1_2) {
              if (param_1_2 instanceof ArrayBuffer) {
                param_1_2 = new Uint8Array(param_1_2);
              }
              if (param_1_2 instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && param_1_2 instanceof Uint8ClampedArray || param_1_2 instanceof Int16Array || param_1_2 instanceof Uint16Array || param_1_2 instanceof Int32Array || param_1_2 instanceof Uint32Array || param_1_2 instanceof Float32Array || param_1_2 instanceof Float64Array) {
                param_1_2 = new Uint8Array(param_1_2.buffer, param_1_2.byteOffset, param_1_2.byteLength);
              }
              if (param_1_2 instanceof Uint8Array) {
                var varData_1053 = param_1_2.byteLength;
                var varData_1054 = [];
                for (var loopIdx = 0; loopIdx < varData_1053; loopIdx++) {
                  varData_1054[loopIdx >>> 2] |= param_1_2[loopIdx] << 24 - loopIdx % 4 * 8;
                }
                varData_1051.call(this, varData_1054, varData_1053);
              } else {
                varData_1051.apply(this, arguments);
              }
            };
            varData_1052.prototype = varData_1050;
          })();
          return param_1_1.lib.WordArray;
        });
      }
    });
    var varData_1055 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1056 = param_1_1;
            var varData_1057 = varData_1056.lib;
            var varData_1058 = varData_1057.WordArray;
            var varData_1059 = varData_1056.enc;
            var varData_1060 = varData_1059.Utf16 = varData_1059.Utf16BE = {
              stringify: function(param_1_2) {
                var varData_1061 = param_1_2.words;
                var varData_1062 = param_1_2.sigBytes;
                var varData_1063 = [];
                for (var loopIdx = 0; loopIdx < varData_1062; loopIdx += 2) {
                  var varData_1064 = varData_1061[loopIdx >>> 2] >>> 16 - loopIdx % 4 * 8 & 65535;
                  varData_1063.push(String.fromCharCode(varData_1064));
                }
                return varData_1063.join("");
              },
              parse: function(param_1_2) {
                var varData_1065 = param_1_2.length;
                var varData_1066 = [];
                for (var loopIdx = 0; loopIdx < varData_1065; loopIdx++) {
                  varData_1066[loopIdx >>> 1] |= param_1_2.charCodeAt(loopIdx) << 16 - loopIdx % 2 * 16;
                }
                return varData_1058.create(varData_1066, varData_1065 * 2);
              }
            };
            varData_1059.Utf16LE = {
              stringify: function(param_1_2) {
                var varData_1067 = param_1_2.words;
                var varData_1068 = param_1_2.sigBytes;
                var varData_1069 = [];
                for (var loopIdx = 0; loopIdx < varData_1068; loopIdx += 2) {
                  var varData_1070 = handleAction_117(varData_1067[loopIdx >>> 2] >>> 16 - loopIdx % 4 * 8 & 65535);
                  varData_1069.push(String.fromCharCode(varData_1070));
                }
                return varData_1069.join("");
              },
              parse: function(param_1_2) {
                var varData_1071 = param_1_2.length;
                var varData_1072 = [];
                for (var loopIdx = 0; loopIdx < varData_1071; loopIdx++) {
                  varData_1072[loopIdx >>> 1] |= handleAction_117(param_1_2.charCodeAt(loopIdx) << 16 - loopIdx % 2 * 16);
                }
                return varData_1058.create(varData_1072, varData_1071 * 2);
              }
            };
            function handleAction_117(param_1_2) {
              return param_1_2 << 8 & -16711936 | param_1_2 >>> 8 & 16711935;
            }
          })();
          return param_1_1.enc.Utf16;
        });
      }
    });
    var varData_1073 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1074 = param_1_1;
            var varData_1075 = varData_1074.lib;
            var varData_1076 = varData_1075.WordArray;
            var varData_1077 = varData_1074.enc;
            var varData_1078 = varData_1077.Base64 = {
              stringify: function(param_1_2) {
                var varData_1079 = param_1_2.words;
                var varData_1080 = param_1_2.sigBytes;
                var varData_1081 = this._map;
                param_1_2.clamp();
                var varData_1082 = [];
                for (var loopIdx = 0; loopIdx < varData_1080; loopIdx += 3) {
                  var varData_1083 = varData_1079[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  var varData_1084 = varData_1079[loopIdx + 1 >>> 2] >>> 24 - (loopIdx + 1) % 4 * 8 & 255;
                  var varData_1085 = varData_1079[loopIdx + 2 >>> 2] >>> 24 - (loopIdx + 2) % 4 * 8 & 255;
                  var varData_1086 = varData_1083 << 16 | varData_1084 << 8 | varData_1085;
                  for (var loopIdx_1 = 0; loopIdx_1 < 4 && loopIdx + loopIdx_1 * 0.75 < varData_1080; loopIdx_1++) {
                    varData_1082.push(varData_1081.charAt(varData_1086 >>> (3 - loopIdx_1) * 6 & 63));
                  }
                }
                var varData_1087 = varData_1081.charAt(64);
                if (varData_1087) {
                  while (varData_1082.length % 4) {
                    varData_1082.push(varData_1087);
                  }
                }
                return varData_1082.join("");
              },
              parse: function(param_1_2) {
                var varData_1088 = param_1_2.length;
                var varData_1089 = this._map;
                var varData_1090 = this._reverseMap;
                if (!varData_1090) {
                  varData_1090 = this._reverseMap = [];
                  for (var loopIdx = 0; loopIdx < varData_1089.length; loopIdx++) {
                    varData_1090[varData_1089.charCodeAt(loopIdx)] = loopIdx;
                  }
                }
                var varData_1091 = varData_1089.charAt(64);
                if (varData_1091) {
                  var varData_1092 = param_1_2.indexOf(varData_1091);
                  if (varData_1092 !== -1) {
                    varData_1088 = varData_1092;
                  }
                }
                return handleAction_118(param_1_2, varData_1088, varData_1090);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function handleAction_118(param_1_2, param_2_1, param_3) {
              var varData_1093 = [];
              var varData_1094 = 0;
              for (var loopIdx = 0; loopIdx < param_2_1; loopIdx++) {
                if (loopIdx % 4) {
                  var varData_1095 = param_3[param_1_2.charCodeAt(loopIdx - 1)] << loopIdx % 4 * 2;
                  var varData_1096 = param_3[param_1_2.charCodeAt(loopIdx)] >>> 6 - loopIdx % 4 * 2;
                  varData_1093[varData_1094 >>> 2] |= (varData_1095 | varData_1096) << 24 - varData_1094 % 4 * 8;
                  varData_1094++;
                }
              }
              return varData_1076.create(varData_1093, varData_1094);
            }
          })();
          return param_1_1.enc.Base64;
        });
      }
    });
    var varData_1097 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1098 = param_1_1;
            var varData_1099 = varData_1098.lib;
            var varData_1100 = varData_1099.WordArray;
            var varData_1101 = varData_1099.Hasher;
            var varData_1102 = varData_1098.algo;
            var varData_1103 = [];
            (function() {
              for (var loopIdx = 0; loopIdx < 64; loopIdx++) {
                varData_1103[loopIdx] = param_1_2.abs(param_1_2.sin(loopIdx + 1)) * 4294967296 | 0;
              }
            })();
            var varData_1104 = varData_1102.MD5 = varData_1101.extend({
              _doReset: function() {
                this._hash = new varData_1100.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_1105 = param_2_1 + loopIdx;
                  var varData_1106 = param_1_3[varData_1105];
                  param_1_3[varData_1105] = (varData_1106 << 8 | varData_1106 >>> 24) & 16711935 | (varData_1106 << 24 | varData_1106 >>> 8) & -16711936;
                }
                var varData_1107 = this._hash.words;
                var varData_1108 = param_1_3[param_2_1 + 0];
                var varData_1109 = param_1_3[param_2_1 + 1];
                var varData_1110 = param_1_3[param_2_1 + 2];
                var varData_1111 = param_1_3[param_2_1 + 3];
                var varData_1112 = param_1_3[param_2_1 + 4];
                var varData_1113 = param_1_3[param_2_1 + 5];
                var varData_1114 = param_1_3[param_2_1 + 6];
                var varData_1115 = param_1_3[param_2_1 + 7];
                var varData_1116 = param_1_3[param_2_1 + 8];
                var varData_1117 = param_1_3[param_2_1 + 9];
                var varData_1118 = param_1_3[param_2_1 + 10];
                var varData_1119 = param_1_3[param_2_1 + 11];
                var varData_1120 = param_1_3[param_2_1 + 12];
                var varData_1121 = param_1_3[param_2_1 + 13];
                var varData_1122 = param_1_3[param_2_1 + 14];
                var varData_1123 = param_1_3[param_2_1 + 15];
                var varData_1124 = varData_1107[0];
                var varData_1125 = varData_1107[1];
                var varData_1126 = varData_1107[2];
                var varData_1127 = varData_1107[3];
                varData_1124 = handleAction_119(varData_1124, varData_1125, varData_1126, varData_1127, varData_1108, 7, varData_1103[0]);
                varData_1127 = handleAction_119(varData_1127, varData_1124, varData_1125, varData_1126, varData_1109, 12, varData_1103[1]);
                varData_1126 = handleAction_119(varData_1126, varData_1127, varData_1124, varData_1125, varData_1110, 17, varData_1103[2]);
                varData_1125 = handleAction_119(varData_1125, varData_1126, varData_1127, varData_1124, varData_1111, 22, varData_1103[3]);
                varData_1124 = handleAction_119(varData_1124, varData_1125, varData_1126, varData_1127, varData_1112, 7, varData_1103[4]);
                varData_1127 = handleAction_119(varData_1127, varData_1124, varData_1125, varData_1126, varData_1113, 12, varData_1103[5]);
                varData_1126 = handleAction_119(varData_1126, varData_1127, varData_1124, varData_1125, varData_1114, 17, varData_1103[6]);
                varData_1125 = handleAction_119(varData_1125, varData_1126, varData_1127, varData_1124, varData_1115, 22, varData_1103[7]);
                varData_1124 = handleAction_119(varData_1124, varData_1125, varData_1126, varData_1127, varData_1116, 7, varData_1103[8]);
                varData_1127 = handleAction_119(varData_1127, varData_1124, varData_1125, varData_1126, varData_1117, 12, varData_1103[9]);
                varData_1126 = handleAction_119(varData_1126, varData_1127, varData_1124, varData_1125, varData_1118, 17, varData_1103[10]);
                varData_1125 = handleAction_119(varData_1125, varData_1126, varData_1127, varData_1124, varData_1119, 22, varData_1103[11]);
                varData_1124 = handleAction_119(varData_1124, varData_1125, varData_1126, varData_1127, varData_1120, 7, varData_1103[12]);
                varData_1127 = handleAction_119(varData_1127, varData_1124, varData_1125, varData_1126, varData_1121, 12, varData_1103[13]);
                varData_1126 = handleAction_119(varData_1126, varData_1127, varData_1124, varData_1125, varData_1122, 17, varData_1103[14]);
                varData_1125 = handleAction_119(varData_1125, varData_1126, varData_1127, varData_1124, varData_1123, 22, varData_1103[15]);
                varData_1124 = handleAction_120(varData_1124, varData_1125, varData_1126, varData_1127, varData_1109, 5, varData_1103[16]);
                varData_1127 = handleAction_120(varData_1127, varData_1124, varData_1125, varData_1126, varData_1114, 9, varData_1103[17]);
                varData_1126 = handleAction_120(varData_1126, varData_1127, varData_1124, varData_1125, varData_1119, 14, varData_1103[18]);
                varData_1125 = handleAction_120(varData_1125, varData_1126, varData_1127, varData_1124, varData_1108, 20, varData_1103[19]);
                varData_1124 = handleAction_120(varData_1124, varData_1125, varData_1126, varData_1127, varData_1113, 5, varData_1103[20]);
                varData_1127 = handleAction_120(varData_1127, varData_1124, varData_1125, varData_1126, varData_1118, 9, varData_1103[21]);
                varData_1126 = handleAction_120(varData_1126, varData_1127, varData_1124, varData_1125, varData_1123, 14, varData_1103[22]);
                varData_1125 = handleAction_120(varData_1125, varData_1126, varData_1127, varData_1124, varData_1112, 20, varData_1103[23]);
                varData_1124 = handleAction_120(varData_1124, varData_1125, varData_1126, varData_1127, varData_1117, 5, varData_1103[24]);
                varData_1127 = handleAction_120(varData_1127, varData_1124, varData_1125, varData_1126, varData_1122, 9, varData_1103[25]);
                varData_1126 = handleAction_120(varData_1126, varData_1127, varData_1124, varData_1125, varData_1111, 14, varData_1103[26]);
                varData_1125 = handleAction_120(varData_1125, varData_1126, varData_1127, varData_1124, varData_1116, 20, varData_1103[27]);
                varData_1124 = handleAction_120(varData_1124, varData_1125, varData_1126, varData_1127, varData_1121, 5, varData_1103[28]);
                varData_1127 = handleAction_120(varData_1127, varData_1124, varData_1125, varData_1126, varData_1110, 9, varData_1103[29]);
                varData_1126 = handleAction_120(varData_1126, varData_1127, varData_1124, varData_1125, varData_1115, 14, varData_1103[30]);
                varData_1125 = handleAction_120(varData_1125, varData_1126, varData_1127, varData_1124, varData_1120, 20, varData_1103[31]);
                varData_1124 = handleAction_121(varData_1124, varData_1125, varData_1126, varData_1127, varData_1113, 4, varData_1103[32]);
                varData_1127 = handleAction_121(varData_1127, varData_1124, varData_1125, varData_1126, varData_1116, 11, varData_1103[33]);
                varData_1126 = handleAction_121(varData_1126, varData_1127, varData_1124, varData_1125, varData_1119, 16, varData_1103[34]);
                varData_1125 = handleAction_121(varData_1125, varData_1126, varData_1127, varData_1124, varData_1122, 23, varData_1103[35]);
                varData_1124 = handleAction_121(varData_1124, varData_1125, varData_1126, varData_1127, varData_1109, 4, varData_1103[36]);
                varData_1127 = handleAction_121(varData_1127, varData_1124, varData_1125, varData_1126, varData_1112, 11, varData_1103[37]);
                varData_1126 = handleAction_121(varData_1126, varData_1127, varData_1124, varData_1125, varData_1115, 16, varData_1103[38]);
                varData_1125 = handleAction_121(varData_1125, varData_1126, varData_1127, varData_1124, varData_1118, 23, varData_1103[39]);
                varData_1124 = handleAction_121(varData_1124, varData_1125, varData_1126, varData_1127, varData_1121, 4, varData_1103[40]);
                varData_1127 = handleAction_121(varData_1127, varData_1124, varData_1125, varData_1126, varData_1108, 11, varData_1103[41]);
                varData_1126 = handleAction_121(varData_1126, varData_1127, varData_1124, varData_1125, varData_1111, 16, varData_1103[42]);
                varData_1125 = handleAction_121(varData_1125, varData_1126, varData_1127, varData_1124, varData_1114, 23, varData_1103[43]);
                varData_1124 = handleAction_121(varData_1124, varData_1125, varData_1126, varData_1127, varData_1117, 4, varData_1103[44]);
                varData_1127 = handleAction_121(varData_1127, varData_1124, varData_1125, varData_1126, varData_1120, 11, varData_1103[45]);
                varData_1126 = handleAction_121(varData_1126, varData_1127, varData_1124, varData_1125, varData_1123, 16, varData_1103[46]);
                varData_1125 = handleAction_121(varData_1125, varData_1126, varData_1127, varData_1124, varData_1110, 23, varData_1103[47]);
                varData_1124 = handleAction_122(varData_1124, varData_1125, varData_1126, varData_1127, varData_1108, 6, varData_1103[48]);
                varData_1127 = handleAction_122(varData_1127, varData_1124, varData_1125, varData_1126, varData_1115, 10, varData_1103[49]);
                varData_1126 = handleAction_122(varData_1126, varData_1127, varData_1124, varData_1125, varData_1122, 15, varData_1103[50]);
                varData_1125 = handleAction_122(varData_1125, varData_1126, varData_1127, varData_1124, varData_1113, 21, varData_1103[51]);
                varData_1124 = handleAction_122(varData_1124, varData_1125, varData_1126, varData_1127, varData_1120, 6, varData_1103[52]);
                varData_1127 = handleAction_122(varData_1127, varData_1124, varData_1125, varData_1126, varData_1111, 10, varData_1103[53]);
                varData_1126 = handleAction_122(varData_1126, varData_1127, varData_1124, varData_1125, varData_1118, 15, varData_1103[54]);
                varData_1125 = handleAction_122(varData_1125, varData_1126, varData_1127, varData_1124, varData_1109, 21, varData_1103[55]);
                varData_1124 = handleAction_122(varData_1124, varData_1125, varData_1126, varData_1127, varData_1116, 6, varData_1103[56]);
                varData_1127 = handleAction_122(varData_1127, varData_1124, varData_1125, varData_1126, varData_1123, 10, varData_1103[57]);
                varData_1126 = handleAction_122(varData_1126, varData_1127, varData_1124, varData_1125, varData_1114, 15, varData_1103[58]);
                varData_1125 = handleAction_122(varData_1125, varData_1126, varData_1127, varData_1124, varData_1121, 21, varData_1103[59]);
                varData_1124 = handleAction_122(varData_1124, varData_1125, varData_1126, varData_1127, varData_1112, 6, varData_1103[60]);
                varData_1127 = handleAction_122(varData_1127, varData_1124, varData_1125, varData_1126, varData_1119, 10, varData_1103[61]);
                varData_1126 = handleAction_122(varData_1126, varData_1127, varData_1124, varData_1125, varData_1110, 15, varData_1103[62]);
                varData_1125 = handleAction_122(varData_1125, varData_1126, varData_1127, varData_1124, varData_1117, 21, varData_1103[63]);
                varData_1107[0] = varData_1107[0] + varData_1124 | 0;
                varData_1107[1] = varData_1107[1] + varData_1125 | 0;
                varData_1107[2] = varData_1107[2] + varData_1126 | 0;
                varData_1107[3] = varData_1107[3] + varData_1127 | 0;
              },
              _doFinalize: function() {
                var varData_1128 = this._data;
                var varData_1129 = varData_1128.words;
                var varData_1130 = this._nDataBytes * 8;
                var varData_1131 = varData_1128.sigBytes * 8;
                varData_1129[varData_1131 >>> 5] |= 128 << 24 - varData_1131 % 32;
                var varData_1132 = param_1_2.floor(varData_1130 / 4294967296);
                var varData_1133 = varData_1130;
                varData_1129[(varData_1131 + 64 >>> 9 << 4) + 15] = (varData_1132 << 8 | varData_1132 >>> 24) & 16711935 | (varData_1132 << 24 | varData_1132 >>> 8) & -16711936;
                varData_1129[(varData_1131 + 64 >>> 9 << 4) + 14] = (varData_1133 << 8 | varData_1133 >>> 24) & 16711935 | (varData_1133 << 24 | varData_1133 >>> 8) & -16711936;
                varData_1128.sigBytes = (varData_1129.length + 1) * 4;
                this._process();
                var varData_1134 = this._hash;
                var varData_1135 = varData_1134.words;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  var varData_1136 = varData_1135[loopIdx];
                  varData_1135[loopIdx] = (varData_1136 << 8 | varData_1136 >>> 24) & 16711935 | (varData_1136 << 24 | varData_1136 >>> 8) & -16711936;
                }
                return varData_1134;
              },
              clone: function() {
                var varData_1137 = varData_1101.clone.call(this);
                varData_1137._hash = this._hash.clone();
                return varData_1137;
              }
            });
            function handleAction_119(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_1138 = param_1_3 + (param_2_1 & param_3 | ~param_2_1 & param_4) + param_5 + param_7;
              return (varData_1138 << param_6 | varData_1138 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_120(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_1139 = param_1_3 + (param_2_1 & param_4 | param_3 & ~param_4) + param_5 + param_7;
              return (varData_1139 << param_6 | varData_1139 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_121(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_1140 = param_1_3 + (param_2_1 ^ param_3 ^ param_4) + param_5 + param_7;
              return (varData_1140 << param_6 | varData_1140 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_122(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_1141 = param_1_3 + (param_3 ^ (param_2_1 | ~param_4)) + param_5 + param_7;
              return (varData_1141 << param_6 | varData_1141 >>> 32 - param_6) + param_2_1;
            }
            varData_1098.MD5 = varData_1101._createHelper(varData_1104);
            varData_1098.HmacMD5 = varData_1101._createHmacHelper(varData_1104);
          })(Math);
          return param_1_1.MD5;
        });
      }
    });
    var varData_1142 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1143 = param_1_1;
            var varData_1144 = varData_1143.lib;
            var varData_1145 = varData_1144.WordArray;
            var varData_1146 = varData_1144.Hasher;
            var varData_1147 = varData_1143.algo;
            var varData_1148 = [];
            var varData_1149 = varData_1147.SHA1 = varData_1146.extend({
              _doReset: function() {
                this._hash = new varData_1145.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_1150 = this._hash.words;
                var varData_1151 = varData_1150[0];
                var varData_1152 = varData_1150[1];
                var varData_1153 = varData_1150[2];
                var varData_1154 = varData_1150[3];
                var varData_1155 = varData_1150[4];
                for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                  if (loopIdx < 16) {
                    varData_1148[loopIdx] = param_1_2[param_2_1 + loopIdx] | 0;
                  } else {
                    var varData_1156 = varData_1148[loopIdx - 3] ^ varData_1148[loopIdx - 8] ^ varData_1148[loopIdx - 14] ^ varData_1148[loopIdx - 16];
                    varData_1148[loopIdx] = varData_1156 << 1 | varData_1156 >>> 31;
                  }
                  var varData_1157 = (varData_1151 << 5 | varData_1151 >>> 27) + varData_1155 + varData_1148[loopIdx];
                  if (loopIdx < 20) {
                    varData_1157 += (varData_1152 & varData_1153 | ~varData_1152 & varData_1154) + 1518500249;
                  } else if (loopIdx < 40) {
                    varData_1157 += (varData_1152 ^ varData_1153 ^ varData_1154) + 1859775393;
                  } else if (loopIdx < 60) {
                    varData_1157 += (varData_1152 & varData_1153 | varData_1152 & varData_1154 | varData_1153 & varData_1154) - 1894007588;
                  } else {
                    varData_1157 += (varData_1152 ^ varData_1153 ^ varData_1154) - 899497514;
                  }
                  varData_1155 = varData_1154;
                  varData_1154 = varData_1153;
                  varData_1153 = varData_1152 << 30 | varData_1152 >>> 2;
                  varData_1152 = varData_1151;
                  varData_1151 = varData_1157;
                }
                varData_1150[0] = varData_1150[0] + varData_1151 | 0;
                varData_1150[1] = varData_1150[1] + varData_1152 | 0;
                varData_1150[2] = varData_1150[2] + varData_1153 | 0;
                varData_1150[3] = varData_1150[3] + varData_1154 | 0;
                varData_1150[4] = varData_1150[4] + varData_1155 | 0;
              },
              _doFinalize: function() {
                var varData_1158 = this._data;
                var varData_1159 = varData_1158.words;
                var varData_1160 = this._nDataBytes * 8;
                var varData_1161 = varData_1158.sigBytes * 8;
                varData_1159[varData_1161 >>> 5] |= 128 << 24 - varData_1161 % 32;
                varData_1159[(varData_1161 + 64 >>> 9 << 4) + 14] = Math.floor(varData_1160 / 4294967296);
                varData_1159[(varData_1161 + 64 >>> 9 << 4) + 15] = varData_1160;
                varData_1158.sigBytes = varData_1159.length * 4;
                this._process();
                return this._hash;
              },
              clone: function() {
                var varData_1162 = varData_1146.clone.call(this);
                varData_1162._hash = this._hash.clone();
                return varData_1162;
              }
            });
            varData_1143.SHA1 = varData_1146._createHelper(varData_1149);
            varData_1143.HmacSHA1 = varData_1146._createHmacHelper(varData_1149);
          })();
          return param_1_1.SHA1;
        });
      }
    });
    var varData_1163 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1164 = param_1_1;
            var varData_1165 = varData_1164.lib;
            var varData_1166 = varData_1165.WordArray;
            var varData_1167 = varData_1165.Hasher;
            var varData_1168 = varData_1164.algo;
            var varData_1169 = [];
            var varData_1170 = [];
            (function() {
              function handleAction_123(param_1_3) {
                var varData_1171 = param_1_2.sqrt(param_1_3);
                for (var loopIdx = 2; loopIdx <= varData_1171; loopIdx++) {
                  if (!(param_1_3 % loopIdx)) {
                    return false;
                  }
                }
                return true;
              }
              function handleAction_124(param_1_3) {
                return (param_1_3 - (param_1_3 | 0)) * 4294967296 | 0;
              }
              var varData_1172 = 2;
              var varData_1173 = 0;
              while (varData_1173 < 64) {
                if (handleAction_123(varData_1172)) {
                  if (varData_1173 < 8) {
                    varData_1169[varData_1173] = handleAction_124(param_1_2.pow(varData_1172, 1 / 2));
                  }
                  varData_1170[varData_1173] = handleAction_124(param_1_2.pow(varData_1172, 1 / 3));
                  varData_1173++;
                }
                varData_1172++;
              }
            })();
            var varData_1174 = [];
            var varData_1175 = varData_1168.SHA256 = varData_1167.extend({
              _doReset: function() {
                this._hash = new varData_1166.init(varData_1169.slice(0));
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                var varData_1176 = this._hash.words;
                var varData_1177 = varData_1176[0];
                var varData_1178 = varData_1176[1];
                var varData_1179 = varData_1176[2];
                var varData_1180 = varData_1176[3];
                var varData_1181 = varData_1176[4];
                var varData_1182 = varData_1176[5];
                var varData_1183 = varData_1176[6];
                var varData_1184 = varData_1176[7];
                for (var loopIdx = 0; loopIdx < 64; loopIdx++) {
                  if (loopIdx < 16) {
                    varData_1174[loopIdx] = param_1_3[param_2_1 + loopIdx] | 0;
                  } else {
                    var varData_1185 = varData_1174[loopIdx - 15];
                    var varData_1186 = (varData_1185 << 25 | varData_1185 >>> 7) ^ (varData_1185 << 14 | varData_1185 >>> 18) ^ varData_1185 >>> 3;
                    var varData_1187 = varData_1174[loopIdx - 2];
                    var varData_1188 = (varData_1187 << 15 | varData_1187 >>> 17) ^ (varData_1187 << 13 | varData_1187 >>> 19) ^ varData_1187 >>> 10;
                    varData_1174[loopIdx] = varData_1186 + varData_1174[loopIdx - 7] + varData_1188 + varData_1174[loopIdx - 16];
                  }
                  var varData_1189 = varData_1181 & varData_1182 ^ ~varData_1181 & varData_1183;
                  var varData_1190 = varData_1177 & varData_1178 ^ varData_1177 & varData_1179 ^ varData_1178 & varData_1179;
                  var varData_1191 = (varData_1177 << 30 | varData_1177 >>> 2) ^ (varData_1177 << 19 | varData_1177 >>> 13) ^ (varData_1177 << 10 | varData_1177 >>> 22);
                  var varData_1192 = (varData_1181 << 26 | varData_1181 >>> 6) ^ (varData_1181 << 21 | varData_1181 >>> 11) ^ (varData_1181 << 7 | varData_1181 >>> 25);
                  var varData_1193 = varData_1184 + varData_1192 + varData_1189 + varData_1170[loopIdx] + varData_1174[loopIdx];
                  var varData_1194 = varData_1191 + varData_1190;
                  varData_1184 = varData_1183;
                  varData_1183 = varData_1182;
                  varData_1182 = varData_1181;
                  varData_1181 = varData_1180 + varData_1193 | 0;
                  varData_1180 = varData_1179;
                  varData_1179 = varData_1178;
                  varData_1178 = varData_1177;
                  varData_1177 = varData_1193 + varData_1194 | 0;
                }
                varData_1176[0] = varData_1176[0] + varData_1177 | 0;
                varData_1176[1] = varData_1176[1] + varData_1178 | 0;
                varData_1176[2] = varData_1176[2] + varData_1179 | 0;
                varData_1176[3] = varData_1176[3] + varData_1180 | 0;
                varData_1176[4] = varData_1176[4] + varData_1181 | 0;
                varData_1176[5] = varData_1176[5] + varData_1182 | 0;
                varData_1176[6] = varData_1176[6] + varData_1183 | 0;
                varData_1176[7] = varData_1176[7] + varData_1184 | 0;
              },
              _doFinalize: function() {
                var varData_1195 = this._data;
                var varData_1196 = varData_1195.words;
                var varData_1197 = this._nDataBytes * 8;
                var varData_1198 = varData_1195.sigBytes * 8;
                varData_1196[varData_1198 >>> 5] |= 128 << 24 - varData_1198 % 32;
                varData_1196[(varData_1198 + 64 >>> 9 << 4) + 14] = param_1_2.floor(varData_1197 / 4294967296);
                varData_1196[(varData_1198 + 64 >>> 9 << 4) + 15] = varData_1197;
                varData_1195.sigBytes = varData_1196.length * 4;
                this._process();
                return this._hash;
              },
              clone: function() {
                var varData_1199 = varData_1167.clone.call(this);
                varData_1199._hash = this._hash.clone();
                return varData_1199;
              }
            });
            varData_1164.SHA256 = varData_1167._createHelper(varData_1175);
            varData_1164.HmacSHA256 = varData_1167._createHmacHelper(varData_1175);
          })(Math);
          return param_1_1.SHA256;
        });
      }
    });
    var varData_1200 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1163());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha256"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1201 = param_1_1;
            var varData_1202 = varData_1201.lib;
            var varData_1203 = varData_1202.WordArray;
            var varData_1204 = varData_1201.algo;
            var varData_1205 = varData_1204.SHA256;
            var varData_1206 = varData_1204.SHA224 = varData_1205.extend({
              _doReset: function() {
                this._hash = new varData_1203.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function() {
                var varData_1207 = varData_1205._doFinalize.call(this);
                varData_1207.sigBytes -= 4;
                return varData_1207;
              }
            });
            varData_1201.SHA224 = varData_1205._createHelper(varData_1206);
            varData_1201.HmacSHA224 = varData_1205._createHmacHelper(varData_1206);
          })();
          return param_1_1.SHA224;
        });
      }
    });
    var varData_1208 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1031());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1209 = param_1_1;
            var varData_1210 = varData_1209.lib;
            var varData_1211 = varData_1210.Hasher;
            var varData_1212 = varData_1209.x64;
            var varData_1213 = varData_1212.Word;
            var varData_1214 = varData_1212.WordArray;
            var varData_1215 = varData_1209.algo;
            function handleAction_125() {
              return varData_1213.create.apply(varData_1213, arguments);
            }
            var varData_1216 = [handleAction_125(1116352408, 3609767458), handleAction_125(1899447441, 602891725), handleAction_125(3049323471, 3964484399), handleAction_125(3921009573, 2173295548), handleAction_125(961987163, 4081628472), handleAction_125(1508970993, 3053834265), handleAction_125(2453635748, 2937671579), handleAction_125(2870763221, 3664609560), handleAction_125(3624381080, 2734883394), handleAction_125(310598401, 1164996542), handleAction_125(607225278, 1323610764), handleAction_125(1426881987, 3590304994), handleAction_125(1925078388, 4068182383), handleAction_125(2162078206, 991336113), handleAction_125(2614888103, 633803317), handleAction_125(3248222580, 3479774868), handleAction_125(3835390401, 2666613458), handleAction_125(4022224774, 944711139), handleAction_125(264347078, 2341262773), handleAction_125(604807628, 2007800933), handleAction_125(770255983, 1495990901), handleAction_125(1249150122, 1856431235), handleAction_125(1555081692, 3175218132), handleAction_125(1996064986, 2198950837), handleAction_125(2554220882, 3999719339), handleAction_125(2821834349, 766784016), handleAction_125(2952996808, 2566594879), handleAction_125(3210313671, 3203337956), handleAction_125(3336571891, 1034457026), handleAction_125(3584528711, 2466948901), handleAction_125(113926993, 3758326383), handleAction_125(338241895, 168717936), handleAction_125(666307205, 1188179964), handleAction_125(773529912, 1546045734), handleAction_125(1294757372, 1522805485), handleAction_125(1396182291, 2643833823), handleAction_125(1695183700, 2343527390), handleAction_125(1986661051, 1014477480), handleAction_125(2177026350, 1206759142), handleAction_125(2456956037, 344077627), handleAction_125(2730485921, 1290863460), handleAction_125(2820302411, 3158454273), handleAction_125(3259730800, 3505952657), handleAction_125(3345764771, 106217008), handleAction_125(3516065817, 3606008344), handleAction_125(3600352804, 1432725776), handleAction_125(4094571909, 1467031594), handleAction_125(275423344, 851169720), handleAction_125(430227734, 3100823752), handleAction_125(506948616, 1363258195), handleAction_125(659060556, 3750685593), handleAction_125(883997877, 3785050280), handleAction_125(958139571, 3318307427), handleAction_125(1322822218, 3812723403), handleAction_125(1537002063, 2003034995), handleAction_125(1747873779, 3602036899), handleAction_125(1955562222, 1575990012), handleAction_125(2024104815, 1125592928), handleAction_125(2227730452, 2716904306), handleAction_125(2361852424, 442776044), handleAction_125(2428436474, 593698344), handleAction_125(2756734187, 3733110249), handleAction_125(3204031479, 2999351573), handleAction_125(3329325298, 3815920427), handleAction_125(3391569614, 3928383900), handleAction_125(3515267271, 566280711), handleAction_125(3940187606, 3454069534), handleAction_125(4118630271, 4000239992), handleAction_125(116418474, 1914138554), handleAction_125(174292421, 2731055270), handleAction_125(289380356, 3203993006), handleAction_125(460393269, 320620315), handleAction_125(685471733, 587496836), handleAction_125(852142971, 1086792851), handleAction_125(1017036298, 365543100), handleAction_125(1126000580, 2618297676), handleAction_125(1288033470, 3409855158), handleAction_125(1501505948, 4234509866), handleAction_125(1607167915, 987167468), handleAction_125(1816402316, 1246189591)];
            var varData_1217 = [];
            (function() {
              for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                varData_1217[loopIdx] = handleAction_125();
              }
            })();
            var varData_1218 = varData_1215.SHA512 = varData_1211.extend({
              _doReset: function() {
                this._hash = new varData_1214.init([new varData_1213.init(1779033703, 4089235720), new varData_1213.init(3144134277, 2227873595), new varData_1213.init(1013904242, 4271175723), new varData_1213.init(2773480762, 1595750129), new varData_1213.init(1359893119, 2917565137), new varData_1213.init(2600822924, 725511199), new varData_1213.init(528734635, 4215389547), new varData_1213.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_1219 = this._hash.words;
                var varData_1220 = varData_1219[0];
                var varData_1221 = varData_1219[1];
                var varData_1222 = varData_1219[2];
                var varData_1223 = varData_1219[3];
                var varData_1224 = varData_1219[4];
                var varData_1225 = varData_1219[5];
                var varData_1226 = varData_1219[6];
                var varData_1227 = varData_1219[7];
                var varData_1228 = varData_1220.high;
                var varData_1229 = varData_1220.low;
                var varData_1230 = varData_1221.high;
                var varData_1231 = varData_1221.low;
                var varData_1232 = varData_1222.high;
                var varData_1233 = varData_1222.low;
                var varData_1234 = varData_1223.high;
                var varData_1235 = varData_1223.low;
                var varData_1236 = varData_1224.high;
                var varData_1237 = varData_1224.low;
                var varData_1238 = varData_1225.high;
                var varData_1239 = varData_1225.low;
                var varData_1240 = varData_1226.high;
                var varData_1241 = varData_1226.low;
                var varData_1242 = varData_1227.high;
                var varData_1243 = varData_1227.low;
                var varData_1244 = varData_1228;
                var varData_1245 = varData_1229;
                var varData_1246 = varData_1230;
                var varData_1247 = varData_1231;
                var varData_1248 = varData_1232;
                var varData_1249 = varData_1233;
                var varData_1250 = varData_1234;
                var varData_1251 = varData_1235;
                var varData_1252 = varData_1236;
                var varData_1253 = varData_1237;
                var varData_1254 = varData_1238;
                var varData_1255 = varData_1239;
                var varData_1256 = varData_1240;
                var varData_1257 = varData_1241;
                var varData_1258 = varData_1242;
                var varData_1259 = varData_1243;
                for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                  var varData_1260 = varData_1217[loopIdx];
                  if (loopIdx < 16) {
                    var varData_1261 = varData_1260.high = param_1_2[param_2_1 + loopIdx * 2] | 0;
                    var varData_1262 = varData_1260.low = param_1_2[param_2_1 + loopIdx * 2 + 1] | 0;
                  } else {
                    var varData_1263 = varData_1217[loopIdx - 15];
                    var varData_1264 = varData_1263.high;
                    var varData_1265 = varData_1263.low;
                    var varData_1266 = (varData_1264 >>> 1 | varData_1265 << 31) ^ (varData_1264 >>> 8 | varData_1265 << 24) ^ varData_1264 >>> 7;
                    var varData_1267 = (varData_1265 >>> 1 | varData_1264 << 31) ^ (varData_1265 >>> 8 | varData_1264 << 24) ^ (varData_1265 >>> 7 | varData_1264 << 25);
                    var varData_1268 = varData_1217[loopIdx - 2];
                    var varData_1269 = varData_1268.high;
                    var varData_1270 = varData_1268.low;
                    var varData_1271 = (varData_1269 >>> 19 | varData_1270 << 13) ^ (varData_1269 << 3 | varData_1270 >>> 29) ^ varData_1269 >>> 6;
                    var varData_1272 = (varData_1270 >>> 19 | varData_1269 << 13) ^ (varData_1270 << 3 | varData_1269 >>> 29) ^ (varData_1270 >>> 6 | varData_1269 << 26);
                    var varData_1273 = varData_1217[loopIdx - 7];
                    var varData_1274 = varData_1273.high;
                    var varData_1275 = varData_1273.low;
                    var varData_1276 = varData_1217[loopIdx - 16];
                    var varData_1277 = varData_1276.high;
                    var varData_1278 = varData_1276.low;
                    var varData_1262 = varData_1267 + varData_1275;
                    var varData_1261 = varData_1266 + varData_1274 + (varData_1262 >>> 0 < varData_1267 >>> 0 ? 1 : 0);
                    var varData_1262 = varData_1262 + varData_1272;
                    var varData_1261 = varData_1261 + varData_1271 + (varData_1262 >>> 0 < varData_1272 >>> 0 ? 1 : 0);
                    var varData_1262 = varData_1262 + varData_1278;
                    var varData_1261 = varData_1261 + varData_1277 + (varData_1262 >>> 0 < varData_1278 >>> 0 ? 1 : 0);
                    varData_1260.high = varData_1261;
                    varData_1260.low = varData_1262;
                  }
                  var varData_1279 = varData_1252 & varData_1254 ^ ~varData_1252 & varData_1256;
                  var varData_1280 = varData_1253 & varData_1255 ^ ~varData_1253 & varData_1257;
                  var varData_1281 = varData_1244 & varData_1246 ^ varData_1244 & varData_1248 ^ varData_1246 & varData_1248;
                  var varData_1282 = varData_1245 & varData_1247 ^ varData_1245 & varData_1249 ^ varData_1247 & varData_1249;
                  var varData_1283 = (varData_1244 >>> 28 | varData_1245 << 4) ^ (varData_1244 << 30 | varData_1245 >>> 2) ^ (varData_1244 << 25 | varData_1245 >>> 7);
                  var varData_1284 = (varData_1245 >>> 28 | varData_1244 << 4) ^ (varData_1245 << 30 | varData_1244 >>> 2) ^ (varData_1245 << 25 | varData_1244 >>> 7);
                  var varData_1285 = (varData_1252 >>> 14 | varData_1253 << 18) ^ (varData_1252 >>> 18 | varData_1253 << 14) ^ (varData_1252 << 23 | varData_1253 >>> 9);
                  var varData_1286 = (varData_1253 >>> 14 | varData_1252 << 18) ^ (varData_1253 >>> 18 | varData_1252 << 14) ^ (varData_1253 << 23 | varData_1252 >>> 9);
                  var varData_1287 = varData_1216[loopIdx];
                  var varData_1288 = varData_1287.high;
                  var varData_1289 = varData_1287.low;
                  var varData_1290 = varData_1259 + varData_1286;
                  var varData_1291 = varData_1258 + varData_1285 + (varData_1290 >>> 0 < varData_1259 >>> 0 ? 1 : 0);
                  var varData_1290 = varData_1290 + varData_1280;
                  var varData_1291 = varData_1291 + varData_1279 + (varData_1290 >>> 0 < varData_1280 >>> 0 ? 1 : 0);
                  var varData_1290 = varData_1290 + varData_1289;
                  var varData_1291 = varData_1291 + varData_1288 + (varData_1290 >>> 0 < varData_1289 >>> 0 ? 1 : 0);
                  var varData_1290 = varData_1290 + varData_1262;
                  var varData_1291 = varData_1291 + varData_1261 + (varData_1290 >>> 0 < varData_1262 >>> 0 ? 1 : 0);
                  var varData_1292 = varData_1284 + varData_1282;
                  var varData_1293 = varData_1283 + varData_1281 + (varData_1292 >>> 0 < varData_1284 >>> 0 ? 1 : 0);
                  varData_1258 = varData_1256;
                  varData_1259 = varData_1257;
                  varData_1256 = varData_1254;
                  varData_1257 = varData_1255;
                  varData_1254 = varData_1252;
                  varData_1255 = varData_1253;
                  varData_1253 = varData_1251 + varData_1290 | 0;
                  varData_1252 = varData_1250 + varData_1291 + (varData_1253 >>> 0 < varData_1251 >>> 0 ? 1 : 0) | 0;
                  varData_1250 = varData_1248;
                  varData_1251 = varData_1249;
                  varData_1248 = varData_1246;
                  varData_1249 = varData_1247;
                  varData_1246 = varData_1244;
                  varData_1247 = varData_1245;
                  varData_1245 = varData_1290 + varData_1292 | 0;
                  varData_1244 = varData_1291 + varData_1293 + (varData_1245 >>> 0 < varData_1290 >>> 0 ? 1 : 0) | 0;
                }
                varData_1229 = varData_1220.low = varData_1229 + varData_1245;
                varData_1220.high = varData_1228 + varData_1244 + (varData_1229 >>> 0 < varData_1245 >>> 0 ? 1 : 0);
                varData_1231 = varData_1221.low = varData_1231 + varData_1247;
                varData_1221.high = varData_1230 + varData_1246 + (varData_1231 >>> 0 < varData_1247 >>> 0 ? 1 : 0);
                varData_1233 = varData_1222.low = varData_1233 + varData_1249;
                varData_1222.high = varData_1232 + varData_1248 + (varData_1233 >>> 0 < varData_1249 >>> 0 ? 1 : 0);
                varData_1235 = varData_1223.low = varData_1235 + varData_1251;
                varData_1223.high = varData_1234 + varData_1250 + (varData_1235 >>> 0 < varData_1251 >>> 0 ? 1 : 0);
                varData_1237 = varData_1224.low = varData_1237 + varData_1253;
                varData_1224.high = varData_1236 + varData_1252 + (varData_1237 >>> 0 < varData_1253 >>> 0 ? 1 : 0);
                varData_1239 = varData_1225.low = varData_1239 + varData_1255;
                varData_1225.high = varData_1238 + varData_1254 + (varData_1239 >>> 0 < varData_1255 >>> 0 ? 1 : 0);
                varData_1241 = varData_1226.low = varData_1241 + varData_1257;
                varData_1226.high = varData_1240 + varData_1256 + (varData_1241 >>> 0 < varData_1257 >>> 0 ? 1 : 0);
                varData_1243 = varData_1227.low = varData_1243 + varData_1259;
                varData_1227.high = varData_1242 + varData_1258 + (varData_1243 >>> 0 < varData_1259 >>> 0 ? 1 : 0);
              },
              _doFinalize: function() {
                var varData_1294 = this._data;
                var varData_1295 = varData_1294.words;
                var varData_1296 = this._nDataBytes * 8;
                var varData_1297 = varData_1294.sigBytes * 8;
                varData_1295[varData_1297 >>> 5] |= 128 << 24 - varData_1297 % 32;
                varData_1295[(varData_1297 + 128 >>> 10 << 5) + 30] = Math.floor(varData_1296 / 4294967296);
                varData_1295[(varData_1297 + 128 >>> 10 << 5) + 31] = varData_1296;
                varData_1294.sigBytes = varData_1295.length * 4;
                this._process();
                var varData_1298 = this._hash.toX32();
                return varData_1298;
              },
              clone: function() {
                var varData_1299 = varData_1211.clone.call(this);
                varData_1299._hash = this._hash.clone();
                return varData_1299;
              },
              blockSize: 32
            });
            varData_1209.SHA512 = varData_1211._createHelper(varData_1218);
            varData_1209.HmacSHA512 = varData_1211._createHmacHelper(varData_1218);
          })();
          return param_1_1.SHA512;
        });
      }
    });
    var varData_1300 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1031(), varData_1208());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./sha512"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1301 = param_1_1;
            var varData_1302 = varData_1301.x64;
            var varData_1303 = varData_1302.Word;
            var varData_1304 = varData_1302.WordArray;
            var varData_1305 = varData_1301.algo;
            var varData_1306 = varData_1305.SHA512;
            var varData_1307 = varData_1305.SHA384 = varData_1306.extend({
              _doReset: function() {
                this._hash = new varData_1304.init([new varData_1303.init(3418070365, 3238371032), new varData_1303.init(1654270250, 914150663), new varData_1303.init(2438529370, 812702999), new varData_1303.init(355462360, 4144912697), new varData_1303.init(1731405415, 4290775857), new varData_1303.init(2394180231, 1750603025), new varData_1303.init(3675008525, 1694076839), new varData_1303.init(1203062813, 3204075428)]);
              },
              _doFinalize: function() {
                var varData_1308 = varData_1306._doFinalize.call(this);
                varData_1308.sigBytes -= 16;
                return varData_1308;
              }
            });
            varData_1301.SHA384 = varData_1306._createHelper(varData_1307);
            varData_1301.HmacSHA384 = varData_1306._createHmacHelper(varData_1307);
          })();
          return param_1_1.SHA384;
        });
      }
    });
    var varData_1309 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1031());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1310 = param_1_1;
            var varData_1311 = varData_1310.lib;
            var varData_1312 = varData_1311.WordArray;
            var varData_1313 = varData_1311.Hasher;
            var varData_1314 = varData_1310.x64;
            var varData_1315 = varData_1314.Word;
            var varData_1316 = varData_1310.algo;
            var varData_1317 = [];
            var varData_1318 = [];
            var varData_1319 = [];
            (function() {
              var varData_1320 = 1;
              var varData_1321 = 0;
              for (var loopIdx = 0; loopIdx < 24; loopIdx++) {
                varData_1317[varData_1320 + varData_1321 * 5] = (loopIdx + 1) * (loopIdx + 2) / 2 % 64;
                var varData_1322 = varData_1321 % 5;
                var varData_1323 = (varData_1320 * 2 + varData_1321 * 3) % 5;
                varData_1320 = varData_1322;
                varData_1321 = varData_1323;
              }
              for (var varData_1320 = 0; varData_1320 < 5; varData_1320++) {
                for (var varData_1321 = 0; varData_1321 < 5; varData_1321++) {
                  varData_1318[varData_1320 + varData_1321 * 5] = varData_1321 + (varData_1320 * 2 + varData_1321 * 3) % 5 * 5;
                }
              }
              var varData_1324 = 1;
              for (var loopIdx_1 = 0; loopIdx_1 < 24; loopIdx_1++) {
                var varData_1325 = 0;
                var varData_1326 = 0;
                for (var loopIdx_2 = 0; loopIdx_2 < 7; loopIdx_2++) {
                  if (varData_1324 & 1) {
                    var varData_1327 = (1 << loopIdx_2) - 1;
                    if (varData_1327 < 32) {
                      varData_1326 ^= 1 << varData_1327;
                    } else {
                      varData_1325 ^= 1 << varData_1327 - 32;
                    }
                  }
                  if (varData_1324 & 128) {
                    varData_1324 = varData_1324 << 1 ^ 113;
                  } else {
                    varData_1324 <<= 1;
                  }
                }
                varData_1319[loopIdx_1] = varData_1315.create(varData_1325, varData_1326);
              }
            })();
            var varData_1328 = [];
            (function() {
              for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                varData_1328[loopIdx] = varData_1315.create();
              }
            })();
            var varData_1329 = varData_1316.SHA3 = varData_1313.extend({
              cfg: varData_1313.cfg.extend({
                outputLength: 512
              }),
              _doReset: function() {
                var varData_1330 = this._state = [];
                for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                  varData_1330[loopIdx] = new varData_1315.init();
                }
                this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                var varData_1331 = this._state;
                var varData_1332 = this.blockSize / 2;
                for (var loopIdx = 0; loopIdx < varData_1332; loopIdx++) {
                  var varData_1333 = param_1_3[param_2_1 + loopIdx * 2];
                  var varData_1334 = param_1_3[param_2_1 + loopIdx * 2 + 1];
                  varData_1333 = (varData_1333 << 8 | varData_1333 >>> 24) & 16711935 | (varData_1333 << 24 | varData_1333 >>> 8) & -16711936;
                  varData_1334 = (varData_1334 << 8 | varData_1334 >>> 24) & 16711935 | (varData_1334 << 24 | varData_1334 >>> 8) & -16711936;
                  var varData_1335 = varData_1331[loopIdx];
                  varData_1335.high ^= varData_1334;
                  varData_1335.low ^= varData_1333;
                }
                for (var loopIdx_1 = 0; loopIdx_1 < 24; loopIdx_1++) {
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    var varData_1336 = 0;
                    var varData_1337 = 0;
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var varData_1335 = varData_1331[loopIdx_2 + loopIdx_3 * 5];
                      varData_1336 ^= varData_1335.high;
                      varData_1337 ^= varData_1335.low;
                    }
                    var varData_1338 = varData_1328[loopIdx_2];
                    varData_1338.high = varData_1336;
                    varData_1338.low = varData_1337;
                  }
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    var varData_1339 = varData_1328[(loopIdx_2 + 4) % 5];
                    var varData_1340 = varData_1328[(loopIdx_2 + 1) % 5];
                    var varData_1341 = varData_1340.high;
                    var varData_1342 = varData_1340.low;
                    var varData_1336 = varData_1339.high ^ (varData_1341 << 1 | varData_1342 >>> 31);
                    var varData_1337 = varData_1339.low ^ (varData_1342 << 1 | varData_1341 >>> 31);
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var varData_1335 = varData_1331[loopIdx_2 + loopIdx_3 * 5];
                      varData_1335.high ^= varData_1336;
                      varData_1335.low ^= varData_1337;
                    }
                  }
                  for (var loopIdx_4 = 1; loopIdx_4 < 25; loopIdx_4++) {
                    var varData_1335 = varData_1331[loopIdx_4];
                    var varData_1343 = varData_1335.high;
                    var varData_1344 = varData_1335.low;
                    var varData_1345 = varData_1317[loopIdx_4];
                    if (varData_1345 < 32) {
                      var varData_1336 = varData_1343 << varData_1345 | varData_1344 >>> 32 - varData_1345;
                      var varData_1337 = varData_1344 << varData_1345 | varData_1343 >>> 32 - varData_1345;
                    } else {
                      var varData_1336 = varData_1344 << varData_1345 - 32 | varData_1343 >>> 64 - varData_1345;
                      var varData_1337 = varData_1343 << varData_1345 - 32 | varData_1344 >>> 64 - varData_1345;
                    }
                    var varData_1346 = varData_1328[varData_1318[loopIdx_4]];
                    varData_1346.high = varData_1336;
                    varData_1346.low = varData_1337;
                  }
                  var varData_1347 = varData_1328[0];
                  var varData_1348 = varData_1331[0];
                  varData_1347.high = varData_1348.high;
                  varData_1347.low = varData_1348.low;
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var loopIdx_4 = loopIdx_2 + loopIdx_3 * 5;
                      var varData_1335 = varData_1331[loopIdx_4];
                      var varData_1349 = varData_1328[loopIdx_4];
                      var varData_1350 = varData_1328[(loopIdx_2 + 1) % 5 + loopIdx_3 * 5];
                      var varData_1351 = varData_1328[(loopIdx_2 + 2) % 5 + loopIdx_3 * 5];
                      varData_1335.high = varData_1349.high ^ ~varData_1350.high & varData_1351.high;
                      varData_1335.low = varData_1349.low ^ ~varData_1350.low & varData_1351.low;
                    }
                  }
                  var varData_1335 = varData_1331[0];
                  var varData_1352 = varData_1319[loopIdx_1];
                  varData_1335.high ^= varData_1352.high;
                  varData_1335.low ^= varData_1352.low;
                  ;
                }
              },
              _doFinalize: function() {
                var varData_1353 = this._data;
                var varData_1354 = varData_1353.words;
                var varData_1355 = this._nDataBytes * 8;
                var varData_1356 = varData_1353.sigBytes * 8;
                var varData_1357 = this.blockSize * 32;
                varData_1354[varData_1356 >>> 5] |= 1 << 24 - varData_1356 % 32;
                varData_1354[(param_1_2.ceil((varData_1356 + 1) / varData_1357) * varData_1357 >>> 5) - 1] |= 128;
                varData_1353.sigBytes = varData_1354.length * 4;
                this._process();
                var varData_1358 = this._state;
                var varData_1359 = this.cfg.outputLength / 8;
                var varData_1360 = varData_1359 / 8;
                var varData_1361 = [];
                for (var loopIdx = 0; loopIdx < varData_1360; loopIdx++) {
                  var varData_1362 = varData_1358[loopIdx];
                  var varData_1363 = varData_1362.high;
                  var varData_1364 = varData_1362.low;
                  varData_1363 = (varData_1363 << 8 | varData_1363 >>> 24) & 16711935 | (varData_1363 << 24 | varData_1363 >>> 8) & -16711936;
                  varData_1364 = (varData_1364 << 8 | varData_1364 >>> 24) & 16711935 | (varData_1364 << 24 | varData_1364 >>> 8) & -16711936;
                  varData_1361.push(varData_1364);
                  varData_1361.push(varData_1363);
                }
                return new varData_1312.init(varData_1361, varData_1359);
              },
              clone: function() {
                var varData_1365 = varData_1313.clone.call(this);
                var varData_1366 = varData_1365._state = this._state.slice(0);
                for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                  varData_1366[loopIdx] = varData_1366[loopIdx].clone();
                }
                return varData_1365;
              }
            });
            varData_1310.SHA3 = varData_1313._createHelper(varData_1329);
            varData_1310.HmacSHA3 = varData_1313._createHmacHelper(varData_1329);
          })(Math);
          return param_1_1.SHA3;
        });
      }
    });
    var varData_1367 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1368 = param_1_1;
            var varData_1369 = varData_1368.lib;
            var varData_1370 = varData_1369.WordArray;
            var varData_1371 = varData_1369.Hasher;
            var varData_1372 = varData_1368.algo;
            var varData_1373 = varData_1370.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
            var varData_1374 = varData_1370.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
            var varData_1375 = varData_1370.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
            var varData_1376 = varData_1370.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
            var varData_1377 = varData_1370.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
            var varData_1378 = varData_1370.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            var varData_1379 = varData_1372.RIPEMD160 = varData_1371.extend({
              _doReset: function() {
                this._hash = varData_1370.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_1380 = param_2_1 + loopIdx;
                  var varData_1381 = param_1_3[varData_1380];
                  param_1_3[varData_1380] = (varData_1381 << 8 | varData_1381 >>> 24) & 16711935 | (varData_1381 << 24 | varData_1381 >>> 8) & -16711936;
                }
                var varData_1382 = this._hash.words;
                var varData_1383 = varData_1377.words;
                var varData_1384 = varData_1378.words;
                var varData_1385 = varData_1373.words;
                var varData_1386 = varData_1374.words;
                var varData_1387 = varData_1375.words;
                var varData_1388 = varData_1376.words;
                var varData_1389;
                var varData_1390;
                var varData_1391;
                var varData_1392;
                var varData_1393;
                var varData_1394;
                var varData_1395;
                var varData_1396;
                var varData_1397;
                var varData_1398;
                varData_1394 = varData_1389 = varData_1382[0];
                varData_1395 = varData_1390 = varData_1382[1];
                varData_1396 = varData_1391 = varData_1382[2];
                varData_1397 = varData_1392 = varData_1382[3];
                varData_1398 = varData_1393 = varData_1382[4];
                var varData_1399;
                for (var loopIdx = 0; loopIdx < 80; loopIdx += 1) {
                  varData_1399 = varData_1389 + param_1_3[param_2_1 + varData_1385[loopIdx]] | 0;
                  if (loopIdx < 16) {
                    varData_1399 += handleAction_126(varData_1390, varData_1391, varData_1392) + varData_1383[0];
                  } else if (loopIdx < 32) {
                    varData_1399 += handleAction_127(varData_1390, varData_1391, varData_1392) + varData_1383[1];
                  } else if (loopIdx < 48) {
                    varData_1399 += handleAction_128(varData_1390, varData_1391, varData_1392) + varData_1383[2];
                  } else if (loopIdx < 64) {
                    varData_1399 += handleAction_129(varData_1390, varData_1391, varData_1392) + varData_1383[3];
                  } else {
                    varData_1399 += handleAction_130(varData_1390, varData_1391, varData_1392) + varData_1383[4];
                  }
                  varData_1399 = varData_1399 | 0;
                  varData_1399 = handleAction_131(varData_1399, varData_1387[loopIdx]);
                  varData_1399 = varData_1399 + varData_1393 | 0;
                  varData_1389 = varData_1393;
                  varData_1393 = varData_1392;
                  varData_1392 = handleAction_131(varData_1391, 10);
                  varData_1391 = varData_1390;
                  varData_1390 = varData_1399;
                  varData_1399 = varData_1394 + param_1_3[param_2_1 + varData_1386[loopIdx]] | 0;
                  if (loopIdx < 16) {
                    varData_1399 += handleAction_130(varData_1395, varData_1396, varData_1397) + varData_1384[0];
                  } else if (loopIdx < 32) {
                    varData_1399 += handleAction_129(varData_1395, varData_1396, varData_1397) + varData_1384[1];
                  } else if (loopIdx < 48) {
                    varData_1399 += handleAction_128(varData_1395, varData_1396, varData_1397) + varData_1384[2];
                  } else if (loopIdx < 64) {
                    varData_1399 += handleAction_127(varData_1395, varData_1396, varData_1397) + varData_1384[3];
                  } else {
                    varData_1399 += handleAction_126(varData_1395, varData_1396, varData_1397) + varData_1384[4];
                  }
                  varData_1399 = varData_1399 | 0;
                  varData_1399 = handleAction_131(varData_1399, varData_1388[loopIdx]);
                  varData_1399 = varData_1399 + varData_1398 | 0;
                  varData_1394 = varData_1398;
                  varData_1398 = varData_1397;
                  varData_1397 = handleAction_131(varData_1396, 10);
                  varData_1396 = varData_1395;
                  varData_1395 = varData_1399;
                }
                varData_1399 = varData_1382[1] + varData_1391 + varData_1397 | 0;
                varData_1382[1] = varData_1382[2] + varData_1392 + varData_1398 | 0;
                varData_1382[2] = varData_1382[3] + varData_1393 + varData_1394 | 0;
                varData_1382[3] = varData_1382[4] + varData_1389 + varData_1395 | 0;
                varData_1382[4] = varData_1382[0] + varData_1390 + varData_1396 | 0;
                varData_1382[0] = varData_1399;
              },
              _doFinalize: function() {
                var varData_1400 = this._data;
                var varData_1401 = varData_1400.words;
                var varData_1402 = this._nDataBytes * 8;
                var varData_1403 = varData_1400.sigBytes * 8;
                varData_1401[varData_1403 >>> 5] |= 128 << 24 - varData_1403 % 32;
                varData_1401[(varData_1403 + 64 >>> 9 << 4) + 14] = (varData_1402 << 8 | varData_1402 >>> 24) & 16711935 | (varData_1402 << 24 | varData_1402 >>> 8) & -16711936;
                varData_1400.sigBytes = (varData_1401.length + 1) * 4;
                this._process();
                var varData_1404 = this._hash;
                var varData_1405 = varData_1404.words;
                for (var loopIdx = 0; loopIdx < 5; loopIdx++) {
                  var varData_1406 = varData_1405[loopIdx];
                  varData_1405[loopIdx] = (varData_1406 << 8 | varData_1406 >>> 24) & 16711935 | (varData_1406 << 24 | varData_1406 >>> 8) & -16711936;
                }
                return varData_1404;
              },
              clone: function() {
                var varData_1407 = varData_1371.clone.call(this);
                varData_1407._hash = this._hash.clone();
                return varData_1407;
              }
            });
            function handleAction_126(param_1_3, param_2_1, param_3) {
              return param_1_3 ^ param_2_1 ^ param_3;
            }
            function handleAction_127(param_1_3, param_2_1, param_3) {
              return param_1_3 & param_2_1 | ~param_1_3 & param_3;
            }
            function handleAction_128(param_1_3, param_2_1, param_3) {
              return (param_1_3 | ~param_2_1) ^ param_3;
            }
            function handleAction_129(param_1_3, param_2_1, param_3) {
              return param_1_3 & param_3 | param_2_1 & ~param_3;
            }
            function handleAction_130(param_1_3, param_2_1, param_3) {
              return param_1_3 ^ (param_2_1 | ~param_3);
            }
            function handleAction_131(param_1_3, param_2_1) {
              return param_1_3 << param_2_1 | param_1_3 >>> 32 - param_2_1;
            }
            varData_1368.RIPEMD160 = varData_1371._createHelper(varData_1379);
            varData_1368.HmacRIPEMD160 = varData_1371._createHmacHelper(varData_1379);
          })(Math);
          return param_1_1.RIPEMD160;
        });
      }
    });
    var varData_1408 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1409 = param_1_1;
            var varData_1410 = varData_1409.lib;
            var varData_1411 = varData_1410.Base;
            var varData_1412 = varData_1409.enc;
            var varData_1413 = varData_1412.Utf8;
            var varData_1414 = varData_1409.algo;
            var varData_1415 = varData_1414.HMAC = varData_1411.extend({
              init: function(param_1_2, param_2_1) {
                param_1_2 = this._hasher = new param_1_2.init();
                if (typeof param_2_1 == "string") {
                  param_2_1 = varData_1413.parse(param_2_1);
                }
                var varData_1416 = param_1_2.blockSize;
                var varData_1417 = varData_1416 * 4;
                if (param_2_1.sigBytes > varData_1417) {
                  param_2_1 = param_1_2.finalize(param_2_1);
                }
                param_2_1.clamp();
                var varData_1418 = this._oKey = param_2_1.clone();
                var varData_1419 = this._iKey = param_2_1.clone();
                var varData_1420 = varData_1418.words;
                var varData_1421 = varData_1419.words;
                for (var loopIdx = 0; loopIdx < varData_1416; loopIdx++) {
                  varData_1420[loopIdx] ^= 1549556828;
                  varData_1421[loopIdx] ^= 909522486;
                }
                varData_1418.sigBytes = varData_1419.sigBytes = varData_1417;
                this.reset();
              },
              reset: function() {
                var varData_1422 = this._hasher;
                varData_1422.reset();
                varData_1422.update(this._iKey);
              },
              update: function(param_1_2) {
                this._hasher.update(param_1_2);
                return this;
              },
              finalize: function(param_1_2) {
                var varData_1423 = this._hasher;
                var varData_1424 = varData_1423.finalize(param_1_2);
                varData_1423.reset();
                var varData_1425 = varData_1423.finalize(this._oKey.clone().concat(varData_1424));
                return varData_1425;
              }
            });
          })();
        });
      }
    });
    var varData_1426 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1142(), varData_1408());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1427 = param_1_1;
            var varData_1428 = varData_1427.lib;
            var varData_1429 = varData_1428.Base;
            var varData_1430 = varData_1428.WordArray;
            var varData_1431 = varData_1427.algo;
            var varData_1432 = varData_1431.SHA1;
            var varData_1433 = varData_1431.HMAC;
            var varData_1434 = {
              keySize: 4,
              hasher: varData_1432,
              iterations: 1
            };
            var varData_1435 = varData_1431.PBKDF2 = varData_1429.extend({
              cfg: varData_1429.extend(varData_1434),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function(param_1_2, param_2_1) {
                var varData_1436 = this.cfg;
                var varData_1437 = varData_1433.create(varData_1436.hasher, param_1_2);
                var varData_1438 = varData_1430.create();
                var varData_1439 = varData_1430.create([1]);
                var varData_1440 = varData_1438.words;
                var varData_1441 = varData_1439.words;
                var varData_1442 = varData_1436.keySize;
                var varData_1443 = varData_1436.iterations;
                while (varData_1440.length < varData_1442) {
                  var varData_1444 = varData_1437.update(param_2_1).finalize(varData_1439);
                  varData_1437.reset();
                  var varData_1445 = varData_1444.words;
                  var varData_1446 = varData_1445.length;
                  var varData_1447 = varData_1444;
                  for (var loopIdx = 1; loopIdx < varData_1443; loopIdx++) {
                    varData_1447 = varData_1437.finalize(varData_1447);
                    varData_1437.reset();
                    var varData_1448 = varData_1447.words;
                    for (var loopIdx_1 = 0; loopIdx_1 < varData_1446; loopIdx_1++) {
                      varData_1445[loopIdx_1] ^= varData_1448[loopIdx_1];
                    }
                  }
                  varData_1438.concat(varData_1444);
                  varData_1441[0]++;
                }
                varData_1438.sigBytes = varData_1442 * 4;
                return varData_1438;
              }
            });
            varData_1427.PBKDF2 = function(param_1_2, param_2_1, param_3) {
              return varData_1435.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.PBKDF2;
        });
      }
    });
    var varData_1449 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1142(), varData_1408());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1450 = param_1_1;
            var varData_1451 = varData_1450.lib;
            var varData_1452 = varData_1451.Base;
            var varData_1453 = varData_1451.WordArray;
            var varData_1454 = varData_1450.algo;
            var varData_1455 = varData_1454.MD5;
            var varData_1456 = {
              keySize: 4,
              hasher: varData_1455,
              iterations: 1
            };
            var varData_1457 = varData_1454.EvpKDF = varData_1452.extend({
              cfg: varData_1452.extend(varData_1456),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function(param_1_2, param_2_1) {
                var varData_1458 = this.cfg;
                var varData_1459 = varData_1458.hasher.create();
                var varData_1460 = varData_1453.create();
                var varData_1461 = varData_1460.words;
                var varData_1462 = varData_1458.keySize;
                var varData_1463 = varData_1458.iterations;
                while (varData_1461.length < varData_1462) {
                  if (varData_1464) {
                    varData_1459.update(varData_1464);
                  }
                  var varData_1464 = varData_1459.update(param_1_2).finalize(param_2_1);
                  varData_1459.reset();
                  for (var loopIdx = 1; loopIdx < varData_1463; loopIdx++) {
                    varData_1464 = varData_1459.finalize(varData_1464);
                    varData_1459.reset();
                  }
                  varData_1460.concat(varData_1464);
                }
                varData_1460.sigBytes = varData_1462 * 4;
                return varData_1460;
              }
            });
            varData_1450.EvpKDF = function(param_1_2, param_2_1, param_3) {
              return varData_1457.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.EvpKDF;
        });
      }
    });
    var varData_1465 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1449());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./evpkdf"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          if (!param_1_1.lib.Cipher) {
            (function(param_1_2) {
              var varData_1466 = param_1_1;
              var varData_1467 = varData_1466.lib;
              var varData_1468 = varData_1467.Base;
              var varData_1469 = varData_1467.WordArray;
              var varData_1470 = varData_1467.BufferedBlockAlgorithm;
              var varData_1471 = varData_1466.enc;
              var varData_1472 = varData_1471.Utf8;
              var varData_1473 = varData_1471.Base64;
              var varData_1474 = varData_1466.algo;
              var varData_1475 = varData_1474.EvpKDF;
              var varData_1476 = varData_1467.Cipher = varData_1470.extend({
                cfg: varData_1468.extend(),
                createEncryptor: function(param_1_3, param_2_1) {
                  return this.create(this._ENC_XFORM_MODE, param_1_3, param_2_1);
                },
                createDecryptor: function(param_1_3, param_2_1) {
                  return this.create(this._DEC_XFORM_MODE, param_1_3, param_2_1);
                },
                init: function(param_1_3, param_2_1, param_3) {
                  this.cfg = this.cfg.extend(param_3);
                  this._xformMode = param_1_3;
                  this._key = param_2_1;
                  this.reset();
                },
                reset: function() {
                  varData_1470.reset.call(this);
                  this._doReset();
                },
                process: function(param_1_3) {
                  this._append(param_1_3);
                  return this._process();
                },
                finalize: function(param_1_3) {
                  if (param_1_3) {
                    this._append(param_1_3);
                  }
                  var varData_1477 = this._doFinalize();
                  return varData_1477;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: /* @__PURE__ */ (function() {
                  function handleAction_132(param_1_3) {
                    if (typeof param_1_3 == "string") {
                      return varData_1531;
                    } else {
                      return varData_1518;
                    }
                  }
                  return function(param_1_3) {
                    return {
                      encrypt: function(param_1_4, param_2_1, param_3) {
                        return handleAction_132(param_2_1).encrypt(param_1_3, param_1_4, param_2_1, param_3);
                      },
                      decrypt: function(param_1_4, param_2_1, param_3) {
                        return handleAction_132(param_2_1).decrypt(param_1_3, param_1_4, param_2_1, param_3);
                      }
                    };
                  };
                })()
              });
              var varData_1478 = varData_1467.StreamCipher = varData_1476.extend({
                _doFinalize: function() {
                  var varData_1479 = this._process(true);
                  return varData_1479;
                },
                blockSize: 1
              });
              var varData_1480 = varData_1466.mode = {};
              var varData_1481 = varData_1467.BlockCipherMode = varData_1468.extend({
                createEncryptor: function(param_1_3, param_2_1) {
                  return this.Encryptor.create(param_1_3, param_2_1);
                },
                createDecryptor: function(param_1_3, param_2_1) {
                  return this.Decryptor.create(param_1_3, param_2_1);
                },
                init: function(param_1_3, param_2_1) {
                  this._cipher = param_1_3;
                  this._iv = param_2_1;
                }
              });
              var varData_1482 = varData_1480.CBC = (function() {
                var varData_1483 = varData_1481.extend();
                varData_1483.Encryptor = varData_1483.extend({
                  processBlock: function(param_1_3, param_2_1) {
                    var varData_1484 = this._cipher;
                    var varData_1485 = varData_1484.blockSize;
                    handleAction_133.call(this, param_1_3, param_2_1, varData_1485);
                    varData_1484.encryptBlock(param_1_3, param_2_1);
                    this._prevBlock = param_1_3.slice(param_2_1, param_2_1 + varData_1485);
                  }
                });
                varData_1483.Decryptor = varData_1483.extend({
                  processBlock: function(param_1_3, param_2_1) {
                    var varData_1486 = this._cipher;
                    var varData_1487 = varData_1486.blockSize;
                    var varData_1488 = param_1_3.slice(param_2_1, param_2_1 + varData_1487);
                    varData_1486.decryptBlock(param_1_3, param_2_1);
                    handleAction_133.call(this, param_1_3, param_2_1, varData_1487);
                    this._prevBlock = varData_1488;
                  }
                });
                function handleAction_133(param_1_3, param_2_1, param_3) {
                  var varData_1489 = this._iv;
                  if (varData_1489) {
                    var varData_1490 = varData_1489;
                    this._iv = param_1_2;
                  } else {
                    var varData_1490 = this._prevBlock;
                  }
                  for (var loopIdx = 0; loopIdx < param_3; loopIdx++) {
                    param_1_3[param_2_1 + loopIdx] ^= varData_1490[loopIdx];
                  }
                }
                return varData_1483;
              })();
              var varData_1491 = varData_1466.pad = {};
              var varData_1492 = varData_1491.Pkcs7 = {
                pad: function(param_1_3, param_2_1) {
                  var varData_1493 = param_2_1 * 4;
                  var varData_1494 = varData_1493 - param_1_3.sigBytes % varData_1493;
                  var varData_1495 = varData_1494 << 24 | varData_1494 << 16 | varData_1494 << 8 | varData_1494;
                  var varData_1496 = [];
                  for (var loopIdx = 0; loopIdx < varData_1494; loopIdx += 4) {
                    varData_1496.push(varData_1495);
                  }
                  var varData_1497 = varData_1469.create(varData_1496, varData_1494);
                  param_1_3.concat(varData_1497);
                },
                unpad: function(param_1_3) {
                  var varData_1498 = param_1_3.words[param_1_3.sigBytes - 1 >>> 2] & 255;
                  param_1_3.sigBytes -= varData_1498;
                }
              };
              var varData_1499 = {
                mode: varData_1482,
                padding: varData_1492
              };
              var varData_1500 = varData_1467.BlockCipher = varData_1476.extend({
                cfg: varData_1476.cfg.extend(varData_1499),
                reset: function() {
                  varData_1476.reset.call(this);
                  var varData_1501 = this.cfg;
                  var varData_1502 = varData_1501.iv;
                  var varData_1503 = varData_1501.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var varData_1504 = varData_1503.createEncryptor;
                  } else {
                    var varData_1504 = varData_1503.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == varData_1504) {
                    this._mode.init(this, varData_1502 && varData_1502.words);
                  } else {
                    this._mode = varData_1504.call(varData_1503, this, varData_1502 && varData_1502.words);
                    this._mode.__creator = varData_1504;
                  }
                },
                _doProcessBlock: function(param_1_3, param_2_1) {
                  this._mode.processBlock(param_1_3, param_2_1);
                },
                _doFinalize: function() {
                  var varData_1505 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    varData_1505.pad(this._data, this.blockSize);
                    var varData_1506 = this._process(true);
                  } else {
                    var varData_1506 = this._process(true);
                    varData_1505.unpad(varData_1506);
                  }
                  return varData_1506;
                },
                blockSize: 4
              });
              var varData_1507 = varData_1467.CipherParams = varData_1468.extend({
                init: function(param_1_3) {
                  this.mixIn(param_1_3);
                },
                toString: function(param_1_3) {
                  return (param_1_3 || this.formatter).stringify(this);
                }
              });
              var varData_1508 = varData_1466.format = {};
              var varData_1509 = varData_1508.OpenSSL = {
                stringify: function(param_1_3) {
                  var varData_1510 = param_1_3.ciphertext;
                  var varData_1511 = param_1_3.salt;
                  if (varData_1511) {
                    var varData_1512 = varData_1469.create([1398893684, 1701076831]).concat(varData_1511).concat(varData_1510);
                  } else {
                    var varData_1512 = varData_1510;
                  }
                  return varData_1512.toString(varData_1473);
                },
                parse: function(param_1_3) {
                  var varData_1513 = varData_1473.parse(param_1_3);
                  var varData_1514 = varData_1513.words;
                  if (varData_1514[0] == 1398893684 && varData_1514[1] == 1701076831) {
                    var varData_1515 = varData_1469.create(varData_1514.slice(2, 4));
                    varData_1514.splice(0, 4);
                    varData_1513.sigBytes -= 16;
                  }
                  var varData_1516 = {
                    ciphertext: varData_1513,
                    salt: varData_1515
                  };
                  return varData_1507.create(varData_1516);
                }
              };
              var varData_1517 = {
                format: varData_1509
              };
              var varData_1518 = varData_1467.SerializableCipher = varData_1468.extend({
                cfg: varData_1468.extend(varData_1517),
                encrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1519 = param_1_3.createEncryptor(param_3, param_4);
                  var varData_1520 = varData_1519.finalize(param_2_1);
                  var varData_1521 = varData_1519.cfg;
                  var varData_1522 = {
                    ciphertext: varData_1520,
                    key: param_3,
                    iv: varData_1521.iv,
                    algorithm: param_1_3,
                    mode: varData_1521.mode,
                    padding: varData_1521.padding,
                    blockSize: param_1_3.blockSize,
                    formatter: param_4.format
                  };
                  return varData_1507.create(varData_1522);
                },
                decrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1523 = param_1_3.createDecryptor(param_3, param_4).finalize(param_2_1.ciphertext);
                  return varData_1523;
                },
                _parse: function(param_1_3, param_2_1) {
                  if (typeof param_1_3 == "string") {
                    return param_2_1.parse(param_1_3, this);
                  } else {
                    return param_1_3;
                  }
                }
              });
              var varData_1524 = varData_1466.kdf = {};
              var varData_1525 = varData_1524.OpenSSL = {
                execute: function(param_1_3, param_2_1, param_3, param_4) {
                  if (!param_4) {
                    param_4 = varData_1469.random(8);
                  }
                  var varData_1526 = {
                    keySize: param_2_1 + param_3
                  };
                  var varData_1527 = varData_1475.create(varData_1526).compute(param_1_3, param_4);
                  var varData_1528 = varData_1469.create(varData_1527.words.slice(param_2_1), param_3 * 4);
                  varData_1527.sigBytes = param_2_1 * 4;
                  var varData_1529 = {
                    key: varData_1527,
                    iv: varData_1528,
                    salt: param_4
                  };
                  return varData_1507.create(varData_1529);
                }
              };
              var varData_1530 = {
                kdf: varData_1525
              };
              var varData_1531 = varData_1467.PasswordBasedCipher = varData_1518.extend({
                cfg: varData_1518.cfg.extend(varData_1530),
                encrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1532 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize);
                  param_4.iv = varData_1532.iv;
                  var varData_1533 = varData_1518.encrypt.call(this, param_1_3, param_2_1, varData_1532.key, param_4);
                  varData_1533.mixIn(varData_1532);
                  return varData_1533;
                },
                decrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1534 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize, param_2_1.salt);
                  param_4.iv = varData_1534.iv;
                  var varData_1535 = varData_1518.decrypt.call(this, param_1_3, param_2_1, varData_1534.key, param_4);
                  return varData_1535;
                }
              });
            })();
          }
        });
      }
    });
    var varData_1536 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CFB = (function() {
            var varData_1537 = param_1_1.lib.BlockCipherMode.extend();
            varData_1537.Encryptor = varData_1537.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1538 = this._cipher;
                var varData_1539 = varData_1538.blockSize;
                handleAction_134.call(this, param_1_2, param_2_1, varData_1539, varData_1538);
                this._prevBlock = param_1_2.slice(param_2_1, param_2_1 + varData_1539);
              }
            });
            varData_1537.Decryptor = varData_1537.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1540 = this._cipher;
                var varData_1541 = varData_1540.blockSize;
                var varData_1542 = param_1_2.slice(param_2_1, param_2_1 + varData_1541);
                handleAction_134.call(this, param_1_2, param_2_1, varData_1541, varData_1540);
                this._prevBlock = varData_1542;
              }
            });
            function handleAction_134(param_1_2, param_2_1, param_3, param_4) {
              var varData_1543 = this._iv;
              if (varData_1543) {
                var varData_1544 = varData_1543.slice(0);
                this._iv = void 0;
              } else {
                var varData_1544 = this._prevBlock;
              }
              param_4.encryptBlock(varData_1544, 0);
              for (var loopIdx = 0; loopIdx < param_3; loopIdx++) {
                param_1_2[param_2_1 + loopIdx] ^= varData_1544[loopIdx];
              }
            }
            return varData_1537;
          })();
          return param_1_1.mode.CFB;
        });
      }
    });
    var varData_1545 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CTR = (function() {
            var varData_1546 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1547 = varData_1546.Encryptor = varData_1546.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1548 = this._cipher;
                var varData_1549 = varData_1548.blockSize;
                var varData_1550 = this._iv;
                var varData_1551 = this._counter;
                if (varData_1550) {
                  varData_1551 = this._counter = varData_1550.slice(0);
                  this._iv = void 0;
                }
                var varData_1552 = varData_1551.slice(0);
                varData_1548.encryptBlock(varData_1552, 0);
                varData_1551[varData_1549 - 1] = varData_1551[varData_1549 - 1] + 1 | 0;
                for (var loopIdx = 0; loopIdx < varData_1549; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1552[loopIdx];
                }
              }
            });
            varData_1546.Decryptor = varData_1547;
            return varData_1546;
          })();
          return param_1_1.mode.CTR;
        });
      }
    });
    var varData_1553 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CTRGladman = (function() {
            var varData_1554 = param_1_1.lib.BlockCipherMode.extend();
            function handleAction_135(param_1_2) {
              if ((param_1_2 >> 24 & 255) === 255) {
                var varData_1555 = param_1_2 >> 16 & 255;
                var varData_1556 = param_1_2 >> 8 & 255;
                var varData_1557 = param_1_2 & 255;
                if (varData_1555 === 255) {
                  varData_1555 = 0;
                  if (varData_1556 === 255) {
                    varData_1556 = 0;
                    if (varData_1557 === 255) {
                      varData_1557 = 0;
                    } else {
                      ++varData_1557;
                    }
                  } else {
                    ++varData_1556;
                  }
                } else {
                  ++varData_1555;
                }
                param_1_2 = 0;
                param_1_2 += varData_1555 << 16;
                param_1_2 += varData_1556 << 8;
                param_1_2 += varData_1557;
              } else {
                param_1_2 += 16777216;
              }
              return param_1_2;
            }
            function handleAction_136(param_1_2) {
              if ((param_1_2[0] = handleAction_135(param_1_2[0])) === 0) {
                param_1_2[1] = handleAction_135(param_1_2[1]);
              }
              return param_1_2;
            }
            var varData_1558 = varData_1554.Encryptor = varData_1554.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1559 = this._cipher;
                var varData_1560 = varData_1559.blockSize;
                var varData_1561 = this._iv;
                var varData_1562 = this._counter;
                if (varData_1561) {
                  varData_1562 = this._counter = varData_1561.slice(0);
                  this._iv = void 0;
                }
                handleAction_136(varData_1562);
                var varData_1563 = varData_1562.slice(0);
                varData_1559.encryptBlock(varData_1563, 0);
                for (var loopIdx = 0; loopIdx < varData_1560; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1563[loopIdx];
                }
              }
            });
            varData_1554.Decryptor = varData_1558;
            return varData_1554;
          })();
          return param_1_1.mode.CTRGladman;
        });
      }
    });
    var varData_1564 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.OFB = (function() {
            var varData_1565 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1566 = varData_1565.Encryptor = varData_1565.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1567 = this._cipher;
                var varData_1568 = varData_1567.blockSize;
                var varData_1569 = this._iv;
                var varData_1570 = this._keystream;
                if (varData_1569) {
                  varData_1570 = this._keystream = varData_1569.slice(0);
                  this._iv = void 0;
                }
                varData_1567.encryptBlock(varData_1570, 0);
                for (var loopIdx = 0; loopIdx < varData_1568; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1570[loopIdx];
                }
              }
            });
            varData_1565.Decryptor = varData_1566;
            return varData_1565;
          })();
          return param_1_1.mode.OFB;
        });
      }
    });
    var varData_1571 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.ECB = (function() {
            var varData_1572 = param_1_1.lib.BlockCipherMode.extend();
            varData_1572.Encryptor = varData_1572.extend({
              processBlock: function(param_1_2, param_2_1) {
                this._cipher.encryptBlock(param_1_2, param_2_1);
              }
            });
            varData_1572.Decryptor = varData_1572.extend({
              processBlock: function(param_1_2, param_2_1) {
                this._cipher.decryptBlock(param_1_2, param_2_1);
              }
            });
            return varData_1572;
          })();
          return param_1_1.mode.ECB;
        });
      }
    });
    var varData_1573 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.AnsiX923 = {
            pad: function(param_1_2, param_2_1) {
              var varData_1574 = param_1_2.sigBytes;
              var varData_1575 = param_2_1 * 4;
              var varData_1576 = varData_1575 - varData_1574 % varData_1575;
              var varData_1577 = varData_1574 + varData_1576 - 1;
              param_1_2.clamp();
              param_1_2.words[varData_1577 >>> 2] |= varData_1576 << 24 - varData_1577 % 4 * 8;
              param_1_2.sigBytes += varData_1576;
            },
            unpad: function(param_1_2) {
              var varData_1578 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1578;
            }
          };
          return param_1_1.pad.Ansix923;
        });
      }
    });
    var varData_1579 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.Iso10126 = {
            pad: function(param_1_2, param_2_1) {
              var varData_1580 = param_2_1 * 4;
              var varData_1581 = varData_1580 - param_1_2.sigBytes % varData_1580;
              param_1_2.concat(param_1_1.lib.WordArray.random(varData_1581 - 1)).concat(param_1_1.lib.WordArray.create([varData_1581 << 24], 1));
            },
            unpad: function(param_1_2) {
              var varData_1582 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1582;
            }
          };
          return param_1_1.pad.Iso10126;
        });
      }
    });
    var varData_1583 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.Iso97971 = {
            pad: function(param_1_2, param_2_1) {
              param_1_2.concat(param_1_1.lib.WordArray.create([2147483648], 1));
              param_1_1.pad.ZeroPadding.pad(param_1_2, param_2_1);
            },
            unpad: function(param_1_2) {
              param_1_1.pad.ZeroPadding.unpad(param_1_2);
              param_1_2.sigBytes--;
            }
          };
          return param_1_1.pad.Iso97971;
        });
      }
    });
    var varData_1584 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.ZeroPadding = {
            pad: function(param_1_2, param_2_1) {
              var varData_1585 = param_2_1 * 4;
              param_1_2.clamp();
              param_1_2.sigBytes += varData_1585 - (param_1_2.sigBytes % varData_1585 || varData_1585);
            },
            unpad: function(param_1_2) {
              var varData_1586 = param_1_2.words;
              var varData_1587 = param_1_2.sigBytes - 1;
              while (!(varData_1586[varData_1587 >>> 2] >>> 24 - varData_1587 % 4 * 8 & 255)) {
                varData_1587--;
              }
              param_1_2.sigBytes = varData_1587 + 1;
            }
          };
          return param_1_1.pad.ZeroPadding;
        });
      }
    });
    var varData_1588 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          var varData_1589 = {
            pad: function() {
            },
            unpad: function() {
            }
          };
          param_1_1.pad.NoPadding = varData_1589;
          return param_1_1.pad.NoPadding;
        });
      }
    });
    var varData_1590 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1591 = param_1_1;
            var varData_1592 = varData_1591.lib;
            var varData_1593 = varData_1592.CipherParams;
            var varData_1594 = varData_1591.enc;
            var varData_1595 = varData_1594.Hex;
            var varData_1596 = varData_1591.format;
            var varData_1597 = varData_1596.Hex = {
              stringify: function(param_1_3) {
                return param_1_3.ciphertext.toString(varData_1595);
              },
              parse: function(param_1_3) {
                var varData_1598 = varData_1595.parse(param_1_3);
                var varData_1599 = {
                  ciphertext: varData_1598
                };
                return varData_1593.create(varData_1599);
              }
            };
          })();
          return param_1_1.format.Hex;
        });
      }
    });
    var varData_1600 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1073(), varData_1097(), varData_1449(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1601 = param_1_1;
            var varData_1602 = varData_1601.lib;
            var varData_1603 = varData_1602.BlockCipher;
            var varData_1604 = varData_1601.algo;
            var varData_1605 = [];
            var varData_1606 = [];
            var varData_1607 = [];
            var varData_1608 = [];
            var varData_1609 = [];
            var varData_1610 = [];
            var varData_1611 = [];
            var varData_1612 = [];
            var varData_1613 = [];
            var varData_1614 = [];
            (function() {
              var varData_1615 = [];
              for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                if (loopIdx < 128) {
                  varData_1615[loopIdx] = loopIdx << 1;
                } else {
                  varData_1615[loopIdx] = loopIdx << 1 ^ 283;
                }
              }
              var varData_1616 = 0;
              var varData_1617 = 0;
              for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                var varData_1618 = varData_1617 ^ varData_1617 << 1 ^ varData_1617 << 2 ^ varData_1617 << 3 ^ varData_1617 << 4;
                varData_1618 = varData_1618 >>> 8 ^ varData_1618 & 255 ^ 99;
                varData_1605[varData_1616] = varData_1618;
                varData_1606[varData_1618] = varData_1616;
                var varData_1619 = varData_1615[varData_1616];
                var varData_1620 = varData_1615[varData_1619];
                var varData_1621 = varData_1615[varData_1620];
                var varData_1622 = varData_1615[varData_1618] * 257 ^ varData_1618 * 16843008;
                varData_1607[varData_1616] = varData_1622 << 24 | varData_1622 >>> 8;
                varData_1608[varData_1616] = varData_1622 << 16 | varData_1622 >>> 16;
                varData_1609[varData_1616] = varData_1622 << 8 | varData_1622 >>> 24;
                varData_1610[varData_1616] = varData_1622;
                var varData_1622 = varData_1621 * 16843009 ^ varData_1620 * 65537 ^ varData_1619 * 257 ^ varData_1616 * 16843008;
                varData_1611[varData_1618] = varData_1622 << 24 | varData_1622 >>> 8;
                varData_1612[varData_1618] = varData_1622 << 16 | varData_1622 >>> 16;
                varData_1613[varData_1618] = varData_1622 << 8 | varData_1622 >>> 24;
                varData_1614[varData_1618] = varData_1622;
                if (!varData_1616) {
                  varData_1616 = varData_1617 = 1;
                } else {
                  varData_1616 = varData_1619 ^ varData_1615[varData_1615[varData_1615[varData_1621 ^ varData_1619]]];
                  varData_1617 ^= varData_1615[varData_1615[varData_1617]];
                }
              }
            })();
            var varData_1623 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            var varData_1624 = varData_1604.AES = varData_1603.extend({
              _doReset: function() {
                if (this._nRounds && this._keyPriorReset === this._key) {
                  return;
                }
                var varData_1625 = this._keyPriorReset = this._key;
                var varData_1626 = varData_1625.words;
                var varData_1627 = varData_1625.sigBytes / 4;
                var varData_1628 = this._nRounds = varData_1627 + 6;
                var varData_1629 = (varData_1628 + 1) * 4;
                var varData_1630 = this._keySchedule = [];
                for (var loopIdx = 0; loopIdx < varData_1629; loopIdx++) {
                  if (loopIdx < varData_1627) {
                    varData_1630[loopIdx] = varData_1626[loopIdx];
                  } else {
                    var varData_1631 = varData_1630[loopIdx - 1];
                    if (!(loopIdx % varData_1627)) {
                      varData_1631 = varData_1631 << 8 | varData_1631 >>> 24;
                      varData_1631 = varData_1605[varData_1631 >>> 24] << 24 | varData_1605[varData_1631 >>> 16 & 255] << 16 | varData_1605[varData_1631 >>> 8 & 255] << 8 | varData_1605[varData_1631 & 255];
                      varData_1631 ^= varData_1623[loopIdx / varData_1627 | 0] << 24;
                    } else if (varData_1627 > 6 && loopIdx % varData_1627 == 4) {
                      varData_1631 = varData_1605[varData_1631 >>> 24] << 24 | varData_1605[varData_1631 >>> 16 & 255] << 16 | varData_1605[varData_1631 >>> 8 & 255] << 8 | varData_1605[varData_1631 & 255];
                    }
                    varData_1630[loopIdx] = varData_1630[loopIdx - varData_1627] ^ varData_1631;
                  }
                }
                var varData_1632 = this._invKeySchedule = [];
                for (var loopIdx_1 = 0; loopIdx_1 < varData_1629; loopIdx_1++) {
                  var loopIdx = varData_1629 - loopIdx_1;
                  if (loopIdx_1 % 4) {
                    var varData_1631 = varData_1630[loopIdx];
                  } else {
                    var varData_1631 = varData_1630[loopIdx - 4];
                  }
                  if (loopIdx_1 < 4 || loopIdx <= 4) {
                    varData_1632[loopIdx_1] = varData_1631;
                  } else {
                    varData_1632[loopIdx_1] = varData_1611[varData_1605[varData_1631 >>> 24]] ^ varData_1612[varData_1605[varData_1631 >>> 16 & 255]] ^ varData_1613[varData_1605[varData_1631 >>> 8 & 255]] ^ varData_1614[varData_1605[varData_1631 & 255]];
                  }
                }
              },
              encryptBlock: function(param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._keySchedule, varData_1607, varData_1608, varData_1609, varData_1610, varData_1605);
              },
              decryptBlock: function(param_1_2, param_2_1) {
                var varData_1633 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1633;
                this._doCryptBlock(param_1_2, param_2_1, this._invKeySchedule, varData_1611, varData_1612, varData_1613, varData_1614, varData_1606);
                var varData_1633 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1633;
              },
              _doCryptBlock: function(param_1_2, param_2_1, param_3, param_4, param_5, param_6, param_7, param_8) {
                var varData_1634 = this._nRounds;
                var varData_1635 = param_1_2[param_2_1] ^ param_3[0];
                var varData_1636 = param_1_2[param_2_1 + 1] ^ param_3[1];
                var varData_1637 = param_1_2[param_2_1 + 2] ^ param_3[2];
                var varData_1638 = param_1_2[param_2_1 + 3] ^ param_3[3];
                var varData_1639 = 4;
                for (var loopIdx = 1; loopIdx < varData_1634; loopIdx++) {
                  var varData_1640 = param_4[varData_1635 >>> 24] ^ param_5[varData_1636 >>> 16 & 255] ^ param_6[varData_1637 >>> 8 & 255] ^ param_7[varData_1638 & 255] ^ param_3[varData_1639++];
                  var varData_1641 = param_4[varData_1636 >>> 24] ^ param_5[varData_1637 >>> 16 & 255] ^ param_6[varData_1638 >>> 8 & 255] ^ param_7[varData_1635 & 255] ^ param_3[varData_1639++];
                  var varData_1642 = param_4[varData_1637 >>> 24] ^ param_5[varData_1638 >>> 16 & 255] ^ param_6[varData_1635 >>> 8 & 255] ^ param_7[varData_1636 & 255] ^ param_3[varData_1639++];
                  var varData_1643 = param_4[varData_1638 >>> 24] ^ param_5[varData_1635 >>> 16 & 255] ^ param_6[varData_1636 >>> 8 & 255] ^ param_7[varData_1637 & 255] ^ param_3[varData_1639++];
                  varData_1635 = varData_1640;
                  varData_1636 = varData_1641;
                  varData_1637 = varData_1642;
                  varData_1638 = varData_1643;
                }
                var varData_1640 = (param_8[varData_1635 >>> 24] << 24 | param_8[varData_1636 >>> 16 & 255] << 16 | param_8[varData_1637 >>> 8 & 255] << 8 | param_8[varData_1638 & 255]) ^ param_3[varData_1639++];
                var varData_1641 = (param_8[varData_1636 >>> 24] << 24 | param_8[varData_1637 >>> 16 & 255] << 16 | param_8[varData_1638 >>> 8 & 255] << 8 | param_8[varData_1635 & 255]) ^ param_3[varData_1639++];
                var varData_1642 = (param_8[varData_1637 >>> 24] << 24 | param_8[varData_1638 >>> 16 & 255] << 16 | param_8[varData_1635 >>> 8 & 255] << 8 | param_8[varData_1636 & 255]) ^ param_3[varData_1639++];
                var varData_1643 = (param_8[varData_1638 >>> 24] << 24 | param_8[varData_1635 >>> 16 & 255] << 16 | param_8[varData_1636 >>> 8 & 255] << 8 | param_8[varData_1637 & 255]) ^ param_3[varData_1639++];
                param_1_2[param_2_1] = varData_1640;
                param_1_2[param_2_1 + 1] = varData_1641;
                param_1_2[param_2_1 + 2] = varData_1642;
                param_1_2[param_2_1 + 3] = varData_1643;
              },
              keySize: 8
            });
            varData_1601.AES = varData_1603._createHelper(varData_1624);
          })();
          return param_1_1.AES;
        });
      }
    });
    var varData_1644 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1073(), varData_1097(), varData_1449(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1645 = param_1_1;
            var varData_1646 = varData_1645.lib;
            var varData_1647 = varData_1646.WordArray;
            var varData_1648 = varData_1646.BlockCipher;
            var varData_1649 = varData_1645.algo;
            var varData_1650 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
            var varData_1651 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
            var varData_1652 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
            var varData_1653 = [{
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
            var varData_1654 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
            var varData_1655 = varData_1649.DES = varData_1648.extend({
              _doReset: function() {
                var varData_1656 = this._key;
                var varData_1657 = varData_1656.words;
                var varData_1658 = [];
                for (var loopIdx = 0; loopIdx < 56; loopIdx++) {
                  var varData_1659 = varData_1650[loopIdx] - 1;
                  varData_1658[loopIdx] = varData_1657[varData_1659 >>> 5] >>> 31 - varData_1659 % 32 & 1;
                }
                var varData_1660 = this._subKeys = [];
                for (var loopIdx_1 = 0; loopIdx_1 < 16; loopIdx_1++) {
                  var varData_1661 = varData_1660[loopIdx_1] = [];
                  var varData_1662 = varData_1652[loopIdx_1];
                  for (var loopIdx = 0; loopIdx < 24; loopIdx++) {
                    varData_1661[loopIdx / 6 | 0] |= varData_1658[(varData_1651[loopIdx] - 1 + varData_1662) % 28] << 31 - loopIdx % 6;
                    varData_1661[4 + (loopIdx / 6 | 0)] |= varData_1658[28 + (varData_1651[loopIdx + 24] - 1 + varData_1662) % 28] << 31 - loopIdx % 6;
                  }
                  varData_1661[0] = varData_1661[0] << 1 | varData_1661[0] >>> 31;
                  for (var loopIdx = 1; loopIdx < 7; loopIdx++) {
                    varData_1661[loopIdx] = varData_1661[loopIdx] >>> (loopIdx - 1) * 4 + 3;
                  }
                  varData_1661[7] = varData_1661[7] << 5 | varData_1661[7] >>> 27;
                }
                var varData_1663 = this._invSubKeys = [];
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  varData_1663[loopIdx] = varData_1660[15 - loopIdx];
                }
              },
              encryptBlock: function(param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._subKeys);
              },
              decryptBlock: function(param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._invSubKeys);
              },
              _doCryptBlock: function(param_1_2, param_2_1, param_3) {
                this._lBlock = param_1_2[param_2_1];
                this._rBlock = param_1_2[param_2_1 + 1];
                handleAction_137.call(this, 4, 252645135);
                handleAction_137.call(this, 16, 65535);
                handleAction_138.call(this, 2, 858993459);
                handleAction_138.call(this, 8, 16711935);
                handleAction_137.call(this, 1, 1431655765);
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_1664 = param_3[loopIdx];
                  var varData_1665 = this._lBlock;
                  var varData_1666 = this._rBlock;
                  var varData_1667 = 0;
                  for (var loopIdx_1 = 0; loopIdx_1 < 8; loopIdx_1++) {
                    varData_1667 |= varData_1653[loopIdx_1][((varData_1666 ^ varData_1664[loopIdx_1]) & varData_1654[loopIdx_1]) >>> 0];
                  }
                  this._lBlock = varData_1666;
                  this._rBlock = varData_1665 ^ varData_1667;
                }
                var varData_1668 = this._lBlock;
                this._lBlock = this._rBlock;
                this._rBlock = varData_1668;
                handleAction_137.call(this, 1, 1431655765);
                handleAction_138.call(this, 8, 16711935);
                handleAction_138.call(this, 2, 858993459);
                handleAction_137.call(this, 16, 65535);
                handleAction_137.call(this, 4, 252645135);
                param_1_2[param_2_1] = this._lBlock;
                param_1_2[param_2_1 + 1] = this._rBlock;
              },
              keySize: 2,
              ivSize: 2,
              blockSize: 2
            });
            function handleAction_137(param_1_2, param_2_1) {
              var varData_1669 = (this._lBlock >>> param_1_2 ^ this._rBlock) & param_2_1;
              this._rBlock ^= varData_1669;
              this._lBlock ^= varData_1669 << param_1_2;
            }
            function handleAction_138(param_1_2, param_2_1) {
              var varData_1670 = (this._rBlock >>> param_1_2 ^ this._lBlock) & param_2_1;
              this._lBlock ^= varData_1670;
              this._rBlock ^= varData_1670 << param_1_2;
            }
            varData_1645.DES = varData_1648._createHelper(varData_1655);
            var varData_1671 = varData_1649.TripleDES = varData_1648.extend({
              _doReset: function() {
                var varData_1672 = this._key;
                var varData_1673 = varData_1672.words;
                this._des1 = varData_1655.createEncryptor(varData_1647.create(varData_1673.slice(0, 2)));
                this._des2 = varData_1655.createEncryptor(varData_1647.create(varData_1673.slice(2, 4)));
                this._des3 = varData_1655.createEncryptor(varData_1647.create(varData_1673.slice(4, 6)));
              },
              encryptBlock: function(param_1_2, param_2_1) {
                this._des1.encryptBlock(param_1_2, param_2_1);
                this._des2.decryptBlock(param_1_2, param_2_1);
                this._des3.encryptBlock(param_1_2, param_2_1);
              },
              decryptBlock: function(param_1_2, param_2_1) {
                this._des3.decryptBlock(param_1_2, param_2_1);
                this._des2.encryptBlock(param_1_2, param_2_1);
                this._des1.decryptBlock(param_1_2, param_2_1);
              },
              keySize: 6,
              ivSize: 2,
              blockSize: 2
            });
            varData_1645.TripleDES = varData_1648._createHelper(varData_1671);
          })();
          return param_1_1.TripleDES;
        });
      }
    });
    var varData_1674 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1073(), varData_1097(), varData_1449(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1675 = param_1_1;
            var varData_1676 = varData_1675.lib;
            var varData_1677 = varData_1676.StreamCipher;
            var varData_1678 = varData_1675.algo;
            var varData_1679 = varData_1678.RC4 = varData_1677.extend({
              _doReset: function() {
                var varData_1680 = this._key;
                var varData_1681 = varData_1680.words;
                var varData_1682 = varData_1680.sigBytes;
                var varData_1683 = this._S = [];
                for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                  varData_1683[loopIdx] = loopIdx;
                }
                for (var loopIdx = 0, loopIdx_1 = 0; loopIdx < 256; loopIdx++) {
                  var varData_1684 = loopIdx % varData_1682;
                  var varData_1685 = varData_1681[varData_1684 >>> 2] >>> 24 - varData_1684 % 4 * 8 & 255;
                  loopIdx_1 = (loopIdx_1 + varData_1683[loopIdx] + varData_1685) % 256;
                  var varData_1686 = varData_1683[loopIdx];
                  varData_1683[loopIdx] = varData_1683[loopIdx_1];
                  varData_1683[loopIdx_1] = varData_1686;
                }
                this._i = this._j = 0;
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                param_1_2[param_2_1] ^= handleAction_139.call(this);
              },
              keySize: 8,
              ivSize: 0
            });
            function handleAction_139() {
              var varData_1687 = this._S;
              var varData_1688 = this._i;
              var varData_1689 = this._j;
              var varData_1690 = 0;
              for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                varData_1688 = (varData_1688 + 1) % 256;
                varData_1689 = (varData_1689 + varData_1687[varData_1688]) % 256;
                var varData_1691 = varData_1687[varData_1688];
                varData_1687[varData_1688] = varData_1687[varData_1689];
                varData_1687[varData_1689] = varData_1691;
                varData_1690 |= varData_1687[(varData_1687[varData_1688] + varData_1687[varData_1689]) % 256] << 24 - loopIdx * 8;
              }
              this._i = varData_1688;
              this._j = varData_1689;
              return varData_1690;
            }
            varData_1675.RC4 = varData_1677._createHelper(varData_1679);
            var varData_1692 = varData_1678.RC4Drop = varData_1679.extend({
              cfg: varData_1679.cfg.extend({
                drop: 192
              }),
              _doReset: function() {
                varData_1679._doReset.call(this);
                for (var loopIdx = this.cfg.drop; loopIdx > 0; loopIdx--) {
                  handleAction_139.call(this);
                }
              }
            });
            varData_1675.RC4Drop = varData_1677._createHelper(varData_1692);
          })();
          return param_1_1.RC4;
        });
      }
    });
    var varData_1693 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1073(), varData_1097(), varData_1449(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1694 = param_1_1;
            var varData_1695 = varData_1694.lib;
            var varData_1696 = varData_1695.StreamCipher;
            var varData_1697 = varData_1694.algo;
            var varData_1698 = [];
            var varData_1699 = [];
            var varData_1700 = [];
            var varData_1701 = varData_1697.Rabbit = varData_1696.extend({
              _doReset: function() {
                var varData_1702 = this._key.words;
                var varData_1703 = this.cfg.iv;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1702[loopIdx] = (varData_1702[loopIdx] << 8 | varData_1702[loopIdx] >>> 24) & 16711935 | (varData_1702[loopIdx] << 24 | varData_1702[loopIdx] >>> 8) & -16711936;
                }
                var varData_1704 = this._X = [varData_1702[0], varData_1702[3] << 16 | varData_1702[2] >>> 16, varData_1702[1], varData_1702[0] << 16 | varData_1702[3] >>> 16, varData_1702[2], varData_1702[1] << 16 | varData_1702[0] >>> 16, varData_1702[3], varData_1702[2] << 16 | varData_1702[1] >>> 16];
                var varData_1705 = this._C = [varData_1702[2] << 16 | varData_1702[2] >>> 16, varData_1702[0] & -65536 | varData_1702[1] & 65535, varData_1702[3] << 16 | varData_1702[3] >>> 16, varData_1702[1] & -65536 | varData_1702[2] & 65535, varData_1702[0] << 16 | varData_1702[0] >>> 16, varData_1702[2] & -65536 | varData_1702[3] & 65535, varData_1702[1] << 16 | varData_1702[1] >>> 16, varData_1702[3] & -65536 | varData_1702[0] & 65535];
                this._b = 0;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  handleAction_140.call(this);
                }
                for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                  varData_1705[loopIdx] ^= varData_1704[loopIdx + 4 & 7];
                }
                if (varData_1703) {
                  var varData_1706 = varData_1703.words;
                  var varData_1707 = varData_1706[0];
                  var varData_1708 = varData_1706[1];
                  var varData_1709 = (varData_1707 << 8 | varData_1707 >>> 24) & 16711935 | (varData_1707 << 24 | varData_1707 >>> 8) & -16711936;
                  var varData_1710 = (varData_1708 << 8 | varData_1708 >>> 24) & 16711935 | (varData_1708 << 24 | varData_1708 >>> 8) & -16711936;
                  var varData_1711 = varData_1709 >>> 16 | varData_1710 & -65536;
                  var varData_1712 = varData_1710 << 16 | varData_1709 & 65535;
                  varData_1705[0] ^= varData_1709;
                  varData_1705[1] ^= varData_1711;
                  varData_1705[2] ^= varData_1710;
                  varData_1705[3] ^= varData_1712;
                  varData_1705[4] ^= varData_1709;
                  varData_1705[5] ^= varData_1711;
                  varData_1705[6] ^= varData_1710;
                  varData_1705[7] ^= varData_1712;
                  for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                    handleAction_140.call(this);
                  }
                }
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_1713 = this._X;
                handleAction_140.call(this);
                varData_1698[0] = varData_1713[0] ^ varData_1713[5] >>> 16 ^ varData_1713[3] << 16;
                varData_1698[1] = varData_1713[2] ^ varData_1713[7] >>> 16 ^ varData_1713[5] << 16;
                varData_1698[2] = varData_1713[4] ^ varData_1713[1] >>> 16 ^ varData_1713[7] << 16;
                varData_1698[3] = varData_1713[6] ^ varData_1713[3] >>> 16 ^ varData_1713[1] << 16;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1698[loopIdx] = (varData_1698[loopIdx] << 8 | varData_1698[loopIdx] >>> 24) & 16711935 | (varData_1698[loopIdx] << 24 | varData_1698[loopIdx] >>> 8) & -16711936;
                  param_1_2[param_2_1 + loopIdx] ^= varData_1698[loopIdx];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_140() {
              var varData_1714 = this._X;
              var varData_1715 = this._C;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                varData_1699[loopIdx] = varData_1715[loopIdx];
              }
              varData_1715[0] = varData_1715[0] + 1295307597 + this._b | 0;
              varData_1715[1] = varData_1715[1] + 3545052371 + (varData_1715[0] >>> 0 < varData_1699[0] >>> 0 ? 1 : 0) | 0;
              varData_1715[2] = varData_1715[2] + 886263092 + (varData_1715[1] >>> 0 < varData_1699[1] >>> 0 ? 1 : 0) | 0;
              varData_1715[3] = varData_1715[3] + 1295307597 + (varData_1715[2] >>> 0 < varData_1699[2] >>> 0 ? 1 : 0) | 0;
              varData_1715[4] = varData_1715[4] + 3545052371 + (varData_1715[3] >>> 0 < varData_1699[3] >>> 0 ? 1 : 0) | 0;
              varData_1715[5] = varData_1715[5] + 886263092 + (varData_1715[4] >>> 0 < varData_1699[4] >>> 0 ? 1 : 0) | 0;
              varData_1715[6] = varData_1715[6] + 1295307597 + (varData_1715[5] >>> 0 < varData_1699[5] >>> 0 ? 1 : 0) | 0;
              varData_1715[7] = varData_1715[7] + 3545052371 + (varData_1715[6] >>> 0 < varData_1699[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1715[7] >>> 0 < varData_1699[7] >>> 0 ? 1 : 0;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                var varData_1716 = varData_1714[loopIdx] + varData_1715[loopIdx];
                var varData_1717 = varData_1716 & 65535;
                var varData_1718 = varData_1716 >>> 16;
                var varData_1719 = ((varData_1717 * varData_1717 >>> 17) + varData_1717 * varData_1718 >>> 15) + varData_1718 * varData_1718;
                var varData_1720 = ((varData_1716 & -65536) * varData_1716 | 0) + ((varData_1716 & 65535) * varData_1716 | 0);
                varData_1700[loopIdx] = varData_1719 ^ varData_1720;
              }
              varData_1714[0] = varData_1700[0] + (varData_1700[7] << 16 | varData_1700[7] >>> 16) + (varData_1700[6] << 16 | varData_1700[6] >>> 16) | 0;
              varData_1714[1] = varData_1700[1] + (varData_1700[0] << 8 | varData_1700[0] >>> 24) + varData_1700[7] | 0;
              varData_1714[2] = varData_1700[2] + (varData_1700[1] << 16 | varData_1700[1] >>> 16) + (varData_1700[0] << 16 | varData_1700[0] >>> 16) | 0;
              varData_1714[3] = varData_1700[3] + (varData_1700[2] << 8 | varData_1700[2] >>> 24) + varData_1700[1] | 0;
              varData_1714[4] = varData_1700[4] + (varData_1700[3] << 16 | varData_1700[3] >>> 16) + (varData_1700[2] << 16 | varData_1700[2] >>> 16) | 0;
              varData_1714[5] = varData_1700[5] + (varData_1700[4] << 8 | varData_1700[4] >>> 24) + varData_1700[3] | 0;
              varData_1714[6] = varData_1700[6] + (varData_1700[5] << 16 | varData_1700[5] >>> 16) + (varData_1700[4] << 16 | varData_1700[4] >>> 16) | 0;
              varData_1714[7] = varData_1700[7] + (varData_1700[6] << 8 | varData_1700[6] >>> 24) + varData_1700[5] | 0;
            }
            varData_1694.Rabbit = varData_1696._createHelper(varData_1701);
          })();
          return param_1_1.Rabbit;
        });
      }
    });
    var varData_1721 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1073(), varData_1097(), varData_1449(), varData_1465());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1722 = param_1_1;
            var varData_1723 = varData_1722.lib;
            var varData_1724 = varData_1723.StreamCipher;
            var varData_1725 = varData_1722.algo;
            var varData_1726 = [];
            var varData_1727 = [];
            var varData_1728 = [];
            var varData_1729 = varData_1725.RabbitLegacy = varData_1724.extend({
              _doReset: function() {
                var varData_1730 = this._key.words;
                var varData_1731 = this.cfg.iv;
                var varData_1732 = this._X = [varData_1730[0], varData_1730[3] << 16 | varData_1730[2] >>> 16, varData_1730[1], varData_1730[0] << 16 | varData_1730[3] >>> 16, varData_1730[2], varData_1730[1] << 16 | varData_1730[0] >>> 16, varData_1730[3], varData_1730[2] << 16 | varData_1730[1] >>> 16];
                var varData_1733 = this._C = [varData_1730[2] << 16 | varData_1730[2] >>> 16, varData_1730[0] & -65536 | varData_1730[1] & 65535, varData_1730[3] << 16 | varData_1730[3] >>> 16, varData_1730[1] & -65536 | varData_1730[2] & 65535, varData_1730[0] << 16 | varData_1730[0] >>> 16, varData_1730[2] & -65536 | varData_1730[3] & 65535, varData_1730[1] << 16 | varData_1730[1] >>> 16, varData_1730[3] & -65536 | varData_1730[0] & 65535];
                this._b = 0;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  handleAction_141.call(this);
                }
                for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                  varData_1733[loopIdx] ^= varData_1732[loopIdx + 4 & 7];
                }
                if (varData_1731) {
                  var varData_1734 = varData_1731.words;
                  var varData_1735 = varData_1734[0];
                  var varData_1736 = varData_1734[1];
                  var varData_1737 = (varData_1735 << 8 | varData_1735 >>> 24) & 16711935 | (varData_1735 << 24 | varData_1735 >>> 8) & -16711936;
                  var varData_1738 = (varData_1736 << 8 | varData_1736 >>> 24) & 16711935 | (varData_1736 << 24 | varData_1736 >>> 8) & -16711936;
                  var varData_1739 = varData_1737 >>> 16 | varData_1738 & -65536;
                  var varData_1740 = varData_1738 << 16 | varData_1737 & 65535;
                  varData_1733[0] ^= varData_1737;
                  varData_1733[1] ^= varData_1739;
                  varData_1733[2] ^= varData_1738;
                  varData_1733[3] ^= varData_1740;
                  varData_1733[4] ^= varData_1737;
                  varData_1733[5] ^= varData_1739;
                  varData_1733[6] ^= varData_1738;
                  varData_1733[7] ^= varData_1740;
                  for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                    handleAction_141.call(this);
                  }
                }
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_1741 = this._X;
                handleAction_141.call(this);
                varData_1726[0] = varData_1741[0] ^ varData_1741[5] >>> 16 ^ varData_1741[3] << 16;
                varData_1726[1] = varData_1741[2] ^ varData_1741[7] >>> 16 ^ varData_1741[5] << 16;
                varData_1726[2] = varData_1741[4] ^ varData_1741[1] >>> 16 ^ varData_1741[7] << 16;
                varData_1726[3] = varData_1741[6] ^ varData_1741[3] >>> 16 ^ varData_1741[1] << 16;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1726[loopIdx] = (varData_1726[loopIdx] << 8 | varData_1726[loopIdx] >>> 24) & 16711935 | (varData_1726[loopIdx] << 24 | varData_1726[loopIdx] >>> 8) & -16711936;
                  param_1_2[param_2_1 + loopIdx] ^= varData_1726[loopIdx];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_141() {
              var varData_1742 = this._X;
              var varData_1743 = this._C;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                varData_1727[loopIdx] = varData_1743[loopIdx];
              }
              varData_1743[0] = varData_1743[0] + 1295307597 + this._b | 0;
              varData_1743[1] = varData_1743[1] + 3545052371 + (varData_1743[0] >>> 0 < varData_1727[0] >>> 0 ? 1 : 0) | 0;
              varData_1743[2] = varData_1743[2] + 886263092 + (varData_1743[1] >>> 0 < varData_1727[1] >>> 0 ? 1 : 0) | 0;
              varData_1743[3] = varData_1743[3] + 1295307597 + (varData_1743[2] >>> 0 < varData_1727[2] >>> 0 ? 1 : 0) | 0;
              varData_1743[4] = varData_1743[4] + 3545052371 + (varData_1743[3] >>> 0 < varData_1727[3] >>> 0 ? 1 : 0) | 0;
              varData_1743[5] = varData_1743[5] + 886263092 + (varData_1743[4] >>> 0 < varData_1727[4] >>> 0 ? 1 : 0) | 0;
              varData_1743[6] = varData_1743[6] + 1295307597 + (varData_1743[5] >>> 0 < varData_1727[5] >>> 0 ? 1 : 0) | 0;
              varData_1743[7] = varData_1743[7] + 3545052371 + (varData_1743[6] >>> 0 < varData_1727[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1743[7] >>> 0 < varData_1727[7] >>> 0 ? 1 : 0;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                var varData_1744 = varData_1742[loopIdx] + varData_1743[loopIdx];
                var varData_1745 = varData_1744 & 65535;
                var varData_1746 = varData_1744 >>> 16;
                var varData_1747 = ((varData_1745 * varData_1745 >>> 17) + varData_1745 * varData_1746 >>> 15) + varData_1746 * varData_1746;
                var varData_1748 = ((varData_1744 & -65536) * varData_1744 | 0) + ((varData_1744 & 65535) * varData_1744 | 0);
                varData_1728[loopIdx] = varData_1747 ^ varData_1748;
              }
              varData_1742[0] = varData_1728[0] + (varData_1728[7] << 16 | varData_1728[7] >>> 16) + (varData_1728[6] << 16 | varData_1728[6] >>> 16) | 0;
              varData_1742[1] = varData_1728[1] + (varData_1728[0] << 8 | varData_1728[0] >>> 24) + varData_1728[7] | 0;
              varData_1742[2] = varData_1728[2] + (varData_1728[1] << 16 | varData_1728[1] >>> 16) + (varData_1728[0] << 16 | varData_1728[0] >>> 16) | 0;
              varData_1742[3] = varData_1728[3] + (varData_1728[2] << 8 | varData_1728[2] >>> 24) + varData_1728[1] | 0;
              varData_1742[4] = varData_1728[4] + (varData_1728[3] << 16 | varData_1728[3] >>> 16) + (varData_1728[2] << 16 | varData_1728[2] >>> 16) | 0;
              varData_1742[5] = varData_1728[5] + (varData_1728[4] << 8 | varData_1728[4] >>> 24) + varData_1728[3] | 0;
              varData_1742[6] = varData_1728[6] + (varData_1728[5] << 16 | varData_1728[5] >>> 16) + (varData_1728[4] << 16 | varData_1728[4] >>> 16) | 0;
              varData_1742[7] = varData_1728[7] + (varData_1728[6] << 8 | varData_1728[6] >>> 24) + varData_1728[5] | 0;
            }
            varData_1722.RabbitLegacy = varData_1724._createHelper(varData_1729);
          })();
          return param_1_1.RabbitLegacy;
        });
      }
    });
    var varData_1749 = varData_965({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_977(), varData_1031(), varData_1047(), varData_1055(), varData_1073(), varData_1097(), varData_1142(), varData_1163(), varData_1200(), varData_1208(), varData_1300(), varData_1309(), varData_1367(), varData_1408(), varData_1426(), varData_1449(), varData_1465(), varData_1536(), varData_1545(), varData_1553(), varData_1564(), varData_1571(), varData_1573(), varData_1579(), varData_1583(), varData_1584(), varData_1588(), varData_1590(), varData_1600(), varData_1644(), varData_1674(), varData_1693(), varData_1721());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], param_2_1);
          } else {
            param_1_1.CryptoJS = param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          return param_1_1;
        });
      }
    });
    var varData_1750 = {
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
    var varData_1751 = {};
    var varData_1752 = {
      MathUtils: () => varData_1910
    };
    varData_966(varData_1751, varData_1752);
    var varData_1753;
    var varData_1754;
    var varData_1755 = class _0x391de7 {
      constructor(param_1, param_2, param_3) {
        varData_973(this, varData_1753);
        const varData_1756 = varData_976(this, varData_1753, varData_1754).call(this, param_1, param_2, param_3);
        this.x = varData_1756.x;
        this.y = varData_1756.y;
        this.z = varData_1756.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_1757 = varData_976(this, varData_1753, varData_1754).call(this, param_1, param_2, param_3);
        return this.x === varData_1757.x && this.y === varData_1757.y && this.z === varData_1757.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_1758 = varData_976(this, varData_1753, varData_1754).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_1758.x * param_4 : varData_1758.x;
        this.y += param_4 ? varData_1758.y * param_4 : varData_1758.y;
        this.z += param_4 ? varData_1758.z * param_4 : varData_1758.z;
        return this;
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x += param_1;
        this.y += param_1;
        this.z += param_1;
        return this;
      }
      sub(param_1, param_2, param_3, param_4) {
        const varData_1759 = varData_976(this, varData_1753, varData_1754).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_1759.x * param_4 : varData_1759.x;
        this.y -= param_4 ? varData_1759.y * param_4 : varData_1759.y;
        this.z -= param_4 ? varData_1759.z * param_4 : varData_1759.z;
        return this;
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x -= param_1;
        this.y -= param_1;
        this.z -= param_1;
        return this;
      }
      multiply(param_1, param_2, param_3) {
        const varData_1760 = varData_976(this, varData_1753, varData_1754).call(this, param_1, param_2, param_3);
        this.x *= varData_1760.x;
        this.y *= varData_1760.y;
        this.z *= varData_1760.z;
        return this;
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x *= param_1;
        this.y *= param_1;
        this.z *= param_1;
        return this;
      }
      divide(param_1, param_2, param_3) {
        const varData_1761 = varData_976(this, varData_1753, varData_1754).call(this, param_1, param_2, param_3);
        this.x /= varData_1761.x;
        this.y /= varData_1761.y;
        this.z /= varData_1761.z;
        return this;
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        this.x /= param_1;
        this.y /= param_1;
        this.z /= param_1;
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
      getCenter(param_1, param_2, param_3) {
        const varData_1762 = varData_976(this, varData_1753, varData_1754).call(this, param_1, param_2, param_3);
        return new _0x391de7((this.x + varData_1762.x) / 2, (this.y + varData_1762.y) / 2, (this.z + varData_1762.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x26622d, _0x4e7827, _0x3ae184] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x26622d !== "number" || typeof _0x4e7827 !== "number" || typeof _0x3ae184 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x485a2a, _0x2a4b5e, _0x59b9f1] = [this.x - _0x26622d, this.y - _0x4e7827, this.z - _0x3ae184];
        return Math.sqrt(_0x485a2a * _0x485a2a + _0x2a4b5e * _0x2a4b5e + _0x59b9f1 * _0x59b9f1);
      }
      toArray(param_1) {
        if (typeof param_1 === "number") {
          return [parseFloat(this.x.toFixed(param_1)), parseFloat(this.y.toFixed(param_1)), parseFloat(this.z.toFixed(param_1))];
        }
        return [this.x, this.y, this.z];
      }
      toJSON(param_1) {
        if (typeof param_1 === "number") {
          return {
            x: parseFloat(this.x.toFixed(param_1)),
            y: parseFloat(this.y.toFixed(param_1)),
            z: parseFloat(this.z.toFixed(param_1))
          };
        }
        var varData_1763 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_1763;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1753 = /* @__PURE__ */ new WeakSet();
    varData_1754 = function(param_1, param_2, param_3) {
      let varData_1764 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_1755) {
        varData_1764 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1765 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_1764 = varData_1765;
      } else if (typeof param_1 === "object") {
        varData_1764 = param_1;
      } else {
        var varData_1766 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_1764 = varData_1766;
      }
      if (typeof varData_1764.x !== "number" || typeof varData_1764.y !== "number" || typeof varData_1764.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1764;
    };
    var varData_1767 = varData_1755;
    var varData_1768;
    var varData_1769;
    var varData_1770 = class {
      constructor(param_1) {
        varData_973(this, varData_1768, void 0);
        varData_973(this, varData_1769, void 0);
        varData_974(this, varData_1769, param_1 ?? 5);
        varData_974(this, varData_1768, /* @__PURE__ */ new Map());
      }
      setTTL(param_1) {
        varData_974(this, varData_1769, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_972(this, varData_1768).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_972(this, varData_1769)) * 1e3
        });
        return this;
      }
      get(param_1, _0x57dbca = false) {
        const varData_1771 = varData_972(this, varData_1768).get(param_1);
        const varData_1772 = varData_1771 ? _0x57dbca ? true : varData_1771.expiration > Date.now() : false;
        if (!varData_1771 || !varData_1772) {
          if (varData_1771) {
            varData_972(this, varData_1768).delete(param_1);
          }
          return;
        }
        return varData_1771.value;
      }
      has(param_1, _0xfc996d = false) {
        const varData_1773 = varData_972(this, varData_1768).get(param_1);
        const varData_1774 = varData_1773 ? _0xfc996d ? true : varData_1773.expiration > Date.now() : false;
        if (varData_1773 && !varData_1774) {
          varData_972(this, varData_1768).delete(param_1);
        }
        return varData_1774;
      }
      delete(param_1) {
        return varData_972(this, varData_1768).delete(param_1);
      }
      clear() {
        varData_972(this, varData_1768).clear();
      }
      values(_0x5b974a = false) {
        const varData_1775 = [];
        const timestamp = Date.now();
        for (const varData_1776 of varData_972(this, varData_1768).values()) {
          if (_0x5b974a || varData_1776.expiration > timestamp) {
            varData_1775.push(varData_1776.value);
          }
        }
        return varData_1775;
      }
      keys(_0x3209ff = false) {
        const varData_1777 = [];
        const timestamp = Date.now();
        for (const [_0x4f1be2, _0x4226cf] of varData_972(this, varData_1768).entries()) {
          if (_0x3209ff || _0x4226cf.expiration > timestamp) {
            varData_1777.push(_0x4f1be2);
          }
        }
        return varData_1777;
      }
      entries(_0x3d7078 = false) {
        const varData_1778 = [];
        const timestamp = Date.now();
        for (const [_0x52efc8, _0x242fb3] of varData_972(this, varData_1768).entries()) {
          if (_0x3d7078 || _0x242fb3.expiration > timestamp) {
            varData_1778.push([_0x52efc8, _0x242fb3.value]);
          }
        }
        return varData_1778;
      }
    };
    varData_1768 = /* @__PURE__ */ new WeakMap();
    varData_1769 = /* @__PURE__ */ new WeakMap();
    var varData_1779;
    var varData_1780;
    var varData_1781;
    var varData_1782;
    var varData_1783;
    var varData_1784;
    var varData_1785;
    var varData_1786;
    var varData_1787;
    var varData_1788;
    var varData_1789;
    var varData_1790;
    var varData_1791;
    var varData_1792;
    var varData_1793;
    var varData_1794;
    var varData_1795;
    var varData_1796;
    var varData_1797;
    var varData_1798;
    var varData_1799;
    var varData_1800;
    var varData_1801 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x3cdce0 = 30, _0x45a89a = false) {
        varData_973(this, varData_1791);
        varData_973(this, varData_1793);
        varData_973(this, varData_1795);
        varData_973(this, varData_1797);
        varData_973(this, varData_1799);
        varData_973(this, varData_1779, void 0);
        varData_973(this, varData_1780, void 0);
        varData_973(this, varData_1781, void 0);
        varData_973(this, varData_1782, void 0);
        varData_973(this, varData_1783, void 0);
        varData_973(this, varData_1784, void 0);
        varData_973(this, varData_1785, void 0);
        varData_973(this, varData_1786, void 0);
        varData_973(this, varData_1787, void 0);
        varData_973(this, varData_1788, void 0);
        varData_973(this, varData_1789, void 0);
        varData_973(this, varData_1790, void 0);
        varData_974(this, varData_1779, param_1);
        varData_974(this, varData_1780, param_4);
        varData_974(this, varData_1781, param_5);
        varData_974(this, varData_1782, param_2);
        varData_974(this, varData_1783, param_3);
        varData_974(this, varData_1784, _0x45a89a);
        varData_974(this, varData_1785, _0x3cdce0);
        varData_974(this, varData_1787, varData_972(this, varData_1780).x / _0x3cdce0);
        varData_974(this, varData_1788, varData_972(this, varData_1780).y / _0x3cdce0);
        varData_974(this, varData_1786, varData_972(this, varData_1787) * varData_972(this, varData_1788));
        varData_974(this, varData_1789, varData_976(this, varData_1791, varData_1792).call(this, varData_972(this, varData_1779), varData_972(this, varData_1785), varData_972(this, varData_1787), varData_972(this, varData_1788), varData_972(this, varData_1784)));
        varData_974(this, varData_1790, varData_976(this, varData_1793, varData_1794).call(this, varData_972(this, varData_1789), varData_972(this, varData_1786)));
      }
      get cells() {
        return varData_972(this, varData_1789);
      }
      get cellSize() {
        return varData_972(this, varData_1785);
      }
      get cellWidth() {
        return varData_972(this, varData_1787);
      }
      get cellHeight() {
        return varData_972(this, varData_1788);
      }
      get gridArea() {
        return varData_972(this, varData_1790);
      }
      get gridCoverage() {
        return varData_972(this, varData_1790) / varData_972(this, varData_1781) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_1802;
        const varData_1803 = param_1.x - varData_972(this, varData_1782).x;
        const varData_1804 = param_1.y - varData_972(this, varData_1782).y;
        const varData_1805 = Math.floor(varData_1803 * varData_972(this, varData_1785) / varData_972(this, varData_1780).x);
        const varData_1806 = Math.floor(varData_1804 * varData_972(this, varData_1785) / varData_972(this, varData_1780).y);
        let varData_1807 = (varData_1802 = varData_972(this, varData_1789)[varData_1805]) == null ? void 0 : varData_1802[varData_1806];
        if (!varData_1807 && varData_972(this, varData_1784)) {
          varData_1807 = varData_976(this, varData_1797, varData_1798).call(this, varData_1805, varData_1806, varData_972(this, varData_1787), varData_972(this, varData_1788), varData_972(this, varData_1779));
          varData_972(this, varData_1789)[varData_1805][varData_1806] = varData_1807;
          if (!varData_1807) {
            return false;
          }
          varData_974(this, varData_1790, varData_972(this, varData_1790) + varData_972(this, varData_1786));
        }
        return varData_1807 ?? false;
      }
    };
    varData_1779 = /* @__PURE__ */ new WeakMap();
    varData_1780 = /* @__PURE__ */ new WeakMap();
    varData_1781 = /* @__PURE__ */ new WeakMap();
    varData_1782 = /* @__PURE__ */ new WeakMap();
    varData_1783 = /* @__PURE__ */ new WeakMap();
    varData_1784 = /* @__PURE__ */ new WeakMap();
    varData_1785 = /* @__PURE__ */ new WeakMap();
    varData_1786 = /* @__PURE__ */ new WeakMap();
    varData_1787 = /* @__PURE__ */ new WeakMap();
    varData_1788 = /* @__PURE__ */ new WeakMap();
    varData_1789 = /* @__PURE__ */ new WeakMap();
    varData_1790 = /* @__PURE__ */ new WeakMap();
    varData_1791 = /* @__PURE__ */ new WeakSet();
    varData_1792 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_1808 = {};
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_1808[loopIdx] = {};
        if (param_5) {
          continue;
        }
        for (let loopIdx_1 = 0; loopIdx_1 < param_2; loopIdx_1++) {
          const varData_1809 = varData_976(this, varData_1797, varData_1798).call(this, loopIdx, loopIdx_1, param_3, param_4, param_1);
          if (!varData_1809) {
            continue;
          }
          varData_1808[loopIdx][loopIdx_1] = true;
        }
      }
      return varData_1808;
    };
    varData_1793 = /* @__PURE__ */ new WeakSet();
    varData_1794 = function(param_1, param_2) {
      let varData_1810 = 0;
      for (const varData_1811 in param_1) {
        for (const varData_1812 in param_1[varData_1811]) {
          varData_1810 += param_2;
        }
      }
      return varData_1810;
    };
    varData_1795 = /* @__PURE__ */ new WeakSet();
    varData_1796 = function(param_1, param_2, param_3, param_4) {
      const varData_1813 = [];
      const varData_1814 = param_1 * param_3 + varData_972(this, varData_1782).x;
      const varData_1815 = param_2 * param_4 + varData_972(this, varData_1782).y;
      varData_1813.push(new varData_1897(varData_1814, varData_1815));
      varData_1813.push(new varData_1897(varData_1814 + param_3, varData_1815));
      varData_1813.push(new varData_1897(varData_1814 + param_3, varData_1815 + param_4));
      varData_1813.push(new varData_1897(varData_1814, varData_1815 + param_4));
      return varData_1813;
    };
    varData_1797 = /* @__PURE__ */ new WeakSet();
    varData_1798 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_1816 = varData_976(this, varData_1795, varData_1796).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_1 = false;
      for (const varData_1817 of varData_1816) {
        const varData_1818 = varData_1929.MathUtils.windingNumber(varData_1817, param_5);
        if (varData_1818 !== 0) {
          isDisabled_1 = true;
          break;
        }
      }
      if (!isDisabled_1) {
        return false;
      }
      for (let loopIdx = 0; loopIdx < varData_1816.length; loopIdx++) {
        const varData_1819 = varData_1816[loopIdx];
        const varData_1820 = varData_1816[(loopIdx + 1) % varData_1816.length];
        for (let loopIdx_1 = 0; loopIdx_1 < param_5.length; loopIdx_1++) {
          const varData_1821 = param_5[loopIdx_1];
          const varData_1822 = param_5[(loopIdx_1 + 1) % param_5.length];
          if (varData_976(this, varData_1799, varData_1800).call(this, varData_1819, varData_1820, varData_1821, varData_1822)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_1799 = /* @__PURE__ */ new WeakSet();
    varData_1800 = function(param_1, param_2, param_3, param_4) {
      const varData_1823 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_1824 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_1825 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_1823 === 0) {
        return varData_1824 === 0 && varData_1825 === 0;
      }
      const varData_1826 = varData_1824 / varData_1823;
      const varData_1827 = varData_1825 / varData_1823;
      return varData_1826 >= 0 && varData_1826 <= 1 && varData_1827 >= 0 && varData_1827 <= 1;
    };
    var varData_1828;
    var varData_1829;
    var varData_1830;
    var varData_1831;
    var varData_1832;
    var varData_1833;
    var varData_1834;
    var varData_1835;
    var varData_1836;
    var varData_1837;
    var varData_1838;
    var varData_1839;
    var varData_1840;
    var varData_1841;
    var varData_1842;
    var varData_1843;
    var varData_1844;
    var varData_1845;
    var varData_1846 = class {
      constructor(param_1, _0x3a4c8e = {}, _0x2eb1b2 = {}) {
        varData_973(this, varData_1836);
        varData_973(this, varData_1838);
        varData_973(this, varData_1840);
        varData_973(this, varData_1842);
        varData_973(this, varData_1844);
        varData_973(this, varData_1828, void 0);
        varData_973(this, varData_1829, void 0);
        varData_973(this, varData_1830, void 0);
        varData_973(this, varData_1831, void 0);
        varData_973(this, varData_1832, void 0);
        varData_973(this, varData_1833, void 0);
        varData_973(this, varData_1834, void 0);
        varData_973(this, varData_1835, void 0);
        varData_974(this, varData_1828, varData_1929.getUUID());
        varData_974(this, varData_1829, param_1);
        varData_974(this, varData_1830, varData_976(this, varData_1836, varData_1837).call(this, param_1));
        varData_974(this, varData_1831, varData_976(this, varData_1838, varData_1839).call(this, param_1));
        varData_974(this, varData_1832, varData_976(this, varData_1844, varData_1845).call(this, param_1));
        varData_974(this, varData_1833, varData_976(this, varData_1842, varData_1843).call(this, varData_972(this, varData_1830), varData_972(this, varData_1831)));
        varData_974(this, varData_1834, varData_976(this, varData_1840, varData_1841).call(this, varData_972(this, varData_1830), varData_972(this, varData_1831)));
        this.options = _0x3a4c8e;
        this.data = _0x2eb1b2;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_974(this, varData_1835, new varData_1801(varData_972(this, varData_1829), varData_972(this, varData_1830), varData_972(this, varData_1831), varData_972(this, varData_1833), varData_972(this, varData_1832), _0x3a4c8e.gridCellSize, _0x3a4c8e.useLazyGrid));
      }
      get id() {
        return varData_972(this, varData_1828);
      }
      get center() {
        return varData_972(this, varData_1834);
      }
      get min() {
        return varData_972(this, varData_1830);
      }
      get max() {
        return varData_972(this, varData_1831);
      }
      get points() {
        return [...varData_972(this, varData_1829)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_972(this, varData_1830).x || param_1.x > varData_972(this, varData_1831).x) {
          return false;
        } else if (param_1.y < varData_972(this, varData_1830).y || param_1.y > varData_972(this, varData_1831).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_1767) {
          const varData_1847 = this.options.minZ ?? -Infinity;
          const varData_1848 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_1847 || param_1.z > varData_1848) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_972(this, varData_1835)) {
          return varData_972(this, varData_1835).isPointInsideGrid(param_1);
        }
        const varData_1849 = varData_1929.MathUtils.windingNumber(param_1, varData_972(this, varData_1829));
        return varData_1849 !== 0;
      }
      addPoint(param_1) {
        varData_972(this, varData_1829).push(param_1);
      }
      removePoint(param_1) {
        const varData_1850 = varData_972(this, varData_1829).findIndex((param_1_1) => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_1850 === -1) {
          return;
        }
        varData_972(this, varData_1829).splice(varData_1850, 1);
      }
      removeLastPoint() {
        varData_972(this, varData_1829).pop();
      }
      recalculate() {
        varData_974(this, varData_1830, varData_976(this, varData_1836, varData_1837).call(this, varData_972(this, varData_1829)));
        varData_974(this, varData_1831, varData_976(this, varData_1838, varData_1839).call(this, varData_972(this, varData_1829)));
        varData_974(this, varData_1832, varData_976(this, varData_1844, varData_1845).call(this, varData_972(this, varData_1829)));
        varData_974(this, varData_1833, varData_976(this, varData_1842, varData_1843).call(this, varData_972(this, varData_1830), varData_972(this, varData_1831)));
        varData_974(this, varData_1834, varData_976(this, varData_1840, varData_1841).call(this, varData_972(this, varData_1830), varData_972(this, varData_1831)));
        if (!this.options.useGrid) {
          return;
        }
        varData_974(this, varData_1835, new varData_1801(varData_972(this, varData_1829), varData_972(this, varData_1830), varData_972(this, varData_1831), varData_972(this, varData_1833), varData_972(this, varData_1832), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_1828 = /* @__PURE__ */ new WeakMap();
    varData_1829 = /* @__PURE__ */ new WeakMap();
    varData_1830 = /* @__PURE__ */ new WeakMap();
    varData_1831 = /* @__PURE__ */ new WeakMap();
    varData_1832 = /* @__PURE__ */ new WeakMap();
    varData_1833 = /* @__PURE__ */ new WeakMap();
    varData_1834 = /* @__PURE__ */ new WeakMap();
    varData_1835 = /* @__PURE__ */ new WeakMap();
    varData_1836 = /* @__PURE__ */ new WeakSet();
    varData_1837 = function(param_1) {
      let varData_1851 = Number.MAX_SAFE_INTEGER;
      let varData_1852 = Number.MAX_SAFE_INTEGER;
      for (const varData_1853 of param_1) {
        varData_1851 = Math.min(varData_1851, varData_1853.x);
        varData_1852 = Math.min(varData_1852, varData_1853.y);
      }
      return new varData_1897(varData_1851, varData_1852);
    };
    varData_1838 = /* @__PURE__ */ new WeakSet();
    varData_1839 = function(param_1) {
      let varData_1854 = Number.MIN_SAFE_INTEGER;
      let varData_1855 = Number.MIN_SAFE_INTEGER;
      for (const varData_1856 of param_1) {
        varData_1854 = Math.max(varData_1854, varData_1856.x);
        varData_1855 = Math.max(varData_1855, varData_1856.y);
      }
      return new varData_1897(varData_1854, varData_1855);
    };
    varData_1840 = /* @__PURE__ */ new WeakSet();
    varData_1841 = function(param_1, param_2) {
      const varData_1857 = param_2.add(param_1);
      return varData_1857.divideScalar(2);
    };
    varData_1842 = /* @__PURE__ */ new WeakSet();
    varData_1843 = function(param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_1844 = /* @__PURE__ */ new WeakSet();
    varData_1845 = function(param_1) {
      let varData_1858 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length - 1; loopIdx < param_1.length; loopIdx_1 = loopIdx++) {
        const varData_1859 = param_1[loopIdx];
        const varData_1860 = param_1[loopIdx_1];
        varData_1858 += varData_1859.x * varData_1860.y;
        varData_1858 -= varData_1859.y * varData_1860.x;
      }
      return Math.abs(varData_1858 / 2);
    };
    var varData_1861;
    var varData_1862;
    var varData_1863 = class _0xc0b79 {
      constructor(param_1, param_2) {
        varData_973(this, varData_1861);
        const varData_1864 = varData_976(this, varData_1861, varData_1862).call(this, param_1, param_2);
        this.x = varData_1864.x;
        this.y = varData_1864.y;
      }
      equals(param_1, param_2) {
        const varData_1865 = varData_976(this, varData_1861, varData_1862).call(this, param_1, param_2);
        return this.x === varData_1865.x && this.y === varData_1865.y;
      }
      add(param_1, param_2, param_3) {
        const varData_1866 = varData_976(this, varData_1861, varData_1862).call(this, param_1, param_2);
        const varData_1867 = this.x + (param_3 ? varData_1866.x * param_3 : varData_1866.x);
        const varData_1868 = this.y + (param_3 ? varData_1866.y * param_3 : varData_1866.y);
        return new _0xc0b79(varData_1867, varData_1868);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1869 = this.x + param_1;
        const varData_1870 = this.y + param_1;
        return new _0xc0b79(varData_1869, varData_1870);
      }
      sub(param_1, param_2, param_3) {
        const varData_1871 = varData_976(this, varData_1861, varData_1862).call(this, param_1, param_2);
        const varData_1872 = this.x - (param_3 ? varData_1871.x * param_3 : varData_1871.x);
        const varData_1873 = this.y - (param_3 ? varData_1871.y * param_3 : varData_1871.y);
        return new _0xc0b79(varData_1872, varData_1873);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1874 = this.x - param_1;
        const varData_1875 = this.y - param_1;
        return new _0xc0b79(varData_1874, varData_1875);
      }
      multiply(param_1, param_2) {
        const varData_1876 = varData_976(this, varData_1861, varData_1862).call(this, param_1, param_2);
        const varData_1877 = this.x * varData_1876.x;
        const varData_1878 = this.y * varData_1876.y;
        return new _0xc0b79(varData_1877, varData_1878);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1879 = this.x * param_1;
        const varData_1880 = this.y * param_1;
        return new _0xc0b79(varData_1879, varData_1880);
      }
      divide(param_1, param_2) {
        const varData_1881 = varData_976(this, varData_1861, varData_1862).call(this, param_1, param_2);
        const varData_1882 = this.x / varData_1881.x;
        const varData_1883 = this.y / varData_1881.y;
        return new _0xc0b79(varData_1882, varData_1883);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1884 = this.x / param_1;
        const varData_1885 = this.y / param_1;
        return new _0xc0b79(varData_1884, varData_1885);
      }
      round() {
        const varData_1886 = Math.round(this.x);
        const varData_1887 = Math.round(this.y);
        return new _0xc0b79(varData_1886, varData_1887);
      }
      floor() {
        const varData_1888 = Math.floor(this.x);
        const varData_1889 = Math.floor(this.y);
        return new _0xc0b79(varData_1888, varData_1889);
      }
      ceil() {
        const varData_1890 = Math.ceil(this.x);
        const varData_1891 = Math.ceil(this.y);
        return new _0xc0b79(varData_1890, varData_1891);
      }
      getCenter(param_1, param_2) {
        const varData_1892 = varData_976(this, varData_1861, varData_1862).call(this, param_1, param_2);
        return new _0xc0b79((this.x + varData_1892.x) / 2, (this.y + varData_1892.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0x27414b, _0x3150e2] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0x27414b !== "number" || typeof _0x3150e2 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x38c753, _0x408496] = [this.x - _0x27414b, this.y - _0x3150e2];
        return Math.sqrt(_0x38c753 * _0x38c753 + _0x408496 * _0x408496);
      }
      toArray(param_1) {
        if (typeof param_1 === "number") {
          return [parseFloat(this.x.toFixed(param_1)), parseFloat(this.y.toFixed(param_1))];
        }
        return [this.x, this.y];
      }
      toJSON(param_1) {
        if (typeof param_1 === "number") {
          return {
            x: parseFloat(this.x.toFixed(param_1)),
            y: parseFloat(this.y.toFixed(param_1))
          };
        }
        var varData_1893 = {
          x: this.x,
          y: this.y
        };
        return varData_1893;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1861 = /* @__PURE__ */ new WeakSet();
    varData_1862 = function(param_1, param_2) {
      let varData_1894 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_1863 || param_1 instanceof varData_1767) {
        varData_1894 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1895 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_1894 = varData_1895;
      } else if (typeof param_1 === "object") {
        varData_1894 = param_1;
      } else {
        var varData_1896 = {
          x: param_1,
          y: param_2
        };
        varData_1894 = varData_1896;
      }
      if (typeof varData_1894.x !== "number" || typeof varData_1894.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1894;
    };
    var varData_1897 = varData_1863;
    var varData_1898 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_1899 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_1900 = ([_0x244da9, _0x100a39, _0x2c4272], [_0x464562, _0x623031, _0x2e4d87]) => {
      const [_0x3181c5, _0x41139d, _0x11d73a] = [_0x244da9 - _0x464562, _0x100a39 - _0x623031, _0x2c4272 - _0x2e4d87];
      return Math.sqrt(_0x3181c5 * _0x3181c5 + _0x41139d * _0x41139d + _0x11d73a * _0x11d73a);
    };
    var varData_1901 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_1902 = (param_1, param_2) => {
      if (param_1 instanceof varData_1897) {
        return param_1;
      } else if (param_1 instanceof varData_1767) {
        return new varData_1897(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_1897(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1897(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1897(param_1, param_2);
    };
    var varData_1903 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_1767) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_1767(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1767(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1767(param_1, param_2, param_3);
    };
    var varData_1904 = (param_1, param_2) => {
      let varData_1905 = 0;
      const varData_1906 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        const varData_1907 = param_2[loopIdx];
        const varData_1908 = param_2[(loopIdx + 1) % param_2.length];
        if (varData_1907.y <= param_1.y) {
          if (varData_1908.y > param_1.y && varData_1906(varData_1907, varData_1908, param_1) > 0) {
            varData_1905++;
          }
        } else if (varData_1908.y <= param_1.y && varData_1906(varData_1907, varData_1908, param_1) < 0) {
          varData_1905--;
        }
      }
      return varData_1905;
    };
    var varData_1909 = {
      clamp: varData_1898,
      getMapRange: varData_1899,
      getDistance: varData_1900,
      getRandomNumber: varData_1901,
      parseVector2: varData_1902,
      parseVector3: varData_1903,
      windingNumber: varData_1904
    };
    var varData_1910 = varData_1909;
    var varData_1911 = {};
    var varData_1912 = {
      ArrUtils: () => varData_1918
    };
    varData_966(varData_1911, varData_1912);
    var varData_1913 = (param_1) => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const varData_1914 = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[varData_1914]] = [param_1[varData_1914], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_1915 = (param_1, param_2) => {
      const varData_1916 = [];
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_1916.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return varData_1916;
    };
    var varData_1917 = {
      shuffleArray: varData_1913,
      getRandomElements: varData_1915
    };
    var varData_1918 = varData_1917;
    function handleAction_142(param_1, param_2) {
      const varData_1919 = "_";
      const varData_1920 = handleAction_143((param_1_1, param_2_1, ..._0x2b3d17) => {
        return param_1(param_1_1, ..._0x2b3d17);
      }, param_2);
      return {
        get: function(..._0x4f4541) {
          return varData_1920.get(varData_1919, ..._0x4f4541);
        },
        reset: function() {
          varData_1920.reset(varData_1919);
        }
      };
    }
    function handleAction_143(param_1, param_2) {
      const varData_1921 = param_2.timeToLive || 6e4;
      const varData_1922 = {};
      const varData_1923 = param_2.immediateResolve || false;
      async function handleAction_144(param_1_1, ..._0xd680b5) {
        let varData_1924 = varData_1922[param_1_1];
        if (!varData_1924) {
          varData_1924 = {
            value: null,
            lastUpdated: 0
          };
          varData_1922[param_1_1] = varData_1924;
        }
        const timestamp = Date.now();
        if (varData_1924.lastUpdated === 0 || timestamp - varData_1924.lastUpdated > varData_1921) {
          const [_0x52093f, _0x5d0dad] = await param_1(varData_1924, param_1_1, ..._0xd680b5);
          if (_0x52093f) {
            varData_1924.lastUpdated = timestamp;
            varData_1924.value = _0x5d0dad;
          }
          return _0x5d0dad;
        }
        if (varData_1923) {
          return Promise.resolve(varData_1924.value);
        } else {
          return await new Promise((param_1_2) => setTimeout(() => param_1_2(varData_1924.value), 0));
        }
      }
      return {
        get: async function(param_1_1, ..._0x2bb28b) {
          return await handleAction_144(param_1_1, ..._0x2bb28b);
        },
        reset: function(param_1_1) {
          const varData_1925 = varData_1922[param_1_1];
          if (varData_1925) {
            varData_1925.lastUpdated = 0;
          }
        },
        clear: function() {
          for (const varData_1926 in varData_1922) {
            delete varData_1922[varData_1926];
          }
        }
      };
    }
    function handleAction_145() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_143();
      } else {
        return new varData_716(4).toString();
      }
    }
    function handleAction_146(param_1) {
      return varData_170(param_1, varData_170.URL);
    }
    function handleAction_147(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_1927 = Date.now() - timestamp > param_2;
          if (param_1() || varData_1927) {
            clearInterval(intervalId);
            return param_1_1(varData_1927);
          }
        }, 1);
      });
    }
    function handleAction_148(param_1) {
      return new Promise((param_1_1) => setTimeout(() => param_1_1(), param_1));
    }
    function handleAction_149() {
      return handleAction_148(0);
    }
    var varData_1928 = {
      cache: handleAction_142,
      cacheableMap: handleAction_143,
      waitForCondition: handleAction_147,
      getUUID: handleAction_145,
      getStringHash: handleAction_146,
      wait: handleAction_148,
      waitForNextFrame: handleAction_149,
      deflate: varData_706,
      inflate: varData_710,
      ...varData_1751,
      ...varData_1911
    };
    var varData_1929 = varData_1928;
    var varData_1930 = ((param_1) => {
      param_1[param_1.hat = 0] = "hat";
      param_1[param_1.mask = 1] = "mask";
      param_1[param_1.glasses = 2] = "glasses";
      param_1[param_1.armor = 3] = "armor";
      param_1[param_1.backpack = 4] = "backpack";
      param_1[param_1.idcard = 5] = "idcard";
      param_1[param_1.mobilephone = 6] = "mobilephone";
      param_1[param_1.tablet = 7] = "tablet";
      param_1[param_1.keyring = 8] = "keyring";
      param_1[param_1.wallet = 9] = "wallet";
      return param_1;
    })(varData_1930 || {});
    var varData_1931 = {};
    var varData_1932 = (param_1, param_2) => "__cfx_export_" + param_1 + "_" + param_2;
    var varData_1933 = new Proxy((param_1, param_2) => {
      const varData_1934 = (param_1_1, ..._0x2b6a37) => {
        const varData_1935 = param_2(..._0x2b6a37);
        if (varData_1935 instanceof Promise) {
          varData_1935.then((param_1_2) => param_1_1(param_1_2));
        } else {
          param_1_1(varData_1935);
        }
      };
      const resourceName_12 = GetCurrentResourceName();
      if (resourceName_12 == void 0) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      }
      on(varData_1932(resourceName_12, param_1), (param_1_1) => {
        param_1_1(varData_1934);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1931[param_2] == void 0) {
          varData_1931[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1936 = param_2_1 + "_async";
            return (..._0x5b752d) => {
              return new Promise(async (param_1_2, param_2_2) => {
                const varData_1937 = await varData_1929.waitForCondition(() => GetResourceState(param_2) === "started", 6e4);
                if (varData_1937) {
                  return param_2_2("Resource " + param_2 + " is not running");
                }
                if (varData_1931[param_2][varData_1936] === void 0) {
                  emit(varData_1932(param_2, param_2_1), (param_1_3) => {
                    varData_1931[param_2][varData_1936] = param_1_3;
                  });
                  const varData_1938 = await varData_1929.waitForCondition(() => varData_1931[param_2][varData_1936] !== void 0, 1e3);
                  if (varData_1938) {
                    return param_2_2("Failed to get export " + param_2_1 + " from resource " + param_2);
                  }
                }
                try {
                  varData_1931[param_2][varData_1936](param_1_2, ..._0x5b752d);
                } catch (err) {
                  param_2_2(err);
                }
              });
            };
          }
        });
      }
    });
    var varData_1939 = new Proxy((param_1, param_2) => {
      const resourceName_12 = GetCurrentResourceName();
      if (resourceName_12 == void 0) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      } else if (typeof param_2 !== "function") {
        throw new Error("Callback is not a function");
      } else if (typeof param_1 !== "string") {
        throw new Error("Export name must be a string");
      }
      on(varData_1932(resourceName_12, param_1), (param_1_1) => {
        param_1_1(param_2);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1931[param_2] == void 0) {
          varData_1931[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1940 = param_2_1 + "_sync";
            if (varData_1931[param_2][varData_1940] === void 0) {
              emit(varData_1932(param_2, param_2_1), (param_1_2) => {
                varData_1931[param_2][varData_1940] = param_1_2;
              });
              if (varData_1931[param_2][varData_1940] === void 0) {
                if (GetResourceState(param_2) !== "started") {
                  throw new Error("Resource " + param_2 + " is not running");
                } else {
                  throw new Error("No such export " + param_2_1 + " in resource " + param_2);
                }
              }
            }
            return (..._0x28757c) => {
              try {
                return varData_1931[param_2][varData_1940](..._0x28757c);
              } catch (err) {
                throw new Error("An error occurred while calling export " + param_2_1 + " of resource " + param_2 + " - see above for details");
              }
            };
          }
        });
      }
    });
    on("onResourceStop", (param_1) => varData_1931[param_1] = void 0);
    var varData_1941 = {
      Async: varData_1933,
      Sync: varData_1939
    };
    var varData_1942 = varData_1941;
    var dataMap_4 = /* @__PURE__ */ new Map();
    var dataSet = /* @__PURE__ */ new Set();
    var resourceName_1 = GetCurrentResourceName();
    on("np-config:configLoaded", (param_1, param_2) => {
      dataSet.add(param_1);
      if (!dataMap_4.has(param_1)) {
        return;
      }
      dataMap_4.set(param_1, param_2);
    });
    function handleAction_150(param_1) {
      if (param_1 instanceof Array) {
        return param_1.every((param_1_1) => dataSet.has(param_1_1));
      }
      return dataSet.has(param_1);
    }
    function handleAction_151(param_1, param_2) {
      if (!dataMap_4.has(param_1)) {
        const varData_1943 = varData_1942.Sync.config.GetModuleConfig(param_1);
        if (varData_1943 === void 0) {
          return;
        }
        dataMap_4.set(param_1, varData_1943);
        if (!dataSet.has(param_1)) {
          dataSet.add(param_1);
        }
      }
      const varData_1944 = dataMap_4.get(param_1);
      if (param_2) {
        if (varData_1944 == null) {
          return void 0;
        } else {
          return varData_1944[param_2];
        }
      } else {
        return varData_1944;
      }
    }
    function handleAction_152(param_1) {
      return handleAction_151(resourceName_1, param_1);
    }
    function handleAction_153() {
      return varData_1942.Sync.config.IsConfigReady();
    }
    var varData_1945 = {
      IsConfigLoaded: handleAction_150,
      GetModuleConfig: handleAction_151,
      GetResourceConfig: handleAction_152,
      IsConfigReady: handleAction_153
    };
    var varData_1946 = varData_1945;
    var varData_1947 = varData_970(varData_1749());
    var varData_1948;
    var varData_1949;
    var varData_1950;
    var varData_1951;
    var varData_1952;
    var varData_1953;
    var varData_1954;
    var varData_1955;
    var varData_1956;
    var varData_1957;
    var varData_1958;
    var varData_1959;
    var varData_1960;
    var varData_1961;
    var varData_1962;
    var varData_1963;
    var varData_1964;
    var varData_1965;
    var varData_1966;
    var varData_1967;
    var varData_1968 = class {
      constructor(param_1, param_2) {
        varData_973(this, varData_1952);
        varData_973(this, varData_1954);
        varData_973(this, varData_1956);
        varData_973(this, varData_1958);
        varData_973(this, varData_1960);
        varData_973(this, varData_1962);
        varData_973(this, varData_1964);
        varData_973(this, varData_1966);
        varData_973(this, varData_1948, void 0);
        varData_973(this, varData_1949, void 0);
        varData_973(this, varData_1950, void 0);
        varData_973(this, varData_1951, {});
        const varData_1969 = varData_976(this, varData_1960, varData_1961).call(this, param_1);
        const varData_1970 = varData_976(this, varData_1964, varData_1965).call(this, varData_1969, param_2);
        const [_0x5e1f76, _0x277577, _0x332a5b] = varData_1970.split(":").map((param_1_1) => param_1_1.length > 0 ? param_1_1 : void 0);
        varData_974(this, varData_1948, _0x5e1f76);
        varData_974(this, varData_1949, _0x277577);
        varData_974(this, varData_1950, _0x332a5b);
      }
      hashString(param_1) {
        return param_1;
        var varData_1971;
        const varData_1972 = varData_972(this, varData_1952, varData_1953);
        const varData_1973 = (varData_1971 = varData_972(this, varData_1951)[varData_1972]) == null ? void 0 : varData_1971[param_1];
        if (varData_1973) {
          return varData_1973;
        }
        if (!varData_972(this, varData_1951)[varData_1972]) {
          varData_972(this, varData_1951)[varData_1972] = {};
        }
        const varData_1974 = varData_976(this, varData_1958, varData_1959).call(this, (0, varData_1947.HmacMD5)(param_1, varData_1972).toString());
        varData_972(this, varData_1951)[varData_1972][param_1] = varData_1974;
        if (IsDuplicityVersion()) {
          console.log("[SDK] Hash Debug | Event: " + param_1 + " | Hash: " + varData_1974);
        }
        return varData_1974;
      }
      encode(param_1) {
        return JSON.stringify(param_1);
        let varData_1975;
        const varData_1976 = varData_972(this, varData_1956, varData_1957);
        try {
          varData_1975 = varData_976(this, varData_1962, varData_1963).call(this, JSON.stringify(param_1), varData_1976);
        } catch (err) {
          console.error("Failed to encode payload");
        }
        return varData_1975;
      }
      decode(param_1) {
        try {
          if (typeof param_1 === "string") {
            return JSON.parse(param_1);
          } else {
            return param_1;
          }
        } catch (_err) {
          return param_1;
        }
        let varData_1977;
        const varData_1978 = varData_972(this, varData_1954, varData_1955);
        try {
          varData_1977 = JSON.parse(varData_976(this, varData_1964, varData_1965).call(this, param_1, varData_1978));
        } catch (err) {
          console.error("Failed to decode payload");
        }
        return varData_1977;
      }
    };
    varData_1948 = /* @__PURE__ */ new WeakMap();
    varData_1949 = /* @__PURE__ */ new WeakMap();
    varData_1950 = /* @__PURE__ */ new WeakMap();
    varData_1951 = /* @__PURE__ */ new WeakMap();
    varData_1952 = /* @__PURE__ */ new WeakSet();
    varData_1953 = function() {
      return varData_972(this, varData_1948) ?? varData_976(this, varData_1966, varData_1967).call(this);
    };
    varData_1954 = /* @__PURE__ */ new WeakSet();
    varData_1955 = function() {
      return varData_972(this, varData_1949) ?? varData_976(this, varData_1966, varData_1967).call(this);
    };
    varData_1956 = /* @__PURE__ */ new WeakSet();
    varData_1957 = function() {
      return varData_972(this, varData_1950) ?? varData_976(this, varData_1966, varData_1967).call(this);
    };
    varData_1958 = /* @__PURE__ */ new WeakSet();
    varData_1959 = function(param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1947.enc.Base64.stringify(varData_1947.enc.Utf8.parse(param_1));
    };
    varData_1960 = /* @__PURE__ */ new WeakSet();
    varData_1961 = function(param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1947.enc.Utf8.stringify(varData_1947.enc.Base64.parse(param_1));
    };
    varData_1962 = /* @__PURE__ */ new WeakSet();
    varData_1963 = function(param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1947.AES.encrypt(param_1, param_2).toString();
    };
    varData_1964 = /* @__PURE__ */ new WeakSet();
    varData_1965 = function(param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1947.AES.decrypt(param_1, param_2).toString(varData_1947.enc.Utf8);
    };
    varData_1966 = /* @__PURE__ */ new WeakSet();
    varData_1967 = function(_0x26593a = 128) {
      return varData_1947.lib.WordArray.random(_0x26593a / 8).toString();
    };
    var varData_1979;
    var varData_1980 = class {
      constructor() {
        varData_973(this, varData_1979, void 0);
        const resourceName_22 = GetCurrentResourceName();
        const varData_1981 = varData_1929.getStringHash("__npx_sdk:" + resourceName_22 + ":token");
        const varData_1982 = GetConvar(varData_1981, "");
        varData_974(this, varData_1979, new varData_1968(varData_1982, "0xD994D26"));
      }
      on(param_1, param_2) {
        const varData_1983 = varData_972(this, varData_1979).hashString(param_1);
        return on(varData_1983, param_2);
      }
      onNet(param_1, param_2) {
        const varData_1984 = varData_972(this, varData_1979).hashString(param_1);
        onNet(varData_1984, param_2);
        const varData_1985 = varData_972(this, varData_1979).hashString(param_1 + "-c");
        onNet(varData_1985, (param_1_1) => {
          const varData_1986 = varData_1929.inflate(new Uint8Array(param_1_1));
          const varData_1987 = msgpack_unpack(varData_1986);
          return param_2(...varData_1987);
        });
      }
      emit(param_1, ..._0x11f904) {
        const varData_1988 = varData_972(this, varData_1979).hashString(param_1);
        return emit(varData_1988, ..._0x11f904);
      }
      emitNet(param_1, ..._0x5bc2c8) {
        let varData_1989 = msgpack_pack(_0x5bc2c8);
        let varData_1990 = varData_1989.length;
        const varData_1991 = varData_972(this, varData_1979).hashString(param_1);
        if (varData_1990 < 16e3) {
          TriggerServerEventInternal(varData_1991, varData_1989, varData_1989.length);
        } else {
          TriggerLatentServerEventInternal(varData_1991, varData_1989, varData_1989.length, 1024e3);
        }
      }
    };
    varData_1979 = /* @__PURE__ */ new WeakMap();
    var varData_1992 = new varData_1980();
    var varData_1993 = {
      warning: 1,
      log: 2,
      error: 3,
      debug: 4
    };
    var varData_1994 = GetConvar(GetCurrentResourceName() + "_logLevel", "");
    var varData_1995 = GetConvar("sv_loglevel", "warning");
    (() => {
      varData_1995 = (varData_1994 == null ? void 0 : varData_1994.length) > 0 ? varData_1994 : varData_1995;
      if (!varData_1993[varData_1995]) {
        throw new Error("Invalid log level: " + varData_1995);
      }
    })();
    var varData_1996 = () => varData_1993[varData_1995] >= varData_1993.warning;
    var varData_1997 = () => varData_1993[varData_1995] >= varData_1993.log;
    var varData_1998 = () => varData_1993[varData_1995] >= varData_1993.error;
    var varData_1999 = () => varData_1995 === "debug";
    var varData_2000 = {
      warning: (param_1, ..._0x581493) => {
        if (!varData_1996()) {
          return;
        }
        console.log("^3[WARNING] ^7" + param_1, ..._0x581493, "^0");
      },
      log: (param_1, ..._0x20565a) => {
        if (!varData_1997()) {
          return;
        }
        console.log("^5[nopixel] ^7" + param_1, ..._0x20565a, "^0");
      },
      debug: (param_1, ..._0x1e299e) => {
        if (!varData_1999()) {
          return;
        }
        console.log("^2[D] " + param_1, ..._0x1e299e, "^0");
      },
      error: (param_1, ..._0x4d2d8e) => {
        if (!varData_1998()) {
          return;
        }
        console.log("^1[ERROR] " + param_1, ..._0x4d2d8e, "^0");
      }
    };
    var varData_2001;
    var varData_2002;
    var varData_2003;
    var varData_2004;
    var varData_2005;
    var varData_2006;
    var varData_2007;
    var varData_2008;
    var varData_2009;
    var varData_2010;
    var varData_2011;
    var varData_2012;
    var varData_2013 = class {
      constructor() {
        varData_973(this, varData_2007);
        varData_973(this, varData_2009);
        varData_973(this, varData_2011);
        varData_973(this, varData_2001, void 0);
        varData_973(this, varData_2002, void 0);
        varData_973(this, varData_2003, void 0);
        varData_973(this, varData_2004, void 0);
        varData_973(this, varData_2005, void 0);
        varData_973(this, varData_2006, void 0);
        varData_974(this, varData_2001, false);
        varData_974(this, varData_2002, /* @__PURE__ */ new Map());
        varData_974(this, varData_2003, /* @__PURE__ */ new Set());
        varData_974(this, varData_2004, GetGameTimer());
        varData_974(this, varData_2005, GetCurrentResourceName());
        const varData_2014 = varData_1929.getStringHash("__npx_sdk:" + varData_972(this, varData_2005) + ":token");
        const varData_2015 = GetConvar(varData_2014, "");
        varData_974(this, varData_2006, new varData_1968(varData_2015, "0xD994D26"));
        varData_976(this, varData_2011, varData_2012).call(this);
      }
      register(param_1, param_2) {
        if (varData_972(this, varData_2003).has(param_1)) {
          return varData_2000.error("[RPC] Handler already registered | " + param_1);
        }
        varData_972(this, varData_2003).add(param_1);
        varData_976(this, varData_2007, varData_2008).call(this, "__rpc_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_2016;
          let varData_2017;
          const varData_2018 = GetInvokingResource();
          if (varData_2018) {
            return;
          }
          const varData_2019 = varData_972(this, varData_2006).decode(param_1_1);
          if (!(varData_2019 == null ? void 0 : varData_2019.id) || !(varData_2019 == null ? void 0 : varData_2019.origin)) {
            return varData_2000.error("[RPC] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_2016 = await param_2(...param_2_1);
            varData_2017 = true;
          } catch (err) {
            varData_2016 = err.message;
            varData_2017 = false;
          }
          varData_976(this, varData_2009, varData_2010).call(this, "__rpc_res:" + varData_2019.origin, varData_2019.id, [varData_2017, varData_2016]);
        });
      }
      execute(param_1, ..._0x11de30) {
        const varData_2020 = {
          id: ++varData_975(this, varData_2004)._,
          origin: varData_972(this, varData_2005)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let timerId = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 6e4);
          var varData_2021 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: timerId
          };
          varData_972(this, varData_2002).set(varData_2020.id, varData_2021);
        });
        promise.finally(() => varData_972(this, varData_2002).delete(varData_2020.id));
        varData_976(this, varData_2009, varData_2010).call(this, "__rpc_req:" + param_1, varData_972(this, varData_2006).encode(varData_2020), _0x11de30);
        return promise;
      }
      executeCustom(param_1, param_2, ..._0x383d00) {
        const varData_2022 = {
          id: ++varData_975(this, varData_2004)._,
          origin: varData_972(this, varData_2005)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let timerId = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 6e4);
          var varData_2023 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: timerId
          };
          varData_972(this, varData_2002).set(varData_2022.id, varData_2023);
        });
        promise.finally(() => varData_972(this, varData_2002).delete(varData_2022.id));
        varData_976(this, varData_2009, varData_2010).call(this, "__rpc_req:" + param_1, varData_972(this, varData_2006).encode(varData_2022), _0x383d00);
        return promise;
      }
    };
    varData_2001 = /* @__PURE__ */ new WeakMap();
    varData_2002 = /* @__PURE__ */ new WeakMap();
    varData_2003 = /* @__PURE__ */ new WeakMap();
    varData_2004 = /* @__PURE__ */ new WeakMap();
    varData_2005 = /* @__PURE__ */ new WeakMap();
    varData_2006 = /* @__PURE__ */ new WeakMap();
    varData_2007 = /* @__PURE__ */ new WeakSet();
    varData_2008 = function(param_1, param_2) {
      const varData_2024 = varData_972(this, varData_2006).hashString(param_1);
      onNet(varData_2024, param_2);
      const varData_2025 = varData_972(this, varData_2006).hashString(param_1 + "-c");
      onNet(varData_2025, (param_1_1) => {
        const varData_2026 = varData_1929.inflate(new Uint8Array(param_1_1));
        const varData_2027 = msgpack_unpack(varData_2026);
        return param_2(...varData_2027);
      });
    };
    varData_2009 = /* @__PURE__ */ new WeakSet();
    varData_2010 = function(param_1, ..._0x324b82) {
      let varData_2028 = msgpack_pack(_0x324b82);
      let varData_2029 = varData_2028.length;
      const varData_2030 = varData_972(this, varData_2006).hashString(param_1);
      if (varData_2029 < 16e3) {
        TriggerServerEventInternal(varData_2030, varData_2028, varData_2028.length);
      } else {
        TriggerLatentServerEventInternal(varData_2030, varData_2028, varData_2028.length, 1024e3);
      }
    };
    varData_2011 = /* @__PURE__ */ new WeakSet();
    varData_2012 = function() {
      if (varData_972(this, varData_2001)) {
        return varData_2000.error("SDK RPC handlers already initialized");
      }
      varData_976(this, varData_2007, varData_2008).call(this, "__rpc_res:" + varData_972(this, varData_2005), (param_1, [_0x45c87a, _0x32375f]) => {
        const varData_2031 = varData_972(this, varData_2002).get(param_1);
        if (!varData_2031) {
          return;
        }
        clearTimeout(varData_2031.timeout);
        if (_0x45c87a) {
          varData_2031.resolve(_0x32375f);
        } else {
          varData_2031.reject(new Error(_0x32375f));
        }
      });
      varData_974(this, varData_2001, true);
      varData_2000.debug("SDK RPC handlers initialized");
    };
    var varData_2032 = new varData_2013();
    var varData_2033 = varData_970(varData_1749());
    var varData_2034 = (_0x10772f = 128) => {
      return varData_2033.lib.WordArray.random(_0x10772f / 8).toString();
    };
    var varData_2035 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_2033.AES.encrypt(param_1, param_2).toString();
    };
    var varData_2036 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_2033.AES.decrypt(param_1, param_2).toString(varData_2033.enc.Utf8);
    };
    var varData_2037 = (param_1) => {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_2033.enc.Base64.stringify(varData_2033.enc.Utf8.parse(param_1));
    };
    var varData_2038 = (param_1, param_2) => {
      return varData_2037((0, varData_2033.HmacMD5)(param_1, param_2).toString());
    };
    var varData_2039 = {};
    var varData_2040 = (param_1, _0xb8f7f9 = varData_2034()) => {
      if (varData_2039[param_1] === void 0) {
        varData_2039[param_1] = varData_2038(param_1, _0xb8f7f9);
      }
      return varData_2039[param_1];
    };
    var varData_2041 = (param_1, _0x8ed277 = varData_2034()) => {
      try {
        return varData_2035(JSON.stringify(param_1), _0x8ed277);
      } catch (err) {
        console.error("Failed to encode payload");
      }
    };
    var varData_2042 = (param_1, _0x260eae = varData_2034()) => {
      try {
        return JSON.parse(varData_2036(param_1, _0x260eae));
      } catch (err) {
        console.error("Failed to decode payload");
      }
    };
    var varData_2043;
    var varData_2044;
    var varData_2045;
    var varData_2046;
    var varData_2047;
    var varData_2048;
    var varData_2049;
    var varData_2050;
    var varData_2051;
    var varData_2052;
    var varData_2053;
    var varData_2054;
    var varData_2055;
    var varData_2056;
    var varData_2057;
    var varData_2058;
    var varData_2059;
    var varData_2060;
    var varData_2061 = class {
      constructor() {
        varData_973(this, varData_2051);
        varData_973(this, varData_2053);
        varData_973(this, varData_2055);
        varData_973(this, varData_2057);
        varData_973(this, varData_2059);
        varData_973(this, varData_2043, void 0);
        varData_973(this, varData_2044, void 0);
        varData_973(this, varData_2045, void 0);
        varData_973(this, varData_2046, void 0);
        varData_973(this, varData_2047, void 0);
        varData_973(this, varData_2048, void 0);
        varData_973(this, varData_2049, void 0);
        varData_973(this, varData_2050, void 0);
        varData_974(this, varData_2043, GetCurrentResourceName());
        varData_974(this, varData_2044, varData_2034(64));
        varData_974(this, varData_2045, varData_2034(64));
        varData_974(this, varData_2046, varData_2034(64));
        varData_974(this, varData_2047, false);
        varData_974(this, varData_2048, 0);
        varData_974(this, varData_2049, []);
        varData_974(this, varData_2050, /* @__PURE__ */ new Map());
        varData_976(this, varData_2051, varData_2052).call(this, "__npx_sdk:init", varData_976(this, varData_2059, varData_2060).bind(this));
      }
      async register(param_1, param_2) {
        varData_976(this, varData_2053, varData_2054).call(this, "__nui_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_2062;
          let varData_2063;
          const varData_2064 = varData_2042(param_1_1, varData_972(this, varData_2045));
          if (!(varData_2064 == null ? void 0 : varData_2064.id) || !(varData_2064 == null ? void 0 : varData_2064.resource)) {
            return varData_2000.error("[NUI] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_2062 = await param_2(...param_2_1);
            varData_2063 = true;
          } catch (err) {
            varData_2062 = err.message;
            varData_2063 = false;
          }
          varData_976(this, varData_2057, varData_2058).call(this, "__nui_res:" + varData_2064.resource, varData_2064.id, [varData_2063, varData_2062]);
        });
      }
      remove(param_1) {
        const varData_2065 = varData_2040("__nui_req:" + param_1, varData_972(this, varData_2044));
        UnregisterRawNuiCallback(varData_2065);
      }
      async execute(param_1, ..._0x34f60e) {
        const varData_2066 = {
          id: ++varData_975(this, varData_2048)._,
          resource: varData_972(this, varData_2043)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let varData_2067;
          if (varData_972(this, varData_2047)) {
            varData_2067 = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 6e4);
          } else {
            varData_2067 = 0;
          }
          var varData_2068 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: varData_2067
          };
          varData_972(this, varData_2050).set(varData_2066.id, varData_2068);
        });
        promise.finally(() => varData_972(this, varData_2050).delete(varData_2066.id));
        if (!varData_972(this, varData_2047)) {
          var varData_2069 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_2066,
            args: _0x34f60e
          };
          varData_972(this, varData_2049).push(varData_2069);
        } else {
          varData_976(this, varData_2057, varData_2058).call(this, "__nui_req:" + param_1, varData_2041(varData_2066, varData_972(this, varData_2046)), _0x34f60e);
        }
        return promise;
      }
      async executeCustom(param_1, param_2, ..._0x11f9cf) {
        const varData_2070 = {
          id: ++varData_975(this, varData_2048)._,
          resource: varData_972(this, varData_2043)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let varData_2071;
          if (varData_972(this, varData_2047)) {
            varData_2071 = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 6e4);
          } else {
            varData_2071 = 0;
          }
          var varData_2072 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: varData_2071
          };
          varData_972(this, varData_2050).set(varData_2070.id, varData_2072);
        });
        promise.finally(() => varData_972(this, varData_2050).delete(varData_2070.id));
        if (!varData_972(this, varData_2047)) {
          var varData_2073 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_2070,
            args: _0x11f9cf
          };
          varData_972(this, varData_2049).push(varData_2073);
        } else {
          varData_976(this, varData_2057, varData_2058).call(this, "__nui_req:" + param_1, varData_2041(varData_2070, varData_972(this, varData_2046)), _0x11f9cf);
        }
        return promise;
      }
    };
    varData_2043 = /* @__PURE__ */ new WeakMap();
    varData_2044 = /* @__PURE__ */ new WeakMap();
    varData_2045 = /* @__PURE__ */ new WeakMap();
    varData_2046 = /* @__PURE__ */ new WeakMap();
    varData_2047 = /* @__PURE__ */ new WeakMap();
    varData_2048 = /* @__PURE__ */ new WeakMap();
    varData_2049 = /* @__PURE__ */ new WeakMap();
    varData_2050 = /* @__PURE__ */ new WeakMap();
    varData_2051 = /* @__PURE__ */ new WeakSet();
    varData_2052 = function(param_1, param_2) {
      RegisterNuiCallback(param_1, ({
        args: _0x1170a6
      }, param_2_1) => {
        param_2_1(true);
        return param_2(..._0x1170a6);
      });
    };
    varData_2053 = /* @__PURE__ */ new WeakSet();
    varData_2054 = function(param_1, param_2) {
      if (varData_972(this, varData_2047)) {
        const varData_2074 = varData_2040(param_1, varData_972(this, varData_2044));
        return varData_976(this, varData_2051, varData_2052).call(this, varData_2074, param_2);
      }
      var varData_2075 = {
        type: "on",
        event: param_1,
        callback: param_2
      };
      varData_972(this, varData_2049).push(varData_2075);
    };
    varData_2055 = /* @__PURE__ */ new WeakSet();
    varData_2056 = function(param_1, ..._0x14d978) {
      var varData_2076 = {
        event: param_1,
        args: _0x14d978
      };
      SendNuiMessage(JSON.stringify(varData_2076, null));
    };
    varData_2057 = /* @__PURE__ */ new WeakSet();
    varData_2058 = function(param_1, ..._0x4aead8) {
      if (varData_972(this, varData_2047)) {
        const varData_2077 = varData_2040(param_1, varData_972(this, varData_2044));
        return varData_976(this, varData_2055, varData_2056).call(this, varData_2077, ..._0x4aead8);
      }
      var varData_2078 = {
        type: "emit",
        event: param_1,
        args: _0x4aead8
      };
      varData_972(this, varData_2049).push(varData_2078);
    };
    varData_2059 = /* @__PURE__ */ new WeakSet();
    varData_2060 = async function() {
      varData_974(this, varData_2047, true);
      varData_976(this, varData_2053, varData_2054).call(this, "__nui_res:" + varData_972(this, varData_2043), (param_1, [_0x5450ea, _0x3b94a9]) => {
        const varData_2079 = varData_972(this, varData_2050).get(param_1);
        if (!varData_2079) {
          return varData_2000.error("[NUI] Invalid response received");
        }
        clearTimeout(varData_2079.timeout);
        if (_0x5450ea) {
          varData_2079.resolve(_0x3b94a9);
        } else {
          varData_2079.reject(_0x3b94a9);
        }
      });
      varData_976(this, varData_2055, varData_2056).call(this, "__npx_sdk:ready", varData_2037(varData_972(this, varData_2044) + ":" + varData_972(this, varData_2045) + ":" + varData_972(this, varData_2046)));
      varData_2000.debug("[NUI] SDK initialized");
      for (const varData_2080 of varData_972(this, varData_2049)) {
        if (varData_2080.type === "on") {
          varData_976(this, varData_2053, varData_2054).call(this, varData_2080.event, varData_2080.callback);
        } else if (varData_2080.type === "emit") {
          setTimeout(() => varData_976(this, varData_2057, varData_2058).call(this, varData_2080.event, ...varData_2080.args), 1e3);
        } else if (varData_2080.type === "execute") {
          const varData_2081 = varData_972(this, varData_2050).get(varData_2080.metadata.id);
          if (!varData_2081) {
            varData_2000.error("[RPC] " + varData_2080.event + " - Failed to execute queued RPC call");
            continue;
          }
          varData_2081.timeout = setTimeout(() => varData_2081.reject(new Error("RPC timed out | " + varData_2080.event)), 6e4);
          setTimeout(() => varData_976(this, varData_2057, varData_2058).call(this, varData_2080.event, varData_2041(varData_2080.metadata, varData_972(this, varData_2046)), varData_2080.args), 1e3);
        }
      }
    };
    var varData_2082;
    var varData_2083;
    var varData_2084;
    var varData_2085 = class {
      constructor(param_1) {
        varData_973(this, varData_2082, void 0);
        varData_973(this, varData_2083, void 0);
        varData_973(this, varData_2084, /* @__PURE__ */ new Map());
        varData_974(this, varData_2082, param_1);
        varData_974(this, varData_2083, false);
        const resourceName_22 = GetCurrentResourceName();
        on("onResourceStop", (param_1_1) => {
          if (param_1_1 === resourceName_22) {
            for (const [_0x132fdc, _0x35a25b] of varData_972(this, varData_2084).entries()) {
              varData_1942.Sync[varData_972(this, varData_2082)].removeNuiEvent(_0x132fdc);
            }
          }
        });
        on("onResourceStart", async (param_1_1) => {
          if (param_1_1 === varData_972(this, varData_2082)) {
            await varData_1929.waitForCondition(() => GetResourceState(varData_972(this, varData_2082)) === "started", 1e4);
            if (varData_972(this, varData_2083)) {
              for (const [_0x2a2840, _0x159a4b] of varData_972(this, varData_2084).entries()) {
                varData_1942.Sync[varData_972(this, varData_2082)].removeNuiEvent(_0x2a2840);
                this.register(_0x2a2840, _0x159a4b);
              }
            }
            varData_974(this, varData_2083, true);
          }
          if (param_1_1 === resourceName_22) {
            await varData_1929.waitForCondition(() => GetResourceState(varData_972(this, varData_2082)) === "started", 1e4);
            varData_974(this, varData_2083, true);
          }
        });
      }
      async execute(param_1, ..._0x11c31f) {
        return await varData_1942.Async[varData_972(this, varData_2082)].sendNuiEvent(param_1, _0x11c31f);
      }
      async register(param_1, param_2) {
        await varData_1929.waitForCondition(() => varData_972(this, varData_2083), 1e4);
        const varData_2086 = varData_1942.Sync[varData_972(this, varData_2082)].registerNuiEvent(param_1, param_2);
        if (varData_2086) {
          varData_972(this, varData_2084).set(param_1, param_2);
        }
      }
    };
    varData_2082 = /* @__PURE__ */ new WeakMap();
    varData_2083 = /* @__PURE__ */ new WeakMap();
    varData_2084 = /* @__PURE__ */ new WeakMap();
    var varData_2087 = class {
      constructor() {
        const varData_2088 = async (param_1, param_2) => {
          return await varData_2093.execute(param_1, ...param_2);
        };
        varData_1942.Async("sendNuiEvent", varData_2088);
        const varData_2089 = (param_1, param_2) => {
          varData_2093.register(param_1, param_2);
          return true;
        };
        varData_1942.Sync("registerNuiEvent", varData_2089);
        const varData_2090 = (param_1) => {
          varData_2093.remove(param_1);
        };
        varData_1942.Sync("removeNuiEvent", varData_2090);
      }
    };
    var varData_2091 = null;
    var varData_2092 = null;
    var varData_2093 = new varData_2061();
    var varData_2094;
    var varData_2095;
    var varData_2096;
    var varData_2097 = class {
      constructor() {
        varData_973(this, varData_2094, void 0);
        varData_973(this, varData_2095, void 0);
        varData_973(this, varData_2096, void 0);
        varData_974(this, varData_2096, false);
        varData_2093.register("__npx_sdk:sockets:init", async () => {
          varData_2000.debug("Sockets", "Initializing sockets...");
          if (varData_972(this, varData_2096)) {
            return {
              url: varData_972(this, varData_2094),
              API_KEY: varData_972(this, varData_2095)
            };
          }
          const varData_2098 = await new Promise((param_1) => {
            emit("__npx_core:sockets:init", param_1);
          });
          if (!(varData_2098 == null ? void 0 : varData_2098.API_URL) || !(varData_2098 == null ? void 0 : varData_2098.API_KEY)) {
            return;
          }
          varData_974(this, varData_2094, varData_2098.API_URL);
          varData_974(this, varData_2095, varData_2098.API_KEY);
          varData_974(this, varData_2096, true);
          varData_2000.debug("Sockets", "Sockets initialized.");
          return varData_2098;
        });
      }
      register(param_1, param_2) {
        varData_2093.execute("__npx_sdk:sockets:register", param_1);
        varData_2093.register("__npx_sdk:sockets:pipe:" + param_1, async (param_1_1) => {
          return param_2(param_1_1);
        });
      }
      async execute(param_1, param_2) {
        return varData_2093.execute("__npx_sdk:sockets:execute", param_1, param_2);
      }
    };
    varData_2094 = /* @__PURE__ */ new WeakMap();
    varData_2095 = /* @__PURE__ */ new WeakMap();
    varData_2096 = /* @__PURE__ */ new WeakMap();
    var varData_2099 = new varData_2097();
    var varData_2100 = {
      HasItem: async (param_1, param_2) => {
        return await varData_1942.Sync.inventory.HasItem(param_1, param_2);
      },
      GetItemStacks: async (param_1, param_2) => {
        return await varData_1942.Sync.inventory.GetItemStacks(param_1, param_2);
      },
      GetAllItemStacks: async (param_1) => {
        return await varData_1942.Sync.inventory.GetAllItemStacks(param_1);
      },
      GetItemList: async () => {
        return await varData_1942.Sync.inventory.GetItemList();
      },
      GetPlayerInventories: async () => {
        return await varData_1942.Sync.inventory.GetPlayerInventories();
      },
      GetPlayerInventoriesWeight: async () => {
        return await varData_1942.Sync.inventory.GetPlayerInventoriesWeight();
      },
      GetWeaponsList: () => {
        return varData_1942.Sync.inventory.GetWeaponsList();
      },
      GetWeapon: (param_1) => {
        return varData_1942.Sync.inventory.GetWeapon(param_1);
      },
      GetWeaponByItemStack: (param_1) => {
        return varData_1942.Sync.inventory.GetWeaponByItemStack(param_1);
      },
      OpenInventory: (param_1, param_2) => {
        varData_1942.Sync.inventory.OpenInventory(param_1, param_2);
      },
      UseBodySlot: (param_1) => {
        return varData_1942.Async.inventory.UseBodySlot(param_1);
      },
      SetBodySlotDisabled: (param_1, param_2, param_3) => {
        varData_1942.Sync.inventory.SetBodySlotDisabled(param_1, param_2, param_3);
      },
      IsBodySlotDisabled: (param_1, param_2) => {
        return varData_1942.Sync.inventory.IsBodySlotDisabled(param_1, param_2);
      }
    };
    var varData_2101 = {};
    var varData_2102 = {
      Activity: () => varData_2179,
      ActivityObjective: () => varData_2153,
      ActivityTask: () => varData_2132,
      Cache: () => varData_1770,
      Group: () => varData_2211,
      GroupManager: () => varData_2236,
      GroupMember: () => varData_2226,
      PolyZone: () => varData_1846,
      Thread: () => varData_2103,
      Vector2: () => varData_1897,
      Vector3: () => varData_1767
    };
    varData_966(varData_2101, varData_2102);
    var varData_2103 = class {
      constructor(param_1, param_2, _0x48f953 = "interval") {
        this.callback = param_1;
        this.delay = param_2;
        this.mode = _0x48f953;
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
        const varData_2104 = this.hooks.get("preStart") ?? [];
        try {
          for (const varData_2105 of varData_2104) {
            if (!this.aborted) {
              await varData_2105.call(this);
            }
          }
        } catch (err) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", err.message);
        }
        if (this.aborted) {
          try {
            const varData_2106 = this.hooks.get("startAborted") ?? [];
            for (const varData_2107 of varData_2106) {
              await varData_2107.call(this);
            }
          } catch (err) {
            console.log("Error while calling start-aborted hook", err.message);
          }
          return;
        }
        this.active = true;
        const varData_2108 = this.hooks.get("active") ?? [];
        switch (this.mode) {
          case "tick": {
            this.threadId = setTick(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const varData_2109 of varData_2108) {
                  await varData_2109.call(this);
                }
              } catch (err) {
                console.log("Error while calling active hook", err.message);
              }
              if (this.delay > 0) {
                await new Promise((param_1) => setTimeout(param_1, this.delay));
              }
            });
            break;
          }
          case "interval": {
            this.threadId = setInterval(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const varData_2110 of varData_2108) {
                  await varData_2110.call(this);
                }
              } catch (err) {
                console.log("Error while calling active hook", err.message);
              }
            }, this.delay);
            break;
          }
          case "timeout": {
            const varData_2111 = () => {
              if (this.active) {
                this.threadId = setTimeout(async () => {
                  this.tick += 1;
                  try {
                    await this.callback.call(this);
                    for (const varData_2112 of varData_2108) {
                      await varData_2112.call(this);
                    }
                  } catch (err) {
                    console.log("Error while calling active hook", err.message);
                  }
                  return varData_2111();
                }, this.delay);
              }
            };
            varData_2111();
            break;
          }
        }
        const varData_2113 = this.hooks.get("afterStart") ?? [];
        try {
          for (const varData_2114 of varData_2113) {
            await varData_2114.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-start hook", err.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const varData_2115 = this.hooks.get("preStop") ?? [];
        try {
          for (const varData_2116 of varData_2115) {
            if (!this.aborted) {
              await varData_2116.call(this);
            }
          }
        } catch (err) {
          this.aborted = true;
          console.log("Error while calling pre-stop hook", err.message);
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
            const varData_2117 = this.hooks.get("stopAborted") ?? [];
            for (const varData_2118 of varData_2117) {
              await varData_2118.call(this);
            }
          } catch (err) {
            console.log("Error while calling stop-aborted hook", err.message);
          }
          return;
        }
        const varData_2119 = this.hooks.get("afterStop") ?? [];
        try {
          for (const varData_2120 of varData_2119) {
            await varData_2120.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-stop hook", err.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(param_1, param_2) {
        var varData_2121;
        if ((varData_2121 = this.hooks.get(param_1)) == null) {
        } else {
          varData_2121.push(param_2);
        }
      }
      setNextTick(param_1, param_2) {
        this.scheduled[param_1] = this.tick + param_2;
      }
      canTick(param_1) {
        return this.scheduled[param_1] === void 0 || this.tick >= this.scheduled[param_1];
      }
    };
    var varData_2122;
    var varData_2123;
    var varData_2124;
    var varData_2125;
    var varData_2126;
    var varData_2127;
    var varData_2128;
    var varData_2129;
    var varData_2130;
    var varData_2131;
    var varData_2132 = class {
      constructor(param_1, param_2) {
        varData_973(this, varData_2128);
        varData_973(this, varData_2130);
        varData_973(this, varData_2122, void 0);
        varData_973(this, varData_2123, void 0);
        varData_973(this, varData_2124, void 0);
        varData_973(this, varData_2125, void 0);
        varData_973(this, varData_2126, void 0);
        varData_973(this, varData_2127, void 0);
        varData_974(this, varData_2122, param_1.id);
        varData_974(this, varData_2123, param_2);
        varData_974(this, varData_2124, /* @__PURE__ */ new Map());
        varData_974(this, varData_2127, "pending");
        varData_974(this, varData_2125, param_1.required.map((param_1_1) => param_2.objectives.get(param_1_1)));
        varData_974(this, varData_2126, new Map(param_1.objectives.map((param_1_1) => [param_1_1, param_2.objectives.get(param_1_1)])));
        if (param_1.status !== "pending") {
          setTimeout(() => varData_976(this, varData_2128, varData_2129).call(this, param_1.status), 3e3);
        }
        varData_1992.onNet("__npx_activities:" + varData_972(this, varData_2123).id + ":task:" + varData_972(this, varData_2122) + ":statusUpdate", varData_976(this, varData_2128, varData_2129).bind(this));
      }
      get id() {
        return varData_972(this, varData_2122);
      }
      onTaskStarted(param_1) {
        const varData_2133 = varData_972(this, varData_2124).get("onTaskStarted") ?? [];
        if (!varData_972(this, varData_2124).has("onTaskStarted")) {
          varData_972(this, varData_2124).set("onTaskStarted", varData_2133);
        }
        varData_2133.push(param_1);
      }
      onTaskEnded(param_1) {
        const varData_2134 = varData_972(this, varData_2124).get("onTaskEnded") ?? [];
        if (!varData_972(this, varData_2124).has("onTaskEnded")) {
          varData_972(this, varData_2124).set("onTaskEnded", varData_2134);
        }
        varData_2134.push(param_1);
      }
      emitEvent(param_1, ..._0x1d8ad2) {
        return varData_2032.execute("__npx_activities:" + varData_972(this, varData_2123).id + ":task:" + varData_972(this, varData_2122) + ":event", param_1, ..._0x1d8ad2);
      }
      toJSON() {
        return {
          id: varData_972(this, varData_2122),
          status: varData_972(this, varData_2127),
          objectives: [...varData_972(this, varData_2126).keys()],
          required: varData_972(this, varData_2125).map((param_1) => param_1.id)
        };
      }
      destroy() {
        varData_972(this, varData_2124).clear();
      }
    };
    varData_2122 = /* @__PURE__ */ new WeakMap();
    varData_2123 = /* @__PURE__ */ new WeakMap();
    varData_2124 = /* @__PURE__ */ new WeakMap();
    varData_2125 = /* @__PURE__ */ new WeakMap();
    varData_2126 = /* @__PURE__ */ new WeakMap();
    varData_2127 = /* @__PURE__ */ new WeakMap();
    varData_2128 = /* @__PURE__ */ new WeakSet();
    varData_2129 = function(param_1) {
      const varData_2135 = varData_972(this, varData_2127);
      varData_974(this, varData_2127, param_1);
      if (varData_2135 === "pending" && param_1 === "active") {
        varData_976(this, varData_2130, varData_2131).call(this, "onTaskStarted");
      } else if (varData_2135 === "active" && (param_1 === "completed" || param_1 === "failed")) {
        varData_976(this, varData_2130, varData_2131).call(this, "onTaskEnded", param_1 === "completed");
      }
      varData_976(this, varData_2130, varData_2131).call(this, "onStatusUpdate", param_1);
    };
    varData_2130 = /* @__PURE__ */ new WeakSet();
    varData_2131 = function(param_1, ..._0x4306ef) {
      const varData_2136 = varData_972(this, varData_2124).get(param_1);
      if (!varData_2136) {
        return;
      }
      for (const varData_2137 of varData_2136) {
        try {
          varData_2137.call(this, ..._0x4306ef);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_2138;
    var varData_2139;
    var varData_2140;
    var varData_2141;
    var varData_2142;
    var varData_2143;
    var varData_2144;
    var varData_2145;
    var varData_2146;
    var varData_2147;
    var varData_2148;
    var varData_2149;
    var varData_2150;
    var varData_2151;
    var varData_2152;
    var varData_2153 = class {
      constructor(param_1, param_2) {
        varData_973(this, varData_2145);
        varData_973(this, varData_2147);
        varData_973(this, varData_2149);
        varData_973(this, varData_2151);
        varData_973(this, varData_2138, void 0);
        varData_973(this, varData_2139, void 0);
        varData_973(this, varData_2140, void 0);
        varData_973(this, varData_2141, void 0);
        varData_973(this, varData_2142, void 0);
        varData_973(this, varData_2143, void 0);
        varData_973(this, varData_2144, void 0);
        varData_974(this, varData_2138, param_1.id);
        varData_974(this, varData_2139, param_1.name);
        varData_974(this, varData_2140, param_1.description);
        varData_974(this, varData_2141, param_2);
        varData_974(this, varData_2142, /* @__PURE__ */ new Map());
        varData_974(this, varData_2143, param_1.status);
        varData_974(this, varData_2144, new Map(Object.entries(param_1.data ?? {})));
        varData_1992.onNet("__npx_activities:" + varData_972(this, varData_2141).id + ":objective:" + varData_972(this, varData_2138) + ":statusUpdate", varData_976(this, varData_2145, varData_2146).bind(this));
        varData_1992.onNet("__npx_activities:" + varData_972(this, varData_2141).id + ":objective:" + varData_972(this, varData_2138) + ":dataUpdate", varData_976(this, varData_2147, varData_2148).bind(this));
        varData_1992.onNet("__npx_activities:" + varData_972(this, varData_2141).id + ":objective:" + varData_972(this, varData_2138) + ":dataSet", varData_976(this, varData_2149, varData_2150).bind(this));
      }
      get id() {
        return varData_972(this, varData_2138);
      }
      get name() {
        return varData_972(this, varData_2139);
      }
      get description() {
        return varData_972(this, varData_2140);
      }
      get status() {
        return varData_972(this, varData_2143);
      }
      get activity() {
        return varData_972(this, varData_2141);
      }
      getData(param_1) {
        return varData_972(this, varData_2144).get(param_1);
      }
      onStatusUpdate(param_1) {
        const varData_2154 = varData_972(this, varData_2142).get("onStatusUpdate") ?? [];
        if (!varData_972(this, varData_2142).has("onStatusUpdate")) {
          varData_972(this, varData_2142).set("onStatusUpdate", varData_2154);
        }
        varData_2154.push(param_1);
      }
      onDataUpdate(param_1) {
        const varData_2155 = varData_972(this, varData_2142).get("onDataUpdate") ?? [];
        if (!varData_972(this, varData_2142).has("onDataUpdate")) {
          varData_972(this, varData_2142).set("onDataUpdate", varData_2155);
        }
        varData_2155.push(param_1);
      }
      toJSON() {
        return {
          id: varData_972(this, varData_2138),
          name: varData_972(this, varData_2139),
          description: varData_972(this, varData_2140),
          status: varData_972(this, varData_2143),
          data: Object.fromEntries(varData_972(this, varData_2144))
        };
      }
      destroy() {
        varData_972(this, varData_2142).clear();
      }
    };
    varData_2138 = /* @__PURE__ */ new WeakMap();
    varData_2139 = /* @__PURE__ */ new WeakMap();
    varData_2140 = /* @__PURE__ */ new WeakMap();
    varData_2141 = /* @__PURE__ */ new WeakMap();
    varData_2142 = /* @__PURE__ */ new WeakMap();
    varData_2143 = /* @__PURE__ */ new WeakMap();
    varData_2144 = /* @__PURE__ */ new WeakMap();
    varData_2145 = /* @__PURE__ */ new WeakSet();
    varData_2146 = function(param_1) {
      varData_974(this, varData_2143, param_1);
      varData_976(this, varData_2151, varData_2152).call(this, "onStatusUpdated", param_1);
    };
    varData_2147 = /* @__PURE__ */ new WeakSet();
    varData_2148 = function(param_1, param_2) {
      varData_972(this, varData_2144).set(param_1, param_2);
      varData_976(this, varData_2151, varData_2152).call(this, "onDataUpdate", param_1, param_2);
    };
    varData_2149 = /* @__PURE__ */ new WeakSet();
    varData_2150 = function(param_1) {
      for (const [_0x29c0bd, _0x2eea25] of Object.entries(param_1)) {
        varData_972(this, varData_2144).set(_0x29c0bd, _0x2eea25);
        varData_976(this, varData_2151, varData_2152).call(this, "onDataUpdate", _0x29c0bd, _0x2eea25);
      }
    };
    varData_2151 = /* @__PURE__ */ new WeakSet();
    varData_2152 = function(param_1, ..._0x731914) {
      const varData_2156 = varData_972(this, varData_2142).get(param_1);
      if (!varData_2156) {
        return;
      }
      for (const varData_2157 of varData_2156) {
        try {
          varData_2157.call(this, ..._0x731914);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_2158;
    var varData_2159;
    var varData_2160;
    var varData_2161;
    var varData_2162;
    var varData_2163;
    var varData_2164;
    var varData_2165;
    var varData_2166;
    var varData_2167;
    var varData_2168;
    var varData_2169;
    var varData_2170;
    var varData_2171;
    var varData_2172;
    var varData_2173;
    var varData_2174;
    var varData_2175;
    var varData_2176;
    var varData_2177;
    var varData_2178;
    var varData_2179 = class {
      constructor(param_1) {
        varData_973(this, varData_2167);
        varData_973(this, varData_2169);
        varData_973(this, varData_2171);
        varData_973(this, varData_2173);
        varData_973(this, varData_2175);
        varData_973(this, varData_2177);
        varData_973(this, varData_2158, void 0);
        varData_973(this, varData_2159, void 0);
        varData_973(this, varData_2160, void 0);
        varData_973(this, varData_2161, void 0);
        varData_973(this, varData_2162, void 0);
        varData_973(this, varData_2163, void 0);
        varData_973(this, varData_2164, void 0);
        varData_973(this, varData_2165, void 0);
        varData_973(this, varData_2166, void 0);
        varData_974(this, varData_2158, param_1.id);
        varData_974(this, varData_2159, param_1.code);
        varData_974(this, varData_2160, param_1.name);
        varData_974(this, varData_2161, param_1.description);
        varData_974(this, varData_2162, /* @__PURE__ */ new Map());
        varData_974(this, varData_2163, "pending");
        varData_974(this, varData_2164, param_1.deadline ? new Date(param_1.deadline) : null);
        varData_974(this, varData_2165, /* @__PURE__ */ new Map());
        varData_974(this, varData_2166, /* @__PURE__ */ new Map());
        if (param_1.status !== "pending") {
          setTimeout(() => varData_976(this, varData_2167, varData_2168).call(this, param_1.status), 3e3);
        }
        param_1.objectives.forEach((param_1_1) => varData_976(this, varData_2169, varData_2170).call(this, param_1_1));
        param_1.tasks.forEach((param_1_1) => varData_976(this, varData_2173, varData_2174).call(this, param_1_1));
        varData_1992.onNet("__npx_activities:" + varData_972(this, varData_2158) + ":statusUpdate", varData_976(this, varData_2167, varData_2168).bind(this));
        varData_1992.onNet("__npx_activities:" + varData_972(this, varData_2158) + ":objectiveAdded", varData_976(this, varData_2169, varData_2170).bind(this));
        varData_1992.onNet("__npx_activities:" + varData_972(this, varData_2158) + ":objectiveRemoved", varData_976(this, varData_2171, varData_2172).bind(this));
        varData_1992.onNet("__npx_activities:" + varData_972(this, varData_2158) + ":taskAdded", varData_976(this, varData_2173, varData_2174).bind(this));
        varData_1992.onNet("__npx_activities:" + varData_972(this, varData_2158) + ":taskRemoved", varData_976(this, varData_2175, varData_2176).bind(this));
      }
      get id() {
        return varData_972(this, varData_2158);
      }
      get status() {
        return varData_972(this, varData_2163);
      }
      get objectives() {
        return varData_972(this, varData_2166);
      }
      on(param_1, param_2) {
        const varData_2180 = varData_972(this, varData_2162).get(param_1) ?? [];
        if (!varData_972(this, varData_2162).has(param_1)) {
          varData_972(this, varData_2162).set(param_1, varData_2180);
        }
        varData_2180.push(param_2);
      }
      toJSON() {
        var varData_2181;
        return {
          id: varData_972(this, varData_2158),
          code: varData_972(this, varData_2159),
          name: varData_972(this, varData_2160),
          description: varData_972(this, varData_2161),
          status: varData_972(this, varData_2163),
          deadline: ((varData_2181 = varData_972(this, varData_2164)) == null ? void 0 : varData_2181.getTime()) ?? null,
          tasks: [...varData_972(this, varData_2165).values()].map((param_1) => param_1.toJSON()),
          objectives: [...varData_972(this, varData_2166).values()].map((param_1) => param_1.toJSON())
        };
      }
      destroy() {
        varData_972(this, varData_2165).forEach((param_1) => param_1.destroy());
        varData_972(this, varData_2166).forEach((param_1) => param_1.destroy());
        varData_972(this, varData_2165).clear();
        varData_972(this, varData_2166).clear();
        varData_972(this, varData_2162).clear();
      }
    };
    varData_2158 = /* @__PURE__ */ new WeakMap();
    varData_2159 = /* @__PURE__ */ new WeakMap();
    varData_2160 = /* @__PURE__ */ new WeakMap();
    varData_2161 = /* @__PURE__ */ new WeakMap();
    varData_2162 = /* @__PURE__ */ new WeakMap();
    varData_2163 = /* @__PURE__ */ new WeakMap();
    varData_2164 = /* @__PURE__ */ new WeakMap();
    varData_2165 = /* @__PURE__ */ new WeakMap();
    varData_2166 = /* @__PURE__ */ new WeakMap();
    varData_2167 = /* @__PURE__ */ new WeakSet();
    varData_2168 = function(param_1) {
      const varData_2182 = varData_972(this, varData_2163);
      varData_974(this, varData_2163, param_1);
      if (varData_2182 === "pending" && param_1 === "active") {
        varData_976(this, varData_2177, varData_2178).call(this, "onActivityStarted");
      } else if (param_1 === "completed" || param_1 === "failed") {
        varData_976(this, varData_2177, varData_2178).call(this, "onActivityEnded", param_1, param_1 === "completed");
      }
      varData_976(this, varData_2177, varData_2178).call(this, "onStatusUpdate", param_1);
    };
    varData_2169 = /* @__PURE__ */ new WeakSet();
    varData_2170 = function(param_1) {
      const varData_2183 = new varData_2153(param_1, this);
      varData_2183.onStatusUpdate((param_1_1) => varData_976(this, varData_2177, varData_2178).call(this, "onObjectiveStatusUpdate", varData_2183, param_1_1));
      varData_2183.onDataUpdate((param_1_1, param_2) => varData_976(this, varData_2177, varData_2178).call(this, "onObjectiveDataUpdate", varData_2183, param_1_1, param_2));
      varData_972(this, varData_2166).set(varData_2183.id, varData_2183);
      varData_976(this, varData_2177, varData_2178).call(this, "onObjectiveAdded", varData_2183);
    };
    varData_2171 = /* @__PURE__ */ new WeakSet();
    varData_2172 = function(param_1) {
      const varData_2184 = varData_972(this, varData_2166).get(param_1.id);
      if (!varData_2184) {
        return;
      }
      varData_972(this, varData_2166).delete(param_1.id);
      varData_976(this, varData_2177, varData_2178).call(this, "onObjectiveRemoved", varData_2184);
      varData_2184.destroy();
    };
    varData_2173 = /* @__PURE__ */ new WeakSet();
    varData_2174 = function(param_1) {
      const varData_2185 = new varData_2132(param_1, this);
      varData_2185.onTaskStarted(() => varData_976(this, varData_2177, varData_2178).call(this, "onTaskStarted", varData_2185));
      varData_2185.onTaskEnded((param_1_1) => varData_976(this, varData_2177, varData_2178).call(this, "onTaskEnded", varData_2185, param_1_1));
      varData_972(this, varData_2165).set(varData_2185.id, varData_2185);
      varData_976(this, varData_2177, varData_2178).call(this, "onTaskAdded", varData_2185);
    };
    varData_2175 = /* @__PURE__ */ new WeakSet();
    varData_2176 = function(param_1) {
      const varData_2186 = varData_972(this, varData_2165).get(param_1.id);
      if (!varData_2186) {
        return;
      }
      varData_972(this, varData_2165).delete(param_1.id);
      varData_976(this, varData_2177, varData_2178).call(this, "onTaskRemoved", varData_2186);
      varData_2186.destroy();
    };
    varData_2177 = /* @__PURE__ */ new WeakSet();
    varData_2178 = function(param_1, ..._0x59f460) {
      const varData_2187 = varData_972(this, varData_2162).get(param_1);
      if (!varData_2187) {
        return;
      }
      for (const varData_2188 of varData_2187) {
        try {
          varData_2188.call(this, ..._0x59f460);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_2189;
    var varData_2190;
    var varData_2191;
    var varData_2192;
    var varData_2193;
    var varData_2194;
    var varData_2195;
    var varData_2196;
    var varData_2197;
    var varData_2198;
    var varData_2199;
    var varData_2200;
    var varData_2201;
    var varData_2202;
    var varData_2203;
    var varData_2204;
    var varData_2205;
    var varData_2206;
    var varData_2207;
    var varData_2208;
    var varData_2209;
    var varData_2210;
    var varData_2211 = class {
      constructor(param_1) {
        varData_973(this, varData_2197);
        varData_973(this, varData_2199);
        varData_973(this, varData_2201);
        varData_973(this, varData_2203);
        varData_973(this, varData_2205);
        varData_973(this, varData_2207);
        varData_973(this, varData_2209);
        varData_973(this, varData_2189, void 0);
        varData_973(this, varData_2190, void 0);
        varData_973(this, varData_2191, void 0);
        varData_973(this, varData_2192, void 0);
        varData_973(this, varData_2193, void 0);
        varData_973(this, varData_2194, void 0);
        varData_973(this, varData_2195, void 0);
        varData_973(this, varData_2196, void 0);
        varData_974(this, varData_2189, param_1.id);
        varData_974(this, varData_2191, /* @__PURE__ */ new Map());
        varData_974(this, varData_2192, param_1.name);
        varData_974(this, varData_2193, param_1.capacity);
        varData_974(this, varData_2195, null);
        varData_974(this, varData_2196, new Map(Object.entries(param_1.data)));
        varData_974(this, varData_2190, /* @__PURE__ */ new Map());
        varData_974(this, varData_2194, null);
        for (const varData_2212 of param_1.members) {
          const varData_2213 = new varData_2226(varData_2212, this);
          varData_972(this, varData_2190).set(varData_2213.characterId, varData_2213);
          if (varData_2212.isLeader) {
            varData_974(this, varData_2194, varData_2213);
          }
        }
        if (param_1.activity) {
          setTimeout(() => varData_976(this, varData_2207, varData_2208).call(this, param_1.activity), 3e3);
        }
        varData_1992.onNet("__npx_groups:group:" + varData_972(this, varData_2189) + ":data:update", varData_976(this, varData_2199, varData_2200).bind(this));
        varData_1992.onNet("__npx_groups:group:" + varData_972(this, varData_2189) + ":activity:set", varData_976(this, varData_2207, varData_2208).bind(this));
        varData_1992.onNet("__npx_groups:group:" + varData_972(this, varData_2189) + ":group:update", varData_976(this, varData_2197, varData_2198).bind(this));
        varData_1992.onNet("__npx_groups:group:" + varData_972(this, varData_2189) + ":member:joined", varData_976(this, varData_2201, varData_2202).bind(this));
        varData_1992.onNet("__npx_groups:group:" + varData_972(this, varData_2189) + ":member:left", varData_976(this, varData_2203, varData_2204).bind(this));
        varData_1992.onNet("__npx_groups:group:" + varData_972(this, varData_2189) + ":member:update", varData_976(this, varData_2205, varData_2206).bind(this));
      }
      get id() {
        return varData_972(this, varData_2189);
      }
      get name() {
        return varData_972(this, varData_2192);
      }
      get capacity() {
        return varData_972(this, varData_2193);
      }
      get size() {
        return varData_972(this, varData_2190).size;
      }
      get leader() {
        return varData_972(this, varData_2194);
      }
      get members() {
        return [...varData_972(this, varData_2190).values()];
      }
      get activity() {
        return varData_972(this, varData_2195);
      }
      on(param_1, param_2) {
        const varData_2214 = varData_972(this, varData_2191).get(param_1) ?? [];
        if (!varData_972(this, varData_2191).has(param_1)) {
          varData_972(this, varData_2191).set(param_1, varData_2214);
        }
        varData_2214.push(param_2);
      }
      getValue(param_1) {
        return varData_972(this, varData_2196).get(param_1);
      }
      toJSON() {
        var varData_2215;
        return {
          id: varData_972(this, varData_2189),
          name: varData_972(this, varData_2192),
          capacity: varData_972(this, varData_2193),
          activity: ((varData_2215 = varData_972(this, varData_2195)) == null ? void 0 : varData_2215.toJSON()) ?? null,
          members: [...varData_972(this, varData_2190).values()].map((param_1) => param_1.toJSON()),
          data: Object.fromEntries(varData_972(this, varData_2196))
        };
      }
      destroy() {
        varData_972(this, varData_2191).clear();
        varData_972(this, varData_2190).clear();
        varData_972(this, varData_2196).clear();
      }
    };
    varData_2189 = /* @__PURE__ */ new WeakMap();
    varData_2190 = /* @__PURE__ */ new WeakMap();
    varData_2191 = /* @__PURE__ */ new WeakMap();
    varData_2192 = /* @__PURE__ */ new WeakMap();
    varData_2193 = /* @__PURE__ */ new WeakMap();
    varData_2194 = /* @__PURE__ */ new WeakMap();
    varData_2195 = /* @__PURE__ */ new WeakMap();
    varData_2196 = /* @__PURE__ */ new WeakMap();
    varData_2197 = /* @__PURE__ */ new WeakSet();
    varData_2198 = function(param_1) {
      varData_974(this, varData_2192, param_1.name);
      varData_974(this, varData_2193, param_1.capacity);
      varData_976(this, varData_2209, varData_2210).call(this, "group:update", this);
    };
    varData_2199 = /* @__PURE__ */ new WeakSet();
    varData_2200 = function(param_1, param_2) {
      varData_972(this, varData_2196).set(param_1, param_2);
      varData_976(this, varData_2209, varData_2210).call(this, "data:update", param_1, param_2);
    };
    varData_2201 = /* @__PURE__ */ new WeakSet();
    varData_2202 = function(param_1) {
      const varData_2216 = new varData_2226(param_1, this);
      varData_972(this, varData_2190).set(varData_2216.characterId, varData_2216);
      varData_976(this, varData_2209, varData_2210).call(this, "member:joined", varData_2216);
    };
    varData_2203 = /* @__PURE__ */ new WeakSet();
    varData_2204 = function(param_1) {
      const varData_2217 = varData_972(this, varData_2190).get(param_1);
      if (!varData_2217) {
        return;
      }
      varData_972(this, varData_2190).delete(param_1);
      if (varData_972(this, varData_2194) === varData_2217) {
        varData_974(this, varData_2194, null);
      }
      varData_976(this, varData_2209, varData_2210).call(this, "member:left", varData_2217);
    };
    varData_2205 = /* @__PURE__ */ new WeakSet();
    varData_2206 = function(param_1, param_2, param_3) {
      const varData_2218 = varData_972(this, varData_2190).get(param_1);
      if (!varData_2218) {
        return;
      }
      if (varData_2218.serverId !== param_2) {
        varData_2218.updateServerId(param_2);
      }
      if (param_3) {
        varData_974(this, varData_2194, varData_2218);
      }
      varData_976(this, varData_2209, varData_2210).call(this, "member:update", varData_2218);
    };
    varData_2207 = /* @__PURE__ */ new WeakSet();
    varData_2208 = function(param_1) {
      const varData_2219 = param_1 ? new varData_2179(param_1) : null;
      varData_974(this, varData_2195, varData_2219);
      varData_976(this, varData_2209, varData_2210).call(this, "activity:set", varData_2219);
    };
    varData_2209 = /* @__PURE__ */ new WeakSet();
    varData_2210 = function(param_1, ..._0x57c7e4) {
      const varData_2220 = varData_972(this, varData_2191).get(param_1);
      if (!varData_2220) {
        return;
      }
      for (const varData_2221 of varData_2220) {
        try {
          varData_2221.call(this, ..._0x57c7e4);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_2222;
    var varData_2223;
    var varData_2224;
    var varData_2225;
    var varData_2226 = class {
      constructor(param_1, param_2) {
        varData_973(this, varData_2222, void 0);
        varData_973(this, varData_2223, void 0);
        varData_973(this, varData_2224, void 0);
        varData_973(this, varData_2225, void 0);
        varData_974(this, varData_2222, param_1.characterId);
        varData_974(this, varData_2223, param_1.name);
        varData_974(this, varData_2224, param_2);
        varData_974(this, varData_2225, param_1.serverId);
      }
      get group() {
        return varData_972(this, varData_2224);
      }
      get characterId() {
        return varData_972(this, varData_2222);
      }
      get name() {
        return varData_972(this, varData_2223);
      }
      get serverId() {
        return varData_972(this, varData_2225);
      }
      get isOnline() {
        return varData_972(this, varData_2225) !== null;
      }
      get isLeader() {
        return varData_972(this, varData_2224).leader === this;
      }
      updateServerId(param_1) {
        varData_974(this, varData_2225, param_1);
      }
      toJSON() {
        return {
          characterId: varData_972(this, varData_2222),
          serverId: varData_972(this, varData_2225),
          name: varData_972(this, varData_2223),
          isLeader: this.isLeader,
          isOnline: this.isOnline
        };
      }
    };
    varData_2222 = /* @__PURE__ */ new WeakMap();
    varData_2223 = /* @__PURE__ */ new WeakMap();
    varData_2224 = /* @__PURE__ */ new WeakMap();
    varData_2225 = /* @__PURE__ */ new WeakMap();
    var varData_2227;
    var varData_2228;
    var varData_2229;
    var varData_2230;
    var varData_2231;
    var varData_2232;
    var varData_2233;
    var varData_2234;
    var varData_2235;
    var varData_2236 = class {
      constructor(param_1) {
        varData_973(this, varData_2230);
        varData_973(this, varData_2232);
        varData_973(this, varData_2234);
        varData_973(this, varData_2227, void 0);
        varData_973(this, varData_2228, void 0);
        varData_973(this, varData_2229, void 0);
        varData_974(this, varData_2227, param_1 ?? GetCurrentResourceName());
        varData_974(this, varData_2228, /* @__PURE__ */ new Map());
        varData_974(this, varData_2229, /* @__PURE__ */ new Map());
        varData_1992.onNet("__npx_groups:manager:" + varData_972(this, varData_2227) + ":addedToGroup", varData_976(this, varData_2230, varData_2231).bind(this));
        varData_1992.onNet("__npx_groups:manager:" + varData_972(this, varData_2227) + ":removedFromGroup", varData_976(this, varData_2232, varData_2233).bind(this));
        on("np-base:clearStates", this.reset.bind(this));
        on("np-spawn:characterSpawned", this.init.bind(this));
        const varData_2237 = varData_1942.Sync.isPed.isPed("cid");
        if (varData_2237) {
          this.init();
        }
      }
      get list() {
        return varData_972(this, varData_2228);
      }
      async init() {
        if (varData_972(this, varData_2228).size > 0) {
          this.reset();
        }
        const varData_2238 = await varData_2032.execute("__npx_groups:manager:" + varData_972(this, varData_2227) + ":init");
        if (!varData_2238) {
          return;
        }
        for (const varData_2239 of varData_2238) {
          varData_976(this, varData_2230, varData_2231).call(this, varData_2239);
        }
        varData_2000.debug("[Group Manager] Initialized! | Groups: " + varData_972(this, varData_2228).size);
      }
      reset() {
        varData_972(this, varData_2228).forEach((param_1) => param_1.destroy());
        varData_972(this, varData_2228).clear();
      }
      on(param_1, param_2) {
        const varData_2240 = varData_972(this, varData_2229).get(param_1) ?? [];
        if (!varData_972(this, varData_2229).has(param_1)) {
          varData_972(this, varData_2229).set(param_1, varData_2240);
        }
        varData_2240.push(param_2);
      }
    };
    varData_2227 = /* @__PURE__ */ new WeakMap();
    varData_2228 = /* @__PURE__ */ new WeakMap();
    varData_2229 = /* @__PURE__ */ new WeakMap();
    varData_2230 = /* @__PURE__ */ new WeakSet();
    varData_2231 = function(param_1) {
      const varData_2241 = new varData_2211(param_1);
      varData_2241.on("activity:set", (param_1_1) => param_1_1 && varData_976(this, varData_2234, varData_2235).call(this, "activityAssigned", varData_2241, param_1_1));
      varData_972(this, varData_2228).set(varData_2241.id, varData_2241);
      varData_976(this, varData_2234, varData_2235).call(this, "addedToGroup", varData_2241);
    };
    varData_2232 = /* @__PURE__ */ new WeakSet();
    varData_2233 = function(param_1) {
      const varData_2242 = varData_972(this, varData_2228).get(param_1);
      if (!varData_2242) {
        return;
      }
      varData_972(this, varData_2228).delete(param_1);
      varData_2242.destroy();
      varData_976(this, varData_2234, varData_2235).call(this, "removedFromGroup", varData_2242.id);
    };
    varData_2234 = /* @__PURE__ */ new WeakSet();
    varData_2235 = function(param_1, ..._0x1c4a14) {
      const varData_2243 = varData_972(this, varData_2229).get(param_1) ?? [];
      for (const varData_2244 of varData_2243) {
        try {
          varData_2244.call(this, ..._0x1c4a14);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_2245 = {};
    var varData_2246 = {
      GetEntityStateValue: () => handleAction_155,
      GetPlayerStateValue: () => handleAction_158,
      RegisterStatebagChangeHandler: () => handleAction_160,
      SetEntityStateValue: () => handleAction_156,
      SetPlayerStateValue: () => handleAction_159
    };
    varData_966(varData_2245, varData_2246);
    var varData_2247 = new varData_1770(5e3);
    function handleAction_154(param_1) {
      let varData_2248 = varData_2247.get("ent-" + param_1);
      if (varData_2248) {
        return varData_2248;
      }
      varData_2248 = Entity(param_1);
      varData_2247.set("ent-" + param_1, varData_2248);
      return varData_2248;
    }
    function handleAction_155(param_1, param_2) {
      const varData_2249 = handleAction_154(param_1);
      return varData_2249.state[param_2];
    }
    function handleAction_156(param_1, param_2, param_3, _0x56581f = false) {
      const varData_2250 = handleAction_154(param_1);
      varData_2250.state.set(param_2, param_3, _0x56581f);
    }
    function handleAction_157(param_1) {
      let varData_2251 = varData_2247.get("ply-" + param_1);
      if (varData_2251) {
        return varData_2251;
      }
      varData_2251 = Player(param_1);
      varData_2247.set("ply-" + param_1, varData_2251);
      return varData_2251;
    }
    function handleAction_158(param_1, param_2) {
      const varData_2252 = handleAction_157(param_1);
      return varData_2252.state[param_2];
    }
    function handleAction_159(param_1, param_2, param_3, _0x2fdbc9 = false) {
      const varData_2253 = handleAction_157(param_1);
      varData_2253.state.set(param_2, param_3, _0x2fdbc9);
    }
    function handleAction_160(param_1, param_2, param_3, param_4) {
      return AddStateBagChangeHandler(param_1, null, async function(param_1_1, param_2_1, param_3_1, param_4_1, param_5) {
        if (param_3 && !param_5) {
          return;
        }
        const varData_2254 = param_1_1.startsWith("player");
        const varData_2255 = parseInt(param_1_1.substring(7));
        const varData_2256 = varData_2254 ? GetPlayerFromStateBagName(param_1_1) : GetEntityFromStateBagName(param_1_1);
        if (!varData_2256) {
          return;
        }
        const varData_2257 = varData_2254 ? NetworkGetPlayerIndexFromPed(varData_2256) === PlayerId() : NetworkGetEntityOwner(varData_2256) === PlayerId();
        if (param_2 && !varData_2257) {
          return;
        }
        param_4(varData_2255, varData_2256, param_3_1);
      });
    }
    var varData_2258 = {};
    var varData_2259 = {
      GetFuelLevel: () => handleAction_168,
      GetIdentifier: () => handleAction_165,
      GetMetadata: () => handleAction_164,
      HasKey: () => handleAction_163,
      IsVinScratched: () => handleAction_166,
      SwapSeat: () => handleAction_167,
      TurnOffEngine: () => handleAction_162,
      TurnOnEngine: () => handleAction_161
    };
    varData_966(varData_2258, varData_2259);
    function handleAction_161(param_1) {
      varData_1942.Sync["np-vehicles"].TurnOnEngine(param_1);
    }
    function handleAction_162(param_1) {
      varData_1942.Sync["np-vehicles"].TurnOffEngine(param_1);
    }
    function handleAction_163(param_1) {
      return varData_1942.Sync["np-vehicles"].HasVehicleKey(param_1);
    }
    function handleAction_164(param_1, param_2) {
      const varData_2260 = handleAction_155(param_1, "data");
      if (param_2) {
        if (varData_2260 == null) {
          return void 0;
        } else {
          return varData_2260[param_2];
        }
      } else {
        return varData_2260;
      }
    }
    function handleAction_165(param_1) {
      return handleAction_155(param_1, "vin");
    }
    function handleAction_166(param_1) {
      return handleAction_155(param_1, "vinScratched");
    }
    function handleAction_167(param_1, param_2) {
      varData_1942.Sync["np-vehicles"].SwapVehicleSeat(param_1, param_2);
    }
    function handleAction_168(param_1) {
      return handleAction_164(param_1, "fuel") ?? 0;
    }
    var varData_2261 = {};
    var varData_2262 = {
      GetUIFocus: () => handleAction_173,
      RegisterUICallback: () => handleAction_169,
      SendUIAppMessage: () => handleAction_171,
      SendUIMessage: () => handleAction_170,
      SetUIFocus: () => handleAction_172
    };
    varData_966(varData_2261, varData_2262);
    var varData_2263 = [];
    function handleAction_169(param_1, param_2) {
      AddEventHandler("_npx_uiReq:" + param_1, param_2);
      exports["np-ui"].RegisterUIEvent(param_1);
      varData_2263.push(param_1);
    }
    function handleAction_170(param_1) {
      exports["np-ui"].SendUIMessage(param_1);
    }
    function handleAction_171(param_1, param_2) {
      var varData_2264 = {
        source: "np-nui",
        app: param_1,
        data: param_2
      };
      exports["np-ui"].SendUIMessage(varData_2264);
    }
    function handleAction_172(param_1, param_2) {
      exports["np-ui"].SetUIFocus(param_1, param_2);
    }
    function handleAction_173() {
      return exports["np-ui"].GetUIFocus();
    }
    AddEventHandler("_npx_uiReady", () => {
      varData_2263.forEach((param_1) => exports["np-ui"].RegisterUIEvent(param_1));
    });
    var varData_2265 = {};
    var varData_2266 = {
      Manager: () => varData_2295
    };
    varData_966(varData_2265, varData_2266);
    var varData_2267;
    var varData_2268;
    var varData_2269;
    var varData_2270;
    var varData_2271;
    var varData_2272;
    var varData_2273;
    var varData_2274;
    var varData_2275;
    var varData_2276;
    var varData_2277;
    var varData_2278;
    var varData_2279;
    var varData_2280;
    var varData_2281;
    var varData_2282;
    var varData_2283;
    var varData_2284;
    var varData_2285;
    var varData_2286;
    var varData_2287;
    var varData_2288;
    var varData_2289;
    var varData_2290;
    var varData_2291;
    var varData_2292;
    var varData_2293;
    var varData_2294;
    var varData_2295 = class {
      constructor(param_1, param_2) {
        varData_973(this, varData_2271);
        varData_973(this, varData_2273);
        varData_973(this, varData_2275);
        varData_973(this, varData_2277);
        varData_973(this, varData_2279);
        varData_973(this, varData_2281);
        varData_973(this, varData_2283);
        varData_973(this, varData_2285);
        varData_973(this, varData_2287);
        varData_973(this, varData_2289);
        varData_973(this, varData_2291);
        varData_973(this, varData_2293);
        varData_973(this, varData_2267, void 0);
        varData_973(this, varData_2268, void 0);
        varData_973(this, varData_2269, null);
        varData_973(this, varData_2270, void 0);
        varData_974(this, varData_2267, param_1);
        varData_974(this, varData_2268, param_2);
        varData_974(this, varData_2270, null);
        varData_972(this, varData_2268).on("addedToGroup", varData_976(this, varData_2279, varData_2280).bind(this));
        varData_972(this, varData_2268).on("removedFromGroup", varData_976(this, varData_2281, varData_2282).bind(this));
        varData_1992.on("jobs:app:ready", () => {
          if (!varData_972(this, varData_2270)) {
            return;
          }
          varData_976(this, varData_2283, varData_2284).call(this, varData_972(this, varData_2270));
        });
        varData_1992.on("jobs:jobChanged", (param_1_1) => {
          varData_974(this, varData_2269, param_1_1);
          if (!varData_972(this, varData_2270)) {
            return;
          }
          const varData_2296 = (param_1_1 == null ? void 0 : param_1_1.id) === varData_972(this, varData_2267);
          if (!varData_2296) {
            return varData_976(this, varData_2281, varData_2282).call(this, varData_972(this, varData_2270).id);
          }
          varData_976(this, varData_2283, varData_2284).call(this, varData_972(this, varData_2270));
        });
        varData_1992.onNet("__npx_jobs:" + varData_972(this, varData_2267) + ":groups:invite:request", varData_976(this, varData_2273, varData_2274).bind(this));
        varData_1992.onNet("__npx_jobs:" + varData_972(this, varData_2267) + ":groups:invite:received", varData_976(this, varData_2271, varData_2272).bind(this));
        varData_1992.onNet("__npx_jobs:" + varData_972(this, varData_2267) + ":groups:invite:response", varData_976(this, varData_2275, varData_2276).bind(this));
        varData_1992.onNet("__npx_jobs:" + varData_972(this, varData_2267) + ":groups:invite:aborted", varData_976(this, varData_2277, varData_2278).bind(this));
      }
      get group() {
        return varData_972(this, varData_2270);
      }
      async sendGroupInvite(param_1) {
        if (!varData_972(this, varData_2269) || varData_972(this, varData_2269).id !== varData_972(this, varData_2267)) {
          return;
        }
        const [_0x6e8b8c, _0x30c775] = await varData_2032.execute("jobs:app:" + varData_972(this, varData_2267) + ":groups:invite:send", param_1);
        if (!_0x6e8b8c) {
          return varData_2383.phoneNotification("Group Invite", _0x30c775, true);
        }
        varData_2383.phoneNotification("Group Invite", "Invite sent!", true);
        varData_2000.debug("[Job APP] Invite sent! " + _0x30c775);
      }
      async sendGroupJoinRequest(param_1) {
        if (!varData_972(this, varData_2269) || varData_972(this, varData_2269).id !== varData_972(this, varData_2267)) {
          return;
        }
        const [_0x12ad60, _0x19e113] = await varData_2032.execute("jobs:app:" + varData_972(this, varData_2267) + ":groups:invite:request", param_1);
        if (!_0x12ad60) {
          return varData_2383.phoneNotification("Group Invite", _0x19e113, true);
        }
        varData_2383.phoneNotification("Group Invite", "Join request sent!", true);
        varData_2000.debug("[Job APP] Join request sent! " + _0x19e113);
      }
    };
    varData_2267 = /* @__PURE__ */ new WeakMap();
    varData_2268 = /* @__PURE__ */ new WeakMap();
    varData_2269 = /* @__PURE__ */ new WeakMap();
    varData_2270 = /* @__PURE__ */ new WeakMap();
    varData_2271 = /* @__PURE__ */ new WeakSet();
    varData_2272 = async function(param_1, param_2) {
      varData_2000.debug("[Job APP] Invite received! " + param_1 + " " + param_2);
      const varData_2297 = 'Received an invite to join the group "' + param_2 + '"';
      const varData_2298 = await varData_2383.phoneConfirmation("Group Invite", varData_2297, "users", 3e4);
      const [_0x5b2e75, _0x40dc22] = await varData_2032.execute("jobs:app:" + varData_972(this, varData_2267) + ":groups:invite:response", param_1, varData_2298);
      if (!_0x5b2e75) {
        return varData_2383.phoneNotification("Group Invite", _0x40dc22, true);
      }
    };
    varData_2273 = /* @__PURE__ */ new WeakSet();
    varData_2274 = async function(param_1, param_2) {
      varData_2000.debug("[Job APP] Join request received! " + param_1 + " " + param_2);
      const varData_2299 = "Received a group join request from " + param_2;
      const varData_2300 = await varData_2383.phoneConfirmation("Group Invite", varData_2299, "users", 3e4);
      const [_0x116b47, _0x41db48] = await varData_2032.execute("jobs:app:" + varData_972(this, varData_2267) + ":groups:invite:response", param_1, varData_2300);
      if (!_0x116b47) {
        return varData_2383.phoneNotification("Group Invite", _0x41db48, true);
      }
    };
    varData_2275 = /* @__PURE__ */ new WeakSet();
    varData_2276 = function(param_1, param_2) {
      varData_2000.debug("[Job APP] Invite response received! " + param_1 + " " + param_2);
    };
    varData_2277 = /* @__PURE__ */ new WeakSet();
    varData_2278 = function(param_1, param_2) {
      varData_2000.debug("[Job APP] Invite aborted! " + param_1 + " " + param_2);
    };
    varData_2279 = /* @__PURE__ */ new WeakSet();
    varData_2280 = function(param_1) {
      varData_974(this, varData_2270, param_1);
      varData_972(this, varData_2270).on("group:update", varData_976(this, varData_2283, varData_2284).bind(this));
      varData_972(this, varData_2270).on("activity:set", varData_976(this, varData_2291, varData_2292).bind(this, param_1));
      varData_972(this, varData_2270).on("data:update", varData_976(this, varData_2293, varData_2294).bind(this, param_1));
      varData_972(this, varData_2270).on("member:joined", varData_976(this, varData_2285, varData_2286).bind(this, param_1));
      varData_972(this, varData_2270).on("member:left", varData_976(this, varData_2287, varData_2288).bind(this, param_1));
      varData_972(this, varData_2270).on("member:update", varData_976(this, varData_2289, varData_2290).bind(this, param_1));
      varData_2261.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_972(this, varData_2267),
        group: param_1.toJSON()
      });
      varData_2000.debug("[Job APP] Added to group!");
    };
    varData_2281 = /* @__PURE__ */ new WeakSet();
    varData_2282 = function(param_1) {
      varData_974(this, varData_2270, null);
      varData_2261.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_972(this, varData_2267),
        group: null
      });
      varData_2000.debug("[Job APP] Removed from group!");
    };
    varData_2283 = /* @__PURE__ */ new WeakSet();
    varData_2284 = function(param_1) {
      if (varData_972(this, varData_2270) !== param_1) {
        return varData_2000.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_2261.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_972(this, varData_2267),
        group: param_1.toJSON()
      });
      varData_2000.debug("[Job APP] Updated group!");
    };
    varData_2285 = /* @__PURE__ */ new WeakSet();
    varData_2286 = function(param_1, param_2) {
      if (varData_972(this, varData_2270) !== param_1) {
        return varData_2000.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_2261.SendUIAppMessage("phone", {
        action: "jobs:group:addMember",
        jobId: varData_972(this, varData_2267),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_2000.debug("[Job APP] Added member to group!");
    };
    varData_2287 = /* @__PURE__ */ new WeakSet();
    varData_2288 = function(param_1, param_2) {
      if (varData_972(this, varData_2270) !== param_1) {
        return varData_2000.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_2261.SendUIAppMessage("phone", {
        action: "jobs:group:removeMember",
        jobId: varData_972(this, varData_2267),
        groupId: param_1.id,
        memberId: param_2.characterId
      });
      varData_2000.debug("[Job APP] Removed member from group!");
    };
    varData_2289 = /* @__PURE__ */ new WeakSet();
    varData_2290 = function(param_1, param_2) {
      if (varData_972(this, varData_2270) !== param_1) {
        return varData_2000.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_2261.SendUIAppMessage("phone", {
        action: "jobs:group:updateMember",
        jobId: varData_972(this, varData_2267),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_2000.debug("[Job APP] Updated member in group!");
    };
    varData_2291 = /* @__PURE__ */ new WeakSet();
    varData_2292 = function(param_1, param_2) {
      if (varData_972(this, varData_2270) !== param_1) {
        return varData_2000.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      const varData_2301 = (param_2 == null ? void 0 : param_2.toJSON()) ?? null;
      varData_2261.SendUIAppMessage("phone", {
        action: "jobs:group:updateActivity",
        jobId: varData_972(this, varData_2267),
        groupId: param_1.id,
        activity: varData_2301
      });
      varData_2000.debug("[Job APP] Updated activity for group!");
    };
    varData_2293 = /* @__PURE__ */ new WeakSet();
    varData_2294 = function(param_1, param_2, param_3) {
      if (varData_972(this, varData_2270) !== param_1) {
        return varData_2000.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      } else if (param_2 !== "status") {
        return;
      }
      varData_2261.SendUIAppMessage("phone", {
        action: "jobs:group:updateStatus",
        jobId: varData_972(this, varData_2267),
        groupId: param_1.id,
        status: param_3
      });
      varData_2000.debug("[Job APP] Updated status for group!");
    };
    var varData_2302 = async (param_1) => {
      const varData_2303 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasModelLoaded(varData_2303)) {
        return true;
      }
      RequestModel(varData_2303);
      const varData_2304 = await varData_1929.waitForCondition(() => HasModelLoaded(varData_2303), 3e3);
      return !varData_2304;
    };
    var varData_2305 = async (param_1) => {
      if (HasAnimDictLoaded(param_1)) {
        return true;
      }
      RequestAnimDict(param_1);
      const varData_2306 = await varData_1929.waitForCondition(() => HasAnimDictLoaded(param_1), 3e3);
      return !varData_2306;
    };
    var varData_2307 = async (param_1) => {
      if (HasClipSetLoaded(param_1)) {
        return true;
      }
      RequestClipSet(param_1);
      const varData_2308 = await varData_1929.waitForCondition(() => HasClipSetLoaded(param_1), 3e3);
      return !varData_2308;
    };
    var varData_2309 = async (param_1) => {
      if (HasStreamedTextureDictLoaded(param_1)) {
        return true;
      }
      RequestStreamedTextureDict(param_1, true);
      const varData_2310 = await varData_1929.waitForCondition(() => HasStreamedTextureDictLoaded(param_1), 3e3);
      return !varData_2310;
    };
    var varData_2311 = async (param_1, param_2, param_3) => {
      const varData_2312 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasWeaponAssetLoaded(varData_2312)) {
        return true;
      }
      RequestWeaponAsset(varData_2312, param_2, param_3);
      const varData_2313 = await varData_1929.waitForCondition(() => HasWeaponAssetLoaded(varData_2312), 3e3);
      return !varData_2313;
    };
    var varData_2314 = async (param_1) => {
      if (HasNamedPtfxAssetLoaded(param_1)) {
        return true;
      }
      RequestNamedPtfxAsset(param_1);
      const varData_2315 = await varData_1929.waitForCondition(() => HasNamedPtfxAssetLoaded(param_1), 3e3);
      return !varData_2315;
    };
    var varData_2316 = {
      loadModel: varData_2302,
      loadTexture: varData_2309,
      loadAnim: varData_2305,
      loadClipSet: varData_2307,
      loadWeaponAsset: varData_2311,
      loadNamedPtfxAsset: varData_2314
    };
    var varData_2317 = varData_2316;
    var varData_2318 = (param_1, ..._0x14c7bb) => {
      switch (param_1) {
        case "coord": {
          const [_0x5e0541, _0x2a690a, _0xbce448] = _0x14c7bb;
          return AddBlipForCoord(_0x5e0541, _0x2a690a, _0xbce448);
        }
        case "area": {
          const [_0x43cf19, _0x1b397d, _0x4eee37, _0x30beeb, _0x449dcd] = _0x14c7bb;
          return AddBlipForArea(_0x43cf19, _0x1b397d, _0x4eee37, _0x30beeb, _0x449dcd);
        }
        case "radius": {
          const [_0xecf65f, _0x20eed0, _0x4ce944, _0xd30a03] = _0x14c7bb;
          return AddBlipForRadius(_0xecf65f, _0x20eed0, _0x4ce944, _0xd30a03);
        }
        case "pickup": {
          const [_0x3f3dfd] = _0x14c7bb;
          return AddBlipForPickup(_0x3f3dfd);
        }
        case "entity": {
          const [_0x11d4df] = _0x14c7bb;
          return AddBlipForEntity(_0x11d4df);
        }
        default: {
          console.error(new Error("Invalid Blip Type"));
          return 0;
        }
      }
    };
    var varData_2319 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
      if (typeof param_3 === "number") {
        SetBlipSprite(param_1, param_3);
      }
      if (typeof param_4 === "number") {
        SetBlipColour(param_1, param_4);
      }
      if (typeof param_5 === "number") {
        SetBlipAlpha(param_1, param_5);
      }
      if (typeof param_6 === "number") {
        SetBlipScale(param_1, param_6);
      }
      if (typeof param_7 === "boolean") {
        SetBlipRoute(param_1, param_7);
      }
      if (typeof param_8 === "boolean") {
        SetBlipAsShortRange(param_1, param_8);
      }
      if (typeof param_2 === "string") {
        BeginTextCommandSetBlipName("STRING");
        AddTextComponentString(param_2);
        EndTextCommandSetBlipName(param_1);
      }
    };
    var varData_2320 = {
      createBlip: varData_2318,
      applyBlipSettings: varData_2319
    };
    var varData_2321 = varData_2320;
    var dataSet_1 = /* @__PURE__ */ new Set();
    var dataMap_5 = /* @__PURE__ */ new Map();
    var dataSet_2 = /* @__PURE__ */ new Set();
    on("np-polyzone:enter", (param_1, param_2) => {
      dataSet_1.add(param_1);
      if (param_2 == null ? void 0 : param_2.id) {
        dataSet_1.add(param_1 + "-" + param_2.id);
      }
      if (dataSet_2.has(param_1)) {
        varData_1992.emitNet("__sdk:zones:" + param_1 + ":enter", param_2);
      }
      const varData_2322 = dataMap_5.get(param_1 + "-enter");
      if (varData_2322 === void 0) {
        return;
      }
      for (const varData_2323 of varData_2322) {
        try {
          varData_2323(param_2);
        } catch (err) {
          console.log(err);
        }
      }
    });
    on("np-polyzone:exit", (param_1, param_2) => {
      dataSet_1.delete(param_1);
      if (param_2 == null ? void 0 : param_2.id) {
        dataSet_1.delete(param_1 + "-" + param_2.id);
      }
      if (dataSet_2.has(param_1)) {
        varData_1992.emitNet("__sdk:zones:" + param_1 + ":exit", param_2);
      }
      const varData_2324 = dataMap_5.get(param_1 + "-exit");
      if (varData_2324 === void 0) {
        return;
      }
      for (const varData_2325 of varData_2324) {
        try {
          varData_2325(param_2);
        } catch (err) {
          console.log(err);
        }
      }
    });
    var varData_2326 = (param_1, param_2) => {
      return dataSet_1.has(param_2 ? param_1 + "-" + param_2 : param_1);
    };
    var varData_2327 = (param_1, param_2) => {
      const varData_2328 = param_1 + "-enter";
      const varData_2329 = dataMap_5.get(varData_2328) ?? [];
      if (!dataMap_5.has(varData_2328)) {
        dataMap_5.set(varData_2328, varData_2329);
      }
      varData_2329.push(param_2);
    };
    var varData_2330 = (param_1, param_2) => {
      const varData_2331 = param_1 + "-exit";
      const varData_2332 = dataMap_5.get(varData_2331) ?? [];
      if (!dataMap_5.has(varData_2331)) {
        dataMap_5.set(varData_2331, varData_2332);
      }
      varData_2332.push(param_2);
    };
    var varData_2333 = (param_1, param_2, param_3, param_4, _0x26a814 = {}) => {
      var varData_2334 = {
        ...param_4
      };
      varData_2334.data = _0x26a814;
      varData_2334.id = param_1;
      const varData_2335 = varData_2334;
      varData_2335.data.id = param_1;
      exports["np-polyzone"].AddPolyZone(param_2, param_3, varData_2335);
    };
    var varData_2336 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x45fdee = {}) => {
      var varData_2337 = {
        ...param_6
      };
      varData_2337.data = _0x45fdee;
      varData_2337.id = param_1;
      const varData_2338 = varData_2337;
      varData_2338.data.id = param_1;
      exports["np-polyzone"].AddBoxZone(param_2, param_3, param_4, param_5, varData_2338);
    };
    var varData_2339 = (param_1, param_2, param_3, param_4, param_5, _0x4aa68c = {}) => {
      var varData_2340 = {
        ...param_5
      };
      varData_2340.data = _0x4aa68c;
      varData_2340.id = param_1;
      const varData_2341 = varData_2340;
      varData_2341.data.id = param_1;
      exports["np-polyzone"].AddCircleZone(param_2, param_3, param_4, varData_2341);
    };
    var varData_2342 = (param_1, param_2, param_3, param_4, _0x4ab8eb = {}) => {
      var varData_2343 = {
        ...param_4
      };
      varData_2343.data = _0x4ab8eb;
      const varData_2344 = varData_2343;
      varData_2344.data.id = param_1;
      exports["np-polyzone"].AddEntityZone(param_2, param_3, varData_2344);
    };
    var varData_2345 = (param_1, param_2) => {
      exports["np-polyzone"].RemoveZone(param_1, param_2);
      dataSet_1.delete(param_1 + "-" + param_2);
      dataSet_2.delete(param_1);
    };
    var varData_2346 = (param_1) => {
      dataSet_2.add(param_1);
    };
    var varData_2347 = {
      isActive: varData_2326,
      onEnter: varData_2327,
      onExit: varData_2330,
      addPolyZone: varData_2333,
      addBoxZone: varData_2336,
      addCircleZone: varData_2339,
      addEntityZone: varData_2342,
      removeZone: varData_2345,
      setAsNetworked: varData_2346
    };
    var varData_2348 = varData_2347;
    var varData_2349 = (param_1, param_2, param_3, param_4) => {
      var varData_2350 = {
        id: param_1,
        coords: [param_2.x, param_2.y, param_2.z],
        options: param_3,
        context: param_4
      };
      const varData_2351 = varData_2350;
      globalThis.exports.interactions.AddInteraction(varData_2351);
    };
    var varData_2352 = (param_1, param_2, param_3, param_4) => {
      var varData_2353 = {
        id: param_1,
        options: param_3,
        context: param_4
      };
      const varData_2354 = varData_2353;
      globalThis.exports.interactions.AddInteractionByModel(param_2, varData_2354);
    };
    var varData_2355 = (param_1, param_2, param_3) => {
      var varData_2356 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2357 = varData_2356;
      varData_2357.context.isPlayer = true;
      globalThis.exports.interactions.AddPedInteraction(varData_2357);
    };
    var varData_2358 = (param_1, param_2, param_3) => {
      var varData_2359 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2360 = varData_2359;
      globalThis.exports.interactions.AddPedInteraction(varData_2360);
    };
    var varData_2361 = (param_1) => {
      return globalThis.exports.interactions.DoesInteractionExists(param_1);
    };
    var varData_2362 = (param_1, param_2, param_3) => {
      var varData_2363 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2364 = varData_2363;
      globalThis.exports.interactions.AddVehicleInteraction(varData_2364);
    };
    var varData_2365 = (param_1) => {
      globalThis.exports.interactions.RemoveInteraction(param_1);
    };
    var varData_2366 = (param_1) => {
      globalThis.exports.interactions.RemoveVehicleInteraction(param_1);
    };
    var varData_2367 = (param_1) => {
      globalThis.exports.interactions.RemovePedInteraction(param_1);
    };
    var varData_2368 = (param_1, param_2, _0x3e7594 = false, _0x327ada = null, _0x190039 = true, _0x122a83 = null) => {
      return new Promise((param_1_1) => {
        globalThis.exports["np-taskbar"].taskBar(param_1, param_2, _0x3e7594, _0x190039, _0x122a83, false, param_1_1, _0x327ada == null ? void 0 : _0x327ada.distance, _0x327ada == null ? void 0 : _0x327ada.entity);
      });
    };
    var varData_2369 = (param_1, param_2, param_3, param_4) => {
      return new Promise((param_1_1) => {
        globalThis.exports["np-phone"].DoPhoneConfirmation(param_1, param_2, param_3, param_1_1, param_4);
      });
    };
    var varData_2370 = (param_1, param_2, _0x16a7d3 = true, _0x383b41 = "home-screen") => {
      var varData_2371 = {
        action: "notification",
        target_app: _0x383b41,
        title: param_1,
        body: param_2,
        show_even_if_app_active: _0x16a7d3
      };
      var varData_2372 = {
        source: "np-nui",
        app: "phone",
        data: varData_2371
      };
      globalThis.exports["np-ui"].SendUIMessage(varData_2372);
    };
    var varData_2373 = (param_1, param_2, param_3, param_4, param_5, param_6, _0xf8a00c = 0, _0x9cd594 = true) => {
      SetTextColour(param_4[0], param_4[1], param_4[2], param_4[3]);
      if (_0x9cd594) {
        SetTextOutline();
      }
      SetTextScale(0, param_5);
      SetTextFont(param_6 ?? 0);
      SetTextJustification(_0xf8a00c);
      if (_0xf8a00c === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(param_3 ?? "Dummy text");
      EndTextCommandDisplayText(param_1, param_2);
    };
    var varData_2374 = (param_1, param_2, param_3, param_4, _0x514dd3 = 4, _0x17e8f1 = true, param_7) => {
      SetDrawOrigin(param_1.x, param_1.y, param_1.z, 0);
      const varData_2375 = Math.max(varData_1910.getMapRange([0, 10], [0.4, 0.25], param_2), 0.1);
      varData_2373(0, 0, param_3, param_4, varData_2375, _0x514dd3, 0, _0x17e8f1);
      if (param_7) {
        DrawRect(2e-3, param_7.height / 2, param_7.width, param_7.height, param_7.color[0], param_7.color[1], param_7.color[2], param_7.color[3]);
      }
      ClearDrawOrigin();
    };
    var varData_2376 = (param_1, param_2, param_3, param_4) => {
      globalThis.exports.contacts.open(param_1, param_2, param_3, param_4, true);
    };
    var varData_2377 = (param_1) => {
      globalThis.exports.hud.AddOrUpdateHudBar(param_1);
    };
    var varData_2378 = (param_1) => {
      globalThis.exports.hud.RemoveHudBar(param_1);
    };
    async function handleAction_174(param_1) {
      const varData_2379 = (param_1_1) => {
        for (const varData_2380 of param_1) {
          if (varData_2380._type === "number" && isNaN(param_1_1[varData_2380.name])) {
            return false;
          }
          if (varData_2380._type === "text" && typeof param_1_1[varData_2380.name] !== "string") {
            return false;
          }
        }
        return true;
      };
      return await varData_1942.Sync["np-ui"].OpenInputMenu(param_1, varData_2379);
    }
    async function handleAction_175(param_1, param_2) {
      const varData_2381 = {
        info: 1,
        error: 2
      };
      emit("DoLongHudText", param_1, varData_2381[param_2]);
    }
    var varData_2382 = {
      addInteraction: varData_2349,
      addInteractionByModel: varData_2352,
      addPlayerInteraction: varData_2355,
      addPedInteraction: varData_2358,
      addVehicleInteraction: varData_2362,
      removeInteraction: varData_2365,
      removePlayerInteraction: varData_2367,
      removePedInteraction: varData_2367,
      removeVehicleInteraction: varData_2366,
      doesInteractionExists: varData_2361,
      taskBar: varData_2368,
      phoneConfirmation: varData_2369,
      phoneNotification: varData_2370,
      drawText: varData_2373,
      drawText3D: varData_2374,
      customContact: varData_2376,
      AddOrUpdateHudBar: varData_2377,
      RemoveHudBar: varData_2378,
      openInputMenu: handleAction_174,
      displayNotification: handleAction_175
    };
    var varData_2383 = varData_2382;
    var varData_2384 = async (param_1) => {
      return globalThis.exports["np-heists"].BankMinigame(param_1);
    };
    var varData_2385 = async (param_1) => {
      return globalThis.exports["np-heists"].DDRMinigame(param_1);
    };
    var varData_2386 = async (param_1) => {
      return globalThis.exports.skillchecks.DirectionMinigame(param_1);
    };
    var varData_2387 = async () => {
      return globalThis.exports.skillchecks.DrillingMinigame();
    };
    var varData_2388 = async (param_1) => {
      return globalThis.exports.skillchecks.FlipMinigame(param_1);
    };
    var varData_2389 = async (param_1) => {
      return globalThis.exports.skillchecks.FloodMinigame(param_1);
    };
    var varData_2390 = async (param_1) => {
      return globalThis.exports.skillchecks.TaskBarMinigame(param_1.difficulty, param_1.gap, param_1.iterations, param_1.useReverse);
    };
    var varData_2391 = async (param_1) => {
      return globalThis.exports.skillchecks.MazeMinigame(param_1);
    };
    var varData_2392 = async (param_1) => {
      return globalThis.exports.skillchecks.CrackSafe(param_1.locks);
    };
    var varData_2393 = async (param_1) => {
      return globalThis.exports.skillchecks.SameMinigame(param_1);
    };
    var varData_2394 = async (param_1) => {
      return globalThis.exports["np-heists"].ThermiteMinigame(param_1);
    };
    var varData_2395 = async (param_1) => {
      return globalThis.exports.skillchecks.UntangleMinigame(param_1);
    };
    var varData_2396 = async (param_1) => {
      return globalThis.exports["np-heists"].VarMinigame(param_1);
    };
    var varData_2397 = async (param_1) => {
      return globalThis.exports.skillchecks.WordsMinigame(param_1);
    };
    var varData_2398 = async (param_1) => {
      return globalThis.exports.skillchecks.AlphabetMinigame(param_1);
    };
    var varData_2399 = async (param_1) => {
      return globalThis.exports.skillchecks.LockpickMinigame(param_1);
    };
    var varData_2400 = async (param_1) => {
      return globalThis.exports.skillchecks.PinCrackMinigame(param_1);
    };
    var varData_2401 = async (param_1) => {
      return globalThis.exports.skillchecks.TerminalMinigame(param_1);
    };
    var varData_2402 = async (param_1) => {
      return globalThis.exports.skillchecks.SequenceMinigame(param_1);
    };
    var varData_2403 = async (param_1) => {
      return globalThis.exports.skillchecks.SudokuMinigame(param_1);
    };
    var varData_2404 = async (param_1) => {
      return globalThis.exports.skillchecks.MemoryMinigame(param_1);
    };
    var varData_2405 = {
      BankMinigame: varData_2384,
      DDRMinigame: varData_2385,
      DirectionMinigame: varData_2386,
      DrillingMinigame: varData_2387,
      FlipMinigame: varData_2388,
      FloodMinigame: varData_2389,
      TaskBarMinigame: varData_2390,
      MazeMinigame: varData_2391,
      CrackSafe: varData_2392,
      SameMinigame: varData_2393,
      ThermiteMinigame: varData_2394,
      UntangleMinigame: varData_2395,
      VarMinigame: varData_2396,
      WordsMinigame: varData_2397,
      AlphabetMinigame: varData_2398,
      LockpickMinigame: varData_2399,
      PinCrackMinigame: varData_2400,
      TerminalMinigame: varData_2401,
      SequenceMinigame: varData_2402,
      SudokuMinigame: varData_2403,
      MemoryMinigame: varData_2404
    };
    var varData_2406 = varData_2405;
    var varData_2407 = {
      async hasPermission(param_1, _0x5144b2 = {}) {
        return await exports.permissions.hasPermission(param_1, _0x5144b2);
      },
      async getUserPermissions() {
        return await exports.permissions.getUserPermissions();
      },
      async getCharPermissions(param_1) {
        return await exports.permissions.getCharPermissions();
      },
      async getTotalPermissions() {
        return await exports.permissions.getTotalPermissions();
      }
    };
    var varData_2408 = {
      RegisterAction: (param_1, param_2, param_3) => {
        return varData_1942.Sync.contacts.RegisterAction(param_1, param_2, param_3);
      }
    };
    var varData_2409 = {
      RegisterEditorHandlerClient: async (param_1) => {
        return await globalThis.exports.editor.RegisterEditorHandlerClient(param_1);
      }
    };
    var varData_2410;
    var varData_2411;
    var varData_2412;
    var varData_2413;
    var varData_2414;
    var varData_2415;
    var varData_2416;
    var varData_2417;
    var varData_2418;
    var varData_2419;
    var varData_2420 = class {
      constructor(param_1) {
        varData_973(this, varData_2418);
        varData_973(this, varData_2410, void 0);
        varData_973(this, varData_2411, void 0);
        varData_973(this, varData_2412, void 0);
        varData_973(this, varData_2413, void 0);
        varData_973(this, varData_2414, void 0);
        varData_973(this, varData_2415, void 0);
        varData_973(this, varData_2416, false);
        varData_973(this, varData_2417, []);
        varData_974(this, varData_2410, param_1.codename);
        varData_974(this, varData_2411, param_1.version);
        varData_974(this, varData_2412, GetCurrentResourceName());
        varData_974(this, varData_2413, "np-fx");
        emit("__npx_core:handshake", param_1, varData_976(this, varData_2418, varData_2419).bind(this));
        varData_2093.register("__npx_core:handshake", async (param_1_1) => {
          if (param_1_1.codename !== varData_972(this, varData_2410)) {
            return;
          }
          const varData_2421 = await varData_1929.waitForCondition(() => varData_972(this, varData_2416), 1e4);
          if (varData_2421) {
            return;
          }
          return {
            API_URL: varData_972(this, varData_2414),
            API_KEY: varData_972(this, varData_2415)
          };
        });
      }
      get codename() {
        return varData_972(this, varData_2410);
      }
      get version() {
        return varData_972(this, varData_2411);
      }
      get isReady() {
        return varData_972(this, varData_2416);
      }
      onReady(param_1) {
        if (varData_972(this, varData_2416)) {
          param_1();
        } else {
          varData_972(this, varData_2417).push(param_1);
        }
      }
    };
    varData_2410 = /* @__PURE__ */ new WeakMap();
    varData_2411 = /* @__PURE__ */ new WeakMap();
    varData_2412 = /* @__PURE__ */ new WeakMap();
    varData_2413 = /* @__PURE__ */ new WeakMap();
    varData_2414 = /* @__PURE__ */ new WeakMap();
    varData_2415 = /* @__PURE__ */ new WeakMap();
    varData_2416 = /* @__PURE__ */ new WeakMap();
    varData_2417 = /* @__PURE__ */ new WeakMap();
    varData_2418 = /* @__PURE__ */ new WeakSet();
    varData_2419 = async function(param_1) {
      varData_974(this, varData_2414, param_1.API_URL);
      varData_974(this, varData_2415, param_1.API_KEY);
      varData_974(this, varData_2416, true);
      for (const varData_2422 of varData_972(this, varData_2417)) {
        varData_2422();
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
    function handleAction_176(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2423 = param_1[param_6](param_7);
        var varData_2424 = varData_2423.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2423.done) {
        param_2(varData_2424);
      } else {
        Promise.resolve(varData_2424).then(param_4, param_5);
      }
    }
    function handleAction_177(param_1) {
      return function() {
        var varData_2425 = this;
        var varData_2426 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2427 = param_1.apply(varData_2425, varData_2426);
          function handleAction_178(param_1_2) {
            handleAction_176(varData_2427, param_1_1, param_2, handleAction_178, handleAction_179, "next", param_1_2);
          }
          function handleAction_179(param_1_2) {
            handleAction_176(varData_2427, param_1_1, param_2, handleAction_178, handleAction_179, "throw", param_1_2);
          }
          handleAction_178(void 0);
        });
      };
    }
    function handleAction_180(param_1, param_2) {
      var varData_2428;
      var varData_2429;
      var varData_2430;
      var varData_2431;
      var varData_2432 = {
        label: 0,
        sent: function() {
          if (varData_2430[0] & 1) {
            throw varData_2430[1];
          }
          return varData_2430[1];
        },
        trys: [],
        ops: []
      };
      varData_2431 = {
        next: handleAction_181(0),
        throw: handleAction_181(1),
        return: handleAction_181(2)
      };
      if (typeof Symbol === "function") {
        varData_2431[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2431;
      function handleAction_181(param_1_1) {
        return function(param_1_2) {
          return handleAction_182([param_1_1, param_1_2]);
        };
      }
      function handleAction_182(param_1_1) {
        if (varData_2428) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2432) {
          try {
            varData_2428 = 1;
            if (varData_2429 && (varData_2430 = param_1_1[0] & 2 ? varData_2429.return : param_1_1[0] ? varData_2429.throw || ((varData_2430 = varData_2429.return) && varData_2430.call(varData_2429), 0) : varData_2429.next) && !(varData_2430 = varData_2430.call(varData_2429, param_1_1[1])).done) {
              return varData_2430;
            }
            varData_2429 = 0;
            if (varData_2430) {
              param_1_1 = [param_1_1[0] & 2, varData_2430.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2430 = param_1_1;
                break;
              case 4:
                varData_2432.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2432.label++;
                varData_2429 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2432.ops.pop();
                varData_2432.trys.pop();
                continue;
              default:
                if (!(varData_2430 = varData_2432.trys, varData_2430 = varData_2430.length > 0 && varData_2430[varData_2430.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2432 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2430 || param_1_1[1] > varData_2430[0] && param_1_1[1] < varData_2430[3])) {
                  varData_2432.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2432.label < varData_2430[1]) {
                  varData_2432.label = varData_2430[1];
                  varData_2430 = param_1_1;
                  break;
                }
                if (varData_2430 && varData_2432.label < varData_2430[2]) {
                  varData_2432.label = varData_2430[2];
                  varData_2432.ops.push(param_1_1);
                  break;
                }
                if (varData_2430[2]) {
                  varData_2432.ops.pop();
                }
                varData_2432.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2432);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2429 = 0;
          } finally {
            varData_2428 = varData_2430 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2433 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2433;
      }
    }
    function handleAction_183() {
      return handleAction_184.apply(this, arguments);
    }
    function handleAction_184() {
      handleAction_184 = handleAction_177(function() {
        return handleAction_180(this, function(param_1) {
          return [2];
        });
      });
      return handleAction_184.apply(this, arguments);
    }
    var dataMap_6 = /* @__PURE__ */ new Map();
    function handleAction_185(param_1, param_2) {
      var varData_2434;
      if (param_2 === "player") {
        var targetPlayer = GetPlayerFromServerId(param_1);
        if (targetPlayer === -1 && GetPlayerServerId(PlayerId()) !== param_1) {
          return;
        }
        varData_2434 = GetPlayerPed(targetPlayer);
      } else {
        if (!NetworkDoesEntityExistWithNetworkId(param_1)) {
          return;
        }
        varData_2434 = NetworkGetEntityFromNetworkId(param_1);
      }
      return varData_2434;
    }
    onNet("np-fx:playEntitySound", (function() {
      var varData_2435 = handleAction_177(function(param_1, param_2, param_3, param_4) {
        var varData_2436;
        var varData_2437;
        var varData_2438;
        var varData_2439;
        var varData_2440;
        var varData_2441;
        var varData_2442;
        var varData_2443;
        var varData_2444;
        var varData_2445;
        var varData_2446;
        return handleAction_180(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2436 = handleAction_185(param_3, param_2);
              if (!DoesEntityExist(varData_2436)) {
                return [2];
              }
              var varData_2447 = {
                active: true,
                sounds: [],
                entity: varData_2436
              };
              varData_2437 = varData_2447;
              dataMap_6.set(param_1, varData_2437);
              varData_2438 = (function() {
                var varData_2448 = handleAction_177(function(param_1_2) {
                  var varData_2449;
                  var varData_2450;
                  var varData_2451;
                  return handleAction_180(this, function(param_1_3) {
                    switch (param_1_3.label) {
                      case 0:
                        varData_2449 = param_1_2.data;
                        return [4, handleAction_105(varData_2436, varData_2449.sound, varData_2449.ref, varData_2449.unk, varData_2449.bank, true)];
                      case 1:
                        varData_2450 = param_1_3.sent();
                        if (param_1_2.duration === void 0) {
                          varData_2451 = setInterval(function() {
                            if (!HasSoundFinished(varData_2450)) {
                              return;
                            }
                            handleAction_109(varData_2436, varData_2450);
                            clearInterval(varData_2451);
                          }, 1e3);
                        } else {
                          handleAction_55(param_1_2.duration).then(function() {
                            return handleAction_109(varData_2436, varData_2450);
                          });
                        }
                        return [2, varData_2450];
                    }
                  });
                });
                return function _0xb4a9a0(param_1_2) {
                  return varData_2448.apply(this, arguments);
                };
              })();
              varData_2439 = true;
              varData_2440 = false;
              varData_2441 = void 0;
              param_1_1.label = 1;
            case 1:
              param_1_1.trys.push([1, 7, 8, 9]);
              varData_2442 = param_4[Symbol.iterator]();
              param_1_1.label = 2;
            case 2:
              if (varData_2439 = (varData_2443 = varData_2442.next()).done) {
                return [3, 6];
              }
              varData_2444 = varData_2443.value;
              if (!varData_2437.active) {
                return [2];
              }
              return [4, varData_2438(varData_2444)];
            case 3:
              varData_2445 = param_1_1.sent();
              varData_2437.sounds.push(varData_2445);
              if (!varData_2444.delay) {
                return [3, 5];
              }
              return [4, handleAction_55(varData_2444.delay)];
            case 4:
              param_1_1.sent();
              param_1_1.label = 5;
            case 5:
              varData_2439 = true;
              return [3, 2];
            case 6:
              return [3, 9];
            case 7:
              varData_2446 = param_1_1.sent();
              varData_2440 = true;
              varData_2441 = varData_2446;
              return [3, 9];
            case 8:
              try {
                if (!varData_2439 && varData_2442.return != null) {
                  varData_2442.return();
                }
              } finally {
                if (varData_2440) {
                  throw varData_2441;
                }
              }
              return [7];
            case 9:
              return [2];
          }
        });
      });
      return function(param_1, param_2, param_3, param_4) {
        return varData_2435.apply(this, arguments);
      };
    })());
    onNet("np-fx:stopEntitySound", function(param_1) {
      var varData_2452 = dataMap_6.get(param_1);
      if (varData_2452 === void 0) {
        return;
      }
      varData_2452.active = false;
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2453 = void 0;
      try {
        for (var loopIdx = varData_2452.sounds[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2454 = loopIdx_1.value;
          handleAction_109(varData_2452.entity, varData_2454);
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2453 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2453;
          }
        }
      }
      dataMap_6.delete(param_1);
    });
    onNet("np-fx:cleanUpEntitySounds", function(param_1, param_2) {
      var varData_2455 = handleAction_185(param_1, param_2);
      if (varData_2455 === void 0 || varData_2455 === -1) {
        return;
      }
      handleAction_110(varData_2455);
    });
    onNet("np-fx:playCoordSound", (function() {
      var varData_2456 = handleAction_177(function(param_1, param_2, param_3) {
        var varData_2457;
        var varData_2458;
        var varData_2459;
        var varData_2460;
        var varData_2461;
        var varData_2462;
        var varData_2463;
        var varData_2464;
        var varData_2465;
        var varData_2466;
        return handleAction_180(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2457 = {
                active: true,
                sounds: []
              };
              dataMap_6.set(param_1, varData_2457);
              varData_2458 = (function() {
                var varData_2467 = handleAction_177(function(param_1_2) {
                  var varData_2468;
                  var varData_2469;
                  var varData_2470;
                  return handleAction_180(this, function(param_1_3) {
                    switch (param_1_3.label) {
                      case 0:
                        varData_2468 = param_1_2.data;
                        return [4, handleAction_111(param_2, varData_2468.sound, varData_2468.ref, varData_2468.range, varData_2468.bank, true)];
                      case 1:
                        varData_2469 = param_1_3.sent();
                        if (param_1_2.duration !== void 0) {
                          return [3, 2];
                        }
                        varData_2470 = setInterval(function() {
                          if (!HasSoundFinished(varData_2469)) {
                            return;
                          }
                          handleAction_113(varData_2469);
                          clearInterval(varData_2470);
                        }, 1e3);
                        return [3, 4];
                      case 2:
                        return [4, handleAction_55(param_1_2.duration).then(function() {
                          return handleAction_113(varData_2469);
                        })];
                      case 3:
                        param_1_3.sent();
                        param_1_3.label = 4;
                      case 4:
                        return [2, varData_2469];
                    }
                  });
                });
                return function _0x2c5677(param_1_2) {
                  return varData_2467.apply(this, arguments);
                };
              })();
              varData_2459 = true;
              varData_2460 = false;
              varData_2461 = void 0;
              param_1_1.label = 1;
            case 1:
              param_1_1.trys.push([1, 7, 8, 9]);
              varData_2462 = param_3[Symbol.iterator]();
              param_1_1.label = 2;
            case 2:
              if (varData_2459 = (varData_2463 = varData_2462.next()).done) {
                return [3, 6];
              }
              varData_2464 = varData_2463.value;
              if (!varData_2457.active) {
                return [2];
              }
              return [4, varData_2458(varData_2464)];
            case 3:
              varData_2465 = param_1_1.sent();
              varData_2457.sounds.push(varData_2465);
              if (!varData_2464.delay) {
                return [3, 5];
              }
              return [4, handleAction_55(varData_2464.delay)];
            case 4:
              param_1_1.sent();
              param_1_1.label = 5;
            case 5:
              varData_2459 = true;
              return [3, 2];
            case 6:
              return [3, 9];
            case 7:
              varData_2466 = param_1_1.sent();
              varData_2460 = true;
              varData_2461 = varData_2466;
              return [3, 9];
            case 8:
              try {
                if (!varData_2459 && varData_2462.return != null) {
                  varData_2462.return();
                }
              } finally {
                if (varData_2460) {
                  throw varData_2461;
                }
              }
              return [7];
            case 9:
              return [2];
          }
        });
      });
      return function(param_1, param_2, param_3) {
        return varData_2456.apply(this, arguments);
      };
    })());
    onNet("np-fx:stopCoordSound", function(param_1) {
      var varData_2471 = dataMap_6.get(param_1);
      if (varData_2471 === void 0) {
        return;
      }
      varData_2471.active = false;
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2472 = void 0;
      try {
        for (var loopIdx = varData_2471.sounds[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2473 = loopIdx_1.value;
          handleAction_113(varData_2473);
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2472 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2472;
          }
        }
      }
      dataMap_6.delete(param_1);
    });
    onNet("np-fx:cleanUpCoordSounds", function(param_1, param_2) {
      handleAction_114(param_1, param_2);
    });
    varData_2032.register("np-fx:object:place", (function() {
      var varData_2474 = handleAction_177(function(param_1, param_2, param_3) {
        var varData_2475;
        return handleAction_180(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1942.Async["np-objects"].PlaceObjectAsync(param_3, {
                collision: false,
                groundSnap: true,
                adjustZ: false,
                distance: 3,
                surfaceOffset: 0.1
              }, function(param_1_2, param_2_1, param_3_1) {
                return true;
              })];
            case 1:
              varData_2475 = param_1_1.sent();
              return [2, varData_2475];
          }
        });
      });
      return function(param_1, param_2, param_3) {
        return varData_2474.apply(this, arguments);
      };
    })());
    ;
    function handleAction_186(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2476 = param_1[param_6](param_7);
        var varData_2477 = varData_2476.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2476.done) {
        param_2(varData_2477);
      } else {
        Promise.resolve(varData_2477).then(param_4, param_5);
      }
    }
    function handleAction_187(param_1) {
      return function() {
        var varData_2478 = this;
        var varData_2479 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2480 = param_1.apply(varData_2478, varData_2479);
          function handleAction_188(param_1_2) {
            handleAction_186(varData_2480, param_1_1, param_2, handleAction_188, handleAction_189, "next", param_1_2);
          }
          function handleAction_189(param_1_2) {
            handleAction_186(varData_2480, param_1_1, param_2, handleAction_188, handleAction_189, "throw", param_1_2);
          }
          handleAction_188(void 0);
        });
      };
    }
    function handleAction_190(param_1, param_2) {
      var varData_2481;
      var varData_2482;
      var varData_2483;
      var varData_2484;
      var varData_2485 = {
        label: 0,
        sent: function() {
          if (varData_2483[0] & 1) {
            throw varData_2483[1];
          }
          return varData_2483[1];
        },
        trys: [],
        ops: []
      };
      varData_2484 = {
        next: handleAction_191(0),
        throw: handleAction_191(1),
        return: handleAction_191(2)
      };
      if (typeof Symbol === "function") {
        varData_2484[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2484;
      function handleAction_191(param_1_1) {
        return function(param_1_2) {
          return handleAction_192([param_1_1, param_1_2]);
        };
      }
      function handleAction_192(param_1_1) {
        if (varData_2481) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2485) {
          try {
            varData_2481 = 1;
            if (varData_2482 && (varData_2483 = param_1_1[0] & 2 ? varData_2482.return : param_1_1[0] ? varData_2482.throw || ((varData_2483 = varData_2482.return) && varData_2483.call(varData_2482), 0) : varData_2482.next) && !(varData_2483 = varData_2483.call(varData_2482, param_1_1[1])).done) {
              return varData_2483;
            }
            varData_2482 = 0;
            if (varData_2483) {
              param_1_1 = [param_1_1[0] & 2, varData_2483.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2483 = param_1_1;
                break;
              case 4:
                varData_2485.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2485.label++;
                varData_2482 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2485.ops.pop();
                varData_2485.trys.pop();
                continue;
              default:
                if (!(varData_2483 = varData_2485.trys, varData_2483 = varData_2483.length > 0 && varData_2483[varData_2483.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2485 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2483 || param_1_1[1] > varData_2483[0] && param_1_1[1] < varData_2483[3])) {
                  varData_2485.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2485.label < varData_2483[1]) {
                  varData_2485.label = varData_2483[1];
                  varData_2483 = param_1_1;
                  break;
                }
                if (varData_2483 && varData_2485.label < varData_2483[2]) {
                  varData_2485.label = varData_2483[2];
                  varData_2485.ops.push(param_1_1);
                  break;
                }
                if (varData_2483[2]) {
                  varData_2485.ops.pop();
                }
                varData_2485.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2485);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2482 = 0;
          } finally {
            varData_2481 = varData_2483 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2486 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2486;
      }
    }
    function handleAction_193() {
      return handleAction_194.apply(this, arguments);
    }
    function handleAction_194() {
      handleAction_194 = handleAction_187(function() {
        return handleAction_190(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, handleAction_183()];
            case 1:
              param_1.sent();
              return [2];
          }
        });
      });
      return handleAction_194.apply(this, arguments);
    }
    ;
    function handleAction_195(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2487 = param_1[param_6](param_7);
        var varData_2488 = varData_2487.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2487.done) {
        param_2(varData_2488);
      } else {
        Promise.resolve(varData_2488).then(param_4, param_5);
      }
    }
    function handleAction_196(param_1) {
      return function() {
        var varData_2489 = this;
        var varData_2490 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2491 = param_1.apply(varData_2489, varData_2490);
          function handleAction_197(param_1_2) {
            handleAction_195(varData_2491, param_1_1, param_2, handleAction_197, handleAction_198, "next", param_1_2);
          }
          function handleAction_198(param_1_2) {
            handleAction_195(varData_2491, param_1_1, param_2, handleAction_197, handleAction_198, "throw", param_1_2);
          }
          handleAction_197(void 0);
        });
      };
    }
    function handleAction_199(param_1, param_2) {
      var varData_2492;
      var varData_2493;
      var varData_2494;
      var varData_2495;
      var varData_2496 = {
        label: 0,
        sent: function() {
          if (varData_2494[0] & 1) {
            throw varData_2494[1];
          }
          return varData_2494[1];
        },
        trys: [],
        ops: []
      };
      varData_2495 = {
        next: handleAction_200(0),
        throw: handleAction_200(1),
        return: handleAction_200(2)
      };
      if (typeof Symbol === "function") {
        varData_2495[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2495;
      function handleAction_200(param_1_1) {
        return function(param_1_2) {
          return handleAction_201([param_1_1, param_1_2]);
        };
      }
      function handleAction_201(param_1_1) {
        if (varData_2492) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2496) {
          try {
            varData_2492 = 1;
            if (varData_2493 && (varData_2494 = param_1_1[0] & 2 ? varData_2493.return : param_1_1[0] ? varData_2493.throw || ((varData_2494 = varData_2493.return) && varData_2494.call(varData_2493), 0) : varData_2493.next) && !(varData_2494 = varData_2494.call(varData_2493, param_1_1[1])).done) {
              return varData_2494;
            }
            varData_2493 = 0;
            if (varData_2494) {
              param_1_1 = [param_1_1[0] & 2, varData_2494.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2494 = param_1_1;
                break;
              case 4:
                varData_2496.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2496.label++;
                varData_2493 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2496.ops.pop();
                varData_2496.trys.pop();
                continue;
              default:
                if (!(varData_2494 = varData_2496.trys, varData_2494 = varData_2494.length > 0 && varData_2494[varData_2494.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2496 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2494 || param_1_1[1] > varData_2494[0] && param_1_1[1] < varData_2494[3])) {
                  varData_2496.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2496.label < varData_2494[1]) {
                  varData_2496.label = varData_2494[1];
                  varData_2494 = param_1_1;
                  break;
                }
                if (varData_2494 && varData_2496.label < varData_2494[2]) {
                  varData_2496.label = varData_2494[2];
                  varData_2496.ops.push(param_1_1);
                  break;
                }
                if (varData_2494[2]) {
                  varData_2496.ops.pop();
                }
                varData_2496.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2496);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2493 = 0;
          } finally {
            varData_2492 = varData_2494 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2497 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2497;
      }
    }
    function handleAction_202() {
    }
    varData_1992.onNet("laxative", (function() {
      var varData_2498 = handleAction_196(function(param_1) {
        var varData_2499;
        var varData_2500;
        var varData_2501;
        var varData_2502;
        var varData_2503;
        var varData_2504;
        var varData_2505;
        var varData_2506;
        var varData_2507;
        var varData_2508;
        return handleAction_199(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2499 = param_1 === "wifes";
              varData_2500 = param_1 === "goldenbuns";
              varData_2501 = varData_2499 || varData_2500;
              emit("animation:PlayAnimation", "eat");
              return [4, varData_1929.wait(5e3)];
            case 1:
              param_1_1.sent();
              emit("animation:PlayAnimation", "cancel");
              if (varData_2501) {
                return [3, 3];
              }
              return [4, varData_1929.wait(varData_1929.MathUtils.getRandomNumber(10, 120) * 1e3)];
            case 2:
              param_1_1.sent();
              return [3, 7];
            case 3:
              if (!varData_2499) {
                return [3, 5];
              }
              return [4, varData_1929.wait(varData_1929.MathUtils.getRandomNumber(10, 30) * 1e3)];
            case 4:
              param_1_1.sent();
              return [3, 7];
            case 5:
              return [4, varData_1929.wait(1e4)];
            case 6:
              param_1_1.sent();
              param_1_1.label = 7;
            case 7:
              emit("animation:PlayAnimation", "shit");
              if (!varData_2499) {
                return [3, 9];
              }
              return [4, varData_1929.wait(500)];
            case 8:
              param_1_1.sent();
              varData_2502 = PlayerPedId();
              SetEntityAnimSpeed(varData_2502, "missfbi3ig_0", "shit_loop_trev", 2);
              param_1_1.label = 9;
            case 9:
              return [4, varData_1929.wait(varData_2499 ? 1e3 : 2e3)];
            case 10:
              param_1_1.sent();
              varData_2503 = varData_1929.getUUID();
              emitNet("fx:poo:start", varData_2503);
              if (!varData_2500) {
                return [3, 13];
              }
              return [4, varData_1929.wait(5e3)];
            case 11:
              param_1_1.sent();
              varData_2504 = varData_1929.getUUID();
              emitNet("fx:pee:start", varData_2504);
              return [4, varData_1929.wait(4500)];
            case 12:
              param_1_1.sent();
              emitNet("fx:pee:stop", varData_2504);
              return [3, 15];
            case 13:
              return [4, varData_1929.wait(varData_2499 ? 5e3 : 1e4)];
            case 14:
              param_1_1.sent();
              param_1_1.label = 15;
            case 15:
              emit("animation:PlayAnimation", "cancel");
              if (!varData_2501) {
                return [3, 26];
              }
              varData_2505 = PlayerPedId();
              SetPedCanRagdoll(varData_2505, true);
              SetPedToRagdoll(varData_2505, 15e3, 15e3, 0, false, false, false);
              varData_2506 = varData_1929.getUUID();
              emitNet("fx:poo:start", varData_2506);
              varData_2507 = 0;
              param_1_1.label = 16;
            case 16:
              if (!(varData_2507 < 3)) {
                return [3, 20];
              }
              TriggerScreenblurFadeIn(600);
              return [4, varData_1929.wait(1600)];
            case 17:
              param_1_1.sent();
              TriggerScreenblurFadeOut(1e3);
              return [4, varData_1929.wait(1700)];
            case 18:
              param_1_1.sent();
              param_1_1.label = 19;
            case 19:
              varData_2507++;
              return [3, 16];
            case 20:
              TriggerScreenblurFadeOut(0);
              if (!varData_2500) {
                return [3, 26];
              }
              varData_2508 = 0;
              param_1_1.label = 21;
            case 21:
              if (!(varData_2508 < 3)) {
                return [3, 25];
              }
              TriggerScreenblurFadeIn(2e3);
              return [4, varData_1929.wait(1e4)];
            case 22:
              param_1_1.sent();
              TriggerScreenblurFadeOut(2e3);
              return [4, varData_1929.wait(1e4)];
            case 23:
              param_1_1.sent();
              param_1_1.label = 24;
            case 24:
              varData_2508++;
              return [3, 21];
            case 25:
              TriggerScreenblurFadeOut(0);
              param_1_1.label = 26;
            case 26:
              return [2];
          }
        });
      });
      return function(param_1) {
        return varData_2498.apply(this, arguments);
      };
    })());
    ;
    function handleAction_203(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2509 = param_1[param_6](param_7);
        var varData_2510 = varData_2509.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2509.done) {
        param_2(varData_2510);
      } else {
        Promise.resolve(varData_2510).then(param_4, param_5);
      }
    }
    function handleAction_204(param_1) {
      return function() {
        var varData_2511 = this;
        var varData_2512 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2513 = param_1.apply(varData_2511, varData_2512);
          function handleAction_205(param_1_2) {
            handleAction_203(varData_2513, param_1_1, param_2, handleAction_205, handleAction_206, "next", param_1_2);
          }
          function handleAction_206(param_1_2) {
            handleAction_203(varData_2513, param_1_1, param_2, handleAction_205, handleAction_206, "throw", param_1_2);
          }
          handleAction_205(void 0);
        });
      };
    }
    function handleAction_207(param_1, param_2) {
      var varData_2514;
      var varData_2515;
      var varData_2516;
      var varData_2517;
      var varData_2518 = {
        label: 0,
        sent: function() {
          if (varData_2516[0] & 1) {
            throw varData_2516[1];
          }
          return varData_2516[1];
        },
        trys: [],
        ops: []
      };
      varData_2517 = {
        next: handleAction_208(0),
        throw: handleAction_208(1),
        return: handleAction_208(2)
      };
      if (typeof Symbol === "function") {
        varData_2517[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2517;
      function handleAction_208(param_1_1) {
        return function(param_1_2) {
          return handleAction_209([param_1_1, param_1_2]);
        };
      }
      function handleAction_209(param_1_1) {
        if (varData_2514) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2518) {
          try {
            varData_2514 = 1;
            if (varData_2515 && (varData_2516 = param_1_1[0] & 2 ? varData_2515.return : param_1_1[0] ? varData_2515.throw || ((varData_2516 = varData_2515.return) && varData_2516.call(varData_2515), 0) : varData_2515.next) && !(varData_2516 = varData_2516.call(varData_2515, param_1_1[1])).done) {
              return varData_2516;
            }
            varData_2515 = 0;
            if (varData_2516) {
              param_1_1 = [param_1_1[0] & 2, varData_2516.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2516 = param_1_1;
                break;
              case 4:
                varData_2518.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2518.label++;
                varData_2515 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2518.ops.pop();
                varData_2518.trys.pop();
                continue;
              default:
                if (!(varData_2516 = varData_2518.trys, varData_2516 = varData_2516.length > 0 && varData_2516[varData_2516.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2518 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2516 || param_1_1[1] > varData_2516[0] && param_1_1[1] < varData_2516[3])) {
                  varData_2518.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2518.label < varData_2516[1]) {
                  varData_2518.label = varData_2516[1];
                  varData_2516 = param_1_1;
                  break;
                }
                if (varData_2516 && varData_2518.label < varData_2516[2]) {
                  varData_2518.label = varData_2516[2];
                  varData_2518.ops.push(param_1_1);
                  break;
                }
                if (varData_2516[2]) {
                  varData_2518.ops.pop();
                }
                varData_2518.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2518);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2515 = 0;
          } finally {
            varData_2514 = varData_2516 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2519 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2519;
      }
    }
    function handleAction_210() {
      return handleAction_211.apply(this, arguments);
    }
    function handleAction_211() {
      handleAction_211 = handleAction_204(function() {
        return handleAction_207(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, handleAction_43()];
            case 1:
              param_1.sent();
              return [4, handleAction_193()];
            case 2:
              param_1.sent();
              return [4, handleAction_202()];
            case 3:
              param_1.sent();
              return [2];
          }
        });
      });
      return handleAction_211.apply(this, arguments);
    }
    ;
    var varData_2520 = {};
    onNet("RunUseItem", function(param_1, param_2, param_3, param_4, param_5) {
      var varData_2521 = varData_2520[param_1];
      if (varData_2521 === void 0) {
        return;
      }
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2522 = void 0;
      try {
        for (var loopIdx = varData_2521[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2523 = loopIdx_1.value;
          try {
            varData_2523(param_1, param_2, param_3, param_4, param_5);
          } catch (err) {
            console.error(err);
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2522 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2522;
          }
        }
      }
    });
    function handleAction_212(param_1, param_2) {
      if (varData_2520[param_1] === void 0) {
        varData_2520[param_1] = [];
      }
      varData_2520[param_1].push(param_2);
    }
    ;
    var varData_2524 = {};
    function handleAction_213(param_1, param_2) {
      if (varData_2524[param_1] === void 0) {
        varData_2524[param_1] = {
          count: 0,
          timer: 0
        };
      }
      var varData_2525 = GetGameTimer();
      var varData_2526 = varData_2524[param_1];
      if (varData_2525 - varData_2526.timer > param_2) {
        varData_2526.count = 0;
        varData_2526.timer = varData_2525;
      }
      return ++varData_2526.count;
    }
    ;
    function handleAction_214(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2527 = param_1[param_6](param_7);
        var varData_2528 = varData_2527.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2527.done) {
        param_2(varData_2528);
      } else {
        Promise.resolve(varData_2528).then(param_4, param_5);
      }
    }
    function handleAction_215(param_1) {
      return function() {
        var varData_2529 = this;
        var varData_2530 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2531 = param_1.apply(varData_2529, varData_2530);
          function handleAction_216(param_1_2) {
            handleAction_214(varData_2531, param_1_1, param_2, handleAction_216, handleAction_217, "next", param_1_2);
          }
          function handleAction_217(param_1_2) {
            handleAction_214(varData_2531, param_1_1, param_2, handleAction_216, handleAction_217, "throw", param_1_2);
          }
          handleAction_216(void 0);
        });
      };
    }
    function handleAction_218(param_1, param_2) {
      var varData_2532;
      var varData_2533;
      var varData_2534;
      var varData_2535;
      var varData_2536 = {
        label: 0,
        sent: function() {
          if (varData_2534[0] & 1) {
            throw varData_2534[1];
          }
          return varData_2534[1];
        },
        trys: [],
        ops: []
      };
      varData_2535 = {
        next: handleAction_219(0),
        throw: handleAction_219(1),
        return: handleAction_219(2)
      };
      if (typeof Symbol === "function") {
        varData_2535[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2535;
      function handleAction_219(param_1_1) {
        return function(param_1_2) {
          return handleAction_220([param_1_1, param_1_2]);
        };
      }
      function handleAction_220(param_1_1) {
        if (varData_2532) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2536) {
          try {
            varData_2532 = 1;
            if (varData_2533 && (varData_2534 = param_1_1[0] & 2 ? varData_2533.return : param_1_1[0] ? varData_2533.throw || ((varData_2534 = varData_2533.return) && varData_2534.call(varData_2533), 0) : varData_2533.next) && !(varData_2534 = varData_2534.call(varData_2533, param_1_1[1])).done) {
              return varData_2534;
            }
            varData_2533 = 0;
            if (varData_2534) {
              param_1_1 = [param_1_1[0] & 2, varData_2534.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2534 = param_1_1;
                break;
              case 4:
                varData_2536.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2536.label++;
                varData_2533 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2536.ops.pop();
                varData_2536.trys.pop();
                continue;
              default:
                if (!(varData_2534 = varData_2536.trys, varData_2534 = varData_2534.length > 0 && varData_2534[varData_2534.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2536 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2534 || param_1_1[1] > varData_2534[0] && param_1_1[1] < varData_2534[3])) {
                  varData_2536.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2536.label < varData_2534[1]) {
                  varData_2536.label = varData_2534[1];
                  varData_2534 = param_1_1;
                  break;
                }
                if (varData_2534 && varData_2536.label < varData_2534[2]) {
                  varData_2536.label = varData_2534[2];
                  varData_2536.ops.push(param_1_1);
                  break;
                }
                if (varData_2534[2]) {
                  varData_2536.ops.pop();
                }
                varData_2536.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2536);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2533 = 0;
          } finally {
            varData_2532 = varData_2534 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2537 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2537;
      }
    }
    function handleAction_221() {
      return handleAction_222.apply(this, arguments);
    }
    function handleAction_222() {
      handleAction_222 = handleAction_215(function() {
        return handleAction_218(this, function(param_1) {
          return [2];
        });
      });
      return handleAction_222.apply(this, arguments);
    }
    handleAction_212("gavel", handleAction_215(function() {
      var varData_2538;
      var varData_2539;
      var varData_2540;
      var varData_2541;
      var varData_2542;
      return handleAction_218(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            varData_2538 = handleAction_213("playLabarreCatchPhrase", 2e3);
            if (varData_2538 > 1) {
              return [2];
            }
            return [4, handleAction_55(700)];
          case 1:
            param_1.sent();
            varData_2539 = GetCurrentPedWeapon(PlayerPedId(), false);
            varData_2540 = varData_2539[1];
            if (varData_2540 === 1317494643) {
              return [2];
            }
            varData_2541 = false;
            varData_2542 = setTimeout(function() {
              return varData_2541 = true;
            }, 5e3);
            param_1.label = 2;
          case 2:
            if (GetCurrentPedWeapon(PlayerPedId(), false)[1] === 1317494643 || !!varData_2541) {
              return [3, 4];
            }
            return [4, handleAction_55(100)];
          case 3:
            param_1.sent();
            return [3, 2];
          case 4:
            clearTimeout(varData_2542);
            if (GetCurrentPedWeapon(PlayerPedId(), false)[1] !== 1317494643) {
              return [2];
            }
            emitNet("np-fx:sound:playLabarreCatchPhrase");
            return [2];
        }
      });
    }));
    ;
    function handleAction_223(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2543 = param_1[param_6](param_7);
        var varData_2544 = varData_2543.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2543.done) {
        param_2(varData_2544);
      } else {
        Promise.resolve(varData_2544).then(param_4, param_5);
      }
    }
    function handleAction_224(param_1) {
      return function() {
        var varData_2545 = this;
        var varData_2546 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2547 = param_1.apply(varData_2545, varData_2546);
          function handleAction_225(param_1_2) {
            handleAction_223(varData_2547, param_1_1, param_2, handleAction_225, handleAction_226, "next", param_1_2);
          }
          function handleAction_226(param_1_2) {
            handleAction_223(varData_2547, param_1_1, param_2, handleAction_225, handleAction_226, "throw", param_1_2);
          }
          handleAction_225(void 0);
        });
      };
    }
    function handleAction_227(param_1, param_2) {
      var varData_2548;
      var varData_2549;
      var varData_2550;
      var varData_2551;
      var varData_2552 = {
        label: 0,
        sent: function() {
          if (varData_2550[0] & 1) {
            throw varData_2550[1];
          }
          return varData_2550[1];
        },
        trys: [],
        ops: []
      };
      varData_2551 = {
        next: handleAction_228(0),
        throw: handleAction_228(1),
        return: handleAction_228(2)
      };
      if (typeof Symbol === "function") {
        varData_2551[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2551;
      function handleAction_228(param_1_1) {
        return function(param_1_2) {
          return handleAction_229([param_1_1, param_1_2]);
        };
      }
      function handleAction_229(param_1_1) {
        if (varData_2548) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2552) {
          try {
            varData_2548 = 1;
            if (varData_2549 && (varData_2550 = param_1_1[0] & 2 ? varData_2549.return : param_1_1[0] ? varData_2549.throw || ((varData_2550 = varData_2549.return) && varData_2550.call(varData_2549), 0) : varData_2549.next) && !(varData_2550 = varData_2550.call(varData_2549, param_1_1[1])).done) {
              return varData_2550;
            }
            varData_2549 = 0;
            if (varData_2550) {
              param_1_1 = [param_1_1[0] & 2, varData_2550.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2550 = param_1_1;
                break;
              case 4:
                varData_2552.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2552.label++;
                varData_2549 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2552.ops.pop();
                varData_2552.trys.pop();
                continue;
              default:
                if (!(varData_2550 = varData_2552.trys, varData_2550 = varData_2550.length > 0 && varData_2550[varData_2550.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2552 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2550 || param_1_1[1] > varData_2550[0] && param_1_1[1] < varData_2550[3])) {
                  varData_2552.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2552.label < varData_2550[1]) {
                  varData_2552.label = varData_2550[1];
                  varData_2550 = param_1_1;
                  break;
                }
                if (varData_2550 && varData_2552.label < varData_2550[2]) {
                  varData_2552.label = varData_2550[2];
                  varData_2552.ops.push(param_1_1);
                  break;
                }
                if (varData_2550[2]) {
                  varData_2552.ops.pop();
                }
                varData_2552.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2552);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2549 = 0;
          } finally {
            varData_2548 = varData_2550 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2553 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2553;
      }
    }
    function handleAction_230() {
      return handleAction_231.apply(this, arguments);
    }
    function handleAction_231() {
      handleAction_231 = handleAction_224(function() {
        return handleAction_227(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, handleAction_221()];
            case 1:
              param_1.sent();
              return [2];
          }
        });
      });
      return handleAction_231.apply(this, arguments);
    }
    ;
    function handleAction_232(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2554 = param_1[param_6](param_7);
        var varData_2555 = varData_2554.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2554.done) {
        param_2(varData_2555);
      } else {
        Promise.resolve(varData_2555).then(param_4, param_5);
      }
    }
    function handleAction_233(param_1) {
      return function() {
        var varData_2556 = this;
        var varData_2557 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2558 = param_1.apply(varData_2556, varData_2557);
          function handleAction_234(param_1_2) {
            handleAction_232(varData_2558, param_1_1, param_2, handleAction_234, handleAction_235, "next", param_1_2);
          }
          function handleAction_235(param_1_2) {
            handleAction_232(varData_2558, param_1_1, param_2, handleAction_234, handleAction_235, "throw", param_1_2);
          }
          handleAction_234(void 0);
        });
      };
    }
    function handleAction_236(param_1, param_2) {
      var varData_2559;
      var varData_2560;
      var varData_2561;
      var varData_2562;
      var varData_2563 = {
        label: 0,
        sent: function() {
          if (varData_2561[0] & 1) {
            throw varData_2561[1];
          }
          return varData_2561[1];
        },
        trys: [],
        ops: []
      };
      varData_2562 = {
        next: handleAction_237(0),
        throw: handleAction_237(1),
        return: handleAction_237(2)
      };
      if (typeof Symbol === "function") {
        varData_2562[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2562;
      function handleAction_237(param_1_1) {
        return function(param_1_2) {
          return handleAction_238([param_1_1, param_1_2]);
        };
      }
      function handleAction_238(param_1_1) {
        if (varData_2559) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2563) {
          try {
            varData_2559 = 1;
            if (varData_2560 && (varData_2561 = param_1_1[0] & 2 ? varData_2560.return : param_1_1[0] ? varData_2560.throw || ((varData_2561 = varData_2560.return) && varData_2561.call(varData_2560), 0) : varData_2560.next) && !(varData_2561 = varData_2561.call(varData_2560, param_1_1[1])).done) {
              return varData_2561;
            }
            varData_2560 = 0;
            if (varData_2561) {
              param_1_1 = [param_1_1[0] & 2, varData_2561.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2561 = param_1_1;
                break;
              case 4:
                varData_2563.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2563.label++;
                varData_2560 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2563.ops.pop();
                varData_2563.trys.pop();
                continue;
              default:
                if (!(varData_2561 = varData_2563.trys, varData_2561 = varData_2561.length > 0 && varData_2561[varData_2561.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2563 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2561 || param_1_1[1] > varData_2561[0] && param_1_1[1] < varData_2561[3])) {
                  varData_2563.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2563.label < varData_2561[1]) {
                  varData_2563.label = varData_2561[1];
                  varData_2561 = param_1_1;
                  break;
                }
                if (varData_2561 && varData_2563.label < varData_2561[2]) {
                  varData_2563.label = varData_2561[2];
                  varData_2563.ops.push(param_1_1);
                  break;
                }
                if (varData_2561[2]) {
                  varData_2563.ops.pop();
                }
                varData_2563.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2563);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2560 = 0;
          } finally {
            varData_2559 = varData_2561 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2564 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2564;
      }
    }
    var resourceName_2 = GetCurrentResourceName();
    on("onClientResourceStart", (function() {
      var varData_2565 = handleAction_233(function(param_1) {
        return handleAction_236(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (param_1 !== resourceName_2) {
                return [2];
              }
              return [4, handleAction_210()];
            case 1:
              param_1_1.sent();
              return [4, handleAction_230()];
            case 2:
              param_1_1.sent();
              return [2];
          }
        });
      });
      return function(param_1) {
        return varData_2565.apply(this, arguments);
      };
    })());
  })();
})();
