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
        var varData_120 = exports.config.GetModuleConfig(param_1);
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
    const varData_122 = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var varData_123 = {
      randomUUID: varData_122
    };
    const varData_124 = varData_123;
    ;
    let varData_125;
    const varData_126 = new Uint8Array(16);
    function handleAction_48() {
      if (!varData_125) {
        varData_125 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!varData_125) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return varData_125(varData_126);
    }
    ;
    const varData_127 = [];
    for (let loopIdx = 0; loopIdx < 256; ++loopIdx) {
      varData_127.push((loopIdx + 256).toString(16).slice(1));
    }
    function handleAction_49(param_1, _0x4020d7 = 0) {
      return varData_127[param_1[_0x4020d7 + 0]] + varData_127[param_1[_0x4020d7 + 1]] + varData_127[param_1[_0x4020d7 + 2]] + varData_127[param_1[_0x4020d7 + 3]] + "-" + varData_127[param_1[_0x4020d7 + 4]] + varData_127[param_1[_0x4020d7 + 5]] + "-" + varData_127[param_1[_0x4020d7 + 6]] + varData_127[param_1[_0x4020d7 + 7]] + "-" + varData_127[param_1[_0x4020d7 + 8]] + varData_127[param_1[_0x4020d7 + 9]] + "-" + varData_127[param_1[_0x4020d7 + 10]] + varData_127[param_1[_0x4020d7 + 11]] + varData_127[param_1[_0x4020d7 + 12]] + varData_127[param_1[_0x4020d7 + 13]] + varData_127[param_1[_0x4020d7 + 14]] + varData_127[param_1[_0x4020d7 + 15]];
    }
    function createUUID(param_1, _0x4616c0 = 0) {
      const varData_128 = handleAction_49(param_1, _0x4616c0);
      if (!validate(varData_128)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return varData_128;
    }
    const varData_129 = null;
    ;
    function createUUID_1(param_1, param_2, param_3) {
      if (varData_124.randomUUID && !param_2 && !param_1) {
        return varData_124.randomUUID();
      }
      param_1 = param_1 || {};
      const varData_130 = param_1.random || (param_1.rng || handleAction_48)();
      varData_130[6] = varData_130[6] & 15 | 64;
      varData_130[8] = varData_130[8] & 63 | 128;
      if (param_2) {
        param_3 = param_3 || 0;
        for (let loopIdx = 0; loopIdx < 16; ++loopIdx) {
          param_2[param_3 + loopIdx] = varData_130[loopIdx];
        }
        return param_2;
      }
      return handleAction_49(varData_130);
    }
    const varData_131 = createUUID_1;
    ;
    const varData_132 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    ;
    function handleAction_50(param_1) {
      return typeof param_1 === "string" && varData_132.test(param_1);
    }
    const varData_133 = handleAction_50;
    ;
    function createUUID_2(param_1) {
      if (!varData_133(param_1)) {
        throw TypeError("Invalid UUID");
      }
      let varData_134;
      const varData_135 = new Uint8Array(16);
      varData_135[0] = (varData_134 = parseInt(param_1.slice(0, 8), 16)) >>> 24;
      varData_135[1] = varData_134 >>> 16 & 255;
      varData_135[2] = varData_134 >>> 8 & 255;
      varData_135[3] = varData_134 & 255;
      varData_135[4] = (varData_134 = parseInt(param_1.slice(9, 13), 16)) >>> 8;
      varData_135[5] = varData_134 & 255;
      varData_135[6] = (varData_134 = parseInt(param_1.slice(14, 18), 16)) >>> 8;
      varData_135[7] = varData_134 & 255;
      varData_135[8] = (varData_134 = parseInt(param_1.slice(19, 23), 16)) >>> 8;
      varData_135[9] = varData_134 & 255;
      varData_135[10] = (varData_134 = parseInt(param_1.slice(24, 36), 16)) / 1099511627776 & 255;
      varData_135[11] = varData_134 / 4294967296 & 255;
      varData_135[12] = varData_134 >>> 24 & 255;
      varData_135[13] = varData_134 >>> 16 & 255;
      varData_135[14] = varData_134 >>> 8 & 255;
      varData_135[15] = varData_134 & 255;
      return varData_135;
    }
    const varData_136 = createUUID_2;
    ;
    function handleAction_51(param_1) {
      param_1 = unescape(encodeURIComponent(param_1));
      const varData_137 = [];
      for (let loopIdx = 0; loopIdx < param_1.length; ++loopIdx) {
        varData_137.push(param_1.charCodeAt(loopIdx));
      }
      return varData_137;
    }
    const varData_138 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    const varData_139 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function handleAction_52(param_1, param_2, param_3) {
      function handleAction_53(param_1_1, param_2_1, param_3_1, param_4) {
        if (typeof param_1_1 === "string") {
          param_1_1 = handleAction_51(param_1_1);
        }
        if (typeof param_2_1 === "string") {
          param_2_1 = varData_136(param_2_1);
        }
        if (param_2_1?.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let varData_140 = new Uint8Array(16 + param_1_1.length);
        varData_140.set(param_2_1);
        varData_140.set(param_1_1, param_2_1.length);
        varData_140 = param_3(varData_140);
        varData_140[6] = varData_140[6] & 15 | param_2;
        varData_140[8] = varData_140[8] & 63 | 128;
        if (param_3_1) {
          param_4 = param_4 || 0;
          for (let loopIdx = 0; loopIdx < 16; ++loopIdx) {
            param_3_1[param_4 + loopIdx] = varData_140[loopIdx];
          }
          return param_3_1;
        }
        return handleAction_49(varData_140);
      }
      try {
        handleAction_53.name = param_1;
      } catch (err) {
      }
      handleAction_53.DNS = varData_138;
      handleAction_53.URL = varData_139;
      return handleAction_53;
    }
    ;
    function handleAction_54(param_1, param_2, param_3, param_4) {
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
    function handleAction_55(param_1, param_2) {
      return param_1 << param_2 | param_1 >>> 32 - param_2;
    }
    function handleAction_56(param_1) {
      const varData_141 = [1518500249, 1859775393, 2400959708, 3395469782];
      const varData_142 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof param_1 === "string") {
        const varData_143 = unescape(encodeURIComponent(param_1));
        param_1 = [];
        for (let loopIdx = 0; loopIdx < varData_143.length; ++loopIdx) {
          param_1.push(varData_143.charCodeAt(loopIdx));
        }
      } else if (!Array.isArray(param_1)) {
        param_1 = Array.prototype.slice.call(param_1);
      }
      param_1.push(128);
      const varData_144 = param_1.length / 4 + 2;
      const varData_145 = Math.ceil(varData_144 / 16);
      const varData_146 = new Array(varData_145);
      for (let loopIdx = 0; loopIdx < varData_145; ++loopIdx) {
        const varData_147 = new Uint32Array(16);
        for (let loopIdx_1 = 0; loopIdx_1 < 16; ++loopIdx_1) {
          varData_147[loopIdx_1] = param_1[loopIdx * 64 + loopIdx_1 * 4] << 24 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 1] << 16 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 2] << 8 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 3];
        }
        varData_146[loopIdx] = varData_147;
      }
      varData_146[varData_145 - 1][14] = (param_1.length - 1) * 8 / Math.pow(2, 32);
      varData_146[varData_145 - 1][14] = Math.floor(varData_146[varData_145 - 1][14]);
      varData_146[varData_145 - 1][15] = (param_1.length - 1) * 8 & -1;
      for (let loopIdx = 0; loopIdx < varData_145; ++loopIdx) {
        const varData_148 = new Uint32Array(80);
        for (let loopIdx_1 = 0; loopIdx_1 < 16; ++loopIdx_1) {
          varData_148[loopIdx_1] = varData_146[loopIdx][loopIdx_1];
        }
        for (let loopIdx_1 = 16; loopIdx_1 < 80; ++loopIdx_1) {
          varData_148[loopIdx_1] = handleAction_55(varData_148[loopIdx_1 - 3] ^ varData_148[loopIdx_1 - 8] ^ varData_148[loopIdx_1 - 14] ^ varData_148[loopIdx_1 - 16], 1);
        }
        let varData_149 = varData_142[0];
        let varData_150 = varData_142[1];
        let varData_151 = varData_142[2];
        let varData_152 = varData_142[3];
        let varData_153 = varData_142[4];
        for (let loopIdx_1 = 0; loopIdx_1 < 80; ++loopIdx_1) {
          const varData_154 = Math.floor(loopIdx_1 / 20);
          const varData_155 = handleAction_55(varData_149, 5) + handleAction_54(varData_154, varData_150, varData_151, varData_152) + varData_153 + varData_141[varData_154] + varData_148[loopIdx_1] >>> 0;
          varData_153 = varData_152;
          varData_152 = varData_151;
          varData_151 = handleAction_55(varData_150, 30) >>> 0;
          varData_150 = varData_149;
          varData_149 = varData_155;
        }
        varData_142[0] = varData_142[0] + varData_149 >>> 0;
        varData_142[1] = varData_142[1] + varData_150 >>> 0;
        varData_142[2] = varData_142[2] + varData_151 >>> 0;
        varData_142[3] = varData_142[3] + varData_152 >>> 0;
        varData_142[4] = varData_142[4] + varData_153 >>> 0;
      }
      return [varData_142[0] >> 24 & 255, varData_142[0] >> 16 & 255, varData_142[0] >> 8 & 255, varData_142[0] & 255, varData_142[1] >> 24 & 255, varData_142[1] >> 16 & 255, varData_142[1] >> 8 & 255, varData_142[1] & 255, varData_142[2] >> 24 & 255, varData_142[2] >> 16 & 255, varData_142[2] >> 8 & 255, varData_142[2] & 255, varData_142[3] >> 24 & 255, varData_142[3] >> 16 & 255, varData_142[3] >> 8 & 255, varData_142[3] & 255, varData_142[4] >> 24 & 255, varData_142[4] >> 16 & 255, varData_142[4] >> 8 & 255, varData_142[4] & 255];
    }
    const varData_156 = handleAction_56;
    ;
    const varData_157 = handleAction_52("v5", 80, varData_156);
    const varData_158 = varData_157;
    ;
    /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    const varData_159 = 4;
    const varData_160 = 0;
    const varData_161 = 1;
    const varData_162 = 2;
    function handleAction_57(param_1) {
      let varData_163 = param_1.length;
      while (--varData_163 >= 0) {
        param_1[varData_163] = 0;
      }
    }
    const varData_164 = 0;
    const varData_165 = 1;
    const varData_166 = 2;
    const varData_167 = 3;
    const varData_168 = 258;
    const varData_169 = 29;
    const varData_170 = 256;
    const varData_171 = varData_170 + 1 + varData_169;
    const varData_172 = 30;
    const varData_173 = 19;
    const varData_174 = varData_171 * 2 + 1;
    const varData_175 = 15;
    const varData_176 = 16;
    const varData_177 = 7;
    const varData_178 = 256;
    const varData_179 = 16;
    const varData_180 = 17;
    const varData_181 = 18;
    const varData_182 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const varData_183 = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const varData_184 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const varData_185 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const varData_186 = 512;
    const varData_187 = new Array((varData_171 + 2) * 2);
    handleAction_57(varData_187);
    const varData_188 = new Array(varData_172 * 2);
    handleAction_57(varData_188);
    const varData_189 = new Array(varData_186);
    handleAction_57(varData_189);
    const varData_190 = new Array(varData_168 - varData_167 + 1);
    handleAction_57(varData_190);
    const varData_191 = new Array(varData_169);
    handleAction_57(varData_191);
    const varData_192 = new Array(varData_172);
    handleAction_57(varData_192);
    function handleAction_58(param_1, param_2, param_3, param_4, param_5) {
      this.static_tree = param_1;
      this.extra_bits = param_2;
      this.extra_base = param_3;
      this.elems = param_4;
      this.max_length = param_5;
      this.has_stree = param_1 && param_1.length;
    }
    let varData_193;
    let varData_194;
    let varData_195;
    function handleAction_59(param_1, param_2) {
      this.dyn_tree = param_1;
      this.max_code = 0;
      this.stat_desc = param_2;
    }
    const varData_196 = (param_1) => {
      if (param_1 < 256) {
        return varData_189[param_1];
      } else {
        return varData_189[256 + (param_1 >>> 7)];
      }
    };
    const varData_197 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
    };
    const varData_198 = (param_1, param_2, param_3) => {
      if (param_1.bi_valid > varData_176 - param_3) {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        varData_197(param_1, param_1.bi_buf);
        param_1.bi_buf = param_2 >> varData_176 - param_1.bi_valid;
        param_1.bi_valid += param_3 - varData_176;
      } else {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        param_1.bi_valid += param_3;
      }
    };
    const varData_199 = (param_1, param_2, param_3) => {
      varData_198(param_1, param_3[param_2 * 2], param_3[param_2 * 2 + 1]);
    };
    const varData_200 = (param_1, param_2) => {
      let varData_201 = 0;
      do {
        varData_201 |= param_1 & 1;
        param_1 >>>= 1;
        varData_201 <<= 1;
      } while (--param_2 > 0);
      return varData_201 >>> 1;
    };
    const varData_202 = (param_1) => {
      if (param_1.bi_valid === 16) {
        varData_197(param_1, param_1.bi_buf);
        param_1.bi_buf = 0;
        param_1.bi_valid = 0;
      } else if (param_1.bi_valid >= 8) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf & 255;
        param_1.bi_buf >>= 8;
        param_1.bi_valid -= 8;
      }
    };
    const varData_203 = (param_1, param_2) => {
      const varData_204 = param_2.dyn_tree;
      const varData_205 = param_2.max_code;
      const varData_206 = param_2.stat_desc.static_tree;
      const varData_207 = param_2.stat_desc.has_stree;
      const varData_208 = param_2.stat_desc.extra_bits;
      const varData_209 = param_2.stat_desc.extra_base;
      const varData_210 = param_2.stat_desc.max_length;
      let varData_211;
      let varData_212;
      let varData_213;
      let varData_214;
      let varData_215;
      let varData_216;
      let varData_217 = 0;
      for (varData_214 = 0; varData_214 <= varData_175; varData_214++) {
        param_1.bl_count[varData_214] = 0;
      }
      varData_204[param_1.heap[param_1.heap_max] * 2 + 1] = 0;
      for (varData_211 = param_1.heap_max + 1; varData_211 < varData_174; varData_211++) {
        varData_212 = param_1.heap[varData_211];
        varData_214 = varData_204[varData_204[varData_212 * 2 + 1] * 2 + 1] + 1;
        if (varData_214 > varData_210) {
          varData_214 = varData_210;
          varData_217++;
        }
        varData_204[varData_212 * 2 + 1] = varData_214;
        if (varData_212 > varData_205) {
          continue;
        }
        param_1.bl_count[varData_214]++;
        varData_215 = 0;
        if (varData_212 >= varData_209) {
          varData_215 = varData_208[varData_212 - varData_209];
        }
        varData_216 = varData_204[varData_212 * 2];
        param_1.opt_len += varData_216 * (varData_214 + varData_215);
        if (varData_207) {
          param_1.static_len += varData_216 * (varData_206[varData_212 * 2 + 1] + varData_215);
        }
      }
      if (varData_217 === 0) {
        return;
      }
      do {
        varData_214 = varData_210 - 1;
        while (param_1.bl_count[varData_214] === 0) {
          varData_214--;
        }
        param_1.bl_count[varData_214]--;
        param_1.bl_count[varData_214 + 1] += 2;
        param_1.bl_count[varData_210]--;
        varData_217 -= 2;
      } while (varData_217 > 0);
      for (varData_214 = varData_210; varData_214 !== 0; varData_214--) {
        varData_212 = param_1.bl_count[varData_214];
        while (varData_212 !== 0) {
          varData_213 = param_1.heap[--varData_211];
          if (varData_213 > varData_205) {
            continue;
          }
          if (varData_204[varData_213 * 2 + 1] !== varData_214) {
            param_1.opt_len += (varData_214 - varData_204[varData_213 * 2 + 1]) * varData_204[varData_213 * 2];
            varData_204[varData_213 * 2 + 1] = varData_214;
          }
          varData_212--;
        }
      }
    };
    const varData_218 = (param_1, param_2, param_3) => {
      const varData_219 = new Array(varData_175 + 1);
      let varData_220 = 0;
      let varData_221;
      let varData_222;
      for (varData_221 = 1; varData_221 <= varData_175; varData_221++) {
        varData_220 = varData_220 + param_3[varData_221 - 1] << 1;
        varData_219[varData_221] = varData_220;
      }
      for (varData_222 = 0; varData_222 <= param_2; varData_222++) {
        let varData_223 = param_1[varData_222 * 2 + 1];
        if (varData_223 === 0) {
          continue;
        }
        param_1[varData_222 * 2] = varData_200(varData_219[varData_223]++, varData_223);
      }
    };
    const varData_224 = () => {
      let varData_225;
      let varData_226;
      let varData_227;
      let varData_228;
      let varData_229;
      const varData_230 = new Array(varData_175 + 1);
      varData_227 = 0;
      for (varData_228 = 0; varData_228 < varData_169 - 1; varData_228++) {
        varData_191[varData_228] = varData_227;
        for (varData_225 = 0; varData_225 < 1 << varData_182[varData_228]; varData_225++) {
          varData_190[varData_227++] = varData_228;
        }
      }
      varData_190[varData_227 - 1] = varData_228;
      varData_229 = 0;
      for (varData_228 = 0; varData_228 < 16; varData_228++) {
        varData_192[varData_228] = varData_229;
        for (varData_225 = 0; varData_225 < 1 << varData_183[varData_228]; varData_225++) {
          varData_189[varData_229++] = varData_228;
        }
      }
      varData_229 >>= 7;
      for (; varData_228 < varData_172; varData_228++) {
        varData_192[varData_228] = varData_229 << 7;
        for (varData_225 = 0; varData_225 < 1 << varData_183[varData_228] - 7; varData_225++) {
          varData_189[256 + varData_229++] = varData_228;
        }
      }
      for (varData_226 = 0; varData_226 <= varData_175; varData_226++) {
        varData_230[varData_226] = 0;
      }
      varData_225 = 0;
      while (varData_225 <= 143) {
        varData_187[varData_225 * 2 + 1] = 8;
        varData_225++;
        varData_230[8]++;
      }
      while (varData_225 <= 255) {
        varData_187[varData_225 * 2 + 1] = 9;
        varData_225++;
        varData_230[9]++;
      }
      while (varData_225 <= 279) {
        varData_187[varData_225 * 2 + 1] = 7;
        varData_225++;
        varData_230[7]++;
      }
      while (varData_225 <= 287) {
        varData_187[varData_225 * 2 + 1] = 8;
        varData_225++;
        varData_230[8]++;
      }
      varData_218(varData_187, varData_171 + 1, varData_230);
      for (varData_225 = 0; varData_225 < varData_172; varData_225++) {
        varData_188[varData_225 * 2 + 1] = 5;
        varData_188[varData_225 * 2] = varData_200(varData_225, 5);
      }
      varData_193 = new handleAction_58(varData_187, varData_182, varData_170 + 1, varData_171, varData_175);
      varData_194 = new handleAction_58(varData_188, varData_183, 0, varData_172, varData_175);
      varData_195 = new handleAction_58(new Array(0), varData_184, 0, varData_173, varData_177);
    };
    const varData_231 = (param_1) => {
      let varData_232;
      for (varData_232 = 0; varData_232 < varData_171; varData_232++) {
        param_1.dyn_ltree[varData_232 * 2] = 0;
      }
      for (varData_232 = 0; varData_232 < varData_172; varData_232++) {
        param_1.dyn_dtree[varData_232 * 2] = 0;
      }
      for (varData_232 = 0; varData_232 < varData_173; varData_232++) {
        param_1.bl_tree[varData_232 * 2] = 0;
      }
      param_1.dyn_ltree[varData_178 * 2] = 1;
      param_1.opt_len = param_1.static_len = 0;
      param_1.sym_next = param_1.matches = 0;
    };
    const varData_233 = (param_1) => {
      if (param_1.bi_valid > 8) {
        varData_197(param_1, param_1.bi_buf);
      } else if (param_1.bi_valid > 0) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf;
      }
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
    };
    const varData_234 = (param_1, param_2, param_3, param_4) => {
      const varData_235 = param_2 * 2;
      const varData_236 = param_3 * 2;
      return param_1[varData_235] < param_1[varData_236] || param_1[varData_235] === param_1[varData_236] && param_4[param_2] <= param_4[param_3];
    };
    const varData_237 = (param_1, param_2, param_3) => {
      const varData_238 = param_1.heap[param_3];
      let varData_239 = param_3 << 1;
      while (varData_239 <= param_1.heap_len) {
        if (varData_239 < param_1.heap_len && varData_234(param_2, param_1.heap[varData_239 + 1], param_1.heap[varData_239], param_1.depth)) {
          varData_239++;
        }
        if (varData_234(param_2, varData_238, param_1.heap[varData_239], param_1.depth)) {
          break;
        }
        param_1.heap[param_3] = param_1.heap[varData_239];
        param_3 = varData_239;
        varData_239 <<= 1;
      }
      param_1.heap[param_3] = varData_238;
    };
    const varData_240 = (param_1, param_2, param_3) => {
      let varData_241;
      let varData_242;
      let varData_243 = 0;
      let varData_244;
      let varData_245;
      if (param_1.sym_next !== 0) {
        do {
          varData_241 = param_1.pending_buf[param_1.sym_buf + varData_243++] & 255;
          varData_241 += (param_1.pending_buf[param_1.sym_buf + varData_243++] & 255) << 8;
          varData_242 = param_1.pending_buf[param_1.sym_buf + varData_243++];
          if (varData_241 === 0) {
            varData_199(param_1, varData_242, param_2);
          } else {
            varData_244 = varData_190[varData_242];
            varData_199(param_1, varData_244 + varData_170 + 1, param_2);
            varData_245 = varData_182[varData_244];
            if (varData_245 !== 0) {
              varData_242 -= varData_191[varData_244];
              varData_198(param_1, varData_242, varData_245);
            }
            varData_241--;
            varData_244 = varData_196(varData_241);
            varData_199(param_1, varData_244, param_3);
            varData_245 = varData_183[varData_244];
            if (varData_245 !== 0) {
              varData_241 -= varData_192[varData_244];
              varData_198(param_1, varData_241, varData_245);
            }
          }
        } while (varData_243 < param_1.sym_next);
      }
      varData_199(param_1, varData_178, param_2);
    };
    const varData_246 = (param_1, param_2) => {
      const varData_247 = param_2.dyn_tree;
      const varData_248 = param_2.stat_desc.static_tree;
      const varData_249 = param_2.stat_desc.has_stree;
      const varData_250 = param_2.stat_desc.elems;
      let varData_251;
      let varData_252;
      let varData_253 = -1;
      let varData_254;
      param_1.heap_len = 0;
      param_1.heap_max = varData_174;
      for (varData_251 = 0; varData_251 < varData_250; varData_251++) {
        if (varData_247[varData_251 * 2] !== 0) {
          param_1.heap[++param_1.heap_len] = varData_253 = varData_251;
          param_1.depth[varData_251] = 0;
        } else {
          varData_247[varData_251 * 2 + 1] = 0;
        }
      }
      while (param_1.heap_len < 2) {
        varData_254 = param_1.heap[++param_1.heap_len] = varData_253 < 2 ? ++varData_253 : 0;
        varData_247[varData_254 * 2] = 1;
        param_1.depth[varData_254] = 0;
        param_1.opt_len--;
        if (varData_249) {
          param_1.static_len -= varData_248[varData_254 * 2 + 1];
        }
      }
      param_2.max_code = varData_253;
      for (varData_251 = param_1.heap_len >> 1; varData_251 >= 1; varData_251--) {
        varData_237(param_1, varData_247, varData_251);
      }
      varData_254 = varData_250;
      do {
        varData_251 = param_1.heap[1];
        param_1.heap[1] = param_1.heap[param_1.heap_len--];
        varData_237(param_1, varData_247, 1);
        varData_252 = param_1.heap[1];
        param_1.heap[--param_1.heap_max] = varData_251;
        param_1.heap[--param_1.heap_max] = varData_252;
        varData_247[varData_254 * 2] = varData_247[varData_251 * 2] + varData_247[varData_252 * 2];
        param_1.depth[varData_254] = (param_1.depth[varData_251] >= param_1.depth[varData_252] ? param_1.depth[varData_251] : param_1.depth[varData_252]) + 1;
        varData_247[varData_251 * 2 + 1] = varData_247[varData_252 * 2 + 1] = varData_254;
        param_1.heap[1] = varData_254++;
        varData_237(param_1, varData_247, 1);
      } while (param_1.heap_len >= 2);
      param_1.heap[--param_1.heap_max] = param_1.heap[1];
      varData_203(param_1, param_2);
      varData_218(varData_247, varData_253, param_1.bl_count);
    };
    const varData_255 = (param_1, param_2, param_3) => {
      let varData_256;
      let varData_257 = -1;
      let varData_258;
      let varData_259 = param_2[1];
      let varData_260 = 0;
      let varData_261 = 7;
      let varData_262 = 4;
      if (varData_259 === 0) {
        varData_261 = 138;
        varData_262 = 3;
      }
      param_2[(param_3 + 1) * 2 + 1] = 65535;
      for (varData_256 = 0; varData_256 <= param_3; varData_256++) {
        varData_258 = varData_259;
        varData_259 = param_2[(varData_256 + 1) * 2 + 1];
        if (++varData_260 < varData_261 && varData_258 === varData_259) {
          continue;
        } else if (varData_260 < varData_262) {
          param_1.bl_tree[varData_258 * 2] += varData_260;
        } else if (varData_258 !== 0) {
          if (varData_258 !== varData_257) {
            param_1.bl_tree[varData_258 * 2]++;
          }
          param_1.bl_tree[varData_179 * 2]++;
        } else if (varData_260 <= 10) {
          param_1.bl_tree[varData_180 * 2]++;
        } else {
          param_1.bl_tree[varData_181 * 2]++;
        }
        varData_260 = 0;
        varData_257 = varData_258;
        if (varData_259 === 0) {
          varData_261 = 138;
          varData_262 = 3;
        } else if (varData_258 === varData_259) {
          varData_261 = 6;
          varData_262 = 3;
        } else {
          varData_261 = 7;
          varData_262 = 4;
        }
      }
    };
    const varData_263 = (param_1, param_2, param_3) => {
      let varData_264;
      let varData_265 = -1;
      let varData_266;
      let varData_267 = param_2[1];
      let varData_268 = 0;
      let varData_269 = 7;
      let varData_270 = 4;
      if (varData_267 === 0) {
        varData_269 = 138;
        varData_270 = 3;
      }
      for (varData_264 = 0; varData_264 <= param_3; varData_264++) {
        varData_266 = varData_267;
        varData_267 = param_2[(varData_264 + 1) * 2 + 1];
        if (++varData_268 < varData_269 && varData_266 === varData_267) {
          continue;
        } else if (varData_268 < varData_270) {
          do {
            varData_199(param_1, varData_266, param_1.bl_tree);
          } while (--varData_268 !== 0);
        } else if (varData_266 !== 0) {
          if (varData_266 !== varData_265) {
            varData_199(param_1, varData_266, param_1.bl_tree);
            varData_268--;
          }
          varData_199(param_1, varData_179, param_1.bl_tree);
          varData_198(param_1, varData_268 - 3, 2);
        } else if (varData_268 <= 10) {
          varData_199(param_1, varData_180, param_1.bl_tree);
          varData_198(param_1, varData_268 - 3, 3);
        } else {
          varData_199(param_1, varData_181, param_1.bl_tree);
          varData_198(param_1, varData_268 - 11, 7);
        }
        varData_268 = 0;
        varData_265 = varData_266;
        if (varData_267 === 0) {
          varData_269 = 138;
          varData_270 = 3;
        } else if (varData_266 === varData_267) {
          varData_269 = 6;
          varData_270 = 3;
        } else {
          varData_269 = 7;
          varData_270 = 4;
        }
      }
    };
    const varData_271 = (param_1) => {
      let varData_272;
      varData_255(param_1, param_1.dyn_ltree, param_1.l_desc.max_code);
      varData_255(param_1, param_1.dyn_dtree, param_1.d_desc.max_code);
      varData_246(param_1, param_1.bl_desc);
      for (varData_272 = varData_173 - 1; varData_272 >= 3; varData_272--) {
        if (param_1.bl_tree[varData_185[varData_272] * 2 + 1] !== 0) {
          break;
        }
      }
      param_1.opt_len += (varData_272 + 1) * 3 + 5 + 5 + 4;
      return varData_272;
    };
    const varData_273 = (param_1, param_2, param_3, param_4) => {
      let varData_274;
      varData_198(param_1, param_2 - 257, 5);
      varData_198(param_1, param_3 - 1, 5);
      varData_198(param_1, param_4 - 4, 4);
      for (varData_274 = 0; varData_274 < param_4; varData_274++) {
        varData_198(param_1, param_1.bl_tree[varData_185[varData_274] * 2 + 1], 3);
      }
      varData_263(param_1, param_1.dyn_ltree, param_2 - 1);
      varData_263(param_1, param_1.dyn_dtree, param_3 - 1);
    };
    const varData_275 = (param_1) => {
      let varData_276 = 4093624447;
      let varData_277;
      for (varData_277 = 0; varData_277 <= 31; varData_277++, varData_276 >>>= 1) {
        if (varData_276 & 1 && param_1.dyn_ltree[varData_277 * 2] !== 0) {
          return varData_160;
        }
      }
      if (param_1.dyn_ltree[18] !== 0 || param_1.dyn_ltree[20] !== 0 || param_1.dyn_ltree[26] !== 0) {
        return varData_161;
      }
      for (varData_277 = 32; varData_277 < varData_170; varData_277++) {
        if (param_1.dyn_ltree[varData_277 * 2] !== 0) {
          return varData_161;
        }
      }
      return varData_160;
    };
    let isDisabled = false;
    const varData_278 = (param_1) => {
      if (!isDisabled) {
        varData_224();
        isDisabled = true;
      }
      param_1.l_desc = new handleAction_59(param_1.dyn_ltree, varData_193);
      param_1.d_desc = new handleAction_59(param_1.dyn_dtree, varData_194);
      param_1.bl_desc = new handleAction_59(param_1.bl_tree, varData_195);
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
      varData_231(param_1);
    };
    const varData_279 = (param_1, param_2, param_3, param_4) => {
      varData_198(param_1, (varData_164 << 1) + (param_4 ? 1 : 0), 3);
      varData_233(param_1);
      varData_197(param_1, param_3);
      varData_197(param_1, ~param_3);
      if (param_3) {
        param_1.pending_buf.set(param_1.window.subarray(param_2, param_2 + param_3), param_1.pending);
      }
      param_1.pending += param_3;
    };
    const varData_280 = (param_1) => {
      varData_198(param_1, varData_165 << 1, 3);
      varData_199(param_1, varData_178, varData_187);
      varData_202(param_1);
    };
    const varData_281 = (param_1, param_2, param_3, param_4) => {
      let varData_282;
      let varData_283;
      let varData_284 = 0;
      if (param_1.level > 0) {
        if (param_1.strm.data_type === varData_162) {
          param_1.strm.data_type = varData_275(param_1);
        }
        varData_246(param_1, param_1.l_desc);
        varData_246(param_1, param_1.d_desc);
        varData_284 = varData_271(param_1);
        varData_282 = param_1.opt_len + 3 + 7 >>> 3;
        varData_283 = param_1.static_len + 3 + 7 >>> 3;
        if (varData_283 <= varData_282) {
          varData_282 = varData_283;
        }
      } else {
        varData_282 = varData_283 = param_3 + 5;
      }
      if (param_3 + 4 <= varData_282 && param_2 !== -1) {
        varData_279(param_1, param_2, param_3, param_4);
      } else if (param_1.strategy === varData_159 || varData_283 === varData_282) {
        varData_198(param_1, (varData_165 << 1) + (param_4 ? 1 : 0), 3);
        varData_240(param_1, varData_187, varData_188);
      } else {
        varData_198(param_1, (varData_166 << 1) + (param_4 ? 1 : 0), 3);
        varData_273(param_1, param_1.l_desc.max_code + 1, param_1.d_desc.max_code + 1, varData_284 + 1);
        varData_240(param_1, param_1.dyn_ltree, param_1.dyn_dtree);
      }
      varData_231(param_1);
      if (param_4) {
        varData_233(param_1);
      }
    };
    const varData_285 = (param_1, param_2, param_3) => {
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2 >> 8;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_3;
      if (param_2 === 0) {
        param_1.dyn_ltree[param_3 * 2]++;
      } else {
        param_1.matches++;
        param_2--;
        param_1.dyn_ltree[(varData_190[param_3] + varData_170 + 1) * 2]++;
        param_1.dyn_dtree[varData_196(param_2) * 2]++;
      }
      return param_1.sym_next === param_1.sym_end;
    };
    var varData_286 = varData_278;
    var varData_287 = varData_279;
    var varData_288 = varData_281;
    var varData_289 = varData_285;
    var varData_290 = varData_280;
    var varData_291 = {
      _tr_init: varData_286,
      _tr_stored_block: varData_287,
      _tr_flush_block: varData_288,
      _tr_tally: varData_289,
      _tr_align: varData_290
    };
    var varData_292 = varData_291;
    const varData_293 = (param_1, param_2, param_3, param_4) => {
      let varData_294 = param_1 & 65535 | 0;
      let varData_295 = param_1 >>> 16 & 65535 | 0;
      let varData_296 = 0;
      while (param_3 !== 0) {
        varData_296 = param_3 > 2e3 ? 2e3 : param_3;
        param_3 -= varData_296;
        do {
          varData_294 = varData_294 + param_2[param_4++] | 0;
          varData_295 = varData_295 + varData_294 | 0;
        } while (--varData_296);
        varData_294 %= 65521;
        varData_295 %= 65521;
      }
      return varData_294 | varData_295 << 16 | 0;
    };
    var varData_297 = varData_293;
    const varData_298 = () => {
      let varData_299;
      let varData_300 = [];
      for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
        varData_299 = loopIdx;
        for (var loopIdx_1 = 0; loopIdx_1 < 8; loopIdx_1++) {
          varData_299 = varData_299 & 1 ? varData_299 >>> 1 ^ -306674912 : varData_299 >>> 1;
        }
        varData_300[loopIdx] = varData_299;
      }
      return varData_300;
    };
    const varData_301 = new Uint32Array(varData_298());
    const varData_302 = (param_1, param_2, param_3, param_4) => {
      const varData_303 = varData_301;
      const varData_304 = param_4 + param_3;
      param_1 ^= -1;
      for (let loopIdx = param_4; loopIdx < varData_304; loopIdx++) {
        param_1 = param_1 >>> 8 ^ varData_303[(param_1 ^ param_2[loopIdx]) & 255];
      }
      return param_1 ^ -1;
    };
    var varData_305 = varData_302;
    var varData_306 = {
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
    var varData_307 = {
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
    var varData_308 = varData_307;
    const {
      _tr_init: _0x1ee2da,
      _tr_stored_block: _0xda9bd4,
      _tr_flush_block: _0x2aba1e,
      _tr_tally: _0x59960f,
      _tr_align: _0x5c6675
    } = varData_292;
    const {
      Z_NO_FLUSH: _0x303fa9,
      Z_PARTIAL_FLUSH: _0x3154d2,
      Z_FULL_FLUSH: _0x55969d,
      Z_FINISH: _0x13e840,
      Z_BLOCK: _0x3ccb41,
      Z_OK: _0x37b127,
      Z_STREAM_END: _0x33e2fc,
      Z_STREAM_ERROR: _0x39909c,
      Z_DATA_ERROR: _0x383df4,
      Z_BUF_ERROR: _0x4399fb,
      Z_DEFAULT_COMPRESSION: _0x16f16e,
      Z_FILTERED: _0x2c184a,
      Z_HUFFMAN_ONLY: _0x335b58,
      Z_RLE: _0x267a2,
      Z_FIXED: _0x4c3129,
      Z_DEFAULT_STRATEGY: _0x36da71,
      Z_UNKNOWN: _0x575f66,
      Z_DEFLATED: _0x2027e0
    } = varData_308;
    const varData_309 = 9;
    const varData_310 = 15;
    const varData_311 = 8;
    const varData_312 = 29;
    const varData_313 = 256;
    const varData_314 = varData_313 + 1 + varData_312;
    const varData_315 = 30;
    const varData_316 = 19;
    const varData_317 = varData_314 * 2 + 1;
    const varData_318 = 15;
    const varData_319 = 3;
    const varData_320 = 258;
    const varData_321 = varData_320 + varData_319 + 1;
    const varData_322 = 32;
    const varData_323 = 42;
    const varData_324 = 57;
    const varData_325 = 69;
    const varData_326 = 73;
    const varData_327 = 91;
    const varData_328 = 103;
    const varData_329 = 113;
    const varData_330 = 666;
    const varData_331 = 1;
    const varData_332 = 2;
    const varData_333 = 3;
    const varData_334 = 4;
    const varData_335 = 3;
    const varData_336 = (param_1, param_2) => {
      param_1.msg = varData_306[param_2];
      return param_2;
    };
    const varData_337 = (param_1) => {
      return param_1 * 2 - (param_1 > 4 ? 9 : 0);
    };
    const varData_338 = (param_1) => {
      let varData_339 = param_1.length;
      while (--varData_339 >= 0) {
        param_1[varData_339] = 0;
      }
    };
    const varData_340 = (param_1) => {
      let varData_341;
      let varData_342;
      let varData_343;
      let varData_344 = param_1.w_size;
      varData_341 = param_1.hash_size;
      varData_343 = varData_341;
      do {
        varData_342 = param_1.head[--varData_343];
        param_1.head[varData_343] = varData_342 >= varData_344 ? varData_342 - varData_344 : 0;
      } while (--varData_341);
      varData_341 = varData_344;
      varData_343 = varData_341;
      do {
        varData_342 = param_1.prev[--varData_343];
        param_1.prev[varData_343] = varData_342 >= varData_344 ? varData_342 - varData_344 : 0;
      } while (--varData_341);
    };
    let varData_345 = (param_1, param_2, param_3) => (param_2 << param_1.hash_shift ^ param_3) & param_1.hash_mask;
    let varData_346 = varData_345;
    const varData_347 = (param_1) => {
      const varData_348 = param_1.state;
      let varData_349 = varData_348.pending;
      if (varData_349 > param_1.avail_out) {
        varData_349 = param_1.avail_out;
      }
      if (varData_349 === 0) {
        return;
      }
      param_1.output.set(varData_348.pending_buf.subarray(varData_348.pending_out, varData_348.pending_out + varData_349), param_1.next_out);
      param_1.next_out += varData_349;
      varData_348.pending_out += varData_349;
      param_1.total_out += varData_349;
      param_1.avail_out -= varData_349;
      varData_348.pending -= varData_349;
      if (varData_348.pending === 0) {
        varData_348.pending_out = 0;
      }
    };
    const varData_350 = (param_1, param_2) => {
      _0x2aba1e(param_1, param_1.block_start >= 0 ? param_1.block_start : -1, param_1.strstart - param_1.block_start, param_2);
      param_1.block_start = param_1.strstart;
      varData_347(param_1.strm);
    };
    const varData_351 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2;
    };
    const varData_352 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
    };
    const varData_353 = (param_1, param_2, param_3, param_4) => {
      let varData_354 = param_1.avail_in;
      if (varData_354 > param_4) {
        varData_354 = param_4;
      }
      if (varData_354 === 0) {
        return 0;
      }
      param_1.avail_in -= varData_354;
      param_2.set(param_1.input.subarray(param_1.next_in, param_1.next_in + varData_354), param_3);
      if (param_1.state.wrap === 1) {
        param_1.adler = varData_297(param_1.adler, param_2, varData_354, param_3);
      } else if (param_1.state.wrap === 2) {
        param_1.adler = varData_305(param_1.adler, param_2, varData_354, param_3);
      }
      param_1.next_in += varData_354;
      param_1.total_in += varData_354;
      return varData_354;
    };
    const varData_355 = (param_1, param_2) => {
      let varData_356 = param_1.max_chain_length;
      let varData_357 = param_1.strstart;
      let varData_358;
      let varData_359;
      let varData_360 = param_1.prev_length;
      let varData_361 = param_1.nice_match;
      const varData_362 = param_1.strstart > param_1.w_size - varData_321 ? param_1.strstart - (param_1.w_size - varData_321) : 0;
      const varData_363 = param_1.window;
      const varData_364 = param_1.w_mask;
      const varData_365 = param_1.prev;
      const varData_366 = param_1.strstart + varData_320;
      let varData_367 = varData_363[varData_357 + varData_360 - 1];
      let varData_368 = varData_363[varData_357 + varData_360];
      if (param_1.prev_length >= param_1.good_match) {
        varData_356 >>= 2;
      }
      if (varData_361 > param_1.lookahead) {
        varData_361 = param_1.lookahead;
      }
      do {
        varData_358 = param_2;
        if (varData_363[varData_358 + varData_360] !== varData_368 || varData_363[varData_358 + varData_360 - 1] !== varData_367 || varData_363[varData_358] !== varData_363[varData_357] || varData_363[++varData_358] !== varData_363[varData_357 + 1]) {
          continue;
        }
        varData_357 += 2;
        varData_358++;
        do {
        } while (varData_363[++varData_357] === varData_363[++varData_358] && varData_363[++varData_357] === varData_363[++varData_358] && varData_363[++varData_357] === varData_363[++varData_358] && varData_363[++varData_357] === varData_363[++varData_358] && varData_363[++varData_357] === varData_363[++varData_358] && varData_363[++varData_357] === varData_363[++varData_358] && varData_363[++varData_357] === varData_363[++varData_358] && varData_363[++varData_357] === varData_363[++varData_358] && varData_357 < varData_366);
        varData_359 = varData_320 - (varData_366 - varData_357);
        varData_357 = varData_366 - varData_320;
        if (varData_359 > varData_360) {
          param_1.match_start = param_2;
          varData_360 = varData_359;
          if (varData_359 >= varData_361) {
            break;
          }
          varData_367 = varData_363[varData_357 + varData_360 - 1];
          varData_368 = varData_363[varData_357 + varData_360];
        }
      } while ((param_2 = varData_365[param_2 & varData_364]) > varData_362 && --varData_356 !== 0);
      if (varData_360 <= param_1.lookahead) {
        return varData_360;
      }
      return param_1.lookahead;
    };
    const varData_369 = (param_1) => {
      const varData_370 = param_1.w_size;
      let varData_371;
      let varData_372;
      let varData_373;
      do {
        varData_372 = param_1.window_size - param_1.lookahead - param_1.strstart;
        if (param_1.strstart >= varData_370 + (varData_370 - varData_321)) {
          param_1.window.set(param_1.window.subarray(varData_370, varData_370 + varData_370 - varData_372), 0);
          param_1.match_start -= varData_370;
          param_1.strstart -= varData_370;
          param_1.block_start -= varData_370;
          if (param_1.insert > param_1.strstart) {
            param_1.insert = param_1.strstart;
          }
          varData_340(param_1);
          varData_372 += varData_370;
        }
        if (param_1.strm.avail_in === 0) {
          break;
        }
        varData_371 = varData_353(param_1.strm, param_1.window, param_1.strstart + param_1.lookahead, varData_372);
        param_1.lookahead += varData_371;
        if (param_1.lookahead + param_1.insert >= varData_319) {
          varData_373 = param_1.strstart - param_1.insert;
          param_1.ins_h = param_1.window[varData_373];
          param_1.ins_h = varData_346(param_1, param_1.ins_h, param_1.window[varData_373 + 1]);
          while (param_1.insert) {
            param_1.ins_h = varData_346(param_1, param_1.ins_h, param_1.window[varData_373 + varData_319 - 1]);
            param_1.prev[varData_373 & param_1.w_mask] = param_1.head[param_1.ins_h];
            param_1.head[param_1.ins_h] = varData_373;
            varData_373++;
            param_1.insert--;
            if (param_1.lookahead + param_1.insert < varData_319) {
              break;
            }
          }
        }
      } while (param_1.lookahead < varData_321 && param_1.strm.avail_in !== 0);
    };
    const varData_374 = (param_1, param_2) => {
      let varData_375 = param_1.pending_buf_size - 5 > param_1.w_size ? param_1.w_size : param_1.pending_buf_size - 5;
      let varData_376;
      let varData_377;
      let varData_378;
      let varData_379 = 0;
      let varData_380 = param_1.strm.avail_in;
      do {
        varData_376 = 65535;
        varData_378 = param_1.bi_valid + 42 >> 3;
        if (param_1.strm.avail_out < varData_378) {
          break;
        }
        varData_378 = param_1.strm.avail_out - varData_378;
        varData_377 = param_1.strstart - param_1.block_start;
        if (varData_376 > varData_377 + param_1.strm.avail_in) {
          varData_376 = varData_377 + param_1.strm.avail_in;
        }
        if (varData_376 > varData_378) {
          varData_376 = varData_378;
        }
        if (varData_376 < varData_375 && (varData_376 === 0 && param_2 !== _0x13e840 || param_2 === _0x303fa9 || varData_376 !== varData_377 + param_1.strm.avail_in)) {
          break;
        }
        varData_379 = param_2 === _0x13e840 && varData_376 === varData_377 + param_1.strm.avail_in ? 1 : 0;
        _0xda9bd4(param_1, 0, 0, varData_379);
        param_1.pending_buf[param_1.pending - 4] = varData_376;
        param_1.pending_buf[param_1.pending - 3] = varData_376 >> 8;
        param_1.pending_buf[param_1.pending - 2] = ~varData_376;
        param_1.pending_buf[param_1.pending - 1] = ~varData_376 >> 8;
        varData_347(param_1.strm);
        if (varData_377) {
          if (varData_377 > varData_376) {
            varData_377 = varData_376;
          }
          param_1.strm.output.set(param_1.window.subarray(param_1.block_start, param_1.block_start + varData_377), param_1.strm.next_out);
          param_1.strm.next_out += varData_377;
          param_1.strm.avail_out -= varData_377;
          param_1.strm.total_out += varData_377;
          param_1.block_start += varData_377;
          varData_376 -= varData_377;
        }
        if (varData_376) {
          varData_353(param_1.strm, param_1.strm.output, param_1.strm.next_out, varData_376);
          param_1.strm.next_out += varData_376;
          param_1.strm.avail_out -= varData_376;
          param_1.strm.total_out += varData_376;
        }
      } while (varData_379 === 0);
      varData_380 -= param_1.strm.avail_in;
      if (varData_380) {
        if (varData_380 >= param_1.w_size) {
          param_1.matches = 2;
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - param_1.w_size, param_1.strm.next_in), 0);
          param_1.strstart = param_1.w_size;
          param_1.insert = param_1.strstart;
        } else {
          if (param_1.window_size - param_1.strstart <= varData_380) {
            param_1.strstart -= param_1.w_size;
            param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
            if (param_1.matches < 2) {
              param_1.matches++;
            }
            if (param_1.insert > param_1.strstart) {
              param_1.insert = param_1.strstart;
            }
          }
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - varData_380, param_1.strm.next_in), param_1.strstart);
          param_1.strstart += varData_380;
          param_1.insert += varData_380 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_380;
        }
        param_1.block_start = param_1.strstart;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      if (varData_379) {
        return varData_334;
      }
      if (param_2 !== _0x303fa9 && param_2 !== _0x13e840 && param_1.strm.avail_in === 0 && param_1.strstart === param_1.block_start) {
        return varData_332;
      }
      varData_378 = param_1.window_size - param_1.strstart;
      if (param_1.strm.avail_in > varData_378 && param_1.block_start >= param_1.w_size) {
        param_1.block_start -= param_1.w_size;
        param_1.strstart -= param_1.w_size;
        param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
        if (param_1.matches < 2) {
          param_1.matches++;
        }
        varData_378 += param_1.w_size;
        if (param_1.insert > param_1.strstart) {
          param_1.insert = param_1.strstart;
        }
      }
      if (varData_378 > param_1.strm.avail_in) {
        varData_378 = param_1.strm.avail_in;
      }
      if (varData_378) {
        varData_353(param_1.strm, param_1.window, param_1.strstart, varData_378);
        param_1.strstart += varData_378;
        param_1.insert += varData_378 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_378;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      varData_378 = param_1.bi_valid + 42 >> 3;
      varData_378 = param_1.pending_buf_size - varData_378 > 65535 ? 65535 : param_1.pending_buf_size - varData_378;
      varData_375 = varData_378 > param_1.w_size ? param_1.w_size : varData_378;
      varData_377 = param_1.strstart - param_1.block_start;
      if (varData_377 >= varData_375 || (varData_377 || param_2 === _0x13e840) && param_2 !== _0x303fa9 && param_1.strm.avail_in === 0 && varData_377 <= varData_378) {
        varData_376 = varData_377 > varData_378 ? varData_378 : varData_377;
        varData_379 = param_2 === _0x13e840 && param_1.strm.avail_in === 0 && varData_376 === varData_377 ? 1 : 0;
        _0xda9bd4(param_1, param_1.block_start, varData_376, varData_379);
        param_1.block_start += varData_376;
        varData_347(param_1.strm);
      }
      if (varData_379) {
        return varData_333;
      } else {
        return varData_331;
      }
    };
    const varData_381 = (param_1, param_2) => {
      let varData_382;
      let varData_383;
      while (true) {
        if (param_1.lookahead < varData_321) {
          varData_369(param_1);
          if (param_1.lookahead < varData_321 && param_2 === _0x303fa9) {
            return varData_331;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_382 = 0;
        if (param_1.lookahead >= varData_319) {
          param_1.ins_h = varData_346(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_319 - 1]);
          varData_382 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        if (varData_382 !== 0 && param_1.strstart - varData_382 <= param_1.w_size - varData_321) {
          param_1.match_length = varData_355(param_1, varData_382);
        }
        if (param_1.match_length >= varData_319) {
          varData_383 = _0x59960f(param_1, param_1.strstart - param_1.match_start, param_1.match_length - varData_319);
          param_1.lookahead -= param_1.match_length;
          if (param_1.match_length <= param_1.max_lazy_match && param_1.lookahead >= varData_319) {
            param_1.match_length--;
            do {
              param_1.strstart++;
              param_1.ins_h = varData_346(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_319 - 1]);
              varData_382 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            } while (--param_1.match_length !== 0);
            param_1.strstart++;
          } else {
            param_1.strstart += param_1.match_length;
            param_1.match_length = 0;
            param_1.ins_h = param_1.window[param_1.strstart];
            param_1.ins_h = varData_346(param_1, param_1.ins_h, param_1.window[param_1.strstart + 1]);
          }
        } else {
          varData_383 = _0x59960f(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_383) {
          varData_350(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_331;
          }
        }
      }
      param_1.insert = param_1.strstart < varData_319 - 1 ? param_1.strstart : varData_319 - 1;
      if (param_2 === _0x13e840) {
        varData_350(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_333;
        }
        return varData_334;
      }
      if (param_1.sym_next) {
        varData_350(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_331;
        }
      }
      return varData_332;
    };
    const varData_384 = (param_1, param_2) => {
      let varData_385;
      let varData_386;
      let varData_387;
      while (true) {
        if (param_1.lookahead < varData_321) {
          varData_369(param_1);
          if (param_1.lookahead < varData_321 && param_2 === _0x303fa9) {
            return varData_331;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_385 = 0;
        if (param_1.lookahead >= varData_319) {
          param_1.ins_h = varData_346(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_319 - 1]);
          varData_385 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        param_1.prev_length = param_1.match_length;
        param_1.prev_match = param_1.match_start;
        param_1.match_length = varData_319 - 1;
        if (varData_385 !== 0 && param_1.prev_length < param_1.max_lazy_match && param_1.strstart - varData_385 <= param_1.w_size - varData_321) {
          param_1.match_length = varData_355(param_1, varData_385);
          if (param_1.match_length <= 5 && (param_1.strategy === _0x2c184a || param_1.match_length === varData_319 && param_1.strstart - param_1.match_start > 4096)) {
            param_1.match_length = varData_319 - 1;
          }
        }
        if (param_1.prev_length >= varData_319 && param_1.match_length <= param_1.prev_length) {
          varData_387 = param_1.strstart + param_1.lookahead - varData_319;
          varData_386 = _0x59960f(param_1, param_1.strstart - 1 - param_1.prev_match, param_1.prev_length - varData_319);
          param_1.lookahead -= param_1.prev_length - 1;
          param_1.prev_length -= 2;
          do {
            if (++param_1.strstart <= varData_387) {
              param_1.ins_h = varData_346(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_319 - 1]);
              varData_385 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            }
          } while (--param_1.prev_length !== 0);
          param_1.match_available = 0;
          param_1.match_length = varData_319 - 1;
          param_1.strstart++;
          if (varData_386) {
            varData_350(param_1, false);
            if (param_1.strm.avail_out === 0) {
              return varData_331;
            }
          }
        } else if (param_1.match_available) {
          varData_386 = _0x59960f(param_1, 0, param_1.window[param_1.strstart - 1]);
          if (varData_386) {
            varData_350(param_1, false);
          }
          param_1.strstart++;
          param_1.lookahead--;
          if (param_1.strm.avail_out === 0) {
            return varData_331;
          }
        } else {
          param_1.match_available = 1;
          param_1.strstart++;
          param_1.lookahead--;
        }
      }
      if (param_1.match_available) {
        varData_386 = _0x59960f(param_1, 0, param_1.window[param_1.strstart - 1]);
        param_1.match_available = 0;
      }
      param_1.insert = param_1.strstart < varData_319 - 1 ? param_1.strstart : varData_319 - 1;
      if (param_2 === _0x13e840) {
        varData_350(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_333;
        }
        return varData_334;
      }
      if (param_1.sym_next) {
        varData_350(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_331;
        }
      }
      return varData_332;
    };
    const varData_388 = (param_1, param_2) => {
      let varData_389;
      let varData_390;
      let varData_391;
      let varData_392;
      const varData_393 = param_1.window;
      while (true) {
        if (param_1.lookahead <= varData_320) {
          varData_369(param_1);
          if (param_1.lookahead <= varData_320 && param_2 === _0x303fa9) {
            return varData_331;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        param_1.match_length = 0;
        if (param_1.lookahead >= varData_319 && param_1.strstart > 0) {
          varData_391 = param_1.strstart - 1;
          varData_390 = varData_393[varData_391];
          if (varData_390 === varData_393[++varData_391] && varData_390 === varData_393[++varData_391] && varData_390 === varData_393[++varData_391]) {
            varData_392 = param_1.strstart + varData_320;
            do {
            } while (varData_390 === varData_393[++varData_391] && varData_390 === varData_393[++varData_391] && varData_390 === varData_393[++varData_391] && varData_390 === varData_393[++varData_391] && varData_390 === varData_393[++varData_391] && varData_390 === varData_393[++varData_391] && varData_390 === varData_393[++varData_391] && varData_390 === varData_393[++varData_391] && varData_391 < varData_392);
            param_1.match_length = varData_320 - (varData_392 - varData_391);
            if (param_1.match_length > param_1.lookahead) {
              param_1.match_length = param_1.lookahead;
            }
          }
        }
        if (param_1.match_length >= varData_319) {
          varData_389 = _0x59960f(param_1, 1, param_1.match_length - varData_319);
          param_1.lookahead -= param_1.match_length;
          param_1.strstart += param_1.match_length;
          param_1.match_length = 0;
        } else {
          varData_389 = _0x59960f(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_389) {
          varData_350(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_331;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0x13e840) {
        varData_350(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_333;
        }
        return varData_334;
      }
      if (param_1.sym_next) {
        varData_350(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_331;
        }
      }
      return varData_332;
    };
    const varData_394 = (param_1, param_2) => {
      let varData_395;
      while (true) {
        if (param_1.lookahead === 0) {
          varData_369(param_1);
          if (param_1.lookahead === 0) {
            if (param_2 === _0x303fa9) {
              return varData_331;
            }
            break;
          }
        }
        param_1.match_length = 0;
        varData_395 = _0x59960f(param_1, 0, param_1.window[param_1.strstart]);
        param_1.lookahead--;
        param_1.strstart++;
        if (varData_395) {
          varData_350(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_331;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0x13e840) {
        varData_350(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_333;
        }
        return varData_334;
      }
      if (param_1.sym_next) {
        varData_350(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_331;
        }
      }
      return varData_332;
    };
    function handleAction_60(param_1, param_2, param_3, param_4, param_5) {
      this.good_length = param_1;
      this.max_lazy = param_2;
      this.nice_length = param_3;
      this.max_chain = param_4;
      this.func = param_5;
    }
    const varData_396 = [new handleAction_60(0, 0, 0, 0, varData_374), new handleAction_60(4, 4, 8, 4, varData_381), new handleAction_60(4, 5, 16, 8, varData_381), new handleAction_60(4, 6, 32, 32, varData_381), new handleAction_60(4, 4, 16, 16, varData_384), new handleAction_60(8, 16, 32, 32, varData_384), new handleAction_60(8, 16, 128, 128, varData_384), new handleAction_60(8, 32, 128, 256, varData_384), new handleAction_60(32, 128, 258, 1024, varData_384), new handleAction_60(32, 258, 258, 4096, varData_384)];
    const varData_397 = (param_1) => {
      param_1.window_size = param_1.w_size * 2;
      varData_338(param_1.head);
      param_1.max_lazy_match = varData_396[param_1.level].max_lazy;
      param_1.good_match = varData_396[param_1.level].good_length;
      param_1.nice_match = varData_396[param_1.level].nice_length;
      param_1.max_chain_length = varData_396[param_1.level].max_chain;
      param_1.strstart = 0;
      param_1.block_start = 0;
      param_1.lookahead = 0;
      param_1.insert = 0;
      param_1.match_length = param_1.prev_length = varData_319 - 1;
      param_1.match_available = 0;
      param_1.ins_h = 0;
    };
    function handleAction_61() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = _0x2027e0;
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
      this.dyn_ltree = new Uint16Array(varData_317 * 2);
      this.dyn_dtree = new Uint16Array((varData_315 * 2 + 1) * 2);
      this.bl_tree = new Uint16Array((varData_316 * 2 + 1) * 2);
      varData_338(this.dyn_ltree);
      varData_338(this.dyn_dtree);
      varData_338(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(varData_318 + 1);
      this.heap = new Uint16Array(varData_314 * 2 + 1);
      varData_338(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(varData_314 * 2 + 1);
      varData_338(this.depth);
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
    const varData_398 = (param_1) => {
      if (!param_1) {
        return 1;
      }
      const varData_399 = param_1.state;
      if (!varData_399 || varData_399.strm !== param_1 || varData_399.status !== varData_323 && varData_399.status !== varData_324 && varData_399.status !== varData_325 && varData_399.status !== varData_326 && varData_399.status !== varData_327 && varData_399.status !== varData_328 && varData_399.status !== varData_329 && varData_399.status !== varData_330) {
        return 1;
      }
      return 0;
    };
    const varData_400 = (param_1) => {
      if (varData_398(param_1)) {
        return varData_336(param_1, _0x39909c);
      }
      param_1.total_in = param_1.total_out = 0;
      param_1.data_type = _0x575f66;
      const varData_401 = param_1.state;
      varData_401.pending = 0;
      varData_401.pending_out = 0;
      if (varData_401.wrap < 0) {
        varData_401.wrap = -varData_401.wrap;
      }
      varData_401.status = varData_401.wrap === 2 ? varData_324 : varData_401.wrap ? varData_323 : varData_329;
      param_1.adler = varData_401.wrap === 2 ? 0 : 1;
      varData_401.last_flush = -2;
      _0x1ee2da(varData_401);
      return _0x37b127;
    };
    const varData_402 = (param_1) => {
      const varData_403 = varData_400(param_1);
      if (varData_403 === _0x37b127) {
        varData_397(param_1.state);
      }
      return varData_403;
    };
    const varData_404 = (param_1, param_2) => {
      if (varData_398(param_1) || param_1.state.wrap !== 2) {
        return _0x39909c;
      }
      param_1.state.gzhead = param_2;
      return _0x37b127;
    };
    const varData_405 = (param_1, param_2, param_3, param_4, param_5, param_6) => {
      if (!param_1) {
        return _0x39909c;
      }
      let varData_406 = 1;
      if (param_2 === _0x16f16e) {
        param_2 = 6;
      }
      if (param_4 < 0) {
        varData_406 = 0;
        param_4 = -param_4;
      } else if (param_4 > 15) {
        varData_406 = 2;
        param_4 -= 16;
      }
      if (param_5 < 1 || param_5 > varData_309 || param_3 !== _0x2027e0 || param_4 < 8 || param_4 > 15 || param_2 < 0 || param_2 > 9 || param_6 < 0 || param_6 > _0x4c3129 || param_4 === 8 && varData_406 !== 1) {
        return varData_336(param_1, _0x39909c);
      }
      if (param_4 === 8) {
        param_4 = 9;
      }
      const varData_407 = new handleAction_61();
      param_1.state = varData_407;
      varData_407.strm = param_1;
      varData_407.status = varData_323;
      varData_407.wrap = varData_406;
      varData_407.gzhead = null;
      varData_407.w_bits = param_4;
      varData_407.w_size = 1 << varData_407.w_bits;
      varData_407.w_mask = varData_407.w_size - 1;
      varData_407.hash_bits = param_5 + 7;
      varData_407.hash_size = 1 << varData_407.hash_bits;
      varData_407.hash_mask = varData_407.hash_size - 1;
      varData_407.hash_shift = ~~((varData_407.hash_bits + varData_319 - 1) / varData_319);
      varData_407.window = new Uint8Array(varData_407.w_size * 2);
      varData_407.head = new Uint16Array(varData_407.hash_size);
      varData_407.prev = new Uint16Array(varData_407.w_size);
      varData_407.lit_bufsize = 1 << param_5 + 6;
      varData_407.pending_buf_size = varData_407.lit_bufsize * 4;
      varData_407.pending_buf = new Uint8Array(varData_407.pending_buf_size);
      varData_407.sym_buf = varData_407.lit_bufsize;
      varData_407.sym_end = (varData_407.lit_bufsize - 1) * 3;
      varData_407.level = param_2;
      varData_407.strategy = param_6;
      varData_407.method = param_3;
      return varData_402(param_1);
    };
    const varData_408 = (param_1, param_2) => {
      return varData_405(param_1, param_2, _0x2027e0, varData_310, varData_311, _0x36da71);
    };
    const varData_409 = (param_1, param_2) => {
      if (varData_398(param_1) || param_2 > _0x3ccb41 || param_2 < 0) {
        if (param_1) {
          return varData_336(param_1, _0x39909c);
        } else {
          return _0x39909c;
        }
      }
      const varData_410 = param_1.state;
      if (!param_1.output || param_1.avail_in !== 0 && !param_1.input || varData_410.status === varData_330 && param_2 !== _0x13e840) {
        return varData_336(param_1, param_1.avail_out === 0 ? _0x4399fb : _0x39909c);
      }
      const varData_411 = varData_410.last_flush;
      varData_410.last_flush = param_2;
      if (varData_410.pending !== 0) {
        varData_347(param_1);
        if (param_1.avail_out === 0) {
          varData_410.last_flush = -1;
          return _0x37b127;
        }
      } else if (param_1.avail_in === 0 && varData_337(param_2) <= varData_337(varData_411) && param_2 !== _0x13e840) {
        return varData_336(param_1, _0x4399fb);
      }
      if (varData_410.status === varData_330 && param_1.avail_in !== 0) {
        return varData_336(param_1, _0x4399fb);
      }
      if (varData_410.status === varData_323 && varData_410.wrap === 0) {
        varData_410.status = varData_329;
      }
      if (varData_410.status === varData_323) {
        let varData_412 = _0x2027e0 + (varData_410.w_bits - 8 << 4) << 8;
        let varData_413 = -1;
        if (varData_410.strategy >= _0x335b58 || varData_410.level < 2) {
          varData_413 = 0;
        } else if (varData_410.level < 6) {
          varData_413 = 1;
        } else if (varData_410.level === 6) {
          varData_413 = 2;
        } else {
          varData_413 = 3;
        }
        varData_412 |= varData_413 << 6;
        if (varData_410.strstart !== 0) {
          varData_412 |= varData_322;
        }
        varData_412 += 31 - varData_412 % 31;
        varData_352(varData_410, varData_412);
        if (varData_410.strstart !== 0) {
          varData_352(varData_410, param_1.adler >>> 16);
          varData_352(varData_410, param_1.adler & 65535);
        }
        param_1.adler = 1;
        varData_410.status = varData_329;
        varData_347(param_1);
        if (varData_410.pending !== 0) {
          varData_410.last_flush = -1;
          return _0x37b127;
        }
      }
      if (varData_410.status === varData_324) {
        param_1.adler = 0;
        varData_351(varData_410, 31);
        varData_351(varData_410, 139);
        varData_351(varData_410, 8);
        if (!varData_410.gzhead) {
          varData_351(varData_410, 0);
          varData_351(varData_410, 0);
          varData_351(varData_410, 0);
          varData_351(varData_410, 0);
          varData_351(varData_410, 0);
          varData_351(varData_410, varData_410.level === 9 ? 2 : varData_410.strategy >= _0x335b58 || varData_410.level < 2 ? 4 : 0);
          varData_351(varData_410, varData_335);
          varData_410.status = varData_329;
          varData_347(param_1);
          if (varData_410.pending !== 0) {
            varData_410.last_flush = -1;
            return _0x37b127;
          }
        } else {
          varData_351(varData_410, (varData_410.gzhead.text ? 1 : 0) + (varData_410.gzhead.hcrc ? 2 : 0) + (!varData_410.gzhead.extra ? 0 : 4) + (!varData_410.gzhead.name ? 0 : 8) + (!varData_410.gzhead.comment ? 0 : 16));
          varData_351(varData_410, varData_410.gzhead.time & 255);
          varData_351(varData_410, varData_410.gzhead.time >> 8 & 255);
          varData_351(varData_410, varData_410.gzhead.time >> 16 & 255);
          varData_351(varData_410, varData_410.gzhead.time >> 24 & 255);
          varData_351(varData_410, varData_410.level === 9 ? 2 : varData_410.strategy >= _0x335b58 || varData_410.level < 2 ? 4 : 0);
          varData_351(varData_410, varData_410.gzhead.os & 255);
          if (varData_410.gzhead.extra && varData_410.gzhead.extra.length) {
            varData_351(varData_410, varData_410.gzhead.extra.length & 255);
            varData_351(varData_410, varData_410.gzhead.extra.length >> 8 & 255);
          }
          if (varData_410.gzhead.hcrc) {
            param_1.adler = varData_305(param_1.adler, varData_410.pending_buf, varData_410.pending, 0);
          }
          varData_410.gzindex = 0;
          varData_410.status = varData_325;
        }
      }
      if (varData_410.status === varData_325) {
        if (varData_410.gzhead.extra) {
          let varData_414 = varData_410.pending;
          let varData_415 = (varData_410.gzhead.extra.length & 65535) - varData_410.gzindex;
          while (varData_410.pending + varData_415 > varData_410.pending_buf_size) {
            let varData_416 = varData_410.pending_buf_size - varData_410.pending;
            varData_410.pending_buf.set(varData_410.gzhead.extra.subarray(varData_410.gzindex, varData_410.gzindex + varData_416), varData_410.pending);
            varData_410.pending = varData_410.pending_buf_size;
            if (varData_410.gzhead.hcrc && varData_410.pending > varData_414) {
              param_1.adler = varData_305(param_1.adler, varData_410.pending_buf, varData_410.pending - varData_414, varData_414);
            }
            varData_410.gzindex += varData_416;
            varData_347(param_1);
            if (varData_410.pending !== 0) {
              varData_410.last_flush = -1;
              return _0x37b127;
            }
            varData_414 = 0;
            varData_415 -= varData_416;
          }
          let varData_417 = new Uint8Array(varData_410.gzhead.extra);
          varData_410.pending_buf.set(varData_417.subarray(varData_410.gzindex, varData_410.gzindex + varData_415), varData_410.pending);
          varData_410.pending += varData_415;
          if (varData_410.gzhead.hcrc && varData_410.pending > varData_414) {
            param_1.adler = varData_305(param_1.adler, varData_410.pending_buf, varData_410.pending - varData_414, varData_414);
          }
          varData_410.gzindex = 0;
        }
        varData_410.status = varData_326;
      }
      if (varData_410.status === varData_326) {
        if (varData_410.gzhead.name) {
          let varData_418 = varData_410.pending;
          let varData_419;
          do {
            if (varData_410.pending === varData_410.pending_buf_size) {
              if (varData_410.gzhead.hcrc && varData_410.pending > varData_418) {
                param_1.adler = varData_305(param_1.adler, varData_410.pending_buf, varData_410.pending - varData_418, varData_418);
              }
              varData_347(param_1);
              if (varData_410.pending !== 0) {
                varData_410.last_flush = -1;
                return _0x37b127;
              }
              varData_418 = 0;
            }
            if (varData_410.gzindex < varData_410.gzhead.name.length) {
              varData_419 = varData_410.gzhead.name.charCodeAt(varData_410.gzindex++) & 255;
            } else {
              varData_419 = 0;
            }
            varData_351(varData_410, varData_419);
          } while (varData_419 !== 0);
          if (varData_410.gzhead.hcrc && varData_410.pending > varData_418) {
            param_1.adler = varData_305(param_1.adler, varData_410.pending_buf, varData_410.pending - varData_418, varData_418);
          }
          varData_410.gzindex = 0;
        }
        varData_410.status = varData_327;
      }
      if (varData_410.status === varData_327) {
        if (varData_410.gzhead.comment) {
          let varData_420 = varData_410.pending;
          let varData_421;
          do {
            if (varData_410.pending === varData_410.pending_buf_size) {
              if (varData_410.gzhead.hcrc && varData_410.pending > varData_420) {
                param_1.adler = varData_305(param_1.adler, varData_410.pending_buf, varData_410.pending - varData_420, varData_420);
              }
              varData_347(param_1);
              if (varData_410.pending !== 0) {
                varData_410.last_flush = -1;
                return _0x37b127;
              }
              varData_420 = 0;
            }
            if (varData_410.gzindex < varData_410.gzhead.comment.length) {
              varData_421 = varData_410.gzhead.comment.charCodeAt(varData_410.gzindex++) & 255;
            } else {
              varData_421 = 0;
            }
            varData_351(varData_410, varData_421);
          } while (varData_421 !== 0);
          if (varData_410.gzhead.hcrc && varData_410.pending > varData_420) {
            param_1.adler = varData_305(param_1.adler, varData_410.pending_buf, varData_410.pending - varData_420, varData_420);
          }
        }
        varData_410.status = varData_328;
      }
      if (varData_410.status === varData_328) {
        if (varData_410.gzhead.hcrc) {
          if (varData_410.pending + 2 > varData_410.pending_buf_size) {
            varData_347(param_1);
            if (varData_410.pending !== 0) {
              varData_410.last_flush = -1;
              return _0x37b127;
            }
          }
          varData_351(varData_410, param_1.adler & 255);
          varData_351(varData_410, param_1.adler >> 8 & 255);
          param_1.adler = 0;
        }
        varData_410.status = varData_329;
        varData_347(param_1);
        if (varData_410.pending !== 0) {
          varData_410.last_flush = -1;
          return _0x37b127;
        }
      }
      if (param_1.avail_in !== 0 || varData_410.lookahead !== 0 || param_2 !== _0x303fa9 && varData_410.status !== varData_330) {
        let varData_422 = varData_410.level === 0 ? varData_374(varData_410, param_2) : varData_410.strategy === _0x335b58 ? varData_394(varData_410, param_2) : varData_410.strategy === _0x267a2 ? varData_388(varData_410, param_2) : varData_396[varData_410.level].func(varData_410, param_2);
        if (varData_422 === varData_333 || varData_422 === varData_334) {
          varData_410.status = varData_330;
        }
        if (varData_422 === varData_331 || varData_422 === varData_333) {
          if (param_1.avail_out === 0) {
            varData_410.last_flush = -1;
          }
          return _0x37b127;
        }
        if (varData_422 === varData_332) {
          if (param_2 === _0x3154d2) {
            _0x5c6675(varData_410);
          } else if (param_2 !== _0x3ccb41) {
            _0xda9bd4(varData_410, 0, 0, false);
            if (param_2 === _0x55969d) {
              varData_338(varData_410.head);
              if (varData_410.lookahead === 0) {
                varData_410.strstart = 0;
                varData_410.block_start = 0;
                varData_410.insert = 0;
              }
            }
          }
          varData_347(param_1);
          if (param_1.avail_out === 0) {
            varData_410.last_flush = -1;
            return _0x37b127;
          }
        }
      }
      if (param_2 !== _0x13e840) {
        return _0x37b127;
      }
      if (varData_410.wrap <= 0) {
        return _0x33e2fc;
      }
      if (varData_410.wrap === 2) {
        varData_351(varData_410, param_1.adler & 255);
        varData_351(varData_410, param_1.adler >> 8 & 255);
        varData_351(varData_410, param_1.adler >> 16 & 255);
        varData_351(varData_410, param_1.adler >> 24 & 255);
        varData_351(varData_410, param_1.total_in & 255);
        varData_351(varData_410, param_1.total_in >> 8 & 255);
        varData_351(varData_410, param_1.total_in >> 16 & 255);
        varData_351(varData_410, param_1.total_in >> 24 & 255);
      } else {
        varData_352(varData_410, param_1.adler >>> 16);
        varData_352(varData_410, param_1.adler & 65535);
      }
      varData_347(param_1);
      if (varData_410.wrap > 0) {
        varData_410.wrap = -varData_410.wrap;
      }
      if (varData_410.pending !== 0) {
        return _0x37b127;
      } else {
        return _0x33e2fc;
      }
    };
    const varData_423 = (param_1) => {
      if (varData_398(param_1)) {
        return _0x39909c;
      }
      const varData_424 = param_1.state.status;
      param_1.state = null;
      if (varData_424 === varData_329) {
        return varData_336(param_1, _0x383df4);
      } else {
        return _0x37b127;
      }
    };
    const varData_425 = (param_1, param_2) => {
      let varData_426 = param_2.length;
      if (varData_398(param_1)) {
        return _0x39909c;
      }
      const varData_427 = param_1.state;
      const varData_428 = varData_427.wrap;
      if (varData_428 === 2 || varData_428 === 1 && varData_427.status !== varData_323 || varData_427.lookahead) {
        return _0x39909c;
      }
      if (varData_428 === 1) {
        param_1.adler = varData_297(param_1.adler, param_2, varData_426, 0);
      }
      varData_427.wrap = 0;
      if (varData_426 >= varData_427.w_size) {
        if (varData_428 === 0) {
          varData_338(varData_427.head);
          varData_427.strstart = 0;
          varData_427.block_start = 0;
          varData_427.insert = 0;
        }
        let varData_429 = new Uint8Array(varData_427.w_size);
        varData_429.set(param_2.subarray(varData_426 - varData_427.w_size, varData_426), 0);
        param_2 = varData_429;
        varData_426 = varData_427.w_size;
      }
      const varData_430 = param_1.avail_in;
      const varData_431 = param_1.next_in;
      const varData_432 = param_1.input;
      param_1.avail_in = varData_426;
      param_1.next_in = 0;
      param_1.input = param_2;
      varData_369(varData_427);
      while (varData_427.lookahead >= varData_319) {
        let varData_433 = varData_427.strstart;
        let varData_434 = varData_427.lookahead - (varData_319 - 1);
        do {
          varData_427.ins_h = varData_346(varData_427, varData_427.ins_h, varData_427.window[varData_433 + varData_319 - 1]);
          varData_427.prev[varData_433 & varData_427.w_mask] = varData_427.head[varData_427.ins_h];
          varData_427.head[varData_427.ins_h] = varData_433;
          varData_433++;
        } while (--varData_434);
        varData_427.strstart = varData_433;
        varData_427.lookahead = varData_319 - 1;
        varData_369(varData_427);
      }
      varData_427.strstart += varData_427.lookahead;
      varData_427.block_start = varData_427.strstart;
      varData_427.insert = varData_427.lookahead;
      varData_427.lookahead = 0;
      varData_427.match_length = varData_427.prev_length = varData_319 - 1;
      varData_427.match_available = 0;
      param_1.next_in = varData_431;
      param_1.input = varData_432;
      param_1.avail_in = varData_430;
      varData_427.wrap = varData_428;
      return _0x37b127;
    };
    var varData_435 = varData_408;
    var varData_436 = varData_405;
    var varData_437 = varData_402;
    var varData_438 = varData_400;
    var varData_439 = varData_404;
    var varData_440 = varData_409;
    var varData_441 = varData_423;
    var varData_442 = varData_425;
    var varData_443 = "pako deflate (from Nodeca project)";
    var varData_444 = {
      deflateInit: varData_435,
      deflateInit2: varData_436,
      deflateReset: varData_437,
      deflateResetKeep: varData_438,
      deflateSetHeader: varData_439,
      deflate: varData_440,
      deflateEnd: varData_441,
      deflateSetDictionary: varData_442,
      deflateInfo: varData_443
    };
    var varData_445 = varData_444;
    const varData_446 = (param_1, param_2) => {
      return Object.prototype.hasOwnProperty.call(param_1, param_2);
    };
    function handleAction_62(param_1) {
      const varData_447 = Array.prototype.slice.call(arguments, 1);
      while (varData_447.length) {
        const varData_448 = varData_447.shift();
        if (!varData_448) {
          continue;
        }
        if (typeof varData_448 !== "object") {
          throw new TypeError(varData_448 + "must be non-object");
        }
        for (const varData_449 in varData_448) {
          if (varData_446(varData_448, varData_449)) {
            param_1[varData_449] = varData_448[varData_449];
          }
        }
      }
      return param_1;
    }
    var varData_450 = (param_1) => {
      let varData_451 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length; loopIdx < loopIdx_1; loopIdx++) {
        varData_451 += param_1[loopIdx].length;
      }
      const varData_452 = new Uint8Array(varData_451);
      for (let loopIdx = 0, loopIdx_1 = 0, loopIdx_2 = param_1.length; loopIdx < loopIdx_2; loopIdx++) {
        let varData_453 = param_1[loopIdx];
        varData_452.set(varData_453, loopIdx_1);
        loopIdx_1 += varData_453.length;
      }
      return varData_452;
    };
    var varData_454 = {
      assign: handleAction_62,
      flattenChunks: varData_450
    };
    var varData_455 = varData_454;
    let isEnabled = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (err) {
      isEnabled = false;
    }
    const varData_456 = new Uint8Array(256);
    for (let loopIdx = 0; loopIdx < 256; loopIdx++) {
      varData_456[loopIdx] = loopIdx >= 252 ? 6 : loopIdx >= 248 ? 5 : loopIdx >= 240 ? 4 : loopIdx >= 224 ? 3 : loopIdx >= 192 ? 2 : 1;
    }
    varData_456[254] = varData_456[254] = 1;
    var varData_457 = (param_1) => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(param_1);
      }
      let varData_458;
      let varData_459;
      let varData_460;
      let varData_461;
      let varData_462;
      let varData_463 = param_1.length;
      let varData_464 = 0;
      for (varData_461 = 0; varData_461 < varData_463; varData_461++) {
        varData_459 = param_1.charCodeAt(varData_461);
        if ((varData_459 & 64512) === 55296 && varData_461 + 1 < varData_463) {
          varData_460 = param_1.charCodeAt(varData_461 + 1);
          if ((varData_460 & 64512) === 56320) {
            varData_459 = 65536 + (varData_459 - 55296 << 10) + (varData_460 - 56320);
            varData_461++;
          }
        }
        varData_464 += varData_459 < 128 ? 1 : varData_459 < 2048 ? 2 : varData_459 < 65536 ? 3 : 4;
      }
      varData_458 = new Uint8Array(varData_464);
      varData_462 = 0;
      varData_461 = 0;
      for (; varData_462 < varData_464; varData_461++) {
        varData_459 = param_1.charCodeAt(varData_461);
        if ((varData_459 & 64512) === 55296 && varData_461 + 1 < varData_463) {
          varData_460 = param_1.charCodeAt(varData_461 + 1);
          if ((varData_460 & 64512) === 56320) {
            varData_459 = 65536 + (varData_459 - 55296 << 10) + (varData_460 - 56320);
            varData_461++;
          }
        }
        if (varData_459 < 128) {
          varData_458[varData_462++] = varData_459;
        } else if (varData_459 < 2048) {
          varData_458[varData_462++] = varData_459 >>> 6 | 192;
          varData_458[varData_462++] = varData_459 & 63 | 128;
        } else if (varData_459 < 65536) {
          varData_458[varData_462++] = varData_459 >>> 12 | 224;
          varData_458[varData_462++] = varData_459 >>> 6 & 63 | 128;
          varData_458[varData_462++] = varData_459 & 63 | 128;
        } else {
          varData_458[varData_462++] = varData_459 >>> 18 | 240;
          varData_458[varData_462++] = varData_459 >>> 12 & 63 | 128;
          varData_458[varData_462++] = varData_459 >>> 6 & 63 | 128;
          varData_458[varData_462++] = varData_459 & 63 | 128;
        }
      }
      return varData_458;
    };
    const varData_465 = (param_1, param_2) => {
      if (param_2 < 65534) {
        if (param_1.subarray && isEnabled) {
          return String.fromCharCode.apply(null, param_1.length === param_2 ? param_1 : param_1.subarray(0, param_2));
        }
      }
      let varData_466 = "";
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_466 += String.fromCharCode(param_1[loopIdx]);
      }
      return varData_466;
    };
    var varData_467 = (param_1, param_2) => {
      const varData_468 = param_2 || param_1.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(param_1.subarray(0, param_2));
      }
      let varData_469;
      let varData_470;
      const varData_471 = new Array(varData_468 * 2);
      varData_470 = 0;
      varData_469 = 0;
      while (varData_469 < varData_468) {
        let varData_472 = param_1[varData_469++];
        if (varData_472 < 128) {
          varData_471[varData_470++] = varData_472;
          continue;
        }
        let varData_473 = varData_456[varData_472];
        if (varData_473 > 4) {
          varData_471[varData_470++] = 65533;
          varData_469 += varData_473 - 1;
          continue;
        }
        varData_472 &= varData_473 === 2 ? 31 : varData_473 === 3 ? 15 : 7;
        while (varData_473 > 1 && varData_469 < varData_468) {
          varData_472 = varData_472 << 6 | param_1[varData_469++] & 63;
          varData_473--;
        }
        if (varData_473 > 1) {
          varData_471[varData_470++] = 65533;
          continue;
        }
        if (varData_472 < 65536) {
          varData_471[varData_470++] = varData_472;
        } else {
          varData_472 -= 65536;
          varData_471[varData_470++] = varData_472 >> 10 & 1023 | 55296;
          varData_471[varData_470++] = varData_472 & 1023 | 56320;
        }
      }
      return varData_465(varData_471, varData_470);
    };
    var varData_474 = (param_1, param_2) => {
      param_2 = param_2 || param_1.length;
      if (param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      let varData_475 = param_2 - 1;
      while (varData_475 >= 0 && (param_1[varData_475] & 192) === 128) {
        varData_475--;
      }
      if (varData_475 < 0) {
        return param_2;
      }
      if (varData_475 === 0) {
        return param_2;
      }
      if (varData_475 + varData_456[param_1[varData_475]] > param_2) {
        return varData_475;
      } else {
        return param_2;
      }
    };
    var varData_476 = {
      string2buf: varData_457,
      buf2string: varData_467,
      utf8border: varData_474
    };
    var varData_477 = varData_476;
    function handleAction_63() {
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
    var varData_478 = handleAction_63;
    const varData_479 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x3e8a97,
      Z_SYNC_FLUSH: _0x3e9e3f,
      Z_FULL_FLUSH: _0x411bbf,
      Z_FINISH: _0x55eda9,
      Z_OK: _0x259a42,
      Z_STREAM_END: _0x9ecccf,
      Z_DEFAULT_COMPRESSION: _0x50af42,
      Z_DEFAULT_STRATEGY: _0x5e6206,
      Z_DEFLATED: _0x2ed386
    } = varData_308;
    function handleAction_64(param_1) {
      var varData_480 = {
        level: _0x50af42,
        method: _0x2ed386,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: _0x5e6206
      };
      this.options = varData_455.assign(varData_480, param_1 || {});
      let varData_481 = this.options;
      if (varData_481.raw && varData_481.windowBits > 0) {
        varData_481.windowBits = -varData_481.windowBits;
      } else if (varData_481.gzip && varData_481.windowBits > 0 && varData_481.windowBits < 16) {
        varData_481.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_478();
      this.strm.avail_out = 0;
      let varData_482 = varData_445.deflateInit2(this.strm, varData_481.level, varData_481.method, varData_481.windowBits, varData_481.memLevel, varData_481.strategy);
      if (varData_482 !== _0x259a42) {
        throw new Error(varData_306[varData_482]);
      }
      if (varData_481.header) {
        varData_445.deflateSetHeader(this.strm, varData_481.header);
      }
      if (varData_481.dictionary) {
        let varData_483;
        if (typeof varData_481.dictionary === "string") {
          varData_483 = varData_477.string2buf(varData_481.dictionary);
        } else if (varData_479.call(varData_481.dictionary) === "[object ArrayBuffer]") {
          varData_483 = new Uint8Array(varData_481.dictionary);
        } else {
          varData_483 = varData_481.dictionary;
        }
        varData_482 = varData_445.deflateSetDictionary(this.strm, varData_483);
        if (varData_482 !== _0x259a42) {
          throw new Error(varData_306[varData_482]);
        }
        this._dict_set = true;
      }
    }
    handleAction_64.prototype.push = function(param_1, param_2) {
      const varData_484 = this.strm;
      const varData_485 = this.options.chunkSize;
      let varData_486;
      let varData_487;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_487 = param_2;
      } else {
        varData_487 = param_2 === true ? _0x55eda9 : _0x3e8a97;
      }
      if (typeof param_1 === "string") {
        varData_484.input = varData_477.string2buf(param_1);
      } else if (varData_479.call(param_1) === "[object ArrayBuffer]") {
        varData_484.input = new Uint8Array(param_1);
      } else {
        varData_484.input = param_1;
      }
      varData_484.next_in = 0;
      varData_484.avail_in = varData_484.input.length;
      while (true) {
        if (varData_484.avail_out === 0) {
          varData_484.output = new Uint8Array(varData_485);
          varData_484.next_out = 0;
          varData_484.avail_out = varData_485;
        }
        if ((varData_487 === _0x3e9e3f || varData_487 === _0x411bbf) && varData_484.avail_out <= 6) {
          this.onData(varData_484.output.subarray(0, varData_484.next_out));
          varData_484.avail_out = 0;
          continue;
        }
        varData_486 = varData_445.deflate(varData_484, varData_487);
        if (varData_486 === _0x9ecccf) {
          if (varData_484.next_out > 0) {
            this.onData(varData_484.output.subarray(0, varData_484.next_out));
          }
          varData_486 = varData_445.deflateEnd(this.strm);
          this.onEnd(varData_486);
          this.ended = true;
          return varData_486 === _0x259a42;
        }
        if (varData_484.avail_out === 0) {
          this.onData(varData_484.output);
          continue;
        }
        if (varData_487 > 0 && varData_484.next_out > 0) {
          this.onData(varData_484.output.subarray(0, varData_484.next_out));
          varData_484.avail_out = 0;
          continue;
        }
        if (varData_484.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_64.prototype.onData = function(param_1) {
      this.chunks.push(param_1);
    };
    handleAction_64.prototype.onEnd = function(param_1) {
      if (param_1 === _0x259a42) {
        this.result = varData_455.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_65(param_1, param_2) {
      const varData_488 = new handleAction_64(param_2);
      varData_488.push(param_1, true);
      if (varData_488.err) {
        throw varData_488.msg || varData_306[varData_488.err];
      }
      return varData_488.result;
    }
    function handleAction_66(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.raw = true;
      return handleAction_65(param_1, param_2);
    }
    function handleAction_67(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.gzip = true;
      return handleAction_65(param_1, param_2);
    }
    var varData_489 = handleAction_64;
    var varData_490 = handleAction_65;
    var varData_491 = handleAction_66;
    var varData_492 = handleAction_67;
    var varData_493 = varData_308;
    var varData_494 = {
      Deflate: varData_489,
      deflate: varData_490,
      deflateRaw: varData_491,
      gzip: varData_492,
      constants: varData_493
    };
    var varData_495 = varData_494;
    const varData_496 = 16209;
    const varData_497 = 16191;
    var varData_498 = function _0x443970(param_1, param_2) {
      let varData_499;
      let varData_500;
      let varData_501;
      let varData_502;
      let varData_503;
      let varData_504;
      let varData_505;
      let varData_506;
      let varData_507;
      let varData_508;
      let varData_509;
      let varData_510;
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
      const varData_523 = param_1.state;
      varData_499 = param_1.next_in;
      varData_521 = param_1.input;
      varData_500 = varData_499 + (param_1.avail_in - 5);
      varData_501 = param_1.next_out;
      varData_522 = param_1.output;
      varData_502 = varData_501 - (param_2 - param_1.avail_out);
      varData_503 = varData_501 + (param_1.avail_out - 257);
      varData_504 = varData_523.dmax;
      varData_505 = varData_523.wsize;
      varData_506 = varData_523.whave;
      varData_507 = varData_523.wnext;
      varData_508 = varData_523.window;
      varData_509 = varData_523.hold;
      varData_510 = varData_523.bits;
      varData_511 = varData_523.lencode;
      varData_512 = varData_523.distcode;
      varData_513 = (1 << varData_523.lenbits) - 1;
      varData_514 = (1 << varData_523.distbits) - 1;
      _0x204a3d: do {
        if (varData_510 < 15) {
          varData_509 += varData_521[varData_499++] << varData_510;
          varData_510 += 8;
          varData_509 += varData_521[varData_499++] << varData_510;
          varData_510 += 8;
        }
        varData_515 = varData_511[varData_509 & varData_513];
        _0x36b683: while (true) {
          varData_516 = varData_515 >>> 24;
          varData_509 >>>= varData_516;
          varData_510 -= varData_516;
          varData_516 = varData_515 >>> 16 & 255;
          if (varData_516 === 0) {
            varData_522[varData_501++] = varData_515 & 65535;
          } else if (varData_516 & 16) {
            varData_517 = varData_515 & 65535;
            varData_516 &= 15;
            if (varData_516) {
              if (varData_510 < varData_516) {
                varData_509 += varData_521[varData_499++] << varData_510;
                varData_510 += 8;
              }
              varData_517 += varData_509 & (1 << varData_516) - 1;
              varData_509 >>>= varData_516;
              varData_510 -= varData_516;
            }
            if (varData_510 < 15) {
              varData_509 += varData_521[varData_499++] << varData_510;
              varData_510 += 8;
              varData_509 += varData_521[varData_499++] << varData_510;
              varData_510 += 8;
            }
            varData_515 = varData_512[varData_509 & varData_514];
            _0x263670: while (true) {
              varData_516 = varData_515 >>> 24;
              varData_509 >>>= varData_516;
              varData_510 -= varData_516;
              varData_516 = varData_515 >>> 16 & 255;
              if (varData_516 & 16) {
                varData_518 = varData_515 & 65535;
                varData_516 &= 15;
                if (varData_510 < varData_516) {
                  varData_509 += varData_521[varData_499++] << varData_510;
                  varData_510 += 8;
                  if (varData_510 < varData_516) {
                    varData_509 += varData_521[varData_499++] << varData_510;
                    varData_510 += 8;
                  }
                }
                varData_518 += varData_509 & (1 << varData_516) - 1;
                if (varData_518 > varData_504) {
                  param_1.msg = "invalid distance too far back";
                  varData_523.mode = varData_496;
                  break _0x204a3d;
                }
                varData_509 >>>= varData_516;
                varData_510 -= varData_516;
                varData_516 = varData_501 - varData_502;
                if (varData_518 > varData_516) {
                  varData_516 = varData_518 - varData_516;
                  if (varData_516 > varData_506) {
                    if (varData_523.sane) {
                      param_1.msg = "invalid distance too far back";
                      varData_523.mode = varData_496;
                      break _0x204a3d;
                    }
                  }
                  varData_519 = 0;
                  varData_520 = varData_508;
                  if (varData_507 === 0) {
                    varData_519 += varData_505 - varData_516;
                    if (varData_516 < varData_517) {
                      varData_517 -= varData_516;
                      do {
                        varData_522[varData_501++] = varData_508[varData_519++];
                      } while (--varData_516);
                      varData_519 = varData_501 - varData_518;
                      varData_520 = varData_522;
                    }
                  } else if (varData_507 < varData_516) {
                    varData_519 += varData_505 + varData_507 - varData_516;
                    varData_516 -= varData_507;
                    if (varData_516 < varData_517) {
                      varData_517 -= varData_516;
                      do {
                        varData_522[varData_501++] = varData_508[varData_519++];
                      } while (--varData_516);
                      varData_519 = 0;
                      if (varData_507 < varData_517) {
                        varData_516 = varData_507;
                        varData_517 -= varData_516;
                        do {
                          varData_522[varData_501++] = varData_508[varData_519++];
                        } while (--varData_516);
                        varData_519 = varData_501 - varData_518;
                        varData_520 = varData_522;
                      }
                    }
                  } else {
                    varData_519 += varData_507 - varData_516;
                    if (varData_516 < varData_517) {
                      varData_517 -= varData_516;
                      do {
                        varData_522[varData_501++] = varData_508[varData_519++];
                      } while (--varData_516);
                      varData_519 = varData_501 - varData_518;
                      varData_520 = varData_522;
                    }
                  }
                  while (varData_517 > 2) {
                    varData_522[varData_501++] = varData_520[varData_519++];
                    varData_522[varData_501++] = varData_520[varData_519++];
                    varData_522[varData_501++] = varData_520[varData_519++];
                    varData_517 -= 3;
                  }
                  if (varData_517) {
                    varData_522[varData_501++] = varData_520[varData_519++];
                    if (varData_517 > 1) {
                      varData_522[varData_501++] = varData_520[varData_519++];
                    }
                  }
                } else {
                  varData_519 = varData_501 - varData_518;
                  do {
                    varData_522[varData_501++] = varData_522[varData_519++];
                    varData_522[varData_501++] = varData_522[varData_519++];
                    varData_522[varData_501++] = varData_522[varData_519++];
                    varData_517 -= 3;
                  } while (varData_517 > 2);
                  if (varData_517) {
                    varData_522[varData_501++] = varData_522[varData_519++];
                    if (varData_517 > 1) {
                      varData_522[varData_501++] = varData_522[varData_519++];
                    }
                  }
                }
              } else if ((varData_516 & 64) === 0) {
                varData_515 = varData_512[(varData_515 & 65535) + (varData_509 & (1 << varData_516) - 1)];
                continue _0x263670;
              } else {
                param_1.msg = "invalid distance code";
                varData_523.mode = varData_496;
                break _0x204a3d;
              }
              break;
            }
          } else if ((varData_516 & 64) === 0) {
            varData_515 = varData_511[(varData_515 & 65535) + (varData_509 & (1 << varData_516) - 1)];
            continue _0x36b683;
          } else if (varData_516 & 32) {
            varData_523.mode = varData_497;
            break _0x204a3d;
          } else {
            param_1.msg = "invalid literal/length code";
            varData_523.mode = varData_496;
            break _0x204a3d;
          }
          break;
        }
      } while (varData_499 < varData_500 && varData_501 < varData_503);
      varData_517 = varData_510 >> 3;
      varData_499 -= varData_517;
      varData_510 -= varData_517 << 3;
      varData_509 &= (1 << varData_510) - 1;
      param_1.next_in = varData_499;
      param_1.next_out = varData_501;
      param_1.avail_in = varData_499 < varData_500 ? 5 + (varData_500 - varData_499) : 5 - (varData_499 - varData_500);
      param_1.avail_out = varData_501 < varData_503 ? 257 + (varData_503 - varData_501) : 257 - (varData_501 - varData_503);
      varData_523.hold = varData_509;
      varData_523.bits = varData_510;
      return;
    };
    const varData_524 = 15;
    const varData_525 = 852;
    const varData_526 = 592;
    const varData_527 = 0;
    const varData_528 = 1;
    const varData_529 = 2;
    const varData_530 = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const varData_531 = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const varData_532 = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const varData_533 = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    const varData_534 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
      const varData_535 = param_8.bits;
      let varData_536 = 0;
      let varData_537 = 0;
      let varData_538 = 0;
      let varData_539 = 0;
      let varData_540 = 0;
      let varData_541 = 0;
      let varData_542 = 0;
      let varData_543 = 0;
      let varData_544 = 0;
      let varData_545 = 0;
      let varData_546;
      let varData_547;
      let varData_548;
      let varData_549;
      let varData_550;
      let varData_551 = null;
      let varData_552;
      const varData_553 = new Uint16Array(varData_524 + 1);
      const varData_554 = new Uint16Array(varData_524 + 1);
      let varData_555 = null;
      let varData_556;
      let varData_557;
      let varData_558;
      for (varData_536 = 0; varData_536 <= varData_524; varData_536++) {
        varData_553[varData_536] = 0;
      }
      for (varData_537 = 0; varData_537 < param_4; varData_537++) {
        varData_553[param_2[param_3 + varData_537]]++;
      }
      varData_540 = varData_535;
      for (varData_539 = varData_524; varData_539 >= 1; varData_539--) {
        if (varData_553[varData_539] !== 0) {
          break;
        }
      }
      if (varData_540 > varData_539) {
        varData_540 = varData_539;
      }
      if (varData_539 === 0) {
        param_5[param_6++] = 20971520;
        param_5[param_6++] = 20971520;
        param_8.bits = 1;
        return 0;
      }
      for (varData_538 = 1; varData_538 < varData_539; varData_538++) {
        if (varData_553[varData_538] !== 0) {
          break;
        }
      }
      if (varData_540 < varData_538) {
        varData_540 = varData_538;
      }
      varData_543 = 1;
      for (varData_536 = 1; varData_536 <= varData_524; varData_536++) {
        varData_543 <<= 1;
        varData_543 -= varData_553[varData_536];
        if (varData_543 < 0) {
          return -1;
        }
      }
      if (varData_543 > 0 && (param_1 === varData_527 || varData_539 !== 1)) {
        return -1;
      }
      varData_554[1] = 0;
      for (varData_536 = 1; varData_536 < varData_524; varData_536++) {
        varData_554[varData_536 + 1] = varData_554[varData_536] + varData_553[varData_536];
      }
      for (varData_537 = 0; varData_537 < param_4; varData_537++) {
        if (param_2[param_3 + varData_537] !== 0) {
          param_7[varData_554[param_2[param_3 + varData_537]]++] = varData_537;
        }
      }
      if (param_1 === varData_527) {
        varData_551 = varData_555 = param_7;
        varData_552 = 20;
      } else if (param_1 === varData_528) {
        varData_551 = varData_530;
        varData_555 = varData_531;
        varData_552 = 257;
      } else {
        varData_551 = varData_532;
        varData_555 = varData_533;
        varData_552 = 0;
      }
      varData_545 = 0;
      varData_537 = 0;
      varData_536 = varData_538;
      varData_550 = param_6;
      varData_541 = varData_540;
      varData_542 = 0;
      varData_548 = -1;
      varData_544 = 1 << varData_540;
      varData_549 = varData_544 - 1;
      if (param_1 === varData_528 && varData_544 > varData_525 || param_1 === varData_529 && varData_544 > varData_526) {
        return 1;
      }
      while (true) {
        varData_556 = varData_536 - varData_542;
        if (param_7[varData_537] + 1 < varData_552) {
          varData_557 = 0;
          varData_558 = param_7[varData_537];
        } else if (param_7[varData_537] >= varData_552) {
          varData_557 = varData_555[param_7[varData_537] - varData_552];
          varData_558 = varData_551[param_7[varData_537] - varData_552];
        } else {
          varData_557 = 96;
          varData_558 = 0;
        }
        varData_546 = 1 << varData_536 - varData_542;
        varData_547 = 1 << varData_541;
        varData_538 = varData_547;
        do {
          varData_547 -= varData_546;
          param_5[varData_550 + (varData_545 >> varData_542) + varData_547] = varData_556 << 24 | varData_557 << 16 | varData_558 | 0;
        } while (varData_547 !== 0);
        varData_546 = 1 << varData_536 - 1;
        while (varData_545 & varData_546) {
          varData_546 >>= 1;
        }
        if (varData_546 !== 0) {
          varData_545 &= varData_546 - 1;
          varData_545 += varData_546;
        } else {
          varData_545 = 0;
        }
        varData_537++;
        if (--varData_553[varData_536] === 0) {
          if (varData_536 === varData_539) {
            break;
          }
          varData_536 = param_2[param_3 + param_7[varData_537]];
        }
        if (varData_536 > varData_540 && (varData_545 & varData_549) !== varData_548) {
          if (varData_542 === 0) {
            varData_542 = varData_540;
          }
          varData_550 += varData_538;
          varData_541 = varData_536 - varData_542;
          varData_543 = 1 << varData_541;
          while (varData_541 + varData_542 < varData_539) {
            varData_543 -= varData_553[varData_541 + varData_542];
            if (varData_543 <= 0) {
              break;
            }
            varData_541++;
            varData_543 <<= 1;
          }
          varData_544 += 1 << varData_541;
          if (param_1 === varData_528 && varData_544 > varData_525 || param_1 === varData_529 && varData_544 > varData_526) {
            return 1;
          }
          varData_548 = varData_545 & varData_549;
          param_5[varData_548] = varData_540 << 24 | varData_541 << 16 | varData_550 - param_6 | 0;
        }
      }
      if (varData_545 !== 0) {
        param_5[varData_550 + varData_545] = varData_536 - varData_542 << 24 | 4194304 | 0;
      }
      param_8.bits = varData_540;
      return 0;
    };
    var varData_559 = varData_534;
    const varData_560 = 0;
    const varData_561 = 1;
    const varData_562 = 2;
    const {
      Z_FINISH: _0x3bacc1,
      Z_BLOCK: _0x4fdeb2,
      Z_TREES: _0x48ddac,
      Z_OK: _0x4ec637,
      Z_STREAM_END: _0x3e7021,
      Z_NEED_DICT: _0x2dae5a,
      Z_STREAM_ERROR: _0x371f72,
      Z_DATA_ERROR: _0x432b53,
      Z_MEM_ERROR: _0x4df4c7,
      Z_BUF_ERROR: _0x3657a3,
      Z_DEFLATED: _0x12c4b3
    } = varData_308;
    const varData_563 = 16180;
    const varData_564 = 16181;
    const varData_565 = 16182;
    const varData_566 = 16183;
    const varData_567 = 16184;
    const varData_568 = 16185;
    const varData_569 = 16186;
    const varData_570 = 16187;
    const varData_571 = 16188;
    const varData_572 = 16189;
    const varData_573 = 16190;
    const varData_574 = 16191;
    const varData_575 = 16192;
    const varData_576 = 16193;
    const varData_577 = 16194;
    const varData_578 = 16195;
    const varData_579 = 16196;
    const varData_580 = 16197;
    const varData_581 = 16198;
    const varData_582 = 16199;
    const varData_583 = 16200;
    const varData_584 = 16201;
    const varData_585 = 16202;
    const varData_586 = 16203;
    const varData_587 = 16204;
    const varData_588 = 16205;
    const varData_589 = 16206;
    const varData_590 = 16207;
    const varData_591 = 16208;
    const varData_592 = 16209;
    const varData_593 = 16210;
    const varData_594 = 16211;
    const varData_595 = 852;
    const varData_596 = 592;
    const varData_597 = 15;
    const varData_598 = varData_597;
    const varData_599 = (param_1) => {
      return (param_1 >>> 24 & 255) + (param_1 >>> 8 & 65280) + ((param_1 & 65280) << 8) + ((param_1 & 255) << 24);
    };
    function handleAction_68() {
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
    const varData_600 = (param_1) => {
      if (!param_1) {
        return 1;
      }
      const varData_601 = param_1.state;
      if (!varData_601 || varData_601.strm !== param_1 || varData_601.mode < varData_563 || varData_601.mode > varData_594) {
        return 1;
      }
      return 0;
    };
    const varData_602 = (param_1) => {
      if (varData_600(param_1)) {
        return _0x371f72;
      }
      const varData_603 = param_1.state;
      param_1.total_in = param_1.total_out = varData_603.total = 0;
      param_1.msg = "";
      if (varData_603.wrap) {
        param_1.adler = varData_603.wrap & 1;
      }
      varData_603.mode = varData_563;
      varData_603.last = 0;
      varData_603.havedict = 0;
      varData_603.flags = -1;
      varData_603.dmax = 32768;
      varData_603.head = null;
      varData_603.hold = 0;
      varData_603.bits = 0;
      varData_603.lencode = varData_603.lendyn = new Int32Array(varData_595);
      varData_603.distcode = varData_603.distdyn = new Int32Array(varData_596);
      varData_603.sane = 1;
      varData_603.back = -1;
      return _0x4ec637;
    };
    const varData_604 = (param_1) => {
      if (varData_600(param_1)) {
        return _0x371f72;
      }
      const varData_605 = param_1.state;
      varData_605.wsize = 0;
      varData_605.whave = 0;
      varData_605.wnext = 0;
      return varData_602(param_1);
    };
    const varData_606 = (param_1, param_2) => {
      let varData_607;
      if (varData_600(param_1)) {
        return _0x371f72;
      }
      const varData_608 = param_1.state;
      if (param_2 < 0) {
        varData_607 = 0;
        param_2 = -param_2;
      } else {
        varData_607 = (param_2 >> 4) + 5;
        if (param_2 < 48) {
          param_2 &= 15;
        }
      }
      if (param_2 && (param_2 < 8 || param_2 > 15)) {
        return _0x371f72;
      }
      if (varData_608.window !== null && varData_608.wbits !== param_2) {
        varData_608.window = null;
      }
      varData_608.wrap = varData_607;
      varData_608.wbits = param_2;
      return varData_604(param_1);
    };
    const varData_609 = (param_1, param_2) => {
      if (!param_1) {
        return _0x371f72;
      }
      const varData_610 = new handleAction_68();
      param_1.state = varData_610;
      varData_610.strm = param_1;
      varData_610.window = null;
      varData_610.mode = varData_563;
      const varData_611 = varData_606(param_1, param_2);
      if (varData_611 !== _0x4ec637) {
        param_1.state = null;
      }
      return varData_611;
    };
    const varData_612 = (param_1) => {
      return varData_609(param_1, varData_598);
    };
    let isEnabled_1 = true;
    let varData_613;
    let varData_614;
    const varData_615 = (param_1) => {
      if (isEnabled_1) {
        varData_613 = new Int32Array(512);
        varData_614 = new Int32Array(32);
        let varData_616 = 0;
        while (varData_616 < 144) {
          param_1.lens[varData_616++] = 8;
        }
        while (varData_616 < 256) {
          param_1.lens[varData_616++] = 9;
        }
        while (varData_616 < 280) {
          param_1.lens[varData_616++] = 7;
        }
        while (varData_616 < 288) {
          param_1.lens[varData_616++] = 8;
        }
        varData_559(varData_561, param_1.lens, 0, 288, varData_613, 0, param_1.work, {
          bits: 9
        });
        varData_616 = 0;
        while (varData_616 < 32) {
          param_1.lens[varData_616++] = 5;
        }
        varData_559(varData_562, param_1.lens, 0, 32, varData_614, 0, param_1.work, {
          bits: 5
        });
        isEnabled_1 = false;
      }
      param_1.lencode = varData_613;
      param_1.lenbits = 9;
      param_1.distcode = varData_614;
      param_1.distbits = 5;
    };
    const varData_617 = (param_1, param_2, param_3, param_4) => {
      let varData_618;
      const varData_619 = param_1.state;
      if (varData_619.window === null) {
        varData_619.wsize = 1 << varData_619.wbits;
        varData_619.wnext = 0;
        varData_619.whave = 0;
        varData_619.window = new Uint8Array(varData_619.wsize);
      }
      if (param_4 >= varData_619.wsize) {
        varData_619.window.set(param_2.subarray(param_3 - varData_619.wsize, param_3), 0);
        varData_619.wnext = 0;
        varData_619.whave = varData_619.wsize;
      } else {
        varData_618 = varData_619.wsize - varData_619.wnext;
        if (varData_618 > param_4) {
          varData_618 = param_4;
        }
        varData_619.window.set(param_2.subarray(param_3 - param_4, param_3 - param_4 + varData_618), varData_619.wnext);
        param_4 -= varData_618;
        if (param_4) {
          varData_619.window.set(param_2.subarray(param_3 - param_4, param_3), 0);
          varData_619.wnext = param_4;
          varData_619.whave = varData_619.wsize;
        } else {
          varData_619.wnext += varData_618;
          if (varData_619.wnext === varData_619.wsize) {
            varData_619.wnext = 0;
          }
          if (varData_619.whave < varData_619.wsize) {
            varData_619.whave += varData_618;
          }
        }
      }
      return 0;
    };
    const varData_620 = (param_1, param_2) => {
      let varData_621;
      let varData_622;
      let varData_623;
      let varData_624;
      let varData_625;
      let varData_626;
      let varData_627;
      let varData_628;
      let varData_629;
      let varData_630;
      let varData_631;
      let varData_632;
      let varData_633;
      let varData_634;
      let varData_635 = 0;
      let varData_636;
      let varData_637;
      let varData_638;
      let varData_639;
      let varData_640;
      let varData_641;
      let varData_642;
      let varData_643;
      const varData_644 = new Uint8Array(4);
      let varData_645;
      let varData_646;
      const varData_647 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (varData_600(param_1) || !param_1.output || !param_1.input && param_1.avail_in !== 0) {
        return _0x371f72;
      }
      varData_621 = param_1.state;
      if (varData_621.mode === varData_574) {
        varData_621.mode = varData_575;
      }
      varData_625 = param_1.next_out;
      varData_623 = param_1.output;
      varData_627 = param_1.avail_out;
      varData_624 = param_1.next_in;
      varData_622 = param_1.input;
      varData_626 = param_1.avail_in;
      varData_628 = varData_621.hold;
      varData_629 = varData_621.bits;
      varData_630 = varData_626;
      varData_631 = varData_627;
      varData_643 = _0x4ec637;
      _0x50ca0e: while (true) {
        switch (varData_621.mode) {
          case varData_563:
            if (varData_621.wrap === 0) {
              varData_621.mode = varData_575;
              break;
            }
            while (varData_629 < 16) {
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_626--;
              varData_628 += varData_622[varData_624++] << varData_629;
              varData_629 += 8;
            }
            if (varData_621.wrap & 2 && varData_628 === 35615) {
              if (varData_621.wbits === 0) {
                varData_621.wbits = 15;
              }
              varData_621.check = 0;
              varData_644[0] = varData_628 & 255;
              varData_644[1] = varData_628 >>> 8 & 255;
              varData_621.check = varData_305(varData_621.check, varData_644, 2, 0);
              varData_628 = 0;
              varData_629 = 0;
              varData_621.mode = varData_564;
              break;
            }
            if (varData_621.head) {
              varData_621.head.done = false;
            }
            if (!(varData_621.wrap & 1) || (((varData_628 & 255) << 8) + (varData_628 >> 8)) % 31) {
              param_1.msg = "incorrect header check";
              varData_621.mode = varData_592;
              break;
            }
            if ((varData_628 & 15) !== _0x12c4b3) {
              param_1.msg = "unknown compression method";
              varData_621.mode = varData_592;
              break;
            }
            varData_628 >>>= 4;
            varData_629 -= 4;
            varData_642 = (varData_628 & 15) + 8;
            if (varData_621.wbits === 0) {
              varData_621.wbits = varData_642;
            }
            if (varData_642 > 15 || varData_642 > varData_621.wbits) {
              param_1.msg = "invalid window size";
              varData_621.mode = varData_592;
              break;
            }
            varData_621.dmax = 1 << varData_621.wbits;
            varData_621.flags = 0;
            param_1.adler = varData_621.check = 1;
            varData_621.mode = varData_628 & 512 ? varData_572 : varData_574;
            varData_628 = 0;
            varData_629 = 0;
            break;
          case varData_564:
            while (varData_629 < 16) {
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_626--;
              varData_628 += varData_622[varData_624++] << varData_629;
              varData_629 += 8;
            }
            varData_621.flags = varData_628;
            if ((varData_621.flags & 255) !== _0x12c4b3) {
              param_1.msg = "unknown compression method";
              varData_621.mode = varData_592;
              break;
            }
            if (varData_621.flags & 57344) {
              param_1.msg = "unknown header flags set";
              varData_621.mode = varData_592;
              break;
            }
            if (varData_621.head) {
              varData_621.head.text = varData_628 >> 8 & 1;
            }
            if (varData_621.flags & 512 && varData_621.wrap & 4) {
              varData_644[0] = varData_628 & 255;
              varData_644[1] = varData_628 >>> 8 & 255;
              varData_621.check = varData_305(varData_621.check, varData_644, 2, 0);
            }
            varData_628 = 0;
            varData_629 = 0;
            varData_621.mode = varData_565;
          case varData_565:
            while (varData_629 < 32) {
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_626--;
              varData_628 += varData_622[varData_624++] << varData_629;
              varData_629 += 8;
            }
            if (varData_621.head) {
              varData_621.head.time = varData_628;
            }
            if (varData_621.flags & 512 && varData_621.wrap & 4) {
              varData_644[0] = varData_628 & 255;
              varData_644[1] = varData_628 >>> 8 & 255;
              varData_644[2] = varData_628 >>> 16 & 255;
              varData_644[3] = varData_628 >>> 24 & 255;
              varData_621.check = varData_305(varData_621.check, varData_644, 4, 0);
            }
            varData_628 = 0;
            varData_629 = 0;
            varData_621.mode = varData_566;
          case varData_566:
            while (varData_629 < 16) {
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_626--;
              varData_628 += varData_622[varData_624++] << varData_629;
              varData_629 += 8;
            }
            if (varData_621.head) {
              varData_621.head.xflags = varData_628 & 255;
              varData_621.head.os = varData_628 >> 8;
            }
            if (varData_621.flags & 512 && varData_621.wrap & 4) {
              varData_644[0] = varData_628 & 255;
              varData_644[1] = varData_628 >>> 8 & 255;
              varData_621.check = varData_305(varData_621.check, varData_644, 2, 0);
            }
            varData_628 = 0;
            varData_629 = 0;
            varData_621.mode = varData_567;
          case varData_567:
            if (varData_621.flags & 1024) {
              while (varData_629 < 16) {
                if (varData_626 === 0) {
                  break _0x50ca0e;
                }
                varData_626--;
                varData_628 += varData_622[varData_624++] << varData_629;
                varData_629 += 8;
              }
              varData_621.length = varData_628;
              if (varData_621.head) {
                varData_621.head.extra_len = varData_628;
              }
              if (varData_621.flags & 512 && varData_621.wrap & 4) {
                varData_644[0] = varData_628 & 255;
                varData_644[1] = varData_628 >>> 8 & 255;
                varData_621.check = varData_305(varData_621.check, varData_644, 2, 0);
              }
              varData_628 = 0;
              varData_629 = 0;
            } else if (varData_621.head) {
              varData_621.head.extra = null;
            }
            varData_621.mode = varData_568;
          case varData_568:
            if (varData_621.flags & 1024) {
              varData_632 = varData_621.length;
              if (varData_632 > varData_626) {
                varData_632 = varData_626;
              }
              if (varData_632) {
                if (varData_621.head) {
                  varData_642 = varData_621.head.extra_len - varData_621.length;
                  if (!varData_621.head.extra) {
                    varData_621.head.extra = new Uint8Array(varData_621.head.extra_len);
                  }
                  varData_621.head.extra.set(varData_622.subarray(varData_624, varData_624 + varData_632), varData_642);
                }
                if (varData_621.flags & 512 && varData_621.wrap & 4) {
                  varData_621.check = varData_305(varData_621.check, varData_622, varData_632, varData_624);
                }
                varData_626 -= varData_632;
                varData_624 += varData_632;
                varData_621.length -= varData_632;
              }
              if (varData_621.length) {
                break _0x50ca0e;
              }
            }
            varData_621.length = 0;
            varData_621.mode = varData_569;
          case varData_569:
            if (varData_621.flags & 2048) {
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_632 = 0;
              do {
                varData_642 = varData_622[varData_624 + varData_632++];
                if (varData_621.head && varData_642 && varData_621.length < 65536) {
                  varData_621.head.name += String.fromCharCode(varData_642);
                }
              } while (varData_642 && varData_632 < varData_626);
              if (varData_621.flags & 512 && varData_621.wrap & 4) {
                varData_621.check = varData_305(varData_621.check, varData_622, varData_632, varData_624);
              }
              varData_626 -= varData_632;
              varData_624 += varData_632;
              if (varData_642) {
                break _0x50ca0e;
              }
            } else if (varData_621.head) {
              varData_621.head.name = null;
            }
            varData_621.length = 0;
            varData_621.mode = varData_570;
          case varData_570:
            if (varData_621.flags & 4096) {
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_632 = 0;
              do {
                varData_642 = varData_622[varData_624 + varData_632++];
                if (varData_621.head && varData_642 && varData_621.length < 65536) {
                  varData_621.head.comment += String.fromCharCode(varData_642);
                }
              } while (varData_642 && varData_632 < varData_626);
              if (varData_621.flags & 512 && varData_621.wrap & 4) {
                varData_621.check = varData_305(varData_621.check, varData_622, varData_632, varData_624);
              }
              varData_626 -= varData_632;
              varData_624 += varData_632;
              if (varData_642) {
                break _0x50ca0e;
              }
            } else if (varData_621.head) {
              varData_621.head.comment = null;
            }
            varData_621.mode = varData_571;
          case varData_571:
            if (varData_621.flags & 512) {
              while (varData_629 < 16) {
                if (varData_626 === 0) {
                  break _0x50ca0e;
                }
                varData_626--;
                varData_628 += varData_622[varData_624++] << varData_629;
                varData_629 += 8;
              }
              if (varData_621.wrap & 4 && varData_628 !== (varData_621.check & 65535)) {
                param_1.msg = "header crc mismatch";
                varData_621.mode = varData_592;
                break;
              }
              varData_628 = 0;
              varData_629 = 0;
            }
            if (varData_621.head) {
              varData_621.head.hcrc = varData_621.flags >> 9 & 1;
              varData_621.head.done = true;
            }
            param_1.adler = varData_621.check = 0;
            varData_621.mode = varData_574;
            break;
          case varData_572:
            while (varData_629 < 32) {
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_626--;
              varData_628 += varData_622[varData_624++] << varData_629;
              varData_629 += 8;
            }
            param_1.adler = varData_621.check = varData_599(varData_628);
            varData_628 = 0;
            varData_629 = 0;
            varData_621.mode = varData_573;
          case varData_573:
            if (varData_621.havedict === 0) {
              param_1.next_out = varData_625;
              param_1.avail_out = varData_627;
              param_1.next_in = varData_624;
              param_1.avail_in = varData_626;
              varData_621.hold = varData_628;
              varData_621.bits = varData_629;
              return _0x2dae5a;
            }
            param_1.adler = varData_621.check = 1;
            varData_621.mode = varData_574;
          case varData_574:
            if (param_2 === _0x4fdeb2 || param_2 === _0x48ddac) {
              break _0x50ca0e;
            }
          case varData_575:
            if (varData_621.last) {
              varData_628 >>>= varData_629 & 7;
              varData_629 -= varData_629 & 7;
              varData_621.mode = varData_589;
              break;
            }
            while (varData_629 < 3) {
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_626--;
              varData_628 += varData_622[varData_624++] << varData_629;
              varData_629 += 8;
            }
            varData_621.last = varData_628 & 1;
            varData_628 >>>= 1;
            varData_629 -= 1;
            switch (varData_628 & 3) {
              case 0:
                varData_621.mode = varData_576;
                break;
              case 1:
                varData_615(varData_621);
                varData_621.mode = varData_582;
                if (param_2 === _0x48ddac) {
                  varData_628 >>>= 2;
                  varData_629 -= 2;
                  break _0x50ca0e;
                }
                break;
              case 2:
                varData_621.mode = varData_579;
                break;
              case 3:
                param_1.msg = "invalid block type";
                varData_621.mode = varData_592;
            }
            varData_628 >>>= 2;
            varData_629 -= 2;
            break;
          case varData_576:
            varData_628 >>>= varData_629 & 7;
            varData_629 -= varData_629 & 7;
            while (varData_629 < 32) {
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_626--;
              varData_628 += varData_622[varData_624++] << varData_629;
              varData_629 += 8;
            }
            if ((varData_628 & 65535) !== (varData_628 >>> 16 ^ 65535)) {
              param_1.msg = "invalid stored block lengths";
              varData_621.mode = varData_592;
              break;
            }
            varData_621.length = varData_628 & 65535;
            varData_628 = 0;
            varData_629 = 0;
            varData_621.mode = varData_577;
            if (param_2 === _0x48ddac) {
              break _0x50ca0e;
            }
          case varData_577:
            varData_621.mode = varData_578;
          case varData_578:
            varData_632 = varData_621.length;
            if (varData_632) {
              if (varData_632 > varData_626) {
                varData_632 = varData_626;
              }
              if (varData_632 > varData_627) {
                varData_632 = varData_627;
              }
              if (varData_632 === 0) {
                break _0x50ca0e;
              }
              varData_623.set(varData_622.subarray(varData_624, varData_624 + varData_632), varData_625);
              varData_626 -= varData_632;
              varData_624 += varData_632;
              varData_627 -= varData_632;
              varData_625 += varData_632;
              varData_621.length -= varData_632;
              break;
            }
            varData_621.mode = varData_574;
            break;
          case varData_579:
            while (varData_629 < 14) {
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_626--;
              varData_628 += varData_622[varData_624++] << varData_629;
              varData_629 += 8;
            }
            varData_621.nlen = (varData_628 & 31) + 257;
            varData_628 >>>= 5;
            varData_629 -= 5;
            varData_621.ndist = (varData_628 & 31) + 1;
            varData_628 >>>= 5;
            varData_629 -= 5;
            varData_621.ncode = (varData_628 & 15) + 4;
            varData_628 >>>= 4;
            varData_629 -= 4;
            if (varData_621.nlen > 286 || varData_621.ndist > 30) {
              param_1.msg = "too many length or distance symbols";
              varData_621.mode = varData_592;
              break;
            }
            varData_621.have = 0;
            varData_621.mode = varData_580;
          case varData_580:
            while (varData_621.have < varData_621.ncode) {
              while (varData_629 < 3) {
                if (varData_626 === 0) {
                  break _0x50ca0e;
                }
                varData_626--;
                varData_628 += varData_622[varData_624++] << varData_629;
                varData_629 += 8;
              }
              varData_621.lens[varData_647[varData_621.have++]] = varData_628 & 7;
              varData_628 >>>= 3;
              varData_629 -= 3;
            }
            while (varData_621.have < 19) {
              varData_621.lens[varData_647[varData_621.have++]] = 0;
            }
            varData_621.lencode = varData_621.lendyn;
            varData_621.lenbits = 7;
            var varData_648 = {
              bits: varData_621.lenbits
            };
            varData_645 = varData_648;
            varData_643 = varData_559(varData_560, varData_621.lens, 0, 19, varData_621.lencode, 0, varData_621.work, varData_645);
            varData_621.lenbits = varData_645.bits;
            if (varData_643) {
              param_1.msg = "invalid code lengths set";
              varData_621.mode = varData_592;
              break;
            }
            varData_621.have = 0;
            varData_621.mode = varData_581;
          case varData_581:
            while (varData_621.have < varData_621.nlen + varData_621.ndist) {
              while (true) {
                varData_635 = varData_621.lencode[varData_628 & (1 << varData_621.lenbits) - 1];
                varData_636 = varData_635 >>> 24;
                varData_637 = varData_635 >>> 16 & 255;
                varData_638 = varData_635 & 65535;
                if (varData_636 <= varData_629) {
                  break;
                }
                if (varData_626 === 0) {
                  break _0x50ca0e;
                }
                varData_626--;
                varData_628 += varData_622[varData_624++] << varData_629;
                varData_629 += 8;
              }
              if (varData_638 < 16) {
                varData_628 >>>= varData_636;
                varData_629 -= varData_636;
                varData_621.lens[varData_621.have++] = varData_638;
              } else {
                if (varData_638 === 16) {
                  varData_646 = varData_636 + 2;
                  while (varData_629 < varData_646) {
                    if (varData_626 === 0) {
                      break _0x50ca0e;
                    }
                    varData_626--;
                    varData_628 += varData_622[varData_624++] << varData_629;
                    varData_629 += 8;
                  }
                  varData_628 >>>= varData_636;
                  varData_629 -= varData_636;
                  if (varData_621.have === 0) {
                    param_1.msg = "invalid bit length repeat";
                    varData_621.mode = varData_592;
                    break;
                  }
                  varData_642 = varData_621.lens[varData_621.have - 1];
                  varData_632 = 3 + (varData_628 & 3);
                  varData_628 >>>= 2;
                  varData_629 -= 2;
                } else if (varData_638 === 17) {
                  varData_646 = varData_636 + 3;
                  while (varData_629 < varData_646) {
                    if (varData_626 === 0) {
                      break _0x50ca0e;
                    }
                    varData_626--;
                    varData_628 += varData_622[varData_624++] << varData_629;
                    varData_629 += 8;
                  }
                  varData_628 >>>= varData_636;
                  varData_629 -= varData_636;
                  varData_642 = 0;
                  varData_632 = 3 + (varData_628 & 7);
                  varData_628 >>>= 3;
                  varData_629 -= 3;
                } else {
                  varData_646 = varData_636 + 7;
                  while (varData_629 < varData_646) {
                    if (varData_626 === 0) {
                      break _0x50ca0e;
                    }
                    varData_626--;
                    varData_628 += varData_622[varData_624++] << varData_629;
                    varData_629 += 8;
                  }
                  varData_628 >>>= varData_636;
                  varData_629 -= varData_636;
                  varData_642 = 0;
                  varData_632 = 11 + (varData_628 & 127);
                  varData_628 >>>= 7;
                  varData_629 -= 7;
                }
                if (varData_621.have + varData_632 > varData_621.nlen + varData_621.ndist) {
                  param_1.msg = "invalid bit length repeat";
                  varData_621.mode = varData_592;
                  break;
                }
                while (varData_632--) {
                  varData_621.lens[varData_621.have++] = varData_642;
                }
              }
            }
            if (varData_621.mode === varData_592) {
              break;
            }
            if (varData_621.lens[256] === 0) {
              param_1.msg = "invalid code -- missing end-of-block";
              varData_621.mode = varData_592;
              break;
            }
            varData_621.lenbits = 9;
            var varData_649 = {
              bits: varData_621.lenbits
            };
            varData_645 = varData_649;
            varData_643 = varData_559(varData_561, varData_621.lens, 0, varData_621.nlen, varData_621.lencode, 0, varData_621.work, varData_645);
            varData_621.lenbits = varData_645.bits;
            if (varData_643) {
              param_1.msg = "invalid literal/lengths set";
              varData_621.mode = varData_592;
              break;
            }
            varData_621.distbits = 6;
            varData_621.distcode = varData_621.distdyn;
            var varData_650 = {
              bits: varData_621.distbits
            };
            varData_645 = varData_650;
            varData_643 = varData_559(varData_562, varData_621.lens, varData_621.nlen, varData_621.ndist, varData_621.distcode, 0, varData_621.work, varData_645);
            varData_621.distbits = varData_645.bits;
            if (varData_643) {
              param_1.msg = "invalid distances set";
              varData_621.mode = varData_592;
              break;
            }
            varData_621.mode = varData_582;
            if (param_2 === _0x48ddac) {
              break _0x50ca0e;
            }
          case varData_582:
            varData_621.mode = varData_583;
          case varData_583:
            if (varData_626 >= 6 && varData_627 >= 258) {
              param_1.next_out = varData_625;
              param_1.avail_out = varData_627;
              param_1.next_in = varData_624;
              param_1.avail_in = varData_626;
              varData_621.hold = varData_628;
              varData_621.bits = varData_629;
              varData_498(param_1, varData_631);
              varData_625 = param_1.next_out;
              varData_623 = param_1.output;
              varData_627 = param_1.avail_out;
              varData_624 = param_1.next_in;
              varData_622 = param_1.input;
              varData_626 = param_1.avail_in;
              varData_628 = varData_621.hold;
              varData_629 = varData_621.bits;
              if (varData_621.mode === varData_574) {
                varData_621.back = -1;
              }
              break;
            }
            varData_621.back = 0;
            while (true) {
              varData_635 = varData_621.lencode[varData_628 & (1 << varData_621.lenbits) - 1];
              varData_636 = varData_635 >>> 24;
              varData_637 = varData_635 >>> 16 & 255;
              varData_638 = varData_635 & 65535;
              if (varData_636 <= varData_629) {
                break;
              }
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_626--;
              varData_628 += varData_622[varData_624++] << varData_629;
              varData_629 += 8;
            }
            if (varData_637 && (varData_637 & 240) === 0) {
              varData_639 = varData_636;
              varData_640 = varData_637;
              varData_641 = varData_638;
              while (true) {
                varData_635 = varData_621.lencode[varData_641 + ((varData_628 & (1 << varData_639 + varData_640) - 1) >> varData_639)];
                varData_636 = varData_635 >>> 24;
                varData_637 = varData_635 >>> 16 & 255;
                varData_638 = varData_635 & 65535;
                if (varData_639 + varData_636 <= varData_629) {
                  break;
                }
                if (varData_626 === 0) {
                  break _0x50ca0e;
                }
                varData_626--;
                varData_628 += varData_622[varData_624++] << varData_629;
                varData_629 += 8;
              }
              varData_628 >>>= varData_639;
              varData_629 -= varData_639;
              varData_621.back += varData_639;
            }
            varData_628 >>>= varData_636;
            varData_629 -= varData_636;
            varData_621.back += varData_636;
            varData_621.length = varData_638;
            if (varData_637 === 0) {
              varData_621.mode = varData_588;
              break;
            }
            if (varData_637 & 32) {
              varData_621.back = -1;
              varData_621.mode = varData_574;
              break;
            }
            if (varData_637 & 64) {
              param_1.msg = "invalid literal/length code";
              varData_621.mode = varData_592;
              break;
            }
            varData_621.extra = varData_637 & 15;
            varData_621.mode = varData_584;
          case varData_584:
            if (varData_621.extra) {
              varData_646 = varData_621.extra;
              while (varData_629 < varData_646) {
                if (varData_626 === 0) {
                  break _0x50ca0e;
                }
                varData_626--;
                varData_628 += varData_622[varData_624++] << varData_629;
                varData_629 += 8;
              }
              varData_621.length += varData_628 & (1 << varData_621.extra) - 1;
              varData_628 >>>= varData_621.extra;
              varData_629 -= varData_621.extra;
              varData_621.back += varData_621.extra;
            }
            varData_621.was = varData_621.length;
            varData_621.mode = varData_585;
          case varData_585:
            while (true) {
              varData_635 = varData_621.distcode[varData_628 & (1 << varData_621.distbits) - 1];
              varData_636 = varData_635 >>> 24;
              varData_637 = varData_635 >>> 16 & 255;
              varData_638 = varData_635 & 65535;
              if (varData_636 <= varData_629) {
                break;
              }
              if (varData_626 === 0) {
                break _0x50ca0e;
              }
              varData_626--;
              varData_628 += varData_622[varData_624++] << varData_629;
              varData_629 += 8;
            }
            if ((varData_637 & 240) === 0) {
              varData_639 = varData_636;
              varData_640 = varData_637;
              varData_641 = varData_638;
              while (true) {
                varData_635 = varData_621.distcode[varData_641 + ((varData_628 & (1 << varData_639 + varData_640) - 1) >> varData_639)];
                varData_636 = varData_635 >>> 24;
                varData_637 = varData_635 >>> 16 & 255;
                varData_638 = varData_635 & 65535;
                if (varData_639 + varData_636 <= varData_629) {
                  break;
                }
                if (varData_626 === 0) {
                  break _0x50ca0e;
                }
                varData_626--;
                varData_628 += varData_622[varData_624++] << varData_629;
                varData_629 += 8;
              }
              varData_628 >>>= varData_639;
              varData_629 -= varData_639;
              varData_621.back += varData_639;
            }
            varData_628 >>>= varData_636;
            varData_629 -= varData_636;
            varData_621.back += varData_636;
            if (varData_637 & 64) {
              param_1.msg = "invalid distance code";
              varData_621.mode = varData_592;
              break;
            }
            varData_621.offset = varData_638;
            varData_621.extra = varData_637 & 15;
            varData_621.mode = varData_586;
          case varData_586:
            if (varData_621.extra) {
              varData_646 = varData_621.extra;
              while (varData_629 < varData_646) {
                if (varData_626 === 0) {
                  break _0x50ca0e;
                }
                varData_626--;
                varData_628 += varData_622[varData_624++] << varData_629;
                varData_629 += 8;
              }
              varData_621.offset += varData_628 & (1 << varData_621.extra) - 1;
              varData_628 >>>= varData_621.extra;
              varData_629 -= varData_621.extra;
              varData_621.back += varData_621.extra;
            }
            if (varData_621.offset > varData_621.dmax) {
              param_1.msg = "invalid distance too far back";
              varData_621.mode = varData_592;
              break;
            }
            varData_621.mode = varData_587;
          case varData_587:
            if (varData_627 === 0) {
              break _0x50ca0e;
            }
            varData_632 = varData_631 - varData_627;
            if (varData_621.offset > varData_632) {
              varData_632 = varData_621.offset - varData_632;
              if (varData_632 > varData_621.whave) {
                if (varData_621.sane) {
                  param_1.msg = "invalid distance too far back";
                  varData_621.mode = varData_592;
                  break;
                }
              }
              if (varData_632 > varData_621.wnext) {
                varData_632 -= varData_621.wnext;
                varData_633 = varData_621.wsize - varData_632;
              } else {
                varData_633 = varData_621.wnext - varData_632;
              }
              if (varData_632 > varData_621.length) {
                varData_632 = varData_621.length;
              }
              varData_634 = varData_621.window;
            } else {
              varData_634 = varData_623;
              varData_633 = varData_625 - varData_621.offset;
              varData_632 = varData_621.length;
            }
            if (varData_632 > varData_627) {
              varData_632 = varData_627;
            }
            varData_627 -= varData_632;
            varData_621.length -= varData_632;
            do {
              varData_623[varData_625++] = varData_634[varData_633++];
            } while (--varData_632);
            if (varData_621.length === 0) {
              varData_621.mode = varData_583;
            }
            break;
          case varData_588:
            if (varData_627 === 0) {
              break _0x50ca0e;
            }
            varData_623[varData_625++] = varData_621.length;
            varData_627--;
            varData_621.mode = varData_583;
            break;
          case varData_589:
            if (varData_621.wrap) {
              while (varData_629 < 32) {
                if (varData_626 === 0) {
                  break _0x50ca0e;
                }
                varData_626--;
                varData_628 |= varData_622[varData_624++] << varData_629;
                varData_629 += 8;
              }
              varData_631 -= varData_627;
              param_1.total_out += varData_631;
              varData_621.total += varData_631;
              if (varData_621.wrap & 4 && varData_631) {
                param_1.adler = varData_621.check = varData_621.flags ? varData_305(varData_621.check, varData_623, varData_631, varData_625 - varData_631) : varData_297(varData_621.check, varData_623, varData_631, varData_625 - varData_631);
              }
              varData_631 = varData_627;
              if (varData_621.wrap & 4 && (varData_621.flags ? varData_628 : varData_599(varData_628)) !== varData_621.check) {
                param_1.msg = "incorrect data check";
                varData_621.mode = varData_592;
                break;
              }
              varData_628 = 0;
              varData_629 = 0;
            }
            varData_621.mode = varData_590;
          case varData_590:
            if (varData_621.wrap && varData_621.flags) {
              while (varData_629 < 32) {
                if (varData_626 === 0) {
                  break _0x50ca0e;
                }
                varData_626--;
                varData_628 += varData_622[varData_624++] << varData_629;
                varData_629 += 8;
              }
              if (varData_621.wrap & 4 && varData_628 !== (varData_621.total & -1)) {
                param_1.msg = "incorrect length check";
                varData_621.mode = varData_592;
                break;
              }
              varData_628 = 0;
              varData_629 = 0;
            }
            varData_621.mode = varData_591;
          case varData_591:
            varData_643 = _0x3e7021;
            break _0x50ca0e;
          case varData_592:
            varData_643 = _0x432b53;
            break _0x50ca0e;
          case varData_593:
            return _0x4df4c7;
          case varData_594:
          default:
            return _0x371f72;
        }
      }
      param_1.next_out = varData_625;
      param_1.avail_out = varData_627;
      param_1.next_in = varData_624;
      param_1.avail_in = varData_626;
      varData_621.hold = varData_628;
      varData_621.bits = varData_629;
      if (varData_621.wsize || varData_631 !== param_1.avail_out && varData_621.mode < varData_592 && (varData_621.mode < varData_589 || param_2 !== _0x3bacc1)) {
        if (varData_617(param_1, param_1.output, param_1.next_out, varData_631 - param_1.avail_out)) ;
      }
      varData_630 -= param_1.avail_in;
      varData_631 -= param_1.avail_out;
      param_1.total_in += varData_630;
      param_1.total_out += varData_631;
      varData_621.total += varData_631;
      if (varData_621.wrap & 4 && varData_631) {
        param_1.adler = varData_621.check = varData_621.flags ? varData_305(varData_621.check, varData_623, varData_631, param_1.next_out - varData_631) : varData_297(varData_621.check, varData_623, varData_631, param_1.next_out - varData_631);
      }
      param_1.data_type = varData_621.bits + (varData_621.last ? 64 : 0) + (varData_621.mode === varData_574 ? 128 : 0) + (varData_621.mode === varData_582 || varData_621.mode === varData_577 ? 256 : 0);
      if ((varData_630 === 0 && varData_631 === 0 || param_2 === _0x3bacc1) && varData_643 === _0x4ec637) {
        varData_643 = _0x3657a3;
      }
      return varData_643;
    };
    const varData_651 = (param_1) => {
      if (varData_600(param_1)) {
        return _0x371f72;
      }
      let varData_652 = param_1.state;
      if (varData_652.window) {
        varData_652.window = null;
      }
      param_1.state = null;
      return _0x4ec637;
    };
    const varData_653 = (param_1, param_2) => {
      if (varData_600(param_1)) {
        return _0x371f72;
      }
      const varData_654 = param_1.state;
      if ((varData_654.wrap & 2) === 0) {
        return _0x371f72;
      }
      varData_654.head = param_2;
      param_2.done = false;
      return _0x4ec637;
    };
    const varData_655 = (param_1, param_2) => {
      const varData_656 = param_2.length;
      let varData_657;
      let varData_658;
      let varData_659;
      if (varData_600(param_1)) {
        return _0x371f72;
      }
      varData_657 = param_1.state;
      if (varData_657.wrap !== 0 && varData_657.mode !== varData_573) {
        return _0x371f72;
      }
      if (varData_657.mode === varData_573) {
        varData_658 = 1;
        varData_658 = varData_297(varData_658, param_2, varData_656, 0);
        if (varData_658 !== varData_657.check) {
          return _0x432b53;
        }
      }
      varData_659 = varData_617(param_1, param_2, varData_656, varData_656);
      if (varData_659) {
        varData_657.mode = varData_593;
        return _0x4df4c7;
      }
      varData_657.havedict = 1;
      return _0x4ec637;
    };
    var varData_660 = varData_604;
    var varData_661 = varData_606;
    var varData_662 = varData_602;
    var varData_663 = varData_612;
    var varData_664 = varData_609;
    var varData_665 = varData_620;
    var varData_666 = varData_651;
    var varData_667 = varData_653;
    var varData_668 = varData_655;
    var varData_669 = "pako inflate (from Nodeca project)";
    var varData_670 = {
      inflateReset: varData_660,
      inflateReset2: varData_661,
      inflateResetKeep: varData_662,
      inflateInit: varData_663,
      inflateInit2: varData_664,
      inflate: varData_665,
      inflateEnd: varData_666,
      inflateGetHeader: varData_667,
      inflateSetDictionary: varData_668,
      inflateInfo: varData_669
    };
    var varData_671 = varData_670;
    function handleAction_69() {
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
    var varData_672 = handleAction_69;
    const varData_673 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x35969b,
      Z_FINISH: _0x3e9ee9,
      Z_OK: _0x1e2c6b,
      Z_STREAM_END: _0x284ea8,
      Z_NEED_DICT: _0x2ee971,
      Z_STREAM_ERROR: _0x502cfc,
      Z_DATA_ERROR: _0x177079,
      Z_MEM_ERROR: _0x1e8132
    } = varData_308;
    function handleAction_70(param_1) {
      this.options = varData_455.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, param_1 || {});
      const varData_674 = this.options;
      if (varData_674.raw && varData_674.windowBits >= 0 && varData_674.windowBits < 16) {
        varData_674.windowBits = -varData_674.windowBits;
        if (varData_674.windowBits === 0) {
          varData_674.windowBits = -15;
        }
      }
      if (varData_674.windowBits >= 0 && varData_674.windowBits < 16 && (!param_1 || !param_1.windowBits)) {
        varData_674.windowBits += 32;
      }
      if (varData_674.windowBits > 15 && varData_674.windowBits < 48) {
        if ((varData_674.windowBits & 15) === 0) {
          varData_674.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_478();
      this.strm.avail_out = 0;
      let varData_675 = varData_671.inflateInit2(this.strm, varData_674.windowBits);
      if (varData_675 !== _0x1e2c6b) {
        throw new Error(varData_306[varData_675]);
      }
      this.header = new varData_672();
      varData_671.inflateGetHeader(this.strm, this.header);
      if (varData_674.dictionary) {
        if (typeof varData_674.dictionary === "string") {
          varData_674.dictionary = varData_477.string2buf(varData_674.dictionary);
        } else if (varData_673.call(varData_674.dictionary) === "[object ArrayBuffer]") {
          varData_674.dictionary = new Uint8Array(varData_674.dictionary);
        }
        if (varData_674.raw) {
          varData_675 = varData_671.inflateSetDictionary(this.strm, varData_674.dictionary);
          if (varData_675 !== _0x1e2c6b) {
            throw new Error(varData_306[varData_675]);
          }
        }
      }
    }
    handleAction_70.prototype.push = function(param_1, param_2) {
      const varData_676 = this.strm;
      const varData_677 = this.options.chunkSize;
      const varData_678 = this.options.dictionary;
      let varData_679;
      let varData_680;
      let varData_681;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_680 = param_2;
      } else {
        varData_680 = param_2 === true ? _0x3e9ee9 : _0x35969b;
      }
      if (varData_673.call(param_1) === "[object ArrayBuffer]") {
        varData_676.input = new Uint8Array(param_1);
      } else {
        varData_676.input = param_1;
      }
      varData_676.next_in = 0;
      varData_676.avail_in = varData_676.input.length;
      while (true) {
        if (varData_676.avail_out === 0) {
          varData_676.output = new Uint8Array(varData_677);
          varData_676.next_out = 0;
          varData_676.avail_out = varData_677;
        }
        varData_679 = varData_671.inflate(varData_676, varData_680);
        if (varData_679 === _0x2ee971 && varData_678) {
          varData_679 = varData_671.inflateSetDictionary(varData_676, varData_678);
          if (varData_679 === _0x1e2c6b) {
            varData_679 = varData_671.inflate(varData_676, varData_680);
          } else if (varData_679 === _0x177079) {
            varData_679 = _0x2ee971;
          }
        }
        while (varData_676.avail_in > 0 && varData_679 === _0x284ea8 && varData_676.state.wrap > 0 && param_1[varData_676.next_in] !== 0) {
          varData_671.inflateReset(varData_676);
          varData_679 = varData_671.inflate(varData_676, varData_680);
        }
        switch (varData_679) {
          case _0x502cfc:
          case _0x177079:
          case _0x2ee971:
          case _0x1e8132:
            this.onEnd(varData_679);
            this.ended = true;
            return false;
        }
        varData_681 = varData_676.avail_out;
        if (varData_676.next_out) {
          if (varData_676.avail_out === 0 || varData_679 === _0x284ea8) {
            if (this.options.to === "string") {
              let varData_682 = varData_477.utf8border(varData_676.output, varData_676.next_out);
              let varData_683 = varData_676.next_out - varData_682;
              let varData_684 = varData_477.buf2string(varData_676.output, varData_682);
              varData_676.next_out = varData_683;
              varData_676.avail_out = varData_677 - varData_683;
              if (varData_683) {
                varData_676.output.set(varData_676.output.subarray(varData_682, varData_682 + varData_683), 0);
              }
              this.onData(varData_684);
            } else {
              this.onData(varData_676.output.length === varData_676.next_out ? varData_676.output : varData_676.output.subarray(0, varData_676.next_out));
            }
          }
        }
        if (varData_679 === _0x1e2c6b && varData_681 === 0) {
          continue;
        }
        if (varData_679 === _0x284ea8) {
          varData_679 = varData_671.inflateEnd(this.strm);
          this.onEnd(varData_679);
          this.ended = true;
          return true;
        }
        if (varData_676.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_70.prototype.onData = function(param_1) {
      this.chunks.push(param_1);
    };
    handleAction_70.prototype.onEnd = function(param_1) {
      if (param_1 === _0x1e2c6b) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = varData_455.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_71(param_1, param_2) {
      const varData_685 = new handleAction_70(param_2);
      varData_685.push(param_1);
      if (varData_685.err) {
        throw varData_685.msg || varData_306[varData_685.err];
      }
      return varData_685.result;
    }
    function handleAction_72(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.raw = true;
      return handleAction_71(param_1, param_2);
    }
    var varData_686 = handleAction_70;
    var varData_687 = handleAction_71;
    var varData_688 = handleAction_72;
    var varData_689 = handleAction_71;
    var varData_690 = varData_308;
    var varData_691 = {
      Inflate: varData_686,
      inflate: varData_687,
      inflateRaw: varData_688,
      ungzip: varData_689,
      constants: varData_690
    };
    var varData_692 = varData_691;
    const {
      Deflate: _0x1a832c,
      deflate: _0x1fd123,
      deflateRaw: _0xc5331f,
      gzip: _0x4aa962
    } = varData_495;
    const {
      Inflate: _0x2fa554,
      inflate: _0x249c49,
      inflateRaw: _0x132a5e,
      ungzip: _0x2fe2c0
    } = varData_692;
    var varData_693 = _0x1a832c;
    var varData_694 = _0x1fd123;
    var varData_695 = _0xc5331f;
    var varData_696 = _0x4aa962;
    var varData_697 = _0x2fa554;
    var varData_698 = _0x249c49;
    var varData_699 = _0x132a5e;
    var varData_700 = _0x2fe2c0;
    var varData_701 = varData_308;
    var varData_702 = {
      Deflate: varData_693,
      deflate: varData_694,
      deflateRaw: varData_695,
      gzip: varData_696,
      Inflate: varData_697,
      inflate: varData_698,
      inflateRaw: varData_699,
      ungzip: varData_700,
      constants: varData_701
    };
    var varData_703 = varData_702;
    var varData_704 = handleAction_35(739);
    ;
    var varData_705 = Object.create;
    var varData_706 = Object.defineProperty;
    var varData_707 = Object.getOwnPropertyDescriptor;
    var varData_708 = Object.getOwnPropertyNames;
    var varData_709 = Object.getPrototypeOf;
    var varData_710 = Object.prototype.hasOwnProperty;
    var varData_711 = (param_1, param_2) => function _0xab5839() {
      if (!param_2) {
        (0, param_1[varData_708(param_1)[0]])((param_2 = {
          exports: {}
        }).exports, param_2);
      }
      return param_2.exports;
    };
    var varData_712 = (param_1, param_2) => {
      for (var varData_713 in param_2) {
        varData_706(param_1, varData_713, {
          get: param_2[varData_713],
          enumerable: true
        });
      }
    };
    var varData_714 = (param_1, param_2, param_3, param_4) => {
      if (param_2 && typeof param_2 === "object" || typeof param_2 === "function") {
        for (let varData_715 of varData_708(param_2)) {
          if (!varData_710.call(param_1, varData_715) && varData_715 !== param_3) {
            varData_706(param_1, varData_715, {
              get: () => param_2[varData_715],
              enumerable: !(param_4 = varData_707(param_2, varData_715)) || param_4.enumerable
            });
          }
        }
      }
      return param_1;
    };
    var varData_716 = (param_1, param_2, param_3) => {
      param_3 = param_1 != null ? varData_705(varData_709(param_1)) : {};
      return varData_714(param_2 || !param_1 || !param_1.__esModule ? varData_706(param_3, "default", {
        value: param_1,
        enumerable: true
      }) : param_3, param_1);
    };
    var varData_717 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_718 = (param_1, param_2, param_3) => {
      varData_717(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_719 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_720 = (param_1, param_2, param_3, param_4) => {
      varData_717(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_721 = (param_1, param_2, param_3, param_4) => ({
      set _(param_1_1) {
        varData_720(param_1, param_2, param_1_1, param_3);
      },
      get _() {
        return varData_718(param_1, param_2, param_4);
      }
    });
    var varData_722 = (param_1, param_2, param_3) => {
      varData_717(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_723 = varData_711({
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
          var varData_724 = varData_724 || (function(param_1_1, param_2_1) {
            var varData_725 = Object.create || /* @__PURE__ */ (function() {
              function handleAction_73() {
              }
              ;
              return function(param_1_2) {
                var varData_726;
                handleAction_73.prototype = param_1_2;
                varData_726 = new handleAction_73();
                handleAction_73.prototype = null;
                return varData_726;
              };
            })();
            var varData_727 = {};
            var varData_728 = varData_727.lib = {};
            var varData_729 = varData_728.Base = /* @__PURE__ */ (function() {
              return {
                extend: function(param_1_2) {
                  var varData_730 = varData_725(this);
                  if (param_1_2) {
                    varData_730.mixIn(param_1_2);
                  }
                  if (!varData_730.hasOwnProperty("init") || this.init === varData_730.init) {
                    varData_730.init = function() {
                      varData_730.$super.init.apply(this, arguments);
                    };
                  }
                  varData_730.init.prototype = varData_730;
                  varData_730.$super = this;
                  return varData_730;
                },
                create: function() {
                  var varData_731 = this.extend();
                  varData_731.init.apply(varData_731, arguments);
                  return varData_731;
                },
                init: function() {
                },
                mixIn: function(param_1_2) {
                  for (var varData_732 in param_1_2) {
                    if (param_1_2.hasOwnProperty(varData_732)) {
                      this[varData_732] = param_1_2[varData_732];
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
            var varData_733 = varData_728.WordArray = varData_729.extend({
              init: function(param_1_2, param_2_2) {
                param_1_2 = this.words = param_1_2 || [];
                if (param_2_2 != param_2_1) {
                  this.sigBytes = param_2_2;
                } else {
                  this.sigBytes = param_1_2.length * 4;
                }
              },
              toString: function(param_1_2) {
                return (param_1_2 || varData_748).stringify(this);
              },
              concat: function(param_1_2) {
                var varData_734 = this.words;
                var varData_735 = param_1_2.words;
                var varData_736 = this.sigBytes;
                var varData_737 = param_1_2.sigBytes;
                this.clamp();
                if (varData_736 % 4) {
                  for (var loopIdx = 0; loopIdx < varData_737; loopIdx++) {
                    var varData_738 = varData_735[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                    varData_734[varData_736 + loopIdx >>> 2] |= varData_738 << 24 - (varData_736 + loopIdx) % 4 * 8;
                  }
                } else {
                  for (var loopIdx = 0; loopIdx < varData_737; loopIdx += 4) {
                    varData_734[varData_736 + loopIdx >>> 2] = varData_735[loopIdx >>> 2];
                  }
                }
                this.sigBytes += varData_737;
                return this;
              },
              clamp: function() {
                var varData_739 = this.words;
                var varData_740 = this.sigBytes;
                varData_739[varData_740 >>> 2] &= -1 << 32 - varData_740 % 4 * 8;
                varData_739.length = param_1_1.ceil(varData_740 / 4);
              },
              clone: function() {
                var varData_741 = varData_729.clone.call(this);
                varData_741.words = this.words.slice(0);
                return varData_741;
              },
              random: function(param_1_2) {
                var varData_742 = [];
                function handleAction_74(param_1_3) {
                  var param_1_3 = param_1_3;
                  var varData_743 = 987654321;
                  var varData_744 = 4294967295;
                  return function() {
                    varData_743 = (varData_743 & 65535) * 36969 + (varData_743 >> 16) & varData_744;
                    param_1_3 = (param_1_3 & 65535) * 18e3 + (param_1_3 >> 16) & varData_744;
                    var varData_745 = (varData_743 << 16) + param_1_3 & varData_744;
                    varData_745 /= 4294967296;
                    varData_745 += 0.5;
                    return varData_745 * (param_1_1.random() > 0.5 ? 1 : -1);
                  };
                }
                for (var loopIdx = 0, loopIdx_1; loopIdx < param_1_2; loopIdx += 4) {
                  var varData_746 = handleAction_74((loopIdx_1 || param_1_1.random()) * 4294967296);
                  loopIdx_1 = varData_746() * 987654071;
                  varData_742.push(varData_746() * 4294967296 | 0);
                }
                return new varData_733.init(varData_742, param_1_2);
              }
            });
            var varData_747 = varData_727.enc = {};
            var varData_748 = varData_747.Hex = {
              stringify: function(param_1_2) {
                var varData_749 = param_1_2.words;
                var varData_750 = param_1_2.sigBytes;
                var varData_751 = [];
                for (var loopIdx = 0; loopIdx < varData_750; loopIdx++) {
                  var varData_752 = varData_749[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  varData_751.push((varData_752 >>> 4).toString(16));
                  varData_751.push((varData_752 & 15).toString(16));
                }
                return varData_751.join("");
              },
              parse: function(param_1_2) {
                var varData_753 = param_1_2.length;
                var varData_754 = [];
                for (var loopIdx = 0; loopIdx < varData_753; loopIdx += 2) {
                  varData_754[loopIdx >>> 3] |= parseInt(param_1_2.substr(loopIdx, 2), 16) << 24 - loopIdx % 8 * 4;
                }
                return new varData_733.init(varData_754, varData_753 / 2);
              }
            };
            var varData_755 = varData_747.Latin1 = {
              stringify: function(param_1_2) {
                var varData_756 = param_1_2.words;
                var varData_757 = param_1_2.sigBytes;
                var varData_758 = [];
                for (var loopIdx = 0; loopIdx < varData_757; loopIdx++) {
                  var varData_759 = varData_756[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  varData_758.push(String.fromCharCode(varData_759));
                }
                return varData_758.join("");
              },
              parse: function(param_1_2) {
                var varData_760 = param_1_2.length;
                var varData_761 = [];
                for (var loopIdx = 0; loopIdx < varData_760; loopIdx++) {
                  varData_761[loopIdx >>> 2] |= (param_1_2.charCodeAt(loopIdx) & 255) << 24 - loopIdx % 4 * 8;
                }
                return new varData_733.init(varData_761, varData_760);
              }
            };
            var varData_762 = varData_747.Utf8 = {
              stringify: function(param_1_2) {
                try {
                  return decodeURIComponent(escape(varData_755.stringify(param_1_2)));
                } catch (err) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function(param_1_2) {
                return varData_755.parse(unescape(encodeURIComponent(param_1_2)));
              }
            };
            var varData_763 = varData_728.BufferedBlockAlgorithm = varData_729.extend({
              reset: function() {
                this._data = new varData_733.init();
                this._nDataBytes = 0;
              },
              _append: function(param_1_2) {
                if (typeof param_1_2 == "string") {
                  param_1_2 = varData_762.parse(param_1_2);
                }
                this._data.concat(param_1_2);
                this._nDataBytes += param_1_2.sigBytes;
              },
              _process: function(param_1_2) {
                var varData_764 = this._data;
                var varData_765 = varData_764.words;
                var varData_766 = varData_764.sigBytes;
                var varData_767 = this.blockSize;
                var varData_768 = varData_767 * 4;
                var varData_769 = varData_766 / varData_768;
                if (param_1_2) {
                  varData_769 = param_1_1.ceil(varData_769);
                } else {
                  varData_769 = param_1_1.max((varData_769 | 0) - this._minBufferSize, 0);
                }
                var varData_770 = varData_769 * varData_767;
                var varData_771 = param_1_1.min(varData_770 * 4, varData_766);
                if (varData_770) {
                  for (var loopIdx = 0; loopIdx < varData_770; loopIdx += varData_767) {
                    this._doProcessBlock(varData_765, loopIdx);
                  }
                  var varData_772 = varData_765.splice(0, varData_770);
                  varData_764.sigBytes -= varData_771;
                }
                return new varData_733.init(varData_772, varData_771);
              },
              clone: function() {
                var varData_773 = varData_729.clone.call(this);
                varData_773._data = this._data.clone();
                return varData_773;
              },
              _minBufferSize: 0
            });
            var varData_774 = varData_728.Hasher = varData_763.extend({
              cfg: varData_729.extend(),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
                this.reset();
              },
              reset: function() {
                varData_763.reset.call(this);
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
                var varData_775 = this._doFinalize();
                return varData_775;
              },
              blockSize: 16,
              _createHelper: function(param_1_2) {
                return function(param_1_3, param_2_2) {
                  return new param_1_2.init(param_2_2).finalize(param_1_3);
                };
              },
              _createHmacHelper: function(param_1_2) {
                return function(param_1_3, param_2_2) {
                  return new varData_776.HMAC.init(param_1_2, param_2_2).finalize(param_1_3);
                };
              }
            });
            var varData_776 = varData_727.algo = {};
            return varData_727;
          })(Math);
          return varData_724;
        });
      }
    });
    var varData_777 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_778 = param_1_1;
            var varData_779 = varData_778.lib;
            var varData_780 = varData_779.Base;
            var varData_781 = varData_779.WordArray;
            var varData_782 = varData_778.x64 = {};
            var varData_783 = {
              init: function(param_1_3, param_2_1) {
                this.high = param_1_3;
                this.low = param_2_1;
              }
            };
            var varData_784 = varData_782.Word = varData_780.extend(varData_783);
            var varData_785 = varData_782.WordArray = varData_780.extend({
              init: function(param_1_3, param_2_1) {
                param_1_3 = this.words = param_1_3 || [];
                if (param_2_1 != param_1_2) {
                  this.sigBytes = param_2_1;
                } else {
                  this.sigBytes = param_1_3.length * 8;
                }
              },
              toX32: function() {
                var varData_786 = this.words;
                var varData_787 = varData_786.length;
                var varData_788 = [];
                for (var loopIdx = 0; loopIdx < varData_787; loopIdx++) {
                  var varData_789 = varData_786[loopIdx];
                  varData_788.push(varData_789.high);
                  varData_788.push(varData_789.low);
                }
                return varData_781.create(varData_788, this.sigBytes);
              },
              clone: function() {
                var varData_790 = varData_780.clone.call(this);
                var varData_791 = varData_790.words = this.words.slice(0);
                var varData_792 = varData_791.length;
                for (var loopIdx = 0; loopIdx < varData_792; loopIdx++) {
                  varData_791[loopIdx] = varData_791[loopIdx].clone();
                }
                return varData_790;
              }
            });
          })();
          return param_1_1;
        });
      }
    });
    var varData_793 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723());
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
            var varData_794 = param_1_1;
            var varData_795 = varData_794.lib;
            var varData_796 = varData_795.WordArray;
            var varData_797 = varData_796.init;
            var varData_798 = varData_796.init = function(param_1_2) {
              if (param_1_2 instanceof ArrayBuffer) {
                param_1_2 = new Uint8Array(param_1_2);
              }
              if (param_1_2 instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && param_1_2 instanceof Uint8ClampedArray || param_1_2 instanceof Int16Array || param_1_2 instanceof Uint16Array || param_1_2 instanceof Int32Array || param_1_2 instanceof Uint32Array || param_1_2 instanceof Float32Array || param_1_2 instanceof Float64Array) {
                param_1_2 = new Uint8Array(param_1_2.buffer, param_1_2.byteOffset, param_1_2.byteLength);
              }
              if (param_1_2 instanceof Uint8Array) {
                var varData_799 = param_1_2.byteLength;
                var varData_800 = [];
                for (var loopIdx = 0; loopIdx < varData_799; loopIdx++) {
                  varData_800[loopIdx >>> 2] |= param_1_2[loopIdx] << 24 - loopIdx % 4 * 8;
                }
                varData_797.call(this, varData_800, varData_799);
              } else {
                varData_797.apply(this, arguments);
              }
            };
            varData_798.prototype = varData_796;
          })();
          return param_1_1.lib.WordArray;
        });
      }
    });
    var varData_801 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_802 = param_1_1;
            var varData_803 = varData_802.lib;
            var varData_804 = varData_803.WordArray;
            var varData_805 = varData_802.enc;
            var varData_806 = varData_805.Utf16 = varData_805.Utf16BE = {
              stringify: function(param_1_2) {
                var varData_807 = param_1_2.words;
                var varData_808 = param_1_2.sigBytes;
                var varData_809 = [];
                for (var loopIdx = 0; loopIdx < varData_808; loopIdx += 2) {
                  var varData_810 = varData_807[loopIdx >>> 2] >>> 16 - loopIdx % 4 * 8 & 65535;
                  varData_809.push(String.fromCharCode(varData_810));
                }
                return varData_809.join("");
              },
              parse: function(param_1_2) {
                var varData_811 = param_1_2.length;
                var varData_812 = [];
                for (var loopIdx = 0; loopIdx < varData_811; loopIdx++) {
                  varData_812[loopIdx >>> 1] |= param_1_2.charCodeAt(loopIdx) << 16 - loopIdx % 2 * 16;
                }
                return varData_804.create(varData_812, varData_811 * 2);
              }
            };
            varData_805.Utf16LE = {
              stringify: function(param_1_2) {
                var varData_813 = param_1_2.words;
                var varData_814 = param_1_2.sigBytes;
                var varData_815 = [];
                for (var loopIdx = 0; loopIdx < varData_814; loopIdx += 2) {
                  var varData_816 = handleAction_75(varData_813[loopIdx >>> 2] >>> 16 - loopIdx % 4 * 8 & 65535);
                  varData_815.push(String.fromCharCode(varData_816));
                }
                return varData_815.join("");
              },
              parse: function(param_1_2) {
                var varData_817 = param_1_2.length;
                var varData_818 = [];
                for (var loopIdx = 0; loopIdx < varData_817; loopIdx++) {
                  varData_818[loopIdx >>> 1] |= handleAction_75(param_1_2.charCodeAt(loopIdx) << 16 - loopIdx % 2 * 16);
                }
                return varData_804.create(varData_818, varData_817 * 2);
              }
            };
            function handleAction_75(param_1_2) {
              return param_1_2 << 8 & -16711936 | param_1_2 >>> 8 & 16711935;
            }
          })();
          return param_1_1.enc.Utf16;
        });
      }
    });
    var varData_819 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_820 = param_1_1;
            var varData_821 = varData_820.lib;
            var varData_822 = varData_821.WordArray;
            var varData_823 = varData_820.enc;
            var varData_824 = varData_823.Base64 = {
              stringify: function(param_1_2) {
                var varData_825 = param_1_2.words;
                var varData_826 = param_1_2.sigBytes;
                var varData_827 = this._map;
                param_1_2.clamp();
                var varData_828 = [];
                for (var loopIdx = 0; loopIdx < varData_826; loopIdx += 3) {
                  var varData_829 = varData_825[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  var varData_830 = varData_825[loopIdx + 1 >>> 2] >>> 24 - (loopIdx + 1) % 4 * 8 & 255;
                  var varData_831 = varData_825[loopIdx + 2 >>> 2] >>> 24 - (loopIdx + 2) % 4 * 8 & 255;
                  var varData_832 = varData_829 << 16 | varData_830 << 8 | varData_831;
                  for (var loopIdx_1 = 0; loopIdx_1 < 4 && loopIdx + loopIdx_1 * 0.75 < varData_826; loopIdx_1++) {
                    varData_828.push(varData_827.charAt(varData_832 >>> (3 - loopIdx_1) * 6 & 63));
                  }
                }
                var varData_833 = varData_827.charAt(64);
                if (varData_833) {
                  while (varData_828.length % 4) {
                    varData_828.push(varData_833);
                  }
                }
                return varData_828.join("");
              },
              parse: function(param_1_2) {
                var varData_834 = param_1_2.length;
                var varData_835 = this._map;
                var varData_836 = this._reverseMap;
                if (!varData_836) {
                  varData_836 = this._reverseMap = [];
                  for (var loopIdx = 0; loopIdx < varData_835.length; loopIdx++) {
                    varData_836[varData_835.charCodeAt(loopIdx)] = loopIdx;
                  }
                }
                var varData_837 = varData_835.charAt(64);
                if (varData_837) {
                  var varData_838 = param_1_2.indexOf(varData_837);
                  if (varData_838 !== -1) {
                    varData_834 = varData_838;
                  }
                }
                return handleAction_76(param_1_2, varData_834, varData_836);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function handleAction_76(param_1_2, param_2_1, param_3) {
              var varData_839 = [];
              var varData_840 = 0;
              for (var loopIdx = 0; loopIdx < param_2_1; loopIdx++) {
                if (loopIdx % 4) {
                  var varData_841 = param_3[param_1_2.charCodeAt(loopIdx - 1)] << loopIdx % 4 * 2;
                  var varData_842 = param_3[param_1_2.charCodeAt(loopIdx)] >>> 6 - loopIdx % 4 * 2;
                  varData_839[varData_840 >>> 2] |= (varData_841 | varData_842) << 24 - varData_840 % 4 * 8;
                  varData_840++;
                }
              }
              return varData_822.create(varData_839, varData_840);
            }
          })();
          return param_1_1.enc.Base64;
        });
      }
    });
    var varData_843 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_844 = param_1_1;
            var varData_845 = varData_844.lib;
            var varData_846 = varData_845.WordArray;
            var varData_847 = varData_845.Hasher;
            var varData_848 = varData_844.algo;
            var varData_849 = [];
            (function() {
              for (var loopIdx = 0; loopIdx < 64; loopIdx++) {
                varData_849[loopIdx] = param_1_2.abs(param_1_2.sin(loopIdx + 1)) * 4294967296 | 0;
              }
            })();
            var varData_850 = varData_848.MD5 = varData_847.extend({
              _doReset: function() {
                this._hash = new varData_846.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_851 = param_2_1 + loopIdx;
                  var varData_852 = param_1_3[varData_851];
                  param_1_3[varData_851] = (varData_852 << 8 | varData_852 >>> 24) & 16711935 | (varData_852 << 24 | varData_852 >>> 8) & -16711936;
                }
                var varData_853 = this._hash.words;
                var varData_854 = param_1_3[param_2_1 + 0];
                var varData_855 = param_1_3[param_2_1 + 1];
                var varData_856 = param_1_3[param_2_1 + 2];
                var varData_857 = param_1_3[param_2_1 + 3];
                var varData_858 = param_1_3[param_2_1 + 4];
                var varData_859 = param_1_3[param_2_1 + 5];
                var varData_860 = param_1_3[param_2_1 + 6];
                var varData_861 = param_1_3[param_2_1 + 7];
                var varData_862 = param_1_3[param_2_1 + 8];
                var varData_863 = param_1_3[param_2_1 + 9];
                var varData_864 = param_1_3[param_2_1 + 10];
                var varData_865 = param_1_3[param_2_1 + 11];
                var varData_866 = param_1_3[param_2_1 + 12];
                var varData_867 = param_1_3[param_2_1 + 13];
                var varData_868 = param_1_3[param_2_1 + 14];
                var varData_869 = param_1_3[param_2_1 + 15];
                var varData_870 = varData_853[0];
                var varData_871 = varData_853[1];
                var varData_872 = varData_853[2];
                var varData_873 = varData_853[3];
                varData_870 = handleAction_77(varData_870, varData_871, varData_872, varData_873, varData_854, 7, varData_849[0]);
                varData_873 = handleAction_77(varData_873, varData_870, varData_871, varData_872, varData_855, 12, varData_849[1]);
                varData_872 = handleAction_77(varData_872, varData_873, varData_870, varData_871, varData_856, 17, varData_849[2]);
                varData_871 = handleAction_77(varData_871, varData_872, varData_873, varData_870, varData_857, 22, varData_849[3]);
                varData_870 = handleAction_77(varData_870, varData_871, varData_872, varData_873, varData_858, 7, varData_849[4]);
                varData_873 = handleAction_77(varData_873, varData_870, varData_871, varData_872, varData_859, 12, varData_849[5]);
                varData_872 = handleAction_77(varData_872, varData_873, varData_870, varData_871, varData_860, 17, varData_849[6]);
                varData_871 = handleAction_77(varData_871, varData_872, varData_873, varData_870, varData_861, 22, varData_849[7]);
                varData_870 = handleAction_77(varData_870, varData_871, varData_872, varData_873, varData_862, 7, varData_849[8]);
                varData_873 = handleAction_77(varData_873, varData_870, varData_871, varData_872, varData_863, 12, varData_849[9]);
                varData_872 = handleAction_77(varData_872, varData_873, varData_870, varData_871, varData_864, 17, varData_849[10]);
                varData_871 = handleAction_77(varData_871, varData_872, varData_873, varData_870, varData_865, 22, varData_849[11]);
                varData_870 = handleAction_77(varData_870, varData_871, varData_872, varData_873, varData_866, 7, varData_849[12]);
                varData_873 = handleAction_77(varData_873, varData_870, varData_871, varData_872, varData_867, 12, varData_849[13]);
                varData_872 = handleAction_77(varData_872, varData_873, varData_870, varData_871, varData_868, 17, varData_849[14]);
                varData_871 = handleAction_77(varData_871, varData_872, varData_873, varData_870, varData_869, 22, varData_849[15]);
                varData_870 = handleAction_78(varData_870, varData_871, varData_872, varData_873, varData_855, 5, varData_849[16]);
                varData_873 = handleAction_78(varData_873, varData_870, varData_871, varData_872, varData_860, 9, varData_849[17]);
                varData_872 = handleAction_78(varData_872, varData_873, varData_870, varData_871, varData_865, 14, varData_849[18]);
                varData_871 = handleAction_78(varData_871, varData_872, varData_873, varData_870, varData_854, 20, varData_849[19]);
                varData_870 = handleAction_78(varData_870, varData_871, varData_872, varData_873, varData_859, 5, varData_849[20]);
                varData_873 = handleAction_78(varData_873, varData_870, varData_871, varData_872, varData_864, 9, varData_849[21]);
                varData_872 = handleAction_78(varData_872, varData_873, varData_870, varData_871, varData_869, 14, varData_849[22]);
                varData_871 = handleAction_78(varData_871, varData_872, varData_873, varData_870, varData_858, 20, varData_849[23]);
                varData_870 = handleAction_78(varData_870, varData_871, varData_872, varData_873, varData_863, 5, varData_849[24]);
                varData_873 = handleAction_78(varData_873, varData_870, varData_871, varData_872, varData_868, 9, varData_849[25]);
                varData_872 = handleAction_78(varData_872, varData_873, varData_870, varData_871, varData_857, 14, varData_849[26]);
                varData_871 = handleAction_78(varData_871, varData_872, varData_873, varData_870, varData_862, 20, varData_849[27]);
                varData_870 = handleAction_78(varData_870, varData_871, varData_872, varData_873, varData_867, 5, varData_849[28]);
                varData_873 = handleAction_78(varData_873, varData_870, varData_871, varData_872, varData_856, 9, varData_849[29]);
                varData_872 = handleAction_78(varData_872, varData_873, varData_870, varData_871, varData_861, 14, varData_849[30]);
                varData_871 = handleAction_78(varData_871, varData_872, varData_873, varData_870, varData_866, 20, varData_849[31]);
                varData_870 = handleAction_79(varData_870, varData_871, varData_872, varData_873, varData_859, 4, varData_849[32]);
                varData_873 = handleAction_79(varData_873, varData_870, varData_871, varData_872, varData_862, 11, varData_849[33]);
                varData_872 = handleAction_79(varData_872, varData_873, varData_870, varData_871, varData_865, 16, varData_849[34]);
                varData_871 = handleAction_79(varData_871, varData_872, varData_873, varData_870, varData_868, 23, varData_849[35]);
                varData_870 = handleAction_79(varData_870, varData_871, varData_872, varData_873, varData_855, 4, varData_849[36]);
                varData_873 = handleAction_79(varData_873, varData_870, varData_871, varData_872, varData_858, 11, varData_849[37]);
                varData_872 = handleAction_79(varData_872, varData_873, varData_870, varData_871, varData_861, 16, varData_849[38]);
                varData_871 = handleAction_79(varData_871, varData_872, varData_873, varData_870, varData_864, 23, varData_849[39]);
                varData_870 = handleAction_79(varData_870, varData_871, varData_872, varData_873, varData_867, 4, varData_849[40]);
                varData_873 = handleAction_79(varData_873, varData_870, varData_871, varData_872, varData_854, 11, varData_849[41]);
                varData_872 = handleAction_79(varData_872, varData_873, varData_870, varData_871, varData_857, 16, varData_849[42]);
                varData_871 = handleAction_79(varData_871, varData_872, varData_873, varData_870, varData_860, 23, varData_849[43]);
                varData_870 = handleAction_79(varData_870, varData_871, varData_872, varData_873, varData_863, 4, varData_849[44]);
                varData_873 = handleAction_79(varData_873, varData_870, varData_871, varData_872, varData_866, 11, varData_849[45]);
                varData_872 = handleAction_79(varData_872, varData_873, varData_870, varData_871, varData_869, 16, varData_849[46]);
                varData_871 = handleAction_79(varData_871, varData_872, varData_873, varData_870, varData_856, 23, varData_849[47]);
                varData_870 = handleAction_80(varData_870, varData_871, varData_872, varData_873, varData_854, 6, varData_849[48]);
                varData_873 = handleAction_80(varData_873, varData_870, varData_871, varData_872, varData_861, 10, varData_849[49]);
                varData_872 = handleAction_80(varData_872, varData_873, varData_870, varData_871, varData_868, 15, varData_849[50]);
                varData_871 = handleAction_80(varData_871, varData_872, varData_873, varData_870, varData_859, 21, varData_849[51]);
                varData_870 = handleAction_80(varData_870, varData_871, varData_872, varData_873, varData_866, 6, varData_849[52]);
                varData_873 = handleAction_80(varData_873, varData_870, varData_871, varData_872, varData_857, 10, varData_849[53]);
                varData_872 = handleAction_80(varData_872, varData_873, varData_870, varData_871, varData_864, 15, varData_849[54]);
                varData_871 = handleAction_80(varData_871, varData_872, varData_873, varData_870, varData_855, 21, varData_849[55]);
                varData_870 = handleAction_80(varData_870, varData_871, varData_872, varData_873, varData_862, 6, varData_849[56]);
                varData_873 = handleAction_80(varData_873, varData_870, varData_871, varData_872, varData_869, 10, varData_849[57]);
                varData_872 = handleAction_80(varData_872, varData_873, varData_870, varData_871, varData_860, 15, varData_849[58]);
                varData_871 = handleAction_80(varData_871, varData_872, varData_873, varData_870, varData_867, 21, varData_849[59]);
                varData_870 = handleAction_80(varData_870, varData_871, varData_872, varData_873, varData_858, 6, varData_849[60]);
                varData_873 = handleAction_80(varData_873, varData_870, varData_871, varData_872, varData_865, 10, varData_849[61]);
                varData_872 = handleAction_80(varData_872, varData_873, varData_870, varData_871, varData_856, 15, varData_849[62]);
                varData_871 = handleAction_80(varData_871, varData_872, varData_873, varData_870, varData_863, 21, varData_849[63]);
                varData_853[0] = varData_853[0] + varData_870 | 0;
                varData_853[1] = varData_853[1] + varData_871 | 0;
                varData_853[2] = varData_853[2] + varData_872 | 0;
                varData_853[3] = varData_853[3] + varData_873 | 0;
              },
              _doFinalize: function() {
                var varData_874 = this._data;
                var varData_875 = varData_874.words;
                var varData_876 = this._nDataBytes * 8;
                var varData_877 = varData_874.sigBytes * 8;
                varData_875[varData_877 >>> 5] |= 128 << 24 - varData_877 % 32;
                var varData_878 = param_1_2.floor(varData_876 / 4294967296);
                var varData_879 = varData_876;
                varData_875[(varData_877 + 64 >>> 9 << 4) + 15] = (varData_878 << 8 | varData_878 >>> 24) & 16711935 | (varData_878 << 24 | varData_878 >>> 8) & -16711936;
                varData_875[(varData_877 + 64 >>> 9 << 4) + 14] = (varData_879 << 8 | varData_879 >>> 24) & 16711935 | (varData_879 << 24 | varData_879 >>> 8) & -16711936;
                varData_874.sigBytes = (varData_875.length + 1) * 4;
                this._process();
                var varData_880 = this._hash;
                var varData_881 = varData_880.words;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  var varData_882 = varData_881[loopIdx];
                  varData_881[loopIdx] = (varData_882 << 8 | varData_882 >>> 24) & 16711935 | (varData_882 << 24 | varData_882 >>> 8) & -16711936;
                }
                return varData_880;
              },
              clone: function() {
                var varData_883 = varData_847.clone.call(this);
                varData_883._hash = this._hash.clone();
                return varData_883;
              }
            });
            function handleAction_77(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_884 = param_1_3 + (param_2_1 & param_3 | ~param_2_1 & param_4) + param_5 + param_7;
              return (varData_884 << param_6 | varData_884 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_78(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_885 = param_1_3 + (param_2_1 & param_4 | param_3 & ~param_4) + param_5 + param_7;
              return (varData_885 << param_6 | varData_885 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_79(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_886 = param_1_3 + (param_2_1 ^ param_3 ^ param_4) + param_5 + param_7;
              return (varData_886 << param_6 | varData_886 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_80(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_887 = param_1_3 + (param_3 ^ (param_2_1 | ~param_4)) + param_5 + param_7;
              return (varData_887 << param_6 | varData_887 >>> 32 - param_6) + param_2_1;
            }
            varData_844.MD5 = varData_847._createHelper(varData_850);
            varData_844.HmacMD5 = varData_847._createHmacHelper(varData_850);
          })(Math);
          return param_1_1.MD5;
        });
      }
    });
    var varData_888 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_889 = param_1_1;
            var varData_890 = varData_889.lib;
            var varData_891 = varData_890.WordArray;
            var varData_892 = varData_890.Hasher;
            var varData_893 = varData_889.algo;
            var varData_894 = [];
            var varData_895 = varData_893.SHA1 = varData_892.extend({
              _doReset: function() {
                this._hash = new varData_891.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_896 = this._hash.words;
                var varData_897 = varData_896[0];
                var varData_898 = varData_896[1];
                var varData_899 = varData_896[2];
                var varData_900 = varData_896[3];
                var varData_901 = varData_896[4];
                for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                  if (loopIdx < 16) {
                    varData_894[loopIdx] = param_1_2[param_2_1 + loopIdx] | 0;
                  } else {
                    var varData_902 = varData_894[loopIdx - 3] ^ varData_894[loopIdx - 8] ^ varData_894[loopIdx - 14] ^ varData_894[loopIdx - 16];
                    varData_894[loopIdx] = varData_902 << 1 | varData_902 >>> 31;
                  }
                  var varData_903 = (varData_897 << 5 | varData_897 >>> 27) + varData_901 + varData_894[loopIdx];
                  if (loopIdx < 20) {
                    varData_903 += (varData_898 & varData_899 | ~varData_898 & varData_900) + 1518500249;
                  } else if (loopIdx < 40) {
                    varData_903 += (varData_898 ^ varData_899 ^ varData_900) + 1859775393;
                  } else if (loopIdx < 60) {
                    varData_903 += (varData_898 & varData_899 | varData_898 & varData_900 | varData_899 & varData_900) - 1894007588;
                  } else {
                    varData_903 += (varData_898 ^ varData_899 ^ varData_900) - 899497514;
                  }
                  varData_901 = varData_900;
                  varData_900 = varData_899;
                  varData_899 = varData_898 << 30 | varData_898 >>> 2;
                  varData_898 = varData_897;
                  varData_897 = varData_903;
                }
                varData_896[0] = varData_896[0] + varData_897 | 0;
                varData_896[1] = varData_896[1] + varData_898 | 0;
                varData_896[2] = varData_896[2] + varData_899 | 0;
                varData_896[3] = varData_896[3] + varData_900 | 0;
                varData_896[4] = varData_896[4] + varData_901 | 0;
              },
              _doFinalize: function() {
                var varData_904 = this._data;
                var varData_905 = varData_904.words;
                var varData_906 = this._nDataBytes * 8;
                var varData_907 = varData_904.sigBytes * 8;
                varData_905[varData_907 >>> 5] |= 128 << 24 - varData_907 % 32;
                varData_905[(varData_907 + 64 >>> 9 << 4) + 14] = Math.floor(varData_906 / 4294967296);
                varData_905[(varData_907 + 64 >>> 9 << 4) + 15] = varData_906;
                varData_904.sigBytes = varData_905.length * 4;
                this._process();
                return this._hash;
              },
              clone: function() {
                var varData_908 = varData_892.clone.call(this);
                varData_908._hash = this._hash.clone();
                return varData_908;
              }
            });
            varData_889.SHA1 = varData_892._createHelper(varData_895);
            varData_889.HmacSHA1 = varData_892._createHmacHelper(varData_895);
          })();
          return param_1_1.SHA1;
        });
      }
    });
    var varData_909 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_910 = param_1_1;
            var varData_911 = varData_910.lib;
            var varData_912 = varData_911.WordArray;
            var varData_913 = varData_911.Hasher;
            var varData_914 = varData_910.algo;
            var varData_915 = [];
            var varData_916 = [];
            (function() {
              function handleAction_81(param_1_3) {
                var varData_917 = param_1_2.sqrt(param_1_3);
                for (var loopIdx = 2; loopIdx <= varData_917; loopIdx++) {
                  if (!(param_1_3 % loopIdx)) {
                    return false;
                  }
                }
                return true;
              }
              function handleAction_82(param_1_3) {
                return (param_1_3 - (param_1_3 | 0)) * 4294967296 | 0;
              }
              var varData_918 = 2;
              var varData_919 = 0;
              while (varData_919 < 64) {
                if (handleAction_81(varData_918)) {
                  if (varData_919 < 8) {
                    varData_915[varData_919] = handleAction_82(param_1_2.pow(varData_918, 1 / 2));
                  }
                  varData_916[varData_919] = handleAction_82(param_1_2.pow(varData_918, 1 / 3));
                  varData_919++;
                }
                varData_918++;
              }
            })();
            var varData_920 = [];
            var varData_921 = varData_914.SHA256 = varData_913.extend({
              _doReset: function() {
                this._hash = new varData_912.init(varData_915.slice(0));
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                var varData_922 = this._hash.words;
                var varData_923 = varData_922[0];
                var varData_924 = varData_922[1];
                var varData_925 = varData_922[2];
                var varData_926 = varData_922[3];
                var varData_927 = varData_922[4];
                var varData_928 = varData_922[5];
                var varData_929 = varData_922[6];
                var varData_930 = varData_922[7];
                for (var loopIdx = 0; loopIdx < 64; loopIdx++) {
                  if (loopIdx < 16) {
                    varData_920[loopIdx] = param_1_3[param_2_1 + loopIdx] | 0;
                  } else {
                    var varData_931 = varData_920[loopIdx - 15];
                    var varData_932 = (varData_931 << 25 | varData_931 >>> 7) ^ (varData_931 << 14 | varData_931 >>> 18) ^ varData_931 >>> 3;
                    var varData_933 = varData_920[loopIdx - 2];
                    var varData_934 = (varData_933 << 15 | varData_933 >>> 17) ^ (varData_933 << 13 | varData_933 >>> 19) ^ varData_933 >>> 10;
                    varData_920[loopIdx] = varData_932 + varData_920[loopIdx - 7] + varData_934 + varData_920[loopIdx - 16];
                  }
                  var varData_935 = varData_927 & varData_928 ^ ~varData_927 & varData_929;
                  var varData_936 = varData_923 & varData_924 ^ varData_923 & varData_925 ^ varData_924 & varData_925;
                  var varData_937 = (varData_923 << 30 | varData_923 >>> 2) ^ (varData_923 << 19 | varData_923 >>> 13) ^ (varData_923 << 10 | varData_923 >>> 22);
                  var varData_938 = (varData_927 << 26 | varData_927 >>> 6) ^ (varData_927 << 21 | varData_927 >>> 11) ^ (varData_927 << 7 | varData_927 >>> 25);
                  var varData_939 = varData_930 + varData_938 + varData_935 + varData_916[loopIdx] + varData_920[loopIdx];
                  var varData_940 = varData_937 + varData_936;
                  varData_930 = varData_929;
                  varData_929 = varData_928;
                  varData_928 = varData_927;
                  varData_927 = varData_926 + varData_939 | 0;
                  varData_926 = varData_925;
                  varData_925 = varData_924;
                  varData_924 = varData_923;
                  varData_923 = varData_939 + varData_940 | 0;
                }
                varData_922[0] = varData_922[0] + varData_923 | 0;
                varData_922[1] = varData_922[1] + varData_924 | 0;
                varData_922[2] = varData_922[2] + varData_925 | 0;
                varData_922[3] = varData_922[3] + varData_926 | 0;
                varData_922[4] = varData_922[4] + varData_927 | 0;
                varData_922[5] = varData_922[5] + varData_928 | 0;
                varData_922[6] = varData_922[6] + varData_929 | 0;
                varData_922[7] = varData_922[7] + varData_930 | 0;
              },
              _doFinalize: function() {
                var varData_941 = this._data;
                var varData_942 = varData_941.words;
                var varData_943 = this._nDataBytes * 8;
                var varData_944 = varData_941.sigBytes * 8;
                varData_942[varData_944 >>> 5] |= 128 << 24 - varData_944 % 32;
                varData_942[(varData_944 + 64 >>> 9 << 4) + 14] = param_1_2.floor(varData_943 / 4294967296);
                varData_942[(varData_944 + 64 >>> 9 << 4) + 15] = varData_943;
                varData_941.sigBytes = varData_942.length * 4;
                this._process();
                return this._hash;
              },
              clone: function() {
                var varData_945 = varData_913.clone.call(this);
                varData_945._hash = this._hash.clone();
                return varData_945;
              }
            });
            varData_910.SHA256 = varData_913._createHelper(varData_921);
            varData_910.HmacSHA256 = varData_913._createHmacHelper(varData_921);
          })(Math);
          return param_1_1.SHA256;
        });
      }
    });
    var varData_946 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_909());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha256"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_947 = param_1_1;
            var varData_948 = varData_947.lib;
            var varData_949 = varData_948.WordArray;
            var varData_950 = varData_947.algo;
            var varData_951 = varData_950.SHA256;
            var varData_952 = varData_950.SHA224 = varData_951.extend({
              _doReset: function() {
                this._hash = new varData_949.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function() {
                var varData_953 = varData_951._doFinalize.call(this);
                varData_953.sigBytes -= 4;
                return varData_953;
              }
            });
            varData_947.SHA224 = varData_951._createHelper(varData_952);
            varData_947.HmacSHA224 = varData_951._createHmacHelper(varData_952);
          })();
          return param_1_1.SHA224;
        });
      }
    });
    var varData_954 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_777());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_955 = param_1_1;
            var varData_956 = varData_955.lib;
            var varData_957 = varData_956.Hasher;
            var varData_958 = varData_955.x64;
            var varData_959 = varData_958.Word;
            var varData_960 = varData_958.WordArray;
            var varData_961 = varData_955.algo;
            function handleAction_83() {
              return varData_959.create.apply(varData_959, arguments);
            }
            var varData_962 = [handleAction_83(1116352408, 3609767458), handleAction_83(1899447441, 602891725), handleAction_83(3049323471, 3964484399), handleAction_83(3921009573, 2173295548), handleAction_83(961987163, 4081628472), handleAction_83(1508970993, 3053834265), handleAction_83(2453635748, 2937671579), handleAction_83(2870763221, 3664609560), handleAction_83(3624381080, 2734883394), handleAction_83(310598401, 1164996542), handleAction_83(607225278, 1323610764), handleAction_83(1426881987, 3590304994), handleAction_83(1925078388, 4068182383), handleAction_83(2162078206, 991336113), handleAction_83(2614888103, 633803317), handleAction_83(3248222580, 3479774868), handleAction_83(3835390401, 2666613458), handleAction_83(4022224774, 944711139), handleAction_83(264347078, 2341262773), handleAction_83(604807628, 2007800933), handleAction_83(770255983, 1495990901), handleAction_83(1249150122, 1856431235), handleAction_83(1555081692, 3175218132), handleAction_83(1996064986, 2198950837), handleAction_83(2554220882, 3999719339), handleAction_83(2821834349, 766784016), handleAction_83(2952996808, 2566594879), handleAction_83(3210313671, 3203337956), handleAction_83(3336571891, 1034457026), handleAction_83(3584528711, 2466948901), handleAction_83(113926993, 3758326383), handleAction_83(338241895, 168717936), handleAction_83(666307205, 1188179964), handleAction_83(773529912, 1546045734), handleAction_83(1294757372, 1522805485), handleAction_83(1396182291, 2643833823), handleAction_83(1695183700, 2343527390), handleAction_83(1986661051, 1014477480), handleAction_83(2177026350, 1206759142), handleAction_83(2456956037, 344077627), handleAction_83(2730485921, 1290863460), handleAction_83(2820302411, 3158454273), handleAction_83(3259730800, 3505952657), handleAction_83(3345764771, 106217008), handleAction_83(3516065817, 3606008344), handleAction_83(3600352804, 1432725776), handleAction_83(4094571909, 1467031594), handleAction_83(275423344, 851169720), handleAction_83(430227734, 3100823752), handleAction_83(506948616, 1363258195), handleAction_83(659060556, 3750685593), handleAction_83(883997877, 3785050280), handleAction_83(958139571, 3318307427), handleAction_83(1322822218, 3812723403), handleAction_83(1537002063, 2003034995), handleAction_83(1747873779, 3602036899), handleAction_83(1955562222, 1575990012), handleAction_83(2024104815, 1125592928), handleAction_83(2227730452, 2716904306), handleAction_83(2361852424, 442776044), handleAction_83(2428436474, 593698344), handleAction_83(2756734187, 3733110249), handleAction_83(3204031479, 2999351573), handleAction_83(3329325298, 3815920427), handleAction_83(3391569614, 3928383900), handleAction_83(3515267271, 566280711), handleAction_83(3940187606, 3454069534), handleAction_83(4118630271, 4000239992), handleAction_83(116418474, 1914138554), handleAction_83(174292421, 2731055270), handleAction_83(289380356, 3203993006), handleAction_83(460393269, 320620315), handleAction_83(685471733, 587496836), handleAction_83(852142971, 1086792851), handleAction_83(1017036298, 365543100), handleAction_83(1126000580, 2618297676), handleAction_83(1288033470, 3409855158), handleAction_83(1501505948, 4234509866), handleAction_83(1607167915, 987167468), handleAction_83(1816402316, 1246189591)];
            var varData_963 = [];
            (function() {
              for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                varData_963[loopIdx] = handleAction_83();
              }
            })();
            var varData_964 = varData_961.SHA512 = varData_957.extend({
              _doReset: function() {
                this._hash = new varData_960.init([new varData_959.init(1779033703, 4089235720), new varData_959.init(3144134277, 2227873595), new varData_959.init(1013904242, 4271175723), new varData_959.init(2773480762, 1595750129), new varData_959.init(1359893119, 2917565137), new varData_959.init(2600822924, 725511199), new varData_959.init(528734635, 4215389547), new varData_959.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_965 = this._hash.words;
                var varData_966 = varData_965[0];
                var varData_967 = varData_965[1];
                var varData_968 = varData_965[2];
                var varData_969 = varData_965[3];
                var varData_970 = varData_965[4];
                var varData_971 = varData_965[5];
                var varData_972 = varData_965[6];
                var varData_973 = varData_965[7];
                var varData_974 = varData_966.high;
                var varData_975 = varData_966.low;
                var varData_976 = varData_967.high;
                var varData_977 = varData_967.low;
                var varData_978 = varData_968.high;
                var varData_979 = varData_968.low;
                var varData_980 = varData_969.high;
                var varData_981 = varData_969.low;
                var varData_982 = varData_970.high;
                var varData_983 = varData_970.low;
                var varData_984 = varData_971.high;
                var varData_985 = varData_971.low;
                var varData_986 = varData_972.high;
                var varData_987 = varData_972.low;
                var varData_988 = varData_973.high;
                var varData_989 = varData_973.low;
                var varData_990 = varData_974;
                var varData_991 = varData_975;
                var varData_992 = varData_976;
                var varData_993 = varData_977;
                var varData_994 = varData_978;
                var varData_995 = varData_979;
                var varData_996 = varData_980;
                var varData_997 = varData_981;
                var varData_998 = varData_982;
                var varData_999 = varData_983;
                var varData_1000 = varData_984;
                var varData_1001 = varData_985;
                var varData_1002 = varData_986;
                var varData_1003 = varData_987;
                var varData_1004 = varData_988;
                var varData_1005 = varData_989;
                for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                  var varData_1006 = varData_963[loopIdx];
                  if (loopIdx < 16) {
                    var varData_1007 = varData_1006.high = param_1_2[param_2_1 + loopIdx * 2] | 0;
                    var varData_1008 = varData_1006.low = param_1_2[param_2_1 + loopIdx * 2 + 1] | 0;
                  } else {
                    var varData_1009 = varData_963[loopIdx - 15];
                    var varData_1010 = varData_1009.high;
                    var varData_1011 = varData_1009.low;
                    var varData_1012 = (varData_1010 >>> 1 | varData_1011 << 31) ^ (varData_1010 >>> 8 | varData_1011 << 24) ^ varData_1010 >>> 7;
                    var varData_1013 = (varData_1011 >>> 1 | varData_1010 << 31) ^ (varData_1011 >>> 8 | varData_1010 << 24) ^ (varData_1011 >>> 7 | varData_1010 << 25);
                    var varData_1014 = varData_963[loopIdx - 2];
                    var varData_1015 = varData_1014.high;
                    var varData_1016 = varData_1014.low;
                    var varData_1017 = (varData_1015 >>> 19 | varData_1016 << 13) ^ (varData_1015 << 3 | varData_1016 >>> 29) ^ varData_1015 >>> 6;
                    var varData_1018 = (varData_1016 >>> 19 | varData_1015 << 13) ^ (varData_1016 << 3 | varData_1015 >>> 29) ^ (varData_1016 >>> 6 | varData_1015 << 26);
                    var varData_1019 = varData_963[loopIdx - 7];
                    var varData_1020 = varData_1019.high;
                    var varData_1021 = varData_1019.low;
                    var varData_1022 = varData_963[loopIdx - 16];
                    var varData_1023 = varData_1022.high;
                    var varData_1024 = varData_1022.low;
                    var varData_1008 = varData_1013 + varData_1021;
                    var varData_1007 = varData_1012 + varData_1020 + (varData_1008 >>> 0 < varData_1013 >>> 0 ? 1 : 0);
                    var varData_1008 = varData_1008 + varData_1018;
                    var varData_1007 = varData_1007 + varData_1017 + (varData_1008 >>> 0 < varData_1018 >>> 0 ? 1 : 0);
                    var varData_1008 = varData_1008 + varData_1024;
                    var varData_1007 = varData_1007 + varData_1023 + (varData_1008 >>> 0 < varData_1024 >>> 0 ? 1 : 0);
                    varData_1006.high = varData_1007;
                    varData_1006.low = varData_1008;
                  }
                  var varData_1025 = varData_998 & varData_1000 ^ ~varData_998 & varData_1002;
                  var varData_1026 = varData_999 & varData_1001 ^ ~varData_999 & varData_1003;
                  var varData_1027 = varData_990 & varData_992 ^ varData_990 & varData_994 ^ varData_992 & varData_994;
                  var varData_1028 = varData_991 & varData_993 ^ varData_991 & varData_995 ^ varData_993 & varData_995;
                  var varData_1029 = (varData_990 >>> 28 | varData_991 << 4) ^ (varData_990 << 30 | varData_991 >>> 2) ^ (varData_990 << 25 | varData_991 >>> 7);
                  var varData_1030 = (varData_991 >>> 28 | varData_990 << 4) ^ (varData_991 << 30 | varData_990 >>> 2) ^ (varData_991 << 25 | varData_990 >>> 7);
                  var varData_1031 = (varData_998 >>> 14 | varData_999 << 18) ^ (varData_998 >>> 18 | varData_999 << 14) ^ (varData_998 << 23 | varData_999 >>> 9);
                  var varData_1032 = (varData_999 >>> 14 | varData_998 << 18) ^ (varData_999 >>> 18 | varData_998 << 14) ^ (varData_999 << 23 | varData_998 >>> 9);
                  var varData_1033 = varData_962[loopIdx];
                  var varData_1034 = varData_1033.high;
                  var varData_1035 = varData_1033.low;
                  var varData_1036 = varData_1005 + varData_1032;
                  var varData_1037 = varData_1004 + varData_1031 + (varData_1036 >>> 0 < varData_1005 >>> 0 ? 1 : 0);
                  var varData_1036 = varData_1036 + varData_1026;
                  var varData_1037 = varData_1037 + varData_1025 + (varData_1036 >>> 0 < varData_1026 >>> 0 ? 1 : 0);
                  var varData_1036 = varData_1036 + varData_1035;
                  var varData_1037 = varData_1037 + varData_1034 + (varData_1036 >>> 0 < varData_1035 >>> 0 ? 1 : 0);
                  var varData_1036 = varData_1036 + varData_1008;
                  var varData_1037 = varData_1037 + varData_1007 + (varData_1036 >>> 0 < varData_1008 >>> 0 ? 1 : 0);
                  var varData_1038 = varData_1030 + varData_1028;
                  var varData_1039 = varData_1029 + varData_1027 + (varData_1038 >>> 0 < varData_1030 >>> 0 ? 1 : 0);
                  varData_1004 = varData_1002;
                  varData_1005 = varData_1003;
                  varData_1002 = varData_1000;
                  varData_1003 = varData_1001;
                  varData_1000 = varData_998;
                  varData_1001 = varData_999;
                  varData_999 = varData_997 + varData_1036 | 0;
                  varData_998 = varData_996 + varData_1037 + (varData_999 >>> 0 < varData_997 >>> 0 ? 1 : 0) | 0;
                  varData_996 = varData_994;
                  varData_997 = varData_995;
                  varData_994 = varData_992;
                  varData_995 = varData_993;
                  varData_992 = varData_990;
                  varData_993 = varData_991;
                  varData_991 = varData_1036 + varData_1038 | 0;
                  varData_990 = varData_1037 + varData_1039 + (varData_991 >>> 0 < varData_1036 >>> 0 ? 1 : 0) | 0;
                }
                varData_975 = varData_966.low = varData_975 + varData_991;
                varData_966.high = varData_974 + varData_990 + (varData_975 >>> 0 < varData_991 >>> 0 ? 1 : 0);
                varData_977 = varData_967.low = varData_977 + varData_993;
                varData_967.high = varData_976 + varData_992 + (varData_977 >>> 0 < varData_993 >>> 0 ? 1 : 0);
                varData_979 = varData_968.low = varData_979 + varData_995;
                varData_968.high = varData_978 + varData_994 + (varData_979 >>> 0 < varData_995 >>> 0 ? 1 : 0);
                varData_981 = varData_969.low = varData_981 + varData_997;
                varData_969.high = varData_980 + varData_996 + (varData_981 >>> 0 < varData_997 >>> 0 ? 1 : 0);
                varData_983 = varData_970.low = varData_983 + varData_999;
                varData_970.high = varData_982 + varData_998 + (varData_983 >>> 0 < varData_999 >>> 0 ? 1 : 0);
                varData_985 = varData_971.low = varData_985 + varData_1001;
                varData_971.high = varData_984 + varData_1000 + (varData_985 >>> 0 < varData_1001 >>> 0 ? 1 : 0);
                varData_987 = varData_972.low = varData_987 + varData_1003;
                varData_972.high = varData_986 + varData_1002 + (varData_987 >>> 0 < varData_1003 >>> 0 ? 1 : 0);
                varData_989 = varData_973.low = varData_989 + varData_1005;
                varData_973.high = varData_988 + varData_1004 + (varData_989 >>> 0 < varData_1005 >>> 0 ? 1 : 0);
              },
              _doFinalize: function() {
                var varData_1040 = this._data;
                var varData_1041 = varData_1040.words;
                var varData_1042 = this._nDataBytes * 8;
                var varData_1043 = varData_1040.sigBytes * 8;
                varData_1041[varData_1043 >>> 5] |= 128 << 24 - varData_1043 % 32;
                varData_1041[(varData_1043 + 128 >>> 10 << 5) + 30] = Math.floor(varData_1042 / 4294967296);
                varData_1041[(varData_1043 + 128 >>> 10 << 5) + 31] = varData_1042;
                varData_1040.sigBytes = varData_1041.length * 4;
                this._process();
                var varData_1044 = this._hash.toX32();
                return varData_1044;
              },
              clone: function() {
                var varData_1045 = varData_957.clone.call(this);
                varData_1045._hash = this._hash.clone();
                return varData_1045;
              },
              blockSize: 32
            });
            varData_955.SHA512 = varData_957._createHelper(varData_964);
            varData_955.HmacSHA512 = varData_957._createHmacHelper(varData_964);
          })();
          return param_1_1.SHA512;
        });
      }
    });
    var varData_1046 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_777(), varData_954());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./sha512"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1047 = param_1_1;
            var varData_1048 = varData_1047.x64;
            var varData_1049 = varData_1048.Word;
            var varData_1050 = varData_1048.WordArray;
            var varData_1051 = varData_1047.algo;
            var varData_1052 = varData_1051.SHA512;
            var varData_1053 = varData_1051.SHA384 = varData_1052.extend({
              _doReset: function() {
                this._hash = new varData_1050.init([new varData_1049.init(3418070365, 3238371032), new varData_1049.init(1654270250, 914150663), new varData_1049.init(2438529370, 812702999), new varData_1049.init(355462360, 4144912697), new varData_1049.init(1731405415, 4290775857), new varData_1049.init(2394180231, 1750603025), new varData_1049.init(3675008525, 1694076839), new varData_1049.init(1203062813, 3204075428)]);
              },
              _doFinalize: function() {
                var varData_1054 = varData_1052._doFinalize.call(this);
                varData_1054.sigBytes -= 16;
                return varData_1054;
              }
            });
            varData_1047.SHA384 = varData_1052._createHelper(varData_1053);
            varData_1047.HmacSHA384 = varData_1052._createHmacHelper(varData_1053);
          })();
          return param_1_1.SHA384;
        });
      }
    });
    var varData_1055 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_777());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1056 = param_1_1;
            var varData_1057 = varData_1056.lib;
            var varData_1058 = varData_1057.WordArray;
            var varData_1059 = varData_1057.Hasher;
            var varData_1060 = varData_1056.x64;
            var varData_1061 = varData_1060.Word;
            var varData_1062 = varData_1056.algo;
            var varData_1063 = [];
            var varData_1064 = [];
            var varData_1065 = [];
            (function() {
              var varData_1066 = 1;
              var varData_1067 = 0;
              for (var loopIdx = 0; loopIdx < 24; loopIdx++) {
                varData_1063[varData_1066 + varData_1067 * 5] = (loopIdx + 1) * (loopIdx + 2) / 2 % 64;
                var varData_1068 = varData_1067 % 5;
                var varData_1069 = (varData_1066 * 2 + varData_1067 * 3) % 5;
                varData_1066 = varData_1068;
                varData_1067 = varData_1069;
              }
              for (var varData_1066 = 0; varData_1066 < 5; varData_1066++) {
                for (var varData_1067 = 0; varData_1067 < 5; varData_1067++) {
                  varData_1064[varData_1066 + varData_1067 * 5] = varData_1067 + (varData_1066 * 2 + varData_1067 * 3) % 5 * 5;
                }
              }
              var varData_1070 = 1;
              for (var loopIdx_1 = 0; loopIdx_1 < 24; loopIdx_1++) {
                var varData_1071 = 0;
                var varData_1072 = 0;
                for (var loopIdx_2 = 0; loopIdx_2 < 7; loopIdx_2++) {
                  if (varData_1070 & 1) {
                    var varData_1073 = (1 << loopIdx_2) - 1;
                    if (varData_1073 < 32) {
                      varData_1072 ^= 1 << varData_1073;
                    } else {
                      varData_1071 ^= 1 << varData_1073 - 32;
                    }
                  }
                  if (varData_1070 & 128) {
                    varData_1070 = varData_1070 << 1 ^ 113;
                  } else {
                    varData_1070 <<= 1;
                  }
                }
                varData_1065[loopIdx_1] = varData_1061.create(varData_1071, varData_1072);
              }
            })();
            var varData_1074 = [];
            (function() {
              for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                varData_1074[loopIdx] = varData_1061.create();
              }
            })();
            var varData_1075 = varData_1062.SHA3 = varData_1059.extend({
              cfg: varData_1059.cfg.extend({
                outputLength: 512
              }),
              _doReset: function() {
                var varData_1076 = this._state = [];
                for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                  varData_1076[loopIdx] = new varData_1061.init();
                }
                this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                var varData_1077 = this._state;
                var varData_1078 = this.blockSize / 2;
                for (var loopIdx = 0; loopIdx < varData_1078; loopIdx++) {
                  var varData_1079 = param_1_3[param_2_1 + loopIdx * 2];
                  var varData_1080 = param_1_3[param_2_1 + loopIdx * 2 + 1];
                  varData_1079 = (varData_1079 << 8 | varData_1079 >>> 24) & 16711935 | (varData_1079 << 24 | varData_1079 >>> 8) & -16711936;
                  varData_1080 = (varData_1080 << 8 | varData_1080 >>> 24) & 16711935 | (varData_1080 << 24 | varData_1080 >>> 8) & -16711936;
                  var varData_1081 = varData_1077[loopIdx];
                  varData_1081.high ^= varData_1080;
                  varData_1081.low ^= varData_1079;
                }
                for (var loopIdx_1 = 0; loopIdx_1 < 24; loopIdx_1++) {
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    var varData_1082 = 0;
                    var varData_1083 = 0;
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var varData_1081 = varData_1077[loopIdx_2 + loopIdx_3 * 5];
                      varData_1082 ^= varData_1081.high;
                      varData_1083 ^= varData_1081.low;
                    }
                    var varData_1084 = varData_1074[loopIdx_2];
                    varData_1084.high = varData_1082;
                    varData_1084.low = varData_1083;
                  }
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    var varData_1085 = varData_1074[(loopIdx_2 + 4) % 5];
                    var varData_1086 = varData_1074[(loopIdx_2 + 1) % 5];
                    var varData_1087 = varData_1086.high;
                    var varData_1088 = varData_1086.low;
                    var varData_1082 = varData_1085.high ^ (varData_1087 << 1 | varData_1088 >>> 31);
                    var varData_1083 = varData_1085.low ^ (varData_1088 << 1 | varData_1087 >>> 31);
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var varData_1081 = varData_1077[loopIdx_2 + loopIdx_3 * 5];
                      varData_1081.high ^= varData_1082;
                      varData_1081.low ^= varData_1083;
                    }
                  }
                  for (var loopIdx_4 = 1; loopIdx_4 < 25; loopIdx_4++) {
                    var varData_1081 = varData_1077[loopIdx_4];
                    var varData_1089 = varData_1081.high;
                    var varData_1090 = varData_1081.low;
                    var varData_1091 = varData_1063[loopIdx_4];
                    if (varData_1091 < 32) {
                      var varData_1082 = varData_1089 << varData_1091 | varData_1090 >>> 32 - varData_1091;
                      var varData_1083 = varData_1090 << varData_1091 | varData_1089 >>> 32 - varData_1091;
                    } else {
                      var varData_1082 = varData_1090 << varData_1091 - 32 | varData_1089 >>> 64 - varData_1091;
                      var varData_1083 = varData_1089 << varData_1091 - 32 | varData_1090 >>> 64 - varData_1091;
                    }
                    var varData_1092 = varData_1074[varData_1064[loopIdx_4]];
                    varData_1092.high = varData_1082;
                    varData_1092.low = varData_1083;
                  }
                  var varData_1093 = varData_1074[0];
                  var varData_1094 = varData_1077[0];
                  varData_1093.high = varData_1094.high;
                  varData_1093.low = varData_1094.low;
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var loopIdx_4 = loopIdx_2 + loopIdx_3 * 5;
                      var varData_1081 = varData_1077[loopIdx_4];
                      var varData_1095 = varData_1074[loopIdx_4];
                      var varData_1096 = varData_1074[(loopIdx_2 + 1) % 5 + loopIdx_3 * 5];
                      var varData_1097 = varData_1074[(loopIdx_2 + 2) % 5 + loopIdx_3 * 5];
                      varData_1081.high = varData_1095.high ^ ~varData_1096.high & varData_1097.high;
                      varData_1081.low = varData_1095.low ^ ~varData_1096.low & varData_1097.low;
                    }
                  }
                  var varData_1081 = varData_1077[0];
                  var varData_1098 = varData_1065[loopIdx_1];
                  varData_1081.high ^= varData_1098.high;
                  varData_1081.low ^= varData_1098.low;
                  ;
                }
              },
              _doFinalize: function() {
                var varData_1099 = this._data;
                var varData_1100 = varData_1099.words;
                var varData_1101 = this._nDataBytes * 8;
                var varData_1102 = varData_1099.sigBytes * 8;
                var varData_1103 = this.blockSize * 32;
                varData_1100[varData_1102 >>> 5] |= 1 << 24 - varData_1102 % 32;
                varData_1100[(param_1_2.ceil((varData_1102 + 1) / varData_1103) * varData_1103 >>> 5) - 1] |= 128;
                varData_1099.sigBytes = varData_1100.length * 4;
                this._process();
                var varData_1104 = this._state;
                var varData_1105 = this.cfg.outputLength / 8;
                var varData_1106 = varData_1105 / 8;
                var varData_1107 = [];
                for (var loopIdx = 0; loopIdx < varData_1106; loopIdx++) {
                  var varData_1108 = varData_1104[loopIdx];
                  var varData_1109 = varData_1108.high;
                  var varData_1110 = varData_1108.low;
                  varData_1109 = (varData_1109 << 8 | varData_1109 >>> 24) & 16711935 | (varData_1109 << 24 | varData_1109 >>> 8) & -16711936;
                  varData_1110 = (varData_1110 << 8 | varData_1110 >>> 24) & 16711935 | (varData_1110 << 24 | varData_1110 >>> 8) & -16711936;
                  varData_1107.push(varData_1110);
                  varData_1107.push(varData_1109);
                }
                return new varData_1058.init(varData_1107, varData_1105);
              },
              clone: function() {
                var varData_1111 = varData_1059.clone.call(this);
                var varData_1112 = varData_1111._state = this._state.slice(0);
                for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                  varData_1112[loopIdx] = varData_1112[loopIdx].clone();
                }
                return varData_1111;
              }
            });
            varData_1056.SHA3 = varData_1059._createHelper(varData_1075);
            varData_1056.HmacSHA3 = varData_1059._createHmacHelper(varData_1075);
          })(Math);
          return param_1_1.SHA3;
        });
      }
    });
    var varData_1113 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1114 = param_1_1;
            var varData_1115 = varData_1114.lib;
            var varData_1116 = varData_1115.WordArray;
            var varData_1117 = varData_1115.Hasher;
            var varData_1118 = varData_1114.algo;
            var varData_1119 = varData_1116.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
            var varData_1120 = varData_1116.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
            var varData_1121 = varData_1116.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
            var varData_1122 = varData_1116.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
            var varData_1123 = varData_1116.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
            var varData_1124 = varData_1116.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            var varData_1125 = varData_1118.RIPEMD160 = varData_1117.extend({
              _doReset: function() {
                this._hash = varData_1116.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_1126 = param_2_1 + loopIdx;
                  var varData_1127 = param_1_3[varData_1126];
                  param_1_3[varData_1126] = (varData_1127 << 8 | varData_1127 >>> 24) & 16711935 | (varData_1127 << 24 | varData_1127 >>> 8) & -16711936;
                }
                var varData_1128 = this._hash.words;
                var varData_1129 = varData_1123.words;
                var varData_1130 = varData_1124.words;
                var varData_1131 = varData_1119.words;
                var varData_1132 = varData_1120.words;
                var varData_1133 = varData_1121.words;
                var varData_1134 = varData_1122.words;
                var varData_1135;
                var varData_1136;
                var varData_1137;
                var varData_1138;
                var varData_1139;
                var varData_1140;
                var varData_1141;
                var varData_1142;
                var varData_1143;
                var varData_1144;
                varData_1140 = varData_1135 = varData_1128[0];
                varData_1141 = varData_1136 = varData_1128[1];
                varData_1142 = varData_1137 = varData_1128[2];
                varData_1143 = varData_1138 = varData_1128[3];
                varData_1144 = varData_1139 = varData_1128[4];
                var varData_1145;
                for (var loopIdx = 0; loopIdx < 80; loopIdx += 1) {
                  varData_1145 = varData_1135 + param_1_3[param_2_1 + varData_1131[loopIdx]] | 0;
                  if (loopIdx < 16) {
                    varData_1145 += handleAction_84(varData_1136, varData_1137, varData_1138) + varData_1129[0];
                  } else if (loopIdx < 32) {
                    varData_1145 += handleAction_85(varData_1136, varData_1137, varData_1138) + varData_1129[1];
                  } else if (loopIdx < 48) {
                    varData_1145 += handleAction_86(varData_1136, varData_1137, varData_1138) + varData_1129[2];
                  } else if (loopIdx < 64) {
                    varData_1145 += handleAction_87(varData_1136, varData_1137, varData_1138) + varData_1129[3];
                  } else {
                    varData_1145 += handleAction_88(varData_1136, varData_1137, varData_1138) + varData_1129[4];
                  }
                  varData_1145 = varData_1145 | 0;
                  varData_1145 = handleAction_89(varData_1145, varData_1133[loopIdx]);
                  varData_1145 = varData_1145 + varData_1139 | 0;
                  varData_1135 = varData_1139;
                  varData_1139 = varData_1138;
                  varData_1138 = handleAction_89(varData_1137, 10);
                  varData_1137 = varData_1136;
                  varData_1136 = varData_1145;
                  varData_1145 = varData_1140 + param_1_3[param_2_1 + varData_1132[loopIdx]] | 0;
                  if (loopIdx < 16) {
                    varData_1145 += handleAction_88(varData_1141, varData_1142, varData_1143) + varData_1130[0];
                  } else if (loopIdx < 32) {
                    varData_1145 += handleAction_87(varData_1141, varData_1142, varData_1143) + varData_1130[1];
                  } else if (loopIdx < 48) {
                    varData_1145 += handleAction_86(varData_1141, varData_1142, varData_1143) + varData_1130[2];
                  } else if (loopIdx < 64) {
                    varData_1145 += handleAction_85(varData_1141, varData_1142, varData_1143) + varData_1130[3];
                  } else {
                    varData_1145 += handleAction_84(varData_1141, varData_1142, varData_1143) + varData_1130[4];
                  }
                  varData_1145 = varData_1145 | 0;
                  varData_1145 = handleAction_89(varData_1145, varData_1134[loopIdx]);
                  varData_1145 = varData_1145 + varData_1144 | 0;
                  varData_1140 = varData_1144;
                  varData_1144 = varData_1143;
                  varData_1143 = handleAction_89(varData_1142, 10);
                  varData_1142 = varData_1141;
                  varData_1141 = varData_1145;
                }
                varData_1145 = varData_1128[1] + varData_1137 + varData_1143 | 0;
                varData_1128[1] = varData_1128[2] + varData_1138 + varData_1144 | 0;
                varData_1128[2] = varData_1128[3] + varData_1139 + varData_1140 | 0;
                varData_1128[3] = varData_1128[4] + varData_1135 + varData_1141 | 0;
                varData_1128[4] = varData_1128[0] + varData_1136 + varData_1142 | 0;
                varData_1128[0] = varData_1145;
              },
              _doFinalize: function() {
                var varData_1146 = this._data;
                var varData_1147 = varData_1146.words;
                var varData_1148 = this._nDataBytes * 8;
                var varData_1149 = varData_1146.sigBytes * 8;
                varData_1147[varData_1149 >>> 5] |= 128 << 24 - varData_1149 % 32;
                varData_1147[(varData_1149 + 64 >>> 9 << 4) + 14] = (varData_1148 << 8 | varData_1148 >>> 24) & 16711935 | (varData_1148 << 24 | varData_1148 >>> 8) & -16711936;
                varData_1146.sigBytes = (varData_1147.length + 1) * 4;
                this._process();
                var varData_1150 = this._hash;
                var varData_1151 = varData_1150.words;
                for (var loopIdx = 0; loopIdx < 5; loopIdx++) {
                  var varData_1152 = varData_1151[loopIdx];
                  varData_1151[loopIdx] = (varData_1152 << 8 | varData_1152 >>> 24) & 16711935 | (varData_1152 << 24 | varData_1152 >>> 8) & -16711936;
                }
                return varData_1150;
              },
              clone: function() {
                var varData_1153 = varData_1117.clone.call(this);
                varData_1153._hash = this._hash.clone();
                return varData_1153;
              }
            });
            function handleAction_84(param_1_3, param_2_1, param_3) {
              return param_1_3 ^ param_2_1 ^ param_3;
            }
            function handleAction_85(param_1_3, param_2_1, param_3) {
              return param_1_3 & param_2_1 | ~param_1_3 & param_3;
            }
            function handleAction_86(param_1_3, param_2_1, param_3) {
              return (param_1_3 | ~param_2_1) ^ param_3;
            }
            function handleAction_87(param_1_3, param_2_1, param_3) {
              return param_1_3 & param_3 | param_2_1 & ~param_3;
            }
            function handleAction_88(param_1_3, param_2_1, param_3) {
              return param_1_3 ^ (param_2_1 | ~param_3);
            }
            function handleAction_89(param_1_3, param_2_1) {
              return param_1_3 << param_2_1 | param_1_3 >>> 32 - param_2_1;
            }
            varData_1114.RIPEMD160 = varData_1117._createHelper(varData_1125);
            varData_1114.HmacRIPEMD160 = varData_1117._createHmacHelper(varData_1125);
          })(Math);
          return param_1_1.RIPEMD160;
        });
      }
    });
    var varData_1154 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1155 = param_1_1;
            var varData_1156 = varData_1155.lib;
            var varData_1157 = varData_1156.Base;
            var varData_1158 = varData_1155.enc;
            var varData_1159 = varData_1158.Utf8;
            var varData_1160 = varData_1155.algo;
            var varData_1161 = varData_1160.HMAC = varData_1157.extend({
              init: function(param_1_2, param_2_1) {
                param_1_2 = this._hasher = new param_1_2.init();
                if (typeof param_2_1 == "string") {
                  param_2_1 = varData_1159.parse(param_2_1);
                }
                var varData_1162 = param_1_2.blockSize;
                var varData_1163 = varData_1162 * 4;
                if (param_2_1.sigBytes > varData_1163) {
                  param_2_1 = param_1_2.finalize(param_2_1);
                }
                param_2_1.clamp();
                var varData_1164 = this._oKey = param_2_1.clone();
                var varData_1165 = this._iKey = param_2_1.clone();
                var varData_1166 = varData_1164.words;
                var varData_1167 = varData_1165.words;
                for (var loopIdx = 0; loopIdx < varData_1162; loopIdx++) {
                  varData_1166[loopIdx] ^= 1549556828;
                  varData_1167[loopIdx] ^= 909522486;
                }
                varData_1164.sigBytes = varData_1165.sigBytes = varData_1163;
                this.reset();
              },
              reset: function() {
                var varData_1168 = this._hasher;
                varData_1168.reset();
                varData_1168.update(this._iKey);
              },
              update: function(param_1_2) {
                this._hasher.update(param_1_2);
                return this;
              },
              finalize: function(param_1_2) {
                var varData_1169 = this._hasher;
                var varData_1170 = varData_1169.finalize(param_1_2);
                varData_1169.reset();
                var varData_1171 = varData_1169.finalize(this._oKey.clone().concat(varData_1170));
                return varData_1171;
              }
            });
          })();
        });
      }
    });
    var varData_1172 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_888(), varData_1154());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1173 = param_1_1;
            var varData_1174 = varData_1173.lib;
            var varData_1175 = varData_1174.Base;
            var varData_1176 = varData_1174.WordArray;
            var varData_1177 = varData_1173.algo;
            var varData_1178 = varData_1177.SHA1;
            var varData_1179 = varData_1177.HMAC;
            var varData_1180 = {
              keySize: 4,
              hasher: varData_1178,
              iterations: 1
            };
            var varData_1181 = varData_1177.PBKDF2 = varData_1175.extend({
              cfg: varData_1175.extend(varData_1180),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function(param_1_2, param_2_1) {
                var varData_1182 = this.cfg;
                var varData_1183 = varData_1179.create(varData_1182.hasher, param_1_2);
                var varData_1184 = varData_1176.create();
                var varData_1185 = varData_1176.create([1]);
                var varData_1186 = varData_1184.words;
                var varData_1187 = varData_1185.words;
                var varData_1188 = varData_1182.keySize;
                var varData_1189 = varData_1182.iterations;
                while (varData_1186.length < varData_1188) {
                  var varData_1190 = varData_1183.update(param_2_1).finalize(varData_1185);
                  varData_1183.reset();
                  var varData_1191 = varData_1190.words;
                  var varData_1192 = varData_1191.length;
                  var varData_1193 = varData_1190;
                  for (var loopIdx = 1; loopIdx < varData_1189; loopIdx++) {
                    varData_1193 = varData_1183.finalize(varData_1193);
                    varData_1183.reset();
                    var varData_1194 = varData_1193.words;
                    for (var loopIdx_1 = 0; loopIdx_1 < varData_1192; loopIdx_1++) {
                      varData_1191[loopIdx_1] ^= varData_1194[loopIdx_1];
                    }
                  }
                  varData_1184.concat(varData_1190);
                  varData_1187[0]++;
                }
                varData_1184.sigBytes = varData_1188 * 4;
                return varData_1184;
              }
            });
            varData_1173.PBKDF2 = function(param_1_2, param_2_1, param_3) {
              return varData_1181.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.PBKDF2;
        });
      }
    });
    var varData_1195 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_888(), varData_1154());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1196 = param_1_1;
            var varData_1197 = varData_1196.lib;
            var varData_1198 = varData_1197.Base;
            var varData_1199 = varData_1197.WordArray;
            var varData_1200 = varData_1196.algo;
            var varData_1201 = varData_1200.MD5;
            var varData_1202 = {
              keySize: 4,
              hasher: varData_1201,
              iterations: 1
            };
            var varData_1203 = varData_1200.EvpKDF = varData_1198.extend({
              cfg: varData_1198.extend(varData_1202),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function(param_1_2, param_2_1) {
                var varData_1204 = this.cfg;
                var varData_1205 = varData_1204.hasher.create();
                var varData_1206 = varData_1199.create();
                var varData_1207 = varData_1206.words;
                var varData_1208 = varData_1204.keySize;
                var varData_1209 = varData_1204.iterations;
                while (varData_1207.length < varData_1208) {
                  if (varData_1210) {
                    varData_1205.update(varData_1210);
                  }
                  var varData_1210 = varData_1205.update(param_1_2).finalize(param_2_1);
                  varData_1205.reset();
                  for (var loopIdx = 1; loopIdx < varData_1209; loopIdx++) {
                    varData_1210 = varData_1205.finalize(varData_1210);
                    varData_1205.reset();
                  }
                  varData_1206.concat(varData_1210);
                }
                varData_1206.sigBytes = varData_1208 * 4;
                return varData_1206;
              }
            });
            varData_1196.EvpKDF = function(param_1_2, param_2_1, param_3) {
              return varData_1203.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.EvpKDF;
        });
      }
    });
    var varData_1211 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1195());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./evpkdf"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          if (!param_1_1.lib.Cipher) {
            (function(param_1_2) {
              var varData_1212 = param_1_1;
              var varData_1213 = varData_1212.lib;
              var varData_1214 = varData_1213.Base;
              var varData_1215 = varData_1213.WordArray;
              var varData_1216 = varData_1213.BufferedBlockAlgorithm;
              var varData_1217 = varData_1212.enc;
              var varData_1218 = varData_1217.Utf8;
              var varData_1219 = varData_1217.Base64;
              var varData_1220 = varData_1212.algo;
              var varData_1221 = varData_1220.EvpKDF;
              var varData_1222 = varData_1213.Cipher = varData_1216.extend({
                cfg: varData_1214.extend(),
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
                  varData_1216.reset.call(this);
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
                  var varData_1223 = this._doFinalize();
                  return varData_1223;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: /* @__PURE__ */ (function() {
                  function handleAction_90(param_1_3) {
                    if (typeof param_1_3 == "string") {
                      return varData_1277;
                    } else {
                      return varData_1264;
                    }
                  }
                  return function(param_1_3) {
                    return {
                      encrypt: function(param_1_4, param_2_1, param_3) {
                        return handleAction_90(param_2_1).encrypt(param_1_3, param_1_4, param_2_1, param_3);
                      },
                      decrypt: function(param_1_4, param_2_1, param_3) {
                        return handleAction_90(param_2_1).decrypt(param_1_3, param_1_4, param_2_1, param_3);
                      }
                    };
                  };
                })()
              });
              var varData_1224 = varData_1213.StreamCipher = varData_1222.extend({
                _doFinalize: function() {
                  var varData_1225 = this._process(true);
                  return varData_1225;
                },
                blockSize: 1
              });
              var varData_1226 = varData_1212.mode = {};
              var varData_1227 = varData_1213.BlockCipherMode = varData_1214.extend({
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
              var varData_1228 = varData_1226.CBC = (function() {
                var varData_1229 = varData_1227.extend();
                varData_1229.Encryptor = varData_1229.extend({
                  processBlock: function(param_1_3, param_2_1) {
                    var varData_1230 = this._cipher;
                    var varData_1231 = varData_1230.blockSize;
                    handleAction_91.call(this, param_1_3, param_2_1, varData_1231);
                    varData_1230.encryptBlock(param_1_3, param_2_1);
                    this._prevBlock = param_1_3.slice(param_2_1, param_2_1 + varData_1231);
                  }
                });
                varData_1229.Decryptor = varData_1229.extend({
                  processBlock: function(param_1_3, param_2_1) {
                    var varData_1232 = this._cipher;
                    var varData_1233 = varData_1232.blockSize;
                    var varData_1234 = param_1_3.slice(param_2_1, param_2_1 + varData_1233);
                    varData_1232.decryptBlock(param_1_3, param_2_1);
                    handleAction_91.call(this, param_1_3, param_2_1, varData_1233);
                    this._prevBlock = varData_1234;
                  }
                });
                function handleAction_91(param_1_3, param_2_1, param_3) {
                  var varData_1235 = this._iv;
                  if (varData_1235) {
                    var varData_1236 = varData_1235;
                    this._iv = param_1_2;
                  } else {
                    var varData_1236 = this._prevBlock;
                  }
                  for (var loopIdx = 0; loopIdx < param_3; loopIdx++) {
                    param_1_3[param_2_1 + loopIdx] ^= varData_1236[loopIdx];
                  }
                }
                return varData_1229;
              })();
              var varData_1237 = varData_1212.pad = {};
              var varData_1238 = varData_1237.Pkcs7 = {
                pad: function(param_1_3, param_2_1) {
                  var varData_1239 = param_2_1 * 4;
                  var varData_1240 = varData_1239 - param_1_3.sigBytes % varData_1239;
                  var varData_1241 = varData_1240 << 24 | varData_1240 << 16 | varData_1240 << 8 | varData_1240;
                  var varData_1242 = [];
                  for (var loopIdx = 0; loopIdx < varData_1240; loopIdx += 4) {
                    varData_1242.push(varData_1241);
                  }
                  var varData_1243 = varData_1215.create(varData_1242, varData_1240);
                  param_1_3.concat(varData_1243);
                },
                unpad: function(param_1_3) {
                  var varData_1244 = param_1_3.words[param_1_3.sigBytes - 1 >>> 2] & 255;
                  param_1_3.sigBytes -= varData_1244;
                }
              };
              var varData_1245 = {
                mode: varData_1228,
                padding: varData_1238
              };
              var varData_1246 = varData_1213.BlockCipher = varData_1222.extend({
                cfg: varData_1222.cfg.extend(varData_1245),
                reset: function() {
                  varData_1222.reset.call(this);
                  var varData_1247 = this.cfg;
                  var varData_1248 = varData_1247.iv;
                  var varData_1249 = varData_1247.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var varData_1250 = varData_1249.createEncryptor;
                  } else {
                    var varData_1250 = varData_1249.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == varData_1250) {
                    this._mode.init(this, varData_1248 && varData_1248.words);
                  } else {
                    this._mode = varData_1250.call(varData_1249, this, varData_1248 && varData_1248.words);
                    this._mode.__creator = varData_1250;
                  }
                },
                _doProcessBlock: function(param_1_3, param_2_1) {
                  this._mode.processBlock(param_1_3, param_2_1);
                },
                _doFinalize: function() {
                  var varData_1251 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    varData_1251.pad(this._data, this.blockSize);
                    var varData_1252 = this._process(true);
                  } else {
                    var varData_1252 = this._process(true);
                    varData_1251.unpad(varData_1252);
                  }
                  return varData_1252;
                },
                blockSize: 4
              });
              var varData_1253 = varData_1213.CipherParams = varData_1214.extend({
                init: function(param_1_3) {
                  this.mixIn(param_1_3);
                },
                toString: function(param_1_3) {
                  return (param_1_3 || this.formatter).stringify(this);
                }
              });
              var varData_1254 = varData_1212.format = {};
              var varData_1255 = varData_1254.OpenSSL = {
                stringify: function(param_1_3) {
                  var varData_1256 = param_1_3.ciphertext;
                  var varData_1257 = param_1_3.salt;
                  if (varData_1257) {
                    var varData_1258 = varData_1215.create([1398893684, 1701076831]).concat(varData_1257).concat(varData_1256);
                  } else {
                    var varData_1258 = varData_1256;
                  }
                  return varData_1258.toString(varData_1219);
                },
                parse: function(param_1_3) {
                  var varData_1259 = varData_1219.parse(param_1_3);
                  var varData_1260 = varData_1259.words;
                  if (varData_1260[0] == 1398893684 && varData_1260[1] == 1701076831) {
                    var varData_1261 = varData_1215.create(varData_1260.slice(2, 4));
                    varData_1260.splice(0, 4);
                    varData_1259.sigBytes -= 16;
                  }
                  var varData_1262 = {
                    ciphertext: varData_1259,
                    salt: varData_1261
                  };
                  return varData_1253.create(varData_1262);
                }
              };
              var varData_1263 = {
                format: varData_1255
              };
              var varData_1264 = varData_1213.SerializableCipher = varData_1214.extend({
                cfg: varData_1214.extend(varData_1263),
                encrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1265 = param_1_3.createEncryptor(param_3, param_4);
                  var varData_1266 = varData_1265.finalize(param_2_1);
                  var varData_1267 = varData_1265.cfg;
                  var varData_1268 = {
                    ciphertext: varData_1266,
                    key: param_3,
                    iv: varData_1267.iv,
                    algorithm: param_1_3,
                    mode: varData_1267.mode,
                    padding: varData_1267.padding,
                    blockSize: param_1_3.blockSize,
                    formatter: param_4.format
                  };
                  return varData_1253.create(varData_1268);
                },
                decrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1269 = param_1_3.createDecryptor(param_3, param_4).finalize(param_2_1.ciphertext);
                  return varData_1269;
                },
                _parse: function(param_1_3, param_2_1) {
                  if (typeof param_1_3 == "string") {
                    return param_2_1.parse(param_1_3, this);
                  } else {
                    return param_1_3;
                  }
                }
              });
              var varData_1270 = varData_1212.kdf = {};
              var varData_1271 = varData_1270.OpenSSL = {
                execute: function(param_1_3, param_2_1, param_3, param_4) {
                  if (!param_4) {
                    param_4 = varData_1215.random(8);
                  }
                  var varData_1272 = {
                    keySize: param_2_1 + param_3
                  };
                  var varData_1273 = varData_1221.create(varData_1272).compute(param_1_3, param_4);
                  var varData_1274 = varData_1215.create(varData_1273.words.slice(param_2_1), param_3 * 4);
                  varData_1273.sigBytes = param_2_1 * 4;
                  var varData_1275 = {
                    key: varData_1273,
                    iv: varData_1274,
                    salt: param_4
                  };
                  return varData_1253.create(varData_1275);
                }
              };
              var varData_1276 = {
                kdf: varData_1271
              };
              var varData_1277 = varData_1213.PasswordBasedCipher = varData_1264.extend({
                cfg: varData_1264.cfg.extend(varData_1276),
                encrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1278 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize);
                  param_4.iv = varData_1278.iv;
                  var varData_1279 = varData_1264.encrypt.call(this, param_1_3, param_2_1, varData_1278.key, param_4);
                  varData_1279.mixIn(varData_1278);
                  return varData_1279;
                },
                decrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1280 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize, param_2_1.salt);
                  param_4.iv = varData_1280.iv;
                  var varData_1281 = varData_1264.decrypt.call(this, param_1_3, param_2_1, varData_1280.key, param_4);
                  return varData_1281;
                }
              });
            })();
          }
        });
      }
    });
    var varData_1282 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CFB = (function() {
            var varData_1283 = param_1_1.lib.BlockCipherMode.extend();
            varData_1283.Encryptor = varData_1283.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1284 = this._cipher;
                var varData_1285 = varData_1284.blockSize;
                handleAction_92.call(this, param_1_2, param_2_1, varData_1285, varData_1284);
                this._prevBlock = param_1_2.slice(param_2_1, param_2_1 + varData_1285);
              }
            });
            varData_1283.Decryptor = varData_1283.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1286 = this._cipher;
                var varData_1287 = varData_1286.blockSize;
                var varData_1288 = param_1_2.slice(param_2_1, param_2_1 + varData_1287);
                handleAction_92.call(this, param_1_2, param_2_1, varData_1287, varData_1286);
                this._prevBlock = varData_1288;
              }
            });
            function handleAction_92(param_1_2, param_2_1, param_3, param_4) {
              var varData_1289 = this._iv;
              if (varData_1289) {
                var varData_1290 = varData_1289.slice(0);
                this._iv = void 0;
              } else {
                var varData_1290 = this._prevBlock;
              }
              param_4.encryptBlock(varData_1290, 0);
              for (var loopIdx = 0; loopIdx < param_3; loopIdx++) {
                param_1_2[param_2_1 + loopIdx] ^= varData_1290[loopIdx];
              }
            }
            return varData_1283;
          })();
          return param_1_1.mode.CFB;
        });
      }
    });
    var varData_1291 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CTR = (function() {
            var varData_1292 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1293 = varData_1292.Encryptor = varData_1292.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1294 = this._cipher;
                var varData_1295 = varData_1294.blockSize;
                var varData_1296 = this._iv;
                var varData_1297 = this._counter;
                if (varData_1296) {
                  varData_1297 = this._counter = varData_1296.slice(0);
                  this._iv = void 0;
                }
                var varData_1298 = varData_1297.slice(0);
                varData_1294.encryptBlock(varData_1298, 0);
                varData_1297[varData_1295 - 1] = varData_1297[varData_1295 - 1] + 1 | 0;
                for (var loopIdx = 0; loopIdx < varData_1295; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1298[loopIdx];
                }
              }
            });
            varData_1292.Decryptor = varData_1293;
            return varData_1292;
          })();
          return param_1_1.mode.CTR;
        });
      }
    });
    var varData_1299 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CTRGladman = (function() {
            var varData_1300 = param_1_1.lib.BlockCipherMode.extend();
            function handleAction_93(param_1_2) {
              if ((param_1_2 >> 24 & 255) === 255) {
                var varData_1301 = param_1_2 >> 16 & 255;
                var varData_1302 = param_1_2 >> 8 & 255;
                var varData_1303 = param_1_2 & 255;
                if (varData_1301 === 255) {
                  varData_1301 = 0;
                  if (varData_1302 === 255) {
                    varData_1302 = 0;
                    if (varData_1303 === 255) {
                      varData_1303 = 0;
                    } else {
                      ++varData_1303;
                    }
                  } else {
                    ++varData_1302;
                  }
                } else {
                  ++varData_1301;
                }
                param_1_2 = 0;
                param_1_2 += varData_1301 << 16;
                param_1_2 += varData_1302 << 8;
                param_1_2 += varData_1303;
              } else {
                param_1_2 += 16777216;
              }
              return param_1_2;
            }
            function handleAction_94(param_1_2) {
              if ((param_1_2[0] = handleAction_93(param_1_2[0])) === 0) {
                param_1_2[1] = handleAction_93(param_1_2[1]);
              }
              return param_1_2;
            }
            var varData_1304 = varData_1300.Encryptor = varData_1300.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1305 = this._cipher;
                var varData_1306 = varData_1305.blockSize;
                var varData_1307 = this._iv;
                var varData_1308 = this._counter;
                if (varData_1307) {
                  varData_1308 = this._counter = varData_1307.slice(0);
                  this._iv = void 0;
                }
                handleAction_94(varData_1308);
                var varData_1309 = varData_1308.slice(0);
                varData_1305.encryptBlock(varData_1309, 0);
                for (var loopIdx = 0; loopIdx < varData_1306; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1309[loopIdx];
                }
              }
            });
            varData_1300.Decryptor = varData_1304;
            return varData_1300;
          })();
          return param_1_1.mode.CTRGladman;
        });
      }
    });
    var varData_1310 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.OFB = (function() {
            var varData_1311 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1312 = varData_1311.Encryptor = varData_1311.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1313 = this._cipher;
                var varData_1314 = varData_1313.blockSize;
                var varData_1315 = this._iv;
                var varData_1316 = this._keystream;
                if (varData_1315) {
                  varData_1316 = this._keystream = varData_1315.slice(0);
                  this._iv = void 0;
                }
                varData_1313.encryptBlock(varData_1316, 0);
                for (var loopIdx = 0; loopIdx < varData_1314; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1316[loopIdx];
                }
              }
            });
            varData_1311.Decryptor = varData_1312;
            return varData_1311;
          })();
          return param_1_1.mode.OFB;
        });
      }
    });
    var varData_1317 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.ECB = (function() {
            var varData_1318 = param_1_1.lib.BlockCipherMode.extend();
            varData_1318.Encryptor = varData_1318.extend({
              processBlock: function(param_1_2, param_2_1) {
                this._cipher.encryptBlock(param_1_2, param_2_1);
              }
            });
            varData_1318.Decryptor = varData_1318.extend({
              processBlock: function(param_1_2, param_2_1) {
                this._cipher.decryptBlock(param_1_2, param_2_1);
              }
            });
            return varData_1318;
          })();
          return param_1_1.mode.ECB;
        });
      }
    });
    var varData_1319 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.AnsiX923 = {
            pad: function(param_1_2, param_2_1) {
              var varData_1320 = param_1_2.sigBytes;
              var varData_1321 = param_2_1 * 4;
              var varData_1322 = varData_1321 - varData_1320 % varData_1321;
              var varData_1323 = varData_1320 + varData_1322 - 1;
              param_1_2.clamp();
              param_1_2.words[varData_1323 >>> 2] |= varData_1322 << 24 - varData_1323 % 4 * 8;
              param_1_2.sigBytes += varData_1322;
            },
            unpad: function(param_1_2) {
              var varData_1324 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1324;
            }
          };
          return param_1_1.pad.Ansix923;
        });
      }
    });
    var varData_1325 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.Iso10126 = {
            pad: function(param_1_2, param_2_1) {
              var varData_1326 = param_2_1 * 4;
              var varData_1327 = varData_1326 - param_1_2.sigBytes % varData_1326;
              param_1_2.concat(param_1_1.lib.WordArray.random(varData_1327 - 1)).concat(param_1_1.lib.WordArray.create([varData_1327 << 24], 1));
            },
            unpad: function(param_1_2) {
              var varData_1328 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1328;
            }
          };
          return param_1_1.pad.Iso10126;
        });
      }
    });
    var varData_1329 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
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
    var varData_1330 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.ZeroPadding = {
            pad: function(param_1_2, param_2_1) {
              var varData_1331 = param_2_1 * 4;
              param_1_2.clamp();
              param_1_2.sigBytes += varData_1331 - (param_1_2.sigBytes % varData_1331 || varData_1331);
            },
            unpad: function(param_1_2) {
              var varData_1332 = param_1_2.words;
              var varData_1333 = param_1_2.sigBytes - 1;
              while (!(varData_1332[varData_1333 >>> 2] >>> 24 - varData_1333 % 4 * 8 & 255)) {
                varData_1333--;
              }
              param_1_2.sigBytes = varData_1333 + 1;
            }
          };
          return param_1_1.pad.ZeroPadding;
        });
      }
    });
    var varData_1334 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          var varData_1335 = {
            pad: function() {
            },
            unpad: function() {
            }
          };
          param_1_1.pad.NoPadding = varData_1335;
          return param_1_1.pad.NoPadding;
        });
      }
    });
    var varData_1336 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1337 = param_1_1;
            var varData_1338 = varData_1337.lib;
            var varData_1339 = varData_1338.CipherParams;
            var varData_1340 = varData_1337.enc;
            var varData_1341 = varData_1340.Hex;
            var varData_1342 = varData_1337.format;
            var varData_1343 = varData_1342.Hex = {
              stringify: function(param_1_3) {
                return param_1_3.ciphertext.toString(varData_1341);
              },
              parse: function(param_1_3) {
                var varData_1344 = varData_1341.parse(param_1_3);
                var varData_1345 = {
                  ciphertext: varData_1344
                };
                return varData_1339.create(varData_1345);
              }
            };
          })();
          return param_1_1.format.Hex;
        });
      }
    });
    var varData_1346 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_819(), varData_843(), varData_1195(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1347 = param_1_1;
            var varData_1348 = varData_1347.lib;
            var varData_1349 = varData_1348.BlockCipher;
            var varData_1350 = varData_1347.algo;
            var varData_1351 = [];
            var varData_1352 = [];
            var varData_1353 = [];
            var varData_1354 = [];
            var varData_1355 = [];
            var varData_1356 = [];
            var varData_1357 = [];
            var varData_1358 = [];
            var varData_1359 = [];
            var varData_1360 = [];
            (function() {
              var varData_1361 = [];
              for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                if (loopIdx < 128) {
                  varData_1361[loopIdx] = loopIdx << 1;
                } else {
                  varData_1361[loopIdx] = loopIdx << 1 ^ 283;
                }
              }
              var varData_1362 = 0;
              var varData_1363 = 0;
              for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                var varData_1364 = varData_1363 ^ varData_1363 << 1 ^ varData_1363 << 2 ^ varData_1363 << 3 ^ varData_1363 << 4;
                varData_1364 = varData_1364 >>> 8 ^ varData_1364 & 255 ^ 99;
                varData_1351[varData_1362] = varData_1364;
                varData_1352[varData_1364] = varData_1362;
                var varData_1365 = varData_1361[varData_1362];
                var varData_1366 = varData_1361[varData_1365];
                var varData_1367 = varData_1361[varData_1366];
                var varData_1368 = varData_1361[varData_1364] * 257 ^ varData_1364 * 16843008;
                varData_1353[varData_1362] = varData_1368 << 24 | varData_1368 >>> 8;
                varData_1354[varData_1362] = varData_1368 << 16 | varData_1368 >>> 16;
                varData_1355[varData_1362] = varData_1368 << 8 | varData_1368 >>> 24;
                varData_1356[varData_1362] = varData_1368;
                var varData_1368 = varData_1367 * 16843009 ^ varData_1366 * 65537 ^ varData_1365 * 257 ^ varData_1362 * 16843008;
                varData_1357[varData_1364] = varData_1368 << 24 | varData_1368 >>> 8;
                varData_1358[varData_1364] = varData_1368 << 16 | varData_1368 >>> 16;
                varData_1359[varData_1364] = varData_1368 << 8 | varData_1368 >>> 24;
                varData_1360[varData_1364] = varData_1368;
                if (!varData_1362) {
                  varData_1362 = varData_1363 = 1;
                } else {
                  varData_1362 = varData_1365 ^ varData_1361[varData_1361[varData_1361[varData_1367 ^ varData_1365]]];
                  varData_1363 ^= varData_1361[varData_1361[varData_1363]];
                }
              }
            })();
            var varData_1369 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            var varData_1370 = varData_1350.AES = varData_1349.extend({
              _doReset: function() {
                if (this._nRounds && this._keyPriorReset === this._key) {
                  return;
                }
                var varData_1371 = this._keyPriorReset = this._key;
                var varData_1372 = varData_1371.words;
                var varData_1373 = varData_1371.sigBytes / 4;
                var varData_1374 = this._nRounds = varData_1373 + 6;
                var varData_1375 = (varData_1374 + 1) * 4;
                var varData_1376 = this._keySchedule = [];
                for (var loopIdx = 0; loopIdx < varData_1375; loopIdx++) {
                  if (loopIdx < varData_1373) {
                    varData_1376[loopIdx] = varData_1372[loopIdx];
                  } else {
                    var varData_1377 = varData_1376[loopIdx - 1];
                    if (!(loopIdx % varData_1373)) {
                      varData_1377 = varData_1377 << 8 | varData_1377 >>> 24;
                      varData_1377 = varData_1351[varData_1377 >>> 24] << 24 | varData_1351[varData_1377 >>> 16 & 255] << 16 | varData_1351[varData_1377 >>> 8 & 255] << 8 | varData_1351[varData_1377 & 255];
                      varData_1377 ^= varData_1369[loopIdx / varData_1373 | 0] << 24;
                    } else if (varData_1373 > 6 && loopIdx % varData_1373 == 4) {
                      varData_1377 = varData_1351[varData_1377 >>> 24] << 24 | varData_1351[varData_1377 >>> 16 & 255] << 16 | varData_1351[varData_1377 >>> 8 & 255] << 8 | varData_1351[varData_1377 & 255];
                    }
                    varData_1376[loopIdx] = varData_1376[loopIdx - varData_1373] ^ varData_1377;
                  }
                }
                var varData_1378 = this._invKeySchedule = [];
                for (var loopIdx_1 = 0; loopIdx_1 < varData_1375; loopIdx_1++) {
                  var loopIdx = varData_1375 - loopIdx_1;
                  if (loopIdx_1 % 4) {
                    var varData_1377 = varData_1376[loopIdx];
                  } else {
                    var varData_1377 = varData_1376[loopIdx - 4];
                  }
                  if (loopIdx_1 < 4 || loopIdx <= 4) {
                    varData_1378[loopIdx_1] = varData_1377;
                  } else {
                    varData_1378[loopIdx_1] = varData_1357[varData_1351[varData_1377 >>> 24]] ^ varData_1358[varData_1351[varData_1377 >>> 16 & 255]] ^ varData_1359[varData_1351[varData_1377 >>> 8 & 255]] ^ varData_1360[varData_1351[varData_1377 & 255]];
                  }
                }
              },
              encryptBlock: function(param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._keySchedule, varData_1353, varData_1354, varData_1355, varData_1356, varData_1351);
              },
              decryptBlock: function(param_1_2, param_2_1) {
                var varData_1379 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1379;
                this._doCryptBlock(param_1_2, param_2_1, this._invKeySchedule, varData_1357, varData_1358, varData_1359, varData_1360, varData_1352);
                var varData_1379 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1379;
              },
              _doCryptBlock: function(param_1_2, param_2_1, param_3, param_4, param_5, param_6, param_7, param_8) {
                var varData_1380 = this._nRounds;
                var varData_1381 = param_1_2[param_2_1] ^ param_3[0];
                var varData_1382 = param_1_2[param_2_1 + 1] ^ param_3[1];
                var varData_1383 = param_1_2[param_2_1 + 2] ^ param_3[2];
                var varData_1384 = param_1_2[param_2_1 + 3] ^ param_3[3];
                var varData_1385 = 4;
                for (var loopIdx = 1; loopIdx < varData_1380; loopIdx++) {
                  var varData_1386 = param_4[varData_1381 >>> 24] ^ param_5[varData_1382 >>> 16 & 255] ^ param_6[varData_1383 >>> 8 & 255] ^ param_7[varData_1384 & 255] ^ param_3[varData_1385++];
                  var varData_1387 = param_4[varData_1382 >>> 24] ^ param_5[varData_1383 >>> 16 & 255] ^ param_6[varData_1384 >>> 8 & 255] ^ param_7[varData_1381 & 255] ^ param_3[varData_1385++];
                  var varData_1388 = param_4[varData_1383 >>> 24] ^ param_5[varData_1384 >>> 16 & 255] ^ param_6[varData_1381 >>> 8 & 255] ^ param_7[varData_1382 & 255] ^ param_3[varData_1385++];
                  var varData_1389 = param_4[varData_1384 >>> 24] ^ param_5[varData_1381 >>> 16 & 255] ^ param_6[varData_1382 >>> 8 & 255] ^ param_7[varData_1383 & 255] ^ param_3[varData_1385++];
                  varData_1381 = varData_1386;
                  varData_1382 = varData_1387;
                  varData_1383 = varData_1388;
                  varData_1384 = varData_1389;
                }
                var varData_1386 = (param_8[varData_1381 >>> 24] << 24 | param_8[varData_1382 >>> 16 & 255] << 16 | param_8[varData_1383 >>> 8 & 255] << 8 | param_8[varData_1384 & 255]) ^ param_3[varData_1385++];
                var varData_1387 = (param_8[varData_1382 >>> 24] << 24 | param_8[varData_1383 >>> 16 & 255] << 16 | param_8[varData_1384 >>> 8 & 255] << 8 | param_8[varData_1381 & 255]) ^ param_3[varData_1385++];
                var varData_1388 = (param_8[varData_1383 >>> 24] << 24 | param_8[varData_1384 >>> 16 & 255] << 16 | param_8[varData_1381 >>> 8 & 255] << 8 | param_8[varData_1382 & 255]) ^ param_3[varData_1385++];
                var varData_1389 = (param_8[varData_1384 >>> 24] << 24 | param_8[varData_1381 >>> 16 & 255] << 16 | param_8[varData_1382 >>> 8 & 255] << 8 | param_8[varData_1383 & 255]) ^ param_3[varData_1385++];
                param_1_2[param_2_1] = varData_1386;
                param_1_2[param_2_1 + 1] = varData_1387;
                param_1_2[param_2_1 + 2] = varData_1388;
                param_1_2[param_2_1 + 3] = varData_1389;
              },
              keySize: 8
            });
            varData_1347.AES = varData_1349._createHelper(varData_1370);
          })();
          return param_1_1.AES;
        });
      }
    });
    var varData_1390 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_819(), varData_843(), varData_1195(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1391 = param_1_1;
            var varData_1392 = varData_1391.lib;
            var varData_1393 = varData_1392.WordArray;
            var varData_1394 = varData_1392.BlockCipher;
            var varData_1395 = varData_1391.algo;
            var varData_1396 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
            var varData_1397 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
            var varData_1398 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
            var varData_1399 = [{
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
            var varData_1400 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
            var varData_1401 = varData_1395.DES = varData_1394.extend({
              _doReset: function() {
                var varData_1402 = this._key;
                var varData_1403 = varData_1402.words;
                var varData_1404 = [];
                for (var loopIdx = 0; loopIdx < 56; loopIdx++) {
                  var varData_1405 = varData_1396[loopIdx] - 1;
                  varData_1404[loopIdx] = varData_1403[varData_1405 >>> 5] >>> 31 - varData_1405 % 32 & 1;
                }
                var varData_1406 = this._subKeys = [];
                for (var loopIdx_1 = 0; loopIdx_1 < 16; loopIdx_1++) {
                  var varData_1407 = varData_1406[loopIdx_1] = [];
                  var varData_1408 = varData_1398[loopIdx_1];
                  for (var loopIdx = 0; loopIdx < 24; loopIdx++) {
                    varData_1407[loopIdx / 6 | 0] |= varData_1404[(varData_1397[loopIdx] - 1 + varData_1408) % 28] << 31 - loopIdx % 6;
                    varData_1407[4 + (loopIdx / 6 | 0)] |= varData_1404[28 + (varData_1397[loopIdx + 24] - 1 + varData_1408) % 28] << 31 - loopIdx % 6;
                  }
                  varData_1407[0] = varData_1407[0] << 1 | varData_1407[0] >>> 31;
                  for (var loopIdx = 1; loopIdx < 7; loopIdx++) {
                    varData_1407[loopIdx] = varData_1407[loopIdx] >>> (loopIdx - 1) * 4 + 3;
                  }
                  varData_1407[7] = varData_1407[7] << 5 | varData_1407[7] >>> 27;
                }
                var varData_1409 = this._invSubKeys = [];
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  varData_1409[loopIdx] = varData_1406[15 - loopIdx];
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
                handleAction_95.call(this, 4, 252645135);
                handleAction_95.call(this, 16, 65535);
                handleAction_96.call(this, 2, 858993459);
                handleAction_96.call(this, 8, 16711935);
                handleAction_95.call(this, 1, 1431655765);
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_1410 = param_3[loopIdx];
                  var varData_1411 = this._lBlock;
                  var varData_1412 = this._rBlock;
                  var varData_1413 = 0;
                  for (var loopIdx_1 = 0; loopIdx_1 < 8; loopIdx_1++) {
                    varData_1413 |= varData_1399[loopIdx_1][((varData_1412 ^ varData_1410[loopIdx_1]) & varData_1400[loopIdx_1]) >>> 0];
                  }
                  this._lBlock = varData_1412;
                  this._rBlock = varData_1411 ^ varData_1413;
                }
                var varData_1414 = this._lBlock;
                this._lBlock = this._rBlock;
                this._rBlock = varData_1414;
                handleAction_95.call(this, 1, 1431655765);
                handleAction_96.call(this, 8, 16711935);
                handleAction_96.call(this, 2, 858993459);
                handleAction_95.call(this, 16, 65535);
                handleAction_95.call(this, 4, 252645135);
                param_1_2[param_2_1] = this._lBlock;
                param_1_2[param_2_1 + 1] = this._rBlock;
              },
              keySize: 2,
              ivSize: 2,
              blockSize: 2
            });
            function handleAction_95(param_1_2, param_2_1) {
              var varData_1415 = (this._lBlock >>> param_1_2 ^ this._rBlock) & param_2_1;
              this._rBlock ^= varData_1415;
              this._lBlock ^= varData_1415 << param_1_2;
            }
            function handleAction_96(param_1_2, param_2_1) {
              var varData_1416 = (this._rBlock >>> param_1_2 ^ this._lBlock) & param_2_1;
              this._lBlock ^= varData_1416;
              this._rBlock ^= varData_1416 << param_1_2;
            }
            varData_1391.DES = varData_1394._createHelper(varData_1401);
            var varData_1417 = varData_1395.TripleDES = varData_1394.extend({
              _doReset: function() {
                var varData_1418 = this._key;
                var varData_1419 = varData_1418.words;
                this._des1 = varData_1401.createEncryptor(varData_1393.create(varData_1419.slice(0, 2)));
                this._des2 = varData_1401.createEncryptor(varData_1393.create(varData_1419.slice(2, 4)));
                this._des3 = varData_1401.createEncryptor(varData_1393.create(varData_1419.slice(4, 6)));
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
            varData_1391.TripleDES = varData_1394._createHelper(varData_1417);
          })();
          return param_1_1.TripleDES;
        });
      }
    });
    var varData_1420 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_819(), varData_843(), varData_1195(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1421 = param_1_1;
            var varData_1422 = varData_1421.lib;
            var varData_1423 = varData_1422.StreamCipher;
            var varData_1424 = varData_1421.algo;
            var varData_1425 = varData_1424.RC4 = varData_1423.extend({
              _doReset: function() {
                var varData_1426 = this._key;
                var varData_1427 = varData_1426.words;
                var varData_1428 = varData_1426.sigBytes;
                var varData_1429 = this._S = [];
                for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                  varData_1429[loopIdx] = loopIdx;
                }
                for (var loopIdx = 0, loopIdx_1 = 0; loopIdx < 256; loopIdx++) {
                  var varData_1430 = loopIdx % varData_1428;
                  var varData_1431 = varData_1427[varData_1430 >>> 2] >>> 24 - varData_1430 % 4 * 8 & 255;
                  loopIdx_1 = (loopIdx_1 + varData_1429[loopIdx] + varData_1431) % 256;
                  var varData_1432 = varData_1429[loopIdx];
                  varData_1429[loopIdx] = varData_1429[loopIdx_1];
                  varData_1429[loopIdx_1] = varData_1432;
                }
                this._i = this._j = 0;
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                param_1_2[param_2_1] ^= handleAction_97.call(this);
              },
              keySize: 8,
              ivSize: 0
            });
            function handleAction_97() {
              var varData_1433 = this._S;
              var varData_1434 = this._i;
              var varData_1435 = this._j;
              var varData_1436 = 0;
              for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                varData_1434 = (varData_1434 + 1) % 256;
                varData_1435 = (varData_1435 + varData_1433[varData_1434]) % 256;
                var varData_1437 = varData_1433[varData_1434];
                varData_1433[varData_1434] = varData_1433[varData_1435];
                varData_1433[varData_1435] = varData_1437;
                varData_1436 |= varData_1433[(varData_1433[varData_1434] + varData_1433[varData_1435]) % 256] << 24 - loopIdx * 8;
              }
              this._i = varData_1434;
              this._j = varData_1435;
              return varData_1436;
            }
            varData_1421.RC4 = varData_1423._createHelper(varData_1425);
            var varData_1438 = varData_1424.RC4Drop = varData_1425.extend({
              cfg: varData_1425.cfg.extend({
                drop: 192
              }),
              _doReset: function() {
                varData_1425._doReset.call(this);
                for (var loopIdx = this.cfg.drop; loopIdx > 0; loopIdx--) {
                  handleAction_97.call(this);
                }
              }
            });
            varData_1421.RC4Drop = varData_1423._createHelper(varData_1438);
          })();
          return param_1_1.RC4;
        });
      }
    });
    var varData_1439 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_819(), varData_843(), varData_1195(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1440 = param_1_1;
            var varData_1441 = varData_1440.lib;
            var varData_1442 = varData_1441.StreamCipher;
            var varData_1443 = varData_1440.algo;
            var varData_1444 = [];
            var varData_1445 = [];
            var varData_1446 = [];
            var varData_1447 = varData_1443.Rabbit = varData_1442.extend({
              _doReset: function() {
                var varData_1448 = this._key.words;
                var varData_1449 = this.cfg.iv;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1448[loopIdx] = (varData_1448[loopIdx] << 8 | varData_1448[loopIdx] >>> 24) & 16711935 | (varData_1448[loopIdx] << 24 | varData_1448[loopIdx] >>> 8) & -16711936;
                }
                var varData_1450 = this._X = [varData_1448[0], varData_1448[3] << 16 | varData_1448[2] >>> 16, varData_1448[1], varData_1448[0] << 16 | varData_1448[3] >>> 16, varData_1448[2], varData_1448[1] << 16 | varData_1448[0] >>> 16, varData_1448[3], varData_1448[2] << 16 | varData_1448[1] >>> 16];
                var varData_1451 = this._C = [varData_1448[2] << 16 | varData_1448[2] >>> 16, varData_1448[0] & -65536 | varData_1448[1] & 65535, varData_1448[3] << 16 | varData_1448[3] >>> 16, varData_1448[1] & -65536 | varData_1448[2] & 65535, varData_1448[0] << 16 | varData_1448[0] >>> 16, varData_1448[2] & -65536 | varData_1448[3] & 65535, varData_1448[1] << 16 | varData_1448[1] >>> 16, varData_1448[3] & -65536 | varData_1448[0] & 65535];
                this._b = 0;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  handleAction_98.call(this);
                }
                for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                  varData_1451[loopIdx] ^= varData_1450[loopIdx + 4 & 7];
                }
                if (varData_1449) {
                  var varData_1452 = varData_1449.words;
                  var varData_1453 = varData_1452[0];
                  var varData_1454 = varData_1452[1];
                  var varData_1455 = (varData_1453 << 8 | varData_1453 >>> 24) & 16711935 | (varData_1453 << 24 | varData_1453 >>> 8) & -16711936;
                  var varData_1456 = (varData_1454 << 8 | varData_1454 >>> 24) & 16711935 | (varData_1454 << 24 | varData_1454 >>> 8) & -16711936;
                  var varData_1457 = varData_1455 >>> 16 | varData_1456 & -65536;
                  var varData_1458 = varData_1456 << 16 | varData_1455 & 65535;
                  varData_1451[0] ^= varData_1455;
                  varData_1451[1] ^= varData_1457;
                  varData_1451[2] ^= varData_1456;
                  varData_1451[3] ^= varData_1458;
                  varData_1451[4] ^= varData_1455;
                  varData_1451[5] ^= varData_1457;
                  varData_1451[6] ^= varData_1456;
                  varData_1451[7] ^= varData_1458;
                  for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                    handleAction_98.call(this);
                  }
                }
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_1459 = this._X;
                handleAction_98.call(this);
                varData_1444[0] = varData_1459[0] ^ varData_1459[5] >>> 16 ^ varData_1459[3] << 16;
                varData_1444[1] = varData_1459[2] ^ varData_1459[7] >>> 16 ^ varData_1459[5] << 16;
                varData_1444[2] = varData_1459[4] ^ varData_1459[1] >>> 16 ^ varData_1459[7] << 16;
                varData_1444[3] = varData_1459[6] ^ varData_1459[3] >>> 16 ^ varData_1459[1] << 16;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1444[loopIdx] = (varData_1444[loopIdx] << 8 | varData_1444[loopIdx] >>> 24) & 16711935 | (varData_1444[loopIdx] << 24 | varData_1444[loopIdx] >>> 8) & -16711936;
                  param_1_2[param_2_1 + loopIdx] ^= varData_1444[loopIdx];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_98() {
              var varData_1460 = this._X;
              var varData_1461 = this._C;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                varData_1445[loopIdx] = varData_1461[loopIdx];
              }
              varData_1461[0] = varData_1461[0] + 1295307597 + this._b | 0;
              varData_1461[1] = varData_1461[1] + 3545052371 + (varData_1461[0] >>> 0 < varData_1445[0] >>> 0 ? 1 : 0) | 0;
              varData_1461[2] = varData_1461[2] + 886263092 + (varData_1461[1] >>> 0 < varData_1445[1] >>> 0 ? 1 : 0) | 0;
              varData_1461[3] = varData_1461[3] + 1295307597 + (varData_1461[2] >>> 0 < varData_1445[2] >>> 0 ? 1 : 0) | 0;
              varData_1461[4] = varData_1461[4] + 3545052371 + (varData_1461[3] >>> 0 < varData_1445[3] >>> 0 ? 1 : 0) | 0;
              varData_1461[5] = varData_1461[5] + 886263092 + (varData_1461[4] >>> 0 < varData_1445[4] >>> 0 ? 1 : 0) | 0;
              varData_1461[6] = varData_1461[6] + 1295307597 + (varData_1461[5] >>> 0 < varData_1445[5] >>> 0 ? 1 : 0) | 0;
              varData_1461[7] = varData_1461[7] + 3545052371 + (varData_1461[6] >>> 0 < varData_1445[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1461[7] >>> 0 < varData_1445[7] >>> 0 ? 1 : 0;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                var varData_1462 = varData_1460[loopIdx] + varData_1461[loopIdx];
                var varData_1463 = varData_1462 & 65535;
                var varData_1464 = varData_1462 >>> 16;
                var varData_1465 = ((varData_1463 * varData_1463 >>> 17) + varData_1463 * varData_1464 >>> 15) + varData_1464 * varData_1464;
                var varData_1466 = ((varData_1462 & -65536) * varData_1462 | 0) + ((varData_1462 & 65535) * varData_1462 | 0);
                varData_1446[loopIdx] = varData_1465 ^ varData_1466;
              }
              varData_1460[0] = varData_1446[0] + (varData_1446[7] << 16 | varData_1446[7] >>> 16) + (varData_1446[6] << 16 | varData_1446[6] >>> 16) | 0;
              varData_1460[1] = varData_1446[1] + (varData_1446[0] << 8 | varData_1446[0] >>> 24) + varData_1446[7] | 0;
              varData_1460[2] = varData_1446[2] + (varData_1446[1] << 16 | varData_1446[1] >>> 16) + (varData_1446[0] << 16 | varData_1446[0] >>> 16) | 0;
              varData_1460[3] = varData_1446[3] + (varData_1446[2] << 8 | varData_1446[2] >>> 24) + varData_1446[1] | 0;
              varData_1460[4] = varData_1446[4] + (varData_1446[3] << 16 | varData_1446[3] >>> 16) + (varData_1446[2] << 16 | varData_1446[2] >>> 16) | 0;
              varData_1460[5] = varData_1446[5] + (varData_1446[4] << 8 | varData_1446[4] >>> 24) + varData_1446[3] | 0;
              varData_1460[6] = varData_1446[6] + (varData_1446[5] << 16 | varData_1446[5] >>> 16) + (varData_1446[4] << 16 | varData_1446[4] >>> 16) | 0;
              varData_1460[7] = varData_1446[7] + (varData_1446[6] << 8 | varData_1446[6] >>> 24) + varData_1446[5] | 0;
            }
            varData_1440.Rabbit = varData_1442._createHelper(varData_1447);
          })();
          return param_1_1.Rabbit;
        });
      }
    });
    var varData_1467 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_819(), varData_843(), varData_1195(), varData_1211());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1468 = param_1_1;
            var varData_1469 = varData_1468.lib;
            var varData_1470 = varData_1469.StreamCipher;
            var varData_1471 = varData_1468.algo;
            var varData_1472 = [];
            var varData_1473 = [];
            var varData_1474 = [];
            var varData_1475 = varData_1471.RabbitLegacy = varData_1470.extend({
              _doReset: function() {
                var varData_1476 = this._key.words;
                var varData_1477 = this.cfg.iv;
                var varData_1478 = this._X = [varData_1476[0], varData_1476[3] << 16 | varData_1476[2] >>> 16, varData_1476[1], varData_1476[0] << 16 | varData_1476[3] >>> 16, varData_1476[2], varData_1476[1] << 16 | varData_1476[0] >>> 16, varData_1476[3], varData_1476[2] << 16 | varData_1476[1] >>> 16];
                var varData_1479 = this._C = [varData_1476[2] << 16 | varData_1476[2] >>> 16, varData_1476[0] & -65536 | varData_1476[1] & 65535, varData_1476[3] << 16 | varData_1476[3] >>> 16, varData_1476[1] & -65536 | varData_1476[2] & 65535, varData_1476[0] << 16 | varData_1476[0] >>> 16, varData_1476[2] & -65536 | varData_1476[3] & 65535, varData_1476[1] << 16 | varData_1476[1] >>> 16, varData_1476[3] & -65536 | varData_1476[0] & 65535];
                this._b = 0;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  handleAction_99.call(this);
                }
                for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                  varData_1479[loopIdx] ^= varData_1478[loopIdx + 4 & 7];
                }
                if (varData_1477) {
                  var varData_1480 = varData_1477.words;
                  var varData_1481 = varData_1480[0];
                  var varData_1482 = varData_1480[1];
                  var varData_1483 = (varData_1481 << 8 | varData_1481 >>> 24) & 16711935 | (varData_1481 << 24 | varData_1481 >>> 8) & -16711936;
                  var varData_1484 = (varData_1482 << 8 | varData_1482 >>> 24) & 16711935 | (varData_1482 << 24 | varData_1482 >>> 8) & -16711936;
                  var varData_1485 = varData_1483 >>> 16 | varData_1484 & -65536;
                  var varData_1486 = varData_1484 << 16 | varData_1483 & 65535;
                  varData_1479[0] ^= varData_1483;
                  varData_1479[1] ^= varData_1485;
                  varData_1479[2] ^= varData_1484;
                  varData_1479[3] ^= varData_1486;
                  varData_1479[4] ^= varData_1483;
                  varData_1479[5] ^= varData_1485;
                  varData_1479[6] ^= varData_1484;
                  varData_1479[7] ^= varData_1486;
                  for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                    handleAction_99.call(this);
                  }
                }
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_1487 = this._X;
                handleAction_99.call(this);
                varData_1472[0] = varData_1487[0] ^ varData_1487[5] >>> 16 ^ varData_1487[3] << 16;
                varData_1472[1] = varData_1487[2] ^ varData_1487[7] >>> 16 ^ varData_1487[5] << 16;
                varData_1472[2] = varData_1487[4] ^ varData_1487[1] >>> 16 ^ varData_1487[7] << 16;
                varData_1472[3] = varData_1487[6] ^ varData_1487[3] >>> 16 ^ varData_1487[1] << 16;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1472[loopIdx] = (varData_1472[loopIdx] << 8 | varData_1472[loopIdx] >>> 24) & 16711935 | (varData_1472[loopIdx] << 24 | varData_1472[loopIdx] >>> 8) & -16711936;
                  param_1_2[param_2_1 + loopIdx] ^= varData_1472[loopIdx];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_99() {
              var varData_1488 = this._X;
              var varData_1489 = this._C;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                varData_1473[loopIdx] = varData_1489[loopIdx];
              }
              varData_1489[0] = varData_1489[0] + 1295307597 + this._b | 0;
              varData_1489[1] = varData_1489[1] + 3545052371 + (varData_1489[0] >>> 0 < varData_1473[0] >>> 0 ? 1 : 0) | 0;
              varData_1489[2] = varData_1489[2] + 886263092 + (varData_1489[1] >>> 0 < varData_1473[1] >>> 0 ? 1 : 0) | 0;
              varData_1489[3] = varData_1489[3] + 1295307597 + (varData_1489[2] >>> 0 < varData_1473[2] >>> 0 ? 1 : 0) | 0;
              varData_1489[4] = varData_1489[4] + 3545052371 + (varData_1489[3] >>> 0 < varData_1473[3] >>> 0 ? 1 : 0) | 0;
              varData_1489[5] = varData_1489[5] + 886263092 + (varData_1489[4] >>> 0 < varData_1473[4] >>> 0 ? 1 : 0) | 0;
              varData_1489[6] = varData_1489[6] + 1295307597 + (varData_1489[5] >>> 0 < varData_1473[5] >>> 0 ? 1 : 0) | 0;
              varData_1489[7] = varData_1489[7] + 3545052371 + (varData_1489[6] >>> 0 < varData_1473[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1489[7] >>> 0 < varData_1473[7] >>> 0 ? 1 : 0;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                var varData_1490 = varData_1488[loopIdx] + varData_1489[loopIdx];
                var varData_1491 = varData_1490 & 65535;
                var varData_1492 = varData_1490 >>> 16;
                var varData_1493 = ((varData_1491 * varData_1491 >>> 17) + varData_1491 * varData_1492 >>> 15) + varData_1492 * varData_1492;
                var varData_1494 = ((varData_1490 & -65536) * varData_1490 | 0) + ((varData_1490 & 65535) * varData_1490 | 0);
                varData_1474[loopIdx] = varData_1493 ^ varData_1494;
              }
              varData_1488[0] = varData_1474[0] + (varData_1474[7] << 16 | varData_1474[7] >>> 16) + (varData_1474[6] << 16 | varData_1474[6] >>> 16) | 0;
              varData_1488[1] = varData_1474[1] + (varData_1474[0] << 8 | varData_1474[0] >>> 24) + varData_1474[7] | 0;
              varData_1488[2] = varData_1474[2] + (varData_1474[1] << 16 | varData_1474[1] >>> 16) + (varData_1474[0] << 16 | varData_1474[0] >>> 16) | 0;
              varData_1488[3] = varData_1474[3] + (varData_1474[2] << 8 | varData_1474[2] >>> 24) + varData_1474[1] | 0;
              varData_1488[4] = varData_1474[4] + (varData_1474[3] << 16 | varData_1474[3] >>> 16) + (varData_1474[2] << 16 | varData_1474[2] >>> 16) | 0;
              varData_1488[5] = varData_1474[5] + (varData_1474[4] << 8 | varData_1474[4] >>> 24) + varData_1474[3] | 0;
              varData_1488[6] = varData_1474[6] + (varData_1474[5] << 16 | varData_1474[5] >>> 16) + (varData_1474[4] << 16 | varData_1474[4] >>> 16) | 0;
              varData_1488[7] = varData_1474[7] + (varData_1474[6] << 8 | varData_1474[6] >>> 24) + varData_1474[5] | 0;
            }
            varData_1468.RabbitLegacy = varData_1470._createHelper(varData_1475);
          })();
          return param_1_1.RabbitLegacy;
        });
      }
    });
    var varData_1495 = varData_711({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_723(), varData_777(), varData_793(), varData_801(), varData_819(), varData_843(), varData_888(), varData_909(), varData_946(), varData_954(), varData_1046(), varData_1055(), varData_1113(), varData_1154(), varData_1172(), varData_1195(), varData_1211(), varData_1282(), varData_1291(), varData_1299(), varData_1310(), varData_1317(), varData_1319(), varData_1325(), varData_1329(), varData_1330(), varData_1334(), varData_1336(), varData_1346(), varData_1390(), varData_1420(), varData_1439(), varData_1467());
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
    var varData_1496 = {
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
    var varData_1497 = {};
    var varData_1498 = {
      MathUtils: () => varData_1656
    };
    varData_712(varData_1497, varData_1498);
    var varData_1499;
    var varData_1500;
    var varData_1501 = class _0x4fd239 {
      constructor(param_1, param_2, param_3) {
        varData_719(this, varData_1499);
        const varData_1502 = varData_722(this, varData_1499, varData_1500).call(this, param_1, param_2, param_3);
        this.x = varData_1502.x;
        this.y = varData_1502.y;
        this.z = varData_1502.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_1503 = varData_722(this, varData_1499, varData_1500).call(this, param_1, param_2, param_3);
        return this.x === varData_1503.x && this.y === varData_1503.y && this.z === varData_1503.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_1504 = varData_722(this, varData_1499, varData_1500).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_1504.x * param_4 : varData_1504.x;
        this.y += param_4 ? varData_1504.y * param_4 : varData_1504.y;
        this.z += param_4 ? varData_1504.z * param_4 : varData_1504.z;
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
        const varData_1505 = varData_722(this, varData_1499, varData_1500).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_1505.x * param_4 : varData_1505.x;
        this.y -= param_4 ? varData_1505.y * param_4 : varData_1505.y;
        this.z -= param_4 ? varData_1505.z * param_4 : varData_1505.z;
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
        const varData_1506 = varData_722(this, varData_1499, varData_1500).call(this, param_1, param_2, param_3);
        this.x *= varData_1506.x;
        this.y *= varData_1506.y;
        this.z *= varData_1506.z;
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
        const varData_1507 = varData_722(this, varData_1499, varData_1500).call(this, param_1, param_2, param_3);
        this.x /= varData_1507.x;
        this.y /= varData_1507.y;
        this.z /= varData_1507.z;
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
        const varData_1508 = varData_722(this, varData_1499, varData_1500).call(this, param_1, param_2, param_3);
        return new _0x4fd239((this.x + varData_1508.x) / 2, (this.y + varData_1508.y) / 2, (this.z + varData_1508.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x7fa54, _0x44b9f1, _0x5a5b86] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x7fa54 !== "number" || typeof _0x44b9f1 !== "number" || typeof _0x5a5b86 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x3a1a07, _0x3a25bc, _0x15185f] = [this.x - _0x7fa54, this.y - _0x44b9f1, this.z - _0x5a5b86];
        return Math.sqrt(_0x3a1a07 * _0x3a1a07 + _0x3a25bc * _0x3a25bc + _0x15185f * _0x15185f);
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
        var varData_1509 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_1509;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1499 = /* @__PURE__ */ new WeakSet();
    varData_1500 = function(param_1, param_2, param_3) {
      let varData_1510 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_1501) {
        varData_1510 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1511 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_1510 = varData_1511;
      } else if (typeof param_1 === "object") {
        varData_1510 = param_1;
      } else {
        var varData_1512 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_1510 = varData_1512;
      }
      if (typeof varData_1510.x !== "number" || typeof varData_1510.y !== "number" || typeof varData_1510.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1510;
    };
    var varData_1513 = varData_1501;
    var varData_1514;
    var varData_1515;
    var varData_1516 = class {
      constructor(param_1) {
        varData_719(this, varData_1514, void 0);
        varData_719(this, varData_1515, void 0);
        varData_720(this, varData_1515, param_1 ?? 5);
        varData_720(this, varData_1514, /* @__PURE__ */ new Map());
      }
      setTTL(param_1) {
        varData_720(this, varData_1515, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_718(this, varData_1514).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_718(this, varData_1515)) * 1e3
        });
        return this;
      }
      get(param_1, _0x4bda50 = false) {
        const varData_1517 = varData_718(this, varData_1514).get(param_1);
        const varData_1518 = varData_1517 ? _0x4bda50 ? true : varData_1517.expiration > Date.now() : false;
        if (!varData_1517 || !varData_1518) {
          if (varData_1517) {
            varData_718(this, varData_1514).delete(param_1);
          }
          return;
        }
        return varData_1517.value;
      }
      has(param_1, _0x6bf900 = false) {
        const varData_1519 = varData_718(this, varData_1514).get(param_1);
        const varData_1520 = varData_1519 ? _0x6bf900 ? true : varData_1519.expiration > Date.now() : false;
        if (varData_1519 && !varData_1520) {
          varData_718(this, varData_1514).delete(param_1);
        }
        return varData_1520;
      }
      delete(param_1) {
        return varData_718(this, varData_1514).delete(param_1);
      }
      clear() {
        varData_718(this, varData_1514).clear();
      }
      values(_0x175155 = false) {
        const varData_1521 = [];
        const timestamp = Date.now();
        for (const varData_1522 of varData_718(this, varData_1514).values()) {
          if (_0x175155 || varData_1522.expiration > timestamp) {
            varData_1521.push(varData_1522.value);
          }
        }
        return varData_1521;
      }
      keys(_0x3a5c39 = false) {
        const varData_1523 = [];
        const timestamp = Date.now();
        for (const [_0x19fa3d, _0x2ab244] of varData_718(this, varData_1514).entries()) {
          if (_0x3a5c39 || _0x2ab244.expiration > timestamp) {
            varData_1523.push(_0x19fa3d);
          }
        }
        return varData_1523;
      }
      entries(_0x58dbcf = false) {
        const varData_1524 = [];
        const timestamp = Date.now();
        for (const [_0x5b93b4, _0x3921d9] of varData_718(this, varData_1514).entries()) {
          if (_0x58dbcf || _0x3921d9.expiration > timestamp) {
            varData_1524.push([_0x5b93b4, _0x3921d9.value]);
          }
        }
        return varData_1524;
      }
    };
    varData_1514 = /* @__PURE__ */ new WeakMap();
    varData_1515 = /* @__PURE__ */ new WeakMap();
    var varData_1525;
    var varData_1526;
    var varData_1527;
    var varData_1528;
    var varData_1529;
    var varData_1530;
    var varData_1531;
    var varData_1532;
    var varData_1533;
    var varData_1534;
    var varData_1535;
    var varData_1536;
    var varData_1537;
    var varData_1538;
    var varData_1539;
    var varData_1540;
    var varData_1541;
    var varData_1542;
    var varData_1543;
    var varData_1544;
    var varData_1545;
    var varData_1546;
    var varData_1547 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x792c8a = 30, _0xf6f5ef = false) {
        varData_719(this, varData_1537);
        varData_719(this, varData_1539);
        varData_719(this, varData_1541);
        varData_719(this, varData_1543);
        varData_719(this, varData_1545);
        varData_719(this, varData_1525, void 0);
        varData_719(this, varData_1526, void 0);
        varData_719(this, varData_1527, void 0);
        varData_719(this, varData_1528, void 0);
        varData_719(this, varData_1529, void 0);
        varData_719(this, varData_1530, void 0);
        varData_719(this, varData_1531, void 0);
        varData_719(this, varData_1532, void 0);
        varData_719(this, varData_1533, void 0);
        varData_719(this, varData_1534, void 0);
        varData_719(this, varData_1535, void 0);
        varData_719(this, varData_1536, void 0);
        varData_720(this, varData_1525, param_1);
        varData_720(this, varData_1526, param_4);
        varData_720(this, varData_1527, param_5);
        varData_720(this, varData_1528, param_2);
        varData_720(this, varData_1529, param_3);
        varData_720(this, varData_1530, _0xf6f5ef);
        varData_720(this, varData_1531, _0x792c8a);
        varData_720(this, varData_1533, varData_718(this, varData_1526).x / _0x792c8a);
        varData_720(this, varData_1534, varData_718(this, varData_1526).y / _0x792c8a);
        varData_720(this, varData_1532, varData_718(this, varData_1533) * varData_718(this, varData_1534));
        varData_720(this, varData_1535, varData_722(this, varData_1537, varData_1538).call(this, varData_718(this, varData_1525), varData_718(this, varData_1531), varData_718(this, varData_1533), varData_718(this, varData_1534), varData_718(this, varData_1530)));
        varData_720(this, varData_1536, varData_722(this, varData_1539, varData_1540).call(this, varData_718(this, varData_1535), varData_718(this, varData_1532)));
      }
      get cells() {
        return varData_718(this, varData_1535);
      }
      get cellSize() {
        return varData_718(this, varData_1531);
      }
      get cellWidth() {
        return varData_718(this, varData_1533);
      }
      get cellHeight() {
        return varData_718(this, varData_1534);
      }
      get gridArea() {
        return varData_718(this, varData_1536);
      }
      get gridCoverage() {
        return varData_718(this, varData_1536) / varData_718(this, varData_1527) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_1548;
        const varData_1549 = param_1.x - varData_718(this, varData_1528).x;
        const varData_1550 = param_1.y - varData_718(this, varData_1528).y;
        const varData_1551 = Math.floor(varData_1549 * varData_718(this, varData_1531) / varData_718(this, varData_1526).x);
        const varData_1552 = Math.floor(varData_1550 * varData_718(this, varData_1531) / varData_718(this, varData_1526).y);
        let varData_1553 = (varData_1548 = varData_718(this, varData_1535)[varData_1551]) == null ? void 0 : varData_1548[varData_1552];
        if (!varData_1553 && varData_718(this, varData_1530)) {
          varData_1553 = varData_722(this, varData_1543, varData_1544).call(this, varData_1551, varData_1552, varData_718(this, varData_1533), varData_718(this, varData_1534), varData_718(this, varData_1525));
          varData_718(this, varData_1535)[varData_1551][varData_1552] = varData_1553;
          if (!varData_1553) {
            return false;
          }
          varData_720(this, varData_1536, varData_718(this, varData_1536) + varData_718(this, varData_1532));
        }
        return varData_1553 ?? false;
      }
    };
    varData_1525 = /* @__PURE__ */ new WeakMap();
    varData_1526 = /* @__PURE__ */ new WeakMap();
    varData_1527 = /* @__PURE__ */ new WeakMap();
    varData_1528 = /* @__PURE__ */ new WeakMap();
    varData_1529 = /* @__PURE__ */ new WeakMap();
    varData_1530 = /* @__PURE__ */ new WeakMap();
    varData_1531 = /* @__PURE__ */ new WeakMap();
    varData_1532 = /* @__PURE__ */ new WeakMap();
    varData_1533 = /* @__PURE__ */ new WeakMap();
    varData_1534 = /* @__PURE__ */ new WeakMap();
    varData_1535 = /* @__PURE__ */ new WeakMap();
    varData_1536 = /* @__PURE__ */ new WeakMap();
    varData_1537 = /* @__PURE__ */ new WeakSet();
    varData_1538 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_1554 = {};
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_1554[loopIdx] = {};
        if (param_5) {
          continue;
        }
        for (let loopIdx_1 = 0; loopIdx_1 < param_2; loopIdx_1++) {
          const varData_1555 = varData_722(this, varData_1543, varData_1544).call(this, loopIdx, loopIdx_1, param_3, param_4, param_1);
          if (!varData_1555) {
            continue;
          }
          varData_1554[loopIdx][loopIdx_1] = true;
        }
      }
      return varData_1554;
    };
    varData_1539 = /* @__PURE__ */ new WeakSet();
    varData_1540 = function(param_1, param_2) {
      let varData_1556 = 0;
      for (const varData_1557 in param_1) {
        for (const varData_1558 in param_1[varData_1557]) {
          varData_1556 += param_2;
        }
      }
      return varData_1556;
    };
    varData_1541 = /* @__PURE__ */ new WeakSet();
    varData_1542 = function(param_1, param_2, param_3, param_4) {
      const varData_1559 = [];
      const varData_1560 = param_1 * param_3 + varData_718(this, varData_1528).x;
      const varData_1561 = param_2 * param_4 + varData_718(this, varData_1528).y;
      varData_1559.push(new varData_1643(varData_1560, varData_1561));
      varData_1559.push(new varData_1643(varData_1560 + param_3, varData_1561));
      varData_1559.push(new varData_1643(varData_1560 + param_3, varData_1561 + param_4));
      varData_1559.push(new varData_1643(varData_1560, varData_1561 + param_4));
      return varData_1559;
    };
    varData_1543 = /* @__PURE__ */ new WeakSet();
    varData_1544 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_1562 = varData_722(this, varData_1541, varData_1542).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_1 = false;
      for (const varData_1563 of varData_1562) {
        const varData_1564 = varData_1675.MathUtils.windingNumber(varData_1563, param_5);
        if (varData_1564 !== 0) {
          isDisabled_1 = true;
          break;
        }
      }
      if (!isDisabled_1) {
        return false;
      }
      for (let loopIdx = 0; loopIdx < varData_1562.length; loopIdx++) {
        const varData_1565 = varData_1562[loopIdx];
        const varData_1566 = varData_1562[(loopIdx + 1) % varData_1562.length];
        for (let loopIdx_1 = 0; loopIdx_1 < param_5.length; loopIdx_1++) {
          const varData_1567 = param_5[loopIdx_1];
          const varData_1568 = param_5[(loopIdx_1 + 1) % param_5.length];
          if (varData_722(this, varData_1545, varData_1546).call(this, varData_1565, varData_1566, varData_1567, varData_1568)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_1545 = /* @__PURE__ */ new WeakSet();
    varData_1546 = function(param_1, param_2, param_3, param_4) {
      const varData_1569 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_1570 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_1571 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_1569 === 0) {
        return varData_1570 === 0 && varData_1571 === 0;
      }
      const varData_1572 = varData_1570 / varData_1569;
      const varData_1573 = varData_1571 / varData_1569;
      return varData_1572 >= 0 && varData_1572 <= 1 && varData_1573 >= 0 && varData_1573 <= 1;
    };
    var varData_1574;
    var varData_1575;
    var varData_1576;
    var varData_1577;
    var varData_1578;
    var varData_1579;
    var varData_1580;
    var varData_1581;
    var varData_1582;
    var varData_1583;
    var varData_1584;
    var varData_1585;
    var varData_1586;
    var varData_1587;
    var varData_1588;
    var varData_1589;
    var varData_1590;
    var varData_1591;
    var varData_1592 = class {
      constructor(param_1, _0x12af53 = {}, _0x230496 = {}) {
        varData_719(this, varData_1582);
        varData_719(this, varData_1584);
        varData_719(this, varData_1586);
        varData_719(this, varData_1588);
        varData_719(this, varData_1590);
        varData_719(this, varData_1574, void 0);
        varData_719(this, varData_1575, void 0);
        varData_719(this, varData_1576, void 0);
        varData_719(this, varData_1577, void 0);
        varData_719(this, varData_1578, void 0);
        varData_719(this, varData_1579, void 0);
        varData_719(this, varData_1580, void 0);
        varData_719(this, varData_1581, void 0);
        varData_720(this, varData_1574, varData_1675.getUUID());
        varData_720(this, varData_1575, param_1);
        varData_720(this, varData_1576, varData_722(this, varData_1582, varData_1583).call(this, param_1));
        varData_720(this, varData_1577, varData_722(this, varData_1584, varData_1585).call(this, param_1));
        varData_720(this, varData_1578, varData_722(this, varData_1590, varData_1591).call(this, param_1));
        varData_720(this, varData_1579, varData_722(this, varData_1588, varData_1589).call(this, varData_718(this, varData_1576), varData_718(this, varData_1577)));
        varData_720(this, varData_1580, varData_722(this, varData_1586, varData_1587).call(this, varData_718(this, varData_1576), varData_718(this, varData_1577)));
        this.options = _0x12af53;
        this.data = _0x230496;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_720(this, varData_1581, new varData_1547(varData_718(this, varData_1575), varData_718(this, varData_1576), varData_718(this, varData_1577), varData_718(this, varData_1579), varData_718(this, varData_1578), _0x12af53.gridCellSize, _0x12af53.useLazyGrid));
      }
      get id() {
        return varData_718(this, varData_1574);
      }
      get center() {
        return varData_718(this, varData_1580);
      }
      get min() {
        return varData_718(this, varData_1576);
      }
      get max() {
        return varData_718(this, varData_1577);
      }
      get points() {
        return [...varData_718(this, varData_1575)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_718(this, varData_1576).x || param_1.x > varData_718(this, varData_1577).x) {
          return false;
        } else if (param_1.y < varData_718(this, varData_1576).y || param_1.y > varData_718(this, varData_1577).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_1513) {
          const varData_1593 = this.options.minZ ?? -Infinity;
          const varData_1594 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_1593 || param_1.z > varData_1594) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_718(this, varData_1581)) {
          return varData_718(this, varData_1581).isPointInsideGrid(param_1);
        }
        const varData_1595 = varData_1675.MathUtils.windingNumber(param_1, varData_718(this, varData_1575));
        return varData_1595 !== 0;
      }
      addPoint(param_1) {
        varData_718(this, varData_1575).push(param_1);
      }
      removePoint(param_1) {
        const varData_1596 = varData_718(this, varData_1575).findIndex((param_1_1) => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_1596 === -1) {
          return;
        }
        varData_718(this, varData_1575).splice(varData_1596, 1);
      }
      removeLastPoint() {
        varData_718(this, varData_1575).pop();
      }
      recalculate() {
        varData_720(this, varData_1576, varData_722(this, varData_1582, varData_1583).call(this, varData_718(this, varData_1575)));
        varData_720(this, varData_1577, varData_722(this, varData_1584, varData_1585).call(this, varData_718(this, varData_1575)));
        varData_720(this, varData_1578, varData_722(this, varData_1590, varData_1591).call(this, varData_718(this, varData_1575)));
        varData_720(this, varData_1579, varData_722(this, varData_1588, varData_1589).call(this, varData_718(this, varData_1576), varData_718(this, varData_1577)));
        varData_720(this, varData_1580, varData_722(this, varData_1586, varData_1587).call(this, varData_718(this, varData_1576), varData_718(this, varData_1577)));
        if (!this.options.useGrid) {
          return;
        }
        varData_720(this, varData_1581, new varData_1547(varData_718(this, varData_1575), varData_718(this, varData_1576), varData_718(this, varData_1577), varData_718(this, varData_1579), varData_718(this, varData_1578), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_1574 = /* @__PURE__ */ new WeakMap();
    varData_1575 = /* @__PURE__ */ new WeakMap();
    varData_1576 = /* @__PURE__ */ new WeakMap();
    varData_1577 = /* @__PURE__ */ new WeakMap();
    varData_1578 = /* @__PURE__ */ new WeakMap();
    varData_1579 = /* @__PURE__ */ new WeakMap();
    varData_1580 = /* @__PURE__ */ new WeakMap();
    varData_1581 = /* @__PURE__ */ new WeakMap();
    varData_1582 = /* @__PURE__ */ new WeakSet();
    varData_1583 = function(param_1) {
      let varData_1597 = Number.MAX_SAFE_INTEGER;
      let varData_1598 = Number.MAX_SAFE_INTEGER;
      for (const varData_1599 of param_1) {
        varData_1597 = Math.min(varData_1597, varData_1599.x);
        varData_1598 = Math.min(varData_1598, varData_1599.y);
      }
      return new varData_1643(varData_1597, varData_1598);
    };
    varData_1584 = /* @__PURE__ */ new WeakSet();
    varData_1585 = function(param_1) {
      let varData_1600 = Number.MIN_SAFE_INTEGER;
      let varData_1601 = Number.MIN_SAFE_INTEGER;
      for (const varData_1602 of param_1) {
        varData_1600 = Math.max(varData_1600, varData_1602.x);
        varData_1601 = Math.max(varData_1601, varData_1602.y);
      }
      return new varData_1643(varData_1600, varData_1601);
    };
    varData_1586 = /* @__PURE__ */ new WeakSet();
    varData_1587 = function(param_1, param_2) {
      const varData_1603 = param_2.add(param_1);
      return varData_1603.divideScalar(2);
    };
    varData_1588 = /* @__PURE__ */ new WeakSet();
    varData_1589 = function(param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_1590 = /* @__PURE__ */ new WeakSet();
    varData_1591 = function(param_1) {
      let varData_1604 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length - 1; loopIdx < param_1.length; loopIdx_1 = loopIdx++) {
        const varData_1605 = param_1[loopIdx];
        const varData_1606 = param_1[loopIdx_1];
        varData_1604 += varData_1605.x * varData_1606.y;
        varData_1604 -= varData_1605.y * varData_1606.x;
      }
      return Math.abs(varData_1604 / 2);
    };
    var varData_1607;
    var varData_1608;
    var varData_1609 = class _0x86d146 {
      constructor(param_1, param_2) {
        varData_719(this, varData_1607);
        const varData_1610 = varData_722(this, varData_1607, varData_1608).call(this, param_1, param_2);
        this.x = varData_1610.x;
        this.y = varData_1610.y;
      }
      equals(param_1, param_2) {
        const varData_1611 = varData_722(this, varData_1607, varData_1608).call(this, param_1, param_2);
        return this.x === varData_1611.x && this.y === varData_1611.y;
      }
      add(param_1, param_2, param_3) {
        const varData_1612 = varData_722(this, varData_1607, varData_1608).call(this, param_1, param_2);
        const varData_1613 = this.x + (param_3 ? varData_1612.x * param_3 : varData_1612.x);
        const varData_1614 = this.y + (param_3 ? varData_1612.y * param_3 : varData_1612.y);
        return new _0x86d146(varData_1613, varData_1614);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1615 = this.x + param_1;
        const varData_1616 = this.y + param_1;
        return new _0x86d146(varData_1615, varData_1616);
      }
      sub(param_1, param_2, param_3) {
        const varData_1617 = varData_722(this, varData_1607, varData_1608).call(this, param_1, param_2);
        const varData_1618 = this.x - (param_3 ? varData_1617.x * param_3 : varData_1617.x);
        const varData_1619 = this.y - (param_3 ? varData_1617.y * param_3 : varData_1617.y);
        return new _0x86d146(varData_1618, varData_1619);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1620 = this.x - param_1;
        const varData_1621 = this.y - param_1;
        return new _0x86d146(varData_1620, varData_1621);
      }
      multiply(param_1, param_2) {
        const varData_1622 = varData_722(this, varData_1607, varData_1608).call(this, param_1, param_2);
        const varData_1623 = this.x * varData_1622.x;
        const varData_1624 = this.y * varData_1622.y;
        return new _0x86d146(varData_1623, varData_1624);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1625 = this.x * param_1;
        const varData_1626 = this.y * param_1;
        return new _0x86d146(varData_1625, varData_1626);
      }
      divide(param_1, param_2) {
        const varData_1627 = varData_722(this, varData_1607, varData_1608).call(this, param_1, param_2);
        const varData_1628 = this.x / varData_1627.x;
        const varData_1629 = this.y / varData_1627.y;
        return new _0x86d146(varData_1628, varData_1629);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1630 = this.x / param_1;
        const varData_1631 = this.y / param_1;
        return new _0x86d146(varData_1630, varData_1631);
      }
      round() {
        const varData_1632 = Math.round(this.x);
        const varData_1633 = Math.round(this.y);
        return new _0x86d146(varData_1632, varData_1633);
      }
      floor() {
        const varData_1634 = Math.floor(this.x);
        const varData_1635 = Math.floor(this.y);
        return new _0x86d146(varData_1634, varData_1635);
      }
      ceil() {
        const varData_1636 = Math.ceil(this.x);
        const varData_1637 = Math.ceil(this.y);
        return new _0x86d146(varData_1636, varData_1637);
      }
      getCenter(param_1, param_2) {
        const varData_1638 = varData_722(this, varData_1607, varData_1608).call(this, param_1, param_2);
        return new _0x86d146((this.x + varData_1638.x) / 2, (this.y + varData_1638.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0x562561, _0x174006] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0x562561 !== "number" || typeof _0x174006 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x44dc53, _0x234eb1] = [this.x - _0x562561, this.y - _0x174006];
        return Math.sqrt(_0x44dc53 * _0x44dc53 + _0x234eb1 * _0x234eb1);
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
        var varData_1639 = {
          x: this.x,
          y: this.y
        };
        return varData_1639;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1607 = /* @__PURE__ */ new WeakSet();
    varData_1608 = function(param_1, param_2) {
      let varData_1640 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_1609 || param_1 instanceof varData_1513) {
        varData_1640 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1641 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_1640 = varData_1641;
      } else if (typeof param_1 === "object") {
        varData_1640 = param_1;
      } else {
        var varData_1642 = {
          x: param_1,
          y: param_2
        };
        varData_1640 = varData_1642;
      }
      if (typeof varData_1640.x !== "number" || typeof varData_1640.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1640;
    };
    var varData_1643 = varData_1609;
    var varData_1644 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_1645 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_1646 = ([_0x2c1252, _0xd84879, _0x1951fd], [_0x3ba01f, _0x4346e2, _0x2a9e9f]) => {
      const [_0x264a33, _0x5cd152, _0x30a8cf] = [_0x2c1252 - _0x3ba01f, _0xd84879 - _0x4346e2, _0x1951fd - _0x2a9e9f];
      return Math.sqrt(_0x264a33 * _0x264a33 + _0x5cd152 * _0x5cd152 + _0x30a8cf * _0x30a8cf);
    };
    var varData_1647 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_1648 = (param_1, param_2) => {
      if (param_1 instanceof varData_1643) {
        return param_1;
      } else if (param_1 instanceof varData_1513) {
        return new varData_1643(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_1643(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1643(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1643(param_1, param_2);
    };
    var varData_1649 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_1513) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_1513(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1513(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1513(param_1, param_2, param_3);
    };
    var varData_1650 = (param_1, param_2) => {
      let varData_1651 = 0;
      const varData_1652 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        const varData_1653 = param_2[loopIdx];
        const varData_1654 = param_2[(loopIdx + 1) % param_2.length];
        if (varData_1653.y <= param_1.y) {
          if (varData_1654.y > param_1.y && varData_1652(varData_1653, varData_1654, param_1) > 0) {
            varData_1651++;
          }
        } else if (varData_1654.y <= param_1.y && varData_1652(varData_1653, varData_1654, param_1) < 0) {
          varData_1651--;
        }
      }
      return varData_1651;
    };
    var varData_1655 = {
      clamp: varData_1644,
      getMapRange: varData_1645,
      getDistance: varData_1646,
      getRandomNumber: varData_1647,
      parseVector2: varData_1648,
      parseVector3: varData_1649,
      windingNumber: varData_1650
    };
    var varData_1656 = varData_1655;
    var varData_1657 = {};
    var varData_1658 = {
      ArrUtils: () => varData_1664
    };
    varData_712(varData_1657, varData_1658);
    var varData_1659 = (param_1) => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const varData_1660 = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[varData_1660]] = [param_1[varData_1660], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_1661 = (param_1, param_2) => {
      const varData_1662 = [];
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_1662.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return varData_1662;
    };
    var varData_1663 = {
      shuffleArray: varData_1659,
      getRandomElements: varData_1661
    };
    var varData_1664 = varData_1663;
    function handleAction_100(param_1, param_2) {
      const varData_1665 = "_";
      const varData_1666 = handleAction_101((param_1_1, param_2_1, ..._0x2940c2) => {
        return param_1(param_1_1, ..._0x2940c2);
      }, param_2);
      return {
        get: function(..._0x408351) {
          return varData_1666.get(varData_1665, ..._0x408351);
        },
        reset: function() {
          varData_1666.reset(varData_1665);
        }
      };
    }
    function handleAction_101(param_1, param_2) {
      const varData_1667 = param_2.timeToLive || 6e4;
      const varData_1668 = {};
      const varData_1669 = param_2.immediateResolve || false;
      async function handleAction_102(param_1_1, ..._0x3b4022) {
        let varData_1670 = varData_1668[param_1_1];
        if (!varData_1670) {
          varData_1670 = {
            value: null,
            lastUpdated: 0
          };
          varData_1668[param_1_1] = varData_1670;
        }
        const timestamp = Date.now();
        if (varData_1670.lastUpdated === 0 || timestamp - varData_1670.lastUpdated > varData_1667) {
          const [_0x464c3a, _0x31ca06] = await param_1(varData_1670, param_1_1, ..._0x3b4022);
          if (_0x464c3a) {
            varData_1670.lastUpdated = timestamp;
            varData_1670.value = _0x31ca06;
          }
          return _0x31ca06;
        }
        if (varData_1669) {
          return Promise.resolve(varData_1670.value);
        } else {
          return await new Promise((param_1_2) => setTimeout(() => param_1_2(varData_1670.value), 0));
        }
      }
      return {
        get: async function(param_1_1, ..._0xaa8fee) {
          return await handleAction_102(param_1_1, ..._0xaa8fee);
        },
        reset: function(param_1_1) {
          const varData_1671 = varData_1668[param_1_1];
          if (varData_1671) {
            varData_1671.lastUpdated = 0;
          }
        },
        clear: function() {
          for (const varData_1672 in varData_1668) {
            delete varData_1668[varData_1672];
          }
        }
      };
    }
    function handleAction_103() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_131();
      } else {
        return new varData_704(4).toString();
      }
    }
    function handleAction_104(param_1) {
      return varData_158(param_1, varData_158.URL);
    }
    function handleAction_105(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_1673 = Date.now() - timestamp > param_2;
          if (param_1() || varData_1673) {
            clearInterval(intervalId);
            return param_1_1(varData_1673);
          }
        }, 1);
      });
    }
    function handleAction_106(param_1) {
      return new Promise((param_1_1) => setTimeout(() => param_1_1(), param_1));
    }
    function handleAction_107() {
      return handleAction_106(0);
    }
    var varData_1674 = {
      cache: handleAction_100,
      cacheableMap: handleAction_101,
      waitForCondition: handleAction_105,
      getUUID: handleAction_103,
      getStringHash: handleAction_104,
      wait: handleAction_106,
      waitForNextFrame: handleAction_107,
      deflate: varData_694,
      inflate: varData_698,
      ...varData_1497,
      ...varData_1657
    };
    var varData_1675 = varData_1674;
    var varData_1676 = ((param_1) => {
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
    })(varData_1676 || {});
    var varData_1677 = {};
    var varData_1678 = (param_1, param_2) => "__cfx_export_" + param_1 + "_" + param_2;
    var varData_1679 = new Proxy((param_1, param_2) => {
      const varData_1680 = (param_1_1, ..._0xc8e04a) => {
        const varData_1681 = param_2(..._0xc8e04a);
        if (varData_1681 instanceof Promise) {
          varData_1681.then((param_1_2) => param_1_1(param_1_2));
        } else {
          param_1_1(varData_1681);
        }
      };
      const resourceName_12 = GetCurrentResourceName();
      if (resourceName_12 == void 0) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      }
      on(varData_1678(resourceName_12, param_1), (param_1_1) => {
        param_1_1(varData_1680);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1677[param_2] == void 0) {
          varData_1677[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1682 = param_2_1 + "_async";
            return (..._0x3f67c3) => {
              return new Promise(async (param_1_2, param_2_2) => {
                const varData_1683 = await varData_1675.waitForCondition(() => GetResourceState(param_2) === "started", 6e4);
                if (varData_1683) {
                  return param_2_2("Resource " + param_2 + " is not running");
                }
                if (varData_1677[param_2][varData_1682] === void 0) {
                  emit(varData_1678(param_2, param_2_1), (param_1_3) => {
                    varData_1677[param_2][varData_1682] = param_1_3;
                  });
                  const varData_1684 = await varData_1675.waitForCondition(() => varData_1677[param_2][varData_1682] !== void 0, 1e3);
                  if (varData_1684) {
                    return param_2_2("Failed to get export " + param_2_1 + " from resource " + param_2);
                  }
                }
                try {
                  varData_1677[param_2][varData_1682](param_1_2, ..._0x3f67c3);
                } catch (err) {
                  param_2_2(err);
                }
              });
            };
          }
        });
      }
    });
    var varData_1685 = new Proxy((param_1, param_2) => {
      const resourceName_12 = GetCurrentResourceName();
      if (resourceName_12 == void 0) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      } else if (typeof param_2 !== "function") {
        throw new Error("Callback is not a function");
      } else if (typeof param_1 !== "string") {
        throw new Error("Export name must be a string");
      }
      on(varData_1678(resourceName_12, param_1), (param_1_1) => {
        param_1_1(param_2);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1677[param_2] == void 0) {
          varData_1677[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1686 = param_2_1 + "_sync";
            if (varData_1677[param_2][varData_1686] === void 0) {
              emit(varData_1678(param_2, param_2_1), (param_1_2) => {
                varData_1677[param_2][varData_1686] = param_1_2;
              });
              if (varData_1677[param_2][varData_1686] === void 0) {
                if (GetResourceState(param_2) !== "started") {
                  throw new Error("Resource " + param_2 + " is not running");
                } else {
                  throw new Error("No such export " + param_2_1 + " in resource " + param_2);
                }
              }
            }
            return (..._0x1245fa) => {
              try {
                return varData_1677[param_2][varData_1686](..._0x1245fa);
              } catch (err) {
                throw new Error("An error occurred while calling export " + param_2_1 + " of resource " + param_2 + " - see above for details");
              }
            };
          }
        });
      }
    });
    on("onResourceStop", (param_1) => varData_1677[param_1] = void 0);
    var varData_1687 = {
      Async: varData_1679,
      Sync: varData_1685
    };
    var varData_1688 = varData_1687;
    var dataMap_1 = /* @__PURE__ */ new Map();
    var dataSet = /* @__PURE__ */ new Set();
    var resourceName_1 = GetCurrentResourceName();
    on("np-config:configLoaded", (param_1, param_2) => {
      dataSet.add(param_1);
      if (!dataMap_1.has(param_1)) {
        return;
      }
      dataMap_1.set(param_1, param_2);
    });
    function handleAction_108(param_1) {
      if (param_1 instanceof Array) {
        return param_1.every((param_1_1) => dataSet.has(param_1_1));
      }
      return dataSet.has(param_1);
    }
    function handleAction_109(param_1, param_2) {
      if (!dataMap_1.has(param_1)) {
        const varData_1689 = varData_1688.Sync.config.GetModuleConfig(param_1);
        if (varData_1689 === void 0) {
          return;
        }
        dataMap_1.set(param_1, varData_1689);
        if (!dataSet.has(param_1)) {
          dataSet.add(param_1);
        }
      }
      const varData_1690 = dataMap_1.get(param_1);
      if (param_2) {
        if (varData_1690 == null) {
          return void 0;
        } else {
          return varData_1690[param_2];
        }
      } else {
        return varData_1690;
      }
    }
    function handleAction_110(param_1) {
      return handleAction_109(resourceName_1, param_1);
    }
    function handleAction_111() {
      return varData_1688.Sync.config.IsConfigReady();
    }
    var varData_1691 = {
      IsConfigLoaded: handleAction_108,
      GetModuleConfig: handleAction_109,
      GetResourceConfig: handleAction_110,
      IsConfigReady: handleAction_111
    };
    var varData_1692 = varData_1691;
    var varData_1693 = varData_716(varData_1495());
    var varData_1694;
    var varData_1695;
    var varData_1696;
    var varData_1697;
    var varData_1698;
    var varData_1699;
    var varData_1700;
    var varData_1701;
    var varData_1702;
    var varData_1703;
    var varData_1704;
    var varData_1705;
    var varData_1706;
    var varData_1707;
    var varData_1708;
    var varData_1709;
    var varData_1710;
    var varData_1711;
    var varData_1712;
    var varData_1713;
    var varData_1714 = class {
      constructor(param_1, param_2) {
        varData_719(this, varData_1698);
        varData_719(this, varData_1700);
        varData_719(this, varData_1702);
        varData_719(this, varData_1704);
        varData_719(this, varData_1706);
        varData_719(this, varData_1708);
        varData_719(this, varData_1710);
        varData_719(this, varData_1712);
        varData_719(this, varData_1694, void 0);
        varData_719(this, varData_1695, void 0);
        varData_719(this, varData_1696, void 0);
        varData_719(this, varData_1697, {});
        const varData_1715 = varData_722(this, varData_1706, varData_1707).call(this, param_1);
        const varData_1716 = varData_722(this, varData_1710, varData_1711).call(this, varData_1715, param_2);
        const [_0x132da4, _0x54d025, _0x5241ca] = varData_1716.split(":").map((param_1_1) => param_1_1.length > 0 ? param_1_1 : void 0);
        varData_720(this, varData_1694, _0x132da4);
        varData_720(this, varData_1695, _0x54d025);
        varData_720(this, varData_1696, _0x5241ca);
      }
      hashString(param_1) {
        return param_1;
        var varData_1717;
        const varData_1718 = varData_718(this, varData_1698, varData_1699);
        const varData_1719 = (varData_1717 = varData_718(this, varData_1697)[varData_1718]) == null ? void 0 : varData_1717[param_1];
        if (varData_1719) {
          return varData_1719;
        }
        if (!varData_718(this, varData_1697)[varData_1718]) {
          varData_718(this, varData_1697)[varData_1718] = {};
        }
        const varData_1720 = varData_722(this, varData_1704, varData_1705).call(this, (0, varData_1693.HmacMD5)(param_1, varData_1718).toString());
        varData_718(this, varData_1697)[varData_1718][param_1] = varData_1720;
        if (IsDuplicityVersion()) {
          console.log("[SDK] Hash Debug | Event: " + param_1 + " | Hash: " + varData_1720);
        }
        return varData_1720;
      }
      encode(param_1) {
        return JSON.stringify(param_1);
        let varData_1721;
        const varData_1722 = varData_718(this, varData_1702, varData_1703);
        try {
          varData_1721 = varData_722(this, varData_1708, varData_1709).call(this, JSON.stringify(param_1), varData_1722);
        } catch (err) {
          console.error("Failed to encode payload");
        }
        return varData_1721;
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
        let varData_1723;
        const varData_1724 = varData_718(this, varData_1700, varData_1701);
        try {
          varData_1723 = JSON.parse(varData_722(this, varData_1710, varData_1711).call(this, param_1, varData_1724));
        } catch (err) {
          console.error("Failed to decode payload");
        }
        return varData_1723;
      }
    };
    varData_1694 = /* @__PURE__ */ new WeakMap();
    varData_1695 = /* @__PURE__ */ new WeakMap();
    varData_1696 = /* @__PURE__ */ new WeakMap();
    varData_1697 = /* @__PURE__ */ new WeakMap();
    varData_1698 = /* @__PURE__ */ new WeakSet();
    varData_1699 = function() {
      return varData_718(this, varData_1694) ?? varData_722(this, varData_1712, varData_1713).call(this);
    };
    varData_1700 = /* @__PURE__ */ new WeakSet();
    varData_1701 = function() {
      return varData_718(this, varData_1695) ?? varData_722(this, varData_1712, varData_1713).call(this);
    };
    varData_1702 = /* @__PURE__ */ new WeakSet();
    varData_1703 = function() {
      return varData_718(this, varData_1696) ?? varData_722(this, varData_1712, varData_1713).call(this);
    };
    varData_1704 = /* @__PURE__ */ new WeakSet();
    varData_1705 = function(param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1693.enc.Base64.stringify(varData_1693.enc.Utf8.parse(param_1));
    };
    varData_1706 = /* @__PURE__ */ new WeakSet();
    varData_1707 = function(param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1693.enc.Utf8.stringify(varData_1693.enc.Base64.parse(param_1));
    };
    varData_1708 = /* @__PURE__ */ new WeakSet();
    varData_1709 = function(param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1693.AES.encrypt(param_1, param_2).toString();
    };
    varData_1710 = /* @__PURE__ */ new WeakSet();
    varData_1711 = function(param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1693.AES.decrypt(param_1, param_2).toString(varData_1693.enc.Utf8);
    };
    varData_1712 = /* @__PURE__ */ new WeakSet();
    varData_1713 = function(_0x8dec82 = 128) {
      return varData_1693.lib.WordArray.random(_0x8dec82 / 8).toString();
    };
    var varData_1725;
    var varData_1726 = class {
      constructor() {
        varData_719(this, varData_1725, void 0);
        const resourceName_2 = GetCurrentResourceName();
        const varData_1727 = varData_1675.getStringHash("__npx_sdk:" + resourceName_2 + ":token");
        const varData_1728 = GetConvar(varData_1727, "");
        varData_720(this, varData_1725, new varData_1714(varData_1728, "0x2CF1B615"));
      }
      on(param_1, param_2) {
        const varData_1729 = varData_718(this, varData_1725).hashString(param_1);
        return on(varData_1729, param_2);
      }
      onNet(param_1, param_2) {
        const varData_1730 = varData_718(this, varData_1725).hashString(param_1);
        onNet(varData_1730, param_2);
        const varData_1731 = varData_718(this, varData_1725).hashString(param_1 + "-c");
        onNet(varData_1731, (param_1_1) => {
          const varData_1732 = varData_1675.inflate(new Uint8Array(param_1_1));
          const varData_1733 = msgpack_unpack(varData_1732);
          return param_2(...varData_1733);
        });
      }
      emit(param_1, ..._0x207f9f) {
        const varData_1734 = varData_718(this, varData_1725).hashString(param_1);
        return emit(varData_1734, ..._0x207f9f);
      }
      emitNet(param_1, ..._0x15fb4e) {
        let varData_1735 = msgpack_pack(_0x15fb4e);
        let varData_1736 = varData_1735.length;
        const varData_1737 = varData_718(this, varData_1725).hashString(param_1);
        if (varData_1736 < 16e3) {
          TriggerServerEventInternal(varData_1737, varData_1735, varData_1735.length);
        } else {
          TriggerLatentServerEventInternal(varData_1737, varData_1735, varData_1735.length, 1024e3);
        }
      }
    };
    varData_1725 = /* @__PURE__ */ new WeakMap();
    var varData_1738 = new varData_1726();
    var varData_1739 = {
      warning: 1,
      log: 2,
      error: 3,
      debug: 4
    };
    var varData_1740 = GetConvar(GetCurrentResourceName() + "_logLevel", "");
    var varData_1741 = GetConvar("sv_loglevel", "warning");
    (() => {
      varData_1741 = (varData_1740 == null ? void 0 : varData_1740.length) > 0 ? varData_1740 : varData_1741;
      if (!varData_1739[varData_1741]) {
        throw new Error("Invalid log level: " + varData_1741);
      }
    })();
    var varData_1742 = () => varData_1739[varData_1741] >= varData_1739.warning;
    var varData_1743 = () => varData_1739[varData_1741] >= varData_1739.log;
    var varData_1744 = () => varData_1739[varData_1741] >= varData_1739.error;
    var varData_1745 = () => varData_1741 === "debug";
    var varData_1746 = {
      warning: (param_1, ..._0x424125) => {
        if (!varData_1742()) {
          return;
        }
        console.log("^3[WARNING] ^7" + param_1, ..._0x424125, "^0");
      },
      log: (param_1, ..._0xb12936) => {
        if (!varData_1743()) {
          return;
        }
        console.log("^5[nopixel] ^7" + param_1, ..._0xb12936, "^0");
      },
      debug: (param_1, ..._0xf9c3cd) => {
        if (!varData_1745()) {
          return;
        }
        console.log("^2[D] " + param_1, ..._0xf9c3cd, "^0");
      },
      error: (param_1, ..._0x2e10f7) => {
        if (!varData_1744()) {
          return;
        }
        console.log("^1[ERROR] " + param_1, ..._0x2e10f7, "^0");
      }
    };
    var varData_1747;
    var varData_1748;
    var varData_1749;
    var varData_1750;
    var varData_1751;
    var varData_1752;
    var varData_1753;
    var varData_1754;
    var varData_1755;
    var varData_1756;
    var varData_1757;
    var varData_1758;
    var varData_1759 = class {
      constructor() {
        varData_719(this, varData_1753);
        varData_719(this, varData_1755);
        varData_719(this, varData_1757);
        varData_719(this, varData_1747, void 0);
        varData_719(this, varData_1748, void 0);
        varData_719(this, varData_1749, void 0);
        varData_719(this, varData_1750, void 0);
        varData_719(this, varData_1751, void 0);
        varData_719(this, varData_1752, void 0);
        varData_720(this, varData_1747, false);
        varData_720(this, varData_1748, /* @__PURE__ */ new Map());
        varData_720(this, varData_1749, /* @__PURE__ */ new Set());
        varData_720(this, varData_1750, GetGameTimer());
        varData_720(this, varData_1751, GetCurrentResourceName());
        const varData_1760 = varData_1675.getStringHash("__npx_sdk:" + varData_718(this, varData_1751) + ":token");
        const varData_1761 = GetConvar(varData_1760, "");
        varData_720(this, varData_1752, new varData_1714(varData_1761, "0x2CF1B615"));
        varData_722(this, varData_1757, varData_1758).call(this);
      }
      register(param_1, param_2) {
        if (varData_718(this, varData_1749).has(param_1)) {
          return varData_1746.error("[RPC] Handler already registered | " + param_1);
        }
        varData_718(this, varData_1749).add(param_1);
        varData_722(this, varData_1753, varData_1754).call(this, "__rpc_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1762;
          let varData_1763;
          const varData_1764 = GetInvokingResource();
          if (varData_1764) {
            return;
          }
          const varData_1765 = varData_718(this, varData_1752).decode(param_1_1);
          if (!(varData_1765 == null ? void 0 : varData_1765.id) || !(varData_1765 == null ? void 0 : varData_1765.origin)) {
            return varData_1746.error("[RPC] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1762 = await param_2(...param_2_1);
            varData_1763 = true;
          } catch (err) {
            varData_1762 = err.message;
            varData_1763 = false;
          }
          varData_722(this, varData_1755, varData_1756).call(this, "__rpc_res:" + varData_1765.origin, varData_1765.id, [varData_1763, varData_1762]);
        });
      }
      execute(param_1, ..._0xa04005) {
        const varData_1766 = {
          id: ++varData_721(this, varData_1750)._,
          origin: varData_718(this, varData_1751)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let timerId = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 6e4);
          var varData_1767 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: timerId
          };
          varData_718(this, varData_1748).set(varData_1766.id, varData_1767);
        });
        promise.finally(() => varData_718(this, varData_1748).delete(varData_1766.id));
        varData_722(this, varData_1755, varData_1756).call(this, "__rpc_req:" + param_1, varData_718(this, varData_1752).encode(varData_1766), _0xa04005);
        return promise;
      }
      executeCustom(param_1, param_2, ..._0x3b4ca3) {
        const varData_1768 = {
          id: ++varData_721(this, varData_1750)._,
          origin: varData_718(this, varData_1751)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let timerId = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 6e4);
          var varData_1769 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: timerId
          };
          varData_718(this, varData_1748).set(varData_1768.id, varData_1769);
        });
        promise.finally(() => varData_718(this, varData_1748).delete(varData_1768.id));
        varData_722(this, varData_1755, varData_1756).call(this, "__rpc_req:" + param_1, varData_718(this, varData_1752).encode(varData_1768), _0x3b4ca3);
        return promise;
      }
    };
    varData_1747 = /* @__PURE__ */ new WeakMap();
    varData_1748 = /* @__PURE__ */ new WeakMap();
    varData_1749 = /* @__PURE__ */ new WeakMap();
    varData_1750 = /* @__PURE__ */ new WeakMap();
    varData_1751 = /* @__PURE__ */ new WeakMap();
    varData_1752 = /* @__PURE__ */ new WeakMap();
    varData_1753 = /* @__PURE__ */ new WeakSet();
    varData_1754 = function(param_1, param_2) {
      const varData_1770 = varData_718(this, varData_1752).hashString(param_1);
      onNet(varData_1770, param_2);
      const varData_1771 = varData_718(this, varData_1752).hashString(param_1 + "-c");
      onNet(varData_1771, (param_1_1) => {
        const varData_1772 = varData_1675.inflate(new Uint8Array(param_1_1));
        const varData_1773 = msgpack_unpack(varData_1772);
        return param_2(...varData_1773);
      });
    };
    varData_1755 = /* @__PURE__ */ new WeakSet();
    varData_1756 = function(param_1, ..._0x490468) {
      let varData_1774 = msgpack_pack(_0x490468);
      let varData_1775 = varData_1774.length;
      const varData_1776 = varData_718(this, varData_1752).hashString(param_1);
      if (varData_1775 < 16e3) {
        TriggerServerEventInternal(varData_1776, varData_1774, varData_1774.length);
      } else {
        TriggerLatentServerEventInternal(varData_1776, varData_1774, varData_1774.length, 1024e3);
      }
    };
    varData_1757 = /* @__PURE__ */ new WeakSet();
    varData_1758 = function() {
      if (varData_718(this, varData_1747)) {
        return varData_1746.error("SDK RPC handlers already initialized");
      }
      varData_722(this, varData_1753, varData_1754).call(this, "__rpc_res:" + varData_718(this, varData_1751), (param_1, [_0x329866, _0x2e1e05]) => {
        const varData_1777 = varData_718(this, varData_1748).get(param_1);
        if (!varData_1777) {
          return;
        }
        clearTimeout(varData_1777.timeout);
        if (_0x329866) {
          varData_1777.resolve(_0x2e1e05);
        } else {
          varData_1777.reject(new Error(_0x2e1e05));
        }
      });
      varData_720(this, varData_1747, true);
      varData_1746.debug("SDK RPC handlers initialized");
    };
    var varData_1778 = new varData_1759();
    var varData_1779 = varData_716(varData_1495());
    var varData_1780 = (_0x352721 = 128) => {
      return varData_1779.lib.WordArray.random(_0x352721 / 8).toString();
    };
    var varData_1781 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1779.AES.encrypt(param_1, param_2).toString();
    };
    var varData_1782 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1779.AES.decrypt(param_1, param_2).toString(varData_1779.enc.Utf8);
    };
    var varData_1783 = (param_1) => {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1779.enc.Base64.stringify(varData_1779.enc.Utf8.parse(param_1));
    };
    var varData_1784 = (param_1, param_2) => {
      return varData_1783((0, varData_1779.HmacMD5)(param_1, param_2).toString());
    };
    var varData_1785 = {};
    var varData_1786 = (param_1, _0x55d80f = varData_1780()) => {
      if (varData_1785[param_1] === void 0) {
        varData_1785[param_1] = varData_1784(param_1, _0x55d80f);
      }
      return varData_1785[param_1];
    };
    var varData_1787 = (param_1, _0xaa7ef6 = varData_1780()) => {
      try {
        return varData_1781(JSON.stringify(param_1), _0xaa7ef6);
      } catch (err) {
        console.error("Failed to encode payload");
      }
    };
    var varData_1788 = (param_1, _0x47c79d = varData_1780()) => {
      try {
        return JSON.parse(varData_1782(param_1, _0x47c79d));
      } catch (err) {
        console.error("Failed to decode payload");
      }
    };
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
    var varData_1801;
    var varData_1802;
    var varData_1803;
    var varData_1804;
    var varData_1805;
    var varData_1806;
    var varData_1807 = class {
      constructor() {
        varData_719(this, varData_1797);
        varData_719(this, varData_1799);
        varData_719(this, varData_1801);
        varData_719(this, varData_1803);
        varData_719(this, varData_1805);
        varData_719(this, varData_1789, void 0);
        varData_719(this, varData_1790, void 0);
        varData_719(this, varData_1791, void 0);
        varData_719(this, varData_1792, void 0);
        varData_719(this, varData_1793, void 0);
        varData_719(this, varData_1794, void 0);
        varData_719(this, varData_1795, void 0);
        varData_719(this, varData_1796, void 0);
        varData_720(this, varData_1789, GetCurrentResourceName());
        varData_720(this, varData_1790, varData_1780(64));
        varData_720(this, varData_1791, varData_1780(64));
        varData_720(this, varData_1792, varData_1780(64));
        varData_720(this, varData_1793, false);
        varData_720(this, varData_1794, 0);
        varData_720(this, varData_1795, []);
        varData_720(this, varData_1796, /* @__PURE__ */ new Map());
        varData_722(this, varData_1797, varData_1798).call(this, "__npx_sdk:init", varData_722(this, varData_1805, varData_1806).bind(this));
      }
      async register(param_1, param_2) {
        varData_722(this, varData_1799, varData_1800).call(this, "__nui_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1808;
          let varData_1809;
          const varData_1810 = varData_1788(param_1_1, varData_718(this, varData_1791));
          if (!(varData_1810 == null ? void 0 : varData_1810.id) || !(varData_1810 == null ? void 0 : varData_1810.resource)) {
            return varData_1746.error("[NUI] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1808 = await param_2(...param_2_1);
            varData_1809 = true;
          } catch (err) {
            varData_1808 = err.message;
            varData_1809 = false;
          }
          varData_722(this, varData_1803, varData_1804).call(this, "__nui_res:" + varData_1810.resource, varData_1810.id, [varData_1809, varData_1808]);
        });
      }
      remove(param_1) {
        const varData_1811 = varData_1786("__nui_req:" + param_1, varData_718(this, varData_1790));
        UnregisterRawNuiCallback(varData_1811);
      }
      async execute(param_1, ..._0x3ba197) {
        const varData_1812 = {
          id: ++varData_721(this, varData_1794)._,
          resource: varData_718(this, varData_1789)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let varData_1813;
          if (varData_718(this, varData_1793)) {
            varData_1813 = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 6e4);
          } else {
            varData_1813 = 0;
          }
          var varData_1814 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: varData_1813
          };
          varData_718(this, varData_1796).set(varData_1812.id, varData_1814);
        });
        promise.finally(() => varData_718(this, varData_1796).delete(varData_1812.id));
        if (!varData_718(this, varData_1793)) {
          var varData_1815 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1812,
            args: _0x3ba197
          };
          varData_718(this, varData_1795).push(varData_1815);
        } else {
          varData_722(this, varData_1803, varData_1804).call(this, "__nui_req:" + param_1, varData_1787(varData_1812, varData_718(this, varData_1792)), _0x3ba197);
        }
        return promise;
      }
      async executeCustom(param_1, param_2, ..._0x2f01db) {
        const varData_1816 = {
          id: ++varData_721(this, varData_1794)._,
          resource: varData_718(this, varData_1789)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let varData_1817;
          if (varData_718(this, varData_1793)) {
            varData_1817 = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 6e4);
          } else {
            varData_1817 = 0;
          }
          var varData_1818 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: varData_1817
          };
          varData_718(this, varData_1796).set(varData_1816.id, varData_1818);
        });
        promise.finally(() => varData_718(this, varData_1796).delete(varData_1816.id));
        if (!varData_718(this, varData_1793)) {
          var varData_1819 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1816,
            args: _0x2f01db
          };
          varData_718(this, varData_1795).push(varData_1819);
        } else {
          varData_722(this, varData_1803, varData_1804).call(this, "__nui_req:" + param_1, varData_1787(varData_1816, varData_718(this, varData_1792)), _0x2f01db);
        }
        return promise;
      }
    };
    varData_1789 = /* @__PURE__ */ new WeakMap();
    varData_1790 = /* @__PURE__ */ new WeakMap();
    varData_1791 = /* @__PURE__ */ new WeakMap();
    varData_1792 = /* @__PURE__ */ new WeakMap();
    varData_1793 = /* @__PURE__ */ new WeakMap();
    varData_1794 = /* @__PURE__ */ new WeakMap();
    varData_1795 = /* @__PURE__ */ new WeakMap();
    varData_1796 = /* @__PURE__ */ new WeakMap();
    varData_1797 = /* @__PURE__ */ new WeakSet();
    varData_1798 = function(param_1, param_2) {
      RegisterNuiCallback(param_1, ({
        args: _0x493511
      }, param_2_1) => {
        param_2_1(true);
        return param_2(..._0x493511);
      });
    };
    varData_1799 = /* @__PURE__ */ new WeakSet();
    varData_1800 = function(param_1, param_2) {
      if (varData_718(this, varData_1793)) {
        const varData_1820 = varData_1786(param_1, varData_718(this, varData_1790));
        return varData_722(this, varData_1797, varData_1798).call(this, varData_1820, param_2);
      }
      var varData_1821 = {
        type: "on",
        event: param_1,
        callback: param_2
      };
      varData_718(this, varData_1795).push(varData_1821);
    };
    varData_1801 = /* @__PURE__ */ new WeakSet();
    varData_1802 = function(param_1, ..._0x43b0bc) {
      var varData_1822 = {
        event: param_1,
        args: _0x43b0bc
      };
      SendNuiMessage(JSON.stringify(varData_1822, null));
    };
    varData_1803 = /* @__PURE__ */ new WeakSet();
    varData_1804 = function(param_1, ..._0x1e28fc) {
      if (varData_718(this, varData_1793)) {
        const varData_1823 = varData_1786(param_1, varData_718(this, varData_1790));
        return varData_722(this, varData_1801, varData_1802).call(this, varData_1823, ..._0x1e28fc);
      }
      var varData_1824 = {
        type: "emit",
        event: param_1,
        args: _0x1e28fc
      };
      varData_718(this, varData_1795).push(varData_1824);
    };
    varData_1805 = /* @__PURE__ */ new WeakSet();
    varData_1806 = async function() {
      varData_720(this, varData_1793, true);
      varData_722(this, varData_1799, varData_1800).call(this, "__nui_res:" + varData_718(this, varData_1789), (param_1, [_0x5c4754, _0x377c64]) => {
        const varData_1825 = varData_718(this, varData_1796).get(param_1);
        if (!varData_1825) {
          return varData_1746.error("[NUI] Invalid response received");
        }
        clearTimeout(varData_1825.timeout);
        if (_0x5c4754) {
          varData_1825.resolve(_0x377c64);
        } else {
          varData_1825.reject(_0x377c64);
        }
      });
      varData_722(this, varData_1801, varData_1802).call(this, "__npx_sdk:ready", varData_1783(varData_718(this, varData_1790) + ":" + varData_718(this, varData_1791) + ":" + varData_718(this, varData_1792)));
      varData_1746.debug("[NUI] SDK initialized");
      for (const varData_1826 of varData_718(this, varData_1795)) {
        if (varData_1826.type === "on") {
          varData_722(this, varData_1799, varData_1800).call(this, varData_1826.event, varData_1826.callback);
        } else if (varData_1826.type === "emit") {
          setTimeout(() => varData_722(this, varData_1803, varData_1804).call(this, varData_1826.event, ...varData_1826.args), 1e3);
        } else if (varData_1826.type === "execute") {
          const varData_1827 = varData_718(this, varData_1796).get(varData_1826.metadata.id);
          if (!varData_1827) {
            varData_1746.error("[RPC] " + varData_1826.event + " - Failed to execute queued RPC call");
            continue;
          }
          varData_1827.timeout = setTimeout(() => varData_1827.reject(new Error("RPC timed out | " + varData_1826.event)), 6e4);
          setTimeout(() => varData_722(this, varData_1803, varData_1804).call(this, varData_1826.event, varData_1787(varData_1826.metadata, varData_718(this, varData_1792)), varData_1826.args), 1e3);
        }
      }
    };
    var varData_1828;
    var varData_1829;
    var varData_1830;
    var varData_1831 = class {
      constructor(param_1) {
        varData_719(this, varData_1828, void 0);
        varData_719(this, varData_1829, void 0);
        varData_719(this, varData_1830, /* @__PURE__ */ new Map());
        varData_720(this, varData_1828, param_1);
        varData_720(this, varData_1829, false);
        const resourceName_2 = GetCurrentResourceName();
        on("onResourceStop", (param_1_1) => {
          if (param_1_1 === resourceName_2) {
            for (const [_0x38c886, _0x43e620] of varData_718(this, varData_1830).entries()) {
              varData_1688.Sync[varData_718(this, varData_1828)].removeNuiEvent(_0x38c886);
            }
          }
        });
        on("onResourceStart", async (param_1_1) => {
          if (param_1_1 === varData_718(this, varData_1828)) {
            await varData_1675.waitForCondition(() => GetResourceState(varData_718(this, varData_1828)) === "started", 1e4);
            if (varData_718(this, varData_1829)) {
              for (const [_0x3fb4dd, _0x27fd51] of varData_718(this, varData_1830).entries()) {
                varData_1688.Sync[varData_718(this, varData_1828)].removeNuiEvent(_0x3fb4dd);
                this.register(_0x3fb4dd, _0x27fd51);
              }
            }
            varData_720(this, varData_1829, true);
          }
          if (param_1_1 === resourceName_2) {
            await varData_1675.waitForCondition(() => GetResourceState(varData_718(this, varData_1828)) === "started", 1e4);
            varData_720(this, varData_1829, true);
          }
        });
      }
      async execute(param_1, ..._0x26b035) {
        return await varData_1688.Async[varData_718(this, varData_1828)].sendNuiEvent(param_1, _0x26b035);
      }
      async register(param_1, param_2) {
        await varData_1675.waitForCondition(() => varData_718(this, varData_1829), 1e4);
        const varData_1832 = varData_1688.Sync[varData_718(this, varData_1828)].registerNuiEvent(param_1, param_2);
        if (varData_1832) {
          varData_718(this, varData_1830).set(param_1, param_2);
        }
      }
    };
    varData_1828 = /* @__PURE__ */ new WeakMap();
    varData_1829 = /* @__PURE__ */ new WeakMap();
    varData_1830 = /* @__PURE__ */ new WeakMap();
    var varData_1833 = class {
      constructor() {
        const varData_1834 = async (param_1, param_2) => {
          return await varData_1839.execute(param_1, ...param_2);
        };
        varData_1688.Async("sendNuiEvent", varData_1834);
        const varData_1835 = (param_1, param_2) => {
          varData_1839.register(param_1, param_2);
          return true;
        };
        varData_1688.Sync("registerNuiEvent", varData_1835);
        const varData_1836 = (param_1) => {
          varData_1839.remove(param_1);
        };
        varData_1688.Sync("removeNuiEvent", varData_1836);
      }
    };
    var varData_1837 = null;
    var varData_1838 = null;
    var varData_1839 = new varData_1807();
    var varData_1840;
    var varData_1841;
    var varData_1842;
    var varData_1843 = class {
      constructor() {
        varData_719(this, varData_1840, void 0);
        varData_719(this, varData_1841, void 0);
        varData_719(this, varData_1842, void 0);
        varData_720(this, varData_1842, false);
        varData_1839.register("__npx_sdk:sockets:init", async () => {
          varData_1746.debug("Sockets", "Initializing sockets...");
          if (varData_718(this, varData_1842)) {
            return {
              url: varData_718(this, varData_1840),
              API_KEY: varData_718(this, varData_1841)
            };
          }
          const varData_1844 = await new Promise((param_1) => {
            emit("__npx_core:sockets:init", param_1);
          });
          if (!(varData_1844 == null ? void 0 : varData_1844.API_URL) || !(varData_1844 == null ? void 0 : varData_1844.API_KEY)) {
            return;
          }
          varData_720(this, varData_1840, varData_1844.API_URL);
          varData_720(this, varData_1841, varData_1844.API_KEY);
          varData_720(this, varData_1842, true);
          varData_1746.debug("Sockets", "Sockets initialized.");
          return varData_1844;
        });
      }
      register(param_1, param_2) {
        varData_1839.execute("__npx_sdk:sockets:register", param_1);
        varData_1839.register("__npx_sdk:sockets:pipe:" + param_1, async (param_1_1) => {
          return param_2(param_1_1);
        });
      }
      async execute(param_1, param_2) {
        return varData_1839.execute("__npx_sdk:sockets:execute", param_1, param_2);
      }
    };
    varData_1840 = /* @__PURE__ */ new WeakMap();
    varData_1841 = /* @__PURE__ */ new WeakMap();
    varData_1842 = /* @__PURE__ */ new WeakMap();
    var varData_1845 = new varData_1843();
    var varData_1846 = {
      HasItem: async (param_1, param_2) => {
        return await varData_1688.Sync.inventory.HasItem(param_1, param_2);
      },
      GetItemStacks: async (param_1, param_2) => {
        return await varData_1688.Sync.inventory.GetItemStacks(param_1, param_2);
      },
      GetAllItemStacks: async (param_1) => {
        return await varData_1688.Sync.inventory.GetAllItemStacks(param_1);
      },
      GetItemList: async () => {
        return await varData_1688.Sync.inventory.GetItemList();
      },
      GetPlayerInventories: async () => {
        return await varData_1688.Sync.inventory.GetPlayerInventories();
      },
      GetPlayerInventoriesWeight: async () => {
        return await varData_1688.Sync.inventory.GetPlayerInventoriesWeight();
      },
      GetWeaponsList: () => {
        return varData_1688.Sync.inventory.GetWeaponsList();
      },
      GetWeapon: (param_1) => {
        return varData_1688.Sync.inventory.GetWeapon(param_1);
      },
      GetWeaponByItemStack: (param_1) => {
        return varData_1688.Sync.inventory.GetWeaponByItemStack(param_1);
      },
      OpenInventory: (param_1, param_2) => {
        varData_1688.Sync.inventory.OpenInventory(param_1, param_2);
      },
      UseBodySlot: (param_1) => {
        return varData_1688.Async.inventory.UseBodySlot(param_1);
      },
      SetBodySlotDisabled: (param_1, param_2, param_3) => {
        varData_1688.Sync.inventory.SetBodySlotDisabled(param_1, param_2, param_3);
      },
      IsBodySlotDisabled: (param_1, param_2) => {
        return varData_1688.Sync.inventory.IsBodySlotDisabled(param_1, param_2);
      }
    };
    var varData_1847 = {};
    var varData_1848 = {
      Activity: () => varData_1925,
      ActivityObjective: () => varData_1899,
      ActivityTask: () => varData_1878,
      Cache: () => varData_1516,
      Group: () => varData_1957,
      GroupManager: () => varData_1982,
      GroupMember: () => varData_1972,
      PolyZone: () => varData_1592,
      Thread: () => varData_1849,
      Vector2: () => varData_1643,
      Vector3: () => varData_1513
    };
    varData_712(varData_1847, varData_1848);
    var varData_1849 = class {
      constructor(param_1, param_2, _0xb0c9d1 = "interval") {
        this.callback = param_1;
        this.delay = param_2;
        this.mode = _0xb0c9d1;
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
        const varData_1850 = this.hooks.get("preStart") ?? [];
        try {
          for (const varData_1851 of varData_1850) {
            if (!this.aborted) {
              await varData_1851.call(this);
            }
          }
        } catch (err) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", err.message);
        }
        if (this.aborted) {
          try {
            const varData_1852 = this.hooks.get("startAborted") ?? [];
            for (const varData_1853 of varData_1852) {
              await varData_1853.call(this);
            }
          } catch (err) {
            console.log("Error while calling start-aborted hook", err.message);
          }
          return;
        }
        this.active = true;
        const varData_1854 = this.hooks.get("active") ?? [];
        switch (this.mode) {
          case "tick": {
            this.threadId = setTick(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const varData_1855 of varData_1854) {
                  await varData_1855.call(this);
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
                for (const varData_1856 of varData_1854) {
                  await varData_1856.call(this);
                }
              } catch (err) {
                console.log("Error while calling active hook", err.message);
              }
            }, this.delay);
            break;
          }
          case "timeout": {
            const varData_1857 = () => {
              if (this.active) {
                this.threadId = setTimeout(async () => {
                  this.tick += 1;
                  try {
                    await this.callback.call(this);
                    for (const varData_1858 of varData_1854) {
                      await varData_1858.call(this);
                    }
                  } catch (err) {
                    console.log("Error while calling active hook", err.message);
                  }
                  return varData_1857();
                }, this.delay);
              }
            };
            varData_1857();
            break;
          }
        }
        const varData_1859 = this.hooks.get("afterStart") ?? [];
        try {
          for (const varData_1860 of varData_1859) {
            await varData_1860.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-start hook", err.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const varData_1861 = this.hooks.get("preStop") ?? [];
        try {
          for (const varData_1862 of varData_1861) {
            if (!this.aborted) {
              await varData_1862.call(this);
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
            const varData_1863 = this.hooks.get("stopAborted") ?? [];
            for (const varData_1864 of varData_1863) {
              await varData_1864.call(this);
            }
          } catch (err) {
            console.log("Error while calling stop-aborted hook", err.message);
          }
          return;
        }
        const varData_1865 = this.hooks.get("afterStop") ?? [];
        try {
          for (const varData_1866 of varData_1865) {
            await varData_1866.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-stop hook", err.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(param_1, param_2) {
        var varData_1867;
        if ((varData_1867 = this.hooks.get(param_1)) == null) {
        } else {
          varData_1867.push(param_2);
        }
      }
      setNextTick(param_1, param_2) {
        this.scheduled[param_1] = this.tick + param_2;
      }
      canTick(param_1) {
        return this.scheduled[param_1] === void 0 || this.tick >= this.scheduled[param_1];
      }
    };
    var varData_1868;
    var varData_1869;
    var varData_1870;
    var varData_1871;
    var varData_1872;
    var varData_1873;
    var varData_1874;
    var varData_1875;
    var varData_1876;
    var varData_1877;
    var varData_1878 = class {
      constructor(param_1, param_2) {
        varData_719(this, varData_1874);
        varData_719(this, varData_1876);
        varData_719(this, varData_1868, void 0);
        varData_719(this, varData_1869, void 0);
        varData_719(this, varData_1870, void 0);
        varData_719(this, varData_1871, void 0);
        varData_719(this, varData_1872, void 0);
        varData_719(this, varData_1873, void 0);
        varData_720(this, varData_1868, param_1.id);
        varData_720(this, varData_1869, param_2);
        varData_720(this, varData_1870, /* @__PURE__ */ new Map());
        varData_720(this, varData_1873, "pending");
        varData_720(this, varData_1871, param_1.required.map((param_1_1) => param_2.objectives.get(param_1_1)));
        varData_720(this, varData_1872, new Map(param_1.objectives.map((param_1_1) => [param_1_1, param_2.objectives.get(param_1_1)])));
        if (param_1.status !== "pending") {
          setTimeout(() => varData_722(this, varData_1874, varData_1875).call(this, param_1.status), 3e3);
        }
        varData_1738.onNet("__npx_activities:" + varData_718(this, varData_1869).id + ":task:" + varData_718(this, varData_1868) + ":statusUpdate", varData_722(this, varData_1874, varData_1875).bind(this));
      }
      get id() {
        return varData_718(this, varData_1868);
      }
      onTaskStarted(param_1) {
        const varData_1879 = varData_718(this, varData_1870).get("onTaskStarted") ?? [];
        if (!varData_718(this, varData_1870).has("onTaskStarted")) {
          varData_718(this, varData_1870).set("onTaskStarted", varData_1879);
        }
        varData_1879.push(param_1);
      }
      onTaskEnded(param_1) {
        const varData_1880 = varData_718(this, varData_1870).get("onTaskEnded") ?? [];
        if (!varData_718(this, varData_1870).has("onTaskEnded")) {
          varData_718(this, varData_1870).set("onTaskEnded", varData_1880);
        }
        varData_1880.push(param_1);
      }
      emitEvent(param_1, ..._0x25d081) {
        return varData_1778.execute("__npx_activities:" + varData_718(this, varData_1869).id + ":task:" + varData_718(this, varData_1868) + ":event", param_1, ..._0x25d081);
      }
      toJSON() {
        return {
          id: varData_718(this, varData_1868),
          status: varData_718(this, varData_1873),
          objectives: [...varData_718(this, varData_1872).keys()],
          required: varData_718(this, varData_1871).map((param_1) => param_1.id)
        };
      }
      destroy() {
        varData_718(this, varData_1870).clear();
      }
    };
    varData_1868 = /* @__PURE__ */ new WeakMap();
    varData_1869 = /* @__PURE__ */ new WeakMap();
    varData_1870 = /* @__PURE__ */ new WeakMap();
    varData_1871 = /* @__PURE__ */ new WeakMap();
    varData_1872 = /* @__PURE__ */ new WeakMap();
    varData_1873 = /* @__PURE__ */ new WeakMap();
    varData_1874 = /* @__PURE__ */ new WeakSet();
    varData_1875 = function(param_1) {
      const varData_1881 = varData_718(this, varData_1873);
      varData_720(this, varData_1873, param_1);
      if (varData_1881 === "pending" && param_1 === "active") {
        varData_722(this, varData_1876, varData_1877).call(this, "onTaskStarted");
      } else if (varData_1881 === "active" && (param_1 === "completed" || param_1 === "failed")) {
        varData_722(this, varData_1876, varData_1877).call(this, "onTaskEnded", param_1 === "completed");
      }
      varData_722(this, varData_1876, varData_1877).call(this, "onStatusUpdate", param_1);
    };
    varData_1876 = /* @__PURE__ */ new WeakSet();
    varData_1877 = function(param_1, ..._0x3fac98) {
      const varData_1882 = varData_718(this, varData_1870).get(param_1);
      if (!varData_1882) {
        return;
      }
      for (const varData_1883 of varData_1882) {
        try {
          varData_1883.call(this, ..._0x3fac98);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1884;
    var varData_1885;
    var varData_1886;
    var varData_1887;
    var varData_1888;
    var varData_1889;
    var varData_1890;
    var varData_1891;
    var varData_1892;
    var varData_1893;
    var varData_1894;
    var varData_1895;
    var varData_1896;
    var varData_1897;
    var varData_1898;
    var varData_1899 = class {
      constructor(param_1, param_2) {
        varData_719(this, varData_1891);
        varData_719(this, varData_1893);
        varData_719(this, varData_1895);
        varData_719(this, varData_1897);
        varData_719(this, varData_1884, void 0);
        varData_719(this, varData_1885, void 0);
        varData_719(this, varData_1886, void 0);
        varData_719(this, varData_1887, void 0);
        varData_719(this, varData_1888, void 0);
        varData_719(this, varData_1889, void 0);
        varData_719(this, varData_1890, void 0);
        varData_720(this, varData_1884, param_1.id);
        varData_720(this, varData_1885, param_1.name);
        varData_720(this, varData_1886, param_1.description);
        varData_720(this, varData_1887, param_2);
        varData_720(this, varData_1888, /* @__PURE__ */ new Map());
        varData_720(this, varData_1889, param_1.status);
        varData_720(this, varData_1890, new Map(Object.entries(param_1.data ?? {})));
        varData_1738.onNet("__npx_activities:" + varData_718(this, varData_1887).id + ":objective:" + varData_718(this, varData_1884) + ":statusUpdate", varData_722(this, varData_1891, varData_1892).bind(this));
        varData_1738.onNet("__npx_activities:" + varData_718(this, varData_1887).id + ":objective:" + varData_718(this, varData_1884) + ":dataUpdate", varData_722(this, varData_1893, varData_1894).bind(this));
        varData_1738.onNet("__npx_activities:" + varData_718(this, varData_1887).id + ":objective:" + varData_718(this, varData_1884) + ":dataSet", varData_722(this, varData_1895, varData_1896).bind(this));
      }
      get id() {
        return varData_718(this, varData_1884);
      }
      get name() {
        return varData_718(this, varData_1885);
      }
      get description() {
        return varData_718(this, varData_1886);
      }
      get status() {
        return varData_718(this, varData_1889);
      }
      get activity() {
        return varData_718(this, varData_1887);
      }
      getData(param_1) {
        return varData_718(this, varData_1890).get(param_1);
      }
      onStatusUpdate(param_1) {
        const varData_1900 = varData_718(this, varData_1888).get("onStatusUpdate") ?? [];
        if (!varData_718(this, varData_1888).has("onStatusUpdate")) {
          varData_718(this, varData_1888).set("onStatusUpdate", varData_1900);
        }
        varData_1900.push(param_1);
      }
      onDataUpdate(param_1) {
        const varData_1901 = varData_718(this, varData_1888).get("onDataUpdate") ?? [];
        if (!varData_718(this, varData_1888).has("onDataUpdate")) {
          varData_718(this, varData_1888).set("onDataUpdate", varData_1901);
        }
        varData_1901.push(param_1);
      }
      toJSON() {
        return {
          id: varData_718(this, varData_1884),
          name: varData_718(this, varData_1885),
          description: varData_718(this, varData_1886),
          status: varData_718(this, varData_1889),
          data: Object.fromEntries(varData_718(this, varData_1890))
        };
      }
      destroy() {
        varData_718(this, varData_1888).clear();
      }
    };
    varData_1884 = /* @__PURE__ */ new WeakMap();
    varData_1885 = /* @__PURE__ */ new WeakMap();
    varData_1886 = /* @__PURE__ */ new WeakMap();
    varData_1887 = /* @__PURE__ */ new WeakMap();
    varData_1888 = /* @__PURE__ */ new WeakMap();
    varData_1889 = /* @__PURE__ */ new WeakMap();
    varData_1890 = /* @__PURE__ */ new WeakMap();
    varData_1891 = /* @__PURE__ */ new WeakSet();
    varData_1892 = function(param_1) {
      varData_720(this, varData_1889, param_1);
      varData_722(this, varData_1897, varData_1898).call(this, "onStatusUpdated", param_1);
    };
    varData_1893 = /* @__PURE__ */ new WeakSet();
    varData_1894 = function(param_1, param_2) {
      varData_718(this, varData_1890).set(param_1, param_2);
      varData_722(this, varData_1897, varData_1898).call(this, "onDataUpdate", param_1, param_2);
    };
    varData_1895 = /* @__PURE__ */ new WeakSet();
    varData_1896 = function(param_1) {
      for (const [_0x4af5d0, _0x5e13b3] of Object.entries(param_1)) {
        varData_718(this, varData_1890).set(_0x4af5d0, _0x5e13b3);
        varData_722(this, varData_1897, varData_1898).call(this, "onDataUpdate", _0x4af5d0, _0x5e13b3);
      }
    };
    varData_1897 = /* @__PURE__ */ new WeakSet();
    varData_1898 = function(param_1, ..._0x117d8b) {
      const varData_1902 = varData_718(this, varData_1888).get(param_1);
      if (!varData_1902) {
        return;
      }
      for (const varData_1903 of varData_1902) {
        try {
          varData_1903.call(this, ..._0x117d8b);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1904;
    var varData_1905;
    var varData_1906;
    var varData_1907;
    var varData_1908;
    var varData_1909;
    var varData_1910;
    var varData_1911;
    var varData_1912;
    var varData_1913;
    var varData_1914;
    var varData_1915;
    var varData_1916;
    var varData_1917;
    var varData_1918;
    var varData_1919;
    var varData_1920;
    var varData_1921;
    var varData_1922;
    var varData_1923;
    var varData_1924;
    var varData_1925 = class {
      constructor(param_1) {
        varData_719(this, varData_1913);
        varData_719(this, varData_1915);
        varData_719(this, varData_1917);
        varData_719(this, varData_1919);
        varData_719(this, varData_1921);
        varData_719(this, varData_1923);
        varData_719(this, varData_1904, void 0);
        varData_719(this, varData_1905, void 0);
        varData_719(this, varData_1906, void 0);
        varData_719(this, varData_1907, void 0);
        varData_719(this, varData_1908, void 0);
        varData_719(this, varData_1909, void 0);
        varData_719(this, varData_1910, void 0);
        varData_719(this, varData_1911, void 0);
        varData_719(this, varData_1912, void 0);
        varData_720(this, varData_1904, param_1.id);
        varData_720(this, varData_1905, param_1.code);
        varData_720(this, varData_1906, param_1.name);
        varData_720(this, varData_1907, param_1.description);
        varData_720(this, varData_1908, /* @__PURE__ */ new Map());
        varData_720(this, varData_1909, "pending");
        varData_720(this, varData_1910, param_1.deadline ? new Date(param_1.deadline) : null);
        varData_720(this, varData_1911, /* @__PURE__ */ new Map());
        varData_720(this, varData_1912, /* @__PURE__ */ new Map());
        if (param_1.status !== "pending") {
          setTimeout(() => varData_722(this, varData_1913, varData_1914).call(this, param_1.status), 3e3);
        }
        param_1.objectives.forEach((param_1_1) => varData_722(this, varData_1915, varData_1916).call(this, param_1_1));
        param_1.tasks.forEach((param_1_1) => varData_722(this, varData_1919, varData_1920).call(this, param_1_1));
        varData_1738.onNet("__npx_activities:" + varData_718(this, varData_1904) + ":statusUpdate", varData_722(this, varData_1913, varData_1914).bind(this));
        varData_1738.onNet("__npx_activities:" + varData_718(this, varData_1904) + ":objectiveAdded", varData_722(this, varData_1915, varData_1916).bind(this));
        varData_1738.onNet("__npx_activities:" + varData_718(this, varData_1904) + ":objectiveRemoved", varData_722(this, varData_1917, varData_1918).bind(this));
        varData_1738.onNet("__npx_activities:" + varData_718(this, varData_1904) + ":taskAdded", varData_722(this, varData_1919, varData_1920).bind(this));
        varData_1738.onNet("__npx_activities:" + varData_718(this, varData_1904) + ":taskRemoved", varData_722(this, varData_1921, varData_1922).bind(this));
      }
      get id() {
        return varData_718(this, varData_1904);
      }
      get status() {
        return varData_718(this, varData_1909);
      }
      get objectives() {
        return varData_718(this, varData_1912);
      }
      on(param_1, param_2) {
        const varData_1926 = varData_718(this, varData_1908).get(param_1) ?? [];
        if (!varData_718(this, varData_1908).has(param_1)) {
          varData_718(this, varData_1908).set(param_1, varData_1926);
        }
        varData_1926.push(param_2);
      }
      toJSON() {
        var varData_1927;
        return {
          id: varData_718(this, varData_1904),
          code: varData_718(this, varData_1905),
          name: varData_718(this, varData_1906),
          description: varData_718(this, varData_1907),
          status: varData_718(this, varData_1909),
          deadline: ((varData_1927 = varData_718(this, varData_1910)) == null ? void 0 : varData_1927.getTime()) ?? null,
          tasks: [...varData_718(this, varData_1911).values()].map((param_1) => param_1.toJSON()),
          objectives: [...varData_718(this, varData_1912).values()].map((param_1) => param_1.toJSON())
        };
      }
      destroy() {
        varData_718(this, varData_1911).forEach((param_1) => param_1.destroy());
        varData_718(this, varData_1912).forEach((param_1) => param_1.destroy());
        varData_718(this, varData_1911).clear();
        varData_718(this, varData_1912).clear();
        varData_718(this, varData_1908).clear();
      }
    };
    varData_1904 = /* @__PURE__ */ new WeakMap();
    varData_1905 = /* @__PURE__ */ new WeakMap();
    varData_1906 = /* @__PURE__ */ new WeakMap();
    varData_1907 = /* @__PURE__ */ new WeakMap();
    varData_1908 = /* @__PURE__ */ new WeakMap();
    varData_1909 = /* @__PURE__ */ new WeakMap();
    varData_1910 = /* @__PURE__ */ new WeakMap();
    varData_1911 = /* @__PURE__ */ new WeakMap();
    varData_1912 = /* @__PURE__ */ new WeakMap();
    varData_1913 = /* @__PURE__ */ new WeakSet();
    varData_1914 = function(param_1) {
      const varData_1928 = varData_718(this, varData_1909);
      varData_720(this, varData_1909, param_1);
      if (varData_1928 === "pending" && param_1 === "active") {
        varData_722(this, varData_1923, varData_1924).call(this, "onActivityStarted");
      } else if (param_1 === "completed" || param_1 === "failed") {
        varData_722(this, varData_1923, varData_1924).call(this, "onActivityEnded", param_1, param_1 === "completed");
      }
      varData_722(this, varData_1923, varData_1924).call(this, "onStatusUpdate", param_1);
    };
    varData_1915 = /* @__PURE__ */ new WeakSet();
    varData_1916 = function(param_1) {
      const varData_1929 = new varData_1899(param_1, this);
      varData_1929.onStatusUpdate((param_1_1) => varData_722(this, varData_1923, varData_1924).call(this, "onObjectiveStatusUpdate", varData_1929, param_1_1));
      varData_1929.onDataUpdate((param_1_1, param_2) => varData_722(this, varData_1923, varData_1924).call(this, "onObjectiveDataUpdate", varData_1929, param_1_1, param_2));
      varData_718(this, varData_1912).set(varData_1929.id, varData_1929);
      varData_722(this, varData_1923, varData_1924).call(this, "onObjectiveAdded", varData_1929);
    };
    varData_1917 = /* @__PURE__ */ new WeakSet();
    varData_1918 = function(param_1) {
      const varData_1930 = varData_718(this, varData_1912).get(param_1.id);
      if (!varData_1930) {
        return;
      }
      varData_718(this, varData_1912).delete(param_1.id);
      varData_722(this, varData_1923, varData_1924).call(this, "onObjectiveRemoved", varData_1930);
      varData_1930.destroy();
    };
    varData_1919 = /* @__PURE__ */ new WeakSet();
    varData_1920 = function(param_1) {
      const varData_1931 = new varData_1878(param_1, this);
      varData_1931.onTaskStarted(() => varData_722(this, varData_1923, varData_1924).call(this, "onTaskStarted", varData_1931));
      varData_1931.onTaskEnded((param_1_1) => varData_722(this, varData_1923, varData_1924).call(this, "onTaskEnded", varData_1931, param_1_1));
      varData_718(this, varData_1911).set(varData_1931.id, varData_1931);
      varData_722(this, varData_1923, varData_1924).call(this, "onTaskAdded", varData_1931);
    };
    varData_1921 = /* @__PURE__ */ new WeakSet();
    varData_1922 = function(param_1) {
      const varData_1932 = varData_718(this, varData_1911).get(param_1.id);
      if (!varData_1932) {
        return;
      }
      varData_718(this, varData_1911).delete(param_1.id);
      varData_722(this, varData_1923, varData_1924).call(this, "onTaskRemoved", varData_1932);
      varData_1932.destroy();
    };
    varData_1923 = /* @__PURE__ */ new WeakSet();
    varData_1924 = function(param_1, ..._0x1a5985) {
      const varData_1933 = varData_718(this, varData_1908).get(param_1);
      if (!varData_1933) {
        return;
      }
      for (const varData_1934 of varData_1933) {
        try {
          varData_1934.call(this, ..._0x1a5985);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1935;
    var varData_1936;
    var varData_1937;
    var varData_1938;
    var varData_1939;
    var varData_1940;
    var varData_1941;
    var varData_1942;
    var varData_1943;
    var varData_1944;
    var varData_1945;
    var varData_1946;
    var varData_1947;
    var varData_1948;
    var varData_1949;
    var varData_1950;
    var varData_1951;
    var varData_1952;
    var varData_1953;
    var varData_1954;
    var varData_1955;
    var varData_1956;
    var varData_1957 = class {
      constructor(param_1) {
        varData_719(this, varData_1943);
        varData_719(this, varData_1945);
        varData_719(this, varData_1947);
        varData_719(this, varData_1949);
        varData_719(this, varData_1951);
        varData_719(this, varData_1953);
        varData_719(this, varData_1955);
        varData_719(this, varData_1935, void 0);
        varData_719(this, varData_1936, void 0);
        varData_719(this, varData_1937, void 0);
        varData_719(this, varData_1938, void 0);
        varData_719(this, varData_1939, void 0);
        varData_719(this, varData_1940, void 0);
        varData_719(this, varData_1941, void 0);
        varData_719(this, varData_1942, void 0);
        varData_720(this, varData_1935, param_1.id);
        varData_720(this, varData_1937, /* @__PURE__ */ new Map());
        varData_720(this, varData_1938, param_1.name);
        varData_720(this, varData_1939, param_1.capacity);
        varData_720(this, varData_1941, null);
        varData_720(this, varData_1942, new Map(Object.entries(param_1.data)));
        varData_720(this, varData_1936, /* @__PURE__ */ new Map());
        varData_720(this, varData_1940, null);
        for (const varData_1958 of param_1.members) {
          const varData_1959 = new varData_1972(varData_1958, this);
          varData_718(this, varData_1936).set(varData_1959.characterId, varData_1959);
          if (varData_1958.isLeader) {
            varData_720(this, varData_1940, varData_1959);
          }
        }
        if (param_1.activity) {
          setTimeout(() => varData_722(this, varData_1953, varData_1954).call(this, param_1.activity), 3e3);
        }
        varData_1738.onNet("__npx_groups:group:" + varData_718(this, varData_1935) + ":data:update", varData_722(this, varData_1945, varData_1946).bind(this));
        varData_1738.onNet("__npx_groups:group:" + varData_718(this, varData_1935) + ":activity:set", varData_722(this, varData_1953, varData_1954).bind(this));
        varData_1738.onNet("__npx_groups:group:" + varData_718(this, varData_1935) + ":group:update", varData_722(this, varData_1943, varData_1944).bind(this));
        varData_1738.onNet("__npx_groups:group:" + varData_718(this, varData_1935) + ":member:joined", varData_722(this, varData_1947, varData_1948).bind(this));
        varData_1738.onNet("__npx_groups:group:" + varData_718(this, varData_1935) + ":member:left", varData_722(this, varData_1949, varData_1950).bind(this));
        varData_1738.onNet("__npx_groups:group:" + varData_718(this, varData_1935) + ":member:update", varData_722(this, varData_1951, varData_1952).bind(this));
      }
      get id() {
        return varData_718(this, varData_1935);
      }
      get name() {
        return varData_718(this, varData_1938);
      }
      get capacity() {
        return varData_718(this, varData_1939);
      }
      get size() {
        return varData_718(this, varData_1936).size;
      }
      get leader() {
        return varData_718(this, varData_1940);
      }
      get members() {
        return [...varData_718(this, varData_1936).values()];
      }
      get activity() {
        return varData_718(this, varData_1941);
      }
      on(param_1, param_2) {
        const varData_1960 = varData_718(this, varData_1937).get(param_1) ?? [];
        if (!varData_718(this, varData_1937).has(param_1)) {
          varData_718(this, varData_1937).set(param_1, varData_1960);
        }
        varData_1960.push(param_2);
      }
      getValue(param_1) {
        return varData_718(this, varData_1942).get(param_1);
      }
      toJSON() {
        var varData_1961;
        return {
          id: varData_718(this, varData_1935),
          name: varData_718(this, varData_1938),
          capacity: varData_718(this, varData_1939),
          activity: ((varData_1961 = varData_718(this, varData_1941)) == null ? void 0 : varData_1961.toJSON()) ?? null,
          members: [...varData_718(this, varData_1936).values()].map((param_1) => param_1.toJSON()),
          data: Object.fromEntries(varData_718(this, varData_1942))
        };
      }
      destroy() {
        varData_718(this, varData_1937).clear();
        varData_718(this, varData_1936).clear();
        varData_718(this, varData_1942).clear();
      }
    };
    varData_1935 = /* @__PURE__ */ new WeakMap();
    varData_1936 = /* @__PURE__ */ new WeakMap();
    varData_1937 = /* @__PURE__ */ new WeakMap();
    varData_1938 = /* @__PURE__ */ new WeakMap();
    varData_1939 = /* @__PURE__ */ new WeakMap();
    varData_1940 = /* @__PURE__ */ new WeakMap();
    varData_1941 = /* @__PURE__ */ new WeakMap();
    varData_1942 = /* @__PURE__ */ new WeakMap();
    varData_1943 = /* @__PURE__ */ new WeakSet();
    varData_1944 = function(param_1) {
      varData_720(this, varData_1938, param_1.name);
      varData_720(this, varData_1939, param_1.capacity);
      varData_722(this, varData_1955, varData_1956).call(this, "group:update", this);
    };
    varData_1945 = /* @__PURE__ */ new WeakSet();
    varData_1946 = function(param_1, param_2) {
      varData_718(this, varData_1942).set(param_1, param_2);
      varData_722(this, varData_1955, varData_1956).call(this, "data:update", param_1, param_2);
    };
    varData_1947 = /* @__PURE__ */ new WeakSet();
    varData_1948 = function(param_1) {
      const varData_1962 = new varData_1972(param_1, this);
      varData_718(this, varData_1936).set(varData_1962.characterId, varData_1962);
      varData_722(this, varData_1955, varData_1956).call(this, "member:joined", varData_1962);
    };
    varData_1949 = /* @__PURE__ */ new WeakSet();
    varData_1950 = function(param_1) {
      const varData_1963 = varData_718(this, varData_1936).get(param_1);
      if (!varData_1963) {
        return;
      }
      varData_718(this, varData_1936).delete(param_1);
      if (varData_718(this, varData_1940) === varData_1963) {
        varData_720(this, varData_1940, null);
      }
      varData_722(this, varData_1955, varData_1956).call(this, "member:left", varData_1963);
    };
    varData_1951 = /* @__PURE__ */ new WeakSet();
    varData_1952 = function(param_1, param_2, param_3) {
      const varData_1964 = varData_718(this, varData_1936).get(param_1);
      if (!varData_1964) {
        return;
      }
      if (varData_1964.serverId !== param_2) {
        varData_1964.updateServerId(param_2);
      }
      if (param_3) {
        varData_720(this, varData_1940, varData_1964);
      }
      varData_722(this, varData_1955, varData_1956).call(this, "member:update", varData_1964);
    };
    varData_1953 = /* @__PURE__ */ new WeakSet();
    varData_1954 = function(param_1) {
      const varData_1965 = param_1 ? new varData_1925(param_1) : null;
      varData_720(this, varData_1941, varData_1965);
      varData_722(this, varData_1955, varData_1956).call(this, "activity:set", varData_1965);
    };
    varData_1955 = /* @__PURE__ */ new WeakSet();
    varData_1956 = function(param_1, ..._0xa02f3a) {
      const varData_1966 = varData_718(this, varData_1937).get(param_1);
      if (!varData_1966) {
        return;
      }
      for (const varData_1967 of varData_1966) {
        try {
          varData_1967.call(this, ..._0xa02f3a);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1968;
    var varData_1969;
    var varData_1970;
    var varData_1971;
    var varData_1972 = class {
      constructor(param_1, param_2) {
        varData_719(this, varData_1968, void 0);
        varData_719(this, varData_1969, void 0);
        varData_719(this, varData_1970, void 0);
        varData_719(this, varData_1971, void 0);
        varData_720(this, varData_1968, param_1.characterId);
        varData_720(this, varData_1969, param_1.name);
        varData_720(this, varData_1970, param_2);
        varData_720(this, varData_1971, param_1.serverId);
      }
      get group() {
        return varData_718(this, varData_1970);
      }
      get characterId() {
        return varData_718(this, varData_1968);
      }
      get name() {
        return varData_718(this, varData_1969);
      }
      get serverId() {
        return varData_718(this, varData_1971);
      }
      get isOnline() {
        return varData_718(this, varData_1971) !== null;
      }
      get isLeader() {
        return varData_718(this, varData_1970).leader === this;
      }
      updateServerId(param_1) {
        varData_720(this, varData_1971, param_1);
      }
      toJSON() {
        return {
          characterId: varData_718(this, varData_1968),
          serverId: varData_718(this, varData_1971),
          name: varData_718(this, varData_1969),
          isLeader: this.isLeader,
          isOnline: this.isOnline
        };
      }
    };
    varData_1968 = /* @__PURE__ */ new WeakMap();
    varData_1969 = /* @__PURE__ */ new WeakMap();
    varData_1970 = /* @__PURE__ */ new WeakMap();
    varData_1971 = /* @__PURE__ */ new WeakMap();
    var varData_1973;
    var varData_1974;
    var varData_1975;
    var varData_1976;
    var varData_1977;
    var varData_1978;
    var varData_1979;
    var varData_1980;
    var varData_1981;
    var varData_1982 = class {
      constructor(param_1) {
        varData_719(this, varData_1976);
        varData_719(this, varData_1978);
        varData_719(this, varData_1980);
        varData_719(this, varData_1973, void 0);
        varData_719(this, varData_1974, void 0);
        varData_719(this, varData_1975, void 0);
        varData_720(this, varData_1973, param_1 ?? GetCurrentResourceName());
        varData_720(this, varData_1974, /* @__PURE__ */ new Map());
        varData_720(this, varData_1975, /* @__PURE__ */ new Map());
        varData_1738.onNet("__npx_groups:manager:" + varData_718(this, varData_1973) + ":addedToGroup", varData_722(this, varData_1976, varData_1977).bind(this));
        varData_1738.onNet("__npx_groups:manager:" + varData_718(this, varData_1973) + ":removedFromGroup", varData_722(this, varData_1978, varData_1979).bind(this));
        on("np-base:clearStates", this.reset.bind(this));
        on("np-spawn:characterSpawned", this.init.bind(this));
        const varData_1983 = varData_1688.Sync.isPed.isPed("cid");
        if (varData_1983) {
          this.init();
        }
      }
      get list() {
        return varData_718(this, varData_1974);
      }
      async init() {
        if (varData_718(this, varData_1974).size > 0) {
          this.reset();
        }
        const varData_1984 = await varData_1778.execute("__npx_groups:manager:" + varData_718(this, varData_1973) + ":init");
        if (!varData_1984) {
          return;
        }
        for (const varData_1985 of varData_1984) {
          varData_722(this, varData_1976, varData_1977).call(this, varData_1985);
        }
        varData_1746.debug("[Group Manager] Initialized! | Groups: " + varData_718(this, varData_1974).size);
      }
      reset() {
        varData_718(this, varData_1974).forEach((param_1) => param_1.destroy());
        varData_718(this, varData_1974).clear();
      }
      on(param_1, param_2) {
        const varData_1986 = varData_718(this, varData_1975).get(param_1) ?? [];
        if (!varData_718(this, varData_1975).has(param_1)) {
          varData_718(this, varData_1975).set(param_1, varData_1986);
        }
        varData_1986.push(param_2);
      }
    };
    varData_1973 = /* @__PURE__ */ new WeakMap();
    varData_1974 = /* @__PURE__ */ new WeakMap();
    varData_1975 = /* @__PURE__ */ new WeakMap();
    varData_1976 = /* @__PURE__ */ new WeakSet();
    varData_1977 = function(param_1) {
      const varData_1987 = new varData_1957(param_1);
      varData_1987.on("activity:set", (param_1_1) => param_1_1 && varData_722(this, varData_1980, varData_1981).call(this, "activityAssigned", varData_1987, param_1_1));
      varData_718(this, varData_1974).set(varData_1987.id, varData_1987);
      varData_722(this, varData_1980, varData_1981).call(this, "addedToGroup", varData_1987);
    };
    varData_1978 = /* @__PURE__ */ new WeakSet();
    varData_1979 = function(param_1) {
      const varData_1988 = varData_718(this, varData_1974).get(param_1);
      if (!varData_1988) {
        return;
      }
      varData_718(this, varData_1974).delete(param_1);
      varData_1988.destroy();
      varData_722(this, varData_1980, varData_1981).call(this, "removedFromGroup", varData_1988.id);
    };
    varData_1980 = /* @__PURE__ */ new WeakSet();
    varData_1981 = function(param_1, ..._0x18441f) {
      const varData_1989 = varData_718(this, varData_1975).get(param_1) ?? [];
      for (const varData_1990 of varData_1989) {
        try {
          varData_1990.call(this, ..._0x18441f);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1991 = {};
    var varData_1992 = {
      GetEntityStateValue: () => handleAction_113,
      GetPlayerStateValue: () => handleAction_116,
      RegisterStatebagChangeHandler: () => handleAction_118,
      SetEntityStateValue: () => handleAction_114,
      SetPlayerStateValue: () => handleAction_117
    };
    varData_712(varData_1991, varData_1992);
    var varData_1993 = new varData_1516(5e3);
    function handleAction_112(param_1) {
      let varData_1994 = varData_1993.get("ent-" + param_1);
      if (varData_1994) {
        return varData_1994;
      }
      varData_1994 = Entity(param_1);
      varData_1993.set("ent-" + param_1, varData_1994);
      return varData_1994;
    }
    function handleAction_113(param_1, param_2) {
      const varData_1995 = handleAction_112(param_1);
      return varData_1995.state[param_2];
    }
    function handleAction_114(param_1, param_2, param_3, _0x1c1bb = false) {
      const varData_1996 = handleAction_112(param_1);
      varData_1996.state.set(param_2, param_3, _0x1c1bb);
    }
    function handleAction_115(param_1) {
      let varData_1997 = varData_1993.get("ply-" + param_1);
      if (varData_1997) {
        return varData_1997;
      }
      varData_1997 = Player(param_1);
      varData_1993.set("ply-" + param_1, varData_1997);
      return varData_1997;
    }
    function handleAction_116(param_1, param_2) {
      const varData_1998 = handleAction_115(param_1);
      return varData_1998.state[param_2];
    }
    function handleAction_117(param_1, param_2, param_3, _0x2dadde = false) {
      const varData_1999 = handleAction_115(param_1);
      varData_1999.state.set(param_2, param_3, _0x2dadde);
    }
    function handleAction_118(param_1, param_2, param_3, param_4) {
      return AddStateBagChangeHandler(param_1, null, async function(param_1_1, param_2_1, param_3_1, param_4_1, param_5) {
        if (param_3 && !param_5) {
          return;
        }
        const varData_2000 = param_1_1.startsWith("player");
        const varData_2001 = parseInt(param_1_1.substring(7));
        const varData_2002 = varData_2000 ? GetPlayerFromStateBagName(param_1_1) : GetEntityFromStateBagName(param_1_1);
        if (!varData_2002) {
          return;
        }
        const varData_2003 = varData_2000 ? NetworkGetPlayerIndexFromPed(varData_2002) === PlayerId() : NetworkGetEntityOwner(varData_2002) === PlayerId();
        if (param_2 && !varData_2003) {
          return;
        }
        param_4(varData_2001, varData_2002, param_3_1);
      });
    }
    var varData_2004 = {};
    var varData_2005 = {
      GetFuelLevel: () => handleAction_126,
      GetIdentifier: () => handleAction_123,
      GetMetadata: () => handleAction_122,
      HasKey: () => handleAction_121,
      IsVinScratched: () => handleAction_124,
      SwapSeat: () => handleAction_125,
      TurnOffEngine: () => handleAction_120,
      TurnOnEngine: () => handleAction_119
    };
    varData_712(varData_2004, varData_2005);
    function handleAction_119(param_1) {
      varData_1688.Sync["np-vehicles"].TurnOnEngine(param_1);
    }
    function handleAction_120(param_1) {
      varData_1688.Sync["np-vehicles"].TurnOffEngine(param_1);
    }
    function handleAction_121(param_1) {
      return varData_1688.Sync["np-vehicles"].HasVehicleKey(param_1);
    }
    function handleAction_122(param_1, param_2) {
      const varData_2006 = handleAction_113(param_1, "data");
      if (param_2) {
        if (varData_2006 == null) {
          return void 0;
        } else {
          return varData_2006[param_2];
        }
      } else {
        return varData_2006;
      }
    }
    function handleAction_123(param_1) {
      return handleAction_113(param_1, "vin");
    }
    function handleAction_124(param_1) {
      return handleAction_113(param_1, "vinScratched");
    }
    function handleAction_125(param_1, param_2) {
      varData_1688.Sync["np-vehicles"].SwapVehicleSeat(param_1, param_2);
    }
    function handleAction_126(param_1) {
      return handleAction_122(param_1, "fuel") ?? 0;
    }
    var varData_2007 = {};
    var varData_2008 = {
      GetUIFocus: () => handleAction_131,
      RegisterUICallback: () => handleAction_127,
      SendUIAppMessage: () => handleAction_129,
      SendUIMessage: () => handleAction_128,
      SetUIFocus: () => handleAction_130
    };
    varData_712(varData_2007, varData_2008);
    var varData_2009 = [];
    function handleAction_127(param_1, param_2) {
      AddEventHandler("_npx_uiReq:" + param_1, param_2);
      exports["np-ui"].RegisterUIEvent(param_1);
      varData_2009.push(param_1);
    }
    function handleAction_128(param_1) {
      exports["np-ui"].SendUIMessage(param_1);
    }
    function handleAction_129(param_1, param_2) {
      var varData_2010 = {
        source: "np-nui",
        app: param_1,
        data: param_2
      };
      exports["np-ui"].SendUIMessage(varData_2010);
    }
    function handleAction_130(param_1, param_2) {
      exports["np-ui"].SetUIFocus(param_1, param_2);
    }
    function handleAction_131() {
      return exports["np-ui"].GetUIFocus();
    }
    AddEventHandler("_npx_uiReady", () => {
      varData_2009.forEach((param_1) => exports["np-ui"].RegisterUIEvent(param_1));
    });
    var varData_2011 = {};
    var varData_2012 = {
      Manager: () => varData_2041
    };
    varData_712(varData_2011, varData_2012);
    var varData_2013;
    var varData_2014;
    var varData_2015;
    var varData_2016;
    var varData_2017;
    var varData_2018;
    var varData_2019;
    var varData_2020;
    var varData_2021;
    var varData_2022;
    var varData_2023;
    var varData_2024;
    var varData_2025;
    var varData_2026;
    var varData_2027;
    var varData_2028;
    var varData_2029;
    var varData_2030;
    var varData_2031;
    var varData_2032;
    var varData_2033;
    var varData_2034;
    var varData_2035;
    var varData_2036;
    var varData_2037;
    var varData_2038;
    var varData_2039;
    var varData_2040;
    var varData_2041 = class {
      constructor(param_1, param_2) {
        varData_719(this, varData_2017);
        varData_719(this, varData_2019);
        varData_719(this, varData_2021);
        varData_719(this, varData_2023);
        varData_719(this, varData_2025);
        varData_719(this, varData_2027);
        varData_719(this, varData_2029);
        varData_719(this, varData_2031);
        varData_719(this, varData_2033);
        varData_719(this, varData_2035);
        varData_719(this, varData_2037);
        varData_719(this, varData_2039);
        varData_719(this, varData_2013, void 0);
        varData_719(this, varData_2014, void 0);
        varData_719(this, varData_2015, null);
        varData_719(this, varData_2016, void 0);
        varData_720(this, varData_2013, param_1);
        varData_720(this, varData_2014, param_2);
        varData_720(this, varData_2016, null);
        varData_718(this, varData_2014).on("addedToGroup", varData_722(this, varData_2025, varData_2026).bind(this));
        varData_718(this, varData_2014).on("removedFromGroup", varData_722(this, varData_2027, varData_2028).bind(this));
        varData_1738.on("jobs:app:ready", () => {
          if (!varData_718(this, varData_2016)) {
            return;
          }
          varData_722(this, varData_2029, varData_2030).call(this, varData_718(this, varData_2016));
        });
        varData_1738.on("jobs:jobChanged", (param_1_1) => {
          varData_720(this, varData_2015, param_1_1);
          if (!varData_718(this, varData_2016)) {
            return;
          }
          const varData_2042 = (param_1_1 == null ? void 0 : param_1_1.id) === varData_718(this, varData_2013);
          if (!varData_2042) {
            return varData_722(this, varData_2027, varData_2028).call(this, varData_718(this, varData_2016).id);
          }
          varData_722(this, varData_2029, varData_2030).call(this, varData_718(this, varData_2016));
        });
        varData_1738.onNet("__npx_jobs:" + varData_718(this, varData_2013) + ":groups:invite:request", varData_722(this, varData_2019, varData_2020).bind(this));
        varData_1738.onNet("__npx_jobs:" + varData_718(this, varData_2013) + ":groups:invite:received", varData_722(this, varData_2017, varData_2018).bind(this));
        varData_1738.onNet("__npx_jobs:" + varData_718(this, varData_2013) + ":groups:invite:response", varData_722(this, varData_2021, varData_2022).bind(this));
        varData_1738.onNet("__npx_jobs:" + varData_718(this, varData_2013) + ":groups:invite:aborted", varData_722(this, varData_2023, varData_2024).bind(this));
      }
      get group() {
        return varData_718(this, varData_2016);
      }
      async sendGroupInvite(param_1) {
        if (!varData_718(this, varData_2015) || varData_718(this, varData_2015).id !== varData_718(this, varData_2013)) {
          return;
        }
        const [_0xa5f09e, _0x5bc73e] = await varData_1778.execute("jobs:app:" + varData_718(this, varData_2013) + ":groups:invite:send", param_1);
        if (!_0xa5f09e) {
          return varData_2129.phoneNotification("Group Invite", _0x5bc73e, true);
        }
        varData_2129.phoneNotification("Group Invite", "Invite sent!", true);
        varData_1746.debug("[Job APP] Invite sent! " + _0x5bc73e);
      }
      async sendGroupJoinRequest(param_1) {
        if (!varData_718(this, varData_2015) || varData_718(this, varData_2015).id !== varData_718(this, varData_2013)) {
          return;
        }
        const [_0x390653, _0x42cf1b] = await varData_1778.execute("jobs:app:" + varData_718(this, varData_2013) + ":groups:invite:request", param_1);
        if (!_0x390653) {
          return varData_2129.phoneNotification("Group Invite", _0x42cf1b, true);
        }
        varData_2129.phoneNotification("Group Invite", "Join request sent!", true);
        varData_1746.debug("[Job APP] Join request sent! " + _0x42cf1b);
      }
    };
    varData_2013 = /* @__PURE__ */ new WeakMap();
    varData_2014 = /* @__PURE__ */ new WeakMap();
    varData_2015 = /* @__PURE__ */ new WeakMap();
    varData_2016 = /* @__PURE__ */ new WeakMap();
    varData_2017 = /* @__PURE__ */ new WeakSet();
    varData_2018 = async function(param_1, param_2) {
      varData_1746.debug("[Job APP] Invite received! " + param_1 + " " + param_2);
      const varData_2043 = 'Received an invite to join the group "' + param_2 + '"';
      const varData_2044 = await varData_2129.phoneConfirmation("Group Invite", varData_2043, "users", 3e4);
      const [_0x281162, _0x4201aa] = await varData_1778.execute("jobs:app:" + varData_718(this, varData_2013) + ":groups:invite:response", param_1, varData_2044);
      if (!_0x281162) {
        return varData_2129.phoneNotification("Group Invite", _0x4201aa, true);
      }
    };
    varData_2019 = /* @__PURE__ */ new WeakSet();
    varData_2020 = async function(param_1, param_2) {
      varData_1746.debug("[Job APP] Join request received! " + param_1 + " " + param_2);
      const varData_2045 = "Received a group join request from " + param_2;
      const varData_2046 = await varData_2129.phoneConfirmation("Group Invite", varData_2045, "users", 3e4);
      const [_0x5cf178, _0x1a291b] = await varData_1778.execute("jobs:app:" + varData_718(this, varData_2013) + ":groups:invite:response", param_1, varData_2046);
      if (!_0x5cf178) {
        return varData_2129.phoneNotification("Group Invite", _0x1a291b, true);
      }
    };
    varData_2021 = /* @__PURE__ */ new WeakSet();
    varData_2022 = function(param_1, param_2) {
      varData_1746.debug("[Job APP] Invite response received! " + param_1 + " " + param_2);
    };
    varData_2023 = /* @__PURE__ */ new WeakSet();
    varData_2024 = function(param_1, param_2) {
      varData_1746.debug("[Job APP] Invite aborted! " + param_1 + " " + param_2);
    };
    varData_2025 = /* @__PURE__ */ new WeakSet();
    varData_2026 = function(param_1) {
      varData_720(this, varData_2016, param_1);
      varData_718(this, varData_2016).on("group:update", varData_722(this, varData_2029, varData_2030).bind(this));
      varData_718(this, varData_2016).on("activity:set", varData_722(this, varData_2037, varData_2038).bind(this, param_1));
      varData_718(this, varData_2016).on("data:update", varData_722(this, varData_2039, varData_2040).bind(this, param_1));
      varData_718(this, varData_2016).on("member:joined", varData_722(this, varData_2031, varData_2032).bind(this, param_1));
      varData_718(this, varData_2016).on("member:left", varData_722(this, varData_2033, varData_2034).bind(this, param_1));
      varData_718(this, varData_2016).on("member:update", varData_722(this, varData_2035, varData_2036).bind(this, param_1));
      varData_2007.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_718(this, varData_2013),
        group: param_1.toJSON()
      });
      varData_1746.debug("[Job APP] Added to group!");
    };
    varData_2027 = /* @__PURE__ */ new WeakSet();
    varData_2028 = function(param_1) {
      varData_720(this, varData_2016, null);
      varData_2007.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_718(this, varData_2013),
        group: null
      });
      varData_1746.debug("[Job APP] Removed from group!");
    };
    varData_2029 = /* @__PURE__ */ new WeakSet();
    varData_2030 = function(param_1) {
      if (varData_718(this, varData_2016) !== param_1) {
        return varData_1746.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_2007.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_718(this, varData_2013),
        group: param_1.toJSON()
      });
      varData_1746.debug("[Job APP] Updated group!");
    };
    varData_2031 = /* @__PURE__ */ new WeakSet();
    varData_2032 = function(param_1, param_2) {
      if (varData_718(this, varData_2016) !== param_1) {
        return varData_1746.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_2007.SendUIAppMessage("phone", {
        action: "jobs:group:addMember",
        jobId: varData_718(this, varData_2013),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1746.debug("[Job APP] Added member to group!");
    };
    varData_2033 = /* @__PURE__ */ new WeakSet();
    varData_2034 = function(param_1, param_2) {
      if (varData_718(this, varData_2016) !== param_1) {
        return varData_1746.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_2007.SendUIAppMessage("phone", {
        action: "jobs:group:removeMember",
        jobId: varData_718(this, varData_2013),
        groupId: param_1.id,
        memberId: param_2.characterId
      });
      varData_1746.debug("[Job APP] Removed member from group!");
    };
    varData_2035 = /* @__PURE__ */ new WeakSet();
    varData_2036 = function(param_1, param_2) {
      if (varData_718(this, varData_2016) !== param_1) {
        return varData_1746.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_2007.SendUIAppMessage("phone", {
        action: "jobs:group:updateMember",
        jobId: varData_718(this, varData_2013),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1746.debug("[Job APP] Updated member in group!");
    };
    varData_2037 = /* @__PURE__ */ new WeakSet();
    varData_2038 = function(param_1, param_2) {
      if (varData_718(this, varData_2016) !== param_1) {
        return varData_1746.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      const varData_2047 = (param_2 == null ? void 0 : param_2.toJSON()) ?? null;
      varData_2007.SendUIAppMessage("phone", {
        action: "jobs:group:updateActivity",
        jobId: varData_718(this, varData_2013),
        groupId: param_1.id,
        activity: varData_2047
      });
      varData_1746.debug("[Job APP] Updated activity for group!");
    };
    varData_2039 = /* @__PURE__ */ new WeakSet();
    varData_2040 = function(param_1, param_2, param_3) {
      if (varData_718(this, varData_2016) !== param_1) {
        return varData_1746.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      } else if (param_2 !== "status") {
        return;
      }
      varData_2007.SendUIAppMessage("phone", {
        action: "jobs:group:updateStatus",
        jobId: varData_718(this, varData_2013),
        groupId: param_1.id,
        status: param_3
      });
      varData_1746.debug("[Job APP] Updated status for group!");
    };
    var varData_2048 = async (param_1) => {
      const varData_2049 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasModelLoaded(varData_2049)) {
        return true;
      }
      RequestModel(varData_2049);
      const varData_2050 = await varData_1675.waitForCondition(() => HasModelLoaded(varData_2049), 3e3);
      return !varData_2050;
    };
    var varData_2051 = async (param_1) => {
      if (HasAnimDictLoaded(param_1)) {
        return true;
      }
      RequestAnimDict(param_1);
      const varData_2052 = await varData_1675.waitForCondition(() => HasAnimDictLoaded(param_1), 3e3);
      return !varData_2052;
    };
    var varData_2053 = async (param_1) => {
      if (HasClipSetLoaded(param_1)) {
        return true;
      }
      RequestClipSet(param_1);
      const varData_2054 = await varData_1675.waitForCondition(() => HasClipSetLoaded(param_1), 3e3);
      return !varData_2054;
    };
    var varData_2055 = async (param_1) => {
      if (HasStreamedTextureDictLoaded(param_1)) {
        return true;
      }
      RequestStreamedTextureDict(param_1, true);
      const varData_2056 = await varData_1675.waitForCondition(() => HasStreamedTextureDictLoaded(param_1), 3e3);
      return !varData_2056;
    };
    var varData_2057 = async (param_1, param_2, param_3) => {
      const varData_2058 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasWeaponAssetLoaded(varData_2058)) {
        return true;
      }
      RequestWeaponAsset(varData_2058, param_2, param_3);
      const varData_2059 = await varData_1675.waitForCondition(() => HasWeaponAssetLoaded(varData_2058), 3e3);
      return !varData_2059;
    };
    var varData_2060 = async (param_1) => {
      if (HasNamedPtfxAssetLoaded(param_1)) {
        return true;
      }
      RequestNamedPtfxAsset(param_1);
      const varData_2061 = await varData_1675.waitForCondition(() => HasNamedPtfxAssetLoaded(param_1), 3e3);
      return !varData_2061;
    };
    var varData_2062 = {
      loadModel: varData_2048,
      loadTexture: varData_2055,
      loadAnim: varData_2051,
      loadClipSet: varData_2053,
      loadWeaponAsset: varData_2057,
      loadNamedPtfxAsset: varData_2060
    };
    var varData_2063 = varData_2062;
    var varData_2064 = (param_1, ..._0x44a181) => {
      switch (param_1) {
        case "coord": {
          const [_0x5797d7, _0x452d60, _0x47cbec] = _0x44a181;
          return AddBlipForCoord(_0x5797d7, _0x452d60, _0x47cbec);
        }
        case "area": {
          const [_0x57aced, _0x493205, _0x185e5c, _0x929305, _0x5434fd] = _0x44a181;
          return AddBlipForArea(_0x57aced, _0x493205, _0x185e5c, _0x929305, _0x5434fd);
        }
        case "radius": {
          const [_0x217bfc, _0x3c77e0, _0x13405f, _0x19a2c7] = _0x44a181;
          return AddBlipForRadius(_0x217bfc, _0x3c77e0, _0x13405f, _0x19a2c7);
        }
        case "pickup": {
          const [_0x704fd4] = _0x44a181;
          return AddBlipForPickup(_0x704fd4);
        }
        case "entity": {
          const [_0x367871] = _0x44a181;
          return AddBlipForEntity(_0x367871);
        }
        default: {
          console.error(new Error("Invalid Blip Type"));
          return 0;
        }
      }
    };
    var varData_2065 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
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
    var varData_2066 = {
      createBlip: varData_2064,
      applyBlipSettings: varData_2065
    };
    var varData_2067 = varData_2066;
    var dataSet_1 = /* @__PURE__ */ new Set();
    var dataMap_2 = /* @__PURE__ */ new Map();
    var dataSet_2 = /* @__PURE__ */ new Set();
    on("np-polyzone:enter", (param_1, param_2) => {
      dataSet_1.add(param_1);
      if (param_2 == null ? void 0 : param_2.id) {
        dataSet_1.add(param_1 + "-" + param_2.id);
      }
      if (dataSet_2.has(param_1)) {
        varData_1738.emitNet("__sdk:zones:" + param_1 + ":enter", param_2);
      }
      const varData_2068 = dataMap_2.get(param_1 + "-enter");
      if (varData_2068 === void 0) {
        return;
      }
      for (const varData_2069 of varData_2068) {
        try {
          varData_2069(param_2);
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
        varData_1738.emitNet("__sdk:zones:" + param_1 + ":exit", param_2);
      }
      const varData_2070 = dataMap_2.get(param_1 + "-exit");
      if (varData_2070 === void 0) {
        return;
      }
      for (const varData_2071 of varData_2070) {
        try {
          varData_2071(param_2);
        } catch (err) {
          console.log(err);
        }
      }
    });
    var varData_2072 = (param_1, param_2) => {
      return dataSet_1.has(param_2 ? param_1 + "-" + param_2 : param_1);
    };
    var varData_2073 = (param_1, param_2) => {
      const varData_2074 = param_1 + "-enter";
      const varData_2075 = dataMap_2.get(varData_2074) ?? [];
      if (!dataMap_2.has(varData_2074)) {
        dataMap_2.set(varData_2074, varData_2075);
      }
      varData_2075.push(param_2);
    };
    var varData_2076 = (param_1, param_2) => {
      const varData_2077 = param_1 + "-exit";
      const varData_2078 = dataMap_2.get(varData_2077) ?? [];
      if (!dataMap_2.has(varData_2077)) {
        dataMap_2.set(varData_2077, varData_2078);
      }
      varData_2078.push(param_2);
    };
    var varData_2079 = (param_1, param_2, param_3, param_4, _0x149876 = {}) => {
      var varData_2080 = {
        ...param_4
      };
      varData_2080.data = _0x149876;
      varData_2080.id = param_1;
      const varData_2081 = varData_2080;
      varData_2081.data.id = param_1;
      exports["np-polyzone"].AddPolyZone(param_2, param_3, varData_2081);
    };
    var varData_2082 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x51ac62 = {}) => {
      var varData_2083 = {
        ...param_6
      };
      varData_2083.data = _0x51ac62;
      varData_2083.id = param_1;
      const varData_2084 = varData_2083;
      varData_2084.data.id = param_1;
      exports["np-polyzone"].AddBoxZone(param_2, param_3, param_4, param_5, varData_2084);
    };
    var varData_2085 = (param_1, param_2, param_3, param_4, param_5, _0x5cd6b6 = {}) => {
      var varData_2086 = {
        ...param_5
      };
      varData_2086.data = _0x5cd6b6;
      varData_2086.id = param_1;
      const varData_2087 = varData_2086;
      varData_2087.data.id = param_1;
      exports["np-polyzone"].AddCircleZone(param_2, param_3, param_4, varData_2087);
    };
    var varData_2088 = (param_1, param_2, param_3, param_4, _0x186b3a = {}) => {
      var varData_2089 = {
        ...param_4
      };
      varData_2089.data = _0x186b3a;
      const varData_2090 = varData_2089;
      varData_2090.data.id = param_1;
      exports["np-polyzone"].AddEntityZone(param_2, param_3, varData_2090);
    };
    var varData_2091 = (param_1, param_2) => {
      exports["np-polyzone"].RemoveZone(param_1, param_2);
      dataSet_1.delete(param_1 + "-" + param_2);
      dataSet_2.delete(param_1);
    };
    var varData_2092 = (param_1) => {
      dataSet_2.add(param_1);
    };
    var varData_2093 = {
      isActive: varData_2072,
      onEnter: varData_2073,
      onExit: varData_2076,
      addPolyZone: varData_2079,
      addBoxZone: varData_2082,
      addCircleZone: varData_2085,
      addEntityZone: varData_2088,
      removeZone: varData_2091,
      setAsNetworked: varData_2092
    };
    var varData_2094 = varData_2093;
    var varData_2095 = (param_1, param_2, param_3, param_4) => {
      var varData_2096 = {
        id: param_1,
        coords: [param_2.x, param_2.y, param_2.z],
        options: param_3,
        context: param_4
      };
      const varData_2097 = varData_2096;
      globalThis.exports.interactions.AddInteraction(varData_2097);
    };
    var varData_2098 = (param_1, param_2, param_3, param_4) => {
      var varData_2099 = {
        id: param_1,
        options: param_3,
        context: param_4
      };
      const varData_2100 = varData_2099;
      globalThis.exports.interactions.AddInteractionByModel(param_2, varData_2100);
    };
    var varData_2101 = (param_1, param_2, param_3) => {
      var varData_2102 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2103 = varData_2102;
      varData_2103.context.isPlayer = true;
      globalThis.exports.interactions.AddPedInteraction(varData_2103);
    };
    var varData_2104 = (param_1, param_2, param_3) => {
      var varData_2105 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2106 = varData_2105;
      globalThis.exports.interactions.AddPedInteraction(varData_2106);
    };
    var varData_2107 = (param_1) => {
      return globalThis.exports.interactions.DoesInteractionExists(param_1);
    };
    var varData_2108 = (param_1, param_2, param_3) => {
      var varData_2109 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2110 = varData_2109;
      globalThis.exports.interactions.AddVehicleInteraction(varData_2110);
    };
    var varData_2111 = (param_1) => {
      globalThis.exports.interactions.RemoveInteraction(param_1);
    };
    var varData_2112 = (param_1) => {
      globalThis.exports.interactions.RemoveVehicleInteraction(param_1);
    };
    var varData_2113 = (param_1) => {
      globalThis.exports.interactions.RemovePedInteraction(param_1);
    };
    var varData_2114 = (param_1, param_2, _0x51b975 = false, _0xfc0eb9 = null, _0x23b086 = true, _0x11ba7f = null) => {
      return new Promise((param_1_1) => {
        globalThis.exports["np-taskbar"].taskBar(param_1, param_2, _0x51b975, _0x23b086, _0x11ba7f, false, param_1_1, _0xfc0eb9 == null ? void 0 : _0xfc0eb9.distance, _0xfc0eb9 == null ? void 0 : _0xfc0eb9.entity);
      });
    };
    var varData_2115 = (param_1, param_2, param_3, param_4) => {
      return new Promise((param_1_1) => {
        globalThis.exports["np-phone"].DoPhoneConfirmation(param_1, param_2, param_3, param_1_1, param_4);
      });
    };
    var varData_2116 = (param_1, param_2, _0x3e353a = true, _0x261a1c = "home-screen") => {
      var varData_2117 = {
        action: "notification",
        target_app: _0x261a1c,
        title: param_1,
        body: param_2,
        show_even_if_app_active: _0x3e353a
      };
      var varData_2118 = {
        source: "np-nui",
        app: "phone",
        data: varData_2117
      };
      globalThis.exports["np-ui"].SendUIMessage(varData_2118);
    };
    var varData_2119 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x3552ea = 0, _0x1c9d16 = true) => {
      SetTextColour(param_4[0], param_4[1], param_4[2], param_4[3]);
      if (_0x1c9d16) {
        SetTextOutline();
      }
      SetTextScale(0, param_5);
      SetTextFont(param_6 ?? 0);
      SetTextJustification(_0x3552ea);
      if (_0x3552ea === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(param_3 ?? "Dummy text");
      EndTextCommandDisplayText(param_1, param_2);
    };
    var varData_2120 = (param_1, param_2, param_3, param_4, _0x4941d1 = 4, _0x4c7b22 = true, param_7) => {
      SetDrawOrigin(param_1.x, param_1.y, param_1.z, 0);
      const varData_2121 = Math.max(varData_1656.getMapRange([0, 10], [0.4, 0.25], param_2), 0.1);
      varData_2119(0, 0, param_3, param_4, varData_2121, _0x4941d1, 0, _0x4c7b22);
      if (param_7) {
        DrawRect(2e-3, param_7.height / 2, param_7.width, param_7.height, param_7.color[0], param_7.color[1], param_7.color[2], param_7.color[3]);
      }
      ClearDrawOrigin();
    };
    var varData_2122 = (param_1, param_2, param_3, param_4) => {
      globalThis.exports.contacts.open(param_1, param_2, param_3, param_4, true);
    };
    var varData_2123 = (param_1) => {
      globalThis.exports.hud.AddOrUpdateHudBar(param_1);
    };
    var varData_2124 = (param_1) => {
      globalThis.exports.hud.RemoveHudBar(param_1);
    };
    async function handleAction_132(param_1) {
      const varData_2125 = (param_1_1) => {
        for (const varData_2126 of param_1) {
          if (varData_2126._type === "number" && isNaN(param_1_1[varData_2126.name])) {
            return false;
          }
          if (varData_2126._type === "text" && typeof param_1_1[varData_2126.name] !== "string") {
            return false;
          }
        }
        return true;
      };
      return await varData_1688.Sync["np-ui"].OpenInputMenu(param_1, varData_2125);
    }
    async function handleAction_133(param_1, param_2) {
      const varData_2127 = {
        info: 1,
        error: 2
      };
      emit("DoLongHudText", param_1, varData_2127[param_2]);
    }
    var varData_2128 = {
      addInteraction: varData_2095,
      addInteractionByModel: varData_2098,
      addPlayerInteraction: varData_2101,
      addPedInteraction: varData_2104,
      addVehicleInteraction: varData_2108,
      removeInteraction: varData_2111,
      removePlayerInteraction: varData_2113,
      removePedInteraction: varData_2113,
      removeVehicleInteraction: varData_2112,
      doesInteractionExists: varData_2107,
      taskBar: varData_2114,
      phoneConfirmation: varData_2115,
      phoneNotification: varData_2116,
      drawText: varData_2119,
      drawText3D: varData_2120,
      customContact: varData_2122,
      AddOrUpdateHudBar: varData_2123,
      RemoveHudBar: varData_2124,
      openInputMenu: handleAction_132,
      displayNotification: handleAction_133
    };
    var varData_2129 = varData_2128;
    var varData_2130 = async (param_1) => {
      return globalThis.exports["np-heists"].BankMinigame(param_1);
    };
    var varData_2131 = async (param_1) => {
      return globalThis.exports["np-heists"].DDRMinigame(param_1);
    };
    var varData_2132 = async (param_1) => {
      return globalThis.exports.skillchecks.DirectionMinigame(param_1);
    };
    var varData_2133 = async () => {
      return globalThis.exports.skillchecks.DrillingMinigame();
    };
    var varData_2134 = async (param_1) => {
      return globalThis.exports.skillchecks.FlipMinigame(param_1);
    };
    var varData_2135 = async (param_1) => {
      return globalThis.exports.skillchecks.FloodMinigame(param_1);
    };
    var varData_2136 = async (param_1) => {
      return globalThis.exports.skillchecks.TaskBarMinigame(param_1.difficulty, param_1.gap, param_1.iterations, param_1.useReverse);
    };
    var varData_2137 = async (param_1) => {
      return globalThis.exports.skillchecks.MazeMinigame(param_1);
    };
    var varData_2138 = async (param_1) => {
      return globalThis.exports.skillchecks.CrackSafe(param_1.locks);
    };
    var varData_2139 = async (param_1) => {
      return globalThis.exports.skillchecks.SameMinigame(param_1);
    };
    var varData_2140 = async (param_1) => {
      return globalThis.exports["np-heists"].ThermiteMinigame(param_1);
    };
    var varData_2141 = async (param_1) => {
      return globalThis.exports.skillchecks.UntangleMinigame(param_1);
    };
    var varData_2142 = async (param_1) => {
      return globalThis.exports["np-heists"].VarMinigame(param_1);
    };
    var varData_2143 = async (param_1) => {
      return globalThis.exports.skillchecks.WordsMinigame(param_1);
    };
    var varData_2144 = async (param_1) => {
      return globalThis.exports.skillchecks.AlphabetMinigame(param_1);
    };
    var varData_2145 = async (param_1) => {
      return globalThis.exports.skillchecks.LockpickMinigame(param_1);
    };
    var varData_2146 = async (param_1) => {
      return globalThis.exports.skillchecks.PinCrackMinigame(param_1);
    };
    var varData_2147 = async (param_1) => {
      return globalThis.exports.skillchecks.TerminalMinigame(param_1);
    };
    var varData_2148 = async (param_1) => {
      return globalThis.exports.skillchecks.SequenceMinigame(param_1);
    };
    var varData_2149 = async (param_1) => {
      return globalThis.exports.skillchecks.SudokuMinigame(param_1);
    };
    var varData_2150 = async (param_1) => {
      return globalThis.exports.skillchecks.MemoryMinigame(param_1);
    };
    var varData_2151 = {
      BankMinigame: varData_2130,
      DDRMinigame: varData_2131,
      DirectionMinigame: varData_2132,
      DrillingMinigame: varData_2133,
      FlipMinigame: varData_2134,
      FloodMinigame: varData_2135,
      TaskBarMinigame: varData_2136,
      MazeMinigame: varData_2137,
      CrackSafe: varData_2138,
      SameMinigame: varData_2139,
      ThermiteMinigame: varData_2140,
      UntangleMinigame: varData_2141,
      VarMinigame: varData_2142,
      WordsMinigame: varData_2143,
      AlphabetMinigame: varData_2144,
      LockpickMinigame: varData_2145,
      PinCrackMinigame: varData_2146,
      TerminalMinigame: varData_2147,
      SequenceMinigame: varData_2148,
      SudokuMinigame: varData_2149,
      MemoryMinigame: varData_2150
    };
    var varData_2152 = varData_2151;
    var varData_2153 = {
      async hasPermission(param_1, _0x2260fd = {}) {
        return await exports.permissions.hasPermission(param_1, _0x2260fd);
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
    var varData_2154 = {
      RegisterAction: (param_1, param_2, param_3) => {
        return varData_1688.Sync.contacts.RegisterAction(param_1, param_2, param_3);
      }
    };
    var varData_2155 = {
      RegisterEditorHandlerClient: async (param_1) => {
        return await globalThis.exports.editor.RegisterEditorHandlerClient(param_1);
      }
    };
    var varData_2156;
    var varData_2157;
    var varData_2158;
    var varData_2159;
    var varData_2160;
    var varData_2161;
    var varData_2162;
    var varData_2163;
    var varData_2164;
    var varData_2165;
    var varData_2166 = class {
      constructor(param_1) {
        varData_719(this, varData_2164);
        varData_719(this, varData_2156, void 0);
        varData_719(this, varData_2157, void 0);
        varData_719(this, varData_2158, void 0);
        varData_719(this, varData_2159, void 0);
        varData_719(this, varData_2160, void 0);
        varData_719(this, varData_2161, void 0);
        varData_719(this, varData_2162, false);
        varData_719(this, varData_2163, []);
        varData_720(this, varData_2156, param_1.codename);
        varData_720(this, varData_2157, param_1.version);
        varData_720(this, varData_2158, GetCurrentResourceName());
        varData_720(this, varData_2159, "nopixel-snr-buns");
        emit("__npx_core:handshake", param_1, varData_722(this, varData_2164, varData_2165).bind(this));
        varData_1839.register("__npx_core:handshake", async (param_1_1) => {
          if (param_1_1.codename !== varData_718(this, varData_2156)) {
            return;
          }
          const varData_2167 = await varData_1675.waitForCondition(() => varData_718(this, varData_2162), 1e4);
          if (varData_2167) {
            return;
          }
          return {
            API_URL: varData_718(this, varData_2160),
            API_KEY: varData_718(this, varData_2161)
          };
        });
      }
      get codename() {
        return varData_718(this, varData_2156);
      }
      get version() {
        return varData_718(this, varData_2157);
      }
      get isReady() {
        return varData_718(this, varData_2162);
      }
      onReady(param_1) {
        if (varData_718(this, varData_2162)) {
          param_1();
        } else {
          varData_718(this, varData_2163).push(param_1);
        }
      }
    };
    varData_2156 = /* @__PURE__ */ new WeakMap();
    varData_2157 = /* @__PURE__ */ new WeakMap();
    varData_2158 = /* @__PURE__ */ new WeakMap();
    varData_2159 = /* @__PURE__ */ new WeakMap();
    varData_2160 = /* @__PURE__ */ new WeakMap();
    varData_2161 = /* @__PURE__ */ new WeakMap();
    varData_2162 = /* @__PURE__ */ new WeakMap();
    varData_2163 = /* @__PURE__ */ new WeakMap();
    varData_2164 = /* @__PURE__ */ new WeakSet();
    varData_2165 = async function(param_1) {
      varData_720(this, varData_2160, param_1.API_URL);
      varData_720(this, varData_2161, param_1.API_KEY);
      varData_720(this, varData_2162, true);
      for (const varData_2168 of varData_718(this, varData_2163)) {
        varData_2168();
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
    var varData_2169 = {
      bun: {
        id: "bun",
        name: "Bun",
        emoji: "\u{1F35E}"
      },
      patty: {
        id: "patty",
        name: "Patty",
        emoji: "\u{1F969}"
      },
      lettuce: {
        id: "lettuce",
        name: "Lettuce",
        emoji: "\u{1F96C}",
        timeModifier: 1
      },
      tomato: {
        id: "tomato",
        name: "Tomato",
        emoji: "\u{1F345}",
        timeModifier: 1
      },
      cheese: {
        id: "cheese",
        name: "Cheese",
        emoji: "\u{1F9C0}",
        timeModifier: 1
      },
      onion: {
        id: "onion",
        name: "Onion",
        emoji: "\u{1F9C5}",
        timeModifier: 1
      },
      pickle: {
        id: "pickle",
        name: "Pickle",
        emoji: "\u{1F952}",
        timeModifier: 1
      },
      ice: {
        id: "ice",
        name: "Ice",
        emoji: "\u{1F9CA}",
        timeModifier: 1
      },
      fries: {
        id: "fries",
        name: "French Fries",
        emoji: "\u{1F35F}"
      }
    };
    ;
    var varData_2170 = null;
    function handleAction_134(param_1) {
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2171 = void 0;
      try {
        for (var loopIdx = Object.values(varData_2169)[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2172 = loopIdx_1.value;
          if (varData_2172.id === param_1) {
            return varData_2172;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2171 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2171;
          }
        }
      }
      return null;
    }
    function handleAction_135(param_1) {
      for (var loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        var varData_2173 = Math.floor(Math.random() * (loopIdx + 1));
        var varData_2174;
        varData_2174 = [param_1[varData_2173], param_1[loopIdx]];
        param_1[loopIdx] = varData_2174[0];
        param_1[varData_2173] = varData_2174[1];
        varData_2174;
      }
      return param_1;
    }
    function handleAction_136(param_1) {
      return param_1 / 1e3 * 0.715;
    }
    ;
    function handleAction_137(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2175 = param_1[param_6](param_7);
        var varData_2176 = varData_2175.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2175.done) {
        param_2(varData_2176);
      } else {
        Promise.resolve(varData_2176).then(param_4, param_5);
      }
    }
    function handleAction_138(param_1) {
      return function() {
        var varData_2177 = this;
        var varData_2178 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2179 = param_1.apply(varData_2177, varData_2178);
          function handleAction_139(param_1_2) {
            handleAction_137(varData_2179, param_1_1, param_2, handleAction_139, handleAction_140, "next", param_1_2);
          }
          function handleAction_140(param_1_2) {
            handleAction_137(varData_2179, param_1_1, param_2, handleAction_139, handleAction_140, "throw", param_1_2);
          }
          handleAction_139(void 0);
        });
      };
    }
    function handleAction_141(param_1, param_2) {
      var varData_2180;
      var varData_2181;
      var varData_2182;
      var varData_2183;
      var varData_2184 = {
        label: 0,
        sent: function() {
          if (varData_2182[0] & 1) {
            throw varData_2182[1];
          }
          return varData_2182[1];
        },
        trys: [],
        ops: []
      };
      varData_2183 = {
        next: handleAction_142(0),
        throw: handleAction_142(1),
        return: handleAction_142(2)
      };
      if (typeof Symbol === "function") {
        varData_2183[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2183;
      function handleAction_142(param_1_1) {
        return function(param_1_2) {
          return handleAction_143([param_1_1, param_1_2]);
        };
      }
      function handleAction_143(param_1_1) {
        if (varData_2180) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2184) {
          try {
            varData_2180 = 1;
            if (varData_2181 && (varData_2182 = param_1_1[0] & 2 ? varData_2181.return : param_1_1[0] ? varData_2181.throw || ((varData_2182 = varData_2181.return) && varData_2182.call(varData_2181), 0) : varData_2181.next) && !(varData_2182 = varData_2182.call(varData_2181, param_1_1[1])).done) {
              return varData_2182;
            }
            varData_2181 = 0;
            if (varData_2182) {
              param_1_1 = [param_1_1[0] & 2, varData_2182.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2182 = param_1_1;
                break;
              case 4:
                varData_2184.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2184.label++;
                varData_2181 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2184.ops.pop();
                varData_2184.trys.pop();
                continue;
              default:
                if (!(varData_2182 = varData_2184.trys, varData_2182 = varData_2182.length > 0 && varData_2182[varData_2182.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2184 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2182 || param_1_1[1] > varData_2182[0] && param_1_1[1] < varData_2182[3])) {
                  varData_2184.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2184.label < varData_2182[1]) {
                  varData_2184.label = varData_2182[1];
                  varData_2182 = param_1_1;
                  break;
                }
                if (varData_2182 && varData_2184.label < varData_2182[2]) {
                  varData_2184.label = varData_2182[2];
                  varData_2184.ops.push(param_1_1);
                  break;
                }
                if (varData_2182[2]) {
                  varData_2184.ops.pop();
                }
                varData_2184.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2184);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2181 = 0;
          } finally {
            varData_2180 = varData_2182 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2185 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2185;
      }
    }
    var varData_2186 = 0;
    function handleAction_144() {
      return;
    }
    varData_2094.onEnter("snr_buns_vehicle_pickup", function() {
      if (!varData_2242) {
        return;
      }
      if (varData_2242.step !== "pickup_vehicle") {
        return;
      }
      varData_1688.Sync["np-ui"].showInteraction("[G] Retrieve Vehicle");
      varData_2186 = setTick(handleAction_138(function() {
        return handleAction_141(this, function(param_1) {
          if (!varData_2242 || varData_2242.step !== "pickup_vehicle") {
            clearTick(varData_2186);
            varData_1688.Sync["np-ui"].hideInteraction();
            varData_2186 = 0;
            return [2];
          }
          if (IsDisabledControlJustReleased(0, 47)) {
            varData_1738.emit("snr-buns:requestDeliveryVehicle");
          }
          return [2];
        });
      }));
    });
    varData_2094.onExit("snr_buns_vehicle_pickup", function() {
      varData_1688.Sync["np-ui"].hideInteraction();
      clearTick(varData_2186);
      varData_2186 = 0;
    });
    ;
    function handleAction_145(param_1, param_2, param_3) {
      DrawMarker(param_2, param_1.x, param_1.y, param_1.z, 0, 0, 0, 0, 0, 0, 6, 3.2, 0.4, param_3.r, param_3.g, param_3.b, param_3.a, false, false, 2, false, null, null, null);
    }
    function handleAction_146(param_1, param_2, param_3, param_4, param_5, param_6, _0x2bd04c = 0) {
      SetTextColour(param_4[0], param_4[1], param_4[2], param_4[3]);
      SetTextOutline();
      SetTextScale(0, param_5);
      SetTextFont(param_6 ?? 0);
      SetTextJustification(_0x2bd04c);
      if (_0x2bd04c === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(param_3 ?? "Dummy text");
      EndTextCommandDisplayText(param_1, param_2);
    }
    function handleAction_147(param_1, param_2, param_3, param_4, _0x2041ef = 4) {
      SetDrawOrigin(param_1.x, param_1.y, param_1.z, 0);
      var varData_2187 = Math.max(handleAction_148(param_2, 0, 10, 0.4, 0.25), 0.1);
      handleAction_146(0, 0, param_3, param_4, varData_2187, _0x2041ef);
      ClearDrawOrigin();
    }
    function handleAction_148(param_1, param_2, param_3, param_4, param_5) {
      return (param_1 - param_2) * (param_5 - param_4) / (param_3 - param_2) + param_4;
    }
    function handleAction_149(param_1, param_2, param_3, param_4, param_5, param_6) {
      var varData_2188 = AddBlipForCoord(param_1.x, param_1.y, param_1.z);
      SetBlipSprite(varData_2188, param_2);
      SetBlipAsShortRange(varData_2188, false);
      BeginTextCommandSetBlipName("STRING");
      SetBlipColour(varData_2188, param_3);
      SetBlipScale(varData_2188, param_4);
      AddTextComponentString(param_5);
      EndTextCommandSetBlipName(varData_2188);
      SetBlipRoute(varData_2188, param_6);
      return varData_2188;
    }
    ;
    function handleAction_150(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_151(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_152(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_150(param_1);
      }
    }
    function handleAction_153(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2189 = param_1[param_6](param_7);
        var varData_2190 = varData_2189.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2189.done) {
        param_2(varData_2190);
      } else {
        Promise.resolve(varData_2190).then(param_4, param_5);
      }
    }
    function handleAction_154(param_1) {
      return function() {
        var varData_2191 = this;
        var varData_2192 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2193 = param_1.apply(varData_2191, varData_2192);
          function handleAction_155(param_1_2) {
            handleAction_153(varData_2193, param_1_1, param_2, handleAction_155, handleAction_156, "next", param_1_2);
          }
          function handleAction_156(param_1_2) {
            handleAction_153(varData_2193, param_1_1, param_2, handleAction_155, handleAction_156, "throw", param_1_2);
          }
          handleAction_155(void 0);
        });
      };
    }
    function handleAction_157(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_158(param_1, param_2) {
      var varData_2194 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2194 == null) {
        return;
      }
      var varData_2195 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2196;
      var varData_2197;
      try {
        for (varData_2194 = varData_2194.call(param_1); !(isEnabled_2 = (varData_2196 = varData_2194.next()).done); isEnabled_2 = true) {
          varData_2195.push(varData_2196.value);
          if (param_2 && varData_2195.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2197 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2194.return != null) {
            varData_2194.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2197;
          }
        }
      }
      return varData_2195;
    }
    function handleAction_159() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_160() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_161(param_1, param_2) {
      return handleAction_151(param_1) || handleAction_158(param_1, param_2) || handleAction_163(param_1, param_2) || handleAction_159();
    }
    function handleAction_162(param_1) {
      return handleAction_152(param_1) || handleAction_157(param_1) || handleAction_163(param_1) || handleAction_160();
    }
    function handleAction_163(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_150(param_1, param_2);
      }
      var varData_2198 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2198 === "Object" && param_1.constructor) {
        varData_2198 = param_1.constructor.name;
      }
      if (varData_2198 === "Map" || varData_2198 === "Set") {
        return Array.from(varData_2198);
      }
      if (varData_2198 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2198)) {
        return handleAction_150(param_1, param_2);
      }
    }
    function handleAction_164(param_1, param_2) {
      var varData_2199;
      var varData_2200;
      var varData_2201;
      var varData_2202;
      var varData_2203 = {
        label: 0,
        sent: function() {
          if (varData_2201[0] & 1) {
            throw varData_2201[1];
          }
          return varData_2201[1];
        },
        trys: [],
        ops: []
      };
      varData_2202 = {
        next: handleAction_165(0),
        throw: handleAction_165(1),
        return: handleAction_165(2)
      };
      if (typeof Symbol === "function") {
        varData_2202[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2202;
      function handleAction_165(param_1_1) {
        return function(param_1_2) {
          return handleAction_166([param_1_1, param_1_2]);
        };
      }
      function handleAction_166(param_1_1) {
        if (varData_2199) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2203) {
          try {
            varData_2199 = 1;
            if (varData_2200 && (varData_2201 = param_1_1[0] & 2 ? varData_2200.return : param_1_1[0] ? varData_2200.throw || ((varData_2201 = varData_2200.return) && varData_2201.call(varData_2200), 0) : varData_2200.next) && !(varData_2201 = varData_2201.call(varData_2200, param_1_1[1])).done) {
              return varData_2201;
            }
            varData_2200 = 0;
            if (varData_2201) {
              param_1_1 = [param_1_1[0] & 2, varData_2201.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2201 = param_1_1;
                break;
              case 4:
                varData_2203.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2203.label++;
                varData_2200 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2203.ops.pop();
                varData_2203.trys.pop();
                continue;
              default:
                if (!(varData_2201 = varData_2203.trys, varData_2201 = varData_2201.length > 0 && varData_2201[varData_2201.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2203 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2201 || param_1_1[1] > varData_2201[0] && param_1_1[1] < varData_2201[3])) {
                  varData_2203.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2203.label < varData_2201[1]) {
                  varData_2203.label = varData_2201[1];
                  varData_2201 = param_1_1;
                  break;
                }
                if (varData_2201 && varData_2203.label < varData_2201[2]) {
                  varData_2203.label = varData_2201[2];
                  varData_2203.ops.push(param_1_1);
                  break;
                }
                if (varData_2201[2]) {
                  varData_2203.ops.pop();
                }
                varData_2203.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2203);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2200 = 0;
          } finally {
            varData_2199 = varData_2201 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2204 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2204;
      }
    }
    var dataMap_3 = /* @__PURE__ */ new Map();
    var varData_2205 = new varData_1847.Thread(function() {
      return {};
    }, 1e3);
    function handleAction_167() {
      return;
    }
    var varData_2206 = (function() {
      var varData_2207 = handleAction_154(function(param_1, param_2) {
        var varData_2208;
        var varData_2209;
        var varData_2210;
        var varData_2211;
        var varData_2212;
        var varData_2213;
        var varData_2214;
        var varData_2215;
        var varData_2216;
        var varData_2217;
        return handleAction_164(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2208 = exports.config.GetModuleConfig("clothing").models;
              varData_2209 = ["player_one", "player_zero", "mp_m_freemode_01", "mp_f_freemode_01"];
              varData_2210 = handleAction_162(varData_2208.male).concat(handleAction_162(varData_2208.female)).filter(function(param_1_2) {
                return !varData_2209.includes(param_1_2);
              });
              varData_2211 = varData_2210[varData_1675.MathUtils.getRandomNumber(0, varData_2210.length)];
              return [4, varData_2063.loadModel(varData_2211)];
            case 1:
              param_1_1.sent();
              varData_2212 = handleAction_161(GetGroundZFor_3dCoord(param_1.x, param_1.y, param_1.z, true), 2);
              varData_2213 = varData_2212[0];
              varData_2214 = varData_2212[1];
              if (varData_2213) {
                param_1.z = varData_2214;
              }
              varData_2215 = CreatePed(4, varData_2211, param_1.x, param_1.y, param_1.z, 0, true, true);
              FreezeEntityPosition(varData_2215, true);
              SetEntityCoordsNoOffset(varData_2215, param_1.x, param_1.y, param_1.z, false, false, false);
              return [4, varData_1675.waitForCondition(function() {
                return HasCollisionLoadedAroundEntity(varData_2215);
              }, 1e4)];
            case 2:
              param_1_1.sent();
              return [4, varData_1675.wait(1e3)];
            case 3:
              param_1_1.sent();
              FreezeEntityPosition(varData_2215, false);
              dataMap_3.set(varData_2215, param_2);
              emit("np-suppression:bypass", varData_2215);
              varData_1688.Sync["np-flags"].SetPedFlag(varData_2215, "isNPC", true);
              varData_2216 = NetworkGetNetworkIdFromEntity(varData_2215);
              varData_2217 = NetworkGetEntityOwner(varData_2215);
              SetNetworkIdCanMigrate(varData_2216, false);
              SetBlockingOfNonTemporaryEvents(varData_2215, true);
              SetPedSeeingRange(varData_2215, 0);
              SetPedHearingRange(varData_2215, 0);
              SetPedFleeAttributes(varData_2215, 0, false);
              SetPedKeepTask(varData_2215, true);
              emit("np-suppression:setEntitySpawnData", varData_2216, varData_2217);
              if (!varData_2205.isActive && dataMap_3.size > 0) {
                varData_2205.start();
              }
              return [2, varData_2215];
          }
        });
      });
      return function _0x38478a(param_1, param_2) {
        return varData_2207.apply(this, arguments);
      };
    })();
    varData_2205.addHook("active", function() {
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2218 = void 0;
      try {
        for (var loopIdx = dataMap_3[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2219 = handleAction_161(loopIdx_1.value, 2);
          var varData_2220 = varData_2219[0];
          var varData_2221 = varData_2219[1];
          if (!DoesEntityExist(varData_2220)) {
            DeleteEntity(varData_2220);
            dataMap_3.delete(varData_2220);
            continue;
          }
          if (varData_2221?.faceEntity && GetScriptTaskStatus(varData_2220, 2277090178) !== 1) {
            TaskTurnPedToFaceEntity(varData_2220, varData_2221.faceEntity, -1);
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2218 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2218;
          }
        }
      }
      if (dataMap_3.size <= 0) {
        varData_2205.stop();
      }
    });
    on("onResourceStop", function(param_1) {
      if (param_1 !== GetCurrentResourceName()) {
        return;
      }
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2222 = void 0;
      try {
        for (var loopIdx = dataMap_3[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2223 = handleAction_161(loopIdx_1.value, 1);
          var varData_2224 = varData_2223[0];
          DeleteEntity(varData_2224);
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2222 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2222;
          }
        }
      }
    });
    ;
    function handleAction_168(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_169(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_170(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2225 = param_1[param_6](param_7);
        var varData_2226 = varData_2225.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2225.done) {
        param_2(varData_2226);
      } else {
        Promise.resolve(varData_2226).then(param_4, param_5);
      }
    }
    function handleAction_171(param_1) {
      return function() {
        var varData_2227 = this;
        var varData_2228 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2229 = param_1.apply(varData_2227, varData_2228);
          function handleAction_172(param_1_2) {
            handleAction_170(varData_2229, param_1_1, param_2, handleAction_172, handleAction_173, "next", param_1_2);
          }
          function handleAction_173(param_1_2) {
            handleAction_170(varData_2229, param_1_1, param_2, handleAction_172, handleAction_173, "throw", param_1_2);
          }
          handleAction_172(void 0);
        });
      };
    }
    function handleAction_174(param_1, param_2) {
      var varData_2230 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2230 == null) {
        return;
      }
      var varData_2231 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2232;
      var varData_2233;
      try {
        for (varData_2230 = varData_2230.call(param_1); !(isEnabled_2 = (varData_2232 = varData_2230.next()).done); isEnabled_2 = true) {
          varData_2231.push(varData_2232.value);
          if (param_2 && varData_2231.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2233 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2230.return != null) {
            varData_2230.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2233;
          }
        }
      }
      return varData_2231;
    }
    function handleAction_175() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_176(param_1, param_2) {
      return handleAction_169(param_1) || handleAction_174(param_1, param_2) || handleAction_177(param_1, param_2) || handleAction_175();
    }
    function handleAction_177(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_168(param_1, param_2);
      }
      var varData_2234 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2234 === "Object" && param_1.constructor) {
        varData_2234 = param_1.constructor.name;
      }
      if (varData_2234 === "Map" || varData_2234 === "Set") {
        return Array.from(varData_2234);
      }
      if (varData_2234 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2234)) {
        return handleAction_168(param_1, param_2);
      }
    }
    function handleAction_178(param_1, param_2) {
      var varData_2235;
      var varData_2236;
      var varData_2237;
      var varData_2238;
      var varData_2239 = {
        label: 0,
        sent: function() {
          if (varData_2237[0] & 1) {
            throw varData_2237[1];
          }
          return varData_2237[1];
        },
        trys: [],
        ops: []
      };
      varData_2238 = {
        next: handleAction_179(0),
        throw: handleAction_179(1),
        return: handleAction_179(2)
      };
      if (typeof Symbol === "function") {
        varData_2238[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2238;
      function handleAction_179(param_1_1) {
        return function(param_1_2) {
          return handleAction_180([param_1_1, param_1_2]);
        };
      }
      function handleAction_180(param_1_1) {
        if (varData_2235) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2239) {
          try {
            varData_2235 = 1;
            if (varData_2236 && (varData_2237 = param_1_1[0] & 2 ? varData_2236.return : param_1_1[0] ? varData_2236.throw || ((varData_2237 = varData_2236.return) && varData_2237.call(varData_2236), 0) : varData_2236.next) && !(varData_2237 = varData_2237.call(varData_2236, param_1_1[1])).done) {
              return varData_2237;
            }
            varData_2236 = 0;
            if (varData_2237) {
              param_1_1 = [param_1_1[0] & 2, varData_2237.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2237 = param_1_1;
                break;
              case 4:
                varData_2239.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2239.label++;
                varData_2236 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2239.ops.pop();
                varData_2239.trys.pop();
                continue;
              default:
                if (!(varData_2237 = varData_2239.trys, varData_2237 = varData_2237.length > 0 && varData_2237[varData_2237.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2239 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2237 || param_1_1[1] > varData_2237[0] && param_1_1[1] < varData_2237[3])) {
                  varData_2239.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2239.label < varData_2237[1]) {
                  varData_2239.label = varData_2237[1];
                  varData_2237 = param_1_1;
                  break;
                }
                if (varData_2237 && varData_2239.label < varData_2237[2]) {
                  varData_2239.label = varData_2237[2];
                  varData_2239.ops.push(param_1_1);
                  break;
                }
                if (varData_2237[2]) {
                  varData_2239.ops.pop();
                }
                varData_2239.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2239);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2236 = 0;
          } finally {
            varData_2235 = varData_2237 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2240 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2240;
      }
    }
    var varData_2241 = 0;
    var varData_2242 = null;
    var dataMap_4 = /* @__PURE__ */ new Map();
    var varData_2243 = new varData_1513(-491.04, -668.06, 32.91);
    function handleAction_181() {
      handleAction_144();
      varData_2129.addVehicleInteraction("snr_buns_return_vehicle", [{
        eventSDK: "snr-buns:returnDeliveryVehicle",
        id: "snr_buns_return_vehicle",
        label: "Return Vehicle",
        parameters: {}
      }], {
        distance: {
          draw: 8,
          use: 5
        },
        isEnabled: function(param_1) {
          if (!param_1 || IsPedInAnyVehicle(PlayerPedId(), false) || !varData_2242?.vehicleNetId) {
            return false;
          }
          var varData_2244 = NetworkGetNetworkIdFromEntity(param_1);
          return varData_2244 === varData_2242?.vehicleNetId && varData_2242.step === "return_vehicle" && varData_2094.isActive("snr_buns_vehicle_pickup");
        }
      });
      varData_2129.addPedInteraction("restaurants_customer", [{
        eventSDK: "snr-buns:deliverCustomerFood",
        id: "restaurants_customer_talk",
        label: "Talk",
        parameters: []
      }], {
        distance: {
          draw: 5,
          use: 3
        },
        isEnabled: function(param_1) {
          if (!param_1 || !varData_2242?.customerNetId) {
            return false;
          }
          var varData_2245 = NetworkGetNetworkIdFromEntity(param_1);
          return varData_2245 === varData_2242?.customerNetId && varData_2242?.step === "deliver_food";
        }
      });
      varData_2094.addBoxZone("1", "snr_buns_vehicle_pickup", varData_2243, 3.2, 6.2, {
        heading: 0,
        minZ: 31.71,
        maxZ: 35.11
      });
      return;
    }
    varData_1778.register("snr-buns:offerDeliveryJob", (function() {
      var varData_2246 = handleAction_171(function(param_1) {
        var varData_2247;
        return handleAction_178(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2129.phoneConfirmation("Snr. Buns", "Delivery offer", "hamburger")];
            case 1:
              varData_2247 = param_1_1.sent();
              return [2, varData_2247];
          }
        });
      });
      return function(param_1) {
        return varData_2246.apply(this, arguments);
      };
    })());
    varData_1778.register("snr-buns:generateCustomer", (function() {
      var varData_2248 = handleAction_171(function(param_1) {
        var varData_2249;
        var varData_2250;
        return handleAction_178(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2206(param_1, {
                faceEntity: PlayerPedId()
              })];
            case 1:
              varData_2249 = param_1_1.sent();
              varData_2250 = NetworkGetNetworkIdFromEntity(varData_2249);
              return [2, varData_2250];
          }
        });
      });
      return function(param_1) {
        return varData_2248.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:returnDeliveryVehicle", (function() {
      var varData_2251 = handleAction_171(function(param_1, param_2) {
        var varData_2252;
        var varData_2253;
        var varData_2254;
        var varData_2255;
        return handleAction_178(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (!varData_2094.isActive("snr_buns_vehicle_pickup")) {
                return [2];
              }
              varData_2252 = NetworkGetNetworkIdFromEntity(param_2);
              return [4, varData_1778.execute("snr-buns:returnDeliveryVehicle", varData_2252)];
            case 1:
              varData_2253 = handleAction_176.apply(void 0, [param_1_1.sent(), 2]);
              varData_2254 = varData_2253[0];
              varData_2255 = varData_2253[1];
              emit("DoLongHudText", varData_2255, varData_2254 ? 1 : 2);
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2251.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:requestDeliveryVehicle", handleAction_171(function() {
      var varData_2256;
      var varData_2257;
      var varData_2258;
      return handleAction_178(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_1778.execute("snr-buns:requestDeliveryVehicle")];
          case 1:
            varData_2256 = handleAction_176.apply(void 0, [param_1.sent(), 2]);
            varData_2257 = varData_2256[0];
            varData_2258 = varData_2256[1];
            emit("DoLongHudText", varData_2258, varData_2257 ? 1 : 2);
            return [2];
        }
      });
    }));
    varData_1738.onNet("snr-buns:updateDeliveryInfo", function(param_1) {
      varData_2242 = param_1;
      switch (varData_2242.step) {
        case "cook_order":
          emit("DoLongHudText", "Job started, please begin cooking their meal.", 1);
          break;
        case "pickup_vehicle":
          emit("DoLongHudText", "Meal completed, retrieve delivery vehicle form out front.", 1);
          handleAction_183();
          break;
        case "deliver_food":
          handleAction_182(varData_2242);
          break;
        case "return_vehicle":
          handleAction_183();
          break;
      }
      handleAction_184();
    });
    function handleAction_182(param_1) {
      if (dataMap_4.has("dropoff_location")) {
        RemoveBlip(dataMap_4.get("dropoff_location"));
        dataMap_4.delete("dropoff_location");
      }
      clearTick(varData_2241);
      varData_2241 = 0;
      var varData_2259 = handleAction_149(param_1.coords, 280, 17, 1, "Delivery Dropoff", true);
      dataMap_4.set("dropoff_location", varData_2259);
      emit("DoLongHudText", "Delivery drop off has been marked on GPS", 1);
    }
    function handleAction_183() {
      varData_2241 = setTick(function() {
        handleAction_145(new varData_1513(-491.04, -668.06, 31.65), 43, {
          r: 241,
          g: 214,
          b: 147,
          a: 0.02
        });
      });
    }
    function handleAction_184() {
      if (!varData_2242) {
        return;
      }
      if (varData_2242.step === "cook_order") {
        return;
      }
      var varData_2260 = {
        pickup_vehicle: "Pickup delivery vehicle from outside",
        deliver_food: "Deliver the food to the customer",
        return_vehicle: "Return the delivery vehicle"
      };
      exports["np-ui"].sendAppEvent("status-hud", {
        show: true,
        title: `Delivery #${varData_2242.order?.visualId}`,
        position: "left",
        values: [varData_2260[varData_2242.step]]
      });
    }
    varData_1738.onNet("snr-buns:deliveryCompleted", function() {
      varData_2242 = null;
      clearTick(varData_2241);
      varData_2241 = 0;
      globalThis.exports["np-ui"].sendAppEvent("status-hud", {
        show: false
      });
    });
    varData_1738.on("snr-buns:deliverCustomerFood", handleAction_171(function() {
      var varData_2261;
      var varData_2262;
      var varData_2263;
      var varData_2264;
      var varData_2265;
      var varData_2266;
      return handleAction_178(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            if (!varData_2242?.customerNetId) {
              return [2];
            }
            return [4, varData_2063.loadAnim("mp_safehouselost@")];
          case 1:
            param_1.sent();
            varData_2261 = PlayerPedId();
            varData_2262 = NetworkGetEntityFromNetworkId(varData_2242?.customerNetId);
            SetPedCanRagdoll(varData_2261, false);
            PlayAmbientSpeech1(varData_2262, "Generic_Hi", "Speech_Params_Force");
            TaskTurnPedToFaceEntity(varData_2261, varData_2262, -1);
            TaskPlayAnim(varData_2261, "mp_safehouselost@", "package_dropoff", 8, -8, -1, 1, 0, false, false, false);
            TaskPlayAnim(varData_2262, "mp_safehouselost@", "package_dropoff", 8, -8, -1, 1, 0, false, false, false);
            return [4, varData_1675.wait(2500)];
          case 2:
            param_1.sent();
            return [4, varData_1778.execute("snr-buns:deliverCustomerFood")];
          case 3:
            varData_2263 = handleAction_176.apply(void 0, [param_1.sent(), 2]);
            varData_2264 = varData_2263[0];
            varData_2265 = varData_2263[1];
            emit("DoLongHudText", varData_2265, varData_2264 ? 1 : 2);
            SetPedCanRagdoll(varData_2261, true);
            ClearPedTasks(varData_2261);
            ClearPedTasks(varData_2262);
            if (!varData_2264) {
              return [2];
            }
            varData_2129.removeInteraction("snr_buns_dropoff");
            SetPedAsNoLongerNeeded(varData_2262);
            TaskWanderStandard(varData_2262, 10, 10);
            varData_2266 = dataMap_4.get("dropoff_location");
            if (varData_2266) {
              RemoveBlip(varData_2266);
            }
            return [2];
        }
      });
    }));
    on("onResourceStop", function(param_1) {
      if (param_1 !== GetCurrentResourceName()) {
        return;
      }
      varData_2129.removeInteraction("snr_buns_dropoff");
    });
    ;
    function handleAction_185(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_186(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_187(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_185(param_1);
      }
    }
    function handleAction_188(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2267 = param_1[param_6](param_7);
        var varData_2268 = varData_2267.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2267.done) {
        param_2(varData_2268);
      } else {
        Promise.resolve(varData_2268).then(param_4, param_5);
      }
    }
    function handleAction_189(param_1) {
      return function() {
        var varData_2269 = this;
        var varData_2270 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2271 = param_1.apply(varData_2269, varData_2270);
          function handleAction_190(param_1_2) {
            handleAction_188(varData_2271, param_1_1, param_2, handleAction_190, handleAction_191, "next", param_1_2);
          }
          function handleAction_191(param_1_2) {
            handleAction_188(varData_2271, param_1_1, param_2, handleAction_190, handleAction_191, "throw", param_1_2);
          }
          handleAction_190(void 0);
        });
      };
    }
    function handleAction_192(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_193(param_1, param_2) {
      var varData_2272 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2272 == null) {
        return;
      }
      var varData_2273 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2274;
      var varData_2275;
      try {
        for (varData_2272 = varData_2272.call(param_1); !(isEnabled_2 = (varData_2274 = varData_2272.next()).done); isEnabled_2 = true) {
          varData_2273.push(varData_2274.value);
          if (param_2 && varData_2273.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2275 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2272.return != null) {
            varData_2272.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2275;
          }
        }
      }
      return varData_2273;
    }
    function handleAction_194() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_195() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_196(param_1, param_2) {
      return handleAction_186(param_1) || handleAction_193(param_1, param_2) || handleAction_198(param_1, param_2) || handleAction_194();
    }
    function handleAction_197(param_1) {
      return handleAction_187(param_1) || handleAction_192(param_1) || handleAction_198(param_1) || handleAction_195();
    }
    function handleAction_198(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_185(param_1, param_2);
      }
      var varData_2276 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2276 === "Object" && param_1.constructor) {
        varData_2276 = param_1.constructor.name;
      }
      if (varData_2276 === "Map" || varData_2276 === "Set") {
        return Array.from(varData_2276);
      }
      if (varData_2276 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2276)) {
        return handleAction_185(param_1, param_2);
      }
    }
    function handleAction_199(param_1, param_2) {
      var varData_2277;
      var varData_2278;
      var varData_2279;
      var varData_2280;
      var varData_2281 = {
        label: 0,
        sent: function() {
          if (varData_2279[0] & 1) {
            throw varData_2279[1];
          }
          return varData_2279[1];
        },
        trys: [],
        ops: []
      };
      varData_2280 = {
        next: handleAction_200(0),
        throw: handleAction_200(1),
        return: handleAction_200(2)
      };
      if (typeof Symbol === "function") {
        varData_2280[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2280;
      function handleAction_200(param_1_1) {
        return function(param_1_2) {
          return handleAction_201([param_1_1, param_1_2]);
        };
      }
      function handleAction_201(param_1_1) {
        if (varData_2277) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2281) {
          try {
            varData_2277 = 1;
            if (varData_2278 && (varData_2279 = param_1_1[0] & 2 ? varData_2278.return : param_1_1[0] ? varData_2278.throw || ((varData_2279 = varData_2278.return) && varData_2279.call(varData_2278), 0) : varData_2278.next) && !(varData_2279 = varData_2279.call(varData_2278, param_1_1[1])).done) {
              return varData_2279;
            }
            varData_2278 = 0;
            if (varData_2279) {
              param_1_1 = [param_1_1[0] & 2, varData_2279.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2279 = param_1_1;
                break;
              case 4:
                varData_2281.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2281.label++;
                varData_2278 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2281.ops.pop();
                varData_2281.trys.pop();
                continue;
              default:
                if (!(varData_2279 = varData_2281.trys, varData_2279 = varData_2279.length > 0 && varData_2279[varData_2279.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2281 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2279 || param_1_1[1] > varData_2279[0] && param_1_1[1] < varData_2279[3])) {
                  varData_2281.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2281.label < varData_2279[1]) {
                  varData_2281.label = varData_2279[1];
                  varData_2279 = param_1_1;
                  break;
                }
                if (varData_2279 && varData_2281.label < varData_2279[2]) {
                  varData_2281.label = varData_2279[2];
                  varData_2281.ops.push(param_1_1);
                  break;
                }
                if (varData_2279[2]) {
                  varData_2281.ops.pop();
                }
                varData_2281.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2281);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2278 = 0;
          } finally {
            varData_2277 = varData_2279 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2282 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2282;
      }
    }
    var varData_2283 = null;
    var varData_2284 = null;
    var dataMap_5 = /* @__PURE__ */ new Map();
    function handleAction_202() {
      return handleAction_203.apply(this, arguments);
    }
    function handleAction_203() {
      handleAction_203 = handleAction_189(function() {
        return handleAction_199(this, function(param_1) {
          return [2];
        });
      });
      return handleAction_203.apply(this, arguments);
    }
    function handleAction_204(param_1) {
      return varData_2283 === param_1;
    }
    function handleAction_205() {
      clearTimeout(varData_2325);
      varData_1688.Sync["np-ui"].sendAppEvent("status-hud", {
        show: false
      });
      varData_2283 = null;
      dataMap_5.clear();
      handleAction_184();
    }
    var varData_2285 = (function() {
      var varData_2286 = handleAction_189(function(param_1) {
        var varData_2287;
        var varData_2288;
        var varData_2289;
        return handleAction_199(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1778.execute("snr-buns:signOut", param_1)];
            case 1:
              varData_2287 = handleAction_196.apply(void 0, [param_1_1.sent(), 2]);
              varData_2288 = varData_2287[0];
              varData_2289 = varData_2287[1];
              emit("DoLongHudText", varData_2289, varData_2288 ? 1 : 2);
              if (!varData_2288) {
                return [2];
              }
              handleAction_205();
              return [2];
          }
        });
      });
      return function _0x16c1b5(param_1) {
        return varData_2286.apply(this, arguments);
      };
    })();
    var varData_2290 = (function() {
      var varData_2291 = handleAction_189(function(param_1) {
        var varData_2292;
        var varData_2293;
        var varData_2294;
        var varData_2295;
        var varData_2296;
        var varData_2297;
        var varData_2298;
        var varData_2299;
        var varData_2300;
        var varData_2301;
        return handleAction_199(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (!varData_2094.isActive("restaurant_zone")) {
                handleAction_133("You are not in a restaurant zone", "error");
                return [2];
              }
              return [4, varData_1778.execute("snr-buns:signOn", param_1)];
            case 1:
              varData_2292 = handleAction_196.apply(void 0, [param_1_1.sent(), 2]);
              varData_2293 = varData_2292[0];
              varData_2294 = varData_2292[1];
              if (!varData_2293) {
                return [3, 3];
              }
              varData_2283 = param_1;
              return [4, varData_1778.execute("snr-buns:getOrders")];
            case 2:
              varData_2295 = param_1_1.sent();
              varData_2296 = true;
              varData_2297 = false;
              varData_2298 = void 0;
              try {
                for (varData_2299 = varData_2295[Symbol.iterator](); !(varData_2296 = (varData_2300 = varData_2299.next()).done); varData_2296 = true) {
                  varData_2301 = varData_2300.value;
                  if (!varData_2301.id) {
                    continue;
                  }
                  dataMap_5.set(varData_2301.id, varData_2301);
                }
              } catch (err) {
                varData_2297 = true;
                varData_2298 = err;
              } finally {
                try {
                  if (!varData_2296 && varData_2299.return != null) {
                    varData_2299.return();
                  }
                } finally {
                  if (varData_2297) {
                    throw varData_2298;
                  }
                }
              }
              varData_2326(dataMap_5);
              param_1_1.label = 3;
            case 3:
              emit("DoLongHudText", varData_2294, varData_2293 ? 1 : 2);
              return [2];
          }
        });
      });
      return function _0x10aa23(param_1) {
        return varData_2291.apply(this, arguments);
      };
    })();
    on("np-polyzone:exit", function(param_1, param_2) {
      if (param_1 === "restaurant_zone") {
        if (handleAction_204(param_2.biz)) {
          varData_2285(param_2.biz);
        }
      }
    });
    varData_1738.onNet("snr-buns:forceClockedOut", (function() {
      var varData_2302 = handleAction_189(function(param_1) {
        return handleAction_199(this, function(param_1_1) {
          emit("DoLongHudText", `You were clocked off duty by ${param_1}`, 2);
          handleAction_205();
          return [2];
        });
      });
      return function(param_1) {
        return varData_2302.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:viewIngredients", (function() {
      var varData_2303 = handleAction_189(function(param_1, param_2, param_3) {
        var varData_2304;
        var varData_2305;
        return handleAction_199(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1778.execute("snr-buns:getIngredients")];
            case 1:
              varData_2304 = param_1_1.sent();
              if (varData_2304.length <= 0) {
                return [2, emit("DoLongHudText", "No ingredients found", 2)];
              }
              varData_2305 = varData_2304.map(function(param_1_2) {
                var varData_2306 = handleAction_134(param_1_2.ingredient);
                return {
                  title: varData_2306?.name ?? param_1_2.ingredient,
                  titleRight: varData_2306?.emoji ?? "\u2754",
                  description: `Quantity: ${param_1_2.quantity}`
                };
              });
              varData_1688.Sync["np-ui"].showContextMenu(varData_2305);
              return [2];
          }
        });
      });
      return function(param_1, param_2, param_3) {
        return varData_2303.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:viewOrders", handleAction_189(function() {
      var varData_2307;
      var varData_2308;
      var varData_2309;
      var varData_2310;
      var varData_2311;
      var varData_2312;
      var varData_2313;
      var varData_2314;
      var varData_2315;
      var varData_2316;
      return handleAction_199(this, function(param_1) {
        if (!varData_2283) {
          return [2];
        }
        if (dataMap_5.size === 0) {
          emit("DoLongHudText", "No orders", 2);
          return [2];
        }
        varData_2307 = [{
          title: `${dataMap_5.size} Order${dataMap_5.size !== 1 ? "s" : ""}`
        }];
        varData_2308 = true;
        varData_2309 = false;
        varData_2310 = void 0;
        try {
          for (varData_2311 = dataMap_5.values()[Symbol.iterator](); !(varData_2308 = (varData_2312 = varData_2311.next()).done); varData_2308 = true) {
            varData_2313 = varData_2312.value;
            varData_2314 = varData_2313.length - Math.floor((Date.now() - varData_2313.startTime) / 1e3);
            varData_2315 = varData_2313.items.filter(function(param_1_1) {
              return !param_1_1.finished;
            });
            varData_2316 = varData_2315.length === 0 ? "All order items complete" : `${varData_2315.length} item${varData_2315.length !== 1 ? "s" : ""} missing`;
            varData_2307.push({
              title: `Order #${varData_2313.visualId}`,
              titleRight: `${varData_2313.paid ? "Paid" : "Unpaid"}`,
              description: `Time Remaining: ${varData_2314 > 0 ? `${varData_2314}s` : "Expired"}`,
              children: [{
                title: "Get Order Items",
                description: varData_2316,
                icon: "cart-arrow-down",
                action: "snr-buns:getOrderItems",
                disabled: !varData_2313.paid,
                key: varData_2313
              }, {
                title: "Remove Order",
                icon: "times",
                action: "snr-buns:removeOrder",
                disabled: false,
                key: varData_2313
              }]
            });
          }
        } catch (err) {
          varData_2309 = true;
          varData_2310 = err;
        } finally {
          try {
            if (!varData_2308 && varData_2311.return != null) {
              varData_2311.return();
            }
          } finally {
            if (varData_2309) {
              throw varData_2310;
            }
          }
        }
        varData_1688.Sync["np-ui"].showContextMenu(varData_2307);
        return [2];
      });
    }));
    RegisterUICallback("snr-buns:getOrderItems", (function() {
      var varData_2317 = handleAction_189(function(param_1, param_2) {
        var varData_2318;
        var varData_2319;
        var varData_2320;
        return handleAction_199(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1778.execute("snr-buns:getOrderItems", param_1.key.id)];
            case 1:
              varData_2318 = handleAction_196.apply(void 0, [param_1_1.sent(), 2]);
              varData_2319 = varData_2318[0];
              varData_2320 = varData_2318[1];
              if (varData_2320) {
                emit("DoLongHudText", varData_2320, varData_2319 ? 1 : 2);
              }
              return [2, param_2({
                data: "success",
                meta: {
                  ok: true,
                  message: ""
                }
              })];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2317.apply(this, arguments);
      };
    })());
    RegisterUICallback("snr-buns:removeOrder", (function() {
      var varData_2321 = handleAction_189(function(param_1, param_2) {
        var varData_2322;
        var varData_2323;
        var varData_2324;
        return handleAction_199(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1778.execute("snr-buns:removeOrder", param_1.key.id)];
            case 1:
              varData_2322 = handleAction_196.apply(void 0, [param_1_1.sent(), 2]);
              varData_2323 = varData_2322[0];
              varData_2324 = varData_2322[1];
              emit("DoLongHudText", varData_2324, varData_2323 ? 1 : 2);
              return [2, param_2({
                data: "success",
                meta: {
                  ok: true,
                  message: ""
                }
              })];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2321.apply(this, arguments);
      };
    })());
    var varData_2325;
    var varData_2326 = (function() {
      var varData_2327 = handleAction_189(function(param_1) {
        var varData_2328;
        var varData_2329;
        var varData_2330;
        var varData_2331;
        var varData_2332;
        var varData_2333;
        return handleAction_199(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_1688.Sync["np-ui"].sendAppEvent("status-hud", {
                show: false
              });
              clearTimeout(varData_2325);
              return [4, varData_1675.wait(1)];
            case 1:
              param_1_1.sent();
              if (param_1.size > 0) {
                ;
                ;
                varData_2284 ?? (varData_2284 = param_1.values().next().value);
                if (!varData_2284) {
                  return [2];
                }
                varData_2329 = varData_2284.length - Math.floor((Date.now() - varData_2284.startTime) / 1e3);
                varData_2330 = [];
                varData_2330.push(varData_2329 > 0 ? {
                  seconds: varData_2329,
                  type: "countdown",
                  prefix: "Time Remaining: "
                } : "Expired");
                varData_2331 = varData_2284.items.filter(function(param_1_2) {
                  return param_1_2.ingredients && param_1_2.ingredients.length > 0 && !param_1_2.finished;
                }).map(function(param_1_2) {
                  var varData_2334;
                  return `${param_1_2.emoji} ${param_1_2.name} [${(varData_2334 = param_1_2.ingredients) === null || varData_2334 === void 0 ? void 0 : varData_2334.map(function(param_1_3) {
                    return param_1_3.emoji;
                  }).join("")}]`;
                });
                varData_2332 = varData_2284.items.filter(function(param_1_2) {
                  return (!param_1_2.ingredients || param_1_2.ingredients.length === 0) && !param_1_2.finished;
                }).map(function(param_1_2) {
                  return `${param_1_2.emoji} ${param_1_2.name}`;
                }).join(" ");
                (varData_2328 = varData_2330).push.apply(varData_2328, handleAction_197(varData_2331));
                if (varData_2332 !== "") {
                  varData_2330.push(varData_2332);
                }
                if (varData_2330.length === 1) {
                  varData_2330.push("All order items complete");
                }
                varData_2333 = varData_2284?.privateOrder ? `Delivery #${varData_2284.visualId}` : `Order #${varData_2284.visualId}`;
                varData_1688.Sync["np-ui"].sendAppEvent("status-hud", {
                  show: true,
                  title: `[G] ${varData_2333}`,
                  position: "left",
                  values: varData_2330
                });
                if (varData_2329 > 0) {
                  varData_2325 = setTimeout(function() {
                    return varData_2326(dataMap_5);
                  }, varData_2329 * 1e3);
                }
                return [2];
              }
              if (varData_2283) {
                varData_1688.Sync["np-ui"].sendAppEvent("status-hud", {
                  show: true,
                  title: "Waiting for orders...",
                  values: []
                });
              }
              return [2];
          }
        });
      });
      return function _0x17ec4b(param_1) {
        return varData_2327.apply(this, arguments);
      };
    })();
    varData_1738.onNet("snr-buns:updateOrder", (function() {
      var varData_2335 = handleAction_189(function(param_1) {
        var varData_2336;
        var varData_2337;
        var varData_2338 = arguments;
        return handleAction_199(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2336 = varData_2338.length > 1 && varData_2338[1] !== void 0 ? varData_2338[1] : false;
              if (param_1.privateOrder && param_1.employee) {
                varData_2337 = varData_1688.Sync.isPed.isPed("cid");
                if (varData_2337 !== param_1.employee.characterId) {
                  return [2];
                }
              }
              if (varData_2336) {
                ;
                dataMap_5.delete(param_1.id);
                if (varData_2284?.id === param_1.id) {
                  varData_2284 = null;
                }
              } else {
                ;
                if (varData_2284?.id === param_1.id) {
                  varData_2284 = param_1;
                }
                dataMap_5.set(param_1.id, param_1);
              }
              return [4, varData_2326(dataMap_5)];
            case 1:
              param_1_1.sent();
              return [2];
          }
        });
      });
      return function(param_1) {
        return varData_2335.apply(this, arguments);
      };
    })());
    RegisterUICallback("snr-buns:selectOrder", (function() {
      var varData_2339 = handleAction_189(function(param_1, param_2) {
        var varData_2340;
        return handleAction_199(this, function(param_1_1) {
          if (param_1.key) {
            varData_2340 = param_1.key;
            varData_2284 = varData_2340;
            varData_2326(dataMap_5);
          }
          return [2, param_2({
            data: "success",
            meta: {
              ok: true,
              message: ""
            }
          })];
        });
      });
      return function(param_1, param_2) {
        return varData_2339.apply(this, arguments);
      };
    })());
    varData_1688.Sync["np-keybinds"].registerKeyMapping("", "Restaurants", "Select Order", "+restSelectOrder", "-restSelectOrder", "G");
    RegisterCommand("+restSelectOrder", function() {
      if (!varData_2283) {
        return;
      }
      if (dataMap_5.size === 0) {
        return;
      }
      var varData_2341 = [{
        title: "Select Order"
      }];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2342 = void 0;
      try {
        for (var loopIdx = dataMap_5.values()[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2343 = loopIdx_1.value;
          var varData_2344 = varData_2343.length - Math.floor((Date.now() - varData_2343.startTime) / 1e3);
          varData_2341.push({
            title: `Order #${varData_2343.visualId}`,
            description: `Time Remaining: ${varData_2344 > 0 ? `${varData_2344}s` : "Expired"}`,
            action: "snr-buns:selectOrder",
            key: varData_2343
          });
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2342 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2342;
          }
        }
      }
      SetCursorLocation(0.5, 0.5);
      varData_1688.Sync["np-ui"].showContextMenu(varData_2341);
    }, false);
    RegisterCommand("-restSelectOrder", function() {
      return;
    }, false);
    varData_1688.Sync("SignOn", varData_2290);
    varData_1688.Sync("SignOut", varData_2285);
    varData_1688.Sync("IsSignedOn", handleAction_204);
    ;
    function handleAction_206(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2345 = param_1[param_6](param_7);
        var varData_2346 = varData_2345.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2345.done) {
        param_2(varData_2346);
      } else {
        Promise.resolve(varData_2346).then(param_4, param_5);
      }
    }
    function handleAction_207(param_1) {
      return function() {
        var varData_2347 = this;
        var varData_2348 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2349 = param_1.apply(varData_2347, varData_2348);
          function handleAction_208(param_1_2) {
            handleAction_206(varData_2349, param_1_1, param_2, handleAction_208, handleAction_209, "next", param_1_2);
          }
          function handleAction_209(param_1_2) {
            handleAction_206(varData_2349, param_1_1, param_2, handleAction_208, handleAction_209, "throw", param_1_2);
          }
          handleAction_208(void 0);
        });
      };
    }
    function handleAction_210(param_1, param_2) {
      var varData_2350;
      var varData_2351;
      var varData_2352;
      var varData_2353;
      var varData_2354 = {
        label: 0,
        sent: function() {
          if (varData_2352[0] & 1) {
            throw varData_2352[1];
          }
          return varData_2352[1];
        },
        trys: [],
        ops: []
      };
      varData_2353 = {
        next: handleAction_211(0),
        throw: handleAction_211(1),
        return: handleAction_211(2)
      };
      if (typeof Symbol === "function") {
        varData_2353[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2353;
      function handleAction_211(param_1_1) {
        return function(param_1_2) {
          return handleAction_212([param_1_1, param_1_2]);
        };
      }
      function handleAction_212(param_1_1) {
        if (varData_2350) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2354) {
          try {
            varData_2350 = 1;
            if (varData_2351 && (varData_2352 = param_1_1[0] & 2 ? varData_2351.return : param_1_1[0] ? varData_2351.throw || ((varData_2352 = varData_2351.return) && varData_2352.call(varData_2351), 0) : varData_2351.next) && !(varData_2352 = varData_2352.call(varData_2351, param_1_1[1])).done) {
              return varData_2352;
            }
            varData_2351 = 0;
            if (varData_2352) {
              param_1_1 = [param_1_1[0] & 2, varData_2352.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2352 = param_1_1;
                break;
              case 4:
                varData_2354.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2354.label++;
                varData_2351 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2354.ops.pop();
                varData_2354.trys.pop();
                continue;
              default:
                if (!(varData_2352 = varData_2354.trys, varData_2352 = varData_2352.length > 0 && varData_2352[varData_2352.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2354 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2352 || param_1_1[1] > varData_2352[0] && param_1_1[1] < varData_2352[3])) {
                  varData_2354.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2354.label < varData_2352[1]) {
                  varData_2354.label = varData_2352[1];
                  varData_2352 = param_1_1;
                  break;
                }
                if (varData_2352 && varData_2354.label < varData_2352[2]) {
                  varData_2354.label = varData_2352[2];
                  varData_2354.ops.push(param_1_1);
                  break;
                }
                if (varData_2352[2]) {
                  varData_2354.ops.pop();
                }
                varData_2354.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2354);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2351 = 0;
          } finally {
            varData_2350 = varData_2352 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2355 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2355;
      }
    }
    var varData_2356 = varData_1675.cacheableMap((function() {
      var varData_2357 = handleAction_207(function(param_1, param_2) {
        var varData_2358;
        return handleAction_210(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1778.execute("snr-buns:getRestaurantMenu", param_2)];
            case 1:
              varData_2358 = param_1_1.sent();
              return [2, [true, varData_2358]];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2357.apply(this, arguments);
      };
    })(), {
      timeToLive: 9e5
    });
    ;
    function handleAction_213(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_214(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_215(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_213(param_1);
      }
    }
    function handleAction_216(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2359 = param_1[param_6](param_7);
        var varData_2360 = varData_2359.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2359.done) {
        param_2(varData_2360);
      } else {
        Promise.resolve(varData_2360).then(param_4, param_5);
      }
    }
    function handleAction_217(param_1) {
      return function() {
        var varData_2361 = this;
        var varData_2362 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2363 = param_1.apply(varData_2361, varData_2362);
          function handleAction_218(param_1_2) {
            handleAction_216(varData_2363, param_1_1, param_2, handleAction_218, handleAction_219, "next", param_1_2);
          }
          function handleAction_219(param_1_2) {
            handleAction_216(varData_2363, param_1_1, param_2, handleAction_218, handleAction_219, "throw", param_1_2);
          }
          handleAction_218(void 0);
        });
      };
    }
    function handleAction_220(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_221(param_1, param_2) {
      var varData_2364 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2364 == null) {
        return;
      }
      var varData_2365 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2366;
      var varData_2367;
      try {
        for (varData_2364 = varData_2364.call(param_1); !(isEnabled_2 = (varData_2366 = varData_2364.next()).done); isEnabled_2 = true) {
          varData_2365.push(varData_2366.value);
          if (param_2 && varData_2365.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2367 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2364.return != null) {
            varData_2364.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2367;
          }
        }
      }
      return varData_2365;
    }
    function handleAction_222() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_223() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_224(param_1, param_2) {
      return handleAction_214(param_1) || handleAction_221(param_1, param_2) || handleAction_226(param_1, param_2) || handleAction_222();
    }
    function handleAction_225(param_1) {
      return handleAction_215(param_1) || handleAction_220(param_1) || handleAction_226(param_1) || handleAction_223();
    }
    function handleAction_226(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_213(param_1, param_2);
      }
      var varData_2368 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2368 === "Object" && param_1.constructor) {
        varData_2368 = param_1.constructor.name;
      }
      if (varData_2368 === "Map" || varData_2368 === "Set") {
        return Array.from(varData_2368);
      }
      if (varData_2368 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2368)) {
        return handleAction_213(param_1, param_2);
      }
    }
    function handleAction_227(param_1, param_2) {
      var varData_2369;
      var varData_2370;
      var varData_2371;
      var varData_2372;
      var varData_2373 = {
        label: 0,
        sent: function() {
          if (varData_2371[0] & 1) {
            throw varData_2371[1];
          }
          return varData_2371[1];
        },
        trys: [],
        ops: []
      };
      varData_2372 = {
        next: handleAction_228(0),
        throw: handleAction_228(1),
        return: handleAction_228(2)
      };
      if (typeof Symbol === "function") {
        varData_2372[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2372;
      function handleAction_228(param_1_1) {
        return function(param_1_2) {
          return handleAction_229([param_1_1, param_1_2]);
        };
      }
      function handleAction_229(param_1_1) {
        if (varData_2369) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2373) {
          try {
            varData_2369 = 1;
            if (varData_2370 && (varData_2371 = param_1_1[0] & 2 ? varData_2370.return : param_1_1[0] ? varData_2370.throw || ((varData_2371 = varData_2370.return) && varData_2371.call(varData_2370), 0) : varData_2370.next) && !(varData_2371 = varData_2371.call(varData_2370, param_1_1[1])).done) {
              return varData_2371;
            }
            varData_2370 = 0;
            if (varData_2371) {
              param_1_1 = [param_1_1[0] & 2, varData_2371.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2371 = param_1_1;
                break;
              case 4:
                varData_2373.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2373.label++;
                varData_2370 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2373.ops.pop();
                varData_2373.trys.pop();
                continue;
              default:
                if (!(varData_2371 = varData_2373.trys, varData_2371 = varData_2371.length > 0 && varData_2371[varData_2371.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2373 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2371 || param_1_1[1] > varData_2371[0] && param_1_1[1] < varData_2371[3])) {
                  varData_2373.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2373.label < varData_2371[1]) {
                  varData_2373.label = varData_2371[1];
                  varData_2371 = param_1_1;
                  break;
                }
                if (varData_2371 && varData_2373.label < varData_2371[2]) {
                  varData_2373.label = varData_2371[2];
                  varData_2373.ops.push(param_1_1);
                  break;
                }
                if (varData_2371[2]) {
                  varData_2373.ops.pop();
                }
                varData_2373.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2373);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2370 = 0;
          } finally {
            varData_2369 = varData_2371 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2374 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2374;
      }
    }
    var dataSet_3 = /* @__PURE__ */ new Set();
    function handleAction_230() {
      var varData_2375 = [new varData_1513(-508.1, -694.41, 33.67), new varData_1513(-508.09, -695.92, 33.67), new varData_1513(-508.14, -697.48, 33.67)];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2376 = void 0;
      try {
        let handleAction_231 = function() {
          var varData_2377 = handleAction_224(loopIdx_1.value, 2);
          var varData_2378 = varData_2377[0];
          var varData_2379 = varData_2377[1];
          var varData_2380 = {
            distance: {
              draw: 2.5,
              use: 2
            },
            skipLos: true,
            isEnabled: function() {
              return true;
            }
          };
          varData_2129.addInteraction(`restaurant_register:${varData_2378}`, varData_2379, [{
            id: "register_create",
            label: "Create Order",
            eventSDK: "snr-buns:createOrder",
            parameters: {
              id: `snr_buns_${varData_2378}`,
              biz: "snr_buns"
            },
            isEnabled: function() {
              var varData_2381 = `snr_buns_${varData_2378}`;
              var varData_2382 = "snr_buns";
              return !dataSet_3.has(varData_2381) && handleAction_204(varData_2382);
            }
          }, {
            id: "register_payment",
            label: "Make Payment",
            eventSDK: "snr-buns:makePayment",
            parameters: {
              id: `snr_buns_${varData_2378}`,
              biz: "snr_buns"
            },
            isEnabled: function() {
              var varData_2383 = `snr_buns_${varData_2378}`;
              return dataSet_3.has(varData_2383);
            }
          }], varData_2380);
        };
        for (var loopIdx = varData_2375.entries()[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          handleAction_231();
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2376 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2376;
          }
        }
      }
    }
    varData_1738.onNet("snr-buns:register:state", function(param_1, param_2) {
      if (param_2) {
        dataSet_3.add(param_1);
      } else {
        dataSet_3.delete(param_1);
      }
    });
    varData_1738.on("snr-buns:createOrder", (function() {
      var varData_2384 = handleAction_217(function(param_1, param_2) {
        var varData_2385;
        var varData_2386;
        var varData_2387;
        var varData_2388;
        return handleAction_227(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2385 = param_1?.id;
              varData_2386 = param_1?.biz;
              return [4, varData_2356.get(varData_2386)];
            case 1:
              varData_2387 = param_1_1.sent();
              if (!varData_2387) {
                return [2];
              }
              var varData_2389 = {
                id: varData_2385
              };
              return [4, varData_2395(varData_2387, [], varData_2389)];
            case 2:
              varData_2388 = param_1_1.sent();
              varData_1688.Sync["np-ui"].showContextMenu(varData_2388);
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2384.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:makePayment", (function() {
      var varData_2390 = handleAction_217(function(param_1, param_2) {
        var varData_2391;
        var varData_2392;
        var varData_2393;
        return handleAction_227(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2391 = param_1?.id;
              return [4, varData_1778.execute("snr-buns:getOrderInfo", varData_2391)];
            case 1:
              varData_2392 = param_1_1.sent();
              var varData_2394 = {
                id: varData_2391
              };
              return [4, varData_2422(varData_2392, varData_2394)];
            case 2:
              varData_2393 = param_1_1.sent();
              varData_1688.Sync["np-ui"].showContextMenu(varData_2393);
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2390.apply(this, arguments);
      };
    })());
    var varData_2395 = (function() {
      var varData_2396 = handleAction_217(function(param_1, param_2, param_3) {
        var varData_2397;
        var varData_2398;
        var varData_2399;
        var varData_2400;
        var varData_2401;
        var varData_2402;
        var varData_2403;
        var varData_2404;
        var varData_2405;
        var varData_2406;
        var varData_2407;
        return handleAction_227(this, function(param_1_1) {
          varData_2397 = param_2.reduce(function(param_1_2, param_2_1) {
            return param_1_2 + param_2_1.price;
          }, 0);
          var varData_2408 = {
            items: param_2,
            data: param_3
          };
          var varData_2409 = {
            title: "Complete Order",
            icon: "check",
            action: "snr-buns:order:completeOrder",
            key: varData_2408,
            disabled: param_2.length === 0
          };
          varData_2398 = [{
            title: "Order Items",
            titleRight: `Total: $${varData_2397.toFixed(2)} + tax`
          }, varData_2409];
          varData_2399 = true;
          varData_2400 = false;
          varData_2401 = void 0;
          try {
            for (varData_2402 = param_2[Symbol.iterator](); !(varData_2399 = (varData_2403 = varData_2402.next()).done); varData_2399 = true) {
              varData_2404 = varData_2403.value;
              varData_2405 = varData_2404.addedIngredients.map(function(param_1_2) {
                return handleAction_134(param_1_2);
              });
              varData_2398.push({
                title: varData_2404.name,
                description: `$${varData_2404.price}${varData_2405.length > 0 ? " | " : ""}${varData_2405.map(function(param_1_2) {
                  return param_1_2.emoji;
                }).join("")}`,
                children: [{
                  title: "Remove",
                  action: "snr-buns:order:removeItem",
                  key: {
                    menu: param_1,
                    current: param_2,
                    item: varData_2404
                  }
                }]
              });
            }
          } catch (err) {
            varData_2400 = true;
            varData_2401 = err;
          } finally {
            try {
              if (!varData_2399 && varData_2402.return != null) {
                varData_2402.return();
              }
            } finally {
              if (varData_2400) {
                throw varData_2401;
              }
            }
          }
          varData_2406 = [];
          varData_2407 = function(param_1_2) {
            var isEnabled_2 = true;
            var isDisabled_1 = false;
            var varData_2410 = void 0;
            try {
              for (var loopIdx = param_1_2[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
                var varData_2411 = loopIdx_1.value;
                if (!varData_2411.ingredients) {
                  var varData_2412 = {
                    title: varData_2411.name,
                    action: "snr-buns:order:addItem",
                    key: {}
                  };
                  varData_2412.key.menu = param_1;
                  varData_2412.key.current = param_2;
                  varData_2412.key.item = varData_2411;
                  varData_2412.key.data = param_3;
                  varData_2406.push(varData_2412);
                  continue;
                }
                var varData_2413 = {
                  menu: param_1,
                  current: param_2,
                  item: varData_2411,
                  data: param_3
                };
                var varData_2414 = {
                  title: "Finish",
                  icon: "check",
                  action: "snr-buns:order:addItem",
                  key: varData_2413
                };
                var varData_2415 = [varData_2414];
                var isEnabled_3 = true;
                var isDisabled_2 = false;
                var varData_2416 = void 0;
                try {
                  for (var loopIdx_2 = varData_2411.ingredients[Symbol.iterator](), loopIdx_3; !(isEnabled_3 = (loopIdx_3 = loopIdx_2.next()).done); isEnabled_3 = true) {
                    var varData_2417 = loopIdx_3.value;
                    var varData_2418 = handleAction_134(varData_2417);
                    if (!varData_2418) {
                      continue;
                    }
                    var varData_2419 = {
                      title: varData_2418.name,
                      titleRight: varData_2418.emoji,
                      type: "checkbox",
                      isChecked: true,
                      key: varData_2418.id
                    };
                    varData_2415.push(varData_2419);
                  }
                } catch (err) {
                  isDisabled_2 = true;
                  varData_2416 = err;
                } finally {
                  try {
                    if (!isEnabled_3 && loopIdx_2.return != null) {
                      loopIdx_2.return();
                    }
                  } finally {
                    if (isDisabled_2) {
                      throw varData_2416;
                    }
                  }
                }
                var varData_2420 = {
                  title: varData_2411.name,
                  children: varData_2415
                };
                varData_2406.push(varData_2420);
              }
            } catch (err) {
              isDisabled_1 = true;
              varData_2410 = err;
            } finally {
              try {
                if (!isEnabled_2 && loopIdx.return != null) {
                  loopIdx.return();
                }
              } finally {
                if (isDisabled_1) {
                  throw varData_2410;
                }
              }
            }
          };
          varData_2407(param_1.main);
          varData_2407(param_1.drink);
          varData_2407(param_1.side);
          var varData_2421 = {
            title: "Add Item",
            icon: "plus",
            children: varData_2406
          };
          varData_2398.push(varData_2421);
          return [2, varData_2398];
        });
      });
      return function _0x351849(param_1, param_2, param_3) {
        return varData_2396.apply(this, arguments);
      };
    })();
    var varData_2422 = (function() {
      var varData_2423 = handleAction_217(function(param_1, param_2) {
        var varData_2424;
        var varData_2425;
        var varData_2426;
        var varData_2427;
        var varData_2428;
        var varData_2429;
        var varData_2430;
        var varData_2431;
        return handleAction_227(this, function(param_1_1) {
          var varData_2432 = {
            type: "cash",
            data: param_2
          };
          var varData_2433 = {
            title: "Pay Cash",
            icon: "money-bill",
            action: "snr-buns:completePayment",
            key: varData_2432
          };
          var varData_2434 = {
            type: "bank",
            data: param_2
          };
          var varData_2435 = {
            title: "Pay Bank",
            icon: "credit-card",
            action: "snr-buns:completePayment",
            key: varData_2434
          };
          varData_2424 = [{
            title: "Payment",
            titleRight: `Total: $${param_1.price.toFixed(2)} + tax`
          }, varData_2433, varData_2435];
          varData_2425 = true;
          varData_2426 = false;
          varData_2427 = void 0;
          try {
            for (varData_2428 = param_1.items[Symbol.iterator](); !(varData_2425 = (varData_2429 = varData_2428.next()).done); varData_2425 = true) {
              varData_2430 = varData_2429.value;
              ;
              ;
              varData_2424.push({
                title: varData_2430.name,
                description: `$${varData_2430.price}${(varData_2430.ingredients?.length ?? 0) > 0 ? " | " : ""}${(varData_2431 = varData_2430.ingredients) === null || varData_2431 === void 0 ? void 0 : varData_2431.map(function(param_1_2) {
                  return param_1_2.emoji;
                }).join("")}`
              });
            }
          } catch (err) {
            varData_2426 = true;
            varData_2427 = err;
          } finally {
            try {
              if (!varData_2425 && varData_2428.return != null) {
                varData_2428.return();
              }
            } finally {
              if (varData_2426) {
                throw varData_2427;
              }
            }
          }
          return [2, varData_2424];
        });
      });
      return function _0x3a94c6(param_1, param_2) {
        return varData_2423.apply(this, arguments);
      };
    })();
    RegisterUICallback("snr-buns:completePayment", (function() {
      var varData_2436 = handleAction_217(function(param_1, param_2) {
        var varData_2437;
        var varData_2438;
        var varData_2439;
        return handleAction_227(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              param_2({
                data: "success",
                meta: {
                  ok: true,
                  message: ""
                }
              });
              return [4, varData_1778.execute("snr-buns:completePayment", param_1.key)];
            case 1:
              varData_2437 = handleAction_224.apply(void 0, [param_1_1.sent(), 2]);
              varData_2438 = varData_2437[0];
              varData_2439 = varData_2437[1];
              emit("DoLongHudText", varData_2439, varData_2438 ? 1 : 2);
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2436.apply(this, arguments);
      };
    })());
    RegisterUICallback("snr-buns:order:completeOrder", (function() {
      var varData_2440 = handleAction_217(function(param_1, param_2) {
        var varData_2441;
        var varData_2442;
        var varData_2443;
        var varData_2444;
        var varData_2445;
        return handleAction_227(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              param_2({
                data: "success",
                meta: {
                  ok: true,
                  message: ""
                }
              });
              if (!param_1.key) {
                return [2];
              }
              varData_2441 = param_1.key.items;
              varData_2442 = {
                register: param_1.key.data.id,
                price: varData_2441.reduce(function(param_1_2, param_2_1) {
                  return param_1_2 + param_2_1.price;
                }, 0),
                items: varData_2441.map(function(param_1_2) {
                  return {
                    id: param_1_2.id,
                    name: param_1_2.name,
                    emoji: param_1_2.emoji,
                    price: param_1_2.price,
                    variant: param_1_2.variant ?? "",
                    item_id: param_1_2.item_id ?? "",
                    ingredients: param_1_2.addedIngredients.map(function(param_1_3) {
                      return handleAction_134(param_1_3);
                    })
                  };
                })
              };
              return [4, varData_1778.execute("snr-buns:order:createOrder", varData_2442)];
            case 1:
              varData_2443 = handleAction_224.apply(void 0, [param_1_1.sent(), 2]);
              varData_2444 = varData_2443[0];
              varData_2445 = varData_2443[1];
              emit("DoLongHudText", varData_2445, varData_2444 ? 1 : 2);
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2440.apply(this, arguments);
      };
    })());
    RegisterUICallback("snr-buns:order:addItem", (function() {
      var varData_2446 = handleAction_217(function(param_1, param_2) {
        var varData_2447;
        var varData_2448;
        return handleAction_227(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1675.wait(1)];
            case 1:
              param_1_1.sent();
              if (!param_1.key) {
                return [3, 3];
              }
              param_1.key.item.contextId = Math.floor(Math.random() * 1e5);
              varData_2447 = param_1.data.checkboxes ? Object.entries(param_1.data.checkboxes).map(function(param_1_2) {
                var varData_2449 = handleAction_224(param_1_2, 2);
                var varData_2450 = varData_2449[0];
                var varData_2451 = varData_2449[1];
                if (varData_2451) {
                  return varData_2450;
                } else {
                  return null;
                }
              }).filter(function(param_1_2) {
                return param_1_2;
              }) : [];
              param_1.key.item.addedIngredients = varData_2447;
              return [4, varData_2395(param_1.key.menu, handleAction_225(param_1.key.current).concat([param_1.key.item]), param_1.key.data)];
            case 2:
              varData_2448 = param_1_1.sent();
              varData_1688.Sync["np-ui"].showContextMenu(varData_2448);
              param_1_1.label = 3;
            case 3:
              return [2, param_2({
                data: "success",
                meta: {
                  ok: true,
                  message: ""
                }
              })];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2446.apply(this, arguments);
      };
    })());
    RegisterUICallback("snr-buns:order:removeItem", (function() {
      var varData_2452 = handleAction_217(function(param_1, param_2) {
        var varData_2453;
        return handleAction_227(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1675.wait(1)];
            case 1:
              param_1_1.sent();
              if (!param_1.key) {
                return [3, 3];
              }
              return [4, varData_2395(param_1.key.menu, param_1.key.current.filter(function(param_1_2) {
                return param_1_2.contextId !== param_1.key.item.contextId;
              }), param_1.key.data)];
            case 2:
              varData_2453 = param_1_1.sent();
              varData_1688.Sync["np-ui"].showContextMenu(varData_2453);
              param_1_1.label = 3;
            case 3:
              return [2, param_2({
                data: "success",
                meta: {
                  ok: true,
                  message: ""
                }
              })];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2452.apply(this, arguments);
      };
    })());
    ;
    function handleAction_232() {
      var varData_2454 = {
        x: -508.6,
        y: -690.88,
        z: 33.67
      };
      varData_2094.addBoxZone("snr_buns", "restaurant_zone", varData_2454, 22.8, 14, {
        heading: 0,
        minZ: 32.27,
        maxZ: 36.87
      }, {
        biz: "snr_buns"
      });
    }
    ;
    function handleAction_233(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2455 = param_1[param_6](param_7);
        var varData_2456 = varData_2455.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2455.done) {
        param_2(varData_2456);
      } else {
        Promise.resolve(varData_2456).then(param_4, param_5);
      }
    }
    function handleAction_234(param_1) {
      return function() {
        var varData_2457 = this;
        var varData_2458 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2459 = param_1.apply(varData_2457, varData_2458);
          function handleAction_235(param_1_2) {
            handleAction_233(varData_2459, param_1_1, param_2, handleAction_235, handleAction_236, "next", param_1_2);
          }
          function handleAction_236(param_1_2) {
            handleAction_233(varData_2459, param_1_1, param_2, handleAction_235, handleAction_236, "throw", param_1_2);
          }
          handleAction_235(void 0);
        });
      };
    }
    function handleAction_237(param_1, param_2) {
      var varData_2460;
      var varData_2461;
      var varData_2462;
      var varData_2463;
      var varData_2464 = {
        label: 0,
        sent: function() {
          if (varData_2462[0] & 1) {
            throw varData_2462[1];
          }
          return varData_2462[1];
        },
        trys: [],
        ops: []
      };
      varData_2463 = {
        next: handleAction_238(0),
        throw: handleAction_238(1),
        return: handleAction_238(2)
      };
      if (typeof Symbol === "function") {
        varData_2463[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2463;
      function handleAction_238(param_1_1) {
        return function(param_1_2) {
          return handleAction_239([param_1_1, param_1_2]);
        };
      }
      function handleAction_239(param_1_1) {
        if (varData_2460) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2464) {
          try {
            varData_2460 = 1;
            if (varData_2461 && (varData_2462 = param_1_1[0] & 2 ? varData_2461.return : param_1_1[0] ? varData_2461.throw || ((varData_2462 = varData_2461.return) && varData_2462.call(varData_2461), 0) : varData_2461.next) && !(varData_2462 = varData_2462.call(varData_2461, param_1_1[1])).done) {
              return varData_2462;
            }
            varData_2461 = 0;
            if (varData_2462) {
              param_1_1 = [param_1_1[0] & 2, varData_2462.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2462 = param_1_1;
                break;
              case 4:
                varData_2464.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2464.label++;
                varData_2461 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2464.ops.pop();
                varData_2464.trys.pop();
                continue;
              default:
                if (!(varData_2462 = varData_2464.trys, varData_2462 = varData_2462.length > 0 && varData_2462[varData_2462.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2464 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2462 || param_1_1[1] > varData_2462[0] && param_1_1[1] < varData_2462[3])) {
                  varData_2464.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2464.label < varData_2462[1]) {
                  varData_2464.label = varData_2462[1];
                  varData_2462 = param_1_1;
                  break;
                }
                if (varData_2462 && varData_2464.label < varData_2462[2]) {
                  varData_2464.label = varData_2462[2];
                  varData_2464.ops.push(param_1_1);
                  break;
                }
                if (varData_2462[2]) {
                  varData_2464.ops.pop();
                }
                varData_2464.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2464);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2461 = 0;
          } finally {
            varData_2460 = varData_2462 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2465 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2465;
      }
    }
    var dataSet_4 = /* @__PURE__ */ new Set();
    function handleAction_240() {
      return;
    }
    var varData_2466 = (function() {
      var varData_2467 = handleAction_234(function(param_1, param_2, param_3) {
        var varData_2468;
        var varData_2469;
        var varData_2470 = arguments;
        return handleAction_237(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2468 = varData_2470.length > 3 && varData_2470[3] !== void 0 ? varData_2470[3] : 5;
              return [4, varData_2063.loadNamedPtfxAsset(param_2)];
            case 1:
              param_1_1.sent();
              UseParticleFxAssetNextCall(param_2);
              SetPtfxAssetNextCall(param_2);
              varData_2469 = StartParticleFxLoopedAtCoord(param_3, param_1.x, param_1.y, param_1.z, 0, 0, 0, varData_2468, false, false, false, false);
              SetParticleFxLoopedAlpha(varData_2469, 100);
              dataSet_4.add(varData_2469);
              return [2, varData_2469];
          }
        });
      });
      return function _0x3a9715(param_1, param_2, param_3) {
        return varData_2467.apply(this, arguments);
      };
    })();
    function handleAction_241(param_1) {
      if (!dataSet_4.has(param_1)) {
        return;
      }
      StopParticleFxLooped(param_1, false);
      dataSet_4.delete(param_1);
    }
    ;
    var varData_2471 = Object.defineProperty;
    var varData_2472 = (param_1, param_2) => {
      for (var varData_2473 in param_2) {
        varData_2471(param_1, varData_2473, {
          get: param_2[varData_2473],
          enumerable: true
        });
      }
    };
    var varData_2474 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_2475 = (param_1, param_2, param_3) => {
      varData_2474(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_2476 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_2477 = (param_1, param_2, param_3, param_4) => {
      varData_2474(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_2478 = (param_1, param_2, param_3) => {
      varData_2474(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_2479 = {
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
    var varData_2480 = {};
    var varData_2481 = {
      MathUtils: () => varData_2639
    };
    varData_2472(varData_2480, varData_2481);
    var varData_2482;
    var varData_2483;
    var varData_2484 = class _0x23a642 {
      constructor(param_1, param_2, param_3) {
        varData_2476(this, varData_2482);
        const varData_2485 = varData_2478(this, varData_2482, varData_2483).call(this, param_1, param_2, param_3);
        this.x = varData_2485.x;
        this.y = varData_2485.y;
        this.z = varData_2485.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_2486 = varData_2478(this, varData_2482, varData_2483).call(this, param_1, param_2, param_3);
        return this.x === varData_2486.x && this.y === varData_2486.y && this.z === varData_2486.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_2487 = varData_2478(this, varData_2482, varData_2483).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_2487.x * param_4 : varData_2487.x;
        this.y += param_4 ? varData_2487.y * param_4 : varData_2487.y;
        this.z += param_4 ? varData_2487.z * param_4 : varData_2487.z;
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
        const varData_2488 = varData_2478(this, varData_2482, varData_2483).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_2488.x * param_4 : varData_2488.x;
        this.y -= param_4 ? varData_2488.y * param_4 : varData_2488.y;
        this.z -= param_4 ? varData_2488.z * param_4 : varData_2488.z;
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
        const varData_2489 = varData_2478(this, varData_2482, varData_2483).call(this, param_1, param_2, param_3);
        this.x *= varData_2489.x;
        this.y *= varData_2489.y;
        this.z *= varData_2489.z;
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
        const varData_2490 = varData_2478(this, varData_2482, varData_2483).call(this, param_1, param_2, param_3);
        this.x /= varData_2490.x;
        this.y /= varData_2490.y;
        this.z /= varData_2490.z;
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
        const varData_2491 = varData_2478(this, varData_2482, varData_2483).call(this, param_1, param_2, param_3);
        return new _0x23a642((this.x + varData_2491.x) / 2, (this.y + varData_2491.y) / 2, (this.z + varData_2491.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x229c50, _0x1f37a5, _0x17a6d6] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x229c50 !== "number" || typeof _0x1f37a5 !== "number" || typeof _0x17a6d6 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x1cc262, _0xa80c08, _0xedf2b8] = [this.x - _0x229c50, this.y - _0x1f37a5, this.z - _0x17a6d6];
        return Math.sqrt(_0x1cc262 * _0x1cc262 + _0xa80c08 * _0xa80c08 + _0xedf2b8 * _0xedf2b8);
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
        var varData_2492 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_2492;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_2482 = /* @__PURE__ */ new WeakSet();
    varData_2483 = function(param_1, param_2, param_3) {
      let varData_2493 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_2484) {
        varData_2493 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_2494 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_2493 = varData_2494;
      } else if (typeof param_1 === "object") {
        varData_2493 = param_1;
      } else {
        var varData_2495 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_2493 = varData_2495;
      }
      if (typeof varData_2493.x !== "number" || typeof varData_2493.y !== "number" || typeof varData_2493.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_2493;
    };
    var varData_2496 = varData_2484;
    var varData_2497;
    var varData_2498;
    var varData_2499 = class {
      constructor(param_1) {
        varData_2476(this, varData_2497, void 0);
        varData_2476(this, varData_2498, void 0);
        varData_2477(this, varData_2498, param_1 ?? 5);
        varData_2477(this, varData_2497, /* @__PURE__ */ new Map());
      }
      setTTL(param_1) {
        varData_2477(this, varData_2498, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_2475(this, varData_2497).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_2475(this, varData_2498)) * 1e3
        });
        return this;
      }
      get(param_1, _0x1a16eb = false) {
        const varData_2500 = varData_2475(this, varData_2497).get(param_1);
        const varData_2501 = varData_2500 ? _0x1a16eb ? true : varData_2500.expiration > Date.now() : false;
        if (!varData_2500 || !varData_2501) {
          if (varData_2500) {
            varData_2475(this, varData_2497).delete(param_1);
          }
          return;
        }
        return varData_2500.value;
      }
      has(param_1, _0x3635f8 = false) {
        const varData_2502 = varData_2475(this, varData_2497).get(param_1);
        const varData_2503 = varData_2502 ? _0x3635f8 ? true : varData_2502.expiration > Date.now() : false;
        if (varData_2502 && !varData_2503) {
          varData_2475(this, varData_2497).delete(param_1);
        }
        return varData_2503;
      }
      delete(param_1) {
        return varData_2475(this, varData_2497).delete(param_1);
      }
      clear() {
        varData_2475(this, varData_2497).clear();
      }
      values(_0x14e06c = false) {
        const varData_2504 = [];
        const timestamp = Date.now();
        for (const varData_2505 of varData_2475(this, varData_2497).values()) {
          if (_0x14e06c || varData_2505.expiration > timestamp) {
            varData_2504.push(varData_2505.value);
          }
        }
        return varData_2504;
      }
      keys(_0x43a2a7 = false) {
        const varData_2506 = [];
        const timestamp = Date.now();
        for (const [_0x40a232, _0x36fb14] of varData_2475(this, varData_2497).entries()) {
          if (_0x43a2a7 || _0x36fb14.expiration > timestamp) {
            varData_2506.push(_0x40a232);
          }
        }
        return varData_2506;
      }
      entries(_0x9cda2a = false) {
        const varData_2507 = [];
        const timestamp = Date.now();
        for (const [_0x449090, _0x323cee] of varData_2475(this, varData_2497).entries()) {
          if (_0x9cda2a || _0x323cee.expiration > timestamp) {
            varData_2507.push([_0x449090, _0x323cee.value]);
          }
        }
        return varData_2507;
      }
    };
    varData_2497 = /* @__PURE__ */ new WeakMap();
    varData_2498 = /* @__PURE__ */ new WeakMap();
    var varData_2508;
    var varData_2509;
    var varData_2510;
    var varData_2511;
    var varData_2512;
    var varData_2513;
    var varData_2514;
    var varData_2515;
    var varData_2516;
    var varData_2517;
    var varData_2518;
    var varData_2519;
    var varData_2520;
    var varData_2521;
    var varData_2522;
    var varData_2523;
    var varData_2524;
    var varData_2525;
    var varData_2526;
    var varData_2527;
    var varData_2528;
    var varData_2529;
    var varData_2530 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x699e05 = 30, _0x129baf = false) {
        varData_2476(this, varData_2520);
        varData_2476(this, varData_2522);
        varData_2476(this, varData_2524);
        varData_2476(this, varData_2526);
        varData_2476(this, varData_2528);
        varData_2476(this, varData_2508, void 0);
        varData_2476(this, varData_2509, void 0);
        varData_2476(this, varData_2510, void 0);
        varData_2476(this, varData_2511, void 0);
        varData_2476(this, varData_2512, void 0);
        varData_2476(this, varData_2513, void 0);
        varData_2476(this, varData_2514, void 0);
        varData_2476(this, varData_2515, void 0);
        varData_2476(this, varData_2516, void 0);
        varData_2476(this, varData_2517, void 0);
        varData_2476(this, varData_2518, void 0);
        varData_2476(this, varData_2519, void 0);
        varData_2477(this, varData_2508, param_1);
        varData_2477(this, varData_2509, param_4);
        varData_2477(this, varData_2510, param_5);
        varData_2477(this, varData_2511, param_2);
        varData_2477(this, varData_2512, param_3);
        varData_2477(this, varData_2513, _0x129baf);
        varData_2477(this, varData_2514, _0x699e05);
        varData_2477(this, varData_2516, varData_2475(this, varData_2509).x / _0x699e05);
        varData_2477(this, varData_2517, varData_2475(this, varData_2509).y / _0x699e05);
        varData_2477(this, varData_2515, varData_2475(this, varData_2516) * varData_2475(this, varData_2517));
        varData_2477(this, varData_2518, varData_2478(this, varData_2520, varData_2521).call(this, varData_2475(this, varData_2508), varData_2475(this, varData_2514), varData_2475(this, varData_2516), varData_2475(this, varData_2517), varData_2475(this, varData_2513)));
        varData_2477(this, varData_2519, varData_2478(this, varData_2522, varData_2523).call(this, varData_2475(this, varData_2518), varData_2475(this, varData_2515)));
      }
      get cells() {
        return varData_2475(this, varData_2518);
      }
      get cellSize() {
        return varData_2475(this, varData_2514);
      }
      get cellWidth() {
        return varData_2475(this, varData_2516);
      }
      get cellHeight() {
        return varData_2475(this, varData_2517);
      }
      get gridArea() {
        return varData_2475(this, varData_2519);
      }
      get gridCoverage() {
        return varData_2475(this, varData_2519) / varData_2475(this, varData_2510) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_2531;
        const varData_2532 = param_1.x - varData_2475(this, varData_2511).x;
        const varData_2533 = param_1.y - varData_2475(this, varData_2511).y;
        const varData_2534 = Math.floor(varData_2532 * varData_2475(this, varData_2514) / varData_2475(this, varData_2509).x);
        const varData_2535 = Math.floor(varData_2533 * varData_2475(this, varData_2514) / varData_2475(this, varData_2509).y);
        let varData_2536 = (varData_2531 = varData_2475(this, varData_2518)[varData_2534]) == null ? void 0 : varData_2531[varData_2535];
        if (!varData_2536 && varData_2475(this, varData_2513)) {
          varData_2536 = varData_2478(this, varData_2526, varData_2527).call(this, varData_2534, varData_2535, varData_2475(this, varData_2516), varData_2475(this, varData_2517), varData_2475(this, varData_2508));
          varData_2475(this, varData_2518)[varData_2534][varData_2535] = varData_2536;
          if (!varData_2536) {
            return false;
          }
          varData_2477(this, varData_2519, varData_2475(this, varData_2519) + varData_2475(this, varData_2515));
        }
        return varData_2536 ?? false;
      }
    };
    varData_2508 = /* @__PURE__ */ new WeakMap();
    varData_2509 = /* @__PURE__ */ new WeakMap();
    varData_2510 = /* @__PURE__ */ new WeakMap();
    varData_2511 = /* @__PURE__ */ new WeakMap();
    varData_2512 = /* @__PURE__ */ new WeakMap();
    varData_2513 = /* @__PURE__ */ new WeakMap();
    varData_2514 = /* @__PURE__ */ new WeakMap();
    varData_2515 = /* @__PURE__ */ new WeakMap();
    varData_2516 = /* @__PURE__ */ new WeakMap();
    varData_2517 = /* @__PURE__ */ new WeakMap();
    varData_2518 = /* @__PURE__ */ new WeakMap();
    varData_2519 = /* @__PURE__ */ new WeakMap();
    varData_2520 = /* @__PURE__ */ new WeakSet();
    varData_2521 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_2537 = {};
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_2537[loopIdx] = {};
        if (param_5) {
          continue;
        }
        for (let loopIdx_1 = 0; loopIdx_1 < param_2; loopIdx_1++) {
          const varData_2538 = varData_2478(this, varData_2526, varData_2527).call(this, loopIdx, loopIdx_1, param_3, param_4, param_1);
          if (!varData_2538) {
            continue;
          }
          varData_2537[loopIdx][loopIdx_1] = true;
        }
      }
      return varData_2537;
    };
    varData_2522 = /* @__PURE__ */ new WeakSet();
    varData_2523 = function(param_1, param_2) {
      let varData_2539 = 0;
      for (const varData_2540 in param_1) {
        for (const varData_2541 in param_1[varData_2540]) {
          varData_2539 += param_2;
        }
      }
      return varData_2539;
    };
    varData_2524 = /* @__PURE__ */ new WeakSet();
    varData_2525 = function(param_1, param_2, param_3, param_4) {
      const varData_2542 = [];
      const varData_2543 = param_1 * param_3 + varData_2475(this, varData_2511).x;
      const varData_2544 = param_2 * param_4 + varData_2475(this, varData_2511).y;
      varData_2542.push(new varData_2626(varData_2543, varData_2544));
      varData_2542.push(new varData_2626(varData_2543 + param_3, varData_2544));
      varData_2542.push(new varData_2626(varData_2543 + param_3, varData_2544 + param_4));
      varData_2542.push(new varData_2626(varData_2543, varData_2544 + param_4));
      return varData_2542;
    };
    varData_2526 = /* @__PURE__ */ new WeakSet();
    varData_2527 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_2545 = varData_2478(this, varData_2524, varData_2525).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_1 = false;
      for (const varData_2546 of varData_2545) {
        const varData_2547 = varData_2658.MathUtils.windingNumber(varData_2546, param_5);
        if (varData_2547 !== 0) {
          isDisabled_1 = true;
          break;
        }
      }
      if (!isDisabled_1) {
        return false;
      }
      for (let loopIdx = 0; loopIdx < varData_2545.length; loopIdx++) {
        const varData_2548 = varData_2545[loopIdx];
        const varData_2549 = varData_2545[(loopIdx + 1) % varData_2545.length];
        for (let loopIdx_1 = 0; loopIdx_1 < param_5.length; loopIdx_1++) {
          const varData_2550 = param_5[loopIdx_1];
          const varData_2551 = param_5[(loopIdx_1 + 1) % param_5.length];
          if (varData_2478(this, varData_2528, varData_2529).call(this, varData_2548, varData_2549, varData_2550, varData_2551)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_2528 = /* @__PURE__ */ new WeakSet();
    varData_2529 = function(param_1, param_2, param_3, param_4) {
      const varData_2552 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_2553 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_2554 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_2552 === 0) {
        return varData_2553 === 0 && varData_2554 === 0;
      }
      const varData_2555 = varData_2553 / varData_2552;
      const varData_2556 = varData_2554 / varData_2552;
      return varData_2555 >= 0 && varData_2555 <= 1 && varData_2556 >= 0 && varData_2556 <= 1;
    };
    var varData_2557;
    var varData_2558;
    var varData_2559;
    var varData_2560;
    var varData_2561;
    var varData_2562;
    var varData_2563;
    var varData_2564;
    var varData_2565;
    var varData_2566;
    var varData_2567;
    var varData_2568;
    var varData_2569;
    var varData_2570;
    var varData_2571;
    var varData_2572;
    var varData_2573;
    var varData_2574;
    var varData_2575 = class {
      constructor(param_1, _0x2caf88 = {}, _0x15a8de = {}) {
        varData_2476(this, varData_2565);
        varData_2476(this, varData_2567);
        varData_2476(this, varData_2569);
        varData_2476(this, varData_2571);
        varData_2476(this, varData_2573);
        varData_2476(this, varData_2557, void 0);
        varData_2476(this, varData_2558, void 0);
        varData_2476(this, varData_2559, void 0);
        varData_2476(this, varData_2560, void 0);
        varData_2476(this, varData_2561, void 0);
        varData_2476(this, varData_2562, void 0);
        varData_2476(this, varData_2563, void 0);
        varData_2476(this, varData_2564, void 0);
        varData_2477(this, varData_2557, varData_2658.getUUID());
        varData_2477(this, varData_2558, param_1);
        varData_2477(this, varData_2559, varData_2478(this, varData_2565, varData_2566).call(this, param_1));
        varData_2477(this, varData_2560, varData_2478(this, varData_2567, varData_2568).call(this, param_1));
        varData_2477(this, varData_2561, varData_2478(this, varData_2573, varData_2574).call(this, param_1));
        varData_2477(this, varData_2562, varData_2478(this, varData_2571, varData_2572).call(this, varData_2475(this, varData_2559), varData_2475(this, varData_2560)));
        varData_2477(this, varData_2563, varData_2478(this, varData_2569, varData_2570).call(this, varData_2475(this, varData_2559), varData_2475(this, varData_2560)));
        this.options = _0x2caf88;
        this.data = _0x15a8de;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_2477(this, varData_2564, new varData_2530(varData_2475(this, varData_2558), varData_2475(this, varData_2559), varData_2475(this, varData_2560), varData_2475(this, varData_2562), varData_2475(this, varData_2561), _0x2caf88.gridCellSize, _0x2caf88.useLazyGrid));
      }
      get id() {
        return varData_2475(this, varData_2557);
      }
      get center() {
        return varData_2475(this, varData_2563);
      }
      get min() {
        return varData_2475(this, varData_2559);
      }
      get max() {
        return varData_2475(this, varData_2560);
      }
      get points() {
        return [...varData_2475(this, varData_2558)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_2475(this, varData_2559).x || param_1.x > varData_2475(this, varData_2560).x) {
          return false;
        } else if (param_1.y < varData_2475(this, varData_2559).y || param_1.y > varData_2475(this, varData_2560).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_2496) {
          const varData_2576 = this.options.minZ ?? -Infinity;
          const varData_2577 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_2576 || param_1.z > varData_2577) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_2475(this, varData_2564)) {
          return varData_2475(this, varData_2564).isPointInsideGrid(param_1);
        }
        const varData_2578 = varData_2658.MathUtils.windingNumber(param_1, varData_2475(this, varData_2558));
        return varData_2578 !== 0;
      }
      addPoint(param_1) {
        varData_2475(this, varData_2558).push(param_1);
      }
      removePoint(param_1) {
        const varData_2579 = varData_2475(this, varData_2558).findIndex((param_1_1) => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_2579 === -1) {
          return;
        }
        varData_2475(this, varData_2558).splice(varData_2579, 1);
      }
      removeLastPoint() {
        varData_2475(this, varData_2558).pop();
      }
      recalculate() {
        varData_2477(this, varData_2559, varData_2478(this, varData_2565, varData_2566).call(this, varData_2475(this, varData_2558)));
        varData_2477(this, varData_2560, varData_2478(this, varData_2567, varData_2568).call(this, varData_2475(this, varData_2558)));
        varData_2477(this, varData_2561, varData_2478(this, varData_2573, varData_2574).call(this, varData_2475(this, varData_2558)));
        varData_2477(this, varData_2562, varData_2478(this, varData_2571, varData_2572).call(this, varData_2475(this, varData_2559), varData_2475(this, varData_2560)));
        varData_2477(this, varData_2563, varData_2478(this, varData_2569, varData_2570).call(this, varData_2475(this, varData_2559), varData_2475(this, varData_2560)));
        if (!this.options.useGrid) {
          return;
        }
        varData_2477(this, varData_2564, new varData_2530(varData_2475(this, varData_2558), varData_2475(this, varData_2559), varData_2475(this, varData_2560), varData_2475(this, varData_2562), varData_2475(this, varData_2561), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_2557 = /* @__PURE__ */ new WeakMap();
    varData_2558 = /* @__PURE__ */ new WeakMap();
    varData_2559 = /* @__PURE__ */ new WeakMap();
    varData_2560 = /* @__PURE__ */ new WeakMap();
    varData_2561 = /* @__PURE__ */ new WeakMap();
    varData_2562 = /* @__PURE__ */ new WeakMap();
    varData_2563 = /* @__PURE__ */ new WeakMap();
    varData_2564 = /* @__PURE__ */ new WeakMap();
    varData_2565 = /* @__PURE__ */ new WeakSet();
    varData_2566 = function(param_1) {
      let varData_2580 = Number.MAX_SAFE_INTEGER;
      let varData_2581 = Number.MAX_SAFE_INTEGER;
      for (const varData_2582 of param_1) {
        varData_2580 = Math.min(varData_2580, varData_2582.x);
        varData_2581 = Math.min(varData_2581, varData_2582.y);
      }
      return new varData_2626(varData_2580, varData_2581);
    };
    varData_2567 = /* @__PURE__ */ new WeakSet();
    varData_2568 = function(param_1) {
      let varData_2583 = Number.MIN_SAFE_INTEGER;
      let varData_2584 = Number.MIN_SAFE_INTEGER;
      for (const varData_2585 of param_1) {
        varData_2583 = Math.max(varData_2583, varData_2585.x);
        varData_2584 = Math.max(varData_2584, varData_2585.y);
      }
      return new varData_2626(varData_2583, varData_2584);
    };
    varData_2569 = /* @__PURE__ */ new WeakSet();
    varData_2570 = function(param_1, param_2) {
      const varData_2586 = param_2.add(param_1);
      return varData_2586.divideScalar(2);
    };
    varData_2571 = /* @__PURE__ */ new WeakSet();
    varData_2572 = function(param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_2573 = /* @__PURE__ */ new WeakSet();
    varData_2574 = function(param_1) {
      let varData_2587 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length - 1; loopIdx < param_1.length; loopIdx_1 = loopIdx++) {
        const varData_2588 = param_1[loopIdx];
        const varData_2589 = param_1[loopIdx_1];
        varData_2587 += varData_2588.x * varData_2589.y;
        varData_2587 -= varData_2588.y * varData_2589.x;
      }
      return Math.abs(varData_2587 / 2);
    };
    var varData_2590;
    var varData_2591;
    var varData_2592 = class _0x53ce31 {
      constructor(param_1, param_2) {
        varData_2476(this, varData_2590);
        const varData_2593 = varData_2478(this, varData_2590, varData_2591).call(this, param_1, param_2);
        this.x = varData_2593.x;
        this.y = varData_2593.y;
      }
      equals(param_1, param_2) {
        const varData_2594 = varData_2478(this, varData_2590, varData_2591).call(this, param_1, param_2);
        return this.x === varData_2594.x && this.y === varData_2594.y;
      }
      add(param_1, param_2, param_3) {
        const varData_2595 = varData_2478(this, varData_2590, varData_2591).call(this, param_1, param_2);
        const varData_2596 = this.x + (param_3 ? varData_2595.x * param_3 : varData_2595.x);
        const varData_2597 = this.y + (param_3 ? varData_2595.y * param_3 : varData_2595.y);
        return new _0x53ce31(varData_2596, varData_2597);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2598 = this.x + param_1;
        const varData_2599 = this.y + param_1;
        return new _0x53ce31(varData_2598, varData_2599);
      }
      sub(param_1, param_2, param_3) {
        const varData_2600 = varData_2478(this, varData_2590, varData_2591).call(this, param_1, param_2);
        const varData_2601 = this.x - (param_3 ? varData_2600.x * param_3 : varData_2600.x);
        const varData_2602 = this.y - (param_3 ? varData_2600.y * param_3 : varData_2600.y);
        return new _0x53ce31(varData_2601, varData_2602);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2603 = this.x - param_1;
        const varData_2604 = this.y - param_1;
        return new _0x53ce31(varData_2603, varData_2604);
      }
      multiply(param_1, param_2) {
        const varData_2605 = varData_2478(this, varData_2590, varData_2591).call(this, param_1, param_2);
        const varData_2606 = this.x * varData_2605.x;
        const varData_2607 = this.y * varData_2605.y;
        return new _0x53ce31(varData_2606, varData_2607);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2608 = this.x * param_1;
        const varData_2609 = this.y * param_1;
        return new _0x53ce31(varData_2608, varData_2609);
      }
      divide(param_1, param_2) {
        const varData_2610 = varData_2478(this, varData_2590, varData_2591).call(this, param_1, param_2);
        const varData_2611 = this.x / varData_2610.x;
        const varData_2612 = this.y / varData_2610.y;
        return new _0x53ce31(varData_2611, varData_2612);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2613 = this.x / param_1;
        const varData_2614 = this.y / param_1;
        return new _0x53ce31(varData_2613, varData_2614);
      }
      round() {
        const varData_2615 = Math.round(this.x);
        const varData_2616 = Math.round(this.y);
        return new _0x53ce31(varData_2615, varData_2616);
      }
      floor() {
        const varData_2617 = Math.floor(this.x);
        const varData_2618 = Math.floor(this.y);
        return new _0x53ce31(varData_2617, varData_2618);
      }
      ceil() {
        const varData_2619 = Math.ceil(this.x);
        const varData_2620 = Math.ceil(this.y);
        return new _0x53ce31(varData_2619, varData_2620);
      }
      getCenter(param_1, param_2) {
        const varData_2621 = varData_2478(this, varData_2590, varData_2591).call(this, param_1, param_2);
        return new _0x53ce31((this.x + varData_2621.x) / 2, (this.y + varData_2621.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0x2148c3, _0x5290ec] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0x2148c3 !== "number" || typeof _0x5290ec !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x5e0dcf, _0x258834] = [this.x - _0x2148c3, this.y - _0x5290ec];
        return Math.sqrt(_0x5e0dcf * _0x5e0dcf + _0x258834 * _0x258834);
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
        var varData_2622 = {
          x: this.x,
          y: this.y
        };
        return varData_2622;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_2590 = /* @__PURE__ */ new WeakSet();
    varData_2591 = function(param_1, param_2) {
      let varData_2623 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_2592 || param_1 instanceof varData_2496) {
        varData_2623 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_2624 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_2623 = varData_2624;
      } else if (typeof param_1 === "object") {
        varData_2623 = param_1;
      } else {
        var varData_2625 = {
          x: param_1,
          y: param_2
        };
        varData_2623 = varData_2625;
      }
      if (typeof varData_2623.x !== "number" || typeof varData_2623.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_2623;
    };
    var varData_2626 = varData_2592;
    var varData_2627 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_2628 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_2629 = ([_0x55cae1, _0x1cfcde, _0x218cd0], [_0x143fbd, _0x6494f, _0x2a2745]) => {
      const [_0x12cd99, _0x2143ab, _0x4efbed] = [_0x55cae1 - _0x143fbd, _0x1cfcde - _0x6494f, _0x218cd0 - _0x2a2745];
      return Math.sqrt(_0x12cd99 * _0x12cd99 + _0x2143ab * _0x2143ab + _0x4efbed * _0x4efbed);
    };
    var varData_2630 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_2631 = (param_1, param_2) => {
      if (param_1 instanceof varData_2626) {
        return param_1;
      } else if (param_1 instanceof varData_2496) {
        return new varData_2626(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_2626(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_2626(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_2626(param_1, param_2);
    };
    var varData_2632 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_2496) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_2496(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_2496(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_2496(param_1, param_2, param_3);
    };
    var varData_2633 = (param_1, param_2) => {
      let varData_2634 = 0;
      const varData_2635 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        const varData_2636 = param_2[loopIdx];
        const varData_2637 = param_2[(loopIdx + 1) % param_2.length];
        if (varData_2636.y <= param_1.y) {
          if (varData_2637.y > param_1.y && varData_2635(varData_2636, varData_2637, param_1) > 0) {
            varData_2634++;
          }
        } else if (varData_2637.y <= param_1.y && varData_2635(varData_2636, varData_2637, param_1) < 0) {
          varData_2634--;
        }
      }
      return varData_2634;
    };
    var varData_2638 = {
      clamp: varData_2627,
      getMapRange: varData_2628,
      getDistance: varData_2629,
      getRandomNumber: varData_2630,
      parseVector2: varData_2631,
      parseVector3: varData_2632,
      windingNumber: varData_2633
    };
    var varData_2639 = varData_2638;
    var varData_2640 = {};
    var varData_2641 = {
      ArrUtils: () => varData_2647
    };
    varData_2472(varData_2640, varData_2641);
    var varData_2642 = (param_1) => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const varData_2643 = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[varData_2643]] = [param_1[varData_2643], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_2644 = (param_1, param_2) => {
      const varData_2645 = [];
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_2645.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return varData_2645;
    };
    var varData_2646 = {
      shuffleArray: varData_2642,
      getRandomElements: varData_2644
    };
    var varData_2647 = varData_2646;
    function handleAction_242(param_1, param_2) {
      const varData_2648 = "_";
      const varData_2649 = handleAction_243((param_1_1, param_2_1, ..._0x443367) => {
        return param_1(param_1_1, ..._0x443367);
      }, param_2);
      return {
        get: function(..._0x331a19) {
          return varData_2649.get(varData_2648, ..._0x331a19);
        },
        reset: function() {
          varData_2649.reset(varData_2648);
        }
      };
    }
    function handleAction_243(param_1, param_2) {
      const varData_2650 = param_2.timeToLive || 6e4;
      const varData_2651 = {};
      const varData_2652 = param_2.immediateResolve || false;
      async function handleAction_244(param_1_1, ..._0x3ae9ff) {
        let varData_2653 = varData_2651[param_1_1];
        if (!varData_2653) {
          varData_2653 = {
            value: null,
            lastUpdated: 0
          };
          varData_2651[param_1_1] = varData_2653;
        }
        const timestamp = Date.now();
        if (varData_2653.lastUpdated === 0 || timestamp - varData_2653.lastUpdated > varData_2650) {
          const [_0x4a71a7, _0x336c7f] = await param_1(varData_2653, param_1_1, ..._0x3ae9ff);
          if (_0x4a71a7) {
            varData_2653.lastUpdated = timestamp;
            varData_2653.value = _0x336c7f;
          }
          return _0x336c7f;
        }
        if (varData_2652) {
          return Promise.resolve(varData_2653.value);
        } else {
          return await new Promise((param_1_2) => setTimeout(() => param_1_2(varData_2653.value), 0));
        }
      }
      return {
        get: async function(param_1_1, ..._0x2f2b06) {
          return await handleAction_244(param_1_1, ..._0x2f2b06);
        },
        reset: function(param_1_1) {
          const varData_2654 = varData_2651[param_1_1];
          if (varData_2654) {
            varData_2654.lastUpdated = 0;
          }
        },
        clear: function() {
          for (const varData_2655 in varData_2651) {
            delete varData_2651[varData_2655];
          }
        }
      };
    }
    function handleAction_245() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_131();
      } else {
        return new varData_704(4).toString();
      }
    }
    function handleAction_246(param_1) {
      return varData_158(param_1, varData_158.URL);
    }
    function handleAction_247(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_2656 = Date.now() - timestamp > param_2;
          if (param_1() || varData_2656) {
            clearInterval(intervalId);
            return param_1_1(varData_2656);
          }
        }, 1);
      });
    }
    function handleAction_248(param_1) {
      return new Promise((param_1_1) => setTimeout(() => param_1_1(), param_1));
    }
    function handleAction_249() {
      return handleAction_248(0);
    }
    var varData_2657 = {
      cache: handleAction_242,
      cacheableMap: handleAction_243,
      waitForCondition: handleAction_247,
      getUUID: handleAction_245,
      getStringHash: handleAction_246,
      wait: handleAction_248,
      waitForNextFrame: handleAction_249,
      deflate: varData_694,
      inflate: varData_698,
      ...varData_2480,
      ...varData_2640
    };
    var varData_2658 = varData_2657;
    var varData_2659 = ((param_1) => {
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
    })(varData_2659 || {});
    ;
    function handleAction_250(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2660 = param_1[param_6](param_7);
        var varData_2661 = varData_2660.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2660.done) {
        param_2(varData_2661);
      } else {
        Promise.resolve(varData_2661).then(param_4, param_5);
      }
    }
    function handleAction_251(param_1) {
      return function() {
        var varData_2662 = this;
        var varData_2663 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2664 = param_1.apply(varData_2662, varData_2663);
          function handleAction_252(param_1_2) {
            handleAction_250(varData_2664, param_1_1, param_2, handleAction_252, handleAction_253, "next", param_1_2);
          }
          function handleAction_253(param_1_2) {
            handleAction_250(varData_2664, param_1_1, param_2, handleAction_252, handleAction_253, "throw", param_1_2);
          }
          handleAction_252(void 0);
        });
      };
    }
    function handleAction_254(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2665 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2665);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_255(param_1, param_2) {
      var varData_2666;
      var varData_2667;
      var varData_2668;
      var varData_2669;
      var varData_2670 = {
        label: 0,
        sent: function() {
          if (varData_2668[0] & 1) {
            throw varData_2668[1];
          }
          return varData_2668[1];
        },
        trys: [],
        ops: []
      };
      varData_2669 = {
        next: handleAction_256(0),
        throw: handleAction_256(1),
        return: handleAction_256(2)
      };
      if (typeof Symbol === "function") {
        varData_2669[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2669;
      function handleAction_256(param_1_1) {
        return function(param_1_2) {
          return handleAction_257([param_1_1, param_1_2]);
        };
      }
      function handleAction_257(param_1_1) {
        if (varData_2666) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2670) {
          try {
            varData_2666 = 1;
            if (varData_2667 && (varData_2668 = param_1_1[0] & 2 ? varData_2667.return : param_1_1[0] ? varData_2667.throw || ((varData_2668 = varData_2667.return) && varData_2668.call(varData_2667), 0) : varData_2667.next) && !(varData_2668 = varData_2668.call(varData_2667, param_1_1[1])).done) {
              return varData_2668;
            }
            varData_2667 = 0;
            if (varData_2668) {
              param_1_1 = [param_1_1[0] & 2, varData_2668.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2668 = param_1_1;
                break;
              case 4:
                varData_2670.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2670.label++;
                varData_2667 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2670.ops.pop();
                varData_2670.trys.pop();
                continue;
              default:
                if (!(varData_2668 = varData_2670.trys, varData_2668 = varData_2668.length > 0 && varData_2668[varData_2668.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2670 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2668 || param_1_1[1] > varData_2668[0] && param_1_1[1] < varData_2668[3])) {
                  varData_2670.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2670.label < varData_2668[1]) {
                  varData_2670.label = varData_2668[1];
                  varData_2668 = param_1_1;
                  break;
                }
                if (varData_2668 && varData_2670.label < varData_2668[2]) {
                  varData_2670.label = varData_2668[2];
                  varData_2670.ops.push(param_1_1);
                  break;
                }
                if (varData_2668[2]) {
                  varData_2670.ops.pop();
                }
                varData_2670.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2670);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2667 = 0;
          } finally {
            varData_2666 = varData_2668 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2671 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2671;
      }
    }
    var dataMap_6 = /* @__PURE__ */ new Map();
    var varData_2672;
    varData_2672 = {};
    handleAction_254(varData_2672, GetHashKey("3dp_prop_patty_raw"), {
      dict: "core",
      name: "ent_anim_bbq",
      scale: 0.25
    });
    handleAction_254(varData_2672, GetHashKey("3dp_prop_patty_cooked"), {
      dict: "core",
      name: "ent_anim_bbq",
      scale: 0.5
    });
    handleAction_254(varData_2672, GetHashKey("3dp_prop_patty_ruined"), {
      dict: "core",
      name: "ent_amb_int_fireplace_sml",
      scale: 0.25
    });
    handleAction_254(varData_2672, GetHashKey("3dp_prop_burgerbun_raw"), {
      dict: "core",
      name: "ent_anim_bbq",
      scale: 0.25
    });
    handleAction_254(varData_2672, GetHashKey("3dp_prop_burgerbun"), {
      dict: "core",
      name: "ent_anim_bbq",
      scale: 0.5
    });
    handleAction_254(varData_2672, GetHashKey("3dp_prop_burgerbun_ruined"), {
      dict: "core",
      name: "ent_amb_int_fireplace_sml",
      scale: 0.25
    });
    var varData_2673 = varData_2672;
    function handleAction_258() {
      return;
    }
    on("np-objects:objectsCreated:snr-buns-restaurant", (function() {
      var varData_2674 = handleAction_251(function(param_1) {
        var varData_2675;
        var varData_2676;
        var varData_2677;
        var varData_2678;
        var varData_2679;
        var varData_2680;
        var varData_2681;
        var varData_2682;
        var varData_2683;
        var varData_2684;
        var varData_2685;
        var varData_2686;
        var varData_2687;
        return handleAction_255(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2675 = true;
              varData_2676 = false;
              varData_2677 = void 0;
              param_1_1.label = 1;
            case 1:
              param_1_1.trys.push([1, 6, 7, 8]);
              varData_2678 = param_1[Symbol.iterator]();
              param_1_1.label = 2;
            case 2:
              if (varData_2675 = (varData_2679 = varData_2678.next()).done) {
                return [3, 5];
              }
              varData_2680 = varData_2679.value;
              varData_2681 = varData_2680.object;
              varData_2682 = varData_2680.handle;
              if ((varData_2683 = varData_2681.data) === null || varData_2683 === void 0 ? void 0 : varData_2683.metadata?.isStorageItem) {
                return [3, 4];
              }
              varData_2684 = varData_2673[varData_2681.data.model];
              if (!varData_2684) {
                return [3, 4];
              }
              varData_2685 = new varData_2496(varData_2681.x, varData_2681.y, varData_2681.z);
              return [4, varData_2466(varData_2685, varData_2684.dict, varData_2684.name, varData_2684.scale)];
            case 3:
              varData_2686 = param_1_1.sent();
              dataMap_6.set(varData_2681.id, varData_2686);
              param_1_1.label = 4;
            case 4:
              varData_2675 = true;
              return [3, 2];
            case 5:
              return [3, 8];
            case 6:
              varData_2687 = param_1_1.sent();
              varData_2676 = true;
              varData_2677 = varData_2687;
              return [3, 8];
            case 7:
              try {
                if (!varData_2675 && varData_2678.return != null) {
                  varData_2678.return();
                }
              } finally {
                if (varData_2676) {
                  throw varData_2677;
                }
              }
              return [7];
            case 8:
              return [2];
          }
        });
      });
      return function(param_1) {
        return varData_2674.apply(this, arguments);
      };
    })());
    on("np-objects:objectUpdated:snr-buns-restaurant", (function() {
      var varData_2688 = handleAction_251(function(param_1) {
        var varData_2689;
        var varData_2690;
        var varData_2691;
        var varData_2692;
        var varData_2693;
        return handleAction_255(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if ((varData_2689 = param_1.data) === null || varData_2689 === void 0 ? void 0 : varData_2689.metadata?.isStorageItem) {
                return [2];
              }
              varData_2690 = varData_2673[param_1.data.model];
              if (!varData_2690) {
                return [2];
              }
              varData_2691 = dataMap_6.get(param_1.id);
              if (varData_2691) {
                handleAction_241(varData_2691);
              }
              varData_2692 = new varData_2496(param_1.x, param_1.y, param_1.z);
              return [4, varData_2466(varData_2692, varData_2690.dict, varData_2690.name, varData_2690.scale)];
            case 1:
              varData_2693 = param_1_1.sent();
              dataMap_6.set(param_1.id, varData_2693);
              return [2];
          }
        });
      });
      return function(param_1) {
        return varData_2688.apply(this, arguments);
      };
    })());
    on("np-objects:objectsDeleted:snr-buns-restaurant", function(param_1) {
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2694 = void 0;
      try {
        for (var loopIdx = param_1[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2695 = loopIdx_1.value;
          var varData_2696 = varData_2695.object;
          var varData_2697 = varData_2695.handle;
          var varData_2698 = dataMap_6.get(varData_2696.id);
          if (!varData_2698) {
            continue;
          }
          handleAction_241(varData_2698);
          dataMap_6.delete(varData_2696.id);
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2694 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2694;
          }
        }
      }
    });
    ;
    var varData_2699 = 25e3;
    var varData_2700 = 25e3;
    var varData_2701 = 25e3;
    var varData_2702 = 15e3;
    var varData_2703 = {
      id: "1",
      coords: [-504.35, -685.3, 33.6]
    };
    var varData_2704 = {
      id: "2",
      coords: [-504.33, -685.02, 33.6]
    };
    var varData_2705 = {
      id: "3",
      coords: [-504.33, -684.79, 33.6]
    };
    var varData_2706 = {
      id: "4",
      coords: [-504.36, -684.53, 33.6]
    };
    var varData_2707 = {
      id: "5",
      coords: [-504.34, -684.31, 33.6]
    };
    var varData_2708 = {
      id: "6",
      coords: [-504.35, -684.01, 33.6]
    };
    var varData_2709 = {
      "1": varData_2703,
      "2": varData_2704,
      "3": varData_2705,
      "4": varData_2706,
      "5": varData_2707,
      "6": varData_2708
    };
    var varData_2710 = varData_2709;
    var varData_2711 = {
      id: "1",
      coords: [-504.34, -686.58, 33.61]
    };
    var varData_2712 = {
      id: "2",
      coords: [-504.52, -686.51, 33.61]
    };
    var varData_2713 = {
      id: "3",
      coords: [-504.7, -686.57, 33.61]
    };
    var varData_2714 = {
      id: "4",
      coords: [-504.84, -686.49, 33.61]
    };
    var varData_2715 = {
      "1": varData_2711,
      "2": varData_2712,
      "3": varData_2713,
      "4": varData_2714
    };
    var varData_2716 = varData_2715;
    var varData_2717 = {
      patty: {
        raw: "3dp_prop_patty_raw",
        cooked: "3dp_prop_patty_cooked",
        burnt: "3dp_prop_patty_ruined"
      },
      fries: {
        raw: "3dp_prop_frier_empty",
        cooked: {
          model: "3dp_prop_frier_full",
          offset: {
            x: 0.09,
            y: 0,
            z: 0.21
          }
        }
      },
      drink: {
        raw: "prop_food_bs_juice02",
        cooked: "prop_food_bs_juice01"
      },
      bun: {
        raw: "3dp_prop_burgerbun_raw",
        cooked: "3dp_prop_burgerbun",
        burnt: "3dp_prop_burgerbun_ruined"
      }
    };
    var varData_2718 = {
      coords: [-505.26, -697.95, 33.66]
    };
    var varData_2719 = {
      coords: [-505.26, -697.58, 33.66]
    };
    var varData_2720 = {
      coords: [-505.26, -698.11, 33.66]
    };
    var varData_2721 = {
      coords: [-505.26, -697.71, 33.66]
    };
    var varData_2722 = {
      coords: [-505.26, -697.85, 33.66]
    };
    var varData_2723 = {
      orangotang: varData_2718,
      sprunk: varData_2719,
      ecola: varData_2720,
      ecolalight: varData_2721,
      water: varData_2722
    };
    var varData_2724 = {
      coords: [-505.91, -698.44, 33.67]
    };
    var varData_2725 = {
      coords: [-506.06, -698.44, 33.67]
    };
    var varData_2726 = {
      coords: [-505.66, -698.44, 33.67]
    };
    var varData_2727 = {
      coords: [-505.51, -698.44, 33.67]
    };
    var varData_2728 = {
      coords: [-505.79, -698.44, 33.67]
    };
    var varData_2729 = {
      orangotang: varData_2724,
      ecola: varData_2725,
      ecolalight: varData_2726,
      sprunk: varData_2727,
      water: varData_2728
    };
    var varData_2730 = {
      "1": varData_2723,
      "2": varData_2729
    };
    var varData_2731 = varData_2730;
    var varData_2732 = {
      id: "1",
      coords: [-505.99, -686.22, 33.7]
    };
    var varData_2733 = {
      id: "2",
      coords: [-505.99, -686.52, 33.7]
    };
    var varData_2734 = {
      id: "3",
      coords: [-505.99, -686.91, 33.7]
    };
    var varData_2735 = {
      id: "4",
      coords: [-505.99, -687.22, 33.7]
    };
    var varData_2736 = {
      "1": varData_2732,
      "2": varData_2733,
      "3": varData_2734,
      "4": varData_2735
    };
    var varData_2737 = varData_2736;
    var varData_2738 = {
      cheese: "3dp_prop_cheese",
      lettuce: "3dp_prop_lettuce",
      tomato: "3dp_prop_tomato",
      onion: "3dp_prop_onion",
      pickle: "3dp_prop_pickle"
    };
    var varData_2739 = {
      cheese: "3dp_prop_slice_cheese",
      lettuce: "3dp_prop_slice_lettuce",
      tomato: "3dp_prop_slice_tomato",
      onion: "3dp_prop_slice_onion",
      pickle: "3dp_prop_slice_pickles",
      bun: "3dp_prop_burgerbun_half",
      patty: "3dp_prop_patty_cooked"
    };
    var varData_2740 = {
      main: [{
        id: "burger",
        name: "Burger",
        item_id: "hamburger",
        emoji: "\u{1F354}",
        price: 14.99,
        variant: "snr_burger",
        requiredIngredients: ["patty", "bun"],
        ingredients: ["lettuce", "tomato", "onion", "cheese", "pickle"]
      }],
      drink: [{
        id: "sprunk",
        name: "Sprunk",
        item_id: "fountain_drink",
        emoji: "\u{1F964}",
        price: 7.99,
        variant: "sprunk",
        ingredients: ["ice"]
      }, {
        id: "ecola",
        name: "eCola",
        item_id: "fountain_drink",
        emoji: "\u{1F964}",
        price: 7.99,
        variant: "ecola",
        ingredients: ["ice"]
      }, {
        id: "ecolalight",
        name: "eCola Light",
        item_id: "fountain_drink",
        emoji: "\u{1F964}",
        price: 7.99,
        variant: "ecolalight",
        ingredients: ["ice"]
      }, {
        id: "orangotang",
        name: "Orang-O-tang",
        item_id: "fountain_drink",
        emoji: "\u{1F964}",
        price: 7.99,
        variant: "orangotang",
        ingredients: ["ice"]
      }],
      side: [{
        id: "fries",
        name: "Fries",
        item_id: "fries",
        emoji: "\u{1F35F}",
        price: 8.99,
        variant: "snr_fries"
      }]
    };
    ;
    function handleAction_259(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_260(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_261(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2741 = param_1[param_6](param_7);
        var varData_2742 = varData_2741.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2741.done) {
        param_2(varData_2742);
      } else {
        Promise.resolve(varData_2742).then(param_4, param_5);
      }
    }
    function handleAction_262(param_1) {
      return function() {
        var varData_2743 = this;
        var varData_2744 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2745 = param_1.apply(varData_2743, varData_2744);
          function handleAction_263(param_1_2) {
            handleAction_261(varData_2745, param_1_1, param_2, handleAction_263, handleAction_264, "next", param_1_2);
          }
          function handleAction_264(param_1_2) {
            handleAction_261(varData_2745, param_1_1, param_2, handleAction_263, handleAction_264, "throw", param_1_2);
          }
          handleAction_263(void 0);
        });
      };
    }
    function handleAction_265(param_1, param_2) {
      var varData_2746 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2746 == null) {
        return;
      }
      var varData_2747 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2748;
      var varData_2749;
      try {
        for (varData_2746 = varData_2746.call(param_1); !(isEnabled_2 = (varData_2748 = varData_2746.next()).done); isEnabled_2 = true) {
          varData_2747.push(varData_2748.value);
          if (param_2 && varData_2747.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2749 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2746.return != null) {
            varData_2746.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2749;
          }
        }
      }
      return varData_2747;
    }
    function handleAction_266() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_267(param_1, param_2) {
      return handleAction_260(param_1) || handleAction_265(param_1, param_2) || handleAction_268(param_1, param_2) || handleAction_266();
    }
    function handleAction_268(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_259(param_1, param_2);
      }
      var varData_2750 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2750 === "Object" && param_1.constructor) {
        varData_2750 = param_1.constructor.name;
      }
      if (varData_2750 === "Map" || varData_2750 === "Set") {
        return Array.from(varData_2750);
      }
      if (varData_2750 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2750)) {
        return handleAction_259(param_1, param_2);
      }
    }
    function handleAction_269(param_1, param_2) {
      var varData_2751;
      var varData_2752;
      var varData_2753;
      var varData_2754;
      var varData_2755 = {
        label: 0,
        sent: function() {
          if (varData_2753[0] & 1) {
            throw varData_2753[1];
          }
          return varData_2753[1];
        },
        trys: [],
        ops: []
      };
      varData_2754 = {
        next: handleAction_270(0),
        throw: handleAction_270(1),
        return: handleAction_270(2)
      };
      if (typeof Symbol === "function") {
        varData_2754[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2754;
      function handleAction_270(param_1_1) {
        return function(param_1_2) {
          return handleAction_271([param_1_1, param_1_2]);
        };
      }
      function handleAction_271(param_1_1) {
        if (varData_2751) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2755) {
          try {
            varData_2751 = 1;
            if (varData_2752 && (varData_2753 = param_1_1[0] & 2 ? varData_2752.return : param_1_1[0] ? varData_2752.throw || ((varData_2753 = varData_2752.return) && varData_2753.call(varData_2752), 0) : varData_2752.next) && !(varData_2753 = varData_2753.call(varData_2752, param_1_1[1])).done) {
              return varData_2753;
            }
            varData_2752 = 0;
            if (varData_2753) {
              param_1_1 = [param_1_1[0] & 2, varData_2753.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2753 = param_1_1;
                break;
              case 4:
                varData_2755.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2755.label++;
                varData_2752 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2755.ops.pop();
                varData_2755.trys.pop();
                continue;
              default:
                if (!(varData_2753 = varData_2755.trys, varData_2753 = varData_2753.length > 0 && varData_2753[varData_2753.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2755 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2753 || param_1_1[1] > varData_2753[0] && param_1_1[1] < varData_2753[3])) {
                  varData_2755.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2755.label < varData_2753[1]) {
                  varData_2755.label = varData_2753[1];
                  varData_2753 = param_1_1;
                  break;
                }
                if (varData_2753 && varData_2755.label < varData_2753[2]) {
                  varData_2755.label = varData_2753[2];
                  varData_2755.ops.push(param_1_1);
                  break;
                }
                if (varData_2753[2]) {
                  varData_2755.ops.pop();
                }
                varData_2755.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2755);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2752 = 0;
          } finally {
            varData_2751 = varData_2753 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2756 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2756;
      }
    }
    var varData_2757 = "anims@kitchen";
    var varData_2758 = {
      model: "prop_knife",
      x: 0.129854,
      y: 0.072598,
      z: 0.031607,
      xRot: 29.0505,
      yRot: 3.1666,
      zRot: -33.4354,
      bone: 57005
    };
    var varData_2759 = {
      model: "prop_knife",
      x: 0.129854,
      y: 0.072598,
      z: 0.031607,
      xRot: 29.0505,
      yRot: 3.1666,
      zRot: -33.4354,
      bone: 57005
    };
    var varData_2760 = {
      model: "v_res_fa_sponge01",
      x: 0.0965,
      y: 52e-4,
      z: -0.0265,
      xRot: -150.5867,
      yRot: 4.7744,
      zRot: -16.2116,
      bone: 57005
    };
    var varData_2761 = {
      model: "v_ret_fh_plate4",
      x: 0.250413,
      y: 0.093438,
      z: 0.051906,
      xRot: -30.6458,
      yRot: -25.373,
      zRot: 83.7352,
      bone: 18905
    };
    var varData_2762 = {
      model: "v_ind_cfscoop",
      x: 0.1252,
      y: 0.1253,
      z: 0.0141,
      xRot: 15.1659,
      yRot: -1.337,
      zRot: 85.0984,
      bone: 57005
    };
    var varData_2763 = {
      model: "3dp_prop_food_fries",
      x: 0.1522,
      y: -0.0632,
      z: 0.0232,
      xRot: -87.1663,
      yRot: 5.6278,
      zRot: -190.9394,
      bone: 18905
    };
    var varData_2764 = {
      chopping_1: {
        animation: "chopping",
        heading: 275.33,
        position: new varData_1513(-502.84, -685.49, 33.68),
        objects: [varData_2758]
      },
      chopping_2: {
        animation: "chopping",
        heading: 275.33,
        position: new varData_1513(-502.78, -682.82, 33.68),
        objects: [varData_2759]
      },
      burgerassumbly: {
        animation: "burgerassumbly",
        heading: 11.79,
        position: new varData_1513(-505.12, -688.65, 33.68),
        objects: []
      },
      dishwashing: {
        animation: "dishwashing",
        heading: 7.05,
        position: new varData_1513(-505.99, -681.31, 33.68),
        objects: [varData_2760, varData_2761]
      },
      friesscoop: {
        animation: "friesscoop",
        heading: 275.09,
        position: new varData_1513(-506.2, -685.5, 33.68),
        objects: [varData_2762, varData_2763]
      }
    };
    var dataMap_7 = /* @__PURE__ */ new Map();
    var varData_2765 = (function() {
      var varData_2766 = handleAction_262(function(param_1) {
        var varData_2767;
        var varData_2768;
        var varData_2769;
        var varData_2770;
        var varData_2771;
        var varData_2772;
        var varData_2773;
        var varData_2774;
        var varData_2775;
        var varData_2776;
        var varData_2777;
        var varData_2778;
        var varData_2779;
        var varData_2780;
        var varData_2781;
        var varData_2782;
        var varData_2783;
        var varData_2784;
        var varData_2785;
        var varData_2786;
        var varData_2787;
        var varData_2788;
        var varData_2789;
        var varData_2790;
        return handleAction_269(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2767 = varData_2764[param_1];
              if (!varData_2767) {
                return [2];
              }
              return [4, varData_2063.loadAnim(varData_2757)];
            case 1:
              param_1_1.sent();
              varData_2768 = PlayerPedId();
              varData_2769 = varData_2767.position;
              TaskGoStraightToCoord(varData_2768, varData_2769.x, varData_2769.y, varData_2769.z, 1, 5e3, varData_2767.heading, 0.15);
              return [4, varData_1675.waitForCondition(function() {
                return GetScriptTaskStatus(varData_2768, 2106541073) === 7;
              }, 1e4)];
            case 2:
              param_1_1.sent();
              varData_2770 = handleAction_267(GetEntityCoords(varData_2768), 3);
              varData_2771 = varData_2770[0];
              varData_2772 = varData_2770[1];
              varData_2773 = varData_2770[2];
              varData_2774 = true;
              varData_2775 = false;
              varData_2776 = void 0;
              param_1_1.label = 3;
            case 3:
              param_1_1.trys.push([3, 8, 9, 10]);
              varData_2777 = varData_2767.objects[Symbol.iterator]();
              param_1_1.label = 4;
            case 4:
              if (varData_2774 = (varData_2778 = varData_2777.next()).done) {
                return [3, 7];
              }
              varData_2779 = varData_2778.value;
              varData_2780 = GetHashKey(varData_2779.model);
              return [4, varData_2063.loadModel(varData_2780)];
            case 5:
              param_1_1.sent();
              varData_2781 = CreateObject(varData_2780, varData_2771, varData_2772, varData_2773, true, true, false);
              varData_2782 = NetworkGetNetworkIdFromEntity(varData_2781);
              SetNetworkIdCanMigrate(varData_2782, false);
              varData_2783 = GetPedBoneIndex(varData_2768, varData_2779.bone);
              AttachEntityToEntity(varData_2781, varData_2768, varData_2783, varData_2779.x, varData_2779.y, varData_2779.z, varData_2779.xRot, varData_2779.yRot, varData_2779.zRot, false, false, false, false, 5, true);
              dataMap_7.set(varData_2781, varData_2767.animation);
              param_1_1.label = 6;
            case 6:
              varData_2774 = true;
              return [3, 4];
            case 7:
              return [3, 10];
            case 8:
              varData_2784 = param_1_1.sent();
              varData_2775 = true;
              varData_2776 = varData_2784;
              return [3, 10];
            case 9:
              try {
                if (!varData_2774 && varData_2777.return != null) {
                  varData_2777.return();
                }
              } finally {
                if (varData_2775) {
                  throw varData_2776;
                }
              }
              return [7];
            case 10:
              varData_2785 = handleAction_267(GetEntityRotation(PlayerPedId(), 2), 3);
              varData_2786 = varData_2785[0];
              varData_2787 = varData_2785[1];
              varData_2788 = varData_2785[2];
              TaskPlayAnimAdvanced(varData_2768, varData_2757, varData_2767.animation, varData_2769.x, varData_2769.y, varData_2769.z, varData_2786, varData_2787, varData_2788, 8, -8, -1, 17, 0, 0, 0);
              if (param_1 === "chopping") {
                varData_2789 = NetworkGetNetworkIdFromEntity(PlayerPedId());
                varData_1738.emitNet("snr-buns:startSound", varData_2789, "chop");
              }
              SetPedKeepTask(varData_2768, true);
              varData_2790 = setInterval(function() {
                if (!IsEntityPlayingAnim(varData_2768, varData_2757, varData_2767.animation, 3)) {
                  handleAction_272(varData_2767.animation);
                  clearInterval(varData_2790);
                }
              }, 500);
              return [2];
          }
        });
      });
      return function _0x7c48ea(param_1) {
        return varData_2766.apply(this, arguments);
      };
    })();
    function handleAction_272(param_1) {
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2791 = void 0;
      try {
        for (var loopIdx = dataMap_7[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2792 = handleAction_267(loopIdx_1.value, 2);
          var varData_2793 = varData_2792[0];
          var varData_2794 = varData_2792[1];
          if (param_1 !== varData_2794) {
            continue;
          }
          DeleteEntity(varData_2793);
          dataMap_7.delete(varData_2793);
          if (varData_2794 === "chopping") {
            var varData_2795 = NetworkGetNetworkIdFromEntity(PlayerPedId());
            varData_1738.emitNet("snr-buns:stopSound", varData_2795);
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2791 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2791;
          }
        }
      }
      ClearPedTasks(PlayerPedId());
    }
    on("onResourceStop", function(param_1) {
      if (param_1 !== GetCurrentResourceName()) {
        return;
      }
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2796 = void 0;
      try {
        for (var loopIdx = dataMap_7[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
          var varData_2797 = handleAction_267(loopIdx_1.value, 2);
          var varData_2798 = varData_2797[1];
          handleAction_272(varData_2798);
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2796 = err;
      } finally {
        try {
          if (!isEnabled_2 && loopIdx.return != null) {
            loopIdx.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2796;
          }
        }
      }
    });
    ;
    function handleAction_273(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_274(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_275(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_273(param_1);
      }
    }
    function handleAction_276(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2799 = param_1[param_6](param_7);
        var varData_2800 = varData_2799.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2799.done) {
        param_2(varData_2800);
      } else {
        Promise.resolve(varData_2800).then(param_4, param_5);
      }
    }
    function handleAction_277(param_1) {
      return function() {
        var varData_2801 = this;
        var varData_2802 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2803 = param_1.apply(varData_2801, varData_2802);
          function handleAction_278(param_1_2) {
            handleAction_276(varData_2803, param_1_1, param_2, handleAction_278, handleAction_279, "next", param_1_2);
          }
          function handleAction_279(param_1_2) {
            handleAction_276(varData_2803, param_1_1, param_2, handleAction_278, handleAction_279, "throw", param_1_2);
          }
          handleAction_278(void 0);
        });
      };
    }
    function handleAction_280(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_281(param_1, param_2) {
      var varData_2804 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2804 == null) {
        return;
      }
      var varData_2805 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2806;
      var varData_2807;
      try {
        for (varData_2804 = varData_2804.call(param_1); !(isEnabled_2 = (varData_2806 = varData_2804.next()).done); isEnabled_2 = true) {
          varData_2805.push(varData_2806.value);
          if (param_2 && varData_2805.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2807 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2804.return != null) {
            varData_2804.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2807;
          }
        }
      }
      return varData_2805;
    }
    function handleAction_282() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_283() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_284(param_1, param_2) {
      return handleAction_274(param_1) || handleAction_281(param_1, param_2) || handleAction_286(param_1, param_2) || handleAction_282();
    }
    function handleAction_285(param_1) {
      return handleAction_275(param_1) || handleAction_280(param_1) || handleAction_286(param_1) || handleAction_283();
    }
    function handleAction_286(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_273(param_1, param_2);
      }
      var varData_2808 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2808 === "Object" && param_1.constructor) {
        varData_2808 = param_1.constructor.name;
      }
      if (varData_2808 === "Map" || varData_2808 === "Set") {
        return Array.from(varData_2808);
      }
      if (varData_2808 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2808)) {
        return handleAction_273(param_1, param_2);
      }
    }
    function handleAction_287(param_1, param_2) {
      var varData_2809;
      var varData_2810;
      var varData_2811;
      var varData_2812;
      var varData_2813 = {
        label: 0,
        sent: function() {
          if (varData_2811[0] & 1) {
            throw varData_2811[1];
          }
          return varData_2811[1];
        },
        trys: [],
        ops: []
      };
      varData_2812 = {
        next: handleAction_288(0),
        throw: handleAction_288(1),
        return: handleAction_288(2)
      };
      if (typeof Symbol === "function") {
        varData_2812[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2812;
      function handleAction_288(param_1_1) {
        return function(param_1_2) {
          return handleAction_289([param_1_1, param_1_2]);
        };
      }
      function handleAction_289(param_1_1) {
        if (varData_2809) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2813) {
          try {
            varData_2809 = 1;
            if (varData_2810 && (varData_2811 = param_1_1[0] & 2 ? varData_2810.return : param_1_1[0] ? varData_2810.throw || ((varData_2811 = varData_2810.return) && varData_2811.call(varData_2810), 0) : varData_2810.next) && !(varData_2811 = varData_2811.call(varData_2810, param_1_1[1])).done) {
              return varData_2811;
            }
            varData_2810 = 0;
            if (varData_2811) {
              param_1_1 = [param_1_1[0] & 2, varData_2811.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2811 = param_1_1;
                break;
              case 4:
                varData_2813.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2813.label++;
                varData_2810 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2813.ops.pop();
                varData_2813.trys.pop();
                continue;
              default:
                if (!(varData_2811 = varData_2813.trys, varData_2811 = varData_2811.length > 0 && varData_2811[varData_2811.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2813 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2811 || param_1_1[1] > varData_2811[0] && param_1_1[1] < varData_2811[3])) {
                  varData_2813.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2813.label < varData_2811[1]) {
                  varData_2813.label = varData_2811[1];
                  varData_2811 = param_1_1;
                  break;
                }
                if (varData_2811 && varData_2813.label < varData_2811[2]) {
                  varData_2813.label = varData_2811[2];
                  varData_2813.ops.push(param_1_1);
                  break;
                }
                if (varData_2811[2]) {
                  varData_2813.ops.pop();
                }
                varData_2813.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2813);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2810 = 0;
          } finally {
            varData_2809 = varData_2811 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2814 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2814;
      }
    }
    var dataSet_5 = /* @__PURE__ */ new Set();
    on("snr-buns:finishDrink", (function() {
      var varData_2815 = handleAction_277(function(param_1, param_2, param_3) {
        var varData_2816;
        return handleAction_287(this, function(param_1_1) {
          varData_2816 = globalThis.exports["np-objects"].GetObjectByEntity(param_2);
          if (!varData_2816) {
            return [2];
          }
          varData_1778.execute("snr-buns:finishDrink", varData_2816.id, varData_2284?.id);
          return [2];
        });
      });
      return function(param_1, param_2, param_3) {
        return varData_2815.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:drinks", (function() {
      var varData_2817 = handleAction_277(function(param_1) {
        var varData_2818;
        var varData_2819;
        return handleAction_287(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2356.get("snr_buns")];
            case 1:
              varData_2818 = param_1_1.sent();
              if (!varData_2818) {
                return [2];
              }
              varData_2819 = varData_2818.drink.map(function(param_1_2) {
                var varData_2820 = param_1_2.ingredients ? param_1_2.ingredients.map(function(param_1_3) {
                  return handleAction_134(param_1_3);
                }) : [];
                return {
                  title: param_1_2.name,
                  children: [{
                    title: "Dispense",
                    icon: "glass-whiskey",
                    action: "snr-buns:startDrink",
                    key: {
                      id: param_1.id,
                      drink: param_1_2
                    }
                  }].concat(handleAction_285(varData_2820.map(function(param_1_3) {
                    var varData_2821 = {
                      title: param_1_3.name,
                      titleRight: param_1_3.emoji,
                      type: "checkbox",
                      key: param_1_3.id,
                      isChecked: true
                    };
                    return varData_2821;
                  })))
                };
              });
              globalThis.exports["np-ui"].showContextMenu(varData_2819);
              return [2];
          }
        });
      });
      return function(param_1) {
        return varData_2817.apply(this, arguments);
      };
    })());
    RegisterUICallback("snr-buns:startDrink", (function() {
      var varData_2822 = handleAction_277(function(param_1, param_2) {
        var varData_2823;
        var varData_2824;
        var varData_2825;
        var varData_2826;
        var varData_2827;
        var varData_2828;
        var varData_2829;
        return handleAction_287(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2823 = param_1.data.checkboxes ? Object.entries(param_1.data.checkboxes).map(function(param_1_2) {
                var varData_2830 = handleAction_284(param_1_2, 2);
                var varData_2831 = varData_2830[0];
                var varData_2832 = varData_2830[1];
                if (varData_2832) {
                  return varData_2831;
                } else {
                  return null;
                }
              }).filter(function(param_1_2) {
                return param_1_2;
              }) : [];
              varData_2824 = param_1.key.id;
              varData_2825 = param_1.key.drink;
              var varData_2833 = {
                id: varData_2824,
                drink: varData_2825,
                ingredients: varData_2823
              };
              varData_2826 = varData_2833;
              return [4, varData_1778.execute("snr-buns:startDrink", varData_2826)];
            case 1:
              varData_2827 = handleAction_284.apply(void 0, [param_1_1.sent(), 2]);
              varData_2828 = varData_2827[0];
              varData_2829 = varData_2827[1];
              emit("DoLongHudText", varData_2829, varData_2828 ? 1 : 2);
              param_2({
                data: "success",
                meta: {
                  ok: true,
                  message: ""
                }
              });
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2822.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:cook", handleAction_277(function() {
      var varData_2834;
      var varData_2835;
      var varData_2836;
      return handleAction_287(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_1778.execute("snr-buns:startPatty")];
          case 1:
            varData_2834 = handleAction_284.apply(void 0, [param_1.sent(), 2]);
            varData_2835 = varData_2834[0];
            varData_2836 = varData_2834[1];
            if (!varData_2836) {
              return [2];
            }
            emit("DoLongHudText", varData_2836, varData_2835 ? 1 : 2);
            return [2];
        }
      });
    }));
    on("snr-buns:finishPatty", (function() {
      var varData_2837 = handleAction_277(function(param_1, param_2, param_3) {
        var varData_2838;
        var varData_2839;
        var varData_2840;
        var varData_2841;
        return handleAction_287(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2838 = globalThis.exports["np-objects"].GetObjectByEntity(param_2);
              if (!varData_2838) {
                return [2];
              }
              return [4, varData_1778.execute("snr-buns:finishPatty", varData_2838.id)];
            case 1:
              varData_2839 = handleAction_284.apply(void 0, [param_1_1.sent(), 2]);
              varData_2840 = varData_2839[0];
              varData_2841 = varData_2839[1];
              emit("DoLongHudText", varData_2841, varData_2840 ? 1 : 2);
              return [2];
          }
        });
      });
      return function(param_1, param_2, param_3) {
        return varData_2837.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:burgers", (function() {
      var varData_2842 = handleAction_277(function(param_1, param_2, param_3) {
        var varData_2843;
        var varData_2844;
        var varData_2845;
        var varData_2846;
        var varData_2847;
        var varData_2848;
        var varData_2849;
        var varData_2850;
        var varData_2851;
        return handleAction_287(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2843 = [];
              return [4, varData_2356.get("snr_buns")];
            case 1:
              varData_2844 = param_1_1.sent();
              if (!varData_2844) {
                return [2];
              }
              varData_2845 = true;
              varData_2846 = false;
              varData_2847 = void 0;
              try {
                for (varData_2848 = varData_2844.main[Symbol.iterator](); !(varData_2845 = (varData_2849 = varData_2848.next()).done); varData_2845 = true) {
                  varData_2850 = varData_2849.value;
                  varData_2851 = varData_2850.ingredients ? varData_2850.ingredients.map(function(param_1_2) {
                    return handleAction_134(param_1_2);
                  }) : [];
                  varData_2843.push({
                    title: varData_2850.name,
                    children: [{
                      title: "Build",
                      icon: "hamburger",
                      action: "snr-buns:buildBurger",
                      key: {
                        id: varData_2850.id
                      }
                    }].concat(handleAction_285(varData_2851.map(function(param_1_2) {
                      var varData_2852 = {
                        title: param_1_2.name,
                        titleRight: param_1_2.emoji,
                        type: "checkbox",
                        key: param_1_2.id,
                        isChecked: true
                      };
                      return varData_2852;
                    })))
                  });
                }
              } catch (err) {
                varData_2846 = true;
                varData_2847 = err;
              } finally {
                try {
                  if (!varData_2845 && varData_2848.return != null) {
                    varData_2848.return();
                  }
                } finally {
                  if (varData_2846) {
                    throw varData_2847;
                  }
                }
              }
              globalThis.exports["np-ui"].showContextMenu(varData_2843);
              return [2];
          }
        });
      });
      return function(param_1, param_2, param_3) {
        return varData_2842.apply(this, arguments);
      };
    })());
    RegisterUICallback("snr-buns:buildBurger", (function() {
      var varData_2853 = handleAction_277(function(param_1, param_2) {
        var varData_2854;
        var varData_2855;
        var varData_2856;
        var varData_2857;
        var varData_2858;
        var varData_2859;
        var varData_2860;
        var varData_2861;
        var varData_2862;
        var varData_2863;
        var varData_2864;
        var varData_2865;
        var varData_2866;
        var varData_2867;
        var varData_2868;
        var varData_2869;
        var varData_2870;
        var varData_2871;
        var varData_2872;
        var varData_2873;
        var varData_2874;
        var varData_2875;
        var varData_2876;
        var varData_2877;
        var varData_2878;
        var varData_2879;
        var varData_2880;
        return handleAction_287(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2854 = param_1.key.id;
              varData_2855 = Object.entries(param_1.data.checkboxes).map(function(param_1_2) {
                var varData_2881 = handleAction_284(param_1_2, 2);
                var varData_2882 = varData_2881[0];
                var varData_2883 = varData_2881[1];
                if (varData_2883) {
                  return varData_2882;
                } else {
                  return null;
                }
              }).filter(function(param_1_2) {
                return param_1_2;
              });
              return [4, varData_1778.execute("snr-buns:snr_buns:hasIngredients", varData_2855)];
            case 1:
              varData_2856 = handleAction_284.apply(void 0, [param_1_1.sent(), 2]);
              varData_2857 = varData_2856[0];
              varData_2858 = varData_2856[1];
              if (!varData_2857) {
                return [2, emit("DoLongHudText", varData_2858, 2)];
              }
              varData_2855.unshift("bun", "patty");
              varData_2855.push("bun");
              varData_2859 = true;
              varData_2860 = false;
              varData_2861 = void 0;
              param_1_1.label = 2;
            case 2:
              param_1_1.trys.push([2, 7, 8, 9]);
              varData_2862 = varData_2855[Symbol.iterator]();
              param_1_1.label = 3;
            case 3:
              if (varData_2859 = (varData_2863 = varData_2862.next()).done) {
                return [3, 6];
              }
              varData_2864 = varData_2863.value;
              return [4, varData_2063.loadModel(GetHashKey(varData_2739[varData_2864]))];
            case 4:
              param_1_1.sent();
              param_1_1.label = 5;
            case 5:
              varData_2859 = true;
              return [3, 3];
            case 6:
              return [3, 9];
            case 7:
              varData_2865 = param_1_1.sent();
              varData_2860 = true;
              varData_2861 = varData_2865;
              return [3, 9];
            case 8:
              try {
                if (!varData_2859 && varData_2862.return != null) {
                  varData_2862.return();
                }
              } finally {
                if (varData_2860) {
                  throw varData_2861;
                }
              }
              return [7];
            case 9:
              varData_2866 = [-505.23, -688.11, 33.565];
              varData_2867 = varData_2866[0];
              varData_2868 = varData_2866[1];
              varData_2869 = varData_2866[2];
              varData_2870 = varData_2869;
              return [4, varData_2765("burgerassumbly")];
            case 10:
              param_1_1.sent();
              varData_2871 = false;
              varData_2872 = function(param_1_2) {
                return param_1_2.forEach(function(param_1_3) {
                  return DeleteEntity(param_1_3);
                });
              };
              varData_2873 = [];
              varData_2874 = 0;
              param_1_1.label = 11;
            case 11:
              if (!(varData_2874 < varData_2855.length)) {
                return [3, 15];
              }
              varData_2875 = varData_2855[varData_2874];
              return [4, varData_2129.taskBar(1e3, `Placing down ${varData_2875}..`, true, {
                distance: 1.5,
                entity: PlayerPedId()
              })];
            case 12:
              varData_2876 = param_1_1.sent();
              if (varData_2876 !== 100) {
                varData_2871 = true;
              }
              if (varData_2871) {
                return [3, 15];
              }
              varData_2877 = GetHashKey(varData_2739[varData_2875]);
              varData_2878 = CreateObject(varData_2877, varData_2867, varData_2868, varData_2870, true, true, false);
              FreezeEntityPosition(varData_2878, true);
              if (varData_2875 === "bun" && varData_2874 === 0) {
                SetEntityRotation(varData_2878, 0, -180, 0, 2, true);
              }
              varData_2873.push(varData_2878);
              varData_2870 += varData_2875 === "bun" ? 4e-3 : 6e-3;
              return [4, varData_1675.wait(100)];
            case 13:
              param_1_1.sent();
              param_1_1.label = 14;
            case 14:
              varData_2874++;
              return [3, 11];
            case 15:
              if (varData_2871) {
                varData_2872(varData_2873);
                emit("animation:cancel");
                return [2, emit("DoLongHudText", "Stopped making burger", 2)];
              }
              return [4, varData_2129.taskBar(1e3, "Wrapping up burger...", true, {
                distance: 1.5,
                entity: PlayerPedId()
              })];
            case 16:
              varData_2879 = param_1_1.sent();
              varData_2872(varData_2873);
              if (varData_2879 !== 100) {
                return [3, 19];
              }
              varData_2880 = CreateObject(GetHashKey("prop_food_bs_burg1"), -505.23, -688.11, 33.57, false, false, false);
              FreezeEntityPosition(varData_2880, true);
              return [4, varData_1675.wait(3e3)];
            case 17:
              param_1_1.sent();
              DeleteEntity(varData_2880);
              return [4, varData_1778.execute("snr-buns:finishBurger", varData_2854, varData_2855, varData_2284?.id)];
            case 18:
              param_1_1.sent();
              param_1_1.label = 19;
            case 19:
              handleAction_272("burgerassumbly");
              return [2, param_2({
                data: "success",
                meta: {
                  ok: true,
                  message: ""
                }
              })];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2853.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:sink", handleAction_277(function() {
      var varData_2884;
      var varData_2885;
      var varData_2886;
      var varData_2887;
      var varData_2888;
      var varData_2889;
      var varData_2890;
      return handleAction_287(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_1778.execute("snr-buns:snr_buns:canCleanDishes")];
          case 1:
            varData_2884 = handleAction_284.apply(void 0, [param_1.sent(), 2]);
            varData_2885 = varData_2884[0];
            varData_2886 = varData_2884[1];
            if (!varData_2885) {
              return [2, emit("DoLongHudText", varData_2886, 2)];
            }
            return [4, varData_2765("dishwashing")];
          case 2:
            param_1.sent();
            return [4, varData_2129.taskBar(2500, "Washing", true, {
              distance: 1.5,
              entity: PlayerPedId()
            })];
          case 3:
            varData_2887 = param_1.sent();
            return [4, varData_1778.execute("snr-buns:snr_buns:cleanedDishes", varData_2887 === 100)];
          case 4:
            varData_2888 = handleAction_284.apply(void 0, [param_1.sent(), 2]);
            varData_2889 = varData_2888[0];
            varData_2890 = varData_2888[1];
            emit("DoLongHudText", varData_2890, varData_2889 ? 1 : 2);
            handleAction_272("dishwashing");
            return [2];
        }
      });
    }));
    varData_1738.on("snr-buns:startToastingBun", handleAction_277(function() {
      var varData_2891;
      var varData_2892;
      var varData_2893;
      return handleAction_287(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_1778.execute("snr-buns:startToastingBun")];
          case 1:
            varData_2891 = handleAction_284.apply(void 0, [param_1.sent(), 2]);
            varData_2892 = varData_2891[0];
            varData_2893 = varData_2891[1];
            if (!varData_2893) {
              return [2];
            }
            emit("DoLongHudText", varData_2893, varData_2892 ? 1 : 2);
            return [2];
        }
      });
    }));
    on("snr-buns:finishToastingBun", (function() {
      var varData_2894 = handleAction_277(function(param_1, param_2, param_3) {
        var varData_2895;
        var varData_2896;
        var varData_2897;
        var varData_2898;
        return handleAction_287(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2895 = globalThis.exports["np-objects"].GetObjectByEntity(param_2);
              if (!varData_2895) {
                return [2];
              }
              return [4, varData_1778.execute("snr-buns:finishToastingBun", varData_2895.id)];
            case 1:
              varData_2896 = handleAction_284.apply(void 0, [param_1_1.sent(), 2]);
              varData_2897 = varData_2896[0];
              varData_2898 = varData_2896[1];
              if (!varData_2898) {
                return [2];
              }
              emit("DoLongHudText", varData_2898, varData_2897 ? 1 : 2);
              return [2];
          }
        });
      });
      return function(param_1, param_2, param_3) {
        return varData_2894.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:startFryer", handleAction_277(function() {
      var varData_2899;
      var varData_2900;
      var varData_2901;
      return handleAction_287(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_1778.execute("snr-buns:startFryer")];
          case 1:
            varData_2899 = handleAction_284.apply(void 0, [param_1.sent(), 2]);
            varData_2900 = varData_2899[0];
            varData_2901 = varData_2899[1];
            if (!varData_2901) {
              return [2];
            }
            emit("DoLongHudText", varData_2901, varData_2900 ? 1 : 2);
            return [2];
        }
      });
    }));
    on("snr-buns:finishFries", (function() {
      var varData_2902 = handleAction_277(function(param_1, param_2) {
        var varData_2903;
        return handleAction_287(this, function(param_1_1) {
          varData_2903 = globalThis.exports["np-objects"].GetObjectByEntity(param_2);
          if (!varData_2903) {
            return [2];
          }
          varData_1778.execute("snr-buns:finishFryer", varData_2903.id, varData_2903.data.metadata.stationId);
          return [2];
        });
      });
      return function(param_1, param_2) {
        return varData_2902.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:scoopFries", (function() {
      var varData_2904 = handleAction_277(function(param_1, param_2, param_3) {
        var varData_2905;
        var varData_2906;
        var varData_2907;
        var varData_2908;
        return handleAction_287(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (dataSet_5.has("scooping_fries")) {
                return [2, emit("DoLongHudText", "Already scooping fries...", 2)];
              }
              return [4, varData_2765("friesscoop")];
            case 1:
              param_1_1.sent();
              dataSet_5.add("scooping_fries");
              return [4, varData_2129.taskBar(2500, "Scooping Fries", true, {
                distance: 1.5,
                entity: PlayerPedId()
              })];
            case 2:
              varData_2905 = param_1_1.sent();
              dataSet_5.delete("scooping_fries");
              handleAction_272("friesscoop");
              if (varData_2905 !== 100) {
                return [2];
              }
              return [4, varData_1778.execute("snr-buns:scoopFries", varData_2284?.id)];
            case 3:
              varData_2906 = handleAction_284.apply(void 0, [param_1_1.sent(), 2]);
              varData_2907 = varData_2906[0];
              varData_2908 = varData_2906[1];
              if (!varData_2908) {
                return [2];
              }
              emit("DoLongHudText", varData_2908, varData_2907 ? 1 : 2);
              return [2];
          }
        });
      });
      return function(param_1, param_2, param_3) {
        return varData_2904.apply(this, arguments);
      };
    })());
    varData_1738.on("snr-buns:chop", (function() {
      var varData_2909 = handleAction_277(function(param_1) {
        var varData_2910;
        var varData_2911;
        return handleAction_287(this, function(param_1_1) {
          varData_2910 = ["lettuce", "tomato", "onion", "cheese", "pickle"];
          varData_2911 = varData_2910.map(function(param_1_2) {
            return {
              icon: "circle",
              title: param_1_2.charAt(0).toUpperCase() + param_1_2.slice(1),
              action: "snr-buns:chopIngredient",
              key: {
                ingredient: param_1_2,
                stationNum: param_1.stationNum
              }
            };
          });
          exports["np-ui"].showContextMenu(varData_2911, null, "Select Ingredient");
          return [2];
        });
      });
      return function(param_1) {
        return varData_2909.apply(this, arguments);
      };
    })());
    RegisterUICallback("snr-buns:chopIngredient", (function() {
      var varData_2912 = handleAction_277(function(param_1, param_2) {
        var varData_2913;
        var varData_2914;
        var varData_2915;
        var varData_2916;
        var varData_2917;
        var varData_2918;
        var varData_2919;
        var varData_2920;
        var varData_2921;
        var varData_2922;
        var varData_2923;
        return handleAction_287(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              param_2({
                data: "",
                meta: {
                  ok: true,
                  message: ""
                }
              });
              varData_2913 = param_1.key.stationNum;
              varData_2914 = `chopping_${varData_2913}`;
              return [4, varData_1778.execute("snr-buns:snr_buns:canChopIngredients", varData_2914)];
            case 1:
              varData_2915 = handleAction_284.apply(void 0, [param_1_1.sent(), 2]);
              varData_2916 = varData_2915[0];
              varData_2917 = varData_2915[1];
              if (!varData_2916) {
                return [2, emit("DoLongHudText", varData_2917, 2)];
              }
              varData_2918 = param_1.key.ingredient;
              varData_2919 = varData_2738[varData_2918];
              return [4, varData_2063.loadModel(varData_2919)];
            case 2:
              param_1_1.sent();
              varData_2920 = {
                1: new varData_1513(-502.32, -685.5, 33.62),
                2: new varData_1513(-502.24, -682.84, 33.61)
              };
              varData_2921 = varData_2920[varData_2913];
              varData_2922 = CreateObject(varData_2919, varData_2921.x, varData_2921.y, varData_2921.z, true, true, false);
              PlaceObjectOnGroundProperly(varData_2922);
              FreezeEntityPosition(varData_2922, true);
              return [4, varData_2765(varData_2914)];
            case 3:
              param_1_1.sent();
              return [4, varData_2129.taskBar(2e3, "Chopping Ingredients", true, {
                distance: 1.5,
                entity: PlayerPedId()
              })];
            case 4:
              varData_2923 = param_1_1.sent();
              DeleteObject(varData_2922);
              handleAction_272(varData_2914);
              return [4, varData_1778.execute("snr-buns:snr_buns:chopIngredients", varData_2918, varData_2914, varData_2923 === 100)];
            case 5:
              param_1_1.sent();
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2912.apply(this, arguments);
      };
    })());
    ;
    function handleAction_290(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2924 = param_1[param_6](param_7);
        var varData_2925 = varData_2924.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2924.done) {
        param_2(varData_2925);
      } else {
        Promise.resolve(varData_2925).then(param_4, param_5);
      }
    }
    function handleAction_291(param_1) {
      return function() {
        var varData_2926 = this;
        var varData_2927 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2928 = param_1.apply(varData_2926, varData_2927);
          function handleAction_292(param_1_2) {
            handleAction_290(varData_2928, param_1_1, param_2, handleAction_292, handleAction_293, "next", param_1_2);
          }
          function handleAction_293(param_1_2) {
            handleAction_290(varData_2928, param_1_1, param_2, handleAction_292, handleAction_293, "throw", param_1_2);
          }
          handleAction_292(void 0);
        });
      };
    }
    function handleAction_294(param_1, param_2) {
      var varData_2929;
      var varData_2930;
      var varData_2931;
      var varData_2932;
      var varData_2933 = {
        label: 0,
        sent: function() {
          if (varData_2931[0] & 1) {
            throw varData_2931[1];
          }
          return varData_2931[1];
        },
        trys: [],
        ops: []
      };
      varData_2932 = {
        next: handleAction_295(0),
        throw: handleAction_295(1),
        return: handleAction_295(2)
      };
      if (typeof Symbol === "function") {
        varData_2932[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2932;
      function handleAction_295(param_1_1) {
        return function(param_1_2) {
          return handleAction_296([param_1_1, param_1_2]);
        };
      }
      function handleAction_296(param_1_1) {
        if (varData_2929) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2933) {
          try {
            varData_2929 = 1;
            if (varData_2930 && (varData_2931 = param_1_1[0] & 2 ? varData_2930.return : param_1_1[0] ? varData_2930.throw || ((varData_2931 = varData_2930.return) && varData_2931.call(varData_2930), 0) : varData_2930.next) && !(varData_2931 = varData_2931.call(varData_2930, param_1_1[1])).done) {
              return varData_2931;
            }
            varData_2930 = 0;
            if (varData_2931) {
              param_1_1 = [param_1_1[0] & 2, varData_2931.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2931 = param_1_1;
                break;
              case 4:
                varData_2933.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2933.label++;
                varData_2930 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2933.ops.pop();
                varData_2933.trys.pop();
                continue;
              default:
                if (!(varData_2931 = varData_2933.trys, varData_2931 = varData_2931.length > 0 && varData_2931[varData_2931.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2933 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2931 || param_1_1[1] > varData_2931[0] && param_1_1[1] < varData_2931[3])) {
                  varData_2933.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2933.label < varData_2931[1]) {
                  varData_2933.label = varData_2931[1];
                  varData_2931 = param_1_1;
                  break;
                }
                if (varData_2931 && varData_2933.label < varData_2931[2]) {
                  varData_2933.label = varData_2931[2];
                  varData_2933.ops.push(param_1_1);
                  break;
                }
                if (varData_2931[2]) {
                  varData_2933.ops.pop();
                }
                varData_2933.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2933);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2930 = 0;
          } finally {
            varData_2929 = varData_2931 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2934 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2934;
      }
    }
    var varData_2935 = (function() {
      var varData_2936 = handleAction_291(function() {
        return handleAction_294(this, function(param_1) {
          handleAction_232();
          handleAction_258();
          varData_2129.addInteraction("snr_start_fryer", new varData_1513(-505.83, -686.29, 33.4), [{
            id: "snr_start_fryer",
            label: "Start fryer",
            eventSDK: "snr-buns:startFryer",
            parameters: {}
          }], {
            distance: {
              draw: 1.5,
              use: 1.5
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns");
            }
          });
          varData_2129.addInteraction("snr_scoop_fries", new varData_1513(-505.55, -685.56, 33.58), [{
            id: "snr_scoop_fries",
            label: "Scoop fries",
            eventSDK: "snr-buns:scoopFries",
            parameters: {}
          }], {
            distance: {
              draw: 1.5,
              use: 1.5
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns") && !!varData_2284;
            }
          });
          varData_2129.addInteraction("snr_cook_patty", new varData_1513(-504.16, -684.87, 33.4), [{
            id: "snr_cook_patty",
            label: "Cook patty",
            eventSDK: "snr-buns:cook",
            parameters: {}
          }], {
            distance: {
              draw: 1.5,
              use: 1.5
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns");
            }
          });
          varData_2129.addInteraction("snr_drinks_1", new varData_1513(-505.14, -697.87, 33.67), [{
            id: "snr_drinks_1",
            label: "Dispense drinks",
            eventSDK: "snr-buns:drinks",
            parameters: {
              id: 1
            }
          }], {
            distance: {
              draw: 1.5,
              use: 1.5
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns") && !!varData_2284;
            }
          });
          varData_2129.addInteraction("snr_drinks_2", new varData_1513(-505.82, -698.58, 33.67), [{
            id: "snr_drinks_2",
            label: "Dispense drinks",
            eventSDK: "snr-buns:drinks",
            parameters: {
              id: 2
            }
          }], {
            distance: {
              draw: 1.5,
              use: 1.5
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns") && !!varData_2284;
            }
          });
          varData_2129.addInteraction("snr_chop_ingredients", new varData_1513(-502.25, -685.53, 33.57), [{
            id: "snr_chop_ingredients",
            label: "Chop Ingredients",
            eventSDK: "snr-buns:chop",
            parameters: {
              stationNum: 1
            }
          }], {
            distance: {
              draw: 1.5,
              use: 1.5
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns");
            }
          });
          varData_2129.addInteraction("snr_chop_ingredients_2", new varData_1513(-502.3, -682.84, 33.6), [{
            id: "snr_chop_ingredients_2",
            label: "Chop Ingredients",
            eventSDK: "snr-buns:chop",
            parameters: {
              stationNum: 2
            }
          }], {
            distance: {
              draw: 1.5,
              use: 1.5
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns");
            }
          });
          varData_2129.addInteraction("snr_dishes", new varData_1513(-506.01, -680.88, 33.58), [{
            id: "snr_dishes",
            label: "Wash dishes",
            eventSDK: "snr-buns:sink",
            parameters: {}
          }], {
            distance: {
              draw: 1.5,
              use: 1.5
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns");
            }
          });
          varData_2129.addInteraction("snr_build_burger", new varData_1513(-505.26, -688.08, 33.57), [{
            id: "snr_build_burger",
            label: "Build Burger",
            eventSDK: "snr-buns:burgers",
            parameters: {}
          }], {
            distance: {
              draw: 1.5,
              use: 1.5
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns") && !!varData_2284;
            }
          });
          varData_2129.addInteractionByModel("restaurants:patty", ["3dp_prop_patty_raw", "3dp_prop_patty_cooked", "3dp_prop_patty_ruined"], [{
            id: "snr_buns_burger_peek",
            label: "Finish Patty",
            event: "snr-buns:finishPatty",
            parameters: {}
          }], {
            distance: {
              draw: 2.5,
              use: 2
            },
            isEnabled: function(param_1_1) {
              var varData_2937 = varData_1688.Sync["np-objects"].GetObjectByEntity(param_1_1);
              if (!varData_2937) {
                return false;
              }
              return !!varData_2937.data.metadata?.endTime && !!(Date.now() > varData_2937.data.metadata.endTime);
            },
            isToggled: true
          });
          varData_2129.addInteractionByModel("restaurants:juice", ["prop_food_bs_juice02", "prop_food_bs_juice01"], [{
            id: "snr_buns_drink_peek",
            label: "Finish Drink",
            event: "snr-buns:finishDrink",
            parameters: {}
          }], {
            distance: {
              draw: 3,
              use: 2.5
            },
            isEnabled: function(param_1_1) {
              var varData_2938 = varData_1688.Sync["np-objects"].GetObjectByEntity(param_1_1);
              if (!varData_2938) {
                return false;
              }
              return !!varData_2938.data.metadata?.endTime && !!(Date.now() > varData_2938.data.metadata.endTime);
            },
            skipLos: true
          });
          varData_2129.addInteractionByModel("restaurants:fry", ["3dp_prop_frier_full"], [{
            id: "snr_buns_finish_fries",
            label: "Finish Fries",
            event: "snr-buns:finishFries",
            parameters: {}
          }], {
            distance: {
              draw: 2.5,
              use: 2
            },
            isEnabled: function(param_1_1) {
              var varData_2939 = varData_1688.Sync["np-objects"].GetObjectByEntity(param_1_1);
              if (!varData_2939 || varData_2939.ns !== "snr-buns-restaurant") {
                return false;
              }
              return !!varData_2939.data.metadata?.endTime && !!(Date.now() > varData_2939.data.metadata.endTime);
            },
            isToggled: true
          });
          varData_2129.addInteractionByModel("restaurants:bun", ["3dp_prop_burgerbun", "3dp_prop_burgerbun_ruined"], [{
            id: "snr_bun_finish_bun",
            label: "Finish Bun",
            event: "snr-buns:finishToastingBun",
            parameters: {}
          }], {
            distance: {
              draw: 2.5,
              use: 2
            },
            isEnabled: function(param_1_1) {
              var varData_2940 = varData_1688.Sync["np-objects"].GetObjectByEntity(param_1_1);
              if (!varData_2940) {
                return false;
              }
              return !!varData_2940.data.metadata?.endTime && !!(Date.now() > varData_2940.data.metadata.endTime);
            },
            isToggled: true
          });
          varData_2129.addInteraction("snr_toast_bun", new varData_1513(-504.19, -686.12, 33.5), [{
            id: "snr_toast_bun",
            label: "Toast Bun",
            eventSDK: "snr-buns:startToastingBun",
            parameters: {}
          }], {
            distance: {
              draw: 1.5,
              use: 1.5
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns");
            }
          });
          varData_2129.addInteraction("snr_fridge", new varData_1513(-507.8, -686.27, 33.89), [{
            id: "snr_fridge",
            label: "View ingredients",
            eventSDK: "snr-buns:viewIngredients",
            parameters: {}
          }], {
            distance: {
              draw: 3,
              use: 3
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns");
            }
          });
          varData_2129.addInteraction("snr_order_status", new varData_1513(-506.76, -691.29, 33.67), [{
            id: "snr_order_status",
            label: "View Orders",
            eventSDK: "snr-buns:viewOrders",
            parameters: {}
          }], {
            distance: {
              draw: 3,
              use: 3
            },
            skipLos: true,
            isEnabled: function() {
              return handleAction_204("snr_buns");
            }
          });
          return [2];
        });
      });
      return function _0xe6b414() {
        return varData_2936.apply(this, arguments);
      };
    })();
    ;
    function handleAction_297(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_298(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_299(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2941 = param_1[param_6](param_7);
        var varData_2942 = varData_2941.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2941.done) {
        param_2(varData_2942);
      } else {
        Promise.resolve(varData_2942).then(param_4, param_5);
      }
    }
    function handleAction_300(param_1) {
      return function() {
        var varData_2943 = this;
        var varData_2944 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2945 = param_1.apply(varData_2943, varData_2944);
          function handleAction_301(param_1_2) {
            handleAction_299(varData_2945, param_1_1, param_2, handleAction_301, handleAction_302, "next", param_1_2);
          }
          function handleAction_302(param_1_2) {
            handleAction_299(varData_2945, param_1_1, param_2, handleAction_301, handleAction_302, "throw", param_1_2);
          }
          handleAction_301(void 0);
        });
      };
    }
    function handleAction_303(param_1, param_2) {
      var varData_2946 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2946 == null) {
        return;
      }
      var varData_2947 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2948;
      var varData_2949;
      try {
        for (varData_2946 = varData_2946.call(param_1); !(isEnabled_2 = (varData_2948 = varData_2946.next()).done); isEnabled_2 = true) {
          varData_2947.push(varData_2948.value);
          if (param_2 && varData_2947.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2949 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2946.return != null) {
            varData_2946.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2949;
          }
        }
      }
      return varData_2947;
    }
    function handleAction_304() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_305(param_1, param_2) {
      return handleAction_298(param_1) || handleAction_303(param_1, param_2) || handleAction_306(param_1, param_2) || handleAction_304();
    }
    function handleAction_306(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_297(param_1, param_2);
      }
      var varData_2950 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2950 === "Object" && param_1.constructor) {
        varData_2950 = param_1.constructor.name;
      }
      if (varData_2950 === "Map" || varData_2950 === "Set") {
        return Array.from(varData_2950);
      }
      if (varData_2950 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2950)) {
        return handleAction_297(param_1, param_2);
      }
    }
    function handleAction_307(param_1, param_2) {
      var varData_2951;
      var varData_2952;
      var varData_2953;
      var varData_2954;
      var varData_2955 = {
        label: 0,
        sent: function() {
          if (varData_2953[0] & 1) {
            throw varData_2953[1];
          }
          return varData_2953[1];
        },
        trys: [],
        ops: []
      };
      varData_2954 = {
        next: handleAction_308(0),
        throw: handleAction_308(1),
        return: handleAction_308(2)
      };
      if (typeof Symbol === "function") {
        varData_2954[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2954;
      function handleAction_308(param_1_1) {
        return function(param_1_2) {
          return handleAction_309([param_1_1, param_1_2]);
        };
      }
      function handleAction_309(param_1_1) {
        if (varData_2951) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2955) {
          try {
            varData_2951 = 1;
            if (varData_2952 && (varData_2953 = param_1_1[0] & 2 ? varData_2952.return : param_1_1[0] ? varData_2952.throw || ((varData_2953 = varData_2952.return) && varData_2953.call(varData_2952), 0) : varData_2952.next) && !(varData_2953 = varData_2953.call(varData_2952, param_1_1[1])).done) {
              return varData_2953;
            }
            varData_2952 = 0;
            if (varData_2953) {
              param_1_1 = [param_1_1[0] & 2, varData_2953.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2953 = param_1_1;
                break;
              case 4:
                varData_2955.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2955.label++;
                varData_2952 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2955.ops.pop();
                varData_2955.trys.pop();
                continue;
              default:
                if (!(varData_2953 = varData_2955.trys, varData_2953 = varData_2953.length > 0 && varData_2953[varData_2953.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2955 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2953 || param_1_1[1] > varData_2953[0] && param_1_1[1] < varData_2953[3])) {
                  varData_2955.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2955.label < varData_2953[1]) {
                  varData_2955.label = varData_2953[1];
                  varData_2953 = param_1_1;
                  break;
                }
                if (varData_2953 && varData_2955.label < varData_2953[2]) {
                  varData_2955.label = varData_2953[2];
                  varData_2955.ops.push(param_1_1);
                  break;
                }
                if (varData_2953[2]) {
                  varData_2955.ops.pop();
                }
                varData_2955.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2955);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2952 = 0;
          } finally {
            varData_2951 = varData_2953 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2956 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2956;
      }
    }
    function handleAction_310() {
      var varData_2957 = {
        isEnabled: function() {
          return true;
        },
        distance: {
          use: 2,
          draw: 2
        }
      };
      varData_2129.addInteraction("restaurants_open_management", new varData_1513(-505.11, -700.63, 33.63), [{
        id: "restaurants_open_management",
        label: "Manage Employees",
        eventSDK: "snr-buns:openManagement",
        parameters: {}
      }, {
        id: "restaurants_reset_stations",
        label: "Reset Stations",
        eventSDK: "snr-buns:resetWorkStations",
        parameters: {}
      }], varData_2957);
    }
    varData_1738.on("snr-buns:openManagement", handleAction_300(function() {
      var varData_2958;
      var varData_2959;
      var varData_2960;
      var varData_2961;
      return handleAction_307(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_1778.execute("snr-buns:isManager")];
          case 1:
            varData_2958 = handleAction_305.apply(void 0, [param_1.sent(), 2]);
            varData_2959 = varData_2958[0];
            varData_2960 = varData_2958[1];
            if (!varData_2959) {
              return [2, emit("DoLongHudText", varData_2960, 2)];
            }
            return [4, varData_1778.execute("snr-buns:getEmployees")];
          case 2:
            varData_2961 = param_1.sent();
            varData_1839.execute("snr-buns:openManagement", varData_2961);
            varData_1688.Sync.focusmanager.SetUIFocus(true, true);
            return [2];
        }
      });
    }));
    varData_1738.on("snr-buns:resetWorkStations", handleAction_300(function() {
      var varData_2962;
      var varData_2963;
      var varData_2964;
      var varData_2965;
      return handleAction_307(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_2129.taskBar(2500, "Resetting ALL work stations...")];
          case 1:
            varData_2962 = param_1.sent();
            if (varData_2962 !== 100) {
              return [2];
            }
            return [4, varData_1778.execute("snr-buns:resetWorkStations")];
          case 2:
            varData_2963 = handleAction_305.apply(void 0, [param_1.sent(), 2]);
            varData_2964 = varData_2963[0];
            varData_2965 = varData_2963[1];
            emit("DoLongHudText", varData_2965, varData_2964 ? 1 : 2);
            return [2];
        }
      });
    }));
    varData_1839.register("close", handleAction_300(function() {
      return handleAction_307(this, function(param_1) {
        varData_1688.Sync.focusmanager.SetUIFocus(false, false);
        return [2];
      });
    }));
    varData_1839.register("snr-buns:removeEmployee", (function() {
      var varData_2966 = handleAction_300(function(param_1) {
        var varData_2967;
        var varData_2968;
        var varData_2969;
        var varData_2970;
        return handleAction_307(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1778.execute("snr-buns:removeEmployee", param_1)];
            case 1:
              varData_2967 = handleAction_305.apply(void 0, [param_1_1.sent(), 2]);
              varData_2968 = varData_2967[0];
              varData_2969 = varData_2967[1];
              if (!varData_2968) {
                return [3, 3];
              }
              return [4, varData_1778.execute("snr-buns:getEmployees")];
            case 2:
              varData_2970 = param_1_1.sent();
              varData_1839.execute("snr-buns:updateEmployees", varData_2970);
              param_1_1.label = 3;
            case 3:
              return [2, [varData_2968, varData_2969]];
          }
        });
      });
      return function(param_1) {
        return varData_2966.apply(this, arguments);
      };
    })());
    ;
    function handleAction_311(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2971 = param_1[param_6](param_7);
        var varData_2972 = varData_2971.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2971.done) {
        param_2(varData_2972);
      } else {
        Promise.resolve(varData_2972).then(param_4, param_5);
      }
    }
    function handleAction_312(param_1) {
      return function() {
        var varData_2973 = this;
        var varData_2974 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2975 = param_1.apply(varData_2973, varData_2974);
          function handleAction_313(param_1_2) {
            handleAction_311(varData_2975, param_1_1, param_2, handleAction_313, handleAction_314, "next", param_1_2);
          }
          function handleAction_314(param_1_2) {
            handleAction_311(varData_2975, param_1_1, param_2, handleAction_313, handleAction_314, "throw", param_1_2);
          }
          handleAction_313(void 0);
        });
      };
    }
    function handleAction_315(param_1, param_2) {
      var varData_2976;
      var varData_2977;
      var varData_2978;
      var varData_2979;
      var varData_2980 = {
        label: 0,
        sent: function() {
          if (varData_2978[0] & 1) {
            throw varData_2978[1];
          }
          return varData_2978[1];
        },
        trys: [],
        ops: []
      };
      varData_2979 = {
        next: handleAction_316(0),
        throw: handleAction_316(1),
        return: handleAction_316(2)
      };
      if (typeof Symbol === "function") {
        varData_2979[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2979;
      function handleAction_316(param_1_1) {
        return function(param_1_2) {
          return handleAction_317([param_1_1, param_1_2]);
        };
      }
      function handleAction_317(param_1_1) {
        if (varData_2976) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2980) {
          try {
            varData_2976 = 1;
            if (varData_2977 && (varData_2978 = param_1_1[0] & 2 ? varData_2977.return : param_1_1[0] ? varData_2977.throw || ((varData_2978 = varData_2977.return) && varData_2978.call(varData_2977), 0) : varData_2977.next) && !(varData_2978 = varData_2978.call(varData_2977, param_1_1[1])).done) {
              return varData_2978;
            }
            varData_2977 = 0;
            if (varData_2978) {
              param_1_1 = [param_1_1[0] & 2, varData_2978.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2978 = param_1_1;
                break;
              case 4:
                varData_2980.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2980.label++;
                varData_2977 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2980.ops.pop();
                varData_2980.trys.pop();
                continue;
              default:
                if (!(varData_2978 = varData_2980.trys, varData_2978 = varData_2978.length > 0 && varData_2978[varData_2978.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2980 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2978 || param_1_1[1] > varData_2978[0] && param_1_1[1] < varData_2978[3])) {
                  varData_2980.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2980.label < varData_2978[1]) {
                  varData_2980.label = varData_2978[1];
                  varData_2978 = param_1_1;
                  break;
                }
                if (varData_2978 && varData_2980.label < varData_2978[2]) {
                  varData_2980.label = varData_2978[2];
                  varData_2980.ops.push(param_1_1);
                  break;
                }
                if (varData_2978[2]) {
                  varData_2980.ops.pop();
                }
                varData_2980.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2980);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2977 = 0;
          } finally {
            varData_2976 = varData_2978 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2981 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2981;
      }
    }
    var varData_2982 = new varData_2166({
      codename: "snr-buns",
      version: "0.0.0"
    });
    function handleAction_318() {
      return handleAction_319.apply(this, arguments);
    }
    function handleAction_319() {
      handleAction_319 = handleAction_312(function() {
        return handleAction_315(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              varData_1688.Sync.focusmanager.RegisterFocusHandler(function(param_1_1, param_2) {
                SetNuiFocus(param_1_1, param_2);
              });
              return [4, handleAction_43()];
            case 1:
              param_1.sent();
              return [4, handleAction_202()];
            case 2:
              param_1.sent();
              return [4, handleAction_240()];
            case 3:
              param_1.sent();
              return [4, handleAction_230()];
            case 4:
              param_1.sent();
              return [4, varData_2935()];
            case 5:
              param_1.sent();
              return [4, handleAction_181()];
            case 6:
              param_1.sent();
              return [4, handleAction_310()];
            case 7:
              param_1.sent();
              return [2];
          }
        });
      });
      return handleAction_319.apply(this, arguments);
    }
    ;
    function handleAction_320(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2983 = param_1[param_6](param_7);
        var varData_2984 = varData_2983.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2983.done) {
        param_2(varData_2984);
      } else {
        Promise.resolve(varData_2984).then(param_4, param_5);
      }
    }
    function handleAction_321(param_1) {
      return function() {
        var varData_2985 = this;
        var varData_2986 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2987 = param_1.apply(varData_2985, varData_2986);
          function handleAction_322(param_1_2) {
            handleAction_320(varData_2987, param_1_1, param_2, handleAction_322, handleAction_323, "next", param_1_2);
          }
          function handleAction_323(param_1_2) {
            handleAction_320(varData_2987, param_1_1, param_2, handleAction_322, handleAction_323, "throw", param_1_2);
          }
          handleAction_322(void 0);
        });
      };
    }
    function handleAction_324(param_1, param_2) {
      var varData_2988;
      var varData_2989;
      var varData_2990;
      var varData_2991;
      var varData_2992 = {
        label: 0,
        sent: function() {
          if (varData_2990[0] & 1) {
            throw varData_2990[1];
          }
          return varData_2990[1];
        },
        trys: [],
        ops: []
      };
      varData_2991 = {
        next: handleAction_325(0),
        throw: handleAction_325(1),
        return: handleAction_325(2)
      };
      if (typeof Symbol === "function") {
        varData_2991[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2991;
      function handleAction_325(param_1_1) {
        return function(param_1_2) {
          return handleAction_326([param_1_1, param_1_2]);
        };
      }
      function handleAction_326(param_1_1) {
        if (varData_2988) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2992) {
          try {
            varData_2988 = 1;
            if (varData_2989 && (varData_2990 = param_1_1[0] & 2 ? varData_2989.return : param_1_1[0] ? varData_2989.throw || ((varData_2990 = varData_2989.return) && varData_2990.call(varData_2989), 0) : varData_2989.next) && !(varData_2990 = varData_2990.call(varData_2989, param_1_1[1])).done) {
              return varData_2990;
            }
            varData_2989 = 0;
            if (varData_2990) {
              param_1_1 = [param_1_1[0] & 2, varData_2990.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2990 = param_1_1;
                break;
              case 4:
                varData_2992.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2992.label++;
                varData_2989 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2992.ops.pop();
                varData_2992.trys.pop();
                continue;
              default:
                if (!(varData_2990 = varData_2992.trys, varData_2990 = varData_2990.length > 0 && varData_2990[varData_2990.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2992 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2990 || param_1_1[1] > varData_2990[0] && param_1_1[1] < varData_2990[3])) {
                  varData_2992.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2992.label < varData_2990[1]) {
                  varData_2992.label = varData_2990[1];
                  varData_2990 = param_1_1;
                  break;
                }
                if (varData_2990 && varData_2992.label < varData_2990[2]) {
                  varData_2992.label = varData_2990[2];
                  varData_2992.ops.push(param_1_1);
                  break;
                }
                if (varData_2990[2]) {
                  varData_2992.ops.pop();
                }
                varData_2992.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2992);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2989 = 0;
          } finally {
            varData_2988 = varData_2990 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2993 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2993;
      }
    }
    handleAction_321(function() {
      return handleAction_324(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            return [4, handleAction_318()];
          case 1:
            param_1.sent();
            return [2];
        }
      });
    })();
  })();
})();
