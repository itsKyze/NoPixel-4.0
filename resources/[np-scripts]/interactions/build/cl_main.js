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
  (() => {
    handleAction_35.d = (param_1, param_2) => {
      for (var varData_74 in param_2) {
        if (handleAction_35.o(param_2, varData_74) && !handleAction_35.o(param_1, varData_74)) {
          Object.defineProperty(param_1, varData_74, {
            enumerable: true,
            get: param_2[varData_74]
          });
        }
      }
    };
  })();
  (() => {
    handleAction_35.o = (param_1, param_2) => Object.prototype.hasOwnProperty.call(param_1, param_2);
  })();
  var varData_75 = {};
  (() => {
    "use strict";
    var varData_76 = {
      A: () => isDisabled_6
    };
    handleAction_35.d(varData_75, varData_76);
    ;
    const varData_77 = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
    var varData_78 = {
      randomUUID: varData_77
    };
    const varData_79 = varData_78;
    ;
    let varData_80;
    const varData_81 = new Uint8Array(16);
    function handleAction_36() {
      if (!varData_80) {
        varData_80 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!varData_80) {
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        }
      }
      return varData_80(varData_81);
    }
    ;
    const itemList = [];
    for (let numericVal2 = 0; numericVal2 < 256; ++numericVal2) {
      itemList.push((numericVal2 + 256).toString(16).slice(1));
    }
    function handleAction_37(param_1, _0x362ba5 = 0) {
      return itemList[param_1[_0x362ba5 + 0]] + itemList[param_1[_0x362ba5 + 1]] + itemList[param_1[_0x362ba5 + 2]] + itemList[param_1[_0x362ba5 + 3]] + "-" + itemList[param_1[_0x362ba5 + 4]] + itemList[param_1[_0x362ba5 + 5]] + "-" + itemList[param_1[_0x362ba5 + 6]] + itemList[param_1[_0x362ba5 + 7]] + "-" + itemList[param_1[_0x362ba5 + 8]] + itemList[param_1[_0x362ba5 + 9]] + "-" + itemList[param_1[_0x362ba5 + 10]] + itemList[param_1[_0x362ba5 + 11]] + itemList[param_1[_0x362ba5 + 12]] + itemList[param_1[_0x362ba5 + 13]] + itemList[param_1[_0x362ba5 + 14]] + itemList[param_1[_0x362ba5 + 15]];
    }
    function createUUID(param_1, _0x2f215e = 0) {
      const varData_82 = handleAction_37(param_1, _0x2f215e);
      if (!validate(varData_82)) {
        throw TypeError("Stringified UUID is invalid");
      }
      return varData_82;
    }
    const varData_83 = null;
    ;
    function createUUID_1(param_1, param_2, param_3) {
      if (varData_79.randomUUID && !param_2 && !param_1) {
        return varData_79.randomUUID();
      }
      param_1 = param_1 || {};
      const varData_84 = param_1.random || (param_1.rng || handleAction_36)();
      varData_84[6] = varData_84[6] & 15 | 64;
      varData_84[8] = varData_84[8] & 63 | 128;
      if (param_2) {
        param_3 = param_3 || 0;
        for (let numericVal2 = 0; numericVal2 < 16; ++numericVal2) {
          param_2[param_3 + numericVal2] = varData_84[numericVal2];
        }
        return param_2;
      }
      return handleAction_37(varData_84);
    }
    const varData_85 = createUUID_1;
    ;
    const varData_86 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    ;
    function handleAction_38(param_1) {
      return typeof param_1 === "string" && varData_86.test(param_1);
    }
    const varData_87 = handleAction_38;
    ;
    function createUUID_2(param_1) {
      if (!varData_87(param_1)) {
        throw TypeError("Invalid UUID");
      }
      let varData_88;
      const varData_89 = new Uint8Array(16);
      varData_89[0] = (varData_88 = parseInt(param_1.slice(0, 8), 16)) >>> 24;
      varData_89[1] = varData_88 >>> 16 & 255;
      varData_89[2] = varData_88 >>> 8 & 255;
      varData_89[3] = varData_88 & 255;
      varData_89[4] = (varData_88 = parseInt(param_1.slice(9, 13), 16)) >>> 8;
      varData_89[5] = varData_88 & 255;
      varData_89[6] = (varData_88 = parseInt(param_1.slice(14, 18), 16)) >>> 8;
      varData_89[7] = varData_88 & 255;
      varData_89[8] = (varData_88 = parseInt(param_1.slice(19, 23), 16)) >>> 8;
      varData_89[9] = varData_88 & 255;
      varData_89[10] = (varData_88 = parseInt(param_1.slice(24, 36), 16)) / 1099511627776 & 255;
      varData_89[11] = varData_88 / 4294967296 & 255;
      varData_89[12] = varData_88 >>> 24 & 255;
      varData_89[13] = varData_88 >>> 16 & 255;
      varData_89[14] = varData_88 >>> 8 & 255;
      varData_89[15] = varData_88 & 255;
      return varData_89;
    }
    const varData_90 = createUUID_2;
    ;
    function handleAction_39(param_1) {
      param_1 = unescape(encodeURIComponent(param_1));
      const itemList_12 = [];
      for (let numericVal2 = 0; numericVal2 < param_1.length; ++numericVal2) {
        itemList_12.push(param_1.charCodeAt(numericVal2));
      }
      return itemList_12;
    }
    const varData_91 = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
    const varData_92 = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
    function handleAction_40(param_1, param_2, param_3) {
      function handleAction_41(param_1_1, param_2_1, param_3_1, param_4) {
        if (typeof param_1_1 === "string") {
          param_1_1 = handleAction_39(param_1_1);
        }
        if (typeof param_2_1 === "string") {
          param_2_1 = varData_90(param_2_1);
        }
        if (param_2_1?.length !== 16) {
          throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        }
        let varData_93 = new Uint8Array(16 + param_1_1.length);
        varData_93.set(param_2_1);
        varData_93.set(param_1_1, param_2_1.length);
        varData_93 = param_3(varData_93);
        varData_93[6] = varData_93[6] & 15 | param_2;
        varData_93[8] = varData_93[8] & 63 | 128;
        if (param_3_1) {
          param_4 = param_4 || 0;
          for (let numericVal2 = 0; numericVal2 < 16; ++numericVal2) {
            param_3_1[param_4 + numericVal2] = varData_93[numericVal2];
          }
          return param_3_1;
        }
        return handleAction_37(varData_93);
      }
      try {
        handleAction_41.name = param_1;
      } catch (err) {
      }
      handleAction_41.DNS = varData_91;
      handleAction_41.URL = varData_92;
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
        const varData_94 = unescape(encodeURIComponent(param_1));
        param_1 = [];
        for (let numericVal2 = 0; numericVal2 < varData_94.length; ++numericVal2) {
          param_1.push(varData_94.charCodeAt(numericVal2));
        }
      } else if (!Array.isArray(param_1)) {
        param_1 = Array.prototype.slice.call(param_1);
      }
      param_1.push(128);
      const varData_95 = param_1.length / 4 + 2;
      const varData_96 = Math.ceil(varData_95 / 16);
      const varData_97 = new Array(varData_96);
      for (let numericVal2 = 0; numericVal2 < varData_96; ++numericVal2) {
        const varData_98 = new Uint32Array(16);
        for (let numericVal_110 = 0; numericVal_110 < 16; ++numericVal_110) {
          varData_98[numericVal_110] = param_1[numericVal2 * 64 + numericVal_110 * 4] << 24 | param_1[numericVal2 * 64 + numericVal_110 * 4 + 1] << 16 | param_1[numericVal2 * 64 + numericVal_110 * 4 + 2] << 8 | param_1[numericVal2 * 64 + numericVal_110 * 4 + 3];
        }
        varData_97[numericVal2] = varData_98;
      }
      varData_97[varData_96 - 1][14] = (param_1.length - 1) * 8 / Math.pow(2, 32);
      varData_97[varData_96 - 1][14] = Math.floor(varData_97[varData_96 - 1][14]);
      varData_97[varData_96 - 1][15] = (param_1.length - 1) * 8 & -1;
      for (let numericVal2 = 0; numericVal2 < varData_96; ++numericVal2) {
        const varData_99 = new Uint32Array(80);
        for (let numericVal_110 = 0; numericVal_110 < 16; ++numericVal_110) {
          varData_99[numericVal_110] = varData_97[numericVal2][numericVal_110];
        }
        for (let numericVal_110 = 16; numericVal_110 < 80; ++numericVal_110) {
          varData_99[numericVal_110] = handleAction_43(varData_99[numericVal_110 - 3] ^ varData_99[numericVal_110 - 8] ^ varData_99[numericVal_110 - 14] ^ varData_99[numericVal_110 - 16], 1);
        }
        let varData_100 = itemList_22[0];
        let varData_101 = itemList_22[1];
        let varData_102 = itemList_22[2];
        let varData_103 = itemList_22[3];
        let varData_104 = itemList_22[4];
        for (let numericVal_110 = 0; numericVal_110 < 80; ++numericVal_110) {
          const roundedVal = Math.floor(numericVal_110 / 20);
          const varData_105 = handleAction_43(varData_100, 5) + handleAction_42(roundedVal, varData_101, varData_102, varData_103) + varData_104 + itemList_12[roundedVal] + varData_99[numericVal_110] >>> 0;
          varData_104 = varData_103;
          varData_103 = varData_102;
          varData_102 = handleAction_43(varData_101, 30) >>> 0;
          varData_101 = varData_100;
          varData_100 = varData_105;
        }
        itemList_22[0] = itemList_22[0] + varData_100 >>> 0;
        itemList_22[1] = itemList_22[1] + varData_101 >>> 0;
        itemList_22[2] = itemList_22[2] + varData_102 >>> 0;
        itemList_22[3] = itemList_22[3] + varData_103 >>> 0;
        itemList_22[4] = itemList_22[4] + varData_104 >>> 0;
      }
      return [itemList_22[0] >> 24 & 255, itemList_22[0] >> 16 & 255, itemList_22[0] >> 8 & 255, itemList_22[0] & 255, itemList_22[1] >> 24 & 255, itemList_22[1] >> 16 & 255, itemList_22[1] >> 8 & 255, itemList_22[1] & 255, itemList_22[2] >> 24 & 255, itemList_22[2] >> 16 & 255, itemList_22[2] >> 8 & 255, itemList_22[2] & 255, itemList_22[3] >> 24 & 255, itemList_22[3] >> 16 & 255, itemList_22[3] >> 8 & 255, itemList_22[3] & 255, itemList_22[4] >> 24 & 255, itemList_22[4] >> 16 & 255, itemList_22[4] >> 8 & 255, itemList_22[4] & 255];
    }
    const varData_106 = handleAction_44;
    ;
    const varData_107 = handleAction_40("v5", 80, varData_106);
    const varData_108 = varData_107;
    ;
    /*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
    const numericVal = 4;
    const numericVal_1 = 0;
    const numericVal_2 = 1;
    const numericVal_3 = 2;
    function handleAction_45(param_1) {
      let varData_109 = param_1.length;
      while (--varData_109 >= 0) {
        param_1[varData_109] = 0;
      }
    }
    const numericVal_4 = 0;
    const numericVal_5 = 1;
    const numericVal_6 = 2;
    const numericVal_7 = 3;
    const numericVal_8 = 258;
    const numericVal_9 = 29;
    const numericVal_10 = 256;
    const varData_110 = numericVal_10 + 1 + numericVal_9;
    const numericVal_11 = 30;
    const numericVal_12 = 19;
    const varData_111 = varData_110 * 2 + 1;
    const numericVal_13 = 15;
    const numericVal_14 = 16;
    const numericVal_15 = 7;
    const numericVal_16 = 256;
    const numericVal_17 = 16;
    const numericVal_18 = 17;
    const numericVal_19 = 18;
    const varData_112 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]);
    const varData_113 = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]);
    const varData_114 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]);
    const varData_115 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
    const numericVal_20 = 512;
    const varData_116 = new Array((varData_110 + 2) * 2);
    handleAction_45(varData_116);
    const varData_117 = new Array(numericVal_11 * 2);
    handleAction_45(varData_117);
    const varData_118 = new Array(numericVal_20);
    handleAction_45(varData_118);
    const varData_119 = new Array(numericVal_8 - numericVal_7 + 1);
    handleAction_45(varData_119);
    const varData_120 = new Array(numericVal_9);
    handleAction_45(varData_120);
    const varData_121 = new Array(numericVal_11);
    handleAction_45(varData_121);
    function handleAction_46(param_1, param_2, param_3, param_4, param_5) {
      this.static_tree = param_1;
      this.extra_bits = param_2;
      this.extra_base = param_3;
      this.elems = param_4;
      this.max_length = param_5;
      this.has_stree = param_1 && param_1.length;
    }
    let varData_122;
    let varData_123;
    let varData_124;
    function handleAction_47(param_1, param_2) {
      this.dyn_tree = param_1;
      this.max_code = 0;
      this.stat_desc = param_2;
    }
    const varData_125 = (param_1) => {
      if (param_1 < 256) {
        return varData_118[param_1];
      } else {
        return varData_118[256 + (param_1 >>> 7)];
      }
    };
    const varData_126 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
    };
    const varData_127 = (param_1, param_2, param_3) => {
      if (param_1.bi_valid > numericVal_14 - param_3) {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        varData_126(param_1, param_1.bi_buf);
        param_1.bi_buf = param_2 >> numericVal_14 - param_1.bi_valid;
        param_1.bi_valid += param_3 - numericVal_14;
      } else {
        param_1.bi_buf |= param_2 << param_1.bi_valid & 65535;
        param_1.bi_valid += param_3;
      }
    };
    const varData_128 = (param_1, param_2, param_3) => {
      varData_127(param_1, param_3[param_2 * 2], param_3[param_2 * 2 + 1]);
    };
    const varData_129 = (param_1, param_2) => {
      let numericVal_212 = 0;
      do {
        numericVal_212 |= param_1 & 1;
        param_1 >>>= 1;
        numericVal_212 <<= 1;
      } while (--param_2 > 0);
      return numericVal_212 >>> 1;
    };
    const varData_130 = (param_1) => {
      if (param_1.bi_valid === 16) {
        varData_126(param_1, param_1.bi_buf);
        param_1.bi_buf = 0;
        param_1.bi_valid = 0;
      } else if (param_1.bi_valid >= 8) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf & 255;
        param_1.bi_buf >>= 8;
        param_1.bi_valid -= 8;
      }
    };
    const varData_131 = (param_1, param_2) => {
      const varData_132 = param_2.dyn_tree;
      const varData_133 = param_2.max_code;
      const varData_134 = param_2.stat_desc.static_tree;
      const varData_135 = param_2.stat_desc.has_stree;
      const varData_136 = param_2.stat_desc.extra_bits;
      const varData_137 = param_2.stat_desc.extra_base;
      const varData_138 = param_2.stat_desc.max_length;
      let varData_139;
      let varData_140;
      let varData_141;
      let varData_142;
      let varData_143;
      let varData_144;
      let numericVal_212 = 0;
      for (varData_142 = 0; varData_142 <= numericVal_13; varData_142++) {
        param_1.bl_count[varData_142] = 0;
      }
      varData_132[param_1.heap[param_1.heap_max] * 2 + 1] = 0;
      for (varData_139 = param_1.heap_max + 1; varData_139 < varData_111; varData_139++) {
        varData_140 = param_1.heap[varData_139];
        varData_142 = varData_132[varData_132[varData_140 * 2 + 1] * 2 + 1] + 1;
        if (varData_142 > varData_138) {
          varData_142 = varData_138;
          numericVal_212++;
        }
        varData_132[varData_140 * 2 + 1] = varData_142;
        if (varData_140 > varData_133) {
          continue;
        }
        param_1.bl_count[varData_142]++;
        varData_143 = 0;
        if (varData_140 >= varData_137) {
          varData_143 = varData_136[varData_140 - varData_137];
        }
        varData_144 = varData_132[varData_140 * 2];
        param_1.opt_len += varData_144 * (varData_142 + varData_143);
        if (varData_135) {
          param_1.static_len += varData_144 * (varData_134[varData_140 * 2 + 1] + varData_143);
        }
      }
      if (numericVal_212 === 0) {
        return;
      }
      do {
        varData_142 = varData_138 - 1;
        while (param_1.bl_count[varData_142] === 0) {
          varData_142--;
        }
        param_1.bl_count[varData_142]--;
        param_1.bl_count[varData_142 + 1] += 2;
        param_1.bl_count[varData_138]--;
        numericVal_212 -= 2;
      } while (numericVal_212 > 0);
      for (varData_142 = varData_138; varData_142 !== 0; varData_142--) {
        varData_140 = param_1.bl_count[varData_142];
        while (varData_140 !== 0) {
          varData_141 = param_1.heap[--varData_139];
          if (varData_141 > varData_133) {
            continue;
          }
          if (varData_132[varData_141 * 2 + 1] !== varData_142) {
            param_1.opt_len += (varData_142 - varData_132[varData_141 * 2 + 1]) * varData_132[varData_141 * 2];
            varData_132[varData_141 * 2 + 1] = varData_142;
          }
          varData_140--;
        }
      }
    };
    const varData_145 = (param_1, param_2, param_3) => {
      const varData_146 = new Array(numericVal_13 + 1);
      let numericVal_212 = 0;
      let varData_147;
      let varData_148;
      for (varData_147 = 1; varData_147 <= numericVal_13; varData_147++) {
        numericVal_212 = numericVal_212 + param_3[varData_147 - 1] << 1;
        varData_146[varData_147] = numericVal_212;
      }
      for (varData_148 = 0; varData_148 <= param_2; varData_148++) {
        let varData_149 = param_1[varData_148 * 2 + 1];
        if (varData_149 === 0) {
          continue;
        }
        param_1[varData_148 * 2] = varData_129(varData_146[varData_149]++, varData_149);
      }
    };
    const varData_150 = () => {
      let varData_151;
      let varData_152;
      let varData_153;
      let varData_154;
      let varData_155;
      const varData_156 = new Array(numericVal_13 + 1);
      varData_153 = 0;
      for (varData_154 = 0; varData_154 < numericVal_9 - 1; varData_154++) {
        varData_120[varData_154] = varData_153;
        for (varData_151 = 0; varData_151 < 1 << varData_112[varData_154]; varData_151++) {
          varData_119[varData_153++] = varData_154;
        }
      }
      varData_119[varData_153 - 1] = varData_154;
      varData_155 = 0;
      for (varData_154 = 0; varData_154 < 16; varData_154++) {
        varData_121[varData_154] = varData_155;
        for (varData_151 = 0; varData_151 < 1 << varData_113[varData_154]; varData_151++) {
          varData_118[varData_155++] = varData_154;
        }
      }
      varData_155 >>= 7;
      for (; varData_154 < numericVal_11; varData_154++) {
        varData_121[varData_154] = varData_155 << 7;
        for (varData_151 = 0; varData_151 < 1 << varData_113[varData_154] - 7; varData_151++) {
          varData_118[256 + varData_155++] = varData_154;
        }
      }
      for (varData_152 = 0; varData_152 <= numericVal_13; varData_152++) {
        varData_156[varData_152] = 0;
      }
      varData_151 = 0;
      while (varData_151 <= 143) {
        varData_116[varData_151 * 2 + 1] = 8;
        varData_151++;
        varData_156[8]++;
      }
      while (varData_151 <= 255) {
        varData_116[varData_151 * 2 + 1] = 9;
        varData_151++;
        varData_156[9]++;
      }
      while (varData_151 <= 279) {
        varData_116[varData_151 * 2 + 1] = 7;
        varData_151++;
        varData_156[7]++;
      }
      while (varData_151 <= 287) {
        varData_116[varData_151 * 2 + 1] = 8;
        varData_151++;
        varData_156[8]++;
      }
      varData_145(varData_116, varData_110 + 1, varData_156);
      for (varData_151 = 0; varData_151 < numericVal_11; varData_151++) {
        varData_117[varData_151 * 2 + 1] = 5;
        varData_117[varData_151 * 2] = varData_129(varData_151, 5);
      }
      varData_122 = new handleAction_46(varData_116, varData_112, numericVal_10 + 1, varData_110, numericVal_13);
      varData_123 = new handleAction_46(varData_117, varData_113, 0, numericVal_11, numericVal_13);
      varData_124 = new handleAction_46(new Array(0), varData_114, 0, numericVal_12, numericVal_15);
    };
    const varData_157 = (param_1) => {
      let varData_158;
      for (varData_158 = 0; varData_158 < varData_110; varData_158++) {
        param_1.dyn_ltree[varData_158 * 2] = 0;
      }
      for (varData_158 = 0; varData_158 < numericVal_11; varData_158++) {
        param_1.dyn_dtree[varData_158 * 2] = 0;
      }
      for (varData_158 = 0; varData_158 < numericVal_12; varData_158++) {
        param_1.bl_tree[varData_158 * 2] = 0;
      }
      param_1.dyn_ltree[numericVal_16 * 2] = 1;
      param_1.opt_len = param_1.static_len = 0;
      param_1.sym_next = param_1.matches = 0;
    };
    const varData_159 = (param_1) => {
      if (param_1.bi_valid > 8) {
        varData_126(param_1, param_1.bi_buf);
      } else if (param_1.bi_valid > 0) {
        param_1.pending_buf[param_1.pending++] = param_1.bi_buf;
      }
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
    };
    const varData_160 = (param_1, param_2, param_3, param_4) => {
      const varData_161 = param_2 * 2;
      const varData_162 = param_3 * 2;
      return param_1[varData_161] < param_1[varData_162] || param_1[varData_161] === param_1[varData_162] && param_4[param_2] <= param_4[param_3];
    };
    const varData_163 = (param_1, param_2, param_3) => {
      const varData_164 = param_1.heap[param_3];
      let varData_165 = param_3 << 1;
      while (varData_165 <= param_1.heap_len) {
        if (varData_165 < param_1.heap_len && varData_160(param_2, param_1.heap[varData_165 + 1], param_1.heap[varData_165], param_1.depth)) {
          varData_165++;
        }
        if (varData_160(param_2, varData_164, param_1.heap[varData_165], param_1.depth)) {
          break;
        }
        param_1.heap[param_3] = param_1.heap[varData_165];
        param_3 = varData_165;
        varData_165 <<= 1;
      }
      param_1.heap[param_3] = varData_164;
    };
    const varData_166 = (param_1, param_2, param_3) => {
      let varData_167;
      let varData_168;
      let numericVal_212 = 0;
      let varData_169;
      let varData_170;
      if (param_1.sym_next !== 0) {
        do {
          varData_167 = param_1.pending_buf[param_1.sym_buf + numericVal_212++] & 255;
          varData_167 += (param_1.pending_buf[param_1.sym_buf + numericVal_212++] & 255) << 8;
          varData_168 = param_1.pending_buf[param_1.sym_buf + numericVal_212++];
          if (varData_167 === 0) {
            varData_128(param_1, varData_168, param_2);
          } else {
            varData_169 = varData_119[varData_168];
            varData_128(param_1, varData_169 + numericVal_10 + 1, param_2);
            varData_170 = varData_112[varData_169];
            if (varData_170 !== 0) {
              varData_168 -= varData_120[varData_169];
              varData_127(param_1, varData_168, varData_170);
            }
            varData_167--;
            varData_169 = varData_125(varData_167);
            varData_128(param_1, varData_169, param_3);
            varData_170 = varData_113[varData_169];
            if (varData_170 !== 0) {
              varData_167 -= varData_121[varData_169];
              varData_127(param_1, varData_167, varData_170);
            }
          }
        } while (numericVal_212 < param_1.sym_next);
      }
      varData_128(param_1, numericVal_16, param_2);
    };
    const varData_171 = (param_1, param_2) => {
      const varData_172 = param_2.dyn_tree;
      const varData_173 = param_2.stat_desc.static_tree;
      const varData_174 = param_2.stat_desc.has_stree;
      const varData_175 = param_2.stat_desc.elems;
      let varData_176;
      let varData_177;
      let varData_178 = -1;
      let varData_179;
      param_1.heap_len = 0;
      param_1.heap_max = varData_111;
      for (varData_176 = 0; varData_176 < varData_175; varData_176++) {
        if (varData_172[varData_176 * 2] !== 0) {
          param_1.heap[++param_1.heap_len] = varData_178 = varData_176;
          param_1.depth[varData_176] = 0;
        } else {
          varData_172[varData_176 * 2 + 1] = 0;
        }
      }
      while (param_1.heap_len < 2) {
        varData_179 = param_1.heap[++param_1.heap_len] = varData_178 < 2 ? ++varData_178 : 0;
        varData_172[varData_179 * 2] = 1;
        param_1.depth[varData_179] = 0;
        param_1.opt_len--;
        if (varData_174) {
          param_1.static_len -= varData_173[varData_179 * 2 + 1];
        }
      }
      param_2.max_code = varData_178;
      for (varData_176 = param_1.heap_len >> 1; varData_176 >= 1; varData_176--) {
        varData_163(param_1, varData_172, varData_176);
      }
      varData_179 = varData_175;
      do {
        varData_176 = param_1.heap[1];
        param_1.heap[1] = param_1.heap[param_1.heap_len--];
        varData_163(param_1, varData_172, 1);
        varData_177 = param_1.heap[1];
        param_1.heap[--param_1.heap_max] = varData_176;
        param_1.heap[--param_1.heap_max] = varData_177;
        varData_172[varData_179 * 2] = varData_172[varData_176 * 2] + varData_172[varData_177 * 2];
        param_1.depth[varData_179] = (param_1.depth[varData_176] >= param_1.depth[varData_177] ? param_1.depth[varData_176] : param_1.depth[varData_177]) + 1;
        varData_172[varData_176 * 2 + 1] = varData_172[varData_177 * 2 + 1] = varData_179;
        param_1.heap[1] = varData_179++;
        varData_163(param_1, varData_172, 1);
      } while (param_1.heap_len >= 2);
      param_1.heap[--param_1.heap_max] = param_1.heap[1];
      varData_131(param_1, param_2);
      varData_145(varData_172, varData_178, param_1.bl_count);
    };
    const varData_180 = (param_1, param_2, param_3) => {
      let varData_181;
      let varData_182 = -1;
      let varData_183;
      let varData_184 = param_2[1];
      let numericVal_212 = 0;
      let numericVal_222 = 7;
      let numericVal_232 = 4;
      if (varData_184 === 0) {
        numericVal_222 = 138;
        numericVal_232 = 3;
      }
      param_2[(param_3 + 1) * 2 + 1] = 65535;
      for (varData_181 = 0; varData_181 <= param_3; varData_181++) {
        varData_183 = varData_184;
        varData_184 = param_2[(varData_181 + 1) * 2 + 1];
        if (++numericVal_212 < numericVal_222 && varData_183 === varData_184) {
          continue;
        } else if (numericVal_212 < numericVal_232) {
          param_1.bl_tree[varData_183 * 2] += numericVal_212;
        } else if (varData_183 !== 0) {
          if (varData_183 !== varData_182) {
            param_1.bl_tree[varData_183 * 2]++;
          }
          param_1.bl_tree[numericVal_17 * 2]++;
        } else if (numericVal_212 <= 10) {
          param_1.bl_tree[numericVal_18 * 2]++;
        } else {
          param_1.bl_tree[numericVal_19 * 2]++;
        }
        numericVal_212 = 0;
        varData_182 = varData_183;
        if (varData_184 === 0) {
          numericVal_222 = 138;
          numericVal_232 = 3;
        } else if (varData_183 === varData_184) {
          numericVal_222 = 6;
          numericVal_232 = 3;
        } else {
          numericVal_222 = 7;
          numericVal_232 = 4;
        }
      }
    };
    const varData_185 = (param_1, param_2, param_3) => {
      let varData_186;
      let varData_187 = -1;
      let varData_188;
      let varData_189 = param_2[1];
      let numericVal_212 = 0;
      let numericVal_222 = 7;
      let numericVal_232 = 4;
      if (varData_189 === 0) {
        numericVal_222 = 138;
        numericVal_232 = 3;
      }
      for (varData_186 = 0; varData_186 <= param_3; varData_186++) {
        varData_188 = varData_189;
        varData_189 = param_2[(varData_186 + 1) * 2 + 1];
        if (++numericVal_212 < numericVal_222 && varData_188 === varData_189) {
          continue;
        } else if (numericVal_212 < numericVal_232) {
          do {
            varData_128(param_1, varData_188, param_1.bl_tree);
          } while (--numericVal_212 !== 0);
        } else if (varData_188 !== 0) {
          if (varData_188 !== varData_187) {
            varData_128(param_1, varData_188, param_1.bl_tree);
            numericVal_212--;
          }
          varData_128(param_1, numericVal_17, param_1.bl_tree);
          varData_127(param_1, numericVal_212 - 3, 2);
        } else if (numericVal_212 <= 10) {
          varData_128(param_1, numericVal_18, param_1.bl_tree);
          varData_127(param_1, numericVal_212 - 3, 3);
        } else {
          varData_128(param_1, numericVal_19, param_1.bl_tree);
          varData_127(param_1, numericVal_212 - 11, 7);
        }
        numericVal_212 = 0;
        varData_187 = varData_188;
        if (varData_189 === 0) {
          numericVal_222 = 138;
          numericVal_232 = 3;
        } else if (varData_188 === varData_189) {
          numericVal_222 = 6;
          numericVal_232 = 3;
        } else {
          numericVal_222 = 7;
          numericVal_232 = 4;
        }
      }
    };
    const varData_190 = (param_1) => {
      let varData_191;
      varData_180(param_1, param_1.dyn_ltree, param_1.l_desc.max_code);
      varData_180(param_1, param_1.dyn_dtree, param_1.d_desc.max_code);
      varData_171(param_1, param_1.bl_desc);
      for (varData_191 = numericVal_12 - 1; varData_191 >= 3; varData_191--) {
        if (param_1.bl_tree[varData_115[varData_191] * 2 + 1] !== 0) {
          break;
        }
      }
      param_1.opt_len += (varData_191 + 1) * 3 + 5 + 5 + 4;
      return varData_191;
    };
    const varData_192 = (param_1, param_2, param_3, param_4) => {
      let varData_193;
      varData_127(param_1, param_2 - 257, 5);
      varData_127(param_1, param_3 - 1, 5);
      varData_127(param_1, param_4 - 4, 4);
      for (varData_193 = 0; varData_193 < param_4; varData_193++) {
        varData_127(param_1, param_1.bl_tree[varData_115[varData_193] * 2 + 1], 3);
      }
      varData_185(param_1, param_1.dyn_ltree, param_2 - 1);
      varData_185(param_1, param_1.dyn_dtree, param_3 - 1);
    };
    const varData_194 = (param_1) => {
      let numericVal_212 = 4093624447;
      let varData_195;
      for (varData_195 = 0; varData_195 <= 31; varData_195++, numericVal_212 >>>= 1) {
        if (numericVal_212 & 1 && param_1.dyn_ltree[varData_195 * 2] !== 0) {
          return numericVal_1;
        }
      }
      if (param_1.dyn_ltree[18] !== 0 || param_1.dyn_ltree[20] !== 0 || param_1.dyn_ltree[26] !== 0) {
        return numericVal_2;
      }
      for (varData_195 = 32; varData_195 < numericVal_10; varData_195++) {
        if (param_1.dyn_ltree[varData_195 * 2] !== 0) {
          return numericVal_2;
        }
      }
      return numericVal_1;
    };
    let isDisabled = false;
    const varData_196 = (param_1) => {
      if (!isDisabled) {
        varData_150();
        isDisabled = true;
      }
      param_1.l_desc = new handleAction_47(param_1.dyn_ltree, varData_122);
      param_1.d_desc = new handleAction_47(param_1.dyn_dtree, varData_123);
      param_1.bl_desc = new handleAction_47(param_1.bl_tree, varData_124);
      param_1.bi_buf = 0;
      param_1.bi_valid = 0;
      varData_157(param_1);
    };
    const varData_197 = (param_1, param_2, param_3, param_4) => {
      varData_127(param_1, (numericVal_4 << 1) + (param_4 ? 1 : 0), 3);
      varData_159(param_1);
      varData_126(param_1, param_3);
      varData_126(param_1, ~param_3);
      if (param_3) {
        param_1.pending_buf.set(param_1.window.subarray(param_2, param_2 + param_3), param_1.pending);
      }
      param_1.pending += param_3;
    };
    const varData_198 = (param_1) => {
      varData_127(param_1, numericVal_5 << 1, 3);
      varData_128(param_1, numericVal_16, varData_116);
      varData_130(param_1);
    };
    const varData_199 = (param_1, param_2, param_3, param_4) => {
      let varData_200;
      let varData_201;
      let numericVal_212 = 0;
      if (param_1.level > 0) {
        if (param_1.strm.data_type === numericVal_3) {
          param_1.strm.data_type = varData_194(param_1);
        }
        varData_171(param_1, param_1.l_desc);
        varData_171(param_1, param_1.d_desc);
        numericVal_212 = varData_190(param_1);
        varData_200 = param_1.opt_len + 3 + 7 >>> 3;
        varData_201 = param_1.static_len + 3 + 7 >>> 3;
        if (varData_201 <= varData_200) {
          varData_200 = varData_201;
        }
      } else {
        varData_200 = varData_201 = param_3 + 5;
      }
      if (param_3 + 4 <= varData_200 && param_2 !== -1) {
        varData_197(param_1, param_2, param_3, param_4);
      } else if (param_1.strategy === numericVal || varData_201 === varData_200) {
        varData_127(param_1, (numericVal_5 << 1) + (param_4 ? 1 : 0), 3);
        varData_166(param_1, varData_116, varData_117);
      } else {
        varData_127(param_1, (numericVal_6 << 1) + (param_4 ? 1 : 0), 3);
        varData_192(param_1, param_1.l_desc.max_code + 1, param_1.d_desc.max_code + 1, numericVal_212 + 1);
        varData_166(param_1, param_1.dyn_ltree, param_1.dyn_dtree);
      }
      varData_157(param_1);
      if (param_4) {
        varData_159(param_1);
      }
    };
    const varData_202 = (param_1, param_2, param_3) => {
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_2 >> 8;
      param_1.pending_buf[param_1.sym_buf + param_1.sym_next++] = param_3;
      if (param_2 === 0) {
        param_1.dyn_ltree[param_3 * 2]++;
      } else {
        param_1.matches++;
        param_2--;
        param_1.dyn_ltree[(varData_119[param_3] + numericVal_10 + 1) * 2]++;
        param_1.dyn_dtree[varData_125(param_2) * 2]++;
      }
      return param_1.sym_next === param_1.sym_end;
    };
    var varData_203 = varData_196;
    var varData_204 = varData_197;
    var varData_205 = varData_199;
    var varData_206 = varData_202;
    var varData_207 = varData_198;
    var varData_208 = {
      _tr_init: varData_203,
      _tr_stored_block: varData_204,
      _tr_flush_block: varData_205,
      _tr_tally: varData_206,
      _tr_align: varData_207
    };
    var varData_209 = varData_208;
    const varData_210 = (param_1, param_2, param_3, param_4) => {
      let varData_211 = param_1 & 65535 | 0;
      let varData_212 = param_1 >>> 16 & 65535 | 0;
      let numericVal_212 = 0;
      while (param_3 !== 0) {
        numericVal_212 = param_3 > 2e3 ? 2e3 : param_3;
        param_3 -= numericVal_212;
        do {
          varData_211 = varData_211 + param_2[param_4++] | 0;
          varData_212 = varData_212 + varData_211 | 0;
        } while (--numericVal_212);
        varData_211 %= 65521;
        varData_212 %= 65521;
      }
      return varData_211 | varData_212 << 16 | 0;
    };
    var varData_213 = varData_210;
    const varData_214 = () => {
      let varData_215;
      let itemList_12 = [];
      for (var numericVal_212 = 0; numericVal_212 < 256; numericVal_212++) {
        varData_215 = numericVal_212;
        for (var numericVal_222 = 0; numericVal_222 < 8; numericVal_222++) {
          varData_215 = varData_215 & 1 ? varData_215 >>> 1 ^ -306674912 : varData_215 >>> 1;
        }
        itemList_12[numericVal_212] = varData_215;
      }
      return itemList_12;
    };
    const varData_216 = new Uint32Array(varData_214());
    const varData_217 = (param_1, param_2, param_3, param_4) => {
      const varData_218 = varData_216;
      const varData_219 = param_4 + param_3;
      param_1 ^= -1;
      for (let loopIdx = param_4; loopIdx < varData_219; loopIdx++) {
        param_1 = param_1 >>> 8 ^ varData_218[(param_1 ^ param_2[loopIdx]) & 255];
      }
      return param_1 ^ -1;
    };
    var varData_220 = varData_217;
    var varData_221 = {
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
    var varData_222 = {
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
    var varData_223 = varData_222;
    const {
      _tr_init: _0x23c722,
      _tr_stored_block: _0x2a302d,
      _tr_flush_block: _0x3cf931,
      _tr_tally: _0x3f25d0,
      _tr_align: _0xeb5a7f
    } = varData_209;
    const {
      Z_NO_FLUSH: _0x13c046,
      Z_PARTIAL_FLUSH: _0xf48e39,
      Z_FULL_FLUSH: _0xfbe01e,
      Z_FINISH: _0x8fa2c0,
      Z_BLOCK: _0x180d96,
      Z_OK: _0x12c861,
      Z_STREAM_END: _0x33eb3b,
      Z_STREAM_ERROR: _0x5b909c,
      Z_DATA_ERROR: _0x13960a,
      Z_BUF_ERROR: _0x5be71c,
      Z_DEFAULT_COMPRESSION: _0x4bfdb9,
      Z_FILTERED: _0x50e44b,
      Z_HUFFMAN_ONLY: _0x1fac00,
      Z_RLE: _0x502702,
      Z_FIXED: _0x4711d8,
      Z_DEFAULT_STRATEGY: _0x33245,
      Z_UNKNOWN: _0x12db50,
      Z_DEFLATED: _0x52ffed
    } = varData_223;
    const numericVal_21 = 9;
    const numericVal_22 = 15;
    const numericVal_23 = 8;
    const numericVal_24 = 29;
    const numericVal_25 = 256;
    const varData_224 = numericVal_25 + 1 + numericVal_24;
    const numericVal_26 = 30;
    const numericVal_27 = 19;
    const varData_225 = varData_224 * 2 + 1;
    const numericVal_28 = 15;
    const numericVal_29 = 3;
    const numericVal_30 = 258;
    const varData_226 = numericVal_30 + numericVal_29 + 1;
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
    const varData_227 = (param_1, param_2) => {
      param_1.msg = varData_221[param_2];
      return param_2;
    };
    const varData_228 = (param_1) => {
      return param_1 * 2 - (param_1 > 4 ? 9 : 0);
    };
    const varData_229 = (param_1) => {
      let varData_230 = param_1.length;
      while (--varData_230 >= 0) {
        param_1[varData_230] = 0;
      }
    };
    const varData_231 = (param_1) => {
      let varData_232;
      let varData_233;
      let varData_234;
      let varData_235 = param_1.w_size;
      varData_232 = param_1.hash_size;
      varData_234 = varData_232;
      do {
        varData_233 = param_1.head[--varData_234];
        param_1.head[varData_234] = varData_233 >= varData_235 ? varData_233 - varData_235 : 0;
      } while (--varData_232);
      varData_232 = varData_235;
      varData_234 = varData_232;
      do {
        varData_233 = param_1.prev[--varData_234];
        param_1.prev[varData_234] = varData_233 >= varData_235 ? varData_233 - varData_235 : 0;
      } while (--varData_232);
    };
    let varData_236 = (param_1, param_2, param_3) => (param_2 << param_1.hash_shift ^ param_3) & param_1.hash_mask;
    let varData_237 = varData_236;
    const varData_238 = (param_1) => {
      const varData_239 = param_1.state;
      let varData_240 = varData_239.pending;
      if (varData_240 > param_1.avail_out) {
        varData_240 = param_1.avail_out;
      }
      if (varData_240 === 0) {
        return;
      }
      param_1.output.set(varData_239.pending_buf.subarray(varData_239.pending_out, varData_239.pending_out + varData_240), param_1.next_out);
      param_1.next_out += varData_240;
      varData_239.pending_out += varData_240;
      param_1.total_out += varData_240;
      param_1.avail_out -= varData_240;
      varData_239.pending -= varData_240;
      if (varData_239.pending === 0) {
        varData_239.pending_out = 0;
      }
    };
    const varData_241 = (param_1, param_2) => {
      _0x3cf931(param_1, param_1.block_start >= 0 ? param_1.block_start : -1, param_1.strstart - param_1.block_start, param_2);
      param_1.block_start = param_1.strstart;
      varData_238(param_1.strm);
    };
    const varData_242 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2;
    };
    const varData_243 = (param_1, param_2) => {
      param_1.pending_buf[param_1.pending++] = param_2 >>> 8 & 255;
      param_1.pending_buf[param_1.pending++] = param_2 & 255;
    };
    const varData_244 = (param_1, param_2, param_3, param_4) => {
      let varData_245 = param_1.avail_in;
      if (varData_245 > param_4) {
        varData_245 = param_4;
      }
      if (varData_245 === 0) {
        return 0;
      }
      param_1.avail_in -= varData_245;
      param_2.set(param_1.input.subarray(param_1.next_in, param_1.next_in + varData_245), param_3);
      if (param_1.state.wrap === 1) {
        param_1.adler = varData_213(param_1.adler, param_2, varData_245, param_3);
      } else if (param_1.state.wrap === 2) {
        param_1.adler = varData_220(param_1.adler, param_2, varData_245, param_3);
      }
      param_1.next_in += varData_245;
      param_1.total_in += varData_245;
      return varData_245;
    };
    const varData_246 = (param_1, param_2) => {
      let varData_247 = param_1.max_chain_length;
      let varData_248 = param_1.strstart;
      let varData_249;
      let varData_250;
      let varData_251 = param_1.prev_length;
      let varData_252 = param_1.nice_match;
      const varData_253 = param_1.strstart > param_1.w_size - varData_226 ? param_1.strstart - (param_1.w_size - varData_226) : 0;
      const varData_254 = param_1.window;
      const varData_255 = param_1.w_mask;
      const varData_256 = param_1.prev;
      const varData_257 = param_1.strstart + numericVal_30;
      let varData_258 = varData_254[varData_248 + varData_251 - 1];
      let varData_259 = varData_254[varData_248 + varData_251];
      if (param_1.prev_length >= param_1.good_match) {
        varData_247 >>= 2;
      }
      if (varData_252 > param_1.lookahead) {
        varData_252 = param_1.lookahead;
      }
      do {
        varData_249 = param_2;
        if (varData_254[varData_249 + varData_251] !== varData_259 || varData_254[varData_249 + varData_251 - 1] !== varData_258 || varData_254[varData_249] !== varData_254[varData_248] || varData_254[++varData_249] !== varData_254[varData_248 + 1]) {
          continue;
        }
        varData_248 += 2;
        varData_249++;
        do {
        } while (varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_254[++varData_248] === varData_254[++varData_249] && varData_248 < varData_257);
        varData_250 = numericVal_30 - (varData_257 - varData_248);
        varData_248 = varData_257 - numericVal_30;
        if (varData_250 > varData_251) {
          param_1.match_start = param_2;
          varData_251 = varData_250;
          if (varData_250 >= varData_252) {
            break;
          }
          varData_258 = varData_254[varData_248 + varData_251 - 1];
          varData_259 = varData_254[varData_248 + varData_251];
        }
      } while ((param_2 = varData_256[param_2 & varData_255]) > varData_253 && --varData_247 !== 0);
      if (varData_251 <= param_1.lookahead) {
        return varData_251;
      }
      return param_1.lookahead;
    };
    const varData_260 = (param_1) => {
      const varData_261 = param_1.w_size;
      let varData_262;
      let varData_263;
      let varData_264;
      do {
        varData_263 = param_1.window_size - param_1.lookahead - param_1.strstart;
        if (param_1.strstart >= varData_261 + (varData_261 - varData_226)) {
          param_1.window.set(param_1.window.subarray(varData_261, varData_261 + varData_261 - varData_263), 0);
          param_1.match_start -= varData_261;
          param_1.strstart -= varData_261;
          param_1.block_start -= varData_261;
          if (param_1.insert > param_1.strstart) {
            param_1.insert = param_1.strstart;
          }
          varData_231(param_1);
          varData_263 += varData_261;
        }
        if (param_1.strm.avail_in === 0) {
          break;
        }
        varData_262 = varData_244(param_1.strm, param_1.window, param_1.strstart + param_1.lookahead, varData_263);
        param_1.lookahead += varData_262;
        if (param_1.lookahead + param_1.insert >= numericVal_29) {
          varData_264 = param_1.strstart - param_1.insert;
          param_1.ins_h = param_1.window[varData_264];
          param_1.ins_h = varData_237(param_1, param_1.ins_h, param_1.window[varData_264 + 1]);
          while (param_1.insert) {
            param_1.ins_h = varData_237(param_1, param_1.ins_h, param_1.window[varData_264 + numericVal_29 - 1]);
            param_1.prev[varData_264 & param_1.w_mask] = param_1.head[param_1.ins_h];
            param_1.head[param_1.ins_h] = varData_264;
            varData_264++;
            param_1.insert--;
            if (param_1.lookahead + param_1.insert < numericVal_29) {
              break;
            }
          }
        }
      } while (param_1.lookahead < varData_226 && param_1.strm.avail_in !== 0);
    };
    const varData_265 = (param_1, param_2) => {
      let varData_266 = param_1.pending_buf_size - 5 > param_1.w_size ? param_1.w_size : param_1.pending_buf_size - 5;
      let varData_267;
      let varData_268;
      let varData_269;
      let numericVal_452 = 0;
      let varData_270 = param_1.strm.avail_in;
      do {
        varData_267 = 65535;
        varData_269 = param_1.bi_valid + 42 >> 3;
        if (param_1.strm.avail_out < varData_269) {
          break;
        }
        varData_269 = param_1.strm.avail_out - varData_269;
        varData_268 = param_1.strstart - param_1.block_start;
        if (varData_267 > varData_268 + param_1.strm.avail_in) {
          varData_267 = varData_268 + param_1.strm.avail_in;
        }
        if (varData_267 > varData_269) {
          varData_267 = varData_269;
        }
        if (varData_267 < varData_266 && (varData_267 === 0 && param_2 !== _0x8fa2c0 || param_2 === _0x13c046 || varData_267 !== varData_268 + param_1.strm.avail_in)) {
          break;
        }
        numericVal_452 = param_2 === _0x8fa2c0 && varData_267 === varData_268 + param_1.strm.avail_in ? 1 : 0;
        _0x2a302d(param_1, 0, 0, numericVal_452);
        param_1.pending_buf[param_1.pending - 4] = varData_267;
        param_1.pending_buf[param_1.pending - 3] = varData_267 >> 8;
        param_1.pending_buf[param_1.pending - 2] = ~varData_267;
        param_1.pending_buf[param_1.pending - 1] = ~varData_267 >> 8;
        varData_238(param_1.strm);
        if (varData_268) {
          if (varData_268 > varData_267) {
            varData_268 = varData_267;
          }
          param_1.strm.output.set(param_1.window.subarray(param_1.block_start, param_1.block_start + varData_268), param_1.strm.next_out);
          param_1.strm.next_out += varData_268;
          param_1.strm.avail_out -= varData_268;
          param_1.strm.total_out += varData_268;
          param_1.block_start += varData_268;
          varData_267 -= varData_268;
        }
        if (varData_267) {
          varData_244(param_1.strm, param_1.strm.output, param_1.strm.next_out, varData_267);
          param_1.strm.next_out += varData_267;
          param_1.strm.avail_out -= varData_267;
          param_1.strm.total_out += varData_267;
        }
      } while (numericVal_452 === 0);
      varData_270 -= param_1.strm.avail_in;
      if (varData_270) {
        if (varData_270 >= param_1.w_size) {
          param_1.matches = 2;
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - param_1.w_size, param_1.strm.next_in), 0);
          param_1.strstart = param_1.w_size;
          param_1.insert = param_1.strstart;
        } else {
          if (param_1.window_size - param_1.strstart <= varData_270) {
            param_1.strstart -= param_1.w_size;
            param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
            if (param_1.matches < 2) {
              param_1.matches++;
            }
            if (param_1.insert > param_1.strstart) {
              param_1.insert = param_1.strstart;
            }
          }
          param_1.window.set(param_1.strm.input.subarray(param_1.strm.next_in - varData_270, param_1.strm.next_in), param_1.strstart);
          param_1.strstart += varData_270;
          param_1.insert += varData_270 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_270;
        }
        param_1.block_start = param_1.strstart;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      if (numericVal_452) {
        return numericVal_43;
      }
      if (param_2 !== _0x13c046 && param_2 !== _0x8fa2c0 && param_1.strm.avail_in === 0 && param_1.strstart === param_1.block_start) {
        return numericVal_41;
      }
      varData_269 = param_1.window_size - param_1.strstart;
      if (param_1.strm.avail_in > varData_269 && param_1.block_start >= param_1.w_size) {
        param_1.block_start -= param_1.w_size;
        param_1.strstart -= param_1.w_size;
        param_1.window.set(param_1.window.subarray(param_1.w_size, param_1.w_size + param_1.strstart), 0);
        if (param_1.matches < 2) {
          param_1.matches++;
        }
        varData_269 += param_1.w_size;
        if (param_1.insert > param_1.strstart) {
          param_1.insert = param_1.strstart;
        }
      }
      if (varData_269 > param_1.strm.avail_in) {
        varData_269 = param_1.strm.avail_in;
      }
      if (varData_269) {
        varData_244(param_1.strm, param_1.window, param_1.strstart, varData_269);
        param_1.strstart += varData_269;
        param_1.insert += varData_269 > param_1.w_size - param_1.insert ? param_1.w_size - param_1.insert : varData_269;
      }
      if (param_1.high_water < param_1.strstart) {
        param_1.high_water = param_1.strstart;
      }
      varData_269 = param_1.bi_valid + 42 >> 3;
      varData_269 = param_1.pending_buf_size - varData_269 > 65535 ? 65535 : param_1.pending_buf_size - varData_269;
      varData_266 = varData_269 > param_1.w_size ? param_1.w_size : varData_269;
      varData_268 = param_1.strstart - param_1.block_start;
      if (varData_268 >= varData_266 || (varData_268 || param_2 === _0x8fa2c0) && param_2 !== _0x13c046 && param_1.strm.avail_in === 0 && varData_268 <= varData_269) {
        varData_267 = varData_268 > varData_269 ? varData_269 : varData_268;
        numericVal_452 = param_2 === _0x8fa2c0 && param_1.strm.avail_in === 0 && varData_267 === varData_268 ? 1 : 0;
        _0x2a302d(param_1, param_1.block_start, varData_267, numericVal_452);
        param_1.block_start += varData_267;
        varData_238(param_1.strm);
      }
      if (numericVal_452) {
        return numericVal_42;
      } else {
        return numericVal_40;
      }
    };
    const varData_271 = (param_1, param_2) => {
      let varData_272;
      let varData_273;
      while (true) {
        if (param_1.lookahead < varData_226) {
          varData_260(param_1);
          if (param_1.lookahead < varData_226 && param_2 === _0x13c046) {
            return numericVal_40;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_272 = 0;
        if (param_1.lookahead >= numericVal_29) {
          param_1.ins_h = varData_237(param_1, param_1.ins_h, param_1.window[param_1.strstart + numericVal_29 - 1]);
          varData_272 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        if (varData_272 !== 0 && param_1.strstart - varData_272 <= param_1.w_size - varData_226) {
          param_1.match_length = varData_246(param_1, varData_272);
        }
        if (param_1.match_length >= numericVal_29) {
          varData_273 = _0x3f25d0(param_1, param_1.strstart - param_1.match_start, param_1.match_length - numericVal_29);
          param_1.lookahead -= param_1.match_length;
          if (param_1.match_length <= param_1.max_lazy_match && param_1.lookahead >= numericVal_29) {
            param_1.match_length--;
            do {
              param_1.strstart++;
              param_1.ins_h = varData_237(param_1, param_1.ins_h, param_1.window[param_1.strstart + numericVal_29 - 1]);
              varData_272 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            } while (--param_1.match_length !== 0);
            param_1.strstart++;
          } else {
            param_1.strstart += param_1.match_length;
            param_1.match_length = 0;
            param_1.ins_h = param_1.window[param_1.strstart];
            param_1.ins_h = varData_237(param_1, param_1.ins_h, param_1.window[param_1.strstart + 1]);
          }
        } else {
          varData_273 = _0x3f25d0(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_273) {
          varData_241(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return numericVal_40;
          }
        }
      }
      param_1.insert = param_1.strstart < numericVal_29 - 1 ? param_1.strstart : numericVal_29 - 1;
      if (param_2 === _0x8fa2c0) {
        varData_241(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return numericVal_42;
        }
        return numericVal_43;
      }
      if (param_1.sym_next) {
        varData_241(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return numericVal_40;
        }
      }
      return numericVal_41;
    };
    const varData_274 = (param_1, param_2) => {
      let varData_275;
      let varData_276;
      let varData_277;
      while (true) {
        if (param_1.lookahead < varData_226) {
          varData_260(param_1);
          if (param_1.lookahead < varData_226 && param_2 === _0x13c046) {
            return numericVal_40;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        varData_275 = 0;
        if (param_1.lookahead >= numericVal_29) {
          param_1.ins_h = varData_237(param_1, param_1.ins_h, param_1.window[param_1.strstart + numericVal_29 - 1]);
          varData_275 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
          param_1.head[param_1.ins_h] = param_1.strstart;
        }
        param_1.prev_length = param_1.match_length;
        param_1.prev_match = param_1.match_start;
        param_1.match_length = numericVal_29 - 1;
        if (varData_275 !== 0 && param_1.prev_length < param_1.max_lazy_match && param_1.strstart - varData_275 <= param_1.w_size - varData_226) {
          param_1.match_length = varData_246(param_1, varData_275);
          if (param_1.match_length <= 5 && (param_1.strategy === _0x50e44b || param_1.match_length === numericVal_29 && param_1.strstart - param_1.match_start > 4096)) {
            param_1.match_length = numericVal_29 - 1;
          }
        }
        if (param_1.prev_length >= numericVal_29 && param_1.match_length <= param_1.prev_length) {
          varData_277 = param_1.strstart + param_1.lookahead - numericVal_29;
          varData_276 = _0x3f25d0(param_1, param_1.strstart - 1 - param_1.prev_match, param_1.prev_length - numericVal_29);
          param_1.lookahead -= param_1.prev_length - 1;
          param_1.prev_length -= 2;
          do {
            if (++param_1.strstart <= varData_277) {
              param_1.ins_h = varData_237(param_1, param_1.ins_h, param_1.window[param_1.strstart + numericVal_29 - 1]);
              varData_275 = param_1.prev[param_1.strstart & param_1.w_mask] = param_1.head[param_1.ins_h];
              param_1.head[param_1.ins_h] = param_1.strstart;
            }
          } while (--param_1.prev_length !== 0);
          param_1.match_available = 0;
          param_1.match_length = numericVal_29 - 1;
          param_1.strstart++;
          if (varData_276) {
            varData_241(param_1, false);
            if (param_1.strm.avail_out === 0) {
              return numericVal_40;
            }
          }
        } else if (param_1.match_available) {
          varData_276 = _0x3f25d0(param_1, 0, param_1.window[param_1.strstart - 1]);
          if (varData_276) {
            varData_241(param_1, false);
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
        varData_276 = _0x3f25d0(param_1, 0, param_1.window[param_1.strstart - 1]);
        param_1.match_available = 0;
      }
      param_1.insert = param_1.strstart < numericVal_29 - 1 ? param_1.strstart : numericVal_29 - 1;
      if (param_2 === _0x8fa2c0) {
        varData_241(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return numericVal_42;
        }
        return numericVal_43;
      }
      if (param_1.sym_next) {
        varData_241(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return numericVal_40;
        }
      }
      return numericVal_41;
    };
    const varData_278 = (param_1, param_2) => {
      let varData_279;
      let varData_280;
      let varData_281;
      let varData_282;
      const varData_283 = param_1.window;
      while (true) {
        if (param_1.lookahead <= numericVal_30) {
          varData_260(param_1);
          if (param_1.lookahead <= numericVal_30 && param_2 === _0x13c046) {
            return numericVal_40;
          }
          if (param_1.lookahead === 0) {
            break;
          }
        }
        param_1.match_length = 0;
        if (param_1.lookahead >= numericVal_29 && param_1.strstart > 0) {
          varData_281 = param_1.strstart - 1;
          varData_280 = varData_283[varData_281];
          if (varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281]) {
            varData_282 = param_1.strstart + numericVal_30;
            do {
            } while (varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_280 === varData_283[++varData_281] && varData_281 < varData_282);
            param_1.match_length = numericVal_30 - (varData_282 - varData_281);
            if (param_1.match_length > param_1.lookahead) {
              param_1.match_length = param_1.lookahead;
            }
          }
        }
        if (param_1.match_length >= numericVal_29) {
          varData_279 = _0x3f25d0(param_1, 1, param_1.match_length - numericVal_29);
          param_1.lookahead -= param_1.match_length;
          param_1.strstart += param_1.match_length;
          param_1.match_length = 0;
        } else {
          varData_279 = _0x3f25d0(param_1, 0, param_1.window[param_1.strstart]);
          param_1.lookahead--;
          param_1.strstart++;
        }
        if (varData_279) {
          varData_241(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return numericVal_40;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0x8fa2c0) {
        varData_241(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return numericVal_42;
        }
        return numericVal_43;
      }
      if (param_1.sym_next) {
        varData_241(param_1, false);
        if (param_1.strm.avail_out === 0) {
          return numericVal_40;
        }
      }
      return numericVal_41;
    };
    const varData_284 = (param_1, param_2) => {
      let varData_285;
      while (true) {
        if (param_1.lookahead === 0) {
          varData_260(param_1);
          if (param_1.lookahead === 0) {
            if (param_2 === _0x13c046) {
              return numericVal_40;
            }
            break;
          }
        }
        param_1.match_length = 0;
        varData_285 = _0x3f25d0(param_1, 0, param_1.window[param_1.strstart]);
        param_1.lookahead--;
        param_1.strstart++;
        if (varData_285) {
          varData_241(param_1, false);
          if (param_1.strm.avail_out === 0) {
            return numericVal_40;
          }
        }
      }
      param_1.insert = 0;
      if (param_2 === _0x8fa2c0) {
        varData_241(param_1, true);
        if (param_1.strm.avail_out === 0) {
          return numericVal_42;
        }
        return numericVal_43;
      }
      if (param_1.sym_next) {
        varData_241(param_1, false);
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
    const itemList_1 = [new handleAction_48(0, 0, 0, 0, varData_265), new handleAction_48(4, 4, 8, 4, varData_271), new handleAction_48(4, 5, 16, 8, varData_271), new handleAction_48(4, 6, 32, 32, varData_271), new handleAction_48(4, 4, 16, 16, varData_274), new handleAction_48(8, 16, 32, 32, varData_274), new handleAction_48(8, 16, 128, 128, varData_274), new handleAction_48(8, 32, 128, 256, varData_274), new handleAction_48(32, 128, 258, 1024, varData_274), new handleAction_48(32, 258, 258, 4096, varData_274)];
    const varData_286 = (param_1) => {
      param_1.window_size = param_1.w_size * 2;
      varData_229(param_1.head);
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
      this.method = _0x52ffed;
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
      this.dyn_ltree = new Uint16Array(varData_225 * 2);
      this.dyn_dtree = new Uint16Array((numericVal_26 * 2 + 1) * 2);
      this.bl_tree = new Uint16Array((numericVal_27 * 2 + 1) * 2);
      varData_229(this.dyn_ltree);
      varData_229(this.dyn_dtree);
      varData_229(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new Uint16Array(numericVal_28 + 1);
      this.heap = new Uint16Array(varData_224 * 2 + 1);
      varData_229(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new Uint16Array(varData_224 * 2 + 1);
      varData_229(this.depth);
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
    const varData_287 = (param_1) => {
      if (!param_1) {
        return 1;
      }
      const varData_288 = param_1.state;
      if (!varData_288 || varData_288.strm !== param_1 || varData_288.status !== numericVal_32 && varData_288.status !== numericVal_33 && varData_288.status !== numericVal_34 && varData_288.status !== numericVal_35 && varData_288.status !== numericVal_36 && varData_288.status !== numericVal_37 && varData_288.status !== numericVal_38 && varData_288.status !== numericVal_39) {
        return 1;
      }
      return 0;
    };
    const varData_289 = (param_1) => {
      if (varData_287(param_1)) {
        return varData_227(param_1, _0x5b909c);
      }
      param_1.total_in = param_1.total_out = 0;
      param_1.data_type = _0x12db50;
      const varData_290 = param_1.state;
      varData_290.pending = 0;
      varData_290.pending_out = 0;
      if (varData_290.wrap < 0) {
        varData_290.wrap = -varData_290.wrap;
      }
      varData_290.status = varData_290.wrap === 2 ? numericVal_33 : varData_290.wrap ? numericVal_32 : numericVal_38;
      param_1.adler = varData_290.wrap === 2 ? 0 : 1;
      varData_290.last_flush = -2;
      _0x23c722(varData_290);
      return _0x12c861;
    };
    const varData_291 = (param_1) => {
      const varData_292 = varData_289(param_1);
      if (varData_292 === _0x12c861) {
        varData_286(param_1.state);
      }
      return varData_292;
    };
    const varData_293 = (param_1, param_2) => {
      if (varData_287(param_1) || param_1.state.wrap !== 2) {
        return _0x5b909c;
      }
      param_1.state.gzhead = param_2;
      return _0x12c861;
    };
    const varData_294 = (param_1, param_2, param_3, param_4, param_5, param_6) => {
      if (!param_1) {
        return _0x5b909c;
      }
      let numericVal_452 = 1;
      if (param_2 === _0x4bfdb9) {
        param_2 = 6;
      }
      if (param_4 < 0) {
        numericVal_452 = 0;
        param_4 = -param_4;
      } else if (param_4 > 15) {
        numericVal_452 = 2;
        param_4 -= 16;
      }
      if (param_5 < 1 || param_5 > numericVal_21 || param_3 !== _0x52ffed || param_4 < 8 || param_4 > 15 || param_2 < 0 || param_2 > 9 || param_6 < 0 || param_6 > _0x4711d8 || param_4 === 8 && numericVal_452 !== 1) {
        return varData_227(param_1, _0x5b909c);
      }
      if (param_4 === 8) {
        param_4 = 9;
      }
      const varData_295 = new handleAction_49();
      param_1.state = varData_295;
      varData_295.strm = param_1;
      varData_295.status = numericVal_32;
      varData_295.wrap = numericVal_452;
      varData_295.gzhead = null;
      varData_295.w_bits = param_4;
      varData_295.w_size = 1 << varData_295.w_bits;
      varData_295.w_mask = varData_295.w_size - 1;
      varData_295.hash_bits = param_5 + 7;
      varData_295.hash_size = 1 << varData_295.hash_bits;
      varData_295.hash_mask = varData_295.hash_size - 1;
      varData_295.hash_shift = ~~((varData_295.hash_bits + numericVal_29 - 1) / numericVal_29);
      varData_295.window = new Uint8Array(varData_295.w_size * 2);
      varData_295.head = new Uint16Array(varData_295.hash_size);
      varData_295.prev = new Uint16Array(varData_295.w_size);
      varData_295.lit_bufsize = 1 << param_5 + 6;
      varData_295.pending_buf_size = varData_295.lit_bufsize * 4;
      varData_295.pending_buf = new Uint8Array(varData_295.pending_buf_size);
      varData_295.sym_buf = varData_295.lit_bufsize;
      varData_295.sym_end = (varData_295.lit_bufsize - 1) * 3;
      varData_295.level = param_2;
      varData_295.strategy = param_6;
      varData_295.method = param_3;
      return varData_291(param_1);
    };
    const varData_296 = (param_1, param_2) => {
      return varData_294(param_1, param_2, _0x52ffed, numericVal_22, numericVal_23, _0x33245);
    };
    const varData_297 = (param_1, param_2) => {
      if (varData_287(param_1) || param_2 > _0x180d96 || param_2 < 0) {
        if (param_1) {
          return varData_227(param_1, _0x5b909c);
        } else {
          return _0x5b909c;
        }
      }
      const varData_298 = param_1.state;
      if (!param_1.output || param_1.avail_in !== 0 && !param_1.input || varData_298.status === numericVal_39 && param_2 !== _0x8fa2c0) {
        return varData_227(param_1, param_1.avail_out === 0 ? _0x5be71c : _0x5b909c);
      }
      const varData_299 = varData_298.last_flush;
      varData_298.last_flush = param_2;
      if (varData_298.pending !== 0) {
        varData_238(param_1);
        if (param_1.avail_out === 0) {
          varData_298.last_flush = -1;
          return _0x12c861;
        }
      } else if (param_1.avail_in === 0 && varData_228(param_2) <= varData_228(varData_299) && param_2 !== _0x8fa2c0) {
        return varData_227(param_1, _0x5be71c);
      }
      if (varData_298.status === numericVal_39 && param_1.avail_in !== 0) {
        return varData_227(param_1, _0x5be71c);
      }
      if (varData_298.status === numericVal_32 && varData_298.wrap === 0) {
        varData_298.status = numericVal_38;
      }
      if (varData_298.status === numericVal_32) {
        let varData_300 = _0x52ffed + (varData_298.w_bits - 8 << 4) << 8;
        let varData_301 = -1;
        if (varData_298.strategy >= _0x1fac00 || varData_298.level < 2) {
          varData_301 = 0;
        } else if (varData_298.level < 6) {
          varData_301 = 1;
        } else if (varData_298.level === 6) {
          varData_301 = 2;
        } else {
          varData_301 = 3;
        }
        varData_300 |= varData_301 << 6;
        if (varData_298.strstart !== 0) {
          varData_300 |= numericVal_31;
        }
        varData_300 += 31 - varData_300 % 31;
        varData_243(varData_298, varData_300);
        if (varData_298.strstart !== 0) {
          varData_243(varData_298, param_1.adler >>> 16);
          varData_243(varData_298, param_1.adler & 65535);
        }
        param_1.adler = 1;
        varData_298.status = numericVal_38;
        varData_238(param_1);
        if (varData_298.pending !== 0) {
          varData_298.last_flush = -1;
          return _0x12c861;
        }
      }
      if (varData_298.status === numericVal_33) {
        param_1.adler = 0;
        varData_242(varData_298, 31);
        varData_242(varData_298, 139);
        varData_242(varData_298, 8);
        if (!varData_298.gzhead) {
          varData_242(varData_298, 0);
          varData_242(varData_298, 0);
          varData_242(varData_298, 0);
          varData_242(varData_298, 0);
          varData_242(varData_298, 0);
          varData_242(varData_298, varData_298.level === 9 ? 2 : varData_298.strategy >= _0x1fac00 || varData_298.level < 2 ? 4 : 0);
          varData_242(varData_298, numericVal_44);
          varData_298.status = numericVal_38;
          varData_238(param_1);
          if (varData_298.pending !== 0) {
            varData_298.last_flush = -1;
            return _0x12c861;
          }
        } else {
          varData_242(varData_298, (varData_298.gzhead.text ? 1 : 0) + (varData_298.gzhead.hcrc ? 2 : 0) + (!varData_298.gzhead.extra ? 0 : 4) + (!varData_298.gzhead.name ? 0 : 8) + (!varData_298.gzhead.comment ? 0 : 16));
          varData_242(varData_298, varData_298.gzhead.time & 255);
          varData_242(varData_298, varData_298.gzhead.time >> 8 & 255);
          varData_242(varData_298, varData_298.gzhead.time >> 16 & 255);
          varData_242(varData_298, varData_298.gzhead.time >> 24 & 255);
          varData_242(varData_298, varData_298.level === 9 ? 2 : varData_298.strategy >= _0x1fac00 || varData_298.level < 2 ? 4 : 0);
          varData_242(varData_298, varData_298.gzhead.os & 255);
          if (varData_298.gzhead.extra && varData_298.gzhead.extra.length) {
            varData_242(varData_298, varData_298.gzhead.extra.length & 255);
            varData_242(varData_298, varData_298.gzhead.extra.length >> 8 & 255);
          }
          if (varData_298.gzhead.hcrc) {
            param_1.adler = varData_220(param_1.adler, varData_298.pending_buf, varData_298.pending, 0);
          }
          varData_298.gzindex = 0;
          varData_298.status = numericVal_34;
        }
      }
      if (varData_298.status === numericVal_34) {
        if (varData_298.gzhead.extra) {
          let varData_302 = varData_298.pending;
          let varData_303 = (varData_298.gzhead.extra.length & 65535) - varData_298.gzindex;
          while (varData_298.pending + varData_303 > varData_298.pending_buf_size) {
            let varData_304 = varData_298.pending_buf_size - varData_298.pending;
            varData_298.pending_buf.set(varData_298.gzhead.extra.subarray(varData_298.gzindex, varData_298.gzindex + varData_304), varData_298.pending);
            varData_298.pending = varData_298.pending_buf_size;
            if (varData_298.gzhead.hcrc && varData_298.pending > varData_302) {
              param_1.adler = varData_220(param_1.adler, varData_298.pending_buf, varData_298.pending - varData_302, varData_302);
            }
            varData_298.gzindex += varData_304;
            varData_238(param_1);
            if (varData_298.pending !== 0) {
              varData_298.last_flush = -1;
              return _0x12c861;
            }
            varData_302 = 0;
            varData_303 -= varData_304;
          }
          let varData_305 = new Uint8Array(varData_298.gzhead.extra);
          varData_298.pending_buf.set(varData_305.subarray(varData_298.gzindex, varData_298.gzindex + varData_303), varData_298.pending);
          varData_298.pending += varData_303;
          if (varData_298.gzhead.hcrc && varData_298.pending > varData_302) {
            param_1.adler = varData_220(param_1.adler, varData_298.pending_buf, varData_298.pending - varData_302, varData_302);
          }
          varData_298.gzindex = 0;
        }
        varData_298.status = numericVal_35;
      }
      if (varData_298.status === numericVal_35) {
        if (varData_298.gzhead.name) {
          let varData_306 = varData_298.pending;
          let varData_307;
          do {
            if (varData_298.pending === varData_298.pending_buf_size) {
              if (varData_298.gzhead.hcrc && varData_298.pending > varData_306) {
                param_1.adler = varData_220(param_1.adler, varData_298.pending_buf, varData_298.pending - varData_306, varData_306);
              }
              varData_238(param_1);
              if (varData_298.pending !== 0) {
                varData_298.last_flush = -1;
                return _0x12c861;
              }
              varData_306 = 0;
            }
            if (varData_298.gzindex < varData_298.gzhead.name.length) {
              varData_307 = varData_298.gzhead.name.charCodeAt(varData_298.gzindex++) & 255;
            } else {
              varData_307 = 0;
            }
            varData_242(varData_298, varData_307);
          } while (varData_307 !== 0);
          if (varData_298.gzhead.hcrc && varData_298.pending > varData_306) {
            param_1.adler = varData_220(param_1.adler, varData_298.pending_buf, varData_298.pending - varData_306, varData_306);
          }
          varData_298.gzindex = 0;
        }
        varData_298.status = numericVal_36;
      }
      if (varData_298.status === numericVal_36) {
        if (varData_298.gzhead.comment) {
          let varData_308 = varData_298.pending;
          let varData_309;
          do {
            if (varData_298.pending === varData_298.pending_buf_size) {
              if (varData_298.gzhead.hcrc && varData_298.pending > varData_308) {
                param_1.adler = varData_220(param_1.adler, varData_298.pending_buf, varData_298.pending - varData_308, varData_308);
              }
              varData_238(param_1);
              if (varData_298.pending !== 0) {
                varData_298.last_flush = -1;
                return _0x12c861;
              }
              varData_308 = 0;
            }
            if (varData_298.gzindex < varData_298.gzhead.comment.length) {
              varData_309 = varData_298.gzhead.comment.charCodeAt(varData_298.gzindex++) & 255;
            } else {
              varData_309 = 0;
            }
            varData_242(varData_298, varData_309);
          } while (varData_309 !== 0);
          if (varData_298.gzhead.hcrc && varData_298.pending > varData_308) {
            param_1.adler = varData_220(param_1.adler, varData_298.pending_buf, varData_298.pending - varData_308, varData_308);
          }
        }
        varData_298.status = numericVal_37;
      }
      if (varData_298.status === numericVal_37) {
        if (varData_298.gzhead.hcrc) {
          if (varData_298.pending + 2 > varData_298.pending_buf_size) {
            varData_238(param_1);
            if (varData_298.pending !== 0) {
              varData_298.last_flush = -1;
              return _0x12c861;
            }
          }
          varData_242(varData_298, param_1.adler & 255);
          varData_242(varData_298, param_1.adler >> 8 & 255);
          param_1.adler = 0;
        }
        varData_298.status = numericVal_38;
        varData_238(param_1);
        if (varData_298.pending !== 0) {
          varData_298.last_flush = -1;
          return _0x12c861;
        }
      }
      if (param_1.avail_in !== 0 || varData_298.lookahead !== 0 || param_2 !== _0x13c046 && varData_298.status !== numericVal_39) {
        let varData_310 = varData_298.level === 0 ? varData_265(varData_298, param_2) : varData_298.strategy === _0x1fac00 ? varData_284(varData_298, param_2) : varData_298.strategy === _0x502702 ? varData_278(varData_298, param_2) : itemList_1[varData_298.level].func(varData_298, param_2);
        if (varData_310 === numericVal_42 || varData_310 === numericVal_43) {
          varData_298.status = numericVal_39;
        }
        if (varData_310 === numericVal_40 || varData_310 === numericVal_42) {
          if (param_1.avail_out === 0) {
            varData_298.last_flush = -1;
          }
          return _0x12c861;
        }
        if (varData_310 === numericVal_41) {
          if (param_2 === _0xf48e39) {
            _0xeb5a7f(varData_298);
          } else if (param_2 !== _0x180d96) {
            _0x2a302d(varData_298, 0, 0, false);
            if (param_2 === _0xfbe01e) {
              varData_229(varData_298.head);
              if (varData_298.lookahead === 0) {
                varData_298.strstart = 0;
                varData_298.block_start = 0;
                varData_298.insert = 0;
              }
            }
          }
          varData_238(param_1);
          if (param_1.avail_out === 0) {
            varData_298.last_flush = -1;
            return _0x12c861;
          }
        }
      }
      if (param_2 !== _0x8fa2c0) {
        return _0x12c861;
      }
      if (varData_298.wrap <= 0) {
        return _0x33eb3b;
      }
      if (varData_298.wrap === 2) {
        varData_242(varData_298, param_1.adler & 255);
        varData_242(varData_298, param_1.adler >> 8 & 255);
        varData_242(varData_298, param_1.adler >> 16 & 255);
        varData_242(varData_298, param_1.adler >> 24 & 255);
        varData_242(varData_298, param_1.total_in & 255);
        varData_242(varData_298, param_1.total_in >> 8 & 255);
        varData_242(varData_298, param_1.total_in >> 16 & 255);
        varData_242(varData_298, param_1.total_in >> 24 & 255);
      } else {
        varData_243(varData_298, param_1.adler >>> 16);
        varData_243(varData_298, param_1.adler & 65535);
      }
      varData_238(param_1);
      if (varData_298.wrap > 0) {
        varData_298.wrap = -varData_298.wrap;
      }
      if (varData_298.pending !== 0) {
        return _0x12c861;
      } else {
        return _0x33eb3b;
      }
    };
    const varData_311 = (param_1) => {
      if (varData_287(param_1)) {
        return _0x5b909c;
      }
      const varData_312 = param_1.state.status;
      param_1.state = null;
      if (varData_312 === numericVal_38) {
        return varData_227(param_1, _0x13960a);
      } else {
        return _0x12c861;
      }
    };
    const varData_313 = (param_1, param_2) => {
      let varData_314 = param_2.length;
      if (varData_287(param_1)) {
        return _0x5b909c;
      }
      const varData_315 = param_1.state;
      const varData_316 = varData_315.wrap;
      if (varData_316 === 2 || varData_316 === 1 && varData_315.status !== numericVal_32 || varData_315.lookahead) {
        return _0x5b909c;
      }
      if (varData_316 === 1) {
        param_1.adler = varData_213(param_1.adler, param_2, varData_314, 0);
      }
      varData_315.wrap = 0;
      if (varData_314 >= varData_315.w_size) {
        if (varData_316 === 0) {
          varData_229(varData_315.head);
          varData_315.strstart = 0;
          varData_315.block_start = 0;
          varData_315.insert = 0;
        }
        let varData_317 = new Uint8Array(varData_315.w_size);
        varData_317.set(param_2.subarray(varData_314 - varData_315.w_size, varData_314), 0);
        param_2 = varData_317;
        varData_314 = varData_315.w_size;
      }
      const varData_318 = param_1.avail_in;
      const varData_319 = param_1.next_in;
      const varData_320 = param_1.input;
      param_1.avail_in = varData_314;
      param_1.next_in = 0;
      param_1.input = param_2;
      varData_260(varData_315);
      while (varData_315.lookahead >= numericVal_29) {
        let varData_321 = varData_315.strstart;
        let varData_322 = varData_315.lookahead - (numericVal_29 - 1);
        do {
          varData_315.ins_h = varData_237(varData_315, varData_315.ins_h, varData_315.window[varData_321 + numericVal_29 - 1]);
          varData_315.prev[varData_321 & varData_315.w_mask] = varData_315.head[varData_315.ins_h];
          varData_315.head[varData_315.ins_h] = varData_321;
          varData_321++;
        } while (--varData_322);
        varData_315.strstart = varData_321;
        varData_315.lookahead = numericVal_29 - 1;
        varData_260(varData_315);
      }
      varData_315.strstart += varData_315.lookahead;
      varData_315.block_start = varData_315.strstart;
      varData_315.insert = varData_315.lookahead;
      varData_315.lookahead = 0;
      varData_315.match_length = varData_315.prev_length = numericVal_29 - 1;
      varData_315.match_available = 0;
      param_1.next_in = varData_319;
      param_1.input = varData_320;
      param_1.avail_in = varData_318;
      varData_315.wrap = varData_316;
      return _0x12c861;
    };
    var varData_323 = varData_296;
    var varData_324 = varData_294;
    var varData_325 = varData_291;
    var varData_326 = varData_289;
    var varData_327 = varData_293;
    var varData_328 = varData_297;
    var varData_329 = varData_311;
    var varData_330 = varData_313;
    var varData_331 = "pako deflate (from Nodeca project)";
    var varData_332 = {
      deflateInit: varData_323,
      deflateInit2: varData_324,
      deflateReset: varData_325,
      deflateResetKeep: varData_326,
      deflateSetHeader: varData_327,
      deflate: varData_328,
      deflateEnd: varData_329,
      deflateSetDictionary: varData_330,
      deflateInfo: varData_331
    };
    var varData_333 = varData_332;
    const varData_334 = (param_1, param_2) => {
      return Object.prototype.hasOwnProperty.call(param_1, param_2);
    };
    function handleAction_50(param_1) {
      const varData_335 = Array.prototype.slice.call(arguments, 1);
      while (varData_335.length) {
        const varData_336 = varData_335.shift();
        if (!varData_336) {
          continue;
        }
        if (typeof varData_336 !== "object") {
          throw new TypeError(varData_336 + "must be non-object");
        }
        for (const varData_337 in varData_336) {
          if (varData_334(varData_336, varData_337)) {
            param_1[varData_337] = varData_336[varData_337];
          }
        }
      }
      return param_1;
    }
    var varData_338 = (param_1) => {
      let numericVal_452 = 0;
      for (let numericVal_462 = 0, loopIdx = param_1.length; numericVal_462 < loopIdx; numericVal_462++) {
        numericVal_452 += param_1[numericVal_462].length;
      }
      const varData_339 = new Uint8Array(numericVal_452);
      for (let numericVal_462 = 0, numericVal_472 = 0, loopIdx = param_1.length; numericVal_462 < loopIdx; numericVal_462++) {
        let varData_340 = param_1[numericVal_462];
        varData_339.set(varData_340, numericVal_472);
        numericVal_472 += varData_340.length;
      }
      return varData_339;
    };
    var varData_341 = {
      assign: handleAction_50,
      flattenChunks: varData_338
    };
    var varData_342 = varData_341;
    let isEnabled = true;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (err) {
      isEnabled = false;
    }
    const varData_343 = new Uint8Array(256);
    for (let numericVal_452 = 0; numericVal_452 < 256; numericVal_452++) {
      varData_343[numericVal_452] = numericVal_452 >= 252 ? 6 : numericVal_452 >= 248 ? 5 : numericVal_452 >= 240 ? 4 : numericVal_452 >= 224 ? 3 : numericVal_452 >= 192 ? 2 : 1;
    }
    varData_343[254] = varData_343[254] = 1;
    var varData_344 = (param_1) => {
      if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) {
        return new TextEncoder().encode(param_1);
      }
      let varData_345;
      let varData_346;
      let varData_347;
      let varData_348;
      let varData_349;
      let varData_350 = param_1.length;
      let numericVal_452 = 0;
      for (varData_348 = 0; varData_348 < varData_350; varData_348++) {
        varData_346 = param_1.charCodeAt(varData_348);
        if ((varData_346 & 64512) === 55296 && varData_348 + 1 < varData_350) {
          varData_347 = param_1.charCodeAt(varData_348 + 1);
          if ((varData_347 & 64512) === 56320) {
            varData_346 = 65536 + (varData_346 - 55296 << 10) + (varData_347 - 56320);
            varData_348++;
          }
        }
        numericVal_452 += varData_346 < 128 ? 1 : varData_346 < 2048 ? 2 : varData_346 < 65536 ? 3 : 4;
      }
      varData_345 = new Uint8Array(numericVal_452);
      varData_349 = 0;
      varData_348 = 0;
      for (; varData_349 < numericVal_452; varData_348++) {
        varData_346 = param_1.charCodeAt(varData_348);
        if ((varData_346 & 64512) === 55296 && varData_348 + 1 < varData_350) {
          varData_347 = param_1.charCodeAt(varData_348 + 1);
          if ((varData_347 & 64512) === 56320) {
            varData_346 = 65536 + (varData_346 - 55296 << 10) + (varData_347 - 56320);
            varData_348++;
          }
        }
        if (varData_346 < 128) {
          varData_345[varData_349++] = varData_346;
        } else if (varData_346 < 2048) {
          varData_345[varData_349++] = varData_346 >>> 6 | 192;
          varData_345[varData_349++] = varData_346 & 63 | 128;
        } else if (varData_346 < 65536) {
          varData_345[varData_349++] = varData_346 >>> 12 | 224;
          varData_345[varData_349++] = varData_346 >>> 6 & 63 | 128;
          varData_345[varData_349++] = varData_346 & 63 | 128;
        } else {
          varData_345[varData_349++] = varData_346 >>> 18 | 240;
          varData_345[varData_349++] = varData_346 >>> 12 & 63 | 128;
          varData_345[varData_349++] = varData_346 >>> 6 & 63 | 128;
          varData_345[varData_349++] = varData_346 & 63 | 128;
        }
      }
      return varData_345;
    };
    const varData_351 = (param_1, param_2) => {
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
    var varData_352 = (param_1, param_2) => {
      const varData_353 = param_2 || param_1.length;
      if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) {
        return new TextDecoder().decode(param_1.subarray(0, param_2));
      }
      let varData_354;
      let varData_355;
      const varData_356 = new Array(varData_353 * 2);
      varData_355 = 0;
      varData_354 = 0;
      while (varData_354 < varData_353) {
        let varData_357 = param_1[varData_354++];
        if (varData_357 < 128) {
          varData_356[varData_355++] = varData_357;
          continue;
        }
        let varData_358 = varData_343[varData_357];
        if (varData_358 > 4) {
          varData_356[varData_355++] = 65533;
          varData_354 += varData_358 - 1;
          continue;
        }
        varData_357 &= varData_358 === 2 ? 31 : varData_358 === 3 ? 15 : 7;
        while (varData_358 > 1 && varData_354 < varData_353) {
          varData_357 = varData_357 << 6 | param_1[varData_354++] & 63;
          varData_358--;
        }
        if (varData_358 > 1) {
          varData_356[varData_355++] = 65533;
          continue;
        }
        if (varData_357 < 65536) {
          varData_356[varData_355++] = varData_357;
        } else {
          varData_357 -= 65536;
          varData_356[varData_355++] = varData_357 >> 10 & 1023 | 55296;
          varData_356[varData_355++] = varData_357 & 1023 | 56320;
        }
      }
      return varData_351(varData_356, varData_355);
    };
    var varData_359 = (param_1, param_2) => {
      param_2 = param_2 || param_1.length;
      if (param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      let varData_360 = param_2 - 1;
      while (varData_360 >= 0 && (param_1[varData_360] & 192) === 128) {
        varData_360--;
      }
      if (varData_360 < 0) {
        return param_2;
      }
      if (varData_360 === 0) {
        return param_2;
      }
      if (varData_360 + varData_343[param_1[varData_360]] > param_2) {
        return varData_360;
      } else {
        return param_2;
      }
    };
    var varData_361 = {
      string2buf: varData_344,
      buf2string: varData_352,
      utf8border: varData_359
    };
    var varData_362 = varData_361;
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
    var varData_363 = handleAction_51;
    const varData_364 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x5be2f5,
      Z_SYNC_FLUSH: _0x1789e4,
      Z_FULL_FLUSH: _0x3514fc,
      Z_FINISH: _0x2bc435,
      Z_OK: _0x2c49e6,
      Z_STREAM_END: _0x15ec2c,
      Z_DEFAULT_COMPRESSION: _0x52eb0a,
      Z_DEFAULT_STRATEGY: _0x26284a,
      Z_DEFLATED: _0x236135
    } = varData_223;
    function handleAction_52(param_1) {
      var varData_365 = {
        level: _0x52eb0a,
        method: _0x236135,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: _0x26284a
      };
      this.options = varData_342.assign(varData_365, param_1 || {});
      let varData_366 = this.options;
      if (varData_366.raw && varData_366.windowBits > 0) {
        varData_366.windowBits = -varData_366.windowBits;
      } else if (varData_366.gzip && varData_366.windowBits > 0 && varData_366.windowBits < 16) {
        varData_366.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_363();
      this.strm.avail_out = 0;
      let varData_367 = varData_333.deflateInit2(this.strm, varData_366.level, varData_366.method, varData_366.windowBits, varData_366.memLevel, varData_366.strategy);
      if (varData_367 !== _0x2c49e6) {
        throw new Error(varData_221[varData_367]);
      }
      if (varData_366.header) {
        varData_333.deflateSetHeader(this.strm, varData_366.header);
      }
      if (varData_366.dictionary) {
        let varData_368;
        if (typeof varData_366.dictionary === "string") {
          varData_368 = varData_362.string2buf(varData_366.dictionary);
        } else if (varData_364.call(varData_366.dictionary) === "[object ArrayBuffer]") {
          varData_368 = new Uint8Array(varData_366.dictionary);
        } else {
          varData_368 = varData_366.dictionary;
        }
        varData_367 = varData_333.deflateSetDictionary(this.strm, varData_368);
        if (varData_367 !== _0x2c49e6) {
          throw new Error(varData_221[varData_367]);
        }
        this._dict_set = true;
      }
    }
    handleAction_52.prototype.push = function(param_1, param_2) {
      const varData_369 = this.strm;
      const varData_370 = this.options.chunkSize;
      let varData_371;
      let varData_372;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_372 = param_2;
      } else {
        varData_372 = param_2 === true ? _0x2bc435 : _0x5be2f5;
      }
      if (typeof param_1 === "string") {
        varData_369.input = varData_362.string2buf(param_1);
      } else if (varData_364.call(param_1) === "[object ArrayBuffer]") {
        varData_369.input = new Uint8Array(param_1);
      } else {
        varData_369.input = param_1;
      }
      varData_369.next_in = 0;
      varData_369.avail_in = varData_369.input.length;
      while (true) {
        if (varData_369.avail_out === 0) {
          varData_369.output = new Uint8Array(varData_370);
          varData_369.next_out = 0;
          varData_369.avail_out = varData_370;
        }
        if ((varData_372 === _0x1789e4 || varData_372 === _0x3514fc) && varData_369.avail_out <= 6) {
          this.onData(varData_369.output.subarray(0, varData_369.next_out));
          varData_369.avail_out = 0;
          continue;
        }
        varData_371 = varData_333.deflate(varData_369, varData_372);
        if (varData_371 === _0x15ec2c) {
          if (varData_369.next_out > 0) {
            this.onData(varData_369.output.subarray(0, varData_369.next_out));
          }
          varData_371 = varData_333.deflateEnd(this.strm);
          this.onEnd(varData_371);
          this.ended = true;
          return varData_371 === _0x2c49e6;
        }
        if (varData_369.avail_out === 0) {
          this.onData(varData_369.output);
          continue;
        }
        if (varData_372 > 0 && varData_369.next_out > 0) {
          this.onData(varData_369.output.subarray(0, varData_369.next_out));
          varData_369.avail_out = 0;
          continue;
        }
        if (varData_369.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_52.prototype.onData = function(param_1) {
      this.chunks.push(param_1);
    };
    handleAction_52.prototype.onEnd = function(param_1) {
      if (param_1 === _0x2c49e6) {
        this.result = varData_342.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_53(param_1, param_2) {
      const varData_373 = new handleAction_52(param_2);
      varData_373.push(param_1, true);
      if (varData_373.err) {
        throw varData_373.msg || varData_221[varData_373.err];
      }
      return varData_373.result;
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
    var varData_374 = handleAction_52;
    var varData_375 = handleAction_53;
    var varData_376 = handleAction_54;
    var varData_377 = handleAction_55;
    var varData_378 = varData_223;
    var varData_379 = {
      Deflate: varData_374,
      deflate: varData_375,
      deflateRaw: varData_376,
      gzip: varData_377,
      constants: varData_378
    };
    var varData_380 = varData_379;
    const numericVal_45 = 16209;
    const numericVal_46 = 16191;
    var varData_381 = function _0x29fabf(param_1, param_2) {
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
      let varData_404;
      let varData_405;
      const varData_406 = param_1.state;
      varData_382 = param_1.next_in;
      varData_404 = param_1.input;
      varData_383 = varData_382 + (param_1.avail_in - 5);
      varData_384 = param_1.next_out;
      varData_405 = param_1.output;
      varData_385 = varData_384 - (param_2 - param_1.avail_out);
      varData_386 = varData_384 + (param_1.avail_out - 257);
      varData_387 = varData_406.dmax;
      varData_388 = varData_406.wsize;
      varData_389 = varData_406.whave;
      varData_390 = varData_406.wnext;
      varData_391 = varData_406.window;
      varData_392 = varData_406.hold;
      varData_393 = varData_406.bits;
      varData_394 = varData_406.lencode;
      varData_395 = varData_406.distcode;
      varData_396 = (1 << varData_406.lenbits) - 1;
      varData_397 = (1 << varData_406.distbits) - 1;
      _0x2ce75d: do {
        if (varData_393 < 15) {
          varData_392 += varData_404[varData_382++] << varData_393;
          varData_393 += 8;
          varData_392 += varData_404[varData_382++] << varData_393;
          varData_393 += 8;
        }
        varData_398 = varData_394[varData_392 & varData_396];
        _0x33b376: while (true) {
          varData_399 = varData_398 >>> 24;
          varData_392 >>>= varData_399;
          varData_393 -= varData_399;
          varData_399 = varData_398 >>> 16 & 255;
          if (varData_399 === 0) {
            varData_405[varData_384++] = varData_398 & 65535;
          } else if (varData_399 & 16) {
            varData_400 = varData_398 & 65535;
            varData_399 &= 15;
            if (varData_399) {
              if (varData_393 < varData_399) {
                varData_392 += varData_404[varData_382++] << varData_393;
                varData_393 += 8;
              }
              varData_400 += varData_392 & (1 << varData_399) - 1;
              varData_392 >>>= varData_399;
              varData_393 -= varData_399;
            }
            if (varData_393 < 15) {
              varData_392 += varData_404[varData_382++] << varData_393;
              varData_393 += 8;
              varData_392 += varData_404[varData_382++] << varData_393;
              varData_393 += 8;
            }
            varData_398 = varData_395[varData_392 & varData_397];
            _0x14bcfb: while (true) {
              varData_399 = varData_398 >>> 24;
              varData_392 >>>= varData_399;
              varData_393 -= varData_399;
              varData_399 = varData_398 >>> 16 & 255;
              if (varData_399 & 16) {
                varData_401 = varData_398 & 65535;
                varData_399 &= 15;
                if (varData_393 < varData_399) {
                  varData_392 += varData_404[varData_382++] << varData_393;
                  varData_393 += 8;
                  if (varData_393 < varData_399) {
                    varData_392 += varData_404[varData_382++] << varData_393;
                    varData_393 += 8;
                  }
                }
                varData_401 += varData_392 & (1 << varData_399) - 1;
                if (varData_401 > varData_387) {
                  param_1.msg = "invalid distance too far back";
                  varData_406.mode = numericVal_45;
                  break _0x2ce75d;
                }
                varData_392 >>>= varData_399;
                varData_393 -= varData_399;
                varData_399 = varData_384 - varData_385;
                if (varData_401 > varData_399) {
                  varData_399 = varData_401 - varData_399;
                  if (varData_399 > varData_389) {
                    if (varData_406.sane) {
                      param_1.msg = "invalid distance too far back";
                      varData_406.mode = numericVal_45;
                      break _0x2ce75d;
                    }
                  }
                  varData_402 = 0;
                  varData_403 = varData_391;
                  if (varData_390 === 0) {
                    varData_402 += varData_388 - varData_399;
                    if (varData_399 < varData_400) {
                      varData_400 -= varData_399;
                      do {
                        varData_405[varData_384++] = varData_391[varData_402++];
                      } while (--varData_399);
                      varData_402 = varData_384 - varData_401;
                      varData_403 = varData_405;
                    }
                  } else if (varData_390 < varData_399) {
                    varData_402 += varData_388 + varData_390 - varData_399;
                    varData_399 -= varData_390;
                    if (varData_399 < varData_400) {
                      varData_400 -= varData_399;
                      do {
                        varData_405[varData_384++] = varData_391[varData_402++];
                      } while (--varData_399);
                      varData_402 = 0;
                      if (varData_390 < varData_400) {
                        varData_399 = varData_390;
                        varData_400 -= varData_399;
                        do {
                          varData_405[varData_384++] = varData_391[varData_402++];
                        } while (--varData_399);
                        varData_402 = varData_384 - varData_401;
                        varData_403 = varData_405;
                      }
                    }
                  } else {
                    varData_402 += varData_390 - varData_399;
                    if (varData_399 < varData_400) {
                      varData_400 -= varData_399;
                      do {
                        varData_405[varData_384++] = varData_391[varData_402++];
                      } while (--varData_399);
                      varData_402 = varData_384 - varData_401;
                      varData_403 = varData_405;
                    }
                  }
                  while (varData_400 > 2) {
                    varData_405[varData_384++] = varData_403[varData_402++];
                    varData_405[varData_384++] = varData_403[varData_402++];
                    varData_405[varData_384++] = varData_403[varData_402++];
                    varData_400 -= 3;
                  }
                  if (varData_400) {
                    varData_405[varData_384++] = varData_403[varData_402++];
                    if (varData_400 > 1) {
                      varData_405[varData_384++] = varData_403[varData_402++];
                    }
                  }
                } else {
                  varData_402 = varData_384 - varData_401;
                  do {
                    varData_405[varData_384++] = varData_405[varData_402++];
                    varData_405[varData_384++] = varData_405[varData_402++];
                    varData_405[varData_384++] = varData_405[varData_402++];
                    varData_400 -= 3;
                  } while (varData_400 > 2);
                  if (varData_400) {
                    varData_405[varData_384++] = varData_405[varData_402++];
                    if (varData_400 > 1) {
                      varData_405[varData_384++] = varData_405[varData_402++];
                    }
                  }
                }
              } else if ((varData_399 & 64) === 0) {
                varData_398 = varData_395[(varData_398 & 65535) + (varData_392 & (1 << varData_399) - 1)];
                continue _0x14bcfb;
              } else {
                param_1.msg = "invalid distance code";
                varData_406.mode = numericVal_45;
                break _0x2ce75d;
              }
              break;
            }
          } else if ((varData_399 & 64) === 0) {
            varData_398 = varData_394[(varData_398 & 65535) + (varData_392 & (1 << varData_399) - 1)];
            continue _0x33b376;
          } else if (varData_399 & 32) {
            varData_406.mode = numericVal_46;
            break _0x2ce75d;
          } else {
            param_1.msg = "invalid literal/length code";
            varData_406.mode = numericVal_45;
            break _0x2ce75d;
          }
          break;
        }
      } while (varData_382 < varData_383 && varData_384 < varData_386);
      varData_400 = varData_393 >> 3;
      varData_382 -= varData_400;
      varData_393 -= varData_400 << 3;
      varData_392 &= (1 << varData_393) - 1;
      param_1.next_in = varData_382;
      param_1.next_out = varData_384;
      param_1.avail_in = varData_382 < varData_383 ? 5 + (varData_383 - varData_382) : 5 - (varData_382 - varData_383);
      param_1.avail_out = varData_384 < varData_386 ? 257 + (varData_386 - varData_384) : 257 - (varData_384 - varData_386);
      varData_406.hold = varData_392;
      varData_406.bits = varData_393;
      return;
    };
    const numericVal_47 = 15;
    const numericVal_48 = 852;
    const numericVal_49 = 592;
    const numericVal_50 = 0;
    const numericVal_51 = 1;
    const numericVal_52 = 2;
    const varData_407 = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]);
    const varData_408 = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]);
    const varData_409 = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]);
    const varData_410 = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
    const varData_411 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
      const varData_412 = param_8.bits;
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
      let varData_413;
      let varData_414;
      let varData_415;
      let varData_416;
      let varData_417;
      let varData_418 = null;
      let varData_419;
      const varData_420 = new Uint16Array(numericVal_47 + 1);
      const varData_421 = new Uint16Array(numericVal_47 + 1);
      let varData_422 = null;
      let varData_423;
      let varData_424;
      let varData_425;
      for (numericVal_532 = 0; numericVal_532 <= numericVal_47; numericVal_532++) {
        varData_420[numericVal_532] = 0;
      }
      for (numericVal_542 = 0; numericVal_542 < param_4; numericVal_542++) {
        varData_420[param_2[param_3 + numericVal_542]]++;
      }
      numericVal_572 = varData_412;
      for (numericVal_562 = numericVal_47; numericVal_562 >= 1; numericVal_562--) {
        if (varData_420[numericVal_562] !== 0) {
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
        if (varData_420[numericVal_552] !== 0) {
          break;
        }
      }
      if (numericVal_572 < numericVal_552) {
        numericVal_572 = numericVal_552;
      }
      numericVal_602 = 1;
      for (numericVal_532 = 1; numericVal_532 <= numericVal_47; numericVal_532++) {
        numericVal_602 <<= 1;
        numericVal_602 -= varData_420[numericVal_532];
        if (numericVal_602 < 0) {
          return -1;
        }
      }
      if (numericVal_602 > 0 && (param_1 === numericVal_50 || numericVal_562 !== 1)) {
        return -1;
      }
      varData_421[1] = 0;
      for (numericVal_532 = 1; numericVal_532 < numericVal_47; numericVal_532++) {
        varData_421[numericVal_532 + 1] = varData_421[numericVal_532] + varData_420[numericVal_532];
      }
      for (numericVal_542 = 0; numericVal_542 < param_4; numericVal_542++) {
        if (param_2[param_3 + numericVal_542] !== 0) {
          param_7[varData_421[param_2[param_3 + numericVal_542]]++] = numericVal_542;
        }
      }
      if (param_1 === numericVal_50) {
        varData_418 = varData_422 = param_7;
        varData_419 = 20;
      } else if (param_1 === numericVal_51) {
        varData_418 = varData_407;
        varData_422 = varData_408;
        varData_419 = 257;
      } else {
        varData_418 = varData_409;
        varData_422 = varData_410;
        varData_419 = 0;
      }
      numericVal_622 = 0;
      numericVal_542 = 0;
      numericVal_532 = numericVal_552;
      varData_417 = param_6;
      numericVal_582 = numericVal_572;
      numericVal_592 = 0;
      varData_415 = -1;
      numericVal_612 = 1 << numericVal_572;
      varData_416 = numericVal_612 - 1;
      if (param_1 === numericVal_51 && numericVal_612 > numericVal_48 || param_1 === numericVal_52 && numericVal_612 > numericVal_49) {
        return 1;
      }
      while (true) {
        varData_423 = numericVal_532 - numericVal_592;
        if (param_7[numericVal_542] + 1 < varData_419) {
          varData_424 = 0;
          varData_425 = param_7[numericVal_542];
        } else if (param_7[numericVal_542] >= varData_419) {
          varData_424 = varData_422[param_7[numericVal_542] - varData_419];
          varData_425 = varData_418[param_7[numericVal_542] - varData_419];
        } else {
          varData_424 = 96;
          varData_425 = 0;
        }
        varData_413 = 1 << numericVal_532 - numericVal_592;
        varData_414 = 1 << numericVal_582;
        numericVal_552 = varData_414;
        do {
          varData_414 -= varData_413;
          param_5[varData_417 + (numericVal_622 >> numericVal_592) + varData_414] = varData_423 << 24 | varData_424 << 16 | varData_425 | 0;
        } while (varData_414 !== 0);
        varData_413 = 1 << numericVal_532 - 1;
        while (numericVal_622 & varData_413) {
          varData_413 >>= 1;
        }
        if (varData_413 !== 0) {
          numericVal_622 &= varData_413 - 1;
          numericVal_622 += varData_413;
        } else {
          numericVal_622 = 0;
        }
        numericVal_542++;
        if (--varData_420[numericVal_532] === 0) {
          if (numericVal_532 === numericVal_562) {
            break;
          }
          numericVal_532 = param_2[param_3 + param_7[numericVal_542]];
        }
        if (numericVal_532 > numericVal_572 && (numericVal_622 & varData_416) !== varData_415) {
          if (numericVal_592 === 0) {
            numericVal_592 = numericVal_572;
          }
          varData_417 += numericVal_552;
          numericVal_582 = numericVal_532 - numericVal_592;
          numericVal_602 = 1 << numericVal_582;
          while (numericVal_582 + numericVal_592 < numericVal_562) {
            numericVal_602 -= varData_420[numericVal_582 + numericVal_592];
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
          varData_415 = numericVal_622 & varData_416;
          param_5[varData_415] = numericVal_572 << 24 | numericVal_582 << 16 | varData_417 - param_6 | 0;
        }
      }
      if (numericVal_622 !== 0) {
        param_5[varData_417 + numericVal_622] = numericVal_532 - numericVal_592 << 24 | 4194304 | 0;
      }
      param_8.bits = numericVal_572;
      return 0;
    };
    var varData_426 = varData_411;
    const numericVal_53 = 0;
    const numericVal_54 = 1;
    const numericVal_55 = 2;
    const {
      Z_FINISH: _0x2bfdef,
      Z_BLOCK: _0x4f7b36,
      Z_TREES: _0x4a9b86,
      Z_OK: _0x19d626,
      Z_STREAM_END: _0x51c3bc,
      Z_NEED_DICT: _0x12b8e0,
      Z_STREAM_ERROR: _0x899299,
      Z_DATA_ERROR: _0x45cfaa,
      Z_MEM_ERROR: _0x263035,
      Z_BUF_ERROR: _0x569631,
      Z_DEFLATED: _0xcbf9e5
    } = varData_223;
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
    const varData_427 = numericVal_90;
    const varData_428 = (param_1) => {
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
    const varData_429 = (param_1) => {
      if (!param_1) {
        return 1;
      }
      const varData_430 = param_1.state;
      if (!varData_430 || varData_430.strm !== param_1 || varData_430.mode < numericVal_56 || varData_430.mode > numericVal_87) {
        return 1;
      }
      return 0;
    };
    const varData_431 = (param_1) => {
      if (varData_429(param_1)) {
        return _0x899299;
      }
      const varData_432 = param_1.state;
      param_1.total_in = param_1.total_out = varData_432.total = 0;
      param_1.msg = "";
      if (varData_432.wrap) {
        param_1.adler = varData_432.wrap & 1;
      }
      varData_432.mode = numericVal_56;
      varData_432.last = 0;
      varData_432.havedict = 0;
      varData_432.flags = -1;
      varData_432.dmax = 32768;
      varData_432.head = null;
      varData_432.hold = 0;
      varData_432.bits = 0;
      varData_432.lencode = varData_432.lendyn = new Int32Array(numericVal_88);
      varData_432.distcode = varData_432.distdyn = new Int32Array(numericVal_89);
      varData_432.sane = 1;
      varData_432.back = -1;
      return _0x19d626;
    };
    const varData_433 = (param_1) => {
      if (varData_429(param_1)) {
        return _0x899299;
      }
      const varData_434 = param_1.state;
      varData_434.wsize = 0;
      varData_434.whave = 0;
      varData_434.wnext = 0;
      return varData_431(param_1);
    };
    const varData_435 = (param_1, param_2) => {
      let varData_436;
      if (varData_429(param_1)) {
        return _0x899299;
      }
      const varData_437 = param_1.state;
      if (param_2 < 0) {
        varData_436 = 0;
        param_2 = -param_2;
      } else {
        varData_436 = (param_2 >> 4) + 5;
        if (param_2 < 48) {
          param_2 &= 15;
        }
      }
      if (param_2 && (param_2 < 8 || param_2 > 15)) {
        return _0x899299;
      }
      if (varData_437.window !== null && varData_437.wbits !== param_2) {
        varData_437.window = null;
      }
      varData_437.wrap = varData_436;
      varData_437.wbits = param_2;
      return varData_433(param_1);
    };
    const varData_438 = (param_1, param_2) => {
      if (!param_1) {
        return _0x899299;
      }
      const varData_439 = new handleAction_56();
      param_1.state = varData_439;
      varData_439.strm = param_1;
      varData_439.window = null;
      varData_439.mode = numericVal_56;
      const varData_440 = varData_435(param_1, param_2);
      if (varData_440 !== _0x19d626) {
        param_1.state = null;
      }
      return varData_440;
    };
    const varData_441 = (param_1) => {
      return varData_438(param_1, varData_427);
    };
    let isEnabled_1 = true;
    let varData_442;
    let varData_443;
    const varData_444 = (param_1) => {
      if (isEnabled_1) {
        varData_442 = new Int32Array(512);
        varData_443 = new Int32Array(32);
        let numericVal_91 = 0;
        while (numericVal_91 < 144) {
          param_1.lens[numericVal_91++] = 8;
        }
        while (numericVal_91 < 256) {
          param_1.lens[numericVal_91++] = 9;
        }
        while (numericVal_91 < 280) {
          param_1.lens[numericVal_91++] = 7;
        }
        while (numericVal_91 < 288) {
          param_1.lens[numericVal_91++] = 8;
        }
        varData_426(numericVal_54, param_1.lens, 0, 288, varData_442, 0, param_1.work, {
          bits: 9
        });
        numericVal_91 = 0;
        while (numericVal_91 < 32) {
          param_1.lens[numericVal_91++] = 5;
        }
        varData_426(numericVal_55, param_1.lens, 0, 32, varData_443, 0, param_1.work, {
          bits: 5
        });
        isEnabled_1 = false;
      }
      param_1.lencode = varData_442;
      param_1.lenbits = 9;
      param_1.distcode = varData_443;
      param_1.distbits = 5;
    };
    const varData_445 = (param_1, param_2, param_3, param_4) => {
      let varData_446;
      const varData_447 = param_1.state;
      if (varData_447.window === null) {
        varData_447.wsize = 1 << varData_447.wbits;
        varData_447.wnext = 0;
        varData_447.whave = 0;
        varData_447.window = new Uint8Array(varData_447.wsize);
      }
      if (param_4 >= varData_447.wsize) {
        varData_447.window.set(param_2.subarray(param_3 - varData_447.wsize, param_3), 0);
        varData_447.wnext = 0;
        varData_447.whave = varData_447.wsize;
      } else {
        varData_446 = varData_447.wsize - varData_447.wnext;
        if (varData_446 > param_4) {
          varData_446 = param_4;
        }
        varData_447.window.set(param_2.subarray(param_3 - param_4, param_3 - param_4 + varData_446), varData_447.wnext);
        param_4 -= varData_446;
        if (param_4) {
          varData_447.window.set(param_2.subarray(param_3 - param_4, param_3), 0);
          varData_447.wnext = param_4;
          varData_447.whave = varData_447.wsize;
        } else {
          varData_447.wnext += varData_446;
          if (varData_447.wnext === varData_447.wsize) {
            varData_447.wnext = 0;
          }
          if (varData_447.whave < varData_447.wsize) {
            varData_447.whave += varData_446;
          }
        }
      }
      return 0;
    };
    const varData_448 = (param_1, param_2) => {
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
      let varData_461;
      let varData_462;
      let numericVal_91 = 0;
      let varData_463;
      let varData_464;
      let varData_465;
      let varData_466;
      let varData_467;
      let varData_468;
      let varData_469;
      let varData_470;
      const varData_471 = new Uint8Array(4);
      let varData_472;
      let varData_473;
      const varData_474 = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (varData_429(param_1) || !param_1.output || !param_1.input && param_1.avail_in !== 0) {
        return _0x899299;
      }
      varData_449 = param_1.state;
      if (varData_449.mode === numericVal_67) {
        varData_449.mode = numericVal_68;
      }
      varData_453 = param_1.next_out;
      varData_451 = param_1.output;
      varData_455 = param_1.avail_out;
      varData_452 = param_1.next_in;
      varData_450 = param_1.input;
      varData_454 = param_1.avail_in;
      varData_456 = varData_449.hold;
      varData_457 = varData_449.bits;
      varData_458 = varData_454;
      varData_459 = varData_455;
      varData_470 = _0x19d626;
      _0x513f0d: while (true) {
        switch (varData_449.mode) {
          case numericVal_56:
            if (varData_449.wrap === 0) {
              varData_449.mode = numericVal_68;
              break;
            }
            while (varData_457 < 16) {
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            if (varData_449.wrap & 2 && varData_456 === 35615) {
              if (varData_449.wbits === 0) {
                varData_449.wbits = 15;
              }
              varData_449.check = 0;
              varData_471[0] = varData_456 & 255;
              varData_471[1] = varData_456 >>> 8 & 255;
              varData_449.check = varData_220(varData_449.check, varData_471, 2, 0);
              varData_456 = 0;
              varData_457 = 0;
              varData_449.mode = numericVal_57;
              break;
            }
            if (varData_449.head) {
              varData_449.head.done = false;
            }
            if (!(varData_449.wrap & 1) || (((varData_456 & 255) << 8) + (varData_456 >> 8)) % 31) {
              param_1.msg = "incorrect header check";
              varData_449.mode = numericVal_85;
              break;
            }
            if ((varData_456 & 15) !== _0xcbf9e5) {
              param_1.msg = "unknown compression method";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_456 >>>= 4;
            varData_457 -= 4;
            varData_469 = (varData_456 & 15) + 8;
            if (varData_449.wbits === 0) {
              varData_449.wbits = varData_469;
            }
            if (varData_469 > 15 || varData_469 > varData_449.wbits) {
              param_1.msg = "invalid window size";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_449.dmax = 1 << varData_449.wbits;
            varData_449.flags = 0;
            param_1.adler = varData_449.check = 1;
            varData_449.mode = varData_456 & 512 ? numericVal_65 : numericVal_67;
            varData_456 = 0;
            varData_457 = 0;
            break;
          case numericVal_57:
            while (varData_457 < 16) {
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            varData_449.flags = varData_456;
            if ((varData_449.flags & 255) !== _0xcbf9e5) {
              param_1.msg = "unknown compression method";
              varData_449.mode = numericVal_85;
              break;
            }
            if (varData_449.flags & 57344) {
              param_1.msg = "unknown header flags set";
              varData_449.mode = numericVal_85;
              break;
            }
            if (varData_449.head) {
              varData_449.head.text = varData_456 >> 8 & 1;
            }
            if (varData_449.flags & 512 && varData_449.wrap & 4) {
              varData_471[0] = varData_456 & 255;
              varData_471[1] = varData_456 >>> 8 & 255;
              varData_449.check = varData_220(varData_449.check, varData_471, 2, 0);
            }
            varData_456 = 0;
            varData_457 = 0;
            varData_449.mode = numericVal_58;
          case numericVal_58:
            while (varData_457 < 32) {
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            if (varData_449.head) {
              varData_449.head.time = varData_456;
            }
            if (varData_449.flags & 512 && varData_449.wrap & 4) {
              varData_471[0] = varData_456 & 255;
              varData_471[1] = varData_456 >>> 8 & 255;
              varData_471[2] = varData_456 >>> 16 & 255;
              varData_471[3] = varData_456 >>> 24 & 255;
              varData_449.check = varData_220(varData_449.check, varData_471, 4, 0);
            }
            varData_456 = 0;
            varData_457 = 0;
            varData_449.mode = numericVal_59;
          case numericVal_59:
            while (varData_457 < 16) {
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            if (varData_449.head) {
              varData_449.head.xflags = varData_456 & 255;
              varData_449.head.os = varData_456 >> 8;
            }
            if (varData_449.flags & 512 && varData_449.wrap & 4) {
              varData_471[0] = varData_456 & 255;
              varData_471[1] = varData_456 >>> 8 & 255;
              varData_449.check = varData_220(varData_449.check, varData_471, 2, 0);
            }
            varData_456 = 0;
            varData_457 = 0;
            varData_449.mode = numericVal_60;
          case numericVal_60:
            if (varData_449.flags & 1024) {
              while (varData_457 < 16) {
                if (varData_454 === 0) {
                  break _0x513f0d;
                }
                varData_454--;
                varData_456 += varData_450[varData_452++] << varData_457;
                varData_457 += 8;
              }
              varData_449.length = varData_456;
              if (varData_449.head) {
                varData_449.head.extra_len = varData_456;
              }
              if (varData_449.flags & 512 && varData_449.wrap & 4) {
                varData_471[0] = varData_456 & 255;
                varData_471[1] = varData_456 >>> 8 & 255;
                varData_449.check = varData_220(varData_449.check, varData_471, 2, 0);
              }
              varData_456 = 0;
              varData_457 = 0;
            } else if (varData_449.head) {
              varData_449.head.extra = null;
            }
            varData_449.mode = numericVal_61;
          case numericVal_61:
            if (varData_449.flags & 1024) {
              varData_460 = varData_449.length;
              if (varData_460 > varData_454) {
                varData_460 = varData_454;
              }
              if (varData_460) {
                if (varData_449.head) {
                  varData_469 = varData_449.head.extra_len - varData_449.length;
                  if (!varData_449.head.extra) {
                    varData_449.head.extra = new Uint8Array(varData_449.head.extra_len);
                  }
                  varData_449.head.extra.set(varData_450.subarray(varData_452, varData_452 + varData_460), varData_469);
                }
                if (varData_449.flags & 512 && varData_449.wrap & 4) {
                  varData_449.check = varData_220(varData_449.check, varData_450, varData_460, varData_452);
                }
                varData_454 -= varData_460;
                varData_452 += varData_460;
                varData_449.length -= varData_460;
              }
              if (varData_449.length) {
                break _0x513f0d;
              }
            }
            varData_449.length = 0;
            varData_449.mode = numericVal_62;
          case numericVal_62:
            if (varData_449.flags & 2048) {
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_460 = 0;
              do {
                varData_469 = varData_450[varData_452 + varData_460++];
                if (varData_449.head && varData_469 && varData_449.length < 65536) {
                  varData_449.head.name += String.fromCharCode(varData_469);
                }
              } while (varData_469 && varData_460 < varData_454);
              if (varData_449.flags & 512 && varData_449.wrap & 4) {
                varData_449.check = varData_220(varData_449.check, varData_450, varData_460, varData_452);
              }
              varData_454 -= varData_460;
              varData_452 += varData_460;
              if (varData_469) {
                break _0x513f0d;
              }
            } else if (varData_449.head) {
              varData_449.head.name = null;
            }
            varData_449.length = 0;
            varData_449.mode = numericVal_63;
          case numericVal_63:
            if (varData_449.flags & 4096) {
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_460 = 0;
              do {
                varData_469 = varData_450[varData_452 + varData_460++];
                if (varData_449.head && varData_469 && varData_449.length < 65536) {
                  varData_449.head.comment += String.fromCharCode(varData_469);
                }
              } while (varData_469 && varData_460 < varData_454);
              if (varData_449.flags & 512 && varData_449.wrap & 4) {
                varData_449.check = varData_220(varData_449.check, varData_450, varData_460, varData_452);
              }
              varData_454 -= varData_460;
              varData_452 += varData_460;
              if (varData_469) {
                break _0x513f0d;
              }
            } else if (varData_449.head) {
              varData_449.head.comment = null;
            }
            varData_449.mode = numericVal_64;
          case numericVal_64:
            if (varData_449.flags & 512) {
              while (varData_457 < 16) {
                if (varData_454 === 0) {
                  break _0x513f0d;
                }
                varData_454--;
                varData_456 += varData_450[varData_452++] << varData_457;
                varData_457 += 8;
              }
              if (varData_449.wrap & 4 && varData_456 !== (varData_449.check & 65535)) {
                param_1.msg = "header crc mismatch";
                varData_449.mode = numericVal_85;
                break;
              }
              varData_456 = 0;
              varData_457 = 0;
            }
            if (varData_449.head) {
              varData_449.head.hcrc = varData_449.flags >> 9 & 1;
              varData_449.head.done = true;
            }
            param_1.adler = varData_449.check = 0;
            varData_449.mode = numericVal_67;
            break;
          case numericVal_65:
            while (varData_457 < 32) {
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            param_1.adler = varData_449.check = varData_428(varData_456);
            varData_456 = 0;
            varData_457 = 0;
            varData_449.mode = numericVal_66;
          case numericVal_66:
            if (varData_449.havedict === 0) {
              param_1.next_out = varData_453;
              param_1.avail_out = varData_455;
              param_1.next_in = varData_452;
              param_1.avail_in = varData_454;
              varData_449.hold = varData_456;
              varData_449.bits = varData_457;
              return _0x12b8e0;
            }
            param_1.adler = varData_449.check = 1;
            varData_449.mode = numericVal_67;
          case numericVal_67:
            if (param_2 === _0x4f7b36 || param_2 === _0x4a9b86) {
              break _0x513f0d;
            }
          case numericVal_68:
            if (varData_449.last) {
              varData_456 >>>= varData_457 & 7;
              varData_457 -= varData_457 & 7;
              varData_449.mode = numericVal_82;
              break;
            }
            while (varData_457 < 3) {
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            varData_449.last = varData_456 & 1;
            varData_456 >>>= 1;
            varData_457 -= 1;
            switch (varData_456 & 3) {
              case 0:
                varData_449.mode = numericVal_69;
                break;
              case 1:
                varData_444(varData_449);
                varData_449.mode = numericVal_75;
                if (param_2 === _0x4a9b86) {
                  varData_456 >>>= 2;
                  varData_457 -= 2;
                  break _0x513f0d;
                }
                break;
              case 2:
                varData_449.mode = numericVal_72;
                break;
              case 3:
                param_1.msg = "invalid block type";
                varData_449.mode = numericVal_85;
            }
            varData_456 >>>= 2;
            varData_457 -= 2;
            break;
          case numericVal_69:
            varData_456 >>>= varData_457 & 7;
            varData_457 -= varData_457 & 7;
            while (varData_457 < 32) {
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            if ((varData_456 & 65535) !== (varData_456 >>> 16 ^ 65535)) {
              param_1.msg = "invalid stored block lengths";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_449.length = varData_456 & 65535;
            varData_456 = 0;
            varData_457 = 0;
            varData_449.mode = numericVal_70;
            if (param_2 === _0x4a9b86) {
              break _0x513f0d;
            }
          case numericVal_70:
            varData_449.mode = numericVal_71;
          case numericVal_71:
            varData_460 = varData_449.length;
            if (varData_460) {
              if (varData_460 > varData_454) {
                varData_460 = varData_454;
              }
              if (varData_460 > varData_455) {
                varData_460 = varData_455;
              }
              if (varData_460 === 0) {
                break _0x513f0d;
              }
              varData_451.set(varData_450.subarray(varData_452, varData_452 + varData_460), varData_453);
              varData_454 -= varData_460;
              varData_452 += varData_460;
              varData_455 -= varData_460;
              varData_453 += varData_460;
              varData_449.length -= varData_460;
              break;
            }
            varData_449.mode = numericVal_67;
            break;
          case numericVal_72:
            while (varData_457 < 14) {
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            varData_449.nlen = (varData_456 & 31) + 257;
            varData_456 >>>= 5;
            varData_457 -= 5;
            varData_449.ndist = (varData_456 & 31) + 1;
            varData_456 >>>= 5;
            varData_457 -= 5;
            varData_449.ncode = (varData_456 & 15) + 4;
            varData_456 >>>= 4;
            varData_457 -= 4;
            if (varData_449.nlen > 286 || varData_449.ndist > 30) {
              param_1.msg = "too many length or distance symbols";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_449.have = 0;
            varData_449.mode = numericVal_73;
          case numericVal_73:
            while (varData_449.have < varData_449.ncode) {
              while (varData_457 < 3) {
                if (varData_454 === 0) {
                  break _0x513f0d;
                }
                varData_454--;
                varData_456 += varData_450[varData_452++] << varData_457;
                varData_457 += 8;
              }
              varData_449.lens[varData_474[varData_449.have++]] = varData_456 & 7;
              varData_456 >>>= 3;
              varData_457 -= 3;
            }
            while (varData_449.have < 19) {
              varData_449.lens[varData_474[varData_449.have++]] = 0;
            }
            varData_449.lencode = varData_449.lendyn;
            varData_449.lenbits = 7;
            var varData_475 = {
              bits: varData_449.lenbits
            };
            varData_472 = varData_475;
            varData_470 = varData_426(numericVal_53, varData_449.lens, 0, 19, varData_449.lencode, 0, varData_449.work, varData_472);
            varData_449.lenbits = varData_472.bits;
            if (varData_470) {
              param_1.msg = "invalid code lengths set";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_449.have = 0;
            varData_449.mode = numericVal_74;
          case numericVal_74:
            while (varData_449.have < varData_449.nlen + varData_449.ndist) {
              while (true) {
                numericVal_91 = varData_449.lencode[varData_456 & (1 << varData_449.lenbits) - 1];
                varData_463 = numericVal_91 >>> 24;
                varData_464 = numericVal_91 >>> 16 & 255;
                varData_465 = numericVal_91 & 65535;
                if (varData_463 <= varData_457) {
                  break;
                }
                if (varData_454 === 0) {
                  break _0x513f0d;
                }
                varData_454--;
                varData_456 += varData_450[varData_452++] << varData_457;
                varData_457 += 8;
              }
              if (varData_465 < 16) {
                varData_456 >>>= varData_463;
                varData_457 -= varData_463;
                varData_449.lens[varData_449.have++] = varData_465;
              } else {
                if (varData_465 === 16) {
                  varData_473 = varData_463 + 2;
                  while (varData_457 < varData_473) {
                    if (varData_454 === 0) {
                      break _0x513f0d;
                    }
                    varData_454--;
                    varData_456 += varData_450[varData_452++] << varData_457;
                    varData_457 += 8;
                  }
                  varData_456 >>>= varData_463;
                  varData_457 -= varData_463;
                  if (varData_449.have === 0) {
                    param_1.msg = "invalid bit length repeat";
                    varData_449.mode = numericVal_85;
                    break;
                  }
                  varData_469 = varData_449.lens[varData_449.have - 1];
                  varData_460 = 3 + (varData_456 & 3);
                  varData_456 >>>= 2;
                  varData_457 -= 2;
                } else if (varData_465 === 17) {
                  varData_473 = varData_463 + 3;
                  while (varData_457 < varData_473) {
                    if (varData_454 === 0) {
                      break _0x513f0d;
                    }
                    varData_454--;
                    varData_456 += varData_450[varData_452++] << varData_457;
                    varData_457 += 8;
                  }
                  varData_456 >>>= varData_463;
                  varData_457 -= varData_463;
                  varData_469 = 0;
                  varData_460 = 3 + (varData_456 & 7);
                  varData_456 >>>= 3;
                  varData_457 -= 3;
                } else {
                  varData_473 = varData_463 + 7;
                  while (varData_457 < varData_473) {
                    if (varData_454 === 0) {
                      break _0x513f0d;
                    }
                    varData_454--;
                    varData_456 += varData_450[varData_452++] << varData_457;
                    varData_457 += 8;
                  }
                  varData_456 >>>= varData_463;
                  varData_457 -= varData_463;
                  varData_469 = 0;
                  varData_460 = 11 + (varData_456 & 127);
                  varData_456 >>>= 7;
                  varData_457 -= 7;
                }
                if (varData_449.have + varData_460 > varData_449.nlen + varData_449.ndist) {
                  param_1.msg = "invalid bit length repeat";
                  varData_449.mode = numericVal_85;
                  break;
                }
                while (varData_460--) {
                  varData_449.lens[varData_449.have++] = varData_469;
                }
              }
            }
            if (varData_449.mode === numericVal_85) {
              break;
            }
            if (varData_449.lens[256] === 0) {
              param_1.msg = "invalid code -- missing end-of-block";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_449.lenbits = 9;
            var varData_476 = {
              bits: varData_449.lenbits
            };
            varData_472 = varData_476;
            varData_470 = varData_426(numericVal_54, varData_449.lens, 0, varData_449.nlen, varData_449.lencode, 0, varData_449.work, varData_472);
            varData_449.lenbits = varData_472.bits;
            if (varData_470) {
              param_1.msg = "invalid literal/lengths set";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_449.distbits = 6;
            varData_449.distcode = varData_449.distdyn;
            var varData_477 = {
              bits: varData_449.distbits
            };
            varData_472 = varData_477;
            varData_470 = varData_426(numericVal_55, varData_449.lens, varData_449.nlen, varData_449.ndist, varData_449.distcode, 0, varData_449.work, varData_472);
            varData_449.distbits = varData_472.bits;
            if (varData_470) {
              param_1.msg = "invalid distances set";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_449.mode = numericVal_75;
            if (param_2 === _0x4a9b86) {
              break _0x513f0d;
            }
          case numericVal_75:
            varData_449.mode = numericVal_76;
          case numericVal_76:
            if (varData_454 >= 6 && varData_455 >= 258) {
              param_1.next_out = varData_453;
              param_1.avail_out = varData_455;
              param_1.next_in = varData_452;
              param_1.avail_in = varData_454;
              varData_449.hold = varData_456;
              varData_449.bits = varData_457;
              varData_381(param_1, varData_459);
              varData_453 = param_1.next_out;
              varData_451 = param_1.output;
              varData_455 = param_1.avail_out;
              varData_452 = param_1.next_in;
              varData_450 = param_1.input;
              varData_454 = param_1.avail_in;
              varData_456 = varData_449.hold;
              varData_457 = varData_449.bits;
              if (varData_449.mode === numericVal_67) {
                varData_449.back = -1;
              }
              break;
            }
            varData_449.back = 0;
            while (true) {
              numericVal_91 = varData_449.lencode[varData_456 & (1 << varData_449.lenbits) - 1];
              varData_463 = numericVal_91 >>> 24;
              varData_464 = numericVal_91 >>> 16 & 255;
              varData_465 = numericVal_91 & 65535;
              if (varData_463 <= varData_457) {
                break;
              }
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            if (varData_464 && (varData_464 & 240) === 0) {
              varData_466 = varData_463;
              varData_467 = varData_464;
              varData_468 = varData_465;
              while (true) {
                numericVal_91 = varData_449.lencode[varData_468 + ((varData_456 & (1 << varData_466 + varData_467) - 1) >> varData_466)];
                varData_463 = numericVal_91 >>> 24;
                varData_464 = numericVal_91 >>> 16 & 255;
                varData_465 = numericVal_91 & 65535;
                if (varData_466 + varData_463 <= varData_457) {
                  break;
                }
                if (varData_454 === 0) {
                  break _0x513f0d;
                }
                varData_454--;
                varData_456 += varData_450[varData_452++] << varData_457;
                varData_457 += 8;
              }
              varData_456 >>>= varData_466;
              varData_457 -= varData_466;
              varData_449.back += varData_466;
            }
            varData_456 >>>= varData_463;
            varData_457 -= varData_463;
            varData_449.back += varData_463;
            varData_449.length = varData_465;
            if (varData_464 === 0) {
              varData_449.mode = numericVal_81;
              break;
            }
            if (varData_464 & 32) {
              varData_449.back = -1;
              varData_449.mode = numericVal_67;
              break;
            }
            if (varData_464 & 64) {
              param_1.msg = "invalid literal/length code";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_449.extra = varData_464 & 15;
            varData_449.mode = numericVal_77;
          case numericVal_77:
            if (varData_449.extra) {
              varData_473 = varData_449.extra;
              while (varData_457 < varData_473) {
                if (varData_454 === 0) {
                  break _0x513f0d;
                }
                varData_454--;
                varData_456 += varData_450[varData_452++] << varData_457;
                varData_457 += 8;
              }
              varData_449.length += varData_456 & (1 << varData_449.extra) - 1;
              varData_456 >>>= varData_449.extra;
              varData_457 -= varData_449.extra;
              varData_449.back += varData_449.extra;
            }
            varData_449.was = varData_449.length;
            varData_449.mode = numericVal_78;
          case numericVal_78:
            while (true) {
              numericVal_91 = varData_449.distcode[varData_456 & (1 << varData_449.distbits) - 1];
              varData_463 = numericVal_91 >>> 24;
              varData_464 = numericVal_91 >>> 16 & 255;
              varData_465 = numericVal_91 & 65535;
              if (varData_463 <= varData_457) {
                break;
              }
              if (varData_454 === 0) {
                break _0x513f0d;
              }
              varData_454--;
              varData_456 += varData_450[varData_452++] << varData_457;
              varData_457 += 8;
            }
            if ((varData_464 & 240) === 0) {
              varData_466 = varData_463;
              varData_467 = varData_464;
              varData_468 = varData_465;
              while (true) {
                numericVal_91 = varData_449.distcode[varData_468 + ((varData_456 & (1 << varData_466 + varData_467) - 1) >> varData_466)];
                varData_463 = numericVal_91 >>> 24;
                varData_464 = numericVal_91 >>> 16 & 255;
                varData_465 = numericVal_91 & 65535;
                if (varData_466 + varData_463 <= varData_457) {
                  break;
                }
                if (varData_454 === 0) {
                  break _0x513f0d;
                }
                varData_454--;
                varData_456 += varData_450[varData_452++] << varData_457;
                varData_457 += 8;
              }
              varData_456 >>>= varData_466;
              varData_457 -= varData_466;
              varData_449.back += varData_466;
            }
            varData_456 >>>= varData_463;
            varData_457 -= varData_463;
            varData_449.back += varData_463;
            if (varData_464 & 64) {
              param_1.msg = "invalid distance code";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_449.offset = varData_465;
            varData_449.extra = varData_464 & 15;
            varData_449.mode = numericVal_79;
          case numericVal_79:
            if (varData_449.extra) {
              varData_473 = varData_449.extra;
              while (varData_457 < varData_473) {
                if (varData_454 === 0) {
                  break _0x513f0d;
                }
                varData_454--;
                varData_456 += varData_450[varData_452++] << varData_457;
                varData_457 += 8;
              }
              varData_449.offset += varData_456 & (1 << varData_449.extra) - 1;
              varData_456 >>>= varData_449.extra;
              varData_457 -= varData_449.extra;
              varData_449.back += varData_449.extra;
            }
            if (varData_449.offset > varData_449.dmax) {
              param_1.msg = "invalid distance too far back";
              varData_449.mode = numericVal_85;
              break;
            }
            varData_449.mode = numericVal_80;
          case numericVal_80:
            if (varData_455 === 0) {
              break _0x513f0d;
            }
            varData_460 = varData_459 - varData_455;
            if (varData_449.offset > varData_460) {
              varData_460 = varData_449.offset - varData_460;
              if (varData_460 > varData_449.whave) {
                if (varData_449.sane) {
                  param_1.msg = "invalid distance too far back";
                  varData_449.mode = numericVal_85;
                  break;
                }
              }
              if (varData_460 > varData_449.wnext) {
                varData_460 -= varData_449.wnext;
                varData_461 = varData_449.wsize - varData_460;
              } else {
                varData_461 = varData_449.wnext - varData_460;
              }
              if (varData_460 > varData_449.length) {
                varData_460 = varData_449.length;
              }
              varData_462 = varData_449.window;
            } else {
              varData_462 = varData_451;
              varData_461 = varData_453 - varData_449.offset;
              varData_460 = varData_449.length;
            }
            if (varData_460 > varData_455) {
              varData_460 = varData_455;
            }
            varData_455 -= varData_460;
            varData_449.length -= varData_460;
            do {
              varData_451[varData_453++] = varData_462[varData_461++];
            } while (--varData_460);
            if (varData_449.length === 0) {
              varData_449.mode = numericVal_76;
            }
            break;
          case numericVal_81:
            if (varData_455 === 0) {
              break _0x513f0d;
            }
            varData_451[varData_453++] = varData_449.length;
            varData_455--;
            varData_449.mode = numericVal_76;
            break;
          case numericVal_82:
            if (varData_449.wrap) {
              while (varData_457 < 32) {
                if (varData_454 === 0) {
                  break _0x513f0d;
                }
                varData_454--;
                varData_456 |= varData_450[varData_452++] << varData_457;
                varData_457 += 8;
              }
              varData_459 -= varData_455;
              param_1.total_out += varData_459;
              varData_449.total += varData_459;
              if (varData_449.wrap & 4 && varData_459) {
                param_1.adler = varData_449.check = varData_449.flags ? varData_220(varData_449.check, varData_451, varData_459, varData_453 - varData_459) : varData_213(varData_449.check, varData_451, varData_459, varData_453 - varData_459);
              }
              varData_459 = varData_455;
              if (varData_449.wrap & 4 && (varData_449.flags ? varData_456 : varData_428(varData_456)) !== varData_449.check) {
                param_1.msg = "incorrect data check";
                varData_449.mode = numericVal_85;
                break;
              }
              varData_456 = 0;
              varData_457 = 0;
            }
            varData_449.mode = numericVal_83;
          case numericVal_83:
            if (varData_449.wrap && varData_449.flags) {
              while (varData_457 < 32) {
                if (varData_454 === 0) {
                  break _0x513f0d;
                }
                varData_454--;
                varData_456 += varData_450[varData_452++] << varData_457;
                varData_457 += 8;
              }
              if (varData_449.wrap & 4 && varData_456 !== (varData_449.total & -1)) {
                param_1.msg = "incorrect length check";
                varData_449.mode = numericVal_85;
                break;
              }
              varData_456 = 0;
              varData_457 = 0;
            }
            varData_449.mode = numericVal_84;
          case numericVal_84:
            varData_470 = _0x51c3bc;
            break _0x513f0d;
          case numericVal_85:
            varData_470 = _0x45cfaa;
            break _0x513f0d;
          case numericVal_86:
            return _0x263035;
          case numericVal_87:
          default:
            return _0x899299;
        }
      }
      param_1.next_out = varData_453;
      param_1.avail_out = varData_455;
      param_1.next_in = varData_452;
      param_1.avail_in = varData_454;
      varData_449.hold = varData_456;
      varData_449.bits = varData_457;
      if (varData_449.wsize || varData_459 !== param_1.avail_out && varData_449.mode < numericVal_85 && (varData_449.mode < numericVal_82 || param_2 !== _0x2bfdef)) {
        if (varData_445(param_1, param_1.output, param_1.next_out, varData_459 - param_1.avail_out)) ;
      }
      varData_458 -= param_1.avail_in;
      varData_459 -= param_1.avail_out;
      param_1.total_in += varData_458;
      param_1.total_out += varData_459;
      varData_449.total += varData_459;
      if (varData_449.wrap & 4 && varData_459) {
        param_1.adler = varData_449.check = varData_449.flags ? varData_220(varData_449.check, varData_451, varData_459, param_1.next_out - varData_459) : varData_213(varData_449.check, varData_451, varData_459, param_1.next_out - varData_459);
      }
      param_1.data_type = varData_449.bits + (varData_449.last ? 64 : 0) + (varData_449.mode === numericVal_67 ? 128 : 0) + (varData_449.mode === numericVal_75 || varData_449.mode === numericVal_70 ? 256 : 0);
      if ((varData_458 === 0 && varData_459 === 0 || param_2 === _0x2bfdef) && varData_470 === _0x19d626) {
        varData_470 = _0x569631;
      }
      return varData_470;
    };
    const varData_478 = (param_1) => {
      if (varData_429(param_1)) {
        return _0x899299;
      }
      let varData_479 = param_1.state;
      varData_479.window && (varData_479.window = null);
      param_1.state = null;
      return _0x19d626;
    };
    const varData_480 = (param_1, param_2) => {
      if (varData_429(param_1)) {
        return _0x899299;
      }
      const varData_481 = param_1.state;
      if ((varData_481.wrap & 2) === 0) {
        return _0x899299;
      }
      varData_481.head = param_2;
      param_2.done = false;
      return _0x19d626;
    };
    const varData_482 = (param_1, param_2) => {
      const varData_483 = param_2.length;
      let varData_484;
      let varData_485;
      let varData_486;
      if (varData_429(param_1)) {
        return _0x899299;
      }
      varData_484 = param_1.state;
      if (varData_484.wrap !== 0 && varData_484.mode !== numericVal_66) {
        return _0x899299;
      }
      if (varData_484.mode === numericVal_66) {
        varData_485 = 1;
        varData_485 = varData_213(varData_485, param_2, varData_483, 0);
        if (varData_485 !== varData_484.check) {
          return _0x45cfaa;
        }
      }
      varData_486 = varData_445(param_1, param_2, varData_483, varData_483);
      if (varData_486) {
        varData_484.mode = numericVal_86;
        return _0x263035;
      }
      varData_484.havedict = 1;
      return _0x19d626;
    };
    var varData_487 = varData_433;
    var varData_488 = varData_435;
    var varData_489 = varData_431;
    var varData_490 = varData_441;
    var varData_491 = varData_438;
    var varData_492 = varData_448;
    var varData_493 = varData_478;
    var varData_494 = varData_480;
    var varData_495 = varData_482;
    var varData_496 = "pako inflate (from Nodeca project)";
    var varData_497 = {
      inflateReset: varData_487,
      inflateReset2: varData_488,
      inflateResetKeep: varData_489,
      inflateInit: varData_490,
      inflateInit2: varData_491,
      inflate: varData_492,
      inflateEnd: varData_493,
      inflateGetHeader: varData_494,
      inflateSetDictionary: varData_495,
      inflateInfo: varData_496
    };
    var varData_498 = varData_497;
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
    var varData_499 = handleAction_57;
    const varData_500 = Object.prototype.toString;
    const {
      Z_NO_FLUSH: _0x43b72e,
      Z_FINISH: _0x42de9b,
      Z_OK: _0xbbc822,
      Z_STREAM_END: _0x3b50c6,
      Z_NEED_DICT: _0x37e490,
      Z_STREAM_ERROR: _0x3bff1e,
      Z_DATA_ERROR: _0x5e543d,
      Z_MEM_ERROR: _0x20bdd3
    } = varData_223;
    function handleAction_58(param_1) {
      this.options = varData_342.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
      }, param_1 || {});
      const varData_501 = this.options;
      if (varData_501.raw && varData_501.windowBits >= 0 && varData_501.windowBits < 16) {
        varData_501.windowBits = -varData_501.windowBits;
        if (varData_501.windowBits === 0) {
          varData_501.windowBits = -15;
        }
      }
      if (varData_501.windowBits >= 0 && varData_501.windowBits < 16 && (!param_1 || !param_1.windowBits)) {
        varData_501.windowBits += 32;
      }
      if (varData_501.windowBits > 15 && varData_501.windowBits < 48) {
        if ((varData_501.windowBits & 15) === 0) {
          varData_501.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new varData_363();
      this.strm.avail_out = 0;
      let varData_502 = varData_498.inflateInit2(this.strm, varData_501.windowBits);
      if (varData_502 !== _0xbbc822) {
        throw new Error(varData_221[varData_502]);
      }
      this.header = new varData_499();
      varData_498.inflateGetHeader(this.strm, this.header);
      if (varData_501.dictionary) {
        if (typeof varData_501.dictionary === "string") {
          varData_501.dictionary = varData_362.string2buf(varData_501.dictionary);
        } else if (varData_500.call(varData_501.dictionary) === "[object ArrayBuffer]") {
          varData_501.dictionary = new Uint8Array(varData_501.dictionary);
        }
        if (varData_501.raw) {
          varData_502 = varData_498.inflateSetDictionary(this.strm, varData_501.dictionary);
          if (varData_502 !== _0xbbc822) {
            throw new Error(varData_221[varData_502]);
          }
        }
      }
    }
    handleAction_58.prototype.push = function(param_1, param_2) {
      const varData_503 = this.strm;
      const varData_504 = this.options.chunkSize;
      const varData_505 = this.options.dictionary;
      let varData_506;
      let varData_507;
      let varData_508;
      if (this.ended) {
        return false;
      }
      if (param_2 === ~~param_2) {
        varData_507 = param_2;
      } else {
        varData_507 = param_2 === true ? _0x42de9b : _0x43b72e;
      }
      if (varData_500.call(param_1) === "[object ArrayBuffer]") {
        varData_503.input = new Uint8Array(param_1);
      } else {
        varData_503.input = param_1;
      }
      varData_503.next_in = 0;
      varData_503.avail_in = varData_503.input.length;
      while (true) {
        if (varData_503.avail_out === 0) {
          varData_503.output = new Uint8Array(varData_504);
          varData_503.next_out = 0;
          varData_503.avail_out = varData_504;
        }
        varData_506 = varData_498.inflate(varData_503, varData_507);
        if (varData_506 === _0x37e490 && varData_505) {
          varData_506 = varData_498.inflateSetDictionary(varData_503, varData_505);
          if (varData_506 === _0xbbc822) {
            varData_506 = varData_498.inflate(varData_503, varData_507);
          } else if (varData_506 === _0x5e543d) {
            varData_506 = _0x37e490;
          }
        }
        while (varData_503.avail_in > 0 && varData_506 === _0x3b50c6 && varData_503.state.wrap > 0 && param_1[varData_503.next_in] !== 0) {
          varData_498.inflateReset(varData_503);
          varData_506 = varData_498.inflate(varData_503, varData_507);
        }
        switch (varData_506) {
          case _0x3bff1e:
          case _0x5e543d:
          case _0x37e490:
          case _0x20bdd3:
            this.onEnd(varData_506);
            this.ended = true;
            return false;
        }
        varData_508 = varData_503.avail_out;
        if (varData_503.next_out) {
          if (varData_503.avail_out === 0 || varData_506 === _0x3b50c6) {
            if (this.options.to === "string") {
              let varData_509 = varData_362.utf8border(varData_503.output, varData_503.next_out);
              let varData_510 = varData_503.next_out - varData_509;
              let varData_511 = varData_362.buf2string(varData_503.output, varData_509);
              varData_503.next_out = varData_510;
              varData_503.avail_out = varData_504 - varData_510;
              if (varData_510) {
                varData_503.output.set(varData_503.output.subarray(varData_509, varData_509 + varData_510), 0);
              }
              this.onData(varData_511);
            } else {
              this.onData(varData_503.output.length === varData_503.next_out ? varData_503.output : varData_503.output.subarray(0, varData_503.next_out));
            }
          }
        }
        if (varData_506 === _0xbbc822 && varData_508 === 0) {
          continue;
        }
        if (varData_506 === _0x3b50c6) {
          varData_506 = varData_498.inflateEnd(this.strm);
          this.onEnd(varData_506);
          this.ended = true;
          return true;
        }
        if (varData_503.avail_in === 0) {
          break;
        }
      }
      return true;
    };
    handleAction_58.prototype.onData = function(param_1) {
      this.chunks.push(param_1);
    };
    handleAction_58.prototype.onEnd = function(param_1) {
      if (param_1 === _0xbbc822) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = varData_342.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = param_1;
      this.msg = this.strm.msg;
    };
    function handleAction_59(param_1, param_2) {
      const varData_512 = new handleAction_58(param_2);
      varData_512.push(param_1);
      if (varData_512.err) {
        throw varData_512.msg || varData_221[varData_512.err];
      }
      return varData_512.result;
    }
    function handleAction_60(param_1, param_2) {
      param_2 = param_2 || {};
      param_2.raw = true;
      return handleAction_59(param_1, param_2);
    }
    var varData_513 = handleAction_58;
    var varData_514 = handleAction_59;
    var varData_515 = handleAction_60;
    var varData_516 = handleAction_59;
    var varData_517 = varData_223;
    var varData_518 = {
      Inflate: varData_513,
      inflate: varData_514,
      inflateRaw: varData_515,
      ungzip: varData_516,
      constants: varData_517
    };
    var varData_519 = varData_518;
    const {
      Deflate: _0x1a8318,
      deflate: _0x4c65e1,
      deflateRaw: _0x299f98,
      gzip: _0x336bcf
    } = varData_380;
    const {
      Inflate: _0x1cddfd,
      inflate: _0x43fc38,
      inflateRaw: _0x56a856,
      ungzip: _0x3d0563
    } = varData_519;
    var varData_520 = _0x1a8318;
    var varData_521 = _0x4c65e1;
    var varData_522 = _0x299f98;
    var varData_523 = _0x336bcf;
    var varData_524 = _0x1cddfd;
    var varData_525 = _0x43fc38;
    var varData_526 = _0x56a856;
    var varData_527 = _0x3d0563;
    var varData_528 = varData_223;
    var varData_529 = {
      Deflate: varData_520,
      deflate: varData_521,
      deflateRaw: varData_522,
      gzip: varData_523,
      Inflate: varData_524,
      inflate: varData_525,
      inflateRaw: varData_526,
      ungzip: varData_527,
      constants: varData_528
    };
    var varData_530 = varData_529;
    var varData_531 = handleAction_35(739);
    ;
    var varData_532 = Object.create;
    var varData_533 = Object.defineProperty;
    var varData_534 = Object.getOwnPropertyDescriptor;
    var varData_535 = Object.getOwnPropertyNames;
    var varData_536 = Object.getPrototypeOf;
    var varData_537 = Object.prototype.hasOwnProperty;
    var varData_538 = (param_1, param_2) => function _0x1070f2() {
      if (!param_2) {
        (0, param_1[varData_535(param_1)[0]])((param_2 = {
          exports: {}
        }).exports, param_2);
      }
      return param_2.exports;
    };
    var varData_539 = (param_1, param_2) => {
      for (var varData_540 in param_2) {
        varData_533(param_1, varData_540, {
          get: param_2[varData_540],
          enumerable: true
        });
      }
    };
    var varData_541 = (param_1, param_2, param_3, param_4) => {
      if (param_2 && typeof param_2 === "object" || typeof param_2 === "function") {
        for (let varData_542 of varData_535(param_2)) {
          if (!varData_537.call(param_1, varData_542) && varData_542 !== param_3) {
            varData_533(param_1, varData_542, {
              get: () => param_2[varData_542],
              enumerable: !(param_4 = varData_534(param_2, varData_542)) || param_4.enumerable
            });
          }
        }
      }
      return param_1;
    };
    var varData_543 = (param_1, param_2, param_3) => {
      param_3 = param_1 != null ? varData_532(varData_536(param_1)) : {};
      return varData_541(param_2 || !param_1 || !param_1.__esModule ? varData_533(param_3, "default", {
        value: param_1,
        enumerable: true
      }) : param_3, param_1);
    };
    var varData_544 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_545 = (param_1, param_2, param_3) => {
      varData_544(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_546 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_547 = (param_1, param_2, param_3, param_4) => {
      varData_544(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_548 = (param_1, param_2, param_3, param_4) => ({
      set _(param_1_1) {
        varData_547(param_1, param_2, param_1_1, param_3);
      },
      get _() {
        return varData_545(param_1, param_2, param_4);
      }
    });
    var varData_549 = (param_1, param_2, param_3) => {
      varData_544(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_550 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/core.js"(param_1, param_2) {
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
          var varData_551 = varData_551 || (function(param_1_1, param_2_1) {
            var varData_552 = Object.create || /* @__PURE__ */ (function() {
              function handleAction_61() {
              }
              ;
              return function(param_1_2) {
                var varData_553;
                handleAction_61.prototype = param_1_2;
                varData_553 = new handleAction_61();
                handleAction_61.prototype = null;
                return varData_553;
              };
            })();
            var varData_554 = {};
            var varData_555 = varData_554.lib = {};
            var varData_556 = varData_555.Base = /* @__PURE__ */ (function() {
              return {
                extend: function(param_1_2) {
                  var varData_557 = varData_552(this);
                  if (param_1_2) {
                    varData_557.mixIn(param_1_2);
                  }
                  if (!varData_557.hasOwnProperty("init") || this.init === varData_557.init) {
                    varData_557.init = function() {
                      varData_557.$super.init.apply(this, arguments);
                    };
                  }
                  varData_557.init.prototype = varData_557;
                  varData_557.$super = this;
                  return varData_557;
                },
                create: function() {
                  var varData_558 = this.extend();
                  varData_558.init.apply(varData_558, arguments);
                  return varData_558;
                },
                init: function() {
                },
                mixIn: function(param_1_2) {
                  for (var varData_559 in param_1_2) {
                    if (param_1_2.hasOwnProperty(varData_559)) {
                      this[varData_559] = param_1_2[varData_559];
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
            var varData_560 = varData_555.WordArray = varData_556.extend({
              init: function(param_1_2, param_2_2) {
                param_1_2 = this.words = param_1_2 || [];
                if (param_2_2 != param_2_1) {
                  this.sigBytes = param_2_2;
                } else {
                  this.sigBytes = param_1_2.length * 4;
                }
              },
              toString: function(param_1_2) {
                return (param_1_2 || varData_572).stringify(this);
              },
              concat: function(param_1_2) {
                var varData_561 = this.words;
                var varData_562 = param_1_2.words;
                var varData_563 = this.sigBytes;
                var varData_564 = param_1_2.sigBytes;
                this.clamp();
                if (varData_563 % 4) {
                  for (var numericVal_91 = 0; numericVal_91 < varData_564; numericVal_91++) {
                    var varData_565 = varData_562[numericVal_91 >>> 2] >>> 24 - numericVal_91 % 4 * 8 & 255;
                    varData_561[varData_563 + numericVal_91 >>> 2] |= varData_565 << 24 - (varData_563 + numericVal_91) % 4 * 8;
                  }
                } else {
                  for (var numericVal_91 = 0; numericVal_91 < varData_564; numericVal_91 += 4) {
                    varData_561[varData_563 + numericVal_91 >>> 2] = varData_562[numericVal_91 >>> 2];
                  }
                }
                this.sigBytes += varData_564;
                return this;
              },
              clamp: function() {
                var varData_566 = this.words;
                var varData_567 = this.sigBytes;
                varData_566[varData_567 >>> 2] &= -1 << 32 - varData_567 % 4 * 8;
                varData_566.length = param_1_1.ceil(varData_567 / 4);
              },
              clone: function() {
                var varData_568 = varData_556.clone.call(this);
                varData_568.words = this.words.slice(0);
                return varData_568;
              },
              random: function(param_1_2) {
                var itemList_22 = [];
                function handleAction_62(param_1_3) {
                  var param_1_3 = param_1_3;
                  var numericVal_912 = 987654321;
                  var numericVal_92 = 4294967295;
                  return function() {
                    numericVal_912 = (numericVal_912 & 65535) * 36969 + (numericVal_912 >> 16) & numericVal_92;
                    param_1_3 = (param_1_3 & 65535) * 18e3 + (param_1_3 >> 16) & numericVal_92;
                    var varData_569 = (numericVal_912 << 16) + param_1_3 & numericVal_92;
                    varData_569 /= 4294967296;
                    varData_569 += 0.5;
                    return varData_569 * (param_1_1.random() > 0.5 ? 1 : -1);
                  };
                }
                for (var numericVal_91 = 0, loopIdx; numericVal_91 < param_1_2; numericVal_91 += 4) {
                  var varData_570 = handleAction_62((loopIdx || param_1_1.random()) * 4294967296);
                  loopIdx = varData_570() * 987654071;
                  itemList_22.push(varData_570() * 4294967296 | 0);
                }
                return new varData_560.init(itemList_22, param_1_2);
              }
            });
            var varData_571 = varData_554.enc = {};
            var varData_572 = varData_571.Hex = {
              stringify: function(param_1_2) {
                var varData_573 = param_1_2.words;
                var varData_574 = param_1_2.sigBytes;
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_574; numericVal_91++) {
                  var varData_575 = varData_573[numericVal_91 >>> 2] >>> 24 - numericVal_91 % 4 * 8 & 255;
                  itemList_22.push((varData_575 >>> 4).toString(16));
                  itemList_22.push((varData_575 & 15).toString(16));
                }
                return itemList_22.join("");
              },
              parse: function(param_1_2) {
                var varData_576 = param_1_2.length;
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_576; numericVal_91 += 2) {
                  itemList_22[numericVal_91 >>> 3] |= parseInt(param_1_2.substr(numericVal_91, 2), 16) << 24 - numericVal_91 % 8 * 4;
                }
                return new varData_560.init(itemList_22, varData_576 / 2);
              }
            };
            var varData_577 = varData_571.Latin1 = {
              stringify: function(param_1_2) {
                var varData_578 = param_1_2.words;
                var varData_579 = param_1_2.sigBytes;
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_579; numericVal_91++) {
                  var varData_580 = varData_578[numericVal_91 >>> 2] >>> 24 - numericVal_91 % 4 * 8 & 255;
                  itemList_22.push(String.fromCharCode(varData_580));
                }
                return itemList_22.join("");
              },
              parse: function(param_1_2) {
                var varData_581 = param_1_2.length;
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_581; numericVal_91++) {
                  itemList_22[numericVal_91 >>> 2] |= (param_1_2.charCodeAt(numericVal_91) & 255) << 24 - numericVal_91 % 4 * 8;
                }
                return new varData_560.init(itemList_22, varData_581);
              }
            };
            var varData_582 = varData_571.Utf8 = {
              stringify: function(param_1_2) {
                try {
                  return decodeURIComponent(escape(varData_577.stringify(param_1_2)));
                } catch (err) {
                  throw new Error("Malformed UTF-8 data");
                }
              },
              parse: function(param_1_2) {
                return varData_577.parse(unescape(encodeURIComponent(param_1_2)));
              }
            };
            var varData_583 = varData_555.BufferedBlockAlgorithm = varData_556.extend({
              reset: function() {
                this._data = new varData_560.init();
                this._nDataBytes = 0;
              },
              _append: function(param_1_2) {
                if (typeof param_1_2 == "string") {
                  param_1_2 = varData_582.parse(param_1_2);
                }
                this._data.concat(param_1_2);
                this._nDataBytes += param_1_2.sigBytes;
              },
              _process: function(param_1_2) {
                var varData_584 = this._data;
                var varData_585 = varData_584.words;
                var varData_586 = varData_584.sigBytes;
                var varData_587 = this.blockSize;
                var varData_588 = varData_587 * 4;
                var varData_589 = varData_586 / varData_588;
                if (param_1_2) {
                  varData_589 = param_1_1.ceil(varData_589);
                } else {
                  varData_589 = param_1_1.max((varData_589 | 0) - this._minBufferSize, 0);
                }
                var varData_590 = varData_589 * varData_587;
                var varData_591 = param_1_1.min(varData_590 * 4, varData_586);
                if (varData_590) {
                  for (var numericVal_91 = 0; numericVal_91 < varData_590; numericVal_91 += varData_587) {
                    this._doProcessBlock(varData_585, numericVal_91);
                  }
                  var varData_592 = varData_585.splice(0, varData_590);
                  varData_584.sigBytes -= varData_591;
                }
                return new varData_560.init(varData_592, varData_591);
              },
              clone: function() {
                var varData_593 = varData_556.clone.call(this);
                varData_593._data = this._data.clone();
                return varData_593;
              },
              _minBufferSize: 0
            });
            var varData_594 = varData_555.Hasher = varData_583.extend({
              cfg: varData_556.extend(),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
                this.reset();
              },
              reset: function() {
                varData_583.reset.call(this);
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
                var varData_595 = this._doFinalize();
                return varData_595;
              },
              blockSize: 16,
              _createHelper: function(param_1_2) {
                return function(param_1_3, param_2_2) {
                  return new param_1_2.init(param_2_2).finalize(param_1_3);
                };
              },
              _createHmacHelper: function(param_1_2) {
                return function(param_1_3, param_2_2) {
                  return new varData_596.HMAC.init(param_1_2, param_2_2).finalize(param_1_3);
                };
              }
            });
            var varData_596 = varData_554.algo = {};
            return varData_554;
          })(Math);
          return varData_551;
        });
      }
    });
    var varData_597 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/x64-core.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_598 = param_1_1;
            var varData_599 = varData_598.lib;
            var varData_600 = varData_599.Base;
            var varData_601 = varData_599.WordArray;
            var varData_602 = varData_598.x64 = {};
            var varData_603 = {
              init: function(param_1_3, param_2_1) {
                this.high = param_1_3;
                this.low = param_2_1;
              }
            };
            var varData_604 = varData_602.Word = varData_600.extend(varData_603);
            var varData_605 = varData_602.WordArray = varData_600.extend({
              init: function(param_1_3, param_2_1) {
                param_1_3 = this.words = param_1_3 || [];
                if (param_2_1 != param_1_2) {
                  this.sigBytes = param_2_1;
                } else {
                  this.sigBytes = param_1_3.length * 8;
                }
              },
              toX32: function() {
                var varData_606 = this.words;
                var varData_607 = varData_606.length;
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_607; numericVal_91++) {
                  var varData_608 = varData_606[numericVal_91];
                  itemList_22.push(varData_608.high);
                  itemList_22.push(varData_608.low);
                }
                return varData_601.create(itemList_22, this.sigBytes);
              },
              clone: function() {
                var varData_609 = varData_600.clone.call(this);
                var varData_610 = varData_609.words = this.words.slice(0);
                var varData_611 = varData_610.length;
                for (var numericVal_91 = 0; numericVal_91 < varData_611; numericVal_91++) {
                  varData_610[numericVal_91] = varData_610[numericVal_91].clone();
                }
                return varData_609;
              }
            });
          })();
          return param_1_1;
        });
      }
    });
    var varData_612 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/lib-typedarrays.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
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
            var varData_613 = param_1_1;
            var varData_614 = varData_613.lib;
            var varData_615 = varData_614.WordArray;
            var varData_616 = varData_615.init;
            var varData_617 = varData_615.init = function(param_1_2) {
              if (param_1_2 instanceof ArrayBuffer) {
                param_1_2 = new Uint8Array(param_1_2);
              }
              if (param_1_2 instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && param_1_2 instanceof Uint8ClampedArray || param_1_2 instanceof Int16Array || param_1_2 instanceof Uint16Array || param_1_2 instanceof Int32Array || param_1_2 instanceof Uint32Array || param_1_2 instanceof Float32Array || param_1_2 instanceof Float64Array) {
                param_1_2 = new Uint8Array(param_1_2.buffer, param_1_2.byteOffset, param_1_2.byteLength);
              }
              if (param_1_2 instanceof Uint8Array) {
                var varData_618 = param_1_2.byteLength;
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_618; numericVal_91++) {
                  itemList_22[numericVal_91 >>> 2] |= param_1_2[numericVal_91] << 24 - numericVal_91 % 4 * 8;
                }
                varData_616.call(this, itemList_22, varData_618);
              } else {
                varData_616.apply(this, arguments);
              }
            };
            varData_617.prototype = varData_615;
          })();
          return param_1_1.lib.WordArray;
        });
      }
    });
    var varData_619 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-utf16.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_620 = param_1_1;
            var varData_621 = varData_620.lib;
            var varData_622 = varData_621.WordArray;
            var varData_623 = varData_620.enc;
            var varData_624 = varData_623.Utf16 = varData_623.Utf16BE = {
              stringify: function(param_1_2) {
                var varData_625 = param_1_2.words;
                var varData_626 = param_1_2.sigBytes;
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_626; numericVal_91 += 2) {
                  var varData_627 = varData_625[numericVal_91 >>> 2] >>> 16 - numericVal_91 % 4 * 8 & 65535;
                  itemList_22.push(String.fromCharCode(varData_627));
                }
                return itemList_22.join("");
              },
              parse: function(param_1_2) {
                var varData_628 = param_1_2.length;
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_628; numericVal_91++) {
                  itemList_22[numericVal_91 >>> 1] |= param_1_2.charCodeAt(numericVal_91) << 16 - numericVal_91 % 2 * 16;
                }
                return varData_622.create(itemList_22, varData_628 * 2);
              }
            };
            varData_623.Utf16LE = {
              stringify: function(param_1_2) {
                var varData_629 = param_1_2.words;
                var varData_630 = param_1_2.sigBytes;
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_630; numericVal_91 += 2) {
                  var varData_631 = handleAction_63(varData_629[numericVal_91 >>> 2] >>> 16 - numericVal_91 % 4 * 8 & 65535);
                  itemList_22.push(String.fromCharCode(varData_631));
                }
                return itemList_22.join("");
              },
              parse: function(param_1_2) {
                var varData_632 = param_1_2.length;
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_632; numericVal_91++) {
                  itemList_22[numericVal_91 >>> 1] |= handleAction_63(param_1_2.charCodeAt(numericVal_91) << 16 - numericVal_91 % 2 * 16);
                }
                return varData_622.create(itemList_22, varData_632 * 2);
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
    var varData_633 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/enc-base64.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_634 = param_1_1;
            var varData_635 = varData_634.lib;
            var varData_636 = varData_635.WordArray;
            var varData_637 = varData_634.enc;
            var varData_638 = varData_637.Base64 = {
              stringify: function(param_1_2) {
                var varData_639 = param_1_2.words;
                var varData_640 = param_1_2.sigBytes;
                var varData_641 = this._map;
                param_1_2.clamp();
                var itemList_22 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_640; numericVal_91 += 3) {
                  var varData_642 = varData_639[numericVal_91 >>> 2] >>> 24 - numericVal_91 % 4 * 8 & 255;
                  var varData_643 = varData_639[numericVal_91 + 1 >>> 2] >>> 24 - (numericVal_91 + 1) % 4 * 8 & 255;
                  var varData_644 = varData_639[numericVal_91 + 2 >>> 2] >>> 24 - (numericVal_91 + 2) % 4 * 8 & 255;
                  var varData_645 = varData_642 << 16 | varData_643 << 8 | varData_644;
                  for (var numericVal_92 = 0; numericVal_92 < 4 && numericVal_91 + numericVal_92 * 0.75 < varData_640; numericVal_92++) {
                    itemList_22.push(varData_641.charAt(varData_645 >>> (3 - numericVal_92) * 6 & 63));
                  }
                }
                var varData_646 = varData_641.charAt(64);
                if (varData_646) {
                  while (itemList_22.length % 4) {
                    itemList_22.push(varData_646);
                  }
                }
                return itemList_22.join("");
              },
              parse: function(param_1_2) {
                var varData_647 = param_1_2.length;
                var varData_648 = this._map;
                var varData_649 = this._reverseMap;
                if (!varData_649) {
                  varData_649 = this._reverseMap = [];
                  for (var numericVal_91 = 0; numericVal_91 < varData_648.length; numericVal_91++) {
                    varData_649[varData_648.charCodeAt(numericVal_91)] = numericVal_91;
                  }
                }
                var varData_650 = varData_648.charAt(64);
                if (varData_650) {
                  var varData_651 = param_1_2.indexOf(varData_650);
                  if (varData_651 !== -1) {
                    varData_647 = varData_651;
                  }
                }
                return handleAction_64(param_1_2, varData_647, varData_649);
              },
              _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            };
            function handleAction_64(param_1_2, param_2_1, param_3) {
              var itemList_22 = [];
              var numericVal_91 = 0;
              for (var numericVal_92 = 0; numericVal_92 < param_2_1; numericVal_92++) {
                if (numericVal_92 % 4) {
                  var varData_652 = param_3[param_1_2.charCodeAt(numericVal_92 - 1)] << numericVal_92 % 4 * 2;
                  var varData_653 = param_3[param_1_2.charCodeAt(numericVal_92)] >>> 6 - numericVal_92 % 4 * 2;
                  itemList_22[numericVal_91 >>> 2] |= (varData_652 | varData_653) << 24 - numericVal_91 % 4 * 8;
                  numericVal_91++;
                }
              }
              return varData_636.create(itemList_22, numericVal_91);
            }
          })();
          return param_1_1.enc.Base64;
        });
      }
    });
    var varData_654 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/md5.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_655 = param_1_1;
            var varData_656 = varData_655.lib;
            var varData_657 = varData_656.WordArray;
            var varData_658 = varData_656.Hasher;
            var varData_659 = varData_655.algo;
            var itemList_22 = [];
            (function() {
              for (var numericVal_91 = 0; numericVal_91 < 64; numericVal_91++) {
                itemList_22[numericVal_91] = param_1_2.abs(param_1_2.sin(numericVal_91 + 1)) * 4294967296 | 0;
              }
            })();
            var varData_660 = varData_659.MD5 = varData_658.extend({
              _doReset: function() {
                this._hash = new varData_657.init([1732584193, 4023233417, 2562383102, 271733878]);
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                for (var numericVal_91 = 0; numericVal_91 < 16; numericVal_91++) {
                  var varData_661 = param_2_1 + numericVal_91;
                  var varData_662 = param_1_3[varData_661];
                  param_1_3[varData_661] = (varData_662 << 8 | varData_662 >>> 24) & 16711935 | (varData_662 << 24 | varData_662 >>> 8) & -16711936;
                }
                var varData_663 = this._hash.words;
                var varData_664 = param_1_3[param_2_1 + 0];
                var varData_665 = param_1_3[param_2_1 + 1];
                var varData_666 = param_1_3[param_2_1 + 2];
                var varData_667 = param_1_3[param_2_1 + 3];
                var varData_668 = param_1_3[param_2_1 + 4];
                var varData_669 = param_1_3[param_2_1 + 5];
                var varData_670 = param_1_3[param_2_1 + 6];
                var varData_671 = param_1_3[param_2_1 + 7];
                var varData_672 = param_1_3[param_2_1 + 8];
                var varData_673 = param_1_3[param_2_1 + 9];
                var varData_674 = param_1_3[param_2_1 + 10];
                var varData_675 = param_1_3[param_2_1 + 11];
                var varData_676 = param_1_3[param_2_1 + 12];
                var varData_677 = param_1_3[param_2_1 + 13];
                var varData_678 = param_1_3[param_2_1 + 14];
                var varData_679 = param_1_3[param_2_1 + 15];
                var varData_680 = varData_663[0];
                var varData_681 = varData_663[1];
                var varData_682 = varData_663[2];
                var varData_683 = varData_663[3];
                varData_680 = handleAction_65(varData_680, varData_681, varData_682, varData_683, varData_664, 7, itemList_22[0]);
                varData_683 = handleAction_65(varData_683, varData_680, varData_681, varData_682, varData_665, 12, itemList_22[1]);
                varData_682 = handleAction_65(varData_682, varData_683, varData_680, varData_681, varData_666, 17, itemList_22[2]);
                varData_681 = handleAction_65(varData_681, varData_682, varData_683, varData_680, varData_667, 22, itemList_22[3]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_682, varData_683, varData_668, 7, itemList_22[4]);
                varData_683 = handleAction_65(varData_683, varData_680, varData_681, varData_682, varData_669, 12, itemList_22[5]);
                varData_682 = handleAction_65(varData_682, varData_683, varData_680, varData_681, varData_670, 17, itemList_22[6]);
                varData_681 = handleAction_65(varData_681, varData_682, varData_683, varData_680, varData_671, 22, itemList_22[7]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_682, varData_683, varData_672, 7, itemList_22[8]);
                varData_683 = handleAction_65(varData_683, varData_680, varData_681, varData_682, varData_673, 12, itemList_22[9]);
                varData_682 = handleAction_65(varData_682, varData_683, varData_680, varData_681, varData_674, 17, itemList_22[10]);
                varData_681 = handleAction_65(varData_681, varData_682, varData_683, varData_680, varData_675, 22, itemList_22[11]);
                varData_680 = handleAction_65(varData_680, varData_681, varData_682, varData_683, varData_676, 7, itemList_22[12]);
                varData_683 = handleAction_65(varData_683, varData_680, varData_681, varData_682, varData_677, 12, itemList_22[13]);
                varData_682 = handleAction_65(varData_682, varData_683, varData_680, varData_681, varData_678, 17, itemList_22[14]);
                varData_681 = handleAction_65(varData_681, varData_682, varData_683, varData_680, varData_679, 22, itemList_22[15]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_682, varData_683, varData_665, 5, itemList_22[16]);
                varData_683 = handleAction_66(varData_683, varData_680, varData_681, varData_682, varData_670, 9, itemList_22[17]);
                varData_682 = handleAction_66(varData_682, varData_683, varData_680, varData_681, varData_675, 14, itemList_22[18]);
                varData_681 = handleAction_66(varData_681, varData_682, varData_683, varData_680, varData_664, 20, itemList_22[19]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_682, varData_683, varData_669, 5, itemList_22[20]);
                varData_683 = handleAction_66(varData_683, varData_680, varData_681, varData_682, varData_674, 9, itemList_22[21]);
                varData_682 = handleAction_66(varData_682, varData_683, varData_680, varData_681, varData_679, 14, itemList_22[22]);
                varData_681 = handleAction_66(varData_681, varData_682, varData_683, varData_680, varData_668, 20, itemList_22[23]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_682, varData_683, varData_673, 5, itemList_22[24]);
                varData_683 = handleAction_66(varData_683, varData_680, varData_681, varData_682, varData_678, 9, itemList_22[25]);
                varData_682 = handleAction_66(varData_682, varData_683, varData_680, varData_681, varData_667, 14, itemList_22[26]);
                varData_681 = handleAction_66(varData_681, varData_682, varData_683, varData_680, varData_672, 20, itemList_22[27]);
                varData_680 = handleAction_66(varData_680, varData_681, varData_682, varData_683, varData_677, 5, itemList_22[28]);
                varData_683 = handleAction_66(varData_683, varData_680, varData_681, varData_682, varData_666, 9, itemList_22[29]);
                varData_682 = handleAction_66(varData_682, varData_683, varData_680, varData_681, varData_671, 14, itemList_22[30]);
                varData_681 = handleAction_66(varData_681, varData_682, varData_683, varData_680, varData_676, 20, itemList_22[31]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_682, varData_683, varData_669, 4, itemList_22[32]);
                varData_683 = handleAction_67(varData_683, varData_680, varData_681, varData_682, varData_672, 11, itemList_22[33]);
                varData_682 = handleAction_67(varData_682, varData_683, varData_680, varData_681, varData_675, 16, itemList_22[34]);
                varData_681 = handleAction_67(varData_681, varData_682, varData_683, varData_680, varData_678, 23, itemList_22[35]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_682, varData_683, varData_665, 4, itemList_22[36]);
                varData_683 = handleAction_67(varData_683, varData_680, varData_681, varData_682, varData_668, 11, itemList_22[37]);
                varData_682 = handleAction_67(varData_682, varData_683, varData_680, varData_681, varData_671, 16, itemList_22[38]);
                varData_681 = handleAction_67(varData_681, varData_682, varData_683, varData_680, varData_674, 23, itemList_22[39]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_682, varData_683, varData_677, 4, itemList_22[40]);
                varData_683 = handleAction_67(varData_683, varData_680, varData_681, varData_682, varData_664, 11, itemList_22[41]);
                varData_682 = handleAction_67(varData_682, varData_683, varData_680, varData_681, varData_667, 16, itemList_22[42]);
                varData_681 = handleAction_67(varData_681, varData_682, varData_683, varData_680, varData_670, 23, itemList_22[43]);
                varData_680 = handleAction_67(varData_680, varData_681, varData_682, varData_683, varData_673, 4, itemList_22[44]);
                varData_683 = handleAction_67(varData_683, varData_680, varData_681, varData_682, varData_676, 11, itemList_22[45]);
                varData_682 = handleAction_67(varData_682, varData_683, varData_680, varData_681, varData_679, 16, itemList_22[46]);
                varData_681 = handleAction_67(varData_681, varData_682, varData_683, varData_680, varData_666, 23, itemList_22[47]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_682, varData_683, varData_664, 6, itemList_22[48]);
                varData_683 = handleAction_68(varData_683, varData_680, varData_681, varData_682, varData_671, 10, itemList_22[49]);
                varData_682 = handleAction_68(varData_682, varData_683, varData_680, varData_681, varData_678, 15, itemList_22[50]);
                varData_681 = handleAction_68(varData_681, varData_682, varData_683, varData_680, varData_669, 21, itemList_22[51]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_682, varData_683, varData_676, 6, itemList_22[52]);
                varData_683 = handleAction_68(varData_683, varData_680, varData_681, varData_682, varData_667, 10, itemList_22[53]);
                varData_682 = handleAction_68(varData_682, varData_683, varData_680, varData_681, varData_674, 15, itemList_22[54]);
                varData_681 = handleAction_68(varData_681, varData_682, varData_683, varData_680, varData_665, 21, itemList_22[55]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_682, varData_683, varData_672, 6, itemList_22[56]);
                varData_683 = handleAction_68(varData_683, varData_680, varData_681, varData_682, varData_679, 10, itemList_22[57]);
                varData_682 = handleAction_68(varData_682, varData_683, varData_680, varData_681, varData_670, 15, itemList_22[58]);
                varData_681 = handleAction_68(varData_681, varData_682, varData_683, varData_680, varData_677, 21, itemList_22[59]);
                varData_680 = handleAction_68(varData_680, varData_681, varData_682, varData_683, varData_668, 6, itemList_22[60]);
                varData_683 = handleAction_68(varData_683, varData_680, varData_681, varData_682, varData_675, 10, itemList_22[61]);
                varData_682 = handleAction_68(varData_682, varData_683, varData_680, varData_681, varData_666, 15, itemList_22[62]);
                varData_681 = handleAction_68(varData_681, varData_682, varData_683, varData_680, varData_673, 21, itemList_22[63]);
                varData_663[0] = varData_663[0] + varData_680 | 0;
                varData_663[1] = varData_663[1] + varData_681 | 0;
                varData_663[2] = varData_663[2] + varData_682 | 0;
                varData_663[3] = varData_663[3] + varData_683 | 0;
              },
              _doFinalize: function() {
                var varData_684 = this._data;
                var varData_685 = varData_684.words;
                var varData_686 = this._nDataBytes * 8;
                var varData_687 = varData_684.sigBytes * 8;
                varData_685[varData_687 >>> 5] |= 128 << 24 - varData_687 % 32;
                var varData_688 = param_1_2.floor(varData_686 / 4294967296);
                var varData_689 = varData_686;
                varData_685[(varData_687 + 64 >>> 9 << 4) + 15] = (varData_688 << 8 | varData_688 >>> 24) & 16711935 | (varData_688 << 24 | varData_688 >>> 8) & -16711936;
                varData_685[(varData_687 + 64 >>> 9 << 4) + 14] = (varData_689 << 8 | varData_689 >>> 24) & 16711935 | (varData_689 << 24 | varData_689 >>> 8) & -16711936;
                varData_684.sigBytes = (varData_685.length + 1) * 4;
                this._process();
                var varData_690 = this._hash;
                var varData_691 = varData_690.words;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  var varData_692 = varData_691[numericVal_91];
                  varData_691[numericVal_91] = (varData_692 << 8 | varData_692 >>> 24) & 16711935 | (varData_692 << 24 | varData_692 >>> 8) & -16711936;
                }
                return varData_690;
              },
              clone: function() {
                var varData_693 = varData_658.clone.call(this);
                varData_693._hash = this._hash.clone();
                return varData_693;
              }
            });
            function handleAction_65(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_694 = param_1_3 + (param_2_1 & param_3 | ~param_2_1 & param_4) + param_5 + param_7;
              return (varData_694 << param_6 | varData_694 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_66(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_695 = param_1_3 + (param_2_1 & param_4 | param_3 & ~param_4) + param_5 + param_7;
              return (varData_695 << param_6 | varData_695 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_67(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_696 = param_1_3 + (param_2_1 ^ param_3 ^ param_4) + param_5 + param_7;
              return (varData_696 << param_6 | varData_696 >>> 32 - param_6) + param_2_1;
            }
            function handleAction_68(param_1_3, param_2_1, param_3, param_4, param_5, param_6, param_7) {
              var varData_697 = param_1_3 + (param_3 ^ (param_2_1 | ~param_4)) + param_5 + param_7;
              return (varData_697 << param_6 | varData_697 >>> 32 - param_6) + param_2_1;
            }
            varData_655.MD5 = varData_658._createHelper(varData_660);
            varData_655.HmacMD5 = varData_658._createHmacHelper(varData_660);
          })(Math);
          return param_1_1.MD5;
        });
      }
    });
    var varData_698 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha1.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_699 = param_1_1;
            var varData_700 = varData_699.lib;
            var varData_701 = varData_700.WordArray;
            var varData_702 = varData_700.Hasher;
            var varData_703 = varData_699.algo;
            var itemList_22 = [];
            var varData_704 = varData_703.SHA1 = varData_702.extend({
              _doReset: function() {
                this._hash = new varData_701.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_705 = this._hash.words;
                var varData_706 = varData_705[0];
                var varData_707 = varData_705[1];
                var varData_708 = varData_705[2];
                var varData_709 = varData_705[3];
                var varData_710 = varData_705[4];
                for (var numericVal_91 = 0; numericVal_91 < 80; numericVal_91++) {
                  if (numericVal_91 < 16) {
                    itemList_22[numericVal_91] = param_1_2[param_2_1 + numericVal_91] | 0;
                  } else {
                    var varData_711 = itemList_22[numericVal_91 - 3] ^ itemList_22[numericVal_91 - 8] ^ itemList_22[numericVal_91 - 14] ^ itemList_22[numericVal_91 - 16];
                    itemList_22[numericVal_91] = varData_711 << 1 | varData_711 >>> 31;
                  }
                  var varData_712 = (varData_706 << 5 | varData_706 >>> 27) + varData_710 + itemList_22[numericVal_91];
                  if (numericVal_91 < 20) {
                    varData_712 += (varData_707 & varData_708 | ~varData_707 & varData_709) + 1518500249;
                  } else if (numericVal_91 < 40) {
                    varData_712 += (varData_707 ^ varData_708 ^ varData_709) + 1859775393;
                  } else if (numericVal_91 < 60) {
                    varData_712 += (varData_707 & varData_708 | varData_707 & varData_709 | varData_708 & varData_709) - 1894007588;
                  } else {
                    varData_712 += (varData_707 ^ varData_708 ^ varData_709) - 899497514;
                  }
                  varData_710 = varData_709;
                  varData_709 = varData_708;
                  varData_708 = varData_707 << 30 | varData_707 >>> 2;
                  varData_707 = varData_706;
                  varData_706 = varData_712;
                }
                varData_705[0] = varData_705[0] + varData_706 | 0;
                varData_705[1] = varData_705[1] + varData_707 | 0;
                varData_705[2] = varData_705[2] + varData_708 | 0;
                varData_705[3] = varData_705[3] + varData_709 | 0;
                varData_705[4] = varData_705[4] + varData_710 | 0;
              },
              _doFinalize: function() {
                var varData_713 = this._data;
                var varData_714 = varData_713.words;
                var varData_715 = this._nDataBytes * 8;
                var varData_716 = varData_713.sigBytes * 8;
                varData_714[varData_716 >>> 5] |= 128 << 24 - varData_716 % 32;
                varData_714[(varData_716 + 64 >>> 9 << 4) + 14] = Math.floor(varData_715 / 4294967296);
                varData_714[(varData_716 + 64 >>> 9 << 4) + 15] = varData_715;
                varData_713.sigBytes = varData_714.length * 4;
                this._process();
                return this._hash;
              },
              clone: function() {
                var varData_717 = varData_702.clone.call(this);
                varData_717._hash = this._hash.clone();
                return varData_717;
              }
            });
            varData_699.SHA1 = varData_702._createHelper(varData_704);
            varData_699.HmacSHA1 = varData_702._createHmacHelper(varData_704);
          })();
          return param_1_1.SHA1;
        });
      }
    });
    var varData_718 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha256.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_719 = param_1_1;
            var varData_720 = varData_719.lib;
            var varData_721 = varData_720.WordArray;
            var varData_722 = varData_720.Hasher;
            var varData_723 = varData_719.algo;
            var itemList_22 = [];
            var itemList_3 = [];
            (function() {
              function handleAction_69(param_1_3) {
                var varData_724 = param_1_2.sqrt(param_1_3);
                for (var numericVal_912 = 2; numericVal_912 <= varData_724; numericVal_912++) {
                  if (!(param_1_3 % numericVal_912)) {
                    return false;
                  }
                }
                return true;
              }
              function handleAction_70(param_1_3) {
                return (param_1_3 - (param_1_3 | 0)) * 4294967296 | 0;
              }
              var numericVal_91 = 2;
              var numericVal_92 = 0;
              while (numericVal_92 < 64) {
                if (handleAction_69(numericVal_91)) {
                  if (numericVal_92 < 8) {
                    itemList_22[numericVal_92] = handleAction_70(param_1_2.pow(numericVal_91, 1 / 2));
                  }
                  itemList_3[numericVal_92] = handleAction_70(param_1_2.pow(numericVal_91, 1 / 3));
                  numericVal_92++;
                }
                numericVal_91++;
              }
            })();
            var itemList_4 = [];
            var varData_725 = varData_723.SHA256 = varData_722.extend({
              _doReset: function() {
                this._hash = new varData_721.init(itemList_22.slice(0));
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                var varData_726 = this._hash.words;
                var varData_727 = varData_726[0];
                var varData_728 = varData_726[1];
                var varData_729 = varData_726[2];
                var varData_730 = varData_726[3];
                var varData_731 = varData_726[4];
                var varData_732 = varData_726[5];
                var varData_733 = varData_726[6];
                var varData_734 = varData_726[7];
                for (var numericVal_91 = 0; numericVal_91 < 64; numericVal_91++) {
                  if (numericVal_91 < 16) {
                    itemList_4[numericVal_91] = param_1_3[param_2_1 + numericVal_91] | 0;
                  } else {
                    var varData_735 = itemList_4[numericVal_91 - 15];
                    var varData_736 = (varData_735 << 25 | varData_735 >>> 7) ^ (varData_735 << 14 | varData_735 >>> 18) ^ varData_735 >>> 3;
                    var varData_737 = itemList_4[numericVal_91 - 2];
                    var varData_738 = (varData_737 << 15 | varData_737 >>> 17) ^ (varData_737 << 13 | varData_737 >>> 19) ^ varData_737 >>> 10;
                    itemList_4[numericVal_91] = varData_736 + itemList_4[numericVal_91 - 7] + varData_738 + itemList_4[numericVal_91 - 16];
                  }
                  var varData_739 = varData_731 & varData_732 ^ ~varData_731 & varData_733;
                  var varData_740 = varData_727 & varData_728 ^ varData_727 & varData_729 ^ varData_728 & varData_729;
                  var varData_741 = (varData_727 << 30 | varData_727 >>> 2) ^ (varData_727 << 19 | varData_727 >>> 13) ^ (varData_727 << 10 | varData_727 >>> 22);
                  var varData_742 = (varData_731 << 26 | varData_731 >>> 6) ^ (varData_731 << 21 | varData_731 >>> 11) ^ (varData_731 << 7 | varData_731 >>> 25);
                  var varData_743 = varData_734 + varData_742 + varData_739 + itemList_3[numericVal_91] + itemList_4[numericVal_91];
                  var varData_744 = varData_741 + varData_740;
                  varData_734 = varData_733;
                  varData_733 = varData_732;
                  varData_732 = varData_731;
                  varData_731 = varData_730 + varData_743 | 0;
                  varData_730 = varData_729;
                  varData_729 = varData_728;
                  varData_728 = varData_727;
                  varData_727 = varData_743 + varData_744 | 0;
                }
                varData_726[0] = varData_726[0] + varData_727 | 0;
                varData_726[1] = varData_726[1] + varData_728 | 0;
                varData_726[2] = varData_726[2] + varData_729 | 0;
                varData_726[3] = varData_726[3] + varData_730 | 0;
                varData_726[4] = varData_726[4] + varData_731 | 0;
                varData_726[5] = varData_726[5] + varData_732 | 0;
                varData_726[6] = varData_726[6] + varData_733 | 0;
                varData_726[7] = varData_726[7] + varData_734 | 0;
              },
              _doFinalize: function() {
                var varData_745 = this._data;
                var varData_746 = varData_745.words;
                var varData_747 = this._nDataBytes * 8;
                var varData_748 = varData_745.sigBytes * 8;
                varData_746[varData_748 >>> 5] |= 128 << 24 - varData_748 % 32;
                varData_746[(varData_748 + 64 >>> 9 << 4) + 14] = param_1_2.floor(varData_747 / 4294967296);
                varData_746[(varData_748 + 64 >>> 9 << 4) + 15] = varData_747;
                varData_745.sigBytes = varData_746.length * 4;
                this._process();
                return this._hash;
              },
              clone: function() {
                var varData_749 = varData_722.clone.call(this);
                varData_749._hash = this._hash.clone();
                return varData_749;
              }
            });
            varData_719.SHA256 = varData_722._createHelper(varData_725);
            varData_719.HmacSHA256 = varData_722._createHmacHelper(varData_725);
          })(Math);
          return param_1_1.SHA256;
        });
      }
    });
    var varData_750 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha224.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_718());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha256"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_751 = param_1_1;
            var varData_752 = varData_751.lib;
            var varData_753 = varData_752.WordArray;
            var varData_754 = varData_751.algo;
            var varData_755 = varData_754.SHA256;
            var varData_756 = varData_754.SHA224 = varData_755.extend({
              _doReset: function() {
                this._hash = new varData_753.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
              },
              _doFinalize: function() {
                var varData_757 = varData_755._doFinalize.call(this);
                varData_757.sigBytes -= 4;
                return varData_757;
              }
            });
            varData_751.SHA224 = varData_755._createHelper(varData_756);
            varData_751.HmacSHA224 = varData_755._createHmacHelper(varData_756);
          })();
          return param_1_1.SHA224;
        });
      }
    });
    var varData_758 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha512.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_597());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_759 = param_1_1;
            var varData_760 = varData_759.lib;
            var varData_761 = varData_760.Hasher;
            var varData_762 = varData_759.x64;
            var varData_763 = varData_762.Word;
            var varData_764 = varData_762.WordArray;
            var varData_765 = varData_759.algo;
            function handleAction_71() {
              return varData_763.create.apply(varData_763, arguments);
            }
            var itemList_22 = [handleAction_71(1116352408, 3609767458), handleAction_71(1899447441, 602891725), handleAction_71(3049323471, 3964484399), handleAction_71(3921009573, 2173295548), handleAction_71(961987163, 4081628472), handleAction_71(1508970993, 3053834265), handleAction_71(2453635748, 2937671579), handleAction_71(2870763221, 3664609560), handleAction_71(3624381080, 2734883394), handleAction_71(310598401, 1164996542), handleAction_71(607225278, 1323610764), handleAction_71(1426881987, 3590304994), handleAction_71(1925078388, 4068182383), handleAction_71(2162078206, 991336113), handleAction_71(2614888103, 633803317), handleAction_71(3248222580, 3479774868), handleAction_71(3835390401, 2666613458), handleAction_71(4022224774, 944711139), handleAction_71(264347078, 2341262773), handleAction_71(604807628, 2007800933), handleAction_71(770255983, 1495990901), handleAction_71(1249150122, 1856431235), handleAction_71(1555081692, 3175218132), handleAction_71(1996064986, 2198950837), handleAction_71(2554220882, 3999719339), handleAction_71(2821834349, 766784016), handleAction_71(2952996808, 2566594879), handleAction_71(3210313671, 3203337956), handleAction_71(3336571891, 1034457026), handleAction_71(3584528711, 2466948901), handleAction_71(113926993, 3758326383), handleAction_71(338241895, 168717936), handleAction_71(666307205, 1188179964), handleAction_71(773529912, 1546045734), handleAction_71(1294757372, 1522805485), handleAction_71(1396182291, 2643833823), handleAction_71(1695183700, 2343527390), handleAction_71(1986661051, 1014477480), handleAction_71(2177026350, 1206759142), handleAction_71(2456956037, 344077627), handleAction_71(2730485921, 1290863460), handleAction_71(2820302411, 3158454273), handleAction_71(3259730800, 3505952657), handleAction_71(3345764771, 106217008), handleAction_71(3516065817, 3606008344), handleAction_71(3600352804, 1432725776), handleAction_71(4094571909, 1467031594), handleAction_71(275423344, 851169720), handleAction_71(430227734, 3100823752), handleAction_71(506948616, 1363258195), handleAction_71(659060556, 3750685593), handleAction_71(883997877, 3785050280), handleAction_71(958139571, 3318307427), handleAction_71(1322822218, 3812723403), handleAction_71(1537002063, 2003034995), handleAction_71(1747873779, 3602036899), handleAction_71(1955562222, 1575990012), handleAction_71(2024104815, 1125592928), handleAction_71(2227730452, 2716904306), handleAction_71(2361852424, 442776044), handleAction_71(2428436474, 593698344), handleAction_71(2756734187, 3733110249), handleAction_71(3204031479, 2999351573), handleAction_71(3329325298, 3815920427), handleAction_71(3391569614, 3928383900), handleAction_71(3515267271, 566280711), handleAction_71(3940187606, 3454069534), handleAction_71(4118630271, 4000239992), handleAction_71(116418474, 1914138554), handleAction_71(174292421, 2731055270), handleAction_71(289380356, 3203993006), handleAction_71(460393269, 320620315), handleAction_71(685471733, 587496836), handleAction_71(852142971, 1086792851), handleAction_71(1017036298, 365543100), handleAction_71(1126000580, 2618297676), handleAction_71(1288033470, 3409855158), handleAction_71(1501505948, 4234509866), handleAction_71(1607167915, 987167468), handleAction_71(1816402316, 1246189591)];
            var itemList_3 = [];
            (function() {
              for (var numericVal_91 = 0; numericVal_91 < 80; numericVal_91++) {
                itemList_3[numericVal_91] = handleAction_71();
              }
            })();
            var varData_766 = varData_765.SHA512 = varData_761.extend({
              _doReset: function() {
                this._hash = new varData_764.init([new varData_763.init(1779033703, 4089235720), new varData_763.init(3144134277, 2227873595), new varData_763.init(1013904242, 4271175723), new varData_763.init(2773480762, 1595750129), new varData_763.init(1359893119, 2917565137), new varData_763.init(2600822924, 725511199), new varData_763.init(528734635, 4215389547), new varData_763.init(1541459225, 327033209)]);
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_767 = this._hash.words;
                var varData_768 = varData_767[0];
                var varData_769 = varData_767[1];
                var varData_770 = varData_767[2];
                var varData_771 = varData_767[3];
                var varData_772 = varData_767[4];
                var varData_773 = varData_767[5];
                var varData_774 = varData_767[6];
                var varData_775 = varData_767[7];
                var varData_776 = varData_768.high;
                var varData_777 = varData_768.low;
                var varData_778 = varData_769.high;
                var varData_779 = varData_769.low;
                var varData_780 = varData_770.high;
                var varData_781 = varData_770.low;
                var varData_782 = varData_771.high;
                var varData_783 = varData_771.low;
                var varData_784 = varData_772.high;
                var varData_785 = varData_772.low;
                var varData_786 = varData_773.high;
                var varData_787 = varData_773.low;
                var varData_788 = varData_774.high;
                var varData_789 = varData_774.low;
                var varData_790 = varData_775.high;
                var varData_791 = varData_775.low;
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
                var varData_806 = varData_790;
                var varData_807 = varData_791;
                for (var numericVal_91 = 0; numericVal_91 < 80; numericVal_91++) {
                  var varData_808 = itemList_3[numericVal_91];
                  if (numericVal_91 < 16) {
                    var varData_809 = varData_808.high = param_1_2[param_2_1 + numericVal_91 * 2] | 0;
                    var varData_810 = varData_808.low = param_1_2[param_2_1 + numericVal_91 * 2 + 1] | 0;
                  } else {
                    var varData_811 = itemList_3[numericVal_91 - 15];
                    var varData_812 = varData_811.high;
                    var varData_813 = varData_811.low;
                    var varData_814 = (varData_812 >>> 1 | varData_813 << 31) ^ (varData_812 >>> 8 | varData_813 << 24) ^ varData_812 >>> 7;
                    var varData_815 = (varData_813 >>> 1 | varData_812 << 31) ^ (varData_813 >>> 8 | varData_812 << 24) ^ (varData_813 >>> 7 | varData_812 << 25);
                    var varData_816 = itemList_3[numericVal_91 - 2];
                    var varData_817 = varData_816.high;
                    var varData_818 = varData_816.low;
                    var varData_819 = (varData_817 >>> 19 | varData_818 << 13) ^ (varData_817 << 3 | varData_818 >>> 29) ^ varData_817 >>> 6;
                    var varData_820 = (varData_818 >>> 19 | varData_817 << 13) ^ (varData_818 << 3 | varData_817 >>> 29) ^ (varData_818 >>> 6 | varData_817 << 26);
                    var varData_821 = itemList_3[numericVal_91 - 7];
                    var varData_822 = varData_821.high;
                    var varData_823 = varData_821.low;
                    var varData_824 = itemList_3[numericVal_91 - 16];
                    var varData_825 = varData_824.high;
                    var varData_826 = varData_824.low;
                    var varData_810 = varData_815 + varData_823;
                    var varData_809 = varData_814 + varData_822 + (varData_810 >>> 0 < varData_815 >>> 0 ? 1 : 0);
                    var varData_810 = varData_810 + varData_820;
                    var varData_809 = varData_809 + varData_819 + (varData_810 >>> 0 < varData_820 >>> 0 ? 1 : 0);
                    var varData_810 = varData_810 + varData_826;
                    var varData_809 = varData_809 + varData_825 + (varData_810 >>> 0 < varData_826 >>> 0 ? 1 : 0);
                    varData_808.high = varData_809;
                    varData_808.low = varData_810;
                  }
                  var varData_827 = varData_800 & varData_802 ^ ~varData_800 & varData_804;
                  var varData_828 = varData_801 & varData_803 ^ ~varData_801 & varData_805;
                  var varData_829 = varData_792 & varData_794 ^ varData_792 & varData_796 ^ varData_794 & varData_796;
                  var varData_830 = varData_793 & varData_795 ^ varData_793 & varData_797 ^ varData_795 & varData_797;
                  var varData_831 = (varData_792 >>> 28 | varData_793 << 4) ^ (varData_792 << 30 | varData_793 >>> 2) ^ (varData_792 << 25 | varData_793 >>> 7);
                  var varData_832 = (varData_793 >>> 28 | varData_792 << 4) ^ (varData_793 << 30 | varData_792 >>> 2) ^ (varData_793 << 25 | varData_792 >>> 7);
                  var varData_833 = (varData_800 >>> 14 | varData_801 << 18) ^ (varData_800 >>> 18 | varData_801 << 14) ^ (varData_800 << 23 | varData_801 >>> 9);
                  var varData_834 = (varData_801 >>> 14 | varData_800 << 18) ^ (varData_801 >>> 18 | varData_800 << 14) ^ (varData_801 << 23 | varData_800 >>> 9);
                  var varData_835 = itemList_22[numericVal_91];
                  var varData_836 = varData_835.high;
                  var varData_837 = varData_835.low;
                  var varData_838 = varData_807 + varData_834;
                  var varData_839 = varData_806 + varData_833 + (varData_838 >>> 0 < varData_807 >>> 0 ? 1 : 0);
                  var varData_838 = varData_838 + varData_828;
                  var varData_839 = varData_839 + varData_827 + (varData_838 >>> 0 < varData_828 >>> 0 ? 1 : 0);
                  var varData_838 = varData_838 + varData_837;
                  var varData_839 = varData_839 + varData_836 + (varData_838 >>> 0 < varData_837 >>> 0 ? 1 : 0);
                  var varData_838 = varData_838 + varData_810;
                  var varData_839 = varData_839 + varData_809 + (varData_838 >>> 0 < varData_810 >>> 0 ? 1 : 0);
                  var varData_840 = varData_832 + varData_830;
                  var varData_841 = varData_831 + varData_829 + (varData_840 >>> 0 < varData_832 >>> 0 ? 1 : 0);
                  varData_806 = varData_804;
                  varData_807 = varData_805;
                  varData_804 = varData_802;
                  varData_805 = varData_803;
                  varData_802 = varData_800;
                  varData_803 = varData_801;
                  varData_801 = varData_799 + varData_838 | 0;
                  varData_800 = varData_798 + varData_839 + (varData_801 >>> 0 < varData_799 >>> 0 ? 1 : 0) | 0;
                  varData_798 = varData_796;
                  varData_799 = varData_797;
                  varData_796 = varData_794;
                  varData_797 = varData_795;
                  varData_794 = varData_792;
                  varData_795 = varData_793;
                  varData_793 = varData_838 + varData_840 | 0;
                  varData_792 = varData_839 + varData_841 + (varData_793 >>> 0 < varData_838 >>> 0 ? 1 : 0) | 0;
                }
                varData_777 = varData_768.low = varData_777 + varData_793;
                varData_768.high = varData_776 + varData_792 + (varData_777 >>> 0 < varData_793 >>> 0 ? 1 : 0);
                varData_779 = varData_769.low = varData_779 + varData_795;
                varData_769.high = varData_778 + varData_794 + (varData_779 >>> 0 < varData_795 >>> 0 ? 1 : 0);
                varData_781 = varData_770.low = varData_781 + varData_797;
                varData_770.high = varData_780 + varData_796 + (varData_781 >>> 0 < varData_797 >>> 0 ? 1 : 0);
                varData_783 = varData_771.low = varData_783 + varData_799;
                varData_771.high = varData_782 + varData_798 + (varData_783 >>> 0 < varData_799 >>> 0 ? 1 : 0);
                varData_785 = varData_772.low = varData_785 + varData_801;
                varData_772.high = varData_784 + varData_800 + (varData_785 >>> 0 < varData_801 >>> 0 ? 1 : 0);
                varData_787 = varData_773.low = varData_787 + varData_803;
                varData_773.high = varData_786 + varData_802 + (varData_787 >>> 0 < varData_803 >>> 0 ? 1 : 0);
                varData_789 = varData_774.low = varData_789 + varData_805;
                varData_774.high = varData_788 + varData_804 + (varData_789 >>> 0 < varData_805 >>> 0 ? 1 : 0);
                varData_791 = varData_775.low = varData_791 + varData_807;
                varData_775.high = varData_790 + varData_806 + (varData_791 >>> 0 < varData_807 >>> 0 ? 1 : 0);
              },
              _doFinalize: function() {
                var varData_842 = this._data;
                var varData_843 = varData_842.words;
                var varData_844 = this._nDataBytes * 8;
                var varData_845 = varData_842.sigBytes * 8;
                varData_843[varData_845 >>> 5] |= 128 << 24 - varData_845 % 32;
                varData_843[(varData_845 + 128 >>> 10 << 5) + 30] = Math.floor(varData_844 / 4294967296);
                varData_843[(varData_845 + 128 >>> 10 << 5) + 31] = varData_844;
                varData_842.sigBytes = varData_843.length * 4;
                this._process();
                var varData_846 = this._hash.toX32();
                return varData_846;
              },
              clone: function() {
                var varData_847 = varData_761.clone.call(this);
                varData_847._hash = this._hash.clone();
                return varData_847;
              },
              blockSize: 32
            });
            varData_759.SHA512 = varData_761._createHelper(varData_766);
            varData_759.HmacSHA512 = varData_761._createHmacHelper(varData_766);
          })();
          return param_1_1.SHA512;
        });
      }
    });
    var varData_848 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha384.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_597(), varData_758());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core", "./sha512"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_849 = param_1_1;
            var varData_850 = varData_849.x64;
            var varData_851 = varData_850.Word;
            var varData_852 = varData_850.WordArray;
            var varData_853 = varData_849.algo;
            var varData_854 = varData_853.SHA512;
            var varData_855 = varData_853.SHA384 = varData_854.extend({
              _doReset: function() {
                this._hash = new varData_852.init([new varData_851.init(3418070365, 3238371032), new varData_851.init(1654270250, 914150663), new varData_851.init(2438529370, 812702999), new varData_851.init(355462360, 4144912697), new varData_851.init(1731405415, 4290775857), new varData_851.init(2394180231, 1750603025), new varData_851.init(3675008525, 1694076839), new varData_851.init(1203062813, 3204075428)]);
              },
              _doFinalize: function() {
                var varData_856 = varData_854._doFinalize.call(this);
                varData_856.sigBytes -= 16;
                return varData_856;
              }
            });
            varData_849.SHA384 = varData_854._createHelper(varData_855);
            varData_849.HmacSHA384 = varData_854._createHmacHelper(varData_855);
          })();
          return param_1_1.SHA384;
        });
      }
    });
    var varData_857 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/sha3.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_597());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./x64-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_858 = param_1_1;
            var varData_859 = varData_858.lib;
            var varData_860 = varData_859.WordArray;
            var varData_861 = varData_859.Hasher;
            var varData_862 = varData_858.x64;
            var varData_863 = varData_862.Word;
            var varData_864 = varData_858.algo;
            var itemList_22 = [];
            var itemList_3 = [];
            var itemList_4 = [];
            (function() {
              var numericVal_91 = 1;
              var numericVal_92 = 0;
              for (var numericVal_93 = 0; numericVal_93 < 24; numericVal_93++) {
                itemList_22[numericVal_91 + numericVal_92 * 5] = (numericVal_93 + 1) * (numericVal_93 + 2) / 2 % 64;
                var varData_865 = numericVal_92 % 5;
                var varData_866 = (numericVal_91 * 2 + numericVal_92 * 3) % 5;
                numericVal_91 = varData_865;
                numericVal_92 = varData_866;
              }
              for (var numericVal_91 = 0; numericVal_91 < 5; numericVal_91++) {
                for (var numericVal_92 = 0; numericVal_92 < 5; numericVal_92++) {
                  itemList_3[numericVal_91 + numericVal_92 * 5] = numericVal_92 + (numericVal_91 * 2 + numericVal_92 * 3) % 5 * 5;
                }
              }
              var numericVal_94 = 1;
              for (var numericVal_95 = 0; numericVal_95 < 24; numericVal_95++) {
                var numericVal_96 = 0;
                var numericVal_97 = 0;
                for (var numericVal_98 = 0; numericVal_98 < 7; numericVal_98++) {
                  if (numericVal_94 & 1) {
                    var varData_867 = (1 << numericVal_98) - 1;
                    if (varData_867 < 32) {
                      numericVal_97 ^= 1 << varData_867;
                    } else {
                      numericVal_96 ^= 1 << varData_867 - 32;
                    }
                  }
                  if (numericVal_94 & 128) {
                    numericVal_94 = numericVal_94 << 1 ^ 113;
                  } else {
                    numericVal_94 <<= 1;
                  }
                }
                itemList_4[numericVal_95] = varData_863.create(numericVal_96, numericVal_97);
              }
            })();
            var itemList_5 = [];
            (function() {
              for (var numericVal_91 = 0; numericVal_91 < 25; numericVal_91++) {
                itemList_5[numericVal_91] = varData_863.create();
              }
            })();
            var varData_868 = varData_864.SHA3 = varData_861.extend({
              cfg: varData_861.cfg.extend({
                outputLength: 512
              }),
              _doReset: function() {
                var varData_869 = this._state = [];
                for (var numericVal_91 = 0; numericVal_91 < 25; numericVal_91++) {
                  varData_869[numericVal_91] = new varData_863.init();
                }
                this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                var varData_870 = this._state;
                var varData_871 = this.blockSize / 2;
                for (var numericVal_91 = 0; numericVal_91 < varData_871; numericVal_91++) {
                  var varData_872 = param_1_3[param_2_1 + numericVal_91 * 2];
                  var varData_873 = param_1_3[param_2_1 + numericVal_91 * 2 + 1];
                  varData_872 = (varData_872 << 8 | varData_872 >>> 24) & 16711935 | (varData_872 << 24 | varData_872 >>> 8) & -16711936;
                  varData_873 = (varData_873 << 8 | varData_873 >>> 24) & 16711935 | (varData_873 << 24 | varData_873 >>> 8) & -16711936;
                  var varData_874 = varData_870[numericVal_91];
                  varData_874.high ^= varData_873;
                  varData_874.low ^= varData_872;
                }
                for (var numericVal_92 = 0; numericVal_92 < 24; numericVal_92++) {
                  for (var numericVal_93 = 0; numericVal_93 < 5; numericVal_93++) {
                    var numericVal_94 = 0;
                    var numericVal_95 = 0;
                    for (var numericVal_96 = 0; numericVal_96 < 5; numericVal_96++) {
                      var varData_874 = varData_870[numericVal_93 + numericVal_96 * 5];
                      numericVal_94 ^= varData_874.high;
                      numericVal_95 ^= varData_874.low;
                    }
                    var varData_875 = itemList_5[numericVal_93];
                    varData_875.high = numericVal_94;
                    varData_875.low = numericVal_95;
                  }
                  for (var numericVal_93 = 0; numericVal_93 < 5; numericVal_93++) {
                    var varData_876 = itemList_5[(numericVal_93 + 4) % 5];
                    var varData_877 = itemList_5[(numericVal_93 + 1) % 5];
                    var varData_878 = varData_877.high;
                    var varData_879 = varData_877.low;
                    var numericVal_94 = varData_876.high ^ (varData_878 << 1 | varData_879 >>> 31);
                    var numericVal_95 = varData_876.low ^ (varData_879 << 1 | varData_878 >>> 31);
                    for (var numericVal_96 = 0; numericVal_96 < 5; numericVal_96++) {
                      var varData_874 = varData_870[numericVal_93 + numericVal_96 * 5];
                      varData_874.high ^= numericVal_94;
                      varData_874.low ^= numericVal_95;
                    }
                  }
                  for (var numericVal_97 = 1; numericVal_97 < 25; numericVal_97++) {
                    var varData_874 = varData_870[numericVal_97];
                    var varData_880 = varData_874.high;
                    var varData_881 = varData_874.low;
                    var varData_882 = itemList_22[numericVal_97];
                    if (varData_882 < 32) {
                      var numericVal_94 = varData_880 << varData_882 | varData_881 >>> 32 - varData_882;
                      var numericVal_95 = varData_881 << varData_882 | varData_880 >>> 32 - varData_882;
                    } else {
                      var numericVal_94 = varData_881 << varData_882 - 32 | varData_880 >>> 64 - varData_882;
                      var numericVal_95 = varData_880 << varData_882 - 32 | varData_881 >>> 64 - varData_882;
                    }
                    var varData_883 = itemList_5[itemList_3[numericVal_97]];
                    varData_883.high = numericVal_94;
                    varData_883.low = numericVal_95;
                  }
                  var varData_884 = itemList_5[0];
                  var varData_885 = varData_870[0];
                  varData_884.high = varData_885.high;
                  varData_884.low = varData_885.low;
                  for (var numericVal_93 = 0; numericVal_93 < 5; numericVal_93++) {
                    for (var numericVal_96 = 0; numericVal_96 < 5; numericVal_96++) {
                      var numericVal_97 = numericVal_93 + numericVal_96 * 5;
                      var varData_874 = varData_870[numericVal_97];
                      var varData_886 = itemList_5[numericVal_97];
                      var varData_887 = itemList_5[(numericVal_93 + 1) % 5 + numericVal_96 * 5];
                      var varData_888 = itemList_5[(numericVal_93 + 2) % 5 + numericVal_96 * 5];
                      varData_874.high = varData_886.high ^ ~varData_887.high & varData_888.high;
                      varData_874.low = varData_886.low ^ ~varData_887.low & varData_888.low;
                    }
                  }
                  var varData_874 = varData_870[0];
                  var varData_889 = itemList_4[numericVal_92];
                  varData_874.high ^= varData_889.high;
                  varData_874.low ^= varData_889.low;
                  ;
                }
              },
              _doFinalize: function() {
                var varData_890 = this._data;
                var varData_891 = varData_890.words;
                var varData_892 = this._nDataBytes * 8;
                var varData_893 = varData_890.sigBytes * 8;
                var varData_894 = this.blockSize * 32;
                varData_891[varData_893 >>> 5] |= 1 << 24 - varData_893 % 32;
                varData_891[(param_1_2.ceil((varData_893 + 1) / varData_894) * varData_894 >>> 5) - 1] |= 128;
                varData_890.sigBytes = varData_891.length * 4;
                this._process();
                var varData_895 = this._state;
                var varData_896 = this.cfg.outputLength / 8;
                var varData_897 = varData_896 / 8;
                var itemList_6 = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_897; numericVal_91++) {
                  var varData_898 = varData_895[numericVal_91];
                  var varData_899 = varData_898.high;
                  var varData_900 = varData_898.low;
                  varData_899 = (varData_899 << 8 | varData_899 >>> 24) & 16711935 | (varData_899 << 24 | varData_899 >>> 8) & -16711936;
                  varData_900 = (varData_900 << 8 | varData_900 >>> 24) & 16711935 | (varData_900 << 24 | varData_900 >>> 8) & -16711936;
                  itemList_6.push(varData_900);
                  itemList_6.push(varData_899);
                }
                return new varData_860.init(itemList_6, varData_896);
              },
              clone: function() {
                var varData_901 = varData_861.clone.call(this);
                var varData_902 = varData_901._state = this._state.slice(0);
                for (var numericVal_91 = 0; numericVal_91 < 25; numericVal_91++) {
                  varData_902[numericVal_91] = varData_902[numericVal_91].clone();
                }
                return varData_901;
              }
            });
            varData_858.SHA3 = varData_861._createHelper(varData_868);
            varData_858.HmacSHA3 = varData_861._createHmacHelper(varData_868);
          })(Math);
          return param_1_1.SHA3;
        });
      }
    });
    var varData_903 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/ripemd160.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_904 = param_1_1;
            var varData_905 = varData_904.lib;
            var varData_906 = varData_905.WordArray;
            var varData_907 = varData_905.Hasher;
            var varData_908 = varData_904.algo;
            var varData_909 = varData_906.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
            var varData_910 = varData_906.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
            var varData_911 = varData_906.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
            var varData_912 = varData_906.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
            var varData_913 = varData_906.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
            var varData_914 = varData_906.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
            var varData_915 = varData_908.RIPEMD160 = varData_907.extend({
              _doReset: function() {
                this._hash = varData_906.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
              },
              _doProcessBlock: function(param_1_3, param_2_1) {
                for (var numericVal_91 = 0; numericVal_91 < 16; numericVal_91++) {
                  var varData_916 = param_2_1 + numericVal_91;
                  var varData_917 = param_1_3[varData_916];
                  param_1_3[varData_916] = (varData_917 << 8 | varData_917 >>> 24) & 16711935 | (varData_917 << 24 | varData_917 >>> 8) & -16711936;
                }
                var varData_918 = this._hash.words;
                var varData_919 = varData_913.words;
                var varData_920 = varData_914.words;
                var varData_921 = varData_909.words;
                var varData_922 = varData_910.words;
                var varData_923 = varData_911.words;
                var varData_924 = varData_912.words;
                var varData_925;
                var varData_926;
                var varData_927;
                var varData_928;
                var varData_929;
                var varData_930;
                var varData_931;
                var varData_932;
                var varData_933;
                var varData_934;
                varData_930 = varData_925 = varData_918[0];
                varData_931 = varData_926 = varData_918[1];
                varData_932 = varData_927 = varData_918[2];
                varData_933 = varData_928 = varData_918[3];
                varData_934 = varData_929 = varData_918[4];
                var varData_935;
                for (var numericVal_91 = 0; numericVal_91 < 80; numericVal_91 += 1) {
                  varData_935 = varData_925 + param_1_3[param_2_1 + varData_921[numericVal_91]] | 0;
                  if (numericVal_91 < 16) {
                    varData_935 += handleAction_72(varData_926, varData_927, varData_928) + varData_919[0];
                  } else if (numericVal_91 < 32) {
                    varData_935 += handleAction_73(varData_926, varData_927, varData_928) + varData_919[1];
                  } else if (numericVal_91 < 48) {
                    varData_935 += handleAction_74(varData_926, varData_927, varData_928) + varData_919[2];
                  } else if (numericVal_91 < 64) {
                    varData_935 += handleAction_75(varData_926, varData_927, varData_928) + varData_919[3];
                  } else {
                    varData_935 += handleAction_76(varData_926, varData_927, varData_928) + varData_919[4];
                  }
                  varData_935 = varData_935 | 0;
                  varData_935 = handleAction_77(varData_935, varData_923[numericVal_91]);
                  varData_935 = varData_935 + varData_929 | 0;
                  varData_925 = varData_929;
                  varData_929 = varData_928;
                  varData_928 = handleAction_77(varData_927, 10);
                  varData_927 = varData_926;
                  varData_926 = varData_935;
                  varData_935 = varData_930 + param_1_3[param_2_1 + varData_922[numericVal_91]] | 0;
                  if (numericVal_91 < 16) {
                    varData_935 += handleAction_76(varData_931, varData_932, varData_933) + varData_920[0];
                  } else if (numericVal_91 < 32) {
                    varData_935 += handleAction_75(varData_931, varData_932, varData_933) + varData_920[1];
                  } else if (numericVal_91 < 48) {
                    varData_935 += handleAction_74(varData_931, varData_932, varData_933) + varData_920[2];
                  } else if (numericVal_91 < 64) {
                    varData_935 += handleAction_73(varData_931, varData_932, varData_933) + varData_920[3];
                  } else {
                    varData_935 += handleAction_72(varData_931, varData_932, varData_933) + varData_920[4];
                  }
                  varData_935 = varData_935 | 0;
                  varData_935 = handleAction_77(varData_935, varData_924[numericVal_91]);
                  varData_935 = varData_935 + varData_934 | 0;
                  varData_930 = varData_934;
                  varData_934 = varData_933;
                  varData_933 = handleAction_77(varData_932, 10);
                  varData_932 = varData_931;
                  varData_931 = varData_935;
                }
                varData_935 = varData_918[1] + varData_927 + varData_933 | 0;
                varData_918[1] = varData_918[2] + varData_928 + varData_934 | 0;
                varData_918[2] = varData_918[3] + varData_929 + varData_930 | 0;
                varData_918[3] = varData_918[4] + varData_925 + varData_931 | 0;
                varData_918[4] = varData_918[0] + varData_926 + varData_932 | 0;
                varData_918[0] = varData_935;
              },
              _doFinalize: function() {
                var varData_936 = this._data;
                var varData_937 = varData_936.words;
                var varData_938 = this._nDataBytes * 8;
                var varData_939 = varData_936.sigBytes * 8;
                varData_937[varData_939 >>> 5] |= 128 << 24 - varData_939 % 32;
                varData_937[(varData_939 + 64 >>> 9 << 4) + 14] = (varData_938 << 8 | varData_938 >>> 24) & 16711935 | (varData_938 << 24 | varData_938 >>> 8) & -16711936;
                varData_936.sigBytes = (varData_937.length + 1) * 4;
                this._process();
                var varData_940 = this._hash;
                var varData_941 = varData_940.words;
                for (var numericVal_91 = 0; numericVal_91 < 5; numericVal_91++) {
                  var varData_942 = varData_941[numericVal_91];
                  varData_941[numericVal_91] = (varData_942 << 8 | varData_942 >>> 24) & 16711935 | (varData_942 << 24 | varData_942 >>> 8) & -16711936;
                }
                return varData_940;
              },
              clone: function() {
                var varData_943 = varData_907.clone.call(this);
                varData_943._hash = this._hash.clone();
                return varData_943;
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
            varData_904.RIPEMD160 = varData_907._createHelper(varData_915);
            varData_904.HmacRIPEMD160 = varData_907._createHmacHelper(varData_915);
          })(Math);
          return param_1_1.RIPEMD160;
        });
      }
    });
    var varData_944 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/hmac.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550());
          } else if (typeof define === "function" && define.amd) {
            define(["./core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_945 = param_1_1;
            var varData_946 = varData_945.lib;
            var varData_947 = varData_946.Base;
            var varData_948 = varData_945.enc;
            var varData_949 = varData_948.Utf8;
            var varData_950 = varData_945.algo;
            var varData_951 = varData_950.HMAC = varData_947.extend({
              init: function(param_1_2, param_2_1) {
                param_1_2 = this._hasher = new param_1_2.init();
                if (typeof param_2_1 == "string") {
                  param_2_1 = varData_949.parse(param_2_1);
                }
                var varData_952 = param_1_2.blockSize;
                var varData_953 = varData_952 * 4;
                if (param_2_1.sigBytes > varData_953) {
                  param_2_1 = param_1_2.finalize(param_2_1);
                }
                param_2_1.clamp();
                var varData_954 = this._oKey = param_2_1.clone();
                var varData_955 = this._iKey = param_2_1.clone();
                var varData_956 = varData_954.words;
                var varData_957 = varData_955.words;
                for (var numericVal_91 = 0; numericVal_91 < varData_952; numericVal_91++) {
                  varData_956[numericVal_91] ^= 1549556828;
                  varData_957[numericVal_91] ^= 909522486;
                }
                varData_954.sigBytes = varData_955.sigBytes = varData_953;
                this.reset();
              },
              reset: function() {
                var varData_958 = this._hasher;
                varData_958.reset();
                varData_958.update(this._iKey);
              },
              update: function(param_1_2) {
                this._hasher.update(param_1_2);
                return this;
              },
              finalize: function(param_1_2) {
                var varData_959 = this._hasher;
                var varData_960 = varData_959.finalize(param_1_2);
                varData_959.reset();
                var varData_961 = varData_959.finalize(this._oKey.clone().concat(varData_960));
                return varData_961;
              }
            });
          })();
        });
      }
    });
    var varData_962 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pbkdf2.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_698(), varData_944());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_963 = param_1_1;
            var varData_964 = varData_963.lib;
            var varData_965 = varData_964.Base;
            var varData_966 = varData_964.WordArray;
            var varData_967 = varData_963.algo;
            var varData_968 = varData_967.SHA1;
            var varData_969 = varData_967.HMAC;
            var varData_970 = {
              keySize: 4,
              hasher: varData_968,
              iterations: 1
            };
            var varData_971 = varData_967.PBKDF2 = varData_965.extend({
              cfg: varData_965.extend(varData_970),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function(param_1_2, param_2_1) {
                var varData_972 = this.cfg;
                var varData_973 = varData_969.create(varData_972.hasher, param_1_2);
                var varData_974 = varData_966.create();
                var varData_975 = varData_966.create([1]);
                var varData_976 = varData_974.words;
                var varData_977 = varData_975.words;
                var varData_978 = varData_972.keySize;
                var varData_979 = varData_972.iterations;
                while (varData_976.length < varData_978) {
                  var varData_980 = varData_973.update(param_2_1).finalize(varData_975);
                  varData_973.reset();
                  var varData_981 = varData_980.words;
                  var varData_982 = varData_981.length;
                  var varData_983 = varData_980;
                  for (var numericVal_91 = 1; numericVal_91 < varData_979; numericVal_91++) {
                    varData_983 = varData_973.finalize(varData_983);
                    varData_973.reset();
                    var varData_984 = varData_983.words;
                    for (var numericVal_92 = 0; numericVal_92 < varData_982; numericVal_92++) {
                      varData_981[numericVal_92] ^= varData_984[numericVal_92];
                    }
                  }
                  varData_974.concat(varData_980);
                  varData_977[0]++;
                }
                varData_974.sigBytes = varData_978 * 4;
                return varData_974;
              }
            });
            varData_963.PBKDF2 = function(param_1_2, param_2_1, param_3) {
              return varData_971.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.PBKDF2;
        });
      }
    });
    var varData_985 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/evpkdf.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_698(), varData_944());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./sha1", "./hmac"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_986 = param_1_1;
            var varData_987 = varData_986.lib;
            var varData_988 = varData_987.Base;
            var varData_989 = varData_987.WordArray;
            var varData_990 = varData_986.algo;
            var varData_991 = varData_990.MD5;
            var varData_992 = {
              keySize: 4,
              hasher: varData_991,
              iterations: 1
            };
            var varData_993 = varData_990.EvpKDF = varData_988.extend({
              cfg: varData_988.extend(varData_992),
              init: function(param_1_2) {
                this.cfg = this.cfg.extend(param_1_2);
              },
              compute: function(param_1_2, param_2_1) {
                var varData_994 = this.cfg;
                var varData_995 = varData_994.hasher.create();
                var varData_996 = varData_989.create();
                var varData_997 = varData_996.words;
                var varData_998 = varData_994.keySize;
                var varData_999 = varData_994.iterations;
                while (varData_997.length < varData_998) {
                  if (varData_1000) {
                    varData_995.update(varData_1000);
                  }
                  var varData_1000 = varData_995.update(param_1_2).finalize(param_2_1);
                  varData_995.reset();
                  for (var numericVal_91 = 1; numericVal_91 < varData_999; numericVal_91++) {
                    varData_1000 = varData_995.finalize(varData_1000);
                    varData_995.reset();
                  }
                  varData_996.concat(varData_1000);
                }
                varData_996.sigBytes = varData_998 * 4;
                return varData_996;
              }
            });
            varData_986.EvpKDF = function(param_1_2, param_2_1, param_3) {
              return varData_993.create(param_3).compute(param_1_2, param_2_1);
            };
          })();
          return param_1_1.EvpKDF;
        });
      }
    });
    var varData_1001 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/cipher-core.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_985());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./evpkdf"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          if (!param_1_1.lib.Cipher) {
            (function(param_1_2) {
              var varData_1002 = param_1_1;
              var varData_1003 = varData_1002.lib;
              var varData_1004 = varData_1003.Base;
              var varData_1005 = varData_1003.WordArray;
              var varData_1006 = varData_1003.BufferedBlockAlgorithm;
              var varData_1007 = varData_1002.enc;
              var varData_1008 = varData_1007.Utf8;
              var varData_1009 = varData_1007.Base64;
              var varData_1010 = varData_1002.algo;
              var varData_1011 = varData_1010.EvpKDF;
              var varData_1012 = varData_1003.Cipher = varData_1006.extend({
                cfg: varData_1004.extend(),
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
                  varData_1006.reset.call(this);
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
                  var varData_1013 = this._doFinalize();
                  return varData_1013;
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: /* @__PURE__ */ (function() {
                  function handleAction_78(param_1_3) {
                    if (typeof param_1_3 == "string") {
                      return varData_1066;
                    } else {
                      return varData_1053;
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
              var varData_1014 = varData_1003.StreamCipher = varData_1012.extend({
                _doFinalize: function() {
                  var varData_1015 = this._process(true);
                  return varData_1015;
                },
                blockSize: 1
              });
              var varData_1016 = varData_1002.mode = {};
              var varData_1017 = varData_1003.BlockCipherMode = varData_1004.extend({
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
              var varData_1018 = varData_1016.CBC = (function() {
                var varData_1019 = varData_1017.extend();
                varData_1019.Encryptor = varData_1019.extend({
                  processBlock: function(param_1_3, param_2_1) {
                    var varData_1020 = this._cipher;
                    var varData_1021 = varData_1020.blockSize;
                    handleAction_79.call(this, param_1_3, param_2_1, varData_1021);
                    varData_1020.encryptBlock(param_1_3, param_2_1);
                    this._prevBlock = param_1_3.slice(param_2_1, param_2_1 + varData_1021);
                  }
                });
                varData_1019.Decryptor = varData_1019.extend({
                  processBlock: function(param_1_3, param_2_1) {
                    var varData_1022 = this._cipher;
                    var varData_1023 = varData_1022.blockSize;
                    var varData_1024 = param_1_3.slice(param_2_1, param_2_1 + varData_1023);
                    varData_1022.decryptBlock(param_1_3, param_2_1);
                    handleAction_79.call(this, param_1_3, param_2_1, varData_1023);
                    this._prevBlock = varData_1024;
                  }
                });
                function handleAction_79(param_1_3, param_2_1, param_3) {
                  var varData_1025 = this._iv;
                  if (varData_1025) {
                    var varData_1026 = varData_1025;
                    this._iv = param_1_2;
                  } else {
                    var varData_1026 = this._prevBlock;
                  }
                  for (var numericVal_91 = 0; numericVal_91 < param_3; numericVal_91++) {
                    param_1_3[param_2_1 + numericVal_91] ^= varData_1026[numericVal_91];
                  }
                }
                return varData_1019;
              })();
              var varData_1027 = varData_1002.pad = {};
              var varData_1028 = varData_1027.Pkcs7 = {
                pad: function(param_1_3, param_2_1) {
                  var varData_1029 = param_2_1 * 4;
                  var varData_1030 = varData_1029 - param_1_3.sigBytes % varData_1029;
                  var varData_1031 = varData_1030 << 24 | varData_1030 << 16 | varData_1030 << 8 | varData_1030;
                  var itemList_22 = [];
                  for (var numericVal_91 = 0; numericVal_91 < varData_1030; numericVal_91 += 4) {
                    itemList_22.push(varData_1031);
                  }
                  var varData_1032 = varData_1005.create(itemList_22, varData_1030);
                  param_1_3.concat(varData_1032);
                },
                unpad: function(param_1_3) {
                  var varData_1033 = param_1_3.words[param_1_3.sigBytes - 1 >>> 2] & 255;
                  param_1_3.sigBytes -= varData_1033;
                }
              };
              var varData_1034 = {
                mode: varData_1018,
                padding: varData_1028
              };
              var varData_1035 = varData_1003.BlockCipher = varData_1012.extend({
                cfg: varData_1012.cfg.extend(varData_1034),
                reset: function() {
                  varData_1012.reset.call(this);
                  var varData_1036 = this.cfg;
                  var varData_1037 = varData_1036.iv;
                  var varData_1038 = varData_1036.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var varData_1039 = varData_1038.createEncryptor;
                  } else {
                    var varData_1039 = varData_1038.createDecryptor;
                    this._minBufferSize = 1;
                  }
                  if (this._mode && this._mode.__creator == varData_1039) {
                    this._mode.init(this, varData_1037 && varData_1037.words);
                  } else {
                    this._mode = varData_1039.call(varData_1038, this, varData_1037 && varData_1037.words);
                    this._mode.__creator = varData_1039;
                  }
                },
                _doProcessBlock: function(param_1_3, param_2_1) {
                  this._mode.processBlock(param_1_3, param_2_1);
                },
                _doFinalize: function() {
                  var varData_1040 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    varData_1040.pad(this._data, this.blockSize);
                    var varData_1041 = this._process(true);
                  } else {
                    var varData_1041 = this._process(true);
                    varData_1040.unpad(varData_1041);
                  }
                  return varData_1041;
                },
                blockSize: 4
              });
              var varData_1042 = varData_1003.CipherParams = varData_1004.extend({
                init: function(param_1_3) {
                  this.mixIn(param_1_3);
                },
                toString: function(param_1_3) {
                  return (param_1_3 || this.formatter).stringify(this);
                }
              });
              var varData_1043 = varData_1002.format = {};
              var varData_1044 = varData_1043.OpenSSL = {
                stringify: function(param_1_3) {
                  var varData_1045 = param_1_3.ciphertext;
                  var varData_1046 = param_1_3.salt;
                  if (varData_1046) {
                    var varData_1047 = varData_1005.create([1398893684, 1701076831]).concat(varData_1046).concat(varData_1045);
                  } else {
                    var varData_1047 = varData_1045;
                  }
                  return varData_1047.toString(varData_1009);
                },
                parse: function(param_1_3) {
                  var varData_1048 = varData_1009.parse(param_1_3);
                  var varData_1049 = varData_1048.words;
                  if (varData_1049[0] == 1398893684 && varData_1049[1] == 1701076831) {
                    var varData_1050 = varData_1005.create(varData_1049.slice(2, 4));
                    varData_1049.splice(0, 4);
                    varData_1048.sigBytes -= 16;
                  }
                  var varData_1051 = {
                    ciphertext: varData_1048,
                    salt: varData_1050
                  };
                  return varData_1042.create(varData_1051);
                }
              };
              var varData_1052 = {
                format: varData_1044
              };
              var varData_1053 = varData_1003.SerializableCipher = varData_1004.extend({
                cfg: varData_1004.extend(varData_1052),
                encrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1054 = param_1_3.createEncryptor(param_3, param_4);
                  var varData_1055 = varData_1054.finalize(param_2_1);
                  var varData_1056 = varData_1054.cfg;
                  var varData_1057 = {
                    ciphertext: varData_1055,
                    key: param_3,
                    iv: varData_1056.iv,
                    algorithm: param_1_3,
                    mode: varData_1056.mode,
                    padding: varData_1056.padding,
                    blockSize: param_1_3.blockSize,
                    formatter: param_4.format
                  };
                  return varData_1042.create(varData_1057);
                },
                decrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1058 = param_1_3.createDecryptor(param_3, param_4).finalize(param_2_1.ciphertext);
                  return varData_1058;
                },
                _parse: function(param_1_3, param_2_1) {
                  if (typeof param_1_3 == "string") {
                    return param_2_1.parse(param_1_3, this);
                  } else {
                    return param_1_3;
                  }
                }
              });
              var varData_1059 = varData_1002.kdf = {};
              var varData_1060 = varData_1059.OpenSSL = {
                execute: function(param_1_3, param_2_1, param_3, param_4) {
                  if (!param_4) {
                    param_4 = varData_1005.random(8);
                  }
                  var varData_1061 = {
                    keySize: param_2_1 + param_3
                  };
                  var varData_1062 = varData_1011.create(varData_1061).compute(param_1_3, param_4);
                  var varData_1063 = varData_1005.create(varData_1062.words.slice(param_2_1), param_3 * 4);
                  varData_1062.sigBytes = param_2_1 * 4;
                  var varData_1064 = {
                    key: varData_1062,
                    iv: varData_1063,
                    salt: param_4
                  };
                  return varData_1042.create(varData_1064);
                }
              };
              var varData_1065 = {
                kdf: varData_1060
              };
              var varData_1066 = varData_1003.PasswordBasedCipher = varData_1053.extend({
                cfg: varData_1053.cfg.extend(varData_1065),
                encrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  var varData_1067 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize);
                  param_4.iv = varData_1067.iv;
                  var varData_1068 = varData_1053.encrypt.call(this, param_1_3, param_2_1, varData_1067.key, param_4);
                  varData_1068.mixIn(varData_1067);
                  return varData_1068;
                },
                decrypt: function(param_1_3, param_2_1, param_3, param_4) {
                  param_4 = this.cfg.extend(param_4);
                  param_2_1 = this._parse(param_2_1, param_4.format);
                  var varData_1069 = param_4.kdf.execute(param_3, param_1_3.keySize, param_1_3.ivSize, param_2_1.salt);
                  param_4.iv = varData_1069.iv;
                  var varData_1070 = varData_1053.decrypt.call(this, param_1_3, param_2_1, varData_1069.key, param_4);
                  return varData_1070;
                }
              });
            })();
          }
        });
      }
    });
    var varData_1071 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-cfb.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CFB = (function() {
            var varData_1072 = param_1_1.lib.BlockCipherMode.extend();
            varData_1072.Encryptor = varData_1072.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1073 = this._cipher;
                var varData_1074 = varData_1073.blockSize;
                handleAction_80.call(this, param_1_2, param_2_1, varData_1074, varData_1073);
                this._prevBlock = param_1_2.slice(param_2_1, param_2_1 + varData_1074);
              }
            });
            varData_1072.Decryptor = varData_1072.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1075 = this._cipher;
                var varData_1076 = varData_1075.blockSize;
                var varData_1077 = param_1_2.slice(param_2_1, param_2_1 + varData_1076);
                handleAction_80.call(this, param_1_2, param_2_1, varData_1076, varData_1075);
                this._prevBlock = varData_1077;
              }
            });
            function handleAction_80(param_1_2, param_2_1, param_3, param_4) {
              var varData_1078 = this._iv;
              if (varData_1078) {
                var varData_1079 = varData_1078.slice(0);
                this._iv = void 0;
              } else {
                var varData_1079 = this._prevBlock;
              }
              param_4.encryptBlock(varData_1079, 0);
              for (var numericVal_91 = 0; numericVal_91 < param_3; numericVal_91++) {
                param_1_2[param_2_1 + numericVal_91] ^= varData_1079[numericVal_91];
              }
            }
            return varData_1072;
          })();
          return param_1_1.mode.CFB;
        });
      }
    });
    var varData_1080 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CTR = (function() {
            var varData_1081 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1082 = varData_1081.Encryptor = varData_1081.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1083 = this._cipher;
                var varData_1084 = varData_1083.blockSize;
                var varData_1085 = this._iv;
                var varData_1086 = this._counter;
                if (varData_1085) {
                  varData_1086 = this._counter = varData_1085.slice(0);
                  this._iv = void 0;
                }
                var varData_1087 = varData_1086.slice(0);
                varData_1083.encryptBlock(varData_1087, 0);
                varData_1086[varData_1084 - 1] = varData_1086[varData_1084 - 1] + 1 | 0;
                for (var numericVal_91 = 0; numericVal_91 < varData_1084; numericVal_91++) {
                  param_1_2[param_2_1 + numericVal_91] ^= varData_1087[numericVal_91];
                }
              }
            });
            varData_1081.Decryptor = varData_1082;
            return varData_1081;
          })();
          return param_1_1.mode.CTR;
        });
      }
    });
    var varData_1088 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ctr-gladman.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.CTRGladman = (function() {
            var varData_1089 = param_1_1.lib.BlockCipherMode.extend();
            function handleAction_81(param_1_2) {
              if ((param_1_2 >> 24 & 255) === 255) {
                var varData_1090 = param_1_2 >> 16 & 255;
                var varData_1091 = param_1_2 >> 8 & 255;
                var varData_1092 = param_1_2 & 255;
                if (varData_1090 === 255) {
                  varData_1090 = 0;
                  if (varData_1091 === 255) {
                    varData_1091 = 0;
                    if (varData_1092 === 255) {
                      varData_1092 = 0;
                    } else {
                      ++varData_1092;
                    }
                  } else {
                    ++varData_1091;
                  }
                } else {
                  ++varData_1090;
                }
                param_1_2 = 0;
                param_1_2 += varData_1090 << 16;
                param_1_2 += varData_1091 << 8;
                param_1_2 += varData_1092;
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
            var varData_1093 = varData_1089.Encryptor = varData_1089.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1094 = this._cipher;
                var varData_1095 = varData_1094.blockSize;
                var varData_1096 = this._iv;
                var varData_1097 = this._counter;
                if (varData_1096) {
                  varData_1097 = this._counter = varData_1096.slice(0);
                  this._iv = void 0;
                }
                handleAction_82(varData_1097);
                var varData_1098 = varData_1097.slice(0);
                varData_1094.encryptBlock(varData_1098, 0);
                for (var numericVal_91 = 0; numericVal_91 < varData_1095; numericVal_91++) {
                  param_1_2[param_2_1 + numericVal_91] ^= varData_1098[numericVal_91];
                }
              }
            });
            varData_1089.Decryptor = varData_1093;
            return varData_1089;
          })();
          return param_1_1.mode.CTRGladman;
        });
      }
    });
    var varData_1099 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ofb.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.OFB = (function() {
            var varData_1100 = param_1_1.lib.BlockCipherMode.extend();
            var varData_1101 = varData_1100.Encryptor = varData_1100.extend({
              processBlock: function(param_1_2, param_2_1) {
                var varData_1102 = this._cipher;
                var varData_1103 = varData_1102.blockSize;
                var varData_1104 = this._iv;
                var varData_1105 = this._keystream;
                if (varData_1104) {
                  varData_1105 = this._keystream = varData_1104.slice(0);
                  this._iv = void 0;
                }
                varData_1102.encryptBlock(varData_1105, 0);
                for (var numericVal_91 = 0; numericVal_91 < varData_1103; numericVal_91++) {
                  param_1_2[param_2_1 + numericVal_91] ^= varData_1105[numericVal_91];
                }
              }
            });
            varData_1100.Decryptor = varData_1101;
            return varData_1100;
          })();
          return param_1_1.mode.OFB;
        });
      }
    });
    var varData_1106 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/mode-ecb.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.mode.ECB = (function() {
            var varData_1107 = param_1_1.lib.BlockCipherMode.extend();
            varData_1107.Encryptor = varData_1107.extend({
              processBlock: function(param_1_2, param_2_1) {
                this._cipher.encryptBlock(param_1_2, param_2_1);
              }
            });
            varData_1107.Decryptor = varData_1107.extend({
              processBlock: function(param_1_2, param_2_1) {
                this._cipher.decryptBlock(param_1_2, param_2_1);
              }
            });
            return varData_1107;
          })();
          return param_1_1.mode.ECB;
        });
      }
    });
    var varData_1108 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-ansix923.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.AnsiX923 = {
            pad: function(param_1_2, param_2_1) {
              var varData_1109 = param_1_2.sigBytes;
              var varData_1110 = param_2_1 * 4;
              var varData_1111 = varData_1110 - varData_1109 % varData_1110;
              var varData_1112 = varData_1109 + varData_1111 - 1;
              param_1_2.clamp();
              param_1_2.words[varData_1112 >>> 2] |= varData_1111 << 24 - varData_1112 % 4 * 8;
              param_1_2.sigBytes += varData_1111;
            },
            unpad: function(param_1_2) {
              var varData_1113 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1113;
            }
          };
          return param_1_1.pad.Ansix923;
        });
      }
    });
    var varData_1114 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso10126.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.Iso10126 = {
            pad: function(param_1_2, param_2_1) {
              var varData_1115 = param_2_1 * 4;
              var varData_1116 = varData_1115 - param_1_2.sigBytes % varData_1115;
              param_1_2.concat(param_1_1.lib.WordArray.random(varData_1116 - 1)).concat(param_1_1.lib.WordArray.create([varData_1116 << 24], 1));
            },
            unpad: function(param_1_2) {
              var varData_1117 = param_1_2.words[param_1_2.sigBytes - 1 >>> 2] & 255;
              param_1_2.sigBytes -= varData_1117;
            }
          };
          return param_1_1.pad.Iso10126;
        });
      }
    });
    var varData_1118 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-iso97971.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
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
    var varData_1119 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-zeropadding.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          param_1_1.pad.ZeroPadding = {
            pad: function(param_1_2, param_2_1) {
              var varData_1120 = param_2_1 * 4;
              param_1_2.clamp();
              param_1_2.sigBytes += varData_1120 - (param_1_2.sigBytes % varData_1120 || varData_1120);
            },
            unpad: function(param_1_2) {
              var varData_1121 = param_1_2.words;
              var varData_1122 = param_1_2.sigBytes - 1;
              while (!(varData_1121[varData_1122 >>> 2] >>> 24 - varData_1122 % 4 * 8 & 255)) {
                varData_1122--;
              }
              param_1_2.sigBytes = varData_1122 + 1;
            }
          };
          return param_1_1.pad.ZeroPadding;
        });
      }
    });
    var varData_1123 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/pad-nopadding.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          var varData_1124 = {
            pad: function() {
            },
            unpad: function() {
            }
          };
          param_1_1.pad.NoPadding = varData_1124;
          return param_1_1.pad.NoPadding;
        });
      }
    });
    var varData_1125 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/format-hex.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function(param_1_2) {
            var varData_1126 = param_1_1;
            var varData_1127 = varData_1126.lib;
            var varData_1128 = varData_1127.CipherParams;
            var varData_1129 = varData_1126.enc;
            var varData_1130 = varData_1129.Hex;
            var varData_1131 = varData_1126.format;
            var varData_1132 = varData_1131.Hex = {
              stringify: function(param_1_3) {
                return param_1_3.ciphertext.toString(varData_1130);
              },
              parse: function(param_1_3) {
                var varData_1133 = varData_1130.parse(param_1_3);
                var varData_1134 = {
                  ciphertext: varData_1133
                };
                return varData_1128.create(varData_1134);
              }
            };
          })();
          return param_1_1.format.Hex;
        });
      }
    });
    var varData_1135 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/aes.js"(param_1, param_2) {
        "use strict";
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_633(), varData_654(), varData_985(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1136 = param_1_1;
            var varData_1137 = varData_1136.lib;
            var varData_1138 = varData_1137.BlockCipher;
            var varData_1139 = varData_1136.algo;
            var itemList_22 = [];
            var itemList_3 = [];
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
              for (var numericVal_91 = 0; numericVal_91 < 256; numericVal_91++) {
                if (numericVal_91 < 128) {
                  itemList_122[numericVal_91] = numericVal_91 << 1;
                } else {
                  itemList_122[numericVal_91] = numericVal_91 << 1 ^ 283;
                }
              }
              var numericVal_92 = 0;
              var numericVal_93 = 0;
              for (var numericVal_91 = 0; numericVal_91 < 256; numericVal_91++) {
                var varData_1140 = numericVal_93 ^ numericVal_93 << 1 ^ numericVal_93 << 2 ^ numericVal_93 << 3 ^ numericVal_93 << 4;
                varData_1140 = varData_1140 >>> 8 ^ varData_1140 & 255 ^ 99;
                itemList_22[numericVal_92] = varData_1140;
                itemList_3[varData_1140] = numericVal_92;
                var varData_1141 = itemList_122[numericVal_92];
                var varData_1142 = itemList_122[varData_1141];
                var varData_1143 = itemList_122[varData_1142];
                var varData_1144 = itemList_122[varData_1140] * 257 ^ varData_1140 * 16843008;
                itemList_4[numericVal_92] = varData_1144 << 24 | varData_1144 >>> 8;
                itemList_5[numericVal_92] = varData_1144 << 16 | varData_1144 >>> 16;
                itemList_6[numericVal_92] = varData_1144 << 8 | varData_1144 >>> 24;
                itemList_7[numericVal_92] = varData_1144;
                var varData_1144 = varData_1143 * 16843009 ^ varData_1142 * 65537 ^ varData_1141 * 257 ^ numericVal_92 * 16843008;
                itemList_8[varData_1140] = varData_1144 << 24 | varData_1144 >>> 8;
                itemList_9[varData_1140] = varData_1144 << 16 | varData_1144 >>> 16;
                itemList_10[varData_1140] = varData_1144 << 8 | varData_1144 >>> 24;
                itemList_11[varData_1140] = varData_1144;
                if (!numericVal_92) {
                  numericVal_92 = numericVal_93 = 1;
                } else {
                  numericVal_92 = varData_1141 ^ itemList_122[itemList_122[itemList_122[varData_1143 ^ varData_1141]]];
                  numericVal_93 ^= itemList_122[itemList_122[numericVal_93]];
                }
              }
            })();
            var itemList_12 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            var varData_1145 = varData_1139.AES = varData_1138.extend({
              _doReset: function() {
                if (this._nRounds && this._keyPriorReset === this._key) {
                  return;
                }
                var varData_1146 = this._keyPriorReset = this._key;
                var varData_1147 = varData_1146.words;
                var varData_1148 = varData_1146.sigBytes / 4;
                var varData_1149 = this._nRounds = varData_1148 + 6;
                var varData_1150 = (varData_1149 + 1) * 4;
                var varData_1151 = this._keySchedule = [];
                for (var numericVal_91 = 0; numericVal_91 < varData_1150; numericVal_91++) {
                  if (numericVal_91 < varData_1148) {
                    varData_1151[numericVal_91] = varData_1147[numericVal_91];
                  } else {
                    var varData_1152 = varData_1151[numericVal_91 - 1];
                    if (!(numericVal_91 % varData_1148)) {
                      varData_1152 = varData_1152 << 8 | varData_1152 >>> 24;
                      varData_1152 = itemList_22[varData_1152 >>> 24] << 24 | itemList_22[varData_1152 >>> 16 & 255] << 16 | itemList_22[varData_1152 >>> 8 & 255] << 8 | itemList_22[varData_1152 & 255];
                      varData_1152 ^= itemList_12[numericVal_91 / varData_1148 | 0] << 24;
                    } else if (varData_1148 > 6 && numericVal_91 % varData_1148 == 4) {
                      varData_1152 = itemList_22[varData_1152 >>> 24] << 24 | itemList_22[varData_1152 >>> 16 & 255] << 16 | itemList_22[varData_1152 >>> 8 & 255] << 8 | itemList_22[varData_1152 & 255];
                    }
                    varData_1151[numericVal_91] = varData_1151[numericVal_91 - varData_1148] ^ varData_1152;
                  }
                }
                var varData_1153 = this._invKeySchedule = [];
                for (var numericVal_92 = 0; numericVal_92 < varData_1150; numericVal_92++) {
                  var numericVal_91 = varData_1150 - numericVal_92;
                  if (numericVal_92 % 4) {
                    var varData_1152 = varData_1151[numericVal_91];
                  } else {
                    var varData_1152 = varData_1151[numericVal_91 - 4];
                  }
                  if (numericVal_92 < 4 || numericVal_91 <= 4) {
                    varData_1153[numericVal_92] = varData_1152;
                  } else {
                    varData_1153[numericVal_92] = itemList_8[itemList_22[varData_1152 >>> 24]] ^ itemList_9[itemList_22[varData_1152 >>> 16 & 255]] ^ itemList_10[itemList_22[varData_1152 >>> 8 & 255]] ^ itemList_11[itemList_22[varData_1152 & 255]];
                  }
                }
              },
              encryptBlock: function(param_1_2, param_2_1) {
                this._doCryptBlock(param_1_2, param_2_1, this._keySchedule, itemList_4, itemList_5, itemList_6, itemList_7, itemList_22);
              },
              decryptBlock: function(param_1_2, param_2_1) {
                var varData_1154 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1154;
                this._doCryptBlock(param_1_2, param_2_1, this._invKeySchedule, itemList_8, itemList_9, itemList_10, itemList_11, itemList_3);
                var varData_1154 = param_1_2[param_2_1 + 1];
                param_1_2[param_2_1 + 1] = param_1_2[param_2_1 + 3];
                param_1_2[param_2_1 + 3] = varData_1154;
              },
              _doCryptBlock: function(param_1_2, param_2_1, param_3, param_4, param_5, param_6, param_7, param_8) {
                var varData_1155 = this._nRounds;
                var varData_1156 = param_1_2[param_2_1] ^ param_3[0];
                var varData_1157 = param_1_2[param_2_1 + 1] ^ param_3[1];
                var varData_1158 = param_1_2[param_2_1 + 2] ^ param_3[2];
                var varData_1159 = param_1_2[param_2_1 + 3] ^ param_3[3];
                var numericVal_91 = 4;
                for (var numericVal_92 = 1; numericVal_92 < varData_1155; numericVal_92++) {
                  var varData_1160 = param_4[varData_1156 >>> 24] ^ param_5[varData_1157 >>> 16 & 255] ^ param_6[varData_1158 >>> 8 & 255] ^ param_7[varData_1159 & 255] ^ param_3[numericVal_91++];
                  var varData_1161 = param_4[varData_1157 >>> 24] ^ param_5[varData_1158 >>> 16 & 255] ^ param_6[varData_1159 >>> 8 & 255] ^ param_7[varData_1156 & 255] ^ param_3[numericVal_91++];
                  var varData_1162 = param_4[varData_1158 >>> 24] ^ param_5[varData_1159 >>> 16 & 255] ^ param_6[varData_1156 >>> 8 & 255] ^ param_7[varData_1157 & 255] ^ param_3[numericVal_91++];
                  var varData_1163 = param_4[varData_1159 >>> 24] ^ param_5[varData_1156 >>> 16 & 255] ^ param_6[varData_1157 >>> 8 & 255] ^ param_7[varData_1158 & 255] ^ param_3[numericVal_91++];
                  varData_1156 = varData_1160;
                  varData_1157 = varData_1161;
                  varData_1158 = varData_1162;
                  varData_1159 = varData_1163;
                }
                var varData_1160 = (param_8[varData_1156 >>> 24] << 24 | param_8[varData_1157 >>> 16 & 255] << 16 | param_8[varData_1158 >>> 8 & 255] << 8 | param_8[varData_1159 & 255]) ^ param_3[numericVal_91++];
                var varData_1161 = (param_8[varData_1157 >>> 24] << 24 | param_8[varData_1158 >>> 16 & 255] << 16 | param_8[varData_1159 >>> 8 & 255] << 8 | param_8[varData_1156 & 255]) ^ param_3[numericVal_91++];
                var varData_1162 = (param_8[varData_1158 >>> 24] << 24 | param_8[varData_1159 >>> 16 & 255] << 16 | param_8[varData_1156 >>> 8 & 255] << 8 | param_8[varData_1157 & 255]) ^ param_3[numericVal_91++];
                var varData_1163 = (param_8[varData_1159 >>> 24] << 24 | param_8[varData_1156 >>> 16 & 255] << 16 | param_8[varData_1157 >>> 8 & 255] << 8 | param_8[varData_1158 & 255]) ^ param_3[numericVal_91++];
                param_1_2[param_2_1] = varData_1160;
                param_1_2[param_2_1 + 1] = varData_1161;
                param_1_2[param_2_1 + 2] = varData_1162;
                param_1_2[param_2_1 + 3] = varData_1163;
              },
              keySize: 8
            });
            varData_1136.AES = varData_1138._createHelper(varData_1145);
          })();
          return param_1_1.AES;
        });
      }
    });
    var varData_1164 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/tripledes.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_633(), varData_654(), varData_985(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1165 = param_1_1;
            var varData_1166 = varData_1165.lib;
            var varData_1167 = varData_1166.WordArray;
            var varData_1168 = varData_1166.BlockCipher;
            var varData_1169 = varData_1165.algo;
            var itemList_22 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
            var itemList_3 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
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
            var varData_1170 = varData_1169.DES = varData_1168.extend({
              _doReset: function() {
                var varData_1171 = this._key;
                var varData_1172 = varData_1171.words;
                var itemList_7 = [];
                for (var numericVal_91 = 0; numericVal_91 < 56; numericVal_91++) {
                  var varData_1173 = itemList_22[numericVal_91] - 1;
                  itemList_7[numericVal_91] = varData_1172[varData_1173 >>> 5] >>> 31 - varData_1173 % 32 & 1;
                }
                var varData_1174 = this._subKeys = [];
                for (var numericVal_92 = 0; numericVal_92 < 16; numericVal_92++) {
                  var varData_1175 = varData_1174[numericVal_92] = [];
                  var varData_1176 = itemList_4[numericVal_92];
                  for (var numericVal_91 = 0; numericVal_91 < 24; numericVal_91++) {
                    varData_1175[numericVal_91 / 6 | 0] |= itemList_7[(itemList_3[numericVal_91] - 1 + varData_1176) % 28] << 31 - numericVal_91 % 6;
                    varData_1175[4 + (numericVal_91 / 6 | 0)] |= itemList_7[28 + (itemList_3[numericVal_91 + 24] - 1 + varData_1176) % 28] << 31 - numericVal_91 % 6;
                  }
                  varData_1175[0] = varData_1175[0] << 1 | varData_1175[0] >>> 31;
                  for (var numericVal_91 = 1; numericVal_91 < 7; numericVal_91++) {
                    varData_1175[numericVal_91] = varData_1175[numericVal_91] >>> (numericVal_91 - 1) * 4 + 3;
                  }
                  varData_1175[7] = varData_1175[7] << 5 | varData_1175[7] >>> 27;
                }
                var varData_1177 = this._invSubKeys = [];
                for (var numericVal_91 = 0; numericVal_91 < 16; numericVal_91++) {
                  varData_1177[numericVal_91] = varData_1174[15 - numericVal_91];
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
                for (var numericVal_91 = 0; numericVal_91 < 16; numericVal_91++) {
                  var varData_1178 = param_3[numericVal_91];
                  var varData_1179 = this._lBlock;
                  var varData_1180 = this._rBlock;
                  var numericVal_92 = 0;
                  for (var numericVal_93 = 0; numericVal_93 < 8; numericVal_93++) {
                    numericVal_92 |= itemList_5[numericVal_93][((varData_1180 ^ varData_1178[numericVal_93]) & itemList_6[numericVal_93]) >>> 0];
                  }
                  this._lBlock = varData_1180;
                  this._rBlock = varData_1179 ^ numericVal_92;
                }
                var varData_1181 = this._lBlock;
                this._lBlock = this._rBlock;
                this._rBlock = varData_1181;
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
              var varData_1182 = (this._lBlock >>> param_1_2 ^ this._rBlock) & param_2_1;
              this._rBlock ^= varData_1182;
              this._lBlock ^= varData_1182 << param_1_2;
            }
            function handleAction_84(param_1_2, param_2_1) {
              var varData_1183 = (this._rBlock >>> param_1_2 ^ this._lBlock) & param_2_1;
              this._lBlock ^= varData_1183;
              this._rBlock ^= varData_1183 << param_1_2;
            }
            varData_1165.DES = varData_1168._createHelper(varData_1170);
            var varData_1184 = varData_1169.TripleDES = varData_1168.extend({
              _doReset: function() {
                var varData_1185 = this._key;
                var varData_1186 = varData_1185.words;
                this._des1 = varData_1170.createEncryptor(varData_1167.create(varData_1186.slice(0, 2)));
                this._des2 = varData_1170.createEncryptor(varData_1167.create(varData_1186.slice(2, 4)));
                this._des3 = varData_1170.createEncryptor(varData_1167.create(varData_1186.slice(4, 6)));
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
            varData_1165.TripleDES = varData_1168._createHelper(varData_1184);
          })();
          return param_1_1.TripleDES;
        });
      }
    });
    var varData_1187 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rc4.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_633(), varData_654(), varData_985(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1188 = param_1_1;
            var varData_1189 = varData_1188.lib;
            var varData_1190 = varData_1189.StreamCipher;
            var varData_1191 = varData_1188.algo;
            var varData_1192 = varData_1191.RC4 = varData_1190.extend({
              _doReset: function() {
                var varData_1193 = this._key;
                var varData_1194 = varData_1193.words;
                var varData_1195 = varData_1193.sigBytes;
                var varData_1196 = this._S = [];
                for (var numericVal_91 = 0; numericVal_91 < 256; numericVal_91++) {
                  varData_1196[numericVal_91] = numericVal_91;
                }
                for (var numericVal_91 = 0, numericVal_92 = 0; numericVal_91 < 256; numericVal_91++) {
                  var varData_1197 = numericVal_91 % varData_1195;
                  var varData_1198 = varData_1194[varData_1197 >>> 2] >>> 24 - varData_1197 % 4 * 8 & 255;
                  numericVal_92 = (numericVal_92 + varData_1196[numericVal_91] + varData_1198) % 256;
                  var varData_1199 = varData_1196[numericVal_91];
                  varData_1196[numericVal_91] = varData_1196[numericVal_92];
                  varData_1196[numericVal_92] = varData_1199;
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
              var varData_1200 = this._S;
              var varData_1201 = this._i;
              var varData_1202 = this._j;
              var numericVal_91 = 0;
              for (var numericVal_92 = 0; numericVal_92 < 4; numericVal_92++) {
                varData_1201 = (varData_1201 + 1) % 256;
                varData_1202 = (varData_1202 + varData_1200[varData_1201]) % 256;
                var varData_1203 = varData_1200[varData_1201];
                varData_1200[varData_1201] = varData_1200[varData_1202];
                varData_1200[varData_1202] = varData_1203;
                numericVal_91 |= varData_1200[(varData_1200[varData_1201] + varData_1200[varData_1202]) % 256] << 24 - numericVal_92 * 8;
              }
              this._i = varData_1201;
              this._j = varData_1202;
              return numericVal_91;
            }
            varData_1188.RC4 = varData_1190._createHelper(varData_1192);
            var varData_1204 = varData_1191.RC4Drop = varData_1192.extend({
              cfg: varData_1192.cfg.extend({
                drop: 192
              }),
              _doReset: function() {
                varData_1192._doReset.call(this);
                for (var loopIdx = this.cfg.drop; loopIdx > 0; loopIdx--) {
                  handleAction_85.call(this);
                }
              }
            });
            varData_1188.RC4Drop = varData_1190._createHelper(varData_1204);
          })();
          return param_1_1.RC4;
        });
      }
    });
    var varData_1205 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_633(), varData_654(), varData_985(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1206 = param_1_1;
            var varData_1207 = varData_1206.lib;
            var varData_1208 = varData_1207.StreamCipher;
            var varData_1209 = varData_1206.algo;
            var itemList_22 = [];
            var itemList_3 = [];
            var itemList_4 = [];
            var varData_1210 = varData_1209.Rabbit = varData_1208.extend({
              _doReset: function() {
                var varData_1211 = this._key.words;
                var varData_1212 = this.cfg.iv;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  varData_1211[numericVal_91] = (varData_1211[numericVal_91] << 8 | varData_1211[numericVal_91] >>> 24) & 16711935 | (varData_1211[numericVal_91] << 24 | varData_1211[numericVal_91] >>> 8) & -16711936;
                }
                var varData_1213 = this._X = [varData_1211[0], varData_1211[3] << 16 | varData_1211[2] >>> 16, varData_1211[1], varData_1211[0] << 16 | varData_1211[3] >>> 16, varData_1211[2], varData_1211[1] << 16 | varData_1211[0] >>> 16, varData_1211[3], varData_1211[2] << 16 | varData_1211[1] >>> 16];
                var varData_1214 = this._C = [varData_1211[2] << 16 | varData_1211[2] >>> 16, varData_1211[0] & -65536 | varData_1211[1] & 65535, varData_1211[3] << 16 | varData_1211[3] >>> 16, varData_1211[1] & -65536 | varData_1211[2] & 65535, varData_1211[0] << 16 | varData_1211[0] >>> 16, varData_1211[2] & -65536 | varData_1211[3] & 65535, varData_1211[1] << 16 | varData_1211[1] >>> 16, varData_1211[3] & -65536 | varData_1211[0] & 65535];
                this._b = 0;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  handleAction_86.call(this);
                }
                for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                  varData_1214[numericVal_91] ^= varData_1213[numericVal_91 + 4 & 7];
                }
                if (varData_1212) {
                  var varData_1215 = varData_1212.words;
                  var varData_1216 = varData_1215[0];
                  var varData_1217 = varData_1215[1];
                  var varData_1218 = (varData_1216 << 8 | varData_1216 >>> 24) & 16711935 | (varData_1216 << 24 | varData_1216 >>> 8) & -16711936;
                  var varData_1219 = (varData_1217 << 8 | varData_1217 >>> 24) & 16711935 | (varData_1217 << 24 | varData_1217 >>> 8) & -16711936;
                  var varData_1220 = varData_1218 >>> 16 | varData_1219 & -65536;
                  var varData_1221 = varData_1219 << 16 | varData_1218 & 65535;
                  varData_1214[0] ^= varData_1218;
                  varData_1214[1] ^= varData_1220;
                  varData_1214[2] ^= varData_1219;
                  varData_1214[3] ^= varData_1221;
                  varData_1214[4] ^= varData_1218;
                  varData_1214[5] ^= varData_1220;
                  varData_1214[6] ^= varData_1219;
                  varData_1214[7] ^= varData_1221;
                  for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                    handleAction_86.call(this);
                  }
                }
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_1222 = this._X;
                handleAction_86.call(this);
                itemList_22[0] = varData_1222[0] ^ varData_1222[5] >>> 16 ^ varData_1222[3] << 16;
                itemList_22[1] = varData_1222[2] ^ varData_1222[7] >>> 16 ^ varData_1222[5] << 16;
                itemList_22[2] = varData_1222[4] ^ varData_1222[1] >>> 16 ^ varData_1222[7] << 16;
                itemList_22[3] = varData_1222[6] ^ varData_1222[3] >>> 16 ^ varData_1222[1] << 16;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  itemList_22[numericVal_91] = (itemList_22[numericVal_91] << 8 | itemList_22[numericVal_91] >>> 24) & 16711935 | (itemList_22[numericVal_91] << 24 | itemList_22[numericVal_91] >>> 8) & -16711936;
                  param_1_2[param_2_1 + numericVal_91] ^= itemList_22[numericVal_91];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_86() {
              var varData_1223 = this._X;
              var varData_1224 = this._C;
              for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                itemList_3[numericVal_91] = varData_1224[numericVal_91];
              }
              varData_1224[0] = varData_1224[0] + 1295307597 + this._b | 0;
              varData_1224[1] = varData_1224[1] + 3545052371 + (varData_1224[0] >>> 0 < itemList_3[0] >>> 0 ? 1 : 0) | 0;
              varData_1224[2] = varData_1224[2] + 886263092 + (varData_1224[1] >>> 0 < itemList_3[1] >>> 0 ? 1 : 0) | 0;
              varData_1224[3] = varData_1224[3] + 1295307597 + (varData_1224[2] >>> 0 < itemList_3[2] >>> 0 ? 1 : 0) | 0;
              varData_1224[4] = varData_1224[4] + 3545052371 + (varData_1224[3] >>> 0 < itemList_3[3] >>> 0 ? 1 : 0) | 0;
              varData_1224[5] = varData_1224[5] + 886263092 + (varData_1224[4] >>> 0 < itemList_3[4] >>> 0 ? 1 : 0) | 0;
              varData_1224[6] = varData_1224[6] + 1295307597 + (varData_1224[5] >>> 0 < itemList_3[5] >>> 0 ? 1 : 0) | 0;
              varData_1224[7] = varData_1224[7] + 3545052371 + (varData_1224[6] >>> 0 < itemList_3[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1224[7] >>> 0 < itemList_3[7] >>> 0 ? 1 : 0;
              for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                var varData_1225 = varData_1223[numericVal_91] + varData_1224[numericVal_91];
                var varData_1226 = varData_1225 & 65535;
                var varData_1227 = varData_1225 >>> 16;
                var varData_1228 = ((varData_1226 * varData_1226 >>> 17) + varData_1226 * varData_1227 >>> 15) + varData_1227 * varData_1227;
                var varData_1229 = ((varData_1225 & -65536) * varData_1225 | 0) + ((varData_1225 & 65535) * varData_1225 | 0);
                itemList_4[numericVal_91] = varData_1228 ^ varData_1229;
              }
              varData_1223[0] = itemList_4[0] + (itemList_4[7] << 16 | itemList_4[7] >>> 16) + (itemList_4[6] << 16 | itemList_4[6] >>> 16) | 0;
              varData_1223[1] = itemList_4[1] + (itemList_4[0] << 8 | itemList_4[0] >>> 24) + itemList_4[7] | 0;
              varData_1223[2] = itemList_4[2] + (itemList_4[1] << 16 | itemList_4[1] >>> 16) + (itemList_4[0] << 16 | itemList_4[0] >>> 16) | 0;
              varData_1223[3] = itemList_4[3] + (itemList_4[2] << 8 | itemList_4[2] >>> 24) + itemList_4[1] | 0;
              varData_1223[4] = itemList_4[4] + (itemList_4[3] << 16 | itemList_4[3] >>> 16) + (itemList_4[2] << 16 | itemList_4[2] >>> 16) | 0;
              varData_1223[5] = itemList_4[5] + (itemList_4[4] << 8 | itemList_4[4] >>> 24) + itemList_4[3] | 0;
              varData_1223[6] = itemList_4[6] + (itemList_4[5] << 16 | itemList_4[5] >>> 16) + (itemList_4[4] << 16 | itemList_4[4] >>> 16) | 0;
              varData_1223[7] = itemList_4[7] + (itemList_4[6] << 8 | itemList_4[6] >>> 24) + itemList_4[5] | 0;
            }
            varData_1206.Rabbit = varData_1208._createHelper(varData_1210);
          })();
          return param_1_1.Rabbit;
        });
      }
    });
    var varData_1230 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/rabbit-legacy.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_633(), varData_654(), varData_985(), varData_1001());
          } else if (typeof define === "function" && define.amd) {
            define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], param_2_1);
          } else {
            param_2_1(param_1_1.CryptoJS);
          }
        })(param_1, function(param_1_1) {
          (function() {
            var varData_1231 = param_1_1;
            var varData_1232 = varData_1231.lib;
            var varData_1233 = varData_1232.StreamCipher;
            var varData_1234 = varData_1231.algo;
            var itemList_22 = [];
            var itemList_3 = [];
            var itemList_4 = [];
            var varData_1235 = varData_1234.RabbitLegacy = varData_1233.extend({
              _doReset: function() {
                var varData_1236 = this._key.words;
                var varData_1237 = this.cfg.iv;
                var varData_1238 = this._X = [varData_1236[0], varData_1236[3] << 16 | varData_1236[2] >>> 16, varData_1236[1], varData_1236[0] << 16 | varData_1236[3] >>> 16, varData_1236[2], varData_1236[1] << 16 | varData_1236[0] >>> 16, varData_1236[3], varData_1236[2] << 16 | varData_1236[1] >>> 16];
                var varData_1239 = this._C = [varData_1236[2] << 16 | varData_1236[2] >>> 16, varData_1236[0] & -65536 | varData_1236[1] & 65535, varData_1236[3] << 16 | varData_1236[3] >>> 16, varData_1236[1] & -65536 | varData_1236[2] & 65535, varData_1236[0] << 16 | varData_1236[0] >>> 16, varData_1236[2] & -65536 | varData_1236[3] & 65535, varData_1236[1] << 16 | varData_1236[1] >>> 16, varData_1236[3] & -65536 | varData_1236[0] & 65535];
                this._b = 0;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  handleAction_87.call(this);
                }
                for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                  varData_1239[numericVal_91] ^= varData_1238[numericVal_91 + 4 & 7];
                }
                if (varData_1237) {
                  var varData_1240 = varData_1237.words;
                  var varData_1241 = varData_1240[0];
                  var varData_1242 = varData_1240[1];
                  var varData_1243 = (varData_1241 << 8 | varData_1241 >>> 24) & 16711935 | (varData_1241 << 24 | varData_1241 >>> 8) & -16711936;
                  var varData_1244 = (varData_1242 << 8 | varData_1242 >>> 24) & 16711935 | (varData_1242 << 24 | varData_1242 >>> 8) & -16711936;
                  var varData_1245 = varData_1243 >>> 16 | varData_1244 & -65536;
                  var varData_1246 = varData_1244 << 16 | varData_1243 & 65535;
                  varData_1239[0] ^= varData_1243;
                  varData_1239[1] ^= varData_1245;
                  varData_1239[2] ^= varData_1244;
                  varData_1239[3] ^= varData_1246;
                  varData_1239[4] ^= varData_1243;
                  varData_1239[5] ^= varData_1245;
                  varData_1239[6] ^= varData_1244;
                  varData_1239[7] ^= varData_1246;
                  for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                    handleAction_87.call(this);
                  }
                }
              },
              _doProcessBlock: function(param_1_2, param_2_1) {
                var varData_1247 = this._X;
                handleAction_87.call(this);
                itemList_22[0] = varData_1247[0] ^ varData_1247[5] >>> 16 ^ varData_1247[3] << 16;
                itemList_22[1] = varData_1247[2] ^ varData_1247[7] >>> 16 ^ varData_1247[5] << 16;
                itemList_22[2] = varData_1247[4] ^ varData_1247[1] >>> 16 ^ varData_1247[7] << 16;
                itemList_22[3] = varData_1247[6] ^ varData_1247[3] >>> 16 ^ varData_1247[1] << 16;
                for (var numericVal_91 = 0; numericVal_91 < 4; numericVal_91++) {
                  itemList_22[numericVal_91] = (itemList_22[numericVal_91] << 8 | itemList_22[numericVal_91] >>> 24) & 16711935 | (itemList_22[numericVal_91] << 24 | itemList_22[numericVal_91] >>> 8) & -16711936;
                  param_1_2[param_2_1 + numericVal_91] ^= itemList_22[numericVal_91];
                }
              },
              blockSize: 4,
              ivSize: 2
            });
            function handleAction_87() {
              var varData_1248 = this._X;
              var varData_1249 = this._C;
              for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                itemList_3[numericVal_91] = varData_1249[numericVal_91];
              }
              varData_1249[0] = varData_1249[0] + 1295307597 + this._b | 0;
              varData_1249[1] = varData_1249[1] + 3545052371 + (varData_1249[0] >>> 0 < itemList_3[0] >>> 0 ? 1 : 0) | 0;
              varData_1249[2] = varData_1249[2] + 886263092 + (varData_1249[1] >>> 0 < itemList_3[1] >>> 0 ? 1 : 0) | 0;
              varData_1249[3] = varData_1249[3] + 1295307597 + (varData_1249[2] >>> 0 < itemList_3[2] >>> 0 ? 1 : 0) | 0;
              varData_1249[4] = varData_1249[4] + 3545052371 + (varData_1249[3] >>> 0 < itemList_3[3] >>> 0 ? 1 : 0) | 0;
              varData_1249[5] = varData_1249[5] + 886263092 + (varData_1249[4] >>> 0 < itemList_3[4] >>> 0 ? 1 : 0) | 0;
              varData_1249[6] = varData_1249[6] + 1295307597 + (varData_1249[5] >>> 0 < itemList_3[5] >>> 0 ? 1 : 0) | 0;
              varData_1249[7] = varData_1249[7] + 3545052371 + (varData_1249[6] >>> 0 < itemList_3[6] >>> 0 ? 1 : 0) | 0;
              this._b = varData_1249[7] >>> 0 < itemList_3[7] >>> 0 ? 1 : 0;
              for (var numericVal_91 = 0; numericVal_91 < 8; numericVal_91++) {
                var varData_1250 = varData_1248[numericVal_91] + varData_1249[numericVal_91];
                var varData_1251 = varData_1250 & 65535;
                var varData_1252 = varData_1250 >>> 16;
                var varData_1253 = ((varData_1251 * varData_1251 >>> 17) + varData_1251 * varData_1252 >>> 15) + varData_1252 * varData_1252;
                var varData_1254 = ((varData_1250 & -65536) * varData_1250 | 0) + ((varData_1250 & 65535) * varData_1250 | 0);
                itemList_4[numericVal_91] = varData_1253 ^ varData_1254;
              }
              varData_1248[0] = itemList_4[0] + (itemList_4[7] << 16 | itemList_4[7] >>> 16) + (itemList_4[6] << 16 | itemList_4[6] >>> 16) | 0;
              varData_1248[1] = itemList_4[1] + (itemList_4[0] << 8 | itemList_4[0] >>> 24) + itemList_4[7] | 0;
              varData_1248[2] = itemList_4[2] + (itemList_4[1] << 16 | itemList_4[1] >>> 16) + (itemList_4[0] << 16 | itemList_4[0] >>> 16) | 0;
              varData_1248[3] = itemList_4[3] + (itemList_4[2] << 8 | itemList_4[2] >>> 24) + itemList_4[1] | 0;
              varData_1248[4] = itemList_4[4] + (itemList_4[3] << 16 | itemList_4[3] >>> 16) + (itemList_4[2] << 16 | itemList_4[2] >>> 16) | 0;
              varData_1248[5] = itemList_4[5] + (itemList_4[4] << 8 | itemList_4[4] >>> 24) + itemList_4[3] | 0;
              varData_1248[6] = itemList_4[6] + (itemList_4[5] << 16 | itemList_4[5] >>> 16) + (itemList_4[4] << 16 | itemList_4[4] >>> 16) | 0;
              varData_1248[7] = itemList_4[7] + (itemList_4[6] << 8 | itemList_4[6] >>> 24) + itemList_4[5] | 0;
            }
            varData_1231.RabbitLegacy = varData_1233._createHelper(varData_1235);
          })();
          return param_1_1.RabbitLegacy;
        });
      }
    });
    var varData_1255 = varData_538({
      "../../node_modules/.pnpm/crypto-js@3.1.9-1/node_modules/crypto-js/index.js"(param_1, param_2) {
        "use strict";
        (function(param_1_1, param_2_1, param_3) {
          if (typeof param_1 === "object") {
            param_2.exports = param_1 = param_2_1(varData_550(), varData_597(), varData_612(), varData_619(), varData_633(), varData_654(), varData_698(), varData_718(), varData_750(), varData_758(), varData_848(), varData_857(), varData_903(), varData_944(), varData_962(), varData_985(), varData_1001(), varData_1071(), varData_1080(), varData_1088(), varData_1099(), varData_1106(), varData_1108(), varData_1114(), varData_1118(), varData_1119(), varData_1123(), varData_1125(), varData_1135(), varData_1164(), varData_1187(), varData_1205(), varData_1230());
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
    var varData_1256 = {
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
    var varData_1257 = {};
    var varData_1258 = {
      MathUtils: () => varData_1403
    };
    varData_539(varData_1257, varData_1258);
    var varData_1259;
    var varData_1260;
    var varData_1261 = class _0x5c6ed5 {
      constructor(param_1, param_2, param_3) {
        varData_546(this, varData_1259);
        const varData_1262 = varData_549(this, varData_1259, varData_1260).call(this, param_1, param_2, param_3);
        this.x = varData_1262.x;
        this.y = varData_1262.y;
        this.z = varData_1262.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_1263 = varData_549(this, varData_1259, varData_1260).call(this, param_1, param_2, param_3);
        return this.x === varData_1263.x && this.y === varData_1263.y && this.z === varData_1263.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_1264 = varData_549(this, varData_1259, varData_1260).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_1264.x * param_4 : varData_1264.x;
        this.y += param_4 ? varData_1264.y * param_4 : varData_1264.y;
        this.z += param_4 ? varData_1264.z * param_4 : varData_1264.z;
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
        const varData_1265 = varData_549(this, varData_1259, varData_1260).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_1265.x * param_4 : varData_1265.x;
        this.y -= param_4 ? varData_1265.y * param_4 : varData_1265.y;
        this.z -= param_4 ? varData_1265.z * param_4 : varData_1265.z;
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
        const varData_1266 = varData_549(this, varData_1259, varData_1260).call(this, param_1, param_2, param_3);
        this.x *= varData_1266.x;
        this.y *= varData_1266.y;
        this.z *= varData_1266.z;
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
        const varData_1267 = varData_549(this, varData_1259, varData_1260).call(this, param_1, param_2, param_3);
        this.x /= varData_1267.x;
        this.y /= varData_1267.y;
        this.z /= varData_1267.z;
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
        const varData_1268 = varData_549(this, varData_1259, varData_1260).call(this, param_1, param_2, param_3);
        return new _0x5c6ed5((this.x + varData_1268.x) / 2, (this.y + varData_1268.y) / 2, (this.z + varData_1268.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x17b22f, _0x22fba5, _0x24fee2] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x17b22f !== "number" || typeof _0x22fba5 !== "number" || typeof _0x24fee2 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x5b184d, _0x3b5fb2, _0x5bc29d] = [this.x - _0x17b22f, this.y - _0x22fba5, this.z - _0x24fee2];
        return Math.sqrt(_0x5b184d * _0x5b184d + _0x3b5fb2 * _0x3b5fb2 + _0x5bc29d * _0x5bc29d);
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
        var varData_1269 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_1269;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1259 = /* @__PURE__ */ new WeakSet();
    varData_1260 = function(param_1, param_2, param_3) {
      let varData_1270 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_1261) {
        varData_1270 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1271 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_1270 = varData_1271;
      } else if (typeof param_1 === "object") {
        varData_1270 = param_1;
      } else {
        var varData_1272 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_1270 = varData_1272;
      }
      if (typeof varData_1270.x !== "number" || typeof varData_1270.y !== "number" || typeof varData_1270.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1270;
    };
    var varData_1273 = varData_1261;
    var varData_1274;
    var varData_1275;
    var varData_1276 = class {
      constructor(param_1) {
        varData_546(this, varData_1274, void 0);
        varData_546(this, varData_1275, void 0);
        varData_547(this, varData_1275, param_1 ?? 5);
        varData_547(this, varData_1274, /* @__PURE__ */ new Map());
      }
      setTTL(param_1) {
        varData_547(this, varData_1275, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_545(this, varData_1274).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_545(this, varData_1275)) * 1e3
        });
        return this;
      }
      get(param_1, _0x5c738b = false) {
        const varData_1277 = varData_545(this, varData_1274).get(param_1);
        const varData_1278 = varData_1277 ? _0x5c738b ? true : varData_1277.expiration > Date.now() : false;
        if (!varData_1277 || !varData_1278) {
          if (varData_1277) {
            varData_545(this, varData_1274).delete(param_1);
          }
          return;
        }
        return varData_1277.value;
      }
      has(param_1, _0x589dda = false) {
        const varData_1279 = varData_545(this, varData_1274).get(param_1);
        const varData_1280 = varData_1279 ? _0x589dda ? true : varData_1279.expiration > Date.now() : false;
        if (varData_1279 && !varData_1280) {
          varData_545(this, varData_1274).delete(param_1);
        }
        return varData_1280;
      }
      delete(param_1) {
        return varData_545(this, varData_1274).delete(param_1);
      }
      clear() {
        varData_545(this, varData_1274).clear();
      }
      values(_0x5e4b70 = false) {
        const itemList_22 = [];
        const timestamp = Date.now();
        for (const varData_1281 of varData_545(this, varData_1274).values()) {
          if (_0x5e4b70 || varData_1281.expiration > timestamp) {
            itemList_22.push(varData_1281.value);
          }
        }
        return itemList_22;
      }
      keys(_0x301edf = false) {
        const itemList_22 = [];
        const timestamp = Date.now();
        for (const [_0x20fed2, _0x207785] of varData_545(this, varData_1274).entries()) {
          if (_0x301edf || _0x207785.expiration > timestamp) {
            itemList_22.push(_0x20fed2);
          }
        }
        return itemList_22;
      }
      entries(_0x317fa7 = false) {
        const itemList_22 = [];
        const timestamp = Date.now();
        for (const [_0x5d8142, _0xc52f97] of varData_545(this, varData_1274).entries()) {
          if (_0x317fa7 || _0xc52f97.expiration > timestamp) {
            itemList_22.push([_0x5d8142, _0xc52f97.value]);
          }
        }
        return itemList_22;
      }
    };
    varData_1274 = /* @__PURE__ */ new WeakMap();
    varData_1275 = /* @__PURE__ */ new WeakMap();
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
    var varData_1302;
    var varData_1303;
    var varData_1304 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x343c61 = 30, _0x14c85c = false) {
        varData_546(this, varData_1294);
        varData_546(this, varData_1296);
        varData_546(this, varData_1298);
        varData_546(this, varData_1300);
        varData_546(this, varData_1302);
        varData_546(this, varData_1282, void 0);
        varData_546(this, varData_1283, void 0);
        varData_546(this, varData_1284, void 0);
        varData_546(this, varData_1285, void 0);
        varData_546(this, varData_1286, void 0);
        varData_546(this, varData_1287, void 0);
        varData_546(this, varData_1288, void 0);
        varData_546(this, varData_1289, void 0);
        varData_546(this, varData_1290, void 0);
        varData_546(this, varData_1291, void 0);
        varData_546(this, varData_1292, void 0);
        varData_546(this, varData_1293, void 0);
        varData_547(this, varData_1282, param_1);
        varData_547(this, varData_1283, param_4);
        varData_547(this, varData_1284, param_5);
        varData_547(this, varData_1285, param_2);
        varData_547(this, varData_1286, param_3);
        varData_547(this, varData_1287, _0x14c85c);
        varData_547(this, varData_1288, _0x343c61);
        varData_547(this, varData_1290, varData_545(this, varData_1283).x / _0x343c61);
        varData_547(this, varData_1291, varData_545(this, varData_1283).y / _0x343c61);
        varData_547(this, varData_1289, varData_545(this, varData_1290) * varData_545(this, varData_1291));
        varData_547(this, varData_1292, varData_549(this, varData_1294, varData_1295).call(this, varData_545(this, varData_1282), varData_545(this, varData_1288), varData_545(this, varData_1290), varData_545(this, varData_1291), varData_545(this, varData_1287)));
        varData_547(this, varData_1293, varData_549(this, varData_1296, varData_1297).call(this, varData_545(this, varData_1292), varData_545(this, varData_1289)));
      }
      get cells() {
        return varData_545(this, varData_1292);
      }
      get cellSize() {
        return varData_545(this, varData_1288);
      }
      get cellWidth() {
        return varData_545(this, varData_1290);
      }
      get cellHeight() {
        return varData_545(this, varData_1291);
      }
      get gridArea() {
        return varData_545(this, varData_1293);
      }
      get gridCoverage() {
        return varData_545(this, varData_1293) / varData_545(this, varData_1284) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_1305;
        const varData_1306 = param_1.x - varData_545(this, varData_1285).x;
        const varData_1307 = param_1.y - varData_545(this, varData_1285).y;
        const roundedVal = Math.floor(varData_1306 * varData_545(this, varData_1288) / varData_545(this, varData_1283).x);
        const roundedVal_1 = Math.floor(varData_1307 * varData_545(this, varData_1288) / varData_545(this, varData_1283).y);
        let varData_1308 = (varData_1305 = varData_545(this, varData_1292)[roundedVal]) == null ? void 0 : varData_1305[roundedVal_1];
        if (!varData_1308 && varData_545(this, varData_1287)) {
          varData_1308 = varData_549(this, varData_1300, varData_1301).call(this, roundedVal, roundedVal_1, varData_545(this, varData_1290), varData_545(this, varData_1291), varData_545(this, varData_1282));
          varData_545(this, varData_1292)[roundedVal][roundedVal_1] = varData_1308;
          if (!varData_1308) {
            return false;
          }
          varData_547(this, varData_1293, varData_545(this, varData_1293) + varData_545(this, varData_1289));
        }
        return varData_1308 ?? false;
      }
    };
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
    varData_1292 = /* @__PURE__ */ new WeakMap();
    varData_1293 = /* @__PURE__ */ new WeakMap();
    varData_1294 = /* @__PURE__ */ new WeakSet();
    varData_1295 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_1309 = {};
      for (let numericVal_91 = 0; numericVal_91 < param_2; numericVal_91++) {
        varData_1309[numericVal_91] = {};
        if (param_5) {
          continue;
        }
        for (let numericVal_92 = 0; numericVal_92 < param_2; numericVal_92++) {
          const varData_1310 = varData_549(this, varData_1300, varData_1301).call(this, numericVal_91, numericVal_92, param_3, param_4, param_1);
          if (!varData_1310) {
            continue;
          }
          varData_1309[numericVal_91][numericVal_92] = true;
        }
      }
      return varData_1309;
    };
    varData_1296 = /* @__PURE__ */ new WeakSet();
    varData_1297 = function(param_1, param_2) {
      let numericVal_91 = 0;
      for (const varData_1311 in param_1) {
        for (const varData_1312 in param_1[varData_1311]) {
          numericVal_91 += param_2;
        }
      }
      return numericVal_91;
    };
    varData_1298 = /* @__PURE__ */ new WeakSet();
    varData_1299 = function(param_1, param_2, param_3, param_4) {
      const itemList_22 = [];
      const varData_1313 = param_1 * param_3 + varData_545(this, varData_1285).x;
      const varData_1314 = param_2 * param_4 + varData_545(this, varData_1285).y;
      itemList_22.push(new varData_1391(varData_1313, varData_1314));
      itemList_22.push(new varData_1391(varData_1313 + param_3, varData_1314));
      itemList_22.push(new varData_1391(varData_1313 + param_3, varData_1314 + param_4));
      itemList_22.push(new varData_1391(varData_1313, varData_1314 + param_4));
      return itemList_22;
    };
    varData_1300 = /* @__PURE__ */ new WeakSet();
    varData_1301 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_1315 = varData_549(this, varData_1298, varData_1299).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_12 = false;
      for (const varData_1316 of varData_1315) {
        const varData_1317 = varData_1420.MathUtils.windingNumber(varData_1316, param_5);
        if (varData_1317 !== 0) {
          isDisabled_12 = true;
          break;
        }
      }
      if (!isDisabled_12) {
        return false;
      }
      for (let numericVal_91 = 0; numericVal_91 < varData_1315.length; numericVal_91++) {
        const varData_1318 = varData_1315[numericVal_91];
        const varData_1319 = varData_1315[(numericVal_91 + 1) % varData_1315.length];
        for (let numericVal_92 = 0; numericVal_92 < param_5.length; numericVal_92++) {
          const varData_1320 = param_5[numericVal_92];
          const varData_1321 = param_5[(numericVal_92 + 1) % param_5.length];
          if (varData_549(this, varData_1302, varData_1303).call(this, varData_1318, varData_1319, varData_1320, varData_1321)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_1302 = /* @__PURE__ */ new WeakSet();
    varData_1303 = function(param_1, param_2, param_3, param_4) {
      const varData_1322 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_1323 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_1324 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_1322 === 0) {
        return varData_1323 === 0 && varData_1324 === 0;
      }
      const varData_1325 = varData_1323 / varData_1322;
      const varData_1326 = varData_1324 / varData_1322;
      return varData_1325 >= 0 && varData_1325 <= 1 && varData_1326 >= 0 && varData_1326 <= 1;
    };
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
    var varData_1343;
    var varData_1344;
    var varData_1345 = class {
      constructor(param_1, _0x32054e = {}, _0x2ecd06 = {}) {
        varData_546(this, varData_1335);
        varData_546(this, varData_1337);
        varData_546(this, varData_1339);
        varData_546(this, varData_1341);
        varData_546(this, varData_1343);
        varData_546(this, varData_1327, void 0);
        varData_546(this, varData_1328, void 0);
        varData_546(this, varData_1329, void 0);
        varData_546(this, varData_1330, void 0);
        varData_546(this, varData_1331, void 0);
        varData_546(this, varData_1332, void 0);
        varData_546(this, varData_1333, void 0);
        varData_546(this, varData_1334, void 0);
        varData_547(this, varData_1327, varData_1420.getUUID());
        varData_547(this, varData_1328, param_1);
        varData_547(this, varData_1329, varData_549(this, varData_1335, varData_1336).call(this, param_1));
        varData_547(this, varData_1330, varData_549(this, varData_1337, varData_1338).call(this, param_1));
        varData_547(this, varData_1331, varData_549(this, varData_1343, varData_1344).call(this, param_1));
        varData_547(this, varData_1332, varData_549(this, varData_1341, varData_1342).call(this, varData_545(this, varData_1329), varData_545(this, varData_1330)));
        varData_547(this, varData_1333, varData_549(this, varData_1339, varData_1340).call(this, varData_545(this, varData_1329), varData_545(this, varData_1330)));
        this.options = _0x32054e;
        this.data = _0x2ecd06;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_547(this, varData_1334, new varData_1304(varData_545(this, varData_1328), varData_545(this, varData_1329), varData_545(this, varData_1330), varData_545(this, varData_1332), varData_545(this, varData_1331), _0x32054e.gridCellSize, _0x32054e.useLazyGrid));
      }
      get id() {
        return varData_545(this, varData_1327);
      }
      get center() {
        return varData_545(this, varData_1333);
      }
      get min() {
        return varData_545(this, varData_1329);
      }
      get max() {
        return varData_545(this, varData_1330);
      }
      get points() {
        return [...varData_545(this, varData_1328)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_545(this, varData_1329).x || param_1.x > varData_545(this, varData_1330).x) {
          return false;
        } else if (param_1.y < varData_545(this, varData_1329).y || param_1.y > varData_545(this, varData_1330).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_1273) {
          const varData_1346 = this.options.minZ ?? -Infinity;
          const varData_1347 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_1346 || param_1.z > varData_1347) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_545(this, varData_1334)) {
          return varData_545(this, varData_1334).isPointInsideGrid(param_1);
        }
        const varData_1348 = varData_1420.MathUtils.windingNumber(param_1, varData_545(this, varData_1328));
        return varData_1348 !== 0;
      }
      addPoint(param_1) {
        varData_545(this, varData_1328).push(param_1);
      }
      removePoint(param_1) {
        const varData_1349 = varData_545(this, varData_1328).findIndex((param_1_1) => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_1349 === -1) {
          return;
        }
        varData_545(this, varData_1328).splice(varData_1349, 1);
      }
      removeLastPoint() {
        varData_545(this, varData_1328).pop();
      }
      recalculate() {
        varData_547(this, varData_1329, varData_549(this, varData_1335, varData_1336).call(this, varData_545(this, varData_1328)));
        varData_547(this, varData_1330, varData_549(this, varData_1337, varData_1338).call(this, varData_545(this, varData_1328)));
        varData_547(this, varData_1331, varData_549(this, varData_1343, varData_1344).call(this, varData_545(this, varData_1328)));
        varData_547(this, varData_1332, varData_549(this, varData_1341, varData_1342).call(this, varData_545(this, varData_1329), varData_545(this, varData_1330)));
        varData_547(this, varData_1333, varData_549(this, varData_1339, varData_1340).call(this, varData_545(this, varData_1329), varData_545(this, varData_1330)));
        if (!this.options.useGrid) {
          return;
        }
        varData_547(this, varData_1334, new varData_1304(varData_545(this, varData_1328), varData_545(this, varData_1329), varData_545(this, varData_1330), varData_545(this, varData_1332), varData_545(this, varData_1331), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_1327 = /* @__PURE__ */ new WeakMap();
    varData_1328 = /* @__PURE__ */ new WeakMap();
    varData_1329 = /* @__PURE__ */ new WeakMap();
    varData_1330 = /* @__PURE__ */ new WeakMap();
    varData_1331 = /* @__PURE__ */ new WeakMap();
    varData_1332 = /* @__PURE__ */ new WeakMap();
    varData_1333 = /* @__PURE__ */ new WeakMap();
    varData_1334 = /* @__PURE__ */ new WeakMap();
    varData_1335 = /* @__PURE__ */ new WeakSet();
    varData_1336 = function(param_1) {
      let varData_1350 = Number.MAX_SAFE_INTEGER;
      let varData_1351 = Number.MAX_SAFE_INTEGER;
      for (const varData_1352 of param_1) {
        varData_1350 = Math.min(varData_1350, varData_1352.x);
        varData_1351 = Math.min(varData_1351, varData_1352.y);
      }
      return new varData_1391(varData_1350, varData_1351);
    };
    varData_1337 = /* @__PURE__ */ new WeakSet();
    varData_1338 = function(param_1) {
      let varData_1353 = Number.MIN_SAFE_INTEGER;
      let varData_1354 = Number.MIN_SAFE_INTEGER;
      for (const varData_1355 of param_1) {
        varData_1353 = Math.max(varData_1353, varData_1355.x);
        varData_1354 = Math.max(varData_1354, varData_1355.y);
      }
      return new varData_1391(varData_1353, varData_1354);
    };
    varData_1339 = /* @__PURE__ */ new WeakSet();
    varData_1340 = function(param_1, param_2) {
      const varData_1356 = param_2.add(param_1);
      return varData_1356.divideScalar(2);
    };
    varData_1341 = /* @__PURE__ */ new WeakSet();
    varData_1342 = function(param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_1343 = /* @__PURE__ */ new WeakSet();
    varData_1344 = function(param_1) {
      let numericVal_91 = 0;
      for (let numericVal_92 = 0, loopIdx = param_1.length - 1; numericVal_92 < param_1.length; loopIdx = numericVal_92++) {
        const varData_1357 = param_1[numericVal_92];
        const varData_1358 = param_1[loopIdx];
        numericVal_91 += varData_1357.x * varData_1358.y;
        numericVal_91 -= varData_1357.y * varData_1358.x;
      }
      return Math.abs(numericVal_91 / 2);
    };
    var varData_1359;
    var varData_1360;
    var varData_1361 = class _0x3a3d1d {
      constructor(param_1, param_2) {
        varData_546(this, varData_1359);
        const varData_1362 = varData_549(this, varData_1359, varData_1360).call(this, param_1, param_2);
        this.x = varData_1362.x;
        this.y = varData_1362.y;
      }
      equals(param_1, param_2) {
        const varData_1363 = varData_549(this, varData_1359, varData_1360).call(this, param_1, param_2);
        return this.x === varData_1363.x && this.y === varData_1363.y;
      }
      add(param_1, param_2, param_3) {
        const varData_1364 = varData_549(this, varData_1359, varData_1360).call(this, param_1, param_2);
        const varData_1365 = this.x + (param_3 ? varData_1364.x * param_3 : varData_1364.x);
        const varData_1366 = this.y + (param_3 ? varData_1364.y * param_3 : varData_1364.y);
        return new _0x3a3d1d(varData_1365, varData_1366);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1367 = this.x + param_1;
        const varData_1368 = this.y + param_1;
        return new _0x3a3d1d(varData_1367, varData_1368);
      }
      sub(param_1, param_2, param_3) {
        const varData_1369 = varData_549(this, varData_1359, varData_1360).call(this, param_1, param_2);
        const varData_1370 = this.x - (param_3 ? varData_1369.x * param_3 : varData_1369.x);
        const varData_1371 = this.y - (param_3 ? varData_1369.y * param_3 : varData_1369.y);
        return new _0x3a3d1d(varData_1370, varData_1371);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1372 = this.x - param_1;
        const varData_1373 = this.y - param_1;
        return new _0x3a3d1d(varData_1372, varData_1373);
      }
      multiply(param_1, param_2) {
        const varData_1374 = varData_549(this, varData_1359, varData_1360).call(this, param_1, param_2);
        const varData_1375 = this.x * varData_1374.x;
        const varData_1376 = this.y * varData_1374.y;
        return new _0x3a3d1d(varData_1375, varData_1376);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1377 = this.x * param_1;
        const varData_1378 = this.y * param_1;
        return new _0x3a3d1d(varData_1377, varData_1378);
      }
      divide(param_1, param_2) {
        const varData_1379 = varData_549(this, varData_1359, varData_1360).call(this, param_1, param_2);
        const varData_1380 = this.x / varData_1379.x;
        const varData_1381 = this.y / varData_1379.y;
        return new _0x3a3d1d(varData_1380, varData_1381);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_1382 = this.x / param_1;
        const varData_1383 = this.y / param_1;
        return new _0x3a3d1d(varData_1382, varData_1383);
      }
      round() {
        const roundedVal = Math.round(this.x);
        const roundedVal_1 = Math.round(this.y);
        return new _0x3a3d1d(roundedVal, roundedVal_1);
      }
      floor() {
        const roundedVal = Math.floor(this.x);
        const roundedVal_1 = Math.floor(this.y);
        return new _0x3a3d1d(roundedVal, roundedVal_1);
      }
      ceil() {
        const varData_1384 = Math.ceil(this.x);
        const varData_1385 = Math.ceil(this.y);
        return new _0x3a3d1d(varData_1384, varData_1385);
      }
      getCenter(param_1, param_2) {
        const varData_1386 = varData_549(this, varData_1359, varData_1360).call(this, param_1, param_2);
        return new _0x3a3d1d((this.x + varData_1386.x) / 2, (this.y + varData_1386.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0x5f5128, _0x46e3b7] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0x5f5128 !== "number" || typeof _0x46e3b7 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x5d5708, _0x85175f] = [this.x - _0x5f5128, this.y - _0x46e3b7];
        return Math.sqrt(_0x5d5708 * _0x5d5708 + _0x85175f * _0x85175f);
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
        var varData_1387 = {
          x: this.x,
          y: this.y
        };
        return varData_1387;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1359 = /* @__PURE__ */ new WeakSet();
    varData_1360 = function(param_1, param_2) {
      let varData_1388 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_1361 || param_1 instanceof varData_1273) {
        varData_1388 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1389 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_1388 = varData_1389;
      } else if (typeof param_1 === "object") {
        varData_1388 = param_1;
      } else {
        var varData_1390 = {
          x: param_1,
          y: param_2
        };
        varData_1388 = varData_1390;
      }
      if (typeof varData_1388.x !== "number" || typeof varData_1388.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1388;
    };
    var varData_1391 = varData_1361;
    var varData_1392 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_1393 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_1394 = ([_0x1cb7bc, _0x427933, _0x1c7341], [_0x41db61, _0x14db11, _0x56953b]) => {
      const [_0x2756b0, _0x30d358, _0x431829] = [_0x1cb7bc - _0x41db61, _0x427933 - _0x14db11, _0x1c7341 - _0x56953b];
      return Math.sqrt(_0x2756b0 * _0x2756b0 + _0x30d358 * _0x30d358 + _0x431829 * _0x431829);
    };
    var varData_1395 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_1396 = (param_1, param_2) => {
      if (param_1 instanceof varData_1391) {
        return param_1;
      } else if (param_1 instanceof varData_1273) {
        return new varData_1391(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_1391(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1391(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1391(param_1, param_2);
    };
    var varData_1397 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_1273) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_1273(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1273(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1273(param_1, param_2, param_3);
    };
    var varData_1398 = (param_1, param_2) => {
      let numericVal_91 = 0;
      const varData_1399 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let numericVal_92 = 0; numericVal_92 < param_2.length; numericVal_92++) {
        const varData_1400 = param_2[numericVal_92];
        const varData_1401 = param_2[(numericVal_92 + 1) % param_2.length];
        if (varData_1400.y <= param_1.y) {
          if (varData_1401.y > param_1.y && varData_1399(varData_1400, varData_1401, param_1) > 0) {
            numericVal_91++;
          }
        } else if (varData_1401.y <= param_1.y && varData_1399(varData_1400, varData_1401, param_1) < 0) {
          numericVal_91--;
        }
      }
      return numericVal_91;
    };
    var varData_1402 = {
      clamp: varData_1392,
      getMapRange: varData_1393,
      getDistance: varData_1394,
      getRandomNumber: varData_1395,
      parseVector2: varData_1396,
      parseVector3: varData_1397,
      windingNumber: varData_1398
    };
    var varData_1403 = varData_1402;
    var varData_1404 = {};
    var varData_1405 = {
      ArrUtils: () => varData_1409
    };
    varData_539(varData_1404, varData_1405);
    var varData_1406 = (param_1) => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const roundedVal = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[roundedVal]] = [param_1[roundedVal], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_1407 = (param_1, param_2) => {
      const itemList_22 = [];
      for (let numericVal_91 = 0; numericVal_91 < param_2; numericVal_91++) {
        itemList_22.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return itemList_22;
    };
    var varData_1408 = {
      shuffleArray: varData_1406,
      getRandomElements: varData_1407
    };
    var varData_1409 = varData_1408;
    function handleAction_88(param_1, param_2) {
      const varData_1410 = "_";
      const varData_1411 = handleAction_89((param_1_1, param_2_1, ..._0xc9a957) => {
        return param_1(param_1_1, ..._0xc9a957);
      }, param_2);
      return {
        get: function(..._0x3740e7) {
          return varData_1411.get(varData_1410, ..._0x3740e7);
        },
        reset: function() {
          varData_1411.reset(varData_1410);
        }
      };
    }
    function handleAction_89(param_1, param_2) {
      const varData_1412 = param_2.timeToLive || 6e4;
      const varData_1413 = {};
      const varData_1414 = param_2.immediateResolve || false;
      async function handleAction_90(param_1_1, ..._0x26e98b) {
        let varData_1415 = varData_1413[param_1_1];
        if (!varData_1415) {
          varData_1415 = {
            value: null,
            lastUpdated: 0
          };
          varData_1413[param_1_1] = varData_1415;
        }
        const timestamp = Date.now();
        if (varData_1415.lastUpdated === 0 || timestamp - varData_1415.lastUpdated > varData_1412) {
          const [_0x365031, _0x4fc785] = await param_1(varData_1415, param_1_1, ..._0x26e98b);
          if (_0x365031) {
            varData_1415.lastUpdated = timestamp;
            varData_1415.value = _0x4fc785;
          }
          return _0x4fc785;
        }
        if (varData_1414) {
          return Promise.resolve(varData_1415.value);
        } else {
          return await new Promise((param_1_2) => setTimeout(() => param_1_2(varData_1415.value), 0));
        }
      }
      return {
        get: async function(param_1_1, ..._0x2d85a9) {
          return await handleAction_90(param_1_1, ..._0x2d85a9);
        },
        reset: function(param_1_1) {
          const varData_1416 = varData_1413[param_1_1];
          if (varData_1416) {
            varData_1416.lastUpdated = 0;
          }
        },
        clear: function() {
          for (const varData_1417 in varData_1413) {
            delete varData_1413[varData_1417];
          }
        }
      };
    }
    function handleAction_91() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_85();
      } else {
        return new varData_531(4).toString();
      }
    }
    function handleAction_92(param_1) {
      return varData_108(param_1, varData_108.URL);
    }
    function handleAction_93(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_1418 = Date.now() - timestamp > param_2;
          if (param_1() || varData_1418) {
            clearInterval(intervalId);
            return param_1_1(varData_1418);
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
    var varData_1419 = {
      cache: handleAction_88,
      cacheableMap: handleAction_89,
      waitForCondition: handleAction_93,
      getUUID: handleAction_91,
      getStringHash: handleAction_92,
      wait: handleAction_94,
      waitForNextFrame: handleAction_95,
      deflate: varData_521,
      inflate: varData_525,
      ...varData_1257,
      ...varData_1404
    };
    var varData_1420 = varData_1419;
    var varData_1421 = ((param_1) => {
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
    })(varData_1421 || {});
    var varData_1422 = {};
    var varData_1423 = (param_1, param_2) => "__cfx_export_" + param_1 + "_" + param_2;
    var varData_1424 = new Proxy((param_1, param_2) => {
      const varData_1425 = (param_1_1, ..._0x3f6217) => {
        const varData_1426 = param_2(..._0x3f6217);
        if (varData_1426 instanceof Promise) {
          varData_1426.then((param_1_2) => param_1_1(param_1_2));
        } else {
          param_1_1(varData_1426);
        }
      };
      const resourceName2 = GetCurrentResourceName();
      if (resourceName2 == void 0) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      }
      on(varData_1423(resourceName2, param_1), (param_1_1) => {
        param_1_1(varData_1425);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1422[param_2] == void 0) {
          varData_1422[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1427 = param_2_1 + "_async";
            return (..._0x5d05db) => {
              return new Promise(async (param_1_2, param_2_2) => {
                const varData_1428 = await varData_1420.waitForCondition(() => GetResourceState(param_2) === "started", 6e4);
                if (varData_1428) {
                  return param_2_2("Resource " + param_2 + " is not running");
                }
                if (varData_1422[param_2][varData_1427] === void 0) {
                  emit(varData_1423(param_2, param_2_1), (param_1_3) => {
                    varData_1422[param_2][varData_1427] = param_1_3;
                  });
                  const varData_1429 = await varData_1420.waitForCondition(() => varData_1422[param_2][varData_1427] !== void 0, 1e3);
                  if (varData_1429) {
                    return param_2_2("Failed to get export " + param_2_1 + " from resource " + param_2);
                  }
                }
                try {
                  varData_1422[param_2][varData_1427](param_1_2, ..._0x5d05db);
                } catch (err) {
                  param_2_2(err);
                }
              });
            };
          }
        });
      }
    });
    var varData_1430 = new Proxy((param_1, param_2) => {
      const resourceName2 = GetCurrentResourceName();
      if (resourceName2 == void 0) {
        throw new Error("Failed to get resource name, are you sure you are using this in a fivem resource?");
      } else if (typeof param_2 !== "function") {
        throw new Error("Callback is not a function");
      } else if (typeof param_1 !== "string") {
        throw new Error("Export name must be a string");
      }
      on(varData_1423(resourceName2, param_1), (param_1_1) => {
        param_1_1(param_2);
      });
    }, {
      apply: (param_1, param_2, param_3) => {
        param_1(...param_3);
      },
      get: (param_1, param_2) => {
        if (varData_1422[param_2] == void 0) {
          varData_1422[param_2] = {};
        }
        return new Proxy({}, {
          get: (param_1_1, param_2_1) => {
            const varData_1431 = param_2_1 + "_sync";
            if (varData_1422[param_2][varData_1431] === void 0) {
              emit(varData_1423(param_2, param_2_1), (param_1_2) => {
                varData_1422[param_2][varData_1431] = param_1_2;
              });
              if (varData_1422[param_2][varData_1431] === void 0) {
                if (GetResourceState(param_2) !== "started") {
                  throw new Error("Resource " + param_2 + " is not running");
                } else {
                  throw new Error("No such export " + param_2_1 + " in resource " + param_2);
                }
              }
            }
            return (..._0x2e7da0) => {
              try {
                return varData_1422[param_2][varData_1431](..._0x2e7da0);
              } catch (err) {
                throw new Error("An error occurred while calling export " + param_2_1 + " of resource " + param_2 + " - see above for details");
              }
            };
          }
        });
      }
    });
    on("onResourceStop", (param_1) => varData_1422[param_1] = void 0);
    var varData_1432 = {
      Async: varData_1424,
      Sync: varData_1430
    };
    var varData_1433 = varData_1432;
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
        const varData_1434 = varData_1433.Sync.config.GetModuleConfig(param_1);
        if (varData_1434 === void 0) {
          return;
        }
        dataMap.set(param_1, varData_1434);
        if (!dataSet.has(param_1)) {
          dataSet.add(param_1);
        }
      }
      const varData_1435 = dataMap.get(param_1);
      if (param_2) {
        if (varData_1435 == null) {
          return void 0;
        } else {
          return varData_1435[param_2];
        }
      } else {
        return varData_1435;
      }
    }
    function handleAction_98(param_1) {
      return handleAction_97(resourceName, param_1);
    }
    function handleAction_99() {
      return varData_1433.Sync.config.IsConfigReady();
    }
    var varData_1436 = {
      IsConfigLoaded: handleAction_96,
      GetModuleConfig: handleAction_97,
      GetResourceConfig: handleAction_98,
      IsConfigReady: handleAction_99
    };
    var varData_1437 = varData_1436;
    var varData_1438 = varData_543(varData_1255());
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
    var varData_1457;
    var varData_1458;
    var varData_1459 = class {
      constructor(param_1, param_2) {
        varData_546(this, varData_1443);
        varData_546(this, varData_1445);
        varData_546(this, varData_1447);
        varData_546(this, varData_1449);
        varData_546(this, varData_1451);
        varData_546(this, varData_1453);
        varData_546(this, varData_1455);
        varData_546(this, varData_1457);
        varData_546(this, varData_1439, void 0);
        varData_546(this, varData_1440, void 0);
        varData_546(this, varData_1441, void 0);
        varData_546(this, varData_1442, {});
        const varData_1460 = varData_549(this, varData_1451, varData_1452).call(this, param_1);
        const varData_1461 = varData_549(this, varData_1455, varData_1456).call(this, varData_1460, param_2);
        const [_0x50ce5d, _0xb2345f, _0x497a98] = varData_1461.split(":").map((param_1_1) => param_1_1.length > 0 ? param_1_1 : void 0);
        varData_547(this, varData_1439, _0x50ce5d);
        varData_547(this, varData_1440, _0xb2345f);
        varData_547(this, varData_1441, _0x497a98);
      }
      hashString(param_1) {
        return param_1;
        var varData_1462;
        const varData_1463 = varData_545(this, varData_1443, varData_1444);
        const varData_1464 = (varData_1462 = varData_545(this, varData_1442)[varData_1463]) == null ? void 0 : varData_1462[param_1];
        if (varData_1464) {
          return varData_1464;
        }
        if (!varData_545(this, varData_1442)[varData_1463]) {
          varData_545(this, varData_1442)[varData_1463] = {};
        }
        const varData_1465 = varData_549(this, varData_1449, varData_1450).call(this, (0, varData_1438.HmacMD5)(param_1, varData_1463).toString());
        varData_545(this, varData_1442)[varData_1463][param_1] = varData_1465;
        if (IsDuplicityVersion()) {
          console.log("[SDK] Hash Debug | Event: " + param_1 + " | Hash: " + varData_1465);
        }
        return varData_1465;
      }
      encode(param_1) {
        return JSON.stringify(param_1);
        let varData_1466;
        const varData_1467 = varData_545(this, varData_1447, varData_1448);
        try {
          varData_1466 = varData_549(this, varData_1453, varData_1454).call(this, JSON.stringify(param_1), varData_1467);
        } catch (err) {
          console.error("Failed to encode payload");
        }
        return varData_1466;
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
        let varData_1468;
        const varData_1469 = varData_545(this, varData_1445, varData_1446);
        try {
          varData_1468 = JSON.parse(varData_549(this, varData_1455, varData_1456).call(this, param_1, varData_1469));
        } catch (err) {
          console.error("Failed to decode payload");
        }
        return varData_1468;
      }
    };
    varData_1439 = /* @__PURE__ */ new WeakMap();
    varData_1440 = /* @__PURE__ */ new WeakMap();
    varData_1441 = /* @__PURE__ */ new WeakMap();
    varData_1442 = /* @__PURE__ */ new WeakMap();
    varData_1443 = /* @__PURE__ */ new WeakSet();
    varData_1444 = function() {
      return varData_545(this, varData_1439) ?? varData_549(this, varData_1457, varData_1458).call(this);
    };
    varData_1445 = /* @__PURE__ */ new WeakSet();
    varData_1446 = function() {
      return varData_545(this, varData_1440) ?? varData_549(this, varData_1457, varData_1458).call(this);
    };
    varData_1447 = /* @__PURE__ */ new WeakSet();
    varData_1448 = function() {
      return varData_545(this, varData_1441) ?? varData_549(this, varData_1457, varData_1458).call(this);
    };
    varData_1449 = /* @__PURE__ */ new WeakSet();
    varData_1450 = function(param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1438.enc.Base64.stringify(varData_1438.enc.Utf8.parse(param_1));
    };
    varData_1451 = /* @__PURE__ */ new WeakSet();
    varData_1452 = function(param_1) {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1438.enc.Utf8.stringify(varData_1438.enc.Base64.parse(param_1));
    };
    varData_1453 = /* @__PURE__ */ new WeakSet();
    varData_1454 = function(param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1438.AES.encrypt(param_1, param_2).toString();
    };
    varData_1455 = /* @__PURE__ */ new WeakSet();
    varData_1456 = function(param_1, param_2) {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1438.AES.decrypt(param_1, param_2).toString(varData_1438.enc.Utf8);
    };
    varData_1457 = /* @__PURE__ */ new WeakSet();
    varData_1458 = function(_0x4bac4f = 128) {
      return varData_1438.lib.WordArray.random(_0x4bac4f / 8).toString();
    };
    var varData_1470;
    var varData_1471 = class {
      constructor() {
        varData_546(this, varData_1470, void 0);
        const resourceName_1 = GetCurrentResourceName();
        const varData_1472 = varData_1420.getStringHash("__npx_sdk:" + resourceName_1 + ":token");
        const varData_1473 = GetConvar(varData_1472, "");
        varData_547(this, varData_1470, new varData_1459(varData_1473, "0x1B3E255F"));
      }
      on(param_1, param_2) {
        const varData_1474 = varData_545(this, varData_1470).hashString(param_1);
        return on(varData_1474, param_2);
      }
      onNet(param_1, param_2) {
        const varData_1475 = varData_545(this, varData_1470).hashString(param_1);
        onNet(varData_1475, param_2);
        const varData_1476 = varData_545(this, varData_1470).hashString(param_1 + "-c");
        onNet(varData_1476, (param_1_1) => {
          const varData_1477 = varData_1420.inflate(new Uint8Array(param_1_1));
          const varData_1478 = msgpack_unpack(varData_1477);
          return param_2(...varData_1478);
        });
      }
      emit(param_1, ..._0x3d932a) {
        const varData_1479 = varData_545(this, varData_1470).hashString(param_1);
        return emit(varData_1479, ..._0x3d932a);
      }
      emitNet(param_1, ..._0x2156b3) {
        let varData_1480 = msgpack_pack(_0x2156b3);
        let varData_1481 = varData_1480.length;
        const varData_1482 = varData_545(this, varData_1470).hashString(param_1);
        if (varData_1481 < 16e3) {
          TriggerServerEventInternal(varData_1482, varData_1480, varData_1480.length);
        } else {
          TriggerLatentServerEventInternal(varData_1482, varData_1480, varData_1480.length, 1024e3);
        }
      }
    };
    varData_1470 = /* @__PURE__ */ new WeakMap();
    var varData_1483 = new varData_1471();
    var varData_1484 = {
      warning: 1,
      log: 2,
      error: 3,
      debug: 4
    };
    var varData_1485 = GetConvar(GetCurrentResourceName() + "_logLevel", "");
    var varData_1486 = GetConvar("sv_loglevel", "warning");
    (() => {
      varData_1486 = (varData_1485 == null ? void 0 : varData_1485.length) > 0 ? varData_1485 : varData_1486;
      if (!varData_1484[varData_1486]) {
        throw new Error("Invalid log level: " + varData_1486);
      }
    })();
    var varData_1487 = () => varData_1484[varData_1486] >= varData_1484.warning;
    var varData_1488 = () => varData_1484[varData_1486] >= varData_1484.log;
    var varData_1489 = () => varData_1484[varData_1486] >= varData_1484.error;
    var varData_1490 = () => varData_1486 === "debug";
    var varData_1491 = {
      warning: (param_1, ..._0x2bf305) => {
        if (!varData_1487()) {
          return;
        }
        console.log("^3[WARNING] ^7" + param_1, ..._0x2bf305, "^0");
      },
      log: (param_1, ..._0x6793d0) => {
        if (!varData_1488()) {
          return;
        }
        console.log("^5[nopixel] ^7" + param_1, ..._0x6793d0, "^0");
      },
      debug: (param_1, ..._0x3bf4fd) => {
        if (!varData_1490()) {
          return;
        }
        console.log("^2[D] " + param_1, ..._0x3bf4fd, "^0");
      },
      error: (param_1, ..._0x397c59) => {
        if (!varData_1489()) {
          return;
        }
        console.log("^1[ERROR] " + param_1, ..._0x397c59, "^0");
      }
    };
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
    var varData_1502;
    var varData_1503;
    var varData_1504 = class {
      constructor() {
        varData_546(this, varData_1498);
        varData_546(this, varData_1500);
        varData_546(this, varData_1502);
        varData_546(this, varData_1492, void 0);
        varData_546(this, varData_1493, void 0);
        varData_546(this, varData_1494, void 0);
        varData_546(this, varData_1495, void 0);
        varData_546(this, varData_1496, void 0);
        varData_546(this, varData_1497, void 0);
        varData_547(this, varData_1492, false);
        varData_547(this, varData_1493, /* @__PURE__ */ new Map());
        varData_547(this, varData_1494, /* @__PURE__ */ new Set());
        varData_547(this, varData_1495, GetGameTimer());
        varData_547(this, varData_1496, GetCurrentResourceName());
        const varData_1505 = varData_1420.getStringHash("__npx_sdk:" + varData_545(this, varData_1496) + ":token");
        const varData_1506 = GetConvar(varData_1505, "");
        varData_547(this, varData_1497, new varData_1459(varData_1506, "0x1B3E255F"));
        varData_549(this, varData_1502, varData_1503).call(this);
      }
      register(param_1, param_2) {
        if (varData_545(this, varData_1494).has(param_1)) {
          return varData_1491.error("[RPC] Handler already registered | " + param_1);
        }
        varData_545(this, varData_1494).add(param_1);
        varData_549(this, varData_1498, varData_1499).call(this, "__rpc_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1507;
          let varData_1508;
          const varData_1509 = GetInvokingResource();
          if (varData_1509) {
            return;
          }
          const varData_1510 = varData_545(this, varData_1497).decode(param_1_1);
          if (!(varData_1510 == null ? void 0 : varData_1510.id) || !(varData_1510 == null ? void 0 : varData_1510.origin)) {
            return varData_1491.error("[RPC] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1507 = await param_2(...param_2_1);
            varData_1508 = true;
          } catch (err) {
            varData_1507 = err.message;
            varData_1508 = false;
          }
          varData_549(this, varData_1500, varData_1501).call(this, "__rpc_res:" + varData_1510.origin, varData_1510.id, [varData_1508, varData_1507]);
        });
      }
      execute(param_1, ..._0x290bf4) {
        const varData_1511 = {
          id: ++varData_548(this, varData_1495)._,
          origin: varData_545(this, varData_1496)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let timerId = setTimeout(() => param_2(new Error("RPC timed out | " + param_1)), 6e4);
          var varData_1512 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: timerId
          };
          varData_545(this, varData_1493).set(varData_1511.id, varData_1512);
        });
        promise.finally(() => varData_545(this, varData_1493).delete(varData_1511.id));
        varData_549(this, varData_1500, varData_1501).call(this, "__rpc_req:" + param_1, varData_545(this, varData_1497).encode(varData_1511), _0x290bf4);
        return promise;
      }
      executeCustom(param_1, param_2, ..._0x10653d) {
        const varData_1513 = {
          id: ++varData_548(this, varData_1495)._,
          origin: varData_545(this, varData_1496)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let timerId = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 6e4);
          var varData_1514 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: timerId
          };
          varData_545(this, varData_1493).set(varData_1513.id, varData_1514);
        });
        promise.finally(() => varData_545(this, varData_1493).delete(varData_1513.id));
        varData_549(this, varData_1500, varData_1501).call(this, "__rpc_req:" + param_1, varData_545(this, varData_1497).encode(varData_1513), _0x10653d);
        return promise;
      }
    };
    varData_1492 = /* @__PURE__ */ new WeakMap();
    varData_1493 = /* @__PURE__ */ new WeakMap();
    varData_1494 = /* @__PURE__ */ new WeakMap();
    varData_1495 = /* @__PURE__ */ new WeakMap();
    varData_1496 = /* @__PURE__ */ new WeakMap();
    varData_1497 = /* @__PURE__ */ new WeakMap();
    varData_1498 = /* @__PURE__ */ new WeakSet();
    varData_1499 = function(param_1, param_2) {
      const varData_1515 = varData_545(this, varData_1497).hashString(param_1);
      onNet(varData_1515, param_2);
      const varData_1516 = varData_545(this, varData_1497).hashString(param_1 + "-c");
      onNet(varData_1516, (param_1_1) => {
        const varData_1517 = varData_1420.inflate(new Uint8Array(param_1_1));
        const varData_1518 = msgpack_unpack(varData_1517);
        return param_2(...varData_1518);
      });
    };
    varData_1500 = /* @__PURE__ */ new WeakSet();
    varData_1501 = function(param_1, ..._0x58183d) {
      let varData_1519 = msgpack_pack(_0x58183d);
      let varData_1520 = varData_1519.length;
      const varData_1521 = varData_545(this, varData_1497).hashString(param_1);
      if (varData_1520 < 16e3) {
        TriggerServerEventInternal(varData_1521, varData_1519, varData_1519.length);
      } else {
        TriggerLatentServerEventInternal(varData_1521, varData_1519, varData_1519.length, 1024e3);
      }
    };
    varData_1502 = /* @__PURE__ */ new WeakSet();
    varData_1503 = function() {
      if (varData_545(this, varData_1492)) {
        return varData_1491.error("SDK RPC handlers already initialized");
      }
      varData_549(this, varData_1498, varData_1499).call(this, "__rpc_res:" + varData_545(this, varData_1496), (param_1, [_0xa33b23, _0xd0263a]) => {
        const varData_1522 = varData_545(this, varData_1493).get(param_1);
        if (!varData_1522) {
          return;
        }
        clearTimeout(varData_1522.timeout);
        if (_0xa33b23) {
          varData_1522.resolve(_0xd0263a);
        } else {
          varData_1522.reject(new Error(_0xd0263a));
        }
      });
      varData_547(this, varData_1492, true);
      varData_1491.debug("SDK RPC handlers initialized");
    };
    var varData_1523 = new varData_1504();
    var varData_1524 = varData_543(varData_1255());
    var varData_1525 = (_0x3a0daa = 128) => {
      return varData_1524.lib.WordArray.random(_0x3a0daa / 8).toString();
    };
    var varData_1526 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1524.AES.encrypt(param_1, param_2).toString();
    };
    var varData_1527 = (param_1, param_2) => {
      if (typeof param_1 !== "string" || typeof param_2 !== "string") {
        return "";
      }
      return varData_1524.AES.decrypt(param_1, param_2).toString(varData_1524.enc.Utf8);
    };
    var varData_1528 = (param_1) => {
      if (typeof param_1 !== "string") {
        return "";
      }
      return varData_1524.enc.Base64.stringify(varData_1524.enc.Utf8.parse(param_1));
    };
    var varData_1529 = (param_1, param_2) => {
      return varData_1528((0, varData_1524.HmacMD5)(param_1, param_2).toString());
    };
    var varData_1530 = {};
    var varData_1531 = (param_1, _0x3b2fa2 = varData_1525()) => {
      if (varData_1530[param_1] === void 0) {
        varData_1530[param_1] = varData_1529(param_1, _0x3b2fa2);
      }
      return varData_1530[param_1];
    };
    var varData_1532 = (param_1, _0x5057ac = varData_1525()) => {
      try {
        return varData_1526(JSON.stringify(param_1), _0x5057ac);
      } catch (err) {
        console.error("Failed to encode payload");
      }
    };
    var varData_1533 = (param_1, _0x2003db = varData_1525()) => {
      try {
        return JSON.parse(varData_1527(param_1, _0x2003db));
      } catch (err) {
        console.error("Failed to decode payload");
      }
    };
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
    var varData_1550;
    var varData_1551;
    var varData_1552 = class {
      constructor() {
        varData_546(this, varData_1542);
        varData_546(this, varData_1544);
        varData_546(this, varData_1546);
        varData_546(this, varData_1548);
        varData_546(this, varData_1550);
        varData_546(this, varData_1534, void 0);
        varData_546(this, varData_1535, void 0);
        varData_546(this, varData_1536, void 0);
        varData_546(this, varData_1537, void 0);
        varData_546(this, varData_1538, void 0);
        varData_546(this, varData_1539, void 0);
        varData_546(this, varData_1540, void 0);
        varData_546(this, varData_1541, void 0);
        varData_547(this, varData_1534, GetCurrentResourceName());
        varData_547(this, varData_1535, varData_1525(64));
        varData_547(this, varData_1536, varData_1525(64));
        varData_547(this, varData_1537, varData_1525(64));
        varData_547(this, varData_1538, false);
        varData_547(this, varData_1539, 0);
        varData_547(this, varData_1540, []);
        varData_547(this, varData_1541, /* @__PURE__ */ new Map());
        varData_549(this, varData_1542, varData_1543).call(this, "__npx_sdk:init", varData_549(this, varData_1550, varData_1551).bind(this));
      }
      async register(param_1, param_2) {
        varData_549(this, varData_1544, varData_1545).call(this, "__nui_req:" + param_1, async (param_1_1, param_2_1) => {
          let varData_1553;
          let varData_1554;
          const varData_1555 = varData_1533(param_1_1, varData_545(this, varData_1536));
          if (!(varData_1555 == null ? void 0 : varData_1555.id) || !(varData_1555 == null ? void 0 : varData_1555.resource)) {
            return varData_1491.error("[NUI] " + param_1 + " - Invalid metadata received");
          }
          try {
            varData_1553 = await param_2(...param_2_1);
            varData_1554 = true;
          } catch (err) {
            varData_1553 = err.message;
            varData_1554 = false;
          }
          varData_549(this, varData_1548, varData_1549).call(this, "__nui_res:" + varData_1555.resource, varData_1555.id, [varData_1554, varData_1553]);
        });
      }
      remove(param_1) {
        const varData_1556 = varData_1531("__nui_req:" + param_1, varData_545(this, varData_1535));
        UnregisterRawNuiCallback(varData_1556);
      }
      async execute(param_1, ..._0x66edc5) {
        const varData_1557 = {
          id: ++varData_548(this, varData_1539)._,
          resource: varData_545(this, varData_1534)
        };
        const promise = new Promise((param_1_1, param_2) => {
          let varData_1558;
          if (varData_545(this, varData_1538)) {
            varData_1558 = setTimeout(() => param_1_1(null), 6e4);
          } else {
            varData_1558 = 0;
          }
          var varData_1559 = {
            resolve: param_1_1,
            reject: param_2,
            timeout: varData_1558
          };
          varData_545(this, varData_1541).set(varData_1557.id, varData_1559);
        });
        promise.finally(() => varData_545(this, varData_1541).delete(varData_1557.id));
        if (!varData_545(this, varData_1538)) {
          var varData_1560 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1557,
            args: _0x66edc5
          };
          varData_545(this, varData_1540).push(varData_1560);
        } else {
          varData_549(this, varData_1548, varData_1549).call(this, "__nui_req:" + param_1, varData_1532(varData_1557, varData_545(this, varData_1537)), _0x66edc5);
        }
        return promise;
      }
      async executeCustom(param_1, param_2, ..._0x360476) {
        const varData_1561 = {
          id: ++varData_548(this, varData_1539)._,
          resource: varData_545(this, varData_1534)
        };
        const promise = new Promise((param_1_1, param_2_1) => {
          let varData_1562;
          if (varData_545(this, varData_1538)) {
            varData_1562 = setTimeout(() => param_2_1(new Error("RPC timed out | " + param_1)), param_2.timeout ?? 6e4);
          } else {
            varData_1562 = 0;
          }
          var varData_1563 = {
            resolve: param_1_1,
            reject: param_2_1,
            timeout: varData_1562
          };
          varData_545(this, varData_1541).set(varData_1561.id, varData_1563);
        });
        promise.finally(() => varData_545(this, varData_1541).delete(varData_1561.id));
        if (!varData_545(this, varData_1538)) {
          var varData_1564 = {
            type: "execute",
            event: "__nui_req:" + param_1,
            metadata: varData_1561,
            args: _0x360476
          };
          varData_545(this, varData_1540).push(varData_1564);
        } else {
          varData_549(this, varData_1548, varData_1549).call(this, "__nui_req:" + param_1, varData_1532(varData_1561, varData_545(this, varData_1537)), _0x360476);
        }
        return promise;
      }
    };
    varData_1534 = /* @__PURE__ */ new WeakMap();
    varData_1535 = /* @__PURE__ */ new WeakMap();
    varData_1536 = /* @__PURE__ */ new WeakMap();
    varData_1537 = /* @__PURE__ */ new WeakMap();
    varData_1538 = /* @__PURE__ */ new WeakMap();
    varData_1539 = /* @__PURE__ */ new WeakMap();
    varData_1540 = /* @__PURE__ */ new WeakMap();
    varData_1541 = /* @__PURE__ */ new WeakMap();
    varData_1542 = /* @__PURE__ */ new WeakSet();
    varData_1543 = function(param_1, param_2) {
      RegisterNuiCallback(param_1, ({
        args: _0x123bd9
      }, param_2_1) => {
        param_2_1(true);
        return param_2(..._0x123bd9);
      });
    };
    varData_1544 = /* @__PURE__ */ new WeakSet();
    varData_1545 = function(param_1, param_2) {
      if (varData_545(this, varData_1538)) {
        const varData_1565 = varData_1531(param_1, varData_545(this, varData_1535));
        return varData_549(this, varData_1542, varData_1543).call(this, varData_1565, param_2);
      }
      var varData_1566 = {
        type: "on",
        event: param_1,
        callback: param_2
      };
      varData_545(this, varData_1540).push(varData_1566);
    };
    varData_1546 = /* @__PURE__ */ new WeakSet();
    varData_1547 = function(param_1, ..._0x1089cf) {
      var varData_1567 = {
        event: param_1,
        args: _0x1089cf
      };
      SendNuiMessage(JSON.stringify(varData_1567, null));
    };
    varData_1548 = /* @__PURE__ */ new WeakSet();
    varData_1549 = function(param_1, ..._0x1a4cc6) {
      if (varData_545(this, varData_1538)) {
        const varData_1568 = varData_1531(param_1, varData_545(this, varData_1535));
        return varData_549(this, varData_1546, varData_1547).call(this, varData_1568, ..._0x1a4cc6);
      }
      var varData_1569 = {
        type: "emit",
        event: param_1,
        args: _0x1a4cc6
      };
      varData_545(this, varData_1540).push(varData_1569);
    };
    varData_1550 = /* @__PURE__ */ new WeakSet();
    varData_1551 = async function() {
      varData_547(this, varData_1538, true);
      varData_549(this, varData_1544, varData_1545).call(this, "__nui_res:" + varData_545(this, varData_1534), (param_1, [_0x4791fb, _0x438cff]) => {
        const varData_1570 = varData_545(this, varData_1541).get(param_1);
        if (!varData_1570) {
          return varData_1491.error("[NUI] Invalid response received");
        }
        clearTimeout(varData_1570.timeout);
        if (_0x4791fb) {
          varData_1570.resolve(_0x438cff);
        } else {
          varData_1570.reject(_0x438cff);
        }
      });
      varData_549(this, varData_1546, varData_1547).call(this, "__npx_sdk:ready", varData_1528(varData_545(this, varData_1535) + ":" + varData_545(this, varData_1536) + ":" + varData_545(this, varData_1537)));
      varData_1491.debug("[NUI] SDK initialized");
      for (const varData_1571 of varData_545(this, varData_1540)) {
        if (varData_1571.type === "on") {
          varData_549(this, varData_1544, varData_1545).call(this, varData_1571.event, varData_1571.callback);
        } else if (varData_1571.type === "emit") {
          setTimeout(() => varData_549(this, varData_1548, varData_1549).call(this, varData_1571.event, ...varData_1571.args), 1e3);
        } else if (varData_1571.type === "execute") {
          const varData_1572 = varData_545(this, varData_1541).get(varData_1571.metadata.id);
          if (!varData_1572) {
            varData_1491.error("[RPC] " + varData_1571.event + " - Failed to execute queued RPC call");
            continue;
          }
          varData_1572.timeout = setTimeout(() => varData_1572.reject(new Error("RPC timed out | " + varData_1571.event)), 6e4);
          setTimeout(() => varData_549(this, varData_1548, varData_1549).call(this, varData_1571.event, varData_1532(varData_1571.metadata, varData_545(this, varData_1537)), varData_1571.args), 1e3);
        }
      }
    };
    var varData_1573;
    var varData_1574;
    var varData_1575;
    var varData_1576 = class {
      constructor(param_1) {
        varData_546(this, varData_1573, void 0);
        varData_546(this, varData_1574, void 0);
        varData_546(this, varData_1575, /* @__PURE__ */ new Map());
        varData_547(this, varData_1573, param_1);
        varData_547(this, varData_1574, false);
        const resourceName_1 = GetCurrentResourceName();
        on("onResourceStop", (param_1_1) => {
          if (param_1_1 === resourceName_1) {
            for (const [_0xcef469, _0x456f47] of varData_545(this, varData_1575).entries()) {
              varData_1433.Sync[varData_545(this, varData_1573)].removeNuiEvent(_0xcef469);
            }
          }
        });
        on("onResourceStart", async (param_1_1) => {
          if (param_1_1 === varData_545(this, varData_1573)) {
            await varData_1420.waitForCondition(() => GetResourceState(varData_545(this, varData_1573)) === "started", 1e4);
            if (varData_545(this, varData_1574)) {
              for (const [_0x3a11b4, _0x5d4eb1] of varData_545(this, varData_1575).entries()) {
                varData_1433.Sync[varData_545(this, varData_1573)].removeNuiEvent(_0x3a11b4);
                this.register(_0x3a11b4, _0x5d4eb1);
              }
            }
            varData_547(this, varData_1574, true);
          }
          if (param_1_1 === resourceName_1) {
            await varData_1420.waitForCondition(() => GetResourceState(varData_545(this, varData_1573)) === "started", 1e4);
            varData_547(this, varData_1574, true);
          }
        });
      }
      async execute(param_1, ..._0x37ef8e) {
        return await varData_1433.Async[varData_545(this, varData_1573)].sendNuiEvent(param_1, _0x37ef8e);
      }
      async register(param_1, param_2) {
        await varData_1420.waitForCondition(() => varData_545(this, varData_1574), 1e4);
        const varData_1577 = varData_1433.Sync[varData_545(this, varData_1573)].registerNuiEvent(param_1, param_2);
        if (varData_1577) {
          varData_545(this, varData_1575).set(param_1, param_2);
        }
      }
    };
    varData_1573 = /* @__PURE__ */ new WeakMap();
    varData_1574 = /* @__PURE__ */ new WeakMap();
    varData_1575 = /* @__PURE__ */ new WeakMap();
    var varData_1578 = class {
      constructor() {
        const varData_1579 = async (param_1, param_2) => {
          return await varData_1584.execute(param_1, ...param_2);
        };
        varData_1433.Async("sendNuiEvent", varData_1579);
        const varData_1580 = (param_1, param_2) => {
          varData_1584.register(param_1, param_2);
          return true;
        };
        varData_1433.Sync("registerNuiEvent", varData_1580);
        const varData_1581 = (param_1) => {
          varData_1584.remove(param_1);
        };
        varData_1433.Sync("removeNuiEvent", varData_1581);
      }
    };
    var varData_1582 = null;
    var varData_1583 = null;
    var varData_1584 = new varData_1552();
    var varData_1585;
    var varData_1586;
    var varData_1587;
    var varData_1588 = class {
      constructor() {
        varData_546(this, varData_1585, void 0);
        varData_546(this, varData_1586, void 0);
        varData_546(this, varData_1587, void 0);
        varData_547(this, varData_1587, false);
        varData_1584.register("__npx_sdk:sockets:init", async () => {
          varData_1491.debug("Sockets", "Initializing sockets...");
          if (varData_545(this, varData_1587)) {
            return {
              url: varData_545(this, varData_1585),
              API_KEY: varData_545(this, varData_1586)
            };
          }
          const varData_1589 = await new Promise((param_1) => {
            emit("__npx_core:sockets:init", param_1);
          });
          if (!(varData_1589 == null ? void 0 : varData_1589.API_URL) || !(varData_1589 == null ? void 0 : varData_1589.API_KEY)) {
            return;
          }
          varData_547(this, varData_1585, varData_1589.API_URL);
          varData_547(this, varData_1586, varData_1589.API_KEY);
          varData_547(this, varData_1587, true);
          varData_1491.debug("Sockets", "Sockets initialized.");
          return varData_1589;
        });
      }
      register(param_1, param_2) {
        varData_1584.execute("__npx_sdk:sockets:register", param_1);
        varData_1584.register("__npx_sdk:sockets:pipe:" + param_1, async (param_1_1) => {
          return param_2(param_1_1);
        });
      }
      async execute(param_1, param_2) {
        return varData_1584.execute("__npx_sdk:sockets:execute", param_1, param_2);
      }
    };
    varData_1585 = /* @__PURE__ */ new WeakMap();
    varData_1586 = /* @__PURE__ */ new WeakMap();
    varData_1587 = /* @__PURE__ */ new WeakMap();
    var varData_1590 = new varData_1588();
    var varData_1591 = {
      HasItem: async (param_1, param_2) => {
        return await varData_1433.Sync.inventory.HasItem(param_1, param_2);
      },
      GetItemStacks: async (param_1, param_2) => {
        return await varData_1433.Sync.inventory.GetItemStacks(param_1, param_2);
      },
      GetAllItemStacks: async (param_1) => {
        return await varData_1433.Sync.inventory.GetAllItemStacks(param_1);
      },
      GetItemList: async () => {
        return await varData_1433.Sync.inventory.GetItemList();
      },
      GetPlayerInventories: async () => {
        return await varData_1433.Sync.inventory.GetPlayerInventories();
      },
      GetPlayerInventoriesWeight: async () => {
        return await varData_1433.Sync.inventory.GetPlayerInventoriesWeight();
      },
      GetWeaponsList: () => {
        return varData_1433.Sync.inventory.GetWeaponsList();
      },
      GetWeapon: (param_1) => {
        return varData_1433.Sync.inventory.GetWeapon(param_1);
      },
      GetWeaponByItemStack: (param_1) => {
        return varData_1433.Sync.inventory.GetWeaponByItemStack(param_1);
      },
      OpenInventory: (param_1, param_2) => {
        varData_1433.Sync.inventory.OpenInventory(param_1, param_2);
      },
      UseBodySlot: (param_1) => {
        return varData_1433.Async.inventory.UseBodySlot(param_1);
      },
      SetBodySlotDisabled: (param_1, param_2, param_3) => {
        varData_1433.Sync.inventory.SetBodySlotDisabled(param_1, param_2, param_3);
      },
      IsBodySlotDisabled: (param_1, param_2) => {
        return varData_1433.Sync.inventory.IsBodySlotDisabled(param_1, param_2);
      }
    };
    var varData_1592 = {};
    var varData_1593 = {
      Activity: () => varData_1670,
      ActivityObjective: () => varData_1644,
      ActivityTask: () => varData_1623,
      Cache: () => varData_1276,
      Group: () => varData_1702,
      GroupManager: () => varData_1727,
      GroupMember: () => varData_1717,
      PolyZone: () => varData_1345,
      Thread: () => varData_1594,
      Vector2: () => varData_1391,
      Vector3: () => varData_1273
    };
    varData_539(varData_1592, varData_1593);
    var varData_1594 = class {
      constructor(param_1, param_2, _0x114815 = "interval") {
        this.callback = param_1;
        this.delay = param_2;
        this.mode = _0x114815;
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
        const varData_1595 = this.hooks.get("preStart") ?? [];
        try {
          for (const varData_1596 of varData_1595) {
            if (!this.aborted) {
              await varData_1596.call(this);
            }
          }
        } catch (err) {
          this.aborted = true;
          console.log("Error while calling pre-start hook", err.message);
        }
        if (this.aborted) {
          try {
            const varData_1597 = this.hooks.get("startAborted") ?? [];
            for (const varData_1598 of varData_1597) {
              await varData_1598.call(this);
            }
          } catch (err) {
            console.log("Error while calling start-aborted hook", err.message);
          }
          return;
        }
        this.active = true;
        const varData_1599 = this.hooks.get("active") ?? [];
        switch (this.mode) {
          case "tick": {
            this.threadId = setTick(async () => {
              this.tick += 1;
              try {
                await this.callback.call(this);
                for (const varData_1600 of varData_1599) {
                  await varData_1600.call(this);
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
                for (const varData_1601 of varData_1599) {
                  await varData_1601.call(this);
                }
              } catch (err) {
                console.log("Error while calling active hook", err.message);
              }
            }, this.delay);
            break;
          }
          case "timeout": {
            const varData_1602 = () => {
              if (this.active) {
                this.threadId = setTimeout(async () => {
                  this.tick += 1;
                  try {
                    await this.callback.call(this);
                    for (const varData_1603 of varData_1599) {
                      await varData_1603.call(this);
                    }
                  } catch (err) {
                    console.log("Error while calling active hook", err.message);
                  }
                  return varData_1602();
                }, this.delay);
              }
            };
            varData_1602();
            break;
          }
        }
        const varData_1604 = this.hooks.get("afterStart") ?? [];
        try {
          for (const varData_1605 of varData_1604) {
            await varData_1605.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-start hook", err.message);
        }
      }
      async stop() {
        if (!this.active) {
          return;
        }
        const varData_1606 = this.hooks.get("preStop") ?? [];
        try {
          for (const varData_1607 of varData_1606) {
            if (!this.aborted) {
              await varData_1607.call(this);
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
            const varData_1608 = this.hooks.get("stopAborted") ?? [];
            for (const varData_1609 of varData_1608) {
              await varData_1609.call(this);
            }
          } catch (err) {
            console.log("Error while calling stop-aborted hook", err.message);
          }
          return;
        }
        const varData_1610 = this.hooks.get("afterStop") ?? [];
        try {
          for (const varData_1611 of varData_1610) {
            await varData_1611.call(this);
          }
        } catch (err) {
          console.log("Error while calling after-stop hook", err.message);
        }
      }
      abort() {
        this.aborted = true;
      }
      addHook(param_1, param_2) {
        var varData_1612;
        if ((varData_1612 = this.hooks.get(param_1)) == null) {
        } else {
          varData_1612.push(param_2);
        }
      }
      setNextTick(param_1, param_2) {
        this.scheduled[param_1] = this.tick + param_2;
      }
      canTick(param_1) {
        return this.scheduled[param_1] === void 0 || this.tick >= this.scheduled[param_1];
      }
    };
    var varData_1613;
    var varData_1614;
    var varData_1615;
    var varData_1616;
    var varData_1617;
    var varData_1618;
    var varData_1619;
    var varData_1620;
    var varData_1621;
    var varData_1622;
    var varData_1623 = class {
      constructor(param_1, param_2) {
        varData_546(this, varData_1619);
        varData_546(this, varData_1621);
        varData_546(this, varData_1613, void 0);
        varData_546(this, varData_1614, void 0);
        varData_546(this, varData_1615, void 0);
        varData_546(this, varData_1616, void 0);
        varData_546(this, varData_1617, void 0);
        varData_546(this, varData_1618, void 0);
        varData_547(this, varData_1613, param_1.id);
        varData_547(this, varData_1614, param_2);
        varData_547(this, varData_1615, /* @__PURE__ */ new Map());
        varData_547(this, varData_1618, "pending");
        varData_547(this, varData_1616, param_1.required.map((param_1_1) => param_2.objectives.get(param_1_1)));
        varData_547(this, varData_1617, new Map(param_1.objectives.map((param_1_1) => [param_1_1, param_2.objectives.get(param_1_1)])));
        if (param_1.status !== "pending") {
          setTimeout(() => varData_549(this, varData_1619, varData_1620).call(this, param_1.status), 3e3);
        }
        varData_1483.onNet("__npx_activities:" + varData_545(this, varData_1614).id + ":task:" + varData_545(this, varData_1613) + ":statusUpdate", varData_549(this, varData_1619, varData_1620).bind(this));
      }
      get id() {
        return varData_545(this, varData_1613);
      }
      onTaskStarted(param_1) {
        const varData_1624 = varData_545(this, varData_1615).get("onTaskStarted") ?? [];
        if (!varData_545(this, varData_1615).has("onTaskStarted")) {
          varData_545(this, varData_1615).set("onTaskStarted", varData_1624);
        }
        varData_1624.push(param_1);
      }
      onTaskEnded(param_1) {
        const varData_1625 = varData_545(this, varData_1615).get("onTaskEnded") ?? [];
        if (!varData_545(this, varData_1615).has("onTaskEnded")) {
          varData_545(this, varData_1615).set("onTaskEnded", varData_1625);
        }
        varData_1625.push(param_1);
      }
      emitEvent(param_1, ..._0x4d2fe9) {
        return varData_1523.execute("__npx_activities:" + varData_545(this, varData_1614).id + ":task:" + varData_545(this, varData_1613) + ":event", param_1, ..._0x4d2fe9);
      }
      toJSON() {
        return {
          id: varData_545(this, varData_1613),
          status: varData_545(this, varData_1618),
          objectives: [...varData_545(this, varData_1617).keys()],
          required: varData_545(this, varData_1616).map((param_1) => param_1.id)
        };
      }
      destroy() {
        varData_545(this, varData_1615).clear();
      }
    };
    varData_1613 = /* @__PURE__ */ new WeakMap();
    varData_1614 = /* @__PURE__ */ new WeakMap();
    varData_1615 = /* @__PURE__ */ new WeakMap();
    varData_1616 = /* @__PURE__ */ new WeakMap();
    varData_1617 = /* @__PURE__ */ new WeakMap();
    varData_1618 = /* @__PURE__ */ new WeakMap();
    varData_1619 = /* @__PURE__ */ new WeakSet();
    varData_1620 = function(param_1) {
      const varData_1626 = varData_545(this, varData_1618);
      varData_547(this, varData_1618, param_1);
      if (varData_1626 === "pending" && param_1 === "active") {
        varData_549(this, varData_1621, varData_1622).call(this, "onTaskStarted");
      } else if (varData_1626 === "active" && (param_1 === "completed" || param_1 === "failed")) {
        varData_549(this, varData_1621, varData_1622).call(this, "onTaskEnded", param_1 === "completed");
      }
      varData_549(this, varData_1621, varData_1622).call(this, "onStatusUpdate", param_1);
    };
    varData_1621 = /* @__PURE__ */ new WeakSet();
    varData_1622 = function(param_1, ..._0x40cec3) {
      const varData_1627 = varData_545(this, varData_1615).get(param_1);
      if (!varData_1627) {
        return;
      }
      for (const varData_1628 of varData_1627) {
        try {
          varData_1628.call(this, ..._0x40cec3);
        } catch (err) {
          console.error(err);
        }
      }
    };
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
    var varData_1642;
    var varData_1643;
    var varData_1644 = class {
      constructor(param_1, param_2) {
        varData_546(this, varData_1636);
        varData_546(this, varData_1638);
        varData_546(this, varData_1640);
        varData_546(this, varData_1642);
        varData_546(this, varData_1629, void 0);
        varData_546(this, varData_1630, void 0);
        varData_546(this, varData_1631, void 0);
        varData_546(this, varData_1632, void 0);
        varData_546(this, varData_1633, void 0);
        varData_546(this, varData_1634, void 0);
        varData_546(this, varData_1635, void 0);
        varData_547(this, varData_1629, param_1.id);
        varData_547(this, varData_1630, param_1.name);
        varData_547(this, varData_1631, param_1.description);
        varData_547(this, varData_1632, param_2);
        varData_547(this, varData_1633, /* @__PURE__ */ new Map());
        varData_547(this, varData_1634, param_1.status);
        varData_547(this, varData_1635, new Map(Object.entries(param_1.data ?? {})));
        varData_1483.onNet("__npx_activities:" + varData_545(this, varData_1632).id + ":objective:" + varData_545(this, varData_1629) + ":statusUpdate", varData_549(this, varData_1636, varData_1637).bind(this));
        varData_1483.onNet("__npx_activities:" + varData_545(this, varData_1632).id + ":objective:" + varData_545(this, varData_1629) + ":dataUpdate", varData_549(this, varData_1638, varData_1639).bind(this));
        varData_1483.onNet("__npx_activities:" + varData_545(this, varData_1632).id + ":objective:" + varData_545(this, varData_1629) + ":dataSet", varData_549(this, varData_1640, varData_1641).bind(this));
      }
      get id() {
        return varData_545(this, varData_1629);
      }
      get name() {
        return varData_545(this, varData_1630);
      }
      get description() {
        return varData_545(this, varData_1631);
      }
      get status() {
        return varData_545(this, varData_1634);
      }
      get activity() {
        return varData_545(this, varData_1632);
      }
      getData(param_1) {
        return varData_545(this, varData_1635).get(param_1);
      }
      onStatusUpdate(param_1) {
        const varData_1645 = varData_545(this, varData_1633).get("onStatusUpdate") ?? [];
        if (!varData_545(this, varData_1633).has("onStatusUpdate")) {
          varData_545(this, varData_1633).set("onStatusUpdate", varData_1645);
        }
        varData_1645.push(param_1);
      }
      onDataUpdate(param_1) {
        const varData_1646 = varData_545(this, varData_1633).get("onDataUpdate") ?? [];
        if (!varData_545(this, varData_1633).has("onDataUpdate")) {
          varData_545(this, varData_1633).set("onDataUpdate", varData_1646);
        }
        varData_1646.push(param_1);
      }
      toJSON() {
        return {
          id: varData_545(this, varData_1629),
          name: varData_545(this, varData_1630),
          description: varData_545(this, varData_1631),
          status: varData_545(this, varData_1634),
          data: Object.fromEntries(varData_545(this, varData_1635))
        };
      }
      destroy() {
        varData_545(this, varData_1633).clear();
      }
    };
    varData_1629 = /* @__PURE__ */ new WeakMap();
    varData_1630 = /* @__PURE__ */ new WeakMap();
    varData_1631 = /* @__PURE__ */ new WeakMap();
    varData_1632 = /* @__PURE__ */ new WeakMap();
    varData_1633 = /* @__PURE__ */ new WeakMap();
    varData_1634 = /* @__PURE__ */ new WeakMap();
    varData_1635 = /* @__PURE__ */ new WeakMap();
    varData_1636 = /* @__PURE__ */ new WeakSet();
    varData_1637 = function(param_1) {
      varData_547(this, varData_1634, param_1);
      varData_549(this, varData_1642, varData_1643).call(this, "onStatusUpdated", param_1);
    };
    varData_1638 = /* @__PURE__ */ new WeakSet();
    varData_1639 = function(param_1, param_2) {
      varData_545(this, varData_1635).set(param_1, param_2);
      varData_549(this, varData_1642, varData_1643).call(this, "onDataUpdate", param_1, param_2);
    };
    varData_1640 = /* @__PURE__ */ new WeakSet();
    varData_1641 = function(param_1) {
      for (const [_0x439aeb, _0x1b1946] of Object.entries(param_1)) {
        varData_545(this, varData_1635).set(_0x439aeb, _0x1b1946);
        varData_549(this, varData_1642, varData_1643).call(this, "onDataUpdate", _0x439aeb, _0x1b1946);
      }
    };
    varData_1642 = /* @__PURE__ */ new WeakSet();
    varData_1643 = function(param_1, ..._0x4f6e33) {
      const varData_1647 = varData_545(this, varData_1633).get(param_1);
      if (!varData_1647) {
        return;
      }
      for (const varData_1648 of varData_1647) {
        try {
          varData_1648.call(this, ..._0x4f6e33);
        } catch (err) {
          console.error(err);
        }
      }
    };
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
    var varData_1668;
    var varData_1669;
    var varData_1670 = class {
      constructor(param_1) {
        varData_546(this, varData_1658);
        varData_546(this, varData_1660);
        varData_546(this, varData_1662);
        varData_546(this, varData_1664);
        varData_546(this, varData_1666);
        varData_546(this, varData_1668);
        varData_546(this, varData_1649, void 0);
        varData_546(this, varData_1650, void 0);
        varData_546(this, varData_1651, void 0);
        varData_546(this, varData_1652, void 0);
        varData_546(this, varData_1653, void 0);
        varData_546(this, varData_1654, void 0);
        varData_546(this, varData_1655, void 0);
        varData_546(this, varData_1656, void 0);
        varData_546(this, varData_1657, void 0);
        varData_547(this, varData_1649, param_1.id);
        varData_547(this, varData_1650, param_1.code);
        varData_547(this, varData_1651, param_1.name);
        varData_547(this, varData_1652, param_1.description);
        varData_547(this, varData_1653, /* @__PURE__ */ new Map());
        varData_547(this, varData_1654, "pending");
        varData_547(this, varData_1655, param_1.deadline ? new Date(param_1.deadline) : null);
        varData_547(this, varData_1656, /* @__PURE__ */ new Map());
        varData_547(this, varData_1657, /* @__PURE__ */ new Map());
        if (param_1.status !== "pending") {
          setTimeout(() => varData_549(this, varData_1658, varData_1659).call(this, param_1.status), 3e3);
        }
        param_1.objectives.forEach((param_1_1) => varData_549(this, varData_1660, varData_1661).call(this, param_1_1));
        param_1.tasks.forEach((param_1_1) => varData_549(this, varData_1664, varData_1665).call(this, param_1_1));
        varData_1483.onNet("__npx_activities:" + varData_545(this, varData_1649) + ":statusUpdate", varData_549(this, varData_1658, varData_1659).bind(this));
        varData_1483.onNet("__npx_activities:" + varData_545(this, varData_1649) + ":objectiveAdded", varData_549(this, varData_1660, varData_1661).bind(this));
        varData_1483.onNet("__npx_activities:" + varData_545(this, varData_1649) + ":objectiveRemoved", varData_549(this, varData_1662, varData_1663).bind(this));
        varData_1483.onNet("__npx_activities:" + varData_545(this, varData_1649) + ":taskAdded", varData_549(this, varData_1664, varData_1665).bind(this));
        varData_1483.onNet("__npx_activities:" + varData_545(this, varData_1649) + ":taskRemoved", varData_549(this, varData_1666, varData_1667).bind(this));
      }
      get id() {
        return varData_545(this, varData_1649);
      }
      get status() {
        return varData_545(this, varData_1654);
      }
      get objectives() {
        return varData_545(this, varData_1657);
      }
      on(param_1, param_2) {
        const varData_1671 = varData_545(this, varData_1653).get(param_1) ?? [];
        if (!varData_545(this, varData_1653).has(param_1)) {
          varData_545(this, varData_1653).set(param_1, varData_1671);
        }
        varData_1671.push(param_2);
      }
      toJSON() {
        var varData_1672;
        return {
          id: varData_545(this, varData_1649),
          code: varData_545(this, varData_1650),
          name: varData_545(this, varData_1651),
          description: varData_545(this, varData_1652),
          status: varData_545(this, varData_1654),
          deadline: ((varData_1672 = varData_545(this, varData_1655)) == null ? void 0 : varData_1672.getTime()) ?? null,
          tasks: [...varData_545(this, varData_1656).values()].map((param_1) => param_1.toJSON()),
          objectives: [...varData_545(this, varData_1657).values()].map((param_1) => param_1.toJSON())
        };
      }
      destroy() {
        varData_545(this, varData_1656).forEach((param_1) => param_1.destroy());
        varData_545(this, varData_1657).forEach((param_1) => param_1.destroy());
        varData_545(this, varData_1656).clear();
        varData_545(this, varData_1657).clear();
        varData_545(this, varData_1653).clear();
      }
    };
    varData_1649 = /* @__PURE__ */ new WeakMap();
    varData_1650 = /* @__PURE__ */ new WeakMap();
    varData_1651 = /* @__PURE__ */ new WeakMap();
    varData_1652 = /* @__PURE__ */ new WeakMap();
    varData_1653 = /* @__PURE__ */ new WeakMap();
    varData_1654 = /* @__PURE__ */ new WeakMap();
    varData_1655 = /* @__PURE__ */ new WeakMap();
    varData_1656 = /* @__PURE__ */ new WeakMap();
    varData_1657 = /* @__PURE__ */ new WeakMap();
    varData_1658 = /* @__PURE__ */ new WeakSet();
    varData_1659 = function(param_1) {
      const varData_1673 = varData_545(this, varData_1654);
      varData_547(this, varData_1654, param_1);
      if (varData_1673 === "pending" && param_1 === "active") {
        varData_549(this, varData_1668, varData_1669).call(this, "onActivityStarted");
      } else if (param_1 === "completed" || param_1 === "failed") {
        varData_549(this, varData_1668, varData_1669).call(this, "onActivityEnded", param_1, param_1 === "completed");
      }
      varData_549(this, varData_1668, varData_1669).call(this, "onStatusUpdate", param_1);
    };
    varData_1660 = /* @__PURE__ */ new WeakSet();
    varData_1661 = function(param_1) {
      const varData_1674 = new varData_1644(param_1, this);
      varData_1674.onStatusUpdate((param_1_1) => varData_549(this, varData_1668, varData_1669).call(this, "onObjectiveStatusUpdate", varData_1674, param_1_1));
      varData_1674.onDataUpdate((param_1_1, param_2) => varData_549(this, varData_1668, varData_1669).call(this, "onObjectiveDataUpdate", varData_1674, param_1_1, param_2));
      varData_545(this, varData_1657).set(varData_1674.id, varData_1674);
      varData_549(this, varData_1668, varData_1669).call(this, "onObjectiveAdded", varData_1674);
    };
    varData_1662 = /* @__PURE__ */ new WeakSet();
    varData_1663 = function(param_1) {
      const varData_1675 = varData_545(this, varData_1657).get(param_1.id);
      if (!varData_1675) {
        return;
      }
      varData_545(this, varData_1657).delete(param_1.id);
      varData_549(this, varData_1668, varData_1669).call(this, "onObjectiveRemoved", varData_1675);
      varData_1675.destroy();
    };
    varData_1664 = /* @__PURE__ */ new WeakSet();
    varData_1665 = function(param_1) {
      const varData_1676 = new varData_1623(param_1, this);
      varData_1676.onTaskStarted(() => varData_549(this, varData_1668, varData_1669).call(this, "onTaskStarted", varData_1676));
      varData_1676.onTaskEnded((param_1_1) => varData_549(this, varData_1668, varData_1669).call(this, "onTaskEnded", varData_1676, param_1_1));
      varData_545(this, varData_1656).set(varData_1676.id, varData_1676);
      varData_549(this, varData_1668, varData_1669).call(this, "onTaskAdded", varData_1676);
    };
    varData_1666 = /* @__PURE__ */ new WeakSet();
    varData_1667 = function(param_1) {
      const varData_1677 = varData_545(this, varData_1656).get(param_1.id);
      if (!varData_1677) {
        return;
      }
      varData_545(this, varData_1656).delete(param_1.id);
      varData_549(this, varData_1668, varData_1669).call(this, "onTaskRemoved", varData_1677);
      varData_1677.destroy();
    };
    varData_1668 = /* @__PURE__ */ new WeakSet();
    varData_1669 = function(param_1, ..._0x20f54d) {
      const varData_1678 = varData_545(this, varData_1653).get(param_1);
      if (!varData_1678) {
        return;
      }
      for (const varData_1679 of varData_1678) {
        try {
          varData_1679.call(this, ..._0x20f54d);
        } catch (err) {
          console.error(err);
        }
      }
    };
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
    var varData_1700;
    var varData_1701;
    var varData_1702 = class {
      constructor(param_1) {
        varData_546(this, varData_1688);
        varData_546(this, varData_1690);
        varData_546(this, varData_1692);
        varData_546(this, varData_1694);
        varData_546(this, varData_1696);
        varData_546(this, varData_1698);
        varData_546(this, varData_1700);
        varData_546(this, varData_1680, void 0);
        varData_546(this, varData_1681, void 0);
        varData_546(this, varData_1682, void 0);
        varData_546(this, varData_1683, void 0);
        varData_546(this, varData_1684, void 0);
        varData_546(this, varData_1685, void 0);
        varData_546(this, varData_1686, void 0);
        varData_546(this, varData_1687, void 0);
        varData_547(this, varData_1680, param_1.id);
        varData_547(this, varData_1682, /* @__PURE__ */ new Map());
        varData_547(this, varData_1683, param_1.name);
        varData_547(this, varData_1684, param_1.capacity);
        varData_547(this, varData_1686, null);
        varData_547(this, varData_1687, new Map(Object.entries(param_1.data)));
        varData_547(this, varData_1681, /* @__PURE__ */ new Map());
        varData_547(this, varData_1685, null);
        for (const varData_1703 of param_1.members) {
          const varData_1704 = new varData_1717(varData_1703, this);
          varData_545(this, varData_1681).set(varData_1704.characterId, varData_1704);
          if (varData_1703.isLeader) {
            varData_547(this, varData_1685, varData_1704);
          }
        }
        if (param_1.activity) {
          setTimeout(() => varData_549(this, varData_1698, varData_1699).call(this, param_1.activity), 3e3);
        }
        varData_1483.onNet("__npx_groups:group:" + varData_545(this, varData_1680) + ":data:update", varData_549(this, varData_1690, varData_1691).bind(this));
        varData_1483.onNet("__npx_groups:group:" + varData_545(this, varData_1680) + ":activity:set", varData_549(this, varData_1698, varData_1699).bind(this));
        varData_1483.onNet("__npx_groups:group:" + varData_545(this, varData_1680) + ":group:update", varData_549(this, varData_1688, varData_1689).bind(this));
        varData_1483.onNet("__npx_groups:group:" + varData_545(this, varData_1680) + ":member:joined", varData_549(this, varData_1692, varData_1693).bind(this));
        varData_1483.onNet("__npx_groups:group:" + varData_545(this, varData_1680) + ":member:left", varData_549(this, varData_1694, varData_1695).bind(this));
        varData_1483.onNet("__npx_groups:group:" + varData_545(this, varData_1680) + ":member:update", varData_549(this, varData_1696, varData_1697).bind(this));
      }
      get id() {
        return varData_545(this, varData_1680);
      }
      get name() {
        return varData_545(this, varData_1683);
      }
      get capacity() {
        return varData_545(this, varData_1684);
      }
      get size() {
        return varData_545(this, varData_1681).size;
      }
      get leader() {
        return varData_545(this, varData_1685);
      }
      get members() {
        return [...varData_545(this, varData_1681).values()];
      }
      get activity() {
        return varData_545(this, varData_1686);
      }
      on(param_1, param_2) {
        const varData_1705 = varData_545(this, varData_1682).get(param_1) ?? [];
        if (!varData_545(this, varData_1682).has(param_1)) {
          varData_545(this, varData_1682).set(param_1, varData_1705);
        }
        varData_1705.push(param_2);
      }
      getValue(param_1) {
        return varData_545(this, varData_1687).get(param_1);
      }
      toJSON() {
        var varData_1706;
        return {
          id: varData_545(this, varData_1680),
          name: varData_545(this, varData_1683),
          capacity: varData_545(this, varData_1684),
          activity: ((varData_1706 = varData_545(this, varData_1686)) == null ? void 0 : varData_1706.toJSON()) ?? null,
          members: [...varData_545(this, varData_1681).values()].map((param_1) => param_1.toJSON()),
          data: Object.fromEntries(varData_545(this, varData_1687))
        };
      }
      destroy() {
        varData_545(this, varData_1682).clear();
        varData_545(this, varData_1681).clear();
        varData_545(this, varData_1687).clear();
      }
    };
    varData_1680 = /* @__PURE__ */ new WeakMap();
    varData_1681 = /* @__PURE__ */ new WeakMap();
    varData_1682 = /* @__PURE__ */ new WeakMap();
    varData_1683 = /* @__PURE__ */ new WeakMap();
    varData_1684 = /* @__PURE__ */ new WeakMap();
    varData_1685 = /* @__PURE__ */ new WeakMap();
    varData_1686 = /* @__PURE__ */ new WeakMap();
    varData_1687 = /* @__PURE__ */ new WeakMap();
    varData_1688 = /* @__PURE__ */ new WeakSet();
    varData_1689 = function(param_1) {
      varData_547(this, varData_1683, param_1.name);
      varData_547(this, varData_1684, param_1.capacity);
      varData_549(this, varData_1700, varData_1701).call(this, "group:update", this);
    };
    varData_1690 = /* @__PURE__ */ new WeakSet();
    varData_1691 = function(param_1, param_2) {
      varData_545(this, varData_1687).set(param_1, param_2);
      varData_549(this, varData_1700, varData_1701).call(this, "data:update", param_1, param_2);
    };
    varData_1692 = /* @__PURE__ */ new WeakSet();
    varData_1693 = function(param_1) {
      const varData_1707 = new varData_1717(param_1, this);
      varData_545(this, varData_1681).set(varData_1707.characterId, varData_1707);
      varData_549(this, varData_1700, varData_1701).call(this, "member:joined", varData_1707);
    };
    varData_1694 = /* @__PURE__ */ new WeakSet();
    varData_1695 = function(param_1) {
      const varData_1708 = varData_545(this, varData_1681).get(param_1);
      if (!varData_1708) {
        return;
      }
      varData_545(this, varData_1681).delete(param_1);
      if (varData_545(this, varData_1685) === varData_1708) {
        varData_547(this, varData_1685, null);
      }
      varData_549(this, varData_1700, varData_1701).call(this, "member:left", varData_1708);
    };
    varData_1696 = /* @__PURE__ */ new WeakSet();
    varData_1697 = function(param_1, param_2, param_3) {
      const varData_1709 = varData_545(this, varData_1681).get(param_1);
      if (!varData_1709) {
        return;
      }
      if (varData_1709.serverId !== param_2) {
        varData_1709.updateServerId(param_2);
      }
      if (param_3) {
        varData_547(this, varData_1685, varData_1709);
      }
      varData_549(this, varData_1700, varData_1701).call(this, "member:update", varData_1709);
    };
    varData_1698 = /* @__PURE__ */ new WeakSet();
    varData_1699 = function(param_1) {
      const varData_1710 = param_1 ? new varData_1670(param_1) : null;
      varData_547(this, varData_1686, varData_1710);
      varData_549(this, varData_1700, varData_1701).call(this, "activity:set", varData_1710);
    };
    varData_1700 = /* @__PURE__ */ new WeakSet();
    varData_1701 = function(param_1, ..._0x622000) {
      const varData_1711 = varData_545(this, varData_1682).get(param_1);
      if (!varData_1711) {
        return;
      }
      for (const varData_1712 of varData_1711) {
        try {
          varData_1712.call(this, ..._0x622000);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1713;
    var varData_1714;
    var varData_1715;
    var varData_1716;
    var varData_1717 = class {
      constructor(param_1, param_2) {
        varData_546(this, varData_1713, void 0);
        varData_546(this, varData_1714, void 0);
        varData_546(this, varData_1715, void 0);
        varData_546(this, varData_1716, void 0);
        varData_547(this, varData_1713, param_1.characterId);
        varData_547(this, varData_1714, param_1.name);
        varData_547(this, varData_1715, param_2);
        varData_547(this, varData_1716, param_1.serverId);
      }
      get group() {
        return varData_545(this, varData_1715);
      }
      get characterId() {
        return varData_545(this, varData_1713);
      }
      get name() {
        return varData_545(this, varData_1714);
      }
      get serverId() {
        return varData_545(this, varData_1716);
      }
      get isOnline() {
        return varData_545(this, varData_1716) !== null;
      }
      get isLeader() {
        return varData_545(this, varData_1715).leader === this;
      }
      updateServerId(param_1) {
        varData_547(this, varData_1716, param_1);
      }
      toJSON() {
        return {
          characterId: varData_545(this, varData_1713),
          serverId: varData_545(this, varData_1716),
          name: varData_545(this, varData_1714),
          isLeader: this.isLeader,
          isOnline: this.isOnline
        };
      }
    };
    varData_1713 = /* @__PURE__ */ new WeakMap();
    varData_1714 = /* @__PURE__ */ new WeakMap();
    varData_1715 = /* @__PURE__ */ new WeakMap();
    varData_1716 = /* @__PURE__ */ new WeakMap();
    var varData_1718;
    var varData_1719;
    var varData_1720;
    var varData_1721;
    var varData_1722;
    var varData_1723;
    var varData_1724;
    var varData_1725;
    var varData_1726;
    var varData_1727 = class {
      constructor(param_1) {
        varData_546(this, varData_1721);
        varData_546(this, varData_1723);
        varData_546(this, varData_1725);
        varData_546(this, varData_1718, void 0);
        varData_546(this, varData_1719, void 0);
        varData_546(this, varData_1720, void 0);
        varData_547(this, varData_1718, param_1 ?? GetCurrentResourceName());
        varData_547(this, varData_1719, /* @__PURE__ */ new Map());
        varData_547(this, varData_1720, /* @__PURE__ */ new Map());
        varData_1483.onNet("__npx_groups:manager:" + varData_545(this, varData_1718) + ":addedToGroup", varData_549(this, varData_1721, varData_1722).bind(this));
        varData_1483.onNet("__npx_groups:manager:" + varData_545(this, varData_1718) + ":removedFromGroup", varData_549(this, varData_1723, varData_1724).bind(this));
        on("np-base:clearStates", this.reset.bind(this));
        on("np-spawn:characterSpawned", this.init.bind(this));
        const varData_1728 = varData_1433.Sync.isPed.isPed("cid");
        if (varData_1728) {
          this.init();
        }
      }
      get list() {
        return varData_545(this, varData_1719);
      }
      async init() {
        if (varData_545(this, varData_1719).size > 0) {
          this.reset();
        }
        const varData_1729 = await varData_1523.execute("__npx_groups:manager:" + varData_545(this, varData_1718) + ":init");
        if (!varData_1729) {
          return;
        }
        for (const varData_1730 of varData_1729) {
          varData_549(this, varData_1721, varData_1722).call(this, varData_1730);
        }
        varData_1491.debug("[Group Manager] Initialized! | Groups: " + varData_545(this, varData_1719).size);
      }
      reset() {
        varData_545(this, varData_1719).forEach((param_1) => param_1.destroy());
        varData_545(this, varData_1719).clear();
      }
      on(param_1, param_2) {
        const varData_1731 = varData_545(this, varData_1720).get(param_1) ?? [];
        if (!varData_545(this, varData_1720).has(param_1)) {
          varData_545(this, varData_1720).set(param_1, varData_1731);
        }
        varData_1731.push(param_2);
      }
    };
    varData_1718 = /* @__PURE__ */ new WeakMap();
    varData_1719 = /* @__PURE__ */ new WeakMap();
    varData_1720 = /* @__PURE__ */ new WeakMap();
    varData_1721 = /* @__PURE__ */ new WeakSet();
    varData_1722 = function(param_1) {
      const varData_1732 = new varData_1702(param_1);
      varData_1732.on("activity:set", (param_1_1) => param_1_1 && varData_549(this, varData_1725, varData_1726).call(this, "activityAssigned", varData_1732, param_1_1));
      varData_545(this, varData_1719).set(varData_1732.id, varData_1732);
      varData_549(this, varData_1725, varData_1726).call(this, "addedToGroup", varData_1732);
    };
    varData_1723 = /* @__PURE__ */ new WeakSet();
    varData_1724 = function(param_1) {
      const varData_1733 = varData_545(this, varData_1719).get(param_1);
      if (!varData_1733) {
        return;
      }
      varData_545(this, varData_1719).delete(param_1);
      varData_1733.destroy();
      varData_549(this, varData_1725, varData_1726).call(this, "removedFromGroup", varData_1733.id);
    };
    varData_1725 = /* @__PURE__ */ new WeakSet();
    varData_1726 = function(param_1, ..._0x290568) {
      const varData_1734 = varData_545(this, varData_1720).get(param_1) ?? [];
      for (const varData_1735 of varData_1734) {
        try {
          varData_1735.call(this, ..._0x290568);
        } catch (err) {
          console.error(err);
        }
      }
    };
    var varData_1736 = {};
    var varData_1737 = {
      GetEntityStateValue: () => handleAction_101,
      GetPlayerStateValue: () => handleAction_104,
      RegisterStatebagChangeHandler: () => handleAction_106,
      SetEntityStateValue: () => handleAction_102,
      SetPlayerStateValue: () => handleAction_105
    };
    varData_539(varData_1736, varData_1737);
    var varData_1738 = new varData_1276(5e3);
    function handleAction_100(param_1) {
      let varData_1739 = varData_1738.get("ent-" + param_1);
      if (varData_1739) {
        return varData_1739;
      }
      varData_1739 = Entity(param_1);
      varData_1738.set("ent-" + param_1, varData_1739);
      return varData_1739;
    }
    function handleAction_101(param_1, param_2) {
      const varData_1740 = handleAction_100(param_1);
      return varData_1740.state[param_2];
    }
    function handleAction_102(param_1, param_2, param_3, _0x424e36 = false) {
      const varData_1741 = handleAction_100(param_1);
      varData_1741.state.set(param_2, param_3, _0x424e36);
    }
    function handleAction_103(param_1) {
      let varData_1742 = varData_1738.get("ply-" + param_1);
      if (varData_1742) {
        return varData_1742;
      }
      varData_1742 = Player(param_1);
      varData_1738.set("ply-" + param_1, varData_1742);
      return varData_1742;
    }
    function handleAction_104(param_1, param_2) {
      const varData_1743 = handleAction_103(param_1);
      return varData_1743.state[param_2];
    }
    function handleAction_105(param_1, param_2, param_3, _0x23cb58 = false) {
      const varData_1744 = handleAction_103(param_1);
      varData_1744.state.set(param_2, param_3, _0x23cb58);
    }
    function handleAction_106(param_1, param_2, param_3, param_4) {
      return AddStateBagChangeHandler(param_1, null, async function(param_1_1, param_2_1, param_3_1, param_4_1, param_5) {
        if (param_3 && !param_5) {
          return;
        }
        const varData_1745 = param_1_1.startsWith("player");
        const varData_1746 = parseInt(param_1_1.substring(7));
        const varData_1747 = varData_1745 ? GetPlayerFromStateBagName(param_1_1) : GetEntityFromStateBagName(param_1_1);
        if (!varData_1747) {
          return;
        }
        const varData_1748 = varData_1745 ? NetworkGetPlayerIndexFromPed(varData_1747) === PlayerId() : NetworkGetEntityOwner(varData_1747) === PlayerId();
        if (param_2 && !varData_1748) {
          return;
        }
        param_4(varData_1746, varData_1747, param_3_1);
      });
    }
    var varData_1749 = {};
    var varData_1750 = {
      GetFuelLevel: () => handleAction_114,
      GetIdentifier: () => handleAction_111,
      GetMetadata: () => handleAction_110,
      HasKey: () => handleAction_109,
      IsVinScratched: () => handleAction_112,
      SwapSeat: () => handleAction_113,
      TurnOffEngine: () => handleAction_108,
      TurnOnEngine: () => handleAction_107
    };
    varData_539(varData_1749, varData_1750);
    function handleAction_107(param_1) {
      varData_1433.Sync["np-vehicles"].TurnOnEngine(param_1);
    }
    function handleAction_108(param_1) {
      varData_1433.Sync["np-vehicles"].TurnOffEngine(param_1);
    }
    function handleAction_109(param_1) {
      return varData_1433.Sync["np-vehicles"].HasVehicleKey(param_1);
    }
    function handleAction_110(param_1, param_2) {
      const varData_1751 = handleAction_101(param_1, "data");
      if (param_2) {
        if (varData_1751 == null) {
          return void 0;
        } else {
          return varData_1751[param_2];
        }
      } else {
        return varData_1751;
      }
    }
    function handleAction_111(param_1) {
      return handleAction_101(param_1, "vin");
    }
    function handleAction_112(param_1) {
      return handleAction_101(param_1, "vinScratched");
    }
    function handleAction_113(param_1, param_2) {
      varData_1433.Sync["np-vehicles"].SwapVehicleSeat(param_1, param_2);
    }
    function handleAction_114(param_1) {
      return handleAction_110(param_1, "fuel") ?? 0;
    }
    var varData_1752 = {};
    var varData_1753 = {
      GetUIFocus: () => handleAction_119,
      RegisterUICallback: () => handleAction_115,
      SendUIAppMessage: () => handleAction_117,
      SendUIMessage: () => handleAction_116,
      SetUIFocus: () => handleAction_118
    };
    varData_539(varData_1752, varData_1753);
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
      var varData_1754 = {
        source: "np-nui",
        app: param_1,
        data: param_2
      };
      exports["np-ui"].SendUIMessage(varData_1754);
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
    var varData_1755 = {};
    var varData_1756 = {
      Manager: () => varData_1785
    };
    varData_539(varData_1755, varData_1756);
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
    var varData_1783;
    var varData_1784;
    var varData_1785 = class {
      constructor(param_1, param_2) {
        varData_546(this, varData_1761);
        varData_546(this, varData_1763);
        varData_546(this, varData_1765);
        varData_546(this, varData_1767);
        varData_546(this, varData_1769);
        varData_546(this, varData_1771);
        varData_546(this, varData_1773);
        varData_546(this, varData_1775);
        varData_546(this, varData_1777);
        varData_546(this, varData_1779);
        varData_546(this, varData_1781);
        varData_546(this, varData_1783);
        varData_546(this, varData_1757, void 0);
        varData_546(this, varData_1758, void 0);
        varData_546(this, varData_1759, null);
        varData_546(this, varData_1760, void 0);
        varData_547(this, varData_1757, param_1);
        varData_547(this, varData_1758, param_2);
        varData_547(this, varData_1760, null);
        varData_545(this, varData_1758).on("addedToGroup", varData_549(this, varData_1769, varData_1770).bind(this));
        varData_545(this, varData_1758).on("removedFromGroup", varData_549(this, varData_1771, varData_1772).bind(this));
        varData_1483.on("jobs:app:ready", () => {
          if (!varData_545(this, varData_1760)) {
            return;
          }
          varData_549(this, varData_1773, varData_1774).call(this, varData_545(this, varData_1760));
        });
        varData_1483.on("jobs:jobChanged", (param_1_1) => {
          varData_547(this, varData_1759, param_1_1);
          if (!varData_545(this, varData_1760)) {
            return;
          }
          const varData_1786 = (param_1_1 == null ? void 0 : param_1_1.id) === varData_545(this, varData_1757);
          if (!varData_1786) {
            return varData_549(this, varData_1771, varData_1772).call(this, varData_545(this, varData_1760).id);
          }
          varData_549(this, varData_1773, varData_1774).call(this, varData_545(this, varData_1760));
        });
        varData_1483.onNet("__npx_jobs:" + varData_545(this, varData_1757) + ":groups:invite:request", varData_549(this, varData_1763, varData_1764).bind(this));
        varData_1483.onNet("__npx_jobs:" + varData_545(this, varData_1757) + ":groups:invite:received", varData_549(this, varData_1761, varData_1762).bind(this));
        varData_1483.onNet("__npx_jobs:" + varData_545(this, varData_1757) + ":groups:invite:response", varData_549(this, varData_1765, varData_1766).bind(this));
        varData_1483.onNet("__npx_jobs:" + varData_545(this, varData_1757) + ":groups:invite:aborted", varData_549(this, varData_1767, varData_1768).bind(this));
      }
      get group() {
        return varData_545(this, varData_1760);
      }
      async sendGroupInvite(param_1) {
        if (!varData_545(this, varData_1759) || varData_545(this, varData_1759).id !== varData_545(this, varData_1757)) {
          return;
        }
        const [_0x1f1fea, _0xe8233e] = await varData_1523.execute("jobs:app:" + varData_545(this, varData_1757) + ":groups:invite:send", param_1);
        if (!_0x1f1fea) {
          return varData_1873.phoneNotification("Group Invite", _0xe8233e, true);
        }
        varData_1873.phoneNotification("Group Invite", "Invite sent!", true);
        varData_1491.debug("[Job APP] Invite sent! " + _0xe8233e);
      }
      async sendGroupJoinRequest(param_1) {
        if (!varData_545(this, varData_1759) || varData_545(this, varData_1759).id !== varData_545(this, varData_1757)) {
          return;
        }
        const [_0x44316f, _0x26d231] = await varData_1523.execute("jobs:app:" + varData_545(this, varData_1757) + ":groups:invite:request", param_1);
        if (!_0x44316f) {
          return varData_1873.phoneNotification("Group Invite", _0x26d231, true);
        }
        varData_1873.phoneNotification("Group Invite", "Join request sent!", true);
        varData_1491.debug("[Job APP] Join request sent! " + _0x26d231);
      }
    };
    varData_1757 = /* @__PURE__ */ new WeakMap();
    varData_1758 = /* @__PURE__ */ new WeakMap();
    varData_1759 = /* @__PURE__ */ new WeakMap();
    varData_1760 = /* @__PURE__ */ new WeakMap();
    varData_1761 = /* @__PURE__ */ new WeakSet();
    varData_1762 = async function(param_1, param_2) {
      varData_1491.debug("[Job APP] Invite received! " + param_1 + " " + param_2);
      const varData_1787 = 'Received an invite to join the group "' + param_2 + '"';
      const varData_1788 = await varData_1873.phoneConfirmation("Group Invite", varData_1787, "users", 3e4);
      const [_0x270f7b, _0x3d862c] = await varData_1523.execute("jobs:app:" + varData_545(this, varData_1757) + ":groups:invite:response", param_1, varData_1788);
      if (!_0x270f7b) {
        return varData_1873.phoneNotification("Group Invite", _0x3d862c, true);
      }
    };
    varData_1763 = /* @__PURE__ */ new WeakSet();
    varData_1764 = async function(param_1, param_2) {
      varData_1491.debug("[Job APP] Join request received! " + param_1 + " " + param_2);
      const varData_1789 = "Received a group join request from " + param_2;
      const varData_1790 = await varData_1873.phoneConfirmation("Group Invite", varData_1789, "users", 3e4);
      const [_0x3b79e6, _0x59bc33] = await varData_1523.execute("jobs:app:" + varData_545(this, varData_1757) + ":groups:invite:response", param_1, varData_1790);
      if (!_0x3b79e6) {
        return varData_1873.phoneNotification("Group Invite", _0x59bc33, true);
      }
    };
    varData_1765 = /* @__PURE__ */ new WeakSet();
    varData_1766 = function(param_1, param_2) {
      varData_1491.debug("[Job APP] Invite response received! " + param_1 + " " + param_2);
    };
    varData_1767 = /* @__PURE__ */ new WeakSet();
    varData_1768 = function(param_1, param_2) {
      varData_1491.debug("[Job APP] Invite aborted! " + param_1 + " " + param_2);
    };
    varData_1769 = /* @__PURE__ */ new WeakSet();
    varData_1770 = function(param_1) {
      varData_547(this, varData_1760, param_1);
      varData_545(this, varData_1760).on("group:update", varData_549(this, varData_1773, varData_1774).bind(this));
      varData_545(this, varData_1760).on("activity:set", varData_549(this, varData_1781, varData_1782).bind(this, param_1));
      varData_545(this, varData_1760).on("data:update", varData_549(this, varData_1783, varData_1784).bind(this, param_1));
      varData_545(this, varData_1760).on("member:joined", varData_549(this, varData_1775, varData_1776).bind(this, param_1));
      varData_545(this, varData_1760).on("member:left", varData_549(this, varData_1777, varData_1778).bind(this, param_1));
      varData_545(this, varData_1760).on("member:update", varData_549(this, varData_1779, varData_1780).bind(this, param_1));
      varData_1752.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_545(this, varData_1757),
        group: param_1.toJSON()
      });
      varData_1491.debug("[Job APP] Added to group!");
    };
    varData_1771 = /* @__PURE__ */ new WeakSet();
    varData_1772 = function(param_1) {
      varData_547(this, varData_1760, null);
      varData_1752.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_545(this, varData_1757),
        group: null
      });
      varData_1491.debug("[Job APP] Removed from group!");
    };
    varData_1773 = /* @__PURE__ */ new WeakSet();
    varData_1774 = function(param_1) {
      if (varData_545(this, varData_1760) !== param_1) {
        return varData_1491.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1752.SendUIAppMessage("phone", {
        action: "jobs:group:setState",
        jobId: varData_545(this, varData_1757),
        group: param_1.toJSON()
      });
      varData_1491.debug("[Job APP] Updated group!");
    };
    varData_1775 = /* @__PURE__ */ new WeakSet();
    varData_1776 = function(param_1, param_2) {
      if (varData_545(this, varData_1760) !== param_1) {
        return varData_1491.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1752.SendUIAppMessage("phone", {
        action: "jobs:group:addMember",
        jobId: varData_545(this, varData_1757),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1491.debug("[Job APP] Added member to group!");
    };
    varData_1777 = /* @__PURE__ */ new WeakSet();
    varData_1778 = function(param_1, param_2) {
      if (varData_545(this, varData_1760) !== param_1) {
        return varData_1491.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1752.SendUIAppMessage("phone", {
        action: "jobs:group:removeMember",
        jobId: varData_545(this, varData_1757),
        groupId: param_1.id,
        memberId: param_2.characterId
      });
      varData_1491.debug("[Job APP] Removed member from group!");
    };
    varData_1779 = /* @__PURE__ */ new WeakSet();
    varData_1780 = function(param_1, param_2) {
      if (varData_545(this, varData_1760) !== param_1) {
        return varData_1491.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      varData_1752.SendUIAppMessage("phone", {
        action: "jobs:group:updateMember",
        jobId: varData_545(this, varData_1757),
        groupId: param_1.id,
        member: param_2.toJSON()
      });
      varData_1491.debug("[Job APP] Updated member in group!");
    };
    varData_1781 = /* @__PURE__ */ new WeakSet();
    varData_1782 = function(param_1, param_2) {
      if (varData_545(this, varData_1760) !== param_1) {
        return varData_1491.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      }
      const varData_1791 = (param_2 == null ? void 0 : param_2.toJSON()) ?? null;
      varData_1752.SendUIAppMessage("phone", {
        action: "jobs:group:updateActivity",
        jobId: varData_545(this, varData_1757),
        groupId: param_1.id,
        activity: varData_1791
      });
      varData_1491.debug("[Job APP] Updated activity for group!");
    };
    varData_1783 = /* @__PURE__ */ new WeakSet();
    varData_1784 = function(param_1, param_2, param_3) {
      if (varData_545(this, varData_1760) !== param_1) {
        return varData_1491.warning("[Job APP] Attempted to update group " + param_1.id + " but it is not the current group!");
      } else if (param_2 !== "status") {
        return;
      }
      varData_1752.SendUIAppMessage("phone", {
        action: "jobs:group:updateStatus",
        jobId: varData_545(this, varData_1757),
        groupId: param_1.id,
        status: param_3
      });
      varData_1491.debug("[Job APP] Updated status for group!");
    };
    var varData_1792 = async (param_1) => {
      const varData_1793 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasModelLoaded(varData_1793)) {
        return true;
      }
      RequestModel(varData_1793);
      const varData_1794 = await varData_1420.waitForCondition(() => HasModelLoaded(varData_1793), 3e3);
      return !varData_1794;
    };
    var varData_1795 = async (param_1) => {
      if (HasAnimDictLoaded(param_1)) {
        return true;
      }
      RequestAnimDict(param_1);
      const varData_1796 = await varData_1420.waitForCondition(() => HasAnimDictLoaded(param_1), 3e3);
      return !varData_1796;
    };
    var varData_1797 = async (param_1) => {
      if (HasClipSetLoaded(param_1)) {
        return true;
      }
      RequestClipSet(param_1);
      const varData_1798 = await varData_1420.waitForCondition(() => HasClipSetLoaded(param_1), 3e3);
      return !varData_1798;
    };
    var varData_1799 = async (param_1) => {
      if (HasStreamedTextureDictLoaded(param_1)) {
        return true;
      }
      RequestStreamedTextureDict(param_1, true);
      const varData_1800 = await varData_1420.waitForCondition(() => HasStreamedTextureDictLoaded(param_1), 3e3);
      return !varData_1800;
    };
    var varData_1801 = async (param_1, param_2, param_3) => {
      const varData_1802 = typeof param_1 === "number" ? param_1 : GetHashKey(param_1);
      if (HasWeaponAssetLoaded(varData_1802)) {
        return true;
      }
      RequestWeaponAsset(varData_1802, param_2, param_3);
      const varData_1803 = await varData_1420.waitForCondition(() => HasWeaponAssetLoaded(varData_1802), 3e3);
      return !varData_1803;
    };
    var varData_1804 = async (param_1) => {
      if (HasNamedPtfxAssetLoaded(param_1)) {
        return true;
      }
      RequestNamedPtfxAsset(param_1);
      const varData_1805 = await varData_1420.waitForCondition(() => HasNamedPtfxAssetLoaded(param_1), 3e3);
      return !varData_1805;
    };
    var varData_1806 = {
      loadModel: varData_1792,
      loadTexture: varData_1799,
      loadAnim: varData_1795,
      loadClipSet: varData_1797,
      loadWeaponAsset: varData_1801,
      loadNamedPtfxAsset: varData_1804
    };
    var varData_1807 = varData_1806;
    var varData_1808 = (param_1, ..._0x14f6e1) => {
      switch (param_1) {
        case "coord": {
          const [_0x579855, _0x24981c, _0x3be8a7] = _0x14f6e1;
          return AddBlipForCoord(_0x579855, _0x24981c, _0x3be8a7);
        }
        case "area": {
          const [_0x282532, _0x4f012a, _0x37a099, _0x5e896d, _0x5246f1] = _0x14f6e1;
          return AddBlipForArea(_0x282532, _0x4f012a, _0x37a099, _0x5e896d, _0x5246f1);
        }
        case "radius": {
          const [_0x4d6d9f, _0x46e9b3, _0x5c4288, _0x5e838d] = _0x14f6e1;
          return AddBlipForRadius(_0x4d6d9f, _0x46e9b3, _0x5c4288, _0x5e838d);
        }
        case "pickup": {
          const [_0x2e647f] = _0x14f6e1;
          return AddBlipForPickup(_0x2e647f);
        }
        case "entity": {
          const [_0x467de7] = _0x14f6e1;
          return AddBlipForEntity(_0x467de7);
        }
        default: {
          console.error(new Error("Invalid Blip Type"));
          return 0;
        }
      }
    };
    var varData_1809 = (param_1, param_2, param_3, param_4, param_5, param_6, param_7, param_8) => {
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
    var varData_1810 = {
      createBlip: varData_1808,
      applyBlipSettings: varData_1809
    };
    var varData_1811 = varData_1810;
    var dataSet_1 = /* @__PURE__ */ new Set();
    var dataMap_1 = /* @__PURE__ */ new Map();
    var dataSet_2 = /* @__PURE__ */ new Set();
    on("np-polyzone:enter", (param_1, param_2) => {
      dataSet_1.add(param_1);
      if (param_2 == null ? void 0 : param_2.id) {
        dataSet_1.add(param_1 + "-" + param_2.id);
      }
      if (dataSet_2.has(param_1)) {
        varData_1483.emitNet("__sdk:zones:" + param_1 + ":enter", param_2);
      }
      const varData_1812 = dataMap_1.get(param_1 + "-enter");
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
    on("np-polyzone:exit", (param_1, param_2) => {
      dataSet_1.delete(param_1);
      if (param_2 == null ? void 0 : param_2.id) {
        dataSet_1.delete(param_1 + "-" + param_2.id);
      }
      if (dataSet_2.has(param_1)) {
        varData_1483.emitNet("__sdk:zones:" + param_1 + ":exit", param_2);
      }
      const varData_1814 = dataMap_1.get(param_1 + "-exit");
      if (varData_1814 === void 0) {
        return;
      }
      for (const varData_1815 of varData_1814) {
        try {
          varData_1815(param_2);
        } catch (err) {
          console.log(err);
        }
      }
    });
    var varData_1816 = (param_1, param_2) => {
      return dataSet_1.has(param_2 ? param_1 + "-" + param_2 : param_1);
    };
    var varData_1817 = (param_1, param_2) => {
      const varData_1818 = param_1 + "-enter";
      const varData_1819 = dataMap_1.get(varData_1818) ?? [];
      if (!dataMap_1.has(varData_1818)) {
        dataMap_1.set(varData_1818, varData_1819);
      }
      varData_1819.push(param_2);
    };
    var varData_1820 = (param_1, param_2) => {
      const varData_1821 = param_1 + "-exit";
      const varData_1822 = dataMap_1.get(varData_1821) ?? [];
      if (!dataMap_1.has(varData_1821)) {
        dataMap_1.set(varData_1821, varData_1822);
      }
      varData_1822.push(param_2);
    };
    var varData_1823 = (param_1, param_2, param_3, param_4, _0xc66888 = {}) => {
      var varData_1824 = {
        ...param_4
      };
      varData_1824.data = _0xc66888;
      varData_1824.id = param_1;
      const varData_1825 = varData_1824;
      varData_1825.data.id = param_1;
      exports["np-polyzone"].AddPolyZone(param_2, param_3, varData_1825);
    };
    var varData_1826 = (param_1, param_2, param_3, param_4, param_5, param_6, _0x5b1c4c = {}) => {
      var varData_1827 = {
        ...param_6
      };
      varData_1827.data = _0x5b1c4c;
      varData_1827.id = param_1;
      const varData_1828 = varData_1827;
      varData_1828.data.id = param_1;
      exports["np-polyzone"].AddBoxZone(param_2, param_3, param_4, param_5, varData_1828);
    };
    var varData_1829 = (param_1, param_2, param_3, param_4, param_5, _0x192e8a = {}) => {
      var varData_1830 = {
        ...param_5
      };
      varData_1830.data = _0x192e8a;
      varData_1830.id = param_1;
      const varData_1831 = varData_1830;
      varData_1831.data.id = param_1;
      exports["np-polyzone"].AddCircleZone(param_2, param_3, param_4, varData_1831);
    };
    var varData_1832 = (param_1, param_2, param_3, param_4, _0x3e517c = {}) => {
      var varData_1833 = {
        ...param_4
      };
      varData_1833.data = _0x3e517c;
      const varData_1834 = varData_1833;
      varData_1834.data.id = param_1;
      exports["np-polyzone"].AddEntityZone(param_2, param_3, varData_1834);
    };
    var varData_1835 = (param_1, param_2) => {
      exports["np-polyzone"].RemoveZone(param_1, param_2);
      dataSet_1.delete(param_1 + "-" + param_2);
      dataSet_2.delete(param_1);
    };
    var varData_1836 = (param_1) => {
      dataSet_2.add(param_1);
    };
    var varData_1837 = {
      isActive: varData_1816,
      onEnter: varData_1817,
      onExit: varData_1820,
      addPolyZone: varData_1823,
      addBoxZone: varData_1826,
      addCircleZone: varData_1829,
      addEntityZone: varData_1832,
      removeZone: varData_1835,
      setAsNetworked: varData_1836
    };
    var varData_1838 = varData_1837;
    var varData_1839 = (param_1, param_2, param_3, param_4) => {
      var varData_1840 = {
        id: param_1,
        coords: [param_2.x, param_2.y, param_2.z],
        options: param_3,
        context: param_4
      };
      const varData_1841 = varData_1840;
      globalThis.exports.interactions.AddInteraction(varData_1841);
    };
    var varData_1842 = (param_1, param_2, param_3, param_4) => {
      var varData_1843 = {
        id: param_1,
        options: param_3,
        context: param_4
      };
      const varData_1844 = varData_1843;
      globalThis.exports.interactions.AddInteractionByModel(param_2, varData_1844);
    };
    var varData_1845 = (param_1, param_2, param_3) => {
      var varData_1846 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_1847 = varData_1846;
      varData_1847.context.isPlayer = true;
      globalThis.exports.interactions.AddPedInteraction(varData_1847);
    };
    var varData_1848 = (param_1, param_2, param_3) => {
      var varData_1849 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_1850 = varData_1849;
      globalThis.exports.interactions.AddPedInteraction(varData_1850);
    };
    var varData_1851 = (param_1) => {
      return globalThis.exports.interactions.DoesInteractionExists(param_1);
    };
    var varData_1852 = (param_1, param_2, param_3) => {
      var varData_1853 = {
        id: param_1,
        options: param_2,
        context: param_3
      };
      const varData_1854 = varData_1853;
      globalThis.exports.interactions.AddVehicleInteraction(varData_1854);
    };
    var varData_1855 = (param_1) => {
      globalThis.exports.interactions.RemoveInteraction(param_1);
    };
    var varData_1856 = (param_1) => {
      globalThis.exports.interactions.RemoveVehicleInteraction(param_1);
    };
    var varData_1857 = (param_1) => {
      globalThis.exports.interactions.RemovePedInteraction(param_1);
    };
    var varData_1858 = (param_1, param_2, _0x10a324 = false, _0x295fe6 = null, _0x1269c0 = true, _0xbbfc60 = null) => {
      return new Promise((param_1_1) => {
        globalThis.exports["np-taskbar"].taskBar(param_1, param_2, _0x10a324, _0x1269c0, _0xbbfc60, false, param_1_1, _0x295fe6 == null ? void 0 : _0x295fe6.distance, _0x295fe6 == null ? void 0 : _0x295fe6.entity);
      });
    };
    var varData_1859 = (param_1, param_2, param_3, param_4) => {
      return new Promise((param_1_1) => {
        globalThis.exports["np-phone"].DoPhoneConfirmation(param_1, param_2, param_3, param_1_1, param_4);
      });
    };
    var varData_1860 = (param_1, param_2, _0x3db8be = true, _0x5bf113 = "home-screen") => {
      var varData_1861 = {
        action: "notification",
        target_app: _0x5bf113,
        title: param_1,
        body: param_2,
        show_even_if_app_active: _0x3db8be
      };
      var varData_1862 = {
        source: "np-nui",
        app: "phone",
        data: varData_1861
      };
      globalThis.exports["np-ui"].SendUIMessage(varData_1862);
    };
    var varData_1863 = (param_1, param_2, param_3, param_4, param_5, param_6, _0xd71ba1 = 0, _0x309028 = true) => {
      SetTextColour(param_4[0], param_4[1], param_4[2], param_4[3]);
      if (_0x309028) {
        SetTextOutline();
      }
      SetTextScale(0, param_5);
      SetTextFont(param_6 ?? 0);
      SetTextJustification(_0xd71ba1);
      if (_0xd71ba1 === 2) {
        SetTextWrap(0, 0.575);
      }
      SetTextEntry("STRING");
      AddTextComponentString(param_3 ?? "Dummy text");
      EndTextCommandDisplayText(param_1, param_2);
    };
    var varData_1864 = (param_1, param_2, param_3, param_4, _0x2d5459 = 4, _0x1bc5c0 = true, param_7) => {
      SetDrawOrigin(param_1.x, param_1.y, param_1.z, 0);
      const varData_1865 = Math.max(varData_1403.getMapRange([0, 10], [0.4, 0.25], param_2), 0.1);
      varData_1863(0, 0, param_3, param_4, varData_1865, _0x2d5459, 0, _0x1bc5c0);
      if (param_7) {
        DrawRect(2e-3, param_7.height / 2, param_7.width, param_7.height, param_7.color[0], param_7.color[1], param_7.color[2], param_7.color[3]);
      }
      ClearDrawOrigin();
    };
    var varData_1866 = (param_1, param_2, param_3, param_4) => {
      globalThis.exports.contacts.open(param_1, param_2, param_3, param_4, true);
    };
    var varData_1867 = (param_1) => {
      globalThis.exports.hud.AddOrUpdateHudBar(param_1);
    };
    var varData_1868 = (param_1) => {
      globalThis.exports.hud.RemoveHudBar(param_1);
    };
    async function handleAction_120(param_1) {
      const varData_1869 = (param_1_1) => {
        for (const varData_1870 of param_1) {
          if (varData_1870._type === "number" && isNaN(param_1_1[varData_1870.name])) {
            return false;
          }
          if (varData_1870._type === "text" && typeof param_1_1[varData_1870.name] !== "string") {
            return false;
          }
        }
        return true;
      };
      return await varData_1433.Sync["np-ui"].OpenInputMenu(param_1, varData_1869);
    }
    async function handleAction_121(param_1, param_2) {
      const varData_1871 = {
        info: 1,
        error: 2
      };
      emit("DoLongHudText", param_1, varData_1871[param_2]);
    }
    var varData_1872 = {
      addInteraction: varData_1839,
      addInteractionByModel: varData_1842,
      addPlayerInteraction: varData_1845,
      addPedInteraction: varData_1848,
      addVehicleInteraction: varData_1852,
      removeInteraction: varData_1855,
      removePlayerInteraction: varData_1857,
      removePedInteraction: varData_1857,
      removeVehicleInteraction: varData_1856,
      doesInteractionExists: varData_1851,
      taskBar: varData_1858,
      phoneConfirmation: varData_1859,
      phoneNotification: varData_1860,
      drawText: varData_1863,
      drawText3D: varData_1864,
      customContact: varData_1866,
      AddOrUpdateHudBar: varData_1867,
      RemoveHudBar: varData_1868,
      openInputMenu: handleAction_120,
      displayNotification: handleAction_121
    };
    var varData_1873 = varData_1872;
    var varData_1874 = async (param_1) => {
      return globalThis.exports["np-heists"].BankMinigame(param_1);
    };
    var varData_1875 = async (param_1) => {
      return globalThis.exports["np-heists"].DDRMinigame(param_1);
    };
    var varData_1876 = async (param_1) => {
      return globalThis.exports.skillchecks.DirectionMinigame(param_1);
    };
    var varData_1877 = async () => {
      return globalThis.exports.skillchecks.DrillingMinigame();
    };
    var varData_1878 = async (param_1) => {
      return globalThis.exports.skillchecks.FlipMinigame(param_1);
    };
    var varData_1879 = async (param_1) => {
      return globalThis.exports.skillchecks.FloodMinigame(param_1);
    };
    var varData_1880 = async (param_1) => {
      return globalThis.exports.skillchecks.TaskBarMinigame(param_1.difficulty, param_1.gap, param_1.iterations, param_1.useReverse);
    };
    var varData_1881 = async (param_1) => {
      return globalThis.exports.skillchecks.MazeMinigame(param_1);
    };
    var varData_1882 = async (param_1) => {
      return globalThis.exports.skillchecks.CrackSafe(param_1.locks);
    };
    var varData_1883 = async (param_1) => {
      return globalThis.exports.skillchecks.SameMinigame(param_1);
    };
    var varData_1884 = async (param_1) => {
      return globalThis.exports["np-heists"].ThermiteMinigame(param_1);
    };
    var varData_1885 = async (param_1) => {
      return globalThis.exports.skillchecks.UntangleMinigame(param_1);
    };
    var varData_1886 = async (param_1) => {
      return globalThis.exports["np-heists"].VarMinigame(param_1);
    };
    var varData_1887 = async (param_1) => {
      return globalThis.exports.skillchecks.WordsMinigame(param_1);
    };
    var varData_1888 = async (param_1) => {
      return globalThis.exports.skillchecks.AlphabetMinigame(param_1);
    };
    var varData_1889 = async (param_1) => {
      return globalThis.exports.skillchecks.LockpickMinigame(param_1);
    };
    var varData_1890 = async (param_1) => {
      return globalThis.exports.skillchecks.PinCrackMinigame(param_1);
    };
    var varData_1891 = async (param_1) => {
      return globalThis.exports.skillchecks.TerminalMinigame(param_1);
    };
    var varData_1892 = async (param_1) => {
      return globalThis.exports.skillchecks.SequenceMinigame(param_1);
    };
    var varData_1893 = async (param_1) => {
      return globalThis.exports.skillchecks.SudokuMinigame(param_1);
    };
    var varData_1894 = async (param_1) => {
      return globalThis.exports.skillchecks.MemoryMinigame(param_1);
    };
    var varData_1895 = {
      BankMinigame: varData_1874,
      DDRMinigame: varData_1875,
      DirectionMinigame: varData_1876,
      DrillingMinigame: varData_1877,
      FlipMinigame: varData_1878,
      FloodMinigame: varData_1879,
      TaskBarMinigame: varData_1880,
      MazeMinigame: varData_1881,
      CrackSafe: varData_1882,
      SameMinigame: varData_1883,
      ThermiteMinigame: varData_1884,
      UntangleMinigame: varData_1885,
      VarMinigame: varData_1886,
      WordsMinigame: varData_1887,
      AlphabetMinigame: varData_1888,
      LockpickMinigame: varData_1889,
      PinCrackMinigame: varData_1890,
      TerminalMinigame: varData_1891,
      SequenceMinigame: varData_1892,
      SudokuMinigame: varData_1893,
      MemoryMinigame: varData_1894
    };
    var varData_1896 = varData_1895;
    var varData_1897 = {
      async hasPermission(param_1, _0xf2684a = {}) {
        return await exports.permissions.hasPermission(param_1, _0xf2684a);
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
    var varData_1898 = {
      RegisterAction: (param_1, param_2, param_3) => {
        return varData_1433.Sync.contacts.RegisterAction(param_1, param_2, param_3);
      }
    };
    var varData_1899 = {
      RegisterEditorHandlerClient: async (param_1) => {
        return await globalThis.exports.editor.RegisterEditorHandlerClient(param_1);
      }
    };
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
    var varData_1910 = class {
      constructor(param_1) {
        varData_546(this, varData_1908);
        varData_546(this, varData_1900, void 0);
        varData_546(this, varData_1901, void 0);
        varData_546(this, varData_1902, void 0);
        varData_546(this, varData_1903, void 0);
        varData_546(this, varData_1904, void 0);
        varData_546(this, varData_1905, void 0);
        varData_546(this, varData_1906, false);
        varData_546(this, varData_1907, []);
        varData_547(this, varData_1900, param_1.codename);
        varData_547(this, varData_1901, param_1.version);
        varData_547(this, varData_1902, GetCurrentResourceName());
        varData_547(this, varData_1903, "nopixel-interactions");
        emit("__npx_core:handshake", param_1, varData_549(this, varData_1908, varData_1909).bind(this));
        varData_1584.register("__npx_core:handshake", async (param_1_1) => {
          if (param_1_1.codename !== varData_545(this, varData_1900)) {
            return;
          }
          const varData_1911 = await varData_1420.waitForCondition(() => varData_545(this, varData_1906), 1e4);
          if (varData_1911) {
            return;
          }
          return {
            API_URL: varData_545(this, varData_1904),
            API_KEY: varData_545(this, varData_1905)
          };
        });
      }
      get codename() {
        return varData_545(this, varData_1900);
      }
      get version() {
        return varData_545(this, varData_1901);
      }
      get isReady() {
        return varData_545(this, varData_1906);
      }
      onReady(param_1) {
        if (varData_545(this, varData_1906)) {
          param_1();
        } else {
          varData_545(this, varData_1907).push(param_1);
        }
      }
    };
    varData_1900 = /* @__PURE__ */ new WeakMap();
    varData_1901 = /* @__PURE__ */ new WeakMap();
    varData_1902 = /* @__PURE__ */ new WeakMap();
    varData_1903 = /* @__PURE__ */ new WeakMap();
    varData_1904 = /* @__PURE__ */ new WeakMap();
    varData_1905 = /* @__PURE__ */ new WeakMap();
    varData_1906 = /* @__PURE__ */ new WeakMap();
    varData_1907 = /* @__PURE__ */ new WeakMap();
    varData_1908 = /* @__PURE__ */ new WeakSet();
    varData_1909 = async function(param_1) {
      varData_547(this, varData_1904, param_1.API_URL);
      varData_547(this, varData_1905, param_1.API_KEY);
      varData_547(this, varData_1906, true);
      for (const varData_1912 of varData_545(this, varData_1907)) {
        varData_1912();
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
    var varData_1913 = Object.defineProperty;
    var varData_1914 = (param_1, param_2) => {
      for (var varData_1915 in param_2) {
        varData_1913(param_1, varData_1915, {
          get: param_2[varData_1915],
          enumerable: true
        });
      }
    };
    var varData_1916 = (param_1, param_2, param_3) => {
      if (!param_2.has(param_1)) {
        throw TypeError("Cannot " + param_3);
      }
    };
    var varData_1917 = (param_1, param_2, param_3) => {
      varData_1916(param_1, param_2, "read from private field");
      if (param_3) {
        return param_3.call(param_1);
      } else {
        return param_2.get(param_1);
      }
    };
    var varData_1918 = (param_1, param_2, param_3) => {
      if (param_2.has(param_1)) {
        throw TypeError("Cannot add the same private member more than once");
      }
      if (param_2 instanceof WeakSet) {
        param_2.add(param_1);
      } else {
        param_2.set(param_1, param_3);
      }
    };
    var varData_1919 = (param_1, param_2, param_3, param_4) => {
      varData_1916(param_1, param_2, "write to private field");
      if (param_4) {
        param_4.call(param_1, param_3);
      } else {
        param_2.set(param_1, param_3);
      }
      return param_3;
    };
    var varData_1920 = (param_1, param_2, param_3) => {
      varData_1916(param_1, param_2, "access private method");
      return param_3;
    };
    var varData_1921 = {
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
    var varData_1922 = {};
    var varData_1923 = {
      MathUtils: () => varData_2068
    };
    varData_1914(varData_1922, varData_1923);
    var varData_1924;
    var varData_1925;
    var varData_1926 = class _0x3bc6b5 {
      constructor(param_1, param_2, param_3) {
        varData_1918(this, varData_1924);
        const varData_1927 = varData_1920(this, varData_1924, varData_1925).call(this, param_1, param_2, param_3);
        this.x = varData_1927.x;
        this.y = varData_1927.y;
        this.z = varData_1927.z;
      }
      equals(param_1, param_2, param_3) {
        const varData_1928 = varData_1920(this, varData_1924, varData_1925).call(this, param_1, param_2, param_3);
        return this.x === varData_1928.x && this.y === varData_1928.y && this.z === varData_1928.z;
      }
      add(param_1, param_2, param_3, param_4) {
        let varData_1929 = varData_1920(this, varData_1924, varData_1925).call(this, param_1, param_2, param_3);
        this.x += param_4 ? varData_1929.x * param_4 : varData_1929.x;
        this.y += param_4 ? varData_1929.y * param_4 : varData_1929.y;
        this.z += param_4 ? varData_1929.z * param_4 : varData_1929.z;
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
        const varData_1930 = varData_1920(this, varData_1924, varData_1925).call(this, param_1, param_2, param_3);
        this.x -= param_4 ? varData_1930.x * param_4 : varData_1930.x;
        this.y -= param_4 ? varData_1930.y * param_4 : varData_1930.y;
        this.z -= param_4 ? varData_1930.z * param_4 : varData_1930.z;
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
        const varData_1931 = varData_1920(this, varData_1924, varData_1925).call(this, param_1, param_2, param_3);
        this.x *= varData_1931.x;
        this.y *= varData_1931.y;
        this.z *= varData_1931.z;
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
        const varData_1932 = varData_1920(this, varData_1924, varData_1925).call(this, param_1, param_2, param_3);
        this.x /= varData_1932.x;
        this.y /= varData_1932.y;
        this.z /= varData_1932.z;
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
        const varData_1933 = varData_1920(this, varData_1924, varData_1925).call(this, param_1, param_2, param_3);
        return new _0x3bc6b5((this.x + varData_1933.x) / 2, (this.y + varData_1933.y) / 2, (this.z + varData_1933.z) / 2);
      }
      getDistance(param_1, param_2, param_3) {
        const [_0x596364, _0x498553, _0x43e020] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y, param_1.z] : [param_1, param_2, param_3];
        if (typeof _0x596364 !== "number" || typeof _0x498553 !== "number" || typeof _0x43e020 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x15fe45, _0x5afdf4, _0x3887d0] = [this.x - _0x596364, this.y - _0x498553, this.z - _0x43e020];
        return Math.sqrt(_0x15fe45 * _0x15fe45 + _0x5afdf4 * _0x5afdf4 + _0x3887d0 * _0x3887d0);
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
        var varData_1934 = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        return varData_1934;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_1924 = /* @__PURE__ */ new WeakSet();
    varData_1925 = function(param_1, param_2, param_3) {
      let varData_1935 = {
        x: 0,
        y: 0,
        z: 0
      };
      if (param_1 instanceof varData_1926) {
        varData_1935 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_1936 = {
          x: param_1[0],
          y: param_1[1],
          z: param_1[2]
        };
        varData_1935 = varData_1936;
      } else if (typeof param_1 === "object") {
        varData_1935 = param_1;
      } else {
        var varData_1937 = {
          x: param_1,
          y: param_2,
          z: param_3
        };
        varData_1935 = varData_1937;
      }
      if (typeof varData_1935.x !== "number" || typeof varData_1935.y !== "number" || typeof varData_1935.z !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_1935;
    };
    var varData_1938 = varData_1926;
    var varData_1939;
    var varData_1940;
    var varData_1941 = class {
      constructor(param_1) {
        varData_1918(this, varData_1939, void 0);
        varData_1918(this, varData_1940, void 0);
        varData_1919(this, varData_1940, param_1 ?? 5);
        varData_1919(this, varData_1939, /* @__PURE__ */ new Map());
      }
      setTTL(param_1) {
        varData_1919(this, varData_1940, param_1);
      }
      set(param_1, param_2, param_3) {
        varData_1917(this, varData_1939).set(param_1, {
          value: param_2,
          expiration: Date.now() + (param_3 ?? varData_1917(this, varData_1940)) * 1e3
        });
        return this;
      }
      get(param_1, _0xe01233 = false) {
        const varData_1942 = varData_1917(this, varData_1939).get(param_1);
        const varData_1943 = varData_1942 ? _0xe01233 ? true : varData_1942.expiration > Date.now() : false;
        if (!varData_1942 || !varData_1943) {
          if (varData_1942) {
            varData_1917(this, varData_1939).delete(param_1);
          }
          return;
        }
        return varData_1942.value;
      }
      has(param_1, _0x29d1cb = false) {
        const varData_1944 = varData_1917(this, varData_1939).get(param_1);
        const varData_1945 = varData_1944 ? _0x29d1cb ? true : varData_1944.expiration > Date.now() : false;
        if (varData_1944 && !varData_1945) {
          varData_1917(this, varData_1939).delete(param_1);
        }
        return varData_1945;
      }
      delete(param_1) {
        return varData_1917(this, varData_1939).delete(param_1);
      }
      clear() {
        varData_1917(this, varData_1939).clear();
      }
      values(_0x4b0ef9 = false) {
        const itemList_3 = [];
        const timestamp = Date.now();
        for (const varData_1946 of varData_1917(this, varData_1939).values()) {
          if (_0x4b0ef9 || varData_1946.expiration > timestamp) {
            itemList_3.push(varData_1946.value);
          }
        }
        return itemList_3;
      }
      keys(_0x428434 = false) {
        const itemList_3 = [];
        const timestamp = Date.now();
        for (const [_0x5180ac, _0x32727c] of varData_1917(this, varData_1939).entries()) {
          if (_0x428434 || _0x32727c.expiration > timestamp) {
            itemList_3.push(_0x5180ac);
          }
        }
        return itemList_3;
      }
      entries(_0x389f10 = false) {
        const itemList_3 = [];
        const timestamp = Date.now();
        for (const [_0x2e5ecb, _0xac61da] of varData_1917(this, varData_1939).entries()) {
          if (_0x389f10 || _0xac61da.expiration > timestamp) {
            itemList_3.push([_0x2e5ecb, _0xac61da.value]);
          }
        }
        return itemList_3;
      }
    };
    varData_1939 = /* @__PURE__ */ new WeakMap();
    varData_1940 = /* @__PURE__ */ new WeakMap();
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
    var varData_1968;
    var varData_1969 = class {
      constructor(param_1, param_2, param_3, param_4, param_5, _0x668f6c = 30, _0x592807 = false) {
        varData_1918(this, varData_1959);
        varData_1918(this, varData_1961);
        varData_1918(this, varData_1963);
        varData_1918(this, varData_1965);
        varData_1918(this, varData_1967);
        varData_1918(this, varData_1947, void 0);
        varData_1918(this, varData_1948, void 0);
        varData_1918(this, varData_1949, void 0);
        varData_1918(this, varData_1950, void 0);
        varData_1918(this, varData_1951, void 0);
        varData_1918(this, varData_1952, void 0);
        varData_1918(this, varData_1953, void 0);
        varData_1918(this, varData_1954, void 0);
        varData_1918(this, varData_1955, void 0);
        varData_1918(this, varData_1956, void 0);
        varData_1918(this, varData_1957, void 0);
        varData_1918(this, varData_1958, void 0);
        varData_1919(this, varData_1947, param_1);
        varData_1919(this, varData_1948, param_4);
        varData_1919(this, varData_1949, param_5);
        varData_1919(this, varData_1950, param_2);
        varData_1919(this, varData_1951, param_3);
        varData_1919(this, varData_1952, _0x592807);
        varData_1919(this, varData_1953, _0x668f6c);
        varData_1919(this, varData_1955, varData_1917(this, varData_1948).x / _0x668f6c);
        varData_1919(this, varData_1956, varData_1917(this, varData_1948).y / _0x668f6c);
        varData_1919(this, varData_1954, varData_1917(this, varData_1955) * varData_1917(this, varData_1956));
        varData_1919(this, varData_1957, varData_1920(this, varData_1959, varData_1960).call(this, varData_1917(this, varData_1947), varData_1917(this, varData_1953), varData_1917(this, varData_1955), varData_1917(this, varData_1956), varData_1917(this, varData_1952)));
        varData_1919(this, varData_1958, varData_1920(this, varData_1961, varData_1962).call(this, varData_1917(this, varData_1957), varData_1917(this, varData_1954)));
      }
      get cells() {
        return varData_1917(this, varData_1957);
      }
      get cellSize() {
        return varData_1917(this, varData_1953);
      }
      get cellWidth() {
        return varData_1917(this, varData_1955);
      }
      get cellHeight() {
        return varData_1917(this, varData_1956);
      }
      get gridArea() {
        return varData_1917(this, varData_1958);
      }
      get gridCoverage() {
        return varData_1917(this, varData_1958) / varData_1917(this, varData_1949) * 100;
      }
      isPointInsideGrid(param_1) {
        var varData_1970;
        const varData_1971 = param_1.x - varData_1917(this, varData_1950).x;
        const varData_1972 = param_1.y - varData_1917(this, varData_1950).y;
        const roundedVal = Math.floor(varData_1971 * varData_1917(this, varData_1953) / varData_1917(this, varData_1948).x);
        const roundedVal_1 = Math.floor(varData_1972 * varData_1917(this, varData_1953) / varData_1917(this, varData_1948).y);
        let varData_1973 = (varData_1970 = varData_1917(this, varData_1957)[roundedVal]) == null ? void 0 : varData_1970[roundedVal_1];
        if (!varData_1973 && varData_1917(this, varData_1952)) {
          varData_1973 = varData_1920(this, varData_1965, varData_1966).call(this, roundedVal, roundedVal_1, varData_1917(this, varData_1955), varData_1917(this, varData_1956), varData_1917(this, varData_1947));
          varData_1917(this, varData_1957)[roundedVal][roundedVal_1] = varData_1973;
          if (!varData_1973) {
            return false;
          }
          varData_1919(this, varData_1958, varData_1917(this, varData_1958) + varData_1917(this, varData_1954));
        }
        return varData_1973 ?? false;
      }
    };
    varData_1947 = /* @__PURE__ */ new WeakMap();
    varData_1948 = /* @__PURE__ */ new WeakMap();
    varData_1949 = /* @__PURE__ */ new WeakMap();
    varData_1950 = /* @__PURE__ */ new WeakMap();
    varData_1951 = /* @__PURE__ */ new WeakMap();
    varData_1952 = /* @__PURE__ */ new WeakMap();
    varData_1953 = /* @__PURE__ */ new WeakMap();
    varData_1954 = /* @__PURE__ */ new WeakMap();
    varData_1955 = /* @__PURE__ */ new WeakMap();
    varData_1956 = /* @__PURE__ */ new WeakMap();
    varData_1957 = /* @__PURE__ */ new WeakMap();
    varData_1958 = /* @__PURE__ */ new WeakMap();
    varData_1959 = /* @__PURE__ */ new WeakSet();
    varData_1960 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_1974 = {};
      for (let numericVal_91 = 0; numericVal_91 < param_2; numericVal_91++) {
        varData_1974[numericVal_91] = {};
        if (param_5) {
          continue;
        }
        for (let numericVal_92 = 0; numericVal_92 < param_2; numericVal_92++) {
          const varData_1975 = varData_1920(this, varData_1965, varData_1966).call(this, numericVal_91, numericVal_92, param_3, param_4, param_1);
          if (!varData_1975) {
            continue;
          }
          varData_1974[numericVal_91][numericVal_92] = true;
        }
      }
      return varData_1974;
    };
    varData_1961 = /* @__PURE__ */ new WeakSet();
    varData_1962 = function(param_1, param_2) {
      let numericVal_91 = 0;
      for (const varData_1976 in param_1) {
        for (const varData_1977 in param_1[varData_1976]) {
          numericVal_91 += param_2;
        }
      }
      return numericVal_91;
    };
    varData_1963 = /* @__PURE__ */ new WeakSet();
    varData_1964 = function(param_1, param_2, param_3, param_4) {
      const itemList_3 = [];
      const varData_1978 = param_1 * param_3 + varData_1917(this, varData_1950).x;
      const varData_1979 = param_2 * param_4 + varData_1917(this, varData_1950).y;
      itemList_3.push(new varData_2056(varData_1978, varData_1979));
      itemList_3.push(new varData_2056(varData_1978 + param_3, varData_1979));
      itemList_3.push(new varData_2056(varData_1978 + param_3, varData_1979 + param_4));
      itemList_3.push(new varData_2056(varData_1978, varData_1979 + param_4));
      return itemList_3;
    };
    varData_1965 = /* @__PURE__ */ new WeakSet();
    varData_1966 = function(param_1, param_2, param_3, param_4, param_5) {
      const varData_1980 = varData_1920(this, varData_1963, varData_1964).call(this, param_1, param_2, param_3, param_4);
      let isDisabled_12 = false;
      for (const varData_1981 of varData_1980) {
        const varData_1982 = varData_2085.MathUtils.windingNumber(varData_1981, param_5);
        if (varData_1982 !== 0) {
          isDisabled_12 = true;
          break;
        }
      }
      if (!isDisabled_12) {
        return false;
      }
      for (let numericVal_91 = 0; numericVal_91 < varData_1980.length; numericVal_91++) {
        const varData_1983 = varData_1980[numericVal_91];
        const varData_1984 = varData_1980[(numericVal_91 + 1) % varData_1980.length];
        for (let numericVal_92 = 0; numericVal_92 < param_5.length; numericVal_92++) {
          const varData_1985 = param_5[numericVal_92];
          const varData_1986 = param_5[(numericVal_92 + 1) % param_5.length];
          if (varData_1920(this, varData_1967, varData_1968).call(this, varData_1983, varData_1984, varData_1985, varData_1986)) {
            return false;
          }
        }
      }
      return true;
    };
    varData_1967 = /* @__PURE__ */ new WeakSet();
    varData_1968 = function(param_1, param_2, param_3, param_4) {
      const varData_1987 = (param_2.x - param_1.x) * (param_4.y - param_3.y) - (param_2.y - param_1.y) * (param_4.x - param_3.x);
      const varData_1988 = (param_1.y - param_3.y) * (param_4.x - param_3.x) - (param_1.x - param_3.x) * (param_4.y - param_3.y);
      const varData_1989 = (param_1.y - param_3.y) * (param_2.x - param_1.x) - (param_1.x - param_3.x) * (param_2.y - param_1.y);
      if (varData_1987 === 0) {
        return varData_1988 === 0 && varData_1989 === 0;
      }
      const varData_1990 = varData_1988 / varData_1987;
      const varData_1991 = varData_1989 / varData_1987;
      return varData_1990 >= 0 && varData_1990 <= 1 && varData_1991 >= 0 && varData_1991 <= 1;
    };
    var varData_1992;
    var varData_1993;
    var varData_1994;
    var varData_1995;
    var varData_1996;
    var varData_1997;
    var varData_1998;
    var varData_1999;
    var varData_2000;
    var varData_2001;
    var varData_2002;
    var varData_2003;
    var varData_2004;
    var varData_2005;
    var varData_2006;
    var varData_2007;
    var varData_2008;
    var varData_2009;
    var varData_2010 = class {
      constructor(param_1, _0x1ba1e5 = {}, _0x4cd1d6 = {}) {
        varData_1918(this, varData_2000);
        varData_1918(this, varData_2002);
        varData_1918(this, varData_2004);
        varData_1918(this, varData_2006);
        varData_1918(this, varData_2008);
        varData_1918(this, varData_1992, void 0);
        varData_1918(this, varData_1993, void 0);
        varData_1918(this, varData_1994, void 0);
        varData_1918(this, varData_1995, void 0);
        varData_1918(this, varData_1996, void 0);
        varData_1918(this, varData_1997, void 0);
        varData_1918(this, varData_1998, void 0);
        varData_1918(this, varData_1999, void 0);
        varData_1919(this, varData_1992, varData_2085.getUUID());
        varData_1919(this, varData_1993, param_1);
        varData_1919(this, varData_1994, varData_1920(this, varData_2000, varData_2001).call(this, param_1));
        varData_1919(this, varData_1995, varData_1920(this, varData_2002, varData_2003).call(this, param_1));
        varData_1919(this, varData_1996, varData_1920(this, varData_2008, varData_2009).call(this, param_1));
        varData_1919(this, varData_1997, varData_1920(this, varData_2006, varData_2007).call(this, varData_1917(this, varData_1994), varData_1917(this, varData_1995)));
        varData_1919(this, varData_1998, varData_1920(this, varData_2004, varData_2005).call(this, varData_1917(this, varData_1994), varData_1917(this, varData_1995)));
        this.options = _0x1ba1e5;
        this.data = _0x4cd1d6;
        if (!this.options.useGrid && !this.options.useLazyGrid) {
          return;
        }
        varData_1919(this, varData_1999, new varData_1969(varData_1917(this, varData_1993), varData_1917(this, varData_1994), varData_1917(this, varData_1995), varData_1917(this, varData_1997), varData_1917(this, varData_1996), _0x1ba1e5.gridCellSize, _0x1ba1e5.useLazyGrid));
      }
      get id() {
        return varData_1917(this, varData_1992);
      }
      get center() {
        return varData_1917(this, varData_1998);
      }
      get min() {
        return varData_1917(this, varData_1994);
      }
      get max() {
        return varData_1917(this, varData_1995);
      }
      get points() {
        return [...varData_1917(this, varData_1993)];
      }
      isPointInside(param_1) {
        if (param_1.x < varData_1917(this, varData_1994).x || param_1.x > varData_1917(this, varData_1995).x) {
          return false;
        } else if (param_1.y < varData_1917(this, varData_1994).y || param_1.y > varData_1917(this, varData_1995).y) {
          return false;
        }
        if ((this.options.minZ || this.options.maxZ) && param_1 instanceof varData_1938) {
          const varData_2011 = this.options.minZ ?? -Infinity;
          const varData_2012 = this.options.maxZ ?? Infinity;
          if (param_1.z < varData_2011 || param_1.z > varData_2012) {
            return false;
          }
        }
        if ((this.options.useGrid || this.options.useLazyGrid) && varData_1917(this, varData_1999)) {
          return varData_1917(this, varData_1999).isPointInsideGrid(param_1);
        }
        const varData_2013 = varData_2085.MathUtils.windingNumber(param_1, varData_1917(this, varData_1993));
        return varData_2013 !== 0;
      }
      addPoint(param_1) {
        varData_1917(this, varData_1993).push(param_1);
      }
      removePoint(param_1) {
        const varData_2014 = varData_1917(this, varData_1993).findIndex((param_1_1) => param_1_1.x === param_1.x && param_1_1.y === param_1.y);
        if (varData_2014 === -1) {
          return;
        }
        varData_1917(this, varData_1993).splice(varData_2014, 1);
      }
      removeLastPoint() {
        varData_1917(this, varData_1993).pop();
      }
      recalculate() {
        varData_1919(this, varData_1994, varData_1920(this, varData_2000, varData_2001).call(this, varData_1917(this, varData_1993)));
        varData_1919(this, varData_1995, varData_1920(this, varData_2002, varData_2003).call(this, varData_1917(this, varData_1993)));
        varData_1919(this, varData_1996, varData_1920(this, varData_2008, varData_2009).call(this, varData_1917(this, varData_1993)));
        varData_1919(this, varData_1997, varData_1920(this, varData_2006, varData_2007).call(this, varData_1917(this, varData_1994), varData_1917(this, varData_1995)));
        varData_1919(this, varData_1998, varData_1920(this, varData_2004, varData_2005).call(this, varData_1917(this, varData_1994), varData_1917(this, varData_1995)));
        if (!this.options.useGrid) {
          return;
        }
        varData_1919(this, varData_1999, new varData_1969(varData_1917(this, varData_1993), varData_1917(this, varData_1994), varData_1917(this, varData_1995), varData_1917(this, varData_1997), varData_1917(this, varData_1996), this.options.gridCellSize, this.options.useLazyGrid));
      }
    };
    varData_1992 = /* @__PURE__ */ new WeakMap();
    varData_1993 = /* @__PURE__ */ new WeakMap();
    varData_1994 = /* @__PURE__ */ new WeakMap();
    varData_1995 = /* @__PURE__ */ new WeakMap();
    varData_1996 = /* @__PURE__ */ new WeakMap();
    varData_1997 = /* @__PURE__ */ new WeakMap();
    varData_1998 = /* @__PURE__ */ new WeakMap();
    varData_1999 = /* @__PURE__ */ new WeakMap();
    varData_2000 = /* @__PURE__ */ new WeakSet();
    varData_2001 = function(param_1) {
      let varData_2015 = Number.MAX_SAFE_INTEGER;
      let varData_2016 = Number.MAX_SAFE_INTEGER;
      for (const varData_2017 of param_1) {
        varData_2015 = Math.min(varData_2015, varData_2017.x);
        varData_2016 = Math.min(varData_2016, varData_2017.y);
      }
      return new varData_2056(varData_2015, varData_2016);
    };
    varData_2002 = /* @__PURE__ */ new WeakSet();
    varData_2003 = function(param_1) {
      let varData_2018 = Number.MIN_SAFE_INTEGER;
      let varData_2019 = Number.MIN_SAFE_INTEGER;
      for (const varData_2020 of param_1) {
        varData_2018 = Math.max(varData_2018, varData_2020.x);
        varData_2019 = Math.max(varData_2019, varData_2020.y);
      }
      return new varData_2056(varData_2018, varData_2019);
    };
    varData_2004 = /* @__PURE__ */ new WeakSet();
    varData_2005 = function(param_1, param_2) {
      const varData_2021 = param_2.add(param_1);
      return varData_2021.divideScalar(2);
    };
    varData_2006 = /* @__PURE__ */ new WeakSet();
    varData_2007 = function(param_1, param_2) {
      return param_2.sub(param_1);
    };
    varData_2008 = /* @__PURE__ */ new WeakSet();
    varData_2009 = function(param_1) {
      let numericVal_91 = 0;
      for (let numericVal_92 = 0, loopIdx = param_1.length - 1; numericVal_92 < param_1.length; loopIdx = numericVal_92++) {
        const varData_2022 = param_1[numericVal_92];
        const varData_2023 = param_1[loopIdx];
        numericVal_91 += varData_2022.x * varData_2023.y;
        numericVal_91 -= varData_2022.y * varData_2023.x;
      }
      return Math.abs(numericVal_91 / 2);
    };
    var varData_2024;
    var varData_2025;
    var varData_2026 = class _0x505231 {
      constructor(param_1, param_2) {
        varData_1918(this, varData_2024);
        const varData_2027 = varData_1920(this, varData_2024, varData_2025).call(this, param_1, param_2);
        this.x = varData_2027.x;
        this.y = varData_2027.y;
      }
      equals(param_1, param_2) {
        const varData_2028 = varData_1920(this, varData_2024, varData_2025).call(this, param_1, param_2);
        return this.x === varData_2028.x && this.y === varData_2028.y;
      }
      add(param_1, param_2, param_3) {
        const varData_2029 = varData_1920(this, varData_2024, varData_2025).call(this, param_1, param_2);
        const varData_2030 = this.x + (param_3 ? varData_2029.x * param_3 : varData_2029.x);
        const varData_2031 = this.y + (param_3 ? varData_2029.y * param_3 : varData_2029.y);
        return new _0x505231(varData_2030, varData_2031);
      }
      addScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2032 = this.x + param_1;
        const varData_2033 = this.y + param_1;
        return new _0x505231(varData_2032, varData_2033);
      }
      sub(param_1, param_2, param_3) {
        const varData_2034 = varData_1920(this, varData_2024, varData_2025).call(this, param_1, param_2);
        const varData_2035 = this.x - (param_3 ? varData_2034.x * param_3 : varData_2034.x);
        const varData_2036 = this.y - (param_3 ? varData_2034.y * param_3 : varData_2034.y);
        return new _0x505231(varData_2035, varData_2036);
      }
      subScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2037 = this.x - param_1;
        const varData_2038 = this.y - param_1;
        return new _0x505231(varData_2037, varData_2038);
      }
      multiply(param_1, param_2) {
        const varData_2039 = varData_1920(this, varData_2024, varData_2025).call(this, param_1, param_2);
        const varData_2040 = this.x * varData_2039.x;
        const varData_2041 = this.y * varData_2039.y;
        return new _0x505231(varData_2040, varData_2041);
      }
      multiplyScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2042 = this.x * param_1;
        const varData_2043 = this.y * param_1;
        return new _0x505231(varData_2042, varData_2043);
      }
      divide(param_1, param_2) {
        const varData_2044 = varData_1920(this, varData_2024, varData_2025).call(this, param_1, param_2);
        const varData_2045 = this.x / varData_2044.x;
        const varData_2046 = this.y / varData_2044.y;
        return new _0x505231(varData_2045, varData_2046);
      }
      divideScalar(param_1) {
        if (typeof param_1 !== "number") {
          throw new Error("Invalid scalar");
        }
        const varData_2047 = this.x / param_1;
        const varData_2048 = this.y / param_1;
        return new _0x505231(varData_2047, varData_2048);
      }
      round() {
        const roundedVal = Math.round(this.x);
        const roundedVal_1 = Math.round(this.y);
        return new _0x505231(roundedVal, roundedVal_1);
      }
      floor() {
        const roundedVal = Math.floor(this.x);
        const roundedVal_1 = Math.floor(this.y);
        return new _0x505231(roundedVal, roundedVal_1);
      }
      ceil() {
        const varData_2049 = Math.ceil(this.x);
        const varData_2050 = Math.ceil(this.y);
        return new _0x505231(varData_2049, varData_2050);
      }
      getCenter(param_1, param_2) {
        const varData_2051 = varData_1920(this, varData_2024, varData_2025).call(this, param_1, param_2);
        return new _0x505231((this.x + varData_2051.x) / 2, (this.y + varData_2051.y) / 2);
      }
      getDistance(param_1, param_2) {
        const [_0x2ff076, _0x438f63] = param_1 instanceof Array ? param_1 : typeof param_1 === "object" ? [param_1.x, param_1.y] : [param_1, param_2];
        if (typeof _0x2ff076 !== "number" || typeof _0x438f63 !== "number") {
          throw new Error("Invalid vector coordinates");
        }
        const [_0x23f9bf, _0x30f48e] = [this.x - _0x2ff076, this.y - _0x438f63];
        return Math.sqrt(_0x23f9bf * _0x23f9bf + _0x30f48e * _0x30f48e);
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
        var varData_2052 = {
          x: this.x,
          y: this.y
        };
        return varData_2052;
      }
      toString(param_1) {
        return JSON.stringify(this.toJSON(param_1));
      }
    };
    varData_2024 = /* @__PURE__ */ new WeakSet();
    varData_2025 = function(param_1, param_2) {
      let varData_2053 = {
        x: 0,
        y: 0
      };
      if (param_1 instanceof varData_2026 || param_1 instanceof varData_1938) {
        varData_2053 = param_1;
      } else if (param_1 instanceof Array) {
        var varData_2054 = {
          x: param_1[0],
          y: param_1[1]
        };
        varData_2053 = varData_2054;
      } else if (typeof param_1 === "object") {
        varData_2053 = param_1;
      } else {
        var varData_2055 = {
          x: param_1,
          y: param_2
        };
        varData_2053 = varData_2055;
      }
      if (typeof varData_2053.x !== "number" || typeof varData_2053.y !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return varData_2053;
    };
    var varData_2056 = varData_2026;
    var varData_2057 = (param_1, param_2, param_3) => {
      return Math.min(Math.max(param_1, param_2), param_3);
    };
    var varData_2058 = (param_1, param_2, param_3) => {
      return param_2[0] + (param_3 - param_1[0]) * (param_2[1] - param_2[0]) / (param_1[1] - param_1[0]);
    };
    var varData_2059 = ([_0x553dd5, _0x1b8304, _0x19a71c], [_0x54cb02, _0xf54b0, _0x4b87eb]) => {
      const [_0x216b2b, _0x47ff6d, _0x7ce527] = [_0x553dd5 - _0x54cb02, _0x1b8304 - _0xf54b0, _0x19a71c - _0x4b87eb];
      return Math.sqrt(_0x216b2b * _0x216b2b + _0x47ff6d * _0x47ff6d + _0x7ce527 * _0x7ce527);
    };
    var varData_2060 = (param_1, param_2) => {
      if (param_2) {
        return Math.floor(Math.random() * (param_2 - param_1 + 1) + param_1);
      } else {
        return Math.floor(Math.random() * param_1);
      }
    };
    var varData_2061 = (param_1, param_2) => {
      if (param_1 instanceof varData_2056) {
        return param_1;
      } else if (param_1 instanceof varData_1938) {
        return new varData_2056(param_1);
      } else if (param_1 instanceof Array) {
        return new varData_2056(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_2056(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_2056(param_1, param_2);
    };
    var varData_2062 = (param_1, param_2, param_3) => {
      if (param_1 instanceof varData_1938) {
        return param_1;
      } else if (param_1 instanceof Array) {
        return new varData_1938(param_1);
      } else if (typeof param_1 === "object") {
        return new varData_1938(param_1);
      }
      if (typeof param_1 !== "number" || typeof param_2 !== "number" || typeof param_3 !== "number") {
        throw new Error("Invalid vector coordinates");
      }
      return new varData_1938(param_1, param_2, param_3);
    };
    var varData_2063 = (param_1, param_2) => {
      let numericVal_91 = 0;
      const varData_2064 = (param_1_1, param_2_1, param_3) => {
        return (param_2_1.x - param_1_1.x) * (param_3.y - param_1_1.y) - (param_3.x - param_1_1.x) * (param_2_1.y - param_1_1.y);
      };
      for (let numericVal_92 = 0; numericVal_92 < param_2.length; numericVal_92++) {
        const varData_2065 = param_2[numericVal_92];
        const varData_2066 = param_2[(numericVal_92 + 1) % param_2.length];
        if (varData_2065.y <= param_1.y) {
          if (varData_2066.y > param_1.y && varData_2064(varData_2065, varData_2066, param_1) > 0) {
            numericVal_91++;
          }
        } else if (varData_2066.y <= param_1.y && varData_2064(varData_2065, varData_2066, param_1) < 0) {
          numericVal_91--;
        }
      }
      return numericVal_91;
    };
    var varData_2067 = {
      clamp: varData_2057,
      getMapRange: varData_2058,
      getDistance: varData_2059,
      getRandomNumber: varData_2060,
      parseVector2: varData_2061,
      parseVector3: varData_2062,
      windingNumber: varData_2063
    };
    var varData_2068 = varData_2067;
    var varData_2069 = {};
    var varData_2070 = {
      ArrUtils: () => varData_2074
    };
    varData_1914(varData_2069, varData_2070);
    var varData_2071 = (param_1) => {
      for (let loopIdx = param_1.length - 1; loopIdx > 0; loopIdx--) {
        const roundedVal = Math.floor(Math.random() * (loopIdx + 1));
        [param_1[loopIdx], param_1[roundedVal]] = [param_1[roundedVal], param_1[loopIdx]];
      }
      return param_1;
    };
    var varData_2072 = (param_1, param_2) => {
      const itemList_3 = [];
      for (let numericVal_91 = 0; numericVal_91 < param_2; numericVal_91++) {
        itemList_3.push(param_1[Math.floor(Math.random() * param_1.length)]);
      }
      return itemList_3;
    };
    var varData_2073 = {
      shuffleArray: varData_2071,
      getRandomElements: varData_2072
    };
    var varData_2074 = varData_2073;
    function handleAction_122(param_1, param_2) {
      const varData_2075 = "_";
      const varData_2076 = handleAction_123((param_1_1, param_2_1, ..._0x13b6a4) => {
        return param_1(param_1_1, ..._0x13b6a4);
      }, param_2);
      return {
        get: function(..._0x2bf68f) {
          return varData_2076.get(varData_2075, ..._0x2bf68f);
        },
        reset: function() {
          varData_2076.reset(varData_2075);
        }
      };
    }
    function handleAction_123(param_1, param_2) {
      const varData_2077 = param_2.timeToLive || 6e4;
      const varData_2078 = {};
      const varData_2079 = param_2.immediateResolve || false;
      async function handleAction_124(param_1_1, ..._0xd58cdc) {
        let varData_2080 = varData_2078[param_1_1];
        if (!varData_2080) {
          varData_2080 = {
            value: null,
            lastUpdated: 0
          };
          varData_2078[param_1_1] = varData_2080;
        }
        const timestamp = Date.now();
        if (varData_2080.lastUpdated === 0 || timestamp - varData_2080.lastUpdated > varData_2077) {
          const [_0x1d82ed, _0x1a1541] = await param_1(varData_2080, param_1_1, ..._0xd58cdc);
          if (_0x1d82ed) {
            varData_2080.lastUpdated = timestamp;
            varData_2080.value = _0x1a1541;
          }
          return _0x1a1541;
        }
        if (varData_2079) {
          return Promise.resolve(varData_2080.value);
        } else {
          return await new Promise((param_1_2) => setTimeout(() => param_1_2(varData_2080.value), 0));
        }
      }
      return {
        get: async function(param_1_1, ..._0x2aec15) {
          return await handleAction_124(param_1_1, ..._0x2aec15);
        },
        reset: function(param_1_1) {
          const varData_2081 = varData_2078[param_1_1];
          if (varData_2081) {
            varData_2081.lastUpdated = 0;
          }
        },
        clear: function() {
          for (const varData_2082 in varData_2078) {
            delete varData_2078[varData_2082];
          }
        }
      };
    }
    function handleAction_125() {
      if (globalThis && typeof globalThis.crypto === "object") {
        return varData_85();
      } else {
        return new varData_531(4).toString();
      }
    }
    function handleAction_126(param_1) {
      return varData_108(param_1, varData_108.URL);
    }
    function handleAction_127(param_1, param_2) {
      return new Promise((param_1_1, param_2_1) => {
        const timestamp = Date.now();
        const intervalId = setInterval(() => {
          const varData_2083 = Date.now() - timestamp > param_2;
          if (param_1() || varData_2083) {
            clearInterval(intervalId);
            return param_1_1(varData_2083);
          }
        }, 1);
      });
    }
    function handleAction_128(param_1) {
      return new Promise((param_1_1) => setTimeout(() => param_1_1(), param_1));
    }
    function handleAction_129() {
      return handleAction_128(0);
    }
    var varData_2084 = {
      cache: handleAction_122,
      cacheableMap: handleAction_123,
      waitForCondition: handleAction_127,
      getUUID: handleAction_125,
      getStringHash: handleAction_126,
      wait: handleAction_128,
      waitForNextFrame: handleAction_129,
      deflate: varData_521,
      inflate: varData_525,
      ...varData_1922,
      ...varData_2069
    };
    var varData_2085 = varData_2084;
    var varData_2086 = ((param_1) => {
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
    })(varData_2086 || {});
    ;
    function handleAction_130(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_91 = 0, loopIdx = new Array(param_2); numericVal_91 < param_2; numericVal_91++) {
        loopIdx[numericVal_91] = param_1[numericVal_91];
      }
      return loopIdx;
    }
    function handleAction_131(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_132(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2087 = param_1[param_6](param_7);
        var varData_2088 = varData_2087.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2087.done) {
        param_2(varData_2088);
      } else {
        Promise.resolve(varData_2088).then(param_4, param_5);
      }
    }
    function handleAction_133(param_1) {
      return function() {
        var varData_2089 = this;
        var varData_2090 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2091 = param_1.apply(varData_2089, varData_2090);
          function handleAction_134(param_1_2) {
            handleAction_132(varData_2091, param_1_1, param_2, handleAction_134, handleAction_135, "next", param_1_2);
          }
          function handleAction_135(param_1_2) {
            handleAction_132(varData_2091, param_1_1, param_2, handleAction_134, handleAction_135, "throw", param_1_2);
          }
          handleAction_134(void 0);
        });
      };
    }
    function handleAction_136(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_137(param_1, param_2) {
      for (var numericVal_91 = 0; numericVal_91 < param_2.length; numericVal_91++) {
        var varData_2092 = param_2[numericVal_91];
        varData_2092.enumerable = varData_2092.enumerable || false;
        varData_2092.configurable = true;
        if ("value" in varData_2092) {
          varData_2092.writable = true;
        }
        Object.defineProperty(param_1, varData_2092.key, varData_2092);
      }
    }
    function handleAction_138(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_137(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_137(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_139(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2093 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2093);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_140(param_1, param_2) {
      var varData_2094 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2094 == null) {
        return;
      }
      var itemList_3 = [];
      var isEnabled_2 = true;
      var isDisabled_12 = false;
      var varData_2095;
      var varData_2096;
      try {
        for (varData_2094 = varData_2094.call(param_1); !(isEnabled_2 = (varData_2095 = varData_2094.next()).done); isEnabled_2 = true) {
          itemList_3.push(varData_2095.value);
          if (param_2 && itemList_3.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_12 = true;
        varData_2096 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2094.return != null) {
            varData_2094.return();
          }
        } finally {
          if (isDisabled_12) {
            throw varData_2096;
          }
        }
      }
      return itemList_3;
    }
    function handleAction_141() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_142(param_1, param_2) {
      return handleAction_131(param_1) || handleAction_140(param_1, param_2) || handleAction_143(param_1, param_2) || handleAction_141();
    }
    function handleAction_143(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_130(param_1, param_2);
      }
      var varData_2097 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2097 === "Object" && param_1.constructor) {
        varData_2097 = param_1.constructor.name;
      }
      if (varData_2097 === "Map" || varData_2097 === "Set") {
        return Array.from(varData_2097);
      }
      if (varData_2097 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2097)) {
        return handleAction_130(param_1, param_2);
      }
    }
    function handleAction_144(param_1, param_2) {
      var varData_2098;
      var varData_2099;
      var varData_2100;
      var varData_2101;
      var varData_2102 = {
        label: 0,
        sent: function() {
          if (varData_2100[0] & 1) {
            throw varData_2100[1];
          }
          return varData_2100[1];
        },
        trys: [],
        ops: []
      };
      varData_2101 = {
        next: handleAction_145(0),
        throw: handleAction_145(1),
        return: handleAction_145(2)
      };
      if (typeof Symbol === "function") {
        varData_2101[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2101;
      function handleAction_145(param_1_1) {
        return function(param_1_2) {
          return handleAction_146([param_1_1, param_1_2]);
        };
      }
      function handleAction_146(param_1_1) {
        if (varData_2098) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2102) {
          try {
            varData_2098 = 1;
            if (varData_2099 && (varData_2100 = param_1_1[0] & 2 ? varData_2099.return : param_1_1[0] ? varData_2099.throw || ((varData_2100 = varData_2099.return) && varData_2100.call(varData_2099), 0) : varData_2099.next) && !(varData_2100 = varData_2100.call(varData_2099, param_1_1[1])).done) {
              return varData_2100;
            }
            varData_2099 = 0;
            if (varData_2100) {
              param_1_1 = [param_1_1[0] & 2, varData_2100.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2100 = param_1_1;
                break;
              case 4:
                varData_2102.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2102.label++;
                varData_2099 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2102.ops.pop();
                varData_2102.trys.pop();
                continue;
              default:
                if (!(varData_2100 = varData_2102.trys, varData_2100 = varData_2100.length > 0 && varData_2100[varData_2100.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2102 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2100 || param_1_1[1] > varData_2100[0] && param_1_1[1] < varData_2100[3])) {
                  varData_2102.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2102.label < varData_2100[1]) {
                  varData_2102.label = varData_2100[1];
                  varData_2100 = param_1_1;
                  break;
                }
                if (varData_2100 && varData_2102.label < varData_2100[2]) {
                  varData_2102.label = varData_2100[2];
                  varData_2102.ops.push(param_1_1);
                  break;
                }
                if (varData_2100[2]) {
                  varData_2102.ops.pop();
                }
                varData_2102.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2102);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2099 = 0;
          } finally {
            varData_2098 = varData_2100 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2103 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2103;
      }
    }
    function handleAction_147(param_1) {
      var varData_2104 = typeof Symbol === "function" && Symbol.iterator;
      var varData_2105 = varData_2104 && param_1[varData_2104];
      var numericVal_91 = 0;
      if (varData_2105) {
        return varData_2105.call(param_1);
      }
      if (param_1 && typeof param_1.length === "number") {
        return {
          next: function() {
            if (param_1 && numericVal_91 >= param_1.length) {
              param_1 = void 0;
            }
            var varData_2106 = {
              value: param_1 && param_1[numericVal_91++],
              done: !param_1
            };
            return varData_2106;
          }
        };
      }
      throw new TypeError(varData_2104 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    var varData_2107 = (function() {
      "use strict";
      "use strict";
      function handleAction_148() {
        handleAction_136(this, handleAction_148);
      }
      handleAction_138(handleAction_148, null, [{
        key: "Init",
        value: function _0x3fd3d6() {
          var varData_2108 = this;
          return handleAction_133(function() {
            var varData_2109;
            var varData_2110;
            var varData_2111;
            var varData_2112;
            var varData_2113;
            var varData_2114;
            var varData_2115;
            var varData_2116;
            var varData_2117;
            var varData_2118;
            var varData_2119;
            var varData_2120;
            var varData_2121;
            var varData_2122;
            var varData_2123;
            return handleAction_144(this, function(param_1) {
              switch (param_1.label) {
                case 0:
                  varData_2109 = CreateRuntimeTxd("interactions");
                  varData_2110 = [];
                  varData_2111 = true;
                  varData_2112 = false;
                  varData_2113 = void 0;
                  param_1.label = 1;
                case 1:
                  param_1.trys.push([1, 6, 7, 8]);
                  varData_2114 = function() {
                    var varData_2124;
                    var varData_2125;
                    var varData_2126;
                    var varData_2127;
                    var varData_2128;
                    return handleAction_144(this, function(param_1_1) {
                      switch (param_1_1.label) {
                        case 0:
                          varData_2124 = handleAction_142(varData_2116.value, 2);
                          varData_2125 = varData_2124[0];
                          varData_2126 = varData_2124[1];
                          varData_2127 = CreateDui(`https://assets.nopixel.net/dev/images/interactions/${varData_2125}.svg?${Math.random()}`, varData_2126.res[0], varData_2126.res[1]);
                          return [4, varData_1420.waitForCondition(function() {
                            return IsDuiAvailable(varData_2127);
                          }, 1e4)];
                        case 1:
                          param_1_1.sent();
                          varData_2128 = GetDuiHandle(varData_2127);
                          CreateRuntimeTextureFromDuiHandle(varData_2109, varData_2125, varData_2128);
                          varData_2110.push(varData_2127);
                          return [2];
                      }
                    });
                  };
                  varData_2115 = Object.entries(varData_2108.textures)[Symbol.iterator]();
                  param_1.label = 2;
                case 2:
                  if (varData_2111 = (varData_2116 = varData_2115.next()).done) {
                    return [3, 5];
                  }
                  return [5, handleAction_147(varData_2114())];
                case 3:
                  param_1.sent();
                  param_1.label = 4;
                case 4:
                  varData_2111 = true;
                  return [3, 2];
                case 5:
                  return [3, 8];
                case 6:
                  varData_2117 = param_1.sent();
                  varData_2112 = true;
                  varData_2113 = varData_2117;
                  return [3, 8];
                case 7:
                  try {
                    if (!varData_2111 && varData_2115.return != null) {
                      varData_2115.return();
                    }
                  } finally {
                    if (varData_2112) {
                      throw varData_2113;
                    }
                  }
                  return [7];
                case 8:
                  RequestStreamedTextureDict("interactions", true);
                  return [4, varData_1420.waitForCondition(function() {
                    return HasStreamedTextureDictLoaded("interactions");
                  }, 1e4)];
                case 9:
                  param_1.sent();
                  return [4, varData_1420.wait(2e3)];
                case 10:
                  param_1.sent();
                  varData_2118 = true;
                  varData_2119 = false;
                  varData_2120 = void 0;
                  try {
                    for (varData_2121 = varData_2110[Symbol.iterator](); !(varData_2118 = (varData_2122 = varData_2121.next()).done); varData_2118 = true) {
                      varData_2123 = varData_2122.value;
                      DestroyDui(varData_2123);
                    }
                  } catch (err) {
                    varData_2119 = true;
                    varData_2120 = err;
                  } finally {
                    try {
                      if (!varData_2118 && varData_2121.return != null) {
                        varData_2121.return();
                      }
                    } finally {
                      if (varData_2119) {
                        throw varData_2120;
                      }
                    }
                  }
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "hasTextureLoaded",
        value: function _0x3d3017() {
          return HasStreamedTextureDictLoaded("interactions");
        }
      }, {
        key: "getTexture",
        value: function _0x5c8a32(param_1) {
          var varData_2129 = this.textures[param_1].size;
          var varData_2130 = {
            size: [varData_2129[0] / varData_2576.ratio, varData_2129[1]],
            res: this.textures[param_1].res
          };
          return varData_2130;
        }
      }]);
      return handleAction_148;
    })();
    handleAction_139(varData_2107, "textures", {
      key: {
        size: [0.019, 0.035],
        res: [72, 72]
      },
      key_red: {
        size: [0.019, 0.035],
        res: [72, 74]
      },
      point: {
        size: [0.015, 0.03],
        res: [50, 60]
      },
      label: {
        size: [0.1, 0.035],
        res: [368, 74]
      },
      label_no: {
        size: [0.1, 0.035],
        res: [368, 74]
      },
      circle: {
        size: [0.015, 0.02625],
        res: [60, 60]
      },
      circle_selected: {
        size: [0.015, 0.02625],
        res: [60, 60]
      },
      mouse: {
        size: [0.015, 0.03],
        res: [50, 60]
      },
      mouse_active: {
        size: [0.015, 0.03],
        res: [50, 60]
      }
    });
    ;
    var isDisabled_1 = false;
    function handleAction_149() {
      isDisabled_1 = true;
      varData_1584.execute("setState", {
        show: true
      });
    }
    function handleAction_150() {
      isDisabled_1 = false;
      varData_1584.execute("setState", {
        show: false
      });
    }
    function handleAction_151() {
      return isDisabled_1;
    }
    ;
    function handleAction_152(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_91 = 0, loopIdx = new Array(param_2); numericVal_91 < param_2; numericVal_91++) {
        loopIdx[numericVal_91] = param_1[numericVal_91];
      }
      return loopIdx;
    }
    function handleAction_153(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_154(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2131 = param_1[param_6](param_7);
        var varData_2132 = varData_2131.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2131.done) {
        param_2(varData_2132);
      } else {
        Promise.resolve(varData_2132).then(param_4, param_5);
      }
    }
    function handleAction_155(param_1) {
      return function() {
        var varData_2133 = this;
        var varData_2134 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2135 = param_1.apply(varData_2133, varData_2134);
          function handleAction_156(param_1_2) {
            handleAction_154(varData_2135, param_1_1, param_2, handleAction_156, handleAction_157, "next", param_1_2);
          }
          function handleAction_157(param_1_2) {
            handleAction_154(varData_2135, param_1_1, param_2, handleAction_156, handleAction_157, "throw", param_1_2);
          }
          handleAction_156(void 0);
        });
      };
    }
    function handleAction_158(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_159(param_1, param_2) {
      for (var numericVal_91 = 0; numericVal_91 < param_2.length; numericVal_91++) {
        var varData_2136 = param_2[numericVal_91];
        varData_2136.enumerable = varData_2136.enumerable || false;
        varData_2136.configurable = true;
        if ("value" in varData_2136) {
          varData_2136.writable = true;
        }
        Object.defineProperty(param_1, varData_2136.key, varData_2136);
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
        var varData_2137 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2137);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_162(param_1, param_2) {
      var varData_2138 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2138 == null) {
        return;
      }
      var itemList_3 = [];
      var isEnabled_2 = true;
      var isDisabled_22 = false;
      var varData_2139;
      var varData_2140;
      try {
        for (varData_2138 = varData_2138.call(param_1); !(isEnabled_2 = (varData_2139 = varData_2138.next()).done); isEnabled_2 = true) {
          itemList_3.push(varData_2139.value);
          if (param_2 && itemList_3.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_22 = true;
        varData_2140 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2138.return != null) {
            varData_2138.return();
          }
        } finally {
          if (isDisabled_22) {
            throw varData_2140;
          }
        }
      }
      return itemList_3;
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
      var varData_2141 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2141 === "Object" && param_1.constructor) {
        varData_2141 = param_1.constructor.name;
      }
      if (varData_2141 === "Map" || varData_2141 === "Set") {
        return Array.from(varData_2141);
      }
      if (varData_2141 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2141)) {
        return handleAction_152(param_1, param_2);
      }
    }
    function handleAction_166(param_1, param_2) {
      var varData_2142;
      var varData_2143;
      var varData_2144;
      var varData_2145;
      var varData_2146 = {
        label: 0,
        sent: function() {
          if (varData_2144[0] & 1) {
            throw varData_2144[1];
          }
          return varData_2144[1];
        },
        trys: [],
        ops: []
      };
      varData_2145 = {
        next: handleAction_167(0),
        throw: handleAction_167(1),
        return: handleAction_167(2)
      };
      if (typeof Symbol === "function") {
        varData_2145[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2145;
      function handleAction_167(param_1_1) {
        return function(param_1_2) {
          return handleAction_168([param_1_1, param_1_2]);
        };
      }
      function handleAction_168(param_1_1) {
        if (varData_2142) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2146) {
          try {
            varData_2142 = 1;
            if (varData_2143 && (varData_2144 = param_1_1[0] & 2 ? varData_2143.return : param_1_1[0] ? varData_2143.throw || ((varData_2144 = varData_2143.return) && varData_2144.call(varData_2143), 0) : varData_2143.next) && !(varData_2144 = varData_2144.call(varData_2143, param_1_1[1])).done) {
              return varData_2144;
            }
            varData_2143 = 0;
            if (varData_2144) {
              param_1_1 = [param_1_1[0] & 2, varData_2144.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2144 = param_1_1;
                break;
              case 4:
                varData_2146.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2146.label++;
                varData_2143 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2146.ops.pop();
                varData_2146.trys.pop();
                continue;
              default:
                if (!(varData_2144 = varData_2146.trys, varData_2144 = varData_2144.length > 0 && varData_2144[varData_2144.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2146 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2144 || param_1_1[1] > varData_2144[0] && param_1_1[1] < varData_2144[3])) {
                  varData_2146.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2146.label < varData_2144[1]) {
                  varData_2146.label = varData_2144[1];
                  varData_2144 = param_1_1;
                  break;
                }
                if (varData_2144 && varData_2146.label < varData_2144[2]) {
                  varData_2146.label = varData_2144[2];
                  varData_2146.ops.push(param_1_1);
                  break;
                }
                if (varData_2144[2]) {
                  varData_2146.ops.pop();
                }
                varData_2146.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2146);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2143 = 0;
          } finally {
            varData_2142 = varData_2144 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2147 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2147;
      }
    }
    var varData_2148 = (function() {
      "use strict";
      "use strict";
      function handleAction_169() {
        handleAction_158(this, handleAction_169);
        handleAction_161(this, "options", []);
        handleAction_161(this, "selectedIndex", 0);
        handleAction_161(this, "isHover", false);
        handleAction_161(this, "currentTexture", "");
        handleAction_161(this, "alphaValue", 255);
        handleAction_161(this, "canRender", false);
        handleAction_161(this, "renderCoords", []);
        handleAction_161(this, "isEnabled", false);
        handleAction_161(this, "canInteract", false);
        handleAction_161(this, "filteredOptions", []);
        handleAction_161(this, "resource", "");
        handleAction_161(this, "entity", void 0);
        handleAction_161(this, "entityData", void 0);
        handleAction_161(this, "gameTimer", null);
      }
      handleAction_160(handleAction_169, [{
        key: "create",
        value: function _0x106605(param_1) {
          var varData_2149 = this;
          return handleAction_155(function() {
            var varData_2150;
            var varData_2151;
            var varData_2152;
            var varData_2153;
            var varData_2154;
            var varData_2155;
            var varData_2156;
            var varData_2157;
            return handleAction_166(this, function(param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  return [4, Promise.all(varData_2149.options.map((function() {
                    var varData_2158 = handleAction_155(function(param_1_2) {
                      var varData_2159;
                      var varData_2160;
                      return handleAction_166(this, function(param_1_3) {
                        switch (param_1_3.label) {
                          case 0:
                            if (!param_1_2.isEnabled) {
                              return [2, param_1_2];
                            }
                            param_1_3.label = 1;
                          case 1:
                            param_1_3.trys.push([1, 3, , 4]);
                            return [4, param_1_2.isEnabled(varData_2149.entity)];
                          case 2:
                            varData_2159 = param_1_3.sent();
                            return [2, varData_2159 ? param_1_2 : false];
                          case 3:
                            varData_2160 = param_1_3.sent();
                            varData_1491.error("------------------------------\nERROR IN INTERACTION option isEnabled:", varData_2160, varData_2149.resource);
                            return [3, 4];
                          case 4:
                            return [2, false];
                        }
                      });
                    });
                    return function(param_1_2) {
                      return varData_2158.apply(this, arguments);
                    };
                  })()))];
                case 1:
                  varData_2150 = param_1_1.sent();
                  varData_2149.filteredOptions = varData_2150.filter(Boolean);
                  if (param_1) {
                    varData_2149.canRender = true;
                    return [2];
                  }
                  return [4, varData_2302.get()];
                case 2:
                  varData_2151 = param_1_1.sent();
                  if (!varData_2151) {
                    return [2];
                  }
                  varData_2152 = new varData_1273(varData_2151.coords);
                  varData_2153 = new varData_1273(varData_2149.renderCoords);
                  return [4, handleAction_232(varData_2152, varData_2153, 1, varData_2151.ped)];
                case 3:
                  varData_2154 = param_1_1.sent();
                  varData_2155 = varData_2154.didHit;
                  varData_2156 = varData_2154.entity;
                  varData_2157 = !varData_2155 || varData_2156 === varData_2149.entity;
                  varData_2149.canRender = varData_2157;
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "handleRender",
        value: function _0xcba13e(param_1, param_2, param_3) {
          SetDrawOrigin(param_1[0], param_1[1], param_1[2], 0);
          var varData_2161 = handleAction_151() ? "mouse_active" : param_3 ? "key_red" : "key";
          var varData_2162 = this.isHover && param_2 ? varData_2161 : "point";
          if (!varData_2107.hasTextureLoaded()) {
            return;
          }
          if (this.currentTexture.length > 0 && this.currentTexture !== varData_2162) {
            this.alphaValue -= Math.round(GetFrameTime() * 1500);
            var varData_2163 = varData_2107.getTexture(this.currentTexture);
            DrawSprite("interactions", this.currentTexture, 0, 0, varData_2163.size[0], varData_2163.size[1], 0, 255, 255, 255, this.alphaValue);
            ClearDrawOrigin();
            if (this.alphaValue > 0) {
              return;
            }
          }
          this.currentTexture = varData_2162;
          if (this.filteredOptions.length === 1) {
            this.renderSingle();
          } else {
            this.renderMultiple();
          }
          ClearDrawOrigin();
          if (this.alphaValue < 255) {
            this.alphaValue += Math.round(GetFrameTime() * 1500);
          }
          this.alphaValue = Math.min(255, Math.max(0, this.alphaValue));
        }
      }, {
        key: "renderSingle",
        value: function _0x2c4317() {
          var varData_2164 = varData_2107.getTexture(this.currentTexture);
          DrawSprite("interactions", this.currentTexture, 0, 0, varData_2164.size[0], varData_2164.size[1], 0, 255, 255, 255, this.alphaValue);
          if (isDisabled_2) {
            varData_1873.drawText(0, -0.1, `[DEBUG] ${this.options.map(function(param_1) {
              return param_1.id;
            }).join(", ")}`, [255, 255, 255, 255], 0.25, 4);
          }
          var varData_2165 = this.filteredOptions[0].label;
          if (this.isHover && this.alphaValue > 0 && varData_2165) {
            SetTextColour(255, 255, 255, this.alphaValue);
            SetTextScale(0, 0.3);
            SetTextFont(4);
            SetTextCentre(false);
            SetTextEntry("LONGSTRING");
            AddTextComponentSubstringPlayerName(varData_2165);
            EndTextCommandDisplayText(0.02 / varData_2576.ratio, -0.01);
            var numericVal_91 = 0.75;
            var varData_2166 = 0.06 / varData_2576.ratio;
            DrawSprite("interactions", "label", numericVal_91 * varData_2166, 0, varData_2166, 0.025, 0, 255, 255, 255, this.alphaValue);
          }
        }
      }, {
        key: "renderMultiple",
        value: function _0x382442() {
          var varData_2167 = varData_2107.getTexture(this.currentTexture);
          DrawSprite("interactions", this.currentTexture, 0, 0, varData_2167.size[0], varData_2167.size[1], 0, 255, 255, 255, this.alphaValue);
          if (this.isHover && this.alphaValue > 0) {
            var isEnabled_2 = true;
            var isDisabled_22 = false;
            var varData_2168 = void 0;
            try {
              for (var loopIdx = this.filteredOptions.entries()[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
                var varData_2169 = handleAction_164(loopIdx_1.value, 2);
                var varData_2170 = varData_2169[0];
                var varData_2171 = varData_2169[1];
                var varData_2172 = varData_2171.label ?? "";
                SetTextColour(255, 255, 255, this.alphaValue);
                SetTextScale(0, 0.3);
                SetTextFont(4);
                SetTextCentre(false);
                SetTextEntry("LONGSTRING");
                AddTextComponentSubstringPlayerName(varData_2172);
                EndTextCommandDisplayText(0.04 / varData_2576.ratio, -0.01 + varData_2170 * 0.03);
                var numericVal_91 = 1.1;
                var varData_2173 = 0.06 / varData_2576.ratio;
                var varData_2174 = this.selectedIndex === varData_2170 ? "circle_selected" : "circle";
                var varData_2175 = varData_2107.getTexture(varData_2174);
                DrawSprite("interactions", varData_2174, 0.025 / varData_2576.ratio, 0 + varData_2170 * 0.03, varData_2175.size[0], varData_2175.size[1], 0, 255, 255, 255, this.alphaValue);
                DrawSprite("interactions", this.selectedIndex === varData_2170 ? "label" : "label_no", numericVal_91 * varData_2173, 0 + varData_2170 * 0.03, varData_2173, 0.025, 0, 255, 255, 255, this.alphaValue);
              }
            } catch (err) {
              isDisabled_22 = true;
              varData_2168 = err;
            } finally {
              try {
                if (!isEnabled_2 && loopIdx.return != null) {
                  loopIdx.return();
                }
              } finally {
                if (isDisabled_22) {
                  throw varData_2168;
                }
              }
            }
          }
        }
      }, {
        key: "mouseWheel",
        value: function _0x626185(param_1) {
          if (param_1 < 0) {
            if (this.selectedIndex === this.filteredOptions.length - 1) {
              this.selectedIndex = 0;
            } else {
              this.selectedIndex = (this.selectedIndex + 1) % this.filteredOptions.length;
            }
          } else if (param_1 > 0) {
            if (this.selectedIndex === 0) {
              this.selectedIndex = this.filteredOptions.length - 1;
            } else {
              this.selectedIndex = (this.selectedIndex - 1) % this.filteredOptions.length;
            }
          }
        }
      }, {
        key: "hover",
        value: function _0x4bf358(param_1) {
          this.isHover = param_1;
          if (!param_1) {
            this.selectedIndex = 0;
          }
        }
      }]);
      return handleAction_169;
    })();
    ;
    function handleAction_170(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_91 = 0, loopIdx = new Array(param_2); numericVal_91 < param_2; numericVal_91++) {
        loopIdx[numericVal_91] = param_1[numericVal_91];
      }
      return loopIdx;
    }
    function handleAction_171(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_172(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_170(param_1);
      }
    }
    function handleAction_173(param_1) {
      if (param_1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return param_1;
    }
    function handleAction_174(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2176 = param_1[param_6](param_7);
        var varData_2177 = varData_2176.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2176.done) {
        param_2(varData_2177);
      } else {
        Promise.resolve(varData_2177).then(param_4, param_5);
      }
    }
    function handleAction_175(param_1) {
      return function() {
        var varData_2178 = this;
        var varData_2179 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2180 = param_1.apply(varData_2178, varData_2179);
          function handleAction_176(param_1_2) {
            handleAction_174(varData_2180, param_1_1, param_2, handleAction_176, handleAction_177, "next", param_1_2);
          }
          function handleAction_177(param_1_2) {
            handleAction_174(varData_2180, param_1_1, param_2, handleAction_176, handleAction_177, "throw", param_1_2);
          }
          handleAction_176(void 0);
        });
      };
    }
    function handleAction_178(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_179(param_1, param_2) {
      for (var numericVal_91 = 0; numericVal_91 < param_2.length; numericVal_91++) {
        var varData_2181 = param_2[numericVal_91];
        varData_2181.enumerable = varData_2181.enumerable || false;
        varData_2181.configurable = true;
        if ("value" in varData_2181) {
          varData_2181.writable = true;
        }
        Object.defineProperty(param_1, varData_2181.key, varData_2181);
      }
    }
    function handleAction_180(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_179(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_179(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_181(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2182 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2182);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_182(param_1) {
      handleAction_182 = Object.setPrototypeOf ? Object.getPrototypeOf : function _0x31b7ba(param_1_1) {
        return param_1_1.__proto__ || Object.getPrototypeOf(param_1_1);
      };
      return handleAction_182(param_1);
    }
    function handleAction_183(param_1, param_2) {
      if (typeof param_2 !== "function" && param_2 !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      param_1.prototype = Object.create(param_2 && param_2.prototype, {
        constructor: {
          value: param_1,
          writable: true,
          configurable: true
        }
      });
      if (param_2) {
        handleAction_189(param_1, param_2);
      }
    }
    function handleAction_184(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_185(param_1, param_2) {
      var varData_2183 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2183 == null) {
        return;
      }
      var itemList_3 = [];
      var isEnabled_2 = true;
      var isDisabled_22 = false;
      var varData_2184;
      var varData_2185;
      try {
        for (varData_2183 = varData_2183.call(param_1); !(isEnabled_2 = (varData_2184 = varData_2183.next()).done); isEnabled_2 = true) {
          itemList_3.push(varData_2184.value);
          if (param_2 && itemList_3.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_22 = true;
        varData_2185 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2183.return != null) {
            varData_2183.return();
          }
        } finally {
          if (isDisabled_22) {
            throw varData_2185;
          }
        }
      }
      return itemList_3;
    }
    function handleAction_186() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_187() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_188(param_1, param_2) {
      if (param_2 && (handleAction_192(param_2) === "object" || typeof param_2 === "function")) {
        return param_2;
      }
      return handleAction_173(param_1);
    }
    function handleAction_189(param_1, param_2) {
      handleAction_189 = Object.setPrototypeOf || function _0x5a7bb3(param_1_1, param_2_1) {
        param_1_1.__proto__ = param_2_1;
        return param_1_1;
      };
      return handleAction_189(param_1, param_2);
    }
    function handleAction_190(param_1, param_2) {
      return handleAction_171(param_1) || handleAction_185(param_1, param_2) || handleAction_193(param_1, param_2) || handleAction_186();
    }
    function handleAction_191(param_1) {
      return handleAction_172(param_1) || handleAction_184(param_1) || handleAction_193(param_1) || handleAction_187();
    }
    function handleAction_192(param_1) {
      "@swc/helpers - typeof";
      if (param_1 && typeof Symbol !== "undefined" && param_1.constructor === Symbol) {
        return "symbol";
      } else {
        return typeof param_1;
      }
    }
    function handleAction_193(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_170(param_1, param_2);
      }
      var varData_2186 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2186 === "Object" && param_1.constructor) {
        varData_2186 = param_1.constructor.name;
      }
      if (varData_2186 === "Map" || varData_2186 === "Set") {
        return Array.from(varData_2186);
      }
      if (varData_2186 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2186)) {
        return handleAction_170(param_1, param_2);
      }
    }
    function handleAction_194() {
      if (typeof Reflect === "undefined" || !Reflect.construct) {
        return false;
      }
      if (Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy === "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (err) {
        return false;
      }
    }
    function handleAction_195(param_1) {
      var varData_2187 = handleAction_194();
      return function _0xac2d19() {
        var varData_2188 = handleAction_182(param_1);
        var varData_2189;
        if (varData_2187) {
          var varData_2190 = handleAction_182(this).constructor;
          varData_2189 = Reflect.construct(varData_2188, arguments, varData_2190);
        } else {
          varData_2189 = varData_2188.apply(this, arguments);
        }
        return handleAction_188(this, varData_2189);
      };
    }
    function handleAction_196(param_1, param_2) {
      var varData_2191;
      var varData_2192;
      var varData_2193;
      var varData_2194;
      var varData_2195 = {
        label: 0,
        sent: function() {
          if (varData_2193[0] & 1) {
            throw varData_2193[1];
          }
          return varData_2193[1];
        },
        trys: [],
        ops: []
      };
      varData_2194 = {
        next: handleAction_197(0),
        throw: handleAction_197(1),
        return: handleAction_197(2)
      };
      if (typeof Symbol === "function") {
        varData_2194[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2194;
      function handleAction_197(param_1_1) {
        return function(param_1_2) {
          return handleAction_198([param_1_1, param_1_2]);
        };
      }
      function handleAction_198(param_1_1) {
        if (varData_2191) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2195) {
          try {
            varData_2191 = 1;
            if (varData_2192 && (varData_2193 = param_1_1[0] & 2 ? varData_2192.return : param_1_1[0] ? varData_2192.throw || ((varData_2193 = varData_2192.return) && varData_2193.call(varData_2192), 0) : varData_2192.next) && !(varData_2193 = varData_2193.call(varData_2192, param_1_1[1])).done) {
              return varData_2193;
            }
            varData_2192 = 0;
            if (varData_2193) {
              param_1_1 = [param_1_1[0] & 2, varData_2193.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2193 = param_1_1;
                break;
              case 4:
                varData_2195.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2195.label++;
                varData_2192 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2195.ops.pop();
                varData_2195.trys.pop();
                continue;
              default:
                if (!(varData_2193 = varData_2195.trys, varData_2193 = varData_2193.length > 0 && varData_2193[varData_2193.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2195 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2193 || param_1_1[1] > varData_2193[0] && param_1_1[1] < varData_2193[3])) {
                  varData_2195.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2195.label < varData_2193[1]) {
                  varData_2195.label = varData_2193[1];
                  varData_2193 = param_1_1;
                  break;
                }
                if (varData_2193 && varData_2195.label < varData_2193[2]) {
                  varData_2195.label = varData_2193[2];
                  varData_2195.ops.push(param_1_1);
                  break;
                }
                if (varData_2193[2]) {
                  varData_2195.ops.pop();
                }
                varData_2195.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2195);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2192 = 0;
          } finally {
            varData_2191 = varData_2193 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2196 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2196;
      }
    }
    var varData_2197 = (function(param_1) {
      "use strict";
      handleAction_183(handleAction_199, param_1);
      var varData_2198 = handleAction_195(handleAction_199);
      function handleAction_199(param_1_1, param_2, param_3, param_4) {
        handleAction_178(this, handleAction_199);
        var varData_2199;
        varData_2199 = varData_2198.call(this);
        handleAction_181(handleAction_173(varData_2199), "id", void 0);
        handleAction_181(handleAction_173(varData_2199), "entity", void 0);
        handleAction_181(handleAction_173(varData_2199), "interactions", void 0);
        handleAction_181(handleAction_173(varData_2199), "coords", void 0);
        handleAction_181(handleAction_173(varData_2199), "validInteractions", []);
        handleAction_181(handleAction_173(varData_2199), "bone", void 0);
        handleAction_181(handleAction_173(varData_2199), "offset", void 0);
        varData_2199.id = param_1_1;
        varData_2199.entity = param_2;
        varData_2199.interactions = param_3;
        varData_2199.coords = GetEntityCoords(param_2);
        varData_2199.renderCoords = varData_2199.getRenderCoords();
        varData_2199.bone = param_4;
        return varData_2199;
      }
      handleAction_180(handleAction_199, [{
        key: "handleCreate",
        value: function _0x24893c(param_1_1) {
          var varData_2200 = this;
          return handleAction_175(function() {
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
            var varData_2211;
            var varData_2212;
            var varData_2213;
            var varData_2214;
            var varData_2215;
            var varData_2216;
            var varData_2217;
            var varData_2218;
            var varData_2219;
            return handleAction_196(this, function(param_1_2) {
              switch (param_1_2.label) {
                case 0:
                  varData_2201 = varData_2200.getRenderCoords();
                  varData_2202 = varData_2200.entityData?.max || 0;
                  varData_2203 = varData_2085.MathUtils.getDistance(param_1_1, varData_2201) - varData_2202;
                  varData_2200.options = [];
                  varData_2200.validInteractions = [];
                  varData_2200.canInteract = false;
                  varData_2204 = void 0;
                  varData_2205 = true;
                  varData_2206 = false;
                  varData_2207 = void 0;
                  param_1_2.label = 1;
                case 1:
                  param_1_2.trys.push([1, 10, 11, 12]);
                  varData_2208 = varData_2200.interactions[Symbol.iterator]();
                  param_1_2.label = 2;
                case 2:
                  if (varData_2205 = (varData_2209 = varData_2208.next()).done) {
                    return [3, 9];
                  }
                  varData_2210 = varData_2209.value;
                  varData_2211 = typeof varData_2210.context.distance === "number" ? 8 : varData_2210.context.distance.draw;
                  varData_2212 = typeof varData_2210.context.distance === "number" ? 2 : varData_2210.context.distance.use;
                  if (!(varData_2203 < varData_2211)) {
                    return [3, 8];
                  }
                  varData_2213 = void 0;
                  param_1_2.label = 3;
                case 3:
                  param_1_2.trys.push([3, 6, , 7]);
                  varData_2214 = !varData_2210.context.isEnabled;
                  if (varData_2214) {
                    return [3, 5];
                  }
                  return [4, varData_2210.context.isEnabled(varData_2200.entity)];
                case 4:
                  varData_2214 = param_1_2.sent();
                  param_1_2.label = 5;
                case 5:
                  varData_2213 = varData_2214;
                  return [3, 7];
                case 6:
                  varData_2215 = param_1_2.sent();
                  varData_1491.error("------------------------------\nERROR IN INTERACTION context isEnabled:", varData_2215, varData_2210.resource);
                  varData_2213 = false;
                  return [3, 7];
                case 7:
                  varData_2216 = varData_2210.context.isToggled ? varData_2576.toggleInteractions : true;
                  varData_2217 = varData_2210.context.isPlayer ? IsPedAPlayer(varData_2200.entity) : !IsPedAPlayer(varData_2200.entity);
                  varData_2218 = varData_2200.id.includes("pedInteraction") ? varData_2217 : true;
                  if (varData_2213 && varData_2216 && varData_2218) {
                    if (!varData_2210) {
                      return [3, 8];
                    }
                    if (varData_2217 && NetworkIsPlayerConcealed(NetworkGetPlayerIndexFromPed(varData_2200.entity))) {
                      return [3, 8];
                    }
                    varData_2200.validInteractions.push(varData_2210);
                    if (varData_2210.context.skipLos) {
                      varData_2204 = true;
                    }
                    if (varData_2210.context.offset && !varData_2200.offset) {
                      varData_2200.offset = varData_2210.context.offset;
                    }
                    varData_2200.isEnabled = true;
                    if (varData_2203 < varData_2212) {
                      varData_2200.canInteract = true;
                      varData_2200.options = handleAction_191(varData_2200.options).concat(handleAction_191(varData_2210.options));
                    }
                  }
                  param_1_2.label = 8;
                case 8:
                  varData_2205 = true;
                  return [3, 2];
                case 9:
                  return [3, 12];
                case 10:
                  varData_2219 = param_1_2.sent();
                  varData_2206 = true;
                  varData_2207 = varData_2219;
                  return [3, 12];
                case 11:
                  try {
                    if (!varData_2205 && varData_2208.return != null) {
                      varData_2208.return();
                    }
                  } finally {
                    if (varData_2206) {
                      throw varData_2207;
                    }
                  }
                  return [7];
                case 12:
                  if (varData_2200.validInteractions.length !== 0) {
                    return [3, 13];
                  }
                  varData_2200.isEnabled = false;
                  varData_2576.removeToRender(varData_2200);
                  return [2];
                case 13:
                  return [4, varData_2200.create(varData_2204)];
                case 14:
                  param_1_2.sent();
                  varData_2576.addToRender(varData_2200);
                  param_1_2.label = 15;
                case 15:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "handleDestroy",
        value: function _0x2c5f5a() {
          this.handleHover(false);
        }
      }, {
        key: "render",
        value: function _0x3dac2f() {
          if (this.entity && !DoesEntityExist(this.entity)) {
            varData_2576.removeToRender(this);
            dataMap_3.delete(this.id);
            return;
          }
          if (!this.canRender) {
            return;
          }
          var varData_2220 = this.getRenderCoords();
          this.handleRender(varData_2220, this.options.length > 0);
        }
      }, {
        key: "getRenderCoords",
        value: function _0x567422() {
          var varData_2221 = this.coords;
          if (this.entity && IsEntityAPed(this.entity)) {
            var varData_2222 = GetWorldPositionOfEntityBone(this.entity, GetPedBoneIndex(this.entity, 0));
            varData_2221 = varData_2222;
          } else if (this.entity && IsEntityAVehicle(this.entity) && this.bone) {
            var varData_2223 = GetWorldPositionOfEntityBone(this.entity, GetEntityBoneIndexByName(this.entity, this.bone));
            varData_2221 = varData_2223;
            if (this.offset && typeof this.offset === "function") {
              var varData_2224 = handleAction_190(this.offset(this.entity), 3);
              var varData_2225 = varData_2224[0];
              var varData_2226 = varData_2224[1];
              var varData_2227 = varData_2224[2];
              this.offset = [varData_2225, varData_2226, varData_2227];
            }
            if (this.offset) {
              varData_2221[0] += this.offset[0];
              varData_2221[1] += this.offset[1];
              varData_2221[2] += this.offset[2];
            }
          } else if (this.entity) {
            if (!this.entityData?.size) {
              var modelHash = GetEntityModel(this.entity);
              var varData_2228 = handleAction_190(GetModelDimensions(modelHash), 2);
              var varData_2229 = varData_2228[0];
              var varData_2230 = varData_2228[1];
              var varData_2231 = varData_2230[0] + varData_2229[0];
              var varData_2232 = varData_2230[2] + varData_2229[2];
              var varData_2233 = this.interactions.some(function(param_1_1) {
                return param_1_1.context.useModelSize;
              });
              var varData_2234 = {
                size: varData_2231 / 2,
                zSize: varData_2232 / 2,
                max: varData_2233 ? varData_2230[0] : 0
              };
              this.entityData = varData_2234;
            }
            if (typeof this.offset === "function") {
              var varData_2235 = handleAction_190(this.offset(this.entity), 3);
              var varData_2236 = varData_2235[0];
              var varData_2237 = varData_2235[1];
              var varData_2238 = varData_2235[2];
              this.offset = [varData_2236, varData_2237, varData_2238];
            }
            var varData_2239 = this.entityData?.size || 0;
            var varData_2240 = this.entityData?.zSize || 0;
            var varData_2241 = GetOffsetFromEntityInWorldCoords(this.entity, this.offset?.[0] ?? varData_2239, this.offset?.[1] ?? 0, this.offset?.[2] ?? varData_2240);
            varData_2221 = varData_2241;
          }
          this.renderCoords = varData_2221;
          return varData_2221;
        }
      }, {
        key: "handleHover",
        value: function _0x4c2897(param_1_1) {
          this.hover(param_1_1);
          var isEnabled_2 = true;
          var isDisabled_22 = false;
          var varData_2242 = void 0;
          try {
            for (var loopIdx = this.validInteractions[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
              var varData_2243 = loopIdx_1.value;
              if (varData_2243.context.onHover) {
                var varData_2244 = varData_2243.context.onHover.event;
                var varData_2245 = varData_2243.context.onHover.parameters;
                emit(varData_2244, varData_2245, param_1_1, this.entity);
              }
            }
          } catch (err) {
            isDisabled_22 = true;
            varData_2242 = err;
          } finally {
            try {
              if (!isEnabled_2 && loopIdx.return != null) {
                loopIdx.return();
              }
            } finally {
              if (isDisabled_22) {
                throw varData_2242;
              }
            }
          }
        }
      }]);
      return handleAction_199;
    })(varData_2148);
    ;
    function handleAction_200(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_91 = 0, loopIdx = new Array(param_2); numericVal_91 < param_2; numericVal_91++) {
        loopIdx[numericVal_91] = param_1[numericVal_91];
      }
      return loopIdx;
    }
    function handleAction_201(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_202(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_200(param_1);
      }
    }
    function handleAction_203(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2246 = param_1[param_6](param_7);
        var varData_2247 = varData_2246.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2246.done) {
        param_2(varData_2247);
      } else {
        Promise.resolve(varData_2247).then(param_4, param_5);
      }
    }
    function handleAction_204(param_1) {
      return function() {
        var varData_2248 = this;
        var varData_2249 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2250 = param_1.apply(varData_2248, varData_2249);
          function handleAction_205(param_1_2) {
            handleAction_203(varData_2250, param_1_1, param_2, handleAction_205, handleAction_206, "next", param_1_2);
          }
          function handleAction_206(param_1_2) {
            handleAction_203(varData_2250, param_1_1, param_2, handleAction_205, handleAction_206, "throw", param_1_2);
          }
          handleAction_205(void 0);
        });
      };
    }
    function handleAction_207(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_208(param_1, param_2) {
      for (var numericVal_91 = 0; numericVal_91 < param_2.length; numericVal_91++) {
        var varData_2251 = param_2[numericVal_91];
        varData_2251.enumerable = varData_2251.enumerable || false;
        varData_2251.configurable = true;
        if ("value" in varData_2251) {
          varData_2251.writable = true;
        }
        Object.defineProperty(param_1, varData_2251.key, varData_2251);
      }
    }
    function handleAction_209(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_208(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_208(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_210(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_211(param_1, param_2) {
      var varData_2252 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2252 == null) {
        return;
      }
      var itemList_3 = [];
      var isEnabled_2 = true;
      var isDisabled_22 = false;
      var varData_2253;
      var varData_2254;
      try {
        for (varData_2252 = varData_2252.call(param_1); !(isEnabled_2 = (varData_2253 = varData_2252.next()).done); isEnabled_2 = true) {
          itemList_3.push(varData_2253.value);
          if (param_2 && itemList_3.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_22 = true;
        varData_2254 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2252.return != null) {
            varData_2252.return();
          }
        } finally {
          if (isDisabled_22) {
            throw varData_2254;
          }
        }
      }
      return itemList_3;
    }
    function handleAction_212() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_213() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_214(param_1, param_2) {
      return handleAction_201(param_1) || handleAction_211(param_1, param_2) || handleAction_216(param_1, param_2) || handleAction_212();
    }
    function handleAction_215(param_1) {
      return handleAction_202(param_1) || handleAction_210(param_1) || handleAction_216(param_1) || handleAction_213();
    }
    function handleAction_216(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_200(param_1, param_2);
      }
      var varData_2255 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2255 === "Object" && param_1.constructor) {
        varData_2255 = param_1.constructor.name;
      }
      if (varData_2255 === "Map" || varData_2255 === "Set") {
        return Array.from(varData_2255);
      }
      if (varData_2255 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2255)) {
        return handleAction_200(param_1, param_2);
      }
    }
    function handleAction_217(param_1, param_2) {
      var varData_2256;
      var varData_2257;
      var varData_2258;
      var varData_2259;
      var varData_2260 = {
        label: 0,
        sent: function() {
          if (varData_2258[0] & 1) {
            throw varData_2258[1];
          }
          return varData_2258[1];
        },
        trys: [],
        ops: []
      };
      varData_2259 = {
        next: handleAction_218(0),
        throw: handleAction_218(1),
        return: handleAction_218(2)
      };
      if (typeof Symbol === "function") {
        varData_2259[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2259;
      function handleAction_218(param_1_1) {
        return function(param_1_2) {
          return handleAction_219([param_1_1, param_1_2]);
        };
      }
      function handleAction_219(param_1_1) {
        if (varData_2256) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2260) {
          try {
            varData_2256 = 1;
            if (varData_2257 && (varData_2258 = param_1_1[0] & 2 ? varData_2257.return : param_1_1[0] ? varData_2257.throw || ((varData_2258 = varData_2257.return) && varData_2258.call(varData_2257), 0) : varData_2257.next) && !(varData_2258 = varData_2258.call(varData_2257, param_1_1[1])).done) {
              return varData_2258;
            }
            varData_2257 = 0;
            if (varData_2258) {
              param_1_1 = [param_1_1[0] & 2, varData_2258.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2258 = param_1_1;
                break;
              case 4:
                varData_2260.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2260.label++;
                varData_2257 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2260.ops.pop();
                varData_2260.trys.pop();
                continue;
              default:
                if (!(varData_2258 = varData_2260.trys, varData_2258 = varData_2258.length > 0 && varData_2258[varData_2258.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2260 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2258 || param_1_1[1] > varData_2258[0] && param_1_1[1] < varData_2258[3])) {
                  varData_2260.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2260.label < varData_2258[1]) {
                  varData_2260.label = varData_2258[1];
                  varData_2258 = param_1_1;
                  break;
                }
                if (varData_2258 && varData_2260.label < varData_2258[2]) {
                  varData_2260.label = varData_2258[2];
                  varData_2260.ops.push(param_1_1);
                  break;
                }
                if (varData_2258[2]) {
                  varData_2260.ops.pop();
                }
                varData_2260.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2260);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2257 = 0;
          } finally {
            varData_2256 = varData_2258 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2261 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2261;
      }
    }
    var dataSet_3 = /* @__PURE__ */ new Set();
    var dataSet_4 = /* @__PURE__ */ new Set();
    var varData_2262 = (function() {
      "use strict";
      function handleAction_220() {
        handleAction_207(this, handleAction_220);
      }
      handleAction_209(handleAction_220, null, [{
        key: "Init",
        value: function _0x755d90() {
          on("np-polyzone:entity:enter", this.onEnter.bind(this));
          on("np-polyzone:entity:exit", this.onExit.bind(this));
          on("np-polyzone:interaction:enter", this.onPointEnter.bind(this));
          on("np-polyzone:interaction:exit", this.onPointExit.bind(this));
        }
      }, {
        key: "getEntityInteractionData",
        value: function _0x2b20fb(param_1) {
          var itemList_3 = [];
          if (param_1.type === "modelInteractions") {
            var varData_2263 = GetEntityArchetypeName(param_1.entity);
            itemList_3 = [{
              uniqueId: handleAction_228(varData_2263, param_1.entity),
              interactions: varData_2576.modelInteractions.get(varData_2263) ?? []
            }];
          } else if (param_1.type === "pedInteraction") {
            itemList_3 = [{
              uniqueId: handleAction_228(param_1.entity, "pedInteraction"),
              interactions: handleAction_215(varData_2576.pedInteractions.values())
            }];
          } else if (param_1.type === "vehicleInteraction") {
            var varData_2264 = handleAction_215(varData_2576.vehicleBoneInteractions.entries());
            var varData_2265 = handleAction_215(varData_2576.vehicleInteractions.values());
            itemList_3.push({
              uniqueId: handleAction_228(param_1.entity, "vehicleInteraction"),
              interactions: varData_2265
            });
            var isEnabled_2 = true;
            var isDisabled_22 = false;
            var varData_2266 = void 0;
            try {
              for (var loopIdx = varData_2264[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
                var varData_2267 = handleAction_214(loopIdx_1.value, 2);
                var varData_2268 = varData_2267[0];
                var varData_2269 = varData_2267[1];
                itemList_3.push({
                  uniqueId: handleAction_228(param_1.entity, varData_2268),
                  interactions: varData_2269,
                  bone: varData_2268
                });
              }
            } catch (err) {
              isDisabled_22 = true;
              varData_2266 = err;
            } finally {
              try {
                if (!isEnabled_2 && loopIdx.return != null) {
                  loopIdx.return();
                }
              } finally {
                if (isDisabled_22) {
                  throw varData_2266;
                }
              }
            }
          }
          return itemList_3;
        }
      }, {
        key: "onEnter",
        value: function _0x5a278b(param_1, param_2) {
          var varData_2270 = this;
          return handleAction_204(function() {
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
            return handleAction_217(this, function(param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  if (!param_1.includes("interactions")) {
                    return [2];
                  }
                  dataSet_3.add(param_1);
                  varData_2271 = varData_2270.getEntityInteractionData(param_2);
                  varData_2272 = true;
                  varData_2273 = false;
                  varData_2274 = void 0;
                  param_1_1.label = 1;
                case 1:
                  param_1_1.trys.push([1, 9, 10, 11]);
                  varData_2275 = varData_2271[Symbol.iterator]();
                  param_1_1.label = 2;
                case 2:
                  if (varData_2272 = (varData_2276 = varData_2275.next()).done) {
                    return [3, 8];
                  }
                  varData_2277 = varData_2276.value;
                  param_1_1.label = 3;
                case 3:
                  param_1_1.trys.push([3, 6, , 7]);
                  varData_2278 = new varData_2197(varData_2277.uniqueId, param_2.entity, varData_2277.interactions, varData_2277.bone);
                  dataMap_3.set(varData_2277.uniqueId, varData_2278);
                  return [4, varData_2302.get()];
                case 4:
                  varData_2279 = param_1_1.sent();
                  if (!varData_2279) {
                    return [2];
                  }
                  return [4, varData_2278.handleCreate(varData_2279.coords)];
                case 5:
                  param_1_1.sent();
                  return [3, 7];
                case 6:
                  varData_2280 = param_1_1.sent();
                  varData_1491.error(`------------------------------
ERROR IN onEnter for interaction ${varData_2277.uniqueId}:`, varData_2280);
                  return [3, 7];
                case 7:
                  varData_2272 = true;
                  return [3, 2];
                case 8:
                  return [3, 11];
                case 9:
                  varData_2281 = param_1_1.sent();
                  varData_2273 = true;
                  varData_2274 = varData_2281;
                  return [3, 11];
                case 10:
                  try {
                    if (!varData_2272 && varData_2275.return != null) {
                      varData_2275.return();
                    }
                  } finally {
                    if (varData_2273) {
                      throw varData_2274;
                    }
                  }
                  return [7];
                case 11:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "onExit",
        value: function _0x2346ce(param_1, param_2) {
          if (!param_1.includes("interactions")) {
            return;
          }
          dataSet_3.delete(param_1);
          var varData_2282 = this.getEntityInteractionData(param_2);
          var isEnabled_2 = true;
          var isDisabled_22 = false;
          var varData_2283 = void 0;
          try {
            for (var loopIdx = varData_2282[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
              var varData_2284 = loopIdx_1.value;
              var varData_2285 = varData_2284.uniqueId;
              var varData_2286 = dataMap_3.get(varData_2285);
              if (!varData_2286) {
                continue;
              }
              varData_2576.removeToRender(varData_2286);
              dataMap_3.delete(varData_2285);
            }
          } catch (err) {
            isDisabled_22 = true;
            varData_2283 = err;
          } finally {
            try {
              if (!isEnabled_2 && loopIdx.return != null) {
                loopIdx.return();
              }
            } finally {
              if (isDisabled_22) {
                throw varData_2283;
              }
            }
          }
        }
      }, {
        key: "onPointEnter",
        value: function _0x4b8a87(param_1, param_2) {
          return handleAction_204(function() {
            var varData_2287;
            var varData_2288;
            return handleAction_217(this, function(param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  if (!param_1.includes("interactions")) {
                    return [2];
                  }
                  dataSet_4.add(param_1);
                  if (isDisabled_2) {
                    console.log("Enter POINT:", param_1, param_2.id);
                  }
                  varData_2287 = varData_2576.interactions.get(param_2.id);
                  if (!varData_2287) {
                    return [3, 3];
                  }
                  dataMap_3.set(param_2.id, varData_2287);
                  return [4, varData_2302.get()];
                case 1:
                  varData_2288 = param_1_1.sent();
                  if (!varData_2288) {
                    return [2];
                  }
                  return [4, varData_2287.handleCreate(varData_2288.coords)];
                case 2:
                  param_1_1.sent();
                  param_1_1.label = 3;
                case 3:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "onPointExit",
        value: function _0x27661c(param_1, param_2) {
          if (!param_1.includes("interactions")) {
            return;
          }
          dataSet_4.delete(param_1);
          if (isDisabled_2) {
            console.log("Exit POINT:", param_1, param_2.id);
          }
          var varData_2289 = dataMap_3.get(param_2.id);
          if (!varData_2289) {
            return;
          }
          varData_2576.removeToRender(varData_2289);
          dataMap_3.delete(param_2.id);
        }
      }]);
      return handleAction_220;
    })();
    ;
    function handleAction_221(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2290 = param_1[param_6](param_7);
        var varData_2291 = varData_2290.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2290.done) {
        param_2(varData_2291);
      } else {
        Promise.resolve(varData_2291).then(param_4, param_5);
      }
    }
    function handleAction_222(param_1) {
      return function() {
        var varData_2292 = this;
        var varData_2293 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2294 = param_1.apply(varData_2292, varData_2293);
          function handleAction_223(param_1_2) {
            handleAction_221(varData_2294, param_1_1, param_2, handleAction_223, handleAction_224, "next", param_1_2);
          }
          function handleAction_224(param_1_2) {
            handleAction_221(varData_2294, param_1_1, param_2, handleAction_223, handleAction_224, "throw", param_1_2);
          }
          handleAction_223(void 0);
        });
      };
    }
    function handleAction_225(param_1, param_2) {
      var varData_2295;
      var varData_2296;
      var varData_2297;
      var varData_2298;
      var varData_2299 = {
        label: 0,
        sent: function() {
          if (varData_2297[0] & 1) {
            throw varData_2297[1];
          }
          return varData_2297[1];
        },
        trys: [],
        ops: []
      };
      varData_2298 = {
        next: handleAction_226(0),
        throw: handleAction_226(1),
        return: handleAction_226(2)
      };
      if (typeof Symbol === "function") {
        varData_2298[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2298;
      function handleAction_226(param_1_1) {
        return function(param_1_2) {
          return handleAction_227([param_1_1, param_1_2]);
        };
      }
      function handleAction_227(param_1_1) {
        if (varData_2295) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2299) {
          try {
            varData_2295 = 1;
            if (varData_2296 && (varData_2297 = param_1_1[0] & 2 ? varData_2296.return : param_1_1[0] ? varData_2296.throw || ((varData_2297 = varData_2296.return) && varData_2297.call(varData_2296), 0) : varData_2296.next) && !(varData_2297 = varData_2297.call(varData_2296, param_1_1[1])).done) {
              return varData_2297;
            }
            varData_2296 = 0;
            if (varData_2297) {
              param_1_1 = [param_1_1[0] & 2, varData_2297.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2297 = param_1_1;
                break;
              case 4:
                varData_2299.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2299.label++;
                varData_2296 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2299.ops.pop();
                varData_2299.trys.pop();
                continue;
              default:
                if (!(varData_2297 = varData_2299.trys, varData_2297 = varData_2297.length > 0 && varData_2297[varData_2297.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2299 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2297 || param_1_1[1] > varData_2297[0] && param_1_1[1] < varData_2297[3])) {
                  varData_2299.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2299.label < varData_2297[1]) {
                  varData_2299.label = varData_2297[1];
                  varData_2297 = param_1_1;
                  break;
                }
                if (varData_2297 && varData_2299.label < varData_2297[2]) {
                  varData_2299.label = varData_2297[2];
                  varData_2299.ops.push(param_1_1);
                  break;
                }
                if (varData_2297[2]) {
                  varData_2299.ops.pop();
                }
                varData_2299.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2299);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2296 = 0;
          } finally {
            varData_2295 = varData_2297 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2300 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2300;
      }
    }
    function handleAction_228(param_1, param_2) {
      var varData_2301 = typeof param_1 === "string" ? GetHashKey(param_1) : param_1;
      return `${varData_2301}:${param_2}`;
    }
    var varData_2302 = varData_1420.cache((function() {
      var varData_2303 = handleAction_222(function(param_1) {
        var varData_2304;
        var varData_2305;
        var varData_2306;
        var varData_2307;
        return handleAction_225(this, function(param_1_1) {
          varData_2304 = PlayerPedId();
          varData_2305 = GetEntityCoords(varData_2304);
          varData_2306 = GetEntityHeading(varData_2304);
          var varData_2308 = {
            ped: varData_2304,
            coords: varData_2305,
            heading: varData_2306
          };
          varData_2307 = varData_2308;
          return [2, [true, varData_2307]];
        });
      });
      return function(param_1) {
        return varData_2303.apply(this, arguments);
      };
    })(), {
      timeToLive: 250
    });
    function handleAction_229(param_1, param_2) {
      var varData_2309 = {
        entity: param_1,
        type: param_2,
        isEntityInteraction: true
      };
      var varData_2310 = varData_2309;
      var numericVal_91 = 20;
      if (param_2 === "vehicleInteraction") {
        numericVal_91 = 20;
      } else if (param_2 === "modelInteractions") {
        numericVal_91 = 10;
      } else if (param_2 === "pedInteraction") {
        numericVal_91 = 5;
      }
      var varData_2311 = {
        useZ: false,
        scale: [1, 1, 1],
        offset: [numericVal_91, numericVal_91, 0]
      };
      varData_1838.addEntityZone(param_1.toString(), `interactions_${param_1}`, param_1, varData_2311, varData_2310);
      handleAction_231(param_1, param_2);
    }
    function handleAction_230(param_1, param_2) {
      varData_1838.removeZone(`interactions_${param_1}`, param_1.toString());
      if (isDisabled_4) {
        console.log(`Remove ENTITY zone: [${param_1}, ${param_2}]`);
      }
    }
    function handleAction_231(param_1, param_2) {
      if (dataSet_3.has(`interactions_${param_1}`)) {
        var varData_2312 = {
          entity: param_1,
          type: param_2,
          isEntityInteraction: true
        };
        var varData_2313 = varData_2312;
        varData_2262.onExit(`interactions_${param_1}`, varData_2313);
        varData_2262.onEnter(`interactions_${param_1}`, varData_2313);
      }
    }
    function handleAction_232(param_1, param_2, param_3, param_4) {
      return new Promise(function(param_1_1) {
        var varData_2314 = StartShapeTestLosProbe(param_1.x, param_1.y, param_1.z + 0.5, param_2.x, param_2.y, param_2.z, param_3, param_4, 4);
        var intervalId = setInterval(function() {
          var varData_2315 = GetShapeTestResult(varData_2314);
          if (varData_2315[0] == 0 || varData_2315[0] == 2) {
            clearInterval(intervalId);
            var varData_2316 = {
              rayHandle: varData_2315[0],
              didHit: varData_2315[1],
              endPos: varData_2315[2],
              surfacePos: varData_2315[3],
              entity: varData_2315[4]
            };
            param_1_1(varData_2316);
          }
        }, 1);
      });
    }
    var isDisabled_2 = false;
    var isDisabled_3 = false;
    var isDisabled_4 = false;
    var isDisabled_5 = false;
    RegisterCommand("interactions:debug", function(param_1, param_2) {
      isDisabled_2 = !isDisabled_2;
      emit("DoLongHudText", `Interactions debug mode is now ${isDisabled_2 ? "enabled" : "disabled"}.`);
    }, false);
    RegisterCommand("interactions:debug:known", function(param_1, param_2) {
      isDisabled_3 = !isDisabled_3;
      emit("DoLongHudText", `Known ${isDisabled_3 ? "enabled" : "disabled"}.`);
    }, false);
    RegisterCommand("interactions:debug:remove", function(param_1, param_2) {
      isDisabled_4 = !isDisabled_4;
      emit("DoLongHudText", `Remove ${isDisabled_4 ? "enabled" : "disabled"}.`);
    }, false);
    RegisterCommand("interactions:debug:add", function(param_1, param_2) {
      isDisabled_5 = !isDisabled_5;
      emit("DoLongHudText", `Add ${isDisabled_5 ? "enabled" : "disabled"}.`);
    }, false);
    RegisterCommand("interactions:debug:all", function(param_1, param_2) {
      isDisabled_2 = !isDisabled_2;
      isDisabled_3 = !isDisabled_3;
      isDisabled_4 = !isDisabled_4;
      isDisabled_5 = !isDisabled_5;
      emit("DoLongHudText", `Interactions debug mode is now ${isDisabled_2 ? "enabled" : "disabled"}.`);
      emit("DoLongHudText", `Known ${isDisabled_3 ? "enabled" : "disabled"}.`);
      emit("DoLongHudText", `Remove ${isDisabled_4 ? "enabled" : "disabled"}.`);
      emit("DoLongHudText", `Add ${isDisabled_5 ? "enabled" : "disabled"}.`);
    }, false);
    ;
    function handleAction_233(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_91 = 0, loopIdx = new Array(param_2); numericVal_91 < param_2; numericVal_91++) {
        loopIdx[numericVal_91] = param_1[numericVal_91];
      }
      return loopIdx;
    }
    function handleAction_234(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_235(param_1) {
      if (param_1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return param_1;
    }
    function handleAction_236(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2317 = param_1[param_6](param_7);
        var varData_2318 = varData_2317.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2317.done) {
        param_2(varData_2318);
      } else {
        Promise.resolve(varData_2318).then(param_4, param_5);
      }
    }
    function handleAction_237(param_1) {
      return function() {
        var varData_2319 = this;
        var varData_2320 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2321 = param_1.apply(varData_2319, varData_2320);
          function handleAction_238(param_1_2) {
            handleAction_236(varData_2321, param_1_1, param_2, handleAction_238, handleAction_239, "next", param_1_2);
          }
          function handleAction_239(param_1_2) {
            handleAction_236(varData_2321, param_1_1, param_2, handleAction_238, handleAction_239, "throw", param_1_2);
          }
          handleAction_238(void 0);
        });
      };
    }
    function handleAction_240(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_241(param_1, param_2) {
      for (var numericVal_91 = 0; numericVal_91 < param_2.length; numericVal_91++) {
        var varData_2322 = param_2[numericVal_91];
        varData_2322.enumerable = varData_2322.enumerable || false;
        varData_2322.configurable = true;
        if ("value" in varData_2322) {
          varData_2322.writable = true;
        }
        Object.defineProperty(param_1, varData_2322.key, varData_2322);
      }
    }
    function handleAction_242(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_241(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_241(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_243(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2323 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2323);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_244(param_1) {
      handleAction_244 = Object.setPrototypeOf ? Object.getPrototypeOf : function _0x531782(param_1_1) {
        return param_1_1.__proto__ || Object.getPrototypeOf(param_1_1);
      };
      return handleAction_244(param_1);
    }
    function handleAction_245(param_1, param_2) {
      if (typeof param_2 !== "function" && param_2 !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      param_1.prototype = Object.create(param_2 && param_2.prototype, {
        constructor: {
          value: param_1,
          writable: true,
          configurable: true
        }
      });
      if (param_2) {
        handleAction_249(param_1, param_2);
      }
    }
    function handleAction_246(param_1, param_2) {
      var varData_2324 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2324 == null) {
        return;
      }
      var itemList_3 = [];
      var isEnabled_2 = true;
      var isDisabled_62 = false;
      var varData_2325;
      var varData_2326;
      try {
        for (varData_2324 = varData_2324.call(param_1); !(isEnabled_2 = (varData_2325 = varData_2324.next()).done); isEnabled_2 = true) {
          itemList_3.push(varData_2325.value);
          if (param_2 && itemList_3.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_62 = true;
        varData_2326 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2324.return != null) {
            varData_2324.return();
          }
        } finally {
          if (isDisabled_62) {
            throw varData_2326;
          }
        }
      }
      return itemList_3;
    }
    function handleAction_247() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_248(param_1, param_2) {
      if (param_2 && (handleAction_251(param_2) === "object" || typeof param_2 === "function")) {
        return param_2;
      }
      return handleAction_235(param_1);
    }
    function handleAction_249(param_1, param_2) {
      handleAction_249 = Object.setPrototypeOf || function _0x41b577(param_1_1, param_2_1) {
        param_1_1.__proto__ = param_2_1;
        return param_1_1;
      };
      return handleAction_249(param_1, param_2);
    }
    function handleAction_250(param_1, param_2) {
      return handleAction_234(param_1) || handleAction_246(param_1, param_2) || handleAction_252(param_1, param_2) || handleAction_247();
    }
    function handleAction_251(param_1) {
      "@swc/helpers - typeof";
      "@swc/helpers - typeof";
      if (param_1 && typeof Symbol !== "undefined" && param_1.constructor === Symbol) {
        return "symbol";
      } else {
        return typeof param_1;
      }
    }
    function handleAction_252(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_233(param_1, param_2);
      }
      var varData_2327 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2327 === "Object" && param_1.constructor) {
        varData_2327 = param_1.constructor.name;
      }
      if (varData_2327 === "Map" || varData_2327 === "Set") {
        return Array.from(varData_2327);
      }
      if (varData_2327 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2327)) {
        return handleAction_233(param_1, param_2);
      }
    }
    function handleAction_253() {
      if (typeof Reflect === "undefined" || !Reflect.construct) {
        return false;
      }
      if (Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy === "function") {
        return true;
      }
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (err) {
        return false;
      }
    }
    function handleAction_254(param_1) {
      var varData_2328 = handleAction_253();
      return function _0x103ead() {
        var varData_2329 = handleAction_244(param_1);
        var varData_2330;
        if (varData_2328) {
          var varData_2331 = handleAction_244(this).constructor;
          varData_2330 = Reflect.construct(varData_2329, arguments, varData_2331);
        } else {
          varData_2330 = varData_2329.apply(this, arguments);
        }
        return handleAction_248(this, varData_2330);
      };
    }
    function handleAction_255(param_1, param_2) {
      var varData_2332;
      var varData_2333;
      var varData_2334;
      var varData_2335;
      var varData_2336 = {
        label: 0,
        sent: function() {
          if (varData_2334[0] & 1) {
            throw varData_2334[1];
          }
          return varData_2334[1];
        },
        trys: [],
        ops: []
      };
      varData_2335 = {
        next: handleAction_256(0),
        throw: handleAction_256(1),
        return: handleAction_256(2)
      };
      if (typeof Symbol === "function") {
        varData_2335[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2335;
      function handleAction_256(param_1_1) {
        return function(param_1_2) {
          return handleAction_257([param_1_1, param_1_2]);
        };
      }
      function handleAction_257(param_1_1) {
        if (varData_2332) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2336) {
          try {
            varData_2332 = 1;
            if (varData_2333 && (varData_2334 = param_1_1[0] & 2 ? varData_2333.return : param_1_1[0] ? varData_2333.throw || ((varData_2334 = varData_2333.return) && varData_2334.call(varData_2333), 0) : varData_2333.next) && !(varData_2334 = varData_2334.call(varData_2333, param_1_1[1])).done) {
              return varData_2334;
            }
            varData_2333 = 0;
            if (varData_2334) {
              param_1_1 = [param_1_1[0] & 2, varData_2334.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2334 = param_1_1;
                break;
              case 4:
                varData_2336.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2336.label++;
                varData_2333 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2336.ops.pop();
                varData_2336.trys.pop();
                continue;
              default:
                if (!(varData_2334 = varData_2336.trys, varData_2334 = varData_2334.length > 0 && varData_2334[varData_2334.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2336 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2334 || param_1_1[1] > varData_2334[0] && param_1_1[1] < varData_2334[3])) {
                  varData_2336.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2336.label < varData_2334[1]) {
                  varData_2336.label = varData_2334[1];
                  varData_2334 = param_1_1;
                  break;
                }
                if (varData_2334 && varData_2336.label < varData_2334[2]) {
                  varData_2336.label = varData_2334[2];
                  varData_2336.ops.push(param_1_1);
                  break;
                }
                if (varData_2334[2]) {
                  varData_2336.ops.pop();
                }
                varData_2336.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2336);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2333 = 0;
          } finally {
            varData_2332 = varData_2334 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2337 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2337;
      }
    }
    var varData_2338 = (function(param_1) {
      "use strict";
      handleAction_245(handleAction_258, param_1);
      var varData_2339 = handleAction_254(handleAction_258);
      function handleAction_258(param_1_1, param_2, param_3, param_4, param_5) {
        handleAction_240(this, handleAction_258);
        var varData_2340;
        varData_2340 = varData_2339.call(this);
        handleAction_243(handleAction_235(varData_2340), "id", void 0);
        handleAction_243(handleAction_235(varData_2340), "coords", void 0);
        handleAction_243(handleAction_235(varData_2340), "context", void 0);
        varData_2340.id = param_1_1;
        varData_2340.coords = param_2;
        varData_2340.options = param_3;
        varData_2340.context = param_4;
        varData_2340.resource = param_5;
        return varData_2340;
      }
      handleAction_242(handleAction_258, [{
        key: "addZone",
        value: function _0x4bc5d4() {
          var varData_2341 = typeof this.context.distance === "number" ? 8 : this.context.distance.draw;
          var varData_2342 = new varData_1938(this.coords);
          varData_1838.addCircleZone(this.id, `interactions_${this.id}`, varData_2342, varData_2341, {
            useZ: true,
            minZ: varData_2342.z - 2,
            maxZ: varData_2342.z + 2
          }, {
            isInteractionPoint: true
          });
          if (isDisabled_2) {
            console.log(`Adding interaction point for ${this.id}`);
          }
          if (dataSet_4.has(`interactions_${this.id}`)) {
            varData_2262.onPointEnter(`interactions_${this.id}`, {
              id: this.id
            });
          }
        }
      }, {
        key: "removeZone",
        value: function _0x442679() {
          varData_1838.removeZone(`interactions_${this.id}`, this.id);
        }
      }, {
        key: "handleCreate",
        value: function _0x35849e(param_1_1) {
          var varData_2343 = this;
          return handleAction_237(function() {
            var varData_2344;
            var varData_2345;
            var varData_2346;
            var varData_2347;
            var varData_2348;
            var varData_2349;
            var varData_2350;
            var varData_2351;
            return handleAction_255(this, function(param_1_2) {
              switch (param_1_2.label) {
                case 0:
                  varData_2344 = varData_2343.getRenderCoords();
                  varData_2345 = varData_2085.MathUtils.getDistance(param_1_1, varData_2344);
                  varData_2346 = typeof varData_2343.context.distance === "number" ? 8 : varData_2343.context.distance.draw;
                  varData_2347 = typeof varData_2343.context.distance === "number" ? 2 : varData_2343.context.distance.use;
                  if (!(varData_2345 < varData_2346)) {
                    return [3, 8];
                  }
                  return [4, varData_2343.create(varData_2343.context.skipLos)];
                case 1:
                  param_1_2.sent();
                  varData_2348 = varData_2343.context.isToggled ? varData_2576.toggleInteractions : true;
                  param_1_2.label = 2;
                case 2:
                  param_1_2.trys.push([2, 6, , 7]);
                  if (!varData_2343.context.isEnabled) {
                    return [3, 4];
                  }
                  return [4, varData_2343.context.isEnabled(varData_2343.entity)];
                case 3:
                  varData_2350 = param_1_2.sent();
                  return [3, 5];
                case 4:
                  varData_2350 = true;
                  param_1_2.label = 5;
                case 5:
                  varData_2349 = varData_2350;
                  varData_2343.isEnabled = varData_2349 && varData_2348;
                  return [3, 7];
                case 6:
                  varData_2351 = param_1_2.sent();
                  varData_2343.isEnabled = !varData_2343.context.isEnabled && varData_2348;
                  varData_1491.error("------------------------------\nERROR IN INTERACTION context isEnabled:", varData_2351, varData_2343.resource);
                  return [3, 7];
                case 7:
                  varData_2576.addToRender(varData_2343);
                  varData_2343.canInteract = varData_2345 < varData_2347;
                  return [3, 9];
                case 8:
                  varData_2576.removeToRender(varData_2343);
                  param_1_2.label = 9;
                case 9:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "handleDestroy",
        value: function _0x48d7e2() {
          this.handleHover(false);
          this.entity = 0;
          this.renderCoords = this.coords;
        }
      }, {
        key: "render",
        value: function _0x4e7b50() {
          if (!this.canRender) {
            return;
          }
          if (this.entity && !DoesEntityExist(this.entity)) {
            this.handleDestroy();
            varData_2576.removeToRender(this);
            dataMap_3.delete(this.id);
            return;
          }
          var varData_2352 = this.getRenderCoords();
          var isDisabled_62 = false;
          if (this.context.doorId) {
            isDisabled_62 = DoorSystemGetDoorState(this.context.doorId) === 1;
          }
          this.handleRender(varData_2352, this.options.length > 0, isDisabled_62);
        }
      }, {
        key: "getRenderCoords",
        value: function _0x3351fb() {
          var varData_2353;
          var varData_2354;
          var varData_2355 = this.coords;
          if ((varData_2353 = this.context.flag) === null || varData_2353 === void 0 ? void 0 : varData_2353.includes("isNPC")) {
            if ((!this.entity || !DoesEntityExist(this.entity)) && this.context.npcId) {
              var varData_2356 = varData_1433.Sync["np-npcs"].GetNPC(this.context.npcId);
              if (varData_2356) {
                this.entity = varData_2356.entity;
              }
            }
            if (this.entity) {
              var varData_2357 = GetWorldPositionOfEntityBone(this.entity, GetPedBoneIndex(this.entity, 0));
              varData_2355 = varData_2357;
            }
          } else if (((varData_2354 = this.context.flag) === null || varData_2354 === void 0 ? void 0 : varData_2354.includes("isDoor")) && this.context.doorId !== void 0) {
            if (!this.entity) {
              var varData_2358 = varData_1433.Sync.doors.getDoorFromId(this.context.doorId);
              this.entity = varData_2358;
              if (this.entity) {
                var modelHash = GetEntityModel(this.entity);
                var varData_2359 = handleAction_250(GetModelDimensions(modelHash), 2);
                var varData_2360 = varData_2359[0];
                var varData_2361 = varData_2359[1];
                var varData_2362 = varData_2361[0] + varData_2360[0];
                var varData_2363 = varData_2361[2] + varData_2360[2];
                var varData_2364 = {
                  size: varData_2362 / 2,
                  zSize: varData_2363 / 2
                };
                this.entityData = varData_2364;
              }
            }
            if (this.entity) {
              var varData_2365 = this.entityData?.size || 0;
              var varData_2366 = this.entityData?.zSize || 0;
              var varData_2367 = GetOffsetFromEntityInWorldCoords(this.entity, varData_2365, 0, varData_2366);
              varData_2355 = varData_2367;
            }
          } else {
            if (this.entity && !this.entityData?.size) {
              var modelHash_1 = GetEntityModel(this.entity);
              var varData_2368 = handleAction_250(GetModelDimensions(modelHash_1), 2);
              var varData_2369 = varData_2368[0];
              var varData_2370 = varData_2368[1];
              var varData_2371 = varData_2370[0] + varData_2369[0];
              var varData_2372 = varData_2370[2] + varData_2369[2];
              var varData_2373 = {
                size: varData_2371 / 2,
                zSize: varData_2372 / 2
              };
              this.entityData = varData_2373;
            }
            if (this.entity) {
              var varData_2374 = this.entityData?.size || 0;
              var varData_2375 = this.entityData?.zSize || 0;
              var varData_2376 = GetOffsetFromEntityInWorldCoords(this.entity, varData_2374, 0, varData_2375);
              varData_2355 = varData_2376;
            }
          }
          this.renderCoords = varData_2355;
          return varData_2355;
        }
      }, {
        key: "handleHover",
        value: function _0x2d98ca(param_1_1) {
          this.hover(param_1_1);
          if (this.context.onHover) {
            emit(this.context.onHover.event, this.context.onHover.parameters, param_1_1, this.entity);
          }
        }
      }]);
      return handleAction_258;
    })(varData_2148);
    ;
    function handleAction_259(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_91 = 0, loopIdx = new Array(param_2); numericVal_91 < param_2; numericVal_91++) {
        loopIdx[numericVal_91] = param_1[numericVal_91];
      }
      return loopIdx;
    }
    function handleAction_260(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_261(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_259(param_1);
      }
    }
    function handleAction_262(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2377 = param_1[param_6](param_7);
        var varData_2378 = varData_2377.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2377.done) {
        param_2(varData_2378);
      } else {
        Promise.resolve(varData_2378).then(param_4, param_5);
      }
    }
    function handleAction_263(param_1) {
      return function() {
        var varData_2379 = this;
        var varData_2380 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2381 = param_1.apply(varData_2379, varData_2380);
          function handleAction_264(param_1_2) {
            handleAction_262(varData_2381, param_1_1, param_2, handleAction_264, handleAction_265, "next", param_1_2);
          }
          function handleAction_265(param_1_2) {
            handleAction_262(varData_2381, param_1_1, param_2, handleAction_264, handleAction_265, "throw", param_1_2);
          }
          handleAction_264(void 0);
        });
      };
    }
    function handleAction_266(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_267(param_1, param_2) {
      var varData_2382 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2382 == null) {
        return;
      }
      var itemList_3 = [];
      var isEnabled_2 = true;
      var isDisabled_62 = false;
      var varData_2383;
      var varData_2384;
      try {
        for (varData_2382 = varData_2382.call(param_1); !(isEnabled_2 = (varData_2383 = varData_2382.next()).done); isEnabled_2 = true) {
          itemList_3.push(varData_2383.value);
          if (param_2 && itemList_3.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_62 = true;
        varData_2384 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2382.return != null) {
            varData_2382.return();
          }
        } finally {
          if (isDisabled_62) {
            throw varData_2384;
          }
        }
      }
      return itemList_3;
    }
    function handleAction_268() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_269() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_270(param_1, param_2) {
      return handleAction_260(param_1) || handleAction_267(param_1, param_2) || handleAction_272(param_1, param_2) || handleAction_268();
    }
    function handleAction_271(param_1) {
      return handleAction_261(param_1) || handleAction_266(param_1) || handleAction_272(param_1) || handleAction_269();
    }
    function handleAction_272(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_259(param_1, param_2);
      }
      var varData_2385 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2385 === "Object" && param_1.constructor) {
        varData_2385 = param_1.constructor.name;
      }
      if (varData_2385 === "Map" || varData_2385 === "Set") {
        return Array.from(varData_2385);
      }
      if (varData_2385 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2385)) {
        return handleAction_259(param_1, param_2);
      }
    }
    function handleAction_273(param_1, param_2) {
      var varData_2386;
      var varData_2387;
      var varData_2388;
      var varData_2389;
      var varData_2390 = {
        label: 0,
        sent: function() {
          if (varData_2388[0] & 1) {
            throw varData_2388[1];
          }
          return varData_2388[1];
        },
        trys: [],
        ops: []
      };
      varData_2389 = {
        next: handleAction_274(0),
        throw: handleAction_274(1),
        return: handleAction_274(2)
      };
      if (typeof Symbol === "function") {
        varData_2389[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2389;
      function handleAction_274(param_1_1) {
        return function(param_1_2) {
          return handleAction_275([param_1_1, param_1_2]);
        };
      }
      function handleAction_275(param_1_1) {
        if (varData_2386) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2390) {
          try {
            varData_2386 = 1;
            if (varData_2387 && (varData_2388 = param_1_1[0] & 2 ? varData_2387.return : param_1_1[0] ? varData_2387.throw || ((varData_2388 = varData_2387.return) && varData_2388.call(varData_2387), 0) : varData_2387.next) && !(varData_2388 = varData_2388.call(varData_2387, param_1_1[1])).done) {
              return varData_2388;
            }
            varData_2387 = 0;
            if (varData_2388) {
              param_1_1 = [param_1_1[0] & 2, varData_2388.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2388 = param_1_1;
                break;
              case 4:
                varData_2390.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2390.label++;
                varData_2387 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2390.ops.pop();
                varData_2390.trys.pop();
                continue;
              default:
                if (!(varData_2388 = varData_2390.trys, varData_2388 = varData_2388.length > 0 && varData_2388[varData_2388.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2390 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2388 || param_1_1[1] > varData_2388[0] && param_1_1[1] < varData_2388[3])) {
                  varData_2390.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2390.label < varData_2388[1]) {
                  varData_2390.label = varData_2388[1];
                  varData_2388 = param_1_1;
                  break;
                }
                if (varData_2388 && varData_2390.label < varData_2388[2]) {
                  varData_2390.label = varData_2388[2];
                  varData_2390.ops.push(param_1_1);
                  break;
                }
                if (varData_2388[2]) {
                  varData_2390.ops.pop();
                }
                varData_2390.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2390);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2387 = 0;
          } finally {
            varData_2386 = varData_2388 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2391 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2391;
      }
    }
    var dataMap_2 = /* @__PURE__ */ new Map();
    var varData_2392 = varData_1420.cache((function() {
      var varData_2393 = handleAction_263(function(param_1) {
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
        var varData_2409;
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
        var varData_2420;
        var varData_2421;
        var varData_2422;
        var varData_2423;
        var varData_2424;
        return handleAction_273(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2302.get()];
            case 1:
              varData_2394 = param_1_1.sent();
              varData_2395 = GetGamePool("CObject").filter(function(param_1_2) {
                return varData_1420.MathUtils.getDistance(varData_2394?.coords ?? [0, 0, 0], GetEntityCoords(param_1_2)) < 50;
              });
              varData_2396 = GetGamePool("CPed").filter(function(param_1_2) {
                return varData_1420.MathUtils.getDistance(varData_2394?.coords ?? [0, 0, 0], GetEntityCoords(param_1_2)) < 50;
              });
              varData_2397 = handleAction_271(varData_2395).concat(handleAction_271(varData_2396));
              varData_2398 = /* @__PURE__ */ new Map();
              varData_2399 = true;
              varData_2400 = false;
              varData_2401 = void 0;
              try {
                for (varData_2402 = varData_2397[Symbol.iterator](); !(varData_2399 = (varData_2403 = varData_2402.next()).done); varData_2399 = true) {
                  varData_2404 = varData_2403.value;
                  varData_2405 = GetEntityArchetypeName(varData_2404);
                  if (!varData_2398.has(varData_2405)) {
                    varData_2398.set(varData_2405, [varData_2404]);
                  } else {
                    varData_2406 = varData_2398.get(varData_2405);
                    if (!varData_2406.includes(varData_2404)) {
                      varData_2406.push(varData_2404);
                      varData_2398.set(varData_2405, varData_2406);
                    }
                  }
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
              varData_2407 = true;
              varData_2408 = false;
              varData_2409 = void 0;
              try {
                for (varData_2410 = dataMap_2[Symbol.iterator](); !(varData_2407 = (varData_2411 = varData_2410.next()).done); varData_2407 = true) {
                  varData_2412 = handleAction_270(varData_2411.value, 2);
                  varData_2413 = varData_2412[0];
                  varData_2414 = varData_2412[1];
                  varData_2415 = true;
                  varData_2416 = false;
                  varData_2417 = void 0;
                  try {
                    for (varData_2418 = varData_2414[Symbol.iterator](); !(varData_2415 = (varData_2419 = varData_2418.next()).done); varData_2415 = true) {
                      varData_2420 = varData_2419.value;
                      ;
                      varData_2422 = (varData_2421 = varData_2398.get(varData_2413)) === null || varData_2421 === void 0 ? void 0 : varData_2421.includes(varData_2420);
                      if (varData_2422) {
                        continue;
                      }
                      varData_2423 = handleAction_228(varData_2413, varData_2420);
                      varData_2424 = dataMap_3.get(varData_2423);
                      handleAction_230(varData_2420, "modelInteractions");
                      if (varData_2424) {
                        varData_2576.removeToRender(varData_2424);
                        dataMap_3.delete(varData_2423);
                      }
                    }
                  } catch (err) {
                    varData_2416 = true;
                    varData_2417 = err;
                  } finally {
                    try {
                      if (!varData_2415 && varData_2418.return != null) {
                        varData_2418.return();
                      }
                    } finally {
                      if (varData_2416) {
                        throw varData_2417;
                      }
                    }
                  }
                }
              } catch (err) {
                varData_2408 = true;
                varData_2409 = err;
              } finally {
                try {
                  if (!varData_2407 && varData_2410.return != null) {
                    varData_2410.return();
                  }
                } finally {
                  if (varData_2408) {
                    throw varData_2409;
                  }
                }
              }
              return [2, [true, varData_2398]];
          }
        });
      });
      return function(param_1) {
        return varData_2393.apply(this, arguments);
      };
    })(), {
      timeToLive: 5e3
    });
    var varData_2425 = (function() {
      var varData_2426 = handleAction_263(function() {
        var varData_2427;
        var varData_2428;
        var varData_2429;
        var varData_2430;
        var varData_2431;
        var varData_2432;
        var varData_2433;
        var varData_2434;
        return handleAction_273(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_2392.get()];
            case 1:
              varData_2427 = param_1.sent();
              if (!varData_2427) {
                return [2, /* @__PURE__ */ new Map()];
              }
              varData_2428 = /* @__PURE__ */ new Map();
              varData_2429 = true;
              varData_2430 = false;
              varData_2431 = void 0;
              try {
                varData_2432 = function() {
                  var varData_2435 = handleAction_270(varData_2434.value, 2);
                  var varData_2436 = varData_2435[0];
                  var varData_2437 = varData_2435[1];
                  if (!dataMap_2.has(varData_2436)) {
                    varData_2428.set(varData_2436, varData_2437);
                  } else {
                    var varData_2438 = dataMap_2.get(varData_2436);
                    var dataSet_52 = new Set(varData_2438);
                    if (varData_2437.some(function(param_1_1) {
                      return !dataSet_52.has(param_1_1);
                    })) {
                      varData_2428.set(varData_2436, varData_2437);
                    }
                  }
                };
                for (varData_2433 = varData_2427[Symbol.iterator](); !(varData_2429 = (varData_2434 = varData_2433.next()).done); varData_2429 = true) {
                  varData_2432();
                }
              } catch (err) {
                varData_2430 = true;
                varData_2431 = err;
              } finally {
                try {
                  if (!varData_2429 && varData_2433.return != null) {
                    varData_2433.return();
                  }
                } finally {
                  if (varData_2430) {
                    throw varData_2431;
                  }
                }
              }
              dataMap_2 = varData_2427;
              return [2, varData_2428];
          }
        });
      });
      return function _0x2b100f() {
        return varData_2426.apply(this, arguments);
      };
    })();
    function handleAction_276(param_1) {
      var varData_2439 = knownInteractions.get(param_1);
      if (varData_2439) {
        Interactions.removeToRender(varData_2439);
        knownInteractions.delete(param_1);
      }
      varData_2440();
    }
    var varData_2440 = (function() {
      var varData_2441 = handleAction_263(function() {
        var varData_2442;
        var varData_2443;
        var varData_2444;
        var varData_2445;
        var varData_2446;
        var varData_2447;
        var varData_2448;
        var varData_2449;
        var varData_2450;
        var varData_2451;
        var varData_2452;
        var varData_2453;
        var varData_2454;
        var varData_2455;
        return handleAction_273(this, function(param_1) {
          varData_2442 = true;
          varData_2443 = false;
          varData_2444 = void 0;
          try {
            for (varData_2445 = dataMap_2[Symbol.iterator](); !(varData_2442 = (varData_2446 = varData_2445.next()).done); varData_2442 = true) {
              varData_2447 = handleAction_270(varData_2446.value, 2);
              varData_2448 = varData_2447[0];
              varData_2449 = varData_2447[1];
              varData_2450 = true;
              varData_2451 = false;
              varData_2452 = void 0;
              try {
                for (varData_2453 = varData_2449[Symbol.iterator](); !(varData_2450 = (varData_2454 = varData_2453.next()).done); varData_2450 = true) {
                  varData_2455 = varData_2454.value;
                  handleAction_231(varData_2455, "modelInteractions");
                }
              } catch (err) {
                varData_2451 = true;
                varData_2452 = err;
              } finally {
                try {
                  if (!varData_2450 && varData_2453.return != null) {
                    varData_2453.return();
                  }
                } finally {
                  if (varData_2451) {
                    throw varData_2452;
                  }
                }
              }
            }
          } catch (err) {
            varData_2443 = true;
            varData_2444 = err;
          } finally {
            try {
              if (!varData_2442 && varData_2445.return != null) {
                varData_2445.return();
              }
            } finally {
              if (varData_2443) {
                throw varData_2444;
              }
            }
          }
          return [2];
        });
      });
      return function _0x4699e0() {
        return varData_2441.apply(this, arguments);
      };
    })();
    ;
    function handleAction_277(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_91 = 0, loopIdx = new Array(param_2); numericVal_91 < param_2; numericVal_91++) {
        loopIdx[numericVal_91] = param_1[numericVal_91];
      }
      return loopIdx;
    }
    function handleAction_278(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_277(param_1);
      }
    }
    function handleAction_279(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2456 = param_1[param_6](param_7);
        var varData_2457 = varData_2456.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2456.done) {
        param_2(varData_2457);
      } else {
        Promise.resolve(varData_2457).then(param_4, param_5);
      }
    }
    function handleAction_280(param_1) {
      return function() {
        var varData_2458 = this;
        var varData_2459 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2460 = param_1.apply(varData_2458, varData_2459);
          function handleAction_281(param_1_2) {
            handleAction_279(varData_2460, param_1_1, param_2, handleAction_281, handleAction_282, "next", param_1_2);
          }
          function handleAction_282(param_1_2) {
            handleAction_279(varData_2460, param_1_1, param_2, handleAction_281, handleAction_282, "throw", param_1_2);
          }
          handleAction_281(void 0);
        });
      };
    }
    function handleAction_283(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_284() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_285(param_1) {
      return handleAction_278(param_1) || handleAction_283(param_1) || handleAction_286(param_1) || handleAction_284();
    }
    function handleAction_286(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_277(param_1, param_2);
      }
      var varData_2461 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2461 === "Object" && param_1.constructor) {
        varData_2461 = param_1.constructor.name;
      }
      if (varData_2461 === "Map" || varData_2461 === "Set") {
        return Array.from(varData_2461);
      }
      if (varData_2461 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2461)) {
        return handleAction_277(param_1, param_2);
      }
    }
    function handleAction_287(param_1, param_2) {
      var varData_2462;
      var varData_2463;
      var varData_2464;
      var varData_2465;
      var varData_2466 = {
        label: 0,
        sent: function() {
          if (varData_2464[0] & 1) {
            throw varData_2464[1];
          }
          return varData_2464[1];
        },
        trys: [],
        ops: []
      };
      varData_2465 = {
        next: handleAction_288(0),
        throw: handleAction_288(1),
        return: handleAction_288(2)
      };
      if (typeof Symbol === "function") {
        varData_2465[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2465;
      function handleAction_288(param_1_1) {
        return function(param_1_2) {
          return handleAction_289([param_1_1, param_1_2]);
        };
      }
      function handleAction_289(param_1_1) {
        if (varData_2462) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2466) {
          try {
            varData_2462 = 1;
            if (varData_2463 && (varData_2464 = param_1_1[0] & 2 ? varData_2463.return : param_1_1[0] ? varData_2463.throw || ((varData_2464 = varData_2463.return) && varData_2464.call(varData_2463), 0) : varData_2463.next) && !(varData_2464 = varData_2464.call(varData_2463, param_1_1[1])).done) {
              return varData_2464;
            }
            varData_2463 = 0;
            if (varData_2464) {
              param_1_1 = [param_1_1[0] & 2, varData_2464.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2464 = param_1_1;
                break;
              case 4:
                varData_2466.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2466.label++;
                varData_2463 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2466.ops.pop();
                varData_2466.trys.pop();
                continue;
              default:
                if (!(varData_2464 = varData_2466.trys, varData_2464 = varData_2464.length > 0 && varData_2464[varData_2464.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2466 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2464 || param_1_1[1] > varData_2464[0] && param_1_1[1] < varData_2464[3])) {
                  varData_2466.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2466.label < varData_2464[1]) {
                  varData_2466.label = varData_2464[1];
                  varData_2464 = param_1_1;
                  break;
                }
                if (varData_2464 && varData_2466.label < varData_2464[2]) {
                  varData_2466.label = varData_2464[2];
                  varData_2466.ops.push(param_1_1);
                  break;
                }
                if (varData_2464[2]) {
                  varData_2466.ops.pop();
                }
                varData_2466.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2466);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2463 = 0;
          } finally {
            varData_2462 = varData_2464 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2467 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2467;
      }
    }
    var dataSet_5 = /* @__PURE__ */ new Set();
    var varData_2468 = varData_1420.cache((function() {
      var varData_2469 = handleAction_280(function(param_1) {
        var varData_2470;
        var varData_2471;
        var varData_2472;
        var varData_2473;
        var varData_2474;
        var varData_2475;
        var varData_2476;
        var varData_2477;
        var varData_2478;
        var varData_2479;
        var varData_2480;
        var varData_2481;
        var varData_2482;
        var varData_2483;
        var varData_2484;
        return handleAction_287(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2302.get()];
            case 1:
              varData_2470 = param_1_1.sent();
              varData_2471 = /* @__PURE__ */ new Set();
              varData_2472 = GetGamePool("CVehicle").filter(function(param_1_2) {
                return varData_1420.MathUtils.getDistance(varData_2470?.coords ?? [0, 0, 0], GetEntityCoords(param_1_2)) < 50;
              });
              varData_2473 = true;
              varData_2474 = false;
              varData_2475 = void 0;
              try {
                for (varData_2476 = varData_2472[Symbol.iterator](); !(varData_2473 = (varData_2477 = varData_2476.next()).done); varData_2473 = true) {
                  varData_2478 = varData_2477.value;
                  varData_2471.add(varData_2478);
                }
              } catch (err) {
                varData_2474 = true;
                varData_2475 = err;
              } finally {
                try {
                  if (!varData_2473 && varData_2476.return != null) {
                    varData_2476.return();
                  }
                } finally {
                  if (varData_2474) {
                    throw varData_2475;
                  }
                }
              }
              varData_2479 = true;
              varData_2480 = false;
              varData_2481 = void 0;
              try {
                varData_2482 = function() {
                  var varData_2485 = varData_2484.value;
                  if (!varData_2471.has(varData_2485)) {
                    var varData_2486 = handleAction_228(varData_2485, "vehicleInteraction");
                    var varData_2487 = dataMap_3.get(varData_2486);
                    handleAction_230(varData_2485, "vehicleInteraction");
                    var varData_2488 = handleAction_285(dataMap_3.values()).filter(function(param_1_2) {
                      return param_1_2.entity === varData_2485;
                    });
                    var isEnabled_2 = true;
                    var isDisabled_62 = false;
                    var varData_2489 = void 0;
                    try {
                      for (var loopIdx = varData_2488[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
                        var varData_2490 = loopIdx_1.value;
                        varData_2576.removeToRender(varData_2490);
                        dataMap_3.delete(varData_2490.id);
                      }
                    } catch (err) {
                      isDisabled_62 = true;
                      varData_2489 = err;
                    } finally {
                      try {
                        if (!isEnabled_2 && loopIdx.return != null) {
                          loopIdx.return();
                        }
                      } finally {
                        if (isDisabled_62) {
                          throw varData_2489;
                        }
                      }
                    }
                    if (varData_2487) {
                      varData_2576.removeToRender(varData_2487);
                      dataMap_3.delete(varData_2486);
                    }
                  }
                };
                for (varData_2483 = dataSet_5[Symbol.iterator](); !(varData_2479 = (varData_2484 = varData_2483.next()).done); varData_2479 = true) {
                  varData_2482();
                }
              } catch (err) {
                varData_2480 = true;
                varData_2481 = err;
              } finally {
                try {
                  if (!varData_2479 && varData_2483.return != null) {
                    varData_2483.return();
                  }
                } finally {
                  if (varData_2480) {
                    throw varData_2481;
                  }
                }
              }
              return [2, [true, varData_2471]];
          }
        });
      });
      return function(param_1) {
        return varData_2469.apply(this, arguments);
      };
    })(), {
      timeToLive: 5e3
    });
    var varData_2491 = (function() {
      var varData_2492 = handleAction_280(function() {
        var varData_2493;
        var varData_2494;
        var varData_2495;
        var varData_2496;
        var varData_2497;
        var varData_2498;
        var varData_2499;
        var varData_2500;
        return handleAction_287(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_2468.get()];
            case 1:
              varData_2493 = param_1.sent();
              if (!varData_2493) {
                return [2, /* @__PURE__ */ new Set()];
              }
              varData_2494 = /* @__PURE__ */ new Set();
              varData_2495 = true;
              varData_2496 = false;
              varData_2497 = void 0;
              try {
                for (varData_2498 = varData_2493[Symbol.iterator](); !(varData_2495 = (varData_2499 = varData_2498.next()).done); varData_2495 = true) {
                  varData_2500 = varData_2499.value;
                  if (!dataSet_5.has(varData_2500)) {
                    varData_2494.add(varData_2500);
                  }
                }
              } catch (err) {
                varData_2496 = true;
                varData_2497 = err;
              } finally {
                try {
                  if (!varData_2495 && varData_2498.return != null) {
                    varData_2498.return();
                  }
                } finally {
                  if (varData_2496) {
                    throw varData_2497;
                  }
                }
              }
              dataSet_5 = varData_2493;
              return [2, varData_2494];
          }
        });
      });
      return function _0x1631f2() {
        return varData_2492.apply(this, arguments);
      };
    })();
    function handleAction_290(param_1) {
      var varData_2501 = dataMap_3.get(param_1);
      if (varData_2501) {
        varData_2576.removeToRender(varData_2501);
        dataMap_3.delete(param_1);
      }
      varData_2502();
    }
    var varData_2502 = (function() {
      var varData_2503 = handleAction_280(function() {
        var varData_2504;
        var varData_2505;
        var varData_2506;
        var varData_2507;
        var varData_2508;
        var varData_2509;
        return handleAction_287(this, function(param_1) {
          varData_2504 = true;
          varData_2505 = false;
          varData_2506 = void 0;
          try {
            for (varData_2507 = dataSet_5[Symbol.iterator](); !(varData_2504 = (varData_2508 = varData_2507.next()).done); varData_2504 = true) {
              varData_2509 = varData_2508.value;
              handleAction_231(varData_2509, "vehicleInteraction");
            }
          } catch (err) {
            varData_2505 = true;
            varData_2506 = err;
          } finally {
            try {
              if (!varData_2504 && varData_2507.return != null) {
                varData_2507.return();
              }
            } finally {
              if (varData_2505) {
                throw varData_2506;
              }
            }
          }
          return [2];
        });
      });
      return function _0x6e065() {
        return varData_2503.apply(this, arguments);
      };
    })();
    ;
    function handleAction_291(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2510 = param_1[param_6](param_7);
        var varData_2511 = varData_2510.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2510.done) {
        param_2(varData_2511);
      } else {
        Promise.resolve(varData_2511).then(param_4, param_5);
      }
    }
    function handleAction_292(param_1) {
      return function() {
        var varData_2512 = this;
        var varData_2513 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2514 = param_1.apply(varData_2512, varData_2513);
          function handleAction_293(param_1_2) {
            handleAction_291(varData_2514, param_1_1, param_2, handleAction_293, handleAction_294, "next", param_1_2);
          }
          function handleAction_294(param_1_2) {
            handleAction_291(varData_2514, param_1_1, param_2, handleAction_293, handleAction_294, "throw", param_1_2);
          }
          handleAction_293(void 0);
        });
      };
    }
    function handleAction_295(param_1, param_2) {
      var varData_2515;
      var varData_2516;
      var varData_2517;
      var varData_2518;
      var varData_2519 = {
        label: 0,
        sent: function() {
          if (varData_2517[0] & 1) {
            throw varData_2517[1];
          }
          return varData_2517[1];
        },
        trys: [],
        ops: []
      };
      varData_2518 = {
        next: handleAction_296(0),
        throw: handleAction_296(1),
        return: handleAction_296(2)
      };
      if (typeof Symbol === "function") {
        varData_2518[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2518;
      function handleAction_296(param_1_1) {
        return function(param_1_2) {
          return handleAction_297([param_1_1, param_1_2]);
        };
      }
      function handleAction_297(param_1_1) {
        if (varData_2515) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2519) {
          try {
            varData_2515 = 1;
            if (varData_2516 && (varData_2517 = param_1_1[0] & 2 ? varData_2516.return : param_1_1[0] ? varData_2516.throw || ((varData_2517 = varData_2516.return) && varData_2517.call(varData_2516), 0) : varData_2516.next) && !(varData_2517 = varData_2517.call(varData_2516, param_1_1[1])).done) {
              return varData_2517;
            }
            varData_2516 = 0;
            if (varData_2517) {
              param_1_1 = [param_1_1[0] & 2, varData_2517.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2517 = param_1_1;
                break;
              case 4:
                varData_2519.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2519.label++;
                varData_2516 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2519.ops.pop();
                varData_2519.trys.pop();
                continue;
              default:
                if (!(varData_2517 = varData_2519.trys, varData_2517 = varData_2517.length > 0 && varData_2517[varData_2517.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2519 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2517 || param_1_1[1] > varData_2517[0] && param_1_1[1] < varData_2517[3])) {
                  varData_2519.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2519.label < varData_2517[1]) {
                  varData_2519.label = varData_2517[1];
                  varData_2517 = param_1_1;
                  break;
                }
                if (varData_2517 && varData_2519.label < varData_2517[2]) {
                  varData_2519.label = varData_2517[2];
                  varData_2519.ops.push(param_1_1);
                  break;
                }
                if (varData_2517[2]) {
                  varData_2519.ops.pop();
                }
                varData_2519.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2519);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2516 = 0;
          } finally {
            varData_2515 = varData_2517 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2520 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2520;
      }
    }
    var dataSet_6 = /* @__PURE__ */ new Set();
    var varData_2521 = varData_2085.cache((function() {
      var varData_2522 = handleAction_292(function(param_1) {
        var varData_2523;
        var varData_2524;
        var varData_2525;
        var varData_2526;
        var varData_2527;
        var varData_2528;
        var varData_2529;
        var varData_2530;
        var varData_2531;
        var varData_2532;
        var varData_2533;
        var varData_2534;
        var varData_2535;
        var varData_2536;
        var varData_2537;
        var varData_2538;
        var varData_2539;
        var varData_2540;
        return handleAction_295(this, function(param_1_1) {
          switch (param_1_1.label) {
            case 0:
              return [4, varData_2302.get()];
            case 1:
              varData_2523 = param_1_1.sent();
              varData_2524 = /* @__PURE__ */ new Set();
              varData_2525 = GetGamePool("CPed").filter(function(param_1_2) {
                return varData_2085.MathUtils.getDistance(varData_2523?.coords ?? [0, 0, 0], GetEntityCoords(param_1_2)) < 50;
              });
              varData_2526 = PlayerPedId();
              varData_2527 = true;
              varData_2528 = false;
              varData_2529 = void 0;
              try {
                for (varData_2530 = varData_2525[Symbol.iterator](); !(varData_2527 = (varData_2531 = varData_2530.next()).done); varData_2527 = true) {
                  varData_2532 = varData_2531.value;
                  if (varData_2532 === varData_2526) {
                    continue;
                  }
                  varData_2524.add(varData_2532);
                }
              } catch (err) {
                varData_2528 = true;
                varData_2529 = err;
              } finally {
                try {
                  if (!varData_2527 && varData_2530.return != null) {
                    varData_2530.return();
                  }
                } finally {
                  if (varData_2528) {
                    throw varData_2529;
                  }
                }
              }
              varData_2533 = true;
              varData_2534 = false;
              varData_2535 = void 0;
              try {
                for (varData_2536 = dataSet_6[Symbol.iterator](); !(varData_2533 = (varData_2537 = varData_2536.next()).done); varData_2533 = true) {
                  varData_2538 = varData_2537.value;
                  if (!varData_2524.has(varData_2538)) {
                    varData_2539 = handleAction_228(varData_2538, "pedInteraction");
                    varData_2540 = dataMap_3.get(varData_2539);
                    handleAction_230(varData_2538, "pedInteraction");
                    if (varData_2540) {
                      varData_2576.removeToRender(varData_2540);
                      dataMap_3.delete(varData_2539);
                    }
                  }
                }
              } catch (err) {
                varData_2534 = true;
                varData_2535 = err;
              } finally {
                try {
                  if (!varData_2533 && varData_2536.return != null) {
                    varData_2536.return();
                  }
                } finally {
                  if (varData_2534) {
                    throw varData_2535;
                  }
                }
              }
              return [2, [true, varData_2524]];
          }
        });
      });
      return function(param_1) {
        return varData_2522.apply(this, arguments);
      };
    })(), {
      timeToLive: 5e3
    });
    var varData_2541 = (function() {
      var varData_2542 = handleAction_292(function() {
        var varData_2543;
        var varData_2544;
        var varData_2545;
        var varData_2546;
        var varData_2547;
        var varData_2548;
        var varData_2549;
        var varData_2550;
        return handleAction_295(this, function(param_1) {
          switch (param_1.label) {
            case 0:
              return [4, varData_2521.get()];
            case 1:
              varData_2543 = param_1.sent();
              if (!varData_2543) {
                return [2, /* @__PURE__ */ new Set()];
              }
              varData_2544 = /* @__PURE__ */ new Set();
              varData_2545 = true;
              varData_2546 = false;
              varData_2547 = void 0;
              try {
                for (varData_2548 = varData_2543[Symbol.iterator](); !(varData_2545 = (varData_2549 = varData_2548.next()).done); varData_2545 = true) {
                  varData_2550 = varData_2549.value;
                  if (!dataSet_6.has(varData_2550)) {
                    varData_2544.add(varData_2550);
                  }
                }
              } catch (err) {
                varData_2546 = true;
                varData_2547 = err;
              } finally {
                try {
                  if (!varData_2545 && varData_2548.return != null) {
                    varData_2548.return();
                  }
                } finally {
                  if (varData_2546) {
                    throw varData_2547;
                  }
                }
              }
              dataSet_6 = varData_2543;
              return [2, varData_2544];
          }
        });
      });
      return function _0xe580d0() {
        return varData_2542.apply(this, arguments);
      };
    })();
    var varData_2551 = (function() {
      var varData_2552 = handleAction_292(function() {
        var varData_2553;
        var varData_2554;
        var varData_2555;
        var varData_2556;
        var varData_2557;
        var varData_2558;
        return handleAction_295(this, function(param_1) {
          varData_2553 = true;
          varData_2554 = false;
          varData_2555 = void 0;
          try {
            for (varData_2556 = dataSet_6[Symbol.iterator](); !(varData_2553 = (varData_2557 = varData_2556.next()).done); varData_2553 = true) {
              varData_2558 = varData_2557.value;
              handleAction_231(varData_2558, "pedInteraction");
            }
          } catch (err) {
            varData_2554 = true;
            varData_2555 = err;
          } finally {
            try {
              if (!varData_2553 && varData_2556.return != null) {
                varData_2556.return();
              }
            } finally {
              if (varData_2554) {
                throw varData_2555;
              }
            }
          }
          return [2];
        });
      });
      return function _0x36ed17() {
        return varData_2552.apply(this, arguments);
      };
    })();
    ;
    function handleAction_298(param_1, param_2) {
      if (param_2 == null || param_2 > param_1.length) {
        param_2 = param_1.length;
      }
      for (var numericVal_91 = 0, loopIdx = new Array(param_2); numericVal_91 < param_2; numericVal_91++) {
        loopIdx[numericVal_91] = param_1[numericVal_91];
      }
      return loopIdx;
    }
    function handleAction_299(param_1) {
      if (Array.isArray(param_1)) {
        return param_1;
      }
    }
    function handleAction_300(param_1) {
      if (Array.isArray(param_1)) {
        return handleAction_298(param_1);
      }
    }
    function handleAction_301(param_1, param_2, param_3, param_4, param_5, param_6, param_7) {
      try {
        var varData_2559 = param_1[param_6](param_7);
        var varData_2560 = varData_2559.value;
      } catch (err) {
        param_3(err);
        return;
      }
      if (varData_2559.done) {
        param_2(varData_2560);
      } else {
        Promise.resolve(varData_2560).then(param_4, param_5);
      }
    }
    function handleAction_302(param_1) {
      return function() {
        var varData_2561 = this;
        var varData_2562 = arguments;
        return new Promise(function(param_1_1, param_2) {
          var varData_2563 = param_1.apply(varData_2561, varData_2562);
          function handleAction_303(param_1_2) {
            handleAction_301(varData_2563, param_1_1, param_2, handleAction_303, handleAction_304, "next", param_1_2);
          }
          function handleAction_304(param_1_2) {
            handleAction_301(varData_2563, param_1_1, param_2, handleAction_303, handleAction_304, "throw", param_1_2);
          }
          handleAction_303(void 0);
        });
      };
    }
    function handleAction_305(param_1, param_2) {
      if (!(param_1 instanceof param_2)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function handleAction_306(param_1, param_2) {
      for (var numericVal_91 = 0; numericVal_91 < param_2.length; numericVal_91++) {
        var varData_2564 = param_2[numericVal_91];
        varData_2564.enumerable = varData_2564.enumerable || false;
        varData_2564.configurable = true;
        if ("value" in varData_2564) {
          varData_2564.writable = true;
        }
        Object.defineProperty(param_1, varData_2564.key, varData_2564);
      }
    }
    function handleAction_307(param_1, param_2, param_3) {
      if (param_2) {
        handleAction_306(param_1.prototype, param_2);
      }
      if (param_3) {
        handleAction_306(param_1, param_3);
      }
      return param_1;
    }
    function handleAction_308(param_1, param_2, param_3) {
      if (param_2 in param_1) {
        var varData_2565 = {
          value: param_3,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(param_1, param_2, varData_2565);
      } else {
        param_1[param_2] = param_3;
      }
      return param_1;
    }
    function handleAction_309(param_1, param_2) {
      if (param_2 != null && typeof Symbol !== "undefined" && param_2[Symbol.hasInstance]) {
        return !!param_2[Symbol.hasInstance](param_1);
      } else {
        return param_1 instanceof param_2;
      }
    }
    function handleAction_310(param_1) {
      if (typeof Symbol !== "undefined" && param_1[Symbol.iterator] != null || param_1["@@iterator"] != null) {
        return Array.from(param_1);
      }
    }
    function handleAction_311(param_1, param_2) {
      var varData_2566 = param_1 == null ? null : typeof Symbol !== "undefined" && param_1[Symbol.iterator] || param_1["@@iterator"];
      if (varData_2566 == null) {
        return;
      }
      var itemList_3 = [];
      var isEnabled_2 = true;
      var isDisabled_62 = false;
      var varData_2567;
      var varData_2568;
      try {
        for (varData_2566 = varData_2566.call(param_1); !(isEnabled_2 = (varData_2567 = varData_2566.next()).done); isEnabled_2 = true) {
          itemList_3.push(varData_2567.value);
          if (param_2 && itemList_3.length === param_2) {
            break;
          }
        }
      } catch (err) {
        isDisabled_62 = true;
        varData_2568 = err;
      } finally {
        try {
          if (!isEnabled_2 && varData_2566.return != null) {
            varData_2566.return();
          }
        } finally {
          if (isDisabled_62) {
            throw varData_2568;
          }
        }
      }
      return itemList_3;
    }
    function handleAction_312() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_313() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function handleAction_314(param_1, param_2) {
      return handleAction_299(param_1) || handleAction_311(param_1, param_2) || handleAction_316(param_1, param_2) || handleAction_312();
    }
    function handleAction_315(param_1) {
      return handleAction_300(param_1) || handleAction_310(param_1) || handleAction_316(param_1) || handleAction_313();
    }
    function handleAction_316(param_1, param_2) {
      if (!param_1) {
        return;
      }
      if (typeof param_1 === "string") {
        return handleAction_298(param_1, param_2);
      }
      var varData_2569 = Object.prototype.toString.call(param_1).slice(8, -1);
      if (varData_2569 === "Object" && param_1.constructor) {
        varData_2569 = param_1.constructor.name;
      }
      if (varData_2569 === "Map" || varData_2569 === "Set") {
        return Array.from(varData_2569);
      }
      if (varData_2569 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(varData_2569)) {
        return handleAction_298(param_1, param_2);
      }
    }
    function handleAction_317(param_1, param_2) {
      var varData_2570;
      var varData_2571;
      var varData_2572;
      var varData_2573;
      var varData_2574 = {
        label: 0,
        sent: function() {
          if (varData_2572[0] & 1) {
            throw varData_2572[1];
          }
          return varData_2572[1];
        },
        trys: [],
        ops: []
      };
      varData_2573 = {
        next: handleAction_318(0),
        throw: handleAction_318(1),
        return: handleAction_318(2)
      };
      if (typeof Symbol === "function") {
        varData_2573[Symbol.iterator] = function() {
          return this;
        };
      }
      return varData_2573;
      function handleAction_318(param_1_1) {
        return function(param_1_2) {
          return handleAction_319([param_1_1, param_1_2]);
        };
      }
      function handleAction_319(param_1_1) {
        if (varData_2570) {
          throw new TypeError("Generator is already executing.");
        }
        while (varData_2574) {
          try {
            varData_2570 = 1;
            if (varData_2571 && (varData_2572 = param_1_1[0] & 2 ? varData_2571.return : param_1_1[0] ? varData_2571.throw || ((varData_2572 = varData_2571.return) && varData_2572.call(varData_2571), 0) : varData_2571.next) && !(varData_2572 = varData_2572.call(varData_2571, param_1_1[1])).done) {
              return varData_2572;
            }
            varData_2571 = 0;
            if (varData_2572) {
              param_1_1 = [param_1_1[0] & 2, varData_2572.value];
            }
            switch (param_1_1[0]) {
              case 0:
              case 1:
                varData_2572 = param_1_1;
                break;
              case 4:
                varData_2574.label++;
                return {
                  value: param_1_1[1],
                  done: false
                };
              case 5:
                varData_2574.label++;
                varData_2571 = param_1_1[1];
                param_1_1 = [0];
                continue;
              case 7:
                param_1_1 = varData_2574.ops.pop();
                varData_2574.trys.pop();
                continue;
              default:
                if (!(varData_2572 = varData_2574.trys, varData_2572 = varData_2572.length > 0 && varData_2572[varData_2572.length - 1]) && (param_1_1[0] === 6 || param_1_1[0] === 2)) {
                  varData_2574 = 0;
                  continue;
                }
                if (param_1_1[0] === 3 && (!varData_2572 || param_1_1[1] > varData_2572[0] && param_1_1[1] < varData_2572[3])) {
                  varData_2574.label = param_1_1[1];
                  break;
                }
                if (param_1_1[0] === 6 && varData_2574.label < varData_2572[1]) {
                  varData_2574.label = varData_2572[1];
                  varData_2572 = param_1_1;
                  break;
                }
                if (varData_2572 && varData_2574.label < varData_2572[2]) {
                  varData_2574.label = varData_2572[2];
                  varData_2574.ops.push(param_1_1);
                  break;
                }
                if (varData_2572[2]) {
                  varData_2574.ops.pop();
                }
                varData_2574.trys.pop();
                continue;
            }
            param_1_1 = param_2.call(param_1, varData_2574);
          } catch (err) {
            param_1_1 = [6, err];
            varData_2571 = 0;
          } finally {
            varData_2570 = varData_2572 = 0;
          }
        }
        if (param_1_1[0] & 5) {
          throw param_1_1[1];
        }
        var varData_2575 = {
          value: param_1_1[0] ? param_1_1[1] : void 0,
          done: true
        };
        return varData_2575;
      }
    }
    var dataMap_3 = /* @__PURE__ */ new Map();
    var varData_2576 = (function() {
      "use strict";
      function handleAction_320() {
        handleAction_305(this, handleAction_320);
      }
      handleAction_307(handleAction_320, null, [{
        key: "Init",
        value: function _0x119f95() {
          var varData_2577 = this;
          this.checkInteractions();
          var varData_2578 = 1920 / 1080;
          this.ratio = GetAspectRatio(false) / varData_2578;
          varData_1433.Sync("AddInteraction", this.AddInteraction.bind(this));
          varData_1433.Sync("DoesInteractionExists", this.DoesInteractionExists.bind(this));
          varData_1433.Sync("RemoveInteraction", this.RemoveInteraction.bind(this));
          varData_1433.Sync("UpdateInteraction", this.UpdateInteraction.bind(this));
          varData_1433.Sync("AddInteractionByModel", this.AddInteractionByModel.bind(this));
          varData_1433.Sync("AddPedInteraction", this.AddPedInteraction.bind(this));
          varData_1433.Sync("RemovePedInteraction", this.RemovePedInteraction.bind(this));
          varData_1433.Sync("AddVehicleInteraction", this.AddVehicleInteraction.bind(this));
          varData_1433.Sync("RemoveVehicleInteraction", this.RemoveVehicleInteraction.bind(this));
          varData_1433.Sync("IsToggled", function() {
            return varData_2577.toggleInteractions;
          });
          var varData_2579 = void 0;
          var varData_2580 = this;
          RegisterCommand("+targetInteract", handleAction_302(function() {
            var varData_2581;
            return handleAction_317(this, function(param_1) {
              switch (param_1.label) {
                case 0:
                  emit("interactions:targetInteract", true);
                  if (varData_2579) {
                    clearTimeout(varData_2579);
                  }
                  varData_2580.toggleInteractions = true;
                  handleAction_149();
                  return [4, varData_2302.get()];
                case 1:
                  varData_2581 = param_1.sent();
                  if (!varData_2581) {
                    return [2];
                  }
                  return [4, varData_2580.checkKnownInteractions(varData_2581)];
                case 2:
                  param_1.sent();
                  return [2];
              }
            });
          }), false);
          RegisterCommand("-targetInteract", function() {
            emit("interactions:targetInteract", false);
            varData_2579 = setTimeout(function() {
              varData_2577.toggleInteractions = false;
              varData_2579 = void 0;
            }, 5e3);
            handleAction_150();
          }, false);
          try {
            varData_1433.Sync["np-keybinds"].registerKeyMapping("", "Player", "Peek at Target", "+targetInteract", "-targetInteract", "LMENU");
          } catch (_e) {
            RegisterKeyMapping("+targetInteract", "(Player) Peek at Target", "keyboard", "LMENU");
          }
          var varData_2582 = this;
          on("onResourceStop", (function() {
            var varData_2583 = handleAction_302(function(param_1) {
              var varData_2584;
              var varData_2585;
              var varData_2586;
              var varData_2587;
              var varData_2588;
              var varData_2589;
              var varData_2590;
              var varData_2591;
              var varData_2592;
              var varData_2593;
              var varData_2594;
              var varData_2595;
              var varData_2596;
              var varData_2597;
              var varData_2598;
              var varData_2599;
              var varData_2600;
              var varData_2601;
              var varData_2602;
              var varData_2603;
              var varData_2604;
              var varData_2605;
              var varData_2606;
              var varData_2607;
              var varData_2608;
              var varData_2609;
              var varData_2610;
              var varData_2611;
              var varData_2612;
              var varData_2613;
              var varData_2614;
              var varData_2615;
              var varData_2616;
              var varData_2617;
              var varData_2618;
              return handleAction_317(this, function(param_1_1) {
                switch (param_1_1.label) {
                  case 0:
                    if (param_1 === GetCurrentResourceName()) {
                      return [3, 2];
                    }
                    varData_2584 = handleAction_315(varData_2582.interactions.values()).filter(function(param_1_2) {
                      return param_1_2.resource === param_1;
                    });
                    varData_2585 = true;
                    varData_2586 = false;
                    varData_2587 = void 0;
                    try {
                      for (varData_2588 = varData_2584[Symbol.iterator](); !(varData_2585 = (varData_2589 = varData_2588.next()).done); varData_2585 = true) {
                        varData_2590 = varData_2589.value;
                        varData_2582.RemoveInteraction(varData_2590.id);
                        dataMap_3.delete(varData_2590.id);
                      }
                    } catch (err) {
                      varData_2586 = true;
                      varData_2587 = err;
                    } finally {
                      try {
                        if (!varData_2585 && varData_2588.return != null) {
                          varData_2588.return();
                        }
                      } finally {
                        if (varData_2586) {
                          throw varData_2587;
                        }
                      }
                    }
                    varData_2591 = true;
                    varData_2592 = false;
                    varData_2593 = void 0;
                    try {
                      for (varData_2594 = dataMap_3.entries()[Symbol.iterator](); !(varData_2591 = (varData_2595 = varData_2594.next()).done); varData_2591 = true) {
                        varData_2596 = handleAction_314(varData_2595.value, 2);
                        varData_2597 = varData_2596[0];
                        varData_2598 = varData_2596[1];
                        varData_2599 = handleAction_309(varData_2598, varData_2197);
                        if (!varData_2599) {
                          continue;
                        }
                        varData_2600 = true;
                        varData_2601 = false;
                        varData_2602 = void 0;
                        try {
                          for (varData_2603 = varData_2598.interactions[Symbol.iterator](); !(varData_2600 = (varData_2604 = varData_2603.next()).done); varData_2600 = true) {
                            varData_2605 = varData_2604.value;
                            if (varData_2605.resource !== param_1) {
                              continue;
                            }
                            varData_2598.interactions = varData_2598.interactions.filter(function(param_1_2) {
                              return param_1_2.resource !== param_1;
                            });
                          }
                        } catch (err) {
                          varData_2601 = true;
                          varData_2602 = err;
                        } finally {
                          try {
                            if (!varData_2600 && varData_2603.return != null) {
                              varData_2603.return();
                            }
                          } finally {
                            if (varData_2601) {
                              throw varData_2602;
                            }
                          }
                        }
                        varData_2582.removeToRender(varData_2598);
                        dataMap_3.delete(varData_2597);
                      }
                    } catch (err) {
                      varData_2592 = true;
                      varData_2593 = err;
                    } finally {
                      try {
                        if (!varData_2591 && varData_2594.return != null) {
                          varData_2594.return();
                        }
                      } finally {
                        if (varData_2592) {
                          throw varData_2593;
                        }
                      }
                    }
                    return [4, varData_2302.get()];
                  case 1:
                    varData_2606 = param_1_1.sent();
                    if (!varData_2606) {
                      return [2];
                    }
                    varData_2582.checkKnownInteractions(varData_2606);
                    return [3, 3];
                  case 2:
                    varData_2607 = true;
                    varData_2608 = false;
                    varData_2609 = void 0;
                    try {
                      for (varData_2610 = varData_2582.interactions.values()[Symbol.iterator](); !(varData_2607 = (varData_2611 = varData_2610.next()).done); varData_2607 = true) {
                        varData_2612 = varData_2611.value;
                        varData_2582.RemoveInteraction(varData_2612.id);
                      }
                    } catch (err) {
                      varData_2608 = true;
                      varData_2609 = err;
                    } finally {
                      try {
                        if (!varData_2607 && varData_2610.return != null) {
                          varData_2610.return();
                        }
                      } finally {
                        if (varData_2608) {
                          throw varData_2609;
                        }
                      }
                    }
                    varData_2613 = true;
                    varData_2614 = false;
                    varData_2615 = void 0;
                    try {
                      for (varData_2616 = varData_2582.activeInteractions.values()[Symbol.iterator](); !(varData_2613 = (varData_2617 = varData_2616.next()).done); varData_2613 = true) {
                        varData_2618 = varData_2617.value;
                        varData_2582.removeToRender(varData_2618);
                      }
                    } catch (err) {
                      varData_2614 = true;
                      varData_2615 = err;
                    } finally {
                      try {
                        if (!varData_2613 && varData_2616.return != null) {
                          varData_2616.return();
                        }
                      } finally {
                        if (varData_2614) {
                          throw varData_2615;
                        }
                      }
                    }
                    param_1_1.label = 3;
                  case 3:
                    return [2];
                }
              });
            });
            return function(param_1) {
              return varData_2583.apply(this, arguments);
            };
          })());
        }
      }, {
        key: "DoesInteractionExists",
        value: function _0xf95f36(param_1) {
          return this.interactions.has(param_1);
        }
      }, {
        key: "AddInteraction",
        value: function _0xa32d8b(param_1) {
          if (this.interactions.has(param_1.id)) {
            this.RemoveInteraction(param_1.id);
          }
          var varData_2619 = new varData_2338(param_1.id, param_1.coords, param_1.options, param_1.context, GetInvokingResource());
          this.interactions.set(param_1.id, varData_2619);
          varData_2619.addZone();
        }
      }, {
        key: "AddInteractionByModel",
        value: function _0x32f7b4(param_1, param_2) {
          var varData_2620 = this;
          return handleAction_302(function() {
            var varData_2621;
            var varData_2622;
            var varData_2623;
            var varData_2624;
            var varData_2625;
            var varData_2626;
            var varData_2627;
            var varData_2628;
            var varData_2629;
            return handleAction_317(this, function(param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  param_2.resource = GetInvokingResource();
                  varData_2621 = true;
                  varData_2622 = false;
                  varData_2623 = void 0;
                  try {
                    for (varData_2624 = param_1[Symbol.iterator](); !(varData_2621 = (varData_2625 = varData_2624.next()).done); varData_2621 = true) {
                      varData_2626 = varData_2625.value;
                      if (varData_2620.modelInteractions.has(varData_2626)) {
                        varData_2627 = varData_2620.modelInteractions.get(varData_2626);
                        varData_2628 = varData_2627.filter(function(param_1_2) {
                          return param_1_2.id !== param_2.id;
                        });
                        varData_2628.push(param_2);
                        varData_2620.modelInteractions.set(varData_2626, varData_2628);
                        continue;
                      }
                      varData_2620.modelInteractions.set(varData_2626, [param_2]);
                    }
                  } catch (err) {
                    varData_2622 = true;
                    varData_2623 = err;
                  } finally {
                    try {
                      if (!varData_2621 && varData_2624.return != null) {
                        varData_2624.return();
                      }
                    } finally {
                      if (varData_2622) {
                        throw varData_2623;
                      }
                    }
                  }
                  return [4, varData_2302.get()];
                case 1:
                  varData_2629 = param_1_1.sent();
                  if (!varData_2629) {
                    return [2];
                  }
                  varData_2440();
                  varData_2620.checkKnownInteractions(varData_2629);
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "AddPedInteraction",
        value: function _0x4e30da(param_1) {
          var varData_2630 = this;
          return handleAction_302(function() {
            var varData_2631;
            return handleAction_317(this, function(param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  param_1.resource = GetInvokingResource();
                  varData_2630.pedInteractions.set(param_1.id, param_1);
                  varData_2551();
                  return [4, varData_2302.get()];
                case 1:
                  varData_2631 = param_1_1.sent();
                  if (!varData_2631) {
                    return [2];
                  }
                  varData_2630.checkKnownInteractions(varData_2631);
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "RemovePedInteraction",
        value: function _0x125378(param_1) {
          if (this.pedInteractions.has(param_1)) {
            var varData_2632 = handleAction_315(dataMap_3.values()).filter(function(param_1_1) {
              return param_1_1.id.includes("pedInteraction");
            });
            var isEnabled_2 = true;
            var isDisabled_62 = false;
            var varData_2633 = void 0;
            try {
              for (var loopIdx = varData_2632[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
                var varData_2634 = loopIdx_1.value;
                var varData_2635 = varData_2634;
                varData_2635.interactions = varData_2635.interactions.filter(function(param_1_1) {
                  return param_1_1.id !== param_1;
                });
                if (varData_2635.interactions.length === 0) {
                  this.removeToRender(varData_2635);
                  dataMap_3.delete(varData_2635.id);
                }
              }
            } catch (err) {
              isDisabled_62 = true;
              varData_2633 = err;
            } finally {
              try {
                if (!isEnabled_2 && loopIdx.return != null) {
                  loopIdx.return();
                }
              } finally {
                if (isDisabled_62) {
                  throw varData_2633;
                }
              }
            }
            this.pedInteractions.delete(param_1);
          }
          varData_2551();
        }
      }, {
        key: "AddVehicleInteraction",
        value: function _0x104722(param_1) {
          var varData_2636 = this;
          return handleAction_302(function() {
            var varData_2637;
            var varData_2638;
            var varData_2639;
            return handleAction_317(this, function(param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  param_1.resource = GetInvokingResource();
                  if (param_1.context.bone) {
                    if (varData_2636.vehicleBoneInteractions.has(param_1.context.bone)) {
                      varData_2637 = varData_2636.vehicleBoneInteractions.get(param_1.context.bone);
                      varData_2638 = varData_2637.filter(function(param_1_2) {
                        return param_1_2.id !== param_1.id;
                      });
                      varData_2638.push(param_1);
                      varData_2636.vehicleBoneInteractions.set(param_1.context.bone, varData_2638);
                    } else {
                      varData_2636.vehicleBoneInteractions.set(param_1.context.bone, [param_1]);
                    }
                  } else {
                    varData_2636.vehicleInteractions.set(param_1.id, param_1);
                  }
                  return [4, varData_2302.get()];
                case 1:
                  varData_2639 = param_1_1.sent();
                  if (!varData_2639) {
                    return [2];
                  }
                  varData_2502();
                  varData_2636.checkKnownInteractions(varData_2639);
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "RemoveVehicleInteraction",
        value: function _0x545320(param_1) {
          var varData_2640 = Array.from(this.vehicleBoneInteractions.keys());
          var isEnabled_2 = true;
          var isDisabled_62 = false;
          var varData_2641 = void 0;
          try {
            let handleAction_321 = function() {
              var varData_2643 = loopIdx_12.value;
              var varData_2644 = varData_2642.vehicleBoneInteractions.get(varData_2643);
              varData_2642.vehicleBoneInteractions.set(varData_2643, varData_2644.filter(function(param_1_1) {
                return param_1_1.id !== param_1;
              }));
              if (varData_2644.length === 0) {
                varData_2642.vehicleBoneInteractions.delete(varData_2643);
              }
              var varData_2645 = handleAction_315(dataMap_3.values()).filter(function(param_1_1) {
                return param_1_1.id.includes(varData_2643);
              });
              var isEnabled_32 = true;
              var isDisabled_72 = false;
              var varData_2646 = void 0;
              try {
                for (var loopIdx2 = varData_2645[Symbol.iterator](), loopIdx_12; !(isEnabled_32 = (loopIdx_12 = loopIdx2.next()).done); isEnabled_32 = true) {
                  var varData_2647 = loopIdx_12.value;
                  var varData_2648 = varData_2647;
                  varData_2648.interactions = varData_2648.interactions.filter(function(param_1_1) {
                    return param_1_1.id !== param_1;
                  });
                  if (varData_2648.interactions.length === 0) {
                    varData_2642.removeToRender(varData_2648);
                    dataMap_3.delete(varData_2648.id);
                  }
                }
              } catch (err) {
                isDisabled_72 = true;
                varData_2646 = err;
              } finally {
                try {
                  if (!isEnabled_32 && loopIdx2.return != null) {
                    loopIdx2.return();
                  }
                } finally {
                  if (isDisabled_72) {
                    throw varData_2646;
                  }
                }
              }
            };
            var varData_2642 = this;
            for (var loopIdx = varData_2640[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
              handleAction_321();
            }
          } catch (err) {
            isDisabled_62 = true;
            varData_2641 = err;
          } finally {
            try {
              if (!isEnabled_2 && loopIdx.return != null) {
                loopIdx.return();
              }
            } finally {
              if (isDisabled_62) {
                throw varData_2641;
              }
            }
          }
          if (this.vehicleInteractions.has(param_1)) {
            this.vehicleInteractions.delete(param_1);
            var varData_2649 = handleAction_315(dataMap_3.values()).filter(function(param_1_1) {
              return param_1_1.id.includes("vehicleInteraction");
            });
            var isEnabled_3 = true;
            var isDisabled_7 = false;
            var varData_2650 = void 0;
            try {
              for (var loopIdx_2 = varData_2649[Symbol.iterator](), loopIdx_3; !(isEnabled_3 = (loopIdx_3 = loopIdx_2.next()).done); isEnabled_3 = true) {
                var varData_2651 = loopIdx_3.value;
                var varData_2652 = varData_2651;
                varData_2652.interactions = varData_2652.interactions.filter(function(param_1_1) {
                  return param_1_1.id !== param_1;
                });
                if (varData_2652.interactions.length === 0) {
                  this.removeToRender(varData_2652);
                  dataMap_3.delete(varData_2652.id);
                }
              }
            } catch (err) {
              isDisabled_7 = true;
              varData_2650 = err;
            } finally {
              try {
                if (!isEnabled_3 && loopIdx_2.return != null) {
                  loopIdx_2.return();
                }
              } finally {
                if (isDisabled_7) {
                  throw varData_2650;
                }
              }
            }
          }
          handleAction_290(param_1);
        }
      }, {
        key: "RemoveInteraction",
        value: function _0x5a22cd(param_1) {
          if (this.interactions.has(param_1)) {
            var varData_2653 = this.interactions.get(param_1);
            varData_2653.removeZone();
            this.removeToRender(varData_2653);
            dataMap_3.delete(param_1);
            this.interactions.delete(param_1);
          } else {
            var isEnabled_2 = true;
            var isDisabled_62 = false;
            var varData_2654 = void 0;
            try {
              for (var loopIdx = this.modelInteractions.entries()[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
                var varData_2655 = handleAction_314(loopIdx_1.value, 2);
                var varData_2656 = varData_2655[0];
                var varData_2657 = varData_2655[1];
                var varData_2658 = varData_2657.filter(function(param_1_1) {
                  return param_1_1.id !== param_1;
                });
                if (varData_2658.length === varData_2657.length) {
                  continue;
                }
                var varData_2659 = dataMap_3.get(param_1);
                if (varData_2659) {
                  this.removeToRender(varData_2659);
                }
                dataMap_3.delete(param_1);
                if (varData_2658.length === 0) {
                  this.modelInteractions.delete(varData_2656);
                } else {
                  this.modelInteractions.set(varData_2656, varData_2658);
                }
              }
            } catch (err) {
              isDisabled_62 = true;
              varData_2654 = err;
            } finally {
              try {
                if (!isEnabled_2 && loopIdx.return != null) {
                  loopIdx.return();
                }
              } finally {
                if (isDisabled_62) {
                  throw varData_2654;
                }
              }
            }
          }
        }
      }, {
        key: "UpdateInteraction",
        value: function _0x282b48(param_1) {
          var varData_2660 = this;
          return handleAction_302(function() {
            var varData_2661;
            return handleAction_317(this, function(param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  if (!varData_2660.interactions.has(param_1.id)) {
                    return [3, 2];
                  }
                  varData_2661 = varData_2660.interactions.get(param_1.id);
                  varData_2661.removeZone();
                  varData_2661.entity = 0;
                  if (param_1.coords) {
                    varData_2661.coords = param_1.coords;
                    varData_2661.renderCoords = param_1.coords;
                  }
                  if (param_1.options) {
                    varData_2661.options = param_1.options;
                  }
                  if (param_1.context) {
                    varData_2661.context = param_1.context;
                  }
                  return [4, varData_1420.wait(100)];
                case 1:
                  param_1_1.sent();
                  varData_2660.interactions.set(param_1.id, varData_2661);
                  varData_2661.addZone();
                  param_1_1.label = 2;
                case 2:
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "checkInteractions",
        value: function _0x1f09ce() {
          var varData_2662 = this;
          setTick(handleAction_302(function() {
            var varData_2663;
            var varData_2664;
            var varData_2665;
            var varData_2666;
            var varData_2667;
            var varData_2668;
            var varData_2669;
            var varData_2670;
            var varData_2671;
            var varData_2672;
            var varData_2673;
            var varData_2674;
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
            var varData_2688;
            var varData_2689;
            var varData_2690;
            var varData_2691;
            var varData_2692;
            var varData_2693;
            var varData_2694;
            var varData_2695;
            var varData_2696;
            return handleAction_317(this, function(param_1) {
              switch (param_1.label) {
                case 0:
                  param_1.trys.push([0, 6, , 7]);
                  return [4, varData_2302.get()];
                case 1:
                  varData_2663 = param_1.sent();
                  if (!varData_2663) {
                    return [2];
                  }
                  return [4, varData_2425()];
                case 2:
                  varData_2664 = param_1.sent();
                  if (varData_2664) {
                    varData_2665 = true;
                    varData_2666 = false;
                    varData_2667 = void 0;
                    try {
                      for (varData_2668 = varData_2664[Symbol.iterator](); !(varData_2665 = (varData_2669 = varData_2668.next()).done); varData_2665 = true) {
                        varData_2670 = handleAction_314(varData_2669.value, 2);
                        varData_2671 = varData_2670[0];
                        varData_2672 = varData_2670[1];
                        varData_2673 = varData_2662.modelInteractions.get(varData_2671);
                        if (!varData_2673) {
                          continue;
                        }
                        varData_2674 = true;
                        varData_2675 = false;
                        varData_2676 = void 0;
                        try {
                          for (varData_2677 = varData_2672.entries()[Symbol.iterator](); !(varData_2674 = (varData_2678 = varData_2677.next()).done); varData_2674 = true) {
                            varData_2679 = handleAction_314(varData_2678.value, 2);
                            varData_2680 = varData_2679[0];
                            varData_2681 = varData_2679[1];
                            handleAction_229(varData_2681, "modelInteractions");
                          }
                        } catch (err) {
                          varData_2675 = true;
                          varData_2676 = err;
                        } finally {
                          try {
                            if (!varData_2674 && varData_2677.return != null) {
                              varData_2677.return();
                            }
                          } finally {
                            if (varData_2675) {
                              throw varData_2676;
                            }
                          }
                        }
                      }
                    } catch (err) {
                      varData_2666 = true;
                      varData_2667 = err;
                    } finally {
                      try {
                        if (!varData_2665 && varData_2668.return != null) {
                          varData_2668.return();
                        }
                      } finally {
                        if (varData_2666) {
                          throw varData_2667;
                        }
                      }
                    }
                  }
                  return [4, varData_2491()];
                case 3:
                  varData_2682 = param_1.sent();
                  if (varData_2682) {
                    varData_2683 = true;
                    varData_2684 = false;
                    varData_2685 = void 0;
                    try {
                      for (varData_2686 = varData_2682[Symbol.iterator](); !(varData_2683 = (varData_2687 = varData_2686.next()).done); varData_2683 = true) {
                        varData_2688 = varData_2687.value;
                        handleAction_229(varData_2688, "vehicleInteraction");
                      }
                    } catch (err) {
                      varData_2684 = true;
                      varData_2685 = err;
                    } finally {
                      try {
                        if (!varData_2683 && varData_2686.return != null) {
                          varData_2686.return();
                        }
                      } finally {
                        if (varData_2684) {
                          throw varData_2685;
                        }
                      }
                    }
                  }
                  return [4, varData_2541()];
                case 4:
                  varData_2689 = param_1.sent();
                  if (varData_2689) {
                    varData_2690 = true;
                    varData_2691 = false;
                    varData_2692 = void 0;
                    try {
                      for (varData_2693 = varData_2689[Symbol.iterator](); !(varData_2690 = (varData_2694 = varData_2693.next()).done); varData_2690 = true) {
                        varData_2695 = varData_2694.value;
                        handleAction_229(varData_2695, "pedInteraction");
                      }
                    } catch (err) {
                      varData_2691 = true;
                      varData_2692 = err;
                    } finally {
                      try {
                        if (!varData_2690 && varData_2693.return != null) {
                          varData_2693.return();
                        }
                      } finally {
                        if (varData_2691) {
                          throw varData_2692;
                        }
                      }
                    }
                  }
                  return [4, varData_2662.checkKnownInteractions(varData_2663)];
                case 5:
                  param_1.sent();
                  return [3, 7];
                case 6:
                  varData_2696 = param_1.sent();
                  varData_1491.error("------------------------------\nERROR IN checkInteractions tick:", varData_2696);
                  return [3, 7];
                case 7:
                  return [4, varData_1420.wait(1e3)];
                case 8:
                  param_1.sent();
                  return [2];
              }
            });
          }));
        }
      }, {
        key: "checkKnownInteractions",
        value: function _0x3c4994(param_1) {
          return handleAction_302(function() {
            var varData_2697;
            var varData_2698;
            var varData_2699;
            var varData_2700;
            var varData_2701;
            var varData_2702;
            var varData_2703;
            var varData_2704;
            var varData_2705;
            var varData_2706;
            return handleAction_317(this, function(param_1_1) {
              switch (param_1_1.label) {
                case 0:
                  varData_2697 = true;
                  varData_2698 = false;
                  varData_2699 = void 0;
                  param_1_1.label = 1;
                case 1:
                  param_1_1.trys.push([1, 8, 9, 10]);
                  varData_2700 = dataMap_3.entries()[Symbol.iterator]();
                  param_1_1.label = 2;
                case 2:
                  if (varData_2697 = (varData_2701 = varData_2700.next()).done) {
                    return [3, 7];
                  }
                  varData_2702 = handleAction_314(varData_2701.value, 2);
                  varData_2703 = varData_2702[0];
                  varData_2704 = varData_2702[1];
                  if (isDisabled_3) {
                    console.log("knownInteraction", varData_2703);
                  }
                  param_1_1.label = 3;
                case 3:
                  param_1_1.trys.push([3, 5, , 6]);
                  return [4, varData_2704.handleCreate(param_1.coords)];
                case 4:
                  param_1_1.sent();
                  return [3, 6];
                case 5:
                  varData_2705 = param_1_1.sent();
                  varData_1491.error(`------------------------------
ERROR IN handleCreate for interaction ${varData_2703}:`, varData_2705);
                  return [3, 6];
                case 6:
                  varData_2697 = true;
                  return [3, 2];
                case 7:
                  return [3, 10];
                case 8:
                  varData_2706 = param_1_1.sent();
                  varData_2698 = true;
                  varData_2699 = varData_2706;
                  return [3, 10];
                case 9:
                  try {
                    if (!varData_2697 && varData_2700.return != null) {
                      varData_2700.return();
                    }
                  } finally {
                    if (varData_2698) {
                      throw varData_2699;
                    }
                  }
                  return [7];
                case 10:
                  if (isDisabled_3) {
                    console.log("knownInteractions-size", dataMap_3.size);
                  }
                  return [2];
              }
            });
          })();
        }
      }, {
        key: "addToRender",
        value: function _0x407b1b(param_1) {
          var varData_2707 = this;
          return handleAction_302(function() {
            return handleAction_317(this, function(param_1_1) {
              if (!varData_2707.activeInteractions.has(param_1.id) && param_1.isEnabled) {
                varData_2707.activeInteractions.set(param_1.id, param_1);
                if (!varData_2707.renderTick && varData_2707.activeInteractions.size === 1) {
                  varData_2707.renderInteractions();
                }
              }
              return [2];
            });
          })();
        }
      }, {
        key: "removeToRender",
        value: function _0x14f6dc(param_1) {
          if (this.activeInteractions.has(param_1.id)) {
            param_1.handleDestroy();
            this.activeInteractions.delete(param_1.id);
            if (this.activeInteractions.size === 0) {
              this.clearInteractions();
            }
          }
        }
      }, {
        key: "renderInteractions",
        value: function _0x1be7b4() {
          var varData_2708 = this;
          var numericVal_91 = 0;
          this.renderTick = setTick(function() {
            if (isDisabled_62) {
              return;
            }
            var isEnabled_2 = true;
            var isDisabled_62 = false;
            var varData_2709 = void 0;
            try {
              for (var loopIdx = varData_2708.activeInteractions.values()[Symbol.iterator](), loopIdx_1; !(isEnabled_2 = (loopIdx_1 = loopIdx.next()).done); isEnabled_2 = true) {
                var varData_2710 = loopIdx_1.value;
                if (!varData_2710.isEnabled) {
                  varData_2708.removeToRender(varData_2710);
                  continue;
                }
                varData_2710.render();
              }
            } catch (err) {
              isDisabled_62 = true;
              varData_2709 = err;
            } finally {
              try {
                if (!isEnabled_2 && loopIdx.return != null) {
                  loopIdx.return();
                }
              } finally {
                if (isDisabled_62) {
                  throw varData_2709;
                }
              }
            }
            var varData_2711 = varData_2708.currentInteraction;
            if (varData_2711) {
              DisableControlAction(0, varData_1256.E, true);
              DisableControlAction(0, 142, true);
              if (varData_2711.options.length > 1) {
                DisableControlAction(2, 16, true);
                DisableControlAction(2, 17, true);
                if (IsDisabledControlPressed(2, 16)) {
                  varData_2711.mouseWheel(-1);
                }
                if (IsDisabledControlPressed(2, 17)) {
                  varData_2711.mouseWheel(1);
                }
              }
              var varData_2712 = handleAction_151();
              if (IsDisabledControlJustReleased(0, varData_1256.E) || varData_2712 && IsDisabledControlJustPressed(0, 142)) {
                if (varData_2711) {
                  var varData_2713 = GetGameTimer() - numericVal_91;
                  if (varData_2713 < 500) {
                    return;
                  }
                  numericVal_91 = GetGameTimer();
                  varData_2708.onAction();
                }
              }
            }
          });
          var varData_2714 = this;
          this.closestTick = setTick(handleAction_302(function() {
            var varData_2715;
            var varData_2716;
            var varData_2717;
            var varData_2718;
            var varData_2719;
            var varData_2720;
            var varData_2721;
            var varData_2722;
            var varData_2723;
            var varData_2724;
            var varData_2725;
            var varData_2726;
            var varData_2727;
            var varData_2728;
            var varData_2729;
            var varData_2730;
            var varData_2731;
            var varData_2732;
            var varData_2733;
            var varData_2734;
            var varData_2735;
            var varData_2736;
            var varData_2737;
            var varData_2738;
            var varData_2739;
            var varData_2740;
            var varData_2741;
            var varData_2742;
            var varData_2743;
            var varData_2744;
            var varData_2745;
            var varData_2746;
            var varData_2747;
            var varData_2748;
            return handleAction_317(this, function(param_1) {
              switch (param_1.label) {
                case 0:
                  varData_2714.currentInteraction = void 0;
                  varData_2715 = null;
                  varData_2716 = Infinity;
                  varData_2717 = handleAction_314(GetActiveScreenResolution(), 2);
                  varData_2718 = varData_2717[0];
                  varData_2719 = varData_2717[1];
                  return [4, varData_2302.get()];
                case 1:
                  varData_2720 = param_1.sent();
                  if (!varData_2720) {
                    return [2];
                  }
                  varData_2721 = new varData_1273(varData_2720.coords);
                  varData_2722 = true;
                  varData_2723 = false;
                  varData_2724 = void 0;
                  try {
                    for (varData_2725 = varData_2714.activeInteractions.values()[Symbol.iterator](); !(varData_2722 = (varData_2726 = varData_2725.next()).done); varData_2722 = true) {
                      varData_2727 = varData_2726.value;
                      if (!varData_2727.canInteract) {
                        continue;
                      }
                      varData_2728 = handleAction_151();
                      varData_2729 = varData_2727.getRenderCoords();
                      varData_2730 = handleAction_314(GetScreenCoordFromWorldCoord(varData_2729[0], varData_2729[1], varData_2729[2]), 3);
                      varData_2731 = varData_2730[0];
                      varData_2732 = varData_2730[1];
                      varData_2733 = varData_2730[2];
                      varData_2734 = [varData_2718 / 2 / varData_2718, varData_2719 / 2 / varData_2719];
                      varData_2735 = varData_2734[0];
                      varData_2736 = varData_2734[1];
                      varData_2737 = [Math.abs(varData_2735 - varData_2732), Math.abs(varData_2736 - varData_2733)];
                      varData_2738 = varData_2737[0];
                      varData_2739 = varData_2737[1];
                      varData_2740 = varData_2721.getDistance(varData_2729);
                      varData_2741 = varData_2728 ? 0.01 : varData_1420.MathUtils.getMapRange([5, 1], [0.1, 0.35], varData_2740);
                      if (varData_2740 > 420) {
                        varData_2714.removeToRender(varData_2727);
                      }
                      if (varData_2738 < varData_2741 && varData_2739 < varData_2741 + 0.1) {
                        varData_2742 = Math.sqrt(varData_2738 * varData_2738 + varData_2739 * varData_2739);
                        if (varData_2742 < varData_2716) {
                          varData_2716 = varData_2742;
                          varData_2715 = varData_2727;
                        }
                      }
                    }
                  } catch (err) {
                    varData_2723 = true;
                    varData_2724 = err;
                  } finally {
                    try {
                      if (!varData_2722 && varData_2725.return != null) {
                        varData_2725.return();
                      }
                    } finally {
                      if (varData_2723) {
                        throw varData_2724;
                      }
                    }
                  }
                  varData_2743 = true;
                  varData_2744 = false;
                  varData_2745 = void 0;
                  try {
                    for (varData_2746 = varData_2714.activeInteractions.values()[Symbol.iterator](); !(varData_2743 = (varData_2747 = varData_2746.next()).done); varData_2743 = true) {
                      varData_2748 = varData_2747.value;
                      if (varData_2748.isHover && varData_2748 !== varData_2715) {
                        varData_2748.handleHover(false);
                      }
                    }
                  } catch (err) {
                    varData_2744 = true;
                    varData_2745 = err;
                  } finally {
                    try {
                      if (!varData_2743 && varData_2746.return != null) {
                        varData_2746.return();
                      }
                    } finally {
                      if (varData_2744) {
                        throw varData_2745;
                      }
                    }
                  }
                  if (varData_2715) {
                    if (!varData_2715.isHover) {
                      varData_2715.handleHover(true);
                    }
                    varData_2714.currentInteraction = varData_2715;
                  }
                  return [4, varData_1420.wait(250)];
                case 2:
                  param_1.sent();
                  return [2];
              }
            });
          }));
        }
      }, {
        key: "onAction",
        value: function _0x5b387b() {
          handleAction_150();
          var varData_2749 = this.currentInteraction;
          if (!varData_2749) {
            return;
          }
          if (!varData_2749.canRender) {
            return;
          }
          var varData_2750 = varData_2749.filteredOptions?.[varData_2749.selectedIndex];
          if (!varData_2750) {
            return;
          }
          var varData_2751 = varData_2749.id.includes("hospital:checkIn");
          var varData_2752 = varData_1433.Sync.isPed.isPed("handcuffed") && !varData_2751;
          var varData_2753 = varData_1433.Sync.wounds.isDead() && !varData_2751;
          var varData_2754 = varData_1433.Sync["np-objects"].IsPlacingObject();
          var varData_2755 = varData_1433.Sync.editor.IsInEditor();
          if (varData_2752 || varData_2753 || varData_2754 || varData_2755) {
            return;
          }
          if (handleAction_309(varData_2749, varData_2338)) {
            var varData_2756;
            if (((varData_2756 = varData_2749.context.flag) === null || varData_2756 === void 0 ? void 0 : varData_2756.includes("isNPC")) && varData_2749.context.npcId) {
              var varData_2757 = handleAction_314(varData_1433.Sync["np-npcs"].FindNPCByHash(GetHashKey(varData_2749.context.npcId)), 2);
              var varData_2758 = varData_2757[0];
              var varData_2759 = varData_2757[1];
              if (!varData_2758) {
                return;
              }
              if (!varData_2750) {
                return;
              }
              if (varData_2750.eventSDK) {
                varData_1483.emit(varData_2750.eventSDK, varData_2750.parameters, varData_2759.entity, varData_2749.context);
              } else if (varData_2750.event) {
                emit(varData_2750.event, varData_2750.parameters, varData_2759.entity, varData_2749.context);
              }
              return;
            }
          }
          if (varData_2750.eventSDK) {
            varData_1483.emit(varData_2750.eventSDK, varData_2750.parameters, varData_2749.entity);
          } else if (varData_2750.event) {
            emit(varData_2750.event, varData_2750.parameters, varData_2749.entity);
          }
        }
      }, {
        key: "clearInteractions",
        value: function _0x6340c5() {
          if (this.renderTick) {
            clearTick(this.renderTick);
            this.renderTick = void 0;
          }
          if (this.closestTick) {
            clearTick(this.closestTick);
            this.closestTick = void 0;
          }
        }
      }]);
      return handleAction_320;
    })();
    handleAction_308(varData_2576, "interactions", /* @__PURE__ */ new Map());
    handleAction_308(varData_2576, "modelInteractions", /* @__PURE__ */ new Map());
    handleAction_308(varData_2576, "vehicleInteractions", /* @__PURE__ */ new Map());
    handleAction_308(varData_2576, "vehicleBoneInteractions", /* @__PURE__ */ new Map());
    handleAction_308(varData_2576, "pedInteractions", /* @__PURE__ */ new Map());
    handleAction_308(varData_2576, "activeInteractions", /* @__PURE__ */ new Map());
    handleAction_308(varData_2576, "renderTick", void 0);
    handleAction_308(varData_2576, "closestTick", void 0);
    handleAction_308(varData_2576, "toggleInteractions", false);
    handleAction_308(varData_2576, "ratio", 0);
    handleAction_308(varData_2576, "currentInteraction", void 0);
    ;
    var varData_2760 = new varData_1910({
      codename: "interactions",
      version: "0.0.0"
    });
    varData_2107.Init();
    varData_2576.Init();
    varData_2262.Init();
    var isDisabled_6 = false;
    on("np-preferences:setPreferences", function(param_1) {
      isDisabled_6 = param_1["interactions.disablePrompts"];
    });
  })();
})();
