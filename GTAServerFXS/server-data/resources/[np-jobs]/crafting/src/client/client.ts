(() => {
  var varData_1 = {
    739: function (param_1, param_2, param_3) {
      var varData_2;
      (function (param_1_1, param_2_1, param_3_1) {
        if (true) {
          varData_2 = function () {
            return param_3_1(param_1_1);
          }.call(param_2, param_3, param_2, param_1);
          if (varData_2 !== undefined) {
            param_1.exports = varData_2;
          }
        } else {}
      })(this, "UUID", function () {
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
          if (param_1_1 !== undefined) {
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
            handleAction_15(param_1_1, handleAction_17(handleAction_9(new Date().getTime()), 32));
          }
          handleAction_15(this.state, param_1_1);
          this.next();
        }
        handleAction_33.prototype.next = function () {
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
        handleAction_33.prototype.reseed = function (param_1_1) {
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
        handleAction_33.reseed = function (param_1_1) {
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
        createUUID.prototype.make = function (param_1_1) {
          var varData_85;
          var varData_86 = this;
          if (param_1_1 === 1) {
            var varData_87 = new Date();
            var varData_88 = varData_87.getTime();
            if (varData_88 !== varData_83) {
              varData_84 = 0;
            } else {
              varData_84++;
            }
            varData_83 = varData_88;
            var varData_89 = handleAction_9(varData_88);
            handleAction_12(varData_89, 10000);
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
        createUUID.prototype.format = function (param_1_1) {
          var varData_97;
          var varData_98;
          if (param_1_1 === "z85") {
            varData_97 = z85Encode(this, 16);
          } else if (param_1_1 === "b16") {
            varData_98 = Array(32);
            handleAction_1(this, 0, 15, true, varData_98, 0);
            varData_97 = varData_98.join("");
          } else if (param_1_1 === undefined || param_1_1 === "std") {
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
        createUUID.prototype.toString = function (param_1_1) {
          return this.format(param_1_1);
        };
        createUUID.prototype.toJSON = function () {
          return this.format("std");
        };
        createUUID.prototype.parse = function (param_1_1, param_2_1) {
          if (typeof param_1_1 !== "string") {
            throw new Error("UUID: parse: invalid argument (type string expected)");
          }
          if (param_2_1 === "z85") {
            z85Decode(param_1_1, this);
          } else if (param_2_1 === "b16") {
            handleAction_3(param_1_1, 0, 35, this, 0);
          } else if (param_2_1 === undefined || param_2_1 === "std") {
            var varData_99 = {
              nil: "00000000-0000-0000-0000-000000000000",
              "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
              "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
              "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
              "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
            };
            if (varData_99[param_1_1] !== undefined) {
              param_1_1 = varData_99[param_1_1];
            } else if (!param_1_1.match(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)) {
              throw new Error("UUID: parse: invalid string representation (expected \"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx\")");
            }
            handleAction_3(param_1_1, 0, 7, this, 0);
            handleAction_3(param_1_1, 9, 12, this, 4);
            handleAction_3(param_1_1, 14, 17, this, 6);
            handleAction_3(param_1_1, 19, 22, this, 8);
            handleAction_3(param_1_1, 24, 35, this, 10);
          }
          return this;
        };
        createUUID.prototype.export = function () {
          var varData_100 = Array(16);
          for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
            varData_100[loopIdx] = this[loopIdx];
          }
          return varData_100;
        };
        createUUID.prototype.import = function (param_1_1) {
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
        createUUID.prototype.compare = function (param_1_1) {
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
              return +1;
            }
          }
          return 0;
        };
        createUUID.prototype.equal = function (param_1_1) {
          return this.compare(param_1_1) === 0;
        };
        createUUID.prototype.fold = function (param_1_1) {
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
    if (varData_105 !== undefined) {
      return varData_105.exports;
    }
    var varData_106 = varData_104[param_1] = {
      exports: {}
    };
    varData_1[param_1].call(varData_106.exports, varData_106, varData_106.exports, handleAction_35);
    return varData_106.exports;
  }
  (() => {
    handleAction_35.d = (param_1, param_2) => {
      for (var varData_107 in param_2) {
        if (handleAction_35.o(param_2, varData_107) && !handleAction_35.o(param_1, varData_107)) {
          Object.defineProperty(param_1, varData_107, {
            enumerable: true,
            get: param_2[varData_107]
          });
        }
      }
    };
  })();
  (() => {
    handleAction_35.o = (param_1, param_2) => Object.prototype.hasOwnProperty.call(param_1, param_2);
  })();
  var varData_108 = {};
  (() => {
    'use strict';

    var varData_109 = {
      R: () => varData_3218
    };
    handleAction_35.d(varData_108, varData_109);
    ;
    const varData_110 = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var varData_111 = {
      randomUUID: varData_110
    };
    const varData_112 = varData_111;
    ;
    let varData_113;
    const varData_114 = new Uint8Array(16);
    function handleAction_36() {
      if (!varData_113) {
        varData_113 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!varData_113) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return varData_113(varData_114);
    }
    ;
    const varData_115 = [];
    for (let loopIdx = 0; loopIdx < 256; ++loopIdx) {
      varData_115.push((loopIdx + 256).toString(16).slice(1));
    }
    function handleAction_37(param_1, _0x24d973 = 0) {
      return varData_115[param_1[_0x24d973 + 0]] + varData_115[param_1[_0x24d973 + 1]] + varData_115[param_1[_0x24d973 + 2]] + varData_115[param_1[_0x24d973 + 3]] + "-" + varData_115[param_1[_0x24d973 + 4]] + varData_115[param_1[_0x24d973 + 5]] + "-" + varData_115[param_1[_0x24d973 + 6]] + varData_115[param_1[_0x24d973 + 7]] + "-" + varData_115[param_1[_0x24d973 + 8]] + varData_115[param_1[_0x24d973 + 9]] + "-" + varData_115[param_1[_0x24d973 + 10]] + varData_115[param_1[_0x24d973 + 11]] + varData_115[param_1[_0x24d973 + 12]] + varData_115[param_1[_0x24d973 + 13]] + varData_115[param_1[_0x24d973 + 14]] + varData_115[param_1[_0x24d973 + 15]];
    }
    function createUUID(param_1, _0x2c0361 = 0) {
      const varData_116 = handleAction_37(param_1, _0x2c0361);
      if (!validate(varData_116)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return varData_116;
    }
    const varData_117 = null && createUUID;
    ;
    function createUUID_1(param_1, param_2, param_3) {
      if (varData_112.randomUUID && !param_2 && !param_1) {
        return varData_112.randomUUID();
      }
      param_1 = param_1 || {};
      const varData_118 = param_1.random || (param_1.rng || handleAction_36)();
      varData_118[6] = varData_118[6] & 15 | 64;
      varData_118[8] = varData_118[8] & 63 | 128;
      if (param_2) {
        param_3 = param_3 || 0;
        for (let loopIdx = 0; loopIdx < 16; ++loopIdx) {
          param_2[param_3 + loopIdx] = varData_118[loopIdx];
        }
        return param_2;
      }
      return handleAction_37(varData_118);
    }
    const varData_119 = createUUID_1;
    ;
    const varData_120 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    ;
    function handleAction_38(param_1) {
      return typeof param_1 === "string" && varData_120.test(param_1);
    }
    const varData_121 = handleAction_38;
    ;
    function createUUID_2(param_1) {
      if (!varData_121(param_1)) {
        throw TypeError("Invalid UUID");
      }
      let varData_122;
      const varData_123 = new Uint8Array(16);
      varData_123[0] = (varData_122 = parseInt(param_1.slice(0, 8), 16)) >>> 24;
      varData_123[1] = varData_122 >>> 16 & 255;
      varData_123[2] = varData_122 >>> 8 & 255;
      varData_123[3] = varData_122 & 255;
      varData_123[4] = (varData_122 = parseInt(param_1.slice(9, 13), 16)) >>> 8;
      varData_123[5] = varData_122 & 255;
      varData_123[6] = (varData_122 = parseInt(param_1.slice(14, 18), 16)) >>> 8;
      varData_123[7] = varData_122 & 255;
      varData_123[8] = (varData_122 = parseInt(param_1.slice(19, 23), 16)) >>> 8;
      varData_123[9] = varData_122 & 255;
      varData_123[10] = (varData_122 = parseInt(param_1.slice(24, 36), 16)) / 1099511627776 & 255;
      varData_123[11] = varData_122 / 4294967296 & 255;
      varData_123[12] = varData_122 >>> 24 & 255;
      varData_123[13] = varData_122 >>> 16 & 255;
      varData_123[14] = varData_122 >>> 8 & 255;
      varData_123[15] = varData_122 & 255;
      return varData_123;
    }
    const varData_124 = createUUID_2;
    ;
    function handleAction_39(param_1) {
      param_1 = unescape(encodeURIComponent(param_1));
      const varData_125 = [];
      for (let loopIdx = 0; loopIdx < param_1.length; ++loopIdx) {
        varData_125.push(param_1.charCodeAt(loopIdx));
      }
      return varData_125;
    }
    const varData_126 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    const varData_127 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function handleAction_40(param_1, param_2, param_3) {
      function handleAction_41(param_1_1, param_2_1, param_3_1, param_4) {
        if (typeof param_1_1 === "string") {
          param_1_1 = handleAction_39(param_1_1);
        }
        if (typeof param_2_1 === "string") {
          param_2_1 = varData_124(param_2_1);
        }
        if (param_2_1?.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let varData_128 = new Uint8Array(16 + param_1_1.length);
        varData_128.set(param_2_1);
        varData_128.set(param_1_1, param_2_1.length);
        varData_128 = param_3(varData_128);
        varData_128[6] = varData_128[6] & 15 | param_2;
        varData_128[8] = varData_128[8] & 63 | 128;
        if (param_3_1) {
          param_4 = param_4 || 0;
          for (let loopIdx = 0; loopIdx < 16; ++loopIdx) {
            param_3_1[param_4 + loopIdx] = varData_128[loopIdx];
          }
          return param_3_1;
        }
        return handleAction_37(varData_128);
      }
      try {
        handleAction_41.name = param_1;
      } catch (err) {}
      handleAction_41.DNS = varData_126;
      handleAction_41.URL = varData_127;
      return handleAction_41;
    }
    ;
    function handleAction_42(param_1, param_2, param_3, param_4) {
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
    function handleAction_43(param_1, param_2) {
      return param_1 << param_2 | param_1 >>> 32 - param_2;
    }
    function handleAction_44(param_1) {
      const varData_129 = [1518500249, 1859775393, 2400959708, 3395469782];
      const varData_130 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof param_1 === "string") {
        const varData_131 = unescape(encodeURIComponent(param_1));
        param_1 = [];
        for (let loopIdx = 0; loopIdx < varData_131.length; ++loopIdx) {
          param_1.push(varData_131.charCodeAt(loopIdx));
        }
      } else if (!Array.isArray(param_1)) {
        param_1 = Array.prototype.slice.call(param_1);
      }
      param_1.push(128);
      const varData_132 = param_1.length / 4 + 2;
      const varData_133 = Math.ceil(varData_132 / 16);
      const varData_134 = new Array(varData_133);
      for (let loopIdx = 0; loopIdx < varData_133; ++loopIdx) {
        const varData_135 = new Uint32Array(16);
        for (let loopIdx_1 = 0; loopIdx_1 < 16; ++loopIdx_1) {
          varData_135[loopIdx_1] = param_1[loopIdx * 64 + loopIdx_1 * 4] << 24 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 1] << 16 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 2] << 8 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 3];
        }
        varData_134[loopIdx] = varData_135;
      }
      varData_134[varData_133 - 1][14] = (param_1.length - 1) * 8 / Math.pow(2, 32);
      varData_134[varData_133 - 1][14] = Math.floor(varData_134[varData_133 - 1][14]);
      varData_134[varData_133 - 1][15] = (param_1.length - 1) * 8 & -1;
      for (let loopIdx = 0; loopIdx < varData_133; ++loopIdx) {
        const varData_136 = new Uint32Array(80);
        for (let loopIdx_1 = 0; loopIdx_1 < 16; ++loopIdx_1) {
          varData_136[loopIdx_1] = varData_134[loopIdx][loopIdx_1];
        }
        for (let loopIdx_1 = 16; loopIdx_1 < 80; ++loopIdx_1) {
          varData_136[loopIdx_1] = handleAction_43(varData_136[loopIdx_1 - 3] ^ varData_136[loopIdx_1 - 8] ^ varData_136[loopIdx_1 - 14] ^ varData_136[loopIdx_1 - 16], 1);
        }
        let varData_137 = varData_130[0];
        let varData_138 = varData_130[1];
        let varData_139 = varData_130[2];
        let varData_140 = varData_130[3];
        let varData_141 = varData_130[4];
        for (let loopIdx_1 = 0; loopIdx_1 < 80; ++loopIdx_1) {
          const varData_142 = Math.floor(loopIdx_1 / 20);
          const varData_143 = handleAction_43(varData_137, 5) + handleAction_42(varData_142, varData_138, varData_139, varData_140) + varData_141 + varData_129[varData_142] + varData_136[loopIdx_1] >>> 0;
          varData_141 = varData_140;
          varData_140 = varData_139;
          varData_139 = handleAction_43(varData_138, 30) >>> 0;
          varData_138 = varData_137;
          varData_137 = varData_143;
        }
        varData_130[0] = varData_130[0] + varData_137 >>> 0;
        varData_130[1] = varData_130[1] + varData_138 >>> 0;
        varData_130[2] = varData_130[2] + varData_139 >>> 0;
        varData_130[3] = varData_130[3] + varData_140 >>> 0;
        varData_130[4] = varData_130[4] + varData_141 >>> 0;
      }
      return [varData_130[0] >> 24 & 255, varData_130[0] >> 16 & 255, varData_130[0] >> 8 & 255, varData_130[0] & 255, varData_130[1] >> 24 & 255, varData_130[1] >> 16 & 255, varData_130[1] >> 8 & 255, varData_130[1] & 255, varData_130[2] >> 24 & 255, varData_130[2] >> 16 & 255, varData_130[2] >> 8 & 255, varData_130[2] & 255, varData_130[3] >> 24 & 255, varData_130[3] >> 16 & 255, varData_130[3] >> 8 & 255, varData_130[3] & 255, varData_130[4] >> 24 & 255, varData_130[4] >> 16 & 255, varData_130[4] >> 8 & 255, varData_130[4] & 255];
    }
    const varData_144 = handleAction_44;
    ;
    const varData_145 = handleAction_40("v5", 80, varData_144);
    const varData_146 = varData_145;
    ; /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    const varData_147 = 4;
    const varData_148 = 0;
    const varData_149 = 1;
    const varData_150 = 2;
    function handleAction_45(param_1) {
      let varData_151 = param_1.length;
      while (--varData_151 >= 0) {
        param_1[varData_151] = 0;
      }
    }
    const varData_152 = 0;
    const varData_153 = 1;
    const varData_154 = 2;
    const varData_155 = 3;
    const varData_156 = 258;
    const varData_157 = 29;
    const varData_158 = 256;
    const varData_159 = varData_158 + 1 + varData_157;
    const varData_160 = 30;
    const varData_161 = 19;
    const varData_162 = varData_159 * 2 + 1;
    const varData_163 = 15;
    const varData_164 = 16;
    const varData_165 = 7;
    const varData_166 = 256;
    const varData_167 = 16;
    const varData_168 = 17;
    const varData_169 = 18;
    const varData_170 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const varData_171 = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const varData_172 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const varData_173 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const varData_174 = 512;
    const varData_175 = new Array((varData_159 + 2) * 2);
    handleAction_45(varData_175);
    const varData_176 = new Array(varData_160 * 2);
    handleAction_45(varData_176);
    const varData_177 = new Array(varData_174);
    handleAction_45(varData_177);
    const varData_178 = new Array(varData_156 - varData_155 + 1);
    handleAction_45(varData_178);
    const varData_179 = new Array(varData_157);
    handleAction_45(varData_179);
    const varData_180 = new Array(varData_160);
    handleAction_45(varData_180);
    function handleAction_46(param_1, param_2, param_3, param_4, param_5) {
      this.static_tree = param_1;
      this.extra_bits = param_2;
      this.extra_base = param_3;
      this.elems = param_4;
      this.max_length = param_5;
      this.has_stree = param_1 && param_1.length;
    }
    let varData_181;
    let varData_182;
    let varData_183;
    function handleAction_47(param_1, param_2) {
      this.dyn_tree = param_1;
      this.max_code = 0;
      this.stat_desc = param_2;
    }
    const varData_184 = param_1 => {
      if (param_1 < 256) {
        return varData_177[param_1];
      } else {
        return varData_177[256 + (param_1 >>> 7)];
      }
    };
    const varData_185 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
    };
    const varData_186 = (param_1, param_2, param_3) => {
      if (param_1.bi_valid > varData_164 - param_3) {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        varData_185(param_1, param_1.bi_buf);
        param_1.bi_buf = param_2 >> varData_164 - param_1.bi_valid;
        param_1.bi_valid += param_3 - varData_164;
      } else {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        param_1.bi_valid += param_3;
      }
    };
    const varData_187 = (param_1, param_2, param_3) => {
      varData_186(param_1, param_3[param_2 * 2], param_3[param_2 * 2 + 1]);
    };
    const varData_188 = (param_1, param_2) => {
      let varData_189 = 0;
      do {
        varData_189 |= param_1 & 1;
        param_1 >>>= 1;
        varData_189 <<= 1;
      } while (--param_2 > 0);
      return varData_189 >>> 1;
    };
    const varData_190 = param_1 => {
      if (param_1.bi_valid === 16) {
        varData_185(param_1, param_1.bi_buf);
        param_1.bi_buf = 0;
        param_1.bi_valid = 0;
      } else if (param_1.bi_valid >= 8) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf & 255;
        param_1.bi_buf >>= 8;
        param_1.bi_valid -= 8;
      }
    };
    const varData_191 = (param_1, param_2) => {
      const varData_192 = param_2.dyn_tree;
      const varData_193 = param_2.max_code;
      const varData_194 = param_2.stat_desc.static_tree;
      const varData_195 = param_2.stat_desc.has_stree;
      const varData_196 = param_2.stat_desc.extra_bits;
      const varData_197 = param_2.stat_desc.extra_base;
      const varData_198 = param_2.stat_desc.max_length;
      let varData_199;
      let varData_200;
      let varData_201;
      let varData_202;
      let varData_203;
      let varData_204;
      let varData_205 = 0;
      for (varData_202 = 0; varData_202 <= varData_163; varData_202++) {
        param_1.bl_count[varData_202] = 0;
      }
      varData_192[param_1.heap[param_1.heap_max] * 2 + 1] = 0;
      for (varData_199 = param_1.heap_max + 1; varData_199 < varData_162; varData_199++) {
        varData_200 = param_1.heap[varData_199];
        varData_202 = varData_192[varData_192[varData_200 * 2 + 1] * 2 + 1] + 1;
        if (varData_202 > varData_198) {
          varData_202 = varData_198;
          varData_205++;
        }
        varData_192[varData_200 * 2 + 1] = varData_202;
        if (varData_200 > varData_193) {
          continue;
        }
        param_1.bl_count[varData_202]++;
        varData_203 = 0;
        if (varData_200 >= varData_197) {
          varData_203 = varData_196[varData_200 - varData_197];
        }
        varData_204 = varData_192[varData_200 * 2];
        param_1.opt_len += varData_204 * (varData_202 + varData_203);
        if (varData_195) {
          param_1.static_len += varData_204 * (varData_194[varData_200 * 2 + 1] + varData_203);
        }
      }
      if (varData_205 === 0) {
        return;
      }
      do {
        varData_202 = varData_198 - 1;
        while (param_1.bl_count[varData_202] === 0) {
          varData_202--;
        }
        param_1.bl_count[varData_202]--;
        param_1.bl_count[varData_202 + 1] += 2;
        param_1.bl_count[varData_198]--;
        varData_205 -= 2;
      } while (varData_205 > 0);
      for (varData_202 = varData_198; varData_202 !== 0; varData_202--) {
        varData_200 = param_1.bl_count[varData_202];
        while (varData_200 !== 0) {
          varData_201 = param_1.heap[--varData_199];
          if (varData_201 > varData_193) {
            continue;
          }
          if (varData_192[varData_201 * 2 + 1] !== varData_202) {
            param_1.opt_len += (varData_202 - varData_192[varData_201 * 2 + 1]) * varData_192[varData_201 * 2];
            varData_192[varData_201 * 2 + 1] = varData_202;
          }
          varData_200--;
        }
      }
    };
    const varData_206 = (param_1, param_2, param_3) => {
      const varData_207 = new Array(varData_163 + 1);
      let varData_208 = 0;
      let varData_209;
      let varData_210;
      for (varData_209 = 1; varData_209 <= varData_163; varData_209++) {
        varData_208 = varData_208 + param_3[varData_209 - 1] << 1;
        varData_207[varData_209] = varData_208;
      }
      for (varData_210 = 0; varData_210 <= param_2; varData_210++) {
        let varData_211 = param_1[varData_210 * 2 + 1];
        if (varData_211 === 0) {
          continue;
        }
        param_1[varData_210 * 2] = varData_188(varData_207[varData_211]++, varData_211);
      }
    };
    const varData_212 = () => {
      let varData_213;
      let varData_214;
      let varData_215;
      let varData_216;
      let varData_217;
      const varData_218 = new Array(varData_163 + 1);
      varData_215 = 0;
      for (varData_216 = 0; varData_216 < varData_157 - 1; varData_216++) {
        varData_179[varData_216] = varData_215;
        for (varData_213 = 0; varData_213 < 1 << varData_170[varData_216]; varData_213++) {
          varData_178[varData_215++] = varData_216;
        }
      }
      varData_178[varData_215 - 1] = varData_216;
      varData_217 = 0;
      for (varData_216 = 0; varData_216 < 16; varData_216++) {
        varData_180[varData_216] = varData_217;
        for (varData_213 = 0; varData_213 < 1 << varData_171[varData_216]; varData_213++) {
          varData_177[varData_217++] = varData_216;
        }
      }
      varData_217 >>= 7;
      for (; varData_216 < varData_160; varData_216++) {
        varData_180[varData_216] = varData_217 << 7;
        for (varData_213 = 0; varData_213 < 1 << varData_171[varData_216] - 7; varData_213++) {
          varData_177[256 + varData_217++] = varData_216;
        }
      }
      for (varData_214 = 0; varData_214 <= varData_163; varData_214++) {
        varData_218[varData_214] = 0;
      }
      varData_213 = 0;
      while (varData_213 <= 143) {
        varData_175[varData_213 * 2 + 1] = 8;
        varData_213++;
        varData_218[8]++;
      }
      while (varData_213 <= 255) {
        varData_175[varData_213 * 2 + 1] = 9;
        varData_213++;
        varData_218[9]++;
      }
      while (varData_213 <= 279) {
        varData_175[varData_213 * 2 + 1] = 7;
        varData_213++;
        varData_218[7]++;
      }
      while (varData_213 <= 287) {
        varData_175[varData_213 * 2 + 1] = 8;
        varData_213++;
        varData_218[8]++;
      }
      varData_206(varData_175, varData_159 + 1, varData_218);
      for (varData_213 = 0; varData_213 < varData_160; varData_213++) {
        varData_176[varData_213 * 2 + 1] = 5;
        varData_176[varData_213 * 2] = varData_188(varData_213, 5);
      }
      varData_181 = new handleAction_46(varData_175, varData_170, varData_158 + 1, varData_159, varData_163);
      varData_182 = new handleAction_46(varData_176, varData_171, 0, varData_160, varData_163);
      varData_183 = new handleAction_46(new Array(0), varData_172, 0, varData_161, varData_165);
    };
    const varData_219 = param_1 => {
      let varData_220;
      for (varData_220 = 0; varData_220 < varData_159; varData_220++) {
        param_1.dyn_ltree[varData_220 * 2] = 0;
      }
      for (varData_220 = 0; varData_220 < varData_160; varData_220++) {
        param_1.dyn_dtree[varData_220 * 2] = 0;
      }
      for (varData_220 = 0; varData_220 < varData_161; varData_220++) {
        param_1.bl_tree[varData_220 * 2] = 0;
      }
      param_1.dyn_ltree[varData_166 * 2] = 1;
      param_1.opt_len = param_1.static_len = 0;
      param_1.sym_next = param_1.matches = 0;
    };
    const varData_221 = param_1 => {
      if (param_1.bi_valid > 8) {
        varData_185(param_1, param_1.bi_buf);
      } else if (param_1.bi_valid > 0) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf;
      }
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
    };
    const varData_222 = (param_1, param_2, param_3, param_4) => {
      const varData_223 = param_2 * 2;
      const varData_224 = param_3 * 2;
      return param_1[varData_223] < param_1[varData_224] || param_1[varData_223] === param_1[varData_224] && param_4[param_2] <= param_4[param_3];
    };
    const varData_225 = (param_1, param_2, param_3) => {
      const varData_226 = param_1.heap[param_3];
      let varData_227 = param_3 << 1;
      while (varData_227 <= param_1.heap_len) {
        if (varData_227 < param_1.heap_len && varData_222(param_2, param_1.heap[varData_227 + 1], param_1.heap[varData_227], param_1.depth)) {
          varData_227++;
        }
        if (varData_222(param_2, varData_226, param_1.heap[varData_227], param_1.depth)) {
          break;
        }
        param_1.heap[param_3] = param_1.heap[varData_227];
        param_3 = varData_227;
        varData_227 <<= 1;
      }
      param_1.heap[param_3] = varData_226;
    };
    const varData_228 = (param_1, param_2, param_3) => {
      let varData_229;
      let varData_230;
      let varData_231 = 0;
      let varData_232;
      let varData_233;
      if (param_1.sym_next !== 0) {
        do {
          varData_229 = param_1.pending_buf[param_1.sym_buf + varData_231++] & 255;
          varData_229 += (param_1.pending_buf[param_1.sym_buf + varData_231++] & 255) << 8;
          varData_230 = param_1.pending_buf[param_1.sym_buf + varData_231++];
          if (varData_229 === 0) {
            varData_187(param_1, varData_230, param_2);
          } else {
            varData_232 = varData_178[varData_230];
            varData_187(param_1, varData_232 + varData_158 + 1, param_2);
            varData_233 = varData_170[varData_232];
            if (varData_233 !== 0) {
              varData_230 -= varData_179[varData_232];
              varData_186(param_1, varData_230, varData_233);
            }
            varData_229--;
            varData_232 = varData_184(varData_229);
            varData_187(param_1, varData_232, param_3);
            varData_233 = varData_171[varData_232];
            if (varData_233 !== 0) {
              varData_229 -= varData_180[varData_232];
              varData_186(param_1, varData_229, varData_233);
            }
          }
        } while (varData_231 < param_1.sym_next);
      }
      varData_187(param_1, varData_166, param_2);
    };
    const varData_234 = (param_1, param_2) => {
      const varData_235 = param_2.dyn_tree;
      const varData_236 = param_2.stat_desc.static_tree;
      const varData_237 = param_2.stat_desc.has_stree;
      const varData_238 = param_2.stat_desc.elems;
      let varData_239;
      let varData_240;
      let varData_241 = -1;
      let varData_242;
      param_1.heap_len = 0;
      param_1.heap_max = varData_162;
      for (varData_239 = 0; varData_239 < varData_238; varData_239++) {
        if (varData_235[varData_239 * 2] !== 0) {
          param_1.heap[++param_1.heap_len] = varData_241 = varData_239;
          param_1.depth[varData_239] = 0;
        } else {
          varData_235[varData_239 * 2 + 1] = 0;
        }
      }
      while (param_1.heap_len < 2) {
        varData_242 = param_1.heap[++param_1.heap_len] = varData_241 < 2 ? ++varData_241 : 0;
        varData_235[varData_242 * 2] = 1;
        param_1.depth[varData_242] = 0;
        param_1.opt_len--;
        if (varData_237) {
          param_1.static_len -= varData_236[varData_242 * 2 + 1];
        }
      }
      param_2.max_code = varData_241;
      for (varData_239 = param_1.heap_len >> 1; varData_239 >= 1; varData_239--) {
        varData_225(param_1, varData_235, varData_239);
      }
      varData_242 = varData_238;
      do {
        varData_239 = param_1.heap[1];
        param_1.heap[1] = param_1.heap[param_1.heap_len--];
        varData_225(param_1, varData_235, 1);
        varData_240 = param_1.heap[1];
        param_1.heap[--param_1.heap_max] = varData_239;
        param_1.heap[--param_1.heap_max] = varData_240;
        varData_235[varData_242 * 2] = varData_235[varData_239 * 2] + varData_235[varData_240 * 2];
        param_1.depth[varData_242] = (param_1.depth[varData_239] >= param_1.depth[varData_240] ? param_1.depth[varData_239] : param_1.depth[varData_240]) + 1;
        varData_235[varData_239 * 2 + 1] = varData_235[varData_240 * 2 + 1] = varData_242;
        param_1.heap[1] = varData_242++;
        varData_225(param_1, varData_235, 1);
      } while (param_1.heap_len >= 2);
      param_1.heap[--param_1.heap_max] = param_1.heap[1];
      varData_191(param_1, param_2);
      varData_206(varData_235, varData_241, param_1.bl_count);
    };
    const varData_243 = (param_1, param_2, param_3) => {
      let varData_244;
      let varData_245 = -1;
      let varData_246;
      let varData_247 = param_2[1];
      let varData_248 = 0;
      let varData_249 = 7;
      let varData_250 = 4;
      if (varData_247 === 0) {
        varData_249 = 138;
        varData_250 = 3;
      }
      param_2[(param_3 + 1) * 2 + 1] = 65535;
      for (varData_244 = 0; varData_244 <= param_3; varData_244++) {
        varData_246 = varData_247;
        varData_247 = param_2[(varData_244 + 1) * 2 + 1];
        if (++varData_248 < varData_249 && varData_246 === varData_247) {
          continue;
        } else if (varData_248 < varData_250) {
          param_1.bl_tree[varData_246 * 2] += varData_248;
        } else if (varData_246 !== 0) {
          if (varData_246 !== varData_245) {
            param_1.bl_tree[varData_246 * 2]++;
          }
          param_1.bl_tree[varData_167 * 2]++;
        } else if (varData_248 <= 10) {
          param_1.bl_tree[varData_168 * 2]++;
        } else {
          param_1.bl_tree[varData_169 * 2]++;
        }
        varData_248 = 0;
        varData_245 = varData_246;
        if (varData_247 === 0) {
          varData_249 = 138;
          varData_250 = 3;
        } else if (varData_246 === varData_247) {
          varData_249 = 6;
          varData_250 = 3;
        } else {
          varData_249 = 7;
          varData_250 = 4;
        }
      }
    };
    const varData_251 = (param_1, param_2, param_3) => {
      let varData_252;
      let varData_253 = -1;
      let varData_254;
      let varData_255 = param_2[1];
      let varData_256 = 0;
      let varData_257 = 7;
      let varData_258 = 4;
      if (varData_255 === 0) {
        varData_257 = 138;
        varData_258 = 3;
      }
      for (varData_252 = 0; varData_252 <= param_3; varData_252++) {
        varData_254 = varData_255;
        varData_255 = param_2[(varData_252 + 1) * 2 + 1];
        if (++varData_256 < varData_257 && varData_254 === varData_255) {
          continue;
        } else if (varData_256 < varData_258) {
          do {
            varData_187(param_1, varData_254, param_1.bl_tree);
          } while (--varData_256 !== 0);
        } else if (varData_254 !== 0) {
          if (varData_254 !== varData_253) {
            varData_187(param_1, varData_254, param_1.bl_tree);
            varData_256--;
          }
          varData_187(param_1, varData_167, param_1.bl_tree);
          varData_186(param_1, varData_256 - 3, 2);
        } else if (varData_256 <= 10) {
          varData_187(param_1, varData_168, param_1.bl_tree);
          varData_186(param_1, varData_256 - 3, 3);
        } else {
          varData_187(param_1, varData_169, param_1.bl_tree);
          varData_186(param_1, varData_256 - 11, 7);
        }
        varData_256 = 0;
        varData_253 = varData_254;
        if (varData_255 === 0) {
          varData_257 = 138;
          varData_258 = 3;
        } else if (varData_254 === varData_255) {
          varData_257 = 6;
          varData_258 = 3;
        } else {
          varData_257 = 7;
          varData_258 = 4;
        }
      }
    };
    const varData_259 = param_1 => {
      let varData_260;
      varData_243(param_1, param_1.dyn_ltree, param_1.l_desc.max_code);
      varData_243(param_1, param_1.dyn_dtree, param_1.d_desc.max_code);
      varData_234(param_1, param_1.bl_desc);
      for (varData_260 = varData_161 - 1; varData_260 >= 3; varData_260--) {
        if (param_1.bl_tree[varData_173[varData_260] * 2 + 1] !== 0) {
          break;
        }
      }
      param_1.opt_len += (varData_260 + 1) * 3 + 5 + 5 + 4;
      return varData_260;
    };
    const varData_261 = (param_1, param_2, param_3, param_4) => {
      let varData_262;
      varData_186(param_1, param_2 - 257, 5);
      varData_186(param_1, param_3 - 1, 5);
      varData_186(param_1, param_4 - 4, 4);
      for (varData_262 = 0; varData_262 < param_4; varData_262++) {
        varData_186(param_1, param_1.bl_tree[varData_173[varData_262] * 2 + 1], 3);
      }
      varData_251(param_1, param_1.dyn_ltree, param_2 - 1);
      varData_251(param_1, param_1.dyn_dtree, param_3 - 1);
    };
    const varData_263 = param_1 => {
      let varData_264 = 4093624447;
      let varData_265;
      for (varData_265 = 0; varData_265 <= 31; varData_265++, varData_264 >>>= 1) {
        if (varData_264 & 1 && param_1.dyn_ltree[varData_265 * 2] !== 0) {
          return varData_148;
        }
      }
      if (param_1.dyn_ltree[18] !== 0 || param_1.dyn_ltree[20] !== 0 || param_1.dyn_ltree[26] !== 0) {
        return varData_149;
      }
      for (varData_265 = 32; varData_265 < varData_158; varData_265++) {
        if (param_1.dyn_ltree[varData_265 * 2] !== 0) {
          return varData_149;
        }
      }
      return varData_148;
    };
    let isDisabled = false;
    const varData_266 = param_1 => {
      if (!isDisabled) {
        varData_212();
        isDisabled = true;
      }
      param_1.l_desc = new handleAction_47(param_1.dyn_ltree, varData_181);
      param_1.d_desc = new handleAction_47(param_1.dyn_dtree, varData_182);
      param_1.bl_desc = new handleAction_47(param_1.bl_tree, varData_183);
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
      varData_219(param_1);
    };
    const varData_267 = (param_1, param_2, param_3, param_4) => {
      varData_186(param_1, (varData_152 << 1) + (param_4 ? 1 : 0), 3);
      varData_221(param_1);
      varData_185(param_1, param_3);
      varData_185(param_1, ~param_3);
      if (param_3) {
        param_1.pending_buf.set(param_1.window.subarray(param_2, param_2 + param_3), param_1.pending);
      }
      param_1.pending += param_3;
    };
    const varData_268 = param_1 => {
      varData_186(param_1, varData_153 << 1, 3);
      varData_187(param_1, varData_166, varData_175);
      varData_190(param_1);
    };
    const varData_269 = (param_1, param_2, param_3, param_4) => {
      let varData_270;
      let varData_271;
      let varData_272 = 0;
      if (param_1.level > 0) {
        if (param_1.strm.data_type === varData_150) {
          param_1.strm.data_type = varData_263(param_1);
        }
        varData_234(param_1, param_1.l_desc);
        varData_234(param_1, param_1.d_desc);
        varData_272 = varData_259(param_1);
        varData_270 = param_1.opt_len + 3 + 7 >>> 3;
        varData_271 = param_1.static_len + 3 + 7 >>> 3;
        if (varData_271 <= varData_270) {
          varData_270 = varData_271;
        }
      } else {
        varData_270 = varData_271 = param_3 + 5;
      }
      if (param_3 + 4 <= varData_270 && param_2 !== -1) {
        varData_267(param_1, param_2, param_3, param_4);
      } else if (param_1.strategy === varData_147 || varData_271 === varData_270) {
        varData_186(param_1, (varData_153 << 1) + (param_4 ? 1 : 0), 3);
        varData_228(param_1, varData_175, varData_176);
      } else {
        varData_186(param_1, (varData_154 << 1) + (param_4 ? 1 : 0), 3);
        varData_261(param_1, param_1.l_desc.max_code + 1, param_1.d_desc.max_code + 1, varData_272 + 1);
        varData_228(param_1, param_1.dyn_ltree, param_1.dyn_dtree);
      }
      varData_219(param_1);
      if (param_4) {
        varData_221(param_1);
      }
    };
    const varData_273 = (param_1, param_2, param_3) => {
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2 >> 8;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_3;
      if (param_2 === 0) {
        param_1.dyn_ltree[param_3 * 2]++;
      } else {
        param_1.matches++;
        param_2--;
        param_1.dyn_ltree[(varData_178[param_3] + varData_158 + 1) * 2]++;
        param_1.dyn_dtree[varData_184(param_2) * 2]++;
      }
      return param_1.sym_next === param_1.sym_end;
    };
    var varData_274 = varData_266;
    var varData_275 = varData_267;
    var varData_276 = varData_269;
    var varData_277 = varData_273;
    var varData_278 = varData_268;
    var varData_279 = {
      _tr_init: varData_274,
      _tr_stored_block: varData_275,
      _tr_flush_block: varData_276,
      _tr_tally: varData_277,
      _tr_align: varData_278
    };
    var varData_280 = varData_279;
    const varData_281 = (param_1, param_2, param_3, param_4) => {
      let varData_282 = param_1 & 65535 | 0;
      let varData_283 = param_1 >>> 16 & 65535 | 0;
      let varData_284 = 0;
      while (param_3 !== 0) {
        varData_284 = param_3 > 2000 ? 2000 : param_3;
        param_3 -= varData_284;
        do {
          varData_282 = varData_282 + param_2[param_4++] | 0;
          varData_283 = varData_283 + varData_282 | 0;
        } while (--varData_284);
        varData_282 %= 65521;
        varData_283 %= 65521;
      }
      return varData_282 | varData_283 << 16 | 0;
    };
    var varData_285 = varData_281;
    const varData_286 = () => {
      let varData_287;
      let varData_288 = [];
      for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
        varData_287 = loopIdx;
        for (var loopIdx_1 = 0; loopIdx_1 < 8; loopIdx_1++) {
          varData_287 = varData_287 & 1 ? varData_287 >>> 1 ^ -306674912 : varData_287 >>> 1;
        }
        varData_288[loopIdx] = varData_287;
      }
      return varData_288;
    };
    const varData_289 = new Uint32Array(varData_286());
    const varData_290 = (param_1, param_2, param_3, param_4) => {
      const varData_291 = varData_289;
      const varData_292 = param_4 + param_3;
      param_1 ^= -1;
      for (let loopIdx = param_4; loopIdx < varData_292; loopIdx++) {
        param_1 = param_1 >>> 8 ^ varData_291[(param_1 ^ param_2[loopIdx]) & 255];
      }
      return param_1 ^ -1;
    };
    var varData_293 = varData_290;
    var varData_294 = {
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
    var varData_295 = {
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
    var varData_296 = varData_295;
    const {
      _tr_init: _0x48e9ff,
      _tr_stored_block: _0x25815d,
      _tr_flush_block: _0x549861,
      _tr_tally: _0x101b2a,
      _tr_align: _0xf28d95
    } = varData_280;
    const {
      Z_NO_FLUSH: _0x1d5b09,
      Z_PARTIAL_FLUSH: _0x54fea4,
      Z_FULL_FLUSH: _0x53ef57,
      Z_FINISH: _0x26b55f,
      Z_BLOCK: _0x1b51db,
      Z_OK: _0x126a72,
      Z_STREAM_END: _0x24d0ff,
      Z_STREAM_ERROR: _0x3185ba,
      Z_DATA_ERROR: _0xdc4e33,
      Z_BUF_ERROR: _0x2f16b6,
      Z_DEFAULT_COMPRESSION: _0x1b937f,
      Z_FILTERED: _0xbcbad6,
      Z_HUFFMAN_ONLY: _0x566f8,
      Z_RLE: _0x470764,
      Z_FIXED: _0x51c5df,
      Z_DEFAULT_STRATEGY: _0x3832b3,
      Z_UNKNOWN: _0x4c2f97,
      Z_DEFLATED: _0x2cd9d5
    } = varData_296;
    const varData_297 = 9;
    const varData_298 = 15;
    const varData_299 = 8;
    const varData_300 = 29;
    const varData_301 = 256;
    const varData_302 = varData_301 + 1 + varData_300;
    const varData_303 = 30;
    const varData_304 = 19;
    const varData_305 = varData_302 * 2 + 1;
    const varData_306 = 15;
    const varData_307 = 3;
    const varData_308 = 258;
    const varData_309 = varData_308 + varData_307 + 1;
    const varData_310 = 32;
    const varData_311 = 42;
    const varData_312 = 57;
    const varData_313 = 69;
    const varData_314 = 73;
    const varData_315 = 91;
    const varData_316 = 103;
    const varData_317 = 113;
    const varData_318 = 666;
    const varData_319 = 1;
    const varData_320 = 2;
    const varData_321 = 3;
    const varData_322 = 4;
    const varData_323 = 3;
    const varData_324 = (param_1, param_2) => {
      param_1.msg = varData_294[param_2];
      return param_2;
    };
    const varData_325 = param_1 => {
      return param_1 * 2 - (param_1 > 4 ? 9 : 0);
    };
    const varData_326 = param_1 => {
      let varData_327 = param_1.length;
      while (--varData_327 >= 0) {
        param_1[varData_327] = 0;
      }
    };
    const varData_328 = param_1 => {
      let varData_329;
      let varData_330;
      let varData_331;
      let varData_332 = param_1.w_size;
      varData_329 = param_1.hash_size;
      varData_331 = varData_329;
      do {
        varData_330 = param_1.head[--varData_331];
        param_1.head[varData_331] = varData_330 >= varData_332 ? varData_330 - varData_332 : 0;
      } while (--varData_329);
      varData_329 = varData_332;
      varData_331 = varData_329;
      do {
        varData_330 = param_1.prev[--varData_331];
        param_1.prev[varData_331] = varData_330 >= varData_332 ? varData_330 - varData_332 : 0;
      } while (--varData_329);
    };
    let varData_333 = (param_1, param_2, param_3) => (param_2 << param_1.hash_shift ^ param_3) & param_1.hash_mask;
    let varData_334 = varData_333;
    const varData_335 = param_1 => {
      const varData_336 = param_1.state;
      let varData_337 = varData_336.pending;
      if (varData_337 > param_1.avail_out) {
        varData_337 = param_1.avail_out;
      }
      if (varData_337 === 0) {
        return;
      }
      param_1.output.set(varData_336.pending_buf.subarray(varData_336.pending_out, varData_336.pending_out + varData_337), param_1.next_out);
      param_1.next_out += varData_337;
      varData_336.pending_out += varData_337;
      param_1.total_out += varData_337;
      param_1.avail_out -= varData_337;
      varData_336.pending -= varData_337;
      if (varData_336.pending === 0) {
        varData_336.pending_out = 0;
      }
    };
    const varData_338 = (param_1, param_2) => {
      _0x549861(param_1, param_1.block_start >= 0 ? param_1.block_start : -1, param_1.strstart - param_1.block_start, param_2);
      param_1.block_start = param_1.strstart;
      varData_335(param_1.strm);
    };
    const varData_339 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2;
    };
    const varData_340 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
    };
    const varData_341 = (param_1, param_2, param_3, param_4) => {
      let varData_342 = param_1.avail_in;
      if (varData_342 > param_4) {
        varData_342 = param_4;
      }
      if (varData_342 === 0) {
        return 0;
      }
      param_1.avail_in -= varData_342;
      param_2.set(param_1.input.subarray(param_1.next_in, param_1.next_in + varData_342), param_3);
      if (param_1.state.wrap === 1) {
        param_1.adler = varData_285(param_1.adler, param_2, varData_342, param_3);
      } else if (param_1.state.wrap === 2) {
        param_1.adler = varData_293(param_1.adler, param_2, varData_342, param_3);
      }
      param_1.next_in += varData_342;
      param_1.total_in += varData_342;
      return varData_342;
    };
    const varData_343 = (param_1, param_2) => {
      let varData_344 = param_1.max_chain_length;
      let varData_345 = param_1.strstart;
      let varData_346;
      let varData_347;
      let varData_348 = param_1.prev_length;
      let varData_349 = param_1.nice_match;
      const varData_350 = param_1.strstart > param_1.w_size - varData_309 ? param_1.strstart - (param_1.w_size - varData_309) : 0;
      const varData_351 = param_1.window;
      const varData_352 = param_1.w_mask;
      const varData_353 = param_1.prev;
      const varData_354 = param_1.strstart + varData_308;
      let varData_355 = varData_351[varData_345 + varData_348 - 1];
      let varData_356 = varData_351[varData_345 + varData_348];
      if (param_1.prev_length >= param_1.good_match) {
        varData_344 >>= 2;
      }
      if (varData_349 > param_1.lookahead) {
        varData_349 = param_1.lookahead;
      }
      do {
        varData_346 = param_2;
        if (varData_351[varData_346 + varData_348] !== varData_356 || varData_351[varData_346 + varData_348 - 1] !== varData_355 || varData_351[varData_346] !== varData_351[varData_345] || varData_351[++varData_346] !== varData_351[varData_345 + 1]) {
          continue;
        }
        varData_345 += 2;
        varData_346++;
        do {} while (varData_351[++varData_345] === varData_351[++varData_346] && varData_351[++varData_345] === varData_351[++varData_346] && varData_351[++varData_345] === varData_351[++varData_346] && varData_351[++varData_345] === varData_351[++varData_346] && varData_351[++varData_345] === varData_351[++varData_346] && varData_351[++varData_345] === varData_351[++varData_346] && varData_351[++varData_345] === varData_351[++varData_346] && varData_351[++varData_345] === varData_351[++varData_346] && varData_345 < varData_354);
        varData_347 = varData_308 - (varData_354 - varData_345);
        varData_345 = varData_354 - varData_308;
        if (varData_347 > varData_348) {
          param_1.match_start = param_2;
          varData_348 = varData_347;
          if (varData_347 >= varData_349) {
            break;
          }
          varData_355 = varData_351[varData_345 + varData_348 - 1];
          varData_356 = varData_351[varData_345 + varData_348];
        }
      } while ((param_2 = varData_353[param_2 & varData_352]) > varData_350 && --varData_344 !== 0);
      if (varData_348 <= param_1.lookahead) {
        return varData_348;
      }
      return param_1.lookahead;
    };
    const varData_357 = param_1 => {
      const varData_358 = param_1.w_size;
      let varData_359;
      let varData_360;
      let varData_361;
      do {
        varData_360 = param_1.window_size - param_1.lookahead - param_1.strstart;
        if (param_1.strstart >= varData_358 + (varData_358 - varData_309)) {
          param_1.window.set(param_1.window.subarray(varData_358, varData_358 + varData_358 - varData_360), 0);
          param_1.match_start -= varData_358;
          param_1.strstart -= varData_358;
          param_1.block_start -= varData_358;
          if (param_1.insert > param_1.strstart) {
            param_1.insert = param_1.strstart;
          }
          varData_328(param_1);
          varData_360 += varData_358;
        }
        if (param_1.strm.avail_in === 0) {
          break;
        }
        varData_359 = varData_341(param_1.strm, param_1.window, param_1.strstart + param_1.lookahead, varData_360);
        param_1.lookahead += varData_359;
        if (param_1.lookahead + param_1.insert >= varData_307) {
          varData_361 = param_1.strstart - param_1.insert;
          param_1.ins_h = param_1.window[varData_361];
          param_1.ins_h = varData_334(param_1, param_1.ins_h, param_1.window[varData_361 + 1]);
          while (param_1.insert) {
            param_1.ins_h = varData_334(param_1, param_1.ins_h, param_1.window[varData_361 + varData_307 - 1]);
            param_1.prev[varData_361 & param_1.w_mask] = param_1.head[param_1.ins_h];
            param_1.head[param_1.ins_h] = varData_361;
            varData_361++;
            param_1.insert--;
            if (param_1.lookahead + param_1.insert < varData_307) {
              break;
            }
          }
        }
      } while (param_1.lookahead < varData_309 && param_1.strm.avail_in !== 0);
    };
    const varData_362 = (param_1, param_2) => {
      let varData_363 = param_1.pending_buf_size - 5 > param_1.w_size ? param_1.w_size : param_1.pending_buf_size - 5;
      let varData_364;
      let varData_365;
      let varData_366;
      let varData_367 = 0;
      let varData_368 = param_1.strm.avail_in;
      do {
        varData_364 = 65535;
        varData_366 = param_1.bi_valid + 42 >> 3;
        if (param_1.strm.avail_out < varData_366) {
          break;
        }
        varData_366 = param_1.strm.avail_out - varData_366;
        varData_365 = param_1.strstart - param_1.block_start;
        if (varData_364 > varData_365 + param_1.strm.avail_in) {
          varData_364 = varData_365 + param_1.strm.avail_in;
        }
        if (varData_364 > varData_366) {
          varData_364 = varData_366;
        }
        if (varData_364 < varData_363 && (varData_364 === 0 && param_2 !== _0x26b55f || param_2 === _0x1d5b09 || varData_364 !== varData_365 + param_1.strm.avail_in)) {
          break;
        }
        varData_367 = param_2 === _0x26b55f && varData_364 === varData_365 + param_1.strm.avail_in ? 1 : 0;
        _0x25815d(param_1, 0, 0, varData_367);
        param_1.pending_buf[param_1.pending - 4] = varData_364;
        param_1.pending_buf[param_1.pending - 3] = varData_364 >> 8;
        param_1.pending_buf[param_1.pending - 2] = ~varData_364;
        param_1.pending_buf[param_1.pending - 1] = ~varData_364 >> 8;
        varData_335(param_1.strm);
        if (varData_365) {
          if (varData_365 > varData_364) {
            varData_365 = varData_364;
          }
          param_1.strm.output.set(param_1.window.subarray(param_1.block_start, param_1.block_start + varData_365), param_1.strm.next_out);
          param_1.strm.next_out += varData_365;
          param_1.strm.avail_out -= varData_365;
          param_1.strm.total_out += varData_365;
          param_1.block_start += varData_365;
          varData_364 -= varData_365;
        }
        if (varData_364) {
          varData_341(param_1.strm, param_1.strm.output, param_1.strm.next_out, varData_364);
          param_1.strm.next_out += varData_364;
          param_1.strm.avail_out -= varData_364;
          param_1.strm.total_out += varData_364;
        }
      } while (varData_367 === 0);
      varData_368 -= param_1.strm.avail_in;
      if (varData_368) {
        if (varData_368 >= param_1.w_size) {
          param_1.matches = 2;
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - param_1.w_size, param_1.strm.next_in), 0);
          param_1.strstart = param_1.w_size;
          param_1.insert = param_1.strstart;
        } else {
          if (param_1.window_size - param_1.strstart <= varData_368) {
            param_1.strstart -= param_1.w_size;
            param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
            if (param_1.matches < 2) {
              param_1.matches++;
            }
            if (param_1.insert > param_1.strstart) {
              param_1.insert = param_1.strstart;
            }
          }
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - varData_368, param_1.strm.next_in), param_1.strstart);
          param_1.strstart += varData_368;
          param_1.insert += varData_368 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_368;
        }
        param_1.block_start = param_1.strstart;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      if (varData_367) {
        return varData_322;
      }
      if (param_2 !== _0x1d5b09 && param_2 !== _0x26b55f && param_1.strm.avail_in === 0 && param_1.strstart === param_1.block_start) {
        return varData_320;
      }
      varData_366 = param_1.window_size - param_1.strstart;
      if (param_1.strm.avail_in > varData_366 && param_1.block_start >= param_1.w_size) {
        param_1.block_start -= param_1.w_size;
        param_1.strstart -= param_1.w_size;
        param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
        if (param_1.matches < 2) {
          param_1.matches++;
        }
        varData_366 += param_1.w_size;
        if (param_1.insert > param_1.strstart) {
          param_1.insert = param_1.strstart;
        }
      }
      if (varData_366 > param_1.strm.avail_in) {
        varData_366 = param_1.strm.avail_in;
      }
      if (varData_366) {
        varData_341(param_1.strm, param_1.window, param_1.strstart, varData_366);
        param_1.strstart += varData_366;
        param_1.insert += varData_366 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_366;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      varData_366 = param_1.bi_valid + 42 >> 3;
      varData_366 = param_1.pending_buf_size - varData_366 > 65535 ? 65535 : param_1.pending_buf_size - varData_366;
      varData_363 = varData_366 > param_1.w_size ? param_1.w_size : varData_366;
      varData_365 = param_1.strstart - param_1.block_start;
      if (varData_365 >= varData_363 || (varData_365 || param_2 === _0x26b55f) && param_2 !== _0x1d5b09 && param_1.strm.avail_in === 0 && varData_365 <= varData_366) {
        varData_364 = varData_365 > varData_366 ? varData_366 : varData_365;
        varData_367 = param_2 === _0x26b55f && param_1.strm.avail_in === 0 && varData_364 === varData_365 ? 1 : 0;
        _0x25815d(param_1, param_1.block_start, varData_364, varData_367);
        param_1.block_start += varData_364;
        varData_335(param_1.strm);
      }
      if (varData_367) {
        return varData_321;
      } else {
        return varData_319;
      }
    };
    const varData_369 = (param_1, param_2) => {
      let varData_370;
      let varData_371;
      while (true) {
        if (param_1.lookahead < varData_309) {
          varData_357(param_1);
          if (param_1.lookahead < varData_309 && param_2 === _0x1d5b09) {
            return varData_319;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_370 = 0;
        if (param_1.lookahead >= varData_307) {
          param_1.ins_h = varData_334(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_307 - 1]);
          varData_370 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        if (varData_370 !== 0 && param_1.strstart - varData_370 <= param_1.w_size - varData_309) {
          param_1.match_length = varData_343(param_1, varData_370);
        }
        if (param_1.match_length >= varData_307) {
          varData_371 = _0x101b2a(param_1, param_1.strstart - param_1.match_start, param_1.match_length - varData_307);
          param_1.lookahead -= param_1.match_length;
          if (param_1.match_length <= param_1.max_lazy_match && param_1.lookahead >= varData_307) {
            param_1.match_length--;
            do {
              param_1.strstart++;
              param_1.ins_h = varData_334(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_307 - 1]);
              varData_370 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            } while (--param_1.match_length !== 0);
            param_1.strstart++;
          } else {
            param_1.strstart += param_1.match_length;
            param_1.match_length = 0;
            param_1.ins_h = param_1.window[param_1.strstart];
            param_1.ins_h = varData_334(param_1, param_1.ins_h, param_1.window[param_1.strstart + 1]);
          }
        } else {
          varData_371 = _0x101b2a(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_371) {
          varData_338(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_319;
          }
        }
      }
      param_1.insert = param_1.strstart < varData_307 - 1 ? param_1.strstart : varData_307 - 1;
      if (param_2 === _0x26b55f) {
        varData_338(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_321;
        }
        return varData_322;
      }
      if (param_1.sym_next) {
        varData_338(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_319;
        }
      }
      return varData_320;
    };
    const varData_372 = (param_1, param_2) => {
      let varData_373;
      let varData_374;
      let varData_375;
      while (true) {
        if (param_1.lookahead < varData_309) {
          varData_357(param_1);
          if (param_1.lookahead < varData_309 && param_2 === _0x1d5b09) {
            return varData_319;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_373 = 0;
        if (param_1.lookahead >= varData_307) {
          param_1.ins_h = varData_334(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_307 - 1]);
          varData_373 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        param_1.prev_length = param_1.match_length;
        param_1.prev_match = param_1.match_start;
        param_1.match_length = varData_307 - 1;
        if (varData_373 !== 0 && param_1.prev_length < param_1.max_lazy_match && param_1.strstart - varData_373 <= param_1.w_size - varData_309) {
          param_1.match_length = varData_343(param_1, varData_373);
          if (param_1.match_length <= 5 && (param_1.strategy === _0xbcbad6 || param_1.match_length === varData_307 && param_1.strstart - param_1.match_start > 4096)) {
            param_1.match_length = varData_307 - 1;
          }
        }
        if (param_1.prev_length >= varData_307 && param_1.match_length <= param_1.prev_length) {
          varData_375 = param_1.strstart + param_1.lookahead - varData_307;
          varData_374 = _0x101b2a(param_1, param_1.strstart - 1 - param_1.prev_match, param_1.prev_length - varData_307);
          param_1.lookahead -= param_1.prev_length - 1;
          param_1.prev_length -= 2;
          do {
            if (++param_1.strstart <= varData_375) {
              param_1.ins_h = varData_334(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_307 - 1]);
              varData_373 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            }
          } while (--param_1.prev_length !== 0);
          param_1.match_available = 0;
          param_1.match_length = varData_307 - 1;
          param_1.strstart++;
          if (varData_374) {
            varData_338(param_1, false);
            if (param_1.strm.avail_out === 0) {
              return varData_319;
            }
          }
        } else if (param_1.match_available) {
          varData_374 = _0x101b2a(param_1, 0, param_1.window[param_1.strstart - 1]);
          if (varData_374) {
            varData_338(param_1, false);
          }
          param_1.strstart++;
          param_1.lookahead--;
          if (param_1.strm.avail_out === 0) {
            return varData_319;
          }
        } else {
          param_1.match_available = 1;
          param_1.strstart++;
          param_1.lookahead--;
        }
      }
      if (param_1.match_available) {
        varData_374 = _0x101b2a(param_1, 0, param_1.window[param_1.strstart - 1]);
        param_1.match_available = 0;
      }
      param_1.insert = param_1.strstart < varData_307 - 1 ? param_1.strstart : varData_307 - 1;
      if (param_2 === _0x26b55f) {
        varData_338(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_321;
        }
        return varData_322;
      }
      if (param_1.sym_next) {
        varData_338(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_319;
        }
      }
      return varData_320;
    };
    const varData_376 = (param_1, param_2) => {
      let varData_377;
      let varData_378;
      let varData_379;
      let varData_380;
      const varData_381 = param_1.window;
      while (true) {
        if (param_1.lookahead <= varData_308) {
          varData_357(param_1);
          if (param_1.lookahead <= varData_308 && param_2 === _0x1d5b09) {
            return varData_319;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        param_1.match_length = 0;
        if (param_1.lookahead >= varData_307 && param_1.strstart > 0) {
          varData_379 = param_1.strstart - 1;
          varData_378 = varData_381[varData_379];
          if (varData_378 === varData_381[++varData_379] && varData_378 === varData_381[++varData_379] && varData_378 === varData_381[++varData_379]) {
            varData_380 = param_1.strstart + varData_308;
            do {} while (varData_378 === varData_381[++varData_379] && varData_378 === varData_381[++varData_379] && varData_378 === varData_381[++varData_379] && varData_378 === varData_381[++varData_379] && varData_378 === varData_381[++varData_379] && varData_378 === varData_381[++varData_379] && varData_378 === varData_381[++varData_379] && varData_378 === varData_381[++varData_379] && varData_379 < varData_380);
            param_1.match_length = varData_308 - (varData_380 - varData_379);
            if (param_1.match_length > param_1.lookahead) {
              param_1.match_length = param_1.lookahead;
            }
          }
        }
        if (param_1.match_length >= varData_307) {
          varData_377 = _0x101b2a(param_1, 1, param_1.match_length - varData_307);
          param_1.lookahead -= param_1.match_length;
          param_1.strstart += param_1.match_length;
          param_1.match_length = 0;
        } else {
          varData_377 = _0x101b2a(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_377) {
          varData_338(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_319;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0x26b55f) {
        varData_338(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_321;
        }
        return varData_322;
      }
      if (param_1.sym_next) {
        varData_338(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_319;
        }
      }
      return varData_320;
    };
    const varData_382 = (param_1, param_2) => {
      let varData_383;
      while (true) {
        if (param_1.lookahead === 0) {
          varData_357(param_1);
          if (param_1.lookahead === 0) {
            if (param_2 === _0x1d5b09) {
              return varData_319;
            }
            break;
          }
        }
        param_1.match_length = 0;
        varData_383 = _0x101b2a(param_1, 0, param_1.window[param_1.strstart]);
        param_1.lookahead--;
        param_1.strstart++;
        if (varData_383) {
          varData_338(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_319;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0x26b55f) {
        varData_338(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_321;
        }
        return varData_322;
      }
      if (param_1.sym_next) {
        varData_338(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_319;
        }
      }
      return varData_320;
    };
    function handleAction_48(param_1, param_2, param_3, param_4, param_5) {
      this.good_length = param_1;
      this.max_lazy = param_2;
      this.nice_length = param_3;
      this.max_chain = param_4;
      this.func = param_5;
    }
    const varData_384 = [new handleAction_48(0, 0, 0, 0, varData_362), new handleAction_48(4, 4, 8, 4, varData_369), new handleAction_48(4, 5, 16, 8, varData_369), new handleAction_48(4, 6, 32, 32, varData_369), new handleAction_48(4, 4, 16, 16, varData_372), new handleAction_48(8, 16, 32, 32, varData_372), new handleAction_48(8, 16, 128, 128, varData_372), new handleAction_48(8, 32, 128, 256, varData_372), new handleAction_48(32, 128, 258, 1024, varData_372), new handleAction_48(32, 258, 258, 4096, varData_372)];
    const varData_385 = param_1 => {
      param_1.window_size = param_1.w_size * 2;
      varData_326(param_1.head);
      param_1.max_lazy_match = varData_384[param_1.level].max_lazy;
      param_1.good_match = varData_384[param_1.level].good_length;
      param_1.nice_match = varData_384[param_1.level].nice_length;
      param_1.max_chain_length = varData_384[param_1.level].max_chain;
      param_1.strstart = 0;
      param_1.block_start = 0;
      param_1.lookahead = 0;
      param_1.insert = 0;
      param_1.match_length = param_1.prev_length = varData_307 - 1;
      param_1.match_available = 0;
      param_1.ins_h = 0;
    };
    function handleAction_49() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = _0x2cd9d5;
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
      this.dyn_ltree = new Uint16Array(varData_305 * 2);
      this.dyn_dtree = new Uint16Array((varData_303 * 2 + 1) * 2);
      this.bl_tree = new Uint16Array((varData_304 * 2 + 1) * 2);
      varData_326(this.dyn_ltree);
      varData_326(this.dyn_dtree);
      varData_326(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(varData_306 + 1);
      this.heap = new Uint16Array(varData_302 * 2 + 1);
      varData_326(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(varData_302 * 2 + 1);
      varData_326(this.depth);
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
    const varData_386 = param_1 => {
      if (!param_1) {
        return 1;
      }
      const varData_387 = param_1.state;
      if (!varData_387 || varData_387.strm !== param_1 || varData_387.status !== varData_311 && varData_387.status !== varData_312 && varData_387.status !== varData_313 && varData_387.status !== varData_314 && varData_387.status !== varData_315 && varData_387.status !== varData_316 && varData_387.status !== varData_317 && varData_387.status !== varData_318) {
        return 1;
      }
      return 0;
    };
    const varData_388 = param_1 => {
      if (varData_386(param_1)) {
        return varData_324(param_1, _0x3185ba);
      }
      param_1.total_in = param_1.total_out = 0;
      param_1.data_type = _0x4c2f97;
      const varData_389 = param_1.state;
      varData_389.pending = 0;
      varData_389.pending_out = 0;
      if (varData_389.wrap < 0) {
        varData_389.wrap = -varData_389.wrap;
      }
      varData_389.status = varData_389.wrap === 2 ? varData_312 : varData_389.wrap ? varData_311 : varData_317;
      param_1.adler = varData_389.wrap === 2 ? 0 : 1;
      varData_389.last_flush = -2;
      _0x48e9ff(varData_389);
      return _0x126a72;
    };
    const varData_390 = param_1 => {
      const varData_391 = varData_388(param_1);
      if (varData_391 === _0x126a72) {
        varData_385(param_1.state);
      }
      return varData_391;
    };
    const varData_392 = (param_1, param_2) => {
      if (varData_386(param_1) || param_1.state.wrap !== 2) {
        return _0x3185ba;
      }
      param_1.state.gzhead = param_2;
      return _0x126a72;
    };
    const varData_393 = (param_1, param_2, param_3, param_4, param_5, param_6) => {
      if (!param_1) {
        return _0x3185ba;
      }
      let varData_394 = 1;
      if (param_2 === _0x1b937f) {
        param_2 = 6;
      }
      if (param_4 < 0) {
        varData_394 = 0;
        param_4 = -param_4;
      } else if (param_4 > 15) {
        varData_394 = 2;
        param_4 -= 16;
      }
      if (param_5 < 1 || param_5 > varData_297 || param_3 !== _0x2cd9d5 || param_4 < 8 || param_4 > 15 || param_2 < 0 || param_2 > 9 || param_6 < 0 || param_6 > _0x51c5df || param_4 === 8 && varData_394 !== 1) {
        return varData_324(param_1, _0x3185ba);
      }
      if (param_4 === 8) {
        param_4 = 9;
      }
      const varData_395 = new handleAction_49();
      param_1.state = varData_395;
      varData_395.strm = param_1;
      varData_395.status = varData_311;
      varData_395.wrap = varData_394;
      varData_395.gzhead = null;
      varData_395.w_bits = param_4;
      varData_395.w_size = 1 << varData_395.w_bits;
      varData_395.w_mask = varData_395.w_size - 1;
      varData_395.hash_bits = param_5 + 7;
      varData_395.hash_size = 1 << varData_395.hash_bits;
      varData_395.hash_mask = varData_395.hash_size - 1;
      varData_395.hash_shift = ~~((varData_395.hash_bits + varData_307 - 1) / varData_307);
      varData_395.window = new Uint8Array(varData_395.w_size * 2);
      varData_395.head = new Uint16Array(varData_395.hash_size);
      varData_395.prev = new Uint16Array(varData_395.w_size);
      varData_395.lit_bufsize = 1 << param_5 + 6;
      varData_395.pending_buf_size = varData_395.lit_bufsize * 4;
      varData_395.pending_buf = new Uint8Array(varData_395.pending_buf_size);
      varData_395.sym_buf = varData_395.lit_bufsize;
      varData_395.sym_end = (varData_395.lit_bufsize - 1) * 3;
      varData_395.level = param_2;
      varData_395.strategy = param_6;
      varData_395.method = param_3;
      return varData_390(param_1);
    };
    const varData_396 = (param_1, param_2) => {
      return varData_393(param_1, param_2, _0x2cd9d5, varData_298, varData_299, _0x3832b3);
    };
    const varData_397 = (param_1, param_2) => {
      if (varData_386(param_1) || param_2 > _0x1b51db || param_2 < 0) {
        if (param_1) {
          return varData_324(param_1, _0x3185ba);
        } else {
          return _0x3185ba;
        }
      }
      const varData_398 = param_1.state;
      if (!param_1.output || param_1.avail_in !== 0 && !param_1.input || varData_398.status === varData_318 && param_2 !== _0x26b55f) {
        return varData_324(param_1, param_1.avail_out === 0 ? _0x2f16b6 : _0x3185ba);
      }
      const varData_399 = varData_398.last_flush;
      varData_398.last_flush = param_2;
      if (varData_398.pending !== 0) {
        varData_335(param_1);
        if (param_1.avail_out === 0) {
          varData_398.last_flush = -1;
          return _0x126a72;
        }
      } else if (param_1.avail_in === 0 && varData_325(param_2) <= varData_325(varData_399) && param_2 !== _0x26b55f) {
        return varData_324(param_1, _0x2f16b6);
      }
      if (varData_398.status === varData_318 && param_1.avail_in !== 0) {
        return varData_324(param_1, _0x2f16b6);
      }
      if (varData_398.status === varData_311 && varData_398.wrap === 0) {
        varData_398.status = varData_317;
      }
      if (varData_398.status === varData_311) {
        let varData_400 = _0x2cd9d5 + (varData_398.w_bits - 8 << 4) << 8;
        let varData_401 = -1;
        if (varData_398.strategy >= _0x566f8 || varData_398.level < 2) {
          varData_401 = 0;
        } else if (varData_398.level < 6) {
          varData_401 = 1;
        } else if (varData_398.level === 6) {
          varData_401 = 2;
        } else {
          varData_401 = 3;
        }
        varData_400 |= varData_401 << 6;
        if (varData_398.strstart !== 0) {
          varData_400 |= varData_310;
        }
        varData_400 += 31 - varData_400 % 31;
        varData_340(varData_398, varData_400);
        if (varData_398.strstart !== 0) {
          varData_340(varData_398, param_1.adler >>> 16);
          varData_340(varData_398, param_1.adler & 65535);
        }
        param_1.adler = 1;
        varData_398.status = varData_317;
        varData_335(param_1);
        if (varData_398.pending !== 0) {
          varData_398.last_flush = -1;
          return _0x126a72;
        }
      }
      if (varData_398.status === varData_312) {
        param_1.adler = 0;
        varData_339(varData_398, 31);
        varData_339(varData_398, 139);
        varData_339(varData_398, 8);
        if (!varData_398.gzhead) {
          varData_339(varData_398, 0);
          varData_339(varData_398, 0);
          varData_339(varData_398, 0);
          varData_339(varData_398, 0);
          varData_339(varData_398, 0);
          varData_339(varData_398, varData_398.level === 9 ? 2 : varData_398.strategy >= _0x566f8 || varData_398.level < 2 ? 4 : 0);
          varData_339(varData_398, varData_323);
          varData_398.status = varData_317;
          varData_335(param_1);
          if (varData_398.pending !== 0) {
            varData_398.last_flush = -1;
            return _0x126a72;
          }
        } else {
          varData_339(varData_398, (varData_398.gzhead.text ? 1 : 0) + (varData_398.gzhead.hcrc ? 2 : 0) + (!varData_398.gzhead.extra ? 0 : 4) + (!varData_398.gzhead.name ? 0 : 8) + (!varData_398.gzhead.comment ? 0 : 16));
          varData_339(varData_398, varData_398.gzhead.time & 255);
          varData_339(varData_398, varData_398.gzhead.time >> 8 & 255);
          varData_339(varData_398, varData_398.gzhead.time >> 16 & 255);
          varData_339(varData_398, varData_398.gzhead.time >> 24 & 255);
          varData_339(varData_398, varData_398.level === 9 ? 2 : varData_398.strategy >= _0x566f8 || varData_398.level < 2 ? 4 : 0);
          varData_339(varData_398, varData_398.gzhead.os & 255);
          if (varData_398.gzhead.extra && varData_398.gzhead.extra.length) {
            varData_339(varData_398, varData_398.gzhead.extra.length & 255);
            varData_339(varData_398, varData_398.gzhead.extra.length >> 8 & 255);
          }
          if (varData_398.gzhead.hcrc) {
            param_1.adler = varData_293(param_1.adler, varData_398.pending_buf, varData_398.pending, 0);
          }
          varData_398.gzindex = 0;
          varData_398.status = varData_313;
        }
      }
      if (varData_398.status === varData_313) {
        if (varData_398.gzhead.extra) {
          let varData_402 = varData_398.pending;
          let varData_403 = (varData_398.gzhead.extra.length & 65535) - varData_398.gzindex;
          while (varData_398.pending + varData_403 > varData_398.pending_buf_size) {
            let varData_404 = varData_398.pending_buf_size - varData_398.pending;
            varData_398.pending_buf.set(varData_398.gzhead.extra.subarray(varData_398.gzindex, varData_398.gzindex + varData_404), varData_398.pending);
            varData_398.pending = varData_398.pending_buf_size;
            if (varData_398.gzhead.hcrc && varData_398.pending > varData_402) {
              param_1.adler = varData_293(param_1.adler, varData_398.pending_buf, varData_398.pending - varData_402, varData_402);
            }
            varData_398.gzindex += varData_404;
            varData_335(param_1);
            if (varData_398.pending !== 0) {
              varData_398.last_flush = -1;
              return _0x126a72;
            }
            varData_402 = 0;
            varData_403 -= varData_404;
          }
          let varData_405 = new Uint8Array(varData_398.gzhead.extra);
          varData_398.pending_buf.set(varData_405.subarray(varData_398.gzindex, varData_398.gzindex + varData_403), varData_398.pending);
          varData_398.pending += varData_403;
          if (varData_398.gzhead.hcrc && varData_398.pending > varData_402) {
            param_1.adler = varData_293(param_1.adler, varData_398.pending_buf, varData_398.pending - varData_402, varData_402);
          }
          varData_398.gzindex = 0;
        }
        varData_398.status = varData_314;
      }
      if (varData_398.status === varData_314) {
        if (varData_398.gzhead.name) {
          let varData_406 = varData_398.pending;
          let varData_407;
          do {
            if (varData_398.pending === varData_398.pending_buf_size) {
              if (varData_398.gzhead.hcrc && varData_398.pending > varData_406) {
                param_1.adler = varData_293(param_1.adler, varData_398.pending_buf, varData_398.pending - varData_406, varData_406);
              }
              varData_335(param_1);
              if (varData_398.pending !== 0) {
                varData_398.last_flush = -1;
                return _0x126a72;
              }
              varData_406 = 0;
            }
            if (varData_398.gzindex < varData_398.gzhead.name.length) {
              varData_407 = varData_398.gzhead.name.charCodeAt(varData_398.gzindex++) & 255;
            } else {
              varData_407 = 0;
            }
            varData_339(varData_398, varData_407);
          } while (varData_407 !== 0);
          if (varData_398.gzhead.hcrc && varData_398.pending > varData_406) {
            param_1.adler = varData_293(param_1.adler, varData_398.pending_buf, varData_398.pending - varData_406, varData_406);
          }
          varData_398.gzindex = 0;
        }
        varData_398.status = varData_315;
      }
      if (varData_398.status === varData_315) {
        if (varData_398.gzhead.comment) {
          let varData_408 = varData_398.pending;
          let varData_409;
          do {
            if (varData_398.pending === varData_398.pending_buf_size) {
              if (varData_398.gzhead.hcrc && varData_398.pending > varData_408) {
                param_1.adler = varData_293(param_1.adler, varData_398.pending_buf, varData_398.pending - varData_408, varData_408);
              }
              varData_335(param_1);
              if (varData_398.pending !== 0) {
                varData_398.last_flush = -1;
                return _0x126a72;
              }
              varData_408 = 0;
            }
            if (varData_398.gzindex < varData_398.gzhead.comment.length) {
              varData_409 = varData_398.gzhead.comment.charCodeAt(varData_398.gzindex++) & 255;
            } else {
              varData_409 = 0;
            }
            varData_339(varData_398, varData_409);
          } while (varData_409 !== 0);
          if (varData_398.gzhead.hcrc && varData_398.pending > varData_408) {
            param_1.adler = varData_293(param_1.adler, varData_398.pending_buf, varData_398.pending - varData_408, varData_408);
          }
        }
        varData_398.status = varData_316;
      }
      if (varData_398.status === varData_316) {
        if (varData_398.gzhead.hcrc) {
          if (varData_398.pending + 2 > varData_398.pending_buf_size) {
            varData_335(param_1);
            if (varData_398.pending !== 0) {
              varData_398.last_flush = -1;
              return _0x126a72;
            }
          }
          varData_339(varData_398, param_1.adler & 255);
          varData_339(varData_398, param_1.adler >> 8 & 255);
          param_1.adler = 0;
        }
        varData_398.status = varData_317;
        varData_335(param_1);
        if (varData_398.pending !== 0) {
          varData_398.last_flush = -1;
          return _0x126a72;
        }
      }
      if (param_1.avail_in !== 0 || varData_398.lookahead !== 0 || param_2 !== _0x1d5b09 && varData_398.status !== varData_318) {
        let varData_410 = varData_398.level === 0 ? varData_362(varData_398, param_2) : varData_398.strategy === _0x566f8 ? varData_382(varData_398, param_2) : varData_398.strategy === _0x470764 ? varData_376(varData_398, param_2) : varData_384[varData_398.level].func(varData_398, param_2);
        if (varData_410 === varData_321 || varData_410 === varData_322) {
          varData_398.status = varData_318;
        }
        if (varData_410 === varData_319 || varData_410 === varData_321) {
          if (param_1.avail_out === 0) {
            varData_398.last_flush = -1;
          }
          return _0x126a72;
        }
        if (varData_410 === varData_320) {
          if (param_2 === _0x54fea4) {
            _0xf28d95(varData_398);
          } else if (param_2 !== _0x1b51db) {
            _0x25815d(varData_398, 0, 0, false);
            if (param_2 === _0x53ef57) {
              varData_326(varData_398.head);
              if (varData_398.lookahead === 0) {
                varData_398.strstart = 0;
                varData_398.block_start = 0;
                varData_398.insert = 0;
              }
            }
          }
          varData_335(param_1);
          if (param_1.avail_out === 0) {
            varData_398.last_flush = -1;
            return _0x126a72;
          }
        }
      }
      if (param_2 !== _0x26b55f) {
        return _0x126a72;
      }
      if (varData_398.wrap <= 0) {
        return _0x24d0ff;
      }
      if (varData_398.wrap === 2) {
        varData_339(varData_398, param_1.adler & 255);
        varData_339(varData_398, param_1.adler >> 8 & 255);
        varData_339(varData_398, param_1.adler >> 16 & 255);
        varData_339(varData_398, param_1.adler >> 24 & 255);
        varData_339(varData_398, param_1.total_in & 255);
        varData_339(varData_398, param_1.total_in >> 8 & 255);
        varData_339(varData_398, param_1.total_in >> 16 & 255);
        varData_339(varData_398, param_1.total_in >> 24 & 255);
      } else {
        varData_340(varData_398, param_1.adler >>> 16);
        varData_340(varData_398, param_1.adler & 65535);
      }
      varData_335(param_1);
      if (varData_398.wrap > 0) {
        varData_398.wrap = -varData_398.wrap;
      }
      if (varData_398.pending !== 0) {
        return _0x126a72;
      } else {
        return _0x24d0ff;
      }
    };
    const varData_411 = param_1 => {
      if (varData_386(param_1)) {
        return _0x3185ba;
      }
      const varData_412 = param_1.state.status;
      param_1.state = null;
      if (varData_412 === varData_317) {
        return varData_324(param_1, _0xdc4e33);
      } else {
        return _0x126a72;
      }
    };
    const varData_413 = (param_1, param_2) => {
      let varData_414 = param_2.length;
      if (varData_386(param_1)) {
        return _0x3185ba;
      }
      const varData_415 = param_1.state;
      const varData_416 = varData_415.wrap;
      if (varData_416 === 2 || varData_416 === 1 && varData_415.status !== varData_311 || varData_415.lookahead) {
        return _0x3185ba;
      }
      if (varData_416 === 1) {
        param_1.adler = varData_285(param_1.adler, param_2, varData_414, 0);
      }
      varData_415.wrap = 0;
      if (varData_414 >= varData_415.w_size) {
        if (varData_416 === 0) {
          varData_326(varData_415.head);
          varData_415.strstart = 0;
          varData_415.block_start = 0;
          varData_415.insert = 0;
        }
        let varData_417 = new Uint8Array(varData_415.w_size);
        varData_417.set(param_2.subarray(varData_414 - varData_415.w_size, varData_414), 0);
        param_2 = varData_417;
        varData_414 = varData_415.w_size;
      }
      const varData_418 = param_1.avail_in;
      const varData_419 = param_1.next_in;
      const varData_420 = param_1.input;
      param_1.avail_in = varData_414;
      param_1.next_in = 0;
      param_1.input = param_2;
      varData_357(varData_415);
      while (varData_415.lookahead >= varData_307) {
        let varData_421 = varData_415.strstart;
        let varData_422 = varData_415.lookahead - (varData_307 - 1);
        do {
          varData_415.ins_h = varData_334(varData_415, varData_415.ins_h, varData_415.window[varData_421 + varData_307 - 1]);
          varData_415.prev[varData_421 & varData_415.w_mask] = varData_415.head[varData_415.ins_h];
          varData_415.head[varData_415.ins_h] = varData_421;
          varData_421++;
        } while (--varData_422);
        varData_415.strstart = varData_421;
        varData_415.lookahead = varData_307 - 1;
        varData_357(varData_415);
      }
      varData_415.strstart += varData_415.lookahead;
      varData_415.block_start = varData_415.strstart;
      varData_415.insert = varData_415.lookahead;
      varData_415.lookahead = 0;
      varData_415.match_length = varData_415.prev_length = varData_307 - 1;
      varData_415.match_available = 0;
      param_1.next_in = varData_419;
      param_1.input = varData_420;
      param_1.avail_in = varData_418;
      varData_415.wrap = varData_416;
      return _0x126a72;
    };
    var varData_423 = varData_396;
    var varData_424 = varData_393;
    var varData_425 = varData_390;
    var varData_426 = varData_388;
    var varData_427 = varData_392;
    var varData_428 = varData_397;
    var varData_429 = varData_411;
    var varData_430 = varData_413;
    var varData_431 = "pako deflate (from Nodeca project)";
    var varData_432 = {
      deflateInit: varData_423,
      deflateInit2: varData_424,
      deflateReset: varData_425,
      deflateResetKeep: varData_426,
      deflateSetHeader: varData_427,
      deflate: varData_428,
      deflateEnd: varData_429,
      deflateSetDictionary: varData_430,
      deflateInfo: varData_431
    };
    var varData_433 = varData_432;
    const varData_434 = (param_1, param_2) => {
      return Object.prototype.hasOwnProperty.call(param_1, param_2);
    };
    function handleAction_50(param_1) {
      const varData_435 = Array.prototype.slice.call(arguments, 1);
      while (varData_435.length) {
        const varData_436 = varData_435.shift();
        if (!varData_436) {
          continue;
        }
        if (typeof varData_436 !== "object") {
          throw new TypeError(varData_436 + "must be non-object");
        }
        for (const varData_437 in varData_436) {
          if (varData_434(varData_436, varData_437)) {
            param_1[varData_437] = varData_436[varData_437];
          }
        }
      }
      return param_1;
    }
    var varData_438 = param_1 => {
      let varData_439 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length; loopIdx < loopIdx_1; loopIdx++) {
        varData_439 += param_1[loopIdx].length;
      }
      const varData_440 = new Uint8Array(varData_439);
      for (let loopIdx = 0, loopIdx_1 = 0, loopIdx_2 = param_1.length; loopIdx < loopIdx_2; loopIdx++) {
        let varData_441 = param_1[loopIdx];
        varData_440.set(varData_441, loopIdx_1);
        loopIdx_1 += varData_441.length;
      }
      return varData_440;
    };
    var varData_442 = {
      assign: handleAction_50,
      flattenChunks: varData_438
    };
    var varData_443 = varData_442;
    let isEnabled = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (err) {
      isEnabled = false;
    }
    const varData_444 = new Uint8Array(256);
    for (let loopIdx = 0; loopIdx < 256; loopIdx++) {
      varData_444[loopIdx] = loopIdx >= 252 ? 6 : loopIdx >= 248 ? 5 : loopIdx >= 240 ? 4 : loopIdx >= 224 ? 3 : loopIdx >= 192 ? 2 : 1;
    }
    varData_444[254] = varData_444[254] = 1;
    var varData_445 = param_1 => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(param_1);
      }
      let varData_446;
      let varData_447;
      let varData_448;
      let varData_449;
      let varData_450;
      let varData_451 = param_1.length;
      let varData_452 = 0;
      for (varData_449 = 0; varData_449 < varData_451; varData_449++) {
        varData_447 = param_1.charCodeAt(varData_449);
        if ((varData_447 & 64512) === 55296 && varData_449 + 1 < varData_451) {
          varData_448 = param_1.charCodeAt(varData_449 + 1);
          if ((varData_448 & 64512) === 56320) {
            varData_447 = 65536 + (varData_447 - 55296 << 10) + (varData_448 - 56320);
            varData_449++;
          }
        }
        varData_452 += varData_447 < 128 ? 1 : varData_447 < 2048 ? 2 : varData_447 < 65536 ? 3 : 4;
      }
      varData_446 = new Uint8Array(varData_452);
      varData_450 = 0;
      varData_449 = 0;
      for (; varData_450 < varData_452; varData_449++) {
        varData_447 = param_1.charCodeAt(varData_449);
        if ((varData_447 & 64512) === 55296 && varData_449 + 1 < varData_451) {
          varData_448 = param_1.charCodeAt(varData_449 + 1);
          if ((varData_448 & 64512) === 56320) {
            varData_447 = 65536 + (varData_447 - 55296 << 10) + (varData_448 - 56320);
            varData_449++;
          }
        }
        if (varData_447 < 128) {
          varData_446[varData_450++] = varData_447;
        } else if (varData_447 < 2048) {
          varData_446[varData_450++] = varData_447 >>> 6 | 192;
          varData_446[varData_450++] = varData_447 & 63 | 128;
        } else if (varData_447 < 65536) {
          varData_446[varData_450++] = varData_447 >>> 12 | 224;
          varData_446[varData_450++] = varData_447 >>> 6 & 63 | 128;
          varData_446[varData_450++] = varData_447 & 63 | 128;
        } else {
          varData_446[varData_450++] = varData_447 >>> 18 | 240;
          varData_446[varData_450++] = varData_447 >>> 12 & 63 | 128;
          varData_446[varData_450++] = varData_447 >>> 6 & 63 | 128;
          varData_446[varData_450++] = varData_447 & 63 | 128;
        }
      }
      return varData_446;
    };
    const varData_453 = (param_1, param_2) => {
      if (param_2 < 65534) {
        if (param_1.subarray && isEnabled) {
          return String.fromCharCode.apply(null, param_1.length === param_2 ? param_1 : param_1.subarray(0, param_2));
        }
      }
      let varData_454 = "";
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_454 += String.fromCharCode(param_1[loopIdx]);
      }
      return varData_454;
    };
    var varData_455 = (param_1, param_2) => {
      const varData_456 = param_2 || param_1.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(param_1.subarray(0, param_2));
      }
      let varData_457;
      let varData_458;
      const varData_459 = new Array(varData_456 * 2);
      varData_458 = 0;
      varData_457 = 0;
      while (varData_457 < varData_456) {
        let varData_460 = param_1[varData_457++];
        if (varData_460 < 128) {
          varData_459[varData_458++] = varData_460;
          continue;
        }
        let varData_461 = varData_444[varData_460];
        if (varData_461 > 4) {
          varData_459[varData_458++] = 65533;
          varData_457 += varData_461 - 1;
          continue;
        }
        varData_460 &= varData_461 === 2 ? 31 : varData_461 === 3 ? 15 : 7;
        while (varData_461 > 1 && varData_457 < varData_456) {
          varData_460 = varData_460 << 6 | param_1[varData_457++] & 63;
          varData_461--;
        }
        if (varData_461 > 1) {
          varData_459[varData_458++] = 65533;
          continue;
        }
        if (varData_460 < 65536) {
          varData_459[varData_458++] = varData_460;
        } else {
          varData_460 -= 65536;
          varData_459[varData_458++] = varData_460 >> 10 & 1023 | 55296;
          varData_459[varData_458++] = varData_460 & 1023 | 56320;
        }
      }
      return varData_453(varData_459, varData_458);
    };
    var varData_462 = (param_1, param_2) => {
      param_2 = param_2 || param_1.length;
      if (param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      let varData_463 = param_2 - 1;
      while (varData_463 >= 0 && (param_1[varData_463] & 192) === 128) {
        varData_463--;
      }
      if (varData_463 < 0) {
        return param_2;
      }
      if (varData_463 === 0) {
        return param_2;
      }
      if (varData_463 + varData_444[param_1[varData_463]] > param_2) {
        return varData_463;
      } else {
        return param_2;
      }
    };
    var varData_464 = {
      string2buf: varData_445,
      buf2string: varData_455,
      utf8border: varData_462
    };
    var varData_465 = varData_464;
    function handleAction_51() {
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
    var varData_466 = handleAction_51;
    const varData_467 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x4576b8,
      Z_SYNC_FLUSH: _0x591d70,
      Z_FULL_FLUSH: _0x5936b3,
      Z_FINISH: _0x33b10d,
      Z_OK: _0x17b667,
      Z_STREAM_END: _0x44a072,
      Z_DEFAULT_COMPRESSION: _0x3a450c,
      Z_DEFAULT_STRATEGY: _0x179105,
      Z_DEFLATED: _0xa419dd
    } = varData_296;
    function handleAction_52(param_1) {
      var varData_468 = {
        level: _0x3a450c,
        method: _0xa419dd,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: _0x179105
      };
      this.options = varData_443.assign(varData_468, param_1 || {});
      let varData_469 = this.options;
      if (varData_469.raw && varData_469.windowBits > 0) {
        varData_469.windowBits = -varData_469.windowBits;
      } else if (varData_469.gzip && varData_469.windowBits > 0 && varData_469.windowBits < 16) {
        varData_469.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_466();
      this.strm.avail_out = 0;
      let varData_470 = varData_433.deflateInit2(this.strm, varData_469.level, varData_469.method, varData_469.windowBits, varData_469.memLevel, varData_469.strategy);
      if (varData_470 !== _0x17b667) {
        throw new Error(varData_294[varData_470]);
      }
      if (varData_469.header) {
        varData_433.deflateSetHeader(this.strm, varData_469.header);
      }
      if (varData_469.dictionary) {
        let varData_471;
        if (typeof varData_469.dictionary === "string") {
          varData_471 = varData_465.string2buf(varData_469.dictionary);
        } else if (varData_467.call(varData_469.dictionary) === "[object ArrayBuffer]") {
          varData_471 = new Uint8Array(varData_469.dictionary);
        } else {
          varData_471 = varData_469.dictionary;
        }
        varData_470 = varData_433.deflateSetDictionary(this.strm, varData_471);
        if (varData_470 !== _0x17b667) {
          throw new Error(varData_294[varData_470]);
        }
        this._dict_set = true;
      }
    }
    handleAction_52.prototype.push = function (param_1, param_2) {
      const varData_472 = this.strm;
      const varData_473 = this.options.chunkSize;
      let varData_474;
      let varData_475;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_475 = param_2;
      } else {
        varData_475 = param_2 === true ? _0x33b10d : _0x4576b8;
      }
      if (typeof param_1 === "string") {
        varData_472.input = varData_465.string2buf(param_1);
      } else if (varData_467.call(param_1) === "[object ArrayBuffer]") {
        varData_472.input = new Uint8Array(param_1);
      } else {
        varData_472.input = param_1;
      }
      varData_472.next_in = 0;
      varData_472.avail_in = varData_472.input.length;
      while (true) {
        if (varData_472.avail_out === 0) {
          varData_472.output = new Uint8Array(varData_473);
          varData_472.next_out = 0;
          varData_472.avail_out = varData_473;
        }
        if ((varData_475 === _0x591d70 || varData_475 === _0x5936b3) && varData_472.avail_out <= 6) {
          this.onData(varData_472.output.subarray(0, varData_472.next_out));
          varData_472.avail_out = 0;
          continue;
        }
        varData_474 = varData_433.deflate(varData_472, varData_475);
        if (varData_474 === _0x44a072) {
          if (varData_472.next_out > 0) {
            this.onData(varData_472.output.subarray(0, varData_472.next_out));
          }
          varData_474 = varData_433.deflateEnd(this.strm);
          this.onEnd(varData_474);
          this.ended = true;
          return varData_474 === _0x17b667;
        }
        if (varData_472.avail_out === 0) {
          this.onData(varData_472.output);
          continue;
        }
        if (varData_475 > 0 && varData_472.next_out > 0) {
          this.onData(varData_472.output.subarray(0, varData_472.next_out));
          varData_472.avail_out = 0;
          continue;
        }
        if (varData_472.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_52.prototype.onData = function (param_1) {
      this.chunks.push(param_1);
    };
    handleAction_52.prototype.onEnd = function (param_1) {
      if (param_1 === _0x17b667) {
        this.result = varData_443.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_53(param_1, param_2) {
      const varData_476 = new handleAction_52(param_2);
      varData_476.push(param_1, true);
      if (varData_476.err) {
        throw varData_476.msg || varData_294[varData_476.err];
      }
      return varData_476.result;
    }
    function handleAction_54(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.raw = true;
      return handleAction_53(param_1, param_2);
    }
    function handleAction_55(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.gzip = true;
      return handleAction_53(param_1, param_2);
    }
    var varData_477 = handleAction_52;
    var varData_478 = handleAction_53;
    var varData_479 = handleAction_54;
    var varData_480 = handleAction_55;
    var varData_481 = varData_296;
    var varData_482 = {
      Deflate: varData_477,
      deflate: varData_478,
      deflateRaw: varData_479,
      gzip: varData_480,
      constants: varData_481
    };
    var varData_483 = varData_482;
    const varData_484 = 16209;
    const varData_485 = 16191;
    var varData_486 = function _0x48382c(param_1, param_2) {
      let varData_487;
      let varData_488;
      let varData_489;
      let varData_490;
      let varData_491;
      let varData_492;
      let varData_493;
      let varData_494;
      let varData_495;
      let varData_496;
      let varData_497;
      let varData_498;
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
      const varData_511 = param_1.state;
      varData_487 = param_1.next_in;
      varData_509 = param_1.input;
      varData_488 = varData_487 + (param_1.avail_in - 5);
      varData_489 = param_1.next_out;
      varData_510 = param_1.output;
      varData_490 = varData_489 - (param_2 - param_1.avail_out);
      varData_491 = varData_489 + (param_1.avail_out - 257);
      varData_492 = varData_511.dmax;
      varData_493 = varData_511.wsize;
      varData_494 = varData_511.whave;
      varData_495 = varData_511.wnext;
      varData_496 = varData_511.window;
      varData_497 = varData_511.hold;
      varData_498 = varData_511.bits;
      varData_499 = varData_511.lencode;
      varData_500 = varData_511.distcode;
      varData_501 = (1 << varData_511.lenbits) - 1;
      varData_502 = (1 << varData_511.distbits) - 1;
      _0x183989: do {
        if (varData_498 < 15) {
          varData_497 += varData_509[varData_487++] << varData_498;
          varData_498 += 8;
          varData_497 += varData_509[varData_487++] << varData_498;
          varData_498 += 8;
        }
        varData_503 = varData_499[varData_497 & varData_501];
        _0x1cc3ce: while (true) {
          varData_504 = varData_503 >>> 24;
          varData_497 >>>= varData_504;
          varData_498 -= varData_504;
          varData_504 = varData_503 >>> 16 & 255;
          if (varData_504 === 0) {
            varData_510[varData_489++] = varData_503 & 65535;
          } else if (varData_504 & 16) {
            varData_505 = varData_503 & 65535;
            varData_504 &= 15;
            if (varData_504) {
              if (varData_498 < varData_504) {
                varData_497 += varData_509[varData_487++] << varData_498;
                varData_498 += 8;
              }
              varData_505 += varData_497 & (1 << varData_504) - 1;
              varData_497 >>>= varData_504;
              varData_498 -= varData_504;
            }
            if (varData_498 < 15) {
              varData_497 += varData_509[varData_487++] << varData_498;
              varData_498 += 8;
              varData_497 += varData_509[varData_487++] << varData_498;
              varData_498 += 8;
            }
            varData_503 = varData_500[varData_497 & varData_502];
            _0x5895c0: while (true) {
              varData_504 = varData_503 >>> 24;
              varData_497 >>>= varData_504;
              varData_498 -= varData_504;
              varData_504 = varData_503 >>> 16 & 255;
              if (varData_504 & 16) {
                varData_506 = varData_503 & 65535;
                varData_504 &= 15;
                if (varData_498 < varData_504) {
                  varData_497 += varData_509[varData_487++] << varData_498;
                  varData_498 += 8;
                  if (varData_498 < varData_504) {
                    varData_497 += varData_509[varData_487++] << varData_498;
                    varData_498 += 8;
                  }
                }
                varData_506 += varData_497 & (1 << varData_504) - 1;
                if (varData_506 > varData_492) {
                  param_1.msg = "invalid distance too far back";
                  varData_511.mode = varData_484;
                  break _0x183989;
                }
                varData_497 >>>= varData_504;
                varData_498 -= varData_504;
                varData_504 = varData_489 - varData_490;
                if (varData_506 > varData_504) {
                  varData_504 = varData_506 - varData_504;
                  if (varData_504 > varData_494) {
                    if (varData_511.sane) {
                      param_1.msg = "invalid distance too far back";
                      varData_511.mode = varData_484;
                      break _0x183989;
                    }
                  }
                  varData_507 = 0;
                  varData_508 = varData_496;
                  if (varData_495 === 0) {
                    varData_507 += varData_493 - varData_504;
                    if (varData_504 < varData_505) {
                      varData_505 -= varData_504;
                      do {
                        varData_510[varData_489++] = varData_496[varData_507++];
                      } while (--varData_504);
                      varData_507 = varData_489 - varData_506;
                      varData_508 = varData_510;
                    }
                  } else if (varData_495 < varData_504) {
                    varData_507 += varData_493 + varData_495 - varData_504;
                    varData_504 -= varData_495;
                    if (varData_504 < varData_505) {
                      varData_505 -= varData_504;
                      do {
                        varData_510[varData_489++] = varData_496[varData_507++];
                      } while (--varData_504);
                      varData_507 = 0;
                      if (varData_495 < varData_505) {
                        varData_504 = varData_495;
                        varData_505 -= varData_504;
                        do {
                          varData_510[varData_489++] = varData_496[varData_507++];
                        } while (--varData_504);
                        varData_507 = varData_489 - varData_506;
                        varData_508 = varData_510;
                      }
                    }
                  } else {
                    varData_507 += varData_495 - varData_504;
                    if (varData_504 < varData_505) {
                      varData_505 -= varData_504;
                      do {
                        varData_510[varData_489++] = varData_496[varData_507++];
                      } while (--varData_504);
                      varData_507 = varData_489 - varData_506;
                      varData_508 = varData_510;
                    }
                  }
                  while (varData_505 > 2) {
                    varData_510[varData_489++] = varData_508[varData_507++];
                    varData_510[varData_489++] = varData_508[varData_507++];
                    varData_510[varData_489++] = varData_508[varData_507++];
                    varData_505 -= 3;
                  }
                  if (varData_505) {
                    varData_510[varData_489++] = varData_508[varData_507++];
                    if (varData_505 > 1) {
                      varData_510[varData_489++] = varData_508[varData_507++];
                    }
                  }
                } else {
                  varData_507 = varData_489 - varData_506;
                  do {
                    varData_510[varData_489++] = varData_510[varData_507++];
                    varData_510[varData_489++] = varData_510[varData_507++];
                    varData_510[varData_489++] = varData_510[varData_507++];
                    varData_505 -= 3;
                  } while (varData_505 > 2);
                  if (varData_505) {
                    varData_510[varData_489++] = varData_510[varData_507++];
                    if (varData_505 > 1) {
                      varData_510[varData_489++] = varData_510[varData_507++];
                    }
                  }
                }
              } else if ((varData_504 & 64) === 0) {
                varData_503 = varData_500[(varData_503 & 65535) + (varData_497 & (1 << varData_504) - 1)];
                continue _0x5895c0;
              } else {
                param_1.msg = "invalid distance code";
                varData_511.mode = varData_484;
                break _0x183989;
              }
              break;
            }
          } else if ((varData_504 & 64) === 0) {
            varData_503 = varData_499[(varData_503 & 65535) + (varData_497 & (1 << varData_504) - 1)];
            continue _0x1cc3ce;
          } else if (varData_504 & 32) {
            varData_511.mode = varData_485;
            break _0x183989;
          } else {
            param_1.msg = "invalid literal/length code";
            varData_511.mode = varData_484;
            break _0x183989;
          }
          break;
        }
      } while (varData_487 < varData_488 && varData_489 < varData_491);
      varData_505 = varData_498 >> 3;
      varData_487 -= varData_505;
      varData_498 -= varData_505 << 3;
      varData_497 &= (1 << varData_498) - 1;
      param_1.next_in = varData_487;
      param_1.next_out = varData_489;
      param_1.avail_in = varData_487 < varData_488 ? 5 + (varData_488 - varData_487) : 5 - (varData_487 - varData_488);
      param_1.avail_out = varData_489 < varData_491 ? 257 + (varData_491 - varData_489) : 257 - (varData_489 - varData_491);
      varData_511.hold = varData_497;
      varData_511.bits = varData_498;
      return;
    };
    const varData_512 = 15;
    const varData_513 = 852;
    const varData_514 = 592;
    const varData_515 = 0;
    const varData_516 = 1;
    const varData_517 = 2;
    const varData_518 = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const varData_519 = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const varData_520 = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const varData_521 = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    const varData_522 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
      const varData_523 = param_8.bits;
      let varData_524 = 0;
      let varData_525 = 0;
      let varData_526 = 0;
      let varData_527 = 0;
      let varData_528 = 0;
      let varData_529 = 0;
      let varData_530 = 0;
      let varData_531 = 0;
      let varData_532 = 0;
      let varData_533 = 0;
      let varData_534;
      let varData_535;
      let varData_536;
      let varData_537;
      let varData_538;
      let varData_539 = null;
      let varData_540;
      const varData_541 = new Uint16Array(varData_512 + 1);
      const varData_542 = new Uint16Array(varData_512 + 1);
      let varData_543 = null;
      let varData_544;
      let varData_545;
      let varData_546;
      for (varData_524 = 0; varData_524 <= varData_512; varData_524++) {
        varData_541[varData_524] = 0;
      }
      for (varData_525 = 0; varData_525 < param_4; varData_525++) {
        varData_541[param_2[param_3 + varData_525]]++;
      }
      varData_528 = varData_523;
      for (varData_527 = varData_512; varData_527 >= 1; varData_527--) {
        if (varData_541[varData_527] !== 0) {
          break;
        }
      }
      if (varData_528 > varData_527) {
        varData_528 = varData_527;
      }
      if (varData_527 === 0) {
        param_5[param_6++] = 20971520;
        param_5[param_6++] = 20971520;
        param_8.bits = 1;
        return 0;
      }
      for (varData_526 = 1; varData_526 < varData_527; varData_526++) {
        if (varData_541[varData_526] !== 0) {
          break;
        }
      }
      if (varData_528 < varData_526) {
        varData_528 = varData_526;
      }
      varData_531 = 1;
      for (varData_524 = 1; varData_524 <= varData_512; varData_524++) {
        varData_531 <<= 1;
        varData_531 -= varData_541[varData_524];
        if (varData_531 < 0) {
          return -1;
        }
      }
      if (varData_531 > 0 && (param_1 === varData_515 || varData_527 !== 1)) {
        return -1;
      }
      varData_542[1] = 0;
      for (varData_524 = 1; varData_524 < varData_512; varData_524++) {
        varData_542[varData_524 + 1] = varData_542[varData_524] + varData_541[varData_524];
      }
      for (varData_525 = 0; varData_525 < param_4; varData_525++) {
        if (param_2[param_3 + varData_525] !== 0) {
          param_7[varData_542[param_2[param_3 + varData_525]]++] = varData_525;
        }
      }
      if (param_1 === varData_515) {
        varData_539 = varData_543 = param_7;
        varData_540 = 20;
      } else if (param_1 === varData_516) {
        varData_539 = varData_518;
        varData_543 = varData_519;
        varData_540 = 257;
      } else {
        varData_539 = varData_520;
        varData_543 = varData_521;
        varData_540 = 0;
      }
      varData_533 = 0;
      varData_525 = 0;
      varData_524 = varData_526;
      varData_538 = param_6;
      varData_529 = varData_528;
      varData_530 = 0;
      varData_536 = -1;
      varData_532 = 1 << varData_528;
      varData_537 = varData_532 - 1;
      if (param_1 === varData_516 && varData_532 > varData_513 || param_1 === varData_517 && varData_532 > varData_514) {
        return 1;
      }
      while (true) {
        varData_544 = varData_524 - varData_530;
        if (param_7[varData_525] + 1 < varData_540) {
          varData_545 = 0;
          varData_546 = param_7[varData_525];
        } else if (param_7[varData_525] >= varData_540) {
          varData_545 = varData_543[param_7[varData_525] - varData_540];
          varData_546 = varData_539[param_7[varData_525] - varData_540];
        } else {
          varData_545 = 96;
          varData_546 = 0;
        }
        varData_534 = 1 << varData_524 - varData_530;
        varData_535 = 1 << varData_529;
        varData_526 = varData_535;
        do {
          varData_535 -= varData_534;
          param_5[varData_538 + (varData_533 >> varData_530) + varData_535] = varData_544 << 24 | varData_545 << 16 | varData_546 | 0;
        } while (varData_535 !== 0);
        varData_534 = 1 << varData_524 - 1;
        while (varData_533 & varData_534) {
          varData_534 >>= 1;
        }
        if (varData_534 !== 0) {
          varData_533 &= varData_534 - 1;
          varData_533 += varData_534;
        } else {
          varData_533 = 0;
        }
        varData_525++;
        if (--varData_541[varData_524] === 0) {
          if (varData_524 === varData_527) {
            break;
          }
          varData_524 = param_2[param_3 + param_7[varData_525]];
        }
        if (varData_524 > varData_528 && (varData_533 & varData_537) !== varData_536) {
          if (varData_530 === 0) {
            varData_530 = varData_528;
          }
          varData_538 += varData_526;
          varData_529 = varData_524 - varData_530;
          varData_531 = 1 << varData_529;
          while (varData_529 + varData_530 < varData_527) {
            varData_531 -= varData_541[varData_529 + varData_530];
            if (varData_531 <= 0) {
              break;
            }
            varData_529++;
            varData_531 <<= 1;
          }
          varData_532 += 1 << varData_529;
          if (param_1 === varData_516 && varData_532 > varData_513 || param_1 === varData_517 && varData_532 > varData_514) {
            return 1;
          }
          varData_536 = varData_533 & varData_537;
          param_5[varData_536] = varData_528 << 24 | varData_529 << 16 | varData_538 - param_6 | 0;
        }
      }
      if (varData_533 !== 0) {
        param_5[varData_538 + varData_533] = varData_524 - varData_530 << 24 | 4194304 | 0;
      }
      param_8.bits = varData_528;
      return 0;
    };
    var varData_547 = varData_522;
    const varData_548 = 0;
    const varData_549 = 1;
    const varData_550 = 2;
    const {
      Z_FINISH: _0x20e85d,
      Z_BLOCK: _0x5eb122,
      Z_TREES: _0x57deb6,
      Z_OK: _0x1feeca,
      Z_STREAM_END: _0x2c2bd5,
      Z_NEED_DICT: _0x19cb95,
      Z_STREAM_ERROR: _0x5ecc54,
      Z_DATA_ERROR: _0x5b6354,
      Z_MEM_ERROR: _0x504d08,
      Z_BUF_ERROR: _0x6f5acd,
      Z_DEFLATED: _0x32a740
    } = varData_296;
    const varData_551 = 16180;
    const varData_552 = 16181;
    const varData_553 = 16182;
    const varData_554 = 16183;
    const varData_555 = 16184;
    const varData_556 = 16185;
    const varData_557 = 16186;
    const varData_558 = 16187;
    const varData_559 = 16188;
    const varData_560 = 16189;
    const varData_561 = 16190;
    const varData_562 = 16191;
    const varData_563 = 16192;
    const varData_564 = 16193;
    const varData_565 = 16194;
    const varData_566 = 16195;
    const varData_567 = 16196;
    const varData_568 = 16197;
    const varData_569 = 16198;
    const varData_570 = 16199;
    const varData_571 = 16200;
    const varData_572 = 16201;
    const varData_573 = 16202;
    const varData_574 = 16203;
    const varData_575 = 16204;
    const varData_576 = 16205;
    const varData_577 = 16206;
    const varData_578 = 16207;
    const varData_579 = 16208;
    const varData_580 = 16209;
    const varData_581 = 16210;
    const varData_582 = 16211;
    const varData_583 = 852;
    const varData_584 = 592;
    const varData_585 = 15;
    const varData_586 = varData_585;
    const varData_587 = param_1 => {
      return (param_1 >>> 24 & 255) + (param_1 >>> 8 & 65280) + ((param_1 & 65280) << 8) + ((param_1 & 255) << 24);
    };
    function handleAction_56() {
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
    const varData_588 = param_1 => {
      if (!param_1) {
        return 1;
      }
      const varData_589 = param_1.state;
      if (!varData_589 || varData_589.strm !== param_1 || varData_589.mode < varData_551 || varData_589.mode > varData_582) {
        return 1;
      }
      return 0;
    };
    const varData_590 = param_1 => {
      if (varData_588(param_1)) {
        return _0x5ecc54;
      }
      const varData_591 = param_1.state;
      param_1.total_in = param_1.total_out = varData_591.total = 0;
      param_1.msg = "";
      if (varData_591.wrap) {
        param_1.adler = varData_591.wrap & 1;
      }
      varData_591.mode = varData_551;
      varData_591.last = 0;
      varData_591.havedict = 0;
      varData_591.flags = -1;
      varData_591.dmax = 32768;
      varData_591.head = null;
      varData_591.hold = 0;
      varData_591.bits = 0;
      varData_591.lencode = varData_591.lendyn = new Int32Array(varData_583);
      varData_591.distcode = varData_591.distdyn = new Int32Array(varData_584);
      varData_591.sane = 1;
      varData_591.back = -1;
      return _0x1feeca;
    };
    const varData_592 = param_1 => {
      if (varData_588(param_1)) {
        return _0x5ecc54;
      }
      const varData_593 = param_1.state;
      varData_593.wsize = 0;
      varData_593.whave = 0;
      varData_593.wnext = 0;
      return varData_590(param_1);
    };
    const varData_594 = (param_1, param_2) => {
      let varData_595;
      if (varData_588(param_1)) {
        return _0x5ecc54;
      }
      const varData_596 = param_1.state;
      if (param_2 < 0) {
        varData_595 = 0;
        param_2 = -param_2;
      } else {
        varData_595 = (param_2 >> 4) + 5;
        if (param_2 < 48) {
          param_2 &= 15;
        }
      }
      if (param_2 && (param_2 < 8 || param_2 > 15)) {
        return _0x5ecc54;
      }
      if (varData_596.window !== null && varData_596.wbits !== param_2) {
        varData_596.window = null;
      }
      varData_596.wrap = varData_595;
      varData_596.wbits = param_2;
      return varData_592(param_1);
    };
    const varData_597 = (param_1, param_2) => {
      if (!param_1) {
        return _0x5ecc54;
      }
      const varData_598 = new handleAction_56();
      param_1.state = varData_598;
      varData_598.strm = param_1;
      varData_598.window = null;
      varData_598.mode = varData_551;
      const varData_599 = varData_594(param_1, param_2);
      if (varData_599 !== _0x1feeca) {
        param_1.state = null;
      }
      return varData_599;
    };
    const varData_600 = param_1 => {
      return varData_597(param_1, varData_586);
    };
    let isEnabled_1 = true;
    let varData_601;
    let varData_602;
    const varData_603 = param_1 => {
      if (isEnabled_1) {
        varData_601 = new Int32Array(512);
        varData_602 = new Int32Array(32);
        let varData_604 = 0;
        while (varData_604 < 144) {
          param_1.lens[varData_604++] = 8;
        }
        while (varData_604 < 256) {
          param_1.lens[varData_604++] = 9;
        }
        while (varData_604 < 280) {
          param_1.lens[varData_604++] = 7;
        }
        while (varData_604 < 288) {
          param_1.lens[varData_604++] = 8;
        }
        varData_547(varData_549, param_1.lens, 0, 288, varData_601, 0, param_1.work, {
          bits: 9
        });
        varData_604 = 0;
        while (varData_604 < 32) {
          param_1.lens[varData_604++] = 5;
        }
        varData_547(varData_550, param_1.lens, 0, 32, varData_602, 0, param_1.work, {
          bits: 5
        });
        isEnabled_1 = false;
      }
      param_1.lencode = varData_601;
      param_1.lenbits = 9;
      param_1.distcode = varData_602;
      param_1.distbits = 5;
    };
    const varData_605 = (param_1, param_2, param_3, param_4) => {
      let varData_606;
      const varData_607 = param_1.state;
      if (varData_607.window === null) {
        varData_607.wsize = 1 << varData_607.wbits;
        varData_607.wnext = 0;
        varData_607.whave = 0;
        varData_607.window = new Uint8Array(varData_607.wsize);
      }
      if (param_4 >= varData_607.wsize) {
        varData_607.window.set(param_2.subarray(param_3 - varData_607.wsize, param_3), 0);
        varData_607.wnext = 0;
        varData_607.whave = varData_607.wsize;
      } else {
        varData_606 = varData_607.wsize - varData_607.wnext;
        if (varData_606 > param_4) {
          varData_606 = param_4;
        }
        varData_607.window.set(param_2.subarray(param_3 - param_4, param_3 - param_4 + varData_606), varData_607.wnext);
        param_4 -= varData_606;
        if (param_4) {
          varData_607.window.set(param_2.subarray(param_3 - param_4, param_3), 0);
          varData_607.wnext = param_4;
          varData_607.whave = varData_607.wsize;
        } else {
          varData_607.wnext += varData_606;
          if (varData_607.wnext === varData_607.wsize) {
            varData_607.wnext = 0;
          }
          if (varData_607.whave < varData_607.wsize) {
            varData_607.whave += varData_606;
          }
        }
      }
      return 0;
    };
    const varData_608 = (param_1, param_2) => {
      let varData_609;
      let varData_610;
      let varData_611;
      let varData_612;
      let varData_613;
      let varData_614;
      let varData_615;
      let varData_616;
      let varData_617;
      let varData_618;
      let varData_619;
      let varData_620;
      let varData_621;
      let varData_622;
      let varData_623 = 0;
      let varData_624;
      let varData_625;
      let varData_626;
      let varData_627;
      let varData_628;
      let varData_629;
      let varData_630;
      let varData_631;
      const varData_632 = new Uint8Array(4);
      let varData_633;
      let varData_634;
      const varData_635 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (varData_588(param_1) || !param_1.output || !param_1.input && param_1.avail_in !== 0) {
        return _0x5ecc54;
      }
      varData_609 = param_1.state;
      if (varData_609.mode === varData_562) {
        varData_609.mode = varData_563;
      }
      varData_613 = param_1.next_out;
      varData_611 = param_1.output;
      varData_615 = param_1.avail_out;
      varData_612 = param_1.next_in;
      varData_610 = param_1.input;
      varData_614 = param_1.avail_in;
      varData_616 = varData_609.hold;
      varData_617 = varData_609.bits;
      varData_618 = varData_614;
      varData_619 = varData_615;
      varData_631 = _0x1feeca;
      _0x2350e6: while (true) {
        switch (varData_609.mode) {
          case varData_551:
            if (varData_609.wrap === 0) {
              varData_609.mode = varData_563;
              break;
            }
            while (varData_617 < 16) {
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_614--;
              varData_616 += varData_610[varData_612++] << varData_617;
              varData_617 += 8;
            }
            if (varData_609.wrap & 2 && varData_616 === 35615) {
              if (varData_609.wbits === 0) {
                varData_609.wbits = 15;
              }
              varData_609.check = 0;
              varData_632[0] = varData_616 & 255;
              varData_632[1] = varData_616 >>> 8 & 255;
              varData_609.check = varData_293(varData_609.check, varData_632, 2, 0);
              varData_616 = 0;
              varData_617 = 0;
              varData_609.mode = varData_552;
              break;
            }
            if (varData_609.head) {
              varData_609.head.done = false;
            }
            if (!(varData_609.wrap & 1) || (((varData_616 & 255) << 8) + (varData_616 >> 8)) % 31) {
              param_1.msg = "incorrect header check";
              varData_609.mode = varData_580;
              break;
            }
            if ((varData_616 & 15) !== _0x32a740) {
              param_1.msg = "unknown compression method";
              varData_609.mode = varData_580;
              break;
            }
            varData_616 >>>= 4;
            varData_617 -= 4;
            varData_630 = (varData_616 & 15) + 8;
            if (varData_609.wbits === 0) {
              varData_609.wbits = varData_630;
            }
            if (varData_630 > 15 || varData_630 > varData_609.wbits) {
              param_1.msg = "invalid window size";
              varData_609.mode = varData_580;
              break;
            }
            varData_609.dmax = 1 << varData_609.wbits;
            varData_609.flags = 0;
            param_1.adler = varData_609.check = 1;
            varData_609.mode = varData_616 & 512 ? varData_560 : varData_562;
            varData_616 = 0;
            varData_617 = 0;
            break;
          case varData_552:
            while (varData_617 < 16) {
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_614--;
              varData_616 += varData_610[varData_612++] << varData_617;
              varData_617 += 8;
            }
            varData_609.flags = varData_616;
            if ((varData_609.flags & 255) !== _0x32a740) {
              param_1.msg = "unknown compression method";
              varData_609.mode = varData_580;
              break;
            }
            if (varData_609.flags & 57344) {
              param_1.msg = "unknown header flags set";
              varData_609.mode = varData_580;
              break;
            }
            if (varData_609.head) {
              varData_609.head.text = varData_616 >> 8 & 1;
            }
            if (varData_609.flags & 512 && varData_609.wrap & 4) {
              varData_632[0] = varData_616 & 255;
              varData_632[1] = varData_616 >>> 8 & 255;
              varData_609.check = varData_293(varData_609.check, varData_632, 2, 0);
            }
            varData_616 = 0;
            varData_617 = 0;
            varData_609.mode = varData_553;
          case varData_553:
            while (varData_617 < 32) {
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_614--;
              varData_616 += varData_610[varData_612++] << varData_617;
              varData_617 += 8;
            }
            if (varData_609.head) {
              varData_609.head.time = varData_616;
            }
            if (varData_609.flags & 512 && varData_609.wrap & 4) {
              varData_632[0] = varData_616 & 255;
              varData_632[1] = varData_616 >>> 8 & 255;
              varData_632[2] = varData_616 >>> 16 & 255;
              varData_632[3] = varData_616 >>> 24 & 255;
              varData_609.check = varData_293(varData_609.check, varData_632, 4, 0);
            }
            varData_616 = 0;
            varData_617 = 0;
            varData_609.mode = varData_554;
          case varData_554:
            while (varData_617 < 16) {
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_614--;
              varData_616 += varData_610[varData_612++] << varData_617;
              varData_617 += 8;
            }
            if (varData_609.head) {
              varData_609.head.xflags = varData_616 & 255;
              varData_609.head.os = varData_616 >> 8;
            }
            if (varData_609.flags & 512 && varData_609.wrap & 4) {
              varData_632[0] = varData_616 & 255;
              varData_632[1] = varData_616 >>> 8 & 255;
              varData_609.check = varData_293(varData_609.check, varData_632, 2, 0);
            }
            varData_616 = 0;
            varData_617 = 0;
            varData_609.mode = varData_555;
          case varData_555:
            if (varData_609.flags & 1024) {
              while (varData_617 < 16) {
                if (varData_614 === 0) {
                  break _0x2350e6;
                }
                varData_614--;
                varData_616 += varData_610[varData_612++] << varData_617;
                varData_617 += 8;
              }
              varData_609.length = varData_616;
              if (varData_609.head) {
                varData_609.head.extra_len = varData_616;
              }
              if (varData_609.flags & 512 && varData_609.wrap & 4) {
                varData_632[0] = varData_616 & 255;
                varData_632[1] = varData_616 >>> 8 & 255;
                varData_609.check = varData_293(varData_609.check, varData_632, 2, 0);
              }
              varData_616 = 0;
              varData_617 = 0;
            } else if (varData_609.head) {
              varData_609.head.extra = null;
            }
            varData_609.mode = varData_556;
          case varData_556:
            if (varData_609.flags & 1024) {
              varData_620 = varData_609.length;
              if (varData_620 > varData_614) {
                varData_620 = varData_614;
              }
              if (varData_620) {
                if (varData_609.head) {
                  varData_630 = varData_609.head.extra_len - varData_609.length;
                  if (!varData_609.head.extra) {
                    varData_609.head.extra = new Uint8Array(varData_609.head.extra_len);
                  }
                  varData_609.head.extra.set(varData_610.subarray(varData_612, varData_612 + varData_620), varData_630);
                }
                if (varData_609.flags & 512 && varData_609.wrap & 4) {
                  varData_609.check = varData_293(varData_609.check, varData_610, varData_620, varData_612);
                }
                varData_614 -= varData_620;
                varData_612 += varData_620;
                varData_609.length -= varData_620;
              }
              if (varData_609.length) {
                break _0x2350e6;
              }
            }
            varData_609.length = 0;
            varData_609.mode = varData_557;
          case varData_557:
            if (varData_609.flags & 2048) {
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_620 = 0;
              do {
                varData_630 = varData_610[varData_612 + varData_620++];
                if (varData_609.head && varData_630 && varData_609.length < 65536) {
                  varData_609.head.name += String.fromCharCode(varData_630);
                }
              } while (varData_630 && varData_620 < varData_614);
              if (varData_609.flags & 512 && varData_609.wrap & 4) {
                varData_609.check = varData_293(varData_609.check, varData_610, varData_620, varData_612);
              }
              varData_614 -= varData_620;
              varData_612 += varData_620;
              if (varData_630) {
                break _0x2350e6;
              }
            } else if (varData_609.head) {
              varData_609.head.name = null;
            }
            varData_609.length = 0;
            varData_609.mode = varData_558;
          case varData_558:
            if (varData_609.flags & 4096) {
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_620 = 0;
              do {
                varData_630 = varData_610[varData_612 + varData_620++];
                if (varData_609.head && varData_630 && varData_609.length < 65536) {
                  varData_609.head.comment += String.fromCharCode(varData_630);
                }
              } while (varData_630 && varData_620 < varData_614);
              if (varData_609.flags & 512 && varData_609.wrap & 4) {
                varData_609.check = varData_293(varData_609.check, varData_610, varData_620, varData_612);
              }
              varData_614 -= varData_620;
              varData_612 += varData_620;
              if (varData_630) {
                break _0x2350e6;
              }
            } else if (varData_609.head) {
              varData_609.head.comment = null;
            }
            varData_609.mode = varData_559;
          case varData_559:
            if (varData_609.flags & 512) {
              while (varData_617 < 16) {
                if (varData_614 === 0) {
                  break _0x2350e6;
                }
                varData_614--;
                varData_616 += varData_610[varData_612++] << varData_617;
                varData_617 += 8;
              }
              if (varData_609.wrap & 4 && varData_616 !== (varData_609.check & 65535)) {
                param_1.msg = "header crc mismatch";
                varData_609.mode = varData_580;
                break;
              }
              varData_616 = 0;
              varData_617 = 0;
            }
            if (varData_609.head) {
              varData_609.head.hcrc = varData_609.flags >> 9 & 1;
              varData_609.head.done = true;
            }
            param_1.adler = varData_609.check = 0;
            varData_609.mode = varData_562;
            break;
          case varData_560:
            while (varData_617 < 32) {
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_614--;
              varData_616 += varData_610[varData_612++] << varData_617;
              varData_617 += 8;
            }
            param_1.adler = varData_609.check = varData_587(varData_616);
            varData_616 = 0;
            varData_617 = 0;
            varData_609.mode = varData_561;
          case varData_561:
            if (varData_609.havedict === 0) {
              param_1.next_out = varData_613;
              param_1.avail_out = varData_615;
              param_1.next_in = varData_612;
              param_1.avail_in = varData_614;
              varData_609.hold = varData_616;
              varData_609.bits = varData_617;
              return _0x19cb95;
            }
            param_1.adler = varData_609.check = 1;
            varData_609.mode = varData_562;
          case varData_562:
            if (param_2 === _0x5eb122 || param_2 === _0x57deb6) {
              break _0x2350e6;
            }
          case varData_563:
            if (varData_609.last) {
              varData_616 >>>= varData_617 & 7;
              varData_617 -= varData_617 & 7;
              varData_609.mode = varData_577;
              break;
            }
            while (varData_617 < 3) {
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_614--;
              varData_616 += varData_610[varData_612++] << varData_617;
              varData_617 += 8;
            }
            varData_609.last = varData_616 & 1;
            varData_616 >>>= 1;
            varData_617 -= 1;
            switch (varData_616 & 3) {
              case 0:
                varData_609.mode = varData_564;
                break;
              case 1:
                varData_603(varData_609);
                varData_609.mode = varData_570;
                if (param_2 === _0x57deb6) {
                  varData_616 >>>= 2;
                  varData_617 -= 2;
                  break _0x2350e6;
                }
                break;
              case 2:
                varData_609.mode = varData_567;
                break;
              case 3:
                param_1.msg = "invalid block type";
                varData_609.mode = varData_580;
            }
            varData_616 >>>= 2;
            varData_617 -= 2;
            break;
          case varData_564:
            varData_616 >>>= varData_617 & 7;
            varData_617 -= varData_617 & 7;
            while (varData_617 < 32) {
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_614--;
              varData_616 += varData_610[varData_612++] << varData_617;
              varData_617 += 8;
            }
            if ((varData_616 & 65535) !== (varData_616 >>> 16 ^ 65535)) {
              param_1.msg = "invalid stored block lengths";
              varData_609.mode = varData_580;
              break;
            }
            varData_609.length = varData_616 & 65535;
            varData_616 = 0;
            varData_617 = 0;
            varData_609.mode = varData_565;
            if (param_2 === _0x57deb6) {
              break _0x2350e6;
            }
          case varData_565:
            varData_609.mode = varData_566;
          case varData_566:
            varData_620 = varData_609.length;
            if (varData_620) {
              if (varData_620 > varData_614) {
                varData_620 = varData_614;
              }
              if (varData_620 > varData_615) {
                varData_620 = varData_615;
              }
              if (varData_620 === 0) {
                break _0x2350e6;
              }
              varData_611.set(varData_610.subarray(varData_612, varData_612 + varData_620), varData_613);
              varData_614 -= varData_620;
              varData_612 += varData_620;
              varData_615 -= varData_620;
              varData_613 += varData_620;
              varData_609.length -= varData_620;
              break;
            }
            varData_609.mode = varData_562;
            break;
          case varData_567:
            while (varData_617 < 14) {
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_614--;
              varData_616 += varData_610[varData_612++] << varData_617;
              varData_617 += 8;
            }
            varData_609.nlen = (varData_616 & 31) + 257;
            varData_616 >>>= 5;
            varData_617 -= 5;
            varData_609.ndist = (varData_616 & 31) + 1;
            varData_616 >>>= 5;
            varData_617 -= 5;
            varData_609.ncode = (varData_616 & 15) + 4;
            varData_616 >>>= 4;
            varData_617 -= 4;
            if (varData_609.nlen > 286 || varData_609.ndist > 30) {
              param_1.msg = "too many length or distance symbols";
              varData_609.mode = varData_580;
              break;
            }
            varData_609.have = 0;
            varData_609.mode = varData_568;
          case varData_568:
            while (varData_609.have < varData_609.ncode) {
              while (varData_617 < 3) {
                if (varData_614 === 0) {
                  break _0x2350e6;
                }
                varData_614--;
                varData_616 += varData_610[varData_612++] << varData_617;
                varData_617 += 8;
              }
              varData_609.lens[varData_635[varData_609.have++]] = varData_616 & 7;
              varData_616 >>>= 3;
              varData_617 -= 3;
            }
            while (varData_609.have < 19) {
              varData_609.lens[varData_635[varData_609.have++]] = 0;
            }
            varData_609.lencode = varData_609.lendyn;
            varData_609.lenbits = 7;
            var varData_636 = {
              bits: varData_609.lenbits
            };
            varData_633 = varData_636;
            varData_631 = varData_547(varData_548, varData_609.lens, 0, 19, varData_609.lencode, 0, varData_609.work, varData_633);
            varData_609.lenbits = varData_633.bits;
            if (varData_631) {
              param_1.msg = "invalid code lengths set";
              varData_609.mode = varData_580;
              break;
            }
            varData_609.have = 0;
            varData_609.mode = varData_569;
          case varData_569:
            while (varData_609.have < varData_609.nlen + varData_609.ndist) {
              while (true) {
                varData_623 = varData_609.lencode[varData_616 & (1 << varData_609.lenbits) - 1];
                varData_624 = varData_623 >>> 24;
                varData_625 = varData_623 >>> 16 & 255;
                varData_626 = varData_623 & 65535;
                if (varData_624 <= varData_617) {
                  break;
                }
                if (varData_614 === 0) {
                  break _0x2350e6;
                }
                varData_614--;
                varData_616 += varData_610[varData_612++] << varData_617;
                varData_617 += 8;
              }
              if (varData_626 < 16) {
                varData_616 >>>= varData_624;
                varData_617 -= varData_624;
                varData_609.lens[varData_609.have++] = varData_626;
              } else {
                if (varData_626 === 16) {
                  varData_634 = varData_624 + 2;
                  while (varData_617 < varData_634) {
                    if (varData_614 === 0) {
                      break _0x2350e6;
                    }
                    varData_614--;
                    varData_616 += varData_610[varData_612++] << varData_617;
                    varData_617 += 8;
                  }
                  varData_616 >>>= varData_624;
                  varData_617 -= varData_624;
                  if (varData_609.have === 0) {
                    param_1.msg = "invalid bit length repeat";
                    varData_609.mode = varData_580;
                    break;
                  }
                  varData_630 = varData_609.lens[varData_609.have - 1];
                  varData_620 = 3 + (varData_616 & 3);
                  varData_616 >>>= 2;
                  varData_617 -= 2;
                } else if (varData_626 === 17) {
                  varData_634 = varData_624 + 3;
                  while (varData_617 < varData_634) {
                    if (varData_614 === 0) {
                      break _0x2350e6;
                    }
                    varData_614--;
                    varData_616 += varData_610[varData_612++] << varData_617;
                    varData_617 += 8;
                  }
                  varData_616 >>>= varData_624;
                  varData_617 -= varData_624;
                  varData_630 = 0;
                  varData_620 = 3 + (varData_616 & 7);
                  varData_616 >>>= 3;
                  varData_617 -= 3;
                } else {
                  varData_634 = varData_624 + 7;
                  while (varData_617 < varData_634) {
                    if (varData_614 === 0) {
                      break _0x2350e6;
                    }
                    varData_614--;
                    varData_616 += varData_610[varData_612++] << varData_617;
                    varData_617 += 8;
                  }
                  varData_616 >>>= varData_624;
                  varData_617 -= varData_624;
                  varData_630 = 0;
                  varData_620 = 11 + (varData_616 & 127);
                  varData_616 >>>= 7;
                  varData_617 -= 7;
                }
                if (varData_609.have + varData_620 > varData_609.nlen + varData_609.ndist) {
                  param_1.msg = "invalid bit length repeat";
                  varData_609.mode = varData_580;
                  break;
                }
                while (varData_620--) {
                  varData_609.lens[varData_609.have++] = varData_630;
                }
              }
            }
            if (varData_609.mode === varData_580) {
              break;
            }
            if (varData_609.lens[256] === 0) {
              param_1.msg = "invalid code -- missing end-of-block";
              varData_609.mode = varData_580;
              break;
            }
            varData_609.lenbits = 9;
            var varData_637 = {
              bits: varData_609.lenbits
            };
            varData_633 = varData_637;
            varData_631 = varData_547(varData_549, varData_609.lens, 0, varData_609.nlen, varData_609.lencode, 0, varData_609.work, varData_633);
            varData_609.lenbits = varData_633.bits;
            if (varData_631) {
              param_1.msg = "invalid literal/lengths set";
              varData_609.mode = varData_580;
              break;
            }
            varData_609.distbits = 6;
            varData_609.distcode = varData_609.distdyn;
            var varData_638 = {
              bits: varData_609.distbits
            };
            varData_633 = varData_638;
            varData_631 = varData_547(varData_550, varData_609.lens, varData_609.nlen, varData_609.ndist, varData_609.distcode, 0, varData_609.work, varData_633);
            varData_609.distbits = varData_633.bits;
            if (varData_631) {
              param_1.msg = "invalid distances set";
              varData_609.mode = varData_580;
              break;
            }
            varData_609.mode = varData_570;
            if (param_2 === _0x57deb6) {
              break _0x2350e6;
            }
          case varData_570:
            varData_609.mode = varData_571;
          case varData_571:
            if (varData_614 >= 6 && varData_615 >= 258) {
              param_1.next_out = varData_613;
              param_1.avail_out = varData_615;
              param_1.next_in = varData_612;
              param_1.avail_in = varData_614;
              varData_609.hold = varData_616;
              varData_609.bits = varData_617;
              varData_486(param_1, varData_619);
              varData_613 = param_1.next_out;
              varData_611 = param_1.output;
              varData_615 = param_1.avail_out;
              varData_612 = param_1.next_in;
              varData_610 = param_1.input;
              varData_614 = param_1.avail_in;
              varData_616 = varData_609.hold;
              varData_617 = varData_609.bits;
              if (varData_609.mode === varData_562) {
                varData_609.back = -1;
              }
              break;
            }
            varData_609.back = 0;
            while (true) {
              varData_623 = varData_609.lencode[varData_616 & (1 << varData_609.lenbits) - 1];
              varData_624 = varData_623 >>> 24;
              varData_625 = varData_623 >>> 16 & 255;
              varData_626 = varData_623 & 65535;
              if (varData_624 <= varData_617) {
                break;
              }
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_614--;
              varData_616 += varData_610[varData_612++] << varData_617;
              varData_617 += 8;
            }
            if (varData_625 && (varData_625 & 240) === 0) {
              varData_627 = varData_624;
              varData_628 = varData_625;
              varData_629 = varData_626;
              while (true) {
                varData_623 = varData_609.lencode[varData_629 + ((varData_616 & (1 << varData_627 + varData_628) - 1) >> varData_627)];
                varData_624 = varData_623 >>> 24;
                varData_625 = varData_623 >>> 16 & 255;
                varData_626 = varData_623 & 65535;
                if (varData_627 + varData_624 <= varData_617) {
                  break;
                }
                if (varData_614 === 0) {
                  break _0x2350e6;
                }
                varData_614--;
                varData_616 += varData_610[varData_612++] << varData_617;
                varData_617 += 8;
              }
              varData_616 >>>= varData_627;
              varData_617 -= varData_627;
              varData_609.back += varData_627;
            }
            varData_616 >>>= varData_624;
            varData_617 -= varData_624;
            varData_609.back += varData_624;
            varData_609.length = varData_626;
            if (varData_625 === 0) {
              varData_609.mode = varData_576;
              break;
            }
            if (varData_625 & 32) {
              varData_609.back = -1;
              varData_609.mode = varData_562;
              break;
            }
            if (varData_625 & 64) {
              param_1.msg = "invalid literal/length code";
              varData_609.mode = varData_580;
              break;
            }
            varData_609.extra = varData_625 & 15;
            varData_609.mode = varData_572;
          case varData_572:
            if (varData_609.extra) {
              varData_634 = varData_609.extra;
              while (varData_617 < varData_634) {
                if (varData_614 === 0) {
                  break _0x2350e6;
                }
                varData_614--;
                varData_616 += varData_610[varData_612++] << varData_617;
                varData_617 += 8;
              }
              varData_609.length += varData_616 & (1 << varData_609.extra) - 1;
              varData_616 >>>= varData_609.extra;
              varData_617 -= varData_609.extra;
              varData_609.back += varData_609.extra;
            }
            varData_609.was = varData_609.length;
            varData_609.mode = varData_573;
          case varData_573:
            while (true) {
              varData_623 = varData_609.distcode[varData_616 & (1 << varData_609.distbits) - 1];
              varData_624 = varData_623 >>> 24;
              varData_625 = varData_623 >>> 16 & 255;
              varData_626 = varData_623 & 65535;
              if (varData_624 <= varData_617) {
                break;
              }
              if (varData_614 === 0) {
                break _0x2350e6;
              }
              varData_614--;
              varData_616 += varData_610[varData_612++] << varData_617;
              varData_617 += 8;
            }
            if ((varData_625 & 240) === 0) {
              varData_627 = varData_624;
              varData_628 = varData_625;
              varData_629 = varData_626;
              while (true) {
                varData_623 = varData_609.distcode[varData_629 + ((varData_616 & (1 << varData_627 + varData_628) - 1) >> varData_627)];
                varData_624 = varData_623 >>> 24;
                varData_625 = varData_623 >>> 16 & 255;
                varData_626 = varData_623 & 65535;
                if (varData_627 + varData_624 <= varData_617) {
                  break;
                }
                if (varData_614 === 0) {
                  break _0x2350e6;
                }
                varData_614--;
                varData_616 += varData_610[varData_612++] << varData_617;
                varData_617 += 8;
              }
              varData_616 >>>= varData_627;
              varData_617 -= varData_627;
              varData_609.back += varData_627;
            }
            varData_616 >>>= varData_624;
            varData_617 -= varData_624;
            varData_609.back += varData_624;
            if (varData_625 & 64) {
              param_1.msg = "invalid distance code";
              varData_609.mode = varData_580;
              break;
            }
            varData_609.offset = varData_626;
            varData_609.extra = varData_625 & 15;
            varData_609.mode = varData_574;
          case varData_574:
            if (varData_609.extra) {
              varData_634 = varData_609.extra;
              while (varData_617 < varData_634) {
                if (varData_614 === 0) {
                  break _0x2350e6;
                }
                varData_614--;
                varData_616 += varData_610[varData_612++] << varData_617;
                varData_617 += 8;
              }
              varData_609.offset += varData_616 & (1 << varData_609.extra) - 1;
              varData_616 >>>= varData_609.extra;
              varData_617 -= varData_609.extra;
              varData_609.back += varData_609.extra;
            }
            if (varData_609.offset > varData_609.dmax) {
              param_1.msg = "invalid distance too far back";
              varData_609.mode = varData_580;
              break;
            }
            varData_609.mode = varData_575;
          case varData_575:
            if (varData_615 === 0) {
              break _0x2350e6;
            }
            varData_620 = varData_619 - varData_615;
            if (varData_609.offset > varData_620) {
              varData_620 = varData_609.offset - varData_620;
              if (varData_620 > varData_609.whave) {
                if (varData_609.sane) {
                  param_1.msg = "invalid distance too far back";
                  varData_609.mode = varData_580;
                  break;
                }
              }
              if (varData_620 > varData_609.wnext) {
                varData_620 -= varData_609.wnext;
                varData_621 = varData_609.wsize - varData_620;
              } else {
                varData_621 = varData_609.wnext - varData_620;
              }
              if (varData_620 > varData_609.length) {
                varData_620 = varData_609.length;
              }
              varData_622 = varData_609.window;
            } else {
              varData_622 = varData_611;
              varData_621 = varData_613 - varData_609.offset;
              varData_620 = varData_609.length;
            }
            if (varData_620 > varData_615) {
              varData_620 = varData_615;
            }
            varData_615 -= varData_620;
            varData_609.length -= varData_620;
            do {
              varData_611[varData_613++] = varData_622[varData_621++];
            } while (--varData_620);
            if (varData_609.length === 0) {
              varData_609.mode = varData_571;
            }
            break;
          case varData_576:
            if (varData_615 === 0) {
              break _0x2350e6;
            }
            varData_611[varData_613++] = varData_609.length;
            varData_615--;
            varData_609.mode = varData_571;
            break;
          case varData_577:
            if (varData_609.wrap) {
              while (varData_617 < 32) {
                if (varData_614 === 0) {
                  break _0x2350e6;
                }
                varData_614--;
                varData_616 |= varData_610[varData_612++] << varData_617;
                varData_617 += 8;
              }
              varData_619 -= varData_615;
              param_1.total_out += varData_619;
              varData_609.total += varData_619;
              if (varData_609.wrap & 4 && varData_619) {
                param_1.adler = varData_609.check = varData_609.flags ? varData_293(varData_609.check, varData_611, varData_619, varData_613 - varData_619) : varData_285(varData_609.check, varData_611, varData_619, varData_613 - varData_619);
              }
              varData_619 = varData_615;
              if (varData_609.wrap & 4 && (varData_609.flags ? varData_616 : varData_587(varData_616)) !== varData_609.check) {
                param_1.msg = "incorrect data check";
                varData_609.mode = varData_580;
                break;
              }
              varData_616 = 0;
              varData_617 = 0;
            }
            varData_609.mode = varData_578;
          case varData_578:
            if (varData_609.wrap && varData_609.flags) {
              while (varData_617 < 32) {
                if (varData_614 === 0) {
                  break _0x2350e6;
                }
                varData_614--;
                varData_616 += varData_610[varData_612++] << varData_617;
                varData_617 += 8;
              }
              if (varData_609.wrap & 4 && varData_616 !== (varData_609.total & -1)) {
                param_1.msg = "incorrect length check";
                varData_609.mode = varData_580;
                break;
              }
              varData_616 = 0;
              varData_617 = 0;
            }
            varData_609.mode = varData_579;
          case varData_579:
            varData_631 = _0x2c2bd5;
            break _0x2350e6;
          case varData_580:
            varData_631 = _0x5b6354;
            break _0x2350e6;
          case varData_581:
            return _0x504d08;
          case varData_582:
          default:
            return _0x5ecc54;
        }
      }
      param_1.next_out = varData_613;
      param_1.avail_out = varData_615;
      param_1.next_in = varData_612;
      param_1.avail_in = varData_614;
      varData_609.hold = varData_616;
      varData_609.bits = varData_617;
      if (varData_609.wsize || varData_619 !== param_1.avail_out && varData_609.mode < varData_580 && (varData_609.mode < varData_577 || param_2 !== _0x20e85d)) {
        if (varData_605(param_1, param_1.output, param_1.next_out, varData_619 - param_1.avail_out)) ;
      }
      varData_618 -= param_1.avail_in;
      varData_619 -= param_1.avail_out;
      param_1.total_in += varData_618;
      param_1.total_out += varData_619;
      varData_609.total += varData_619;
      if (varData_609.wrap & 4 && varData_619) {
        param_1.adler = varData_609.check = varData_609.flags ? varData_293(varData_609.check, varData_611, varData_619, param_1.next_out - varData_619) : varData_285(varData_609.check, varData_611, varData_619, param_1.next_out - varData_619);
      }
      param_1.data_type = varData_609.bits + (varData_609.last ? 64 : 0) + (varData_609.mode === varData_562 ? 128 : 0) + (varData_609.mode === varData_570 || varData_609.mode === varData_565 ? 256 : 0);
      if ((varData_618 === 0 && varData_619 === 0 || param_2 === _0x20e85d) && varData_631 === _0x1feeca) {
        varData_631 = _0x6f5acd;
      }
      return varData_631;
    };
    const varData_639 = param_1 => {
      if (varData_588(param_1)) {
        return _0x5ecc54;
      }
      let varData_640 = param_1.state;
      varData_640.window &&= null;
      param_1.state = null;
      return _0x1feeca;
    };
    const varData_641 = (param_1, param_2) => {
      if (varData_588(param_1)) {
        return _0x5ecc54;
      }
      const varData_642 = param_1.state;
      if ((varData_642.wrap & 2) === 0) {
        return _0x5ecc54;
      }
      varData_642.head = param_2;
      param_2.done = false;
      return _0x1feeca;
    };
    const varData_643 = (param_1, param_2) => {
      const varData_644 = param_2.length;
      let varData_645;
      let varData_646;
      let varData_647;
      if (varData_588(param_1)) {
        return _0x5ecc54;
      }
      varData_645 = param_1.state;
      if (varData_645.wrap !== 0 && varData_645.mode !== varData_561) {
        return _0x5ecc54;
      }
      if (varData_645.mode === varData_561) {
        varData_646 = 1;
        varData_646 = varData_285(varData_646, param_2, varData_644, 0);
        if (varData_646 !== varData_645.check) {
          return _0x5b6354;
        }
      }
      varData_647 = varData_605(param_1, param_2, varData_644, varData_644);
      if (varData_647) {
        varData_645.mode = varData_581;
        return _0x504d08;
      }
      varData_645.havedict = 1;
      return _0x1feeca;
    };
    var varData_648 = varData_592;
    var varData_649 = varData_594;
    var varData_650 = varData_590;
    var varData_651 = varData_600;
    var varData_652 = varData_597;
    var varData_653 = varData_608;
    var varData_654 = varData_639;
    var varData_655 = varData_641;
    var varData_656 = varData_643;
    var varData_657 = "pako inflate (from Nodeca project)";
    var varData_658 = {
      inflateReset: varData_648,
      inflateReset2: varData_649,
      inflateResetKeep: varData_650,
      inflateInit: varData_651,
      inflateInit2: varData_652,
      inflate: varData_653,
      inflateEnd: varData_654,
      inflateGetHeader: varData_655,
      inflateSetDictionary: varData_656,
      inflateInfo: varData_657
    };
    var varData_659 = varData_658;
    function handleAction_57() {
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
    var varData_660 = handleAction_57;
    const varData_661 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x171dde,
      Z_FINISH: _0x5cc618,
      Z_OK: _0x3754cf,
      Z_STREAM_END: _0x49f62c,
      Z_NEED_DICT: _0x58c3fd,
      Z_STREAM_ERROR: _0x96258c,
      Z_DATA_ERROR: _0x2d7f70,
      Z_MEM_ERROR: _0x158bd0
    } = varData_296;
    function handleAction_58(param_1) {
      this.options = varData_443.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, param_1 || {});
      const varData_662 = this.options;
      if (varData_662.raw && varData_662.windowBits >= 0 && varData_662.windowBits < 16) {
        varData_662.windowBits = -varData_662.windowBits;
        if (varData_662.windowBits === 0) {
          varData_662.windowBits = -15;
        }
      }
      if (varData_662.windowBits >= 0 && varData_662.windowBits < 16 && (!param_1 || !param_1.windowBits)) {
        varData_662.windowBits += 32;
      }
      if (varData_662.windowBits > 15 && varData_662.windowBits < 48) {
        if ((varData_662.windowBits & 15) === 0) {
          varData_662.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_466();
      this.strm.avail_out = 0;
      let varData_663 = varData_659.inflateInit2(this.strm, varData_662.windowBits);
      if (varData_663 !== _0x3754cf) {
        throw new Error(varData_294[varData_663]);
      }
      this.header = new varData_660();
      varData_659.inflateGetHeader(this.strm, this.header);
      if (varData_662.dictionary) {
        if (typeof varData_662.dictionary === "string") {
          varData_662.dictionary = varData_465.string2buf(varData_662.dictionary);
        } else if (varData_661.call(varData_662.dictionary) === "[object ArrayBuffer]") {
          varData_662.dictionary = new Uint8Array(varData_662.dictionary);
        }
        if (varData_662.raw) {
          varData_663 = varData_659.inflateSetDictionary(this.strm, varData_662.dictionary);
          if (varData_663 !== _0x3754cf) {
            throw new Error(varData_294[varData_663]);
          }
        }
      }
    }
    handleAction_58.prototype.push = function (param_1, param_2) {
      const varData_664 = this.strm;
      const varData_665 = this.options.chunkSize;
      const varData_666 = this.options.dictionary;
      let varData_667;
      let varData_668;
      let varData_669;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_668 = param_2;
      } else {
        varData_668 = param_2 === true ? _0x5cc618 : _0x171dde;
      }
      if (varData_661.call(param_1) === "[object ArrayBuffer]") {
        varData_664.input = new Uint8Array(param_1);
      } else {
        varData_664.input = param_1;
      }
      varData_664.next_in = 0;
      varData_664.avail_in = varData_664.input.length;
      while (true) {
        if (varData_664.avail_out === 0) {
          varData_664.output = new Uint8Array(varData_665);
          varData_664.next_out = 0;
          varData_664.avail_out = varData_665;
        }
        varData_667 = varData_659.inflate(varData_664, varData_668);
        if (varData_667 === _0x58c3fd && varData_666) {
          varData_667 = varData_659.inflateSetDictionary(varData_664, varData_666);
          if (varData_667 === _0x3754cf) {
            varData_667 = varData_659.inflate(varData_664, varData_668);
          } else if (varData_667 === _0x2d7f70) {
            varData_667 = _0x58c3fd;
          }
        }
        while (varData_664.avail_in > 0 && varData_667 === _0x49f62c && varData_664.state.wrap > 0 && param_1[varData_664.next_in] !== 0) {
          varData_659.inflateReset(varData_664);
          varData_667 = varData_659.inflate(varData_664, varData_668);
        }
        switch (varData_667) {
          case _0x96258c:
          case _0x2d7f70:
          case _0x58c3fd:
          case _0x158bd0:
            this.onEnd(varData_667);
            this.ended = true;
            return false;
        }
        varData_669 = varData_664.avail_out;
        if (varData_664.next_out) {
          if (varData_664.avail_out === 0 || varData_667 === _0x49f62c) {
            if (this.options.to === "string") {
              let varData_670 = varData_465.utf8border(varData_664.output, varData_664.next_out);
              let varData_671 = varData_664.next_out - varData_670;
              let varData_672 = varData_465.buf2string(varData_664.output, varData_670);
              varData_664.next_out = varData_671;
              varData_664.avail_out = varData_665 - varData_671;
              if (varData_671) {
                varData_664.output.set(varData_664.output.subarray(varData_670, varData_670 + varData_671), 0);
              }
              this.onData(varData_672);
            } else {
              this.onData(varData_664.output.length === varData_664.next_out ? varData_664.output : varData_664.output.subarray(0, varData_664.next_out));
            }
          }
        }
        if (varData_667 === _0x3754cf && varData_669 === 0) {
          continue;
        }
        if (varData_667 === _0x49f62c) {
          varData_667 = varData_659.inflateEnd(this.strm);
          this.onEnd(varData_667);
          this.ended = true;
          return true;
        }
        if (varData_664.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_58.prototype.onData = function (param_1) {
      this.chunks.push(param_1);
    };
    handleAction_58.prototype.onEnd = function (param_1) {
      if (param_1 === _0x3754cf) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = varData_443.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_59(param_1, param_2) {
      const varData_673 = new handleAction_58(param_2);
      varData_673.push(param_1);
      if (varData_673.err) {
        throw varData_673.msg || varData_294[varData_673.err];
      }
      return varData_673.result;
    }
    function handleAction_60(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.raw = true;
      return handleAction_59(param_1, param_2);
    }
    var varData_674 = handleAction_58;
    var varData_675 = handleAction_59;
    var varData_676 = handleAction_60;
    var varData_677 = handleAction_59;
    var varData_678 = varData_296;
    var varData_679 = {
      Inflate: varData_674,
      inflate: varData_675,
      inflateRaw: varData_676,
      ungzip: varData_677,
      constants: varData_678
    };
    var varData_680 = varData_679;
    const {
      Deflate: _0x2dd6b4,
      deflate: _0x4a8527,
      deflateRaw: _0x3891f8,
      gzip: _0x490da8
    } = varData_483;
    const {
      Inflate: _0x3f9376,
      inflate: _0x1f767a,
      inflateRaw: _0x1671c2,
      ungzip: _0x4c5d0c
    } = varData_680;
    var varData_681 = _0x2dd6b4;
    var varData_682 = _0x4a8527;
    var varData_683 = _0x3891f8;
    var varData_684 = _0x490da8;
    var varData_685 = _0x3f9376;
    var varData_686 = _0x1f767a;
    var varData_687 = _0x1671c2;
    var varData_688 = _0x4c5d0c;
    var varData_689 = varData_296;
    var varData_690 = {
      Deflate: varData_681,
      deflate: varData_682,
      deflateRaw: varData_683,
      gzip: varData_684,
      Inflate: varData_685,
      inflate: varData_686,
      inflateRaw: varData_687,
      ungzip: varData_688,
      constants: varData_689
    };
    var varData_691 = varData_690;
    var varData_692 = handleAction_35(739);
    ;
    var varData_693 = Object.create;
    var varData_694 = Object.defineProperty;
    var varData_695 = Object.getOwnPropertyDescriptor;
    var varData_696 = Object.getOwnPropertyNames;
    var varData_697 = Object.getPrototypeOf;
    var varData_698 = Object.prototype.hasOwnProperty;
    var varData_699 = (param_1, param_2) => function _0x53f1b1() {
      if (!param_2) {
        (0, param_1[varData_696(param_1)[0]])((param_2 = {
          exports: {}
        }).exports, param_2);
      }
      return param_2.exports;
    };
    var varData_700 = (param_1, param_2) => {
      for (var varData_701 in param_2) {
        varData_694(param_1, varData_701, {
          get: param_2[varData_701],
          enumerable: true
        });
      }
    };
    var varData_702 = (param_1, param_2, param_3, param_4) => {
      if (param_2 && typeof param_2 === "object" || typeof param_2 === "function") {
        for (let varData_703 of varData_696(param_2)) {
          if (!varData_698.call(param_1, varData_703) && varData_703 !== param_3) {
            varData_694(param_1, varData_703, {
              get: () => param_2[varData_703],
              enumerable: !(param_4 = varData_695(param_2, varData_703)) || param_4.enumerable
            });
          }
        }
      }
      return param_1;
    };
    var varData_704 = (param_1, param_2, param_3) => {
      param_3 = param_1 != null ? varData_693(varData_697(param_1)) : {};
      return varData_702(param_2 || !param_1 || !param_1.__esModule ? varData_694(param_3, "default", {
        value: param_1,
        enumerable: true
      }) : param_3, param_1);
    };
    var varData_705 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_706 = (param_1, param_2, param_3) => {
      varData_705(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_707 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_708 = (param_1, param_2, param_3, param_4) => {
      varData_705(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_709 = (param_1, param_2, param_3, param_4) => ({
      set _(param_1_1) {
        varData_708(param_1, param_2, param_1_1, param_3);
      },
      get _() {
        return varData_706(param_1, param_2, param_4);
      }
    });
    var varData_710 = (param_1, param_2, param_3) => {
      varData_705(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_711 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/core.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1();
          } else if (typeof define === "function" && define.amd) {
            define([], param_2_1);
          } else {
            param_1_1.CryptoJS = param_2_1();
          }
        })(param_1, function () {
          var varData_712 = varData_712 || function (param_1_1, param_2_1) {
            var varData_713 = Object.create || function () {
              function handleAction_61() {}
              ;
              return function (param_1_2) {
                var varData_714;
                handleAction_61.prototype = param_1_2;
                varData_714 = new handleAction_61();
                handleAction_61.prototype = null;
                return varData_714;
              };
            }();
            var varData_715 = {};
            var varData_716 = varData_715.lib = {};
            var varData_717 = varData_716.Base = function () {
              return {
                extend: function (param_1_2) {
                  var varData_718 = varData_713(this);
                  if (param_1_2) {
                    varData_718.mixIn(param_1_2);
                  }
                  if (!varData_718.hasOwnProperty("init") || this.init === varData_718.init) {
                    varData_718.init = function () {
                      varData_718.$super.init.apply(this, arguments);
                    };
                  }
                  varData_718.init.prototype = varData_718;
                  varData_718.$super = this;
                  return varData_718;
                },
                create: function () {
                  var varData_719 = this.extend();
                  varData_719.init.apply(varData_719, arguments);
                  return varData_719;
                },
                init: function () {},
                mixIn: function (param_1_2) {
                  for (var varData_720 in param_1_2) {
                    if (param_1_2.hasOwnProperty(varData_720)) {
                      this[varData_720] = param_1_2[varData_720];
                    }
                  }
                  if (param_1_2.hasOwnProperty("toString")) {
                    this.toString = param_1_2.toString;
                  }
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                }
              };
            }();
            var varData_721 = varData_716.WordArray = varData_717.extend({
              init: function (param_1_2, param_2_2) {
                param_1_2 = this.words = param_1_2 || [];
                if (param_2_2 != param_2_1) {
                  this.sigBytes = param_2_2;
                } else {
                  this.sigBytes = param_1_2.length * 4;
                }
              },
              toString: function (param_1_2) {
                return (param_1_2 || varData_736).stringify(this);
              },
              concat: function (param_1_2) {
                var varData_722 = this.words;
                var varData_723 = param_1_2.words;
                var varData_724 = this.sigBytes;
                var varData_725 = param_1_2.sigBytes;
                this.clamp();
                if (varData_724 % 4) {
                  for (var loopIdx = 0; loopIdx < varData_725; loopIdx++) {
                    var varData_726 = varData_723[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                    varData_722[varData_724 + loopIdx >>> 2] |= varData_726 << 24 - (varData_724 + loopIdx) % 4 * 8;
                  }
                } else {
                  for (var loopIdx = 0; loopIdx < varData_725; loopIdx += 4) {
                    varData_722[varData_724 + loopIdx >>> 2] = varData_723[loopIdx >>> 2];
                  }
                }
                this.sigBytes += varData_725;
                return this;
              },
              clamp: function () {
                var varData_727 = this.words;
                var varData_728 = this.sigBytes;
                varData_727[varData_728 >>> 2] &= -1 << 32 - varData_728 % 4 * 8;
                varData_727.length = param_1_1.ceil(varData_728 / 4);
              },
              clone: function () {
                var varData_729 = varData_717.clone.call(this);
                varData_729.words = this.words.slice(0);
                return varData_729;
              },
              random: function (param_1_2) {
                var varData_730 = [];
                function handleAction_62(param_1_3) {
                  var param_1_3 = param_1_3;
                  var varData_731 = 987654321;
                  var varData_732 = 4294967295;
                  return function () {
                    varData_731 = (varData_731 & 65535) * 36969 + (varData_731 >> 16) & varData_732;
                    param_1_3 = (param_1_3 & 65535) * 18000 + (param_1_3 >> 16) & varData_732;
                    var varData_733 = (varData_731 << 16) + param_1_3 & varData_732;
                    varData_733 /= 4294967296;
                    varData_733 += 0.5;
                    return varData_733 * (param_1_1.random() > 0.5 ? 1 : -1);
                  };
                }
                for (var loopIdx = 0, loopIdx_1; loopIdx < param_1_2; loopIdx += 4) {
                  var varData_734 = handleAction_62((loopIdx_1 || param_1_1.random()) * 4294967296);
                  loopIdx_1 = varData_734() * 987654071;
                  varData_730.push(varData_734() * 4294967296 | 0);
                }
                return new varData_721.init(varData_730, param_1_2);
              }
            });
            var varData_735 = varData_715.enc = {};
            var varData_736 = varData_735.Hex = {
              stringify: function (param_1_2) {
                var varData_737 = param_1_2.words;
                var varData_738 = param_1_2.sigBytes;
                var varData_739 = [];
                for (var loopIdx = 0; loopIdx < varData_738; loopIdx++) {
                  var varData_740 = varData_737[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  varData_739.push((varData_740 >>> 4).toString(16));
                  varData_739.push((varData_740 & 15).toString(16));
                }
                return varData_739.join("");
              },
              parse: function (param_1_2) {
                var varData_741 = param_1_2.length;
                var varData_742 = [];
                for (var loopIdx = 0; loopIdx < varData_741; loopIdx += 2) {
                  varData_742[loopIdx >>> 3] |= parseInt(param_1_2.substr(loopIdx, 2), 16) << 24 - loopIdx % 8 * 4;
                }
                return new varData_721.init(varData_742, varData_741 / 2);
              }
            };
            var varData_743 = varData_735.Latin1 = {
              stringify: function (param_1_2) {
                var varData_744 = param_1_2.words;
                var varData_745 = param_1_2.sigBytes;
                var varData_746 = [];
                for (var loopIdx = 0; loopIdx < varData_745; loopIdx++) {
                  var varData_747 = varData_744[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  varData_746.push(String.fromCharCode(varData_747));
                }
                return varData_746.join("");
              },
              parse: function (param_1_2) {
                var varData_748 = param_1_2.length;
                var varData_749 = [];
                for (var loopIdx = 0; loopIdx < varData_748; loopIdx++) {
                  varData_749[loopIdx >>> 2] |= (param_1_2.charCodeAt(loopIdx) & 255) << 24 - loopIdx % 4 * 8;
                }
                return new varData_721.init(varData_749, varData_748);
              }
            };
            var varData_750 = varData_735.Utf8 = {
              stringify: function (param_1_2) {
                try {
                  return decodeURIComponent(escape(varData_743.stringify(param_1_2)));
                } catch (err) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function (param_1_2) {
                return varData_743.parse(unescape(encodeURIComponent(param_1_2)));
              }
            };
            var varData_751 = varData_716.BufferedBlockAlgorithm = varData_717.extend({
              reset: function () {
                this._data = new varData_721.init();
                this._nDataBytes = 0;
              },
              _append: function (param_1_2) {
                if (typeof param_1_2 == "string") {
                  param_1_2 = varData_750.parse(param_1_2);
                }
                this._data.concat(param_1_2);
                this._nDataBytes += param_1_2.sigBytes;
              },
              _process: function (param_1_2) {
                var varData_752 = this._data;
                var varData_753 = varData_752.words;
                var varData_754 = varData_752.sigBytes;
                var varData_755 = this.blockSize;
                var varData_756 = varData_755 * 4;
                var varData_757 = varData_754 / varData_756;
                if (param_1_2) {
                  varData_757 = param_1_1.ceil(varData_757);
                } else {
                  varData_757 = param_1_1.max((varData_757 | 0) - this._minBufferSize, 0);
                }
                var varData_758 = varData_757 * varData_755;
                var varData_759 = param_1_1.min(varData_758 * 4, varData_754);
                if (varData_758) {
                  for (var loopIdx = 0; loopIdx < varData_758; loopIdx += varData_755) {
                    this._doProcessBlock(varData_753, loopIdx);
                  }
                  var varData_760 = varData_753.splice(0, varData_758);
                  varData_752.sigBytes -= varData_759;
                }
                return new varData_721.init(varData_760, varData_759);
              },
              clone: function () {
                var varData_761 = varData_717.clone.call(this);
                varData_761._data = this._data.clone();
                return varData_761;
              },
              _minBufferSize: 0
            });
            var varData_762 = varData_716.Hasher = varData_751.extend({
              cfg: varData_717.extend(),
              init: function (param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
                this.reset();
              },
              reset: function () {
                varData_751.reset.call(this);
                this._doReset();
              },
              update: function (param_1_2) {
                this._append(param_1_2);
                this._process();
                return this;
              },
              finalize: function (param_1_2) {
                if (param_1_2) {
                  this._append(param_1_2);
                }
                var varData_763 = this._doFinalize();
                return varData_763;
              },
              blockSize: 16,
              _createHelper: function (param_1_2) {
                return function (param_1_3, param_2_2) {
                  return new param_1_2.init(param_2_2).finalize(param_1_3);
                };
              },
              _createHmacHelper: function (param_1_2) {
                return function (param_1_3, param_2_2) {
                  return new varData_764.HMAC.init(param_1_2, param_2_2).finalize(param_1_3);
                };
              }
            });
            var varData_764 = varData_715.algo = {};
            return varData_715;
          }(Math);
          return varData_712;
        });
      }
    });
    var varData_765 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_766 = param_1_1;
            var varData_767 = varData_766.lib;
            var varData_768 = varData_767.Base;
            var varData_769 = varData_767.WordArray;
            var varData_770 = varData_766.x64 = {};
            var varData_771 = {
              init: function (param_1_3, param_2_1) {
                this.high = param_1_3;
                this.low = param_2_1;
              }
            };
            var varData_772 = varData_770.Word = varData_768.extend(varData_771);
            var varData_773 = varData_770.WordArray = varData_768.extend({
              init: function (param_1_3, param_2_1) {
                param_1_3 = this.words = param_1_3 || [];
                if (param_2_1 != param_1_2) {
                  this.sigBytes = param_2_1;
                } else {
                  this.sigBytes = param_1_3.length * 8;
                }
              },
              toX32: function () {
                var varData_774 = this.words;
                var varData_775 = varData_774.length;
                var varData_776 = [];
                for (var loopIdx = 0; loopIdx < varData_775; loopIdx++) {
                  var varData_777 = varData_774[loopIdx];
                  varData_776.push(varData_777.high);
                  varData_776.push(varData_777.low);
                }
                return varData_769.create(varData_776, this.sigBytes);
              },
              clone: function () {
                var varData_778 = varData_768.clone.call(this);
                var varData_779 = varData_778.words = this.words.slice(0);
                var varData_780 = varData_779.length;
                for (var loopIdx = 0; loopIdx < varData_780; loopIdx++) {
                  varData_779[loopIdx] = varData_779[loopIdx].clone();
                }
                return varData_778;
              }
            });
          })();
          return param_1_1;
        });
      }
    });
    var varData_781 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            if (typeof ArrayBuffer != "function") {
              return;
            }
            var varData_782 = param_1_1;
            var varData_783 = varData_782.lib;
            var varData_784 = varData_783.WordArray;
            var varData_785 = varData_784.init;
            var varData_786 = varData_784.init = function (param_1_2) {
              if (param_1_2 instanceof ArrayBuffer) {
                param_1_2 = new Uint8Array(param_1_2);
              }
              if (param_1_2 instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && param_1_2 instanceof Uint8ClampedArray || param_1_2 instanceof Int16Array || param_1_2 instanceof Uint16Array || param_1_2 instanceof Int32Array || param_1_2 instanceof Uint32Array || param_1_2 instanceof Float32Array || param_1_2 instanceof Float64Array) {
                param_1_2 = new Uint8Array(param_1_2.buffer, param_1_2.byteOffset, param_1_2.byteLength);
              }
              if (param_1_2 instanceof Uint8Array) {
                var varData_787 = param_1_2.byteLength;
                var varData_788 = [];
                for (var loopIdx = 0; loopIdx < varData_787; loopIdx++) {
                  varData_788[loopIdx >>> 2] |= param_1_2[loopIdx] << 24 - loopIdx % 4 * 8;
                }
                varData_785.call(this, varData_788, varData_787);
              } else {
                varData_785.apply(this, arguments);
              }
            };
            varData_786.prototype = varData_784;
          })();
          return param_1_1.lib.WordArray;
        });
      }
    });
    var varData_789 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_790 = param_1_1;
            var varData_791 = varData_790.lib;
            var varData_792 = varData_791.WordArray;
            var varData_793 = varData_790.enc;
            var varData_794 = varData_793.Utf16 = varData_793.Utf16BE = {
              stringify: function (param_1_2) {
                var varData_795 = param_1_2.words;
                var varData_796 = param_1_2.sigBytes;
                var varData_797 = [];
                for (var loopIdx = 0; loopIdx < varData_796; loopIdx += 2) {
                  var varData_798 = varData_795[loopIdx >>> 2] >>> 16 - loopIdx % 4 * 8 & 65535;
                  varData_797.push(String.fromCharCode(varData_798));
                }
                return varData_797.join("");
              },
              parse: function (param_1_2) {
                var varData_799 = param_1_2.length;
                var varData_800 = [];
                for (var loopIdx = 0; loopIdx < varData_799; loopIdx++) {
                  varData_800[loopIdx >>> 1] |= param_1_2.charCodeAt(loopIdx) << 16 - loopIdx % 2 * 16;
                }
                return varData_792.create(varData_800, varData_799 * 2);
              }
            };
            varData_793.Utf16LE = {
              stringify: function (param_1_2) {
                var varData_801 = param_1_2.words;
                var varData_802 = param_1_2.sigBytes;
                var varData_803 = [];
                for (var loopIdx = 0; loopIdx < varData_802; loopIdx += 2) {
                  var varData_804 = handleAction_63(varData_801[loopIdx >>> 2] >>> 16 - loopIdx % 4 * 8 & 65535);
                  varData_803.push(String.fromCharCode(varData_804));
                }
                return varData_803.join("");
              },
              parse: function (param_1_2) {
                var varData_805 = param_1_2.length;
                var varData_806 = [];
                for (var loopIdx = 0; loopIdx < varData_805; loopIdx++) {
                  varData_806[loopIdx >>> 1] |= handleAction_63(param_1_2.charCodeAt(loopIdx) << 16 - loopIdx % 2 * 16);
                }
                return varData_792.create(varData_806, varData_805 * 2);
              }
            };
            function handleAction_63(param_1_2) {
              return param_1_2 << 8 & -16711936 | param_1_2 >>> 8 & 16711935;
            }
          })();
          return param_1_1.enc.Utf16;
        });
      }
    });
    var varData_807 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_808 = param_1_1;
            var varData_809 = varData_808.lib;
            var varData_810 = varData_809.WordArray;
            var varData_811 = varData_808.enc;
            var varData_812 = varData_811.Base64 = {
              stringify: function (param_1_2) {
                var varData_813 = param_1_2.words;
                var varData_814 = param_1_2.sigBytes;
                var varData_815 = this._map;
                param_1_2.clamp();
                var varData_816 = [];
                for (var loopIdx = 0; loopIdx < varData_814; loopIdx += 3) {
                  var varData_817 = varData_813[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  var varData_818 = varData_813[loopIdx + 1 >>> 2] >>> 24 - (loopIdx + 1) % 4 * 8 & 255;
                  var varData_819 = varData_813[loopIdx + 2 >>> 2] >>> 24 - (loopIdx + 2) % 4 * 8 & 255;
                  var varData_820 = varData_817 << 16 | varData_818 << 8 | varData_819;
                  for (var loopIdx_1 = 0; loopIdx_1 < 4 && loopIdx + loopIdx_1 * 0.75 < varData_814; loopIdx_1++) {
                    varData_816.push(varData_815.charAt(varData_820 >>> (3 - loopIdx_1) * 6 & 63));
                  }
                }
                var varData_821 = varData_815.charAt(64);
                if (varData_821) {
                  while (varData_816.length % 4) {
                    varData_816.push(varData_821);
                  }
                }
                return varData_816.join("");
              },
              parse: function (param_1_2) {
                var varData_822 = param_1_2.length;
                var varData_823 = this._map;
                var varData_824 = this._reverseMap;
                if (!varData_824) {
                  varData_824 = this._reverseMap = [];
                  for (var loopIdx = 0; loopIdx < varData_823.length; loopIdx++) {
                    varData_824[varData_823.charCodeAt(loopIdx)] = loopIdx;
                  }
                }
                var varData_825 = varData_823.charAt(64);
                if (varData_825) {
                  var varData_826 = param_1_2.indexOf(varData_825);
                  if (varData_826 !== -1) {
                    varData_822 = varData_826;
                  }
                }
                return handleAction_64(param_1_2, varData_822, varData_824);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function handleAction_64(param_1_2, param_2_1, param_3) {
              var varData_827 = [];
              var varData_828 = 0;
              for (var loopIdx = 0; loopIdx < param_2_1; loopIdx++) {
                if (loopIdx % 4) {
                  var varData_829 = param_3[param_1_2.charCodeAt(loopIdx - 1)] << loopIdx % 4 * 2;
                  var varData_830 = param_3[param_1_2.charCodeAt(loopIdx)] >>> 6 - loopIdx % 4 * 2;
                  varData_827[varData_828 >>> 2] |= (varData_829 | varData_830) << 24 - varData_828 % 4 * 8;
                  varData_828++;
                }
              }
              return varData_810.create(varData_827, varData_828);
            }
          })();
          return param_1_1.enc.Base64;
        });
      }
    });
    var varData_831 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_832 = param_1_1;
            var varData_833 = varData_832.lib;
            var varData_834 = varData_833.WordArray;
            var varData_835 = varData_833.Hasher;
            var varData_836 = varData_832.algo;
            var varData_837 = [];
            (function () {
              for (var loopIdx = 0; loopIdx < 64; loopIdx++) {
                varData_837[loopIdx] = param_1_2.abs(param_1_2.sin(loopIdx + 1)) * 4294967296 | 0;
              }
            })();
            var varData_838 = varData_836.MD5 = varData_835.extend({
              _doReset: function () {
                this._hash = new varData_834.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_839 = param_2_1 + loopIdx;
                  var varData_840 = param_1_3[varData_839];
                  param_1_3[varData_839] = (varData_840 << 8 | varData_840 >>> 24) & 16711935 | (varData_840 << 24 | varData_840 >>> 8) & -16711936;
                }
                var varData_841 = this._hash.words;
                var varData_842 = param_1_3[param_2_1 + 0];
                var varData_843 = param_1_3[param_2_1 + 1];
                var varData_844 = param_1_3[param_2_1 + 2];
                var varData_845 = param_1_3[param_2_1 + 3];
                var varData_846 = param_1_3[param_2_1 + 4];
                var varData_847 = param_1_3[param_2_1 + 5];
                var varData_848 = param_1_3[param_2_1 + 6];
                var varData_849 = param_1_3[param_2_1 + 7];
                var varData_850 = param_1_3[param_2_1 + 8];
                var varData_851 = param_1_3[param_2_1 + 9];
                var varData_852 = param_1_3[param_2_1 + 10];
                var varData_853 = param_1_3[param_2_1 + 11];
                var varData_854 = param_1_3[param_2_1 + 12];
                var varData_855 = param_1_3[param_2_1 + 13];
                var varData_856 = param_1_3[param_2_1 + 14];
                var varData_857 = param_1_3[param_2_1 + 15];
                var varData_858 = varData_841[0];
                var varData_859 = varData_841[1];
                var varData_860 = varData_841[2];
                var varData_861 = varData_841[3];
                varData_858 = handleAction_65(varData_858, varData_859, varData_860, varData_861, varData_842, 7, varData_837[0]);
                varData_861 = handleAction_65(varData_861, varData_858, varData_859, varData_860, varData_843, 12, varData_837[1]);
                varData_860 = handleAction_65(varData_860, varData_861, varData_858, varData_859, varData_844, 17, varData_837[2]);
                varData_859 = handleAction_65(varData_859, varData_860, varData_861, varData_858, varData_845, 22, varData_837[3]);
                varData_858 = handleAction_65(varData_858, varData_859, varData_860, varData_861, varData_846, 7, varData_837[4]);
                varData_861 = handleAction_65(varData_861, varData_858, varData_859, varData_860, varData_847, 12, varData_837[5]);
                varData_860 = handleAction_65(varData_860, varData_861, varData_858, varData_859, varData_848, 17, varData_837[6]);
                varData_859 = handleAction_65(varData_859, varData_860, varData_861, varData_858, varData_849, 22, varData_837[7]);
                varData_858 = handleAction_65(varData_858, varData_859, varData_860, varData_861, varData_850, 7, varData_837[8]);
                varData_861 = handleAction_65(varData_861, varData_858, varData_859, varData_860, varData_851, 12, varData_837[9]);
                varData_860 = handleAction_65(varData_860, varData_861, varData_858, varData_859, varData_852, 17, varData_837[10]);
                varData_859 = handleAction_65(varData_859, varData_860, varData_861, varData_858, varData_853, 22, varData_837[11]);
                varData_858 = handleAction_65(varData_858, varData_859, varData_860, varData_861, varData_854, 7, varData_837[12]);
                varData_861 = handleAction_65(varData_861, varData_858, varData_859, varData_860, varData_855, 12, varData_837[13]);
                varData_860 = handleAction_65(varData_860, varData_861, varData_858, varData_859, varData_856, 17, varData_837[14]);
                varData_859 = handleAction_65(varData_859, varData_860, varData_861, varData_858, varData_857, 22, varData_837[15]);
                varData_858 = handleAction_66(varData_858, varData_859, varData_860, varData_861, varData_843, 5, varData_837[16]);
                varData_861 = handleAction_66(varData_861, varData_858, varData_859, varData_860, varData_848, 9, varData_837[17]);
                varData_860 = handleAction_66(varData_860, varData_861, varData_858, varData_859, varData_853, 14, varData_837[18]);
                varData_859 = handleAction_66(varData_859, varData_860, varData_861, varData_858, varData_842, 20, varData_837[19]);
                varData_858 = handleAction_66(varData_858, varData_859, varData_860, varData_861, varData_847, 5, varData_837[20]);
                varData_861 = handleAction_66(varData_861, varData_858, varData_859, varData_860, varData_852, 9, varData_837[21]);
                varData_860 = handleAction_66(varData_860, varData_861, varData_858, varData_859, varData_857, 14, varData_837[22]);
                varData_859 = handleAction_66(varData_859, varData_860, varData_861, varData_858, varData_846, 20, varData_837[23]);
                varData_858 = handleAction_66(varData_858, varData_859, varData_860, varData_861, varData_851, 5, varData_837[24]);
                varData_861 = handleAction_66(varData_861, varData_858, varData_859, varData_860, varData_856, 9, varData_837[25]);
                varData_860 = handleAction_66(varData_860, varData_861, varData_858, varData_859, varData_845, 14, varData_837[26]);
                varData_859 = handleAction_66(varData_859, varData_860, varData_861, varData_858, varData_850, 20, varData_837[27]);
                varData_858 = handleAction_66(varData_858, varData_859, varData_860, varData_861, varData_855, 5, varData_837[28]);
                varData_861 = handleAction_66(varData_861, varData_858, varData_859, varData_860, varData_844, 9, varData_837[29]);
                varData_860 = handleAction_66(varData_860, varData_861, varData_858, varData_859, varData_849, 14, varData_837[30]);
                varData_859 = handleAction_66(varData_859, varData_860, varData_861, varData_858, varData_854, 20, varData_837[31]);
                varData_858 = handleAction_67(varData_858, varData_859, varData_860, varData_861, varData_847, 4, varData_837[32]);
                varData_861 = handleAction_67(varData_861, varData_858, varData_859, varData_860, varData_850, 11, varData_837[33]);
                varData_860 = handleAction_67(varData_860, varData_861, varData_858, varData_859, varData_853, 16, varData_837[34]);
                varData_859 = handleAction_67(varData_859, varData_860, varData_861, varData_858, varData_856, 23, varData_837[35]);
                varData_858 = handleAction_67(varData_858, varData_859, varData_860, varData_861, varData_843, 4, varData_837[36]);
                varData_861 = handleAction_67(varData_861, varData_858, varData_859, varData_860, varData_846, 11, varData_837[37]);
                varData_860 = handleAction_67(varData_860, varData_861, varData_858, varData_859, varData_849, 16, varData_837[38]);
                varData_859 = handleAction_67(varData_859, varData_860, varData_861, varData_858, varData_852, 23, varData_837[39]);
                varData_858 = handleAction_67(varData_858, varData_859, varData_860, varData_861, varData_855, 4, varData_837[40]);
                varData_861 = handleAction_67(varData_861, varData_858, varData_859, varData_860, varData_842, 11, varData_837[41]);
                varData_860 = handleAction_67(varData_860, varData_861, varData_858, varData_859, varData_845, 16, varData_837[42]);
                varData_859 = handleAction_67(varData_859, varData_860, varData_861, varData_858, varData_848, 23, varData_837[43]);
                varData_858 = handleAction_67(varData_858, varData_859, varData_860, varData_861, varData_851, 4, varData_837[44]);
                varData_861 = handleAction_67(varData_861, varData_858, varData_859, varData_860, varData_854, 11, varData_837[45]);
                varData_860 = handleAction_67(varData_860, varData_861, varData_858, varData_859, varData_857, 16, varData_837[46]);
                varData_859 = handleAction_67(varData_859, varData_860, varData_861, varData_858, varData_844, 23, varData_837[47]);
                varData_858 = handleAction_68(varData_858, varData_859, varData_860, varData_861, varData_842, 6, varData_837[48]);
                varData_861 = handleAction_68(varData_861, varData_858, varData_859, varData_860, varData_849, 10, varData_837[49]);
                varData_860 = handleAction_68(varData_860, varData_861, varData_858, varData_859, varData_856, 15, varData_837[50]);
                varData_859 = handleAction_68(varData_859, varData_860, varData_861, varData_858, varData_847, 21, varData_837[51]);
                varData_858 = handleAction_68(varData_858, varData_859, varData_860, varData_861, varData_854, 6, varData_837[52]);
                varData_861 = handleAction_68(varData_861, varData_858, varData_859, varData_860, varData_845, 10, varData_837[53]);
                varData_860 = handleAction_68(varData_860, varData_861, varData_858, varData_859, varData_852, 15, varData_837[54]);
                varData_859 = handleAction_68(varData_859, varData_860, varData_861, varData_858, varData_843, 21, varData_837[55]);
                varData_858 = handleAction_68(varData_858, varData_859, varData_860, varData_861, varData_850, 6, varData_837[56]);
                varData_861 = handleAction_68(varData_861, varData_858, varData_859, varData_860, varData_857, 10, varData_837[57]);
                varData_860 = handleAction_68(varData_860, varData_861, varData_858, varData_859, varData_848, 15, varData_837[58]);
                varData_859 = handleAction_68(varData_859, varData_860, varData_861, varData_858, varData_855, 21, varData_837[59]);
                varData_858 = handleAction_68(varData_858, varData_859, varData_860, varData_861, varData_846, 6, varData_837[60]);
                varData_861 = handleAction_68(varData_861, varData_858, varData_859, varData_860, varData_853, 10, varData_837[61]);
                varData_860 = handleAction_68(varData_860, varData_861, varData_858, varData_859, varData_844, 15, varData_837[62]);
                varData_859 = handleAction_68(varData_859, varData_860, varData_861, varData_858, varData_851, 21, varData_837[63]);
                varData_841[0] = varData_841[0] + varData_858 | 0;
                varData_841[1] = varData_841[1] + varData_859 | 0;
                varData_841[2] = varData_841[2] + varData_860 | 0;
                varData_841[3] = varData_841[3] + varData_861 | 0;
              },
              _doFinalize: function () {
                var varData_862 = this._data;
                var varData_863 = varData_862.words;
                var varData_864 = this._nDataBytes * 8;
                var varData_865 = varData_862.sigBytes * 8;
                varData_863[varData_865 >>> 5] |= 128 << 24 - varData_865 % 32;
                var varData_866 = param_1_2.floor(varData_864 / 4294967296);
                var varData_867 = varData_864;
                varData_863[(varData_865 + 64 >>> 9 << 4) + 15] = (varData_866 << 8 | varData_866 >>> 24) & 16711935 | (varData_866 << 24 | varData_866 >>> 8) & -16711936;
                varData_863[(varData_865 + 64 >>> 9 << 4) + 14] = (varData_867 << 8 | varData_867 >>> 24) & 16711935 | (varData_867 << 24 | varData_867 >>> 8) & -16711936;
                varData_862.sigBytes = (varData_863.length + 1) * 4;
                this._process();
                var varData_868 = this._hash;
                var varData_869 = varData_868.words;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  var varData_870 = varData_869[loopIdx];
                  varData_869[loopIdx] = (varData_870 << 8 | varData_870 >>> 24) & 16711935 | (varData_870 << 24 | varData_870 >>> 8) & -16711936;
                }
                return varData_868;
              },
              clone: function () {
                var varData_871 = varData_835.clone.call(this);
                varData_871._hash = this._hash.clone();
                return varData_871;
              }
            });
            function handleAction_65(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_872 = param_1_3 + (param_2_1 & param_3 | ~param_2_1 & param_4) + param_5 + param_7;
              return (varData_872 << param_6 | varData_872 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_66(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_873 = param_1_3 + (param_2_1 & param_4 | param_3 & ~param_4) + param_5 + param_7;
              return (varData_873 << param_6 | varData_873 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_67(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_874 = param_1_3 + (param_2_1 ^ param_3 ^ param_4) + param_5 + param_7;
              return (varData_874 << param_6 | varData_874 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_68(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_875 = param_1_3 + (param_3 ^ (param_2_1 | ~param_4)) + param_5 + param_7;
              return (varData_875 << param_6 | varData_875 >>> 32 - param_6) + param_2_1;
            }
            varData_832.MD5 = varData_835._createHelper(varData_838);
            varData_832.HmacMD5 = varData_835._createHmacHelper(varData_838);
          })(Math);
          return param_1_1.MD5;
        });
      }
    });
    var varData_876 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_877 = param_1_1;
            var varData_878 = varData_877.lib;
            var varData_879 = varData_878.WordArray;
            var varData_880 = varData_878.Hasher;
            var varData_881 = varData_877.algo;
            var varData_882 = [];
            var varData_883 = varData_881.SHA1 = varData_880.extend({
              _doReset: function () {
                this._hash = new varData_879.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_884 = this._hash.words;
                var varData_885 = varData_884[0];
                var varData_886 = varData_884[1];
                var varData_887 = varData_884[2];
                var varData_888 = varData_884[3];
                var varData_889 = varData_884[4];
                for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                  if (loopIdx < 16) {
                    varData_882[loopIdx] = param_1_2[param_2_1 + loopIdx] | 0;
                  } else {
                    var varData_890 = varData_882[loopIdx - 3] ^ varData_882[loopIdx - 8] ^ varData_882[loopIdx - 14] ^ varData_882[loopIdx - 16];
                    varData_882[loopIdx] = varData_890 << 1 | varData_890 >>> 31;
                  }
                  var varData_891 = (varData_885 << 5 | varData_885 >>> 27) + varData_889 + varData_882[loopIdx];
                  if (loopIdx < 20) {
                    varData_891 += (varData_886 & varData_887 | ~varData_886 & varData_888) + 1518500249;
                  } else if (loopIdx < 40) {
                    varData_891 += (varData_886 ^ varData_887 ^ varData_888) + 1859775393;
                  } else if (loopIdx < 60) {
                    varData_891 += (varData_886 & varData_887 | varData_886 & varData_888 | varData_887 & varData_888) - 1894007588;
                  } else {
                    varData_891 += (varData_886 ^ varData_887 ^ varData_888) - 899497514;
                  }
                  varData_889 = varData_888;
                  varData_888 = varData_887;
                  varData_887 = varData_886 << 30 | varData_886 >>> 2;
                  varData_886 = varData_885;
                  varData_885 = varData_891;
                }
                varData_884[0] = varData_884[0] + varData_885 | 0;
                varData_884[1] = varData_884[1] + varData_886 | 0;
                varData_884[2] = varData_884[2] + varData_887 | 0;
                varData_884[3] = varData_884[3] + varData_888 | 0;
                varData_884[4] = varData_884[4] + varData_889 | 0;
              },
              _doFinalize: function () {
                var varData_892 = this._data;
                var varData_893 = varData_892.words;
                var varData_894 = this._nDataBytes * 8;
                var varData_895 = varData_892.sigBytes * 8;
                varData_893[varData_895 >>> 5] |= 128 << 24 - varData_895 % 32;
                varData_893[(varData_895 + 64 >>> 9 << 4) + 14] = Math.floor(varData_894 / 4294967296);
                varData_893[(varData_895 + 64 >>> 9 << 4) + 15] = varData_894;
                varData_892.sigBytes = varData_893.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var varData_896 = varData_880.clone.call(this);
                varData_896._hash = this._hash.clone();
                return varData_896;
              }
            });
            varData_877.SHA1 = varData_880._createHelper(varData_883);
            varData_877.HmacSHA1 = varData_880._createHmacHelper(varData_883);
          })();
          return param_1_1.SHA1;
        });
      }
    });
    var varData_897 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_898 = param_1_1;
            var varData_899 = varData_898.lib;
            var varData_900 = varData_899.WordArray;
            var varData_901 = varData_899.Hasher;
            var varData_902 = varData_898.algo;
            var varData_903 = [];
            var varData_904 = [];
            (function () {
              function handleAction_69(param_1_3) {
                var varData_905 = param_1_2.sqrt(param_1_3);
                for (var loopIdx = 2; loopIdx <= varData_905; loopIdx++) {
                  if (!(param_1_3 % loopIdx)) {
                    return false;
                  }
                }
                return true;
              }
              function handleAction_70(param_1_3) {
                return (param_1_3 - (param_1_3 | 0)) * 4294967296 | 0;
              }
              var varData_906 = 2;
              var varData_907 = 0;
              while (varData_907 < 64) {
                if (handleAction_69(varData_906)) {
                  if (varData_907 < 8) {
                    varData_903[varData_907] = handleAction_70(param_1_2.pow(varData_906, 1 / 2));
                  }
                  varData_904[varData_907] = handleAction_70(param_1_2.pow(varData_906, 1 / 3));
                  varData_907++;
                }
                varData_906++;
              }
            })();
            var varData_908 = [];
            var varData_909 = varData_902.SHA256 = varData_901.extend({
              _doReset: function () {
                this._hash = new varData_900.init(varData_903.slice(0));
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                var varData_910 = this._hash.words;
                var varData_911 = varData_910[0];
                var varData_912 = varData_910[1];
                var varData_913 = varData_910[2];
                var varData_914 = varData_910[3];
                var varData_915 = varData_910[4];
                var varData_916 = varData_910[5];
                var varData_917 = varData_910[6];
                var varData_918 = varData_910[7];
                for (var loopIdx = 0; loopIdx < 64; loopIdx++) {
                  if (loopIdx < 16) {
                    varData_908[loopIdx] = param_1_3[param_2_1 + loopIdx] | 0;
                  } else {
                    var varData_919 = varData_908[loopIdx - 15];
                    var varData_920 = (varData_919 << 25 | varData_919 >>> 7) ^ (varData_919 << 14 | varData_919 >>> 18) ^ varData_919 >>> 3;
                    var varData_921 = varData_908[loopIdx - 2];
                    var varData_922 = (varData_921 << 15 | varData_921 >>> 17) ^ (varData_921 << 13 | varData_921 >>> 19) ^ varData_921 >>> 10;
                    varData_908[loopIdx] = varData_920 + varData_908[loopIdx - 7] + varData_922 + varData_908[loopIdx - 16];
                  }
                  var varData_923 = varData_915 & varData_916 ^ ~varData_915 & varData_917;
                  var varData_924 = varData_911 & varData_912 ^ varData_911 & varData_913 ^ varData_912 & varData_913;
                  var varData_925 = (varData_911 << 30 | varData_911 >>> 2) ^ (varData_911 << 19 | varData_911 >>> 13) ^ (varData_911 << 10 | varData_911 >>> 22);
                  var varData_926 = (varData_915 << 26 | varData_915 >>> 6) ^ (varData_915 << 21 | varData_915 >>> 11) ^ (varData_915 << 7 | varData_915 >>> 25);
                  var varData_927 = varData_918 + varData_926 + varData_923 + varData_904[loopIdx] + varData_908[loopIdx];
                  var varData_928 = varData_925 + varData_924;
                  varData_918 = varData_917;
                  varData_917 = varData_916;
                  varData_916 = varData_915;
                  varData_915 = varData_914 + varData_927 | 0;
                  varData_914 = varData_913;
                  varData_913 = varData_912;
                  varData_912 = varData_911;
                  varData_911 = varData_927 + varData_928 | 0;
                }
                varData_910[0] = varData_910[0] + varData_911 | 0;
                varData_910[1] = varData_910[1] + varData_912 | 0;
                varData_910[2] = varData_910[2] + varData_913 | 0;
                varData_910[3] = varData_910[3] + varData_914 | 0;
                varData_910[4] = varData_910[4] + varData_915 | 0;
                varData_910[5] = varData_910[5] + varData_916 | 0;
                varData_910[6] = varData_910[6] + varData_917 | 0;
                varData_910[7] = varData_910[7] + varData_918 | 0;
              },
              _doFinalize: function () {
                var varData_929 = this._data;
                var varData_930 = varData_929.words;
                var varData_931 = this._nDataBytes * 8;
                var varData_932 = varData_929.sigBytes * 8;
                varData_930[varData_932 >>> 5] |= 128 << 24 - varData_932 % 32;
                varData_930[(varData_932 + 64 >>> 9 << 4) + 14] = param_1_2.floor(varData_931 / 4294967296);
                varData_930[(varData_932 + 64 >>> 9 << 4) + 15] = varData_931;
                varData_929.sigBytes = varData_930.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var varData_933 = varData_901.clone.call(this);
                varData_933._hash = this._hash.clone();
                return varData_933;
              }
            });
            varData_898.SHA256 = varData_901._createHelper(varData_909);
            varData_898.HmacSHA256 = varData_901._createHmacHelper(varData_909);
          })(Math);
          return param_1_1.SHA256;
        });
      }
    });
    var varData_934 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_897());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha256"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_935 = param_1_1;
            var varData_936 = varData_935.lib;
            var varData_937 = varData_936.WordArray;
            var varData_938 = varData_935.algo;
            var varData_939 = varData_938.SHA256;
            var varData_940 = varData_938.SHA224 = varData_939.extend({
              _doReset: function () {
                this._hash = new varData_937.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function () {
                var varData_941 = varData_939._doFinalize.call(this);
                varData_941.sigBytes -= 4;
                return varData_941;
              }
            });
            varData_935.SHA224 = varData_939._createHelper(varData_940);
            varData_935.HmacSHA224 = varData_939._createHmacHelper(varData_940);
          })();
          return param_1_1.SHA224;
        });
      }
    });
    var varData_942 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_765());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_943 = param_1_1;
            var varData_944 = varData_943.lib;
            var varData_945 = varData_944.Hasher;
            var varData_946 = varData_943.x64;
            var varData_947 = varData_946.Word;
            var varData_948 = varData_946.WordArray;
            var varData_949 = varData_943.algo;
            function handleAction_71() {
              return varData_947.create.apply(varData_947, arguments);
            }
            var varData_950 = [handleAction_71(1116352408, 3609767458), handleAction_71(1899447441, 602891725), handleAction_71(3049323471, 3964484399), handleAction_71(3921009573, 2173295548), handleAction_71(961987163, 4081628472), handleAction_71(1508970993, 3053834265), handleAction_71(2453635748, 2937671579), handleAction_71(2870763221, 3664609560), handleAction_71(3624381080, 2734883394), handleAction_71(310598401, 1164996542), handleAction_71(607225278, 1323610764), handleAction_71(1426881987, 3590304994), handleAction_71(1925078388, 4068182383), handleAction_71(2162078206, 991336113), handleAction_71(2614888103, 633803317), handleAction_71(3248222580, 3479774868), handleAction_71(3835390401, 2666613458), handleAction_71(4022224774, 944711139), handleAction_71(264347078, 2341262773), handleAction_71(604807628, 2007800933), handleAction_71(770255983, 1495990901), handleAction_71(1249150122, 1856431235), handleAction_71(1555081692, 3175218132), handleAction_71(1996064986, 2198950837), handleAction_71(2554220882, 3999719339), handleAction_71(2821834349, 766784016), handleAction_71(2952996808, 2566594879), handleAction_71(3210313671, 3203337956), handleAction_71(3336571891, 1034457026), handleAction_71(3584528711, 2466948901), handleAction_71(113926993, 3758326383), handleAction_71(338241895, 168717936), handleAction_71(666307205, 1188179964), handleAction_71(773529912, 1546045734), handleAction_71(1294757372, 1522805485), handleAction_71(1396182291, 2643833823), handleAction_71(1695183700, 2343527390), handleAction_71(1986661051, 1014477480), handleAction_71(2177026350, 1206759142), handleAction_71(2456956037, 344077627), handleAction_71(2730485921, 1290863460), handleAction_71(2820302411, 3158454273), handleAction_71(3259730800, 3505952657), handleAction_71(3345764771, 106217008), handleAction_71(3516065817, 3606008344), handleAction_71(3600352804, 1432725776), handleAction_71(4094571909, 1467031594), handleAction_71(275423344, 851169720), handleAction_71(430227734, 3100823752), handleAction_71(506948616, 1363258195), handleAction_71(659060556, 3750685593), handleAction_71(883997877, 3785050280), handleAction_71(958139571, 3318307427), handleAction_71(1322822218, 3812723403), handleAction_71(1537002063, 2003034995), handleAction_71(1747873779, 3602036899), handleAction_71(1955562222, 1575990012), handleAction_71(2024104815, 1125592928), handleAction_71(2227730452, 2716904306), handleAction_71(2361852424, 442776044), handleAction_71(2428436474, 593698344), handleAction_71(2756734187, 3733110249), handleAction_71(3204031479, 2999351573), handleAction_71(3329325298, 3815920427), handleAction_71(3391569614, 3928383900), handleAction_71(3515267271, 566280711), handleAction_71(3940187606, 3454069534), handleAction_71(4118630271, 4000239992), handleAction_71(116418474, 1914138554), handleAction_71(174292421, 2731055270), handleAction_71(289380356, 3203993006), handleAction_71(460393269, 320620315), handleAction_71(685471733, 587496836), handleAction_71(852142971, 1086792851), handleAction_71(1017036298, 365543100), handleAction_71(1126000580, 2618297676), handleAction_71(1288033470, 3409855158), handleAction_71(1501505948, 4234509866), handleAction_71(1607167915, 987167468), handleAction_71(1816402316, 1246189591)];
            var varData_951 = [];
            (function () {
              for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                varData_951[loopIdx] = handleAction_71();
              }
            })();
            var varData_952 = varData_949.SHA512 = varData_945.extend({
              _doReset: function () {
                this._hash = new varData_948.init([new varData_947.init(1779033703, 4089235720), new varData_947.init(3144134277, 2227873595), new varData_947.init(1013904242, 4271175723), new varData_947.init(2773480762, 1595750129), new varData_947.init(1359893119, 2917565137), new varData_947.init(2600822924, 725511199), new varData_947.init(528734635, 4215389547), new varData_947.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_953 = this._hash.words;
                var varData_954 = varData_953[0];
                var varData_955 = varData_953[1];
                var varData_956 = varData_953[2];
                var varData_957 = varData_953[3];
                var varData_958 = varData_953[4];
                var varData_959 = varData_953[5];
                var varData_960 = varData_953[6];
                var varData_961 = varData_953[7];
                var varData_962 = varData_954.high;
                var varData_963 = varData_954.low;
                var varData_964 = varData_955.high;
                var varData_965 = varData_955.low;
                var varData_966 = varData_956.high;
                var varData_967 = varData_956.low;
                var varData_968 = varData_957.high;
                var varData_969 = varData_957.low;
                var varData_970 = varData_958.high;
                var varData_971 = varData_958.low;
                var varData_972 = varData_959.high;
                var varData_973 = varData_959.low;
                var varData_974 = varData_960.high;
                var varData_975 = varData_960.low;
                var varData_976 = varData_961.high;
                var varData_977 = varData_961.low;
                var varData_978 = varData_962;
                var varData_979 = varData_963;
                var varData_980 = varData_964;
                var varData_981 = varData_965;
                var varData_982 = varData_966;
                var varData_983 = varData_967;
                var varData_984 = varData_968;
                var varData_985 = varData_969;
                var varData_986 = varData_970;
                var varData_987 = varData_971;
                var varData_988 = varData_972;
                var varData_989 = varData_973;
                var varData_990 = varData_974;
                var varData_991 = varData_975;
                var varData_992 = varData_976;
                var varData_993 = varData_977;
                for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                  var varData_994 = varData_951[loopIdx];
                  if (loopIdx < 16) {
                    var varData_995 = varData_994.high = param_1_2[param_2_1 + loopIdx * 2] | 0;
                    var varData_996 = varData_994.low = param_1_2[param_2_1 + loopIdx * 2 + 1] | 0;
                  } else {
                    var varData_997 = varData_951[loopIdx - 15];
                    var varData_998 = varData_997.high;
                    var varData_999 = varData_997.low;
                    var varData_1000 = (varData_998 >>> 1 | varData_999 << 31) ^ (varData_998 >>> 8 | varData_999 << 24) ^ varData_998 >>> 7;
                    var varData_1001 = (varData_999 >>> 1 | varData_998 << 31) ^ (varData_999 >>> 8 | varData_998 << 24) ^ (varData_999 >>> 7 | varData_998 << 25);
                    var varData_1002 = varData_951[loopIdx - 2];
                    var varData_1003 = varData_1002.high;
                    var varData_1004 = varData_1002.low;
                    var varData_1005 = (varData_1003 >>> 19 | varData_1004 << 13) ^ (varData_1003 << 3 | varData_1004 >>> 29) ^ varData_1003 >>> 6;
                    var varData_1006 = (varData_1004 >>> 19 | varData_1003 << 13) ^ (varData_1004 << 3 | varData_1003 >>> 29) ^ (varData_1004 >>> 6 | varData_1003 << 26);
                    var varData_1007 = varData_951[loopIdx - 7];
                    var varData_1008 = varData_1007.high;
                    var varData_1009 = varData_1007.low;
                    var varData_1010 = varData_951[loopIdx - 16];
                    var varData_1011 = varData_1010.high;
                    var varData_1012 = varData_1010.low;
                    var varData_996 = varData_1001 + varData_1009;
                    var varData_995 = varData_1000 + varData_1008 + (varData_996 >>> 0 < varData_1001 >>> 0 ? 1 : 0);
                    var varData_996 = varData_996 + varData_1006;
                    var varData_995 = varData_995 + varData_1005 + (varData_996 >>> 0 < varData_1006 >>> 0 ? 1 : 0);
                    var varData_996 = varData_996 + varData_1012;
                    var varData_995 = varData_995 + varData_1011 + (varData_996 >>> 0 < varData_1012 >>> 0 ? 1 : 0);
                    varData_994.high = varData_995;
                    varData_994.low = varData_996;
                  }
                  var varData_1013 = varData_986 & varData_988 ^ ~varData_986 & varData_990;
                  var varData_1014 = varData_987 & varData_989 ^ ~varData_987 & varData_991;
                  var varData_1015 = varData_978 & varData_980 ^ varData_978 & varData_982 ^ varData_980 & varData_982;
                  var varData_1016 = varData_979 & varData_981 ^ varData_979 & varData_983 ^ varData_981 & varData_983;
                  var varData_1017 = (varData_978 >>> 28 | varData_979 << 4) ^ (varData_978 << 30 | varData_979 >>> 2) ^ (varData_978 << 25 | varData_979 >>> 7);
                  var varData_1018 = (varData_979 >>> 28 | varData_978 << 4) ^ (varData_979 << 30 | varData_978 >>> 2) ^ (varData_979 << 25 | varData_978 >>> 7);
                  var varData_1019 = (varData_986 >>> 14 | varData_987 << 18) ^ (varData_986 >>> 18 | varData_987 << 14) ^ (varData_986 << 23 | varData_987 >>> 9);
                  var varData_1020 = (varData_987 >>> 14 | varData_986 << 18) ^ (varData_987 >>> 18 | varData_986 << 14) ^ (varData_987 << 23 | varData_986 >>> 9);
                  var varData_1021 = varData_950[loopIdx];
                  var varData_1022 = varData_1021.high;
                  var varData_1023 = varData_1021.low;
                  var varData_1024 = varData_993 + varData_1020;
                  var varData_1025 = varData_992 + varData_1019 + (varData_1024 >>> 0 < varData_993 >>> 0 ? 1 : 0);
                  var varData_1024 = varData_1024 + varData_1014;
                  var varData_1025 = varData_1025 + varData_1013 + (varData_1024 >>> 0 < varData_1014 >>> 0 ? 1 : 0);
                  var varData_1024 = varData_1024 + varData_1023;
                  var varData_1025 = varData_1025 + varData_1022 + (varData_1024 >>> 0 < varData_1023 >>> 0 ? 1 : 0);
                  var varData_1024 = varData_1024 + varData_996;
                  var varData_1025 = varData_1025 + varData_995 + (varData_1024 >>> 0 < varData_996 >>> 0 ? 1 : 0);
                  var varData_1026 = varData_1018 + varData_1016;
                  var varData_1027 = varData_1017 + varData_1015 + (varData_1026 >>> 0 < varData_1018 >>> 0 ? 1 : 0);
                  varData_992 = varData_990;
                  varData_993 = varData_991;
                  varData_990 = varData_988;
                  varData_991 = varData_989;
                  varData_988 = varData_986;
                  varData_989 = varData_987;
                  varData_987 = varData_985 + varData_1024 | 0;
                  varData_986 = varData_984 + varData_1025 + (varData_987 >>> 0 < varData_985 >>> 0 ? 1 : 0) | 0;
                  varData_984 = varData_982;
                  varData_985 = varData_983;
                  varData_982 = varData_980;
                  varData_983 = varData_981;
                  varData_980 = varData_978;
                  varData_981 = varData_979;
                  varData_979 = varData_1024 + varData_1026 | 0;
                  varData_978 = varData_1025 + varData_1027 + (varData_979 >>> 0 < varData_1024 >>> 0 ? 1 : 0) | 0;
                }
                varData_963 = varData_954.low = varData_963 + varData_979;
                varData_954.high = varData_962 + varData_978 + (varData_963 >>> 0 < varData_979 >>> 0 ? 1 : 0);
                varData_965 = varData_955.low = varData_965 + varData_981;
                varData_955.high = varData_964 + varData_980 + (varData_965 >>> 0 < varData_981 >>> 0 ? 1 : 0);
                varData_967 = varData_956.low = varData_967 + varData_983;
                varData_956.high = varData_966 + varData_982 + (varData_967 >>> 0 < varData_983 >>> 0 ? 1 : 0);
                varData_969 = varData_957.low = varData_969 + varData_985;
                varData_957.high = varData_968 + varData_984 + (varData_969 >>> 0 < varData_985 >>> 0 ? 1 : 0);
                varData_971 = varData_958.low = varData_971 + varData_987;
                varData_958.high = varData_970 + varData_986 + (varData_971 >>> 0 < varData_987 >>> 0 ? 1 : 0);
                varData_973 = varData_959.low = varData_973 + varData_989;
                varData_959.high = varData_972 + varData_988 + (varData_973 >>> 0 < varData_989 >>> 0 ? 1 : 0);
                varData_975 = varData_960.low = varData_975 + varData_991;
                varData_960.high = varData_974 + varData_990 + (varData_975 >>> 0 < varData_991 >>> 0 ? 1 : 0);
                varData_977 = varData_961.low = varData_977 + varData_993;
                varData_961.high = varData_976 + varData_992 + (varData_977 >>> 0 < varData_993 >>> 0 ? 1 : 0);
              },
              _doFinalize: function () {
                var varData_1028 = this._data;
                var varData_1029 = varData_1028.words;
                var varData_1030 = this._nDataBytes * 8;
                var varData_1031 = varData_1028.sigBytes * 8;
                varData_1029[varData_1031 >>> 5] |= 128 << 24 - varData_1031 % 32;
                varData_1029[(varData_1031 + 128 >>> 10 << 5) + 30] = Math.floor(varData_1030 / 4294967296);
                varData_1029[(varData_1031 + 128 >>> 10 << 5) + 31] = varData_1030;
                varData_1028.sigBytes = varData_1029.length * 4;
                this._process();
                var varData_1032 = this._hash.toX32();
                return varData_1032;
              },
              clone: function () {
                var varData_1033 = varData_945.clone.call(this);
                varData_1033._hash = this._hash.clone();
                return varData_1033;
              },
              blockSize: 32
            });
            varData_943.SHA512 = varData_945._createHelper(varData_952);
            varData_943.HmacSHA512 = varData_945._createHmacHelper(varData_952);
          })();
          return param_1_1.SHA512;
        });
      }
    });
    var varData_1034 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_765(), varData_942());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./sha512"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1035 = param_1_1;
            var varData_1036 = varData_1035.x64;
            var varData_1037 = varData_1036.Word;
            var varData_1038 = varData_1036.WordArray;
            var varData_1039 = varData_1035.algo;
            var varData_1040 = varData_1039.SHA512;
            var varData_1041 = varData_1039.SHA384 = varData_1040.extend({
              _doReset: function () {
                this._hash = new varData_1038.init([new varData_1037.init(3418070365, 3238371032), new varData_1037.init(1654270250, 914150663), new varData_1037.init(2438529370, 812702999), new varData_1037.init(355462360, 4144912697), new varData_1037.init(1731405415, 4290775857), new varData_1037.init(2394180231, 1750603025), new varData_1037.init(3675008525, 1694076839), new varData_1037.init(1203062813, 3204075428)]);
              },
              _doFinalize: function () {
                var varData_1042 = varData_1040._doFinalize.call(this);
                varData_1042.sigBytes -= 16;
                return varData_1042;
              }
            });
            varData_1035.SHA384 = varData_1040._createHelper(varData_1041);
            varData_1035.HmacSHA384 = varData_1040._createHmacHelper(varData_1041);
          })();
          return param_1_1.SHA384;
        });
      }
    });
    var varData_1043 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_765());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_1044 = param_1_1;
            var varData_1045 = varData_1044.lib;
            var varData_1046 = varData_1045.WordArray;
            var varData_1047 = varData_1045.Hasher;
            var varData_1048 = varData_1044.x64;
            var varData_1049 = varData_1048.Word;
            var varData_1050 = varData_1044.algo;
            var varData_1051 = [];
            var varData_1052 = [];
            var varData_1053 = [];
            (function () {
              var varData_1054 = 1;
              var varData_1055 = 0;
              for (var loopIdx = 0; loopIdx < 24; loopIdx++) {
                varData_1051[varData_1054 + varData_1055 * 5] = (loopIdx + 1) * (loopIdx + 2) / 2 % 64;
                var varData_1056 = varData_1055 % 5;
                var varData_1057 = (varData_1054 * 2 + varData_1055 * 3) % 5;
                varData_1054 = varData_1056;
                varData_1055 = varData_1057;
              }
              for (var varData_1054 = 0; varData_1054 < 5; varData_1054++) {
                for (var varData_1055 = 0; varData_1055 < 5; varData_1055++) {
                  varData_1052[varData_1054 + varData_1055 * 5] = varData_1055 + (varData_1054 * 2 + varData_1055 * 3) % 5 * 5;
                }
              }
              var varData_1058 = 1;
              for (var loopIdx_1 = 0; loopIdx_1 < 24; loopIdx_1++) {
                var varData_1059 = 0;
                var varData_1060 = 0;
                for (var loopIdx_2 = 0; loopIdx_2 < 7; loopIdx_2++) {
                  if (varData_1058 & 1) {
                    var varData_1061 = (1 << loopIdx_2) - 1;
                    if (varData_1061 < 32) {
                      varData_1060 ^= 1 << varData_1061;
                    } else {
                      varData_1059 ^= 1 << varData_1061 - 32;
                    }
                  }
                  if (varData_1058 & 128) {
                    varData_1058 = varData_1058 << 1 ^ 113;
                  } else {
                    varData_1058 <<= 1;
                  }
                }
                varData_1053[loopIdx_1] = varData_1049.create(varData_1059, varData_1060);
              }
            })();
            var varData_1062 = [];
            (function () {
              for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                varData_1062[loopIdx] = varData_1049.create();
              }
            })();
            var varData_1063 = varData_1050.SHA3 = varData_1047.extend({
              cfg: varData_1047.cfg.extend({
                outputLength: 512
              }),
              _doReset: function () {
                var varData_1064 = this._state = [];
                for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                  varData_1064[loopIdx] = new varData_1049.init();
                }
                this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                var varData_1065 = this._state;
                var varData_1066 = this.blockSize / 2;
                for (var loopIdx = 0; loopIdx < varData_1066; loopIdx++) {
                  var varData_1067 = param_1_3[param_2_1 + loopIdx * 2];
                  var varData_1068 = param_1_3[param_2_1 + loopIdx * 2 + 1];
                  varData_1067 = (varData_1067 << 8 | varData_1067 >>> 24) & 16711935 | (varData_1067 << 24 | varData_1067 >>> 8) & -16711936;
                  varData_1068 = (varData_1068 << 8 | varData_1068 >>> 24) & 16711935 | (varData_1068 << 24 | varData_1068 >>> 8) & -16711936;
                  var varData_1069 = varData_1065[loopIdx];
                  varData_1069.high ^= varData_1068;
                  varData_1069.low ^= varData_1067;
                }
                for (var loopIdx_1 = 0; loopIdx_1 < 24; loopIdx_1++) {
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    var varData_1070 = 0;
                    var varData_1071 = 0;
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var varData_1069 = varData_1065[loopIdx_2 + loopIdx_3 * 5];
                      varData_1070 ^= varData_1069.high;
                      varData_1071 ^= varData_1069.low;
                    }
                    var varData_1072 = varData_1062[loopIdx_2];
                    varData_1072.high = varData_1070;
                    varData_1072.low = varData_1071;
                  }
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    var varData_1073 = varData_1062[(loopIdx_2 + 4) % 5];
                    var varData_1074 = varData_1062[(loopIdx_2 + 1) % 5];
                    var varData_1075 = varData_1074.high;
                    var varData_1076 = varData_1074.low;
                    var varData_1070 = varData_1073.high ^ (varData_1075 << 1 | varData_1076 >>> 31);
                    var varData_1071 = varData_1073.low ^ (varData_1076 << 1 | varData_1075 >>> 31);
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var varData_1069 = varData_1065[loopIdx_2 + loopIdx_3 * 5];
                      varData_1069.high ^= varData_1070;
                      varData_1069.low ^= varData_1071;
                    }
                  }
                  for (var loopIdx_4 = 1; loopIdx_4 < 25; loopIdx_4++) {
                    var varData_1069 = varData_1065[loopIdx_4];
                    var varData_1077 = varData_1069.high;
                    var varData_1078 = varData_1069.low;
                    var varData_1079 = varData_1051[loopIdx_4];
                    if (varData_1079 < 32) {
                      var varData_1070 = varData_1077 << varData_1079 | varData_1078 >>> 32 - varData_1079;
                      var varData_1071 = varData_1078 << varData_1079 | varData_1077 >>> 32 - varData_1079;
                    } else {
                      var varData_1070 = varData_1078 << varData_1079 - 32 | varData_1077 >>> 64 - varData_1079;
                      var varData_1071 = varData_1077 << varData_1079 - 32 | varData_1078 >>> 64 - varData_1079;
                    }
                    var varData_1080 = varData_1062[varData_1052[loopIdx_4]];
                    varData_1080.high = varData_1070;
                    varData_1080.low = varData_1071;
                  }
                  var varData_1081 = varData_1062[0];
                  var varData_1082 = varData_1065[0];
                  varData_1081.high = varData_1082.high;
                  varData_1081.low = varData_1082.low;
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var loopIdx_4 = loopIdx_2 + loopIdx_3 * 5;
                      var varData_1069 = varData_1065[loopIdx_4];
                      var varData_1083 = varData_1062[loopIdx_4];
                      var varData_1084 = varData_1062[(loopIdx_2 + 1) % 5 + loopIdx_3 * 5];
                      var varData_1085 = varData_1062[(loopIdx_2 + 2) % 5 + loopIdx_3 * 5];
                      varData_1069.high = varData_1083.high ^ ~varData_1084.high & varData_1085.high;
                      varData_1069.low = varData_1083.low ^ ~varData_1084.low & varData_1085.low;
                    }
                  }
                  var varData_1069 = varData_1065[0];
                  var varData_1086 = varData_1053[loopIdx_1];
                  varData_1069.high ^= varData_1086.high;
                  varData_1069.low ^= varData_1086.low;
                  ;
                }
              },
              _doFinalize: function () {
                var varData_1087 = this._data;
                var varData_1088 = varData_1087.words;
                var varData_1089 = this._nDataBytes * 8;
                var varData_1090 = varData_1087.sigBytes * 8;
                var varData_1091 = this.blockSize * 32;
                varData_1088[varData_1090 >>> 5] |= 1 << 24 - varData_1090 % 32;
                varData_1088[(param_1_2.ceil((varData_1090 + 1) / varData_1091) * varData_1091 >>> 5) - 1] |= 128;
                varData_1087.sigBytes = varData_1088.length * 4;
                this._process();
                var varData_1092 = this._state;
                var varData_1093 = this.cfg.outputLength / 8;
                var varData_1094 = varData_1093 / 8;
                var varData_1095 = [];
                for (var loopIdx = 0; loopIdx < varData_1094; loopIdx++) {
                  var varData_1096 = varData_1092[loopIdx];
                  var varData_1097 = varData_1096.high;
                  var varData_1098 = varData_1096.low;
                  varData_1097 = (varData_1097 << 8 | varData_1097 >>> 24) & 16711935 | (varData_1097 << 24 | varData_1097 >>> 8) & -16711936;
                  varData_1098 = (varData_1098 << 8 | varData_1098 >>> 24) & 16711935 | (varData_1098 << 24 | varData_1098 >>> 8) & -16711936;
                  varData_1095.push(varData_1098);
                  varData_1095.push(varData_1097);
                }
                return new varData_1046.init(varData_1095, varData_1093);
              },
              clone: function () {
                var varData_1099 = varData_1047.clone.call(this);
                var varData_1100 = varData_1099._state = this._state.slice(0);
                for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                  varData_1100[loopIdx] = varData_1100[loopIdx].clone();
                }
                return varData_1099;
              }
            });
            varData_1044.SHA3 = varData_1047._createHelper(varData_1063);
            varData_1044.HmacSHA3 = varData_1047._createHmacHelper(varData_1063);
          })(Math);
          return param_1_1.SHA3;
        });
      }
    });
    var varData_1101 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_1102 = param_1_1;
            var varData_1103 = varData_1102.lib;
            var varData_1104 = varData_1103.WordArray;
            var varData_1105 = varData_1103.Hasher;
            var varData_1106 = varData_1102.algo;
            var varData_1107 = varData_1104.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
            var varData_1108 = varData_1104.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
            var varData_1109 = varData_1104.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
            var varData_1110 = varData_1104.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
            var varData_1111 = varData_1104.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
            var varData_1112 = varData_1104.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            var varData_1113 = varData_1106.RIPEMD160 = varData_1105.extend({
              _doReset: function () {
                this._hash = varData_1104.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_1114 = param_2_1 + loopIdx;
                  var varData_1115 = param_1_3[varData_1114];
                  param_1_3[varData_1114] = (varData_1115 << 8 | varData_1115 >>> 24) & 16711935 | (varData_1115 << 24 | varData_1115 >>> 8) & -16711936;
                }
                var varData_1116 = this._hash.words;
                var varData_1117 = varData_1111.words;
                var varData_1118 = varData_1112.words;
                var varData_1119 = varData_1107.words;
                var varData_1120 = varData_1108.words;
                var varData_1121 = varData_1109.words;
                var varData_1122 = varData_1110.words;
                var varData_1123;
                var varData_1124;
                var varData_1125;
                var varData_1126;
                var varData_1127;
                var varData_1128;
                var varData_1129;
                var varData_1130;
                var varData_1131;
                var varData_1132;
                varData_1128 = varData_1123 = varData_1116[0];
                varData_1129 = varData_1124 = varData_1116[1];
                varData_1130 = varData_1125 = varData_1116[2];
                varData_1131 = varData_1126 = varData_1116[3];
                varData_1132 = varData_1127 = varData_1116[4];
                var varData_1133;
                for (var loopIdx = 0; loopIdx < 80; loopIdx += 1) {
                  varData_1133 = varData_1123 + param_1_3[param_2_1 + varData_1119[loopIdx]] | 0;
                  if (loopIdx < 16) {
                    varData_1133 += handleAction_72(varData_1124, varData_1125, varData_1126) + varData_1117[0];
                  } else if (loopIdx < 32) {
                    varData_1133 += handleAction_73(varData_1124, varData_1125, varData_1126) + varData_1117[1];
                  } else if (loopIdx < 48) {
                    varData_1133 += handleAction_74(varData_1124, varData_1125, varData_1126) + varData_1117[2];
                  } else if (loopIdx < 64) {
                    varData_1133 += handleAction_75(varData_1124, varData_1125, varData_1126) + varData_1117[3];
                  } else {
                    varData_1133 += handleAction_76(varData_1124, varData_1125, varData_1126) + varData_1117[4];
                  }
                  varData_1133 = varData_1133 | 0;
                  varData_1133 = handleAction_77(varData_1133, varData_1121[loopIdx]);
                  varData_1133 = varData_1133 + varData_1127 | 0;
                  varData_1123 = varData_1127;
                  varData_1127 = varData_1126;
                  varData_1126 = handleAction_77(varData_1125, 10);
                  varData_1125 = varData_1124;
                  varData_1124 = varData_1133;
                  varData_1133 = varData_1128 + param_1_3[param_2_1 + varData_1120[loopIdx]] | 0;
                  if (loopIdx < 16) {
                    varData_1133 += handleAction_76(varData_1129, varData_1130, varData_1131) + varData_1118[0];
                  } else if (loopIdx < 32) {
                    varData_1133 += handleAction_75(varData_1129, varData_1130, varData_1131) + varData_1118[1];
                  } else if (loopIdx < 48) {
                    varData_1133 += handleAction_74(varData_1129, varData_1130, varData_1131) + varData_1118[2];
                  } else if (loopIdx < 64) {
                    varData_1133 += handleAction_73(varData_1129, varData_1130, varData_1131) + varData_1118[3];
                  } else {
                    varData_1133 += handleAction_72(varData_1129, varData_1130, varData_1131) + varData_1118[4];
                  }
                  varData_1133 = varData_1133 | 0;
                  varData_1133 = handleAction_77(varData_1133, varData_1122[loopIdx]);
                  varData_1133 = varData_1133 + varData_1132 | 0;
                  varData_1128 = varData_1132;
                  varData_1132 = varData_1131;
                  varData_1131 = handleAction_77(varData_1130, 10);
                  varData_1130 = varData_1129;
                  varData_1129 = varData_1133;
                }
                varData_1133 = varData_1116[1] + varData_1125 + varData_1131 | 0;
                varData_1116[1] = varData_1116[2] + varData_1126 + varData_1132 | 0;
                varData_1116[2] = varData_1116[3] + varData_1127 + varData_1128 | 0;
                varData_1116[3] = varData_1116[4] + varData_1123 + varData_1129 | 0;
                varData_1116[4] = varData_1116[0] + varData_1124 + varData_1130 | 0;
                varData_1116[0] = varData_1133;
              },
              _doFinalize: function () {
                var varData_1134 = this._data;
                var varData_1135 = varData_1134.words;
                var varData_1136 = this._nDataBytes * 8;
                var varData_1137 = varData_1134.sigBytes * 8;
                varData_1135[varData_1137 >>> 5] |= 128 << 24 - varData_1137 % 32;
                varData_1135[(varData_1137 + 64 >>> 9 << 4) + 14] = (varData_1136 << 8 | varData_1136 >>> 24) & 16711935 | (varData_1136 << 24 | varData_1136 >>> 8) & -16711936;
                varData_1134.sigBytes = (varData_1135.length + 1) * 4;
                this._process();
                var varData_1138 = this._hash;
                var varData_1139 = varData_1138.words;
                for (var loopIdx = 0; loopIdx < 5; loopIdx++) {
                  var varData_1140 = varData_1139[loopIdx];
                  varData_1139[loopIdx] = (varData_1140 << 8 | varData_1140 >>> 24) & 16711935 | (varData_1140 << 24 | varData_1140 >>> 8) & -16711936;
                }
                return varData_1138;
              },
              clone: function () {
                var varData_1141 = varData_1105.clone.call(this);
                varData_1141._hash = this._hash.clone();
                return varData_1141;
              }
            });
            function handleAction_72(param_1_3, param_2_1, param_3) {
              return param_1_3 ^ param_2_1 ^ param_3;
            }
            function handleAction_73(param_1_3, param_2_1, param_3) {
              return param_1_3 & param_2_1 | ~param_1_3 & param_3;
            }
            function handleAction_74(param_1_3, param_2_1, param_3) {
              return (param_1_3 | ~param_2_1) ^ param_3;
            }
            function handleAction_75(param_1_3, param_2_1, param_3) {
              return param_1_3 & param_3 | param_2_1 & ~param_3;
            }
            function handleAction_76(param_1_3, param_2_1, param_3) {
              return param_1_3 ^ (param_2_1 | ~param_3);
            }
            function handleAction_77(param_1_3, param_2_1) {
              return param_1_3 << param_2_1 | param_1_3 >>> 32 - param_2_1;
            }
            varData_1102.RIPEMD160 = varData_1105._createHelper(varData_1113);
            varData_1102.HmacRIPEMD160 = varData_1105._createHmacHelper(varData_1113);
          })(Math);
          return param_1_1.RIPEMD160;
        });
      }
    });
    var varData_1142 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1143 = param_1_1;
            var varData_1144 = varData_1143.lib;
            var varData_1145 = varData_1144.Base;
            var varData_1146 = varData_1143.enc;
            var varData_1147 = varData_1146.Utf8;
            var varData_1148 = varData_1143.algo;
            var varData_1149 = varData_1148.HMAC = varData_1145.extend({
              init: function (param_1_2, param_2_1) {
                param_1_2 = this._hasher = new param_1_2.init();
                if (typeof param_2_1 == "string") {
                  param_2_1 = varData_1147.parse(param_2_1);
                }
                var varData_1150 = param_1_2.blockSize;
                var varData_1151 = varData_1150 * 4;
                if (param_2_1.sigBytes > varData_1151) {
                  param_2_1 = param_1_2.finalize(param_2_1);
                }
                param_2_1.clamp();
                var varData_1152 = this._oKey = param_2_1.clone();
                var varData_1153 = this._iKey = param_2_1.clone();
                var varData_1154 = varData_1152.words;
                var varData_1155 = varData_1153.words;
                for (var loopIdx = 0; loopIdx < varData_1150; loopIdx++) {
                  varData_1154[loopIdx] ^= 1549556828;
                  varData_1155[loopIdx] ^= 909522486;
                }
                varData_1152.sigBytes = varData_1153.sigBytes = varData_1151;
                this.reset();
              },
              reset: function () {
                var varData_1156 = this._hasher;
                varData_1156.reset();
                varData_1156.update(this._iKey);
              },
              update: function (param_1_2) {
                this._hasher.update(param_1_2);
                return this;
              },
              finalize: function (param_1_2) {
                var varData_1157 = this._hasher;
                var varData_1158 = varData_1157.finalize(param_1_2);
                varData_1157.reset();
                var varData_1159 = varData_1157.finalize(this._oKey.clone().concat(varData_1158));
                return varData_1159;
              }
            });
          })();
        });
      }
    });
    var varData_1160 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_876(), varData_1142());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1161 = param_1_1;
            var varData_1162 = varData_1161.lib;
            var varData_1163 = varData_1162.Base;
            var varData_1164 = varData_1162.WordArray;
            var varData_1165 = varData_1161.algo;
            var varData_1166 = varData_1165.SHA1;
            var varData_1167 = varData_1165.HMAC;
            var varData_1168 = {
              keySize: 4,
              hasher: varData_1166,
              iterations: 1
            };
            var varData_1169 = varData_1165.PBKDF2 = varData_1163.extend({
              cfg: varData_1163.extend(varData_1168),
              init: function (param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function (param_1_2, param_2_1) {
                var varData_1170 = this.cfg;
                var varData_1171 = varData_1167.create(varData_1170.hasher, param_1_2);
                var varData_1172 = varData_1164.create();
                var varData_1173 = varData_1164.create([1]);
                var varData_1174 = varData_1172.words;
                var varData_1175 = varData_1173.words;
                var varData_1176 = varData_1170.keySize;
                var varData_1177 = varData_1170.iterations;
                while (varData_1174.length < varData_1176) {
                  var varData_1178 = varData_1171.update(param_2_1).finalize(varData_1173);
                  varData_1171.reset();
                  var varData_1179 = varData_1178.words;
                  var varData_1180 = varData_1179.length;
                  var varData_1181 = varData_1178;
                  for (var loopIdx = 1; loopIdx < varData_1177; loopIdx++) {
                    varData_1181 = varData_1171.finalize(varData_1181);
                    varData_1171.reset();
                    var varData_1182 = varData_1181.words;
                    for (var loopIdx_1 = 0; loopIdx_1 < varData_1180; loopIdx_1++) {
                      varData_1179[loopIdx_1] ^= varData_1182[loopIdx_1];
                    }
                  }
                  varData_1172.concat(varData_1178);
                  varData_1175[0]++;
                }
                varData_1172.sigBytes = varData_1176 * 4;
                return varData_1172;
              }
            });
            varData_1161.PBKDF2 = function (param_1_2, param_2_1, param_3) {
              return varData_1169.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.PBKDF2;
        });
      }
    });
    var varData_1183 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_876(), varData_1142());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1184 = param_1_1;
            var varData_1185 = varData_1184.lib;
            var varData_1186 = varData_1185.Base;
            var varData_1187 = varData_1185.WordArray;
            var varData_1188 = varData_1184.algo;
            var varData_1189 = varData_1188.MD5;
            var varData_1190 = {
              keySize: 4,
              hasher: varData_1189,
              iterations: 1
            };
            var varData_1191 = varData_1188.EvpKDF = varData_1186.extend({
              cfg: varData_1186.extend(varData_1190),
              init: function (param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function (param_1_2, param_2_1) {
                var varData_1192 = this.cfg;
                var varData_1193 = varData_1192.hasher.create();
                var varData_1194 = varData_1187.create();
                var varData_1195 = varData_1194.words;
                var varData_1196 = varData_1192.keySize;
                var varData_1197 = varData_1192.iterations;
                while (varData_1195.length < varData_1196) {
                  if (varData_1198) {
                    varData_1193.update(varData_1198);
                  }
                  var varData_1198 = varData_1193.update(param_1_2).finalize(param_2_1);
                  varData_1193.reset();
                  for (var loopIdx = 1; loopIdx < varData_1197; loopIdx++) {
                    varData_1198 = varData_1193.finalize(varData_1198);
                    varData_1193.reset();
                  }
                  varData_1194.concat(varData_1198);
                }
                varData_1194.sigBytes = varData_1196 * 4;
                return varData_1194;
              }
            });
            varData_1184.EvpKDF = function (param_1_2, param_2_1, param_3) {
              return varData_1191.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.EvpKDF;
        });
      }
    });
    var varData_1199 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1183());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./evpkdf"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          if (!param_1_1.lib.Cipher) {
            (function (param_1_2) {
              var varData_1200 = param_1_1;
              var varData_1201 = varData_1200.lib;
              var varData_1202 = varData_1201.Base;
              var varData_1203 = varData_1201.WordArray;
              var varData_1204 = varData_1201.BufferedBlockAlgorithm;
              var varData_1205 = varData_1200.enc;
              var varData_1206 = varData_1205.Utf8;
              var varData_1207 = varData_1205.Base64;
              var varData_1208 = varData_1200.algo;
              var varData_1209 = varData_1208.EvpKDF;
              var varData_1210 = varData_1201.Cipher = varData_1204.extend({
                cfg: varData_1202.extend(),
                createEncryptor: function (param_1_3, param_2_1) {
                  return this.create(this._ENC_XFORM_MODE, param_1_3, param_2_1);
                },
                createDecryptor: function (param_1_3, param_2_1) {
                  return this.create(this._DEC_XFORM_MODE, param_1_3, param_2_1);
                },
                init: function (param_1_3, param_2_1, param_3) {
                  this.cfg = this.cfg.extend(param_3);
                  this._xformMode = param_1_3;
                  this._key = param_2_1;
                  this.reset();
                },
                reset: function () {
                  varData_1204.reset.call(this);
                  this._doReset();
                },
                process: function (param_1_3) {
                  this._append(param_1_3);
                  return this._process();
                },
                finalize: function (param_1_3) {
                  if (param_1_3) {
                    this._append(param_1_3);
                  }
                  var varData_1211 = this._doFinalize();
                  return varData_1211;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function () {
                  function handleAction_78(param_1_3) {
                    if (typeof param_1_3 == "string") {
                      return varData_1265;
                    } else {
                      return varData_1252;
                    }
                  }
                  return function (param_1_3) {
                    return {
                      encrypt: function (param_1_4, param_2_1, param_3) {
                        return handleAction_78(param_2_1).encrypt(param_1_3, param_1_4, param_2_1, param_3);
                      },
                      decrypt: function (param_1_4, param_2_1, param_3) {
                        return handleAction_78(param_2_1).decrypt(param_1_3, param_1_4, param_2_1, param_3);
                      }
                    };
                  };
                }()
              });
              var varData_1212 = varData_1201.StreamCipher = varData_1210.extend({
                _doFinalize: function () {
                  var varData_1213 = this._process(true);
                  return varData_1213;
                },
                blockSize: 1
              });
              var varData_1214 = varData_1200.mode = {};
              var varData_1215 = varData_1201.BlockCipherMode = varData_1202.extend({
                createEncryptor: function (param_1_3, param_2_1) {
                  return this.Encryptor.create(param_1_3, param_2_1);
                },
                createDecryptor: function (param_1_3, param_2_1) {
                  return this.Decryptor.create(param_1_3, param_2_1);
                },
                init: function (param_1_3, param_2_1) {
                  this._cipher = param_1_3;
                  this._iv = param_2_1;
                }
              });
              var varData_1216 = varData_1214.CBC = function () {
                var varData_1217 = varData_1215.extend();
                varData_1217.Encryptor = varData_1217.extend({
                  processBlock: function (param_1_3, param_2_1) {
                    var varData_1218 = this._cipher;
                    var varData_1219 = varData_1218.blockSize;
                    handleAction_79.call(this, param_1_3, param_2_1, varData_1219);
                    varData_1218.encryptBlock(param_1_3, param_2_1);
                    this._prevBlock = param_1_3.slice(param_2_1, param_2_1 + varData_1219);
                  }
                });
                varData_1217.Decryptor = varData_1217.extend({
                  processBlock: function (param_1_3, param_2_1) {
                    var varData_1220 = this._cipher;
                    var varData_1221 = varData_1220.blockSize;
                    var varData_1222 = param_1_3.slice(param_2_1, param_2_1 + varData_1221);
                    varData_1220.decryptBlock(param_1_3, param_2_1);
                    handleAction_79.call(this, param_1_3, param_2_1, varData_1221);
                    this._prevBlock = varData_1222;
                  }
                });
                function handleAction_79(param_1_3, param_2_1, param_3) {
                  var varData_1223 = this._iv;
                  if (varData_1223) {
                    var varData_1224 = varData_1223;
                    this._iv = param_1_2;
                  } else {
                    var varData_1224 = this._prevBlock;
                  }
                  for (var loopIdx = 0; loopIdx < param_3; loopIdx++) {
                    param_1_3[param_2_1 + loopIdx] ^= varData_1224[loopIdx];
                  }
                }
                return varData_1217;
              }();
              var varData_1225 = varData_1200.pad = {};
              var varData_1226 = varData_1225.Pkcs7 = {
                pad: function (param_1_3, param_2_1) {
                  var varData_1227 = param_2_1 * 4;
                  var varData_1228 = varData_1227 - param_1_3.sigBytes % varData_1227;
                  var varData_1229 = varData_1228 << 24 | varData_1228 << 16 | varData_1228 << 8 | varData_1228;
                  var varData_1230 = [];
                  for (var loopIdx = 0; loopIdx < varData_1228; loopIdx += 4) {
                    varData_1230.push(varData_1229);
                  }
                  var varData_1231 = varData_1203.create(varData_1230, varData_1228);
                  param_1_3.concat(varData_1231);
                },
                unpad: function (param_1_3) {
                  var varData_1232 = param_1_3.words[param_1_3.sigBytes - 1 >>> 2] & 255;
                  param_1_3.sigBytes -= varData_1232;
                }
              };
              var varData_1233 = {
                mode: varData_1216,
                padding: varData_1226
              };
              var varData_1234 = varData_1201.BlockCipher = varData_1210.extend({
                cfg: varData_1210.cfg.extend(varData_1233),
                reset: function () {
                  varData_1210.reset.call(this);
                  var varData_1235 = this.cfg;
                  var varData_1236 = varData_1235.iv;
                  var varData_1237 = varData_1235.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var varData_1238 = varData_1237.createEncryptor;
                  } else {
                    var varData_1238 = varData_1237.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == varData_1238) {
                    this._mode.init(this, varData_1236 && varData_1236.words);
                  } else {
                    this._mode = varData_1238.call(varData_1237, this, varData_1236 && varData_1236.words);
                    this._mode.__creator = varData_1238;
                  }
                },
                _doProcessBlock: function (param_1_3, param_2_1) {
                  this._mode.processBlock(param_1_3, param_2_1);
                },
                _doFinalize: function () {
                  var varData_1239 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    varData_1239.pad(this._data, this.blockSize);
                    var varData_1240 = this._process(true);
                  } else {
                    var varData_1240 = this._process(true);
                    varData_1239.unpad(varData_1240);
                  }
                  return varData_1240;
                },
                blockSize: 4
              });
              var varData_1241 = varData_1201.CipherParams = varData_1202.extend({
                init: function (param_1_3) {
                  this.mixIn(param_1_3);
                },
                toString: function (param_1_3) {
                  return (param_1_3 || this.formatter).stringify(this);
                }
              });
              var varData_1242 = varData_1200.format = {};
              var varData_1243 = varData_1242.OpenSSL = {
                stringify: function (param_1_3) {
                  var varData_1244 = param_1_3.ciphertext;
                  var varData_1245 = param_1_3.salt;
                  if (varData_1245) {
                    var varData_1246 = varData_1203.create([1398893684, 1701076831]).concat(varData_1245).concat(varData_1244);
                  } else {
                    var varData_1246 = varData_1244;
                  }
                  return varData_1246.toString(varData_1207);
                },
                parse: function (param_1_3) {
                  var varData_1247 = varData_1207.parse(param_1_3);
                  var varData_1248 = varData_1247.words;
                  if (varData_1248[0] == 1398893684 && varData_1248[1] == 1701076831) {
                    var varData_1249 = varData_1203.create(varData_1248.slice(2, 4));
                    varData_1248.splice(0, 4);
                    varData_1247.sigBytes -= 16;
                  }
                  var varData_1250 = {
                    ciphertext: varData_1247,
                    salt: varData_1249
                  };
                  return varData_1241.create(varData_1250);
                }
              };
              var varData_1251 = {
                format: varData_1243
              };
              var varData_1252 = varData_1201.SerializableCipher = varData_1202.extend({
                cfg: varData_1202.extend(varData_1251),
                encrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1253 = param_1_3.createEncryptor(param_3, param_4);
                  var varData_1254 = varData_1253.finalize(param_2_1);
                  var varData_1255 = varData_1253.cfg;
                  var varData_1256 = {
                    ciphertext: varData_1254,
                    key: param_3,
                    iv: varData_1255.iv,
                    algorithm: param_1_3,
                    mode: varData_1255.mode,
                    padding: varData_1255.padding,
                    blockSize: param_1_3.blockSize,
                    formatter: param_4.format
                  };
                  return varData_1241.create(varData_1256);
                },
                decrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1257 = param_1_3.createDecryptor(param_3, param_4).finalize(param_2_1.ciphertext);
                  return varData_1257;
                },
                _parse: function (param_1_3, param_2_1) {
                  if (typeof param_1_3 == "string") {
                    return param_2_1.parse(param_1_3, this);
                  } else {
                    return param_1_3;
                  }
                }
              });
              var varData_1258 = varData_1200.kdf = {};
              var varData_1259 = varData_1258.OpenSSL = {
                execute: function (param_1_3, param_2_1, param_3, param_4) {
                  if (!param_4) {
                    param_4 = varData_1203.random(8);
                  }
                  var varData_1260 = {
                    keySize: param_2_1 + param_3
                  };
                  var varData_1261 = varData_1209.create(varData_1260).compute(param_1_3, param_4);
                  var varData_1262 = varData_1203.create(varData_1261.words.slice(param_2_1), param_3 * 4);
                  varData_1261.sigBytes = param_2_1 * 4;
                  var varData_1263 = {
                    key: varData_1261,
                    iv: varData_1262,
                    salt: param_4
                  };
                  return varData_1241.create(varData_1263);
                }
              };
              var varData_1264 = {
                kdf: varData_1259
              };
              var varData_1265 = varData_1201.PasswordBasedCipher = varData_1252.extend({
                cfg: varData_1252.cfg.extend(varData_1264),
                encrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1266 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize);
                  param_4.iv = varData_1266.iv;
                  var varData_1267 = varData_1252.encrypt.call(this, param_1_3, param_2_1, varData_1266.key, param_4);
                  varData_1267.mixIn(varData_1266);
                  return varData_1267;
                },
                decrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1268 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize, param_2_1.salt);
                  param_4.iv = varData_1268.iv;
                  var varData_1269 = varData_1252.decrypt.call(this, param_1_3, param_2_1, varData_1268.key, param_4);
                  return varData_1269;
                }
              });
            })();
          }
        });
      }
    });
    var varData_1270 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.CFB = function () {
            var varData_1271 = param_1_1.lib.BlockCipherMode.extend();
            varData_1271.Encryptor = varData_1271.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1272 = this._cipher;
                var varData_1273 = varData_1272.blockSize;
                handleAction_80.call(this, param_1_2, param_2_1, varData_1273, varData_1272);
                this._prevBlock = param_1_2.slice(param_2_1, param_2_1 + varData_1273);
              }
            });
            varData_1271.Decryptor = varData_1271.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1274 = this._cipher;
                var varData_1275 = varData_1274.blockSize;
                var varData_1276 = param_1_2.slice(param_2_1, param_2_1 + varData_1275);
                handleAction_80.call(this, param_1_2, param_2_1, varData_1275, varData_1274);
                this._prevBlock = varData_1276;
              }
            });
            function handleAction_80(param_1_2, param_2_1, param_3, param_4) {
              var varData_1277 = this._iv;
              if (varData_1277) {
                var varData_1278 = varData_1277.slice(0);
                this._iv = undefined;
              } else {
                var varData_1278 = this._prevBlock;
              }
              param_4.encryptBlock(varData_1278, 0);
              for (var loopIdx = 0; loopIdx < param_3; loopIdx++) {
                param_1_2[param_2_1 + loopIdx] ^= varData_1278[loopIdx];
              }
            }
            return varData_1271;
          }();
          return param_1_1.mode.CFB;
        });
      }
    });
    var varData_1279 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.CTR = function () {
            var varData_1280 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1281 = varData_1280.Encryptor = varData_1280.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1282 = this._cipher;
                var varData_1283 = varData_1282.blockSize;
                var varData_1284 = this._iv;
                var varData_1285 = this._counter;
                if (varData_1284) {
                  varData_1285 = this._counter = varData_1284.slice(0);
                  this._iv = undefined;
                }
                var varData_1286 = varData_1285.slice(0);
                varData_1282.encryptBlock(varData_1286, 0);
                varData_1285[varData_1283 - 1] = varData_1285[varData_1283 - 1] + 1 | 0;
                for (var loopIdx = 0; loopIdx < varData_1283; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1286[loopIdx];
                }
              }
            });
            varData_1280.Decryptor = varData_1281;
            return varData_1280;
          }();
          return param_1_1.mode.CTR;
        });
      }
    });
    var varData_1287 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.CTRGladman = function () {
            var varData_1288 = param_1_1.lib.BlockCipherMode.extend();
            function handleAction_81(param_1_2) {
              if ((param_1_2 >> 24 & 255) === 255) {
                var varData_1289 = param_1_2 >> 16 & 255;
                var varData_1290 = param_1_2 >> 8 & 255;
                var varData_1291 = param_1_2 & 255;
                if (varData_1289 === 255) {
                  varData_1289 = 0;
                  if (varData_1290 === 255) {
                    varData_1290 = 0;
                    if (varData_1291 === 255) {
                      varData_1291 = 0;
                    } else {
                      ++varData_1291;
                    }
                  } else {
                    ++varData_1290;
                  }
                } else {
                  ++varData_1289;
                }
                param_1_2 = 0;
                param_1_2 += varData_1289 << 16;
                param_1_2 += varData_1290 << 8;
                param_1_2 += varData_1291;
              } else {
                param_1_2 += 16777216;
              }
              return param_1_2;
            }
            function handleAction_82(param_1_2) {
              if ((param_1_2[0] = handleAction_81(param_1_2[0])) === 0) {
                param_1_2[1] = handleAction_81(param_1_2[1]);
              }
              return param_1_2;
            }
            var varData_1292 = varData_1288.Encryptor = varData_1288.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1293 = this._cipher;
                var varData_1294 = varData_1293.blockSize;
                var varData_1295 = this._iv;
                var varData_1296 = this._counter;
                if (varData_1295) {
                  varData_1296 = this._counter = varData_1295.slice(0);
                  this._iv = undefined;
                }
                handleAction_82(varData_1296);
                var varData_1297 = varData_1296.slice(0);
                varData_1293.encryptBlock(varData_1297, 0);
                for (var loopIdx = 0; loopIdx < varData_1294; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1297[loopIdx];
                }
              }
            });
            varData_1288.Decryptor = varData_1292;
            return varData_1288;
          }();
          return param_1_1.mode.CTRGladman;
        });
      }
    });
    var varData_1298 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.OFB = function () {
            var varData_1299 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1300 = varData_1299.Encryptor = varData_1299.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1301 = this._cipher;
                var varData_1302 = varData_1301.blockSize;
                var varData_1303 = this._iv;
                var varData_1304 = this._keystream;
                if (varData_1303) {
                  varData_1304 = this._keystream = varData_1303.slice(0);
                  this._iv = undefined;
                }
                varData_1301.encryptBlock(varData_1304, 0);
                for (var loopIdx = 0; loopIdx < varData_1302; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1304[loopIdx];
                }
              }
            });
            varData_1299.Decryptor = varData_1300;
            return varData_1299;
          }();
          return param_1_1.mode.OFB;
        });
      }
    });
    var varData_1305 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.ECB = function () {
            var varData_1306 = param_1_1.lib.BlockCipherMode.extend();
            varData_1306.Encryptor = varData_1306.extend({
              processBlock: function (param_1_2, param_2_1) {
                this._cipher.encryptBlock(param_1_2, param_2_1);
              }
            });
            varData_1306.Decryptor = varData_1306.extend({
              processBlock: function (param_1_2, param_2_1) {
                this._cipher.decryptBlock(param_1_2, param_2_1);
              }
            });
            return varData_1306;
          }();
          return param_1_1.mode.ECB;
        });
      }
    });
    var varData_1307 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.pad.AnsiX923 = {
            pad: function (param_1_2, param_2_1) {
              var varData_1308 = param_1_2.sigBytes;
              var varData_1309 = param_2_1 * 4;
              var varData_1310 = varData_1309 - varData_1308 % varData_1309;
              var varData_1311 = varData_1308 + varData_1310 - 1;
              param_1_2.clamp();
              param_1_2.words[varData_1311 >>> 2] |= varData_1310 << 24 - varData_1311 % 4 * 8;
              param_1_2.sigBytes += varData_1310;
            },
            unpad: function (param_1_2) {
              var varData_1312 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1312;
            }
          };
          return param_1_1.pad.Ansix923;
        });
      }
    });
    var varData_1313 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.pad.Iso10126 = {
            pad: function (param_1_2, param_2_1) {
              var varData_1314 = param_2_1 * 4;
              var varData_1315 = varData_1314 - param_1_2.sigBytes % varData_1314;
              param_1_2.concat(param_1_1.lib.WordArray.random(varData_1315 - 1)).concat(param_1_1.lib.WordArray.create([varData_1315 << 24], 1));
            },
            unpad: function (param_1_2) {
              var varData_1316 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1316;
            }
          };
          return param_1_1.pad.Iso10126;
        });
      }
    });
    var varData_1317 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.pad.Iso97971 = {
            pad: function (param_1_2, param_2_1) {
              param_1_2.concat(param_1_1.lib.WordArray.create([2147483648], 1));
              param_1_1.pad.ZeroPadding.pad(param_1_2, param_2_1);
            },
            unpad: function (param_1_2) {
              param_1_1.pad.ZeroPadding.unpad(param_1_2);
              param_1_2.sigBytes--;
            }
          };
          return param_1_1.pad.Iso97971;
        });
      }
    });
    var varData_1318 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.pad.ZeroPadding = {
            pad: function (param_1_2, param_2_1) {
              var varData_1319 = param_2_1 * 4;
              param_1_2.clamp();
              param_1_2.sigBytes += varData_1319 - (param_1_2.sigBytes % varData_1319 || varData_1319);
            },
            unpad: function (param_1_2) {
              var varData_1320 = param_1_2.words;
              var varData_1321 = param_1_2.sigBytes - 1;
              while (!(varData_1320[varData_1321 >>> 2] >>> 24 - varData_1321 % 4 * 8 & 255)) {
                varData_1321--;
              }
              param_1_2.sigBytes = varData_1321 + 1;
            }
          };
          return param_1_1.pad.ZeroPadding;
        });
      }
    });
    var varData_1322 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          var varData_1323 = {
            pad: function () {},
            unpad: function () {}
          };
          param_1_1.pad.NoPadding = varData_1323;
          return param_1_1.pad.NoPadding;
        });
      }
    });
    var varData_1324 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_1325 = param_1_1;
            var varData_1326 = varData_1325.lib;
            var varData_1327 = varData_1326.CipherParams;
            var varData_1328 = varData_1325.enc;
            var varData_1329 = varData_1328.Hex;
            var varData_1330 = varData_1325.format;
            var varData_1331 = varData_1330.Hex = {
              stringify: function (param_1_3) {
                return param_1_3.ciphertext.toString(varData_1329);
              },
              parse: function (param_1_3) {
                var varData_1332 = varData_1329.parse(param_1_3);
                var varData_1333 = {
                  ciphertext: varData_1332
                };
                return varData_1327.create(varData_1333);
              }
            };
          })();
          return param_1_1.format.Hex;
        });
      }
    });
    var varData_1334 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_807(), varData_831(), varData_1183(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1335 = param_1_1;
            var varData_1336 = varData_1335.lib;
            var varData_1337 = varData_1336.BlockCipher;
            var varData_1338 = varData_1335.algo;
            var varData_1339 = [];
            var varData_1340 = [];
            var varData_1341 = [];
            var varData_1342 = [];
            var varData_1343 = [];
            var varData_1344 = [];
            var varData_1345 = [];
            var varData_1346 = [];
            var varData_1347 = [];
            var varData_1348 = [];
            (function () {
              var varData_1349 = [];
              for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                if (loopIdx < 128) {
                  varData_1349[loopIdx] = loopIdx << 1;
                } else {
                  varData_1349[loopIdx] = loopIdx << 1 ^ 283;
                }
              }
              var varData_1350 = 0;
              var varData_1351 = 0;
              for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                var varData_1352 = varData_1351 ^ varData_1351 << 1 ^ varData_1351 << 2 ^ varData_1351 << 3 ^ varData_1351 << 4;
                varData_1352 = varData_1352 >>> 8 ^ varData_1352 & 255 ^ 99;
                varData_1339[varData_1350] = varData_1352;
                varData_1340[varData_1352] = varData_1350;
                var varData_1353 = varData_1349[varData_1350];
                var varData_1354 = varData_1349[varData_1353];
                var varData_1355 = varData_1349[varData_1354];
                var varData_1356 = varData_1349[varData_1352] * 257 ^ varData_1352 * 16843008;
                varData_1341[varData_1350] = varData_1356 << 24 | varData_1356 >>> 8;
                varData_1342[varData_1350] = varData_1356 << 16 | varData_1356 >>> 16;
                varData_1343[varData_1350] = varData_1356 << 8 | varData_1356 >>> 24;
                varData_1344[varData_1350] = varData_1356;
                var varData_1356 = varData_1355 * 16843009 ^ varData_1354 * 65537 ^ varData_1353 * 257 ^ varData_1350 * 16843008;
                varData_1345[varData_1352] = varData_1356 << 24 | varData_1356 >>> 8;
                varData_1346[varData_1352] = varData_1356 << 16 | varData_1356 >>> 16;
                varData_1347[varData_1352] = varData_1356 << 8 | varData_1356 >>> 24;
                varData_1348[varData_1352] = varData_1356;
                if (!varData_1350) {
                  varData_1350 = varData_1351 = 1;
                } else {
                  varData_1350 = varData_1353 ^ varData_1349[varData_1349[varData_1349[varData_1355 ^ varData_1353]]];
                  varData_1351 ^= varData_1349[varData_1349[varData_1351]];
                }
              }
            })();
            var varData_1357 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            var varData_1358 = varData_1338.AES = varData_1337.extend({
              _doReset: function () {
                if (this._nRounds && this._keyPriorReset === this._key) {
                  return;
                }
                var varData_1359 = this._keyPriorReset = this._key;
                var varData_1360 = varData_1359.words;
                var varData_1361 = varData_1359.sigBytes / 4;
                var varData_1362 = this._nRounds = varData_1361 + 6;
                var varData_1363 = (varData_1362 + 1) * 4;
                var varData_1364 = this._keySchedule = [];
                for (var loopIdx = 0; loopIdx < varData_1363; loopIdx++) {
                  if (loopIdx < varData_1361) {
                    varData_1364[loopIdx] = varData_1360[loopIdx];
                  } else {
                    var varData_1365 = varData_1364[loopIdx - 1];
                    if (!(loopIdx % varData_1361)) {
                      varData_1365 = varData_1365 << 8 | varData_1365 >>> 24;
                      varData_1365 = varData_1339[varData_1365 >>> 24] << 24 | varData_1339[varData_1365 >>> 16 & 255] << 16 | varData_1339[varData_1365 >>> 8 & 255] << 8 | varData_1339[varData_1365 & 255];
                      varData_1365 ^= varData_1357[loopIdx / varData_1361 | 0] << 24;
                    } else if (varData_1361 > 6 && loopIdx % varData_1361 == 4) {
                      varData_1365 = varData_1339[varData_1365 >>> 24] << 24 | varData_1339[varData_1365 >>> 16 & 255] << 16 | varData_1339[varData_1365 >>> 8 & 255] << 8 | varData_1339[varData_1365 & 255];
                    }
                    varData_1364[loopIdx] = varData_1364[loopIdx - varData_1361] ^ varData_1365;
                  }
                }
                var varData_1366 = this._invKeySchedule = [];
                for (var loopIdx_1 = 0; loopIdx_1 < varData_1363; loopIdx_1++) {
                  var loopIdx = varData_1363 - loopIdx_1;
                  if (loopIdx_1 % 4) {
                    var varData_1365 = varData_1364[loopIdx];
                  } else {
                    var varData_1365 = varData_1364[loopIdx - 4];
                  }
                  if (loopIdx_1 < 4 || loopIdx <= 4) {
                    varData_1366[loopIdx_1] = varData_1365;
                  } else {
                    varData_1366[loopIdx_1] = varData_1345[varData_1339[varData_1365 >>> 24]] ^ varData_1346[varData_1339[varData_1365 >>> 16 & 255]] ^ varData_1347[varData_1339[varData_1365 >>> 8 & 255]] ^ varData_1348[varData_1339[varData_1365 & 255]];
                  }
                }
              },
              encryptBlock: function (param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._keySchedule, varData_1341, varData_1342, varData_1343, varData_1344, varData_1339);
              },
              decryptBlock: function (param_1_2, param_2_1) {
                var varData_1367 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1367;
                this._doCryptBlock(param_1_2, param_2_1, this._invKeySchedule, varData_1345, varData_1346, varData_1347, varData_1348, varData_1340);
                var varData_1367 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1367;
              },
              _doCryptBlock: function (param_1_2, param_2_1, param_3, param_4, param_5, param_6, param_7, param_8) {
                var varData_1368 = this._nRounds;
                var varData_1369 = param_1_2[param_2_1] ^ param_3[0];
                var varData_1370 = param_1_2[param_2_1 + 1] ^ param_3[1];
                var varData_1371 = param_1_2[param_2_1 + 2] ^ param_3[2];
                var varData_1372 = param_1_2[param_2_1 + 3] ^ param_3[3];
                var varData_1373 = 4;
                for (var loopIdx = 1; loopIdx < varData_1368; loopIdx++) {
                  var varData_1374 = param_4[varData_1369 >>> 24] ^ param_5[varData_1370 >>> 16 & 255] ^ param_6[varData_1371 >>> 8 & 255] ^ param_7[varData_1372 & 255] ^ param_3[varData_1373++];
                  var varData_1375 = param_4[varData_1370 >>> 24] ^ param_5[varData_1371 >>> 16 & 255] ^ param_6[varData_1372 >>> 8 & 255] ^ param_7[varData_1369 & 255] ^ param_3[varData_1373++];
                  var varData_1376 = param_4[varData_1371 >>> 24] ^ param_5[varData_1372 >>> 16 & 255] ^ param_6[varData_1369 >>> 8 & 255] ^ param_7[varData_1370 & 255] ^ param_3[varData_1373++];
                  var varData_1377 = param_4[varData_1372 >>> 24] ^ param_5[varData_1369 >>> 16 & 255] ^ param_6[varData_1370 >>> 8 & 255] ^ param_7[varData_1371 & 255] ^ param_3[varData_1373++];
                  varData_1369 = varData_1374;
                  varData_1370 = varData_1375;
                  varData_1371 = varData_1376;
                  varData_1372 = varData_1377;
                }
                var varData_1374 = (param_8[varData_1369 >>> 24] << 24 | param_8[varData_1370 >>> 16 & 255] << 16 | param_8[varData_1371 >>> 8 & 255] << 8 | param_8[varData_1372 & 255]) ^ param_3[varData_1373++];
                var varData_1375 = (param_8[varData_1370 >>> 24] << 24 | param_8[varData_1371 >>> 16 & 255] << 16 | param_8[varData_1372 >>> 8 & 255] << 8 | param_8[varData_1369 & 255]) ^ param_3[varData_1373++];
                var varData_1376 = (param_8[varData_1371 >>> 24] << 24 | param_8[varData_1372 >>> 16 & 255] << 16 | param_8[varData_1369 >>> 8 & 255] << 8 | param_8[varData_1370 & 255]) ^ param_3[varData_1373++];
                var varData_1377 = (param_8[varData_1372 >>> 24] << 24 | param_8[varData_1369 >>> 16 & 255] << 16 | param_8[varData_1370 >>> 8 & 255] << 8 | param_8[varData_1371 & 255]) ^ param_3[varData_1373++];
                param_1_2[param_2_1] = varData_1374;
                param_1_2[param_2_1 + 1] = varData_1375;
                param_1_2[param_2_1 + 2] = varData_1376;
                param_1_2[param_2_1 + 3] = varData_1377;
              },
              keySize: 8
            });
            varData_1335.AES = varData_1337._createHelper(varData_1358);
          })();
          return param_1_1.AES;
        });
      }
    });
    var varData_1378 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_807(), varData_831(), varData_1183(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1379 = param_1_1;
            var varData_1380 = varData_1379.lib;
            var varData_1381 = varData_1380.WordArray;
            var varData_1382 = varData_1380.BlockCipher;
            var varData_1383 = varData_1379.algo;
            var varData_1384 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
            var varData_1385 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
            var varData_1386 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
            var varData_1387 = [{
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
            var varData_1388 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
            var varData_1389 = varData_1383.DES = varData_1382.extend({
              _doReset: function () {
                var varData_1390 = this._key;
                var varData_1391 = varData_1390.words;
                var varData_1392 = [];
                for (var loopIdx = 0; loopIdx < 56; loopIdx++) {
                  var varData_1393 = varData_1384[loopIdx] - 1;
                  varData_1392[loopIdx] = varData_1391[varData_1393 >>> 5] >>> 31 - varData_1393 % 32 & 1;
                }
                var varData_1394 = this._subKeys = [];
                for (var loopIdx_1 = 0; loopIdx_1 < 16; loopIdx_1++) {
                  var varData_1395 = varData_1394[loopIdx_1] = [];
                  var varData_1396 = varData_1386[loopIdx_1];
                  for (var loopIdx = 0; loopIdx < 24; loopIdx++) {
                    varData_1395[loopIdx / 6 | 0] |= varData_1392[(varData_1385[loopIdx] - 1 + varData_1396) % 28] << 31 - loopIdx % 6;
                    varData_1395[4 + (loopIdx / 6 | 0)] |= varData_1392[28 + (varData_1385[loopIdx + 24] - 1 + varData_1396) % 28] << 31 - loopIdx % 6;
                  }
                  varData_1395[0] = varData_1395[0] << 1 | varData_1395[0] >>> 31;
                  for (var loopIdx = 1; loopIdx < 7; loopIdx++) {
                    varData_1395[loopIdx] = varData_1395[loopIdx] >>> (loopIdx - 1) * 4 + 3;
                  }
                  varData_1395[7] = varData_1395[7] << 5 | varData_1395[7] >>> 27;
                }
                var varData_1397 = this._invSubKeys = [];
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  varData_1397[loopIdx] = varData_1394[15 - loopIdx];
                }
              },
              encryptBlock: function (param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._subKeys);
              },
              decryptBlock: function (param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._invSubKeys);
              },
              _doCryptBlock: function (param_1_2, param_2_1, param_3) {
                this._lBlock = param_1_2[param_2_1];
                this._rBlock = param_1_2[param_2_1 + 1];
                handleAction_83.call(this, 4, 252645135);
                handleAction_83.call(this, 16, 65535);
                handleAction_84.call(this, 2, 858993459);
                handleAction_84.call(this, 8, 16711935);
                handleAction_83.call(this, 1, 1431655765);
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_1398 = param_3[loopIdx];
                  var varData_1399 = this._lBlock;
                  var varData_1400 = this._rBlock;
                  var varData_1401 = 0;
                  for (var loopIdx_1 = 0; loopIdx_1 < 8; loopIdx_1++) {
                    varData_1401 |= varData_1387[loopIdx_1][((varData_1400 ^ varData_1398[loopIdx_1]) & varData_1388[loopIdx_1]) >>> 0];
                  }
                  this._lBlock = varData_1400;
                  this._rBlock = varData_1399 ^ varData_1401;
                }
                var varData_1402 = this._lBlock;
                this._lBlock = this._rBlock;
                this._rBlock = varData_1402;
                handleAction_83.call(this, 1, 1431655765);
                handleAction_84.call(this, 8, 16711935);
                handleAction_84.call(this, 2, 858993459);
                handleAction_83.call(this, 16, 65535);
                handleAction_83.call(this, 4, 252645135);
                param_1_2[param_2_1] = this._lBlock;
                param_1_2[param_2_1 + 1] = this._rBlock;
              },
              keySize: 2,
              ivSize: 2,
              blockSize: 2
            });
            function handleAction_83(param_1_2, param_2_1) {
              var varData_1403 = (this._lBlock >>> param_1_2 ^ this._rBlock) & param_2_1;
              this._rBlock ^= varData_1403;
              this._lBlock ^= varData_1403 << param_1_2;
            }
            function handleAction_84(param_1_2, param_2_1) {
              var varData_1404 = (this._rBlock >>> param_1_2 ^ this._lBlock) & param_2_1;
              this._lBlock ^= varData_1404;
              this._rBlock ^= varData_1404 << param_1_2;
            }
            varData_1379.DES = varData_1382._createHelper(varData_1389);
            var varData_1405 = varData_1383.TripleDES = varData_1382.extend({
              _doReset: function () {
                var varData_1406 = this._key;
                var varData_1407 = varData_1406.words;
                this._des1 = varData_1389.createEncryptor(varData_1381.create(varData_1407.slice(0, 2)));
                this._des2 = varData_1389.createEncryptor(varData_1381.create(varData_1407.slice(2, 4)));
                this._des3 = varData_1389.createEncryptor(varData_1381.create(varData_1407.slice(4, 6)));
              },
              encryptBlock: function (param_1_2, param_2_1) {
                this._des1.encryptBlock(param_1_2, param_2_1);
                this._des2.decryptBlock(param_1_2, param_2_1);
                this._des3.encryptBlock(param_1_2, param_2_1);
              },
              decryptBlock: function (param_1_2, param_2_1) {
                this._des3.decryptBlock(param_1_2, param_2_1);
                this._des2.encryptBlock(param_1_2, param_2_1);
                this._des1.decryptBlock(param_1_2, param_2_1);
              },
              keySize: 6,
              ivSize: 2,
              blockSize: 2
            });
            varData_1379.TripleDES = varData_1382._createHelper(varData_1405);
          })();
          return param_1_1.TripleDES;
        });
      }
    });
    var varData_1408 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_807(), varData_831(), varData_1183(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1409 = param_1_1;
            var varData_1410 = varData_1409.lib;
            var varData_1411 = varData_1410.StreamCipher;
            var varData_1412 = varData_1409.algo;
            var varData_1413 = varData_1412.RC4 = varData_1411.extend({
              _doReset: function () {
                var varData_1414 = this._key;
                var varData_1415 = varData_1414.words;
                var varData_1416 = varData_1414.sigBytes;
                var varData_1417 = this._S = [];
                for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                  varData_1417[loopIdx] = loopIdx;
                }
                for (var loopIdx = 0, loopIdx_1 = 0; loopIdx < 256; loopIdx++) {
                  var varData_1418 = loopIdx % varData_1416;
                  var varData_1419 = varData_1415[varData_1418 >>> 2] >>> 24 - varData_1418 % 4 * 8 & 255;
                  loopIdx_1 = (loopIdx_1 + varData_1417[loopIdx] + varData_1419) % 256;
                  var varData_1420 = varData_1417[loopIdx];
                  varData_1417[loopIdx] = varData_1417[loopIdx_1];
                  varData_1417[loopIdx_1] = varData_1420;
                }
                this._i = this._j = 0;
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                param_1_2[param_2_1] ^= handleAction_85.call(this);
              },
              keySize: 8,
              ivSize: 0
            });
            function handleAction_85() {
              var varData_1421 = this._S;
              var varData_1422 = this._i;
              var varData_1423 = this._j;
              var varData_1424 = 0;
              for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                varData_1422 = (varData_1422 + 1) % 256;
                varData_1423 = (varData_1423 + varData_1421[varData_1422]) % 256;
                var varData_1425 = varData_1421[varData_1422];
                varData_1421[varData_1422] = varData_1421[varData_1423];
                varData_1421[varData_1423] = varData_1425;
                varData_1424 |= varData_1421[(varData_1421[varData_1422] + varData_1421[varData_1423]) % 256] << 24 - loopIdx * 8;
              }
              this._i = varData_1422;
              this._j = varData_1423;
              return varData_1424;
            }
            varData_1409.RC4 = varData_1411._createHelper(varData_1413);
            var varData_1426 = varData_1412.RC4Drop = varData_1413.extend({
              cfg: varData_1413.cfg.extend({
                drop: 192
              }),
              _doReset: function () {
                varData_1413._doReset.call(this);
                for (var loopIdx = this.cfg.drop; loopIdx > 0; loopIdx--) {
                  handleAction_85.call(this);
                }
              }
            });
            varData_1409.RC4Drop = varData_1411._createHelper(varData_1426);
          })();
          return param_1_1.RC4;
        });
      }
    });
    var varData_1427 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_807(), varData_831(), varData_1183(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1428 = param_1_1;
            var varData_1429 = varData_1428.lib;
            var varData_1430 = varData_1429.StreamCipher;
            var varData_1431 = varData_1428.algo;
            var varData_1432 = [];
            var varData_1433 = [];
            var varData_1434 = [];
            var varData_1435 = varData_1431.Rabbit = varData_1430.extend({
              _doReset: function () {
                var varData_1436 = this._key.words;
                var varData_1437 = this.cfg.iv;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1436[loopIdx] = (varData_1436[loopIdx] << 8 | varData_1436[loopIdx] >>> 24) & 16711935 | (varData_1436[loopIdx] << 24 | varData_1436[loopIdx] >>> 8) & -16711936;
                }
                var varData_1438 = this._X = [varData_1436[0], varData_1436[3] << 16 | varData_1436[2] >>> 16, varData_1436[1], varData_1436[0] << 16 | varData_1436[3] >>> 16, varData_1436[2], varData_1436[1] << 16 | varData_1436[0] >>> 16, varData_1436[3], varData_1436[2] << 16 | varData_1436[1] >>> 16];
                var varData_1439 = this._C = [varData_1436[2] << 16 | varData_1436[2] >>> 16, varData_1436[0] & -65536 | varData_1436[1] & 65535, varData_1436[3] << 16 | varData_1436[3] >>> 16, varData_1436[1] & -65536 | varData_1436[2] & 65535, varData_1436[0] << 16 | varData_1436[0] >>> 16, varData_1436[2] & -65536 | varData_1436[3] & 65535, varData_1436[1] << 16 | varData_1436[1] >>> 16, varData_1436[3] & -65536 | varData_1436[0] & 65535];
                this._b = 0;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  handleAction_86.call(this);
                }
                for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                  varData_1439[loopIdx] ^= varData_1438[loopIdx + 4 & 7];
                }
                if (varData_1437) {
                  var varData_1440 = varData_1437.words;
                  var varData_1441 = varData_1440[0];
                  var varData_1442 = varData_1440[1];
                  var varData_1443 = (varData_1441 << 8 | varData_1441 >>> 24) & 16711935 | (varData_1441 << 24 | varData_1441 >>> 8) & -16711936;
                  var varData_1444 = (varData_1442 << 8 | varData_1442 >>> 24) & 16711935 | (varData_1442 << 24 | varData_1442 >>> 8) & -16711936;
                  var varData_1445 = varData_1443 >>> 16 | varData_1444 & -65536;
                  var varData_1446 = varData_1444 << 16 | varData_1443 & 65535;
                  varData_1439[0] ^= varData_1443;
                  varData_1439[1] ^= varData_1445;
                  varData_1439[2] ^= varData_1444;
                  varData_1439[3] ^= varData_1446;
                  varData_1439[4] ^= varData_1443;
                  varData_1439[5] ^= varData_1445;
                  varData_1439[6] ^= varData_1444;
                  varData_1439[7] ^= varData_1446;
                  for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                    handleAction_86.call(this);
                  }
                }
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_1447 = this._X;
                handleAction_86.call(this);
                varData_1432[0] = varData_1447[0] ^ varData_1447[5] >>> 16 ^ varData_1447[3] << 16;
                varData_1432[1] = varData_1447[2] ^ varData_1447[7] >>> 16 ^ varData_1447[5] << 16;
                varData_1432[2] = varData_1447[4] ^ varData_1447[1] >>> 16 ^ varData_1447[7] << 16;
                varData_1432[3] = varData_1447[6] ^ varData_1447[3] >>> 16 ^ varData_1447[1] << 16;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1432[loopIdx] = (varData_1432[loopIdx] << 8 | varData_1432[loopIdx] >>> 24) & 16711935 | (varData_1432[loopIdx] << 24 | varData_1432[loopIdx] >>> 8) & -16711936;
                  param_1_2[param_2_1 + loopIdx] ^= varData_1432[loopIdx];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_86() {
              var varData_1448 = this._X;
              var varData_1449 = this._C;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                varData_1433[loopIdx] = varData_1449[loopIdx];
              }
              varData_1449[0] = varData_1449[0] + 1295307597 + this._b | 0;
              varData_1449[1] = varData_1449[1] + 3545052371 + (varData_1449[0] >>> 0 < varData_1433[0] >>> 0 ? 1 : 0) | 0;
              varData_1449[2] = varData_1449[2] + 886263092 + (varData_1449[1] >>> 0 < varData_1433[1] >>> 0 ? 1 : 0) | 0;
              varData_1449[3] = varData_1449[3] + 1295307597 + (varData_1449[2] >>> 0 < varData_1433[2] >>> 0 ? 1 : 0) | 0;
              varData_1449[4] = varData_1449[4] + 3545052371 + (varData_1449[3] >>> 0 < varData_1433[3] >>> 0 ? 1 : 0) | 0;
              varData_1449[5] = varData_1449[5] + 886263092 + (varData_1449[4] >>> 0 < varData_1433[4] >>> 0 ? 1 : 0) | 0;
              varData_1449[6] = varData_1449[6] + 1295307597 + (varData_1449[5] >>> 0 < varData_1433[5] >>> 0 ? 1 : 0) | 0;
              varData_1449[7] = varData_1449[7] + 3545052371 + (varData_1449[6] >>> 0 < varData_1433[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1449[7] >>> 0 < varData_1433[7] >>> 0 ? 1 : 0;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                var varData_1450 = varData_1448[loopIdx] + varData_1449[loopIdx];
                var varData_1451 = varData_1450 & 65535;
                var varData_1452 = varData_1450 >>> 16;
                var varData_1453 = ((varData_1451 * varData_1451 >>> 17) + varData_1451 * varData_1452 >>> 15) + varData_1452 * varData_1452;
                var varData_1454 = ((varData_1450 & -65536) * varData_1450 | 0) + ((varData_1450 & 65535) * varData_1450 | 0);
                varData_1434[loopIdx] = varData_1453 ^ varData_1454;
              }
              varData_1448[0] = varData_1434[0] + (varData_1434[7] << 16 | varData_1434[7] >>> 16) + (varData_1434[6] << 16 | varData_1434[6] >>> 16) | 0;
              varData_1448[1] = varData_1434[1] + (varData_1434[0] << 8 | varData_1434[0] >>> 24) + varData_1434[7] | 0;
              varData_1448[2] = varData_1434[2] + (varData_1434[1] << 16 | varData_1434[1] >>> 16) + (varData_1434[0] << 16 | varData_1434[0] >>> 16) | 0;
              varData_1448[3] = varData_1434[3] + (varData_1434[2] << 8 | varData_1434[2] >>> 24) + varData_1434[1] | 0;
              varData_1448[4] = varData_1434[4] + (varData_1434[3] << 16 | varData_1434[3] >>> 16) + (varData_1434[2] << 16 | varData_1434[2] >>> 16) | 0;
              varData_1448[5] = varData_1434[5] + (varData_1434[4] << 8 | varData_1434[4] >>> 24) + varData_1434[3] | 0;
              varData_1448[6] = varData_1434[6] + (varData_1434[5] << 16 | varData_1434[5] >>> 16) + (varData_1434[4] << 16 | varData_1434[4] >>> 16) | 0;
              varData_1448[7] = varData_1434[7] + (varData_1434[6] << 8 | varData_1434[6] >>> 24) + varData_1434[5] | 0;
            }
            varData_1428.Rabbit = varData_1430._createHelper(varData_1435);
          })();
          return param_1_1.Rabbit;
        });
      }
    });
    var varData_1455 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_807(), varData_831(), varData_1183(), varData_1199());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1456 = param_1_1;
            var varData_1457 = varData_1456.lib;
            var varData_1458 = varData_1457.StreamCipher;
            var varData_1459 = varData_1456.algo;
            var varData_1460 = [];
            var varData_1461 = [];
            var varData_1462 = [];
            var varData_1463 = varData_1459.RabbitLegacy = varData_1458.extend({
              _doReset: function () {
                var varData_1464 = this._key.words;
                var varData_1465 = this.cfg.iv;
                var varData_1466 = this._X = [varData_1464[0], varData_1464[3] << 16 | varData_1464[2] >>> 16, varData_1464[1], varData_1464[0] << 16 | varData_1464[3] >>> 16, varData_1464[2], varData_1464[1] << 16 | varData_1464[0] >>> 16, varData_1464[3], varData_1464[2] << 16 | varData_1464[1] >>> 16];
                var varData_1467 = this._C = [varData_1464[2] << 16 | varData_1464[2] >>> 16, varData_1464[0] & -65536 | varData_1464[1] & 65535, varData_1464[3] << 16 | varData_1464[3] >>> 16, varData_1464[1] & -65536 | varData_1464[2] & 65535, varData_1464[0] << 16 | varData_1464[0] >>> 16, varData_1464[2] & -65536 | varData_1464[3] & 65535, varData_1464[1] << 16 | varData_1464[1] >>> 16, varData_1464[3] & -65536 | varData_1464[0] & 65535];
                this._b = 0;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  handleAction_87.call(this);
                }
                for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                  varData_1467[loopIdx] ^= varData_1466[loopIdx + 4 & 7];
                }
                if (varData_1465) {
                  var varData_1468 = varData_1465.words;
                  var varData_1469 = varData_1468[0];
                  var varData_1470 = varData_1468[1];
                  var varData_1471 = (varData_1469 << 8 | varData_1469 >>> 24) & 16711935 | (varData_1469 << 24 | varData_1469 >>> 8) & -16711936;
                  var varData_1472 = (varData_1470 << 8 | varData_1470 >>> 24) & 16711935 | (varData_1470 << 24 | varData_1470 >>> 8) & -16711936;
                  var varData_1473 = varData_1471 >>> 16 | varData_1472 & -65536;
                  var varData_1474 = varData_1472 << 16 | varData_1471 & 65535;
                  varData_1467[0] ^= varData_1471;
                  varData_1467[1] ^= varData_1473;
                  varData_1467[2] ^= varData_1472;
                  varData_1467[3] ^= varData_1474;
                  varData_1467[4] ^= varData_1471;
                  varData_1467[5] ^= varData_1473;
                  varData_1467[6] ^= varData_1472;
                  varData_1467[7] ^= varData_1474;
                  for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                    handleAction_87.call(this);
                  }
                }
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_1475 = this._X;
                handleAction_87.call(this);
                varData_1460[0] = varData_1475[0] ^ varData_1475[5] >>> 16 ^ varData_1475[3] << 16;
                varData_1460[1] = varData_1475[2] ^ varData_1475[7] >>> 16 ^ varData_1475[5] << 16;
                varData_1460[2] = varData_1475[4] ^ varData_1475[1] >>> 16 ^ varData_1475[7] << 16;
                varData_1460[3] = varData_1475[6] ^ varData_1475[3] >>> 16 ^ varData_1475[1] << 16;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1460[loopIdx] = (varData_1460[loopIdx] << 8 | varData_1460[loopIdx] >>> 24) & 16711935 | (varData_1460[loopIdx] << 24 | varData_1460[loopIdx] >>> 8) & -16711936;
                  param_1_2[param_2_1 + loopIdx] ^= varData_1460[loopIdx];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_87() {
              var varData_1476 = this._X;
              var varData_1477 = this._C;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                varData_1461[loopIdx] = varData_1477[loopIdx];
              }
              varData_1477[0] = varData_1477[0] + 1295307597 + this._b | 0;
              varData_1477[1] = varData_1477[1] + 3545052371 + (varData_1477[0] >>> 0 < varData_1461[0] >>> 0 ? 1 : 0) | 0;
              varData_1477[2] = varData_1477[2] + 886263092 + (varData_1477[1] >>> 0 < varData_1461[1] >>> 0 ? 1 : 0) | 0;
              varData_1477[3] = varData_1477[3] + 1295307597 + (varData_1477[2] >>> 0 < varData_1461[2] >>> 0 ? 1 : 0) | 0;
              varData_1477[4] = varData_1477[4] + 3545052371 + (varData_1477[3] >>> 0 < varData_1461[3] >>> 0 ? 1 : 0) | 0;
              varData_1477[5] = varData_1477[5] + 886263092 + (varData_1477[4] >>> 0 < varData_1461[4] >>> 0 ? 1 : 0) | 0;
              varData_1477[6] = varData_1477[6] + 1295307597 + (varData_1477[5] >>> 0 < varData_1461[5] >>> 0 ? 1 : 0) | 0;
              varData_1477[7] = varData_1477[7] + 3545052371 + (varData_1477[6] >>> 0 < varData_1461[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1477[7] >>> 0 < varData_1461[7] >>> 0 ? 1 : 0;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                var varData_1478 = varData_1476[loopIdx] + varData_1477[loopIdx];
                var varData_1479 = varData_1478 & 65535;
                var varData_1480 = varData_1478 >>> 16;
                var varData_1481 = ((varData_1479 * varData_1479 >>> 17) + varData_1479 * varData_1480 >>> 15) + varData_1480 * varData_1480;
                var varData_1482 = ((varData_1478 & -65536) * varData_1478 | 0) + ((varData_1478 & 65535) * varData_1478 | 0);
                varData_1462[loopIdx] = varData_1481 ^ varData_1482;
              }
              varData_1476[0] = varData_1462[0] + (varData_1462[7] << 16 | varData_1462[7] >>> 16) + (varData_1462[6] << 16 | varData_1462[6] >>> 16) | 0;
              varData_1476[1] = varData_1462[1] + (varData_1462[0] << 8 | varData_1462[0] >>> 24) + varData_1462[7] | 0;
              varData_1476[2] = varData_1462[2] + (varData_1462[1] << 16 | varData_1462[1] >>> 16) + (varData_1462[0] << 16 | varData_1462[0] >>> 16) | 0;
              varData_1476[3] = varData_1462[3] + (varData_1462[2] << 8 | varData_1462[2] >>> 24) + varData_1462[1] | 0;
              varData_1476[4] = varData_1462[4] + (varData_1462[3] << 16 | varData_1462[3] >>> 16) + (varData_1462[2] << 16 | varData_1462[2] >>> 16) | 0;
              varData_1476[5] = varData_1462[5] + (varData_1462[4] << 8 | varData_1462[4] >>> 24) + varData_1462[3] | 0;
              varData_1476[6] = varData_1462[6] + (varData_1462[5] << 16 | varData_1462[5] >>> 16) + (varData_1462[4] << 16 | varData_1462[4] >>> 16) | 0;
              varData_1476[7] = varData_1462[7] + (varData_1462[6] << 8 | varData_1462[6] >>> 24) + varData_1462[5] | 0;
            }
            varData_1456.RabbitLegacy = varData_1458._createHelper(varData_1463);
          })();
          return param_1_1.RabbitLegacy;
        });
      }
    });
    var varData_1483 = varData_699({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_711(), varData_765(), varData_781(), varData_789(), varData_807(), varData_831(), varData_876(), varData_897(), varData_934(), varData_942(), varData_1034(), varData_1043(), varData_1101(), varData_1142(), varData_1160(), varData_1183(), varData_1199(), varData_1270(), varData_1279(), varData_1287(), varData_1298(), varData_1305(), varData_1307(), varData_1313(), varData_1317(), varData_1318(), varData_1322(), varData_1324(), varData_1334(), varData_1378(), varData_1408(), varData_1427(), varData_1455());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], param_2_1);
          } else {
            param_1_1.CryptoJS = param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          return param_1_1;
        });
      }
    });
    var varData_1484 = {
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
    var varData_1485 = {};
    var varData_1486 = {
      MathUtils: () => varData_1644
    };
    varData_700(varData_1485, varData_1486);
    var varData_1487;
    var varData_1488;
    var varData_1489 = class _0x1d75ea {
      constructor(param_1, param_2, param_3) {
        varData_707(this, varData_1487);
        const varData_1490 = varData_710(this, varData_1487, varData_1488).call(this, param_1, param_2, param_3);
        this.x = varData_1490.x;
        this.y = varData_1490.y;
        this.z = varData_1490.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_1491 = varData_710(this, varData_1487, varData_1488).call(this, param_1, param_2, param_3);
        return this.x === varData_1491.x && this.y === varData_1491.y && this.z === varData_1491.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_1492 = varData_710(this, varData_1487, varData_1488).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_1492.x * param_4 : varData_1492.x;
        this.y += param_4 ? varData_1492.y * param_4 : varData_1492.y;
        this.z += param_4 ? varData_1492.z * param_4 : varData_1492.z;
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
        const varData_1493 = varData_710(this, varData_1487, varData_1488).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_1493.x * param_4 : varData_1493.x;
        this.y -= param_4 ? varData_1493.y * param_4 : varData_1493.y;
        this.z -= param_4 ? varData_1493.z * param_4 : varData_1493.z;
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
        const varData_1494 = varData_710(this, varData_1487, varData_1488).call(this, param_1, param_2, param_3);
        this.x *= varData_1494.x;
        this.y *= varData_1494.y;
        this.z *= varData_1494.z;
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
        const varData_1495 = varData_710(this, varData_1487, varData_1488).call(this, param_1, param_2, param_3);
        this.x /= varData_1495.x;
        this.y /= varData_1495.y;
        this.z /= varData_1495.z;
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
        const varData_1496 = varData_710(this, varData_1487, varData_1488).call(this, param_1, param_2, param_3);
        return new _0x1d75ea((this.x + varData_1496.x) / 2, (this.y + varData_1496.y) / 2, (this.z + varData_1496.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x227b64, _0x5c6e45, _0x47c584] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x227b64 !== "number" || typeof _0x5c6e45 !== "number" || typeof _0x47c584 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x59d43d, _0x159111, _0x3ecb15] = [this.x - _0x227b64, this.y - _0x5c6e45, this.z - _0x47c584];
        return Math.sqrt(_0x59d43d * _0x59d43d + _0x159111 * _0x159111 + _0x3ecb15 * _0x3ecb15);
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
        var varData_1497 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_1497;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1487 = new WeakSet();
    varData_1488 = function (param_1, param_2, param_3) {
      let varData_1498 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_1489) {
        varData_1498 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1499 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_1498 = varData_1499;
      } else if (typeof param_1 === "object") {
        varData_1498 = param_1;
      } else {
        var varData_1500 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_1498 = varData_1500;
      }
      if (typeof varData_1498.x !== "number" || typeof varData_1498.y !== "number" || typeof varData_1498.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1498;
    };
    var varData_1501 = varData_1489;
    var varData_1502;
    var varData_1503;
    var varData_1504 = class {
      constructor(param_1) {
        varData_707(this, varData_1502, undefined);
        varData_707(this, varData_1503, undefined);
        varData_708(this, varData_1503, param_1 ?? 5);
        varData_708(this, varData_1502, new Map());
      }
      setTTL(param_1) {
        varData_708(this, varData_1503, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_706(this, varData_1502).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_706(this, varData_1503)) * 1000
        });
        return this;
      }
      get(param_1, _0x3d331b = false) {
        const varData_1505 = varData_706(this, varData_1502).get(param_1);
        const varData_1506 = varData_1505 ? _0x3d331b ? true : varData_1505.expiration > Date.now() : false;
        if (!varData_1505 || !varData_1506) {
          if (varData_1505) {
            varData_706(this, varData_1502).delete(param_1);
          }
          return;
        }
        return varData_1505.value;
      }
      has(param_1, _0x26ab47 = false) {
        const varData_1507 = varData_706(this, varData_1502).get(param_1);
        const varData_1508 = varData_1507 ? _0x26ab47 ? true : varData_1507.expiration > Date.now() : false;
        if (varData_1507 && !varData_1508) {
          varData_706(this, varData_1502).delete(param_1);
        }
        return varData_1508;
      }
      delete(param_1) {
        return varData_706(this, varData_1502).delete(param_1);
      }
      clear() {
        varData_706(this, varData_1502).clear();
      }
      values(_0x125e7e = false) {
        const varData_1509 = [];
        const timestamp = Date.now();
        for (const varData_1510 of varData_706(this, varData_1502).values()) {
          if (_0x125e7e || varData_1510.expiration > timestamp) {
            varData_1509.push(varData_1510.value);
          }
        }
        return varData_1509;
      }
      keys(_0x1839ef = false) {
        const varData_1511 = [];
        const timestamp = Date.now();
        for (const [_0xab13be, _0x372a93] of varData_706(this, varData_1502).entries()) {
          if (_0x1839ef || _0x372a93.expiration > timestamp) {
            varData_1511.push(_0xab13be);
          }
        }
        return varData_1511;
      }
      entries(_0x35e8ca = false) {
        const varData_1512 = [];
        const timestamp = Date.now();
        for (const [_0x3f9a10, _0x1501e4] of varData_706(this, varData_1502).entries()) {
          if (_0x35e8ca || _0x1501e4.expiration > timestamp) {
            varData_1512.push([_0x3f9a10, _0x1501e4.value]);
          }
        }
        return varData_1512;
      }
    };
    varData_1502 = new WeakMap();
    varData_1503 = new WeakMap();
    var varData_1513;
    var varData_1514;
    var varData_1515;
    var varData_1516;
    var varData_1517;
    var varData_1518;
    var varData_1519;
    var varData_1520;
    var varData_1521;
    var varData_1522;
    var varData_1523;
    var varData_1524;
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
    var varData_1535 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x514ba2 = 30, _0x53bdb2 = false) {
        varData_707(this, varData_1525);
        varData_707(this, varData_1527);
        varData_707(this, varData_1529);
        varData_707(this, varData_1531);
        varData_707(this, varData_1533);
        varData_707(this, varData_1513, undefined);
        varData_707(this, varData_1514, undefined);
        varData_707(this, varData_1515, undefined);
        varData_707(this, varData_1516, undefined);
        varData_707(this, varData_1517, undefined);
        varData_707(this, varData_1518, undefined);
        varData_707(this, varData_1519, undefined);
        varData_707(this, varData_1520, undefined);
        varData_707(this, varData_1521, undefined);
        varData_707(this, varData_1522, undefined);
        varData_707(this, varData_1523, undefined);
        varData_707(this, varData_1524, undefined);
        varData_708(this, varData_1513, param_1);
        varData_708(this, varData_1514, param_4);
        varData_708(this, varData_1515, param_5);
        varData_708(this, varData_1516, param_2);
        varData_708(this, varData_1517, param_3);
        varData_708(this, varData_1518, _0x53bdb2);
        varData_708(this, varData_1519, _0x514ba2);
        varData_708(this, varData_1521, varData_706(this, varData_1514).x / _0x514ba2);
        varData_708(this, varData_1522, varData_706(this, varData_1514).y / _0x514ba2);
        varData_708(this, varData_1520, varData_706(this, varData_1521) * varData_706(this, varData_1522));
        varData_708(this, varData_1523, varData_710(this, varData_1525, varData_1526).call(this, varData_706(this, varData_1513), varData_706(this, varData_1519), varData_706(this, varData_1521), varData_706(this, varData_1522), varData_706(this, varData_1518)));
        varData_708(this, varData_1524, varData_710(this, varData_1527, varData_1528).call(this, varData_706(this, varData_1523), varData_706(this, varData_1520)));
      }
      get cells() {
        return varData_706(this, varData_1523);
      }
      get cellSize() {
        return varData_706(this, varData_1519);
      }
      get cellWidth() {
        return varData_706(this, varData_1521);
      }
      get cellHeight() {
        return varData_706(this, varData_1522);
      }
      get gridArea() {
        return varData_706(this, varData_1524);
      }
      get gridCoverage() {
        return varData_706(this, varData_1524) / varData_706(this, varData_1515) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_1536;
        const varData_1537 = param_1.x - varData_706(this, varData_1516).x;
        const varData_1538 = param_1.y - varData_706(this, varData_1516).y;
        const varData_1539 = Math.floor(varData_1537 * varData_706(this, varData_1519) / varData_706(this, varData_1514).x);
        const varData_1540 = Math.floor(varData_1538 * varData_706(this, varData_1519) / varData_706(this, varData_1514).y);
        let varData_1541 = (varData_1536 = varData_706(this, varData_1523)[varData_1539]) == null ? undefined : varData_1536[varData_1540];
        if (!varData_1541 && varData_706(this, varData_1518)) {
          varData_1541 = varData_710(this, varData_1531, varData_1532).call(this, varData_1539, varData_1540, varData_706(this, varData_1521), varData_706(this, varData_1522), varData_706(this, varData_1513));
          varData_706(this, varData_1523)[varData_1539][varData_1540] = varData_1541;
          if (!varData_1541) {
            return false;
          }
          varData_708(this, varData_1524, varData_706(this, varData_1524) + varData_706(this, varData_1520));
        }
        return varData_1541 ?? false;
      }
    };
    varData_1513 = new WeakMap();
    varData_1514 = new WeakMap();
    varData_1515 = new WeakMap();
    varData_1516 = new WeakMap();
    varData_1517 = new WeakMap();
    varData_1518 = new WeakMap();
    varData_1519 = new WeakMap();
    varData_1520 = new WeakMap();
    varData_1521 = new WeakMap();
    varData_1522 = new WeakMap();
    varData_1523 = new WeakMap();
    varData_1524 = new WeakMap();
    varData_1525 = new WeakSet();
    varData_1526 = function (param_1, param_2, param_3, param_4, param_5) {
      const varData_1542 = {};
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_1542[loopIdx] = {};
        if (param_5) {
          continue;
        }
        for (let loopIdx_1 = 0; loopIdx_1 < param_2; loopIdx_1++) {
          const varData_1543 = varData_710(this, varData_1531, varData_1532).call(this, loopIdx, loopIdx_1, param_3, param_4, param_1);
          if (!varData_1543) {
            continue;
          }
          varData_1542[loopIdx][loopIdx_1] = true;
        }
      }
      return varData_1542;
    };
    varData_1527 = new WeakSet();
    varData_1528 = function (param_1, param_2) {
      let varData_1544 = 0;
      for (const varData_1545 in param_1) {
        for (const varData_1546 in param_1[varData_1545]) {
          varData_1544 += param_2;
        }
      }
      return varData_1544;
    };
    varData_1529 = new WeakSet();
    varData_1530 = function (param_1, param_2, param_3, param_4) {
      const varData_1547 = [];
      const varData_1548 = param_1 * param_3 + varData_706(this, varData_1516).x;
      const varData_1549 = param_2 * param_4 + varData_706(this, varData_1516).y;
      varData_1547.push(new varData_1631(varData_1548, varData_1549));
      varData_1547.push(new varData_1631(varData_1548 + param_3, varData_1549));
      varData_1547.push(new varData_1631(varData_1548 + param_3, varData_1549 + param_4));
      varData_1547.push(new varData_1631(varData_1548, varData_1549 + param_4));
      return varData_1547;
    };
    varData_1531 = new WeakSet();
    varData_1532 = function (param_1, param_2, param_3, param_4, param_5) {
      const varData_1550 = varData_710(this, varData_1529, varData_1530).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_1 = false;
      for (const varData_1551 of varData_1550) {
        const varData_1552 = varData_1663.MathUtils.windingNumber(varData_1551, param_5);
        if (varData_1552 !== 0) {
          isDisabled_1 = true;
          break;
        }
      }
      if (!isDisabled_1) {
        return false;
      }
      for (let loopIdx = 0; loopIdx < varData_1550.length; loopIdx++) {
        const varData_1553 = varData_1550[loopIdx];
        const varData_1554 = varData_1550[(loopIdx + 1) % varData_1550.length];
        for (let loopIdx_1 = 0; loopIdx_1 < param_5.length; loopIdx_1++) {
          const varData_1555 = param_5[loopIdx_1];
          const varData_1556 = param_5[(loopIdx_1 + 1) % param_5.length];
          if (varData_710(this, varData_1533, varData_1534).call(this, varData_1553, varData_1554, varData_1555, varData_1556)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_1533 = new WeakSet();
    varData_1534 = function (param_1, param_2, param_3, param_4) {
      const varData_1557 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_1558 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_1559 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_1557 === 0) {
        return varData_1558 === 0 && varData_1559 === 0;
      }
      const varData_1560 = varData_1558 / varData_1557;
      const varData_1561 = varData_1559 / varData_1557;
      return varData_1560 >= 0 && varData_1560 <= 1 && varData_1561 >= 0 && varData_1561 <= 1;
    };
    var varData_1562;
    var varData_1563;
    var varData_1564;
    var varData_1565;
    var varData_1566;
    var varData_1567;
    var varData_1568;
    var varData_1569;
    var varData_1570;
    var varData_1571;
    var varData_1572;
    var varData_1573;
    var varData_1574;
    var varData_1575;
    var varData_1576;
    var varData_1577;
    var varData_1578;
    var varData_1579;
    var varData_1580 = class {
      constructor(param_1, _0x5e21ec = {}, _0x159d5c = {}) {
        varData_707(this, varData_1570);
        varData_707(this, varData_1572);
        varData_707(this, varData_1574);
        varData_707(this, varData_1576);
        varData_707(this, varData_1578);
        varData_707(this, varData_1562, undefined);
        varData_707(this, varData_1563, undefined);
        varData_707(this, varData_1564, undefined);
        varData_707(this, varData_1565, undefined);
        varData_707(this, varData_1566, undefined);
        varData_707(this, varData_1567, undefined);
        varData_707(this, varData_1568, undefined);
        varData_707(this, varData_1569, undefined);
        varData_708(this, varData_1562, varData_1663.getUUID());
        varData_708(this, varData_1563, param_1);
        varData_708(this, varData_1564, varData_710(this, varData_1570, varData_1571).call(this, param_1));
        varData_708(this, varData_1565, varData_710(this, varData_1572, varData_1573).call(this, param_1));
        varData_708(this, varData_1566, varData_710(this, varData_1578, varData_1579).call(this, param_1));
        varData_708(this, varData_1567, varData_710(this, varData_1576, varData_1577).call(this, varData_706(this, varData_1564), varData_706(this, varData_1565)));
        varData_708(this, varData_1568, varData_710(this, varData_1574, varData_1575).call(this, varData_706(this, varData_1564), varData_706(this, varData_1565)));
        this.options = _0x5e21ec;
        this.data = _0x159d5c;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_708(this, varData_1569, new varData_1535(varData_706(this, varData_1563), varData_706(this, varData_1564), varData_706(this, varData_1565), varData_706(this, varData_1567), varData_706(this, varData_1566), _0x5e21ec.gridCellSize, _0x5e21ec.useLazyGrid));
      }
      get id() {
        return varData_706(this, varData_1562);
      }
      get center() {
        return varData_706(this, varData_1568);
      }
      get min() {
        return varData_706(this, varData_1564);
      }
      get max() {
        return varData_706(this, varData_1565);
      }
      get points() {
        return [...varData_706(this, varData_1563)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_706(this, varData_1564).x || param_1.x > varData_706(this, varData_1565).x) {
          return false;
        } else if (param_1.y < varData_706(this, varData_1564).y || param_1.y > varData_706(this, varData_1565).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_1501) {
          const varData_1581 = this.options.minZ ?? -Infinity;
          const varData_1582 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_1581 || param_1.z > varData_1582) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_706(this, varData_1569)) {
          return varData_706(this, varData_1569).isPointInsideGrid(param_1);
        }
        const varData_1583 = varData_1663.MathUtils.windingNumber(param_1, varData_706(this, varData_1563));
        return varData_1583 !== 0;
      }
      addPoint(param_1) {
        varData_706(this, varData_1563).push(param_1);
      }
      removePoint(param_1) {
        const varData_1584 = varData_706(this, varData_1563).findIndex(param_1_1 => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_1584 === -1) {
          return;
        }
        varData_706(this, varData_1563).splice(varData_1584, 1);
      }
      removeLastPoint() {
        varData_706(this, varData_1563).pop();
      }
      recalculate() {
        varData_708(this, varData_1564, varData_710(this, varData_1570, varData_1571).call(this, varData_706(this, varData_1563)));
        varData_708(this, varData_1565, varData_710(this, varData_1572, varData_1573).call(this, varData_706(this, varData_1563)));
        varData_708(this, varData_1566, varData_710(this, varData_1578, varData_1579).call(this, varData_706(this, varData_1563)));
        varData_708(this, varData_1567, varData_710(this, varData_1576, varData_1577).call(this, varData_706(this, varData_1564), varData_706(this, varData_1565)));
        varData_708(this, varData_1568, varData_710(this, varData_1574, varData_1575).call(this, varData_706(this, varData_1564), varData_706(this, varData_1565)));
        if (!this.options.useGrid) {
          return;
        }
        varData_708(this, varData_1569, new varData_1535(varData_706(this, varData_1563), varData_706(this, varData_1564), varData_706(this, varData_1565), varData_706(this, varData_1567), varData_706(this, varData_1566), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_1562 = new WeakMap();
    varData_1563 = new WeakMap();
    varData_1564 = new WeakMap();
    varData_1565 = new WeakMap();
    varData_1566 = new WeakMap();
    varData_1567 = new WeakMap();
    varData_1568 = new WeakMap();
    varData_1569 = new WeakMap();
    varData_1570 = new WeakSet();
    varData_1571 = function (param_1) {
      let varData_1585 = Number.MAX_SAFE_INTEGER;
      let varData_1586 = Number.MAX_SAFE_INTEGER;
      for (const varData_1587 of param_1) {
        varData_1585 = Math.min(varData_1585, varData_1587.x);
        varData_1586 = Math.min(varData_1586, varData_1587.y);
      }
      return new varData_1631(varData_1585, varData_1586);
    };
    varData_1572 = new WeakSet();
    varData_1573 = function (param_1) {
      let varData_1588 = Number.MIN_SAFE_INTEGER;
      let varData_1589 = Number.MIN_SAFE_INTEGER;
      for (const varData_1590 of param_1) {
        varData_1588 = Math.max(varData_1588, varData_1590.x);
        varData_1589 = Math.max(varData_1589, varData_1590.y);
      }
      return new varData_1631(varData_1588, varData_1589);
    };
    varData_1574 = new WeakSet();
    varData_1575 = function (param_1, param_2) {
      const varData_1591 = param_2.add(param_1);
      return varData_1591.divideScalar(2);
    };
    varData_1576 = new WeakSet();
    varData_1577 = function (param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_1578 = new WeakSet();
    varData_1579 = function (param_1) {
      let varData_1592 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length - 1; loopIdx < param_1.length; loopIdx_1 = loopIdx++) {
        const varData_1593 = param_1[loopIdx];
        const varData_1594 = param_1[loopIdx_1];
        varData_1592 += varData_1593.x * varData_1594.y;
        varData_1592 -= varData_1593.y * varData_1594.x;
      }
      return Math.abs(varData_1592 / 2);
    };
    var varData_1595;
    var varData_1596;
    var varData_1597 = class _0x44d9a7 {
      constructor(param_1, param_2) {
        varData_707(this, varData_1595);
        const varData_1598 = varData_710(this, varData_1595, varData_1596).call(this, param_1, param_2);
        this.x = varData_1598.x;
        this.y = varData_1598.y;
      }
      equals(param_1, param_2) {
        const varData_1599 = varData_710(this, varData_1595, varData_1596).call(this, param_1, param_2);
        return this.x === varData_1599.x && this.y === varData_1599.y;
      }
      add(param_1, param_2, param_3) {
        const varData_1600 = varData_710(this, varData_1595, varData_1596).call(this, param_1, param_2);
        const varData_1601 = this.x + (param_3 ? varData_1600.x * param_3 : varData_1600.x);
        const varData_1602 = this.y + (param_3 ? varData_1600.y * param_3 : varData_1600.y);
        return new _0x44d9a7(varData_1601, varData_1602);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1603 = this.x + param_1;
        const varData_1604 = this.y + param_1;
        return new _0x44d9a7(varData_1603, varData_1604);
      }
      sub(param_1, param_2, param_3) {
        const varData_1605 = varData_710(this, varData_1595, varData_1596).call(this, param_1, param_2);
        const varData_1606 = this.x - (param_3 ? varData_1605.x * param_3 : varData_1605.x);
        const varData_1607 = this.y - (param_3 ? varData_1605.y * param_3 : varData_1605.y);
        return new _0x44d9a7(varData_1606, varData_1607);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1608 = this.x - param_1;
        const varData_1609 = this.y - param_1;
        return new _0x44d9a7(varData_1608, varData_1609);
      }
      multiply(param_1, param_2) {
        const varData_1610 = varData_710(this, varData_1595, varData_1596).call(this, param_1, param_2);
        const varData_1611 = this.x * varData_1610.x;
        const varData_1612 = this.y * varData_1610.y;
        return new _0x44d9a7(varData_1611, varData_1612);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1613 = this.x * param_1;
        const varData_1614 = this.y * param_1;
        return new _0x44d9a7(varData_1613, varData_1614);
      }
      divide(param_1, param_2) {
        const varData_1615 = varData_710(this, varData_1595, varData_1596).call(this, param_1, param_2);
        const varData_1616 = this.x / varData_1615.x;
        const varData_1617 = this.y / varData_1615.y;
        return new _0x44d9a7(varData_1616, varData_1617);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1618 = this.x / param_1;
        const varData_1619 = this.y / param_1;
        return new _0x44d9a7(varData_1618, varData_1619);
      }
      round() {
        const varData_1620 = Math.round(this.x);
        const varData_1621 = Math.round(this.y);
        return new _0x44d9a7(varData_1620, varData_1621);
      }
      floor() {
        const varData_1622 = Math.floor(this.x);
        const varData_1623 = Math.floor(this.y);
        return new _0x44d9a7(varData_1622, varData_1623);
      }
      ceil() {
        const varData_1624 = Math.ceil(this.x);
        const varData_1625 = Math.ceil(this.y);
        return new _0x44d9a7(varData_1624, varData_1625);
      }
      getCenter(param_1, param_2) {
        const varData_1626 = varData_710(this, varData_1595, varData_1596).call(this, param_1, param_2);
        return new _0x44d9a7((this.x + varData_1626.x) / 2, (this.y + varData_1626.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0xb02517, _0x275971] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0xb02517 !== "number" || typeof _0x275971 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x2f802e, _0xd97427] = [this.x - _0xb02517, this.y - _0x275971];
        return Math.sqrt(_0x2f802e * _0x2f802e + _0xd97427 * _0xd97427);
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
        var varData_1627 = {
          x: this.x,
          y: this.y
        };
        return varData_1627;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1595 = new WeakSet();
    varData_1596 = function (param_1, param_2) {
      let varData_1628 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_1597 || param_1 instanceof varData_1501) {
        varData_1628 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1629 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_1628 = varData_1629;
      } else if (typeof param_1 === "object") {
        varData_1628 = param_1;
      } else {
        var varData_1630 = {
          x: param_1,
          y: param_2
        };
        varData_1628 = varData_1630;
      }
      if (typeof varData_1628.x !== "number" || typeof varData_1628.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1628;
    };
    var varData_1631 = varData_1597;
    var varData_1632 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_1633 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_1634 = ([_0x5c8754, _0x32ff2e, _0x2c592b], [_0x16d5e0, _0x546adf, _0x348d5e]) => {
      const [_0x3777c4, _0x1726d5, _0x3ae223] = [_0x5c8754 - _0x16d5e0, _0x32ff2e - _0x546adf, _0x2c592b - _0x348d5e];
      return Math.sqrt(_0x3777c4 * _0x3777c4 + _0x1726d5 * _0x1726d5 + _0x3ae223 * _0x3ae223);
    };
    var varData_1635 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_1636 = (param_1, param_2) => {
      if (param_1 instanceof varData_1631) {
        return param_1;
      } else if (param_1 instanceof varData_1501) {
        return new varData_1631(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_1631(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1631(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1631(param_1, param_2);
    };
    var varData_1637 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_1501) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_1501(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1501(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1501(param_1, param_2, param_3);
    };
    var varData_1638 = (param_1, param_2) => {
      let varData_1639 = 0;
      const varData_1640 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        const varData_1641 = param_2[loopIdx];
        const varData_1642 = param_2[(loopIdx + 1) % param_2.length];
        if (varData_1641.y <= param_1.y) {
          if (varData_1642.y > param_1.y && varData_1640(varData_1641, varData_1642, param_1) > 0) {
            varData_1639++;
          }
        } else if (varData_1642.y <= param_1.y && varData_1640(varData_1641, varData_1642, param_1) < 0) {
          varData_1639--;
        }
      }
      return varData_1639;
    };
    var varData_1643 = {
      clamp: varData_1632,
      getMapRange: varData_1633,
      getDistance: varData_1634,
      getRandomNumber: varData_1635,
      parseVector2: varData_1636,
      parseVector3: varData_1637,
      windingNumber: varData_1638
    };
    var varData_1644 = varData_1643;
    var varData_1645 = {};
    var varData_1646 = {
      ArrUtils: () => varData_1652
    };
    varData_700(varData_1645, varData_1646);
    var varData_1647 = param_1 => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const varData_1648 = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[varData_1648]] = [param_1[varData_1648], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_1649 = (param_1, param_2) => {
      const varData_1650 = [];
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_1650.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return varData_1650;
    };
    var varData_1651 = {
      shuffleArray: varData_1647,
      getRandomElements: varData_1649
    };
    var varData_1652 = varData_1651;
    function handleAction_88(param_1, param_2) {
      const varData_1653 = "_";
      const varData_1654 = handleAction_89((param_1_1, param_2_1, ..._0xea7f60) => {
        return param_1(param_1_1, ..._0xea7f60);
      }, param_2);
      return {
        get: function (..._0x36bc2f) {
          return varData_1654.get(varData_1653, ..._0x36bc2f);
        },
        reset: function () {
          varData_1654.reset(varData_1653);
        }
      };
    }
    function handleAction_89(param_1, param_2) {
      const varData_1655 = param_2.timeToLive || 60000;
      const varData_1656 = {};
      const varData_1657 = param_2.immediateResolve || false;
      async function handleAction_90(param_1_1, ..._0x456d65) {
        let varData_1658 = varData_1656[param_1_1];
        if (!varData_1658) {
          varData_1658 = {
            value: null,
            lastUpdated: 0
          };
          varData_1656[param_1_1] = varData_1658;
        }
        const timestamp = Date.now();
        if (varData_1658.lastUpdated === 0 || timestamp - varData_1658.lastUpdated > varData_1655) {
          const [_0x154c15, _0x37533a] = await param_1(varData_1658, param_1_1, ..._0x456d65);
          if (_0x154c15) {
            varData_1658.lastUpdated = timestamp;
            varData_1658.value = _0x37533a;
          }
          return _0x37533a;
        }
        if (varData_1657) {
          return Promise.resolve(varData_1658.value);
        } else {
          return await new Promise(param_1_2 => setTimeout(() => param_1_2(varData_1658.value), 0));
        }
      }
      return {
        get: async function (param_1_1, ..._0x875c3f) {
          return await handleAction_90(param_1_1, ..._0x875c3f);
        },
        reset: function (param_1_1) {
          const varData_1659 = varData_1656[param_1_1];
          if (varData_1659) {
            varData_1659.lastUpdated = 0;
          }
        },
        clear: function () {
          for (const varData_1660 in varData_1656) {
            delete varData_1656[varData_1660];
          }
        }
      };
    }
    function handleAction_91() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_119();
      } else {
        return new varData_692(4).toString();
      }
    }
    function handleAction_92(param_1) {
      return varData_146(param_1, varData_146.URL);
    }
    function handleAction_93(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_1661 = Date.now() - timestamp > param_2;
          if (param_1() || varData_1661) {
            clearInterval(intervalId);
            return param_1_1(varData_1661);
          }
        }, 1);
      });
    }
    function handleAction_94(param_1) {
      return new Promise(param_1_1 => setTimeout(() => param_1_1(), param_1));
    }
    function handleAction_95() {
      return handleAction_94(0);
    }
    var varData_1662 = {
      cache: handleAction_88,
      cacheableMap: handleAction_89,
      waitForCondition: handleAction_93,
      getUUID: handleAction_91,
      getStringHash: handleAction_92,
      wait: handleAction_94,
      waitForNextFrame: handleAction_95,
      deflate: varData_682,
      inflate: varData_686,
      ...varData_1485,
      ...varData_1645
    };
    var varData_1663 = varData_1662;
    var varData_1664 = (param_1 => {
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
    })(varData_1664 || {});
    var varData_1665 = {};
    var varData_1666 = (param_1, param_2) => "__cfx_export_" + param_1 + "_" + param_2;
    var varData_1667 = new Proxy((param_1, param_2) => {
      const varData_1668 = (param_1_1, ..._0x2c7ec5) => {
        const varData_1669 = param_2(..._0x2c7ec5);
        if (varData_1669 instanceof Promise) {
          varData_1669.then(param_1_2 => param_1_1(param_1_2));
        } else {
          param_1_1(varData_1669);
        }
      };
      const resourceName = GetCurrentResourceName();
      if (resourceName == undefined) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      }
      on(varData_1666(resourceName, param_1), param_1_1 => {
        param_1_1(varData_1668);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1665[param_2] == undefined) {
          varData_1665[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1670 = param_2_1 + "_async";
            return (..._0x5f17e4) => {
              return new Promise(async (param_1_2, param_2_2) => {
                const varData_1671 = await varData_1663.waitForCondition(() => GetResourceState(param_2) === "started", 60000);
                if (varData_1671) {
                  return param_2_2("Resource " + param_2 + " is not running");
                }
                if (varData_1665[param_2][varData_1670] === undefined) {
                  emit(varData_1666(param_2, param_2_1), param_1_3 => {
                    varData_1665[param_2][varData_1670] = param_1_3;
                  });
                  const varData_1672 = await varData_1663.waitForCondition(() => varData_1665[param_2][varData_1670] !== undefined, 1000);
                  if (varData_1672) {
                    return param_2_2("Failed to get export " + param_2_1 + " from resource " + param_2);
                  }
                }
                try {
                  varData_1665[param_2][varData_1670](param_1_2, ..._0x5f17e4);
                } catch (err) {
                  param_2_2(err);
                }
              });
            };
          }
        });
      }
    });
    var varData_1673 = new Proxy((param_1, param_2) => {
      const resourceName = GetCurrentResourceName();
      if (resourceName == undefined) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      } else if (typeof param_2 !== "function") {
        throw new Error("Callback is not a function");
      } else if (typeof param_1 !== "string") {
        throw new Error("Export name must be a string");
      }
      on(varData_1666(resourceName, param_1), param_1_1 => {
        param_1_1(param_2);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1665[param_2] == undefined) {
          varData_1665[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1674 = param_2_1 + "_sync";
            if (varData_1665[param_2][varData_1674] === undefined) {
              emit(varData_1666(param_2, param_2_1), param_1_2 => {
                varData_1665[param_2][varData_1674] = param_1_2;
              });
              if (varData_1665[param_2][varData_1674] === undefined) {
                if (GetResourceState(param_2) !== "started") {
                  throw new Error("Resource " + param_2 + " is not running");
                } else {
                  throw new Error("No such export " + param_2_1 + " in resource " + param_2);
                }
              }
            }
            return (..._0x23dff0) => {
              try {
                return varData_1665[param_2][varData_1674](..._0x23dff0);
              } catch (err) {
                throw new Error("An error occurred while calling export " + param_2_1 + " of resource " + param_2 + " - see above for details");
              }
            };
          }
        });
      }
    });
    on("onResourceStop", param_1 => varData_1665[param_1] = undefined);
    var varData_1675 = {
      Async: varData_1667,
      Sync: varData_1673
    };
    var varData_1676 = varData_1675;
    var dataMap = new Map();
    var dataSet = new Set();
    var resourceName = GetCurrentResourceName();
    on("np-config:configLoaded", (param_1, param_2) => {
      dataSet.add(param_1);
      if (!dataMap.has(param_1)) {
        return;
      }
      dataMap.set(param_1, param_2);
    });
    function handleAction_96(param_1) {
      if (param_1 instanceof Array) {
        return param_1.every(param_1_1 => dataSet.has(param_1_1));
      }
      return dataSet.has(param_1);
    }
    function handleAction_97(param_1, param_2) {
      if (!dataMap.has(param_1)) {
        const varData_1677 = varData_1676.Sync.config.GetModuleConfig(param_1);
        if (varData_1677 === undefined) {
          return;
        }
        dataMap.set(param_1, varData_1677);
        if (!dataSet.has(param_1)) {
          dataSet.add(param_1);
        }
      }
      const varData_1678 = dataMap.get(param_1);
      if (param_2) {
        if (varData_1678 == null) {
          return undefined;
        } else {
          return varData_1678[param_2];
        }
      } else {
        return varData_1678;
      }
    }
    function handleAction_98(param_1) {
      return handleAction_97(resourceName, param_1);
    }
    function handleAction_99() {
      return varData_1676.Sync.config.IsConfigReady();
    }
    var varData_1679 = {
      IsConfigLoaded: handleAction_96,
      GetModuleConfig: handleAction_97,
      GetResourceConfig: handleAction_98,
      IsConfigReady: handleAction_99
    };
    var varData_1680 = varData_1679;
    var varData_1681 = varData_704(varData_1483());
    var varData_1682;
    var varData_1683;
    var varData_1684;
    var varData_1685;
    var varData_1686;
    var varData_1687;
    var varData_1688;
    var varData_1689;
    var varData_1690;
    var varData_1691;
    var varData_1692;
    var varData_1693;
    var varData_1694;
    var varData_1695;
    var varData_1696;
    var varData_1697;
    var varData_1698;
    var varData_1699;
    var varData_1700;
    var varData_1701;
    var varData_1702 = class {
      constructor(param_1, param_2) {
        varData_707(this, varData_1686);
        varData_707(this, varData_1688);
        varData_707(this, varData_1690);
        varData_707(this, varData_1692);
        varData_707(this, varData_1694);
        varData_707(this, varData_1696);
        varData_707(this, varData_1698);
        varData_707(this, varData_1700);
        varData_707(this, varData_1682, undefined);
        varData_707(this, varData_1683, undefined);
        varData_707(this, varData_1684, undefined);
        varData_707(this, varData_1685, {});
        const varData_1703 = varData_710(this, varData_1694, varData_1695).call(this, param_1);
        const varData_1704 = varData_710(this, varData_1698, varData_1699).call(this, varData_1703, param_2);
        const [_0x422099, _0x4d895c, _0x11ed69] = varData_1704.split(":").map(param_1_1 => param_1_1.length > 0 ? param_1_1 : undefined);
        varData_708(this, varData_1682, _0x422099);
        varData_708(this, varData_1683, _0x4d895c);
        varData_708(this, varData_1684, _0x11ed69);
      }
      hashString(param_1) {
        return param_1;
        var varData_1705;
        const varData_1706 = varData_706(this, varData_1686, varData_1687);
        const varData_1707 = (varData_1705 = varData_706(this, varData_1685)[varData_1706]) == null ? undefined : varData_1705[param_1];
        if (varData_1707) {
          return varData_1707;
        }
        if (!varData_706(this, varData_1685)[varData_1706]) {
          varData_706(this, varData_1685)[varData_1706] = {};
        }
        const varData_1708 = varData_710(this, varData_1692, varData_1693).call(this, (0, varData_1681.HmacMD5)(param_1, varData_1706).toString());
        varData_706(this, varData_1685)[varData_1706][param_1] = varData_1708;
        if (IsDuplicityVersion()) {
          console.log("[SDK] Hash Debug | Event: " + param_1 + " | Hash: " + varData_1708);
        }
        return varData_1708;
      }
      encode(param_1) {
        return JSON.stringify(param_1);
        let varData_1709;
        const varData_1710 = varData_706(this, varData_1690, varData_1691);
        try {
          varData_1709 = varData_710(this, varData_1696, varData_1697).call(this, JSON.stringify(param_1), varData_1710);
        } catch (err) {
          console.error("Failed to encode payload");
        }
        return varData_1709;
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
        let varData_1711;
        const varData_1712 = varData_706(this, varData_1688, varData_1689);
        try {
          varData_1711 = JSON.parse(varData_710(this, varData_1698, varData_1699).call(this, param_1, varData_1712));
        } catch (err) {
          console.error("Failed to decode payload");
        }
        return varData_1711;
      }
    };
    varData_1682 = new WeakMap();
    varData_1683 = new WeakMap();
    varData_1684 = new WeakMap();
    varData_1685 = new WeakMap();
    varData_1686 = new WeakSet();
    varData_1687 = function () {
      return varData_706(this, varData_1682) ?? varData_710(this, varData_1700, varData_1701).call(this);
    };
    varData_1688 = new WeakSet();
    varData_1689 = function () {
      return varData_706(this, varData_1683) ?? varData_710(this, varData_1700, varData_1701).call(this);
    };
    varData_1690 = new WeakSet();
    varData_1691 = function () {
      return varData_706(this, varData_1684) ?? varData_710(this, varData_1700, varData_1701).call(this);
    };
    varData_1692 = new WeakSet();
    varData_1693 = function (param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1681.enc.Base64.stringify(varData_1681.enc.Utf8.parse(param_1));
    };
    varData_1694 = new WeakSet();
    varData_1695 = function (param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1681.enc.Utf8.stringify(varData_1681.enc.Base64.parse(param_1));
    };
    varData_1696 = new WeakSet();
    varData_1697 = function (param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1681.AES.encrypt(param_1, param_2).toString();
    };
    varData_1698 = new WeakSet();
    varData_1699 = function (param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1681.AES.decrypt(param_1, param_2).toString(varData_1681.enc.Utf8);
    };
    varData_1700 = new WeakSet();
    varData_1701 = function (_0x4a0232 = 128) {
      return varData_1681.lib.WordArray.random(_0x4a0232 / 8).toString();
    };
    var varData_1713;
    var varData_1714 = class {
      constructor() {
        varData_707(this, varData_1713, undefined);
        const resourceName_1 = GetCurrentResourceName();
        const varData_1715 = varData_1663.getStringHash("__npx_sdk:" + resourceName_1 + ":token");
        const varData_1716 = GetConvar(varData_1715, "");
        varData_708(this, varData_1713, new varData_1702(varData_1716, "0x47F35E00"));
      }
      on(param_1, param_2) {
        const varData_1717 = varData_706(this, varData_1713).hashString(param_1);
        return on(varData_1717, param_2);
      }
      onNet(param_1, param_2) {
        const varData_1718 = varData_706(this, varData_1713).hashString(param_1);
        onNet(varData_1718, param_2);
        const varData_1719 = varData_706(this, varData_1713).hashString(param_1 + "-c");
        onNet(varData_1719, param_1_1 => {
          const varData_1720 = varData_1663.inflate(new Uint8Array(param_1_1));
          const varData_1721 = msgpack_unpack(varData_1720);
          return param_2(...varData_1721);
        });
      }
      emit(param_1, ..._0x4fd7ed) {
        const varData_1722 = varData_706(this, varData_1713).hashString(param_1);
        return emit(varData_1722, ..._0x4fd7ed);
      }
      emitNet(param_1, ..._0x19abf9) {
        let varData_1723 = msgpack_pack(_0x19abf9);
        let varData_1724 = varData_1723.length;
        const varData_1725 = varData_706(this, varData_1713).hashString(param_1);
        if (varData_1724 < 16000) {
          TriggerServerEventInternal(varData_1725, varData_1723, varData_1723.length);
        } else {
          TriggerLatentServerEventInternal(varData_1725, varData_1723, varData_1723.length, 1024000);
        }
      }
    };
    varData_1713 = new WeakMap();
    var varData_1726 = new varData_1714();
    var varData_1727 = {
      warning: 1,
      log: 2,
      error: 3,
      debug: 4
    };
    var varData_1728 = GetConvar(GetCurrentResourceName() + "_logLevel", "");
    var varData_1729 = GetConvar("sv_loglevel", "warning");
    (() => {
      varData_1729 = (varData_1728 == null ? undefined : varData_1728.length) > 0 ? varData_1728 : varData_1729;
      if (!varData_1727[varData_1729]) {
        throw new Error("Invalid log level: " + varData_1729);
      }
    })();
    var varData_1730 = () => varData_1727[varData_1729] >= varData_1727.warning;
    var varData_1731 = () => varData_1727[varData_1729] >= varData_1727.log;
    var varData_1732 = () => varData_1727[varData_1729] >= varData_1727.error;
    var varData_1733 = () => varData_1729 === "debug";
    var varData_1734 = {
      warning: (param_1, ..._0x403741) => {
        if (!varData_1730()) {
          return;
        }
        console.log("^3[WARNING] ^7" + param_1, ..._0x403741, "^0");
      },
      log: (param_1, ..._0x56781a) => {
        if (!varData_1731()) {
          return;
        }
        console.log("^5[nopixel] ^7" + param_1, ..._0x56781a, "^0");
      },
      debug: (param_1, ..._0x473ddc) => {
        if (!varData_1733()) {
          return;
        }
        console.log("^2[D] " + param_1, ..._0x473ddc, "^0");
      },
      error: (param_1, ..._0x370983) => {
        if (!varData_1732()) {
          return;
        }
        console.log("^1[ERROR] " + param_1, ..._0x370983, "^0");
      }
    };
    var varData_1735;
    var varData_1736;
    var varData_1737;
    var varData_1738;
    var varData_1739;
    var varData_1740;
    var varData_1741;
    var varData_1742;
    var varData_1743;
    var varData_1744;
    var varData_1745;
    var varData_1746;
    var varData_1747 = class {
      constructor() {
        varData_707(this, varData_1741);
        varData_707(this, varData_1743);
        varData_707(this, varData_1745);
        varData_707(this, varData_1735, undefined);
        varData_707(this, varData_1736, undefined);
        varData_707(this, varData_1737, undefined);
        varData_707(this, varData_1738, undefined);
        varData_707(this, varData_1739, undefined);
        varData_707(this, varData_1740, undefined);
        varData_708(this, varData_1735, false);
        varData_708(this, varData_1736, new Map());
        varData_708(this, varData_1737, new Set());
        varData_708(this, varData_1738, GetGameTimer());
        varData_708(this, varData_1739, GetCurrentResourceName());
        const varData_1748 = varData_1663.getStringHash("__npx_sdk:" + varData_706(this, varData_1739) + ":token");
        const varData_1749 = GetConvar(varData_1748, "");
        varData_708(this, varData_1740, new varData_1702(varData_1749, "0x47F35E00"));
        varData_710(this, varData_1745, varData_1746).call(this);
      }
      register(param_1, param_2) {
        if (varData_706(this, varData_1737).has(param_1)) {
          return varData_1734.error("[RPC] Handler already registered | " + param_1);
        }
        varData_706(this, varData_1737).add(param_1);
        varData_710(this, varData_1741, varData_1742).call(this, "__rpc_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1750;
          let varData_1751;
          const varData_1752 = GetInvokingResource();
          if (varData_1752) {
            return;
          }
          const varData_1753 = varData_706(this, varData_1740).decode(param_1_1);
          if (!(varData_1753 == null ? undefined : varData_1753.id) || !(varData_1753 == null ? undefined : varData_1753.origin)) {
            return varData_1734.error("[RPC] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1750 = await param_2(...param_2_1);
            varData_1751 = true;
          } catch (err) {
            varData_1750 = err.message;
            varData_1751 = false;
          }
          varData_710(this, varData_1743, varData_1744).call(this, "__rpc_res:" + varData_1753.origin, varData_1753.id, [varData_1751, varData_1750]);
        });
      }
      execute(param_1, ..._0x570854) {
        const varData_1754 = {
          id: ++varData_709(this, varData_1738)._,
          origin: varData_706(this, varData_1739)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let timerId = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 60000);
          var varData_1755 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: timerId
          };
          varData_706(this, varData_1736).set(varData_1754.id, varData_1755);
        });
        promise.finally(() => varData_706(this, varData_1736).delete(varData_1754.id));
        varData_710(this, varData_1743, varData_1744).call(this, "__rpc_req:" + param_1, varData_706(this, varData_1740).encode(varData_1754), _0x570854);
        return promise;
      }
      executeCustom(param_1, param_2, ..._0x25d5eb) {
        const varData_1756 = {
          id: ++varData_709(this, varData_1738)._,
          origin: varData_706(this, varData_1739)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let timerId = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 60000);
          var varData_1757 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: timerId
          };
          varData_706(this, varData_1736).set(varData_1756.id, varData_1757);
        });
        promise.finally(() => varData_706(this, varData_1736).delete(varData_1756.id));
        varData_710(this, varData_1743, varData_1744).call(this, "__rpc_req:" + param_1, varData_706(this, varData_1740).encode(varData_1756), _0x25d5eb);
        return promise;
      }
    };
    varData_1735 = new WeakMap();
    varData_1736 = new WeakMap();
    varData_1737 = new WeakMap();
    varData_1738 = new WeakMap();
    varData_1739 = new WeakMap();
    varData_1740 = new WeakMap();
    varData_1741 = new WeakSet();
    varData_1742 = function (param_1, param_2) {
      const varData_1758 = varData_706(this, varData_1740).hashString(param_1);
      onNet(varData_1758, param_2);
      const varData_1759 = varData_706(this, varData_1740).hashString(param_1 + "-c");
      onNet(varData_1759, param_1_1 => {
        const varData_1760 = varData_1663.inflate(new Uint8Array(param_1_1));
        const varData_1761 = msgpack_unpack(varData_1760);
        return param_2(...varData_1761);
      });
    };
    varData_1743 = new WeakSet();
    varData_1744 = function (param_1, ..._0x233669) {
      let varData_1762 = msgpack_pack(_0x233669);
      let varData_1763 = varData_1762.length;
      const varData_1764 = varData_706(this, varData_1740).hashString(param_1);
      if (varData_1763 < 16000) {
        TriggerServerEventInternal(varData_1764, varData_1762, varData_1762.length);
      } else {
        TriggerLatentServerEventInternal(varData_1764, varData_1762, varData_1762.length, 1024000);
      }
    };
    varData_1745 = new WeakSet();
    varData_1746 = function () {
      if (varData_706(this, varData_1735)) {
        return varData_1734.error("SDK RPC handlers already initialized");
      }
      varData_710(this, varData_1741, varData_1742).call(this, "__rpc_res:" + varData_706(this, varData_1739), (param_1, [_0x3ad37a, _0x166449]) => {
        const varData_1765 = varData_706(this, varData_1736).get(param_1);
        if (!varData_1765) {
          return;
        }
        clearTimeout(varData_1765.timeout);
        if (_0x3ad37a) {
          varData_1765.resolve(_0x166449);
        } else {
          varData_1765.reject(new Error(_0x166449));
        }
      });
      varData_708(this, varData_1735, true);
      varData_1734.debug("SDK RPC handlers initialized");
    };
    var varData_1766 = new varData_1747();
    var varData_1767 = varData_704(varData_1483());
    var varData_1768 = (_0x4bb16f = 128) => {
      return varData_1767.lib.WordArray.random(_0x4bb16f / 8).toString();
    };
    var varData_1769 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1767.AES.encrypt(param_1, param_2).toString();
    };
    var varData_1770 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1767.AES.decrypt(param_1, param_2).toString(varData_1767.enc.Utf8);
    };
    var varData_1771 = param_1 => {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1767.enc.Base64.stringify(varData_1767.enc.Utf8.parse(param_1));
    };
    var varData_1772 = (param_1, param_2) => {
      return varData_1771((0, varData_1767.HmacMD5)(param_1, param_2).toString());
    };
    var varData_1773 = {};
    var varData_1774 = (param_1, _0x2279d6 = varData_1768()) => {
      if (varData_1773[param_1] === undefined) {
        varData_1773[param_1] = varData_1772(param_1, _0x2279d6);
      }
      return varData_1773[param_1];
    };
    var varData_1775 = (param_1, _0x1d4efa = varData_1768()) => {
      try {
        return varData_1769(JSON.stringify(param_1), _0x1d4efa);
      } catch (err) {
        console.error("Failed to encode payload");
      }
    };
    var varData_1776 = (param_1, _0x269100 = varData_1768()) => {
      try {
        return JSON.parse(varData_1770(param_1, _0x269100));
      } catch (err) {
        console.error("Failed to decode payload");
      }
    };
    var varData_1777;
    var varData_1778;
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
    var varData_1795 = class {
      constructor() {
        varData_707(this, varData_1785);
        varData_707(this, varData_1787);
        varData_707(this, varData_1789);
        varData_707(this, varData_1791);
        varData_707(this, varData_1793);
        varData_707(this, varData_1777, undefined);
        varData_707(this, varData_1778, undefined);
        varData_707(this, varData_1779, undefined);
        varData_707(this, varData_1780, undefined);
        varData_707(this, varData_1781, undefined);
        varData_707(this, varData_1782, undefined);
        varData_707(this, varData_1783, undefined);
        varData_707(this, varData_1784, undefined);
        varData_708(this, varData_1777, GetCurrentResourceName());
        varData_708(this, varData_1778, varData_1768(64));
        varData_708(this, varData_1779, varData_1768(64));
        varData_708(this, varData_1780, varData_1768(64));
        varData_708(this, varData_1781, false);
        varData_708(this, varData_1782, 0);
        varData_708(this, varData_1783, []);
        varData_708(this, varData_1784, new Map());
        varData_710(this, varData_1785, varData_1786).call(this, "__npx_sdk:init", varData_710(this, varData_1793, varData_1794).bind(this));
      }
      async register(param_1, param_2) {
        varData_710(this, varData_1787, varData_1788).call(this, "__nui_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1796;
          let varData_1797;
          const varData_1798 = varData_1776(param_1_1, varData_706(this, varData_1779));
          if (!(varData_1798 == null ? undefined : varData_1798.id) || !(varData_1798 == null ? undefined : varData_1798.resource)) {
            return varData_1734.error("[NUI] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1796 = await param_2(...param_2_1);
            varData_1797 = true;
          } catch (err) {
            varData_1796 = err.message;
            varData_1797 = false;
          }
          varData_710(this, varData_1791, varData_1792).call(this, "__nui_res:" + varData_1798.resource, varData_1798.id, [varData_1797, varData_1796]);
        });
      }
      remove(param_1) {
        const varData_1799 = varData_1774("__nui_req:" + param_1, varData_706(this, varData_1778));
        UnregisterRawNuiCallback(varData_1799);
      }
      async execute(param_1, ..._0x89c5fd) {
        const varData_1800 = {
          id: ++varData_709(this, varData_1782)._,
          resource: varData_706(this, varData_1777)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let varData_1801;
          if (varData_706(this, varData_1781)) {
            varData_1801 = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 60000);
          } else {
            varData_1801 = 0;
          }
          var varData_1802 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: varData_1801
          };
          varData_706(this, varData_1784).set(varData_1800.id, varData_1802);
        });
        promise.finally(() => varData_706(this, varData_1784).delete(varData_1800.id));
        if (!varData_706(this, varData_1781)) {
          var varData_1803 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1800,
            args: _0x89c5fd
          };
          varData_706(this, varData_1783).push(varData_1803);
        } else {
          varData_710(this, varData_1791, varData_1792).call(this, "__nui_req:" + param_1, varData_1775(varData_1800, varData_706(this, varData_1780)), _0x89c5fd);
        }
        return promise;
      }
      async executeCustom(param_1, param_2, ..._0x531170) {
        const varData_1804 = {
          id: ++varData_709(this, varData_1782)._,
          resource: varData_706(this, varData_1777)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let varData_1805;
          if (varData_706(this, varData_1781)) {
            varData_1805 = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 60000);
          } else {
            varData_1805 = 0;
          }
          var varData_1806 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: varData_1805
          };
          varData_706(this, varData_1784).set(varData_1804.id, varData_1806);
        });
        promise.finally(() => varData_706(this, varData_1784).delete(varData_1804.id));
        if (!varData_706(this, varData_1781)) {
          var varData_1807 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1804,
            args: _0x531170
          };
          varData_706(this, varData_1783).push(varData_1807);
        } else {
          varData_710(this, varData_1791, varData_1792).call(this, "__nui_req:" + param_1, varData_1775(varData_1804, varData_706(this, varData_1780)), _0x531170);
        }
        return promise;
      }
    };
    varData_1777 = new WeakMap();
    varData_1778 = new WeakMap();
    varData_1779 = new WeakMap();
    varData_1780 = new WeakMap();
    varData_1781 = new WeakMap();
    varData_1782 = new WeakMap();
    varData_1783 = new WeakMap();
    varData_1784 = new WeakMap();
    varData_1785 = new WeakSet();
    varData_1786 = function (param_1, param_2) {
      RegisterNuiCallback(param_1, ({
        args: _0x21f332
      }, param_2_1) => {
        param_2_1(true);
        return param_2(..._0x21f332);
      });
    };
    varData_1787 = new WeakSet();
    varData_1788 = function (param_1, param_2) {
      if (varData_706(this, varData_1781)) {
        const varData_1808 = varData_1774(param_1, varData_706(this, varData_1778));
        return varData_710(this, varData_1785, varData_1786).call(this, varData_1808, param_2);
      }
      var varData_1809 = {
        type: "on",
        event: param_1,
        callback: param_2
      };
      varData_706(this, varData_1783).push(varData_1809);
    };
    varData_1789 = new WeakSet();
    varData_1790 = function (param_1, ..._0x3c145f) {
      var varData_1810 = {
        event: param_1,
        args: _0x3c145f
      };
      SendNuiMessage(JSON.stringify(varData_1810, null));
    };
    varData_1791 = new WeakSet();
    varData_1792 = function (param_1, ..._0x301bf6) {
      if (varData_706(this, varData_1781)) {
        const varData_1811 = varData_1774(param_1, varData_706(this, varData_1778));
        return varData_710(this, varData_1789, varData_1790).call(this, varData_1811, ..._0x301bf6);
      }
      var varData_1812 = {
        type: "emit",
        event: param_1,
        args: _0x301bf6
      };
      varData_706(this, varData_1783).push(varData_1812);
    };
    varData_1793 = new WeakSet();
    varData_1794 = async function () {
      varData_708(this, varData_1781, true);
      varData_710(this, varData_1787, varData_1788).call(this, "__nui_res:" + varData_706(this, varData_1777), (param_1, [_0x3fa44b, _0x123191]) => {
        const varData_1813 = varData_706(this, varData_1784).get(param_1);
        if (!varData_1813) {
          return varData_1734.error("[NUI] Invalid response received");
        }
        clearTimeout(varData_1813.timeout);
        if (_0x3fa44b) {
          varData_1813.resolve(_0x123191);
        } else {
          varData_1813.reject(_0x123191);
        }
      });
      varData_710(this, varData_1789, varData_1790).call(this, "__npx_sdk:ready", varData_1771(varData_706(this, varData_1778) + ":" + varData_706(this, varData_1779) + ":" + varData_706(this, varData_1780)));
      varData_1734.debug("[NUI] SDK initialized");
      for (const varData_1814 of varData_706(this, varData_1783)) {
        if (varData_1814.type === "on") {
          varData_710(this, varData_1787, varData_1788).call(this, varData_1814.event, varData_1814.callback);
        } else if (varData_1814.type === "emit") {
          setTimeout(() => varData_710(this, varData_1791, varData_1792).call(this, varData_1814.event, ...varData_1814.args), 1000);
        } else if (varData_1814.type === "execute") {
          const varData_1815 = varData_706(this, varData_1784).get(varData_1814.metadata.id);
          if (!varData_1815) {
            varData_1734.error("[RPC] " + varData_1814.event + " - Failed to execute queued RPC call");
            continue;
          }
          varData_1815.timeout = setTimeout(() => varData_1815.reject(new Error("RPC timed out | " + varData_1814.event)), 60000);
          setTimeout(() => varData_710(this, varData_1791, varData_1792).call(this, varData_1814.event, varData_1775(varData_1814.metadata, varData_706(this, varData_1780)), varData_1814.args), 1000);
        }
      }
    };
    var varData_1816;
    var varData_1817;
    var varData_1818;
    var varData_1819 = class {
      constructor(param_1) {
        varData_707(this, varData_1816, undefined);
        varData_707(this, varData_1817, undefined);
        varData_707(this, varData_1818, new Map());
        varData_708(this, varData_1816, param_1);
        varData_708(this, varData_1817, false);
        const resourceName_1 = GetCurrentResourceName();
        on("onResourceStop", param_1_1 => {
          if (param_1_1 === resourceName_1) {
            for (const [_0x359be5, _0x279b59] of varData_706(this, varData_1818).entries()) {
              varData_1676.Sync[varData_706(this, varData_1816)].removeNuiEvent(_0x359be5);
            }
          }
        });
        on("onResourceStart", async param_1_1 => {
          if (param_1_1 === varData_706(this, varData_1816)) {
            await varData_1663.waitForCondition(() => GetResourceState(varData_706(this, varData_1816)) === "started", 10000);
            if (varData_706(this, varData_1817)) {
              for (const [_0x1ab399, _0xe83dbf] of varData_706(this, varData_1818).entries()) {
                varData_1676.Sync[varData_706(this, varData_1816)].removeNuiEvent(_0x1ab399);
                this.register(_0x1ab399, _0xe83dbf);
              }
            }
            varData_708(this, varData_1817, true);
          }
          if (param_1_1 === resourceName_1) {
            await varData_1663.waitForCondition(() => GetResourceState(varData_706(this, varData_1816)) === "started", 10000);
            varData_708(this, varData_1817, true);
          }
        });
      }
      async execute(param_1, ..._0x5b9599) {
        return await varData_1676.Async[varData_706(this, varData_1816)].sendNuiEvent(param_1, _0x5b9599);
      }
      async register(param_1, param_2) {
        await varData_1663.waitForCondition(() => varData_706(this, varData_1817), 10000);
        const varData_1820 = varData_1676.Sync[varData_706(this, varData_1816)].registerNuiEvent(param_1, param_2);
        if (varData_1820) {
          varData_706(this, varData_1818).set(param_1, param_2);
        }
      }
    };
    varData_1816 = new WeakMap();
    varData_1817 = new WeakMap();
    varData_1818 = new WeakMap();
    var varData_1821 = class {
      constructor() {
        const varData_1822 = async (param_1, param_2) => {
          return await varData_1827.execute(param_1, ...param_2);
        };
        varData_1676.Async("sendNuiEvent", varData_1822);
        const varData_1823 = (param_1, param_2) => {
          varData_1827.register(param_1, param_2);
          return true;
        };
        varData_1676.Sync("registerNuiEvent", varData_1823);
        const varData_1824 = param_1 => {
          varData_1827.remove(param_1);
        };
        varData_1676.Sync("removeNuiEvent", varData_1824);
      }
    };
    var varData_1825 = null && varData_1819;
    var varData_1826 = null && varData_1821;
    var varData_1827 = new varData_1795();
    var varData_1828;
    var varData_1829;
    var varData_1830;
    var varData_1831 = class {
      constructor() {
        varData_707(this, varData_1828, undefined);
        varData_707(this, varData_1829, undefined);
        varData_707(this, varData_1830, undefined);
        varData_708(this, varData_1830, false);
        varData_1827.register("__npx_sdk:sockets:init", async () => {
          varData_1734.debug("Sockets", "Initializing sockets...");
          if (varData_706(this, varData_1830)) {
            return {
              url: varData_706(this, varData_1828),
              API_KEY: varData_706(this, varData_1829)
            };
          }
          const varData_1832 = await new Promise(param_1 => {
            emit("__npx_core:sockets:init", param_1);
          });
          if (!(varData_1832 == null ? undefined : varData_1832.API_URL) || !(varData_1832 == null ? undefined : varData_1832.API_KEY)) {
            return;
          }
          varData_708(this, varData_1828, varData_1832.API_URL);
          varData_708(this, varData_1829, varData_1832.API_KEY);
          varData_708(this, varData_1830, true);
          varData_1734.debug("Sockets", "Sockets initialized.");
          return varData_1832;
        });
      }
      register(param_1, param_2) {
        varData_1827.execute("__npx_sdk:sockets:register", param_1);
        varData_1827.register("__npx_sdk:sockets:pipe:" + param_1, async param_1_1 => {
          return param_2(param_1_1);
        });
      }
      async execute(param_1, param_2) {
        return varData_1827.execute("__npx_sdk:sockets:execute", param_1, param_2);
      }
    };
    varData_1828 = new WeakMap();
    varData_1829 = new WeakMap();
    varData_1830 = new WeakMap();
    var varData_1833 = new varData_1831();
    var varData_1834 = {
      HasItem: async (param_1, param_2) => {
        return await varData_1676.Sync.inventory.HasItem(param_1, param_2);
      },
      GetItemStacks: async (param_1, param_2) => {
        return await varData_1676.Sync.inventory.GetItemStacks(param_1, param_2);
      },
      GetAllItemStacks: async param_1 => {
        return await varData_1676.Sync.inventory.GetAllItemStacks(param_1);
      },
      GetItemList: async () => {
        return await varData_1676.Sync.inventory.GetItemList();
      },
      GetPlayerInventories: async () => {
        return await varData_1676.Sync.inventory.GetPlayerInventories();
      },
      GetPlayerInventoriesWeight: async () => {
        return await varData_1676.Sync.inventory.GetPlayerInventoriesWeight();
      },
      GetWeaponsList: () => {
        return varData_1676.Sync.inventory.GetWeaponsList();
      },
      GetWeapon: param_1 => {
        return varData_1676.Sync.inventory.GetWeapon(param_1);
      },
      GetWeaponByItemStack: param_1 => {
        return varData_1676.Sync.inventory.GetWeaponByItemStack(param_1);
      },
      OpenInventory: (param_1, param_2) => {
        varData_1676.Sync.inventory.OpenInventory(param_1, param_2);
      },
      UseBodySlot: param_1 => {
        return varData_1676.Async.inventory.UseBodySlot(param_1);
      },
      SetBodySlotDisabled: (param_1, param_2, param_3) => {
        varData_1676.Sync.inventory.SetBodySlotDisabled(param_1, param_2, param_3);
      },
      IsBodySlotDisabled: (param_1, param_2) => {
        return varData_1676.Sync.inventory.IsBodySlotDisabled(param_1, param_2);
      }
    };
    var varData_1835 = {};
    var varData_1836 = {
      Activity: () => varData_1913,
      ActivityObjective: () => varData_1887,
      ActivityTask: () => varData_1866,
      Cache: () => varData_1504,
      Group: () => varData_1945,
      GroupManager: () => varData_1970,
      GroupMember: () => varData_1960,
      PolyZone: () => varData_1580,
      Thread: () => varData_1837,
      Vector2: () => varData_1631,
      Vector3: () => varData_1501
    };
    varData_700(varData_1835, varData_1836);
    var varData_1837 = class {
      constructor(param_1, param_2, _0x248ced = "interval") {
        this.callback = param_1;
        this.delay = param_2;
        this.mode = _0x248ced;
        this.scheduled = {};
        this.tick = 0;
        this.data = {};
        this.active = false;
        this.aborted = false;
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
        const varData_1838 = this.hooks.get("preStart") ?? [];
        try {
          for (const varData_1839 of varData_1838) {
            if (!this.aborted) {
              await varData_1839.call(this);
            }
          }
        } catch (err) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", err.message);
        }
        if (this.aborted) {
          try {
            const varData_1840 = this.hooks.get("startAborted") ?? [];
            for (const varData_1841 of varData_1840) {
              await varData_1841.call(this);
            }
          } catch (err) {
            console.log("Error while calling start-aborted hook", err.message);
          }
          return;
        }
        this.active = true;
        const varData_1842 = this.hooks.get("active") ?? [];
        switch (this.mode) {
          case "tick":
            {
              this.threadId = setTick(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const varData_1843 of varData_1842) {
                    await varData_1843.call(this);
                  }
                } catch (err) {
                  console.log("Error while calling active hook", err.message);
                }
                if (this.delay > 0) {
                  await new Promise(param_1 => setTimeout(param_1, this.delay));
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
                  for (const varData_1844 of varData_1842) {
                    await varData_1844.call(this);
                  }
                } catch (err) {
                  console.log("Error while calling active hook", err.message);
                }
              }, this.delay);
              break;
            }
          case "timeout":
            {
              const varData_1845 = () => {
                if (this.active) {
                  this.threadId = setTimeout(async () => {
                    this.tick += 1;
                    try {
                      await this.callback.call(this);
                      for (const varData_1846 of varData_1842) {
                        await varData_1846.call(this);
                      }
                    } catch (err) {
                      console.log("Error while calling active hook", err.message);
                    }
                    return varData_1845();
                  }, this.delay);
                }
              };
              varData_1845();
              break;
            }
        }
        const varData_1847 = this.hooks.get("afterStart") ?? [];
        try {
          for (const varData_1848 of varData_1847) {
            await varData_1848.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-start hook", err.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const varData_1849 = this.hooks.get("preStop") ?? [];
        try {
          for (const varData_1850 of varData_1849) {
            if (!this.aborted) {
              await varData_1850.call(this);
            }
          }
        } catch (err) {
          this.aborted = true;
          console.log("Error while calling pre-stop hook", err.message);
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
            const varData_1851 = this.hooks.get("stopAborted") ?? [];
            for (const varData_1852 of varData_1851) {
              await varData_1852.call(this);
            }
          } catch (err) {
            console.log("Error while calling stop-aborted hook", err.message);
          }
          return;
        }
        const varData_1853 = this.hooks.get("afterStop") ?? [];
        try {
          for (const varData_1854 of varData_1853) {
            await varData_1854.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-stop hook", err.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(param_1, param_2) {
        var varData_1855;
        if ((varData_1855 = this.hooks.get(param_1)) == null) {
          undefined;
        } else {
          varData_1855.push(param_2);
        }
      }
      setNextTick(param_1, param_2) {
        this.scheduled[param_1] = this.tick + param_2;
      }
      canTick(param_1) {
        return this.scheduled[param_1] === undefined || this.tick >= this.scheduled[param_1];
      }
    };
    var varData_1856;
    var varData_1857;
    var varData_1858;
    var varData_1859;
    var varData_1860;
    var varData_1861;
    var varData_1862;
    var varData_1863;
    var varData_1864;
    var varData_1865;
    var varData_1866 = class {
      constructor(param_1, param_2) {
        varData_707(this, varData_1862);
        varData_707(this, varData_1864);
        varData_707(this, varData_1856, undefined);
        varData_707(this, varData_1857, undefined);
        varData_707(this, varData_1858, undefined);
        varData_707(this, varData_1859, undefined);
        varData_707(this, varData_1860, undefined);
        varData_707(this, varData_1861, undefined);
        varData_708(this, varData_1856, param_1.id);
        varData_708(this, varData_1857, param_2);
        varData_708(this, varData_1858, new Map());
        varData_708(this, varData_1861, "pending");
        varData_708(this, varData_1859, param_1.required.map(param_1_1 => param_2.objectives.get(param_1_1)));
        varData_708(this, varData_1860, new Map(param_1.objectives.map(param_1_1 => [param_1_1, param_2.objectives.get(param_1_1)])));
        if (param_1.status !== "pending") {
          setTimeout(() => varData_710(this, varData_1862, varData_1863).call(this, param_1.status), 3000);
        }
        varData_1726.onNet("__npx_activities:" + varData_706(this, varData_1857).id + ":task:" + varData_706(this, varData_1856) + ":statusUpdate", varData_710(this, varData_1862, varData_1863).bind(this));
      }
      get id() {
        return varData_706(this, varData_1856);
      }
      onTaskStarted(param_1) {
        const varData_1867 = varData_706(this, varData_1858).get("onTaskStarted") ?? [];
        if (!varData_706(this, varData_1858).has("onTaskStarted")) {
          varData_706(this, varData_1858).set("onTaskStarted", varData_1867);
        }
        varData_1867.push(param_1);
      }
      onTaskEnded(param_1) {
        const varData_1868 = varData_706(this, varData_1858).get("onTaskEnded") ?? [];
        if (!varData_706(this, varData_1858).has("onTaskEnded")) {
          varData_706(this, varData_1858).set("onTaskEnded", varData_1868);
        }
        varData_1868.push(param_1);
      }
      emitEvent(param_1, ..._0x3103df) {
        return varData_1766.execute("__npx_activities:" + varData_706(this, varData_1857).id + ":task:" + varData_706(this, varData_1856) + ":event", param_1, ..._0x3103df);
      }
      toJSON() {
        return {
          id: varData_706(this, varData_1856),
          status: varData_706(this, varData_1861),
          objectives: [...varData_706(this, varData_1860).keys()],
          required: varData_706(this, varData_1859).map(param_1 => param_1.id)
        };
      }
      destroy() {
        varData_706(this, varData_1858).clear();
      }
    };
    varData_1856 = new WeakMap();
    varData_1857 = new WeakMap();
    varData_1858 = new WeakMap();
    varData_1859 = new WeakMap();
    varData_1860 = new WeakMap();
    varData_1861 = new WeakMap();
    varData_1862 = new WeakSet();
    varData_1863 = function (param_1) {
      const varData_1869 = varData_706(this, varData_1861);
      varData_708(this, varData_1861, param_1);
      if (varData_1869 === "pending" && param_1 === "active") {
        varData_710(this, varData_1864, varData_1865).call(this, "onTaskStarted");
      } else if (varData_1869 === "active" && (param_1 === "completed" || param_1 === "failed")) {
        varData_710(this, varData_1864, varData_1865).call(this, "onTaskEnded", param_1 === "completed");
      }
      varData_710(this, varData_1864, varData_1865).call(this, "onStatusUpdate", param_1);
    };
    varData_1864 = new WeakSet();
    varData_1865 = function (param_1, ..._0x2fffd5) {
      const varData_1870 = varData_706(this, varData_1858).get(param_1);
      if (!varData_1870) {
        return;
      }
      for (const varData_1871 of varData_1870) {
        try {
          varData_1871.call(this, ..._0x2fffd5);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1872;
    var varData_1873;
    var varData_1874;
    var varData_1875;
    var varData_1876;
    var varData_1877;
    var varData_1878;
    var varData_1879;
    var varData_1880;
    var varData_1881;
    var varData_1882;
    var varData_1883;
    var varData_1884;
    var varData_1885;
    var varData_1886;
    var varData_1887 = class {
      constructor(param_1, param_2) {
        varData_707(this, varData_1879);
        varData_707(this, varData_1881);
        varData_707(this, varData_1883);
        varData_707(this, varData_1885);
        varData_707(this, varData_1872, undefined);
        varData_707(this, varData_1873, undefined);
        varData_707(this, varData_1874, undefined);
        varData_707(this, varData_1875, undefined);
        varData_707(this, varData_1876, undefined);
        varData_707(this, varData_1877, undefined);
        varData_707(this, varData_1878, undefined);
        varData_708(this, varData_1872, param_1.id);
        varData_708(this, varData_1873, param_1.name);
        varData_708(this, varData_1874, param_1.description);
        varData_708(this, varData_1875, param_2);
        varData_708(this, varData_1876, new Map());
        varData_708(this, varData_1877, param_1.status);
        varData_708(this, varData_1878, new Map(Object.entries(param_1.data ?? {})));
        varData_1726.onNet("__npx_activities:" + varData_706(this, varData_1875).id + ":objective:" + varData_706(this, varData_1872) + ":statusUpdate", varData_710(this, varData_1879, varData_1880).bind(this));
        varData_1726.onNet("__npx_activities:" + varData_706(this, varData_1875).id + ":objective:" + varData_706(this, varData_1872) + ":dataUpdate", varData_710(this, varData_1881, varData_1882).bind(this));
        varData_1726.onNet("__npx_activities:" + varData_706(this, varData_1875).id + ":objective:" + varData_706(this, varData_1872) + ":dataSet", varData_710(this, varData_1883, varData_1884).bind(this));
      }
      get id() {
        return varData_706(this, varData_1872);
      }
      get name() {
        return varData_706(this, varData_1873);
      }
      get description() {
        return varData_706(this, varData_1874);
      }
      get status() {
        return varData_706(this, varData_1877);
      }
      get activity() {
        return varData_706(this, varData_1875);
      }
      getData(param_1) {
        return varData_706(this, varData_1878).get(param_1);
      }
      onStatusUpdate(param_1) {
        const varData_1888 = varData_706(this, varData_1876).get("onStatusUpdate") ?? [];
        if (!varData_706(this, varData_1876).has("onStatusUpdate")) {
          varData_706(this, varData_1876).set("onStatusUpdate", varData_1888);
        }
        varData_1888.push(param_1);
      }
      onDataUpdate(param_1) {
        const varData_1889 = varData_706(this, varData_1876).get("onDataUpdate") ?? [];
        if (!varData_706(this, varData_1876).has("onDataUpdate")) {
          varData_706(this, varData_1876).set("onDataUpdate", varData_1889);
        }
        varData_1889.push(param_1);
      }
      toJSON() {
        return {
          id: varData_706(this, varData_1872),
          name: varData_706(this, varData_1873),
          description: varData_706(this, varData_1874),
          status: varData_706(this, varData_1877),
          data: Object.fromEntries(varData_706(this, varData_1878))
        };
      }
      destroy() {
        varData_706(this, varData_1876).clear();
      }
    };
    varData_1872 = new WeakMap();
    varData_1873 = new WeakMap();
    varData_1874 = new WeakMap();
    varData_1875 = new WeakMap();
    varData_1876 = new WeakMap();
    varData_1877 = new WeakMap();
    varData_1878 = new WeakMap();
    varData_1879 = new WeakSet();
    varData_1880 = function (param_1) {
      varData_708(this, varData_1877, param_1);
      varData_710(this, varData_1885, varData_1886).call(this, "onStatusUpdated", param_1);
    };
    varData_1881 = new WeakSet();
    varData_1882 = function (param_1, param_2) {
      varData_706(this, varData_1878).set(param_1, param_2);
      varData_710(this, varData_1885, varData_1886).call(this, "onDataUpdate", param_1, param_2);
    };
    varData_1883 = new WeakSet();
    varData_1884 = function (param_1) {
      for (const [_0x53b23d, _0x46baa1] of Object.entries(param_1)) {
        varData_706(this, varData_1878).set(_0x53b23d, _0x46baa1);
        varData_710(this, varData_1885, varData_1886).call(this, "onDataUpdate", _0x53b23d, _0x46baa1);
      }
    };
    varData_1885 = new WeakSet();
    varData_1886 = function (param_1, ..._0x4309d7) {
      const varData_1890 = varData_706(this, varData_1876).get(param_1);
      if (!varData_1890) {
        return;
      }
      for (const varData_1891 of varData_1890) {
        try {
          varData_1891.call(this, ..._0x4309d7);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1892;
    var varData_1893;
    var varData_1894;
    var varData_1895;
    var varData_1896;
    var varData_1897;
    var varData_1898;
    var varData_1899;
    var varData_1900;
    var varData_1901;
    var varData_1902;
    var varData_1903;
    var varData_1904;
    var varData_1905;
    var varData_1906;
    var varData_1907;
    var varData_1908;
    var varData_1909;
    var varData_1910;
    var varData_1911;
    var varData_1912;
    var varData_1913 = class {
      constructor(param_1) {
        varData_707(this, varData_1901);
        varData_707(this, varData_1903);
        varData_707(this, varData_1905);
        varData_707(this, varData_1907);
        varData_707(this, varData_1909);
        varData_707(this, varData_1911);
        varData_707(this, varData_1892, undefined);
        varData_707(this, varData_1893, undefined);
        varData_707(this, varData_1894, undefined);
        varData_707(this, varData_1895, undefined);
        varData_707(this, varData_1896, undefined);
        varData_707(this, varData_1897, undefined);
        varData_707(this, varData_1898, undefined);
        varData_707(this, varData_1899, undefined);
        varData_707(this, varData_1900, undefined);
        varData_708(this, varData_1892, param_1.id);
        varData_708(this, varData_1893, param_1.code);
        varData_708(this, varData_1894, param_1.name);
        varData_708(this, varData_1895, param_1.description);
        varData_708(this, varData_1896, new Map());
        varData_708(this, varData_1897, "pending");
        varData_708(this, varData_1898, param_1.deadline ? new Date(param_1.deadline) : null);
        varData_708(this, varData_1899, new Map());
        varData_708(this, varData_1900, new Map());
        if (param_1.status !== "pending") {
          setTimeout(() => varData_710(this, varData_1901, varData_1902).call(this, param_1.status), 3000);
        }
        param_1.objectives.forEach(param_1_1 => varData_710(this, varData_1903, varData_1904).call(this, param_1_1));
        param_1.tasks.forEach(param_1_1 => varData_710(this, varData_1907, varData_1908).call(this, param_1_1));
        varData_1726.onNet("__npx_activities:" + varData_706(this, varData_1892) + ":statusUpdate", varData_710(this, varData_1901, varData_1902).bind(this));
        varData_1726.onNet("__npx_activities:" + varData_706(this, varData_1892) + ":objectiveAdded", varData_710(this, varData_1903, varData_1904).bind(this));
        varData_1726.onNet("__npx_activities:" + varData_706(this, varData_1892) + ":objectiveRemoved", varData_710(this, varData_1905, varData_1906).bind(this));
        varData_1726.onNet("__npx_activities:" + varData_706(this, varData_1892) + ":taskAdded", varData_710(this, varData_1907, varData_1908).bind(this));
        varData_1726.onNet("__npx_activities:" + varData_706(this, varData_1892) + ":taskRemoved", varData_710(this, varData_1909, varData_1910).bind(this));
      }
      get id() {
        return varData_706(this, varData_1892);
      }
      get status() {
        return varData_706(this, varData_1897);
      }
      get objectives() {
        return varData_706(this, varData_1900);
      }
      on(param_1, param_2) {
        const varData_1914 = varData_706(this, varData_1896).get(param_1) ?? [];
        if (!varData_706(this, varData_1896).has(param_1)) {
          varData_706(this, varData_1896).set(param_1, varData_1914);
        }
        varData_1914.push(param_2);
      }
      toJSON() {
        var varData_1915;
        return {
          id: varData_706(this, varData_1892),
          code: varData_706(this, varData_1893),
          name: varData_706(this, varData_1894),
          description: varData_706(this, varData_1895),
          status: varData_706(this, varData_1897),
          deadline: ((varData_1915 = varData_706(this, varData_1898)) == null ? undefined : varData_1915.getTime()) ?? null,
          tasks: [...varData_706(this, varData_1899).values()].map(param_1 => param_1.toJSON()),
          objectives: [...varData_706(this, varData_1900).values()].map(param_1 => param_1.toJSON())
        };
      }
      destroy() {
        varData_706(this, varData_1899).forEach(param_1 => param_1.destroy());
        varData_706(this, varData_1900).forEach(param_1 => param_1.destroy());
        varData_706(this, varData_1899).clear();
        varData_706(this, varData_1900).clear();
        varData_706(this, varData_1896).clear();
      }
    };
    varData_1892 = new WeakMap();
    varData_1893 = new WeakMap();
    varData_1894 = new WeakMap();
    varData_1895 = new WeakMap();
    varData_1896 = new WeakMap();
    varData_1897 = new WeakMap();
    varData_1898 = new WeakMap();
    varData_1899 = new WeakMap();
    varData_1900 = new WeakMap();
    varData_1901 = new WeakSet();
    varData_1902 = function (param_1) {
      const varData_1916 = varData_706(this, varData_1897);
      varData_708(this, varData_1897, param_1);
      if (varData_1916 === "pending" && param_1 === "active") {
        varData_710(this, varData_1911, varData_1912).call(this, "onActivityStarted");
      } else if (param_1 === "completed" || param_1 === "failed") {
        varData_710(this, varData_1911, varData_1912).call(this, "onActivityEnded", param_1, param_1 === "completed");
      }
      varData_710(this, varData_1911, varData_1912).call(this, "onStatusUpdate", param_1);
    };
    varData_1903 = new WeakSet();
    varData_1904 = function (param_1) {
      const varData_1917 = new varData_1887(param_1, this);
      varData_1917.onStatusUpdate(param_1_1 => varData_710(this, varData_1911, varData_1912).call(this, "onObjectiveStatusUpdate", varData_1917, param_1_1));
      varData_1917.onDataUpdate((param_1_1, param_2) => varData_710(this, varData_1911, varData_1912).call(this, "onObjectiveDataUpdate", varData_1917, param_1_1, param_2));
      varData_706(this, varData_1900).set(varData_1917.id, varData_1917);
      varData_710(this, varData_1911, varData_1912).call(this, "onObjectiveAdded", varData_1917);
    };
    varData_1905 = new WeakSet();
    varData_1906 = function (param_1) {
      const varData_1918 = varData_706(this, varData_1900).get(param_1.id);
      if (!varData_1918) {
        return;
      }
      varData_706(this, varData_1900).delete(param_1.id);
      varData_710(this, varData_1911, varData_1912).call(this, "onObjectiveRemoved", varData_1918);
      varData_1918.destroy();
    };
    varData_1907 = new WeakSet();
    varData_1908 = function (param_1) {
      const varData_1919 = new varData_1866(param_1, this);
      varData_1919.onTaskStarted(() => varData_710(this, varData_1911, varData_1912).call(this, "onTaskStarted", varData_1919));
      varData_1919.onTaskEnded(param_1_1 => varData_710(this, varData_1911, varData_1912).call(this, "onTaskEnded", varData_1919, param_1_1));
      varData_706(this, varData_1899).set(varData_1919.id, varData_1919);
      varData_710(this, varData_1911, varData_1912).call(this, "onTaskAdded", varData_1919);
    };
    varData_1909 = new WeakSet();
    varData_1910 = function (param_1) {
      const varData_1920 = varData_706(this, varData_1899).get(param_1.id);
      if (!varData_1920) {
        return;
      }
      varData_706(this, varData_1899).delete(param_1.id);
      varData_710(this, varData_1911, varData_1912).call(this, "onTaskRemoved", varData_1920);
      varData_1920.destroy();
    };
    varData_1911 = new WeakSet();
    varData_1912 = function (param_1, ..._0x193d6a) {
      const varData_1921 = varData_706(this, varData_1896).get(param_1);
      if (!varData_1921) {
        return;
      }
      for (const varData_1922 of varData_1921) {
        try {
          varData_1922.call(this, ..._0x193d6a);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1923;
    var varData_1924;
    var varData_1925;
    var varData_1926;
    var varData_1927;
    var varData_1928;
    var varData_1929;
    var varData_1930;
    var varData_1931;
    var varData_1932;
    var varData_1933;
    var varData_1934;
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
    var varData_1945 = class {
      constructor(param_1) {
        varData_707(this, varData_1931);
        varData_707(this, varData_1933);
        varData_707(this, varData_1935);
        varData_707(this, varData_1937);
        varData_707(this, varData_1939);
        varData_707(this, varData_1941);
        varData_707(this, varData_1943);
        varData_707(this, varData_1923, undefined);
        varData_707(this, varData_1924, undefined);
        varData_707(this, varData_1925, undefined);
        varData_707(this, varData_1926, undefined);
        varData_707(this, varData_1927, undefined);
        varData_707(this, varData_1928, undefined);
        varData_707(this, varData_1929, undefined);
        varData_707(this, varData_1930, undefined);
        varData_708(this, varData_1923, param_1.id);
        varData_708(this, varData_1925, new Map());
        varData_708(this, varData_1926, param_1.name);
        varData_708(this, varData_1927, param_1.capacity);
        varData_708(this, varData_1929, null);
        varData_708(this, varData_1930, new Map(Object.entries(param_1.data)));
        varData_708(this, varData_1924, new Map());
        varData_708(this, varData_1928, null);
        for (const varData_1946 of param_1.members) {
          const varData_1947 = new varData_1960(varData_1946, this);
          varData_706(this, varData_1924).set(varData_1947.characterId, varData_1947);
          if (varData_1946.isLeader) {
            varData_708(this, varData_1928, varData_1947);
          }
        }
        if (param_1.activity) {
          setTimeout(() => varData_710(this, varData_1941, varData_1942).call(this, param_1.activity), 3000);
        }
        varData_1726.onNet("__npx_groups:group:" + varData_706(this, varData_1923) + ":data:update", varData_710(this, varData_1933, varData_1934).bind(this));
        varData_1726.onNet("__npx_groups:group:" + varData_706(this, varData_1923) + ":activity:set", varData_710(this, varData_1941, varData_1942).bind(this));
        varData_1726.onNet("__npx_groups:group:" + varData_706(this, varData_1923) + ":group:update", varData_710(this, varData_1931, varData_1932).bind(this));
        varData_1726.onNet("__npx_groups:group:" + varData_706(this, varData_1923) + ":member:joined", varData_710(this, varData_1935, varData_1936).bind(this));
        varData_1726.onNet("__npx_groups:group:" + varData_706(this, varData_1923) + ":member:left", varData_710(this, varData_1937, varData_1938).bind(this));
        varData_1726.onNet("__npx_groups:group:" + varData_706(this, varData_1923) + ":member:update", varData_710(this, varData_1939, varData_1940).bind(this));
      }
      get id() {
        return varData_706(this, varData_1923);
      }
      get name() {
        return varData_706(this, varData_1926);
      }
      get capacity() {
        return varData_706(this, varData_1927);
      }
      get size() {
        return varData_706(this, varData_1924).size;
      }
      get leader() {
        return varData_706(this, varData_1928);
      }
      get members() {
        return [...varData_706(this, varData_1924).values()];
      }
      get activity() {
        return varData_706(this, varData_1929);
      }
      on(param_1, param_2) {
        const varData_1948 = varData_706(this, varData_1925).get(param_1) ?? [];
        if (!varData_706(this, varData_1925).has(param_1)) {
          varData_706(this, varData_1925).set(param_1, varData_1948);
        }
        varData_1948.push(param_2);
      }
      getValue(param_1) {
        return varData_706(this, varData_1930).get(param_1);
      }
      toJSON() {
        var varData_1949;
        return {
          id: varData_706(this, varData_1923),
          name: varData_706(this, varData_1926),
          capacity: varData_706(this, varData_1927),
          activity: ((varData_1949 = varData_706(this, varData_1929)) == null ? undefined : varData_1949.toJSON()) ?? null,
          members: [...varData_706(this, varData_1924).values()].map(param_1 => param_1.toJSON()),
          data: Object.fromEntries(varData_706(this, varData_1930))
        };
      }
      destroy() {
        varData_706(this, varData_1925).clear();
        varData_706(this, varData_1924).clear();
        varData_706(this, varData_1930).clear();
      }
    };
    varData_1923 = new WeakMap();
    varData_1924 = new WeakMap();
    varData_1925 = new WeakMap();
    varData_1926 = new WeakMap();
    varData_1927 = new WeakMap();
    varData_1928 = new WeakMap();
    varData_1929 = new WeakMap();
    varData_1930 = new WeakMap();
    varData_1931 = new WeakSet();
    varData_1932 = function (param_1) {
      varData_708(this, varData_1926, param_1.name);
      varData_708(this, varData_1927, param_1.capacity);
      varData_710(this, varData_1943, varData_1944).call(this, "group:update", this);
    };
    varData_1933 = new WeakSet();
    varData_1934 = function (param_1, param_2) {
      varData_706(this, varData_1930).set(param_1, param_2);
      varData_710(this, varData_1943, varData_1944).call(this, "data:update", param_1, param_2);
    };
    varData_1935 = new WeakSet();
    varData_1936 = function (param_1) {
      const varData_1950 = new varData_1960(param_1, this);
      varData_706(this, varData_1924).set(varData_1950.characterId, varData_1950);
      varData_710(this, varData_1943, varData_1944).call(this, "member:joined", varData_1950);
    };
    varData_1937 = new WeakSet();
    varData_1938 = function (param_1) {
      const varData_1951 = varData_706(this, varData_1924).get(param_1);
      if (!varData_1951) {
        return;
      }
      varData_706(this, varData_1924).delete(param_1);
      if (varData_706(this, varData_1928) === varData_1951) {
        varData_708(this, varData_1928, null);
      }
      varData_710(this, varData_1943, varData_1944).call(this, "member:left", varData_1951);
    };
    varData_1939 = new WeakSet();
    varData_1940 = function (param_1, param_2, param_3) {
      const varData_1952 = varData_706(this, varData_1924).get(param_1);
      if (!varData_1952) {
        return;
      }
      if (varData_1952.serverId !== param_2) {
        varData_1952.updateServerId(param_2);
      }
      if (param_3) {
        varData_708(this, varData_1928, varData_1952);
      }
      varData_710(this, varData_1943, varData_1944).call(this, "member:update", varData_1952);
    };
    varData_1941 = new WeakSet();
    varData_1942 = function (param_1) {
      const varData_1953 = param_1 ? new varData_1913(param_1) : null;
      varData_708(this, varData_1929, varData_1953);
      varData_710(this, varData_1943, varData_1944).call(this, "activity:set", varData_1953);
    };
    varData_1943 = new WeakSet();
    varData_1944 = function (param_1, ..._0x9a2715) {
      const varData_1954 = varData_706(this, varData_1925).get(param_1);
      if (!varData_1954) {
        return;
      }
      for (const varData_1955 of varData_1954) {
        try {
          varData_1955.call(this, ..._0x9a2715);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1956;
    var varData_1957;
    var varData_1958;
    var varData_1959;
    var varData_1960 = class {
      constructor(param_1, param_2) {
        varData_707(this, varData_1956, undefined);
        varData_707(this, varData_1957, undefined);
        varData_707(this, varData_1958, undefined);
        varData_707(this, varData_1959, undefined);
        varData_708(this, varData_1956, param_1.characterId);
        varData_708(this, varData_1957, param_1.name);
        varData_708(this, varData_1958, param_2);
        varData_708(this, varData_1959, param_1.serverId);
      }
      get group() {
        return varData_706(this, varData_1958);
      }
      get characterId() {
        return varData_706(this, varData_1956);
      }
      get name() {
        return varData_706(this, varData_1957);
      }
      get serverId() {
        return varData_706(this, varData_1959);
      }
      get isOnline() {
        return varData_706(this, varData_1959) !== null;
      }
      get isLeader() {
        return varData_706(this, varData_1958).leader === this;
      }
      updateServerId(param_1) {
        varData_708(this, varData_1959, param_1);
      }
      toJSON() {
        return {
          characterId: varData_706(this, varData_1956),
          serverId: varData_706(this, varData_1959),
          name: varData_706(this, varData_1957),
          isLeader: this.isLeader,
          isOnline: this.isOnline
        };
      }
    };
    varData_1956 = new WeakMap();
    varData_1957 = new WeakMap();
    varData_1958 = new WeakMap();
    varData_1959 = new WeakMap();
    var varData_1961;
    var varData_1962;
    var varData_1963;
    var varData_1964;
    var varData_1965;
    var varData_1966;
    var varData_1967;
    var varData_1968;
    var varData_1969;
    var varData_1970 = class {
      constructor(param_1) {
        varData_707(this, varData_1964);
        varData_707(this, varData_1966);
        varData_707(this, varData_1968);
        varData_707(this, varData_1961, undefined);
        varData_707(this, varData_1962, undefined);
        varData_707(this, varData_1963, undefined);
        varData_708(this, varData_1961, param_1 ?? GetCurrentResourceName());
        varData_708(this, varData_1962, new Map());
        varData_708(this, varData_1963, new Map());
        varData_1726.onNet("__npx_groups:manager:" + varData_706(this, varData_1961) + ":addedToGroup", varData_710(this, varData_1964, varData_1965).bind(this));
        varData_1726.onNet("__npx_groups:manager:" + varData_706(this, varData_1961) + ":removedFromGroup", varData_710(this, varData_1966, varData_1967).bind(this));
        on("np-base:clearStates", this.reset.bind(this));
        on("np-spawn:characterSpawned", this.init.bind(this));
        const varData_1971 = varData_1676.Sync.isPed.isPed("cid");
        if (varData_1971) {
          this.init();
        }
      }
      get list() {
        return varData_706(this, varData_1962);
      }
      async init() {
        if (varData_706(this, varData_1962).size > 0) {
          this.reset();
        }
        const varData_1972 = await varData_1766.execute("__npx_groups:manager:" + varData_706(this, varData_1961) + ":init");
        if (!varData_1972) {
          return;
        }
        for (const varData_1973 of varData_1972) {
          varData_710(this, varData_1964, varData_1965).call(this, varData_1973);
        }
        varData_1734.debug("[Group Manager] Initialized! | Groups: " + varData_706(this, varData_1962).size);
      }
      reset() {
        varData_706(this, varData_1962).forEach(param_1 => param_1.destroy());
        varData_706(this, varData_1962).clear();
      }
      on(param_1, param_2) {
        const varData_1974 = varData_706(this, varData_1963).get(param_1) ?? [];
        if (!varData_706(this, varData_1963).has(param_1)) {
          varData_706(this, varData_1963).set(param_1, varData_1974);
        }
        varData_1974.push(param_2);
      }
    };
    varData_1961 = new WeakMap();
    varData_1962 = new WeakMap();
    varData_1963 = new WeakMap();
    varData_1964 = new WeakSet();
    varData_1965 = function (param_1) {
      const varData_1975 = new varData_1945(param_1);
      varData_1975.on("activity:set", param_1_1 => param_1_1 && varData_710(this, varData_1968, varData_1969).call(this, "activityAssigned", varData_1975, param_1_1));
      varData_706(this, varData_1962).set(varData_1975.id, varData_1975);
      varData_710(this, varData_1968, varData_1969).call(this, "addedToGroup", varData_1975);
    };
    varData_1966 = new WeakSet();
    varData_1967 = function (param_1) {
      const varData_1976 = varData_706(this, varData_1962).get(param_1);
      if (!varData_1976) {
        return;
      }
      varData_706(this, varData_1962).delete(param_1);
      varData_1976.destroy();
      varData_710(this, varData_1968, varData_1969).call(this, "removedFromGroup", varData_1976.id);
    };
    varData_1968 = new WeakSet();
    varData_1969 = function (param_1, ..._0x1403db) {
      const varData_1977 = varData_706(this, varData_1963).get(param_1) ?? [];
      for (const varData_1978 of varData_1977) {
        try {
          varData_1978.call(this, ..._0x1403db);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1979 = {};
    var varData_1980 = {
      GetEntityStateValue: () => handleAction_101,
      GetPlayerStateValue: () => handleAction_104,
      RegisterStatebagChangeHandler: () => handleAction_106,
      SetEntityStateValue: () => handleAction_102,
      SetPlayerStateValue: () => handleAction_105
    };
    varData_700(varData_1979, varData_1980);
    var varData_1981 = new varData_1504(5000);
    function handleAction_100(param_1) {
      let varData_1982 = varData_1981.get("ent-" + param_1);
      if (varData_1982) {
        return varData_1982;
      }
      varData_1982 = Entity(param_1);
      varData_1981.set("ent-" + param_1, varData_1982);
      return varData_1982;
    }
    function handleAction_101(param_1, param_2) {
      const varData_1983 = handleAction_100(param_1);
      return varData_1983.state[param_2];
    }
    function handleAction_102(param_1, param_2, param_3, _0x552209 = false) {
      const varData_1984 = handleAction_100(param_1);
      varData_1984.state.set(param_2, param_3, _0x552209);
    }
    function handleAction_103(param_1) {
      let varData_1985 = varData_1981.get("ply-" + param_1);
      if (varData_1985) {
        return varData_1985;
      }
      varData_1985 = Player(param_1);
      varData_1981.set("ply-" + param_1, varData_1985);
      return varData_1985;
    }
    function handleAction_104(param_1, param_2) {
      const varData_1986 = handleAction_103(param_1);
      return varData_1986.state[param_2];
    }
    function handleAction_105(param_1, param_2, param_3, _0x209c87 = false) {
      const varData_1987 = handleAction_103(param_1);
      varData_1987.state.set(param_2, param_3, _0x209c87);
    }
    function handleAction_106(param_1, param_2, param_3, param_4) {
      return AddStateBagChangeHandler(param_1, null, async function (param_1_1, param_2_1, param_3_1, param_4_1, param_5) {
        if (param_3 && !param_5) {
          return;
        }
        const varData_1988 = param_1_1.startsWith("player");
        const varData_1989 = parseInt(param_1_1.substring(7));
        const varData_1990 = varData_1988 ? GetPlayerFromStateBagName(param_1_1) : GetEntityFromStateBagName(param_1_1);
        if (!varData_1990) {
          return;
        }
        const varData_1991 = varData_1988 ? NetworkGetPlayerIndexFromPed(varData_1990) === PlayerId() : NetworkGetEntityOwner(varData_1990) === PlayerId();
        if (param_2 && !varData_1991) {
          return;
        }
        param_4(varData_1989, varData_1990, param_3_1);
      });
    }
    var varData_1992 = {};
    var varData_1993 = {
      GetFuelLevel: () => handleAction_114,
      GetIdentifier: () => handleAction_111,
      GetMetadata: () => handleAction_110,
      HasKey: () => handleAction_109,
      IsVinScratched: () => handleAction_112,
      SwapSeat: () => handleAction_113,
      TurnOffEngine: () => handleAction_108,
      TurnOnEngine: () => handleAction_107
    };
    varData_700(varData_1992, varData_1993);
    function handleAction_107(param_1) {
      varData_1676.Sync["np-vehicles"].TurnOnEngine(param_1);
    }
    function handleAction_108(param_1) {
      varData_1676.Sync["np-vehicles"].TurnOffEngine(param_1);
    }
    function handleAction_109(param_1) {
      return varData_1676.Sync["np-vehicles"].HasVehicleKey(param_1);
    }
    function handleAction_110(param_1, param_2) {
      const varData_1994 = handleAction_101(param_1, "data");
      if (param_2) {
        if (varData_1994 == null) {
          return undefined;
        } else {
          return varData_1994[param_2];
        }
      } else {
        return varData_1994;
      }
    }
    function handleAction_111(param_1) {
      return handleAction_101(param_1, "vin");
    }
    function handleAction_112(param_1) {
      return handleAction_101(param_1, "vinScratched");
    }
    function handleAction_113(param_1, param_2) {
      varData_1676.Sync["np-vehicles"].SwapVehicleSeat(param_1, param_2);
    }
    function handleAction_114(param_1) {
      return handleAction_110(param_1, "fuel") ?? 0;
    }
    var varData_1995 = {};
    var varData_1996 = {
      GetUIFocus: () => handleAction_119,
      RegisterUICallback: () => handleAction_115,
      SendUIAppMessage: () => handleAction_117,
      SendUIMessage: () => handleAction_116,
      SetUIFocus: () => handleAction_118
    };
    varData_700(varData_1995, varData_1996);
    var varData_1997 = [];
    function handleAction_115(param_1, param_2) {
      AddEventHandler("_npx_uiReq:" + param_1, param_2);
      exports["np-ui"].RegisterUIEvent(param_1);
      varData_1997.push(param_1);
    }
    function handleAction_116(param_1) {
      exports["np-ui"].SendUIMessage(param_1);
    }
    function handleAction_117(param_1, param_2) {
      var varData_1998 = {
        source: "np-nui",
        app: param_1,
        data: param_2
      };
      exports["np-ui"].SendUIMessage(varData_1998);
    }
    function handleAction_118(param_1, param_2) {
      exports["np-ui"].SetUIFocus(param_1, param_2);
    }
    function handleAction_119() {
      return exports["np-ui"].GetUIFocus();
    }
    AddEventHandler("_npx_uiReady", () => {
      varData_1997.forEach(param_1 => exports["np-ui"].RegisterUIEvent(param_1));
    });
    var varData_1999 = {};
    var varData_2000 = {
      Manager: () => varData_2029
    };
    varData_700(varData_1999, varData_2000);
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
    var varData_2029 = class {
      constructor(param_1, param_2) {
        varData_707(this, varData_2005);
        varData_707(this, varData_2007);
        varData_707(this, varData_2009);
        varData_707(this, varData_2011);
        varData_707(this, varData_2013);
        varData_707(this, varData_2015);
        varData_707(this, varData_2017);
        varData_707(this, varData_2019);
        varData_707(this, varData_2021);
        varData_707(this, varData_2023);
        varData_707(this, varData_2025);
        varData_707(this, varData_2027);
        varData_707(this, varData_2001, undefined);
        varData_707(this, varData_2002, undefined);
        varData_707(this, varData_2003, null);
        varData_707(this, varData_2004, undefined);
        varData_708(this, varData_2001, param_1);
        varData_708(this, varData_2002, param_2);
        varData_708(this, varData_2004, null);
        varData_706(this, varData_2002).on("addedToGroup", varData_710(this, varData_2013, varData_2014).bind(this));
        varData_706(this, varData_2002).on("removedFromGroup", varData_710(this, varData_2015, varData_2016).bind(this));
        varData_1726.on("jobs:app:ready", () => {
          if (!varData_706(this, varData_2004)) {
            return;
          }
          varData_710(this, varData_2017, varData_2018).call(this, varData_706(this, varData_2004));
        });
        varData_1726.on("jobs:jobChanged", param_1_1 => {
          varData_708(this, varData_2003, param_1_1);
          if (!varData_706(this, varData_2004)) {
            return;
          }
          const varData_2030 = (param_1_1 == null ? undefined : param_1_1.id) === varData_706(this, varData_2001);
          if (!varData_2030) {
            return varData_710(this, varData_2015, varData_2016).call(this, varData_706(this, varData_2004).id);
          }
          varData_710(this, varData_2017, varData_2018).call(this, varData_706(this, varData_2004));
        });
        varData_1726.onNet("__npx_jobs:" + varData_706(this, varData_2001) + ":groups:invite:request", varData_710(this, varData_2007, varData_2008).bind(this));
        varData_1726.onNet("__npx_jobs:" + varData_706(this, varData_2001) + ":groups:invite:received", varData_710(this, varData_2005, varData_2006).bind(this));
        varData_1726.onNet("__npx_jobs:" + varData_706(this, varData_2001) + ":groups:invite:response", varData_710(this, varData_2009, varData_2010).bind(this));
        varData_1726.onNet("__npx_jobs:" + varData_706(this, varData_2001) + ":groups:invite:aborted", varData_710(this, varData_2011, varData_2012).bind(this));
      }
      get group() {
        return varData_706(this, varData_2004);
      }
      async sendGroupInvite(param_1) {
        if (!varData_706(this, varData_2003) || varData_706(this, varData_2003).id !== varData_706(this, varData_2001)) {
          return;
        }
        const [_0xca83ff, _0x17abf7] = await varData_1766.execute("jobs:app:" + varData_706(this, varData_2001) + ":groups:invite:send", param_1);
        if (!_0xca83ff) {
          return varData_2117.phoneNotification("Group Invite", _0x17abf7, true);
        }
        varData_2117.phoneNotification("Group Invite", "Invite sent!", true);
        varData_1734.debug("[Job APP] Invite sent! " + _0x17abf7);
      }
      async sendGroupJoinRequest(param_1) {
        if (!varData_706(this, varData_2003) || varData_706(this, varData_2003).id !== varData_706(this, varData_2001)) {
          return;
        }
        const [_0x55042a, _0x77a4de] = await varData_1766.execute("jobs:app:" + varData_706(this, varData_2001) + ":groups:invite:request", param_1);
        if (!_0x55042a) {
          return varData_2117.phoneNotification("Group Invite", _0x77a4de, true);
        }
        varData_2117.phoneNotification("Group Invite", "Join request sent!", true);
        varData_1734.debug("[Job APP] Join request sent! " + _0x77a4de);
      }
    };
    varData_2001 = new WeakMap();
    varData_2002 = new WeakMap();
    varData_2003 = new WeakMap();
    varData_2004 = new WeakMap();
    varData_2005 = new WeakSet();
    varData_2006 = async function (param_1, param_2) {
      varData_1734.debug("[Job APP] Invite received! " + param_1 + " " + param_2);
      const varData_2031 = "Received an invite to join the group \"" + param_2 + "\"";
      const varData_2032 = await varData_2117.phoneConfirmation("Group Invite", varData_2031, "users", 30000);
      const [_0x16cbb2, _0x3298e2] = await varData_1766.execute("jobs:app:" + varData_706(this, varData_2001) + ":groups:invite:response", param_1, varData_2032);
      if (!_0x16cbb2) {
        return varData_2117.phoneNotification("Group Invite", _0x3298e2, true);
      }
    };
    varData_2007 = new WeakSet();
    varData_2008 = async function (param_1, param_2) {
      varData_1734.debug("[Job APP] Join request received! " + param_1 + " " + param_2);
      const varData_2033 = "Received a group join request from " + param_2;
      const varData_2034 = await varData_2117.phoneConfirmation("Group Invite", varData_2033, "users", 30000);
      const [_0x3771e2, _0x36ab43] = await varData_1766.execute("jobs:app:" + varData_706(this, varData_2001) + ":groups:invite:response", param_1, varData_2034);
      if (!_0x3771e2) {
        return varData_2117.phoneNotification("Group Invite", _0x36ab43, true);
      }
    };
    varData_2009 = new WeakSet();
    varData_2010 = function (param_1, param_2) {
      varData_1734.debug("[Job APP] Invite response received! " + param_1 + " " + param_2);
    };
    varData_2011 = new WeakSet();
    varData_2012 = function (param_1, param_2) {
      varData_1734.debug("[Job APP] Invite aborted! " + param_1 + " " + param_2);
    };
    varData_2013 = new WeakSet();
    varData_2014 = function (param_1) {
      varData_708(this, varData_2004, param_1);
      varData_706(this, varData_2004).on("group:update", varData_710(this, varData_2017, varData_2018).bind(this));
      varData_706(this, varData_2004).on("activity:set", varData_710(this, varData_2025, varData_2026).bind(this, param_1));
      varData_706(this, varData_2004).on("data:update", varData_710(this, varData_2027, varData_2028).bind(this, param_1));
      varData_706(this, varData_2004).on("member:joined", varData_710(this, varData_2019, varData_2020).bind(this, param_1));
      varData_706(this, varData_2004).on("member:left", varData_710(this, varData_2021, varData_2022).bind(this, param_1));
      varData_706(this, varData_2004).on("member:update", varData_710(this, varData_2023, varData_2024).bind(this, param_1));
      varData_1995.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_706(this, varData_2001),
        group: param_1.toJSON()
      });
      varData_1734.debug("[Job APP] Added to group!");
    };
    varData_2015 = new WeakSet();
    varData_2016 = function (param_1) {
      varData_708(this, varData_2004, null);
      varData_1995.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_706(this, varData_2001),
        group: null
      });
      varData_1734.debug("[Job APP] Removed from group!");
    };
    varData_2017 = new WeakSet();
    varData_2018 = function (param_1) {
      if (varData_706(this, varData_2004) !== param_1) {
        return varData_1734.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1995.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_706(this, varData_2001),
        group: param_1.toJSON()
      });
      varData_1734.debug("[Job APP] Updated group!");
    };
    varData_2019 = new WeakSet();
    varData_2020 = function (param_1, param_2) {
      if (varData_706(this, varData_2004) !== param_1) {
        return varData_1734.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1995.SendUIAppMessage("phone", {
        action: "jobs:group:addMember",
        jobId: varData_706(this, varData_2001),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1734.debug("[Job APP] Added member to group!");
    };
    varData_2021 = new WeakSet();
    varData_2022 = function (param_1, param_2) {
      if (varData_706(this, varData_2004) !== param_1) {
        return varData_1734.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1995.SendUIAppMessage("phone", {
        action: "jobs:group:removeMember",
        jobId: varData_706(this, varData_2001),
        groupId: param_1.id,
        memberId: param_2.characterId
      });
      varData_1734.debug("[Job APP] Removed member from group!");
    };
    varData_2023 = new WeakSet();
    varData_2024 = function (param_1, param_2) {
      if (varData_706(this, varData_2004) !== param_1) {
        return varData_1734.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1995.SendUIAppMessage("phone", {
        action: "jobs:group:updateMember",
        jobId: varData_706(this, varData_2001),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1734.debug("[Job APP] Updated member in group!");
    };
    varData_2025 = new WeakSet();
    varData_2026 = function (param_1, param_2) {
      if (varData_706(this, varData_2004) !== param_1) {
        return varData_1734.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      const varData_2035 = (param_2 == null ? undefined : param_2.toJSON()) ?? null;
      varData_1995.SendUIAppMessage("phone", {
        action: "jobs:group:updateActivity",
        jobId: varData_706(this, varData_2001),
        groupId: param_1.id,
        activity: varData_2035
      });
      varData_1734.debug("[Job APP] Updated activity for group!");
    };
    varData_2027 = new WeakSet();
    varData_2028 = function (param_1, param_2, param_3) {
      if (varData_706(this, varData_2004) !== param_1) {
        return varData_1734.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      } else if (param_2 !== "status") {
        return;
      }
      varData_1995.SendUIAppMessage("phone", {
        action: "jobs:group:updateStatus",
        jobId: varData_706(this, varData_2001),
        groupId: param_1.id,
        status: param_3
      });
      varData_1734.debug("[Job APP] Updated status for group!");
    };
    var varData_2036 = async param_1 => {
      const varData_2037 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasModelLoaded(varData_2037)) {
        return true;
      }
      RequestModel(varData_2037);
      const varData_2038 = await varData_1663.waitForCondition(() => HasModelLoaded(varData_2037), 3000);
      return !varData_2038;
    };
    var varData_2039 = async param_1 => {
      if (HasAnimDictLoaded(param_1)) {
        return true;
      }
      RequestAnimDict(param_1);
      const varData_2040 = await varData_1663.waitForCondition(() => HasAnimDictLoaded(param_1), 3000);
      return !varData_2040;
    };
    var varData_2041 = async param_1 => {
      if (HasClipSetLoaded(param_1)) {
        return true;
      }
      RequestClipSet(param_1);
      const varData_2042 = await varData_1663.waitForCondition(() => HasClipSetLoaded(param_1), 3000);
      return !varData_2042;
    };
    var varData_2043 = async param_1 => {
      if (HasStreamedTextureDictLoaded(param_1)) {
        return true;
      }
      RequestStreamedTextureDict(param_1, true);
      const varData_2044 = await varData_1663.waitForCondition(() => HasStreamedTextureDictLoaded(param_1), 3000);
      return !varData_2044;
    };
    var varData_2045 = async (param_1, param_2, param_3) => {
      const varData_2046 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasWeaponAssetLoaded(varData_2046)) {
        return true;
      }
      RequestWeaponAsset(varData_2046, param_2, param_3);
      const varData_2047 = await varData_1663.waitForCondition(() => HasWeaponAssetLoaded(varData_2046), 3000);
      return !varData_2047;
    };
    var varData_2048 = async param_1 => {
      if (HasNamedPtfxAssetLoaded(param_1)) {
        return true;
      }
      RequestNamedPtfxAsset(param_1);
      const varData_2049 = await varData_1663.waitForCondition(() => HasNamedPtfxAssetLoaded(param_1), 3000);
      return !varData_2049;
    };
    var varData_2050 = {
      loadModel: varData_2036,
      loadTexture: varData_2043,
      loadAnim: varData_2039,
      loadClipSet: varData_2041,
      loadWeaponAsset: varData_2045,
      loadNamedPtfxAsset: varData_2048
    };
    var varData_2051 = varData_2050;
    var varData_2052 = (param_1, ..._0x14cf3a) => {
      switch (param_1) {
        case "coord":
          {
            const [_0x14839c, _0x56edb6, _0x1826e7] = _0x14cf3a;
            return AddBlipForCoord(_0x14839c, _0x56edb6, _0x1826e7);
          }
        case "area":
          {
            const [_0x1211f2, _0x343fbf, _0x1fc96d, _0x3969f3, _0x5d8de1] = _0x14cf3a;
            return AddBlipForArea(_0x1211f2, _0x343fbf, _0x1fc96d, _0x3969f3, _0x5d8de1);
          }
        case "radius":
          {
            const [_0x4e2333, _0x32ee29, _0x301c71, _0x26a0c6] = _0x14cf3a;
            return AddBlipForRadius(_0x4e2333, _0x32ee29, _0x301c71, _0x26a0c6);
          }
        case "pickup":
          {
            const [_0x586612] = _0x14cf3a;
            return AddBlipForPickup(_0x586612);
          }
        case "entity":
          {
            const [_0x13151f] = _0x14cf3a;
            return AddBlipForEntity(_0x13151f);
          }
        default:
          {
            console.error(new Error("Invalid Blip Type"));
            return 0;
          }
      }
    };
    var varData_2053 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
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
    var varData_2054 = {
      createBlip: varData_2052,
      applyBlipSettings: varData_2053
    };
    var varData_2055 = varData_2054;
    var dataSet_1 = new Set();
    var dataMap_1 = new Map();
    var dataSet_2 = new Set();
    on("np-polyzone:enter", (param_1, param_2) => {
      dataSet_1.add(param_1);
      if (param_2 == null ? undefined : param_2.id) {
        dataSet_1.add(param_1 + "-" + param_2.id);
      }
      if (dataSet_2.has(param_1)) {
        varData_1726.emitNet("__sdk:zones:" + param_1 + ":enter", param_2);
      }
      const varData_2056 = dataMap_1.get(param_1 + "-enter");
      if (varData_2056 === undefined) {
        return;
      }
      for (const varData_2057 of varData_2056) {
        try {
          varData_2057(param_2);
        } catch (err) {
          console.log(err);
        }
      }
    });
    on("np-polyzone:exit", (param_1, param_2) => {
      dataSet_1.delete(param_1);
      if (param_2 == null ? undefined : param_2.id) {
        dataSet_1.delete(param_1 + "-" + param_2.id);
      }
      if (dataSet_2.has(param_1)) {
        varData_1726.emitNet("__sdk:zones:" + param_1 + ":exit", param_2);
      }
      const varData_2058 = dataMap_1.get(param_1 + "-exit");
      if (varData_2058 === undefined) {
        return;
      }
      for (const varData_2059 of varData_2058) {
        try {
          varData_2059(param_2);
        } catch (err) {
          console.log(err);
        }
      }
    });
    var varData_2060 = (param_1, param_2) => {
      return dataSet_1.has(param_2 ? param_1 + "-" + param_2 : param_1);
    };
    var varData_2061 = (param_1, param_2) => {
      const varData_2062 = param_1 + "-enter";
      const varData_2063 = dataMap_1.get(varData_2062) ?? [];
      if (!dataMap_1.has(varData_2062)) {
        dataMap_1.set(varData_2062, varData_2063);
      }
      varData_2063.push(param_2);
    };
    var varData_2064 = (param_1, param_2) => {
      const varData_2065 = param_1 + "-exit";
      const varData_2066 = dataMap_1.get(varData_2065) ?? [];
      if (!dataMap_1.has(varData_2065)) {
        dataMap_1.set(varData_2065, varData_2066);
      }
      varData_2066.push(param_2);
    };
    var varData_2067 = (param_1, param_2, param_3, param_4, _0x9b7962 = {}) => {
      var varData_2068 = {
        ...param_4
      };
      varData_2068.data = _0x9b7962;
      varData_2068.id = param_1;
      const varData_2069 = varData_2068;
      varData_2069.data.id = param_1;
      exports["np-polyzone"].AddPolyZone(param_2, param_3, varData_2069);
    };
    var varData_2070 = (param_1, param_2, param_3, param_4, param_5, param_6, _0xa5d563 = {}) => {
      var varData_2071 = {
        ...param_6
      };
      varData_2071.data = _0xa5d563;
      varData_2071.id = param_1;
      const varData_2072 = varData_2071;
      varData_2072.data.id = param_1;
      exports["np-polyzone"].AddBoxZone(param_2, param_3, param_4, param_5, varData_2072);
    };
    var varData_2073 = (param_1, param_2, param_3, param_4, param_5, _0x154fb3 = {}) => {
      var varData_2074 = {
        ...param_5
      };
      varData_2074.data = _0x154fb3;
      varData_2074.id = param_1;
      const varData_2075 = varData_2074;
      varData_2075.data.id = param_1;
      exports["np-polyzone"].AddCircleZone(param_2, param_3, param_4, varData_2075);
    };
    var varData_2076 = (param_1, param_2, param_3, param_4, _0x3980a9 = {}) => {
      var varData_2077 = {
        ...param_4
      };
      varData_2077.data = _0x3980a9;
      const varData_2078 = varData_2077;
      varData_2078.data.id = param_1;
      exports["np-polyzone"].AddEntityZone(param_2, param_3, varData_2078);
    };
    var varData_2079 = (param_1, param_2) => {
      exports["np-polyzone"].RemoveZone(param_1, param_2);
      dataSet_1.delete(param_1 + "-" + param_2);
      dataSet_2.delete(param_1);
    };
    var varData_2080 = param_1 => {
      dataSet_2.add(param_1);
    };
    var varData_2081 = {
      isActive: varData_2060,
      onEnter: varData_2061,
      onExit: varData_2064,
      addPolyZone: varData_2067,
      addBoxZone: varData_2070,
      addCircleZone: varData_2073,
      addEntityZone: varData_2076,
      removeZone: varData_2079,
      setAsNetworked: varData_2080
    };
    var varData_2082 = varData_2081;
    var varData_2083 = (param_1, param_2, param_3, param_4) => {
      var varData_2084 = {
        id: param_1,
        coords: [param_2.x, param_2.y, param_2.z],
        options: param_3,
        context: param_4
      };
      const varData_2085 = varData_2084;
      globalThis.exports.interactions.AddInteraction(varData_2085);
    };
    var varData_2086 = (param_1, param_2, param_3, param_4) => {
      var varData_2087 = {
        id: param_1,
        options: param_3,
        context: param_4
      };
      const varData_2088 = varData_2087;
      globalThis.exports.interactions.AddInteractionByModel(param_2, varData_2088);
    };
    var varData_2089 = (param_1, param_2, param_3) => {
      var varData_2090 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2091 = varData_2090;
      varData_2091.context.isPlayer = true;
      globalThis.exports.interactions.AddPedInteraction(varData_2091);
    };
    var varData_2092 = (param_1, param_2, param_3) => {
      var varData_2093 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2094 = varData_2093;
      globalThis.exports.interactions.AddPedInteraction(varData_2094);
    };
    var varData_2095 = param_1 => {
      return globalThis.exports.interactions.DoesInteractionExists(param_1);
    };
    var varData_2096 = (param_1, param_2, param_3) => {
      var varData_2097 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2098 = varData_2097;
      globalThis.exports.interactions.AddVehicleInteraction(varData_2098);
    };
    var varData_2099 = param_1 => {
      globalThis.exports.interactions.RemoveInteraction(param_1);
    };
    var varData_2100 = param_1 => {
      globalThis.exports.interactions.RemoveVehicleInteraction(param_1);
    };
    var varData_2101 = param_1 => {
      globalThis.exports.interactions.RemovePedInteraction(param_1);
    };
    var varData_2102 = (param_1, param_2, _0x2437f8 = false, _0x11f551 = null, _0x1bdf86 = true, _0x4fdd92 = null) => {
      return new Promise(param_1_1 => {
        globalThis.exports["np-taskbar"].taskBar(param_1, param_2, _0x2437f8, _0x1bdf86, _0x4fdd92, false, param_1_1, _0x11f551 == null ? undefined : _0x11f551.distance, _0x11f551 == null ? undefined : _0x11f551.entity);
      });
    };
    var varData_2103 = (param_1, param_2, param_3, param_4) => {
      return new Promise(param_1_1 => {
        globalThis.exports["np-phone"].DoPhoneConfirmation(param_1, param_2, param_3, param_1_1, param_4);
      });
    };
    var varData_2104 = (param_1, param_2, _0x2703f6 = true, _0x5e8ac8 = "home-screen") => {
      var varData_2105 = {
        action: "notification",
        target_app: _0x5e8ac8,
        title: param_1,
        body: param_2,
        show_even_if_app_active: _0x2703f6
      };
      var varData_2106 = {
        source: "np-nui",
        app: "phone",
        data: varData_2105
      };
      globalThis.exports["np-ui"].SendUIMessage(varData_2106);
    };
    var varData_2107 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x43885f = 0, _0x119cad = true) => {
      SetTextColour(param_4[0], param_4[1], param_4[2], param_4[3]);
      if (_0x119cad) {
        SetTextOutline();
      }
      SetTextScale(0, param_5);
      SetTextFont(param_6 ?? 0);
      SetTextJustification(_0x43885f);
      if (_0x43885f === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(param_3 ?? "Dummy text");
      EndTextCommandDisplayText(param_1, param_2);
    };
    var varData_2108 = (param_1, param_2, param_3, param_4, _0x25843e = 4, _0x3bf369 = true, param_7) => {
      SetDrawOrigin(param_1.x, param_1.y, param_1.z, 0);
      const varData_2109 = Math.max(varData_1644.getMapRange([0, 10], [0.4, 0.25], param_2), 0.1);
      varData_2107(0, 0, param_3, param_4, varData_2109, _0x25843e, 0, _0x3bf369);
      if (param_7) {
        DrawRect(0.002, param_7.height / 2, param_7.width, param_7.height, param_7.color[0], param_7.color[1], param_7.color[2], param_7.color[3]);
      }
      ClearDrawOrigin();
    };
    var varData_2110 = (param_1, param_2, param_3, param_4) => {
      globalThis.exports.contacts.open(param_1, param_2, param_3, param_4, true);
    };
    var varData_2111 = param_1 => {
      globalThis.exports.hud.AddOrUpdateHudBar(param_1);
    };
    var varData_2112 = param_1 => {
      globalThis.exports.hud.RemoveHudBar(param_1);
    };
    async function handleAction_120(param_1) {
      const varData_2113 = param_1_1 => {
        for (const varData_2114 of param_1) {
          if (varData_2114._type === "number" && isNaN(param_1_1[varData_2114.name])) {
            return false;
          }
          if (varData_2114._type === "text" && typeof param_1_1[varData_2114.name] !== "string") {
            return false;
          }
        }
        return true;
      };
      return await varData_1676.Sync["np-ui"].OpenInputMenu(param_1, varData_2113);
    }
    async function handleAction_121(param_1, param_2) {
      const varData_2115 = {
        info: 1,
        error: 2
      };
      emit("DoLongHudText", param_1, varData_2115[param_2]);
    }
    var varData_2116 = {
      addInteraction: varData_2083,
      addInteractionByModel: varData_2086,
      addPlayerInteraction: varData_2089,
      addPedInteraction: varData_2092,
      addVehicleInteraction: varData_2096,
      removeInteraction: varData_2099,
      removePlayerInteraction: varData_2101,
      removePedInteraction: varData_2101,
      removeVehicleInteraction: varData_2100,
      doesInteractionExists: varData_2095,
      taskBar: varData_2102,
      phoneConfirmation: varData_2103,
      phoneNotification: varData_2104,
      drawText: varData_2107,
      drawText3D: varData_2108,
      customContact: varData_2110,
      AddOrUpdateHudBar: varData_2111,
      RemoveHudBar: varData_2112,
      openInputMenu: handleAction_120,
      displayNotification: handleAction_121
    };
    var varData_2117 = varData_2116;
    var varData_2118 = async param_1 => {
      return globalThis.exports["np-heists"].BankMinigame(param_1);
    };
    var varData_2119 = async param_1 => {
      return globalThis.exports["np-heists"].DDRMinigame(param_1);
    };
    var varData_2120 = async param_1 => {
      return globalThis.exports.skillchecks.DirectionMinigame(param_1);
    };
    var varData_2121 = async () => {
      return globalThis.exports.skillchecks.DrillingMinigame();
    };
    var varData_2122 = async param_1 => {
      return globalThis.exports.skillchecks.FlipMinigame(param_1);
    };
    var varData_2123 = async param_1 => {
      return globalThis.exports.skillchecks.FloodMinigame(param_1);
    };
    var varData_2124 = async param_1 => {
      return globalThis.exports.skillchecks.TaskBarMinigame(param_1.difficulty, param_1.gap, param_1.iterations, param_1.useReverse);
    };
    var varData_2125 = async param_1 => {
      return globalThis.exports.skillchecks.MazeMinigame(param_1);
    };
    var varData_2126 = async param_1 => {
      return globalThis.exports.skillchecks.CrackSafe(param_1.locks);
    };
    var varData_2127 = async param_1 => {
      return globalThis.exports.skillchecks.SameMinigame(param_1);
    };
    var varData_2128 = async param_1 => {
      return globalThis.exports["np-heists"].ThermiteMinigame(param_1);
    };
    var varData_2129 = async param_1 => {
      return globalThis.exports.skillchecks.UntangleMinigame(param_1);
    };
    var varData_2130 = async param_1 => {
      return globalThis.exports["np-heists"].VarMinigame(param_1);
    };
    var varData_2131 = async param_1 => {
      return globalThis.exports.skillchecks.WordsMinigame(param_1);
    };
    var varData_2132 = async param_1 => {
      return globalThis.exports.skillchecks.AlphabetMinigame(param_1);
    };
    var varData_2133 = async param_1 => {
      return globalThis.exports.skillchecks.LockpickMinigame(param_1);
    };
    var varData_2134 = async param_1 => {
      return globalThis.exports.skillchecks.PinCrackMinigame(param_1);
    };
    var varData_2135 = async param_1 => {
      return globalThis.exports.skillchecks.TerminalMinigame(param_1);
    };
    var varData_2136 = async param_1 => {
      return globalThis.exports.skillchecks.SequenceMinigame(param_1);
    };
    var varData_2137 = async param_1 => {
      return globalThis.exports.skillchecks.SudokuMinigame(param_1);
    };
    var varData_2138 = async param_1 => {
      return globalThis.exports.skillchecks.MemoryMinigame(param_1);
    };
    var varData_2139 = {
      BankMinigame: varData_2118,
      DDRMinigame: varData_2119,
      DirectionMinigame: varData_2120,
      DrillingMinigame: varData_2121,
      FlipMinigame: varData_2122,
      FloodMinigame: varData_2123,
      TaskBarMinigame: varData_2124,
      MazeMinigame: varData_2125,
      CrackSafe: varData_2126,
      SameMinigame: varData_2127,
      ThermiteMinigame: varData_2128,
      UntangleMinigame: varData_2129,
      VarMinigame: varData_2130,
      WordsMinigame: varData_2131,
      AlphabetMinigame: varData_2132,
      LockpickMinigame: varData_2133,
      PinCrackMinigame: varData_2134,
      TerminalMinigame: varData_2135,
      SequenceMinigame: varData_2136,
      SudokuMinigame: varData_2137,
      MemoryMinigame: varData_2138
    };
    var varData_2140 = varData_2139;
    var varData_2141 = {
      async hasPermission(param_1, _0x23170e = {}) {
        return await exports.permissions.hasPermission(param_1, _0x23170e);
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
    var varData_2142 = {
      RegisterAction: (param_1, param_2, param_3) => {
        return varData_1676.Sync.contacts.RegisterAction(param_1, param_2, param_3);
      }
    };
    var varData_2143 = {
      RegisterEditorHandlerClient: async param_1 => {
        return await globalThis.exports.editor.RegisterEditorHandlerClient(param_1);
      }
    };
    var varData_2144;
    var varData_2145;
    var varData_2146;
    var varData_2147;
    var varData_2148;
    var varData_2149;
    var varData_2150;
    var varData_2151;
    var varData_2152;
    var varData_2153;
    var varData_2154 = class {
      constructor(param_1) {
        varData_707(this, varData_2152);
        varData_707(this, varData_2144, undefined);
        varData_707(this, varData_2145, undefined);
        varData_707(this, varData_2146, undefined);
        varData_707(this, varData_2147, undefined);
        varData_707(this, varData_2148, undefined);
        varData_707(this, varData_2149, undefined);
        varData_707(this, varData_2150, false);
        varData_707(this, varData_2151, []);
        varData_708(this, varData_2144, param_1.codename);
        varData_708(this, varData_2145, param_1.version);
        varData_708(this, varData_2146, GetCurrentResourceName());
        varData_708(this, varData_2147, "nopixel-crafting");
        emit("__npx_core:handshake", param_1, varData_710(this, varData_2152, varData_2153).bind(this));
        varData_1827.register("__npx_core:handshake", async param_1_1 => {
          if (param_1_1.codename !== varData_706(this, varData_2144)) {
            return;
          }
          const varData_2155 = await varData_1663.waitForCondition(() => varData_706(this, varData_2150), 10000);
          if (varData_2155) {
            return;
          }
          return {
            API_URL: varData_706(this, varData_2148),
            API_KEY: varData_706(this, varData_2149)
          };
        });
      }
      get codename() {
        return varData_706(this, varData_2144);
      }
      get version() {
        return varData_706(this, varData_2145);
      }
      get isReady() {
        return varData_706(this, varData_2150);
      }
      onReady(param_1) {
        if (varData_706(this, varData_2150)) {
          param_1();
        } else {
          varData_706(this, varData_2151).push(param_1);
        }
      }
    };
    varData_2144 = new WeakMap();
    varData_2145 = new WeakMap();
    varData_2146 = new WeakMap();
    varData_2147 = new WeakMap();
    varData_2148 = new WeakMap();
    varData_2149 = new WeakMap();
    varData_2150 = new WeakMap();
    varData_2151 = new WeakMap();
    varData_2152 = new WeakSet();
    varData_2153 = async function (param_1) {
      varData_708(this, varData_2148, param_1.API_URL);
      varData_708(this, varData_2149, param_1.API_KEY);
      varData_708(this, varData_2150, true);
      for (const varData_2156 of varData_706(this, varData_2151)) {
        varData_2156();
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
    const varData_2157 = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
    let varData_2158 = 1234567;
    const varData_2159 = Math.PI / 180;
    const varData_2160 = 180 / Math.PI;
    function handleAction_122() {
      const varData_2161 = Math.random() * 4294967295 | 0;
      const varData_2162 = Math.random() * 4294967295 | 0;
      const varData_2163 = Math.random() * 4294967295 | 0;
      const varData_2164 = Math.random() * 4294967295 | 0;
      const varData_2165 = varData_2157[varData_2161 & 255] + varData_2157[varData_2161 >> 8 & 255] + varData_2157[varData_2161 >> 16 & 255] + varData_2157[varData_2161 >> 24 & 255] + "-" + varData_2157[varData_2162 & 255] + varData_2157[varData_2162 >> 8 & 255] + "-" + varData_2157[varData_2162 >> 16 & 15 | 64] + varData_2157[varData_2162 >> 24 & 255] + "-" + varData_2157[varData_2163 & 63 | 128] + varData_2157[varData_2163 >> 8 & 255] + "-" + varData_2157[varData_2163 >> 16 & 255] + varData_2157[varData_2163 >> 24 & 255] + varData_2157[varData_2164 & 255] + varData_2157[varData_2164 >> 8 & 255] + varData_2157[varData_2164 >> 16 & 255] + varData_2157[varData_2164 >> 24 & 255];
      return varData_2165.toLowerCase();
    }
    function handleAction_123(param_1, param_2, param_3) {
      return Math.max(param_2, Math.min(param_3, param_1));
    }
    function handleAction_124(param_1, param_2) {
      return (param_1 % param_2 + param_2) % param_2;
    }
    function handleAction_125(param_1, param_2, param_3, param_4, param_5) {
      return param_4 + (param_1 - param_2) * (param_5 - param_4) / (param_3 - param_2);
    }
    function handleAction_126(param_1, param_2, param_3) {
      if (param_1 !== param_2) {
        return (param_3 - param_1) / (param_2 - param_1);
      } else {
        return 0;
      }
    }
    function handleAction_127(param_1, param_2, param_3) {
      return (1 - param_3) * param_1 + param_3 * param_2;
    }
    function handleAction_128(param_1, param_2, param_3, param_4) {
      return handleAction_127(param_1, param_2, 1 - Math.exp(-param_3 * param_4));
    }
    function handleAction_129(param_1, _0x43423a = 1) {
      return _0x43423a - Math.abs(handleAction_124(param_1, _0x43423a * 2) - _0x43423a);
    }
    function handleAction_130(param_1, param_2, param_3) {
      if (param_1 <= param_2) {
        return 0;
      }
      if (param_1 >= param_3) {
        return 1;
      }
      param_1 = (param_1 - param_2) / (param_3 - param_2);
      return param_1 * param_1 * (3 - param_1 * 2);
    }
    function handleAction_131(param_1, param_2, param_3) {
      if (param_1 <= param_2) {
        return 0;
      }
      if (param_1 >= param_3) {
        return 1;
      }
      param_1 = (param_1 - param_2) / (param_3 - param_2);
      return param_1 * param_1 * param_1 * (param_1 * (param_1 * 6 - 15) + 10);
    }
    function handleAction_132(param_1, param_2) {
      return param_1 + Math.floor(Math.random() * (param_2 - param_1 + 1));
    }
    function handleAction_133(param_1, param_2) {
      return param_1 + Math.random() * (param_2 - param_1);
    }
    function handleAction_134(param_1) {
      return param_1 * (0.5 - Math.random());
    }
    function handleAction_135(param_1) {
      if (param_1 !== undefined) {
        varData_2158 = param_1;
      }
      let varData_2166 = varData_2158 += 1831565813;
      varData_2166 = Math.imul(varData_2166 ^ varData_2166 >>> 15, varData_2166 | 1);
      varData_2166 ^= varData_2166 + Math.imul(varData_2166 ^ varData_2166 >>> 7, varData_2166 | 61);
      return ((varData_2166 ^ varData_2166 >>> 14) >>> 0) / 4294967296;
    }
    function handleAction_136(param_1) {
      return param_1 * varData_2159;
    }
    function handleAction_137(param_1) {
      return param_1 * varData_2160;
    }
    function handleAction_138(param_1) {
      return (param_1 & param_1 - 1) === 0 && param_1 !== 0;
    }
    function handleAction_139(param_1) {
      return Math.pow(2, Math.ceil(Math.log(param_1) / Math.LN2));
    }
    function handleAction_140(param_1) {
      return Math.pow(2, Math.floor(Math.log(param_1) / Math.LN2));
    }
    function handleAction_141(param_1, param_2, param_3, param_4, param_5) {
      const varData_2167 = Math.cos;
      const varData_2168 = Math.sin;
      const varData_2169 = varData_2167(param_3 / 2);
      const varData_2170 = varData_2168(param_3 / 2);
      const varData_2171 = varData_2167((param_2 + param_4) / 2);
      const varData_2172 = varData_2168((param_2 + param_4) / 2);
      const varData_2173 = varData_2167((param_2 - param_4) / 2);
      const varData_2174 = varData_2168((param_2 - param_4) / 2);
      const varData_2175 = varData_2167((param_4 - param_2) / 2);
      const varData_2176 = varData_2168((param_4 - param_2) / 2);
      switch (param_5) {
        case "XYX":
          param_1.set(varData_2169 * varData_2172, varData_2170 * varData_2173, varData_2170 * varData_2174, varData_2169 * varData_2171);
          break;
        case "YZY":
          param_1.set(varData_2170 * varData_2174, varData_2169 * varData_2172, varData_2170 * varData_2173, varData_2169 * varData_2171);
          break;
        case "ZXZ":
          param_1.set(varData_2170 * varData_2173, varData_2170 * varData_2174, varData_2169 * varData_2172, varData_2169 * varData_2171);
          break;
        case "XZX":
          param_1.set(varData_2169 * varData_2172, varData_2170 * varData_2176, varData_2170 * varData_2175, varData_2169 * varData_2171);
          break;
        case "YXY":
          param_1.set(varData_2170 * varData_2175, varData_2169 * varData_2172, varData_2170 * varData_2176, varData_2169 * varData_2171);
          break;
        case "ZYZ":
          param_1.set(varData_2170 * varData_2176, varData_2170 * varData_2175, varData_2169 * varData_2172, varData_2169 * varData_2171);
          break;
        default:
          console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + param_5);
      }
    }
    function handleAction_142(param_1, param_2) {
      switch (param_2.constructor) {
        case Float32Array:
          return param_1;
        case Uint32Array:
          return param_1 / 4294967295;
        case Uint16Array:
          return param_1 / 65535;
        case Uint8Array:
          return param_1 / 255;
        case Int32Array:
          return Math.max(param_1 / 2147483647, -1);
        case Int16Array:
          return Math.max(param_1 / 32767, -1);
        case Int8Array:
          return Math.max(param_1 / 127, -1);
        default:
          throw new Error("Invalid component type.");
      }
    }
    function handleAction_143(param_1, param_2) {
      switch (param_2.constructor) {
        case Float32Array:
          return param_1;
        case Uint32Array:
          return Math.round(param_1 * 4294967295);
        case Uint16Array:
          return Math.round(param_1 * 65535);
        case Uint8Array:
          return Math.round(param_1 * 255);
        case Int32Array:
          return Math.round(param_1 * 2147483647);
        case Int16Array:
          return Math.round(param_1 * 32767);
        case Int8Array:
          return Math.round(param_1 * 127);
        default:
          throw new Error("Invalid component type.");
      }
    }
    var varData_2177 = {
      DEG2RAD: varData_2159,
      RAD2DEG: varData_2160,
      generateUUID: handleAction_122,
      clamp: handleAction_123,
      euclideanModulo: handleAction_124,
      mapLinear: handleAction_125,
      inverseLerp: handleAction_126,
      lerp: handleAction_127,
      damp: handleAction_128,
      pingpong: handleAction_129,
      smoothstep: handleAction_130,
      smootherstep: handleAction_131,
      randInt: handleAction_132,
      randFloat: handleAction_133,
      randFloatSpread: handleAction_134,
      seededRandom: handleAction_135,
      degToRad: handleAction_136,
      radToDeg: handleAction_137,
      isPowerOfTwo: handleAction_138,
      ceilPowerOfTwo: handleAction_139,
      floorPowerOfTwo: handleAction_140,
      setQuaternionFromProperEuler: handleAction_141,
      normalize: handleAction_143,
      denormalize: handleAction_142
    };
    const varData_2178 = varData_2177;
    ;
    var varData_2179 = Object.defineProperty;
    var varData_2180 = (param_1, param_2) => {
      for (var varData_2181 in param_2) {
        varData_2179(param_1, varData_2181, {
          get: param_2[varData_2181],
          enumerable: true
        });
      }
    };
    var varData_2182 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_2183 = (param_1, param_2, param_3) => {
      varData_2182(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_2184 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_2185 = (param_1, param_2, param_3, param_4) => {
      varData_2182(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_2186 = (param_1, param_2, param_3) => {
      varData_2182(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_2187 = {
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
    var varData_2188 = {};
    var varData_2189 = {
      MathUtils: () => varData_2347
    };
    varData_2180(varData_2188, varData_2189);
    var varData_2190;
    var varData_2191;
    var varData_2192 = class _0x314f62 {
      constructor(param_1, param_2, param_3) {
        varData_2184(this, varData_2190);
        const varData_2193 = varData_2186(this, varData_2190, varData_2191).call(this, param_1, param_2, param_3);
        this.x = varData_2193.x;
        this.y = varData_2193.y;
        this.z = varData_2193.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_2194 = varData_2186(this, varData_2190, varData_2191).call(this, param_1, param_2, param_3);
        return this.x === varData_2194.x && this.y === varData_2194.y && this.z === varData_2194.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_2195 = varData_2186(this, varData_2190, varData_2191).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_2195.x * param_4 : varData_2195.x;
        this.y += param_4 ? varData_2195.y * param_4 : varData_2195.y;
        this.z += param_4 ? varData_2195.z * param_4 : varData_2195.z;
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
        const varData_2196 = varData_2186(this, varData_2190, varData_2191).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_2196.x * param_4 : varData_2196.x;
        this.y -= param_4 ? varData_2196.y * param_4 : varData_2196.y;
        this.z -= param_4 ? varData_2196.z * param_4 : varData_2196.z;
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
        const varData_2197 = varData_2186(this, varData_2190, varData_2191).call(this, param_1, param_2, param_3);
        this.x *= varData_2197.x;
        this.y *= varData_2197.y;
        this.z *= varData_2197.z;
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
        const varData_2198 = varData_2186(this, varData_2190, varData_2191).call(this, param_1, param_2, param_3);
        this.x /= varData_2198.x;
        this.y /= varData_2198.y;
        this.z /= varData_2198.z;
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
        const varData_2199 = varData_2186(this, varData_2190, varData_2191).call(this, param_1, param_2, param_3);
        return new _0x314f62((this.x + varData_2199.x) / 2, (this.y + varData_2199.y) / 2, (this.z + varData_2199.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x3916e0, _0x94ac1, _0x38fb05] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x3916e0 !== "number" || typeof _0x94ac1 !== "number" || typeof _0x38fb05 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x140d28, _0x1c99c0, _0x2e920b] = [this.x - _0x3916e0, this.y - _0x94ac1, this.z - _0x38fb05];
        return Math.sqrt(_0x140d28 * _0x140d28 + _0x1c99c0 * _0x1c99c0 + _0x2e920b * _0x2e920b);
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
        var varData_2200 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_2200;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_2190 = new WeakSet();
    varData_2191 = function (param_1, param_2, param_3) {
      let varData_2201 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_2192) {
        varData_2201 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_2202 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_2201 = varData_2202;
      } else if (typeof param_1 === "object") {
        varData_2201 = param_1;
      } else {
        var varData_2203 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_2201 = varData_2203;
      }
      if (typeof varData_2201.x !== "number" || typeof varData_2201.y !== "number" || typeof varData_2201.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_2201;
    };
    var varData_2204 = varData_2192;
    var varData_2205;
    var varData_2206;
    var varData_2207 = class {
      constructor(param_1) {
        varData_2184(this, varData_2205, undefined);
        varData_2184(this, varData_2206, undefined);
        varData_2185(this, varData_2206, param_1 ?? 5);
        varData_2185(this, varData_2205, new Map());
      }
      setTTL(param_1) {
        varData_2185(this, varData_2206, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_2183(this, varData_2205).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_2183(this, varData_2206)) * 1000
        });
        return this;
      }
      get(param_1, _0x22c049 = false) {
        const varData_2208 = varData_2183(this, varData_2205).get(param_1);
        const varData_2209 = varData_2208 ? _0x22c049 ? true : varData_2208.expiration > Date.now() : false;
        if (!varData_2208 || !varData_2209) {
          if (varData_2208) {
            varData_2183(this, varData_2205).delete(param_1);
          }
          return;
        }
        return varData_2208.value;
      }
      has(param_1, _0x1f4b69 = false) {
        const varData_2210 = varData_2183(this, varData_2205).get(param_1);
        const varData_2211 = varData_2210 ? _0x1f4b69 ? true : varData_2210.expiration > Date.now() : false;
        if (varData_2210 && !varData_2211) {
          varData_2183(this, varData_2205).delete(param_1);
        }
        return varData_2211;
      }
      delete(param_1) {
        return varData_2183(this, varData_2205).delete(param_1);
      }
      clear() {
        varData_2183(this, varData_2205).clear();
      }
      values(_0x37f125 = false) {
        const varData_2212 = [];
        const timestamp = Date.now();
        for (const varData_2213 of varData_2183(this, varData_2205).values()) {
          if (_0x37f125 || varData_2213.expiration > timestamp) {
            varData_2212.push(varData_2213.value);
          }
        }
        return varData_2212;
      }
      keys(_0x44fc52 = false) {
        const varData_2214 = [];
        const timestamp = Date.now();
        for (const [_0x1fa495, _0x3ae011] of varData_2183(this, varData_2205).entries()) {
          if (_0x44fc52 || _0x3ae011.expiration > timestamp) {
            varData_2214.push(_0x1fa495);
          }
        }
        return varData_2214;
      }
      entries(_0x4a265e = false) {
        const varData_2215 = [];
        const timestamp = Date.now();
        for (const [_0x4eb16e, _0x665bfe] of varData_2183(this, varData_2205).entries()) {
          if (_0x4a265e || _0x665bfe.expiration > timestamp) {
            varData_2215.push([_0x4eb16e, _0x665bfe.value]);
          }
        }
        return varData_2215;
      }
    };
    varData_2205 = new WeakMap();
    varData_2206 = new WeakMap();
    var varData_2216;
    var varData_2217;
    var varData_2218;
    var varData_2219;
    var varData_2220;
    var varData_2221;
    var varData_2222;
    var varData_2223;
    var varData_2224;
    var varData_2225;
    var varData_2226;
    var varData_2227;
    var varData_2228;
    var varData_2229;
    var varData_2230;
    var varData_2231;
    var varData_2232;
    var varData_2233;
    var varData_2234;
    var varData_2235;
    var varData_2236;
    var varData_2237;
    var varData_2238 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x233692 = 30, _0x3a73d7 = false) {
        varData_2184(this, varData_2228);
        varData_2184(this, varData_2230);
        varData_2184(this, varData_2232);
        varData_2184(this, varData_2234);
        varData_2184(this, varData_2236);
        varData_2184(this, varData_2216, undefined);
        varData_2184(this, varData_2217, undefined);
        varData_2184(this, varData_2218, undefined);
        varData_2184(this, varData_2219, undefined);
        varData_2184(this, varData_2220, undefined);
        varData_2184(this, varData_2221, undefined);
        varData_2184(this, varData_2222, undefined);
        varData_2184(this, varData_2223, undefined);
        varData_2184(this, varData_2224, undefined);
        varData_2184(this, varData_2225, undefined);
        varData_2184(this, varData_2226, undefined);
        varData_2184(this, varData_2227, undefined);
        varData_2185(this, varData_2216, param_1);
        varData_2185(this, varData_2217, param_4);
        varData_2185(this, varData_2218, param_5);
        varData_2185(this, varData_2219, param_2);
        varData_2185(this, varData_2220, param_3);
        varData_2185(this, varData_2221, _0x3a73d7);
        varData_2185(this, varData_2222, _0x233692);
        varData_2185(this, varData_2224, varData_2183(this, varData_2217).x / _0x233692);
        varData_2185(this, varData_2225, varData_2183(this, varData_2217).y / _0x233692);
        varData_2185(this, varData_2223, varData_2183(this, varData_2224) * varData_2183(this, varData_2225));
        varData_2185(this, varData_2226, varData_2186(this, varData_2228, varData_2229).call(this, varData_2183(this, varData_2216), varData_2183(this, varData_2222), varData_2183(this, varData_2224), varData_2183(this, varData_2225), varData_2183(this, varData_2221)));
        varData_2185(this, varData_2227, varData_2186(this, varData_2230, varData_2231).call(this, varData_2183(this, varData_2226), varData_2183(this, varData_2223)));
      }
      get cells() {
        return varData_2183(this, varData_2226);
      }
      get cellSize() {
        return varData_2183(this, varData_2222);
      }
      get cellWidth() {
        return varData_2183(this, varData_2224);
      }
      get cellHeight() {
        return varData_2183(this, varData_2225);
      }
      get gridArea() {
        return varData_2183(this, varData_2227);
      }
      get gridCoverage() {
        return varData_2183(this, varData_2227) / varData_2183(this, varData_2218) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_2239;
        const varData_2240 = param_1.x - varData_2183(this, varData_2219).x;
        const varData_2241 = param_1.y - varData_2183(this, varData_2219).y;
        const varData_2242 = Math.floor(varData_2240 * varData_2183(this, varData_2222) / varData_2183(this, varData_2217).x);
        const varData_2243 = Math.floor(varData_2241 * varData_2183(this, varData_2222) / varData_2183(this, varData_2217).y);
        let varData_2244 = (varData_2239 = varData_2183(this, varData_2226)[varData_2242]) == null ? undefined : varData_2239[varData_2243];
        if (!varData_2244 && varData_2183(this, varData_2221)) {
          varData_2244 = varData_2186(this, varData_2234, varData_2235).call(this, varData_2242, varData_2243, varData_2183(this, varData_2224), varData_2183(this, varData_2225), varData_2183(this, varData_2216));
          varData_2183(this, varData_2226)[varData_2242][varData_2243] = varData_2244;
          if (!varData_2244) {
            return false;
          }
          varData_2185(this, varData_2227, varData_2183(this, varData_2227) + varData_2183(this, varData_2223));
        }
        return varData_2244 ?? false;
      }
    };
    varData_2216 = new WeakMap();
    varData_2217 = new WeakMap();
    varData_2218 = new WeakMap();
    varData_2219 = new WeakMap();
    varData_2220 = new WeakMap();
    varData_2221 = new WeakMap();
    varData_2222 = new WeakMap();
    varData_2223 = new WeakMap();
    varData_2224 = new WeakMap();
    varData_2225 = new WeakMap();
    varData_2226 = new WeakMap();
    varData_2227 = new WeakMap();
    varData_2228 = new WeakSet();
    varData_2229 = function (param_1, param_2, param_3, param_4, param_5) {
      const varData_2245 = {};
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_2245[loopIdx] = {};
        if (param_5) {
          continue;
        }
        for (let loopIdx_1 = 0; loopIdx_1 < param_2; loopIdx_1++) {
          const varData_2246 = varData_2186(this, varData_2234, varData_2235).call(this, loopIdx, loopIdx_1, param_3, param_4, param_1);
          if (!varData_2246) {
            continue;
          }
          varData_2245[loopIdx][loopIdx_1] = true;
        }
      }
      return varData_2245;
    };
    varData_2230 = new WeakSet();
    varData_2231 = function (param_1, param_2) {
      let varData_2247 = 0;
      for (const varData_2248 in param_1) {
        for (const varData_2249 in param_1[varData_2248]) {
          varData_2247 += param_2;
        }
      }
      return varData_2247;
    };
    varData_2232 = new WeakSet();
    varData_2233 = function (param_1, param_2, param_3, param_4) {
      const varData_2250 = [];
      const varData_2251 = param_1 * param_3 + varData_2183(this, varData_2219).x;
      const varData_2252 = param_2 * param_4 + varData_2183(this, varData_2219).y;
      varData_2250.push(new varData_2334(varData_2251, varData_2252));
      varData_2250.push(new varData_2334(varData_2251 + param_3, varData_2252));
      varData_2250.push(new varData_2334(varData_2251 + param_3, varData_2252 + param_4));
      varData_2250.push(new varData_2334(varData_2251, varData_2252 + param_4));
      return varData_2250;
    };
    varData_2234 = new WeakSet();
    varData_2235 = function (param_1, param_2, param_3, param_4, param_5) {
      const varData_2253 = varData_2186(this, varData_2232, varData_2233).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_1 = false;
      for (const varData_2254 of varData_2253) {
        const varData_2255 = varData_2366.MathUtils.windingNumber(varData_2254, param_5);
        if (varData_2255 !== 0) {
          isDisabled_1 = true;
          break;
        }
      }
      if (!isDisabled_1) {
        return false;
      }
      for (let loopIdx = 0; loopIdx < varData_2253.length; loopIdx++) {
        const varData_2256 = varData_2253[loopIdx];
        const varData_2257 = varData_2253[(loopIdx + 1) % varData_2253.length];
        for (let loopIdx_1 = 0; loopIdx_1 < param_5.length; loopIdx_1++) {
          const varData_2258 = param_5[loopIdx_1];
          const varData_2259 = param_5[(loopIdx_1 + 1) % param_5.length];
          if (varData_2186(this, varData_2236, varData_2237).call(this, varData_2256, varData_2257, varData_2258, varData_2259)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_2236 = new WeakSet();
    varData_2237 = function (param_1, param_2, param_3, param_4) {
      const varData_2260 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_2261 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_2262 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_2260 === 0) {
        return varData_2261 === 0 && varData_2262 === 0;
      }
      const varData_2263 = varData_2261 / varData_2260;
      const varData_2264 = varData_2262 / varData_2260;
      return varData_2263 >= 0 && varData_2263 <= 1 && varData_2264 >= 0 && varData_2264 <= 1;
    };
    var varData_2265;
    var varData_2266;
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
    var varData_2283 = class {
      constructor(param_1, _0x50818a = {}, _0x463638 = {}) {
        varData_2184(this, varData_2273);
        varData_2184(this, varData_2275);
        varData_2184(this, varData_2277);
        varData_2184(this, varData_2279);
        varData_2184(this, varData_2281);
        varData_2184(this, varData_2265, undefined);
        varData_2184(this, varData_2266, undefined);
        varData_2184(this, varData_2267, undefined);
        varData_2184(this, varData_2268, undefined);
        varData_2184(this, varData_2269, undefined);
        varData_2184(this, varData_2270, undefined);
        varData_2184(this, varData_2271, undefined);
        varData_2184(this, varData_2272, undefined);
        varData_2185(this, varData_2265, varData_2366.getUUID());
        varData_2185(this, varData_2266, param_1);
        varData_2185(this, varData_2267, varData_2186(this, varData_2273, varData_2274).call(this, param_1));
        varData_2185(this, varData_2268, varData_2186(this, varData_2275, varData_2276).call(this, param_1));
        varData_2185(this, varData_2269, varData_2186(this, varData_2281, varData_2282).call(this, param_1));
        varData_2185(this, varData_2270, varData_2186(this, varData_2279, varData_2280).call(this, varData_2183(this, varData_2267), varData_2183(this, varData_2268)));
        varData_2185(this, varData_2271, varData_2186(this, varData_2277, varData_2278).call(this, varData_2183(this, varData_2267), varData_2183(this, varData_2268)));
        this.options = _0x50818a;
        this.data = _0x463638;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_2185(this, varData_2272, new varData_2238(varData_2183(this, varData_2266), varData_2183(this, varData_2267), varData_2183(this, varData_2268), varData_2183(this, varData_2270), varData_2183(this, varData_2269), _0x50818a.gridCellSize, _0x50818a.useLazyGrid));
      }
      get id() {
        return varData_2183(this, varData_2265);
      }
      get center() {
        return varData_2183(this, varData_2271);
      }
      get min() {
        return varData_2183(this, varData_2267);
      }
      get max() {
        return varData_2183(this, varData_2268);
      }
      get points() {
        return [...varData_2183(this, varData_2266)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_2183(this, varData_2267).x || param_1.x > varData_2183(this, varData_2268).x) {
          return false;
        } else if (param_1.y < varData_2183(this, varData_2267).y || param_1.y > varData_2183(this, varData_2268).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_2204) {
          const varData_2284 = this.options.minZ ?? -Infinity;
          const varData_2285 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_2284 || param_1.z > varData_2285) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_2183(this, varData_2272)) {
          return varData_2183(this, varData_2272).isPointInsideGrid(param_1);
        }
        const varData_2286 = varData_2366.MathUtils.windingNumber(param_1, varData_2183(this, varData_2266));
        return varData_2286 !== 0;
      }
      addPoint(param_1) {
        varData_2183(this, varData_2266).push(param_1);
      }
      removePoint(param_1) {
        const varData_2287 = varData_2183(this, varData_2266).findIndex(param_1_1 => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_2287 === -1) {
          return;
        }
        varData_2183(this, varData_2266).splice(varData_2287, 1);
      }
      removeLastPoint() {
        varData_2183(this, varData_2266).pop();
      }
      recalculate() {
        varData_2185(this, varData_2267, varData_2186(this, varData_2273, varData_2274).call(this, varData_2183(this, varData_2266)));
        varData_2185(this, varData_2268, varData_2186(this, varData_2275, varData_2276).call(this, varData_2183(this, varData_2266)));
        varData_2185(this, varData_2269, varData_2186(this, varData_2281, varData_2282).call(this, varData_2183(this, varData_2266)));
        varData_2185(this, varData_2270, varData_2186(this, varData_2279, varData_2280).call(this, varData_2183(this, varData_2267), varData_2183(this, varData_2268)));
        varData_2185(this, varData_2271, varData_2186(this, varData_2277, varData_2278).call(this, varData_2183(this, varData_2267), varData_2183(this, varData_2268)));
        if (!this.options.useGrid) {
          return;
        }
        varData_2185(this, varData_2272, new varData_2238(varData_2183(this, varData_2266), varData_2183(this, varData_2267), varData_2183(this, varData_2268), varData_2183(this, varData_2270), varData_2183(this, varData_2269), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_2265 = new WeakMap();
    varData_2266 = new WeakMap();
    varData_2267 = new WeakMap();
    varData_2268 = new WeakMap();
    varData_2269 = new WeakMap();
    varData_2270 = new WeakMap();
    varData_2271 = new WeakMap();
    varData_2272 = new WeakMap();
    varData_2273 = new WeakSet();
    varData_2274 = function (param_1) {
      let varData_2288 = Number.MAX_SAFE_INTEGER;
      let varData_2289 = Number.MAX_SAFE_INTEGER;
      for (const varData_2290 of param_1) {
        varData_2288 = Math.min(varData_2288, varData_2290.x);
        varData_2289 = Math.min(varData_2289, varData_2290.y);
      }
      return new varData_2334(varData_2288, varData_2289);
    };
    varData_2275 = new WeakSet();
    varData_2276 = function (param_1) {
      let varData_2291 = Number.MIN_SAFE_INTEGER;
      let varData_2292 = Number.MIN_SAFE_INTEGER;
      for (const varData_2293 of param_1) {
        varData_2291 = Math.max(varData_2291, varData_2293.x);
        varData_2292 = Math.max(varData_2292, varData_2293.y);
      }
      return new varData_2334(varData_2291, varData_2292);
    };
    varData_2277 = new WeakSet();
    varData_2278 = function (param_1, param_2) {
      const varData_2294 = param_2.add(param_1);
      return varData_2294.divideScalar(2);
    };
    varData_2279 = new WeakSet();
    varData_2280 = function (param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_2281 = new WeakSet();
    varData_2282 = function (param_1) {
      let varData_2295 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length - 1; loopIdx < param_1.length; loopIdx_1 = loopIdx++) {
        const varData_2296 = param_1[loopIdx];
        const varData_2297 = param_1[loopIdx_1];
        varData_2295 += varData_2296.x * varData_2297.y;
        varData_2295 -= varData_2296.y * varData_2297.x;
      }
      return Math.abs(varData_2295 / 2);
    };
    var varData_2298;
    var varData_2299;
    var varData_2300 = class _0x414369 {
      constructor(param_1, param_2) {
        varData_2184(this, varData_2298);
        const varData_2301 = varData_2186(this, varData_2298, varData_2299).call(this, param_1, param_2);
        this.x = varData_2301.x;
        this.y = varData_2301.y;
      }
      equals(param_1, param_2) {
        const varData_2302 = varData_2186(this, varData_2298, varData_2299).call(this, param_1, param_2);
        return this.x === varData_2302.x && this.y === varData_2302.y;
      }
      add(param_1, param_2, param_3) {
        const varData_2303 = varData_2186(this, varData_2298, varData_2299).call(this, param_1, param_2);
        const varData_2304 = this.x + (param_3 ? varData_2303.x * param_3 : varData_2303.x);
        const varData_2305 = this.y + (param_3 ? varData_2303.y * param_3 : varData_2303.y);
        return new _0x414369(varData_2304, varData_2305);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2306 = this.x + param_1;
        const varData_2307 = this.y + param_1;
        return new _0x414369(varData_2306, varData_2307);
      }
      sub(param_1, param_2, param_3) {
        const varData_2308 = varData_2186(this, varData_2298, varData_2299).call(this, param_1, param_2);
        const varData_2309 = this.x - (param_3 ? varData_2308.x * param_3 : varData_2308.x);
        const varData_2310 = this.y - (param_3 ? varData_2308.y * param_3 : varData_2308.y);
        return new _0x414369(varData_2309, varData_2310);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2311 = this.x - param_1;
        const varData_2312 = this.y - param_1;
        return new _0x414369(varData_2311, varData_2312);
      }
      multiply(param_1, param_2) {
        const varData_2313 = varData_2186(this, varData_2298, varData_2299).call(this, param_1, param_2);
        const varData_2314 = this.x * varData_2313.x;
        const varData_2315 = this.y * varData_2313.y;
        return new _0x414369(varData_2314, varData_2315);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2316 = this.x * param_1;
        const varData_2317 = this.y * param_1;
        return new _0x414369(varData_2316, varData_2317);
      }
      divide(param_1, param_2) {
        const varData_2318 = varData_2186(this, varData_2298, varData_2299).call(this, param_1, param_2);
        const varData_2319 = this.x / varData_2318.x;
        const varData_2320 = this.y / varData_2318.y;
        return new _0x414369(varData_2319, varData_2320);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2321 = this.x / param_1;
        const varData_2322 = this.y / param_1;
        return new _0x414369(varData_2321, varData_2322);
      }
      round() {
        const varData_2323 = Math.round(this.x);
        const varData_2324 = Math.round(this.y);
        return new _0x414369(varData_2323, varData_2324);
      }
      floor() {
        const varData_2325 = Math.floor(this.x);
        const varData_2326 = Math.floor(this.y);
        return new _0x414369(varData_2325, varData_2326);
      }
      ceil() {
        const varData_2327 = Math.ceil(this.x);
        const varData_2328 = Math.ceil(this.y);
        return new _0x414369(varData_2327, varData_2328);
      }
      getCenter(param_1, param_2) {
        const varData_2329 = varData_2186(this, varData_2298, varData_2299).call(this, param_1, param_2);
        return new _0x414369((this.x + varData_2329.x) / 2, (this.y + varData_2329.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0x282f65, _0x5f4537] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0x282f65 !== "number" || typeof _0x5f4537 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x1c3a48, _0x1d4dd8] = [this.x - _0x282f65, this.y - _0x5f4537];
        return Math.sqrt(_0x1c3a48 * _0x1c3a48 + _0x1d4dd8 * _0x1d4dd8);
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
        var varData_2330 = {
          x: this.x,
          y: this.y
        };
        return varData_2330;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_2298 = new WeakSet();
    varData_2299 = function (param_1, param_2) {
      let varData_2331 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_2300 || param_1 instanceof varData_2204) {
        varData_2331 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_2332 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_2331 = varData_2332;
      } else if (typeof param_1 === "object") {
        varData_2331 = param_1;
      } else {
        var varData_2333 = {
          x: param_1,
          y: param_2
        };
        varData_2331 = varData_2333;
      }
      if (typeof varData_2331.x !== "number" || typeof varData_2331.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_2331;
    };
    var varData_2334 = varData_2300;
    var varData_2335 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_2336 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_2337 = ([_0x49a588, _0x251de6, _0x472991], [_0x44f44a, _0x411db2, _0x289ef7]) => {
      const [_0x475001, _0x57ff1c, _0x170c2d] = [_0x49a588 - _0x44f44a, _0x251de6 - _0x411db2, _0x472991 - _0x289ef7];
      return Math.sqrt(_0x475001 * _0x475001 + _0x57ff1c * _0x57ff1c + _0x170c2d * _0x170c2d);
    };
    var varData_2338 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_2339 = (param_1, param_2) => {
      if (param_1 instanceof varData_2334) {
        return param_1;
      } else if (param_1 instanceof varData_2204) {
        return new varData_2334(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_2334(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_2334(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_2334(param_1, param_2);
    };
    var varData_2340 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_2204) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_2204(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_2204(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_2204(param_1, param_2, param_3);
    };
    var varData_2341 = (param_1, param_2) => {
      let varData_2342 = 0;
      const varData_2343 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        const varData_2344 = param_2[loopIdx];
        const varData_2345 = param_2[(loopIdx + 1) % param_2.length];
        if (varData_2344.y <= param_1.y) {
          if (varData_2345.y > param_1.y && varData_2343(varData_2344, varData_2345, param_1) > 0) {
            varData_2342++;
          }
        } else if (varData_2345.y <= param_1.y && varData_2343(varData_2344, varData_2345, param_1) < 0) {
          varData_2342--;
        }
      }
      return varData_2342;
    };
    var varData_2346 = {
      clamp: varData_2335,
      getMapRange: varData_2336,
      getDistance: varData_2337,
      getRandomNumber: varData_2338,
      parseVector2: varData_2339,
      parseVector3: varData_2340,
      windingNumber: varData_2341
    };
    var varData_2347 = varData_2346;
    var varData_2348 = {};
    var varData_2349 = {
      ArrUtils: () => varData_2355
    };
    varData_2180(varData_2348, varData_2349);
    var varData_2350 = param_1 => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const varData_2351 = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[varData_2351]] = [param_1[varData_2351], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_2352 = (param_1, param_2) => {
      const varData_2353 = [];
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_2353.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return varData_2353;
    };
    var varData_2354 = {
      shuffleArray: varData_2350,
      getRandomElements: varData_2352
    };
    var varData_2355 = varData_2354;
    function handleAction_144(param_1, param_2) {
      const varData_2356 = "_";
      const varData_2357 = handleAction_145((param_1_1, param_2_1, ..._0x3f918c) => {
        return param_1(param_1_1, ..._0x3f918c);
      }, param_2);
      return {
        get: function (..._0x57f1d5) {
          return varData_2357.get(varData_2356, ..._0x57f1d5);
        },
        reset: function () {
          varData_2357.reset(varData_2356);
        }
      };
    }
    function handleAction_145(param_1, param_2) {
      const varData_2358 = param_2.timeToLive || 60000;
      const varData_2359 = {};
      const varData_2360 = param_2.immediateResolve || false;
      async function handleAction_146(param_1_1, ..._0x38cb07) {
        let varData_2361 = varData_2359[param_1_1];
        if (!varData_2361) {
          varData_2361 = {
            value: null,
            lastUpdated: 0
          };
          varData_2359[param_1_1] = varData_2361;
        }
        const timestamp = Date.now();
        if (varData_2361.lastUpdated === 0 || timestamp - varData_2361.lastUpdated > varData_2358) {
          const [_0x19b768, _0x19b253] = await param_1(varData_2361, param_1_1, ..._0x38cb07);
          if (_0x19b768) {
            varData_2361.lastUpdated = timestamp;
            varData_2361.value = _0x19b253;
          }
          return _0x19b253;
        }
        if (varData_2360) {
          return Promise.resolve(varData_2361.value);
        } else {
          return await new Promise(param_1_2 => setTimeout(() => param_1_2(varData_2361.value), 0));
        }
      }
      return {
        get: async function (param_1_1, ..._0x5e4ceb) {
          return await handleAction_146(param_1_1, ..._0x5e4ceb);
        },
        reset: function (param_1_1) {
          const varData_2362 = varData_2359[param_1_1];
          if (varData_2362) {
            varData_2362.lastUpdated = 0;
          }
        },
        clear: function () {
          for (const varData_2363 in varData_2359) {
            delete varData_2359[varData_2363];
          }
        }
      };
    }
    function handleAction_147() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_119();
      } else {
        return new varData_692(4).toString();
      }
    }
    function handleAction_148(param_1) {
      return varData_146(param_1, varData_146.URL);
    }
    function handleAction_149(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_2364 = Date.now() - timestamp > param_2;
          if (param_1() || varData_2364) {
            clearInterval(intervalId);
            return param_1_1(varData_2364);
          }
        }, 1);
      });
    }
    function handleAction_150(param_1) {
      return new Promise(param_1_1 => setTimeout(() => param_1_1(), param_1));
    }
    function handleAction_151() {
      return handleAction_150(0);
    }
    var varData_2365 = {
      cache: handleAction_144,
      cacheableMap: handleAction_145,
      waitForCondition: handleAction_149,
      getUUID: handleAction_147,
      getStringHash: handleAction_148,
      wait: handleAction_150,
      waitForNextFrame: handleAction_151,
      deflate: varData_682,
      inflate: varData_686,
      ...varData_2188,
      ...varData_2348
    };
    var varData_2366 = varData_2365;
    var varData_2367 = (param_1 => {
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
    })(varData_2367 || {});
    ;
    function handleAction_152(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_153(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_154(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2368 = param_1[param_6](param_7);
        var varData_2369 = varData_2368.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2368.done) {
        param_2(varData_2369);
      } else {
        Promise.resolve(varData_2369).then(param_4, param_5);
      }
    }
    function handleAction_155(param_1) {
      return function () {
        var varData_2370 = this;
        var varData_2371 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2372 = param_1.apply(varData_2370, varData_2371);
          function handleAction_156(param_1_2) {
            handleAction_154(varData_2372, param_1_1, param_2, handleAction_156, handleAction_157, "next", param_1_2);
          }
          function handleAction_157(param_1_2) {
            handleAction_154(varData_2372, param_1_1, param_2, handleAction_156, handleAction_157, "throw", param_1_2);
          }
          handleAction_156(undefined);
        });
      };
    }
    function handleAction_158(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_159(param_1, param_2) {
      for (var loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        var varData_2373 = param_2[loopIdx];
        varData_2373.enumerable = varData_2373.enumerable || false;
        varData_2373.configurable = true;
        if ("value" in varData_2373) {
          varData_2373.writable = true;
        }
        Object.defineProperty(param_1, varData_2373.key, varData_2373);
      }
    }
    function handleAction_160(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_159(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_159(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_161(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2374 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2374);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_162(param_1, param_2) {
      var varData_2375 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2375 == null) {
        return;
      }
      var varData_2376 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2377;
      var varData_2378;
      try {
        for (varData_2375 = varData_2375.call(param_1); !(isEnabled_2 = (varData_2377 = varData_2375.next()).done); isEnabled_2 = true) {
          varData_2376.push(varData_2377.value);
          if (param_2 && varData_2376.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2378 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2375.return != null) {
            varData_2375.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2378;
          }
        }
      }
      return varData_2376;
    }
    function handleAction_163() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_164(param_1, param_2) {
      return handleAction_153(param_1) || handleAction_162(param_1, param_2) || handleAction_165(param_1, param_2) || handleAction_163();
    }
    function handleAction_165(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_152(param_1, param_2);
      }
      var varData_2379 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2379 === "Object" && param_1.constructor) {
        varData_2379 = param_1.constructor.name;
      }
      if (varData_2379 === "Map" || varData_2379 === "Set") {
        return Array.from(varData_2379);
      }
      if (varData_2379 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2379)) {
        return handleAction_152(param_1, param_2);
      }
    }
    function handleAction_166(param_1, param_2) {
      var varData_2380;
      var varData_2381;
      var varData_2382;
      var varData_2383;
      var varData_2384 = {
        label: 0,
        sent: function () {
          if (varData_2382[0] & 1) {
            throw varData_2382[1];
          }
          return varData_2382[1];
        },
        trys: [],
        ops: []
      };
      varData_2383 = {
        next: handleAction_167(0),
        throw: handleAction_167(1),
        return: handleAction_167(2)
      };
      if (typeof Symbol === "function") {
        varData_2383[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2383;
      function handleAction_167(param_1_1) {
        return function (param_1_2) {
          return handleAction_168([param_1_1, param_1_2]);
        };
      }
      function handleAction_168(param_1_1) {
        if (varData_2380) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2384) {
          try {
            varData_2380 = 1;
            if (varData_2381 && (varData_2382 = param_1_1[0] & 2 ? varData_2381.return : param_1_1[0] ? varData_2381.throw || ((varData_2382 = varData_2381.return) && varData_2382.call(varData_2381), 0) : varData_2381.next) && !(varData_2382 = varData_2382.call(varData_2381, param_1_1[1])).done) {
              return varData_2382;
            }
            varData_2381 = 0;
            if (varData_2382) {
              param_1_1 = [param_1_1[0] & 2, varData_2382.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2382 = param_1_1;
                break;
              case 4:
                varData_2384.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2384.label++;
                varData_2381 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2384.ops.pop();
                varData_2384.trys.pop();
                continue;
              default:
                if (!(varData_2382 = varData_2384.trys, varData_2382 = varData_2382.length > 0 && varData_2382[varData_2382.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2384 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2382 || param_1_1[1] > varData_2382[0] && param_1_1[1] < varData_2382[3])) {
                  varData_2384.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2384.label < varData_2382[1]) {
                  varData_2384.label = varData_2382[1];
                  varData_2382 = param_1_1;
                  break;
                }
                if (varData_2382 && varData_2384.label < varData_2382[2]) {
                  varData_2384.label = varData_2382[2];
                  varData_2384.ops.push(param_1_1);
                  break;
                }
                if (varData_2382[2]) {
                  varData_2384.ops.pop();
                }
                varData_2384.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2384);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2381 = 0;
          } finally {
            varData_2380 = varData_2382 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2385 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2385;
      }
    }
    var varData_2386 = function () {
      'use strict';

      function handleAction_169() {
        handleAction_158(this, handleAction_169);
      }
      handleAction_160(handleAction_169, null, [{
        key: "enter",
        value: function _0x220d8c(param_1) {
          var varData_2387 = this;
          return handleAction_155(function () {
            var varData_2388;
            var varData_2389;
            var varData_2390;
            var varData_2391;
            return handleAction_166(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  if (DoesCamExist(varData_2387.cam)) {
                    return [3, 3];
                  }
                  varData_2387.cam = CreateCam("DEFAULT_SCRIPTED_CAMERA", true);
                  varData_2388 = GetOffsetFromEntityInWorldCoords(param_1, 0, -0.6, 1.1);
                  varData_2389 = GetEntityHeading(param_1);
                  SetCamCoord(varData_2387.cam, varData_2388[0], varData_2388[1], varData_2388[2]);
                  SetCamRot(varData_2387.cam, 0, 0, varData_2389, 2);
                  SetCamNearClip(varData_2387.cam, 0.00001);
                  RenderScriptCams(true, true, 1000, false, false);
                  varData_2390 = varData_3218.getCurrentBench();
                  if (!varData_2390) {
                    return [2];
                  }
                  varData_2391 = GetOffsetFromEntityInWorldCoords(varData_2390.entityId, -0, -1, 2.1);
                  param_1_1.label = 1;
                case 1:
                  if (!DoesCamExist(varData_2387.cam)) {
                    return [3, 3];
                  }
                  DrawSpotLightWithShadow(varData_2391[0], varData_2391[1], varData_2391[2], 0, 0, -1, 255, 255, 200, 100, 5, 0, 80, 0, 0);
                  return [4, varData_2366.wait(0)];
                case 2:
                  param_1_1.sent();
                  return [3, 1];
                case 3:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "setPositionBasedOnModel",
        value: function _0x382c91(param_1, param_2) {
          var varData_2392 = this;
          return handleAction_155(function () {
            var varData_2393;
            var varData_2394;
            var varData_2395;
            var varData_2396;
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
            var varData_2408;
            return handleAction_166(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  varData_2393 = GetEntityModel(param_2);
                  if (!varData_2393) {
                    return [2];
                  }
                  varData_2394 = handleAction_164(GetModelDimensions(varData_2393), 2);
                  varData_2395 = varData_2394[0];
                  varData_2396 = varData_2394[1];
                  varData_2397 = varData_2396[0] - varData_2395[0];
                  varData_2398 = 0.3;
                  varData_2399 = GetOffsetFromEntityInWorldCoords(param_1, 0, -varData_2397 * 1.8, 1.1);
                  varData_2400 = GetEntityHeading(param_1);
                  varData_2401 = GetCamCoord(varData_2392.cam);
                  varData_2402 = varData_2399;
                  varData_2403 = GetCamRot(varData_2392.cam, 2);
                  varData_2404 = [0, 0, varData_2400];
                  varData_2405 = 0;
                  param_1_1.label = 1;
                case 1:
                  if (!(varData_2405 < varData_2398)) {
                    return [3, 3];
                  }
                  varData_2406 = varData_2405 / varData_2398;
                  varData_2407 = [handleAction_127(varData_2401[0], varData_2402[0], varData_2406), handleAction_127(varData_2401[1], varData_2402[1], varData_2406), handleAction_127(varData_2401[2], varData_2402[2], varData_2406)];
                  varData_2408 = [handleAction_127(varData_2403[0], varData_2404[0], varData_2406), handleAction_127(varData_2403[1], varData_2404[1], varData_2406), handleAction_127(varData_2403[2], varData_2404[2], varData_2406)];
                  SetCamCoord(varData_2392.cam, varData_2407[0], varData_2407[1], varData_2407[2]);
                  SetCamRot(varData_2392.cam, varData_2408[0], varData_2403[1], varData_2403[2], 2);
                  varData_2405 += GetFrameTime();
                  return [4, varData_2366.wait(0)];
                case 2:
                  param_1_1.sent();
                  return [3, 1];
                case 3:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "exit",
        value: function _0x3fbeae() {
          if (DoesCamExist(this.cam)) {
            RenderScriptCams(false, true, 1000, true, true);
            DestroyCam(this.cam, false);
          }
        }
      }]);
      return handleAction_169;
    }();
    handleAction_161(varData_2386, "cam", undefined);
    ;
    class _0x50a55a {
      constructor(_0x4ad682 = 0, _0x1b8f56 = 0, _0x199198 = 0, _0x56c747 = 1) {
        this.isQuaternion = true;
        this._x = _0x4ad682;
        this._y = _0x1b8f56;
        this._z = _0x199198;
        this._w = _0x56c747;
      }
      static slerpFlat(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
        let varData_2409 = param_3[param_4 + 0];
        let varData_2410 = param_3[param_4 + 1];
        let varData_2411 = param_3[param_4 + 2];
        let varData_2412 = param_3[param_4 + 3];
        const varData_2413 = param_5[param_6 + 0];
        const varData_2414 = param_5[param_6 + 1];
        const varData_2415 = param_5[param_6 + 2];
        const varData_2416 = param_5[param_6 + 3];
        if (param_7 === 0) {
          param_1[param_2 + 0] = varData_2409;
          param_1[param_2 + 1] = varData_2410;
          param_1[param_2 + 2] = varData_2411;
          param_1[param_2 + 3] = varData_2412;
          return;
        }
        if (param_7 === 1) {
          param_1[param_2 + 0] = varData_2413;
          param_1[param_2 + 1] = varData_2414;
          param_1[param_2 + 2] = varData_2415;
          param_1[param_2 + 3] = varData_2416;
          return;
        }
        if (varData_2412 !== varData_2416 || varData_2409 !== varData_2413 || varData_2410 !== varData_2414 || varData_2411 !== varData_2415) {
          let varData_2417 = 1 - param_7;
          const varData_2418 = varData_2409 * varData_2413 + varData_2410 * varData_2414 + varData_2411 * varData_2415 + varData_2412 * varData_2416;
          const varData_2419 = varData_2418 >= 0 ? 1 : -1;
          const varData_2420 = 1 - varData_2418 * varData_2418;
          if (varData_2420 > Number.EPSILON) {
            const varData_2421 = Math.sqrt(varData_2420);
            const varData_2422 = Math.atan2(varData_2421, varData_2418 * varData_2419);
            varData_2417 = Math.sin(varData_2417 * varData_2422) / varData_2421;
            param_7 = Math.sin(param_7 * varData_2422) / varData_2421;
          }
          const varData_2423 = param_7 * varData_2419;
          varData_2409 = varData_2409 * varData_2417 + varData_2413 * varData_2423;
          varData_2410 = varData_2410 * varData_2417 + varData_2414 * varData_2423;
          varData_2411 = varData_2411 * varData_2417 + varData_2415 * varData_2423;
          varData_2412 = varData_2412 * varData_2417 + varData_2416 * varData_2423;
          if (varData_2417 === 1 - param_7) {
            const varData_2424 = 1 / Math.sqrt(varData_2409 * varData_2409 + varData_2410 * varData_2410 + varData_2411 * varData_2411 + varData_2412 * varData_2412);
            varData_2409 *= varData_2424;
            varData_2410 *= varData_2424;
            varData_2411 *= varData_2424;
            varData_2412 *= varData_2424;
          }
        }
        param_1[param_2] = varData_2409;
        param_1[param_2 + 1] = varData_2410;
        param_1[param_2 + 2] = varData_2411;
        param_1[param_2 + 3] = varData_2412;
      }
      static multiplyQuaternionsFlat(param_1, param_2, param_3, param_4, param_5, param_6) {
        const varData_2425 = param_3[param_4];
        const varData_2426 = param_3[param_4 + 1];
        const varData_2427 = param_3[param_4 + 2];
        const varData_2428 = param_3[param_4 + 3];
        const varData_2429 = param_5[param_6];
        const varData_2430 = param_5[param_6 + 1];
        const varData_2431 = param_5[param_6 + 2];
        const varData_2432 = param_5[param_6 + 3];
        param_1[param_2] = varData_2425 * varData_2432 + varData_2428 * varData_2429 + varData_2426 * varData_2431 - varData_2427 * varData_2430;
        param_1[param_2 + 1] = varData_2426 * varData_2432 + varData_2428 * varData_2430 + varData_2427 * varData_2429 - varData_2425 * varData_2431;
        param_1[param_2 + 2] = varData_2427 * varData_2432 + varData_2428 * varData_2431 + varData_2425 * varData_2430 - varData_2426 * varData_2429;
        param_1[param_2 + 3] = varData_2428 * varData_2432 - varData_2425 * varData_2429 - varData_2426 * varData_2430 - varData_2427 * varData_2431;
        return param_1;
      }
      get x() {
        return this._x;
      }
      set x(param_1) {
        this._x = param_1;
        this._onChangeCallback();
      }
      get y() {
        return this._y;
      }
      set y(param_1) {
        this._y = param_1;
        this._onChangeCallback();
      }
      get z() {
        return this._z;
      }
      set z(param_1) {
        this._z = param_1;
        this._onChangeCallback();
      }
      get w() {
        return this._w;
      }
      set w(param_1) {
        this._w = param_1;
        this._onChangeCallback();
      }
      set(param_1, param_2, param_3, param_4) {
        this._x = param_1;
        this._y = param_2;
        this._z = param_3;
        this._w = param_4;
        this._onChangeCallback();
        return this;
      }
      clone() {
        return new this.constructor(this._x, this._y, this._z, this._w);
      }
      copy(param_1) {
        this._x = param_1.x;
        this._y = param_1.y;
        this._z = param_1.z;
        this._w = param_1.w;
        this._onChangeCallback();
        return this;
      }
      setFromEuler(param_1, param_2) {
        const varData_2433 = param_1._x;
        const varData_2434 = param_1._y;
        const varData_2435 = param_1._z;
        const varData_2436 = param_1._order;
        const varData_2437 = Math.cos;
        const varData_2438 = Math.sin;
        const varData_2439 = varData_2437(varData_2433 / 2);
        const varData_2440 = varData_2437(varData_2434 / 2);
        const varData_2441 = varData_2437(varData_2435 / 2);
        const varData_2442 = varData_2438(varData_2433 / 2);
        const varData_2443 = varData_2438(varData_2434 / 2);
        const varData_2444 = varData_2438(varData_2435 / 2);
        switch (varData_2436) {
          case "XYZ":
            this._x = varData_2442 * varData_2440 * varData_2441 + varData_2439 * varData_2443 * varData_2444;
            this._y = varData_2439 * varData_2443 * varData_2441 - varData_2442 * varData_2440 * varData_2444;
            this._z = varData_2439 * varData_2440 * varData_2444 + varData_2442 * varData_2443 * varData_2441;
            this._w = varData_2439 * varData_2440 * varData_2441 - varData_2442 * varData_2443 * varData_2444;
            break;
          case "YXZ":
            this._x = varData_2442 * varData_2440 * varData_2441 + varData_2439 * varData_2443 * varData_2444;
            this._y = varData_2439 * varData_2443 * varData_2441 - varData_2442 * varData_2440 * varData_2444;
            this._z = varData_2439 * varData_2440 * varData_2444 - varData_2442 * varData_2443 * varData_2441;
            this._w = varData_2439 * varData_2440 * varData_2441 + varData_2442 * varData_2443 * varData_2444;
            break;
          case "ZXY":
            this._x = varData_2442 * varData_2440 * varData_2441 - varData_2439 * varData_2443 * varData_2444;
            this._y = varData_2439 * varData_2443 * varData_2441 + varData_2442 * varData_2440 * varData_2444;
            this._z = varData_2439 * varData_2440 * varData_2444 + varData_2442 * varData_2443 * varData_2441;
            this._w = varData_2439 * varData_2440 * varData_2441 - varData_2442 * varData_2443 * varData_2444;
            break;
          case "ZYX":
            this._x = varData_2442 * varData_2440 * varData_2441 - varData_2439 * varData_2443 * varData_2444;
            this._y = varData_2439 * varData_2443 * varData_2441 + varData_2442 * varData_2440 * varData_2444;
            this._z = varData_2439 * varData_2440 * varData_2444 - varData_2442 * varData_2443 * varData_2441;
            this._w = varData_2439 * varData_2440 * varData_2441 + varData_2442 * varData_2443 * varData_2444;
            break;
          case "YZX":
            this._x = varData_2442 * varData_2440 * varData_2441 + varData_2439 * varData_2443 * varData_2444;
            this._y = varData_2439 * varData_2443 * varData_2441 + varData_2442 * varData_2440 * varData_2444;
            this._z = varData_2439 * varData_2440 * varData_2444 - varData_2442 * varData_2443 * varData_2441;
            this._w = varData_2439 * varData_2440 * varData_2441 - varData_2442 * varData_2443 * varData_2444;
            break;
          case "XZY":
            this._x = varData_2442 * varData_2440 * varData_2441 - varData_2439 * varData_2443 * varData_2444;
            this._y = varData_2439 * varData_2443 * varData_2441 - varData_2442 * varData_2440 * varData_2444;
            this._z = varData_2439 * varData_2440 * varData_2444 + varData_2442 * varData_2443 * varData_2441;
            this._w = varData_2439 * varData_2440 * varData_2441 + varData_2442 * varData_2443 * varData_2444;
            break;
          default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + varData_2436);
        }
        if (param_2 !== false) {
          this._onChangeCallback();
        }
        return this;
      }
      setFromAxisAngle(param_1, param_2) {
        const varData_2445 = param_2 / 2;
        const varData_2446 = Math.sin(varData_2445);
        this._x = param_1.x * varData_2446;
        this._y = param_1.y * varData_2446;
        this._z = param_1.z * varData_2446;
        this._w = Math.cos(varData_2445);
        this._onChangeCallback();
        return this;
      }
      setFromRotationMatrix(param_1) {
        const varData_2447 = param_1.elements;
        const varData_2448 = varData_2447[0];
        const varData_2449 = varData_2447[4];
        const varData_2450 = varData_2447[8];
        const varData_2451 = varData_2447[1];
        const varData_2452 = varData_2447[5];
        const varData_2453 = varData_2447[9];
        const varData_2454 = varData_2447[2];
        const varData_2455 = varData_2447[6];
        const varData_2456 = varData_2447[10];
        const varData_2457 = varData_2448 + varData_2452 + varData_2456;
        if (varData_2457 > 0) {
          const varData_2458 = 0.5 / Math.sqrt(varData_2457 + 1);
          this._w = 0.25 / varData_2458;
          this._x = (varData_2455 - varData_2453) * varData_2458;
          this._y = (varData_2450 - varData_2454) * varData_2458;
          this._z = (varData_2451 - varData_2449) * varData_2458;
        } else if (varData_2448 > varData_2452 && varData_2448 > varData_2456) {
          const varData_2459 = Math.sqrt(1 + varData_2448 - varData_2452 - varData_2456) * 2;
          this._w = (varData_2455 - varData_2453) / varData_2459;
          this._x = varData_2459 * 0.25;
          this._y = (varData_2449 + varData_2451) / varData_2459;
          this._z = (varData_2450 + varData_2454) / varData_2459;
        } else if (varData_2452 > varData_2456) {
          const varData_2460 = Math.sqrt(1 + varData_2452 - varData_2448 - varData_2456) * 2;
          this._w = (varData_2450 - varData_2454) / varData_2460;
          this._x = (varData_2449 + varData_2451) / varData_2460;
          this._y = varData_2460 * 0.25;
          this._z = (varData_2453 + varData_2455) / varData_2460;
        } else {
          const varData_2461 = Math.sqrt(1 + varData_2456 - varData_2448 - varData_2452) * 2;
          this._w = (varData_2451 - varData_2449) / varData_2461;
          this._x = (varData_2450 + varData_2454) / varData_2461;
          this._y = (varData_2453 + varData_2455) / varData_2461;
          this._z = varData_2461 * 0.25;
        }
        this._onChangeCallback();
        return this;
      }
      setFromUnitVectors(param_1, param_2) {
        let varData_2462 = param_1.dot(param_2) + 1;
        if (varData_2462 < Number.EPSILON) {
          varData_2462 = 0;
          if (Math.abs(param_1.x) > Math.abs(param_1.z)) {
            this._x = -param_1.y;
            this._y = param_1.x;
            this._z = 0;
            this._w = varData_2462;
          } else {
            this._x = 0;
            this._y = -param_1.z;
            this._z = param_1.y;
            this._w = varData_2462;
          }
        } else {
          this._x = param_1.y * param_2.z - param_1.z * param_2.y;
          this._y = param_1.z * param_2.x - param_1.x * param_2.z;
          this._z = param_1.x * param_2.y - param_1.y * param_2.x;
          this._w = varData_2462;
        }
        return this.normalize();
      }
      angleTo(param_1) {
        return Math.acos(Math.abs(handleAction_123(this.dot(param_1), -1, 1))) * 2;
      }
      rotateTowards(param_1, param_2) {
        const varData_2463 = this.angleTo(param_1);
        if (varData_2463 === 0) {
          return this;
        }
        const varData_2464 = Math.min(1, param_2 / varData_2463);
        this.slerp(param_1, varData_2464);
        return this;
      }
      identity() {
        return this.set(0, 0, 0, 1);
      }
      invert() {
        return this.conjugate();
      }
      conjugate() {
        this._x *= -1;
        this._y *= -1;
        this._z *= -1;
        this._onChangeCallback();
        return this;
      }
      dot(param_1) {
        return this._x * param_1._x + this._y * param_1._y + this._z * param_1._z + this._w * param_1._w;
      }
      lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
      }
      length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
      }
      normalize() {
        let varData_2465 = this.length();
        if (varData_2465 === 0) {
          this._x = 0;
          this._y = 0;
          this._z = 0;
          this._w = 1;
        } else {
          varData_2465 = 1 / varData_2465;
          this._x = this._x * varData_2465;
          this._y = this._y * varData_2465;
          this._z = this._z * varData_2465;
          this._w = this._w * varData_2465;
        }
        this._onChangeCallback();
        return this;
      }
      multiply(param_1) {
        return this.multiplyQuaternions(this, param_1);
      }
      premultiply(param_1) {
        return this.multiplyQuaternions(param_1, this);
      }
      multiplyQuaternions(param_1, param_2) {
        const varData_2466 = param_1._x;
        const varData_2467 = param_1._y;
        const varData_2468 = param_1._z;
        const varData_2469 = param_1._w;
        const varData_2470 = param_2._x;
        const varData_2471 = param_2._y;
        const varData_2472 = param_2._z;
        const varData_2473 = param_2._w;
        this._x = varData_2466 * varData_2473 + varData_2469 * varData_2470 + varData_2467 * varData_2472 - varData_2468 * varData_2471;
        this._y = varData_2467 * varData_2473 + varData_2469 * varData_2471 + varData_2468 * varData_2470 - varData_2466 * varData_2472;
        this._z = varData_2468 * varData_2473 + varData_2469 * varData_2472 + varData_2466 * varData_2471 - varData_2467 * varData_2470;
        this._w = varData_2469 * varData_2473 - varData_2466 * varData_2470 - varData_2467 * varData_2471 - varData_2468 * varData_2472;
        this._onChangeCallback();
        return this;
      }
      slerp(param_1, param_2) {
        if (param_2 === 0) {
          return this;
        }
        if (param_2 === 1) {
          return this.copy(param_1);
        }
        const varData_2474 = this._x;
        const varData_2475 = this._y;
        const varData_2476 = this._z;
        const varData_2477 = this._w;
        let varData_2478 = varData_2477 * param_1._w + varData_2474 * param_1._x + varData_2475 * param_1._y + varData_2476 * param_1._z;
        if (varData_2478 < 0) {
          this._w = -param_1._w;
          this._x = -param_1._x;
          this._y = -param_1._y;
          this._z = -param_1._z;
          varData_2478 = -varData_2478;
        } else {
          this.copy(param_1);
        }
        if (varData_2478 >= 1) {
          this._w = varData_2477;
          this._x = varData_2474;
          this._y = varData_2475;
          this._z = varData_2476;
          return this;
        }
        const varData_2479 = 1 - varData_2478 * varData_2478;
        if (varData_2479 <= Number.EPSILON) {
          const varData_2480 = 1 - param_2;
          this._w = varData_2480 * varData_2477 + param_2 * this._w;
          this._x = varData_2480 * varData_2474 + param_2 * this._x;
          this._y = varData_2480 * varData_2475 + param_2 * this._y;
          this._z = varData_2480 * varData_2476 + param_2 * this._z;
          this.normalize();
          this._onChangeCallback();
          return this;
        }
        const varData_2481 = Math.sqrt(varData_2479);
        const varData_2482 = Math.atan2(varData_2481, varData_2478);
        const varData_2483 = Math.sin((1 - param_2) * varData_2482) / varData_2481;
        const varData_2484 = Math.sin(param_2 * varData_2482) / varData_2481;
        this._w = varData_2477 * varData_2483 + this._w * varData_2484;
        this._x = varData_2474 * varData_2483 + this._x * varData_2484;
        this._y = varData_2475 * varData_2483 + this._y * varData_2484;
        this._z = varData_2476 * varData_2483 + this._z * varData_2484;
        this._onChangeCallback();
        return this;
      }
      slerpQuaternions(param_1, param_2, param_3) {
        return this.copy(param_1).slerp(param_2, param_3);
      }
      random() {
        const varData_2485 = Math.random();
        const varData_2486 = Math.sqrt(1 - varData_2485);
        const varData_2487 = Math.sqrt(varData_2485);
        const varData_2488 = Math.PI * 2 * Math.random();
        const varData_2489 = Math.PI * 2 * Math.random();
        return this.set(varData_2486 * Math.cos(varData_2488), varData_2487 * Math.sin(varData_2489), varData_2487 * Math.cos(varData_2489), varData_2486 * Math.sin(varData_2488));
      }
      equals(param_1) {
        return param_1._x === this._x && param_1._y === this._y && param_1._z === this._z && param_1._w === this._w;
      }
      fromArray(param_1, _0x8d4007 = 0) {
        this._x = param_1[_0x8d4007];
        this._y = param_1[_0x8d4007 + 1];
        this._z = param_1[_0x8d4007 + 2];
        this._w = param_1[_0x8d4007 + 3];
        this._onChangeCallback();
        return this;
      }
      toArray(_0x4b00fe = [], _0x2f2bbf = 0) {
        _0x4b00fe[_0x2f2bbf] = this._x;
        _0x4b00fe[_0x2f2bbf + 1] = this._y;
        _0x4b00fe[_0x2f2bbf + 2] = this._z;
        _0x4b00fe[_0x2f2bbf + 3] = this._w;
        return _0x4b00fe;
      }
      fromBufferAttribute(param_1, param_2) {
        this._x = param_1.getX(param_2);
        this._y = param_1.getY(param_2);
        this._z = param_1.getZ(param_2);
        this._w = param_1.getW(param_2);
        return this;
      }
      toJSON() {
        return this.toArray();
      }
      _onChange(param_1) {
        this._onChangeCallback = param_1;
        return this;
      }
      _onChangeCallback() {}
      *[Symbol.iterator]() {
        yield this._x;
        yield this._y;
        yield this._z;
        yield this._w;
      }
    }
    ;
    const varData_2490 = "155";
    const varData_2491 = {
      LEFT: 0,
      MIDDLE: 1,
      RIGHT: 2,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2
    };
    const varData_2492 = {
      ROTATE: 0,
      PAN: 1,
      DOLLY_PAN: 2,
      DOLLY_ROTATE: 3
    };
    const varData_2493 = 0;
    const varData_2494 = 1;
    const varData_2495 = 2;
    const varData_2496 = 3;
    const varData_2497 = 0;
    const varData_2498 = 1;
    const varData_2499 = 2;
    const varData_2500 = 3;
    const varData_2501 = 0;
    const varData_2502 = 1;
    const varData_2503 = 2;
    const varData_2504 = 2;
    const varData_2505 = 0;
    const varData_2506 = 1;
    const varData_2507 = 2;
    const varData_2508 = 3;
    const varData_2509 = 4;
    const varData_2510 = 5;
    const varData_2511 = 100;
    const varData_2512 = 101;
    const varData_2513 = 102;
    const varData_2514 = 103;
    const varData_2515 = 104;
    const varData_2516 = 200;
    const varData_2517 = 201;
    const varData_2518 = 202;
    const varData_2519 = 203;
    const varData_2520 = 204;
    const varData_2521 = 205;
    const varData_2522 = 206;
    const varData_2523 = 207;
    const varData_2524 = 208;
    const varData_2525 = 209;
    const varData_2526 = 210;
    const varData_2527 = 0;
    const varData_2528 = 1;
    const varData_2529 = 2;
    const varData_2530 = 3;
    const varData_2531 = 4;
    const varData_2532 = 5;
    const varData_2533 = 6;
    const varData_2534 = 7;
    const varData_2535 = 0;
    const varData_2536 = 1;
    const varData_2537 = 2;
    const varData_2538 = 0;
    const varData_2539 = 1;
    const varData_2540 = 2;
    const varData_2541 = 3;
    const varData_2542 = 4;
    const varData_2543 = 5;
    const varData_2544 = 300;
    const varData_2545 = 301;
    const varData_2546 = 302;
    const varData_2547 = 303;
    const varData_2548 = 304;
    const varData_2549 = 306;
    const varData_2550 = 1000;
    const varData_2551 = 1001;
    const varData_2552 = 1002;
    const varData_2553 = 1003;
    const varData_2554 = 1004;
    const varData_2555 = 1004;
    const varData_2556 = 1005;
    const varData_2557 = 1005;
    const varData_2558 = 1006;
    const varData_2559 = 1007;
    const varData_2560 = 1007;
    const varData_2561 = 1008;
    const varData_2562 = 1008;
    const varData_2563 = 1009;
    const varData_2564 = 1010;
    const varData_2565 = 1011;
    const varData_2566 = 1012;
    const varData_2567 = 1013;
    const varData_2568 = 1014;
    const varData_2569 = 1015;
    const varData_2570 = 1016;
    const varData_2571 = 1017;
    const varData_2572 = 1018;
    const varData_2573 = 1020;
    const varData_2574 = 1021;
    const varData_2575 = 1023;
    const varData_2576 = 1024;
    const varData_2577 = 1025;
    const varData_2578 = 1026;
    const varData_2579 = 1027;
    const varData_2580 = 1028;
    const varData_2581 = 1029;
    const varData_2582 = 1030;
    const varData_2583 = 1031;
    const varData_2584 = 1033;
    const varData_2585 = 33776;
    const varData_2586 = 33777;
    const varData_2587 = 33778;
    const varData_2588 = 33779;
    const varData_2589 = 35840;
    const varData_2590 = 35841;
    const varData_2591 = 35842;
    const varData_2592 = 35843;
    const varData_2593 = 36196;
    const varData_2594 = 37492;
    const varData_2595 = 37496;
    const varData_2596 = 37808;
    const varData_2597 = 37809;
    const varData_2598 = 37810;
    const varData_2599 = 37811;
    const varData_2600 = 37812;
    const varData_2601 = 37813;
    const varData_2602 = 37814;
    const varData_2603 = 37815;
    const varData_2604 = 37816;
    const varData_2605 = 37817;
    const varData_2606 = 37818;
    const varData_2607 = 37819;
    const varData_2608 = 37820;
    const varData_2609 = 37821;
    const varData_2610 = 36492;
    const varData_2611 = 36283;
    const varData_2612 = 36284;
    const varData_2613 = 36285;
    const varData_2614 = 36286;
    const varData_2615 = 2200;
    const varData_2616 = 2201;
    const varData_2617 = 2202;
    const varData_2618 = 2300;
    const varData_2619 = 2301;
    const varData_2620 = 2302;
    const varData_2621 = 2400;
    const varData_2622 = 2401;
    const varData_2623 = 2402;
    const varData_2624 = 2500;
    const varData_2625 = 2501;
    const varData_2626 = 0;
    const varData_2627 = 1;
    const varData_2628 = 2;
    const varData_2629 = 3000;
    const varData_2630 = 3001;
    const varData_2631 = 3200;
    const varData_2632 = 3201;
    const varData_2633 = 0;
    const varData_2634 = 1;
    const varData_2635 = "";
    const varData_2636 = "srgb";
    const varData_2637 = "srgb-linear";
    const varData_2638 = "display-p3";
    const varData_2639 = 0;
    const varData_2640 = 7680;
    const varData_2641 = 7681;
    const varData_2642 = 7682;
    const varData_2643 = 7683;
    const varData_2644 = 34055;
    const varData_2645 = 34056;
    const varData_2646 = 5386;
    const varData_2647 = 512;
    const varData_2648 = 513;
    const varData_2649 = 514;
    const varData_2650 = 515;
    const varData_2651 = 516;
    const varData_2652 = 517;
    const varData_2653 = 518;
    const varData_2654 = 519;
    const varData_2655 = 512;
    const varData_2656 = 513;
    const varData_2657 = 514;
    const varData_2658 = 515;
    const varData_2659 = 516;
    const varData_2660 = 517;
    const varData_2661 = 518;
    const varData_2662 = 519;
    const varData_2663 = 35044;
    const varData_2664 = 35048;
    const varData_2665 = 35040;
    const varData_2666 = 35045;
    const varData_2667 = 35049;
    const varData_2668 = 35041;
    const varData_2669 = 35046;
    const varData_2670 = 35050;
    const varData_2671 = 35042;
    const varData_2672 = "100";
    const varData_2673 = "300 es";
    const varData_2674 = 1035;
    const varData_2675 = 2000;
    const varData_2676 = 2001;
    ;
    class _0x388336 {
      constructor(_0x3fb467 = 0, _0x13f64c = 0, _0x159f92 = 0) {
        _0x388336.prototype.isVector3 = true;
        this.x = _0x3fb467;
        this.y = _0x13f64c;
        this.z = _0x159f92;
      }
      set(param_1, param_2, _0x10226a = this.z) {
        this.x = param_1;
        this.y = param_2;
        this.z = _0x10226a;
        return this;
      }
      setScalar(param_1) {
        this.x = param_1;
        this.y = param_1;
        this.z = param_1;
        return this;
      }
      setX(param_1) {
        this.x = param_1;
        return this;
      }
      setY(param_1) {
        this.y = param_1;
        return this;
      }
      setZ(param_1) {
        this.z = param_1;
        return this;
      }
      setComponent(param_1, param_2) {
        switch (param_1) {
          case 0:
            this.x = param_2;
            break;
          case 1:
            this.y = param_2;
            break;
          case 2:
            this.z = param_2;
            break;
          default:
            throw new Error("index is out of range: " + param_1);
        }
        return this;
      }
      getComponent(param_1) {
        switch (param_1) {
          case 0:
            return this.x;
          case 1:
            return this.y;
          case 2:
            return this.z;
          default:
            throw new Error("index is out of range: " + param_1);
        }
      }
      clone() {
        return new this.constructor(this.x, this.y, this.z);
      }
      copy(param_1) {
        this.x = param_1.x;
        this.y = param_1.y;
        this.z = param_1.z;
        return this;
      }
      add(param_1) {
        this.x += param_1.x;
        this.y += param_1.y;
        this.z += param_1.z;
        return this;
      }
      addScalar(param_1) {
        this.x += param_1;
        this.y += param_1;
        this.z += param_1;
        return this;
      }
      addVectors(param_1, param_2) {
        this.x = param_1.x + param_2.x;
        this.y = param_1.y + param_2.y;
        this.z = param_1.z + param_2.z;
        return this;
      }
      addScaledVector(param_1, param_2) {
        this.x += param_1.x * param_2;
        this.y += param_1.y * param_2;
        this.z += param_1.z * param_2;
        return this;
      }
      sub(param_1) {
        this.x -= param_1.x;
        this.y -= param_1.y;
        this.z -= param_1.z;
        return this;
      }
      subScalar(param_1) {
        this.x -= param_1;
        this.y -= param_1;
        this.z -= param_1;
        return this;
      }
      subVectors(param_1, param_2) {
        this.x = param_1.x - param_2.x;
        this.y = param_1.y - param_2.y;
        this.z = param_1.z - param_2.z;
        return this;
      }
      multiply(param_1) {
        this.x *= param_1.x;
        this.y *= param_1.y;
        this.z *= param_1.z;
        return this;
      }
      multiplyScalar(param_1) {
        this.x *= param_1;
        this.y *= param_1;
        this.z *= param_1;
        return this;
      }
      multiplyVectors(param_1, param_2) {
        this.x = param_1.x * param_2.x;
        this.y = param_1.y * param_2.y;
        this.z = param_1.z * param_2.z;
        return this;
      }
      applyEuler(param_1) {
        return this.applyQuaternion(varData_2724.setFromEuler(param_1));
      }
      applyAxisAngle(param_1, param_2) {
        return this.applyQuaternion(varData_2724.setFromAxisAngle(param_1, param_2));
      }
      applyMatrix3(param_1) {
        const varData_2677 = this.x;
        const varData_2678 = this.y;
        const varData_2679 = this.z;
        const varData_2680 = param_1.elements;
        this.x = varData_2680[0] * varData_2677 + varData_2680[3] * varData_2678 + varData_2680[6] * varData_2679;
        this.y = varData_2680[1] * varData_2677 + varData_2680[4] * varData_2678 + varData_2680[7] * varData_2679;
        this.z = varData_2680[2] * varData_2677 + varData_2680[5] * varData_2678 + varData_2680[8] * varData_2679;
        return this;
      }
      applyNormalMatrix(param_1) {
        return this.applyMatrix3(param_1).normalize();
      }
      applyMatrix4(param_1) {
        const varData_2681 = this.x;
        const varData_2682 = this.y;
        const varData_2683 = this.z;
        const varData_2684 = param_1.elements;
        const varData_2685 = 1 / (varData_2684[3] * varData_2681 + varData_2684[7] * varData_2682 + varData_2684[11] * varData_2683 + varData_2684[15]);
        this.x = (varData_2684[0] * varData_2681 + varData_2684[4] * varData_2682 + varData_2684[8] * varData_2683 + varData_2684[12]) * varData_2685;
        this.y = (varData_2684[1] * varData_2681 + varData_2684[5] * varData_2682 + varData_2684[9] * varData_2683 + varData_2684[13]) * varData_2685;
        this.z = (varData_2684[2] * varData_2681 + varData_2684[6] * varData_2682 + varData_2684[10] * varData_2683 + varData_2684[14]) * varData_2685;
        return this;
      }
      applyQuaternion(param_1) {
        const varData_2686 = this.x;
        const varData_2687 = this.y;
        const varData_2688 = this.z;
        const varData_2689 = param_1.x;
        const varData_2690 = param_1.y;
        const varData_2691 = param_1.z;
        const varData_2692 = param_1.w;
        const varData_2693 = varData_2692 * varData_2686 + varData_2690 * varData_2688 - varData_2691 * varData_2687;
        const varData_2694 = varData_2692 * varData_2687 + varData_2691 * varData_2686 - varData_2689 * varData_2688;
        const varData_2695 = varData_2692 * varData_2688 + varData_2689 * varData_2687 - varData_2690 * varData_2686;
        const varData_2696 = -varData_2689 * varData_2686 - varData_2690 * varData_2687 - varData_2691 * varData_2688;
        this.x = varData_2693 * varData_2692 + varData_2696 * -varData_2689 + varData_2694 * -varData_2691 - varData_2695 * -varData_2690;
        this.y = varData_2694 * varData_2692 + varData_2696 * -varData_2690 + varData_2695 * -varData_2689 - varData_2693 * -varData_2691;
        this.z = varData_2695 * varData_2692 + varData_2696 * -varData_2691 + varData_2693 * -varData_2690 - varData_2694 * -varData_2689;
        return this;
      }
      project(param_1) {
        return this.applyMatrix4(param_1.matrixWorldInverse).applyMatrix4(param_1.projectionMatrix);
      }
      unproject(param_1) {
        return this.applyMatrix4(param_1.projectionMatrixInverse).applyMatrix4(param_1.matrixWorld);
      }
      transformDirection(param_1) {
        const varData_2697 = this.x;
        const varData_2698 = this.y;
        const varData_2699 = this.z;
        const varData_2700 = param_1.elements;
        this.x = varData_2700[0] * varData_2697 + varData_2700[4] * varData_2698 + varData_2700[8] * varData_2699;
        this.y = varData_2700[1] * varData_2697 + varData_2700[5] * varData_2698 + varData_2700[9] * varData_2699;
        this.z = varData_2700[2] * varData_2697 + varData_2700[6] * varData_2698 + varData_2700[10] * varData_2699;
        return this.normalize();
      }
      divide(param_1) {
        this.x /= param_1.x;
        this.y /= param_1.y;
        this.z /= param_1.z;
        return this;
      }
      divideScalar(param_1) {
        return this.multiplyScalar(1 / param_1);
      }
      min(param_1) {
        this.x = Math.min(this.x, param_1.x);
        this.y = Math.min(this.y, param_1.y);
        this.z = Math.min(this.z, param_1.z);
        return this;
      }
      max(param_1) {
        this.x = Math.max(this.x, param_1.x);
        this.y = Math.max(this.y, param_1.y);
        this.z = Math.max(this.z, param_1.z);
        return this;
      }
      clamp(param_1, param_2) {
        this.x = Math.max(param_1.x, Math.min(param_2.x, this.x));
        this.y = Math.max(param_1.y, Math.min(param_2.y, this.y));
        this.z = Math.max(param_1.z, Math.min(param_2.z, this.z));
        return this;
      }
      clampScalar(param_1, param_2) {
        this.x = Math.max(param_1, Math.min(param_2, this.x));
        this.y = Math.max(param_1, Math.min(param_2, this.y));
        this.z = Math.max(param_1, Math.min(param_2, this.z));
        return this;
      }
      clampLength(param_1, param_2) {
        const varData_2701 = this.length();
        return this.divideScalar(varData_2701 || 1).multiplyScalar(Math.max(param_1, Math.min(param_2, varData_2701)));
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
      round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
      }
      roundToZero() {
        this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
        return this;
      }
      negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
      }
      dot(param_1) {
        return this.x * param_1.x + this.y * param_1.y + this.z * param_1.z;
      }
      lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }
      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }
      manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
      }
      normalize() {
        return this.divideScalar(this.length() || 1);
      }
      setLength(param_1) {
        return this.normalize().multiplyScalar(param_1);
      }
      lerp(param_1, param_2) {
        this.x += (param_1.x - this.x) * param_2;
        this.y += (param_1.y - this.y) * param_2;
        this.z += (param_1.z - this.z) * param_2;
        return this;
      }
      lerpVectors(param_1, param_2, param_3) {
        this.x = param_1.x + (param_2.x - param_1.x) * param_3;
        this.y = param_1.y + (param_2.y - param_1.y) * param_3;
        this.z = param_1.z + (param_2.z - param_1.z) * param_3;
        return this;
      }
      cross(param_1) {
        return this.crossVectors(this, param_1);
      }
      crossVectors(param_1, param_2) {
        const varData_2702 = param_1.x;
        const varData_2703 = param_1.y;
        const varData_2704 = param_1.z;
        const varData_2705 = param_2.x;
        const varData_2706 = param_2.y;
        const varData_2707 = param_2.z;
        this.x = varData_2703 * varData_2707 - varData_2704 * varData_2706;
        this.y = varData_2704 * varData_2705 - varData_2702 * varData_2707;
        this.z = varData_2702 * varData_2706 - varData_2703 * varData_2705;
        return this;
      }
      projectOnVector(param_1) {
        const varData_2708 = param_1.lengthSq();
        if (varData_2708 === 0) {
          return this.set(0, 0, 0);
        }
        const varData_2709 = param_1.dot(this) / varData_2708;
        return this.copy(param_1).multiplyScalar(varData_2709);
      }
      projectOnPlane(param_1) {
        varData_2723.copy(this).projectOnVector(param_1);
        return this.sub(varData_2723);
      }
      reflect(param_1) {
        return this.sub(varData_2723.copy(param_1).multiplyScalar(this.dot(param_1) * 2));
      }
      angleTo(param_1) {
        const varData_2710 = Math.sqrt(this.lengthSq() * param_1.lengthSq());
        if (varData_2710 === 0) {
          return Math.PI / 2;
        }
        const varData_2711 = this.dot(param_1) / varData_2710;
        return Math.acos(handleAction_123(varData_2711, -1, 1));
      }
      distanceTo(param_1) {
        return Math.sqrt(this.distanceToSquared(param_1));
      }
      distanceToSquared(param_1) {
        const varData_2712 = this.x - param_1.x;
        const varData_2713 = this.y - param_1.y;
        const varData_2714 = this.z - param_1.z;
        return varData_2712 * varData_2712 + varData_2713 * varData_2713 + varData_2714 * varData_2714;
      }
      manhattanDistanceTo(param_1) {
        return Math.abs(this.x - param_1.x) + Math.abs(this.y - param_1.y) + Math.abs(this.z - param_1.z);
      }
      setFromSpherical(param_1) {
        return this.setFromSphericalCoords(param_1.radius, param_1.phi, param_1.theta);
      }
      setFromSphericalCoords(param_1, param_2, param_3) {
        const varData_2715 = Math.sin(param_2) * param_1;
        this.x = varData_2715 * Math.sin(param_3);
        this.y = Math.cos(param_2) * param_1;
        this.z = varData_2715 * Math.cos(param_3);
        return this;
      }
      setFromCylindrical(param_1) {
        return this.setFromCylindricalCoords(param_1.radius, param_1.theta, param_1.y);
      }
      setFromCylindricalCoords(param_1, param_2, param_3) {
        this.x = param_1 * Math.sin(param_2);
        this.y = param_3;
        this.z = param_1 * Math.cos(param_2);
        return this;
      }
      setFromMatrixPosition(param_1) {
        const varData_2716 = param_1.elements;
        this.x = varData_2716[12];
        this.y = varData_2716[13];
        this.z = varData_2716[14];
        return this;
      }
      setFromMatrixScale(param_1) {
        const varData_2717 = this.setFromMatrixColumn(param_1, 0).length();
        const varData_2718 = this.setFromMatrixColumn(param_1, 1).length();
        const varData_2719 = this.setFromMatrixColumn(param_1, 2).length();
        this.x = varData_2717;
        this.y = varData_2718;
        this.z = varData_2719;
        return this;
      }
      setFromMatrixColumn(param_1, param_2) {
        return this.fromArray(param_1.elements, param_2 * 4);
      }
      setFromMatrix3Column(param_1, param_2) {
        return this.fromArray(param_1.elements, param_2 * 3);
      }
      setFromEuler(param_1) {
        this.x = param_1._x;
        this.y = param_1._y;
        this.z = param_1._z;
        return this;
      }
      setFromColor(param_1) {
        this.x = param_1.r;
        this.y = param_1.g;
        this.z = param_1.b;
        return this;
      }
      equals(param_1) {
        return param_1.x === this.x && param_1.y === this.y && param_1.z === this.z;
      }
      fromArray(param_1, _0x49d45a = 0) {
        this.x = param_1[_0x49d45a];
        this.y = param_1[_0x49d45a + 1];
        this.z = param_1[_0x49d45a + 2];
        return this;
      }
      toArray(_0x47b4e2 = [], _0x56ac65 = 0) {
        _0x47b4e2[_0x56ac65] = this.x;
        _0x47b4e2[_0x56ac65 + 1] = this.y;
        _0x47b4e2[_0x56ac65 + 2] = this.z;
        return _0x47b4e2;
      }
      fromBufferAttribute(param_1, param_2) {
        this.x = param_1.getX(param_2);
        this.y = param_1.getY(param_2);
        this.z = param_1.getZ(param_2);
        return this;
      }
      random() {
        this.x = Math.random();
        this.y = Math.random();
        this.z = Math.random();
        return this;
      }
      randomDirection() {
        const varData_2720 = (Math.random() - 0.5) * 2;
        const varData_2721 = Math.random() * Math.PI * 2;
        const varData_2722 = Math.sqrt(1 - varData_2720 ** 2);
        this.x = varData_2722 * Math.cos(varData_2721);
        this.y = varData_2722 * Math.sin(varData_2721);
        this.z = varData_2720;
        return this;
      }
      *[Symbol.iterator]() {
        yield this.x;
        yield this.y;
        yield this.z;
      }
    }
    const varData_2723 = new _0x388336();
    const varData_2724 = new _0x50a55a();
    ;
    class _0xf7127b {
      constructor(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9, param_10, param_11, param_12, param_13, param_14, param_15, param_16) {
        _0xf7127b.prototype.isMatrix4 = true;
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        if (param_1 !== undefined) {
          this.set(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9, param_10, param_11, param_12, param_13, param_14, param_15, param_16);
        }
      }
      set(param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8, param_9, param_10, param_11, param_12, param_13, param_14, param_15, param_16) {
        const varData_2725 = this.elements;
        varData_2725[0] = param_1;
        varData_2725[4] = param_2;
        varData_2725[8] = param_3;
        varData_2725[12] = param_4;
        varData_2725[1] = param_5;
        varData_2725[5] = param_6;
        varData_2725[9] = param_7;
        varData_2725[13] = param_8;
        varData_2725[2] = param_9;
        varData_2725[6] = param_10;
        varData_2725[10] = param_11;
        varData_2725[14] = param_12;
        varData_2725[3] = param_13;
        varData_2725[7] = param_14;
        varData_2725[11] = param_15;
        varData_2725[15] = param_16;
        return this;
      }
      identity() {
        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
      }
      clone() {
        return new _0xf7127b().fromArray(this.elements);
      }
      copy(param_1) {
        const varData_2726 = this.elements;
        const varData_2727 = param_1.elements;
        varData_2726[0] = varData_2727[0];
        varData_2726[1] = varData_2727[1];
        varData_2726[2] = varData_2727[2];
        varData_2726[3] = varData_2727[3];
        varData_2726[4] = varData_2727[4];
        varData_2726[5] = varData_2727[5];
        varData_2726[6] = varData_2727[6];
        varData_2726[7] = varData_2727[7];
        varData_2726[8] = varData_2727[8];
        varData_2726[9] = varData_2727[9];
        varData_2726[10] = varData_2727[10];
        varData_2726[11] = varData_2727[11];
        varData_2726[12] = varData_2727[12];
        varData_2726[13] = varData_2727[13];
        varData_2726[14] = varData_2727[14];
        varData_2726[15] = varData_2727[15];
        return this;
      }
      copyPosition(param_1) {
        const varData_2728 = this.elements;
        const varData_2729 = param_1.elements;
        varData_2728[12] = varData_2729[12];
        varData_2728[13] = varData_2729[13];
        varData_2728[14] = varData_2729[14];
        return this;
      }
      setFromMatrix3(param_1) {
        const varData_2730 = param_1.elements;
        this.set(varData_2730[0], varData_2730[3], varData_2730[6], 0, varData_2730[1], varData_2730[4], varData_2730[7], 0, varData_2730[2], varData_2730[5], varData_2730[8], 0, 0, 0, 0, 1);
        return this;
      }
      extractBasis(param_1, param_2, param_3) {
        param_1.setFromMatrixColumn(this, 0);
        param_2.setFromMatrixColumn(this, 1);
        param_3.setFromMatrixColumn(this, 2);
        return this;
      }
      makeBasis(param_1, param_2, param_3) {
        this.set(param_1.x, param_2.x, param_3.x, 0, param_1.y, param_2.y, param_3.y, 0, param_1.z, param_2.z, param_3.z, 0, 0, 0, 0, 1);
        return this;
      }
      extractRotation(param_1) {
        const varData_2731 = this.elements;
        const varData_2732 = param_1.elements;
        const varData_2733 = 1 / varData_2918.setFromMatrixColumn(param_1, 0).length();
        const varData_2734 = 1 / varData_2918.setFromMatrixColumn(param_1, 1).length();
        const varData_2735 = 1 / varData_2918.setFromMatrixColumn(param_1, 2).length();
        varData_2731[0] = varData_2732[0] * varData_2733;
        varData_2731[1] = varData_2732[1] * varData_2733;
        varData_2731[2] = varData_2732[2] * varData_2733;
        varData_2731[3] = 0;
        varData_2731[4] = varData_2732[4] * varData_2734;
        varData_2731[5] = varData_2732[5] * varData_2734;
        varData_2731[6] = varData_2732[6] * varData_2734;
        varData_2731[7] = 0;
        varData_2731[8] = varData_2732[8] * varData_2735;
        varData_2731[9] = varData_2732[9] * varData_2735;
        varData_2731[10] = varData_2732[10] * varData_2735;
        varData_2731[11] = 0;
        varData_2731[12] = 0;
        varData_2731[13] = 0;
        varData_2731[14] = 0;
        varData_2731[15] = 1;
        return this;
      }
      makeRotationFromEuler(param_1) {
        const varData_2736 = this.elements;
        const varData_2737 = param_1.x;
        const varData_2738 = param_1.y;
        const varData_2739 = param_1.z;
        const varData_2740 = Math.cos(varData_2737);
        const varData_2741 = Math.sin(varData_2737);
        const varData_2742 = Math.cos(varData_2738);
        const varData_2743 = Math.sin(varData_2738);
        const varData_2744 = Math.cos(varData_2739);
        const varData_2745 = Math.sin(varData_2739);
        if (param_1.order === "XYZ") {
          const varData_2746 = varData_2740 * varData_2744;
          const varData_2747 = varData_2740 * varData_2745;
          const varData_2748 = varData_2741 * varData_2744;
          const varData_2749 = varData_2741 * varData_2745;
          varData_2736[0] = varData_2742 * varData_2744;
          varData_2736[4] = -varData_2742 * varData_2745;
          varData_2736[8] = varData_2743;
          varData_2736[1] = varData_2747 + varData_2748 * varData_2743;
          varData_2736[5] = varData_2746 - varData_2749 * varData_2743;
          varData_2736[9] = -varData_2741 * varData_2742;
          varData_2736[2] = varData_2749 - varData_2746 * varData_2743;
          varData_2736[6] = varData_2748 + varData_2747 * varData_2743;
          varData_2736[10] = varData_2740 * varData_2742;
        } else if (param_1.order === "YXZ") {
          const varData_2750 = varData_2742 * varData_2744;
          const varData_2751 = varData_2742 * varData_2745;
          const varData_2752 = varData_2743 * varData_2744;
          const varData_2753 = varData_2743 * varData_2745;
          varData_2736[0] = varData_2750 + varData_2753 * varData_2741;
          varData_2736[4] = varData_2752 * varData_2741 - varData_2751;
          varData_2736[8] = varData_2740 * varData_2743;
          varData_2736[1] = varData_2740 * varData_2745;
          varData_2736[5] = varData_2740 * varData_2744;
          varData_2736[9] = -varData_2741;
          varData_2736[2] = varData_2751 * varData_2741 - varData_2752;
          varData_2736[6] = varData_2753 + varData_2750 * varData_2741;
          varData_2736[10] = varData_2740 * varData_2742;
        } else if (param_1.order === "ZXY") {
          const varData_2754 = varData_2742 * varData_2744;
          const varData_2755 = varData_2742 * varData_2745;
          const varData_2756 = varData_2743 * varData_2744;
          const varData_2757 = varData_2743 * varData_2745;
          varData_2736[0] = varData_2754 - varData_2757 * varData_2741;
          varData_2736[4] = -varData_2740 * varData_2745;
          varData_2736[8] = varData_2756 + varData_2755 * varData_2741;
          varData_2736[1] = varData_2755 + varData_2756 * varData_2741;
          varData_2736[5] = varData_2740 * varData_2744;
          varData_2736[9] = varData_2757 - varData_2754 * varData_2741;
          varData_2736[2] = -varData_2740 * varData_2743;
          varData_2736[6] = varData_2741;
          varData_2736[10] = varData_2740 * varData_2742;
        } else if (param_1.order === "ZYX") {
          const varData_2758 = varData_2740 * varData_2744;
          const varData_2759 = varData_2740 * varData_2745;
          const varData_2760 = varData_2741 * varData_2744;
          const varData_2761 = varData_2741 * varData_2745;
          varData_2736[0] = varData_2742 * varData_2744;
          varData_2736[4] = varData_2760 * varData_2743 - varData_2759;
          varData_2736[8] = varData_2758 * varData_2743 + varData_2761;
          varData_2736[1] = varData_2742 * varData_2745;
          varData_2736[5] = varData_2761 * varData_2743 + varData_2758;
          varData_2736[9] = varData_2759 * varData_2743 - varData_2760;
          varData_2736[2] = -varData_2743;
          varData_2736[6] = varData_2741 * varData_2742;
          varData_2736[10] = varData_2740 * varData_2742;
        } else if (param_1.order === "YZX") {
          const varData_2762 = varData_2740 * varData_2742;
          const varData_2763 = varData_2740 * varData_2743;
          const varData_2764 = varData_2741 * varData_2742;
          const varData_2765 = varData_2741 * varData_2743;
          varData_2736[0] = varData_2742 * varData_2744;
          varData_2736[4] = varData_2765 - varData_2762 * varData_2745;
          varData_2736[8] = varData_2764 * varData_2745 + varData_2763;
          varData_2736[1] = varData_2745;
          varData_2736[5] = varData_2740 * varData_2744;
          varData_2736[9] = -varData_2741 * varData_2744;
          varData_2736[2] = -varData_2743 * varData_2744;
          varData_2736[6] = varData_2763 * varData_2745 + varData_2764;
          varData_2736[10] = varData_2762 - varData_2765 * varData_2745;
        } else if (param_1.order === "XZY") {
          const varData_2766 = varData_2740 * varData_2742;
          const varData_2767 = varData_2740 * varData_2743;
          const varData_2768 = varData_2741 * varData_2742;
          const varData_2769 = varData_2741 * varData_2743;
          varData_2736[0] = varData_2742 * varData_2744;
          varData_2736[4] = -varData_2745;
          varData_2736[8] = varData_2743 * varData_2744;
          varData_2736[1] = varData_2766 * varData_2745 + varData_2769;
          varData_2736[5] = varData_2740 * varData_2744;
          varData_2736[9] = varData_2767 * varData_2745 - varData_2768;
          varData_2736[2] = varData_2768 * varData_2745 - varData_2767;
          varData_2736[6] = varData_2741 * varData_2744;
          varData_2736[10] = varData_2769 * varData_2745 + varData_2766;
        }
        varData_2736[3] = 0;
        varData_2736[7] = 0;
        varData_2736[11] = 0;
        varData_2736[12] = 0;
        varData_2736[13] = 0;
        varData_2736[14] = 0;
        varData_2736[15] = 1;
        return this;
      }
      makeRotationFromQuaternion(param_1) {
        return this.compose(varData_2920, param_1, varData_2921);
      }
      lookAt(param_1, param_2, param_3) {
        const varData_2770 = this.elements;
        varData_2924.subVectors(param_1, param_2);
        if (varData_2924.lengthSq() === 0) {
          varData_2924.z = 1;
        }
        varData_2924.normalize();
        varData_2922.crossVectors(param_3, varData_2924);
        if (varData_2922.lengthSq() === 0) {
          if (Math.abs(param_3.z) === 1) {
            varData_2924.x += 0.0001;
          } else {
            varData_2924.z += 0.0001;
          }
          varData_2924.normalize();
          varData_2922.crossVectors(param_3, varData_2924);
        }
        varData_2922.normalize();
        varData_2923.crossVectors(varData_2924, varData_2922);
        varData_2770[0] = varData_2922.x;
        varData_2770[4] = varData_2923.x;
        varData_2770[8] = varData_2924.x;
        varData_2770[1] = varData_2922.y;
        varData_2770[5] = varData_2923.y;
        varData_2770[9] = varData_2924.y;
        varData_2770[2] = varData_2922.z;
        varData_2770[6] = varData_2923.z;
        varData_2770[10] = varData_2924.z;
        return this;
      }
      multiply(param_1) {
        return this.multiplyMatrices(this, param_1);
      }
      premultiply(param_1) {
        return this.multiplyMatrices(param_1, this);
      }
      multiplyMatrices(param_1, param_2) {
        const varData_2771 = param_1.elements;
        const varData_2772 = param_2.elements;
        const varData_2773 = this.elements;
        const varData_2774 = varData_2771[0];
        const varData_2775 = varData_2771[4];
        const varData_2776 = varData_2771[8];
        const varData_2777 = varData_2771[12];
        const varData_2778 = varData_2771[1];
        const varData_2779 = varData_2771[5];
        const varData_2780 = varData_2771[9];
        const varData_2781 = varData_2771[13];
        const varData_2782 = varData_2771[2];
        const varData_2783 = varData_2771[6];
        const varData_2784 = varData_2771[10];
        const varData_2785 = varData_2771[14];
        const varData_2786 = varData_2771[3];
        const varData_2787 = varData_2771[7];
        const varData_2788 = varData_2771[11];
        const varData_2789 = varData_2771[15];
        const varData_2790 = varData_2772[0];
        const varData_2791 = varData_2772[4];
        const varData_2792 = varData_2772[8];
        const varData_2793 = varData_2772[12];
        const varData_2794 = varData_2772[1];
        const varData_2795 = varData_2772[5];
        const varData_2796 = varData_2772[9];
        const varData_2797 = varData_2772[13];
        const varData_2798 = varData_2772[2];
        const varData_2799 = varData_2772[6];
        const varData_2800 = varData_2772[10];
        const varData_2801 = varData_2772[14];
        const varData_2802 = varData_2772[3];
        const varData_2803 = varData_2772[7];
        const varData_2804 = varData_2772[11];
        const varData_2805 = varData_2772[15];
        varData_2773[0] = varData_2774 * varData_2790 + varData_2775 * varData_2794 + varData_2776 * varData_2798 + varData_2777 * varData_2802;
        varData_2773[4] = varData_2774 * varData_2791 + varData_2775 * varData_2795 + varData_2776 * varData_2799 + varData_2777 * varData_2803;
        varData_2773[8] = varData_2774 * varData_2792 + varData_2775 * varData_2796 + varData_2776 * varData_2800 + varData_2777 * varData_2804;
        varData_2773[12] = varData_2774 * varData_2793 + varData_2775 * varData_2797 + varData_2776 * varData_2801 + varData_2777 * varData_2805;
        varData_2773[1] = varData_2778 * varData_2790 + varData_2779 * varData_2794 + varData_2780 * varData_2798 + varData_2781 * varData_2802;
        varData_2773[5] = varData_2778 * varData_2791 + varData_2779 * varData_2795 + varData_2780 * varData_2799 + varData_2781 * varData_2803;
        varData_2773[9] = varData_2778 * varData_2792 + varData_2779 * varData_2796 + varData_2780 * varData_2800 + varData_2781 * varData_2804;
        varData_2773[13] = varData_2778 * varData_2793 + varData_2779 * varData_2797 + varData_2780 * varData_2801 + varData_2781 * varData_2805;
        varData_2773[2] = varData_2782 * varData_2790 + varData_2783 * varData_2794 + varData_2784 * varData_2798 + varData_2785 * varData_2802;
        varData_2773[6] = varData_2782 * varData_2791 + varData_2783 * varData_2795 + varData_2784 * varData_2799 + varData_2785 * varData_2803;
        varData_2773[10] = varData_2782 * varData_2792 + varData_2783 * varData_2796 + varData_2784 * varData_2800 + varData_2785 * varData_2804;
        varData_2773[14] = varData_2782 * varData_2793 + varData_2783 * varData_2797 + varData_2784 * varData_2801 + varData_2785 * varData_2805;
        varData_2773[3] = varData_2786 * varData_2790 + varData_2787 * varData_2794 + varData_2788 * varData_2798 + varData_2789 * varData_2802;
        varData_2773[7] = varData_2786 * varData_2791 + varData_2787 * varData_2795 + varData_2788 * varData_2799 + varData_2789 * varData_2803;
        varData_2773[11] = varData_2786 * varData_2792 + varData_2787 * varData_2796 + varData_2788 * varData_2800 + varData_2789 * varData_2804;
        varData_2773[15] = varData_2786 * varData_2793 + varData_2787 * varData_2797 + varData_2788 * varData_2801 + varData_2789 * varData_2805;
        return this;
      }
      multiplyScalar(param_1) {
        const varData_2806 = this.elements;
        varData_2806[0] *= param_1;
        varData_2806[4] *= param_1;
        varData_2806[8] *= param_1;
        varData_2806[12] *= param_1;
        varData_2806[1] *= param_1;
        varData_2806[5] *= param_1;
        varData_2806[9] *= param_1;
        varData_2806[13] *= param_1;
        varData_2806[2] *= param_1;
        varData_2806[6] *= param_1;
        varData_2806[10] *= param_1;
        varData_2806[14] *= param_1;
        varData_2806[3] *= param_1;
        varData_2806[7] *= param_1;
        varData_2806[11] *= param_1;
        varData_2806[15] *= param_1;
        return this;
      }
      determinant() {
        const varData_2807 = this.elements;
        const varData_2808 = varData_2807[0];
        const varData_2809 = varData_2807[4];
        const varData_2810 = varData_2807[8];
        const varData_2811 = varData_2807[12];
        const varData_2812 = varData_2807[1];
        const varData_2813 = varData_2807[5];
        const varData_2814 = varData_2807[9];
        const varData_2815 = varData_2807[13];
        const varData_2816 = varData_2807[2];
        const varData_2817 = varData_2807[6];
        const varData_2818 = varData_2807[10];
        const varData_2819 = varData_2807[14];
        const varData_2820 = varData_2807[3];
        const varData_2821 = varData_2807[7];
        const varData_2822 = varData_2807[11];
        const varData_2823 = varData_2807[15];
        return varData_2820 * (+varData_2811 * varData_2814 * varData_2817 - varData_2810 * varData_2815 * varData_2817 - varData_2811 * varData_2813 * varData_2818 + varData_2809 * varData_2815 * varData_2818 + varData_2810 * varData_2813 * varData_2819 - varData_2809 * varData_2814 * varData_2819) + varData_2821 * (+varData_2808 * varData_2814 * varData_2819 - varData_2808 * varData_2815 * varData_2818 + varData_2811 * varData_2812 * varData_2818 - varData_2810 * varData_2812 * varData_2819 + varData_2810 * varData_2815 * varData_2816 - varData_2811 * varData_2814 * varData_2816) + varData_2822 * (+varData_2808 * varData_2815 * varData_2817 - varData_2808 * varData_2813 * varData_2819 - varData_2811 * varData_2812 * varData_2817 + varData_2809 * varData_2812 * varData_2819 + varData_2811 * varData_2813 * varData_2816 - varData_2809 * varData_2815 * varData_2816) + varData_2823 * (-varData_2810 * varData_2813 * varData_2816 - varData_2808 * varData_2814 * varData_2817 + varData_2808 * varData_2813 * varData_2818 + varData_2810 * varData_2812 * varData_2817 - varData_2809 * varData_2812 * varData_2818 + varData_2809 * varData_2814 * varData_2816);
      }
      transpose() {
        const varData_2824 = this.elements;
        let varData_2825;
        varData_2825 = varData_2824[1];
        varData_2824[1] = varData_2824[4];
        varData_2824[4] = varData_2825;
        varData_2825 = varData_2824[2];
        varData_2824[2] = varData_2824[8];
        varData_2824[8] = varData_2825;
        varData_2825 = varData_2824[6];
        varData_2824[6] = varData_2824[9];
        varData_2824[9] = varData_2825;
        varData_2825 = varData_2824[3];
        varData_2824[3] = varData_2824[12];
        varData_2824[12] = varData_2825;
        varData_2825 = varData_2824[7];
        varData_2824[7] = varData_2824[13];
        varData_2824[13] = varData_2825;
        varData_2825 = varData_2824[11];
        varData_2824[11] = varData_2824[14];
        varData_2824[14] = varData_2825;
        return this;
      }
      setPosition(param_1, param_2, param_3) {
        const varData_2826 = this.elements;
        if (param_1.isVector3) {
          varData_2826[12] = param_1.x;
          varData_2826[13] = param_1.y;
          varData_2826[14] = param_1.z;
        } else {
          varData_2826[12] = param_1;
          varData_2826[13] = param_2;
          varData_2826[14] = param_3;
        }
        return this;
      }
      invert() {
        const varData_2827 = this.elements;
        const varData_2828 = varData_2827[0];
        const varData_2829 = varData_2827[1];
        const varData_2830 = varData_2827[2];
        const varData_2831 = varData_2827[3];
        const varData_2832 = varData_2827[4];
        const varData_2833 = varData_2827[5];
        const varData_2834 = varData_2827[6];
        const varData_2835 = varData_2827[7];
        const varData_2836 = varData_2827[8];
        const varData_2837 = varData_2827[9];
        const varData_2838 = varData_2827[10];
        const varData_2839 = varData_2827[11];
        const varData_2840 = varData_2827[12];
        const varData_2841 = varData_2827[13];
        const varData_2842 = varData_2827[14];
        const varData_2843 = varData_2827[15];
        const varData_2844 = varData_2837 * varData_2842 * varData_2835 - varData_2841 * varData_2838 * varData_2835 + varData_2841 * varData_2834 * varData_2839 - varData_2833 * varData_2842 * varData_2839 - varData_2837 * varData_2834 * varData_2843 + varData_2833 * varData_2838 * varData_2843;
        const varData_2845 = varData_2840 * varData_2838 * varData_2835 - varData_2836 * varData_2842 * varData_2835 - varData_2840 * varData_2834 * varData_2839 + varData_2832 * varData_2842 * varData_2839 + varData_2836 * varData_2834 * varData_2843 - varData_2832 * varData_2838 * varData_2843;
        const varData_2846 = varData_2836 * varData_2841 * varData_2835 - varData_2840 * varData_2837 * varData_2835 + varData_2840 * varData_2833 * varData_2839 - varData_2832 * varData_2841 * varData_2839 - varData_2836 * varData_2833 * varData_2843 + varData_2832 * varData_2837 * varData_2843;
        const varData_2847 = varData_2840 * varData_2837 * varData_2834 - varData_2836 * varData_2841 * varData_2834 - varData_2840 * varData_2833 * varData_2838 + varData_2832 * varData_2841 * varData_2838 + varData_2836 * varData_2833 * varData_2842 - varData_2832 * varData_2837 * varData_2842;
        const varData_2848 = varData_2828 * varData_2844 + varData_2829 * varData_2845 + varData_2830 * varData_2846 + varData_2831 * varData_2847;
        if (varData_2848 === 0) {
          return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
        const varData_2849 = 1 / varData_2848;
        varData_2827[0] = varData_2844 * varData_2849;
        varData_2827[1] = (varData_2841 * varData_2838 * varData_2831 - varData_2837 * varData_2842 * varData_2831 - varData_2841 * varData_2830 * varData_2839 + varData_2829 * varData_2842 * varData_2839 + varData_2837 * varData_2830 * varData_2843 - varData_2829 * varData_2838 * varData_2843) * varData_2849;
        varData_2827[2] = (varData_2833 * varData_2842 * varData_2831 - varData_2841 * varData_2834 * varData_2831 + varData_2841 * varData_2830 * varData_2835 - varData_2829 * varData_2842 * varData_2835 - varData_2833 * varData_2830 * varData_2843 + varData_2829 * varData_2834 * varData_2843) * varData_2849;
        varData_2827[3] = (varData_2837 * varData_2834 * varData_2831 - varData_2833 * varData_2838 * varData_2831 - varData_2837 * varData_2830 * varData_2835 + varData_2829 * varData_2838 * varData_2835 + varData_2833 * varData_2830 * varData_2839 - varData_2829 * varData_2834 * varData_2839) * varData_2849;
        varData_2827[4] = varData_2845 * varData_2849;
        varData_2827[5] = (varData_2836 * varData_2842 * varData_2831 - varData_2840 * varData_2838 * varData_2831 + varData_2840 * varData_2830 * varData_2839 - varData_2828 * varData_2842 * varData_2839 - varData_2836 * varData_2830 * varData_2843 + varData_2828 * varData_2838 * varData_2843) * varData_2849;
        varData_2827[6] = (varData_2840 * varData_2834 * varData_2831 - varData_2832 * varData_2842 * varData_2831 - varData_2840 * varData_2830 * varData_2835 + varData_2828 * varData_2842 * varData_2835 + varData_2832 * varData_2830 * varData_2843 - varData_2828 * varData_2834 * varData_2843) * varData_2849;
        varData_2827[7] = (varData_2832 * varData_2838 * varData_2831 - varData_2836 * varData_2834 * varData_2831 + varData_2836 * varData_2830 * varData_2835 - varData_2828 * varData_2838 * varData_2835 - varData_2832 * varData_2830 * varData_2839 + varData_2828 * varData_2834 * varData_2839) * varData_2849;
        varData_2827[8] = varData_2846 * varData_2849;
        varData_2827[9] = (varData_2840 * varData_2837 * varData_2831 - varData_2836 * varData_2841 * varData_2831 - varData_2840 * varData_2829 * varData_2839 + varData_2828 * varData_2841 * varData_2839 + varData_2836 * varData_2829 * varData_2843 - varData_2828 * varData_2837 * varData_2843) * varData_2849;
        varData_2827[10] = (varData_2832 * varData_2841 * varData_2831 - varData_2840 * varData_2833 * varData_2831 + varData_2840 * varData_2829 * varData_2835 - varData_2828 * varData_2841 * varData_2835 - varData_2832 * varData_2829 * varData_2843 + varData_2828 * varData_2833 * varData_2843) * varData_2849;
        varData_2827[11] = (varData_2836 * varData_2833 * varData_2831 - varData_2832 * varData_2837 * varData_2831 - varData_2836 * varData_2829 * varData_2835 + varData_2828 * varData_2837 * varData_2835 + varData_2832 * varData_2829 * varData_2839 - varData_2828 * varData_2833 * varData_2839) * varData_2849;
        varData_2827[12] = varData_2847 * varData_2849;
        varData_2827[13] = (varData_2836 * varData_2841 * varData_2830 - varData_2840 * varData_2837 * varData_2830 + varData_2840 * varData_2829 * varData_2838 - varData_2828 * varData_2841 * varData_2838 - varData_2836 * varData_2829 * varData_2842 + varData_2828 * varData_2837 * varData_2842) * varData_2849;
        varData_2827[14] = (varData_2840 * varData_2833 * varData_2830 - varData_2832 * varData_2841 * varData_2830 - varData_2840 * varData_2829 * varData_2834 + varData_2828 * varData_2841 * varData_2834 + varData_2832 * varData_2829 * varData_2842 - varData_2828 * varData_2833 * varData_2842) * varData_2849;
        varData_2827[15] = (varData_2832 * varData_2837 * varData_2830 - varData_2836 * varData_2833 * varData_2830 + varData_2836 * varData_2829 * varData_2834 - varData_2828 * varData_2837 * varData_2834 - varData_2832 * varData_2829 * varData_2838 + varData_2828 * varData_2833 * varData_2838) * varData_2849;
        return this;
      }
      scale(param_1) {
        const varData_2850 = this.elements;
        const varData_2851 = param_1.x;
        const varData_2852 = param_1.y;
        const varData_2853 = param_1.z;
        varData_2850[0] *= varData_2851;
        varData_2850[4] *= varData_2852;
        varData_2850[8] *= varData_2853;
        varData_2850[1] *= varData_2851;
        varData_2850[5] *= varData_2852;
        varData_2850[9] *= varData_2853;
        varData_2850[2] *= varData_2851;
        varData_2850[6] *= varData_2852;
        varData_2850[10] *= varData_2853;
        varData_2850[3] *= varData_2851;
        varData_2850[7] *= varData_2852;
        varData_2850[11] *= varData_2853;
        return this;
      }
      getMaxScaleOnAxis() {
        const varData_2854 = this.elements;
        const varData_2855 = varData_2854[0] * varData_2854[0] + varData_2854[1] * varData_2854[1] + varData_2854[2] * varData_2854[2];
        const varData_2856 = varData_2854[4] * varData_2854[4] + varData_2854[5] * varData_2854[5] + varData_2854[6] * varData_2854[6];
        const varData_2857 = varData_2854[8] * varData_2854[8] + varData_2854[9] * varData_2854[9] + varData_2854[10] * varData_2854[10];
        return Math.sqrt(Math.max(varData_2855, varData_2856, varData_2857));
      }
      makeTranslation(param_1, param_2, param_3) {
        if (param_1.isVector3) {
          this.set(1, 0, 0, param_1.x, 0, 1, 0, param_1.y, 0, 0, 1, param_1.z, 0, 0, 0, 1);
        } else {
          this.set(1, 0, 0, param_1, 0, 1, 0, param_2, 0, 0, 1, param_3, 0, 0, 0, 1);
        }
        return this;
      }
      makeRotationX(param_1) {
        const varData_2858 = Math.cos(param_1);
        const varData_2859 = Math.sin(param_1);
        this.set(1, 0, 0, 0, 0, varData_2858, -varData_2859, 0, 0, varData_2859, varData_2858, 0, 0, 0, 0, 1);
        return this;
      }
      makeRotationY(param_1) {
        const varData_2860 = Math.cos(param_1);
        const varData_2861 = Math.sin(param_1);
        this.set(varData_2860, 0, varData_2861, 0, 0, 1, 0, 0, -varData_2861, 0, varData_2860, 0, 0, 0, 0, 1);
        return this;
      }
      makeRotationZ(param_1) {
        const varData_2862 = Math.cos(param_1);
        const varData_2863 = Math.sin(param_1);
        this.set(varData_2862, -varData_2863, 0, 0, varData_2863, varData_2862, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
      }
      makeRotationAxis(param_1, param_2) {
        const varData_2864 = Math.cos(param_2);
        const varData_2865 = Math.sin(param_2);
        const varData_2866 = 1 - varData_2864;
        const varData_2867 = param_1.x;
        const varData_2868 = param_1.y;
        const varData_2869 = param_1.z;
        const varData_2870 = varData_2866 * varData_2867;
        const varData_2871 = varData_2866 * varData_2868;
        this.set(varData_2870 * varData_2867 + varData_2864, varData_2870 * varData_2868 - varData_2865 * varData_2869, varData_2870 * varData_2869 + varData_2865 * varData_2868, 0, varData_2870 * varData_2868 + varData_2865 * varData_2869, varData_2871 * varData_2868 + varData_2864, varData_2871 * varData_2869 - varData_2865 * varData_2867, 0, varData_2870 * varData_2869 - varData_2865 * varData_2868, varData_2871 * varData_2869 + varData_2865 * varData_2867, varData_2866 * varData_2869 * varData_2869 + varData_2864, 0, 0, 0, 0, 1);
        return this;
      }
      makeScale(param_1, param_2, param_3) {
        this.set(param_1, 0, 0, 0, 0, param_2, 0, 0, 0, 0, param_3, 0, 0, 0, 0, 1);
        return this;
      }
      makeShear(param_1, param_2, param_3, param_4, param_5, param_6) {
        this.set(1, param_3, param_5, 0, param_1, 1, param_6, 0, param_2, param_4, 1, 0, 0, 0, 0, 1);
        return this;
      }
      compose(param_1, param_2, param_3) {
        const varData_2872 = this.elements;
        const varData_2873 = param_2._x;
        const varData_2874 = param_2._y;
        const varData_2875 = param_2._z;
        const varData_2876 = param_2._w;
        const varData_2877 = varData_2873 + varData_2873;
        const varData_2878 = varData_2874 + varData_2874;
        const varData_2879 = varData_2875 + varData_2875;
        const varData_2880 = varData_2873 * varData_2877;
        const varData_2881 = varData_2873 * varData_2878;
        const varData_2882 = varData_2873 * varData_2879;
        const varData_2883 = varData_2874 * varData_2878;
        const varData_2884 = varData_2874 * varData_2879;
        const varData_2885 = varData_2875 * varData_2879;
        const varData_2886 = varData_2876 * varData_2877;
        const varData_2887 = varData_2876 * varData_2878;
        const varData_2888 = varData_2876 * varData_2879;
        const varData_2889 = param_3.x;
        const varData_2890 = param_3.y;
        const varData_2891 = param_3.z;
        varData_2872[0] = (1 - (varData_2883 + varData_2885)) * varData_2889;
        varData_2872[1] = (varData_2881 + varData_2888) * varData_2889;
        varData_2872[2] = (varData_2882 - varData_2887) * varData_2889;
        varData_2872[3] = 0;
        varData_2872[4] = (varData_2881 - varData_2888) * varData_2890;
        varData_2872[5] = (1 - (varData_2880 + varData_2885)) * varData_2890;
        varData_2872[6] = (varData_2884 + varData_2886) * varData_2890;
        varData_2872[7] = 0;
        varData_2872[8] = (varData_2882 + varData_2887) * varData_2891;
        varData_2872[9] = (varData_2884 - varData_2886) * varData_2891;
        varData_2872[10] = (1 - (varData_2880 + varData_2883)) * varData_2891;
        varData_2872[11] = 0;
        varData_2872[12] = param_1.x;
        varData_2872[13] = param_1.y;
        varData_2872[14] = param_1.z;
        varData_2872[15] = 1;
        return this;
      }
      decompose(param_1, param_2, param_3) {
        const varData_2892 = this.elements;
        let varData_2893 = varData_2918.set(varData_2892[0], varData_2892[1], varData_2892[2]).length();
        const varData_2894 = varData_2918.set(varData_2892[4], varData_2892[5], varData_2892[6]).length();
        const varData_2895 = varData_2918.set(varData_2892[8], varData_2892[9], varData_2892[10]).length();
        const varData_2896 = this.determinant();
        if (varData_2896 < 0) {
          varData_2893 = -varData_2893;
        }
        param_1.x = varData_2892[12];
        param_1.y = varData_2892[13];
        param_1.z = varData_2892[14];
        varData_2919.copy(this);
        const varData_2897 = 1 / varData_2893;
        const varData_2898 = 1 / varData_2894;
        const varData_2899 = 1 / varData_2895;
        varData_2919.elements[0] *= varData_2897;
        varData_2919.elements[1] *= varData_2897;
        varData_2919.elements[2] *= varData_2897;
        varData_2919.elements[4] *= varData_2898;
        varData_2919.elements[5] *= varData_2898;
        varData_2919.elements[6] *= varData_2898;
        varData_2919.elements[8] *= varData_2899;
        varData_2919.elements[9] *= varData_2899;
        varData_2919.elements[10] *= varData_2899;
        param_2.setFromRotationMatrix(varData_2919);
        param_3.x = varData_2893;
        param_3.y = varData_2894;
        param_3.z = varData_2895;
        return this;
      }
      makePerspective(param_1, param_2, param_3, param_4, param_5, param_6, _0x5a66d4 = varData_2675) {
        const varData_2900 = this.elements;
        const varData_2901 = param_5 * 2 / (param_2 - param_1);
        const varData_2902 = param_5 * 2 / (param_3 - param_4);
        const varData_2903 = (param_2 + param_1) / (param_2 - param_1);
        const varData_2904 = (param_3 + param_4) / (param_3 - param_4);
        let varData_2905;
        let varData_2906;
        if (_0x5a66d4 === varData_2675) {
          varData_2905 = -(param_6 + param_5) / (param_6 - param_5);
          varData_2906 = param_6 * -2 * param_5 / (param_6 - param_5);
        } else if (_0x5a66d4 === varData_2676) {
          varData_2905 = -param_6 / (param_6 - param_5);
          varData_2906 = -param_6 * param_5 / (param_6 - param_5);
        } else {
          throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + _0x5a66d4);
        }
        varData_2900[0] = varData_2901;
        varData_2900[4] = 0;
        varData_2900[8] = varData_2903;
        varData_2900[12] = 0;
        varData_2900[1] = 0;
        varData_2900[5] = varData_2902;
        varData_2900[9] = varData_2904;
        varData_2900[13] = 0;
        varData_2900[2] = 0;
        varData_2900[6] = 0;
        varData_2900[10] = varData_2905;
        varData_2900[14] = varData_2906;
        varData_2900[3] = 0;
        varData_2900[7] = 0;
        varData_2900[11] = -1;
        varData_2900[15] = 0;
        return this;
      }
      makeOrthographic(param_1, param_2, param_3, param_4, param_5, param_6, _0x58e30c = varData_2675) {
        const varData_2907 = this.elements;
        const varData_2908 = 1 / (param_2 - param_1);
        const varData_2909 = 1 / (param_3 - param_4);
        const varData_2910 = 1 / (param_6 - param_5);
        const varData_2911 = (param_2 + param_1) * varData_2908;
        const varData_2912 = (param_3 + param_4) * varData_2909;
        let varData_2913;
        let varData_2914;
        if (_0x58e30c === varData_2675) {
          varData_2913 = (param_6 + param_5) * varData_2910;
          varData_2914 = varData_2910 * -2;
        } else if (_0x58e30c === varData_2676) {
          varData_2913 = param_5 * varData_2910;
          varData_2914 = varData_2910 * -1;
        } else {
          throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + _0x58e30c);
        }
        varData_2907[0] = varData_2908 * 2;
        varData_2907[4] = 0;
        varData_2907[8] = 0;
        varData_2907[12] = -varData_2911;
        varData_2907[1] = 0;
        varData_2907[5] = varData_2909 * 2;
        varData_2907[9] = 0;
        varData_2907[13] = -varData_2912;
        varData_2907[2] = 0;
        varData_2907[6] = 0;
        varData_2907[10] = varData_2914;
        varData_2907[14] = -varData_2913;
        varData_2907[3] = 0;
        varData_2907[7] = 0;
        varData_2907[11] = 0;
        varData_2907[15] = 1;
        return this;
      }
      equals(param_1) {
        const varData_2915 = this.elements;
        const varData_2916 = param_1.elements;
        for (let loopIdx = 0; loopIdx < 16; loopIdx++) {
          if (varData_2915[loopIdx] !== varData_2916[loopIdx]) {
            return false;
          }
        }
        return true;
      }
      fromArray(param_1, _0x5c6a53 = 0) {
        for (let loopIdx = 0; loopIdx < 16; loopIdx++) {
          this.elements[loopIdx] = param_1[loopIdx + _0x5c6a53];
        }
        return this;
      }
      toArray(_0x5e56f9 = [], _0x1f30da = 0) {
        const varData_2917 = this.elements;
        _0x5e56f9[_0x1f30da] = varData_2917[0];
        _0x5e56f9[_0x1f30da + 1] = varData_2917[1];
        _0x5e56f9[_0x1f30da + 2] = varData_2917[2];
        _0x5e56f9[_0x1f30da + 3] = varData_2917[3];
        _0x5e56f9[_0x1f30da + 4] = varData_2917[4];
        _0x5e56f9[_0x1f30da + 5] = varData_2917[5];
        _0x5e56f9[_0x1f30da + 6] = varData_2917[6];
        _0x5e56f9[_0x1f30da + 7] = varData_2917[7];
        _0x5e56f9[_0x1f30da + 8] = varData_2917[8];
        _0x5e56f9[_0x1f30da + 9] = varData_2917[9];
        _0x5e56f9[_0x1f30da + 10] = varData_2917[10];
        _0x5e56f9[_0x1f30da + 11] = varData_2917[11];
        _0x5e56f9[_0x1f30da + 12] = varData_2917[12];
        _0x5e56f9[_0x1f30da + 13] = varData_2917[13];
        _0x5e56f9[_0x1f30da + 14] = varData_2917[14];
        _0x5e56f9[_0x1f30da + 15] = varData_2917[15];
        return _0x5e56f9;
      }
    }
    const varData_2918 = new _0x388336();
    const varData_2919 = new _0xf7127b();
    const varData_2920 = new _0x388336(0, 0, 0);
    const varData_2921 = new _0x388336(1, 1, 1);
    const varData_2922 = new _0x388336();
    const varData_2923 = new _0x388336();
    const varData_2924 = new _0x388336();
    ;
    const varData_2925 = new _0xf7127b();
    const varData_2926 = new _0x50a55a();
    class _0x31f466 {
      constructor(_0x57a83b = 0, _0x28e185 = 0, _0x425f6f = 0, _0x4519ac = _0x31f466.DEFAULT_ORDER) {
        this.isEuler = true;
        this._x = _0x57a83b;
        this._y = _0x28e185;
        this._z = _0x425f6f;
        this._order = _0x4519ac;
      }
      get x() {
        return this._x;
      }
      set x(param_1) {
        this._x = param_1;
        this._onChangeCallback();
      }
      get y() {
        return this._y;
      }
      set y(param_1) {
        this._y = param_1;
        this._onChangeCallback();
      }
      get z() {
        return this._z;
      }
      set z(param_1) {
        this._z = param_1;
        this._onChangeCallback();
      }
      get order() {
        return this._order;
      }
      set order(param_1) {
        this._order = param_1;
        this._onChangeCallback();
      }
      set(param_1, param_2, param_3, _0x2bd446 = this._order) {
        this._x = param_1;
        this._y = param_2;
        this._z = param_3;
        this._order = _0x2bd446;
        this._onChangeCallback();
        return this;
      }
      clone() {
        return new this.constructor(this._x, this._y, this._z, this._order);
      }
      copy(param_1) {
        this._x = param_1._x;
        this._y = param_1._y;
        this._z = param_1._z;
        this._order = param_1._order;
        this._onChangeCallback();
        return this;
      }
      setFromRotationMatrix(param_1, _0x16a16e = this._order, _0x5b4848 = true) {
        const varData_2927 = param_1.elements;
        const varData_2928 = varData_2927[0];
        const varData_2929 = varData_2927[4];
        const varData_2930 = varData_2927[8];
        const varData_2931 = varData_2927[1];
        const varData_2932 = varData_2927[5];
        const varData_2933 = varData_2927[9];
        const varData_2934 = varData_2927[2];
        const varData_2935 = varData_2927[6];
        const varData_2936 = varData_2927[10];
        switch (_0x16a16e) {
          case "XYZ":
            this._y = Math.asin(handleAction_123(varData_2930, -1, 1));
            if (Math.abs(varData_2930) < 0.9999999) {
              this._x = Math.atan2(-varData_2933, varData_2936);
              this._z = Math.atan2(-varData_2929, varData_2928);
            } else {
              this._x = Math.atan2(varData_2935, varData_2932);
              this._z = 0;
            }
            break;
          case "YXZ":
            this._x = Math.asin(-handleAction_123(varData_2933, -1, 1));
            if (Math.abs(varData_2933) < 0.9999999) {
              this._y = Math.atan2(varData_2930, varData_2936);
              this._z = Math.atan2(varData_2931, varData_2932);
            } else {
              this._y = Math.atan2(-varData_2934, varData_2928);
              this._z = 0;
            }
            break;
          case "ZXY":
            this._x = Math.asin(handleAction_123(varData_2935, -1, 1));
            if (Math.abs(varData_2935) < 0.9999999) {
              this._y = Math.atan2(-varData_2934, varData_2936);
              this._z = Math.atan2(-varData_2929, varData_2932);
            } else {
              this._y = 0;
              this._z = Math.atan2(varData_2931, varData_2928);
            }
            break;
          case "ZYX":
            this._y = Math.asin(-handleAction_123(varData_2934, -1, 1));
            if (Math.abs(varData_2934) < 0.9999999) {
              this._x = Math.atan2(varData_2935, varData_2936);
              this._z = Math.atan2(varData_2931, varData_2928);
            } else {
              this._x = 0;
              this._z = Math.atan2(-varData_2929, varData_2932);
            }
            break;
          case "YZX":
            this._z = Math.asin(handleAction_123(varData_2931, -1, 1));
            if (Math.abs(varData_2931) < 0.9999999) {
              this._x = Math.atan2(-varData_2933, varData_2932);
              this._y = Math.atan2(-varData_2934, varData_2928);
            } else {
              this._x = 0;
              this._y = Math.atan2(varData_2930, varData_2936);
            }
            break;
          case "XZY":
            this._z = Math.asin(-handleAction_123(varData_2929, -1, 1));
            if (Math.abs(varData_2929) < 0.9999999) {
              this._x = Math.atan2(varData_2935, varData_2932);
              this._y = Math.atan2(varData_2930, varData_2928);
            } else {
              this._x = Math.atan2(-varData_2933, varData_2936);
              this._y = 0;
            }
            break;
          default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + _0x16a16e);
        }
        this._order = _0x16a16e;
        if (_0x5b4848 === true) {
          this._onChangeCallback();
        }
        return this;
      }
      setFromQuaternion(param_1, param_2, param_3) {
        varData_2925.makeRotationFromQuaternion(param_1);
        return this.setFromRotationMatrix(varData_2925, param_2, param_3);
      }
      setFromVector3(param_1, _0x1f5ed8 = this._order) {
        return this.set(param_1.x, param_1.y, param_1.z, _0x1f5ed8);
      }
      reorder(param_1) {
        varData_2926.setFromEuler(this);
        return this.setFromQuaternion(varData_2926, param_1);
      }
      equals(param_1) {
        return param_1._x === this._x && param_1._y === this._y && param_1._z === this._z && param_1._order === this._order;
      }
      fromArray(param_1) {
        this._x = param_1[0];
        this._y = param_1[1];
        this._z = param_1[2];
        if (param_1[3] !== undefined) {
          this._order = param_1[3];
        }
        this._onChangeCallback();
        return this;
      }
      toArray(_0x1b06fa = [], _0x269c58 = 0) {
        _0x1b06fa[_0x269c58] = this._x;
        _0x1b06fa[_0x269c58 + 1] = this._y;
        _0x1b06fa[_0x269c58 + 2] = this._z;
        _0x1b06fa[_0x269c58 + 3] = this._order;
        return _0x1b06fa;
      }
      _onChange(param_1) {
        this._onChangeCallback = param_1;
        return this;
      }
      _onChangeCallback() {}
      *[Symbol.iterator]() {
        yield this._x;
        yield this._y;
        yield this._z;
        yield this._order;
      }
    }
    _0x31f466.DEFAULT_ORDER = "XYZ";
    ;
    function handleAction_170(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_171(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_172(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2937 = param_1[param_6](param_7);
        var varData_2938 = varData_2937.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2937.done) {
        param_2(varData_2938);
      } else {
        Promise.resolve(varData_2938).then(param_4, param_5);
      }
    }
    function handleAction_173(param_1) {
      return function () {
        var varData_2939 = this;
        var varData_2940 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_2941 = param_1.apply(varData_2939, varData_2940);
          function handleAction_174(param_1_2) {
            handleAction_172(varData_2941, param_1_1, param_2, handleAction_174, handleAction_175, "next", param_1_2);
          }
          function handleAction_175(param_1_2) {
            handleAction_172(varData_2941, param_1_1, param_2, handleAction_174, handleAction_175, "throw", param_1_2);
          }
          handleAction_174(undefined);
        });
      };
    }
    function handleAction_176(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_177(param_1, param_2) {
      for (var loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        var varData_2942 = param_2[loopIdx];
        varData_2942.enumerable = varData_2942.enumerable || false;
        varData_2942.configurable = true;
        if ("value" in varData_2942) {
          varData_2942.writable = true;
        }
        Object.defineProperty(param_1, varData_2942.key, varData_2942);
      }
    }
    function handleAction_178(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_177(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_177(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_179(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2943 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2943);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_180(param_1, param_2) {
      var varData_2944 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2944 == null) {
        return;
      }
      var varData_2945 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2946;
      var varData_2947;
      try {
        for (varData_2944 = varData_2944.call(param_1); !(isEnabled_2 = (varData_2946 = varData_2944.next()).done); isEnabled_2 = true) {
          varData_2945.push(varData_2946.value);
          if (param_2 && varData_2945.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2947 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2944.return != null) {
            varData_2944.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2947;
          }
        }
      }
      return varData_2945;
    }
    function handleAction_181() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_182(param_1) {
      for (var loopIdx = 1; loopIdx < arguments.length; loopIdx++) {
        var varData_2948 = arguments[loopIdx] ?? {};
        var keysList = Object.keys(varData_2948);
        if (typeof Object.getOwnPropertySymbols === "function") {
          keysList = keysList.concat(Object.getOwnPropertySymbols(varData_2948).filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(varData_2948, param_1_1).enumerable;
          }));
        }
        keysList.forEach(function (param_1_1) {
          handleAction_179(param_1, param_1_1, varData_2948[param_1_1]);
        });
      }
      return param_1;
    }
    function handleAction_183(param_1, param_2) {
      var keysList = Object.keys(param_1);
      if (Object.getOwnPropertySymbols) {
        var varData_2949 = Object.getOwnPropertySymbols(param_1);
        if (param_2) {
          varData_2949 = varData_2949.filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(param_1, param_1_1).enumerable;
          });
        }
        keysList.push.apply(keysList, varData_2949);
      }
      return keysList;
    }
    function handleAction_184(param_1, param_2) {
      param_2 = param_2 ?? {};
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(param_1, Object.getOwnPropertyDescriptors(param_2));
      } else {
        handleAction_183(Object(param_2)).forEach(function (param_1_1) {
          Object.defineProperty(param_1, param_1_1, Object.getOwnPropertyDescriptor(param_2, param_1_1));
        });
      }
      return param_1;
    }
    function handleAction_185(param_1, param_2) {
      return handleAction_171(param_1) || handleAction_180(param_1, param_2) || handleAction_186(param_1, param_2) || handleAction_181();
    }
    function handleAction_186(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_170(param_1, param_2);
      }
      var varData_2950 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2950 === "Object" && param_1.constructor) {
        varData_2950 = param_1.constructor.name;
      }
      if (varData_2950 === "Map" || varData_2950 === "Set") {
        return Array.from(varData_2950);
      }
      if (varData_2950 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2950)) {
        return handleAction_170(param_1, param_2);
      }
    }
    function handleAction_187(param_1, param_2) {
      var varData_2951;
      var varData_2952;
      var varData_2953;
      var varData_2954;
      var varData_2955 = {
        label: 0,
        sent: function () {
          if (varData_2953[0] & 1) {
            throw varData_2953[1];
          }
          return varData_2953[1];
        },
        trys: [],
        ops: []
      };
      varData_2954 = {
        next: handleAction_188(0),
        throw: handleAction_188(1),
        return: handleAction_188(2)
      };
      if (typeof Symbol === "function") {
        varData_2954[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_2954;
      function handleAction_188(param_1_1) {
        return function (param_1_2) {
          return handleAction_189([param_1_1, param_1_2]);
        };
      }
      function handleAction_189(param_1_1) {
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
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_2956;
      }
    }
    var varData_2957 = function () {
      'use strict';

      function handleAction_190() {
        handleAction_176(this, handleAction_190);
      }
      handleAction_178(handleAction_190, null, [{
        key: "spawnWeapon",
        value: function _0x3b4215(param_1) {
          var varData_2958 = this;
          return handleAction_173(function () {
            var varData_2959;
            var varData_2960;
            var varData_2961;
            var varData_2962;
            var varData_2963;
            var varData_2964;
            var varData_2965;
            var varData_2966;
            var varData_2967;
            return handleAction_187(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  varData_2958.isDragging = false;
                  varData_2958.transitionDone = false;
                  varData_2959 = varData_3218.getCurrentBench();
                  if (!varData_2959) {
                    return [2, console.log("Bench not found")];
                  }
                  varData_2960 = GetOffsetFromEntityInWorldCoords(varData_2959.entityId, 0, 0, 1.1);
                  return [4, varData_2958.refreshWeapon(param_1.name, param_1.slot, true)];
                case 1:
                  param_1_1.sent();
                  varData_2961 = varData_2958.current.items[param_1.name];
                  if (param_1.variant) {
                    varData_2961 = handleAction_182({}, varData_2961, varData_2961.variants[param_1.variant]);
                  }
                  varData_2962 = varData_2961.flags.weapon;
                  if (varData_2962) {
                    return [3, 3];
                  }
                  if (!varData_2961.model) {
                    return [2, console.log("Item has no model")];
                  }
                  return [4, varData_2051.loadModel(varData_2961.model)];
                case 2:
                  varData_2963 = param_1_1.sent();
                  if (!varData_2963) {
                    return [2, console.log("Failed to load model")];
                  }
                  return [3, 5];
                case 3:
                  return [4, varData_2051.loadWeaponAsset(varData_2958.current.weapon, 31, 0)];
                case 4:
                  varData_2964 = param_1_1.sent();
                  if (!varData_2964) {
                    return [2, console.log("Failed to load weapon asset")];
                  }
                  param_1_1.label = 5;
                case 5:
                  return [4, varData_3218.getItemList()];
                case 6:
                  varData_2965 = param_1_1.sent();
                  varData_2966 = varData_2965.find(function (param_1_2) {
                    return param_1_2.id === param_1.name && (param_1.variant ? param_1_2.variant === param_1.variant : true);
                  })?.model;
                  varData_2958.current.entity = !varData_2962 ? CreateObject(varData_2966 ?? varData_2961.model, varData_2960[0], varData_2960[1], varData_2960[2], false, true, false) : CreateWeaponObject(varData_2958.current.weapon, 0, varData_2960[0], varData_2960[1], varData_2960[2], true, 1, 0);
                  varData_2958.rotation = GetEntityQuaternion(varData_2958.current.entity);
                  SetEntityAsMissionEntity(varData_2958.current.entity, true, true);
                  FreezeEntityPosition(varData_2958.current.entity, true);
                  SetEntityCoords(varData_2958.current.entity, varData_2960[0], varData_2960[1], varData_2960[2], false, false, false, false);
                  if (!varData_2961.flags.weapon) {
                    return [3, 8];
                  }
                  return [4, varData_2958.installAccessories()];
                case 7:
                  param_1_1.sent();
                  param_1_1.label = 8;
                case 8:
                  varData_2967 = GetEntityHeading(varData_2959.entityId);
                  varData_2958.handleRotation(varData_2967);
                  return [4, varData_2386.setPositionBasedOnModel(varData_2959.entityId, varData_2958.current.entity)];
                case 9:
                  param_1_1.sent();
                  varData_2958.transitionDone = true;
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "refreshWeapon",
        value: function _0x2e5009(param_1, param_2, param_3) {
          var varData_2968 = this;
          return handleAction_173(function () {
            var varData_2969;
            var varData_2970;
            var varData_2971;
            var varData_2972;
            var varData_2973;
            var varData_2974;
            var varData_2975;
            var varData_2976;
            return handleAction_187(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  varData_2969 = varData_2968.current;
                  return [4, varData_1834.GetItemList()];
                case 1:
                  varData_2969.items = param_1_1.sent();
                  varData_2968.current.itemId = param_1;
                  varData_2970 = varData_2968.current;
                  if (param_2 === undefined) {
                    return [3, 3];
                  }
                  var varData_2977 = {
                    slot: param_2
                  };
                  return [4, varData_1834.GetItemStacks(param_1, varData_2977)];
                case 2:
                  varData_2971 = param_1_1.sent();
                  return [3, 4];
                case 3:
                  varData_2971 = [];
                  param_1_1.label = 4;
                case 4:
                  varData_2970.itemStacks = varData_2971;
                  varData_2972 = varData_1834.GetWeaponsList();
                  varData_2968.current.weapons = varData_2972;
                  varData_2968.current.slot = param_2;
                  varData_2973 = varData_2968.current;
                  return [4, varData_1834.GetItemList()];
                case 5:
                  varData_2973.items = param_1_1.sent();
                  varData_2974 = varData_2968.current.itemStacks[0];
                  if (!varData_2974) {
                    return [3, 9];
                  }
                  varData_2975 = varData_1834.GetWeaponByItemStack(varData_2974);
                  if (!varData_2975) {
                    return [2];
                  }
                  if (!varData_2975) {
                    return [3, 8];
                  }
                  if (!!param_3 || varData_2975.weapon === varData_2968.current.weapon) {
                    return [3, 7];
                  }
                  varData_2968.cleanup();
                  varData_2968.current.weapon = varData_2975.weapon;
                  var varData_2978 = {
                    name: param_1,
                    slot: param_2
                  };
                  return [4, varData_2968.spawnWeapon(varData_2978)];
                case 6:
                  param_1_1.sent();
                  return [2];
                case 7:
                  varData_2968.current.weapon = varData_2975.weapon;
                  param_1_1.label = 8;
                case 8:
                  return [3, 10];
                case 9:
                  varData_2976 = varData_1834.GetWeapon(param_1);
                  if (!varData_2976) {
                    return [2];
                  }
                  varData_2968.current.weapon = varData_2976.weapon;
                  param_1_1.label = 10;
                case 10:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "cleanup",
        value: function _0x37680f() {
          if (DoesEntityExist(this.current.entity)) {
            DeleteEntity(this.current.entity);
            this.current.entity = 0;
          }
          this.isDragging = false;
        }
      }, {
        key: "drag",
        value: function _0x410376(param_1) {
          var varData_2979 = this;
          return handleAction_173(function () {
            return handleAction_187(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  if (!DoesEntityExist(varData_2979.current.entity)) {
                    return [2];
                  }
                  varData_2979.isDragging = param_1;
                  setTimeout(function () {
                    SetNuiFocusKeepInput(param_1);
                  }, 10);
                  param_1_1.label = 1;
                case 1:
                  if (!varData_2979.isDragging) {
                    return [3, 4];
                  }
                  return [4, varData_2979.handleRotation()];
                case 2:
                  param_1_1.sent();
                  return [4, varData_1663.wait(0)];
                case 3:
                  param_1_1.sent();
                  return [3, 1];
                case 4:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "handleRotation",
        value: function _0x445e19(param_1) {
          var varData_2980 = this;
          return handleAction_173(function () {
            var varData_2981;
            var varData_2982;
            var varData_2983;
            var varData_2984;
            var varData_2985;
            var varData_2986;
            var varData_2987;
            var varData_2988;
            var varData_2989;
            var varData_2990;
            var varData_2991;
            var varData_2992;
            var varData_2993;
            return handleAction_187(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  DisableAllControlActions(0);
                  EnableControlAction(0, varData_1484.N, true);
                  varData_2981 = GetDisabledControlNormal(0, 1) * 35;
                  varData_2982 = GetDisabledControlNormal(0, 2) * 35;
                  varData_2980.rotation[0] += varData_2982;
                  varData_2980.rotation[1] += varData_2981;
                  if (param_1) {
                    varData_2980.rotation[1] = param_1;
                  }
                  varData_2983 = new _0x50a55a();
                  varData_2983.setFromEuler(new _0x31f466(varData_2178.degToRad(varData_2980.rotation[0]), varData_2178.degToRad(varData_2980.fixRotation(varData_2980.rotation[0], varData_2980.rotation[2])), varData_2178.degToRad(varData_2980.rotation[1]), "YZX"));
                  SetEntityQuaternion(varData_2980.current.entity, varData_2983.x, varData_2983.y, varData_2983.z, varData_2983.w);
                  if (varData_2980.transitionDone) {
                    return [3, 2];
                  }
                  return [4, varData_1663.waitForCondition(function () {
                    return varData_2980.transitionDone;
                  }, 10000)];
                case 1:
                  param_1_1.sent();
                  param_1_1.label = 2;
                case 2:
                  varData_2984 = varData_2980.current.weapons;
                  varData_2985 = varData_2984[varData_2980.current.itemId];
                  if (!varData_2980.current.itemStacks || !varData_2985) {
                    return [3, 4];
                  }
                  if (!varData_2985) {
                    return [2];
                  }
                  varData_2986 = varData_2980.current.itemStacks.find(function (param_1_2) {
                    return param_1_2.slot === varData_2980.current.slot;
                  });
                  varData_2987 = [];
                  varData_2988 = true;
                  varData_2989 = false;
                  varData_2990 = undefined;
                  try {
                    varData_2991 = function () {
                      var varData_2994 = handleAction_185(varData_2993.value, 2);
                      var varData_2995 = varData_2994[0];
                      var varData_2996 = varData_2994[1];
                      var varData_2997 = varData_2985.attachments[varData_2995];
                      var varData_2998 = GetEntityBoneIndexByName(varData_2980.current.entity, varData_2997.bone);
                      var varData_2999 = GetWorldPositionOfEntityBone(varData_2980.current.entity, varData_2998);
                      var varData_3000 = handleAction_185(GetHudScreenPositionFromWorldPosition(varData_2999[0], varData_2999[1], varData_2999[2]), 3);
                      var varData_3001 = varData_3000[0];
                      var varData_3002 = varData_3000[1];
                      var varData_3003 = varData_3000[2];
                      var varData_3004 = !varData_2997.requirements || varData_2997.requirements.every(function (param_1_2) {
                        var varData_3005;
                        var varData_3006;
                        var varData_3007;
                        if ((varData_3007 = varData_2986) === null || varData_3007 === undefined) {
                          return undefined;
                        } else if ((varData_3006 = varData_3007.publicMetadata) === null || varData_3006 === undefined) {
                          return undefined;
                        } else if ((varData_3005 = varData_3006.attachments) === null || varData_3005 === undefined) {
                          return undefined;
                        } else {
                          return varData_3005.includes(param_1_2);
                        }
                      });
                      if (varData_3004) {
                        var varData_3008;
                        var varData_3009;
                        var varData_3010;
                        varData_2987.push({
                          bone: varData_2997.bone,
                          x: varData_3002 * 100,
                          y: varData_3003 * 100,
                          label: varData_2997.label,
                          attachmentId: varData_2995,
                          installed: (varData_3010 = varData_2986) === null || varData_3010 === undefined ? undefined : (varData_3009 = varData_3010.publicMetadata) === null || varData_3009 === undefined ? undefined : (varData_3008 = varData_3009.attachments) === null || varData_3008 === undefined ? undefined : varData_3008.find(function (param_1_2) {
                            return param_1_2 === varData_2995;
                          }),
                          image: varData_2980.current.items.weapon_attachment.variants[varData_2995]?.image ?? varData_2980.current.items.weapon_attachment.image
                        });
                      }
                    };
                    for (varData_2992 = Object.entries(varData_2985.attachments)[Symbol.iterator](); !(varData_2988 = (varData_2993 = varData_2992.next()).done); varData_2988 = true) {
                      varData_2991();
                    }
                  } catch (err) {
                    varData_2989 = true;
                    varData_2990 = err;
                  } finally {
                    try {
                      if (!varData_2988 && varData_2992.return != null) {
                        varData_2992.return();
                      }
                    } finally {
                      if (varData_2989) {
                        throw varData_2990;
                      }
                    }
                  }
                  return [4, varData_1827.execute("crafting:attachmentOffset", varData_2987)];
                case 3:
                  param_1_1.sent();
                  param_1_1.label = 4;
                case 4:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "fixRotation",
        value: function _0x4f45cd(param_1, param_2) {
          if (param_1 > 0 && param_1 < 90) {
            return param_2;
          } else if (param_1 > -180 && param_1 < -90 || param_1 > 0) {
            return -param_2;
          } else {
            return param_2;
          }
        }
      }, {
        key: "installAccessories",
        value: function _0x1cb714() {
          var varData_3011 = this;
          return handleAction_173(function () {
            var varData_3012;
            var varData_3013;
            var varData_3014;
            var varData_3015;
            var varData_3016;
            var varData_3017;
            var varData_3018;
            var varData_3019;
            var varData_3020;
            var varData_3021;
            var varData_3022;
            var varData_3023;
            var varData_3024;
            return handleAction_187(this, function (param_1) {
              switch (param_1.label) {
                case 0:
                  varData_3012 = varData_3011.current.itemStacks.find(function (param_1_1) {
                    return param_1_1.slot === varData_3011.current.slot;
                  });
                  if (!varData_3012) {
                    return [2];
                  }
                  varData_3013 = varData_3012.publicMetadata?.attachments ?? [];
                  varData_3014 = varData_3011.current.weapons;
                  varData_3015 = varData_3014[varData_3011.current.itemId];
                  if (!varData_3015) {
                    return [2];
                  }
                  varData_3016 = true;
                  varData_3017 = false;
                  varData_3018 = undefined;
                  param_1.label = 1;
                case 1:
                  param_1.trys.push([1, 6, 7, 8]);
                  varData_3019 = varData_3013[Symbol.iterator]();
                  param_1.label = 2;
                case 2:
                  if (varData_3016 = (varData_3020 = varData_3019.next()).done) {
                    return [3, 5];
                  }
                  varData_3021 = varData_3020.value;
                  varData_3022 = varData_3015.attachments[varData_3021];
                  if (!varData_3022?.component) {
                    return [3, 4];
                  }
                  varData_3023 = GetWeaponComponentTypeModel(varData_3022.component);
                  return [4, varData_2051.loadModel(varData_3023)];
                case 3:
                  param_1.sent();
                  GiveWeaponComponentToWeaponObject(varData_3011.current.entity, varData_3022.component);
                  param_1.label = 4;
                case 4:
                  varData_3016 = true;
                  return [3, 2];
                case 5:
                  return [3, 8];
                case 6:
                  varData_3024 = param_1.sent();
                  varData_3017 = true;
                  varData_3018 = varData_3024;
                  return [3, 8];
                case 7:
                  try {
                    if (!varData_3016 && varData_3019.return != null) {
                      varData_3019.return();
                    }
                  } finally {
                    if (varData_3017) {
                      throw varData_3018;
                    }
                  }
                  return [7];
                case 8:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "equipAccessory",
        value: function _0x423c39(param_1) {
          var varData_3025 = this;
          return handleAction_173(function () {
            var varData_3026;
            var varData_3027;
            var varData_3028;
            var varData_3029;
            return handleAction_187(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                  if (varData_3025.waitingRPC) {
                    emit("DoLongHudText", "Wait for the previous action to finish", 2);
                    return [2];
                  }
                  param_1_1.label = 1;
                case 1:
                  param_1_1.trys.push([1,, 7, 8]);
                  varData_3025.waitingRPC = true;
                  var varData_3030 = {
                    itemId: varData_3025.current.itemId
                  };
                  return [4, varData_1766.execute("crafting:equipAccessory", handleAction_184(handleAction_182({}, param_1), varData_3030))];
                case 2:
                  varData_3026 = param_1_1.sent();
                  if (!varData_3026) {
                    return [2];
                  }
                  varData_3027 = varData_1834.GetWeapon(varData_3025.current.itemId);
                  if (!varData_3027) {
                    return [2];
                  }
                  varData_3028 = varData_3027.attachments[param_1.attachmentId];
                  if (!varData_3028?.component) {
                    return [3, 4];
                  }
                  varData_3029 = GetWeaponComponentTypeModel(varData_3028.component);
                  return [4, varData_2051.loadModel(varData_3029)];
                case 3:
                  param_1_1.sent();
                  GiveWeaponComponentToWeaponObject(varData_3025.current.entity, varData_3028.component);
                  param_1_1.label = 4;
                case 4:
                  return [4, varData_3025.refreshWeapon(varData_3025.current.itemId, varData_3025.current.slot)];
                case 5:
                  param_1_1.sent();
                  return [4, varData_3025.handleRotation()];
                case 6:
                  param_1_1.sent();
                  return [3, 8];
                case 7:
                  varData_3025.waitingRPC = false;
                  return [7];
                case 8:
                  PlaySoundFrontend(-1, "HACKING_CLICK", "", true);
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "unequipAccessory",
        value: function _0x373be6(param_1) {
          var varData_3031 = this;
          return handleAction_173(function () {
            var varData_3032;
            var varData_3033;
            var varData_3034;
            var varData_3035;
            return handleAction_187(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                  if (varData_3031.waitingRPC) {
                    emit("DoLongHudText", "Wait for the previous action to finish", 2);
                    return [2];
                  }
                  param_1_1.label = 1;
                case 1:
                  param_1_1.trys.push([1,, 7, 8]);
                  varData_3031.waitingRPC = true;
                  var varData_3036 = {
                    itemId: varData_3031.current.itemId
                  };
                  return [4, varData_1766.execute("crafting:unequipAccessory", handleAction_184(handleAction_182({}, param_1), varData_3036))];
                case 2:
                  varData_3032 = param_1_1.sent();
                  if (!varData_3032) {
                    return [2];
                  }
                  varData_3033 = varData_1834.GetWeapon(varData_3031.current.itemId);
                  if (!varData_3033) {
                    return [2];
                  }
                  varData_3034 = varData_3033.attachments[param_1.attachmentId];
                  if (!varData_3034?.component) {
                    return [3, 4];
                  }
                  varData_3035 = GetWeaponComponentTypeModel(varData_3034.component);
                  return [4, varData_2051.loadModel(varData_3035)];
                case 3:
                  param_1_1.sent();
                  RemoveWeaponComponentFromWeaponObject(varData_3031.current.entity, varData_3034.component);
                  param_1_1.label = 4;
                case 4:
                  return [4, varData_3031.refreshWeapon(varData_3031.current.itemId, varData_3031.current.slot)];
                case 5:
                  param_1_1.sent();
                  return [4, varData_3031.handleRotation()];
                case 6:
                  param_1_1.sent();
                  return [3, 8];
                case 7:
                  varData_3031.waitingRPC = false;
                  return [7];
                case 8:
                  PlaySoundFrontend(-1, "HACKING_CLICK", "", true);
                  return [2];
              }
            });
          })();
        }
      }]);
      return handleAction_190;
    }();
    handleAction_179(varData_2957, "current", {
      entity: 0,
      weapon: "",
      itemId: "",
      itemStacks: [],
      weapons: {},
      items: {},
      slot: 0
    });
    handleAction_179(varData_2957, "rotation", []);
    handleAction_179(varData_2957, "isDragging", false);
    handleAction_179(varData_2957, "transitionDone", false);
    handleAction_179(varData_2957, "waitingRPC", false);
    ;
    function handleAction_191(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_3037 = param_1[param_6](param_7);
        var varData_3038 = varData_3037.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_3037.done) {
        param_2(varData_3038);
      } else {
        Promise.resolve(varData_3038).then(param_4, param_5);
      }
    }
    function handleAction_192(param_1) {
      return function () {
        var varData_3039 = this;
        var varData_3040 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_3041 = param_1.apply(varData_3039, varData_3040);
          function handleAction_193(param_1_2) {
            handleAction_191(varData_3041, param_1_1, param_2, handleAction_193, handleAction_194, "next", param_1_2);
          }
          function handleAction_194(param_1_2) {
            handleAction_191(varData_3041, param_1_1, param_2, handleAction_193, handleAction_194, "throw", param_1_2);
          }
          handleAction_193(undefined);
        });
      };
    }
    function handleAction_195(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_196(param_1, param_2) {
      for (var loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        var varData_3042 = param_2[loopIdx];
        varData_3042.enumerable = varData_3042.enumerable || false;
        varData_3042.configurable = true;
        if ("value" in varData_3042) {
          varData_3042.writable = true;
        }
        Object.defineProperty(param_1, varData_3042.key, varData_3042);
      }
    }
    function handleAction_197(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_196(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_196(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_198(param_1, param_2) {
      var varData_3043;
      var varData_3044;
      var varData_3045;
      var varData_3046;
      var varData_3047 = {
        label: 0,
        sent: function () {
          if (varData_3045[0] & 1) {
            throw varData_3045[1];
          }
          return varData_3045[1];
        },
        trys: [],
        ops: []
      };
      varData_3046 = {
        next: handleAction_199(0),
        throw: handleAction_199(1),
        return: handleAction_199(2)
      };
      if (typeof Symbol === "function") {
        varData_3046[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_3046;
      function handleAction_199(param_1_1) {
        return function (param_1_2) {
          return handleAction_200([param_1_1, param_1_2]);
        };
      }
      function handleAction_200(param_1_1) {
        if (varData_3043) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_3047) {
          try {
            varData_3043 = 1;
            if (varData_3044 && (varData_3045 = param_1_1[0] & 2 ? varData_3044.return : param_1_1[0] ? varData_3044.throw || ((varData_3045 = varData_3044.return) && varData_3045.call(varData_3044), 0) : varData_3044.next) && !(varData_3045 = varData_3045.call(varData_3044, param_1_1[1])).done) {
              return varData_3045;
            }
            varData_3044 = 0;
            if (varData_3045) {
              param_1_1 = [param_1_1[0] & 2, varData_3045.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_3045 = param_1_1;
                break;
              case 4:
                varData_3047.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_3047.label++;
                varData_3044 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_3047.ops.pop();
                varData_3047.trys.pop();
                continue;
              default:
                if (!(varData_3045 = varData_3047.trys, varData_3045 = varData_3045.length > 0 && varData_3045[varData_3045.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_3047 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_3045 || param_1_1[1] > varData_3045[0] && param_1_1[1] < varData_3045[3])) {
                  varData_3047.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_3047.label < varData_3045[1]) {
                  varData_3047.label = varData_3045[1];
                  varData_3045 = param_1_1;
                  break;
                }
                if (varData_3045 && varData_3047.label < varData_3045[2]) {
                  varData_3047.label = varData_3045[2];
                  varData_3047.ops.push(param_1_1);
                  break;
                }
                if (varData_3045[2]) {
                  varData_3047.ops.pop();
                }
                varData_3047.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_3047);
          } catch (err) {
            param_1_1 = [6, err];
            varData_3044 = 0;
          } finally {
            varData_3043 = varData_3045 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_3048 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_3048;
      }
    }
    var varData_3049 = new varData_1835.Thread(function () {
      SetEntityLocallyInvisible(this.data.ped);
    }, 0, "tick");
    varData_3049.addHook("preStart", function () {
      this.data.ped = PlayerPedId();
    });
    var varData_3050 = function () {
      'use strict';
      "use strict";

      function handleAction_201() {
        handleAction_195(this, handleAction_201);
      }
      var varData_3051 = {
        key: "Init",
        value: function _0x4e63ab() {}
      };
      handleAction_197(handleAction_201, null, [varData_3051, {
        key: "open",
        value: function _0x225f70(param_1) {
          return handleAction_192(function () {
            var varData_3052;
            return handleAction_198(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  if (!param_1) {
                    return [2, console.log("Bench not found")];
                  }
                  return [4, varData_1766.execute("crafting:open", param_1.name)];
                case 1:
                  varData_3052 = param_1_1.sent();
                  varData_1827.execute("crafting:show", true);
                  SetNuiFocus(true, true);
                  varData_2386.enter(param_1.entityId);
                  varData_3218.updateQueue(varData_3052);
                  varData_3049.start();
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "close",
        value: function _0x15a1b9() {
          return handleAction_192(function () {
            var varData_3053;
            return handleAction_198(this, function (param_1) {
              switch (param_1.label) {
                case 0:
                  varData_3053 = varData_3218.getCurrentBench();
                  if (!varData_3053) {
                    return [2, console.log("Bench not found")];
                  }
                  varData_1827.execute("crafting:show", false);
                  return [4, varData_1766.execute("crafting:close", varData_3053.name)];
                case 1:
                  param_1.sent();
                  SetNuiFocus(false, false);
                  varData_2957.cleanup();
                  varData_2386.exit();
                  varData_3049.stop();
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "getWeapons",
        value: function _0x3b1acb() {
          return handleAction_192(function () {
            return handleAction_198(this, function (param_1) {
              return [2, varData_1834.GetWeaponsList()];
            });
          })();
        }
      }]);
      return handleAction_201;
    }();
    ;
    function handleAction_202(param_1) {
      var resourceConfig = varData_1680.GetResourceConfig();
      if (!resourceConfig) {
        return false;
      }
      return GetEntityModel(param_1) === GetHashKey(resourceConfig.basicBench);
    }
    function handleAction_203(param_1, param_2) {
      var resourceConfig = varData_1680.GetResourceConfig();
      if (!resourceConfig) {
        return false;
      }
      return resourceConfig.basicBlueprints.includes(param_2 ?? "") || resourceConfig.basicBlueprints.includes(param_1);
    }
    ;
    var varData_3054 = {
      name: "pd_bench",
      model: "np_prop_bench_01",
      coords: [464.08, -1002.94, 29.69, 180]
    };
    var varData_3055 = {
      name: "ron_bench",
      model: "gr_prop_gr_bench_03b",
      coords: [1750.73, -1610.63, 111.62, 100]
    };
    var varData_3056 = [varData_3054, {
      name: "sheriff_bench",
      model: "np_prop_bench_01",
      coords: [1845.2, 3699.9, 33.25, 30]
    }, varData_3055];
    ;
    var varData_3057 = 8;
    var varData_3058 = null && ["weapons_pistols", "weapons_smgs", "weapons_rifles", "weapons_shotguns", "weapons_ammos", "weapons_magazines", "weapons_clowns"];
    var varData_3059 = {
      weapons_pistols: [{
        itemId: "np_deagle",
        variant: null
      }, {
        itemId: "np_glock",
        variant: null
      }, {
        itemId: "np_revolver_mk2",
        variant: null
      }, {
        itemId: "np_pistol_mk2",
        variant: null
      }, {
        itemId: "np_combatpistol",
        variant: null
      }, {
        itemId: "np_vintagepistol",
        variant: null
      }, {
        itemId: "np_doubleaction",
        variant: null
      }],
      weapons_smgs: [{
        itemId: "np_mac10",
        variant: null
      }, {
        itemId: "np_mac10_compact",
        variant: null
      }, {
        itemId: "np_microsmg",
        variant: null
      }, {
        itemId: "np_smg",
        variant: null
      }, {
        itemId: "np_smg_mk2",
        variant: null
      }, {
        itemId: "np_assaultsmg",
        variant: null
      }, {
        itemId: "np_combatpdw",
        variant: null
      }, {
        itemId: "np_machinepistol",
        variant: null
      }, {
        itemId: "np_minismg",
        variant: null
      }],
      weapons_rifles: [{
        itemId: "np_ak_12",
        variant: null
      }, {
        itemId: "np_assaultrifle",
        variant: null
      }, {
        itemId: "np_assaultrifle_mk2",
        variant: null
      }, {
        itemId: "np_advancedrifle",
        variant: null
      }, {
        itemId: "np_specialcarbine",
        variant: null
      }, {
        itemId: "np_specialcarbine_mk2",
        variant: null
      }, {
        itemId: "np_bullpuprifle",
        variant: null
      }, {
        itemId: "np_bullpuprifle_mk2",
        variant: null
      }, {
        itemId: "np_compactrifle",
        variant: null
      }, {
        itemId: "np_militaryrifle",
        variant: null
      }, {
        itemId: "np_heavyrifle",
        variant: null
      }, {
        itemId: "np_tacticalrifle",
        variant: null
      }],
      weapons_shotguns: [{
        itemId: "pumpshotgun",
        variant: null
      }, {
        itemId: "pumpshotgun_mk2",
        variant: null
      }, {
        itemId: "sawnoffshotgun",
        variant: null
      }, {
        itemId: "assaultshotgun",
        variant: null
      }, {
        itemId: "bullpupshotgun",
        variant: null
      }, {
        itemId: "heavyshotgun",
        variant: null
      }, {
        itemId: "dbshotgun",
        variant: null
      }, {
        itemId: "autoshotgun",
        variant: null
      }, {
        itemId: "combatshotgun",
        variant: null
      }],
      weapons_ammos: [{
        itemId: "ammo",
        variant: "50cal"
      }, {
        itemId: "ammo",
        variant: "556"
      }, {
        itemId: "ammo",
        variant: "762"
      }, {
        itemId: "ammo",
        variant: "9mm"
      }, {
        itemId: "ammo",
        variant: "9x21"
      }, {
        itemId: "ammo",
        variant: "45"
      }, {
        itemId: "ammo",
        variant: "45s"
      }, {
        itemId: "ammo",
        variant: "45pd"
      }, {
        itemId: "ammo",
        variant: "308"
      }, {
        itemId: "ammo",
        variant: "357"
      }, {
        itemId: "ammo",
        variant: "flechette"
      }, {
        itemId: "ammo",
        variant: "slugs"
      }, {
        itemId: "ammo",
        variant: "g50cal"
      }],
      weapons_magazines: [{
        itemId: "weapon_magazine",
        variant: "np_deagle_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_deagle_magazine_extended"
      }, {
        itemId: "weapon_magazine",
        variant: "np_glock_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_glock_magazine_extended"
      }, {
        itemId: "weapon_magazine",
        variant: "np_heavypistol_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_heavypistol_magazine_extended"
      }, {
        itemId: "weapon_magazine",
        variant: "np_mac10_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_microsmg_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_smg_20rnd_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_smg_mk2_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_machinepistol_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_minismg_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_556_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_dx_15_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_762_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_308_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_shotgun_6_slider"
      }, {
        itemId: "weapon_magazine",
        variant: "np_shotgun_10_slider"
      }, {
        itemId: "weapon_magazine",
        variant: "np_shotgun_2_slider"
      }, {
        itemId: "weapon_magazine",
        variant: "np_pistol_mk2_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_combatpistol_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_vintagepistol_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_doubleaction_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_smg_25rnd_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_16_762_magazine"
      }, {
        itemId: "weapon_magazine",
        variant: "np_glock_ap_magazine"
      }],
      weapons_clowns: [{
        itemId: "np_bat",
        variant: null
      }, {
        itemId: "np_bottle",
        variant: null
      }, {
        itemId: "np_golfclub",
        variant: null
      }, {
        itemId: "gadget_parachute",
        variant: null
      }, {
        itemId: "np_ms1911",
        variant: null
      }, {
        itemId: "np_molotov",
        variant: null
      }, {
        itemId: "np_smokegrenade",
        variant: null
      }, {
        itemId: "ammo",
        variant: "45s"
      }],
      ron_oil_parts: [{
        itemId: "gas_pump_hose",
        variant: null
      }, {
        itemId: "gas_pump_filter",
        variant: null
      }, {
        itemId: "gas_pump_knozzle",
        variant: null
      }, {
        itemId: "oilpumpclutch",
        variant: null
      }, {
        itemId: "oilpumpbelt",
        variant: null
      }, {
        itemId: "oilpumprod",
        variant: null
      }, {
        itemId: "oilpump",
        variant: null
      }]
    };
    ;
    function handleAction_204(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_205(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_206(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_204(param_1);
      }
    }
    function handleAction_207(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_3060 = param_1[param_6](param_7);
        var varData_3061 = varData_3060.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_3060.done) {
        param_2(varData_3061);
      } else {
        Promise.resolve(varData_3061).then(param_4, param_5);
      }
    }
    function handleAction_208(param_1) {
      return function () {
        var varData_3062 = this;
        var varData_3063 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_3064 = param_1.apply(varData_3062, varData_3063);
          function handleAction_209(param_1_2) {
            handleAction_207(varData_3064, param_1_1, param_2, handleAction_209, handleAction_210, "next", param_1_2);
          }
          function handleAction_210(param_1_2) {
            handleAction_207(varData_3064, param_1_1, param_2, handleAction_209, handleAction_210, "throw", param_1_2);
          }
          handleAction_209(undefined);
        });
      };
    }
    function handleAction_211(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_212(param_1, param_2) {
      for (var loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        var varData_3065 = param_2[loopIdx];
        varData_3065.enumerable = varData_3065.enumerable || false;
        varData_3065.configurable = true;
        if ("value" in varData_3065) {
          varData_3065.writable = true;
        }
        Object.defineProperty(param_1, varData_3065.key, varData_3065);
      }
    }
    function handleAction_213(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_212(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_212(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_214(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_3066 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_3066);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_215(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_216(param_1, param_2) {
      var varData_3067 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_3067 == null) {
        return;
      }
      var varData_3068 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_3069;
      var varData_3070;
      try {
        for (varData_3067 = varData_3067.call(param_1); !(isEnabled_2 = (varData_3069 = varData_3067.next()).done); isEnabled_2 = true) {
          varData_3068.push(varData_3069.value);
          if (param_2 && varData_3068.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_3070 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_3067.return != null) {
            varData_3067.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_3070;
          }
        }
      }
      return varData_3068;
    }
    function handleAction_217() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_218() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_219(param_1) {
      for (var loopIdx = 1; loopIdx < arguments.length; loopIdx++) {
        var varData_3071 = arguments[loopIdx] ?? {};
        var keysList = Object.keys(varData_3071);
        if (typeof Object.getOwnPropertySymbols === "function") {
          keysList = keysList.concat(Object.getOwnPropertySymbols(varData_3071).filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(varData_3071, param_1_1).enumerable;
          }));
        }
        keysList.forEach(function (param_1_1) {
          handleAction_214(param_1, param_1_1, varData_3071[param_1_1]);
        });
      }
      return param_1;
    }
    function handleAction_220(param_1, param_2) {
      var keysList = Object.keys(param_1);
      if (Object.getOwnPropertySymbols) {
        var varData_3072 = Object.getOwnPropertySymbols(param_1);
        if (param_2) {
          varData_3072 = varData_3072.filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(param_1, param_1_1).enumerable;
          });
        }
        keysList.push.apply(keysList, varData_3072);
      }
      return keysList;
    }
    function handleAction_221(param_1, param_2) {
      param_2 = param_2 ?? {};
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(param_1, Object.getOwnPropertyDescriptors(param_2));
      } else {
        handleAction_220(Object(param_2)).forEach(function (param_1_1) {
          Object.defineProperty(param_1, param_1_1, Object.getOwnPropertyDescriptor(param_2, param_1_1));
        });
      }
      return param_1;
    }
    function handleAction_222(param_1, param_2) {
      return handleAction_205(param_1) || handleAction_216(param_1, param_2) || handleAction_224(param_1, param_2) || handleAction_217();
    }
    function handleAction_223(param_1) {
      return handleAction_206(param_1) || handleAction_215(param_1) || handleAction_224(param_1) || handleAction_218();
    }
    function handleAction_224(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_204(param_1, param_2);
      }
      var varData_3073 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_3073 === "Object" && param_1.constructor) {
        varData_3073 = param_1.constructor.name;
      }
      if (varData_3073 === "Map" || varData_3073 === "Set") {
        return Array.from(varData_3073);
      }
      if (varData_3073 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_3073)) {
        return handleAction_204(param_1, param_2);
      }
    }
    function handleAction_225(param_1, param_2) {
      var varData_3074;
      var varData_3075;
      var varData_3076;
      var varData_3077;
      var varData_3078 = {
        label: 0,
        sent: function () {
          if (varData_3076[0] & 1) {
            throw varData_3076[1];
          }
          return varData_3076[1];
        },
        trys: [],
        ops: []
      };
      varData_3077 = {
        next: handleAction_226(0),
        throw: handleAction_226(1),
        return: handleAction_226(2)
      };
      if (typeof Symbol === "function") {
        varData_3077[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_3077;
      function handleAction_226(param_1_1) {
        return function (param_1_2) {
          return handleAction_227([param_1_1, param_1_2]);
        };
      }
      function handleAction_227(param_1_1) {
        if (varData_3074) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_3078) {
          try {
            varData_3074 = 1;
            if (varData_3075 && (varData_3076 = param_1_1[0] & 2 ? varData_3075.return : param_1_1[0] ? varData_3075.throw || ((varData_3076 = varData_3075.return) && varData_3076.call(varData_3075), 0) : varData_3075.next) && !(varData_3076 = varData_3076.call(varData_3075, param_1_1[1])).done) {
              return varData_3076;
            }
            varData_3075 = 0;
            if (varData_3076) {
              param_1_1 = [param_1_1[0] & 2, varData_3076.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_3076 = param_1_1;
                break;
              case 4:
                varData_3078.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_3078.label++;
                varData_3075 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_3078.ops.pop();
                varData_3078.trys.pop();
                continue;
              default:
                if (!(varData_3076 = varData_3078.trys, varData_3076 = varData_3076.length > 0 && varData_3076[varData_3076.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_3078 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_3076 || param_1_1[1] > varData_3076[0] && param_1_1[1] < varData_3076[3])) {
                  varData_3078.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_3078.label < varData_3076[1]) {
                  varData_3078.label = varData_3076[1];
                  varData_3076 = param_1_1;
                  break;
                }
                if (varData_3076 && varData_3078.label < varData_3076[2]) {
                  varData_3078.label = varData_3076[2];
                  varData_3078.ops.push(param_1_1);
                  break;
                }
                if (varData_3076[2]) {
                  varData_3078.ops.pop();
                }
                varData_3078.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_3078);
          } catch (err) {
            param_1_1 = [6, err];
            varData_3075 = 0;
          } finally {
            varData_3074 = varData_3076 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_3079 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_3079;
      }
    }
    var varData_3080 = function () {
      'use strict';
      "use strict";

      function handleAction_228(param_1, param_2) {
        handleAction_211(this, handleAction_228);
        handleAction_214(this, "name", undefined);
        handleAction_214(this, "entityId", undefined);
        this.name = param_1;
        this.entityId = param_2;
      }
      handleAction_213(handleAction_228, [{
        key: "GetBenchItems",
        value: function _0x46de9d(param_1) {
          var varData_3081 = this;
          return handleAction_208(function () {
            return handleAction_225(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                  switch (param_1) {
                    case "personal":
                      return [3, 1];
                    case "crafting":
                      return [3, 3];
                  }
                  return [3, 5];
                case 1:
                  return [4, varData_3081.GetPersonalItems()];
                case 2:
                  return [2, param_1_1.sent()];
                case 3:
                  return [4, varData_3081.GetCraftableItems()];
                case 4:
                  return [2, param_1_1.sent()];
                case 5:
                  return [2, []];
                case 6:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "GetPersonalItems",
        value: function _0x553878() {
          return handleAction_208(function () {
            var varData_3082;
            var varData_3083;
            return handleAction_225(this, function (param_1) {
              switch (param_1.label) {
                case 0:
                  return [4, varData_1834.GetPlayerInventories()];
                case 1:
                  varData_3082 = param_1.sent();
                  varData_3083 = varData_3082.reduce(function (param_1_1, param_2) {
                    var varData_3084 = param_2.itemStacks.map(function (param_1_2) {
                      return handleAction_219({}, param_1_2);
                    });
                    return param_1_1.concat(varData_3084);
                  }, []);
                  return [2, varData_3083];
              }
            });
          })();
        }
      }, {
        key: "GetCraftableItems",
        value: function _0x31235c() {
          var varData_3085 = this;
          return handleAction_208(function () {
            var varData_3086;
            var varData_3087;
            var varData_3088;
            var varData_3089;
            var varData_3090;
            var varData_3091;
            var varData_3092;
            var varData_3093;
            var varData_3094;
            var varData_3095;
            var varData_3096;
            var varData_3097;
            var varData_3098;
            var varData_3099;
            var varData_3100;
            return handleAction_225(this, function (param_1) {
              switch (param_1.label) {
                case 0:
                  return [4, varData_1834.GetItemList()];
                case 1:
                  varData_3086 = param_1.sent();
                  return [4, varData_1766.execute("crafting:getInventory", "blueprint", varData_3085.name)];
                case 2:
                  varData_3087 = handleAction_222.apply(undefined, [param_1.sent(), 2]);
                  varData_3088 = varData_3087[0];
                  varData_3089 = varData_3087[1];
                  if (!varData_3088) {
                    return [2, []];
                  }
                  return [4, varData_1766.execute("crafting:getMaterialStacks", varData_3085.name)];
                case 3:
                  varData_3090 = param_1.sent();
                  if (!varData_3090) {
                    return [2, []];
                  }
                  varData_3091 = [];
                  return [4, varData_3085.getItemsList()];
                case 4:
                  varData_3092 = param_1.sent();
                  varData_3093 = handleAction_202(varData_3085.entityId);
                  varData_3094 = varData_3089.itemStacks.filter(function (param_1_1) {
                    return param_1_1.variant && !!varData_3086.blueprint.variants[param_1_1.variant];
                  });
                  varData_3095 = true;
                  varData_3096 = false;
                  varData_3097 = undefined;
                  try {
                    varData_3098 = function () {
                      var varData_3101 = handleAction_222(varData_3100.value, 2);
                      var varData_3102 = varData_3101[0];
                      var varData_3103 = varData_3101[1];
                      var varData_3104 = varData_3094.find(function (param_1_1) {
                        var varData_3105 = param_1_1.variant ? varData_3059[param_1_1.variant] : null;
                        if (varData_3105) {
                          return !!varData_3105.find(function (param_1_2) {
                            return param_1_2.itemId === varData_3103.id && param_1_2.variant === varData_3103.variant;
                          });
                        }
                        if (varData_3103.variant) {
                          return param_1_1.variant === varData_3103.variant;
                        } else {
                          return param_1_1.variant === varData_3103.id;
                        }
                      });
                      if (!varData_3104) {
                        varData_3091.push(varData_3102);
                        return "continue";
                      }
                      var varData_3106 = varData_3086[varData_3103.id];
                      if (varData_3103.variant) {
                        varData_3106 = handleAction_219({}, varData_3106, varData_3103.variant ? varData_3106.variants[varData_3103.variant] : {});
                      }
                      if (varData_3103.needs) {
                        var isEnabled_2 = true;
                        var isDisabled_1 = false;
                        var varData_3107 = undefined;
                        try {
                          function handleAction_229() {
                            var varData_3108 = handleAction_222(loopIdx_1.value, 2);
                            var varData_3109 = varData_3108[0];
                            var varData_3110 = varData_3108[1];
                            var varData_3111 = varData_3090.filter(function (param_1_1) {
                              return param_1_1.itemId === varData_3110.id && param_1_1.variant === varData_3110.variant;
                            });
                            var varData_3112 = varData_3086[varData_3110.id];
                            varData_3103.needs[varData_3109] = handleAction_221(handleAction_219({}, varData_3110), {
                              item: handleAction_219({}, varData_3112, varData_3110.variant ? varData_3112.variants[varData_3110.variant] : {}),
                              quantity: varData_3111.reduce(function (param_1_1, param_2) {
                                return param_1_1 + param_2.quantity;
                              }, 0)
                            });
                          }
                          for (var loopIdx = Object.entries(varData_3103.needs)[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
                            handleAction_229();
                          }
                        } catch (err) {
                          isDisabled_1 = true;
                          varData_3107 = err;
                        } finally {
                          try {
                            if (!isEnabled_2 && loopIdx.return != null) {
                              loopIdx.return();
                            }
                          } finally {
                            if (isDisabled_1) {
                              throw varData_3107;
                            }
                          }
                        }
                      }
                      varData_3092[varData_3102] = handleAction_221(handleAction_219({}, varData_3103), {
                        time: varData_3093 ? (varData_3103.time ?? 0) * 3 : varData_3103.time,
                        item: handleAction_219({}, varData_3106)
                      });
                    };
                    for (varData_3099 = Object.entries(varData_3092)[Symbol.iterator](); !(varData_3095 = (varData_3100 = varData_3099.next()).done); varData_3095 = true) {
                      varData_3098();
                    }
                  } catch (err) {
                    varData_3096 = true;
                    varData_3097 = err;
                  } finally {
                    try {
                      if (!varData_3095 && varData_3099.return != null) {
                        varData_3099.return();
                      }
                    } finally {
                      if (varData_3096) {
                        throw varData_3097;
                      }
                    }
                  }
                  return [2, varData_3092.filter(function (param_1_1, param_2) {
                    return !varData_3091.includes(param_2.toString());
                  })];
              }
            });
          })();
        }
      }, {
        key: "getItemsList",
        value: function _0x3106e5() {
          return handleAction_208(function () {
            var varData_3113;
            var varData_3114;
            var varData_3115;
            var varData_3116;
            return handleAction_225(this, function (param_1) {
              switch (param_1.label) {
                case 0:
                  return [4, varData_1834.GetItemList()];
                case 1:
                  varData_3113 = param_1.sent();
                  return [4, varData_1766.execute("crafting:getItemList")];
                case 2:
                  varData_3114 = param_1.sent();
                  varData_3115 = handleAction_223(varData_3114);
                  varData_3116 = varData_3115.map(function (param_1_1) {
                    var varData_3117;
                    var varData_3118 = varData_3113[param_1_1.id];
                    if (param_1_1.variant) {
                      varData_3118 = handleAction_219({}, varData_3118, param_1_1.variant ? varData_3118.variants[param_1_1.variant] : {});
                    }
                    var varData_3119 = (varData_3117 = param_1_1.needs) === null || varData_3117 === undefined ? undefined : varData_3117.map(function (param_1_2) {
                      var varData_3120 = varData_3113[param_1_2.id];
                      return handleAction_221(handleAction_219({}, param_1_2), {
                        item: handleAction_219({}, varData_3120, param_1_2.variant ? varData_3120.variants[param_1_2.variant] : {}),
                        variant: param_1_2.variant ?? null,
                        amount: param_1_2.amount
                      });
                    });
                    return handleAction_221(handleAction_219({}, param_1_1), {
                      item: handleAction_219({}, varData_3118),
                      variant: param_1_1.variant ?? null,
                      needs: varData_3119
                    });
                  });
                  return [2, varData_3116];
              }
            });
          })();
        }
      }]);
      return handleAction_228;
    }();
    ;
    function handleAction_230(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var loopIdx = 0, loopIdx_1 = new Array(param_2); loopIdx < param_2; loopIdx++) {
        loopIdx_1[loopIdx] = param_1[loopIdx];
      }
      return loopIdx_1;
    }
    function handleAction_231(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_230(param_1);
      }
    }
    function handleAction_232(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_3121 = param_1[param_6](param_7);
        var varData_3122 = varData_3121.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_3121.done) {
        param_2(varData_3122);
      } else {
        Promise.resolve(varData_3122).then(param_4, param_5);
      }
    }
    function handleAction_233(param_1) {
      return function () {
        var varData_3123 = this;
        var varData_3124 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_3125 = param_1.apply(varData_3123, varData_3124);
          function handleAction_234(param_1_2) {
            handleAction_232(varData_3125, param_1_1, param_2, handleAction_234, handleAction_235, "next", param_1_2);
          }
          function handleAction_235(param_1_2) {
            handleAction_232(varData_3125, param_1_1, param_2, handleAction_234, handleAction_235, "throw", param_1_2);
          }
          handleAction_234(undefined);
        });
      };
    }
    function handleAction_236(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_237(param_1, param_2) {
      for (var loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        var varData_3126 = param_2[loopIdx];
        varData_3126.enumerable = varData_3126.enumerable || false;
        varData_3126.configurable = true;
        if ("value" in varData_3126) {
          varData_3126.writable = true;
        }
        Object.defineProperty(param_1, varData_3126.key, varData_3126);
      }
    }
    function handleAction_238(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_237(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_237(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_239(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_3127 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_3127);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_240(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_241() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_242(param_1) {
      for (var loopIdx = 1; loopIdx < arguments.length; loopIdx++) {
        var varData_3128 = arguments[loopIdx] ?? {};
        var keysList = Object.keys(varData_3128);
        if (typeof Object.getOwnPropertySymbols === "function") {
          keysList = keysList.concat(Object.getOwnPropertySymbols(varData_3128).filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(varData_3128, param_1_1).enumerable;
          }));
        }
        keysList.forEach(function (param_1_1) {
          handleAction_239(param_1, param_1_1, varData_3128[param_1_1]);
        });
      }
      return param_1;
    }
    function handleAction_243(param_1, param_2) {
      var keysList = Object.keys(param_1);
      if (Object.getOwnPropertySymbols) {
        var varData_3129 = Object.getOwnPropertySymbols(param_1);
        if (param_2) {
          varData_3129 = varData_3129.filter(function (param_1_1) {
            return Object.getOwnPropertyDescriptor(param_1, param_1_1).enumerable;
          });
        }
        keysList.push.apply(keysList, varData_3129);
      }
      return keysList;
    }
    function handleAction_244(param_1, param_2) {
      param_2 = param_2 ?? {};
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(param_1, Object.getOwnPropertyDescriptors(param_2));
      } else {
        handleAction_243(Object(param_2)).forEach(function (param_1_1) {
          Object.defineProperty(param_1, param_1_1, Object.getOwnPropertyDescriptor(param_2, param_1_1));
        });
      }
      return param_1;
    }
    function handleAction_245(param_1) {
      return handleAction_231(param_1) || handleAction_240(param_1) || handleAction_247(param_1) || handleAction_241();
    }
    function handleAction_246(param_1) {
      '@swc/helpers - typeof';

      if (param_1 && typeof Symbol !== "undefined" && param_1.constructor === Symbol) {
        return "symbol";
      } else {
        return typeof param_1;
      }
    }
    function handleAction_247(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_230(param_1, param_2);
      }
      var varData_3130 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_3130 === "Object" && param_1.constructor) {
        varData_3130 = param_1.constructor.name;
      }
      if (varData_3130 === "Map" || varData_3130 === "Set") {
        return Array.from(varData_3130);
      }
      if (varData_3130 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_3130)) {
        return handleAction_230(param_1, param_2);
      }
    }
    function handleAction_248(param_1, param_2) {
      var varData_3131;
      var varData_3132;
      var varData_3133;
      var varData_3134;
      var varData_3135 = {
        label: 0,
        sent: function () {
          if (varData_3133[0] & 1) {
            throw varData_3133[1];
          }
          return varData_3133[1];
        },
        trys: [],
        ops: []
      };
      varData_3134 = {
        next: handleAction_249(0),
        throw: handleAction_249(1),
        return: handleAction_249(2)
      };
      if (typeof Symbol === "function") {
        varData_3134[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_3134;
      function handleAction_249(param_1_1) {
        return function (param_1_2) {
          return handleAction_250([param_1_1, param_1_2]);
        };
      }
      function handleAction_250(param_1_1) {
        if (varData_3131) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_3135) {
          try {
            varData_3131 = 1;
            if (varData_3132 && (varData_3133 = param_1_1[0] & 2 ? varData_3132.return : param_1_1[0] ? varData_3132.throw || ((varData_3133 = varData_3132.return) && varData_3133.call(varData_3132), 0) : varData_3132.next) && !(varData_3133 = varData_3133.call(varData_3132, param_1_1[1])).done) {
              return varData_3133;
            }
            varData_3132 = 0;
            if (varData_3133) {
              param_1_1 = [param_1_1[0] & 2, varData_3133.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_3133 = param_1_1;
                break;
              case 4:
                varData_3135.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_3135.label++;
                varData_3132 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_3135.ops.pop();
                varData_3135.trys.pop();
                continue;
              default:
                if (!(varData_3133 = varData_3135.trys, varData_3133 = varData_3133.length > 0 && varData_3133[varData_3133.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_3135 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_3133 || param_1_1[1] > varData_3133[0] && param_1_1[1] < varData_3133[3])) {
                  varData_3135.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_3135.label < varData_3133[1]) {
                  varData_3135.label = varData_3133[1];
                  varData_3133 = param_1_1;
                  break;
                }
                if (varData_3133 && varData_3135.label < varData_3133[2]) {
                  varData_3135.label = varData_3133[2];
                  varData_3135.ops.push(param_1_1);
                  break;
                }
                if (varData_3133[2]) {
                  varData_3135.ops.pop();
                }
                varData_3135.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_3135);
          } catch (err) {
            param_1_1 = [6, err];
            varData_3132 = 0;
          } finally {
            varData_3131 = varData_3133 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_3136 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_3136;
      }
    }
    function handleAction_251(param_1) {
      var varData_3137 = typeof Symbol === "function" && Symbol.iterator;
      var varData_3138 = varData_3137 && param_1[varData_3137];
      var varData_3139 = 0;
      if (varData_3138) {
        return varData_3138.call(param_1);
      }
      if (param_1 && typeof param_1.length === "number") {
        return {
          next: function () {
            if (param_1 && varData_3139 >= param_1.length) {
              param_1 = undefined;
            }
            var varData_3140 = {
              value: param_1 && param_1[varData_3139++],
              done: !param_1
            };
            return varData_3140;
          }
        };
      }
      throw new TypeError(varData_3137 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    var varData_3141 = function () {
      'use strict';
      "use strict";

      function handleAction_252() {
        handleAction_236(this, handleAction_252);
        handleAction_239(this, "queue", undefined);
        handleAction_239(this, "currentBench", undefined);
        handleAction_239(this, "spawnedBenches", undefined);
        this.queue = [];
        this.currentBench = "";
        this.spawnedBenches = new Map();
      }
      handleAction_238(handleAction_252, [{
        key: "benches",
        get: function _0x50ac1d() {
          return handleAction_245(this.spawnedBenches.values());
        }
      }, {
        key: "addBench",
        value: function _0x3a7be9(param_1, param_2) {
          var varData_3142 = new varData_3080(param_1, param_2);
          this.spawnedBenches.set(varData_3142.name, varData_3142);
        }
      }, {
        key: "removeBench",
        value: function _0x4710b0(param_1) {
          this.spawnedBenches.delete(param_1);
        }
      }, {
        key: "open",
        value: function _0x5f3ec2(param_1) {
          var varData_3143 = this;
          return handleAction_233(function () {
            var varData_3144;
            var varData_3145;
            var varData_3146;
            var varData_3147;
            return handleAction_248(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  if (!param_1) {
                    return [2];
                  }
                  varData_3144 = varData_1676.Sync.editor.GetObjectFromEntity(param_1);
                  if (!varData_3144) {
                    return [3, 2];
                  }
                  return [4, varData_1766.execute("np-editor:HasInteractionBeenOpenSafely", varData_3144)];
                case 1:
                  varData_3145 = param_1_1.sent();
                  if (!varData_3145) {
                    return [2];
                  }
                  param_1_1.label = 2;
                case 2:
                  varData_3146 = varData_3143.getBenchData(param_1);
                  if (!varData_3146) {
                    return [2, console.log("Bench not found")];
                  }
                  if (varData_3146.name !== "ron_bench") {
                    return [3, 4];
                  }
                  return [4, varData_1676.Async.business.IsEmployeeAt("ron_oil")];
                case 3:
                  varData_3147 = param_1_1.sent();
                  if (!varData_3147) {
                    return [2, varData_2117.displayNotification("Unauthorized access!", "error")];
                  }
                  param_1_1.label = 4;
                case 4:
                  varData_3146.entityId = param_1;
                  varData_3143.spawnedBenches.set(varData_3146.name, new varData_3080(varData_3146.name, varData_3146.entityId));
                  varData_3143.currentBench = varData_3146.name;
                  varData_3050.open(varData_3146);
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "openInvs",
        value: function _0x4bcf81(param_1) {
          var varData_3148 = this;
          return handleAction_233(function () {
            var varData_3149;
            var varData_3150;
            var varData_3151;
            var varData_3152;
            return handleAction_248(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  if (!param_1) {
                    return [2];
                  }
                  varData_3149 = varData_1676.Sync.editor.GetObjectFromEntity(param_1);
                  if (!varData_3149) {
                    return [3, 2];
                  }
                  return [4, varData_1766.execute("np-editor:HasInteractionBeenOpenSafely", varData_3149)];
                case 1:
                  varData_3150 = param_1_1.sent();
                  if (!varData_3150) {
                    return [2];
                  }
                  param_1_1.label = 2;
                case 2:
                  varData_3151 = varData_3148.getBenchData(param_1);
                  if (!varData_3151) {
                    return [2, console.log("Bench not found")];
                  }
                  if (varData_3151.name !== "ron_bench") {
                    return [3, 4];
                  }
                  return [4, varData_1676.Async.business.IsEmployeeAt("ron_oil")];
                case 3:
                  varData_3152 = param_1_1.sent();
                  if (!varData_3152) {
                    return [2, varData_2117.displayNotification("Unauthorized access!", "error")];
                  }
                  param_1_1.label = 4;
                case 4:
                  varData_3148.currentBench = varData_3151.name;
                  varData_1834.OpenInventory([`bench::${varData_3151.name}-bench`, `blueprint::${varData_3151.name}-bench`, `materials::${varData_3151.name}-bench`, `wood-materials::${varData_3151.name}-bench`], false);
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "cleanup",
        value: function _0x101591() {
          var isEnabled_2 = true;
          var isDisabled_1 = false;
          var varData_3153 = undefined;
          try {
            for (var loopIdx = this.spawnedBenches.values()[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
              var varData_3154 = loopIdx_1.value;
              if (DoesEntityExist(varData_3154.entityId)) {
                DeleteEntity(varData_3154.entityId);
              }
            }
          } catch (err) {
            isDisabled_1 = true;
            varData_3153 = err;
          } finally {
            try {
              if (!isEnabled_2 && loopIdx.return != null) {
                loopIdx.return();
              }
            } finally {
              if (isDisabled_1) {
                throw varData_3153;
              }
            }
          }
        }
      }, {
        key: "getCurrentBench",
        value: function _0x4f1728() {
          return this.spawnedBenches.get(this.currentBench);
        }
      }, {
        key: "craftItem",
        value: function _0x53b58f(param_1) {
          var varData_3155 = this;
          return handleAction_233(function () {
            var varData_3156;
            var varData_3157;
            var varData_3158;
            var varData_3159;
            var varData_3160;
            var varData_3161;
            var varData_3162;
            var varData_3163;
            var varData_3164;
            var varData_3165;
            var varData_3166;
            var varData_3167;
            var varData_3168;
            return handleAction_248(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  varData_3156 = varData_3155.getCurrentBench();
                  if (!varData_3156) {
                    return [2, console.log("Bench not found")];
                  }
                  PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
                  return [4, varData_3156.GetBenchItems("crafting")];
                case 1:
                  varData_3157 = param_1_1.sent();
                  varData_3158 = varData_3157[param_1];
                  if (!varData_3158) {
                    return [2, console.log("Item not found")];
                  }
                  varData_3159 = handleAction_202(varData_3156.entityId);
                  varData_3160 = handleAction_203(varData_3158.id, varData_3158.variant);
                  if (varData_3159 && !varData_3160) {
                    return [2, emit("DoLongHudText", "This item is too advanced for a basic bench", 2)];
                  }
                  if (!varData_3158.needs) {
                    return [3, 9];
                  }
                  varData_3161 = true;
                  varData_3162 = false;
                  varData_3163 = undefined;
                  param_1_1.label = 2;
                case 2:
                  param_1_1.trys.push([2, 7, 8, 9]);
                  varData_3164 = function () {
                    var varData_3169;
                    var varData_3170;
                    var varData_3171;
                    var varData_3172;
                    return handleAction_248(this, function (param_1_2) {
                      switch (param_1_2.label) {
                        case 0:
                          varData_3169 = varData_3166.value;
                          return [4, varData_1766.execute("crafting:getMaterialStacks", varData_3156.name)];
                        case 1:
                          varData_3170 = param_1_2.sent();
                          if (!varData_3170) {
                            return [2, {
                              v: []
                            }];
                          }
                          varData_3171 = varData_3170.reduce(function (param_1_3, param_2) {
                            if (param_2.itemId === varData_3169.id && varData_3169.variant ? param_2.variant === varData_3169.variant : true) {
                              param_1_3.push(param_2);
                            }
                            return param_1_3;
                          }, []);
                          varData_3172 = varData_3171.reduce(function (param_1_3, param_2) {
                            return param_1_3 + param_2.quantity;
                          }, 0);
                          if (varData_3172 < varData_3169.amount) {
                            emit("DoLongHudText", "You don't have the required items", 2);
                            return [2, {
                              v: false
                            }];
                          }
                          return [2];
                      }
                    });
                  };
                  varData_3165 = varData_3158.needs[Symbol.iterator]();
                  param_1_1.label = 3;
                case 3:
                  if (varData_3161 = (varData_3166 = varData_3165.next()).done) {
                    return [3, 6];
                  }
                  return [5, handleAction_251(varData_3164())];
                case 4:
                  varData_3167 = param_1_1.sent();
                  if (handleAction_246(varData_3167) === "object") {
                    return [2, varData_3167.v];
                  }
                  param_1_1.label = 5;
                case 5:
                  varData_3161 = true;
                  return [3, 3];
                case 6:
                  return [3, 9];
                case 7:
                  varData_3168 = param_1_1.sent();
                  varData_3162 = true;
                  varData_3163 = varData_3168;
                  return [3, 9];
                case 8:
                  try {
                    if (!varData_3161 && varData_3165.return != null) {
                      varData_3165.return();
                    }
                  } finally {
                    if (varData_3162) {
                      throw varData_3163;
                    }
                  }
                  return [7];
                case 9:
                  varData_3155.addToQueue(varData_3158);
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "removeItem",
        value: function _0x4447a2(param_1) {
          var varData_3173 = this.getCurrentBench();
          if (!varData_3173) {
            return console.log("Bench not found");
          }
          PlaySoundFrontend(-1, "SELECT", "HUD_FRONTEND_DEFAULT_SOUNDSET", true);
          varData_1726.emitNet("crafting:removeFromQueue", varData_3173.name, param_1);
        }
      }, {
        key: "addToQueue",
        value: function _0x54631c(param_1) {
          var varData_3174 = this.getCurrentBench();
          if (!varData_3174) {
            return console.log("Bench not found");
          }
          varData_1726.emitNet("crafting:addToQueue", param_1.id, param_1.variant, varData_3174.name);
        }
      }, {
        key: "buildQueue",
        value: function _0x329cca(param_1) {
          var varData_3175 = this;
          return handleAction_233(function () {
            var varData_3176;
            var varData_3177;
            return handleAction_248(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  varData_3176 = varData_3175.getCurrentBench();
                  if (!varData_3176) {
                    return [2, []];
                  }
                  return [4, varData_3176.getItemsList()];
                case 1:
                  varData_3177 = param_1_1.sent();
                  return [2, param_1.map(function (param_1_2) {
                    var varData_3178 = varData_3177.find(function (param_1_3) {
                      return param_1_3.id === param_1_2.itemId && param_1_3.variant === param_1_2.variant;
                    });
                    if (!varData_3178) {
                      return console.log("Item not found");
                    }
                    return handleAction_244(handleAction_242({}, param_1_2, varData_3178), {
                      databaseID: param_1_2.id,
                      expiresAt: param_1_2.expiresAt,
                      createdAt: param_1_2.createdAt
                    });
                  })];
              }
            });
          })();
        }
      }, {
        key: "updateQueue",
        value: function _0x131051(param_1) {
          var varData_3179 = this;
          return handleAction_233(function () {
            var varData_3180;
            return handleAction_248(this, function (param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  varData_3179.queue = param_1;
                  return [4, varData_3179.buildQueue(param_1)];
                case 1:
                  varData_3180 = param_1_1.sent();
                  varData_1827.execute("crafting:updateQueue", varData_3180);
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "getBenchData",
        value: function _0x14133e(param_1) {
          return Array.from(this.spawnedBenches.values()).find(function (param_1_1) {
            return param_1_1.entityId === param_1;
          }) || varData_3056.find(function (param_1_1) {
            return GetHashKey(param_1_1.model) === GetEntityModel(param_1) && new varData_1501(GetEntityCoords(param_1)).getDistance(param_1_1.coords) < 1.5;
          });
        }
      }, {
        key: "getItemList",
        value: function _0x398210() {
          return handleAction_233(function () {
            return handleAction_248(this, function (param_1) {
              switch (param_1.label) {
                case 0:
                  return [4, varData_1766.execute("crafting:getItemList")];
                case 1:
                  return [2, param_1.sent()];
              }
            });
          })();
        }
      }]);
      return handleAction_252;
    }();
    ;
    function handleAction_253(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_3181 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_3181);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_254() {
      varData_2117.addInteractionByModel("crafting_bench_actions", ["np_prop_bench_01", "prop_tool_bench02_ld", "gr_prop_gr_bench_03b"], [{
        eventSDK: "crafting:openMenu",
        id: "crafting:openMenu",
        label: "Crafting",
        parameters: {}
      }, {
        eventSDK: "crafting:openInvs",
        id: "crafting:openInvs",
        label: "Inventories",
        parameters: {}
      }], {
        distance: {
          draw: 5,
          use: 3
        },
        offset: function (param_1) {
          var model = GetEntityModel(param_1);
          var varData_3182 = handleAction_253({}, GetHashKey("gr_prop_gr_bench_03b"), [0, 0, 1]);
          return varData_3182[model] ?? [0, 0, 1];
        },
        isEnabled: function (param_1) {
          if (!param_1) {
            return false;
          }
          var varData_3183 = varData_3218.benches.find(function (param_1_1) {
            return param_1_1.entityId === param_1;
          });
          var model = GetEntityModel(param_1);
          var varData_3184 = new varData_1501(GetEntityCoords(param_1));
          var varData_3185 = varData_3056.find(function (param_1_1) {
            return GetHashKey(param_1_1.model) === model && varData_3184.getDistance(param_1_1.coords) < 2.5;
          });
          return (!!varData_3183 || !!varData_3185) && !IsNuiFocused();
        }
      });
    }
    ;
    function handleAction_255() {
      varData_1676.Sync("AddBench", function (param_1, param_2) {
        return varData_3218.addBench(param_1, param_2);
      });
      varData_1676.Sync("RemoveBench", function (param_1) {
        return varData_3218.removeBench(param_1);
      });
    }
    ;
    function handleAction_256(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_3186 = param_1[param_6](param_7);
        var varData_3187 = varData_3186.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_3186.done) {
        param_2(varData_3187);
      } else {
        Promise.resolve(varData_3187).then(param_4, param_5);
      }
    }
    function handleAction_257(param_1) {
      return function () {
        var varData_3188 = this;
        var varData_3189 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_3190 = param_1.apply(varData_3188, varData_3189);
          function handleAction_258(param_1_2) {
            handleAction_256(varData_3190, param_1_1, param_2, handleAction_258, handleAction_259, "next", param_1_2);
          }
          function handleAction_259(param_1_2) {
            handleAction_256(varData_3190, param_1_1, param_2, handleAction_258, handleAction_259, "throw", param_1_2);
          }
          handleAction_258(undefined);
        });
      };
    }
    function handleAction_260(param_1, param_2) {
      var varData_3191;
      var varData_3192;
      var varData_3193;
      var varData_3194;
      var varData_3195 = {
        label: 0,
        sent: function () {
          if (varData_3193[0] & 1) {
            throw varData_3193[1];
          }
          return varData_3193[1];
        },
        trys: [],
        ops: []
      };
      varData_3194 = {
        next: handleAction_261(0),
        throw: handleAction_261(1),
        return: handleAction_261(2)
      };
      if (typeof Symbol === "function") {
        varData_3194[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_3194;
      function handleAction_261(param_1_1) {
        return function (param_1_2) {
          return handleAction_262([param_1_1, param_1_2]);
        };
      }
      function handleAction_262(param_1_1) {
        if (varData_3191) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_3195) {
          try {
            varData_3191 = 1;
            if (varData_3192 && (varData_3193 = param_1_1[0] & 2 ? varData_3192.return : param_1_1[0] ? varData_3192.throw || ((varData_3193 = varData_3192.return) && varData_3193.call(varData_3192), 0) : varData_3192.next) && !(varData_3193 = varData_3193.call(varData_3192, param_1_1[1])).done) {
              return varData_3193;
            }
            varData_3192 = 0;
            if (varData_3193) {
              param_1_1 = [param_1_1[0] & 2, varData_3193.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_3193 = param_1_1;
                break;
              case 4:
                varData_3195.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_3195.label++;
                varData_3192 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_3195.ops.pop();
                varData_3195.trys.pop();
                continue;
              default:
                if (!(varData_3193 = varData_3195.trys, varData_3193 = varData_3193.length > 0 && varData_3193[varData_3193.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_3195 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_3193 || param_1_1[1] > varData_3193[0] && param_1_1[1] < varData_3193[3])) {
                  varData_3195.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_3195.label < varData_3193[1]) {
                  varData_3195.label = varData_3193[1];
                  varData_3193 = param_1_1;
                  break;
                }
                if (varData_3193 && varData_3195.label < varData_3193[2]) {
                  varData_3195.label = varData_3193[2];
                  varData_3195.ops.push(param_1_1);
                  break;
                }
                if (varData_3193[2]) {
                  varData_3195.ops.pop();
                }
                varData_3195.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_3195);
          } catch (err) {
            param_1_1 = [6, err];
            varData_3192 = 0;
          } finally {
            varData_3191 = varData_3193 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_3196 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_3196;
      }
    }
    function handleAction_263() {
      return;
    }
    varData_1726.on("crafting:openMenu", function (param_1, param_2) {
      return varData_3218.open(param_2);
    });
    varData_1726.on("crafting:openInvs", function (param_1, param_2) {
      return varData_3218.openInvs(param_2);
    });
    varData_1726.onNet("crafting:updateQueue", function (param_1) {
      return varData_3218.updateQueue(param_1);
    });
    varData_1827.register("crafting:drag", function () {
      var varData_3197 = handleAction_257(function (param_1) {
        return handleAction_260(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2957.drag(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function (param_1) {
        return varData_3197.apply(this, arguments);
      };
    }());
    varData_1827.register("crafting:spawnWeapon", function () {
      var varData_3198 = handleAction_257(function (param_1) {
        return handleAction_260(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2957.spawnWeapon(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function (param_1) {
        return varData_3198.apply(this, arguments);
      };
    }());
    varData_1827.register("crafting:cleanupWeapon", handleAction_257(function () {
      return handleAction_260(this, function (param_1) {
        return [2, varData_2957.cleanup()];
      });
    }));
    varData_1827.register("crafting:getItemsList", function () {
      var varData_3199 = handleAction_257(function (param_1) {
        var varData_3200;
        var varData_3201;
        var varData_3202;
        return handleAction_260(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_3201 = varData_3218.getCurrentBench();
              return [4, (varData_3200 = varData_3201) === null || varData_3200 === undefined ? undefined : varData_3200.GetBenchItems(param_1)];
            case 1:
              varData_3202 = param_1_1.sent() ?? [];
              return [2, varData_3202];
          }
        });
      });
      return function (param_1) {
        return varData_3199.apply(this, arguments);
      };
    }());
    varData_1827.register("crafting:craftItem", function () {
      var varData_3203 = handleAction_257(function (param_1) {
        return handleAction_260(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_3218.craftItem(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function (param_1) {
        return varData_3203.apply(this, arguments);
      };
    }());
    varData_1827.register("crafting:removeItem", function () {
      var varData_3204 = handleAction_257(function (param_1) {
        return handleAction_260(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_3218.removeItem(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function (param_1) {
        return varData_3204.apply(this, arguments);
      };
    }());
    varData_1827.register("crafting:equipAccessory", function () {
      var varData_3205 = handleAction_257(function (param_1) {
        return handleAction_260(this, function (param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2957.equipAccessory(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function (param_1) {
        return varData_3205.apply(this, arguments);
      };
    }());
    varData_1827.register("crafting:unequipAccessory", function () {
      var varData_3206 = handleAction_257(function (param_1) {
        return handleAction_260(this, function (param_1_1) {
          return [2, varData_2957.unequipAccessory(param_1)];
        });
      });
      return function (param_1) {
        return varData_3206.apply(this, arguments);
      };
    }());
    varData_1827.register("crafting:close", handleAction_257(function () {
      return handleAction_260(this, function (param_1) {
        return [2, varData_3050.close()];
      });
    }));
    varData_1827.register("crafting:getWeaponsList", handleAction_257(function () {
      return handleAction_260(this, function (param_1) {
        return [2, varData_3050.getWeapons()];
      });
    }));
    on("onResourceStop", function (param_1) {
      if (param_1 === GetCurrentResourceName()) {
        varData_3218.cleanup();
        varData_2957.cleanup();
      }
    });
    ;
    function handleAction_264() {
      handleAction_254();
      handleAction_255();
      handleAction_263();
    }
    ;
    function handleAction_265(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_3207 = param_1[param_6](param_7);
        var varData_3208 = varData_3207.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_3207.done) {
        param_2(varData_3208);
      } else {
        Promise.resolve(varData_3208).then(param_4, param_5);
      }
    }
    function handleAction_266(param_1) {
      return function () {
        var varData_3209 = this;
        var varData_3210 = arguments;
        return new Promise(function (param_1_1, param_2) {
          var varData_3211 = param_1.apply(varData_3209, varData_3210);
          function handleAction_267(param_1_2) {
            handleAction_265(varData_3211, param_1_1, param_2, handleAction_267, handleAction_268, "next", param_1_2);
          }
          function handleAction_268(param_1_2) {
            handleAction_265(varData_3211, param_1_1, param_2, handleAction_267, handleAction_268, "throw", param_1_2);
          }
          handleAction_267(undefined);
        });
      };
    }
    function handleAction_269(param_1, param_2) {
      var varData_3212;
      var varData_3213;
      var varData_3214;
      var varData_3215;
      var varData_3216 = {
        label: 0,
        sent: function () {
          if (varData_3214[0] & 1) {
            throw varData_3214[1];
          }
          return varData_3214[1];
        },
        trys: [],
        ops: []
      };
      varData_3215 = {
        next: handleAction_270(0),
        throw: handleAction_270(1),
        return: handleAction_270(2)
      };
      if (typeof Symbol === "function") {
        varData_3215[Symbol.iterator] = function () {
          return this;
        };
      }
      return varData_3215;
      function handleAction_270(param_1_1) {
        return function (param_1_2) {
          return handleAction_271([param_1_1, param_1_2]);
        };
      }
      function handleAction_271(param_1_1) {
        if (varData_3212) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_3216) {
          try {
            varData_3212 = 1;
            if (varData_3213 && (varData_3214 = param_1_1[0] & 2 ? varData_3213.return : param_1_1[0] ? varData_3213.throw || ((varData_3214 = varData_3213.return) && varData_3214.call(varData_3213), 0) : varData_3213.next) && !(varData_3214 = varData_3214.call(varData_3213, param_1_1[1])).done) {
              return varData_3214;
            }
            varData_3213 = 0;
            if (varData_3214) {
              param_1_1 = [param_1_1[0] & 2, varData_3214.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_3214 = param_1_1;
                break;
              case 4:
                varData_3216.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_3216.label++;
                varData_3213 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_3216.ops.pop();
                varData_3216.trys.pop();
                continue;
              default:
                if (!(varData_3214 = varData_3216.trys, varData_3214 = varData_3214.length > 0 && varData_3214[varData_3214.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_3216 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_3214 || param_1_1[1] > varData_3214[0] && param_1_1[1] < varData_3214[3])) {
                  varData_3216.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_3216.label < varData_3214[1]) {
                  varData_3216.label = varData_3214[1];
                  varData_3214 = param_1_1;
                  break;
                }
                if (varData_3214 && varData_3216.label < varData_3214[2]) {
                  varData_3216.label = varData_3214[2];
                  varData_3216.ops.push(param_1_1);
                  break;
                }
                if (varData_3214[2]) {
                  varData_3216.ops.pop();
                }
                varData_3216.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_3216);
          } catch (err) {
            param_1_1 = [6, err];
            varData_3213 = 0;
          } finally {
            varData_3212 = varData_3214 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_3217 = {
          value: param_1_1[0] ? param_1_1[1] : undefined,
          done: true
        };
        return varData_3217;
      }
    }
    new varData_2154({
      codename: "crafting",
      version: "1.0.0"
    });
    var varData_3218 = new varData_3141();
    on("onClientResourceStart", function () {
      var varData_3219 = handleAction_266(function (param_1) {
        return handleAction_269(this, function (param_1_1) {
          if (param_1 !== GetCurrentResourceName()) {
            return [2];
          }
          varData_3050.Init();
          handleAction_264();
          return [2];
        });
      });
      return function (param_1) {
        return varData_3219.apply(this, arguments);
      };
    }());
  })();
})();