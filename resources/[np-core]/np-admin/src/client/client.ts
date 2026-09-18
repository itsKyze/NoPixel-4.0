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
    handleAction_35.g = function () {
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
    }();
  })();
  (() => {
    handleAction_35.o = (param_1, param_2) => Object.prototype.hasOwnProperty.call(param_1, param_2);
  })();
  (() => {
    handleAction_35.r = param_1 => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(param_1, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(param_1, "__esModule", {
        value: true
      });
    };
  })();
  var varData_108 = {};
  (() => {
    'use strict';

    var varData_109 = {};
    handleAction_35.r(varData_109);
    var varData_110 = {
      ChangeObjectModel: () => varData_2513,
      MoveObject: () => varData_2511,
      addSyncedObjects: () => varData_2471,
      adminMode: () => varData_2521,
      autoRefuel: () => varData_2470,
      blips: () => varData_2450,
      burnEntity: () => varData_2507,
      changePlate: () => varData_2495,
      cloak: () => varData_2381,
      damageEntity: () => varData_2467,
      deleteEntity: () => varData_2453,
      devspawn: () => varData_2343,
      enterVehicle: () => varData_2489,
      explodeEntity: () => varData_2501,
      god: () => varData_2342,
      interiorSprint: () => varData_2476,
      lockDoor: () => varData_2483,
      noclip: () => varData_2379,
      popTire: () => varData_2478,
      rockstarEditor: () => varData_2473,
      sprint: () => varData_2464,
      startRecording: () => varData_2474,
      stopRecording: () => varData_2475,
      superJump: () => varData_2463,
      telekinesis: () => varData_2518,
      teleport: () => varData_2330,
      teleportCoords: () => varData_2334,
      teleportMarker: () => varData_2455,
      toggleEngine: () => varData_2485,
      unlockDoor: () => varData_2481
    };
    handleAction_35.d(varData_109, varData_110);
    ;
    const varData_111 = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var varData_112 = {
      randomUUID: varData_111
    };
    const varData_113 = varData_112;
    ;
    let varData_114;
    const varData_115 = new Uint8Array(16);
    function handleAction_36() {
      if (!varData_114) {
        varData_114 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!varData_114) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return varData_114(varData_115);
    }
    ;
    const varData_116 = [];
    for (let loopIdx = 0; loopIdx < 256; ++loopIdx) {
      varData_116.push((loopIdx + 256).toString(16).slice(1));
    }
    function handleAction_37(param_1, _0xe90d00 = 0) {
      return varData_116[param_1[_0xe90d00 + 0]] + varData_116[param_1[_0xe90d00 + 1]] + varData_116[param_1[_0xe90d00 + 2]] + varData_116[param_1[_0xe90d00 + 3]] + "-" + varData_116[param_1[_0xe90d00 + 4]] + varData_116[param_1[_0xe90d00 + 5]] + "-" + varData_116[param_1[_0xe90d00 + 6]] + varData_116[param_1[_0xe90d00 + 7]] + "-" + varData_116[param_1[_0xe90d00 + 8]] + varData_116[param_1[_0xe90d00 + 9]] + "-" + varData_116[param_1[_0xe90d00 + 10]] + varData_116[param_1[_0xe90d00 + 11]] + varData_116[param_1[_0xe90d00 + 12]] + varData_116[param_1[_0xe90d00 + 13]] + varData_116[param_1[_0xe90d00 + 14]] + varData_116[param_1[_0xe90d00 + 15]];
    }
    function createUUID(param_1, _0xefc9f = 0) {
      const varData_117 = handleAction_37(param_1, _0xefc9f);
      if (!validate(varData_117)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return varData_117;
    }
    const varData_118 = null && createUUID;
    ;
    function createUUID_1(param_1, param_2, param_3) {
      if (varData_113.randomUUID && !param_2 && !param_1) {
        return varData_113.randomUUID();
      }
      param_1 = param_1 || {};
      const varData_119 = param_1.random || (param_1.rng || handleAction_36)();
      varData_119[6] = varData_119[6] & 15 | 64;
      varData_119[8] = varData_119[8] & 63 | 128;
      if (param_2) {
        param_3 = param_3 || 0;
        for (let loopIdx = 0; loopIdx < 16; ++loopIdx) {
          param_2[param_3 + loopIdx] = varData_119[loopIdx];
        }
        return param_2;
      }
      return handleAction_37(varData_119);
    }
    const varData_120 = createUUID_1;
    ;
    const varData_121 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    ;
    function handleAction_38(param_1) {
      return typeof param_1 === "string" && varData_121.test(param_1);
    }
    const varData_122 = handleAction_38;
    ;
    function createUUID_2(param_1) {
      if (!varData_122(param_1)) {
        throw TypeError("Invalid UUID");
      }
      let varData_123;
      const varData_124 = new Uint8Array(16);
      varData_124[0] = (varData_123 = parseInt(param_1.slice(0, 8), 16)) >>> 24;
      varData_124[1] = varData_123 >>> 16 & 255;
      varData_124[2] = varData_123 >>> 8 & 255;
      varData_124[3] = varData_123 & 255;
      varData_124[4] = (varData_123 = parseInt(param_1.slice(9, 13), 16)) >>> 8;
      varData_124[5] = varData_123 & 255;
      varData_124[6] = (varData_123 = parseInt(param_1.slice(14, 18), 16)) >>> 8;
      varData_124[7] = varData_123 & 255;
      varData_124[8] = (varData_123 = parseInt(param_1.slice(19, 23), 16)) >>> 8;
      varData_124[9] = varData_123 & 255;
      varData_124[10] = (varData_123 = parseInt(param_1.slice(24, 36), 16)) / 1099511627776 & 255;
      varData_124[11] = varData_123 / 4294967296 & 255;
      varData_124[12] = varData_123 >>> 24 & 255;
      varData_124[13] = varData_123 >>> 16 & 255;
      varData_124[14] = varData_123 >>> 8 & 255;
      varData_124[15] = varData_123 & 255;
      return varData_124;
    }
    const varData_125 = createUUID_2;
    ;
    function handleAction_39(param_1) {
      param_1 = unescape(encodeURIComponent(param_1));
      const varData_126 = [];
      for (let loopIdx = 0; loopIdx < param_1.length; ++loopIdx) {
        varData_126.push(param_1.charCodeAt(loopIdx));
      }
      return varData_126;
    }
    const varData_127 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    const varData_128 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function handleAction_40(param_1, param_2, param_3) {
      function handleAction_41(param_1_1, param_2_1, param_3_1, param_4) {
        if (typeof param_1_1 === "string") {
          param_1_1 = handleAction_39(param_1_1);
        }
        if (typeof param_2_1 === "string") {
          param_2_1 = varData_125(param_2_1);
        }
        if (param_2_1?.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let varData_129 = new Uint8Array(16 + param_1_1.length);
        varData_129.set(param_2_1);
        varData_129.set(param_1_1, param_2_1.length);
        varData_129 = param_3(varData_129);
        varData_129[6] = varData_129[6] & 15 | param_2;
        varData_129[8] = varData_129[8] & 63 | 128;
        if (param_3_1) {
          param_4 = param_4 || 0;
          for (let loopIdx = 0; loopIdx < 16; ++loopIdx) {
            param_3_1[param_4 + loopIdx] = varData_129[loopIdx];
          }
          return param_3_1;
        }
        return handleAction_37(varData_129);
      }
      try {
        handleAction_41.name = param_1;
      } catch (err) {}
      handleAction_41.DNS = varData_127;
      handleAction_41.URL = varData_128;
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
      const varData_130 = [1518500249, 1859775393, 2400959708, 3395469782];
      const varData_131 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof param_1 === "string") {
        const varData_132 = unescape(encodeURIComponent(param_1));
        param_1 = [];
        for (let loopIdx = 0; loopIdx < varData_132.length; ++loopIdx) {
          param_1.push(varData_132.charCodeAt(loopIdx));
        }
      } else if (!Array.isArray(param_1)) {
        param_1 = Array.prototype.slice.call(param_1);
      }
      param_1.push(128);
      const varData_133 = param_1.length / 4 + 2;
      const varData_134 = Math.ceil(varData_133 / 16);
      const varData_135 = new Array(varData_134);
      for (let loopIdx = 0; loopIdx < varData_134; ++loopIdx) {
        const varData_136 = new Uint32Array(16);
        for (let loopIdx_1 = 0; loopIdx_1 < 16; ++loopIdx_1) {
          varData_136[loopIdx_1] = param_1[loopIdx * 64 + loopIdx_1 * 4] << 24 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 1] << 16 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 2] << 8 | param_1[loopIdx * 64 + loopIdx_1 * 4 + 3];
        }
        varData_135[loopIdx] = varData_136;
      }
      varData_135[varData_134 - 1][14] = (param_1.length - 1) * 8 / Math.pow(2, 32);
      varData_135[varData_134 - 1][14] = Math.floor(varData_135[varData_134 - 1][14]);
      varData_135[varData_134 - 1][15] = (param_1.length - 1) * 8 & -1;
      for (let loopIdx = 0; loopIdx < varData_134; ++loopIdx) {
        const varData_137 = new Uint32Array(80);
        for (let loopIdx_1 = 0; loopIdx_1 < 16; ++loopIdx_1) {
          varData_137[loopIdx_1] = varData_135[loopIdx][loopIdx_1];
        }
        for (let loopIdx_1 = 16; loopIdx_1 < 80; ++loopIdx_1) {
          varData_137[loopIdx_1] = handleAction_43(varData_137[loopIdx_1 - 3] ^ varData_137[loopIdx_1 - 8] ^ varData_137[loopIdx_1 - 14] ^ varData_137[loopIdx_1 - 16], 1);
        }
        let varData_138 = varData_131[0];
        let varData_139 = varData_131[1];
        let varData_140 = varData_131[2];
        let varData_141 = varData_131[3];
        let varData_142 = varData_131[4];
        for (let loopIdx_1 = 0; loopIdx_1 < 80; ++loopIdx_1) {
          const varData_143 = Math.floor(loopIdx_1 / 20);
          const varData_144 = handleAction_43(varData_138, 5) + handleAction_42(varData_143, varData_139, varData_140, varData_141) + varData_142 + varData_130[varData_143] + varData_137[loopIdx_1] >>> 0;
          varData_142 = varData_141;
          varData_141 = varData_140;
          varData_140 = handleAction_43(varData_139, 30) >>> 0;
          varData_139 = varData_138;
          varData_138 = varData_144;
        }
        varData_131[0] = varData_131[0] + varData_138 >>> 0;
        varData_131[1] = varData_131[1] + varData_139 >>> 0;
        varData_131[2] = varData_131[2] + varData_140 >>> 0;
        varData_131[3] = varData_131[3] + varData_141 >>> 0;
        varData_131[4] = varData_131[4] + varData_142 >>> 0;
      }
      return [varData_131[0] >> 24 & 255, varData_131[0] >> 16 & 255, varData_131[0] >> 8 & 255, varData_131[0] & 255, varData_131[1] >> 24 & 255, varData_131[1] >> 16 & 255, varData_131[1] >> 8 & 255, varData_131[1] & 255, varData_131[2] >> 24 & 255, varData_131[2] >> 16 & 255, varData_131[2] >> 8 & 255, varData_131[2] & 255, varData_131[3] >> 24 & 255, varData_131[3] >> 16 & 255, varData_131[3] >> 8 & 255, varData_131[3] & 255, varData_131[4] >> 24 & 255, varData_131[4] >> 16 & 255, varData_131[4] >> 8 & 255, varData_131[4] & 255];
    }
    const varData_145 = handleAction_44;
    ;
    const varData_146 = handleAction_40("v5", 80, varData_145);
    const varData_147 = varData_146;
    ; /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    const varData_148 = 4;
    const varData_149 = 0;
    const varData_150 = 1;
    const varData_151 = 2;
    function handleAction_45(param_1) {
      let varData_152 = param_1.length;
      while (--varData_152 >= 0) {
        param_1[varData_152] = 0;
      }
    }
    const varData_153 = 0;
    const varData_154 = 1;
    const varData_155 = 2;
    const varData_156 = 3;
    const varData_157 = 258;
    const varData_158 = 29;
    const varData_159 = 256;
    const varData_160 = varData_159 + 1 + varData_158;
    const varData_161 = 30;
    const varData_162 = 19;
    const varData_163 = varData_160 * 2 + 1;
    const varData_164 = 15;
    const varData_165 = 16;
    const varData_166 = 7;
    const varData_167 = 256;
    const varData_168 = 16;
    const varData_169 = 17;
    const varData_170 = 18;
    const varData_171 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const varData_172 = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const varData_173 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const varData_174 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const varData_175 = 512;
    const varData_176 = new Array((varData_160 + 2) * 2);
    handleAction_45(varData_176);
    const varData_177 = new Array(varData_161 * 2);
    handleAction_45(varData_177);
    const varData_178 = new Array(varData_175);
    handleAction_45(varData_178);
    const varData_179 = new Array(varData_157 - varData_156 + 1);
    handleAction_45(varData_179);
    const varData_180 = new Array(varData_158);
    handleAction_45(varData_180);
    const varData_181 = new Array(varData_161);
    handleAction_45(varData_181);
    function handleAction_46(param_1, param_2, param_3, param_4, param_5) {
      this.static_tree = param_1;
      this.extra_bits = param_2;
      this.extra_base = param_3;
      this.elems = param_4;
      this.max_length = param_5;
      this.has_stree = param_1 && param_1.length;
    }
    let varData_182;
    let varData_183;
    let varData_184;
    function handleAction_47(param_1, param_2) {
      this.dyn_tree = param_1;
      this.max_code = 0;
      this.stat_desc = param_2;
    }
    const varData_185 = param_1 => {
      if (param_1 < 256) {
        return varData_178[param_1];
      } else {
        return varData_178[256 + (param_1 >>> 7)];
      }
    };
    const varData_186 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
    };
    const varData_187 = (param_1, param_2, param_3) => {
      if (param_1.bi_valid > varData_165 - param_3) {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        varData_186(param_1, param_1.bi_buf);
        param_1.bi_buf = param_2 >> varData_165 - param_1.bi_valid;
        param_1.bi_valid += param_3 - varData_165;
      } else {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        param_1.bi_valid += param_3;
      }
    };
    const varData_188 = (param_1, param_2, param_3) => {
      varData_187(param_1, param_3[param_2 * 2], param_3[param_2 * 2 + 1]);
    };
    const varData_189 = (param_1, param_2) => {
      let varData_190 = 0;
      do {
        varData_190 |= param_1 & 1;
        param_1 >>>= 1;
        varData_190 <<= 1;
      } while (--param_2 > 0);
      return varData_190 >>> 1;
    };
    const varData_191 = param_1 => {
      if (param_1.bi_valid === 16) {
        varData_186(param_1, param_1.bi_buf);
        param_1.bi_buf = 0;
        param_1.bi_valid = 0;
      } else if (param_1.bi_valid >= 8) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf & 255;
        param_1.bi_buf >>= 8;
        param_1.bi_valid -= 8;
      }
    };
    const varData_192 = (param_1, param_2) => {
      const varData_193 = param_2.dyn_tree;
      const varData_194 = param_2.max_code;
      const varData_195 = param_2.stat_desc.static_tree;
      const varData_196 = param_2.stat_desc.has_stree;
      const varData_197 = param_2.stat_desc.extra_bits;
      const varData_198 = param_2.stat_desc.extra_base;
      const varData_199 = param_2.stat_desc.max_length;
      let varData_200;
      let varData_201;
      let varData_202;
      let varData_203;
      let varData_204;
      let varData_205;
      let varData_206 = 0;
      for (varData_203 = 0; varData_203 <= varData_164; varData_203++) {
        param_1.bl_count[varData_203] = 0;
      }
      varData_193[param_1.heap[param_1.heap_max] * 2 + 1] = 0;
      for (varData_200 = param_1.heap_max + 1; varData_200 < varData_163; varData_200++) {
        varData_201 = param_1.heap[varData_200];
        varData_203 = varData_193[varData_193[varData_201 * 2 + 1] * 2 + 1] + 1;
        if (varData_203 > varData_199) {
          varData_203 = varData_199;
          varData_206++;
        }
        varData_193[varData_201 * 2 + 1] = varData_203;
        if (varData_201 > varData_194) {
          continue;
        }
        param_1.bl_count[varData_203]++;
        varData_204 = 0;
        if (varData_201 >= varData_198) {
          varData_204 = varData_197[varData_201 - varData_198];
        }
        varData_205 = varData_193[varData_201 * 2];
        param_1.opt_len += varData_205 * (varData_203 + varData_204);
        if (varData_196) {
          param_1.static_len += varData_205 * (varData_195[varData_201 * 2 + 1] + varData_204);
        }
      }
      if (varData_206 === 0) {
        return;
      }
      do {
        varData_203 = varData_199 - 1;
        while (param_1.bl_count[varData_203] === 0) {
          varData_203--;
        }
        param_1.bl_count[varData_203]--;
        param_1.bl_count[varData_203 + 1] += 2;
        param_1.bl_count[varData_199]--;
        varData_206 -= 2;
      } while (varData_206 > 0);
      for (varData_203 = varData_199; varData_203 !== 0; varData_203--) {
        varData_201 = param_1.bl_count[varData_203];
        while (varData_201 !== 0) {
          varData_202 = param_1.heap[--varData_200];
          if (varData_202 > varData_194) {
            continue;
          }
          if (varData_193[varData_202 * 2 + 1] !== varData_203) {
            param_1.opt_len += (varData_203 - varData_193[varData_202 * 2 + 1]) * varData_193[varData_202 * 2];
            varData_193[varData_202 * 2 + 1] = varData_203;
          }
          varData_201--;
        }
      }
    };
    const varData_207 = (param_1, param_2, param_3) => {
      const varData_208 = new Array(varData_164 + 1);
      let varData_209 = 0;
      let varData_210;
      let varData_211;
      for (varData_210 = 1; varData_210 <= varData_164; varData_210++) {
        varData_209 = varData_209 + param_3[varData_210 - 1] << 1;
        varData_208[varData_210] = varData_209;
      }
      for (varData_211 = 0; varData_211 <= param_2; varData_211++) {
        let varData_212 = param_1[varData_211 * 2 + 1];
        if (varData_212 === 0) {
          continue;
        }
        param_1[varData_211 * 2] = varData_189(varData_208[varData_212]++, varData_212);
      }
    };
    const varData_213 = () => {
      let varData_214;
      let varData_215;
      let varData_216;
      let varData_217;
      let varData_218;
      const varData_219 = new Array(varData_164 + 1);
      varData_216 = 0;
      for (varData_217 = 0; varData_217 < varData_158 - 1; varData_217++) {
        varData_180[varData_217] = varData_216;
        for (varData_214 = 0; varData_214 < 1 << varData_171[varData_217]; varData_214++) {
          varData_179[varData_216++] = varData_217;
        }
      }
      varData_179[varData_216 - 1] = varData_217;
      varData_218 = 0;
      for (varData_217 = 0; varData_217 < 16; varData_217++) {
        varData_181[varData_217] = varData_218;
        for (varData_214 = 0; varData_214 < 1 << varData_172[varData_217]; varData_214++) {
          varData_178[varData_218++] = varData_217;
        }
      }
      varData_218 >>= 7;
      for (; varData_217 < varData_161; varData_217++) {
        varData_181[varData_217] = varData_218 << 7;
        for (varData_214 = 0; varData_214 < 1 << varData_172[varData_217] - 7; varData_214++) {
          varData_178[256 + varData_218++] = varData_217;
        }
      }
      for (varData_215 = 0; varData_215 <= varData_164; varData_215++) {
        varData_219[varData_215] = 0;
      }
      varData_214 = 0;
      while (varData_214 <= 143) {
        varData_176[varData_214 * 2 + 1] = 8;
        varData_214++;
        varData_219[8]++;
      }
      while (varData_214 <= 255) {
        varData_176[varData_214 * 2 + 1] = 9;
        varData_214++;
        varData_219[9]++;
      }
      while (varData_214 <= 279) {
        varData_176[varData_214 * 2 + 1] = 7;
        varData_214++;
        varData_219[7]++;
      }
      while (varData_214 <= 287) {
        varData_176[varData_214 * 2 + 1] = 8;
        varData_214++;
        varData_219[8]++;
      }
      varData_207(varData_176, varData_160 + 1, varData_219);
      for (varData_214 = 0; varData_214 < varData_161; varData_214++) {
        varData_177[varData_214 * 2 + 1] = 5;
        varData_177[varData_214 * 2] = varData_189(varData_214, 5);
      }
      varData_182 = new handleAction_46(varData_176, varData_171, varData_159 + 1, varData_160, varData_164);
      varData_183 = new handleAction_46(varData_177, varData_172, 0, varData_161, varData_164);
      varData_184 = new handleAction_46(new Array(0), varData_173, 0, varData_162, varData_166);
    };
    const varData_220 = param_1 => {
      let varData_221;
      for (varData_221 = 0; varData_221 < varData_160; varData_221++) {
        param_1.dyn_ltree[varData_221 * 2] = 0;
      }
      for (varData_221 = 0; varData_221 < varData_161; varData_221++) {
        param_1.dyn_dtree[varData_221 * 2] = 0;
      }
      for (varData_221 = 0; varData_221 < varData_162; varData_221++) {
        param_1.bl_tree[varData_221 * 2] = 0;
      }
      param_1.dyn_ltree[varData_167 * 2] = 1;
      param_1.opt_len = param_1.static_len = 0;
      param_1.sym_next = param_1.matches = 0;
    };
    const varData_222 = param_1 => {
      if (param_1.bi_valid > 8) {
        varData_186(param_1, param_1.bi_buf);
      } else if (param_1.bi_valid > 0) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf;
      }
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
    };
    const varData_223 = (param_1, param_2, param_3, param_4) => {
      const varData_224 = param_2 * 2;
      const varData_225 = param_3 * 2;
      return param_1[varData_224] < param_1[varData_225] || param_1[varData_224] === param_1[varData_225] && param_4[param_2] <= param_4[param_3];
    };
    const varData_226 = (param_1, param_2, param_3) => {
      const varData_227 = param_1.heap[param_3];
      let varData_228 = param_3 << 1;
      while (varData_228 <= param_1.heap_len) {
        if (varData_228 < param_1.heap_len && varData_223(param_2, param_1.heap[varData_228 + 1], param_1.heap[varData_228], param_1.depth)) {
          varData_228++;
        }
        if (varData_223(param_2, varData_227, param_1.heap[varData_228], param_1.depth)) {
          break;
        }
        param_1.heap[param_3] = param_1.heap[varData_228];
        param_3 = varData_228;
        varData_228 <<= 1;
      }
      param_1.heap[param_3] = varData_227;
    };
    const varData_229 = (param_1, param_2, param_3) => {
      let varData_230;
      let varData_231;
      let varData_232 = 0;
      let varData_233;
      let varData_234;
      if (param_1.sym_next !== 0) {
        do {
          varData_230 = param_1.pending_buf[param_1.sym_buf + varData_232++] & 255;
          varData_230 += (param_1.pending_buf[param_1.sym_buf + varData_232++] & 255) << 8;
          varData_231 = param_1.pending_buf[param_1.sym_buf + varData_232++];
          if (varData_230 === 0) {
            varData_188(param_1, varData_231, param_2);
          } else {
            varData_233 = varData_179[varData_231];
            varData_188(param_1, varData_233 + varData_159 + 1, param_2);
            varData_234 = varData_171[varData_233];
            if (varData_234 !== 0) {
              varData_231 -= varData_180[varData_233];
              varData_187(param_1, varData_231, varData_234);
            }
            varData_230--;
            varData_233 = varData_185(varData_230);
            varData_188(param_1, varData_233, param_3);
            varData_234 = varData_172[varData_233];
            if (varData_234 !== 0) {
              varData_230 -= varData_181[varData_233];
              varData_187(param_1, varData_230, varData_234);
            }
          }
        } while (varData_232 < param_1.sym_next);
      }
      varData_188(param_1, varData_167, param_2);
    };
    const varData_235 = (param_1, param_2) => {
      const varData_236 = param_2.dyn_tree;
      const varData_237 = param_2.stat_desc.static_tree;
      const varData_238 = param_2.stat_desc.has_stree;
      const varData_239 = param_2.stat_desc.elems;
      let varData_240;
      let varData_241;
      let varData_242 = -1;
      let varData_243;
      param_1.heap_len = 0;
      param_1.heap_max = varData_163;
      for (varData_240 = 0; varData_240 < varData_239; varData_240++) {
        if (varData_236[varData_240 * 2] !== 0) {
          param_1.heap[++param_1.heap_len] = varData_242 = varData_240;
          param_1.depth[varData_240] = 0;
        } else {
          varData_236[varData_240 * 2 + 1] = 0;
        }
      }
      while (param_1.heap_len < 2) {
        varData_243 = param_1.heap[++param_1.heap_len] = varData_242 < 2 ? ++varData_242 : 0;
        varData_236[varData_243 * 2] = 1;
        param_1.depth[varData_243] = 0;
        param_1.opt_len--;
        if (varData_238) {
          param_1.static_len -= varData_237[varData_243 * 2 + 1];
        }
      }
      param_2.max_code = varData_242;
      for (varData_240 = param_1.heap_len >> 1; varData_240 >= 1; varData_240--) {
        varData_226(param_1, varData_236, varData_240);
      }
      varData_243 = varData_239;
      do {
        varData_240 = param_1.heap[1];
        param_1.heap[1] = param_1.heap[param_1.heap_len--];
        varData_226(param_1, varData_236, 1);
        varData_241 = param_1.heap[1];
        param_1.heap[--param_1.heap_max] = varData_240;
        param_1.heap[--param_1.heap_max] = varData_241;
        varData_236[varData_243 * 2] = varData_236[varData_240 * 2] + varData_236[varData_241 * 2];
        param_1.depth[varData_243] = (param_1.depth[varData_240] >= param_1.depth[varData_241] ? param_1.depth[varData_240] : param_1.depth[varData_241]) + 1;
        varData_236[varData_240 * 2 + 1] = varData_236[varData_241 * 2 + 1] = varData_243;
        param_1.heap[1] = varData_243++;
        varData_226(param_1, varData_236, 1);
      } while (param_1.heap_len >= 2);
      param_1.heap[--param_1.heap_max] = param_1.heap[1];
      varData_192(param_1, param_2);
      varData_207(varData_236, varData_242, param_1.bl_count);
    };
    const varData_244 = (param_1, param_2, param_3) => {
      let varData_245;
      let varData_246 = -1;
      let varData_247;
      let varData_248 = param_2[1];
      let varData_249 = 0;
      let varData_250 = 7;
      let varData_251 = 4;
      if (varData_248 === 0) {
        varData_250 = 138;
        varData_251 = 3;
      }
      param_2[(param_3 + 1) * 2 + 1] = 65535;
      for (varData_245 = 0; varData_245 <= param_3; varData_245++) {
        varData_247 = varData_248;
        varData_248 = param_2[(varData_245 + 1) * 2 + 1];
        if (++varData_249 < varData_250 && varData_247 === varData_248) {
          continue;
        } else if (varData_249 < varData_251) {
          param_1.bl_tree[varData_247 * 2] += varData_249;
        } else if (varData_247 !== 0) {
          if (varData_247 !== varData_246) {
            param_1.bl_tree[varData_247 * 2]++;
          }
          param_1.bl_tree[varData_168 * 2]++;
        } else if (varData_249 <= 10) {
          param_1.bl_tree[varData_169 * 2]++;
        } else {
          param_1.bl_tree[varData_170 * 2]++;
        }
        varData_249 = 0;
        varData_246 = varData_247;
        if (varData_248 === 0) {
          varData_250 = 138;
          varData_251 = 3;
        } else if (varData_247 === varData_248) {
          varData_250 = 6;
          varData_251 = 3;
        } else {
          varData_250 = 7;
          varData_251 = 4;
        }
      }
    };
    const varData_252 = (param_1, param_2, param_3) => {
      let varData_253;
      let varData_254 = -1;
      let varData_255;
      let varData_256 = param_2[1];
      let varData_257 = 0;
      let varData_258 = 7;
      let varData_259 = 4;
      if (varData_256 === 0) {
        varData_258 = 138;
        varData_259 = 3;
      }
      for (varData_253 = 0; varData_253 <= param_3; varData_253++) {
        varData_255 = varData_256;
        varData_256 = param_2[(varData_253 + 1) * 2 + 1];
        if (++varData_257 < varData_258 && varData_255 === varData_256) {
          continue;
        } else if (varData_257 < varData_259) {
          do {
            varData_188(param_1, varData_255, param_1.bl_tree);
          } while (--varData_257 !== 0);
        } else if (varData_255 !== 0) {
          if (varData_255 !== varData_254) {
            varData_188(param_1, varData_255, param_1.bl_tree);
            varData_257--;
          }
          varData_188(param_1, varData_168, param_1.bl_tree);
          varData_187(param_1, varData_257 - 3, 2);
        } else if (varData_257 <= 10) {
          varData_188(param_1, varData_169, param_1.bl_tree);
          varData_187(param_1, varData_257 - 3, 3);
        } else {
          varData_188(param_1, varData_170, param_1.bl_tree);
          varData_187(param_1, varData_257 - 11, 7);
        }
        varData_257 = 0;
        varData_254 = varData_255;
        if (varData_256 === 0) {
          varData_258 = 138;
          varData_259 = 3;
        } else if (varData_255 === varData_256) {
          varData_258 = 6;
          varData_259 = 3;
        } else {
          varData_258 = 7;
          varData_259 = 4;
        }
      }
    };
    const varData_260 = param_1 => {
      let varData_261;
      varData_244(param_1, param_1.dyn_ltree, param_1.l_desc.max_code);
      varData_244(param_1, param_1.dyn_dtree, param_1.d_desc.max_code);
      varData_235(param_1, param_1.bl_desc);
      for (varData_261 = varData_162 - 1; varData_261 >= 3; varData_261--) {
        if (param_1.bl_tree[varData_174[varData_261] * 2 + 1] !== 0) {
          break;
        }
      }
      param_1.opt_len += (varData_261 + 1) * 3 + 5 + 5 + 4;
      return varData_261;
    };
    const varData_262 = (param_1, param_2, param_3, param_4) => {
      let varData_263;
      varData_187(param_1, param_2 - 257, 5);
      varData_187(param_1, param_3 - 1, 5);
      varData_187(param_1, param_4 - 4, 4);
      for (varData_263 = 0; varData_263 < param_4; varData_263++) {
        varData_187(param_1, param_1.bl_tree[varData_174[varData_263] * 2 + 1], 3);
      }
      varData_252(param_1, param_1.dyn_ltree, param_2 - 1);
      varData_252(param_1, param_1.dyn_dtree, param_3 - 1);
    };
    const varData_264 = param_1 => {
      let varData_265 = 4093624447;
      let varData_266;
      for (varData_266 = 0; varData_266 <= 31; varData_266++, varData_265 >>>= 1) {
        if (varData_265 & 1 && param_1.dyn_ltree[varData_266 * 2] !== 0) {
          return varData_149;
        }
      }
      if (param_1.dyn_ltree[18] !== 0 || param_1.dyn_ltree[20] !== 0 || param_1.dyn_ltree[26] !== 0) {
        return varData_150;
      }
      for (varData_266 = 32; varData_266 < varData_159; varData_266++) {
        if (param_1.dyn_ltree[varData_266 * 2] !== 0) {
          return varData_150;
        }
      }
      return varData_149;
    };
    let isDisabled = false;
    const varData_267 = param_1 => {
      if (!isDisabled) {
        varData_213();
        isDisabled = true;
      }
      param_1.l_desc = new handleAction_47(param_1.dyn_ltree, varData_182);
      param_1.d_desc = new handleAction_47(param_1.dyn_dtree, varData_183);
      param_1.bl_desc = new handleAction_47(param_1.bl_tree, varData_184);
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
      varData_220(param_1);
    };
    const varData_268 = (param_1, param_2, param_3, param_4) => {
      varData_187(param_1, (varData_153 << 1) + (param_4 ? 1 : 0), 3);
      varData_222(param_1);
      varData_186(param_1, param_3);
      varData_186(param_1, ~param_3);
      if (param_3) {
        param_1.pending_buf.set(param_1.window.subarray(param_2, param_2 + param_3), param_1.pending);
      }
      param_1.pending += param_3;
    };
    const varData_269 = param_1 => {
      varData_187(param_1, varData_154 << 1, 3);
      varData_188(param_1, varData_167, varData_176);
      varData_191(param_1);
    };
    const varData_270 = (param_1, param_2, param_3, param_4) => {
      let varData_271;
      let varData_272;
      let varData_273 = 0;
      if (param_1.level > 0) {
        if (param_1.strm.data_type === varData_151) {
          param_1.strm.data_type = varData_264(param_1);
        }
        varData_235(param_1, param_1.l_desc);
        varData_235(param_1, param_1.d_desc);
        varData_273 = varData_260(param_1);
        varData_271 = param_1.opt_len + 3 + 7 >>> 3;
        varData_272 = param_1.static_len + 3 + 7 >>> 3;
        if (varData_272 <= varData_271) {
          varData_271 = varData_272;
        }
      } else {
        varData_271 = varData_272 = param_3 + 5;
      }
      if (param_3 + 4 <= varData_271 && param_2 !== -1) {
        varData_268(param_1, param_2, param_3, param_4);
      } else if (param_1.strategy === varData_148 || varData_272 === varData_271) {
        varData_187(param_1, (varData_154 << 1) + (param_4 ? 1 : 0), 3);
        varData_229(param_1, varData_176, varData_177);
      } else {
        varData_187(param_1, (varData_155 << 1) + (param_4 ? 1 : 0), 3);
        varData_262(param_1, param_1.l_desc.max_code + 1, param_1.d_desc.max_code + 1, varData_273 + 1);
        varData_229(param_1, param_1.dyn_ltree, param_1.dyn_dtree);
      }
      varData_220(param_1);
      if (param_4) {
        varData_222(param_1);
      }
    };
    const varData_274 = (param_1, param_2, param_3) => {
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2 >> 8;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_3;
      if (param_2 === 0) {
        param_1.dyn_ltree[param_3 * 2]++;
      } else {
        param_1.matches++;
        param_2--;
        param_1.dyn_ltree[(varData_179[param_3] + varData_159 + 1) * 2]++;
        param_1.dyn_dtree[varData_185(param_2) * 2]++;
      }
      return param_1.sym_next === param_1.sym_end;
    };
    var varData_275 = varData_267;
    var varData_276 = varData_268;
    var varData_277 = varData_270;
    var varData_278 = varData_274;
    var varData_279 = varData_269;
    var varData_280 = {
      _tr_init: varData_275,
      _tr_stored_block: varData_276,
      _tr_flush_block: varData_277,
      _tr_tally: varData_278,
      _tr_align: varData_279
    };
    var varData_281 = varData_280;
    const varData_282 = (param_1, param_2, param_3, param_4) => {
      let varData_283 = param_1 & 65535 | 0;
      let varData_284 = param_1 >>> 16 & 65535 | 0;
      let varData_285 = 0;
      while (param_3 !== 0) {
        varData_285 = param_3 > 2000 ? 2000 : param_3;
        param_3 -= varData_285;
        do {
          varData_283 = varData_283 + param_2[param_4++] | 0;
          varData_284 = varData_284 + varData_283 | 0;
        } while (--varData_285);
        varData_283 %= 65521;
        varData_284 %= 65521;
      }
      return varData_283 | varData_284 << 16 | 0;
    };
    var varData_286 = varData_282;
    const varData_287 = () => {
      let varData_288;
      let varData_289 = [];
      for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
        varData_288 = loopIdx;
        for (var loopIdx_1 = 0; loopIdx_1 < 8; loopIdx_1++) {
          varData_288 = varData_288 & 1 ? varData_288 >>> 1 ^ -306674912 : varData_288 >>> 1;
        }
        varData_289[loopIdx] = varData_288;
      }
      return varData_289;
    };
    const varData_290 = new Uint32Array(varData_287());
    const varData_291 = (param_1, param_2, param_3, param_4) => {
      const varData_292 = varData_290;
      const varData_293 = param_4 + param_3;
      param_1 ^= -1;
      for (let loopIdx = param_4; loopIdx < varData_293; loopIdx++) {
        param_1 = param_1 >>> 8 ^ varData_292[(param_1 ^ param_2[loopIdx]) & 255];
      }
      return param_1 ^ -1;
    };
    var varData_294 = varData_291;
    var varData_295 = {
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
    var varData_296 = {
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
    var varData_297 = varData_296;
    const {
      _tr_init: _0x14ffae,
      _tr_stored_block: _0x13193f,
      _tr_flush_block: _0x43e39a,
      _tr_tally: _0x4f875f,
      _tr_align: _0x543c14
    } = varData_281;
    const {
      Z_NO_FLUSH: _0xc15c86,
      Z_PARTIAL_FLUSH: _0x57ee3c,
      Z_FULL_FLUSH: _0x921001,
      Z_FINISH: _0x4a6b69,
      Z_BLOCK: _0x474d81,
      Z_OK: _0x277afe,
      Z_STREAM_END: _0x144783,
      Z_STREAM_ERROR: _0x11e85a,
      Z_DATA_ERROR: _0x54ebf3,
      Z_BUF_ERROR: _0xf3ea72,
      Z_DEFAULT_COMPRESSION: _0x248a21,
      Z_FILTERED: _0x2e8261,
      Z_HUFFMAN_ONLY: _0x36ce3a,
      Z_RLE: _0x1c3cac,
      Z_FIXED: _0x5c54dd,
      Z_DEFAULT_STRATEGY: _0x5daddc,
      Z_UNKNOWN: _0x48c9cf,
      Z_DEFLATED: _0x46f62e
    } = varData_297;
    const varData_298 = 9;
    const varData_299 = 15;
    const varData_300 = 8;
    const varData_301 = 29;
    const varData_302 = 256;
    const varData_303 = varData_302 + 1 + varData_301;
    const varData_304 = 30;
    const varData_305 = 19;
    const varData_306 = varData_303 * 2 + 1;
    const varData_307 = 15;
    const varData_308 = 3;
    const varData_309 = 258;
    const varData_310 = varData_309 + varData_308 + 1;
    const varData_311 = 32;
    const varData_312 = 42;
    const varData_313 = 57;
    const varData_314 = 69;
    const varData_315 = 73;
    const varData_316 = 91;
    const varData_317 = 103;
    const varData_318 = 113;
    const varData_319 = 666;
    const varData_320 = 1;
    const varData_321 = 2;
    const varData_322 = 3;
    const varData_323 = 4;
    const varData_324 = 3;
    const varData_325 = (param_1, param_2) => {
      param_1.msg = varData_295[param_2];
      return param_2;
    };
    const varData_326 = param_1 => {
      return param_1 * 2 - (param_1 > 4 ? 9 : 0);
    };
    const varData_327 = param_1 => {
      let varData_328 = param_1.length;
      while (--varData_328 >= 0) {
        param_1[varData_328] = 0;
      }
    };
    const varData_329 = param_1 => {
      let varData_330;
      let varData_331;
      let varData_332;
      let varData_333 = param_1.w_size;
      varData_330 = param_1.hash_size;
      varData_332 = varData_330;
      do {
        varData_331 = param_1.head[--varData_332];
        param_1.head[varData_332] = varData_331 >= varData_333 ? varData_331 - varData_333 : 0;
      } while (--varData_330);
      varData_330 = varData_333;
      varData_332 = varData_330;
      do {
        varData_331 = param_1.prev[--varData_332];
        param_1.prev[varData_332] = varData_331 >= varData_333 ? varData_331 - varData_333 : 0;
      } while (--varData_330);
    };
    let varData_334 = (param_1, param_2, param_3) => (param_2 << param_1.hash_shift ^ param_3) & param_1.hash_mask;
    let varData_335 = varData_334;
    const varData_336 = param_1 => {
      const varData_337 = param_1.state;
      let varData_338 = varData_337.pending;
      if (varData_338 > param_1.avail_out) {
        varData_338 = param_1.avail_out;
      }
      if (varData_338 === 0) {
        return;
      }
      param_1.output.set(varData_337.pending_buf.subarray(varData_337.pending_out, varData_337.pending_out + varData_338), param_1.next_out);
      param_1.next_out += varData_338;
      varData_337.pending_out += varData_338;
      param_1.total_out += varData_338;
      param_1.avail_out -= varData_338;
      varData_337.pending -= varData_338;
      if (varData_337.pending === 0) {
        varData_337.pending_out = 0;
      }
    };
    const varData_339 = (param_1, param_2) => {
      _0x43e39a(param_1, param_1.block_start >= 0 ? param_1.block_start : -1, param_1.strstart - param_1.block_start, param_2);
      param_1.block_start = param_1.strstart;
      varData_336(param_1.strm);
    };
    const varData_340 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2;
    };
    const varData_341 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
    };
    const varData_342 = (param_1, param_2, param_3, param_4) => {
      let varData_343 = param_1.avail_in;
      if (varData_343 > param_4) {
        varData_343 = param_4;
      }
      if (varData_343 === 0) {
        return 0;
      }
      param_1.avail_in -= varData_343;
      param_2.set(param_1.input.subarray(param_1.next_in, param_1.next_in + varData_343), param_3);
      if (param_1.state.wrap === 1) {
        param_1.adler = varData_286(param_1.adler, param_2, varData_343, param_3);
      } else if (param_1.state.wrap === 2) {
        param_1.adler = varData_294(param_1.adler, param_2, varData_343, param_3);
      }
      param_1.next_in += varData_343;
      param_1.total_in += varData_343;
      return varData_343;
    };
    const varData_344 = (param_1, param_2) => {
      let varData_345 = param_1.max_chain_length;
      let varData_346 = param_1.strstart;
      let varData_347;
      let varData_348;
      let varData_349 = param_1.prev_length;
      let varData_350 = param_1.nice_match;
      const varData_351 = param_1.strstart > param_1.w_size - varData_310 ? param_1.strstart - (param_1.w_size - varData_310) : 0;
      const varData_352 = param_1.window;
      const varData_353 = param_1.w_mask;
      const varData_354 = param_1.prev;
      const varData_355 = param_1.strstart + varData_309;
      let varData_356 = varData_352[varData_346 + varData_349 - 1];
      let varData_357 = varData_352[varData_346 + varData_349];
      if (param_1.prev_length >= param_1.good_match) {
        varData_345 >>= 2;
      }
      if (varData_350 > param_1.lookahead) {
        varData_350 = param_1.lookahead;
      }
      do {
        varData_347 = param_2;
        if (varData_352[varData_347 + varData_349] !== varData_357 || varData_352[varData_347 + varData_349 - 1] !== varData_356 || varData_352[varData_347] !== varData_352[varData_346] || varData_352[++varData_347] !== varData_352[varData_346 + 1]) {
          continue;
        }
        varData_346 += 2;
        varData_347++;
        do {} while (varData_352[++varData_346] === varData_352[++varData_347] && varData_352[++varData_346] === varData_352[++varData_347] && varData_352[++varData_346] === varData_352[++varData_347] && varData_352[++varData_346] === varData_352[++varData_347] && varData_352[++varData_346] === varData_352[++varData_347] && varData_352[++varData_346] === varData_352[++varData_347] && varData_352[++varData_346] === varData_352[++varData_347] && varData_352[++varData_346] === varData_352[++varData_347] && varData_346 < varData_355);
        varData_348 = varData_309 - (varData_355 - varData_346);
        varData_346 = varData_355 - varData_309;
        if (varData_348 > varData_349) {
          param_1.match_start = param_2;
          varData_349 = varData_348;
          if (varData_348 >= varData_350) {
            break;
          }
          varData_356 = varData_352[varData_346 + varData_349 - 1];
          varData_357 = varData_352[varData_346 + varData_349];
        }
      } while ((param_2 = varData_354[param_2 & varData_353]) > varData_351 && --varData_345 !== 0);
      if (varData_349 <= param_1.lookahead) {
        return varData_349;
      }
      return param_1.lookahead;
    };
    const varData_358 = param_1 => {
      const varData_359 = param_1.w_size;
      let varData_360;
      let varData_361;
      let varData_362;
      do {
        varData_361 = param_1.window_size - param_1.lookahead - param_1.strstart;
        if (param_1.strstart >= varData_359 + (varData_359 - varData_310)) {
          param_1.window.set(param_1.window.subarray(varData_359, varData_359 + varData_359 - varData_361), 0);
          param_1.match_start -= varData_359;
          param_1.strstart -= varData_359;
          param_1.block_start -= varData_359;
          if (param_1.insert > param_1.strstart) {
            param_1.insert = param_1.strstart;
          }
          varData_329(param_1);
          varData_361 += varData_359;
        }
        if (param_1.strm.avail_in === 0) {
          break;
        }
        varData_360 = varData_342(param_1.strm, param_1.window, param_1.strstart + param_1.lookahead, varData_361);
        param_1.lookahead += varData_360;
        if (param_1.lookahead + param_1.insert >= varData_308) {
          varData_362 = param_1.strstart - param_1.insert;
          param_1.ins_h = param_1.window[varData_362];
          param_1.ins_h = varData_335(param_1, param_1.ins_h, param_1.window[varData_362 + 1]);
          while (param_1.insert) {
            param_1.ins_h = varData_335(param_1, param_1.ins_h, param_1.window[varData_362 + varData_308 - 1]);
            param_1.prev[varData_362 & param_1.w_mask] = param_1.head[param_1.ins_h];
            param_1.head[param_1.ins_h] = varData_362;
            varData_362++;
            param_1.insert--;
            if (param_1.lookahead + param_1.insert < varData_308) {
              break;
            }
          }
        }
      } while (param_1.lookahead < varData_310 && param_1.strm.avail_in !== 0);
    };
    const varData_363 = (param_1, param_2) => {
      let varData_364 = param_1.pending_buf_size - 5 > param_1.w_size ? param_1.w_size : param_1.pending_buf_size - 5;
      let varData_365;
      let varData_366;
      let varData_367;
      let varData_368 = 0;
      let varData_369 = param_1.strm.avail_in;
      do {
        varData_365 = 65535;
        varData_367 = param_1.bi_valid + 42 >> 3;
        if (param_1.strm.avail_out < varData_367) {
          break;
        }
        varData_367 = param_1.strm.avail_out - varData_367;
        varData_366 = param_1.strstart - param_1.block_start;
        if (varData_365 > varData_366 + param_1.strm.avail_in) {
          varData_365 = varData_366 + param_1.strm.avail_in;
        }
        if (varData_365 > varData_367) {
          varData_365 = varData_367;
        }
        if (varData_365 < varData_364 && (varData_365 === 0 && param_2 !== _0x4a6b69 || param_2 === _0xc15c86 || varData_365 !== varData_366 + param_1.strm.avail_in)) {
          break;
        }
        varData_368 = param_2 === _0x4a6b69 && varData_365 === varData_366 + param_1.strm.avail_in ? 1 : 0;
        _0x13193f(param_1, 0, 0, varData_368);
        param_1.pending_buf[param_1.pending - 4] = varData_365;
        param_1.pending_buf[param_1.pending - 3] = varData_365 >> 8;
        param_1.pending_buf[param_1.pending - 2] = ~varData_365;
        param_1.pending_buf[param_1.pending - 1] = ~varData_365 >> 8;
        varData_336(param_1.strm);
        if (varData_366) {
          if (varData_366 > varData_365) {
            varData_366 = varData_365;
          }
          param_1.strm.output.set(param_1.window.subarray(param_1.block_start, param_1.block_start + varData_366), param_1.strm.next_out);
          param_1.strm.next_out += varData_366;
          param_1.strm.avail_out -= varData_366;
          param_1.strm.total_out += varData_366;
          param_1.block_start += varData_366;
          varData_365 -= varData_366;
        }
        if (varData_365) {
          varData_342(param_1.strm, param_1.strm.output, param_1.strm.next_out, varData_365);
          param_1.strm.next_out += varData_365;
          param_1.strm.avail_out -= varData_365;
          param_1.strm.total_out += varData_365;
        }
      } while (varData_368 === 0);
      varData_369 -= param_1.strm.avail_in;
      if (varData_369) {
        if (varData_369 >= param_1.w_size) {
          param_1.matches = 2;
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - param_1.w_size, param_1.strm.next_in), 0);
          param_1.strstart = param_1.w_size;
          param_1.insert = param_1.strstart;
        } else {
          if (param_1.window_size - param_1.strstart <= varData_369) {
            param_1.strstart -= param_1.w_size;
            param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
            if (param_1.matches < 2) {
              param_1.matches++;
            }
            if (param_1.insert > param_1.strstart) {
              param_1.insert = param_1.strstart;
            }
          }
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - varData_369, param_1.strm.next_in), param_1.strstart);
          param_1.strstart += varData_369;
          param_1.insert += varData_369 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_369;
        }
        param_1.block_start = param_1.strstart;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      if (varData_368) {
        return varData_323;
      }
      if (param_2 !== _0xc15c86 && param_2 !== _0x4a6b69 && param_1.strm.avail_in === 0 && param_1.strstart === param_1.block_start) {
        return varData_321;
      }
      varData_367 = param_1.window_size - param_1.strstart;
      if (param_1.strm.avail_in > varData_367 && param_1.block_start >= param_1.w_size) {
        param_1.block_start -= param_1.w_size;
        param_1.strstart -= param_1.w_size;
        param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
        if (param_1.matches < 2) {
          param_1.matches++;
        }
        varData_367 += param_1.w_size;
        if (param_1.insert > param_1.strstart) {
          param_1.insert = param_1.strstart;
        }
      }
      if (varData_367 > param_1.strm.avail_in) {
        varData_367 = param_1.strm.avail_in;
      }
      if (varData_367) {
        varData_342(param_1.strm, param_1.window, param_1.strstart, varData_367);
        param_1.strstart += varData_367;
        param_1.insert += varData_367 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_367;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      varData_367 = param_1.bi_valid + 42 >> 3;
      varData_367 = param_1.pending_buf_size - varData_367 > 65535 ? 65535 : param_1.pending_buf_size - varData_367;
      varData_364 = varData_367 > param_1.w_size ? param_1.w_size : varData_367;
      varData_366 = param_1.strstart - param_1.block_start;
      if (varData_366 >= varData_364 || (varData_366 || param_2 === _0x4a6b69) && param_2 !== _0xc15c86 && param_1.strm.avail_in === 0 && varData_366 <= varData_367) {
        varData_365 = varData_366 > varData_367 ? varData_367 : varData_366;
        varData_368 = param_2 === _0x4a6b69 && param_1.strm.avail_in === 0 && varData_365 === varData_366 ? 1 : 0;
        _0x13193f(param_1, param_1.block_start, varData_365, varData_368);
        param_1.block_start += varData_365;
        varData_336(param_1.strm);
      }
      if (varData_368) {
        return varData_322;
      } else {
        return varData_320;
      }
    };
    const varData_370 = (param_1, param_2) => {
      let varData_371;
      let varData_372;
      while (true) {
        if (param_1.lookahead < varData_310) {
          varData_358(param_1);
          if (param_1.lookahead < varData_310 && param_2 === _0xc15c86) {
            return varData_320;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_371 = 0;
        if (param_1.lookahead >= varData_308) {
          param_1.ins_h = varData_335(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_308 - 1]);
          varData_371 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        if (varData_371 !== 0 && param_1.strstart - varData_371 <= param_1.w_size - varData_310) {
          param_1.match_length = varData_344(param_1, varData_371);
        }
        if (param_1.match_length >= varData_308) {
          varData_372 = _0x4f875f(param_1, param_1.strstart - param_1.match_start, param_1.match_length - varData_308);
          param_1.lookahead -= param_1.match_length;
          if (param_1.match_length <= param_1.max_lazy_match && param_1.lookahead >= varData_308) {
            param_1.match_length--;
            do {
              param_1.strstart++;
              param_1.ins_h = varData_335(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_308 - 1]);
              varData_371 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            } while (--param_1.match_length !== 0);
            param_1.strstart++;
          } else {
            param_1.strstart += param_1.match_length;
            param_1.match_length = 0;
            param_1.ins_h = param_1.window[param_1.strstart];
            param_1.ins_h = varData_335(param_1, param_1.ins_h, param_1.window[param_1.strstart + 1]);
          }
        } else {
          varData_372 = _0x4f875f(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_372) {
          varData_339(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_320;
          }
        }
      }
      param_1.insert = param_1.strstart < varData_308 - 1 ? param_1.strstart : varData_308 - 1;
      if (param_2 === _0x4a6b69) {
        varData_339(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_322;
        }
        return varData_323;
      }
      if (param_1.sym_next) {
        varData_339(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_320;
        }
      }
      return varData_321;
    };
    const varData_373 = (param_1, param_2) => {
      let varData_374;
      let varData_375;
      let varData_376;
      while (true) {
        if (param_1.lookahead < varData_310) {
          varData_358(param_1);
          if (param_1.lookahead < varData_310 && param_2 === _0xc15c86) {
            return varData_320;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_374 = 0;
        if (param_1.lookahead >= varData_308) {
          param_1.ins_h = varData_335(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_308 - 1]);
          varData_374 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        param_1.prev_length = param_1.match_length;
        param_1.prev_match = param_1.match_start;
        param_1.match_length = varData_308 - 1;
        if (varData_374 !== 0 && param_1.prev_length < param_1.max_lazy_match && param_1.strstart - varData_374 <= param_1.w_size - varData_310) {
          param_1.match_length = varData_344(param_1, varData_374);
          if (param_1.match_length <= 5 && (param_1.strategy === _0x2e8261 || param_1.match_length === varData_308 && param_1.strstart - param_1.match_start > 4096)) {
            param_1.match_length = varData_308 - 1;
          }
        }
        if (param_1.prev_length >= varData_308 && param_1.match_length <= param_1.prev_length) {
          varData_376 = param_1.strstart + param_1.lookahead - varData_308;
          varData_375 = _0x4f875f(param_1, param_1.strstart - 1 - param_1.prev_match, param_1.prev_length - varData_308);
          param_1.lookahead -= param_1.prev_length - 1;
          param_1.prev_length -= 2;
          do {
            if (++param_1.strstart <= varData_376) {
              param_1.ins_h = varData_335(param_1, param_1.ins_h, param_1.window[param_1.strstart + varData_308 - 1]);
              varData_374 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            }
          } while (--param_1.prev_length !== 0);
          param_1.match_available = 0;
          param_1.match_length = varData_308 - 1;
          param_1.strstart++;
          if (varData_375) {
            varData_339(param_1, false);
            if (param_1.strm.avail_out === 0) {
              return varData_320;
            }
          }
        } else if (param_1.match_available) {
          varData_375 = _0x4f875f(param_1, 0, param_1.window[param_1.strstart - 1]);
          if (varData_375) {
            varData_339(param_1, false);
          }
          param_1.strstart++;
          param_1.lookahead--;
          if (param_1.strm.avail_out === 0) {
            return varData_320;
          }
        } else {
          param_1.match_available = 1;
          param_1.strstart++;
          param_1.lookahead--;
        }
      }
      if (param_1.match_available) {
        varData_375 = _0x4f875f(param_1, 0, param_1.window[param_1.strstart - 1]);
        param_1.match_available = 0;
      }
      param_1.insert = param_1.strstart < varData_308 - 1 ? param_1.strstart : varData_308 - 1;
      if (param_2 === _0x4a6b69) {
        varData_339(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_322;
        }
        return varData_323;
      }
      if (param_1.sym_next) {
        varData_339(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_320;
        }
      }
      return varData_321;
    };
    const varData_377 = (param_1, param_2) => {
      let varData_378;
      let varData_379;
      let varData_380;
      let varData_381;
      const varData_382 = param_1.window;
      while (true) {
        if (param_1.lookahead <= varData_309) {
          varData_358(param_1);
          if (param_1.lookahead <= varData_309 && param_2 === _0xc15c86) {
            return varData_320;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        param_1.match_length = 0;
        if (param_1.lookahead >= varData_308 && param_1.strstart > 0) {
          varData_380 = param_1.strstart - 1;
          varData_379 = varData_382[varData_380];
          if (varData_379 === varData_382[++varData_380] && varData_379 === varData_382[++varData_380] && varData_379 === varData_382[++varData_380]) {
            varData_381 = param_1.strstart + varData_309;
            do {} while (varData_379 === varData_382[++varData_380] && varData_379 === varData_382[++varData_380] && varData_379 === varData_382[++varData_380] && varData_379 === varData_382[++varData_380] && varData_379 === varData_382[++varData_380] && varData_379 === varData_382[++varData_380] && varData_379 === varData_382[++varData_380] && varData_379 === varData_382[++varData_380] && varData_380 < varData_381);
            param_1.match_length = varData_309 - (varData_381 - varData_380);
            if (param_1.match_length > param_1.lookahead) {
              param_1.match_length = param_1.lookahead;
            }
          }
        }
        if (param_1.match_length >= varData_308) {
          varData_378 = _0x4f875f(param_1, 1, param_1.match_length - varData_308);
          param_1.lookahead -= param_1.match_length;
          param_1.strstart += param_1.match_length;
          param_1.match_length = 0;
        } else {
          varData_378 = _0x4f875f(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_378) {
          varData_339(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_320;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0x4a6b69) {
        varData_339(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_322;
        }
        return varData_323;
      }
      if (param_1.sym_next) {
        varData_339(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_320;
        }
      }
      return varData_321;
    };
    const varData_383 = (param_1, param_2) => {
      let varData_384;
      while (true) {
        if (param_1.lookahead === 0) {
          varData_358(param_1);
          if (param_1.lookahead === 0) {
            if (param_2 === _0xc15c86) {
              return varData_320;
            }
            break;
          }
        }
        param_1.match_length = 0;
        varData_384 = _0x4f875f(param_1, 0, param_1.window[param_1.strstart]);
        param_1.lookahead--;
        param_1.strstart++;
        if (varData_384) {
          varData_339(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return varData_320;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0x4a6b69) {
        varData_339(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return varData_322;
        }
        return varData_323;
      }
      if (param_1.sym_next) {
        varData_339(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return varData_320;
        }
      }
      return varData_321;
    };
    function handleAction_48(param_1, param_2, param_3, param_4, param_5) {
      this.good_length = param_1;
      this.max_lazy = param_2;
      this.nice_length = param_3;
      this.max_chain = param_4;
      this.func = param_5;
    }
    const varData_385 = [new handleAction_48(0, 0, 0, 0, varData_363), new handleAction_48(4, 4, 8, 4, varData_370), new handleAction_48(4, 5, 16, 8, varData_370), new handleAction_48(4, 6, 32, 32, varData_370), new handleAction_48(4, 4, 16, 16, varData_373), new handleAction_48(8, 16, 32, 32, varData_373), new handleAction_48(8, 16, 128, 128, varData_373), new handleAction_48(8, 32, 128, 256, varData_373), new handleAction_48(32, 128, 258, 1024, varData_373), new handleAction_48(32, 258, 258, 4096, varData_373)];
    const varData_386 = param_1 => {
      param_1.window_size = param_1.w_size * 2;
      varData_327(param_1.head);
      param_1.max_lazy_match = varData_385[param_1.level].max_lazy;
      param_1.good_match = varData_385[param_1.level].good_length;
      param_1.nice_match = varData_385[param_1.level].nice_length;
      param_1.max_chain_length = varData_385[param_1.level].max_chain;
      param_1.strstart = 0;
      param_1.block_start = 0;
      param_1.lookahead = 0;
      param_1.insert = 0;
      param_1.match_length = param_1.prev_length = varData_308 - 1;
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
      this.method = _0x46f62e;
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
      this.dyn_ltree = new Uint16Array(varData_306 * 2);
      this.dyn_dtree = new Uint16Array((varData_304 * 2 + 1) * 2);
      this.bl_tree = new Uint16Array((varData_305 * 2 + 1) * 2);
      varData_327(this.dyn_ltree);
      varData_327(this.dyn_dtree);
      varData_327(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(varData_307 + 1);
      this.heap = new Uint16Array(varData_303 * 2 + 1);
      varData_327(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(varData_303 * 2 + 1);
      varData_327(this.depth);
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
    const varData_387 = param_1 => {
      if (!param_1) {
        return 1;
      }
      const varData_388 = param_1.state;
      if (!varData_388 || varData_388.strm !== param_1 || varData_388.status !== varData_312 && varData_388.status !== varData_313 && varData_388.status !== varData_314 && varData_388.status !== varData_315 && varData_388.status !== varData_316 && varData_388.status !== varData_317 && varData_388.status !== varData_318 && varData_388.status !== varData_319) {
        return 1;
      }
      return 0;
    };
    const varData_389 = param_1 => {
      if (varData_387(param_1)) {
        return varData_325(param_1, _0x11e85a);
      }
      param_1.total_in = param_1.total_out = 0;
      param_1.data_type = _0x48c9cf;
      const varData_390 = param_1.state;
      varData_390.pending = 0;
      varData_390.pending_out = 0;
      if (varData_390.wrap < 0) {
        varData_390.wrap = -varData_390.wrap;
      }
      varData_390.status = varData_390.wrap === 2 ? varData_313 : varData_390.wrap ? varData_312 : varData_318;
      param_1.adler = varData_390.wrap === 2 ? 0 : 1;
      varData_390.last_flush = -2;
      _0x14ffae(varData_390);
      return _0x277afe;
    };
    const varData_391 = param_1 => {
      const varData_392 = varData_389(param_1);
      if (varData_392 === _0x277afe) {
        varData_386(param_1.state);
      }
      return varData_392;
    };
    const varData_393 = (param_1, param_2) => {
      if (varData_387(param_1) || param_1.state.wrap !== 2) {
        return _0x11e85a;
      }
      param_1.state.gzhead = param_2;
      return _0x277afe;
    };
    const varData_394 = (param_1, param_2, param_3, param_4, param_5, param_6) => {
      if (!param_1) {
        return _0x11e85a;
      }
      let varData_395 = 1;
      if (param_2 === _0x248a21) {
        param_2 = 6;
      }
      if (param_4 < 0) {
        varData_395 = 0;
        param_4 = -param_4;
      } else if (param_4 > 15) {
        varData_395 = 2;
        param_4 -= 16;
      }
      if (param_5 < 1 || param_5 > varData_298 || param_3 !== _0x46f62e || param_4 < 8 || param_4 > 15 || param_2 < 0 || param_2 > 9 || param_6 < 0 || param_6 > _0x5c54dd || param_4 === 8 && varData_395 !== 1) {
        return varData_325(param_1, _0x11e85a);
      }
      if (param_4 === 8) {
        param_4 = 9;
      }
      const varData_396 = new handleAction_49();
      param_1.state = varData_396;
      varData_396.strm = param_1;
      varData_396.status = varData_312;
      varData_396.wrap = varData_395;
      varData_396.gzhead = null;
      varData_396.w_bits = param_4;
      varData_396.w_size = 1 << varData_396.w_bits;
      varData_396.w_mask = varData_396.w_size - 1;
      varData_396.hash_bits = param_5 + 7;
      varData_396.hash_size = 1 << varData_396.hash_bits;
      varData_396.hash_mask = varData_396.hash_size - 1;
      varData_396.hash_shift = ~~((varData_396.hash_bits + varData_308 - 1) / varData_308);
      varData_396.window = new Uint8Array(varData_396.w_size * 2);
      varData_396.head = new Uint16Array(varData_396.hash_size);
      varData_396.prev = new Uint16Array(varData_396.w_size);
      varData_396.lit_bufsize = 1 << param_5 + 6;
      varData_396.pending_buf_size = varData_396.lit_bufsize * 4;
      varData_396.pending_buf = new Uint8Array(varData_396.pending_buf_size);
      varData_396.sym_buf = varData_396.lit_bufsize;
      varData_396.sym_end = (varData_396.lit_bufsize - 1) * 3;
      varData_396.level = param_2;
      varData_396.strategy = param_6;
      varData_396.method = param_3;
      return varData_391(param_1);
    };
    const varData_397 = (param_1, param_2) => {
      return varData_394(param_1, param_2, _0x46f62e, varData_299, varData_300, _0x5daddc);
    };
    const varData_398 = (param_1, param_2) => {
      if (varData_387(param_1) || param_2 > _0x474d81 || param_2 < 0) {
        if (param_1) {
          return varData_325(param_1, _0x11e85a);
        } else {
          return _0x11e85a;
        }
      }
      const varData_399 = param_1.state;
      if (!param_1.output || param_1.avail_in !== 0 && !param_1.input || varData_399.status === varData_319 && param_2 !== _0x4a6b69) {
        return varData_325(param_1, param_1.avail_out === 0 ? _0xf3ea72 : _0x11e85a);
      }
      const varData_400 = varData_399.last_flush;
      varData_399.last_flush = param_2;
      if (varData_399.pending !== 0) {
        varData_336(param_1);
        if (param_1.avail_out === 0) {
          varData_399.last_flush = -1;
          return _0x277afe;
        }
      } else if (param_1.avail_in === 0 && varData_326(param_2) <= varData_326(varData_400) && param_2 !== _0x4a6b69) {
        return varData_325(param_1, _0xf3ea72);
      }
      if (varData_399.status === varData_319 && param_1.avail_in !== 0) {
        return varData_325(param_1, _0xf3ea72);
      }
      if (varData_399.status === varData_312 && varData_399.wrap === 0) {
        varData_399.status = varData_318;
      }
      if (varData_399.status === varData_312) {
        let varData_401 = _0x46f62e + (varData_399.w_bits - 8 << 4) << 8;
        let varData_402 = -1;
        if (varData_399.strategy >= _0x36ce3a || varData_399.level < 2) {
          varData_402 = 0;
        } else if (varData_399.level < 6) {
          varData_402 = 1;
        } else if (varData_399.level === 6) {
          varData_402 = 2;
        } else {
          varData_402 = 3;
        }
        varData_401 |= varData_402 << 6;
        if (varData_399.strstart !== 0) {
          varData_401 |= varData_311;
        }
        varData_401 += 31 - varData_401 % 31;
        varData_341(varData_399, varData_401);
        if (varData_399.strstart !== 0) {
          varData_341(varData_399, param_1.adler >>> 16);
          varData_341(varData_399, param_1.adler & 65535);
        }
        param_1.adler = 1;
        varData_399.status = varData_318;
        varData_336(param_1);
        if (varData_399.pending !== 0) {
          varData_399.last_flush = -1;
          return _0x277afe;
        }
      }
      if (varData_399.status === varData_313) {
        param_1.adler = 0;
        varData_340(varData_399, 31);
        varData_340(varData_399, 139);
        varData_340(varData_399, 8);
        if (!varData_399.gzhead) {
          varData_340(varData_399, 0);
          varData_340(varData_399, 0);
          varData_340(varData_399, 0);
          varData_340(varData_399, 0);
          varData_340(varData_399, 0);
          varData_340(varData_399, varData_399.level === 9 ? 2 : varData_399.strategy >= _0x36ce3a || varData_399.level < 2 ? 4 : 0);
          varData_340(varData_399, varData_324);
          varData_399.status = varData_318;
          varData_336(param_1);
          if (varData_399.pending !== 0) {
            varData_399.last_flush = -1;
            return _0x277afe;
          }
        } else {
          varData_340(varData_399, (varData_399.gzhead.text ? 1 : 0) + (varData_399.gzhead.hcrc ? 2 : 0) + (!varData_399.gzhead.extra ? 0 : 4) + (!varData_399.gzhead.name ? 0 : 8) + (!varData_399.gzhead.comment ? 0 : 16));
          varData_340(varData_399, varData_399.gzhead.time & 255);
          varData_340(varData_399, varData_399.gzhead.time >> 8 & 255);
          varData_340(varData_399, varData_399.gzhead.time >> 16 & 255);
          varData_340(varData_399, varData_399.gzhead.time >> 24 & 255);
          varData_340(varData_399, varData_399.level === 9 ? 2 : varData_399.strategy >= _0x36ce3a || varData_399.level < 2 ? 4 : 0);
          varData_340(varData_399, varData_399.gzhead.os & 255);
          if (varData_399.gzhead.extra && varData_399.gzhead.extra.length) {
            varData_340(varData_399, varData_399.gzhead.extra.length & 255);
            varData_340(varData_399, varData_399.gzhead.extra.length >> 8 & 255);
          }
          if (varData_399.gzhead.hcrc) {
            param_1.adler = varData_294(param_1.adler, varData_399.pending_buf, varData_399.pending, 0);
          }
          varData_399.gzindex = 0;
          varData_399.status = varData_314;
        }
      }
      if (varData_399.status === varData_314) {
        if (varData_399.gzhead.extra) {
          let varData_403 = varData_399.pending;
          let varData_404 = (varData_399.gzhead.extra.length & 65535) - varData_399.gzindex;
          while (varData_399.pending + varData_404 > varData_399.pending_buf_size) {
            let varData_405 = varData_399.pending_buf_size - varData_399.pending;
            varData_399.pending_buf.set(varData_399.gzhead.extra.subarray(varData_399.gzindex, varData_399.gzindex + varData_405), varData_399.pending);
            varData_399.pending = varData_399.pending_buf_size;
            if (varData_399.gzhead.hcrc && varData_399.pending > varData_403) {
              param_1.adler = varData_294(param_1.adler, varData_399.pending_buf, varData_399.pending - varData_403, varData_403);
            }
            varData_399.gzindex += varData_405;
            varData_336(param_1);
            if (varData_399.pending !== 0) {
              varData_399.last_flush = -1;
              return _0x277afe;
            }
            varData_403 = 0;
            varData_404 -= varData_405;
          }
          let varData_406 = new Uint8Array(varData_399.gzhead.extra);
          varData_399.pending_buf.set(varData_406.subarray(varData_399.gzindex, varData_399.gzindex + varData_404), varData_399.pending);
          varData_399.pending += varData_404;
          if (varData_399.gzhead.hcrc && varData_399.pending > varData_403) {
            param_1.adler = varData_294(param_1.adler, varData_399.pending_buf, varData_399.pending - varData_403, varData_403);
          }
          varData_399.gzindex = 0;
        }
        varData_399.status = varData_315;
      }
      if (varData_399.status === varData_315) {
        if (varData_399.gzhead.name) {
          let varData_407 = varData_399.pending;
          let varData_408;
          do {
            if (varData_399.pending === varData_399.pending_buf_size) {
              if (varData_399.gzhead.hcrc && varData_399.pending > varData_407) {
                param_1.adler = varData_294(param_1.adler, varData_399.pending_buf, varData_399.pending - varData_407, varData_407);
              }
              varData_336(param_1);
              if (varData_399.pending !== 0) {
                varData_399.last_flush = -1;
                return _0x277afe;
              }
              varData_407 = 0;
            }
            if (varData_399.gzindex < varData_399.gzhead.name.length) {
              varData_408 = varData_399.gzhead.name.charCodeAt(varData_399.gzindex++) & 255;
            } else {
              varData_408 = 0;
            }
            varData_340(varData_399, varData_408);
          } while (varData_408 !== 0);
          if (varData_399.gzhead.hcrc && varData_399.pending > varData_407) {
            param_1.adler = varData_294(param_1.adler, varData_399.pending_buf, varData_399.pending - varData_407, varData_407);
          }
          varData_399.gzindex = 0;
        }
        varData_399.status = varData_316;
      }
      if (varData_399.status === varData_316) {
        if (varData_399.gzhead.comment) {
          let varData_409 = varData_399.pending;
          let varData_410;
          do {
            if (varData_399.pending === varData_399.pending_buf_size) {
              if (varData_399.gzhead.hcrc && varData_399.pending > varData_409) {
                param_1.adler = varData_294(param_1.adler, varData_399.pending_buf, varData_399.pending - varData_409, varData_409);
              }
              varData_336(param_1);
              if (varData_399.pending !== 0) {
                varData_399.last_flush = -1;
                return _0x277afe;
              }
              varData_409 = 0;
            }
            if (varData_399.gzindex < varData_399.gzhead.comment.length) {
              varData_410 = varData_399.gzhead.comment.charCodeAt(varData_399.gzindex++) & 255;
            } else {
              varData_410 = 0;
            }
            varData_340(varData_399, varData_410);
          } while (varData_410 !== 0);
          if (varData_399.gzhead.hcrc && varData_399.pending > varData_409) {
            param_1.adler = varData_294(param_1.adler, varData_399.pending_buf, varData_399.pending - varData_409, varData_409);
          }
        }
        varData_399.status = varData_317;
      }
      if (varData_399.status === varData_317) {
        if (varData_399.gzhead.hcrc) {
          if (varData_399.pending + 2 > varData_399.pending_buf_size) {
            varData_336(param_1);
            if (varData_399.pending !== 0) {
              varData_399.last_flush = -1;
              return _0x277afe;
            }
          }
          varData_340(varData_399, param_1.adler & 255);
          varData_340(varData_399, param_1.adler >> 8 & 255);
          param_1.adler = 0;
        }
        varData_399.status = varData_318;
        varData_336(param_1);
        if (varData_399.pending !== 0) {
          varData_399.last_flush = -1;
          return _0x277afe;
        }
      }
      if (param_1.avail_in !== 0 || varData_399.lookahead !== 0 || param_2 !== _0xc15c86 && varData_399.status !== varData_319) {
        let varData_411 = varData_399.level === 0 ? varData_363(varData_399, param_2) : varData_399.strategy === _0x36ce3a ? varData_383(varData_399, param_2) : varData_399.strategy === _0x1c3cac ? varData_377(varData_399, param_2) : varData_385[varData_399.level].func(varData_399, param_2);
        if (varData_411 === varData_322 || varData_411 === varData_323) {
          varData_399.status = varData_319;
        }
        if (varData_411 === varData_320 || varData_411 === varData_322) {
          if (param_1.avail_out === 0) {
            varData_399.last_flush = -1;
          }
          return _0x277afe;
        }
        if (varData_411 === varData_321) {
          if (param_2 === _0x57ee3c) {
            _0x543c14(varData_399);
          } else if (param_2 !== _0x474d81) {
            _0x13193f(varData_399, 0, 0, false);
            if (param_2 === _0x921001) {
              varData_327(varData_399.head);
              if (varData_399.lookahead === 0) {
                varData_399.strstart = 0;
                varData_399.block_start = 0;
                varData_399.insert = 0;
              }
            }
          }
          varData_336(param_1);
          if (param_1.avail_out === 0) {
            varData_399.last_flush = -1;
            return _0x277afe;
          }
        }
      }
      if (param_2 !== _0x4a6b69) {
        return _0x277afe;
      }
      if (varData_399.wrap <= 0) {
        return _0x144783;
      }
      if (varData_399.wrap === 2) {
        varData_340(varData_399, param_1.adler & 255);
        varData_340(varData_399, param_1.adler >> 8 & 255);
        varData_340(varData_399, param_1.adler >> 16 & 255);
        varData_340(varData_399, param_1.adler >> 24 & 255);
        varData_340(varData_399, param_1.total_in & 255);
        varData_340(varData_399, param_1.total_in >> 8 & 255);
        varData_340(varData_399, param_1.total_in >> 16 & 255);
        varData_340(varData_399, param_1.total_in >> 24 & 255);
      } else {
        varData_341(varData_399, param_1.adler >>> 16);
        varData_341(varData_399, param_1.adler & 65535);
      }
      varData_336(param_1);
      if (varData_399.wrap > 0) {
        varData_399.wrap = -varData_399.wrap;
      }
      if (varData_399.pending !== 0) {
        return _0x277afe;
      } else {
        return _0x144783;
      }
    };
    const varData_412 = param_1 => {
      if (varData_387(param_1)) {
        return _0x11e85a;
      }
      const varData_413 = param_1.state.status;
      param_1.state = null;
      if (varData_413 === varData_318) {
        return varData_325(param_1, _0x54ebf3);
      } else {
        return _0x277afe;
      }
    };
    const varData_414 = (param_1, param_2) => {
      let varData_415 = param_2.length;
      if (varData_387(param_1)) {
        return _0x11e85a;
      }
      const varData_416 = param_1.state;
      const varData_417 = varData_416.wrap;
      if (varData_417 === 2 || varData_417 === 1 && varData_416.status !== varData_312 || varData_416.lookahead) {
        return _0x11e85a;
      }
      if (varData_417 === 1) {
        param_1.adler = varData_286(param_1.adler, param_2, varData_415, 0);
      }
      varData_416.wrap = 0;
      if (varData_415 >= varData_416.w_size) {
        if (varData_417 === 0) {
          varData_327(varData_416.head);
          varData_416.strstart = 0;
          varData_416.block_start = 0;
          varData_416.insert = 0;
        }
        let varData_418 = new Uint8Array(varData_416.w_size);
        varData_418.set(param_2.subarray(varData_415 - varData_416.w_size, varData_415), 0);
        param_2 = varData_418;
        varData_415 = varData_416.w_size;
      }
      const varData_419 = param_1.avail_in;
      const varData_420 = param_1.next_in;
      const varData_421 = param_1.input;
      param_1.avail_in = varData_415;
      param_1.next_in = 0;
      param_1.input = param_2;
      varData_358(varData_416);
      while (varData_416.lookahead >= varData_308) {
        let varData_422 = varData_416.strstart;
        let varData_423 = varData_416.lookahead - (varData_308 - 1);
        do {
          varData_416.ins_h = varData_335(varData_416, varData_416.ins_h, varData_416.window[varData_422 + varData_308 - 1]);
          varData_416.prev[varData_422 & varData_416.w_mask] = varData_416.head[varData_416.ins_h];
          varData_416.head[varData_416.ins_h] = varData_422;
          varData_422++;
        } while (--varData_423);
        varData_416.strstart = varData_422;
        varData_416.lookahead = varData_308 - 1;
        varData_358(varData_416);
      }
      varData_416.strstart += varData_416.lookahead;
      varData_416.block_start = varData_416.strstart;
      varData_416.insert = varData_416.lookahead;
      varData_416.lookahead = 0;
      varData_416.match_length = varData_416.prev_length = varData_308 - 1;
      varData_416.match_available = 0;
      param_1.next_in = varData_420;
      param_1.input = varData_421;
      param_1.avail_in = varData_419;
      varData_416.wrap = varData_417;
      return _0x277afe;
    };
    var varData_424 = varData_397;
    var varData_425 = varData_394;
    var varData_426 = varData_391;
    var varData_427 = varData_389;
    var varData_428 = varData_393;
    var varData_429 = varData_398;
    var varData_430 = varData_412;
    var varData_431 = varData_414;
    var varData_432 = "pako deflate (from Nodeca project)";
    var varData_433 = {
      deflateInit: varData_424,
      deflateInit2: varData_425,
      deflateReset: varData_426,
      deflateResetKeep: varData_427,
      deflateSetHeader: varData_428,
      deflate: varData_429,
      deflateEnd: varData_430,
      deflateSetDictionary: varData_431,
      deflateInfo: varData_432
    };
    var varData_434 = varData_433;
    const varData_435 = (param_1, param_2) => {
      return Object.prototype.hasOwnProperty.call(param_1, param_2);
    };
    function handleAction_50(param_1) {
      const varData_436 = Array.prototype.slice.call(arguments, 1);
      while (varData_436.length) {
        const varData_437 = varData_436.shift();
        if (!varData_437) {
          continue;
        }
        if (typeof varData_437 !== "object") {
          throw new TypeError(varData_437 + "must be non-object");
        }
        for (const varData_438 in varData_437) {
          if (varData_435(varData_437, varData_438)) {
            param_1[varData_438] = varData_437[varData_438];
          }
        }
      }
      return param_1;
    }
    var varData_439 = param_1 => {
      let varData_440 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length; loopIdx < loopIdx_1; loopIdx++) {
        varData_440 += param_1[loopIdx].length;
      }
      const varData_441 = new Uint8Array(varData_440);
      for (let loopIdx = 0, loopIdx_1 = 0, loopIdx_2 = param_1.length; loopIdx < loopIdx_2; loopIdx++) {
        let varData_442 = param_1[loopIdx];
        varData_441.set(varData_442, loopIdx_1);
        loopIdx_1 += varData_442.length;
      }
      return varData_441;
    };
    var varData_443 = {
      assign: handleAction_50,
      flattenChunks: varData_439
    };
    var varData_444 = varData_443;
    let isEnabled = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (err) {
      isEnabled = false;
    }
    const varData_445 = new Uint8Array(256);
    for (let loopIdx = 0; loopIdx < 256; loopIdx++) {
      varData_445[loopIdx] = loopIdx >= 252 ? 6 : loopIdx >= 248 ? 5 : loopIdx >= 240 ? 4 : loopIdx >= 224 ? 3 : loopIdx >= 192 ? 2 : 1;
    }
    varData_445[254] = varData_445[254] = 1;
    var varData_446 = param_1 => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(param_1);
      }
      let varData_447;
      let varData_448;
      let varData_449;
      let varData_450;
      let varData_451;
      let varData_452 = param_1.length;
      let varData_453 = 0;
      for (varData_450 = 0; varData_450 < varData_452; varData_450++) {
        varData_448 = param_1.charCodeAt(varData_450);
        if ((varData_448 & 64512) === 55296 && varData_450 + 1 < varData_452) {
          varData_449 = param_1.charCodeAt(varData_450 + 1);
          if ((varData_449 & 64512) === 56320) {
            varData_448 = 65536 + (varData_448 - 55296 << 10) + (varData_449 - 56320);
            varData_450++;
          }
        }
        varData_453 += varData_448 < 128 ? 1 : varData_448 < 2048 ? 2 : varData_448 < 65536 ? 3 : 4;
      }
      varData_447 = new Uint8Array(varData_453);
      varData_451 = 0;
      varData_450 = 0;
      for (; varData_451 < varData_453; varData_450++) {
        varData_448 = param_1.charCodeAt(varData_450);
        if ((varData_448 & 64512) === 55296 && varData_450 + 1 < varData_452) {
          varData_449 = param_1.charCodeAt(varData_450 + 1);
          if ((varData_449 & 64512) === 56320) {
            varData_448 = 65536 + (varData_448 - 55296 << 10) + (varData_449 - 56320);
            varData_450++;
          }
        }
        if (varData_448 < 128) {
          varData_447[varData_451++] = varData_448;
        } else if (varData_448 < 2048) {
          varData_447[varData_451++] = varData_448 >>> 6 | 192;
          varData_447[varData_451++] = varData_448 & 63 | 128;
        } else if (varData_448 < 65536) {
          varData_447[varData_451++] = varData_448 >>> 12 | 224;
          varData_447[varData_451++] = varData_448 >>> 6 & 63 | 128;
          varData_447[varData_451++] = varData_448 & 63 | 128;
        } else {
          varData_447[varData_451++] = varData_448 >>> 18 | 240;
          varData_447[varData_451++] = varData_448 >>> 12 & 63 | 128;
          varData_447[varData_451++] = varData_448 >>> 6 & 63 | 128;
          varData_447[varData_451++] = varData_448 & 63 | 128;
        }
      }
      return varData_447;
    };
    const varData_454 = (param_1, param_2) => {
      if (param_2 < 65534) {
        if (param_1.subarray && isEnabled) {
          return String.fromCharCode.apply(null, param_1.length === param_2 ? param_1 : param_1.subarray(0, param_2));
        }
      }
      let varData_455 = "";
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_455 += String.fromCharCode(param_1[loopIdx]);
      }
      return varData_455;
    };
    var varData_456 = (param_1, param_2) => {
      const varData_457 = param_2 || param_1.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(param_1.subarray(0, param_2));
      }
      let varData_458;
      let varData_459;
      const varData_460 = new Array(varData_457 * 2);
      varData_459 = 0;
      varData_458 = 0;
      while (varData_458 < varData_457) {
        let varData_461 = param_1[varData_458++];
        if (varData_461 < 128) {
          varData_460[varData_459++] = varData_461;
          continue;
        }
        let varData_462 = varData_445[varData_461];
        if (varData_462 > 4) {
          varData_460[varData_459++] = 65533;
          varData_458 += varData_462 - 1;
          continue;
        }
        varData_461 &= varData_462 === 2 ? 31 : varData_462 === 3 ? 15 : 7;
        while (varData_462 > 1 && varData_458 < varData_457) {
          varData_461 = varData_461 << 6 | param_1[varData_458++] & 63;
          varData_462--;
        }
        if (varData_462 > 1) {
          varData_460[varData_459++] = 65533;
          continue;
        }
        if (varData_461 < 65536) {
          varData_460[varData_459++] = varData_461;
        } else {
          varData_461 -= 65536;
          varData_460[varData_459++] = varData_461 >> 10 & 1023 | 55296;
          varData_460[varData_459++] = varData_461 & 1023 | 56320;
        }
      }
      return varData_454(varData_460, varData_459);
    };
    var varData_463 = (param_1, param_2) => {
      param_2 = param_2 || param_1.length;
      if (param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      let varData_464 = param_2 - 1;
      while (varData_464 >= 0 && (param_1[varData_464] & 192) === 128) {
        varData_464--;
      }
      if (varData_464 < 0) {
        return param_2;
      }
      if (varData_464 === 0) {
        return param_2;
      }
      if (varData_464 + varData_445[param_1[varData_464]] > param_2) {
        return varData_464;
      } else {
        return param_2;
      }
    };
    var varData_465 = {
      string2buf: varData_446,
      buf2string: varData_456,
      utf8border: varData_463
    };
    var varData_466 = varData_465;
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
    var varData_467 = handleAction_51;
    const varData_468 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x5b7149,
      Z_SYNC_FLUSH: _0x136d67,
      Z_FULL_FLUSH: _0x39f9cf,
      Z_FINISH: _0x152c5a,
      Z_OK: _0x35c5e1,
      Z_STREAM_END: _0x282fcc,
      Z_DEFAULT_COMPRESSION: _0x58137b,
      Z_DEFAULT_STRATEGY: _0x68b233,
      Z_DEFLATED: _0x17aaa5
    } = varData_297;
    function handleAction_52(param_1) {
      var varData_469 = {
        level: _0x58137b,
        method: _0x17aaa5,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: _0x68b233
      };
      this.options = varData_444.assign(varData_469, param_1 || {});
      let varData_470 = this.options;
      if (varData_470.raw && varData_470.windowBits > 0) {
        varData_470.windowBits = -varData_470.windowBits;
      } else if (varData_470.gzip && varData_470.windowBits > 0 && varData_470.windowBits < 16) {
        varData_470.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_467();
      this.strm.avail_out = 0;
      let varData_471 = varData_434.deflateInit2(this.strm, varData_470.level, varData_470.method, varData_470.windowBits, varData_470.memLevel, varData_470.strategy);
      if (varData_471 !== _0x35c5e1) {
        throw new Error(varData_295[varData_471]);
      }
      if (varData_470.header) {
        varData_434.deflateSetHeader(this.strm, varData_470.header);
      }
      if (varData_470.dictionary) {
        let varData_472;
        if (typeof varData_470.dictionary === "string") {
          varData_472 = varData_466.string2buf(varData_470.dictionary);
        } else if (varData_468.call(varData_470.dictionary) === "[object ArrayBuffer]") {
          varData_472 = new Uint8Array(varData_470.dictionary);
        } else {
          varData_472 = varData_470.dictionary;
        }
        varData_471 = varData_434.deflateSetDictionary(this.strm, varData_472);
        if (varData_471 !== _0x35c5e1) {
          throw new Error(varData_295[varData_471]);
        }
        this._dict_set = true;
      }
    }
    handleAction_52.prototype.push = function (param_1, param_2) {
      const varData_473 = this.strm;
      const varData_474 = this.options.chunkSize;
      let varData_475;
      let varData_476;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_476 = param_2;
      } else {
        varData_476 = param_2 === true ? _0x152c5a : _0x5b7149;
      }
      if (typeof param_1 === "string") {
        varData_473.input = varData_466.string2buf(param_1);
      } else if (varData_468.call(param_1) === "[object ArrayBuffer]") {
        varData_473.input = new Uint8Array(param_1);
      } else {
        varData_473.input = param_1;
      }
      varData_473.next_in = 0;
      varData_473.avail_in = varData_473.input.length;
      while (true) {
        if (varData_473.avail_out === 0) {
          varData_473.output = new Uint8Array(varData_474);
          varData_473.next_out = 0;
          varData_473.avail_out = varData_474;
        }
        if ((varData_476 === _0x136d67 || varData_476 === _0x39f9cf) && varData_473.avail_out <= 6) {
          this.onData(varData_473.output.subarray(0, varData_473.next_out));
          varData_473.avail_out = 0;
          continue;
        }
        varData_475 = varData_434.deflate(varData_473, varData_476);
        if (varData_475 === _0x282fcc) {
          if (varData_473.next_out > 0) {
            this.onData(varData_473.output.subarray(0, varData_473.next_out));
          }
          varData_475 = varData_434.deflateEnd(this.strm);
          this.onEnd(varData_475);
          this.ended = true;
          return varData_475 === _0x35c5e1;
        }
        if (varData_473.avail_out === 0) {
          this.onData(varData_473.output);
          continue;
        }
        if (varData_476 > 0 && varData_473.next_out > 0) {
          this.onData(varData_473.output.subarray(0, varData_473.next_out));
          varData_473.avail_out = 0;
          continue;
        }
        if (varData_473.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_52.prototype.onData = function (param_1) {
      this.chunks.push(param_1);
    };
    handleAction_52.prototype.onEnd = function (param_1) {
      if (param_1 === _0x35c5e1) {
        this.result = varData_444.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_53(param_1, param_2) {
      const varData_477 = new handleAction_52(param_2);
      varData_477.push(param_1, true);
      if (varData_477.err) {
        throw varData_477.msg || varData_295[varData_477.err];
      }
      return varData_477.result;
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
    var varData_478 = handleAction_52;
    var varData_479 = handleAction_53;
    var varData_480 = handleAction_54;
    var varData_481 = handleAction_55;
    var varData_482 = varData_297;
    var varData_483 = {
      Deflate: varData_478,
      deflate: varData_479,
      deflateRaw: varData_480,
      gzip: varData_481,
      constants: varData_482
    };
    var varData_484 = varData_483;
    const varData_485 = 16209;
    const varData_486 = 16191;
    var varData_487 = function _0x41927a(param_1, param_2) {
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
      let varData_511;
      const varData_512 = param_1.state;
      varData_488 = param_1.next_in;
      varData_510 = param_1.input;
      varData_489 = varData_488 + (param_1.avail_in - 5);
      varData_490 = param_1.next_out;
      varData_511 = param_1.output;
      varData_491 = varData_490 - (param_2 - param_1.avail_out);
      varData_492 = varData_490 + (param_1.avail_out - 257);
      varData_493 = varData_512.dmax;
      varData_494 = varData_512.wsize;
      varData_495 = varData_512.whave;
      varData_496 = varData_512.wnext;
      varData_497 = varData_512.window;
      varData_498 = varData_512.hold;
      varData_499 = varData_512.bits;
      varData_500 = varData_512.lencode;
      varData_501 = varData_512.distcode;
      varData_502 = (1 << varData_512.lenbits) - 1;
      varData_503 = (1 << varData_512.distbits) - 1;
      _0x2bb425: do {
        if (varData_499 < 15) {
          varData_498 += varData_510[varData_488++] << varData_499;
          varData_499 += 8;
          varData_498 += varData_510[varData_488++] << varData_499;
          varData_499 += 8;
        }
        varData_504 = varData_500[varData_498 & varData_502];
        _0x204a61: while (true) {
          varData_505 = varData_504 >>> 24;
          varData_498 >>>= varData_505;
          varData_499 -= varData_505;
          varData_505 = varData_504 >>> 16 & 255;
          if (varData_505 === 0) {
            varData_511[varData_490++] = varData_504 & 65535;
          } else if (varData_505 & 16) {
            varData_506 = varData_504 & 65535;
            varData_505 &= 15;
            if (varData_505) {
              if (varData_499 < varData_505) {
                varData_498 += varData_510[varData_488++] << varData_499;
                varData_499 += 8;
              }
              varData_506 += varData_498 & (1 << varData_505) - 1;
              varData_498 >>>= varData_505;
              varData_499 -= varData_505;
            }
            if (varData_499 < 15) {
              varData_498 += varData_510[varData_488++] << varData_499;
              varData_499 += 8;
              varData_498 += varData_510[varData_488++] << varData_499;
              varData_499 += 8;
            }
            varData_504 = varData_501[varData_498 & varData_503];
            _0xfee13b: while (true) {
              varData_505 = varData_504 >>> 24;
              varData_498 >>>= varData_505;
              varData_499 -= varData_505;
              varData_505 = varData_504 >>> 16 & 255;
              if (varData_505 & 16) {
                varData_507 = varData_504 & 65535;
                varData_505 &= 15;
                if (varData_499 < varData_505) {
                  varData_498 += varData_510[varData_488++] << varData_499;
                  varData_499 += 8;
                  if (varData_499 < varData_505) {
                    varData_498 += varData_510[varData_488++] << varData_499;
                    varData_499 += 8;
                  }
                }
                varData_507 += varData_498 & (1 << varData_505) - 1;
                if (varData_507 > varData_493) {
                  param_1.msg = "invalid distance too far back";
                  varData_512.mode = varData_485;
                  break _0x2bb425;
                }
                varData_498 >>>= varData_505;
                varData_499 -= varData_505;
                varData_505 = varData_490 - varData_491;
                if (varData_507 > varData_505) {
                  varData_505 = varData_507 - varData_505;
                  if (varData_505 > varData_495) {
                    if (varData_512.sane) {
                      param_1.msg = "invalid distance too far back";
                      varData_512.mode = varData_485;
                      break _0x2bb425;
                    }
                  }
                  varData_508 = 0;
                  varData_509 = varData_497;
                  if (varData_496 === 0) {
                    varData_508 += varData_494 - varData_505;
                    if (varData_505 < varData_506) {
                      varData_506 -= varData_505;
                      do {
                        varData_511[varData_490++] = varData_497[varData_508++];
                      } while (--varData_505);
                      varData_508 = varData_490 - varData_507;
                      varData_509 = varData_511;
                    }
                  } else if (varData_496 < varData_505) {
                    varData_508 += varData_494 + varData_496 - varData_505;
                    varData_505 -= varData_496;
                    if (varData_505 < varData_506) {
                      varData_506 -= varData_505;
                      do {
                        varData_511[varData_490++] = varData_497[varData_508++];
                      } while (--varData_505);
                      varData_508 = 0;
                      if (varData_496 < varData_506) {
                        varData_505 = varData_496;
                        varData_506 -= varData_505;
                        do {
                          varData_511[varData_490++] = varData_497[varData_508++];
                        } while (--varData_505);
                        varData_508 = varData_490 - varData_507;
                        varData_509 = varData_511;
                      }
                    }
                  } else {
                    varData_508 += varData_496 - varData_505;
                    if (varData_505 < varData_506) {
                      varData_506 -= varData_505;
                      do {
                        varData_511[varData_490++] = varData_497[varData_508++];
                      } while (--varData_505);
                      varData_508 = varData_490 - varData_507;
                      varData_509 = varData_511;
                    }
                  }
                  while (varData_506 > 2) {
                    varData_511[varData_490++] = varData_509[varData_508++];
                    varData_511[varData_490++] = varData_509[varData_508++];
                    varData_511[varData_490++] = varData_509[varData_508++];
                    varData_506 -= 3;
                  }
                  if (varData_506) {
                    varData_511[varData_490++] = varData_509[varData_508++];
                    if (varData_506 > 1) {
                      varData_511[varData_490++] = varData_509[varData_508++];
                    }
                  }
                } else {
                  varData_508 = varData_490 - varData_507;
                  do {
                    varData_511[varData_490++] = varData_511[varData_508++];
                    varData_511[varData_490++] = varData_511[varData_508++];
                    varData_511[varData_490++] = varData_511[varData_508++];
                    varData_506 -= 3;
                  } while (varData_506 > 2);
                  if (varData_506) {
                    varData_511[varData_490++] = varData_511[varData_508++];
                    if (varData_506 > 1) {
                      varData_511[varData_490++] = varData_511[varData_508++];
                    }
                  }
                }
              } else if ((varData_505 & 64) === 0) {
                varData_504 = varData_501[(varData_504 & 65535) + (varData_498 & (1 << varData_505) - 1)];
                continue _0xfee13b;
              } else {
                param_1.msg = "invalid distance code";
                varData_512.mode = varData_485;
                break _0x2bb425;
              }
              break;
            }
          } else if ((varData_505 & 64) === 0) {
            varData_504 = varData_500[(varData_504 & 65535) + (varData_498 & (1 << varData_505) - 1)];
            continue _0x204a61;
          } else if (varData_505 & 32) {
            varData_512.mode = varData_486;
            break _0x2bb425;
          } else {
            param_1.msg = "invalid literal/length code";
            varData_512.mode = varData_485;
            break _0x2bb425;
          }
          break;
        }
      } while (varData_488 < varData_489 && varData_490 < varData_492);
      varData_506 = varData_499 >> 3;
      varData_488 -= varData_506;
      varData_499 -= varData_506 << 3;
      varData_498 &= (1 << varData_499) - 1;
      param_1.next_in = varData_488;
      param_1.next_out = varData_490;
      param_1.avail_in = varData_488 < varData_489 ? 5 + (varData_489 - varData_488) : 5 - (varData_488 - varData_489);
      param_1.avail_out = varData_490 < varData_492 ? 257 + (varData_492 - varData_490) : 257 - (varData_490 - varData_492);
      varData_512.hold = varData_498;
      varData_512.bits = varData_499;
      return;
    };
    const varData_513 = 15;
    const varData_514 = 852;
    const varData_515 = 592;
    const varData_516 = 0;
    const varData_517 = 1;
    const varData_518 = 2;
    const varData_519 = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const varData_520 = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const varData_521 = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const varData_522 = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    const varData_523 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
      const varData_524 = param_8.bits;
      let varData_525 = 0;
      let varData_526 = 0;
      let varData_527 = 0;
      let varData_528 = 0;
      let varData_529 = 0;
      let varData_530 = 0;
      let varData_531 = 0;
      let varData_532 = 0;
      let varData_533 = 0;
      let varData_534 = 0;
      let varData_535;
      let varData_536;
      let varData_537;
      let varData_538;
      let varData_539;
      let varData_540 = null;
      let varData_541;
      const varData_542 = new Uint16Array(varData_513 + 1);
      const varData_543 = new Uint16Array(varData_513 + 1);
      let varData_544 = null;
      let varData_545;
      let varData_546;
      let varData_547;
      for (varData_525 = 0; varData_525 <= varData_513; varData_525++) {
        varData_542[varData_525] = 0;
      }
      for (varData_526 = 0; varData_526 < param_4; varData_526++) {
        varData_542[param_2[param_3 + varData_526]]++;
      }
      varData_529 = varData_524;
      for (varData_528 = varData_513; varData_528 >= 1; varData_528--) {
        if (varData_542[varData_528] !== 0) {
          break;
        }
      }
      if (varData_529 > varData_528) {
        varData_529 = varData_528;
      }
      if (varData_528 === 0) {
        param_5[param_6++] = 20971520;
        param_5[param_6++] = 20971520;
        param_8.bits = 1;
        return 0;
      }
      for (varData_527 = 1; varData_527 < varData_528; varData_527++) {
        if (varData_542[varData_527] !== 0) {
          break;
        }
      }
      if (varData_529 < varData_527) {
        varData_529 = varData_527;
      }
      varData_532 = 1;
      for (varData_525 = 1; varData_525 <= varData_513; varData_525++) {
        varData_532 <<= 1;
        varData_532 -= varData_542[varData_525];
        if (varData_532 < 0) {
          return -1;
        }
      }
      if (varData_532 > 0 && (param_1 === varData_516 || varData_528 !== 1)) {
        return -1;
      }
      varData_543[1] = 0;
      for (varData_525 = 1; varData_525 < varData_513; varData_525++) {
        varData_543[varData_525 + 1] = varData_543[varData_525] + varData_542[varData_525];
      }
      for (varData_526 = 0; varData_526 < param_4; varData_526++) {
        if (param_2[param_3 + varData_526] !== 0) {
          param_7[varData_543[param_2[param_3 + varData_526]]++] = varData_526;
        }
      }
      if (param_1 === varData_516) {
        varData_540 = varData_544 = param_7;
        varData_541 = 20;
      } else if (param_1 === varData_517) {
        varData_540 = varData_519;
        varData_544 = varData_520;
        varData_541 = 257;
      } else {
        varData_540 = varData_521;
        varData_544 = varData_522;
        varData_541 = 0;
      }
      varData_534 = 0;
      varData_526 = 0;
      varData_525 = varData_527;
      varData_539 = param_6;
      varData_530 = varData_529;
      varData_531 = 0;
      varData_537 = -1;
      varData_533 = 1 << varData_529;
      varData_538 = varData_533 - 1;
      if (param_1 === varData_517 && varData_533 > varData_514 || param_1 === varData_518 && varData_533 > varData_515) {
        return 1;
      }
      while (true) {
        varData_545 = varData_525 - varData_531;
        if (param_7[varData_526] + 1 < varData_541) {
          varData_546 = 0;
          varData_547 = param_7[varData_526];
        } else if (param_7[varData_526] >= varData_541) {
          varData_546 = varData_544[param_7[varData_526] - varData_541];
          varData_547 = varData_540[param_7[varData_526] - varData_541];
        } else {
          varData_546 = 96;
          varData_547 = 0;
        }
        varData_535 = 1 << varData_525 - varData_531;
        varData_536 = 1 << varData_530;
        varData_527 = varData_536;
        do {
          varData_536 -= varData_535;
          param_5[varData_539 + (varData_534 >> varData_531) + varData_536] = varData_545 << 24 | varData_546 << 16 | varData_547 | 0;
        } while (varData_536 !== 0);
        varData_535 = 1 << varData_525 - 1;
        while (varData_534 & varData_535) {
          varData_535 >>= 1;
        }
        if (varData_535 !== 0) {
          varData_534 &= varData_535 - 1;
          varData_534 += varData_535;
        } else {
          varData_534 = 0;
        }
        varData_526++;
        if (--varData_542[varData_525] === 0) {
          if (varData_525 === varData_528) {
            break;
          }
          varData_525 = param_2[param_3 + param_7[varData_526]];
        }
        if (varData_525 > varData_529 && (varData_534 & varData_538) !== varData_537) {
          if (varData_531 === 0) {
            varData_531 = varData_529;
          }
          varData_539 += varData_527;
          varData_530 = varData_525 - varData_531;
          varData_532 = 1 << varData_530;
          while (varData_530 + varData_531 < varData_528) {
            varData_532 -= varData_542[varData_530 + varData_531];
            if (varData_532 <= 0) {
              break;
            }
            varData_530++;
            varData_532 <<= 1;
          }
          varData_533 += 1 << varData_530;
          if (param_1 === varData_517 && varData_533 > varData_514 || param_1 === varData_518 && varData_533 > varData_515) {
            return 1;
          }
          varData_537 = varData_534 & varData_538;
          param_5[varData_537] = varData_529 << 24 | varData_530 << 16 | varData_539 - param_6 | 0;
        }
      }
      if (varData_534 !== 0) {
        param_5[varData_539 + varData_534] = varData_525 - varData_531 << 24 | 4194304 | 0;
      }
      param_8.bits = varData_529;
      return 0;
    };
    var varData_548 = varData_523;
    const varData_549 = 0;
    const varData_550 = 1;
    const varData_551 = 2;
    const {
      Z_FINISH: _0x2434be,
      Z_BLOCK: _0x23633f,
      Z_TREES: _0x58d700,
      Z_OK: _0x2b5a32,
      Z_STREAM_END: _0x395226,
      Z_NEED_DICT: _0x4c079a,
      Z_STREAM_ERROR: _0x2e996f,
      Z_DATA_ERROR: _0x21c01f,
      Z_MEM_ERROR: _0x594cdd,
      Z_BUF_ERROR: _0x515c4d,
      Z_DEFLATED: _0x20ab65
    } = varData_297;
    const varData_552 = 16180;
    const varData_553 = 16181;
    const varData_554 = 16182;
    const varData_555 = 16183;
    const varData_556 = 16184;
    const varData_557 = 16185;
    const varData_558 = 16186;
    const varData_559 = 16187;
    const varData_560 = 16188;
    const varData_561 = 16189;
    const varData_562 = 16190;
    const varData_563 = 16191;
    const varData_564 = 16192;
    const varData_565 = 16193;
    const varData_566 = 16194;
    const varData_567 = 16195;
    const varData_568 = 16196;
    const varData_569 = 16197;
    const varData_570 = 16198;
    const varData_571 = 16199;
    const varData_572 = 16200;
    const varData_573 = 16201;
    const varData_574 = 16202;
    const varData_575 = 16203;
    const varData_576 = 16204;
    const varData_577 = 16205;
    const varData_578 = 16206;
    const varData_579 = 16207;
    const varData_580 = 16208;
    const varData_581 = 16209;
    const varData_582 = 16210;
    const varData_583 = 16211;
    const varData_584 = 852;
    const varData_585 = 592;
    const varData_586 = 15;
    const varData_587 = varData_586;
    const varData_588 = param_1 => {
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
    const varData_589 = param_1 => {
      if (!param_1) {
        return 1;
      }
      const varData_590 = param_1.state;
      if (!varData_590 || varData_590.strm !== param_1 || varData_590.mode < varData_552 || varData_590.mode > varData_583) {
        return 1;
      }
      return 0;
    };
    const varData_591 = param_1 => {
      if (varData_589(param_1)) {
        return _0x2e996f;
      }
      const varData_592 = param_1.state;
      param_1.total_in = param_1.total_out = varData_592.total = 0;
      param_1.msg = "";
      if (varData_592.wrap) {
        param_1.adler = varData_592.wrap & 1;
      }
      varData_592.mode = varData_552;
      varData_592.last = 0;
      varData_592.havedict = 0;
      varData_592.flags = -1;
      varData_592.dmax = 32768;
      varData_592.head = null;
      varData_592.hold = 0;
      varData_592.bits = 0;
      varData_592.lencode = varData_592.lendyn = new Int32Array(varData_584);
      varData_592.distcode = varData_592.distdyn = new Int32Array(varData_585);
      varData_592.sane = 1;
      varData_592.back = -1;
      return _0x2b5a32;
    };
    const varData_593 = param_1 => {
      if (varData_589(param_1)) {
        return _0x2e996f;
      }
      const varData_594 = param_1.state;
      varData_594.wsize = 0;
      varData_594.whave = 0;
      varData_594.wnext = 0;
      return varData_591(param_1);
    };
    const varData_595 = (param_1, param_2) => {
      let varData_596;
      if (varData_589(param_1)) {
        return _0x2e996f;
      }
      const varData_597 = param_1.state;
      if (param_2 < 0) {
        varData_596 = 0;
        param_2 = -param_2;
      } else {
        varData_596 = (param_2 >> 4) + 5;
        if (param_2 < 48) {
          param_2 &= 15;
        }
      }
      if (param_2 && (param_2 < 8 || param_2 > 15)) {
        return _0x2e996f;
      }
      if (varData_597.window !== null && varData_597.wbits !== param_2) {
        varData_597.window = null;
      }
      varData_597.wrap = varData_596;
      varData_597.wbits = param_2;
      return varData_593(param_1);
    };
    const varData_598 = (param_1, param_2) => {
      if (!param_1) {
        return _0x2e996f;
      }
      const varData_599 = new handleAction_56();
      param_1.state = varData_599;
      varData_599.strm = param_1;
      varData_599.window = null;
      varData_599.mode = varData_552;
      const varData_600 = varData_595(param_1, param_2);
      if (varData_600 !== _0x2b5a32) {
        param_1.state = null;
      }
      return varData_600;
    };
    const varData_601 = param_1 => {
      return varData_598(param_1, varData_587);
    };
    let isEnabled_1 = true;
    let varData_602;
    let varData_603;
    const varData_604 = param_1 => {
      if (isEnabled_1) {
        varData_602 = new Int32Array(512);
        varData_603 = new Int32Array(32);
        let varData_605 = 0;
        while (varData_605 < 144) {
          param_1.lens[varData_605++] = 8;
        }
        while (varData_605 < 256) {
          param_1.lens[varData_605++] = 9;
        }
        while (varData_605 < 280) {
          param_1.lens[varData_605++] = 7;
        }
        while (varData_605 < 288) {
          param_1.lens[varData_605++] = 8;
        }
        varData_548(varData_550, param_1.lens, 0, 288, varData_602, 0, param_1.work, {
          bits: 9
        });
        varData_605 = 0;
        while (varData_605 < 32) {
          param_1.lens[varData_605++] = 5;
        }
        varData_548(varData_551, param_1.lens, 0, 32, varData_603, 0, param_1.work, {
          bits: 5
        });
        isEnabled_1 = false;
      }
      param_1.lencode = varData_602;
      param_1.lenbits = 9;
      param_1.distcode = varData_603;
      param_1.distbits = 5;
    };
    const varData_606 = (param_1, param_2, param_3, param_4) => {
      let varData_607;
      const varData_608 = param_1.state;
      if (varData_608.window === null) {
        varData_608.wsize = 1 << varData_608.wbits;
        varData_608.wnext = 0;
        varData_608.whave = 0;
        varData_608.window = new Uint8Array(varData_608.wsize);
      }
      if (param_4 >= varData_608.wsize) {
        varData_608.window.set(param_2.subarray(param_3 - varData_608.wsize, param_3), 0);
        varData_608.wnext = 0;
        varData_608.whave = varData_608.wsize;
      } else {
        varData_607 = varData_608.wsize - varData_608.wnext;
        if (varData_607 > param_4) {
          varData_607 = param_4;
        }
        varData_608.window.set(param_2.subarray(param_3 - param_4, param_3 - param_4 + varData_607), varData_608.wnext);
        param_4 -= varData_607;
        if (param_4) {
          varData_608.window.set(param_2.subarray(param_3 - param_4, param_3), 0);
          varData_608.wnext = param_4;
          varData_608.whave = varData_608.wsize;
        } else {
          varData_608.wnext += varData_607;
          if (varData_608.wnext === varData_608.wsize) {
            varData_608.wnext = 0;
          }
          if (varData_608.whave < varData_608.wsize) {
            varData_608.whave += varData_607;
          }
        }
      }
      return 0;
    };
    const varData_609 = (param_1, param_2) => {
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
      let varData_623;
      let varData_624 = 0;
      let varData_625;
      let varData_626;
      let varData_627;
      let varData_628;
      let varData_629;
      let varData_630;
      let varData_631;
      let varData_632;
      const varData_633 = new Uint8Array(4);
      let varData_634;
      let varData_635;
      const varData_636 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (varData_589(param_1) || !param_1.output || !param_1.input && param_1.avail_in !== 0) {
        return _0x2e996f;
      }
      varData_610 = param_1.state;
      if (varData_610.mode === varData_563) {
        varData_610.mode = varData_564;
      }
      varData_614 = param_1.next_out;
      varData_612 = param_1.output;
      varData_616 = param_1.avail_out;
      varData_613 = param_1.next_in;
      varData_611 = param_1.input;
      varData_615 = param_1.avail_in;
      varData_617 = varData_610.hold;
      varData_618 = varData_610.bits;
      varData_619 = varData_615;
      varData_620 = varData_616;
      varData_632 = _0x2b5a32;
      _0x27fd91: while (true) {
        switch (varData_610.mode) {
          case varData_552:
            if (varData_610.wrap === 0) {
              varData_610.mode = varData_564;
              break;
            }
            while (varData_618 < 16) {
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_615--;
              varData_617 += varData_611[varData_613++] << varData_618;
              varData_618 += 8;
            }
            if (varData_610.wrap & 2 && varData_617 === 35615) {
              if (varData_610.wbits === 0) {
                varData_610.wbits = 15;
              }
              varData_610.check = 0;
              varData_633[0] = varData_617 & 255;
              varData_633[1] = varData_617 >>> 8 & 255;
              varData_610.check = varData_294(varData_610.check, varData_633, 2, 0);
              varData_617 = 0;
              varData_618 = 0;
              varData_610.mode = varData_553;
              break;
            }
            if (varData_610.head) {
              varData_610.head.done = false;
            }
            if (!(varData_610.wrap & 1) || (((varData_617 & 255) << 8) + (varData_617 >> 8)) % 31) {
              param_1.msg = "incorrect header check";
              varData_610.mode = varData_581;
              break;
            }
            if ((varData_617 & 15) !== _0x20ab65) {
              param_1.msg = "unknown compression method";
              varData_610.mode = varData_581;
              break;
            }
            varData_617 >>>= 4;
            varData_618 -= 4;
            varData_631 = (varData_617 & 15) + 8;
            if (varData_610.wbits === 0) {
              varData_610.wbits = varData_631;
            }
            if (varData_631 > 15 || varData_631 > varData_610.wbits) {
              param_1.msg = "invalid window size";
              varData_610.mode = varData_581;
              break;
            }
            varData_610.dmax = 1 << varData_610.wbits;
            varData_610.flags = 0;
            param_1.adler = varData_610.check = 1;
            varData_610.mode = varData_617 & 512 ? varData_561 : varData_563;
            varData_617 = 0;
            varData_618 = 0;
            break;
          case varData_553:
            while (varData_618 < 16) {
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_615--;
              varData_617 += varData_611[varData_613++] << varData_618;
              varData_618 += 8;
            }
            varData_610.flags = varData_617;
            if ((varData_610.flags & 255) !== _0x20ab65) {
              param_1.msg = "unknown compression method";
              varData_610.mode = varData_581;
              break;
            }
            if (varData_610.flags & 57344) {
              param_1.msg = "unknown header flags set";
              varData_610.mode = varData_581;
              break;
            }
            if (varData_610.head) {
              varData_610.head.text = varData_617 >> 8 & 1;
            }
            if (varData_610.flags & 512 && varData_610.wrap & 4) {
              varData_633[0] = varData_617 & 255;
              varData_633[1] = varData_617 >>> 8 & 255;
              varData_610.check = varData_294(varData_610.check, varData_633, 2, 0);
            }
            varData_617 = 0;
            varData_618 = 0;
            varData_610.mode = varData_554;
          case varData_554:
            while (varData_618 < 32) {
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_615--;
              varData_617 += varData_611[varData_613++] << varData_618;
              varData_618 += 8;
            }
            if (varData_610.head) {
              varData_610.head.time = varData_617;
            }
            if (varData_610.flags & 512 && varData_610.wrap & 4) {
              varData_633[0] = varData_617 & 255;
              varData_633[1] = varData_617 >>> 8 & 255;
              varData_633[2] = varData_617 >>> 16 & 255;
              varData_633[3] = varData_617 >>> 24 & 255;
              varData_610.check = varData_294(varData_610.check, varData_633, 4, 0);
            }
            varData_617 = 0;
            varData_618 = 0;
            varData_610.mode = varData_555;
          case varData_555:
            while (varData_618 < 16) {
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_615--;
              varData_617 += varData_611[varData_613++] << varData_618;
              varData_618 += 8;
            }
            if (varData_610.head) {
              varData_610.head.xflags = varData_617 & 255;
              varData_610.head.os = varData_617 >> 8;
            }
            if (varData_610.flags & 512 && varData_610.wrap & 4) {
              varData_633[0] = varData_617 & 255;
              varData_633[1] = varData_617 >>> 8 & 255;
              varData_610.check = varData_294(varData_610.check, varData_633, 2, 0);
            }
            varData_617 = 0;
            varData_618 = 0;
            varData_610.mode = varData_556;
          case varData_556:
            if (varData_610.flags & 1024) {
              while (varData_618 < 16) {
                if (varData_615 === 0) {
                  break _0x27fd91;
                }
                varData_615--;
                varData_617 += varData_611[varData_613++] << varData_618;
                varData_618 += 8;
              }
              varData_610.length = varData_617;
              if (varData_610.head) {
                varData_610.head.extra_len = varData_617;
              }
              if (varData_610.flags & 512 && varData_610.wrap & 4) {
                varData_633[0] = varData_617 & 255;
                varData_633[1] = varData_617 >>> 8 & 255;
                varData_610.check = varData_294(varData_610.check, varData_633, 2, 0);
              }
              varData_617 = 0;
              varData_618 = 0;
            } else if (varData_610.head) {
              varData_610.head.extra = null;
            }
            varData_610.mode = varData_557;
          case varData_557:
            if (varData_610.flags & 1024) {
              varData_621 = varData_610.length;
              if (varData_621 > varData_615) {
                varData_621 = varData_615;
              }
              if (varData_621) {
                if (varData_610.head) {
                  varData_631 = varData_610.head.extra_len - varData_610.length;
                  if (!varData_610.head.extra) {
                    varData_610.head.extra = new Uint8Array(varData_610.head.extra_len);
                  }
                  varData_610.head.extra.set(varData_611.subarray(varData_613, varData_613 + varData_621), varData_631);
                }
                if (varData_610.flags & 512 && varData_610.wrap & 4) {
                  varData_610.check = varData_294(varData_610.check, varData_611, varData_621, varData_613);
                }
                varData_615 -= varData_621;
                varData_613 += varData_621;
                varData_610.length -= varData_621;
              }
              if (varData_610.length) {
                break _0x27fd91;
              }
            }
            varData_610.length = 0;
            varData_610.mode = varData_558;
          case varData_558:
            if (varData_610.flags & 2048) {
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_621 = 0;
              do {
                varData_631 = varData_611[varData_613 + varData_621++];
                if (varData_610.head && varData_631 && varData_610.length < 65536) {
                  varData_610.head.name += String.fromCharCode(varData_631);
                }
              } while (varData_631 && varData_621 < varData_615);
              if (varData_610.flags & 512 && varData_610.wrap & 4) {
                varData_610.check = varData_294(varData_610.check, varData_611, varData_621, varData_613);
              }
              varData_615 -= varData_621;
              varData_613 += varData_621;
              if (varData_631) {
                break _0x27fd91;
              }
            } else if (varData_610.head) {
              varData_610.head.name = null;
            }
            varData_610.length = 0;
            varData_610.mode = varData_559;
          case varData_559:
            if (varData_610.flags & 4096) {
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_621 = 0;
              do {
                varData_631 = varData_611[varData_613 + varData_621++];
                if (varData_610.head && varData_631 && varData_610.length < 65536) {
                  varData_610.head.comment += String.fromCharCode(varData_631);
                }
              } while (varData_631 && varData_621 < varData_615);
              if (varData_610.flags & 512 && varData_610.wrap & 4) {
                varData_610.check = varData_294(varData_610.check, varData_611, varData_621, varData_613);
              }
              varData_615 -= varData_621;
              varData_613 += varData_621;
              if (varData_631) {
                break _0x27fd91;
              }
            } else if (varData_610.head) {
              varData_610.head.comment = null;
            }
            varData_610.mode = varData_560;
          case varData_560:
            if (varData_610.flags & 512) {
              while (varData_618 < 16) {
                if (varData_615 === 0) {
                  break _0x27fd91;
                }
                varData_615--;
                varData_617 += varData_611[varData_613++] << varData_618;
                varData_618 += 8;
              }
              if (varData_610.wrap & 4 && varData_617 !== (varData_610.check & 65535)) {
                param_1.msg = "header crc mismatch";
                varData_610.mode = varData_581;
                break;
              }
              varData_617 = 0;
              varData_618 = 0;
            }
            if (varData_610.head) {
              varData_610.head.hcrc = varData_610.flags >> 9 & 1;
              varData_610.head.done = true;
            }
            param_1.adler = varData_610.check = 0;
            varData_610.mode = varData_563;
            break;
          case varData_561:
            while (varData_618 < 32) {
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_615--;
              varData_617 += varData_611[varData_613++] << varData_618;
              varData_618 += 8;
            }
            param_1.adler = varData_610.check = varData_588(varData_617);
            varData_617 = 0;
            varData_618 = 0;
            varData_610.mode = varData_562;
          case varData_562:
            if (varData_610.havedict === 0) {
              param_1.next_out = varData_614;
              param_1.avail_out = varData_616;
              param_1.next_in = varData_613;
              param_1.avail_in = varData_615;
              varData_610.hold = varData_617;
              varData_610.bits = varData_618;
              return _0x4c079a;
            }
            param_1.adler = varData_610.check = 1;
            varData_610.mode = varData_563;
          case varData_563:
            if (param_2 === _0x23633f || param_2 === _0x58d700) {
              break _0x27fd91;
            }
          case varData_564:
            if (varData_610.last) {
              varData_617 >>>= varData_618 & 7;
              varData_618 -= varData_618 & 7;
              varData_610.mode = varData_578;
              break;
            }
            while (varData_618 < 3) {
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_615--;
              varData_617 += varData_611[varData_613++] << varData_618;
              varData_618 += 8;
            }
            varData_610.last = varData_617 & 1;
            varData_617 >>>= 1;
            varData_618 -= 1;
            switch (varData_617 & 3) {
              case 0:
                varData_610.mode = varData_565;
                break;
              case 1:
                varData_604(varData_610);
                varData_610.mode = varData_571;
                if (param_2 === _0x58d700) {
                  varData_617 >>>= 2;
                  varData_618 -= 2;
                  break _0x27fd91;
                }
                break;
              case 2:
                varData_610.mode = varData_568;
                break;
              case 3:
                param_1.msg = "invalid block type";
                varData_610.mode = varData_581;
            }
            varData_617 >>>= 2;
            varData_618 -= 2;
            break;
          case varData_565:
            varData_617 >>>= varData_618 & 7;
            varData_618 -= varData_618 & 7;
            while (varData_618 < 32) {
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_615--;
              varData_617 += varData_611[varData_613++] << varData_618;
              varData_618 += 8;
            }
            if ((varData_617 & 65535) !== (varData_617 >>> 16 ^ 65535)) {
              param_1.msg = "invalid stored block lengths";
              varData_610.mode = varData_581;
              break;
            }
            varData_610.length = varData_617 & 65535;
            varData_617 = 0;
            varData_618 = 0;
            varData_610.mode = varData_566;
            if (param_2 === _0x58d700) {
              break _0x27fd91;
            }
          case varData_566:
            varData_610.mode = varData_567;
          case varData_567:
            varData_621 = varData_610.length;
            if (varData_621) {
              if (varData_621 > varData_615) {
                varData_621 = varData_615;
              }
              if (varData_621 > varData_616) {
                varData_621 = varData_616;
              }
              if (varData_621 === 0) {
                break _0x27fd91;
              }
              varData_612.set(varData_611.subarray(varData_613, varData_613 + varData_621), varData_614);
              varData_615 -= varData_621;
              varData_613 += varData_621;
              varData_616 -= varData_621;
              varData_614 += varData_621;
              varData_610.length -= varData_621;
              break;
            }
            varData_610.mode = varData_563;
            break;
          case varData_568:
            while (varData_618 < 14) {
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_615--;
              varData_617 += varData_611[varData_613++] << varData_618;
              varData_618 += 8;
            }
            varData_610.nlen = (varData_617 & 31) + 257;
            varData_617 >>>= 5;
            varData_618 -= 5;
            varData_610.ndist = (varData_617 & 31) + 1;
            varData_617 >>>= 5;
            varData_618 -= 5;
            varData_610.ncode = (varData_617 & 15) + 4;
            varData_617 >>>= 4;
            varData_618 -= 4;
            if (varData_610.nlen > 286 || varData_610.ndist > 30) {
              param_1.msg = "too many length or distance symbols";
              varData_610.mode = varData_581;
              break;
            }
            varData_610.have = 0;
            varData_610.mode = varData_569;
          case varData_569:
            while (varData_610.have < varData_610.ncode) {
              while (varData_618 < 3) {
                if (varData_615 === 0) {
                  break _0x27fd91;
                }
                varData_615--;
                varData_617 += varData_611[varData_613++] << varData_618;
                varData_618 += 8;
              }
              varData_610.lens[varData_636[varData_610.have++]] = varData_617 & 7;
              varData_617 >>>= 3;
              varData_618 -= 3;
            }
            while (varData_610.have < 19) {
              varData_610.lens[varData_636[varData_610.have++]] = 0;
            }
            varData_610.lencode = varData_610.lendyn;
            varData_610.lenbits = 7;
            var varData_637 = {
              bits: varData_610.lenbits
            };
            varData_634 = varData_637;
            varData_632 = varData_548(varData_549, varData_610.lens, 0, 19, varData_610.lencode, 0, varData_610.work, varData_634);
            varData_610.lenbits = varData_634.bits;
            if (varData_632) {
              param_1.msg = "invalid code lengths set";
              varData_610.mode = varData_581;
              break;
            }
            varData_610.have = 0;
            varData_610.mode = varData_570;
          case varData_570:
            while (varData_610.have < varData_610.nlen + varData_610.ndist) {
              while (true) {
                varData_624 = varData_610.lencode[varData_617 & (1 << varData_610.lenbits) - 1];
                varData_625 = varData_624 >>> 24;
                varData_626 = varData_624 >>> 16 & 255;
                varData_627 = varData_624 & 65535;
                if (varData_625 <= varData_618) {
                  break;
                }
                if (varData_615 === 0) {
                  break _0x27fd91;
                }
                varData_615--;
                varData_617 += varData_611[varData_613++] << varData_618;
                varData_618 += 8;
              }
              if (varData_627 < 16) {
                varData_617 >>>= varData_625;
                varData_618 -= varData_625;
                varData_610.lens[varData_610.have++] = varData_627;
              } else {
                if (varData_627 === 16) {
                  varData_635 = varData_625 + 2;
                  while (varData_618 < varData_635) {
                    if (varData_615 === 0) {
                      break _0x27fd91;
                    }
                    varData_615--;
                    varData_617 += varData_611[varData_613++] << varData_618;
                    varData_618 += 8;
                  }
                  varData_617 >>>= varData_625;
                  varData_618 -= varData_625;
                  if (varData_610.have === 0) {
                    param_1.msg = "invalid bit length repeat";
                    varData_610.mode = varData_581;
                    break;
                  }
                  varData_631 = varData_610.lens[varData_610.have - 1];
                  varData_621 = 3 + (varData_617 & 3);
                  varData_617 >>>= 2;
                  varData_618 -= 2;
                } else if (varData_627 === 17) {
                  varData_635 = varData_625 + 3;
                  while (varData_618 < varData_635) {
                    if (varData_615 === 0) {
                      break _0x27fd91;
                    }
                    varData_615--;
                    varData_617 += varData_611[varData_613++] << varData_618;
                    varData_618 += 8;
                  }
                  varData_617 >>>= varData_625;
                  varData_618 -= varData_625;
                  varData_631 = 0;
                  varData_621 = 3 + (varData_617 & 7);
                  varData_617 >>>= 3;
                  varData_618 -= 3;
                } else {
                  varData_635 = varData_625 + 7;
                  while (varData_618 < varData_635) {
                    if (varData_615 === 0) {
                      break _0x27fd91;
                    }
                    varData_615--;
                    varData_617 += varData_611[varData_613++] << varData_618;
                    varData_618 += 8;
                  }
                  varData_617 >>>= varData_625;
                  varData_618 -= varData_625;
                  varData_631 = 0;
                  varData_621 = 11 + (varData_617 & 127);
                  varData_617 >>>= 7;
                  varData_618 -= 7;
                }
                if (varData_610.have + varData_621 > varData_610.nlen + varData_610.ndist) {
                  param_1.msg = "invalid bit length repeat";
                  varData_610.mode = varData_581;
                  break;
                }
                while (varData_621--) {
                  varData_610.lens[varData_610.have++] = varData_631;
                }
              }
            }
            if (varData_610.mode === varData_581) {
              break;
            }
            if (varData_610.lens[256] === 0) {
              param_1.msg = "invalid code -- missing end-of-block";
              varData_610.mode = varData_581;
              break;
            }
            varData_610.lenbits = 9;
            var varData_638 = {
              bits: varData_610.lenbits
            };
            varData_634 = varData_638;
            varData_632 = varData_548(varData_550, varData_610.lens, 0, varData_610.nlen, varData_610.lencode, 0, varData_610.work, varData_634);
            varData_610.lenbits = varData_634.bits;
            if (varData_632) {
              param_1.msg = "invalid literal/lengths set";
              varData_610.mode = varData_581;
              break;
            }
            varData_610.distbits = 6;
            varData_610.distcode = varData_610.distdyn;
            var varData_639 = {
              bits: varData_610.distbits
            };
            varData_634 = varData_639;
            varData_632 = varData_548(varData_551, varData_610.lens, varData_610.nlen, varData_610.ndist, varData_610.distcode, 0, varData_610.work, varData_634);
            varData_610.distbits = varData_634.bits;
            if (varData_632) {
              param_1.msg = "invalid distances set";
              varData_610.mode = varData_581;
              break;
            }
            varData_610.mode = varData_571;
            if (param_2 === _0x58d700) {
              break _0x27fd91;
            }
          case varData_571:
            varData_610.mode = varData_572;
          case varData_572:
            if (varData_615 >= 6 && varData_616 >= 258) {
              param_1.next_out = varData_614;
              param_1.avail_out = varData_616;
              param_1.next_in = varData_613;
              param_1.avail_in = varData_615;
              varData_610.hold = varData_617;
              varData_610.bits = varData_618;
              varData_487(param_1, varData_620);
              varData_614 = param_1.next_out;
              varData_612 = param_1.output;
              varData_616 = param_1.avail_out;
              varData_613 = param_1.next_in;
              varData_611 = param_1.input;
              varData_615 = param_1.avail_in;
              varData_617 = varData_610.hold;
              varData_618 = varData_610.bits;
              if (varData_610.mode === varData_563) {
                varData_610.back = -1;
              }
              break;
            }
            varData_610.back = 0;
            while (true) {
              varData_624 = varData_610.lencode[varData_617 & (1 << varData_610.lenbits) - 1];
              varData_625 = varData_624 >>> 24;
              varData_626 = varData_624 >>> 16 & 255;
              varData_627 = varData_624 & 65535;
              if (varData_625 <= varData_618) {
                break;
              }
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_615--;
              varData_617 += varData_611[varData_613++] << varData_618;
              varData_618 += 8;
            }
            if (varData_626 && (varData_626 & 240) === 0) {
              varData_628 = varData_625;
              varData_629 = varData_626;
              varData_630 = varData_627;
              while (true) {
                varData_624 = varData_610.lencode[varData_630 + ((varData_617 & (1 << varData_628 + varData_629) - 1) >> varData_628)];
                varData_625 = varData_624 >>> 24;
                varData_626 = varData_624 >>> 16 & 255;
                varData_627 = varData_624 & 65535;
                if (varData_628 + varData_625 <= varData_618) {
                  break;
                }
                if (varData_615 === 0) {
                  break _0x27fd91;
                }
                varData_615--;
                varData_617 += varData_611[varData_613++] << varData_618;
                varData_618 += 8;
              }
              varData_617 >>>= varData_628;
              varData_618 -= varData_628;
              varData_610.back += varData_628;
            }
            varData_617 >>>= varData_625;
            varData_618 -= varData_625;
            varData_610.back += varData_625;
            varData_610.length = varData_627;
            if (varData_626 === 0) {
              varData_610.mode = varData_577;
              break;
            }
            if (varData_626 & 32) {
              varData_610.back = -1;
              varData_610.mode = varData_563;
              break;
            }
            if (varData_626 & 64) {
              param_1.msg = "invalid literal/length code";
              varData_610.mode = varData_581;
              break;
            }
            varData_610.extra = varData_626 & 15;
            varData_610.mode = varData_573;
          case varData_573:
            if (varData_610.extra) {
              varData_635 = varData_610.extra;
              while (varData_618 < varData_635) {
                if (varData_615 === 0) {
                  break _0x27fd91;
                }
                varData_615--;
                varData_617 += varData_611[varData_613++] << varData_618;
                varData_618 += 8;
              }
              varData_610.length += varData_617 & (1 << varData_610.extra) - 1;
              varData_617 >>>= varData_610.extra;
              varData_618 -= varData_610.extra;
              varData_610.back += varData_610.extra;
            }
            varData_610.was = varData_610.length;
            varData_610.mode = varData_574;
          case varData_574:
            while (true) {
              varData_624 = varData_610.distcode[varData_617 & (1 << varData_610.distbits) - 1];
              varData_625 = varData_624 >>> 24;
              varData_626 = varData_624 >>> 16 & 255;
              varData_627 = varData_624 & 65535;
              if (varData_625 <= varData_618) {
                break;
              }
              if (varData_615 === 0) {
                break _0x27fd91;
              }
              varData_615--;
              varData_617 += varData_611[varData_613++] << varData_618;
              varData_618 += 8;
            }
            if ((varData_626 & 240) === 0) {
              varData_628 = varData_625;
              varData_629 = varData_626;
              varData_630 = varData_627;
              while (true) {
                varData_624 = varData_610.distcode[varData_630 + ((varData_617 & (1 << varData_628 + varData_629) - 1) >> varData_628)];
                varData_625 = varData_624 >>> 24;
                varData_626 = varData_624 >>> 16 & 255;
                varData_627 = varData_624 & 65535;
                if (varData_628 + varData_625 <= varData_618) {
                  break;
                }
                if (varData_615 === 0) {
                  break _0x27fd91;
                }
                varData_615--;
                varData_617 += varData_611[varData_613++] << varData_618;
                varData_618 += 8;
              }
              varData_617 >>>= varData_628;
              varData_618 -= varData_628;
              varData_610.back += varData_628;
            }
            varData_617 >>>= varData_625;
            varData_618 -= varData_625;
            varData_610.back += varData_625;
            if (varData_626 & 64) {
              param_1.msg = "invalid distance code";
              varData_610.mode = varData_581;
              break;
            }
            varData_610.offset = varData_627;
            varData_610.extra = varData_626 & 15;
            varData_610.mode = varData_575;
          case varData_575:
            if (varData_610.extra) {
              varData_635 = varData_610.extra;
              while (varData_618 < varData_635) {
                if (varData_615 === 0) {
                  break _0x27fd91;
                }
                varData_615--;
                varData_617 += varData_611[varData_613++] << varData_618;
                varData_618 += 8;
              }
              varData_610.offset += varData_617 & (1 << varData_610.extra) - 1;
              varData_617 >>>= varData_610.extra;
              varData_618 -= varData_610.extra;
              varData_610.back += varData_610.extra;
            }
            if (varData_610.offset > varData_610.dmax) {
              param_1.msg = "invalid distance too far back";
              varData_610.mode = varData_581;
              break;
            }
            varData_610.mode = varData_576;
          case varData_576:
            if (varData_616 === 0) {
              break _0x27fd91;
            }
            varData_621 = varData_620 - varData_616;
            if (varData_610.offset > varData_621) {
              varData_621 = varData_610.offset - varData_621;
              if (varData_621 > varData_610.whave) {
                if (varData_610.sane) {
                  param_1.msg = "invalid distance too far back";
                  varData_610.mode = varData_581;
                  break;
                }
              }
              if (varData_621 > varData_610.wnext) {
                varData_621 -= varData_610.wnext;
                varData_622 = varData_610.wsize - varData_621;
              } else {
                varData_622 = varData_610.wnext - varData_621;
              }
              if (varData_621 > varData_610.length) {
                varData_621 = varData_610.length;
              }
              varData_623 = varData_610.window;
            } else {
              varData_623 = varData_612;
              varData_622 = varData_614 - varData_610.offset;
              varData_621 = varData_610.length;
            }
            if (varData_621 > varData_616) {
              varData_621 = varData_616;
            }
            varData_616 -= varData_621;
            varData_610.length -= varData_621;
            do {
              varData_612[varData_614++] = varData_623[varData_622++];
            } while (--varData_621);
            if (varData_610.length === 0) {
              varData_610.mode = varData_572;
            }
            break;
          case varData_577:
            if (varData_616 === 0) {
              break _0x27fd91;
            }
            varData_612[varData_614++] = varData_610.length;
            varData_616--;
            varData_610.mode = varData_572;
            break;
          case varData_578:
            if (varData_610.wrap) {
              while (varData_618 < 32) {
                if (varData_615 === 0) {
                  break _0x27fd91;
                }
                varData_615--;
                varData_617 |= varData_611[varData_613++] << varData_618;
                varData_618 += 8;
              }
              varData_620 -= varData_616;
              param_1.total_out += varData_620;
              varData_610.total += varData_620;
              if (varData_610.wrap & 4 && varData_620) {
                param_1.adler = varData_610.check = varData_610.flags ? varData_294(varData_610.check, varData_612, varData_620, varData_614 - varData_620) : varData_286(varData_610.check, varData_612, varData_620, varData_614 - varData_620);
              }
              varData_620 = varData_616;
              if (varData_610.wrap & 4 && (varData_610.flags ? varData_617 : varData_588(varData_617)) !== varData_610.check) {
                param_1.msg = "incorrect data check";
                varData_610.mode = varData_581;
                break;
              }
              varData_617 = 0;
              varData_618 = 0;
            }
            varData_610.mode = varData_579;
          case varData_579:
            if (varData_610.wrap && varData_610.flags) {
              while (varData_618 < 32) {
                if (varData_615 === 0) {
                  break _0x27fd91;
                }
                varData_615--;
                varData_617 += varData_611[varData_613++] << varData_618;
                varData_618 += 8;
              }
              if (varData_610.wrap & 4 && varData_617 !== (varData_610.total & -1)) {
                param_1.msg = "incorrect length check";
                varData_610.mode = varData_581;
                break;
              }
              varData_617 = 0;
              varData_618 = 0;
            }
            varData_610.mode = varData_580;
          case varData_580:
            varData_632 = _0x395226;
            break _0x27fd91;
          case varData_581:
            varData_632 = _0x21c01f;
            break _0x27fd91;
          case varData_582:
            return _0x594cdd;
          case varData_583:
          default:
            return _0x2e996f;
        }
      }
      param_1.next_out = varData_614;
      param_1.avail_out = varData_616;
      param_1.next_in = varData_613;
      param_1.avail_in = varData_615;
      varData_610.hold = varData_617;
      varData_610.bits = varData_618;
      if (varData_610.wsize || varData_620 !== param_1.avail_out && varData_610.mode < varData_581 && (varData_610.mode < varData_578 || param_2 !== _0x2434be)) {
        if (varData_606(param_1, param_1.output, param_1.next_out, varData_620 - param_1.avail_out)) ;
      }
      varData_619 -= param_1.avail_in;
      varData_620 -= param_1.avail_out;
      param_1.total_in += varData_619;
      param_1.total_out += varData_620;
      varData_610.total += varData_620;
      if (varData_610.wrap & 4 && varData_620) {
        param_1.adler = varData_610.check = varData_610.flags ? varData_294(varData_610.check, varData_612, varData_620, param_1.next_out - varData_620) : varData_286(varData_610.check, varData_612, varData_620, param_1.next_out - varData_620);
      }
      param_1.data_type = varData_610.bits + (varData_610.last ? 64 : 0) + (varData_610.mode === varData_563 ? 128 : 0) + (varData_610.mode === varData_571 || varData_610.mode === varData_566 ? 256 : 0);
      if ((varData_619 === 0 && varData_620 === 0 || param_2 === _0x2434be) && varData_632 === _0x2b5a32) {
        varData_632 = _0x515c4d;
      }
      return varData_632;
    };
    const varData_640 = param_1 => {
      if (varData_589(param_1)) {
        return _0x2e996f;
      }
      let varData_641 = param_1.state;
      varData_641.window &&= null;
      param_1.state = null;
      return _0x2b5a32;
    };
    const varData_642 = (param_1, param_2) => {
      if (varData_589(param_1)) {
        return _0x2e996f;
      }
      const varData_643 = param_1.state;
      if ((varData_643.wrap & 2) === 0) {
        return _0x2e996f;
      }
      varData_643.head = param_2;
      param_2.done = false;
      return _0x2b5a32;
    };
    const varData_644 = (param_1, param_2) => {
      const varData_645 = param_2.length;
      let varData_646;
      let varData_647;
      let varData_648;
      if (varData_589(param_1)) {
        return _0x2e996f;
      }
      varData_646 = param_1.state;
      if (varData_646.wrap !== 0 && varData_646.mode !== varData_562) {
        return _0x2e996f;
      }
      if (varData_646.mode === varData_562) {
        varData_647 = 1;
        varData_647 = varData_286(varData_647, param_2, varData_645, 0);
        if (varData_647 !== varData_646.check) {
          return _0x21c01f;
        }
      }
      varData_648 = varData_606(param_1, param_2, varData_645, varData_645);
      if (varData_648) {
        varData_646.mode = varData_582;
        return _0x594cdd;
      }
      varData_646.havedict = 1;
      return _0x2b5a32;
    };
    var varData_649 = varData_593;
    var varData_650 = varData_595;
    var varData_651 = varData_591;
    var varData_652 = varData_601;
    var varData_653 = varData_598;
    var varData_654 = varData_609;
    var varData_655 = varData_640;
    var varData_656 = varData_642;
    var varData_657 = varData_644;
    var varData_658 = "pako inflate (from Nodeca project)";
    var varData_659 = {
      inflateReset: varData_649,
      inflateReset2: varData_650,
      inflateResetKeep: varData_651,
      inflateInit: varData_652,
      inflateInit2: varData_653,
      inflate: varData_654,
      inflateEnd: varData_655,
      inflateGetHeader: varData_656,
      inflateSetDictionary: varData_657,
      inflateInfo: varData_658
    };
    var varData_660 = varData_659;
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
    var varData_661 = handleAction_57;
    const varData_662 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x2d902a,
      Z_FINISH: _0x3675b5,
      Z_OK: _0x1597ee,
      Z_STREAM_END: _0xad696,
      Z_NEED_DICT: _0xcec26f,
      Z_STREAM_ERROR: _0x5dca59,
      Z_DATA_ERROR: _0x4c6172,
      Z_MEM_ERROR: _0xdea514
    } = varData_297;
    function handleAction_58(param_1) {
      this.options = varData_444.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, param_1 || {});
      const varData_663 = this.options;
      if (varData_663.raw && varData_663.windowBits >= 0 && varData_663.windowBits < 16) {
        varData_663.windowBits = -varData_663.windowBits;
        if (varData_663.windowBits === 0) {
          varData_663.windowBits = -15;
        }
      }
      if (varData_663.windowBits >= 0 && varData_663.windowBits < 16 && (!param_1 || !param_1.windowBits)) {
        varData_663.windowBits += 32;
      }
      if (varData_663.windowBits > 15 && varData_663.windowBits < 48) {
        if ((varData_663.windowBits & 15) === 0) {
          varData_663.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_467();
      this.strm.avail_out = 0;
      let varData_664 = varData_660.inflateInit2(this.strm, varData_663.windowBits);
      if (varData_664 !== _0x1597ee) {
        throw new Error(varData_295[varData_664]);
      }
      this.header = new varData_661();
      varData_660.inflateGetHeader(this.strm, this.header);
      if (varData_663.dictionary) {
        if (typeof varData_663.dictionary === "string") {
          varData_663.dictionary = varData_466.string2buf(varData_663.dictionary);
        } else if (varData_662.call(varData_663.dictionary) === "[object ArrayBuffer]") {
          varData_663.dictionary = new Uint8Array(varData_663.dictionary);
        }
        if (varData_663.raw) {
          varData_664 = varData_660.inflateSetDictionary(this.strm, varData_663.dictionary);
          if (varData_664 !== _0x1597ee) {
            throw new Error(varData_295[varData_664]);
          }
        }
      }
    }
    handleAction_58.prototype.push = function (param_1, param_2) {
      const varData_665 = this.strm;
      const varData_666 = this.options.chunkSize;
      const varData_667 = this.options.dictionary;
      let varData_668;
      let varData_669;
      let varData_670;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_669 = param_2;
      } else {
        varData_669 = param_2 === true ? _0x3675b5 : _0x2d902a;
      }
      if (varData_662.call(param_1) === "[object ArrayBuffer]") {
        varData_665.input = new Uint8Array(param_1);
      } else {
        varData_665.input = param_1;
      }
      varData_665.next_in = 0;
      varData_665.avail_in = varData_665.input.length;
      while (true) {
        if (varData_665.avail_out === 0) {
          varData_665.output = new Uint8Array(varData_666);
          varData_665.next_out = 0;
          varData_665.avail_out = varData_666;
        }
        varData_668 = varData_660.inflate(varData_665, varData_669);
        if (varData_668 === _0xcec26f && varData_667) {
          varData_668 = varData_660.inflateSetDictionary(varData_665, varData_667);
          if (varData_668 === _0x1597ee) {
            varData_668 = varData_660.inflate(varData_665, varData_669);
          } else if (varData_668 === _0x4c6172) {
            varData_668 = _0xcec26f;
          }
        }
        while (varData_665.avail_in > 0 && varData_668 === _0xad696 && varData_665.state.wrap > 0 && param_1[varData_665.next_in] !== 0) {
          varData_660.inflateReset(varData_665);
          varData_668 = varData_660.inflate(varData_665, varData_669);
        }
        switch (varData_668) {
          case _0x5dca59:
          case _0x4c6172:
          case _0xcec26f:
          case _0xdea514:
            this.onEnd(varData_668);
            this.ended = true;
            return false;
        }
        varData_670 = varData_665.avail_out;
        if (varData_665.next_out) {
          if (varData_665.avail_out === 0 || varData_668 === _0xad696) {
            if (this.options.to === "string") {
              let varData_671 = varData_466.utf8border(varData_665.output, varData_665.next_out);
              let varData_672 = varData_665.next_out - varData_671;
              let varData_673 = varData_466.buf2string(varData_665.output, varData_671);
              varData_665.next_out = varData_672;
              varData_665.avail_out = varData_666 - varData_672;
              if (varData_672) {
                varData_665.output.set(varData_665.output.subarray(varData_671, varData_671 + varData_672), 0);
              }
              this.onData(varData_673);
            } else {
              this.onData(varData_665.output.length === varData_665.next_out ? varData_665.output : varData_665.output.subarray(0, varData_665.next_out));
            }
          }
        }
        if (varData_668 === _0x1597ee && varData_670 === 0) {
          continue;
        }
        if (varData_668 === _0xad696) {
          varData_668 = varData_660.inflateEnd(this.strm);
          this.onEnd(varData_668);
          this.ended = true;
          return true;
        }
        if (varData_665.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_58.prototype.onData = function (param_1) {
      this.chunks.push(param_1);
    };
    handleAction_58.prototype.onEnd = function (param_1) {
      if (param_1 === _0x1597ee) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = varData_444.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_59(param_1, param_2) {
      const varData_674 = new handleAction_58(param_2);
      varData_674.push(param_1);
      if (varData_674.err) {
        throw varData_674.msg || varData_295[varData_674.err];
      }
      return varData_674.result;
    }
    function handleAction_60(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.raw = true;
      return handleAction_59(param_1, param_2);
    }
    var varData_675 = handleAction_58;
    var varData_676 = handleAction_59;
    var varData_677 = handleAction_60;
    var varData_678 = handleAction_59;
    var varData_679 = varData_297;
    var varData_680 = {
      Inflate: varData_675,
      inflate: varData_676,
      inflateRaw: varData_677,
      ungzip: varData_678,
      constants: varData_679
    };
    var varData_681 = varData_680;
    const {
      Deflate: _0x386437,
      deflate: _0x42539d,
      deflateRaw: _0x102b1e,
      gzip: _0x13237e
    } = varData_484;
    const {
      Inflate: _0x2790db,
      inflate: _0x2857f7,
      inflateRaw: _0x4b0843,
      ungzip: _0x5efcc1
    } = varData_681;
    var varData_682 = _0x386437;
    var varData_683 = _0x42539d;
    var varData_684 = _0x102b1e;
    var varData_685 = _0x13237e;
    var varData_686 = _0x2790db;
    var varData_687 = _0x2857f7;
    var varData_688 = _0x4b0843;
    var varData_689 = _0x5efcc1;
    var varData_690 = varData_297;
    var varData_691 = {
      Deflate: varData_682,
      deflate: varData_683,
      deflateRaw: varData_684,
      gzip: varData_685,
      Inflate: varData_686,
      inflate: varData_687,
      inflateRaw: varData_688,
      ungzip: varData_689,
      constants: varData_690
    };
    var varData_692 = varData_691;
    var varData_693 = handleAction_35(739);
    ;
    var varData_694 = Object.create;
    var varData_695 = Object.defineProperty;
    var varData_696 = Object.getOwnPropertyDescriptor;
    var varData_697 = Object.getOwnPropertyNames;
    var varData_698 = Object.getPrototypeOf;
    var varData_699 = Object.prototype.hasOwnProperty;
    var varData_700 = (param_1, param_2) => function _0x4bda2e() {
      if (!param_2) {
        (0, param_1[varData_697(param_1)[0]])((param_2 = {
          exports: {}
        }).exports, param_2);
      }
      return param_2.exports;
    };
    var varData_701 = (param_1, param_2) => {
      for (var varData_702 in param_2) {
        varData_695(param_1, varData_702, {
          get: param_2[varData_702],
          enumerable: true
        });
      }
    };
    var varData_703 = (param_1, param_2, param_3, param_4) => {
      if (param_2 && typeof param_2 === "object" || typeof param_2 === "function") {
        for (let varData_704 of varData_697(param_2)) {
          if (!varData_699.call(param_1, varData_704) && varData_704 !== param_3) {
            varData_695(param_1, varData_704, {
              get: () => param_2[varData_704],
              enumerable: !(param_4 = varData_696(param_2, varData_704)) || param_4.enumerable
            });
          }
        }
      }
      return param_1;
    };
    var varData_705 = (param_1, param_2, param_3) => {
      param_3 = param_1 != null ? varData_694(varData_698(param_1)) : {};
      return varData_703(param_2 || !param_1 || !param_1.__esModule ? varData_695(param_3, "default", {
        value: param_1,
        enumerable: true
      }) : param_3, param_1);
    };
    var varData_706 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_707 = (param_1, param_2, param_3) => {
      varData_706(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_708 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_709 = (param_1, param_2, param_3, param_4) => {
      varData_706(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_710 = (param_1, param_2, param_3, param_4) => ({
      set _(param_1_1) {
        varData_709(param_1, param_2, param_1_1, param_3);
      },
      get _() {
        return varData_707(param_1, param_2, param_4);
      }
    });
    var varData_711 = (param_1, param_2, param_3) => {
      varData_706(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_712 = varData_700({
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
          var varData_713 = varData_713 || function (param_1_1, param_2_1) {
            var varData_714 = Object.create || function () {
              function handleAction_61() {}
              ;
              return function (param_1_2) {
                var varData_715;
                handleAction_61.prototype = param_1_2;
                varData_715 = new handleAction_61();
                handleAction_61.prototype = null;
                return varData_715;
              };
            }();
            var varData_716 = {};
            var varData_717 = varData_716.lib = {};
            var varData_718 = varData_717.Base = function () {
              return {
                extend: function (param_1_2) {
                  var varData_719 = varData_714(this);
                  if (param_1_2) {
                    varData_719.mixIn(param_1_2);
                  }
                  if (!varData_719.hasOwnProperty("init") || this.init === varData_719.init) {
                    varData_719.init = function () {
                      varData_719.$super.init.apply(this, arguments);
                    };
                  }
                  varData_719.init.prototype = varData_719;
                  varData_719.$super = this;
                  return varData_719;
                },
                create: function () {
                  var varData_720 = this.extend();
                  varData_720.init.apply(varData_720, arguments);
                  return varData_720;
                },
                init: function () {},
                mixIn: function (param_1_2) {
                  for (var varData_721 in param_1_2) {
                    if (param_1_2.hasOwnProperty(varData_721)) {
                      this[varData_721] = param_1_2[varData_721];
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
            var varData_722 = varData_717.WordArray = varData_718.extend({
              init: function (param_1_2, param_2_2) {
                param_1_2 = this.words = param_1_2 || [];
                if (param_2_2 != param_2_1) {
                  this.sigBytes = param_2_2;
                } else {
                  this.sigBytes = param_1_2.length * 4;
                }
              },
              toString: function (param_1_2) {
                return (param_1_2 || varData_737).stringify(this);
              },
              concat: function (param_1_2) {
                var varData_723 = this.words;
                var varData_724 = param_1_2.words;
                var varData_725 = this.sigBytes;
                var varData_726 = param_1_2.sigBytes;
                this.clamp();
                if (varData_725 % 4) {
                  for (var loopIdx = 0; loopIdx < varData_726; loopIdx++) {
                    var varData_727 = varData_724[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                    varData_723[varData_725 + loopIdx >>> 2] |= varData_727 << 24 - (varData_725 + loopIdx) % 4 * 8;
                  }
                } else {
                  for (var loopIdx = 0; loopIdx < varData_726; loopIdx += 4) {
                    varData_723[varData_725 + loopIdx >>> 2] = varData_724[loopIdx >>> 2];
                  }
                }
                this.sigBytes += varData_726;
                return this;
              },
              clamp: function () {
                var varData_728 = this.words;
                var varData_729 = this.sigBytes;
                varData_728[varData_729 >>> 2] &= -1 << 32 - varData_729 % 4 * 8;
                varData_728.length = param_1_1.ceil(varData_729 / 4);
              },
              clone: function () {
                var varData_730 = varData_718.clone.call(this);
                varData_730.words = this.words.slice(0);
                return varData_730;
              },
              random: function (param_1_2) {
                var varData_731 = [];
                function handleAction_62(param_1_3) {
                  var param_1_3 = param_1_3;
                  var varData_732 = 987654321;
                  var varData_733 = 4294967295;
                  return function () {
                    varData_732 = (varData_732 & 65535) * 36969 + (varData_732 >> 16) & varData_733;
                    param_1_3 = (param_1_3 & 65535) * 18000 + (param_1_3 >> 16) & varData_733;
                    var varData_734 = (varData_732 << 16) + param_1_3 & varData_733;
                    varData_734 /= 4294967296;
                    varData_734 += 0.5;
                    return varData_734 * (param_1_1.random() > 0.5 ? 1 : -1);
                  };
                }
                for (var loopIdx = 0, loopIdx_1; loopIdx < param_1_2; loopIdx += 4) {
                  var varData_735 = handleAction_62((loopIdx_1 || param_1_1.random()) * 4294967296);
                  loopIdx_1 = varData_735() * 987654071;
                  varData_731.push(varData_735() * 4294967296 | 0);
                }
                return new varData_722.init(varData_731, param_1_2);
              }
            });
            var varData_736 = varData_716.enc = {};
            var varData_737 = varData_736.Hex = {
              stringify: function (param_1_2) {
                var varData_738 = param_1_2.words;
                var varData_739 = param_1_2.sigBytes;
                var varData_740 = [];
                for (var loopIdx = 0; loopIdx < varData_739; loopIdx++) {
                  var varData_741 = varData_738[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  varData_740.push((varData_741 >>> 4).toString(16));
                  varData_740.push((varData_741 & 15).toString(16));
                }
                return varData_740.join("");
              },
              parse: function (param_1_2) {
                var varData_742 = param_1_2.length;
                var varData_743 = [];
                for (var loopIdx = 0; loopIdx < varData_742; loopIdx += 2) {
                  varData_743[loopIdx >>> 3] |= parseInt(param_1_2.substr(loopIdx, 2), 16) << 24 - loopIdx % 8 * 4;
                }
                return new varData_722.init(varData_743, varData_742 / 2);
              }
            };
            var varData_744 = varData_736.Latin1 = {
              stringify: function (param_1_2) {
                var varData_745 = param_1_2.words;
                var varData_746 = param_1_2.sigBytes;
                var varData_747 = [];
                for (var loopIdx = 0; loopIdx < varData_746; loopIdx++) {
                  var varData_748 = varData_745[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  varData_747.push(String.fromCharCode(varData_748));
                }
                return varData_747.join("");
              },
              parse: function (param_1_2) {
                var varData_749 = param_1_2.length;
                var varData_750 = [];
                for (var loopIdx = 0; loopIdx < varData_749; loopIdx++) {
                  varData_750[loopIdx >>> 2] |= (param_1_2.charCodeAt(loopIdx) & 255) << 24 - loopIdx % 4 * 8;
                }
                return new varData_722.init(varData_750, varData_749);
              }
            };
            var varData_751 = varData_736.Utf8 = {
              stringify: function (param_1_2) {
                try {
                  return decodeURIComponent(escape(varData_744.stringify(param_1_2)));
                } catch (err) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function (param_1_2) {
                return varData_744.parse(unescape(encodeURIComponent(param_1_2)));
              }
            };
            var varData_752 = varData_717.BufferedBlockAlgorithm = varData_718.extend({
              reset: function () {
                this._data = new varData_722.init();
                this._nDataBytes = 0;
              },
              _append: function (param_1_2) {
                if (typeof param_1_2 == "string") {
                  param_1_2 = varData_751.parse(param_1_2);
                }
                this._data.concat(param_1_2);
                this._nDataBytes += param_1_2.sigBytes;
              },
              _process: function (param_1_2) {
                var varData_753 = this._data;
                var varData_754 = varData_753.words;
                var varData_755 = varData_753.sigBytes;
                var varData_756 = this.blockSize;
                var varData_757 = varData_756 * 4;
                var varData_758 = varData_755 / varData_757;
                if (param_1_2) {
                  varData_758 = param_1_1.ceil(varData_758);
                } else {
                  varData_758 = param_1_1.max((varData_758 | 0) - this._minBufferSize, 0);
                }
                var varData_759 = varData_758 * varData_756;
                var varData_760 = param_1_1.min(varData_759 * 4, varData_755);
                if (varData_759) {
                  for (var loopIdx = 0; loopIdx < varData_759; loopIdx += varData_756) {
                    this._doProcessBlock(varData_754, loopIdx);
                  }
                  var varData_761 = varData_754.splice(0, varData_759);
                  varData_753.sigBytes -= varData_760;
                }
                return new varData_722.init(varData_761, varData_760);
              },
              clone: function () {
                var varData_762 = varData_718.clone.call(this);
                varData_762._data = this._data.clone();
                return varData_762;
              },
              _minBufferSize: 0
            });
            var varData_763 = varData_717.Hasher = varData_752.extend({
              cfg: varData_718.extend(),
              init: function (param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
                this.reset();
              },
              reset: function () {
                varData_752.reset.call(this);
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
                var varData_764 = this._doFinalize();
                return varData_764;
              },
              blockSize: 16,
              _createHelper: function (param_1_2) {
                return function (param_1_3, param_2_2) {
                  return new param_1_2.init(param_2_2).finalize(param_1_3);
                };
              },
              _createHmacHelper: function (param_1_2) {
                return function (param_1_3, param_2_2) {
                  return new varData_765.HMAC.init(param_1_2, param_2_2).finalize(param_1_3);
                };
              }
            });
            var varData_765 = varData_716.algo = {};
            return varData_716;
          }(Math);
          return varData_713;
        });
      }
    });
    var varData_766 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_767 = param_1_1;
            var varData_768 = varData_767.lib;
            var varData_769 = varData_768.Base;
            var varData_770 = varData_768.WordArray;
            var varData_771 = varData_767.x64 = {};
            var varData_772 = {
              init: function (param_1_3, param_2_1) {
                this.high = param_1_3;
                this.low = param_2_1;
              }
            };
            var varData_773 = varData_771.Word = varData_769.extend(varData_772);
            var varData_774 = varData_771.WordArray = varData_769.extend({
              init: function (param_1_3, param_2_1) {
                param_1_3 = this.words = param_1_3 || [];
                if (param_2_1 != param_1_2) {
                  this.sigBytes = param_2_1;
                } else {
                  this.sigBytes = param_1_3.length * 8;
                }
              },
              toX32: function () {
                var varData_775 = this.words;
                var varData_776 = varData_775.length;
                var varData_777 = [];
                for (var loopIdx = 0; loopIdx < varData_776; loopIdx++) {
                  var varData_778 = varData_775[loopIdx];
                  varData_777.push(varData_778.high);
                  varData_777.push(varData_778.low);
                }
                return varData_770.create(varData_777, this.sigBytes);
              },
              clone: function () {
                var varData_779 = varData_769.clone.call(this);
                var varData_780 = varData_779.words = this.words.slice(0);
                var varData_781 = varData_780.length;
                for (var loopIdx = 0; loopIdx < varData_781; loopIdx++) {
                  varData_780[loopIdx] = varData_780[loopIdx].clone();
                }
                return varData_779;
              }
            });
          })();
          return param_1_1;
        });
      }
    });
    var varData_782 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712());
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
            var varData_783 = param_1_1;
            var varData_784 = varData_783.lib;
            var varData_785 = varData_784.WordArray;
            var varData_786 = varData_785.init;
            var varData_787 = varData_785.init = function (param_1_2) {
              if (param_1_2 instanceof ArrayBuffer) {
                param_1_2 = new Uint8Array(param_1_2);
              }
              if (param_1_2 instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && param_1_2 instanceof Uint8ClampedArray || param_1_2 instanceof Int16Array || param_1_2 instanceof Uint16Array || param_1_2 instanceof Int32Array || param_1_2 instanceof Uint32Array || param_1_2 instanceof Float32Array || param_1_2 instanceof Float64Array) {
                param_1_2 = new Uint8Array(param_1_2.buffer, param_1_2.byteOffset, param_1_2.byteLength);
              }
              if (param_1_2 instanceof Uint8Array) {
                var varData_788 = param_1_2.byteLength;
                var varData_789 = [];
                for (var loopIdx = 0; loopIdx < varData_788; loopIdx++) {
                  varData_789[loopIdx >>> 2] |= param_1_2[loopIdx] << 24 - loopIdx % 4 * 8;
                }
                varData_786.call(this, varData_789, varData_788);
              } else {
                varData_786.apply(this, arguments);
              }
            };
            varData_787.prototype = varData_785;
          })();
          return param_1_1.lib.WordArray;
        });
      }
    });
    var varData_790 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_791 = param_1_1;
            var varData_792 = varData_791.lib;
            var varData_793 = varData_792.WordArray;
            var varData_794 = varData_791.enc;
            var varData_795 = varData_794.Utf16 = varData_794.Utf16BE = {
              stringify: function (param_1_2) {
                var varData_796 = param_1_2.words;
                var varData_797 = param_1_2.sigBytes;
                var varData_798 = [];
                for (var loopIdx = 0; loopIdx < varData_797; loopIdx += 2) {
                  var varData_799 = varData_796[loopIdx >>> 2] >>> 16 - loopIdx % 4 * 8 & 65535;
                  varData_798.push(String.fromCharCode(varData_799));
                }
                return varData_798.join("");
              },
              parse: function (param_1_2) {
                var varData_800 = param_1_2.length;
                var varData_801 = [];
                for (var loopIdx = 0; loopIdx < varData_800; loopIdx++) {
                  varData_801[loopIdx >>> 1] |= param_1_2.charCodeAt(loopIdx) << 16 - loopIdx % 2 * 16;
                }
                return varData_793.create(varData_801, varData_800 * 2);
              }
            };
            varData_794.Utf16LE = {
              stringify: function (param_1_2) {
                var varData_802 = param_1_2.words;
                var varData_803 = param_1_2.sigBytes;
                var varData_804 = [];
                for (var loopIdx = 0; loopIdx < varData_803; loopIdx += 2) {
                  var varData_805 = handleAction_63(varData_802[loopIdx >>> 2] >>> 16 - loopIdx % 4 * 8 & 65535);
                  varData_804.push(String.fromCharCode(varData_805));
                }
                return varData_804.join("");
              },
              parse: function (param_1_2) {
                var varData_806 = param_1_2.length;
                var varData_807 = [];
                for (var loopIdx = 0; loopIdx < varData_806; loopIdx++) {
                  varData_807[loopIdx >>> 1] |= handleAction_63(param_1_2.charCodeAt(loopIdx) << 16 - loopIdx % 2 * 16);
                }
                return varData_793.create(varData_807, varData_806 * 2);
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
    var varData_808 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_809 = param_1_1;
            var varData_810 = varData_809.lib;
            var varData_811 = varData_810.WordArray;
            var varData_812 = varData_809.enc;
            var varData_813 = varData_812.Base64 = {
              stringify: function (param_1_2) {
                var varData_814 = param_1_2.words;
                var varData_815 = param_1_2.sigBytes;
                var varData_816 = this._map;
                param_1_2.clamp();
                var varData_817 = [];
                for (var loopIdx = 0; loopIdx < varData_815; loopIdx += 3) {
                  var varData_818 = varData_814[loopIdx >>> 2] >>> 24 - loopIdx % 4 * 8 & 255;
                  var varData_819 = varData_814[loopIdx + 1 >>> 2] >>> 24 - (loopIdx + 1) % 4 * 8 & 255;
                  var varData_820 = varData_814[loopIdx + 2 >>> 2] >>> 24 - (loopIdx + 2) % 4 * 8 & 255;
                  var varData_821 = varData_818 << 16 | varData_819 << 8 | varData_820;
                  for (var loopIdx_1 = 0; loopIdx_1 < 4 && loopIdx + loopIdx_1 * 0.75 < varData_815; loopIdx_1++) {
                    varData_817.push(varData_816.charAt(varData_821 >>> (3 - loopIdx_1) * 6 & 63));
                  }
                }
                var varData_822 = varData_816.charAt(64);
                if (varData_822) {
                  while (varData_817.length % 4) {
                    varData_817.push(varData_822);
                  }
                }
                return varData_817.join("");
              },
              parse: function (param_1_2) {
                var varData_823 = param_1_2.length;
                var varData_824 = this._map;
                var varData_825 = this._reverseMap;
                if (!varData_825) {
                  varData_825 = this._reverseMap = [];
                  for (var loopIdx = 0; loopIdx < varData_824.length; loopIdx++) {
                    varData_825[varData_824.charCodeAt(loopIdx)] = loopIdx;
                  }
                }
                var varData_826 = varData_824.charAt(64);
                if (varData_826) {
                  var varData_827 = param_1_2.indexOf(varData_826);
                  if (varData_827 !== -1) {
                    varData_823 = varData_827;
                  }
                }
                return handleAction_64(param_1_2, varData_823, varData_825);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function handleAction_64(param_1_2, param_2_1, param_3) {
              var varData_828 = [];
              var varData_829 = 0;
              for (var loopIdx = 0; loopIdx < param_2_1; loopIdx++) {
                if (loopIdx % 4) {
                  var varData_830 = param_3[param_1_2.charCodeAt(loopIdx - 1)] << loopIdx % 4 * 2;
                  var varData_831 = param_3[param_1_2.charCodeAt(loopIdx)] >>> 6 - loopIdx % 4 * 2;
                  varData_828[varData_829 >>> 2] |= (varData_830 | varData_831) << 24 - varData_829 % 4 * 8;
                  varData_829++;
                }
              }
              return varData_811.create(varData_828, varData_829);
            }
          })();
          return param_1_1.enc.Base64;
        });
      }
    });
    var varData_832 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_833 = param_1_1;
            var varData_834 = varData_833.lib;
            var varData_835 = varData_834.WordArray;
            var varData_836 = varData_834.Hasher;
            var varData_837 = varData_833.algo;
            var varData_838 = [];
            (function () {
              for (var loopIdx = 0; loopIdx < 64; loopIdx++) {
                varData_838[loopIdx] = param_1_2.abs(param_1_2.sin(loopIdx + 1)) * 4294967296 | 0;
              }
            })();
            var varData_839 = varData_837.MD5 = varData_836.extend({
              _doReset: function () {
                this._hash = new varData_835.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_840 = param_2_1 + loopIdx;
                  var varData_841 = param_1_3[varData_840];
                  param_1_3[varData_840] = (varData_841 << 8 | varData_841 >>> 24) & 16711935 | (varData_841 << 24 | varData_841 >>> 8) & -16711936;
                }
                var varData_842 = this._hash.words;
                var varData_843 = param_1_3[param_2_1 + 0];
                var varData_844 = param_1_3[param_2_1 + 1];
                var varData_845 = param_1_3[param_2_1 + 2];
                var varData_846 = param_1_3[param_2_1 + 3];
                var varData_847 = param_1_3[param_2_1 + 4];
                var varData_848 = param_1_3[param_2_1 + 5];
                var varData_849 = param_1_3[param_2_1 + 6];
                var varData_850 = param_1_3[param_2_1 + 7];
                var varData_851 = param_1_3[param_2_1 + 8];
                var varData_852 = param_1_3[param_2_1 + 9];
                var varData_853 = param_1_3[param_2_1 + 10];
                var varData_854 = param_1_3[param_2_1 + 11];
                var varData_855 = param_1_3[param_2_1 + 12];
                var varData_856 = param_1_3[param_2_1 + 13];
                var varData_857 = param_1_3[param_2_1 + 14];
                var varData_858 = param_1_3[param_2_1 + 15];
                var varData_859 = varData_842[0];
                var varData_860 = varData_842[1];
                var varData_861 = varData_842[2];
                var varData_862 = varData_842[3];
                varData_859 = handleAction_65(varData_859, varData_860, varData_861, varData_862, varData_843, 7, varData_838[0]);
                varData_862 = handleAction_65(varData_862, varData_859, varData_860, varData_861, varData_844, 12, varData_838[1]);
                varData_861 = handleAction_65(varData_861, varData_862, varData_859, varData_860, varData_845, 17, varData_838[2]);
                varData_860 = handleAction_65(varData_860, varData_861, varData_862, varData_859, varData_846, 22, varData_838[3]);
                varData_859 = handleAction_65(varData_859, varData_860, varData_861, varData_862, varData_847, 7, varData_838[4]);
                varData_862 = handleAction_65(varData_862, varData_859, varData_860, varData_861, varData_848, 12, varData_838[5]);
                varData_861 = handleAction_65(varData_861, varData_862, varData_859, varData_860, varData_849, 17, varData_838[6]);
                varData_860 = handleAction_65(varData_860, varData_861, varData_862, varData_859, varData_850, 22, varData_838[7]);
                varData_859 = handleAction_65(varData_859, varData_860, varData_861, varData_862, varData_851, 7, varData_838[8]);
                varData_862 = handleAction_65(varData_862, varData_859, varData_860, varData_861, varData_852, 12, varData_838[9]);
                varData_861 = handleAction_65(varData_861, varData_862, varData_859, varData_860, varData_853, 17, varData_838[10]);
                varData_860 = handleAction_65(varData_860, varData_861, varData_862, varData_859, varData_854, 22, varData_838[11]);
                varData_859 = handleAction_65(varData_859, varData_860, varData_861, varData_862, varData_855, 7, varData_838[12]);
                varData_862 = handleAction_65(varData_862, varData_859, varData_860, varData_861, varData_856, 12, varData_838[13]);
                varData_861 = handleAction_65(varData_861, varData_862, varData_859, varData_860, varData_857, 17, varData_838[14]);
                varData_860 = handleAction_65(varData_860, varData_861, varData_862, varData_859, varData_858, 22, varData_838[15]);
                varData_859 = handleAction_66(varData_859, varData_860, varData_861, varData_862, varData_844, 5, varData_838[16]);
                varData_862 = handleAction_66(varData_862, varData_859, varData_860, varData_861, varData_849, 9, varData_838[17]);
                varData_861 = handleAction_66(varData_861, varData_862, varData_859, varData_860, varData_854, 14, varData_838[18]);
                varData_860 = handleAction_66(varData_860, varData_861, varData_862, varData_859, varData_843, 20, varData_838[19]);
                varData_859 = handleAction_66(varData_859, varData_860, varData_861, varData_862, varData_848, 5, varData_838[20]);
                varData_862 = handleAction_66(varData_862, varData_859, varData_860, varData_861, varData_853, 9, varData_838[21]);
                varData_861 = handleAction_66(varData_861, varData_862, varData_859, varData_860, varData_858, 14, varData_838[22]);
                varData_860 = handleAction_66(varData_860, varData_861, varData_862, varData_859, varData_847, 20, varData_838[23]);
                varData_859 = handleAction_66(varData_859, varData_860, varData_861, varData_862, varData_852, 5, varData_838[24]);
                varData_862 = handleAction_66(varData_862, varData_859, varData_860, varData_861, varData_857, 9, varData_838[25]);
                varData_861 = handleAction_66(varData_861, varData_862, varData_859, varData_860, varData_846, 14, varData_838[26]);
                varData_860 = handleAction_66(varData_860, varData_861, varData_862, varData_859, varData_851, 20, varData_838[27]);
                varData_859 = handleAction_66(varData_859, varData_860, varData_861, varData_862, varData_856, 5, varData_838[28]);
                varData_862 = handleAction_66(varData_862, varData_859, varData_860, varData_861, varData_845, 9, varData_838[29]);
                varData_861 = handleAction_66(varData_861, varData_862, varData_859, varData_860, varData_850, 14, varData_838[30]);
                varData_860 = handleAction_66(varData_860, varData_861, varData_862, varData_859, varData_855, 20, varData_838[31]);
                varData_859 = handleAction_67(varData_859, varData_860, varData_861, varData_862, varData_848, 4, varData_838[32]);
                varData_862 = handleAction_67(varData_862, varData_859, varData_860, varData_861, varData_851, 11, varData_838[33]);
                varData_861 = handleAction_67(varData_861, varData_862, varData_859, varData_860, varData_854, 16, varData_838[34]);
                varData_860 = handleAction_67(varData_860, varData_861, varData_862, varData_859, varData_857, 23, varData_838[35]);
                varData_859 = handleAction_67(varData_859, varData_860, varData_861, varData_862, varData_844, 4, varData_838[36]);
                varData_862 = handleAction_67(varData_862, varData_859, varData_860, varData_861, varData_847, 11, varData_838[37]);
                varData_861 = handleAction_67(varData_861, varData_862, varData_859, varData_860, varData_850, 16, varData_838[38]);
                varData_860 = handleAction_67(varData_860, varData_861, varData_862, varData_859, varData_853, 23, varData_838[39]);
                varData_859 = handleAction_67(varData_859, varData_860, varData_861, varData_862, varData_856, 4, varData_838[40]);
                varData_862 = handleAction_67(varData_862, varData_859, varData_860, varData_861, varData_843, 11, varData_838[41]);
                varData_861 = handleAction_67(varData_861, varData_862, varData_859, varData_860, varData_846, 16, varData_838[42]);
                varData_860 = handleAction_67(varData_860, varData_861, varData_862, varData_859, varData_849, 23, varData_838[43]);
                varData_859 = handleAction_67(varData_859, varData_860, varData_861, varData_862, varData_852, 4, varData_838[44]);
                varData_862 = handleAction_67(varData_862, varData_859, varData_860, varData_861, varData_855, 11, varData_838[45]);
                varData_861 = handleAction_67(varData_861, varData_862, varData_859, varData_860, varData_858, 16, varData_838[46]);
                varData_860 = handleAction_67(varData_860, varData_861, varData_862, varData_859, varData_845, 23, varData_838[47]);
                varData_859 = handleAction_68(varData_859, varData_860, varData_861, varData_862, varData_843, 6, varData_838[48]);
                varData_862 = handleAction_68(varData_862, varData_859, varData_860, varData_861, varData_850, 10, varData_838[49]);
                varData_861 = handleAction_68(varData_861, varData_862, varData_859, varData_860, varData_857, 15, varData_838[50]);
                varData_860 = handleAction_68(varData_860, varData_861, varData_862, varData_859, varData_848, 21, varData_838[51]);
                varData_859 = handleAction_68(varData_859, varData_860, varData_861, varData_862, varData_855, 6, varData_838[52]);
                varData_862 = handleAction_68(varData_862, varData_859, varData_860, varData_861, varData_846, 10, varData_838[53]);
                varData_861 = handleAction_68(varData_861, varData_862, varData_859, varData_860, varData_853, 15, varData_838[54]);
                varData_860 = handleAction_68(varData_860, varData_861, varData_862, varData_859, varData_844, 21, varData_838[55]);
                varData_859 = handleAction_68(varData_859, varData_860, varData_861, varData_862, varData_851, 6, varData_838[56]);
                varData_862 = handleAction_68(varData_862, varData_859, varData_860, varData_861, varData_858, 10, varData_838[57]);
                varData_861 = handleAction_68(varData_861, varData_862, varData_859, varData_860, varData_849, 15, varData_838[58]);
                varData_860 = handleAction_68(varData_860, varData_861, varData_862, varData_859, varData_856, 21, varData_838[59]);
                varData_859 = handleAction_68(varData_859, varData_860, varData_861, varData_862, varData_847, 6, varData_838[60]);
                varData_862 = handleAction_68(varData_862, varData_859, varData_860, varData_861, varData_854, 10, varData_838[61]);
                varData_861 = handleAction_68(varData_861, varData_862, varData_859, varData_860, varData_845, 15, varData_838[62]);
                varData_860 = handleAction_68(varData_860, varData_861, varData_862, varData_859, varData_852, 21, varData_838[63]);
                varData_842[0] = varData_842[0] + varData_859 | 0;
                varData_842[1] = varData_842[1] + varData_860 | 0;
                varData_842[2] = varData_842[2] + varData_861 | 0;
                varData_842[3] = varData_842[3] + varData_862 | 0;
              },
              _doFinalize: function () {
                var varData_863 = this._data;
                var varData_864 = varData_863.words;
                var varData_865 = this._nDataBytes * 8;
                var varData_866 = varData_863.sigBytes * 8;
                varData_864[varData_866 >>> 5] |= 128 << 24 - varData_866 % 32;
                var varData_867 = param_1_2.floor(varData_865 / 4294967296);
                var varData_868 = varData_865;
                varData_864[(varData_866 + 64 >>> 9 << 4) + 15] = (varData_867 << 8 | varData_867 >>> 24) & 16711935 | (varData_867 << 24 | varData_867 >>> 8) & -16711936;
                varData_864[(varData_866 + 64 >>> 9 << 4) + 14] = (varData_868 << 8 | varData_868 >>> 24) & 16711935 | (varData_868 << 24 | varData_868 >>> 8) & -16711936;
                varData_863.sigBytes = (varData_864.length + 1) * 4;
                this._process();
                var varData_869 = this._hash;
                var varData_870 = varData_869.words;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  var varData_871 = varData_870[loopIdx];
                  varData_870[loopIdx] = (varData_871 << 8 | varData_871 >>> 24) & 16711935 | (varData_871 << 24 | varData_871 >>> 8) & -16711936;
                }
                return varData_869;
              },
              clone: function () {
                var varData_872 = varData_836.clone.call(this);
                varData_872._hash = this._hash.clone();
                return varData_872;
              }
            });
            function handleAction_65(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_873 = param_1_3 + (param_2_1 & param_3 | ~param_2_1 & param_4) + param_5 + param_7;
              return (varData_873 << param_6 | varData_873 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_66(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_874 = param_1_3 + (param_2_1 & param_4 | param_3 & ~param_4) + param_5 + param_7;
              return (varData_874 << param_6 | varData_874 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_67(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_875 = param_1_3 + (param_2_1 ^ param_3 ^ param_4) + param_5 + param_7;
              return (varData_875 << param_6 | varData_875 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_68(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_876 = param_1_3 + (param_3 ^ (param_2_1 | ~param_4)) + param_5 + param_7;
              return (varData_876 << param_6 | varData_876 >>> 32 - param_6) + param_2_1;
            }
            varData_833.MD5 = varData_836._createHelper(varData_839);
            varData_833.HmacMD5 = varData_836._createHmacHelper(varData_839);
          })(Math);
          return param_1_1.MD5;
        });
      }
    });
    var varData_877 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_878 = param_1_1;
            var varData_879 = varData_878.lib;
            var varData_880 = varData_879.WordArray;
            var varData_881 = varData_879.Hasher;
            var varData_882 = varData_878.algo;
            var varData_883 = [];
            var varData_884 = varData_882.SHA1 = varData_881.extend({
              _doReset: function () {
                this._hash = new varData_880.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_885 = this._hash.words;
                var varData_886 = varData_885[0];
                var varData_887 = varData_885[1];
                var varData_888 = varData_885[2];
                var varData_889 = varData_885[3];
                var varData_890 = varData_885[4];
                for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                  if (loopIdx < 16) {
                    varData_883[loopIdx] = param_1_2[param_2_1 + loopIdx] | 0;
                  } else {
                    var varData_891 = varData_883[loopIdx - 3] ^ varData_883[loopIdx - 8] ^ varData_883[loopIdx - 14] ^ varData_883[loopIdx - 16];
                    varData_883[loopIdx] = varData_891 << 1 | varData_891 >>> 31;
                  }
                  var varData_892 = (varData_886 << 5 | varData_886 >>> 27) + varData_890 + varData_883[loopIdx];
                  if (loopIdx < 20) {
                    varData_892 += (varData_887 & varData_888 | ~varData_887 & varData_889) + 1518500249;
                  } else if (loopIdx < 40) {
                    varData_892 += (varData_887 ^ varData_888 ^ varData_889) + 1859775393;
                  } else if (loopIdx < 60) {
                    varData_892 += (varData_887 & varData_888 | varData_887 & varData_889 | varData_888 & varData_889) - 1894007588;
                  } else {
                    varData_892 += (varData_887 ^ varData_888 ^ varData_889) - 899497514;
                  }
                  varData_890 = varData_889;
                  varData_889 = varData_888;
                  varData_888 = varData_887 << 30 | varData_887 >>> 2;
                  varData_887 = varData_886;
                  varData_886 = varData_892;
                }
                varData_885[0] = varData_885[0] + varData_886 | 0;
                varData_885[1] = varData_885[1] + varData_887 | 0;
                varData_885[2] = varData_885[2] + varData_888 | 0;
                varData_885[3] = varData_885[3] + varData_889 | 0;
                varData_885[4] = varData_885[4] + varData_890 | 0;
              },
              _doFinalize: function () {
                var varData_893 = this._data;
                var varData_894 = varData_893.words;
                var varData_895 = this._nDataBytes * 8;
                var varData_896 = varData_893.sigBytes * 8;
                varData_894[varData_896 >>> 5] |= 128 << 24 - varData_896 % 32;
                varData_894[(varData_896 + 64 >>> 9 << 4) + 14] = Math.floor(varData_895 / 4294967296);
                varData_894[(varData_896 + 64 >>> 9 << 4) + 15] = varData_895;
                varData_893.sigBytes = varData_894.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var varData_897 = varData_881.clone.call(this);
                varData_897._hash = this._hash.clone();
                return varData_897;
              }
            });
            varData_878.SHA1 = varData_881._createHelper(varData_884);
            varData_878.HmacSHA1 = varData_881._createHmacHelper(varData_884);
          })();
          return param_1_1.SHA1;
        });
      }
    });
    var varData_898 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_899 = param_1_1;
            var varData_900 = varData_899.lib;
            var varData_901 = varData_900.WordArray;
            var varData_902 = varData_900.Hasher;
            var varData_903 = varData_899.algo;
            var varData_904 = [];
            var varData_905 = [];
            (function () {
              function handleAction_69(param_1_3) {
                var varData_906 = param_1_2.sqrt(param_1_3);
                for (var loopIdx = 2; loopIdx <= varData_906; loopIdx++) {
                  if (!(param_1_3 % loopIdx)) {
                    return false;
                  }
                }
                return true;
              }
              function handleAction_70(param_1_3) {
                return (param_1_3 - (param_1_3 | 0)) * 4294967296 | 0;
              }
              var varData_907 = 2;
              var varData_908 = 0;
              while (varData_908 < 64) {
                if (handleAction_69(varData_907)) {
                  if (varData_908 < 8) {
                    varData_904[varData_908] = handleAction_70(param_1_2.pow(varData_907, 1 / 2));
                  }
                  varData_905[varData_908] = handleAction_70(param_1_2.pow(varData_907, 1 / 3));
                  varData_908++;
                }
                varData_907++;
              }
            })();
            var varData_909 = [];
            var varData_910 = varData_903.SHA256 = varData_902.extend({
              _doReset: function () {
                this._hash = new varData_901.init(varData_904.slice(0));
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                var varData_911 = this._hash.words;
                var varData_912 = varData_911[0];
                var varData_913 = varData_911[1];
                var varData_914 = varData_911[2];
                var varData_915 = varData_911[3];
                var varData_916 = varData_911[4];
                var varData_917 = varData_911[5];
                var varData_918 = varData_911[6];
                var varData_919 = varData_911[7];
                for (var loopIdx = 0; loopIdx < 64; loopIdx++) {
                  if (loopIdx < 16) {
                    varData_909[loopIdx] = param_1_3[param_2_1 + loopIdx] | 0;
                  } else {
                    var varData_920 = varData_909[loopIdx - 15];
                    var varData_921 = (varData_920 << 25 | varData_920 >>> 7) ^ (varData_920 << 14 | varData_920 >>> 18) ^ varData_920 >>> 3;
                    var varData_922 = varData_909[loopIdx - 2];
                    var varData_923 = (varData_922 << 15 | varData_922 >>> 17) ^ (varData_922 << 13 | varData_922 >>> 19) ^ varData_922 >>> 10;
                    varData_909[loopIdx] = varData_921 + varData_909[loopIdx - 7] + varData_923 + varData_909[loopIdx - 16];
                  }
                  var varData_924 = varData_916 & varData_917 ^ ~varData_916 & varData_918;
                  var varData_925 = varData_912 & varData_913 ^ varData_912 & varData_914 ^ varData_913 & varData_914;
                  var varData_926 = (varData_912 << 30 | varData_912 >>> 2) ^ (varData_912 << 19 | varData_912 >>> 13) ^ (varData_912 << 10 | varData_912 >>> 22);
                  var varData_927 = (varData_916 << 26 | varData_916 >>> 6) ^ (varData_916 << 21 | varData_916 >>> 11) ^ (varData_916 << 7 | varData_916 >>> 25);
                  var varData_928 = varData_919 + varData_927 + varData_924 + varData_905[loopIdx] + varData_909[loopIdx];
                  var varData_929 = varData_926 + varData_925;
                  varData_919 = varData_918;
                  varData_918 = varData_917;
                  varData_917 = varData_916;
                  varData_916 = varData_915 + varData_928 | 0;
                  varData_915 = varData_914;
                  varData_914 = varData_913;
                  varData_913 = varData_912;
                  varData_912 = varData_928 + varData_929 | 0;
                }
                varData_911[0] = varData_911[0] + varData_912 | 0;
                varData_911[1] = varData_911[1] + varData_913 | 0;
                varData_911[2] = varData_911[2] + varData_914 | 0;
                varData_911[3] = varData_911[3] + varData_915 | 0;
                varData_911[4] = varData_911[4] + varData_916 | 0;
                varData_911[5] = varData_911[5] + varData_917 | 0;
                varData_911[6] = varData_911[6] + varData_918 | 0;
                varData_911[7] = varData_911[7] + varData_919 | 0;
              },
              _doFinalize: function () {
                var varData_930 = this._data;
                var varData_931 = varData_930.words;
                var varData_932 = this._nDataBytes * 8;
                var varData_933 = varData_930.sigBytes * 8;
                varData_931[varData_933 >>> 5] |= 128 << 24 - varData_933 % 32;
                varData_931[(varData_933 + 64 >>> 9 << 4) + 14] = param_1_2.floor(varData_932 / 4294967296);
                varData_931[(varData_933 + 64 >>> 9 << 4) + 15] = varData_932;
                varData_930.sigBytes = varData_931.length * 4;
                this._process();
                return this._hash;
              },
              clone: function () {
                var varData_934 = varData_902.clone.call(this);
                varData_934._hash = this._hash.clone();
                return varData_934;
              }
            });
            varData_899.SHA256 = varData_902._createHelper(varData_910);
            varData_899.HmacSHA256 = varData_902._createHmacHelper(varData_910);
          })(Math);
          return param_1_1.SHA256;
        });
      }
    });
    var varData_935 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_898());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha256"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_936 = param_1_1;
            var varData_937 = varData_936.lib;
            var varData_938 = varData_937.WordArray;
            var varData_939 = varData_936.algo;
            var varData_940 = varData_939.SHA256;
            var varData_941 = varData_939.SHA224 = varData_940.extend({
              _doReset: function () {
                this._hash = new varData_938.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function () {
                var varData_942 = varData_940._doFinalize.call(this);
                varData_942.sigBytes -= 4;
                return varData_942;
              }
            });
            varData_936.SHA224 = varData_940._createHelper(varData_941);
            varData_936.HmacSHA224 = varData_940._createHmacHelper(varData_941);
          })();
          return param_1_1.SHA224;
        });
      }
    });
    var varData_943 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_766());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_944 = param_1_1;
            var varData_945 = varData_944.lib;
            var varData_946 = varData_945.Hasher;
            var varData_947 = varData_944.x64;
            var varData_948 = varData_947.Word;
            var varData_949 = varData_947.WordArray;
            var varData_950 = varData_944.algo;
            function handleAction_71() {
              return varData_948.create.apply(varData_948, arguments);
            }
            var varData_951 = [handleAction_71(1116352408, 3609767458), handleAction_71(1899447441, 602891725), handleAction_71(3049323471, 3964484399), handleAction_71(3921009573, 2173295548), handleAction_71(961987163, 4081628472), handleAction_71(1508970993, 3053834265), handleAction_71(2453635748, 2937671579), handleAction_71(2870763221, 3664609560), handleAction_71(3624381080, 2734883394), handleAction_71(310598401, 1164996542), handleAction_71(607225278, 1323610764), handleAction_71(1426881987, 3590304994), handleAction_71(1925078388, 4068182383), handleAction_71(2162078206, 991336113), handleAction_71(2614888103, 633803317), handleAction_71(3248222580, 3479774868), handleAction_71(3835390401, 2666613458), handleAction_71(4022224774, 944711139), handleAction_71(264347078, 2341262773), handleAction_71(604807628, 2007800933), handleAction_71(770255983, 1495990901), handleAction_71(1249150122, 1856431235), handleAction_71(1555081692, 3175218132), handleAction_71(1996064986, 2198950837), handleAction_71(2554220882, 3999719339), handleAction_71(2821834349, 766784016), handleAction_71(2952996808, 2566594879), handleAction_71(3210313671, 3203337956), handleAction_71(3336571891, 1034457026), handleAction_71(3584528711, 2466948901), handleAction_71(113926993, 3758326383), handleAction_71(338241895, 168717936), handleAction_71(666307205, 1188179964), handleAction_71(773529912, 1546045734), handleAction_71(1294757372, 1522805485), handleAction_71(1396182291, 2643833823), handleAction_71(1695183700, 2343527390), handleAction_71(1986661051, 1014477480), handleAction_71(2177026350, 1206759142), handleAction_71(2456956037, 344077627), handleAction_71(2730485921, 1290863460), handleAction_71(2820302411, 3158454273), handleAction_71(3259730800, 3505952657), handleAction_71(3345764771, 106217008), handleAction_71(3516065817, 3606008344), handleAction_71(3600352804, 1432725776), handleAction_71(4094571909, 1467031594), handleAction_71(275423344, 851169720), handleAction_71(430227734, 3100823752), handleAction_71(506948616, 1363258195), handleAction_71(659060556, 3750685593), handleAction_71(883997877, 3785050280), handleAction_71(958139571, 3318307427), handleAction_71(1322822218, 3812723403), handleAction_71(1537002063, 2003034995), handleAction_71(1747873779, 3602036899), handleAction_71(1955562222, 1575990012), handleAction_71(2024104815, 1125592928), handleAction_71(2227730452, 2716904306), handleAction_71(2361852424, 442776044), handleAction_71(2428436474, 593698344), handleAction_71(2756734187, 3733110249), handleAction_71(3204031479, 2999351573), handleAction_71(3329325298, 3815920427), handleAction_71(3391569614, 3928383900), handleAction_71(3515267271, 566280711), handleAction_71(3940187606, 3454069534), handleAction_71(4118630271, 4000239992), handleAction_71(116418474, 1914138554), handleAction_71(174292421, 2731055270), handleAction_71(289380356, 3203993006), handleAction_71(460393269, 320620315), handleAction_71(685471733, 587496836), handleAction_71(852142971, 1086792851), handleAction_71(1017036298, 365543100), handleAction_71(1126000580, 2618297676), handleAction_71(1288033470, 3409855158), handleAction_71(1501505948, 4234509866), handleAction_71(1607167915, 987167468), handleAction_71(1816402316, 1246189591)];
            var varData_952 = [];
            (function () {
              for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                varData_952[loopIdx] = handleAction_71();
              }
            })();
            var varData_953 = varData_950.SHA512 = varData_946.extend({
              _doReset: function () {
                this._hash = new varData_949.init([new varData_948.init(1779033703, 4089235720), new varData_948.init(3144134277, 2227873595), new varData_948.init(1013904242, 4271175723), new varData_948.init(2773480762, 1595750129), new varData_948.init(1359893119, 2917565137), new varData_948.init(2600822924, 725511199), new varData_948.init(528734635, 4215389547), new varData_948.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_954 = this._hash.words;
                var varData_955 = varData_954[0];
                var varData_956 = varData_954[1];
                var varData_957 = varData_954[2];
                var varData_958 = varData_954[3];
                var varData_959 = varData_954[4];
                var varData_960 = varData_954[5];
                var varData_961 = varData_954[6];
                var varData_962 = varData_954[7];
                var varData_963 = varData_955.high;
                var varData_964 = varData_955.low;
                var varData_965 = varData_956.high;
                var varData_966 = varData_956.low;
                var varData_967 = varData_957.high;
                var varData_968 = varData_957.low;
                var varData_969 = varData_958.high;
                var varData_970 = varData_958.low;
                var varData_971 = varData_959.high;
                var varData_972 = varData_959.low;
                var varData_973 = varData_960.high;
                var varData_974 = varData_960.low;
                var varData_975 = varData_961.high;
                var varData_976 = varData_961.low;
                var varData_977 = varData_962.high;
                var varData_978 = varData_962.low;
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
                var varData_994 = varData_978;
                for (var loopIdx = 0; loopIdx < 80; loopIdx++) {
                  var varData_995 = varData_952[loopIdx];
                  if (loopIdx < 16) {
                    var varData_996 = varData_995.high = param_1_2[param_2_1 + loopIdx * 2] | 0;
                    var varData_997 = varData_995.low = param_1_2[param_2_1 + loopIdx * 2 + 1] | 0;
                  } else {
                    var varData_998 = varData_952[loopIdx - 15];
                    var varData_999 = varData_998.high;
                    var varData_1000 = varData_998.low;
                    var varData_1001 = (varData_999 >>> 1 | varData_1000 << 31) ^ (varData_999 >>> 8 | varData_1000 << 24) ^ varData_999 >>> 7;
                    var varData_1002 = (varData_1000 >>> 1 | varData_999 << 31) ^ (varData_1000 >>> 8 | varData_999 << 24) ^ (varData_1000 >>> 7 | varData_999 << 25);
                    var varData_1003 = varData_952[loopIdx - 2];
                    var varData_1004 = varData_1003.high;
                    var varData_1005 = varData_1003.low;
                    var varData_1006 = (varData_1004 >>> 19 | varData_1005 << 13) ^ (varData_1004 << 3 | varData_1005 >>> 29) ^ varData_1004 >>> 6;
                    var varData_1007 = (varData_1005 >>> 19 | varData_1004 << 13) ^ (varData_1005 << 3 | varData_1004 >>> 29) ^ (varData_1005 >>> 6 | varData_1004 << 26);
                    var varData_1008 = varData_952[loopIdx - 7];
                    var varData_1009 = varData_1008.high;
                    var varData_1010 = varData_1008.low;
                    var varData_1011 = varData_952[loopIdx - 16];
                    var varData_1012 = varData_1011.high;
                    var varData_1013 = varData_1011.low;
                    var varData_997 = varData_1002 + varData_1010;
                    var varData_996 = varData_1001 + varData_1009 + (varData_997 >>> 0 < varData_1002 >>> 0 ? 1 : 0);
                    var varData_997 = varData_997 + varData_1007;
                    var varData_996 = varData_996 + varData_1006 + (varData_997 >>> 0 < varData_1007 >>> 0 ? 1 : 0);
                    var varData_997 = varData_997 + varData_1013;
                    var varData_996 = varData_996 + varData_1012 + (varData_997 >>> 0 < varData_1013 >>> 0 ? 1 : 0);
                    varData_995.high = varData_996;
                    varData_995.low = varData_997;
                  }
                  var varData_1014 = varData_987 & varData_989 ^ ~varData_987 & varData_991;
                  var varData_1015 = varData_988 & varData_990 ^ ~varData_988 & varData_992;
                  var varData_1016 = varData_979 & varData_981 ^ varData_979 & varData_983 ^ varData_981 & varData_983;
                  var varData_1017 = varData_980 & varData_982 ^ varData_980 & varData_984 ^ varData_982 & varData_984;
                  var varData_1018 = (varData_979 >>> 28 | varData_980 << 4) ^ (varData_979 << 30 | varData_980 >>> 2) ^ (varData_979 << 25 | varData_980 >>> 7);
                  var varData_1019 = (varData_980 >>> 28 | varData_979 << 4) ^ (varData_980 << 30 | varData_979 >>> 2) ^ (varData_980 << 25 | varData_979 >>> 7);
                  var varData_1020 = (varData_987 >>> 14 | varData_988 << 18) ^ (varData_987 >>> 18 | varData_988 << 14) ^ (varData_987 << 23 | varData_988 >>> 9);
                  var varData_1021 = (varData_988 >>> 14 | varData_987 << 18) ^ (varData_988 >>> 18 | varData_987 << 14) ^ (varData_988 << 23 | varData_987 >>> 9);
                  var varData_1022 = varData_951[loopIdx];
                  var varData_1023 = varData_1022.high;
                  var varData_1024 = varData_1022.low;
                  var varData_1025 = varData_994 + varData_1021;
                  var varData_1026 = varData_993 + varData_1020 + (varData_1025 >>> 0 < varData_994 >>> 0 ? 1 : 0);
                  var varData_1025 = varData_1025 + varData_1015;
                  var varData_1026 = varData_1026 + varData_1014 + (varData_1025 >>> 0 < varData_1015 >>> 0 ? 1 : 0);
                  var varData_1025 = varData_1025 + varData_1024;
                  var varData_1026 = varData_1026 + varData_1023 + (varData_1025 >>> 0 < varData_1024 >>> 0 ? 1 : 0);
                  var varData_1025 = varData_1025 + varData_997;
                  var varData_1026 = varData_1026 + varData_996 + (varData_1025 >>> 0 < varData_997 >>> 0 ? 1 : 0);
                  var varData_1027 = varData_1019 + varData_1017;
                  var varData_1028 = varData_1018 + varData_1016 + (varData_1027 >>> 0 < varData_1019 >>> 0 ? 1 : 0);
                  varData_993 = varData_991;
                  varData_994 = varData_992;
                  varData_991 = varData_989;
                  varData_992 = varData_990;
                  varData_989 = varData_987;
                  varData_990 = varData_988;
                  varData_988 = varData_986 + varData_1025 | 0;
                  varData_987 = varData_985 + varData_1026 + (varData_988 >>> 0 < varData_986 >>> 0 ? 1 : 0) | 0;
                  varData_985 = varData_983;
                  varData_986 = varData_984;
                  varData_983 = varData_981;
                  varData_984 = varData_982;
                  varData_981 = varData_979;
                  varData_982 = varData_980;
                  varData_980 = varData_1025 + varData_1027 | 0;
                  varData_979 = varData_1026 + varData_1028 + (varData_980 >>> 0 < varData_1025 >>> 0 ? 1 : 0) | 0;
                }
                varData_964 = varData_955.low = varData_964 + varData_980;
                varData_955.high = varData_963 + varData_979 + (varData_964 >>> 0 < varData_980 >>> 0 ? 1 : 0);
                varData_966 = varData_956.low = varData_966 + varData_982;
                varData_956.high = varData_965 + varData_981 + (varData_966 >>> 0 < varData_982 >>> 0 ? 1 : 0);
                varData_968 = varData_957.low = varData_968 + varData_984;
                varData_957.high = varData_967 + varData_983 + (varData_968 >>> 0 < varData_984 >>> 0 ? 1 : 0);
                varData_970 = varData_958.low = varData_970 + varData_986;
                varData_958.high = varData_969 + varData_985 + (varData_970 >>> 0 < varData_986 >>> 0 ? 1 : 0);
                varData_972 = varData_959.low = varData_972 + varData_988;
                varData_959.high = varData_971 + varData_987 + (varData_972 >>> 0 < varData_988 >>> 0 ? 1 : 0);
                varData_974 = varData_960.low = varData_974 + varData_990;
                varData_960.high = varData_973 + varData_989 + (varData_974 >>> 0 < varData_990 >>> 0 ? 1 : 0);
                varData_976 = varData_961.low = varData_976 + varData_992;
                varData_961.high = varData_975 + varData_991 + (varData_976 >>> 0 < varData_992 >>> 0 ? 1 : 0);
                varData_978 = varData_962.low = varData_978 + varData_994;
                varData_962.high = varData_977 + varData_993 + (varData_978 >>> 0 < varData_994 >>> 0 ? 1 : 0);
              },
              _doFinalize: function () {
                var varData_1029 = this._data;
                var varData_1030 = varData_1029.words;
                var varData_1031 = this._nDataBytes * 8;
                var varData_1032 = varData_1029.sigBytes * 8;
                varData_1030[varData_1032 >>> 5] |= 128 << 24 - varData_1032 % 32;
                varData_1030[(varData_1032 + 128 >>> 10 << 5) + 30] = Math.floor(varData_1031 / 4294967296);
                varData_1030[(varData_1032 + 128 >>> 10 << 5) + 31] = varData_1031;
                varData_1029.sigBytes = varData_1030.length * 4;
                this._process();
                var varData_1033 = this._hash.toX32();
                return varData_1033;
              },
              clone: function () {
                var varData_1034 = varData_946.clone.call(this);
                varData_1034._hash = this._hash.clone();
                return varData_1034;
              },
              blockSize: 32
            });
            varData_944.SHA512 = varData_946._createHelper(varData_953);
            varData_944.HmacSHA512 = varData_946._createHmacHelper(varData_953);
          })();
          return param_1_1.SHA512;
        });
      }
    });
    var varData_1035 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_766(), varData_943());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./sha512"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1036 = param_1_1;
            var varData_1037 = varData_1036.x64;
            var varData_1038 = varData_1037.Word;
            var varData_1039 = varData_1037.WordArray;
            var varData_1040 = varData_1036.algo;
            var varData_1041 = varData_1040.SHA512;
            var varData_1042 = varData_1040.SHA384 = varData_1041.extend({
              _doReset: function () {
                this._hash = new varData_1039.init([new varData_1038.init(3418070365, 3238371032), new varData_1038.init(1654270250, 914150663), new varData_1038.init(2438529370, 812702999), new varData_1038.init(355462360, 4144912697), new varData_1038.init(1731405415, 4290775857), new varData_1038.init(2394180231, 1750603025), new varData_1038.init(3675008525, 1694076839), new varData_1038.init(1203062813, 3204075428)]);
              },
              _doFinalize: function () {
                var varData_1043 = varData_1041._doFinalize.call(this);
                varData_1043.sigBytes -= 16;
                return varData_1043;
              }
            });
            varData_1036.SHA384 = varData_1041._createHelper(varData_1042);
            varData_1036.HmacSHA384 = varData_1041._createHmacHelper(varData_1042);
          })();
          return param_1_1.SHA384;
        });
      }
    });
    var varData_1044 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_766());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_1045 = param_1_1;
            var varData_1046 = varData_1045.lib;
            var varData_1047 = varData_1046.WordArray;
            var varData_1048 = varData_1046.Hasher;
            var varData_1049 = varData_1045.x64;
            var varData_1050 = varData_1049.Word;
            var varData_1051 = varData_1045.algo;
            var varData_1052 = [];
            var varData_1053 = [];
            var varData_1054 = [];
            (function () {
              var varData_1055 = 1;
              var varData_1056 = 0;
              for (var loopIdx = 0; loopIdx < 24; loopIdx++) {
                varData_1052[varData_1055 + varData_1056 * 5] = (loopIdx + 1) * (loopIdx + 2) / 2 % 64;
                var varData_1057 = varData_1056 % 5;
                var varData_1058 = (varData_1055 * 2 + varData_1056 * 3) % 5;
                varData_1055 = varData_1057;
                varData_1056 = varData_1058;
              }
              for (var varData_1055 = 0; varData_1055 < 5; varData_1055++) {
                for (var varData_1056 = 0; varData_1056 < 5; varData_1056++) {
                  varData_1053[varData_1055 + varData_1056 * 5] = varData_1056 + (varData_1055 * 2 + varData_1056 * 3) % 5 * 5;
                }
              }
              var varData_1059 = 1;
              for (var loopIdx_1 = 0; loopIdx_1 < 24; loopIdx_1++) {
                var varData_1060 = 0;
                var varData_1061 = 0;
                for (var loopIdx_2 = 0; loopIdx_2 < 7; loopIdx_2++) {
                  if (varData_1059 & 1) {
                    var varData_1062 = (1 << loopIdx_2) - 1;
                    if (varData_1062 < 32) {
                      varData_1061 ^= 1 << varData_1062;
                    } else {
                      varData_1060 ^= 1 << varData_1062 - 32;
                    }
                  }
                  if (varData_1059 & 128) {
                    varData_1059 = varData_1059 << 1 ^ 113;
                  } else {
                    varData_1059 <<= 1;
                  }
                }
                varData_1054[loopIdx_1] = varData_1050.create(varData_1060, varData_1061);
              }
            })();
            var varData_1063 = [];
            (function () {
              for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                varData_1063[loopIdx] = varData_1050.create();
              }
            })();
            var varData_1064 = varData_1051.SHA3 = varData_1048.extend({
              cfg: varData_1048.cfg.extend({
                outputLength: 512
              }),
              _doReset: function () {
                var varData_1065 = this._state = [];
                for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                  varData_1065[loopIdx] = new varData_1050.init();
                }
                this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                var varData_1066 = this._state;
                var varData_1067 = this.blockSize / 2;
                for (var loopIdx = 0; loopIdx < varData_1067; loopIdx++) {
                  var varData_1068 = param_1_3[param_2_1 + loopIdx * 2];
                  var varData_1069 = param_1_3[param_2_1 + loopIdx * 2 + 1];
                  varData_1068 = (varData_1068 << 8 | varData_1068 >>> 24) & 16711935 | (varData_1068 << 24 | varData_1068 >>> 8) & -16711936;
                  varData_1069 = (varData_1069 << 8 | varData_1069 >>> 24) & 16711935 | (varData_1069 << 24 | varData_1069 >>> 8) & -16711936;
                  var varData_1070 = varData_1066[loopIdx];
                  varData_1070.high ^= varData_1069;
                  varData_1070.low ^= varData_1068;
                }
                for (var loopIdx_1 = 0; loopIdx_1 < 24; loopIdx_1++) {
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    var varData_1071 = 0;
                    var varData_1072 = 0;
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var varData_1070 = varData_1066[loopIdx_2 + loopIdx_3 * 5];
                      varData_1071 ^= varData_1070.high;
                      varData_1072 ^= varData_1070.low;
                    }
                    var varData_1073 = varData_1063[loopIdx_2];
                    varData_1073.high = varData_1071;
                    varData_1073.low = varData_1072;
                  }
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    var varData_1074 = varData_1063[(loopIdx_2 + 4) % 5];
                    var varData_1075 = varData_1063[(loopIdx_2 + 1) % 5];
                    var varData_1076 = varData_1075.high;
                    var varData_1077 = varData_1075.low;
                    var varData_1071 = varData_1074.high ^ (varData_1076 << 1 | varData_1077 >>> 31);
                    var varData_1072 = varData_1074.low ^ (varData_1077 << 1 | varData_1076 >>> 31);
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var varData_1070 = varData_1066[loopIdx_2 + loopIdx_3 * 5];
                      varData_1070.high ^= varData_1071;
                      varData_1070.low ^= varData_1072;
                    }
                  }
                  for (var loopIdx_4 = 1; loopIdx_4 < 25; loopIdx_4++) {
                    var varData_1070 = varData_1066[loopIdx_4];
                    var varData_1078 = varData_1070.high;
                    var varData_1079 = varData_1070.low;
                    var varData_1080 = varData_1052[loopIdx_4];
                    if (varData_1080 < 32) {
                      var varData_1071 = varData_1078 << varData_1080 | varData_1079 >>> 32 - varData_1080;
                      var varData_1072 = varData_1079 << varData_1080 | varData_1078 >>> 32 - varData_1080;
                    } else {
                      var varData_1071 = varData_1079 << varData_1080 - 32 | varData_1078 >>> 64 - varData_1080;
                      var varData_1072 = varData_1078 << varData_1080 - 32 | varData_1079 >>> 64 - varData_1080;
                    }
                    var varData_1081 = varData_1063[varData_1053[loopIdx_4]];
                    varData_1081.high = varData_1071;
                    varData_1081.low = varData_1072;
                  }
                  var varData_1082 = varData_1063[0];
                  var varData_1083 = varData_1066[0];
                  varData_1082.high = varData_1083.high;
                  varData_1082.low = varData_1083.low;
                  for (var loopIdx_2 = 0; loopIdx_2 < 5; loopIdx_2++) {
                    for (var loopIdx_3 = 0; loopIdx_3 < 5; loopIdx_3++) {
                      var loopIdx_4 = loopIdx_2 + loopIdx_3 * 5;
                      var varData_1070 = varData_1066[loopIdx_4];
                      var varData_1084 = varData_1063[loopIdx_4];
                      var varData_1085 = varData_1063[(loopIdx_2 + 1) % 5 + loopIdx_3 * 5];
                      var varData_1086 = varData_1063[(loopIdx_2 + 2) % 5 + loopIdx_3 * 5];
                      varData_1070.high = varData_1084.high ^ ~varData_1085.high & varData_1086.high;
                      varData_1070.low = varData_1084.low ^ ~varData_1085.low & varData_1086.low;
                    }
                  }
                  var varData_1070 = varData_1066[0];
                  var varData_1087 = varData_1054[loopIdx_1];
                  varData_1070.high ^= varData_1087.high;
                  varData_1070.low ^= varData_1087.low;
                  ;
                }
              },
              _doFinalize: function () {
                var varData_1088 = this._data;
                var varData_1089 = varData_1088.words;
                var varData_1090 = this._nDataBytes * 8;
                var varData_1091 = varData_1088.sigBytes * 8;
                var varData_1092 = this.blockSize * 32;
                varData_1089[varData_1091 >>> 5] |= 1 << 24 - varData_1091 % 32;
                varData_1089[(param_1_2.ceil((varData_1091 + 1) / varData_1092) * varData_1092 >>> 5) - 1] |= 128;
                varData_1088.sigBytes = varData_1089.length * 4;
                this._process();
                var varData_1093 = this._state;
                var varData_1094 = this.cfg.outputLength / 8;
                var varData_1095 = varData_1094 / 8;
                var varData_1096 = [];
                for (var loopIdx = 0; loopIdx < varData_1095; loopIdx++) {
                  var varData_1097 = varData_1093[loopIdx];
                  var varData_1098 = varData_1097.high;
                  var varData_1099 = varData_1097.low;
                  varData_1098 = (varData_1098 << 8 | varData_1098 >>> 24) & 16711935 | (varData_1098 << 24 | varData_1098 >>> 8) & -16711936;
                  varData_1099 = (varData_1099 << 8 | varData_1099 >>> 24) & 16711935 | (varData_1099 << 24 | varData_1099 >>> 8) & -16711936;
                  varData_1096.push(varData_1099);
                  varData_1096.push(varData_1098);
                }
                return new varData_1047.init(varData_1096, varData_1094);
              },
              clone: function () {
                var varData_1100 = varData_1048.clone.call(this);
                var varData_1101 = varData_1100._state = this._state.slice(0);
                for (var loopIdx = 0; loopIdx < 25; loopIdx++) {
                  varData_1101[loopIdx] = varData_1101[loopIdx].clone();
                }
                return varData_1100;
              }
            });
            varData_1045.SHA3 = varData_1048._createHelper(varData_1064);
            varData_1045.HmacSHA3 = varData_1048._createHmacHelper(varData_1064);
          })(Math);
          return param_1_1.SHA3;
        });
      }
    });
    var varData_1102 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_1103 = param_1_1;
            var varData_1104 = varData_1103.lib;
            var varData_1105 = varData_1104.WordArray;
            var varData_1106 = varData_1104.Hasher;
            var varData_1107 = varData_1103.algo;
            var varData_1108 = varData_1105.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
            var varData_1109 = varData_1105.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
            var varData_1110 = varData_1105.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
            var varData_1111 = varData_1105.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
            var varData_1112 = varData_1105.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
            var varData_1113 = varData_1105.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            var varData_1114 = varData_1107.RIPEMD160 = varData_1106.extend({
              _doReset: function () {
                this._hash = varData_1105.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function (param_1_3, param_2_1) {
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  var varData_1115 = param_2_1 + loopIdx;
                  var varData_1116 = param_1_3[varData_1115];
                  param_1_3[varData_1115] = (varData_1116 << 8 | varData_1116 >>> 24) & 16711935 | (varData_1116 << 24 | varData_1116 >>> 8) & -16711936;
                }
                var varData_1117 = this._hash.words;
                var varData_1118 = varData_1112.words;
                var varData_1119 = varData_1113.words;
                var varData_1120 = varData_1108.words;
                var varData_1121 = varData_1109.words;
                var varData_1122 = varData_1110.words;
                var varData_1123 = varData_1111.words;
                var varData_1124;
                var varData_1125;
                var varData_1126;
                var varData_1127;
                var varData_1128;
                var varData_1129;
                var varData_1130;
                var varData_1131;
                var varData_1132;
                var varData_1133;
                varData_1129 = varData_1124 = varData_1117[0];
                varData_1130 = varData_1125 = varData_1117[1];
                varData_1131 = varData_1126 = varData_1117[2];
                varData_1132 = varData_1127 = varData_1117[3];
                varData_1133 = varData_1128 = varData_1117[4];
                var varData_1134;
                for (var loopIdx = 0; loopIdx < 80; loopIdx += 1) {
                  varData_1134 = varData_1124 + param_1_3[param_2_1 + varData_1120[loopIdx]] | 0;
                  if (loopIdx < 16) {
                    varData_1134 += handleAction_72(varData_1125, varData_1126, varData_1127) + varData_1118[0];
                  } else if (loopIdx < 32) {
                    varData_1134 += handleAction_73(varData_1125, varData_1126, varData_1127) + varData_1118[1];
                  } else if (loopIdx < 48) {
                    varData_1134 += handleAction_74(varData_1125, varData_1126, varData_1127) + varData_1118[2];
                  } else if (loopIdx < 64) {
                    varData_1134 += handleAction_75(varData_1125, varData_1126, varData_1127) + varData_1118[3];
                  } else {
                    varData_1134 += handleAction_76(varData_1125, varData_1126, varData_1127) + varData_1118[4];
                  }
                  varData_1134 = varData_1134 | 0;
                  varData_1134 = handleAction_77(varData_1134, varData_1122[loopIdx]);
                  varData_1134 = varData_1134 + varData_1128 | 0;
                  varData_1124 = varData_1128;
                  varData_1128 = varData_1127;
                  varData_1127 = handleAction_77(varData_1126, 10);
                  varData_1126 = varData_1125;
                  varData_1125 = varData_1134;
                  varData_1134 = varData_1129 + param_1_3[param_2_1 + varData_1121[loopIdx]] | 0;
                  if (loopIdx < 16) {
                    varData_1134 += handleAction_76(varData_1130, varData_1131, varData_1132) + varData_1119[0];
                  } else if (loopIdx < 32) {
                    varData_1134 += handleAction_75(varData_1130, varData_1131, varData_1132) + varData_1119[1];
                  } else if (loopIdx < 48) {
                    varData_1134 += handleAction_74(varData_1130, varData_1131, varData_1132) + varData_1119[2];
                  } else if (loopIdx < 64) {
                    varData_1134 += handleAction_73(varData_1130, varData_1131, varData_1132) + varData_1119[3];
                  } else {
                    varData_1134 += handleAction_72(varData_1130, varData_1131, varData_1132) + varData_1119[4];
                  }
                  varData_1134 = varData_1134 | 0;
                  varData_1134 = handleAction_77(varData_1134, varData_1123[loopIdx]);
                  varData_1134 = varData_1134 + varData_1133 | 0;
                  varData_1129 = varData_1133;
                  varData_1133 = varData_1132;
                  varData_1132 = handleAction_77(varData_1131, 10);
                  varData_1131 = varData_1130;
                  varData_1130 = varData_1134;
                }
                varData_1134 = varData_1117[1] + varData_1126 + varData_1132 | 0;
                varData_1117[1] = varData_1117[2] + varData_1127 + varData_1133 | 0;
                varData_1117[2] = varData_1117[3] + varData_1128 + varData_1129 | 0;
                varData_1117[3] = varData_1117[4] + varData_1124 + varData_1130 | 0;
                varData_1117[4] = varData_1117[0] + varData_1125 + varData_1131 | 0;
                varData_1117[0] = varData_1134;
              },
              _doFinalize: function () {
                var varData_1135 = this._data;
                var varData_1136 = varData_1135.words;
                var varData_1137 = this._nDataBytes * 8;
                var varData_1138 = varData_1135.sigBytes * 8;
                varData_1136[varData_1138 >>> 5] |= 128 << 24 - varData_1138 % 32;
                varData_1136[(varData_1138 + 64 >>> 9 << 4) + 14] = (varData_1137 << 8 | varData_1137 >>> 24) & 16711935 | (varData_1137 << 24 | varData_1137 >>> 8) & -16711936;
                varData_1135.sigBytes = (varData_1136.length + 1) * 4;
                this._process();
                var varData_1139 = this._hash;
                var varData_1140 = varData_1139.words;
                for (var loopIdx = 0; loopIdx < 5; loopIdx++) {
                  var varData_1141 = varData_1140[loopIdx];
                  varData_1140[loopIdx] = (varData_1141 << 8 | varData_1141 >>> 24) & 16711935 | (varData_1141 << 24 | varData_1141 >>> 8) & -16711936;
                }
                return varData_1139;
              },
              clone: function () {
                var varData_1142 = varData_1106.clone.call(this);
                varData_1142._hash = this._hash.clone();
                return varData_1142;
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
            varData_1103.RIPEMD160 = varData_1106._createHelper(varData_1114);
            varData_1103.HmacRIPEMD160 = varData_1106._createHmacHelper(varData_1114);
          })(Math);
          return param_1_1.RIPEMD160;
        });
      }
    });
    var varData_1143 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1144 = param_1_1;
            var varData_1145 = varData_1144.lib;
            var varData_1146 = varData_1145.Base;
            var varData_1147 = varData_1144.enc;
            var varData_1148 = varData_1147.Utf8;
            var varData_1149 = varData_1144.algo;
            var varData_1150 = varData_1149.HMAC = varData_1146.extend({
              init: function (param_1_2, param_2_1) {
                param_1_2 = this._hasher = new param_1_2.init();
                if (typeof param_2_1 == "string") {
                  param_2_1 = varData_1148.parse(param_2_1);
                }
                var varData_1151 = param_1_2.blockSize;
                var varData_1152 = varData_1151 * 4;
                if (param_2_1.sigBytes > varData_1152) {
                  param_2_1 = param_1_2.finalize(param_2_1);
                }
                param_2_1.clamp();
                var varData_1153 = this._oKey = param_2_1.clone();
                var varData_1154 = this._iKey = param_2_1.clone();
                var varData_1155 = varData_1153.words;
                var varData_1156 = varData_1154.words;
                for (var loopIdx = 0; loopIdx < varData_1151; loopIdx++) {
                  varData_1155[loopIdx] ^= 1549556828;
                  varData_1156[loopIdx] ^= 909522486;
                }
                varData_1153.sigBytes = varData_1154.sigBytes = varData_1152;
                this.reset();
              },
              reset: function () {
                var varData_1157 = this._hasher;
                varData_1157.reset();
                varData_1157.update(this._iKey);
              },
              update: function (param_1_2) {
                this._hasher.update(param_1_2);
                return this;
              },
              finalize: function (param_1_2) {
                var varData_1158 = this._hasher;
                var varData_1159 = varData_1158.finalize(param_1_2);
                varData_1158.reset();
                var varData_1160 = varData_1158.finalize(this._oKey.clone().concat(varData_1159));
                return varData_1160;
              }
            });
          })();
        });
      }
    });
    var varData_1161 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_877(), varData_1143());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1162 = param_1_1;
            var varData_1163 = varData_1162.lib;
            var varData_1164 = varData_1163.Base;
            var varData_1165 = varData_1163.WordArray;
            var varData_1166 = varData_1162.algo;
            var varData_1167 = varData_1166.SHA1;
            var varData_1168 = varData_1166.HMAC;
            var varData_1169 = {
              keySize: 4,
              hasher: varData_1167,
              iterations: 1
            };
            var varData_1170 = varData_1166.PBKDF2 = varData_1164.extend({
              cfg: varData_1164.extend(varData_1169),
              init: function (param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function (param_1_2, param_2_1) {
                var varData_1171 = this.cfg;
                var varData_1172 = varData_1168.create(varData_1171.hasher, param_1_2);
                var varData_1173 = varData_1165.create();
                var varData_1174 = varData_1165.create([1]);
                var varData_1175 = varData_1173.words;
                var varData_1176 = varData_1174.words;
                var varData_1177 = varData_1171.keySize;
                var varData_1178 = varData_1171.iterations;
                while (varData_1175.length < varData_1177) {
                  var varData_1179 = varData_1172.update(param_2_1).finalize(varData_1174);
                  varData_1172.reset();
                  var varData_1180 = varData_1179.words;
                  var varData_1181 = varData_1180.length;
                  var varData_1182 = varData_1179;
                  for (var loopIdx = 1; loopIdx < varData_1178; loopIdx++) {
                    varData_1182 = varData_1172.finalize(varData_1182);
                    varData_1172.reset();
                    var varData_1183 = varData_1182.words;
                    for (var loopIdx_1 = 0; loopIdx_1 < varData_1181; loopIdx_1++) {
                      varData_1180[loopIdx_1] ^= varData_1183[loopIdx_1];
                    }
                  }
                  varData_1173.concat(varData_1179);
                  varData_1176[0]++;
                }
                varData_1173.sigBytes = varData_1177 * 4;
                return varData_1173;
              }
            });
            varData_1162.PBKDF2 = function (param_1_2, param_2_1, param_3) {
              return varData_1170.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.PBKDF2;
        });
      }
    });
    var varData_1184 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_877(), varData_1143());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1185 = param_1_1;
            var varData_1186 = varData_1185.lib;
            var varData_1187 = varData_1186.Base;
            var varData_1188 = varData_1186.WordArray;
            var varData_1189 = varData_1185.algo;
            var varData_1190 = varData_1189.MD5;
            var varData_1191 = {
              keySize: 4,
              hasher: varData_1190,
              iterations: 1
            };
            var varData_1192 = varData_1189.EvpKDF = varData_1187.extend({
              cfg: varData_1187.extend(varData_1191),
              init: function (param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function (param_1_2, param_2_1) {
                var varData_1193 = this.cfg;
                var varData_1194 = varData_1193.hasher.create();
                var varData_1195 = varData_1188.create();
                var varData_1196 = varData_1195.words;
                var varData_1197 = varData_1193.keySize;
                var varData_1198 = varData_1193.iterations;
                while (varData_1196.length < varData_1197) {
                  if (varData_1199) {
                    varData_1194.update(varData_1199);
                  }
                  var varData_1199 = varData_1194.update(param_1_2).finalize(param_2_1);
                  varData_1194.reset();
                  for (var loopIdx = 1; loopIdx < varData_1198; loopIdx++) {
                    varData_1199 = varData_1194.finalize(varData_1199);
                    varData_1194.reset();
                  }
                  varData_1195.concat(varData_1199);
                }
                varData_1195.sigBytes = varData_1197 * 4;
                return varData_1195;
              }
            });
            varData_1185.EvpKDF = function (param_1_2, param_2_1, param_3) {
              return varData_1192.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.EvpKDF;
        });
      }
    });
    var varData_1200 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1184());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./evpkdf"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          if (!param_1_1.lib.Cipher) {
            (function (param_1_2) {
              var varData_1201 = param_1_1;
              var varData_1202 = varData_1201.lib;
              var varData_1203 = varData_1202.Base;
              var varData_1204 = varData_1202.WordArray;
              var varData_1205 = varData_1202.BufferedBlockAlgorithm;
              var varData_1206 = varData_1201.enc;
              var varData_1207 = varData_1206.Utf8;
              var varData_1208 = varData_1206.Base64;
              var varData_1209 = varData_1201.algo;
              var varData_1210 = varData_1209.EvpKDF;
              var varData_1211 = varData_1202.Cipher = varData_1205.extend({
                cfg: varData_1203.extend(),
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
                  varData_1205.reset.call(this);
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
                  var varData_1212 = this._doFinalize();
                  return varData_1212;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function () {
                  function handleAction_78(param_1_3) {
                    if (typeof param_1_3 == "string") {
                      return varData_1266;
                    } else {
                      return varData_1253;
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
              var varData_1213 = varData_1202.StreamCipher = varData_1211.extend({
                _doFinalize: function () {
                  var varData_1214 = this._process(true);
                  return varData_1214;
                },
                blockSize: 1
              });
              var varData_1215 = varData_1201.mode = {};
              var varData_1216 = varData_1202.BlockCipherMode = varData_1203.extend({
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
              var varData_1217 = varData_1215.CBC = function () {
                var varData_1218 = varData_1216.extend();
                varData_1218.Encryptor = varData_1218.extend({
                  processBlock: function (param_1_3, param_2_1) {
                    var varData_1219 = this._cipher;
                    var varData_1220 = varData_1219.blockSize;
                    handleAction_79.call(this, param_1_3, param_2_1, varData_1220);
                    varData_1219.encryptBlock(param_1_3, param_2_1);
                    this._prevBlock = param_1_3.slice(param_2_1, param_2_1 + varData_1220);
                  }
                });
                varData_1218.Decryptor = varData_1218.extend({
                  processBlock: function (param_1_3, param_2_1) {
                    var varData_1221 = this._cipher;
                    var varData_1222 = varData_1221.blockSize;
                    var varData_1223 = param_1_3.slice(param_2_1, param_2_1 + varData_1222);
                    varData_1221.decryptBlock(param_1_3, param_2_1);
                    handleAction_79.call(this, param_1_3, param_2_1, varData_1222);
                    this._prevBlock = varData_1223;
                  }
                });
                function handleAction_79(param_1_3, param_2_1, param_3) {
                  var varData_1224 = this._iv;
                  if (varData_1224) {
                    var varData_1225 = varData_1224;
                    this._iv = param_1_2;
                  } else {
                    var varData_1225 = this._prevBlock;
                  }
                  for (var loopIdx = 0; loopIdx < param_3; loopIdx++) {
                    param_1_3[param_2_1 + loopIdx] ^= varData_1225[loopIdx];
                  }
                }
                return varData_1218;
              }();
              var varData_1226 = varData_1201.pad = {};
              var varData_1227 = varData_1226.Pkcs7 = {
                pad: function (param_1_3, param_2_1) {
                  var varData_1228 = param_2_1 * 4;
                  var varData_1229 = varData_1228 - param_1_3.sigBytes % varData_1228;
                  var varData_1230 = varData_1229 << 24 | varData_1229 << 16 | varData_1229 << 8 | varData_1229;
                  var varData_1231 = [];
                  for (var loopIdx = 0; loopIdx < varData_1229; loopIdx += 4) {
                    varData_1231.push(varData_1230);
                  }
                  var varData_1232 = varData_1204.create(varData_1231, varData_1229);
                  param_1_3.concat(varData_1232);
                },
                unpad: function (param_1_3) {
                  var varData_1233 = param_1_3.words[param_1_3.sigBytes - 1 >>> 2] & 255;
                  param_1_3.sigBytes -= varData_1233;
                }
              };
              var varData_1234 = {
                mode: varData_1217,
                padding: varData_1227
              };
              var varData_1235 = varData_1202.BlockCipher = varData_1211.extend({
                cfg: varData_1211.cfg.extend(varData_1234),
                reset: function () {
                  varData_1211.reset.call(this);
                  var varData_1236 = this.cfg;
                  var varData_1237 = varData_1236.iv;
                  var varData_1238 = varData_1236.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var varData_1239 = varData_1238.createEncryptor;
                  } else {
                    var varData_1239 = varData_1238.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == varData_1239) {
                    this._mode.init(this, varData_1237 && varData_1237.words);
                  } else {
                    this._mode = varData_1239.call(varData_1238, this, varData_1237 && varData_1237.words);
                    this._mode.__creator = varData_1239;
                  }
                },
                _doProcessBlock: function (param_1_3, param_2_1) {
                  this._mode.processBlock(param_1_3, param_2_1);
                },
                _doFinalize: function () {
                  var varData_1240 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    varData_1240.pad(this._data, this.blockSize);
                    var varData_1241 = this._process(true);
                  } else {
                    var varData_1241 = this._process(true);
                    varData_1240.unpad(varData_1241);
                  }
                  return varData_1241;
                },
                blockSize: 4
              });
              var varData_1242 = varData_1202.CipherParams = varData_1203.extend({
                init: function (param_1_3) {
                  this.mixIn(param_1_3);
                },
                toString: function (param_1_3) {
                  return (param_1_3 || this.formatter).stringify(this);
                }
              });
              var varData_1243 = varData_1201.format = {};
              var varData_1244 = varData_1243.OpenSSL = {
                stringify: function (param_1_3) {
                  var varData_1245 = param_1_3.ciphertext;
                  var varData_1246 = param_1_3.salt;
                  if (varData_1246) {
                    var varData_1247 = varData_1204.create([1398893684, 1701076831]).concat(varData_1246).concat(varData_1245);
                  } else {
                    var varData_1247 = varData_1245;
                  }
                  return varData_1247.toString(varData_1208);
                },
                parse: function (param_1_3) {
                  var varData_1248 = varData_1208.parse(param_1_3);
                  var varData_1249 = varData_1248.words;
                  if (varData_1249[0] == 1398893684 && varData_1249[1] == 1701076831) {
                    var varData_1250 = varData_1204.create(varData_1249.slice(2, 4));
                    varData_1249.splice(0, 4);
                    varData_1248.sigBytes -= 16;
                  }
                  var varData_1251 = {
                    ciphertext: varData_1248,
                    salt: varData_1250
                  };
                  return varData_1242.create(varData_1251);
                }
              };
              var varData_1252 = {
                format: varData_1244
              };
              var varData_1253 = varData_1202.SerializableCipher = varData_1203.extend({
                cfg: varData_1203.extend(varData_1252),
                encrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1254 = param_1_3.createEncryptor(param_3, param_4);
                  var varData_1255 = varData_1254.finalize(param_2_1);
                  var varData_1256 = varData_1254.cfg;
                  var varData_1257 = {
                    ciphertext: varData_1255,
                    key: param_3,
                    iv: varData_1256.iv,
                    algorithm: param_1_3,
                    mode: varData_1256.mode,
                    padding: varData_1256.padding,
                    blockSize: param_1_3.blockSize,
                    formatter: param_4.format
                  };
                  return varData_1242.create(varData_1257);
                },
                decrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1258 = param_1_3.createDecryptor(param_3, param_4).finalize(param_2_1.ciphertext);
                  return varData_1258;
                },
                _parse: function (param_1_3, param_2_1) {
                  if (typeof param_1_3 == "string") {
                    return param_2_1.parse(param_1_3, this);
                  } else {
                    return param_1_3;
                  }
                }
              });
              var varData_1259 = varData_1201.kdf = {};
              var varData_1260 = varData_1259.OpenSSL = {
                execute: function (param_1_3, param_2_1, param_3, param_4) {
                  if (!param_4) {
                    param_4 = varData_1204.random(8);
                  }
                  var varData_1261 = {
                    keySize: param_2_1 + param_3
                  };
                  var varData_1262 = varData_1210.create(varData_1261).compute(param_1_3, param_4);
                  var varData_1263 = varData_1204.create(varData_1262.words.slice(param_2_1), param_3 * 4);
                  varData_1262.sigBytes = param_2_1 * 4;
                  var varData_1264 = {
                    key: varData_1262,
                    iv: varData_1263,
                    salt: param_4
                  };
                  return varData_1242.create(varData_1264);
                }
              };
              var varData_1265 = {
                kdf: varData_1260
              };
              var varData_1266 = varData_1202.PasswordBasedCipher = varData_1253.extend({
                cfg: varData_1253.cfg.extend(varData_1265),
                encrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1267 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize);
                  param_4.iv = varData_1267.iv;
                  var varData_1268 = varData_1253.encrypt.call(this, param_1_3, param_2_1, varData_1267.key, param_4);
                  varData_1268.mixIn(varData_1267);
                  return varData_1268;
                },
                decrypt: function (param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1269 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize, param_2_1.salt);
                  param_4.iv = varData_1269.iv;
                  var varData_1270 = varData_1253.decrypt.call(this, param_1_3, param_2_1, varData_1269.key, param_4);
                  return varData_1270;
                }
              });
            })();
          }
        });
      }
    });
    var varData_1271 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.CFB = function () {
            var varData_1272 = param_1_1.lib.BlockCipherMode.extend();
            varData_1272.Encryptor = varData_1272.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1273 = this._cipher;
                var varData_1274 = varData_1273.blockSize;
                handleAction_80.call(this, param_1_2, param_2_1, varData_1274, varData_1273);
                this._prevBlock = param_1_2.slice(param_2_1, param_2_1 + varData_1274);
              }
            });
            varData_1272.Decryptor = varData_1272.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1275 = this._cipher;
                var varData_1276 = varData_1275.blockSize;
                var varData_1277 = param_1_2.slice(param_2_1, param_2_1 + varData_1276);
                handleAction_80.call(this, param_1_2, param_2_1, varData_1276, varData_1275);
                this._prevBlock = varData_1277;
              }
            });
            function handleAction_80(param_1_2, param_2_1, param_3, param_4) {
              var varData_1278 = this._iv;
              if (varData_1278) {
                var varData_1279 = varData_1278.slice(0);
                this._iv = undefined;
              } else {
                var varData_1279 = this._prevBlock;
              }
              param_4.encryptBlock(varData_1279, 0);
              for (var loopIdx = 0; loopIdx < param_3; loopIdx++) {
                param_1_2[param_2_1 + loopIdx] ^= varData_1279[loopIdx];
              }
            }
            return varData_1272;
          }();
          return param_1_1.mode.CFB;
        });
      }
    });
    var varData_1280 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.CTR = function () {
            var varData_1281 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1282 = varData_1281.Encryptor = varData_1281.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1283 = this._cipher;
                var varData_1284 = varData_1283.blockSize;
                var varData_1285 = this._iv;
                var varData_1286 = this._counter;
                if (varData_1285) {
                  varData_1286 = this._counter = varData_1285.slice(0);
                  this._iv = undefined;
                }
                var varData_1287 = varData_1286.slice(0);
                varData_1283.encryptBlock(varData_1287, 0);
                varData_1286[varData_1284 - 1] = varData_1286[varData_1284 - 1] + 1 | 0;
                for (var loopIdx = 0; loopIdx < varData_1284; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1287[loopIdx];
                }
              }
            });
            varData_1281.Decryptor = varData_1282;
            return varData_1281;
          }();
          return param_1_1.mode.CTR;
        });
      }
    });
    var varData_1288 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.CTRGladman = function () {
            var varData_1289 = param_1_1.lib.BlockCipherMode.extend();
            function handleAction_81(param_1_2) {
              if ((param_1_2 >> 24 & 255) === 255) {
                var varData_1290 = param_1_2 >> 16 & 255;
                var varData_1291 = param_1_2 >> 8 & 255;
                var varData_1292 = param_1_2 & 255;
                if (varData_1290 === 255) {
                  varData_1290 = 0;
                  if (varData_1291 === 255) {
                    varData_1291 = 0;
                    if (varData_1292 === 255) {
                      varData_1292 = 0;
                    } else {
                      ++varData_1292;
                    }
                  } else {
                    ++varData_1291;
                  }
                } else {
                  ++varData_1290;
                }
                param_1_2 = 0;
                param_1_2 += varData_1290 << 16;
                param_1_2 += varData_1291 << 8;
                param_1_2 += varData_1292;
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
            var varData_1293 = varData_1289.Encryptor = varData_1289.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1294 = this._cipher;
                var varData_1295 = varData_1294.blockSize;
                var varData_1296 = this._iv;
                var varData_1297 = this._counter;
                if (varData_1296) {
                  varData_1297 = this._counter = varData_1296.slice(0);
                  this._iv = undefined;
                }
                handleAction_82(varData_1297);
                var varData_1298 = varData_1297.slice(0);
                varData_1294.encryptBlock(varData_1298, 0);
                for (var loopIdx = 0; loopIdx < varData_1295; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1298[loopIdx];
                }
              }
            });
            varData_1289.Decryptor = varData_1293;
            return varData_1289;
          }();
          return param_1_1.mode.CTRGladman;
        });
      }
    });
    var varData_1299 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.OFB = function () {
            var varData_1300 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1301 = varData_1300.Encryptor = varData_1300.extend({
              processBlock: function (param_1_2, param_2_1) {
                var varData_1302 = this._cipher;
                var varData_1303 = varData_1302.blockSize;
                var varData_1304 = this._iv;
                var varData_1305 = this._keystream;
                if (varData_1304) {
                  varData_1305 = this._keystream = varData_1304.slice(0);
                  this._iv = undefined;
                }
                varData_1302.encryptBlock(varData_1305, 0);
                for (var loopIdx = 0; loopIdx < varData_1303; loopIdx++) {
                  param_1_2[param_2_1 + loopIdx] ^= varData_1305[loopIdx];
                }
              }
            });
            varData_1300.Decryptor = varData_1301;
            return varData_1300;
          }();
          return param_1_1.mode.OFB;
        });
      }
    });
    var varData_1306 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.mode.ECB = function () {
            var varData_1307 = param_1_1.lib.BlockCipherMode.extend();
            varData_1307.Encryptor = varData_1307.extend({
              processBlock: function (param_1_2, param_2_1) {
                this._cipher.encryptBlock(param_1_2, param_2_1);
              }
            });
            varData_1307.Decryptor = varData_1307.extend({
              processBlock: function (param_1_2, param_2_1) {
                this._cipher.decryptBlock(param_1_2, param_2_1);
              }
            });
            return varData_1307;
          }();
          return param_1_1.mode.ECB;
        });
      }
    });
    var varData_1308 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.pad.AnsiX923 = {
            pad: function (param_1_2, param_2_1) {
              var varData_1309 = param_1_2.sigBytes;
              var varData_1310 = param_2_1 * 4;
              var varData_1311 = varData_1310 - varData_1309 % varData_1310;
              var varData_1312 = varData_1309 + varData_1311 - 1;
              param_1_2.clamp();
              param_1_2.words[varData_1312 >>> 2] |= varData_1311 << 24 - varData_1312 % 4 * 8;
              param_1_2.sigBytes += varData_1311;
            },
            unpad: function (param_1_2) {
              var varData_1313 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1313;
            }
          };
          return param_1_1.pad.Ansix923;
        });
      }
    });
    var varData_1314 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.pad.Iso10126 = {
            pad: function (param_1_2, param_2_1) {
              var varData_1315 = param_2_1 * 4;
              var varData_1316 = varData_1315 - param_1_2.sigBytes % varData_1315;
              param_1_2.concat(param_1_1.lib.WordArray.random(varData_1316 - 1)).concat(param_1_1.lib.WordArray.create([varData_1316 << 24], 1));
            },
            unpad: function (param_1_2) {
              var varData_1317 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1317;
            }
          };
          return param_1_1.pad.Iso10126;
        });
      }
    });
    var varData_1318 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
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
    var varData_1319 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          param_1_1.pad.ZeroPadding = {
            pad: function (param_1_2, param_2_1) {
              var varData_1320 = param_2_1 * 4;
              param_1_2.clamp();
              param_1_2.sigBytes += varData_1320 - (param_1_2.sigBytes % varData_1320 || varData_1320);
            },
            unpad: function (param_1_2) {
              var varData_1321 = param_1_2.words;
              var varData_1322 = param_1_2.sigBytes - 1;
              while (!(varData_1321[varData_1322 >>> 2] >>> 24 - varData_1322 % 4 * 8 & 255)) {
                varData_1322--;
              }
              param_1_2.sigBytes = varData_1322 + 1;
            }
          };
          return param_1_1.pad.ZeroPadding;
        });
      }
    });
    var varData_1323 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          var varData_1324 = {
            pad: function () {},
            unpad: function () {}
          };
          param_1_1.pad.NoPadding = varData_1324;
          return param_1_1.pad.NoPadding;
        });
      }
    });
    var varData_1325 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function (param_1_2) {
            var varData_1326 = param_1_1;
            var varData_1327 = varData_1326.lib;
            var varData_1328 = varData_1327.CipherParams;
            var varData_1329 = varData_1326.enc;
            var varData_1330 = varData_1329.Hex;
            var varData_1331 = varData_1326.format;
            var varData_1332 = varData_1331.Hex = {
              stringify: function (param_1_3) {
                return param_1_3.ciphertext.toString(varData_1330);
              },
              parse: function (param_1_3) {
                var varData_1333 = varData_1330.parse(param_1_3);
                var varData_1334 = {
                  ciphertext: varData_1333
                };
                return varData_1328.create(varData_1334);
              }
            };
          })();
          return param_1_1.format.Hex;
        });
      }
    });
    var varData_1335 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_808(), varData_832(), varData_1184(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1336 = param_1_1;
            var varData_1337 = varData_1336.lib;
            var varData_1338 = varData_1337.BlockCipher;
            var varData_1339 = varData_1336.algo;
            var varData_1340 = [];
            var varData_1341 = [];
            var varData_1342 = [];
            var varData_1343 = [];
            var varData_1344 = [];
            var varData_1345 = [];
            var varData_1346 = [];
            var varData_1347 = [];
            var varData_1348 = [];
            var varData_1349 = [];
            (function () {
              var varData_1350 = [];
              for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                if (loopIdx < 128) {
                  varData_1350[loopIdx] = loopIdx << 1;
                } else {
                  varData_1350[loopIdx] = loopIdx << 1 ^ 283;
                }
              }
              var varData_1351 = 0;
              var varData_1352 = 0;
              for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                var varData_1353 = varData_1352 ^ varData_1352 << 1 ^ varData_1352 << 2 ^ varData_1352 << 3 ^ varData_1352 << 4;
                varData_1353 = varData_1353 >>> 8 ^ varData_1353 & 255 ^ 99;
                varData_1340[varData_1351] = varData_1353;
                varData_1341[varData_1353] = varData_1351;
                var varData_1354 = varData_1350[varData_1351];
                var varData_1355 = varData_1350[varData_1354];
                var varData_1356 = varData_1350[varData_1355];
                var varData_1357 = varData_1350[varData_1353] * 257 ^ varData_1353 * 16843008;
                varData_1342[varData_1351] = varData_1357 << 24 | varData_1357 >>> 8;
                varData_1343[varData_1351] = varData_1357 << 16 | varData_1357 >>> 16;
                varData_1344[varData_1351] = varData_1357 << 8 | varData_1357 >>> 24;
                varData_1345[varData_1351] = varData_1357;
                var varData_1357 = varData_1356 * 16843009 ^ varData_1355 * 65537 ^ varData_1354 * 257 ^ varData_1351 * 16843008;
                varData_1346[varData_1353] = varData_1357 << 24 | varData_1357 >>> 8;
                varData_1347[varData_1353] = varData_1357 << 16 | varData_1357 >>> 16;
                varData_1348[varData_1353] = varData_1357 << 8 | varData_1357 >>> 24;
                varData_1349[varData_1353] = varData_1357;
                if (!varData_1351) {
                  varData_1351 = varData_1352 = 1;
                } else {
                  varData_1351 = varData_1354 ^ varData_1350[varData_1350[varData_1350[varData_1356 ^ varData_1354]]];
                  varData_1352 ^= varData_1350[varData_1350[varData_1352]];
                }
              }
            })();
            var varData_1358 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            var varData_1359 = varData_1339.AES = varData_1338.extend({
              _doReset: function () {
                if (this._nRounds && this._keyPriorReset === this._key) {
                  return;
                }
                var varData_1360 = this._keyPriorReset = this._key;
                var varData_1361 = varData_1360.words;
                var varData_1362 = varData_1360.sigBytes / 4;
                var varData_1363 = this._nRounds = varData_1362 + 6;
                var varData_1364 = (varData_1363 + 1) * 4;
                var varData_1365 = this._keySchedule = [];
                for (var loopIdx = 0; loopIdx < varData_1364; loopIdx++) {
                  if (loopIdx < varData_1362) {
                    varData_1365[loopIdx] = varData_1361[loopIdx];
                  } else {
                    var varData_1366 = varData_1365[loopIdx - 1];
                    if (!(loopIdx % varData_1362)) {
                      varData_1366 = varData_1366 << 8 | varData_1366 >>> 24;
                      varData_1366 = varData_1340[varData_1366 >>> 24] << 24 | varData_1340[varData_1366 >>> 16 & 255] << 16 | varData_1340[varData_1366 >>> 8 & 255] << 8 | varData_1340[varData_1366 & 255];
                      varData_1366 ^= varData_1358[loopIdx / varData_1362 | 0] << 24;
                    } else if (varData_1362 > 6 && loopIdx % varData_1362 == 4) {
                      varData_1366 = varData_1340[varData_1366 >>> 24] << 24 | varData_1340[varData_1366 >>> 16 & 255] << 16 | varData_1340[varData_1366 >>> 8 & 255] << 8 | varData_1340[varData_1366 & 255];
                    }
                    varData_1365[loopIdx] = varData_1365[loopIdx - varData_1362] ^ varData_1366;
                  }
                }
                var varData_1367 = this._invKeySchedule = [];
                for (var loopIdx_1 = 0; loopIdx_1 < varData_1364; loopIdx_1++) {
                  var loopIdx = varData_1364 - loopIdx_1;
                  if (loopIdx_1 % 4) {
                    var varData_1366 = varData_1365[loopIdx];
                  } else {
                    var varData_1366 = varData_1365[loopIdx - 4];
                  }
                  if (loopIdx_1 < 4 || loopIdx <= 4) {
                    varData_1367[loopIdx_1] = varData_1366;
                  } else {
                    varData_1367[loopIdx_1] = varData_1346[varData_1340[varData_1366 >>> 24]] ^ varData_1347[varData_1340[varData_1366 >>> 16 & 255]] ^ varData_1348[varData_1340[varData_1366 >>> 8 & 255]] ^ varData_1349[varData_1340[varData_1366 & 255]];
                  }
                }
              },
              encryptBlock: function (param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._keySchedule, varData_1342, varData_1343, varData_1344, varData_1345, varData_1340);
              },
              decryptBlock: function (param_1_2, param_2_1) {
                var varData_1368 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1368;
                this._doCryptBlock(param_1_2, param_2_1, this._invKeySchedule, varData_1346, varData_1347, varData_1348, varData_1349, varData_1341);
                var varData_1368 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1368;
              },
              _doCryptBlock: function (param_1_2, param_2_1, param_3, param_4, param_5, param_6, param_7, param_8) {
                var varData_1369 = this._nRounds;
                var varData_1370 = param_1_2[param_2_1] ^ param_3[0];
                var varData_1371 = param_1_2[param_2_1 + 1] ^ param_3[1];
                var varData_1372 = param_1_2[param_2_1 + 2] ^ param_3[2];
                var varData_1373 = param_1_2[param_2_1 + 3] ^ param_3[3];
                var varData_1374 = 4;
                for (var loopIdx = 1; loopIdx < varData_1369; loopIdx++) {
                  var varData_1375 = param_4[varData_1370 >>> 24] ^ param_5[varData_1371 >>> 16 & 255] ^ param_6[varData_1372 >>> 8 & 255] ^ param_7[varData_1373 & 255] ^ param_3[varData_1374++];
                  var varData_1376 = param_4[varData_1371 >>> 24] ^ param_5[varData_1372 >>> 16 & 255] ^ param_6[varData_1373 >>> 8 & 255] ^ param_7[varData_1370 & 255] ^ param_3[varData_1374++];
                  var varData_1377 = param_4[varData_1372 >>> 24] ^ param_5[varData_1373 >>> 16 & 255] ^ param_6[varData_1370 >>> 8 & 255] ^ param_7[varData_1371 & 255] ^ param_3[varData_1374++];
                  var varData_1378 = param_4[varData_1373 >>> 24] ^ param_5[varData_1370 >>> 16 & 255] ^ param_6[varData_1371 >>> 8 & 255] ^ param_7[varData_1372 & 255] ^ param_3[varData_1374++];
                  varData_1370 = varData_1375;
                  varData_1371 = varData_1376;
                  varData_1372 = varData_1377;
                  varData_1373 = varData_1378;
                }
                var varData_1375 = (param_8[varData_1370 >>> 24] << 24 | param_8[varData_1371 >>> 16 & 255] << 16 | param_8[varData_1372 >>> 8 & 255] << 8 | param_8[varData_1373 & 255]) ^ param_3[varData_1374++];
                var varData_1376 = (param_8[varData_1371 >>> 24] << 24 | param_8[varData_1372 >>> 16 & 255] << 16 | param_8[varData_1373 >>> 8 & 255] << 8 | param_8[varData_1370 & 255]) ^ param_3[varData_1374++];
                var varData_1377 = (param_8[varData_1372 >>> 24] << 24 | param_8[varData_1373 >>> 16 & 255] << 16 | param_8[varData_1370 >>> 8 & 255] << 8 | param_8[varData_1371 & 255]) ^ param_3[varData_1374++];
                var varData_1378 = (param_8[varData_1373 >>> 24] << 24 | param_8[varData_1370 >>> 16 & 255] << 16 | param_8[varData_1371 >>> 8 & 255] << 8 | param_8[varData_1372 & 255]) ^ param_3[varData_1374++];
                param_1_2[param_2_1] = varData_1375;
                param_1_2[param_2_1 + 1] = varData_1376;
                param_1_2[param_2_1 + 2] = varData_1377;
                param_1_2[param_2_1 + 3] = varData_1378;
              },
              keySize: 8
            });
            varData_1336.AES = varData_1338._createHelper(varData_1359);
          })();
          return param_1_1.AES;
        });
      }
    });
    var varData_1379 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_808(), varData_832(), varData_1184(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1380 = param_1_1;
            var varData_1381 = varData_1380.lib;
            var varData_1382 = varData_1381.WordArray;
            var varData_1383 = varData_1381.BlockCipher;
            var varData_1384 = varData_1380.algo;
            var varData_1385 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
            var varData_1386 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
            var varData_1387 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
            var varData_1388 = [{
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
            var varData_1389 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
            var varData_1390 = varData_1384.DES = varData_1383.extend({
              _doReset: function () {
                var varData_1391 = this._key;
                var varData_1392 = varData_1391.words;
                var varData_1393 = [];
                for (var loopIdx = 0; loopIdx < 56; loopIdx++) {
                  var varData_1394 = varData_1385[loopIdx] - 1;
                  varData_1393[loopIdx] = varData_1392[varData_1394 >>> 5] >>> 31 - varData_1394 % 32 & 1;
                }
                var varData_1395 = this._subKeys = [];
                for (var loopIdx_1 = 0; loopIdx_1 < 16; loopIdx_1++) {
                  var varData_1396 = varData_1395[loopIdx_1] = [];
                  var varData_1397 = varData_1387[loopIdx_1];
                  for (var loopIdx = 0; loopIdx < 24; loopIdx++) {
                    varData_1396[loopIdx / 6 | 0] |= varData_1393[(varData_1386[loopIdx] - 1 + varData_1397) % 28] << 31 - loopIdx % 6;
                    varData_1396[4 + (loopIdx / 6 | 0)] |= varData_1393[28 + (varData_1386[loopIdx + 24] - 1 + varData_1397) % 28] << 31 - loopIdx % 6;
                  }
                  varData_1396[0] = varData_1396[0] << 1 | varData_1396[0] >>> 31;
                  for (var loopIdx = 1; loopIdx < 7; loopIdx++) {
                    varData_1396[loopIdx] = varData_1396[loopIdx] >>> (loopIdx - 1) * 4 + 3;
                  }
                  varData_1396[7] = varData_1396[7] << 5 | varData_1396[7] >>> 27;
                }
                var varData_1398 = this._invSubKeys = [];
                for (var loopIdx = 0; loopIdx < 16; loopIdx++) {
                  varData_1398[loopIdx] = varData_1395[15 - loopIdx];
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
                  var varData_1399 = param_3[loopIdx];
                  var varData_1400 = this._lBlock;
                  var varData_1401 = this._rBlock;
                  var varData_1402 = 0;
                  for (var loopIdx_1 = 0; loopIdx_1 < 8; loopIdx_1++) {
                    varData_1402 |= varData_1388[loopIdx_1][((varData_1401 ^ varData_1399[loopIdx_1]) & varData_1389[loopIdx_1]) >>> 0];
                  }
                  this._lBlock = varData_1401;
                  this._rBlock = varData_1400 ^ varData_1402;
                }
                var varData_1403 = this._lBlock;
                this._lBlock = this._rBlock;
                this._rBlock = varData_1403;
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
              var varData_1404 = (this._lBlock >>> param_1_2 ^ this._rBlock) & param_2_1;
              this._rBlock ^= varData_1404;
              this._lBlock ^= varData_1404 << param_1_2;
            }
            function handleAction_84(param_1_2, param_2_1) {
              var varData_1405 = (this._rBlock >>> param_1_2 ^ this._lBlock) & param_2_1;
              this._lBlock ^= varData_1405;
              this._rBlock ^= varData_1405 << param_1_2;
            }
            varData_1380.DES = varData_1383._createHelper(varData_1390);
            var varData_1406 = varData_1384.TripleDES = varData_1383.extend({
              _doReset: function () {
                var varData_1407 = this._key;
                var varData_1408 = varData_1407.words;
                this._des1 = varData_1390.createEncryptor(varData_1382.create(varData_1408.slice(0, 2)));
                this._des2 = varData_1390.createEncryptor(varData_1382.create(varData_1408.slice(2, 4)));
                this._des3 = varData_1390.createEncryptor(varData_1382.create(varData_1408.slice(4, 6)));
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
            varData_1380.TripleDES = varData_1383._createHelper(varData_1406);
          })();
          return param_1_1.TripleDES;
        });
      }
    });
    var varData_1409 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_808(), varData_832(), varData_1184(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1410 = param_1_1;
            var varData_1411 = varData_1410.lib;
            var varData_1412 = varData_1411.StreamCipher;
            var varData_1413 = varData_1410.algo;
            var varData_1414 = varData_1413.RC4 = varData_1412.extend({
              _doReset: function () {
                var varData_1415 = this._key;
                var varData_1416 = varData_1415.words;
                var varData_1417 = varData_1415.sigBytes;
                var varData_1418 = this._S = [];
                for (var loopIdx = 0; loopIdx < 256; loopIdx++) {
                  varData_1418[loopIdx] = loopIdx;
                }
                for (var loopIdx = 0, loopIdx_1 = 0; loopIdx < 256; loopIdx++) {
                  var varData_1419 = loopIdx % varData_1417;
                  var varData_1420 = varData_1416[varData_1419 >>> 2] >>> 24 - varData_1419 % 4 * 8 & 255;
                  loopIdx_1 = (loopIdx_1 + varData_1418[loopIdx] + varData_1420) % 256;
                  var varData_1421 = varData_1418[loopIdx];
                  varData_1418[loopIdx] = varData_1418[loopIdx_1];
                  varData_1418[loopIdx_1] = varData_1421;
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
              var varData_1422 = this._S;
              var varData_1423 = this._i;
              var varData_1424 = this._j;
              var varData_1425 = 0;
              for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                varData_1423 = (varData_1423 + 1) % 256;
                varData_1424 = (varData_1424 + varData_1422[varData_1423]) % 256;
                var varData_1426 = varData_1422[varData_1423];
                varData_1422[varData_1423] = varData_1422[varData_1424];
                varData_1422[varData_1424] = varData_1426;
                varData_1425 |= varData_1422[(varData_1422[varData_1423] + varData_1422[varData_1424]) % 256] << 24 - loopIdx * 8;
              }
              this._i = varData_1423;
              this._j = varData_1424;
              return varData_1425;
            }
            varData_1410.RC4 = varData_1412._createHelper(varData_1414);
            var varData_1427 = varData_1413.RC4Drop = varData_1414.extend({
              cfg: varData_1414.cfg.extend({
                drop: 192
              }),
              _doReset: function () {
                varData_1414._doReset.call(this);
                for (var loopIdx = this.cfg.drop; loopIdx > 0; loopIdx--) {
                  handleAction_85.call(this);
                }
              }
            });
            varData_1410.RC4Drop = varData_1412._createHelper(varData_1427);
          })();
          return param_1_1.RC4;
        });
      }
    });
    var varData_1428 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_808(), varData_832(), varData_1184(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1429 = param_1_1;
            var varData_1430 = varData_1429.lib;
            var varData_1431 = varData_1430.StreamCipher;
            var varData_1432 = varData_1429.algo;
            var varData_1433 = [];
            var varData_1434 = [];
            var varData_1435 = [];
            var varData_1436 = varData_1432.Rabbit = varData_1431.extend({
              _doReset: function () {
                var varData_1437 = this._key.words;
                var varData_1438 = this.cfg.iv;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1437[loopIdx] = (varData_1437[loopIdx] << 8 | varData_1437[loopIdx] >>> 24) & 16711935 | (varData_1437[loopIdx] << 24 | varData_1437[loopIdx] >>> 8) & -16711936;
                }
                var varData_1439 = this._X = [varData_1437[0], varData_1437[3] << 16 | varData_1437[2] >>> 16, varData_1437[1], varData_1437[0] << 16 | varData_1437[3] >>> 16, varData_1437[2], varData_1437[1] << 16 | varData_1437[0] >>> 16, varData_1437[3], varData_1437[2] << 16 | varData_1437[1] >>> 16];
                var varData_1440 = this._C = [varData_1437[2] << 16 | varData_1437[2] >>> 16, varData_1437[0] & -65536 | varData_1437[1] & 65535, varData_1437[3] << 16 | varData_1437[3] >>> 16, varData_1437[1] & -65536 | varData_1437[2] & 65535, varData_1437[0] << 16 | varData_1437[0] >>> 16, varData_1437[2] & -65536 | varData_1437[3] & 65535, varData_1437[1] << 16 | varData_1437[1] >>> 16, varData_1437[3] & -65536 | varData_1437[0] & 65535];
                this._b = 0;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  handleAction_86.call(this);
                }
                for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                  varData_1440[loopIdx] ^= varData_1439[loopIdx + 4 & 7];
                }
                if (varData_1438) {
                  var varData_1441 = varData_1438.words;
                  var varData_1442 = varData_1441[0];
                  var varData_1443 = varData_1441[1];
                  var varData_1444 = (varData_1442 << 8 | varData_1442 >>> 24) & 16711935 | (varData_1442 << 24 | varData_1442 >>> 8) & -16711936;
                  var varData_1445 = (varData_1443 << 8 | varData_1443 >>> 24) & 16711935 | (varData_1443 << 24 | varData_1443 >>> 8) & -16711936;
                  var varData_1446 = varData_1444 >>> 16 | varData_1445 & -65536;
                  var varData_1447 = varData_1445 << 16 | varData_1444 & 65535;
                  varData_1440[0] ^= varData_1444;
                  varData_1440[1] ^= varData_1446;
                  varData_1440[2] ^= varData_1445;
                  varData_1440[3] ^= varData_1447;
                  varData_1440[4] ^= varData_1444;
                  varData_1440[5] ^= varData_1446;
                  varData_1440[6] ^= varData_1445;
                  varData_1440[7] ^= varData_1447;
                  for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                    handleAction_86.call(this);
                  }
                }
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_1448 = this._X;
                handleAction_86.call(this);
                varData_1433[0] = varData_1448[0] ^ varData_1448[5] >>> 16 ^ varData_1448[3] << 16;
                varData_1433[1] = varData_1448[2] ^ varData_1448[7] >>> 16 ^ varData_1448[5] << 16;
                varData_1433[2] = varData_1448[4] ^ varData_1448[1] >>> 16 ^ varData_1448[7] << 16;
                varData_1433[3] = varData_1448[6] ^ varData_1448[3] >>> 16 ^ varData_1448[1] << 16;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1433[loopIdx] = (varData_1433[loopIdx] << 8 | varData_1433[loopIdx] >>> 24) & 16711935 | (varData_1433[loopIdx] << 24 | varData_1433[loopIdx] >>> 8) & -16711936;
                  param_1_2[param_2_1 + loopIdx] ^= varData_1433[loopIdx];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_86() {
              var varData_1449 = this._X;
              var varData_1450 = this._C;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                varData_1434[loopIdx] = varData_1450[loopIdx];
              }
              varData_1450[0] = varData_1450[0] + 1295307597 + this._b | 0;
              varData_1450[1] = varData_1450[1] + 3545052371 + (varData_1450[0] >>> 0 < varData_1434[0] >>> 0 ? 1 : 0) | 0;
              varData_1450[2] = varData_1450[2] + 886263092 + (varData_1450[1] >>> 0 < varData_1434[1] >>> 0 ? 1 : 0) | 0;
              varData_1450[3] = varData_1450[3] + 1295307597 + (varData_1450[2] >>> 0 < varData_1434[2] >>> 0 ? 1 : 0) | 0;
              varData_1450[4] = varData_1450[4] + 3545052371 + (varData_1450[3] >>> 0 < varData_1434[3] >>> 0 ? 1 : 0) | 0;
              varData_1450[5] = varData_1450[5] + 886263092 + (varData_1450[4] >>> 0 < varData_1434[4] >>> 0 ? 1 : 0) | 0;
              varData_1450[6] = varData_1450[6] + 1295307597 + (varData_1450[5] >>> 0 < varData_1434[5] >>> 0 ? 1 : 0) | 0;
              varData_1450[7] = varData_1450[7] + 3545052371 + (varData_1450[6] >>> 0 < varData_1434[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1450[7] >>> 0 < varData_1434[7] >>> 0 ? 1 : 0;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                var varData_1451 = varData_1449[loopIdx] + varData_1450[loopIdx];
                var varData_1452 = varData_1451 & 65535;
                var varData_1453 = varData_1451 >>> 16;
                var varData_1454 = ((varData_1452 * varData_1452 >>> 17) + varData_1452 * varData_1453 >>> 15) + varData_1453 * varData_1453;
                var varData_1455 = ((varData_1451 & -65536) * varData_1451 | 0) + ((varData_1451 & 65535) * varData_1451 | 0);
                varData_1435[loopIdx] = varData_1454 ^ varData_1455;
              }
              varData_1449[0] = varData_1435[0] + (varData_1435[7] << 16 | varData_1435[7] >>> 16) + (varData_1435[6] << 16 | varData_1435[6] >>> 16) | 0;
              varData_1449[1] = varData_1435[1] + (varData_1435[0] << 8 | varData_1435[0] >>> 24) + varData_1435[7] | 0;
              varData_1449[2] = varData_1435[2] + (varData_1435[1] << 16 | varData_1435[1] >>> 16) + (varData_1435[0] << 16 | varData_1435[0] >>> 16) | 0;
              varData_1449[3] = varData_1435[3] + (varData_1435[2] << 8 | varData_1435[2] >>> 24) + varData_1435[1] | 0;
              varData_1449[4] = varData_1435[4] + (varData_1435[3] << 16 | varData_1435[3] >>> 16) + (varData_1435[2] << 16 | varData_1435[2] >>> 16) | 0;
              varData_1449[5] = varData_1435[5] + (varData_1435[4] << 8 | varData_1435[4] >>> 24) + varData_1435[3] | 0;
              varData_1449[6] = varData_1435[6] + (varData_1435[5] << 16 | varData_1435[5] >>> 16) + (varData_1435[4] << 16 | varData_1435[4] >>> 16) | 0;
              varData_1449[7] = varData_1435[7] + (varData_1435[6] << 8 | varData_1435[6] >>> 24) + varData_1435[5] | 0;
            }
            varData_1429.Rabbit = varData_1431._createHelper(varData_1436);
          })();
          return param_1_1.Rabbit;
        });
      }
    });
    var varData_1456 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(param_1, param_2) {
        'use strict';

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_808(), varData_832(), varData_1184(), varData_1200());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function (param_1_1) {
          (function () {
            var varData_1457 = param_1_1;
            var varData_1458 = varData_1457.lib;
            var varData_1459 = varData_1458.StreamCipher;
            var varData_1460 = varData_1457.algo;
            var varData_1461 = [];
            var varData_1462 = [];
            var varData_1463 = [];
            var varData_1464 = varData_1460.RabbitLegacy = varData_1459.extend({
              _doReset: function () {
                var varData_1465 = this._key.words;
                var varData_1466 = this.cfg.iv;
                var varData_1467 = this._X = [varData_1465[0], varData_1465[3] << 16 | varData_1465[2] >>> 16, varData_1465[1], varData_1465[0] << 16 | varData_1465[3] >>> 16, varData_1465[2], varData_1465[1] << 16 | varData_1465[0] >>> 16, varData_1465[3], varData_1465[2] << 16 | varData_1465[1] >>> 16];
                var varData_1468 = this._C = [varData_1465[2] << 16 | varData_1465[2] >>> 16, varData_1465[0] & -65536 | varData_1465[1] & 65535, varData_1465[3] << 16 | varData_1465[3] >>> 16, varData_1465[1] & -65536 | varData_1465[2] & 65535, varData_1465[0] << 16 | varData_1465[0] >>> 16, varData_1465[2] & -65536 | varData_1465[3] & 65535, varData_1465[1] << 16 | varData_1465[1] >>> 16, varData_1465[3] & -65536 | varData_1465[0] & 65535];
                this._b = 0;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  handleAction_87.call(this);
                }
                for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                  varData_1468[loopIdx] ^= varData_1467[loopIdx + 4 & 7];
                }
                if (varData_1466) {
                  var varData_1469 = varData_1466.words;
                  var varData_1470 = varData_1469[0];
                  var varData_1471 = varData_1469[1];
                  var varData_1472 = (varData_1470 << 8 | varData_1470 >>> 24) & 16711935 | (varData_1470 << 24 | varData_1470 >>> 8) & -16711936;
                  var varData_1473 = (varData_1471 << 8 | varData_1471 >>> 24) & 16711935 | (varData_1471 << 24 | varData_1471 >>> 8) & -16711936;
                  var varData_1474 = varData_1472 >>> 16 | varData_1473 & -65536;
                  var varData_1475 = varData_1473 << 16 | varData_1472 & 65535;
                  varData_1468[0] ^= varData_1472;
                  varData_1468[1] ^= varData_1474;
                  varData_1468[2] ^= varData_1473;
                  varData_1468[3] ^= varData_1475;
                  varData_1468[4] ^= varData_1472;
                  varData_1468[5] ^= varData_1474;
                  varData_1468[6] ^= varData_1473;
                  varData_1468[7] ^= varData_1475;
                  for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                    handleAction_87.call(this);
                  }
                }
              },
              _doProcessBlock: function (param_1_2, param_2_1) {
                var varData_1476 = this._X;
                handleAction_87.call(this);
                varData_1461[0] = varData_1476[0] ^ varData_1476[5] >>> 16 ^ varData_1476[3] << 16;
                varData_1461[1] = varData_1476[2] ^ varData_1476[7] >>> 16 ^ varData_1476[5] << 16;
                varData_1461[2] = varData_1476[4] ^ varData_1476[1] >>> 16 ^ varData_1476[7] << 16;
                varData_1461[3] = varData_1476[6] ^ varData_1476[3] >>> 16 ^ varData_1476[1] << 16;
                for (var loopIdx = 0; loopIdx < 4; loopIdx++) {
                  varData_1461[loopIdx] = (varData_1461[loopIdx] << 8 | varData_1461[loopIdx] >>> 24) & 16711935 | (varData_1461[loopIdx] << 24 | varData_1461[loopIdx] >>> 8) & -16711936;
                  param_1_2[param_2_1 + loopIdx] ^= varData_1461[loopIdx];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_87() {
              var varData_1477 = this._X;
              var varData_1478 = this._C;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                varData_1462[loopIdx] = varData_1478[loopIdx];
              }
              varData_1478[0] = varData_1478[0] + 1295307597 + this._b | 0;
              varData_1478[1] = varData_1478[1] + 3545052371 + (varData_1478[0] >>> 0 < varData_1462[0] >>> 0 ? 1 : 0) | 0;
              varData_1478[2] = varData_1478[2] + 886263092 + (varData_1478[1] >>> 0 < varData_1462[1] >>> 0 ? 1 : 0) | 0;
              varData_1478[3] = varData_1478[3] + 1295307597 + (varData_1478[2] >>> 0 < varData_1462[2] >>> 0 ? 1 : 0) | 0;
              varData_1478[4] = varData_1478[4] + 3545052371 + (varData_1478[3] >>> 0 < varData_1462[3] >>> 0 ? 1 : 0) | 0;
              varData_1478[5] = varData_1478[5] + 886263092 + (varData_1478[4] >>> 0 < varData_1462[4] >>> 0 ? 1 : 0) | 0;
              varData_1478[6] = varData_1478[6] + 1295307597 + (varData_1478[5] >>> 0 < varData_1462[5] >>> 0 ? 1 : 0) | 0;
              varData_1478[7] = varData_1478[7] + 3545052371 + (varData_1478[6] >>> 0 < varData_1462[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1478[7] >>> 0 < varData_1462[7] >>> 0 ? 1 : 0;
              for (var loopIdx = 0; loopIdx < 8; loopIdx++) {
                var varData_1479 = varData_1477[loopIdx] + varData_1478[loopIdx];
                var varData_1480 = varData_1479 & 65535;
                var varData_1481 = varData_1479 >>> 16;
                var varData_1482 = ((varData_1480 * varData_1480 >>> 17) + varData_1480 * varData_1481 >>> 15) + varData_1481 * varData_1481;
                var varData_1483 = ((varData_1479 & -65536) * varData_1479 | 0) + ((varData_1479 & 65535) * varData_1479 | 0);
                varData_1463[loopIdx] = varData_1482 ^ varData_1483;
              }
              varData_1477[0] = varData_1463[0] + (varData_1463[7] << 16 | varData_1463[7] >>> 16) + (varData_1463[6] << 16 | varData_1463[6] >>> 16) | 0;
              varData_1477[1] = varData_1463[1] + (varData_1463[0] << 8 | varData_1463[0] >>> 24) + varData_1463[7] | 0;
              varData_1477[2] = varData_1463[2] + (varData_1463[1] << 16 | varData_1463[1] >>> 16) + (varData_1463[0] << 16 | varData_1463[0] >>> 16) | 0;
              varData_1477[3] = varData_1463[3] + (varData_1463[2] << 8 | varData_1463[2] >>> 24) + varData_1463[1] | 0;
              varData_1477[4] = varData_1463[4] + (varData_1463[3] << 16 | varData_1463[3] >>> 16) + (varData_1463[2] << 16 | varData_1463[2] >>> 16) | 0;
              varData_1477[5] = varData_1463[5] + (varData_1463[4] << 8 | varData_1463[4] >>> 24) + varData_1463[3] | 0;
              varData_1477[6] = varData_1463[6] + (varData_1463[5] << 16 | varData_1463[5] >>> 16) + (varData_1463[4] << 16 | varData_1463[4] >>> 16) | 0;
              varData_1477[7] = varData_1463[7] + (varData_1463[6] << 8 | varData_1463[6] >>> 24) + varData_1463[5] | 0;
            }
            varData_1457.RabbitLegacy = varData_1459._createHelper(varData_1464);
          })();
          return param_1_1.RabbitLegacy;
        });
      }
    });
    var varData_1484 = varData_700({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(param_1, param_2) {
        'use strict';
        "use strict";

        (function (param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_712(), varData_766(), varData_782(), varData_790(), varData_808(), varData_832(), varData_877(), varData_898(), varData_935(), varData_943(), varData_1035(), varData_1044(), varData_1102(), varData_1143(), varData_1161(), varData_1184(), varData_1200(), varData_1271(), varData_1280(), varData_1288(), varData_1299(), varData_1306(), varData_1308(), varData_1314(), varData_1318(), varData_1319(), varData_1323(), varData_1325(), varData_1335(), varData_1379(), varData_1409(), varData_1428(), varData_1456());
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
    var varData_1485 = {
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
    var varData_1486 = {};
    var varData_1487 = {
      MathUtils: () => varData_1645
    };
    varData_701(varData_1486, varData_1487);
    var varData_1488;
    var varData_1489;
    var varData_1490 = class _0xff5c68 {
      constructor(param_1, param_2, param_3) {
        varData_708(this, varData_1488);
        const varData_1491 = varData_711(this, varData_1488, varData_1489).call(this, param_1, param_2, param_3);
        this.x = varData_1491.x;
        this.y = varData_1491.y;
        this.z = varData_1491.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_1492 = varData_711(this, varData_1488, varData_1489).call(this, param_1, param_2, param_3);
        return this.x === varData_1492.x && this.y === varData_1492.y && this.z === varData_1492.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_1493 = varData_711(this, varData_1488, varData_1489).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_1493.x * param_4 : varData_1493.x;
        this.y += param_4 ? varData_1493.y * param_4 : varData_1493.y;
        this.z += param_4 ? varData_1493.z * param_4 : varData_1493.z;
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
        const varData_1494 = varData_711(this, varData_1488, varData_1489).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_1494.x * param_4 : varData_1494.x;
        this.y -= param_4 ? varData_1494.y * param_4 : varData_1494.y;
        this.z -= param_4 ? varData_1494.z * param_4 : varData_1494.z;
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
        const varData_1495 = varData_711(this, varData_1488, varData_1489).call(this, param_1, param_2, param_3);
        this.x *= varData_1495.x;
        this.y *= varData_1495.y;
        this.z *= varData_1495.z;
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
        const varData_1496 = varData_711(this, varData_1488, varData_1489).call(this, param_1, param_2, param_3);
        this.x /= varData_1496.x;
        this.y /= varData_1496.y;
        this.z /= varData_1496.z;
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
        const varData_1497 = varData_711(this, varData_1488, varData_1489).call(this, param_1, param_2, param_3);
        return new _0xff5c68((this.x + varData_1497.x) / 2, (this.y + varData_1497.y) / 2, (this.z + varData_1497.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x457cc1, _0x24e8f2, _0x30281a] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x457cc1 !== "number" || typeof _0x24e8f2 !== "number" || typeof _0x30281a !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x17a16b, _0x3603d3, _0x876418] = [this.x - _0x457cc1, this.y - _0x24e8f2, this.z - _0x30281a];
        return Math.sqrt(_0x17a16b * _0x17a16b + _0x3603d3 * _0x3603d3 + _0x876418 * _0x876418);
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
        var varData_1498 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_1498;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1488 = new WeakSet();
    varData_1489 = function (param_1, param_2, param_3) {
      let varData_1499 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_1490) {
        varData_1499 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1500 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_1499 = varData_1500;
      } else if (typeof param_1 === "object") {
        varData_1499 = param_1;
      } else {
        var varData_1501 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_1499 = varData_1501;
      }
      if (typeof varData_1499.x !== "number" || typeof varData_1499.y !== "number" || typeof varData_1499.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1499;
    };
    var varData_1502 = varData_1490;
    var varData_1503;
    var varData_1504;
    var varData_1505 = class {
      constructor(param_1) {
        varData_708(this, varData_1503, undefined);
        varData_708(this, varData_1504, undefined);
        varData_709(this, varData_1504, param_1 ?? 5);
        varData_709(this, varData_1503, new Map());
      }
      setTTL(param_1) {
        varData_709(this, varData_1504, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_707(this, varData_1503).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_707(this, varData_1504)) * 1000
        });
        return this;
      }
      get(param_1, _0x41a09e = false) {
        const varData_1506 = varData_707(this, varData_1503).get(param_1);
        const varData_1507 = varData_1506 ? _0x41a09e ? true : varData_1506.expiration > Date.now() : false;
        if (!varData_1506 || !varData_1507) {
          if (varData_1506) {
            varData_707(this, varData_1503).delete(param_1);
          }
          return;
        }
        return varData_1506.value;
      }
      has(param_1, _0x528142 = false) {
        const varData_1508 = varData_707(this, varData_1503).get(param_1);
        const varData_1509 = varData_1508 ? _0x528142 ? true : varData_1508.expiration > Date.now() : false;
        if (varData_1508 && !varData_1509) {
          varData_707(this, varData_1503).delete(param_1);
        }
        return varData_1509;
      }
      delete(param_1) {
        return varData_707(this, varData_1503).delete(param_1);
      }
      clear() {
        varData_707(this, varData_1503).clear();
      }
      values(_0x4bf21a = false) {
        const varData_1510 = [];
        const timestamp = Date.now();
        for (const varData_1511 of varData_707(this, varData_1503).values()) {
          if (_0x4bf21a || varData_1511.expiration > timestamp) {
            varData_1510.push(varData_1511.value);
          }
        }
        return varData_1510;
      }
      keys(_0x1021b5 = false) {
        const varData_1512 = [];
        const timestamp = Date.now();
        for (const [_0x1803bc, _0xff72a3] of varData_707(this, varData_1503).entries()) {
          if (_0x1021b5 || _0xff72a3.expiration > timestamp) {
            varData_1512.push(_0x1803bc);
          }
        }
        return varData_1512;
      }
      entries(_0x3d359e = false) {
        const varData_1513 = [];
        const timestamp = Date.now();
        for (const [_0x36715e, _0x5e97e3] of varData_707(this, varData_1503).entries()) {
          if (_0x3d359e || _0x5e97e3.expiration > timestamp) {
            varData_1513.push([_0x36715e, _0x5e97e3.value]);
          }
        }
        return varData_1513;
      }
    };
    varData_1503 = new WeakMap();
    varData_1504 = new WeakMap();
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
    var varData_1535;
    var varData_1536 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x44d9ec = 30, _0x157f5c = false) {
        varData_708(this, varData_1526);
        varData_708(this, varData_1528);
        varData_708(this, varData_1530);
        varData_708(this, varData_1532);
        varData_708(this, varData_1534);
        varData_708(this, varData_1514, undefined);
        varData_708(this, varData_1515, undefined);
        varData_708(this, varData_1516, undefined);
        varData_708(this, varData_1517, undefined);
        varData_708(this, varData_1518, undefined);
        varData_708(this, varData_1519, undefined);
        varData_708(this, varData_1520, undefined);
        varData_708(this, varData_1521, undefined);
        varData_708(this, varData_1522, undefined);
        varData_708(this, varData_1523, undefined);
        varData_708(this, varData_1524, undefined);
        varData_708(this, varData_1525, undefined);
        varData_709(this, varData_1514, param_1);
        varData_709(this, varData_1515, param_4);
        varData_709(this, varData_1516, param_5);
        varData_709(this, varData_1517, param_2);
        varData_709(this, varData_1518, param_3);
        varData_709(this, varData_1519, _0x157f5c);
        varData_709(this, varData_1520, _0x44d9ec);
        varData_709(this, varData_1522, varData_707(this, varData_1515).x / _0x44d9ec);
        varData_709(this, varData_1523, varData_707(this, varData_1515).y / _0x44d9ec);
        varData_709(this, varData_1521, varData_707(this, varData_1522) * varData_707(this, varData_1523));
        varData_709(this, varData_1524, varData_711(this, varData_1526, varData_1527).call(this, varData_707(this, varData_1514), varData_707(this, varData_1520), varData_707(this, varData_1522), varData_707(this, varData_1523), varData_707(this, varData_1519)));
        varData_709(this, varData_1525, varData_711(this, varData_1528, varData_1529).call(this, varData_707(this, varData_1524), varData_707(this, varData_1521)));
      }
      get cells() {
        return varData_707(this, varData_1524);
      }
      get cellSize() {
        return varData_707(this, varData_1520);
      }
      get cellWidth() {
        return varData_707(this, varData_1522);
      }
      get cellHeight() {
        return varData_707(this, varData_1523);
      }
      get gridArea() {
        return varData_707(this, varData_1525);
      }
      get gridCoverage() {
        return varData_707(this, varData_1525) / varData_707(this, varData_1516) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_1537;
        const varData_1538 = param_1.x - varData_707(this, varData_1517).x;
        const varData_1539 = param_1.y - varData_707(this, varData_1517).y;
        const varData_1540 = Math.floor(varData_1538 * varData_707(this, varData_1520) / varData_707(this, varData_1515).x);
        const varData_1541 = Math.floor(varData_1539 * varData_707(this, varData_1520) / varData_707(this, varData_1515).y);
        let varData_1542 = (varData_1537 = varData_707(this, varData_1524)[varData_1540]) == null ? undefined : varData_1537[varData_1541];
        if (!varData_1542 && varData_707(this, varData_1519)) {
          varData_1542 = varData_711(this, varData_1532, varData_1533).call(this, varData_1540, varData_1541, varData_707(this, varData_1522), varData_707(this, varData_1523), varData_707(this, varData_1514));
          varData_707(this, varData_1524)[varData_1540][varData_1541] = varData_1542;
          if (!varData_1542) {
            return false;
          }
          varData_709(this, varData_1525, varData_707(this, varData_1525) + varData_707(this, varData_1521));
        }
        return varData_1542 ?? false;
      }
    };
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
    varData_1525 = new WeakMap();
    varData_1526 = new WeakSet();
    varData_1527 = function (param_1, param_2, param_3, param_4, param_5) {
      const varData_1543 = {};
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_1543[loopIdx] = {};
        if (param_5) {
          continue;
        }
        for (let loopIdx_1 = 0; loopIdx_1 < param_2; loopIdx_1++) {
          const varData_1544 = varData_711(this, varData_1532, varData_1533).call(this, loopIdx, loopIdx_1, param_3, param_4, param_1);
          if (!varData_1544) {
            continue;
          }
          varData_1543[loopIdx][loopIdx_1] = true;
        }
      }
      return varData_1543;
    };
    varData_1528 = new WeakSet();
    varData_1529 = function (param_1, param_2) {
      let varData_1545 = 0;
      for (const varData_1546 in param_1) {
        for (const varData_1547 in param_1[varData_1546]) {
          varData_1545 += param_2;
        }
      }
      return varData_1545;
    };
    varData_1530 = new WeakSet();
    varData_1531 = function (param_1, param_2, param_3, param_4) {
      const varData_1548 = [];
      const varData_1549 = param_1 * param_3 + varData_707(this, varData_1517).x;
      const varData_1550 = param_2 * param_4 + varData_707(this, varData_1517).y;
      varData_1548.push(new varData_1632(varData_1549, varData_1550));
      varData_1548.push(new varData_1632(varData_1549 + param_3, varData_1550));
      varData_1548.push(new varData_1632(varData_1549 + param_3, varData_1550 + param_4));
      varData_1548.push(new varData_1632(varData_1549, varData_1550 + param_4));
      return varData_1548;
    };
    varData_1532 = new WeakSet();
    varData_1533 = function (param_1, param_2, param_3, param_4, param_5) {
      const varData_1551 = varData_711(this, varData_1530, varData_1531).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_1 = false;
      for (const varData_1552 of varData_1551) {
        const varData_1553 = varData_1664.MathUtils.windingNumber(varData_1552, param_5);
        if (varData_1553 !== 0) {
          isDisabled_1 = true;
          break;
        }
      }
      if (!isDisabled_1) {
        return false;
      }
      for (let loopIdx = 0; loopIdx < varData_1551.length; loopIdx++) {
        const varData_1554 = varData_1551[loopIdx];
        const varData_1555 = varData_1551[(loopIdx + 1) % varData_1551.length];
        for (let loopIdx_1 = 0; loopIdx_1 < param_5.length; loopIdx_1++) {
          const varData_1556 = param_5[loopIdx_1];
          const varData_1557 = param_5[(loopIdx_1 + 1) % param_5.length];
          if (varData_711(this, varData_1534, varData_1535).call(this, varData_1554, varData_1555, varData_1556, varData_1557)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_1534 = new WeakSet();
    varData_1535 = function (param_1, param_2, param_3, param_4) {
      const varData_1558 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_1559 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_1560 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_1558 === 0) {
        return varData_1559 === 0 && varData_1560 === 0;
      }
      const varData_1561 = varData_1559 / varData_1558;
      const varData_1562 = varData_1560 / varData_1558;
      return varData_1561 >= 0 && varData_1561 <= 1 && varData_1562 >= 0 && varData_1562 <= 1;
    };
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
    var varData_1580;
    var varData_1581 = class {
      constructor(param_1, _0x646d63 = {}, _0x4759f2 = {}) {
        varData_708(this, varData_1571);
        varData_708(this, varData_1573);
        varData_708(this, varData_1575);
        varData_708(this, varData_1577);
        varData_708(this, varData_1579);
        varData_708(this, varData_1563, undefined);
        varData_708(this, varData_1564, undefined);
        varData_708(this, varData_1565, undefined);
        varData_708(this, varData_1566, undefined);
        varData_708(this, varData_1567, undefined);
        varData_708(this, varData_1568, undefined);
        varData_708(this, varData_1569, undefined);
        varData_708(this, varData_1570, undefined);
        varData_709(this, varData_1563, varData_1664.getUUID());
        varData_709(this, varData_1564, param_1);
        varData_709(this, varData_1565, varData_711(this, varData_1571, varData_1572).call(this, param_1));
        varData_709(this, varData_1566, varData_711(this, varData_1573, varData_1574).call(this, param_1));
        varData_709(this, varData_1567, varData_711(this, varData_1579, varData_1580).call(this, param_1));
        varData_709(this, varData_1568, varData_711(this, varData_1577, varData_1578).call(this, varData_707(this, varData_1565), varData_707(this, varData_1566)));
        varData_709(this, varData_1569, varData_711(this, varData_1575, varData_1576).call(this, varData_707(this, varData_1565), varData_707(this, varData_1566)));
        this.options = _0x646d63;
        this.data = _0x4759f2;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_709(this, varData_1570, new varData_1536(varData_707(this, varData_1564), varData_707(this, varData_1565), varData_707(this, varData_1566), varData_707(this, varData_1568), varData_707(this, varData_1567), _0x646d63.gridCellSize, _0x646d63.useLazyGrid));
      }
      get id() {
        return varData_707(this, varData_1563);
      }
      get center() {
        return varData_707(this, varData_1569);
      }
      get min() {
        return varData_707(this, varData_1565);
      }
      get max() {
        return varData_707(this, varData_1566);
      }
      get points() {
        return [...varData_707(this, varData_1564)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_707(this, varData_1565).x || param_1.x > varData_707(this, varData_1566).x) {
          return false;
        } else if (param_1.y < varData_707(this, varData_1565).y || param_1.y > varData_707(this, varData_1566).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_1502) {
          const varData_1582 = this.options.minZ ?? -Infinity;
          const varData_1583 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_1582 || param_1.z > varData_1583) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_707(this, varData_1570)) {
          return varData_707(this, varData_1570).isPointInsideGrid(param_1);
        }
        const varData_1584 = varData_1664.MathUtils.windingNumber(param_1, varData_707(this, varData_1564));
        return varData_1584 !== 0;
      }
      addPoint(param_1) {
        varData_707(this, varData_1564).push(param_1);
      }
      removePoint(param_1) {
        const varData_1585 = varData_707(this, varData_1564).findIndex(param_1_1 => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_1585 === -1) {
          return;
        }
        varData_707(this, varData_1564).splice(varData_1585, 1);
      }
      removeLastPoint() {
        varData_707(this, varData_1564).pop();
      }
      recalculate() {
        varData_709(this, varData_1565, varData_711(this, varData_1571, varData_1572).call(this, varData_707(this, varData_1564)));
        varData_709(this, varData_1566, varData_711(this, varData_1573, varData_1574).call(this, varData_707(this, varData_1564)));
        varData_709(this, varData_1567, varData_711(this, varData_1579, varData_1580).call(this, varData_707(this, varData_1564)));
        varData_709(this, varData_1568, varData_711(this, varData_1577, varData_1578).call(this, varData_707(this, varData_1565), varData_707(this, varData_1566)));
        varData_709(this, varData_1569, varData_711(this, varData_1575, varData_1576).call(this, varData_707(this, varData_1565), varData_707(this, varData_1566)));
        if (!this.options.useGrid) {
          return;
        }
        varData_709(this, varData_1570, new varData_1536(varData_707(this, varData_1564), varData_707(this, varData_1565), varData_707(this, varData_1566), varData_707(this, varData_1568), varData_707(this, varData_1567), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_1563 = new WeakMap();
    varData_1564 = new WeakMap();
    varData_1565 = new WeakMap();
    varData_1566 = new WeakMap();
    varData_1567 = new WeakMap();
    varData_1568 = new WeakMap();
    varData_1569 = new WeakMap();
    varData_1570 = new WeakMap();
    varData_1571 = new WeakSet();
    varData_1572 = function (param_1) {
      let varData_1586 = Number.MAX_SAFE_INTEGER;
      let varData_1587 = Number.MAX_SAFE_INTEGER;
      for (const varData_1588 of param_1) {
        varData_1586 = Math.min(varData_1586, varData_1588.x);
        varData_1587 = Math.min(varData_1587, varData_1588.y);
      }
      return new varData_1632(varData_1586, varData_1587);
    };
    varData_1573 = new WeakSet();
    varData_1574 = function (param_1) {
      let varData_1589 = Number.MIN_SAFE_INTEGER;
      let varData_1590 = Number.MIN_SAFE_INTEGER;
      for (const varData_1591 of param_1) {
        varData_1589 = Math.max(varData_1589, varData_1591.x);
        varData_1590 = Math.max(varData_1590, varData_1591.y);
      }
      return new varData_1632(varData_1589, varData_1590);
    };
    varData_1575 = new WeakSet();
    varData_1576 = function (param_1, param_2) {
      const varData_1592 = param_2.add(param_1);
      return varData_1592.divideScalar(2);
    };
    varData_1577 = new WeakSet();
    varData_1578 = function (param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_1579 = new WeakSet();
    varData_1580 = function (param_1) {
      let varData_1593 = 0;
      for (let loopIdx = 0, loopIdx_1 = param_1.length - 1; loopIdx < param_1.length; loopIdx_1 = loopIdx++) {
        const varData_1594 = param_1[loopIdx];
        const varData_1595 = param_1[loopIdx_1];
        varData_1593 += varData_1594.x * varData_1595.y;
        varData_1593 -= varData_1594.y * varData_1595.x;
      }
      return Math.abs(varData_1593 / 2);
    };
    var varData_1596;
    var varData_1597;
    var varData_1598 = class _0x255d1f {
      constructor(param_1, param_2) {
        varData_708(this, varData_1596);
        const varData_1599 = varData_711(this, varData_1596, varData_1597).call(this, param_1, param_2);
        this.x = varData_1599.x;
        this.y = varData_1599.y;
      }
      equals(param_1, param_2) {
        const varData_1600 = varData_711(this, varData_1596, varData_1597).call(this, param_1, param_2);
        return this.x === varData_1600.x && this.y === varData_1600.y;
      }
      add(param_1, param_2, param_3) {
        const varData_1601 = varData_711(this, varData_1596, varData_1597).call(this, param_1, param_2);
        const varData_1602 = this.x + (param_3 ? varData_1601.x * param_3 : varData_1601.x);
        const varData_1603 = this.y + (param_3 ? varData_1601.y * param_3 : varData_1601.y);
        return new _0x255d1f(varData_1602, varData_1603);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1604 = this.x + param_1;
        const varData_1605 = this.y + param_1;
        return new _0x255d1f(varData_1604, varData_1605);
      }
      sub(param_1, param_2, param_3) {
        const varData_1606 = varData_711(this, varData_1596, varData_1597).call(this, param_1, param_2);
        const varData_1607 = this.x - (param_3 ? varData_1606.x * param_3 : varData_1606.x);
        const varData_1608 = this.y - (param_3 ? varData_1606.y * param_3 : varData_1606.y);
        return new _0x255d1f(varData_1607, varData_1608);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1609 = this.x - param_1;
        const varData_1610 = this.y - param_1;
        return new _0x255d1f(varData_1609, varData_1610);
      }
      multiply(param_1, param_2) {
        const varData_1611 = varData_711(this, varData_1596, varData_1597).call(this, param_1, param_2);
        const varData_1612 = this.x * varData_1611.x;
        const varData_1613 = this.y * varData_1611.y;
        return new _0x255d1f(varData_1612, varData_1613);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1614 = this.x * param_1;
        const varData_1615 = this.y * param_1;
        return new _0x255d1f(varData_1614, varData_1615);
      }
      divide(param_1, param_2) {
        const varData_1616 = varData_711(this, varData_1596, varData_1597).call(this, param_1, param_2);
        const varData_1617 = this.x / varData_1616.x;
        const varData_1618 = this.y / varData_1616.y;
        return new _0x255d1f(varData_1617, varData_1618);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1619 = this.x / param_1;
        const varData_1620 = this.y / param_1;
        return new _0x255d1f(varData_1619, varData_1620);
      }
      round() {
        const varData_1621 = Math.round(this.x);
        const varData_1622 = Math.round(this.y);
        return new _0x255d1f(varData_1621, varData_1622);
      }
      floor() {
        const varData_1623 = Math.floor(this.x);
        const varData_1624 = Math.floor(this.y);
        return new _0x255d1f(varData_1623, varData_1624);
      }
      ceil() {
        const varData_1625 = Math.ceil(this.x);
        const varData_1626 = Math.ceil(this.y);
        return new _0x255d1f(varData_1625, varData_1626);
      }
      getCenter(param_1, param_2) {
        const varData_1627 = varData_711(this, varData_1596, varData_1597).call(this, param_1, param_2);
        return new _0x255d1f((this.x + varData_1627.x) / 2, (this.y + varData_1627.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0x3844c4, _0x5d3c0e] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0x3844c4 !== "number" || typeof _0x5d3c0e !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x5b20b4, _0x44a898] = [this.x - _0x3844c4, this.y - _0x5d3c0e];
        return Math.sqrt(_0x5b20b4 * _0x5b20b4 + _0x44a898 * _0x44a898);
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
        var varData_1628 = {
          x: this.x,
          y: this.y
        };
        return varData_1628;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1596 = new WeakSet();
    varData_1597 = function (param_1, param_2) {
      let varData_1629 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_1598 || param_1 instanceof varData_1502) {
        varData_1629 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1630 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_1629 = varData_1630;
      } else if (typeof param_1 === "object") {
        varData_1629 = param_1;
      } else {
        var varData_1631 = {
          x: param_1,
          y: param_2
        };
        varData_1629 = varData_1631;
      }
      if (typeof varData_1629.x !== "number" || typeof varData_1629.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1629;
    };
    var varData_1632 = varData_1598;
    var varData_1633 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_1634 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_1635 = ([_0x79d5f3, _0x2d23f4, _0x5e9e33], [_0x183524, _0x246ceb, _0x2fc4cc]) => {
      const [_0x181994, _0x56d001, _0xab79b4] = [_0x79d5f3 - _0x183524, _0x2d23f4 - _0x246ceb, _0x5e9e33 - _0x2fc4cc];
      return Math.sqrt(_0x181994 * _0x181994 + _0x56d001 * _0x56d001 + _0xab79b4 * _0xab79b4);
    };
    var varData_1636 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_1637 = (param_1, param_2) => {
      if (param_1 instanceof varData_1632) {
        return param_1;
      } else if (param_1 instanceof varData_1502) {
        return new varData_1632(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_1632(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1632(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1632(param_1, param_2);
    };
    var varData_1638 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_1502) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_1502(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1502(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1502(param_1, param_2, param_3);
    };
    var varData_1639 = (param_1, param_2) => {
      let varData_1640 = 0;
      const varData_1641 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let loopIdx = 0; loopIdx < param_2.length; loopIdx++) {
        const varData_1642 = param_2[loopIdx];
        const varData_1643 = param_2[(loopIdx + 1) % param_2.length];
        if (varData_1642.y <= param_1.y) {
          if (varData_1643.y > param_1.y && varData_1641(varData_1642, varData_1643, param_1) > 0) {
            varData_1640++;
          }
        } else if (varData_1643.y <= param_1.y && varData_1641(varData_1642, varData_1643, param_1) < 0) {
          varData_1640--;
        }
      }
      return varData_1640;
    };
    var varData_1644 = {
      clamp: varData_1633,
      getMapRange: varData_1634,
      getDistance: varData_1635,
      getRandomNumber: varData_1636,
      parseVector2: varData_1637,
      parseVector3: varData_1638,
      windingNumber: varData_1639
    };
    var varData_1645 = varData_1644;
    var varData_1646 = {};
    var varData_1647 = {
      ArrUtils: () => varData_1653
    };
    varData_701(varData_1646, varData_1647);
    var varData_1648 = param_1 => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const varData_1649 = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[varData_1649]] = [param_1[varData_1649], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_1650 = (param_1, param_2) => {
      const varData_1651 = [];
      for (let loopIdx = 0; loopIdx < param_2; loopIdx++) {
        varData_1651.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return varData_1651;
    };
    var varData_1652 = {
      shuffleArray: varData_1648,
      getRandomElements: varData_1650
    };
    var varData_1653 = varData_1652;
    function handleAction_88(param_1, param_2) {
      const varData_1654 = "_";
      const varData_1655 = handleAction_89((param_1_1, param_2_1, ..._0x27a02e) => {
        return param_1(param_1_1, ..._0x27a02e);
      }, param_2);
      return {
        get: function (..._0x32fdde) {
          return varData_1655.get(varData_1654, ..._0x32fdde);
        },
        reset: function () {
          varData_1655.reset(varData_1654);
        }
      };
    }
    function handleAction_89(param_1, param_2) {
      const varData_1656 = param_2.timeToLive || 60000;
      const varData_1657 = {};
      const varData_1658 = param_2.immediateResolve || false;
      async function handleAction_90(param_1_1, ..._0x2a9b9b) {
        let varData_1659 = varData_1657[param_1_1];
        if (!varData_1659) {
          varData_1659 = {
            value: null,
            lastUpdated: 0
          };
          varData_1657[param_1_1] = varData_1659;
        }
        const timestamp = Date.now();
        if (varData_1659.lastUpdated === 0 || timestamp - varData_1659.lastUpdated > varData_1656) {
          const [_0x163c37, _0x2d9146] = await param_1(varData_1659, param_1_1, ..._0x2a9b9b);
          if (_0x163c37) {
            varData_1659.lastUpdated = timestamp;
            varData_1659.value = _0x2d9146;
          }
          return _0x2d9146;
        }
        if (varData_1658) {
          return Promise.resolve(varData_1659.value);
        } else {
          return await new Promise(param_1_2 => setTimeout(() => param_1_2(varData_1659.value), 0));
        }
      }
      return {
        get: async function (param_1_1, ..._0x3105f2) {
          return await handleAction_90(param_1_1, ..._0x3105f2);
        },
        reset: function (param_1_1) {
          const varData_1660 = varData_1657[param_1_1];
          if (varData_1660) {
            varData_1660.lastUpdated = 0;
          }
        },
        clear: function () {
          for (const varData_1661 in varData_1657) {
            delete varData_1657[varData_1661];
          }
        }
      };
    }
    function handleAction_91() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_120();
      } else {
        return new varData_693(4).toString();
      }
    }
    function handleAction_92(param_1) {
      return varData_147(param_1, varData_147.URL);
    }
    function handleAction_93(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_1662 = Date.now() - timestamp > param_2;
          if (param_1() || varData_1662) {
            clearInterval(intervalId);
            return param_1_1(varData_1662);
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
    var varData_1663 = {
      cache: handleAction_88,
      cacheableMap: handleAction_89,
      waitForCondition: handleAction_93,
      getUUID: handleAction_91,
      getStringHash: handleAction_92,
      wait: handleAction_94,
      waitForNextFrame: handleAction_95,
      deflate: varData_683,
      inflate: varData_687,
      ...varData_1486,
      ...varData_1646
    };
    var varData_1664 = varData_1663;
    var varData_1665 = (param_1 => {
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
    })(varData_1665 || {});
    var varData_1666 = {};
    var varData_1667 = (param_1, param_2) => "__cfx_export_" + param_1 + "_" + param_2;
    var varData_1668 = new Proxy((param_1, param_2) => {
      const varData_1669 = (param_1_1, ..._0x58521b) => {
        const varData_1670 = param_2(..._0x58521b);
        if (varData_1670 instanceof Promise) {
          varData_1670.then(param_1_2 => param_1_1(param_1_2));
        } else {
          param_1_1(varData_1670);
        }
      };
      const resourceName = GetCurrentResourceName();
      if (resourceName == undefined) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      }
      on(varData_1667(resourceName, param_1), param_1_1 => {
        param_1_1(varData_1669);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1666[param_2] == undefined) {
          varData_1666[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1671 = param_2_1 + "_async";
            return (..._0x295af7) => {
              return new Promise(async (param_1_2, param_2_2) => {
                const varData_1672 = await varData_1664.waitForCondition(() => GetResourceState(param_2) === "started", 60000);
                if (varData_1672) {
                  return param_2_2("Resource " + param_2 + " is not running");
                }
                if (varData_1666[param_2][varData_1671] === undefined) {
                  emit(varData_1667(param_2, param_2_1), param_1_3 => {
                    varData_1666[param_2][varData_1671] = param_1_3;
                  });
                  const varData_1673 = await varData_1664.waitForCondition(() => varData_1666[param_2][varData_1671] !== undefined, 1000);
                  if (varData_1673) {
                    return param_2_2("Failed to get export " + param_2_1 + " from resource " + param_2);
                  }
                }
                try {
                  varData_1666[param_2][varData_1671](param_1_2, ..._0x295af7);
                } catch (err) {
                  param_2_2(err);
                }
              });
            };
          }
        });
      }
    });
    var varData_1674 = new Proxy((param_1, param_2) => {
      const resourceName = GetCurrentResourceName();
      if (resourceName == undefined) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      } else if (typeof param_2 !== "function") {
        throw new Error("Callback is not a function");
      } else if (typeof param_1 !== "string") {
        throw new Error("Export name must be a string");
      }
      on(varData_1667(resourceName, param_1), param_1_1 => {
        param_1_1(param_2);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1666[param_2] == undefined) {
          varData_1666[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1675 = param_2_1 + "_sync";
            if (varData_1666[param_2][varData_1675] === undefined) {
              emit(varData_1667(param_2, param_2_1), param_1_2 => {
                varData_1666[param_2][varData_1675] = param_1_2;
              });
              if (varData_1666[param_2][varData_1675] === undefined) {
                if (GetResourceState(param_2) !== "started") {
                  throw new Error("Resource " + param_2 + " is not running");
                } else {
                  throw new Error("No such export " + param_2_1 + " in resource " + param_2);
                }
              }
            }
            return (..._0x22b903) => {
              try {
                return varData_1666[param_2][varData_1675](..._0x22b903);
              } catch (err) {
                throw new Error("An error occurred while calling export " + param_2_1 + " of resource " + param_2 + " - see above for details");
              }
            };
          }
        });
      }
    });
    on("onResourceStop", param_1 => varData_1666[param_1] = undefined);
    var varData_1676 = {
      Async: varData_1668,
      Sync: varData_1674
    };
    var varData_1677 = varData_1676;
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
        const varData_1678 = varData_1677.Sync.config.GetModuleConfig(param_1);
        if (varData_1678 === undefined) {
          return;
        }
        dataMap.set(param_1, varData_1678);
        if (!dataSet.has(param_1)) {
          dataSet.add(param_1);
        }
      }
      const varData_1679 = dataMap.get(param_1);
      if (param_2) {
        if (varData_1679 == null) {
          return undefined;
        } else {
          return varData_1679[param_2];
        }
      } else {
        return varData_1679;
      }
    }
    function handleAction_98(param_1) {
      return handleAction_97(resourceName, param_1);
    }
    function handleAction_99() {
      return varData_1677.Sync.config.IsConfigReady();
    }
    var varData_1680 = {
      IsConfigLoaded: handleAction_96,
      GetModuleConfig: handleAction_97,
      GetResourceConfig: handleAction_98,
      IsConfigReady: handleAction_99
    };
    var varData_1681 = varData_1680;
    var varData_1682 = varData_705(varData_1484());
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
    var varData_1702;
    var varData_1703 = class {
      constructor(param_1, param_2) {
        varData_708(this, varData_1687);
        varData_708(this, varData_1689);
        varData_708(this, varData_1691);
        varData_708(this, varData_1693);
        varData_708(this, varData_1695);
        varData_708(this, varData_1697);
        varData_708(this, varData_1699);
        varData_708(this, varData_1701);
        varData_708(this, varData_1683, undefined);
        varData_708(this, varData_1684, undefined);
        varData_708(this, varData_1685, undefined);
        varData_708(this, varData_1686, {});
        const varData_1704 = varData_711(this, varData_1695, varData_1696).call(this, param_1);
        const varData_1705 = varData_711(this, varData_1699, varData_1700).call(this, varData_1704, param_2);
        const [_0x4da5fa, _0x4fc0e5, _0x5da5ae] = varData_1705.split(":").map(param_1_1 => param_1_1.length > 0 ? param_1_1 : undefined);
        varData_709(this, varData_1683, _0x4da5fa);
        varData_709(this, varData_1684, _0x4fc0e5);
        varData_709(this, varData_1685, _0x5da5ae);
      }
      hashString(param_1) {
        return param_1;
        var varData_1706;
        const varData_1707 = varData_707(this, varData_1687, varData_1688);
        const varData_1708 = (varData_1706 = varData_707(this, varData_1686)[varData_1707]) == null ? undefined : varData_1706[param_1];
        if (varData_1708) {
          return varData_1708;
        }
        if (!varData_707(this, varData_1686)[varData_1707]) {
          varData_707(this, varData_1686)[varData_1707] = {};
        }
        const varData_1709 = varData_711(this, varData_1693, varData_1694).call(this, (0, varData_1682.HmacMD5)(param_1, varData_1707).toString());
        varData_707(this, varData_1686)[varData_1707][param_1] = varData_1709;
        if (IsDuplicityVersion()) {
          console.log("[SDK] Hash Debug | Event: " + param_1 + " | Hash: " + varData_1709);
        }
        return varData_1709;
      }
      encode(param_1) {
        return JSON.stringify(param_1);
        let varData_1710;
        const varData_1711 = varData_707(this, varData_1691, varData_1692);
        try {
          varData_1710 = varData_711(this, varData_1697, varData_1698).call(this, JSON.stringify(param_1), varData_1711);
        } catch (err) {
          console.error("Failed to encode payload");
        }
        return varData_1710;
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
        let varData_1712;
        const varData_1713 = varData_707(this, varData_1689, varData_1690);
        try {
          varData_1712 = JSON.parse(varData_711(this, varData_1699, varData_1700).call(this, param_1, varData_1713));
        } catch (err) {
          console.error("Failed to decode payload");
        }
        return varData_1712;
      }
    };
    varData_1683 = new WeakMap();
    varData_1684 = new WeakMap();
    varData_1685 = new WeakMap();
    varData_1686 = new WeakMap();
    varData_1687 = new WeakSet();
    varData_1688 = function () {
      return varData_707(this, varData_1683) ?? varData_711(this, varData_1701, varData_1702).call(this);
    };
    varData_1689 = new WeakSet();
    varData_1690 = function () {
      return varData_707(this, varData_1684) ?? varData_711(this, varData_1701, varData_1702).call(this);
    };
    varData_1691 = new WeakSet();
    varData_1692 = function () {
      return varData_707(this, varData_1685) ?? varData_711(this, varData_1701, varData_1702).call(this);
    };
    varData_1693 = new WeakSet();
    varData_1694 = function (param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1682.enc.Base64.stringify(varData_1682.enc.Utf8.parse(param_1));
    };
    varData_1695 = new WeakSet();
    varData_1696 = function (param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1682.enc.Utf8.stringify(varData_1682.enc.Base64.parse(param_1));
    };
    varData_1697 = new WeakSet();
    varData_1698 = function (param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1682.AES.encrypt(param_1, param_2).toString();
    };
    varData_1699 = new WeakSet();
    varData_1700 = function (param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1682.AES.decrypt(param_1, param_2).toString(varData_1682.enc.Utf8);
    };
    varData_1701 = new WeakSet();
    varData_1702 = function (_0x5d715f = 128) {
      return varData_1682.lib.WordArray.random(_0x5d715f / 8).toString();
    };
    var varData_1714;
    var varData_1715 = class {
      constructor() {
        varData_708(this, varData_1714, undefined);
        const resourceName_1 = GetCurrentResourceName();
        const varData_1716 = varData_1664.getStringHash("__npx_sdk:" + resourceName_1 + ":token");
        const varData_1717 = GetConvar(varData_1716, "");
        varData_709(this, varData_1714, new varData_1703(varData_1717, "0xD199D65A"));
      }
      on(param_1, param_2) {
        const varData_1718 = varData_707(this, varData_1714).hashString(param_1);
        return on(varData_1718, param_2);
      }
      onNet(param_1, param_2) {
        const varData_1719 = varData_707(this, varData_1714).hashString(param_1);
        onNet(varData_1719, param_2);
        const varData_1720 = varData_707(this, varData_1714).hashString(param_1 + "-c");
        onNet(varData_1720, param_1_1 => {
          const varData_1721 = varData_1664.inflate(new Uint8Array(param_1_1));
          const varData_1722 = msgpack_unpack(varData_1721);
          return param_2(...varData_1722);
        });
      }
      emit(param_1, ..._0x4ee176) {
        const varData_1723 = varData_707(this, varData_1714).hashString(param_1);
        return emit(varData_1723, ..._0x4ee176);
      }
      emitNet(param_1, ..._0x1bad8b) {
        let varData_1724 = msgpack_pack(_0x1bad8b);
        let varData_1725 = varData_1724.length;
        const varData_1726 = varData_707(this, varData_1714).hashString(param_1);
        if (varData_1725 < 16000) {
          TriggerServerEventInternal(varData_1726, varData_1724, varData_1724.length);
        } else {
          TriggerLatentServerEventInternal(varData_1726, varData_1724, varData_1724.length, 1024000);
        }
      }
    };
    varData_1714 = new WeakMap();
    var varData_1727 = new varData_1715();
    var varData_1728 = {
      warning: 1,
      log: 2,
      error: 3,
      debug: 4
    };
    var varData_1729 = GetConvar(GetCurrentResourceName() + "_logLevel", "");
    var varData_1730 = GetConvar("sv_loglevel", "warning");
    (() => {
      varData_1730 = (varData_1729 == null ? undefined : varData_1729.length) > 0 ? varData_1729 : varData_1730;
      if (!varData_1728[varData_1730]) {
        throw new Error("Invalid log level: " + varData_1730);
      }
    })();
    var varData_1731 = () => varData_1728[varData_1730] >= varData_1728.warning;
    var varData_1732 = () => varData_1728[varData_1730] >= varData_1728.log;
    var varData_1733 = () => varData_1728[varData_1730] >= varData_1728.error;
    var varData_1734 = () => varData_1730 === "debug";
    var varData_1735 = {
      warning: (param_1, ..._0xde0a4) => {
        if (!varData_1731()) {
          return;
        }
        console.log("^3[WARNING] ^7" + param_1, ..._0xde0a4, "^0");
      },
      log: (param_1, ..._0x540e89) => {
        if (!varData_1732()) {
          return;
        }
        console.log("^5[nopixel] ^7" + param_1, ..._0x540e89, "^0");
      },
      debug: (param_1, ..._0x59478d) => {
        if (!varData_1734()) {
          return;
        }
        console.log("^2[D] " + param_1, ..._0x59478d, "^0");
      },
      error: (param_1, ..._0x45877f) => {
        if (!varData_1733()) {
          return;
        }
        console.log("^1[ERROR] " + param_1, ..._0x45877f, "^0");
      }
    };
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
    var varData_1747;
    var varData_1748 = class {
      constructor() {
        varData_708(this, varData_1742);
        varData_708(this, varData_1744);
        varData_708(this, varData_1746);
        varData_708(this, varData_1736, undefined);
        varData_708(this, varData_1737, undefined);
        varData_708(this, varData_1738, undefined);
        varData_708(this, varData_1739, undefined);
        varData_708(this, varData_1740, undefined);
        varData_708(this, varData_1741, undefined);
        varData_709(this, varData_1736, false);
        varData_709(this, varData_1737, new Map());
        varData_709(this, varData_1738, new Set());
        varData_709(this, varData_1739, GetGameTimer());
        varData_709(this, varData_1740, GetCurrentResourceName());
        const varData_1749 = varData_1664.getStringHash("__npx_sdk:" + varData_707(this, varData_1740) + ":token");
        const varData_1750 = GetConvar(varData_1749, "");
        varData_709(this, varData_1741, new varData_1703(varData_1750, "0xD199D65A"));
        varData_711(this, varData_1746, varData_1747).call(this);
      }
      register(param_1, param_2) {
        if (varData_707(this, varData_1738).has(param_1)) {
          return varData_1735.error("[RPC] Handler already registered | " + param_1);
        }
        varData_707(this, varData_1738).add(param_1);
        varData_711(this, varData_1742, varData_1743).call(this, "__rpc_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1751;
          let varData_1752;
          const varData_1753 = GetInvokingResource();
          if (varData_1753) {
            return;
          }
          const varData_1754 = varData_707(this, varData_1741).decode(param_1_1);
          if (!(varData_1754 == null ? undefined : varData_1754.id) || !(varData_1754 == null ? undefined : varData_1754.origin)) {
            return varData_1735.error("[RPC] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1751 = await param_2(...param_2_1);
            varData_1752 = true;
          } catch (err) {
            varData_1751 = err.message;
            varData_1752 = false;
          }
          varData_711(this, varData_1744, varData_1745).call(this, "__rpc_res:" + varData_1754.origin, varData_1754.id, [varData_1752, varData_1751]);
        });
      }
      execute(param_1, ..._0x20cd7a) {
        const varData_1755 = {
          id: ++varData_710(this, varData_1739)._,
          origin: varData_707(this, varData_1740)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let timerId = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 60000);
          var varData_1756 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: timerId
          };
          varData_707(this, varData_1737).set(varData_1755.id, varData_1756);
        });
        promise.finally(() => varData_707(this, varData_1737).delete(varData_1755.id));
        varData_711(this, varData_1744, varData_1745).call(this, "__rpc_req:" + param_1, varData_707(this, varData_1741).encode(varData_1755), _0x20cd7a);
        return promise;
      }
      executeCustom(param_1, param_2, ..._0x12d986) {
        const varData_1757 = {
          id: ++varData_710(this, varData_1739)._,
          origin: varData_707(this, varData_1740)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let timerId = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 60000);
          var varData_1758 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: timerId
          };
          varData_707(this, varData_1737).set(varData_1757.id, varData_1758);
        });
        promise.finally(() => varData_707(this, varData_1737).delete(varData_1757.id));
        varData_711(this, varData_1744, varData_1745).call(this, "__rpc_req:" + param_1, varData_707(this, varData_1741).encode(varData_1757), _0x12d986);
        return promise;
      }
    };
    varData_1736 = new WeakMap();
    varData_1737 = new WeakMap();
    varData_1738 = new WeakMap();
    varData_1739 = new WeakMap();
    varData_1740 = new WeakMap();
    varData_1741 = new WeakMap();
    varData_1742 = new WeakSet();
    varData_1743 = function (param_1, param_2) {
      const varData_1759 = varData_707(this, varData_1741).hashString(param_1);
      onNet(varData_1759, param_2);
      const varData_1760 = varData_707(this, varData_1741).hashString(param_1 + "-c");
      onNet(varData_1760, param_1_1 => {
        const varData_1761 = varData_1664.inflate(new Uint8Array(param_1_1));
        const varData_1762 = msgpack_unpack(varData_1761);
        return param_2(...varData_1762);
      });
    };
    varData_1744 = new WeakSet();
    varData_1745 = function (param_1, ..._0x138ae8) {
      let varData_1763 = msgpack_pack(_0x138ae8);
      let varData_1764 = varData_1763.length;
      const varData_1765 = varData_707(this, varData_1741).hashString(param_1);
      if (varData_1764 < 16000) {
        TriggerServerEventInternal(varData_1765, varData_1763, varData_1763.length);
      } else {
        TriggerLatentServerEventInternal(varData_1765, varData_1763, varData_1763.length, 1024000);
      }
    };
    varData_1746 = new WeakSet();
    varData_1747 = function () {
      if (varData_707(this, varData_1736)) {
        return varData_1735.error("SDK RPC handlers already initialized");
      }
      varData_711(this, varData_1742, varData_1743).call(this, "__rpc_res:" + varData_707(this, varData_1740), (param_1, [_0x3ca7b9, _0x187264]) => {
        const varData_1766 = varData_707(this, varData_1737).get(param_1);
        if (!varData_1766) {
          return;
        }
        clearTimeout(varData_1766.timeout);
        if (_0x3ca7b9) {
          varData_1766.resolve(_0x187264);
        } else {
          varData_1766.reject(new Error(_0x187264));
        }
      });
      varData_709(this, varData_1736, true);
      varData_1735.debug("SDK RPC handlers initialized");
    };
    var varData_1767 = new varData_1748();
    var varData_1768 = varData_705(varData_1484());
    var varData_1769 = (_0x44be1f = 128) => {
      return varData_1768.lib.WordArray.random(_0x44be1f / 8).toString();
    };
    var varData_1770 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1768.AES.encrypt(param_1, param_2).toString();
    };
    var varData_1771 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1768.AES.decrypt(param_1, param_2).toString(varData_1768.enc.Utf8);
    };
    var varData_1772 = param_1 => {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1768.enc.Base64.stringify(varData_1768.enc.Utf8.parse(param_1));
    };
    var varData_1773 = (param_1, param_2) => {
      return varData_1772((0, varData_1768.HmacMD5)(param_1, param_2).toString());
    };
    var varData_1774 = {};
    var varData_1775 = (param_1, _0x229a99 = varData_1769()) => {
      if (varData_1774[param_1] === undefined) {
        varData_1774[param_1] = varData_1773(param_1, _0x229a99);
      }
      return varData_1774[param_1];
    };
    var varData_1776 = (param_1, _0x55e29c = varData_1769()) => {
      try {
        return varData_1770(JSON.stringify(param_1), _0x55e29c);
      } catch (err) {
        console.error("Failed to encode payload");
      }
    };
    var varData_1777 = (param_1, _0xdba61 = varData_1769()) => {
      try {
        return JSON.parse(varData_1771(param_1, _0xdba61));
      } catch (err) {
        console.error("Failed to decode payload");
      }
    };
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
    var varData_1795;
    var varData_1796 = class {
      constructor() {
        varData_708(this, varData_1786);
        varData_708(this, varData_1788);
        varData_708(this, varData_1790);
        varData_708(this, varData_1792);
        varData_708(this, varData_1794);
        varData_708(this, varData_1778, undefined);
        varData_708(this, varData_1779, undefined);
        varData_708(this, varData_1780, undefined);
        varData_708(this, varData_1781, undefined);
        varData_708(this, varData_1782, undefined);
        varData_708(this, varData_1783, undefined);
        varData_708(this, varData_1784, undefined);
        varData_708(this, varData_1785, undefined);
        varData_709(this, varData_1778, GetCurrentResourceName());
        varData_709(this, varData_1779, varData_1769(64));
        varData_709(this, varData_1780, varData_1769(64));
        varData_709(this, varData_1781, varData_1769(64));
        varData_709(this, varData_1782, false);
        varData_709(this, varData_1783, 0);
        varData_709(this, varData_1784, []);
        varData_709(this, varData_1785, new Map());
        varData_711(this, varData_1786, varData_1787).call(this, "__npx_sdk:init", varData_711(this, varData_1794, varData_1795).bind(this));
      }
      async register(param_1, param_2) {
        varData_711(this, varData_1788, varData_1789).call(this, "__nui_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1797;
          let varData_1798;
          const varData_1799 = varData_1777(param_1_1, varData_707(this, varData_1780));
          if (!(varData_1799 == null ? undefined : varData_1799.id) || !(varData_1799 == null ? undefined : varData_1799.resource)) {
            return varData_1735.error("[NUI] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1797 = await param_2(...param_2_1);
            varData_1798 = true;
          } catch (err) {
            varData_1797 = err.message;
            varData_1798 = false;
          }
          varData_711(this, varData_1792, varData_1793).call(this, "__nui_res:" + varData_1799.resource, varData_1799.id, [varData_1798, varData_1797]);
        });
      }
      remove(param_1) {
        const varData_1800 = varData_1775("__nui_req:" + param_1, varData_707(this, varData_1779));
        UnregisterRawNuiCallback(varData_1800);
      }
      async execute(param_1, ..._0x14eedb) {
        const varData_1801 = {
          id: ++varData_710(this, varData_1783)._,
          resource: varData_707(this, varData_1778)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let varData_1802;
          if (varData_707(this, varData_1782)) {
            varData_1802 = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 60000);
          } else {
            varData_1802 = 0;
          }
          var varData_1803 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: varData_1802
          };
          varData_707(this, varData_1785).set(varData_1801.id, varData_1803);
        });
        promise.finally(() => varData_707(this, varData_1785).delete(varData_1801.id));
        if (!varData_707(this, varData_1782)) {
          var varData_1804 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1801,
            args: _0x14eedb
          };
          varData_707(this, varData_1784).push(varData_1804);
        } else {
          varData_711(this, varData_1792, varData_1793).call(this, "__nui_req:" + param_1, varData_1776(varData_1801, varData_707(this, varData_1781)), _0x14eedb);
        }
        return promise;
      }
      async executeCustom(param_1, param_2, ..._0x598560) {
        const varData_1805 = {
          id: ++varData_710(this, varData_1783)._,
          resource: varData_707(this, varData_1778)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let varData_1806;
          if (varData_707(this, varData_1782)) {
            varData_1806 = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 60000);
          } else {
            varData_1806 = 0;
          }
          var varData_1807 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: varData_1806
          };
          varData_707(this, varData_1785).set(varData_1805.id, varData_1807);
        });
        promise.finally(() => varData_707(this, varData_1785).delete(varData_1805.id));
        if (!varData_707(this, varData_1782)) {
          var varData_1808 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1805,
            args: _0x598560
          };
          varData_707(this, varData_1784).push(varData_1808);
        } else {
          varData_711(this, varData_1792, varData_1793).call(this, "__nui_req:" + param_1, varData_1776(varData_1805, varData_707(this, varData_1781)), _0x598560);
        }
        return promise;
      }
    };
    varData_1778 = new WeakMap();
    varData_1779 = new WeakMap();
    varData_1780 = new WeakMap();
    varData_1781 = new WeakMap();
    varData_1782 = new WeakMap();
    varData_1783 = new WeakMap();
    varData_1784 = new WeakMap();
    varData_1785 = new WeakMap();
    varData_1786 = new WeakSet();
    varData_1787 = function (param_1, param_2) {
      RegisterNuiCallback(param_1, ({
        args: _0x5a4754
      }, param_2_1) => {
        param_2_1(true);
        return param_2(..._0x5a4754);
      });
    };
    varData_1788 = new WeakSet();
    varData_1789 = function (param_1, param_2) {
      if (varData_707(this, varData_1782)) {
        const varData_1809 = varData_1775(param_1, varData_707(this, varData_1779));
        return varData_711(this, varData_1786, varData_1787).call(this, varData_1809, param_2);
      }
      var varData_1810 = {
        type: "on",
        event: param_1,
        callback: param_2
      };
      varData_707(this, varData_1784).push(varData_1810);
    };
    varData_1790 = new WeakSet();
    varData_1791 = function (param_1, ..._0xe993a2) {
      var varData_1811 = {
        event: param_1,
        args: _0xe993a2
      };
      SendNuiMessage(JSON.stringify(varData_1811, null));
    };
    varData_1792 = new WeakSet();
    varData_1793 = function (param_1, ..._0x51e530) {
      if (varData_707(this, varData_1782)) {
        const varData_1812 = varData_1775(param_1, varData_707(this, varData_1779));
        return varData_711(this, varData_1790, varData_1791).call(this, varData_1812, ..._0x51e530);
      }
      var varData_1813 = {
        type: "emit",
        event: param_1,
        args: _0x51e530
      };
      varData_707(this, varData_1784).push(varData_1813);
    };
    varData_1794 = new WeakSet();
    varData_1795 = async function () {
      varData_709(this, varData_1782, true);
      varData_711(this, varData_1788, varData_1789).call(this, "__nui_res:" + varData_707(this, varData_1778), (param_1, [_0x43d079, _0x2558bc]) => {
        const varData_1814 = varData_707(this, varData_1785).get(param_1);
        if (!varData_1814) {
          return varData_1735.error("[NUI] Invalid response received");
        }
        clearTimeout(varData_1814.timeout);
        if (_0x43d079) {
          varData_1814.resolve(_0x2558bc);
        } else {
          varData_1814.reject(_0x2558bc);
        }
      });
      varData_711(this, varData_1790, varData_1791).call(this, "__npx_sdk:ready", varData_1772(varData_707(this, varData_1779) + ":" + varData_707(this, varData_1780) + ":" + varData_707(this, varData_1781)));
      varData_1735.debug("[NUI] SDK initialized");
      for (const varData_1815 of varData_707(this, varData_1784)) {
        if (varData_1815.type === "on") {
          varData_711(this, varData_1788, varData_1789).call(this, varData_1815.event, varData_1815.callback);
        } else if (varData_1815.type === "emit") {
          setTimeout(() => varData_711(this, varData_1792, varData_1793).call(this, varData_1815.event, ...varData_1815.args), 1000);
        } else if (varData_1815.type === "execute") {
          const varData_1816 = varData_707(this, varData_1785).get(varData_1815.metadata.id);
          if (!varData_1816) {
            varData_1735.error("[RPC] " + varData_1815.event + " - Failed to execute queued RPC call");
            continue;
          }
          varData_1816.timeout = setTimeout(() => varData_1816.reject(new Error("RPC timed out | " + varData_1815.event)), 60000);
          setTimeout(() => varData_711(this, varData_1792, varData_1793).call(this, varData_1815.event, varData_1776(varData_1815.metadata, varData_707(this, varData_1781)), varData_1815.args), 1000);
        }
      }
    };
    var varData_1817;
    var varData_1818;
    var varData_1819;
    var varData_1820 = class {
      constructor(param_1) {
        varData_708(this, varData_1817, undefined);
        varData_708(this, varData_1818, undefined);
        varData_708(this, varData_1819, new Map());
        varData_709(this, varData_1817, param_1);
        varData_709(this, varData_1818, false);
        const resourceName_1 = GetCurrentResourceName();
        on("onResourceStop", param_1_1 => {
          if (param_1_1 === resourceName_1) {
            for (const [_0xc77fc0, _0xf50dfe] of varData_707(this, varData_1819).entries()) {
              varData_1677.Sync[varData_707(this, varData_1817)].removeNuiEvent(_0xc77fc0);
            }
          }
        });
        on("onResourceStart", async param_1_1 => {
          if (param_1_1 === varData_707(this, varData_1817)) {
            await varData_1664.waitForCondition(() => GetResourceState(varData_707(this, varData_1817)) === "started", 10000);
            if (varData_707(this, varData_1818)) {
              for (const [_0xaa38a1, _0x43a204] of varData_707(this, varData_1819).entries()) {
                varData_1677.Sync[varData_707(this, varData_1817)].removeNuiEvent(_0xaa38a1);
                this.register(_0xaa38a1, _0x43a204);
              }
            }
            varData_709(this, varData_1818, true);
          }
          if (param_1_1 === resourceName_1) {
            await varData_1664.waitForCondition(() => GetResourceState(varData_707(this, varData_1817)) === "started", 10000);
            varData_709(this, varData_1818, true);
          }
        });
      }
      async execute(param_1, ..._0xd07a80) {
        return await varData_1677.Async[varData_707(this, varData_1817)].sendNuiEvent(param_1, _0xd07a80);
      }
      async register(param_1, param_2) {
        await varData_1664.waitForCondition(() => varData_707(this, varData_1818), 10000);
        const varData_1821 = varData_1677.Sync[varData_707(this, varData_1817)].registerNuiEvent(param_1, param_2);
        if (varData_1821) {
          varData_707(this, varData_1819).set(param_1, param_2);
        }
      }
    };
    varData_1817 = new WeakMap();
    varData_1818 = new WeakMap();
    varData_1819 = new WeakMap();
    var varData_1822 = class {
      constructor() {
        const varData_1823 = async (param_1, param_2) => {
          return await varData_1828.execute(param_1, ...param_2);
        };
        varData_1677.Async("sendNuiEvent", varData_1823);
        const varData_1824 = (param_1, param_2) => {
          varData_1828.register(param_1, param_2);
          return true;
        };
        varData_1677.Sync("registerNuiEvent", varData_1824);
        const varData_1825 = param_1 => {
          varData_1828.remove(param_1);
        };
        varData_1677.Sync("removeNuiEvent", varData_1825);
      }
    };
    var varData_1826 = null && varData_1820;
    var varData_1827 = null && varData_1822;
    var varData_1828 = new varData_1796();
    var varData_1829;
    var varData_1830;
    var varData_1831;
    var varData_1832 = class {
      constructor() {
        varData_708(this, varData_1829, undefined);
        varData_708(this, varData_1830, undefined);
        varData_708(this, varData_1831, undefined);
        varData_709(this, varData_1831, false);
        varData_1828.register("__npx_sdk:sockets:init", async () => {
          varData_1735.debug("Sockets", "Initializing sockets...");
          if (varData_707(this, varData_1831)) {
            return {
              url: varData_707(this, varData_1829),
              API_KEY: varData_707(this, varData_1830)
            };
          }
          const varData_1833 = await new Promise(param_1 => {
            emit("__npx_core:sockets:init", param_1);
          });
          if (!(varData_1833 == null ? undefined : varData_1833.API_URL) || !(varData_1833 == null ? undefined : varData_1833.API_KEY)) {
            return;
          }
          varData_709(this, varData_1829, varData_1833.API_URL);
          varData_709(this, varData_1830, varData_1833.API_KEY);
          varData_709(this, varData_1831, true);
          varData_1735.debug("Sockets", "Sockets initialized.");
          return varData_1833;
        });
      }
      register(param_1, param_2) {
        varData_1828.execute("__npx_sdk:sockets:register", param_1);
        varData_1828.register("__npx_sdk:sockets:pipe:" + param_1, async param_1_1 => {
          return param_2(param_1_1);
        });
      }
      async execute(param_1, param_2) {
        return varData_1828.execute("__npx_sdk:sockets:execute", param_1, param_2);
      }
    };
    varData_1829 = new WeakMap();
    varData_1830 = new WeakMap();
    varData_1831 = new WeakMap();
    var varData_1834 = new varData_1832();
    var varData_1835 = {
      HasItem: async (param_1, param_2) => {
        return await varData_1677.Sync.inventory.HasItem(param_1, param_2);
      },
      GetItemStacks: async (param_1, param_2) => {
        return await varData_1677.Sync.inventory.GetItemStacks(param_1, param_2);
      },
      GetAllItemStacks: async param_1 => {
        return await varData_1677.Sync.inventory.GetAllItemStacks(param_1);
      },
      GetItemList: async () => {
        return await varData_1677.Sync.inventory.GetItemList();
      },
      GetPlayerInventories: async () => {
        return await varData_1677.Sync.inventory.GetPlayerInventories();
      },
      GetPlayerInventoriesWeight: async () => {
        return await varData_1677.Sync.inventory.GetPlayerInventoriesWeight();
      },
      GetWeaponsList: () => {
        return varData_1677.Sync.inventory.GetWeaponsList();
      },
      GetWeapon: param_1 => {
        return varData_1677.Sync.inventory.GetWeapon(param_1);
      },
      GetWeaponByItemStack: param_1 => {
        return varData_1677.Sync.inventory.GetWeaponByItemStack(param_1);
      },
      OpenInventory: (param_1, param_2) => {
        varData_1677.Sync.inventory.OpenInventory(param_1, param_2);
      },
      UseBodySlot: param_1 => {
        return varData_1677.Async.inventory.UseBodySlot(param_1);
      },
      SetBodySlotDisabled: (param_1, param_2, param_3) => {
        varData_1677.Sync.inventory.SetBodySlotDisabled(param_1, param_2, param_3);
      },
      IsBodySlotDisabled: (param_1, param_2) => {
        return varData_1677.Sync.inventory.IsBodySlotDisabled(param_1, param_2);
      }
    };
    var varData_1836 = {};
    var varData_1837 = {
      Activity: () => varData_1914,
      ActivityObjective: () => varData_1888,
      ActivityTask: () => varData_1867,
      Cache: () => varData_1505,
      Group: () => varData_1946,
      GroupManager: () => varData_1971,
      GroupMember: () => varData_1961,
      PolyZone: () => varData_1581,
      Thread: () => varData_1838,
      Vector2: () => varData_1632,
      Vector3: () => varData_1502
    };
    varData_701(varData_1836, varData_1837);
    var varData_1838 = class {
      constructor(param_1, param_2, _0x472717 = "interval") {
        this.callback = param_1;
        this.delay = param_2;
        this.mode = _0x472717;
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
        const varData_1839 = this.hooks.get("preStart") ?? [];
        try {
          for (const varData_1840 of varData_1839) {
            if (!this.aborted) {
              await varData_1840.call(this);
            }
          }
        } catch (err) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", err.message);
        }
        if (this.aborted) {
          try {
            const varData_1841 = this.hooks.get("startAborted") ?? [];
            for (const varData_1842 of varData_1841) {
              await varData_1842.call(this);
            }
          } catch (err) {
            console.log("Error while calling start-aborted hook", err.message);
          }
          return;
        }
        this.active = true;
        const varData_1843 = this.hooks.get("active") ?? [];
        switch (this.mode) {
          case "tick":
            {
              this.threadId = setTick(async () => {
                this.tick += 1;
                try {
                  await this.callback.call(this);
                  for (const varData_1844 of varData_1843) {
                    await varData_1844.call(this);
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
                  for (const varData_1845 of varData_1843) {
                    await varData_1845.call(this);
                  }
                } catch (err) {
                  console.log("Error while calling active hook", err.message);
                }
              }, this.delay);
              break;
            }
          case "timeout":
            {
              const varData_1846 = () => {
                if (this.active) {
                  this.threadId = setTimeout(async () => {
                    this.tick += 1;
                    try {
                      await this.callback.call(this);
                      for (const varData_1847 of varData_1843) {
                        await varData_1847.call(this);
                      }
                    } catch (err) {
                      console.log("Error while calling active hook", err.message);
                    }
                    return varData_1846();
                  }, this.delay);
                }
              };
              varData_1846();
              break;
            }
        }
        const varData_1848 = this.hooks.get("afterStart") ?? [];
        try {
          for (const varData_1849 of varData_1848) {
            await varData_1849.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-start hook", err.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const varData_1850 = this.hooks.get("preStop") ?? [];
        try {
          for (const varData_1851 of varData_1850) {
            if (!this.aborted) {
              await varData_1851.call(this);
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
            const varData_1852 = this.hooks.get("stopAborted") ?? [];
            for (const varData_1853 of varData_1852) {
              await varData_1853.call(this);
            }
          } catch (err) {
            console.log("Error while calling stop-aborted hook", err.message);
          }
          return;
        }
        const varData_1854 = this.hooks.get("afterStop") ?? [];
        try {
          for (const varData_1855 of varData_1854) {
            await varData_1855.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-stop hook", err.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(param_1, param_2) {
        var varData_1856;
        if ((varData_1856 = this.hooks.get(param_1)) == null) {
          undefined;
        } else {
          varData_1856.push(param_2);
        }
      }
      setNextTick(param_1, param_2) {
        this.scheduled[param_1] = this.tick + param_2;
      }
      canTick(param_1) {
        return this.scheduled[param_1] === undefined || this.tick >= this.scheduled[param_1];
      }
    };
    var varData_1857;
    var varData_1858;
    var varData_1859;
    var varData_1860;
    var varData_1861;
    var varData_1862;
    var varData_1863;
    var varData_1864;
    var varData_1865;
    var varData_1866;
    var varData_1867 = class {
      constructor(param_1, param_2) {
        varData_708(this, varData_1863);
        varData_708(this, varData_1865);
        varData_708(this, varData_1857, undefined);
        varData_708(this, varData_1858, undefined);
        varData_708(this, varData_1859, undefined);
        varData_708(this, varData_1860, undefined);
        varData_708(this, varData_1861, undefined);
        varData_708(this, varData_1862, undefined);
        varData_709(this, varData_1857, param_1.id);
        varData_709(this, varData_1858, param_2);
        varData_709(this, varData_1859, new Map());
        varData_709(this, varData_1862, "pending");
        varData_709(this, varData_1860, param_1.required.map(param_1_1 => param_2.objectives.get(param_1_1)));
        varData_709(this, varData_1861, new Map(param_1.objectives.map(param_1_1 => [param_1_1, param_2.objectives.get(param_1_1)])));
        if (param_1.status !== "pending") {
          setTimeout(() => varData_711(this, varData_1863, varData_1864).call(this, param_1.status), 3000);
        }
        varData_1727.onNet("__npx_activities:" + varData_707(this, varData_1858).id + ":task:" + varData_707(this, varData_1857) + ":statusUpdate", varData_711(this, varData_1863, varData_1864).bind(this));
      }
      get id() {
        return varData_707(this, varData_1857);
      }
      onTaskStarted(param_1) {
        const varData_1868 = varData_707(this, varData_1859).get("onTaskStarted") ?? [];
        if (!varData_707(this, varData_1859).has("onTaskStarted")) {
          varData_707(this, varData_1859).set("onTaskStarted", varData_1868);
        }
        varData_1868.push(param_1);
      }
      onTaskEnded(param_1) {
        const varData_1869 = varData_707(this, varData_1859).get("onTaskEnded") ?? [];
        if (!varData_707(this, varData_1859).has("onTaskEnded")) {
          varData_707(this, varData_1859).set("onTaskEnded", varData_1869);
        }
        varData_1869.push(param_1);
      }
      emitEvent(param_1, ..._0x247b81) {
        return varData_1767.execute("__npx_activities:" + varData_707(this, varData_1858).id + ":task:" + varData_707(this, varData_1857) + ":event", param_1, ..._0x247b81);
      }
      toJSON() {
        return {
          id: varData_707(this, varData_1857),
          status: varData_707(this, varData_1862),
          objectives: [...varData_707(this, varData_1861).keys()],
          required: varData_707(this, varData_1860).map(param_1 => param_1.id)
        };
      }
      destroy() {
        varData_707(this, varData_1859).clear();
      }
    };
    varData_1857 = new WeakMap();
    varData_1858 = new WeakMap();
    varData_1859 = new WeakMap();
    varData_1860 = new WeakMap();
    varData_1861 = new WeakMap();
    varData_1862 = new WeakMap();
    varData_1863 = new WeakSet();
    varData_1864 = function (param_1) {
      const varData_1870 = varData_707(this, varData_1862);
      varData_709(this, varData_1862, param_1);
      if (varData_1870 === "pending" && param_1 === "active") {
        varData_711(this, varData_1865, varData_1866).call(this, "onTaskStarted");
      } else if (varData_1870 === "active" && (param_1 === "completed" || param_1 === "failed")) {
        varData_711(this, varData_1865, varData_1866).call(this, "onTaskEnded", param_1 === "completed");
      }
      varData_711(this, varData_1865, varData_1866).call(this, "onStatusUpdate", param_1);
    };
    varData_1865 = new WeakSet();
    varData_1866 = function (param_1, ..._0x505a0c) {
      const varData_1871 = varData_707(this, varData_1859).get(param_1);
      if (!varData_1871) {
        return;
      }
      for (const varData_1872 of varData_1871) {
        try {
          varData_1872.call(this, ..._0x505a0c);
        } catch (err) {
          console.error(err);
        }
      }
    };
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
    var varData_1887;
    var varData_1888 = class {
      constructor(param_1, param_2) {
        varData_708(this, varData_1880);
        varData_708(this, varData_1882);
        varData_708(this, varData_1884);
        varData_708(this, varData_1886);
        varData_708(this, varData_1873, undefined);
        varData_708(this, varData_1874, undefined);
        varData_708(this, varData_1875, undefined);
        varData_708(this, varData_1876, undefined);
        varData_708(this, varData_1877, undefined);
        varData_708(this, varData_1878, undefined);
        varData_708(this, varData_1879, undefined);
        varData_709(this, varData_1873, param_1.id);
        varData_709(this, varData_1874, param_1.name);
        varData_709(this, varData_1875, param_1.description);
        varData_709(this, varData_1876, param_2);
        varData_709(this, varData_1877, new Map());
        varData_709(this, varData_1878, param_1.status);
        varData_709(this, varData_1879, new Map(Object.entries(param_1.data ?? {})));
        varData_1727.onNet("__npx_activities:" + varData_707(this, varData_1876).id + ":objective:" + varData_707(this, varData_1873) + ":statusUpdate", varData_711(this, varData_1880, varData_1881).bind(this));
        varData_1727.onNet("__npx_activities:" + varData_707(this, varData_1876).id + ":objective:" + varData_707(this, varData_1873) + ":dataUpdate", varData_711(this, varData_1882, varData_1883).bind(this));
        varData_1727.onNet("__npx_activities:" + varData_707(this, varData_1876).id + ":objective:" + varData_707(this, varData_1873) + ":dataSet", varData_711(this, varData_1884, varData_1885).bind(this));
      }
      get id() {
        return varData_707(this, varData_1873);
      }
      get name() {
        return varData_707(this, varData_1874);
      }
      get description() {
        return varData_707(this, varData_1875);
      }
      get status() {
        return varData_707(this, varData_1878);
      }
      get activity() {
        return varData_707(this, varData_1876);
      }
      getData(param_1) {
        return varData_707(this, varData_1879).get(param_1);
      }
      onStatusUpdate(param_1) {
        const varData_1889 = varData_707(this, varData_1877).get("onStatusUpdate") ?? [];
        if (!varData_707(this, varData_1877).has("onStatusUpdate")) {
          varData_707(this, varData_1877).set("onStatusUpdate", varData_1889);
        }
        varData_1889.push(param_1);
      }
      onDataUpdate(param_1) {
        const varData_1890 = varData_707(this, varData_1877).get("onDataUpdate") ?? [];
        if (!varData_707(this, varData_1877).has("onDataUpdate")) {
          varData_707(this, varData_1877).set("onDataUpdate", varData_1890);
        }
        varData_1890.push(param_1);
      }
      toJSON() {
        return {
          id: varData_707(this, varData_1873),
          name: varData_707(this, varData_1874),
          description: varData_707(this, varData_1875),
          status: varData_707(this, varData_1878),
          data: Object.fromEntries(varData_707(this, varData_1879))
        };
      }
      destroy() {
        varData_707(this, varData_1877).clear();
      }
    };
    varData_1873 = new WeakMap();
    varData_1874 = new WeakMap();
    varData_1875 = new WeakMap();
    varData_1876 = new WeakMap();
    varData_1877 = new WeakMap();
    varData_1878 = new WeakMap();
    varData_1879 = new WeakMap();
    varData_1880 = new WeakSet();
    varData_1881 = function (param_1) {
      varData_709(this, varData_1878, param_1);
      varData_711(this, varData_1886, varData_1887).call(this, "onStatusUpdated", param_1);
    };
    varData_1882 = new WeakSet();
    varData_1883 = function (param_1, param_2) {
      varData_707(this, varData_1879).set(param_1, param_2);
      varData_711(this, varData_1886, varData_1887).call(this, "onDataUpdate", param_1, param_2);
    };
    varData_1884 = new WeakSet();
    varData_1885 = function (param_1) {
      for (const [_0x645bad, _0x283569] of Object.entries(param_1)) {
        varData_707(this, varData_1879).set(_0x645bad, _0x283569);
        varData_711(this, varData_1886, varData_1887).call(this, "onDataUpdate", _0x645bad, _0x283569);
      }
    };
    varData_1886 = new WeakSet();
    varData_1887 = function (param_1, ..._0x2ef0f8) {
      const varData_1891 = varData_707(this, varData_1877).get(param_1);
      if (!varData_1891) {
        return;
      }
      for (const varData_1892 of varData_1891) {
        try {
          varData_1892.call(this, ..._0x2ef0f8);
        } catch (err) {
          console.error(err);
        }
      }
    };
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
    var varData_1913;
    var varData_1914 = class {
      constructor(param_1) {
        varData_708(this, varData_1902);
        varData_708(this, varData_1904);
        varData_708(this, varData_1906);
        varData_708(this, varData_1908);
        varData_708(this, varData_1910);
        varData_708(this, varData_1912);
        varData_708(this, varData_1893, undefined);
        varData_708(this, varData_1894, undefined);
        varData_708(this, varData_1895, undefined);
        varData_708(this, varData_1896, undefined);
        varData_708(this, varData_1897, undefined);
        varData_708(this, varData_1898, undefined);
        varData_708(this, varData_1899, undefined);
        varData_708(this, varData_1900, undefined);
        varData_708(this, varData_1901, undefined);
        varData_709(this, varData_1893, param_1.id);
        varData_709(this, varData_1894, param_1.code);
        varData_709(this, varData_1895, param_1.name);
        varData_709(this, varData_1896, param_1.description);
        varData_709(this, varData_1897, new Map());
        varData_709(this, varData_1898, "pending");
        varData_709(this, varData_1899, param_1.deadline ? new Date(param_1.deadline) : null);
        varData_709(this, varData_1900, new Map());
        varData_709(this, varData_1901, new Map());
        if (param_1.status !== "pending") {
          setTimeout(() => varData_711(this, varData_1902, varData_1903).call(this, param_1.status), 3000);
        }
        param_1.objectives.forEach(param_1_1 => varData_711(this, varData_1904, varData_1905).call(this, param_1_1));
        param_1.tasks.forEach(param_1_1 => varData_711(this, varData_1908, varData_1909).call(this, param_1_1));
        varData_1727.onNet("__npx_activities:" + varData_707(this, varData_1893) + ":statusUpdate", varData_711(this, varData_1902, varData_1903).bind(this));
        varData_1727.onNet("__npx_activities:" + varData_707(this, varData_1893) + ":objectiveAdded", varData_711(this, varData_1904, varData_1905).bind(this));
        varData_1727.onNet("__npx_activities:" + varData_707(this, varData_1893) + ":objectiveRemoved", varData_711(this, varData_1906, varData_1907).bind(this));
        varData_1727.onNet("__npx_activities:" + varData_707(this, varData_1893) + ":taskAdded", varData_711(this, varData_1908, varData_1909).bind(this));
        varData_1727.onNet("__npx_activities:" + varData_707(this, varData_1893) + ":taskRemoved", varData_711(this, varData_1910, varData_1911).bind(this));
      }
      get id() {
        return varData_707(this, varData_1893);
      }
      get status() {
        return varData_707(this, varData_1898);
      }
      get objectives() {
        return varData_707(this, varData_1901);
      }
      on(param_1, param_2) {
        const varData_1915 = varData_707(this, varData_1897).get(param_1) ?? [];
        if (!varData_707(this, varData_1897).has(param_1)) {
          varData_707(this, varData_1897).set(param_1, varData_1915);
        }
        varData_1915.push(param_2);
      }
      toJSON() {
        var varData_1916;
        return {
          id: varData_707(this, varData_1893),
          code: varData_707(this, varData_1894),
          name: varData_707(this, varData_1895),
          description: varData_707(this, varData_1896),
          status: varData_707(this, varData_1898),
          deadline: ((varData_1916 = varData_707(this, varData_1899)) == null ? undefined : varData_1916.getTime()) ?? null,
          tasks: [...varData_707(this, varData_1900).values()].map(param_1 => param_1.toJSON()),
          objectives: [...varData_707(this, varData_1901).values()].map(param_1 => param_1.toJSON())
        };
      }
      destroy() {
        varData_707(this, varData_1900).forEach(param_1 => param_1.destroy());
        varData_707(this, varData_1901).forEach(param_1 => param_1.destroy());
        varData_707(this, varData_1900).clear();
        varData_707(this, varData_1901).clear();
        varData_707(this, varData_1897).clear();
      }
    };
    varData_1893 = new WeakMap();
    varData_1894 = new WeakMap();
    varData_1895 = new WeakMap();
    varData_1896 = new WeakMap();
    varData_1897 = new WeakMap();
    varData_1898 = new WeakMap();
    varData_1899 = new WeakMap();
    varData_1900 = new WeakMap();
    varData_1901 = new WeakMap();
    varData_1902 = new WeakSet();
    varData_1903 = function (param_1) {
      const varData_1917 = varData_707(this, varData_1898);
      varData_709(this, varData_1898, param_1);
      if (varData_1917 === "pending" && param_1 === "active") {
        varData_711(this, varData_1912, varData_1913).call(this, "onActivityStarted");
      } else if (param_1 === "completed" || param_1 === "failed") {
        varData_711(this, varData_1912, varData_1913).call(this, "onActivityEnded", param_1, param_1 === "completed");
      }
      varData_711(this, varData_1912, varData_1913).call(this, "onStatusUpdate", param_1);
    };
    varData_1904 = new WeakSet();
    varData_1905 = function (param_1) {
      const varData_1918 = new varData_1888(param_1, this);
      varData_1918.onStatusUpdate(param_1_1 => varData_711(this, varData_1912, varData_1913).call(this, "onObjectiveStatusUpdate", varData_1918, param_1_1));
      varData_1918.onDataUpdate((param_1_1, param_2) => varData_711(this, varData_1912, varData_1913).call(this, "onObjectiveDataUpdate", varData_1918, param_1_1, param_2));
      varData_707(this, varData_1901).set(varData_1918.id, varData_1918);
      varData_711(this, varData_1912, varData_1913).call(this, "onObjectiveAdded", varData_1918);
    };
    varData_1906 = new WeakSet();
    varData_1907 = function (param_1) {
      const varData_1919 = varData_707(this, varData_1901).get(param_1.id);
      if (!varData_1919) {
        return;
      }
      varData_707(this, varData_1901).delete(param_1.id);
      varData_711(this, varData_1912, varData_1913).call(this, "onObjectiveRemoved", varData_1919);
      varData_1919.destroy();
    };
    varData_1908 = new WeakSet();
    varData_1909 = function (param_1) {
      const varData_1920 = new varData_1867(param_1, this);
      varData_1920.onTaskStarted(() => varData_711(this, varData_1912, varData_1913).call(this, "onTaskStarted", varData_1920));
      varData_1920.onTaskEnded(param_1_1 => varData_711(this, varData_1912, varData_1913).call(this, "onTaskEnded", varData_1920, param_1_1));
      varData_707(this, varData_1900).set(varData_1920.id, varData_1920);
      varData_711(this, varData_1912, varData_1913).call(this, "onTaskAdded", varData_1920);
    };
    varData_1910 = new WeakSet();
    varData_1911 = function (param_1) {
      const varData_1921 = varData_707(this, varData_1900).get(param_1.id);
      if (!varData_1921) {
        return;
      }
      varData_707(this, varData_1900).delete(param_1.id);
      varData_711(this, varData_1912, varData_1913).call(this, "onTaskRemoved", varData_1921);
      varData_1921.destroy();
    };
    varData_1912 = new WeakSet();
    varData_1913 = function (param_1, ..._0xcebace) {
      const varData_1922 = varData_707(this, varData_1897).get(param_1);
      if (!varData_1922) {
        return;
      }
      for (const varData_1923 of varData_1922) {
        try {
          varData_1923.call(this, ..._0xcebace);
        } catch (err) {
          console.error(err);
        }
      }
    };
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
    var varData_1945;
    var varData_1946 = class {
      constructor(param_1) {
        varData_708(this, varData_1932);
        varData_708(this, varData_1934);
        varData_708(this, varData_1936);
        varData_708(this, varData_1938);
        varData_708(this, varData_1940);
        varData_708(this, varData_1942);
        varData_708(this, varData_1944);
        varData_708(this, varData_1924, undefined);
        varData_708(this, varData_1925, undefined);
        varData_708(this, varData_1926, undefined);
        varData_708(this, varData_1927, undefined);
        varData_708(this, varData_1928, undefined);
        varData_708(this, varData_1929, undefined);
        varData_708(this, varData_1930, undefined);
        varData_708(this, varData_1931, undefined);
        varData_709(this, varData_1924, param_1.id);
        varData_709(this, varData_1926, new Map());
        varData_709(this, varData_1927, param_1.name);
        varData_709(this, varData_1928, param_1.capacity);
        varData_709(this, varData_1930, null);
        varData_709(this, varData_1931, new Map(Object.entries(param_1.data)));
        varData_709(this, varData_1925, new Map());
        varData_709(this, varData_1929, null);
        for (const varData_1947 of param_1.members) {
          const varData_1948 = new varData_1961(varData_1947, this);
          varData_707(this, varData_1925).set(varData_1948.characterId, varData_1948);
          if (varData_1947.isLeader) {
            varData_709(this, varData_1929, varData_1948);
          }
        }
        if (param_1.activity) {
          setTimeout(() => varData_711(this, varData_1942, varData_1943).call(this, param_1.activity), 3000);
        }
        varData_1727.onNet("__npx_groups:group:" + varData_707(this, varData_1924) + ":data:update", varData_711(this, varData_1934, varData_1935).bind(this));
        varData_1727.onNet("__npx_groups:group:" + varData_707(this, varData_1924) + ":activity:set", varData_711(this, varData_1942, varData_1943).bind(this));
        varData_1727.onNet("__npx_groups:group:" + varData_707(this, varData_1924) + ":group:update", varData_711(this, varData_1932, varData_1933).bind(this));
        varData_1727.onNet("__npx_groups:group:" + varData_707(this, varData_1924) + ":member:joined", varData_711(this, varData_1936, varData_1937).bind(this));
        varData_1727.onNet("__npx_groups:group:" + varData_707(this, varData_1924) + ":member:left", varData_711(this, varData_1938, varData_1939).bind(this));
        varData_1727.onNet("__npx_groups:group:" + varData_707(this, varData_1924) + ":member:update", varData_711(this, varData_1940, varData_1941).bind(this));
      }
      get id() {
        return varData_707(this, varData_1924);
      }
      get name() {
        return varData_707(this, varData_1927);
      }
      get capacity() {
        return varData_707(this, varData_1928);
      }
      get size() {
        return varData_707(this, varData_1925).size;
      }
      get leader() {
        return varData_707(this, varData_1929);
      }
      get members() {
        return [...varData_707(this, varData_1925).values()];
      }
      get activity() {
        return varData_707(this, varData_1930);
      }
      on(param_1, param_2) {
        const varData_1949 = varData_707(this, varData_1926).get(param_1) ?? [];
        if (!varData_707(this, varData_1926).has(param_1)) {
          varData_707(this, varData_1926).set(param_1, varData_1949);
        }
        varData_1949.push(param_2);
      }
      getValue(param_1) {
        return varData_707(this, varData_1931).get(param_1);
      }
      toJSON() {
        var varData_1950;
        return {
          id: varData_707(this, varData_1924),
          name: varData_707(this, varData_1927),
          capacity: varData_707(this, varData_1928),
          activity: ((varData_1950 = varData_707(this, varData_1930)) == null ? undefined : varData_1950.toJSON()) ?? null,
          members: [...varData_707(this, varData_1925).values()].map(param_1 => param_1.toJSON()),
          data: Object.fromEntries(varData_707(this, varData_1931))
        };
      }
      destroy() {
        varData_707(this, varData_1926).clear();
        varData_707(this, varData_1925).clear();
        varData_707(this, varData_1931).clear();
      }
    };
    varData_1924 = new WeakMap();
    varData_1925 = new WeakMap();
    varData_1926 = new WeakMap();
    varData_1927 = new WeakMap();
    varData_1928 = new WeakMap();
    varData_1929 = new WeakMap();
    varData_1930 = new WeakMap();
    varData_1931 = new WeakMap();
    varData_1932 = new WeakSet();
    varData_1933 = function (param_1) {
      varData_709(this, varData_1927, param_1.name);
      varData_709(this, varData_1928, param_1.capacity);
      varData_711(this, varData_1944, varData_1945).call(this, "group:update", this);
    };
    varData_1934 = new WeakSet();
    varData_1935 = function (param_1, param_2) {
      varData_707(this, varData_1931).set(param_1, param_2);
      varData_711(this, varData_1944, varData_1945).call(this, "data:update", param_1, param_2);
    };
    varData_1936 = new WeakSet();
    varData_1937 = function (param_1) {
      const varData_1951 = new varData_1961(param_1, this);
      varData_707(this, varData_1925).set(varData_1951.characterId, varData_1951);
      varData_711(this, varData_1944, varData_1945).call(this, "member:joined", varData_1951);
    };
    varData_1938 = new WeakSet();
    varData_1939 = function (param_1) {
      const varData_1952 = varData_707(this, varData_1925).get(param_1);
      if (!varData_1952) {
        return;
      }
      varData_707(this, varData_1925).delete(param_1);
      if (varData_707(this, varData_1929) === varData_1952) {
        varData_709(this, varData_1929, null);
      }
      varData_711(this, varData_1944, varData_1945).call(this, "member:left", varData_1952);
    };
    varData_1940 = new WeakSet();
    varData_1941 = function (param_1, param_2, param_3) {
      const varData_1953 = varData_707(this, varData_1925).get(param_1);
      if (!varData_1953) {
        return;
      }
      if (varData_1953.serverId !== param_2) {
        varData_1953.updateServerId(param_2);
      }
      if (param_3) {
        varData_709(this, varData_1929, varData_1953);
      }
      varData_711(this, varData_1944, varData_1945).call(this, "member:update", varData_1953);
    };
    varData_1942 = new WeakSet();
    varData_1943 = function (param_1) {
      const varData_1954 = param_1 ? new varData_1914(param_1) : null;
      varData_709(this, varData_1930, varData_1954);
      varData_711(this, varData_1944, varData_1945).call(this, "activity:set", varData_1954);
    };
    varData_1944 = new WeakSet();
    varData_1945 = function (param_1, ..._0x398945) {
      const varData_1955 = varData_707(this, varData_1926).get(param_1);
      if (!varData_1955) {
        return;
      }
      for (const varData_1956 of varData_1955) {
        try {
          varData_1956.call(this, ..._0x398945);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1957;
    var varData_1958;
    var varData_1959;
    var varData_1960;
    var varData_1961 = class {
      constructor(param_1, param_2) {
        varData_708(this, varData_1957, undefined);
        varData_708(this, varData_1958, undefined);
        varData_708(this, varData_1959, undefined);
        varData_708(this, varData_1960, undefined);
        varData_709(this, varData_1957, param_1.characterId);
        varData_709(this, varData_1958, param_1.name);
        varData_709(this, varData_1959, param_2);
        varData_709(this, varData_1960, param_1.serverId);
      }
      get group() {
        return varData_707(this, varData_1959);
      }
      get characterId() {
        return varData_707(this, varData_1957);
      }
      get name() {
        return varData_707(this, varData_1958);
      }
      get serverId() {
        return varData_707(this, varData_1960);
      }
      get isOnline() {
        return varData_707(this, varData_1960) !== null;
      }
      get isLeader() {
        return varData_707(this, varData_1959).leader === this;
      }
      updateServerId(param_1) {
        varData_709(this, varData_1960, param_1);
      }
      toJSON() {
        return {
          characterId: varData_707(this, varData_1957),
          serverId: varData_707(this, varData_1960),
          name: varData_707(this, varData_1958),
          isLeader: this.isLeader,
          isOnline: this.isOnline
        };
      }
    };
    varData_1957 = new WeakMap();
    varData_1958 = new WeakMap();
    varData_1959 = new WeakMap();
    varData_1960 = new WeakMap();
    var varData_1962;
    var varData_1963;
    var varData_1964;
    var varData_1965;
    var varData_1966;
    var varData_1967;
    var varData_1968;
    var varData_1969;
    var varData_1970;
    var varData_1971 = class {
      constructor(param_1) {
        varData_708(this, varData_1965);
        varData_708(this, varData_1967);
        varData_708(this, varData_1969);
        varData_708(this, varData_1962, undefined);
        varData_708(this, varData_1963, undefined);
        varData_708(this, varData_1964, undefined);
        varData_709(this, varData_1962, param_1 ?? GetCurrentResourceName());
        varData_709(this, varData_1963, new Map());
        varData_709(this, varData_1964, new Map());
        varData_1727.onNet("__npx_groups:manager:" + varData_707(this, varData_1962) + ":addedToGroup", varData_711(this, varData_1965, varData_1966).bind(this));
        varData_1727.onNet("__npx_groups:manager:" + varData_707(this, varData_1962) + ":removedFromGroup", varData_711(this, varData_1967, varData_1968).bind(this));
        on("np-base:clearStates", this.reset.bind(this));
        on("np-spawn:characterSpawned", this.init.bind(this));
        const varData_1972 = varData_1677.Sync.isPed.isPed("cid");
        if (varData_1972) {
          this.init();
        }
      }
      get list() {
        return varData_707(this, varData_1963);
      }
      async init() {
        if (varData_707(this, varData_1963).size > 0) {
          this.reset();
        }
        const varData_1973 = await varData_1767.execute("__npx_groups:manager:" + varData_707(this, varData_1962) + ":init");
        if (!varData_1973) {
          return;
        }
        for (const varData_1974 of varData_1973) {
          varData_711(this, varData_1965, varData_1966).call(this, varData_1974);
        }
        varData_1735.debug("[Group Manager] Initialized! | Groups: " + varData_707(this, varData_1963).size);
      }
      reset() {
        varData_707(this, varData_1963).forEach(param_1 => param_1.destroy());
        varData_707(this, varData_1963).clear();
      }
      on(param_1, param_2) {
        const varData_1975 = varData_707(this, varData_1964).get(param_1) ?? [];
        if (!varData_707(this, varData_1964).has(param_1)) {
          varData_707(this, varData_1964).set(param_1, varData_1975);
        }
        varData_1975.push(param_2);
      }
    };
    varData_1962 = new WeakMap();
    varData_1963 = new WeakMap();
    varData_1964 = new WeakMap();
    varData_1965 = new WeakSet();
    varData_1966 = function (param_1) {
      const varData_1976 = new varData_1946(param_1);
      varData_1976.on("activity:set", param_1_1 => param_1_1 && varData_711(this, varData_1969, varData_1970).call(this, "activityAssigned", varData_1976, param_1_1));
      varData_707(this, varData_1963).set(varData_1976.id, varData_1976);
      varData_711(this, varData_1969, varData_1970).call(this, "addedToGroup", varData_1976);
    };
    varData_1967 = new WeakSet();
    varData_1968 = function (param_1) {
      const varData_1977 = varData_707(this, varData_1963).get(param_1);
      if (!varData_1977) {
        return;
      }
      varData_707(this, varData_1963).delete(param_1);
      varData_1977.destroy();
      varData_711(this, varData_1969, varData_1970).call(this, "removedFromGroup", varData_1977.id);
    };
    varData_1969 = new WeakSet();
    varData_1970 = function (param_1, ..._0x345082) {
      const varData_1978 = varData_707(this, varData_1964).get(param_1) ?? [];
      for (const varData_1979 of varData_1978) {
        try {
          varData_1979.call(this, ..._0x345082);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1980 = {};
    var varData_1981 = {
      GetEntityStateValue: () => handleAction_101,
      GetPlayerStateValue: () => handleAction_104,
      RegisterStatebagChangeHandler: () => handleAction_106,
      SetEntityStateValue: () => handleAction_102,
      SetPlayerStateValue: () => handleAction_105
    };
    varData_701(varData_1980, varData_1981);
    var varData_1982 = new varData_1505(5000);
    function handleAction_100(param_1) {
      let varData_1983 = varData_1982.get("ent-" + param_1);
      if (varData_1983) {
        return varData_1983;
      }
      varData_1983 = Entity(param_1);
      varData_1982.set("ent-" + param_1, varData_1983);
      return varData_1983;
    }
    function handleAction_101(param_1, param_2) {
      const varData_1984 = handleAction_100(param_1);
      return varData_1984.state[param_2];
    }
    function handleAction_102(param_1, param_2, param_3, _0x58204a = false) {
      const varData_1985 = handleAction_100(param_1);
      varData_1985.state.set(param_2, param_3, _0x58204a);
    }
    function handleAction_103(param_1) {
      let varData_1986 = varData_1982.get("ply-" + param_1);
      if (varData_1986) {
        return varData_1986;
      }
      varData_1986 = Player(param_1);
      varData_1982.set("ply-" + param_1, varData_1986);
      return varData_1986;
    }
    function handleAction_104(param_1, param_2) {
      const varData_1987 = handleAction_103(param_1);
      return varData_1987.state[param_2];
    }
    function handleAction_105(param_1, param_2, param_3, _0x567dd1 = false) {
      const varData_1988 = handleAction_103(param_1);
      varData_1988.state.set(param_2, param_3, _0x567dd1);
    }
    function handleAction_106(param_1, param_2, param_3, param_4) {
      return AddStateBagChangeHandler(param_1, null, async function (param_1_1, param_2_1, param_3_1, param_4_1, param_5) {
        if (param_3 && !param_5) {
          return;
        }
        const varData_1989 = param_1_1.startsWith("player");
        const varData_1990 = parseInt(param_1_1.substring(7));
        const varData_1991 = varData_1989 ? GetPlayerFromStateBagName(param_1_1) : GetEntityFromStateBagName(param_1_1);
        if (!varData_1991) {
          return;
        }
        const varData_1992 = varData_1989 ? NetworkGetPlayerIndexFromPed(varData_1991) === PlayerId() : NetworkGetEntityOwner(varData_1991) === PlayerId();
        if (param_2 && !varData_1992) {
          return;
        }
        param_4(varData_1990, varData_1991, param_3_1);
      });
    }
    var varData_1993 = {};
    var varData_1994 = {
      GetFuelLevel: () => handleAction_114,
      GetIdentifier: () => handleAction_111,
      GetMetadata: () => handleAction_110,
      HasKey: () => handleAction_109,
      IsVinScratched: () => handleAction_112,
      SwapSeat: () => handleAction_113,
      TurnOffEngine: () => handleAction_108,
      TurnOnEngine: () => handleAction_107
    };
    varData_701(varData_1993, varData_1994);
    function handleAction_107(param_1) {
      varData_1677.Sync["np-vehicles"].TurnOnEngine(param_1);
    }
    function handleAction_108(param_1) {
      varData_1677.Sync["np-vehicles"].TurnOffEngine(param_1);
    }
    function handleAction_109(param_1) {
      return varData_1677.Sync["np-vehicles"].HasVehicleKey(param_1);
    }
    function handleAction_110(param_1, param_2) {
      const varData_1995 = handleAction_101(param_1, "data");
      if (param_2) {
        if (varData_1995 == null) {
          return undefined;
        } else {
          return varData_1995[param_2];
        }
      } else {
        return varData_1995;
      }
    }
    function handleAction_111(param_1) {
      return handleAction_101(param_1, "vin");
    }
    function handleAction_112(param_1) {
      return handleAction_101(param_1, "vinScratched");
    }
    function handleAction_113(param_1, param_2) {
      varData_1677.Sync["np-vehicles"].SwapVehicleSeat(param_1, param_2);
    }
    function handleAction_114(param_1) {
      return handleAction_110(param_1, "fuel") ?? 0;
    }
    var varData_1996 = {};
    var varData_1997 = {
      GetUIFocus: () => handleAction_119,
      RegisterUICallback: () => handleAction_115,
      SendUIAppMessage: () => handleAction_117,
      SendUIMessage: () => handleAction_116,
      SetUIFocus: () => handleAction_118
    };
    varData_701(varData_1996, varData_1997);
    var varData_1998 = [];
    function handleAction_115(param_1, param_2) {
      AddEventHandler("_npx_uiReq:" + param_1, param_2);
      exports["np-ui"].RegisterUIEvent(param_1);
      varData_1998.push(param_1);
    }
    function handleAction_116(param_1) {
      exports["np-ui"].SendUIMessage(param_1);
    }
    function handleAction_117(param_1, param_2) {
      var varData_1999 = {
        source: "np-nui",
        app: param_1,
        data: param_2
      };
      exports["np-ui"].SendUIMessage(varData_1999);
    }
    function handleAction_118(param_1, param_2) {
      exports["np-ui"].SetUIFocus(param_1, param_2);
    }
    function handleAction_119() {
      return exports["np-ui"].GetUIFocus();
    }
    AddEventHandler("_npx_uiReady", () => {
      varData_1998.forEach(param_1 => exports["np-ui"].RegisterUIEvent(param_1));
    });
    var varData_2000 = {};
    var varData_2001 = {
      Manager: () => varData_2030
    };
    varData_701(varData_2000, varData_2001);
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
    var varData_2029;
    var varData_2030 = class {
      constructor(param_1, param_2) {
        varData_708(this, varData_2006);
        varData_708(this, varData_2008);
        varData_708(this, varData_2010);
        varData_708(this, varData_2012);
        varData_708(this, varData_2014);
        varData_708(this, varData_2016);
        varData_708(this, varData_2018);
        varData_708(this, varData_2020);
        varData_708(this, varData_2022);
        varData_708(this, varData_2024);
        varData_708(this, varData_2026);
        varData_708(this, varData_2028);
        varData_708(this, varData_2002, undefined);
        varData_708(this, varData_2003, undefined);
        varData_708(this, varData_2004, null);
        varData_708(this, varData_2005, undefined);
        varData_709(this, varData_2002, param_1);
        varData_709(this, varData_2003, param_2);
        varData_709(this, varData_2005, null);
        varData_707(this, varData_2003).on("addedToGroup", varData_711(this, varData_2014, varData_2015).bind(this));
        varData_707(this, varData_2003).on("removedFromGroup", varData_711(this, varData_2016, varData_2017).bind(this));
        varData_1727.on("jobs:app:ready", () => {
          if (!varData_707(this, varData_2005)) {
            return;
          }
          varData_711(this, varData_2018, varData_2019).call(this, varData_707(this, varData_2005));
        });
        varData_1727.on("jobs:jobChanged", param_1_1 => {
          varData_709(this, varData_2004, param_1_1);
          if (!varData_707(this, varData_2005)) {
            return;
          }
          const varData_2031 = (param_1_1 == null ? undefined : param_1_1.id) === varData_707(this, varData_2002);
          if (!varData_2031) {
            return varData_711(this, varData_2016, varData_2017).call(this, varData_707(this, varData_2005).id);
          }
          varData_711(this, varData_2018, varData_2019).call(this, varData_707(this, varData_2005));
        });
        varData_1727.onNet("__npx_jobs:" + varData_707(this, varData_2002) + ":groups:invite:request", varData_711(this, varData_2008, varData_2009).bind(this));
        varData_1727.onNet("__npx_jobs:" + varData_707(this, varData_2002) + ":groups:invite:received", varData_711(this, varData_2006, varData_2007).bind(this));
        varData_1727.onNet("__npx_jobs:" + varData_707(this, varData_2002) + ":groups:invite:response", varData_711(this, varData_2010, varData_2011).bind(this));
        varData_1727.onNet("__npx_jobs:" + varData_707(this, varData_2002) + ":groups:invite:aborted", varData_711(this, varData_2012, varData_2013).bind(this));
      }
      get group() {
        return varData_707(this, varData_2005);
      }
      async sendGroupInvite(param_1) {
        if (!varData_707(this, varData_2004) || varData_707(this, varData_2004).id !== varData_707(this, varData_2002)) {
          return;
        }
        const [_0x158d36, _0x3a8a13] = await varData_1767.execute("jobs:app:" + varData_707(this, varData_2002) + ":groups:invite:send", param_1);
        if (!_0x158d36) {
          return varData_2118.phoneNotification("Group Invite", _0x3a8a13, true);
        }
        varData_2118.phoneNotification("Group Invite", "Invite sent!", true);
        varData_1735.debug("[Job APP] Invite sent! " + _0x3a8a13);
      }
      async sendGroupJoinRequest(param_1) {
        if (!varData_707(this, varData_2004) || varData_707(this, varData_2004).id !== varData_707(this, varData_2002)) {
          return;
        }
        const [_0x3981b9, _0x2a3329] = await varData_1767.execute("jobs:app:" + varData_707(this, varData_2002) + ":groups:invite:request", param_1);
        if (!_0x3981b9) {
          return varData_2118.phoneNotification("Group Invite", _0x2a3329, true);
        }
        varData_2118.phoneNotification("Group Invite", "Join request sent!", true);
        varData_1735.debug("[Job APP] Join request sent! " + _0x2a3329);
      }
    };
    varData_2002 = new WeakMap();
    varData_2003 = new WeakMap();
    varData_2004 = new WeakMap();
    varData_2005 = new WeakMap();
    varData_2006 = new WeakSet();
    varData_2007 = async function (param_1, param_2) {
      varData_1735.debug("[Job APP] Invite received! " + param_1 + " " + param_2);
      const varData_2032 = "Received an invite to join the group \"" + param_2 + "\"";
      const varData_2033 = await varData_2118.phoneConfirmation("Group Invite", varData_2032, "users", 30000);
      const [_0x5c5f5b, _0x5b6fe8] = await varData_1767.execute("jobs:app:" + varData_707(this, varData_2002) + ":groups:invite:response", param_1, varData_2033);
      if (!_0x5c5f5b) {
        return varData_2118.phoneNotification("Group Invite", _0x5b6fe8, true);
      }
    };
    varData_2008 = new WeakSet();
    varData_2009 = async function (param_1, param_2) {
      varData_1735.debug("[Job APP] Join request received! " + param_1 + " " + param_2);
      const varData_2034 = "Received a group join request from " + param_2;
      const varData_2035 = await varData_2118.phoneConfirmation("Group Invite", varData_2034, "users", 30000);
      const [_0x29ee09, _0x4e24eb] = await varData_1767.execute("jobs:app:" + varData_707(this, varData_2002) + ":groups:invite:response", param_1, varData_2035);
      if (!_0x29ee09) {
        return varData_2118.phoneNotification("Group Invite", _0x4e24eb, true);
      }
    };
    varData_2010 = new WeakSet();
    varData_2011 = function (param_1, param_2) {
      varData_1735.debug("[Job APP] Invite response received! " + param_1 + " " + param_2);
    };
    varData_2012 = new WeakSet();
    varData_2013 = function (param_1, param_2) {
      varData_1735.debug("[Job APP] Invite aborted! " + param_1 + " " + param_2);
    };
    varData_2014 = new WeakSet();
    varData_2015 = function (param_1) {
      varData_709(this, varData_2005, param_1);
      varData_707(this, varData_2005).on("group:update", varData_711(this, varData_2018, varData_2019).bind(this));
      varData_707(this, varData_2005).on("activity:set", varData_711(this, varData_2026, varData_2027).bind(this, param_1));
      varData_707(this, varData_2005).on("data:update", varData_711(this, varData_2028, varData_2029).bind(this, param_1));
      varData_707(this, varData_2005).on("member:joined", varData_711(this, varData_2020, varData_2021).bind(this, param_1));
      varData_707(this, varData_2005).on("member:left", varData_711(this, varData_2022, varData_2023).bind(this, param_1));
      varData_707(this, varData_2005).on("member:update", varData_711(this, varData_2024, varData_2025).bind(this, param_1));
      varData_1996.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_707(this, varData_2002),
        group: param_1.toJSON()
      });
      varData_1735.debug("[Job APP] Added to group!");
    };
    varData_2016 = new WeakSet();
    varData_2017 = function (param_1) {
      varData_709(this, varData_2005, null);
      varData_1996.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_707(this, varData_2002),
        group: null
      });
      varData_1735.debug("[Job APP] Removed from group!");
    };
    varData_2018 = new WeakSet();
    varData_2019 = function (param_1) {
      if (varData_707(this, varData_2005) !== param_1) {
        return varData_1735.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1996.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_707(this, varData_2002),
        group: param_1.toJSON()
      });
      varData_1735.debug("[Job APP] Updated group!");
    };
    varData_2020 = new WeakSet();
    varData_2021 = function (param_1, param_2) {
      if (varData_707(this, varData_2005) !== param_1) {
        return varData_1735.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1996.SendUIAppMessage("phone", {
        action: "jobs:group:addMember",
        jobId: varData_707(this, varData_2002),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1735.debug("[Job APP] Added member to group!");
    };
    varData_2022 = new WeakSet();
    varData_2023 = function (param_1, param_2) {
      if (varData_707(this, varData_2005) !== param_1) {
        return varData_1735.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1996.SendUIAppMessage("phone", {
        action: "jobs:group:removeMember",
        jobId: varData_707(this, varData_2002),
        groupId: param_1.id,
        memberId: param_2.characterId
      });
      varData_1735.debug("[Job APP] Removed member from group!");
    };
    varData_2024 = new WeakSet();
    varData_2025 = function (param_1, param_2) {
      if (varData_707(this, varData_2005) !== param_1) {
        return varData_1735.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1996.SendUIAppMessage("phone", {
        action: "jobs:group:updateMember",
        jobId: varData_707(this, varData_2002),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1735.debug("[Job APP] Updated member in group!");
    };
    varData_2026 = new WeakSet();
    varData_2027 = function (param_1, param_2) {
      if (varData_707(this, varData_2005) !== param_1) {
        return varData_1735.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      const varData_2036 = (param_2 == null ? undefined : param_2.toJSON()) ?? null;
      varData_1996.SendUIAppMessage("phone", {
        action: "jobs:group:updateActivity",
        jobId: varData_707(this, varData_2002),
        groupId: param_1.id,
        activity: varData_2036
      });
      varData_1735.debug("[Job APP] Updated activity for group!");
    };
    varData_2028 = new WeakSet();
    varData_2029 = function (param_1, param_2, param_3) {
      if (varData_707(this, varData_2005) !== param_1) {
        return varData_1735.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      } else if (param_2 !== "status") {
        return;
      }
      varData_1996.SendUIAppMessage("phone", {
        action: "jobs:group:updateStatus",
        jobId: varData_707(this, varData_2002),
        groupId: param_1.id,
        status: param_3
      });
      varData_1735.debug("[Job APP] Updated status for group!");
    };
    var varData_2037 = async param_1 => {
      const varData_2038 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasModelLoaded(varData_2038)) {
        return true;
      }
      RequestModel(varData_2038);
      const varData_2039 = await varData_1664.waitForCondition(() => HasModelLoaded(varData_2038), 3000);
      return !varData_2039;
    };
    var varData_2040 = async param_1 => {
      if (HasAnimDictLoaded(param_1)) {
        return true;
      }
      RequestAnimDict(param_1);
      const varData_2041 = await varData_1664.waitForCondition(() => HasAnimDictLoaded(param_1), 3000);
      return !varData_2041;
    };
    var varData_2042 = async param_1 => {
      if (HasClipSetLoaded(param_1)) {
        return true;
      }
      RequestClipSet(param_1);
      const varData_2043 = await varData_1664.waitForCondition(() => HasClipSetLoaded(param_1), 3000);
      return !varData_2043;
    };
    var varData_2044 = async param_1 => {
      if (HasStreamedTextureDictLoaded(param_1)) {
        return true;
      }
      RequestStreamedTextureDict(param_1, true);
      const varData_2045 = await varData_1664.waitForCondition(() => HasStreamedTextureDictLoaded(param_1), 3000);
      return !varData_2045;
    };
    var varData_2046 = async (param_1, param_2, param_3) => {
      const varData_2047 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasWeaponAssetLoaded(varData_2047)) {
        return true;
      }
      RequestWeaponAsset(varData_2047, param_2, param_3);
      const varData_2048 = await varData_1664.waitForCondition(() => HasWeaponAssetLoaded(varData_2047), 3000);
      return !varData_2048;
    };
    var varData_2049 = async param_1 => {
      if (HasNamedPtfxAssetLoaded(param_1)) {
        return true;
      }
      RequestNamedPtfxAsset(param_1);
      const varData_2050 = await varData_1664.waitForCondition(() => HasNamedPtfxAssetLoaded(param_1), 3000);
      return !varData_2050;
    };
    var varData_2051 = {
      loadModel: varData_2037,
      loadTexture: varData_2044,
      loadAnim: varData_2040,
      loadClipSet: varData_2042,
      loadWeaponAsset: varData_2046,
      loadNamedPtfxAsset: varData_2049
    };
    var varData_2052 = varData_2051;
    var varData_2053 = (param_1, ..._0x23eb11) => {
      switch (param_1) {
        case "coord":
          {
            const [_0x31705c, _0x23f1cf, _0x40f17c] = _0x23eb11;
            return AddBlipForCoord(_0x31705c, _0x23f1cf, _0x40f17c);
          }
        case "area":
          {
            const [_0x1f4e32, _0x4937be, _0x11f28f, _0x463122, _0x4b5fdf] = _0x23eb11;
            return AddBlipForArea(_0x1f4e32, _0x4937be, _0x11f28f, _0x463122, _0x4b5fdf);
          }
        case "radius":
          {
            const [_0x657fae, _0x12410b, _0x466986, _0x3f6c76] = _0x23eb11;
            return AddBlipForRadius(_0x657fae, _0x12410b, _0x466986, _0x3f6c76);
          }
        case "pickup":
          {
            const [_0x1e914f] = _0x23eb11;
            return AddBlipForPickup(_0x1e914f);
          }
        case "entity":
          {
            const [_0x1f531d] = _0x23eb11;
            return AddBlipForEntity(_0x1f531d);
          }
        default:
          {
            console.error(new Error("Invalid Blip Type"));
            return 0;
          }
      }
    };
    var varData_2054 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
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
    var varData_2055 = {
      createBlip: varData_2053,
      applyBlipSettings: varData_2054
    };
    var varData_2056 = varData_2055;
    var dataSet_1 = new Set();
    var dataMap_1 = new Map();
    var dataSet_2 = new Set();
    on("np-polyzone:enter", (param_1, param_2) => {
      dataSet_1.add(param_1);
      if (param_2 == null ? undefined : param_2.id) {
        dataSet_1.add(param_1 + "-" + param_2.id);
      }
      if (dataSet_2.has(param_1)) {
        varData_1727.emitNet("__sdk:zones:" + param_1 + ":enter", param_2);
      }
      const varData_2057 = dataMap_1.get(param_1 + "-enter");
      if (varData_2057 === undefined) {
        return;
      }
      for (const varData_2058 of varData_2057) {
        try {
          varData_2058(param_2);
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
        varData_1727.emitNet("__sdk:zones:" + param_1 + ":exit", param_2);
      }
      const varData_2059 = dataMap_1.get(param_1 + "-exit");
      if (varData_2059 === undefined) {
        return;
      }
      for (const varData_2060 of varData_2059) {
        try {
          varData_2060(param_2);
        } catch (err) {
          console.log(err);
        }
      }
    });
    var varData_2061 = (param_1, param_2) => {
      return dataSet_1.has(param_2 ? param_1 + "-" + param_2 : param_1);
    };
    var varData_2062 = (param_1, param_2) => {
      const varData_2063 = param_1 + "-enter";
      const varData_2064 = dataMap_1.get(varData_2063) ?? [];
      if (!dataMap_1.has(varData_2063)) {
        dataMap_1.set(varData_2063, varData_2064);
      }
      varData_2064.push(param_2);
    };
    var varData_2065 = (param_1, param_2) => {
      const varData_2066 = param_1 + "-exit";
      const varData_2067 = dataMap_1.get(varData_2066) ?? [];
      if (!dataMap_1.has(varData_2066)) {
        dataMap_1.set(varData_2066, varData_2067);
      }
      varData_2067.push(param_2);
    };
    var varData_2068 = (param_1, param_2, param_3, param_4, _0x2d77c6 = {}) => {
      var varData_2069 = {
        ...param_4
      };
      varData_2069.data = _0x2d77c6;
      varData_2069.id = param_1;
      const varData_2070 = varData_2069;
      varData_2070.data.id = param_1;
      exports["np-polyzone"].AddPolyZone(param_2, param_3, varData_2070);
    };
    var varData_2071 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x3a2a6d = {}) => {
      var varData_2072 = {
        ...param_6
      };
      varData_2072.data = _0x3a2a6d;
      varData_2072.id = param_1;
      const varData_2073 = varData_2072;
      varData_2073.data.id = param_1;
      exports["np-polyzone"].AddBoxZone(param_2, param_3, param_4, param_5, varData_2073);
    };
    var varData_2074 = (param_1, param_2, param_3, param_4, param_5, _0x513872 = {}) => {
      var varData_2075 = {
        ...param_5
      };
      varData_2075.data = _0x513872;
      varData_2075.id = param_1;
      const varData_2076 = varData_2075;
      varData_2076.data.id = param_1;
      exports["np-polyzone"].AddCircleZone(param_2, param_3, param_4, varData_2076);
    };
    var varData_2077 = (param_1, param_2, param_3, param_4, _0x236478 = {}) => {
      var varData_2078 = {
        ...param_4
      };
      varData_2078.data = _0x236478;
      const varData_2079 = varData_2078;
      varData_2079.data.id = param_1;
      exports["np-polyzone"].AddEntityZone(param_2, param_3, varData_2079);
    };
    var varData_2080 = (param_1, param_2) => {
      exports["np-polyzone"].RemoveZone(param_1, param_2);
      dataSet_1.delete(param_1 + "-" + param_2);
      dataSet_2.delete(param_1);
    };
    var varData_2081 = param_1 => {
      dataSet_2.add(param_1);
    };
    var varData_2082 = {
      isActive: varData_2061,
      onEnter: varData_2062,
      onExit: varData_2065,
      addPolyZone: varData_2068,
      addBoxZone: varData_2071,
      addCircleZone: varData_2074,
      addEntityZone: varData_2077,
      removeZone: varData_2080,
      setAsNetworked: varData_2081
    };
    var varData_2083 = varData_2082;
    var varData_2084 = (param_1, param_2, param_3, param_4) => {
      var varData_2085 = {
        id: param_1,
        coords: [param_2.x, param_2.y, param_2.z],
        options: param_3,
        context: param_4
      };
      const varData_2086 = varData_2085;
      globalThis.exports.interactions.AddInteraction(varData_2086);
    };
    var varData_2087 = (param_1, param_2, param_3, param_4) => {
      var varData_2088 = {
        id: param_1,
        options: param_3,
        context: param_4
      };
      const varData_2089 = varData_2088;
      globalThis.exports.interactions.AddInteractionByModel(param_2, varData_2089);
    };
    var varData_2090 = (param_1, param_2, param_3) => {
      var varData_2091 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2092 = varData_2091;
      varData_2092.context.isPlayer = true;
      globalThis.exports.interactions.AddPedInteraction(varData_2092);
    };
    var varData_2093 = (param_1, param_2, param_3) => {
      var varData_2094 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2095 = varData_2094;
      globalThis.exports.interactions.AddPedInteraction(varData_2095);
    };
    var varData_2096 = param_1 => {
      return globalThis.exports.interactions.DoesInteractionExists(param_1);
    };
    var varData_2097 = (param_1, param_2, param_3) => {
      var varData_2098 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_2099 = varData_2098;
      globalThis.exports.interactions.AddVehicleInteraction(varData_2099);
    };
    var varData_2100 = param_1 => {
      globalThis.exports.interactions.RemoveInteraction(param_1);
    };
    var varData_2101 = param_1 => {
      globalThis.exports.interactions.RemoveVehicleInteraction(param_1);
    };
    var varData_2102 = param_1 => {
      globalThis.exports.interactions.RemovePedInteraction(param_1);
    };
    var varData_2103 = (param_1, param_2, _0x32a8f8 = false, _0x1e5813 = null, _0x3a263a = true, _0x8cf81b = null) => {
      return new Promise(param_1_1 => {
        globalThis.exports["np-taskbar"].taskBar(param_1, param_2, _0x32a8f8, _0x3a263a, _0x8cf81b, false, param_1_1, _0x1e5813 == null ? undefined : _0x1e5813.distance, _0x1e5813 == null ? undefined : _0x1e5813.entity);
      });
    };
    var varData_2104 = (param_1, param_2, param_3, param_4) => {
      return new Promise(param_1_1 => {
        globalThis.exports["np-phone"].DoPhoneConfirmation(param_1, param_2, param_3, param_1_1, param_4);
      });
    };
    var varData_2105 = (param_1, param_2, _0x3a1efe = true, _0x3fba90 = "home-screen") => {
      var varData_2106 = {
        action: "notification",
        target_app: _0x3fba90,
        title: param_1,
        body: param_2,
        show_even_if_app_active: _0x3a1efe
      };
      var varData_2107 = {
        source: "np-nui",
        app: "phone",
        data: varData_2106
      };
      globalThis.exports["np-ui"].SendUIMessage(varData_2107);
    };
    var varData_2108 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x2917c1 = 0, _0x161a5c = true) => {
      SetTextColour(param_4[0], param_4[1], param_4[2], param_4[3]);
      if (_0x161a5c) {
        SetTextOutline();
      }
      SetTextScale(0, param_5);
      SetTextFont(param_6 ?? 0);
      SetTextJustification(_0x2917c1);
      if (_0x2917c1 === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(param_3 ?? "Dummy text");
      EndTextCommandDisplayText(param_1, param_2);
    };
    var varData_2109 = (param_1, param_2, param_3, param_4, _0x1641be = 4, _0x190969 = true, param_7) => {
      SetDrawOrigin(param_1.x, param_1.y, param_1.z, 0);
      const varData_2110 = Math.max(varData_1645.getMapRange([0, 10], [0.4, 0.25], param_2), 0.1);
      varData_2108(0, 0, param_3, param_4, varData_2110, _0x1641be, 0, _0x190969);
      if (param_7) {
        DrawRect(0.002, param_7.height / 2, param_7.width, param_7.height, param_7.color[0], param_7.color[1], param_7.color[2], param_7.color[3]);
      }
      ClearDrawOrigin();
    };
    var varData_2111 = (param_1, param_2, param_3, param_4) => {
      globalThis.exports.contacts.open(param_1, param_2, param_3, param_4, true);
    };
    var varData_2112 = param_1 => {
      globalThis.exports.hud.AddOrUpdateHudBar(param_1);
    };
    var varData_2113 = param_1 => {
      globalThis.exports.hud.RemoveHudBar(param_1);
    };
    async function handleAction_120(param_1) {
      const varData_2114 = param_1_1 => {
        for (const varData_2115 of param_1) {
          if (varData_2115._type === "number" && isNaN(param_1_1[varData_2115.name])) {
            return false;
          }
          if (varData_2115._type === "text" && typeof param_1_1[varData_2115.name] !== "string") {
            return false;
          }
        }
        return true;
      };
      return await varData_1677.Sync["np-ui"].OpenInputMenu(param_1, varData_2114);
    }
    async function handleAction_121(param_1, param_2) {
      const varData_2116 = {
        info: 1,
        error: 2
      };
      emit("DoLongHudText", param_1, varData_2116[param_2]);
    }
    var varData_2117 = {
      addInteraction: varData_2084,
      addInteractionByModel: varData_2087,
      addPlayerInteraction: varData_2090,
      addPedInteraction: varData_2093,
      addVehicleInteraction: varData_2097,
      removeInteraction: varData_2100,
      removePlayerInteraction: varData_2102,
      removePedInteraction: varData_2102,
      removeVehicleInteraction: varData_2101,
      doesInteractionExists: varData_2096,
      taskBar: varData_2103,
      phoneConfirmation: varData_2104,
      phoneNotification: varData_2105,
      drawText: varData_2108,
      drawText3D: varData_2109,
      customContact: varData_2111,
      AddOrUpdateHudBar: varData_2112,
      RemoveHudBar: varData_2113,
      openInputMenu: handleAction_120,
      displayNotification: handleAction_121
    };
    var varData_2118 = varData_2117;
    var varData_2119 = async param_1 => {
      return globalThis.exports["np-heists"].BankMinigame(param_1);
    };
    var varData_2120 = async param_1 => {
      return globalThis.exports["np-heists"].DDRMinigame(param_1);
    };
    var varData_2121 = async param_1 => {
      return globalThis.exports.skillchecks.DirectionMinigame(param_1);
    };
    var varData_2122 = async () => {
      return globalThis.exports.skillchecks.DrillingMinigame();
    };
    var varData_2123 = async param_1 => {
      return globalThis.exports.skillchecks.FlipMinigame(param_1);
    };
    var varData_2124 = async param_1 => {
      return globalThis.exports.skillchecks.FloodMinigame(param_1);
    };
    var varData_2125 = async param_1 => {
      return globalThis.exports.skillchecks.TaskBarMinigame(param_1.difficulty, param_1.gap, param_1.iterations, param_1.useReverse);
    };
    var varData_2126 = async param_1 => {
      return globalThis.exports.skillchecks.MazeMinigame(param_1);
    };
    var varData_2127 = async param_1 => {
      return globalThis.exports.skillchecks.CrackSafe(param_1.locks);
    };
    var varData_2128 = async param_1 => {
      return globalThis.exports.skillchecks.SameMinigame(param_1);
    };
    var varData_2129 = async param_1 => {
      return globalThis.exports["np-heists"].ThermiteMinigame(param_1);
    };
    var varData_2130 = async param_1 => {
      return globalThis.exports.skillchecks.UntangleMinigame(param_1);
    };
    var varData_2131 = async param_1 => {
      return globalThis.exports["np-heists"].VarMinigame(param_1);
    };
    var varData_2132 = async param_1 => {
      return globalThis.exports.skillchecks.WordsMinigame(param_1);
    };
    var varData_2133 = async param_1 => {
      return globalThis.exports.skillchecks.AlphabetMinigame(param_1);
    };
    var varData_2134 = async param_1 => {
      return globalThis.exports.skillchecks.LockpickMinigame(param_1);
    };
    var varData_2135 = async param_1 => {
      return globalThis.exports.skillchecks.PinCrackMinigame(param_1);
    };
    var varData_2136 = async param_1 => {
      return globalThis.exports.skillchecks.TerminalMinigame(param_1);
    };
    var varData_2137 = async param_1 => {
      return globalThis.exports.skillchecks.SequenceMinigame(param_1);
    };
    var varData_2138 = async param_1 => {
      return globalThis.exports.skillchecks.SudokuMinigame(param_1);
    };
    var varData_2139 = async param_1 => {
      return globalThis.exports.skillchecks.MemoryMinigame(param_1);
    };
    var varData_2140 = {
      BankMinigame: varData_2119,
      DDRMinigame: varData_2120,
      DirectionMinigame: varData_2121,
      DrillingMinigame: varData_2122,
      FlipMinigame: varData_2123,
      FloodMinigame: varData_2124,
      TaskBarMinigame: varData_2125,
      MazeMinigame: varData_2126,
      CrackSafe: varData_2127,
      SameMinigame: varData_2128,
      ThermiteMinigame: varData_2129,
      UntangleMinigame: varData_2130,
      VarMinigame: varData_2131,
      WordsMinigame: varData_2132,
      AlphabetMinigame: varData_2133,
      LockpickMinigame: varData_2134,
      PinCrackMinigame: varData_2135,
      TerminalMinigame: varData_2136,
      SequenceMinigame: varData_2137,
      SudokuMinigame: varData_2138,
      MemoryMinigame: varData_2139
    };
    var varData_2141 = varData_2140;
    var varData_2142 = {
      async hasPermission(param_1, _0x226f7f = {}) {
        return await exports.permissions.hasPermission(param_1, _0x226f7f);
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
    var varData_2143 = {
      RegisterAction: (param_1, param_2, param_3) => {
        return varData_1677.Sync.contacts.RegisterAction(param_1, param_2, param_3);
      }
    };
    var varData_2144 = {
      RegisterEditorHandlerClient: async param_1 => {
        return await globalThis.exports.editor.RegisterEditorHandlerClient(param_1);
      }
    };
    var varData_2145;
    var varData_2146;
    var varData_2147;
    var varData_2148;
    var varData_2149;
    var varData_2150;
    var varData_2151;
    var varData_2152;
    var varData_2153;
    var varData_2154;
    var varData_2155 = class {
      constructor(param_1) {
        varData_708(this, varData_2153);
        varData_708(this, varData_2145, undefined);
        varData_708(this, varData_2146, undefined);
        varData_708(this, varData_2147, undefined);
        varData_708(this, varData_2148, undefined);
        varData_708(this, varData_2149, undefined);
        varData_708(this, varData_2150, undefined);
        varData_708(this, varData_2151, false);
        varData_708(this, varData_2152, []);
        varData_709(this, varData_2145, param_1.codename);
        varData_709(this, varData_2146, param_1.version);
        varData_709(this, varData_2147, GetCurrentResourceName());
        varData_709(this, varData_2148, "np-admin");
        emit("__npx_core:handshake", param_1, varData_711(this, varData_2153, varData_2154).bind(this));
        varData_1828.register("__npx_core:handshake", async param_1_1 => {
          if (param_1_1.codename !== varData_707(this, varData_2145)) {
            return;
          }
          const varData_2156 = await varData_1664.waitForCondition(() => varData_707(this, varData_2151), 10000);
          if (varData_2156) {
            return;
          }
          return {
            API_URL: varData_707(this, varData_2149),
            API_KEY: varData_707(this, varData_2150)
          };
        });
      }
      get codename() {
        return varData_707(this, varData_2145);
      }
      get version() {
        return varData_707(this, varData_2146);
      }
      get isReady() {
        return varData_707(this, varData_2151);
      }
      onReady(param_1) {
        if (varData_707(this, varData_2151)) {
          param_1();
        } else {
          varData_707(this, varData_2152).push(param_1);
        }
      }
    };
    varData_2145 = new WeakMap();
    varData_2146 = new WeakMap();
    varData_2147 = new WeakMap();
    varData_2148 = new WeakMap();
    varData_2149 = new WeakMap();
    varData_2150 = new WeakMap();
    varData_2151 = new WeakMap();
    varData_2152 = new WeakMap();
    varData_2153 = new WeakSet();
    varData_2154 = async function (param_1) {
      varData_709(this, varData_2149, param_1.API_URL);
      varData_709(this, varData_2150, param_1.API_KEY);
      varData_709(this, varData_2151, true);
      for (const varData_2157 of varData_707(this, varData_2152)) {
        varData_2157();
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
    const varData_2158 = globalThis.NPX;
    const varData_2159 = varData_2158.Hud;
    const varData_2160 = varData_2158.Utils;
    const varData_2161 = varData_2158.Zones;
    const varData_2162 = varData_2158.Events;
    const varData_2163 = varData_2158.Streaming;
    const varData_2164 = varData_2158.Procedures;
    const varData_2165 = varData_2158.Interface;
    const varData_2166 = null && varData_2158;
    ;
    const varData_2167 = {
      "1": "Drivers License",
      "2": "Weapons License",
      "3": "Bar License",
      "4": "Business License",
      "5": "Pilot License",
      "6": "Skydiving License",
      "7": "Hunting License",
      "8": "Fishing License",
      "9": "Alcohol License",
      "10": "Federal Bar License",
      "11": "Medical License",
      "12": "Oil Pump License"
    };
    ;
    const varData_2168 = [{
      optionName: "toggleBlockEmotes",
      displayName: "Block Emotes",
      optionType: "toggle",
      data: false
    }, {
      optionName: "toggleDefaultMenu",
      displayName: "Large menu is default",
      optionType: "toggle",
      data: true
    }, {
      optionName: "expandedOnPass",
      displayName: "Large menu on 'Pass' menu is default",
      optionType: "toggle",
      data: false
    }, {
      optionName: "showTooltips",
      displayName: "Show Tooltips",
      optionType: "toggle",
      data: true
    }, {
      optionName: "openDefaultMenu",
      displayName: "Open Normal Menu with Bind",
      optionType: "toggle",
      data: true
    }];
    ;
    let varData_2169 = [{
      parent: "",
      key: "none"
    }, {
      parent: "",
      key: "adminBind_0"
    }, {
      parent: "",
      key: "adminBind_1"
    }, {
      parent: "",
      key: "adminBind_2"
    }, {
      parent: "",
      key: "adminBind_3"
    }, {
      parent: "",
      key: "adminBind_4"
    }, {
      parent: "",
      key: "adminBind_5"
    }];
    let varData_2170 = [];
    let varData_2171 = [];
    let isDisabled_1 = false;
    let isDisabled_2 = false;
    let varData_2172 = [];
    async function handleAction_122() {
      return new Promise(param_1 => {
        let isDisabled_3 = false;
        const varData_2173 = JSON.parse(GetResourceKvpString("Json_adminMenuOptions"));
        if (!isDisabled_1 && varData_2173 != null) {
          for (const varData_2174 in varData_2168) {
            const varData_2175 = varData_2168[varData_2174];
            const varData_2176 = varData_2173.find(param_1_1 => param_1_1.optionName === varData_2175.optionName);
            if (varData_2176 == null) {
              isDisabled_3 = true;
              varData_2173.push(varData_2175);
            }
          }
          isDisabled_1 = true;
          if (isDisabled_3) {
            handleAction_123(varData_2173);
          }
        }
        if (varData_2173 == null) {
          if (varData_2170.length == 0) {
            varData_2170 = varData_2168;
          }
        } else {
          varData_2170 = varData_2173;
        }
        return param_1(varData_2170);
      });
    }
    function handleAction_123(param_1) {
      varData_2170 = param_1;
      SetResourceKvp("Json_adminMenuOptions", JSON.stringify(varData_2170));
    }
    async function handleAction_124(param_1) {
      if (varData_2170.length == 0) {
        await handleAction_122();
      }
      const varData_2177 = varData_2170.find(param_1_1 => param_1_1.optionName === param_1);
      return varData_2177;
    }
    function handleAction_125() {
      const varData_2178 = [];
      const varData_2179 = JSON.parse(GetResourceKvpString("Json_adminKeyOptions_2"));
      if (!isDisabled_2 && varData_2179 != null) {
        for (const varData_2180 in varData_2169) {
          const varData_2181 = varData_2169[varData_2180];
          const varData_2182 = varData_2179.find(param_1 => param_1.key === varData_2181.key);
          if (varData_2182 == null) {
            varData_2179.push(varData_2181);
          }
        }
        isDisabled_2 = true;
        varData_2169 = varData_2179;
      }
      for (const varData_2183 in varData_2169) {
        const varData_2184 = varData_2169[varData_2183];
        var varData_2185 = {
          text: varData_2184.key
        };
        const varData_2186 = varData_2185;
        varData_2178.push(varData_2186);
      }
      for (const varData_2187 in varData_2559) {
        const varData_2188 = varData_2559[varData_2187];
        if (varData_2188.adminMenu && varData_2188.adminMenu.options.bindKey && varData_2188.adminMenu.options.bindKey.options) {
          const varData_2189 = varData_2188.adminMenu.command.title;
          const varData_2190 = varData_2169.find(param_1 => param_1.parent === varData_2189);
          if (varData_2190) {
            varData_2188.adminMenu.options.bindKey.value = varData_2190.key;
          } else {
            varData_2188.adminMenu.options.bindKey.value = null;
          }
          varData_2188.adminMenu.options.bindKey.options = varData_2178;
        }
      }
      return;
    }
    function handleAction_126(param_1) {
      if (JSON.stringify(varData_2172) === JSON.stringify(param_1)) {
        return;
      }
      varData_2172 = param_1;
      for (const varData_2191 in param_1) {
        const varData_2192 = param_1[varData_2191];
        if (varData_2192 == "none") {
          const varData_2193 = varData_2169.find(param_1_1 => param_1_1.parent.toLocaleLowerCase() === varData_2191.toLocaleLowerCase());
          if (varData_2193) {
            varData_2193.parent = "";
          }
          continue;
        }
        if (varData_2192 == null) {
          continue;
        }
        const varData_2194 = varData_2169.find(param_1_1 => param_1_1.key === varData_2192);
        if (varData_2194) {
          varData_2194.parent = varData_2191;
        }
        for (const varData_2195 in varData_2169) {
          const varData_2196 = varData_2169[varData_2195];
          if (varData_2196.parent == varData_2191 && varData_2196.key != varData_2192) {
            varData_2196.parent = "";
          }
        }
      }
      SetResourceKvp("Json_adminKeyOptions_2", JSON.stringify(varData_2169));
      handleAction_125();
      const varData_2197 = [];
      for (const varData_2198 in varData_2559) {
        const varData_2199 = varData_2559[varData_2198];
        varData_2197.push(varData_2199.adminMenu);
      }
      return;
    }
    async function handleAction_127() {
      const varData_2200 = JSON.parse(GetResourceKvpString("Json_adminMenuFavCommands"));
      if (varData_2200 == null) {
        return [];
      }
      return varData_2200;
    }
    function handleAction_128(param_1) {
      varData_2171 = param_1;
      SetResourceKvp("Json_adminMenuFavCommands", JSON.stringify(varData_2171));
    }
    ;
    class _0x50c49a {
      constructor(_0x2cbd30 = 0, _0x26e19a = 0, _0x187af0 = 0) {
        this.x = _0x2cbd30;
        this.y = _0x26e19a;
        this.z = _0x187af0;
      }
      setFromArray(param_1) {
        this.x = param_1[0];
        this.y = param_1[1];
        this.z = param_1[2];
        return this;
      }
      getArray() {
        return [this.x, this.y, this.z];
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
      sub(param_1) {
        this.x -= param_1.x;
        this.y -= param_1.y;
        this.z -= param_1.z;
        return this;
      }
      addPlusScaler(param_1, param_2) {
        this.x += param_1.x * param_2;
        this.y += param_1.y * param_2;
        this.z += param_1.z * param_2;
        return this;
      }
      subPlusScaler(param_1, param_2) {
        this.x -= param_1.x * param_2;
        this.y -= param_1.y * param_2;
        this.z -= param_1.z * param_2;
        return this;
      }
      equals(param_1) {
        return this.x === param_1.x && this.y === param_1.y && this.z === param_1.z;
      }
      subScalar(param_1) {
        this.x -= param_1;
        this.y -= param_1;
        this.z -= param_1;
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
      getDistance(param_1) {
        const [_0x4955a9, _0x428e53, _0x4f1c8d] = [this.x - param_1.x, this.y - param_1.y, this.z - param_1.z];
        return Math.sqrt(_0x4955a9 * _0x4955a9 + _0x428e53 * _0x428e53 + _0x4f1c8d * _0x4f1c8d);
      }
      getDistanceFromArray(param_1) {
        const [_0x435c12, _0x1c2d1f, _0x4b331d] = [this.x - param_1[0], this.y - param_1[1], this.z - param_1[2]];
        return Math.sqrt(_0x435c12 * _0x435c12 + _0x1c2d1f * _0x1c2d1f + _0x4b331d * _0x4b331d);
      }
      isCoordinateEqual(param_1, param_2) {
        return param_1.equals(param_2);
      }
      static fromArray(param_1) {
        return new _0x50c49a(param_1[0], param_1[1], param_1[2]);
      }
      static fromObject(param_1) {
        return new _0x50c49a(param_1.x, param_1.y, param_1.z);
      }
    }
    ;
    async function handleAction_129(param_1) {
      return new Promise(param_1_1 => setTimeout(() => param_1_1(), param_1));
    }
    function handleAction_130(param_1) {
      const varData_2201 = [];
      param_1.forEach((param_1_1, param_2) => varData_2201.push({
        key: param_2,
        value: param_1_1
      }));
      return varData_2201;
    }
    function handleAction_131(param_1) {
      const dataMap_2 = new Map();
      param_1.forEach(param_1_1 => dataMap_2.set(param_1_1.key, param_1_1.value));
      return dataMap_2;
    }
    async function handleAction_132(param_1) {
      const varData_2202 = /-?\d{1,}\.?\d{1,}/g;
      const varData_2203 = param_1.match(varData_2202);
      const varData_2204 = +varData_2203[0];
      const varData_2205 = +varData_2203[1];
      const varData_2206 = +varData_2203[2];
      if (Number.isNaN(varData_2204) || Number.isNaN(varData_2205) || Number.isNaN(varData_2206)) {
        return null;
      }
      const varData_2207 = new _0x50c49a(varData_2204, varData_2205, varData_2206);
      return varData_2207;
    }
    ;
    const varData_2208 = (param_1, param_2, param_3, _0x185f5d = 0.4, _0x5f3f37 = 0.4, _0x507cf0 = 0.4, _0x51ec86 = 0) => {
      DrawMarker(param_1, param_2.x, param_2.y, param_2.z, 0, 0, 0, 0, 0, _0x51ec86, _0x185f5d, _0x5f3f37, _0x507cf0, param_3[0], param_3[1], param_3[2], param_3[3], false, false, 2, false, null, null, false);
    };
    const varData_2209 = (param_1, param_2, param_3, param_4, param_5, param_6, _0xceae9b = 0) => {
      SetTextColour(param_4[0], param_4[1], param_4[2], param_4[3]);
      SetTextOutline();
      SetTextScale(0, param_5);
      SetTextFont(param_6 ?? 0);
      SetTextJustification(_0xceae9b);
      if (_0xceae9b === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(param_3 ?? "Dummy text");
      EndTextCommandDisplayText(param_1, param_2);
    };
    const varData_2210 = (param_1, param_2, param_3, param_4, _0x4f59a1 = 4) => {
      SetDrawOrigin(param_1.x, param_1.y, param_1.z, 0);
      const varData_2211 = Math.max(varData_2220(param_2, 0, 10, 0.4, 0.25), 0.1);
      varData_2209(0, 0, param_3, param_4, varData_2211, _0x4f59a1);
      ClearDrawOrigin();
    };
    const varData_2212 = (param_1, param_2, param_3) => {
      BeginTextCommandGetWidth("STRING");
      AddTextComponentString(param_1);
      SetTextFont(param_2);
      SetTextScale(param_3, param_3);
      return EndTextCommandGetWidth(true);
    };
    const varData_2213 = (param_1, param_2) => {
      const varData_2214 = GetGameplayCamCoord();
      const [_0xe2ead,, _0x46b3b3] = GetGameplayCamRot(0).map(param_1_1 => Math.PI / 180 * param_1_1);
      const varData_2215 = Math.abs(Math.cos(_0xe2ead));
      const varData_2216 = [-Math.sin(_0x46b3b3) * varData_2215, Math.cos(_0x46b3b3) * varData_2215, Math.sin(_0xe2ead)];
      const varData_2217 = varData_2216.map((param_1_1, param_2_1) => varData_2214[param_2_1] + param_1_1);
      const varData_2218 = varData_2216.map((param_1_1, param_2_1) => varData_2214[param_2_1] + param_1_1 * 200);
      const varData_2219 = StartShapeTestSweptSphere(varData_2217[0], varData_2217[1], varData_2217[2], varData_2218[0], varData_2218[1], varData_2218[2], 0.2, param_1, param_2, 7);
      return GetShapeTestResultIncludingMaterial(varData_2219);
    };
    const varData_2220 = (param_1, param_2, param_3, param_4, param_5) => (param_1 - param_2) * (param_5 - param_4) / (param_3 - param_2) + param_4;
    const varData_2221 = (param_1, param_2) => {
      if (param_1 == "player") {
        const targetPlayer = GetPlayerFromServerId(param_2);
        if (targetPlayer == -1) {
          return 0;
        }
        return GetPlayerPed(targetPlayer);
      } else {
        return NetworkGetEntityFromNetworkId(param_2);
      }
    };
    ;
    let isDisabled_3 = false;
    function handleAction_133(param_1) {
      isDisabled_3 = param_1;
      emit("np-admin:currentDevmode", isDisabled_3);
    }
    ;
    let isDisabled_4 = false;
    let isDisabled_5 = false;
    let varData_2222;
    const varData_2223 = {
      "1": "ped",
      "2": "vehicle",
      "3": "object"
    };
    let varData_2224 = 0;
    let varData_2225;
    let isEnabled_2 = true;
    const dataSet_3 = new Set();
    const dataMap_2 = new Map();
    const varData_2226 = (param_1, param_2) => {
      const varData_2227 = _0x50c49a.fromObject(param_2).sub(varData_2225.center);
      const varData_2228 = varData_2227.x * Math.cos(param_1) - varData_2227.y * Math.sin(param_1);
      const varData_2229 = varData_2227.x * Math.sin(param_1) + varData_2227.y * Math.cos(param_1);
      return new _0x50c49a(varData_2228, varData_2229, 0).add(varData_2225.center);
    };
    const varData_2230 = async param_1 => {
      if (!(await varData_2562()) || !isDisabled_3) {
        return;
      }
      isDisabled_4 = false;
      isDisabled_5 = false;
      const varData_2231 = await varData_2563();
      await handleAction_129(1);
      isDisabled_4 = true;
      SetEntityDrawOutlineShader(1);
      SetEntityDrawOutlineColor(0, 255, 0, 150);
      exports.hud.sendAppEvent({
        crosshairShow: true
      });
      varData_2222 = param_1;
      const tickHandler = setTick(async () => {
        if (!isDisabled_4) {
          clearTick(tickHandler);
          return;
        }
        const [, _0x675d59, _0x39c1d9,, _0x192767, _0x2c9ede] = varData_2213(31, PlayerPedId());
        if (!_0x675d59) {
          return;
        }
        const varData_2232 = _0x50c49a.fromArray(_0x39c1d9);
        const varData_2233 = exports["np-target"].GetCurrentEntity();
        const varData_2234 = varData_2233 ? varData_2233 : _0x2c9ede;
        const varData_2235 = +GetEntityType(varData_2234);
        const varData_2236 = varData_2235 && (!varData_2224 || varData_2235 === varData_2224) && varData_2222?.entity?.handle !== varData_2234;
        const varData_2237 = varData_2235 ? varData_2236 ? varData_2297(varData_2234, varData_2235) : varData_2222?.entity : null;
        if (varData_2236) {
          varData_2295();
        }
        var varData_2238 = {
          coords: varData_2232,
          entity: varData_2237,
          material: _0x192767
        };
        varData_2222 = varData_2238;
      });
      const tickHandler_1 = setTick(() => {
        if (!isDisabled_4 && !isDisabled_5) {
          varData_2295();
          clearTick(tickHandler_1);
          return;
        }
        if (varData_2225) {
          const varData_2239 = varData_2225.height ?? 0;
          if (!varData_2225.endCoords) {
            const varData_2240 = varData_2222?.coords;
            const varData_2241 = varData_2225.startCoords;
            if (varData_2240) {
              varData_2225.center = _0x50c49a.fromObject(varData_2241).add(varData_2240).multiplyScalar(0.5);
              varData_2225.center.z = varData_2241.z;
              const varData_2242 = Math.PI / 180 * varData_2225.heading;
              const varData_2243 = varData_2226(-varData_2242, varData_2241);
              const varData_2244 = varData_2226(-varData_2242, varData_2240);
              const varData_2245 = varData_2243.sub(varData_2244);
              varData_2225.width = Math.abs(varData_2245.x);
              varData_2225.length = Math.abs(varData_2245.y);
            }
          }
          const varData_2246 = isEnabled_2 ? [0, 255, 0, 150] : [255, 0, 0, 150];
          varData_2208(43, varData_2225.center, varData_2246, varData_2225.width, varData_2225.length, varData_2239, varData_2225.heading);
        }
        if (!varData_2222) {
          return;
        }
        varData_2209(0.5, 0.47, "Entities: ~g~" + dataMap_2.size, [255, 255, 255, 255], 0.4, 4, 2);
        varData_2209(0.5, 0.5, "Selecting: " + (varData_2223[varData_2224] ?? "all"), [255, 255, 255, 255], 0.4, 4, 2);
        if (!varData_2222.entity) {
          varData_2208(28, varData_2222.coords, [0, 0, 255, 150], 0.2, 0.2, 0.2);
        }
        const varData_2247 = _0x50c49a.fromArray(GetEntityCoords(PlayerPedId(), true));
        const varData_2248 = param_1_1 => {
          const varData_2249 = param_1_1.handle;
          const varData_2250 = _0x50c49a.fromArray(GetEntityCoords(varData_2249, true));
          const varData_2251 = _0x50c49a.fromArray(GetEntityRotation(varData_2249, 2));
          param_1_1.coords = varData_2250;
          param_1_1.rotation = varData_2251;
          const varData_2252 = param_1_1.type === 1;
          if (!varData_2252 && !dataSet_3.has(varData_2249)) {
            dataSet_3.add(varData_2249);
            SetEntityDrawOutline(varData_2249, true);
          }
          if (varData_2252) {
            var varData_2253 = {
              x: varData_2250.x,
              y: varData_2250.y,
              z: varData_2250.z - 1
            };
            varData_2208(1, varData_2253, [0, 255, 0, 150], 0.5, 0.5, 0.5);
          }
          const varData_2254 = param_1_1.type === 3 && (param_1_1.mapName.includes("door") || param_1_1.mapName.includes("garage"));
          const varData_2255 = varData_2247.getDistance(varData_2250);
          const varData_2256 = param_1_1.dimensions[1][2] - param_1_1.dimensions[0][2];
          if (varData_2255 < 20) {
            var varData_2257 = {
              x: varData_2250.x,
              y: varData_2250.y,
              z: varData_2250.z + (varData_2252 ? 1 : varData_2254 ? varData_2256 / 2 : varData_2256)
            };
            varData_2210(varData_2257, varData_2255, "~q~" + param_1_1.handle + "   ~o~" + (param_1_1.mapName ?? param_1_1.model) + " " + ("~g~ " + param_1_1.coords.x.toFixed(2) + ", ") + (param_1_1.coords.y.toFixed(2) + ", ") + ("" + param_1_1.coords.z.toFixed(2)), [0, 0, 0, 255]);
            var varData_2258 = {
              x: varData_2250.x,
              y: varData_2250.y,
              z: varData_2250.z + (varData_2252 ? 1 : varData_2254 ? varData_2256 / 2 : varData_2256) + 0.2
            };
            varData_2210(varData_2258, varData_2255, "~r~(" + GetEntityHealth(varData_2249) + "/" + GetEntityMaxHealth(varData_2249) + ")", [0, 0, 0, 255]);
          }
        };
        if (varData_2222.entity) {
          const varData_2259 = dataMap_2.has(varData_2222.entity?.handle);
          if (!varData_2259) {
            varData_2248(varData_2222.entity);
          }
          varData_2209(0.5, 0.53, varData_2259 ? "~g~Selected" : "~r~Not Selected", [255, 255, 255, 255], 0.4, 4, 2);
        }
        for (const varData_2260 of dataMap_2.values()) {
          if (!DoesEntityExist(varData_2260.handle)) {
            dataMap_2.delete(varData_2260.handle);
            continue;
          }
          varData_2248(varData_2260);
        }
      });
      const tickHandler_2 = setTick(async () => {
        if (!isDisabled_4 && !isDisabled_5) {
          clearTick(tickHandler_2);
          varData_1828.execute("np-admin:closeMenu", null);
          return;
        }
        DisableControlAction(0, 24, true);
        DisableControlAction(0, 25, true);
        if (isDisabled_4) {
          if (IsDisabledControlJustPressed(0, 24)) {
            if (!varData_2225) {
              varData_2225 = {
                startCoords: _0x50c49a.fromObject(varData_2222.coords),
                heading: GetEntityHeading(PlayerPedId()),
                height: 4
              };
            } else if (varData_2225.startCoords && !varData_2225.endCoords) {
              varData_2225.endCoords = _0x50c49a.fromObject(varData_2222.coords);
            }
          }
        }
        DisableControlAction(0, 44, true);
        DisableControlAction(0, 46, true);
        DisableControlAction(0, 140, true);
        DisableControlAction(0, 20, true);
        DisableControlAction(0, varData_1485.X, true);
        DisableControlAction(0, 16, true);
        DisableControlAction(0, 17, true);
        DisableControlAction(0, 36, true);
        DisableControlAction(0, 19, true);
        DisableControlAction(0, 27, true);
        const varData_2261 = IsControlPressed(2, 21);
        const varData_2262 = IsDisabledControlPressed(2, 19);
        const varData_2263 = IsDisabledControlPressed(2, 36);
        const varData_2264 = varData_2263 ? 0.1 : 0.5;
        if (IsDisabledControlJustPressed(0, 25)) {
          if (varData_2222?.entity) {
            if (!dataMap_2.has(varData_2222.entity?.handle)) {
              dataMap_2.set(varData_2222.entity.handle, varData_2222.entity);
            } else {
              dataMap_2.delete(varData_2222.entity?.handle);
            }
          }
          if (varData_2225) {
            const varData_2265 = GetGamePool("CPed");
            const varData_2266 = GetGamePool("CVehicle");
            const varData_2267 = GetGamePool("CObject");
            for (const varData_2268 of [...varData_2265, ...varData_2266, ...varData_2267]) {
              const varData_2269 = _0x50c49a.fromArray(GetEntityCoords(varData_2268, true));
              const varData_2270 = varData_2226(Math.PI / 180 * varData_2225.heading, varData_2269);
              const varData_2271 = varData_2270.x >= varData_2225.center.x - varData_2225.width / 2 && varData_2270.x <= varData_2225.center.x + varData_2225.width / 2 && varData_2270.y >= varData_2225.center.y - varData_2225.length / 2 && varData_2270.y <= varData_2225.center.y + varData_2225.length / 2 && varData_2270.z >= varData_2225.center.z - 1 && varData_2270.z <= varData_2225.center.z + varData_2225.height;
              if (varData_2271 && varData_2268 !== PlayerPedId()) {
                if (!dataMap_2.has(varData_2268)) {
                  const varData_2272 = GetEntityType(varData_2268);
                  if (!varData_2224 || varData_2272 === varData_2224) {
                    dataMap_2.set(varData_2268, varData_2297(varData_2268, varData_2272));
                  }
                } else if (!varData_2263) {
                  dataMap_2.delete(varData_2268);
                }
              }
            }
            varData_2225 = null;
          }
        }
        const varData_2273 = param_1_1 => {
          if (isEnabled_2) {
            if (varData_2261) {
              varData_2225.length += param_1_1 / 2;
            }
            if (varData_2262) {
              varData_2225.width += param_1_1 / 2;
            }
            if (!varData_2261 && !varData_2262) {
              varData_2225.heading += param_1_1 * 4;
            }
          } else if (varData_2261) {
            varData_2225.height += param_1_1;
          } else if (varData_2262) {
            varData_2225.center.z += param_1_1;
            varData_2225.height -= param_1_1;
          } else {
            varData_2225.center.z += param_1_1;
          }
        };
        if (varData_2225) {
          const varData_2274 = _0x50c49a.fromArray(GetGameplayCamRot(2)).z;
          if (IsDisabledControlPressed(2, 17)) {
            varData_2273(varData_2264);
          } else if (IsDisabledControlPressed(2, 16)) {
            varData_2273(-varData_2264);
          }
          if (varData_2225?.heading > 360) {
            varData_2225.heading -= 360;
          } else if (varData_2225?.heading < 0) {
            varData_2225.heading += 360;
          }
          const varData_2275 = (param_1_1, param_2, param_3) => {
            varData_2225.center = varData_2226(Math.PI / 180 * param_3, _0x50c49a.fromObject(varData_2225.center).add(new _0x50c49a(param_1_1, param_2, 0)));
          };
          if (IsDisabledControlPressed(2, 172)) {
            varData_2275(0, varData_2264 / 10, varData_2274);
          }
          if (IsDisabledControlPressed(2, 173)) {
            varData_2275(0, -varData_2264 / 10, varData_2274);
          }
          if (IsDisabledControlPressed(2, 174)) {
            varData_2275(-varData_2264 / 10, 0, varData_2274);
          }
          if (IsDisabledControlPressed(2, 175)) {
            varData_2275(varData_2264 / 10, 0, varData_2274);
          }
        }
        if (IsDisabledControlJustPressed(0, 44)) {
          dataMap_2.clear();
          varData_2295();
          varData_2225 = null;
          isDisabled_5 = false;
        }
        if (varData_2231 && IsDisabledControlJustPressed(0, 46)) {
          if (varData_2225?.endCoords) {
            setImmediate(async () => {
              const varData_2276 = await exports["np-ui"].OpenInputMenu([{
                label: "Name",
                name: "name"
              }], param_1_1 => {
                return true;
              });
              if (varData_2276) {
                const varData_2277 = varData_2225.height;
                const varData_2278 = _0x50c49a.fromObject(varData_2225.center).add(new _0x50c49a(0, 0, varData_2277 / 2));
                const varData_2279 = {
                  name: varData_2276.name ?? "",
                  center: varData_2278,
                  width: varData_2225.width.toFixed(1),
                  length: varData_2225.length.toFixed(1),
                  heading: varData_2225.heading.toFixed(0),
                  minZ: varData_2225.center.z.toFixed(2),
                  maxZ: (varData_2225.center.z + varData_2225.height).toFixed(2)
                };
                emitNet("np:admin:saveZone", varData_2279);
                varData_2225 = null;
                isDisabled_5 = false;
                emit("chat:addMessage", {
                  color: 2,
                  multiline: true,
                  args: ["Me", "Saved to admin_zones.txt"]
                });
              }
            });
          }
        }
        if (IsDisabledControlJustPressed(0, 140)) {
          if (isDisabled_4) {
            varData_2224 = (varData_2224 + 1) % 4;
          }
        }
        if (IsDisabledControlJustPressed(0, 20)) {
          if (varData_2225) {
            isEnabled_2 = !isEnabled_2;
          }
        }
        if (IsDisabledControlJustPressed(0, varData_1485.X)) {
          if (isDisabled_4) {
            const varData_2280 = await exports["np-ui"].OpenInputMenu([{
              label: "Name",
              name: "name"
            }], param_1_1 => {
              return true;
            });
            const varData_2281 = varData_2222.coords;
            var varData_2282 = {
              name: varData_2280.name,
              center: varData_2281
            };
            emitNet("np:admin:saveInteraction", varData_2282);
            isDisabled_4 = false;
            isDisabled_5 = false;
            emit("chat:addMessage", {
              color: 2,
              multiline: true,
              args: ["Me", "Saved to admin_interactions.txt"]
            });
          }
        }
        if (IsDisabledControlJustPressed(0, 200) || IsDisabledControlJustReleased(0, 177) && isDisabled_5) {
          isDisabled_4 = false;
          isDisabled_5 = false;
        }
      });
    };
    const varData_2283 = async () => {
      isDisabled_5 = !!varData_2222?.entity || !!varData_2225;
      isDisabled_4 = false;
      exports.hud.sendAppEvent({
        crosshairShow: false
      });
      if (!(await varData_2562()) || !isDisabled_3) {
        return;
      }
      if (varData_2225) {
        varData_2222 = null;
      }
      if (!varData_2222?.entity) {
        varData_1828.execute("np-admin:closeMenu", null);
        return;
      }
      const [_0x1a447d, _0x5577ed] = await varData_2298(varData_2222.entity);
      var varData_2284 = {
        commands: _0x1a447d,
        information: _0x5577ed
      };
      varData_1828.execute("np-admin:openSelection", varData_2284);
    };
    const varData_2285 = () => {
      if (!isDisabled_5) {
        return;
      }
      if (!IsNuiFocused()) {
        globalThis.exports.focusmanager.SetUIFocus(true, true);
      } else {
        globalThis.exports.focusmanager.SetUIFocus(false, false);
      }
    };
    RegisterCommand("+enableSelectionMenu", () => varData_2285(), false);
    RegisterCommand("-enableSelectionMenu", () => {}, false);
    handleAction_35.g.exports["np-keybinds"].registerKeyMapping("", "zzAdmin", "Selection Menu", "+enableSelectionMenu", "-enableSelectionMenu", "");
    const varData_2286 = async param_1 => {
      if (!(await varData_2562()) || !isDisabled_3) {
        return;
      }
      const varData_2287 = _0x50c49a.fromArray(GetEntityCoords(PlayerPedId(), true));
      const varData_2288 = GetGamePool("CObject");
      if (!varData_2288 || varData_2288.length === 0) {
        return;
      }
      let varData_2289 = null;
      for (const varData_2290 of varData_2288) {
        if (param_1 && !Number.isNaN(param_1) && GetEntityModel(varData_2290) !== param_1) {
          continue;
        }
        if (!varData_2289) {
          varData_2289 = varData_2290;
        } else {
          const varData_2291 = _0x50c49a.fromArray(GetEntityCoords(varData_2289, false));
          const varData_2292 = _0x50c49a.fromArray(GetEntityCoords(varData_2290, false));
          if (varData_2287.getDistance(varData_2292) < varData_2287.getDistance(varData_2291)) {
            varData_2289 = varData_2290;
          }
        }
      }
      if (!varData_2289) {
        return;
      }
      const varData_2293 = varData_2297(varData_2289, GetEntityType(varData_2289));
      await varData_2230({
        entity: varData_2293,
        coords: _0x50c49a.fromArray(GetEntityCoords(varData_2289, false)),
        material: null
      });
      await varData_2283();
    };
    const varData_2294 = () => {
      isDisabled_5 = false;
    };
    const varData_2295 = () => {
      for (const varData_2296 of dataSet_3) {
        SetEntityDrawOutline(varData_2296, false);
      }
      dataSet_3.clear();
    };
    const varData_2297 = (param_1, param_2) => {
      const model = GetEntityModel(param_1);
      return {
        handle: param_1,
        model: model,
        coords: _0x50c49a.fromArray(GetEntityCoords(param_1, true)),
        rotation: _0x50c49a.fromArray(GetEntityRotation(param_1, 2)),
        dimensions: GetModelDimensions(model),
        type: param_2,
        mapName: GetEntityArchetypeName(param_1)
      };
    };
    const varData_2298 = async param_1 => {
      const varData_2299 = param_1.handle;
      const varData_2300 = IsPedAPlayer(varData_2299);
      const varData_2301 = param_1.type === 3 ? handleAction_35.g.exports.doors.getDoorFromEntity(varData_2299) : 0;
      const varData_2302 = exports["np-objects"].GetObjectByEntity(varData_2299)?.id;
      const varData_2303 = handleAction_136(param_1.type === 1 ? varData_2300 ? 1 : -1 : param_1.type, -1, varData_2301, varData_2302);
      const [_0x849242, _0x7cecae, _0x109adf] = GetEntityCoords(varData_2299, false);
      let varData_2304 = {};
      switch (param_1.type) {
        case 1:
          if (varData_2300) {
            const serverId = GetPlayerServerId(NetworkGetPlayerIndexFromPed(varData_2299));
            const varData_2305 = await RPC.execute("np:admin:getUserData", serverId);
            varData_2304 = {
              name: varData_2305.name,
              coords: _0x849242.toFixed(2) + ", " + _0x7cecae.toFixed(2) + ", " + _0x109adf.toFixed(2),
              heading: "" + GetEntityHeading(varData_2299).toFixed(2),
              steamid: varData_2305.steamid,
              serverID: serverId,
              charID: varData_2305.character.id,
              cash: varData_2305.character.cash
            };
            return [varData_2303, varData_2304];
          }
          if (NetworkGetEntityIsNetworked(varData_2299)) {
            const varData_2306 = NetworkGetNetworkIdFromEntity(varData_2299);
            const serverId = GetPlayerServerId(NetworkGetEntityOwner(varData_2299));
            const varData_2307 = await handleAction_134(varData_2306);
            const varData_2308 = varData_2307.vector;
            varData_2304 = {
              name: "Local",
              coords: _0x849242.toFixed(2) + ", " + _0x7cecae.toFixed(2) + ", " + _0x109adf.toFixed(2),
              heading: "" + GetEntityHeading(varData_2299).toFixed(2),
              model: param_1.mapName + "; (" + varData_2307.model + ")",
              originSource: varData_2307.originSource,
              origin: varData_2307.origin,
              originSteamId: varData_2307.originSteamId,
              currentOwner: serverId,
              spawnVector: varData_2308[0].toFixed(2) + ", " + varData_2308[1].toFixed(2) + ", " + varData_2308[2].toFixed(2)
            };
          } else {
            varData_2304 = {
              name: "Local"
            };
          }
          return [varData_2303, varData_2304];
        case 2:
          varData_2304 = {
            name: GetLabelText(GetDisplayNameFromVehicleModel(GetEntityModel(varData_2299))),
            coords: _0x849242.toFixed(2) + ", " + _0x7cecae.toFixed(2) + ", " + _0x109adf.toFixed(2),
            heading: "" + GetEntityHeading(varData_2299).toFixed(2),
            health: GetEntityHealth(varData_2299) + " / " + GetEntityMaxHealth(varData_2299)
          };
          const varData_2309 = exports["np-vehicles"].GetVehicleIdentifier(varData_2299);
          const varData_2310 = varData_2309 ? await RPC.execute("np:admin:getVehicleInfo", varData_2309) : null;
          if (NetworkGetEntityIsNetworked(varData_2299)) {
            const varData_2311 = NetworkGetNetworkIdFromEntity(varData_2299);
            const serverId = GetPlayerServerId(NetworkGetEntityOwner(varData_2299));
            const varData_2312 = await handleAction_134(varData_2311);
            const varData_2313 = varData_2312.vector;
            varData_2304.model = param_1.mapName + "; (" + varData_2312.model + ")";
            varData_2304.originSource = varData_2312.originSource;
            varData_2304.origin = varData_2312.origin;
            varData_2304.steamid = varData_2312.originSteamId;
            varData_2304.currentOwner = serverId;
            varData_2304.spawnVector = varData_2313[0].toFixed(2) + ", " + varData_2313[1].toFixed(2) + ", " + varData_2313[2].toFixed(2);
          }
          if (varData_2310) {
            varData_2304.vin = varData_2310.vin;
            varData_2304.plate = GetVehicleNumberPlateText(varData_2299);
            varData_2304.cid = varData_2310.cid;
            varData_2304.size = varData_2310.size;
            varData_2304.lastGarage = varData_2310.garage;
            varData_2304.mileage = varData_2310.metadata?.mileage ?? "Unknown";
            varData_2304.fuel = varData_2310.metadata?.fuel ?? "Unknown";
          }
          varData_2304.seats = GetVehicleModelNumberOfSeats(GetEntityModel(varData_2299));
          varData_2304.passengers = GetVehicleNumberOfPassengers(varData_2299);
          return [varData_2303, varData_2304];
        case 3:
          varData_2304 = {
            name: "" + param_1.handle,
            model: param_1.mapName + "; (" + GetEntityModel(varData_2299) + ")",
            coords: _0x849242.toFixed(2) + ", " + _0x7cecae.toFixed(2) + ", " + _0x109adf.toFixed(2),
            heading: "" + GetEntityHeading(varData_2299).toFixed(2),
            health: GetEntityHealth(varData_2299) + " / " + GetEntityMaxHealth(varData_2299)
          };
          const varData_2314 = exports["np-objects"].GetObjectByEntity(varData_2299);
          if (varData_2314) {
            const varData_2315 = await RPC.execute("np:admin:getObjectSyncedData", varData_2314.id);
            varData_2304.ns = varData_2315.ns;
            varData_2304.objectId = varData_2315.id;
            varData_2304.private = JSON.stringify(varData_2315.private, null, 2);
          }
          if (varData_2301) {
            console.log(varData_2301);
            varData_2304.doorId = varData_2301.data.uniqueId;
            varData_2304.lockStatus = varData_2301.data.door?.locked ? "Locked" : "Unlocked";
          }
          if (NetworkGetEntityIsNetworked(varData_2299)) {
            const varData_2316 = NetworkGetNetworkIdFromEntity(varData_2299);
            const serverId = GetPlayerServerId(NetworkGetEntityOwner(varData_2299));
            const varData_2317 = await handleAction_134(varData_2316);
            if (varData_2317) {
              const varData_2318 = varData_2317.vector;
              varData_2304.model = varData_2317.model;
              varData_2304.ownerSource = varData_2317.originSource;
              varData_2304.origin = varData_2317.origin;
              varData_2304.steamid = varData_2317.originSteamId;
              varData_2304.currentOwner = serverId;
              varData_2304.spawnVector = varData_2318[0].toFixed(2) + ", " + varData_2318[1].toFixed(2) + ", " + varData_2318[2].toFixed(2);
            }
          }
          return [varData_2303, varData_2304];
        default:
          return null;
      }
    };
    async function handleAction_134(param_1) {
      const varData_2319 = await RPC.execute("np-suppression:getEntitySpawnData", param_1);
      for (const varData_2320 in varData_2319) {
        const varData_2321 = varData_2319[varData_2320];
        if (varData_2321 != null) {
          const varData_2322 = {
            model: varData_2321.model,
            originSteamId: varData_2321.steamid,
            origin: varData_2321.origin,
            originSource: varData_2321.serverid,
            vector: varData_2324(varData_2321.spawnCoords)
          };
          return varData_2322;
        }
      }
    }
    async function handleAction_135() {
      if (!(await varData_2562())) {
        return;
      }
      if (IsPedAPlayer(varData_2222.entity.handle)) {
        return;
      }
      var varData_2323 = {
        Entity: varData_2222.entity.handle
      };
      RPC.execute("np:admin:runCommandFromClient", "deleteEntity", varData_2323);
    }
    const varData_2324 = param_1 => param_1.type === 21 && param_1.buffer ? [param_1.buffer.readFloatLE(0), param_1.buffer.readFloatLE(4), param_1.buffer.readFloatLE(8)] : null;
    function handleAction_136(param_1, param_2, param_3, param_4) {
      const varData_2325 = [];
      for (const varData_2326 in varData_2559) {
        const varData_2327 = varData_2559[varData_2326].selection;
        if (!varData_2327) {
          continue;
        }
        if (varData_2327.entityType !== param_1 && (param_2 === null || varData_2327.entityType !== param_2)) {
          continue;
        }
        if (varData_2327.lockedDoor || varData_2327.unlockedDoor) {
          if (!param_3) {
            continue;
          }
          const varData_2328 = param_3.data.door?.locked;
          if (varData_2327.lockedDoor && !varData_2328 || varData_2327.unlockedDoor && varData_2328) {
            continue;
          }
        }
        if (varData_2327.syncedObject && !param_4) {
          continue;
        }
        varData_2325.push(varData_2327);
      }
      return varData_2325;
    }
    varData_1828.register("np-admin:runCommand", async param_1 => {
      if (!varData_2222?.entity) {
        return;
      }
      param_1.Entity = varData_2222.entity.handle;
      if (param_1.Data?.Reason) {
        param_1.Reason = param_1.Data.Reason;
      }
      if (param_1.Data?.Length) {
        param_1.Length = param_1.Data.Length;
      }
      if (param_1.Data?.Seat) {
        param_1.Seat = param_1.Data.Seat;
      }
      if (param_1.Data?.Model) {
        param_1.Model = param_1.Data.Model;
      }
      if (varData_2222.entity.type === 1 && IsPedAPlayer(param_1.Entity)) {
        param_1.targetSrc = GetPlayerServerId(NetworkGetPlayerIndexFromPed(param_1.Entity));
      } else {
        param_1.targetNetId = NetworkGetNetworkIdFromEntity(param_1.Entity);
      }
      RPC.execute("np:admin:runCommandFromClient", param_1.Action, param_1);
    });
    handleAction_35.g.exports("enterSelection", varData_2230);
    ;
    var varData_2329;
    (function (param_1) {
      param_1[param_1.owner = 99] = "owner";
      param_1[param_1.event = 12] = "event";
      param_1[param_1.dev = 11] = "dev";
      param_1[param_1.special = 10] = "special";
      param_1[param_1.admin = 9] = "admin";
      param_1[param_1.junior = 8] = "junior";
      param_1[param_1.mod = 7] = "mod";
      param_1[param_1.helper = 6] = "helper";
      param_1[param_1.user = 0] = "user";
    })(varData_2329 ||= {});
    ;
    const dataMap_3 = new Map();
    function handleAction_137(param_1) {
      return dataMap_3.get(param_1);
    }
    function handleAction_138(param_1, param_2) {
      dataMap_3.set(param_1, param_2);
      return;
    }
    ;
    const varData_2330 = {
      name: "teleport",
      value: varData_2329.junior,
      executedFuntion: async function _0x4c1a0e(param_1, param_2) {
        const varData_2331 = exports["np-infinity"].GetPlayerCoords(param_2.TargetUser.source, true);
        const varData_2332 = new _0x50c49a(varData_2331[0], varData_2331[1], varData_2331[2]);
        const playerPed = PlayerPedId();
        if (varData_2332.isCoordinateEqual(varData_2332, new _0x50c49a(0, 0, 0))) {
          return "Faile to find player";
        }
        const coords = GetEntityCoords(playerPed, false);
        handleAction_138("lastCoords", [coords[0], coords[1], coords[2]]);
        RequestCollisionAtCoord(varData_2332.x, varData_2332.y, varData_2332.z);
        SetPedCoordsKeepVehicle(playerPed, varData_2332.x, varData_2332.y, varData_2332.z);
        FreezeEntityPosition(playerPed, true);
        SetPlayerInvincible(playerPed, true);
        const varData_2333 = GetGameTimer();
        while (!HasCollisionLoadedAroundEntity(playerPed)) {
          if (GetGameTimer() - varData_2333 > 5000) {
            break;
          }
          await handleAction_129(10);
        }
        FreezeEntityPosition(playerPed, false);
        SetPlayerInvincible(playerPed, false);
        return "" + param_2.TargetUser.name;
      },
      log: "Teleported to ",
      target: true,
      canTargetAbove: true,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Teleport",
            cat: "Player",
            child: {
              inputs: ["Target"],
              triggers: {
                "0": {
                  name: "Last Position",
                  event: "np-admin:gotolastLocation"
                }
              }
            }
          },
          options: {
            bindKey: null
          }
        }
      }
    };
    ;
    const varData_2334 = {
      name: "teleportCoords",
      value: varData_2329.junior,
      executedFuntion: async function _0x175655(param_1, param_2) {
        const varData_2335 = await handleAction_132(param_2.Coords);
        if (!varData_2335) {
          return "Failed to parse Coords";
        }
        const playerPed = PlayerPedId();
        if (varData_2335.isCoordinateEqual(varData_2335, new _0x50c49a(0, 0, 0))) {
          return "Failed to find Coords";
        }
        const coords = GetEntityCoords(playerPed, false);
        handleAction_138("lastCoords", [coords[0], coords[1], coords[2]]);
        RequestCollisionAtCoord(varData_2335.x, varData_2335.y, varData_2335.z);
        SetPedCoordsKeepVehicle(playerPed, varData_2335.x, varData_2335.y, varData_2335.z);
        FreezeEntityPosition(playerPed, true);
        SetPlayerInvincible(playerPed, true);
        const varData_2336 = GetGameTimer();
        while (!HasCollisionLoadedAroundEntity(playerPed)) {
          if (GetGameTimer() - varData_2336 > 5000) {
            break;
          }
          await handleAction_129(10);
        }
        FreezeEntityPosition(playerPed, false);
        SetPlayerInvincible(playerPed, false);
        return "" + varData_2335.x + " " + varData_2335.y + " " + varData_2335.z;
      },
      log: "Teleported to Coord ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Teleport Coords",
            cat: "Player",
            child: {
              inputs: ["Coords"],
              triggers: {
                "0": {
                  name: "Last Position",
                  event: "np-admin:gotolastLocation"
                }
              }
            }
          },
          options: {
            bindKey: null
          }
        }
      }
    };
    ;
    let varData_2337 = null;
    let varData_2338 = null;
    const varData_2339 = () => {
      return varData_2337 != null;
    };
    handleAction_35.g.exports("IsInGodMode", varData_2339);
    const varData_2340 = async (param_1, _0x3fe7f4 = -1, _0x2e09cb = false) => {
      if (varData_2338 !== null && param_1 && !_0x2e09cb) {
        return emit("DoLongHudText", "God mode is already enabled.", 2);
      }
      if (!param_1) {
        if (varData_2338 !== null) {
          clearInterval(varData_2338);
          varData_2338 = null;
        }
        varData_2337 = null;
        handleAction_138("god", false);
        SetPlayerInvincible(PlayerId(), false);
        SetEntityProofs(PlayerPedId(), false, false, false, false, false, false, false, false);
        if (!_0x2e09cb) {
          emit("DoLongHudText", "God mode disabled.", 1);
          emit("carandplayerhud:godCheck", varData_2339());
        } else {
          exports.hud.sendAppEvent({
            godModeEnabled: varData_2339()
          });
        }
        return;
      }
      if (param_1) {
        const varData_2341 = _0x3fe7f4 * 1000;
        varData_2337 = _0x3fe7f4 === -1 ? -1 : Date.now() + varData_2341;
        handleAction_138("god", true);
        if (!_0x2e09cb) {
          emit("carandplayerhud:godCheck", varData_2339());
          emit("DoLongHudText", "God mode enabled.", 1);
        } else {
          exports.hud.sendAppEvent({
            godModeEnabled: varData_2339()
          });
        }
      }
      varData_2338 = setInterval(() => {
        if (varData_2337 !== -1 && Date.now() > varData_2337) {
          return varData_2340(false, _0x3fe7f4, _0x2e09cb);
        }
        const playerPed = PlayerPedId();
        SetPlayerInvincible(PlayerId(), true);
        SetEntityProofs(playerPed, true, true, true, true, true, true, true, true);
        exports.wounds.setEntityHealth(playerPed, GetEntityMaxHealth(playerPed));
      }, 1000);
    };
    ;
    const varData_2342 = {
      name: "god",
      value: varData_2329.junior,
      executedFuntion: async function _0x1fe927(param_1, param_2) {
        let isDisabled_6 = false;
        if (param_2.toggle != null) {
          isDisabled_6 = param_2.toggle;
        }
        varData_2340(isDisabled_6);
        return "" + isDisabled_6 + ")";
      },
      log: "set into god mode (",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "God",
            cat: "Player",
            child: false
          },
          options: {
            bindKey: {
              value: null,
              options: []
            }
          }
        }
      }
    };
    ;
    const varData_2343 = {
      name: "devspawn",
      value: varData_2329.dev,
      executedFuntion: async function _0x1ec630() {
        const playerPed = PlayerPedId();
        const coords = GetEntityCoords(playerPed, false);
        const heading = GetEntityHeading(playerPed);
        var varData_2344 = {
          x: coords[0],
          y: coords[1],
          z: coords[2],
          w: heading
        };
        const varData_2345 = varData_2344;
        exports.storage.setDev(varData_2345, "devspawn");
        return "" + varData_2345.x + " " + varData_2345.y + " " + varData_2345.z;
      },
      log: "Changed their dev spawn. ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Dev Spawn",
            cat: "Utility",
            child: null
          },
          options: {
            bindKey: null
          }
        }
      }
    };
    ;
    let isDisabled_6 = false;
    let varData_2346 = null;
    let varData_2347 = 1;
    const varData_2348 = 32;
    let varData_2349 = null;
    let varData_2350 = null;
    let varData_2351 = null;
    const varData_2352 = -89;
    const varData_2353 = 89;
    async function handleAction_139() {
      const playerPed = PlayerPedId();
      const currentVehicle = GetVehiclePedIsIn(playerPed, false);
      let varData_2354 = null;
      let isDisabled_7 = false;
      const varData_2355 = await handleAction_137("noclip");
      if (isDisabled_6 != varData_2355) {
        if (varData_2355) {
          if (currentVehicle != 0) {
            isDisabled_7 = true;
            varData_2351 = currentVehicle;
            varData_2354 = currentVehicle;
          } else {
            varData_2354 = playerPed;
          }
          varData_2346 = await handleAction_141(varData_2354, playerPed, isDisabled_7);
        } else {
          await handleAction_140(varData_2346, playerPed);
          varData_2346 = null;
          clearTick(varData_2349);
          clearTick(varData_2350);
          isDisabled_6 = varData_2355;
          return;
        }
        varData_2349 = setTick(() => {
          handleAction_143(varData_2354, playerPed, isDisabled_7);
        });
        varData_2350 = setTick(() => {
          handleAction_144();
        });
        isDisabled_6 = varData_2355;
      }
    }
    async function handleAction_140(param_1, param_2) {
      DestroyCam(param_1, false);
      RenderScriptCams(false, false, 3000, true, false);
      let varData_2356 = null;
      let varData_2357 = null;
      if (varData_2351 != null) {
        varData_2356 = varData_2351;
        varData_2357 = true;
      } else {
        varData_2356 = param_2;
      }
      FreezeEntityPosition(varData_2356, false);
      ApplyForceToEntityCenterOfMass(varData_2356, 0, 0, 0, 0, false, false, false, false);
      SetEntityCollision(varData_2356, true, true);
      ResetEntityAlpha(varData_2356);
      SetPedCanRagdoll(param_2, true);
      SetEntityVisible(varData_2356, true, false);
      ClearPedTasksImmediately(param_2);
      if (varData_2357) {
        FreezeEntityPosition(param_2, false);
        SetEntityCollision(param_2, true, true);
        ResetEntityAlpha(param_2);
        SetEntityVisible(param_2, true, false);
        SetPedIntoVehicle(param_2, varData_2356, -1);
      }
      varData_2351 = null;
    }
    async function handleAction_141(param_1, param_2, param_3) {
      const coords = GetEntityCoords(param_1, false);
      const varData_2358 = GetEntityRotation(param_1, 0);
      const varData_2359 = CreateCamWithParams("DEFAULT_SCRIPTED_CAMERA", coords[0], coords[1], coords[2], 0, 0, varData_2358[2], 75, true, 2);
      AttachCamToEntity(varData_2359, param_1, 0, 0, 0, true);
      RenderScriptCams(true, false, 3000, true, false);
      FreezeEntityPosition(param_1, true);
      SetEntityCollision(param_1, false, false);
      SetEntityAlpha(param_1, 0, null);
      SetPedCanRagdoll(param_2, false);
      SetEntityVisible(param_1, false, false);
      ClearPedTasksImmediately(param_2);
      if (param_3) {
        FreezeEntityPosition(param_2, true);
        SetEntityCollision(param_2, false, false);
        SetEntityAlpha(param_2, 0, null);
        SetEntityVisible(param_2, false, false);
      }
      return varData_2359;
    }
    function handleAction_142(param_1, param_2, param_3, param_4, param_5) {
      let varData_2360 = new _0x50c49a(0, 0, 0);
      const coords = GetEntityCoords(param_2, false);
      const varData_2361 = new _0x50c49a(coords[0], coords[1], coords[2]);
      if (param_1) {
        varData_2360 = varData_2361.addPlusScaler(param_3, param_4 * param_5);
      } else {
        varData_2360 = varData_2361.subPlusScaler(param_3, param_4 * param_5);
      }
      return varData_2360;
    }
    function handleAction_143(param_1, param_2, param_3) {
      const varData_2362 = GetCamMatrix(varData_2346);
      const varData_2363 = new _0x50c49a(varData_2362[1][0], varData_2362[1][1], varData_2362[1][2]);
      if (IsDisabledControlPressed(2, 17)) {
        varData_2347 = Math.min(varData_2347 + 0.1, varData_2348);
      } else if (IsDisabledControlPressed(2, 16)) {
        varData_2347 = Math.max(0.1, varData_2347 - 0.1);
      }
      let varData_2364 = 1;
      if (IsDisabledControlPressed(2, 209)) {
        varData_2364 = 2;
      } else if (IsDisabledControlPressed(2, 19)) {
        varData_2364 = 4;
      } else if (IsDisabledControlPressed(2, 36)) {
        varData_2364 = 0.25;
      }
      if (IsDisabledControlPressed(2, 32)) {
        const varData_2365 = handleAction_142(true, param_2, varData_2363, varData_2347, varData_2364);
        SetEntityCoordsNoOffset(param_2, varData_2365.x, varData_2365.y, varData_2365.z, false, false, false);
        if (param_3) {
          SetEntityCoordsNoOffset(param_1, varData_2365.x, varData_2365.y, varData_2365.z, false, false, false);
        }
      } else if (IsDisabledControlPressed(2, 33)) {
        const varData_2366 = handleAction_142(false, param_2, varData_2363, varData_2347, varData_2364);
        SetEntityCoordsNoOffset(param_2, varData_2366.x, varData_2366.y, varData_2366.z, false, false, false);
        if (param_3) {
          SetEntityCoordsNoOffset(param_1, varData_2366.x, varData_2366.y, varData_2366.z, false, false, false);
        }
      }
      if (IsDisabledControlPressed(2, 34)) {
        const varData_2367 = GetOffsetFromEntityInWorldCoords(param_1, -varData_2347 * varData_2364, 0, 0);
        SetEntityCoordsNoOffset(param_2, varData_2367[0], varData_2367[1], GetEntityCoords(param_1, false)[2], false, false, false);
        if (param_3) {
          SetEntityCoordsNoOffset(param_1, varData_2367[0], varData_2367[1], GetEntityCoords(param_1, false)[2], false, false, false);
        }
      } else if (IsDisabledControlPressed(2, 35)) {
        const varData_2368 = GetOffsetFromEntityInWorldCoords(param_1, varData_2347 * varData_2364, 0, 0);
        SetEntityCoordsNoOffset(param_2, varData_2368[0], varData_2368[1], GetEntityCoords(param_1, false)[2], false, false, false);
        if (param_3) {
          SetEntityCoordsNoOffset(param_1, varData_2368[0], varData_2368[1], GetEntityCoords(param_1, false)[2], false, false, false);
        }
      }
      if (IsDisabledControlPressed(2, 51)) {
        const varData_2369 = GetOffsetFromEntityInWorldCoords(param_1, 0, 0, varData_2364 * varData_2347 / 2);
        SetEntityCoordsNoOffset(param_2, varData_2369[0], varData_2369[1], varData_2369[2], false, false, false);
        if (param_3) {
          SetEntityCoordsNoOffset(param_1, varData_2369[0], varData_2369[1], varData_2369[2], false, false, false);
        }
      } else if (IsDisabledControlPressed(2, 52)) {
        const varData_2370 = GetOffsetFromEntityInWorldCoords(param_1, 0, 0, varData_2364 * -varData_2347 / 2);
        SetEntityCoordsNoOffset(param_2, varData_2370[0], varData_2370[1], varData_2370[2], false, false, false);
        if (param_3) {
          SetEntityCoordsNoOffset(param_1, varData_2370[0], varData_2370[1], varData_2370[2], false, false, false);
        }
      }
      if (IsDisabledControlJustPressed(2, 29)) {
        const varData_2371 = GetCamFov(varData_2346);
        SetCamFov(varData_2346, varData_2371 === 75 ? 50 : 75);
      }
      const varData_2372 = GetCamRot(varData_2346, 2);
      SetEntityHeading(param_1, (360 + varData_2372[2]) % 360);
      SetEntityVisible(param_1, false, null);
      if (param_3) {
        SetEntityVisible(param_2, false, null);
      }
      DisableControlAction(2, 32, true);
      DisableControlAction(2, 33, true);
      DisableControlAction(2, 34, true);
      DisableControlAction(2, 35, true);
      DisableControlAction(2, 36, true);
      DisableControlAction(2, 12, true);
      DisableControlAction(2, 13, true);
      DisableControlAction(2, 14, true);
      DisableControlAction(2, 15, true);
      DisableControlAction(2, 16, true);
      DisableControlAction(2, 17, true);
      DisableControlAction(2, 0, true);
      DisableControlAction(2, 29, true);
      DisablePlayerFiring(PlayerId(), true);
    }
    function handleAction_144() {
      const varData_2373 = GetDisabledControlNormal(0, 220);
      const varData_2374 = GetDisabledControlNormal(0, 221);
      const varData_2375 = GetCamRot(varData_2346, 2);
      const varData_2376 = varData_2375[2] + varData_2373 * -10;
      const varData_2377 = varData_2374 * -5;
      let varData_2378 = varData_2375[0];
      if (varData_2378 + varData_2377 > varData_2352 && varData_2378 + varData_2377 < varData_2353) {
        varData_2378 = varData_2375[0] + varData_2377;
      }
      SetCamRot(varData_2346, varData_2378, varData_2375[1], varData_2376, 2);
    }
    ;
    const varData_2379 = {
      name: "noclip",
      value: varData_2329.junior,
      executedFuntion: async function _0x114b81(param_1, param_2) {
        let isDisabled_7 = false;
        if (param_2.toggle != null) {
          isDisabled_7 = param_2.toggle;
        }
        const varData_2380 = handleAction_137("cloak");
        emit("attachedItems:block", varData_2380 || isDisabled_7);
        handleAction_138("noclip", isDisabled_7);
        handleAction_139();
        return "" + isDisabled_7 + ")";
      },
      log: "Nocliped (",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Noclip",
            cat: "Player",
            child: false
          },
          options: {
            bindKey: {
              value: null,
              options: []
            }
          }
        }
      },
      blockClientLog: true
    };
    ;
    const varData_2381 = {
      name: "cloak",
      value: varData_2329.junior,
      executedFuntion: async function _0xf90f6e(param_1, param_2) {
        let isDisabled_7 = false;
        if (param_2.toggle != null) {
          isDisabled_7 = param_2.toggle;
        }
        const varData_2382 = handleAction_137("noclip");
        emit("attachedItems:block", varData_2382 || isDisabled_7);
        handleAction_138("cloak", isDisabled_7);
        RPC.execute("np:admin:cloak", isDisabled_7);
        emit("np-admin:cloakStatus", isDisabled_7);
        return "" + isDisabled_7 + ")";
      },
      log: "Toggled Cloaked (",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Cloak",
            cat: "Player",
            child: false
          },
          options: {
            bindKey: {
              value: null,
              options: []
            }
          }
        }
      },
      blockClientLog: true
    };
    ;
    class _0x4659dc {
      constructor(param_1, param_2, param_3) {
        this.id = null;
        this.mode = null;
        this.type = null;
        this.active = false;
        this.handle = null;
        this.entity = null;
        this.settings = null;
        this.timer = null;
        this.id = param_2;
        this.mode = null;
        this.type = param_1;
        this.active = false;
        this.handle = null;
        this.entity = varData_2221(param_1, param_1);
        this.settings = param_3;
      }
      setSettings() {
        if (!this.settings) {
          return;
        }
        if (this.settings.color) {
          SetBlipColour(this.handle, this.settings.color);
        }
        if (this.settings.route) {
          SetBlipRoute(this.handle, this.settings.route);
        }
        if (this.settings.short) {
          SetBlipAsShortRange(this.handle, this.settings.short);
        }
        if (this.settings.scale) {
          SetBlipScale(this.handle, this.settings.scale);
        }
        if (this.settings.heading) {
          ShowHeadingIndicatorOnBlip(this.handle, this.settings.heading);
        }
        if (this.settings.category) {
          SetBlipCategory(this.handle, this.settings.category);
        }
        if (this.settings.text) {
          BeginTextCommandSetBlipName("STRING");
          AddTextComponentString(this.settings.text);
          EndTextCommandSetBlipName(this.handle);
        }
      }
      onModeChange(param_1) {
        if (param_1 == this.mode || !this.active) {
          return;
        }
        RemoveBlip(this.handle);
        if (param_1 == "coords") {
          const varData_2383 = exports["np-infinity"].GetNetworkedCoords(this.type, this.id);
          if (varData_2383) {
            this.handle = AddBlipForCoord(varData_2383[0], varData_2383[1], varData_2383[2]);
            this.mode = "coords";
          }
        } else if (param_1 == "entity") {
          const varData_2384 = varData_2221(this.type, this.id);
          if (varData_2384) {
            this.handle = AddBlipForEntity(varData_2384);
            this.mode = "entity";
          }
        }
        this.setSettings();
      }
      onUpdateCoords(param_1) {
        if (this.mode != "coords" || !this.active) {
          return;
        }
        const varData_2385 = param_1 || exports["np-infinity"].GetNetworkedCoords(this.type, this.id);
        SetBlipCoords(this.handle, varData_2385[0], varData_2385[1], varData_2385[2]);
      }
      entityExistLocally() {
        return DoesEntityExist(varData_2221(this.type, this.id));
      }
      disable() {
        if (!this.active) {
          return;
        }
        this.active = false;
        RemoveBlip(this.handle);
        clearTick(this.timer);
      }
      enable(param_1) {
        if (this.active) {
          return;
        }
        this.active = true;
        const varData_2386 = varData_2221(this.type, this.id);
        const varData_2387 = DoesEntityExist(varData_2386) && "entity" || "coords";
        if (param_1) {
          this.onModeChange(varData_2387);
        } else if (this.active) {
          const varData_2388 = this.type == "player" && 500 || 1000;
          this.timer = setTick(async () => {
            this.blipTimer();
            await handleAction_129(varData_2388);
          });
        }
      }
      blipTimer() {
        const varData_2389 = varData_2221(this.type, this.id);
        const varData_2390 = DoesEntityExist(varData_2389) && "entity" || "coords";
        if (varData_2390 != this.mode) {
          this.onModeChange(varData_2390);
        } else if (varData_2390 == "coords") {
          this.onUpdateCoords(null);
        }
      }
    }
    ;
    let varData_2391 = [];
    let varData_2392 = null;
    let varData_2393 = null;
    async function handleAction_145(param_1, param_2, param_3) {
      varData_2391 = param_1;
      if (varData_2399[param_3] && varData_2399[param_3].inScope) {
        concealPlayers(param_3, param_2);
      }
      if (GetPlayerFromServerId(param_3) == PlayerId()) {
        if (param_2) {
          varData_2392 = setTick(() => {
            handleAction_148();
          });
        } else {
          handleAction_149();
        }
      }
    }
    async function handleAction_146(param_1) {
      varData_2391 = param_1;
    }
    async function handleAction_147(param_1) {}
    async function concealPlayers(param_1, param_2) {
      let targetPlayer = GetPlayerFromServerId(param_1);
      let varData_2394 = 0;
      if (param_2) {
        while (targetPlayer == -1 && varData_2394 < 200) {
          varData_2394++;
          targetPlayer = GetPlayerFromServerId(param_1);
          await handleAction_129(10);
        }
        if (varData_2394 == 200) {
          console.log("Failed out of Cloak player check");
        }
      }
      if (PlayerId() != targetPlayer) {
        NetworkConcealPlayer(targetPlayer, param_2, false);
      }
    }
    function handleAction_148() {
      const playerId = PlayerId();
      const ped = GetPlayerPed(playerId);
      SetEntityAlpha(ped, 100, null);
      SetPlayerInvincible(playerId, true);
      SetPedCanRagdoll(ped, false);
    }
    function handleAction_149() {
      const playerId = PlayerId();
      const ped = GetPlayerPed(playerId);
      SetEntityAlpha(ped, 255, null);
      SetPlayerInvincible(playerId, varData_2339());
      SetPedCanRagdoll(ped, true);
      clearTick(varData_2392);
    }
    function handleAction_150() {
      varData_2393 = setTick(async () => {
        concealPlayers_1();
        await handleAction_129(100);
      });
    }
    function concealPlayers_1() {
      try {
        for (const varData_2395 in varData_2391) {
          const varData_2396 = varData_2391[varData_2395];
          if (typeof varData_2396 !== "number") continue;
          const playerId = PlayerId();
          const serverId = GetPlayerServerId(playerId);
          const targetPlayer = GetPlayerFromServerId(varData_2396);
          if (targetPlayer == playerId || varData_2396 == serverId) {
            continue;
          }
          if (targetPlayer > 0 && PlayerId() != targetPlayer) {
            NetworkConcealPlayer(targetPlayer, true, false);
          }
        }
        for (const varData_2397 in varData_2399) {
          const varData_2398 = varData_2399[varData_2397];
          if (!varData_2398 || typeof varData_2398.player !== "number") continue;
          if (varData_2391.indexOf(varData_2398.player) == -1) {
            const playerId = PlayerId();
            const serverId = GetPlayerServerId(playerId);
            const targetPlayer = GetPlayerFromServerId(varData_2398.player);
            if (targetPlayer == playerId || varData_2398.player == serverId) {
              continue;
            }
            NetworkConcealPlayer(targetPlayer, false, false);
          }
        }
      } catch (e) {}
    }
    ;
    const varData_2399 = {};
    function handleAction_151(param_1) {
      if (varData_2399[param_1] == null) {
        varData_2399[param_1] = {
          player: param_1,
          inScope: true
        };
      } else {
        varData_2399[param_1].inScope = true;
      }
      handleAction_147(varData_2399);
    }
    function handleAction_152(param_1) {
      if (varData_2399[param_1] == null) {
        varData_2399[param_1] = {
          player: param_1,
          inScope: false
        };
      } else {
        varData_2399[param_1].inScope = false;
      }
      handleAction_147(varData_2399);
    }
    async function handleAction_153() {
      const varData_2400 = GetActivePlayers();
      for (const varData_2401 in varData_2400) {
        const varData_2402 = varData_2400[varData_2401];
        const serverId = GetPlayerServerId(varData_2402);
        if (varData_2399[serverId] == null) {
          varData_2399[serverId] = {
            player: serverId,
            inScope: true
          };
        } else {
          varData_2399[serverId].inScope = true;
        }
      }
      handleAction_147(varData_2399);
    }
    ;
    const varData_2403 = 0.4;
    const varData_2404 = 4;
    let varData_2405 = null;
    function handleAction_154() {
      if (!varData_2405) {
        varData_2405 = GetRenderedCharacterHeight(varData_2403, 0);
      }
      return varData_2405;
    }
    function handleAction_155() {
      return handleAction_154();
    }
    class _0x358bfd {
      constructor() {
        this.players = [];
      }
      getPlayersForRendering() {
        const varData_2406 = [];
        const varData_2407 = this.players.sort((param_1, param_2) => {
          if (Math.abs(param_2.sY - param_1.sY) < 0.005) {
            return 0;
          }
          return param_2.sY - param_1.sY;
        });
        const varData_2408 = varData_2407[0].sY;
        let varData_2409 = 0;
        for (const varData_2410 of varData_2407) {
          var varData_2411 = {
            x: varData_2410.sX,
            y: varData_2408 - varData_2409,
            text: varData_2410.text
          };
          varData_2406.push(varData_2411);
          varData_2409 += handleAction_155();
        }
        if (varData_2406.length > varData_2404) {
          const varData_2412 = varData_2406.splice(varData_2404);
          const varData_2413 = varData_2412[0];
          const varData_2414 = varData_2406[varData_2406.length - 1];
          var varData_2415 = {
            x: varData_2414.x,
            y: varData_2413.y,
            text: varData_2412.length + " Others..."
          };
          varData_2406.push(varData_2415);
        }
        return varData_2406;
      }
      addPlayer(param_1) {
        this.players.push(param_1);
        if (!this.minX || param_1.sX < this.minX) {
          this.minX = param_1.sX;
        }
        if (!this.maxX || param_1.sX + param_1.textWidth > this.maxX) {
          this.maxX = param_1.sX + param_1.textWidth;
        }
        if (!this.maxY || param_1.sY > this.maxY) {
          this.maxY = param_1.sY;
        }
        this.minY = this.maxY - this.height();
      }
      merge(param_1) {
        const varData_2416 = new _0x358bfd();
        param_1.players.forEach(param_1_1 => varData_2416.addPlayer(param_1_1));
        this.players.forEach(param_1_1 => varData_2416.addPlayer(param_1_1));
        return varData_2416;
      }
      isPlayerOverlapping(param_1) {
        return !(param_1.sX > this.maxX) && !(param_1.sX + param_1.textWidth < this.minX) && !(param_1.sY > this.maxY) && !(param_1.sY + handleAction_154() < this.minY);
      }
      isStackOverlapping(param_1) {
        return !(param_1.minX > this.maxX) && !(param_1.maxX < this.minX) && !(param_1.minY > this.maxY) && !(param_1.maxY < this.minY);
      }
      height() {
        const varData_2417 = Math.min(varData_2404 + 1, this.players.length);
        return (handleAction_154() + handleAction_155() / 2) * varData_2417;
      }
    }
    ;
    const dataMap_4 = new Map();
    let varData_2418 = [];
    let varData_2419 = null;
    let isDisabled_7 = false;
    function handleAction_156(param_1) {
      var varData_2420 = {
        short: true,
        sprite: 1,
        category: 7,
        color: 1,
        heading: true,
        text: param_1,
        route: null,
        scale: 1
      };
      const varData_2421 = varData_2420;
      return varData_2421;
    }
    function handleAction_157(param_1, param_2) {
      clearTick(varData_2419);
      handleAction_165();
      isDisabled_7 = param_2;
      if (param_1) {
        varData_2419 = setTick(() => {
          handleAction_160();
        });
        handleAction_167();
      }
    }
    function handleAction_158(param_1, param_2, param_3, param_4) {
      SetTextFont(0);
      SetTextProportional(true);
      SetTextScale(0, param_4);
      SetTextColour(255, 0, 0, 255);
      SetTextDropshadow(0, 0, 0, 0, 55);
      SetTextEdge(2, 0, 0, 0, 150);
      SetTextDropShadow();
      SetTextOutline();
      SetTextEntry("STRING");
      SetTextCentre(true);
      AddTextComponentString(param_3);
      DrawText(param_1, param_2);
    }
    function handleAction_159(param_1) {
      const varData_2422 = param_1.filter(param_1_1 => {
        const [_0x1e1337, _0x4bac11, _0x130779] = World3dToScreen2d(param_1_1.x, param_1_1.y, param_1_1.z);
        if (!_0x1e1337) {
          return false;
        }
        param_1_1.sX = _0x4bac11;
        param_1_1.sY = _0x130779;
        if (!dataMap_4.has(param_1_1.text)) {
          dataMap_4.set(param_1_1.text, varData_2212(param_1_1.text, 0, varData_2403));
        }
        param_1_1.textWidth = dataMap_4.get(param_1_1.text);
        return true;
      });
      const varData_2423 = [];
      for (const varData_2424 of varData_2422) {
        let varData_2425 = null;
        for (const varData_2426 of varData_2423) {
          if (varData_2426.isPlayerOverlapping(varData_2424)) {
            varData_2425 = varData_2426;
            break;
          }
        }
        if (varData_2425) {
          varData_2425.addPlayer(varData_2424);
        } else {
          varData_2425 = new _0x358bfd();
          varData_2425.addPlayer(varData_2424);
          varData_2423.push(varData_2425);
        }
      }
      const varData_2427 = param_1_1 => {
        param_1_1 = [...param_1_1];
        const varData_2428 = [];
        while (param_1_1.length > 0) {
          let varData_2429 = param_1_1.pop();
          for (let loopIdx = 0; loopIdx < param_1_1.length; loopIdx++) {
            const varData_2430 = param_1_1[loopIdx];
            if (varData_2429.isStackOverlapping(varData_2430)) {
              param_1_1.splice(loopIdx, 1);
              varData_2429 = varData_2429.merge(varData_2430);
              break;
            }
          }
          varData_2428.push(varData_2429);
        }
        return varData_2428;
      };
      let varData_2431 = varData_2423;
      while (true) {
        varData_2431 = varData_2427(varData_2431);
        const varData_2432 = varData_2427(varData_2431);
        if (varData_2431.length === varData_2432.length) {
          break;
        } else {
          varData_2431 = varData_2432;
        }
      }
      return varData_2431;
    }
    function handleAction_160() {
      const playerPed = PlayerPedId();
      const varData_2433 = [];
      for (const varData_2434 in varData_2399) {
        const varData_2435 = varData_2399[varData_2434];
        if (varData_2435.inScope) {
          const targetPlayer = GetPlayerFromServerId(+varData_2435.player);
          const ped = GetPlayerPed(targetPlayer);
          if (ped === playerPed) {
            continue;
          }
          const [_0x5cc4c7, _0x390b78, _0x50a5c4] = GetEntityCoords(ped, false) ?? [];
          const varData_2436 = "[" + varData_2435.player + "] - " + GetPlayerName(targetPlayer);
          var varData_2437 = {
            x: _0x5cc4c7,
            y: _0x390b78,
            z: _0x50a5c4 + 1.15,
            text: varData_2436,
            textWidth: null,
            sX: null,
            sY: null
          };
          varData_2433.push(varData_2437);
        }
      }
      const varData_2438 = handleAction_159(varData_2433);
      for (const varData_2439 of varData_2438) {
        for (const varData_2440 of varData_2439.getPlayersForRendering()) {
          handleAction_158(varData_2440.x, varData_2440.y, varData_2440.text, varData_2403);
        }
      }
    }
    async function handleAction_161(param_1) {
      if (varData_2418[param_1]) {
        varData_2418[param_1].inScope = true;
        await handleAction_129(1000);
        if (varData_2418[param_1].inScope) {
          varData_2418[param_1].onModeChange("entity");
        }
      }
    }
    async function handleAction_162(param_1) {
      if (varData_2418[param_1]) {
        varData_2418[param_1].inScope = false;
        varData_2418[param_1].onModeChange("coords");
      }
    }
    async function handleAction_163(param_1) {
      for (const varData_2441 in varData_2418) {
        const varData_2442 = varData_2418[varData_2441];
        if (varData_2442 && varData_2442.mode == "coords" && param_1.get(+varData_2441)) {
          varData_2442.onUpdateCoords(param_1.get(+varData_2441));
          if (varData_2442.entityExistLocally()) {
            varData_2442.onModeChange("entity");
          }
        }
      }
    }
    function handleAction_164(param_1) {
      varData_2418[param_1].disable();
      varData_2418[param_1] = null;
    }
    function handleAction_165() {
      for (const varData_2443 in varData_2418) {
        const varData_2444 = varData_2418[varData_2443];
        if (varData_2444) {
          handleAction_164(varData_2443);
        }
      }
      varData_2418 = [];
    }
    function handleAction_166(param_1) {
      const varData_2445 = param_1;
      const varData_2446 = handleAction_156(varData_2445);
      const varData_2447 = new _0x4659dc("player", +varData_2445, varData_2446);
      varData_2447.enable(true);
      varData_2418[varData_2445] = varData_2447;
    }
    function handleAction_167() {
      const varData_2448 = exports["np-infinity"].GetPlayerListJS();
      for (const varData_2449 in varData_2448) {
        handleAction_166("" + varData_2448[varData_2449].serverId);
      }
    }
    function handleAction_168(param_1) {
      if (isDisabled_7) {
        handleAction_166("" + param_1);
      }
    }
    function handleAction_169(param_1) {
      if (isDisabled_7) {
        handleAction_164("" + param_1);
      }
    }
    ;
    const varData_2450 = {
      name: "blips",
      value: varData_2329.junior,
      executedFuntion: async function _0x41ccef(param_1, param_2) {
        let isDisabled_8 = false;
        if (param_2.toggle != null) {
          isDisabled_8 = param_2.toggle;
        }
        handleAction_138("blips", isDisabled_8);
        handleAction_157(isDisabled_8, isDisabled_8);
        return "" + isDisabled_8 + ")";
      },
      log: "Toggled Blips",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Player Blips",
            cat: "Player",
            child: false
          },
          options: {
            bindKey: {
              value: null,
              options: []
            }
          }
        }
      },
      blockClientLog: true
    };
    ;
    var varData_2451 = {
      title: "Delete Entity",
      child: null,
      action: "",
      entityType: -1
    };
    var varData_2452 = {
      selection: varData_2451,
      adminMenu: {
        command: {
          title: "Delete Entity",
          cat: "Player",
          child: {
            inputs: ["Entity"]
          }
        },
        options: {
          bindKey: null
        }
      }
    };
    const varData_2453 = {
      name: "deleteEntity",
      value: varData_2329.admin,
      executedFuntion: async function _0x104a7c(param_1, param_2) {
        handleAction_35.g.exports["np-sync"].SyncedExecution("DeleteEntity", +param_2.Entity);
        const varData_2454 = exports["np-objects"].GetObjectByEntity(+param_2.Entity);
        if (varData_2454 != null) {
          await varData_2164.execute("np-objects:DeleteObject", varData_2454.id);
        } else {
          await handleAction_129(250);
          if (DoesEntityExist(+param_2.Entity)) {
            handleAction_35.g.exports["np-sync"].SyncedExecution("SetEntityCoords", +param_2.Entity, 0, 0, 0);
          }
          emit("np:admin:updateUI");
        }
        return "[" + param_2.Entity + "]";
      },
      log: " Deleted Entity ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: varData_2452
    };
    ;
    const varData_2455 = {
      name: "teleportMarker",
      value: varData_2329.junior,
      executedFuntion: async function _0x351a48(param_1) {
        const varData_2456 = GetFirstBlipInfoId(8);
        if (!DoesBlipExist(varData_2456)) {
          emit("DoLongHudText", "Failed to find marker.", 2);
          return "Failed to find marker";
        }
        const varData_2457 = GetBlipInfoIdCoord(varData_2456);
        const varData_2458 = new _0x50c49a(varData_2457[0], varData_2457[1], varData_2457[2] + 1);
        const playerPed = PlayerPedId();
        const coords = GetEntityCoords(playerPed, false);
        handleAction_138("lastCoords", [coords[0], coords[1], coords[2]]);
        const varData_2459 = await handleAction_137("noclip");
        FreezeEntityPosition(playerPed, true);
        SetPedCoordsKeepVehicle(playerPed, varData_2458.x, varData_2458.y, varData_2458.z + 0.5);
        let varData_2460 = GetGroundZFor_3dCoord(varData_2458.x, varData_2458.y, varData_2458.z + 1000, false);
        let varData_2461 = 100;
        while (!varData_2460[0] && varData_2461 > 0) {
          await handleAction_129(5);
          varData_2460 = GetGroundZFor_3dCoord(varData_2458.x, varData_2458.y, varData_2458.z + 1000, false);
          varData_2461--;
        }
        if (varData_2461 === 0) {
          emit("DoLongHudText", "Failed to find ground.", 2);
          if (IsEntityPositionFrozen(playerPed) && !varData_2459) {
            FreezeEntityPosition(playerPed, false);
          }
          return "Failed to find ground";
        }
        SetPedCoordsKeepVehicle(playerPed, varData_2458.x, varData_2458.y, varData_2460[1] + 1);
        if (IsEntityPositionFrozen(playerPed) && !varData_2459) {
          FreezeEntityPosition(playerPed, false);
        }
        emit("DoLongHudText", "Teleported to Marker.", 1);
        return "" + varData_2458.x + " " + varData_2458.y + " " + varData_2458.z;
      },
      log: "Teleported to Marker. ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Teleport Marker",
            cat: "Player",
            child: null
          },
          options: {
            bindKey: {
              value: null,
              options: []
            }
          }
        }
      }
    };
    ;
    let varData_2462 = null;
    async function handleAction_170(param_1) {
      if (param_1) {
        varData_2462 = setTick(() => {
          handleAction_171();
        });
      } else {
        clearTick(varData_2462);
      }
    }
    function handleAction_171() {
      if (IsPedJumping(PlayerPedId())) {
        SetPedCanRagdoll(PlayerPedId(), false);
      }
      SetSuperJumpThisFrame(PlayerId());
    }
    ;
    const varData_2463 = {
      name: "superJump",
      value: varData_2329.dev,
      executedFuntion: async function _0x3235de(param_1, param_2) {
        let isDisabled_8 = false;
        if (param_2.toggle != null) {
          isDisabled_8 = param_2.toggle;
        }
        handleAction_138("superJump", isDisabled_8);
        handleAction_170(isDisabled_8);
        return "" + isDisabled_8 + ")";
      },
      log: "SuperJummped (",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "SuperJump",
            cat: "Player",
            child: false
          },
          options: {
            bindKey: {
              value: null,
              options: []
            }
          }
        }
      },
      blockClientLog: true
    };
    ;
    const varData_2464 = {
      name: "sprint",
      value: varData_2329.junior,
      executedFuntion: async function _0x48ba3d(param_1, param_2) {
        let isDisabled_8 = false;
        if (param_2.toggle != null) {
          isDisabled_8 = param_2.toggle;
        }
        handleAction_138("sprint", isDisabled_8);
        if (isDisabled_8 && (await handleAction_137("sprintTimer")) != null) {
          return "" + isDisabled_8 + ")";
        } else if (!isDisabled_8) {
          handleAction_173();
          return "" + isDisabled_8 + ")";
        }
        await handleAction_138("sprintTimer", setInterval(handleAction_172, 10));
        async function handleAction_172() {
          RestorePlayerStamina(PlayerId(), 100);
        }
        async function handleAction_173() {
          clearInterval(await handleAction_137("sprintTimer"));
          await handleAction_138("sprintTimer", null);
          ResetPlayerStamina(PlayerId());
        }
        return "" + isDisabled_8 + ")";
      },
      log: "set unlimited sprint (",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Unlimited Sprint",
            cat: "Player",
            child: false
          },
          options: {
            bindKey: {
              value: null,
              options: []
            }
          }
        }
      },
      blockClientLog: true
    };
    ;
    var varData_2465 = {
      title: "Damage Entity",
      child: null,
      action: "",
      entityType: -1
    };
    var varData_2466 = {
      selection: varData_2465
    };
    const varData_2467 = {
      name: "damageEntity",
      value: varData_2329.junior,
      executedFuntion: async function _0x1ca3b8(param_1, param_2) {
        const varData_2468 = GetEntityType(param_2.Entity);
        switch (varData_2468) {
          case 1:
            if (IsPedAPlayer(param_2.Entity)) {
              const serverId = GetPlayerServerId(NetworkGetPlayerIndexFromPed(param_2.Entity));
              emitNet("np-admin:damagePed", serverId, 20);
            } else {
              ApplyDamageToPed(param_2.Entity, 20, true);
            }
            break;
          case 2:
            const varData_2469 = NetworkGetNetworkIdFromEntity(param_2.Entity);
            emitNet("np-admin:damageVehicle", varData_2469);
            break;
          case 3:
            const [_0x467279, _0x26a488, _0x549a56] = GetEntityCoords(param_2.Entity, false);
            AddExplosion(_0x467279, _0x26a488, _0x549a56, 70, 0.1, false, true, 0);
            emit("np:admin:updateUI");
            break;
        }
        return "[" + param_2.Entity + "]";
      },
      log: "  Damaged Entity ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: varData_2466
    };
    ;
    const varData_2470 = {
      name: "autoRefuel",
      value: varData_2329.special,
      executedFuntion: async function _0x81c88f(param_1, param_2) {
        let isDisabled_8 = false;
        if (param_2.toggle != null) {
          isDisabled_8 = param_2.toggle;
        }
        handleAction_138("autoRefuel", isDisabled_8);
        emit("carandplayerhud:godCheck", isDisabled_8);
        if (isDisabled_8 && (await handleAction_137("refuelTimer")) != null) {
          return "" + isDisabled_8 + ")";
        } else if (!isDisabled_8) {
          handleAction_175();
          return "" + isDisabled_8 + ")";
        }
        await handleAction_138("refuelTimer", setInterval(handleAction_174, 5000));
        async function handleAction_174() {
          const ped = GetPlayerPed(PlayerId());
          const currentVehicle = GetVehiclePedIsIn(ped, false);
          if (!currentVehicle || currentVehicle == 0) {
            return;
          }
          emitNet("np-admin:refuelVehicle", +NetworkGetNetworkIdFromEntity(currentVehicle));
        }
        async function handleAction_175() {
          clearInterval(await handleAction_137("refuelTimer"));
          await handleAction_138("refuelTimer", null);
        }
        varData_2162.emitNet("np-admin:submitAdminAction", "Toggled Auto Refuel", isDisabled_8 ? "On" : "Off");
        return "" + isDisabled_8 + ")";
      },
      log: "set Auto Refuel (",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Auto Refuel",
            cat: "Player",
            child: false
          },
          options: {
            bindKey: {
              value: null,
              options: []
            }
          }
        }
      }
    };
    ;
    const varData_2471 = {
      name: "addSyncedObjects",
      value: varData_2329.admin,
      executedFuntion: async function _0x46b5c5(param_1, param_2) {
        let varData_2472 = {};
        if (param_2.JsonText != null && param_2.JsonText.length >= 1) {
          varData_2472 = JSON.parse(param_2.JsonText);
        }
        handleAction_35.g.exports["np-objects"].PlaceAndSaveObject(GetHashKey(param_2.Model), varData_2472, {
          groundSnap: true,
          useModelOffset: true,
          adjustZ: true,
          distance: 25,
          maxDistance: 400,
          allowHousePlacement: true,
          allowGizmo: true
        });
        const coords = GetEntityCoords(PlayerPedId(), false);
        varData_2162.emitNet("np-admin:submitAdminAction", "Added synced object", param_2.Model + " at " + coords + " | JSON: (" + param_2.JsonText + ")");
        return "[" + param_2.Model + "] ... [" + param_2.JsonText + "]";
      },
      log: " Added Synced Object ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Add Synced Object",
            cat: "Utility",
            child: {
              inputs: ["Model", "JsonText"]
            }
          },
          options: {
            bindKey: null
          }
        }
      },
      closeMenu: true
    };
    ;
    const varData_2473 = {
      name: "rockstarEditor",
      value: varData_2329.dev,
      executedFuntion: async function _0x19d968(param_1, param_2) {
        emit("np-admin:editor:toggle");
        return "";
      },
      log: " Toggle Rockstar Editor ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Rockstar Editor",
            cat: "Utility"
          },
          options: {
            bindKey: null
          }
        }
      },
      closeMenu: true
    };
    ;
    const varData_2474 = {
      name: "startRecording",
      value: varData_2329.dev,
      executedFuntion: async function _0x5d4763(param_1, param_2) {
        emit("np-admin:editor:start");
        return "";
      },
      log: " Started recording ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Start recording",
            cat: "Utility"
          },
          options: {
            bindKey: null
          }
        }
      },
      closeMenu: true
    };
    ;
    const varData_2475 = {
      name: "stopRecording",
      value: varData_2329.dev,
      executedFuntion: async function _0x512cfe(param_1, param_2) {
        emit("np-admin:editor:stop");
        return "";
      },
      log: " Stopped recording ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Stop recording",
            cat: "Utility"
          },
          options: {
            bindKey: null
          }
        }
      },
      closeMenu: true
    };
    ;
    const varData_2476 = {
      name: "interiorSprint",
      value: varData_2329.dev,
      executedFuntion: async function _0x28a1c0(param_1, param_2) {
        let isDisabled_8 = false;
        if (param_2.toggle != null) {
          isDisabled_8 = param_2.toggle;
        }
        handleAction_138("interiorSprint", isDisabled_8);
        SetPedConfigFlag(PlayerPedId(), 427, isDisabled_8);
        return "" + isDisabled_8 + ")";
      },
      log: "Interior Sprint (",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Interior Sprint",
            cat: "Player",
            child: false
          },
          options: {
            bindKey: {
              value: null,
              options: []
            }
          }
        }
      },
      blockClientLog: true
    };
    ;
    const varData_2477 = [0, 1, 2, 3, 4, 5, 45, 47];
    const varData_2478 = {
      name: "popTire",
      value: varData_2329.special,
      executedFuntion: async function _0x3f961f(param_1, param_2) {
        const varData_2479 = param_2.Entity;
        if (!varData_2479 || !DoesEntityExist(varData_2479)) {
          return;
        }
        for (const varData_2480 of varData_2477) {
          if (GetTyreHealth(varData_2479, varData_2480) > 0 && !IsVehicleTyreBurst(varData_2479, varData_2480, false)) {
            exports["np-sync"].SyncedExecution("SetVehicleTyreBurst", varData_2479, varData_2480, true, 1000);
            return "";
          }
        }
        return "";
      },
      log: "Popped Tire.",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        selection: {
          title: "Pop Tire",
          child: null,
          action: "",
          entityType: 2
        }
      },
      blockClientLog: true
    };
    ;
    const varData_2481 = {
      name: "unlockDoor",
      value: varData_2329.special,
      executedFuntion: async function _0x124960(param_1, param_2) {
        const varData_2482 = handleAction_35.g.exports.doors.getDoorFromEntity(param_2.Entity);
        if (!varData_2482) {
          return;
        }
        emitNet("doors:admin:setState", varData_2482.data.uniqueId, false);
        return "Unlocked door " + varData_2482.data.uniqueId;
      },
      log: "",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        selection: {
          title: "Unlock Door",
          child: null,
          action: "",
          entityType: 3,
          lockedDoor: true
        }
      }
    };
    ;
    const varData_2483 = {
      name: "lockDoor",
      value: varData_2329.special,
      executedFuntion: async function _0x4e020f(param_1, param_2) {
        const varData_2484 = handleAction_35.g.exports.doors.getDoorFromEntity(param_2.Entity);
        if (!varData_2484) {
          return;
        }
        emitNet("doors:admin:setState", varData_2484.data.uniqueId, true);
        return "Locked door " + varData_2484.data.uniqueId;
      },
      log: "",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        selection: {
          title: "Lock Door",
          child: null,
          action: "",
          entityType: 3,
          unlockedDoor: true
        }
      }
    };
    ;
    const varData_2485 = {
      name: "toggleEngine",
      value: varData_2329.special,
      executedFuntion: async function _0x97a368(param_1, param_2) {
        const varData_2486 = param_2.Entity;
        if (!varData_2486 || !DoesEntityExist(varData_2486)) {
          return;
        }
        const varData_2487 = GetIsVehicleEngineRunning(varData_2486);
        const varData_2488 = !varData_2487;
        if (varData_2488) {
          exports["np-sync"].SyncedExecution("SetVehicleEngineOn", varData_2486, true, false, true);
        } else {
          exports["np-sync"].SyncedExecution("SetVehicleUndriveable", varData_2486, true);
          exports["np-sync"].SyncedExecution("SetVehicleEngineOn", varData_2486, false, false, true);
        }
        return varData_2488 + ").";
      },
      log: "Toggled Engine (",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        selection: {
          title: "Toggle Engine",
          child: null,
          action: "",
          entityType: 2
        }
      },
      blockClientLog: true
    };
    ;
    const varData_2489 = {
      name: "enterVehicle",
      value: varData_2329.special,
      executedFuntion: async function _0x4da2fb(param_1, param_2) {
        const varData_2490 = param_2.Entity;
        let varData_2491 = Number.parseInt(param_2.Seat);
        if (!varData_2490 || !DoesEntityExist(varData_2490)) {
          return;
        }
        if (!Number.isNaN(varData_2491) && !IsVehicleSeatFree(varData_2490, varData_2491)) {
          return "Failed to Enter Vehicle. Seat already occupied.";
        }
        if (!AreAnyVehicleSeatsFree(varData_2490)) {
          return "Failed to Enter Vehicle. No free seats.";
        }
        if (Number.isNaN(varData_2491)) {
          for (let loopIdx = -1; loopIdx <= 6; loopIdx++) {
            if (IsVehicleSeatFree(varData_2490, loopIdx)) {
              varData_2491 = loopIdx;
              break;
            }
          }
        }
        TaskWarpPedIntoVehicle(PlayerPedId(), varData_2490, varData_2491);
        return "Entered vehicle (seat=" + varData_2491 + ").";
      },
      log: "",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        selection: {
          title: "Enter Vehicle",
          child: {
            inputs: {
              Seat: "text"
            }
          },
          action: "",
          entityType: 2
        }
      },
      blockClientLog: false
    };
    ;
    const varData_2492 = param_1 => {
      return param_1 == null || param_1.substring(0, 1) == "1";
    };
    const varData_2493 = param_1 => {
      return param_1 != null && param_1.substring(1, 3) == "RN";
    };
    const varData_2494 = (param_1, _0x355333 = false) => {
      return _0x355333 || varData_2492(param_1) || varData_2493(param_1);
    };
    const varData_2495 = {
      name: "changePlate",
      value: varData_2329.dev,
      executedFuntion: async function _0xab8d06(param_1, param_2) {
        let varData_2496 = param_2.Entity;
        if (!varData_2496) {
          varData_2496 = GetVehiclePedIsIn(PlayerPedId(), false);
        }
        if (!varData_2496 || !DoesEntityExist(varData_2496) || varData_2496 == 0) {
          return;
        }
        const varData_2497 = handleAction_35.g.exports["np-vehicles"].GetVehicleIdentifier(varData_2496);
        const varData_2498 = param_2.Plate.trim().toUpperCase().replace(/\s\s+/g, " ");
        if (varData_2494(varData_2497, param_2.Temporary)) {
          SetVehicleNumberPlateText(varData_2496, varData_2498);
        } else {
          await RPC.execute("vehicles:setPlate", varData_2497, varData_2498);
        }
        return "[" + varData_2498 + "]";
      },
      log: " Changed license plate to ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Change License Plate",
            cat: "Utility",
            child: {
              inputs: ["Plate"],
              checkBox: ["Temporary"]
            }
          },
          options: {
            bindKey: null
          }
        }
      },
      blockClientLog: true,
      closeMenu: false
    };
    ;
    var varData_2499 = {
      title: "Explode Entity",
      child: null,
      action: "",
      entityType: -1
    };
    var varData_2500 = {
      selection: varData_2499
    };
    const varData_2501 = {
      name: "explodeEntity",
      value: varData_2329.special,
      executedFuntion: async function _0x1199af(param_1, param_2) {
        const varData_2502 = GetEntityType(param_2.Entity);
        switch (varData_2502) {
          case 1:
            if (IsPedAPlayer(param_2.Entity)) {
              const serverId = GetPlayerServerId(NetworkGetPlayerIndexFromPed(param_2.Entity));
              emitNet("np-admin:explodePlayer", serverId);
            } else {
              const varData_2503 = NetworkGetNetworkIdFromEntity(param_2.Entity);
              emitNet("np-admin:explodeVehicle", varData_2503);
            }
            break;
          case 2:
            const varData_2504 = NetworkGetNetworkIdFromEntity(param_2.Entity);
            emitNet("np-admin:explodeVehicle", varData_2504);
            break;
          case 3:
            const coords = GetEntityCoords(param_2.Entity, false);
            emitNet("np-admin:explodeVehicle", null, coords);
            emit("np:admin:updateUI");
            break;
        }
        return "[" + param_2.Entity + "]";
      },
      log: "  exploded Entity ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: varData_2500
    };
    ;
    var varData_2505 = {
      title: "Burn Entity",
      child: null,
      action: "",
      entityType: -1
    };
    var varData_2506 = {
      selection: varData_2505
    };
    const varData_2507 = {
      name: "burnEntity",
      value: varData_2329.special,
      executedFuntion: async function _0x64af44(param_1, param_2) {
        const varData_2508 = GetEntityType(param_2.Entity);
        switch (varData_2508) {
          case 1:
            if (IsPedAPlayer(param_2.Entity)) {
              const serverId = GetPlayerServerId(NetworkGetPlayerIndexFromPed(param_2.Entity));
              emitNet("np-admin:burnPlayer", serverId, 20);
            } else {
              const varData_2509 = NetworkGetNetworkIdFromEntity(param_2.Entity);
              emitNet("np-admin:burnEntity", varData_2509);
            }
            break;
          case 2:
            const varData_2510 = NetworkGetNetworkIdFromEntity(param_2.Entity);
            emitNet("np-admin:burnEntity", varData_2510);
            break;
        }
        return "[" + param_2.Entity + "]";
      },
      log: "  burned Entity ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: varData_2506
    };
    ;
    const varData_2511 = {
      name: "MoveObject",
      value: varData_2329.dev,
      executedFuntion: async function _0x557d70(param_1, param_2) {
        const varData_2512 = exports["np-objects"].GetObjectByEntity(+param_2.Entity);
        if (!varData_2512?.id) {
          return "Failed to move object. No synced object found for this entity.";
        }
        handleAction_35.g.exports["np-objects"].MoveObject(varData_2512.id, {
          groundSnap: true,
          useModelOffset: true,
          adjustZ: true,
          distance: 25,
          maxDistance: 400,
          allowGizmo: true,
          startPinned: true,
          startWithGizmo: true
        });
        return "Moved Object [" + varData_2512.id + "].";
      },
      log: "",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        selection: {
          title: "Move Object",
          child: null,
          action: "",
          entityType: 3,
          syncedObject: true
        }
      },
      closeMenu: true
    };
    ;
    const varData_2513 = {
      name: "ChangeObjectModel",
      value: varData_2329.dev,
      executedFuntion: async function _0x12b858(param_1, param_2) {
        const varData_2514 = exports["np-objects"].GetObjectByEntity(+param_2.Entity);
        if (!varData_2514?.id) {
          return "Failed to change model. No synced object found for this entity.";
        }
        const varData_2515 = typeof param_2.Model === "string" ? GetHashKey(param_2.Model) : param_2.Model;
        if (!param_2.Model || !IsModelValid(varData_2515)) {
          return "Failed to change model. Provided model is invalid.";
        }
        handleAction_35.g.exports["np-objects"].MoveObject(varData_2514.id, {
          groundSnap: true,
          useModelOffset: true,
          adjustZ: true,
          distance: 25,
          maxDistance: 400,
          allowGizmo: true,
          startPinned: true,
          startWithGizmo: true
        }, () => true, varData_2515);
        return "Changed Object Model [" + varData_2514.id + "].";
      },
      log: "",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        selection: {
          title: "Change Object Model",
          child: {
            inputs: {
              Model: "text"
            }
          },
          action: "",
          entityType: 3,
          syncedObject: true
        }
      },
      closeMenu: true
    };
    ;
    var varData_2516 = {
      title: "Telekinesis",
      child: null,
      action: "",
      entityType: -1
    };
    var varData_2517 = {
      selection: varData_2516
    };
    const varData_2518 = {
      name: "telekinesis",
      value: varData_2329.special,
      executedFuntion: async function _0x2fba52(param_1, param_2) {
        const varData_2519 = GetEntityType(param_2.Entity);
        const varData_2520 = NetworkGetNetworkIdFromEntity(param_2.Entity);
        switch (varData_2519) {
          case 1:
          case 2:
            emitNet("np-admin:telekinesis", varData_2520);
            break;
        }
        return "[" + param_2.Entity + "]";
      },
      log: "  used telekinesis on Entity ",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: varData_2517
    };
    ;
    const varData_2521 = {
      name: "adminMode",
      value: varData_2329.junior,
      executedFuntion: async function _0x3d55f3(param_1, param_2) {
        let isDisabled_8 = false;
        if (param_2.toggle != null) {
          isDisabled_8 = param_2.toggle;
        }
        handleAction_138("adminMode", isDisabled_8);
        handleAction_133(isDisabled_8);
        return "" + isDisabled_8 + ")";
      },
      log: "Toggled Admin Mode",
      target: false,
      canTargetAbove: false,
      isClientCommand: true,
      commandUI: {
        adminMenu: {
          command: {
            title: "Admin Mode",
            cat: "Player",
            child: false
          },
          options: {
            bindKey: {
              value: null,
              options: []
            }
          }
        }
      },
      blockClientLog: true
    };
    ;
    ;
    const varData_2522 = [];
    async function handleAction_176() {
      Object.values(varData_109).forEach(param_1 => varData_2522.push(param_1));
    }
    ;
    async function handleAction_177(param_1) {
      const playerPed = PlayerPedId();
      const varData_2523 = new _0x50c49a(param_1[0], param_1[1], param_1[2]);
      if (varData_2523.isCoordinateEqual(varData_2523, new _0x50c49a(0, 0, 0))) {
        return;
      }
      RequestCollisionAtCoord(varData_2523.x, varData_2523.y, varData_2523.z);
      SetPedCoordsKeepVehicle(playerPed, varData_2523.x, varData_2523.y, varData_2523.z);
      FreezeEntityPosition(playerPed, true);
      SetPlayerInvincible(playerPed, true);
      const varData_2524 = GetGameTimer();
      while (!HasCollisionLoadedAroundEntity(playerPed)) {
        if (GetGameTimer() - varData_2524 > 5000) {
          break;
        }
        await handleAction_129(10);
      }
      FreezeEntityPosition(playerPed, false);
      SetPlayerInvincible(playerPed, false);
    }
    ;
    let isDisabled_8 = false;
    async function handleAction_178(param_1, param_2) {
      const playerPed = PlayerPedId();
      if (!isDisabled_8) {
        isDisabled_8 = true;
        const varData_2525 = new _0x50c49a(param_1[0], param_1[1], param_1[2]);
        if (varData_2525.isCoordinateEqual(varData_2525, new _0x50c49a(0, 0, 0))) {
          return;
        }
        SetEntityCollision(playerPed, false, false);
        RequestCollisionAtCoord(varData_2525.x, varData_2525.y, varData_2525.z);
        SetEntityCoords(playerPed, varData_2525.x, varData_2525.y, varData_2525.z, false, false, false, false);
        FreezeEntityPosition(playerPed, true);
        SetPlayerInvincible(playerPed, true);
        SetEntityVisible(playerPed, false, false);
        const varData_2526 = GetGameTimer();
        let targetPlayer = GetPlayerFromServerId(param_2.TargetUser.source);
        let varData_2527 = 0;
        while (targetPlayer == -1 && varData_2527 < 200) {
          varData_2527++;
          targetPlayer = GetPlayerFromServerId(param_2.TargetUser.source);
          await handleAction_129(10);
        }
        if (varData_2527 == 200) {
          emit("DoLongHudText", "Failed To attach");
        }
        let ped = GetPlayerPed(targetPlayer);
        let isDisabled_9 = false;
        while (!HasCollisionLoadedAroundEntity(playerPed) || ped == 0) {
          if (GetGameTimer() - varData_2526 > 10000) {
            isDisabled_9 = true;
            emit("DoLongHudText", "Failed To attach");
            break;
          }
          ped = GetPlayerPed(targetPlayer);
          await handleAction_129(10);
        }
        FreezeEntityPosition(playerPed, false);
        SetPlayerInvincible(playerPed, false);
        SetEntityVisible(playerPed, true, false);
        if (!isDisabled_9 && playerPed != ped) {
          AttachEntityToEntity(playerPed, ped, 11816, 0, -1.48, -5, 0, 0, 0, false, false, false, false, 2, true);
          NetworkSetInSpectatorMode(true, ped);
        }
      } else {
        const targetPlayer = GetPlayerFromServerId(param_2.TargetUser.source);
        const ped = GetPlayerPed(targetPlayer);
        NetworkSetInSpectatorMode(false, ped);
        isDisabled_8 = false;
        DetachEntity(playerPed, true, true);
        SetEntityCollision(playerPed, true, true);
        const coords = GetEntityCoords(PlayerPedId(), true);
        SetEntityCoords(playerPed, coords[0], coords[1], coords[2] + 5, false, false, false, false);
      }
    }
    ;
    async function handleAction_179() {
      const varData_2528 = await RPC.execute("np:admin:getLockDownStats");
      const varData_2529 = varData_2528.sort((param_1, param_2) => {
        let varData_2530 = 0;
        let varData_2531 = 0;
        for (const varData_2532 of Object.values(param_1.events)) {
          varData_2530 += varData_2532;
        }
        for (const varData_2533 of Object.values(param_2.events)) {
          varData_2531 += varData_2533;
        }
        return varData_2531 - varData_2530;
      });
      const varData_2534 = [];
      for (const varData_2535 of Object.values(varData_2529)) {
        let varData_2536 = 0;
        for (const varData_2537 of Object.values(varData_2535.events)) {
          varData_2536 += varData_2537;
        }
        varData_2534.push({
          title: "Server ID: " + varData_2535.serverId,
          description: "Total Count: " + varData_2536,
          children: Object.entries(varData_2535.events).map(([_0x51048c, _0x3bee21]) => ({
            title: "Event: " + _0x51048c + " | Count: " + _0x3bee21,
            description: ""
          }))
        });
      }
      exports["np-ui"].showContextMenu(varData_2534);
    }
    ;
    async function handleAction_180() {}
    const varData_2538 = [{
      mode: 1,
      range: 0,
      priority: 1
    }, {
      mode: 2,
      range: 0,
      priority: 1
    }, {
      mode: 3,
      range: 0,
      priority: 1
    }];
    let varData_2539 = null;
    let isDisabled_9 = false;
    let varData_2540 = "unemployed";
    onNet("np-admin:runClientCommand", (param_1, param_2, param_3, param_4) => {
      handleAction_181(param_1, param_2, param_3, param_4);
    });
    onNet("np-admin:bringClient", param_1 => {
      handleAction_177(param_1);
    });
    onNet("np-admin:attachClient", (param_1, param_2) => {
      handleAction_178(param_1, param_2);
    });
    onNet("np-admin:asdasdasd", param_1 => {
      const playerId = PlayerId();
      const serverId = GetPlayerServerId(playerId);
      if (param_1[serverId]) {
        return;
      }
      TriggerEvent("np:voice:proximity:override", "gag", varData_2538);
      TriggerServerEvent("np:voice:transmission:state", -1, "gag", true, "gag");
    });
    onNet("np-admin:asdasdasf", () => {
      TriggerEvent("np:voice:proximity:override", "gag", varData_2538, -1, -1);
      TriggerServerEvent("np:voice:transmission:state", -1, "gag", false, "gag");
    });
    onNet("np-admin:mutePlayer", param_1 => {
      MumbleSetVolumeOverrideByServerId(param_1, 0);
    });
    onNet("np-admin:unmutePlayer", param_1 => {
      MumbleSetVolumeOverrideByServerId(param_1, -1);
    });
    onNet("np-admin:cloakList", (param_1, param_2, param_3) => {
      handleAction_145(param_1, param_2, param_3);
    });
    onNet("onPlayerJoining", function (param_1) {
      handleAction_161(param_1);
      handleAction_151(+param_1);
    });
    onNet("onPlayerDropped", function (param_1) {
      handleAction_162(param_1);
      handleAction_152(+param_1);
    });
    on("np:infinity:player:coords:array", param_1 => {
      if (!isDisabled_7) {
        return;
      }
      handleAction_163(handleAction_131(param_1));
    });
    on("np-admin:blip:dropped", param_1 => {
      handleAction_169(param_1);
    });
    on("np-admin:blip:ready", param_1 => {
      handleAction_168(param_1);
    });
    on("np-base:playerSpawned", async () => {
      const [_0x4dcab6, _0x2edd92] = await RPC.execute("np:admin:isAdmin");
      if (_0x4dcab6) {
        const varData_2541 = await RPC.execute("np:admin:getCommandUI");
        handleAction_185(varData_2541);
        handleAction_200();
        handleAction_122();
        handleAction_197();
        handleAction_193();
        handleAction_196();
        handleAction_198();
        handleAction_199();
        if (_0x2edd92) {
          handleAction_133(true);
        }
      }
      const varData_2542 = await RPC.execute("np:admin:getCurrentCloakList");
      handleAction_146(varData_2542);
      handleAction_150();
    });
    on("np:admin:updateUI", () => {
      handleAction_186();
    });
    onNet("np:admin:openMenu", async param_1 => {
      const varData_2543 = await RPC.execute("np:admin:getCommandUI");
      handleAction_185(varData_2543);
      handleAction_189(param_1);
    });
    async function handleAction_181(param_1, param_2, param_3, param_4) {
      if (varData_2522.length == 0) {
        handleAction_176();
      }
      for (const varData_2544 in varData_2522) {
        const varData_2545 = varData_2522[varData_2544];
        if (varData_2545.name == param_1) {
          const varData_2546 = await varData_2545.executedFuntion(param_2, param_3);
          RPC.execute("np:admin:triggerLogFromClient", param_4, varData_2546, varData_2545.blockClientLog);
          break;
        }
      }
    }
    on("np-admin:hotreload", async () => {
      const [_0x37259e, _0x3914a0] = await RPC.execute("np:admin:requestAdminPermission");
      if (_0x37259e) {
        const varData_2547 = await RPC.execute("np:admin:getCommandUI");
        handleAction_185(varData_2547);
        handleAction_200();
        await handleAction_122();
        await handleAction_197();
        await handleAction_193();
        await handleAction_196();
        await handleAction_198();
        await handleAction_199();
        await handleAction_153();
        if (_0x3914a0) {
          handleAction_133(true);
        }
      }
      handleAction_150();
    });
    onNet("np-admin:setLastVehicle", async param_1 => {
      const varData_2548 = NetworkGetEntityFromNetworkId(param_1);
      if (varData_2548 == null || varData_2548 == 0 || !varData_2548) {
        return;
      }
      await handleAction_138("lastVeh", varData_2548);
    });
    on("np-admin:enterlastVeh", async () => {
      const varData_2549 = await handleAction_137("lastVeh");
      if (varData_2549 && DoesEntityExist(varData_2549)) {
        TaskWarpPedIntoVehicle(PlayerPedId(), varData_2549, -1);
      } else {
        TriggerEvent("DoLongHudText", "Failed to find Vehicle.", 2);
      }
    });
    on("np-admin:gotolastLocation", async () => {
      const varData_2550 = await handleAction_137("lastCoords");
      const playerId = PlayerId();
      const ped = GetPlayerPed(playerId);
      if (varData_2550 && varData_2550[0]) {
        RequestCollisionAtCoord(varData_2550[0], varData_2550[1], varData_2550[2]);
        SetPedCoordsKeepVehicle(ped, varData_2550[0], varData_2550[1], varData_2550[2]);
        FreezeEntityPosition(ped, true);
        SetPlayerInvincible(ped, true);
        const varData_2551 = GetGameTimer();
        while (!HasCollisionLoadedAroundEntity(ped)) {
          if (GetGameTimer() - varData_2551 > 5000) {
            break;
          }
          await handleAction_129(10);
        }
        FreezeEntityPosition(ped, false);
        SetPlayerInvincible(ped, false);
      }
    });
    onNet("np-admin:setAdminMode", async param_1 => {
      handleAction_133(param_1);
    });
    onNet("np-admin:closeMenu", async param_1 => {
      varData_1828.execute("np-admin:closeMenu", null);
      globalThis.exports.focusmanager.SetUIFocus(false, false);
    });
    onNet("np-admin:logClient", param_1 => {
      console.log(param_1);
    });
    on("np-admin:editor:toggle", () => {
      if (varData_2539 != null) {
        clearInterval(varData_2539);
        varData_2539 = null;
        DoScreenFadeIn(1);
        return;
      }
      varData_2539 = setInterval(() => {
        if (!IsPauseMenuActive()) {
          DoScreenFadeIn(1);
          clearInterval(varData_2539);
          varData_2539 = null;
        }
      }, 10);
      ActivateRockstarEditor();
    });
    on("np-admin:editor:start", () => {
      if (isDisabled_9) {
        return emit("DoLongHudText", "Already recording.", 2);
      }
      StartRecording(1);
      isDisabled_9 = true;
    });
    on("np-admin:editor:stop", () => {
      if (!isDisabled_9) {
        return emit("DoLongHudText", "You are not recording.", 2);
      }
      isDisabled_9 = false;
      StopRecordingAndSaveClip();
    });
    onNet("np-admin:damageMe", param_1 => {
      const playerPed = PlayerPedId();
      const health = GetEntityHealth(playerPed);
      exports.wounds.setEntityHealth(playerPed, health - param_1);
    });
    onNet("np-admin:damageVeh", async param_1 => {
      const varData_2552 = NetworkGetEntityFromNetworkId(param_1);
      if (!varData_2552 || !DoesEntityExist(varData_2552)) {
        return;
      }
      PopOutVehicleWindscreen(varData_2552);
      for (let loopIdx = 0; loopIdx < 6; loopIdx++) {
        SetVehicleDoorBroken(varData_2552, loopIdx, false);
        SmashVehicleWindow(varData_2552, loopIdx);
      }
      for (let loopIdx = 0; loopIdx < 256; loopIdx++) {
        const varData_2553 = (Math.random() - 0.5) * 2;
        const varData_2554 = (Math.random() - 0.5) * 2;
        const varData_2555 = (Math.random() - 0.5) * 2;
        SetVehicleDamage(varData_2552, varData_2553, varData_2554, varData_2555, 300, 100, true);
        await handleAction_129(1);
      }
    });
    onNet("np-admin:explodeVeh", async (param_1, param_2) => {
      if (param_2) {
        AddExplosion(param_2[0], param_2[1], param_2[2], 5, 10, true, false, 1);
      }
      const varData_2556 = NetworkGetEntityFromNetworkId(param_1);
      if (!varData_2556 || !DoesEntityExist(varData_2556)) {
        return;
      }
      param_2 = GetEntityCoords(varData_2556, false);
      AddExplosion(param_2[0], param_2[1], param_2[2], 5, 10, true, false, 1);
    });
    onNet("np-admin:explodeMe", () => {
      const coords = GetEntityCoords(PlayerPedId(), false);
      AddExplosion(coords[0], coords[1], coords[2], 5, 10, true, false, 1);
    });
    onNet("np-admin:burnMe", async () => {
      const playerPed = PlayerPedId();
      StartEntityFire(playerPed);
      await handleAction_129(2500);
      StopEntityFire(playerPed);
    });
    onNet("np-admin:burnEnt", async param_1 => {
      const varData_2557 = NetworkGetEntityFromNetworkId(param_1);
      if (!varData_2557 || !DoesEntityExist(varData_2557)) {
        return;
      }
      StartEntityFire(varData_2557);
      await handleAction_129(2500);
      StopEntityFire(varData_2557);
    });
    varData_2162.onNet("np-admin:toggleGodMode", (param_1, param_2) => {
      varData_2340(param_1, param_2, true);
    });
    varData_2162.onNet("np-admin:openInventory", async param_1 => {
      if (!param_1) {
        return;
      }
      if (!isDisabled_3) {
        TriggerEvent("DoLongHudText", "Must be in admin mode.", 2);
        return;
      }
      const varData_2558 = await RPC.execute("np:admin:isAdmin", "junior");
      if (!varData_2558 || !varData_2558[0]) {
        TriggerEvent("DoLongHudText", "Invalid rank.", 2);
        return;
      }
      varData_1835.OpenInventory([param_1], true);
    });
    varData_2162.onNet("np-admin:printToConsole", param_1 => {
      if (!param_1) {
        return;
      }
      console.log(param_1);
      TriggerEvent("DoLongHudText", "Data output to your F8 console log.", 1);
    });
    onNet("jobmanager:playerBecameJob", param_1 => {
      varData_2540 = param_1;
    });
    varData_2162.onNet("np-admin:showLockdownStats", () => {
      handleAction_179();
    });
    varData_1677.Sync("IsAdminMode", () => isDisabled_3);
    ;
    let varData_2559 = [];
    async function handleAction_182() {}
    const varData_2560 = varData_2160.cache(async () => {
      const varData_2561 = await RPC.execute("np:admin:isAdmin");
      return [true, varData_2561];
    }, {
      timeToLive: 600000
    });
    const varData_2562 = async () => {
      return (await varData_2560.get())[0];
    };
    const varData_2563 = async () => {
      return (await varData_2560.get())[1];
    };
    function handleAction_183() {
      if (adminMode) {
        exitAdminMode();
        return;
      }
    }
    async function handleAction_184() {
      if (await varData_2562()) {
        const varData_2564 = await handleAction_124("openDefaultMenu");
        const varData_2565 = await RPC.execute("np:admin:getCommandUI");
        handleAction_185(varData_2565);
        if (varData_2564.data) {
          handleAction_189(2);
        } else {
          handleAction_189(3);
        }
      }
    }
    RegisterCommand("+openAdminMenu", () => handleAction_184(), false);
    RegisterCommand("-openAdminMenu", () => {}, false);
    RegisterCommand("admin", () => handleAction_184(), false);
    RegisterCommand("adminmenu", () => handleAction_184(), false);
    RegisterCommand("menu", () => handleAction_184(), false);
    RegisterCommand("+adminSelect", () => varData_2230(), false);
    RegisterCommand("-adminSelect", () => varData_2283(), false);
    RegisterCommand("+adminDeleteEntity", () => handleAction_135(), false);
    RegisterCommand("-adminDeleteEntity", () => {}, false);
    RegisterCommand("np-admin:toggleGodMode", (param_1, param_2) => {
      varData_2162.emitNet("np-admin:giveGodMode", param_2[0], param_2[1], param_2[2]);
    }, false);
    RegisterCommand("np-admin:toggleBlur", (param_1, param_2) => {
      varData_2162.emitNet("np-admin:toggleBlur", param_2[0]);
    }, false);
    RegisterCommand("np-admin:selectClosestObject", (param_1, param_2) => {
      let varData_2566 = Math.trunc(Number(param_2[0]));
      if (Number.isNaN(varData_2566)) {
        varData_2566 = GetHashKey(param_2[0]);
      }
      varData_2286(varData_2566);
    }, false);
    handleAction_35.g.exports["np-keybinds"].registerKeyMapping("", "zzAdmin", "Delete Target", "+adminDeleteEntity", "-adminDeleteEntity", "");
    handleAction_35.g.exports["np-keybinds"].registerKeyMapping("", "zzAdmin", "Select Target", "+adminSelect", "-adminSelect", "");
    handleAction_35.g.exports["np-keybinds"].registerKeyMapping("", "zzAdmin", "Open Menu", "+openAdminMenu", "-openAdminMenu", "");
    async function handleAction_185(param_1) {
      varData_2559 = param_1;
    }
    function handleAction_186() {
      SetEntityDrawOutline(varData_2222?.entity?.handle, false);
      varData_1828.execute("np-admin:closeMenu", null);
      globalThis.exports.focusmanager.SetUIFocus(false, false);
      handleAction_35.g.exports["np-selector"].deselect();
    }
    on("np-config:configLoaded", (param_1, param_2) => {
      if (param_1 !== "np-admin") {
        return;
      }
      varData_2560.reset();
      emitNet("np-commands:buildCommands", varData_2540);
    });
    ;
    let varData_2567 = [];
    let varData_2568 = [];
    let varData_2569 = [];
    let varData_2570 = [];
    let varData_2571 = [];
    let varData_2572 = [];
    let varData_2573 = [];
    let varData_2574 = [];
    let varData_2575 = [];
    let varData_2576 = [];
    let isDisabled_10 = false;
    async function handleAction_187() {
      globalThis.exports.focusmanager.RegisterFocusHandler((param_1, param_2) => {
        if (param_2) {
          SetCursorLocation(0.5, 0.5);
        }
        SetNuiFocus(param_1, param_2);
      });
    }
    varData_1828.register("np-admin:adminMenu", async param_1 => {
      let varData_2577 = undefined;
      switch (param_1.action) {
        case "updatePlayerLogs":
          varData_2577 = await handleAction_188(param_1.searchParam);
          break;
        case "updateOptions":
          handleAction_123(param_1.options);
          break;
        case "updateKeybinds":
          handleAction_126(param_1.keyBinds);
          break;
        case "updateFavCommands":
          handleAction_128(param_1.favCommands);
          break;
        case "getDefinedNames":
          await handleAction_190(param_1.playerList);
          break;
        case "updateCommandState":
          RPC.execute("np:admin:runCommandFromClient", param_1.commandAction, param_1.commandData);
          break;
        case "toggleAdminMode":
          handleAction_133(!isDisabled_3);
          break;
        case "runEvent":
          emit(param_1.event);
          break;
        case "clearDefinedNames":
          varData_2567 = [];
          break;
      }
      return varData_2577;
    });
    varData_1828.register("np-admin:close", async () => {
      globalThis.exports.focusmanager.SetUIFocus(false, false);
    });
    varData_1828.register("np-admin:runCommandMenu", async param_1 => {
      RPC.execute("np:admin:runCommandFromClient", param_1.action, param_1.data);
    });
    async function handleAction_188(param_1) {
      const varData_2578 = await RPC.execute("np:admin:getPlayerLogs", param_1);
      return varData_2578;
    }
    const varData_2579 = varData_2160.cache(async () => {
      const varData_2580 = await RPC.execute("np:admin:getPlayerList");
      return [true, varData_2580];
    }, {
      timeToLive: 30000
    });
    const varData_2581 = varData_2160.cache(async () => {
      const varData_2582 = await RPC.execute("np:admin:getBannedPlayers");
      return [true, varData_2582];
    }, {
      timeToLive: 60000
    });
    async function handleAction_189(param_1) {
      handleAction_125();
      const varData_2583 = [];
      for (const varData_2584 in varData_2559) {
        const varData_2585 = varData_2559[varData_2584];
        const varData_2586 = varData_2585.adminMenu;
        if (varData_2586 && varData_2586.command && (varData_2586.command.child == false || varData_2586.command.child == true)) {
          const varData_2587 = handleAction_137(varData_2586.command.action);
          if (varData_2587 == null || !varData_2587) {
            handleAction_138(varData_2586.command.action, false);
          }
          varData_2559[varData_2584].adminMenu.command.child = handleAction_137(varData_2586.command.action);
        }
        varData_2583.push(varData_2585.adminMenu);
      }
      const varData_2588 = varData_2579.get();
      const varData_2589 = handleAction_122();
      const varData_2590 = handleAction_197();
      const varData_2591 = handleAction_193();
      const varData_2592 = await handleAction_194();
      const varData_2593 = handleAction_198();
      const varData_2594 = handleAction_199();
      const varData_2595 = handleAction_127();
      const varData_2596 = varData_2581.get();
      const varData_2597 = await handleAction_196();
      const varData_2598 = handleAction_201();
      const varData_2599 = await handleAction_195();
      const varData_2600 = await handleAction_202();
      const varData_2601 = await Promise.all([varData_2588, varData_2589, varData_2590, varData_2591, varData_2593, varData_2594, varData_2595, varData_2596, varData_2597, varData_2592, varData_2598, varData_2599, varData_2600]);
      const varData_2602 = {
        playerData: varData_2601[0] ? handleAction_191(varData_2601[0].CurrentPlayers) : [],
        options: varData_2601[1],
        menuData: varData_2583,
        playerLogs: null,
        adminMode: isDisabled_3,
        itemList: varData_2601[2],
        vehicleList: varData_2601[3],
        jobList: varData_2601[4],
        licenseList: varData_2601[5],
        favCommands: varData_2601[6],
        disconnectedPlayers: varData_2601[0] ? varData_2601[0].Disconnected : [],
        bannedList: varData_2601[7],
        garageList: varData_2601[8],
        vehiclePresetList: varData_2601[9],
        contactList: varData_2601[10],
        housingList: varData_2601[11],
        restaurantList: varData_2601[12]
      };
      varData_1828.execute("np-admin:openMenu", varData_2602, param_1);
      globalThis.exports.focusmanager.SetUIFocus(true, true);
      if (varData_2567.length != 0) {
        await handleAction_190(varData_2567);
      }
    }
    async function handleAction_190(param_1) {
      if (param_1 == "empty") {
        varData_2567 = null;
        return;
      }
      const varData_2603 = await RPC.execute("np:admin:getDefinedNames", param_1);
      varData_2567 = param_1;
    }
    function handleAction_191(param_1) {
      if (!Array.isArray(param_1)) return [];
      return param_1.map(param_1_1 => {
        param_1_1.aggKey = param_1_1.serverID + " " + param_1_1.name;
        return param_1_1;
      });
    }
    async function handleAction_192(param_1) {
      if (!isDisabled_3) {
        return;
      }
      if (varData_2559 == null || varData_2559.length <= 0) {
        const varData_2604 = await RPC.execute("np:admin:getCommandUI");
        await handleAction_185(varData_2604);
      }
      const varData_2605 = varData_2169.find(param_1_1 => param_1_1.key === param_1);
      if (varData_2605) {
        const varData_2606 = varData_2559.find(param_1_1 => param_1_1.adminMenu != null && param_1_1.adminMenu.command.title.toLowerCase() === varData_2605.parent.toLowerCase());
        if (varData_2606 == null) {
          return;
        }
        const varData_2607 = {
          toggle: !handleAction_137(varData_2606.adminMenu.command.action)
        };
        RPC.execute("np:admin:runCommandFromClient", varData_2606.adminMenu.command.action, varData_2607);
      }
    }
    async function handleAction_193() {
      if (varData_2568.length >= 1) {
        return varData_2568;
      }
      const varData_2608 = globalThis.exports.vehicles.GetVehicleNamesList();
      varData_2568 = varData_2608;
      return varData_2608;
    }
    async function handleAction_194() {
      if (varData_2569.length >= 1) {
        return varData_2569;
      }
      const varData_2609 = await RPC.execute("np-admin:fetchVehiclePresets");
      varData_2569 = varData_2609;
      return varData_2609;
    }
    async function handleAction_195() {
      if (varData_2575.length >= 1) {
        return varData_2575;
      }
      const varData_2610 = await RPC.execute("np-admin:fetchHousingNames");
      varData_2575 = varData_2610;
      return varData_2610;
    }
    async function handleAction_196() {
      if (varData_2570.length >= 1) {
        return varData_2570;
      }
      const varData_2611 = await RPC.execute("np-admin:fetchGarages");
      varData_2570 = varData_2611;
      return varData_2611;
    }
    async function handleAction_197() {
      if (varData_2571.length >= 1) {
        return varData_2571;
      }
      const varData_2612 = await globalThis.exports.inventory.GetItemList();
      varData_2571 = [];
      for (const varData_2613 of Object.values(varData_2612)) {
        var varData_2614 = {
          id: varData_2613.id,
          name: varData_2613.name
        };
        varData_2571.push(varData_2614);
        if (varData_2613.variants) {
          for (const varData_2615 in varData_2613.variants) {
            const varData_2616 = varData_2613.variants[varData_2615];
            var varData_2617 = {
              id: varData_2613.id + "/" + varData_2615,
              name: varData_2616.name ?? varData_2613.name
            };
            varData_2571.push(varData_2617);
          }
        }
      }
      return varData_2571;
    }
    async function handleAction_198() {
      if (varData_2572.length >= 1) {
        return varData_2572;
      }
      const varData_2618 = handleAction_35.g.exports.jobmanager.GetValidJobs();
      varData_2572 = varData_2618.map(param_1 => {
        var varData_2619 = {
          job: param_1,
          name: param_1
        };
        return varData_2619;
      });
      return varData_2572;
    }
    async function handleAction_199() {
      if (varData_2573.length >= 1) {
        return varData_2573;
      }
      const varData_2620 = [];
      for (const varData_2621 in varData_2167) {
        const varData_2622 = varData_2167[varData_2621];
        if (varData_2622) {
          var varData_2623 = {
            licenseID: varData_2621,
            name: varData_2622
          };
          varData_2620.push(varData_2623);
        }
      }
      varData_2573 = varData_2620;
      return varData_2573;
    }
    function handleAction_200() {
      if (isDisabled_10) {
        return;
      }
      handleAction_125();
      handleAction_193();
      for (const varData_2624 in varData_2169) {
        const varData_2625 = varData_2169[varData_2624];
        if (varData_2625.key != "none") {
          RegisterCommand("+" + varData_2625.key, () => handleAction_192(varData_2625.key), false);
          RegisterCommand("-" + varData_2625.key, () => {}, false);
          handleAction_35.g.exports["np-keybinds"].registerKeyMapping("", "zzAdmin", varData_2625.key, "+" + varData_2625.key, "-" + varData_2625.key, "");
        }
      }
      isDisabled_10 = true;
    }
    async function handleAction_201() {
      if (varData_2574.length >= 1) {
        return varData_2574;
      }
      const varData_2626 = await RPC.execute("np-admin:fetchContacts");
      varData_2574 = varData_2626;
      return varData_2626;
    }
    async function handleAction_202() {
      if (varData_2576.length >= 1) {
        return varData_2576;
      }
      const varData_2627 = await RPC.execute("np:admin:fetchRestaurants");
      varData_2576 = varData_2627;
      return varData_2627;
    }
    ;
    async function handleAction_203() {
      await handleAction_182();
      await handleAction_180();
      await handleAction_187();
    }
    ;
    const varData_2628 = new varData_2155({
      codename: "admin",
      version: "1.0.0"
    });
    const resourceName_1 = GetCurrentResourceName();
    on("onClientResourceStart", async param_1 => {
      if (param_1 !== resourceName_1) {
        return;
      }
      await handleAction_203();
    });
  })();
})();