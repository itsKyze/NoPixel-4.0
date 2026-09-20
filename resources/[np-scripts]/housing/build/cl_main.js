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
          var strBuffer = "";
          var numericVal2 = 0;
          var numericVal_12 = 0;
          while (numericVal2 < inputLength) {
            numericVal_12 = numericVal_12 * 256 + inputBytes[numericVal2++];
            if (numericVal2 % 4 === 0) {
              var numericVal_22 = 52200625;
              while (numericVal_22 >= 1) {
                var varData_4 = Math.floor(numericVal_12 / numericVal_22) % 85;
                strBuffer += z85Alphabet[varData_4];
                numericVal_22 /= 85;
              }
              numericVal_12 = 0;
            }
          }
          return strBuffer;
        }
        function z85Decode(encodedString, encodedString_1) {
          var varData_5 = encodedString.length;
          if (varData_5 % 5 !== 0) {
            throw new Error("z85_decode: invalid input length (multiple of 5 expected)");
          }
          if (typeof encodedString_1 === "undefined") {
            encodedString_1 = new Array(varData_5 * 4 / 5);
          }
          var numericVal2 = 0;
          var numericVal_12 = 0;
          var numericVal_22 = 0;
          while (numericVal2 < varData_5) {
            var varData_6 = encodedString.charCodeAt(numericVal2++) - 32;
            if (varData_6 < 0 || varData_6 >= z85DecoderTable.length) {
              break;
            }
            numericVal_22 = numericVal_22 * 85 + z85DecoderTable[varData_6];
            if (numericVal2 % 5 === 0) {
              var numericVal_32 = 16777216;
              while (numericVal_32 >= 1) {
                encodedString_1[numericVal_12++] = Math.trunc(numericVal_22 / numericVal_32 % 256);
                numericVal_32 /= 256;
              }
              numericVal_22 = 0;
            }
          }
          return encodedString_1;
        }
        function handleAction_4(param_1_1, param_2_1) {
          var varData_7 = {
            ibits: 8,
            obits: 8,
            obigendian: true
          };
          for (var varData_8 in param_2_1) {
            if (typeof varData_7[varData_8] !== "undefined") {
              varData_7[varData_8] = param_2_1[varData_8];
            }
          }
          var itemList = [];
          var numericVal2 = 0;
          var varData_9;
          var varData_10;
          var numericVal_12 = 0;
          var varData_11;
          var numericVal_22 = 0;
          var varData_12 = param_1_1.length;
          while (true) {
            if (numericVal_12 === 0) {
              varData_10 = param_1_1.charCodeAt(numericVal2++);
            }
            varData_9 = varData_10 >> varData_7.ibits - (numericVal_12 + 8) & 255;
            numericVal_12 = (numericVal_12 + 8) % varData_7.ibits;
            if (varData_7.obigendian) {
              if (numericVal_22 === 0) {
                varData_11 = varData_9 << varData_7.obits - 8;
              } else {
                varData_11 |= varData_9 << varData_7.obits - 8 - numericVal_22;
              }
            } else if (numericVal_22 === 0) {
              varData_11 = varData_9;
            } else {
              varData_11 |= varData_9 << numericVal_22;
            }
            numericVal_22 = (numericVal_22 + 8) % varData_7.obits;
            if (numericVal_22 === 0) {
              itemList.push(varData_11);
              if (numericVal2 >= varData_12) {
                break;
              }
            }
          }
          return itemList;
        }
        function handleAction_5(param_1_1, param_2_1) {
          var varData_13 = {
            ibits: 32,
            ibigendian: true
          };
          for (var varData_14 in param_2_1) {
            if (typeof varData_13[varData_14] !== "undefined") {
              varData_13[varData_14] = param_2_1[varData_14];
            }
          }
          var strBuffer = "";
          var numericVal2 = 4294967295;
          if (varData_13.ibits < 32) {
            numericVal2 = (1 << varData_13.ibits) - 1;
          }
          var varData_15 = param_1_1.length;
          for (var numericVal_12 = 0; numericVal_12 < varData_15; numericVal_12++) {
            var varData_16 = param_1_1[numericVal_12] & numericVal2;
            for (var numericVal_22 = 0; numericVal_22 < varData_13.ibits; numericVal_22 += 8) {
              if (varData_13.ibigendian) {
                strBuffer += String.fromCharCode(varData_16 >> varData_13.ibits - 8 - numericVal_22 & 255);
              } else {
                strBuffer += String.fromCharCode(varData_16 >> numericVal_22 & 255);
              }
            }
          }
          return strBuffer;
        }
        var numericVal = 8;
        var numericVal_1 = 8;
        var numericVal_2 = 256;
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
          var varData_17 = handleAction_7();
          for (var numericVal_32 = 0; numericVal_32 < numericVal; numericVal_32++) {
            varData_17[numericVal_32] = Math.floor(param_1_1 % numericVal_2);
            param_1_1 /= numericVal_2;
          }
          return varData_17;
        }
        function handleAction_10(param_1_1) {
          var numericVal_32 = 0;
          for (var loopIdx = numericVal - 1; loopIdx >= 0; loopIdx--) {
            numericVal_32 *= numericVal_2;
            numericVal_32 += param_1_1[loopIdx];
          }
          return Math.floor(numericVal_32);
        }
        function handleAction_11(param_1_1, param_2_1) {
          var numericVal_32 = 0;
          for (var numericVal_42 = 0; numericVal_42 < numericVal; numericVal_42++) {
            numericVal_32 += param_1_1[numericVal_42] + param_2_1[numericVal_42];
            param_1_1[numericVal_42] = Math.floor(numericVal_32 % numericVal_2);
            numericVal_32 = Math.floor(numericVal_32 / numericVal_2);
          }
          return numericVal_32;
        }
        function handleAction_12(param_1_1, param_2_1) {
          var numericVal_32 = 0;
          for (var numericVal_42 = 0; numericVal_42 < numericVal; numericVal_42++) {
            numericVal_32 += param_1_1[numericVal_42] * param_2_1;
            param_1_1[numericVal_42] = Math.floor(numericVal_32 % numericVal_2);
            numericVal_32 = Math.floor(numericVal_32 / numericVal_2);
          }
          return numericVal_32;
        }
        function handleAction_13(param_1_1, param_2_1) {
          var varData_18;
          var varData_19;
          var varData_20 = new Array(numericVal + numericVal);
          for (varData_18 = 0; varData_18 < numericVal + numericVal; varData_18++) {
            varData_20[varData_18] = 0;
          }
          var varData_21;
          for (varData_18 = 0; varData_18 < numericVal; varData_18++) {
            varData_21 = 0;
            for (varData_19 = 0; varData_19 < numericVal; varData_19++) {
              varData_21 += param_1_1[varData_18] * param_2_1[varData_19] + varData_20[varData_18 + varData_19];
              varData_20[varData_18 + varData_19] = varData_21 % numericVal_2;
              varData_21 /= numericVal_2;
            }
            for (; varData_19 < numericVal + numericVal - varData_18; varData_19++) {
              varData_21 += varData_20[varData_18 + varData_19];
              varData_20[varData_18 + varData_19] = varData_21 % numericVal_2;
              varData_21 /= numericVal_2;
            }
          }
          for (varData_18 = 0; varData_18 < numericVal; varData_18++) {
            param_1_1[varData_18] = varData_20[varData_18];
          }
          return varData_20.slice(numericVal, numericVal);
        }
        function handleAction_14(param_1_1, param_2_1) {
          for (var numericVal_32 = 0; numericVal_32 < numericVal; numericVal_32++) {
            param_1_1[numericVal_32] &= param_2_1[numericVal_32];
          }
          return param_1_1;
        }
        function handleAction_15(param_1_1, param_2_1) {
          for (var numericVal_32 = 0; numericVal_32 < numericVal; numericVal_32++) {
            param_1_1[numericVal_32] |= param_2_1[numericVal_32];
          }
          return param_1_1;
        }
        function handleAction_16(param_1_1, param_2_1) {
          var varData_22 = handleAction_7();
          if (param_2_1 % numericVal_1 !== 0) {
            throw new Error("ui64_rorn: only bit rotations supported with a multiple of digit bits");
          }
          var roundedVal = Math.floor(param_2_1 / numericVal_1);
          for (var numericVal_32 = 0; numericVal_32 < roundedVal; numericVal_32++) {
            for (var loopIdx = numericVal - 1 - 1; loopIdx >= 0; loopIdx--) {
              varData_22[loopIdx + 1] = varData_22[loopIdx];
            }
            varData_22[0] = param_1_1[0];
            for (loopIdx = 0; loopIdx < numericVal - 1; loopIdx++) {
              param_1_1[loopIdx] = param_1_1[loopIdx + 1];
            }
            param_1_1[loopIdx] = 0;
          }
          return handleAction_10(varData_22);
        }
        function handleAction_17(param_1_1, param_2_1) {
          if (param_2_1 > numericVal * numericVal_1) {
            throw new Error("ui64_ror: invalid number of bits to shift");
          }
          var varData_23 = new Array(numericVal + numericVal);
          var varData_24;
          for (varData_24 = 0; varData_24 < numericVal; varData_24++) {
            varData_23[varData_24 + numericVal] = param_1_1[varData_24];
            varData_23[varData_24] = 0;
          }
          var roundedVal = Math.floor(param_2_1 / numericVal_1);
          var varData_25 = param_2_1 % numericVal_1;
          for (varData_24 = roundedVal; varData_24 < numericVal + numericVal - 1; varData_24++) {
            varData_23[varData_24 - roundedVal] = (varData_23[varData_24] >>> varData_25 | varData_23[varData_24 + 1] << numericVal_1 - varData_25) & (1 << numericVal_1) - 1;
          }
          varData_23[numericVal + numericVal - 1 - roundedVal] = varData_23[numericVal + numericVal - 1] >>> varData_25 & (1 << numericVal_1) - 1;
          for (varData_24 = numericVal + numericVal - 1 - roundedVal + 1; varData_24 < numericVal + numericVal; varData_24++) {
            varData_23[varData_24] = 0;
          }
          for (varData_24 = 0; varData_24 < numericVal; varData_24++) {
            param_1_1[varData_24] = varData_23[varData_24 + numericVal];
          }
          return varData_23.slice(0, numericVal);
        }
        function handleAction_18(param_1_1, param_2_1) {
          if (param_2_1 > numericVal * numericVal_1) {
            throw new Error("ui64_rol: invalid number of bits to shift");
          }
          var varData_26 = new Array(numericVal + numericVal);
          var varData_27;
          for (varData_27 = 0; varData_27 < numericVal; varData_27++) {
            varData_26[varData_27 + numericVal] = 0;
            varData_26[varData_27] = param_1_1[varData_27];
          }
          var roundedVal = Math.floor(param_2_1 / numericVal_1);
          var varData_28 = param_2_1 % numericVal_1;
          for (varData_27 = numericVal - 1 - roundedVal; varData_27 > 0; varData_27--) {
            varData_26[varData_27 + roundedVal] = (varData_26[varData_27] << varData_28 | varData_26[varData_27 - 1] >>> numericVal_1 - varData_28) & (1 << numericVal_1) - 1;
          }
          varData_26[0 + roundedVal] = varData_26[0] << varData_28 & (1 << numericVal_1) - 1;
          for (varData_27 = 0 + roundedVal - 1; varData_27 >= 0; varData_27--) {
            varData_26[varData_27] = 0;
          }
          for (varData_27 = 0; varData_27 < numericVal; varData_27++) {
            param_1_1[varData_27] = varData_26[varData_27];
          }
          return varData_26.slice(numericVal, numericVal);
        }
        function handleAction_19(param_1_1, param_2_1) {
          for (var numericVal_32 = 0; numericVal_32 < numericVal; numericVal_32++) {
            param_1_1[numericVal_32] ^= param_2_1[numericVal_32];
          }
        }
        function handleAction_20(param_1_1, param_2_1) {
          var varData_29 = (param_1_1 & 65535) + (param_2_1 & 65535);
          var varData_30 = (param_1_1 >> 16) + (param_2_1 >> 16) + (varData_29 >> 16);
          return varData_30 << 16 | varData_29 & 65535;
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
          var varData_31 = Array(80);
          var numericVal_32 = 1732584193;
          var varData_32 = -271733879;
          var varData_33 = -1732584194;
          var numericVal_42 = 271733878;
          var varData_34 = -1009589776;
          for (var numericVal_5 = 0; numericVal_5 < param_1_1.length; numericVal_5 += 16) {
            var varData_35 = numericVal_32;
            var varData_36 = varData_32;
            var varData_37 = varData_33;
            var varData_38 = numericVal_42;
            var varData_39 = varData_34;
            for (var numericVal_6 = 0; numericVal_6 < 80; numericVal_6++) {
              if (numericVal_6 < 16) {
                varData_31[numericVal_6] = param_1_1[numericVal_5 + numericVal_6];
              } else {
                varData_31[numericVal_6] = handleAction_21(varData_31[numericVal_6 - 3] ^ varData_31[numericVal_6 - 8] ^ varData_31[numericVal_6 - 14] ^ varData_31[numericVal_6 - 16], 1);
              }
              var varData_40 = handleAction_20(handleAction_20(handleAction_21(numericVal_32, 5), handleAction_23(numericVal_6, varData_32, varData_33, numericVal_42)), handleAction_20(handleAction_20(varData_34, varData_31[numericVal_6]), handleAction_24(numericVal_6)));
              varData_34 = numericVal_42;
              numericVal_42 = varData_33;
              varData_33 = handleAction_21(varData_32, 30);
              varData_32 = numericVal_32;
              numericVal_32 = varData_40;
            }
            numericVal_32 = handleAction_20(numericVal_32, varData_35);
            varData_32 = handleAction_20(varData_32, varData_36);
            varData_33 = handleAction_20(varData_33, varData_37);
            numericVal_42 = handleAction_20(numericVal_42, varData_38);
            varData_34 = handleAction_20(varData_34, varData_39);
          }
          return [numericVal_32, varData_32, varData_33, numericVal_42, varData_34];
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
          var numericVal_32 = 1732584193;
          var varData_41 = -271733879;
          var varData_42 = -1732584194;
          var numericVal_42 = 271733878;
          for (var numericVal_5 = 0; numericVal_5 < param_1_1.length; numericVal_5 += 16) {
            var varData_43 = numericVal_32;
            var varData_44 = varData_41;
            var varData_45 = varData_42;
            var varData_46 = numericVal_42;
            numericVal_32 = handleAction_28(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 0], 7, -680876936);
            numericVal_42 = handleAction_28(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 1], 12, -389564586);
            varData_42 = handleAction_28(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 2], 17, 606105819);
            varData_41 = handleAction_28(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 3], 22, -1044525330);
            numericVal_32 = handleAction_28(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 4], 7, -176418897);
            numericVal_42 = handleAction_28(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 5], 12, 1200080426);
            varData_42 = handleAction_28(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 6], 17, -1473231341);
            varData_41 = handleAction_28(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 7], 22, -45705983);
            numericVal_32 = handleAction_28(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 8], 7, 1770035416);
            numericVal_42 = handleAction_28(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 9], 12, -1958414417);
            varData_42 = handleAction_28(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 10], 17, -42063);
            varData_41 = handleAction_28(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 11], 22, -1990404162);
            numericVal_32 = handleAction_28(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 12], 7, 1804603682);
            numericVal_42 = handleAction_28(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 13], 12, -40341101);
            varData_42 = handleAction_28(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 14], 17, -1502002290);
            varData_41 = handleAction_28(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 15], 22, 1236535329);
            numericVal_32 = handleAction_29(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 1], 5, -165796510);
            numericVal_42 = handleAction_29(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 6], 9, -1069501632);
            varData_42 = handleAction_29(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 11], 14, 643717713);
            varData_41 = handleAction_29(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 0], 20, -373897302);
            numericVal_32 = handleAction_29(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 5], 5, -701558691);
            numericVal_42 = handleAction_29(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 10], 9, 38016083);
            varData_42 = handleAction_29(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 15], 14, -660478335);
            varData_41 = handleAction_29(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 4], 20, -405537848);
            numericVal_32 = handleAction_29(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 9], 5, 568446438);
            numericVal_42 = handleAction_29(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 14], 9, -1019803690);
            varData_42 = handleAction_29(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 3], 14, -187363961);
            varData_41 = handleAction_29(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 8], 20, 1163531501);
            numericVal_32 = handleAction_29(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 13], 5, -1444681467);
            numericVal_42 = handleAction_29(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 2], 9, -51403784);
            varData_42 = handleAction_29(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 7], 14, 1735328473);
            varData_41 = handleAction_29(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 12], 20, -1926607734);
            numericVal_32 = handleAction_30(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 5], 4, -378558);
            numericVal_42 = handleAction_30(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 8], 11, -2022574463);
            varData_42 = handleAction_30(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 11], 16, 1839030562);
            varData_41 = handleAction_30(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 14], 23, -35309556);
            numericVal_32 = handleAction_30(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 1], 4, -1530992060);
            numericVal_42 = handleAction_30(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 4], 11, 1272893353);
            varData_42 = handleAction_30(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 7], 16, -155497632);
            varData_41 = handleAction_30(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 10], 23, -1094730640);
            numericVal_32 = handleAction_30(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 13], 4, 681279174);
            numericVal_42 = handleAction_30(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 0], 11, -358537222);
            varData_42 = handleAction_30(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 3], 16, -722521979);
            varData_41 = handleAction_30(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 6], 23, 76029189);
            numericVal_32 = handleAction_30(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 9], 4, -640364487);
            numericVal_42 = handleAction_30(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 12], 11, -421815835);
            varData_42 = handleAction_30(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 15], 16, 530742520);
            varData_41 = handleAction_30(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 2], 23, -995338651);
            numericVal_32 = handleAction_31(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 0], 6, -198630844);
            numericVal_42 = handleAction_31(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 7], 10, 1126891415);
            varData_42 = handleAction_31(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 14], 15, -1416354905);
            varData_41 = handleAction_31(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 5], 21, -57434055);
            numericVal_32 = handleAction_31(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 12], 6, 1700485571);
            numericVal_42 = handleAction_31(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 3], 10, -1894986606);
            varData_42 = handleAction_31(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 10], 15, -1051523);
            varData_41 = handleAction_31(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 1], 21, -2054922799);
            numericVal_32 = handleAction_31(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 8], 6, 1873313359);
            numericVal_42 = handleAction_31(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 15], 10, -30611744);
            varData_42 = handleAction_31(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 6], 15, -1560198380);
            varData_41 = handleAction_31(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 13], 21, 1309151649);
            numericVal_32 = handleAction_31(numericVal_32, varData_41, varData_42, numericVal_42, param_1_1[numericVal_5 + 4], 6, -145523070);
            numericVal_42 = handleAction_31(numericVal_42, numericVal_32, varData_41, varData_42, param_1_1[numericVal_5 + 11], 10, -1120210379);
            varData_42 = handleAction_31(varData_42, numericVal_42, numericVal_32, varData_41, param_1_1[numericVal_5 + 2], 15, 718787259);
            varData_41 = handleAction_31(varData_41, varData_42, numericVal_42, numericVal_32, param_1_1[numericVal_5 + 9], 21, -343485551);
            numericVal_32 = handleAction_20(numericVal_32, varData_43);
            varData_41 = handleAction_20(varData_41, varData_44);
            varData_42 = handleAction_20(varData_42, varData_45);
            numericVal_42 = handleAction_20(numericVal_42, varData_46);
          }
          return [numericVal_32, varData_41, varData_42, numericVal_42];
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
          var varData_47;
          if (param_1_1 !== void 0) {
            param_1_1 = handleAction_9(param_1_1 >>> 0);
          } else if (typeof window === "object" && typeof window.crypto === "object" && typeof window.crypto.getRandomValues === "function") {
            varData_47 = new Uint32Array(2);
            window.crypto.getRandomValues(varData_47);
            param_1_1 = handleAction_15(handleAction_9(varData_47[0] >>> 0), handleAction_17(handleAction_9(varData_47[1] >>> 0), 32));
          } else if (typeof globalThis === "object" && typeof globalThis.crypto === "object" && typeof globalThis.crypto.getRandomValues === "function") {
            varData_47 = new Uint32Array(2);
            globalThis.crypto.getRandomValues(varData_47);
            param_1_1 = handleAction_15(handleAction_9(varData_47[0] >>> 0), handleAction_17(handleAction_9(varData_47[1] >>> 0), 32));
          } else {
            param_1_1 = handleAction_9(Math.random() * 4294967295 >>> 0);
            handleAction_15(param_1_1, handleAction_17(handleAction_9((/* @__PURE__ */ new Date()).getTime()), 32));
          }
          handleAction_15(this.state, param_1_1);
          this.next();
        }
        handleAction_33.prototype.next = function() {
          var varData_48 = handleAction_8(this.state);
          handleAction_13(this.state, this.mul);
          handleAction_11(this.state, this.inc);
          var varData_49 = handleAction_8(varData_48);
          handleAction_17(varData_49, 18);
          handleAction_19(varData_49, varData_48);
          handleAction_17(varData_49, 27);
          var varData_50 = handleAction_8(varData_48);
          handleAction_17(varData_50, 59);
          handleAction_14(varData_49, this.mask);
          var varData_51 = handleAction_10(varData_50);
          var varData_52 = handleAction_8(varData_49);
          handleAction_18(varData_52, 32 - varData_51);
          handleAction_17(varData_49, varData_51);
          handleAction_19(varData_49, varData_52);
          return handleAction_10(varData_49);
        };
        handleAction_33.prototype.reseed = function(param_1_1) {
          if (typeof param_1_1 !== "string") {
            throw new Error("UUID: PCG: seed: invalid argument (string expected)");
          }
          var varData_53 = handleAction_22(handleAction_4(param_1_1, {
            ibits: 8,
            obits: 32,
            obigendian: true
          }), param_1_1.length * 8);
          for (var numericVal_32 = 0; numericVal_32 < varData_53.length; numericVal_32++) {
            handleAction_19(varData_54.state, handleAction_9(varData_53[numericVal_32] >>> 0));
          }
        };
        var varData_54 = new handleAction_33();
        handleAction_33.reseed = function(param_1_1) {
          varData_54.reseed(param_1_1);
        };
        function handleAction_34(param_1_1, param_2_1) {
          var itemList = [];
          for (var numericVal_32 = 0; numericVal_32 < param_1_1; numericVal_32++) {
            itemList[numericVal_32] = varData_54.next() % param_2_1;
          }
          return itemList;
        }
        var numericVal_3 = 0;
        var numericVal_4 = 0;
        function createUUID() {
          if (arguments.length === 1 && typeof arguments[0] === "string") {
            this.parse.apply(this, arguments);
          } else if (arguments.length >= 1 && typeof arguments[0] === "number") {
            this.make.apply(this, arguments);
          } else if (arguments.length >= 1) {
            throw new Error("UUID: constructor: invalid arguments");
          } else {
            for (var numericVal_5 = 0; numericVal_5 < 16; numericVal_5++) {
              this[numericVal_5] = 0;
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
          var varData_55;
          var varData_56 = this;
          if (param_1_1 === 1) {
            var currentDate = /* @__PURE__ */ new Date();
            var varData_57 = currentDate.getTime();
            if (varData_57 !== numericVal_3) {
              numericVal_4 = 0;
            } else {
              numericVal_4++;
            }
            numericVal_3 = varData_57;
            var varData_58 = handleAction_9(varData_57);
            handleAction_12(varData_58, 1e4);
            handleAction_11(varData_58, handleAction_6(1, 178, 29, 210, 19, 129, 64, 0));
            if (numericVal_4 > 0) {
              handleAction_11(varData_58, handleAction_9(numericVal_4));
            }
            var varData_59;
            varData_59 = handleAction_16(varData_58, 8);
            varData_56[3] = varData_59 & 255;
            varData_59 = handleAction_16(varData_58, 8);
            varData_56[2] = varData_59 & 255;
            varData_59 = handleAction_16(varData_58, 8);
            varData_56[1] = varData_59 & 255;
            varData_59 = handleAction_16(varData_58, 8);
            varData_56[0] = varData_59 & 255;
            varData_59 = handleAction_16(varData_58, 8);
            varData_56[5] = varData_59 & 255;
            varData_59 = handleAction_16(varData_58, 8);
            varData_56[4] = varData_59 & 255;
            varData_59 = handleAction_16(varData_58, 8);
            varData_56[7] = varData_59 & 255;
            varData_59 = handleAction_16(varData_58, 8);
            varData_56[6] = varData_59 & 15;
            var varData_60 = handleAction_34(2, 255);
            varData_56[8] = varData_60[0];
            varData_56[9] = varData_60[1];
            var varData_61 = handleAction_34(6, 255);
            varData_61[0] |= 1;
            varData_61[0] |= 2;
            for (varData_55 = 0; varData_55 < 6; varData_55++) {
              varData_56[10 + varData_55] = varData_61[varData_55];
            }
          } else if (param_1_1 === 4) {
            var varData_62 = handleAction_34(16, 255);
            for (varData_55 = 0; varData_55 < 16; varData_55++) {
              this[varData_55] = varData_62[varData_55];
            }
          } else if (param_1_1 === 3 || param_1_1 === 5) {
            var strBuffer = "";
            var varData_63 = typeof arguments[1] === "object" && arguments[1] instanceof createUUID ? arguments[1] : new createUUID().parse(arguments[1]);
            for (varData_55 = 0; varData_55 < 16; varData_55++) {
              strBuffer += String.fromCharCode(varData_63[varData_55]);
            }
            strBuffer += arguments[2];
            var varData_64 = param_1_1 === 3 ? handleAction_32(strBuffer) : handleAction_25(strBuffer);
            for (varData_55 = 0; varData_55 < 16; varData_55++) {
              varData_56[varData_55] = varData_64.charCodeAt(varData_55);
            }
          } else {
            throw new Error("UUID: make: invalid version");
          }
          varData_56[6] &= 15;
          varData_56[6] |= param_1_1 << 4;
          varData_56[8] &= 63;
          varData_56[8] |= 128;
          return varData_56;
        };
        createUUID.prototype.format = function(param_1_1) {
          var varData_65;
          var varData_66;
          if (param_1_1 === "z85") {
            varData_65 = z85Encode(this, 16);
          } else if (param_1_1 === "b16") {
            varData_66 = Array(32);
            handleAction_1(this, 0, 15, true, varData_66, 0);
            varData_65 = varData_66.join("");
          } else if (param_1_1 === void 0 || param_1_1 === "std") {
            varData_66 = new Array(36);
            handleAction_1(this, 0, 3, false, varData_66, 0);
            varData_66[8] = "-";
            handleAction_1(this, 4, 5, false, varData_66, 9);
            varData_66[13] = "-";
            handleAction_1(this, 6, 7, false, varData_66, 14);
            varData_66[18] = "-";
            handleAction_1(this, 8, 9, false, varData_66, 19);
            varData_66[23] = "-";
            handleAction_1(this, 10, 15, false, varData_66, 24);
            varData_65 = varData_66.join("");
          }
          return varData_65;
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
            var varData_67 = {
              nil: "00000000-0000-0000-0000-000000000000",
              "ns:DNS": "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
              "ns:URL": "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
              "ns:OID": "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
              "ns:X500": "6ba7b814-9dad-11d1-80b4-00c04fd430c8"
            };
            if (varData_67[param_1_1] !== void 0) {
              param_1_1 = varData_67[param_1_1];
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
          var varData_68 = Array(16);
          for (var numericVal_5 = 0; numericVal_5 < 16; numericVal_5++) {
            varData_68[numericVal_5] = this[numericVal_5];
          }
          return varData_68;
        };
        createUUID.prototype.import = function(param_1_1) {
          if (typeof param_1_1 !== "object" || !(param_1_1 instanceof Array)) {
            throw new Error("UUID: import: invalid argument (type Array expected)");
          }
          if (param_1_1.length !== 16) {
            throw new Error("UUID: import: invalid argument (Array of length 16 expected)");
          }
          for (var numericVal_5 = 0; numericVal_5 < 16; numericVal_5++) {
            if (typeof param_1_1[numericVal_5] !== "number") {
              throw new Error("UUID: import: invalid array element #" + numericVal_5 + " (type Number expected)");
            }
            if (!isFinite(param_1_1[numericVal_5]) || Math.floor(param_1_1[numericVal_5]) !== param_1_1[numericVal_5]) {
              throw new Error("UUID: import: invalid array element #" + numericVal_5 + " (Number with integer value expected)");
            }
            if (!(param_1_1[numericVal_5] >= 0) || !(param_1_1[numericVal_5] <= 255)) {
              throw new Error("UUID: import: invalid array element #" + numericVal_5 + " (Number with integer value in range 0...255 expected)");
            }
            this[numericVal_5] = param_1_1[numericVal_5];
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
          for (var numericVal_5 = 0; numericVal_5 < 16; numericVal_5++) {
            if (this[numericVal_5] < param_1_1[numericVal_5]) {
              return -1;
            } else if (this[numericVal_5] > param_1_1[numericVal_5]) {
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
          var varData_69 = 16 / Math.pow(2, param_1_1);
          var varData_70 = new Array(varData_69);
          for (var numericVal_5 = 0; numericVal_5 < varData_69; numericVal_5++) {
            var numericVal_6 = 0;
            for (var numericVal_7 = 0; numericVal_5 + numericVal_7 < 16; numericVal_7 += varData_69) {
              numericVal_6 ^= this[numericVal_5 + numericVal_7];
            }
            varData_70[numericVal_5] = numericVal_6;
          }
          return varData_70;
        };
        createUUID.PCG = handleAction_33;
        return createUUID;
      });
    }
  };
  var varData_71 = {};
  function handleAction_35(param_1) {
    var varData_72 = varData_71[param_1];
    if (varData_72 !== void 0) {
      return varData_72.exports;
    }
    var varData_73 = varData_71[param_1] = {
      exports: {}
    };
    varData_1[param_1].call(varData_73.exports, varData_73, varData_73.exports, handleAction_35);
    return varData_73.exports;
  }
  var varData_74 = {};
  (() => {
    "use strict";
    ;
    const varData_75 = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var varData_76 = {
      randomUUID: varData_75
    };
    const varData_77 = varData_76;
    ;
    let varData_78;
    const varData_79 = new Uint8Array(16);
    function handleAction_36() {
      if (!varData_78) {
        varData_78 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!varData_78) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return varData_78(varData_79);
    }
    ;
    const itemList = [];
    for (let numericVal2 = 0; numericVal2 < 256; ++numericVal2) {
      itemList.push((numericVal2 + 256).toString(16).slice(1));
    }
    function handleAction_37(param_1, _0xfcffd4 = 0) {
      return itemList[param_1[_0xfcffd4 + 0]] + itemList[param_1[_0xfcffd4 + 1]] + itemList[param_1[_0xfcffd4 + 2]] + itemList[param_1[_0xfcffd4 + 3]] + "-" + itemList[param_1[_0xfcffd4 + 4]] + itemList[param_1[_0xfcffd4 + 5]] + "-" + itemList[param_1[_0xfcffd4 + 6]] + itemList[param_1[_0xfcffd4 + 7]] + "-" + itemList[param_1[_0xfcffd4 + 8]] + itemList[param_1[_0xfcffd4 + 9]] + "-" + itemList[param_1[_0xfcffd4 + 10]] + itemList[param_1[_0xfcffd4 + 11]] + itemList[param_1[_0xfcffd4 + 12]] + itemList[param_1[_0xfcffd4 + 13]] + itemList[param_1[_0xfcffd4 + 14]] + itemList[param_1[_0xfcffd4 + 15]];
    }
    function createUUID(param_1, _0x34236e = 0) {
      const varData_80 = handleAction_37(param_1, _0x34236e);
      if (!validate(varData_80)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return varData_80;
    }
    const varData_81 = null;
    ;
    function createUUID_1(param_1, param_2, param_3) {
      if (varData_77.randomUUID && !param_2 && !param_1) {
        return varData_77.randomUUID();
      }
      param_1 = param_1 || {};
      const varData_82 = param_1.random || (param_1.rng || handleAction_36)();
      varData_82[6] = varData_82[6] & 15 | 64;
      varData_82[8] = varData_82[8] & 63 | 128;
      if (param_2) {
        param_3 = param_3 || 0;
        for (let numericVal2 = 0; numericVal2 < 16; ++numericVal2) {
          param_2[param_3 + numericVal2] = varData_82[numericVal2];
        }
        return param_2;
      }
      return handleAction_37(varData_82);
    }
    const varData_83 = createUUID_1;
    ;
    const varData_84 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    ;
    function handleAction_38(param_1) {
      return typeof param_1 === "string" && varData_84.test(param_1);
    }
    const varData_85 = handleAction_38;
    ;
    function createUUID_2(param_1) {
      if (!varData_85(param_1)) {
        throw TypeError("Invalid UUID");
      }
      let varData_86;
      const varData_87 = new Uint8Array(16);
      varData_87[0] = (varData_86 = parseInt(param_1.slice(0, 8), 16)) >>> 24;
      varData_87[1] = varData_86 >>> 16 & 255;
      varData_87[2] = varData_86 >>> 8 & 255;
      varData_87[3] = varData_86 & 255;
      varData_87[4] = (varData_86 = parseInt(param_1.slice(9, 13), 16)) >>> 8;
      varData_87[5] = varData_86 & 255;
      varData_87[6] = (varData_86 = parseInt(param_1.slice(14, 18), 16)) >>> 8;
      varData_87[7] = varData_86 & 255;
      varData_87[8] = (varData_86 = parseInt(param_1.slice(19, 23), 16)) >>> 8;
      varData_87[9] = varData_86 & 255;
      varData_87[10] = (varData_86 = parseInt(param_1.slice(24, 36), 16)) / 1099511627776 & 255;
      varData_87[11] = varData_86 / 4294967296 & 255;
      varData_87[12] = varData_86 >>> 24 & 255;
      varData_87[13] = varData_86 >>> 16 & 255;
      varData_87[14] = varData_86 >>> 8 & 255;
      varData_87[15] = varData_86 & 255;
      return varData_87;
    }
    const varData_88 = createUUID_2;
    ;
    function handleAction_39(param_1) {
      param_1 = unescape(encodeURIComponent(param_1));
      const itemList_12 = [];
      for (let numericVal2 = 0; numericVal2 < param_1.length; ++numericVal2) {
        itemList_12.push(param_1.charCodeAt(numericVal2));
      }
      return itemList_12;
    }
    const varData_89 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    const varData_90 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function handleAction_40(param_1, param_2, param_3) {
      function handleAction_41(param_1_1, param_2_1, param_3_1, param_4) {
        if (typeof param_1_1 === "string") {
          param_1_1 = handleAction_39(param_1_1);
        }
        if (typeof param_2_1 === "string") {
          param_2_1 = varData_88(param_2_1);
        }
        if (param_2_1?.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let varData_91 = new Uint8Array(16 + param_1_1.length);
        varData_91.set(param_2_1);
        varData_91.set(param_1_1, param_2_1.length);
        varData_91 = param_3(varData_91);
        varData_91[6] = varData_91[6] & 15 | param_2;
        varData_91[8] = varData_91[8] & 63 | 128;
        if (param_3_1) {
          param_4 = param_4 || 0;
          for (let numericVal2 = 0; numericVal2 < 16; ++numericVal2) {
            param_3_1[param_4 + numericVal2] = varData_91[numericVal2];
          }
          return param_3_1;
        }
        return handleAction_37(varData_91);
      }
      try {
        handleAction_41.name = param_1;
      } catch (err) {
      }
      handleAction_41.DNS = varData_89;
      handleAction_41.URL = varData_90;
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
      const itemList_12 = [1518500249, 1859775393, 2400959708, 3395469782];
      const itemList_22 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if (typeof param_1 === "string") {
        const varData_92 = unescape(encodeURIComponent(param_1));
        param_1 = [];
        for (let numericVal2 = 0; numericVal2 < varData_92.length; ++numericVal2) {
          param_1.push(varData_92.charCodeAt(numericVal2));
        }
      } else if (!Array.isArray(param_1)) {
        param_1 = Array.prototype.slice.call(param_1);
      }
      param_1.push(128);
      const varData_93 = param_1.length / 4 + 2;
      const varData_94 = Math.ceil(varData_93 / 16);
      const varData_95 = new Array(varData_94);
      for (let numericVal2 = 0; numericVal2 < varData_94; ++numericVal2) {
        const varData_96 = new Uint32Array(16);
        for (let numericVal_110 = 0; numericVal_110 < 16; ++numericVal_110) {
          varData_96[numericVal_110] = param_1[numericVal2 * 64 + numericVal_110 * 4] << 24 | param_1[numericVal2 * 64 + numericVal_110 * 4 + 1] << 16 | param_1[numericVal2 * 64 + numericVal_110 * 4 + 2] << 8 | param_1[numericVal2 * 64 + numericVal_110 * 4 + 3];
        }
        varData_95[numericVal2] = varData_96;
      }
      varData_95[varData_94 - 1][14] = (param_1.length - 1) * 8 / Math.pow(2, 32);
      varData_95[varData_94 - 1][14] = Math.floor(varData_95[varData_94 - 1][14]);
      varData_95[varData_94 - 1][15] = (param_1.length - 1) * 8 & -1;
      for (let numericVal2 = 0; numericVal2 < varData_94; ++numericVal2) {
        const varData_97 = new Uint32Array(80);
        for (let numericVal_110 = 0; numericVal_110 < 16; ++numericVal_110) {
          varData_97[numericVal_110] = varData_95[numericVal2][numericVal_110];
        }
        for (let numericVal_110 = 16; numericVal_110 < 80; ++numericVal_110) {
          varData_97[numericVal_110] = handleAction_43(varData_97[numericVal_110 - 3] ^ varData_97[numericVal_110 - 8] ^ varData_97[numericVal_110 - 14] ^ varData_97[numericVal_110 - 16], 1);
        }
        let varData_98 = itemList_22[0];
        let varData_99 = itemList_22[1];
        let varData_100 = itemList_22[2];
        let varData_101 = itemList_22[3];
        let varData_102 = itemList_22[4];
        for (let numericVal_110 = 0; numericVal_110 < 80; ++numericVal_110) {
          const roundedVal = Math.floor(numericVal_110 / 20);
          const varData_103 = handleAction_43(varData_98, 5) + handleAction_42(roundedVal, varData_99, varData_100, varData_101) + varData_102 + itemList_12[roundedVal] + varData_97[numericVal_110] >>> 0;
          varData_102 = varData_101;
          varData_101 = varData_100;
          varData_100 = handleAction_43(varData_99, 30) >>> 0;
          varData_99 = varData_98;
          varData_98 = varData_103;
        }
        itemList_22[0] = itemList_22[0] + varData_98 >>> 0;
        itemList_22[1] = itemList_22[1] + varData_99 >>> 0;
        itemList_22[2] = itemList_22[2] + varData_100 >>> 0;
        itemList_22[3] = itemList_22[3] + varData_101 >>> 0;
        itemList_22[4] = itemList_22[4] + varData_102 >>> 0;
      }
      return [itemList_22[0] >> 24 & 255, itemList_22[0] >> 16 & 255, itemList_22[0] >> 8 & 255, itemList_22[0] & 255, itemList_22[1] >> 24 & 255, itemList_22[1] >> 16 & 255, itemList_22[1] >> 8 & 255, itemList_22[1] & 255, itemList_22[2] >> 24 & 255, itemList_22[2] >> 16 & 255, itemList_22[2] >> 8 & 255, itemList_22[2] & 255, itemList_22[3] >> 24 & 255, itemList_22[3] >> 16 & 255, itemList_22[3] >> 8 & 255, itemList_22[3] & 255, itemList_22[4] >> 24 & 255, itemList_22[4] >> 16 & 255, itemList_22[4] >> 8 & 255, itemList_22[4] & 255];
    }
    const varData_104 = handleAction_44;
    ;
    const varData_105 = handleAction_40("v5", 80, varData_104);
    const varData_106 = varData_105;
    ;
    /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    const numericVal = 4;
    const numericVal_1 = 0;
    const numericVal_2 = 1;
    const numericVal_3 = 2;
    function handleAction_45(param_1) {
      let varData_107 = param_1.length;
      while (--varData_107 >= 0) {
        param_1[varData_107] = 0;
      }
    }
    const numericVal_4 = 0;
    const numericVal_5 = 1;
    const numericVal_6 = 2;
    const numericVal_7 = 3;
    const numericVal_8 = 258;
    const numericVal_9 = 29;
    const numericVal_10 = 256;
    const varData_108 = numericVal_10 + 1 + numericVal_9;
    const numericVal_11 = 30;
    const numericVal_12 = 19;
    const varData_109 = varData_108 * 2 + 1;
    const numericVal_13 = 15;
    const numericVal_14 = 16;
    const numericVal_15 = 7;
    const numericVal_16 = 256;
    const numericVal_17 = 16;
    const numericVal_18 = 17;
    const numericVal_19 = 18;
    const varData_110 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const varData_111 = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const varData_112 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const varData_113 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const numericVal_20 = 512;
    const varData_114 = new Array((varData_108 + 2) * 2);
    handleAction_45(varData_114);
    const varData_115 = new Array(numericVal_11 * 2);
    handleAction_45(varData_115);
    const varData_116 = new Array(numericVal_20);
    handleAction_45(varData_116);
    const varData_117 = new Array(numericVal_8 - numericVal_7 + 1);
    handleAction_45(varData_117);
    const varData_118 = new Array(numericVal_9);
    handleAction_45(varData_118);
    const varData_119 = new Array(numericVal_11);
    handleAction_45(varData_119);
    function handleAction_46(param_1, param_2, param_3, param_4, param_5) {
      this.static_tree = param_1;
      this.extra_bits = param_2;
      this.extra_base = param_3;
      this.elems = param_4;
      this.max_length = param_5;
      this.has_stree = param_1 && param_1.length;
    }
    let varData_120;
    let varData_121;
    let varData_122;
    function handleAction_47(param_1, param_2) {
      this.dyn_tree = param_1;
      this.max_code = 0;
      this.stat_desc = param_2;
    }
    const varData_123 = (param_1) => {
      if (param_1 < 256) {
        return varData_116[param_1];
      } else {
        return varData_116[256 + (param_1 >>> 7)];
      }
    };
    const varData_124 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
    };
    const varData_125 = (param_1, param_2, param_3) => {
      if (param_1.bi_valid > numericVal_14 - param_3) {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        varData_124(param_1, param_1.bi_buf);
        param_1.bi_buf = param_2 >> numericVal_14 - param_1.bi_valid;
        param_1.bi_valid += param_3 - numericVal_14;
      } else {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        param_1.bi_valid += param_3;
      }
    };
    const varData_126 = (param_1, param_2, param_3) => {
      varData_125(param_1, param_3[param_2 * 2], param_3[param_2 * 2 + 1]);
    };
    const varData_127 = (param_1, param_2) => {
      let numericVal_212 = 0;
      do {
        numericVal_212 |= param_1 & 1;
        param_1 >>>= 1;
        numericVal_212 <<= 1;
      } while (--param_2 > 0);
      return numericVal_212 >>> 1;
    };
    const varData_128 = (param_1) => {
      if (param_1.bi_valid === 16) {
        varData_124(param_1, param_1.bi_buf);
        param_1.bi_buf = 0;
        param_1.bi_valid = 0;
      } else if (param_1.bi_valid >= 8) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf & 255;
        param_1.bi_buf >>= 8;
        param_1.bi_valid -= 8;
      }
    };
    const varData_129 = (param_1, param_2) => {
      const varData_130 = param_2.dyn_tree;
      const varData_131 = param_2.max_code;
      const varData_132 = param_2.stat_desc.static_tree;
      const varData_133 = param_2.stat_desc.has_stree;
      const varData_134 = param_2.stat_desc.extra_bits;
      const varData_135 = param_2.stat_desc.extra_base;
      const varData_136 = param_2.stat_desc.max_length;
      let varData_137;
      let varData_138;
      let varData_139;
      let varData_140;
      let varData_141;
      let varData_142;
      let numericVal_212 = 0;
      for (varData_140 = 0; varData_140 <= numericVal_13; varData_140++) {
        param_1.bl_count[varData_140] = 0;
      }
      varData_130[param_1.heap[param_1.heap_max] * 2 + 1] = 0;
      for (varData_137 = param_1.heap_max + 1; varData_137 < varData_109; varData_137++) {
        varData_138 = param_1.heap[varData_137];
        varData_140 = varData_130[varData_130[varData_138 * 2 + 1] * 2 + 1] + 1;
        if (varData_140 > varData_136) {
          varData_140 = varData_136;
          numericVal_212++;
        }
        varData_130[varData_138 * 2 + 1] = varData_140;
        if (varData_138 > varData_131) {
          continue;
        }
        param_1.bl_count[varData_140]++;
        varData_141 = 0;
        if (varData_138 >= varData_135) {
          varData_141 = varData_134[varData_138 - varData_135];
        }
        varData_142 = varData_130[varData_138 * 2];
        param_1.opt_len += varData_142 * (varData_140 + varData_141);
        if (varData_133) {
          param_1.static_len += varData_142 * (varData_132[varData_138 * 2 + 1] + varData_141);
        }
      }
      if (numericVal_212 === 0) {
        return;
      }
      do {
        varData_140 = varData_136 - 1;
        while (param_1.bl_count[varData_140] === 0) {
          varData_140--;
        }
        param_1.bl_count[varData_140]--;
        param_1.bl_count[varData_140 + 1] += 2;
        param_1.bl_count[varData_136]--;
        numericVal_212 -= 2;
      } while (numericVal_212 > 0);
      for (varData_140 = varData_136; varData_140 !== 0; varData_140--) {
        varData_138 = param_1.bl_count[varData_140];
        while (varData_138 !== 0) {
          varData_139 = param_1.heap[--varData_137];
          if (varData_139 > varData_131) {
            continue;
          }
          if (varData_130[varData_139 * 2 + 1] !== varData_140) {
            param_1.opt_len += (varData_140 - varData_130[varData_139 * 2 + 1]) * varData_130[varData_139 * 2];
            varData_130[varData_139 * 2 + 1] = varData_140;
          }
          varData_138--;
        }
      }
    };
    const varData_143 = (param_1, param_2, param_3) => {
      const varData_144 = new Array(numericVal_13 + 1);
      let numericVal_212 = 0;
      let varData_145;
      let varData_146;
      for (varData_145 = 1; varData_145 <= numericVal_13; varData_145++) {
        numericVal_212 = numericVal_212 + param_3[varData_145 - 1] << 1;
        varData_144[varData_145] = numericVal_212;
      }
      for (varData_146 = 0; varData_146 <= param_2; varData_146++) {
        let varData_147 = param_1[varData_146 * 2 + 1];
        if (varData_147 === 0) {
          continue;
        }
        param_1[varData_146 * 2] = varData_127(varData_144[varData_147]++, varData_147);
      }
    };
    const varData_148 = () => {
      let varData_149;
      let varData_150;
      let varData_151;
      let varData_152;
      let varData_153;
      const varData_154 = new Array(numericVal_13 + 1);
      varData_151 = 0;
      for (varData_152 = 0; varData_152 < numericVal_9 - 1; varData_152++) {
        varData_118[varData_152] = varData_151;
        for (varData_149 = 0; varData_149 < 1 << varData_110[varData_152]; varData_149++) {
          varData_117[varData_151++] = varData_152;
        }
      }
      varData_117[varData_151 - 1] = varData_152;
      varData_153 = 0;
      for (varData_152 = 0; varData_152 < 16; varData_152++) {
        varData_119[varData_152] = varData_153;
        for (varData_149 = 0; varData_149 < 1 << varData_111[varData_152]; varData_149++) {
          varData_116[varData_153++] = varData_152;
        }
      }
      varData_153 >>= 7;
      for (; varData_152 < numericVal_11; varData_152++) {
        varData_119[varData_152] = varData_153 << 7;
        for (varData_149 = 0; varData_149 < 1 << varData_111[varData_152] - 7; varData_149++) {
          varData_116[256 + varData_153++] = varData_152;
        }
      }
      for (varData_150 = 0; varData_150 <= numericVal_13; varData_150++) {
        varData_154[varData_150] = 0;
      }
      varData_149 = 0;
      while (varData_149 <= 143) {
        varData_114[varData_149 * 2 + 1] = 8;
        varData_149++;
        varData_154[8]++;
      }
      while (varData_149 <= 255) {
        varData_114[varData_149 * 2 + 1] = 9;
        varData_149++;
        varData_154[9]++;
      }
      while (varData_149 <= 279) {
        varData_114[varData_149 * 2 + 1] = 7;
        varData_149++;
        varData_154[7]++;
      }
      while (varData_149 <= 287) {
        varData_114[varData_149 * 2 + 1] = 8;
        varData_149++;
        varData_154[8]++;
      }
      varData_143(varData_114, varData_108 + 1, varData_154);
      for (varData_149 = 0; varData_149 < numericVal_11; varData_149++) {
        varData_115[varData_149 * 2 + 1] = 5;
        varData_115[varData_149 * 2] = varData_127(varData_149, 5);
      }
      varData_120 = new handleAction_46(varData_114, varData_110, numericVal_10 + 1, varData_108, numericVal_13);
      varData_121 = new handleAction_46(varData_115, varData_111, 0, numericVal_11, numericVal_13);
      varData_122 = new handleAction_46(new Array(0), varData_112, 0, numericVal_12, numericVal_15);
    };
    const varData_155 = (param_1) => {
      let varData_156;
      for (varData_156 = 0; varData_156 < varData_108; varData_156++) {
        param_1.dyn_ltree[varData_156 * 2] = 0;
      }
      for (varData_156 = 0; varData_156 < numericVal_11; varData_156++) {
        param_1.dyn_dtree[varData_156 * 2] = 0;
      }
      for (varData_156 = 0; varData_156 < numericVal_12; varData_156++) {
        param_1.bl_tree[varData_156 * 2] = 0;
      }
      param_1.dyn_ltree[numericVal_16 * 2] = 1;
      param_1.opt_len = param_1.static_len = 0;
      param_1.sym_next = param_1.matches = 0;
    };
    const varData_157 = (param_1) => {
      if (param_1.bi_valid > 8) {
        varData_124(param_1, param_1.bi_buf);
      } else if (param_1.bi_valid > 0) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf;
      }
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
    };
    const varData_158 = (param_1, param_2, param_3, param_4) => {
      const varData_159 = param_2 * 2;
      const varData_160 = param_3 * 2;
      return param_1[varData_159] < param_1[varData_160] || param_1[varData_159] === param_1[varData_160] && param_4[param_2] <= param_4[param_3];
    };
    const varData_161 = (param_1, param_2, param_3) => {
      const varData_162 = param_1.heap[param_3];
      let varData_163 = param_3 << 1;
      while (varData_163 <= param_1.heap_len) {
        if (varData_163 < param_1.heap_len && varData_158(param_2, param_1.heap[varData_163 + 1], param_1.heap[varData_163], param_1.depth)) {
          varData_163++;
        }
        if (varData_158(param_2, varData_162, param_1.heap[varData_163], param_1.depth)) {
          break;
        }
        param_1.heap[param_3] = param_1.heap[varData_163];
        param_3 = varData_163;
        varData_163 <<= 1;
      }
      param_1.heap[param_3] = varData_162;
    };
    const varData_164 = (param_1, param_2, param_3) => {
      let varData_165;
      let varData_166;
      let numericVal_212 = 0;
      let varData_167;
      let varData_168;
      if (param_1.sym_next !== 0) {
        do {
          varData_165 = param_1.pending_buf[param_1.sym_buf + numericVal_212++] & 255;
          varData_165 += (param_1.pending_buf[param_1.sym_buf + numericVal_212++] & 255) << 8;
          varData_166 = param_1.pending_buf[param_1.sym_buf + numericVal_212++];
          if (varData_165 === 0) {
            varData_126(param_1, varData_166, param_2);
          } else {
            varData_167 = varData_117[varData_166];
            varData_126(param_1, varData_167 + numericVal_10 + 1, param_2);
            varData_168 = varData_110[varData_167];
            if (varData_168 !== 0) {
              varData_166 -= varData_118[varData_167];
              varData_125(param_1, varData_166, varData_168);
            }
            varData_165--;
            varData_167 = varData_123(varData_165);
            varData_126(param_1, varData_167, param_3);
            varData_168 = varData_111[varData_167];
            if (varData_168 !== 0) {
              varData_165 -= varData_119[varData_167];
              varData_125(param_1, varData_165, varData_168);
            }
          }
        } while (numericVal_212 < param_1.sym_next);
      }
      varData_126(param_1, numericVal_16, param_2);
    };
    const varData_169 = (param_1, param_2) => {
      const varData_170 = param_2.dyn_tree;
      const varData_171 = param_2.stat_desc.static_tree;
      const varData_172 = param_2.stat_desc.has_stree;
      const varData_173 = param_2.stat_desc.elems;
      let varData_174;
      let varData_175;
      let varData_176 = -1;
      let varData_177;
      param_1.heap_len = 0;
      param_1.heap_max = varData_109;
      for (varData_174 = 0; varData_174 < varData_173; varData_174++) {
        if (varData_170[varData_174 * 2] !== 0) {
          param_1.heap[++param_1.heap_len] = varData_176 = varData_174;
          param_1.depth[varData_174] = 0;
        } else {
          varData_170[varData_174 * 2 + 1] = 0;
        }
      }
      while (param_1.heap_len < 2) {
        varData_177 = param_1.heap[++param_1.heap_len] = varData_176 < 2 ? ++varData_176 : 0;
        varData_170[varData_177 * 2] = 1;
        param_1.depth[varData_177] = 0;
        param_1.opt_len--;
        if (varData_172) {
          param_1.static_len -= varData_171[varData_177 * 2 + 1];
        }
      }
      param_2.max_code = varData_176;
      for (varData_174 = param_1.heap_len >> 1; varData_174 >= 1; varData_174--) {
        varData_161(param_1, varData_170, varData_174);
      }
      varData_177 = varData_173;
      do {
        varData_174 = param_1.heap[1];
        param_1.heap[1] = param_1.heap[param_1.heap_len--];
        varData_161(param_1, varData_170, 1);
        varData_175 = param_1.heap[1];
        param_1.heap[--param_1.heap_max] = varData_174;
        param_1.heap[--param_1.heap_max] = varData_175;
        varData_170[varData_177 * 2] = varData_170[varData_174 * 2] + varData_170[varData_175 * 2];
        param_1.depth[varData_177] = (param_1.depth[varData_174] >= param_1.depth[varData_175] ? param_1.depth[varData_174] : param_1.depth[varData_175]) + 1;
        varData_170[varData_174 * 2 + 1] = varData_170[varData_175 * 2 + 1] = varData_177;
        param_1.heap[1] = varData_177++;
        varData_161(param_1, varData_170, 1);
      } while (param_1.heap_len >= 2);
      param_1.heap[--param_1.heap_max] = param_1.heap[1];
      varData_129(param_1, param_2);
      varData_143(varData_170, varData_176, param_1.bl_count);
    };
    const varData_178 = (param_1, param_2, param_3) => {
      let varData_179;
      let varData_180 = -1;
      let varData_181;
      let varData_182 = param_2[1];
      let numericVal_212 = 0;
      let numericVal_222 = 7;
      let numericVal_232 = 4;
      if (varData_182 === 0) {
        numericVal_222 = 138;
        numericVal_232 = 3;
      }
      param_2[(param_3 + 1) * 2 + 1] = 65535;
      for (varData_179 = 0; varData_179 <= param_3; varData_179++) {
        varData_181 = varData_182;
        varData_182 = param_2[(varData_179 + 1) * 2 + 1];
        if (++numericVal_212 < numericVal_222 && varData_181 === varData_182) {
          continue;
        } else if (numericVal_212 < numericVal_232) {
          param_1.bl_tree[varData_181 * 2] += numericVal_212;
        } else if (varData_181 !== 0) {
          if (varData_181 !== varData_180) {
            param_1.bl_tree[varData_181 * 2]++;
          }
          param_1.bl_tree[numericVal_17 * 2]++;
        } else if (numericVal_212 <= 10) {
          param_1.bl_tree[numericVal_18 * 2]++;
        } else {
          param_1.bl_tree[numericVal_19 * 2]++;
        }
        numericVal_212 = 0;
        varData_180 = varData_181;
        if (varData_182 === 0) {
          numericVal_222 = 138;
          numericVal_232 = 3;
        } else if (varData_181 === varData_182) {
          numericVal_222 = 6;
          numericVal_232 = 3;
        } else {
          numericVal_222 = 7;
          numericVal_232 = 4;
        }
      }
    };
    const varData_183 = (param_1, param_2, param_3) => {
      let varData_184;
      let varData_185 = -1;
      let varData_186;
      let varData_187 = param_2[1];
      let numericVal_212 = 0;
      let numericVal_222 = 7;
      let numericVal_232 = 4;
      if (varData_187 === 0) {
        numericVal_222 = 138;
        numericVal_232 = 3;
      }
      for (varData_184 = 0; varData_184 <= param_3; varData_184++) {
        varData_186 = varData_187;
        varData_187 = param_2[(varData_184 + 1) * 2 + 1];
        if (++numericVal_212 < numericVal_222 && varData_186 === varData_187) {
          continue;
        } else if (numericVal_212 < numericVal_232) {
          do {
            varData_126(param_1, varData_186, param_1.bl_tree);
          } while (--numericVal_212 !== 0);
        } else if (varData_186 !== 0) {
          if (varData_186 !== varData_185) {
            varData_126(param_1, varData_186, param_1.bl_tree);
            numericVal_212--;
          }
          varData_126(param_1, numericVal_17, param_1.bl_tree);
          varData_125(param_1, numericVal_212 - 3, 2);
        } else if (numericVal_212 <= 10) {
          varData_126(param_1, numericVal_18, param_1.bl_tree);
          varData_125(param_1, numericVal_212 - 3, 3);
        } else {
          varData_126(param_1, numericVal_19, param_1.bl_tree);
          varData_125(param_1, numericVal_212 - 11, 7);
        }
        numericVal_212 = 0;
        varData_185 = varData_186;
        if (varData_187 === 0) {
          numericVal_222 = 138;
          numericVal_232 = 3;
        } else if (varData_186 === varData_187) {
          numericVal_222 = 6;
          numericVal_232 = 3;
        } else {
          numericVal_222 = 7;
          numericVal_232 = 4;
        }
      }
    };
    const varData_188 = (param_1) => {
      let varData_189;
      varData_178(param_1, param_1.dyn_ltree, param_1.l_desc.max_code);
      varData_178(param_1, param_1.dyn_dtree, param_1.d_desc.max_code);
      varData_169(param_1, param_1.bl_desc);
      for (varData_189 = numericVal_12 - 1; varData_189 >= 3; varData_189--) {
        if (param_1.bl_tree[varData_113[varData_189] * 2 + 1] !== 0) {
          break;
        }
      }
      param_1.opt_len += (varData_189 + 1) * 3 + 5 + 5 + 4;
      return varData_189;
    };
    const varData_190 = (param_1, param_2, param_3, param_4) => {
      let varData_191;
      varData_125(param_1, param_2 - 257, 5);
      varData_125(param_1, param_3 - 1, 5);
      varData_125(param_1, param_4 - 4, 4);
      for (varData_191 = 0; varData_191 < param_4; varData_191++) {
        varData_125(param_1, param_1.bl_tree[varData_113[varData_191] * 2 + 1], 3);
      }
      varData_183(param_1, param_1.dyn_ltree, param_2 - 1);
      varData_183(param_1, param_1.dyn_dtree, param_3 - 1);
    };
    const varData_192 = (param_1) => {
      let numericVal_212 = 4093624447;
      let varData_193;
      for (varData_193 = 0; varData_193 <= 31; varData_193++, numericVal_212 >>>= 1) {
        if (numericVal_212 & 1 && param_1.dyn_ltree[varData_193 * 2] !== 0) {
          return numericVal_1;
        }
      }
      if (param_1.dyn_ltree[18] !== 0 || param_1.dyn_ltree[20] !== 0 || param_1.dyn_ltree[26] !== 0) {
        return numericVal_2;
      }
      for (varData_193 = 32; varData_193 < numericVal_10; varData_193++) {
        if (param_1.dyn_ltree[varData_193 * 2] !== 0) {
          return numericVal_2;
        }
      }
      return numericVal_1;
    };
    let isDisabled = false;
    const varData_194 = (param_1) => {
      if (!isDisabled) {
        varData_148();
        isDisabled = true;
      }
      param_1.l_desc = new handleAction_47(param_1.dyn_ltree, varData_120);
      param_1.d_desc = new handleAction_47(param_1.dyn_dtree, varData_121);
      param_1.bl_desc = new handleAction_47(param_1.bl_tree, varData_122);
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
      varData_155(param_1);
    };
    const varData_195 = (param_1, param_2, param_3, param_4) => {
      varData_125(param_1, (numericVal_4 << 1) + (param_4 ? 1 : 0), 3);
      varData_157(param_1);
      varData_124(param_1, param_3);
      varData_124(param_1, ~param_3);
      if (param_3) {
        param_1.pending_buf.set(param_1.window.subarray(param_2, param_2 + param_3), param_1.pending);
      }
      param_1.pending += param_3;
    };
    const varData_196 = (param_1) => {
      varData_125(param_1, numericVal_5 << 1, 3);
      varData_126(param_1, numericVal_16, varData_114);
      varData_128(param_1);
    };
    const varData_197 = (param_1, param_2, param_3, param_4) => {
      let varData_198;
      let varData_199;
      let numericVal_212 = 0;
      if (param_1.level > 0) {
        if (param_1.strm.data_type === numericVal_3) {
          param_1.strm.data_type = varData_192(param_1);
        }
        varData_169(param_1, param_1.l_desc);
        varData_169(param_1, param_1.d_desc);
        numericVal_212 = varData_188(param_1);
        varData_198 = param_1.opt_len + 3 + 7 >>> 3;
        varData_199 = param_1.static_len + 3 + 7 >>> 3;
        if (varData_199 <= varData_198) {
          varData_198 = varData_199;
        }
      } else {
        varData_198 = varData_199 = param_3 + 5;
      }
      if (param_3 + 4 <= varData_198 && param_2 !== -1) {
        varData_195(param_1, param_2, param_3, param_4);
      } else if (param_1.strategy === numericVal || varData_199 === varData_198) {
        varData_125(param_1, (numericVal_5 << 1) + (param_4 ? 1 : 0), 3);
        varData_164(param_1, varData_114, varData_115);
      } else {
        varData_125(param_1, (numericVal_6 << 1) + (param_4 ? 1 : 0), 3);
        varData_190(param_1, param_1.l_desc.max_code + 1, param_1.d_desc.max_code + 1, numericVal_212 + 1);
        varData_164(param_1, param_1.dyn_ltree, param_1.dyn_dtree);
      }
      varData_155(param_1);
      if (param_4) {
        varData_157(param_1);
      }
    };
    const varData_200 = (param_1, param_2, param_3) => {
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2 >> 8;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_3;
      if (param_2 === 0) {
        param_1.dyn_ltree[param_3 * 2]++;
      } else {
        param_1.matches++;
        param_2--;
        param_1.dyn_ltree[(varData_117[param_3] + numericVal_10 + 1) * 2]++;
        param_1.dyn_dtree[varData_123(param_2) * 2]++;
      }
      return param_1.sym_next === param_1.sym_end;
    };
    var varData_201 = varData_194;
    var varData_202 = varData_195;
    var varData_203 = varData_197;
    var varData_204 = varData_200;
    var varData_205 = varData_196;
    var varData_206 = {
      _tr_init: varData_201,
      _tr_stored_block: varData_202,
      _tr_flush_block: varData_203,
      _tr_tally: varData_204,
      _tr_align: varData_205
    };
    var varData_207 = varData_206;
    const varData_208 = (param_1, param_2, param_3, param_4) => {
      let varData_209 = param_1 & 65535 | 0;
      let varData_210 = param_1 >>> 16 & 65535 | 0;
      let numericVal_212 = 0;
      while (param_3 !== 0) {
        numericVal_212 = param_3 > 2e3 ? 2e3 : param_3;
        param_3 -= numericVal_212;
        do {
          varData_209 = varData_209 + param_2[param_4++] | 0;
          varData_210 = varData_210 + varData_209 | 0;
        } while (--numericVal_212);
        varData_209 %= 65521;
        varData_210 %= 65521;
      }
      return varData_209 | varData_210 << 16 | 0;
    };
    var varData_211 = varData_208;
    const varData_212 = () => {
      let varData_213;
      let itemList_12 = [];
      for (var numericVal_212 = 0; numericVal_212 < 256; numericVal_212++) {
        varData_213 = numericVal_212;
        for (var numericVal_222 = 0; numericVal_222 < 8; numericVal_222++) {
          varData_213 = varData_213 & 1 ? varData_213 >>> 1 ^ -306674912 : varData_213 >>> 1;
        }
        itemList_12[numericVal_212] = varData_213;
      }
      return itemList_12;
    };
    const varData_214 = new Uint32Array(varData_212());
    const varData_215 = (param_1, param_2, param_3, param_4) => {
      const varData_216 = varData_214;
      const varData_217 = param_4 + param_3;
      param_1 ^= -1;
      for (let loopIdx = param_4; loopIdx < varData_217; loopIdx++) {
        param_1 = param_1 >>> 8 ^ varData_216[(param_1 ^ param_2[loopIdx]) & 255];
      }
      return param_1 ^ -1;
    };
    var varData_218 = varData_215;
    var varData_219 = {
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
    var varData_220 = {
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
    var varData_221 = varData_220;
    const {
      _tr_init: _0x460a16,
      _tr_stored_block: _0x93f796,
      _tr_flush_block: _0x4aa565,
      _tr_tally: _0xf9c715,
      _tr_align: _0xac266b
    } = varData_207;
    const {
      Z_NO_FLUSH: _0x3c5b2c,
      Z_PARTIAL_FLUSH: _0xc6983b,
      Z_FULL_FLUSH: _0x349fff,
      Z_FINISH: _0x17017e,
      Z_BLOCK: _0x8529e3,
      Z_OK: _0x107510,
      Z_STREAM_END: _0x1bf413,
      Z_STREAM_ERROR: _0x4831f3,
      Z_DATA_ERROR: _0x4b273d,
      Z_BUF_ERROR: _0x2700c3,
      Z_DEFAULT_COMPRESSION: _0x1c417b,
      Z_FILTERED: _0x478b09,
      Z_HUFFMAN_ONLY: _0x25ae16,
      Z_RLE: _0x5cd584,
      Z_FIXED: _0x498fbd,
      Z_DEFAULT_STRATEGY: _0x28f14b,
      Z_UNKNOWN: _0x1c1166,
      Z_DEFLATED: _0x4107d5
    } = varData_221;
    const numericVal_21 = 9;
    const numericVal_22 = 15;
    const numericVal_23 = 8;
    const numericVal_24 = 29;
    const numericVal_25 = 256;
    const varData_222 = numericVal_25 + 1 + numericVal_24;
    const numericVal_26 = 30;
    const numericVal_27 = 19;
    const varData_223 = varData_222 * 2 + 1;
    const numericVal_28 = 15;
    const numericVal_29 = 3;
    const numericVal_30 = 258;
    const varData_224 = numericVal_30 + numericVal_29 + 1;
    const numericVal_31 = 32;
    const numericVal_32 = 42;
    const numericVal_33 = 57;
    const numericVal_34 = 69;
    const numericVal_35 = 73;
    const numericVal_36 = 91;
    const numericVal_37 = 103;
    const numericVal_38 = 113;
    const numericVal_39 = 666;
    const numericVal_40 = 1;
    const numericVal_41 = 2;
    const numericVal_42 = 3;
    const numericVal_43 = 4;
    const numericVal_44 = 3;
    const varData_225 = (param_1, param_2) => {
      param_1.msg = varData_219[param_2];
      return param_2;
    };
    const varData_226 = (param_1) => {
      return param_1 * 2 - (param_1 > 4 ? 9 : 0);
    };
    const varData_227 = (param_1) => {
      let varData_228 = param_1.length;
      while (--varData_228 >= 0) {
        param_1[varData_228] = 0;
      }
    };
    const varData_229 = (param_1) => {
      let varData_230;
      let varData_231;
      let varData_232;
      let varData_233 = param_1.w_size;
      varData_230 = param_1.hash_size;
      varData_232 = varData_230;
      do {
        varData_231 = param_1.head[--varData_232];
        param_1.head[varData_232] = varData_231 >= varData_233 ? varData_231 - varData_233 : 0;
      } while (--varData_230);
      varData_230 = varData_233;
      varData_232 = varData_230;
      do {
        varData_231 = param_1.prev[--varData_232];
        param_1.prev[varData_232] = varData_231 >= varData_233 ? varData_231 - varData_233 : 0;
      } while (--varData_230);
    };
    let varData_234 = (param_1, param_2, param_3) => (param_2 << param_1.hash_shift ^ param_3) & param_1.hash_mask;
    let varData_235 = varData_234;
    const varData_236 = (param_1) => {
      const varData_237 = param_1.state;
      let varData_238 = varData_237.pending;
      if (varData_238 > param_1.avail_out) {
        varData_238 = param_1.avail_out;
      }
      if (varData_238 === 0) {
        return;
      }
      param_1.output.set(varData_237.pending_buf.subarray(varData_237.pending_out, varData_237.pending_out + varData_238), param_1.next_out);
      param_1.next_out += varData_238;
      varData_237.pending_out += varData_238;
      param_1.total_out += varData_238;
      param_1.avail_out -= varData_238;
      varData_237.pending -= varData_238;
      if (varData_237.pending === 0) {
        varData_237.pending_out = 0;
      }
    };
    const varData_239 = (param_1, param_2) => {
      _0x4aa565(param_1, param_1.block_start >= 0 ? param_1.block_start : -1, param_1.strstart - param_1.block_start, param_2);
      param_1.block_start = param_1.strstart;
      varData_236(param_1.strm);
    };
    const varData_240 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2;
    };
    const varData_241 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
    };
    const varData_242 = (param_1, param_2, param_3, param_4) => {
      let varData_243 = param_1.avail_in;
      if (varData_243 > param_4) {
        varData_243 = param_4;
      }
      if (varData_243 === 0) {
        return 0;
      }
      param_1.avail_in -= varData_243;
      param_2.set(param_1.input.subarray(param_1.next_in, param_1.next_in + varData_243), param_3);
      if (param_1.state.wrap === 1) {
        param_1.adler = varData_211(param_1.adler, param_2, varData_243, param_3);
      } else if (param_1.state.wrap === 2) {
        param_1.adler = varData_218(param_1.adler, param_2, varData_243, param_3);
      }
      param_1.next_in += varData_243;
      param_1.total_in += varData_243;
      return varData_243;
    };
    const varData_244 = (param_1, param_2) => {
      let varData_245 = param_1.max_chain_length;
      let varData_246 = param_1.strstart;
      let varData_247;
      let varData_248;
      let varData_249 = param_1.prev_length;
      let varData_250 = param_1.nice_match;
      const varData_251 = param_1.strstart > param_1.w_size - varData_224 ? param_1.strstart - (param_1.w_size - varData_224) : 0;
      const varData_252 = param_1.window;
      const varData_253 = param_1.w_mask;
      const varData_254 = param_1.prev;
      const varData_255 = param_1.strstart + numericVal_30;
      let varData_256 = varData_252[varData_246 + varData_249 - 1];
      let varData_257 = varData_252[varData_246 + varData_249];
      if (param_1.prev_length >= param_1.good_match) {
        varData_245 >>= 2;
      }
      if (varData_250 > param_1.lookahead) {
        varData_250 = param_1.lookahead;
      }
      do {
        varData_247 = param_2;
        if (varData_252[varData_247 + varData_249] !== varData_257 || varData_252[varData_247 + varData_249 - 1] !== varData_256 || varData_252[varData_247] !== varData_252[varData_246] || varData_252[++varData_247] !== varData_252[varData_246 + 1]) {
          continue;
        }
        varData_246 += 2;
        varData_247++;
        do {
        } while (varData_252[++varData_246] === varData_252[++varData_247] && varData_252[++varData_246] === varData_252[++varData_247] && varData_252[++varData_246] === varData_252[++varData_247] && varData_252[++varData_246] === varData_252[++varData_247] && varData_252[++varData_246] === varData_252[++varData_247] && varData_252[++varData_246] === varData_252[++varData_247] && varData_252[++varData_246] === varData_252[++varData_247] && varData_252[++varData_246] === varData_252[++varData_247] && varData_246 < varData_255);
        varData_248 = numericVal_30 - (varData_255 - varData_246);
        varData_246 = varData_255 - numericVal_30;
        if (varData_248 > varData_249) {
          param_1.match_start = param_2;
          varData_249 = varData_248;
          if (varData_248 >= varData_250) {
            break;
          }
          varData_256 = varData_252[varData_246 + varData_249 - 1];
          varData_257 = varData_252[varData_246 + varData_249];
        }
      } while ((param_2 = varData_254[param_2 & varData_253]) > varData_251 && --varData_245 !== 0);
      if (varData_249 <= param_1.lookahead) {
        return varData_249;
      }
      return param_1.lookahead;
    };
    const varData_258 = (param_1) => {
      const varData_259 = param_1.w_size;
      let varData_260;
      let varData_261;
      let varData_262;
      do {
        varData_261 = param_1.window_size - param_1.lookahead - param_1.strstart;
        if (param_1.strstart >= varData_259 + (varData_259 - varData_224)) {
          param_1.window.set(param_1.window.subarray(varData_259, varData_259 + varData_259 - varData_261), 0);
          param_1.match_start -= varData_259;
          param_1.strstart -= varData_259;
          param_1.block_start -= varData_259;
          if (param_1.insert > param_1.strstart) {
            param_1.insert = param_1.strstart;
          }
          varData_229(param_1);
          varData_261 += varData_259;
        }
        if (param_1.strm.avail_in === 0) {
          break;
        }
        varData_260 = varData_242(param_1.strm, param_1.window, param_1.strstart + param_1.lookahead, varData_261);
        param_1.lookahead += varData_260;
        if (param_1.lookahead + param_1.insert >= numericVal_29) {
          varData_262 = param_1.strstart - param_1.insert;
          param_1.ins_h = param_1.window[varData_262];
          param_1.ins_h = varData_235(param_1, param_1.ins_h, param_1.window[varData_262 + 1]);
          while (param_1.insert) {
            param_1.ins_h = varData_235(param_1, param_1.ins_h, param_1.window[varData_262 + numericVal_29 - 1]);
            param_1.prev[varData_262 & param_1.w_mask] = param_1.head[param_1.ins_h];
            param_1.head[param_1.ins_h] = varData_262;
            varData_262++;
            param_1.insert--;
            if (param_1.lookahead + param_1.insert < numericVal_29) {
              break;
            }
          }
        }
      } while (param_1.lookahead < varData_224 && param_1.strm.avail_in !== 0);
    };
    const varData_263 = (param_1, param_2) => {
      let varData_264 = param_1.pending_buf_size - 5 > param_1.w_size ? param_1.w_size : param_1.pending_buf_size - 5;
      let varData_265;
      let varData_266;
      let varData_267;
      let numericVal_452 = 0;
      let varData_268 = param_1.strm.avail_in;
      do {
        varData_265 = 65535;
        varData_267 = param_1.bi_valid + 42 >> 3;
        if (param_1.strm.avail_out < varData_267) {
          break;
        }
        varData_267 = param_1.strm.avail_out - varData_267;
        varData_266 = param_1.strstart - param_1.block_start;
        if (varData_265 > varData_266 + param_1.strm.avail_in) {
          varData_265 = varData_266 + param_1.strm.avail_in;
        }
        if (varData_265 > varData_267) {
          varData_265 = varData_267;
        }
        if (varData_265 < varData_264 && (varData_265 === 0 && param_2 !== _0x17017e || param_2 === _0x3c5b2c || varData_265 !== varData_266 + param_1.strm.avail_in)) {
          break;
        }
        numericVal_452 = param_2 === _0x17017e && varData_265 === varData_266 + param_1.strm.avail_in ? 1 : 0;
        _0x93f796(param_1, 0, 0, numericVal_452);
        param_1.pending_buf[param_1.pending - 4] = varData_265;
        param_1.pending_buf[param_1.pending - 3] = varData_265 >> 8;
        param_1.pending_buf[param_1.pending - 2] = ~varData_265;
        param_1.pending_buf[param_1.pending - 1] = ~varData_265 >> 8;
        varData_236(param_1.strm);
        if (varData_266) {
          if (varData_266 > varData_265) {
            varData_266 = varData_265;
          }
          param_1.strm.output.set(param_1.window.subarray(param_1.block_start, param_1.block_start + varData_266), param_1.strm.next_out);
          param_1.strm.next_out += varData_266;
          param_1.strm.avail_out -= varData_266;
          param_1.strm.total_out += varData_266;
          param_1.block_start += varData_266;
          varData_265 -= varData_266;
        }
        if (varData_265) {
          varData_242(param_1.strm, param_1.strm.output, param_1.strm.next_out, varData_265);
          param_1.strm.next_out += varData_265;
          param_1.strm.avail_out -= varData_265;
          param_1.strm.total_out += varData_265;
        }
      } while (numericVal_452 === 0);
      varData_268 -= param_1.strm.avail_in;
      if (varData_268) {
        if (varData_268 >= param_1.w_size) {
          param_1.matches = 2;
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - param_1.w_size, param_1.strm.next_in), 0);
          param_1.strstart = param_1.w_size;
          param_1.insert = param_1.strstart;
        } else {
          if (param_1.window_size - param_1.strstart <= varData_268) {
            param_1.strstart -= param_1.w_size;
            param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
            if (param_1.matches < 2) {
              param_1.matches++;
            }
            if (param_1.insert > param_1.strstart) {
              param_1.insert = param_1.strstart;
            }
          }
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - varData_268, param_1.strm.next_in), param_1.strstart);
          param_1.strstart += varData_268;
          param_1.insert += varData_268 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_268;
        }
        param_1.block_start = param_1.strstart;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      if (numericVal_452) {
        return numericVal_43;
      }
      if (param_2 !== _0x3c5b2c && param_2 !== _0x17017e && param_1.strm.avail_in === 0 && param_1.strstart === param_1.block_start) {
        return numericVal_41;
      }
      varData_267 = param_1.window_size - param_1.strstart;
      if (param_1.strm.avail_in > varData_267 && param_1.block_start >= param_1.w_size) {
        param_1.block_start -= param_1.w_size;
        param_1.strstart -= param_1.w_size;
        param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
        if (param_1.matches < 2) {
          param_1.matches++;
        }
        varData_267 += param_1.w_size;
        if (param_1.insert > param_1.strstart) {
          param_1.insert = param_1.strstart;
        }
      }
      if (varData_267 > param_1.strm.avail_in) {
        varData_267 = param_1.strm.avail_in;
      }
      if (varData_267) {
        varData_242(param_1.strm, param_1.window, param_1.strstart, varData_267);
        param_1.strstart += varData_267;
        param_1.insert += varData_267 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_267;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      varData_267 = param_1.bi_valid + 42 >> 3;
      varData_267 = param_1.pending_buf_size - varData_267 > 65535 ? 65535 : param_1.pending_buf_size - varData_267;
      varData_264 = varData_267 > param_1.w_size ? param_1.w_size : varData_267;
      varData_266 = param_1.strstart - param_1.block_start;
      if (varData_266 >= varData_264 || (varData_266 || param_2 === _0x17017e) && param_2 !== _0x3c5b2c && param_1.strm.avail_in === 0 && varData_266 <= varData_267) {
        varData_265 = varData_266 > varData_267 ? varData_267 : varData_266;
        numericVal_452 = param_2 === _0x17017e && param_1.strm.avail_in === 0 && varData_265 === varData_266 ? 1 : 0;
        _0x93f796(param_1, param_1.block_start, varData_265, numericVal_452);
        param_1.block_start += varData_265;
        varData_236(param_1.strm);
      }
      if (numericVal_452) {
        return numericVal_42;
      } else {
        return numericVal_40;
      }
    };
    const varData_269 = (param_1, param_2) => {
      let varData_270;
      let varData_271;
      while (true) {
        if (param_1.lookahead < varData_224) {
          varData_258(param_1);
          if (param_1.lookahead < varData_224 && param_2 === _0x3c5b2c) {
            return numericVal_40;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_270 = 0;
        if (param_1.lookahead >= numericVal_29) {
          param_1.ins_h = varData_235(param_1, param_1.ins_h, param_1.window[param_1.strstart + numericVal_29 - 1]);
          varData_270 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        if (varData_270 !== 0 && param_1.strstart - varData_270 <= param_1.w_size - varData_224) {
          param_1.match_length = varData_244(param_1, varData_270);
        }
        if (param_1.match_length >= numericVal_29) {
          varData_271 = _0xf9c715(param_1, param_1.strstart - param_1.match_start, param_1.match_length - numericVal_29);
          param_1.lookahead -= param_1.match_length;
          if (param_1.match_length <= param_1.max_lazy_match && param_1.lookahead >= numericVal_29) {
            param_1.match_length--;
            do {
              param_1.strstart++;
              param_1.ins_h = varData_235(param_1, param_1.ins_h, param_1.window[param_1.strstart + numericVal_29 - 1]);
              varData_270 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            } while (--param_1.match_length !== 0);
            param_1.strstart++;
          } else {
            param_1.strstart += param_1.match_length;
            param_1.match_length = 0;
            param_1.ins_h = param_1.window[param_1.strstart];
            param_1.ins_h = varData_235(param_1, param_1.ins_h, param_1.window[param_1.strstart + 1]);
          }
        } else {
          varData_271 = _0xf9c715(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_271) {
          varData_239(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return numericVal_40;
          }
        }
      }
      param_1.insert = param_1.strstart < numericVal_29 - 1 ? param_1.strstart : numericVal_29 - 1;
      if (param_2 === _0x17017e) {
        varData_239(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return numericVal_42;
        }
        return numericVal_43;
      }
      if (param_1.sym_next) {
        varData_239(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return numericVal_40;
        }
      }
      return numericVal_41;
    };
    const varData_272 = (param_1, param_2) => {
      let varData_273;
      let varData_274;
      let varData_275;
      while (true) {
        if (param_1.lookahead < varData_224) {
          varData_258(param_1);
          if (param_1.lookahead < varData_224 && param_2 === _0x3c5b2c) {
            return numericVal_40;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_273 = 0;
        if (param_1.lookahead >= numericVal_29) {
          param_1.ins_h = varData_235(param_1, param_1.ins_h, param_1.window[param_1.strstart + numericVal_29 - 1]);
          varData_273 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        param_1.prev_length = param_1.match_length;
        param_1.prev_match = param_1.match_start;
        param_1.match_length = numericVal_29 - 1;
        if (varData_273 !== 0 && param_1.prev_length < param_1.max_lazy_match && param_1.strstart - varData_273 <= param_1.w_size - varData_224) {
          param_1.match_length = varData_244(param_1, varData_273);
          if (param_1.match_length <= 5 && (param_1.strategy === _0x478b09 || param_1.match_length === numericVal_29 && param_1.strstart - param_1.match_start > 4096)) {
            param_1.match_length = numericVal_29 - 1;
          }
        }
        if (param_1.prev_length >= numericVal_29 && param_1.match_length <= param_1.prev_length) {
          varData_275 = param_1.strstart + param_1.lookahead - numericVal_29;
          varData_274 = _0xf9c715(param_1, param_1.strstart - 1 - param_1.prev_match, param_1.prev_length - numericVal_29);
          param_1.lookahead -= param_1.prev_length - 1;
          param_1.prev_length -= 2;
          do {
            if (++param_1.strstart <= varData_275) {
              param_1.ins_h = varData_235(param_1, param_1.ins_h, param_1.window[param_1.strstart + numericVal_29 - 1]);
              varData_273 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            }
          } while (--param_1.prev_length !== 0);
          param_1.match_available = 0;
          param_1.match_length = numericVal_29 - 1;
          param_1.strstart++;
          if (varData_274) {
            varData_239(param_1, false);
            if (param_1.strm.avail_out === 0) {
              return numericVal_40;
            }
          }
        } else if (param_1.match_available) {
          varData_274 = _0xf9c715(param_1, 0, param_1.window[param_1.strstart - 1]);
          if (varData_274) {
            varData_239(param_1, false);
          }
          param_1.strstart++;
          param_1.lookahead--;
          if (param_1.strm.avail_out === 0) {
            return numericVal_40;
          }
        } else {
          param_1.match_available = 1;
          param_1.strstart++;
          param_1.lookahead--;
        }
      }
      if (param_1.match_available) {
        varData_274 = _0xf9c715(param_1, 0, param_1.window[param_1.strstart - 1]);
        param_1.match_available = 0;
      }
      param_1.insert = param_1.strstart < numericVal_29 - 1 ? param_1.strstart : numericVal_29 - 1;
      if (param_2 === _0x17017e) {
        varData_239(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return numericVal_42;
        }
        return numericVal_43;
      }
      if (param_1.sym_next) {
        varData_239(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return numericVal_40;
        }
      }
      return numericVal_41;
    };
    const varData_276 = (param_1, param_2) => {
      let varData_277;
      let varData_278;
      let varData_279;
      let varData_280;
      const varData_281 = param_1.window;
      while (true) {
        if (param_1.lookahead <= numericVal_30) {
          varData_258(param_1);
          if (param_1.lookahead <= numericVal_30 && param_2 === _0x3c5b2c) {
            return numericVal_40;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        param_1.match_length = 0;
        if (param_1.lookahead >= numericVal_29 && param_1.strstart > 0) {
          varData_279 = param_1.strstart - 1;
          varData_278 = varData_281[varData_279];
          if (varData_278 === varData_281[++varData_279] && varData_278 === varData_281[++varData_279] && varData_278 === varData_281[++varData_279]) {
            varData_280 = param_1.strstart + numericVal_30;
            do {
            } while (varData_278 === varData_281[++varData_279] && varData_278 === varData_281[++varData_279] && varData_278 === varData_281[++varData_279] && varData_278 === varData_281[++varData_279] && varData_278 === varData_281[++varData_279] && varData_278 === varData_281[++varData_279] && varData_278 === varData_281[++varData_279] && varData_278 === varData_281[++varData_279] && varData_279 < varData_280);
            param_1.match_length = numericVal_30 - (varData_280 - varData_279);
            if (param_1.match_length > param_1.lookahead) {
              param_1.match_length = param_1.lookahead;
            }
          }
        }
        if (param_1.match_length >= numericVal_29) {
          varData_277 = _0xf9c715(param_1, 1, param_1.match_length - numericVal_29);
          param_1.lookahead -= param_1.match_length;
          param_1.strstart += param_1.match_length;
          param_1.match_length = 0;
        } else {
          varData_277 = _0xf9c715(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_277) {
          varData_239(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return numericVal_40;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0x17017e) {
        varData_239(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return numericVal_42;
        }
        return numericVal_43;
      }
      if (param_1.sym_next) {
        varData_239(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return numericVal_40;
        }
      }
      return numericVal_41;
    };
    const varData_282 = (param_1, param_2) => {
      let varData_283;
      while (true) {
        if (param_1.lookahead === 0) {
          varData_258(param_1);
          if (param_1.lookahead === 0) {
            if (param_2 === _0x3c5b2c) {
              return numericVal_40;
            }
            break;
          }
        }
        param_1.match_length = 0;
        varData_283 = _0xf9c715(param_1, 0, param_1.window[param_1.strstart]);
        param_1.lookahead--;
        param_1.strstart++;
        if (varData_283) {
          varData_239(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return numericVal_40;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0x17017e) {
        varData_239(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return numericVal_42;
        }
        return numericVal_43;
      }
      if (param_1.sym_next) {
        varData_239(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return numericVal_40;
        }
      }
      return numericVal_41;
    };
    function handleAction_48(param_1, param_2, param_3, param_4, param_5) {
      this.good_length = param_1;
      this.max_lazy = param_2;
      this.nice_length = param_3;
      this.max_chain = param_4;
      this.func = param_5;
    }
    const itemList_1 = [new handleAction_48(0, 0, 0, 0, varData_263), new handleAction_48(4, 4, 8, 4, varData_269), new handleAction_48(4, 5, 16, 8, varData_269), new handleAction_48(4, 6, 32, 32, varData_269), new handleAction_48(4, 4, 16, 16, varData_272), new handleAction_48(8, 16, 32, 32, varData_272), new handleAction_48(8, 16, 128, 128, varData_272), new handleAction_48(8, 32, 128, 256, varData_272), new handleAction_48(32, 128, 258, 1024, varData_272), new handleAction_48(32, 258, 258, 4096, varData_272)];
    const varData_284 = (param_1) => {
      param_1.window_size = param_1.w_size * 2;
      varData_227(param_1.head);
      param_1.max_lazy_match = itemList_1[param_1.level].max_lazy;
      param_1.good_match = itemList_1[param_1.level].good_length;
      param_1.nice_match = itemList_1[param_1.level].nice_length;
      param_1.max_chain_length = itemList_1[param_1.level].max_chain;
      param_1.strstart = 0;
      param_1.block_start = 0;
      param_1.lookahead = 0;
      param_1.insert = 0;
      param_1.match_length = param_1.prev_length = numericVal_29 - 1;
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
      this.method = _0x4107d5;
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
      this.dyn_ltree = new Uint16Array(varData_223 * 2);
      this.dyn_dtree = new Uint16Array((numericVal_26 * 2 + 1) * 2);
      this.bl_tree = new Uint16Array((numericVal_27 * 2 + 1) * 2);
      varData_227(this.dyn_ltree);
      varData_227(this.dyn_dtree);
      varData_227(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(numericVal_28 + 1);
      this.heap = new Uint16Array(varData_222 * 2 + 1);
      varData_227(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(varData_222 * 2 + 1);
      varData_227(this.depth);
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
    const varData_285 = (param_1) => {
      if (!param_1) {
        return 1;
      }
      const varData_286 = param_1.state;
      if (!varData_286 || varData_286.strm !== param_1 || varData_286.status !== numericVal_32 && varData_286.status !== numericVal_33 && varData_286.status !== numericVal_34 && varData_286.status !== numericVal_35 && varData_286.status !== numericVal_36 && varData_286.status !== numericVal_37 && varData_286.status !== numericVal_38 && varData_286.status !== numericVal_39) {
        return 1;
      }
      return 0;
    };
    const varData_287 = (param_1) => {
      if (varData_285(param_1)) {
        return varData_225(param_1, _0x4831f3);
      }
      param_1.total_in = param_1.total_out = 0;
      param_1.data_type = _0x1c1166;
      const varData_288 = param_1.state;
      varData_288.pending = 0;
      varData_288.pending_out = 0;
      if (varData_288.wrap < 0) {
        varData_288.wrap = -varData_288.wrap;
      }
      varData_288.status = varData_288.wrap === 2 ? numericVal_33 : varData_288.wrap ? numericVal_32 : numericVal_38;
      param_1.adler = varData_288.wrap === 2 ? 0 : 1;
      varData_288.last_flush = -2;
      _0x460a16(varData_288);
      return _0x107510;
    };
    const varData_289 = (param_1) => {
      const varData_290 = varData_287(param_1);
      if (varData_290 === _0x107510) {
        varData_284(param_1.state);
      }
      return varData_290;
    };
    const varData_291 = (param_1, param_2) => {
      if (varData_285(param_1) || param_1.state.wrap !== 2) {
        return _0x4831f3;
      }
      param_1.state.gzhead = param_2;
      return _0x107510;
    };
    const varData_292 = (param_1, param_2, param_3, param_4, param_5, param_6) => {
      if (!param_1) {
        return _0x4831f3;
      }
      let numericVal_452 = 1;
      if (param_2 === _0x1c417b) {
        param_2 = 6;
      }
      if (param_4 < 0) {
        numericVal_452 = 0;
        param_4 = -param_4;
      } else if (param_4 > 15) {
        numericVal_452 = 2;
        param_4 -= 16;
      }
      if (param_5 < 1 || param_5 > numericVal_21 || param_3 !== _0x4107d5 || param_4 < 8 || param_4 > 15 || param_2 < 0 || param_2 > 9 || param_6 < 0 || param_6 > _0x498fbd || param_4 === 8 && numericVal_452 !== 1) {
        return varData_225(param_1, _0x4831f3);
      }
      if (param_4 === 8) {
        param_4 = 9;
      }
      const varData_293 = new handleAction_49();
      param_1.state = varData_293;
      varData_293.strm = param_1;
      varData_293.status = numericVal_32;
      varData_293.wrap = numericVal_452;
      varData_293.gzhead = null;
      varData_293.w_bits = param_4;
      varData_293.w_size = 1 << varData_293.w_bits;
      varData_293.w_mask = varData_293.w_size - 1;
      varData_293.hash_bits = param_5 + 7;
      varData_293.hash_size = 1 << varData_293.hash_bits;
      varData_293.hash_mask = varData_293.hash_size - 1;
      varData_293.hash_shift = ~~((varData_293.hash_bits + numericVal_29 - 1) / numericVal_29);
      varData_293.window = new Uint8Array(varData_293.w_size * 2);
      varData_293.head = new Uint16Array(varData_293.hash_size);
      varData_293.prev = new Uint16Array(varData_293.w_size);
      varData_293.lit_bufsize = 1 << param_5 + 6;
      varData_293.pending_buf_size = varData_293.lit_bufsize * 4;
      varData_293.pending_buf = new Uint8Array(varData_293.pending_buf_size);
      varData_293.sym_buf = varData_293.lit_bufsize;
      varData_293.sym_end = (varData_293.lit_bufsize - 1) * 3;
      varData_293.level = param_2;
      varData_293.strategy = param_6;
      varData_293.method = param_3;
      return varData_289(param_1);
    };
    const varData_294 = (param_1, param_2) => {
      return varData_292(param_1, param_2, _0x4107d5, numericVal_22, numericVal_23, _0x28f14b);
    };
    const varData_295 = (param_1, param_2) => {
      if (varData_285(param_1) || param_2 > _0x8529e3 || param_2 < 0) {
        if (param_1) {
          return varData_225(param_1, _0x4831f3);
        } else {
          return _0x4831f3;
        }
      }
      const varData_296 = param_1.state;
      if (!param_1.output || param_1.avail_in !== 0 && !param_1.input || varData_296.status === numericVal_39 && param_2 !== _0x17017e) {
        return varData_225(param_1, param_1.avail_out === 0 ? _0x2700c3 : _0x4831f3);
      }
      const varData_297 = varData_296.last_flush;
      varData_296.last_flush = param_2;
      if (varData_296.pending !== 0) {
        varData_236(param_1);
        if (param_1.avail_out === 0) {
          varData_296.last_flush = -1;
          return _0x107510;
        }
      } else if (param_1.avail_in === 0 && varData_226(param_2) <= varData_226(varData_297) && param_2 !== _0x17017e) {
        return varData_225(param_1, _0x2700c3);
      }
      if (varData_296.status === numericVal_39 && param_1.avail_in !== 0) {
        return varData_225(param_1, _0x2700c3);
      }
      if (varData_296.status === numericVal_32 && varData_296.wrap === 0) {
        varData_296.status = numericVal_38;
      }
      if (varData_296.status === numericVal_32) {
        let varData_298 = _0x4107d5 + (varData_296.w_bits - 8 << 4) << 8;
        let varData_299 = -1;
        if (varData_296.strategy >= _0x25ae16 || varData_296.level < 2) {
          varData_299 = 0;
        } else if (varData_296.level < 6) {
          varData_299 = 1;
        } else if (varData_296.level === 6) {
          varData_299 = 2;
        } else {
          varData_299 = 3;
        }
        varData_298 |= varData_299 << 6;
        if (varData_296.strstart !== 0) {
          varData_298 |= numericVal_31;
        }
        varData_298 += 31 - varData_298 % 31;
        varData_241(varData_296, varData_298);
        if (varData_296.strstart !== 0) {
          varData_241(varData_296, param_1.adler >>> 16);
          varData_241(varData_296, param_1.adler & 65535);
        }
        param_1.adler = 1;
        varData_296.status = numericVal_38;
        varData_236(param_1);
        if (varData_296.pending !== 0) {
          varData_296.last_flush = -1;
          return _0x107510;
        }
      }
      if (varData_296.status === numericVal_33) {
        param_1.adler = 0;
        varData_240(varData_296, 31);
        varData_240(varData_296, 139);
        varData_240(varData_296, 8);
        if (!varData_296.gzhead) {
          varData_240(varData_296, 0);
          varData_240(varData_296, 0);
          varData_240(varData_296, 0);
          varData_240(varData_296, 0);
          varData_240(varData_296, 0);
          varData_240(varData_296, varData_296.level === 9 ? 2 : varData_296.strategy >= _0x25ae16 || varData_296.level < 2 ? 4 : 0);
          varData_240(varData_296, numericVal_44);
          varData_296.status = numericVal_38;
          varData_236(param_1);
          if (varData_296.pending !== 0) {
            varData_296.last_flush = -1;
            return _0x107510;
          }
        } else {
          varData_240(varData_296, (varData_296.gzhead.text ? 1 : 0) + (varData_296.gzhead.hcrc ? 2 : 0) + (!varData_296.gzhead.extra ? 0 : 4) + (!varData_296.gzhead.name ? 0 : 8) + (!varData_296.gzhead.comment ? 0 : 16));
          varData_240(varData_296, varData_296.gzhead.time & 255);
          varData_240(varData_296, varData_296.gzhead.time >> 8 & 255);
          varData_240(varData_296, varData_296.gzhead.time >> 16 & 255);
          varData_240(varData_296, varData_296.gzhead.time >> 24 & 255);
          varData_240(varData_296, varData_296.level === 9 ? 2 : varData_296.strategy >= _0x25ae16 || varData_296.level < 2 ? 4 : 0);
          varData_240(varData_296, varData_296.gzhead.os & 255);
          if (varData_296.gzhead.extra && varData_296.gzhead.extra.length) {
            varData_240(varData_296, varData_296.gzhead.extra.length & 255);
            varData_240(varData_296, varData_296.gzhead.extra.length >> 8 & 255);
          }
          if (varData_296.gzhead.hcrc) {
            param_1.adler = varData_218(param_1.adler, varData_296.pending_buf, varData_296.pending, 0);
          }
          varData_296.gzindex = 0;
          varData_296.status = numericVal_34;
        }
      }
      if (varData_296.status === numericVal_34) {
        if (varData_296.gzhead.extra) {
          let varData_300 = varData_296.pending;
          let varData_301 = (varData_296.gzhead.extra.length & 65535) - varData_296.gzindex;
          while (varData_296.pending + varData_301 > varData_296.pending_buf_size) {
            let varData_302 = varData_296.pending_buf_size - varData_296.pending;
            varData_296.pending_buf.set(varData_296.gzhead.extra.subarray(varData_296.gzindex, varData_296.gzindex + varData_302), varData_296.pending);
            varData_296.pending = varData_296.pending_buf_size;
            if (varData_296.gzhead.hcrc && varData_296.pending > varData_300) {
              param_1.adler = varData_218(param_1.adler, varData_296.pending_buf, varData_296.pending - varData_300, varData_300);
            }
            varData_296.gzindex += varData_302;
            varData_236(param_1);
            if (varData_296.pending !== 0) {
              varData_296.last_flush = -1;
              return _0x107510;
            }
            varData_300 = 0;
            varData_301 -= varData_302;
          }
          let varData_303 = new Uint8Array(varData_296.gzhead.extra);
          varData_296.pending_buf.set(varData_303.subarray(varData_296.gzindex, varData_296.gzindex + varData_301), varData_296.pending);
          varData_296.pending += varData_301;
          if (varData_296.gzhead.hcrc && varData_296.pending > varData_300) {
            param_1.adler = varData_218(param_1.adler, varData_296.pending_buf, varData_296.pending - varData_300, varData_300);
          }
          varData_296.gzindex = 0;
        }
        varData_296.status = numericVal_35;
      }
      if (varData_296.status === numericVal_35) {
        if (varData_296.gzhead.name) {
          let varData_304 = varData_296.pending;
          let varData_305;
          do {
            if (varData_296.pending === varData_296.pending_buf_size) {
              if (varData_296.gzhead.hcrc && varData_296.pending > varData_304) {
                param_1.adler = varData_218(param_1.adler, varData_296.pending_buf, varData_296.pending - varData_304, varData_304);
              }
              varData_236(param_1);
              if (varData_296.pending !== 0) {
                varData_296.last_flush = -1;
                return _0x107510;
              }
              varData_304 = 0;
            }
            if (varData_296.gzindex < varData_296.gzhead.name.length) {
              varData_305 = varData_296.gzhead.name.charCodeAt(varData_296.gzindex++) & 255;
            } else {
              varData_305 = 0;
            }
            varData_240(varData_296, varData_305);
          } while (varData_305 !== 0);
          if (varData_296.gzhead.hcrc && varData_296.pending > varData_304) {
            param_1.adler = varData_218(param_1.adler, varData_296.pending_buf, varData_296.pending - varData_304, varData_304);
          }
          varData_296.gzindex = 0;
        }
        varData_296.status = numericVal_36;
      }
      if (varData_296.status === numericVal_36) {
        if (varData_296.gzhead.comment) {
          let varData_306 = varData_296.pending;
          let varData_307;
          do {
            if (varData_296.pending === varData_296.pending_buf_size) {
              if (varData_296.gzhead.hcrc && varData_296.pending > varData_306) {
                param_1.adler = varData_218(param_1.adler, varData_296.pending_buf, varData_296.pending - varData_306, varData_306);
              }
              varData_236(param_1);
              if (varData_296.pending !== 0) {
                varData_296.last_flush = -1;
                return _0x107510;
              }
              varData_306 = 0;
            }
            if (varData_296.gzindex < varData_296.gzhead.comment.length) {
              varData_307 = varData_296.gzhead.comment.charCodeAt(varData_296.gzindex++) & 255;
            } else {
              varData_307 = 0;
            }
            varData_240(varData_296, varData_307);
          } while (varData_307 !== 0);
          if (varData_296.gzhead.hcrc && varData_296.pending > varData_306) {
            param_1.adler = varData_218(param_1.adler, varData_296.pending_buf, varData_296.pending - varData_306, varData_306);
          }
        }
        varData_296.status = numericVal_37;
      }
      if (varData_296.status === numericVal_37) {
        if (varData_296.gzhead.hcrc) {
          if (varData_296.pending + 2 > varData_296.pending_buf_size) {
            varData_236(param_1);
            if (varData_296.pending !== 0) {
              varData_296.last_flush = -1;
              return _0x107510;
            }
          }
          varData_240(varData_296, param_1.adler & 255);
          varData_240(varData_296, param_1.adler >> 8 & 255);
          param_1.adler = 0;
        }
        varData_296.status = numericVal_38;
        varData_236(param_1);
        if (varData_296.pending !== 0) {
          varData_296.last_flush = -1;
          return _0x107510;
        }
      }
      if (param_1.avail_in !== 0 || varData_296.lookahead !== 0 || param_2 !== _0x3c5b2c && varData_296.status !== numericVal_39) {
        let varData_308 = varData_296.level === 0 ? varData_263(varData_296, param_2) : varData_296.strategy === _0x25ae16 ? varData_282(varData_296, param_2) : varData_296.strategy === _0x5cd584 ? varData_276(varData_296, param_2) : itemList_1[varData_296.level].func(varData_296, param_2);
        if (varData_308 === numericVal_42 || varData_308 === numericVal_43) {
          varData_296.status = numericVal_39;
        }
        if (varData_308 === numericVal_40 || varData_308 === numericVal_42) {
          if (param_1.avail_out === 0) {
            varData_296.last_flush = -1;
          }
          return _0x107510;
        }
        if (varData_308 === numericVal_41) {
          if (param_2 === _0xc6983b) {
            _0xac266b(varData_296);
          } else if (param_2 !== _0x8529e3) {
            _0x93f796(varData_296, 0, 0, false);
            if (param_2 === _0x349fff) {
              varData_227(varData_296.head);
              if (varData_296.lookahead === 0) {
                varData_296.strstart = 0;
                varData_296.block_start = 0;
                varData_296.insert = 0;
              }
            }
          }
          varData_236(param_1);
          if (param_1.avail_out === 0) {
            varData_296.last_flush = -1;
            return _0x107510;
          }
        }
      }
      if (param_2 !== _0x17017e) {
        return _0x107510;
      }
      if (varData_296.wrap <= 0) {
        return _0x1bf413;
      }
      if (varData_296.wrap === 2) {
        varData_240(varData_296, param_1.adler & 255);
        varData_240(varData_296, param_1.adler >> 8 & 255);
        varData_240(varData_296, param_1.adler >> 16 & 255);
        varData_240(varData_296, param_1.adler >> 24 & 255);
        varData_240(varData_296, param_1.total_in & 255);
        varData_240(varData_296, param_1.total_in >> 8 & 255);
        varData_240(varData_296, param_1.total_in >> 16 & 255);
        varData_240(varData_296, param_1.total_in >> 24 & 255);
      } else {
        varData_241(varData_296, param_1.adler >>> 16);
        varData_241(varData_296, param_1.adler & 65535);
      }
      varData_236(param_1);
      if (varData_296.wrap > 0) {
        varData_296.wrap = -varData_296.wrap;
      }
      if (varData_296.pending !== 0) {
        return _0x107510;
      } else {
        return _0x1bf413;
      }
    };
    const varData_309 = (param_1) => {
      if (varData_285(param_1)) {
        return _0x4831f3;
      }
      const varData_310 = param_1.state.status;
      param_1.state = null;
      if (varData_310 === numericVal_38) {
        return varData_225(param_1, _0x4b273d);
      } else {
        return _0x107510;
      }
    };
    const varData_311 = (param_1, param_2) => {
      let varData_312 = param_2.length;
      if (varData_285(param_1)) {
        return _0x4831f3;
      }
      const varData_313 = param_1.state;
      const varData_314 = varData_313.wrap;
      if (varData_314 === 2 || varData_314 === 1 && varData_313.status !== numericVal_32 || varData_313.lookahead) {
        return _0x4831f3;
      }
      if (varData_314 === 1) {
        param_1.adler = varData_211(param_1.adler, param_2, varData_312, 0);
      }
      varData_313.wrap = 0;
      if (varData_312 >= varData_313.w_size) {
        if (varData_314 === 0) {
          varData_227(varData_313.head);
          varData_313.strstart = 0;
          varData_313.block_start = 0;
          varData_313.insert = 0;
        }
        let varData_315 = new Uint8Array(varData_313.w_size);
        varData_315.set(param_2.subarray(varData_312 - varData_313.w_size, varData_312), 0);
        param_2 = varData_315;
        varData_312 = varData_313.w_size;
      }
      const varData_316 = param_1.avail_in;
      const varData_317 = param_1.next_in;
      const varData_318 = param_1.input;
      param_1.avail_in = varData_312;
      param_1.next_in = 0;
      param_1.input = param_2;
      varData_258(varData_313);
      while (varData_313.lookahead >= numericVal_29) {
        let varData_319 = varData_313.strstart;
        let varData_320 = varData_313.lookahead - (numericVal_29 - 1);
        do {
          varData_313.ins_h = varData_235(varData_313, varData_313.ins_h, varData_313.window[varData_319 + numericVal_29 - 1]);
          varData_313.prev[varData_319 & varData_313.w_mask] = varData_313.head[varData_313.ins_h];
          varData_313.head[varData_313.ins_h] = varData_319;
          varData_319++;
        } while (--varData_320);
        varData_313.strstart = varData_319;
        varData_313.lookahead = numericVal_29 - 1;
        varData_258(varData_313);
      }
      varData_313.strstart += varData_313.lookahead;
      varData_313.block_start = varData_313.strstart;
      varData_313.insert = varData_313.lookahead;
      varData_313.lookahead = 0;
      varData_313.match_length = varData_313.prev_length = numericVal_29 - 1;
      varData_313.match_available = 0;
      param_1.next_in = varData_317;
      param_1.input = varData_318;
      param_1.avail_in = varData_316;
      varData_313.wrap = varData_314;
      return _0x107510;
    };
    var varData_321 = varData_294;
    var varData_322 = varData_292;
    var varData_323 = varData_289;
    var varData_324 = varData_287;
    var varData_325 = varData_291;
    var varData_326 = varData_295;
    var varData_327 = varData_309;
    var varData_328 = varData_311;
    var varData_329 = "pako deflate (from Nodeca project)";
    var varData_330 = {
      deflateInit: varData_321,
      deflateInit2: varData_322,
      deflateReset: varData_323,
      deflateResetKeep: varData_324,
      deflateSetHeader: varData_325,
      deflate: varData_326,
      deflateEnd: varData_327,
      deflateSetDictionary: varData_328,
      deflateInfo: varData_329
    };
    var varData_331 = varData_330;
    const varData_332 = (param_1, param_2) => {
      return Object.prototype.hasOwnProperty.call(param_1, param_2);
    };
    function handleAction_50(param_1) {
      const varData_333 = Array.prototype.slice.call(arguments, 1);
      while (varData_333.length) {
        const varData_334 = varData_333.shift();
        if (!varData_334) {
          continue;
        }
        if (typeof varData_334 !== "object") {
          throw new TypeError(varData_334 + "must be non-object");
        }
        for (const varData_335 in varData_334) {
          if (varData_332(varData_334, varData_335)) {
            param_1[varData_335] = varData_334[varData_335];
          }
        }
      }
      return param_1;
    }
    var varData_336 = (param_1) => {
      let numericVal_452 = 0;
      for (let numericVal_462 = 0, loopIdx = param_1.length; numericVal_462 < loopIdx; numericVal_462++) {
        numericVal_452 += param_1[numericVal_462].length;
      }
      const varData_337 = new Uint8Array(numericVal_452);
      for (let numericVal_462 = 0, numericVal_472 = 0, loopIdx = param_1.length; numericVal_462 < loopIdx; numericVal_462++) {
        let varData_338 = param_1[numericVal_462];
        varData_337.set(varData_338, numericVal_472);
        numericVal_472 += varData_338.length;
      }
      return varData_337;
    };
    var varData_339 = {
      assign: handleAction_50,
      flattenChunks: varData_336
    };
    var varData_340 = varData_339;
    let isEnabled = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (err) {
      isEnabled = false;
    }
    const varData_341 = new Uint8Array(256);
    for (let numericVal_452 = 0; numericVal_452 < 256; numericVal_452++) {
      varData_341[numericVal_452] = numericVal_452 >= 252 ? 6 : numericVal_452 >= 248 ? 5 : numericVal_452 >= 240 ? 4 : numericVal_452 >= 224 ? 3 : numericVal_452 >= 192 ? 2 : 1;
    }
    varData_341[254] = varData_341[254] = 1;
    var varData_342 = (param_1) => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(param_1);
      }
      let varData_343;
      let varData_344;
      let varData_345;
      let varData_346;
      let varData_347;
      let varData_348 = param_1.length;
      let numericVal_452 = 0;
      for (varData_346 = 0; varData_346 < varData_348; varData_346++) {
        varData_344 = param_1.charCodeAt(varData_346);
        if ((varData_344 & 64512) === 55296 && varData_346 + 1 < varData_348) {
          varData_345 = param_1.charCodeAt(varData_346 + 1);
          if ((varData_345 & 64512) === 56320) {
            varData_344 = 65536 + (varData_344 - 55296 << 10) + (varData_345 - 56320);
            varData_346++;
          }
        }
        numericVal_452 += varData_344 < 128 ? 1 : varData_344 < 2048 ? 2 : varData_344 < 65536 ? 3 : 4;
      }
      varData_343 = new Uint8Array(numericVal_452);
      varData_347 = 0;
      varData_346 = 0;
      for (; varData_347 < numericVal_452; varData_346++) {
        varData_344 = param_1.charCodeAt(varData_346);
        if ((varData_344 & 64512) === 55296 && varData_346 + 1 < varData_348) {
          varData_345 = param_1.charCodeAt(varData_346 + 1);
          if ((varData_345 & 64512) === 56320) {
            varData_344 = 65536 + (varData_344 - 55296 << 10) + (varData_345 - 56320);
            varData_346++;
          }
        }
        if (varData_344 < 128) {
          varData_343[varData_347++] = varData_344;
        } else if (varData_344 < 2048) {
          varData_343[varData_347++] = varData_344 >>> 6 | 192;
          varData_343[varData_347++] = varData_344 & 63 | 128;
        } else if (varData_344 < 65536) {
          varData_343[varData_347++] = varData_344 >>> 12 | 224;
          varData_343[varData_347++] = varData_344 >>> 6 & 63 | 128;
          varData_343[varData_347++] = varData_344 & 63 | 128;
        } else {
          varData_343[varData_347++] = varData_344 >>> 18 | 240;
          varData_343[varData_347++] = varData_344 >>> 12 & 63 | 128;
          varData_343[varData_347++] = varData_344 >>> 6 & 63 | 128;
          varData_343[varData_347++] = varData_344 & 63 | 128;
        }
      }
      return varData_343;
    };
    const varData_349 = (param_1, param_2) => {
      if (param_2 < 65534) {
        if (param_1.subarray && isEnabled) {
          return String.fromCharCode.apply(null, param_1.length === param_2 ? param_1 : param_1.subarray(0, param_2));
        }
      }
      let strBuffer = "";
      for (let numericVal_452 = 0; numericVal_452 < param_2; numericVal_452++) {
        strBuffer += String.fromCharCode(param_1[numericVal_452]);
      }
      return strBuffer;
    };
    var varData_350 = (param_1, param_2) => {
      const varData_351 = param_2 || param_1.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(param_1.subarray(0, param_2));
      }
      let varData_352;
      let varData_353;
      const varData_354 = new Array(varData_351 * 2);
      varData_353 = 0;
      varData_352 = 0;
      while (varData_352 < varData_351) {
        let varData_355 = param_1[varData_352++];
        if (varData_355 < 128) {
          varData_354[varData_353++] = varData_355;
          continue;
        }
        let varData_356 = varData_341[varData_355];
        if (varData_356 > 4) {
          varData_354[varData_353++] = 65533;
          varData_352 += varData_356 - 1;
          continue;
        }
        varData_355 &= varData_356 === 2 ? 31 : varData_356 === 3 ? 15 : 7;
        while (varData_356 > 1 && varData_352 < varData_351) {
          varData_355 = varData_355 << 6 | param_1[varData_352++] & 63;
          varData_356--;
        }
        if (varData_356 > 1) {
          varData_354[varData_353++] = 65533;
          continue;
        }
        if (varData_355 < 65536) {
          varData_354[varData_353++] = varData_355;
        } else {
          varData_355 -= 65536;
          varData_354[varData_353++] = varData_355 >> 10 & 1023 | 55296;
          varData_354[varData_353++] = varData_355 & 1023 | 56320;
        }
      }
      return varData_349(varData_354, varData_353);
    };
    var varData_357 = (param_1, param_2) => {
      param_2 = param_2 || param_1.length;
      if (param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      let varData_358 = param_2 - 1;
      while (varData_358 >= 0 && (param_1[varData_358] & 192) === 128) {
        varData_358--;
      }
      if (varData_358 < 0) {
        return param_2;
      }
      if (varData_358 === 0) {
        return param_2;
      }
      if (varData_358 + varData_341[param_1[varData_358]] > param_2) {
        return varData_358;
      } else {
        return param_2;
      }
    };
    var varData_359 = {
      string2buf: varData_342,
      buf2string: varData_350,
      utf8border: varData_357
    };
    var varData_360 = varData_359;
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
    var varData_361 = handleAction_51;
    const varData_362 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x46cb0e,
      Z_SYNC_FLUSH: _0x1c7833,
      Z_FULL_FLUSH: _0x517cc5,
      Z_FINISH: _0x4629e1,
      Z_OK: _0x4b4445,
      Z_STREAM_END: _0x5bda97,
      Z_DEFAULT_COMPRESSION: _0x132462,
      Z_DEFAULT_STRATEGY: _0x1bc43d,
      Z_DEFLATED: _0x3d9bda
    } = varData_221;
    function handleAction_52(param_1) {
      var varData_363 = {
        level: _0x132462,
        method: _0x3d9bda,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: _0x1bc43d
      };
      this.options = varData_340.assign(varData_363, param_1 || {});
      let varData_364 = this.options;
      if (varData_364.raw && varData_364.windowBits > 0) {
        varData_364.windowBits = -varData_364.windowBits;
      } else if (varData_364.gzip && varData_364.windowBits > 0 && varData_364.windowBits < 16) {
        varData_364.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_361();
      this.strm.avail_out = 0;
      let varData_365 = varData_331.deflateInit2(this.strm, varData_364.level, varData_364.method, varData_364.windowBits, varData_364.memLevel, varData_364.strategy);
      if (varData_365 !== _0x4b4445) {
        throw new Error(varData_219[varData_365]);
      }
      if (varData_364.header) {
        varData_331.deflateSetHeader(this.strm, varData_364.header);
      }
      if (varData_364.dictionary) {
        let varData_366;
        if (typeof varData_364.dictionary === "string") {
          varData_366 = varData_360.string2buf(varData_364.dictionary);
        } else if (varData_362.call(varData_364.dictionary) === "[object ArrayBuffer]") {
          varData_366 = new Uint8Array(varData_364.dictionary);
        } else {
          varData_366 = varData_364.dictionary;
        }
        varData_365 = varData_331.deflateSetDictionary(this.strm, varData_366);
        if (varData_365 !== _0x4b4445) {
          throw new Error(varData_219[varData_365]);
        }
        this._dict_set = true;
      }
    }
    handleAction_52.prototype.push = function(param_1, param_2) {
      const varData_367 = this.strm;
      const varData_368 = this.options.chunkSize;
      let varData_369;
      let varData_370;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_370 = param_2;
      } else {
        varData_370 = param_2 === true ? _0x4629e1 : _0x46cb0e;
      }
      if (typeof param_1 === "string") {
        varData_367.input = varData_360.string2buf(param_1);
      } else if (varData_362.call(param_1) === "[object ArrayBuffer]") {
        varData_367.input = new Uint8Array(param_1);
      } else {
        varData_367.input = param_1;
      }
      varData_367.next_in = 0;
      varData_367.avail_in = varData_367.input.length;
      while (true) {
        if (varData_367.avail_out === 0) {
          varData_367.output = new Uint8Array(varData_368);
          varData_367.next_out = 0;
          varData_367.avail_out = varData_368;
        }
        if ((varData_370 === _0x1c7833 || varData_370 === _0x517cc5) && varData_367.avail_out <= 6) {
          this.onData(varData_367.output.subarray(0, varData_367.next_out));
          varData_367.avail_out = 0;
          continue;
        }
        varData_369 = varData_331.deflate(varData_367, varData_370);
        if (varData_369 === _0x5bda97) {
          if (varData_367.next_out > 0) {
            this.onData(varData_367.output.subarray(0, varData_367.next_out));
          }
          varData_369 = varData_331.deflateEnd(this.strm);
          this.onEnd(varData_369);
          this.ended = true;
          return varData_369 === _0x4b4445;
        }
        if (varData_367.avail_out === 0) {
          this.onData(varData_367.output);
          continue;
        }
        if (varData_370 > 0 && varData_367.next_out > 0) {
          this.onData(varData_367.output.subarray(0, varData_367.next_out));
          varData_367.avail_out = 0;
          continue;
        }
        if (varData_367.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_52.prototype.onData = function(param_1) {
      this.chunks.push(param_1);
    };
    handleAction_52.prototype.onEnd = function(param_1) {
      if (param_1 === _0x4b4445) {
        this.result = varData_340.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_53(param_1, param_2) {
      const varData_371 = new handleAction_52(param_2);
      varData_371.push(param_1, true);
      if (varData_371.err) {
        throw varData_371.msg || varData_219[varData_371.err];
      }
      return varData_371.result;
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
    var varData_372 = handleAction_52;
    var varData_373 = handleAction_53;
    var varData_374 = handleAction_54;
    var varData_375 = handleAction_55;
    var varData_376 = varData_221;
    var varData_377 = {
      Deflate: varData_372,
      deflate: varData_373,
      deflateRaw: varData_374,
      gzip: varData_375,
      constants: varData_376
    };
    var varData_378 = varData_377;
    const numericVal_45 = 16209;
    const numericVal_46 = 16191;
    var varData_379 = function _0xa25e61(param_1, param_2) {
      let varData_380;
      let varData_381;
      let varData_382;
      let varData_383;
      let varData_384;
      let varData_385;
      let varData_386;
      let varData_387;
      let varData_388;
      let varData_389;
      let varData_390;
      let varData_391;
      let varData_392;
      let varData_393;
      let varData_394;
      let varData_395;
      let varData_396;
      let varData_397;
      let varData_398;
      let varData_399;
      let varData_400;
      let varData_401;
      let varData_402;
      let varData_403;
      const varData_404 = param_1.state;
      varData_380 = param_1.next_in;
      varData_402 = param_1.input;
      varData_381 = varData_380 + (param_1.avail_in - 5);
      varData_382 = param_1.next_out;
      varData_403 = param_1.output;
      varData_383 = varData_382 - (param_2 - param_1.avail_out);
      varData_384 = varData_382 + (param_1.avail_out - 257);
      varData_385 = varData_404.dmax;
      varData_386 = varData_404.wsize;
      varData_387 = varData_404.whave;
      varData_388 = varData_404.wnext;
      varData_389 = varData_404.window;
      varData_390 = varData_404.hold;
      varData_391 = varData_404.bits;
      varData_392 = varData_404.lencode;
      varData_393 = varData_404.distcode;
      varData_394 = (1 << varData_404.lenbits) - 1;
      varData_395 = (1 << varData_404.distbits) - 1;
      _0x25432f: do {
        if (varData_391 < 15) {
          varData_390 += varData_402[varData_380++] << varData_391;
          varData_391 += 8;
          varData_390 += varData_402[varData_380++] << varData_391;
          varData_391 += 8;
        }
        varData_396 = varData_392[varData_390 & varData_394];
        _0x5f4c83: while (true) {
          varData_397 = varData_396 >>> 24;
          varData_390 >>>= varData_397;
          varData_391 -= varData_397;
          varData_397 = varData_396 >>> 16 & 255;
          if (varData_397 === 0) {
            varData_403[varData_382++] = varData_396 & 65535;
          } else if (varData_397 & 16) {
            varData_398 = varData_396 & 65535;
            varData_397 &= 15;
            if (varData_397) {
              if (varData_391 < varData_397) {
                varData_390 += varData_402[varData_380++] << varData_391;
                varData_391 += 8;
              }
              varData_398 += varData_390 & (1 << varData_397) - 1;
              varData_390 >>>= varData_397;
              varData_391 -= varData_397;
            }
            if (varData_391 < 15) {
              varData_390 += varData_402[varData_380++] << varData_391;
              varData_391 += 8;
              varData_390 += varData_402[varData_380++] << varData_391;
              varData_391 += 8;
            }
            varData_396 = varData_393[varData_390 & varData_395];
            _0x3cb802: while (true) {
              varData_397 = varData_396 >>> 24;
              varData_390 >>>= varData_397;
              varData_391 -= varData_397;
              varData_397 = varData_396 >>> 16 & 255;
              if (varData_397 & 16) {
                varData_399 = varData_396 & 65535;
                varData_397 &= 15;
                if (varData_391 < varData_397) {
                  varData_390 += varData_402[varData_380++] << varData_391;
                  varData_391 += 8;
                  if (varData_391 < varData_397) {
                    varData_390 += varData_402[varData_380++] << varData_391;
                    varData_391 += 8;
                  }
                }
                varData_399 += varData_390 & (1 << varData_397) - 1;
                if (varData_399 > varData_385) {
                  param_1.msg = "invalid distance too far back";
                  varData_404.mode = numericVal_45;
                  break _0x25432f;
                }
                varData_390 >>>= varData_397;
                varData_391 -= varData_397;
                varData_397 = varData_382 - varData_383;
                if (varData_399 > varData_397) {
                  varData_397 = varData_399 - varData_397;
                  if (varData_397 > varData_387) {
                    if (varData_404.sane) {
                      param_1.msg = "invalid distance too far back";
                      varData_404.mode = numericVal_45;
                      break _0x25432f;
                    }
                  }
                  varData_400 = 0;
                  varData_401 = varData_389;
                  if (varData_388 === 0) {
                    varData_400 += varData_386 - varData_397;
                    if (varData_397 < varData_398) {
                      varData_398 -= varData_397;
                      do {
                        varData_403[varData_382++] = varData_389[varData_400++];
                      } while (--varData_397);
                      varData_400 = varData_382 - varData_399;
                      varData_401 = varData_403;
                    }
                  } else if (varData_388 < varData_397) {
                    varData_400 += varData_386 + varData_388 - varData_397;
                    varData_397 -= varData_388;
                    if (varData_397 < varData_398) {
                      varData_398 -= varData_397;
                      do {
                        varData_403[varData_382++] = varData_389[varData_400++];
                      } while (--varData_397);
                      varData_400 = 0;
                      if (varData_388 < varData_398) {
                        varData_397 = varData_388;
                        varData_398 -= varData_397;
                        do {
                          varData_403[varData_382++] = varData_389[varData_400++];
                        } while (--varData_397);
                        varData_400 = varData_382 - varData_399;
                        varData_401 = varData_403;
                      }
                    }
                  } else {
                    varData_400 += varData_388 - varData_397;
                    if (varData_397 < varData_398) {
                      varData_398 -= varData_397;
                      do {
                        varData_403[varData_382++] = varData_389[varData_400++];
                      } while (--varData_397);
                      varData_400 = varData_382 - varData_399;
                      varData_401 = varData_403;
                    }
                  }
                  while (varData_398 > 2) {
                    varData_403[varData_382++] = varData_401[varData_400++];
                    varData_403[varData_382++] = varData_401[varData_400++];
                    varData_403[varData_382++] = varData_401[varData_400++];
                    varData_398 -= 3;
                  }
                  if (varData_398) {
                    varData_403[varData_382++] = varData_401[varData_400++];
                    if (varData_398 > 1) {
                      varData_403[varData_382++] = varData_401[varData_400++];
                    }
                  }
                } else {
                  varData_400 = varData_382 - varData_399;
                  do {
                    varData_403[varData_382++] = varData_403[varData_400++];
                    varData_403[varData_382++] = varData_403[varData_400++];
                    varData_403[varData_382++] = varData_403[varData_400++];
                    varData_398 -= 3;
                  } while (varData_398 > 2);
                  if (varData_398) {
                    varData_403[varData_382++] = varData_403[varData_400++];
                    if (varData_398 > 1) {
                      varData_403[varData_382++] = varData_403[varData_400++];
                    }
                  }
                }
              } else if ((varData_397 & 64) === 0) {
                varData_396 = varData_393[(varData_396 & 65535) + (varData_390 & (1 << varData_397) - 1)];
                continue _0x3cb802;
              } else {
                param_1.msg = "invalid distance code";
                varData_404.mode = numericVal_45;
                break _0x25432f;
              }
              break;
            }
          } else if ((varData_397 & 64) === 0) {
            varData_396 = varData_392[(varData_396 & 65535) + (varData_390 & (1 << varData_397) - 1)];
            continue _0x5f4c83;
          } else if (varData_397 & 32) {
            varData_404.mode = numericVal_46;
            break _0x25432f;
          } else {
            param_1.msg = "invalid literal/length code";
            varData_404.mode = numericVal_45;
            break _0x25432f;
          }
          break;
        }
      } while (varData_380 < varData_381 && varData_382 < varData_384);
      varData_398 = varData_391 >> 3;
      varData_380 -= varData_398;
      varData_391 -= varData_398 << 3;
      varData_390 &= (1 << varData_391) - 1;
      param_1.next_in = varData_380;
      param_1.next_out = varData_382;
      param_1.avail_in = varData_380 < varData_381 ? 5 + (varData_381 - varData_380) : 5 - (varData_380 - varData_381);
      param_1.avail_out = varData_382 < varData_384 ? 257 + (varData_384 - varData_382) : 257 - (varData_382 - varData_384);
      varData_404.hold = varData_390;
      varData_404.bits = varData_391;
      return;
    };
    const numericVal_47 = 15;
    const numericVal_48 = 852;
    const numericVal_49 = 592;
    const numericVal_50 = 0;
    const numericVal_51 = 1;
    const numericVal_52 = 2;
    const varData_405 = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const varData_406 = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const varData_407 = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const varData_408 = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    const varData_409 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
      const varData_410 = param_8.bits;
      let numericVal_532 = 0;
      let numericVal_542 = 0;
      let numericVal_552 = 0;
      let numericVal_562 = 0;
      let numericVal_572 = 0;
      let numericVal_582 = 0;
      let numericVal_592 = 0;
      let numericVal_602 = 0;
      let numericVal_612 = 0;
      let numericVal_622 = 0;
      let varData_411;
      let varData_412;
      let varData_413;
      let varData_414;
      let varData_415;
      let varData_416 = null;
      let varData_417;
      const varData_418 = new Uint16Array(numericVal_47 + 1);
      const varData_419 = new Uint16Array(numericVal_47 + 1);
      let varData_420 = null;
      let varData_421;
      let varData_422;
      let varData_423;
      for (numericVal_532 = 0; numericVal_532 <= numericVal_47; numericVal_532++) {
        varData_418[numericVal_532] = 0;
      }
      for (numericVal_542 = 0; numericVal_542 < param_4; numericVal_542++) {
        varData_418[param_2[param_3 + numericVal_542]]++;
      }
      numericVal_572 = varData_410;
      for (numericVal_562 = numericVal_47; numericVal_562 >= 1; numericVal_562--) {
        if (varData_418[numericVal_562] !== 0) {
          break;
        }
      }
      if (numericVal_572 > numericVal_562) {
        numericVal_572 = numericVal_562;
      }
      if (numericVal_562 === 0) {
        param_5[param_6++] = 20971520;
        param_5[param_6++] = 20971520;
        param_8.bits = 1;
        return 0;
      }
      for (numericVal_552 = 1; numericVal_552 < numericVal_562; numericVal_552++) {
        if (varData_418[numericVal_552] !== 0) {
          break;
        }
      }
      if (numericVal_572 < numericVal_552) {
        numericVal_572 = numericVal_552;
      }
      numericVal_602 = 1;
      for (numericVal_532 = 1; numericVal_532 <= numericVal_47; numericVal_532++) {
        numericVal_602 <<= 1;
        numericVal_602 -= varData_418[numericVal_532];
        if (numericVal_602 < 0) {
          return -1;
        }
      }
      if (numericVal_602 > 0 && (param_1 === numericVal_50 || numericVal_562 !== 1)) {
        return -1;
      }
      varData_419[1] = 0;
      for (numericVal_532 = 1; numericVal_532 < numericVal_47; numericVal_532++) {
        varData_419[numericVal_532 + 1] = varData_419[numericVal_532] + varData_418[numericVal_532];
      }
      for (numericVal_542 = 0; numericVal_542 < param_4; numericVal_542++) {
        if (param_2[param_3 + numericVal_542] !== 0) {
          param_7[varData_419[param_2[param_3 + numericVal_542]]++] = numericVal_542;
        }
      }
      if (param_1 === numericVal_50) {
        varData_416 = varData_420 = param_7;
        varData_417 = 20;
      } else if (param_1 === numericVal_51) {
        varData_416 = varData_405;
        varData_420 = varData_406;
        varData_417 = 257;
      } else {
        varData_416 = varData_407;
        varData_420 = varData_408;
        varData_417 = 0;
      }
      numericVal_622 = 0;
      numericVal_542 = 0;
      numericVal_532 = numericVal_552;
      varData_415 = param_6;
      numericVal_582 = numericVal_572;
      numericVal_592 = 0;
      varData_413 = -1;
      numericVal_612 = 1 << numericVal_572;
      varData_414 = numericVal_612 - 1;
      if (param_1 === numericVal_51 && numericVal_612 > numericVal_48 || param_1 === numericVal_52 && numericVal_612 > numericVal_49) {
        return 1;
      }
      while (true) {
        varData_421 = numericVal_532 - numericVal_592;
        if (param_7[numericVal_542] + 1 < varData_417) {
          varData_422 = 0;
          varData_423 = param_7[numericVal_542];
        } else if (param_7[numericVal_542] >= varData_417) {
          varData_422 = varData_420[param_7[numericVal_542] - varData_417];
          varData_423 = varData_416[param_7[numericVal_542] - varData_417];
        } else {
          varData_422 = 96;
          varData_423 = 0;
        }
        varData_411 = 1 << numericVal_532 - numericVal_592;
        varData_412 = 1 << numericVal_582;
        numericVal_552 = varData_412;
        do {
          varData_412 -= varData_411;
          param_5[varData_415 + (numericVal_622 >> numericVal_592) + varData_412] = varData_421 << 24 | varData_422 << 16 | varData_423 | 0;
        } while (varData_412 !== 0);
        varData_411 = 1 << numericVal_532 - 1;
        while (numericVal_622 & varData_411) {
          varData_411 >>= 1;
        }
        if (varData_411 !== 0) {
          numericVal_622 &= varData_411 - 1;
          numericVal_622 += varData_411;
        } else {
          numericVal_622 = 0;
        }
        numericVal_542++;
        if (--varData_418[numericVal_532] === 0) {
          if (numericVal_532 === numericVal_562) {
            break;
          }
          numericVal_532 = param_2[param_3 + param_7[numericVal_542]];
        }
        if (numericVal_532 > numericVal_572 && (numericVal_622 & varData_414) !== varData_413) {
          if (numericVal_592 === 0) {
            numericVal_592 = numericVal_572;
          }
          varData_415 += numericVal_552;
          numericVal_582 = numericVal_532 - numericVal_592;
          numericVal_602 = 1 << numericVal_582;
          while (numericVal_582 + numericVal_592 < numericVal_562) {
            numericVal_602 -= varData_418[numericVal_582 + numericVal_592];
            if (numericVal_602 <= 0) {
              break;
            }
            numericVal_582++;
            numericVal_602 <<= 1;
          }
          numericVal_612 += 1 << numericVal_582;
          if (param_1 === numericVal_51 && numericVal_612 > numericVal_48 || param_1 === numericVal_52 && numericVal_612 > numericVal_49) {
            return 1;
          }
          varData_413 = numericVal_622 & varData_414;
          param_5[varData_413] = numericVal_572 << 24 | numericVal_582 << 16 | varData_415 - param_6 | 0;
        }
      }
      if (numericVal_622 !== 0) {
        param_5[varData_415 + numericVal_622] = numericVal_532 - numericVal_592 << 24 | 4194304 | 0;
      }
      param_8.bits = numericVal_572;
      return 0;
    };
    var varData_424 = varData_409;
    const numericVal_53 = 0;
    const numericVal_54 = 1;
    const numericVal_55 = 2;
    const {
      Z_FINISH: _0x44b4a4,
      Z_BLOCK: _0x8ff04a,
      Z_TREES: _0x585954,
      Z_OK: _0x1d7f2e,
      Z_STREAM_END: _0x388768,
      Z_NEED_DICT: _0x2fac64,
      Z_STREAM_ERROR: _0x1f07bc,
      Z_DATA_ERROR: _0x1d9d19,
      Z_MEM_ERROR: _0x5b8221,
      Z_BUF_ERROR: _0x382417,
      Z_DEFLATED: _0x2a1796
    } = varData_221;
    const numericVal_56 = 16180;
    const numericVal_57 = 16181;
    const numericVal_58 = 16182;
    const numericVal_59 = 16183;
    const numericVal_60 = 16184;
    const numericVal_61 = 16185;
    const numericVal_62 = 16186;
    const numericVal_63 = 16187;
    const numericVal_64 = 16188;
    const numericVal_65 = 16189;
    const numericVal_66 = 16190;
    const numericVal_67 = 16191;
    const numericVal_68 = 16192;
    const numericVal_69 = 16193;
    const numericVal_70 = 16194;
    const numericVal_71 = 16195;
    const numericVal_72 = 16196;
    const numericVal_73 = 16197;
    const numericVal_74 = 16198;
    const numericVal_75 = 16199;
    const numericVal_76 = 16200;
    const numericVal_77 = 16201;
    const numericVal_78 = 16202;
    const numericVal_79 = 16203;
    const numericVal_80 = 16204;
    const numericVal_81 = 16205;
    const numericVal_82 = 16206;
    const numericVal_83 = 16207;
    const numericVal_84 = 16208;
    const numericVal_85 = 16209;
    const numericVal_86 = 16210;
    const numericVal_87 = 16211;
    const numericVal_88 = 852;
    const numericVal_89 = 592;
    const numericVal_90 = 15;
    const varData_425 = numericVal_90;
    const varData_426 = (param_1) => {
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
    const varData_427 = (param_1) => {
      if (!param_1) {
        return 1;
      }
      const varData_428 = param_1.state;
      if (!varData_428 || varData_428.strm !== param_1 || varData_428.mode < numericVal_56 || varData_428.mode > numericVal_87) {
        return 1;
      }
      return 0;
    };
    const varData_429 = (param_1) => {
      if (varData_427(param_1)) {
        return _0x1f07bc;
      }
      const varData_430 = param_1.state;
      param_1.total_in = param_1.total_out = varData_430.total = 0;
      param_1.msg = "";
      if (varData_430.wrap) {
        param_1.adler = varData_430.wrap & 1;
      }
      varData_430.mode = numericVal_56;
      varData_430.last = 0;
      varData_430.havedict = 0;
      varData_430.flags = -1;
      varData_430.dmax = 32768;
      varData_430.head = null;
      varData_430.hold = 0;
      varData_430.bits = 0;
      varData_430.lencode = varData_430.lendyn = new Int32Array(numericVal_88);
      varData_430.distcode = varData_430.distdyn = new Int32Array(numericVal_89);
      varData_430.sane = 1;
      varData_430.back = -1;
      return _0x1d7f2e;
    };
    const varData_431 = (param_1) => {
      if (varData_427(param_1)) {
        return _0x1f07bc;
      }
      const varData_432 = param_1.state;
      varData_432.wsize = 0;
      varData_432.whave = 0;
      varData_432.wnext = 0;
      return varData_429(param_1);
    };
    const varData_433 = (param_1, param_2) => {
      let varData_434;
      if (varData_427(param_1)) {
        return _0x1f07bc;
      }
      const varData_435 = param_1.state;
      if (param_2 < 0) {
        varData_434 = 0;
        param_2 = -param_2;
      } else {
        varData_434 = (param_2 >> 4) + 5;
        if (param_2 < 48) {
          param_2 &= 15;
        }
      }
      if (param_2 && (param_2 < 8 || param_2 > 15)) {
        return _0x1f07bc;
      }
      if (varData_435.window !== null && varData_435.wbits !== param_2) {
        varData_435.window = null;
      }
      varData_435.wrap = varData_434;
      varData_435.wbits = param_2;
      return varData_431(param_1);
    };
    const varData_436 = (param_1, param_2) => {
      if (!param_1) {
        return _0x1f07bc;
      }
      const varData_437 = new handleAction_56();
      param_1.state = varData_437;
      varData_437.strm = param_1;
      varData_437.window = null;
      varData_437.mode = numericVal_56;
      const varData_438 = varData_433(param_1, param_2);
      if (varData_438 !== _0x1d7f2e) {
        param_1.state = null;
      }
      return varData_438;
    };
    const varData_439 = (param_1) => {
      return varData_436(param_1, varData_425);
    };
    let isEnabled_1 = true;
    let varData_440;
    let varData_441;
    const varData_442 = (param_1) => {
      if (isEnabled_1) {
        varData_440 = new Int32Array(512);
        varData_441 = new Int32Array(32);
        let numericVal_912 = 0;
        while (numericVal_912 < 144) {
          param_1.lens[numericVal_912++] = 8;
        }
        while (numericVal_912 < 256) {
          param_1.lens[numericVal_912++] = 9;
        }
        while (numericVal_912 < 280) {
          param_1.lens[numericVal_912++] = 7;
        }
        while (numericVal_912 < 288) {
          param_1.lens[numericVal_912++] = 8;
        }
        varData_424(numericVal_54, param_1.lens, 0, 288, varData_440, 0, param_1.work, {
          bits: 9
        });
        numericVal_912 = 0;
        while (numericVal_912 < 32) {
          param_1.lens[numericVal_912++] = 5;
        }
        varData_424(numericVal_55, param_1.lens, 0, 32, varData_441, 0, param_1.work, {
          bits: 5
        });
        isEnabled_1 = false;
      }
      param_1.lencode = varData_440;
      param_1.lenbits = 9;
      param_1.distcode = varData_441;
      param_1.distbits = 5;
    };
    const varData_443 = (param_1, param_2, param_3, param_4) => {
      let varData_444;
      const varData_445 = param_1.state;
      if (varData_445.window === null) {
        varData_445.wsize = 1 << varData_445.wbits;
        varData_445.wnext = 0;
        varData_445.whave = 0;
        varData_445.window = new Uint8Array(varData_445.wsize);
      }
      if (param_4 >= varData_445.wsize) {
        varData_445.window.set(param_2.subarray(param_3 - varData_445.wsize, param_3), 0);
        varData_445.wnext = 0;
        varData_445.whave = varData_445.wsize;
      } else {
        varData_444 = varData_445.wsize - varData_445.wnext;
        if (varData_444 > param_4) {
          varData_444 = param_4;
        }
        varData_445.window.set(param_2.subarray(param_3 - param_4, param_3 - param_4 + varData_444), varData_445.wnext);
        param_4 -= varData_444;
        if (param_4) {
          varData_445.window.set(param_2.subarray(param_3 - param_4, param_3), 0);
          varData_445.wnext = param_4;
          varData_445.whave = varData_445.wsize;
        } else {
          varData_445.wnext += varData_444;
          if (varData_445.wnext === varData_445.wsize) {
            varData_445.wnext = 0;
          }
          if (varData_445.whave < varData_445.wsize) {
            varData_445.whave += varData_444;
          }
        }
      }
      return 0;
    };
    const varData_446 = (param_1, param_2) => {
      let varData_447;
      let varData_448;
      let varData_449;
      let varData_450;
      let varData_451;
      let varData_452;
      let varData_453;
      let varData_454;
      let varData_455;
      let varData_456;
      let varData_457;
      let varData_458;
      let varData_459;
      let varData_460;
      let numericVal_912 = 0;
      let varData_461;
      let varData_462;
      let varData_463;
      let varData_464;
      let varData_465;
      let varData_466;
      let varData_467;
      let varData_468;
      const varData_469 = new Uint8Array(4);
      let varData_470;
      let varData_471;
      const varData_472 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (varData_427(param_1) || !param_1.output || !param_1.input && param_1.avail_in !== 0) {
        return _0x1f07bc;
      }
      varData_447 = param_1.state;
      if (varData_447.mode === numericVal_67) {
        varData_447.mode = numericVal_68;
      }
      varData_451 = param_1.next_out;
      varData_449 = param_1.output;
      varData_453 = param_1.avail_out;
      varData_450 = param_1.next_in;
      varData_448 = param_1.input;
      varData_452 = param_1.avail_in;
      varData_454 = varData_447.hold;
      varData_455 = varData_447.bits;
      varData_456 = varData_452;
      varData_457 = varData_453;
      varData_468 = _0x1d7f2e;
      _0x39d63d: while (true) {
        switch (varData_447.mode) {
          case numericVal_56:
            if (varData_447.wrap === 0) {
              varData_447.mode = numericVal_68;
              break;
            }
            while (varData_455 < 16) {
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_452--;
              varData_454 += varData_448[varData_450++] << varData_455;
              varData_455 += 8;
            }
            if (varData_447.wrap & 2 && varData_454 === 35615) {
              if (varData_447.wbits === 0) {
                varData_447.wbits = 15;
              }
              varData_447.check = 0;
              varData_469[0] = varData_454 & 255;
              varData_469[1] = varData_454 >>> 8 & 255;
              varData_447.check = varData_218(varData_447.check, varData_469, 2, 0);
              varData_454 = 0;
              varData_455 = 0;
              varData_447.mode = numericVal_57;
              break;
            }
            if (varData_447.head) {
              varData_447.head.done = false;
            }
            if (!(varData_447.wrap & 1) || (((varData_454 & 255) << 8) + (varData_454 >> 8)) % 31) {
              param_1.msg = "incorrect header check";
              varData_447.mode = numericVal_85;
              break;
            }
            if ((varData_454 & 15) !== _0x2a1796) {
              param_1.msg = "unknown compression method";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_454 >>>= 4;
            varData_455 -= 4;
            varData_467 = (varData_454 & 15) + 8;
            if (varData_447.wbits === 0) {
              varData_447.wbits = varData_467;
            }
            if (varData_467 > 15 || varData_467 > varData_447.wbits) {
              param_1.msg = "invalid window size";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_447.dmax = 1 << varData_447.wbits;
            varData_447.flags = 0;
            param_1.adler = varData_447.check = 1;
            varData_447.mode = varData_454 & 512 ? numericVal_65 : numericVal_67;
            varData_454 = 0;
            varData_455 = 0;
            break;
          case numericVal_57:
            while (varData_455 < 16) {
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_452--;
              varData_454 += varData_448[varData_450++] << varData_455;
              varData_455 += 8;
            }
            varData_447.flags = varData_454;
            if ((varData_447.flags & 255) !== _0x2a1796) {
              param_1.msg = "unknown compression method";
              varData_447.mode = numericVal_85;
              break;
            }
            if (varData_447.flags & 57344) {
              param_1.msg = "unknown header flags set";
              varData_447.mode = numericVal_85;
              break;
            }
            if (varData_447.head) {
              varData_447.head.text = varData_454 >> 8 & 1;
            }
            if (varData_447.flags & 512 && varData_447.wrap & 4) {
              varData_469[0] = varData_454 & 255;
              varData_469[1] = varData_454 >>> 8 & 255;
              varData_447.check = varData_218(varData_447.check, varData_469, 2, 0);
            }
            varData_454 = 0;
            varData_455 = 0;
            varData_447.mode = numericVal_58;
          case numericVal_58:
            while (varData_455 < 32) {
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_452--;
              varData_454 += varData_448[varData_450++] << varData_455;
              varData_455 += 8;
            }
            if (varData_447.head) {
              varData_447.head.time = varData_454;
            }
            if (varData_447.flags & 512 && varData_447.wrap & 4) {
              varData_469[0] = varData_454 & 255;
              varData_469[1] = varData_454 >>> 8 & 255;
              varData_469[2] = varData_454 >>> 16 & 255;
              varData_469[3] = varData_454 >>> 24 & 255;
              varData_447.check = varData_218(varData_447.check, varData_469, 4, 0);
            }
            varData_454 = 0;
            varData_455 = 0;
            varData_447.mode = numericVal_59;
          case numericVal_59:
            while (varData_455 < 16) {
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_452--;
              varData_454 += varData_448[varData_450++] << varData_455;
              varData_455 += 8;
            }
            if (varData_447.head) {
              varData_447.head.xflags = varData_454 & 255;
              varData_447.head.os = varData_454 >> 8;
            }
            if (varData_447.flags & 512 && varData_447.wrap & 4) {
              varData_469[0] = varData_454 & 255;
              varData_469[1] = varData_454 >>> 8 & 255;
              varData_447.check = varData_218(varData_447.check, varData_469, 2, 0);
            }
            varData_454 = 0;
            varData_455 = 0;
            varData_447.mode = numericVal_60;
          case numericVal_60:
            if (varData_447.flags & 1024) {
              while (varData_455 < 16) {
                if (varData_452 === 0) {
                  break _0x39d63d;
                }
                varData_452--;
                varData_454 += varData_448[varData_450++] << varData_455;
                varData_455 += 8;
              }
              varData_447.length = varData_454;
              if (varData_447.head) {
                varData_447.head.extra_len = varData_454;
              }
              if (varData_447.flags & 512 && varData_447.wrap & 4) {
                varData_469[0] = varData_454 & 255;
                varData_469[1] = varData_454 >>> 8 & 255;
                varData_447.check = varData_218(varData_447.check, varData_469, 2, 0);
              }
              varData_454 = 0;
              varData_455 = 0;
            } else if (varData_447.head) {
              varData_447.head.extra = null;
            }
            varData_447.mode = numericVal_61;
          case numericVal_61:
            if (varData_447.flags & 1024) {
              varData_458 = varData_447.length;
              if (varData_458 > varData_452) {
                varData_458 = varData_452;
              }
              if (varData_458) {
                if (varData_447.head) {
                  varData_467 = varData_447.head.extra_len - varData_447.length;
                  if (!varData_447.head.extra) {
                    varData_447.head.extra = new Uint8Array(varData_447.head.extra_len);
                  }
                  varData_447.head.extra.set(varData_448.subarray(varData_450, varData_450 + varData_458), varData_467);
                }
                if (varData_447.flags & 512 && varData_447.wrap & 4) {
                  varData_447.check = varData_218(varData_447.check, varData_448, varData_458, varData_450);
                }
                varData_452 -= varData_458;
                varData_450 += varData_458;
                varData_447.length -= varData_458;
              }
              if (varData_447.length) {
                break _0x39d63d;
              }
            }
            varData_447.length = 0;
            varData_447.mode = numericVal_62;
          case numericVal_62:
            if (varData_447.flags & 2048) {
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_458 = 0;
              do {
                varData_467 = varData_448[varData_450 + varData_458++];
                if (varData_447.head && varData_467 && varData_447.length < 65536) {
                  varData_447.head.name += String.fromCharCode(varData_467);
                }
              } while (varData_467 && varData_458 < varData_452);
              if (varData_447.flags & 512 && varData_447.wrap & 4) {
                varData_447.check = varData_218(varData_447.check, varData_448, varData_458, varData_450);
              }
              varData_452 -= varData_458;
              varData_450 += varData_458;
              if (varData_467) {
                break _0x39d63d;
              }
            } else if (varData_447.head) {
              varData_447.head.name = null;
            }
            varData_447.length = 0;
            varData_447.mode = numericVal_63;
          case numericVal_63:
            if (varData_447.flags & 4096) {
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_458 = 0;
              do {
                varData_467 = varData_448[varData_450 + varData_458++];
                if (varData_447.head && varData_467 && varData_447.length < 65536) {
                  varData_447.head.comment += String.fromCharCode(varData_467);
                }
              } while (varData_467 && varData_458 < varData_452);
              if (varData_447.flags & 512 && varData_447.wrap & 4) {
                varData_447.check = varData_218(varData_447.check, varData_448, varData_458, varData_450);
              }
              varData_452 -= varData_458;
              varData_450 += varData_458;
              if (varData_467) {
                break _0x39d63d;
              }
            } else if (varData_447.head) {
              varData_447.head.comment = null;
            }
            varData_447.mode = numericVal_64;
          case numericVal_64:
            if (varData_447.flags & 512) {
              while (varData_455 < 16) {
                if (varData_452 === 0) {
                  break _0x39d63d;
                }
                varData_452--;
                varData_454 += varData_448[varData_450++] << varData_455;
                varData_455 += 8;
              }
              if (varData_447.wrap & 4 && varData_454 !== (varData_447.check & 65535)) {
                param_1.msg = "header crc mismatch";
                varData_447.mode = numericVal_85;
                break;
              }
              varData_454 = 0;
              varData_455 = 0;
            }
            if (varData_447.head) {
              varData_447.head.hcrc = varData_447.flags >> 9 & 1;
              varData_447.head.done = true;
            }
            param_1.adler = varData_447.check = 0;
            varData_447.mode = numericVal_67;
            break;
          case numericVal_65:
            while (varData_455 < 32) {
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_452--;
              varData_454 += varData_448[varData_450++] << varData_455;
              varData_455 += 8;
            }
            param_1.adler = varData_447.check = varData_426(varData_454);
            varData_454 = 0;
            varData_455 = 0;
            varData_447.mode = numericVal_66;
          case numericVal_66:
            if (varData_447.havedict === 0) {
              param_1.next_out = varData_451;
              param_1.avail_out = varData_453;
              param_1.next_in = varData_450;
              param_1.avail_in = varData_452;
              varData_447.hold = varData_454;
              varData_447.bits = varData_455;
              return _0x2fac64;
            }
            param_1.adler = varData_447.check = 1;
            varData_447.mode = numericVal_67;
          case numericVal_67:
            if (param_2 === _0x8ff04a || param_2 === _0x585954) {
              break _0x39d63d;
            }
          case numericVal_68:
            if (varData_447.last) {
              varData_454 >>>= varData_455 & 7;
              varData_455 -= varData_455 & 7;
              varData_447.mode = numericVal_82;
              break;
            }
            while (varData_455 < 3) {
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_452--;
              varData_454 += varData_448[varData_450++] << varData_455;
              varData_455 += 8;
            }
            varData_447.last = varData_454 & 1;
            varData_454 >>>= 1;
            varData_455 -= 1;
            switch (varData_454 & 3) {
              case 0:
                varData_447.mode = numericVal_69;
                break;
              case 1:
                varData_442(varData_447);
                varData_447.mode = numericVal_75;
                if (param_2 === _0x585954) {
                  varData_454 >>>= 2;
                  varData_455 -= 2;
                  break _0x39d63d;
                }
                break;
              case 2:
                varData_447.mode = numericVal_72;
                break;
              case 3:
                param_1.msg = "invalid block type";
                varData_447.mode = numericVal_85;
            }
            varData_454 >>>= 2;
            varData_455 -= 2;
            break;
          case numericVal_69:
            varData_454 >>>= varData_455 & 7;
            varData_455 -= varData_455 & 7;
            while (varData_455 < 32) {
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_452--;
              varData_454 += varData_448[varData_450++] << varData_455;
              varData_455 += 8;
            }
            if ((varData_454 & 65535) !== (varData_454 >>> 16 ^ 65535)) {
              param_1.msg = "invalid stored block lengths";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_447.length = varData_454 & 65535;
            varData_454 = 0;
            varData_455 = 0;
            varData_447.mode = numericVal_70;
            if (param_2 === _0x585954) {
              break _0x39d63d;
            }
          case numericVal_70:
            varData_447.mode = numericVal_71;
          case numericVal_71:
            varData_458 = varData_447.length;
            if (varData_458) {
              if (varData_458 > varData_452) {
                varData_458 = varData_452;
              }
              if (varData_458 > varData_453) {
                varData_458 = varData_453;
              }
              if (varData_458 === 0) {
                break _0x39d63d;
              }
              varData_449.set(varData_448.subarray(varData_450, varData_450 + varData_458), varData_451);
              varData_452 -= varData_458;
              varData_450 += varData_458;
              varData_453 -= varData_458;
              varData_451 += varData_458;
              varData_447.length -= varData_458;
              break;
            }
            varData_447.mode = numericVal_67;
            break;
          case numericVal_72:
            while (varData_455 < 14) {
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_452--;
              varData_454 += varData_448[varData_450++] << varData_455;
              varData_455 += 8;
            }
            varData_447.nlen = (varData_454 & 31) + 257;
            varData_454 >>>= 5;
            varData_455 -= 5;
            varData_447.ndist = (varData_454 & 31) + 1;
            varData_454 >>>= 5;
            varData_455 -= 5;
            varData_447.ncode = (varData_454 & 15) + 4;
            varData_454 >>>= 4;
            varData_455 -= 4;
            if (varData_447.nlen > 286 || varData_447.ndist > 30) {
              param_1.msg = "too many length or distance symbols";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_447.have = 0;
            varData_447.mode = numericVal_73;
          case numericVal_73:
            while (varData_447.have < varData_447.ncode) {
              while (varData_455 < 3) {
                if (varData_452 === 0) {
                  break _0x39d63d;
                }
                varData_452--;
                varData_454 += varData_448[varData_450++] << varData_455;
                varData_455 += 8;
              }
              varData_447.lens[varData_472[varData_447.have++]] = varData_454 & 7;
              varData_454 >>>= 3;
              varData_455 -= 3;
            }
            while (varData_447.have < 19) {
              varData_447.lens[varData_472[varData_447.have++]] = 0;
            }
            varData_447.lencode = varData_447.lendyn;
            varData_447.lenbits = 7;
            var varData_473 = {
              bits: varData_447.lenbits
            };
            varData_470 = varData_473;
            varData_468 = varData_424(numericVal_53, varData_447.lens, 0, 19, varData_447.lencode, 0, varData_447.work, varData_470);
            varData_447.lenbits = varData_470.bits;
            if (varData_468) {
              param_1.msg = "invalid code lengths set";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_447.have = 0;
            varData_447.mode = numericVal_74;
          case numericVal_74:
            while (varData_447.have < varData_447.nlen + varData_447.ndist) {
              while (true) {
                numericVal_912 = varData_447.lencode[varData_454 & (1 << varData_447.lenbits) - 1];
                varData_461 = numericVal_912 >>> 24;
                varData_462 = numericVal_912 >>> 16 & 255;
                varData_463 = numericVal_912 & 65535;
                if (varData_461 <= varData_455) {
                  break;
                }
                if (varData_452 === 0) {
                  break _0x39d63d;
                }
                varData_452--;
                varData_454 += varData_448[varData_450++] << varData_455;
                varData_455 += 8;
              }
              if (varData_463 < 16) {
                varData_454 >>>= varData_461;
                varData_455 -= varData_461;
                varData_447.lens[varData_447.have++] = varData_463;
              } else {
                if (varData_463 === 16) {
                  varData_471 = varData_461 + 2;
                  while (varData_455 < varData_471) {
                    if (varData_452 === 0) {
                      break _0x39d63d;
                    }
                    varData_452--;
                    varData_454 += varData_448[varData_450++] << varData_455;
                    varData_455 += 8;
                  }
                  varData_454 >>>= varData_461;
                  varData_455 -= varData_461;
                  if (varData_447.have === 0) {
                    param_1.msg = "invalid bit length repeat";
                    varData_447.mode = numericVal_85;
                    break;
                  }
                  varData_467 = varData_447.lens[varData_447.have - 1];
                  varData_458 = 3 + (varData_454 & 3);
                  varData_454 >>>= 2;
                  varData_455 -= 2;
                } else if (varData_463 === 17) {
                  varData_471 = varData_461 + 3;
                  while (varData_455 < varData_471) {
                    if (varData_452 === 0) {
                      break _0x39d63d;
                    }
                    varData_452--;
                    varData_454 += varData_448[varData_450++] << varData_455;
                    varData_455 += 8;
                  }
                  varData_454 >>>= varData_461;
                  varData_455 -= varData_461;
                  varData_467 = 0;
                  varData_458 = 3 + (varData_454 & 7);
                  varData_454 >>>= 3;
                  varData_455 -= 3;
                } else {
                  varData_471 = varData_461 + 7;
                  while (varData_455 < varData_471) {
                    if (varData_452 === 0) {
                      break _0x39d63d;
                    }
                    varData_452--;
                    varData_454 += varData_448[varData_450++] << varData_455;
                    varData_455 += 8;
                  }
                  varData_454 >>>= varData_461;
                  varData_455 -= varData_461;
                  varData_467 = 0;
                  varData_458 = 11 + (varData_454 & 127);
                  varData_454 >>>= 7;
                  varData_455 -= 7;
                }
                if (varData_447.have + varData_458 > varData_447.nlen + varData_447.ndist) {
                  param_1.msg = "invalid bit length repeat";
                  varData_447.mode = numericVal_85;
                  break;
                }
                while (varData_458--) {
                  varData_447.lens[varData_447.have++] = varData_467;
                }
              }
            }
            if (varData_447.mode === numericVal_85) {
              break;
            }
            if (varData_447.lens[256] === 0) {
              param_1.msg = "invalid code -- missing end-of-block";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_447.lenbits = 9;
            var varData_474 = {
              bits: varData_447.lenbits
            };
            varData_470 = varData_474;
            varData_468 = varData_424(numericVal_54, varData_447.lens, 0, varData_447.nlen, varData_447.lencode, 0, varData_447.work, varData_470);
            varData_447.lenbits = varData_470.bits;
            if (varData_468) {
              param_1.msg = "invalid literal/lengths set";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_447.distbits = 6;
            varData_447.distcode = varData_447.distdyn;
            var varData_475 = {
              bits: varData_447.distbits
            };
            varData_470 = varData_475;
            varData_468 = varData_424(numericVal_55, varData_447.lens, varData_447.nlen, varData_447.ndist, varData_447.distcode, 0, varData_447.work, varData_470);
            varData_447.distbits = varData_470.bits;
            if (varData_468) {
              param_1.msg = "invalid distances set";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_447.mode = numericVal_75;
            if (param_2 === _0x585954) {
              break _0x39d63d;
            }
          case numericVal_75:
            varData_447.mode = numericVal_76;
          case numericVal_76:
            if (varData_452 >= 6 && varData_453 >= 258) {
              param_1.next_out = varData_451;
              param_1.avail_out = varData_453;
              param_1.next_in = varData_450;
              param_1.avail_in = varData_452;
              varData_447.hold = varData_454;
              varData_447.bits = varData_455;
              varData_379(param_1, varData_457);
              varData_451 = param_1.next_out;
              varData_449 = param_1.output;
              varData_453 = param_1.avail_out;
              varData_450 = param_1.next_in;
              varData_448 = param_1.input;
              varData_452 = param_1.avail_in;
              varData_454 = varData_447.hold;
              varData_455 = varData_447.bits;
              if (varData_447.mode === numericVal_67) {
                varData_447.back = -1;
              }
              break;
            }
            varData_447.back = 0;
            while (true) {
              numericVal_912 = varData_447.lencode[varData_454 & (1 << varData_447.lenbits) - 1];
              varData_461 = numericVal_912 >>> 24;
              varData_462 = numericVal_912 >>> 16 & 255;
              varData_463 = numericVal_912 & 65535;
              if (varData_461 <= varData_455) {
                break;
              }
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_452--;
              varData_454 += varData_448[varData_450++] << varData_455;
              varData_455 += 8;
            }
            if (varData_462 && (varData_462 & 240) === 0) {
              varData_464 = varData_461;
              varData_465 = varData_462;
              varData_466 = varData_463;
              while (true) {
                numericVal_912 = varData_447.lencode[varData_466 + ((varData_454 & (1 << varData_464 + varData_465) - 1) >> varData_464)];
                varData_461 = numericVal_912 >>> 24;
                varData_462 = numericVal_912 >>> 16 & 255;
                varData_463 = numericVal_912 & 65535;
                if (varData_464 + varData_461 <= varData_455) {
                  break;
                }
                if (varData_452 === 0) {
                  break _0x39d63d;
                }
                varData_452--;
                varData_454 += varData_448[varData_450++] << varData_455;
                varData_455 += 8;
              }
              varData_454 >>>= varData_464;
              varData_455 -= varData_464;
              varData_447.back += varData_464;
            }
            varData_454 >>>= varData_461;
            varData_455 -= varData_461;
            varData_447.back += varData_461;
            varData_447.length = varData_463;
            if (varData_462 === 0) {
              varData_447.mode = numericVal_81;
              break;
            }
            if (varData_462 & 32) {
              varData_447.back = -1;
              varData_447.mode = numericVal_67;
              break;
            }
            if (varData_462 & 64) {
              param_1.msg = "invalid literal/length code";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_447.extra = varData_462 & 15;
            varData_447.mode = numericVal_77;
          case numericVal_77:
            if (varData_447.extra) {
              varData_471 = varData_447.extra;
              while (varData_455 < varData_471) {
                if (varData_452 === 0) {
                  break _0x39d63d;
                }
                varData_452--;
                varData_454 += varData_448[varData_450++] << varData_455;
                varData_455 += 8;
              }
              varData_447.length += varData_454 & (1 << varData_447.extra) - 1;
              varData_454 >>>= varData_447.extra;
              varData_455 -= varData_447.extra;
              varData_447.back += varData_447.extra;
            }
            varData_447.was = varData_447.length;
            varData_447.mode = numericVal_78;
          case numericVal_78:
            while (true) {
              numericVal_912 = varData_447.distcode[varData_454 & (1 << varData_447.distbits) - 1];
              varData_461 = numericVal_912 >>> 24;
              varData_462 = numericVal_912 >>> 16 & 255;
              varData_463 = numericVal_912 & 65535;
              if (varData_461 <= varData_455) {
                break;
              }
              if (varData_452 === 0) {
                break _0x39d63d;
              }
              varData_452--;
              varData_454 += varData_448[varData_450++] << varData_455;
              varData_455 += 8;
            }
            if ((varData_462 & 240) === 0) {
              varData_464 = varData_461;
              varData_465 = varData_462;
              varData_466 = varData_463;
              while (true) {
                numericVal_912 = varData_447.distcode[varData_466 + ((varData_454 & (1 << varData_464 + varData_465) - 1) >> varData_464)];
                varData_461 = numericVal_912 >>> 24;
                varData_462 = numericVal_912 >>> 16 & 255;
                varData_463 = numericVal_912 & 65535;
                if (varData_464 + varData_461 <= varData_455) {
                  break;
                }
                if (varData_452 === 0) {
                  break _0x39d63d;
                }
                varData_452--;
                varData_454 += varData_448[varData_450++] << varData_455;
                varData_455 += 8;
              }
              varData_454 >>>= varData_464;
              varData_455 -= varData_464;
              varData_447.back += varData_464;
            }
            varData_454 >>>= varData_461;
            varData_455 -= varData_461;
            varData_447.back += varData_461;
            if (varData_462 & 64) {
              param_1.msg = "invalid distance code";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_447.offset = varData_463;
            varData_447.extra = varData_462 & 15;
            varData_447.mode = numericVal_79;
          case numericVal_79:
            if (varData_447.extra) {
              varData_471 = varData_447.extra;
              while (varData_455 < varData_471) {
                if (varData_452 === 0) {
                  break _0x39d63d;
                }
                varData_452--;
                varData_454 += varData_448[varData_450++] << varData_455;
                varData_455 += 8;
              }
              varData_447.offset += varData_454 & (1 << varData_447.extra) - 1;
              varData_454 >>>= varData_447.extra;
              varData_455 -= varData_447.extra;
              varData_447.back += varData_447.extra;
            }
            if (varData_447.offset > varData_447.dmax) {
              param_1.msg = "invalid distance too far back";
              varData_447.mode = numericVal_85;
              break;
            }
            varData_447.mode = numericVal_80;
          case numericVal_80:
            if (varData_453 === 0) {
              break _0x39d63d;
            }
            varData_458 = varData_457 - varData_453;
            if (varData_447.offset > varData_458) {
              varData_458 = varData_447.offset - varData_458;
              if (varData_458 > varData_447.whave) {
                if (varData_447.sane) {
                  param_1.msg = "invalid distance too far back";
                  varData_447.mode = numericVal_85;
                  break;
                }
              }
              if (varData_458 > varData_447.wnext) {
                varData_458 -= varData_447.wnext;
                varData_459 = varData_447.wsize - varData_458;
              } else {
                varData_459 = varData_447.wnext - varData_458;
              }
              if (varData_458 > varData_447.length) {
                varData_458 = varData_447.length;
              }
              varData_460 = varData_447.window;
            } else {
              varData_460 = varData_449;
              varData_459 = varData_451 - varData_447.offset;
              varData_458 = varData_447.length;
            }
            if (varData_458 > varData_453) {
              varData_458 = varData_453;
            }
            varData_453 -= varData_458;
            varData_447.length -= varData_458;
            do {
              varData_449[varData_451++] = varData_460[varData_459++];
            } while (--varData_458);
            if (varData_447.length === 0) {
              varData_447.mode = numericVal_76;
            }
            break;
          case numericVal_81:
            if (varData_453 === 0) {
              break _0x39d63d;
            }
            varData_449[varData_451++] = varData_447.length;
            varData_453--;
            varData_447.mode = numericVal_76;
            break;
          case numericVal_82:
            if (varData_447.wrap) {
              while (varData_455 < 32) {
                if (varData_452 === 0) {
                  break _0x39d63d;
                }
                varData_452--;
                varData_454 |= varData_448[varData_450++] << varData_455;
                varData_455 += 8;
              }
              varData_457 -= varData_453;
              param_1.total_out += varData_457;
              varData_447.total += varData_457;
              if (varData_447.wrap & 4 && varData_457) {
                param_1.adler = varData_447.check = varData_447.flags ? varData_218(varData_447.check, varData_449, varData_457, varData_451 - varData_457) : varData_211(varData_447.check, varData_449, varData_457, varData_451 - varData_457);
              }
              varData_457 = varData_453;
              if (varData_447.wrap & 4 && (varData_447.flags ? varData_454 : varData_426(varData_454)) !== varData_447.check) {
                param_1.msg = "incorrect data check";
                varData_447.mode = numericVal_85;
                break;
              }
              varData_454 = 0;
              varData_455 = 0;
            }
            varData_447.mode = numericVal_83;
          case numericVal_83:
            if (varData_447.wrap && varData_447.flags) {
              while (varData_455 < 32) {
                if (varData_452 === 0) {
                  break _0x39d63d;
                }
                varData_452--;
                varData_454 += varData_448[varData_450++] << varData_455;
                varData_455 += 8;
              }
              if (varData_447.wrap & 4 && varData_454 !== (varData_447.total & -1)) {
                param_1.msg = "incorrect length check";
                varData_447.mode = numericVal_85;
                break;
              }
              varData_454 = 0;
              varData_455 = 0;
            }
            varData_447.mode = numericVal_84;
          case numericVal_84:
            varData_468 = _0x388768;
            break _0x39d63d;
          case numericVal_85:
            varData_468 = _0x1d9d19;
            break _0x39d63d;
          case numericVal_86:
            return _0x5b8221;
          case numericVal_87:
          default:
            return _0x1f07bc;
        }
      }
      param_1.next_out = varData_451;
      param_1.avail_out = varData_453;
      param_1.next_in = varData_450;
      param_1.avail_in = varData_452;
      varData_447.hold = varData_454;
      varData_447.bits = varData_455;
      if (varData_447.wsize || varData_457 !== param_1.avail_out && varData_447.mode < numericVal_85 && (varData_447.mode < numericVal_82 || param_2 !== _0x44b4a4)) {
        if (varData_443(param_1, param_1.output, param_1.next_out, varData_457 - param_1.avail_out)) ;
      }
      varData_456 -= param_1.avail_in;
      varData_457 -= param_1.avail_out;
      param_1.total_in += varData_456;
      param_1.total_out += varData_457;
      varData_447.total += varData_457;
      if (varData_447.wrap & 4 && varData_457) {
        param_1.adler = varData_447.check = varData_447.flags ? varData_218(varData_447.check, varData_449, varData_457, param_1.next_out - varData_457) : varData_211(varData_447.check, varData_449, varData_457, param_1.next_out - varData_457);
      }
      param_1.data_type = varData_447.bits + (varData_447.last ? 64 : 0) + (varData_447.mode === numericVal_67 ? 128 : 0) + (varData_447.mode === numericVal_75 || varData_447.mode === numericVal_70 ? 256 : 0);
      if ((varData_456 === 0 && varData_457 === 0 || param_2 === _0x44b4a4) && varData_468 === _0x1d7f2e) {
        varData_468 = _0x382417;
      }
      return varData_468;
    };
    const varData_476 = (param_1) => {
      if (varData_427(param_1)) {
        return _0x1f07bc;
      }
      let varData_477 = param_1.state;
      varData_477.window && (varData_477.window = null);
      param_1.state = null;
      return _0x1d7f2e;
    };
    const varData_478 = (param_1, param_2) => {
      if (varData_427(param_1)) {
        return _0x1f07bc;
      }
      const varData_479 = param_1.state;
      if ((varData_479.wrap & 2) === 0) {
        return _0x1f07bc;
      }
      varData_479.head = param_2;
      param_2.done = false;
      return _0x1d7f2e;
    };
    const varData_480 = (param_1, param_2) => {
      const varData_481 = param_2.length;
      let varData_482;
      let varData_483;
      let varData_484;
      if (varData_427(param_1)) {
        return _0x1f07bc;
      }
      varData_482 = param_1.state;
      if (varData_482.wrap !== 0 && varData_482.mode !== numericVal_66) {
        return _0x1f07bc;
      }
      if (varData_482.mode === numericVal_66) {
        varData_483 = 1;
        varData_483 = varData_211(varData_483, param_2, varData_481, 0);
        if (varData_483 !== varData_482.check) {
          return _0x1d9d19;
        }
      }
      varData_484 = varData_443(param_1, param_2, varData_481, varData_481);
      if (varData_484) {
        varData_482.mode = numericVal_86;
        return _0x5b8221;
      }
      varData_482.havedict = 1;
      return _0x1d7f2e;
    };
    var varData_485 = varData_431;
    var varData_486 = varData_433;
    var varData_487 = varData_429;
    var varData_488 = varData_439;
    var varData_489 = varData_436;
    var varData_490 = varData_446;
    var varData_491 = varData_476;
    var varData_492 = varData_478;
    var varData_493 = varData_480;
    var varData_494 = "pako inflate (from Nodeca project)";
    var varData_495 = {
      inflateReset: varData_485,
      inflateReset2: varData_486,
      inflateResetKeep: varData_487,
      inflateInit: varData_488,
      inflateInit2: varData_489,
      inflate: varData_490,
      inflateEnd: varData_491,
      inflateGetHeader: varData_492,
      inflateSetDictionary: varData_493,
      inflateInfo: varData_494
    };
    var varData_496 = varData_495;
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
    var varData_497 = handleAction_57;
    const varData_498 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x4d9d41,
      Z_FINISH: _0x107c02,
      Z_OK: _0x15892e,
      Z_STREAM_END: _0x277626,
      Z_NEED_DICT: _0x477e65,
      Z_STREAM_ERROR: _0x420e2e,
      Z_DATA_ERROR: _0x2258da,
      Z_MEM_ERROR: _0x245e54
    } = varData_221;
    function handleAction_58(param_1) {
      this.options = varData_340.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, param_1 || {});
      const varData_499 = this.options;
      if (varData_499.raw && varData_499.windowBits >= 0 && varData_499.windowBits < 16) {
        varData_499.windowBits = -varData_499.windowBits;
        if (varData_499.windowBits === 0) {
          varData_499.windowBits = -15;
        }
      }
      if (varData_499.windowBits >= 0 && varData_499.windowBits < 16 && (!param_1 || !param_1.windowBits)) {
        varData_499.windowBits += 32;
      }
      if (varData_499.windowBits > 15 && varData_499.windowBits < 48) {
        if ((varData_499.windowBits & 15) === 0) {
          varData_499.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_361();
      this.strm.avail_out = 0;
      let varData_500 = varData_496.inflateInit2(this.strm, varData_499.windowBits);
      if (varData_500 !== _0x15892e) {
        throw new Error(varData_219[varData_500]);
      }
      this.header = new varData_497();
      varData_496.inflateGetHeader(this.strm, this.header);
      if (varData_499.dictionary) {
        if (typeof varData_499.dictionary === "string") {
          varData_499.dictionary = varData_360.string2buf(varData_499.dictionary);
        } else if (varData_498.call(varData_499.dictionary) === "[object ArrayBuffer]") {
          varData_499.dictionary = new Uint8Array(varData_499.dictionary);
        }
        if (varData_499.raw) {
          varData_500 = varData_496.inflateSetDictionary(this.strm, varData_499.dictionary);
          if (varData_500 !== _0x15892e) {
            throw new Error(varData_219[varData_500]);
          }
        }
      }
    }
    handleAction_58.prototype.push = function(param_1, param_2) {
      const varData_501 = this.strm;
      const varData_502 = this.options.chunkSize;
      const varData_503 = this.options.dictionary;
      let varData_504;
      let varData_505;
      let varData_506;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_505 = param_2;
      } else {
        varData_505 = param_2 === true ? _0x107c02 : _0x4d9d41;
      }
      if (varData_498.call(param_1) === "[object ArrayBuffer]") {
        varData_501.input = new Uint8Array(param_1);
      } else {
        varData_501.input = param_1;
      }
      varData_501.next_in = 0;
      varData_501.avail_in = varData_501.input.length;
      while (true) {
        if (varData_501.avail_out === 0) {
          varData_501.output = new Uint8Array(varData_502);
          varData_501.next_out = 0;
          varData_501.avail_out = varData_502;
        }
        varData_504 = varData_496.inflate(varData_501, varData_505);
        if (varData_504 === _0x477e65 && varData_503) {
          varData_504 = varData_496.inflateSetDictionary(varData_501, varData_503);
          if (varData_504 === _0x15892e) {
            varData_504 = varData_496.inflate(varData_501, varData_505);
          } else if (varData_504 === _0x2258da) {
            varData_504 = _0x477e65;
          }
        }
        while (varData_501.avail_in > 0 && varData_504 === _0x277626 && varData_501.state.wrap > 0 && param_1[varData_501.next_in] !== 0) {
          varData_496.inflateReset(varData_501);
          varData_504 = varData_496.inflate(varData_501, varData_505);
        }
        switch (varData_504) {
          case _0x420e2e:
          case _0x2258da:
          case _0x477e65:
          case _0x245e54:
            this.onEnd(varData_504);
            this.ended = true;
            return false;
        }
        varData_506 = varData_501.avail_out;
        if (varData_501.next_out) {
          if (varData_501.avail_out === 0 || varData_504 === _0x277626) {
            if (this.options.to === "string") {
              let varData_507 = varData_360.utf8border(varData_501.output, varData_501.next_out);
              let varData_508 = varData_501.next_out - varData_507;
              let varData_509 = varData_360.buf2string(varData_501.output, varData_507);
              varData_501.next_out = varData_508;
              varData_501.avail_out = varData_502 - varData_508;
              if (varData_508) {
                varData_501.output.set(varData_501.output.subarray(varData_507, varData_507 + varData_508), 0);
              }
              this.onData(varData_509);
            } else {
              this.onData(varData_501.output.length === varData_501.next_out ? varData_501.output : varData_501.output.subarray(0, varData_501.next_out));
            }
          }
        }
        if (varData_504 === _0x15892e && varData_506 === 0) {
          continue;
        }
        if (varData_504 === _0x277626) {
          varData_504 = varData_496.inflateEnd(this.strm);
          this.onEnd(varData_504);
          this.ended = true;
          return true;
        }
        if (varData_501.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_58.prototype.onData = function(param_1) {
      this.chunks.push(param_1);
    };
    handleAction_58.prototype.onEnd = function(param_1) {
      if (param_1 === _0x15892e) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = varData_340.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_59(param_1, param_2) {
      const varData_510 = new handleAction_58(param_2);
      varData_510.push(param_1);
      if (varData_510.err) {
        throw varData_510.msg || varData_219[varData_510.err];
      }
      return varData_510.result;
    }
    function handleAction_60(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.raw = true;
      return handleAction_59(param_1, param_2);
    }
    var varData_511 = handleAction_58;
    var varData_512 = handleAction_59;
    var varData_513 = handleAction_60;
    var varData_514 = handleAction_59;
    var varData_515 = varData_221;
    var varData_516 = {
      Inflate: varData_511,
      inflate: varData_512,
      inflateRaw: varData_513,
      ungzip: varData_514,
      constants: varData_515
    };
    var varData_517 = varData_516;
    const {
      Deflate: _0x18ee12,
      deflate: _0x4a2a8a,
      deflateRaw: _0xf5e4ed,
      gzip: _0x43cd21
    } = varData_378;
    const {
      Inflate: _0x39b5a7,
      inflate: _0x1182d9,
      inflateRaw: _0x3bacf5,
      ungzip: _0x5a7060
    } = varData_517;
    var varData_518 = _0x18ee12;
    var varData_519 = _0x4a2a8a;
    var varData_520 = _0xf5e4ed;
    var varData_521 = _0x43cd21;
    var varData_522 = _0x39b5a7;
    var varData_523 = _0x1182d9;
    var varData_524 = _0x3bacf5;
    var varData_525 = _0x5a7060;
    var varData_526 = varData_221;
    var varData_527 = {
      Deflate: varData_518,
      deflate: varData_519,
      deflateRaw: varData_520,
      gzip: varData_521,
      Inflate: varData_522,
      inflate: varData_523,
      inflateRaw: varData_524,
      ungzip: varData_525,
      constants: varData_526
    };
    var varData_528 = varData_527;
    var varData_529 = handleAction_35(739);
    ;
    var varData_530 = Object.create;
    var varData_531 = Object.defineProperty;
    var varData_532 = Object.getOwnPropertyDescriptor;
    var varData_533 = Object.getOwnPropertyNames;
    var varData_534 = Object.getPrototypeOf;
    var varData_535 = Object.prototype.hasOwnProperty;
    var varData_536 = (param_1, param_2) => function _0x1b7161() {
      if (!param_2) {
        (0, param_1[varData_533(param_1)[0]])((param_2 = {
          exports: {}
        }).exports, param_2);
      }
      return param_2.exports;
    };
    var varData_537 = (param_1, param_2) => {
      for (var varData_538 in param_2) {
        varData_531(param_1, varData_538, {
          get: param_2[varData_538],
          enumerable: true
        });
      }
    };
    var varData_539 = (param_1, param_2, param_3, param_4) => {
      if (param_2 && typeof param_2 === "object" || typeof param_2 === "function") {
        for (let varData_540 of varData_533(param_2)) {
          if (!varData_535.call(param_1, varData_540) && varData_540 !== param_3) {
            varData_531(param_1, varData_540, {
              get: () => param_2[varData_540],
              enumerable: !(param_4 = varData_532(param_2, varData_540)) || param_4.enumerable
            });
          }
        }
      }
      return param_1;
    };
    var varData_541 = (param_1, param_2, param_3) => {
      param_3 = param_1 != null ? varData_530(varData_534(param_1)) : {};
      return varData_539(param_2 || !param_1 || !param_1.__esModule ? varData_531(param_3, "default", {
        value: param_1,
        enumerable: true
      }) : param_3, param_1);
    };
    var varData_542 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_543 = (param_1, param_2, param_3) => {
      varData_542(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_544 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_545 = (param_1, param_2, param_3, param_4) => {
      varData_542(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_546 = (param_1, param_2, param_3, param_4) => ({
      set _(param_1_1) {
        varData_545(param_1, param_2, param_1_1, param_3);
      },
      get _() {
        return varData_543(param_1, param_2, param_4);
      }
    });
    var varData_547 = (param_1, param_2, param_3) => {
      varData_542(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_548 = varData_536({
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
          var varData_549 = varData_549 || (function(param_1_1, param_2_1) {
            var varData_550 = Object.create || /* @__PURE__ */ (function() {
              function handleAction_61() {
              }
              ;
              return function(param_1_2) {
                var varData_551;
                handleAction_61.prototype = param_1_2;
                varData_551 = new handleAction_61();
                handleAction_61.prototype = null;
                return varData_551;
              };
            })();
            var varData_552 = {};
            var varData_553 = varData_552.lib = {};
            var varData_554 = varData_553.Base = /* @__PURE__ */ (function() {
              return {
                extend: function(param_1_2) {
                  var varData_555 = varData_550(this);
                  if (param_1_2) {
                    varData_555.mixIn(param_1_2);
                  }
                  if (!varData_555.hasOwnProperty("init") || this.init === varData_555.init) {
                    varData_555.init = function() {
                      varData_555.$super.init.apply(this, arguments);
                    };
                  }
                  varData_555.init.prototype = varData_555;
                  varData_555.$super = this;
                  return varData_555;
                },
                create: function() {
                  var varData_556 = this.extend();
                  varData_556.init.apply(varData_556, arguments);
                  return varData_556;
                },
                init: function() {
                },
                mixIn: function(param_1_2) {
                  for (var varData_557 in param_1_2) {
                    if (param_1_2.hasOwnProperty(varData_557)) {
                      this[varData_557] = param_1_2[varData_557];
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
            var varData_558 = varData_553.WordArray = varData_554.extend({
              init: function(param_1_2, param_2_2) {
                param_1_2 = this.words = param_1_2 || [];
                if (param_2_2 != param_2_1) {
                  this.sigBytes = param_2_2;
                } else {
                  this.sigBytes = param_1_2.length * 4;
                }
              },
              toString: function(param_1_2) {
                return (param_1_2 || varData_570).stringify(this);
              },
              concat: function(param_1_2) {
                var varData_559 = this.words;
                var varData_560 = param_1_2.words;
                var varData_561 = this.sigBytes;
                var varData_562 = param_1_2.sigBytes;
                this.clamp();
                if (varData_561 % 4) {
                  for (var numericVal_912 = 0; numericVal_912 < varData_562; numericVal_912++) {
                    var varData_563 = varData_560[numericVal_912 >>> 2] >>> 24 - numericVal_912 % 4 * 8 & 255;
                    varData_559[varData_561 + numericVal_912 >>> 2] |= varData_563 << 24 - (varData_561 + numericVal_912) % 4 * 8;
                  }
                } else {
                  for (var numericVal_912 = 0; numericVal_912 < varData_562; numericVal_912 += 4) {
                    varData_559[varData_561 + numericVal_912 >>> 2] = varData_560[numericVal_912 >>> 2];
                  }
                }
                this.sigBytes += varData_562;
                return this;
              },
              clamp: function() {
                var varData_564 = this.words;
                var varData_565 = this.sigBytes;
                varData_564[varData_565 >>> 2] &= -1 << 32 - varData_565 % 4 * 8;
                varData_564.length = param_1_1.ceil(varData_565 / 4);
              },
              clone: function() {
                var varData_566 = varData_554.clone.call(this);
                varData_566.words = this.words.slice(0);
                return varData_566;
              },
              random: function(param_1_2) {
                var itemList_22 = [];
                function handleAction_62(param_1_3) {
                  var param_1_3 = param_1_3;
                  var numericVal_913 = 987654321;
                  var numericVal_92 = 4294967295;
                  return function() {
                    numericVal_913 = (numericVal_913 & 65535) * 36969 + (numericVal_913 >> 16) & numericVal_92;
                    param_1_3 = (param_1_3 & 65535) * 18e3 + (param_1_3 >> 16) & numericVal_92;
                    var varData_567 = (numericVal_913 << 16) + param_1_3 & numericVal_92;
                    varData_567 /= 4294967296;
                    varData_567 += 0.5;
                    return varData_567 * (param_1_1.random() > 0.5 ? 1 : -1);
                  };
                }
                for (var numericVal_912 = 0, loopIdx; numericVal_912 < param_1_2; numericVal_912 += 4) {
                  var varData_568 = handleAction_62((loopIdx || param_1_1.random()) * 4294967296);
                  loopIdx = varData_568() * 987654071;
                  itemList_22.push(varData_568() * 4294967296 | 0);
                }
                return new varData_558.init(itemList_22, param_1_2);
              }
            });
            var varData_569 = varData_552.enc = {};
            var varData_570 = varData_569.Hex = {
              stringify: function(param_1_2) {
                var varData_571 = param_1_2.words;
                var varData_572 = param_1_2.sigBytes;
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_572; numericVal_912++) {
                  var varData_573 = varData_571[numericVal_912 >>> 2] >>> 24 - numericVal_912 % 4 * 8 & 255;
                  itemList_22.push((varData_573 >>> 4).toString(16));
                  itemList_22.push((varData_573 & 15).toString(16));
                }
                return itemList_22.join("");
              },
              parse: function(param_1_2) {
                var varData_574 = param_1_2.length;
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_574; numericVal_912 += 2) {
                  itemList_22[numericVal_912 >>> 3] |= parseInt(param_1_2.substr(numericVal_912, 2), 16) << 24 - numericVal_912 % 8 * 4;
                }
                return new varData_558.init(itemList_22, varData_574 / 2);
              }
            };
            var varData_575 = varData_569.Latin1 = {
              stringify: function(param_1_2) {
                var varData_576 = param_1_2.words;
                var varData_577 = param_1_2.sigBytes;
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_577; numericVal_912++) {
                  var varData_578 = varData_576[numericVal_912 >>> 2] >>> 24 - numericVal_912 % 4 * 8 & 255;
                  itemList_22.push(String.fromCharCode(varData_578));
                }
                return itemList_22.join("");
              },
              parse: function(param_1_2) {
                var varData_579 = param_1_2.length;
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_579; numericVal_912++) {
                  itemList_22[numericVal_912 >>> 2] |= (param_1_2.charCodeAt(numericVal_912) & 255) << 24 - numericVal_912 % 4 * 8;
                }
                return new varData_558.init(itemList_22, varData_579);
              }
            };
            var varData_580 = varData_569.Utf8 = {
              stringify: function(param_1_2) {
                try {
                  return decodeURIComponent(escape(varData_575.stringify(param_1_2)));
                } catch (err) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function(param_1_2) {
                return varData_575.parse(unescape(encodeURIComponent(param_1_2)));
              }
            };
            var varData_581 = varData_553.BufferedBlockAlgorithm = varData_554.extend({
              reset: function() {
                this._data = new varData_558.init();
                this._nDataBytes = 0;
              },
              _append: function(param_1_2) {
                if (typeof param_1_2 == "string") {
                  param_1_2 = varData_580.parse(param_1_2);
                }
                this._data.concat(param_1_2);
                this._nDataBytes += param_1_2.sigBytes;
              },
              _process: function(param_1_2) {
                var varData_582 = this._data;
                var varData_583 = varData_582.words;
                var varData_584 = varData_582.sigBytes;
                var varData_585 = this.blockSize;
                var varData_586 = varData_585 * 4;
                var varData_587 = varData_584 / varData_586;
                if (param_1_2) {
                  varData_587 = param_1_1.ceil(varData_587);
                } else {
                  varData_587 = param_1_1.max((varData_587 | 0) - this._minBufferSize, 0);
                }
                var varData_588 = varData_587 * varData_585;
                var varData_589 = param_1_1.min(varData_588 * 4, varData_584);
                if (varData_588) {
                  for (var numericVal_912 = 0; numericVal_912 < varData_588; numericVal_912 += varData_585) {
                    this._doProcessBlock(varData_583, numericVal_912);
                  }
                  var varData_590 = varData_583.splice(0, varData_588);
                  varData_582.sigBytes -= varData_589;
                }
                return new varData_558.init(varData_590, varData_589);
              },
              clone: function() {
                var varData_591 = varData_554.clone.call(this);
                varData_591._data = this._data.clone();
                return varData_591;
              },
              _minBufferSize: 0
            });
            var varData_592 = varData_553.Hasher = varData_581.extend({
              cfg: varData_554.extend(),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
                this.reset();
              },
              reset: function() {
                varData_581.reset.call(this);
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
                var varData_593 = this._doFinalize();
                return varData_593;
              },
              blockSize: 16,
              _createHelper: function(param_1_2) {
                return function(param_1_3, param_2_2) {
                  return new param_1_2.init(param_2_2).finalize(param_1_3);
                };
              },
              _createHmacHelper: function(param_1_2) {
                return function(param_1_3, param_2_2) {
                  return new varData_594.HMAC.init(param_1_2, param_2_2).finalize(param_1_3);
                };
              }
            });
            var varData_594 = varData_552.algo = {};
            return varData_552;
          })(Math);
          return varData_549;
        });
      }
    });
    var varData_595 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_596 = param_1_1;
            var varData_597 = varData_596.lib;
            var varData_598 = varData_597.Base;
            var varData_599 = varData_597.WordArray;
            var varData_600 = varData_596.x64 = {};
            var varData_601 = {
              init: function(param_1_3, param_2_1) {
                this.high = param_1_3;
                this.low = param_2_1;
              }
            };
            var varData_602 = varData_600.Word = varData_598.extend(varData_601);
            var varData_603 = varData_600.WordArray = varData_598.extend({
              init: function(param_1_3, param_2_1) {
                param_1_3 = this.words = param_1_3 || [];
                if (param_2_1 != param_1_2) {
                  this.sigBytes = param_2_1;
                } else {
                  this.sigBytes = param_1_3.length * 8;
                }
              },
              toX32: function() {
                var varData_604 = this.words;
                var varData_605 = varData_604.length;
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_605; numericVal_912++) {
                  var varData_606 = varData_604[numericVal_912];
                  itemList_22.push(varData_606.high);
                  itemList_22.push(varData_606.low);
                }
                return varData_599.create(itemList_22, this.sigBytes);
              },
              clone: function() {
                var varData_607 = varData_598.clone.call(this);
                var varData_608 = varData_607.words = this.words.slice(0);
                var varData_609 = varData_608.length;
                for (var numericVal_912 = 0; numericVal_912 < varData_609; numericVal_912++) {
                  varData_608[numericVal_912] = varData_608[numericVal_912].clone();
                }
                return varData_607;
              }
            });
          })();
          return param_1_1;
        });
      }
    });
    var varData_610 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548());
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
            var varData_611 = param_1_1;
            var varData_612 = varData_611.lib;
            var varData_613 = varData_612.WordArray;
            var varData_614 = varData_613.init;
            var varData_615 = varData_613.init = function(param_1_2) {
              if (param_1_2 instanceof ArrayBuffer) {
                param_1_2 = new Uint8Array(param_1_2);
              }
              if (param_1_2 instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && param_1_2 instanceof Uint8ClampedArray || param_1_2 instanceof Int16Array || param_1_2 instanceof Uint16Array || param_1_2 instanceof Int32Array || param_1_2 instanceof Uint32Array || param_1_2 instanceof Float32Array || param_1_2 instanceof Float64Array) {
                param_1_2 = new Uint8Array(param_1_2.buffer, param_1_2.byteOffset, param_1_2.byteLength);
              }
              if (param_1_2 instanceof Uint8Array) {
                var varData_616 = param_1_2.byteLength;
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_616; numericVal_912++) {
                  itemList_22[numericVal_912 >>> 2] |= param_1_2[numericVal_912] << 24 - numericVal_912 % 4 * 8;
                }
                varData_614.call(this, itemList_22, varData_616);
              } else {
                varData_614.apply(this, arguments);
              }
            };
            varData_615.prototype = varData_613;
          })();
          return param_1_1.lib.WordArray;
        });
      }
    });
    var varData_617 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_618 = param_1_1;
            var varData_619 = varData_618.lib;
            var varData_620 = varData_619.WordArray;
            var varData_621 = varData_618.enc;
            var varData_622 = varData_621.Utf16 = varData_621.Utf16BE = {
              stringify: function(param_1_2) {
                var varData_623 = param_1_2.words;
                var varData_624 = param_1_2.sigBytes;
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_624; numericVal_912 += 2) {
                  var varData_625 = varData_623[numericVal_912 >>> 2] >>> 16 - numericVal_912 % 4 * 8 & 65535;
                  itemList_22.push(String.fromCharCode(varData_625));
                }
                return itemList_22.join("");
              },
              parse: function(param_1_2) {
                var varData_626 = param_1_2.length;
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_626; numericVal_912++) {
                  itemList_22[numericVal_912 >>> 1] |= param_1_2.charCodeAt(numericVal_912) << 16 - numericVal_912 % 2 * 16;
                }
                return varData_620.create(itemList_22, varData_626 * 2);
              }
            };
            varData_621.Utf16LE = {
              stringify: function(param_1_2) {
                var varData_627 = param_1_2.words;
                var varData_628 = param_1_2.sigBytes;
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_628; numericVal_912 += 2) {
                  var varData_629 = handleAction_63(varData_627[numericVal_912 >>> 2] >>> 16 - numericVal_912 % 4 * 8 & 65535);
                  itemList_22.push(String.fromCharCode(varData_629));
                }
                return itemList_22.join("");
              },
              parse: function(param_1_2) {
                var varData_630 = param_1_2.length;
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_630; numericVal_912++) {
                  itemList_22[numericVal_912 >>> 1] |= handleAction_63(param_1_2.charCodeAt(numericVal_912) << 16 - numericVal_912 % 2 * 16);
                }
                return varData_620.create(itemList_22, varData_630 * 2);
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
    var varData_631 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_632 = param_1_1;
            var varData_633 = varData_632.lib;
            var varData_634 = varData_633.WordArray;
            var varData_635 = varData_632.enc;
            var varData_636 = varData_635.Base64 = {
              stringify: function(param_1_2) {
                var varData_637 = param_1_2.words;
                var varData_638 = param_1_2.sigBytes;
                var varData_639 = this._map;
                param_1_2.clamp();
                var itemList_22 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_638; numericVal_912 += 3) {
                  var varData_640 = varData_637[numericVal_912 >>> 2] >>> 24 - numericVal_912 % 4 * 8 & 255;
                  var varData_641 = varData_637[numericVal_912 + 1 >>> 2] >>> 24 - (numericVal_912 + 1) % 4 * 8 & 255;
                  var varData_642 = varData_637[numericVal_912 + 2 >>> 2] >>> 24 - (numericVal_912 + 2) % 4 * 8 & 255;
                  var varData_643 = varData_640 << 16 | varData_641 << 8 | varData_642;
                  for (var numericVal_92 = 0; numericVal_92 < 4 && numericVal_912 + numericVal_92 * 0.75 < varData_638; numericVal_92++) {
                    itemList_22.push(varData_639.charAt(varData_643 >>> (3 - numericVal_92) * 6 & 63));
                  }
                }
                var varData_644 = varData_639.charAt(64);
                if (varData_644) {
                  while (itemList_22.length % 4) {
                    itemList_22.push(varData_644);
                  }
                }
                return itemList_22.join("");
              },
              parse: function(param_1_2) {
                var varData_645 = param_1_2.length;
                var varData_646 = this._map;
                var varData_647 = this._reverseMap;
                if (!varData_647) {
                  varData_647 = this._reverseMap = [];
                  for (var numericVal_912 = 0; numericVal_912 < varData_646.length; numericVal_912++) {
                    varData_647[varData_646.charCodeAt(numericVal_912)] = numericVal_912;
                  }
                }
                var varData_648 = varData_646.charAt(64);
                if (varData_648) {
                  var varData_649 = param_1_2.indexOf(varData_648);
                  if (varData_649 !== -1) {
                    varData_645 = varData_649;
                  }
                }
                return handleAction_64(param_1_2, varData_645, varData_647);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function handleAction_64(param_1_2, param_2_1, param_3) {
              var itemList_22 = [];
              var numericVal_912 = 0;
              for (var numericVal_92 = 0; numericVal_92 < param_2_1; numericVal_92++) {
                if (numericVal_92 % 4) {
                  var varData_650 = param_3[param_1_2.charCodeAt(numericVal_92 - 1)] << numericVal_92 % 4 * 2;
                  var varData_651 = param_3[param_1_2.charCodeAt(numericVal_92)] >>> 6 - numericVal_92 % 4 * 2;
                  itemList_22[numericVal_912 >>> 2] |= (varData_650 | varData_651) << 24 - numericVal_912 % 4 * 8;
                  numericVal_912++;
                }
              }
              return varData_634.create(itemList_22, numericVal_912);
            }
          })();
          return param_1_1.enc.Base64;
        });
      }
    });
    var varData_652 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_653 = param_1_1;
            var varData_654 = varData_653.lib;
            var varData_655 = varData_654.WordArray;
            var varData_656 = varData_654.Hasher;
            var varData_657 = varData_653.algo;
            var itemList_22 = [];
            (function() {
              for (var numericVal_912 = 0; numericVal_912 < 64; numericVal_912++) {
                itemList_22[numericVal_912] = param_1_2.abs(param_1_2.sin(numericVal_912 + 1)) * 4294967296 | 0;
              }
            })();
            var varData_658 = varData_657.MD5 = varData_656.extend({
              _doReset: function() {
                this._hash = new varData_655.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                for (var numericVal_912 = 0; numericVal_912 < 16; numericVal_912++) {
                  var varData_659 = param_2_1 + numericVal_912;
                  var varData_660 = param_1_3[varData_659];
                  param_1_3[varData_659] = (varData_660 << 8 | varData_660 >>> 24) & 16711935 | (varData_660 << 24 | varData_660 >>> 8) & -16711936;
                }
                var varData_661 = this._hash.words;
                var varData_662 = param_1_3[param_2_1 + 0];
                var varData_663 = param_1_3[param_2_1 + 1];
                var varData_664 = param_1_3[param_2_1 + 2];
                var varData_665 = param_1_3[param_2_1 + 3];
                var varData_666 = param_1_3[param_2_1 + 4];
                var varData_667 = param_1_3[param_2_1 + 5];
                var varData_668 = param_1_3[param_2_1 + 6];
                var varData_669 = param_1_3[param_2_1 + 7];
                var varData_670 = param_1_3[param_2_1 + 8];
                var varData_671 = param_1_3[param_2_1 + 9];
                var varData_672 = param_1_3[param_2_1 + 10];
                var varData_673 = param_1_3[param_2_1 + 11];
                var varData_674 = param_1_3[param_2_1 + 12];
                var varData_675 = param_1_3[param_2_1 + 13];
                var varData_676 = param_1_3[param_2_1 + 14];
                var varData_677 = param_1_3[param_2_1 + 15];
                var varData_678 = varData_661[0];
                var varData_679 = varData_661[1];
                var varData_680 = varData_661[2];
                var varData_681 = varData_661[3];
                varData_678 = handleAction_65(varData_678, varData_679, varData_680, varData_681, varData_662, 7, itemList_22[0]);
                varData_681 = handleAction_65(varData_681, varData_678, varData_679, varData_680, varData_663, 12, itemList_22[1]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_678, varData_679, varData_664, 17, itemList_22[2]);
                varData_679 = handleAction_65(varData_679, varData_680, varData_681, varData_678, varData_665, 22, itemList_22[3]);
                varData_678 = handleAction_65(varData_678, varData_679, varData_680, varData_681, varData_666, 7, itemList_22[4]);
                varData_681 = handleAction_65(varData_681, varData_678, varData_679, varData_680, varData_667, 12, itemList_22[5]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_678, varData_679, varData_668, 17, itemList_22[6]);
                varData_679 = handleAction_65(varData_679, varData_680, varData_681, varData_678, varData_669, 22, itemList_22[7]);
                varData_678 = handleAction_65(varData_678, varData_679, varData_680, varData_681, varData_670, 7, itemList_22[8]);
                varData_681 = handleAction_65(varData_681, varData_678, varData_679, varData_680, varData_671, 12, itemList_22[9]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_678, varData_679, varData_672, 17, itemList_22[10]);
                varData_679 = handleAction_65(varData_679, varData_680, varData_681, varData_678, varData_673, 22, itemList_22[11]);
                varData_678 = handleAction_65(varData_678, varData_679, varData_680, varData_681, varData_674, 7, itemList_22[12]);
                varData_681 = handleAction_65(varData_681, varData_678, varData_679, varData_680, varData_675, 12, itemList_22[13]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_678, varData_679, varData_676, 17, itemList_22[14]);
                varData_679 = handleAction_65(varData_679, varData_680, varData_681, varData_678, varData_677, 22, itemList_22[15]);
                varData_678 = handleAction_66(varData_678, varData_679, varData_680, varData_681, varData_663, 5, itemList_22[16]);
                varData_681 = handleAction_66(varData_681, varData_678, varData_679, varData_680, varData_668, 9, itemList_22[17]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_678, varData_679, varData_673, 14, itemList_22[18]);
                varData_679 = handleAction_66(varData_679, varData_680, varData_681, varData_678, varData_662, 20, itemList_22[19]);
                varData_678 = handleAction_66(varData_678, varData_679, varData_680, varData_681, varData_667, 5, itemList_22[20]);
                varData_681 = handleAction_66(varData_681, varData_678, varData_679, varData_680, varData_672, 9, itemList_22[21]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_678, varData_679, varData_677, 14, itemList_22[22]);
                varData_679 = handleAction_66(varData_679, varData_680, varData_681, varData_678, varData_666, 20, itemList_22[23]);
                varData_678 = handleAction_66(varData_678, varData_679, varData_680, varData_681, varData_671, 5, itemList_22[24]);
                varData_681 = handleAction_66(varData_681, varData_678, varData_679, varData_680, varData_676, 9, itemList_22[25]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_678, varData_679, varData_665, 14, itemList_22[26]);
                varData_679 = handleAction_66(varData_679, varData_680, varData_681, varData_678, varData_670, 20, itemList_22[27]);
                varData_678 = handleAction_66(varData_678, varData_679, varData_680, varData_681, varData_675, 5, itemList_22[28]);
                varData_681 = handleAction_66(varData_681, varData_678, varData_679, varData_680, varData_664, 9, itemList_22[29]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_678, varData_679, varData_669, 14, itemList_22[30]);
                varData_679 = handleAction_66(varData_679, varData_680, varData_681, varData_678, varData_674, 20, itemList_22[31]);
                varData_678 = handleAction_67(varData_678, varData_679, varData_680, varData_681, varData_667, 4, itemList_22[32]);
                varData_681 = handleAction_67(varData_681, varData_678, varData_679, varData_680, varData_670, 11, itemList_22[33]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_678, varData_679, varData_673, 16, itemList_22[34]);
                varData_679 = handleAction_67(varData_679, varData_680, varData_681, varData_678, varData_676, 23, itemList_22[35]);
                varData_678 = handleAction_67(varData_678, varData_679, varData_680, varData_681, varData_663, 4, itemList_22[36]);
                varData_681 = handleAction_67(varData_681, varData_678, varData_679, varData_680, varData_666, 11, itemList_22[37]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_678, varData_679, varData_669, 16, itemList_22[38]);
                varData_679 = handleAction_67(varData_679, varData_680, varData_681, varData_678, varData_672, 23, itemList_22[39]);
                varData_678 = handleAction_67(varData_678, varData_679, varData_680, varData_681, varData_675, 4, itemList_22[40]);
                varData_681 = handleAction_67(varData_681, varData_678, varData_679, varData_680, varData_662, 11, itemList_22[41]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_678, varData_679, varData_665, 16, itemList_22[42]);
                varData_679 = handleAction_67(varData_679, varData_680, varData_681, varData_678, varData_668, 23, itemList_22[43]);
                varData_678 = handleAction_67(varData_678, varData_679, varData_680, varData_681, varData_671, 4, itemList_22[44]);
                varData_681 = handleAction_67(varData_681, varData_678, varData_679, varData_680, varData_674, 11, itemList_22[45]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_678, varData_679, varData_677, 16, itemList_22[46]);
                varData_679 = handleAction_67(varData_679, varData_680, varData_681, varData_678, varData_664, 23, itemList_22[47]);
                varData_678 = handleAction_68(varData_678, varData_679, varData_680, varData_681, varData_662, 6, itemList_22[48]);
                varData_681 = handleAction_68(varData_681, varData_678, varData_679, varData_680, varData_669, 10, itemList_22[49]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_678, varData_679, varData_676, 15, itemList_22[50]);
                varData_679 = handleAction_68(varData_679, varData_680, varData_681, varData_678, varData_667, 21, itemList_22[51]);
                varData_678 = handleAction_68(varData_678, varData_679, varData_680, varData_681, varData_674, 6, itemList_22[52]);
                varData_681 = handleAction_68(varData_681, varData_678, varData_679, varData_680, varData_665, 10, itemList_22[53]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_678, varData_679, varData_672, 15, itemList_22[54]);
                varData_679 = handleAction_68(varData_679, varData_680, varData_681, varData_678, varData_663, 21, itemList_22[55]);
                varData_678 = handleAction_68(varData_678, varData_679, varData_680, varData_681, varData_670, 6, itemList_22[56]);
                varData_681 = handleAction_68(varData_681, varData_678, varData_679, varData_680, varData_677, 10, itemList_22[57]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_678, varData_679, varData_668, 15, itemList_22[58]);
                varData_679 = handleAction_68(varData_679, varData_680, varData_681, varData_678, varData_675, 21, itemList_22[59]);
                varData_678 = handleAction_68(varData_678, varData_679, varData_680, varData_681, varData_666, 6, itemList_22[60]);
                varData_681 = handleAction_68(varData_681, varData_678, varData_679, varData_680, varData_673, 10, itemList_22[61]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_678, varData_679, varData_664, 15, itemList_22[62]);
                varData_679 = handleAction_68(varData_679, varData_680, varData_681, varData_678, varData_671, 21, itemList_22[63]);
                varData_661[0] = varData_661[0] + varData_678 | 0;
                varData_661[1] = varData_661[1] + varData_679 | 0;
                varData_661[2] = varData_661[2] + varData_680 | 0;
                varData_661[3] = varData_661[3] + varData_681 | 0;
              },
              _doFinalize: function() {
                var varData_682 = this._data;
                var varData_683 = varData_682.words;
                var varData_684 = this._nDataBytes * 8;
                var varData_685 = varData_682.sigBytes * 8;
                varData_683[varData_685 >>> 5] |= 128 << 24 - varData_685 % 32;
                var varData_686 = param_1_2.floor(varData_684 / 4294967296);
                var varData_687 = varData_684;
                varData_683[(varData_685 + 64 >>> 9 << 4) + 15] = (varData_686 << 8 | varData_686 >>> 24) & 16711935 | (varData_686 << 24 | varData_686 >>> 8) & -16711936;
                varData_683[(varData_685 + 64 >>> 9 << 4) + 14] = (varData_687 << 8 | varData_687 >>> 24) & 16711935 | (varData_687 << 24 | varData_687 >>> 8) & -16711936;
                varData_682.sigBytes = (varData_683.length + 1) * 4;
                this._process();
                var varData_688 = this._hash;
                var varData_689 = varData_688.words;
                for (var numericVal_912 = 0; numericVal_912 < 4; numericVal_912++) {
                  var varData_690 = varData_689[numericVal_912];
                  varData_689[numericVal_912] = (varData_690 << 8 | varData_690 >>> 24) & 16711935 | (varData_690 << 24 | varData_690 >>> 8) & -16711936;
                }
                return varData_688;
              },
              clone: function() {
                var varData_691 = varData_656.clone.call(this);
                varData_691._hash = this._hash.clone();
                return varData_691;
              }
            });
            function handleAction_65(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_692 = param_1_3 + (param_2_1 & param_3 | ~param_2_1 & param_4) + param_5 + param_7;
              return (varData_692 << param_6 | varData_692 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_66(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_693 = param_1_3 + (param_2_1 & param_4 | param_3 & ~param_4) + param_5 + param_7;
              return (varData_693 << param_6 | varData_693 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_67(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_694 = param_1_3 + (param_2_1 ^ param_3 ^ param_4) + param_5 + param_7;
              return (varData_694 << param_6 | varData_694 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_68(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_695 = param_1_3 + (param_3 ^ (param_2_1 | ~param_4)) + param_5 + param_7;
              return (varData_695 << param_6 | varData_695 >>> 32 - param_6) + param_2_1;
            }
            varData_653.MD5 = varData_656._createHelper(varData_658);
            varData_653.HmacMD5 = varData_656._createHmacHelper(varData_658);
          })(Math);
          return param_1_1.MD5;
        });
      }
    });
    var varData_696 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_697 = param_1_1;
            var varData_698 = varData_697.lib;
            var varData_699 = varData_698.WordArray;
            var varData_700 = varData_698.Hasher;
            var varData_701 = varData_697.algo;
            var itemList_22 = [];
            var varData_702 = varData_701.SHA1 = varData_700.extend({
              _doReset: function() {
                this._hash = new varData_699.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_703 = this._hash.words;
                var varData_704 = varData_703[0];
                var varData_705 = varData_703[1];
                var varData_706 = varData_703[2];
                var varData_707 = varData_703[3];
                var varData_708 = varData_703[4];
                for (var numericVal_912 = 0; numericVal_912 < 80; numericVal_912++) {
                  if (numericVal_912 < 16) {
                    itemList_22[numericVal_912] = param_1_2[param_2_1 + numericVal_912] | 0;
                  } else {
                    var varData_709 = itemList_22[numericVal_912 - 3] ^ itemList_22[numericVal_912 - 8] ^ itemList_22[numericVal_912 - 14] ^ itemList_22[numericVal_912 - 16];
                    itemList_22[numericVal_912] = varData_709 << 1 | varData_709 >>> 31;
                  }
                  var varData_710 = (varData_704 << 5 | varData_704 >>> 27) + varData_708 + itemList_22[numericVal_912];
                  if (numericVal_912 < 20) {
                    varData_710 += (varData_705 & varData_706 | ~varData_705 & varData_707) + 1518500249;
                  } else if (numericVal_912 < 40) {
                    varData_710 += (varData_705 ^ varData_706 ^ varData_707) + 1859775393;
                  } else if (numericVal_912 < 60) {
                    varData_710 += (varData_705 & varData_706 | varData_705 & varData_707 | varData_706 & varData_707) - 1894007588;
                  } else {
                    varData_710 += (varData_705 ^ varData_706 ^ varData_707) - 899497514;
                  }
                  varData_708 = varData_707;
                  varData_707 = varData_706;
                  varData_706 = varData_705 << 30 | varData_705 >>> 2;
                  varData_705 = varData_704;
                  varData_704 = varData_710;
                }
                varData_703[0] = varData_703[0] + varData_704 | 0;
                varData_703[1] = varData_703[1] + varData_705 | 0;
                varData_703[2] = varData_703[2] + varData_706 | 0;
                varData_703[3] = varData_703[3] + varData_707 | 0;
                varData_703[4] = varData_703[4] + varData_708 | 0;
              },
              _doFinalize: function() {
                var varData_711 = this._data;
                var varData_712 = varData_711.words;
                var varData_713 = this._nDataBytes * 8;
                var varData_714 = varData_711.sigBytes * 8;
                varData_712[varData_714 >>> 5] |= 128 << 24 - varData_714 % 32;
                varData_712[(varData_714 + 64 >>> 9 << 4) + 14] = Math.floor(varData_713 / 4294967296);
                varData_712[(varData_714 + 64 >>> 9 << 4) + 15] = varData_713;
                varData_711.sigBytes = varData_712.length * 4;
                this._process();
                return this._hash;
              },
              clone: function() {
                var varData_715 = varData_700.clone.call(this);
                varData_715._hash = this._hash.clone();
                return varData_715;
              }
            });
            varData_697.SHA1 = varData_700._createHelper(varData_702);
            varData_697.HmacSHA1 = varData_700._createHmacHelper(varData_702);
          })();
          return param_1_1.SHA1;
        });
      }
    });
    var varData_716 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_717 = param_1_1;
            var varData_718 = varData_717.lib;
            var varData_719 = varData_718.WordArray;
            var varData_720 = varData_718.Hasher;
            var varData_721 = varData_717.algo;
            var itemList_22 = [];
            var itemList_32 = [];
            (function() {
              function handleAction_69(param_1_3) {
                var varData_722 = param_1_2.sqrt(param_1_3);
                for (var numericVal_913 = 2; numericVal_913 <= varData_722; numericVal_913++) {
                  if (!(param_1_3 % numericVal_913)) {
                    return false;
                  }
                }
                return true;
              }
              function handleAction_70(param_1_3) {
                return (param_1_3 - (param_1_3 | 0)) * 4294967296 | 0;
              }
              var numericVal_912 = 2;
              var numericVal_92 = 0;
              while (numericVal_92 < 64) {
                if (handleAction_69(numericVal_912)) {
                  if (numericVal_92 < 8) {
                    itemList_22[numericVal_92] = handleAction_70(param_1_2.pow(numericVal_912, 1 / 2));
                  }
                  itemList_32[numericVal_92] = handleAction_70(param_1_2.pow(numericVal_912, 1 / 3));
                  numericVal_92++;
                }
                numericVal_912++;
              }
            })();
            var itemList_4 = [];
            var varData_723 = varData_721.SHA256 = varData_720.extend({
              _doReset: function() {
                this._hash = new varData_719.init(itemList_22.slice(0));
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                var varData_724 = this._hash.words;
                var varData_725 = varData_724[0];
                var varData_726 = varData_724[1];
                var varData_727 = varData_724[2];
                var varData_728 = varData_724[3];
                var varData_729 = varData_724[4];
                var varData_730 = varData_724[5];
                var varData_731 = varData_724[6];
                var varData_732 = varData_724[7];
                for (var numericVal_912 = 0; numericVal_912 < 64; numericVal_912++) {
                  if (numericVal_912 < 16) {
                    itemList_4[numericVal_912] = param_1_3[param_2_1 + numericVal_912] | 0;
                  } else {
                    var varData_733 = itemList_4[numericVal_912 - 15];
                    var varData_734 = (varData_733 << 25 | varData_733 >>> 7) ^ (varData_733 << 14 | varData_733 >>> 18) ^ varData_733 >>> 3;
                    var varData_735 = itemList_4[numericVal_912 - 2];
                    var varData_736 = (varData_735 << 15 | varData_735 >>> 17) ^ (varData_735 << 13 | varData_735 >>> 19) ^ varData_735 >>> 10;
                    itemList_4[numericVal_912] = varData_734 + itemList_4[numericVal_912 - 7] + varData_736 + itemList_4[numericVal_912 - 16];
                  }
                  var varData_737 = varData_729 & varData_730 ^ ~varData_729 & varData_731;
                  var varData_738 = varData_725 & varData_726 ^ varData_725 & varData_727 ^ varData_726 & varData_727;
                  var varData_739 = (varData_725 << 30 | varData_725 >>> 2) ^ (varData_725 << 19 | varData_725 >>> 13) ^ (varData_725 << 10 | varData_725 >>> 22);
                  var varData_740 = (varData_729 << 26 | varData_729 >>> 6) ^ (varData_729 << 21 | varData_729 >>> 11) ^ (varData_729 << 7 | varData_729 >>> 25);
                  var varData_741 = varData_732 + varData_740 + varData_737 + itemList_32[numericVal_912] + itemList_4[numericVal_912];
                  var varData_742 = varData_739 + varData_738;
                  varData_732 = varData_731;
                  varData_731 = varData_730;
                  varData_730 = varData_729;
                  varData_729 = varData_728 + varData_741 | 0;
                  varData_728 = varData_727;
                  varData_727 = varData_726;
                  varData_726 = varData_725;
                  varData_725 = varData_741 + varData_742 | 0;
                }
                varData_724[0] = varData_724[0] + varData_725 | 0;
                varData_724[1] = varData_724[1] + varData_726 | 0;
                varData_724[2] = varData_724[2] + varData_727 | 0;
                varData_724[3] = varData_724[3] + varData_728 | 0;
                varData_724[4] = varData_724[4] + varData_729 | 0;
                varData_724[5] = varData_724[5] + varData_730 | 0;
                varData_724[6] = varData_724[6] + varData_731 | 0;
                varData_724[7] = varData_724[7] + varData_732 | 0;
              },
              _doFinalize: function() {
                var varData_743 = this._data;
                var varData_744 = varData_743.words;
                var varData_745 = this._nDataBytes * 8;
                var varData_746 = varData_743.sigBytes * 8;
                varData_744[varData_746 >>> 5] |= 128 << 24 - varData_746 % 32;
                varData_744[(varData_746 + 64 >>> 9 << 4) + 14] = param_1_2.floor(varData_745 / 4294967296);
                varData_744[(varData_746 + 64 >>> 9 << 4) + 15] = varData_745;
                varData_743.sigBytes = varData_744.length * 4;
                this._process();
                return this._hash;
              },
              clone: function() {
                var varData_747 = varData_720.clone.call(this);
                varData_747._hash = this._hash.clone();
                return varData_747;
              }
            });
            varData_717.SHA256 = varData_720._createHelper(varData_723);
            varData_717.HmacSHA256 = varData_720._createHmacHelper(varData_723);
          })(Math);
          return param_1_1.SHA256;
        });
      }
    });
    var varData_748 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_716());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha256"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_749 = param_1_1;
            var varData_750 = varData_749.lib;
            var varData_751 = varData_750.WordArray;
            var varData_752 = varData_749.algo;
            var varData_753 = varData_752.SHA256;
            var varData_754 = varData_752.SHA224 = varData_753.extend({
              _doReset: function() {
                this._hash = new varData_751.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function() {
                var varData_755 = varData_753._doFinalize.call(this);
                varData_755.sigBytes -= 4;
                return varData_755;
              }
            });
            varData_749.SHA224 = varData_753._createHelper(varData_754);
            varData_749.HmacSHA224 = varData_753._createHmacHelper(varData_754);
          })();
          return param_1_1.SHA224;
        });
      }
    });
    var varData_756 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_595());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_757 = param_1_1;
            var varData_758 = varData_757.lib;
            var varData_759 = varData_758.Hasher;
            var varData_760 = varData_757.x64;
            var varData_761 = varData_760.Word;
            var varData_762 = varData_760.WordArray;
            var varData_763 = varData_757.algo;
            function handleAction_71() {
              return varData_761.create.apply(varData_761, arguments);
            }
            var itemList_22 = [handleAction_71(1116352408, 3609767458), handleAction_71(1899447441, 602891725), handleAction_71(3049323471, 3964484399), handleAction_71(3921009573, 2173295548), handleAction_71(961987163, 4081628472), handleAction_71(1508970993, 3053834265), handleAction_71(2453635748, 2937671579), handleAction_71(2870763221, 3664609560), handleAction_71(3624381080, 2734883394), handleAction_71(310598401, 1164996542), handleAction_71(607225278, 1323610764), handleAction_71(1426881987, 3590304994), handleAction_71(1925078388, 4068182383), handleAction_71(2162078206, 991336113), handleAction_71(2614888103, 633803317), handleAction_71(3248222580, 3479774868), handleAction_71(3835390401, 2666613458), handleAction_71(4022224774, 944711139), handleAction_71(264347078, 2341262773), handleAction_71(604807628, 2007800933), handleAction_71(770255983, 1495990901), handleAction_71(1249150122, 1856431235), handleAction_71(1555081692, 3175218132), handleAction_71(1996064986, 2198950837), handleAction_71(2554220882, 3999719339), handleAction_71(2821834349, 766784016), handleAction_71(2952996808, 2566594879), handleAction_71(3210313671, 3203337956), handleAction_71(3336571891, 1034457026), handleAction_71(3584528711, 2466948901), handleAction_71(113926993, 3758326383), handleAction_71(338241895, 168717936), handleAction_71(666307205, 1188179964), handleAction_71(773529912, 1546045734), handleAction_71(1294757372, 1522805485), handleAction_71(1396182291, 2643833823), handleAction_71(1695183700, 2343527390), handleAction_71(1986661051, 1014477480), handleAction_71(2177026350, 1206759142), handleAction_71(2456956037, 344077627), handleAction_71(2730485921, 1290863460), handleAction_71(2820302411, 3158454273), handleAction_71(3259730800, 3505952657), handleAction_71(3345764771, 106217008), handleAction_71(3516065817, 3606008344), handleAction_71(3600352804, 1432725776), handleAction_71(4094571909, 1467031594), handleAction_71(275423344, 851169720), handleAction_71(430227734, 3100823752), handleAction_71(506948616, 1363258195), handleAction_71(659060556, 3750685593), handleAction_71(883997877, 3785050280), handleAction_71(958139571, 3318307427), handleAction_71(1322822218, 3812723403), handleAction_71(1537002063, 2003034995), handleAction_71(1747873779, 3602036899), handleAction_71(1955562222, 1575990012), handleAction_71(2024104815, 1125592928), handleAction_71(2227730452, 2716904306), handleAction_71(2361852424, 442776044), handleAction_71(2428436474, 593698344), handleAction_71(2756734187, 3733110249), handleAction_71(3204031479, 2999351573), handleAction_71(3329325298, 3815920427), handleAction_71(3391569614, 3928383900), handleAction_71(3515267271, 566280711), handleAction_71(3940187606, 3454069534), handleAction_71(4118630271, 4000239992), handleAction_71(116418474, 1914138554), handleAction_71(174292421, 2731055270), handleAction_71(289380356, 3203993006), handleAction_71(460393269, 320620315), handleAction_71(685471733, 587496836), handleAction_71(852142971, 1086792851), handleAction_71(1017036298, 365543100), handleAction_71(1126000580, 2618297676), handleAction_71(1288033470, 3409855158), handleAction_71(1501505948, 4234509866), handleAction_71(1607167915, 987167468), handleAction_71(1816402316, 1246189591)];
            var itemList_32 = [];
            (function() {
              for (var numericVal_912 = 0; numericVal_912 < 80; numericVal_912++) {
                itemList_32[numericVal_912] = handleAction_71();
              }
            })();
            var varData_764 = varData_763.SHA512 = varData_759.extend({
              _doReset: function() {
                this._hash = new varData_762.init([new varData_761.init(1779033703, 4089235720), new varData_761.init(3144134277, 2227873595), new varData_761.init(1013904242, 4271175723), new varData_761.init(2773480762, 1595750129), new varData_761.init(1359893119, 2917565137), new varData_761.init(2600822924, 725511199), new varData_761.init(528734635, 4215389547), new varData_761.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_765 = this._hash.words;
                var varData_766 = varData_765[0];
                var varData_767 = varData_765[1];
                var varData_768 = varData_765[2];
                var varData_769 = varData_765[3];
                var varData_770 = varData_765[4];
                var varData_771 = varData_765[5];
                var varData_772 = varData_765[6];
                var varData_773 = varData_765[7];
                var varData_774 = varData_766.high;
                var varData_775 = varData_766.low;
                var varData_776 = varData_767.high;
                var varData_777 = varData_767.low;
                var varData_778 = varData_768.high;
                var varData_779 = varData_768.low;
                var varData_780 = varData_769.high;
                var varData_781 = varData_769.low;
                var varData_782 = varData_770.high;
                var varData_783 = varData_770.low;
                var varData_784 = varData_771.high;
                var varData_785 = varData_771.low;
                var varData_786 = varData_772.high;
                var varData_787 = varData_772.low;
                var varData_788 = varData_773.high;
                var varData_789 = varData_773.low;
                var varData_790 = varData_774;
                var varData_791 = varData_775;
                var varData_792 = varData_776;
                var varData_793 = varData_777;
                var varData_794 = varData_778;
                var varData_795 = varData_779;
                var varData_796 = varData_780;
                var varData_797 = varData_781;
                var varData_798 = varData_782;
                var varData_799 = varData_783;
                var varData_800 = varData_784;
                var varData_801 = varData_785;
                var varData_802 = varData_786;
                var varData_803 = varData_787;
                var varData_804 = varData_788;
                var varData_805 = varData_789;
                for (var numericVal_912 = 0; numericVal_912 < 80; numericVal_912++) {
                  var varData_806 = itemList_32[numericVal_912];
                  if (numericVal_912 < 16) {
                    var varData_807 = varData_806.high = param_1_2[param_2_1 + numericVal_912 * 2] | 0;
                    var varData_808 = varData_806.low = param_1_2[param_2_1 + numericVal_912 * 2 + 1] | 0;
                  } else {
                    var varData_809 = itemList_32[numericVal_912 - 15];
                    var varData_810 = varData_809.high;
                    var varData_811 = varData_809.low;
                    var varData_812 = (varData_810 >>> 1 | varData_811 << 31) ^ (varData_810 >>> 8 | varData_811 << 24) ^ varData_810 >>> 7;
                    var varData_813 = (varData_811 >>> 1 | varData_810 << 31) ^ (varData_811 >>> 8 | varData_810 << 24) ^ (varData_811 >>> 7 | varData_810 << 25);
                    var varData_814 = itemList_32[numericVal_912 - 2];
                    var varData_815 = varData_814.high;
                    var varData_816 = varData_814.low;
                    var varData_817 = (varData_815 >>> 19 | varData_816 << 13) ^ (varData_815 << 3 | varData_816 >>> 29) ^ varData_815 >>> 6;
                    var varData_818 = (varData_816 >>> 19 | varData_815 << 13) ^ (varData_816 << 3 | varData_815 >>> 29) ^ (varData_816 >>> 6 | varData_815 << 26);
                    var varData_819 = itemList_32[numericVal_912 - 7];
                    var varData_820 = varData_819.high;
                    var varData_821 = varData_819.low;
                    var varData_822 = itemList_32[numericVal_912 - 16];
                    var varData_823 = varData_822.high;
                    var varData_824 = varData_822.low;
                    var varData_808 = varData_813 + varData_821;
                    var varData_807 = varData_812 + varData_820 + (varData_808 >>> 0 < varData_813 >>> 0 ? 1 : 0);
                    var varData_808 = varData_808 + varData_818;
                    var varData_807 = varData_807 + varData_817 + (varData_808 >>> 0 < varData_818 >>> 0 ? 1 : 0);
                    var varData_808 = varData_808 + varData_824;
                    var varData_807 = varData_807 + varData_823 + (varData_808 >>> 0 < varData_824 >>> 0 ? 1 : 0);
                    varData_806.high = varData_807;
                    varData_806.low = varData_808;
                  }
                  var varData_825 = varData_798 & varData_800 ^ ~varData_798 & varData_802;
                  var varData_826 = varData_799 & varData_801 ^ ~varData_799 & varData_803;
                  var varData_827 = varData_790 & varData_792 ^ varData_790 & varData_794 ^ varData_792 & varData_794;
                  var varData_828 = varData_791 & varData_793 ^ varData_791 & varData_795 ^ varData_793 & varData_795;
                  var varData_829 = (varData_790 >>> 28 | varData_791 << 4) ^ (varData_790 << 30 | varData_791 >>> 2) ^ (varData_790 << 25 | varData_791 >>> 7);
                  var varData_830 = (varData_791 >>> 28 | varData_790 << 4) ^ (varData_791 << 30 | varData_790 >>> 2) ^ (varData_791 << 25 | varData_790 >>> 7);
                  var varData_831 = (varData_798 >>> 14 | varData_799 << 18) ^ (varData_798 >>> 18 | varData_799 << 14) ^ (varData_798 << 23 | varData_799 >>> 9);
                  var varData_832 = (varData_799 >>> 14 | varData_798 << 18) ^ (varData_799 >>> 18 | varData_798 << 14) ^ (varData_799 << 23 | varData_798 >>> 9);
                  var varData_833 = itemList_22[numericVal_912];
                  var varData_834 = varData_833.high;
                  var varData_835 = varData_833.low;
                  var varData_836 = varData_805 + varData_832;
                  var varData_837 = varData_804 + varData_831 + (varData_836 >>> 0 < varData_805 >>> 0 ? 1 : 0);
                  var varData_836 = varData_836 + varData_826;
                  var varData_837 = varData_837 + varData_825 + (varData_836 >>> 0 < varData_826 >>> 0 ? 1 : 0);
                  var varData_836 = varData_836 + varData_835;
                  var varData_837 = varData_837 + varData_834 + (varData_836 >>> 0 < varData_835 >>> 0 ? 1 : 0);
                  var varData_836 = varData_836 + varData_808;
                  var varData_837 = varData_837 + varData_807 + (varData_836 >>> 0 < varData_808 >>> 0 ? 1 : 0);
                  var varData_838 = varData_830 + varData_828;
                  var varData_839 = varData_829 + varData_827 + (varData_838 >>> 0 < varData_830 >>> 0 ? 1 : 0);
                  varData_804 = varData_802;
                  varData_805 = varData_803;
                  varData_802 = varData_800;
                  varData_803 = varData_801;
                  varData_800 = varData_798;
                  varData_801 = varData_799;
                  varData_799 = varData_797 + varData_836 | 0;
                  varData_798 = varData_796 + varData_837 + (varData_799 >>> 0 < varData_797 >>> 0 ? 1 : 0) | 0;
                  varData_796 = varData_794;
                  varData_797 = varData_795;
                  varData_794 = varData_792;
                  varData_795 = varData_793;
                  varData_792 = varData_790;
                  varData_793 = varData_791;
                  varData_791 = varData_836 + varData_838 | 0;
                  varData_790 = varData_837 + varData_839 + (varData_791 >>> 0 < varData_836 >>> 0 ? 1 : 0) | 0;
                }
                varData_775 = varData_766.low = varData_775 + varData_791;
                varData_766.high = varData_774 + varData_790 + (varData_775 >>> 0 < varData_791 >>> 0 ? 1 : 0);
                varData_777 = varData_767.low = varData_777 + varData_793;
                varData_767.high = varData_776 + varData_792 + (varData_777 >>> 0 < varData_793 >>> 0 ? 1 : 0);
                varData_779 = varData_768.low = varData_779 + varData_795;
                varData_768.high = varData_778 + varData_794 + (varData_779 >>> 0 < varData_795 >>> 0 ? 1 : 0);
                varData_781 = varData_769.low = varData_781 + varData_797;
                varData_769.high = varData_780 + varData_796 + (varData_781 >>> 0 < varData_797 >>> 0 ? 1 : 0);
                varData_783 = varData_770.low = varData_783 + varData_799;
                varData_770.high = varData_782 + varData_798 + (varData_783 >>> 0 < varData_799 >>> 0 ? 1 : 0);
                varData_785 = varData_771.low = varData_785 + varData_801;
                varData_771.high = varData_784 + varData_800 + (varData_785 >>> 0 < varData_801 >>> 0 ? 1 : 0);
                varData_787 = varData_772.low = varData_787 + varData_803;
                varData_772.high = varData_786 + varData_802 + (varData_787 >>> 0 < varData_803 >>> 0 ? 1 : 0);
                varData_789 = varData_773.low = varData_789 + varData_805;
                varData_773.high = varData_788 + varData_804 + (varData_789 >>> 0 < varData_805 >>> 0 ? 1 : 0);
              },
              _doFinalize: function() {
                var varData_840 = this._data;
                var varData_841 = varData_840.words;
                var varData_842 = this._nDataBytes * 8;
                var varData_843 = varData_840.sigBytes * 8;
                varData_841[varData_843 >>> 5] |= 128 << 24 - varData_843 % 32;
                varData_841[(varData_843 + 128 >>> 10 << 5) + 30] = Math.floor(varData_842 / 4294967296);
                varData_841[(varData_843 + 128 >>> 10 << 5) + 31] = varData_842;
                varData_840.sigBytes = varData_841.length * 4;
                this._process();
                var varData_844 = this._hash.toX32();
                return varData_844;
              },
              clone: function() {
                var varData_845 = varData_759.clone.call(this);
                varData_845._hash = this._hash.clone();
                return varData_845;
              },
              blockSize: 32
            });
            varData_757.SHA512 = varData_759._createHelper(varData_764);
            varData_757.HmacSHA512 = varData_759._createHmacHelper(varData_764);
          })();
          return param_1_1.SHA512;
        });
      }
    });
    var varData_846 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_595(), varData_756());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./sha512"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_847 = param_1_1;
            var varData_848 = varData_847.x64;
            var varData_849 = varData_848.Word;
            var varData_850 = varData_848.WordArray;
            var varData_851 = varData_847.algo;
            var varData_852 = varData_851.SHA512;
            var varData_853 = varData_851.SHA384 = varData_852.extend({
              _doReset: function() {
                this._hash = new varData_850.init([new varData_849.init(3418070365, 3238371032), new varData_849.init(1654270250, 914150663), new varData_849.init(2438529370, 812702999), new varData_849.init(355462360, 4144912697), new varData_849.init(1731405415, 4290775857), new varData_849.init(2394180231, 1750603025), new varData_849.init(3675008525, 1694076839), new varData_849.init(1203062813, 3204075428)]);
              },
              _doFinalize: function() {
                var varData_854 = varData_852._doFinalize.call(this);
                varData_854.sigBytes -= 16;
                return varData_854;
              }
            });
            varData_847.SHA384 = varData_852._createHelper(varData_853);
            varData_847.HmacSHA384 = varData_852._createHmacHelper(varData_853);
          })();
          return param_1_1.SHA384;
        });
      }
    });
    var varData_855 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_595());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_856 = param_1_1;
            var varData_857 = varData_856.lib;
            var varData_858 = varData_857.WordArray;
            var varData_859 = varData_857.Hasher;
            var varData_860 = varData_856.x64;
            var varData_861 = varData_860.Word;
            var varData_862 = varData_856.algo;
            var itemList_22 = [];
            var itemList_32 = [];
            var itemList_4 = [];
            (function() {
              var numericVal_912 = 1;
              var numericVal_92 = 0;
              for (var numericVal_93 = 0; numericVal_93 < 24; numericVal_93++) {
                itemList_22[numericVal_912 + numericVal_92 * 5] = (numericVal_93 + 1) * (numericVal_93 + 2) / 2 % 64;
                var varData_863 = numericVal_92 % 5;
                var varData_864 = (numericVal_912 * 2 + numericVal_92 * 3) % 5;
                numericVal_912 = varData_863;
                numericVal_92 = varData_864;
              }
              for (var numericVal_912 = 0; numericVal_912 < 5; numericVal_912++) {
                for (var numericVal_92 = 0; numericVal_92 < 5; numericVal_92++) {
                  itemList_32[numericVal_912 + numericVal_92 * 5] = numericVal_92 + (numericVal_912 * 2 + numericVal_92 * 3) % 5 * 5;
                }
              }
              var numericVal_94 = 1;
              for (var numericVal_95 = 0; numericVal_95 < 24; numericVal_95++) {
                var numericVal_96 = 0;
                var numericVal_97 = 0;
                for (var numericVal_98 = 0; numericVal_98 < 7; numericVal_98++) {
                  if (numericVal_94 & 1) {
                    var varData_865 = (1 << numericVal_98) - 1;
                    if (varData_865 < 32) {
                      numericVal_97 ^= 1 << varData_865;
                    } else {
                      numericVal_96 ^= 1 << varData_865 - 32;
                    }
                  }
                  if (numericVal_94 & 128) {
                    numericVal_94 = numericVal_94 << 1 ^ 113;
                  } else {
                    numericVal_94 <<= 1;
                  }
                }
                itemList_4[numericVal_95] = varData_861.create(numericVal_96, numericVal_97);
              }
            })();
            var itemList_5 = [];
            (function() {
              for (var numericVal_912 = 0; numericVal_912 < 25; numericVal_912++) {
                itemList_5[numericVal_912] = varData_861.create();
              }
            })();
            var varData_866 = varData_862.SHA3 = varData_859.extend({
              cfg: varData_859.cfg.extend({
                outputLength: 512
              }),
              _doReset: function() {
                var varData_867 = this._state = [];
                for (var numericVal_912 = 0; numericVal_912 < 25; numericVal_912++) {
                  varData_867[numericVal_912] = new varData_861.init();
                }
                this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                var varData_868 = this._state;
                var varData_869 = this.blockSize / 2;
                for (var numericVal_912 = 0; numericVal_912 < varData_869; numericVal_912++) {
                  var varData_870 = param_1_3[param_2_1 + numericVal_912 * 2];
                  var varData_871 = param_1_3[param_2_1 + numericVal_912 * 2 + 1];
                  varData_870 = (varData_870 << 8 | varData_870 >>> 24) & 16711935 | (varData_870 << 24 | varData_870 >>> 8) & -16711936;
                  varData_871 = (varData_871 << 8 | varData_871 >>> 24) & 16711935 | (varData_871 << 24 | varData_871 >>> 8) & -16711936;
                  var varData_872 = varData_868[numericVal_912];
                  varData_872.high ^= varData_871;
                  varData_872.low ^= varData_870;
                }
                for (var numericVal_92 = 0; numericVal_92 < 24; numericVal_92++) {
                  for (var numericVal_93 = 0; numericVal_93 < 5; numericVal_93++) {
                    var numericVal_94 = 0;
                    var numericVal_95 = 0;
                    for (var numericVal_96 = 0; numericVal_96 < 5; numericVal_96++) {
                      var varData_872 = varData_868[numericVal_93 + numericVal_96 * 5];
                      numericVal_94 ^= varData_872.high;
                      numericVal_95 ^= varData_872.low;
                    }
                    var varData_873 = itemList_5[numericVal_93];
                    varData_873.high = numericVal_94;
                    varData_873.low = numericVal_95;
                  }
                  for (var numericVal_93 = 0; numericVal_93 < 5; numericVal_93++) {
                    var varData_874 = itemList_5[(numericVal_93 + 4) % 5];
                    var varData_875 = itemList_5[(numericVal_93 + 1) % 5];
                    var varData_876 = varData_875.high;
                    var varData_877 = varData_875.low;
                    var numericVal_94 = varData_874.high ^ (varData_876 << 1 | varData_877 >>> 31);
                    var numericVal_95 = varData_874.low ^ (varData_877 << 1 | varData_876 >>> 31);
                    for (var numericVal_96 = 0; numericVal_96 < 5; numericVal_96++) {
                      var varData_872 = varData_868[numericVal_93 + numericVal_96 * 5];
                      varData_872.high ^= numericVal_94;
                      varData_872.low ^= numericVal_95;
                    }
                  }
                  for (var numericVal_97 = 1; numericVal_97 < 25; numericVal_97++) {
                    var varData_872 = varData_868[numericVal_97];
                    var varData_878 = varData_872.high;
                    var varData_879 = varData_872.low;
                    var varData_880 = itemList_22[numericVal_97];
                    if (varData_880 < 32) {
                      var numericVal_94 = varData_878 << varData_880 | varData_879 >>> 32 - varData_880;
                      var numericVal_95 = varData_879 << varData_880 | varData_878 >>> 32 - varData_880;
                    } else {
                      var numericVal_94 = varData_879 << varData_880 - 32 | varData_878 >>> 64 - varData_880;
                      var numericVal_95 = varData_878 << varData_880 - 32 | varData_879 >>> 64 - varData_880;
                    }
                    var varData_881 = itemList_5[itemList_32[numericVal_97]];
                    varData_881.high = numericVal_94;
                    varData_881.low = numericVal_95;
                  }
                  var varData_882 = itemList_5[0];
                  var varData_883 = varData_868[0];
                  varData_882.high = varData_883.high;
                  varData_882.low = varData_883.low;
                  for (var numericVal_93 = 0; numericVal_93 < 5; numericVal_93++) {
                    for (var numericVal_96 = 0; numericVal_96 < 5; numericVal_96++) {
                      var numericVal_97 = numericVal_93 + numericVal_96 * 5;
                      var varData_872 = varData_868[numericVal_97];
                      var varData_884 = itemList_5[numericVal_97];
                      var varData_885 = itemList_5[(numericVal_93 + 1) % 5 + numericVal_96 * 5];
                      var varData_886 = itemList_5[(numericVal_93 + 2) % 5 + numericVal_96 * 5];
                      varData_872.high = varData_884.high ^ ~varData_885.high & varData_886.high;
                      varData_872.low = varData_884.low ^ ~varData_885.low & varData_886.low;
                    }
                  }
                  var varData_872 = varData_868[0];
                  var varData_887 = itemList_4[numericVal_92];
                  varData_872.high ^= varData_887.high;
                  varData_872.low ^= varData_887.low;
                  ;
                }
              },
              _doFinalize: function() {
                var varData_888 = this._data;
                var varData_889 = varData_888.words;
                var varData_890 = this._nDataBytes * 8;
                var varData_891 = varData_888.sigBytes * 8;
                var varData_892 = this.blockSize * 32;
                varData_889[varData_891 >>> 5] |= 1 << 24 - varData_891 % 32;
                varData_889[(param_1_2.ceil((varData_891 + 1) / varData_892) * varData_892 >>> 5) - 1] |= 128;
                varData_888.sigBytes = varData_889.length * 4;
                this._process();
                var varData_893 = this._state;
                var varData_894 = this.cfg.outputLength / 8;
                var varData_895 = varData_894 / 8;
                var itemList_6 = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_895; numericVal_912++) {
                  var varData_896 = varData_893[numericVal_912];
                  var varData_897 = varData_896.high;
                  var varData_898 = varData_896.low;
                  varData_897 = (varData_897 << 8 | varData_897 >>> 24) & 16711935 | (varData_897 << 24 | varData_897 >>> 8) & -16711936;
                  varData_898 = (varData_898 << 8 | varData_898 >>> 24) & 16711935 | (varData_898 << 24 | varData_898 >>> 8) & -16711936;
                  itemList_6.push(varData_898);
                  itemList_6.push(varData_897);
                }
                return new varData_858.init(itemList_6, varData_894);
              },
              clone: function() {
                var varData_899 = varData_859.clone.call(this);
                var varData_900 = varData_899._state = this._state.slice(0);
                for (var numericVal_912 = 0; numericVal_912 < 25; numericVal_912++) {
                  varData_900[numericVal_912] = varData_900[numericVal_912].clone();
                }
                return varData_899;
              }
            });
            varData_856.SHA3 = varData_859._createHelper(varData_866);
            varData_856.HmacSHA3 = varData_859._createHmacHelper(varData_866);
          })(Math);
          return param_1_1.SHA3;
        });
      }
    });
    var varData_901 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_902 = param_1_1;
            var varData_903 = varData_902.lib;
            var varData_904 = varData_903.WordArray;
            var varData_905 = varData_903.Hasher;
            var varData_906 = varData_902.algo;
            var varData_907 = varData_904.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
            var varData_908 = varData_904.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
            var varData_909 = varData_904.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
            var varData_910 = varData_904.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
            var varData_911 = varData_904.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
            var varData_912 = varData_904.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            var varData_913 = varData_906.RIPEMD160 = varData_905.extend({
              _doReset: function() {
                this._hash = varData_904.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                for (var numericVal_912 = 0; numericVal_912 < 16; numericVal_912++) {
                  var varData_914 = param_2_1 + numericVal_912;
                  var varData_915 = param_1_3[varData_914];
                  param_1_3[varData_914] = (varData_915 << 8 | varData_915 >>> 24) & 16711935 | (varData_915 << 24 | varData_915 >>> 8) & -16711936;
                }
                var varData_916 = this._hash.words;
                var varData_917 = varData_911.words;
                var varData_918 = varData_912.words;
                var varData_919 = varData_907.words;
                var varData_920 = varData_908.words;
                var varData_921 = varData_909.words;
                var varData_922 = varData_910.words;
                var varData_923;
                var varData_924;
                var varData_925;
                var varData_926;
                var varData_927;
                var varData_928;
                var varData_929;
                var varData_930;
                var varData_931;
                var varData_932;
                varData_928 = varData_923 = varData_916[0];
                varData_929 = varData_924 = varData_916[1];
                varData_930 = varData_925 = varData_916[2];
                varData_931 = varData_926 = varData_916[3];
                varData_932 = varData_927 = varData_916[4];
                var varData_933;
                for (var numericVal_912 = 0; numericVal_912 < 80; numericVal_912 += 1) {
                  varData_933 = varData_923 + param_1_3[param_2_1 + varData_919[numericVal_912]] | 0;
                  if (numericVal_912 < 16) {
                    varData_933 += handleAction_72(varData_924, varData_925, varData_926) + varData_917[0];
                  } else if (numericVal_912 < 32) {
                    varData_933 += handleAction_73(varData_924, varData_925, varData_926) + varData_917[1];
                  } else if (numericVal_912 < 48) {
                    varData_933 += handleAction_74(varData_924, varData_925, varData_926) + varData_917[2];
                  } else if (numericVal_912 < 64) {
                    varData_933 += handleAction_75(varData_924, varData_925, varData_926) + varData_917[3];
                  } else {
                    varData_933 += handleAction_76(varData_924, varData_925, varData_926) + varData_917[4];
                  }
                  varData_933 = varData_933 | 0;
                  varData_933 = handleAction_77(varData_933, varData_921[numericVal_912]);
                  varData_933 = varData_933 + varData_927 | 0;
                  varData_923 = varData_927;
                  varData_927 = varData_926;
                  varData_926 = handleAction_77(varData_925, 10);
                  varData_925 = varData_924;
                  varData_924 = varData_933;
                  varData_933 = varData_928 + param_1_3[param_2_1 + varData_920[numericVal_912]] | 0;
                  if (numericVal_912 < 16) {
                    varData_933 += handleAction_76(varData_929, varData_930, varData_931) + varData_918[0];
                  } else if (numericVal_912 < 32) {
                    varData_933 += handleAction_75(varData_929, varData_930, varData_931) + varData_918[1];
                  } else if (numericVal_912 < 48) {
                    varData_933 += handleAction_74(varData_929, varData_930, varData_931) + varData_918[2];
                  } else if (numericVal_912 < 64) {
                    varData_933 += handleAction_73(varData_929, varData_930, varData_931) + varData_918[3];
                  } else {
                    varData_933 += handleAction_72(varData_929, varData_930, varData_931) + varData_918[4];
                  }
                  varData_933 = varData_933 | 0;
                  varData_933 = handleAction_77(varData_933, varData_922[numericVal_912]);
                  varData_933 = varData_933 + varData_932 | 0;
                  varData_928 = varData_932;
                  varData_932 = varData_931;
                  varData_931 = handleAction_77(varData_930, 10);
                  varData_930 = varData_929;
                  varData_929 = varData_933;
                }
                varData_933 = varData_916[1] + varData_925 + varData_931 | 0;
                varData_916[1] = varData_916[2] + varData_926 + varData_932 | 0;
                varData_916[2] = varData_916[3] + varData_927 + varData_928 | 0;
                varData_916[3] = varData_916[4] + varData_923 + varData_929 | 0;
                varData_916[4] = varData_916[0] + varData_924 + varData_930 | 0;
                varData_916[0] = varData_933;
              },
              _doFinalize: function() {
                var varData_934 = this._data;
                var varData_935 = varData_934.words;
                var varData_936 = this._nDataBytes * 8;
                var varData_937 = varData_934.sigBytes * 8;
                varData_935[varData_937 >>> 5] |= 128 << 24 - varData_937 % 32;
                varData_935[(varData_937 + 64 >>> 9 << 4) + 14] = (varData_936 << 8 | varData_936 >>> 24) & 16711935 | (varData_936 << 24 | varData_936 >>> 8) & -16711936;
                varData_934.sigBytes = (varData_935.length + 1) * 4;
                this._process();
                var varData_938 = this._hash;
                var varData_939 = varData_938.words;
                for (var numericVal_912 = 0; numericVal_912 < 5; numericVal_912++) {
                  var varData_940 = varData_939[numericVal_912];
                  varData_939[numericVal_912] = (varData_940 << 8 | varData_940 >>> 24) & 16711935 | (varData_940 << 24 | varData_940 >>> 8) & -16711936;
                }
                return varData_938;
              },
              clone: function() {
                var varData_941 = varData_905.clone.call(this);
                varData_941._hash = this._hash.clone();
                return varData_941;
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
            varData_902.RIPEMD160 = varData_905._createHelper(varData_913);
            varData_902.HmacRIPEMD160 = varData_905._createHmacHelper(varData_913);
          })(Math);
          return param_1_1.RIPEMD160;
        });
      }
    });
    var varData_942 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_943 = param_1_1;
            var varData_944 = varData_943.lib;
            var varData_945 = varData_944.Base;
            var varData_946 = varData_943.enc;
            var varData_947 = varData_946.Utf8;
            var varData_948 = varData_943.algo;
            var varData_949 = varData_948.HMAC = varData_945.extend({
              init: function(param_1_2, param_2_1) {
                param_1_2 = this._hasher = new param_1_2.init();
                if (typeof param_2_1 == "string") {
                  param_2_1 = varData_947.parse(param_2_1);
                }
                var varData_950 = param_1_2.blockSize;
                var varData_951 = varData_950 * 4;
                if (param_2_1.sigBytes > varData_951) {
                  param_2_1 = param_1_2.finalize(param_2_1);
                }
                param_2_1.clamp();
                var varData_952 = this._oKey = param_2_1.clone();
                var varData_953 = this._iKey = param_2_1.clone();
                var varData_954 = varData_952.words;
                var varData_955 = varData_953.words;
                for (var numericVal_912 = 0; numericVal_912 < varData_950; numericVal_912++) {
                  varData_954[numericVal_912] ^= 1549556828;
                  varData_955[numericVal_912] ^= 909522486;
                }
                varData_952.sigBytes = varData_953.sigBytes = varData_951;
                this.reset();
              },
              reset: function() {
                var varData_956 = this._hasher;
                varData_956.reset();
                varData_956.update(this._iKey);
              },
              update: function(param_1_2) {
                this._hasher.update(param_1_2);
                return this;
              },
              finalize: function(param_1_2) {
                var varData_957 = this._hasher;
                var varData_958 = varData_957.finalize(param_1_2);
                varData_957.reset();
                var varData_959 = varData_957.finalize(this._oKey.clone().concat(varData_958));
                return varData_959;
              }
            });
          })();
        });
      }
    });
    var varData_960 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_696(), varData_942());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_961 = param_1_1;
            var varData_962 = varData_961.lib;
            var varData_963 = varData_962.Base;
            var varData_964 = varData_962.WordArray;
            var varData_965 = varData_961.algo;
            var varData_966 = varData_965.SHA1;
            var varData_967 = varData_965.HMAC;
            var varData_968 = {
              keySize: 4,
              hasher: varData_966,
              iterations: 1
            };
            var varData_969 = varData_965.PBKDF2 = varData_963.extend({
              cfg: varData_963.extend(varData_968),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function(param_1_2, param_2_1) {
                var varData_970 = this.cfg;
                var varData_971 = varData_967.create(varData_970.hasher, param_1_2);
                var varData_972 = varData_964.create();
                var varData_973 = varData_964.create([1]);
                var varData_974 = varData_972.words;
                var varData_975 = varData_973.words;
                var varData_976 = varData_970.keySize;
                var varData_977 = varData_970.iterations;
                while (varData_974.length < varData_976) {
                  var varData_978 = varData_971.update(param_2_1).finalize(varData_973);
                  varData_971.reset();
                  var varData_979 = varData_978.words;
                  var varData_980 = varData_979.length;
                  var varData_981 = varData_978;
                  for (var numericVal_912 = 1; numericVal_912 < varData_977; numericVal_912++) {
                    varData_981 = varData_971.finalize(varData_981);
                    varData_971.reset();
                    var varData_982 = varData_981.words;
                    for (var numericVal_92 = 0; numericVal_92 < varData_980; numericVal_92++) {
                      varData_979[numericVal_92] ^= varData_982[numericVal_92];
                    }
                  }
                  varData_972.concat(varData_978);
                  varData_975[0]++;
                }
                varData_972.sigBytes = varData_976 * 4;
                return varData_972;
              }
            });
            varData_961.PBKDF2 = function(param_1_2, param_2_1, param_3) {
              return varData_969.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.PBKDF2;
        });
      }
    });
    var varData_983 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_696(), varData_942());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_984 = param_1_1;
            var varData_985 = varData_984.lib;
            var varData_986 = varData_985.Base;
            var varData_987 = varData_985.WordArray;
            var varData_988 = varData_984.algo;
            var varData_989 = varData_988.MD5;
            var varData_990 = {
              keySize: 4,
              hasher: varData_989,
              iterations: 1
            };
            var varData_991 = varData_988.EvpKDF = varData_986.extend({
              cfg: varData_986.extend(varData_990),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function(param_1_2, param_2_1) {
                var varData_992 = this.cfg;
                var varData_993 = varData_992.hasher.create();
                var varData_994 = varData_987.create();
                var varData_995 = varData_994.words;
                var varData_996 = varData_992.keySize;
                var varData_997 = varData_992.iterations;
                while (varData_995.length < varData_996) {
                  if (varData_998) {
                    varData_993.update(varData_998);
                  }
                  var varData_998 = varData_993.update(param_1_2).finalize(param_2_1);
                  varData_993.reset();
                  for (var numericVal_912 = 1; numericVal_912 < varData_997; numericVal_912++) {
                    varData_998 = varData_993.finalize(varData_998);
                    varData_993.reset();
                  }
                  varData_994.concat(varData_998);
                }
                varData_994.sigBytes = varData_996 * 4;
                return varData_994;
              }
            });
            varData_984.EvpKDF = function(param_1_2, param_2_1, param_3) {
              return varData_991.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.EvpKDF;
        });
      }
    });
    var varData_999 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_983());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./evpkdf"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          if (!param_1_1.lib.Cipher) {
            (function(param_1_2) {
              var varData_1000 = param_1_1;
              var varData_1001 = varData_1000.lib;
              var varData_1002 = varData_1001.Base;
              var varData_1003 = varData_1001.WordArray;
              var varData_1004 = varData_1001.BufferedBlockAlgorithm;
              var varData_1005 = varData_1000.enc;
              var varData_1006 = varData_1005.Utf8;
              var varData_1007 = varData_1005.Base64;
              var varData_1008 = varData_1000.algo;
              var varData_1009 = varData_1008.EvpKDF;
              var varData_1010 = varData_1001.Cipher = varData_1004.extend({
                cfg: varData_1002.extend(),
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
                  varData_1004.reset.call(this);
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
                  var varData_1011 = this._doFinalize();
                  return varData_1011;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: /* @__PURE__ */ (function() {
                  function handleAction_78(param_1_3) {
                    if (typeof param_1_3 == "string") {
                      return varData_1064;
                    } else {
                      return varData_1051;
                    }
                  }
                  return function(param_1_3) {
                    return {
                      encrypt: function(param_1_4, param_2_1, param_3) {
                        return handleAction_78(param_2_1).encrypt(param_1_3, param_1_4, param_2_1, param_3);
                      },
                      decrypt: function(param_1_4, param_2_1, param_3) {
                        return handleAction_78(param_2_1).decrypt(param_1_3, param_1_4, param_2_1, param_3);
                      }
                    };
                  };
                })()
              });
              var varData_1012 = varData_1001.StreamCipher = varData_1010.extend({
                _doFinalize: function() {
                  var varData_1013 = this._process(true);
                  return varData_1013;
                },
                blockSize: 1
              });
              var varData_1014 = varData_1000.mode = {};
              var varData_1015 = varData_1001.BlockCipherMode = varData_1002.extend({
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
              var varData_1016 = varData_1014.CBC = (function() {
                var varData_1017 = varData_1015.extend();
                varData_1017.Encryptor = varData_1017.extend({
                  processBlock: function(param_1_3, param_2_1) {
                    var varData_1018 = this._cipher;
                    var varData_1019 = varData_1018.blockSize;
                    handleAction_79.call(this, param_1_3, param_2_1, varData_1019);
                    varData_1018.encryptBlock(param_1_3, param_2_1);
                    this._prevBlock = param_1_3.slice(param_2_1, param_2_1 + varData_1019);
                  }
                });
                varData_1017.Decryptor = varData_1017.extend({
                  processBlock: function(param_1_3, param_2_1) {
                    var varData_1020 = this._cipher;
                    var varData_1021 = varData_1020.blockSize;
                    var varData_1022 = param_1_3.slice(param_2_1, param_2_1 + varData_1021);
                    varData_1020.decryptBlock(param_1_3, param_2_1);
                    handleAction_79.call(this, param_1_3, param_2_1, varData_1021);
                    this._prevBlock = varData_1022;
                  }
                });
                function handleAction_79(param_1_3, param_2_1, param_3) {
                  var varData_1023 = this._iv;
                  if (varData_1023) {
                    var varData_1024 = varData_1023;
                    this._iv = param_1_2;
                  } else {
                    var varData_1024 = this._prevBlock;
                  }
                  for (var numericVal_912 = 0; numericVal_912 < param_3; numericVal_912++) {
                    param_1_3[param_2_1 + numericVal_912] ^= varData_1024[numericVal_912];
                  }
                }
                return varData_1017;
              })();
              var varData_1025 = varData_1000.pad = {};
              var varData_1026 = varData_1025.Pkcs7 = {
                pad: function(param_1_3, param_2_1) {
                  var varData_1027 = param_2_1 * 4;
                  var varData_1028 = varData_1027 - param_1_3.sigBytes % varData_1027;
                  var varData_1029 = varData_1028 << 24 | varData_1028 << 16 | varData_1028 << 8 | varData_1028;
                  var itemList_22 = [];
                  for (var numericVal_912 = 0; numericVal_912 < varData_1028; numericVal_912 += 4) {
                    itemList_22.push(varData_1029);
                  }
                  var varData_1030 = varData_1003.create(itemList_22, varData_1028);
                  param_1_3.concat(varData_1030);
                },
                unpad: function(param_1_3) {
                  var varData_1031 = param_1_3.words[param_1_3.sigBytes - 1 >>> 2] & 255;
                  param_1_3.sigBytes -= varData_1031;
                }
              };
              var varData_1032 = {
                mode: varData_1016,
                padding: varData_1026
              };
              var varData_1033 = varData_1001.BlockCipher = varData_1010.extend({
                cfg: varData_1010.cfg.extend(varData_1032),
                reset: function() {
                  varData_1010.reset.call(this);
                  var varData_1034 = this.cfg;
                  var varData_1035 = varData_1034.iv;
                  var varData_1036 = varData_1034.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var varData_1037 = varData_1036.createEncryptor;
                  } else {
                    var varData_1037 = varData_1036.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == varData_1037) {
                    this._mode.init(this, varData_1035 && varData_1035.words);
                  } else {
                    this._mode = varData_1037.call(varData_1036, this, varData_1035 && varData_1035.words);
                    this._mode.__creator = varData_1037;
                  }
                },
                _doProcessBlock: function(param_1_3, param_2_1) {
                  this._mode.processBlock(param_1_3, param_2_1);
                },
                _doFinalize: function() {
                  var varData_1038 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    varData_1038.pad(this._data, this.blockSize);
                    var varData_1039 = this._process(true);
                  } else {
                    var varData_1039 = this._process(true);
                    varData_1038.unpad(varData_1039);
                  }
                  return varData_1039;
                },
                blockSize: 4
              });
              var varData_1040 = varData_1001.CipherParams = varData_1002.extend({
                init: function(param_1_3) {
                  this.mixIn(param_1_3);
                },
                toString: function(param_1_3) {
                  return (param_1_3 || this.formatter).stringify(this);
                }
              });
              var varData_1041 = varData_1000.format = {};
              var varData_1042 = varData_1041.OpenSSL = {
                stringify: function(param_1_3) {
                  var varData_1043 = param_1_3.ciphertext;
                  var varData_1044 = param_1_3.salt;
                  if (varData_1044) {
                    var varData_1045 = varData_1003.create([1398893684, 1701076831]).concat(varData_1044).concat(varData_1043);
                  } else {
                    var varData_1045 = varData_1043;
                  }
                  return varData_1045.toString(varData_1007);
                },
                parse: function(param_1_3) {
                  var varData_1046 = varData_1007.parse(param_1_3);
                  var varData_1047 = varData_1046.words;
                  if (varData_1047[0] == 1398893684 && varData_1047[1] == 1701076831) {
                    var varData_1048 = varData_1003.create(varData_1047.slice(2, 4));
                    varData_1047.splice(0, 4);
                    varData_1046.sigBytes -= 16;
                  }
                  var varData_1049 = {
                    ciphertext: varData_1046,
                    salt: varData_1048
                  };
                  return varData_1040.create(varData_1049);
                }
              };
              var varData_1050 = {
                format: varData_1042
              };
              var varData_1051 = varData_1001.SerializableCipher = varData_1002.extend({
                cfg: varData_1002.extend(varData_1050),
                encrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1052 = param_1_3.createEncryptor(param_3, param_4);
                  var varData_1053 = varData_1052.finalize(param_2_1);
                  var varData_1054 = varData_1052.cfg;
                  var varData_1055 = {
                    ciphertext: varData_1053,
                    key: param_3,
                    iv: varData_1054.iv,
                    algorithm: param_1_3,
                    mode: varData_1054.mode,
                    padding: varData_1054.padding,
                    blockSize: param_1_3.blockSize,
                    formatter: param_4.format
                  };
                  return varData_1040.create(varData_1055);
                },
                decrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1056 = param_1_3.createDecryptor(param_3, param_4).finalize(param_2_1.ciphertext);
                  return varData_1056;
                },
                _parse: function(param_1_3, param_2_1) {
                  if (typeof param_1_3 == "string") {
                    return param_2_1.parse(param_1_3, this);
                  } else {
                    return param_1_3;
                  }
                }
              });
              var varData_1057 = varData_1000.kdf = {};
              var varData_1058 = varData_1057.OpenSSL = {
                execute: function(param_1_3, param_2_1, param_3, param_4) {
                  if (!param_4) {
                    param_4 = varData_1003.random(8);
                  }
                  var varData_1059 = {
                    keySize: param_2_1 + param_3
                  };
                  var varData_1060 = varData_1009.create(varData_1059).compute(param_1_3, param_4);
                  var varData_1061 = varData_1003.create(varData_1060.words.slice(param_2_1), param_3 * 4);
                  varData_1060.sigBytes = param_2_1 * 4;
                  var varData_1062 = {
                    key: varData_1060,
                    iv: varData_1061,
                    salt: param_4
                  };
                  return varData_1040.create(varData_1062);
                }
              };
              var varData_1063 = {
                kdf: varData_1058
              };
              var varData_1064 = varData_1001.PasswordBasedCipher = varData_1051.extend({
                cfg: varData_1051.cfg.extend(varData_1063),
                encrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1065 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize);
                  param_4.iv = varData_1065.iv;
                  var varData_1066 = varData_1051.encrypt.call(this, param_1_3, param_2_1, varData_1065.key, param_4);
                  varData_1066.mixIn(varData_1065);
                  return varData_1066;
                },
                decrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1067 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize, param_2_1.salt);
                  param_4.iv = varData_1067.iv;
                  var varData_1068 = varData_1051.decrypt.call(this, param_1_3, param_2_1, varData_1067.key, param_4);
                  return varData_1068;
                }
              });
            })();
          }
        });
      }
    });
    var varData_1069 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CFB = (function() {
            var varData_1070 = param_1_1.lib.BlockCipherMode.extend();
            varData_1070.Encryptor = varData_1070.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1071 = this._cipher;
                var varData_1072 = varData_1071.blockSize;
                handleAction_80.call(this, param_1_2, param_2_1, varData_1072, varData_1071);
                this._prevBlock = param_1_2.slice(param_2_1, param_2_1 + varData_1072);
              }
            });
            varData_1070.Decryptor = varData_1070.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1073 = this._cipher;
                var varData_1074 = varData_1073.blockSize;
                var varData_1075 = param_1_2.slice(param_2_1, param_2_1 + varData_1074);
                handleAction_80.call(this, param_1_2, param_2_1, varData_1074, varData_1073);
                this._prevBlock = varData_1075;
              }
            });
            function handleAction_80(param_1_2, param_2_1, param_3, param_4) {
              var varData_1076 = this._iv;
              if (varData_1076) {
                var varData_1077 = varData_1076.slice(0);
                this._iv = void 0;
              } else {
                var varData_1077 = this._prevBlock;
              }
              param_4.encryptBlock(varData_1077, 0);
              for (var numericVal_912 = 0; numericVal_912 < param_3; numericVal_912++) {
                param_1_2[param_2_1 + numericVal_912] ^= varData_1077[numericVal_912];
              }
            }
            return varData_1070;
          })();
          return param_1_1.mode.CFB;
        });
      }
    });
    var varData_1078 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CTR = (function() {
            var varData_1079 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1080 = varData_1079.Encryptor = varData_1079.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1081 = this._cipher;
                var varData_1082 = varData_1081.blockSize;
                var varData_1083 = this._iv;
                var varData_1084 = this._counter;
                if (varData_1083) {
                  varData_1084 = this._counter = varData_1083.slice(0);
                  this._iv = void 0;
                }
                var varData_1085 = varData_1084.slice(0);
                varData_1081.encryptBlock(varData_1085, 0);
                varData_1084[varData_1082 - 1] = varData_1084[varData_1082 - 1] + 1 | 0;
                for (var numericVal_912 = 0; numericVal_912 < varData_1082; numericVal_912++) {
                  param_1_2[param_2_1 + numericVal_912] ^= varData_1085[numericVal_912];
                }
              }
            });
            varData_1079.Decryptor = varData_1080;
            return varData_1079;
          })();
          return param_1_1.mode.CTR;
        });
      }
    });
    var varData_1086 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CTRGladman = (function() {
            var varData_1087 = param_1_1.lib.BlockCipherMode.extend();
            function handleAction_81(param_1_2) {
              if ((param_1_2 >> 24 & 255) === 255) {
                var varData_1088 = param_1_2 >> 16 & 255;
                var varData_1089 = param_1_2 >> 8 & 255;
                var varData_1090 = param_1_2 & 255;
                if (varData_1088 === 255) {
                  varData_1088 = 0;
                  if (varData_1089 === 255) {
                    varData_1089 = 0;
                    if (varData_1090 === 255) {
                      varData_1090 = 0;
                    } else {
                      ++varData_1090;
                    }
                  } else {
                    ++varData_1089;
                  }
                } else {
                  ++varData_1088;
                }
                param_1_2 = 0;
                param_1_2 += varData_1088 << 16;
                param_1_2 += varData_1089 << 8;
                param_1_2 += varData_1090;
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
            var varData_1091 = varData_1087.Encryptor = varData_1087.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1092 = this._cipher;
                var varData_1093 = varData_1092.blockSize;
                var varData_1094 = this._iv;
                var varData_1095 = this._counter;
                if (varData_1094) {
                  varData_1095 = this._counter = varData_1094.slice(0);
                  this._iv = void 0;
                }
                handleAction_82(varData_1095);
                var varData_1096 = varData_1095.slice(0);
                varData_1092.encryptBlock(varData_1096, 0);
                for (var numericVal_912 = 0; numericVal_912 < varData_1093; numericVal_912++) {
                  param_1_2[param_2_1 + numericVal_912] ^= varData_1096[numericVal_912];
                }
              }
            });
            varData_1087.Decryptor = varData_1091;
            return varData_1087;
          })();
          return param_1_1.mode.CTRGladman;
        });
      }
    });
    var varData_1097 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.OFB = (function() {
            var varData_1098 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1099 = varData_1098.Encryptor = varData_1098.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1100 = this._cipher;
                var varData_1101 = varData_1100.blockSize;
                var varData_1102 = this._iv;
                var varData_1103 = this._keystream;
                if (varData_1102) {
                  varData_1103 = this._keystream = varData_1102.slice(0);
                  this._iv = void 0;
                }
                varData_1100.encryptBlock(varData_1103, 0);
                for (var numericVal_912 = 0; numericVal_912 < varData_1101; numericVal_912++) {
                  param_1_2[param_2_1 + numericVal_912] ^= varData_1103[numericVal_912];
                }
              }
            });
            varData_1098.Decryptor = varData_1099;
            return varData_1098;
          })();
          return param_1_1.mode.OFB;
        });
      }
    });
    var varData_1104 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.ECB = (function() {
            var varData_1105 = param_1_1.lib.BlockCipherMode.extend();
            varData_1105.Encryptor = varData_1105.extend({
              processBlock: function(param_1_2, param_2_1) {
                this._cipher.encryptBlock(param_1_2, param_2_1);
              }
            });
            varData_1105.Decryptor = varData_1105.extend({
              processBlock: function(param_1_2, param_2_1) {
                this._cipher.decryptBlock(param_1_2, param_2_1);
              }
            });
            return varData_1105;
          })();
          return param_1_1.mode.ECB;
        });
      }
    });
    var varData_1106 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.AnsiX923 = {
            pad: function(param_1_2, param_2_1) {
              var varData_1107 = param_1_2.sigBytes;
              var varData_1108 = param_2_1 * 4;
              var varData_1109 = varData_1108 - varData_1107 % varData_1108;
              var varData_1110 = varData_1107 + varData_1109 - 1;
              param_1_2.clamp();
              param_1_2.words[varData_1110 >>> 2] |= varData_1109 << 24 - varData_1110 % 4 * 8;
              param_1_2.sigBytes += varData_1109;
            },
            unpad: function(param_1_2) {
              var varData_1111 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1111;
            }
          };
          return param_1_1.pad.Ansix923;
        });
      }
    });
    var varData_1112 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.Iso10126 = {
            pad: function(param_1_2, param_2_1) {
              var varData_1113 = param_2_1 * 4;
              var varData_1114 = varData_1113 - param_1_2.sigBytes % varData_1113;
              param_1_2.concat(param_1_1.lib.WordArray.random(varData_1114 - 1)).concat(param_1_1.lib.WordArray.create([varData_1114 << 24], 1));
            },
            unpad: function(param_1_2) {
              var varData_1115 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1115;
            }
          };
          return param_1_1.pad.Iso10126;
        });
      }
    });
    var varData_1116 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
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
    var varData_1117 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.ZeroPadding = {
            pad: function(param_1_2, param_2_1) {
              var varData_1118 = param_2_1 * 4;
              param_1_2.clamp();
              param_1_2.sigBytes += varData_1118 - (param_1_2.sigBytes % varData_1118 || varData_1118);
            },
            unpad: function(param_1_2) {
              var varData_1119 = param_1_2.words;
              var varData_1120 = param_1_2.sigBytes - 1;
              while (!(varData_1119[varData_1120 >>> 2] >>> 24 - varData_1120 % 4 * 8 & 255)) {
                varData_1120--;
              }
              param_1_2.sigBytes = varData_1120 + 1;
            }
          };
          return param_1_1.pad.ZeroPadding;
        });
      }
    });
    var varData_1121 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          var varData_1122 = {
            pad: function() {
            },
            unpad: function() {
            }
          };
          param_1_1.pad.NoPadding = varData_1122;
          return param_1_1.pad.NoPadding;
        });
      }
    });
    var varData_1123 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1124 = param_1_1;
            var varData_1125 = varData_1124.lib;
            var varData_1126 = varData_1125.CipherParams;
            var varData_1127 = varData_1124.enc;
            var varData_1128 = varData_1127.Hex;
            var varData_1129 = varData_1124.format;
            var varData_1130 = varData_1129.Hex = {
              stringify: function(param_1_3) {
                return param_1_3.ciphertext.toString(varData_1128);
              },
              parse: function(param_1_3) {
                var varData_1131 = varData_1128.parse(param_1_3);
                var varData_1132 = {
                  ciphertext: varData_1131
                };
                return varData_1126.create(varData_1132);
              }
            };
          })();
          return param_1_1.format.Hex;
        });
      }
    });
    var varData_1133 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_631(), varData_652(), varData_983(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1134 = param_1_1;
            var varData_1135 = varData_1134.lib;
            var varData_1136 = varData_1135.BlockCipher;
            var varData_1137 = varData_1134.algo;
            var itemList_22 = [];
            var itemList_32 = [];
            var itemList_4 = [];
            var itemList_5 = [];
            var itemList_6 = [];
            var itemList_7 = [];
            var itemList_8 = [];
            var itemList_9 = [];
            var itemList_10 = [];
            var itemList_11 = [];
            (function() {
              var itemList_122 = [];
              for (var numericVal_912 = 0; numericVal_912 < 256; numericVal_912++) {
                if (numericVal_912 < 128) {
                  itemList_122[numericVal_912] = numericVal_912 << 1;
                } else {
                  itemList_122[numericVal_912] = numericVal_912 << 1 ^ 283;
                }
              }
              var numericVal_92 = 0;
              var numericVal_93 = 0;
              for (var numericVal_912 = 0; numericVal_912 < 256; numericVal_912++) {
                var varData_1138 = numericVal_93 ^ numericVal_93 << 1 ^ numericVal_93 << 2 ^ numericVal_93 << 3 ^ numericVal_93 << 4;
                varData_1138 = varData_1138 >>> 8 ^ varData_1138 & 255 ^ 99;
                itemList_22[numericVal_92] = varData_1138;
                itemList_32[varData_1138] = numericVal_92;
                var varData_1139 = itemList_122[numericVal_92];
                var varData_1140 = itemList_122[varData_1139];
                var varData_1141 = itemList_122[varData_1140];
                var varData_1142 = itemList_122[varData_1138] * 257 ^ varData_1138 * 16843008;
                itemList_4[numericVal_92] = varData_1142 << 24 | varData_1142 >>> 8;
                itemList_5[numericVal_92] = varData_1142 << 16 | varData_1142 >>> 16;
                itemList_6[numericVal_92] = varData_1142 << 8 | varData_1142 >>> 24;
                itemList_7[numericVal_92] = varData_1142;
                var varData_1142 = varData_1141 * 16843009 ^ varData_1140 * 65537 ^ varData_1139 * 257 ^ numericVal_92 * 16843008;
                itemList_8[varData_1138] = varData_1142 << 24 | varData_1142 >>> 8;
                itemList_9[varData_1138] = varData_1142 << 16 | varData_1142 >>> 16;
                itemList_10[varData_1138] = varData_1142 << 8 | varData_1142 >>> 24;
                itemList_11[varData_1138] = varData_1142;
                if (!numericVal_92) {
                  numericVal_92 = numericVal_93 = 1;
                } else {
                  numericVal_92 = varData_1139 ^ itemList_122[itemList_122[itemList_122[varData_1141 ^ varData_1139]]];
                  numericVal_93 ^= itemList_122[itemList_122[numericVal_93]];
                }
              }
            })();
            var itemList_12 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            var varData_1143 = varData_1137.AES = varData_1136.extend({
              _doReset: function() {
                if (this._nRounds && this._keyPriorReset === this._key) {
                  return;
                }
                var varData_1144 = this._keyPriorReset = this._key;
                var varData_1145 = varData_1144.words;
                var varData_1146 = varData_1144.sigBytes / 4;
                var varData_1147 = this._nRounds = varData_1146 + 6;
                var varData_1148 = (varData_1147 + 1) * 4;
                var varData_1149 = this._keySchedule = [];
                for (var numericVal_912 = 0; numericVal_912 < varData_1148; numericVal_912++) {
                  if (numericVal_912 < varData_1146) {
                    varData_1149[numericVal_912] = varData_1145[numericVal_912];
                  } else {
                    var varData_1150 = varData_1149[numericVal_912 - 1];
                    if (!(numericVal_912 % varData_1146)) {
                      varData_1150 = varData_1150 << 8 | varData_1150 >>> 24;
                      varData_1150 = itemList_22[varData_1150 >>> 24] << 24 | itemList_22[varData_1150 >>> 16 & 255] << 16 | itemList_22[varData_1150 >>> 8 & 255] << 8 | itemList_22[varData_1150 & 255];
                      varData_1150 ^= itemList_12[numericVal_912 / varData_1146 | 0] << 24;
                    } else if (varData_1146 > 6 && numericVal_912 % varData_1146 == 4) {
                      varData_1150 = itemList_22[varData_1150 >>> 24] << 24 | itemList_22[varData_1150 >>> 16 & 255] << 16 | itemList_22[varData_1150 >>> 8 & 255] << 8 | itemList_22[varData_1150 & 255];
                    }
                    varData_1149[numericVal_912] = varData_1149[numericVal_912 - varData_1146] ^ varData_1150;
                  }
                }
                var varData_1151 = this._invKeySchedule = [];
                for (var numericVal_92 = 0; numericVal_92 < varData_1148; numericVal_92++) {
                  var numericVal_912 = varData_1148 - numericVal_92;
                  if (numericVal_92 % 4) {
                    var varData_1150 = varData_1149[numericVal_912];
                  } else {
                    var varData_1150 = varData_1149[numericVal_912 - 4];
                  }
                  if (numericVal_92 < 4 || numericVal_912 <= 4) {
                    varData_1151[numericVal_92] = varData_1150;
                  } else {
                    varData_1151[numericVal_92] = itemList_8[itemList_22[varData_1150 >>> 24]] ^ itemList_9[itemList_22[varData_1150 >>> 16 & 255]] ^ itemList_10[itemList_22[varData_1150 >>> 8 & 255]] ^ itemList_11[itemList_22[varData_1150 & 255]];
                  }
                }
              },
              encryptBlock: function(param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._keySchedule, itemList_4, itemList_5, itemList_6, itemList_7, itemList_22);
              },
              decryptBlock: function(param_1_2, param_2_1) {
                var varData_1152 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1152;
                this._doCryptBlock(param_1_2, param_2_1, this._invKeySchedule, itemList_8, itemList_9, itemList_10, itemList_11, itemList_32);
                var varData_1152 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1152;
              },
              _doCryptBlock: function(param_1_2, param_2_1, param_3, param_4, param_5, param_6, param_7, param_8) {
                var varData_1153 = this._nRounds;
                var varData_1154 = param_1_2[param_2_1] ^ param_3[0];
                var varData_1155 = param_1_2[param_2_1 + 1] ^ param_3[1];
                var varData_1156 = param_1_2[param_2_1 + 2] ^ param_3[2];
                var varData_1157 = param_1_2[param_2_1 + 3] ^ param_3[3];
                var numericVal_912 = 4;
                for (var numericVal_92 = 1; numericVal_92 < varData_1153; numericVal_92++) {
                  var varData_1158 = param_4[varData_1154 >>> 24] ^ param_5[varData_1155 >>> 16 & 255] ^ param_6[varData_1156 >>> 8 & 255] ^ param_7[varData_1157 & 255] ^ param_3[numericVal_912++];
                  var varData_1159 = param_4[varData_1155 >>> 24] ^ param_5[varData_1156 >>> 16 & 255] ^ param_6[varData_1157 >>> 8 & 255] ^ param_7[varData_1154 & 255] ^ param_3[numericVal_912++];
                  var varData_1160 = param_4[varData_1156 >>> 24] ^ param_5[varData_1157 >>> 16 & 255] ^ param_6[varData_1154 >>> 8 & 255] ^ param_7[varData_1155 & 255] ^ param_3[numericVal_912++];
                  var varData_1161 = param_4[varData_1157 >>> 24] ^ param_5[varData_1154 >>> 16 & 255] ^ param_6[varData_1155 >>> 8 & 255] ^ param_7[varData_1156 & 255] ^ param_3[numericVal_912++];
                  varData_1154 = varData_1158;
                  varData_1155 = varData_1159;
                  varData_1156 = varData_1160;
                  varData_1157 = varData_1161;
                }
                var varData_1158 = (param_8[varData_1154 >>> 24] << 24 | param_8[varData_1155 >>> 16 & 255] << 16 | param_8[varData_1156 >>> 8 & 255] << 8 | param_8[varData_1157 & 255]) ^ param_3[numericVal_912++];
                var varData_1159 = (param_8[varData_1155 >>> 24] << 24 | param_8[varData_1156 >>> 16 & 255] << 16 | param_8[varData_1157 >>> 8 & 255] << 8 | param_8[varData_1154 & 255]) ^ param_3[numericVal_912++];
                var varData_1160 = (param_8[varData_1156 >>> 24] << 24 | param_8[varData_1157 >>> 16 & 255] << 16 | param_8[varData_1154 >>> 8 & 255] << 8 | param_8[varData_1155 & 255]) ^ param_3[numericVal_912++];
                var varData_1161 = (param_8[varData_1157 >>> 24] << 24 | param_8[varData_1154 >>> 16 & 255] << 16 | param_8[varData_1155 >>> 8 & 255] << 8 | param_8[varData_1156 & 255]) ^ param_3[numericVal_912++];
                param_1_2[param_2_1] = varData_1158;
                param_1_2[param_2_1 + 1] = varData_1159;
                param_1_2[param_2_1 + 2] = varData_1160;
                param_1_2[param_2_1 + 3] = varData_1161;
              },
              keySize: 8
            });
            varData_1134.AES = varData_1136._createHelper(varData_1143);
          })();
          return param_1_1.AES;
        });
      }
    });
    var varData_1162 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_631(), varData_652(), varData_983(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1163 = param_1_1;
            var varData_1164 = varData_1163.lib;
            var varData_1165 = varData_1164.WordArray;
            var varData_1166 = varData_1164.BlockCipher;
            var varData_1167 = varData_1163.algo;
            var itemList_22 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
            var itemList_32 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
            var itemList_4 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
            var itemList_5 = [{
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
            var itemList_6 = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
            var varData_1168 = varData_1167.DES = varData_1166.extend({
              _doReset: function() {
                var varData_1169 = this._key;
                var varData_1170 = varData_1169.words;
                var itemList_7 = [];
                for (var numericVal_912 = 0; numericVal_912 < 56; numericVal_912++) {
                  var varData_1171 = itemList_22[numericVal_912] - 1;
                  itemList_7[numericVal_912] = varData_1170[varData_1171 >>> 5] >>> 31 - varData_1171 % 32 & 1;
                }
                var varData_1172 = this._subKeys = [];
                for (var numericVal_92 = 0; numericVal_92 < 16; numericVal_92++) {
                  var varData_1173 = varData_1172[numericVal_92] = [];
                  var varData_1174 = itemList_4[numericVal_92];
                  for (var numericVal_912 = 0; numericVal_912 < 24; numericVal_912++) {
                    varData_1173[numericVal_912 / 6 | 0] |= itemList_7[(itemList_32[numericVal_912] - 1 + varData_1174) % 28] << 31 - numericVal_912 % 6;
                    varData_1173[4 + (numericVal_912 / 6 | 0)] |= itemList_7[28 + (itemList_32[numericVal_912 + 24] - 1 + varData_1174) % 28] << 31 - numericVal_912 % 6;
                  }
                  varData_1173[0] = varData_1173[0] << 1 | varData_1173[0] >>> 31;
                  for (var numericVal_912 = 1; numericVal_912 < 7; numericVal_912++) {
                    varData_1173[numericVal_912] = varData_1173[numericVal_912] >>> (numericVal_912 - 1) * 4 + 3;
                  }
                  varData_1173[7] = varData_1173[7] << 5 | varData_1173[7] >>> 27;
                }
                var varData_1175 = this._invSubKeys = [];
                for (var numericVal_912 = 0; numericVal_912 < 16; numericVal_912++) {
                  varData_1175[numericVal_912] = varData_1172[15 - numericVal_912];
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
                handleAction_83.call(this, 4, 252645135);
                handleAction_83.call(this, 16, 65535);
                handleAction_84.call(this, 2, 858993459);
                handleAction_84.call(this, 8, 16711935);
                handleAction_83.call(this, 1, 1431655765);
                for (var numericVal_912 = 0; numericVal_912 < 16; numericVal_912++) {
                  var varData_1176 = param_3[numericVal_912];
                  var varData_1177 = this._lBlock;
                  var varData_1178 = this._rBlock;
                  var numericVal_92 = 0;
                  for (var numericVal_93 = 0; numericVal_93 < 8; numericVal_93++) {
                    numericVal_92 |= itemList_5[numericVal_93][((varData_1178 ^ varData_1176[numericVal_93]) & itemList_6[numericVal_93]) >>> 0];
                  }
                  this._lBlock = varData_1178;
                  this._rBlock = varData_1177 ^ numericVal_92;
                }
                var varData_1179 = this._lBlock;
                this._lBlock = this._rBlock;
                this._rBlock = varData_1179;
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
              var varData_1180 = (this._lBlock >>> param_1_2 ^ this._rBlock) & param_2_1;
              this._rBlock ^= varData_1180;
              this._lBlock ^= varData_1180 << param_1_2;
            }
            function handleAction_84(param_1_2, param_2_1) {
              var varData_1181 = (this._rBlock >>> param_1_2 ^ this._lBlock) & param_2_1;
              this._lBlock ^= varData_1181;
              this._rBlock ^= varData_1181 << param_1_2;
            }
            varData_1163.DES = varData_1166._createHelper(varData_1168);
            var varData_1182 = varData_1167.TripleDES = varData_1166.extend({
              _doReset: function() {
                var varData_1183 = this._key;
                var varData_1184 = varData_1183.words;
                this._des1 = varData_1168.createEncryptor(varData_1165.create(varData_1184.slice(0, 2)));
                this._des2 = varData_1168.createEncryptor(varData_1165.create(varData_1184.slice(2, 4)));
                this._des3 = varData_1168.createEncryptor(varData_1165.create(varData_1184.slice(4, 6)));
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
            varData_1163.TripleDES = varData_1166._createHelper(varData_1182);
          })();
          return param_1_1.TripleDES;
        });
      }
    });
    var varData_1185 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_631(), varData_652(), varData_983(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1186 = param_1_1;
            var varData_1187 = varData_1186.lib;
            var varData_1188 = varData_1187.StreamCipher;
            var varData_1189 = varData_1186.algo;
            var varData_1190 = varData_1189.RC4 = varData_1188.extend({
              _doReset: function() {
                var varData_1191 = this._key;
                var varData_1192 = varData_1191.words;
                var varData_1193 = varData_1191.sigBytes;
                var varData_1194 = this._S = [];
                for (var numericVal_912 = 0; numericVal_912 < 256; numericVal_912++) {
                  varData_1194[numericVal_912] = numericVal_912;
                }
                for (var numericVal_912 = 0, numericVal_92 = 0; numericVal_912 < 256; numericVal_912++) {
                  var varData_1195 = numericVal_912 % varData_1193;
                  var varData_1196 = varData_1192[varData_1195 >>> 2] >>> 24 - varData_1195 % 4 * 8 & 255;
                  numericVal_92 = (numericVal_92 + varData_1194[numericVal_912] + varData_1196) % 256;
                  var varData_1197 = varData_1194[numericVal_912];
                  varData_1194[numericVal_912] = varData_1194[numericVal_92];
                  varData_1194[numericVal_92] = varData_1197;
                }
                this._i = this._j = 0;
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                param_1_2[param_2_1] ^= handleAction_85.call(this);
              },
              keySize: 8,
              ivSize: 0
            });
            function handleAction_85() {
              var varData_1198 = this._S;
              var varData_1199 = this._i;
              var varData_1200 = this._j;
              var numericVal_912 = 0;
              for (var numericVal_92 = 0; numericVal_92 < 4; numericVal_92++) {
                varData_1199 = (varData_1199 + 1) % 256;
                varData_1200 = (varData_1200 + varData_1198[varData_1199]) % 256;
                var varData_1201 = varData_1198[varData_1199];
                varData_1198[varData_1199] = varData_1198[varData_1200];
                varData_1198[varData_1200] = varData_1201;
                numericVal_912 |= varData_1198[(varData_1198[varData_1199] + varData_1198[varData_1200]) % 256] << 24 - numericVal_92 * 8;
              }
              this._i = varData_1199;
              this._j = varData_1200;
              return numericVal_912;
            }
            varData_1186.RC4 = varData_1188._createHelper(varData_1190);
            var varData_1202 = varData_1189.RC4Drop = varData_1190.extend({
              cfg: varData_1190.cfg.extend({
                drop: 192
              }),
              _doReset: function() {
                varData_1190._doReset.call(this);
                for (var loopIdx = this.cfg.drop; loopIdx > 0; loopIdx--) {
                  handleAction_85.call(this);
                }
              }
            });
            varData_1186.RC4Drop = varData_1188._createHelper(varData_1202);
          })();
          return param_1_1.RC4;
        });
      }
    });
    var varData_1203 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_631(), varData_652(), varData_983(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1204 = param_1_1;
            var varData_1205 = varData_1204.lib;
            var varData_1206 = varData_1205.StreamCipher;
            var varData_1207 = varData_1204.algo;
            var itemList_22 = [];
            var itemList_32 = [];
            var itemList_4 = [];
            var varData_1208 = varData_1207.Rabbit = varData_1206.extend({
              _doReset: function() {
                var varData_1209 = this._key.words;
                var varData_1210 = this.cfg.iv;
                for (var numericVal_912 = 0; numericVal_912 < 4; numericVal_912++) {
                  varData_1209[numericVal_912] = (varData_1209[numericVal_912] << 8 | varData_1209[numericVal_912] >>> 24) & 16711935 | (varData_1209[numericVal_912] << 24 | varData_1209[numericVal_912] >>> 8) & -16711936;
                }
                var varData_1211 = this._X = [varData_1209[0], varData_1209[3] << 16 | varData_1209[2] >>> 16, varData_1209[1], varData_1209[0] << 16 | varData_1209[3] >>> 16, varData_1209[2], varData_1209[1] << 16 | varData_1209[0] >>> 16, varData_1209[3], varData_1209[2] << 16 | varData_1209[1] >>> 16];
                var varData_1212 = this._C = [varData_1209[2] << 16 | varData_1209[2] >>> 16, varData_1209[0] & -65536 | varData_1209[1] & 65535, varData_1209[3] << 16 | varData_1209[3] >>> 16, varData_1209[1] & -65536 | varData_1209[2] & 65535, varData_1209[0] << 16 | varData_1209[0] >>> 16, varData_1209[2] & -65536 | varData_1209[3] & 65535, varData_1209[1] << 16 | varData_1209[1] >>> 16, varData_1209[3] & -65536 | varData_1209[0] & 65535];
                this._b = 0;
                for (var numericVal_912 = 0; numericVal_912 < 4; numericVal_912++) {
                  handleAction_86.call(this);
                }
                for (var numericVal_912 = 0; numericVal_912 < 8; numericVal_912++) {
                  varData_1212[numericVal_912] ^= varData_1211[numericVal_912 + 4 & 7];
                }
                if (varData_1210) {
                  var varData_1213 = varData_1210.words;
                  var varData_1214 = varData_1213[0];
                  var varData_1215 = varData_1213[1];
                  var varData_1216 = (varData_1214 << 8 | varData_1214 >>> 24) & 16711935 | (varData_1214 << 24 | varData_1214 >>> 8) & -16711936;
                  var varData_1217 = (varData_1215 << 8 | varData_1215 >>> 24) & 16711935 | (varData_1215 << 24 | varData_1215 >>> 8) & -16711936;
                  var varData_1218 = varData_1216 >>> 16 | varData_1217 & -65536;
                  var varData_1219 = varData_1217 << 16 | varData_1216 & 65535;
                  varData_1212[0] ^= varData_1216;
                  varData_1212[1] ^= varData_1218;
                  varData_1212[2] ^= varData_1217;
                  varData_1212[3] ^= varData_1219;
                  varData_1212[4] ^= varData_1216;
                  varData_1212[5] ^= varData_1218;
                  varData_1212[6] ^= varData_1217;
                  varData_1212[7] ^= varData_1219;
                  for (var numericVal_912 = 0; numericVal_912 < 4; numericVal_912++) {
                    handleAction_86.call(this);
                  }
                }
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_1220 = this._X;
                handleAction_86.call(this);
                itemList_22[0] = varData_1220[0] ^ varData_1220[5] >>> 16 ^ varData_1220[3] << 16;
                itemList_22[1] = varData_1220[2] ^ varData_1220[7] >>> 16 ^ varData_1220[5] << 16;
                itemList_22[2] = varData_1220[4] ^ varData_1220[1] >>> 16 ^ varData_1220[7] << 16;
                itemList_22[3] = varData_1220[6] ^ varData_1220[3] >>> 16 ^ varData_1220[1] << 16;
                for (var numericVal_912 = 0; numericVal_912 < 4; numericVal_912++) {
                  itemList_22[numericVal_912] = (itemList_22[numericVal_912] << 8 | itemList_22[numericVal_912] >>> 24) & 16711935 | (itemList_22[numericVal_912] << 24 | itemList_22[numericVal_912] >>> 8) & -16711936;
                  param_1_2[param_2_1 + numericVal_912] ^= itemList_22[numericVal_912];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_86() {
              var varData_1221 = this._X;
              var varData_1222 = this._C;
              for (var numericVal_912 = 0; numericVal_912 < 8; numericVal_912++) {
                itemList_32[numericVal_912] = varData_1222[numericVal_912];
              }
              varData_1222[0] = varData_1222[0] + 1295307597 + this._b | 0;
              varData_1222[1] = varData_1222[1] + 3545052371 + (varData_1222[0] >>> 0 < itemList_32[0] >>> 0 ? 1 : 0) | 0;
              varData_1222[2] = varData_1222[2] + 886263092 + (varData_1222[1] >>> 0 < itemList_32[1] >>> 0 ? 1 : 0) | 0;
              varData_1222[3] = varData_1222[3] + 1295307597 + (varData_1222[2] >>> 0 < itemList_32[2] >>> 0 ? 1 : 0) | 0;
              varData_1222[4] = varData_1222[4] + 3545052371 + (varData_1222[3] >>> 0 < itemList_32[3] >>> 0 ? 1 : 0) | 0;
              varData_1222[5] = varData_1222[5] + 886263092 + (varData_1222[4] >>> 0 < itemList_32[4] >>> 0 ? 1 : 0) | 0;
              varData_1222[6] = varData_1222[6] + 1295307597 + (varData_1222[5] >>> 0 < itemList_32[5] >>> 0 ? 1 : 0) | 0;
              varData_1222[7] = varData_1222[7] + 3545052371 + (varData_1222[6] >>> 0 < itemList_32[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1222[7] >>> 0 < itemList_32[7] >>> 0 ? 1 : 0;
              for (var numericVal_912 = 0; numericVal_912 < 8; numericVal_912++) {
                var varData_1223 = varData_1221[numericVal_912] + varData_1222[numericVal_912];
                var varData_1224 = varData_1223 & 65535;
                var varData_1225 = varData_1223 >>> 16;
                var varData_1226 = ((varData_1224 * varData_1224 >>> 17) + varData_1224 * varData_1225 >>> 15) + varData_1225 * varData_1225;
                var varData_1227 = ((varData_1223 & -65536) * varData_1223 | 0) + ((varData_1223 & 65535) * varData_1223 | 0);
                itemList_4[numericVal_912] = varData_1226 ^ varData_1227;
              }
              varData_1221[0] = itemList_4[0] + (itemList_4[7] << 16 | itemList_4[7] >>> 16) + (itemList_4[6] << 16 | itemList_4[6] >>> 16) | 0;
              varData_1221[1] = itemList_4[1] + (itemList_4[0] << 8 | itemList_4[0] >>> 24) + itemList_4[7] | 0;
              varData_1221[2] = itemList_4[2] + (itemList_4[1] << 16 | itemList_4[1] >>> 16) + (itemList_4[0] << 16 | itemList_4[0] >>> 16) | 0;
              varData_1221[3] = itemList_4[3] + (itemList_4[2] << 8 | itemList_4[2] >>> 24) + itemList_4[1] | 0;
              varData_1221[4] = itemList_4[4] + (itemList_4[3] << 16 | itemList_4[3] >>> 16) + (itemList_4[2] << 16 | itemList_4[2] >>> 16) | 0;
              varData_1221[5] = itemList_4[5] + (itemList_4[4] << 8 | itemList_4[4] >>> 24) + itemList_4[3] | 0;
              varData_1221[6] = itemList_4[6] + (itemList_4[5] << 16 | itemList_4[5] >>> 16) + (itemList_4[4] << 16 | itemList_4[4] >>> 16) | 0;
              varData_1221[7] = itemList_4[7] + (itemList_4[6] << 8 | itemList_4[6] >>> 24) + itemList_4[5] | 0;
            }
            varData_1204.Rabbit = varData_1206._createHelper(varData_1208);
          })();
          return param_1_1.Rabbit;
        });
      }
    });
    var varData_1228 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_631(), varData_652(), varData_983(), varData_999());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1229 = param_1_1;
            var varData_1230 = varData_1229.lib;
            var varData_1231 = varData_1230.StreamCipher;
            var varData_1232 = varData_1229.algo;
            var itemList_22 = [];
            var itemList_32 = [];
            var itemList_4 = [];
            var varData_1233 = varData_1232.RabbitLegacy = varData_1231.extend({
              _doReset: function() {
                var varData_1234 = this._key.words;
                var varData_1235 = this.cfg.iv;
                var varData_1236 = this._X = [varData_1234[0], varData_1234[3] << 16 | varData_1234[2] >>> 16, varData_1234[1], varData_1234[0] << 16 | varData_1234[3] >>> 16, varData_1234[2], varData_1234[1] << 16 | varData_1234[0] >>> 16, varData_1234[3], varData_1234[2] << 16 | varData_1234[1] >>> 16];
                var varData_1237 = this._C = [varData_1234[2] << 16 | varData_1234[2] >>> 16, varData_1234[0] & -65536 | varData_1234[1] & 65535, varData_1234[3] << 16 | varData_1234[3] >>> 16, varData_1234[1] & -65536 | varData_1234[2] & 65535, varData_1234[0] << 16 | varData_1234[0] >>> 16, varData_1234[2] & -65536 | varData_1234[3] & 65535, varData_1234[1] << 16 | varData_1234[1] >>> 16, varData_1234[3] & -65536 | varData_1234[0] & 65535];
                this._b = 0;
                for (var numericVal_912 = 0; numericVal_912 < 4; numericVal_912++) {
                  handleAction_87.call(this);
                }
                for (var numericVal_912 = 0; numericVal_912 < 8; numericVal_912++) {
                  varData_1237[numericVal_912] ^= varData_1236[numericVal_912 + 4 & 7];
                }
                if (varData_1235) {
                  var varData_1238 = varData_1235.words;
                  var varData_1239 = varData_1238[0];
                  var varData_1240 = varData_1238[1];
                  var varData_1241 = (varData_1239 << 8 | varData_1239 >>> 24) & 16711935 | (varData_1239 << 24 | varData_1239 >>> 8) & -16711936;
                  var varData_1242 = (varData_1240 << 8 | varData_1240 >>> 24) & 16711935 | (varData_1240 << 24 | varData_1240 >>> 8) & -16711936;
                  var varData_1243 = varData_1241 >>> 16 | varData_1242 & -65536;
                  var varData_1244 = varData_1242 << 16 | varData_1241 & 65535;
                  varData_1237[0] ^= varData_1241;
                  varData_1237[1] ^= varData_1243;
                  varData_1237[2] ^= varData_1242;
                  varData_1237[3] ^= varData_1244;
                  varData_1237[4] ^= varData_1241;
                  varData_1237[5] ^= varData_1243;
                  varData_1237[6] ^= varData_1242;
                  varData_1237[7] ^= varData_1244;
                  for (var numericVal_912 = 0; numericVal_912 < 4; numericVal_912++) {
                    handleAction_87.call(this);
                  }
                }
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_1245 = this._X;
                handleAction_87.call(this);
                itemList_22[0] = varData_1245[0] ^ varData_1245[5] >>> 16 ^ varData_1245[3] << 16;
                itemList_22[1] = varData_1245[2] ^ varData_1245[7] >>> 16 ^ varData_1245[5] << 16;
                itemList_22[2] = varData_1245[4] ^ varData_1245[1] >>> 16 ^ varData_1245[7] << 16;
                itemList_22[3] = varData_1245[6] ^ varData_1245[3] >>> 16 ^ varData_1245[1] << 16;
                for (var numericVal_912 = 0; numericVal_912 < 4; numericVal_912++) {
                  itemList_22[numericVal_912] = (itemList_22[numericVal_912] << 8 | itemList_22[numericVal_912] >>> 24) & 16711935 | (itemList_22[numericVal_912] << 24 | itemList_22[numericVal_912] >>> 8) & -16711936;
                  param_1_2[param_2_1 + numericVal_912] ^= itemList_22[numericVal_912];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_87() {
              var varData_1246 = this._X;
              var varData_1247 = this._C;
              for (var numericVal_912 = 0; numericVal_912 < 8; numericVal_912++) {
                itemList_32[numericVal_912] = varData_1247[numericVal_912];
              }
              varData_1247[0] = varData_1247[0] + 1295307597 + this._b | 0;
              varData_1247[1] = varData_1247[1] + 3545052371 + (varData_1247[0] >>> 0 < itemList_32[0] >>> 0 ? 1 : 0) | 0;
              varData_1247[2] = varData_1247[2] + 886263092 + (varData_1247[1] >>> 0 < itemList_32[1] >>> 0 ? 1 : 0) | 0;
              varData_1247[3] = varData_1247[3] + 1295307597 + (varData_1247[2] >>> 0 < itemList_32[2] >>> 0 ? 1 : 0) | 0;
              varData_1247[4] = varData_1247[4] + 3545052371 + (varData_1247[3] >>> 0 < itemList_32[3] >>> 0 ? 1 : 0) | 0;
              varData_1247[5] = varData_1247[5] + 886263092 + (varData_1247[4] >>> 0 < itemList_32[4] >>> 0 ? 1 : 0) | 0;
              varData_1247[6] = varData_1247[6] + 1295307597 + (varData_1247[5] >>> 0 < itemList_32[5] >>> 0 ? 1 : 0) | 0;
              varData_1247[7] = varData_1247[7] + 3545052371 + (varData_1247[6] >>> 0 < itemList_32[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1247[7] >>> 0 < itemList_32[7] >>> 0 ? 1 : 0;
              for (var numericVal_912 = 0; numericVal_912 < 8; numericVal_912++) {
                var varData_1248 = varData_1246[numericVal_912] + varData_1247[numericVal_912];
                var varData_1249 = varData_1248 & 65535;
                var varData_1250 = varData_1248 >>> 16;
                var varData_1251 = ((varData_1249 * varData_1249 >>> 17) + varData_1249 * varData_1250 >>> 15) + varData_1250 * varData_1250;
                var varData_1252 = ((varData_1248 & -65536) * varData_1248 | 0) + ((varData_1248 & 65535) * varData_1248 | 0);
                itemList_4[numericVal_912] = varData_1251 ^ varData_1252;
              }
              varData_1246[0] = itemList_4[0] + (itemList_4[7] << 16 | itemList_4[7] >>> 16) + (itemList_4[6] << 16 | itemList_4[6] >>> 16) | 0;
              varData_1246[1] = itemList_4[1] + (itemList_4[0] << 8 | itemList_4[0] >>> 24) + itemList_4[7] | 0;
              varData_1246[2] = itemList_4[2] + (itemList_4[1] << 16 | itemList_4[1] >>> 16) + (itemList_4[0] << 16 | itemList_4[0] >>> 16) | 0;
              varData_1246[3] = itemList_4[3] + (itemList_4[2] << 8 | itemList_4[2] >>> 24) + itemList_4[1] | 0;
              varData_1246[4] = itemList_4[4] + (itemList_4[3] << 16 | itemList_4[3] >>> 16) + (itemList_4[2] << 16 | itemList_4[2] >>> 16) | 0;
              varData_1246[5] = itemList_4[5] + (itemList_4[4] << 8 | itemList_4[4] >>> 24) + itemList_4[3] | 0;
              varData_1246[6] = itemList_4[6] + (itemList_4[5] << 16 | itemList_4[5] >>> 16) + (itemList_4[4] << 16 | itemList_4[4] >>> 16) | 0;
              varData_1246[7] = itemList_4[7] + (itemList_4[6] << 8 | itemList_4[6] >>> 24) + itemList_4[5] | 0;
            }
            varData_1229.RabbitLegacy = varData_1231._createHelper(varData_1233);
          })();
          return param_1_1.RabbitLegacy;
        });
      }
    });
    var varData_1253 = varData_536({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_548(), varData_595(), varData_610(), varData_617(), varData_631(), varData_652(), varData_696(), varData_716(), varData_748(), varData_756(), varData_846(), varData_855(), varData_901(), varData_942(), varData_960(), varData_983(), varData_999(), varData_1069(), varData_1078(), varData_1086(), varData_1097(), varData_1104(), varData_1106(), varData_1112(), varData_1116(), varData_1117(), varData_1121(), varData_1123(), varData_1133(), varData_1162(), varData_1185(), varData_1203(), varData_1228());
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
    var varData_1254 = {
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
    var varData_1255 = {};
    var varData_1256 = {
      MathUtils: () => varData_1401
    };
    varData_537(varData_1255, varData_1256);
    var varData_1257;
    var varData_1258;
    var varData_1259 = class _0x2bb571 {
      constructor(param_1, param_2, param_3) {
        varData_544(this, varData_1257);
        const varData_1260 = varData_547(this, varData_1257, varData_1258).call(this, param_1, param_2, param_3);
        this.x = varData_1260.x;
        this.y = varData_1260.y;
        this.z = varData_1260.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_1261 = varData_547(this, varData_1257, varData_1258).call(this, param_1, param_2, param_3);
        return this.x === varData_1261.x && this.y === varData_1261.y && this.z === varData_1261.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_1262 = varData_547(this, varData_1257, varData_1258).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_1262.x * param_4 : varData_1262.x;
        this.y += param_4 ? varData_1262.y * param_4 : varData_1262.y;
        this.z += param_4 ? varData_1262.z * param_4 : varData_1262.z;
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
        const varData_1263 = varData_547(this, varData_1257, varData_1258).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_1263.x * param_4 : varData_1263.x;
        this.y -= param_4 ? varData_1263.y * param_4 : varData_1263.y;
        this.z -= param_4 ? varData_1263.z * param_4 : varData_1263.z;
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
        const varData_1264 = varData_547(this, varData_1257, varData_1258).call(this, param_1, param_2, param_3);
        this.x *= varData_1264.x;
        this.y *= varData_1264.y;
        this.z *= varData_1264.z;
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
        const varData_1265 = varData_547(this, varData_1257, varData_1258).call(this, param_1, param_2, param_3);
        this.x /= varData_1265.x;
        this.y /= varData_1265.y;
        this.z /= varData_1265.z;
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
        const varData_1266 = varData_547(this, varData_1257, varData_1258).call(this, param_1, param_2, param_3);
        return new _0x2bb571((this.x + varData_1266.x) / 2, (this.y + varData_1266.y) / 2, (this.z + varData_1266.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x27d080, _0x3c08ba, _0x470880] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x27d080 !== "number" || typeof _0x3c08ba !== "number" || typeof _0x470880 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x23dbb6, _0x19c8ae, _0x46c149] = [this.x - _0x27d080, this.y - _0x3c08ba, this.z - _0x470880];
        return Math.sqrt(_0x23dbb6 * _0x23dbb6 + _0x19c8ae * _0x19c8ae + _0x46c149 * _0x46c149);
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
        var varData_1267 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_1267;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1257 = /* @__PURE__ */ new WeakSet();
    varData_1258 = function(param_1, param_2, param_3) {
      let varData_1268 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_1259) {
        varData_1268 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1269 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_1268 = varData_1269;
      } else if (typeof param_1 === "object") {
        varData_1268 = param_1;
      } else {
        var varData_1270 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_1268 = varData_1270;
      }
      if (typeof varData_1268.x !== "number" || typeof varData_1268.y !== "number" || typeof varData_1268.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1268;
    };
    var varData_1271 = varData_1259;
    var varData_1272;
    var varData_1273;
    var varData_1274 = class {
      constructor(param_1) {
        varData_544(this, varData_1272, void 0);
        varData_544(this, varData_1273, void 0);
        varData_545(this, varData_1273, param_1 ?? 5);
        varData_545(this, varData_1272, /* @__PURE__ */ new Map());
      }
      setTTL(param_1) {
        varData_545(this, varData_1273, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_543(this, varData_1272).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_543(this, varData_1273)) * 1e3
        });
        return this;
      }
      get(param_1, _0x44e00e = false) {
        const varData_1275 = varData_543(this, varData_1272).get(param_1);
        const varData_1276 = varData_1275 ? _0x44e00e ? true : varData_1275.expiration > Date.now() : false;
        if (!varData_1275 || !varData_1276) {
          if (varData_1275) {
            varData_543(this, varData_1272).delete(param_1);
          }
          return;
        }
        return varData_1275.value;
      }
      has(param_1, _0x48713c = false) {
        const varData_1277 = varData_543(this, varData_1272).get(param_1);
        const varData_1278 = varData_1277 ? _0x48713c ? true : varData_1277.expiration > Date.now() : false;
        if (varData_1277 && !varData_1278) {
          varData_543(this, varData_1272).delete(param_1);
        }
        return varData_1278;
      }
      delete(param_1) {
        return varData_543(this, varData_1272).delete(param_1);
      }
      clear() {
        varData_543(this, varData_1272).clear();
      }
      values(_0x47aeae = false) {
        const itemList_22 = [];
        const timestamp = Date.now();
        for (const varData_1279 of varData_543(this, varData_1272).values()) {
          if (_0x47aeae || varData_1279.expiration > timestamp) {
            itemList_22.push(varData_1279.value);
          }
        }
        return itemList_22;
      }
      keys(_0x5414e7 = false) {
        const itemList_22 = [];
        const timestamp = Date.now();
        for (const [_0x4691cd, _0x5eaffb] of varData_543(this, varData_1272).entries()) {
          if (_0x5414e7 || _0x5eaffb.expiration > timestamp) {
            itemList_22.push(_0x4691cd);
          }
        }
        return itemList_22;
      }
      entries(_0x3085d2 = false) {
        const itemList_22 = [];
        const timestamp = Date.now();
        for (const [_0x21c53a, _0x4045e2] of varData_543(this, varData_1272).entries()) {
          if (_0x3085d2 || _0x4045e2.expiration > timestamp) {
            itemList_22.push([_0x21c53a, _0x4045e2.value]);
          }
        }
        return itemList_22;
      }
    };
    varData_1272 = /* @__PURE__ */ new WeakMap();
    varData_1273 = /* @__PURE__ */ new WeakMap();
    var varData_1280;
    var varData_1281;
    var varData_1282;
    var varData_1283;
    var varData_1284;
    var varData_1285;
    var varData_1286;
    var varData_1287;
    var varData_1288;
    var varData_1289;
    var varData_1290;
    var varData_1291;
    var varData_1292;
    var varData_1293;
    var varData_1294;
    var varData_1295;
    var varData_1296;
    var varData_1297;
    var varData_1298;
    var varData_1299;
    var varData_1300;
    var varData_1301;
    var varData_1302 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x4b6598 = 30, _0x47f67a = false) {
        varData_544(this, varData_1292);
        varData_544(this, varData_1294);
        varData_544(this, varData_1296);
        varData_544(this, varData_1298);
        varData_544(this, varData_1300);
        varData_544(this, varData_1280, void 0);
        varData_544(this, varData_1281, void 0);
        varData_544(this, varData_1282, void 0);
        varData_544(this, varData_1283, void 0);
        varData_544(this, varData_1284, void 0);
        varData_544(this, varData_1285, void 0);
        varData_544(this, varData_1286, void 0);
        varData_544(this, varData_1287, void 0);
        varData_544(this, varData_1288, void 0);
        varData_544(this, varData_1289, void 0);
        varData_544(this, varData_1290, void 0);
        varData_544(this, varData_1291, void 0);
        varData_545(this, varData_1280, param_1);
        varData_545(this, varData_1281, param_4);
        varData_545(this, varData_1282, param_5);
        varData_545(this, varData_1283, param_2);
        varData_545(this, varData_1284, param_3);
        varData_545(this, varData_1285, _0x47f67a);
        varData_545(this, varData_1286, _0x4b6598);
        varData_545(this, varData_1288, varData_543(this, varData_1281).x / _0x4b6598);
        varData_545(this, varData_1289, varData_543(this, varData_1281).y / _0x4b6598);
        varData_545(this, varData_1287, varData_543(this, varData_1288) * varData_543(this, varData_1289));
        varData_545(this, varData_1290, varData_547(this, varData_1292, varData_1293).call(this, varData_543(this, varData_1280), varData_543(this, varData_1286), varData_543(this, varData_1288), varData_543(this, varData_1289), varData_543(this, varData_1285)));
        varData_545(this, varData_1291, varData_547(this, varData_1294, varData_1295).call(this, varData_543(this, varData_1290), varData_543(this, varData_1287)));
      }
      get cells() {
        return varData_543(this, varData_1290);
      }
      get cellSize() {
        return varData_543(this, varData_1286);
      }
      get cellWidth() {
        return varData_543(this, varData_1288);
      }
      get cellHeight() {
        return varData_543(this, varData_1289);
      }
      get gridArea() {
        return varData_543(this, varData_1291);
      }
      get gridCoverage() {
        return varData_543(this, varData_1291) / varData_543(this, varData_1282) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_1303;
        const varData_1304 = param_1.x - varData_543(this, varData_1283).x;
        const varData_1305 = param_1.y - varData_543(this, varData_1283).y;
        const roundedVal = Math.floor(varData_1304 * varData_543(this, varData_1286) / varData_543(this, varData_1281).x);
        const roundedVal_1 = Math.floor(varData_1305 * varData_543(this, varData_1286) / varData_543(this, varData_1281).y);
        let varData_1306 = (varData_1303 = varData_543(this, varData_1290)[roundedVal]) == null ? void 0 : varData_1303[roundedVal_1];
        if (!varData_1306 && varData_543(this, varData_1285)) {
          varData_1306 = varData_547(this, varData_1298, varData_1299).call(this, roundedVal, roundedVal_1, varData_543(this, varData_1288), varData_543(this, varData_1289), varData_543(this, varData_1280));
          varData_543(this, varData_1290)[roundedVal][roundedVal_1] = varData_1306;
          if (!varData_1306) {
            return false;
          }
          varData_545(this, varData_1291, varData_543(this, varData_1291) + varData_543(this, varData_1287));
        }
        return varData_1306 ?? false;
      }
    };
    varData_1280 = /* @__PURE__ */ new WeakMap();
    varData_1281 = /* @__PURE__ */ new WeakMap();
    varData_1282 = /* @__PURE__ */ new WeakMap();
    varData_1283 = /* @__PURE__ */ new WeakMap();
    varData_1284 = /* @__PURE__ */ new WeakMap();
    varData_1285 = /* @__PURE__ */ new WeakMap();
    varData_1286 = /* @__PURE__ */ new WeakMap();
    varData_1287 = /* @__PURE__ */ new WeakMap();
    varData_1288 = /* @__PURE__ */ new WeakMap();
    varData_1289 = /* @__PURE__ */ new WeakMap();
    varData_1290 = /* @__PURE__ */ new WeakMap();
    varData_1291 = /* @__PURE__ */ new WeakMap();
    varData_1292 = /* @__PURE__ */ new WeakSet();
    varData_1293 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_1307 = {};
      for (let numericVal_912 = 0; numericVal_912 < param_2; numericVal_912++) {
        varData_1307[numericVal_912] = {};
        if (param_5) {
          continue;
        }
        for (let numericVal_92 = 0; numericVal_92 < param_2; numericVal_92++) {
          const varData_1308 = varData_547(this, varData_1298, varData_1299).call(this, numericVal_912, numericVal_92, param_3, param_4, param_1);
          if (!varData_1308) {
            continue;
          }
          varData_1307[numericVal_912][numericVal_92] = true;
        }
      }
      return varData_1307;
    };
    varData_1294 = /* @__PURE__ */ new WeakSet();
    varData_1295 = function(param_1, param_2) {
      let numericVal_912 = 0;
      for (const varData_1309 in param_1) {
        for (const varData_1310 in param_1[varData_1309]) {
          numericVal_912 += param_2;
        }
      }
      return numericVal_912;
    };
    varData_1296 = /* @__PURE__ */ new WeakSet();
    varData_1297 = function(param_1, param_2, param_3, param_4) {
      const itemList_22 = [];
      const varData_1311 = param_1 * param_3 + varData_543(this, varData_1283).x;
      const varData_1312 = param_2 * param_4 + varData_543(this, varData_1283).y;
      itemList_22.push(new varData_1389(varData_1311, varData_1312));
      itemList_22.push(new varData_1389(varData_1311 + param_3, varData_1312));
      itemList_22.push(new varData_1389(varData_1311 + param_3, varData_1312 + param_4));
      itemList_22.push(new varData_1389(varData_1311, varData_1312 + param_4));
      return itemList_22;
    };
    varData_1298 = /* @__PURE__ */ new WeakSet();
    varData_1299 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_1313 = varData_547(this, varData_1296, varData_1297).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_1 = false;
      for (const varData_1314 of varData_1313) {
        const varData_1315 = varData_1418.MathUtils.windingNumber(varData_1314, param_5);
        if (varData_1315 !== 0) {
          isDisabled_1 = true;
          break;
        }
      }
      if (!isDisabled_1) {
        return false;
      }
      for (let numericVal_912 = 0; numericVal_912 < varData_1313.length; numericVal_912++) {
        const varData_1316 = varData_1313[numericVal_912];
        const varData_1317 = varData_1313[(numericVal_912 + 1) % varData_1313.length];
        for (let numericVal_92 = 0; numericVal_92 < param_5.length; numericVal_92++) {
          const varData_1318 = param_5[numericVal_92];
          const varData_1319 = param_5[(numericVal_92 + 1) % param_5.length];
          if (varData_547(this, varData_1300, varData_1301).call(this, varData_1316, varData_1317, varData_1318, varData_1319)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_1300 = /* @__PURE__ */ new WeakSet();
    varData_1301 = function(param_1, param_2, param_3, param_4) {
      const varData_1320 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_1321 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_1322 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_1320 === 0) {
        return varData_1321 === 0 && varData_1322 === 0;
      }
      const varData_1323 = varData_1321 / varData_1320;
      const varData_1324 = varData_1322 / varData_1320;
      return varData_1323 >= 0 && varData_1323 <= 1 && varData_1324 >= 0 && varData_1324 <= 1;
    };
    var varData_1325;
    var varData_1326;
    var varData_1327;
    var varData_1328;
    var varData_1329;
    var varData_1330;
    var varData_1331;
    var varData_1332;
    var varData_1333;
    var varData_1334;
    var varData_1335;
    var varData_1336;
    var varData_1337;
    var varData_1338;
    var varData_1339;
    var varData_1340;
    var varData_1341;
    var varData_1342;
    var varData_1343 = class {
      constructor(param_1, _0x42c951 = {}, _0x17d3e1 = {}) {
        varData_544(this, varData_1333);
        varData_544(this, varData_1335);
        varData_544(this, varData_1337);
        varData_544(this, varData_1339);
        varData_544(this, varData_1341);
        varData_544(this, varData_1325, void 0);
        varData_544(this, varData_1326, void 0);
        varData_544(this, varData_1327, void 0);
        varData_544(this, varData_1328, void 0);
        varData_544(this, varData_1329, void 0);
        varData_544(this, varData_1330, void 0);
        varData_544(this, varData_1331, void 0);
        varData_544(this, varData_1332, void 0);
        varData_545(this, varData_1325, varData_1418.getUUID());
        varData_545(this, varData_1326, param_1);
        varData_545(this, varData_1327, varData_547(this, varData_1333, varData_1334).call(this, param_1));
        varData_545(this, varData_1328, varData_547(this, varData_1335, varData_1336).call(this, param_1));
        varData_545(this, varData_1329, varData_547(this, varData_1341, varData_1342).call(this, param_1));
        varData_545(this, varData_1330, varData_547(this, varData_1339, varData_1340).call(this, varData_543(this, varData_1327), varData_543(this, varData_1328)));
        varData_545(this, varData_1331, varData_547(this, varData_1337, varData_1338).call(this, varData_543(this, varData_1327), varData_543(this, varData_1328)));
        this.options = _0x42c951;
        this.data = _0x17d3e1;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_545(this, varData_1332, new varData_1302(varData_543(this, varData_1326), varData_543(this, varData_1327), varData_543(this, varData_1328), varData_543(this, varData_1330), varData_543(this, varData_1329), _0x42c951.gridCellSize, _0x42c951.useLazyGrid));
      }
      get id() {
        return varData_543(this, varData_1325);
      }
      get center() {
        return varData_543(this, varData_1331);
      }
      get min() {
        return varData_543(this, varData_1327);
      }
      get max() {
        return varData_543(this, varData_1328);
      }
      get points() {
        return [...varData_543(this, varData_1326)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_543(this, varData_1327).x || param_1.x > varData_543(this, varData_1328).x) {
          return false;
        } else if (param_1.y < varData_543(this, varData_1327).y || param_1.y > varData_543(this, varData_1328).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_1271) {
          const varData_1344 = this.options.minZ ?? -Infinity;
          const varData_1345 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_1344 || param_1.z > varData_1345) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_543(this, varData_1332)) {
          return varData_543(this, varData_1332).isPointInsideGrid(param_1);
        }
        const varData_1346 = varData_1418.MathUtils.windingNumber(param_1, varData_543(this, varData_1326));
        return varData_1346 !== 0;
      }
      addPoint(param_1) {
        varData_543(this, varData_1326).push(param_1);
      }
      removePoint(param_1) {
        const varData_1347 = varData_543(this, varData_1326).findIndex((param_1_1) => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_1347 === -1) {
          return;
        }
        varData_543(this, varData_1326).splice(varData_1347, 1);
      }
      removeLastPoint() {
        varData_543(this, varData_1326).pop();
      }
      recalculate() {
        varData_545(this, varData_1327, varData_547(this, varData_1333, varData_1334).call(this, varData_543(this, varData_1326)));
        varData_545(this, varData_1328, varData_547(this, varData_1335, varData_1336).call(this, varData_543(this, varData_1326)));
        varData_545(this, varData_1329, varData_547(this, varData_1341, varData_1342).call(this, varData_543(this, varData_1326)));
        varData_545(this, varData_1330, varData_547(this, varData_1339, varData_1340).call(this, varData_543(this, varData_1327), varData_543(this, varData_1328)));
        varData_545(this, varData_1331, varData_547(this, varData_1337, varData_1338).call(this, varData_543(this, varData_1327), varData_543(this, varData_1328)));
        if (!this.options.useGrid) {
          return;
        }
        varData_545(this, varData_1332, new varData_1302(varData_543(this, varData_1326), varData_543(this, varData_1327), varData_543(this, varData_1328), varData_543(this, varData_1330), varData_543(this, varData_1329), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_1325 = /* @__PURE__ */ new WeakMap();
    varData_1326 = /* @__PURE__ */ new WeakMap();
    varData_1327 = /* @__PURE__ */ new WeakMap();
    varData_1328 = /* @__PURE__ */ new WeakMap();
    varData_1329 = /* @__PURE__ */ new WeakMap();
    varData_1330 = /* @__PURE__ */ new WeakMap();
    varData_1331 = /* @__PURE__ */ new WeakMap();
    varData_1332 = /* @__PURE__ */ new WeakMap();
    varData_1333 = /* @__PURE__ */ new WeakSet();
    varData_1334 = function(param_1) {
      let varData_1348 = Number.MAX_SAFE_INTEGER;
      let varData_1349 = Number.MAX_SAFE_INTEGER;
      for (const varData_1350 of param_1) {
        varData_1348 = Math.min(varData_1348, varData_1350.x);
        varData_1349 = Math.min(varData_1349, varData_1350.y);
      }
      return new varData_1389(varData_1348, varData_1349);
    };
    varData_1335 = /* @__PURE__ */ new WeakSet();
    varData_1336 = function(param_1) {
      let varData_1351 = Number.MIN_SAFE_INTEGER;
      let varData_1352 = Number.MIN_SAFE_INTEGER;
      for (const varData_1353 of param_1) {
        varData_1351 = Math.max(varData_1351, varData_1353.x);
        varData_1352 = Math.max(varData_1352, varData_1353.y);
      }
      return new varData_1389(varData_1351, varData_1352);
    };
    varData_1337 = /* @__PURE__ */ new WeakSet();
    varData_1338 = function(param_1, param_2) {
      const varData_1354 = param_2.add(param_1);
      return varData_1354.divideScalar(2);
    };
    varData_1339 = /* @__PURE__ */ new WeakSet();
    varData_1340 = function(param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_1341 = /* @__PURE__ */ new WeakSet();
    varData_1342 = function(param_1) {
      let numericVal_912 = 0;
      for (let numericVal_92 = 0, loopIdx = param_1.length - 1; numericVal_92 < param_1.length; loopIdx = numericVal_92++) {
        const varData_1355 = param_1[numericVal_92];
        const varData_1356 = param_1[loopIdx];
        numericVal_912 += varData_1355.x * varData_1356.y;
        numericVal_912 -= varData_1355.y * varData_1356.x;
      }
      return Math.abs(numericVal_912 / 2);
    };
    var varData_1357;
    var varData_1358;
    var varData_1359 = class _0x2ed820 {
      constructor(param_1, param_2) {
        varData_544(this, varData_1357);
        const varData_1360 = varData_547(this, varData_1357, varData_1358).call(this, param_1, param_2);
        this.x = varData_1360.x;
        this.y = varData_1360.y;
      }
      equals(param_1, param_2) {
        const varData_1361 = varData_547(this, varData_1357, varData_1358).call(this, param_1, param_2);
        return this.x === varData_1361.x && this.y === varData_1361.y;
      }
      add(param_1, param_2, param_3) {
        const varData_1362 = varData_547(this, varData_1357, varData_1358).call(this, param_1, param_2);
        const varData_1363 = this.x + (param_3 ? varData_1362.x * param_3 : varData_1362.x);
        const varData_1364 = this.y + (param_3 ? varData_1362.y * param_3 : varData_1362.y);
        return new _0x2ed820(varData_1363, varData_1364);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1365 = this.x + param_1;
        const varData_1366 = this.y + param_1;
        return new _0x2ed820(varData_1365, varData_1366);
      }
      sub(param_1, param_2, param_3) {
        const varData_1367 = varData_547(this, varData_1357, varData_1358).call(this, param_1, param_2);
        const varData_1368 = this.x - (param_3 ? varData_1367.x * param_3 : varData_1367.x);
        const varData_1369 = this.y - (param_3 ? varData_1367.y * param_3 : varData_1367.y);
        return new _0x2ed820(varData_1368, varData_1369);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1370 = this.x - param_1;
        const varData_1371 = this.y - param_1;
        return new _0x2ed820(varData_1370, varData_1371);
      }
      multiply(param_1, param_2) {
        const varData_1372 = varData_547(this, varData_1357, varData_1358).call(this, param_1, param_2);
        const varData_1373 = this.x * varData_1372.x;
        const varData_1374 = this.y * varData_1372.y;
        return new _0x2ed820(varData_1373, varData_1374);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1375 = this.x * param_1;
        const varData_1376 = this.y * param_1;
        return new _0x2ed820(varData_1375, varData_1376);
      }
      divide(param_1, param_2) {
        const varData_1377 = varData_547(this, varData_1357, varData_1358).call(this, param_1, param_2);
        const varData_1378 = this.x / varData_1377.x;
        const varData_1379 = this.y / varData_1377.y;
        return new _0x2ed820(varData_1378, varData_1379);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1380 = this.x / param_1;
        const varData_1381 = this.y / param_1;
        return new _0x2ed820(varData_1380, varData_1381);
      }
      round() {
        const roundedVal = Math.round(this.x);
        const roundedVal_1 = Math.round(this.y);
        return new _0x2ed820(roundedVal, roundedVal_1);
      }
      floor() {
        const roundedVal = Math.floor(this.x);
        const roundedVal_1 = Math.floor(this.y);
        return new _0x2ed820(roundedVal, roundedVal_1);
      }
      ceil() {
        const varData_1382 = Math.ceil(this.x);
        const varData_1383 = Math.ceil(this.y);
        return new _0x2ed820(varData_1382, varData_1383);
      }
      getCenter(param_1, param_2) {
        const varData_1384 = varData_547(this, varData_1357, varData_1358).call(this, param_1, param_2);
        return new _0x2ed820((this.x + varData_1384.x) / 2, (this.y + varData_1384.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0xcf9b4, _0x2ab847] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0xcf9b4 !== "number" || typeof _0x2ab847 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x36552f, _0x450099] = [this.x - _0xcf9b4, this.y - _0x2ab847];
        return Math.sqrt(_0x36552f * _0x36552f + _0x450099 * _0x450099);
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
        var varData_1385 = {
          x: this.x,
          y: this.y
        };
        return varData_1385;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1357 = /* @__PURE__ */ new WeakSet();
    varData_1358 = function(param_1, param_2) {
      let varData_1386 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_1359 || param_1 instanceof varData_1271) {
        varData_1386 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1387 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_1386 = varData_1387;
      } else if (typeof param_1 === "object") {
        varData_1386 = param_1;
      } else {
        var varData_1388 = {
          x: param_1,
          y: param_2
        };
        varData_1386 = varData_1388;
      }
      if (typeof varData_1386.x !== "number" || typeof varData_1386.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1386;
    };
    var varData_1389 = varData_1359;
    var varData_1390 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_1391 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_1392 = ([_0x4c64aa, _0x17e215, _0x982b40], [_0x1d9dfb, _0x43919c, _0x36aa46]) => {
      const [_0xe8ea57, _0x5371a8, _0x150913] = [_0x4c64aa - _0x1d9dfb, _0x17e215 - _0x43919c, _0x982b40 - _0x36aa46];
      return Math.sqrt(_0xe8ea57 * _0xe8ea57 + _0x5371a8 * _0x5371a8 + _0x150913 * _0x150913);
    };
    var varData_1393 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_1394 = (param_1, param_2) => {
      if (param_1 instanceof varData_1389) {
        return param_1;
      } else if (param_1 instanceof varData_1271) {
        return new varData_1389(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_1389(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1389(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1389(param_1, param_2);
    };
    var varData_1395 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_1271) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_1271(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1271(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1271(param_1, param_2, param_3);
    };
    var varData_1396 = (param_1, param_2) => {
      let numericVal_912 = 0;
      const varData_1397 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let numericVal_92 = 0; numericVal_92 < param_2.length; numericVal_92++) {
        const varData_1398 = param_2[numericVal_92];
        const varData_1399 = param_2[(numericVal_92 + 1) % param_2.length];
        if (varData_1398.y <= param_1.y) {
          if (varData_1399.y > param_1.y && varData_1397(varData_1398, varData_1399, param_1) > 0) {
            numericVal_912++;
          }
        } else if (varData_1399.y <= param_1.y && varData_1397(varData_1398, varData_1399, param_1) < 0) {
          numericVal_912--;
        }
      }
      return numericVal_912;
    };
    var varData_1400 = {
      clamp: varData_1390,
      getMapRange: varData_1391,
      getDistance: varData_1392,
      getRandomNumber: varData_1393,
      parseVector2: varData_1394,
      parseVector3: varData_1395,
      windingNumber: varData_1396
    };
    var varData_1401 = varData_1400;
    var varData_1402 = {};
    var varData_1403 = {
      ArrUtils: () => varData_1407
    };
    varData_537(varData_1402, varData_1403);
    var varData_1404 = (param_1) => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const roundedVal = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[roundedVal]] = [param_1[roundedVal], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_1405 = (param_1, param_2) => {
      const itemList_22 = [];
      for (let numericVal_912 = 0; numericVal_912 < param_2; numericVal_912++) {
        itemList_22.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return itemList_22;
    };
    var varData_1406 = {
      shuffleArray: varData_1404,
      getRandomElements: varData_1405
    };
    var varData_1407 = varData_1406;
    function handleAction_88(param_1, param_2) {
      const varData_1408 = "_";
      const varData_1409 = handleAction_89((param_1_1, param_2_1, ..._0x59f6a6) => {
        return param_1(param_1_1, ..._0x59f6a6);
      }, param_2);
      return {
        get: function(..._0x5aad8c) {
          return varData_1409.get(varData_1408, ..._0x5aad8c);
        },
        reset: function() {
          varData_1409.reset(varData_1408);
        }
      };
    }
    function handleAction_89(param_1, param_2) {
      const varData_1410 = param_2.timeToLive || 6e4;
      const varData_1411 = {};
      const varData_1412 = param_2.immediateResolve || false;
      async function handleAction_90(param_1_1, ..._0x23e8fe) {
        let varData_1413 = varData_1411[param_1_1];
        if (!varData_1413) {
          varData_1413 = {
            value: null,
            lastUpdated: 0
          };
          varData_1411[param_1_1] = varData_1413;
        }
        const timestamp = Date.now();
        if (varData_1413.lastUpdated === 0 || timestamp - varData_1413.lastUpdated > varData_1410) {
          const [_0x9e6782, _0x3d6546] = await param_1(varData_1413, param_1_1, ..._0x23e8fe);
          if (_0x9e6782) {
            varData_1413.lastUpdated = timestamp;
            varData_1413.value = _0x3d6546;
          }
          return _0x3d6546;
        }
        if (varData_1412) {
          return Promise.resolve(varData_1413.value);
        } else {
          return await new Promise((param_1_2) => setTimeout(() => param_1_2(varData_1413.value), 0));
        }
      }
      return {
        get: async function(param_1_1, ..._0x3d49ca) {
          return await handleAction_90(param_1_1, ..._0x3d49ca);
        },
        reset: function(param_1_1) {
          const varData_1414 = varData_1411[param_1_1];
          if (varData_1414) {
            varData_1414.lastUpdated = 0;
          }
        },
        clear: function() {
          for (const varData_1415 in varData_1411) {
            delete varData_1411[varData_1415];
          }
        }
      };
    }
    function handleAction_91() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_83();
      } else {
        return new varData_529(4).toString();
      }
    }
    function handleAction_92(param_1) {
      return varData_106(param_1, varData_106.URL);
    }
    function handleAction_93(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_1416 = Date.now() - timestamp > param_2;
          if (param_1() || varData_1416) {
            clearInterval(intervalId);
            return param_1_1(varData_1416);
          }
        }, 1);
      });
    }
    function handleAction_94(param_1) {
      return new Promise((param_1_1) => setTimeout(() => param_1_1(), param_1));
    }
    function handleAction_95() {
      return handleAction_94(0);
    }
    var varData_1417 = {
      cache: handleAction_88,
      cacheableMap: handleAction_89,
      waitForCondition: handleAction_93,
      getUUID: handleAction_91,
      getStringHash: handleAction_92,
      wait: handleAction_94,
      waitForNextFrame: handleAction_95,
      deflate: varData_519,
      inflate: varData_523,
      ...varData_1255,
      ...varData_1402
    };
    var varData_1418 = varData_1417;
    var varData_1419 = ((param_1) => {
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
    })(varData_1419 || {});
    var varData_1420 = {};
    var varData_1421 = (param_1, param_2) => "__cfx_export_" + param_1 + "_" + param_2;
    var varData_1422 = new Proxy((param_1, param_2) => {
      const varData_1423 = (param_1_1, ..._0x1a6644) => {
        const varData_1424 = param_2(..._0x1a6644);
        if (varData_1424 instanceof Promise) {
          varData_1424.then((param_1_2) => param_1_1(param_1_2));
        } else {
          param_1_1(varData_1424);
        }
      };
      const resourceName2 = GetCurrentResourceName();
      if (resourceName2 == void 0) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      }
      on(varData_1421(resourceName2, param_1), (param_1_1) => {
        param_1_1(varData_1423);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1420[param_2] == void 0) {
          varData_1420[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1425 = param_2_1 + "_async";
            return (..._0x29acf1) => {
              return new Promise(async (param_1_2, param_2_2) => {
                const varData_1426 = await varData_1418.waitForCondition(() => GetResourceState(param_2) === "started", 6e4);
                if (varData_1426) {
                  return param_2_2("Resource " + param_2 + " is not running");
                }
                if (varData_1420[param_2][varData_1425] === void 0) {
                  emit(varData_1421(param_2, param_2_1), (param_1_3) => {
                    varData_1420[param_2][varData_1425] = param_1_3;
                  });
                  const varData_1427 = await varData_1418.waitForCondition(() => varData_1420[param_2][varData_1425] !== void 0, 1e3);
                  if (varData_1427) {
                    return param_2_2("Failed to get export " + param_2_1 + " from resource " + param_2);
                  }
                }
                try {
                  varData_1420[param_2][varData_1425](param_1_2, ..._0x29acf1);
                } catch (err) {
                  param_2_2(err);
                }
              });
            };
          }
        });
      }
    });
    var varData_1428 = new Proxy((param_1, param_2) => {
      const resourceName2 = GetCurrentResourceName();
      if (resourceName2 == void 0) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      } else if (typeof param_2 !== "function") {
        throw new Error("Callback is not a function");
      } else if (typeof param_1 !== "string") {
        throw new Error("Export name must be a string");
      }
      on(varData_1421(resourceName2, param_1), (param_1_1) => {
        param_1_1(param_2);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1420[param_2] == void 0) {
          varData_1420[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1429 = param_2_1 + "_sync";
            if (varData_1420[param_2][varData_1429] === void 0) {
              emit(varData_1421(param_2, param_2_1), (param_1_2) => {
                varData_1420[param_2][varData_1429] = param_1_2;
              });
              if (varData_1420[param_2][varData_1429] === void 0) {
                if (GetResourceState(param_2) !== "started") {
                  throw new Error("Resource " + param_2 + " is not running");
                } else {
                  throw new Error("No such export " + param_2_1 + " in resource " + param_2);
                }
              }
            }
            return (..._0x5a0398) => {
              try {
                return varData_1420[param_2][varData_1429](..._0x5a0398);
              } catch (err) {
                throw new Error("An error occurred while calling export " + param_2_1 + " of resource " + param_2 + " - see above for details");
              }
            };
          }
        });
      }
    });
    on("onResourceStop", (param_1) => varData_1420[param_1] = void 0);
    var varData_1430 = {
      Async: varData_1422,
      Sync: varData_1428
    };
    var varData_1431 = varData_1430;
    var dataMap = /* @__PURE__ */ new Map();
    var dataSet = /* @__PURE__ */ new Set();
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
        return param_1.every((param_1_1) => dataSet.has(param_1_1));
      }
      return dataSet.has(param_1);
    }
    function handleAction_97(param_1, param_2) {
      if (!dataMap.has(param_1)) {
        const varData_1432 = varData_1431.Sync.config.GetModuleConfig(param_1);
        if (varData_1432 === void 0) {
          return;
        }
        dataMap.set(param_1, varData_1432);
        if (!dataSet.has(param_1)) {
          dataSet.add(param_1);
        }
      }
      const varData_1433 = dataMap.get(param_1);
      if (param_2) {
        if (varData_1433 == null) {
          return void 0;
        } else {
          return varData_1433[param_2];
        }
      } else {
        return varData_1433;
      }
    }
    function handleAction_98(param_1) {
      return handleAction_97(resourceName, param_1);
    }
    function handleAction_99() {
      return varData_1431.Sync.config.IsConfigReady();
    }
    var varData_1434 = {
      IsConfigLoaded: handleAction_96,
      GetModuleConfig: handleAction_97,
      GetResourceConfig: handleAction_98,
      IsConfigReady: handleAction_99
    };
    var varData_1435 = varData_1434;
    var varData_1436 = varData_541(varData_1253());
    var varData_1437;
    var varData_1438;
    var varData_1439;
    var varData_1440;
    var varData_1441;
    var varData_1442;
    var varData_1443;
    var varData_1444;
    var varData_1445;
    var varData_1446;
    var varData_1447;
    var varData_1448;
    var varData_1449;
    var varData_1450;
    var varData_1451;
    var varData_1452;
    var varData_1453;
    var varData_1454;
    var varData_1455;
    var varData_1456;
    var varData_1457 = class {
      constructor(param_1, param_2) {
        varData_544(this, varData_1441);
        varData_544(this, varData_1443);
        varData_544(this, varData_1445);
        varData_544(this, varData_1447);
        varData_544(this, varData_1449);
        varData_544(this, varData_1451);
        varData_544(this, varData_1453);
        varData_544(this, varData_1455);
        varData_544(this, varData_1437, void 0);
        varData_544(this, varData_1438, void 0);
        varData_544(this, varData_1439, void 0);
        varData_544(this, varData_1440, {});
        const varData_1458 = varData_547(this, varData_1449, varData_1450).call(this, param_1);
        const varData_1459 = varData_547(this, varData_1453, varData_1454).call(this, varData_1458, param_2);
        const [_0x517954, _0x89dfb, _0x4f367c] = varData_1459.split(":").map((param_1_1) => param_1_1.length > 0 ? param_1_1 : void 0);
        varData_545(this, varData_1437, _0x517954);
        varData_545(this, varData_1438, _0x89dfb);
        varData_545(this, varData_1439, _0x4f367c);
      }
      hashString(param_1) {
        return param_1;
        var varData_1460;
        const varData_1461 = varData_543(this, varData_1441, varData_1442);
        const varData_1462 = (varData_1460 = varData_543(this, varData_1440)[varData_1461]) == null ? void 0 : varData_1460[param_1];
        if (varData_1462) {
          return varData_1462;
        }
        if (!varData_543(this, varData_1440)[varData_1461]) {
          varData_543(this, varData_1440)[varData_1461] = {};
        }
        const varData_1463 = varData_547(this, varData_1447, varData_1448).call(this, (0, varData_1436.HmacMD5)(param_1, varData_1461).toString());
        varData_543(this, varData_1440)[varData_1461][param_1] = varData_1463;
        if (IsDuplicityVersion()) {
          console.log("[SDK] Hash Debug | Event: " + param_1 + " | Hash: " + varData_1463);
        }
        return varData_1463;
      }
      encode(param_1) {
        return JSON.stringify(param_1);
        let varData_1464;
        const varData_1465 = varData_543(this, varData_1445, varData_1446);
        try {
          varData_1464 = varData_547(this, varData_1451, varData_1452).call(this, JSON.stringify(param_1), varData_1465);
        } catch (err) {
          console.error("Failed to encode payload");
        }
        return varData_1464;
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
        let varData_1466;
        const varData_1467 = varData_543(this, varData_1443, varData_1444);
        try {
          varData_1466 = JSON.parse(varData_547(this, varData_1453, varData_1454).call(this, param_1, varData_1467));
        } catch (err) {
          console.error("Failed to decode payload");
        }
        return varData_1466;
      }
    };
    varData_1437 = /* @__PURE__ */ new WeakMap();
    varData_1438 = /* @__PURE__ */ new WeakMap();
    varData_1439 = /* @__PURE__ */ new WeakMap();
    varData_1440 = /* @__PURE__ */ new WeakMap();
    varData_1441 = /* @__PURE__ */ new WeakSet();
    varData_1442 = function() {
      return varData_543(this, varData_1437) ?? varData_547(this, varData_1455, varData_1456).call(this);
    };
    varData_1443 = /* @__PURE__ */ new WeakSet();
    varData_1444 = function() {
      return varData_543(this, varData_1438) ?? varData_547(this, varData_1455, varData_1456).call(this);
    };
    varData_1445 = /* @__PURE__ */ new WeakSet();
    varData_1446 = function() {
      return varData_543(this, varData_1439) ?? varData_547(this, varData_1455, varData_1456).call(this);
    };
    varData_1447 = /* @__PURE__ */ new WeakSet();
    varData_1448 = function(param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1436.enc.Base64.stringify(varData_1436.enc.Utf8.parse(param_1));
    };
    varData_1449 = /* @__PURE__ */ new WeakSet();
    varData_1450 = function(param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1436.enc.Utf8.stringify(varData_1436.enc.Base64.parse(param_1));
    };
    varData_1451 = /* @__PURE__ */ new WeakSet();
    varData_1452 = function(param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1436.AES.encrypt(param_1, param_2).toString();
    };
    varData_1453 = /* @__PURE__ */ new WeakSet();
    varData_1454 = function(param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1436.AES.decrypt(param_1, param_2).toString(varData_1436.enc.Utf8);
    };
    varData_1455 = /* @__PURE__ */ new WeakSet();
    varData_1456 = function(_0x1c752a = 128) {
      return varData_1436.lib.WordArray.random(_0x1c752a / 8).toString();
    };
    var varData_1468;
    var varData_1469 = class {
      constructor() {
        varData_544(this, varData_1468, void 0);
        const resourceName_1 = GetCurrentResourceName();
        const varData_1470 = varData_1418.getStringHash("__npx_sdk:" + resourceName_1 + ":token");
        const varData_1471 = GetConvar(varData_1470, "");
        varData_545(this, varData_1468, new varData_1457(varData_1471, "0xE4302B52"));
      }
      on(param_1, param_2) {
        const varData_1472 = varData_543(this, varData_1468).hashString(param_1);
        return on(varData_1472, param_2);
      }
      onNet(param_1, param_2) {
        const varData_1473 = varData_543(this, varData_1468).hashString(param_1);
        onNet(varData_1473, param_2);
        const varData_1474 = varData_543(this, varData_1468).hashString(param_1 + "-c");
        onNet(varData_1474, (param_1_1) => {
          const varData_1475 = varData_1418.inflate(new Uint8Array(param_1_1));
          const varData_1476 = msgpack_unpack(varData_1475);
          return param_2(...varData_1476);
        });
      }
      emit(param_1, ..._0x4f16b5) {
        const varData_1477 = varData_543(this, varData_1468).hashString(param_1);
        return emit(varData_1477, ..._0x4f16b5);
      }
      emitNet(param_1, ..._0x154104) {
        let varData_1478 = msgpack_pack(_0x154104);
        let varData_1479 = varData_1478.length;
        const varData_1480 = varData_543(this, varData_1468).hashString(param_1);
        if (varData_1479 < 16e3) {
          TriggerServerEventInternal(varData_1480, varData_1478, varData_1478.length);
        } else {
          TriggerLatentServerEventInternal(varData_1480, varData_1478, varData_1478.length, 1024e3);
        }
      }
    };
    varData_1468 = /* @__PURE__ */ new WeakMap();
    var varData_1481 = new varData_1469();
    var varData_1482 = {
      warning: 1,
      log: 2,
      error: 3,
      debug: 4
    };
    var varData_1483 = GetConvar(GetCurrentResourceName() + "_logLevel", "");
    var varData_1484 = GetConvar("sv_loglevel", "warning");
    (() => {
      varData_1484 = (varData_1483 == null ? void 0 : varData_1483.length) > 0 ? varData_1483 : varData_1484;
      if (!varData_1482[varData_1484]) {
        throw new Error("Invalid log level: " + varData_1484);
      }
    })();
    var varData_1485 = () => varData_1482[varData_1484] >= varData_1482.warning;
    var varData_1486 = () => varData_1482[varData_1484] >= varData_1482.log;
    var varData_1487 = () => varData_1482[varData_1484] >= varData_1482.error;
    var varData_1488 = () => varData_1484 === "debug";
    var varData_1489 = {
      warning: (param_1, ..._0x108e94) => {
        if (!varData_1485()) {
          return;
        }
        console.log("^3[WARNING] ^7" + param_1, ..._0x108e94, "^0");
      },
      log: (param_1, ..._0x3e0c4f) => {
        if (!varData_1486()) {
          return;
        }
        console.log("^5[nopixel] ^7" + param_1, ..._0x3e0c4f, "^0");
      },
      debug: (param_1, ..._0x256fe5) => {
        if (!varData_1488()) {
          return;
        }
        console.log("^2[D] " + param_1, ..._0x256fe5, "^0");
      },
      error: (param_1, ..._0x305dcc) => {
        if (!varData_1487()) {
          return;
        }
        console.log("^1[ERROR] " + param_1, ..._0x305dcc, "^0");
      }
    };
    var varData_1490;
    var varData_1491;
    var varData_1492;
    var varData_1493;
    var varData_1494;
    var varData_1495;
    var varData_1496;
    var varData_1497;
    var varData_1498;
    var varData_1499;
    var varData_1500;
    var varData_1501;
    var varData_1502 = class {
      constructor() {
        varData_544(this, varData_1496);
        varData_544(this, varData_1498);
        varData_544(this, varData_1500);
        varData_544(this, varData_1490, void 0);
        varData_544(this, varData_1491, void 0);
        varData_544(this, varData_1492, void 0);
        varData_544(this, varData_1493, void 0);
        varData_544(this, varData_1494, void 0);
        varData_544(this, varData_1495, void 0);
        varData_545(this, varData_1490, false);
        varData_545(this, varData_1491, /* @__PURE__ */ new Map());
        varData_545(this, varData_1492, /* @__PURE__ */ new Set());
        varData_545(this, varData_1493, GetGameTimer());
        varData_545(this, varData_1494, GetCurrentResourceName());
        const varData_1503 = varData_1418.getStringHash("__npx_sdk:" + varData_543(this, varData_1494) + ":token");
        const varData_1504 = GetConvar(varData_1503, "");
        varData_545(this, varData_1495, new varData_1457(varData_1504, "0xE4302B52"));
        varData_547(this, varData_1500, varData_1501).call(this);
      }
      register(param_1, param_2) {
        if (varData_543(this, varData_1492).has(param_1)) {
          return varData_1489.error("[RPC] Handler already registered | " + param_1);
        }
        varData_543(this, varData_1492).add(param_1);
        varData_547(this, varData_1496, varData_1497).call(this, "__rpc_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1505;
          let varData_1506;
          const varData_1507 = GetInvokingResource();
          if (varData_1507) {
            return;
          }
          const varData_1508 = varData_543(this, varData_1495).decode(param_1_1);
          if (!(varData_1508 == null ? void 0 : varData_1508.id) || !(varData_1508 == null ? void 0 : varData_1508.origin)) {
            return varData_1489.error("[RPC] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1505 = await param_2(...param_2_1);
            varData_1506 = true;
          } catch (err) {
            varData_1505 = err.message;
            varData_1506 = false;
          }
          varData_547(this, varData_1498, varData_1499).call(this, "__rpc_res:" + varData_1508.origin, varData_1508.id, [varData_1506, varData_1505]);
        });
      }
      execute(param_1, ..._0x1452a2) {
        const varData_1509 = {
          id: ++varData_546(this, varData_1493)._,
          origin: varData_543(this, varData_1494)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let timerId = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 6e4);
          var varData_1510 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: timerId
          };
          varData_543(this, varData_1491).set(varData_1509.id, varData_1510);
        });
        promise.finally(() => varData_543(this, varData_1491).delete(varData_1509.id));
        varData_547(this, varData_1498, varData_1499).call(this, "__rpc_req:" + param_1, varData_543(this, varData_1495).encode(varData_1509), _0x1452a2);
        return promise;
      }
      executeCustom(param_1, param_2, ..._0x354abb) {
        const varData_1511 = {
          id: ++varData_546(this, varData_1493)._,
          origin: varData_543(this, varData_1494)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let timerId = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 6e4);
          var varData_1512 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: timerId
          };
          varData_543(this, varData_1491).set(varData_1511.id, varData_1512);
        });
        promise.finally(() => varData_543(this, varData_1491).delete(varData_1511.id));
        varData_547(this, varData_1498, varData_1499).call(this, "__rpc_req:" + param_1, varData_543(this, varData_1495).encode(varData_1511), _0x354abb);
        return promise;
      }
    };
    varData_1490 = /* @__PURE__ */ new WeakMap();
    varData_1491 = /* @__PURE__ */ new WeakMap();
    varData_1492 = /* @__PURE__ */ new WeakMap();
    varData_1493 = /* @__PURE__ */ new WeakMap();
    varData_1494 = /* @__PURE__ */ new WeakMap();
    varData_1495 = /* @__PURE__ */ new WeakMap();
    varData_1496 = /* @__PURE__ */ new WeakSet();
    varData_1497 = function(param_1, param_2) {
      const varData_1513 = varData_543(this, varData_1495).hashString(param_1);
      onNet(varData_1513, param_2);
      const varData_1514 = varData_543(this, varData_1495).hashString(param_1 + "-c");
      onNet(varData_1514, (param_1_1) => {
        const varData_1515 = varData_1418.inflate(new Uint8Array(param_1_1));
        const varData_1516 = msgpack_unpack(varData_1515);
        return param_2(...varData_1516);
      });
    };
    varData_1498 = /* @__PURE__ */ new WeakSet();
    varData_1499 = function(param_1, ..._0x1a4afa) {
      let varData_1517 = msgpack_pack(_0x1a4afa);
      let varData_1518 = varData_1517.length;
      const varData_1519 = varData_543(this, varData_1495).hashString(param_1);
      if (varData_1518 < 16e3) {
        TriggerServerEventInternal(varData_1519, varData_1517, varData_1517.length);
      } else {
        TriggerLatentServerEventInternal(varData_1519, varData_1517, varData_1517.length, 1024e3);
      }
    };
    varData_1500 = /* @__PURE__ */ new WeakSet();
    varData_1501 = function() {
      if (varData_543(this, varData_1490)) {
        return varData_1489.error("SDK RPC handlers already initialized");
      }
      varData_547(this, varData_1496, varData_1497).call(this, "__rpc_res:" + varData_543(this, varData_1494), (param_1, [_0x185fc0, _0x93c1d2]) => {
        const varData_1520 = varData_543(this, varData_1491).get(param_1);
        if (!varData_1520) {
          return;
        }
        clearTimeout(varData_1520.timeout);
        if (_0x185fc0) {
          varData_1520.resolve(_0x93c1d2);
        } else {
          varData_1520.reject(new Error(_0x93c1d2));
        }
      });
      varData_545(this, varData_1490, true);
      varData_1489.debug("SDK RPC handlers initialized");
    };
    var varData_1521 = new varData_1502();
    var varData_1522 = varData_541(varData_1253());
    var varData_1523 = (_0x31fedc = 128) => {
      return varData_1522.lib.WordArray.random(_0x31fedc / 8).toString();
    };
    var varData_1524 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1522.AES.encrypt(param_1, param_2).toString();
    };
    var varData_1525 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1522.AES.decrypt(param_1, param_2).toString(varData_1522.enc.Utf8);
    };
    var varData_1526 = (param_1) => {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1522.enc.Base64.stringify(varData_1522.enc.Utf8.parse(param_1));
    };
    var varData_1527 = (param_1, param_2) => {
      return varData_1526((0, varData_1522.HmacMD5)(param_1, param_2).toString());
    };
    var varData_1528 = {};
    var varData_1529 = (param_1, _0x52eb8e = varData_1523()) => {
      if (varData_1528[param_1] === void 0) {
        varData_1528[param_1] = varData_1527(param_1, _0x52eb8e);
      }
      return varData_1528[param_1];
    };
    var varData_1530 = (param_1, _0x39adde = varData_1523()) => {
      try {
        return varData_1524(JSON.stringify(param_1), _0x39adde);
      } catch (err) {
        console.error("Failed to encode payload");
      }
    };
    var varData_1531 = (param_1, _0x40a897 = varData_1523()) => {
      try {
        return JSON.parse(varData_1525(param_1, _0x40a897));
      } catch (err) {
        console.error("Failed to decode payload");
      }
    };
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
    var varData_1547;
    var varData_1548;
    var varData_1549;
    var varData_1550 = class {
      constructor() {
        varData_544(this, varData_1540);
        varData_544(this, varData_1542);
        varData_544(this, varData_1544);
        varData_544(this, varData_1546);
        varData_544(this, varData_1548);
        varData_544(this, varData_1532, void 0);
        varData_544(this, varData_1533, void 0);
        varData_544(this, varData_1534, void 0);
        varData_544(this, varData_1535, void 0);
        varData_544(this, varData_1536, void 0);
        varData_544(this, varData_1537, void 0);
        varData_544(this, varData_1538, void 0);
        varData_544(this, varData_1539, void 0);
        varData_545(this, varData_1532, GetCurrentResourceName());
        varData_545(this, varData_1533, varData_1523(64));
        varData_545(this, varData_1534, varData_1523(64));
        varData_545(this, varData_1535, varData_1523(64));
        varData_545(this, varData_1536, false);
        varData_545(this, varData_1537, 0);
        varData_545(this, varData_1538, []);
        varData_545(this, varData_1539, /* @__PURE__ */ new Map());
        varData_547(this, varData_1540, varData_1541).call(this, "__npx_sdk:init", varData_547(this, varData_1548, varData_1549).bind(this));
      }
      async register(param_1, param_2) {
        varData_547(this, varData_1542, varData_1543).call(this, "__nui_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1551;
          let varData_1552;
          const varData_1553 = varData_1531(param_1_1, varData_543(this, varData_1534));
          if (!(varData_1553 == null ? void 0 : varData_1553.id) || !(varData_1553 == null ? void 0 : varData_1553.resource)) {
            return varData_1489.error("[NUI] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1551 = await param_2(...param_2_1);
            varData_1552 = true;
          } catch (err) {
            varData_1551 = err.message;
            varData_1552 = false;
          }
          varData_547(this, varData_1546, varData_1547).call(this, "__nui_res:" + varData_1553.resource, varData_1553.id, [varData_1552, varData_1551]);
        });
      }
      remove(param_1) {
        const varData_1554 = varData_1529("__nui_req:" + param_1, varData_543(this, varData_1533));
        UnregisterRawNuiCallback(varData_1554);
      }
      async execute(param_1, ..._0x12b9b0) {
        const varData_1555 = {
          id: ++varData_546(this, varData_1537)._,
          resource: varData_543(this, varData_1532)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let varData_1556;
          if (varData_543(this, varData_1536)) {
            varData_1556 = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 6e4);
          } else {
            varData_1556 = 0;
          }
          var varData_1557 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: varData_1556
          };
          varData_543(this, varData_1539).set(varData_1555.id, varData_1557);
        });
        promise.finally(() => varData_543(this, varData_1539).delete(varData_1555.id));
        if (!varData_543(this, varData_1536)) {
          var varData_1558 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1555,
            args: _0x12b9b0
          };
          varData_543(this, varData_1538).push(varData_1558);
        } else {
          varData_547(this, varData_1546, varData_1547).call(this, "__nui_req:" + param_1, varData_1530(varData_1555, varData_543(this, varData_1535)), _0x12b9b0);
        }
        return promise;
      }
      async executeCustom(param_1, param_2, ..._0xfd2b61) {
        const varData_1559 = {
          id: ++varData_546(this, varData_1537)._,
          resource: varData_543(this, varData_1532)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let varData_1560;
          if (varData_543(this, varData_1536)) {
            varData_1560 = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 6e4);
          } else {
            varData_1560 = 0;
          }
          var varData_1561 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: varData_1560
          };
          varData_543(this, varData_1539).set(varData_1559.id, varData_1561);
        });
        promise.finally(() => varData_543(this, varData_1539).delete(varData_1559.id));
        if (!varData_543(this, varData_1536)) {
          var varData_1562 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1559,
            args: _0xfd2b61
          };
          varData_543(this, varData_1538).push(varData_1562);
        } else {
          varData_547(this, varData_1546, varData_1547).call(this, "__nui_req:" + param_1, varData_1530(varData_1559, varData_543(this, varData_1535)), _0xfd2b61);
        }
        return promise;
      }
    };
    varData_1532 = /* @__PURE__ */ new WeakMap();
    varData_1533 = /* @__PURE__ */ new WeakMap();
    varData_1534 = /* @__PURE__ */ new WeakMap();
    varData_1535 = /* @__PURE__ */ new WeakMap();
    varData_1536 = /* @__PURE__ */ new WeakMap();
    varData_1537 = /* @__PURE__ */ new WeakMap();
    varData_1538 = /* @__PURE__ */ new WeakMap();
    varData_1539 = /* @__PURE__ */ new WeakMap();
    varData_1540 = /* @__PURE__ */ new WeakSet();
    varData_1541 = function(param_1, param_2) {
      RegisterNuiCallback(param_1, ({
        args: _0x39847f
      }, param_2_1) => {
        param_2_1(true);
        return param_2(..._0x39847f);
      });
    };
    varData_1542 = /* @__PURE__ */ new WeakSet();
    varData_1543 = function(param_1, param_2) {
      if (varData_543(this, varData_1536)) {
        const varData_1563 = varData_1529(param_1, varData_543(this, varData_1533));
        return varData_547(this, varData_1540, varData_1541).call(this, varData_1563, param_2);
      }
      var varData_1564 = {
        type: "on",
        event: param_1,
        callback: param_2
      };
      varData_543(this, varData_1538).push(varData_1564);
    };
    varData_1544 = /* @__PURE__ */ new WeakSet();
    varData_1545 = function(param_1, ..._0x186ac4) {
      var varData_1565 = {
        event: param_1,
        args: _0x186ac4
      };
      SendNuiMessage(JSON.stringify(varData_1565, null));
    };
    varData_1546 = /* @__PURE__ */ new WeakSet();
    varData_1547 = function(param_1, ..._0x373e9e) {
      if (varData_543(this, varData_1536)) {
        const varData_1566 = varData_1529(param_1, varData_543(this, varData_1533));
        return varData_547(this, varData_1544, varData_1545).call(this, varData_1566, ..._0x373e9e);
      }
      var varData_1567 = {
        type: "emit",
        event: param_1,
        args: _0x373e9e
      };
      varData_543(this, varData_1538).push(varData_1567);
    };
    varData_1548 = /* @__PURE__ */ new WeakSet();
    varData_1549 = async function() {
      varData_545(this, varData_1536, true);
      varData_547(this, varData_1542, varData_1543).call(this, "__nui_res:" + varData_543(this, varData_1532), (param_1, [_0x2d5d70, _0x5d34b2]) => {
        const varData_1568 = varData_543(this, varData_1539).get(param_1);
        if (!varData_1568) {
          return varData_1489.error("[NUI] Invalid response received");
        }
        clearTimeout(varData_1568.timeout);
        if (_0x2d5d70) {
          varData_1568.resolve(_0x5d34b2);
        } else {
          varData_1568.reject(_0x5d34b2);
        }
      });
      varData_547(this, varData_1544, varData_1545).call(this, "__npx_sdk:ready", varData_1526(varData_543(this, varData_1533) + ":" + varData_543(this, varData_1534) + ":" + varData_543(this, varData_1535)));
      varData_1489.debug("[NUI] SDK initialized");
      for (const varData_1569 of varData_543(this, varData_1538)) {
        if (varData_1569.type === "on") {
          varData_547(this, varData_1542, varData_1543).call(this, varData_1569.event, varData_1569.callback);
        } else if (varData_1569.type === "emit") {
          setTimeout(() => varData_547(this, varData_1546, varData_1547).call(this, varData_1569.event, ...varData_1569.args), 1e3);
        } else if (varData_1569.type === "execute") {
          const varData_1570 = varData_543(this, varData_1539).get(varData_1569.metadata.id);
          if (!varData_1570) {
            varData_1489.error("[RPC] " + varData_1569.event + " - Failed to execute queued RPC call");
            continue;
          }
          varData_1570.timeout = setTimeout(() => varData_1570.reject(new Error("RPC timed out | " + varData_1569.event)), 6e4);
          setTimeout(() => varData_547(this, varData_1546, varData_1547).call(this, varData_1569.event, varData_1530(varData_1569.metadata, varData_543(this, varData_1535)), varData_1569.args), 1e3);
        }
      }
    };
    var varData_1571;
    var varData_1572;
    var varData_1573;
    var varData_1574 = class {
      constructor(param_1) {
        varData_544(this, varData_1571, void 0);
        varData_544(this, varData_1572, void 0);
        varData_544(this, varData_1573, /* @__PURE__ */ new Map());
        varData_545(this, varData_1571, param_1);
        varData_545(this, varData_1572, false);
        const resourceName_1 = GetCurrentResourceName();
        on("onResourceStop", (param_1_1) => {
          if (param_1_1 === resourceName_1) {
            for (const [_0x44748d, _0x17dc58] of varData_543(this, varData_1573).entries()) {
              varData_1431.Sync[varData_543(this, varData_1571)].removeNuiEvent(_0x44748d);
            }
          }
        });
        on("onResourceStart", async (param_1_1) => {
          if (param_1_1 === varData_543(this, varData_1571)) {
            await varData_1418.waitForCondition(() => GetResourceState(varData_543(this, varData_1571)) === "started", 1e4);
            if (varData_543(this, varData_1572)) {
              for (const [_0x4b9ad3, _0x44eca0] of varData_543(this, varData_1573).entries()) {
                varData_1431.Sync[varData_543(this, varData_1571)].removeNuiEvent(_0x4b9ad3);
                this.register(_0x4b9ad3, _0x44eca0);
              }
            }
            varData_545(this, varData_1572, true);
          }
          if (param_1_1 === resourceName_1) {
            await varData_1418.waitForCondition(() => GetResourceState(varData_543(this, varData_1571)) === "started", 1e4);
            varData_545(this, varData_1572, true);
          }
        });
      }
      async execute(param_1, ..._0x30a6d7) {
        return await varData_1431.Async[varData_543(this, varData_1571)].sendNuiEvent(param_1, _0x30a6d7);
      }
      async register(param_1, param_2) {
        await varData_1418.waitForCondition(() => varData_543(this, varData_1572), 1e4);
        const varData_1575 = varData_1431.Sync[varData_543(this, varData_1571)].registerNuiEvent(param_1, param_2);
        if (varData_1575) {
          varData_543(this, varData_1573).set(param_1, param_2);
        }
      }
    };
    varData_1571 = /* @__PURE__ */ new WeakMap();
    varData_1572 = /* @__PURE__ */ new WeakMap();
    varData_1573 = /* @__PURE__ */ new WeakMap();
    var varData_1576 = class {
      constructor() {
        const varData_1577 = async (param_1, param_2) => {
          return await varData_1582.execute(param_1, ...param_2);
        };
        varData_1431.Async("sendNuiEvent", varData_1577);
        const varData_1578 = (param_1, param_2) => {
          varData_1582.register(param_1, param_2);
          return true;
        };
        varData_1431.Sync("registerNuiEvent", varData_1578);
        const varData_1579 = (param_1) => {
          varData_1582.remove(param_1);
        };
        varData_1431.Sync("removeNuiEvent", varData_1579);
      }
    };
    var varData_1580 = varData_1574;
    var varData_1581 = null;
    var varData_1582 = new varData_1550();
    var varData_1583;
    var varData_1584;
    var varData_1585;
    var varData_1586 = class {
      constructor() {
        varData_544(this, varData_1583, void 0);
        varData_544(this, varData_1584, void 0);
        varData_544(this, varData_1585, void 0);
        varData_545(this, varData_1585, false);
        varData_1582.register("__npx_sdk:sockets:init", async () => {
          varData_1489.debug("Sockets", "Initializing sockets...");
          if (varData_543(this, varData_1585)) {
            return {
              url: varData_543(this, varData_1583),
              API_KEY: varData_543(this, varData_1584)
            };
          }
          const varData_1587 = await new Promise((param_1) => {
            emit("__npx_core:sockets:init", param_1);
          });
          if (!(varData_1587 == null ? void 0 : varData_1587.API_URL) || !(varData_1587 == null ? void 0 : varData_1587.API_KEY)) {
            return;
          }
          varData_545(this, varData_1583, varData_1587.API_URL);
          varData_545(this, varData_1584, varData_1587.API_KEY);
          varData_545(this, varData_1585, true);
          varData_1489.debug("Sockets", "Sockets initialized.");
          return varData_1587;
        });
      }
      register(param_1, param_2) {
        varData_1582.execute("__npx_sdk:sockets:register", param_1);
        varData_1582.register("__npx_sdk:sockets:pipe:" + param_1, async (param_1_1) => {
          return param_2(param_1_1);
        });
      }
      async execute(param_1, param_2) {
        return varData_1582.execute("__npx_sdk:sockets:execute", param_1, param_2);
      }
    };
    varData_1583 = /* @__PURE__ */ new WeakMap();
    varData_1584 = /* @__PURE__ */ new WeakMap();
    varData_1585 = /* @__PURE__ */ new WeakMap();
    var varData_1588 = new varData_1586();
    var varData_1589 = {
      HasItem: async (param_1, param_2) => {
        return await varData_1431.Sync.inventory.HasItem(param_1, param_2);
      },
      GetItemStacks: async (param_1, param_2) => {
        return await varData_1431.Sync.inventory.GetItemStacks(param_1, param_2);
      },
      GetAllItemStacks: async (param_1) => {
        return await varData_1431.Sync.inventory.GetAllItemStacks(param_1);
      },
      GetItemList: async () => {
        return await varData_1431.Sync.inventory.GetItemList();
      },
      GetPlayerInventories: async () => {
        return await varData_1431.Sync.inventory.GetPlayerInventories();
      },
      GetPlayerInventoriesWeight: async () => {
        return await varData_1431.Sync.inventory.GetPlayerInventoriesWeight();
      },
      GetWeaponsList: () => {
        return varData_1431.Sync.inventory.GetWeaponsList();
      },
      GetWeapon: (param_1) => {
        return varData_1431.Sync.inventory.GetWeapon(param_1);
      },
      GetWeaponByItemStack: (param_1) => {
        return varData_1431.Sync.inventory.GetWeaponByItemStack(param_1);
      },
      OpenInventory: (param_1, param_2) => {
        varData_1431.Sync.inventory.OpenInventory(param_1, param_2);
      },
      UseBodySlot: (param_1) => {
        return varData_1431.Async.inventory.UseBodySlot(param_1);
      },
      SetBodySlotDisabled: (param_1, param_2, param_3) => {
        varData_1431.Sync.inventory.SetBodySlotDisabled(param_1, param_2, param_3);
      },
      IsBodySlotDisabled: (param_1, param_2) => {
        return varData_1431.Sync.inventory.IsBodySlotDisabled(param_1, param_2);
      }
    };
    var varData_1590 = {};
    var varData_1591 = {
      Activity: () => varData_1668,
      ActivityObjective: () => varData_1642,
      ActivityTask: () => varData_1621,
      Cache: () => varData_1274,
      Group: () => varData_1700,
      GroupManager: () => varData_1725,
      GroupMember: () => varData_1715,
      PolyZone: () => varData_1343,
      Thread: () => varData_1592,
      Vector2: () => varData_1389,
      Vector3: () => varData_1271
    };
    varData_537(varData_1590, varData_1591);
    var varData_1592 = class {
      constructor(param_1, param_2, _0x33d2a2 = "interval") {
        this.callback = param_1;
        this.delay = param_2;
        this.mode = _0x33d2a2;
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
        const varData_1593 = this.hooks.get("preStart") ?? [];
        try {
          for (const varData_1594 of varData_1593) {
            if (!this.aborted) {
              await varData_1594.call(this);
            }
          }
        } catch (err) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", err.message);
        }
        if (this.aborted) {
          try {
            const varData_1595 = this.hooks.get("startAborted") ?? [];
            for (const varData_1596 of varData_1595) {
              await varData_1596.call(this);
            }
          } catch (err) {
            console.log("Error while calling start-aborted hook", err.message);
          }
          return;
        }
        this.active = true;
        const varData_1597 = this.hooks.get("active") ?? [];
        switch (this.mode) {
          case "tick": {
            this.threadId = setTick(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const varData_1598 of varData_1597) {
                  await varData_1598.call(this);
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
                for (const varData_1599 of varData_1597) {
                  await varData_1599.call(this);
                }
              } catch (err) {
                console.log("Error while calling active hook", err.message);
              }
            }, this.delay);
            break;
          }
          case "timeout": {
            const varData_1600 = () => {
              if (this.active) {
                this.threadId = setTimeout(async () => {
                  this.tick += 1;
                  try {
                    await this.callback.call(this);
                    for (const varData_1601 of varData_1597) {
                      await varData_1601.call(this);
                    }
                  } catch (err) {
                    console.log("Error while calling active hook", err.message);
                  }
                  return varData_1600();
                }, this.delay);
              }
            };
            varData_1600();
            break;
          }
        }
        const varData_1602 = this.hooks.get("afterStart") ?? [];
        try {
          for (const varData_1603 of varData_1602) {
            await varData_1603.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-start hook", err.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const varData_1604 = this.hooks.get("preStop") ?? [];
        try {
          for (const varData_1605 of varData_1604) {
            if (!this.aborted) {
              await varData_1605.call(this);
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
            const varData_1606 = this.hooks.get("stopAborted") ?? [];
            for (const varData_1607 of varData_1606) {
              await varData_1607.call(this);
            }
          } catch (err) {
            console.log("Error while calling stop-aborted hook", err.message);
          }
          return;
        }
        const varData_1608 = this.hooks.get("afterStop") ?? [];
        try {
          for (const varData_1609 of varData_1608) {
            await varData_1609.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-stop hook", err.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(param_1, param_2) {
        var varData_1610;
        if ((varData_1610 = this.hooks.get(param_1)) == null) {
        } else {
          varData_1610.push(param_2);
        }
      }
      setNextTick(param_1, param_2) {
        this.scheduled[param_1] = this.tick + param_2;
      }
      canTick(param_1) {
        return this.scheduled[param_1] === void 0 || this.tick >= this.scheduled[param_1];
      }
    };
    var varData_1611;
    var varData_1612;
    var varData_1613;
    var varData_1614;
    var varData_1615;
    var varData_1616;
    var varData_1617;
    var varData_1618;
    var varData_1619;
    var varData_1620;
    var varData_1621 = class {
      constructor(param_1, param_2) {
        varData_544(this, varData_1617);
        varData_544(this, varData_1619);
        varData_544(this, varData_1611, void 0);
        varData_544(this, varData_1612, void 0);
        varData_544(this, varData_1613, void 0);
        varData_544(this, varData_1614, void 0);
        varData_544(this, varData_1615, void 0);
        varData_544(this, varData_1616, void 0);
        varData_545(this, varData_1611, param_1.id);
        varData_545(this, varData_1612, param_2);
        varData_545(this, varData_1613, /* @__PURE__ */ new Map());
        varData_545(this, varData_1616, "pending");
        varData_545(this, varData_1614, param_1.required.map((param_1_1) => param_2.objectives.get(param_1_1)));
        varData_545(this, varData_1615, new Map(param_1.objectives.map((param_1_1) => [param_1_1, param_2.objectives.get(param_1_1)])));
        if (param_1.status !== "pending") {
          setTimeout(() => varData_547(this, varData_1617, varData_1618).call(this, param_1.status), 3e3);
        }
        varData_1481.onNet("__npx_activities:" + varData_543(this, varData_1612).id + ":task:" + varData_543(this, varData_1611) + ":statusUpdate", varData_547(this, varData_1617, varData_1618).bind(this));
      }
      get id() {
        return varData_543(this, varData_1611);
      }
      onTaskStarted(param_1) {
        const varData_1622 = varData_543(this, varData_1613).get("onTaskStarted") ?? [];
        if (!varData_543(this, varData_1613).has("onTaskStarted")) {
          varData_543(this, varData_1613).set("onTaskStarted", varData_1622);
        }
        varData_1622.push(param_1);
      }
      onTaskEnded(param_1) {
        const varData_1623 = varData_543(this, varData_1613).get("onTaskEnded") ?? [];
        if (!varData_543(this, varData_1613).has("onTaskEnded")) {
          varData_543(this, varData_1613).set("onTaskEnded", varData_1623);
        }
        varData_1623.push(param_1);
      }
      emitEvent(param_1, ..._0x3c6e5c) {
        return varData_1521.execute("__npx_activities:" + varData_543(this, varData_1612).id + ":task:" + varData_543(this, varData_1611) + ":event", param_1, ..._0x3c6e5c);
      }
      toJSON() {
        return {
          id: varData_543(this, varData_1611),
          status: varData_543(this, varData_1616),
          objectives: [...varData_543(this, varData_1615).keys()],
          required: varData_543(this, varData_1614).map((param_1) => param_1.id)
        };
      }
      destroy() {
        varData_543(this, varData_1613).clear();
      }
    };
    varData_1611 = /* @__PURE__ */ new WeakMap();
    varData_1612 = /* @__PURE__ */ new WeakMap();
    varData_1613 = /* @__PURE__ */ new WeakMap();
    varData_1614 = /* @__PURE__ */ new WeakMap();
    varData_1615 = /* @__PURE__ */ new WeakMap();
    varData_1616 = /* @__PURE__ */ new WeakMap();
    varData_1617 = /* @__PURE__ */ new WeakSet();
    varData_1618 = function(param_1) {
      const varData_1624 = varData_543(this, varData_1616);
      varData_545(this, varData_1616, param_1);
      if (varData_1624 === "pending" && param_1 === "active") {
        varData_547(this, varData_1619, varData_1620).call(this, "onTaskStarted");
      } else if (varData_1624 === "active" && (param_1 === "completed" || param_1 === "failed")) {
        varData_547(this, varData_1619, varData_1620).call(this, "onTaskEnded", param_1 === "completed");
      }
      varData_547(this, varData_1619, varData_1620).call(this, "onStatusUpdate", param_1);
    };
    varData_1619 = /* @__PURE__ */ new WeakSet();
    varData_1620 = function(param_1, ..._0x332ce5) {
      const varData_1625 = varData_543(this, varData_1613).get(param_1);
      if (!varData_1625) {
        return;
      }
      for (const varData_1626 of varData_1625) {
        try {
          varData_1626.call(this, ..._0x332ce5);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1627;
    var varData_1628;
    var varData_1629;
    var varData_1630;
    var varData_1631;
    var varData_1632;
    var varData_1633;
    var varData_1634;
    var varData_1635;
    var varData_1636;
    var varData_1637;
    var varData_1638;
    var varData_1639;
    var varData_1640;
    var varData_1641;
    var varData_1642 = class {
      constructor(param_1, param_2) {
        varData_544(this, varData_1634);
        varData_544(this, varData_1636);
        varData_544(this, varData_1638);
        varData_544(this, varData_1640);
        varData_544(this, varData_1627, void 0);
        varData_544(this, varData_1628, void 0);
        varData_544(this, varData_1629, void 0);
        varData_544(this, varData_1630, void 0);
        varData_544(this, varData_1631, void 0);
        varData_544(this, varData_1632, void 0);
        varData_544(this, varData_1633, void 0);
        varData_545(this, varData_1627, param_1.id);
        varData_545(this, varData_1628, param_1.name);
        varData_545(this, varData_1629, param_1.description);
        varData_545(this, varData_1630, param_2);
        varData_545(this, varData_1631, /* @__PURE__ */ new Map());
        varData_545(this, varData_1632, param_1.status);
        varData_545(this, varData_1633, new Map(Object.entries(param_1.data ?? {})));
        varData_1481.onNet("__npx_activities:" + varData_543(this, varData_1630).id + ":objective:" + varData_543(this, varData_1627) + ":statusUpdate", varData_547(this, varData_1634, varData_1635).bind(this));
        varData_1481.onNet("__npx_activities:" + varData_543(this, varData_1630).id + ":objective:" + varData_543(this, varData_1627) + ":dataUpdate", varData_547(this, varData_1636, varData_1637).bind(this));
        varData_1481.onNet("__npx_activities:" + varData_543(this, varData_1630).id + ":objective:" + varData_543(this, varData_1627) + ":dataSet", varData_547(this, varData_1638, varData_1639).bind(this));
      }
      get id() {
        return varData_543(this, varData_1627);
      }
      get name() {
        return varData_543(this, varData_1628);
      }
      get description() {
        return varData_543(this, varData_1629);
      }
      get status() {
        return varData_543(this, varData_1632);
      }
      get activity() {
        return varData_543(this, varData_1630);
      }
      getData(param_1) {
        return varData_543(this, varData_1633).get(param_1);
      }
      onStatusUpdate(param_1) {
        const varData_1643 = varData_543(this, varData_1631).get("onStatusUpdate") ?? [];
        if (!varData_543(this, varData_1631).has("onStatusUpdate")) {
          varData_543(this, varData_1631).set("onStatusUpdate", varData_1643);
        }
        varData_1643.push(param_1);
      }
      onDataUpdate(param_1) {
        const varData_1644 = varData_543(this, varData_1631).get("onDataUpdate") ?? [];
        if (!varData_543(this, varData_1631).has("onDataUpdate")) {
          varData_543(this, varData_1631).set("onDataUpdate", varData_1644);
        }
        varData_1644.push(param_1);
      }
      toJSON() {
        return {
          id: varData_543(this, varData_1627),
          name: varData_543(this, varData_1628),
          description: varData_543(this, varData_1629),
          status: varData_543(this, varData_1632),
          data: Object.fromEntries(varData_543(this, varData_1633))
        };
      }
      destroy() {
        varData_543(this, varData_1631).clear();
      }
    };
    varData_1627 = /* @__PURE__ */ new WeakMap();
    varData_1628 = /* @__PURE__ */ new WeakMap();
    varData_1629 = /* @__PURE__ */ new WeakMap();
    varData_1630 = /* @__PURE__ */ new WeakMap();
    varData_1631 = /* @__PURE__ */ new WeakMap();
    varData_1632 = /* @__PURE__ */ new WeakMap();
    varData_1633 = /* @__PURE__ */ new WeakMap();
    varData_1634 = /* @__PURE__ */ new WeakSet();
    varData_1635 = function(param_1) {
      varData_545(this, varData_1632, param_1);
      varData_547(this, varData_1640, varData_1641).call(this, "onStatusUpdated", param_1);
    };
    varData_1636 = /* @__PURE__ */ new WeakSet();
    varData_1637 = function(param_1, param_2) {
      varData_543(this, varData_1633).set(param_1, param_2);
      varData_547(this, varData_1640, varData_1641).call(this, "onDataUpdate", param_1, param_2);
    };
    varData_1638 = /* @__PURE__ */ new WeakSet();
    varData_1639 = function(param_1) {
      for (const [_0x3f8880, _0x1dd8a3] of Object.entries(param_1)) {
        varData_543(this, varData_1633).set(_0x3f8880, _0x1dd8a3);
        varData_547(this, varData_1640, varData_1641).call(this, "onDataUpdate", _0x3f8880, _0x1dd8a3);
      }
    };
    varData_1640 = /* @__PURE__ */ new WeakSet();
    varData_1641 = function(param_1, ..._0x19bf08) {
      const varData_1645 = varData_543(this, varData_1631).get(param_1);
      if (!varData_1645) {
        return;
      }
      for (const varData_1646 of varData_1645) {
        try {
          varData_1646.call(this, ..._0x19bf08);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1647;
    var varData_1648;
    var varData_1649;
    var varData_1650;
    var varData_1651;
    var varData_1652;
    var varData_1653;
    var varData_1654;
    var varData_1655;
    var varData_1656;
    var varData_1657;
    var varData_1658;
    var varData_1659;
    var varData_1660;
    var varData_1661;
    var varData_1662;
    var varData_1663;
    var varData_1664;
    var varData_1665;
    var varData_1666;
    var varData_1667;
    var varData_1668 = class {
      constructor(param_1) {
        varData_544(this, varData_1656);
        varData_544(this, varData_1658);
        varData_544(this, varData_1660);
        varData_544(this, varData_1662);
        varData_544(this, varData_1664);
        varData_544(this, varData_1666);
        varData_544(this, varData_1647, void 0);
        varData_544(this, varData_1648, void 0);
        varData_544(this, varData_1649, void 0);
        varData_544(this, varData_1650, void 0);
        varData_544(this, varData_1651, void 0);
        varData_544(this, varData_1652, void 0);
        varData_544(this, varData_1653, void 0);
        varData_544(this, varData_1654, void 0);
        varData_544(this, varData_1655, void 0);
        varData_545(this, varData_1647, param_1.id);
        varData_545(this, varData_1648, param_1.code);
        varData_545(this, varData_1649, param_1.name);
        varData_545(this, varData_1650, param_1.description);
        varData_545(this, varData_1651, /* @__PURE__ */ new Map());
        varData_545(this, varData_1652, "pending");
        varData_545(this, varData_1653, param_1.deadline ? new Date(param_1.deadline) : null);
        varData_545(this, varData_1654, /* @__PURE__ */ new Map());
        varData_545(this, varData_1655, /* @__PURE__ */ new Map());
        if (param_1.status !== "pending") {
          setTimeout(() => varData_547(this, varData_1656, varData_1657).call(this, param_1.status), 3e3);
        }
        param_1.objectives.forEach((param_1_1) => varData_547(this, varData_1658, varData_1659).call(this, param_1_1));
        param_1.tasks.forEach((param_1_1) => varData_547(this, varData_1662, varData_1663).call(this, param_1_1));
        varData_1481.onNet("__npx_activities:" + varData_543(this, varData_1647) + ":statusUpdate", varData_547(this, varData_1656, varData_1657).bind(this));
        varData_1481.onNet("__npx_activities:" + varData_543(this, varData_1647) + ":objectiveAdded", varData_547(this, varData_1658, varData_1659).bind(this));
        varData_1481.onNet("__npx_activities:" + varData_543(this, varData_1647) + ":objectiveRemoved", varData_547(this, varData_1660, varData_1661).bind(this));
        varData_1481.onNet("__npx_activities:" + varData_543(this, varData_1647) + ":taskAdded", varData_547(this, varData_1662, varData_1663).bind(this));
        varData_1481.onNet("__npx_activities:" + varData_543(this, varData_1647) + ":taskRemoved", varData_547(this, varData_1664, varData_1665).bind(this));
      }
      get id() {
        return varData_543(this, varData_1647);
      }
      get status() {
        return varData_543(this, varData_1652);
      }
      get objectives() {
        return varData_543(this, varData_1655);
      }
      on(param_1, param_2) {
        const varData_1669 = varData_543(this, varData_1651).get(param_1) ?? [];
        if (!varData_543(this, varData_1651).has(param_1)) {
          varData_543(this, varData_1651).set(param_1, varData_1669);
        }
        varData_1669.push(param_2);
      }
      toJSON() {
        var varData_1670;
        return {
          id: varData_543(this, varData_1647),
          code: varData_543(this, varData_1648),
          name: varData_543(this, varData_1649),
          description: varData_543(this, varData_1650),
          status: varData_543(this, varData_1652),
          deadline: ((varData_1670 = varData_543(this, varData_1653)) == null ? void 0 : varData_1670.getTime()) ?? null,
          tasks: [...varData_543(this, varData_1654).values()].map((param_1) => param_1.toJSON()),
          objectives: [...varData_543(this, varData_1655).values()].map((param_1) => param_1.toJSON())
        };
      }
      destroy() {
        varData_543(this, varData_1654).forEach((param_1) => param_1.destroy());
        varData_543(this, varData_1655).forEach((param_1) => param_1.destroy());
        varData_543(this, varData_1654).clear();
        varData_543(this, varData_1655).clear();
        varData_543(this, varData_1651).clear();
      }
    };
    varData_1647 = /* @__PURE__ */ new WeakMap();
    varData_1648 = /* @__PURE__ */ new WeakMap();
    varData_1649 = /* @__PURE__ */ new WeakMap();
    varData_1650 = /* @__PURE__ */ new WeakMap();
    varData_1651 = /* @__PURE__ */ new WeakMap();
    varData_1652 = /* @__PURE__ */ new WeakMap();
    varData_1653 = /* @__PURE__ */ new WeakMap();
    varData_1654 = /* @__PURE__ */ new WeakMap();
    varData_1655 = /* @__PURE__ */ new WeakMap();
    varData_1656 = /* @__PURE__ */ new WeakSet();
    varData_1657 = function(param_1) {
      const varData_1671 = varData_543(this, varData_1652);
      varData_545(this, varData_1652, param_1);
      if (varData_1671 === "pending" && param_1 === "active") {
        varData_547(this, varData_1666, varData_1667).call(this, "onActivityStarted");
      } else if (param_1 === "completed" || param_1 === "failed") {
        varData_547(this, varData_1666, varData_1667).call(this, "onActivityEnded", param_1, param_1 === "completed");
      }
      varData_547(this, varData_1666, varData_1667).call(this, "onStatusUpdate", param_1);
    };
    varData_1658 = /* @__PURE__ */ new WeakSet();
    varData_1659 = function(param_1) {
      const varData_1672 = new varData_1642(param_1, this);
      varData_1672.onStatusUpdate((param_1_1) => varData_547(this, varData_1666, varData_1667).call(this, "onObjectiveStatusUpdate", varData_1672, param_1_1));
      varData_1672.onDataUpdate((param_1_1, param_2) => varData_547(this, varData_1666, varData_1667).call(this, "onObjectiveDataUpdate", varData_1672, param_1_1, param_2));
      varData_543(this, varData_1655).set(varData_1672.id, varData_1672);
      varData_547(this, varData_1666, varData_1667).call(this, "onObjectiveAdded", varData_1672);
    };
    varData_1660 = /* @__PURE__ */ new WeakSet();
    varData_1661 = function(param_1) {
      const varData_1673 = varData_543(this, varData_1655).get(param_1.id);
      if (!varData_1673) {
        return;
      }
      varData_543(this, varData_1655).delete(param_1.id);
      varData_547(this, varData_1666, varData_1667).call(this, "onObjectiveRemoved", varData_1673);
      varData_1673.destroy();
    };
    varData_1662 = /* @__PURE__ */ new WeakSet();
    varData_1663 = function(param_1) {
      const varData_1674 = new varData_1621(param_1, this);
      varData_1674.onTaskStarted(() => varData_547(this, varData_1666, varData_1667).call(this, "onTaskStarted", varData_1674));
      varData_1674.onTaskEnded((param_1_1) => varData_547(this, varData_1666, varData_1667).call(this, "onTaskEnded", varData_1674, param_1_1));
      varData_543(this, varData_1654).set(varData_1674.id, varData_1674);
      varData_547(this, varData_1666, varData_1667).call(this, "onTaskAdded", varData_1674);
    };
    varData_1664 = /* @__PURE__ */ new WeakSet();
    varData_1665 = function(param_1) {
      const varData_1675 = varData_543(this, varData_1654).get(param_1.id);
      if (!varData_1675) {
        return;
      }
      varData_543(this, varData_1654).delete(param_1.id);
      varData_547(this, varData_1666, varData_1667).call(this, "onTaskRemoved", varData_1675);
      varData_1675.destroy();
    };
    varData_1666 = /* @__PURE__ */ new WeakSet();
    varData_1667 = function(param_1, ..._0x4131d3) {
      const varData_1676 = varData_543(this, varData_1651).get(param_1);
      if (!varData_1676) {
        return;
      }
      for (const varData_1677 of varData_1676) {
        try {
          varData_1677.call(this, ..._0x4131d3);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1678;
    var varData_1679;
    var varData_1680;
    var varData_1681;
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
    var varData_1700 = class {
      constructor(param_1) {
        varData_544(this, varData_1686);
        varData_544(this, varData_1688);
        varData_544(this, varData_1690);
        varData_544(this, varData_1692);
        varData_544(this, varData_1694);
        varData_544(this, varData_1696);
        varData_544(this, varData_1698);
        varData_544(this, varData_1678, void 0);
        varData_544(this, varData_1679, void 0);
        varData_544(this, varData_1680, void 0);
        varData_544(this, varData_1681, void 0);
        varData_544(this, varData_1682, void 0);
        varData_544(this, varData_1683, void 0);
        varData_544(this, varData_1684, void 0);
        varData_544(this, varData_1685, void 0);
        varData_545(this, varData_1678, param_1.id);
        varData_545(this, varData_1680, /* @__PURE__ */ new Map());
        varData_545(this, varData_1681, param_1.name);
        varData_545(this, varData_1682, param_1.capacity);
        varData_545(this, varData_1684, null);
        varData_545(this, varData_1685, new Map(Object.entries(param_1.data)));
        varData_545(this, varData_1679, /* @__PURE__ */ new Map());
        varData_545(this, varData_1683, null);
        for (const varData_1701 of param_1.members) {
          const varData_1702 = new varData_1715(varData_1701, this);
          varData_543(this, varData_1679).set(varData_1702.characterId, varData_1702);
          if (varData_1701.isLeader) {
            varData_545(this, varData_1683, varData_1702);
          }
        }
        if (param_1.activity) {
          setTimeout(() => varData_547(this, varData_1696, varData_1697).call(this, param_1.activity), 3e3);
        }
        varData_1481.onNet("__npx_groups:group:" + varData_543(this, varData_1678) + ":data:update", varData_547(this, varData_1688, varData_1689).bind(this));
        varData_1481.onNet("__npx_groups:group:" + varData_543(this, varData_1678) + ":activity:set", varData_547(this, varData_1696, varData_1697).bind(this));
        varData_1481.onNet("__npx_groups:group:" + varData_543(this, varData_1678) + ":group:update", varData_547(this, varData_1686, varData_1687).bind(this));
        varData_1481.onNet("__npx_groups:group:" + varData_543(this, varData_1678) + ":member:joined", varData_547(this, varData_1690, varData_1691).bind(this));
        varData_1481.onNet("__npx_groups:group:" + varData_543(this, varData_1678) + ":member:left", varData_547(this, varData_1692, varData_1693).bind(this));
        varData_1481.onNet("__npx_groups:group:" + varData_543(this, varData_1678) + ":member:update", varData_547(this, varData_1694, varData_1695).bind(this));
      }
      get id() {
        return varData_543(this, varData_1678);
      }
      get name() {
        return varData_543(this, varData_1681);
      }
      get capacity() {
        return varData_543(this, varData_1682);
      }
      get size() {
        return varData_543(this, varData_1679).size;
      }
      get leader() {
        return varData_543(this, varData_1683);
      }
      get members() {
        return [...varData_543(this, varData_1679).values()];
      }
      get activity() {
        return varData_543(this, varData_1684);
      }
      on(param_1, param_2) {
        const varData_1703 = varData_543(this, varData_1680).get(param_1) ?? [];
        if (!varData_543(this, varData_1680).has(param_1)) {
          varData_543(this, varData_1680).set(param_1, varData_1703);
        }
        varData_1703.push(param_2);
      }
      getValue(param_1) {
        return varData_543(this, varData_1685).get(param_1);
      }
      toJSON() {
        var varData_1704;
        return {
          id: varData_543(this, varData_1678),
          name: varData_543(this, varData_1681),
          capacity: varData_543(this, varData_1682),
          activity: ((varData_1704 = varData_543(this, varData_1684)) == null ? void 0 : varData_1704.toJSON()) ?? null,
          members: [...varData_543(this, varData_1679).values()].map((param_1) => param_1.toJSON()),
          data: Object.fromEntries(varData_543(this, varData_1685))
        };
      }
      destroy() {
        varData_543(this, varData_1680).clear();
        varData_543(this, varData_1679).clear();
        varData_543(this, varData_1685).clear();
      }
    };
    varData_1678 = /* @__PURE__ */ new WeakMap();
    varData_1679 = /* @__PURE__ */ new WeakMap();
    varData_1680 = /* @__PURE__ */ new WeakMap();
    varData_1681 = /* @__PURE__ */ new WeakMap();
    varData_1682 = /* @__PURE__ */ new WeakMap();
    varData_1683 = /* @__PURE__ */ new WeakMap();
    varData_1684 = /* @__PURE__ */ new WeakMap();
    varData_1685 = /* @__PURE__ */ new WeakMap();
    varData_1686 = /* @__PURE__ */ new WeakSet();
    varData_1687 = function(param_1) {
      varData_545(this, varData_1681, param_1.name);
      varData_545(this, varData_1682, param_1.capacity);
      varData_547(this, varData_1698, varData_1699).call(this, "group:update", this);
    };
    varData_1688 = /* @__PURE__ */ new WeakSet();
    varData_1689 = function(param_1, param_2) {
      varData_543(this, varData_1685).set(param_1, param_2);
      varData_547(this, varData_1698, varData_1699).call(this, "data:update", param_1, param_2);
    };
    varData_1690 = /* @__PURE__ */ new WeakSet();
    varData_1691 = function(param_1) {
      const varData_1705 = new varData_1715(param_1, this);
      varData_543(this, varData_1679).set(varData_1705.characterId, varData_1705);
      varData_547(this, varData_1698, varData_1699).call(this, "member:joined", varData_1705);
    };
    varData_1692 = /* @__PURE__ */ new WeakSet();
    varData_1693 = function(param_1) {
      const varData_1706 = varData_543(this, varData_1679).get(param_1);
      if (!varData_1706) {
        return;
      }
      varData_543(this, varData_1679).delete(param_1);
      if (varData_543(this, varData_1683) === varData_1706) {
        varData_545(this, varData_1683, null);
      }
      varData_547(this, varData_1698, varData_1699).call(this, "member:left", varData_1706);
    };
    varData_1694 = /* @__PURE__ */ new WeakSet();
    varData_1695 = function(param_1, param_2, param_3) {
      const varData_1707 = varData_543(this, varData_1679).get(param_1);
      if (!varData_1707) {
        return;
      }
      if (varData_1707.serverId !== param_2) {
        varData_1707.updateServerId(param_2);
      }
      if (param_3) {
        varData_545(this, varData_1683, varData_1707);
      }
      varData_547(this, varData_1698, varData_1699).call(this, "member:update", varData_1707);
    };
    varData_1696 = /* @__PURE__ */ new WeakSet();
    varData_1697 = function(param_1) {
      const varData_1708 = param_1 ? new varData_1668(param_1) : null;
      varData_545(this, varData_1684, varData_1708);
      varData_547(this, varData_1698, varData_1699).call(this, "activity:set", varData_1708);
    };
    varData_1698 = /* @__PURE__ */ new WeakSet();
    varData_1699 = function(param_1, ..._0x193494) {
      const varData_1709 = varData_543(this, varData_1680).get(param_1);
      if (!varData_1709) {
        return;
      }
      for (const varData_1710 of varData_1709) {
        try {
          varData_1710.call(this, ..._0x193494);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1711;
    var varData_1712;
    var varData_1713;
    var varData_1714;
    var varData_1715 = class {
      constructor(param_1, param_2) {
        varData_544(this, varData_1711, void 0);
        varData_544(this, varData_1712, void 0);
        varData_544(this, varData_1713, void 0);
        varData_544(this, varData_1714, void 0);
        varData_545(this, varData_1711, param_1.characterId);
        varData_545(this, varData_1712, param_1.name);
        varData_545(this, varData_1713, param_2);
        varData_545(this, varData_1714, param_1.serverId);
      }
      get group() {
        return varData_543(this, varData_1713);
      }
      get characterId() {
        return varData_543(this, varData_1711);
      }
      get name() {
        return varData_543(this, varData_1712);
      }
      get serverId() {
        return varData_543(this, varData_1714);
      }
      get isOnline() {
        return varData_543(this, varData_1714) !== null;
      }
      get isLeader() {
        return varData_543(this, varData_1713).leader === this;
      }
      updateServerId(param_1) {
        varData_545(this, varData_1714, param_1);
      }
      toJSON() {
        return {
          characterId: varData_543(this, varData_1711),
          serverId: varData_543(this, varData_1714),
          name: varData_543(this, varData_1712),
          isLeader: this.isLeader,
          isOnline: this.isOnline
        };
      }
    };
    varData_1711 = /* @__PURE__ */ new WeakMap();
    varData_1712 = /* @__PURE__ */ new WeakMap();
    varData_1713 = /* @__PURE__ */ new WeakMap();
    varData_1714 = /* @__PURE__ */ new WeakMap();
    var varData_1716;
    var varData_1717;
    var varData_1718;
    var varData_1719;
    var varData_1720;
    var varData_1721;
    var varData_1722;
    var varData_1723;
    var varData_1724;
    var varData_1725 = class {
      constructor(param_1) {
        varData_544(this, varData_1719);
        varData_544(this, varData_1721);
        varData_544(this, varData_1723);
        varData_544(this, varData_1716, void 0);
        varData_544(this, varData_1717, void 0);
        varData_544(this, varData_1718, void 0);
        varData_545(this, varData_1716, param_1 ?? GetCurrentResourceName());
        varData_545(this, varData_1717, /* @__PURE__ */ new Map());
        varData_545(this, varData_1718, /* @__PURE__ */ new Map());
        varData_1481.onNet("__npx_groups:manager:" + varData_543(this, varData_1716) + ":addedToGroup", varData_547(this, varData_1719, varData_1720).bind(this));
        varData_1481.onNet("__npx_groups:manager:" + varData_543(this, varData_1716) + ":removedFromGroup", varData_547(this, varData_1721, varData_1722).bind(this));
        on("np-base:clearStates", this.reset.bind(this));
        on("np-spawn:characterSpawned", this.init.bind(this));
        const varData_1726 = varData_1431.Sync.isPed.isPed("cid");
        if (varData_1726) {
          this.init();
        }
      }
      get list() {
        return varData_543(this, varData_1717);
      }
      async init() {
        if (varData_543(this, varData_1717).size > 0) {
          this.reset();
        }
        const varData_1727 = await varData_1521.execute("__npx_groups:manager:" + varData_543(this, varData_1716) + ":init");
        if (!varData_1727) {
          return;
        }
        for (const varData_1728 of varData_1727) {
          varData_547(this, varData_1719, varData_1720).call(this, varData_1728);
        }
        varData_1489.debug("[Group Manager] Initialized! | Groups: " + varData_543(this, varData_1717).size);
      }
      reset() {
        varData_543(this, varData_1717).forEach((param_1) => param_1.destroy());
        varData_543(this, varData_1717).clear();
      }
      on(param_1, param_2) {
        const varData_1729 = varData_543(this, varData_1718).get(param_1) ?? [];
        if (!varData_543(this, varData_1718).has(param_1)) {
          varData_543(this, varData_1718).set(param_1, varData_1729);
        }
        varData_1729.push(param_2);
      }
    };
    varData_1716 = /* @__PURE__ */ new WeakMap();
    varData_1717 = /* @__PURE__ */ new WeakMap();
    varData_1718 = /* @__PURE__ */ new WeakMap();
    varData_1719 = /* @__PURE__ */ new WeakSet();
    varData_1720 = function(param_1) {
      const varData_1730 = new varData_1700(param_1);
      varData_1730.on("activity:set", (param_1_1) => param_1_1 && varData_547(this, varData_1723, varData_1724).call(this, "activityAssigned", varData_1730, param_1_1));
      varData_543(this, varData_1717).set(varData_1730.id, varData_1730);
      varData_547(this, varData_1723, varData_1724).call(this, "addedToGroup", varData_1730);
    };
    varData_1721 = /* @__PURE__ */ new WeakSet();
    varData_1722 = function(param_1) {
      const varData_1731 = varData_543(this, varData_1717).get(param_1);
      if (!varData_1731) {
        return;
      }
      varData_543(this, varData_1717).delete(param_1);
      varData_1731.destroy();
      varData_547(this, varData_1723, varData_1724).call(this, "removedFromGroup", varData_1731.id);
    };
    varData_1723 = /* @__PURE__ */ new WeakSet();
    varData_1724 = function(param_1, ..._0x8485cf) {
      const varData_1732 = varData_543(this, varData_1718).get(param_1) ?? [];
      for (const varData_1733 of varData_1732) {
        try {
          varData_1733.call(this, ..._0x8485cf);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1734 = {};
    var varData_1735 = {
      GetEntityStateValue: () => handleAction_101,
      GetPlayerStateValue: () => handleAction_104,
      RegisterStatebagChangeHandler: () => handleAction_106,
      SetEntityStateValue: () => handleAction_102,
      SetPlayerStateValue: () => handleAction_105
    };
    varData_537(varData_1734, varData_1735);
    var varData_1736 = new varData_1274(5e3);
    function handleAction_100(param_1) {
      let varData_1737 = varData_1736.get("ent-" + param_1);
      if (varData_1737) {
        return varData_1737;
      }
      varData_1737 = Entity(param_1);
      varData_1736.set("ent-" + param_1, varData_1737);
      return varData_1737;
    }
    function handleAction_101(param_1, param_2) {
      const varData_1738 = handleAction_100(param_1);
      return varData_1738.state[param_2];
    }
    function handleAction_102(param_1, param_2, param_3, _0x297f50 = false) {
      const varData_1739 = handleAction_100(param_1);
      varData_1739.state.set(param_2, param_3, _0x297f50);
    }
    function handleAction_103(param_1) {
      let varData_1740 = varData_1736.get("ply-" + param_1);
      if (varData_1740) {
        return varData_1740;
      }
      varData_1740 = Player(param_1);
      varData_1736.set("ply-" + param_1, varData_1740);
      return varData_1740;
    }
    function handleAction_104(param_1, param_2) {
      const varData_1741 = handleAction_103(param_1);
      return varData_1741.state[param_2];
    }
    function handleAction_105(param_1, param_2, param_3, _0x22444f = false) {
      const varData_1742 = handleAction_103(param_1);
      varData_1742.state.set(param_2, param_3, _0x22444f);
    }
    function handleAction_106(param_1, param_2, param_3, param_4) {
      return AddStateBagChangeHandler(param_1, null, async function(param_1_1, param_2_1, param_3_1, param_4_1, param_5) {
        if (param_3 && !param_5) {
          return;
        }
        const varData_1743 = param_1_1.startsWith("player");
        const varData_1744 = parseInt(param_1_1.substring(7));
        const varData_1745 = varData_1743 ? GetPlayerFromStateBagName(param_1_1) : GetEntityFromStateBagName(param_1_1);
        if (!varData_1745) {
          return;
        }
        const varData_1746 = varData_1743 ? NetworkGetPlayerIndexFromPed(varData_1745) === PlayerId() : NetworkGetEntityOwner(varData_1745) === PlayerId();
        if (param_2 && !varData_1746) {
          return;
        }
        param_4(varData_1744, varData_1745, param_3_1);
      });
    }
    var varData_1747 = {};
    var varData_1748 = {
      GetFuelLevel: () => handleAction_114,
      GetIdentifier: () => handleAction_111,
      GetMetadata: () => handleAction_110,
      HasKey: () => handleAction_109,
      IsVinScratched: () => handleAction_112,
      SwapSeat: () => handleAction_113,
      TurnOffEngine: () => handleAction_108,
      TurnOnEngine: () => handleAction_107
    };
    varData_537(varData_1747, varData_1748);
    function handleAction_107(param_1) {
      varData_1431.Sync["np-vehicles"].TurnOnEngine(param_1);
    }
    function handleAction_108(param_1) {
      varData_1431.Sync["np-vehicles"].TurnOffEngine(param_1);
    }
    function handleAction_109(param_1) {
      return varData_1431.Sync["np-vehicles"].HasVehicleKey(param_1);
    }
    function handleAction_110(param_1, param_2) {
      const varData_1749 = handleAction_101(param_1, "data");
      if (param_2) {
        if (varData_1749 == null) {
          return void 0;
        } else {
          return varData_1749[param_2];
        }
      } else {
        return varData_1749;
      }
    }
    function handleAction_111(param_1) {
      return handleAction_101(param_1, "vin");
    }
    function handleAction_112(param_1) {
      return handleAction_101(param_1, "vinScratched");
    }
    function handleAction_113(param_1, param_2) {
      varData_1431.Sync["np-vehicles"].SwapVehicleSeat(param_1, param_2);
    }
    function handleAction_114(param_1) {
      return handleAction_110(param_1, "fuel") ?? 0;
    }
    var varData_1750 = {};
    var varData_1751 = {
      GetUIFocus: () => handleAction_119,
      RegisterUICallback: () => handleAction_115,
      SendUIAppMessage: () => handleAction_117,
      SendUIMessage: () => handleAction_116,
      SetUIFocus: () => handleAction_118
    };
    varData_537(varData_1750, varData_1751);
    var itemList_2 = [];
    function handleAction_115(param_1, param_2) {
      AddEventHandler("_npx_uiReq:" + param_1, param_2);
      exports["np-ui"].RegisterUIEvent(param_1);
      itemList_2.push(param_1);
    }
    function handleAction_116(param_1) {
      exports["np-ui"].SendUIMessage(param_1);
    }
    function handleAction_117(param_1, param_2) {
      var varData_1752 = {
        source: "np-nui",
        app: param_1,
        data: param_2
      };
      exports["np-ui"].SendUIMessage(varData_1752);
    }
    function handleAction_118(param_1, param_2) {
      exports["np-ui"].SetUIFocus(param_1, param_2);
    }
    function handleAction_119() {
      return exports["np-ui"].GetUIFocus();
    }
    AddEventHandler("_npx_uiReady", () => {
      itemList_2.forEach((param_1) => exports["np-ui"].RegisterUIEvent(param_1));
    });
    var varData_1753 = {};
    var varData_1754 = {
      Manager: () => varData_1783
    };
    varData_537(varData_1753, varData_1754);
    var varData_1755;
    var varData_1756;
    var varData_1757;
    var varData_1758;
    var varData_1759;
    var varData_1760;
    var varData_1761;
    var varData_1762;
    var varData_1763;
    var varData_1764;
    var varData_1765;
    var varData_1766;
    var varData_1767;
    var varData_1768;
    var varData_1769;
    var varData_1770;
    var varData_1771;
    var varData_1772;
    var varData_1773;
    var varData_1774;
    var varData_1775;
    var varData_1776;
    var varData_1777;
    var varData_1778;
    var varData_1779;
    var varData_1780;
    var varData_1781;
    var varData_1782;
    var varData_1783 = class {
      constructor(param_1, param_2) {
        varData_544(this, varData_1759);
        varData_544(this, varData_1761);
        varData_544(this, varData_1763);
        varData_544(this, varData_1765);
        varData_544(this, varData_1767);
        varData_544(this, varData_1769);
        varData_544(this, varData_1771);
        varData_544(this, varData_1773);
        varData_544(this, varData_1775);
        varData_544(this, varData_1777);
        varData_544(this, varData_1779);
        varData_544(this, varData_1781);
        varData_544(this, varData_1755, void 0);
        varData_544(this, varData_1756, void 0);
        varData_544(this, varData_1757, null);
        varData_544(this, varData_1758, void 0);
        varData_545(this, varData_1755, param_1);
        varData_545(this, varData_1756, param_2);
        varData_545(this, varData_1758, null);
        varData_543(this, varData_1756).on("addedToGroup", varData_547(this, varData_1767, varData_1768).bind(this));
        varData_543(this, varData_1756).on("removedFromGroup", varData_547(this, varData_1769, varData_1770).bind(this));
        varData_1481.on("jobs:app:ready", () => {
          if (!varData_543(this, varData_1758)) {
            return;
          }
          varData_547(this, varData_1771, varData_1772).call(this, varData_543(this, varData_1758));
        });
        varData_1481.on("jobs:jobChanged", (param_1_1) => {
          varData_545(this, varData_1757, param_1_1);
          if (!varData_543(this, varData_1758)) {
            return;
          }
          const varData_1784 = (param_1_1 == null ? void 0 : param_1_1.id) === varData_543(this, varData_1755);
          if (!varData_1784) {
            return varData_547(this, varData_1769, varData_1770).call(this, varData_543(this, varData_1758).id);
          }
          varData_547(this, varData_1771, varData_1772).call(this, varData_543(this, varData_1758));
        });
        varData_1481.onNet("__npx_jobs:" + varData_543(this, varData_1755) + ":groups:invite:request", varData_547(this, varData_1761, varData_1762).bind(this));
        varData_1481.onNet("__npx_jobs:" + varData_543(this, varData_1755) + ":groups:invite:received", varData_547(this, varData_1759, varData_1760).bind(this));
        varData_1481.onNet("__npx_jobs:" + varData_543(this, varData_1755) + ":groups:invite:response", varData_547(this, varData_1763, varData_1764).bind(this));
        varData_1481.onNet("__npx_jobs:" + varData_543(this, varData_1755) + ":groups:invite:aborted", varData_547(this, varData_1765, varData_1766).bind(this));
      }
      get group() {
        return varData_543(this, varData_1758);
      }
      async sendGroupInvite(param_1) {
        if (!varData_543(this, varData_1757) || varData_543(this, varData_1757).id !== varData_543(this, varData_1755)) {
          return;
        }
        const [_0x48e590, _0x21cb8b] = await varData_1521.execute("jobs:app:" + varData_543(this, varData_1755) + ":groups:invite:send", param_1);
        if (!_0x48e590) {
          return varData_1871.phoneNotification("Group Invite", _0x21cb8b, true);
        }
        varData_1871.phoneNotification("Group Invite", "Invite sent!", true);
        varData_1489.debug("[Job APP] Invite sent! " + _0x21cb8b);
      }
      async sendGroupJoinRequest(param_1) {
        if (!varData_543(this, varData_1757) || varData_543(this, varData_1757).id !== varData_543(this, varData_1755)) {
          return;
        }
        const [_0x59677e, _0x307b22] = await varData_1521.execute("jobs:app:" + varData_543(this, varData_1755) + ":groups:invite:request", param_1);
        if (!_0x59677e) {
          return varData_1871.phoneNotification("Group Invite", _0x307b22, true);
        }
        varData_1871.phoneNotification("Group Invite", "Join request sent!", true);
        varData_1489.debug("[Job APP] Join request sent! " + _0x307b22);
      }
    };
    varData_1755 = /* @__PURE__ */ new WeakMap();
    varData_1756 = /* @__PURE__ */ new WeakMap();
    varData_1757 = /* @__PURE__ */ new WeakMap();
    varData_1758 = /* @__PURE__ */ new WeakMap();
    varData_1759 = /* @__PURE__ */ new WeakSet();
    varData_1760 = async function(param_1, param_2) {
      varData_1489.debug("[Job APP] Invite received! " + param_1 + " " + param_2);
      const varData_1785 = 'Received an invite to join the group "' + param_2 + '"';
      const varData_1786 = await varData_1871.phoneConfirmation("Group Invite", varData_1785, "users", 3e4);
      const [_0x4d66e4, _0x4c7b70] = await varData_1521.execute("jobs:app:" + varData_543(this, varData_1755) + ":groups:invite:response", param_1, varData_1786);
      if (!_0x4d66e4) {
        return varData_1871.phoneNotification("Group Invite", _0x4c7b70, true);
      }
    };
    varData_1761 = /* @__PURE__ */ new WeakSet();
    varData_1762 = async function(param_1, param_2) {
      varData_1489.debug("[Job APP] Join request received! " + param_1 + " " + param_2);
      const varData_1787 = "Received a group join request from " + param_2;
      const varData_1788 = await varData_1871.phoneConfirmation("Group Invite", varData_1787, "users", 3e4);
      const [_0xcdfce0, _0x4f55c0] = await varData_1521.execute("jobs:app:" + varData_543(this, varData_1755) + ":groups:invite:response", param_1, varData_1788);
      if (!_0xcdfce0) {
        return varData_1871.phoneNotification("Group Invite", _0x4f55c0, true);
      }
    };
    varData_1763 = /* @__PURE__ */ new WeakSet();
    varData_1764 = function(param_1, param_2) {
      varData_1489.debug("[Job APP] Invite response received! " + param_1 + " " + param_2);
    };
    varData_1765 = /* @__PURE__ */ new WeakSet();
    varData_1766 = function(param_1, param_2) {
      varData_1489.debug("[Job APP] Invite aborted! " + param_1 + " " + param_2);
    };
    varData_1767 = /* @__PURE__ */ new WeakSet();
    varData_1768 = function(param_1) {
      varData_545(this, varData_1758, param_1);
      varData_543(this, varData_1758).on("group:update", varData_547(this, varData_1771, varData_1772).bind(this));
      varData_543(this, varData_1758).on("activity:set", varData_547(this, varData_1779, varData_1780).bind(this, param_1));
      varData_543(this, varData_1758).on("data:update", varData_547(this, varData_1781, varData_1782).bind(this, param_1));
      varData_543(this, varData_1758).on("member:joined", varData_547(this, varData_1773, varData_1774).bind(this, param_1));
      varData_543(this, varData_1758).on("member:left", varData_547(this, varData_1775, varData_1776).bind(this, param_1));
      varData_543(this, varData_1758).on("member:update", varData_547(this, varData_1777, varData_1778).bind(this, param_1));
      varData_1750.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_543(this, varData_1755),
        group: param_1.toJSON()
      });
      varData_1489.debug("[Job APP] Added to group!");
    };
    varData_1769 = /* @__PURE__ */ new WeakSet();
    varData_1770 = function(param_1) {
      varData_545(this, varData_1758, null);
      varData_1750.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_543(this, varData_1755),
        group: null
      });
      varData_1489.debug("[Job APP] Removed from group!");
    };
    varData_1771 = /* @__PURE__ */ new WeakSet();
    varData_1772 = function(param_1) {
      if (varData_543(this, varData_1758) !== param_1) {
        return varData_1489.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1750.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_543(this, varData_1755),
        group: param_1.toJSON()
      });
      varData_1489.debug("[Job APP] Updated group!");
    };
    varData_1773 = /* @__PURE__ */ new WeakSet();
    varData_1774 = function(param_1, param_2) {
      if (varData_543(this, varData_1758) !== param_1) {
        return varData_1489.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1750.SendUIAppMessage("phone", {
        action: "jobs:group:addMember",
        jobId: varData_543(this, varData_1755),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1489.debug("[Job APP] Added member to group!");
    };
    varData_1775 = /* @__PURE__ */ new WeakSet();
    varData_1776 = function(param_1, param_2) {
      if (varData_543(this, varData_1758) !== param_1) {
        return varData_1489.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1750.SendUIAppMessage("phone", {
        action: "jobs:group:removeMember",
        jobId: varData_543(this, varData_1755),
        groupId: param_1.id,
        memberId: param_2.characterId
      });
      varData_1489.debug("[Job APP] Removed member from group!");
    };
    varData_1777 = /* @__PURE__ */ new WeakSet();
    varData_1778 = function(param_1, param_2) {
      if (varData_543(this, varData_1758) !== param_1) {
        return varData_1489.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1750.SendUIAppMessage("phone", {
        action: "jobs:group:updateMember",
        jobId: varData_543(this, varData_1755),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1489.debug("[Job APP] Updated member in group!");
    };
    varData_1779 = /* @__PURE__ */ new WeakSet();
    varData_1780 = function(param_1, param_2) {
      if (varData_543(this, varData_1758) !== param_1) {
        return varData_1489.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      const varData_1789 = (param_2 == null ? void 0 : param_2.toJSON()) ?? null;
      varData_1750.SendUIAppMessage("phone", {
        action: "jobs:group:updateActivity",
        jobId: varData_543(this, varData_1755),
        groupId: param_1.id,
        activity: varData_1789
      });
      varData_1489.debug("[Job APP] Updated activity for group!");
    };
    varData_1781 = /* @__PURE__ */ new WeakSet();
    varData_1782 = function(param_1, param_2, param_3) {
      if (varData_543(this, varData_1758) !== param_1) {
        return varData_1489.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      } else if (param_2 !== "status") {
        return;
      }
      varData_1750.SendUIAppMessage("phone", {
        action: "jobs:group:updateStatus",
        jobId: varData_543(this, varData_1755),
        groupId: param_1.id,
        status: param_3
      });
      varData_1489.debug("[Job APP] Updated status for group!");
    };
    var varData_1790 = async (param_1) => {
      const varData_1791 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasModelLoaded(varData_1791)) {
        return true;
      }
      RequestModel(varData_1791);
      const varData_1792 = await varData_1418.waitForCondition(() => HasModelLoaded(varData_1791), 3e3);
      return !varData_1792;
    };
    var varData_1793 = async (param_1) => {
      if (HasAnimDictLoaded(param_1)) {
        return true;
      }
      RequestAnimDict(param_1);
      const varData_1794 = await varData_1418.waitForCondition(() => HasAnimDictLoaded(param_1), 3e3);
      return !varData_1794;
    };
    var varData_1795 = async (param_1) => {
      if (HasClipSetLoaded(param_1)) {
        return true;
      }
      RequestClipSet(param_1);
      const varData_1796 = await varData_1418.waitForCondition(() => HasClipSetLoaded(param_1), 3e3);
      return !varData_1796;
    };
    var varData_1797 = async (param_1) => {
      if (HasStreamedTextureDictLoaded(param_1)) {
        return true;
      }
      RequestStreamedTextureDict(param_1, true);
      const varData_1798 = await varData_1418.waitForCondition(() => HasStreamedTextureDictLoaded(param_1), 3e3);
      return !varData_1798;
    };
    var varData_1799 = async (param_1, param_2, param_3) => {
      const varData_1800 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasWeaponAssetLoaded(varData_1800)) {
        return true;
      }
      RequestWeaponAsset(varData_1800, param_2, param_3);
      const varData_1801 = await varData_1418.waitForCondition(() => HasWeaponAssetLoaded(varData_1800), 3e3);
      return !varData_1801;
    };
    var varData_1802 = async (param_1) => {
      if (HasNamedPtfxAssetLoaded(param_1)) {
        return true;
      }
      RequestNamedPtfxAsset(param_1);
      const varData_1803 = await varData_1418.waitForCondition(() => HasNamedPtfxAssetLoaded(param_1), 3e3);
      return !varData_1803;
    };
    var varData_1804 = {
      loadModel: varData_1790,
      loadTexture: varData_1797,
      loadAnim: varData_1793,
      loadClipSet: varData_1795,
      loadWeaponAsset: varData_1799,
      loadNamedPtfxAsset: varData_1802
    };
    var varData_1805 = varData_1804;
    var varData_1806 = (param_1, ..._0x407860) => {
      switch (param_1) {
        case "coord": {
          const [_0x323b03, _0x4b5c5e, _0x192747] = _0x407860;
          return AddBlipForCoord(_0x323b03, _0x4b5c5e, _0x192747);
        }
        case "area": {
          const [_0x2d7f30, _0x8f3fd6, _0x35a138, _0x343907, _0x3396e9] = _0x407860;
          return AddBlipForArea(_0x2d7f30, _0x8f3fd6, _0x35a138, _0x343907, _0x3396e9);
        }
        case "radius": {
          const [_0x52c189, _0x4bdeb9, _0x45c0c4, _0x185b79] = _0x407860;
          return AddBlipForRadius(_0x52c189, _0x4bdeb9, _0x45c0c4, _0x185b79);
        }
        case "pickup": {
          const [_0x3a7be5] = _0x407860;
          return AddBlipForPickup(_0x3a7be5);
        }
        case "entity": {
          const [_0xc48d2c] = _0x407860;
          return AddBlipForEntity(_0xc48d2c);
        }
        default: {
          console.error(new Error("Invalid Blip Type"));
          return 0;
        }
      }
    };
    var varData_1807 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
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
    var varData_1808 = {
      createBlip: varData_1806,
      applyBlipSettings: varData_1807
    };
    var varData_1809 = varData_1808;
    var dataSet_1 = /* @__PURE__ */ new Set();
    var dataMap_1 = /* @__PURE__ */ new Map();
    var dataSet_2 = /* @__PURE__ */ new Set();
    on("np-polyzone:enter", (param_1, param_2) => {
      dataSet_1.add(param_1);
      if (param_2 == null ? void 0 : param_2.id) {
        dataSet_1.add(param_1 + "-" + param_2.id);
      }
      if (dataSet_2.has(param_1)) {
        varData_1481.emitNet("__sdk:zones:" + param_1 + ":enter", param_2);
      }
      const varData_1810 = dataMap_1.get(param_1 + "-enter");
      if (varData_1810 === void 0) {
        return;
      }
      for (const varData_1811 of varData_1810) {
        try {
          varData_1811(param_2);
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
        varData_1481.emitNet("__sdk:zones:" + param_1 + ":exit", param_2);
      }
      const varData_1812 = dataMap_1.get(param_1 + "-exit");
      if (varData_1812 === void 0) {
        return;
      }
      for (const varData_1813 of varData_1812) {
        try {
          varData_1813(param_2);
        } catch (err) {
          console.log(err);
        }
      }
    });
    var varData_1814 = (param_1, param_2) => {
      return dataSet_1.has(param_2 ? param_1 + "-" + param_2 : param_1);
    };
    var varData_1815 = (param_1, param_2) => {
      const varData_1816 = param_1 + "-enter";
      const varData_1817 = dataMap_1.get(varData_1816) ?? [];
      if (!dataMap_1.has(varData_1816)) {
        dataMap_1.set(varData_1816, varData_1817);
      }
      varData_1817.push(param_2);
    };
    var varData_1818 = (param_1, param_2) => {
      const varData_1819 = param_1 + "-exit";
      const varData_1820 = dataMap_1.get(varData_1819) ?? [];
      if (!dataMap_1.has(varData_1819)) {
        dataMap_1.set(varData_1819, varData_1820);
      }
      varData_1820.push(param_2);
    };
    var varData_1821 = (param_1, param_2, param_3, param_4, _0x110392 = {}) => {
      var varData_1822 = {
        ...param_4
      };
      varData_1822.data = _0x110392;
      varData_1822.id = param_1;
      const varData_1823 = varData_1822;
      varData_1823.data.id = param_1;
      exports["np-polyzone"].AddPolyZone(param_2, param_3, varData_1823);
    };
    var varData_1824 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x26dc56 = {}) => {
      var varData_1825 = {
        ...param_6
      };
      varData_1825.data = _0x26dc56;
      varData_1825.id = param_1;
      const varData_1826 = varData_1825;
      varData_1826.data.id = param_1;
      exports["np-polyzone"].AddBoxZone(param_2, param_3, param_4, param_5, varData_1826);
    };
    var varData_1827 = (param_1, param_2, param_3, param_4, param_5, _0x4871a3 = {}) => {
      var varData_1828 = {
        ...param_5
      };
      varData_1828.data = _0x4871a3;
      varData_1828.id = param_1;
      const varData_1829 = varData_1828;
      varData_1829.data.id = param_1;
      exports["np-polyzone"].AddCircleZone(param_2, param_3, param_4, varData_1829);
    };
    var varData_1830 = (param_1, param_2, param_3, param_4, _0x334bf5 = {}) => {
      var varData_1831 = {
        ...param_4
      };
      varData_1831.data = _0x334bf5;
      const varData_1832 = varData_1831;
      varData_1832.data.id = param_1;
      exports["np-polyzone"].AddEntityZone(param_2, param_3, varData_1832);
    };
    var varData_1833 = (param_1, param_2) => {
      exports["np-polyzone"].RemoveZone(param_1, param_2);
      dataSet_1.delete(param_1 + "-" + param_2);
      dataSet_2.delete(param_1);
    };
    var varData_1834 = (param_1) => {
      dataSet_2.add(param_1);
    };
    var varData_1835 = {
      isActive: varData_1814,
      onEnter: varData_1815,
      onExit: varData_1818,
      addPolyZone: varData_1821,
      addBoxZone: varData_1824,
      addCircleZone: varData_1827,
      addEntityZone: varData_1830,
      removeZone: varData_1833,
      setAsNetworked: varData_1834
    };
    var varData_1836 = varData_1835;
    var varData_1837 = (param_1, param_2, param_3, param_4) => {
      var varData_1838 = {
        id: param_1,
        coords: [param_2.x, param_2.y, param_2.z],
        options: param_3,
        context: param_4
      };
      const varData_1839 = varData_1838;
      globalThis.exports.interactions.AddInteraction(varData_1839);
    };
    var varData_1840 = (param_1, param_2, param_3, param_4) => {
      var varData_1841 = {
        id: param_1,
        options: param_3,
        context: param_4
      };
      const varData_1842 = varData_1841;
      globalThis.exports.interactions.AddInteractionByModel(param_2, varData_1842);
    };
    var varData_1843 = (param_1, param_2, param_3) => {
      var varData_1844 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_1845 = varData_1844;
      varData_1845.context.isPlayer = true;
      globalThis.exports.interactions.AddPedInteraction(varData_1845);
    };
    var varData_1846 = (param_1, param_2, param_3) => {
      var varData_1847 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_1848 = varData_1847;
      globalThis.exports.interactions.AddPedInteraction(varData_1848);
    };
    var varData_1849 = (param_1) => {
      return globalThis.exports.interactions.DoesInteractionExists(param_1);
    };
    var varData_1850 = (param_1, param_2, param_3) => {
      var varData_1851 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_1852 = varData_1851;
      globalThis.exports.interactions.AddVehicleInteraction(varData_1852);
    };
    var varData_1853 = (param_1) => {
      globalThis.exports.interactions.RemoveInteraction(param_1);
    };
    var varData_1854 = (param_1) => {
      globalThis.exports.interactions.RemoveVehicleInteraction(param_1);
    };
    var varData_1855 = (param_1) => {
      globalThis.exports.interactions.RemovePedInteraction(param_1);
    };
    var varData_1856 = (param_1, param_2, _0x2efceb = false, _0x4b1e43 = null, _0x2d02dc = true, _0xbfd12c = null) => {
      return new Promise((param_1_1) => {
        globalThis.exports["np-taskbar"].taskBar(param_1, param_2, _0x2efceb, _0x2d02dc, _0xbfd12c, false, param_1_1, _0x4b1e43 == null ? void 0 : _0x4b1e43.distance, _0x4b1e43 == null ? void 0 : _0x4b1e43.entity);
      });
    };
    var varData_1857 = (param_1, param_2, param_3, param_4) => {
      return new Promise((param_1_1) => {
        globalThis.exports["np-phone"].DoPhoneConfirmation(param_1, param_2, param_3, param_1_1, param_4);
      });
    };
    var varData_1858 = (param_1, param_2, _0x3bd81a = true, _0x4bdea0 = "home-screen") => {
      var varData_1859 = {
        action: "notification",
        target_app: _0x4bdea0,
        title: param_1,
        body: param_2,
        show_even_if_app_active: _0x3bd81a
      };
      var varData_1860 = {
        source: "np-nui",
        app: "phone",
        data: varData_1859
      };
      globalThis.exports["np-ui"].SendUIMessage(varData_1860);
    };
    var varData_1861 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x4067de = 0, _0x1c0e44 = true) => {
      SetTextColour(param_4[0], param_4[1], param_4[2], param_4[3]);
      if (_0x1c0e44) {
        SetTextOutline();
      }
      SetTextScale(0, param_5);
      SetTextFont(param_6 ?? 0);
      SetTextJustification(_0x4067de);
      if (_0x4067de === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(param_3 ?? "Dummy text");
      EndTextCommandDisplayText(param_1, param_2);
    };
    var varData_1862 = (param_1, param_2, param_3, param_4, _0x1fa3db = 4, _0x140e54 = true, param_7) => {
      SetDrawOrigin(param_1.x, param_1.y, param_1.z, 0);
      const varData_1863 = Math.max(varData_1401.getMapRange([0, 10], [0.4, 0.25], param_2), 0.1);
      varData_1861(0, 0, param_3, param_4, varData_1863, _0x1fa3db, 0, _0x140e54);
      if (param_7) {
        DrawRect(2e-3, param_7.height / 2, param_7.width, param_7.height, param_7.color[0], param_7.color[1], param_7.color[2], param_7.color[3]);
      }
      ClearDrawOrigin();
    };
    var varData_1864 = (param_1, param_2, param_3, param_4) => {
      globalThis.exports.contacts.open(param_1, param_2, param_3, param_4, true);
    };
    var varData_1865 = (param_1) => {
      globalThis.exports.hud.AddOrUpdateHudBar(param_1);
    };
    var varData_1866 = (param_1) => {
      globalThis.exports.hud.RemoveHudBar(param_1);
    };
    async function handleAction_120(param_1) {
      const varData_1867 = (param_1_1) => {
        for (const varData_1868 of param_1) {
          if (varData_1868._type === "number" && isNaN(param_1_1[varData_1868.name])) {
            return false;
          }
          if (varData_1868._type === "text" && typeof param_1_1[varData_1868.name] !== "string") {
            return false;
          }
        }
        return true;
      };
      return await varData_1431.Sync["np-ui"].OpenInputMenu(param_1, varData_1867);
    }
    async function handleAction_121(param_1, param_2) {
      const varData_1869 = {
        info: 1,
        error: 2
      };
      emit("DoLongHudText", param_1, varData_1869[param_2]);
    }
    var varData_1870 = {
      addInteraction: varData_1837,
      addInteractionByModel: varData_1840,
      addPlayerInteraction: varData_1843,
      addPedInteraction: varData_1846,
      addVehicleInteraction: varData_1850,
      removeInteraction: varData_1853,
      removePlayerInteraction: varData_1855,
      removePedInteraction: varData_1855,
      removeVehicleInteraction: varData_1854,
      doesInteractionExists: varData_1849,
      taskBar: varData_1856,
      phoneConfirmation: varData_1857,
      phoneNotification: varData_1858,
      drawText: varData_1861,
      drawText3D: varData_1862,
      customContact: varData_1864,
      AddOrUpdateHudBar: varData_1865,
      RemoveHudBar: varData_1866,
      openInputMenu: handleAction_120,
      displayNotification: handleAction_121
    };
    var varData_1871 = varData_1870;
    var varData_1872 = async (param_1) => {
      return globalThis.exports["np-heists"].BankMinigame(param_1);
    };
    var varData_1873 = async (param_1) => {
      return globalThis.exports["np-heists"].DDRMinigame(param_1);
    };
    var varData_1874 = async (param_1) => {
      return globalThis.exports.skillchecks.DirectionMinigame(param_1);
    };
    var varData_1875 = async () => {
      return globalThis.exports.skillchecks.DrillingMinigame();
    };
    var varData_1876 = async (param_1) => {
      return globalThis.exports.skillchecks.FlipMinigame(param_1);
    };
    var varData_1877 = async (param_1) => {
      return globalThis.exports.skillchecks.FloodMinigame(param_1);
    };
    var varData_1878 = async (param_1) => {
      return globalThis.exports.skillchecks.TaskBarMinigame(param_1.difficulty, param_1.gap, param_1.iterations, param_1.useReverse);
    };
    var varData_1879 = async (param_1) => {
      return globalThis.exports.skillchecks.MazeMinigame(param_1);
    };
    var varData_1880 = async (param_1) => {
      return globalThis.exports.skillchecks.CrackSafe(param_1.locks);
    };
    var varData_1881 = async (param_1) => {
      return globalThis.exports.skillchecks.SameMinigame(param_1);
    };
    var varData_1882 = async (param_1) => {
      return globalThis.exports["np-heists"].ThermiteMinigame(param_1);
    };
    var varData_1883 = async (param_1) => {
      return globalThis.exports.skillchecks.UntangleMinigame(param_1);
    };
    var varData_1884 = async (param_1) => {
      return globalThis.exports["np-heists"].VarMinigame(param_1);
    };
    var varData_1885 = async (param_1) => {
      return globalThis.exports.skillchecks.WordsMinigame(param_1);
    };
    var varData_1886 = async (param_1) => {
      return globalThis.exports.skillchecks.AlphabetMinigame(param_1);
    };
    var varData_1887 = async (param_1) => {
      return globalThis.exports.skillchecks.LockpickMinigame(param_1);
    };
    var varData_1888 = async (param_1) => {
      return globalThis.exports.skillchecks.PinCrackMinigame(param_1);
    };
    var varData_1889 = async (param_1) => {
      return globalThis.exports.skillchecks.TerminalMinigame(param_1);
    };
    var varData_1890 = async (param_1) => {
      return globalThis.exports.skillchecks.SequenceMinigame(param_1);
    };
    var varData_1891 = async (param_1) => {
      return globalThis.exports.skillchecks.SudokuMinigame(param_1);
    };
    var varData_1892 = async (param_1) => {
      return globalThis.exports.skillchecks.MemoryMinigame(param_1);
    };
    var varData_1893 = {
      BankMinigame: varData_1872,
      DDRMinigame: varData_1873,
      DirectionMinigame: varData_1874,
      DrillingMinigame: varData_1875,
      FlipMinigame: varData_1876,
      FloodMinigame: varData_1877,
      TaskBarMinigame: varData_1878,
      MazeMinigame: varData_1879,
      CrackSafe: varData_1880,
      SameMinigame: varData_1881,
      ThermiteMinigame: varData_1882,
      UntangleMinigame: varData_1883,
      VarMinigame: varData_1884,
      WordsMinigame: varData_1885,
      AlphabetMinigame: varData_1886,
      LockpickMinigame: varData_1887,
      PinCrackMinigame: varData_1888,
      TerminalMinigame: varData_1889,
      SequenceMinigame: varData_1890,
      SudokuMinigame: varData_1891,
      MemoryMinigame: varData_1892
    };
    var varData_1894 = varData_1893;
    var varData_1895 = {
      async hasPermission(param_1, _0x3a3583 = {}) {
        return await exports.permissions.hasPermission(param_1, _0x3a3583);
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
    var varData_1896 = {
      RegisterAction: (param_1, param_2, param_3) => {
        return varData_1431.Sync.contacts.RegisterAction(param_1, param_2, param_3);
      }
    };
    var varData_1897 = {
      RegisterEditorHandlerClient: async (param_1) => {
        return await globalThis.exports.editor.RegisterEditorHandlerClient(param_1);
      }
    };
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
    var varData_1908 = class {
      constructor(param_1) {
        varData_544(this, varData_1906);
        varData_544(this, varData_1898, void 0);
        varData_544(this, varData_1899, void 0);
        varData_544(this, varData_1900, void 0);
        varData_544(this, varData_1901, void 0);
        varData_544(this, varData_1902, void 0);
        varData_544(this, varData_1903, void 0);
        varData_544(this, varData_1904, false);
        varData_544(this, varData_1905, []);
        varData_545(this, varData_1898, param_1.codename);
        varData_545(this, varData_1899, param_1.version);
        varData_545(this, varData_1900, GetCurrentResourceName());
        varData_545(this, varData_1901, "nopixel-housing");
        emit("__npx_core:handshake", param_1, varData_547(this, varData_1906, varData_1907).bind(this));
        varData_1582.register("__npx_core:handshake", async (param_1_1) => {
          if (param_1_1.codename !== varData_543(this, varData_1898)) {
            return;
          }
          const varData_1909 = await varData_1418.waitForCondition(() => varData_543(this, varData_1904), 1e4);
          if (varData_1909) {
            return;
          }
          return {
            API_URL: varData_543(this, varData_1902),
            API_KEY: varData_543(this, varData_1903)
          };
        });
      }
      get codename() {
        return varData_543(this, varData_1898);
      }
      get version() {
        return varData_543(this, varData_1899);
      }
      get isReady() {
        return varData_543(this, varData_1904);
      }
      onReady(param_1) {
        if (varData_543(this, varData_1904)) {
          param_1();
        } else {
          varData_543(this, varData_1905).push(param_1);
        }
      }
    };
    varData_1898 = /* @__PURE__ */ new WeakMap();
    varData_1899 = /* @__PURE__ */ new WeakMap();
    varData_1900 = /* @__PURE__ */ new WeakMap();
    varData_1901 = /* @__PURE__ */ new WeakMap();
    varData_1902 = /* @__PURE__ */ new WeakMap();
    varData_1903 = /* @__PURE__ */ new WeakMap();
    varData_1904 = /* @__PURE__ */ new WeakMap();
    varData_1905 = /* @__PURE__ */ new WeakMap();
    varData_1906 = /* @__PURE__ */ new WeakSet();
    varData_1907 = async function(param_1) {
      varData_545(this, varData_1902, param_1.API_URL);
      varData_545(this, varData_1903, param_1.API_KEY);
      varData_545(this, varData_1904, true);
      for (const varData_1910 of varData_543(this, varData_1905)) {
        varData_1910();
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
    function handleAction_122(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_1911 = param_1[param_6](param_7);
        var varData_1912 = varData_1911.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_1911.done) {
        param_2(varData_1912);
      } else {
        Promise.resolve(varData_1912).then(param_4, param_5);
      }
    }
    function handleAction_123(param_1) {
      return function() {
        var varData_1913 = this;
        var varData_1914 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_1915 = param_1.apply(varData_1913, varData_1914);
          function handleAction_124(param_1_2) {
            handleAction_122(varData_1915, param_1_1, param_2, handleAction_124, handleAction_125, "next", param_1_2);
          }
          function handleAction_125(param_1_2) {
            handleAction_122(varData_1915, param_1_1, param_2, handleAction_124, handleAction_125, "throw", param_1_2);
          }
          handleAction_124(void 0);
        });
      };
    }
    function handleAction_126(param_1, param_2) {
      var varData_1916;
      var varData_1917;
      var varData_1918;
      var varData_1919;
      var varData_1920 = {
        label: 0,
        sent: function() {
          if (varData_1918[0] & 1) {
            throw varData_1918[1];
          }
          return varData_1918[1];
        },
        trys: [],
        ops: []
      };
      varData_1919 = {
        next: handleAction_127(0),
        throw: handleAction_127(1),
        return: handleAction_127(2)
      };
      if (typeof Symbol === "function") {
        varData_1919[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_1919;
      function handleAction_127(param_1_1) {
        return function(param_1_2) {
          return handleAction_128([param_1_1, param_1_2]);
        };
      }
      function handleAction_128(param_1_1) {
        if (varData_1916) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_1920) {
          try {
            varData_1916 = 1;
            if (varData_1917 && (varData_1918 = param_1_1[0] & 2 ? varData_1917.return : param_1_1[0] ? varData_1917.throw || ((varData_1918 = varData_1917.return) && varData_1918.call(varData_1917), 0) : varData_1917.next) && !(varData_1918 = varData_1918.call(varData_1917, param_1_1[1])).done) {
              return varData_1918;
            }
            varData_1917 = 0;
            if (varData_1918) {
              param_1_1 = [param_1_1[0] & 2, varData_1918.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_1918 = param_1_1;
                break;
              case 4:
                varData_1920.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_1920.label++;
                varData_1917 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_1920.ops.pop();
                varData_1920.trys.pop();
                continue;
              default:
                if (!(varData_1918 = varData_1920.trys, varData_1918 = varData_1918.length > 0 && varData_1918[varData_1918.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_1920 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_1918 || param_1_1[1] > varData_1918[0] && param_1_1[1] < varData_1918[3])) {
                  varData_1920.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_1920.label < varData_1918[1]) {
                  varData_1920.label = varData_1918[1];
                  varData_1918 = param_1_1;
                  break;
                }
                if (varData_1918 && varData_1920.label < varData_1918[2]) {
                  varData_1920.label = varData_1918[2];
                  varData_1920.ops.push(param_1_1);
                  break;
                }
                if (varData_1918[2]) {
                  varData_1920.ops.pop();
                }
                varData_1920.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_1920);
          } catch (err) {
            param_1_1 = [6, err];
            varData_1917 = 0;
          } finally {
            varData_1916 = varData_1918 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_1921 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_1921;
      }
    }
    var dataMap_2 = /* @__PURE__ */ new Map();
    var varData_1922 = (function() {
      var varData_1923 = handleAction_123(function(param_1, param_2) {
        var varData_1924;
        var varData_1925;
        return handleAction_126(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (param_2 == null || param_2 == void 0) {
                return [2];
              }
              if (dataMap_2.has(param_1)) {
                return [3, 2];
              }
              varData_1924 = dataMap_2.set;
              varData_1925 = [param_1];
              return [4, varData_1521.execute("np-housing:GetCurrentHousing", param_1)];
            case 1:
              varData_1924.apply(dataMap_2, varData_1925.concat([param_1_1.sent()]));
              return [3, 3];
            case 2:
              dataMap_2.set(param_1, param_2);
              param_1_1.label = 3;
            case 3:
              return [2];
          }
        });
      });
      return function _0x309180(param_1, param_2) {
        return varData_1923.apply(this, arguments);
      };
    })();
    var varData_1926 = (function() {
      var varData_1927 = handleAction_123(function(param_1) {
        var varData_1928;
        var varData_1929;
        return handleAction_126(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (dataMap_2.has(param_1)) {
                return [3, 2];
              }
              varData_1928 = dataMap_2.set;
              varData_1929 = [param_1];
              return [4, varData_1521.execute("np-housing:GetCurrentHousing", param_1)];
            case 1:
              varData_1928.apply(dataMap_2, varData_1929.concat([param_1_1.sent()]));
              param_1_1.label = 2;
            case 2:
              return [2, dataMap_2.get(param_1)];
          }
        });
      });
      return function _0x1789ea(param_1) {
        return varData_1927.apply(this, arguments);
      };
    })();
    ;
    function handleAction_129(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_1930 = param_1[param_6](param_7);
        var varData_1931 = varData_1930.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_1930.done) {
        param_2(varData_1931);
      } else {
        Promise.resolve(varData_1931).then(param_4, param_5);
      }
    }
    function handleAction_130(param_1) {
      return function() {
        var varData_1932 = this;
        var varData_1933 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_1934 = param_1.apply(varData_1932, varData_1933);
          function handleAction_131(param_1_2) {
            handleAction_129(varData_1934, param_1_1, param_2, handleAction_131, handleAction_132, "next", param_1_2);
          }
          function handleAction_132(param_1_2) {
            handleAction_129(varData_1934, param_1_1, param_2, handleAction_131, handleAction_132, "throw", param_1_2);
          }
          handleAction_131(void 0);
        });
      };
    }
    function handleAction_133(param_1, param_2) {
      var varData_1935;
      var varData_1936;
      var varData_1937;
      var varData_1938;
      var varData_1939 = {
        label: 0,
        sent: function() {
          if (varData_1937[0] & 1) {
            throw varData_1937[1];
          }
          return varData_1937[1];
        },
        trys: [],
        ops: []
      };
      varData_1938 = {
        next: handleAction_134(0),
        throw: handleAction_134(1),
        return: handleAction_134(2)
      };
      if (typeof Symbol === "function") {
        varData_1938[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_1938;
      function handleAction_134(param_1_1) {
        return function(param_1_2) {
          return handleAction_135([param_1_1, param_1_2]);
        };
      }
      function handleAction_135(param_1_1) {
        if (varData_1935) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_1939) {
          try {
            varData_1935 = 1;
            if (varData_1936 && (varData_1937 = param_1_1[0] & 2 ? varData_1936.return : param_1_1[0] ? varData_1936.throw || ((varData_1937 = varData_1936.return) && varData_1937.call(varData_1936), 0) : varData_1936.next) && !(varData_1937 = varData_1937.call(varData_1936, param_1_1[1])).done) {
              return varData_1937;
            }
            varData_1936 = 0;
            if (varData_1937) {
              param_1_1 = [param_1_1[0] & 2, varData_1937.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_1937 = param_1_1;
                break;
              case 4:
                varData_1939.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_1939.label++;
                varData_1936 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_1939.ops.pop();
                varData_1939.trys.pop();
                continue;
              default:
                if (!(varData_1937 = varData_1939.trys, varData_1937 = varData_1937.length > 0 && varData_1937[varData_1937.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_1939 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_1937 || param_1_1[1] > varData_1937[0] && param_1_1[1] < varData_1937[3])) {
                  varData_1939.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_1939.label < varData_1937[1]) {
                  varData_1939.label = varData_1937[1];
                  varData_1937 = param_1_1;
                  break;
                }
                if (varData_1937 && varData_1939.label < varData_1937[2]) {
                  varData_1939.label = varData_1937[2];
                  varData_1939.ops.push(param_1_1);
                  break;
                }
                if (varData_1937[2]) {
                  varData_1939.ops.pop();
                }
                varData_1939.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_1939);
          } catch (err) {
            param_1_1 = [6, err];
            varData_1936 = 0;
          } finally {
            varData_1935 = varData_1937 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_1940 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_1940;
      }
    }
    var varData_1941;
    (function(param_1) {
      param_1.smol_dick_realtors = "smol_dick_realtors";
      param_1.statecontracting = "statecontracting";
    })(varData_1941 || (varData_1941 = {}));
    function handleAction_136(param_1, param_2) {
      return handleAction_137.apply(this, arguments);
    }
    function handleAction_137() {
      handleAction_137 = handleAction_130(function(param_1, param_2) {
        var varData_1942;
        var varData_1943;
        return handleAction_133(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              var varData_1944 = {
                id: param_2
              };
              var varData_1945 = {
                id: param_1
              };
              var varData_1946 = {
                character: varData_1944,
                business: varData_1945
              };
              varData_1942 = varData_1946;
              return [4, varData_1521.execute("np-housing:isEmployedAtBusiness", varData_1942)];
            case 1:
              varData_1943 = param_1_1.sent();
              if (!varData_1943) {
                return [2, false];
              } else {
                return [2, true];
              }
              return [2];
          }
        });
      });
      return handleAction_137.apply(this, arguments);
    }
    function handleAction_138() {
      return handleAction_139.apply(this, arguments);
    }
    function handleAction_139() {
      handleAction_139 = handleAction_130(function() {
        var varData_1947;
        var varData_1948;
        var varData_1949;
        var varData_1950;
        var varData_1951;
        var varData_1952;
        return handleAction_133(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              varData_1947 = exports.isPed.isPed("cid");
              varData_1948 = [];
              for (varData_1949 in varData_1941) {
                varData_1948.push(varData_1949);
              }
              varData_1950 = 0;
              param_1.label = 1;
            case 1:
              if (!(varData_1950 < varData_1948.length)) {
                return [3, 4];
              }
              varData_1951 = varData_1948[varData_1950];
              return [4, handleAction_136(varData_1951, varData_1947)];
            case 2:
              varData_1952 = param_1.sent();
              if (varData_1952) {
                return [2, varData_1951];
              }
              param_1.label = 3;
            case 3:
              varData_1950++;
              return [3, 1];
            case 4:
              return [2];
          }
        });
      });
      return handleAction_139.apply(this, arguments);
    }
    ;
    var varData_1953 = globalThis.NPX;
    var varData_1954 = varData_1953.Hud;
    var varData_1955 = varData_1953.Utils;
    var varData_1956 = varData_1953.Zones;
    var varData_1957 = varData_1953.Events;
    var varData_1958 = varData_1953.Streaming;
    var varData_1959 = varData_1953.Procedures;
    var varData_1960 = varData_1953.Interface;
    const varData_1961 = null;
    ;
    function handleAction_140(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_1962 = param_1[param_6](param_7);
        var varData_1963 = varData_1962.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_1962.done) {
        param_2(varData_1963);
      } else {
        Promise.resolve(varData_1963).then(param_4, param_5);
      }
    }
    function handleAction_141(param_1) {
      return function() {
        var varData_1964 = this;
        var varData_1965 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_1966 = param_1.apply(varData_1964, varData_1965);
          function handleAction_142(param_1_2) {
            handleAction_140(varData_1966, param_1_1, param_2, handleAction_142, handleAction_143, "next", param_1_2);
          }
          function handleAction_143(param_1_2) {
            handleAction_140(varData_1966, param_1_1, param_2, handleAction_142, handleAction_143, "throw", param_1_2);
          }
          handleAction_142(void 0);
        });
      };
    }
    function handleAction_144(param_1, param_2) {
      var varData_1967;
      var varData_1968;
      var varData_1969;
      var varData_1970;
      var varData_1971 = {
        label: 0,
        sent: function() {
          if (varData_1969[0] & 1) {
            throw varData_1969[1];
          }
          return varData_1969[1];
        },
        trys: [],
        ops: []
      };
      varData_1970 = {
        next: handleAction_145(0),
        throw: handleAction_145(1),
        return: handleAction_145(2)
      };
      if (typeof Symbol === "function") {
        varData_1970[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_1970;
      function handleAction_145(param_1_1) {
        return function(param_1_2) {
          return handleAction_146([param_1_1, param_1_2]);
        };
      }
      function handleAction_146(param_1_1) {
        if (varData_1967) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_1971) {
          try {
            varData_1967 = 1;
            if (varData_1968 && (varData_1969 = param_1_1[0] & 2 ? varData_1968.return : param_1_1[0] ? varData_1968.throw || ((varData_1969 = varData_1968.return) && varData_1969.call(varData_1968), 0) : varData_1968.next) && !(varData_1969 = varData_1969.call(varData_1968, param_1_1[1])).done) {
              return varData_1969;
            }
            varData_1968 = 0;
            if (varData_1969) {
              param_1_1 = [param_1_1[0] & 2, varData_1969.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_1969 = param_1_1;
                break;
              case 4:
                varData_1971.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_1971.label++;
                varData_1968 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_1971.ops.pop();
                varData_1971.trys.pop();
                continue;
              default:
                if (!(varData_1969 = varData_1971.trys, varData_1969 = varData_1969.length > 0 && varData_1969[varData_1969.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_1971 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_1969 || param_1_1[1] > varData_1969[0] && param_1_1[1] < varData_1969[3])) {
                  varData_1971.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_1971.label < varData_1969[1]) {
                  varData_1971.label = varData_1969[1];
                  varData_1969 = param_1_1;
                  break;
                }
                if (varData_1969 && varData_1971.label < varData_1969[2]) {
                  varData_1971.label = varData_1969[2];
                  varData_1971.ops.push(param_1_1);
                  break;
                }
                if (varData_1969[2]) {
                  varData_1971.ops.pop();
                }
                varData_1971.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_1971);
          } catch (err) {
            param_1_1 = [6, err];
            varData_1968 = 0;
          } finally {
            varData_1967 = varData_1969 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_1972 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_1972;
      }
    }
    var varData_1973;
    (function(param_1) {
      param_1.creation = "creation";
      param_1.destroy = "destroy";
      param_1.price = "price";
      param_1.foreclosure = "foreclosure";
    })(varData_1973 || (varData_1973 = {}));
    var varData_1974 = (function() {
      var varData_1975 = handleAction_141(function(param_1, param_2) {
        var varData_1976;
        var varData_1977;
        var varData_1978;
        return handleAction_144(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_1976 = exports.isPed.isPed("cid");
              if (!varData_1973[param_2]) {
                return [3, 2];
              }
              return [4, handleAction_138()];
            case 1:
              varData_1977 = param_1_1.sent();
              if (varData_1977 == null) {
                return [2, false];
              }
              return [2, true];
            case 2:
              if (param_1 == null || param_1 == void 0) {
                return [2, false];
              }
              return [4, varData_1926(param_1)];
            case 3:
              varData_1978 = param_1_1.sent();
              if (varData_1978) {
                if (varData_1976 == varData_1978.owner) {
                  return [2, true];
                }
                if (varData_1978.permission && varData_1978.permission[param_2] == true) {
                  return [2, true];
                }
              }
              return [2, false];
          }
        });
      });
      return function _0x8944f0(param_1, param_2) {
        return varData_1975.apply(this, arguments);
      };
    })();
    var varData_1979 = varData_1955.cache((function() {
      var varData_1980 = handleAction_141(function(param_1) {
        var varData_1981;
        return handleAction_144(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, handleAction_138()];
            case 1:
              varData_1981 = param_1_1.sent();
              if (varData_1981 == null) {
                return [2, [false, false]];
              }
              return [2, [true, true]];
          }
        });
      });
      return function(param_1) {
        return varData_1980.apply(this, arguments);
      };
    })(), {
      timeToLive: 3e5
    });
    function handleAction_147() {
      return handleAction_148.apply(this, arguments);
    }
    function handleAction_148() {
      handleAction_148 = handleAction_141(function() {
        return handleAction_144(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_1979.get()];
            case 1:
              return [2, param_1.sent()];
          }
        });
      });
      return handleAction_148.apply(this, arguments);
    }
    globalThis.exports("isRealtorEmployment", handleAction_147);
    globalThis.exports("DoesCharacterHavePermissions", varData_1974);
    ;
    function handleAction_149(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_1982 = param_1[param_6](param_7);
        var varData_1983 = varData_1982.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_1982.done) {
        param_2(varData_1983);
      } else {
        Promise.resolve(varData_1983).then(param_4, param_5);
      }
    }
    function handleAction_150(param_1) {
      return function() {
        var varData_1984 = this;
        var varData_1985 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_1986 = param_1.apply(varData_1984, varData_1985);
          function handleAction_151(param_1_2) {
            handleAction_149(varData_1986, param_1_1, param_2, handleAction_151, handleAction_152, "next", param_1_2);
          }
          function handleAction_152(param_1_2) {
            handleAction_149(varData_1986, param_1_1, param_2, handleAction_151, handleAction_152, "throw", param_1_2);
          }
          handleAction_151(void 0);
        });
      };
    }
    function handleAction_153(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_154(param_1, param_2) {
      for (var numericVal_912 = 0; numericVal_912 < param_2.length; numericVal_912++) {
        var varData_1987 = param_2[numericVal_912];
        varData_1987.enumerable = varData_1987.enumerable || false;
        varData_1987.configurable = true;
        if ("value" in varData_1987) {
          varData_1987.writable = true;
        }
        Object.defineProperty(param_1, varData_1987.key, varData_1987);
      }
    }
    function handleAction_155(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_154(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_154(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_156(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_1988 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_1988);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_157(param_1, param_2) {
      var varData_1989;
      var varData_1990;
      var varData_1991;
      var varData_1992;
      var varData_1993 = {
        label: 0,
        sent: function() {
          if (varData_1991[0] & 1) {
            throw varData_1991[1];
          }
          return varData_1991[1];
        },
        trys: [],
        ops: []
      };
      varData_1992 = {
        next: handleAction_158(0),
        throw: handleAction_158(1),
        return: handleAction_158(2)
      };
      if (typeof Symbol === "function") {
        varData_1992[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_1992;
      function handleAction_158(param_1_1) {
        return function(param_1_2) {
          return handleAction_159([param_1_1, param_1_2]);
        };
      }
      function handleAction_159(param_1_1) {
        if (varData_1989) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_1993) {
          try {
            varData_1989 = 1;
            if (varData_1990 && (varData_1991 = param_1_1[0] & 2 ? varData_1990.return : param_1_1[0] ? varData_1990.throw || ((varData_1991 = varData_1990.return) && varData_1991.call(varData_1990), 0) : varData_1990.next) && !(varData_1991 = varData_1991.call(varData_1990, param_1_1[1])).done) {
              return varData_1991;
            }
            varData_1990 = 0;
            if (varData_1991) {
              param_1_1 = [param_1_1[0] & 2, varData_1991.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_1991 = param_1_1;
                break;
              case 4:
                varData_1993.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_1993.label++;
                varData_1990 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_1993.ops.pop();
                varData_1993.trys.pop();
                continue;
              default:
                if (!(varData_1991 = varData_1993.trys, varData_1991 = varData_1991.length > 0 && varData_1991[varData_1991.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_1993 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_1991 || param_1_1[1] > varData_1991[0] && param_1_1[1] < varData_1991[3])) {
                  varData_1993.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_1993.label < varData_1991[1]) {
                  varData_1993.label = varData_1991[1];
                  varData_1991 = param_1_1;
                  break;
                }
                if (varData_1991 && varData_1993.label < varData_1991[2]) {
                  varData_1993.label = varData_1991[2];
                  varData_1993.ops.push(param_1_1);
                  break;
                }
                if (varData_1991[2]) {
                  varData_1993.ops.pop();
                }
                varData_1993.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_1993);
          } catch (err) {
            param_1_1 = [6, err];
            varData_1990 = 0;
          } finally {
            varData_1989 = varData_1991 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_1994 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_1994;
      }
    }
    var varData_1995 = (function() {
      "use strict";
      "use strict";
      function handleAction_160() {
        handleAction_153(this, handleAction_160);
        handleAction_156(this, "queue", []);
        handleAction_156(this, "isRunning", 0);
        handleAction_156(this, "maxConcurrent", 2);
      }
      handleAction_155(handleAction_160, [{
        key: "enqueue",
        value: function _0x26da1f(param_1) {
          var varData_1996 = this;
          return handleAction_150(function() {
            return handleAction_157(this, function(param_1_1) {
              return [2, new Promise(function(param_1_2) {
                varData_1996.queue.push(handleAction_150(function() {
                  return handleAction_157(this, function(param_1_3) {
                    switch (param_1_3.label) {
                      case 0:
                        return [4, param_1()];
                      case 1:
                        param_1_3.sent();
                        param_1_2();
                        return [2];
                    }
                  });
                }));
                varData_1996.runQueue();
              })];
            });
          })();
        }
      }, {
        key: "runQueue",
        value: function _0x2455bb() {
          var varData_1997 = this;
          return handleAction_150(function() {
            var varData_1998;
            return handleAction_157(this, function(param_1) {
              switch (param_1.label) {
                case 0:
                  if (!(varData_1997.isRunning < varData_1997.maxConcurrent) || !(varData_1997.queue.length > 0)) {
                    return [3, 2];
                  }
                  varData_1998 = varData_1997.queue.splice(0, Math.min(varData_1997.maxConcurrent - varData_1997.isRunning, 2));
                  varData_1997.isRunning += varData_1998.length;
                  return [4, Promise.all(varData_1998.map((function() {
                    var varData_1999 = handleAction_150(function(param_1_1) {
                      return handleAction_157(this, function(param_1_2) {
                        switch (param_1_2.label) {
                          case 0:
                            return [4, param_1_1()];
                          case 1:
                            param_1_2.sent();
                            varData_1997.isRunning--;
                            varData_1997.runQueue();
                            return [2];
                        }
                      });
                    });
                    return function(param_1_1) {
                      return varData_1999.apply(this, arguments);
                    };
                  })()))];
                case 1:
                  param_1.sent();
                  param_1.label = 2;
                case 2:
                  return [2];
              }
            });
          })();
        }
      }]);
      return handleAction_160;
    })();
    ;
    function handleAction_161(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2000 = param_1[param_6](param_7);
        var varData_2001 = varData_2000.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2000.done) {
        param_2(varData_2001);
      } else {
        Promise.resolve(varData_2001).then(param_4, param_5);
      }
    }
    function handleAction_162(param_1) {
      return function() {
        var varData_2002 = this;
        var varData_2003 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2004 = param_1.apply(varData_2002, varData_2003);
          function handleAction_163(param_1_2) {
            handleAction_161(varData_2004, param_1_1, param_2, handleAction_163, handleAction_164, "next", param_1_2);
          }
          function handleAction_164(param_1_2) {
            handleAction_161(varData_2004, param_1_1, param_2, handleAction_163, handleAction_164, "throw", param_1_2);
          }
          handleAction_163(void 0);
        });
      };
    }
    function handleAction_165(param_1, param_2) {
      var varData_2005;
      var varData_2006;
      var varData_2007;
      var varData_2008;
      var varData_2009 = {
        label: 0,
        sent: function() {
          if (varData_2007[0] & 1) {
            throw varData_2007[1];
          }
          return varData_2007[1];
        },
        trys: [],
        ops: []
      };
      varData_2008 = {
        next: handleAction_166(0),
        throw: handleAction_166(1),
        return: handleAction_166(2)
      };
      if (typeof Symbol === "function") {
        varData_2008[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2008;
      function handleAction_166(param_1_1) {
        return function(param_1_2) {
          return handleAction_167([param_1_1, param_1_2]);
        };
      }
      function handleAction_167(param_1_1) {
        if (varData_2005) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2009) {
          try {
            varData_2005 = 1;
            if (varData_2006 && (varData_2007 = param_1_1[0] & 2 ? varData_2006.return : param_1_1[0] ? varData_2006.throw || ((varData_2007 = varData_2006.return) && varData_2007.call(varData_2006), 0) : varData_2006.next) && !(varData_2007 = varData_2007.call(varData_2006, param_1_1[1])).done) {
              return varData_2007;
            }
            varData_2006 = 0;
            if (varData_2007) {
              param_1_1 = [param_1_1[0] & 2, varData_2007.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2007 = param_1_1;
                break;
              case 4:
                varData_2009.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2009.label++;
                varData_2006 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2009.ops.pop();
                varData_2009.trys.pop();
                continue;
              default:
                if (!(varData_2007 = varData_2009.trys, varData_2007 = varData_2007.length > 0 && varData_2007[varData_2007.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2009 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2007 || param_1_1[1] > varData_2007[0] && param_1_1[1] < varData_2007[3])) {
                  varData_2009.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2009.label < varData_2007[1]) {
                  varData_2009.label = varData_2007[1];
                  varData_2007 = param_1_1;
                  break;
                }
                if (varData_2007 && varData_2009.label < varData_2007[2]) {
                  varData_2009.label = varData_2007[2];
                  varData_2009.ops.push(param_1_1);
                  break;
                }
                if (varData_2007[2]) {
                  varData_2009.ops.pop();
                }
                varData_2009.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2009);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2006 = 0;
          } finally {
            varData_2005 = varData_2007 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2010 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2010;
      }
    }
    var itemList_3 = ["set_np_housing_start_kit"];
    var dataMap_3 = /* @__PURE__ */ new Map();
    var varData_2011 = new varData_1995();
    var dataMap_4 = /* @__PURE__ */ new Map();
    function handleAction_168() {
      return handleAction_169.apply(this, arguments);
    }
    function handleAction_169() {
      handleAction_169 = handleAction_162(function() {
        return handleAction_165(this, function(param_1) {
          setImmediate(function() {
            for (var varData_2012 in globalThis.HOUSING_IPLS) {
              var varData_2013 = globalThis.HOUSING_IPLS[varData_2012];
              var strBuffer = "";
              strBuffer = strBuffer + varData_2013.zone + "," + varData_2013.street + "," + varData_2013.number;
              dataMap_3.set(strBuffer, varData_2013);
              RequestIpl(varData_2012);
              var varData_2014 = varData_2013.coords;
              var varData_2015 = GetInteriorAtCoords(varData_2014[0], varData_2014[1], varData_2014[2]);
              if (IsValidInterior(varData_2015)) {
                ActivateInteriorEntitySet(varData_2015, "set_np_housing_shell");
                SetInteriorEntitySetColor(varData_2015, "set_np_housing_shell", 0);
                ActivateInteriorEntitySet(varData_2015, "set_np_housing_start_kit");
                RefreshInterior(varData_2015);
              }
            }
          });
          return [2];
        });
      });
      return handleAction_169.apply(this, arguments);
    }
    function handleAction_170(param_1, param_2) {
      return handleAction_171.apply(this, arguments);
    }
    function handleAction_171() {
      handleAction_171 = handleAction_162(function(param_1, param_2) {
        return handleAction_165(this, function(param_1_1) {
          varData_2011.enqueue(handleAction_162(function() {
            return handleAction_165(this, function(param_1_2) {
              switch (param_1_2.label) {
                case 0:
                  return [4, handleAction_172(param_1, param_2)];
                case 1:
                  return [2, param_1_2.sent()];
              }
            });
          }));
          return [2];
        });
      });
      return handleAction_171.apply(this, arguments);
    }
    function handleAction_172(param_1, param_2) {
      return handleAction_173.apply(this, arguments);
    }
    function handleAction_173() {
      handleAction_173 = handleAction_162(function(param_1, param_2) {
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
        return handleAction_165(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1926(param_1)];
            case 1:
              varData_2016 = param_1_1.sent();
              if (!varData_2016) {
                console.log("Housing Error: Could not find housing data for entity set", param_1);
                return [2];
              }
              varData_2017 = dataMap_4.get(param_1);
              varData_2018 = false;
              if (!varData_2017) {
                varData_2017 = new Set(varData_2016.entitySets);
                varData_2018 = true;
              } else if (varData_2016.entitySets.length == 0) {
                varData_2018 = true;
              } else {
                for (var varData_2028 in varData_2016.entitySets) {
                  varData_2020 = varData_2016.entitySets[varData_2028];
                  if (!varData_2017.has(varData_2020)) {
                    varData_2018 = true;
                  }
                }
              }
              varData_2021 = dataMap_3.get(param_1);
              if (!varData_2021) {
                console.log("Housing Error: Could not find ipl data for entity set", param_1);
                return [2];
              }
              varData_2022 = varData_2021.coords;
              varData_2023 = GetInteriorAtCoords(varData_2022[0], varData_2022[1], varData_2022[2]);
              console.log("Housing: Attempting to change entity sets for ", param_1);
              if (!varData_2018) {
                return [3, 4];
              }
              if (varData_2023 != 0) {
                return [3, 3];
              }
              return [4, varData_1955.waitForCondition(function() {
                return GetInteriorAtCoords(varData_2022[0], varData_2022[1], varData_2022[2]) != 0;
              }, 1e4)];
            case 2:
              param_1_1.sent();
              varData_2023 = GetInteriorAtCoords(varData_2022[0], varData_2022[1], varData_2022[2]);
              if (varData_2023 == 0) {
                console.log("Housing Error: Could not find interior for entity set", param_1);
                return [2];
              }
              param_1_1.label = 3;
            case 3:
              console.log("Housing: Changing entity sets for " + param_1 + " to", varData_2016.entitySets);
              for (var varData_2029 in itemList_3) {
                varData_2025 = itemList_3[varData_2029];
                DeactivateInteriorEntitySet(varData_2023, varData_2025);
              }
              for (var varData_2030 in varData_2016.entitySets) {
                varData_2027 = itemList_3[varData_2030];
                ActivateInteriorEntitySet(varData_2023, varData_2027);
              }
              param_1_1.label = 4;
            case 4:
              varData_2017 = new Set(varData_2016.entitySets);
              dataMap_4.set(param_1, varData_2017);
              SetInteriorEntitySetColor(varData_2023, "set_np_housing_shell", varData_2016.shellColor);
              RefreshInterior(varData_2023);
              return [4, varData_1955.waitForCondition(function() {
                return IsInteriorReady(varData_2023);
              }, 1e4)];
            case 5:
              param_1_1.sent();
              if (param_2) {
                varData_1957.emit("np-editor:loadedHousingEntitySetsCheckForDoor", param_2);
              }
              return [2];
          }
        });
      });
      return handleAction_173.apply(this, arguments);
    }
    function handleAction_174(param_1, param_2) {
      return handleAction_175.apply(this, arguments);
    }
    function handleAction_175() {
      handleAction_175 = handleAction_162(function(param_1, param_2) {
        var varData_2031;
        var varData_2032;
        var varData_2033;
        return handleAction_165(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1926(param_1)];
            case 1:
              varData_2031 = param_1_1.sent();
              if (!varData_2031) {
                return [2];
              }
              return [4, varData_1974(param_1, "furniture")];
            case 2:
              if (!param_1_1.sent()) {
                return [2];
              }
              varData_2032 = varData_2031.entitySets;
              varData_2032.push(param_2);
              return [4, varData_1521.execute("np-housing:UpdateEntitySets", param_1, varData_2032)];
            case 3:
              varData_2033 = param_1_1.sent();
              if (varData_2033 != null) {
                varData_1922(param_1, varData_2033);
              }
              handleAction_170(param_1);
              return [2];
          }
        });
      });
      return handleAction_175.apply(this, arguments);
    }
    function handleAction_176(param_1, param_2) {
      return handleAction_177.apply(this, arguments);
    }
    function handleAction_177() {
      handleAction_177 = handleAction_162(function(param_1, param_2) {
        var varData_2034;
        var varData_2035;
        var varData_2036;
        var varData_2037;
        return handleAction_165(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1926(param_1)];
            case 1:
              varData_2034 = param_1_1.sent();
              if (!varData_2034) {
                return [2];
              }
              return [4, varData_1974(param_1, "furniture")];
            case 2:
              if (!param_1_1.sent()) {
                return [2];
              }
              for (var varData_2038 in varData_2034.entitySets) {
                varData_2036 = varData_2034.entitySets[varData_2038];
                if (varData_2036 == param_2) {
                  varData_2034.entitySets.splice(+varData_2038, 1);
                }
              }
              return [4, varData_1521.execute("np-housing:UpdateEntitySets", param_1, varData_2034.entitySets)];
            case 3:
              varData_2037 = param_1_1.sent();
              if (varData_2037 != null) {
                varData_1922(param_1, varData_2037);
              }
              handleAction_170(param_1);
              return [2];
          }
        });
      });
      return handleAction_177.apply(this, arguments);
    }
    function handleAction_178(param_1, param_2) {
      return handleAction_179.apply(this, arguments);
    }
    function handleAction_179() {
      handleAction_179 = handleAction_162(function(param_1, param_2) {
        var varData_2039;
        var varData_2040;
        return handleAction_165(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1926(param_1)];
            case 1:
              varData_2039 = param_1_1.sent();
              if (!varData_2039) {
                return [2];
              }
              return [4, varData_1974(param_1, "furniture")];
            case 2:
              if (!param_1_1.sent()) {
                return [2];
              }
              return [4, varData_1521.execute("np-housing:UpdateHousingColor", param_1, param_2)];
            case 3:
              varData_2040 = param_1_1.sent();
              if (varData_2040 != null) {
                varData_1922(param_1, varData_2040);
              }
              handleAction_170(param_1);
              return [2];
          }
        });
      });
      return handleAction_179.apply(this, arguments);
    }
    globalThis.exports("loadKnownEntitysetsForHouse", handleAction_170);
    ;
    function handleAction_180(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2041 = param_1[param_6](param_7);
        var varData_2042 = varData_2041.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2041.done) {
        param_2(varData_2042);
      } else {
        Promise.resolve(varData_2042).then(param_4, param_5);
      }
    }
    function handleAction_181(param_1) {
      return function() {
        var varData_2043 = this;
        var varData_2044 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2045 = param_1.apply(varData_2043, varData_2044);
          function handleAction_182(param_1_2) {
            handleAction_180(varData_2045, param_1_1, param_2, handleAction_182, handleAction_183, "next", param_1_2);
          }
          function handleAction_183(param_1_2) {
            handleAction_180(varData_2045, param_1_1, param_2, handleAction_182, handleAction_183, "throw", param_1_2);
          }
          handleAction_182(void 0);
        });
      };
    }
    function handleAction_184(param_1, param_2) {
      var varData_2046;
      var varData_2047;
      var varData_2048;
      var varData_2049;
      var varData_2050 = {
        label: 0,
        sent: function() {
          if (varData_2048[0] & 1) {
            throw varData_2048[1];
          }
          return varData_2048[1];
        },
        trys: [],
        ops: []
      };
      varData_2049 = {
        next: handleAction_185(0),
        throw: handleAction_185(1),
        return: handleAction_185(2)
      };
      if (typeof Symbol === "function") {
        varData_2049[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2049;
      function handleAction_185(param_1_1) {
        return function(param_1_2) {
          return handleAction_186([param_1_1, param_1_2]);
        };
      }
      function handleAction_186(param_1_1) {
        if (varData_2046) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2050) {
          try {
            varData_2046 = 1;
            if (varData_2047 && (varData_2048 = param_1_1[0] & 2 ? varData_2047.return : param_1_1[0] ? varData_2047.throw || ((varData_2048 = varData_2047.return) && varData_2048.call(varData_2047), 0) : varData_2047.next) && !(varData_2048 = varData_2048.call(varData_2047, param_1_1[1])).done) {
              return varData_2048;
            }
            varData_2047 = 0;
            if (varData_2048) {
              param_1_1 = [param_1_1[0] & 2, varData_2048.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2048 = param_1_1;
                break;
              case 4:
                varData_2050.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2050.label++;
                varData_2047 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2050.ops.pop();
                varData_2050.trys.pop();
                continue;
              default:
                if (!(varData_2048 = varData_2050.trys, varData_2048 = varData_2048.length > 0 && varData_2048[varData_2048.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2050 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2048 || param_1_1[1] > varData_2048[0] && param_1_1[1] < varData_2048[3])) {
                  varData_2050.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2050.label < varData_2048[1]) {
                  varData_2050.label = varData_2048[1];
                  varData_2048 = param_1_1;
                  break;
                }
                if (varData_2048 && varData_2050.label < varData_2048[2]) {
                  varData_2050.label = varData_2048[2];
                  varData_2050.ops.push(param_1_1);
                  break;
                }
                if (varData_2048[2]) {
                  varData_2050.ops.pop();
                }
                varData_2050.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2050);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2047 = 0;
          } finally {
            varData_2046 = varData_2048 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2051 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2051;
      }
    }
    var varData_2052 = (function() {
      var varData_2053 = handleAction_181(function() {
        return handleAction_184(this, function(param_1) {
          varData_1582.register("propertySettings:close", varData_2054);
          varData_1582.register("propertySettings:setColor", varData_2058);
          varData_1582.register("propertySettings:setEntitySet", varData_2060);
          varData_1582.register("propertySettings:addPermission", varData_2063);
          varData_1582.register("propertySettings:setPermission", varData_2068);
          varData_1582.register("propertySettings:removePermission", varData_2071);
          varData_1582.register("propertySettings:stopAlarm", varData_2109);
          varData_1582.register("propertySettings:updateSecurityState", varData_2074);
          varData_1582.register("propertySettings:updateSecurityAlert", varData_2077);
          return [2];
        });
      });
      return function _0x641834() {
        return varData_2053.apply(this, arguments);
      };
    })();
    var varData_2054 = (function() {
      var varData_2055 = handleAction_181(function() {
        return handleAction_184(this, function(param_1) {
          varData_1582.execute("propertySettings:interfacestate", "none");
          SetNuiFocus(false, false);
          return [2];
        });
      });
      return function _0x98ee23() {
        return varData_2055.apply(this, arguments);
      };
    })();
    var varData_2056 = (function() {
      var varData_2057 = handleAction_181(function(param_1, param_2) {
        return handleAction_184(this, function(param_1_1) {
          varData_1582.execute("propertySettings:interfacestate", param_1);
          varData_1582.execute("propertySettings:PermissionState", param_2);
          SetNuiFocus(true, true);
          return [2];
        });
      });
      return function _0x1bde21(param_1, param_2) {
        return varData_2057.apply(this, arguments);
      };
    })();
    var varData_2058 = (function() {
      var varData_2059 = handleAction_181(function(param_1, param_2, param_3) {
        return handleAction_184(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (param_3 != "housing") {
                return [3, 1];
              }
              handleAction_178(param_1, param_2);
              return [3, 3];
            case 1:
              if (param_3 != "apartments") {
                return [3, 3];
              }
              return [4, exports.editor.ChangeApartmentColor(param_2)];
            case 2:
              param_1_1.sent();
              param_1_1.label = 3;
            case 3:
              return [2];
          }
        });
      });
      return function _0x5bd398(param_1, param_2, param_3) {
        return varData_2059.apply(this, arguments);
      };
    })();
    var varData_2060 = (function() {
      var varData_2061 = handleAction_181(function(param_1, param_2, param_3) {
        var varData_2062;
        return handleAction_184(this, function(param_1_1) {
          switch (param_2) {
            case "stairs":
              varData_2062 = "set_np_housing_start_kit";
              break;
            default:
              break;
          }
          if (varData_2062) {
            if (param_3) {
              handleAction_174(param_1, varData_2062);
            } else {
              handleAction_176(param_1, varData_2062);
            }
          }
          return [2];
        });
      });
      return function _0x51fc68(param_1, param_2, param_3) {
        return varData_2061.apply(this, arguments);
      };
    })();
    var varData_2063 = (function() {
      var varData_2064 = handleAction_181(function(param_1, param_2) {
        var varData_2065;
        var varData_2066;
        return handleAction_184(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1974(param_1, "security")];
            case 1:
              if (!param_1_1.sent()) {
                return [2];
              }
              var varData_2067 = {
                character_id: param_2,
                furniture: true,
                inventory: true,
                general: true,
                id: -1
              };
              varData_2065 = varData_2067;
              return [4, varData_1521.execute("np-housing:CreatePermission", param_1, varData_2065)];
            case 2:
              varData_2066 = param_1_1.sent();
              if (varData_2066 == null) {
                return [3, 4];
              }
              return [4, varData_1922(param_1, varData_2066)];
            case 3:
              param_1_1.sent();
              varData_2082(param_1, false);
              param_1_1.label = 4;
            case 4:
              return [2];
          }
        });
      });
      return function _0x30b882(param_1, param_2) {
        return varData_2064.apply(this, arguments);
      };
    })();
    var varData_2068 = (function() {
      var varData_2069 = handleAction_181(function(param_1, param_2, param_3, param_4) {
        var varData_2070;
        return handleAction_184(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1974(param_1, "security")];
            case 1:
              if (!param_1_1.sent()) {
                return [2];
              }
              return [4, varData_1521.execute("np-housing:UpdatePermission", param_3, param_4, param_2, param_1)];
            case 2:
              varData_2070 = param_1_1.sent();
              if (varData_2070 == null) {
                return [3, 4];
              }
              return [4, varData_1922(param_1, varData_2070)];
            case 3:
              param_1_1.sent();
              varData_2082(param_1, false);
              param_1_1.label = 4;
            case 4:
              return [2];
          }
        });
      });
      return function _0x4c2320(param_1, param_2, param_3, param_4) {
        return varData_2069.apply(this, arguments);
      };
    })();
    var varData_2071 = (function() {
      var varData_2072 = handleAction_181(function(param_1, param_2) {
        var varData_2073;
        return handleAction_184(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1974(param_1, "security")];
            case 1:
              if (!param_1_1.sent()) {
                return [2];
              }
              return [4, varData_1521.execute("np-housing:RemovePermission", param_2, param_1)];
            case 2:
              varData_2073 = param_1_1.sent();
              if (varData_2073 != null) {
                varData_1922(param_1, varData_2073);
              }
              return [2];
          }
        });
      });
      return function _0x2ebb79(param_1, param_2) {
        return varData_2072.apply(this, arguments);
      };
    })();
    var varData_2074 = (function() {
      var varData_2075 = handleAction_181(function(param_1, param_2) {
        var varData_2076;
        return handleAction_184(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1974(param_1, "security")];
            case 1:
              if (!param_1_1.sent()) {
                return [2];
              }
              return [4, varData_1521.execute("np-housing:UpdateSecurityState", param_1, param_2)];
            case 2:
              varData_2076 = param_1_1.sent();
              if (varData_2076 != null) {
                varData_1922(param_1, varData_2076);
              }
              return [2];
          }
        });
      });
      return function _0x356ccf(param_1, param_2) {
        return varData_2075.apply(this, arguments);
      };
    })();
    var varData_2077 = (function() {
      var varData_2078 = handleAction_181(function(param_1, param_2, param_3) {
        var varData_2079;
        return handleAction_184(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1974(param_1, "security")];
            case 1:
              if (!param_1_1.sent()) {
                return [2];
              }
              return [4, varData_1521.execute("np-housing:UpdateSecurityAlert", param_1, param_2, param_3)];
            case 2:
              varData_2079 = param_1_1.sent();
              if (varData_2079 != null) {
                varData_1922(param_1, varData_2079);
              }
              return [2];
          }
        });
      });
      return function _0x232efe(param_1, param_2, param_3) {
        return varData_2078.apply(this, arguments);
      };
    })();
    var varData_2080 = (function() {
      var varData_2081 = handleAction_181(function(param_1) {
        return handleAction_184(this, function(param_1_1) {
          varData_1582.execute("propertySettings:setWallColor", param_1);
          return [2];
        });
      });
      return function _0x53954e(param_1) {
        return varData_2081.apply(this, arguments);
      };
    })();
    var varData_2082 = (function() {
      var varData_2083 = handleAction_181(function(param_1, param_2) {
        var varData_2084;
        return handleAction_184(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1521.execute("np-housing:getHousingPermissions", param_1, param_2)];
            case 1:
              varData_2084 = param_1_1.sent();
              if (!varData_2084) {
                return [2];
              }
              varData_1582.execute("propertySettings:knownPermissionHolders", varData_2084);
              return [2];
          }
        });
      });
      return function _0x3fb97f(param_1, param_2) {
        return varData_2083.apply(this, arguments);
      };
    })();
    var varData_2085 = (function() {
      var varData_2086 = handleAction_181(function(param_1, param_2) {
        var varData_2087;
        var varData_2088;
        var varData_2089;
        var varData_2090;
        var varData_2091;
        var varData_2092;
        var varData_2093;
        var varData_2094;
        return handleAction_184(this, function(param_1_1) {
          for (var varData_2095 in itemList_3) {
            varData_2088 = itemList_3[varData_2095];
            varData_2089 = false;
            for (var varData_2096 in param_1) {
              varData_2091 = param_1[varData_2096];
              if (varData_2088 == varData_2091) {
                varData_2089 = true;
              }
            }
            varData_2092 = dataMap_3.get(param_2);
            if (varData_2092) {
              varData_2093 = true;
              varData_2094 = varData_2092.entitysets;
              if (varData_2094 && !varData_2094.includes(varData_2088)) {
                varData_2093 = false;
              }
              if (!varData_2094) {
                varData_2093 = false;
              }
              switch (varData_2088) {
                case "set_np_housing_start_kit":
                  varData_1582.execute("propertySettings:setStairs", varData_2089, varData_2093);
                  break;
                default:
                  break;
              }
            }
          }
          return [2];
        });
      });
      return function _0x55a5aa(param_1, param_2) {
        return varData_2086.apply(this, arguments);
      };
    })();
    var varData_2097 = (function() {
      var varData_2098 = handleAction_181(function(param_1) {
        return handleAction_184(this, function(param_1_1) {
          varData_1582.execute("propertySettings:setStreet", param_1);
          return [2];
        });
      });
      return function _0x2b5122(param_1) {
        return varData_2098.apply(this, arguments);
      };
    })();
    var varData_2099 = (function() {
      var varData_2100 = handleAction_181(function(param_1) {
        var varData_2101;
        var varData_2102;
        return handleAction_184(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1926(param_1)];
            case 1:
              varData_2101 = param_1_1.sent();
              if (!varData_2101) {
                return [3, 3];
              }
              return [4, varData_1521.execute("np-housing:getPropertyConsumption", param_1)];
            case 2:
              varData_2102 = param_1_1.sent();
              varData_2082(param_1, false);
              varData_2080(varData_2101.shellColor);
              varData_2085(varData_2101.entitySets, param_1);
              varData_2097(param_1);
              varData_2103(varData_2102);
              varData_2105(varData_2101.security);
              varData_2107(varData_2101.copsAlert, varData_2101.ownerAlert);
              param_1_1.label = 3;
            case 3:
              return [2];
          }
        });
      });
      return function _0xff22e0(param_1) {
        return varData_2100.apply(this, arguments);
      };
    })();
    var varData_2103 = (function() {
      var varData_2104 = handleAction_181(function(param_1) {
        return handleAction_184(this, function(param_1_1) {
          varData_1582.execute("propertySettings:setConsumptionData", param_1);
          return [2];
        });
      });
      return function _0x590272(param_1) {
        return varData_2104.apply(this, arguments);
      };
    })();
    var varData_2105 = (function() {
      var varData_2106 = handleAction_181(function(param_1) {
        return handleAction_184(this, function(param_1_1) {
          varData_1582.execute("propertySettings:setSecurityState", param_1);
          return [2];
        });
      });
      return function _0x5d92c3(param_1) {
        return varData_2106.apply(this, arguments);
      };
    })();
    var varData_2107 = (function() {
      var varData_2108 = handleAction_181(function(param_1, param_2) {
        return handleAction_184(this, function(param_1_1) {
          varData_1582.execute("propertySettings:setSecurityData", param_1, param_2);
          return [2];
        });
      });
      return function _0xab54d2(param_1, param_2) {
        return varData_2108.apply(this, arguments);
      };
    })();
    var varData_2109 = (function() {
      var varData_2110 = handleAction_181(function(param_1) {
        return handleAction_184(this, function(param_1_1) {
          varData_1481.emitNet("editor:stopAlarm", param_1);
          return [2];
        });
      });
      return function _0x2950fc(param_1) {
        return varData_2110.apply(this, arguments);
      };
    })();
    ;
    function handleAction_187(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_912 = 0, loopIdx = new Array(param_2); numericVal_912 < param_2; numericVal_912++) {
        loopIdx[numericVal_912] = param_1[numericVal_912];
      }
      return loopIdx;
    }
    function handleAction_188(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_189(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2111 = param_1[param_6](param_7);
        var varData_2112 = varData_2111.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2111.done) {
        param_2(varData_2112);
      } else {
        Promise.resolve(varData_2112).then(param_4, param_5);
      }
    }
    function handleAction_190(param_1) {
      return function() {
        var varData_2113 = this;
        var varData_2114 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2115 = param_1.apply(varData_2113, varData_2114);
          function handleAction_191(param_1_2) {
            handleAction_189(varData_2115, param_1_1, param_2, handleAction_191, handleAction_192, "next", param_1_2);
          }
          function handleAction_192(param_1_2) {
            handleAction_189(varData_2115, param_1_1, param_2, handleAction_191, handleAction_192, "throw", param_1_2);
          }
          handleAction_191(void 0);
        });
      };
    }
    function handleAction_193(param_1, param_2) {
      var varData_2116 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2116 == null) {
        return;
      }
      var itemList_4 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2117;
      var varData_2118;
      try {
        for (varData_2116 = varData_2116.call(param_1); !(isEnabled_2 = (varData_2117 = varData_2116.next()).done); isEnabled_2 = true) {
          itemList_4.push(varData_2117.value);
          if (param_2 && itemList_4.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2118 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2116.return != null) {
            varData_2116.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2118;
          }
        }
      }
      return itemList_4;
    }
    function handleAction_194() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_195(param_1, param_2) {
      return handleAction_188(param_1) || handleAction_193(param_1, param_2) || handleAction_196(param_1, param_2) || handleAction_194();
    }
    function handleAction_196(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_187(param_1, param_2);
      }
      var varData_2119 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2119 === "Object" && param_1.constructor) {
        varData_2119 = param_1.constructor.name;
      }
      if (varData_2119 === "Map" || varData_2119 === "Set") {
        return Array.from(varData_2119);
      }
      if (varData_2119 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2119)) {
        return handleAction_187(param_1, param_2);
      }
    }
    function handleAction_197(param_1, param_2) {
      var varData_2120;
      var varData_2121;
      var varData_2122;
      var varData_2123;
      var varData_2124 = {
        label: 0,
        sent: function() {
          if (varData_2122[0] & 1) {
            throw varData_2122[1];
          }
          return varData_2122[1];
        },
        trys: [],
        ops: []
      };
      varData_2123 = {
        next: handleAction_198(0),
        throw: handleAction_198(1),
        return: handleAction_198(2)
      };
      if (typeof Symbol === "function") {
        varData_2123[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2123;
      function handleAction_198(param_1_1) {
        return function(param_1_2) {
          return handleAction_199([param_1_1, param_1_2]);
        };
      }
      function handleAction_199(param_1_1) {
        if (varData_2120) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2124) {
          try {
            varData_2120 = 1;
            if (varData_2121 && (varData_2122 = param_1_1[0] & 2 ? varData_2121.return : param_1_1[0] ? varData_2121.throw || ((varData_2122 = varData_2121.return) && varData_2122.call(varData_2121), 0) : varData_2121.next) && !(varData_2122 = varData_2122.call(varData_2121, param_1_1[1])).done) {
              return varData_2122;
            }
            varData_2121 = 0;
            if (varData_2122) {
              param_1_1 = [param_1_1[0] & 2, varData_2122.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2122 = param_1_1;
                break;
              case 4:
                varData_2124.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2124.label++;
                varData_2121 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2124.ops.pop();
                varData_2124.trys.pop();
                continue;
              default:
                if (!(varData_2122 = varData_2124.trys, varData_2122 = varData_2122.length > 0 && varData_2122[varData_2122.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2124 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2122 || param_1_1[1] > varData_2122[0] && param_1_1[1] < varData_2122[3])) {
                  varData_2124.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2124.label < varData_2122[1]) {
                  varData_2124.label = varData_2122[1];
                  varData_2122 = param_1_1;
                  break;
                }
                if (varData_2122 && varData_2124.label < varData_2122[2]) {
                  varData_2124.label = varData_2122[2];
                  varData_2124.ops.push(param_1_1);
                  break;
                }
                if (varData_2122[2]) {
                  varData_2124.ops.pop();
                }
                varData_2124.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2124);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2121 = 0;
          } finally {
            varData_2120 = varData_2122 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2125 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2125;
      }
    }
    var varData_2126 = (function() {
      var varData_2127 = handleAction_190(function(param_1, param_2) {
        var varData_2128;
        var varData_2129;
        var varData_2130;
        var varData_2131;
        return handleAction_197(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, globalThis.exports.editor.GetDatabaseIDFromEntity(param_2)];
            case 1:
              varData_2128 = param_1_1.sent();
              if (!varData_2128.entityDB || varData_2128.entityDB == "failed") {
                console.log("EDITOR ERROR: Failed to find Entity Object", param_2);
                return [2];
              }
              return [4, varData_1431.Async.keypad.HasAccess(varData_2128.entityDB)];
            case 2:
              varData_2129 = param_1_1.sent();
              if (!varData_2129) {
                return [2];
              }
              varData_2130 = `housing::${varData_2128.entityDB}::${varData_2128.furniture_id}`;
              varData_2131 = varData_1431.Sync.keypad.GetInventoryId(varData_2128.entityDB);
              globalThis.exports.inventory.OpenInventory([varData_2130, varData_2131], true);
              return [2];
          }
        });
      });
      return function _0x2b5165(param_1, param_2) {
        return varData_2127.apply(this, arguments);
      };
    })();
    var varData_2132 = (function() {
      var varData_2133 = handleAction_190(function(param_1, param_2) {
        var varData_2134;
        var varData_2135;
        var varData_2136;
        var varData_2137;
        return handleAction_197(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, globalThis.exports.editor.GetDatabaseIDFromEntity(param_2)];
            case 1:
              varData_2134 = param_1_1.sent();
              if (!varData_2134.entityDB || varData_2134.entityDB == "failed") {
                console.log("EDITOR ERROR: Failed to find Entity Object", param_2);
                return [2];
              }
              return [4, globalThis.exports.editor.GetHousingNameFromEntityID(param_2)];
            case 2:
              varData_2135 = param_1_1.sent();
              if (!varData_2135.entityDB) {
                return [2];
              }
              if (varData_2135.interactionType != "housing" || !varData_2135.fullName) {
                return [3, 3];
              }
              return [3, 5];
            case 3:
              return [4, varData_1521.execute("apartments:HasPermissions", varData_2135.fullName)];
            case 4:
              varData_2136 = param_1_1.sent();
              if (!varData_2136) {
                emit("DoLongHudText", "You do not have permissions to open this.", 2);
                return [2];
              }
              param_1_1.label = 5;
            case 5:
              varData_2137 = `furniture::${varData_2134.entityDB}`;
              globalThis.exports.inventory.OpenInventory([varData_2137], true);
              return [2];
          }
        });
      });
      return function _0x419bff(param_1, param_2) {
        return varData_2133.apply(this, arguments);
      };
    })();
    var varData_2138 = (function() {
      var varData_2139 = handleAction_190(function(param_1, param_2) {
        var varData_2140;
        var varData_2141;
        var varData_2142;
        var varData_2143;
        var varData_2144;
        var varData_2145;
        var varData_2146;
        return handleAction_197(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, globalThis.exports.editor.GetHousingNameFromEntityID(param_2)];
            case 1:
              varData_2140 = param_1_1.sent();
              if (!varData_2140.entityDB) {
                return [2];
              }
              varData_2141 = varData_2140.entityDB;
              if (varData_2140.interactionType != "housing") {
                return [3, 5];
              }
              varData_2141 = varData_2140.fullName.split(":")[2];
              return [4, varData_1974(varData_2141, "furniture")];
            case 2:
              if (!param_1_1.sent()) {
                emit("DoLongHudText", "You do not have permissions to open this.", 2);
                return [2];
              }
              varData_2142 = false;
              varData_2143 = "owner";
              return [4, varData_1974(varData_2141, "secruity")];
            case 3:
              if (!param_1_1.sent()) {
                varData_2142 = true;
                varData_2143 = "guest";
              }
              varData_2056("housing", varData_2143);
              return [4, varData_2099(varData_2141)];
            case 4:
              param_1_1.sent();
              return [3, 9];
            case 5:
              return [4, varData_1521.execute("apartments:HasPermissions", varData_2140.fullName)];
            case 6:
              varData_2144 = param_1_1.sent();
              if (!varData_2144) {
                emit("DoLongHudText", "You do not have permissions to open this.", 2);
                return [2];
              }
              return [4, globalThis.exports.editor.CurrentApartmentColor()];
            case 7:
              varData_2145 = param_1_1.sent();
              varData_2056("apartments", "owner");
              varData_2082(varData_2141, true);
              varData_2080(varData_2145);
              return [4, varData_1521.execute("apartments:getConsumption")];
            case 8:
              varData_2146 = param_1_1.sent();
              varData_2103(varData_2146);
              varData_2097("Apartments: " + varData_2141);
              param_1_1.label = 9;
            case 9:
              return [2];
          }
        });
      });
      return function _0x5c6023(param_1, param_2) {
        return varData_2139.apply(this, arguments);
      };
    })();
    var varData_2147 = (function() {
      var varData_2148 = handleAction_190(function(param_1, param_2) {
        var varData_2149;
        var varData_2150;
        var varData_2151;
        var varData_2152;
        var varData_2153;
        var varData_2154;
        var varData_2155;
        return handleAction_197(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, globalThis.exports.editor.GetHousingNameFromEntityID(param_2)];
            case 1:
              varData_2149 = param_1_1.sent();
              if (!varData_2149.entityDB) {
                return [2];
              }
              varData_2150 = varData_2149.entityDB;
              if (varData_2149.interactionType != "housing") {
                return [3, 3];
              }
              varData_2150 = varData_2149.fullName.split(":")[2];
              return [4, varData_1521.execute("np-housing:getGarageSpacesBought", varData_2150)];
            case 2:
              varData_2151 = handleAction_195.apply(void 0, [param_1_1.sent(), 2]);
              varData_2152 = varData_2151[0];
              varData_2153 = varData_2151[1];
              if (varData_2152 === -1) {
                emit("DoLongHudText", "Cannot get parking space info", 2);
                return [2];
              }
              varData_2154 = Math.pow(1.2, varData_2152 - 1) * 1e5;
              varData_2155 = [{
                title: `${varData_2152} Parking Spots`,
                description: "Amount of cars you can park in your first garage",
                icon: "car",
                disabled: true
              }, {
                title: `Buy Parking Spot ($${varData_2154.toLocaleString()})`,
                description: "Buy an additional parking spot",
                icon: "money-bill",
                action: "np-housing:buyParkingSpot",
                key: {
                  price: varData_2154,
                  garageName: varData_2153
                }
              }];
              varData_1431.Sync["np-ui"].showContextMenu(varData_2155);
              return [2];
            case 3:
              emit("DoLongHudText", "You cant do this right now.", 2);
              return [2];
          }
        });
      });
      return function _0x56f665(param_1, param_2) {
        return varData_2148.apply(this, arguments);
      };
    })();
    varData_1750.RegisterUICallback("np-housing:buyParkingSpot", (function() {
      var varData_2156 = handleAction_190(function(param_1, param_2) {
        var varData_2157;
        return handleAction_197(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              param_2({
                data: [],
                meta: {
                  ok: true,
                  message: ""
                }
              });
              return [4, varData_1418.wait(1e3)];
            case 1:
              param_1_1.sent();
              varData_2157 = [{
                title: `Confirm Purchase for ($${param_1.key.price.toLocaleString()})`,
                description: "Confirm your purchase",
                icon: "check",
                disabled: true
              }, {
                title: "Pay with cash",
                description: "Pay with cash",
                icon: "money-bill",
                action: "np-housing:confirmParkingSpotPurchase",
                key: {
                  option: "cash",
                  garageName: param_1.key.garageName
                }
              }, {
                title: "Pay with bank",
                description: "Pay with bank",
                icon: "building-columns",
                action: "np-housing:confirmParkingSpotPurchase",
                key: {
                  option: "bank",
                  garageName: param_1.key.garageName
                }
              }];
              varData_1431.Sync["np-ui"].showContextMenu(varData_2157);
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2156.apply(this, arguments);
      };
    })());
    varData_1750.RegisterUICallback("np-housing:confirmParkingSpotPurchase", (function() {
      var varData_2158 = handleAction_190(function(param_1, param_2) {
        var varData_2159;
        var varData_2160;
        var varData_2161;
        return handleAction_197(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              param_2({
                data: [],
                meta: {
                  ok: true,
                  message: ""
                }
              });
              return [4, varData_1521.execute("np-housing:confirmParkingSpotPurchase", param_1.key.option, param_1.key.garageName)];
            case 1:
              varData_2159 = handleAction_195.apply(void 0, [param_1_1.sent(), 2]);
              varData_2160 = varData_2159[0];
              varData_2161 = varData_2159[1];
              if (!varData_2160) {
                emit("DoLongHudText", `Failed to purchase parking spot: ${varData_2161}`, 2);
                return [2];
              }
              emit("DoLongHudText", "Parking spot purchased successfully");
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2158.apply(this, arguments);
      };
    })());
    ;
    function handleAction_200(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_912 = 0, loopIdx = new Array(param_2); numericVal_912 < param_2; numericVal_912++) {
        loopIdx[numericVal_912] = param_1[numericVal_912];
      }
      return loopIdx;
    }
    function handleAction_201(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_202(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2162 = param_1[param_6](param_7);
        var varData_2163 = varData_2162.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2162.done) {
        param_2(varData_2163);
      } else {
        Promise.resolve(varData_2163).then(param_4, param_5);
      }
    }
    function handleAction_203(param_1) {
      return function() {
        var varData_2164 = this;
        var varData_2165 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2166 = param_1.apply(varData_2164, varData_2165);
          function handleAction_204(param_1_2) {
            handleAction_202(varData_2166, param_1_1, param_2, handleAction_204, handleAction_205, "next", param_1_2);
          }
          function handleAction_205(param_1_2) {
            handleAction_202(varData_2166, param_1_1, param_2, handleAction_204, handleAction_205, "throw", param_1_2);
          }
          handleAction_204(void 0);
        });
      };
    }
    function handleAction_206(param_1, param_2) {
      var varData_2167 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2167 == null) {
        return;
      }
      var itemList_4 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2168;
      var varData_2169;
      try {
        for (varData_2167 = varData_2167.call(param_1); !(isEnabled_2 = (varData_2168 = varData_2167.next()).done); isEnabled_2 = true) {
          itemList_4.push(varData_2168.value);
          if (param_2 && itemList_4.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2169 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2167.return != null) {
            varData_2167.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2169;
          }
        }
      }
      return itemList_4;
    }
    function handleAction_207() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_208(param_1, param_2) {
      return handleAction_201(param_1) || handleAction_206(param_1, param_2) || handleAction_209(param_1, param_2) || handleAction_207();
    }
    function handleAction_209(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_200(param_1, param_2);
      }
      var varData_2170 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2170 === "Object" && param_1.constructor) {
        varData_2170 = param_1.constructor.name;
      }
      if (varData_2170 === "Map" || varData_2170 === "Set") {
        return Array.from(varData_2170);
      }
      if (varData_2170 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2170)) {
        return handleAction_200(param_1, param_2);
      }
    }
    function handleAction_210(param_1, param_2) {
      var varData_2171;
      var varData_2172;
      var varData_2173;
      var varData_2174;
      var varData_2175 = {
        label: 0,
        sent: function() {
          if (varData_2173[0] & 1) {
            throw varData_2173[1];
          }
          return varData_2173[1];
        },
        trys: [],
        ops: []
      };
      varData_2174 = {
        next: handleAction_211(0),
        throw: handleAction_211(1),
        return: handleAction_211(2)
      };
      if (typeof Symbol === "function") {
        varData_2174[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2174;
      function handleAction_211(param_1_1) {
        return function(param_1_2) {
          return handleAction_212([param_1_1, param_1_2]);
        };
      }
      function handleAction_212(param_1_1) {
        if (varData_2171) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2175) {
          try {
            varData_2171 = 1;
            if (varData_2172 && (varData_2173 = param_1_1[0] & 2 ? varData_2172.return : param_1_1[0] ? varData_2172.throw || ((varData_2173 = varData_2172.return) && varData_2173.call(varData_2172), 0) : varData_2172.next) && !(varData_2173 = varData_2173.call(varData_2172, param_1_1[1])).done) {
              return varData_2173;
            }
            varData_2172 = 0;
            if (varData_2173) {
              param_1_1 = [param_1_1[0] & 2, varData_2173.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2173 = param_1_1;
                break;
              case 4:
                varData_2175.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2175.label++;
                varData_2172 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2175.ops.pop();
                varData_2175.trys.pop();
                continue;
              default:
                if (!(varData_2173 = varData_2175.trys, varData_2173 = varData_2173.length > 0 && varData_2173[varData_2173.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2175 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2173 || param_1_1[1] > varData_2173[0] && param_1_1[1] < varData_2173[3])) {
                  varData_2175.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2175.label < varData_2173[1]) {
                  varData_2175.label = varData_2173[1];
                  varData_2173 = param_1_1;
                  break;
                }
                if (varData_2173 && varData_2175.label < varData_2173[2]) {
                  varData_2175.label = varData_2173[2];
                  varData_2175.ops.push(param_1_1);
                  break;
                }
                if (varData_2173[2]) {
                  varData_2175.ops.pop();
                }
                varData_2175.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2175);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2172 = 0;
          } finally {
            varData_2171 = varData_2173 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2176 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2176;
      }
    }
    var varData_2177 = (function() {
      var varData_2178 = handleAction_203(function(param_1, param_2, param_3, param_4) {
        return handleAction_210(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1974(param_2, "request")];
            case 1:
              if (!param_1_1.sent()) {
                return [2, {
                  message: "You do not have perms for this.",
                  pull: false
                }];
              }
              return [4, varData_1521.execute("np-housing:ReciveHousingRequestForTargetFromClient", param_2, param_1, param_3, param_4)];
            case 2:
              param_1_1.sent();
              return [2, {
                message: "Sent request",
                pull: false
              }];
          }
        });
      });
      return function _0x5c2de9(param_1, param_2, param_3, param_4) {
        return varData_2178.apply(this, arguments);
      };
    })();
    var varData_2179 = (function() {
      var varData_2180 = handleAction_203(function(param_1, param_2, param_3) {
        var varData_2181;
        var varData_2182;
        var varData_2183;
        var varData_2184;
        return handleAction_210(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              switch (param_2) {
                case "buyRequest":
                  return [3, 1];
                case "sellRequest":
                  return [3, 4];
                case "transferRequest":
                  return [3, 7];
              }
              return [3, 10];
            case 1:
              return [4, exports["np-phone"].DoPhoneConfirmation("Housing", "Buy " + param_1 + " For $" + param_3[0] + " from realtor.", "horse-head")];
            case 2:
              varData_2182 = param_1_1.sent();
              return [4, varData_1521.execute("np-housing:ReciveHousingConfirmationFromClient", param_1, varData_2182)];
            case 3:
              varData_2181 = param_1_1.sent();
              return [3, 11];
            case 4:
              return [4, exports["np-phone"].DoPhoneConfirmation("Housing", "Sell " + param_1 + " For $" + param_3[0] + " to realtor.", "horse-head")];
            case 5:
              varData_2183 = param_1_1.sent();
              return [4, varData_1521.execute("np-housing:ReciveHousingConfirmationFromClient", param_1, varData_2183)];
            case 6:
              varData_2181 = param_1_1.sent();
              return [3, 11];
            case 7:
              return [4, exports["np-phone"].DoPhoneConfirmation("Housing", "Sell " + param_1 + " For $" + param_3[0] + " to .", "horse-head")];
            case 8:
              varData_2184 = param_1_1.sent();
              return [4, varData_1521.execute("np-housing:ReciveHousingConfirmationFromClient", param_1, varData_2184)];
            case 9:
              varData_2181 = param_1_1.sent();
              return [3, 11];
            case 10:
              return [3, 11];
            case 11:
              if (varData_2181 != null) {
                varData_1922(param_1, varData_2181);
                return [2, {
                  message: "Got request",
                  pull: true
                }];
              }
              return [2, {
                message: "Failed Request",
                pull: false
              }];
          }
        });
      });
      return function _0x2d07d3(param_1, param_2, param_3) {
        return varData_2180.apply(this, arguments);
      };
    })();
    var varData_2185 = (function() {
      var varData_2186 = handleAction_203(function() {
        var varData_2187;
        var varData_2188;
        var varData_2189;
        var varData_2190;
        var varData_2191;
        return handleAction_210(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, exports.editor.GetModelNameFromCurrentIterior()];
            case 1:
              varData_2187 = param_1.sent();
              if (varData_2187 == null) {
                return [2];
              }
              varData_2188 = varData_2187.split(/\s*:\s*/)[2];
              if (varData_2188 != null) {
                return [3, 3];
              }
              return [4, varData_2529()];
            case 2:
              varData_2189 = param_1.sent();
              varData_2188 = varData_2189.data.fullName;
              if (!varData_2188) {
                return [2];
              }
              param_1.label = 3;
            case 3:
              return [4, varData_1974(varData_2188, "changelocks")];
            case 4:
              if (!param_1.sent()) {
                return [2];
              }
              TaskStartScenarioInPlace(PlayerPedId(), "WORLD_HUMAN_STAND_MOBILE", 0, true);
              return [4, new Promise(function(param_1_1) {
                return exports["np-taskbar"].taskBar(5e3, "Changing locks...", false, true, null, false, param_1_1);
              })];
            case 5:
              varData_2190 = param_1.sent();
              ClearPedTasksImmediately(PlayerPedId());
              ClearPedSecondaryTask(PlayerPedId());
              if (varData_2190 !== 100) {
                return [3, 7];
              }
              return [4, varData_1521.execute("np-housing:AlterLockOfHousing", varData_2188)];
            case 6:
              varData_2191 = param_1.sent();
              varData_1922(varData_2188, varData_2191);
              param_1.label = 7;
            case 7:
              return [2];
          }
        });
      });
      return function _0x2c7efd() {
        return varData_2186.apply(this, arguments);
      };
    })();
    var varData_2192 = (function() {
      var varData_2193 = handleAction_203(function(param_1, param_2) {
        var varData_2194;
        return handleAction_210(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1974(param_1, "price")];
            case 1:
              if (!param_1_1.sent()) {
                return [2, {
                  message: "Invalid Permission",
                  pull: false
                }];
              }
              return [4, varData_1521.execute("np-housing:AlterRealtorPrice", param_1, param_2)];
            case 2:
              varData_2194 = param_1_1.sent();
              if (varData_2194 != null) {
                varData_1922(param_1, varData_2194);
                return [2, {
                  message: "Set realtor Price",
                  pull: true
                }];
              }
              return [2, {
                message: "Failed to set realtor price",
                pull: false
              }];
          }
        });
      });
      return function _0xca57e5(param_1, param_2) {
        return varData_2193.apply(this, arguments);
      };
    })();
    var varData_2195 = (function() {
      var varData_2196 = handleAction_203(function(param_1, param_2) {
        var varData_2197;
        var varData_2198;
        var varData_2199;
        var varData_2200;
        return handleAction_210(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1974(param_1, "url")];
            case 1:
              if (!param_1_1.sent()) {
                return [2, {
                  message: "Invalid Permission",
                  pull: false
                }];
              }
              return [4, varData_1521.execute("np-housing:SetURL", param_1, param_2)];
            case 2:
              varData_2197 = handleAction_208.apply(void 0, [param_1_1.sent(), 2]);
              varData_2198 = varData_2197[0];
              varData_2199 = varData_2197[1];
              varData_2200 = false;
              if (varData_2198 != null) {
                varData_1922(param_1, varData_2198);
                varData_2200 = true;
              }
              var varData_2201 = {
                message: varData_2199,
                pull: varData_2200
              };
              return [2, varData_2201];
          }
        });
      });
      return function _0x4365a4(param_1, param_2) {
        return varData_2196.apply(this, arguments);
      };
    })();
    ;
    function handleAction_213(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_214(param_1, param_2) {
      for (var numericVal_912 = 0; numericVal_912 < param_2.length; numericVal_912++) {
        var varData_2202 = param_2[numericVal_912];
        varData_2202.enumerable = varData_2202.enumerable || false;
        varData_2202.configurable = true;
        if ("value" in varData_2202) {
          varData_2202.writable = true;
        }
        Object.defineProperty(param_1, varData_2202.key, varData_2202);
      }
    }
    function handleAction_215(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_214(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_214(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_216(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2203 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2203);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    var varData_2204 = (function() {
      "use strict";
      function handleAction_217(_0x7c5f29 = 0, _0x17ab29 = 0, _0x414965 = 0) {
        handleAction_213(this, handleAction_217);
        handleAction_216(this, "x", void 0);
        handleAction_216(this, "y", void 0);
        handleAction_216(this, "z", void 0);
        this.x = _0x7c5f29;
        this.y = _0x17ab29;
        this.z = _0x414965;
      }
      handleAction_215(handleAction_217, [{
        key: "setFromArray",
        value: function _0x4b5e40(param_1) {
          this.x = param_1[0];
          this.y = param_1[1];
          this.z = param_1[2];
          return this;
        }
      }, {
        key: "getArray",
        value: function _0x1498f4() {
          return [this.x, this.y, this.z];
        }
      }, {
        key: "add",
        value: function _0x2d67f3(param_1) {
          this.x += param_1.x;
          this.y += param_1.y;
          this.z += param_1.z;
          return this;
        }
      }, {
        key: "addScalar",
        value: function _0x1a9f17(param_1) {
          this.x += param_1;
          this.y += param_1;
          this.z += param_1;
          return this;
        }
      }, {
        key: "sub",
        value: function _0x6db329(param_1) {
          this.x -= param_1.x;
          this.y -= param_1.y;
          this.z -= param_1.z;
          return this;
        }
      }, {
        key: "addPlusScaler",
        value: function _0x5f255a(param_1, param_2) {
          this.x += param_1.x * param_2;
          this.y += param_1.y * param_2;
          this.z += param_1.z * param_2;
          return this;
        }
      }, {
        key: "subPlusScaler",
        value: function _0x5682ad(param_1, param_2) {
          this.x -= param_1.x * param_2;
          this.y -= param_1.y * param_2;
          this.z -= param_1.z * param_2;
          return this;
        }
      }, {
        key: "equals",
        value: function _0x169d38(param_1) {
          return this.x === param_1.x && this.y === param_1.y && this.z === param_1.z;
        }
      }, {
        key: "subScalar",
        value: function _0x4d5085(param_1) {
          this.x -= param_1;
          this.y -= param_1;
          this.z -= param_1;
          return this;
        }
      }, {
        key: "multiply",
        value: function _0x3dd439(param_1) {
          this.x *= param_1.x;
          this.y *= param_1.y;
          this.z *= param_1.z;
          return this;
        }
      }, {
        key: "multiplyScalar",
        value: function _0x3bc12e(param_1) {
          this.x *= param_1;
          this.y *= param_1;
          this.z *= param_1;
          return this;
        }
      }, {
        key: "divide",
        value: function _0x1be1a2(param_1) {
          this.x /= param_1.x;
          this.y /= param_1.y;
          this.z /= param_1.z;
          return this;
        }
      }, {
        key: "divideScalar",
        value: function _0x15a2ef(param_1) {
          this.x /= param_1;
          this.y /= param_1;
          this.z /= param_1;
          return this;
        }
      }, {
        key: "round",
        value: function _0x1eb46c() {
          this.x = Math.round(this.x);
          this.y = Math.round(this.y);
          this.z = Math.round(this.z);
          return this;
        }
      }, {
        key: "floor",
        value: function _0x5dc317() {
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          this.z = Math.floor(this.z);
          return this;
        }
      }, {
        key: "ceil",
        value: function _0x141f22() {
          this.x = Math.ceil(this.x);
          this.y = Math.ceil(this.y);
          this.z = Math.ceil(this.z);
          return this;
        }
      }, {
        key: "getCenter",
        value: function _0x4757f7(param_1) {
          return new handleAction_217((this.x += param_1.x) / 2, (this.y += param_1.y) / 2, (this.z += param_1.z) / 2);
        }
      }, {
        key: "getDistance",
        value: function _0x2ac511(param_1) {
          var itemList_4 = [this.x - param_1.x, this.y - param_1.y, this.z - param_1.z];
          var varData_2205 = itemList_4[0];
          var varData_2206 = itemList_4[1];
          var varData_2207 = itemList_4[2];
          return Math.sqrt(varData_2205 * varData_2205 + varData_2206 * varData_2206 + varData_2207 * varData_2207);
        }
      }, {
        key: "getDistanceFromArray",
        value: function _0x3c6a01(param_1) {
          var itemList_4 = [this.x - param_1[0], this.y - param_1[1], this.z - param_1[2]];
          var varData_2208 = itemList_4[0];
          var varData_2209 = itemList_4[1];
          var varData_2210 = itemList_4[2];
          return Math.sqrt(varData_2208 * varData_2208 + varData_2209 * varData_2209 + varData_2210 * varData_2210);
        }
      }, {
        key: "isCoordinateEqual",
        value: function _0x3962bc(param_1, param_2) {
          return param_1.equals(param_2);
        }
      }, {
        key: "toShortJson",
        value: function _0x1b7fd1(param_1) {
          var varData_2211 = Number(this.x.toFixed(param_1));
          var varData_2212 = Number(this.y.toFixed(param_1));
          var varData_2213 = Number(this.z.toFixed(param_1));
          return JSON.stringify([varData_2211, varData_2212, varData_2213]);
        }
      }], [{
        key: "fromArray",
        value: function _0x2f110c(param_1) {
          return new handleAction_217(param_1[0], param_1[1], param_1[2]);
        }
      }]);
      return handleAction_217;
    })();
    ;
    var varData_2214 = Object.defineProperty;
    var varData_2215 = (param_1, param_2) => {
      for (var varData_2216 in param_2) {
        varData_2214(param_1, varData_2216, {
          get: param_2[varData_2216],
          enumerable: true
        });
      }
    };
    var varData_2217 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_2218 = (param_1, param_2, param_3) => {
      varData_2217(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_2219 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_2220 = (param_1, param_2, param_3, param_4) => {
      varData_2217(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_2221 = (param_1, param_2, param_3) => {
      varData_2217(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_2222 = {
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
    var varData_2223 = {};
    var varData_2224 = {
      MathUtils: () => varData_2369
    };
    varData_2215(varData_2223, varData_2224);
    var varData_2225;
    var varData_2226;
    var varData_2227 = class _0x51e061 {
      constructor(param_1, param_2, param_3) {
        varData_2219(this, varData_2225);
        const varData_2228 = varData_2221(this, varData_2225, varData_2226).call(this, param_1, param_2, param_3);
        this.x = varData_2228.x;
        this.y = varData_2228.y;
        this.z = varData_2228.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_2229 = varData_2221(this, varData_2225, varData_2226).call(this, param_1, param_2, param_3);
        return this.x === varData_2229.x && this.y === varData_2229.y && this.z === varData_2229.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_2230 = varData_2221(this, varData_2225, varData_2226).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_2230.x * param_4 : varData_2230.x;
        this.y += param_4 ? varData_2230.y * param_4 : varData_2230.y;
        this.z += param_4 ? varData_2230.z * param_4 : varData_2230.z;
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
        const varData_2231 = varData_2221(this, varData_2225, varData_2226).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_2231.x * param_4 : varData_2231.x;
        this.y -= param_4 ? varData_2231.y * param_4 : varData_2231.y;
        this.z -= param_4 ? varData_2231.z * param_4 : varData_2231.z;
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
        const varData_2232 = varData_2221(this, varData_2225, varData_2226).call(this, param_1, param_2, param_3);
        this.x *= varData_2232.x;
        this.y *= varData_2232.y;
        this.z *= varData_2232.z;
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
        const varData_2233 = varData_2221(this, varData_2225, varData_2226).call(this, param_1, param_2, param_3);
        this.x /= varData_2233.x;
        this.y /= varData_2233.y;
        this.z /= varData_2233.z;
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
        const varData_2234 = varData_2221(this, varData_2225, varData_2226).call(this, param_1, param_2, param_3);
        return new _0x51e061((this.x + varData_2234.x) / 2, (this.y + varData_2234.y) / 2, (this.z + varData_2234.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x4d52ab, _0xad8bf8, _0x507c5f] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x4d52ab !== "number" || typeof _0xad8bf8 !== "number" || typeof _0x507c5f !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x2003ab, _0x250c3b, _0x42d07e] = [this.x - _0x4d52ab, this.y - _0xad8bf8, this.z - _0x507c5f];
        return Math.sqrt(_0x2003ab * _0x2003ab + _0x250c3b * _0x250c3b + _0x42d07e * _0x42d07e);
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
        var varData_2235 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_2235;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_2225 = /* @__PURE__ */ new WeakSet();
    varData_2226 = function(param_1, param_2, param_3) {
      let varData_2236 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_2227) {
        varData_2236 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_2237 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_2236 = varData_2237;
      } else if (typeof param_1 === "object") {
        varData_2236 = param_1;
      } else {
        var varData_2238 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_2236 = varData_2238;
      }
      if (typeof varData_2236.x !== "number" || typeof varData_2236.y !== "number" || typeof varData_2236.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_2236;
    };
    var varData_2239 = varData_2227;
    var varData_2240;
    var varData_2241;
    var varData_2242 = class {
      constructor(param_1) {
        varData_2219(this, varData_2240, void 0);
        varData_2219(this, varData_2241, void 0);
        varData_2220(this, varData_2241, param_1 ?? 5);
        varData_2220(this, varData_2240, /* @__PURE__ */ new Map());
      }
      setTTL(param_1) {
        varData_2220(this, varData_2241, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_2218(this, varData_2240).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_2218(this, varData_2241)) * 1e3
        });
        return this;
      }
      get(param_1, _0xd5e92b = false) {
        const varData_2243 = varData_2218(this, varData_2240).get(param_1);
        const varData_2244 = varData_2243 ? _0xd5e92b ? true : varData_2243.expiration > Date.now() : false;
        if (!varData_2243 || !varData_2244) {
          if (varData_2243) {
            varData_2218(this, varData_2240).delete(param_1);
          }
          return;
        }
        return varData_2243.value;
      }
      has(param_1, _0x34bf2f = false) {
        const varData_2245 = varData_2218(this, varData_2240).get(param_1);
        const varData_2246 = varData_2245 ? _0x34bf2f ? true : varData_2245.expiration > Date.now() : false;
        if (varData_2245 && !varData_2246) {
          varData_2218(this, varData_2240).delete(param_1);
        }
        return varData_2246;
      }
      delete(param_1) {
        return varData_2218(this, varData_2240).delete(param_1);
      }
      clear() {
        varData_2218(this, varData_2240).clear();
      }
      values(_0xd5f8ce = false) {
        const itemList_4 = [];
        const timestamp = Date.now();
        for (const varData_2247 of varData_2218(this, varData_2240).values()) {
          if (_0xd5f8ce || varData_2247.expiration > timestamp) {
            itemList_4.push(varData_2247.value);
          }
        }
        return itemList_4;
      }
      keys(_0xf8d7d6 = false) {
        const itemList_4 = [];
        const timestamp = Date.now();
        for (const [_0x5cbe49, _0x2767cb] of varData_2218(this, varData_2240).entries()) {
          if (_0xf8d7d6 || _0x2767cb.expiration > timestamp) {
            itemList_4.push(_0x5cbe49);
          }
        }
        return itemList_4;
      }
      entries(_0xffdea = false) {
        const itemList_4 = [];
        const timestamp = Date.now();
        for (const [_0x3a505d, _0x2e2a28] of varData_2218(this, varData_2240).entries()) {
          if (_0xffdea || _0x2e2a28.expiration > timestamp) {
            itemList_4.push([_0x3a505d, _0x2e2a28.value]);
          }
        }
        return itemList_4;
      }
    };
    varData_2240 = /* @__PURE__ */ new WeakMap();
    varData_2241 = /* @__PURE__ */ new WeakMap();
    var varData_2248;
    var varData_2249;
    var varData_2250;
    var varData_2251;
    var varData_2252;
    var varData_2253;
    var varData_2254;
    var varData_2255;
    var varData_2256;
    var varData_2257;
    var varData_2258;
    var varData_2259;
    var varData_2260;
    var varData_2261;
    var varData_2262;
    var varData_2263;
    var varData_2264;
    var varData_2265;
    var varData_2266;
    var varData_2267;
    var varData_2268;
    var varData_2269;
    var varData_2270 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x522bdb = 30, _0x474d95 = false) {
        varData_2219(this, varData_2260);
        varData_2219(this, varData_2262);
        varData_2219(this, varData_2264);
        varData_2219(this, varData_2266);
        varData_2219(this, varData_2268);
        varData_2219(this, varData_2248, void 0);
        varData_2219(this, varData_2249, void 0);
        varData_2219(this, varData_2250, void 0);
        varData_2219(this, varData_2251, void 0);
        varData_2219(this, varData_2252, void 0);
        varData_2219(this, varData_2253, void 0);
        varData_2219(this, varData_2254, void 0);
        varData_2219(this, varData_2255, void 0);
        varData_2219(this, varData_2256, void 0);
        varData_2219(this, varData_2257, void 0);
        varData_2219(this, varData_2258, void 0);
        varData_2219(this, varData_2259, void 0);
        varData_2220(this, varData_2248, param_1);
        varData_2220(this, varData_2249, param_4);
        varData_2220(this, varData_2250, param_5);
        varData_2220(this, varData_2251, param_2);
        varData_2220(this, varData_2252, param_3);
        varData_2220(this, varData_2253, _0x474d95);
        varData_2220(this, varData_2254, _0x522bdb);
        varData_2220(this, varData_2256, varData_2218(this, varData_2249).x / _0x522bdb);
        varData_2220(this, varData_2257, varData_2218(this, varData_2249).y / _0x522bdb);
        varData_2220(this, varData_2255, varData_2218(this, varData_2256) * varData_2218(this, varData_2257));
        varData_2220(this, varData_2258, varData_2221(this, varData_2260, varData_2261).call(this, varData_2218(this, varData_2248), varData_2218(this, varData_2254), varData_2218(this, varData_2256), varData_2218(this, varData_2257), varData_2218(this, varData_2253)));
        varData_2220(this, varData_2259, varData_2221(this, varData_2262, varData_2263).call(this, varData_2218(this, varData_2258), varData_2218(this, varData_2255)));
      }
      get cells() {
        return varData_2218(this, varData_2258);
      }
      get cellSize() {
        return varData_2218(this, varData_2254);
      }
      get cellWidth() {
        return varData_2218(this, varData_2256);
      }
      get cellHeight() {
        return varData_2218(this, varData_2257);
      }
      get gridArea() {
        return varData_2218(this, varData_2259);
      }
      get gridCoverage() {
        return varData_2218(this, varData_2259) / varData_2218(this, varData_2250) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_2271;
        const varData_2272 = param_1.x - varData_2218(this, varData_2251).x;
        const varData_2273 = param_1.y - varData_2218(this, varData_2251).y;
        const roundedVal = Math.floor(varData_2272 * varData_2218(this, varData_2254) / varData_2218(this, varData_2249).x);
        const roundedVal_1 = Math.floor(varData_2273 * varData_2218(this, varData_2254) / varData_2218(this, varData_2249).y);
        let varData_2274 = (varData_2271 = varData_2218(this, varData_2258)[roundedVal]) == null ? void 0 : varData_2271[roundedVal_1];
        if (!varData_2274 && varData_2218(this, varData_2253)) {
          varData_2274 = varData_2221(this, varData_2266, varData_2267).call(this, roundedVal, roundedVal_1, varData_2218(this, varData_2256), varData_2218(this, varData_2257), varData_2218(this, varData_2248));
          varData_2218(this, varData_2258)[roundedVal][roundedVal_1] = varData_2274;
          if (!varData_2274) {
            return false;
          }
          varData_2220(this, varData_2259, varData_2218(this, varData_2259) + varData_2218(this, varData_2255));
        }
        return varData_2274 ?? false;
      }
    };
    varData_2248 = /* @__PURE__ */ new WeakMap();
    varData_2249 = /* @__PURE__ */ new WeakMap();
    varData_2250 = /* @__PURE__ */ new WeakMap();
    varData_2251 = /* @__PURE__ */ new WeakMap();
    varData_2252 = /* @__PURE__ */ new WeakMap();
    varData_2253 = /* @__PURE__ */ new WeakMap();
    varData_2254 = /* @__PURE__ */ new WeakMap();
    varData_2255 = /* @__PURE__ */ new WeakMap();
    varData_2256 = /* @__PURE__ */ new WeakMap();
    varData_2257 = /* @__PURE__ */ new WeakMap();
    varData_2258 = /* @__PURE__ */ new WeakMap();
    varData_2259 = /* @__PURE__ */ new WeakMap();
    varData_2260 = /* @__PURE__ */ new WeakSet();
    varData_2261 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_2275 = {};
      for (let numericVal_912 = 0; numericVal_912 < param_2; numericVal_912++) {
        varData_2275[numericVal_912] = {};
        if (param_5) {
          continue;
        }
        for (let numericVal_92 = 0; numericVal_92 < param_2; numericVal_92++) {
          const varData_2276 = varData_2221(this, varData_2266, varData_2267).call(this, numericVal_912, numericVal_92, param_3, param_4, param_1);
          if (!varData_2276) {
            continue;
          }
          varData_2275[numericVal_912][numericVal_92] = true;
        }
      }
      return varData_2275;
    };
    varData_2262 = /* @__PURE__ */ new WeakSet();
    varData_2263 = function(param_1, param_2) {
      let numericVal_912 = 0;
      for (const varData_2277 in param_1) {
        for (const varData_2278 in param_1[varData_2277]) {
          numericVal_912 += param_2;
        }
      }
      return numericVal_912;
    };
    varData_2264 = /* @__PURE__ */ new WeakSet();
    varData_2265 = function(param_1, param_2, param_3, param_4) {
      const itemList_4 = [];
      const varData_2279 = param_1 * param_3 + varData_2218(this, varData_2251).x;
      const varData_2280 = param_2 * param_4 + varData_2218(this, varData_2251).y;
      itemList_4.push(new varData_2357(varData_2279, varData_2280));
      itemList_4.push(new varData_2357(varData_2279 + param_3, varData_2280));
      itemList_4.push(new varData_2357(varData_2279 + param_3, varData_2280 + param_4));
      itemList_4.push(new varData_2357(varData_2279, varData_2280 + param_4));
      return itemList_4;
    };
    varData_2266 = /* @__PURE__ */ new WeakSet();
    varData_2267 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_2281 = varData_2221(this, varData_2264, varData_2265).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_1 = false;
      for (const varData_2282 of varData_2281) {
        const varData_2283 = varData_2386.MathUtils.windingNumber(varData_2282, param_5);
        if (varData_2283 !== 0) {
          isDisabled_1 = true;
          break;
        }
      }
      if (!isDisabled_1) {
        return false;
      }
      for (let numericVal_912 = 0; numericVal_912 < varData_2281.length; numericVal_912++) {
        const varData_2284 = varData_2281[numericVal_912];
        const varData_2285 = varData_2281[(numericVal_912 + 1) % varData_2281.length];
        for (let numericVal_92 = 0; numericVal_92 < param_5.length; numericVal_92++) {
          const varData_2286 = param_5[numericVal_92];
          const varData_2287 = param_5[(numericVal_92 + 1) % param_5.length];
          if (varData_2221(this, varData_2268, varData_2269).call(this, varData_2284, varData_2285, varData_2286, varData_2287)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_2268 = /* @__PURE__ */ new WeakSet();
    varData_2269 = function(param_1, param_2, param_3, param_4) {
      const varData_2288 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_2289 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_2290 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_2288 === 0) {
        return varData_2289 === 0 && varData_2290 === 0;
      }
      const varData_2291 = varData_2289 / varData_2288;
      const varData_2292 = varData_2290 / varData_2288;
      return varData_2291 >= 0 && varData_2291 <= 1 && varData_2292 >= 0 && varData_2292 <= 1;
    };
    var varData_2293;
    var varData_2294;
    var varData_2295;
    var varData_2296;
    var varData_2297;
    var varData_2298;
    var varData_2299;
    var varData_2300;
    var varData_2301;
    var varData_2302;
    var varData_2303;
    var varData_2304;
    var varData_2305;
    var varData_2306;
    var varData_2307;
    var varData_2308;
    var varData_2309;
    var varData_2310;
    var varData_2311 = class {
      constructor(param_1, _0x280b5b = {}, _0x82d77a = {}) {
        varData_2219(this, varData_2301);
        varData_2219(this, varData_2303);
        varData_2219(this, varData_2305);
        varData_2219(this, varData_2307);
        varData_2219(this, varData_2309);
        varData_2219(this, varData_2293, void 0);
        varData_2219(this, varData_2294, void 0);
        varData_2219(this, varData_2295, void 0);
        varData_2219(this, varData_2296, void 0);
        varData_2219(this, varData_2297, void 0);
        varData_2219(this, varData_2298, void 0);
        varData_2219(this, varData_2299, void 0);
        varData_2219(this, varData_2300, void 0);
        varData_2220(this, varData_2293, varData_2386.getUUID());
        varData_2220(this, varData_2294, param_1);
        varData_2220(this, varData_2295, varData_2221(this, varData_2301, varData_2302).call(this, param_1));
        varData_2220(this, varData_2296, varData_2221(this, varData_2303, varData_2304).call(this, param_1));
        varData_2220(this, varData_2297, varData_2221(this, varData_2309, varData_2310).call(this, param_1));
        varData_2220(this, varData_2298, varData_2221(this, varData_2307, varData_2308).call(this, varData_2218(this, varData_2295), varData_2218(this, varData_2296)));
        varData_2220(this, varData_2299, varData_2221(this, varData_2305, varData_2306).call(this, varData_2218(this, varData_2295), varData_2218(this, varData_2296)));
        this.options = _0x280b5b;
        this.data = _0x82d77a;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_2220(this, varData_2300, new varData_2270(varData_2218(this, varData_2294), varData_2218(this, varData_2295), varData_2218(this, varData_2296), varData_2218(this, varData_2298), varData_2218(this, varData_2297), _0x280b5b.gridCellSize, _0x280b5b.useLazyGrid));
      }
      get id() {
        return varData_2218(this, varData_2293);
      }
      get center() {
        return varData_2218(this, varData_2299);
      }
      get min() {
        return varData_2218(this, varData_2295);
      }
      get max() {
        return varData_2218(this, varData_2296);
      }
      get points() {
        return [...varData_2218(this, varData_2294)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_2218(this, varData_2295).x || param_1.x > varData_2218(this, varData_2296).x) {
          return false;
        } else if (param_1.y < varData_2218(this, varData_2295).y || param_1.y > varData_2218(this, varData_2296).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_2239) {
          const varData_2312 = this.options.minZ ?? -Infinity;
          const varData_2313 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_2312 || param_1.z > varData_2313) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_2218(this, varData_2300)) {
          return varData_2218(this, varData_2300).isPointInsideGrid(param_1);
        }
        const varData_2314 = varData_2386.MathUtils.windingNumber(param_1, varData_2218(this, varData_2294));
        return varData_2314 !== 0;
      }
      addPoint(param_1) {
        varData_2218(this, varData_2294).push(param_1);
      }
      removePoint(param_1) {
        const varData_2315 = varData_2218(this, varData_2294).findIndex((param_1_1) => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_2315 === -1) {
          return;
        }
        varData_2218(this, varData_2294).splice(varData_2315, 1);
      }
      removeLastPoint() {
        varData_2218(this, varData_2294).pop();
      }
      recalculate() {
        varData_2220(this, varData_2295, varData_2221(this, varData_2301, varData_2302).call(this, varData_2218(this, varData_2294)));
        varData_2220(this, varData_2296, varData_2221(this, varData_2303, varData_2304).call(this, varData_2218(this, varData_2294)));
        varData_2220(this, varData_2297, varData_2221(this, varData_2309, varData_2310).call(this, varData_2218(this, varData_2294)));
        varData_2220(this, varData_2298, varData_2221(this, varData_2307, varData_2308).call(this, varData_2218(this, varData_2295), varData_2218(this, varData_2296)));
        varData_2220(this, varData_2299, varData_2221(this, varData_2305, varData_2306).call(this, varData_2218(this, varData_2295), varData_2218(this, varData_2296)));
        if (!this.options.useGrid) {
          return;
        }
        varData_2220(this, varData_2300, new varData_2270(varData_2218(this, varData_2294), varData_2218(this, varData_2295), varData_2218(this, varData_2296), varData_2218(this, varData_2298), varData_2218(this, varData_2297), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_2293 = /* @__PURE__ */ new WeakMap();
    varData_2294 = /* @__PURE__ */ new WeakMap();
    varData_2295 = /* @__PURE__ */ new WeakMap();
    varData_2296 = /* @__PURE__ */ new WeakMap();
    varData_2297 = /* @__PURE__ */ new WeakMap();
    varData_2298 = /* @__PURE__ */ new WeakMap();
    varData_2299 = /* @__PURE__ */ new WeakMap();
    varData_2300 = /* @__PURE__ */ new WeakMap();
    varData_2301 = /* @__PURE__ */ new WeakSet();
    varData_2302 = function(param_1) {
      let varData_2316 = Number.MAX_SAFE_INTEGER;
      let varData_2317 = Number.MAX_SAFE_INTEGER;
      for (const varData_2318 of param_1) {
        varData_2316 = Math.min(varData_2316, varData_2318.x);
        varData_2317 = Math.min(varData_2317, varData_2318.y);
      }
      return new varData_2357(varData_2316, varData_2317);
    };
    varData_2303 = /* @__PURE__ */ new WeakSet();
    varData_2304 = function(param_1) {
      let varData_2319 = Number.MIN_SAFE_INTEGER;
      let varData_2320 = Number.MIN_SAFE_INTEGER;
      for (const varData_2321 of param_1) {
        varData_2319 = Math.max(varData_2319, varData_2321.x);
        varData_2320 = Math.max(varData_2320, varData_2321.y);
      }
      return new varData_2357(varData_2319, varData_2320);
    };
    varData_2305 = /* @__PURE__ */ new WeakSet();
    varData_2306 = function(param_1, param_2) {
      const varData_2322 = param_2.add(param_1);
      return varData_2322.divideScalar(2);
    };
    varData_2307 = /* @__PURE__ */ new WeakSet();
    varData_2308 = function(param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_2309 = /* @__PURE__ */ new WeakSet();
    varData_2310 = function(param_1) {
      let numericVal_912 = 0;
      for (let numericVal_92 = 0, loopIdx = param_1.length - 1; numericVal_92 < param_1.length; loopIdx = numericVal_92++) {
        const varData_2323 = param_1[numericVal_92];
        const varData_2324 = param_1[loopIdx];
        numericVal_912 += varData_2323.x * varData_2324.y;
        numericVal_912 -= varData_2323.y * varData_2324.x;
      }
      return Math.abs(numericVal_912 / 2);
    };
    var varData_2325;
    var varData_2326;
    var varData_2327 = class _0x3a0655 {
      constructor(param_1, param_2) {
        varData_2219(this, varData_2325);
        const varData_2328 = varData_2221(this, varData_2325, varData_2326).call(this, param_1, param_2);
        this.x = varData_2328.x;
        this.y = varData_2328.y;
      }
      equals(param_1, param_2) {
        const varData_2329 = varData_2221(this, varData_2325, varData_2326).call(this, param_1, param_2);
        return this.x === varData_2329.x && this.y === varData_2329.y;
      }
      add(param_1, param_2, param_3) {
        const varData_2330 = varData_2221(this, varData_2325, varData_2326).call(this, param_1, param_2);
        const varData_2331 = this.x + (param_3 ? varData_2330.x * param_3 : varData_2330.x);
        const varData_2332 = this.y + (param_3 ? varData_2330.y * param_3 : varData_2330.y);
        return new _0x3a0655(varData_2331, varData_2332);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2333 = this.x + param_1;
        const varData_2334 = this.y + param_1;
        return new _0x3a0655(varData_2333, varData_2334);
      }
      sub(param_1, param_2, param_3) {
        const varData_2335 = varData_2221(this, varData_2325, varData_2326).call(this, param_1, param_2);
        const varData_2336 = this.x - (param_3 ? varData_2335.x * param_3 : varData_2335.x);
        const varData_2337 = this.y - (param_3 ? varData_2335.y * param_3 : varData_2335.y);
        return new _0x3a0655(varData_2336, varData_2337);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2338 = this.x - param_1;
        const varData_2339 = this.y - param_1;
        return new _0x3a0655(varData_2338, varData_2339);
      }
      multiply(param_1, param_2) {
        const varData_2340 = varData_2221(this, varData_2325, varData_2326).call(this, param_1, param_2);
        const varData_2341 = this.x * varData_2340.x;
        const varData_2342 = this.y * varData_2340.y;
        return new _0x3a0655(varData_2341, varData_2342);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2343 = this.x * param_1;
        const varData_2344 = this.y * param_1;
        return new _0x3a0655(varData_2343, varData_2344);
      }
      divide(param_1, param_2) {
        const varData_2345 = varData_2221(this, varData_2325, varData_2326).call(this, param_1, param_2);
        const varData_2346 = this.x / varData_2345.x;
        const varData_2347 = this.y / varData_2345.y;
        return new _0x3a0655(varData_2346, varData_2347);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2348 = this.x / param_1;
        const varData_2349 = this.y / param_1;
        return new _0x3a0655(varData_2348, varData_2349);
      }
      round() {
        const roundedVal = Math.round(this.x);
        const roundedVal_1 = Math.round(this.y);
        return new _0x3a0655(roundedVal, roundedVal_1);
      }
      floor() {
        const roundedVal = Math.floor(this.x);
        const roundedVal_1 = Math.floor(this.y);
        return new _0x3a0655(roundedVal, roundedVal_1);
      }
      ceil() {
        const varData_2350 = Math.ceil(this.x);
        const varData_2351 = Math.ceil(this.y);
        return new _0x3a0655(varData_2350, varData_2351);
      }
      getCenter(param_1, param_2) {
        const varData_2352 = varData_2221(this, varData_2325, varData_2326).call(this, param_1, param_2);
        return new _0x3a0655((this.x + varData_2352.x) / 2, (this.y + varData_2352.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0x118e12, _0x5aa718] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0x118e12 !== "number" || typeof _0x5aa718 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x562265, _0x4498b2] = [this.x - _0x118e12, this.y - _0x5aa718];
        return Math.sqrt(_0x562265 * _0x562265 + _0x4498b2 * _0x4498b2);
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
        var varData_2353 = {
          x: this.x,
          y: this.y
        };
        return varData_2353;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_2325 = /* @__PURE__ */ new WeakSet();
    varData_2326 = function(param_1, param_2) {
      let varData_2354 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_2327 || param_1 instanceof varData_2239) {
        varData_2354 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_2355 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_2354 = varData_2355;
      } else if (typeof param_1 === "object") {
        varData_2354 = param_1;
      } else {
        var varData_2356 = {
          x: param_1,
          y: param_2
        };
        varData_2354 = varData_2356;
      }
      if (typeof varData_2354.x !== "number" || typeof varData_2354.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_2354;
    };
    var varData_2357 = varData_2327;
    var varData_2358 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_2359 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_2360 = ([_0x7d5880, _0x3f65ab, _0x4b37eb], [_0x2a2aa7, _0x4a955a, _0x13d474]) => {
      const [_0x14c125, _0x3fa8d0, _0x5415d1] = [_0x7d5880 - _0x2a2aa7, _0x3f65ab - _0x4a955a, _0x4b37eb - _0x13d474];
      return Math.sqrt(_0x14c125 * _0x14c125 + _0x3fa8d0 * _0x3fa8d0 + _0x5415d1 * _0x5415d1);
    };
    var varData_2361 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_2362 = (param_1, param_2) => {
      if (param_1 instanceof varData_2357) {
        return param_1;
      } else if (param_1 instanceof varData_2239) {
        return new varData_2357(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_2357(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_2357(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_2357(param_1, param_2);
    };
    var varData_2363 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_2239) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_2239(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_2239(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_2239(param_1, param_2, param_3);
    };
    var varData_2364 = (param_1, param_2) => {
      let numericVal_912 = 0;
      const varData_2365 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let numericVal_92 = 0; numericVal_92 < param_2.length; numericVal_92++) {
        const varData_2366 = param_2[numericVal_92];
        const varData_2367 = param_2[(numericVal_92 + 1) % param_2.length];
        if (varData_2366.y <= param_1.y) {
          if (varData_2367.y > param_1.y && varData_2365(varData_2366, varData_2367, param_1) > 0) {
            numericVal_912++;
          }
        } else if (varData_2367.y <= param_1.y && varData_2365(varData_2366, varData_2367, param_1) < 0) {
          numericVal_912--;
        }
      }
      return numericVal_912;
    };
    var varData_2368 = {
      clamp: varData_2358,
      getMapRange: varData_2359,
      getDistance: varData_2360,
      getRandomNumber: varData_2361,
      parseVector2: varData_2362,
      parseVector3: varData_2363,
      windingNumber: varData_2364
    };
    var varData_2369 = varData_2368;
    var varData_2370 = {};
    var varData_2371 = {
      ArrUtils: () => varData_2375
    };
    varData_2215(varData_2370, varData_2371);
    var varData_2372 = (param_1) => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const roundedVal = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[roundedVal]] = [param_1[roundedVal], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_2373 = (param_1, param_2) => {
      const itemList_4 = [];
      for (let numericVal_912 = 0; numericVal_912 < param_2; numericVal_912++) {
        itemList_4.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return itemList_4;
    };
    var varData_2374 = {
      shuffleArray: varData_2372,
      getRandomElements: varData_2373
    };
    var varData_2375 = varData_2374;
    function handleAction_218(param_1, param_2) {
      const varData_2376 = "_";
      const varData_2377 = handleAction_219((param_1_1, param_2_1, ..._0x5c136e) => {
        return param_1(param_1_1, ..._0x5c136e);
      }, param_2);
      return {
        get: function(..._0x370e2d) {
          return varData_2377.get(varData_2376, ..._0x370e2d);
        },
        reset: function() {
          varData_2377.reset(varData_2376);
        }
      };
    }
    function handleAction_219(param_1, param_2) {
      const varData_2378 = param_2.timeToLive || 6e4;
      const varData_2379 = {};
      const varData_2380 = param_2.immediateResolve || false;
      async function handleAction_220(param_1_1, ..._0x41bd32) {
        let varData_2381 = varData_2379[param_1_1];
        if (!varData_2381) {
          varData_2381 = {
            value: null,
            lastUpdated: 0
          };
          varData_2379[param_1_1] = varData_2381;
        }
        const timestamp = Date.now();
        if (varData_2381.lastUpdated === 0 || timestamp - varData_2381.lastUpdated > varData_2378) {
          const [_0xa34faa, _0x67bf70] = await param_1(varData_2381, param_1_1, ..._0x41bd32);
          if (_0xa34faa) {
            varData_2381.lastUpdated = timestamp;
            varData_2381.value = _0x67bf70;
          }
          return _0x67bf70;
        }
        if (varData_2380) {
          return Promise.resolve(varData_2381.value);
        } else {
          return await new Promise((param_1_2) => setTimeout(() => param_1_2(varData_2381.value), 0));
        }
      }
      return {
        get: async function(param_1_1, ..._0x151e3d) {
          return await handleAction_220(param_1_1, ..._0x151e3d);
        },
        reset: function(param_1_1) {
          const varData_2382 = varData_2379[param_1_1];
          if (varData_2382) {
            varData_2382.lastUpdated = 0;
          }
        },
        clear: function() {
          for (const varData_2383 in varData_2379) {
            delete varData_2379[varData_2383];
          }
        }
      };
    }
    function handleAction_221() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_83();
      } else {
        return new varData_529(4).toString();
      }
    }
    function handleAction_222(param_1) {
      return varData_106(param_1, varData_106.URL);
    }
    function handleAction_223(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_2384 = Date.now() - timestamp > param_2;
          if (param_1() || varData_2384) {
            clearInterval(intervalId);
            return param_1_1(varData_2384);
          }
        }, 1);
      });
    }
    function handleAction_224(param_1) {
      return new Promise((param_1_1) => setTimeout(() => param_1_1(), param_1));
    }
    function handleAction_225() {
      return handleAction_224(0);
    }
    var varData_2385 = {
      cache: handleAction_218,
      cacheableMap: handleAction_219,
      waitForCondition: handleAction_223,
      getUUID: handleAction_221,
      getStringHash: handleAction_222,
      wait: handleAction_224,
      waitForNextFrame: handleAction_225,
      deflate: varData_519,
      inflate: varData_523,
      ...varData_2223,
      ...varData_2370
    };
    var varData_2386 = varData_2385;
    var varData_2387 = ((param_1) => {
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
    })(varData_2387 || {});
    ;
    function handleAction_226(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2388 = param_1[param_6](param_7);
        var varData_2389 = varData_2388.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2388.done) {
        param_2(varData_2389);
      } else {
        Promise.resolve(varData_2389).then(param_4, param_5);
      }
    }
    function handleAction_227(param_1) {
      return function() {
        var varData_2390 = this;
        var varData_2391 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2392 = param_1.apply(varData_2390, varData_2391);
          function handleAction_228(param_1_2) {
            handleAction_226(varData_2392, param_1_1, param_2, handleAction_228, handleAction_229, "next", param_1_2);
          }
          function handleAction_229(param_1_2) {
            handleAction_226(varData_2392, param_1_1, param_2, handleAction_228, handleAction_229, "throw", param_1_2);
          }
          handleAction_228(void 0);
        });
      };
    }
    function handleAction_230(param_1, param_2) {
      var varData_2393;
      var varData_2394;
      var varData_2395;
      var varData_2396;
      var varData_2397 = {
        label: 0,
        sent: function() {
          if (varData_2395[0] & 1) {
            throw varData_2395[1];
          }
          return varData_2395[1];
        },
        trys: [],
        ops: []
      };
      varData_2396 = {
        next: handleAction_231(0),
        throw: handleAction_231(1),
        return: handleAction_231(2)
      };
      if (typeof Symbol === "function") {
        varData_2396[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2396;
      function handleAction_231(param_1_1) {
        return function(param_1_2) {
          return handleAction_232([param_1_1, param_1_2]);
        };
      }
      function handleAction_232(param_1_1) {
        if (varData_2393) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2397) {
          try {
            varData_2393 = 1;
            if (varData_2394 && (varData_2395 = param_1_1[0] & 2 ? varData_2394.return : param_1_1[0] ? varData_2394.throw || ((varData_2395 = varData_2394.return) && varData_2395.call(varData_2394), 0) : varData_2394.next) && !(varData_2395 = varData_2395.call(varData_2394, param_1_1[1])).done) {
              return varData_2395;
            }
            varData_2394 = 0;
            if (varData_2395) {
              param_1_1 = [param_1_1[0] & 2, varData_2395.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2395 = param_1_1;
                break;
              case 4:
                varData_2397.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2397.label++;
                varData_2394 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2397.ops.pop();
                varData_2397.trys.pop();
                continue;
              default:
                if (!(varData_2395 = varData_2397.trys, varData_2395 = varData_2395.length > 0 && varData_2395[varData_2395.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2397 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2395 || param_1_1[1] > varData_2395[0] && param_1_1[1] < varData_2395[3])) {
                  varData_2397.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2397.label < varData_2395[1]) {
                  varData_2397.label = varData_2395[1];
                  varData_2395 = param_1_1;
                  break;
                }
                if (varData_2395 && varData_2397.label < varData_2395[2]) {
                  varData_2397.label = varData_2395[2];
                  varData_2397.ops.push(param_1_1);
                  break;
                }
                if (varData_2395[2]) {
                  varData_2397.ops.pop();
                }
                varData_2397.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2397);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2394 = 0;
          } finally {
            varData_2393 = varData_2395 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2398 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2398;
      }
    }
    var varData_2399 = (function() {
      var varData_2400 = handleAction_227(function() {
        var varData_2401;
        var varData_2402;
        var varData_2403;
        var varData_2404;
        var varData_2405;
        var varData_2406;
        var varData_2407;
        var varData_2408;
        return handleAction_230(this, function(param_1) {
          varData_2401 = [];
          for (var varData_2409 in globalThis.HOUSING_IPLS) {
            varData_2403 = globalThis.HOUSING_IPLS[varData_2409];
            varData_2404 = varData_2403.coords;
            varData_2405 = varData_2403.zone + "," + varData_2403.street + "," + varData_2403.number;
            varData_2406 = varData_2403.type || "";
            varData_2407 = varData_2403.boundsOverride || void 0;
            varData_2408 = {
              coords: new varData_2239(varData_2404),
              fullName: varData_2405,
              propertyType: varData_2406,
              street: varData_2403.street,
              zone: varData_2403.zone,
              number: varData_2403.number,
              boundsOverride: varData_2407
            };
            varData_2401.push(varData_2408);
          }
          return [2, varData_2401];
        });
      });
      return function _0x2867ba() {
        return varData_2400.apply(this, arguments);
      };
    })();
    globalThis.exports("GetHousingConfigDataGenerate", varData_2399);
    var varData_2410 = (function() {
      var varData_2411 = handleAction_227(function() {
        return handleAction_230(this, function(param_1) {
          return [2, globalThis.HOUSING_IPLS];
        });
      });
      return function _0x428073() {
        return varData_2411.apply(this, arguments);
      };
    })();
    globalThis.exports("GetHousingIPLConfig", varData_2410);
    ;
    function handleAction_233(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2412 = param_1[param_6](param_7);
        var varData_2413 = varData_2412.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2412.done) {
        param_2(varData_2413);
      } else {
        Promise.resolve(varData_2413).then(param_4, param_5);
      }
    }
    function handleAction_234(param_1) {
      return function() {
        var varData_2414 = this;
        var varData_2415 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2416 = param_1.apply(varData_2414, varData_2415);
          function handleAction_235(param_1_2) {
            handleAction_233(varData_2416, param_1_1, param_2, handleAction_235, handleAction_236, "next", param_1_2);
          }
          function handleAction_236(param_1_2) {
            handleAction_233(varData_2416, param_1_1, param_2, handleAction_235, handleAction_236, "throw", param_1_2);
          }
          handleAction_235(void 0);
        });
      };
    }
    function handleAction_237(param_1, param_2) {
      var varData_2417;
      var varData_2418;
      var varData_2419;
      var varData_2420;
      var varData_2421 = {
        label: 0,
        sent: function() {
          if (varData_2419[0] & 1) {
            throw varData_2419[1];
          }
          return varData_2419[1];
        },
        trys: [],
        ops: []
      };
      varData_2420 = {
        next: handleAction_238(0),
        throw: handleAction_238(1),
        return: handleAction_238(2)
      };
      if (typeof Symbol === "function") {
        varData_2420[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2420;
      function handleAction_238(param_1_1) {
        return function(param_1_2) {
          return handleAction_239([param_1_1, param_1_2]);
        };
      }
      function handleAction_239(param_1_1) {
        if (varData_2417) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2421) {
          try {
            varData_2417 = 1;
            if (varData_2418 && (varData_2419 = param_1_1[0] & 2 ? varData_2418.return : param_1_1[0] ? varData_2418.throw || ((varData_2419 = varData_2418.return) && varData_2419.call(varData_2418), 0) : varData_2418.next) && !(varData_2419 = varData_2419.call(varData_2418, param_1_1[1])).done) {
              return varData_2419;
            }
            varData_2418 = 0;
            if (varData_2419) {
              param_1_1 = [param_1_1[0] & 2, varData_2419.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2419 = param_1_1;
                break;
              case 4:
                varData_2421.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2421.label++;
                varData_2418 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2421.ops.pop();
                varData_2421.trys.pop();
                continue;
              default:
                if (!(varData_2419 = varData_2421.trys, varData_2419 = varData_2419.length > 0 && varData_2419[varData_2419.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2421 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2419 || param_1_1[1] > varData_2419[0] && param_1_1[1] < varData_2419[3])) {
                  varData_2421.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2421.label < varData_2419[1]) {
                  varData_2421.label = varData_2419[1];
                  varData_2419 = param_1_1;
                  break;
                }
                if (varData_2419 && varData_2421.label < varData_2419[2]) {
                  varData_2421.label = varData_2419[2];
                  varData_2421.ops.push(param_1_1);
                  break;
                }
                if (varData_2419[2]) {
                  varData_2421.ops.pop();
                }
                varData_2421.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2421);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2418 = 0;
          } finally {
            varData_2417 = varData_2419 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2422 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2422;
      }
    }
    function handleAction_240(param_1) {
      return handleAction_241.apply(this, arguments);
    }
    function handleAction_241() {
      handleAction_241 = handleAction_234(function(param_1) {
        return handleAction_237(this, function(param_1_1) {
          return [2, new Promise(function(param_1_2) {
            return setTimeout(function() {
              return param_1_2();
            }, param_1);
          })];
        });
      });
      return handleAction_241.apply(this, arguments);
    }
    function handleAction_242(param_1, param_2, param_3, param_4) {
      return new Promise(function(param_1_1) {
        exports["np-phone"].DoPhoneConfirmation(param_1, param_2, param_3, param_1_1, param_4);
      });
    }
    ;
    function handleAction_243(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_912 = 0, loopIdx = new Array(param_2); numericVal_912 < param_2; numericVal_912++) {
        loopIdx[numericVal_912] = param_1[numericVal_912];
      }
      return loopIdx;
    }
    function handleAction_244(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_245(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
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
    function handleAction_246(param_1) {
      return function() {
        var varData_2425 = this;
        var varData_2426 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2427 = param_1.apply(varData_2425, varData_2426);
          function handleAction_247(param_1_2) {
            handleAction_245(varData_2427, param_1_1, param_2, handleAction_247, handleAction_248, "next", param_1_2);
          }
          function handleAction_248(param_1_2) {
            handleAction_245(varData_2427, param_1_1, param_2, handleAction_247, handleAction_248, "throw", param_1_2);
          }
          handleAction_247(void 0);
        });
      };
    }
    function handleAction_249(param_1, param_2) {
      var varData_2428 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2428 == null) {
        return;
      }
      var itemList_4 = [];
      var isEnabled_2 = true;
      var isDisabled_1 = false;
      var varData_2429;
      var varData_2430;
      try {
        for (varData_2428 = varData_2428.call(param_1); !(isEnabled_2 = (varData_2429 = varData_2428.next()).done); isEnabled_2 = true) {
          itemList_4.push(varData_2429.value);
          if (param_2 && itemList_4.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_1 = true;
        varData_2430 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2428.return != null) {
            varData_2428.return();
          }
        } finally {
          if (isDisabled_1) {
            throw varData_2430;
          }
        }
      }
      return itemList_4;
    }
    function handleAction_250() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_251(param_1, param_2) {
      return handleAction_244(param_1) || handleAction_249(param_1, param_2) || handleAction_252(param_1, param_2) || handleAction_250();
    }
    function handleAction_252(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_243(param_1, param_2);
      }
      var varData_2431 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2431 === "Object" && param_1.constructor) {
        varData_2431 = param_1.constructor.name;
      }
      if (varData_2431 === "Map" || varData_2431 === "Set") {
        return Array.from(varData_2431);
      }
      if (varData_2431 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2431)) {
        return handleAction_243(param_1, param_2);
      }
    }
    function handleAction_253(param_1, param_2) {
      var varData_2432;
      var varData_2433;
      var varData_2434;
      var varData_2435;
      var varData_2436 = {
        label: 0,
        sent: function() {
          if (varData_2434[0] & 1) {
            throw varData_2434[1];
          }
          return varData_2434[1];
        },
        trys: [],
        ops: []
      };
      varData_2435 = {
        next: handleAction_254(0),
        throw: handleAction_254(1),
        return: handleAction_254(2)
      };
      if (typeof Symbol === "function") {
        varData_2435[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2435;
      function handleAction_254(param_1_1) {
        return function(param_1_2) {
          return handleAction_255([param_1_1, param_1_2]);
        };
      }
      function handleAction_255(param_1_1) {
        if (varData_2432) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2436) {
          try {
            varData_2432 = 1;
            if (varData_2433 && (varData_2434 = param_1_1[0] & 2 ? varData_2433.return : param_1_1[0] ? varData_2433.throw || ((varData_2434 = varData_2433.return) && varData_2434.call(varData_2433), 0) : varData_2433.next) && !(varData_2434 = varData_2434.call(varData_2433, param_1_1[1])).done) {
              return varData_2434;
            }
            varData_2433 = 0;
            if (varData_2434) {
              param_1_1 = [param_1_1[0] & 2, varData_2434.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2434 = param_1_1;
                break;
              case 4:
                varData_2436.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2436.label++;
                varData_2433 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2436.ops.pop();
                varData_2436.trys.pop();
                continue;
              default:
                if (!(varData_2434 = varData_2436.trys, varData_2434 = varData_2434.length > 0 && varData_2434[varData_2434.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2436 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2434 || param_1_1[1] > varData_2434[0] && param_1_1[1] < varData_2434[3])) {
                  varData_2436.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2436.label < varData_2434[1]) {
                  varData_2436.label = varData_2434[1];
                  varData_2434 = param_1_1;
                  break;
                }
                if (varData_2434 && varData_2436.label < varData_2434[2]) {
                  varData_2436.label = varData_2434[2];
                  varData_2436.ops.push(param_1_1);
                  break;
                }
                if (varData_2434[2]) {
                  varData_2436.ops.pop();
                }
                varData_2436.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2436);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2433 = 0;
          } finally {
            varData_2432 = varData_2434 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2437 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2437;
      }
    }
    function handleAction_256() {
      return handleAction_257.apply(this, arguments);
    }
    function handleAction_257() {
      handleAction_257 = handleAction_246(function() {
        return handleAction_253(this, function(param_1) {
          return [2];
        });
      });
      return handleAction_257.apply(this, arguments);
    }
    on("housing:spawnIntoHousing", (function() {
      var varData_2438 = handleAction_246(function(param_1) {
        var varData_2439;
        var varData_2440;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2439 = param_1.info;
              varData_2440 = PlayerPedId();
              FreezeEntityPosition(varData_2440, true);
              SetEntityCoords(varData_2440, param_1.pos.x, param_1.pos.y, param_1.pos.z, false, false, false, false);
              SetEntityHeading(varData_2440, param_1.heading);
              var varData_2441 = {
                type: "housing",
                info: varData_2439,
                pos: param_1.pos
              };
              varData_1481.emitNet("spawn:spawnChosen", varData_2441);
              return [4, globalThis.exports.editor.waitForHousingToLoad(0, param_1.pos, varData_2439)];
            case 1:
              param_1_1.sent();
              return [2];
          }
        });
      });
      return function(param_1) {
        return varData_2438.apply(this, arguments);
      };
    })());
    varData_1481.on("np-housing:viewStash", (function() {
      var varData_2442 = handleAction_246(function(param_1, param_2) {
        return handleAction_253(this, function(param_1_1) {
          if (!param_1) {
            return [2];
          }
          if (param_1.storageType != "furniture") {
            varData_2126(param_1, param_2);
          } else {
            varData_2132(param_1, param_2);
          }
          return [2];
        });
      });
      return function(param_1, param_2) {
        return varData_2442.apply(this, arguments);
      };
    })());
    varData_1481.on("np-housing:unlockStash", (function() {
      var varData_2443 = handleAction_246(function(param_1, param_2) {
        var varData_2444;
        var varData_2445;
        var varData_2446;
        var varData_2447;
        var varData_2448;
        var varData_2449;
        var varData_2450;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2444 = varData_1431.Sync.isPed.isPed("myjob");
              return [4, varData_1431.Sync.editor.GetCurrentProperty()];
            case 1:
              varData_2445 = param_1_1.sent();
              varData_2446 = false;
              if (!varData_2445) {
                return [3, 3];
              }
              return [4, varData_1974(varData_2445, "ownerPropertyCheck")];
            case 2:
              varData_2447 = param_1_1.sent();
              if (varData_2447) {
                varData_2446 = true;
              }
              param_1_1.label = 3;
            case 3:
              if (varData_2444 !== "police" && varData_2444 !== "dib" && !varData_2446) {
                emit("DoLongHudText", "You need to be a police officer or owner to unlock this.", 2);
                return [2];
              }
              if (!param_2) {
                return [2];
              }
              return [4, varData_1431.Sync.editor.GetEntityDatabaseID(param_2)];
            case 4:
              varData_2448 = param_1_1.sent();
              if (!varData_2448 || varData_2448 === "") {
                return [2];
              }
              emit("animation:runtextanim", "search");
              return [4, varData_1871.taskBar(5e3, "Unlocking...")];
            case 5:
              varData_2449 = param_1_1.sent();
              emit("animation:runtextanim", "c");
              if (varData_2449 !== 100) {
                emit("DoLongHudText", "Failed to unlock.", 2);
                return [2];
              }
              varData_2450 = varData_1431.Sync.keypad.GetInventoryId(varData_2448);
              varData_1589.OpenInventory([varData_2450], true);
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2443.apply(this, arguments);
      };
    })());
    varData_1481.on("np-housing:viewSettings", (function() {
      var varData_2451 = handleAction_246(function(param_1, param_2) {
        return handleAction_253(this, function(param_1_1) {
          varData_2138(param_1, param_2);
          return [2];
        });
      });
      return function(param_1, param_2) {
        return varData_2451.apply(this, arguments);
      };
    })());
    onNet("np-housing:AttemptToChangeLocks", handleAction_246(function() {
      return handleAction_253(this, function(param_1) {
        varData_2185();
        return [2];
      });
    }));
    varData_1481.onNet("housing:resetCache", (function() {
      var varData_2452 = handleAction_246(function(param_1, param_2) {
        var varData_2453;
        var varData_2454;
        var varData_2455;
        var varData_2456;
        var varData_2457;
        var varData_2458;
        var varData_2459;
        var varData_2460;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              dataMap_2.delete(param_2);
              return [4, varData_2476.get(param_2)];
            case 1:
              varData_2453 = param_1_1.sent();
              if (!varData_2453) {
                return [2];
              }
              varData_2454 = varData_2453.coords;
              varData_2455 = varData_2453.fullName;
              if (!varData_2454 || !varData_2455) {
                return [3, 9];
              }
              varData_2456 = [];
              for (varData_2457 in param_1) {
                varData_2456.push(varData_2457);
              }
              varData_2458 = 0;
              param_1_1.label = 2;
            case 2:
              if (!(varData_2458 < varData_2456.length)) {
                return [3, 9];
              }
              varData_2459 = varData_2456[varData_2458];
              varData_2460 = param_1[varData_2459];
              switch (varData_2460) {
                case "shellColor":
                  return [3, 3];
                case "entitySets":
                  return [3, 5];
              }
              return [3, 7];
            case 3:
              handleAction_170(param_2);
              return [4, globalThis.exports.editor.refreshInterior(param_2)];
            case 4:
              param_1_1.sent();
              return [3, 8];
            case 5:
              handleAction_170(param_2);
              return [4, globalThis.exports.editor.refreshInterior(param_2)];
            case 6:
              param_1_1.sent();
              return [3, 8];
            case 7:
              return [3, 8];
            case 8:
              varData_2458++;
              return [3, 2];
            case 9:
              return [2];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2452.apply(this, arguments);
      };
    })());
    varData_1481.onNet("np-housing:ReciveHousingRequest", (function() {
      var varData_2461 = handleAction_246(function(param_1, param_2, param_3) {
        return handleAction_253(this, function(param_1_1) {
          varData_2179(param_1, param_2, param_3);
          return [2];
        });
      });
      return function(param_1, param_2, param_3) {
        return varData_2461.apply(this, arguments);
      };
    })());
    var varData_2462 = (function() {
      var varData_2463 = handleAction_246(function(param_1) {
        var varData_2464;
        var varData_2465;
        var varData_2466;
        var varData_2467;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, exports.editor.CreateHousing(param_1)];
            case 1:
              varData_2464 = param_1_1.sent();
              if (!varData_2464) {
                return [3, 3];
              }
              varData_2465 = varData_2204.fromArray(GetEntityCoords(PlayerPedId(), false)).add(new varData_2204(0, 0, 1));
              varData_2466 = GetNameOfZone(varData_2465.x, varData_2465.y, varData_2465.z);
              if (varData_2466 == null || varData_2466.length == 0) {
                return [2];
              }
              var varData_2468 = {
                id: void 0,
                housing_name: param_1,
                owner: void 0,
                display_price: 0,
                area_name: varData_2466,
                permission: void 0,
                entitySets: [],
                shellColor: 0,
                security: true,
                copsAlert: true,
                ownerAlert: true
              };
              varData_2467 = varData_2468;
              return [4, varData_1521.execute("np-housing:CreateHousing", varData_2467)];
            case 2:
              param_1_1.sent();
              varData_1922(param_1, varData_2467);
              param_1_1.label = 3;
            case 3:
              return [2];
          }
        });
      });
      return function _0xf11275(param_1) {
        return varData_2463.apply(this, arguments);
      };
    })();
    var varData_2469 = (function() {
      var varData_2470 = handleAction_246(function(param_1) {
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_1521.execute("np-housing:HasPermissionToUnlock", param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function _0x440dc3(param_1) {
        return varData_2470.apply(this, arguments);
      };
    })();
    globalThis.exports("HasPermissionToUnlock", varData_2469);
    function handleAction_258() {
      return handleAction_259.apply(this, arguments);
    }
    function handleAction_259() {
      handleAction_259 = handleAction_246(function() {
        var varData_2471;
        var varData_2472;
        return handleAction_253(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_2473.get()];
            case 1:
              varData_2471 = param_1.sent();
              if (varData_2471) {
                varData_2472 = varData_2471.map(function(param_1_1) {
                  return new varData_2239(param_1_1.coords.x, param_1_1.coords.y, param_1_1.coords.z);
                });
                return [2, varData_2472];
              }
              return [2, "failed"];
          }
        });
      });
      return handleAction_259.apply(this, arguments);
    }
    var varData_2473 = varData_1418.cache((function() {
      var varData_2474 = handleAction_246(function(param_1, param_2) {
        var varData_2475;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2399()];
            case 1:
              varData_2475 = param_1_1.sent();
              return [2, [true, varData_2475]];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2474.apply(this, arguments);
      };
    })(), {
      timeToLive: 9e5
    });
    function handleAction_260(param_1) {
      return handleAction_261.apply(this, arguments);
    }
    function handleAction_261() {
      handleAction_261 = handleAction_246(function(param_1) {
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2476.get(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return handleAction_261.apply(this, arguments);
    }
    var varData_2476 = varData_1418.cacheableMap((function() {
      var varData_2477 = handleAction_246(function(param_1, param_2) {
        var varData_2478;
        var varData_2479;
        var varData_2480;
        var varData_2481;
        var varData_2482;
        var varData_2483;
        var varData_2484;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2473.get()];
            case 1:
              varData_2478 = param_1_1.sent();
              if (varData_2478) {
                varData_2479 = true;
                varData_2480 = false;
                varData_2481 = void 0;
                try {
                  for (varData_2482 = varData_2478[Symbol.iterator](); !(varData_2479 = (varData_2483 = varData_2482.next()).done); varData_2479 = true) {
                    varData_2484 = varData_2483.value;
                    if (varData_2484.fullName == param_2) {
                      return [2, [true, varData_2484]];
                    }
                  }
                } catch (err) {
                  varData_2480 = true;
                  varData_2481 = err;
                } finally {
                  try {
                    if (!varData_2479 && varData_2482.return != null) {
                      varData_2482.return();
                    }
                  } finally {
                    if (varData_2480) {
                      throw varData_2481;
                    }
                  }
                }
              }
              return [2, [false, void 0]];
          }
        });
      });
      return function(param_1, param_2) {
        return varData_2477.apply(this, arguments);
      };
    })(), {
      timeToLive: 9e5
    });
    var varData_2485 = (function() {
      var varData_2486 = handleAction_246(function(param_1) {
        var varData_2487;
        var varData_2488;
        var varData_2489;
        var varData_2490;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2487 = param_1.info.address;
              if (!varData_2487) {
                return [3, 2];
              }
              return [4, varData_1521.execute("np-housing:BuyHousing", varData_2487, "default")];
            case 1:
              varData_2488 = handleAction_251.apply(void 0, [param_1_1.sent(), 2]);
              varData_2489 = varData_2488[0];
              varData_2490 = varData_2488[1];
              if (varData_2489) {
                varData_1922(varData_2487, varData_2489);
              }
              var varData_2491 = {
                message: varData_2490,
                pull: true
              };
              return [2, varData_2491];
            case 2:
              return [2, {
                message: "Bad housing name",
                pull: false
              }];
          }
        });
      });
      return function _0x3ec969(param_1) {
        return varData_2486.apply(this, arguments);
      };
    })();
    var varData_2492 = (function() {
      var varData_2493 = handleAction_246(function(param_1) {
        var varData_2494;
        var varData_2495;
        var varData_2496;
        var varData_2497;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2494 = param_1.info.address;
              if (!varData_2494) {
                return [3, 4];
              }
              return [4, varData_1521.execute("np-housing:SellHousing", varData_2494, "default")];
            case 1:
              varData_2495 = handleAction_251.apply(void 0, [param_1_1.sent(), 2]);
              varData_2496 = varData_2495[0];
              varData_2497 = varData_2495[1];
              if (!varData_2496) {
                return [3, 3];
              }
              return [4, varData_1922(varData_2494, varData_2496)];
            case 2:
              param_1_1.sent();
              param_1_1.label = 3;
            case 3:
              var varData_2498 = {
                message: varData_2497,
                pull: true
              };
              return [2, varData_2498];
            case 4:
              return [2, {
                message: "Bad housing name",
                pull: false
              }];
          }
        });
      });
      return function _0x34fbdf(param_1) {
        return varData_2493.apply(this, arguments);
      };
    })();
    var varData_2499 = (function() {
      var varData_2500 = handleAction_246(function(param_1) {
        var varData_2501;
        var varData_2502;
        var varData_2503;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2501 = param_1.values.cid;
              varData_2502 = param_1.info.address;
              varData_2503 = param_1.values.price;
              if (!varData_2502 || !varData_2503 || !varData_2501) {
                return [3, 2];
              }
              return [4, varData_2177(varData_2501, varData_2502, "buyRequest", [varData_2503])];
            case 1:
              return [2, param_1_1.sent()];
            case 2:
              return [2, {
                message: "Invalid name, amount or character ID",
                pull: false
              }];
          }
        });
      });
      return function _0x5ef83b(param_1) {
        return varData_2500.apply(this, arguments);
      };
    })();
    var varData_2504 = (function() {
      var varData_2505 = handleAction_246(function(param_1) {
        var varData_2506;
        var varData_2507;
        var varData_2508;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2506 = param_1.values.cid;
              varData_2507 = param_1.info.address;
              varData_2508 = param_1.values.price;
              if (!varData_2507 || !varData_2508 || !varData_2506) {
                return [3, 2];
              }
              return [4, varData_2177(varData_2506, varData_2507, "sellRequest", [varData_2508])];
            case 1:
              return [2, param_1_1.sent()];
            case 2:
              return [2, {
                message: "Invalid name, amount or character ID",
                pull: false
              }];
          }
        });
      });
      return function _0x1d55e0(param_1) {
        return varData_2505.apply(this, arguments);
      };
    })();
    var varData_2509 = (function() {
      var varData_2510 = handleAction_246(function(param_1) {
        var varData_2511;
        var varData_2512;
        var varData_2513;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2511 = param_1.targetCID;
              varData_2512 = param_1.info.address;
              varData_2513 = param_1.price;
              if (!varData_2512 || !varData_2513 || !varData_2511) {
                return [3, 2];
              }
              return [4, varData_2177(varData_2511, varData_2512, "transferRequest", [varData_2513])];
            case 1:
              return [2, param_1_1.sent()];
            case 2:
              return [2, {
                message: "Invalid name, amount or character ID",
                pull: false
              }];
          }
        });
      });
      return function _0x170f60(param_1) {
        return varData_2510.apply(this, arguments);
      };
    })();
    var varData_2514 = (function() {
      var varData_2515 = handleAction_246(function(param_1) {
        var varData_2516;
        var varData_2517;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2516 = param_1.info.address;
              varData_2517 = param_1.values.price;
              if (!varData_2516 || !varData_2517) {
                return [3, 2];
              }
              return [4, varData_2192(varData_2516, varData_2517)];
            case 1:
              return [2, param_1_1.sent()];
            case 2:
              return [2, {
                message: "Invalid name or amount",
                pull: true
              }];
          }
        });
      });
      return function _0x36c027(param_1) {
        return varData_2515.apply(this, arguments);
      };
    })();
    var varData_2518 = (function() {
      var varData_2519 = handleAction_246(function(param_1) {
        var varData_2520;
        var varData_2521;
        var varData_2522;
        return handleAction_253(this, function(param_1_1) {
          varData_2520 = param_1.info.address;
          if (varData_2520) {
            varData_2521 = void 0;
            Object.values(globalThis.HOUSING_IPLS).forEach(function(param_1_2) {
              var varData_2523 = param_1_2;
              var varData_2524 = varData_2523.zone + "," + varData_2523.street + "," + varData_2523.number;
              if (varData_2524.includes(varData_2520)) {
                varData_2521 = param_1_2;
              }
            });
            if (!varData_2521) {
              return [2, {
                message: "Failed to find location",
                pull: false
              }];
            }
            varData_2522 = varData_2521.coords;
            SetNewWaypoint(varData_2522[0], varData_2522[1]);
            return [2, {
              message: "Set marker",
              pull: false
            }];
          }
          return [2, {
            message: "Invalid name",
            pull: false
          }];
        });
      });
      return function _0x88099f(param_1) {
        return varData_2519.apply(this, arguments);
      };
    })();
    var varData_2525 = (function() {
      var varData_2526 = handleAction_246(function(param_1) {
        var varData_2527;
        var varData_2528;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2527 = param_1.info.address;
              varData_2528 = param_1.values.property_image;
              if (!varData_2527 || !varData_2528) {
                return [3, 2];
              }
              return [4, varData_2195(varData_2527, varData_2528)];
            case 1:
              return [2, param_1_1.sent()];
            case 2:
              return [2, {
                message: "Invalid name or url",
                pull: true
              }];
          }
        });
      });
      return function _0x58485e(param_1) {
        return varData_2526.apply(this, arguments);
      };
    })();
    var varData_2529 = (function() {
      var varData_2530 = handleAction_246(function() {
        var varData_2531;
        var varData_2532;
        var varData_2533;
        var varData_2534;
        var varData_2535;
        var varData_2536;
        var varData_2537;
        var varData_2538;
        var varData_2539;
        return handleAction_253(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_2473.get()];
            case 1:
              varData_2531 = param_1.sent();
              if (!varData_2531) {
                return [2, {
                  message: "Failed to get housing config",
                  pull: false,
                  data: {
                    street: "",
                    fullName: ""
                  }
                }];
              }
              varData_2532 = "";
              varData_2533 = "";
              varData_2534 = varData_2204.fromArray(GetEntityCoords(PlayerPedId(), false));
              varData_2535 = 100;
              varData_2536 = -1;
              for (varData_2537 = 0; varData_2537 < varData_2531.length; varData_2537++) {
                varData_2538 = varData_2531[varData_2537].coords;
                varData_2539 = varData_2534.getDistance(new varData_2204(varData_2538.x, varData_2538.y, varData_2538.z));
                if (varData_2539 < varData_2535 && varData_2539 < 100) {
                  varData_2535 = varData_2539;
                  varData_2536 = varData_2537;
                }
              }
              if (varData_2536 !== -1) {
                varData_2532 = varData_2531[varData_2536].street;
                varData_2533 = varData_2531[varData_2536].fullName;
              }
              var varData_2540 = {
                street: varData_2532,
                fullName: varData_2533
              };
              var varData_2541 = {
                message: "",
                pull: false,
                data: varData_2540
              };
              return [2, varData_2541];
          }
        });
      });
      return function _0x5128e7() {
        return varData_2530.apply(this, arguments);
      };
    })();
    var varData_2542 = (function() {
      var varData_2543 = handleAction_246(function() {
        var varData_2544;
        var varData_2545;
        var varData_2546;
        return handleAction_253(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_1521.execute("np-housing:getProperties")];
            case 1:
              varData_2544 = param_1.sent();
              return [4, varData_2529()];
            case 2:
              varData_2545 = param_1.sent();
              varData_2546 = exports.isPed.isPed("cid");
              varData_2544.sort(function(param_1_1, param_2) {
                var numericVal_912 = 0;
                if (param_1_1.owner != "none" && Number(param_1_1.owner)) {
                  numericVal_912 = Number(param_1_1.owner);
                }
                var numericVal_92 = 0;
                if (param_2.owner != "none" && Number(param_2.owner)) {
                  numericVal_92 = Number(param_2.owner);
                }
                if (param_1_1.activeSale?.isAuction && !param_2.activeSale?.isAuction) {
                  return -1;
                } else if (!param_1_1.activeSale?.isAuction && param_2.activeSale?.isAuction) {
                  return 1;
                } else if (param_1_1.address === varData_2545.data.fullName) {
                  return -1;
                } else if (param_2.address === varData_2545.data.fullName) {
                  return 1;
                } else if (numericVal_912 === varData_2546 && numericVal_92 !== varData_2546) {
                  return -1;
                } else if (numericVal_912 !== varData_2546 && numericVal_92 === varData_2546) {
                  return 1;
                } else {
                  return param_1_1.address.localeCompare(param_2.address);
                }
              });
              return [2, varData_2544];
          }
        });
      });
      return function _0xf372ac() {
        return varData_2543.apply(this, arguments);
      };
    })();
    var varData_2547 = (function() {
      var varData_2548 = handleAction_246(function(param_1) {
        var varData_2549;
        var varData_2550;
        var varData_2551;
        var varData_2552;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2549 = param_1.info.address;
              if (!varData_2549) {
                return [3, 4];
              }
              return [4, varData_1521.execute("np-housing:setForSale", varData_2549, param_1.price)];
            case 1:
              varData_2550 = handleAction_251.apply(void 0, [param_1_1.sent(), 2]);
              varData_2551 = varData_2550[0];
              varData_2552 = varData_2550[1];
              if (!varData_2551) {
                return [3, 3];
              }
              return [4, varData_1922(varData_2549, varData_2551)];
            case 2:
              param_1_1.sent();
              param_1_1.label = 3;
            case 3:
              var varData_2553 = {
                message: varData_2552,
                pull: true
              };
              return [2, varData_2553];
            case 4:
              return [2, {
                message: "Invalid name",
                pull: false
              }];
          }
        });
      });
      return function _0x1a3748(param_1) {
        return varData_2548.apply(this, arguments);
      };
    })();
    var varData_2554 = (function() {
      var varData_2555 = handleAction_246(function(param_1) {
        var varData_2556;
        var varData_2557;
        var varData_2558;
        var varData_2559;
        var varData_2560;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2556 = param_1.info.address;
              varData_2557 = param_1.minBid;
              if (!varData_2556) {
                return [3, 4];
              }
              return [4, varData_1521.execute("np-housing:auctionProperty", varData_2556, varData_2557)];
            case 1:
              varData_2558 = handleAction_251.apply(void 0, [param_1_1.sent(), 2]);
              varData_2559 = varData_2558[0];
              varData_2560 = varData_2558[1];
              if (!varData_2559) {
                return [3, 3];
              }
              return [4, varData_1922(varData_2556, varData_2559)];
            case 2:
              param_1_1.sent();
              param_1_1.label = 3;
            case 3:
              var varData_2561 = {
                message: varData_2560,
                pull: true
              };
              return [2, varData_2561];
            case 4:
              return [2, {
                message: "Invalid name",
                pull: false
              }];
          }
        });
      });
      return function _0x1be704(param_1) {
        return varData_2555.apply(this, arguments);
      };
    })();
    var varData_2562 = (function() {
      var varData_2563 = handleAction_246(function(param_1) {
        var varData_2564;
        var varData_2565;
        var varData_2566;
        var varData_2567;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2564 = param_1.info.address;
              if (!varData_2564) {
                return [3, 4];
              }
              return [4, varData_1521.execute("np-housing:removeFromSale", varData_2564)];
            case 1:
              varData_2565 = handleAction_251.apply(void 0, [param_1_1.sent(), 2]);
              varData_2566 = varData_2565[0];
              varData_2567 = varData_2565[1];
              if (!varData_2566) {
                return [3, 3];
              }
              return [4, varData_1922(varData_2564, varData_2566)];
            case 2:
              param_1_1.sent();
              param_1_1.label = 3;
            case 3:
              var varData_2568 = {
                message: varData_2567,
                pull: true
              };
              return [2, varData_2568];
            case 4:
              return [2, {
                message: "Invalid name",
                pull: false
              }];
          }
        });
      });
      return function _0x5475fb(param_1) {
        return varData_2563.apply(this, arguments);
      };
    })();
    var varData_2569 = (function() {
      var varData_2570 = handleAction_246(function(param_1) {
        var varData_2571;
        var varData_2572;
        var varData_2573;
        var varData_2574;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2571 = param_1.info.address;
              if (!varData_2571) {
                return [3, 2];
              }
              return [4, varData_1521.execute("np-housing:SeizeProperty", varData_2571)];
            case 1:
              varData_2572 = handleAction_251.apply(void 0, [param_1_1.sent(), 2]);
              varData_2573 = varData_2572[0];
              varData_2574 = varData_2572[1];
              if (varData_2573) {
                varData_1922(varData_2571, varData_2573);
              }
              var varData_2575 = {
                message: varData_2574,
                pull: true
              };
              return [2, varData_2575];
            case 2:
              return [2, {
                message: "Bad housing name",
                pull: false
              }];
          }
        });
      });
      return function _0x2de969(param_1) {
        return varData_2570.apply(this, arguments);
      };
    })();
    var varData_2576 = (function() {
      var varData_2577 = handleAction_246(function(param_1) {
        var varData_2578;
        var varData_2579;
        var varData_2580;
        var varData_2581;
        var varData_2582;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2578 = param_1.info.address;
              if (!varData_2578) {
                return [3, 2];
              }
              return [4, varData_1521.execute("np-housing:LockdownProperty", varData_2578)];
            case 1:
              varData_2579 = handleAction_251.apply(void 0, [param_1_1.sent(), 3]);
              varData_2580 = varData_2579[0];
              varData_2581 = varData_2579[1];
              varData_2582 = varData_2579[2];
              if (varData_2580) {
                varData_1922(varData_2578, varData_2580);
              }
              var varData_2583 = {
                message: varData_2581,
                pull: true,
                lockedDown: varData_2582
              };
              console.log(varData_2583);
              var varData_2584 = {
                message: varData_2581,
                pull: true,
                lockedDown: varData_2582
              };
              return [2, varData_2584];
            case 2:
              console.log({
                message: "Bad housing name",
                pull: false,
                lockedDown: false
              });
              return [2, {
                message: "Bad housing name",
                pull: false,
                lockedDown: false
              }];
          }
        });
      });
      return function _0x60391c(param_1) {
        return varData_2577.apply(this, arguments);
      };
    })();
    var varData_2585 = (function() {
      var varData_2586 = handleAction_246(function(param_1) {
        var varData_2587;
        var varData_2588;
        var varData_2589;
        var varData_2590;
        var varData_2591;
        var varData_2592;
        var varData_2593;
        var varData_2594;
        var varData_2595;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2587 = param_1.split(":");
              varData_2588 = varData_2587[2];
              return [4, varData_2473.get()];
            case 1:
              varData_2589 = param_1_1.sent();
              if (varData_2589) {
                varData_2590 = true;
                varData_2591 = false;
                varData_2592 = void 0;
                try {
                  for (varData_2593 = varData_2589[Symbol.iterator](); !(varData_2590 = (varData_2594 = varData_2593.next()).done); varData_2590 = true) {
                    varData_2595 = varData_2594.value;
                    if (varData_2595.fullName == varData_2588) {
                      return [2, varData_2595];
                    }
                  }
                } catch (err) {
                  varData_2591 = true;
                  varData_2592 = err;
                } finally {
                  try {
                    if (!varData_2590 && varData_2593.return != null) {
                      varData_2593.return();
                    }
                  } finally {
                    if (varData_2591) {
                      throw varData_2592;
                    }
                  }
                }
              }
              return [2];
          }
        });
      });
      return function _0x35be0b(param_1) {
        return varData_2586.apply(this, arguments);
      };
    })();
    var varData_2596 = (function() {
      var varData_2597 = handleAction_246(function(param_1) {
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              if (!param_1) {
                return [3, 2];
              }
              return [4, varData_1521.execute("np-housing:getAuctionData", param_1)];
            case 1:
              return [2, param_1_1.sent()];
            case 2:
              return [2, {
                message: "Bad housing name",
                pull: false
              }];
          }
        });
      });
      return function _0x12b06f(param_1) {
        return varData_2597.apply(this, arguments);
      };
    })();
    var varData_2598 = (function() {
      var varData_2599 = handleAction_246(function(param_1) {
        var varData_2600;
        var varData_2601;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2600 = param_1.address;
              varData_2601 = param_1.price;
              if (!varData_2600 || !varData_2601) {
                return [3, 2];
              }
              return [4, varData_1521.execute("np-housing:bidOnProperty", varData_2600, varData_2601)];
            case 1:
              return [2, param_1_1.sent()];
            case 2:
              return [2, {
                message: "Bad housing name or price",
                pull: false
              }];
          }
        });
      });
      return function _0x538033(param_1) {
        return varData_2599.apply(this, arguments);
      };
    })();
    var varData_2602 = (function() {
      var varData_2603 = handleAction_246(function(param_1) {
        var varData_2604;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              varData_2604 = param_1.address;
              if (!varData_2604) {
                return [3, 2];
              }
              return [4, varData_1521.execute("np-housing:withdrawBid", varData_2604)];
            case 1:
              return [2, param_1_1.sent()];
            case 2:
              return [2, {
                message: "Bad housing name",
                pull: false
              }];
          }
        });
      });
      return function _0x59944b(param_1) {
        return varData_2603.apply(this, arguments);
      };
    })();
    varData_1481.onNet("np-housing:alertOwner", (function() {
      var varData_2605 = handleAction_246(function(param_1) {
        return handleAction_253(this, function(param_1_1) {
          handleAction_242("Housing", `Someone is trying to break into your house at ${param_1}!`, void 0, -1);
          return [2];
        });
      });
      return function(param_1) {
        return varData_2605.apply(this, arguments);
      };
    })());
    var numericVal_91 = 0;
    var dataMap_5 = /* @__PURE__ */ new Map();
    varData_1750.RegisterUICallback("np-ui:housing:input", function(param_1, param_2) {
      param_2({
        data: {},
        meta: {
          ok: true,
          message: ""
        }
      });
      var varData_2606 = dataMap_5.get(param_1.key);
      if (!varData_2606) {
        return;
      }
      var varData_2607 = varData_2606.validation ? varData_2606.validation(param_1?.values) : true;
      if (!varData_2607) {
        return;
      }
      varData_2606.resolve(param_1?.values);
      dataMap_5.delete(param_1.key);
      exports["np-ui"].closeApplication("textbox");
    });
    varData_1750.RegisterUICallback("np-ui:applicationClosed", function(param_1, param_2) {
      if (param_1.name !== "textbox") {
        return;
      }
      var varData_2608 = dataMap_5.get(param_1.key);
      if (!varData_2608) {
        return;
      }
      varData_2608.resolve(null);
      dataMap_5.delete(param_1.key);
    });
    function handleAction_262(param_1, param_2) {
      var varData_2609 = ++numericVal_91;
      var promise = new Promise(function(param_1_1) {
        var varData_2610 = {
          resolve: param_1_1,
          validation: param_2
        };
        dataMap_5.set(varData_2609, varData_2610);
      });
      var varData_2611 = {
        callbackUrl: "np-ui:housing:input",
        key: varData_2609,
        items: param_1,
        show: true
      };
      exports["np-ui"].openApplication("textbox", varData_2611);
      return promise;
    }
    varData_1521.register("housing:setKeyLabel", (function() {
      var varData_2612 = handleAction_246(function(param_1) {
        var varData_2613;
        var varData_2614;
        return handleAction_253(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              console.log("OK");
              return [4, handleAction_262([{
                name: "label",
                label: "Label",
                icon: ""
              }], function(param_1_2) {
                if (!param_1_2.label) {
                  return false;
                }
                return param_1_2.label;
              })];
            case 1:
              varData_2613 = param_1_1.sent();
              varData_2614 = varData_2613?.label;
              return [2, varData_2614];
          }
        });
      });
      return function(param_1) {
        return varData_2612.apply(this, arguments);
      };
    })());
    varData_1481.on("np-housing:manageParking", (function() {
      var varData_2615 = handleAction_246(function(param_1, param_2) {
        return handleAction_253(this, function(param_1_1) {
          varData_2147(param_1, param_2);
          return [2];
        });
      });
      return function(param_1, param_2) {
        return varData_2615.apply(this, arguments);
      };
    })());
    globalThis.exports("GetPropertyBoundsData", varData_2585);
    globalThis.exports("setForSale", varData_2547);
    globalThis.exports("removeFromSale", varData_2562);
    globalThis.exports("GetHousingConfigData", handleAction_258);
    globalThis.exports("sellProperty", varData_2492);
    globalThis.exports("buyProperty", varData_2485);
    globalThis.exports("setGPSLocation", varData_2518);
    globalThis.exports("setPropertyImage", varData_2525);
    globalThis.exports("setPropertyPrice", varData_2514);
    globalThis.exports("requestToSell", varData_2499);
    globalThis.exports("requestToBuy", varData_2504);
    globalThis.exports("requestToTransfer", varData_2509);
    globalThis.exports("getClosestProperty", varData_2529);
    globalThis.exports("getProperties", varData_2542);
    globalThis.exports("transferPropertyRequest", varData_2509);
    globalThis.exports("getPropertyDataFromStreet", handleAction_260);
    ;
    function handleAction_263(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2616 = param_1[param_6](param_7);
        var varData_2617 = varData_2616.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2616.done) {
        param_2(varData_2617);
      } else {
        Promise.resolve(varData_2617).then(param_4, param_5);
      }
    }
    function handleAction_264(param_1) {
      return function() {
        var varData_2618 = this;
        var varData_2619 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2620 = param_1.apply(varData_2618, varData_2619);
          function handleAction_265(param_1_2) {
            handleAction_263(varData_2620, param_1_1, param_2, handleAction_265, handleAction_266, "next", param_1_2);
          }
          function handleAction_266(param_1_2) {
            handleAction_263(varData_2620, param_1_1, param_2, handleAction_265, handleAction_266, "throw", param_1_2);
          }
          handleAction_265(void 0);
        });
      };
    }
    function handleAction_267(param_1, param_2) {
      var varData_2621;
      var varData_2622;
      var varData_2623;
      var varData_2624;
      var varData_2625 = {
        label: 0,
        sent: function() {
          if (varData_2623[0] & 1) {
            throw varData_2623[1];
          }
          return varData_2623[1];
        },
        trys: [],
        ops: []
      };
      varData_2624 = {
        next: handleAction_268(0),
        throw: handleAction_268(1),
        return: handleAction_268(2)
      };
      if (typeof Symbol === "function") {
        varData_2624[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2624;
      function handleAction_268(param_1_1) {
        return function(param_1_2) {
          return handleAction_269([param_1_1, param_1_2]);
        };
      }
      function handleAction_269(param_1_1) {
        if (varData_2621) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2625) {
          try {
            varData_2621 = 1;
            if (varData_2622 && (varData_2623 = param_1_1[0] & 2 ? varData_2622.return : param_1_1[0] ? varData_2622.throw || ((varData_2623 = varData_2622.return) && varData_2623.call(varData_2622), 0) : varData_2622.next) && !(varData_2623 = varData_2623.call(varData_2622, param_1_1[1])).done) {
              return varData_2623;
            }
            varData_2622 = 0;
            if (varData_2623) {
              param_1_1 = [param_1_1[0] & 2, varData_2623.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2623 = param_1_1;
                break;
              case 4:
                varData_2625.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2625.label++;
                varData_2622 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2625.ops.pop();
                varData_2625.trys.pop();
                continue;
              default:
                if (!(varData_2623 = varData_2625.trys, varData_2623 = varData_2623.length > 0 && varData_2623[varData_2623.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2625 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2623 || param_1_1[1] > varData_2623[0] && param_1_1[1] < varData_2623[3])) {
                  varData_2625.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2625.label < varData_2623[1]) {
                  varData_2625.label = varData_2623[1];
                  varData_2623 = param_1_1;
                  break;
                }
                if (varData_2623 && varData_2625.label < varData_2623[2]) {
                  varData_2625.label = varData_2623[2];
                  varData_2625.ops.push(param_1_1);
                  break;
                }
                if (varData_2623[2]) {
                  varData_2625.ops.pop();
                }
                varData_2625.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2625);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2622 = 0;
          } finally {
            varData_2621 = varData_2623 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2626 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2626;
      }
    }
    var varData_2627 = (function() {
      var varData_2628 = handleAction_264(function() {
        return handleAction_267(this, function(param_1) {
          return [2];
        });
      });
      return function _0x37d382() {
        return varData_2628.apply(this, arguments);
      };
    })();
    var varData_2629 = new varData_1580("tablet");
    varData_2629.register("housing:getProperties", handleAction_264(function() {
      var varData_2630;
      return handleAction_267(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            return [4, varData_2542()];
          case 1:
            varData_2630 = param_1.sent();
            return [2, varData_2630];
        }
      });
    }));
    varData_2629.register("housing:getLocalProperty", (function() {
      var varData_2631 = handleAction_264(function(param_1) {
        var varData_2632;
        var varData_2633;
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2529()];
            case 1:
              varData_2632 = param_1_1.sent();
              varData_2633 = "";
              if (varData_2632 && varData_2632.data.street) {
                varData_2633 = varData_2632.data.street;
              }
              return [2, varData_2633];
          }
        });
      });
      return function(param_1) {
        return varData_2631.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:isRealtorEmployment", handleAction_264(function() {
      return handleAction_267(this, function(param_1) {
        switch (param_1.label) {
          case 0:
            return [4, handleAction_147()];
          case 1:
            return [2, param_1.sent()];
        }
      });
    }));
    varData_2629.register("housing:setPropertyImage", (function() {
      var varData_2634 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2525(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2634.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:requestToSell", (function() {
      var varData_2635 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2499(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2635.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:requestToBuy", (function() {
      var varData_2636 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2504(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2636.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:setPropertyPrice", (function() {
      var varData_2637 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2514(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2637.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:sellProperty", (function() {
      var varData_2638 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2492(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2638.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:buyProperty", (function() {
      var varData_2639 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2485(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2639.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:setGPSLocation", (function() {
      var varData_2640 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2518(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2640.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:putupforsale", (function() {
      var varData_2641 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2547(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2641.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:auctionProperty", (function() {
      var varData_2642 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2554(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2642.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:removeFromSale", (function() {
      var varData_2643 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2562(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2643.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:transferProperty", (function() {
      var varData_2644 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2509(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2644.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:seizeProperty", (function() {
      var varData_2645 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2569(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2645.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:lockdownProperty", (function() {
      var varData_2646 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2576(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2646.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:isPD", handleAction_264(function() {
      var varData_2647;
      return handleAction_267(this, function(param_1) {
        varData_2647 = varData_1431.Sync.isPed.isPed("myjob");
        return [2, varData_2647 === "police" || varData_2647 === "dib"];
      });
    }));
    varData_2629.register("housing:getAuctionData", (function() {
      var varData_2648 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2596(param_1.address)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2648.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:bidOnProperty", (function() {
      var varData_2649 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2598(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2649.apply(this, arguments);
      };
    })());
    varData_2629.register("housing:withdrawBid", (function() {
      var varData_2650 = handleAction_264(function(param_1) {
        return handleAction_267(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2602(param_1)];
            case 1:
              return [2, param_1_1.sent()];
          }
        });
      });
      return function(param_1) {
        return varData_2650.apply(this, arguments);
      };
    })());
    ;
    function handleAction_270(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2651 = param_1[param_6](param_7);
        var varData_2652 = varData_2651.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2651.done) {
        param_2(varData_2652);
      } else {
        Promise.resolve(varData_2652).then(param_4, param_5);
      }
    }
    function handleAction_271(param_1) {
      return function() {
        var varData_2653 = this;
        var varData_2654 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2655 = param_1.apply(varData_2653, varData_2654);
          function handleAction_272(param_1_2) {
            handleAction_270(varData_2655, param_1_1, param_2, handleAction_272, handleAction_273, "next", param_1_2);
          }
          function handleAction_273(param_1_2) {
            handleAction_270(varData_2655, param_1_1, param_2, handleAction_272, handleAction_273, "throw", param_1_2);
          }
          handleAction_272(void 0);
        });
      };
    }
    function handleAction_274(param_1, param_2) {
      var varData_2656;
      var varData_2657;
      var varData_2658;
      var varData_2659;
      var varData_2660 = {
        label: 0,
        sent: function() {
          if (varData_2658[0] & 1) {
            throw varData_2658[1];
          }
          return varData_2658[1];
        },
        trys: [],
        ops: []
      };
      varData_2659 = {
        next: handleAction_275(0),
        throw: handleAction_275(1),
        return: handleAction_275(2)
      };
      if (typeof Symbol === "function") {
        varData_2659[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2659;
      function handleAction_275(param_1_1) {
        return function(param_1_2) {
          return handleAction_276([param_1_1, param_1_2]);
        };
      }
      function handleAction_276(param_1_1) {
        if (varData_2656) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2660) {
          try {
            varData_2656 = 1;
            if (varData_2657 && (varData_2658 = param_1_1[0] & 2 ? varData_2657.return : param_1_1[0] ? varData_2657.throw || ((varData_2658 = varData_2657.return) && varData_2658.call(varData_2657), 0) : varData_2657.next) && !(varData_2658 = varData_2658.call(varData_2657, param_1_1[1])).done) {
              return varData_2658;
            }
            varData_2657 = 0;
            if (varData_2658) {
              param_1_1 = [param_1_1[0] & 2, varData_2658.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2658 = param_1_1;
                break;
              case 4:
                varData_2660.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2660.label++;
                varData_2657 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2660.ops.pop();
                varData_2660.trys.pop();
                continue;
              default:
                if (!(varData_2658 = varData_2660.trys, varData_2658 = varData_2658.length > 0 && varData_2658[varData_2658.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2660 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2658 || param_1_1[1] > varData_2658[0] && param_1_1[1] < varData_2658[3])) {
                  varData_2660.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2660.label < varData_2658[1]) {
                  varData_2660.label = varData_2658[1];
                  varData_2658 = param_1_1;
                  break;
                }
                if (varData_2658 && varData_2660.label < varData_2658[2]) {
                  varData_2660.label = varData_2658[2];
                  varData_2660.ops.push(param_1_1);
                  break;
                }
                if (varData_2658[2]) {
                  varData_2660.ops.pop();
                }
                varData_2660.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2660);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2657 = 0;
          } finally {
            varData_2656 = varData_2658 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2661 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2661;
      }
    }
    function handleAction_277() {
      return handleAction_278.apply(this, arguments);
    }
    function handleAction_278() {
      handleAction_278 = handleAction_271(function() {
        return handleAction_274(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, handleAction_256()];
            case 1:
              param_1.sent();
              return [4, handleAction_168()];
            case 2:
              param_1.sent();
              return [4, varData_2052()];
            case 3:
              param_1.sent();
              return [4, varData_2627()];
            case 4:
              param_1.sent();
              return [2];
          }
        });
      });
      return handleAction_278.apply(this, arguments);
    }
    ;
    function handleAction_279(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2662 = param_1[param_6](param_7);
        var varData_2663 = varData_2662.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2662.done) {
        param_2(varData_2663);
      } else {
        Promise.resolve(varData_2663).then(param_4, param_5);
      }
    }
    function handleAction_280(param_1) {
      return function() {
        var varData_2664 = this;
        var varData_2665 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2666 = param_1.apply(varData_2664, varData_2665);
          function handleAction_281(param_1_2) {
            handleAction_279(varData_2666, param_1_1, param_2, handleAction_281, handleAction_282, "next", param_1_2);
          }
          function handleAction_282(param_1_2) {
            handleAction_279(varData_2666, param_1_1, param_2, handleAction_281, handleAction_282, "throw", param_1_2);
          }
          handleAction_281(void 0);
        });
      };
    }
    function handleAction_283(param_1, param_2) {
      var varData_2667;
      var varData_2668;
      var varData_2669;
      var varData_2670;
      var varData_2671 = {
        label: 0,
        sent: function() {
          if (varData_2669[0] & 1) {
            throw varData_2669[1];
          }
          return varData_2669[1];
        },
        trys: [],
        ops: []
      };
      varData_2670 = {
        next: handleAction_284(0),
        throw: handleAction_284(1),
        return: handleAction_284(2)
      };
      if (typeof Symbol === "function") {
        varData_2670[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2670;
      function handleAction_284(param_1_1) {
        return function(param_1_2) {
          return handleAction_285([param_1_1, param_1_2]);
        };
      }
      function handleAction_285(param_1_1) {
        if (varData_2667) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2671) {
          try {
            varData_2667 = 1;
            if (varData_2668 && (varData_2669 = param_1_1[0] & 2 ? varData_2668.return : param_1_1[0] ? varData_2668.throw || ((varData_2669 = varData_2668.return) && varData_2669.call(varData_2668), 0) : varData_2668.next) && !(varData_2669 = varData_2669.call(varData_2668, param_1_1[1])).done) {
              return varData_2669;
            }
            varData_2668 = 0;
            if (varData_2669) {
              param_1_1 = [param_1_1[0] & 2, varData_2669.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2669 = param_1_1;
                break;
              case 4:
                varData_2671.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2671.label++;
                varData_2668 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2671.ops.pop();
                varData_2671.trys.pop();
                continue;
              default:
                if (!(varData_2669 = varData_2671.trys, varData_2669 = varData_2669.length > 0 && varData_2669[varData_2669.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2671 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2669 || param_1_1[1] > varData_2669[0] && param_1_1[1] < varData_2669[3])) {
                  varData_2671.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2671.label < varData_2669[1]) {
                  varData_2671.label = varData_2669[1];
                  varData_2669 = param_1_1;
                  break;
                }
                if (varData_2669 && varData_2671.label < varData_2669[2]) {
                  varData_2671.label = varData_2669[2];
                  varData_2671.ops.push(param_1_1);
                  break;
                }
                if (varData_2669[2]) {
                  varData_2671.ops.pop();
                }
                varData_2671.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2671);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2668 = 0;
          } finally {
            varData_2667 = varData_2669 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2672 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2672;
      }
    }
    var varData_2673 = new varData_1908({
      codename: "housing",
      version: "0.0.0"
    });
    on("onClientResourceStart", (function() {
      var varData_2674 = handleAction_280(function(param_1) {
        return handleAction_283(this, function(param_1_1) {
          if (param_1 !== GetCurrentResourceName()) {
            return [2];
          }
          handleAction_277();
          return [2];
        });
      });
      return function(param_1) {
        return varData_2674.apply(this, arguments);
      };
    })());
  })();
})();
